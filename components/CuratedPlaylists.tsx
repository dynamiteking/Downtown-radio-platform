'use client';

import React from 'react';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { CURATED_PLAYLISTS } from '../data/mockData';
import { Play, Sparkles, Music, Users, Radio, ArrowUpRight } from 'lucide-react';

export default function CuratedPlaylists() {
  const { tracks } = useStore();
  const { playTrack } = useAudio();

  const handlePlayPlaylist = (playlistTrackIds: string[]) => {
    const firstTrack = tracks.find(t => playlistTrackIds.includes(t.id)) || tracks[0];
    playTrack(firstTrack);
  };

  return (
    <section className="my-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL COLLECTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Curated Playlists
          </h2>
          <p className="text-sm text-zinc-400">
            Hand-picked selections highlighting the soundscapes of the African indie underground and premier festival anthems.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span>Updated Every Friday</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CURATED_PLAYLISTS.map(playlist => {
          return (
            <div
              key={playlist.id}
              className="group relative bg-charcoal-850/80 rounded-2xl border border-white/5 hover:border-gold-500/40 p-4 transition-all duration-300 hover:shadow-gold-glow flex flex-col justify-between"
            >
              {/* Cover Art with Hover Play Overlay */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-charcoal-800">
                <img
                  src={playlist.coverUrl}
                  alt={playlist.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Tag pill */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-charcoal-900/90 text-gold-400 border border-gold-500/30 backdrop-blur-md">
                  {playlist.tag}
                </span>

                {/* Floating Play Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => handlePlayPlaylist(playlist.trackIds)}
                    className="w-12 h-12 rounded-full bg-gold-gradient text-charcoal-950 flex items-center justify-center shadow-gold-glow transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 active:scale-95"
                    aria-label={`Play ${playlist.title}`}
                  >
                    <Play className="w-6 h-6 fill-charcoal-950 ml-0.5" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-gold-400 transition-colors flex items-center justify-between">
                  <span>{playlist.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-xs text-zinc-400 font-medium mb-2">
                  Curated by {playlist.curator}
                </p>
                <p className="text-xs text-zinc-400/90 line-clamp-2 leading-relaxed mb-4">
                  {playlist.description}
                </p>
              </div>

              {/* Footer info */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-gold-400" />
                  <span>{playlist.trackIds.length} Hot Tracks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{(playlist.followerCount / 1000).toFixed(1)}K fans</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
