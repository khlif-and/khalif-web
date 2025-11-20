import React from 'react';
import { motion } from 'framer-motion';

const masterpieces = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500&auto=format&fit=crop",
    rotate: "-rotate-12",
    zIndex: "z-10",
    translateY: "translate-y-8"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=500&auto=format&fit=crop",
    rotate: "-rotate-6",
    zIndex: "z-20",
    translateY: "translate-y-4"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?q=80&w=500&auto=format&fit=crop",
    rotate: "rotate-0",
    zIndex: "z-30",
    translateY: "translate-y-0"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=500&auto=format&fit=crop",
    rotate: "rotate-6",
    zIndex: "z-20",
    translateY: "translate-y-4"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=500&auto=format&fit=crop",
    rotate: "rotate-12",
    zIndex: "z-10",
    translateY: "translate-y-8"
  }
];

const KitabSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 }
    }
  };

  const fadeUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: [0.2, 1, 0.4, 1] }
    }
  };

  const cardContentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: [0.2, 1, 0.4, 1] }
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-24 overflow-hidden relative font-sans">
      {/* --- BACKGROUND TEXTURE --- */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <motion.div
        className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* --- HEADLINE --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <motion.h2
            variants={fadeUpVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]"
          >
            In Khalif, you’ll find stories <br />
            that TikTok never told — <br />
            from prophets, companions, and legends of deen.
          </motion.h2>

          {/* Tag BELOW headline */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-6 inline-block bg-[#2962FF] text-white px-4 py-1.5 rounded-full font-bold text-sm md:text-base shadow-lg"
          >
            @khalifstories
          </motion.div>
        </div>

        {/* --- CARDS FAN LAYOUT --- */}
        <div className="flex justify-center items-center h-[300px] md:h-[400px] w-full mb-12 md:mb-8 perspective-1000">
          <div className="relative flex justify-center items-center w-full max-w-4xl">
            {masterpieces.map((card, index) => (
              <div
                key={card.id}
                className={`
                  relative w-40 h-40 md:w-56 md:h-56 rounded-3xl shadow-2xl 
                  transition-all duration-500 ease-out hover:scale-110 hover:z-50 hover:rotate-0 cursor-pointer
                  border-4 border-white ring-1 ring-black/5
                  ${card.rotate} ${card.zIndex} ${card.translateY}
                  -ml-12 first:ml-0 md:-ml-20 md:first:ml-0
                `}
              >
                <motion.div variants={cardContentVariants} className="w-full h-full">
                  <img
                    src={card.image}
                    alt="Khalif Classic Story"
                    className="w-full h-full object-cover rounded-[1.2rem]"
                  />
                  {index === 4 && (
                    <div className="absolute -top-8 -right-4 bg-[#4CAF50] text-white text-[10px] px-2 py-1 rounded-full shadow-sm rotate-12">
                      @hiddenwisdom
                      <div className="absolute -bottom-1 left-2 w-2 h-2 bg-[#4CAF50] transform rotate-45"></div>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* --- DESCRIPTION --- */}
        <motion.p
          variants={fadeUpVariants}
          className="text-center text-gray-600 font-medium text-base md:text-lg mb-10 max-w-xl leading-relaxed"
        >
          Old books, deep vibes.  
          Learn about the prophets, companions, and hidden gems of Islam —  
          stories that inspire, humble, and hit different.
        </motion.p>

        {/* --- CTA BUTTONS --- */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold text-sm transition-transform hover:scale-105 hover:bg-black shadow-lg shadow-black/20">
            Read a Story
          </button>
          <button className="text-[#1A1A1A] px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
            Explore More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default KitabSection;
