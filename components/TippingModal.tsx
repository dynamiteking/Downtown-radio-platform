'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  Banknote, 
  CreditCard, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Check, 
  Lock,
  ArrowRight,
  Send
} from 'lucide-react';

export default function TippingModal() {
  const { 
    tippingModalOpen, 
    closeTippingModal, 
    tippingTrack, 
    handleSendTip 
  } = useStore();

  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [gateway, setGateway] = useState<'paystack' | 'flutterwave'>('paystack');
  const [fanName, setFanName] = useState<string>('Tobi A.');
  const [fanEmail, setFanEmail] = useState<string>('tobi@downtownradio.live');
  const [message, setMessage] = useState<string>('Heavy love from Lagos! That rooftop acoustic rhythm is pure magic 🔥');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  if (!tippingModalOpen || !tippingTrack) return null;

  const quickAmounts = [500, 1000, 5000, 10000];

  const effectiveAmount = isCustom ? (parseInt(customAmount, 10) || 0) : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (effectiveAmount < 100) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      handleSendTip(effectiveAmount, fanName, fanEmail, message, gateway);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-charcoal-900 border border-gold-500/30 rounded-3xl shadow-gold-glow-lg overflow-hidden text-white">
        
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-300" />

        {/* Close Button */}
        <button
          onClick={closeTippingModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-charcoal-800 text-zinc-400 hover:text-white hover:bg-charcoal-700 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          
          {/* Header Track Context */}
          <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/10">
            <img
              src={tippingTrack.coverUrl}
              alt={tippingTrack.title}
              className="w-16 h-16 rounded-2xl object-cover border border-gold-500/30 shadow-md"
            />
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/15 text-[11px] font-bold text-gold-400 mb-1 border border-gold-500/30">
                <Banknote className="w-3.5 h-3.5 text-gold-400" />
                <span>DIRECT FAN-TO-ARTIST TIP (₦)</span>
              </div>
              <h3 className="text-xl font-black text-white leading-tight">
                {tippingTrack.title}
              </h3>
              <p className="text-sm text-zinc-400 font-medium">
                Supporting <span className="text-gold-400 font-semibold">{tippingTrack.artist}</span>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Quick Amount Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                Select Tip Amount (₦ Naira)
              </label>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-3">
                {quickAmounts.map(amt => {
                  const isSelected = !isCustom && selectedAmount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setIsCustom(false);
                      }}
                      className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                        isSelected
                          ? 'bg-gold-500 text-charcoal-950 border-gold-400 shadow-gold-glow'
                          : 'bg-charcoal-800 text-zinc-300 border-white/5 hover:border-white/20 hover:bg-charcoal-700'
                      }`}
                    >
                      ₦{amt.toLocaleString()}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount Field */}
              <div className="relative">
                <input
                  type="number"
                  placeholder="Or enter custom amount in ₦ (e.g. 25,000)"
                  value={customAmount}
                  onChange={e => {
                    setCustomAmount(e.target.value);
                    setIsCustom(true);
                  }}
                  className={`w-full py-2.5 px-4 pr-12 rounded-xl bg-charcoal-800 border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                    isCustom && customAmount
                      ? 'border-gold-500 ring-1 ring-gold-500'
                      : 'border-white/10 focus:border-gold-500'
                  }`}
                  min="100"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-gold-400 font-bold">
                  NGN
                </span>
              </div>
            </div>

            {/* Note to the Artist */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Personal Note / Shoutout to Artist
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Leave words of encouragement or song feedback..."
                className="w-full py-2.5 px-4 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
              />
            </div>

            {/* Supporter Details */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Your Name / Handle
                </label>
                <input
                  type="text"
                  value={fanName}
                  onChange={e => setFanName(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-charcoal-800 border border-white/10 text-xs text-white focus:outline-none focus:border-gold-500"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Email (Receipt)
                </label>
                <input
                  type="email"
                  value={fanEmail}
                  onChange={e => setFanEmail(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-charcoal-800 border border-white/10 text-xs text-white focus:outline-none focus:border-gold-500"
                  required
                />
              </div>
            </div>

            {/* Payment Gateway Options: Paystack / Flutterwave */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Choose Secure Payment Channel
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGateway('paystack')}
                  className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    gateway === 'paystack'
                      ? 'bg-charcoal-800 border-gold-500 ring-1 ring-gold-500/50'
                      : 'bg-charcoal-800/50 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      P
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Paystack</div>
                      <div className="text-[10px] text-zinc-400">Card, Transfer, USSD</div>
                    </div>
                  </div>
                  {gateway === 'paystack' && <Check className="w-4 h-4 text-gold-400" />}
                </button>

                <button
                  type="button"
                  onClick={() => setGateway('flutterwave')}
                  className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    gateway === 'flutterwave'
                      ? 'bg-charcoal-800 border-gold-500 ring-1 ring-gold-500/50'
                      : 'bg-charcoal-800/50 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                      F
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Flutterwave</div>
                      <div className="text-[10px] text-zinc-400">Barter, Bank, Apple Pay</div>
                    </div>
                  </div>
                  {gateway === 'flutterwave' && <Check className="w-4 h-4 text-gold-400" />}
                </button>
              </div>
            </div>

            {/* Submission CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing || effectiveAmount < 100}
                className="w-full py-4 rounded-2xl font-black text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                    <span>Processing Secure Gateway...</span>
                  </div>
                ) : (
                  <>
                    <Banknote className="w-4 h-4 text-charcoal-900" />
                    <span>Tip Cash ₦{effectiveAmount.toLocaleString()} to {tippingTrack.artist}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% of tips route directly to artist verified bank accounts via Central Bank of Nigeria authorized switches.</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}
