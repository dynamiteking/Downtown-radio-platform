'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '../context/StoreContext';
import { 
  Heart, 
  Banknote, 
  Radio, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Ticket, 
  Zap, 
  Headphones,
  Award
} from 'lucide-react';

export default function FanPatronageGuide() {
  const { openTippingModal, tracks } = useStore();
  const sampleTrack = tracks[0];

  const steps = [
    {
      step: '01',
      title: 'Stream Uncompromised Masters',
      description: 'Listen to lossless audio directly from raw studio files — no algorithmic gatekeepers or playlist payola.',
      icon: <Headphones className="w-5 h-5 text-gold-400" />,
      badge: 'Lossless Audio',
    },
    {
      step: '02',
      title: 'Tip Artists Directly in Naira (₦)',
      description: 'Found a track you love? Back the creator instantly via Nigerian bank transfer, USSD, debit card, or Apple Pay.',
      icon: <Banknote className="w-5 h-5 text-emerald-400" />,
      badge: 'Zero Friction',
    },
    {
      step: '03',
      title: '100% Reaches the Creator',
      description: 'Your patronage bypasses greedy corporate intermediaries and lands straight into the artist’s verified local bank account.',
      icon: <ShieldCheck className="w-5 h-5 text-gold-400" />,
      badge: 'Direct Impact',
    },
    {
      step: '04',
      title: 'Unlock Community Perks & VIP Notes',
      description: 'Earn top supporter badges on the leaderboard, receive personalized notes from artists, and get palace festival guestlist perks.',
      icon: <Award className="w-5 h-5 text-amber-400" />,
      badge: 'Inner Circle',
    },
  ];

  return (
    <section className="my-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold uppercase tracking-wider text-gold-400 mb-3 shadow-gold-glow">
          <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          <span>DIRECT FAN PATRONAGE FOR MUSIC LOVERS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          How Your Love Directly Powers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-200">
            Independent African Music.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
          On conventional platforms, your streams pay fractions of a penny after months of corporate delays. On Downtown Radio, your patronage lands directly into the artist's hands in seconds.
        </p>
      </div>

      {/* 4 Feature Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-charcoal-850 border border-white/5 hover:border-gold-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-gold-500/5 rounded-full blur-xl group-hover:bg-gold-500/10 transition-colors pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-gold-400">
                  STEP {item.step}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-charcoal-800 text-zinc-300 border border-white/5">
                  {item.badge}
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-charcoal-900 border border-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md">
                {item.icon}
              </div>

              <h3 className="text-lg font-black text-white mb-2 leading-tight">
                {item.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-[11px] font-mono text-zinc-500">
              <span>Downtown Fan Experience</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fan CTA Banner: Support An Artist & Grab Royal Rave Tickets */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-charcoal-850 via-charcoal-900 to-charcoal-950 border border-gold-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400">
            <Zap className="w-3.5 h-3.5 text-gold-400" />
            <span>HEAR THEM LIVE AT RED HORN</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Meet the Artists at Royal Rave Festival
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300">
            Saturday, 14th November 2026 (9PM — 5AM) at Red Horn, Ife. Connect with the creators you support in an intimate palace rooftop atmosphere.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
          {sampleTrack && (
            <button
              onClick={() => openTippingModal(sampleTrack)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Banknote className="w-4 h-4 text-charcoal-950" />
              <span>Tip {sampleTrack.artist.split('&')[0]} (₦)</span>
            </button>
          )}

          <Link
            href="/events#ticket-booking-section"
            className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs text-zinc-200 hover:text-white bg-charcoal-800 border border-white/10 hover:border-gold-500/30 transition-all flex items-center justify-center gap-2"
          >
            <Ticket className="w-4 h-4 text-amber-400" />
            <span>🎟️ Get Festival Tickets</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
