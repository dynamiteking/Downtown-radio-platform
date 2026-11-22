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
            <span>Upload Master (WAV)</span>
          </button>

          <button
            onClick={() => setDistributionModalOpen(true)}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-charcoal-800 border border-white/10 hover:border-gold-500/30 transition-all flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5 text-gold-400" />
            <span>Distribute Track</span>
          </button>

          {events[0] && (
            <button
              onClick={() => openPitchModal(events[0])}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-charcoal-800 border border-white/10 hover:border-gold-500/30 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Pitch Showcase Stage</span>
            </button>
          )}

          <button
            onClick={() => setOpenLetterOpen(true)}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-amber-400 hover:text-white bg-charcoal-800/80 border border-amber-500/30 transition-all flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Manifesto</span>
          </button>
        </div>
      </div>

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
