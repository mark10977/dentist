
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              The <span className="text-cyan-400">Treatment</span> Lab
            </h2>
            <p className="text-white/60 text-lg">
              Our clinical facility is engineered for precision. We offer a full spectrum of dental performance upgrades using the industry's most advanced hardware.
            </p>
          </div>
          <a href="#" className="text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b border-cyan-400/20">
            All Programs <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500 text-black rounded-lg flex items-center justify-center text-xl shadow-lg">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-cyan-500 pb-1">
                    Analyze Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
