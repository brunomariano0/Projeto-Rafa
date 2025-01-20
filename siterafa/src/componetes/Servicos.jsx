import { motion } from "framer-motion";

const Servicos = () => {
  const servicos = [
    {
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      titulo: "Construção Civil",
      descricao: "Execução de obras residenciais, comerciais e industriais com alto padrão de qualidade.",
    },
    {
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titulo: "Projetos Estruturais",
      descricao: "Desenvolvimento de projetos estruturais com foco em segurança e otimização de recursos.",
    },
    {
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      titulo: "Reformas",
      descricao: "Reformas e adaptações com planejamento detalhado e execução precisa.",
    },
    {
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      titulo: "Projetos Arquitetônicos",
      descricao: "Criação de projetos arquitetônicos modernos e funcionais.",
    },
    {
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      titulo: "Gerenciamento de Obras",
      descricao: "Gestão completa do seu projeto, desde o planejamento até a entrega.",
    },
    {
      icone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      ),
      titulo: "Consultoria Técnica",
      descricao: "Assessoria especializada para seu projeto ou empreendimento.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-gray-600 uppercase tracking-wider mb-4">Nossos Serviços</h2>
          <h3 className="text-4xl font-bold text-[#0B2543] mb-6">
            Soluções Completas para Seu Projeto
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços especializados para atender todas as suas necessidades
            em construção e engenharia.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl 
                        transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Ícone */}
              <div className="text-martini-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {servico.icone}
              </div>

              {/* Título */}
              <h4 className="text-xl font-bold text-[#0B2543] mb-4">
                {servico.titulo}
              </h4>

              {/* Descrição */}
              <p className="text-gray-600">
                {servico.descricao}
              </p>

              {/* Botão Saiba Mais */}
              <button className="mt-6 text-martini-gold font-medium group-hover:text-[#0B2543] 
                               transition-colors duration-300 flex items-center">
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Botão CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-martini-gold text-black rounded-md
                           hover:bg-opacity-90 transition-colors duration-300">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Servicos;