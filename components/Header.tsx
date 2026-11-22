'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '../context/StoreContext';
import { useAudio } from '../context/AudioContext';
import { siteConfig, isEventVerified } from '../src/config/site';
import { 
  Radio, 
  Disc, 
  Calendar, 
  LayoutDashboard,
  Crown, 
  Menu, 
  X, 
  Ticket, 
  Sun, 
  Moon,
  BellRing,
  ExternalLink
} from 'lucide-react';

export default function Header() {
  const { 
    openAuthModal, 
    setProModalOpen,
    theme,
    toggleTheme,
    events
  } = useStore();

  const { isPlaying } = useAudio();
  const pathname = usePathname() || '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if any event is verified
  const hasVerifiedEvent = events.some(e => isEventVerified(e));

  // The 5 core navigation items specified in requirements
  const coreNavItems = [
    { href: '/fan-hub', label: 'Music Hub', icon: <Disc className="w-3.5 h-3.5" /> },
    { href: '/events', label: 'Events', icon: <Calendar className="w-3.5 h-3.5" />, badge: 'TBE' },
    { href: '/artist-dashboard', label: 'Artists', icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
    { href: '#pro', label: 'Pro', icon: <Crown className="w-3.5 h-3.5 text-gold-400" />, isModal: true },
    { href: '/about', label: 'About', icon: <Radio className="w-3.5 h-3.5" /> },
  ];

  const isNavActive = (href: string) => {
    if (href === '#pro') return false;
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

              {/* Wordmark with Retro Star & Broadcaster Frequency Tag */}
              <div className="min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="text-sm xs:text-base sm:text-lg font-black tracking-tight text-white uppercase group-hover:text-gold-400 transition-colors">
                    DOWNTOWN
                  </span>
                  <span className="text-sm xs:text-base sm:text-lg font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-500">
                    RADIO
                  </span>
                  <span className="text-xs text-gold-400 animate-pulse hidden xs:inline">✦</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] xs:text-[10px] tracking-wider text-zinc-400 font-mono truncate">
                  <span className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-gold-500'}`} />
                  <span>101.4 FM WAT</span>
                  <span className="hidden sm:inline">• Sovereign Sound</span>
                </div>
              </div>
            </Link>
          </div>

          {/* ZONE 2: PRIMARY NAVIGATION DOCK (CENTER — Exactly 5 core links) */}
          <nav className="hidden lg:flex items-center p-1 rounded-2xl bg-charcoal-800/60 border border-white/5 backdrop-blur-md space-x-1">
            {coreNavItems.map(item => {
              if (item.isModal) {
                return (
                  <button
                    key={item.label}
                    onClick={() => setProModalOpen(true)}
                    className="relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 text-zinc-300 hover:text-white hover:bg-white/5"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                );
              }

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

          {/* ZONE 3: ACTIONS & CTAs (RIGHT — 1 Primary CTA + Theme Toggle) */}
          <div className="hidden sm:flex items-center space-x-2.5 flex-shrink-0">
            
            {/* Primary CTA Button: Get Tickets (verified) or Events (TBE) / Join Alert */}
            <Link
              href="/events#tbe-alert"
              className="px-4 py-2 rounded-xl text-xs font-black text-charcoal-950 bg-gold-gradient shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-200 transform active:scale-95 flex items-center gap-1.5 whitespace-nowrap"
            >
              {hasVerifiedEvent ? (
                <>
                  <Ticket className="w-3.5 h-3.5 text-charcoal-950" />
                  <span>Get Tickets</span>
                </>
              ) : (
                <>
                  <BellRing className="w-3.5 h-3.5 text-charcoal-950 animate-bounce" />
                  <span>Events (TBE) • Join Alert</span>
                </>
              )}
            </Link>

            {/* 🌓 Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-zinc-300 hover:text-gold-400 bg-charcoal-800/80 hover:bg-charcoal-700/80 border border-white/10 transition-all flex items-center justify-center gap-1.5 text-xs font-semibold flex-shrink-0"
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

          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex sm:hidden items-center space-x-1.5 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-zinc-300 bg-charcoal-800 border border-white/10 flex-shrink-0"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-amber-400" />}
            </button>
            <Link
              href="/events#tbe-alert"
              className="px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-charcoal-950 bg-gold-gradient shadow-gold-glow flex items-center gap-1 flex-shrink-0 whitespace-nowrap"
            >
              <BellRing className="w-3 h-3 text-charcoal-950" />
              <span>TBE Alert</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-400 hover:text-white bg-charcoal-800 border border-white/10 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE HAMBURGER DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fade-in">
          <div className="space-y-1">
            {coreNavItems.map(item => {
              if (item.isModal) {
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setProModalOpen(true);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300">
                      ₦5,000/mo
                    </span>
                  </button>
                );
              }

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

            {/* Primary CTA in Mobile Drawer */}
            <Link
              href="/events#tbe-alert"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black text-charcoal-950 bg-gold-gradient shadow-gold-glow text-center mt-3"
            >
              {hasVerifiedEvent ? (
                <>
                  <Ticket className="w-4 h-4 text-charcoal-950" />
                  <span>Get Festival Tickets</span>
                </>
              ) : (
                <>
                  <BellRing className="w-4 h-4 text-charcoal-950" />
                  <span>Events (TBE) • Join Alert List</span>
                </>
              )}
            </Link>
          </div>

          {/* Social Links & Official Handle in Drawer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 px-1 font-mono">
            <span>Official Socials</span>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:underline flex items-center gap-1 font-bold"
            >
              <span>{siteConfig.socials.handle}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
