'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Camera, 
  Sparkles, 
  X, 
  MapPin, 
  Calendar, 
  Ticket, 
  Maximize2, 
  Flame, 
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  tag: string;
  location: string;
  date: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-4',
    image: '/images/gallery/downtown-event-4-artist-performer.jpg',
    title: 'Traditional Cowrie & Alté Royalty',
    tag: 'Live Heritage Performance',
    location: 'Rooftop Skate Bowl • Ile-Ife',
    date: 'Acoustic Jam Session',
    description: 'Pan-African sonic sovereignty in motion — blending hand-woven cowrie pearl regalia with soulful indie afro-fusion vocals.',
  },
  {
    id: 'gallery-2',
    image: '/images/gallery/downtown-event-2-rave-crowd.jpg',
    title: 'Red Carpet & Rave Glow',
    tag: 'Festival Dancefloor',
    location: 'Downtown Fest Main Stage',
    date: 'Dusk-to-Dawn Celebration',
    description: 'Pure unfiltered community joy beneath the neon banners. The heartbeat of our all-night celebrations.',
  },
  {
    id: 'gallery-3',
    image: '/images/gallery/downtown-event-3-creators.jpg',
    title: 'Sonic Architects & Creators',
    tag: 'Backstage & VIP Deck',
    location: 'Ikeja Creative Loft',
    date: 'Underground Soundclash',
    description: 'Independent producers, stylists, and alté visionaries connecting in warm neon lighting over raw master recordings.',
  },
  {
    id: 'gallery-1',
    image: '/images/gallery/downtown-event-1-fans.jpg',
    title: 'Community & Brand Champions',
    tag: 'Palm Afrika × Downtown Fest',
    location: 'Official Festival Grounds',
    date: 'Annual Gathering',
    description: 'Real fans celebrating music freedom with brand partner giveaways and the official Downtown Fest medallion.',
  },
  {
    id: 'gallery-5',
    image: '/images/gallery/downtown-event-5-afterparty.jpg',
    title: 'All-Night Soundstage & Jam',
    tag: 'Rooftop Afterparty',
    location: 'Downtown Sound System',
    date: '9PM — 5AM Session',
    description: 'Intimate late-night vibes where indie recording artists and loyal listeners celebrate authentic sonic expression.',
  },
];

export default function EventGallery() {
  const { setActiveTab } = useStore();
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const handleNextPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex(item => item.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setActivePhoto(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex(item => item.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActivePhoto(GALLERY_ITEMS[prevIndex]);
  };

  const handleScrollToTickets = () => {
    setActivePhoto(null);
    setActiveTab('discover');
    setTimeout(() => {
      const el = document.getElementById('ticket-booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  return (
    <section className="my-16">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            <Camera className="w-3.5 h-3.5 text-gold-400" />
            <span>OFFICIAL EVENT ARCHIVE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Downtown Moments: Live From Our Shows
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Real photos captured live at our festival stages, rooftop acoustic gatherings, and underground creative hubs.
          </p>
        </div>

        <button
          onClick={handleScrollToTickets}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center gap-1.5"
        >
          <Ticket className="w-3.5 h-3.5 text-charcoal-950" />
          <span>Join Upcoming Showcase Waitlist</span>
        </button>
      </div>

      {/* Modern Bento Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
        
        {/* Featured Big Card (Col span 7) */}
        <div 
          onClick={() => setActivePhoto(GALLERY_ITEMS[0])}
          className="lg:col-span-7 h-80 sm:h-96 rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-gold-500/50 shadow-2xl transition-all duration-500"
        >
          <img
            src={GALLERY_ITEMS[0].image}
            alt={GALLERY_ITEMS[0].title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
          
          {/* Top Pill */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold-500 text-charcoal-950 shadow-gold-glow">
              {GALLERY_ITEMS[0].tag}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 space-y-1">
            <div className="flex items-center gap-2 text-[11px] font-mono text-gold-400">
              <MapPin className="w-3 h-3" />
              <span>{GALLERY_ITEMS[0].location}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {GALLERY_ITEMS[0].title}
            </h3>
            <p className="text-xs text-zinc-300 line-clamp-2 max-w-lg">
              {GALLERY_ITEMS[0].description}
            </p>
          </div>

          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4 text-gold-400" />
          </div>
        </div>

        {/* Medium Card (Col span 5) */}
        <div 
          onClick={() => setActivePhoto(GALLERY_ITEMS[1])}
          className="lg:col-span-5 h-80 sm:h-96 rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-gold-500/50 shadow-2xl transition-all duration-500"
        >
          <img
            src={GALLERY_ITEMS[1].image}
            alt={GALLERY_ITEMS[1].title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-charcoal-900/90 text-gold-400 border border-gold-500/40 backdrop-blur-md">
              {GALLERY_ITEMS[1].tag}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 space-y-1">
            <div className="flex items-center gap-2 text-[11px] font-mono text-gold-400">
              <MapPin className="w-3 h-3" />
              <span>{GALLERY_ITEMS[1].location}</span>
            </div>
            <h3 className="text-xl font-black text-white leading-tight">
              {GALLERY_ITEMS[1].title}
            </h3>
            <p className="text-xs text-zinc-300 line-clamp-2">
              {GALLERY_ITEMS[1].description}
            </p>
          </div>

          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-4 h-4 text-gold-400" />
          </div>
        </div>

        {/* 3 Smaller Columns Below (Col span 4 each) */}
        {GALLERY_ITEMS.slice(2).map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="lg:col-span-4 h-64 rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-gold-500/50 shadow-xl transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-transparent" />

            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-charcoal-900/90 text-zinc-200 border border-white/10 backdrop-blur-md">
                {item.tag}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 space-y-0.5">
              <div className="text-[10px] font-mono text-gold-400 truncate">
                {item.location}
              </div>
              <h4 className="text-base font-black text-white leading-tight truncate">
                {item.title}
              </h4>
            </div>

            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
            </div>
          </div>
        ))}

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-charcoal-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-charcoal-950/80 hover:bg-charcoal-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Big Image Container with navigation arrows */}
            <div className="relative md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[320px] md:min-h-[460px]">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />

              {/* Prev / Next controls */}
              <button
                onClick={e => { e.stopPropagation(); handlePrevPhoto(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors"
                title="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={e => { e.stopPropagation(); handleNextPhoto(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors"
                title="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Photo Meta & Narrative */}
            <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between space-y-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-3">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  <span>{activePhoto.tag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                  {activePhoto.title}
                </h3>

                <div className="space-y-1.5 text-xs text-zinc-400 mb-4 font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>{activePhoto.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{activePhoto.date}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>

              {/* CTA footer in lightbox */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={handleScrollToTickets}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4 text-charcoal-950" />
                  <span>Experience The Next Showcase • Status: TBA</span>
                </button>
                <span className="text-[10px] text-zinc-500 text-center block">
                  Date & Venue To Be Announced (TBA)
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
