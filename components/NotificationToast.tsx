'use client';

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, CheckCircle2, Info, X } from 'lucide-react';

export default function NotificationToast() {
  const { toasts, removeToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-24 right-4 sm:right-8 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => {
        const isGold = toast.type === 'gold';
        const isSuccess = toast.type === 'success';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all duration-300 transform translate-y-0 opacity-100 flex items-start space-x-3 ${
              isGold
                ? 'bg-charcoal-900/95 border-gold-500/60 shadow-gold-glow text-white'
                : isSuccess
                ? 'bg-charcoal-900/95 border-emerald-500/50 shadow-lg text-white'
                : 'bg-charcoal-900/95 border-white/10 text-white'
            }`}
          >
            <div className="mt-0.5 flex-shrink-0">
              {isGold ? (
                <div className="p-1.5 rounded-lg bg-gold-500/20 text-gold-400">
                  <Sparkles className="w-4 h-4" />
                </div>
              ) : isSuccess ? (
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              ) : (
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                  <Info className="w-4 h-4" />
                </div>
              )}
            </div>

            <div className="flex-1 overflow-hidden">
              <h4 className="text-xs font-black tracking-wide text-white">
                {toast.title}
              </h4>
              {toast.message && (
                <p className="text-[11px] text-zinc-300 mt-0.5 leading-snug">
                  {toast.message}
                </p>
              )}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-zinc-500 hover:text-white p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
