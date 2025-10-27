import React from 'react';
import { BadgeCheck, Brain, Shield, Building2 } from 'lucide-react';

const features = [
  {
    icon: <BadgeCheck className="h-6 w-6 text-[#39FF14]" />,
    title: 'Blockchain Certificates',
    desc: 'Issue tamper-proof credentials anchored on-chain with verifiable authenticity and instant validation.'
  },
  {
    icon: <Brain className="h-6 w-6 text-[#39FF14]" />,
    title: 'AI Learning Copilot',
    desc: 'Personalized guidance, smart quizzes, and contextual coaching that adapts to each learner.'
  },
  {
    icon: <Building2 className="h-6 w-6 text-[#39FF14]" />,
    title: 'Multi-Company Workspaces',
    desc: 'Spin up secure, branded portals for each organization with granular roles and permissions.'
  },
  {
    icon: <Shield className="h-6 w-6 text-[#39FF14]" />,
    title: 'Enterprise-Grade Security',
    desc: 'SSO-ready, audit trails, and encryption by default—built for scale and compliance.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for modern learning</h2>
        <p className="mt-3 text-white/70">Everything you need to deliver unforgettable learning experiences across multiple companies—powered by AI and secured by blockchain.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <div key={idx} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-[#39FF14]/50">
            <div className="mb-4 inline-flex rounded-xl bg-[#39FF14]/10 p-3 ring-1 ring-inset ring-[#39FF14]/20">{f.icon}</div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
