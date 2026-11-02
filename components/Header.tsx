'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { 
  Radio, 
  Sparkles, 
  Disc, 
  Calendar, 
  Share2, 
  Crown, 
  User, 
  Menu, 
  X, 
  LayoutDashboard,
  Music2,
  Ticket,
  Mail,
  Sun,
  Moon,
  Headphones
} from 'lucide-react';

export default function Header() {
  const { 
    userRole, 
    setUserRole, 
    openAuthModal, 
    setOnboardingModalOpen,
    setOpenLetterOpen,
    theme,
    toggleTheme
  } = useStore();

  const { isPlaying } = useAudio();
  const pathname = usePathname() || '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Gateway', icon: <Radio className="w-3.5 h-3.5" /> },
    { href: '/fan-hub', label: 'Music Hub', icon: <Disc className="w-3.5 h-3.5" /> },
    { href: '/events', label: 'Events & Tickets', icon: <Calendar className="w-3.5 h-3.5" />, badge: '4 Slots' },
    { href: '/artist-dashboard', label: 'Artist Portal', icon: <LayoutDashboard className="w-3.5 h-3.5" />, badge: 'PRO' },
    { href: '/about', label: 'About & Ecosystem', icon: <Crown className="w-3.5 h-3.5 text-gold-400" /> },
  ];

  const isNavActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-charcoal-900/90 backdrop-blur-xl border-b border-white/5 transition-all shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 w-full">
          
          {/* ZONE 1: BRAND IDENTITY (LEFT) */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2.5 sm:space-x-3 group focus:outline-none text-left"
            >
              {/* Official Downtown Radio Logo */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gold-500 shadow-gold-glow group-hover:scale-105 group-hover:shadow-gold-glow-lg transition-all duration-300 bg-gold-500 flex-shrink-0">
                <img
                  src="/images/downtown-radio-logo.jpg"
                  alt="Downtown Radio Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {isPlaying && (
                  <div className="absolute inset-x-0 bottom-0 h-1.5 bg-black/60 flex items-end justify-center gap-0.5 pb-0.5">
                    <span className="w-1 bg-gold-400 rounded-full animate-spectrum" style={{ animationDelay: '0.1s' }} />
                    <span className="w-1 bg-gold-400 rounded-full animate-spectrum" style={{ animationDelay: '0.3s' }} />
                    <span className="w-1 bg-gold-400 rounded-full animate-spectrum" style={{ animationDelay: '0.2s' }} />
                  </div>
                )}
              </div>

              {/* Wordmark with Retro Star & Broadcaster Tag */}
              <div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="text-base sm:text-lg font-black tracking-tight text-white uppercase group-hover:text-gold-400 transition-colors">
                    DOWNTOWN
                  </span>
                  <span className="text-base sm:text-lg font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">
                    RADIO
                  </span>
                  <span className="text-xs text-gold-400 animate-pulse">✦</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] tracking-wider text-zinc-400 font-mono">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Red Horn • Ife, Osun State</span>
                </div>
              </div>
            </Link>
          </div>

          {/* ZONE 2: PRIMARY NAVIGATION DOCK (CENTER) */}
          <nav className="hidden lg:flex items-center p-1 rounded-2xl bg-charcoal-800/60 border border-white/5 backdrop-blur-md space-x-1">
            {navItems.map(item => {
              const active = isNavActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    active
                      ? 'text-gold-400 bg-charcoal-900 border border-gold-500/30 shadow-glass-edge'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-gold-500/20 text-gold-300 border border-gold-500/30">
                      {item.badge}
                    </span>
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ZONE 3: ACTIONS & CTAs (RIGHT) */}
          <div className="hidden sm:flex items-center space-x-2.5">
            
            {/* 🎟️ High-Contrast Festival Tickets Button */}
            <Link
              href="/events#ticket-booking-section"
              className="px-3.5 py-2 rounded-xl text-xs font-black text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-200 transform active:scale-95 flex items-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5 text-charcoal-950" />
              <span>🎟️ Get Tickets</span>
            </Link>

            {/* 👑 DK — The Mind Behind Downtown Radio */}
            <Link
              href="/about#dk-visionary"
              className="px-3 py-2 rounded-xl text-xs font-bold text-gold-300 hover:text-white bg-charcoal-800/60 hover:bg-charcoal-700/80 border border-gold-500/30 transition-all flex items-center gap-1.5 shadow-sm"
              title="DK — Pioneer & CEO"
            >
              <Crown className="w-3.5 h-3.5 text-gold-400" />
              <span>DK (CEO)</span>
            </Link>

            {/* 💌 Manifesto Trigger */}
            <button
              onClick={() => setOpenLetterOpen(true)}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-amber-400 hover:text-white bg-charcoal-800/60 hover:bg-charcoal-700/80 border border-amber-500/30 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Manifesto</span>
            </button>

            {/* 🌓 Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-zinc-300 hover:text-gold-400 bg-charcoal-800/80 hover:bg-charcoal-700/80 border border-white/10 transition-all flex items-center justify-center gap-1.5 text-xs font-semibold"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden xl:inline text-[11px] font-mono">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-amber-400" />
                  <span className="hidden xl:inline text-[11px] font-mono">Dark</span>
                </>
              )}
            </button>

            {/* Fan Sign In */}
            <button
              onClick={() => openAuthModal('fan-login')}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Fan Sign In"
            >
              <User className="w-4 h-4" />
            </button>

          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-300 bg-charcoal-800 border border-white/10"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-amber-400" />}
            </button>
            <Link
              href="/events#ticket-booking-section"
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center gap-1"
            >
              <Ticket className="w-3 h-3 text-charcoal-950" />
              <span>Tickets</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-400 hover:text-white bg-charcoal-800 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navItems.map(item => {
              const active = isNavActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                    active
                      ? 'text-gold-400 bg-charcoal-800 border border-gold-500/30'
                      : 'text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <Link
              href="/events#ticket-booking-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow text-center mt-2"
            >
              <Ticket className="w-4 h-4 text-charcoal-950" />
              <span>🎟️ Get Festival Tickets (Red Horn)</span>
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setOpenLetterOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 text-center"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Read The Artist Manifesto</span>
            </button>

            <Link
              href="/about#dk-visionary"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-gold-300 bg-gold-500/10 border border-gold-500/30 text-center"
            >
              <Crown className="w-3.5 h-3.5 text-gold-400" />
              <span>DK — The Mind Behind Downtown Radio</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAuthModal('fan-login');
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-charcoal-800 border border-white/10 text-center"
            >
              Fan Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setUserRole('artist');
                setOnboardingModalOpen(true);
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow text-center"
            >
              Register Artist
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
