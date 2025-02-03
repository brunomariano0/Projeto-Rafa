import { useState } from 'react';
import { Link } from 'react-scroll';
import './App.css'


function App() {
  return (
    <>
      <header className="fixed w-full bg-martini-blue text-white px-16 py-4 flex justify-between items-center z-50">
        <div className="flex items-center">
          {/* Substitua pelo seu logo */}
          <div className="text-left">
            <h1 className="text-xl font-bold">Tetra Empreteira</h1>
            <p className="text-xs">CONSTRUÇÕES E TECNOLOGIA</p>
          </div>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li>
            <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="hover:text-martini-gold transition-colors cursor-pointer">Home</Link></li>
            
            <li>
          <Link 
            to="sobre" 
            smooth={true} 
            duration={500} 
            className="hover:text-martini-gold transition-colors cursor-pointer"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link 
            to="servicos" 
            smooth={true} 
            duration={500} 
            className="hover:text-martini-gold transition-colors cursor-pointer"
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link 
            to="projetos" 
            smooth={true} 
            duration={500} 
            className="hover:text-martini-gold transition-colors cursor-pointer"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link 
            to="contato" 
            smooth={true} 
            duration={500} 
            className="hover:text-martini-gold transition-colors cursor-pointer"
          >
            Contato
          </Link>
        </li>
           
          </ul>
        </nav>

        <button className="bg-martini-gold text-black px-6 py-2 hover:bg-opacity-90 transition-colors">
          Solicite um orçamento
        </button>
      </header>

      <main className="relative min-h-screen" id='home'>
        {/* Hero Section */}
        <div className="relative h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/src/assets/img/bg.jpg')] bg-cover bg-center opacity-90">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-16">
            <div className="text-white max-w-3xl">
              <h2 className="text-5xl font-bold leading-tight mb-6">
                Referência em qualidade<br />
                de execução de serviços<br />
                de construção.
              </h2>
              <p className="text-xl mb-8">
                A equipe Da Tetra Empreteira é unida pelo propósito de<br />
                realizar o melhor serviço para seus clientes.
              </p>
              <button className="bg-martini-gold text-black px-8 py-3 text-lg hover:bg-opacity-90 transition-colors">
                Conheça
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511917661314" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors z-50"
      >
        {/* WhatsApp Icon */}
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}

export default App
