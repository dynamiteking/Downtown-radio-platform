'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Ticket, 
  Flame, 
  Camera, 
  Users,
  Play,
  Pause
} from 'lucide-react';

interface Slide {
  id: string;
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  highlight: string;
}

const EVENT_SLIDES: Slide[] = [
  {
    id: 'slide-heritage',
    image: '/images/gallery/downtown-event-4-artist-performer.jpg',
    tag: 'LIVE ROOFTOP PERFORMANCE',
    title: 'Pan-African Alté Royalty in Motion',
    subtitle: 'Hand-woven cowrie pearl regalia, soaring vocals, and raw acoustic frequencies captured live during the sunset jam overlooking ancient Ile-Ife.',
    location: 'Rooftop Skate Bowl • Ancient Ile-Ife',
    date: 'Acoustic Sunset Jam',
    highlight: 'Over 450 Fans in Attendance',
  },
  {
    id: 'slide-rave',
    image: '/images/gallery/downtown-event-2-rave-crowd.jpg',
    tag: 'ALL-NIGHT RAVE DANCEFLOOR',
    title: 'The Rave Electricity & Red Carpet Glow',
    subtitle: 'From dusk until dawn: heavy 808 bass, glowing neon strobes, and pure community euphoria. This is what Downtown gatherings look and feel like.',
    location: 'Main Stage • Downtown Fest',
    date: 'Dusk-to-Dawn Gathering',
    highlight: '9PM — 5AM Non-Stop Energy',
  },
  {
    id: 'slide-creators',
    image: '/images/gallery/downtown-event-3-creators.jpg',
    tag: 'BACKSTAGE & ARTIST GROOMING',
    title: 'Sonic Architects, Stylists & Visionaries',
    subtitle: 'Behind the scenes at our creative gatherings: independent producers, vocalists, and sound designers connecting over unreleased master recordings.',
    location: 'Ikeja Creative Loft • Lagos Mainland',
    date: 'Underground Soundclash',
    highlight: 'A&R & Grooming Incubator',
  },
  {
    id: 'slide-fans',
    image: '/images/gallery/downtown-event-1-fans.jpg',
    tag: 'COMMUNITY & PARTNER REWARD',
    title: 'Palm Afrika × Downtown Fest Community',
    subtitle: 'Real fan love rewarded on stage with exclusive partner giveaways, merchandise drops, and the official Downtown Fest medallion.',
    location: 'Festival Grounds • Lagos Coast',
    date: 'Annual Festival Celebration',
    highlight: 'Zero Distance Between Artists & Fans',
  },
  {
    id: 'slide-afterparty',
    image: '/images/gallery/downtown-event-5-afterparty.jpg',
    tag: 'ROOFTOP SOUNDSTAGE JAM',
    title: 'Intimate Rooftop Sessions & Sound Systems',
    subtitle: 'Celebrating independent African music culture in safe, elevated spaces where original sound thrives without commercial restrictions.',
    location: 'Downtown Sound System • Nigeria',
    date: 'Rooftop Sessions Live',
    highlight: 'Unreleased Track Debuts',
  },
];

export default function EventSlideshow() {
  const { setActiveTab } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % EVENT_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = EVENT_SLIDES[currentSlide];

  const handleScrollToTickets = () => {
    setActiveTab('discover');
    setTimeout(() => {
      const el = document.getElementById('ticket-booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  return (
    <section 
      className="my-14 max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-[11px] font-bold uppercase tracking-wider text-gold-400 mb-1.5">
            <Camera className="w-3.5 h-3.5 text-gold-400" />
            <span>AUTHENTIC SHOW DOCUMENTARY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            What Our Events Look & Feel Like
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Real crowd energy, rooftop vibes, and raw indie royalty captured live at Downtown Radio gatherings.
          </p>
        </div>

        {/* Slide Counter & Pause Status */}
        <div className="flex items-center gap-3 self-start sm:self-auto font-mono text-xs">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-xl bg-charcoal-800 border border-white/10 text-zinc-400 hover:text-white transition-colors"
            title={isPaused ? 'Resume Slideshow' : 'Pause Slideshow'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-gold-400" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <span className="text-gold-400 font-bold">
            0{currentSlide + 1}
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400">
            0{EVENT_SLIDES.length}
          </span>
        </div>
      </div>

      {/* Main Slideshow Stage - Compact & Crisp */}
      <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-gold-glow-lg bg-charcoal-950">
        
        {/* Background Event Photo with subtle Ken Burns effect */}
        {EVENT_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover object-center"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-charcoal-950/30" />
          </div>
        ))}

        {/* Top Badges Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-950/85 border border-gold-500/40 text-[10px] font-black uppercase tracking-wider text-gold-400 backdrop-blur-md shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{slide.tag}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900/80 border border-white/10 text-[11px] font-semibold text-zinc-300 backdrop-blur-md">
            <Flame className="w-3 h-3 text-gold-400" />
            <span>{slide.highlight}</span>
          </div>
        </div>

        {/* Slide Content Overlay */}
        <div className="absolute bottom-12 sm:bottom-14 left-4 sm:left-6 right-4 sm:right-6 z-20 space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-gold-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{slide.location}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 text-zinc-300">
              <Calendar className="w-3 h-3" />
              <span>{slide.date}</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight">
            {slide.title}
          </h3>

          <p className="text-xs text-zinc-300 line-clamp-2 max-w-xl leading-relaxed">
            {slide.subtitle}
          </p>
        </div>

        {/* Bottom CTA & Navigation Arrows */}
        <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between">
          <button
            onClick={handleScrollToTickets}
            className="px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center gap-1.5"
          >
            <Ticket className="w-3.5 h-3.5 text-charcoal-950" />
            <span>Join Gathering Waitlist</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentSlide((currentSlide - 1 + EVENT_SLIDES.length) % EVENT_SLIDES.length)}
              className="p-1.5 rounded-lg bg-charcoal-900/80 hover:bg-charcoal-800 text-white border border-white/10 hover:border-gold-500/40 backdrop-blur-md transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((currentSlide + 1) % EVENT_SLIDES.length)}
              className="p-1.5 rounded-lg bg-charcoal-900/80 hover:bg-charcoal-800 text-white border border-white/10 hover:border-gold-500/40 backdrop-blur-md transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar along bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-charcoal-900 z-20">
          <div
            className="h-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-300 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / EVENT_SLIDES.length) * 100}%` }}
          />
        </div>

      </div>

      {/* Filmstrip Thumbnails Row - Compact */}
      <div className="grid grid-cols-5 gap-2 max-w-lg mx-auto mt-3">
        {EVENT_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`relative h-14 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 group ${
              idx === currentSlide
                ? 'border-gold-500 ring-2 ring-gold-500/40 shadow-gold-glow'
                : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
          </button>
        ))}
      </div>

    </section>
  );
}
