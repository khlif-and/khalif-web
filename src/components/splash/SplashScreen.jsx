import React, { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    // Splash tampil 3 detik lalu fade out
    const timer = setTimeout(() => setOpacity(0), 3000);

    // Setelah animasi selesai → hapus dari DOM
    const cleanup = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 3700);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#2D5A50] transition-opacity duration-700 ease-in-out`}
      style={{ opacity: opacity / 100 }}
    >
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <CloverIcon className="w-[120vw] h-[120vw] md:w-[50vw] md:h-[50vw] text-white opacity-[0.03]" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center animate-pulse">
        <CloverIcon className="w-20 h-20 text-white mb-4 drop-shadow-md" />
        <h1 className="text-3xl md:text-4xl font-medium text-white tracking-wide font-sans">
          Khalif
        </h1>
      </div>

      {/* Bottom Leaves */}
      <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 flex justify-between items-end px-4 overflow-hidden pointer-events-none">
        <div className="w-40 h-40 md:w-56 md:h-56 text-[#548C7E] transform -translate-x-10 translate-y-10">
          <FernLeaf />
        </div>
        <div className="w-48 h-48 md:w-72 md:h-72 text-[#548C7E] transform translate-x-4 translate-y-4 rotate-[-10deg]">
          <FernLeaf />
        </div>
      </div>
    </div>
  );
};

const CloverIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 12C12 12 14.5 9.5 14.5 7C14.5 5.5 13.5 4.5 12 4.5C10.5 4.5 9.5 5.5 9.5 7C9.5 9.5 12 12 12 12ZM12 12C12 12 9.5 14.5 7 14.5C5.5 14.5 4.5 13.5 4.5 12C4.5 10.5 5.5 9.5 7 9.5C9.5 9.5 12 12 12 12ZM12 12C12 12 14.5 14.5 14.5 17C14.5 18.5 13.5 19.5 12 19.5C10.5 19.5 9.5 18.5 9.5 17C9.5 14.5 12 12 12 12ZM12 12C12 12 9.5 9.5 7 9.5C5.5 9.5 4.5 10.5 4.5 12C4.5 13.5 5.5 14.5 7 14.5C9.5 14.5 12 12 12 12Z" />
  </svg>
);

const FernLeaf = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
    <path d="M50 100 Q 50 50 80 10" stroke="currentColor" strokeWidth="2" fill="none" />
    <ellipse cx="50" cy="90" rx="6" ry="3" transform="rotate(-20 50 90)" />
    <ellipse cx="52" cy="80" rx="7" ry="3.5" transform="rotate(-25 52 80)" />
    <ellipse cx="55" cy="70" rx="8" ry="4" transform="rotate(-30 55 70)" />
    <ellipse cx="60" cy="60" rx="8" ry="4" transform="rotate(-35 60 60)" />
    <ellipse cx="66" cy="50" rx="8" ry="4" transform="rotate(-40 66 50)" />
    <ellipse cx="73" cy="40" rx="7" ry="3.5" transform="rotate(-45 73 40)" />
    <ellipse cx="80" cy="30" rx="6" ry="3" transform="rotate(-50 80 30)" />
    <ellipse cx="45" cy="85" rx="5" ry="2.5" transform="rotate(10 45 85)" />
    <ellipse cx="48" cy="75" rx="6" ry="3" transform="rotate(5 48 75)" />
  </svg>
);

export default SplashScreen;
