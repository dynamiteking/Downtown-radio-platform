'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  User, 
  Sparkles, 
  Music, 
  Coins, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function AuthModal() {
  const { 
    authModalOpen, 
    closeAuthModal, 
    authMode, 
    setIsLoggedIn, 
    setUserRole, 
    setActiveTab, 
    setOnboardingModalOpen,
    addToast 
  } = useStore();

  const [fanEmail, setFanEmail] = useState('tobi@downtownradio.live');
  const [fanName, setFanName] = useState('Tobi Adeyemi');

  if (!authModalOpen) return null;

  const handleFanLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUserRole('fan');
    addToast('Welcome Back, Supporter!', `Signed in as ${fanName}. Fan tipping & XP tracking enabled.`, 'gold');
    closeAuthModal();
  };

  const handleQuickPreset = (name: string, email: string) => {
    setFanName(name);
    setFanEmail(email);
    setIsLoggedIn(true);
    setUserRole('fan');
    addToast('Signed In Successfully!', `Logged in as ${name}.`, 'gold');
    closeAuthModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-charcoal-900 border border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-gold-glow-lg text-white">
        
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-charcoal-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-charcoal-800 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto mb-3 shadow-gold-glow">
            <User className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-white">
            {authMode === 'fan-login' ? 'Fan Sign In' : 'Artist Access & Registration'}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Access direct tipping, save favorite alté tracks, and climb the monthly leaderboard.
          </p>
        </div>

        {/* Demo Fast Logins */}
        <div className="space-y-2 mb-6">
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 text-center">
            Quick 1-Click Demo Profiles
          </div>

          <button
            onClick={() => handleQuickPreset('Tobi Adeyemi', 'tobi@downtownradio.live')}
            className="w-full p-2.5 rounded-xl bg-charcoal-800/80 hover:bg-charcoal-800 border border-white/5 hover:border-gold-500/40 text-left flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-2.5">
              <span className="text-base">👑</span>
              <div>
                <div className="text-xs font-bold text-white">Tobi Adeyemi (Top Supporter)</div>
                <div className="text-[10px] text-zinc-400">₦185,000 tipped this month</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
          </button>

          <button
            onClick={() => handleQuickPreset('Amara Kalu', 'amara@sound.live')}
            className="w-full p-2.5 rounded-xl bg-charcoal-800/80 hover:bg-charcoal-800 border border-white/5 hover:border-gold-500/40 text-left flex items-center justify-between transition-all"
          >
            <div className="flex items-center space-x-2.5">
              <span className="text-base">🎧</span>
              <div>
                <div className="text-xs font-bold text-white">Amara Kalu (Sound Connoisseur)</div>
                <div className="text-[10px] text-zinc-400">Regular at Ile-Ife gatherings</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
          </button>
        </div>

        <div className="relative my-4 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
          <span className="relative px-3 bg-charcoal-900 text-[10px] uppercase font-bold text-zinc-500">Or use email</span>
        </div>

        <form onSubmit={handleFanLogin} className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={fanName}
              onChange={e => setFanName(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-charcoal-800 border border-white/10 text-xs text-white focus:outline-none focus:border-gold-500"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={fanEmail}
              onChange={e => setFanEmail(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-charcoal-800 border border-white/10 text-xs text-white focus:outline-none focus:border-gold-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-xs text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-98"
          >
            Sign In as Fan
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <button
            onClick={() => {
              closeAuthModal();
              setUserRole('artist');
              setActiveTab('artist-dashboard');
              setOnboardingModalOpen(true);
            }}
            className="text-xs font-bold text-gold-400 hover:text-gold-300"
          >
            Are you an artist? Register your profile & upload masters →
          </button>
        </div>

      </div>
    </div>
  );
}
