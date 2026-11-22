'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Crown, 
  Sparkles, 
  Check, 
  X, 
  Coins, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Radio,
  Music2
} from 'lucide-react';

export default function DowntownPro() {
  const { currentArtist, handleUpgradeToPro, proModalOpen, setProModalOpen } = useStore();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const tiers = [
    {
      name: 'Free Artist Account',
      priceNGN: '₦0',
      priceUSD: '$0',
      period: 'Forever free',
      desc: 'Everything an independent creator needs to start sharing tracks and receiving fan tips.',
      badge: 'STANDARD',
      buttonText: 'Current Plan',
      isCurrent: !currentArtist.isPro,
      features: [
        { label: 'Upload up to 3 tracks to Downtown Feed', included: true },
        { label: 'Receive direct fan tips in Naira', included: true },
        { label: 'Basic Artist Dashboard & Analytics', included: true },
        { label: 'Standard Festival Performance Pitching', included: true },
        { label: 'Fan Tip Platform Fee', detail: '8% Commission', included: true },
        { label: 'Guaranteed Playlist Placement', included: false },
        { label: 'Priority Stage Review for Ile-Ife & Lagos', included: false },
        { label: 'Fast-Track 24-Hour Global Distribution', included: false },
        { label: 'Gold Pro Badge on Artist Profile & Audio Player', included: false },
      ],
    },
    {
      name: 'Downtown Pro',
      priceNGN: billingCycle === 'monthly' ? '₦5,000' : '₦48,000',
      priceUSD: billingCycle === 'monthly' ? '$10' : '$96',
      period: billingCycle === 'monthly' ? '/ month' : '/ year (20% OFF)',
      desc: 'The definitive accelerator for ambitious African indie acts seeking festival stages and top-tier editorial reach.',
      badge: 'RECOMMENDED FOR INDIE ARTISTS',
      buttonText: currentArtist.isPro ? 'Pro Plan Active' : 'Upgrade to Downtown Pro',
      isCurrent: currentArtist.isPro,
      isFeatured: true,
      features: [
        { label: 'Unlimited Master Audio Uploads & Radio Ingest', included: true },
        { label: '0% Commission on Fan Tips (Keep 100% of Payouts)', included: true },
        { label: 'Guaranteed Placement on "Royal Rave Selects" & "Rooftop Vibe"', included: true },
        { label: 'Priority Pitching Review for Festival Stages', included: true },
        { label: 'Fast-Track 24-Hour Global Distribution to DSPs', included: true },
        { label: 'Advanced Fan Demographics & Payout Analytics', included: true },
        { label: 'Gold Pro Badge on Artist Profile & Live Feed', included: true },
        { label: 'Direct VIP Invites to Secret Industry Masterclasses', included: true },
      ],
    },
    {
      name: 'Downtown Label / VIP Collective',
      priceNGN: billingCycle === 'monthly' ? '₦25,000' : '₦240,000',
      priceUSD: billingCycle === 'monthly' ? '$50' : '$480',
      period: billingCycle === 'monthly' ? '/ month' : '/ year',
      desc: 'For indie collectives, boutique labels, and artist managers handling up to 10 artist rosters.',
      badge: 'LABEL ROSTER',
      buttonText: 'Contact Label Team',
      isCurrent: false,
      features: [
        { label: 'Manage up to 10 Artist Rosters & Sub-profiles', included: true },
        { label: '0% Commission on All Roster Fan Tips', included: true },
        { label: 'Bulk Multi-Artist Distribution Suite with automated splits', included: true },
        { label: 'Curate Official Guest Playlists on Downtown Radio', included: true },
        { label: 'Dedicated Downtown Radio A&R Representative', included: true },
        { label: 'Festival Stage Co-Host & Brand Activation Rights', included: true },
      ],
    },
  ];

  return (
    <div id="pro" className="space-y-12 my-8 scroll-mt-24">
      
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 text-xs font-extrabold text-gold-400 tracking-wider mb-4 border border-gold-500/30">
          <Crown className="w-4 h-4 text-gold-400" />
          <span>MONETIZATION & CAREER ACCELERATION</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Supercharge Your Music with <br />
          <span className="text-transparent bg-clip-text bg-gold-gradient">
            Downtown Pro
          </span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
          Unlock 0% tip commission, guaranteed playlist placement, and priority review for our rooftop gatherings in Ile-Ife and Lagos.
        </p>

        {/* Monthly vs Yearly Switcher */}
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-charcoal-850 border border-white/10 shadow-lg">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              billingCycle === 'yearly'
                ? 'bg-gold-500 text-charcoal-950 shadow-gold-glow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <span>Annual Billing</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
              SAVE 20%
            </span>
          </button>
        </div>
      </div>

      {/* PRICING TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, idx) => {
          return (
            <div
              key={idx}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.isFeatured
                  ? 'bg-charcoal-850/95 border-2 border-gold-500 shadow-gold-glow-lg -translate-y-2'
                  : 'bg-charcoal-850/80 border border-white/10 hover:border-white/20'
              }`}
            >
              {tier.isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gold-gradient text-charcoal-950 shadow-gold-glow">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  {tier.name}
                </div>

                <div className="flex items-baseline gap-2 my-3">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                    {tier.priceNGN}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    ({tier.priceUSD})
                  </span>
                  <span className="text-xs text-zinc-400">
                    {tier.period}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {tier.desc}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-6 border-t border-white/5 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2.5 text-xs">
                      {feat.included ? (
                        <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feat.included ? 'text-zinc-200' : 'text-zinc-500 line-through'}>
                        {feat.label}
                        {feat.detail && (
                          <span className="ml-1 text-gold-400 font-bold">({feat.detail})</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => {
                    if (tier.isFeatured && !currentArtist.isPro) {
                      setProModalOpen(true);
                    }
                  }}
                  disabled={tier.isCurrent}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    tier.isFeatured
                      ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow hover:shadow-gold-glow-lg active:scale-98 disabled:opacity-80'
                      : 'bg-charcoal-800 text-white hover:bg-charcoal-700 border border-white/10 disabled:opacity-50'
                  }`}
                >
                  {tier.isFeatured && <Crown className="w-4 h-4 fill-charcoal-950" />}
                  <span>{tier.buttonText}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* PRO CHECKOUT MODAL */}
      {proModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-charcoal-900 border border-gold-500/50 rounded-3xl p-6 sm:p-8 shadow-gold-glow-lg text-white">
            <button
              onClick={() => setProModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-zinc-400 hover:text-white"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gold-gradient text-charcoal-950 flex items-center justify-center mx-auto mb-3 shadow-gold-glow">
                <Crown className="w-7 h-7 fill-charcoal-950" />
              </div>
              <h3 className="text-2xl font-black text-white">
                Upgrade to Downtown Pro
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                ₦5,000 / month • Cancel anytime with 1-click
              </p>
            </div>

            <div className="space-y-3 mb-6 p-4 rounded-2xl bg-charcoal-800/80 border border-white/5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400" />
                <span>0% commission on fan tips in Naira</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400" />
                <span>Guaranteed "Royal Rave" playlist inclusion</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold-400" />
                <span>Priority pitch review for Ile-Ife & Lagos events</span>
              </div>
            </div>

            <button
              onClick={handleUpgradeToPro}
              className="w-full py-4 rounded-2xl font-black text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-98 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-charcoal-950" />
              <span>Confirm & Pay ₦5,000 via Paystack</span>
            </button>
            <p className="text-[10px] text-zinc-500 text-center mt-2.5">
              Instant activation. Your Gold Pro badge will be displayed across Downtown Radio immediately.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
