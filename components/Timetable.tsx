
import React from 'react';
import { TIMETABLE } from '../constants';

const Timetable: React.FC = () => {
  const mapLink = "https://www.google.com/maps/search/?api=1&query=3366+Boston+Rd,+Bronx,+NY+10469";

  return (
    <section id="hours" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
              Optimization <br /> <span className="text-gradient">Windows</span>
            </h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Precision dentistry requires focused clinical hours. Visit our Bronx facility for your performance upgrades during these sessions.
            </p>
            <div className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Clinical Timezone: Eastern Time (ET)</span>
            </div>
            
            <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              {TIMETABLE.map((item, idx) => (
                <div key={item.day} className={`flex justify-between items-center p-6 ${idx !== TIMETABLE.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors`}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black uppercase tracking-widest w-24">{item.day}</span>
                    {item.note && (
                      <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase rounded leading-none">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <span className={`text-sm font-bold font-mono tracking-tighter ${item.hours === 'Closed' ? 'text-red-500/60' : 'text-cyan-400'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden group border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1000" 
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-[3s] group-hover:scale-110 opacity-60" 
              alt="Office"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 bg-glass border border-white/10 p-8 rounded-2xl">
              <h4 className="text-xl font-black uppercase mb-2 text-white">Office Location</h4>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
                3366 Boston Rd, Bronx, NY 10469
              </p>
              <div className="space-y-4">
                <a 
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-cyan-400 transition-colors flex items-center justify-center gap-3"
                >
                  <i className="fas fa-map-marker-alt"></i>
                  Get Directions
                </a>
                <a 
                  href="tel:17185475280"
                  className="w-full border border-white/10 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3"
                >
                  <i className="fas fa-phone"></i>
                  Direct Dial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timetable;
