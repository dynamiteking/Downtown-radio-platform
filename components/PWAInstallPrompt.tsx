'use client';

import React, { useState, useEffect } from 'react';
import { Download, Share2, MoreVertical, X, Smartphone, Sparkles, Check } from 'lucide-react';

export default function PWAInstallPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode (installed)
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
      return;
    }

    // Check if user previously dismissed
    const dismissed = localStorage.getItem('downtown_pwa_dismissed');
    if (dismissed) {
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Listen for Android beforeinstallprompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // If iOS Safari, show prompt after 4 seconds
    if (isIosDevice) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 4000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setShowInstructions(false);
    localStorage.setItem('downtown_pwa_dismissed', 'true');
  };

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsVisible(false);
      }
      setDeferredPrompt(null);
    } else {
      setShowInstructions(true);
    }
  };

  if (isInstalled || !isVisible) return null;

  return (
    <>
      {/* Floating Compact Banner on Mobile */}
      <div className="fixed top-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-fade-in">
        <div className="relative rounded-2xl bg-charcoal-900/95 backdrop-blur-2xl border border-gold-500/40 shadow-gold-glow-lg p-3.5 sm:p-4 text-white flex items-center justify-between gap-3">
          
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-gold-500/40 flex-shrink-0 bg-gold-500">
              <img
                src="/images/downtown-radio-logo.jpg"
                alt="Downtown Radio App Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-white truncate">Install Downtown App</span>
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30">
                  FAST PWA
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 truncate">
                Lossless audio • Zero data app stream
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 rounded-xl text-xs font-black text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:scale-105 active:scale-95 transition-transform flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install</span>
            </button>
            <button
              onClick={handleDismiss}
              className="p-1.5 rounded-xl text-zinc-400 hover:text-white bg-charcoal-800 hover:bg-charcoal-700 transition-colors"
              aria-label="Dismiss install banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Step-by-step Instructions Modal (iOS Safari or Android Manual) */}
      {showInstructions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-sm rounded-3xl bg-charcoal-900 border border-gold-500/30 shadow-2xl p-6 text-white text-center space-y-4">
            
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-charcoal-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close Instructions"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/40 text-gold-400 mx-auto flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-black text-white">Add Downtown to Home Screen</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Install Downtown Radio on your phone for full-screen playback and instant sovereign listening.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-charcoal-850/90 border border-white/5 text-left text-xs space-y-3 font-medium">
              {isIOS ? (
                <>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold-500 text-charcoal-950 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      1
                    </span>
                    <span className="text-zinc-300">
                      Tap the <strong className="text-white">Share</strong> button <Share2 className="w-3.5 h-3.5 text-gold-400 inline mx-0.5" /> in Safari's bottom bar.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold-500 text-charcoal-950 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      2
                    </span>
                    <span className="text-zinc-300">
                      Scroll down and tap <strong className="text-white">"Add to Home Screen"</strong>.
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold-500 text-charcoal-950 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      1
                    </span>
                    <span className="text-zinc-300">
                      Tap Chrome's menu <MoreVertical className="w-3.5 h-3.5 text-gold-400 inline mx-0.5" /> in the top right corner.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold-500 text-charcoal-950 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      2
                    </span>
                    <span className="text-zinc-300">
                      Tap <strong className="text-white">"Install app"</strong> or <strong className="text-white">"Add to Home screen"</strong>.
                    </span>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => {
                setShowInstructions(false);
                handleDismiss();
              }}
              className="w-full py-3 rounded-2xl font-black text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow active:scale-95 transition-transform"
            >
              Got It, Thanks!
            </button>

          </div>
        </div>
      )}
    </>
  );
}
