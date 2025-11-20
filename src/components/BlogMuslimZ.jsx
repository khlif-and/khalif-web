import React, { useRef } from 'react';
import { ArrowUpRight, Share2, FileText, ChevronRight, ChevronLeft } from 'lucide-react';

const BlogMuslimZ = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 420;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 font-sans text-black border-t border-gray-100 overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="inline-block px-5 py-2 rounded-full border border-gray-200 text-xs font-bold tracking-wide mb-8 hover:bg-black hover:text-white transition-colors cursor-pointer">
            Dakwah Z Blog
          </span>
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1] text-[#1A1A1A]">
            Join the <br /> Dakwah Z Fam
          </h2>
        </div>

        <div className="flex flex-col items-end gap-6">
          <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed font-medium text-right">
            Step into the Khalif world — where you can find chill study sessions, 
            dope ustadz talks, and deep reads that fill your soul.  
            All free, all love, all faith. 🤍
          </p>

          {/* Slider Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* --- SLIDER CONTENT --- */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
      >

        {/* CARD 1: Z Session */}
        <div className="min-w-[85vw] md:min-w-[400px] lg:min-w-[32%] h-[550px] snap-center flex-shrink-0 bg-[#E9FFF5] rounded-[2.5rem] p-8 md:p-10 relative flex flex-col justify-between group overflow-hidden hover:shadow-xl transition-all duration-500">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-4xl font-bold leading-[1.1] tracking-tight max-w-[250px] text-[#1A1A1A]">
                Chill Kajian <br /> with Ustadz Z
              </h3>
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-[90%] h-[60%] translate-y-4 translate-x-4">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
              alt="Kajian Z"
              className="w-full h-full object-cover object-top rounded-tl-[2rem] mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* CARD 2: Faith Article */}
        <div className="min-w-[85vw] md:min-w-[400px] lg:min-w-[32%] h-[550px] snap-center flex-shrink-0 flex flex-col gap-6">
          <div className="bg-[#F4F4F4] rounded-[2.5rem] p-4 pr-8 flex items-center gap-4 h-[25%] hover:bg-[#EFEFEF] transition-colors cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c8e?w=200&auto=format&fit=crop"
              alt="Author"
              className="w-16 h-16 rounded-full object-cover border-[3px] border-white shadow-sm"
            />
            <div className="flex-1">
              <h4 className="font-bold text-lg text-[#1A1A1A]">Layla Noor</h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-0.5">
                Faith Blogger
              </p>
            </div>
          </div>

          <div className="relative bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden h-[75%] group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1533055640609-24b498dfd0e4?w=800&auto=format&fit=crop"
              alt="Faith Article"
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white border border-white/10">
                <FileText size={20} />
              </div>
              <h3 className="text-3xl font-bold text-white leading-tight tracking-tight">
                Article: <br /> How to Heal When Faith Feels Low 💫
              </h3>
            </div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <ChevronRight size={24} className="text-black" />
            </div>
          </div>
        </div>

        {/* CARD 3: Community */}
        <div className="min-w-[85vw] md:min-w-[400px] lg:min-w-[32%] h-[550px] snap-center flex-shrink-0 bg-[#F0EAFF] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-500">
          <div className="flex justify-end">
            <div className="bg-white/40 backdrop-blur-sm px-5 py-2 rounded-full text-xs font-bold border border-white/30 text-[#1A1A1A]">
              900+ members
            </div>
          </div>

          <div className="mt-auto relative z-10">
            <div className="flex -space-x-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&auto=format&fit=crop"
                className="w-14 h-14 rounded-full border-[3px] border-[#E8E1FF] object-cover"
                alt="User 1"
              />
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop"
                className="w-14 h-14 rounded-full border-[3px] border-[#E8E1FF] object-cover"
                alt="User 2"
              />
              <img
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&auto=format&fit=crop"
                className="w-14 h-14 rounded-full border-[3px] border-[#E8E1FF] object-cover"
                alt="User 3"
              />
            </div>

            <p className="text-black/50 font-bold text-xs uppercase tracking-widest mb-3">
              #Community
            </p>
            <h3 className="text-4xl font-bold leading-[1.1] tracking-tight mb-10 text-[#1A1A1A]">
              Join Dakwah Z Crew <br /> and vibe with Khalif.
            </h3>

            <div className="flex items-center gap-4">
              <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-black transition-transform hover:scale-105 shadow-lg">
                Join Now
              </button>
              <button className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-white transition-colors">
                <Share2 size={22} className="text-[#1A1A1A]" />
              </button>
            </div>
          </div>

          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/30 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogMuslimZ;
