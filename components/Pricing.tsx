
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Performance <span className="text-cyan-400">Plans</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Sustainable smile health through precision maintenance protocols.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col p-10 rounded-3xl border transition-all duration-500 ${plan.highlight ? 'bg-white/10 border-cyan-500/50 scale-105 z-10 shadow-2xl shadow-cyan-500/10' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                  Most Optimized
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold uppercase tracking-widest text-white/60 mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-white/40 text-sm uppercase tracking-widest font-bold">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <i className={`fas fa-check-circle ${plan.highlight ? 'text-cyan-400' : 'text-white/20'}`}></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all ${plan.highlight ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-xl shadow-cyan-500/20' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
