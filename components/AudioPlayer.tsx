'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../context/AudioContext';
import { useStore } from '../context/StoreContext';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Banknote, 
  Heart, 
  Share2, 
  Minimize2,
  Maximize2,
  ChevronDown,
  ChevronUp,
  Repeat,
  Shuffle,
  Sparkles,
  Music2
} from 'lucide-react';

export default function AudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    analyserData,
    togglePlay,
    seekTo,
    setVolumeLevel,
    toggleMute,
    playNext,
    playPrevious,
  } = useAudio();

  const { openTippingModal, toggleLikeTrack, addToast } = useStore();
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (!currentTrack) return null;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = Math.floor(secs % 60);
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextSec = (parseFloat(e.target.value) / 100) * duration;
    seekTo(nextSec);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolumeLevel(parseFloat(e.target.value));
  };

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-0 right-0 z-50 pointer-events-none flex justify-center px-3 sm:px-6 w-full">
      <AnimatePresence mode="wait">
        
        {/* ========================================================= */}
        {/* MODE 1: MINIMIZED FLOATING GOLD CAPSULE (BOTTOM-RIGHT)   */}
        {/* ========================================================= */}
        {isMinimized ? (
          <motion.div
            key="minimized-player"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="pointer-events-auto ml-auto mr-1 sm:mr-4 group relative flex items-center space-x-2.5 sm:space-x-3 p-2 pr-3.5 rounded-full bg-charcoal-950/95 backdrop-blur-2xl border border-gold-500/40 shadow-gold-glow hover:border-gold-500 hover:shadow-gold-glow-lg transition-all duration-300"
          >
            {/* Spinning Album Art Mini */}
            <div 
              onClick={() => setIsMinimized(false)}
              className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-gold-500/50 cursor-pointer shadow-md"
            >
              <img
                src={currentTrack.coverUrl}
                alt={currentTrack.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? 'animate-spin' : ''
                }`}
                style={{ animationDuration: '8s' }}
              />
              {/* Vinyl center dot */}
              <div className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-charcoal-950 border border-gold-400" />
            </div>

            {/* Track Info Preview */}
            <div 
              onClick={() => setIsMinimized(false)}
              className="cursor-pointer max-w-[130px] sm:max-w-[170px] overflow-hidden"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <h5 className="text-xs font-bold text-white truncate group-hover:text-gold-400 transition-colors">
                  {currentTrack.title}
                </h5>
              </div>
              <p className="text-[10px] text-zinc-400 truncate">
                {currentTrack.artist}
              </p>
            </div>

            {/* Live Mini Spectrum Bars */}
            <div 
              onClick={() => setIsMinimized(false)}
              className="hidden sm:flex items-end gap-0.5 h-4 cursor-pointer px-1"
            >
              {isPlaying ? (
                analyserData.slice(0, 5).map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: `${Math.max(20, h * 0.8)}%` }}
                    transition={{ duration: 0.15 }}
                    className="w-0.5 bg-gold-400 rounded-full"
                  />
                ))
              ) : (
                <div className="flex items-end gap-0.5 h-full opacity-40">
                  <span className="w-0.5 h-1.5 bg-gold-400 rounded-full" />
                  <span className="w-0.5 h-3 bg-gold-400 rounded-full" />
                  <span className="w-0.5 h-2 bg-gold-400 rounded-full" />
                </div>
              )}
            </div>

            {/* Quick Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-gold-gradient text-charcoal-950 flex items-center justify-center shadow-gold-glow hover:scale-105 active:scale-95 transition-transform"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-charcoal-950" />
              ) : (
                <Play className="w-4 h-4 fill-charcoal-950 ml-0.5" />
              )}
            </button>

            {/* Quick Tip Button */}
            <button
              onClick={() => openTippingModal(currentTrack)}
              className="p-1.5 rounded-full bg-charcoal-800 hover:bg-gold-500/20 text-gold-400 border border-gold-500/30 transition-colors"
              title="Tip Artist Cash (₦)"
            >
              <Banknote className="w-3.5 h-3.5" />
            </button>

            {/* Expand / Maximize Toggle */}
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Expand Player Bar"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ) : (
          
          /* ========================================================= */
          /* MODE 2: FULL LUXURY FLOATING SOUND DOCK                  */
          /* ========================================================= */
          <motion.div
            key="expanded-player"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 26 }}
            className="pointer-events-auto relative w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-charcoal-950/95 backdrop-blur-2xl border border-gold-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:border-gold-500/50 transition-all duration-300 overflow-hidden"
          >
            {/* Top Glowing Wave / Progress Scrubber */}
            <div className="relative w-full h-1.5 bg-charcoal-800/80 cursor-pointer group">
              <div
                className="h-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-300 relative transition-all duration-150"
                style={{ width: `${progressPercent}%` }}
              >
                {/* Glowing Thumb Handle */}
                <motion.span 
                  animate={{ scale: isPlaying ? [1, 1.25, 1] : 1 }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-gold-glow border border-gold-500" 
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={progressPercent || 0}
                onChange={handleSeekChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            {/* ========================================================= */}
            {/* DOCK CONTENT - MOBILE OPTIMIZED (FULL WIDTH 100%)         */}
            {/* ========================================================= */}
            <div className="flex sm:hidden items-center justify-between gap-2.5 px-3 py-2 w-full">
              {/* Left: Artwork + Track Meta (Takes full flexible space) */}
              <div 
                onClick={() => setIsMinimized(false)}
                className="flex items-center space-x-2.5 min-w-0 flex-1 overflow-hidden cursor-pointer"
              >
                <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 border border-gold-500/40 shadow-sm bg-charcoal-900">
                  <img
                    src={currentTrack.coverUrl}
                    alt={currentTrack.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isPlaying ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  {isPlaying && (
                    <div className="absolute inset-0 bg-charcoal-950/20 flex items-center justify-center">
                      <div className="flex items-end gap-0.5 h-3">
                        <span className="w-0.5 bg-gold-400 rounded-full animate-spectrum" style={{ animationDelay: '0.1s' }} />
                        <span className="w-0.5 bg-gold-400 rounded-full animate-spectrum" style={{ animationDelay: '0.3s' }} />
                        <span className="w-0.5 bg-gold-400 rounded-full animate-spectrum" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="overflow-hidden min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="text-xs font-bold text-white truncate hover:text-gold-400 transition-colors">
                      {currentTrack.title}
                    </h4>
                    {currentTrack.isPro && (
                      <span className="text-[7px] font-black px-1 py-0.2 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30 uppercase flex-shrink-0">
                        PRO
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate">
                    {currentTrack.artist}
                  </p>
                </div>
              </div>

              {/* Right: Touch Transport & Quick Tip & Minimize */}
              <div className="flex items-center space-x-1.5 flex-shrink-0">
                <button
                  onClick={playPrevious}
                  className="p-1.5 rounded-full text-zinc-300 hover:text-white transition-transform active:scale-90"
                  aria-label="Previous Track"
                >
                  <SkipBack className="w-4 h-4 fill-current" />
                </button>

                {/* Big Tactile Play / Pause Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-gold-gradient text-charcoal-950 flex items-center justify-center shadow-gold-glow active:scale-95 transition-transform"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-charcoal-950" />
                  ) : (
                    <Play className="w-4 h-4 fill-charcoal-950 ml-0.5" />
                  )}
                </motion.button>

                <button
                  onClick={playNext}
                  className="p-1.5 rounded-full text-zinc-300 hover:text-white transition-transform active:scale-90"
                  aria-label="Next Track"
                >
                  <SkipForward className="w-4 h-4 fill-current" />
                </button>

                {/* Instant Tip Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openTippingModal(currentTrack)}
                  className="px-2.5 py-1.5 rounded-xl font-black text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center gap-1 active:scale-95"
                >
                  <Banknote className="w-3.5 h-3.5 text-charcoal-950" />
                  <span>Tip</span>
                </motion.button>

                {/* Minimize */}
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 rounded-xl text-zinc-400 hover:text-white bg-charcoal-800/80 border border-white/5 transition-all"
                  title="Minimize Player"
                >
                  <ChevronDown className="w-4 h-4 text-gold-400" />
                </button>
              </div>
            </div>

            {/* ========================================================= */}
            {/* DOCK CONTENT - TABLET & DESKTOP (3 COLUMNS)               */}
            {/* ========================================================= */}
            <div className="hidden sm:flex items-center justify-between gap-6 px-6 py-3 w-full">
              
              {/* LEFT: ALBUM ART & TRACK META */}
              <div className="flex items-center space-x-3.5 min-w-[170px] max-w-xs overflow-hidden">
                {/* Rotating Vinyl Styled Art */}
                <div className="relative group w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0 border border-gold-500/30 shadow-md">
                  <img
                    src={currentTrack.coverUrl}
                    alt={currentTrack.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isPlaying ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  {isPlaying && (
                    <div className="absolute inset-0 bg-charcoal-950/30 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="flex items-end gap-0.5 h-3.5">
                        <span className="w-0.5 bg-gold-400 rounded-full animate-spectrum" style={{ animationDelay: '0.1s' }} />
                        <span className="w-0.5 bg-gold-400 rounded-full animate-spectrum" style={{ animationDelay: '0.3s' }} />
                        <span className="w-0.5 bg-gold-400 rounded-full animate-spectrum" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="overflow-hidden min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white truncate hover:text-gold-400 transition-colors cursor-pointer">
                      {currentTrack.title}
                    </h4>
                    {currentTrack.isPro && (
                      <span className="text-[8px] font-black px-1.5 py-0.2 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30 uppercase flex-shrink-0">
                        PRO
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate hover:text-zinc-300 transition-colors">
                    {currentTrack.artist}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono">
                    <span className="text-gold-400 font-medium">₦{currentTrack.totalTips.toLocaleString()}</span>
                    <span>•</span>
                    <span className="truncate">{currentTrack.genre}</span>
                  </div>
                </div>

                {/* Like Button */}
                <button
                  onClick={() => toggleLikeTrack(currentTrack.id)}
                  className={`p-1.5 rounded-full transition-colors ${
                    currentTrack.liked ? 'text-rose-500 hover:text-rose-400' : 'text-zinc-400 hover:text-white'
                  }`}
                  aria-label="Like Track"
                >
                  <Heart className={`w-3.5 h-3.5 ${currentTrack.liked ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* CENTER: TRANSPORT CONTROLS & TIME */}
              <div className="flex flex-col items-center flex-1 max-w-md">
                <div className="flex items-center space-x-5 mb-0.5">
                  <button
                    onClick={() => setIsShuffle(!isShuffle)}
                    className={`p-1 rounded-full transition-colors hidden md:block ${
                      isShuffle ? 'text-gold-400' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                    title="Shuffle"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={playPrevious}
                    className="p-1 rounded-full text-zinc-300 hover:text-white transition-transform active:scale-90"
                    aria-label="Previous Track"
                  >
                    <SkipBack className="w-4 h-4 fill-current" />
                  </button>

                  {/* Main Play / Pause Button with Gold Glow Pulse */}
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    whileHover={{ scale: 1.06 }}
                    onClick={togglePlay}
                    className="w-11 h-11 rounded-full bg-gold-gradient text-charcoal-950 flex items-center justify-center shadow-gold-glow hover:shadow-gold-glow-lg transition-shadow"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-charcoal-950" />
                    ) : (
                      <Play className="w-5 h-5 fill-charcoal-950 ml-0.5" />
                    )}
                  </motion.button>

                  <button
                    onClick={playNext}
                    className="p-1 rounded-full text-zinc-300 hover:text-white transition-transform active:scale-90"
                    aria-label="Next Track"
                  >
                    <SkipForward className="w-4 h-4 fill-current" />
                  </button>

                  <button
                    onClick={() => setIsRepeat(!isRepeat)}
                    className={`p-1 rounded-full transition-colors hidden md:block ${
                      isRepeat ? 'text-gold-400' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                    title="Repeat"
                  >
                    <Repeat className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Scrubber Time & Live Audio Spectrum */}
                <div className="w-full flex items-center justify-between text-[10px] text-zinc-400 font-mono px-2">
                  <span>{formatTime(currentTime)}</span>
                  
                  {/* Subtle 8-Bar Waveform In Center */}
                  <div className="flex items-end gap-1 h-3 px-2">
                    {analyserData.slice(0, 8).map((val, idx) => (
                      <span
                        key={idx}
                        className="w-0.5 bg-gold-400/80 rounded-full transition-all duration-100"
                        style={{ height: `${isPlaying ? Math.max(20, val * 0.7) : 25}%` }}
                      />
                    ))}
                  </div>

                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* RIGHT: TIP ARTIST, VOLUME & MINIMIZE TOGGLE */}
              <div className="flex items-center space-x-3 min-w-[170px] justify-end flex-shrink-0">
                
                {/* PROMINENT "TIP ARTIST" BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => openTippingModal(currentTrack)}
                  className="relative group px-4 py-2.5 rounded-xl font-extrabold text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center gap-1.5 flex-shrink-0"
                >
                  <Banknote className="w-4 h-4 text-charcoal-900 animate-bounce" />
                  <span>Tip Cash (₦)</span>
                </motion.button>

                {/* Volume Slider Dropdown / Inline */}
                <div className="relative hidden lg:flex items-center space-x-2 group">
                  <button
                    onClick={toggleMute}
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-1 bg-charcoal-800 rounded-lg accent-gold-500 cursor-pointer"
                  />
                </div>

                {/* Share Link */}
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: `${currentTrack.title} on Downtown Radio`,
                        text: `Check out ${currentTrack.title} by ${currentTrack.artist} on Downtown Radio!`,
                        url: window.location.href,
                      }).catch(() => {});
                    } else {
                      navigator.clipboard?.writeText(window.location.href);
                      addToast('Share Link Copied', `Link to ${currentTrack.title} copied to clipboard!`, 'info');
                    }
                  }}
                  className="p-1.5 rounded-full text-zinc-400 hover:text-white transition-colors hidden md:block"
                  title="Share Track"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>

                {/* MINIMIZE BUTTON (Fixes Screen Blocking!) */}
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white bg-charcoal-800/80 hover:bg-charcoal-700 border border-white/5 transition-all"
                  title="Minimize Player (Unblock Screen)"
                >
                  <ChevronDown className="w-4 h-4 text-gold-400" />
                </button>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
