import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight, Asterisk } from 'lucide-react';

const VerifyOtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  
  // GSAP Refs
  const mainContainerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const logoRef = useRef(null);
  const formElementsRef = useRef([]);
  const submitBtnRef = useRef(null);
  const imageOverlayRef = useRef([]);

  // --- OTP Logic ---
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Hanya angka

    const newOtp = [...otp];
    // Ambil karakter terakhir saja jika user paste atau ketik cepat
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Pindah fokus ke input berikutnya jika ada nilai
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Pindah fokus ke belakang saat backspace ditekan di input kosong
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData('text').split('').filter(char => !isNaN(char));
    if (data.length === 6) {
        setOtp(data);
        inputRefs.current[5].focus();
    }
  };


  // --- GSAP Animations ---

  // 1. Entrance Animation (Saat mounted)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(mainContainerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      // Animasi Kiri (Gambar & Testimonial)
      .fromTo(leftSectionRef.current.querySelector('img'), 
        { scale: 1.1, filter: 'blur(10px)' }, 
        { scale: 1, filter: 'blur(0px)', duration: 1.5 }, '<'
      )
      .fromTo(imageOverlayRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 }, '-=1'
      )
      // Animasi Kanan (Form)
      .fromTo(logoRef.current, 
        { rotate: -180, scale: 0, opacity: 0 }, 
        { rotate: 0, scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.5'
      )
      .fromTo(formElementsRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 }, '-=0.4'
      )
      .fromTo(inputRefs.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, ease: 'back.out(2)', duration: 0.5}, '-=0.4'
      )
       .fromTo(submitBtnRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5 }, '-=0.2'
      );

  }, []);

  // 2. Complex Hover Animations

  // Magnetic Button Effect
  const handleBtnMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(target, {
      x: x * 0.2,
      y: y * 0.2,
      scale: 1.05,
      boxShadow: '0 10px 20px -10px rgba(0,0,0,0.3)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleBtnMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      scale: 1,
      boxShadow: '0 0px 0px 0px rgba(0,0,0,0)',
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  // Input Focus Animation
  const handleInputFocus = (index) => {
    gsap.to(inputRefs.current[index], {
      borderColor: '#000',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      y: -2,
      duration: 0.3
    });
  };

  const handleInputBlur = (index) => {
    gsap.to(inputRefs.current[index], {
        borderColor: otp[index] ? '#000' : '#e5e7eb', // Tetap hitam jika ada isinya
        boxShadow: 'none',
        y: 0,
        duration: 0.3
      });
  };


  return (
    <main ref={mainContainerRef} className="min-h-screen flex w-full bg-white overflow-hidden opacity-0">
      
      {/* --- LEFT SECTION (Image & Testimonial) --- */}
      <section ref={leftSectionRef} className="hidden lg:flex lg:w-1/2 relative bg-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2938&auto=format&fit=crop" 
          alt="Freelance Designer working" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 flex flex-col justify-end h-full p-12 lg:p-16 text-white w-full max-w-2xl mx-auto">
          <blockquote ref={el => imageOverlayRef.current[0] = el} className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
            "Highly recommend for any freelance designer trying to turn their passion into a stable career."
          </blockquote>
          <div ref={el => imageOverlayRef.current[1] = el}>
            <p className="text-lg font-semibold">Amelia Brooks</p>
            <p className="text-white/70">Freelance Graphic Designer</p>
          </div>
          
          <div ref={el => imageOverlayRef.current[2] = el} className="flex items-center gap-4 mt-12">
             <button className="p-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors group relative overflow-hidden">
                <ArrowLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform" />
             </button>
             <button className="p-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors group relative overflow-hidden">
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* --- RIGHT SECTION (OTP Form) --- */}
      <section ref={rightSectionRef} className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16 relative">
        <div className="w-full max-w-md flex flex-col items-center text-center">
          
          {/* Icon */}
          <div ref={logoRef} className="mb-8 p-2">
            <Asterisk className="w-12 h-12 text-black" strokeWidth={1.5} />
          </div>

          {/* Title & Description */}
          <h1 ref={el => formElementsRef.current[0] = el} className="text-3xl font-bold text-gray-900 mb-3">
            Enter the code
          </h1>
          <p ref={el => formElementsRef.current[1] = el} className="text-gray-500 mb-10 max-w-xs">
            Enter the 6-digit code sent to your phone number to complete verification.
          </p>

          {/* OTP Inputs */}
          <form onPaste={handlePaste} className="w-full">
            <div className="flex gap-3lg:gap-4 justify-center mb-10">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={() => handleInputFocus(index)}
                  onBlur={() => handleInputBlur(index)}
                  className="w-12 h-14 lg:w-14 lg:h-16 border-2 border-gray-200 rounded-xl text-center text-2xl font-semibold text-gray-900 focus:outline-none transition-colors bg-white"
                  aria-label={`Digit ${index + 1} of OTP`}
                />
              ))}
            </div>

            {/* Buttons */}
            <button
              ref={submitBtnRef}
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              className="w-full bg-black text-white font-medium py-4 rounded-xl mb-6 relative overflow-hidden will-change-transform"
            >
              Confirm and proceed
            </button>
            
            <button 
                ref={el => formElementsRef.current[2] = el}
                className="text-gray-600 font-medium hover:text-black transition-colors relative group py-2"
            >
              Resend code
              <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-black group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
            </button>
          </form>

        </div>
      </section>
    </main>
  );
};

export default VerifyOtpScreen;