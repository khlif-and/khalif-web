import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import bgLanding from '../assets/images/img_landing_assets_1.webp';
import thumbImage from '../assets/images/img_landing_assets_thumbnail_1.webp';
import userPic from '../assets/images/img_landing_assets_pic_1.webp';

const ReminderSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: [0.2, 1, 0.4, 1] },
    },
  };

  return (
    <section className="w-full min-h-screen bg-[#050505] text-white relative overflow-hidden font-sans flex flex-col">
      {/* --- BACKGROUND IMAGE --- */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <img
          src={bgLanding}
          alt="Background Portrait"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-12 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* HEADER */}
        <div className="flex justify-between items-start">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight max-w-xs"
          >
            DON'T BE SAD <br /> ALLAH <br /> IS WITH <br /> US 🌙
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="group relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-lime-400 to-yellow-400 opacity-90 group-hover:scale-110 transition-transform duration-500" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center gap-1">
              <Play size={16} fill="white" className="text-white" />
              <span className="text-xs font-bold tracking-widest text-white">
                PLAY
              </span>
            </div>
          </motion.div>
        </div>

        {/* BIG TEXT */}
        <motion.div
          variants={itemVariants}
          className="flex-grow flex items-center justify-center py-12"
        >
          <h1 className="text-[13vw] md:text-[12vw] leading-none font-sans font-semibold tracking-tight flex items-center gap-4 md:gap-12 mix-blend-overlay text-white opacity-90 select-none">
            SABAR
            <div className="relative flex items-center justify-center w-[8vw] h-[8vw]">
              <div className="absolute w-full h-[2px] bg-white/30" />
              <div className="absolute h-full w-[2px] bg-white/30" />
            </div>
            SHOLAT
          </h1>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-white/10 pt-8">
          {/* Left Card */}
          <motion.div
            variants={itemVariants}
            className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between min-h-[240px] hover:bg-white/10 transition-colors group"
          >
            <p className="text-xl font-light text-gray-300 max-w-sm leading-relaxed">
              When life feels heavy, remember — <br /> Allah never leaves your side 🤍
            </p>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-4">
                <img
                  src={userPic}
                  alt="User 1"
                  className="w-14 h-14 rounded-full border-2 border-black"
                />
                <img
                  src={userPic}
                  alt="User 2"
                  className="w-14 h-14 rounded-full border-2 border-black"
                />
              </div>
              <button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowUpRight size={24} />
              </button>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={itemVariants}
            className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col md:flex-row justify-between gap-6 min-h-[240px] hover:bg-white/10 transition-colors"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-black italic tracking-tighter">
                  KHALIF REMINDERS
                </div>
                <span className="text-xs border border-white/40 px-1 rounded">
                  DAILY
                </span>
              </div>
              <div className="mt-auto">
                <div className="flex gap-4 text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-3 tracking-wider">
                  <span>[ Calm ]</span>
                  <span>[ Faith ]</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  “Don’t let sadness win — <br /> Allah’s love never fades.”
                </h3>
              </div>
            </div>
            <div className="w-full md:w-48 h-48 md:h-full shrink-0 overflow-hidden">
              <img
                src={thumbImage}
                alt="Project Thumbnail"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReminderSection;
