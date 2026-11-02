'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Sparkles, 
  Mic2, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Award,
  Ticket
} from 'lucide-react';

export default function EventsPitching() {
  const { events, openPitchModal, pitches } = useStore();
  const [filterCity, setFilterCity] = useState<string>('All');

  const cities = ['All', 'Red Horn, Ife', 'Ikeja, Lagos', 'Victoria Island'];

  const filteredEvents = events.filter(e => {
    if (filterCity === 'All') return true;
    if (filterCity === 'Red Horn, Ife') return e.city.toLowerCase().includes('ife') || e.venue.toLowerCase().includes('red horn');
    return e.city.toLowerCase().includes(filterCity.toLowerCase());
  });

  return (
    <div className="space-y-8 my-8">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
            <Mic2 className="w-3.5 h-3.5" />
            <span>PERFORM AT OUR EVENTS</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Upcoming Gatherings & Performance Pitching
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl mt-1">
            We don't book conventional lineups. We curate intimate stages for independent sonic pioneers. Pitch your unreleased tracks and secure verified festival & rooftop slots.
          </p>
        </div>

        {/* City Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {cities.map(c => (
            <button
              key={c}
              onClick={() => setFilterCity(c)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                filterCity === c
                  ? 'bg-gold-500 text-charcoal-950 border-gold-400 shadow-gold-glow'
                  : 'bg-charcoal-850 text-zinc-300 border-white/5 hover:border-white/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* EVENT CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredEvents.map(event => {
          const hasPitched = pitches.some(p => p.eventId === event.id);

          return (
            <div
              key={event.id}
              className="group relative bg-charcoal-850/95 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-gold-500/40 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Event Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-charcoal-800">
                <img
                  src={event.bannerUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gold-500 text-charcoal-950 shadow-gold-glow">
                    {event.status}
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-charcoal-900/85 text-zinc-200 border border-white/10 backdrop-blur-md flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span>{event.capacity}</span>
                  </span>
                </div>

                {/* Venue & City overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gold-400 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{event.venue} • {event.city}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Event Body Info */}
              <div className="p-4 sm:p-7 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between">
                
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300 font-medium pb-4 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gold-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gold-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <Flame className="w-4 h-4" />
                      <span>Pitch Deadline: {event.pitchDeadline}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed my-4">
                    {event.description}
                  </p>

                  {/* Curated Perks */}
                  <div className="space-y-2 mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      Perks for Selected Performers:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {event.perks.slice(0, 4).map((perk, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Pitch Action */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">
                      Slots Available:
                    </span>
                    <span className="text-sm font-black text-gold-400">
                      {event.slotsAvailable} slots remaining
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        const el = document.getElementById('ticket-booking-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 sm:flex-initial px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-gold-400 bg-charcoal-800 hover:bg-charcoal-700 border border-gold-500/40 hover:border-gold-500 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Ticket className="w-4 h-4 text-gold-400" />
                      <span>Buy Tickets</span>
                    </button>

                    <button
                      onClick={() => openPitchModal(event)}
                      className="flex-1 sm:flex-initial px-5 py-3 rounded-xl font-black text-xs sm:text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-charcoal-950" />
                      <span>Pitch to Perform</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
