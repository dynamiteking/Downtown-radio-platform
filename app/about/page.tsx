'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '../../context/StoreContext';
import DKVisionarySection from '../../components/DKVisionarySection';
import DistributionHub from '../../components/DistributionHub';
import DowntownPro from '../../components/DowntownPro';
import NativeAppsBanner from '../../components/NativeAppsBanner';
import { 
  ArrowLeft, 
  Crown, 
  Radio, 
  Share2, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  Compass, 
  Globe2, 
  Zap,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const { setOpenLetterOpen, setProModalOpen } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-fade-in space-y-16">
      
      {/* Top Portal Breadcrumb & Quick Actions */}
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
              Ecosystem, Mission & Distribution Network
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setOpenLetterOpen(true)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-amber-400 hover:text-white bg-amber-500/10 border border-amber-500/30 transition-all flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Read Artist Manifesto</span>
          </button>

          <button
            onClick={() => setProModalOpen(true)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <Crown className="w-3.5 h-3.5 text-charcoal-950" />
            <span>Upgrade to Pro</span>
          </button>
        </div>
      </div>

      {/* Brand Mission & West African Cultural Vision Hero */}
      <section className="relative rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-charcoal-950 border border-gold-500/30 p-8 sm:p-14 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-xs font-black uppercase tracking-wider text-gold-400">
            <Radio className="w-3.5 h-3.5 text-gold-400" />
            <span>OUR CULTURAL MISSION & HERITAGE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Building the Sovereign Ecosystem for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-200">
              African Sound.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            Downtown Radio was founded on an unapologetic belief: independent African creators should never have to compromise their artistic sovereignty or wait months for fractional pennies from corporate DSP algorithms. We engineered an end-to-end cultural sanctuary bridging uncompressed master audio streaming, direct fan tipping in Nigerian Naira, global digital distribution, and curated palace festival showcases.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-charcoal-950/70 border border-white/5 space-y-1">
              <span className="text-xl sm:text-2xl font-black text-gold-400 font-mono">100%</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Master Ownership</h4>
              <p className="text-[11px] text-zinc-400">No 360 label traps. Creators retain total legal title to recordings.</p>
            </div>
            <div className="p-4 rounded-2xl bg-charcoal-950/70 border border-white/5 space-y-1">
              <span className="text-xl sm:text-2xl font-black text-gold-400 font-mono">Zero</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Gatekeepers</h4>
              <p className="text-[11px] text-zinc-400">Fans tip directly into verified Nigerian accounts in two clicks.</p>
            </div>
            <div className="p-4 rounded-2xl bg-charcoal-950/70 border border-white/5 space-y-1">
              <span className="text-xl sm:text-2xl font-black text-gold-400 font-mono">Live</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Festival Stages</h4>
              <p className="text-[11px] text-zinc-400">Curated rooftop stages across underground Lagos creative lofts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 1. THE MIND BEHIND DOWNTOWN RADIO: DK EXECUTIVE PROFILE & ATWN DEBUT EP */}
      <DKVisionarySection />

      {/* 2. DIGITAL MUSIC DISTRIBUTION HUB */}
      <DistributionHub />

      {/* 3. DOWNTOWN PRO TIER & LABEL SERVICES */}
      <DowntownPro />

      {/* 4. NATIVE APPS BANNER */}
      <NativeAppsBanner />

    </div>
  );
}
