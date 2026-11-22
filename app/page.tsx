'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { siteConfig } from '../src/config/site';
import { 
  Radio, 
  Disc, 
  Ticket, 
  Mic2, 
  Crown, 
  Headphones, 
  ArrowRight, 
  Sparkles, 
  Banknote, 
  Play, 
  Pause, 
  Mail, 
  ChevronDown,
  ChevronUp,
  Cpu,
  BellRing
} from 'lucide-react';

export default function PortalGateway() {
  const { setOpenLetterOpen, setUserRole, tracks } = useStore();
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();
  const [specsOpen, setSpecsOpen] = useState(false);

  // Featured track (Lead single from ATWN EP by Nirati Dagwi x DK)
  const featuredTrack = tracks[0];
  const isFeaturedPlaying = currentTrack?.id === featuredTrack?.id && isPlaying;

  const handlePlayFeatured = () => {
    if (isFeaturedPlaying) {
      togglePlay();
    } else {
      playTrack(featuredTrack);
    }
  };

  const portalCards = [
    {
      id: 'artists',
      number: 'PORTAL 01 // CREATOR SANCTUARY',
      title: 'FOR ARTISTS & CREATORS',
      subtitle: 'Upload tracks, receive direct Naira fan tips, pitch for live festival stages, and retain 100% master rights.',
      badge: 'CREATOR HUB • 100% OWNERSHIP',
      icon: <Mic2 className="w-6 h-6 text-gold-400" />,
      actionText: 'Explore Artist Portal',
      href: '/artist-dashboard',
      accentColor: 'from-amber-500/20 via-gold-500/10 to-transparent',
      borderColor: 'hover:border-gold-500/80',
      iconBg: 'bg-gold-500/15 border-gold-500/40 text-gold-400',
      highlights: [
        'Direct fan tips deposited to Nigerian banks (Kuda, GTB, Zenith)',
        '100% master & publishing legal ownership retained',
        'Pitch for Showcase Stages (Dates & Locations: TBE)',
        'Global DSP distribution with automated royalty splits',
      ],
      onEnter: () => setUserRole('artist'),
    },
    {
      id: 'fans',
      number: 'PORTAL 02 // FAN MUSIC HUB',
      title: 'FOR MUSIC LOVERS & FANS',
      subtitle: 'Stream independent Alté and Afro-Fusion, explore editorial collections, and tip creators directly in Naira.',
      badge: 'DIRECT PATRONAGE • LOSSLESS',
      icon: <Headphones className="w-6 h-6 text-amber-300" />,
      actionText: 'Enter Music Hub',
      href: '/fan-hub',
      accentColor: 'from-gold-500/20 via-amber-500/10 to-transparent',
      borderColor: 'hover:border-amber-400/80',
      iconBg: 'bg-amber-500/15 border-amber-500/40 text-amber-300',
      highlights: [
        'Stream debut "ATWN" EP by DK x Nirati Dagwi',
        'Direct cash tipping in Naira (₦) via Paystack & Flutterwave',
        'Live supporter leaderboard & verified patron ranks',
        'Uncompressed high-fidelity sovereign web stream',
      ],
      onEnter: () => setUserRole('fan'),
    },
    {
      id: 'events',
      number: 'PORTAL 03 // LIVE ACTIVATIONS',
      title: 'EVENTS & TICKETS (TBE)',
      subtitle: 'Upcoming festival showcases, stage pitching, and crowd archives. All dates, locations, and flyers are currently TBE.',
      badge: 'STATUS: TBE (TO BE ANNOUNCED)',
      icon: <Ticket className="w-6 h-6 text-orange-400" />,
      actionText: 'Events & TBE Alert',
      href: '/events',
      accentColor: 'from-orange-500/20 via-amber-600/10 to-transparent',
      borderColor: 'hover:border-orange-500/80',
      iconBg: 'bg-orange-500/15 border-orange-500/40 text-orange-400',
      highlights: [
        'Royal Rave Showcase — Date: TBE • Location: TBE',
        'Official Event Flyers: TBE (No unverified flyers rendered)',
        '4 Open Headliner Slots for independent acts',
        'Priority TBE notification alert list via Email & WhatsApp',
      ],
      onEnter: () => {},
    },
    {
      id: 'about',
      number: 'PORTAL 04 // THE ECOSYSTEM',
      title: 'ABOUT DOWNTOWN RADIO',
      subtitle: 'Our cultural mission, founder visionary profile, global DSP delivery network, and the Artist Manifesto.',
      badge: 'VISION & STRATEGY • CEO NOTE',
      icon: <Crown className="w-6 h-6 text-yellow-300" />,
      actionText: 'Learn More & Ecosystem',
      href: '/about',
      accentColor: 'from-yellow-500/20 via-amber-500/10 to-transparent',
      borderColor: 'hover:border-yellow-400/80',
      iconBg: 'bg-yellow-500/15 border-yellow-500/40 text-yellow-300',
      highlights: [
        'The Mind Behind Downtown: DK (CEO & Pioneer Profile)',
        'Global digital delivery to Spotify, Apple, Audiomack & 17+ DSPs',
        'Downtown Pro Tier (₦5,000/mo) with 100% tip payout',
        'Open Artist Manifesto for African creative sovereignty',
      ],
      onEnter: () => {},
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden w-full">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[650px] h-[350px] bg-gradient-to-tr from-gold-500/10 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ========================================================= */}
      {/* ZONE 1: DECLUTTERED HERO SECTION                          */}
      {/* ========================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto space-y-4 mb-8 sm:mb-12 w-full pt-2"
      >
        {/* Unified Canonical Broadcasting Node Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-charcoal-850/90 border border-gold-500/30 text-[11px] font-mono uppercase tracking-widest text-zinc-300 shadow-md">
          <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-gold-500'}`} />
          <span className="text-gold-400 font-bold">Broadcasting Node:</span>
          <span>Ile-Ife & Lagos • 101.4 FM WAT</span>
        </div>

        {/* 1. Eyebrow Badge */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-gold-300 bg-gold-500/10 border border-gold-500/25">
            101.4 FM WAT • AFRICAN INDEPENDENT SOUND ECOSYSTEM
          </span>
        </div>

        {/* 2. Master Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-200">
            Downtown Radio.
          </span>
          <br />
          <span className="text-xl sm:text-3xl lg:text-4xl text-zinc-300 font-extrabold block mt-2">
            The Sovereign Frequency for African Sound.
          </span>
        </h1>

        {/* 3. Subheadline (One concise sentence enforcing TBE for live showcases) */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2 font-normal">
          Stream uncompressed alté releases, tip independent creators directly in Naira (₦), and discover curated live festival showcases (upcoming event dates, locations, and flyers listed as TBE).
        </p>

        {/* 4. Primary Hero Actions */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Action A: Play "Fur Sure" (ATWN EP) */}
          <button
            onClick={handlePlayFeatured}
            className="px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform active:scale-95 flex items-center gap-2.5"
          >
            {isFeaturedPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-charcoal-950" />
                <span>Pause "Fur Sure"</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-charcoal-950 ml-0.5" />
                <span>Play "Fur Sure" (ATWN EP)</span>
              </>
            )}
          </button>

          {/* Action B: Explore Artist Portal */}
          <Link
            href="/artist-dashboard"
            onClick={() => setUserRole('artist')}
            className="px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-zinc-200 hover:text-white bg-charcoal-800/90 hover:bg-charcoal-700 border border-white/10 hover:border-gold-500/40 transition-all flex items-center gap-2"
          >
            <Mic2 className="w-4 h-4 text-gold-400" />
            <span>Explore Artist Portal</span>
          </Link>
        </div>

        {/* Subtle Collapsible "Broadcast Specs" Pill */}
        <div className="pt-2">
          <button
            onClick={() => setSpecsOpen(!specsOpen)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-850/60 hover:bg-charcoal-800 border border-white/5 text-[10px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Cpu className="w-3 h-3 text-gold-400" />
            <span>Broadcast Specs & Carrier Telemetry</span>
            {specsOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          <AnimatePresence>
            {specsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-3 max-w-lg mx-auto"
              >
                <div className="p-3.5 rounded-2xl bg-charcoal-850/80 border border-gold-500/20 text-left text-[11px] font-mono space-y-1.5 text-zinc-400">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1">
                    <span className="text-gold-400 font-bold">SOVEREIGN NODE ARCHIVE:</span>
                    <span className="text-white">LAT 7.48° N, LONG 4.56° E</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1">
                    <span>AUDIO CARRIER:</span>
                    <span className="text-zinc-300">24-BIT / 96KHZ PCM LOSSLESS</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1">
                    <span>CASSETTE MASTER:</span>
                    <span className="text-zinc-300">33⅓ RPM • TYPE II CHROME</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>TRANSMISSION STATE:</span>
                    <span className="text-emerald-400 font-bold">
                      {isPlaying ? 'LIVE / PLAYING • 101.4 FM WAT' : 'READY TO STREAM • 101.4 FM WAT'}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </motion.section>

      {/* ========================================================= */}
      {/* ZONE 2: 4 PORTAL GATEWAY CARDS (2x2 Desktop / 1-Col Mobile) */}
      {/* ========================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 my-6 w-full items-stretch">
        {portalCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 * (index + 1) }}
            whileHover={{ y: -4 }}
            className={`group relative rounded-3xl bg-gradient-to-br from-charcoal-850/90 via-charcoal-900/90 to-charcoal-950/95 border-2 border-white/10 ${card.borderColor} backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-gold-glow-lg overflow-hidden w-full`}
          >
            {/* Top-Right Ambient Gradient */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${card.accentColor} rounded-full blur-2xl pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100`} />

            {/* Card Content Top */}
            <div className="relative z-10 space-y-3.5">
              
              {/* Header Lockup: Icon + Number + Badge */}
              <div className="flex items-start justify-between gap-3">
                <div className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                  {card.icon}
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                    {card.number}
                  </span>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-charcoal-950/90 text-gold-300 border border-gold-500/30">
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1 pt-1">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-gold-400 transition-colors">
                  {card.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {card.subtitle}
                </p>
              </div>

              {/* Bullet Features List */}
              <ul className="pt-2 space-y-1.5 border-t border-white/5">
                {card.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Card Action Button Bottom */}
            <div className="relative z-10 pt-5 mt-4">
              <Link
                href={card.href}
                onClick={card.onEnter}
                className="w-full py-3.5 px-5 rounded-2xl font-black text-xs sm:text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group/btn"
              >
                <span>{card.actionText}</span>
                <ArrowRight className="w-4 h-4 text-charcoal-950 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>
        ))}
      </section>

      {/* ========================================================= */}
      {/* ZONE 3: PLATFORM STATS & METRICS FROM SINGLE SOURCE OF TRUTH */}
      {/* ========================================================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="pt-6 border-t border-white/10 w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center w-full">
          <div className="p-3.5 rounded-2xl bg-charcoal-850/60 border border-white/5 space-y-0.5">
            <span className="text-lg sm:text-xl font-black text-gold-400 font-mono block">
              {siteConfig.stats.fanTipsPaidOut}
            </span>
            <span className="text-[10px] text-zinc-300 font-mono uppercase tracking-wider block font-bold">
              Fan Tips Paid Out
            </span>
            <span className="text-[9px] text-zinc-500 block">
              {siteConfig.stats.fanTipsLabel}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-charcoal-850/60 border border-white/5 space-y-0.5">
            <span className="text-lg sm:text-xl font-black text-white font-mono block">
              {siteConfig.stats.masterOwnershipKept}
            </span>
            <span className="text-[10px] text-zinc-300 font-mono uppercase tracking-wider block font-bold">
              Master Ownership
            </span>
            <span className="text-[9px] text-zinc-500 block">
              {siteConfig.stats.masterOwnershipLabel}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-charcoal-850/60 border border-white/5 space-y-0.5">
            <span className="text-lg sm:text-xl font-black text-amber-400 font-mono block">
              {siteConfig.stats.upcomingStatus}
            </span>
            <span className="text-[10px] text-zinc-300 font-mono uppercase tracking-wider block font-bold">
              Live Showcases
            </span>
            <span className="text-[9px] text-zinc-500 block">
              {siteConfig.stats.upcomingStatusLabel}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-charcoal-850/60 border border-white/5 space-y-0.5">
            <span className="text-lg sm:text-xl font-black text-emerald-400 font-mono block">
              {siteConfig.stats.openSlotsCount}
            </span>
            <span className="text-[10px] text-zinc-300 font-mono uppercase tracking-wider block font-bold">
              Open Showcase Slots
            </span>
            <span className="text-[9px] text-zinc-500 block">
              {siteConfig.stats.openSlotsLabel}
            </span>
          </div>
        </div>

        {/* Manifesto Invitation */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-charcoal-850/40 border border-gold-500/20 text-xs">
          <div className="flex items-center space-x-2 text-zinc-300">
            <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>An open letter from the founders to every African artist we're building this for.</span>
          </div>
          <button
            onClick={() => setOpenLetterOpen(true)}
            className="text-gold-400 hover:text-white font-bold transition-colors flex items-center gap-1 flex-shrink-0"
          >
            <span>Read The Manifesto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.section>

    </div>
  );
}
