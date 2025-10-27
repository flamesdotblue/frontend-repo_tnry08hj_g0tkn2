import React from 'react';
import { Rocket, Star } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-lg">
          <a href="#top" className="inline-flex items-center gap-2">
            <Logo />
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#token" className="hover:text-white">Token</a>
            <a href="#cta" className="hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(57,255,20,0.35)] transition hover:brightness-110"
              style={{ backgroundColor: '#39FF14' }}
            >
              <Rocket className="h-4 w-4" /> Launch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
