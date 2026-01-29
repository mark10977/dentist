
import React from 'react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  const quickLinks = ['Home', 'About Us', 'Implants', 'Services', 'Gallery', 'Locations'];

  return (
    <section id="locations" className="bg-[#4db6ac] text-black pt-16 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Locations Grid */}
          <div className="flex-grow">
            <div className="bg-white/90 inline-block px-10 py-3 mb-10">
              <h2 className="text-3xl font-light tracking-widest uppercase">Locations</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {LOCATIONS.map((loc, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="text-xl font-bold uppercase mb-1 tracking-tight">{loc.county}</h3>
                  <h4 className="text-lg font-bold mb-1">{loc.city}</h4>
                  <p className="text-lg font-bold mb-3">{loc.name}</p>
                  
                  <div className="space-y-0 text-md font-medium mb-4 opacity-80">
                    {loc.services.map((service, sIdx) => (
                      <p key={sIdx}>{service}</p>
                    ))}
                  </div>

                  <div className="text-md font-medium opacity-80 mb-4">
                    <p>{loc.address}</p>
                    <p>{loc.cityStateZip}</p>
                    <p>Phone: {loc.phone}</p>
                  </div>

                  <a 
                    href={loc.websiteUrl} 
                    className="inline-block text-cyan-800 font-bold hover:underline transition-all mt-2"
                  >
                    {loc.websiteLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:w-64">
            <div className="bg-white p-10 h-full min-h-[300px]">
              <h3 className="text-3xl font-bold text-gray-500 mb-8 tracking-tight">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map(link => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '')}`} 
                      className="text-lg text-cyan-600 hover:text-cyan-800 transition-colors flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
