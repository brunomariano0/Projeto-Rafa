const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configuração do CORS mais específica
app.use(cors({
  origin: 'http://localhost:5173', // Ajuste para a URL do seu frontend
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Middleware para logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Configuração do transportador de email
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Teste a conexão do email ao iniciar o servidor
transporter.verify(function (error, success) {
  if (error) {
    console.log('Erro na configuração do email:', error);
  } else {
    console.log('Servidor de email pronto');
  }
});

app.post('/api/contato', async (req, res) => {
  console.log('Recebido request:', req.body); // Log para debug

  const { nome, email, telefone, assunto, mensagem } = req.body;

  // Validação básica
  if (!nome || !email || !mensagem) {
    return res.status(400).json({
      success: false,
      message: 'Por favor, preencha todos os campos obrigatórios.'
    });
  }

  try {
    // Envia email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Novo contato: ${assunto || 'Sem assunto'}`,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Assunto:</strong> ${assunto || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso!'
    });
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    
    res.status(500).json({
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
      error: error.message
    });
  }
});

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ message: 'API está funcionando!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});