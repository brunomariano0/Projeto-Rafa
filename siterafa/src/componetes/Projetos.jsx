import { motion } from "framer-motion";

const Projetos = () => {
  const projetos = [
    {
      titulo: "Projeto Residencial",
      categoria: "Construção",
      imagem: "/src/assets/img/casa_por_do_sol.png",
      descricao: "Residência moderna com acabamento premium"
    },
    {
      titulo: "Projeto Comercial",
      categoria: "Reforma",
      imagem: "/src/assets/img/comercial.jpg",
      descricao: "Centro empresarial com design contemporâneo"
    },
    {
      titulo: "Projeto Industrial",
      categoria: "Construção",
      imagem: "/src/assets/img/images.jpg",
      descricao: "Galpão industrial com tecnologia avançada"
    },
    {
      titulo: "Projeto Corporativo",
      categoria: "Design",
      imagem: "/src/assets/img/corporativo.jpg",
      descricao: "Escritórios com conceito open space"
    },

  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-gray-600 uppercase tracking-wider mb-4">Nossos Projetos</h2>
          <h3 className="text-4xl font-bold text-[#0B2543] mb-6">
            Conheça Alguns dos Nossos Trabalhos
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore nossa seleção de projetos executados com excelência e dedicação,
            demonstrando nossa experiência em diferentes segmentos da construção civil.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Imagem do Projeto */}
              <div className="aspect-w-16 aspect-h-12 w-full">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Overlay com informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="text-martini-gold text-sm font-medium mb-2 block">
                    {projeto.categoria}
                  </span>
                  <h4 className="text-xl font-bold mb-2">
                    {projeto.titulo}
                  </h4>
                  <p className="text-sm text-gray-200">
                    {projeto.descricao}
                  </p>
                  <button className="mt-4 px-6 py-2 bg-martini-gold text-black rounded-md 
                    hover:bg-opacity-90 transition-colors duration-300">
                    Ver Projeto
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Mais */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#0B2543] text-white rounded-md
            hover:bg-opacity-90 transition-colors duration-300">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projetos;