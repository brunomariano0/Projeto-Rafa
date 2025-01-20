import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QuemSomos from './componetes/QuemSomos.jsx'
import Projetos from './componetes/Projetos.jsx'
import Servicos from './componetes/Servicos.jsx'
import Footer from './componetes/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <QuemSomos />
    <Projetos />
    <Servicos />
    <Footer />
  </StrictMode>,
)
