'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { INITIAL_TRACKS } from '../data/mockData';
import { Track } from '../types';
import { 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Heart, 
  ArrowRight, 
  Flame, 
  Banknote, 
  Radio, 
  Ticket,
  Mail,
  Zap,
  Volume2,
  Calendar
} from 'lucide-react';

export default function CreatorHookBanner() {
  const { setOpenLetterOpen, setOnboardingModalOpen, openTippingModal, openPitchModal, setUserRole, setActiveTab, tracks, events } = useStore();
  const { isPlaying, togglePlay, playTrack, currentTrack, currentTime, duration } = useAudio();
  
  const sampleTrack: Track = tracks[0] || INITIAL_TRACKS[0];
  const isCurrentPlaying = currentTrack?.id === sampleTrack.id && isPlaying;

  return (
    <section className="my-14 rounded-3xl bg-gradient-to-br from-charcoal-850 via-charcoal-900 to-charcoal-950 border border-gold-500/30 p-5 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden w-full">
      {/* Background subtle radial ambient light */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10 w-full">
        
        {/* LEFT COLUMN: 100% Original Downtown Radio Copywriting */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Logo mark pill */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
              <Radio className="w-5 h-5 text-gold-400" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
              Downtown Radio • The Sovereign Creator Sanctuary
            </span>
          </div>

          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Direct Fan Power. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">
              Zero Gatekeepers.
            </span> <br />
            From Your First Release.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            <p>
              Why should an African indie artist wait for tens of millions of algorithmic streams just to afford studio gear or pay their team? Traditional streaming platforms were engineered around massive label catalogues, rewarding fractional pennies after months of red tape.
            </p>
            <p>
              <strong className="text-white font-bold">
                <span className="text-gold-400">Downtown Radio</span> rebuilds the bridge between genuine sound and direct community support.
              </strong>{' '}
              We empower African innovators to turn 50 true believers into a sustainable music career today — through instant Naira fan transfers, 100% master ownership retention, and stage slots at signature Downtown gatherings and festival activations like the Royal Rave Showcase (Status: TBA).
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                setUserRole('artist');
                setActiveTab('artist-dashboard');
                setOnboardingModalOpen(true);
              }}
              className="px-7 py-3.5 rounded-2xl font-bold text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center gap-2"
            >
              <span>Launch Artist Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Read Manifesto Pill */}
            <button
              onClick={() => setOpenLetterOpen(true)}
              className="px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-gold-400 hover:text-white bg-charcoal-800/80 hover:bg-charcoal-700 border border-gold-500/40 hover:border-gold-400 transition-all flex items-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4 text-gold-400" />
              <span>Read The Artist Manifesto ⚡</span>
            </button>

            {/* Pitch to Perform at Royal Rave */}
            {events[0] && (
              <button
                onClick={() => openPitchModal(events[0])}
                className="px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-zinc-200 hover:text-white bg-charcoal-800/80 hover:bg-charcoal-700 border border-white/10 hover:border-gold-500/30 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Pitch for Future Festival Slots</span>
              </button>
            )}

            {/* Buy Tickets CTA */}
            <Link
              href="/events#ticket-booking-section"
              className="px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-zinc-300 hover:text-white bg-charcoal-800/50 hover:bg-charcoal-800 border border-white/10 transition-all flex items-center gap-2"
            >
              <Ticket className="w-4 h-4 text-gold-400" />
              <span>Get Show Tickets</span>
            </Link>
          </div>

          {/* Footnote */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
            <Zap className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>Pure web freedom — no mandatory fan registration, zero app download friction.</span>
          </div>

        </div>

        {/* RIGHT COLUMN: Phone Player with DOWNTOWN RADIO Official Logo Cover */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full max-w-sm rounded-3xl sm:rounded-[44px] bg-[#12141A] p-4 sm:p-5 border-2 sm:border-4 border-charcoal-700 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative">
            
            {/* Phone Top Notch */}
            <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono mb-4 px-2">
              <span>9:41</span>
              <div className="w-20 h-4 bg-charcoal-900 rounded-full" />
              <div className="flex items-center space-x-1">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* App brand header inside phone */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center space-x-1.5">
                <Radio className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-black tracking-tight text-white uppercase">DOWNTOWN RADIO</span>
              </div>
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                LIVE BROADCAST
              </span>
            </div>

            {/* DOWNTOWN RADIO Official Cover Artwork (Prominently displays the official Downtown Radio Logo!) */}
            <div 
              className="relative aspect-square w-full rounded-3xl overflow-hidden bg-gold-500 border-2 border-gold-500 shadow-gold-glow group cursor-pointer"
              onClick={() => {
                if (isCurrentPlaying) {
                  togglePlay();
                } else {
                  playTrack(sampleTrack);
                }
              }}
            >
              {/* Official Track Cover Artwork */}
              <img
                src={sampleTrack.coverUrl || "/images/atwn/atwn-cover.jpg"}
                alt={sampleTrack.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Center Play/Pause Glass Action Button */}
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-gold-500/50 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform shadow-xl">
                  {isCurrentPlaying ? (
                    <Pause className="w-7 h-7 fill-gold-400" />
                  ) : (
                    <Play className="w-7 h-7 fill-gold-400 ml-1" />
                  )}
                </div>
              </div>

              {/* Station Tag Overlay */}
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md text-[10px] font-bold text-gold-300 border border-gold-500/30 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Downtown 101.4 FM • Ife</span>
              </div>
            </div>

            {/* Track Info */}
            <div className="mt-4 text-left">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-black text-white leading-tight truncate">
                  {sampleTrack.title}
                </h4>
              </div>
              <p className="text-xs text-zinc-400 font-medium mt-0.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-400 inline-block" />
                <span>Downtown Radio Exclusive • {sampleTrack.artist}</span>
              </p>
            </div>

            {/* Scrubber simulation */}
            <div className="mt-4 space-y-1">
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gold-500 to-amber-400 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${isCurrentPlaying && duration > 0 ? (currentTime / duration) * 100 : 45}%` 
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>{isCurrentPlaying ? `${Math.floor(currentTime / 60)}:${(currentTime % 60).toString().padStart(2, '0')}` : '0:00'}</span>
                <span>{Math.floor(sampleTrack.duration / 60)}:{(sampleTrack.duration % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center space-x-6 my-3">
              <button className="text-zinc-400 hover:text-white transition-colors" title="Rewind 15s">
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  if (isCurrentPlaying) {
                    togglePlay();
                  } else {
                    playTrack(sampleTrack);
                  }
                }}
                className="w-12 h-12 rounded-full bg-gold-gradient text-charcoal-950 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-gold-glow"
              >
                {isCurrentPlaying ? (
                  <Pause className="w-5 h-5 fill-charcoal-950" />
                ) : (
                  <Play className="w-5 h-5 fill-charcoal-950 ml-0.5" />
                )}
              </button>
              <button className="text-zinc-400 hover:text-white transition-colors" title="Forward 15s">
                <RotateCw className="w-4 h-4" />
              </button>
            </div>

            {/* High-Contrast Tip Downtown Artist Button */}
            <button
              onClick={() => openTippingModal(sampleTrack)}
              className="w-full py-3.5 rounded-2xl font-black text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Banknote className="w-4 h-4 text-charcoal-950" />
              <span>Back Artist with Cash Tip (₦)</span>
            </button>

            {/* Supporter counter */}
            <p className="text-[11px] text-zinc-400 text-center mt-2.5">
              <strong className="text-white font-bold">₦412,500</strong> tipped by 142 fans this week
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
