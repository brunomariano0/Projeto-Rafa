import { motion } from "framer-motion";

const QuemSomos = () => {
  const stats = [
    { number: "5+", text: "Anos no Mercado" },
    { number: "400+", text: "Projetos Concluídos" },
    { number: "300+", text: "Clientes Satisfeitos" },
    { number: "20+", text: "Prêmios Ganhos" },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-gray-600 uppercase tracking-wider mb-6">Quem Somos</h2>
        <h3 className="text-[2.5rem] font-bold text-[#0B2543] leading-tight mb-8">
          A PARTIR DE UM SONHO EM COMUM DE 3 IRMÃOS
        </h3>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg">
          a A Tetra Empreteira surgiu para facilitar um serviço onde o cliente encontra em um novo
          modelo de empresa, com soluções completas de qualidade e excelência e 100% otimizadas,
          desde o desenvolvimento do seu projeto até a execução total da sua obra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2
              }
            }}
            className="bg-[#0B2543] rounded-2xl p-8 text-center shadow-lg shadow-cyan-500/20"
          >
            <h4 className="text-[#00E1FF] text-5xl font-bold mb-2">
              {stat.number}
            </h4>
            <p className="text-white text-lg">
              {stat.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuemSomos;