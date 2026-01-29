
import React from 'react';

const Implants: React.FC = () => {
  return (
    <section id="implants" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-cyan-900/20 to-black border border-white/10 rounded-[4rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                The <span className="text-cyan-400">Implant</span> <br /> Center
              </h2>
              <p className="text-white/60 text-xl leading-relaxed">
                Our Bronx facility houses a specialized Implant Center dedicated exclusively to full-arch restorations and complex titanium integration.
              </p>
              <ul className="space-y-4">
                {[
                  'Micron-Level Guided Surgery',
                  'Immediate Functional Loading',
                  '3D Printed Bio-Compatible Guides',
                  'Custom Abutment Architecture'
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full border border-cyan-500 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                      <i className="fas fa-check text-[8px] text-cyan-500 group-hover:text-black"></i>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-cyan-500 text-black px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-cyan-400 transition-all shadow-xl shadow-cyan-500/20">
                Book Implant Consult
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
                  <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400" className="rounded-2xl grayscale hover:grayscale-0 transition-all mb-4" alt="Modern Dental Tech" />
                  <p className="text-[10px] font-black uppercase text-cyan-400">Hardware Level 10</p>
                </div>
                <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
                  <h5 className="text-2xl font-black uppercase">99.8%</h5>
                  <p className="text-[10px] font-black uppercase text-white/40">Success Vector</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
                  <h5 className="text-2xl font-black uppercase">Micron</h5>
                  <p className="text-[10px] font-black uppercase text-white/40">Precision Metric</p>
                </div>
                <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400" className="rounded-2xl grayscale hover:grayscale-0 transition-all mb-4" alt="Digital Oral Scan" />
                  <p className="text-[10px] font-black uppercase text-cyan-400">Digital Mapping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implants;
