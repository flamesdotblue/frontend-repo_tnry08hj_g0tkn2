import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TokenEconomy from './components/TokenEconomy';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Hero />
      <Features />
      <TokenEconomy />
      <CTA />
    </div>
  );
};

export default App;
