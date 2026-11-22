'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import confetti from 'canvas-confetti';
import { 
  Ticket, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  QrCode, 
  CreditCard, 
  Flame, 
  Users, 
  Download, 
  Share2,
  CheckCircle2,
  Zap,
  ArrowRight
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
  const [selectedTier, setSelectedTier] = useState<TicketTier>(TICKET_TIERS[1]);
  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'flutterwave' | 'bank-transfer'>('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookedTicket, setBookedTicket] = useState<{
    ticketId: string;
    tier: TicketTier;
    qty: number;
    total: number;
    name: string;
    date: string;
  } | null>(null);

  // Live countdown to Saturday, Nov 14, 2026 21:00:00
  const [timeLeft, setTimeLeft] = useState({ days: 16, hours: 18, mins: 42, secs: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const totalAmount = selectedTier.price * quantity;

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      addToast('Missing Details', 'Please provide your name and email to issue tickets.', 'info');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const ticketId = `RR-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookedTicket({
        ticketId,
        tier: selectedTier,
        qty: quantity,
        total: totalAmount,
        name: fullName,
        date: 'Saturday, 14th November 2026',
      });

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF9F1C', '#FFD166', '#FFFFFF', '#E63946'],
        });
      } catch (err) {}

      addToast(
        'Ticket Confirmed!',
        `Your pass for Royal Rave Festival (#${ticketId}) has been generated. Confirmation sent to ${email}.`,
        'gold'
      );
    }, 1200);
  };

  return (
    <section id="ticket-booking-section" className="my-16 scroll-mt-24">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold uppercase tracking-wider text-gold-400 mb-3 shadow-gold-glow">
          <Ticket className="w-4 h-4 text-gold-400" />
          <span>OFFICIAL FESTIVAL FLYER • STATUS: TO BE ANNOUNCED (TBA)</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Royal Rave Festival
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 mt-2">
          Status: To Be Announced (TBA) • Priority Pass & Early Notification
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Flier Showcase & Event Details (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Festival Flier Card with Status TBA */}
          <div className="rounded-3xl overflow-hidden border-2 border-gold-500/50 shadow-gold-glow-lg bg-charcoal-900 relative group">
            
            {/* The Official Poster Flyer */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal-950">
              <img
                src="/images/royal-rave-poster.jpg"
                alt="Royal Rave Festival Official Flyer — Status: To Be Announced (TBA)"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Verified Badge Overlay */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-charcoal-950/85 backdrop-blur-md border border-gold-500/40 text-[11px] font-black uppercase tracking-wider text-gold-400 flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>STATUS: TO BE ANNOUNCED (TBA)</span>
              </div>
            </div>

            {/* Event Summary Bar below poster */}
            <div className="p-5 bg-charcoal-850 border-t border-gold-500/30 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-gold-400 font-bold">
                  <Calendar className="w-4 h-4" />
                  <span>Date: To Be Announced (TBA)</span>
                </div>
                <div className="flex items-center space-x-1.5 text-zinc-300 font-mono text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Time: TBA</span>
                </div>
              </div>

              {/* Status Update Card */}
              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400 uppercase font-bold text-[10px]">EVENT STATUS</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-400 font-bold text-[10px] border border-gold-500/30">
                    TO BE ANNOUNCED (TBA)
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  We are no longer hosting Royal Rave. The official flyer is locked in and future updates will be announced directly on this page.
                </p>
              </div>

            </div>

          </div>

          {/* Quick Notice */}
          <div className="p-4 rounded-2xl bg-charcoal-850/70 border border-white/5 text-xs text-zinc-400 space-y-1">
            <div className="flex items-center gap-1.5 text-white font-bold">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Priority Notification & Waitlist Guarantee</span>
            </div>
            <p>
              Registering below locks your priority tier on the announcement waitlist. You will receive private SMS and email notices the moment ticket booking goes live.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: Ticket Tier Selection & Booking Checkout (7 Cols) */}
        <div className="lg:col-span-7">
          
          {bookedTicket ? (
            /* BOOKING SUCCESS VOUCHER PASS */
            <div className="p-6 sm:p-8 rounded-3xl bg-charcoal-850 border-2 border-emerald-500/50 shadow-2xl space-y-6 animate-fade-in text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                      PAYMENT CONFIRMED • PASS ISSUED
                    </span>
                    <h3 className="text-xl font-black text-white">
                      Royal Rave Festival Pass
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40">
                  {bookedTicket.ticketId}
                </span>
              </div>

              {/* Pass Visual Card */}
              <div className="p-6 rounded-2xl bg-charcoal-900 border border-gold-500/40 relative overflow-hidden space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-xs font-mono text-gold-400 uppercase font-bold">Guest Attendee</div>
                    <div className="text-lg font-black text-white">{bookedTicket.name}</div>
                    <div className="text-xs text-zinc-400">{bookedTicket.tier.name} (x{bookedTicket.qty})</div>
                  </div>

                  {/* QR Code Mock */}
                  <div className="p-3 bg-white rounded-2xl flex flex-col items-center shadow-lg">
                    <QrCode className="w-20 h-20 text-charcoal-950" />
                    <span className="text-[8px] font-mono text-zinc-900 font-bold mt-1">
                      SCAN AT GATE
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-mono">Date & Time</span>
                    <strong className="text-zinc-200">To Be Announced (TBA)</strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-mono">Event Status</span>
                    <strong className="text-gold-400">To Be Announced (TBA)</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => addToast('Pass Downloaded', 'Digital ticket saved to your device.', 'gold')}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl font-bold text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-charcoal-950" />
                  <span>Download Pass (PDF)</span>
                </button>
                <button
                  onClick={() => setBookedTicket(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-xs text-zinc-300 bg-charcoal-800 hover:bg-charcoal-700 border border-white/10"
                >
                  Register Another Pass
                </button>
              </div>
            </div>
          ) : (
            /* TICKET PURCHASE FORM */
            <div className="p-5 sm:p-8 rounded-3xl bg-charcoal-850 border border-gold-500/30 shadow-2xl space-y-6 w-full">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Reserve Festival Priority Pass
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Status: To Be Announced (TBA). Lock your priority tier for early notification and guaranteed entry.
                </p>
              </div>

              {/* Tier Cards Selector */}
              <div className="space-y-3 w-full">
                {TICKET_TIERS.map(tier => {
                  const isSelected = selectedTier.id === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer relative w-full ${
                        isSelected
                          ? 'bg-charcoal-900 border-gold-500 shadow-gold-glow'
                          : 'bg-charcoal-900/60 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm sm:text-base font-black text-white">
                              {tier.name}
                            </span>
                            {tier.badge && (
                              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-gold-500 text-charcoal-950">
                                {tier.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400 max-w-md">
                            {tier.description}
                          </p>
                        </div>

                        <div className="text-left sm:text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start gap-1 pt-1 sm:pt-0 border-t sm:border-t-0 border-white/5">
                          <div className="text-base sm:text-xl font-black text-gold-400 font-mono">
                            ₦{tier.price.toLocaleString()}
                          </div>
                          <span className="text-[10px] text-zinc-500 block">per pass</span>
                        </div>
                      </div>

                      {/* Perks */}
                      <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-x-4 gap-y-1">
                        {tier.perks.map((perk, idx) => (
                          <div key={idx} className="flex items-center space-x-1.5 text-[11px] text-zinc-300">
                            <Check className="w-3 h-3 text-gold-400 flex-shrink-0" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-charcoal-900 border border-white/5">
                <div>
                  <span className="text-xs font-bold text-white block">Number of Passes</span>
                  <span className="text-[11px] text-zinc-400">Max 6 per transaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white font-bold flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="text-base font-bold font-mono text-gold-400 w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.min(6, quantity + 1))}
                    className="w-8 h-8 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white font-bold flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Attendee Info Form */}
              <form onSubmit={handleCompleteBooking} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="e.g. Oluwaseun Adeleke"
                      className="w-full px-4 py-2.5 rounded-xl bg-charcoal-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                      Email Address (For QR Delivery) *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="oluwaseun@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-charcoal-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    WhatsApp Phone Number (Optional SMS Delivery)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+234 801 234 5678"
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                {/* Payment Gateway Toggle */}
                <div className="space-y-2 pt-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    Payment Gateway
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paystack')}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all border text-center ${
                        paymentMethod === 'paystack'
                          ? 'bg-gold-500/15 border-gold-500 text-gold-400'
                          : 'bg-charcoal-900 border-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Paystack
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('flutterwave')}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all border text-center ${
                        paymentMethod === 'flutterwave'
                          ? 'bg-gold-500/15 border-gold-500 text-gold-400'
                          : 'bg-charcoal-900 border-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Flutterwave
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank-transfer')}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all border text-center ${
                        paymentMethod === 'bank-transfer'
                          ? 'bg-gold-500/15 border-gold-500 text-gold-400'
                          : 'bg-charcoal-900 border-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      Direct Bank
                    </button>
                  </div>
                </div>

                {/* Subtotal & Checkout Button */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">
                      Total ({quantity}x {selectedTier.name}):
                    </span>
                    <span className="text-xl font-black text-gold-400 font-mono">
                      ₦{totalAmount.toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 rounded-2xl font-black text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span>Securing Your Passes...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 fill-charcoal-950" />
                        <span>Reserve Priority Pass (₦{totalAmount.toLocaleString()})</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}
