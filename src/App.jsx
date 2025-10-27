import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TokenEconomy from './components/TokenEconomy';
import CTA from './components/CTA';

const App = () => {
  const bgRef = useRef(null);

  // Subtle parallax for global background that follows cursor
  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 8; // range ~ -4..4
      const y = (e.clientY / h - 0.5) * 8;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black font-inter text-white">
      {/* Global 3D-like background: neon grid + radial glows with subtle parallax */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{
          backgroundImage:
            `radial-gradient(1200px 600px at 10% -10%, rgba(57,255,20,0.08), transparent 60%),
             radial-gradient(800px 500px at 90% 110%, rgba(57,255,20,0.06), transparent 60%),
             linear-gradient(transparent, transparent),
             linear-gradient(90deg, rgba(57,255,20,0.08) 1px, transparent 1px),
             linear-gradient(rgba(57,255,20,0.08) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 60px 60px, 60px 60px',
          backgroundPosition: 'center, center, center, center, center',
          transition: 'transform 100ms linear'
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
