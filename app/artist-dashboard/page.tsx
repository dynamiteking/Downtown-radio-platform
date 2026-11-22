'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useStore } from '../../context/StoreContext';
import ArtistDashboard from '../../components/ArtistDashboard';
import CreatorHookBanner from '../../components/CreatorHookBanner';
import ThreeStepsGuide from '../../components/ThreeStepsGuide';
import PhoneDemoSimulator from '../../components/PhoneDemoSimulator';
import ProofPointComparison from '../../components/ProofPointComparison';
import EntertainmentGroomingHub from '../../components/EntertainmentGroomingHub';
import DistributionHub from '../../components/DistributionHub';
import DowntownPro from '../../components/DowntownPro';
import NativeAppsBanner from '../../components/NativeAppsBanner';
import { 
  ArrowLeft, 
  Sparkles, 
  UploadCloud, 
  Crown, 
  LayoutDashboard, 
  Share2, 
  Calendar,
  Zap,
  Banknote,
  Award,
  Globe2,
  Mail,
  Smartphone
} from 'lucide-react';

export default function ArtistDashboardPage() {
  const { 
    setOnboardingModalOpen, 
    setDistributionModalOpen, 
    setProModalOpen,
    setOpenLetterOpen,
    openPitchModal, 
    events 
  } = useStore();

  const [activeSection, setActiveSection] = useState<'dashboard' | 'blueprint' | 'simulator' | 'economics' | 'grooming' | 'distribution'>('dashboard');

  const scrollToSection = (id: string, sectionKey: any) => {
    setActiveSection(sectionKey);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-fade-in space-y-16">
      
      {/* Top Portal Breadcrumb & Quick Action Terminal */}
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
              Artist Portal & Creator Sanctuary
            </span>
          </div>
        </div>

        {/* Quick Portal Creator Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setOnboardingModalOpen(true)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <UploadCloud className="w-3.5 h-3.5 text-charcoal-950" />
            <span>Upload & Earn (Free)</span>
          </button>

          {events[0] && (
            <button
              onClick={() => openPitchModal(events[0])}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-charcoal-800 border border-white/10 hover:border-gold-500/30 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Pitch Live Shows (TBE)</span>
            </button>
          )}

          <button
            onClick={() => setProModalOpen(true)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-amber-400 hover:text-white bg-charcoal-800/80 border border-amber-500/30 transition-all flex items-center gap-1.5"
          >
            <Crown className="w-3.5 h-3.5 text-gold-400" />
            <span>Downtown Pro (₦5,000/mo)</span>
          </button>

          <button
            onClick={() => setOpenLetterOpen(true)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white bg-charcoal-800/80 border border-white/10 transition-all flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            <span>Manifesto</span>
          </button>
        </div>
      </div>

      {/* 3-CARD ONBOARDING FLOW: Free Upload & Earn, Pitch Live Shows (TBE), Downtown Pro */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Upload & Earn (Free) */}
        <div className="rounded-3xl p-6 bg-gradient-to-b from-charcoal-850 to-charcoal-900 border-2 border-gold-500/30 hover:border-gold-500/70 transition-all duration-300 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-gold-500/15 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <UploadCloud className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                FREE TO JOIN
              </span>
            </div>

            <div>
              <h3 className="text-xl font-black text-white tracking-tight">1. Upload & Earn</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Create your artist profile, upload lossless masters, and receive instant direct Naira fan tips.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-white/5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>Create artist identity & profile</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>Upload master audio (WAV / MP3)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>Receive Naira (₦) tips to your bank</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>Keep 100% master & publishing rights</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setOnboardingModalOpen(true)}
              className="w-full py-3.5 rounded-2xl font-black text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <UploadCloud className="w-4 h-4 text-charcoal-950" />
              <span>Upload Tracks & Earn (Free)</span>
            </button>
          </div>
        </div>

        {/* Card 2: Pitch for Live Shows (TBE) */}
        <div className="rounded-3xl p-6 bg-gradient-to-b from-charcoal-850 to-charcoal-900 border-2 border-amber-500/30 hover:border-amber-400/70 transition-all duration-300 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                STATUS: TBE
              </span>
            </div>

            <div>
              <h3 className="text-xl font-black text-white tracking-tight">2. Pitch for Live Shows</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Structured submission for upcoming live showcases. Note: Event dates, locations, and flyers are currently TBE (no flyers displayed until verified).
              </p>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-white/5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Stage Name & Preferred City</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>EPK / Live performance set link</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Instagram / TikTok & WhatsApp handle</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>All upcoming festival dates/locations: TBE</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <button
              onClick={() => events[0] && openPitchModal(events[0])}
              className="w-full py-3.5 rounded-2xl font-bold text-xs text-white bg-charcoal-800 hover:bg-charcoal-700 border border-amber-500/40 hover:border-amber-400 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Pitch Showcase Stage (TBE)</span>
            </button>
          </div>
        </div>

        {/* Card 3: Downtown Pro (₦5,000/mo) */}
        <div className="rounded-3xl p-6 bg-gradient-to-b from-charcoal-850 to-charcoal-900 border-2 border-gold-500/40 hover:border-gold-400 transition-all duration-300 flex flex-col justify-between shadow-gold-glow">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-300 flex items-center justify-center">
                <Crown className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gold-500 text-charcoal-950">
                PRO TIER
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <h3 className="text-xl font-black text-white tracking-tight">3. Downtown Pro</h3>
                <span className="text-sm font-bold text-gold-400">₦5,000/mo</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Unlock global DSP digital delivery to 20+ streaming platforms and keep 100% tips with zero fee deductions.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-white/5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>Global DSP distribution (Spotify, Apple, 17+ others)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>Automated royalty splits for collaborators</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>Priority editorial playlisting consideration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>100% tip payout fee waiver</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <button
              onClick={() => setProModalOpen(true)}
              className="w-full py-3.5 rounded-2xl font-black text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Crown className="w-4 h-4 text-charcoal-950" />
              <span>Upgrade to Pro (₦5,000/mo)</span>
            </button>
          </div>
        </div>

      </section>

      {/* Creator Fast Navigation Anchor Dock */}
      <div className="sticky top-20 z-30 flex items-center gap-2 overflow-x-auto p-1.5 rounded-2xl bg-charcoal-900/90 backdrop-blur-xl border border-white/10 shadow-lg no-scrollbar">
        <button
          onClick={() => scrollToSection('artist-executive-terminal', 'dashboard')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'dashboard'
              ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
              : 'text-zinc-300 hover:text-white hover:bg-charcoal-800'
          }`}
        >
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Executive Terminal</span>
        </button>

        <button
          onClick={() => scrollToSection('creator-hook-banner', 'blueprint')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'blueprint'
              ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
              : 'text-zinc-300 hover:text-white hover:bg-charcoal-800'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>The 3-Step Blueprint</span>
        </button>

        <button
          onClick={() => scrollToSection('phone-simulator-section', 'simulator')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'simulator'
              ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
              : 'text-zinc-300 hover:text-white hover:bg-charcoal-800'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Interactive Studio & Fan Dock</span>
        </button>

        <button
          onClick={() => scrollToSection('creator-arithmetic-section', 'economics')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'economics'
              ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
              : 'text-zinc-300 hover:text-white hover:bg-charcoal-800'
          }`}
        >
          <Banknote className="w-3.5 h-3.5" />
          <span>Indie Creator Arithmetic</span>
        </button>

        <button
          onClick={() => scrollToSection('entertainment-grooming-section', 'grooming')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'grooming'
              ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
              : 'text-zinc-300 hover:text-white hover:bg-charcoal-800'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Headliner Grooming Academy</span>
        </button>

        <button
          onClick={() => scrollToSection('distribution-hub-section', 'distribution')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeSection === 'distribution'
              ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
              : 'text-zinc-300 hover:text-white hover:bg-charcoal-800'
          }`}
        >
          <Globe2 className="w-3.5 h-3.5" />
          <span>Global DSP Distribution</span>
        </button>
      </div>

      {/* 1. MAIN ARTIST EXECUTIVE DASHBOARD (Stats, Royal Rave Pitches, Messages, Catalog) */}
      <section id="artist-executive-terminal">
        <ArtistDashboard />
      </section>

      {/* 2. CREATOR SANCTUARY VALUE PROPOSITION BANNER */}
      <section id="creator-hook-banner">
        <CreatorHookBanner />
      </section>

      {/* 3. THE 3-STEP CREATOR BLUEPRINT (Upload WAV -> Smart Link -> Direct Naira) */}
      <section id="three-steps-guide">
        <ThreeStepsGuide />
      </section>

      {/* 4. INTERACTIVE DUAL-PHONE SIMULATOR (Artist Terminal & Fan Patronage Dock) */}
      <section id="phone-simulator-section">
        <PhoneDemoSimulator />
      </section>

      {/* 5. INDIE CREATOR ARITHMETIC (50 True Believers vs 8.5M streams on foreign DSPs) */}
      <section id="creator-arithmetic-section">
        <ProofPointComparison />
      </section>

      {/* 6. AFRICA'S PREMIER ENTERTAINMENT GROOMING ECOSYSTEM */}
      <section id="entertainment-grooming-section">
        <EntertainmentGroomingHub />
      </section>

      {/* 7. GLOBAL DIGITAL MUSIC DISTRIBUTION (150+ DSPs) */}
      <section id="distribution-hub-section">
        <DistributionHub />
      </section>

      {/* 8. DOWNTOWN PRO TIER & 100% FEE WAIVER */}
      <section id="downtown-pro-section">
        <DowntownPro />
      </section>

      {/* 9. NATIVE APPS BANNER */}
      <NativeAppsBanner />

    </div>
  );
}
