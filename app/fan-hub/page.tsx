'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '../../context/StoreContext';
import HeroBanner from '../../components/HeroBanner';
import TrackFeed from '../../components/TrackFeed';
import Leaderboard from '../../components/Leaderboard';
import CuratedPlaylists from '../../components/CuratedPlaylists';
import FanPatronageGuide from '../../components/FanPatronageGuide';
import NativeAppsBanner from '../../components/NativeAppsBanner';
import { ArrowLeft, Banknote, Ticket, Radio, Sparkles, Disc, Flame } from 'lucide-react';

export default function FanHubPage() {
  const { openTippingModal, tracks } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-fade-in space-y-14">
      
      {/* Top Portal Breadcrumb & Live Frequency Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-charcoal-850/80 border border-white/5 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white bg-charcoal-900 border border-white/10 hover:border-gold-500/40 transition-all shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-gold-400" />
            <span>Portal Gateway</span>
          </Link>
          <span className="text-zinc-600">/</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
              Music Hub & Underground Discovery
            </span>
          </div>
        </div>

        {/* Quick Fan Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => openTippingModal(tracks[0])}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <Banknote className="w-3.5 h-3.5 text-charcoal-950" />
            <span>Tip Featured Artist (₦)</span>
          </button>

          <Link
            href="/events#ticket-booking-section"
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-charcoal-800 border border-white/10 hover:border-gold-500/30 transition-all flex items-center gap-1.5"
          >
            <Ticket className="w-3.5 h-3.5 text-amber-400" />
            <span>Royal Rave Tickets</span>
          </Link>
        </div>
      </div>

      {/* Hero Banner Carousel (Royal Rave Festival + Top Indie Tracks) */}
      <HeroBanner />

      {/* Two Column Layout: Main Underground Track Feed & Live Fan Supporter Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
        
        {/* Music Feed with Instant Cash Tipping (8 cols on desktop) */}
        <div className="lg:col-span-8">
          <TrackFeed />
        </div>

        {/* Live Fan Leaderboard & Festival Ticket Teaser (4 cols on desktop) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <Leaderboard />

          {/* Festival Ticket Shortcut Card for Music Fans */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-charcoal-800 to-charcoal-850 border border-gold-500/30 shadow-gold-glow text-left relative overflow-hidden group">
            <div className="flex items-center space-x-2 text-gold-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>LIVE GATHERING</span>
            </div>
            <h3 className="text-lg font-black text-white mb-2 leading-tight">
              Royal Rave Rooftop Gathering
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed mb-4">
              Red Horn, Ife, Osun State. Saturday, 14th November (9PM — 5AM). Experience the sovereign underground sound live under palace lights.
            </p>
            <Link
              href="/events#ticket-booking-section"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5 text-charcoal-950" />
              <span>🎟️ Secure Festival Tickets</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Curated Editorial Playlists */}
      <CuratedPlaylists />

      {/* Fan Patronage Guide: How Your Support Directly Empowers Indie African Music */}
      <FanPatronageGuide />

      {/* Native Web App & Coming Soon App Stores */}
      <NativeAppsBanner />

    </div>
  );
}
