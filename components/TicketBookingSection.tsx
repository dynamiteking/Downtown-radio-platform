'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import confetti from 'canvas-confetti';
import { siteConfig, isEventVerified } from '../src/config/site';
import { 
  Ticket, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  QrCode, 
  CreditCard, 
  Flame, 
  Users, 
  Download, 
  CheckCircle2,
  BellRing,
  MapPin,
  Send,
  Radio,
  FileQuestion
} from 'lucide-react';

interface TicketTier {
  id: string;
  name: string;
  price: number;
  badge?: string;
  description: string;
  perks: string[];
}

const TICKET_TIERS: TicketTier[] = [
  {
    id: 'general',
    name: 'General Rave Pass (Early Believer)',
    price: 3500,
    description: 'Full festival grounds access from dusk till dawn.',
    perks: [
      'Access to main rave floor (Dusk — Dawn)',
      'Complimentary LED festival wristband',
      'Lossless digital festival recording download',
    ],
  },
  {
    id: 'vip',
    name: 'VIP Palace Balcony',
    price: 8500,
    badge: 'MOST POPULAR',
    description: 'Elevated panoramic views over the main stage with fast-track entry and drinks.',
    perks: [
      'Express VIP queue priority bypass',
      'Elevated Palace Balcony stage view',
      '2 complimentary signature cocktail/drink tokens',
      'Exclusive Downtown Radio Royal Rave lanyard',
    ],
  },
  {
    id: 'royal-table',
    name: 'Royal Backstage Table (Crew of 4)',
    price: 45000,
    badge: 'LIMITED (5 TABLES)',
    description: 'Ultimate VIP booth with artist backstage lounge access and dedicated bottle service.',
    perks: [
      'Reserved private lounge table for 4 guests',
      'Premium bottle service & ice bucket',
      'Direct backstage greenroom lounge access',
      'Meet & chill with performing indie artists',
      'Downtown Radio limited edition merch box',
    ],
  },
];

export default function TicketBookingSection() {
  const { addToast } = useStore();
  const mainEvent = siteConfig.events[0];
  const isVerified = isEventVerified(mainEvent);

  // Form states for TBE Alert signup or Verified booking
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [selectedTier, setSelectedTier] = useState<TicketTier>(TICKET_TIERS[1]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Confirmed alert / ticket state
  const [alertRegistered, setAlertRegistered] = useState<{
    id: string;
    name: string;
    email: string;
    whatsapp: string;
    tier: string;
  } | null>(null);

  const handleRegisterTbeAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      addToast('Missing Details', 'Please provide your name and email for TBE alerts.', 'info');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const alertId = `TBE-${Math.floor(100000 + Math.random() * 900000)}`;
      setAlertRegistered({
        id: alertId,
        name: fullName,
        email: email,
        whatsapp: whatsapp || 'Not provided',
        tier: selectedTier.name,
      });

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF9F1C', '#FFD166', '#FFFFFF', '#10B981'],
        });
      } catch (err) {}

      addToast(
        'TBE Alert Locked In!',
        `You will receive immediate WhatsApp & Email alerts the moment official dates, locations, and flyers are announced.`,
        'gold'
      );
    }, 1000);
  };

  return (
    <section id="ticket-booking-section" className="my-16 scroll-mt-24">
      <div id="tbe-alert" className="scroll-mt-24" />
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold uppercase tracking-wider text-gold-400 mb-3 shadow-gold-glow">
          <BellRing className="w-4 h-4 text-gold-400" />
          <span>OFFICIAL EVENT STATUS: TBE (TO BE ANNOUNCED)</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {mainEvent.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 mt-2 font-normal">
          Date: TBE • Location: TBE • Flyer: TBE • Priority Notification Alert List
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: Event Status Card (NO UNVERIFIED FLYER IMAGE)  */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-gold-glow-lg bg-charcoal-900 relative">
            
            {/* When event is verified, render flyer; when unverified (TBE), render broadcast aesthetic card (NO FLYER) */}
            {isVerified && mainEvent.flyerUrl ? (
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal-950">
                <img
                  src={mainEvent.flyerUrl}
                  alt={`${mainEvent.title} Verified Flyer`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ) : (
              /* CLEAN BROADCAST CASSETTE ARCHIVE CARD — NO UNVERIFIED FLYERS */
              <div className="relative p-7 sm:p-8 bg-gradient-to-b from-charcoal-850 via-charcoal-900 to-charcoal-950 flex flex-col justify-between min-h-[360px] overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top Pill */}
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-gold-400" />
                    <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                      BROADCAST SHOWCASE
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gold-500 text-charcoal-950">
                    STATUS: TBE
                  </span>
                </div>

                {/* Center Visual Lockup */}
                <div className="my-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-charcoal-800 border-2 border-gold-500/40 mx-auto flex items-center justify-center text-gold-400 shadow-gold-glow">
                    <FileQuestion className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Official Flyer: TBE
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Per our critical verification protocol, event flyers, exact venues, and show dates are held as <strong className="text-gold-400 font-semibold">TBE (To Be Announced)</strong> until final palace & city permits are locked.
                  </p>
                </div>

                {/* Bottom TBE Metadata Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs font-mono">
                  <div className="bg-charcoal-800/60 p-2.5 rounded-xl border border-white/5">
                    <span className="text-zinc-500 block text-[10px] uppercase">EVENT DATE</span>
                    <strong className="text-gold-400 font-bold">DATE: TBE</strong>
                  </div>
                  <div className="bg-charcoal-800/60 p-2.5 rounded-xl border border-white/5">
                    <span className="text-zinc-500 block text-[10px] uppercase">EVENT LOCATION</span>
                    <strong className="text-gold-400 font-bold">LOCATION: TBE</strong>
                  </div>
                  <div className="bg-charcoal-800/60 p-2.5 rounded-xl border border-white/5">
                    <span className="text-zinc-500 block text-[10px] uppercase">OFFICIAL FLYER</span>
                    <strong className="text-zinc-300 font-bold">FLYER: TBE</strong>
                  </div>
                  <div className="bg-charcoal-800/60 p-2.5 rounded-xl border border-white/5">
                    <span className="text-zinc-500 block text-[10px] uppercase">SHOWCASE SLOTS</span>
                    <strong className="text-emerald-400 font-bold">4 OPEN SLOTS</strong>
                  </div>
                </div>

              </div>
            )}

            {/* Micro-Notice below status card */}
            <div className="p-4 bg-charcoal-850/90 border-t border-gold-500/20 text-[11px] text-zinc-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <span>
                Registering below locks your priority position for early ticket release and artist pitch drop announcements.
              </span>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: GET NOTIFIED (TBE ALERT) SIGNUP FORM        */}
        {/* ========================================================= */}
        <div className="lg:col-span-7">
          
          {alertRegistered ? (
            /* TBE ALERT CONFIRMATION PASS */
            <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-850 border-2 border-emerald-500/50 shadow-2xl space-y-6 animate-fade-in text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                      PRIORITY REGISTERED • TBE ALERT ACTIVE
                    </span>
                    <h3 className="text-xl font-black text-white">
                      Royal Rave Festival Showcase
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40">
                  #{alertRegistered.id}
                </span>
              </div>

              {/* Pass Visual Card */}
              <div className="p-6 rounded-2xl bg-charcoal-900 border border-gold-500/40 relative overflow-hidden space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-xs font-mono text-gold-400 uppercase font-bold">Registered Patron</div>
                    <div className="text-lg font-black text-white">{alertRegistered.name}</div>
                    <div className="text-xs text-zinc-400">{alertRegistered.email}</div>
                  </div>

                  {/* QR Code Mock */}
                  <div className="p-3 bg-white rounded-2xl flex flex-col items-center shadow-lg">
                    <QrCode className="w-16 h-16 text-charcoal-950" />
                    <span className="text-[8px] font-mono text-zinc-900 font-bold mt-1">
                      TBE PRIORITY
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-mono">Date & Time</span>
                    <strong className="text-gold-400">STATUS: TBE</strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-mono">Location & Flyer</span>
                    <strong className="text-gold-400">STATUS: TBE</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => addToast('Voucher Saved', 'Your TBE priority alert pass has been saved.', 'gold')}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl font-bold text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-charcoal-950" />
                  <span>Save Priority Pass (PDF)</span>
                </button>
                <button
                  onClick={() => setAlertRegistered(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-xs text-zinc-300 bg-charcoal-800 hover:bg-charcoal-700 border border-white/10"
                >
                  Register Another Attendee
                </button>
              </div>
            </div>
          ) : (
            /* GET NOTIFIED (TBE ALERT) SIGNUP FORM */
            <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-850 border border-gold-500/30 shadow-2xl space-y-6 w-full text-left">
              
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-[11px] font-bold text-gold-400 mb-2 font-mono">
                  <BellRing className="w-3.5 h-3.5" />
                  <span>EARLY ACCESS WAITLIST</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Get Notified (TBE Alert)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                  Lock in priority tier notification. The moment date, location, and official flyers are verified, you will receive private alerts via WhatsApp and Email before public release.
                </p>
              </div>

              <form onSubmit={handleRegisterTbeAlert} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 font-mono">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tunde Adeyemi"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 focus:border-gold-500 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tunde@downtownradio.live"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 focus:border-gold-500 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 font-mono">
                    WhatsApp Number (for instant drop alert)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +234 803 123 4567"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 focus:border-gold-500 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Notification Tier Preference */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 font-mono">
                    Preferred Tier (When Tickets Drop)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {TICKET_TIERS.map(tier => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setSelectedTier(tier)}
                        className={`p-3 rounded-xl text-left border transition-all text-xs ${
                          selectedTier.id === tier.id
                            ? 'bg-charcoal-900 border-gold-500 text-gold-300 shadow-sm'
                            : 'bg-charcoal-900/60 border-white/5 text-zinc-400 hover:border-white/20'
                        }`}
                      >
                        <div className="font-bold text-white truncate">{tier.name.split('(')[0]}</div>
                        <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Approx. ₦{tier.price.toLocaleString()}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 px-6 rounded-2xl font-black text-xs sm:text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <span>Locking in your alert...</span>
                    ) : (
                      <>
                        <BellRing className="w-4 h-4 text-charcoal-950" />
                        <span>Lock In My TBE Alert Notification</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-zinc-500 text-center font-mono pt-1">
                  🔒 Zero spam. Only 1 official drop alert sent when dates, locations & flyers are confirmed.
                </p>

              </form>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}
