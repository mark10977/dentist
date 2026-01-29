
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Implants from './components/Implants';
import Doctors from './components/Doctors';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Timetable from './components/Timetable';
import Blog from './components/Blog';
import Assistant from './components/Assistant';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        
        <section id="stats" className="py-20 bg-cyan-500 text-black overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 translate-x-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: 'Clinical Success', value: '99.8%' },
                { label: 'Digital Accuracy', value: '10 Microns' },
                { label: 'Lab Efficiency', value: '24hr Turn' },
                { label: 'Member Retention', value: '97%' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-6xl font-black uppercase mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutUs />
        <Services />
        <Implants />
        <Doctors />
        <Gallery />
        <Reviews />
        <Pricing />
        <Blog />
        <Timetable />
        <Locations />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
}

export default App;
