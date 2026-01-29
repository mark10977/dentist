
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200" 
              className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
              alt="Clinical Expertise"
            />
            <div className="absolute bottom-8 right-8 bg-cyan-500 text-black p-6 rounded-2xl shadow-xl">
              <span className="text-4xl font-black">25+</span>
              <p className="text-[10px] font-black uppercase tracking-widest mt-1">Years of Innovation</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-cyan-500/30 rounded-full">
              <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Engineering The <br /> <span className="text-gradient">Future Of Smiles</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              At Creating Dental Excellence, we believe dentistry is an architectural discipline. Established in 1998, our practice has evolved from a traditional office into a high-performance clinical lab.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-cyan-400 font-bold uppercase text-xs tracking-widest">The Mission</h4>
                <p className="text-white/40 text-sm leading-relaxed">To provide elite, structural restoration that lasts a lifetime through digital precision.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-cyan-400 font-bold uppercase text-xs tracking-widest">The Method</h4>
                <p className="text-white/40 text-sm leading-relaxed">Utilizing micron-level accuracy and AI-driven mapping for every patient procedure.</p>
              </div>
            </div>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
              Learn Our Philosophy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
