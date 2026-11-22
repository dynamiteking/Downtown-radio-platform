'use client';

import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, Heart, Sparkles, ArrowRight, ShieldCheck, Flame, Radio } from 'lucide-react';

export default function OpenLetterModal() {
  const { openLetterOpen, setOpenLetterOpen, setOnboardingModalOpen, setActiveTab, setUserRole } = useStore();

  if (!openLetterOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0F1217] text-zinc-100 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gold-500/40 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Glow corner */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setOpenLetterOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag */}
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
          <Radio className="w-4 h-4 text-gold-400" />
          <span>THE DOWNTOWN MANIFESTO • INDIE ARTIST CHARTER</span>
        </div>

        {/* Letter Heading */}
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
          Direct Fan Power Over Cents-Per-Stream.
        </h2>

        {/* Scrollable Letter Body */}
        <div className="overflow-y-auto pr-2 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
          <p className="text-gold-300 font-medium">
            To every visionary building original sound from Lagos, Ife, Abuja, Accra, and across the African underground —
          </p>

          <p>
            For too long, the independent creator economy has been held hostage by a broken global algorithm. Worldwide DSP models pay an average of ₦0.003 to ₦0.007 per play. That means an artist can amass 100,000 real human listeners and still not afford to pay for their next studio mix or rent an apartment in Lagos.
          </p>

          <p>
            The truth is simple: <strong>African music was built on community and genuine patronage.</strong> Before corporate streaming homogenised music discovery, listeners backed artists directly at shows, purchased physical bootlegs, and built personal bonds with their musical heroes.
          </p>

          <div className="p-4 rounded-2xl bg-charcoal-800/80 border border-gold-500/30 text-white font-medium italic">
            "We believe 50 true fans who genuinely believe in your art are worth infinitely more than 500,000 algorithmic skip-throughs. Our mission is to ensure those 50 fans can put real money straight into your Nigerian bank account without friction."
          </div>

          <p>
            <strong>Downtown Radio is our answer:</strong>
          </p>
          <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm text-zinc-300 pl-2">
            <li><strong className="text-white">Direct Fan Tipping in Naira:</strong> Instant bank transfers, cards, and Apple Pay landing in your account with up to 100% payout retention.</li>
            <li><strong className="text-white">Real Live Festival Stages:</strong> Performance slots curated exclusively for indie creators across our live showcases and festival activations (including the Royal Rave Showcase, Status: TBA).</li>
            <li><strong className="text-white">100% Master Ownership:</strong> You keep every single master right, split payments automatically, and distribute to Spotify, Apple, and Boomplay on your terms.</li>
          </ul>

          <div className="pt-4 border-t border-white/10">
            <p className="font-bold text-white">
              Yours in sovereign sound,<br />
              <span className="text-gold-400 font-black">The Downtown Radio Collective & Editorial Board</span><br />
              <span className="text-xs text-zinc-400 font-mono">Downtown Radio • Lagos & Ile-Ife, Nigeria</span>
            </p>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-400">
            ⚡ Zero app installs required. Fans never need to log in to support your sound.
          </span>
          <button
            onClick={() => {
              setOpenLetterOpen(false);
              setUserRole('artist');
              setActiveTab('artist-dashboard');
              setOnboardingModalOpen(true);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Claim Your Artist Space</span>
            <ArrowRight className="w-4 h-4 text-charcoal-950" />
          </button>
        </div>

      </div>
    </div>
  );
}
