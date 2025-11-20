import React from 'react';

const Footer = () => {
  const navLinks = [
    "Home", "Dakwah Z", "Qur’an", "Articles", 
    "Community", "Events", "About", "Contact"
  ];

  return (
    <footer className="w-full flex flex-col">
      
      {/* --- SECTION 1: NEWSLETTER (Light Background) --- */}
      <div className="w-full bg-[#FDFBF7] px-5 py-16 md:px-10 lg:px-16 flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* Left Side: Title */}
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-black">
            Join the Khalif <br /> Newsletter
          </h2>
        </div>

        {/* Right Side: Description & Form */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Stay in the loop with Khalif — get updates on new dakwah stories, Gen Z events, and soulful reads.
          </p>

          <div className="flex w-full">
            <input 
              type="email" 
              placeholder="Enter your email to vibe with us ✨" 
              className="w-full p-4 bg-white text-black outline-none border border-gray-200 focus:border-black transition-colors placeholder-gray-400 text-sm"
            />
            <button className="bg-black text-white px-6 py-4 text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors whitespace-nowrap">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: DARK FOOTER (Black Background) --- */}
      <div className="w-full bg-black text-white pt-12 overflow-hidden flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
        
        {/* Navigation Links */}
        <nav className="px-5 md:px-10 mb-10">
          <ul className="flex flex-wrap justify-center md:justify-between gap-x-6 gap-y-4 text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-400">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-white cursor-pointer transition-colors">
                {link}
              </li>
            ))}
          </ul>
        </nav>

        {/* Brand Name */}
        <div className="w-full flex justify-center items-end leading-none">
          <h1 className="text-[22vw] font-black uppercase tracking-tighter text-white leading-[0.75] select-none mix-blend-screen">
            KHALIF
          </h1>
        </div>

        {/* Bottom Text with hover animation on Nafaskarya */}
        <div className="text-center py-6 text-gray-500 text-xs md:text-sm tracking-wide">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://nafaskarya.id"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-semibold text-gray-300 hover:text-white transition-all duration-300 group"
          >
            Nafaskarya.id
            <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>{" "}
          — A Digital Agency Building Khalif Apps for the Ummah.
          <br className="hidden md:block" />
          Keeping your faith fresh & your soul connected.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
