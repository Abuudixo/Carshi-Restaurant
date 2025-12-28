
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background with parallax-like effect */}
      <div 
        className="absolute inset-0 z-0 scale-105 transition-transform duration-[10s] ease-out hover:scale-100"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://i.pinimg.com/1200x/99/b4/f6/99b4f67a4d9b713338df06bec54933ed.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-[fadeInDown_1.2s_ease-out]">
           <span className="text-amber-500 uppercase tracking-[0.4em] text-sm font-bold mb-4 block drop-shadow-md">Fine Dining Experience</span>
           <h1 className="text-6xl md:text-9xl font-black text-stone-50 leading-tight mb-6 tracking-tighter drop-shadow-xl">
             Carshi <span className="block italic font-light text-3xl md:text-6xl text-stone-200 mt-2">The Art of Modern Dining</span>
           </h1>
           <p className="text-stone-100 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-md">
             Experience a symphony of contemporary flavors served in an atmosphere of architectural elegance.
           </p>
           
           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <a 
               href="#menu" 
               className="group relative px-12 py-5 bg-stone-50 text-stone-900 font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:text-white shadow-lg"
             >
               <span className="relative z-10">View Menu</span>
               <span className="absolute bottom-0 left-0 w-0 h-full bg-stone-900 group-hover:w-full transition-all duration-300 z-0"></span>
             </a>
             <a 
               href="#contact-section" 
               className="px-12 py-5 border-2 border-amber-500 text-amber-500 font-bold uppercase tracking-widest text-sm hover:bg-amber-500 hover:text-stone-900 transition-all duration-300 backdrop-blur-sm shadow-lg"
             >
               Get in Touch
             </a>
           </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 rounded-full bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent"></div>
      </div>

      {/* Modern Gradient Accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-950/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
