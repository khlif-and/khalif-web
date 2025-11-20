import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const artworks = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600&auto=format&fit=crop", // Surreal Red Face
    tag: "@howard",
    tagColor: "bg-[#8B2525]", // Dark Red
    tagPosition: "-top-12 left-1/2 -translate-x-1/2",
    offsetY: "translate-y-8"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop", // Pop Art/Balloon
    offsetY: "translate-y-0"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c42?q=80&w=600&auto=format&fit=crop", // Abstract Collage
    tag: "@robin",
    tagColor: "bg-black",
    tagPosition: "-top-16 right-4",
    offsetY: "translate-y-12"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=600&auto=format&fit=crop", // Van Gogh Style
    offsetY: "translate-y-4"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?q=80&w=600&auto=format&fit=crop", // Colorful Box
    offsetY: "translate-y-0"
  }
];

const KitabSelection = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 px-6 md:px-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* --- LEFT COLUMN: TEXT CONTENT --- */}
        <div className="lg:col-span-5 flex flex-col gap-8 relative z-20">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
            E-Commerce
          </span>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-black">
            Showcase, Sell, <br/>
            <span className="text-[#8B2525]">& acquire arts to</span> <br/>
            our marketplace.
          </h2>

          <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-md">
            Dynamic community where artists and buyers seamlessly merge. ArtFusion brings together creators and enthusiasts to share creativity.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-black transition-transform hover:scale-105">
              Join for $9.99/m
            </button>
            <button className="bg-[#F0F0F0] text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-[#E5E5E5] transition-colors">
              Read more
            </button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: CARDS SLIDER --- */}
        <div className="lg:col-span-7 relative mt-12 lg:mt-0">
          
          {/* Navigation Buttons (Floating Right) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-3 translate-x-8">
            <button className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-400 hover:text-black transition-colors">
              <ChevronUp size={20} />
            </button>
            <button className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-400 hover:text-black transition-colors">
              <ChevronDown size={20} />
            </button>
          </div>

          {/* Cards Container */}
          {/* Menggunakan flex dan negative margin untuk efek tumpuk */}
          <div className="flex items-center pl-4 overflow-x-visible">
            {artworks.map((card, index) => (
              <div 
                key={card.id} 
                className={`
                  relative min-w-[200px] md:min-w-[260px] aspect-square rounded-[2rem] 
                  overflow-visible shadow-2xl transition-all duration-500 hover:z-50 hover:scale-105 hover:-translate-y-2
                  -ml-16 first:ml-0 border-[6px] border-white
                  ${card.offsetY}
                `}
                style={{ zIndex: index + 10 }} // Ensure natural stacking order
              >
                {/* Card Image */}
                <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-gray-200">
                  <img 
                    src={card.image} 
                    alt="Artwork" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating User Bubble (Conditional) */}
                {card.tag && (
                  <div className={`absolute ${card.tagPosition} z-50`}>
                    <div className={`${card.tagColor} text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg relative animate-bounce duration-[4000ms]`}>
                      {card.tag}
                      {/* Tail for bubble */}
                      <div className={`absolute -bottom-1 left-6 w-3 h-3 ${card.tagColor} transform rotate-45`}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Gradient Fade to right (Optional, for seamless look) */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default KitabSelection;