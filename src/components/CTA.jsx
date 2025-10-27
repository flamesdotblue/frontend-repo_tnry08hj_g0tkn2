import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-10 text-center">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to orbit the future of learning?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Launch your enterprise workspace, mint your coin, and empower teams with AI-driven learning—secured by blockchain.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:brightness-110">
            Get started
          </a>
          <a href="#features" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            See features
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} OrbitX. All rights reserved.</p>
    </section>
  );
};

export default CTA;
