'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  Sparkles, 
  UploadCloud, 
  Share2, 
  CheckCircle2, 
  Calendar, 
  Plus, 
  Trash2,
  Lock
} from 'lucide-react';

export default function DistributionModal() {
  const { distributionModalOpen, setDistributionModalOpen, handleSubmitRelease, currentArtist } = useStore();

  const [title, setTitle] = useState('');
  const [releaseType, setReleaseType] = useState<'Single' | 'EP' | 'Album'>('Single');
  const [genre, setGenre] = useState('Alté / Afro-Fusion');
  const [releaseDate, setReleaseDate] = useState('Nov 28, 2026');
  const [stores, setStores] = useState<string[]>([
    'Spotify',
    'Apple Music',
    'Audiomack',
    'Boomplay',
    'YouTube Music',
    'Deezer',
  ]);
  const [splits, setSplits] = useState<{ name: string; percentage: number }[]>([
    { name: currentArtist.stageName + ' (Artist/Master)', percentage: 80 },
    { name: 'Producer Royalty Pool', percentage: 20 },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!distributionModalOpen) return null;

  const allAvailableStores = [
    { name: 'Spotify', logo: '/images/dsp/spotify.png' },
    { name: 'Apple Music', logo: '/images/dsp/apple-music.png' },
    { name: 'Audiomack', logo: '/images/dsp/audiomack.png' },
    { name: 'Boomplay', logo: '/images/dsp/boomplay.png' },
    { name: 'YouTube Music', logo: '/images/dsp/yt-music.png' },
    { name: 'Tidal', logo: '/images/dsp/tidal.png' },
    { name: 'Amazon Music', logo: '/images/dsp/amazon-music.png' },
    { name: 'Deezer', logo: '/images/dsp/deezer.png' },
    { name: 'SoundCloud', logo: '/images/dsp/soundcloud.png' },
    { name: 'Shazam', logo: '/images/dsp/shazam.png' },
    { name: 'Pandora', logo: '/images/dsp/pandora.png' },
    { name: 'QQ Music', logo: '/images/dsp/qq-music.png' },
    { name: 'JioSaavn', logo: '/images/dsp/jio-saavn.png' },
    { name: 'iHeartRadio', logo: '/images/dsp/iheart-radio.png' },
    { name: 'TuneIn Radio', logo: '/images/dsp/tunein-radio.png' },
    { name: 'Apple Podcasts', logo: '/images/dsp/apple-podcasts.png' },
    { name: 'Audible', logo: '/images/dsp/audible.png' },
    { name: 'Castbox', logo: '/images/dsp/castbox.png' },
    { name: 'Pocket Casts', logo: '/images/dsp/pocket-casts.png' },
    { name: 'Podcast Addict', logo: '/images/dsp/podcast-addict.png' },
  ];

  const toggleStore = (storeName: string) => {
    if (stores.includes(storeName)) {
      setStores(stores.filter(s => s !== storeName));
    } else {
      setStores([...stores, storeName]);
    }
  };

  const handleAddSplit = () => {
    setSplits([...splits, { name: 'Collaborator / Feature', percentage: 10 }]);
  };

  const handleRemoveSplit = (index: number) => {
    setSplits(splits.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      handleSubmitRelease({
        title,
        artistName: currentArtist.stageName,
        releaseType,
        genre,
        releaseDate,
        stores,
        splitPercentages: splits,
        coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-charcoal-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-charcoal-900 border border-gold-500/40 rounded-2xl sm:rounded-3xl shadow-gold-glow-lg overflow-hidden text-white flex flex-col max-h-[92vh]">
        
        {/* Glow Header Accent */}
        <div className="w-full h-1.5 bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-300 flex-shrink-0" />

        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/15 text-[11px] font-bold text-gold-400 mb-1 border border-gold-500/30">
              <Share2 className="w-3 h-3 text-gold-400" />
              <span>GLOBAL MASTER DISTRIBUTION WIZARD</span>
            </div>
            <h3 className="text-xl font-black text-white">
              Submit Master for DSP Delivery
            </h3>
            <p className="text-xs text-zinc-400">
              Ingest your single or album to 150+ stores with automated split payouts.
            </p>
          </div>

          <button
            onClick={() => setDistributionModalOpen(false)}
            className="p-2 rounded-full bg-charcoal-800 text-zinc-400 hover:text-white hover:bg-charcoal-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Release Title *
              </label>
              <input
                type="text"
                placeholder="e.g. Lagos Sunsets & Starlight"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Release Format *
              </label>
              <select
                value={releaseType}
                onChange={e => setReleaseType(e.target.value as any)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
              >
                <option value="Single" className="bg-charcoal-900 text-white">Single (1 Track)</option>
                <option value="EP" className="bg-charcoal-900 text-white">EP (3-6 Tracks)</option>
                <option value="Album" className="bg-charcoal-900 text-white">Full Album (7+ Tracks)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Primary Genre *
              </label>
              <input
                type="text"
                value={genre}
                onChange={e => setGenre(e.target.value)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Target Release Date
              </label>
              <input
                type="text"
                value={releaseDate}
                onChange={e => setReleaseDate(e.target.value)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
                required
              />
            </div>
          </div>

          {/* Master File Drop Mock */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Uncompressed Master Audio (.WAV / 24-Bit / 48kHz)
            </label>
            <div className="border-2 border-dashed border-gold-500/40 rounded-2xl p-5 text-center bg-charcoal-800/40 hover:bg-charcoal-800/70 transition-all cursor-pointer">
              <UploadCloud className="w-8 h-8 text-gold-400 mx-auto mb-1 animate-bounce" />
              <div className="text-xs font-bold text-white">
                Drag and drop your final master audio
              </div>
              <div className="text-[10px] text-zinc-400">
                WAV files ensure Apple Digital Masters & Spotify HiFi compatibility.
              </div>
            </div>
          </div>

          {/* Target Stores Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Deliver To Stores ({stores.length} Selected)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {allAvailableStores.map(store => {
                const isSelected = stores.includes(store.name);
                return (
                  <button
                    key={store.name}
                    type="button"
                    onClick={() => toggleStore(store.name)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold border flex items-center justify-between gap-1.5 transition-all ${
                      isSelected
                        ? 'bg-gold-500/20 text-gold-300 border-gold-500/50 shadow-sm'
                        : 'bg-charcoal-800 text-zinc-400 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <img
                        src={store.logo}
                        alt={store.name}
                        className="w-5 h-5 rounded-full object-contain flex-shrink-0"
                      />
                      <span className="truncate">{store.name}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Automated Split Percentages */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                Automated Split Royalties (%)
              </label>
              <button
                type="button"
                onClick={handleAddSplit}
                className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Collaborator</span>
              </button>
            </div>

            <div className="space-y-2">
              {splits.map((s, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={s.name}
                    onChange={e => {
                      const updated = [...splits];
                      updated[idx].name = e.target.value;
                      setSplits(updated);
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-charcoal-800 border border-white/10 text-xs text-white"
                  />
                  <div className="relative w-24">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={s.percentage}
                      onChange={e => {
                        const updated = [...splits];
                        updated[idx].percentage = parseInt(e.target.value, 10) || 0;
                        setSplits(updated);
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-charcoal-800 border border-white/10 text-xs text-white font-mono"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400">%</span>
                  </div>
                  {splits.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSplit(idx)}
                      className="p-2 text-zinc-400 hover:text-rose-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submission button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !title.trim()}
              className="w-full py-3.5 rounded-2xl font-black text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-98 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                  <span>Validating Master & Generating UPC/ISRC...</span>
                </div>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-charcoal-950" />
                  <span>Deliver Master to Global DSPs</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
