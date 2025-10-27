import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Shield className="h-4 w-4 text-purple-300" />
          <span className="text-xs text-white/80">AI + Blockchain Powered Learning</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          OrbitX
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          A powerful platform for enterprises to deliver immersive learning, issue tamper-proof blockchain certificates, and launch branded discount coins—secured, scalable, and smart.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:brightness-110">
            <Rocket className="h-4 w-4" />
            Explore OrbitX
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            <Brain className="h-4 w-4" />
            Talk to our AI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
