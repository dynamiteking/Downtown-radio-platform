'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { 
  Play, 
  Pause, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ChevronLeft, 
  Flame, 
  Banknote, 
  Radio, 
  Users,
  CheckCircle2,
  Ticket
} from 'lucide-react';

export default function HeroBanner() {
  const { tracks, events, openTippingModal, openPitchModal, setActiveTab } = useStore();
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();
  const [currentSlide, setCurrentSlide] = useState(0);

  const topTrack = tracks[0]; // "Midnight in Ife (Rooftop Mix)"
  const featuredEvent = events[0]; // "Royal Rave Festival"

  const slides = [
    {
      id: 'slide-event',
      badge: 'DOWNTOWN RADIO PRESENTS • STATUS: TO BE ANNOUNCED (TBA)',
      badgeIcon: <Flame className="w-3.5 h-3.5 text-gold-400" />,
      title: 'Royal Rave Festival',
      artist: 'Official Flyer • Status: To Be Announced (TBA)',
      subtitle: 'The all-night indie & alté celebration. Signature sound systems, electric DJ sets, and intimate performances from dusk to dawn. Status is To Be Announced (TBA).',
      image: '/images/royal-rave-poster.jpg',
      tag: 'Status: To Be Announced (TBA)',
      posterThumb: '/images/royal-rave-poster.jpg',
      stats: [
        { label: 'Status', value: 'TBA' },
        { label: 'Date', value: 'TBA' },
        { label: 'Slots', value: '4 Open Slots' },
      ],
      actionType: 'event',
      event: featuredEvent,
    },
    {
      id: 'slide-track',
      badge: 'TOP RATED INDIE TRACK OF THE WEEK',
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-gold-400" />,
      title: topTrack.title,
      artist: topTrack.artist,
      subtitle: topTrack.description || 'Lead collaborative release from the debut EP "ATWN" (After This, What Next?). Blending executive maturity with razor-sharp alté storytelling.',
      image: topTrack.coverUrl,
      tag: topTrack.genre,
      stats: [
        { label: 'Weekly Streams', value: '284.5K' },
        { label: 'Fan Tips', value: `₦${topTrack.totalTips.toLocaleString()}` },
        { label: 'BPM', value: `${topTrack.bpm || 114}` },
      ],
      actionType: 'track',
      track: topTrack,
    },
    {
      id: 'slide-distribution',
      badge: 'DOWNTOWN DISTRIBUTION NETWORK',
      badgeIcon: <Sparkles className="w-3.5 h-3.5 text-gold-400" />,
      title: 'Global Reach. 100% Master Ownership.',
      artist: 'Spotify • Apple Music • Audiomack • Boomplay',
      subtitle: 'Seamless digital distribution for African independent creators with automated splits and live tip integration.',
      image: '/images/streaming-platforms.png',
      tag: '20+ Global Streaming Channels',
      stats: [
        { label: 'Delivery Time', value: '48 — 72 Hrs' },
        { label: 'Royalty Kept', value: '100% Master' },
        { label: 'Radio Airplay', value: 'Guaranteed' },
      ],
      actionType: 'distribution',
    }
  ];

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];
  const isTopTrackPlaying = currentTrack?.id === topTrack.id && isPlaying;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-charcoal-900 shadow-2xl my-6">
      {/* Background Image with Cinematic Dark Luxury Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/90 to-charcoal-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Content */}
      <div className="relative z-10 px-5 py-10 sm:px-12 sm:py-16 max-w-4xl w-full">
        
        {/* Top Tag / Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-800/90 border border-gold-500/40 text-xs font-bold text-gold-400 tracking-wider shadow-gold-glow mb-4 backdrop-blur-md">
          {slide.badgeIcon}
          <span>{slide.badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-2">
          {slide.title}
        </h1>

        {/* Artist / Subtitle */}
        <p className="text-lg sm:text-xl font-semibold text-gold-400/95 mb-3 flex items-center gap-2 flex-wrap">
          <span>{slide.artist}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 hidden sm:inline" />
          <span className="text-sm font-normal text-zinc-400">{slide.tag}</span>
        </p>

        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-normal">
          {slide.subtitle}
        </p>

        {/* Dynamic Metric Pill Row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mb-6 sm:mb-8 p-3 rounded-2xl bg-charcoal-800/50 border border-white/5 backdrop-blur-md w-full">
          {slide.stats.map((s, idx) => (
            <div key={idx} className="text-left">
              <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">{s.label}</div>
              <div className="text-sm sm:text-lg font-bold text-white tracking-wide truncate">{s.value}</div>
            </div>
          ))}
        </div>

        {/* If distribution slide, render exact official platform logos */}
        {slide.actionType === 'distribution' && (
          <div className="flex items-center gap-2 mb-6 p-2 rounded-2xl bg-charcoal-950/80 border border-gold-500/30 w-fit flex-wrap">
            <span className="text-[11px] font-bold text-zinc-400 mr-1 hidden sm:inline">Verified DSPs:</span>
            {['spotify', 'apple-music', 'audiomack', 'boomplay', 'yt-music', 'tidal', 'amazon-music', 'deezer'].map(id => (
              <div key={id} className="w-7 h-7 rounded-full overflow-hidden p-0.5 bg-charcoal-900 border border-white/10 shadow-sm" title={id}>
                <img src={`/images/dsp/${id}.png`} alt={id} className="w-full h-full object-contain" />
              </div>
            ))}
            <span className="text-[10px] text-gold-400 font-mono font-bold px-2 py-1 rounded-lg bg-gold-500/15 border border-gold-500/30">+12 more</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {slide.actionType === 'track' && (
            <>
              <button
                onClick={() => {
                  if (isTopTrackPlaying) {
                    togglePlay();
                  } else {
                    playTrack(topTrack);
                  }
                }}
                className="px-6 py-3.5 rounded-2xl font-bold text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform active:scale-95 flex items-center gap-2.5"
              >
                {isTopTrackPlaying ? (
                  <>
                    <Pause className="w-5 h-5 fill-charcoal-950" />
                    <span>Pause Track</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-charcoal-950" />
                    <span>Listen Live Preview</span>
                  </>
                )}
              </button>

              <button
                onClick={() => openTippingModal(topTrack)}
                className="px-5 py-3.5 rounded-2xl font-semibold text-sm text-white bg-charcoal-800/90 hover:bg-charcoal-700 border border-gold-500/40 hover:border-gold-500 transition-all flex items-center gap-2 shadow-sm"
              >
                <Banknote className="w-4 h-4 text-gold-400" />
                <span>Tip Cash (₦)</span>
              </button>
            </>
          )}

          {slide.actionType === 'event' && (
            <>
              <button
                onClick={() => openPitchModal(featuredEvent)}
                className="px-6 py-3.5 rounded-2xl font-black text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform active:scale-95 flex items-center gap-2.5"
              >
                <Sparkles className="w-5 h-5 fill-charcoal-950" />
                <span>Pitch for Future Showcase</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('ticket-booking-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else setActiveTab('events');
                }}
                className="px-5 py-3.5 rounded-2xl font-bold text-sm text-gold-400 bg-charcoal-800/90 hover:bg-charcoal-700 border border-gold-500/40 hover:border-gold-500 transition-all flex items-center gap-2 shadow-sm"
              >
                <Ticket className="w-4 h-4 text-gold-400" />
                <span>Event Waitlist & Status (TBA)</span>
              </button>

              <button
                onClick={() => setActiveTab('events')}
                className="px-5 py-3.5 rounded-2xl font-semibold text-sm text-white bg-charcoal-800/90 hover:bg-charcoal-700 border border-white/10 hover:border-gold-500/30 transition-all flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-zinc-400" />
                <span>Explore Events Hub</span>
              </button>
            </>
          )}

          {slide.actionType === 'distribution' && (
            <>
              <button
                onClick={() => setActiveTab('distribution')}
                className="px-6 py-3.5 rounded-2xl font-bold text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform active:scale-95 flex items-center gap-2.5"
              >
                <Sparkles className="w-5 h-5 fill-charcoal-950" />
                <span>Submit Master Now</span>
              </button>
              <button
                onClick={() => setActiveTab('pro')}
                className="px-5 py-3.5 rounded-2xl font-semibold text-sm text-gold-400 bg-charcoal-800/90 border border-gold-500/40 hover:border-gold-500 transition-all flex items-center gap-2"
              >
                <span>Compare Pro Benefits</span>
              </button>
            </>
          )}
        </div>

      </div>

      {/* Floating Poster Preview for Festival Slide (Large Screen) */}
      {slide.posterThumb && (
        <div 
          onClick={() => setActiveTab('events')}
          className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-20 w-60 rounded-2xl overflow-hidden border-2 border-gold-500 shadow-gold-glow-lg transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer bg-charcoal-900"
        >
          <img
            src={slide.posterThumb}
            alt="Official Royal Rave Festival Poster"
            className="w-full h-auto object-cover"
          />
          <div className="p-2.5 bg-charcoal-950/95 border-t border-gold-500/40 text-center">
            <span className="text-[10px] font-black uppercase tracking-wider text-gold-400 block">
              STATUS: TO BE ANNOUNCED (TBA)
            </span>
            <span className="text-[9px] text-zinc-400">
              Official Flyer • Status: TBA
            </span>
          </div>
        </div>
      )}

      {/* Floating 20-DSP Showcase Card for Distribution Slide (Large Screen) */}
      {slide.actionType === 'distribution' && (
        <div 
          onClick={() => setActiveTab('distribution')}
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-20 w-80 rounded-3xl p-5 border-2 border-gold-500/50 shadow-gold-glow-lg bg-charcoal-900/95 backdrop-blur-xl transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/10">
            <span className="text-[11px] font-black uppercase tracking-wider text-gold-400">
              Verified DSP Network
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 font-bold">
              20 Platforms
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2 mb-3">
            {[
              'yt-music', 'shazam', 'apple-music', 'amazon-music', 'spotify',
              'iheart-radio', 'qq-music', 'soundcloud', 'deezer', 'jio-saavn',
              'audiomack', 'apple-podcasts', 'castbox', 'podcast-addict', 'audible',
              'tidal', 'boomplay', 'pandora', 'tunein-radio', 'pocket-casts'
            ].map(id => (
              <div 
                key={id} 
                className="w-11 h-11 rounded-full p-1 bg-charcoal-800/90 border border-white/10 flex items-center justify-center hover:border-gold-400 hover:scale-110 transition-all shadow-sm"
              >
                <img 
                  src={`/images/dsp/${id}.png`} 
                  alt={id} 
                  className="w-full h-full object-contain" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>

          <div className="p-2 rounded-xl bg-charcoal-950/80 border border-white/5 text-center">
            <span className="text-[10px] font-mono text-zinc-300">
              100% Royalties Kept • 48-72h Worldwide Delivery
            </span>
          </div>
        </div>
      )}

      {/* Carousel Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        <div className="flex items-center gap-1.5 mr-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === i ? 'w-8 bg-gold-500 shadow-gold-glow' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="p-2.5 rounded-full bg-charcoal-800/80 hover:bg-charcoal-700 text-zinc-300 hover:text-white border border-white/10 transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          className="p-2.5 rounded-full bg-charcoal-800/80 hover:bg-charcoal-700 text-zinc-300 hover:text-white border border-white/10 transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
