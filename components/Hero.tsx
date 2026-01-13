
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/img-1.jpg"
          alt="Luxury Indian Ethnic Wear"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl text-white">
          <span className="inline-block text-[#D4AF37] tracking-[0.4em] uppercase text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Exclusively Custom Handcrafted
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Where Tradition Meets <span className="italic opacity-90 block">Timeless Elegance</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-100 mb-10 max-w-lg leading-relaxed font-light opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Discover the art of bespoke ethnic fashion. Every stitch tells a story of grace, craftsmanship, and individuality.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <a
              href="#appointment"
              className="px-10 py-4 bg-[#D4AF37] hover:bg-[#C5A028] text-white tracking-widest uppercase text-sm transition-all duration-300 shadow-xl text-center"
            >
              Book a Design Session
            </a>
            <a
              href="#collections"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white tracking-widest uppercase text-sm transition-all duration-300 text-center"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>

      {/* Floating element */}
      <div className="absolute bottom-12 right-12 hidden lg:block animate-pulse">
        <div className="flex items-center space-x-4 text-white/60">
          <div className="w-12 h-px bg-white/40"></div>
          <span className="text-[10px] uppercase tracking-[0.5em] font-medium">Scroll to Discover</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
