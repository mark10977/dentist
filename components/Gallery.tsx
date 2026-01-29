
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Implants', 'Veneers', 'Surgery'];

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
          Results <span className="text-gradient">Portfolio</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${filter === cat ? 'bg-cyan-500 text-black border-cyan-500' : 'bg-white/5 border-white/10 text-white/40 hover:border-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <img 
                src={item.image} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-2 block">{item.category}</span>
                <h3 className="text-xl font-black uppercase text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
