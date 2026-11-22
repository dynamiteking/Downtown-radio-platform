'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '../../context/StoreContext';
import EventsPitching from '../../components/EventsPitching';
import TicketBookingSection from '../../components/TicketBookingSection';
import EventVideoReel from '../../components/EventVideoReel';
import EventSlideshow from '../../components/EventSlideshow';
import EventGallery from '../../components/EventGallery';
import NativeAppsBanner from '../../components/NativeAppsBanner';
import { ArrowLeft, Ticket, Calendar, Sparkles, MapPin, Flame } from 'lucide-react';

export default function EventsPage() {
  const { openPitchModal, events } = useStore();

  const handleScrollToTickets = () => {
    const el = document.getElementById('ticket-booking-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-fade-in space-y-16">
      
      {/* Top Portal Breadcrumb & Fast Actions */}
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
              Live Events, Festival Tickets & Performance Pitching
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleScrollToTickets}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <Ticket className="w-3.5 h-3.5 text-charcoal-950" />
            <span>🎟️ Event Status & Waitlist (TBA)</span>
          </button>

          {events[0] && (
            <button
              onClick={() => openPitchModal(events[0])}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-gold-300 hover:text-white bg-charcoal-800 border border-gold-500/30 hover:border-gold-500/60 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Pitch for 4 Open Slots</span>
            </button>
          )}
        </div>
      </div>

      {/* 1. UPCOMING EVENTS & PERFORMANCE PITCHING (Royal Rave Headline Slots) */}
      <EventsPitching />

      {/* 2. OFFICIAL ROYAL RAVE FESTIVAL TICKET BOOKING SECTION */}
      <TicketBookingSection />

      {/* 3. OFFICIAL EVENT CINEMA REELS (Kalakuta Movement & Downtown Fest) */}
      <EventVideoReel />

      {/* 4. COMPACT LIVE DOCUMENTARY SLIDESHOW */}
      <EventSlideshow />

      {/* 5. CROWD & ARTIST GALLERY */}
      <EventGallery />

      {/* 6. NATIVE APPS BANNER */}
      <NativeAppsBanner />

    </div>
  );
}
