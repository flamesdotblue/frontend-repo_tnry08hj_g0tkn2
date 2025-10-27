import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TokenEconomy from './components/TokenEconomy';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black font-inter text-white">
      {/* Global 3D-like background: soft neon grid + radial glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            `radial-gradient(1200px 600px at 10% -10%, rgba(57,255,20,0.08), transparent 60%),
             radial-gradient(800px 500px at 90% 110%, rgba(57,255,20,0.06), transparent 60%),
             linear-gradient(transparent, transparent),
             linear-gradient(90deg, rgba(57,255,20,0.08) 1px, transparent 1px),
             linear-gradient(rgba(57,255,20,0.08) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 60px 60px, 60px 60px',
          backgroundPosition: 'center, center, center, center, center'
        }}
      />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 300px rgba(0,0,0,0.65)' }} />

      <Hero />
      <Features />
      <TokenEconomy />
      <CTA />
    </div>
  );
};

export default App;
