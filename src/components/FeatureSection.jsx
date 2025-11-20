import React from "react";
import { ArrowRight, Menu, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// LOCAL ASSET
import featureImg1 from "../assets/images/img_landing_assets_feature_1.webp";

const FeatureSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scaleUpVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 40 },
    visible: {
      scale: 1, opacity: 1, y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const popVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1, opacity: 1,
      transition: { delay: 0.4, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="w-full px-4 md:px-12 py-24 bg-[#FAFAF9] text-black">

      {/* HEADER */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-3xl">
          <motion.h2
            variants={fadeUpVariants}
            className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9]"
          >
            Khalif <br />
            <span className="font-serif italic">Your Faith Buddy</span>
            <span className="text-4xl align-top ml-2 text-amber-500">*</span>
          </motion.h2>
        </div>

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 pb-2"
        >
          <div className="hidden md:block text-5xl font-light text-gray-300">/</div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold tracking-tight">Your chill space to stay grounded</p>
            <p className="text-sm text-gray-500">Read, reflect, and vibe with peace — anytime, anywhere.</p>
          </div>
          <button className="bg-black text-white pl-6 pr-4 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
            Jump In <ArrowRight size={16} />
          </button>
        </motion.div>
      </motion.div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">

        {/* LEFT IMAGE — NOW LOCAL */}
        <motion.div
          className="lg:col-span-7 relative h-[500px] rounded-[2.5rem] overflow-hidden group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleUpVariants}
        >
          <img
            src={featureImg1}
            alt="Reading Quran"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Floating Quote */}
          <motion.div
            variants={popVariants}
            className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg w-72"
          >
            <p className="text-sm text-gray-700 leading-relaxed italic">
              “Khalif — your faith buddy.  
              Read Qur’an, explore classic Islamic gems,  
              and vibe with goodness — all in one place.”
            </p>
          </motion.div>

          {/* Floating Pill */}
          <motion.div
            variants={popVariants}
            className="absolute bottom-12 right-12 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg flex items-center gap-3"
          >
            <Sparkles size={16} className="text-amber-500" />
            <span className="text-sm font-bold">New reflection dropped ✨</span>
          </motion.div>
        </motion.div>

        {/* RIGHT MOCKUP (unchanged) */}
        <motion.div
          className="lg:col-span-5 bg-[#F3F2F0] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center h-[500px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleUpVariants}
        >
          {/* phone content unchanged */}
          <div className="relative w-64 h-[90%] bg-black rounded-[2.5rem] p-2 shadow-2xl translate-y-8 transition-transform duration-500 group-hover:translate-y-4">
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
              <div className="p-6 bg-gradient-to-b from-amber-100 to-white">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif font-bold text-lg text-gray-800">Khalif</span>
                  <Menu size={16} />
                </div>
                <div className="text-center mb-6">
                  <p className="text-xs text-gray-500">Today’s Verse</p>
                  <h3 className="text-xl font-semibold text-gray-800 mt-1">
                    “Every reminder hits different when your heart’s open.”
                  </h3>
                </div>
                <div className="flex justify-center">
                  <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-gray-800">
                    <BookOpen size={14} className="text-amber-400" /> Read Now
                  </button>
                </div>
              </div>

              <div className="px-4 mt-4 grid grid-cols-2 gap-3">
                <div className="bg-black text-white p-4 rounded-2xl text-center">
                  <p className="text-[10px] text-gray-400 mb-1">Qur’an</p>
                  <p className="text-lg font-bold">Surah Al-Kahf</p>
                </div>
                <div className="bg-black text-white p-4 rounded-2xl text-center">
                  <p className="text-[10px] text-gray-400 mb-1">Book</p>
                  <p className="text-lg font-bold">Riyadh as-Salihin</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* … footer content below is unchanged … */}

    </section>
  );
};

export default FeatureSection;
