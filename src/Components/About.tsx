
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
                alt="Executive Chef" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-stone-200 border border-stone-300 p-4 rounded shadow-lg hidden md:block">
              <p className="text-stone-900 font-bold italic text-center mb-2">"Cooking is a language that speaks to the soul."</p>
              <p className="text-xs text-amber-600 text-center uppercase tracking-widest">Chef Marco Carshi</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">Crafting Moments, <br/>One Plate at a Time.</h2>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed">
              Founded on the principles of culinary excellence and genuine hospitality, Carshi has been the heartbeat of fine dining since 2012. Our journey began with a simple vision: to elevate local ingredients into world-class masterpieces.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Every dish we serve is a testament to our commitment to quality. From our hand-picked herbs to our dry-aged meats, we believe that elegance is found in the details. Our kitchen is led by Chef Marco Carshi, whose philosophy blends traditional techniques with modern innovation.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-stone-200">
              <div>
                <h4 className="text-2xl font-black text-stone-900">12+</h4>
                <p className="text-xs uppercase tracking-widest text-stone-500">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-stone-900">24</h4>
                <p className="text-xs uppercase tracking-widest text-stone-500">Signature Dishes</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-stone-900">3</h4>
                <p className="text-xs uppercase tracking-widest text-stone-500">Michelin Stars</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
