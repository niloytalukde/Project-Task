"use client";
export default function Hero() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-24 md:py-60 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 my-background-div  bg-cover bg-center"
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
        <h1 className="text-5xl md:text-5xl font-bold leading-tight ">
        Nurture Your Green Paradise
        </h1>

        <p className="text-white/90 text-base md:text-lg max-w-xl mt-4">
          Discover eco-friendly tools, expert advice, and everything you need to
          bring your dream garden to life.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-16 text-base sm:text-lg md:text-xl">
  <button className="bg-[#CC7722] text-white hover:bg-[#a55d14] active:scale-95 rounded-full px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 font-medium transition-all w-full sm:w-auto">
    Shop Now
  </button>
  <button className="bg-[#CC7722] text-white hover:bg-[#a55d14] active:scale-95 rounded-full px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 font-medium transition-all w-full sm:w-auto">
    Call Now
  </button>
</div>

       
      </div>
    </section>
  );
}
