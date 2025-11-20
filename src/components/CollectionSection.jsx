import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const features = [
  {
    id: 1,
    title: "Qur’an Anytime",
    desc: "Read, reflect, and find peace — no matter where you are.",
    image: "https://images.unsplash.com/photo-1602449051235-64c78a29c3b1?w=1000&fit=crop"
  },
  {
    id: 2,
    title: "Classic Islamic Reads",
    desc: "Dive into timeless books that feed both mind and soul.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1000&fit=crop"
  },
  {
    id: 3,
    title: "Daily Reflections",
    desc: "Short, deep reminders that hit different every day.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&fit=crop"
  },
  {
    id: 4,
    title: "Podcasts & Talks",
    desc: "Listen to real convos about faith, growth, and life as Gen Z.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&fit=crop"
  },
];

const CollectionSection = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: [0.2, 1, 0.4, 1]
      }
    }
  };

  return (
    <section className="w-full bg-white py-16 border-t border-gray-100 overflow-hidden">
      
      {/* --- TOP: FEATURE SLIDER --- */}
      <motion.div 
        className="px-6 md:px-12 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide snap-x">
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants} 
              className="min-w-[280px] md:min-w-[320px] snap-start flex flex-col group cursor-pointer"
            >
              
              {/* Text Header Area */}
              <div className="mb-6 min-h-[80px]">
                <h3 className="font-bold text-sm md:text-base leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs mt-2 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Image Area */}
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-2xl">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 group-hover:grayscale-0 grayscale"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- BOTTOM: PROMO BANNER --- */}
      <div className="px-6 md:px-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Left: Massive Typography with Typewriter Effect */}
          <div className="lg:col-span-7">
            <motion.h2 
              variants={itemVariants}
              className="text-[12vw] lg:text-[7vw] leading-[0.85] font-black tracking-tighter uppercase text-black"
            >
              NEW{" "}
              <span className="text-gray-300 inline-block animate-fade">
                <Typewriter
                  options={{
                    strings: ["DAKWAH", "STYLE", "HABIT", "FAITH", "MINDSET"],
                    autoStart: true,
                    loop: true,
                    delay: 150, // ngetik pelan
                    deleteSpeed: 60,
                    pauseFor: 2000, // berhenti sebentar biar smooth
                  }}
                />
              </span>
              <br />
              Z <br />
              EXPERIENCE
            </motion.h2>
          </div>

          {/* Right: Logos & Description */}
          <div className="lg:col-span-5 flex flex-col gap-12 pb-2">
            
            {/* Brand Logos */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 md:gap-12 opacity-60 grayscale">
              <span className="font-sans font-bold tracking-widest text-sm md:text-base">KHALIF</span>
              <span className="font-serif italic font-bold text-lg md:text-xl">Z TALKS</span>
              <span className="font-serif font-bold text-lg md:text-xl">QUR’AN LIVE</span>
            </motion.div>

            {/* CTA & Desc */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest group">
                Explore the vibe 
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500"/>
              </a>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                A new era of digital dakwah — where you can read, listen, and grow with faith that speaks your language.
              </p>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CollectionSection;
