'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { Track } from '../types';
import { 
  Play, 
  Pause, 
  Banknote, 
  Heart, 
  Search, 
  Headphones, 
  Sparkles, 
  Flame, 
  Share2, 
  SlidersHorizontal 
} from 'lucide-react';

export default function TrackFeed() {
  const { tracks, openTippingModal, toggleLikeTrack, addToast } = useStore();
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();
  
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const genres = ['All', 'Alté / Afro-Fusion', 'Afro-Drill / Alté', 'Highlife Soul', 'Afro-Psych', 'Neo-Soul / R&B'];

  const filteredTracks = tracks.filter(track => {
    const matchesGenre = selectedGenre === 'All' || track.genre.toLowerCase().includes(selectedGenre.toLowerCase()) || selectedGenre.toLowerCase().includes(track.genre.toLowerCase());
    const matchesSearch = track.title.toLowerCase().includes(searchQuery.toLowerCase()) || track.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <section className="my-10">
      
      {/* Title & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
            <Headphones className="w-3.5 h-3.5" />
            <span>DISCOVER INDIE SOUNDS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Trending Indie Music Feed
          </h2>
          <p className="text-sm text-zinc-400">
            Listen to exclusive releases, stream uncompressed audio, and tip artists directly in Naira.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search tracks, artists, genres..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full py-2.5 pl-10 pr-4 rounded-xl bg-charcoal-850 border border-white/10 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        </div>
      </div>

      {/* Genre Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {genres.map(genre => {
          const isActive = selectedGenre === genre;
          return (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-gold-500 text-charcoal-950 border-gold-400 shadow-gold-glow'
                  : 'bg-charcoal-850 text-zinc-300 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>

      {/* Track List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map(track => {
          const isThisTrackPlaying = currentTrack?.id === track.id && isPlaying;

          return (
            <div
              key={track.id}
              className={`group relative bg-charcoal-850/90 rounded-2xl border transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between hover:shadow-gold-glow ${
                isThisTrackPlaying
                  ? 'border-gold-500/60 ring-1 ring-gold-500/30'
                  : 'border-white/5 hover:border-gold-500/40'
              }`}
            >
              {/* Top Row: Cover, Info & Play */}
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                
                {/* Cover art with Play button */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-charcoal-800 border border-white/10">
                  <img
                    src={track.coverUrl}
                    alt={track.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={() => {
                      if (isThisTrackPlaying) {
                        togglePlay();
                      } else {
                        playTrack(track);
                      }
                    }}
                    className={`absolute inset-0 m-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                      isThisTrackPlaying
                        ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
                        : 'bg-black/60 text-white opacity-85 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110'
                    }`}
                    aria-label={`Play ${track.title}`}
                  >
                    {isThisTrackPlaying ? (
                      <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Meta */}
                <div className="flex-1 overflow-hidden">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
                      {track.genre}
                    </span>
                    {track.isPro && (
                      <span className="text-[9px] font-black uppercase text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">
                        PRO
                      </span>
                    )}
                  </div>
                  
                  <h3
                    onClick={() => playTrack(track)}
                    className="text-base font-bold text-white truncate cursor-pointer hover:text-gold-400 transition-colors"
                  >
                    {track.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 font-medium truncate mb-2">
                    {track.artist}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-zinc-500">
                    <span>{(track.streams / 1000).toFixed(1)}k streams</span>
                    <span>•</span>
                    <span>{Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}</span>
                  </div>
                </div>

              </div>

              {/* Middle: Real-time Tip Counter Banner */}
              <div className="p-3 rounded-xl bg-charcoal-800/80 border border-white/5 mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-gold-500/15 text-gold-400">
                    <Banknote className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                      Live Fan Tips
                    </div>
                    <div className="text-sm font-black text-gold-400 font-mono">
                      ₦{track.totalTips.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-bold text-white">
                    {track.tipCount} Tips
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    from verified fans
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
                {/* Heart / Like button */}
                <button
                  onClick={() => toggleLikeTrack(track.id)}
                  className={`p-2.5 rounded-xl border transition-colors flex items-center gap-1.5 text-xs font-semibold ${
                    track.liked
                      ? 'border-rose-500/40 bg-rose-500/10 text-rose-400'
                      : 'border-white/5 bg-charcoal-800 text-zinc-400 hover:text-white'
                  }`}
                  aria-label="Like Track"
                >
                  <Heart className={`w-4 h-4 ${track.liked ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">{track.liked ? 'Loved' : 'Like'}</span>
                </button>

                {/* Direct Tip Artist Button */}
                <button
                  onClick={() => openTippingModal(track)}
                  className="flex-1 py-2.5 px-3 rounded-xl font-bold text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <Banknote className="w-4 h-4 text-charcoal-900" />
                  <span>Tip Cash (₦)</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
