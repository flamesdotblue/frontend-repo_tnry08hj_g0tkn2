import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Rocket, Brain } from 'lucide-react';

// Configurable URL with fallback to the new dark-themed Spline scene
const HERO_SPLINE_URL = import.meta.env.VITE_SPLINE_SCENE_URL || 'https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode';

const Hero = () => {
  return (
    <section id="top" className="relative h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene (interactive) */}
      <div className="absolute inset-0">
        <Spline scene={HERO_SPLINE_URL} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Non-blocking vignette and subtle purple tint for depth (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 220px rgba(0,0,0,0.65)' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(168,85,247,0.08),transparent)]" />

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
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text:black shadow-[0_10px_30px_rgba(57,255,20,0.35)] transition hover:brightness-110" style={{ backgroundColor: '#39FF14', color: '#000' }}>
            <Rocket className="h-4 w-4" />
            Explore OrbitX
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl border border-[#39FF14]/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-[#39FF14]/10">
            <Brain className="h-4 w-4 text-[#39FF14]" />
            Talk to our AI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
