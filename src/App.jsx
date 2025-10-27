import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black font-inter text-white">
      {/* Static neon background grid + subtle glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            `radial-gradient(1000px 500px at 10% -10%, rgba(57,255,20,0.06), transparent 60%),
             radial-gradient(700px 400px at 90% 110%, rgba(57,255,20,0.05), transparent 60%),
             linear-gradient(90deg, rgba(57,255,20,0.07) 1px, transparent 1px),
             linear-gradient(rgba(57,255,20,0.07) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 100% 100%, 60px 60px, 60px 60px',
          backgroundPosition: 'center, center, center, center',
        }}
      />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 300px rgba(0,0,0,0.65)' }} />

      <Navbar />
      <Hero />
      <section id="features"><Features /></section>
      <section id="cta"><CTA /></section>
    </div>
  );
};

export default App;
