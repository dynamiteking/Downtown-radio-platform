'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { 
  Sparkles, 
  Crown, 
  Mail, 
  Copy, 
  Check, 
  ArrowRight, 
  Radio, 
  Disc, 
  Flame, 
  Mic2, 
  Layers, 
  Compass, 
  Camera, 
  Volume2,
  Calendar,
  Play,
  Pause,
  Banknote
} from 'lucide-react';

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
}

const DK_PHOTOS: GalleryPhoto[] = [
  {
    id: 'artistic-focus',
    src: '/images/dk/dk-artistic-focus-red.jpg',
    title: 'The Visionary & Executive',
    subtitle: 'Deep artistic focus and brand architecture behind the Downtown Radio movement.',
    tag: 'CREATIVE DIRECTOR',
  },
  {
    id: 'stage-mic',
    src: '/images/dk/dk-stage-mic-bw.jpg',
    title: 'Center-Stage Command',
    subtitle: 'Raw acoustic and lyrical mastery commanding all-night crowds.',
    tag: 'RECORDING ARTIST',
  },
  {
    id: 'rooftop-squad',
    src: '/images/dk/dk-rooftop-squad.jpg',
    title: 'The Cultural Movement',
    subtitle: 'Downtown Radio rooftop sessions uniting top independent visionaries.',
    tag: 'CULTURAL ARCHITECT',
  },
  {
    id: 'flag-host',
    src: '/images/dk/dk-flag-host-bw.jpg',
    title: 'Elite Event Host',
    subtitle: 'Commanding rooms and curating high-energy live experiences across Nigeria.',
    tag: 'EVENT HOST & MC',
  },
  {
    id: 'creative-collective',
    src: '/images/dk/dk-creative-collective.jpg',
    title: 'The Next Generation',
    subtitle: 'Collaborating with elite performers, recording artists, and sonic architects.',
    tag: 'STRATEGIC MENTOR',
  },
];

export default function DKVisionarySection() {
  const { addToast, openTippingModal, tracks } = useStore();
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const atwnTracks = tracks.filter(t => t.id.startsWith('atwn-'));
  const activePhoto = DK_PHOTOS[selectedPhotoIndex];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText('dynamiteking1@gmail.com');
    setCopiedEmail(true);
    addToast('Email Copied!', 'dynamiteking1@gmail.com copied to your clipboard.', 'gold');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="dk-visionary" className="my-20 relative overflow-hidden w-full scroll-mt-24">
      
      {/* Outer Glow & Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[350px] bg-gradient-to-tr from-gold-500/10 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Luxury Container */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-charcoal-950 border-2 border-gold-500/30 p-4 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Top Accent Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-300" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-[11px] sm:text-xs font-black uppercase tracking-wider text-gold-400 mb-2">
              <Crown className="w-4 h-4 text-gold-400" />
              <span>THE ARCHITECT & PIONEER • CEO NOTE</span>
            </div>
            <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              The Mind Behind Downtown Radio
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest hidden sm:inline">
              Executive Profile
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Two-Column Grid: Visual Showcase & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Interactive Portrait Gallery Stage (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Primary Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-gold-glow-lg bg-charcoal-950 group">
              
              {/* Photo Display */}
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Cinematic Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/30" />

              {/* Tag Pill */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full bg-charcoal-950/90 border border-gold-500/40 text-[10px] font-black uppercase tracking-widest text-gold-400 backdrop-blur-md shadow-md">
                  {activePhoto.tag}
                </span>
              </div>

              {/* Portrait Caption */}
              <div className="absolute bottom-5 left-5 right-5 z-20 space-y-1">
                <h3 className="text-xl font-black text-white leading-tight">
                  {activePhoto.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2">
                  {activePhoto.subtitle}
                </p>
              </div>

            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="grid grid-cols-5 gap-2 w-full max-w-md mt-4">
              {DK_PHOTOS.map((photo, idx) => {
                const isActive = idx === selectedPhotoIndex;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      isActive
                        ? 'border-gold-500 ring-2 ring-gold-500/50 shadow-gold-glow scale-105'
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                    }`}
                    title={photo.title}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-zinc-400 text-center mt-2 font-mono">
              Tap thumbnails to explore DK's creative chapters
            </p>

          </div>

          {/* RIGHT COLUMN: The Narrative & Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Identity & Title Lockup */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-gold-400 mb-1">
                <span>FOUNDER & VISIONARY</span>
                <span>•</span>
                <span>ILE-IFE & LAGOS, NIGERIA</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                DK
              </h3>
              <p className="text-base sm:text-lg font-semibold text-zinc-300 mt-1">
                CEO & Pioneer of Downtown Radio • Creative Director • Executive Strategist
              </p>
            </div>

            {/* Bio Prose - Directly Incorporating User's Words */}
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              <p>
                <strong className="text-white font-bold">DK</strong> is a multi-dimensional creative powerhouse, executive, and visionary who seamlessly navigates the space between behind-the-scenes strategy and center-stage command.
              </p>
              
              <p>
                As the CEO and Pioneer of <strong className="text-gold-400 font-bold">Downtown Radio</strong>, DK has built far more than a media platform; he has engineered a thriving cultural movement and event community. Under his leadership, Downtown Radio serves as a vital ecosystem that bridges music distribution with high-energy live experiences—bringing together a collective of elite creatives, performers, recording artists, and DJs to curate unforgettable shows.
              </p>

              <p>
                His expertise spans the full creative spectrum—from working as a sought-after <strong className="text-white">Creative Director</strong> shaping the visual identity of high-profile projects, to commanding rooms as an elite <strong className="text-white">Event Host</strong>. While his early creative chapters included successful stints in modeling and acting, his current focus centers entirely on high-level creative direction, premium event hosting, and media strategy.
              </p>
            </div>

            {/* SPECIAL SPOTLIGHT: 2026 RETURN TO MUSIC — "ATWN" EP */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 border border-gold-500/40 shadow-gold-glow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Header Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-gold-gradient text-charcoal-950">
                    <Disc className="w-4 h-4 fill-charcoal-950 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-black tracking-widest text-gold-400 block">
                      OFFICIAL DEBUT EP • 2026 ERA
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      "ATWN" <span className="text-sm sm:text-base font-normal text-zinc-400">(After This, What Next?)</span>
                    </h4>
                  </div>
                </div>

                <span className="self-start sm:self-auto px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-charcoal-950 bg-gold-gradient shadow-sm">
                  DK × NIRATI DAGWI
                </span>
              </div>

              {/* Cover Art & EP Overview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-5">
                {/* Official Album Art */}
                <div className="sm:col-span-5 relative w-full max-w-xs sm:max-w-none mx-auto sm:mx-0 aspect-square rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-xl group/cover bg-charcoal-900">
                  <img
                    src="/images/atwn/atwn-cover.jpg"
                    alt="ATWN (After This What Next) Official Cover Art"
                    className="w-full h-full object-cover group-hover/cover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-mono font-bold text-white border border-white/20">
                    OFFICIAL MASTER
                  </div>
                </div>

                {/* Narrative Description */}
                <div className="sm:col-span-7 space-y-2 text-xs text-zinc-300 leading-relaxed">
                  <p>
                    After a deliberate four-year hiatus from the recording studio to scale his business ventures and refine his artistic philosophy, DK makes a highly anticipated return to music in 2026. This new era is anchored by a major collaborative debut EP alongside <strong className="text-white font-bold">Nirati Dagwi</strong>, titled <strong className="text-gold-400">"ATWN" (After This, What Next?)</strong>.
                  </p>
                  <p className="text-[11px] text-zinc-400 italic">
                    The project reflects a profound artistic evolution, blending his executive maturity with uncompromising, razor-sharp storytelling.
                  </p>
                  <div className="pt-1 flex items-center gap-2">
                    <button
                      onClick={() => openTippingModal(atwnTracks[0])}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-charcoal-950 bg-gold-gradient shadow-sm flex items-center gap-1 active:scale-95 transition-transform"
                    >
                      <Banknote className="w-3 h-3 text-charcoal-950" />
                      <span>Back ATWN EP (₦)</span>
                    </button>
                    <span className="text-[10px] font-mono text-zinc-400">4 Audio Masters Loaded</span>
                  </div>
                </div>
              </div>

              {/* Real Audio Interactive Tracklist */}
              <div className="space-y-2 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  <span>EP Tracklist & Audio Stream</span>
                  <span className="text-gold-400 font-bold">High-Fidelity Audio</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {atwnTracks.map((track, idx) => {
                    const isTrackActive = currentTrack?.id === track.id && isPlaying;
                    return (
                      <div
                        key={track.id}
                        onClick={() => {
                          if (isTrackActive) {
                            togglePlay();
                          } else {
                            playTrack(track);
                          }
                        }}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                          isTrackActive
                            ? 'bg-gold-500/15 border-gold-500 shadow-gold-glow'
                            : 'bg-charcoal-900/90 border-white/5 hover:border-gold-500/30 hover:bg-charcoal-850'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <button
                            className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                              isTrackActive
                                ? 'bg-gold-500 text-charcoal-950 shadow-sm'
                                : 'bg-charcoal-800 text-gold-400'
                            }`}
                          >
                            {isTrackActive ? (
                              <Pause className="w-3.5 h-3.5 fill-current" />
                            ) : (
                              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                            )}
                          </button>
                          <div className="overflow-hidden">
                            <div className="text-xs font-bold text-white truncate">
                              0{idx + 1}. {track.title}
                            </div>
                            <div className="text-[10px] text-zinc-400 truncate">
                              {track.artist}
                            </div>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <span className="text-[10px] font-mono text-gold-400 font-semibold block">
                            {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                          </span>
                          <span className="text-[9px] text-zinc-500 font-mono">
                            ₦{(track.totalTips / 1000).toFixed(0)}k tips
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer Bar */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-gold-400 font-mono text-[11px]">
                  <Mic2 className="w-3.5 h-3.5" />
                  <span>DK × Nirati Dagwi Collaborative Masterpiece</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-zinc-400">
                  Pre-Save & Airplay Exclusively on Downtown Radio
                </span>
              </div>
            </div>

            {/* THE PHILOSOPHY / ULTIMATE QUESTION BANNER */}
            <div className="p-4 sm:p-5 rounded-2xl bg-charcoal-950/70 border border-white/5 space-y-2">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Today, DK stands at the definitive intersection of entertainment, media, and strategy—constantly pushing the culture forward and asking the ultimate question:
              </p>
              <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-yellow-200 tracking-tight">
                “After this, what next?”
              </div>
            </div>

            {/* DIRECT EXECUTIVE CONTACT & BOOKINGS */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              
              {/* Direct Email Action */}
              <a
                href="mailto:dynamiteking1@gmail.com"
                className="px-5 py-3 rounded-xl font-black text-xs sm:text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-charcoal-950" />
                <span>Contact DK: dynamiteking1@gmail.com</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl font-bold text-xs text-zinc-300 hover:text-white bg-charcoal-800 hover:bg-charcoal-700 border border-white/10 hover:border-gold-500/40 transition-all flex items-center gap-1.5"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gold-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* Direct Booking note */}
              <span className="text-[11px] text-zinc-400 font-mono">
                Available for Creative Direction • Event Hosting • Media Strategy
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
