
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Patient <span className="text-cyan-400">Feedback</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">Hear from those who have experienced our clinical performance upgrades.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/5 border border-white/10 p-10 rounded-3xl flex flex-col hover:bg-white/[0.08] transition-all">
              <div className="flex gap-1 mb-6 text-cyan-400">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-xs"></i>
                ))}
              </div>
              <p className="text-lg text-white/80 leading-relaxed italic flex-grow mb-8">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest">{review.name}</h4>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">{review.date}</p>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/40">
                  {review.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
