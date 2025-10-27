import React from 'react';
import { Shield, Rocket, Brain } from 'lucide-react';
import InteractiveParticles from './InteractiveParticles';

// Pure CSS/canvas hero (no Spline). Neon, dark, with a faux-3D rotating ring.
const Hero = () => {
  return (
    <section id="top" className="relative h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Background accents */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            `radial-gradient(60% 40% at 50% -10%, rgba(168,85,247,0.12), transparent 60%),
             radial-gradient(50% 30% at 90% 100%, rgba(57,255,20,0.08), transparent 60%)`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 240px rgba(0,0,0,0.75)' }} />

      {/* Interactive neon particles (canvas) */}
      <InteractiveParticles count={140} color="#39FF14" />

      {/* Faux-3D centerpiece */}
      <div className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[460px] w-[460px] sm:h-[520px] sm:w-[520px]" style={{ perspective: '1200px' }}>
          {/* Rotating neon ring */}
          <div
            className="absolute inset-0 m-auto h-[65%] w-[65%] rounded-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(65deg) rotateZ(0deg)',
              animation: 'spin 18s linear infinite',
              border: '3px solid transparent',
              background: 'conic-gradient(from 0deg, rgba(168,85,247,0.0), rgba(168,85,247,0.6), rgba(57,255,20,0.7), rgba(168,85,247,0.6), rgba(168,85,247,0.0))',
              filter: 'drop-shadow(0 0 24px rgba(57,255,20,0.35))',
              maskComposite: 'intersect'
            }}
          />
          {/* Glowing core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-48 w-48 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(57,255,20,0.45),rgba(57,255,20,0.1)_40%,transparent_70%)] blur-[2px]" />
          </div>
          {/* Subtle grid plane */}
          <div
            className="absolute inset-0"
            style={{
              transform: 'rotateX(70deg)',
              backgroundImage: 'linear-gradient(rgba(57,255,20,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.08) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              backgroundPosition: 'center',
              opacity: 0.25,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Shield className="h-4 w-4 text-[#39FF14]" />
          <span className="text-xs text-white/80">AI + Blockchain Powered Learning</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          OrbitX
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          A powerful platform for enterprises to deliver immersive learning, issue tamper-proof blockchain certificates, and launch branded discount coins—secured, scalable, and smart.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(57,255,20,0.35)] transition hover:brightness-110" style={{ backgroundColor: '#39FF14' }}>
            <Rocket className="h-4 w-4" />
            Explore OrbitX
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl border border-[#39FF14]/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-[#39FF14]/10">
            <Brain className="h-4 w-4 text-[#39FF14]" />
            Talk to our AI
          </a>
        </div>
      </div>

      {/* Keyframes for spin */}
      <style>{`
        @keyframes spin { from { transform: rotateX(65deg) rotateZ(0deg); } to { transform: rotateX(65deg) rotateZ(360deg); } }
      `}</style>
    </section>
  );
};

export default Hero;
