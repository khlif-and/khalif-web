import React from 'react';

const EndSection = () => {
  return (
    <section className="w-full bg-[#FDFBF7] px-4 py-8 md:px-8 lg:px-12 flex flex-col justify-between overflow-hidden">
      
      {/* 1. Massive Title Section */}
      <div className="w-full border-b border-transparent">
        <h1 className="text-[13.5vw] leading-[0.8] font-black text-black tracking-tighter text-center uppercase w-full">
          Dakwah Z
        </h1>
      </div>

      {/* 2. Description Text Section */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full mt-8 mb-8 gap-6 text-sm md:text-base lg:text-lg font-medium text-gray-900">
        
        {/* Left Text */}
        <p className="max-w-sm leading-relaxed">
          Welcome to the new wave of dakwah.  
          A place where your soul can recharge, your mind can breathe,  
          and your faith can grow — all in a vibe that feels real.
        </p>

        {/* Right Text */}
        <p className="max-w-sm leading-relaxed text-left md:text-right">
          We’re not here to judge, we’re here to journey.  
          Let’s bring Islam back to the heart — with love, calm, and purpose.  
          This is *Dakwah Z* — faith that speaks your language.
        </p>
      </div>

      {/* 3. Image Section */}
      <div className="w-full mt-4">
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fit=crop" 
            alt="Dakwah Z Vibe" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

    </section>
  );
};

export default EndSection;
