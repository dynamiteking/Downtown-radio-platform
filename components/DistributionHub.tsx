'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Share2, 
  Sparkles, 
  ShieldCheck, 
  Banknote, 
  Radio, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  TrendingUp, 
  Check, 
  Sliders,
  Filter
} from 'lucide-react';

interface PlatformItem {
  id: string;
  name: string;
  logo: string;
  category: 'music' | 'podcast' | 'radio';
  categoryLabel: string;
  reach: string;
  highlight?: boolean;
}

const ALL_PLATFORMS: PlatformItem[] = [
  // Top Streaming Platforms
  { id: 'spotify', name: 'Spotify', logo: '/images/dsp/spotify.png', category: 'music', categoryLabel: 'Music Stream', reach: '38% Global Share', highlight: true },
  { id: 'apple-music', name: 'Apple Music', logo: '/images/dsp/apple-music.png', category: 'music', categoryLabel: 'Lossless & Spatial', reach: '29% Global Share', highlight: true },
  { id: 'audiomack', name: 'Audiomack', logo: '/images/dsp/audiomack.png', category: 'music', categoryLabel: 'African Underground', reach: 'Top in Nigeria & Ghana', highlight: true },
  { id: 'boomplay', name: 'Boomplay', logo: '/images/dsp/boomplay.png', category: 'music', categoryLabel: 'Pan-African Leader', reach: '100M+ African Users', highlight: true },
  { id: 'yt-music', name: 'YouTube Music', logo: '/images/dsp/yt-music.png', category: 'music', categoryLabel: 'Video & Audio', reach: '2B+ Global Viewers', highlight: true },
  { id: 'tidal', name: 'Tidal', logo: '/images/dsp/tidal.png', category: 'music', categoryLabel: 'Master Quality (MQA)', reach: 'Highest Payout / Stream' },
  { id: 'amazon-music', name: 'Amazon Music', logo: '/images/dsp/amazon-music.png', category: 'music', categoryLabel: 'HD Audio & Echo', reach: 'Prime Ecosystem' },
  { id: 'deezer', name: 'Deezer', logo: '/images/dsp/deezer.png', category: 'music', categoryLabel: 'HiFi Streaming', reach: 'Europe & Francophone' },
  { id: 'soundcloud', name: 'SoundCloud', logo: '/images/dsp/soundcloud.png', category: 'music', categoryLabel: 'Indie & Alté Culture', reach: 'Direct Creator Fans' },
  { id: 'shazam', name: 'Shazam', logo: '/images/dsp/shazam.png', category: 'music', categoryLabel: 'Audio Fingerprint', reach: '1B+ Monthly IDs' },
  { id: 'pandora', name: 'Pandora', logo: '/images/dsp/pandora.png', category: 'music', categoryLabel: 'Radio Algorithm', reach: 'North America' },
  { id: 'qq-music', name: 'QQ Music', logo: '/images/dsp/qq-music.png', category: 'music', categoryLabel: 'Tencent Asian Network', reach: '800M+ Listeners' },
  { id: 'jio-saavn', name: 'JioSaavn', logo: '/images/dsp/jio-saavn.png', category: 'music', categoryLabel: 'South Asian & Diaspora', reach: '100M+ Subscribers' },
  
  // Radio & Broadcast
  { id: 'iheart-radio', name: 'iHeartRadio', logo: '/images/dsp/iheart-radio.png', category: 'radio', categoryLabel: 'Live FM / Online', reach: 'US Radio Network' },
  { id: 'tunein-radio', name: 'TuneIn Radio', logo: '/images/dsp/tunein-radio.png', category: 'radio', categoryLabel: 'Global Live Radio', reach: '100,000+ Stations' },

  // Podcasts & Spoken Word
  { id: 'apple-podcasts', name: 'Apple Podcasts', logo: '/images/dsp/apple-podcasts.png', category: 'podcast', categoryLabel: 'Podcast Leader', reach: 'Global Reach' },
  { id: 'audible', name: 'Audible', logo: '/images/dsp/audible.png', category: 'podcast', categoryLabel: 'Audiobooks & Originals', reach: 'Amazon Network' },
  { id: 'castbox', name: 'Castbox', logo: '/images/dsp/castbox.png', category: 'podcast', categoryLabel: 'On-Demand Audio', reach: '30M+ Listeners' },
  { id: 'pocket-casts', name: 'Pocket Casts', logo: '/images/dsp/pocket-casts.png', category: 'podcast', categoryLabel: 'Power Listeners', reach: 'iOS & Android' },
  { id: 'podcast-addict', name: 'Podcast Addict', logo: '/images/dsp/podcast-addict.png', category: 'podcast', categoryLabel: 'Android Network', reach: '10M+ Downloads' },
];

export default function DistributionHub() {
  const { setDistributionModalOpen, releases, setProModalOpen, setActiveTab } = useStore();
  const [projectedStreams, setProjectedStreams] = useState<number>(250000);
  const [filterCategory, setFilterCategory] = useState<'all' | 'music' | 'radio' | 'podcast'>('all');

  // Revenue estimation calculation (approx $3.50 - $4.00 per 1000 streams across Spotify/Apple/Boomplay)
  const projectedEarningsUSD = Math.round((projectedStreams / 1000) * 3.8);
  const projectedEarningsNGN = Math.round(projectedEarningsUSD * 1550);

  const filteredPlatforms = filterCategory === 'all'
    ? ALL_PLATFORMS
    : ALL_PLATFORMS.filter(p => p.category === filterCategory);

  const features = [
    {
      title: '100% Royalty & Master Ownership',
      icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
      desc: 'You keep complete legal ownership of your sound recordings and publishing masters. No predatory 360-contracts.',
    },
    {
      title: 'Automated Split Payments',
      icon: <Banknote className="w-6 h-6 text-gold-400" />,
      desc: 'Collaborated with producers, featured vocalists, or mixing engineers? Set split percentages once; payments route automatically.',
    },
    {
      title: 'Guaranteed Downtown Radio Airplay',
      icon: <Radio className="w-6 h-6 text-gold-400" />,
      desc: 'Every distributed track is immediately reviewed by our resident curators for live broadcast on the Downtown Radio web stream.',
    },
    {
      title: 'Dedicated Editorial & Marketing Boosts',
      icon: <TrendingUp className="w-6 h-6 text-gold-400" />,
      desc: 'Direct pitch to Spotify Africa, Apple Music African Alté, and Boomplay editors with Downtown curation clout.',
    },
  ];

  return (
    <div className="space-y-12 my-8">
      
      {/* HERO BANNER */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-charcoal-850 p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 text-xs font-extrabold text-gold-400 tracking-wider mb-4 border border-gold-500/30">
            <Share2 className="w-3.5 h-3.5" />
            <span>GLOBAL MUSIC DISTRIBUTION NETWORK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Release Your Music Everywhere. <br />
            <span className="text-transparent bg-clip-text bg-gold-gradient">
              Keep 100% of Your Masters.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
            Distribute your singles, EPs, and albums to Spotify, Apple Music, Audiomack, Boomplay, and 150+ digital streaming platforms worldwide with automated royalty splits in Nigerian Naira and US Dollars.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setDistributionModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl font-black text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-charcoal-950" />
              <span>Submit Unreleased Master for Distribution</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => {
                setActiveTab('pro');
                setProModalOpen(true);
              }}
              className="px-5 py-3.5 rounded-2xl font-bold text-sm text-gold-400 bg-charcoal-800/90 border border-gold-500/40 hover:border-gold-500 transition-all flex items-center gap-2"
            >
              <span>Explore Downtown Pro Plan</span>
            </button>
          </div>
        </div>
      </div>

      {/* 20 OFFICIAL PLATFORMS SHOWCASE */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
              <Globe2 className="w-3.5 h-3.5" />
              <span>20+ OFFICIAL STREAMING & BROADCAST PARTNERS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Worldwide Delivery Channels
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Live in 48 — 72 hours across verified global DSPs, podcast hubs, and international radio networks.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-charcoal-900 border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterCategory === 'all'
                  ? 'bg-gold-500 text-charcoal-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All (20)
            </button>
            <button
              onClick={() => setFilterCategory('music')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterCategory === 'music'
                  ? 'bg-gold-500 text-charcoal-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Music DSPs (13)
            </button>
            <button
              onClick={() => setFilterCategory('podcast')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterCategory === 'podcast'
                  ? 'bg-gold-500 text-charcoal-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Podcasts (5)
            </button>
            <button
              onClick={() => setFilterCategory('radio')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterCategory === 'radio'
                  ? 'bg-gold-500 text-charcoal-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Radio (2)
            </button>
          </div>
        </div>

        {/* The Exact Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3.5">
          {filteredPlatforms.map(p => (
            <div
              key={p.id}
              className={`p-3.5 rounded-2xl bg-charcoal-850/80 border transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center relative overflow-hidden ${
                p.highlight
                  ? 'border-gold-500/30 hover:border-gold-400 shadow-md'
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              {p.highlight && (
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              )}

              {/* Exact Official Circular Logo Image */}
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2.5 p-0.5 bg-charcoal-900/60 border border-white/10 group-hover:scale-110 group-hover:border-gold-500/50 transition-transform flex items-center justify-center shadow-lg">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="text-xs font-extrabold text-white mb-0.5 truncate w-full group-hover:text-gold-400 transition-colors">
                {p.name}
              </div>

              <div className="text-[10px] text-gold-400/80 font-medium truncate w-full">
                {p.categoryLabel}
              </div>

              <div className="text-[9px] text-zinc-500 font-mono mt-1 pt-1 border-t border-white/5 w-full truncate">
                {p.reach}
              </div>
            </div>
          ))}
        </div>

        {/* Master Official Logos Banner Strip */}
        <div className="p-4 rounded-2xl bg-charcoal-900/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              All 20 delivery destinations receive verified uncompressed ISRC & UPC digital distribution automatically.
            </span>
          </div>
          <button
            onClick={() => setDistributionModalOpen(true)}
            className="text-xs font-bold text-gold-400 hover:text-gold-300 whitespace-nowrap flex items-center gap-1"
          >
            <span>Launch Distribution Console</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4 CORE VALUE PILLARS */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
            Engineered for Creators
          </h3>
          <p className="text-xl sm:text-2xl font-black text-white">
            Why Indie Artists Choose Downtown Distribution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-charcoal-850/90 border border-white/5 hover:border-gold-500/40 transition-all shadow-lg flex items-start space-x-4"
            >
              <div className="p-3 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex-shrink-0">
                {feat.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1.5">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE ROYALTY CALCULATOR */}
      <div className="bg-charcoal-850/90 rounded-3xl border border-gold-500/30 p-6 sm:p-10 shadow-gold-glow">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
            <Banknote className="w-3.5 h-3.5" />
            <span>ESTIMATE YOUR EARNINGS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Global Royalty & Streaming Calculator
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Slide expected monthly streams to estimate gross revenue earned across all global DSPs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider input */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-zinc-400">Monthly Projected Streams:</span>
              <span className="text-lg font-black text-white font-mono">
                {projectedStreams.toLocaleString()} Streams
              </span>
            </div>

            <input
              type="range"
              min="10000"
              max="2000000"
              step="10000"
              value={projectedStreams}
              onChange={e => setProjectedStreams(parseInt(e.target.value, 10))}
              className="w-full h-2.5 bg-charcoal-800 rounded-lg accent-gold-500 cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
              <span>10,000 Streams</span>
              <span>1,000,000 Streams</span>
              <span>2,000,000 Streams</span>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-charcoal-900 border border-gold-500/40 text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
              Estimated Gross Monthly Royalty
            </div>
            <div className="text-3xl sm:text-4xl font-black text-gold-400 font-mono mb-1">
              ₦{projectedEarningsNGN.toLocaleString()}
            </div>
            <div className="text-xs text-zinc-400 font-mono mb-4">
              ≈ ${projectedEarningsUSD.toLocaleString()} USD
            </div>

            <button
              onClick={() => setDistributionModalOpen(true)}
              className="w-full py-3 rounded-xl font-bold text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95"
            >
              Submit Master For This Release
            </button>
          </div>

        </div>
      </div>

      {/* RECENT DISTRIBUTED RELEASES CATALOG */}
      <div className="bg-charcoal-850/90 rounded-3xl border border-white/5 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
          <div>
            <h3 className="text-xl font-black text-white">
              Your Distribution Releases
            </h3>
            <p className="text-xs text-zinc-400">
              Track delivery progress and active store ingestion.
            </p>
          </div>

          <button
            onClick={() => setDistributionModalOpen(true)}
            className="px-4 py-2 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg"
          >
            + New Distribution
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {releases.map(rel => (
            <div
              key={rel.id}
              className="p-4 rounded-2xl bg-charcoal-800/60 border border-white/5 flex items-center space-x-4"
            >
              <img
                src={rel.coverUrl}
                alt={rel.title}
                className="w-16 h-16 rounded-xl object-cover border border-white/10"
              />
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className="text-sm font-bold text-white truncate">{rel.title}</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300">
                    {rel.status}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">{rel.releaseType} • {rel.genre}</p>
                <div className="text-[10px] text-zinc-500 font-mono mt-1">
                  UPC: {rel.upc} | ISRC: {rel.isrc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
