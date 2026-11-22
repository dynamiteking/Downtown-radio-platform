'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Sparkles, 
  Crown, 
  Mic2, 
  Sliders, 
  Flame, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Users, 
  Award,
  Radio,
  Zap,
  Globe2
} from 'lucide-react';

interface GroomingPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  highlights: string[];
  coach: string;
}

const GROOMING_PILLARS: GroomingPillar[] = [
  {
    id: 'pillar-performance',
    number: '01',
    title: 'Stage Presence & Performance Grooming',
    subtitle: 'From bedroom acoustic demos to commanding live festival audiences under stadium strobes.',
    icon: <Mic2 className="w-5 h-5 text-gold-400" />,
    coach: 'Curated by Downtown Stage Directors',
    highlights: [
      'Microphone & crowd control intensives for 9PM — 5AM festival sets',
      'Breath control & live band dynamic arrangement coaching',
      'Festival stage presence masterclasses with touring headliners',
      'Direct performance evaluation on Downtown rooftop showcases',
    ],
  },
  {
    id: 'pillar-production',
    number: '02',
    title: 'Sonic Mastery & Production Engineering',
    subtitle: 'Dialing in spatial audio, uncompressed waveforms, and signature Afro-fusion sound design.',
    icon: <Sliders className="w-5 h-5 text-gold-400" />,
    coach: 'Led by Downtown Audio Node Engineers',
    highlights: [
      'Lossless master optimization for global DSP distribution',
      'Analog warmth, tape saturation & spectral frequency cleanup',
      'A&R feedback on arrangement, hooks & sonic identity',
      'Access to Downtown Sound Labs in Lagos & Ile-Ife',
    ],
  },
  {
    id: 'pillar-brand',
    number: '03',
    title: 'Visual Identity & Cultural Brand Styling',
    subtitle: 'Crafting sovereign African artistic narratives that stand out globally.',
    icon: <Award className="w-5 h-5 text-gold-400" />,
    coach: 'Directed by Pan-African Creative Stylists',
    highlights: [
      'Bespoke photoshoot creative direction & cultural styling',
      'Electronic Press Kit (EPK) curation for global festival bookers',
      'Editorial playlist pitching strategy & music video aesthetics',
      'Authentic storytelling that preserves indigenous heritage',
    ],
  },
  {
    id: 'pillar-monetization',
    number: '04',
    title: 'Financial Sovereignty & Royalty Architecture',
    subtitle: 'Keeping 100% of your master rights and putting real Naira in your bank from day one.',
    icon: <Crown className="w-5 h-5 text-gold-400" />,
    coach: 'Powered by Downtown Pro Fintech Framework',
    highlights: [
      '100% Master ownership retention on all distributed releases',
      'Automated royalty splits for producers, songwriters & crew',
      'Direct fan tipping in Nigerian Naira with zero gatekeeper cuts',
      'Festival performance stipends & VIP artist hospitality',
    ],
  },
];

export default function EntertainmentGroomingHub() {
  const { setActiveTab, setUserRole, setOnboardingModalOpen } = useStore();
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="my-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-bold uppercase tracking-wider text-gold-400 mb-3 shadow-gold-glow">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>AFRICA’S PREMIER ENTERTAINMENT GROOMING ECOSYSTEM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          We Don't Just Stream Music. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">
            We Groom Global Headliners.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 mt-3 leading-relaxed">
          Downtown Radio is built as an end-to-end artist incubation sanctuary. We discover raw, uncompromising independent talent and groom them into sovereign sonic powerhouses ready for world festival stages.
        </p>
      </div>

      {/* The 4 Grooming Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {GROOMING_PILLARS.map((pillar, idx) => (
          <div
            key={pillar.id}
            className="p-7 rounded-3xl bg-charcoal-850 border border-white/5 hover:border-gold-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient hover light */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-colors pointer-events-none" />

            <div>
              {/* Header: Number and Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-gold-400">
                  PILLAR {pillar.number}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-charcoal-900 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform shadow-md">
                  {pillar.icon}
                </div>
              </div>

              <h3 className="text-xl font-black text-white mb-2 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {pillar.subtitle}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                {pillar.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start space-x-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>{pillar.coach}</span>
              <span className="text-gold-400 font-bold">Downtown Fellowship</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cohort Pitching Call-To-Action Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-charcoal-850 via-charcoal-900 to-charcoal-950 border-2 border-gold-500/40 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-400">
            <Zap className="w-3.5 h-3.5 text-gold-400" />
            <span>APPLY FOR THE NEXT GROOMING COHORT</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Ready to Take Your Sound to Live Festival Stages?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
            We review unreleased masters every week. Selected creators receive performance training, live audio mastering, festival slot placement, and guaranteed editorial push.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
          <button
            onClick={() => {
              setUserRole('artist');
              setActiveTab('artist-dashboard');
              setOnboardingModalOpen(true);
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Apply for Grooming Cohort</span>
            <ArrowRight className="w-4 h-4 text-charcoal-950" />
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-zinc-300 hover:text-white bg-charcoal-800 border border-white/10 hover:border-gold-500/30 transition-colors"
          >
            Browse Open Festival Slots
          </button>
        </div>

      </div>

    </section>
  );
}
