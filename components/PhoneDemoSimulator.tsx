'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  UploadCloud, 
  Copy, 
  Check, 
  CheckCircle2, 
  Banknote, 
  ArrowRight, 
  ShieldCheck, 
  Building, 
  Smartphone,
  Radio,
  RadioTower
} from 'lucide-react';

export default function PhoneDemoSimulator() {
  const { addToast } = useStore();
  const [copiedBank, setCopiedBank] = useState(false);
  const [selectedTip, setSelectedTip] = useState(2500);
  const [hasSentTip, setHasSentTip] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(78);

  const handleCopyAccount = () => {
    setCopiedBank(true);
    navigator.clipboard?.writeText('9902441708');
    addToast('Account Copied!', '9902 4417 08 (Wema / Kuda Bank - DOWNTOWN / ARTIST) copied.', 'gold');
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const handleSimulateTip = () => {
    setHasSentTip(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FF9F1C', '#FFD166', '#FFFFFF', '#10B981'],
      });
    } catch (e) {}

    addToast(
      'Patronage Confirmed!',
      `₦${selectedTip.toLocaleString()} received via instant bank transfer! Added to artist live balance.`,
      'gold'
    );
    setTimeout(() => setHasSentTip(false), 3500);
  };

  return (
    <section className="my-20">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
          <Smartphone className="w-3.5 h-3.5 text-gold-400" />
          <span>THE DOWNTOWN INTERFACE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Frictionless For You. Effortless For Fans.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2">
          Your portal: upload master audio in seconds. Your fan's view: direct bank transfer patronage in 2 taps.
        </p>
      </div>

      {/* Two Phone Screens Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
        
        {/* PHONE 1: ARTIST TERMINAL */}
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-md rounded-3xl sm:rounded-[40px] bg-charcoal-950 p-3.5 sm:p-4 border-2 sm:border-4 border-charcoal-800 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
            {/* Camera island */}
            <div className="w-28 sm:w-32 h-3.5 sm:h-4 bg-charcoal-900 rounded-full mx-auto mb-3 sm:mb-4" />

            <div className="bg-charcoal-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-white/5 space-y-4">
              
              {/* Creator Top Bar */}
              <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold border-b border-white/5 pb-3">
                <span className="hover:text-white cursor-pointer">Discard</span>
                <span className="text-sm font-black text-white flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5 text-gold-400" />
                  <span>Downtown Node</span>
                </span>
                <span className="text-gold-400 font-bold hover:text-gold-300 cursor-pointer">Drafts</span>
              </div>

              {/* Upload Card */}
              <div className="p-3.5 rounded-2xl bg-charcoal-800/80 border border-white/5 space-y-2.5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 font-mono text-[10px] font-bold">
                    WAV
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-xs font-bold text-white truncate">
                      Nirati_Dagwi_x_DK_FUR_SURE_master.wav
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      44.1 kHz • 24-bit Lossless Studio Master
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-charcoal-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold-500 to-amber-400 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>Encoding spectral wave</span>
                  <span className="text-gold-400 font-bold">{uploadProgress}%</span>
                </div>
              </div>

              {/* Title Input Mock */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Track Title & Release
                </label>
                <div className="py-2.5 px-3 rounded-xl bg-charcoal-800 text-xs font-bold text-white border border-white/10 truncate">
                  FUR SURE — Nirati Dagwi x DK (ATWN EP)
                </div>
              </div>

              {/* Link Slug Field */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  Universal Fan Direct Link
                </label>
                <div className="py-2.5 px-3 rounded-xl bg-charcoal-800 text-[11px] font-mono text-gold-400 border border-white/10 truncate">
                  downtownradio.live/atwn/fur-sure
                </div>
              </div>

              {/* Publish Action */}
              <button
                onClick={() => {
                  setUploadProgress(100);
                  addToast('Track Live!', 'FUR SURE by Nirati Dagwi x DK published to Downtown Radio web feed.', 'gold');
                }}
                className="w-full py-3 rounded-xl font-bold text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95"
              >
                Publish Live to Downtown Network
              </button>
            </div>
          </div>

          <div className="mt-4 text-center max-w-xs">
            <h4 className="text-sm font-bold text-white">Artist Terminal</h4>
            <p className="text-xs text-zinc-400 mt-1">
              Direct upload with real byte processing. Close the browser tab or switch apps and background ingestion persists.
            </p>
          </div>
        </div>

        {/* PHONE 2: FAN PATRONAGE DOCK */}
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-md rounded-3xl sm:rounded-[40px] bg-charcoal-950 p-3.5 sm:p-4 border-2 sm:border-4 border-gold-500/40 shadow-gold-glow-lg relative overflow-hidden">
            {/* Camera island */}
            <div className="w-28 sm:w-32 h-3.5 sm:h-4 bg-charcoal-900 rounded-full mx-auto mb-3 sm:mb-4" />

            <div className="bg-[#0F1217] text-zinc-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-gold-500/30 space-y-4">
              
              {/* Sheet Drag Handle */}
              <div className="w-12 h-1 bg-zinc-700 rounded-full mx-auto" />

              {/* Header */}
              <div className="text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 block mb-0.5">
                  DIRECT ARTIST PATRONAGE
                </span>
                <h3 className="text-lg font-black text-white">
                  Back DK & Nirati Dagwi
                </h3>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  100% of your gift reaches the creator's Nigerian bank. Zero sign-up required.
                </p>
              </div>

              {/* Quick Amount Chips */}
              <div className="grid grid-cols-3 gap-2">
                {[1000, 2500, 5000].map(amt => {
                  const isSelected = selectedTip === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedTip(amt)}
                      className={`py-2 px-1 rounded-xl text-xs font-bold transition-all border ${
                        isSelected
                          ? 'bg-gold-500/20 text-gold-300 border-gold-500 ring-2 ring-gold-500/40'
                          : 'bg-charcoal-800 text-zinc-300 border-transparent hover:bg-charcoal-700'
                      }`}
                    >
                      <div>₦{amt.toLocaleString()}</div>
                      {amt === 2500 && (
                        <span className="text-[8px] font-black uppercase tracking-wider text-gold-400 block">
                          RECOMMENDED
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bank Transfer Selection Card */}
              <div className="p-3.5 rounded-2xl bg-charcoal-900 border border-gold-500/40 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 rounded-lg bg-gold-gradient text-charcoal-950 font-bold text-[10px]">
                      ⇄
                    </div>
                    <div>
                      <div className="font-bold text-white">Instant Bank Transfer</div>
                      <div className="text-[10px] text-gold-400 font-medium">Fast settlement • No card fees</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="p-3 rounded-xl bg-charcoal-950 border border-white/5 text-center space-y-1">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                    Transfer ₦{selectedTip.toLocaleString()} to:
                  </span>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-base font-black font-mono text-gold-400 tracking-wider">
                      9902 4417 08
                    </span>
                    <button
                      onClick={handleCopyAccount}
                      className="px-2 py-0.5 rounded-md bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 text-[10px] font-bold text-zinc-300 flex items-center gap-1 transition-colors"
                    >
                      {copiedBank ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedBank ? 'Copied' : 'COPY'}</span>
                    </button>
                  </div>
                  <span className="text-[10px] text-zinc-400 block">
                    Wema Bank / Kuda • DOWNTOWN / DK x NIRATI DAGWI
                  </span>
                </div>
              </div>

              {/* Big Action Button */}
              <button
                onClick={handleSimulateTip}
                className="w-full py-3.5 rounded-xl font-black text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-1.5"
              >
                {hasSentTip ? (
                  <>
                    <Check className="w-4 h-4 text-charcoal-950" />
                    <span>Patronage Delivered!</span>
                  </>
                ) : (
                  <>
                    <Banknote className="w-4 h-4 text-charcoal-950" />
                    <span>I've Transferred ₦{selectedTip.toLocaleString()}</span>
                  </>
                )}
              </button>

            </div>
          </div>

          <div className="mt-4 text-center max-w-xs">
            <h4 className="text-sm font-bold text-white">Direct Fan Web Player</h4>
            <p className="text-xs text-zinc-400 mt-1">
              Supports instant Nigerian bank transfer, USSD, debit cards, and Apple Pay abroad. Zero password requirements.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
