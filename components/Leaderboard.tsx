'use client';

import React from 'react';
import { useStore } from '../context/StoreContext';
import { Crown, Medal, Award, Flame, Sparkles, ShieldCheck, Heart, Banknote } from 'lucide-react';

export default function Leaderboard() {
  const { leaderboard, openTippingModal } = useStore();

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-charcoal-950 flex items-center justify-center font-black text-sm shadow-gold-glow">
            <Crown className="w-4 h-4 fill-charcoal-950" />
          </div>
        );
      case 2:
        return (
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-300 to-zinc-100 text-charcoal-950 flex items-center justify-center font-black text-sm shadow-sm">
            <Medal className="w-4 h-4 text-charcoal-900" />
          </div>
        );
      case 3:
        return (
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-700 to-amber-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
            <Award className="w-4 h-4" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-charcoal-800 border border-white/10 text-zinc-400 flex items-center justify-center font-mono font-bold text-xs">
            #{rank}
          </div>
        );
    }
  };

  return (
    <div className="bg-charcoal-850/90 rounded-3xl border border-white/5 p-5 sm:p-7 shadow-xl w-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-white/5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
            <Crown className="w-3.5 h-3.5" />
            <span>COMMUNITY ROYALTY</span>
          </div>
          <h3 className="text-xl font-black text-white">
            Fan Leaderboard of the Month
          </h3>
          <p className="text-xs text-zinc-400">
            Top direct tippers empowering Nigerian indie music.
          </p>
        </div>

        <div className="hidden sm:flex flex-col items-end">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Monthly Perks</span>
          <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded-md border border-gold-500/20">
            VIP Rooftop Access
          </span>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="divide-y divide-white/5 my-2">
        {leaderboard.slice(0, 5).map(fan => (
          <div
            key={fan.id}
            className="py-3 flex items-center justify-between group hover:bg-white/[0.02] px-2 rounded-xl transition-colors"
          >
            {/* Left: Rank & Avatar & Name */}
            <div className="flex items-center space-x-3.5">
              {getRankBadge(fan.rank)}

              <div className="relative">
                <img
                  src={fan.avatar}
                  alt={fan.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                {fan.rank === 1 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gold-500 rounded-full border-2 border-charcoal-900" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors">
                    {fan.name}
                  </h4>
                  {fan.verifiedFan && (
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  )}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                  <span className="text-gold-400/90 font-medium">{fan.badge}</span>
                  <span>•</span>
                  <span>Fav: {fan.favoriteArtist}</span>
                </div>
              </div>
            </div>

            {/* Right: Amount Tipped in Naira */}
            <div className="text-right">
              <div className="text-sm sm:text-base font-black text-white group-hover:text-gold-400 transition-colors font-mono">
                ₦{fan.totalTipped.toLocaleString()}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                Total Contributed
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Callout box */}
      <div className="mt-4 p-4 rounded-2xl bg-charcoal-800/60 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3 text-left">
          <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Join This Month's Leaderboard</div>
            <div className="text-[11px] text-zinc-400">Every ₦500 tip earns you +10 Fan XP and climbs your rank.</div>
          </div>
        </div>

        <button
          onClick={() => openTippingModal()}
          className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 whitespace-nowrap flex items-center justify-center gap-1.5"
        >
          <Banknote className="w-3.5 h-3.5 text-charcoal-950" />
          <span>Send Cash Tip (₦)</span>
        </button>
      </div>
    </div>
  );
}
