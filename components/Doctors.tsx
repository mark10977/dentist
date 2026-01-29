
import React from 'react';
import { DOCTORS } from '../constants';

const Doctors: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/creatingdentalx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <section id="architecture" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none select-none">
        Architects
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Clinical <span className="text-gradient">Architects</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Meet the specialists behind our high-performance clinical results. Each architect brings decades of expertise to your transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {DOCTORS.map((doc) => (
            <div key={doc.id} className="flex flex-col md:flex-row gap-8 items-center bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/[0.07] transition-all group">
              <div className="w-48 h-48 flex-shrink-0 relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="relative w-full h-full object-cover rounded-2xl shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">{doc.name}</h3>
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest">{doc.role}</p>
                </div>
                <p className="text-white/60 text-sm italic">"{doc.bio}"</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {doc.specialties.map(spec => (
                    <span key={spec} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-white/80">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center md:justify-start pt-2">
                  <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href={instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
