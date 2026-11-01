'use client';

import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Smartphone, Mail } from 'lucide-react';

export default function NativeAppsBanner() {
  const { setOpenLetterOpen, openTippingModal, setActiveTab } = useStore();

  return (
    <section className="my-16 max-w-7xl mx-auto">
      {/* Container Card */}
      <div className="rounded-3xl bg-gradient-to-br from-charcoal-850 via-charcoal-900 to-charcoal-950 border border-gold-500/30 p-8 sm:p-12 shadow-gold-glow relative overflow-hidden">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Browser First CTA */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Start now in your browser.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Downtown Radio is live today as a web app — add it to your home screen and it behaves like any other app on your phone. The native apps come later.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openTippingModal()}
                className="px-8 py-3.5 rounded-2xl font-black text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Native Apps Coming Soon */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest font-bold text-zinc-400">
              NATIVE APPS — COMING SOON
            </div>

            {/* Apple App Store Pill */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-charcoal-800/90 border border-white/10 hover:border-gold-500/30 transition-all">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-charcoal-900 border border-white/10 flex items-center justify-center text-white">
                  {/* Apple Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.56-.69.96-1.64.84-2.61-.85.04-1.85.57-2.43 1.26-.52.6-.97 1.57-.84 2.5.94.07 1.88-.47 2.43-1.15z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Download on the</div>
                  <div className="text-sm font-black text-white leading-tight">App Store</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-charcoal-950 bg-gold-gradient shadow-sm">
                COMING SOON
              </span>
            </div>

            {/* Google Play Pill */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-charcoal-800/90 border border-white/10 hover:border-gold-500/30 transition-all">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-charcoal-900 border border-white/10 flex items-center justify-center text-white">
                  {/* Google Play Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.372-.345-.61-.84-.61-1.408V3.222c0-.568.238-1.063.61-1.408zm11.242 11.243l2.257 2.257-11.89 6.862 9.633-9.119zm0-2.114L5.218 1.824l11.89 6.862-2.257 2.257zm1.492 1.057l3.633 2.098c.84.485.84 1.277 0 1.762l-3.633 2.098-1.921-1.921 1.921-2.037z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Get it on</div>
                  <div className="text-sm font-black text-white leading-tight">Google Play</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-charcoal-950 bg-gold-gradient shadow-sm">
                COMING SOON
              </span>
            </div>

            <p className="text-[11px] text-zinc-400 pt-1">
              Want to know when they land? Join the creator list in the footer.
            </p>
          </div>

        </div>

      </div>

      {/* Sub-bar: Open letter from the founders to every artist we're building this for */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
            <Mail className="w-4 h-4 text-gold-400" />
          </div>
          <span className="text-sm sm:text-base font-bold text-white">
            An open letter from the founders to every artist we're building this for.
          </span>
        </div>

        <button
          onClick={() => setOpenLetterOpen(true)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors flex-shrink-0 group"
        >
          <span>Read the letter</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </section>
  );
}
