'use client';

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, TrendingUp, ShieldCheck, ArrowRight, Zap, Banknote, Calculator } from 'lucide-react';

export default function ProofPointComparison() {
  const { setProModalOpen, openTippingModal, setActiveTab } = useStore();

  const platformComparisons = [
    {
      name: 'Downtown Radio (Pro Plan)',
      logo: '/images/downtown-radio-logo.jpg',
      percentage: 100,
      highlight: true,
      color: 'bg-gradient-to-r from-gold-400 via-amber-400 to-yellow-300',
      badge: '100% Payout',
      note: 'Zero commission cut on fan tips — paid directly to your Nigerian bank',
    },
    {
      name: 'Downtown Radio (Standard Tier)',
      logo: '/images/downtown-radio-logo.jpg',
      percentage: 90,
      highlight: false,
      color: 'bg-amber-600/90',
      badge: '90% Payout',
      note: 'Minimal 10% platform maintenance fee',
    },
    {
      name: 'YouTube Music & Fan Funding',
      logo: '/images/dsp/yt-music.png',
      percentage: 70,
      highlight: false,
      color: 'bg-zinc-600',
      badge: '70%',
      note: 'High gating: requires 1,000 subscribers & 4,000 watch hours',
    },
    {
      name: 'Conventional DSP Streams (Spotify/Apple)',
      logo: '/images/dsp/spotify.png',
      percentage: 15,
      highlight: false,
      color: 'bg-zinc-700',
      badge: '< $0.003 / play',
      note: 'Fractional penny per stream; requires millions of plays to earn a living',
    },
    {
      name: 'SoundCloud Premier & Creator Monetization',
      logo: '/images/dsp/soundcloud.png',
      percentage: 55,
      highlight: false,
      color: 'bg-zinc-700',
      badge: '55% Payout',
      note: 'Regional tier gating, ad thresholds, and delayed foreign currency settlements',
    },
  ];

  return (
    <section className="my-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: Original Downtown Radio Math & Philosophy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-bold uppercase tracking-wider text-gold-400">
            <Calculator className="w-3.5 h-3.5 text-gold-400" />
            <span>THE INDIE CREATOR ARITHMETIC</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Real Cultural Capital. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">
              The Power of 50 True Believers.
            </span>
          </h2>

          <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
            Stop waiting for corporate algorithms to validate your voice. When you build authentic community, you don't need millions of passive background streams to make music full-time.
          </p>

          {/* THE WORKED EXAMPLE BOX */}
          <div className="p-5 sm:p-6 rounded-3xl bg-charcoal-850 border border-gold-500/30 shadow-gold-glow w-full">
            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-gold-500/20 text-gold-400 flex-shrink-0 mt-0.5">
                <Banknote className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  The Downtown Reality Check
                </h4>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  <strong>50 loyal listeners</strong> back your project with <span className="text-gold-400 font-bold">₦2,000</span> each. You pocket a clean <strong className="text-emerald-400 font-black">₦90,000 — ₦100,000</strong> straight into your Nigerian account.
                </p>
                <div className="p-3 rounded-2xl bg-charcoal-900 border border-white/5 text-xs text-zinc-400">
                  ⚡ <em>To earn that same <strong>₦100,000</strong> on conventional foreign DSPs paying fractions of a cent, you would need over <span className="text-rose-400 font-bold">8.5 Million plays</span>.</em>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2 w-full">
            <button
              onClick={() => {
                setActiveTab('pro');
                setProModalOpen(true);
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Keep 100% of Every Tip (Pro Tier)</span>
              <ArrowRight className="w-4 h-4 text-charcoal-950" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Comparison Bars */}
        <div className="lg:col-span-6 w-full">
          <div className="p-5 sm:p-8 rounded-3xl bg-charcoal-850 border border-white/10 shadow-2xl space-y-6 w-full">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">
                  Creator Share of Fan Patronage
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Percentage of fan money reaching the artist directly
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-gold-400">% to Creator</span>
            </div>

            {/* Comparison Bar Items */}
            <div className="space-y-5">
              {platformComparisons.map((platform, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className={`flex items-center gap-2 ${platform.highlight ? 'text-gold-400 font-bold' : 'text-zinc-300'}`}>
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        className="w-4 h-4 rounded-full object-contain flex-shrink-0"
                      />
                      {platform.highlight && <Sparkles className="w-3.5 h-3.5 text-gold-400" />}
                      <span>{platform.name}</span>
                    </span>
                    <span className={`font-mono font-bold ${platform.highlight ? 'text-gold-400 text-base' : 'text-zinc-400'}`}>
                      {platform.badge}
                    </span>
                  </div>

                  {/* Visual Bar */}
                  <div className="w-full h-3 rounded-full bg-charcoal-900 overflow-hidden p-0.5 border border-white/5">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${platform.color}`}
                      style={{ width: `${platform.percentage}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-zinc-500 font-normal">
                    {platform.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/5 text-[11px] text-zinc-400 flex items-center justify-between">
              <span>*Based on publicly published creator revenue shares and payment terms.</span>
              <span className="text-gold-400 font-bold">Downtown Radio</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
