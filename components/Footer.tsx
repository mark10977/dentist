
import React from 'react';

const Footer: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/creatingdentalx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=3366+Boston+Rd,+Bronx,+NY+10469";
  
  const socialLinks = [
    { icon: 'facebook-f', url: '#' },
    { icon: 'instagram', url: instagramUrl },
    { icon: 'twitter', url: '#' },
    { icon: 'youtube', url: '#' }
  ];

  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-tooth text-white text-2xl"></i>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase leading-none">
                Creating <br /> Dental <span className="text-cyan-400">Excellence</span>
              </span>
            </a>
            <p className="text-white/40 max-w-sm mb-8 font-medium">
              Elite performance dentistry by Dr. Thomas A. Sigafoos and Dr. Sarah Mitchell. Engineering the Bronx's most confident smiles since 1998.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex gap-4">
                {socialLinks.map(social => (
                  <a 
                    key={social.icon} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all"
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-purple-500/20"
              >
                <i className="fab fa-instagram text-base"></i>
                Follow on Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400 mb-8">Clinical Access</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Performance Implants</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cosmetic Architecture</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Meet the Doctors</a></li>
              <li><a href="#plans" className="hover:text-white transition-colors">Membership Plans</a></li>
              <li><a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">Get Directions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400 mb-8">Contact Base</h4>
            <address className="not-italic text-sm text-white/60 space-y-4 font-bold">
              <p className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-cyan-500"></i>
                <span>3366 Boston Rd<br />Bronx, NY 10469</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-phone text-cyan-500"></i>
                <a href="tel:17185475280" className="text-white hover:text-cyan-400 transition-colors">(718) 547-5280</a>
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-envelope text-cyan-500"></i>
                <a href="mailto:info@creatingdentalexcellence.com" className="text-white hover:text-cyan-400 transition-colors">info@cde.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-black tracking-widest text-white/20">
          <p>© 2024 Creating Dental Excellence Bronx. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Patient Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
