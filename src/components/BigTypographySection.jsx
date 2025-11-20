const BigTypographySection = () => {
  return (
    <section className="relative w-full px-4 md:px-12 pb-12 overflow-hidden">
      <h1
        className="text-[18vw] md:text-[16vw] leading-[0.8] font-black text-center uppercase tracking-tighter bg-cover bg-center bg-no-repeat select-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2000&auto=format&fit=crop&grayscale')",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Muslim APPS GENZ
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 border-t border-black pt-4">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-tighter text-left text-gray-700">
          Built for the modern Muslim
        </p>
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-tighter text-center text-gray-700">
          Where deen meets design
        </p>
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-tighter text-left md:text-right text-gray-700">
          Faith, style, and soul in sync
        </p>
      </div>
    </section>
  );
};

export default BigTypographySection;
