
import React from 'react';
import { GALLERY_IMAGES } from '../assets/Assets';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">Visual Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight italic">Elegance Captured.</h2>
          </div>
          <p className="text-stone-400 max-w-md text-sm md:text-base font-light italic">
            "A glimpse into the Carshi experience. Each frame tells a story of meticulous preparation and refined ambiance."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={img.id} 
              className={`relative overflow-hidden group aspect-[4/5] ${idx % 3 === 1 ? 'md:translate-y-12' : ''}`}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white font-bold uppercase tracking-widest text-xs border-b border-white pb-1">{img.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
