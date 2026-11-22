'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { 
  Sparkles, 
  Mic2, 
  Headphones, 
  Disc, 
  Ticket, 
  Calendar, 
  Flame, 
  Radio, 
  Crown, 
  ArrowRight, 
  Banknote, 
  Play, 
  Pause, 
  ShieldCheck, 
  Mail, 
  Compass,
  Zap,
  Globe2
} from 'lucide-react';

export default function PortalGateway() {
  const { openTippingModal, setOpenLetterOpen, setUserRole, tracks } = useStore();
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();

  // Featured track for the live broadcast ticker (Lead single from ATWN EP)
  const featuredTrack = tracks[0]; // "FUR SURE" by Nirati Dagwi x DK
  const isFeaturedPlaying = currentTrack?.id === featuredTrack?.id && isPlaying;

  const portalCards = [
    {
      id: 'artists',
      number: 'PORTAL 01 // CREATOR SANCTUARY',
      title: 'FOR ARTISTS & CREATORS',
      subtitle: 'Upload tracks, submit performance pitches for Ile-Ife/Lagos, manage tips, and grow your audience.',
      badge: 'CREATOR HUB • 100% OWNERSHIP',
      icon: <Mic2 className="w-7 h-7 text-gold-400" />,
      actionText: 'Enter Artist Portal',
      href: '/artist-dashboard',
      accentColor: 'from-amber-500/20 via-gold-500/10 to-transparent',
      borderColor: 'group-hover:border-gold-500/80',
      iconBg: 'bg-gold-500/15 border-gold-500/40 text-gold-400',
      highlights: [
        'Direct fan tips deposited to Nigerian banks',
        '100% master & publishing legal ownership',
        'Pitch for Signature Festival Stages (Royal Rave)',
        'Global DSP distribution with automated splits',
      ],
      onEnter: () => setUserRole('artist'),
    },
    {
      id: 'fans',
      number: 'PORTAL 02 // FAN MUSIC HUB',
      title: 'FOR MUSIC LOVERS & FANS',
      subtitle: 'Stream independent music, explore curated playlists, and tip your favorite underground artists.',
      badge: 'DIRECT PATRONAGE • LOSSLESS',
      icon: <Headphones className="w-7 h-7 text-amber-300" />,
      actionText: 'Enter Music Hub',
      href: '/fan-hub',
      accentColor: 'from-gold-500/20 via-amber-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-400/80',
      iconBg: 'bg-amber-500/15 border-amber-500/40 text-amber-300',
      highlights: [
        'Play debut "ATWN" EP by DK x Nirati Dagwi',
        'Direct cash banknote tipping in Naira (₦)',
        'Live supporter leaderboard & Fan XP rank',
        'Exclusive uncompressed Alté & Afro-Fusion',
      ],
      onEnter: () => setUserRole('fan'),
    },
    {
      id: 'events',
      number: 'PORTAL 03 // LIVE ACTIVATIONS',
      title: 'EVENTS & TICKETS',
      subtitle: 'Explore live event activations, photo archives, and pitch to perform. Royal Rave Showcase status: To Be Announced (TBA).',
      badge: 'STATUS: TO BE ANNOUNCED (TBA)',
      icon: <Ticket className="w-7 h-7 text-orange-400" />,
      actionText: 'Explore Events & Tickets',
      href: '/events',
      accentColor: 'from-orange-500/20 via-amber-600/10 to-transparent',
      borderColor: 'group-hover:border-orange-500/80',
      iconBg: 'bg-orange-500/15 border-orange-500/40 text-orange-400',
      highlights: [
        'Royal Rave Showcase (Status: TBA)',
        'Open Headliner Slots for independent acts',
        'Signature Sound Systems & All-Night Bass',
        'Authentic crowd photo documentary & video reels',
      ],
      onEnter: () => {},
    },
    {
      id: 'about',
      number: 'PORTAL 04 // THE ECOSYSTEM',
      title: 'ABOUT DOWNTOWN RADIO',
      subtitle: 'Discover our mission, global music distribution services, and the culture driving West African youth entertainment.',
      badge: 'VISION & STRATEGY • CEO NOTE',
      icon: <Crown className="w-7 h-7 text-yellow-300" />,
      actionText: 'Learn More',
      href: '/about',
      accentColor: 'from-yellow-500/20 via-amber-500/10 to-transparent',
      borderColor: 'group-hover:border-yellow-400/80',
      iconBg: 'bg-yellow-500/15 border-yellow-500/40 text-yellow-300',
      highlights: [
        'The Mind Behind Downtown: DK (CEO Profile)',
        'Global digital distribution to Spotify & Apple',
        'Downtown Pro Tier (₦5,000/mo) & Fellowships',
        'An Open Letter to every African indie artist',
      ],
      onEnter: () => {},
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden w-full">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[650px] h-[350px] bg-gradient-to-tr from-gold-500/10 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ZONE 1: HERO HEADER & BROADCAST SIGNAL */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto space-y-4 mb-6 sm:mb-8 w-full"
      >
        {/* Live Broadcast Signal Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-charcoal-850 border border-gold-500/30 text-[11px] font-mono uppercase tracking-widest text-zinc-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gold-400 font-bold">BROADCASTING NODE:</span>
          <span>Lagos & Ile-Ife • 101.4 FM WAT</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-200">
            Downtown Radio.
          </span>
          <br />
          <span className="text-xl sm:text-3xl lg:text-4xl text-zinc-300 font-extrabold block mt-2">
            Select Your Portal Gateway.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2">
          The sovereign frequency for African independent sound. Stream raw alté releases, tip creators directly in Naira, lock festival tickets, or scale your recording career.
        </p>

        {/* Live Audio Snippet Bar (Now Streaming ATWN EP) */}
        {featuredTrack && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="pt-2 w-full max-w-xl mx-auto"
          >
            <div className="p-3.5 sm:p-4 rounded-2xl bg-charcoal-850/90 border border-gold-500/30 shadow-gold-glow flex items-center justify-between gap-3 text-left w-full">
              <div className="flex items-center space-x-3 overflow-hidden flex-1 min-w-0">
                <div 
                  onClick={() => {
                    if (isFeaturedPlaying) togglePlay();
                    else playTrack(featuredTrack);
                  }}
                  className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer border border-gold-500/40 shadow-sm group"
                >
                  <img
                    src={featuredTrack.coverUrl || "/images/atwn/atwn-cover.jpg"}
                    alt={featuredTrack.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
                    {isFeaturedPlaying ? (
                      <Pause className="w-5 h-5 fill-white" />
                    ) : (
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    )}
                  </div>
                </div>

                <div className="overflow-hidden flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-mono uppercase font-bold text-gold-400">
                      NOW STREAMING:
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-gold-500/20 text-gold-300 font-mono font-bold">
                      ATWN EP
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-white truncate">
                    {featuredTrack.title} — {featuredTrack.artist}
                  </h4>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => openTippingModal(featuredTrack)}
                  className="px-3.5 py-2 rounded-xl text-xs font-black text-charcoal-950 bg-gold-gradient shadow-sm hover:shadow-gold-glow transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Banknote className="w-4 h-4 text-charcoal-950" />
                  <span>Tip (₦)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.section>

      {/* ZONE 2: THE FOUR INTERACTIVE PORTAL CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 my-6 w-full">
        {portalCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            whileHover={{ y: -6 }}
            className={`group relative rounded-3xl bg-gradient-to-br from-charcoal-850/90 via-charcoal-900/90 to-charcoal-950/95 border-2 border-white/10 ${card.borderColor} backdrop-blur-xl p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-gold-glow-lg overflow-hidden w-full`}
          >
            {/* Top-Right Background Radial Accent */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${card.accentColor} rounded-full blur-2xl pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100`} />

            {/* Card Content Top */}
            <div className="relative z-10 space-y-4">
              
              {/* Header Lockup: Icon + Number + Badge */}
              <div className="flex items-start justify-between gap-3">
                <div className={`w-14 h-14 rounded-2xl ${card.iconBg} border flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
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
              <div className="space-y-1.5 pt-1">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-gold-400 transition-colors">
                  {card.title}
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
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
            <div className="relative z-10 pt-6 mt-4">
              <Link
                href={card.href}
                onClick={card.onEnter}
                className="w-full py-4 px-5 rounded-2xl font-black text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group/btn"
              >
                <span>{card.actionText}</span>
                <ArrowRight className="w-4 h-4 text-charcoal-950 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>
        ))}
      </section>

      {/* ZONE 3: PLATFORM TELEMETRY & MANIFESTO FOOTER HOOK */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pt-6 border-t border-white/10 w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center w-full">
          <div className="p-3.5 rounded-2xl bg-charcoal-850/60 border border-white/5">
            <span className="text-lg sm:text-xl font-black text-gold-400 font-mono block">₦1,802,500+</span>
            <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Fan Tips Paid Out</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-charcoal-850/60 border border-white/5">
            <span className="text-lg sm:text-xl font-black text-white font-mono block">100%</span>
            <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Master Ownership Kept</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-charcoal-850/60 border border-white/5">
            <span className="text-lg sm:text-xl font-black text-amber-400 font-mono block">STATUS: TBA</span>
            <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Royal Rave Showcase</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-charcoal-850/60 border border-white/5">
            <span className="text-lg sm:text-xl font-black text-emerald-400 font-mono block">4 Slots</span>
            <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Open Performance Slots</span>
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
