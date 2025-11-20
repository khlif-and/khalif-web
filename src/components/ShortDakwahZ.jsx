import React, { useEffect, useRef, useState } from "react";
import { Asterisk } from "lucide-react";
import bgLanding from "../assets/images/img_landing_assets_2.webp";

const App = () => {
  const wrapperRef = useRef(null);
  const mockupRef = useRef(null);
  const desktopContentRef = useRef(null);
  const mobileContentRef = useRef(null);
  const navLinksRef = useRef(null);
  const notchRef = useRef(null);
  const bgBlurRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const [isGsapReady, setIsGsapReady] = useState(false);

  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement("script");
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
      });

    Promise.all([
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"),
    ]).then(() => {
      window.gsap.registerPlugin(window.ScrollTrigger);
      setIsGsapReady(true);
    });
  }, []);

  useEffect(() => {
    if (!isGsapReady) return;

    if (window.innerWidth <= 1024) return;

    const gsap = window.gsap;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=6000",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(navLinksRef.current, { opacity: 0, y: -20, duration: 0.5 }, 0);
      tl.to(desktopContentRef.current, { opacity: 0, scale: 1.1, filter: "blur(10px)", duration: 1 }, 0);
      tl.to(bgBlurRef.current, { opacity: 0.5, scale: 1.2, duration: 2 }, 0);
      tl.to(notchRef.current, { opacity: 1, scale: 1, duration: 0.5 }, 0.5);
      tl.fromTo(mobileContentRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, 0.5);
      tl.to(mockupRef.current, {
        width: "25vw",
        height: "95vh",
        borderRadius: "40px",
        borderWidth: "0.8vw",
        borderColor: "#121212",
        boxShadow: "0 3vw 6vw -1.5vw rgba(0,0,0,0.6)",
        ease: "power4.out",
        duration: 2,
      }, 0);

      tl.to([leftTextRef.current, rightTextRef.current], {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "<0.3");

      tl.to({}, { duration: 0.5 });
      tl.to(mockupRef.current, {
        width: "60vw",
        height: "80vh",
        borderRadius: "24px",
        borderWidth: "1vw",
        boxShadow: "0 6vw 12vw -3vw rgba(0,0,0,0.8)",
        ease: "power4.out",
        duration: 2,
      });
      tl.to(notchRef.current, { opacity: 0, y: -20, duration: 0.5 }, "<");
      tl.to([leftTextRef.current, rightTextRef.current], {
        opacity: 0,
        x: (i) => (i === 0 ? -50 : 50),
        duration: 1,
        ease: "power2.in",
      }, "<");

      tl.to({}, { duration: 0.5 });
      tl.to(mockupRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        borderWidth: "0px",
        boxShadow: "none",
        ease: "power3.inOut",
        duration: 2,
      });
      tl.to(mobileContentRef.current, { opacity: 0, scale: 0.95, duration: 1 }, "<");
      tl.to(desktopContentRef.current, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2 }, "<0.5");
      tl.to(navLinksRef.current, { opacity: 1, y: 0, duration: 0.6 }, "<0.8");
      tl.to(bgBlurRef.current, { opacity: 0, scale: 1, duration: 2 }, "<");
    }, wrapperRef);

    return () => ctx.revert();
  }, [isGsapReady]);

  return (
    <div className="bg-[#050505] min-h-screen w-full text-white overflow-x-hidden font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          ref={bgBlurRef}
          className="absolute inset-0 opacity-0 transition-opacity w-full h-full bg-gradient-to-tr from-green-900/30 to-emerald-800/30 blur-[120px]"
        />
      </div>

      <div ref={wrapperRef} className="h-screen w-full flex items-center justify-center overflow-hidden relative z-10">
        {/* Teks kiri dan kanan */}
        <p
          ref={leftTextRef}
          className="absolute left-[8vw] text-lg font-light tracking-widest opacity-0 -translate-x-10 text-white/60 uppercase select-none"
        >
          Rahmat di Setiap Langkah
        </p>
        <p
          ref={rightTextRef}
          className="absolute right-[8vw] text-lg font-light tracking-widest opacity-0 translate-x-10 text-white/60 uppercase select-none"
        >
          Berkah Bersama Dakwah
        </p>

        <div
          ref={mockupRef}
          className="relative w-full h-full overflow-hidden bg-black z-20 shadow-2xl origin-center border-0 border-transparent"
        >
          {/* Notch */}
          <div
            ref={notchRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-2xl z-[60] opacity-0 scale-75 pointer-events-none flex justify-center items-center"
          >
            <div className="w-[30%] h-[30%] bg-[#1a1a1a] rounded-full ml-8"></div>
          </div>

          {/* Desktop Content */}
          <div ref={desktopContentRef} className="absolute inset-0 w-full h-full flex flex-col">
            <div className="absolute inset-0 z-0">
              <img
                src={bgLanding}
                className="w-full h-full object-cover opacity-50"
                alt="Islamic Background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
            </div>
            <nav className="relative z-10 flex justify-between items-center p-8 md:p-12">
              <Asterisk size={40} className="text-white" />
              <div
                ref={navLinksRef}
                className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] text-white/80"
              >
                <a href="#">HOME</a>
                <a href="#">DAKWAH</a>
                <a href="#">TAUHID</a>
              </div>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold">
                JOIN US
              </button>
            </nav>
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center pb-20">
              <h1 className="text-[8vw] leading-none font-light tracking-tighter drop-shadow-2xl">
                SPREAD <span className="font-serif italic text-white/60">BAROKAH</span>
              </h1>
              <p className="mt-8 max-w-lg text-white/70 text-lg font-light">
                Sebarkan kebaikan dan cahaya Islam ke seluruh penjuru dunia 🌙
              </p>
            </div>
          </div>

          {/* Mobile Content */}
          <div
            ref={mobileContentRef}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center opacity-0 bg-black text-white"
          >
            <img
              src={bgLanding}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Islamic Mobile Bg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
            <div className="relative z-10 px-6">
              <h1 className="text-[10vw] font-light tracking-tighter leading-none">
                SPREAD <span className="font-serif italic text-white/60">BAROKAH</span>
              </h1>
              <p className="mt-6 text-white/70 text-sm font-light">
                Mari berdakwah dengan hati, penuh cinta dan hikmah.
              </p>
              <button className="mt-8 px-6 py-2 bg-white/10 border border-white/30 rounded-full text-xs font-semibold">
                BERGABUNG SEKARANG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
