
import React, { useState } from 'react';
import { getDentalAdvice } from '../services/gemini';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const result = await getDentalAdvice(query);
    setResponse(result || "Error communicating with AI.");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-glass border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          <div className="p-4 bg-cyan-500 text-black flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i className="fas fa-robot"></i>
              <span className="font-bold uppercase tracking-wider text-xs">SMILE-AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="h-80 p-4 overflow-y-auto space-y-4 text-sm scrollbar-thin scrollbar-thumb-white/10">
            {response ? (
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 animate-fade-in">
                <p className="text-white/80 leading-relaxed">{response}</p>
                <button 
                  onClick={() => {setResponse(null); setQuery('');}} 
                  className="mt-3 text-cyan-400 font-bold uppercase text-[10px] tracking-widest hover:underline"
                >
                  New Question
                </button>
              </div>
            ) : (
              <div className="text-white/40 italic flex flex-col items-center justify-center h-full gap-4 text-center">
                <i className="fas fa-comment-dots text-3xl"></i>
                <p>Ask about implants, veneers, or whitening technology.</p>
              </div>
            )}
            {loading && (
              <div className="flex items-center gap-2 text-cyan-400">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.1s]"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.2s]"></div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-black/40">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="How can I optimize my smile?"
              className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-cyan-500 text-black rounded-full shadow-lg shadow-cyan-500/40 flex items-center justify-center text-xl transition-all hover:scale-110 active:scale-95 group"
        >
          <i className="fas fa-comment-medical group-hover:rotate-12 transition-transform"></i>
        </button>
      )}
    </div>
  );
};

export default Assistant;
