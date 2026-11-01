'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Film, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  Flame, 
  Ticket,
  MapPin,
  CheckCircle2,
  Tv
} from 'lucide-react';

interface VideoReel {
  id: string;
  src: string;
  title: string;
  badge: string;
  caption: string;
  quote: string;
  credits: string;
  location: string;
}

const REELS: VideoReel[] = [
  {
    id: 'reel-movement',
    src: '/videos/downtown-radio-kalakuta-movement.mp4',
    title: 'The Energy Was Unreal: It’s Not Just a Show, It’s a Movement',
    badge: 'HISTORIC MOVEMENT',
    caption: 'From Kalakuta Museum to the ancient rooftops of Red Horn, Ife — pure unfiltered sonic liberation.',
    quote: '“Downtown Radio is not just a show… it’s a movement. Bringing independent African music culture into its sovereign power.”',
    credits: 'Official Downtown Radio Archive • Broadcast Live',
    location: 'Kalakuta Museum to Red Horn Palace',
  },
  {
    id: 'reel-fest',
    src: '/videos/downtown-fest-cooked-reel.mp4',
    title: 'Downtown Fest: We Cooked 🔥🔥🔥',
    badge: 'FESTIVAL MOTION REEL',
    caption: 'Big shout to the good people @downtownfest.ng — crowd electricity, heavy sub-bass, and alté royalty on the main stage.',
    quote: '“The frequency was unstoppable. Hundreds of indie music fans singing every unreleased lyric word-for-word.”',
    credits: '🎥 @dwen_photography • cc @elcarnaval @downtownfest.ng',
    location: 'Downtown Fest Arena • Lagos Mainland',
  },
];

export default function EventVideoReel() {
  const { setActiveTab } = useStore();
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // muted by default for safe auto-preview
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeReel = REELS[activeReelIndex];

  // Reset playback when switching reels
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [activeReelIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleScrollToTickets = () => {
    setActiveTab('discover');
    setTimeout(() => {
      const el = document.getElementById('ticket-booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="my-20">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            <Film className="w-3.5 h-3.5 text-gold-400" />
            <span>DOWNTOWN CINEMA • LIVE MOTION REELS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            The Frequency: Live Video Reels
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Watch real festival footage, crowd roars, and movement milestones captured live on film.
          </p>
        </div>

        {/* Video Switcher Pills */}
        <div className="flex items-center p-1 rounded-2xl bg-charcoal-800/80 border border-white/5 space-x-1 self-start sm:self-auto">
          {REELS.map((reel, idx) => (
            <button
              key={reel.id}
              onClick={() => setActiveReelIndex(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeReelIndex === idx
                  ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Reel 0{idx + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Cinema Grid Layout (Video on left, Narrative story on right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-charcoal-900 rounded-3xl p-6 sm:p-8 border-2 border-gold-500/40 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Ambient Golden Glow in background */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* LEFT COLUMN: The Custom Video Player (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
            
            {/* HTML5 Video Element */}
            <video
              ref={videoRef}
              src={activeReel.src}
              playsInline
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {/* Play/Pause Center Overlay (visible when paused) */}
            {!isPlaying && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all"
              >
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gold-gradient text-charcoal-950 flex items-center justify-center shadow-gold-glow-lg transform hover:scale-110 active:scale-95 transition-all">
                  <Play className="w-8 h-8 fill-charcoal-950 ml-1" />
                </div>
              </div>
            )}

            {/* Live Reel Pill Tag on top-left */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-charcoal-950/85 text-gold-400 border border-gold-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>{activeReel.badge}</span>
              </span>
            </div>

            {/* Video Controls Bar (Overlay on bottom) */}
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 z-20">
              
              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gold-500 rounded-full transition-all duration-150"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center justify-between text-xs text-white">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-[11px]"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    <span>{isMuted ? 'Unmute Audio' : 'Sound On'}</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline">
                    {Math.floor(currentTime / 60)}:{(Math.floor(currentTime % 60)).toString().padStart(2, '0')} / {Math.floor(duration / 60)}:{(Math.floor(duration % 60)).toString().padStart(2, '0')}
                  </span>
                  <button
                    onClick={handleFullscreen}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: The Documentary Story & Credits (5 Cols) */}
        <div className="lg:col-span-5 space-y-5 text-left">
          
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400">
            <MapPin className="w-4 h-4" />
            <span>{activeReel.location}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {activeReel.title}
          </h3>

          <blockquote className="p-4 rounded-2xl bg-charcoal-800/80 border-l-4 border-gold-500 text-xs sm:text-sm text-zinc-200 italic leading-relaxed">
            {activeReel.quote}
          </blockquote>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
            {activeReel.caption}
          </p>

          <div className="pt-2 border-t border-white/5 space-y-2">
            <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
              <span>{activeReel.credits}</span>
            </div>

            <button
              onClick={handleScrollToTickets}
              className="mt-3 w-full py-3 px-4 rounded-xl font-black text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Ticket className="w-4 h-4 text-charcoal-950" />
              <span>Be Part of the Next Movement • Red Horn (Nov 14)</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
