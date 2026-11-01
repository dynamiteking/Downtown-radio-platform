'use client';

import React, { useEffect, useState } from 'react';
import { useAudio } from '../context/AudioContext';
import { Radio, Disc, Sparkles } from 'lucide-react';

export default function Floating3DGraphics() {
  const { isPlaying } = useAudio();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const vinylRotation = (scrollY * 0.25) % 360;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* 1. FLOATING 3D VINYL RECORD (Right side of screen, tilts on scroll) */}
      <div 
        className="hidden xl:block absolute -right-32 top-72 transition-transform duration-700 ease-out opacity-25 hover:opacity-40"
        style={{
          transform: `translateY(${scrollY * 0.12}px) rotate(${vinylRotation}deg) rotateY(-25deg)`,
          perspective: '1000px',
        }}
      >
        <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-charcoal-950 via-[#181B22] to-charcoal-950 border-4 border-gold-500/30 shadow-[0_20px_50px_rgba(255,159,28,0.2)] flex items-center justify-center p-2">
          
          {/* Vinyl Grooves concentric rings */}
          <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-4">
            <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-4">
              <div className="w-full h-full rounded-full border border-white/10 flex items-center justify-center p-4">
                <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-4">
                  
                  {/* Vinyl Center Gold Label */}
                  <div className="w-24 h-24 rounded-full bg-gold-gradient shadow-gold-glow border-2 border-charcoal-950 flex flex-col items-center justify-center text-charcoal-950 text-center p-2">
                    <span className="text-[8px] font-black uppercase tracking-tight">
                      DOWNTOWN
                    </span>
                    <span className="text-[7px] font-bold">
                      RADIO ✦
                    </span>
                    {/* Spindle hole */}
                    <div className="w-3 h-3 rounded-full bg-charcoal-950 mt-0.5" />
                    <span className="text-[6px] font-mono mt-0.5 font-bold">
                      33⅓ RPM
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Light Sheen Reflection */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 2. FLOATING VINTAGE CASSETTE / AUDIO NODE (Left side of screen) */}
      <div 
        className="hidden xl:block absolute -left-20 top-[1200px] transition-transform duration-1000 ease-out opacity-20 hover:opacity-35"
        style={{
          transform: `translateY(${scrollY * -0.08}px) rotate(${15 + scrollY * 0.05}deg) rotateX(20deg)`,
          perspective: '1000px',
        }}
      >
        <div className="w-64 h-40 rounded-2xl bg-charcoal-900 border-2 border-gold-500/30 p-3 shadow-gold-glow flex flex-col justify-between">
          <div className="flex items-center justify-between text-[8px] font-mono font-bold text-gold-400 border-b border-white/5 pb-1">
            <span>DOWNTOWN AUDIO NODE</span>
            <span>HIGH BIAS • 90 MIN</span>
          </div>

          {/* Cassette Tape Spools */}
          <div className="flex items-center justify-center space-x-6 my-auto">
            <div 
              className="w-10 h-10 rounded-full border-2 border-gold-500/50 flex items-center justify-center"
              style={{ transform: `rotate(${scrollY * 0.5}deg)` }}
            >
              <div className="w-3 h-3 rounded-full bg-gold-500/70" />
            </div>
            <div className="w-16 h-6 rounded-md bg-charcoal-950 border border-white/5 flex items-center justify-center">
              <span className="text-[8px] font-mono text-zinc-500">SIDE A</span>
            </div>
            <div 
              className="w-10 h-10 rounded-full border-2 border-gold-500/50 flex items-center justify-center"
              style={{ transform: `rotate(${scrollY * 0.5}deg)` }}
            >
              <div className="w-3 h-3 rounded-full bg-gold-500/70" />
            </div>
          </div>

          <div className="text-[7px] font-mono text-zinc-500 text-center">
            MASTER ARCHIVE • RED HORN PALACE SESSIONS
          </div>
        </div>
      </div>

      {/* 3. FLOATING ORBITAL STARS & GOLD PARTICLES */}
      <div 
        className="absolute left-1/4 top-96 text-gold-400 text-xs opacity-30 animate-pulse pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        ✦
      </div>
      <div 
        className="absolute right-1/3 top-[800px] text-amber-300 text-sm opacity-25 animate-pulse pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      >
        ✦
      </div>
      <div 
        className="absolute left-16 top-[1800px] text-gold-400 text-base opacity-20 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.04}px)` }}
      >
        ✦
      </div>

      {/* 4. PERSPECTIVE SOUND GRID (Subtle bottom horizon) */}
      <div 
        className="absolute bottom-0 inset-x-0 h-64 opacity-10 bg-[linear-gradient(to_right,#FF9F1C10_1px,transparent_1px),linear-gradient(to_bottom,#FF9F1C10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none"
      />

    </div>
  );
}
