import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SplashScreen = ({ onFinish }) => {
  // Kita tidak perlu state opacity manual, biarkan GSAP yang handle
  const [isVisible, setIsVisible] = useState(true);

  // Refs untuk elemen yang akan dianimasikan
  const compRef = useRef(null); // Scope untuk GSAP context
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    // Context safe untuk React 18+
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Hapus component dari DOM setelah animasi selesai
          setIsVisible(false);
          if (onFinish) onFinish();
        },
      });

      // 0. Setup Awal (Invisible state)
      gsap.set([titleRef.current, subtitleRef.current, lineRef.current], { autoAlpha: 0 });

      // 1. Ambient Blob Animation (Looping background)
      gsap.to(blob1Ref.current, {
        x: "20%", y: "-20%", duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
      gsap.to(blob2Ref.current, {
        x: "-20%", y: "20%", duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut"
      });

      // 2. Entrance Sequence
      tl.to(containerRef.current, { opacity: 1, duration: 0.5 })
        
        // Animasi Judul: Naik ke atas sambil mengurangi skew (efek modern)
        .fromTo(titleRef.current, 
          { y: 100, skewY: 7, autoAlpha: 0 },
          { y: 0, skewY: 0, autoAlpha: 1, duration: 1.2, ease: "power4.out" }
        )
        
        // Garis separator melebar
        .fromTo(lineRef.current,
          { scaleX: 0, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 1, duration: 0.8, ease: "expo.out" },
          "-=0.8" // Mulai lebih awal (overlap)
        )

        // Subtitle muncul pelan
        .fromTo(subtitleRef.current,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )

        // 3. Hold (Tahan sebentar agar user bisa baca)
        .to({}, { duration: 1.5 }) 

        // 4. EXIT Sequence (Transisi Keluar)
        // Teks naik lebih cepat
        .to([titleRef.current, subtitleRef.current, lineRef.current], {
          y: -50, autoAlpha: 0, duration: 0.5, stagger: 0.1, ease: "power2.in"
        })
        // Container utama slide ke atas (seperti tirai dibuka)
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        });

    }, compRef);

    return () => ctx.revert(); // Cleanup GSAP
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div ref={compRef} className="relative z-[9999]">
      <div
        ref={containerRef}
        className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
      >
        {/* === BACKGROUND EFFECTS === */}
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
        
        {/* Glowing Blobs */}
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
            <div 
                ref={blob1Ref} 
                className="absolute w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen top-[-10%] right-[-10%]" 
            />
            <div 
                ref={blob2Ref} 
                className="absolute w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[80px] mix-blend-screen bottom-[-10%] left-[-10%]" 
            />
        </div>

        {/* === MAIN CONTENT === */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          
          {/* Brand Title */}
          <div className="overflow-hidden py-2"> {/* Wrapper untuk clipping effect */}
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-lg"
            >
              Khalif Apps
            </h1>
          </div>

          {/* Decorative Line */}
          <div 
            ref={lineRef}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full my-6"
          />

          {/* Tagline */}
          <div className="overflow-hidden">
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-slate-400 font-medium tracking-widest uppercase"
            >
              Defining Gen Z Vibes
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;