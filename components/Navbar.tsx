
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Implants', href: '#implants' },
    { name: 'Doctors', href: '#architecture' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Locations', href: '#locations' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-glass border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <i className="fas fa-tooth text-white text-xl"></i>
          </div>
          <span className="text-xl font-extrabold tracking-tighter uppercase hidden lg:inline">
            Creating <span className="text-cyan-400">Excellence</span>
          </span>
          <span className="text-xl font-extrabold tracking-tighter uppercase lg:hidden">
            CDE <span className="text-cyan-400">Dental</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all hover:scale-105 shadow-lg shadow-cyan-500/20">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`xl:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold uppercase tracking-widest hover:text-cyan-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-cyan-500 text-black px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
