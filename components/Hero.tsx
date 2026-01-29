
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with abstract overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105 animate-slow-zoom" 
          alt="High-Tech Dental Facility"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Est. 1998 • Excellence In Motion</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tighter uppercase">
            Redefining <br />
            <span className="text-gradient">Performance</span> <br />
            Dentistry
          </h1>
          
          <p className="text-xl text-white/60 max-w-lg leading-relaxed font-light">
            We don't just fix teeth. We engineer high-performance smiles using advanced clinical architecture and precision technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-cyan-400 transition-all hover:scale-105 shadow-xl shadow-cyan-500/10">
              Book Transformation
            </button>
            <button className="border border-white/20 hover:border-white text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest backdrop-blur-sm transition-all flex items-center justify-center gap-3 group">
              View Results
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-white/10 max-w-md">
            <div>
              <div className="text-3xl font-black">20K+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Smiles Engineered</div>
            </div>
            <div>
              <div className="text-3xl font-black">4.9/5</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Elite Rating</div>
            </div>
            <div>
              <div className="text-3xl font-black">12+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Specialists</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative group">
          <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
            className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
            alt="Perfect Smile Results"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
