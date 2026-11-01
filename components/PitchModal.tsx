'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  Sparkles, 
  UploadCloud, 
  Mic2, 
  Calendar, 
  CheckCircle2, 
  Link2, 
  FileText,
  Clock
} from 'lucide-react';

export default function PitchModal() {
  const { 
    pitchModalOpen, 
    closePitchModal, 
    pitchEvent, 
    currentArtist, 
    handleSubmitPitch, 
    tracks 
  } = useStore();

  const [trackSelectionType, setTrackSelectionType] = useState<'catalog' | 'upload'>('catalog');
  const [selectedCatalogTrack, setSelectedCatalogTrack] = useState<string>(tracks[0]?.title || '');
  const [uploadedTrackName, setUploadedTrackName] = useState<string>('');
  const [requestedSlot, setRequestedSlot] = useState<string>('Royal Rave Headline Showcase (1:30 AM — 3:00 AM)');
  const [epkUrl, setEpkUrl] = useState<string>('https://downtownradio.live/epk/' + currentArtist.stageName.toLowerCase().replace(/\s+/g, ''));
  const [livePerformanceLink, setLivePerformanceLink] = useState<string>('https://youtube.com/watch?v=live-performance-preview');
  const [message, setMessage] = useState<string>('We have prepared an intimate 30-minute set with live horns and talking drums for the Red Horn palace stage.');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!pitchModalOpen || !pitchEvent) return null;

  const slotOptions = [
    'Opening Alté Warmup (9:00 PM — 10:30 PM)',
    'Peak Midnight Groove (11:00 PM — 1:00 AM)',
    'Royal Rave Headline Showcase (1:30 AM — 3:00 AM)',
    'Red Horn Sunrise After-Hours (3:30 AM — 5:00 AM)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const activeTrackTitle = trackSelectionType === 'catalog' ? selectedCatalogTrack : (uploadedTrackName || 'Unreleased Studio Master');

    setTimeout(() => {
      setIsSubmitting(false);
      handleSubmitPitch({
        eventId: pitchEvent.id,
        eventTitle: pitchEvent.title,
        artistId: currentArtist.id,
        artistName: currentArtist.stageName,
        trackTitle: activeTrackTitle,
        trackAudioMockName: trackSelectionType === 'upload' ? uploadedTrackName : undefined,
        requestedSlot,
        epkUrl,
        livePerformanceLink,
        message,
      });
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-charcoal-900 border border-gold-500/40 rounded-3xl shadow-gold-glow-lg overflow-hidden text-white flex flex-col max-h-[92vh]">
        
        {/* Glow Header Accent */}
        <div className="w-full h-1.5 bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-300" />

        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/15 text-[11px] font-bold text-gold-400 mb-1 border border-gold-500/30">
              <Mic2 className="w-3 h-3 text-gold-400" />
              <span>PERFORMANCE APPLICATION ENGINE</span>
            </div>
            <h3 className="text-xl font-black text-white">
              Pitch to Perform at {pitchEvent.title}
            </h3>
            <p className="text-xs text-zinc-400">
              {pitchEvent.date} • {pitchEvent.venue}, {pitchEvent.city}
            </p>
          </div>

          <button
            onClick={closePitchModal}
            className="p-2 rounded-full bg-charcoal-800 text-zinc-400 hover:text-white hover:bg-charcoal-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1">
          
          {/* Artist identity context */}
          <div className="p-3.5 rounded-2xl bg-charcoal-800/80 border border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={currentArtist.avatarUrl}
                alt={currentArtist.stageName}
                className="w-10 h-10 rounded-xl object-cover border border-gold-500/30"
              />
              <div>
                <div className="text-xs font-bold text-white">
                  Pitching as <span className="text-gold-400">{currentArtist.stageName}</span>
                </div>
                <div className="text-[10px] text-zinc-400">
                  {currentArtist.genre} • Verified Artist Account
                </div>
              </div>
            </div>
            {currentArtist.isPro && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gold-500/20 text-gold-300 border border-gold-500/30">
                PRO PRIORITY REVIEW
              </span>
            )}
          </div>

          {/* Track Selection Mode */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Performance Track / Audition Master *
            </label>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <button
                type="button"
                onClick={() => setTrackSelectionType('catalog')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                  trackSelectionType === 'catalog'
                    ? 'bg-gold-500 text-charcoal-950 border-gold-400'
                    : 'bg-charcoal-800 text-zinc-300 border-white/5'
                }`}
              >
                Select From Downtown Catalog
              </button>
              <button
                type="button"
                onClick={() => setTrackSelectionType('upload')}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                  trackSelectionType === 'upload'
                    ? 'bg-gold-500 text-charcoal-950 border-gold-400'
                    : 'bg-charcoal-800 text-zinc-300 border-white/5'
                }`}
              >
                Upload Unreleased Track (.mp3/.wav)
              </button>
            </div>

            {trackSelectionType === 'catalog' ? (
              <select
                value={selectedCatalogTrack}
                onChange={e => setSelectedCatalogTrack(e.target.value)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
              >
                {tracks.map(t => (
                  <option key={t.id} value={t.title} className="bg-charcoal-900 text-white">
                    {t.title} — {t.artist} ({t.genre})
                  </option>
                ))}
              </select>
            ) : (
              <div
                onClick={() => setUploadedTrackName('unreleased_ife_live_master.wav')}
                className="border-2 border-dashed border-gold-500/40 hover:border-gold-500 rounded-2xl p-5 text-center cursor-pointer bg-charcoal-800/40 transition-colors"
              >
                <UploadCloud className="w-8 h-8 text-gold-400 mx-auto mb-1 animate-bounce" />
                <p className="text-xs font-bold text-white">
                  {uploadedTrackName ? uploadedTrackName : 'Click to select or drop unreleased track (.wav / .mp3)'}
                </p>
                <p className="text-[10px] text-zinc-400">
                  Audio files are kept strictly confidential for the Downtown Radio curation committee.
                </p>
                {uploadedTrackName && (
                  <span className="mt-2 inline-flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> File Ready
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Requested Performance Slot */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Requested Performance Slot *
            </label>
            <select
              value={requestedSlot}
              onChange={e => setRequestedSlot(e.target.value)}
              className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500"
            >
              {slotOptions.map(slot => (
                <option key={slot} value={slot} className="bg-charcoal-900 text-white">
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* EPK & Live Video Link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Electronic Press Kit (EPK) Link *
              </label>
              <input
                type="url"
                value={epkUrl}
                onChange={e => setEpkUrl(e.target.value)}
                placeholder="https://..."
                className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500 font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Live Performance Video Link (YouTube/Vimeo)
              </label>
              <input
                type="url"
                value={livePerformanceLink}
                onChange={e => setLivePerformanceLink(e.target.value)}
                placeholder="https://youtube.com/..."
                className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500 font-mono"
              />
            </div>
          </div>

          {/* Pitch Message / Statement */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Stage Concept & Technical Rider Brief
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Detail your band setup (e.g. 2 vocal mics, DJ line-in, saxophone), live energy, and expected crowd engagement..."
              className="w-full py-2.5 px-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>

          {/* CTA Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-2xl font-black text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-98 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Pitch to Editorial Board...</span>
                </div>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-charcoal-900" />
                  <span>Submit Performance Pitch</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-zinc-500 text-center mt-2.5">
              Downtown Radio A&R review responses are sent within 72 business hours.
            </p>
          </div>

        </form>

      </div>
    </div>
  );
}
