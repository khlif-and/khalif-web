import { useState } from "react";
import { Menu, X, Search, BookOpen, LogIn, UserPlus, MessageCircle, BookText, Heart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-6 py-6 md:px-12 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-sm z-50 text-black">
        {/* Tombol Menu Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left Menu */}
        <div className="hidden md:flex space-x-8 text-xs tracking-widest font-semibold items-center">
          <a href="#" className="hover:underline flex items-center gap-1">
            <MessageCircle size={14} /> DAKWAH Z
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <BookOpen size={14} /> ARTICLES
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <BookOpen size={14} /> QUR’AN
          </a>

        </div>

        {/* Brand Name */}
        <div className="text-2xl md:text-3xl font-black tracking-tighter uppercase absolute left-1/2 transform -translate-x-1/2">
          KHALIF APPS
        </div>

        {/* Right Menu */}
        <div className="hidden md:flex space-x-8 text-xs tracking-widest font-semibold items-center">
          <a href="#" className="hover:underline flex items-center gap-1">
            <Search size={14} /> SEARCH
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <LogIn size={14} /> LOGIN
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <UserPlus size={14} /> REGISTER
          </a>
        </div>

        {/* Icon Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <Search size={20} />
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col gap-6 text-lg font-bold">
          {["DAKWAH Z", "ARTICLES", "QUR’AN", "HADIST", "DOA", "COMMUNITY", "LOGIN", "REGISTER"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-gray-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
