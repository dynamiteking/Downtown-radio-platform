'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '../context/StoreContext';
import { 
  Radio, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Disc, 
  Calendar, 
  Share2, 
  Crown,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Globe2
} from 'lucide-react';

export default function Footer() {
  const { setActiveTab, setUserRole, setOnboardingModalOpen } = useStore();

  return (
    <footer className="border-t border-white/5 bg-charcoal-950 pt-16 pb-32 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info & Official Socials */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-gold-500 shadow-gold-glow flex-shrink-0 bg-gold-500">
                <img
                  src="/images/downtown-radio-logo.jpg"
                  alt="Downtown Radio Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                />
              </div>
              <div className="text-left">
                <div className="text-base font-black text-white tracking-tight">
                  DOWNTOWN <span className="text-gold-500 font-extrabold">RADIO</span> <span className="text-xs text-gold-400">✦</span>
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">
                  The Indie Sound Ecosystem
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Empowering African independent recording artists through uncompressed streaming, direct fan tipping in Naira, and curated live festival showcases.
            </p>

            <div className="text-[11px] text-zinc-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Broadcast Node: Red Horn, Ife, Osun State</span>
            </div>

            {/* Official Social Handles */}
            <div className="pt-2 space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                Official Channels
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href="https://instagram.com/downtownradio.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-charcoal-900 border border-white/5 text-zinc-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                  title="Instagram: @downtownradio.ng"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/downtownradio_ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-charcoal-900 border border-white/5 text-zinc-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                  title="X (Twitter): @downtownradio.ng"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@downtownradio.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-charcoal-900 border border-white/5 text-zinc-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                  title="YouTube: @downtownradio.ng"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@downtownradio.ng"
                  className="p-2 rounded-xl bg-charcoal-900 border border-white/5 text-zinc-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                  title="Email: hello@downtownradio.ng"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="text-xs font-mono font-semibold text-zinc-300">
                @downtownradio.ng
              </div>
            </div>

          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/fan-hub"
                  className="hover:text-gold-400 transition-colors"
                >
                  Trending Indie Music Feed
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-gold-400 transition-colors text-gold-400 font-semibold flex items-center gap-1"
                >
                  <span>Royal Rave Festival (Red Horn)</span>
                  <span className="text-[9px] bg-gold-500/20 px-1.5 py-0.2 rounded border border-gold-500/30">NOV 14</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/events#ticket-booking-section"
                  className="hover:text-gold-400 transition-colors"
                >
                  Buy Festival Tickets
                </Link>
              </li>
              <li>
                <Link
                  href="/about#dk-visionary"
                  className="hover:text-gold-400 transition-colors text-gold-300 font-semibold flex items-center gap-1"
                >
                  <span>DK — The Mind Behind Downtown</span>
                  <span className="text-[9px] bg-gold-500/20 px-1.5 py-0.2 rounded border border-gold-500/30">CEO</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold-400 transition-colors"
                >
                  Global DSP Distribution
                </Link>
              </li>
            </ul>
          </div>

          {/* For Artists */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Artist Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/artist-dashboard"
                  onClick={() => setUserRole('artist')}
                  className="hover:text-gold-400 transition-colors"
                >
                  Artist Dashboard & Earnings
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setUserRole('artist');
                    setOnboardingModalOpen(true);
                  }}
                  className="hover:text-gold-400 transition-colors"
                >
                  Register New Artist Profile
                </button>
              </li>
              <li>
                <Link
                  href="/about#pro"
                  className="hover:text-gold-400 transition-colors text-gold-400 font-semibold flex items-center gap-1"
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span>Downtown Pro (₦5,000/mo)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#distribution"
                  className="hover:text-gold-400 transition-colors"
                >
                  Automated Royalty Splits
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Support & CBN Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Fan Monetization
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Fan tips are routed through certified Nigerian payment switches (Paystack & Flutterwave) compliant with Central Bank of Nigeria fintech frameworks.
            </p>
            <div className="p-3 rounded-xl bg-charcoal-900 border border-white/5 text-[11px] text-zinc-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>100% Secure Naira Transfers to Kuda, GTB, Zenith & OPay</span>
            </div>
            <div className="text-[11px] text-zinc-500 font-mono space-y-1">
              <div>Direct Support: <a href="mailto:hello@downtownradio.ng" className="text-gold-400 hover:underline">hello@downtownradio.ng</a></div>
              <div>CEO Office (DK): <a href="mailto:dynamiteking1@gmail.com" className="text-gold-400 hover:underline">dynamiteking1@gmail.com</a></div>
            </div>
          </div>

        </div>

        {/* Bottom copyright (Clean, no framework text) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} Downtown Radio Platform Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-zinc-400">
            <a href="https://instagram.com/downtownradio.ng" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              @downtownradio.ng
            </a>
            <span className="hover:text-gold-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gold-400 cursor-pointer">Artist Master Terms</span>
            <span className="hover:text-gold-400 cursor-pointer">Editorial Submission Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
