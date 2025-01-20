const Footer = () => {
    const socialLinks = [
      {
        name: 'Facebook',
        url: 'https://facebook.com/suaempresa',
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/suaempresa',
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/suaempresa',
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: 'WhatsApp',
        url: 'https://wa.me/seunumero',
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M20.472 3.528C18.208 1.264 15.208 0 12 0 5.432 0 0 5.432 0 12c0 2.136.576 4.208 1.632 6.016L0 24l6.072-1.592c1.728.944 3.72 1.592 5.928 1.592 6.568 0 12-5.432 12-12 0-3.208-1.264-6.208-3.528-8.472zM12 22.08c-1.776 0-3.52-.48-5.04-1.384l-.36-.216-3.744.984.992-3.648-.232-.376C2.544 15.856 2.08 13.968 2.08 12 2.08 6.576 6.576 2.08 12 2.08c2.88 0 5.584 1.12 7.616 3.16s3.16 4.736 3.16 7.616c0 5.424-4.496 9.92-10.016 9.92zM17.472 14.384c-.296-.152-1.752-.872-2.024-.968-.272-.096-.472-.144-.672.144-.2.288-.768.968-.944 1.168-.176.2-.352.224-.648.072-.296-.152-1.248-.464-2.384-1.48-.88-.784-1.48-1.76-1.656-2.056-.176-.296-.016-.456.128-.608.136-.128.296-.336.448-.504.152-.168.2-.288.304-.488.096-.2.048-.376-.024-.528-.072-.144-.672-1.608-.92-2.2-.24-.584-.488-.504-.672-.504-.176 0-.368-.008-.568-.008-.2 0-.528.072-.8.376-.272.304-1.04 1.016-1.04 2.48 0 1.464 1.064 2.88 1.216 3.08.152.2 2.096 3.2 5.072 4.488.712.304 1.264.488 1.696.624.712.224 1.36.192 1.872.12.568-.08 1.752-.72 2-1.416.248-.696.248-1.296.176-1.416-.072-.12-.272-.192-.568-.336z" clipRule="evenodd" />
          </svg>
        ),
      },
    ];
  
    return (
      <footer className="bg-[#0B2543] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e Sobre */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <img
                src="/caminho-do-seu-logo.png"
                alt="Logo da Empresa"
                className="h-12 mb-6"
              />
              <p className="text-gray-300 mb-6">
                Referência em qualidade de execução de serviços de construção, 
                com soluções completas para seu projeto.
              </p>
            </div>
  
            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Seu Endereço Completo
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contato@suaempresa.com
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (00) 0000-0000
                </li>
              </ul>
            </div>
  
            {/* Links Rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-martini-gold transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-martini-gold transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-martini-gold transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-martini-gold transition-colors">Projetos</a></li>
                <li><a href="#" className="hover:text-martini-gold transition-colors">Contato</a></li>
              </ul>
            </div>
  
            {/* Redes Sociais */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-martini-gold transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Tetra Empreteira. Todos os direitos reservados. | Desenvolvido<a href="https://brunomarianodev.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-martini-gold transition-colors"> GB Codeworks
                </a></p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;