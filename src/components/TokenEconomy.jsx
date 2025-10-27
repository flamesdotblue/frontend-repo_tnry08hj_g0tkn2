import React from 'react';
import { Coins } from 'lucide-react';

const TokenEconomy = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#39FF14]/10 via-[#39FF14]/5 to-transparent p-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10 px-3 py-1 text-xs text-[#c8ffd0]">
              <Coins className="h-4 w-4 text-[#39FF14]" /> Tokenized Rewards
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Launch your company coin</h3>
            <p className="mt-2 text-white/70">
              Give learners and employees an extra boost. Create branded discount coins to redeem courses, unlock premium modules, and incentivize completions across your organization.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#39FF14]" /> Redeemable discounts on courses</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#39FF14]" /> Transferable within your workspace</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#39FF14]" /> Automated issuance for achievements</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#39FF14]" /> On-chain transparency and caps</li>
            </ul>
          </div>

          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
            <h4 className="text-lg font-semibold">Coin simulator</h4>
            <p className="mt-1 text-sm text-white/70">Estimate how discounts translate to token amounts.</p>
            <form
              className="mt-4 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label className="text-sm text-white/80" htmlFor="budget">Monthly learning budget ($)</label>
              <input id="budget" type="number" min="0" defaultValue={5000} className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40" placeholder="5000" />

              <label className="text-sm text-white/80" htmlFor="discount">Average discount per course (%)</label>
              <input id="discount" type="number" min="0" max="100" defaultValue={15} className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40" placeholder="15" />

              <button type="button" onClick={() => {}}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(57,255,20,0.35)] transition hover:brightness-110" style={{ backgroundColor: '#39FF14' }}>
                Calculate
              </button>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                Example: With a $5,000 budget and 15% average discount, you could mint ~750 ORBX to distribute across teams.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenEconomy;
