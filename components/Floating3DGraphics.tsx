'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useAudio } from '../context/AudioContext';
import { Radio, Disc, Sparkles, Activity } from 'lucide-react';

export default function Floating3DGraphics() {
  const { isPlaying } = useAudio();
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [hasMouse, setHasMouse] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setHasMouse(true);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const vinylRotation = (scrollY * 0.25) % 360;

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden w-full max-w-full select-none"
    >
      
      {/* 1. ANALOG STUDIO TAPE MICRO-GRAIN TEXTURE (Gives charcoal #0D0F12 tactile physical warmth) */}
      <div className="absolute inset-0 studio-noise opacity-[0.035] pointer-events-none mix-blend-screen" />

      {/* 2. ACOUSTIC STUDIO DOT-MATRIX DIFFUSION GRID */}
      <div className="absolute inset-0 acoustic-grid opacity-60 pointer-events-none" />

      {/* 3. INTERACTIVE CURSOR SPOTLIGHT AURA (Follows mouse on desktop) */}
      {hasMouse && mousePos.x > -500 && (
        <div
          className="hidden md:block absolute rounded-full pointer-events-none transition-opacity duration-700 blur-3xl"
          style={{
            left: `${mousePos.x - 280}px`,
            top: `${mousePos.y - 280}px`,
            width: '560px',
            height: '560px',
            background: 'radial-gradient(circle, rgba(255, 159, 28, 0.08) 0%, rgba(217, 119, 6, 0.03) 40%, transparent 70%)',
            willChange: 'transform',
          }}
        />
      )}

      {/* 4. LIVING BREATHING AURORAL BLOBS */}
      {/* Gold Orb (Top-Right / Center) */}
      <div 
        className={`absolute -top-32 right-1/4 w-[520px] h-[520px] rounded-full blur-[130px] pointer-events-none animate-aurora-1 transition-opacity duration-1000 ${
          isPlaying 
            ? 'bg-gradient-to-br from-gold-500/20 via-amber-500/15 to-transparent opacity-90' 
            : 'bg-gradient-to-br from-gold-500/10 via-amber-500/08 to-transparent opacity-60'
        }`}
      />

      {/* Velvet Indigo / Deep Amber Orb (Mid-Left) */}
      <div 
        className={`absolute top-1/3 -left-36 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none animate-aurora-2 transition-opacity duration-1000 ${
          isPlaying 
            ? 'bg-gradient-to-tr from-amber-600/15 via-indigo-950/20 to-transparent opacity-80' 
            : 'bg-gradient-to-tr from-amber-600/08 via-indigo-950/10 to-transparent opacity-50'
        }`}
      />

      {/* Bottom Center Subtle Sunset Gold Bath */}
      <div className="absolute -bottom-40 left-1/3 -translate-x-1/2 w-[650px] h-[420px] bg-gradient-to-t from-gold-600/10 via-amber-500/05 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* 5. BROADCAST TELEMETRY & RADAR NODE (Top-Right Horizon) */}
      <div className="hidden lg:flex absolute top-24 right-8 flex-col items-end space-y-1 text-right pointer-events-none opacity-40 hover:opacity-80 transition-opacity">
        <div className="flex items-center gap-2">
          {/* Pulsing Radar Ring Anchor */}
          <div className="relative w-4 h-4 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="absolute w-6 h-6 rounded-full border border-emerald-400/40 animate-radar-ping" />
            <span className="absolute w-10 h-10 rounded-full border border-gold-500/20 animate-radar-ping" style={{ animationDelay: '2.5s' }} />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-400">
            TRANSMISSION ACTIVE // 101.4 FM WAT
          </span>
        </div>
        <div className="text-[9px] font-mono text-zinc-500 tracking-wider">
          NODE: RED HORN PALACE, IFE (LAT 7.48° N, LONG 4.56° E)
        </div>
        <div className="text-[8px] font-mono text-zinc-600">
          PCM LOSSLESS CARRIER • 24-BIT / 96KHZ • {isPlaying ? 'STREAM: LIVE BROADCAST' : 'STREAM: STANDBY'}
        </div>
      </div>

      {/* 6. BROADCAST FREQUENCY WATERMARK (Left Vertical Horizon on XL screens) */}
      <div className="hidden 2xl:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[9px] font-mono uppercase tracking-[0.35em] text-zinc-600/60 pointer-events-none">
        DOWNTOWN RADIO ✦ SOVEREIGN FREQUENCY ARCHIVE ✦ 101.4 FM WAT
      </div>

      {/* 7. LIVE AUDIO-REACTIVE SINE WAVE STRAND (Center-Mid Background) */}
      <div className="absolute top-[48%] inset-x-0 h-28 opacity-[0.08] pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full object-cover"
        >
          <path 
            d="M0,60 C120,20 240,100 360,60 C480,20 600,100 720,60 C840,20 960,100 1080,60 C1200,20 1320,100 1440,60" 
            stroke="url(#wave-gradient)" 
            strokeWidth={isPlaying ? '2.5' : '1.5'} 
            strokeDasharray={isPlaying ? 'none' : '4 4'}
          />
          <path 
            d="M0,60 C140,90 280,30 420,60 C560,90 700,30 840,60 C980,90 1120,30 1260,60 C1350,80 1410,50 1440,60" 
            stroke="url(#wave-gradient-gold)" 
            strokeWidth="1" 
            opacity="0.6"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF9F1C" stopOpacity="0" />
              <stop offset="0.2" stopColor="#FF9F1C" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#FCD34D" stopOpacity="1" />
              <stop offset="0.8" stopColor="#FF9F1C" stopOpacity="0.8" />
              <stop offset="1" stopColor="#FF9F1C" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wave-gradient-gold" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FFB834" stopOpacity="0.6" />
              <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 8. FLOATING GOLDEN STUDIO FREQUENCY DUST PARTICLES */}
      <div className="absolute left-[18%] top-[25%] text-gold-400 text-xs animate-dust-1 pointer-events-none">
        ✦
      </div>
      <div className="absolute right-[22%] top-[40%] text-amber-300 text-sm animate-dust-2 pointer-events-none">
        ✦
      </div>
      <div className="absolute left-[12%] top-[65%] text-gold-300 text-xs animate-dust-3 pointer-events-none">
        ✦
      </div>
      <div className="absolute right-[14%] top-[78%] text-amber-400 text-[10px] animate-dust-1 pointer-events-none">
        ◆
      </div>
      <div className="absolute left-[35%] top-[85%] text-gold-500 text-xs animate-dust-2 pointer-events-none">
        ✦
      </div>
      <div className="absolute right-[38%] top-[18%] text-amber-200 text-[9px] animate-dust-3 pointer-events-none">
        ◆
      </div>

      {/* 9. 3D FLOATING MASTER VINYL RECORD (Right side on desktop, interactive spin) */}
      <div 
        className="hidden xl:block absolute -right-28 top-80 transition-transform duration-700 ease-out opacity-30 hover:opacity-60"
        style={{
          transform: `translateY(${scrollY * 0.12}px) rotate(${vinylRotation}deg) rotateY(-20deg)`,
          perspective: '1200px',
        }}
      >
        <div className={`relative w-80 h-80 rounded-full bg-gradient-to-tr from-charcoal-950 via-[#181B22] to-charcoal-950 border-4 border-gold-500/30 shadow-[0_20px_60px_rgba(255,159,28,0.25)] flex items-center justify-center p-2.5 ${isPlaying ? 'animate-vinyl-continuous' : ''}`}>
          
          {/* Concentric Vinyl Sound Grooves */}
          <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-3">
            <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-3">
              <div className="w-full h-full rounded-full border border-white/10 flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-3">
                  <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-3">
                    
                    {/* Vinyl Center Gold Label */}
                    <div className="w-24 h-24 rounded-full bg-gold-gradient shadow-gold-glow border-2 border-charcoal-950 flex flex-col items-center justify-center text-charcoal-950 text-center p-2">
                      <span className="text-[8px] font-black uppercase tracking-tight">
                        DOWNTOWN
                      </span>
                      <span className="text-[7px] font-extrabold flex items-center gap-0.5">
                        <span>RADIO</span>
                        <span className="text-charcoal-900">✦</span>
                      </span>
                      {/* Spindle hole */}
                      <div className="w-3.5 h-3.5 rounded-full bg-charcoal-950 my-0.5 border border-white/20" />
                      <span className="text-[6px] font-mono font-black uppercase tracking-wider">
                        33⅓ RPM
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Anisotropic Light Sheen Reflection Sweep */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/8 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 10. 3D FLOATING MASTER REEL CASSETTE (Left side on desktop) */}
      <div 
        className="hidden 2xl:block absolute -left-20 top-[1100px] transition-transform duration-1000 ease-out opacity-25 hover:opacity-45"
        style={{
          transform: `translateY(${scrollY * -0.06}px) rotate(${12 + scrollY * 0.04}deg) rotateX(15deg)`,
          perspective: '1000px',
        }}
      >
        <div className="w-64 h-40 rounded-2xl bg-charcoal-900/95 border-2 border-gold-500/30 p-3.5 shadow-gold-glow flex flex-col justify-between backdrop-blur-md">
          <div className="flex items-center justify-between text-[8px] font-mono font-bold text-gold-400 border-b border-white/10 pb-1">
            <span>MASTER CASSETTE NODE</span>
            <span className="text-zinc-400">TYPE II • 90 MIN</span>
          </div>

          {/* Cassette Tape Spools */}
          <div className="flex items-center justify-center space-x-6 my-auto">
            <div 
              className="w-11 h-11 rounded-full border-2 border-gold-500/50 flex items-center justify-center"
              style={{ transform: `rotate(${scrollY * 0.4 + (isPlaying ? 360 : 0)}deg)` }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-gold-500" />
            </div>
            <div className="w-16 h-7 rounded-md bg-charcoal-950 border border-white/10 flex items-center justify-center">
              <span className="text-[8px] font-mono font-bold text-gold-400">SIDE A</span>
            </div>
            <div 
              className="w-11 h-11 rounded-full border-2 border-gold-500/50 flex items-center justify-center"
              style={{ transform: `rotate(${scrollY * 0.4 + (isPlaying ? 360 : 0)}deg)` }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-gold-500" />
            </div>
          </div>

          <div className="text-[7px] font-mono text-zinc-500 text-center tracking-wider">
            RED HORN ROOFTOP GATHERING • ILE-IFE LIVE
          </div>
        </div>
      </div>

      {/* 11. HORIZON PERSPECTIVE SOUND GRID (Subtle bottom horizon) */}
      <div 
        className="absolute bottom-0 inset-x-0 h-72 opacity-15 bg-[linear-gradient(to_right,#FF9F1C12_1px,transparent_1px),linear-gradient(to_bottom,#FF9F1C12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_100%,#000_60%,transparent_100%)] pointer-events-none"
      />

    </div>
  );
}
