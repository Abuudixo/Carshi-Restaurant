
import React, { useState } from 'react';
import { MENU_ITEMS } from '../assets/Assets';
import { MenuCategory } from '../types';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.APPETIZERS);

  const categories = Object.values(MenuCategory);
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">A Gastronomic Journey</span>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tight mt-2 italic">The Carshi Menu</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-b-2 ${activeCategory === cat ? 'border-amber-500 text-stone-900 scale-105' : 'border-transparent text-stone-400 hover:text-stone-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex gap-6 items-start">
              <div className="relative overflow-hidden w-24 h-24 md:w-32 md:h-32 shrink-0 shadow-lg rounded-sm bg-white">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 border-b border-stone-300 pb-4 group-hover:border-amber-400 transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl md:text-2xl font-black text-stone-900 uppercase tracking-tight">{item.name}</h3>
                  <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm md:text-base italic leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default MenuSection;
