'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { isEventVerified, getEventDateLabel, getEventLocationLabel, getEventFlyerUrl } from '../src/config/site';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Music,
  Share2,
  Ticket,
  BellRing,
  FileQuestion,
  Radio
} from 'lucide-react';

export default function EventsPitching() {
  const { events, openPitchModal, pitches } = useStore();
  const [filter, setFilter] = useState<'all' | 'tbe' | 'verified'>('all');

  const filteredEvents = events.filter(event => {
    const verified = isEventVerified(event);
    if (filter === 'tbe') return !verified;
    if (filter === 'verified') return verified;
    return true;
  });

  return (
    <div className="space-y-8">
      
      {/* SECTION HEADER & TABS */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-bold uppercase tracking-wider text-gold-400 mb-2 font-mono">
            <Radio className="w-3.5 h-3.5 text-gold-400" />
            <span>DOWNTOWN SHOWCASES • PERFORMANCE PITCHING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Live Activations & Stage Pitches
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Pitch your unreleased music directly to Downtown Radio curators for upcoming showcase slots. Event dates, locations, and official flyers are currently <strong className="text-gold-400 font-semibold">TBE (To Be Announced)</strong>.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex items-center p-1 rounded-2xl bg-charcoal-800/80 border border-white/5 space-x-1 self-start sm:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Showcases
          </button>
          <button
            onClick={() => setFilter('tbe')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === 'tbe'
                ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            TBE Events
          </button>
        </div>
      </div>

      {/* EVENT CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredEvents.map(event => {
          const verified = isEventVerified(event);
          const flyer = getEventFlyerUrl(event);
          const hasPitched = pitches.some(p => p.eventId === event.id);

          return (
            <div
              key={event.id}
              className="group relative bg-charcoal-850/95 rounded-3xl border border-white/5 hover:border-gold-500/40 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between w-full"
            >
              {/* Event Visual Header: When verified, render flyer; when unverified (TBE), omit flyer image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-charcoal-900">
                {verified && flyer ? (
                  <img
                    src={flyer}
                    alt={event.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  /* TBE Broadcast Visual Banner (Omit unverified flyers) */
                  <div className="w-full h-full bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 p-6 flex flex-col justify-between relative">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
                    
                    {/* Top Row Badges */}
                    <div className="flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gold-500 text-charcoal-950 shadow-gold-glow">
                        STATUS: TBE
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-charcoal-900/85 text-zinc-200 border border-white/10 backdrop-blur-md flex items-center gap-1.5 font-mono">
                        <Users className="w-3.5 h-3.5 text-gold-400" />
                        <span>{event.capacity}</span>
                      </span>
                    </div>

                    {/* Center Icon Lockup */}
                    <div className="flex items-center gap-3 z-10">
                      <div className="w-12 h-12 rounded-2xl bg-charcoal-950 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-md">
                        <FileQuestion className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest block">
                          OFFICIAL FLYER & LOCATION: TBE
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    {/* Bottom Metadata Pill */}
                    <div className="z-10 text-xs font-mono text-zinc-400 flex items-center gap-3">
                      <span className="text-gold-300 font-bold">{getEventDateLabel(event)}</span>
                      <span>•</span>
                      <span className="text-zinc-400">{getEventLocationLabel(event)}</span>
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Event Body Info */}
              <div className="p-5 sm:p-7 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between w-full">
                
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300 font-medium pb-4 border-b border-white/5 font-mono">
                    <div className="flex items-center gap-1.5 text-gold-400 font-bold">
                      <Calendar className="w-4 h-4 text-gold-400" />
                      <span>{getEventDateLabel(event)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <MapPin className="w-4 h-4 text-gold-400" />
                      <span>{getEventLocationLabel(event)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <Flame className="w-4 h-4" />
                      <span>Flyer: TBE</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed my-4">
                    {event.description}
                  </p>

                  {/* Curated Perks */}
                  <div className="space-y-2 mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
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

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider block font-mono">
                      Showcase Slots:
                    </span>
                    <span className="text-sm font-black text-gold-400 font-mono">
                      {event.slotsAvailable} open slots remaining
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
                      <BellRing className="w-4 h-4 text-gold-400" />
                      <span>Get TBE Alert</span>
                    </button>

                    <button
                      onClick={() => openPitchModal(event)}
                      className="flex-1 sm:flex-initial px-5 py-3 rounded-xl font-black text-xs sm:text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-charcoal-950" />
                      <span>{hasPitched ? 'Update Pitch' : 'Pitch to Perform'}</span>
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
