'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  Sparkles, 
  UploadCloud, 
  Music, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Globe, 
  Building, 
  User, 
  Share2 
} from 'lucide-react';

export default function ArtistOnboardingModal() {
  const { onboardingModalOpen, setOnboardingModalOpen, handleRegisterArtist } = useStore();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    stageName: '',
    realName: '',
    genre: 'Alté / Afro-Fusion',
    bio: '',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    spotifyUrl: '',
    appleMusicUrl: '',
    instagram: '',
    twitter: '',
    audioFileName: '',
    trackTitle: '',
    bankName: 'Kuda Microfinance Bank',
    accountNumber: '',
  });

  if (!onboardingModalOpen) return null;

  const genres = [
    'Alté / Afro-Fusion',
    'Afro-Drill',
    'Highlife Soul',
    'Afro-House',
    'Street-Pop',
    'Neo-Soul / R&B',
    'Indie Afro-Electronic'
  ];

  const banks = [
    'Kuda Microfinance Bank',
    'OPay Digital Services',
    'Moniepoint MFB',
    'Guaranty Trust Bank (GTB)',
    'Zenith Bank',
    'Access Bank',
    'United Bank for Africa (UBA)'
  ];

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegisterArtist({
      stageName: formData.stageName || 'Sola Wave',
      realName: formData.realName || 'Sola Ade',
      genre: formData.genre,
      bio: formData.bio || 'Independent recording artist pushing alternative African frequencies.',
      avatarUrl: formData.avatarUrl,
      spotifyUrl: formData.spotifyUrl || 'https://open.spotify.com/artist/sample',
      appleMusicUrl: formData.appleMusicUrl || 'https://music.apple.com/artist/sample',
      instagram: formData.instagram || '@solawave',
      twitter: formData.twitter || '@solawave',
      bankName: formData.bankName,
      accountNumber: formData.accountNumber || '2001928471',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-charcoal-900 border border-gold-500/40 rounded-3xl shadow-gold-glow-lg overflow-hidden text-white flex flex-col max-h-[90vh]">
        
        {/* Top Progress Accent */}
        <div className="w-full h-1.5 bg-charcoal-800">
          <div
            className="h-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-300 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/15 text-[11px] font-bold text-gold-400 mb-1 border border-gold-500/30">
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>STEP {step} OF 4 • ARTIST ONBOARDING</span>
            </div>
            <h3 className="text-xl font-black text-white">
              {step === 1 && 'Artist Persona & Identity'}
              {step === 2 && 'Streaming & Social Profiles'}
              {step === 3 && 'Debut Master Audio Upload (.mp3/.wav)'}
              {step === 4 && 'Direct Fan Tip Payout Details'}
            </h3>
          </div>

          <button
            onClick={() => setOnboardingModalOpen(false)}
            className="p-2 rounded-full bg-charcoal-800 text-zinc-400 hover:text-white hover:bg-charcoal-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Stage Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tems, Odunsi, Lady Donli"
                    value={formData.stageName}
                    onChange={e => setFormData({ ...formData, stageName: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Legal / Real Name
                  </label>
                  <input
                    type="text"
                    placeholder="For royalty split contracts"
                    value={formData.realName}
                    onChange={e => setFormData({ ...formData, realName: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Primary Sonic Genre *
                </label>
                <select
                  value={formData.genre}
                  onChange={e => setFormData({ ...formData, genre: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500"
                >
                  {genres.map(g => (
                    <option key={g} value={g} className="bg-charcoal-900 text-white">
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Artist Bio & Sonic Narrative
                </label>
                <textarea
                  rows={3}
                  placeholder="Share your musical journey, your sound philosophy, and your connection to the culture..."
                  value={formData.bio}
                  onChange={e => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Profile Photo URL (or select sample)
                </label>
                <input
                  type="text"
                  value={formData.avatarUrl}
                  onChange={e => setFormData({ ...formData, avatarUrl: e.target.value })}
                  className="w-full py-2 px-3 rounded-xl bg-charcoal-800 border border-white/10 text-xs text-white focus:outline-none focus:border-gold-500 font-mono"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400 mb-2">
                Connect your existing digital footprints to help Downtown Radio verify your catalog and link your official distributor accounts.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Spotify Artist Profile URL
                </label>
                <input
                  type="url"
                  placeholder="https://open.spotify.com/artist/..."
                  value={formData.spotifyUrl}
                  onChange={e => setFormData({ ...formData, spotifyUrl: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Apple Music URL
                </label>
                <input
                  type="url"
                  placeholder="https://music.apple.com/artist/..."
                  value={formData.appleMusicUrl}
                  onChange={e => setFormData({ ...formData, appleMusicUrl: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    placeholder="@yourhandle"
                    value={formData.instagram}
                    onChange={e => setFormData({ ...formData, instagram: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                    X (Twitter) Handle
                  </label>
                  <input
                    type="text"
                    placeholder="@yourhandle"
                    value={formData.twitter}
                    onChange={e => setFormData({ ...formData, twitter: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Debut Track Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Midnight Serenade (Acoustic Master)"
                  value={formData.trackTitle}
                  onChange={e => setFormData({ ...formData, trackTitle: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500"
                />
              </div>

              {/* Drag and Drop Zone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Master Audio File (.mp3 or .wav / 24-bit 48kHz recommended)
                </label>
                <div
                  onClick={() => setFormData({ ...formData, audioFileName: 'downtown_exclusive_master_v1.wav' })}
                  className="border-2 border-dashed border-gold-500/40 hover:border-gold-500 rounded-2xl p-8 text-center cursor-pointer bg-charcoal-800/40 hover:bg-charcoal-800/80 transition-all"
                >
                  <UploadCloud className="w-10 h-10 text-gold-400 mx-auto mb-2 animate-bounce" />
                  <p className="text-sm font-bold text-white mb-1">
                    {formData.audioFileName ? formData.audioFileName : 'Click to select or drop audio master file'}
                  </p>
                  <p className="text-xs text-zinc-400">
                    Supports WAV, MP3, AIFF up to 100MB. Audio will be ingested for radio rotation and fan streaming.
                  </p>
                  {formData.audioFileName && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Ready for Ingest</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-start gap-3">
                <Building className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-white block font-bold mb-0.5">Direct Payouts in Nigerian Naira</strong>
                  Fans can tip you directly while streaming your tracks. 100% of your fan tips and streaming revenue are transferred directly to your bank account weekly.
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Select Nigerian Bank *
                </label>
                <select
                  value={formData.bankName}
                  onChange={e => setFormData({ ...formData, bankName: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500"
                >
                  {banks.map(b => (
                    <option key={b} value={b} className="bg-charcoal-900 text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  10-Digit NUBAN Account Number *
                </label>
                <input
                  type="text"
                  maxLength={10}
                  placeholder="0123456789"
                  value={formData.accountNumber}
                  onChange={e => setFormData({ ...formData, accountNumber: e.target.value })}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-sm text-white focus:outline-none focus:border-gold-500 font-mono"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="p-6 border-t border-white/10 flex items-center justify-between bg-charcoal-950/50">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-charcoal-800 hover:bg-charcoal-700 flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Step</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg flex items-center gap-1.5 transition-transform active:scale-95"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              className="px-6 py-2.5 rounded-xl text-xs font-black text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg flex items-center gap-2 transition-transform active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-charcoal-900" />
              <span>Launch Artist Portal & Live Profile</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
