import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <main className="px-4 md:px-12 pt-8 pb-20 overflow-hidden">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-4 flex flex-col">
          <motion.div variants={itemVariants} className="aspect-[4/3] overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop&grayscale"
              alt="Detail Shot"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
          
          {/* Text bawah kiri */}
          <motion.p variants={itemVariants} className="text-xs md:text-sm font-bold uppercase leading-relaxed tracking-wide max-w-xs">
            Stay grounded in faith and style — Khalif’s way of mindful living.
          </motion.p>
        </div>

        {/* --- CENTER COLUMN --- */}
        <motion.div variants={itemVariants} className="lg:col-span-4">
          <div className="aspect-[3/4] lg:aspect-[2/3] overflow-hidden h-full">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop&grayscale"
              alt="Full Body Fashion"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-4 flex flex-col lg:pt-32">
          <motion.div variants={itemVariants} className="aspect-[4/3] overflow-hidden mb-4">
            <img
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1000&auto=format&fit=crop&grayscale"
              alt="Back view"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* Text bawah kanan */}
          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm font-bold uppercase leading-relaxed tracking-wide text-right ml-auto max-w-xs"
          >
            Discover stories of purpose, growth, and digital dakwah for Gen Z.
          </motion.p>

          {/* Link */}
          <motion.div variants={itemVariants} className="flex justify-end mt-3">
            <a
              href="#"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity dark:text-white"
            >
              Learn More <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

      </motion.div>
    </main>
  );
};

export default HeroSection;
