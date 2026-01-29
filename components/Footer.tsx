
import React from 'react';

const Footer: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/creatingdentalx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  
  const socialLinks = [
    { icon: 'facebook-f', url: '#' },
    { icon: 'instagram', url: instagramUrl },
    { icon: 'twitter', url: '#' },
    { icon: 'youtube', url: '#' }
  ];

  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <p className="text-sm font-medium text-white/40 tracking-wide uppercase">
            Copyright 2024 © Creating Dental Excellence Group. All rights reserved.
          </p>
        </div>
        
        <div className="flex justify-center gap-6">
          {socialLinks.map(social => (
            <a 
              key={social.icon} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/20 hover:text-cyan-500 transition-colors text-lg"
            >
              <i className={`fab fa-${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
