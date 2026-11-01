'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  UploadCloud, 
  Share2, 
  Banknote, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Heart, 
  CheckCircle2, 
  Sparkles,
  QrCode,
  Radio,
  Zap,
  Globe2
} from 'lucide-react';

export default function ThreeStepsGuide() {
  const { addToast, setOnboardingModalOpen, setActiveTab, setUserRole, openTippingModal } = useStore();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    setCopied(true);
    navigator.clipboard?.writeText('https://downtownradio.live/ife/midnight-rooftop');
    addToast('Direct Link Copied!', 'Universal playback & direct tip URL copied to clipboard.', 'gold');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="my-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
          <Zap className="w-3.5 h-3.5 text-gold-400" />
          <span>THE DOWNTOWN BLUEPRINT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          From Studio Bounce to Fan Naira in 3 Moves.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2">
          Engineered from scratch for African independent creators. Zero distributors taking cuts, zero payout delays.
        </p>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* STEP 01 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-charcoal-850/90 border border-white/5 hover:border-gold-500/40 transition-all flex flex-col justify-between shadow-xl group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold text-gold-400">01 / DROP MASTER</span>
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center">
                <UploadCloud className="w-4 h-4" />
              </div>
            </div>

            {/* Interactive File Upload Simulation Card */}
            <div className="p-4 rounded-2xl bg-charcoal-900 border border-white/10 mb-6 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 font-mono text-[10px] font-bold">
                  WAV
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-xs font-bold text-white truncate">
                    ife-rooftop-session-master.wav
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    42.8 MB • Lossless Audio Engine
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="w-full h-1.5 bg-charcoal-800 rounded-full overflow-hidden">
                  <div className="w-[84%] h-full bg-gradient-to-r from-gold-500 to-amber-400 rounded-full animate-pulse" />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>Downtown Audio Node</span>
                  <span className="text-gold-400 font-bold">84%</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-black text-white mb-2">
              Drop your raw master
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Upload uncompressed audio directly from your phone voice notes or studio DAW. Instant spectral processing with zero quality compression.
            </p>

            <button
              onClick={() => {
                setUserRole('artist');
                setActiveTab('artist-dashboard');
                setOnboardingModalOpen(true);
              }}
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 border border-white/5 text-xs font-semibold text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <UploadCloud className="w-3.5 h-3.5 text-gold-400" />
              <span>Upload Master Audio</span>
            </button>
          </div>
        </div>

        {/* STEP 02 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-charcoal-850/90 border border-white/5 hover:border-gold-500/40 transition-all flex flex-col justify-between shadow-xl group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold text-gold-400">02 / SMART LINK</span>
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Link Sharing Simulation Card */}
            <div className="p-4 rounded-2xl bg-charcoal-900 border border-white/10 mb-6 space-y-3">
              <div className="flex items-center space-x-2 p-2 rounded-xl bg-charcoal-800/80 border border-white/5">
                <span className="text-[11px] font-mono text-gold-300 truncate flex-1">
                  downtownradio.live/ife/midnight
                </span>
                <button
                  onClick={handleCopyLink}
                  className="px-2.5 py-1 rounded-lg bg-gold-gradient text-[10px] font-bold text-charcoal-950 transition-colors flex items-center gap-1 shadow-gold-glow"
                >
                  {copied ? <Check className="w-3 h-3 text-charcoal-950" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'COPY'}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Share2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Broadcast Everywhere</span>
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="p-2.5 rounded-xl bg-charcoal-800 border border-white/10 text-zinc-400 hover:text-white"
                  title="Generate QR code for show posters"
                >
                  <QrCode className="w-4 h-4 text-gold-400" />
                </button>
              </div>
            </div>

            <h3 className="text-xl font-black text-white mb-2">
              Amplify one universal link
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Drop it on WhatsApp groups, your Instagram bio, or on printed stickers at Red Horn. One link plays instantly in any mobile browser with zero app installation.
            </p>
          </div>
        </div>

        {/* STEP 03 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-charcoal-850/90 border border-white/5 hover:border-gold-500/40 transition-all flex flex-col justify-between shadow-xl group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold text-gold-400">03 / DIRECT NAIRA</span>
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center">
                <Banknote className="w-4 h-4" />
              </div>
            </div>

            {/* Live Tipping Feed Simulation */}
            <div className="p-3.5 rounded-2xl bg-charcoal-900 border border-white/10 mb-6 space-y-2">
              <div className="flex items-center justify-between p-2 rounded-xl bg-charcoal-800/60 border border-white/5 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-[10px]">
                    ✦
                  </div>
                  <div>
                    <div className="font-bold text-white text-[11px]">Tunde in Ife</div>
                    <div className="text-[9px] text-zinc-400">4m ago • Instant Bank Transfer</div>
                  </div>
                </div>
                <span className="font-mono font-bold text-gold-400">+₦5,000</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-charcoal-800/60 border border-white/5 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                    ★
                  </div>
                  <div>
                    <div className="font-bold text-white text-[11px]">Diaspora Fan in London</div>
                    <div className="text-[9px] text-zinc-400">22m ago • Apple Pay (£10)</div>
                  </div>
                </div>
                <span className="font-mono font-bold text-emerald-400">+₦19,500</span>
              </div>
            </div>

            <h3 className="text-xl font-black text-white mb-2">
              Direct fan payouts in Naira
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Supporters back you via instant Nigerian bank transfer, USSD, debit card, or global Apple Pay. Up to 100% of every Naira lands directly into your bank.
            </p>

            <button
              onClick={() => openTippingModal()}
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 border border-white/5 text-xs font-semibold text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Banknote className="w-3.5 h-3.5 text-gold-400" />
              <span>Test Fan Naira Payout</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
