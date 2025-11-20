import React from 'react';
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BentoSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const glassCardVariants = {
    hidden: { y: 20, opacity: 0, x: -20 },
    visible: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full px-4 md:px-12 py-20 bg-white transition-colors duration-300">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[800px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 h-full">

          {/* Top Card - Text Section */}
          <motion.div
            variants={cardVariants}
            className="bg-[#F8F8F8] dark:bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between flex-grow min-h-[300px] hover:shadow-lg transition-all duration-300 group"
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] text-black dark:text-white group-hover:translate-x-2 transition-transform duration-500">
              Khalif <br /> for Gen Z Muslims
            </h2>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-4">
              Real stories, real deen, real peace — no subscription, no stress.
            </p>
          </motion.div>

          {/* Middle Row - Images */}
          <div className="grid grid-cols-2 gap-6 h-64 md:h-72">
            <motion.div variants={cardVariants} className="relative rounded-[2rem] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop"
                alt="Faith & Chill"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            </motion.div>

            <motion.div variants={cardVariants} className="relative rounded-[2rem] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop"
                alt="Peaceful Mind"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>

          {/* Bottom Card - CTA */}
          <motion.div
            variants={cardVariants}
            className="bg-[#E8E8E8] dark:bg-neutral-800 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 hover:bg-[#E0E0E0] dark:hover:bg-neutral-700 transition-colors"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                No Paywall, Just Purpose
              </span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none text-black dark:text-white">
                All content,<br />all free — always.
              </h3>
            </div>
            <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-gray-800 transition-colors duration-300 shadow-sm">
              Start Exploring
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Big Image */}
        <motion.div
          variants={cardVariants}
          className="relative rounded-[2.5rem] overflow-hidden min-h-[600px] lg:h-full group"
        >
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
            alt="Khalif Vibes"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Floating Glass Cards */}
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Glass Card 1 */}
            <motion.div
              variants={glassCardVariants}
              className="bg-white dark:bg-neutral-900 p-6 rounded-[1.5rem] flex flex-col justify-between min-h-[140px] hover:translate-y-[-4px] transition-transform duration-300"
            >
              <h4 className="text-xl font-bold tracking-tight leading-tight text-black dark:text-white">
                Learn the Deen <br />your way.
              </h4>
              <div className="self-end p-2 rounded-full border border-black/10 dark:border-white/10 mt-2">
                <ChevronRight size={16} className="dark:text-white" />
              </div>
            </motion.div>

            {/* Glass Card 2 */}
            <motion.div
              variants={glassCardVariants}
              className="bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-[1.5rem] text-white flex flex-col justify-between min-h-[140px] hover:translate-y-[-4px] transition-transform duration-300"
            >
              <h4 className="text-xl font-bold tracking-tight leading-tight">
                All vibes, <br />zero fees.
              </h4>
              <div className="self-end p-2 rounded-full border border-white/30 mt-2">
                <ArrowRight size={16} className="text-white" />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BentoSection;
