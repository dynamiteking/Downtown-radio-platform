'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { 
  TrendingUp, 
  Banknote, 
  Music, 
  Calendar, 
  MessageSquare, 
  Crown, 
  Sparkles, 
  UploadCloud, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Check, 
  Send, 
  ArrowUpRight,
  ShieldCheck,
  Building,
  Users
} from 'lucide-react';

export default function ArtistDashboard() {
  const { 
    currentArtist, 
    tracks, 
    pitches, 
    fanMessages, 
    setProModalOpen, 
    setOnboardingModalOpen,
    openTippingModal,
    setActiveTab,
    addToast 
  } = useStore();

  const { playTrack } = useAudio();
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);
  const [replyText, setReplyText] = useState('');
  const [isSendingReply, setIsSendingReply] = useState(false);

  const artistTracks = tracks.filter(t => t.artistId === currentArtist.id || t.artist.includes(currentArtist.stageName));

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    setIsSendingReply(true);
    setTimeout(() => {
      setIsSendingReply(false);
      addToast(
        'Thank You Note Sent!',
        `Your personalized note was sent to ${selectedMessage.fanName}.`,
        'success'
      );
      setSelectedMessage(null);
      setReplyText('');
    }, 800);
  };

  const handleInstantPayout = () => {
    addToast(
      'Payout Initiated',
      `₦${currentArtist.totalTipsEarned.toLocaleString()} is being transferred to ${currentArtist.bankName || 'Kuda MFB'} (•••• 8471). Arrival in 5 mins.`,
      'gold'
    );
  };

  return (
    <div className="space-y-8 my-8">
      
      {/* ARTIST HERO PROFILE BANNER */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-charcoal-850 p-5 sm:p-8 shadow-2xl w-full">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
          <div className="flex flex-row items-center space-x-4 sm:space-x-5">
            <div className="relative flex-shrink-0">
              <img
                src={currentArtist.avatarUrl}
                alt={currentArtist.stageName}
                className="w-18 h-18 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-gold-500/40 shadow-gold-glow"
              />
              {currentArtist.isPro && (
                <span className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-gold-gradient text-charcoal-950 font-black shadow-gold-glow">
                  <Crown className="w-4 h-4 fill-charcoal-950" />
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight truncate">
                  {currentArtist.stageName}
                </h1>
                {currentArtist.verified && (
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 flex-shrink-0" />
                )}
                {currentArtist.isPro && (
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/30 flex-shrink-0">
                    PRO ARTIST
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-gold-400/90 font-medium mb-1">
                {currentArtist.genre} • Resident Creator at Ile-Ife & Lagos
              </p>
              <p className="text-xs text-zinc-400 max-w-xl line-clamp-2">
                {currentArtist.bio}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setOnboardingModalOpen(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:text-white bg-charcoal-800 border border-white/10 hover:border-white/20 transition-all"
            >
              Edit Profile & Payout
            </button>

            {!currentArtist.isPro ? (
              <button
                onClick={() => {
                  setActiveTab('pro');
                  setProModalOpen(true);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center gap-1.5"
              >
                <Crown className="w-4 h-4 fill-charcoal-950" />
                <span>Upgrade to Pro (₦5,000/mo)</span>
              </button>
            ) : (
              <div className="px-4 py-2 rounded-xl bg-charcoal-800/80 border border-gold-500/30 text-xs font-bold text-gold-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Downtown Pro Active</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4 CORE ANALYTICS STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Total Streams */}
        <div className="p-5 rounded-2xl bg-charcoal-850/90 border border-white/5 hover:border-gold-500/30 transition-all shadow-lg">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Total Track Streams</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-1">
            {currentArtist.totalStreams.toLocaleString()}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
            <span>+18.4%</span>
            <span className="text-zinc-500 font-normal">vs last month</span>
          </div>
        </div>

        {/* Total Tips Earned (in ₦ Naira) */}
        <div className="p-5 rounded-2xl bg-charcoal-850/90 border border-gold-500/40 transition-all shadow-gold-glow">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400">Total Tips Earned (₦)</span>
            <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400">
              <Banknote className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gold-400 font-mono mb-1">
            ₦{currentArtist.totalTipsEarned.toLocaleString()}
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[11px]">
            <span className="text-zinc-400">Kuda MFB •••• 8471</span>
            <button
              onClick={handleInstantPayout}
              className="text-gold-400 font-bold hover:underline"
            >
              Instant Withdraw
            </button>
          </div>
        </div>

        {/* Monthly Listeners */}
        <div className="p-5 rounded-2xl bg-charcoal-850/90 border border-white/5 hover:border-gold-500/30 transition-all shadow-lg">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Monthly Listeners</span>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-1">
            {currentArtist.monthlyListeners.toLocaleString()}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span className="text-white font-semibold">Top City:</span>
            <span>Ile-Ife (44%), Lagos (36%)</span>
          </div>
        </div>

        {/* Performance Pitches Status */}
        <div className="p-5 rounded-2xl bg-charcoal-850/90 border border-white/5 hover:border-gold-500/30 transition-all shadow-lg">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Event Pitch Statuses</span>
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-1">
            {pitches.length} Pitches
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>1 Confirmed • 1 Under Review</span>
          </div>
        </div>

      </div>

      {/* TWO COLUMN GRID: PERFORMANCE PITCHES & DIRECT FAN MESSAGES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SECTION 1: PERFORMANCE APPLICATION STATUSES */}
        <div className="bg-charcoal-850/90 rounded-3xl border border-white/5 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 mb-0.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>PERFORM AT OUR EVENTS</span>
                </div>
                <h3 className="text-xl font-black text-white">
                  Pitch Applications & Slots
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-charcoal-800 text-zinc-300 border border-white/5">
                {pitches.length} Active Pitches
              </span>
            </div>

            <div className="space-y-4">
              {pitches.map(pitch => {
                const isConfirmed = pitch.status === 'Confirmed';
                const isReview = pitch.status === 'Under Review' || pitch.status === 'Pending';

                return (
                  <div
                    key={pitch.id}
                    className="p-4 rounded-2xl bg-charcoal-800/60 border border-white/5 hover:border-gold-500/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-white mb-0.5">
                          {pitch.eventTitle}
                        </h4>
                        <p className="text-xs text-gold-400/90 font-medium">
                          Track: {pitch.trackTitle}
                        </p>
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                          isConfirmed
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : isReview
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-zinc-700 text-zinc-300'
                        }`}
                      >
                        {pitch.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 mt-3 pt-2.5 border-t border-white/5">
                      <div>
                        <span className="text-zinc-500 block">Requested Slot:</span>
                        <span className="font-semibold text-white">{pitch.requestedSlot}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Submitted:</span>
                        <span className="font-semibold text-white">{pitch.submittedAt}</span>
                      </div>
                    </div>

                    {isConfirmed && (
                      <div className="mt-3 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>Congratulations! Your performance pitch is approved. Showcase venue schedule and soundcheck call time will be sent directly via notification.</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/5 text-center">
            <p className="text-xs text-zinc-400 mb-2">
              Want to perform at upcoming Royal Rave showcases or Ikeja creative gatherings?
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('events-tab');
                // navigate
              }}
              className="text-xs font-bold text-gold-400 hover:text-gold-300 inline-flex items-center gap-1"
            >
              Browse All Open Performance Openings <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* SECTION 2: DIRECT FAN MESSAGE INBOX */}
        <div className="bg-charcoal-850/90 rounded-3xl border border-white/5 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 mb-0.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>FAN CONNECTION</span>
                </div>
                <h3 className="text-xl font-black text-white">
                  Direct Fan Messages & Tips
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/30">
                {fanMessages.length} Messages
              </span>
            </div>

            <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-1">
              {fanMessages.map(msg => (
                <div
                  key={msg.id}
                  className="p-4 rounded-2xl bg-charcoal-800/60 border border-white/5 hover:border-gold-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center space-x-3">
                      <img
                        src={msg.fanAvatar}
                        alt={msg.fanName}
                        className="w-9 h-9 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          {msg.fanName}
                        </h4>
                        <div className="text-[10px] text-zinc-400">
                          {msg.date} • for "{msg.trackTitle}"
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-gold-500/20 text-gold-300 font-mono font-bold text-xs border border-gold-500/30">
                      +₦{msg.amount.toLocaleString()} Tip
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 italic bg-charcoal-900/50 p-2.5 rounded-xl border border-white/5 mt-2">
                    "{msg.message}"
                  </p>

                  <div className="mt-2.5 flex items-center justify-end">
                    <button
                      onClick={() => setSelectedMessage(msg)}
                      className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1 transition-colors"
                    >
                      <Send className="w-3 h-3" />
                      <span>{msg.replied ? 'Send Another Note' : 'Send Thank You Note'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/5 text-xs text-zinc-500 text-center">
            Fans receive your thank-you note directly via in-app notification & registered email.
          </div>
        </div>

      </div>

      {/* TRACK CATALOG MANAGER */}
      <div className="bg-charcoal-850/90 rounded-2xl sm:rounded-3xl border border-white/5 p-4 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 mb-0.5">
              <Music className="w-3.5 h-3.5" />
              <span>CATALOG & REVENUE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Your Downtown Radio Catalog
            </h3>
            <p className="text-xs text-zinc-400">
              Manage uploaded masters, listen to radio playback, and track tip performance per song.
            </p>
          </div>

          <button
            onClick={() => setOnboardingModalOpen(true)}
            className="px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center gap-2 self-start sm:self-auto"
          >
            <UploadCloud className="w-4 h-4 text-charcoal-900" />
            <span>Upload New Master File</span>
          </button>
        </div>

        <div className="overflow-x-auto pb-2 scrollbar-none">
          <table className="w-full min-w-[580px] text-left text-xs">
            <thead>
              <tr className="border-b border-white/5 text-[11px] font-bold uppercase text-zinc-400 tracking-wider">
                <th className="pb-3 pl-2">Track & Cover</th>
                <th className="pb-3">Genre</th>
                <th className="pb-3">Streams</th>
                <th className="pb-3">Tips Generated</th>
                <th className="pb-3">Airplay Status</th>
                <th className="pb-3 text-right pr-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {artistTracks.map(track => (
                <tr key={track.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="py-3.5 pl-2">
                    <div className="flex items-center space-x-3">
                      <img
                        src={track.coverUrl}
                        alt={track.title}
                        className="w-10 h-10 rounded-xl object-cover border border-white/10"
                      />
                      <div>
                        <div className="font-bold text-white group-hover:text-gold-400 transition-colors">
                          {track.title}
                        </div>
                        <div className="text-[10px] text-zinc-500 font-mono">
                          ISRC: NG-DR-26-{track.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 text-zinc-300 font-medium">
                    {track.genre}
                  </td>
                  <td className="py-3.5 font-mono text-white">
                    {track.streams.toLocaleString()}
                  </td>
                  <td className="py-3.5 font-mono font-bold text-gold-400">
                    ₦{track.totalTips.toLocaleString()}
                    <span className="text-[10px] text-zinc-500 block font-sans">
                      ({track.tipCount} direct tips)
                    </span>
                  </td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-bold border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Radio Rotation
                    </span>
                  </td>
                  <td className="py-3.5 text-right pr-2">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => playTrack(track)}
                        className="px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-950 font-bold text-[11px] text-zinc-300 transition-colors"
                      >
                        Play Preview
                      </button>
                      <button
                        onClick={() => openTippingModal(track)}
                        className="px-3 py-1.5 rounded-lg bg-gold-500/15 hover:bg-gold-500 hover:text-charcoal-950 font-bold text-[11px] text-gold-400 border border-gold-500/30 transition-colors"
                      >
                        Tip (₦)
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* REPLY TO FAN MODAL */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-charcoal-900 border border-gold-500/40 rounded-3xl p-6 shadow-gold-glow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">
                Send Note to {selectedMessage.fanName}
              </h3>
              <button
                onClick={() => setSelectedMessage(null)}
                className="p-1 rounded-full text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-zinc-400 mb-3">
              Tipped <strong className="text-gold-400">₦{selectedMessage.amount.toLocaleString()}</strong> on "{selectedMessage.trackTitle}".
            </p>

            <form onSubmit={handleSendReply} className="space-y-4">
              <textarea
                rows={3}
                placeholder="Write your personal thank you message..."
                value={replyText}
                onChange={e => setReplyText(e.target.value)}
                className="w-full p-3 rounded-xl bg-charcoal-800 border border-white/10 text-xs text-white focus:outline-none focus:border-gold-500 resize-none"
                required
              />

              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMessage(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSendingReply}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-charcoal-950" />
                  <span>{isSendingReply ? 'Delivering...' : 'Send Thank You Note'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
