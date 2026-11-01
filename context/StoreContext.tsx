'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';
import {
  Track,
  Artist,
  EventItem,
  PitchSubmission,
  DistributionRelease,
  LeaderboardFan,
  FanMessage,
} from '../types';
import {
  INITIAL_TRACKS,
  CURRENT_ARTIST,
  INITIAL_EVENTS,
  INITIAL_PITCHES,
  INITIAL_RELEASES,
  INITIAL_LEADERBOARD,
  INITIAL_FAN_MESSAGES,
} from '../data/mockData';

export type NavTab = 'gateway' | 'fan-hub' | 'events' | 'about' | 'artist-dashboard' | 'discover' | 'distribution' | 'pro';

interface ToastState {
  id: string;
  title: string;
  message: string;
  type: 'gold' | 'success' | 'info';
}

interface StoreContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  userRole: 'fan' | 'artist';
  setUserRole: (role: 'fan' | 'artist') => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
  currentArtist: Artist;
  setCurrentArtist: React.Dispatch<React.SetStateAction<Artist>>;
  tracks: Track[];
  events: EventItem[];
  pitches: PitchSubmission[];
  releases: DistributionRelease[];
  leaderboard: LeaderboardFan[];
  fanMessages: FanMessage[];
  // Modals
  tippingModalOpen: boolean;
  tippingTrack: Track | null;
  openTippingModal: (track?: Track) => void;
  closeTippingModal: () => void;
  pitchModalOpen: boolean;
  pitchEvent: EventItem | null;
  openPitchModal: (event: EventItem) => void;
  closePitchModal: () => void;
  distributionModalOpen: boolean;
  setDistributionModalOpen: (open: boolean) => void;
  authModalOpen: boolean;
  authMode: 'fan-login' | 'artist-register';
  openAuthModal: (mode?: 'fan-login' | 'artist-register') => void;
  closeAuthModal: () => void;
  proModalOpen: boolean;
  setProModalOpen: (open: boolean) => void;
  onboardingModalOpen: boolean;
  setOnboardingModalOpen: (open: boolean) => void;
  openLetterOpen: boolean;
  setOpenLetterOpen: (open: boolean) => void;
  ticketModalOpen: boolean;
  setTicketModalOpen: (open: boolean) => void;
  // Theme
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  toggleTheme: () => void;
  // Actions
  handleSendTip: (amount: number, fanName: string, fanEmail: string, message: string, gateway: 'paystack' | 'flutterwave') => void;
  handleSubmitPitch: (pitchData: Omit<PitchSubmission, 'id' | 'status' | 'submittedAt'>) => void;
  handleSubmitRelease: (releaseData: Omit<DistributionRelease, 'id' | 'status' | 'isrc' | 'upc'>) => void;
  handleRegisterArtist: (artistData: Partial<Artist>) => void;
  handleUpgradeToPro: () => void;
  toggleLikeTrack: (trackId: string) => void;
  toasts: ToastState[];
  removeToast: (id: string) => void;
  addToast: (title: string, message: string, type?: 'gold' | 'success' | 'info') => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [activeTab, setActiveTabState] = useState<NavTab>('gateway');

  const setActiveTab = (tab: NavTab) => {
    setActiveTabState(tab);
    try {
      if (tab === 'gateway') {
        router.push('/');
      } else if (tab === 'fan-hub' || tab === 'discover') {
        router.push('/fan-hub');
      } else if (tab === 'events') {
        router.push('/events');
      } else if (tab === 'about' || tab === 'distribution' || tab === 'pro') {
        router.push('/about');
      } else if (tab === 'artist-dashboard') {
        router.push('/artist-dashboard');
      }
    } catch (e) {
      // safe fallback
    }
  };
  const [userRole, setUserRole] = useState<'fan' | 'artist'>('fan');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  
  const [currentArtist, setCurrentArtist] = useState<Artist>(CURRENT_ARTIST);
  const [tracks, setTracks] = useState<Track[]>(INITIAL_TRACKS);
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [pitches, setPitches] = useState<PitchSubmission[]>(INITIAL_PITCHES);
  const [releases, setReleases] = useState<DistributionRelease[]>(INITIAL_RELEASES);
  const [leaderboard, setLeaderboard] = useState<LeaderboardFan[]>(INITIAL_LEADERBOARD);
  const [fanMessages, setFanMessages] = useState<FanMessage[]>(INITIAL_FAN_MESSAGES);

  // Modals state
  const [tippingModalOpen, setTippingModalOpen] = useState(false);
  const [tippingTrack, setTippingTrack] = useState<Track | null>(null);

  const [pitchModalOpen, setPitchModalOpen] = useState(false);
  const [pitchEvent, setPitchEvent] = useState<EventItem | null>(null);

  const [distributionModalOpen, setDistributionModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'fan-login' | 'artist-register'>('fan-login');
  const [proModalOpen, setProModalOpen] = useState(false);
  const [onboardingModalOpen, setOnboardingModalOpen] = useState(false);
  const [openLetterOpen, setOpenLetterOpen] = useState(false);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [theme, setThemeState] = useState<'dark' | 'light'>('dark');

  // Sync theme with document class and localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('downtown_theme') as 'dark' | 'light' | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setThemeState(savedTheme);
        document.documentElement.classList.toggle('light', savedTheme === 'light');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } catch (e) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const setTheme = (newTheme: 'dark' | 'light') => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('downtown_theme', newTheme);
    } catch (e) {}
    document.documentElement.classList.toggle('light', newTheme === 'light');
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Toast system
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const addToast = (title: string, message: string, type: 'gold' | 'success' | 'info' = 'gold') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const openTippingModal = (track?: Track) => {
    setTippingTrack(track || tracks[0]);
    setTippingModalOpen(true);
  };

  const closeTippingModal = () => {
    setTippingModalOpen(false);
    setTippingTrack(null);
  };

  const openPitchModal = (event: EventItem) => {
    setPitchEvent(event);
    setPitchModalOpen(true);
  };

  const closePitchModal = () => {
    setPitchModalOpen(false);
    setPitchEvent(null);
  };

  const openAuthModal = (mode: 'fan-login' | 'artist-register' = 'fan-login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  // Crucial Feature: Send Tip
  const handleSendTip = (
    amount: number,
    fanName: string,
    fanEmail: string,
    message: string,
    gateway: 'paystack' | 'flutterwave'
  ) => {
    if (!tippingTrack) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF9F1C', '#FFD166', '#FFE29F', '#FFFFFF'],
      });
    } catch (e) {
      // safe fallback
    }

    // 1. Update Track Tips
    setTracks(prev =>
      prev.map(t => {
        if (t.id === tippingTrack.id) {
          return {
            ...t,
            tipCount: t.tipCount + 1,
            totalTips: t.totalTips + amount,
          };
        }
        return t;
      })
    );

    // 2. Update Artist Earnings
    setCurrentArtist(prev => ({
      ...prev,
      totalTipsEarned: prev.totalTipsEarned + amount,
    }));

    // 3. Add to Direct Fan Messages for Artist
    const newMsg: FanMessage = {
      id: 'msg-' + Date.now(),
      fanName: fanName || 'Generous Fan',
      fanAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
      amount,
      message: message || 'Big love and endless support for your music!',
      trackTitle: tippingTrack.title,
      date: 'Just now',
      replied: false,
    };
    setFanMessages(prev => [newMsg, ...prev]);

    // 4. Update Leaderboard
    setLeaderboard(prev => {
      const existingIndex = prev.findIndex(item => item.name.toLowerCase() === fanName.toLowerCase());
      let updated = [...prev];
      if (existingIndex >= 0) {
        updated[existingIndex] = {
          ...updated[existingIndex],
          totalTipped: updated[existingIndex].totalTipped + amount,
        };
      } else {
        updated.push({
          id: 'fan-' + Date.now(),
          name: fanName || 'Anonymous VIP',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
          rank: prev.length + 1,
          totalTipped: amount,
          badge: 'Supporter Tier',
          favoriteArtist: tippingTrack.artist,
          verifiedFan: false,
        });
      }
      // Re-sort and rank
      return updated
        .sort((a, b) => b.totalTipped - a.totalTipped)
        .map((fan, index) => ({
          ...fan,
          rank: index + 1,
          badge:
            index === 0
              ? 'Royal Patron (Gold)'
              : index === 1
              ? 'Mainland Heavyweight'
              : index === 2
              ? 'Sonic Connoisseur'
              : 'Community Patron',
        }));
    });

    // 5. Toast Notification
    addToast(
      'Tip Sent Successfully!',
      `₦${amount.toLocaleString()} tip routed via ${gateway.toUpperCase()} to ${tippingTrack.artist}. You earned +${Math.round(amount / 50)} Fan XP!`,
      'gold'
    );

    closeTippingModal();
  };

  // Crucial Feature: Pitch to Perform submission
  const handleSubmitPitch = (pitchData: Omit<PitchSubmission, 'id' | 'status' | 'submittedAt'>) => {
    const newPitch: PitchSubmission = {
      id: 'pitch-' + Date.now(),
      ...pitchData,
      status: 'Pending',
      submittedAt: 'Just now',
    };

    setPitches(prev => [newPitch, ...prev]);
    setCurrentArtist(prev => ({
      ...prev,
      pendingApplications: prev.pendingApplications + 1,
    }));

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF9F1C', '#00F5D4', '#FFFFFF'],
      });
    } catch (e) {}

    addToast(
      'Performance Pitch Submitted!',
      `Your pitch for "${pitchData.eventTitle}" was received and routed to the A&R curation board.`,
      'gold'
    );

    closePitchModal();
  };

  // Submit master distribution
  const handleSubmitRelease = (releaseData: Omit<DistributionRelease, 'id' | 'status' | 'isrc' | 'upc'>) => {
    const newRelease: DistributionRelease = {
      id: 'rel-' + Date.now(),
      ...releaseData,
      status: 'Processing',
      upc: '79' + Math.floor(1000000000 + Math.random() * 9000000000),
      isrc: `NG-DR-26-${Math.floor(10000 + Math.random() * 90000)}`,
    };

    setReleases(prev => [newRelease, ...prev]);
    setDistributionModalOpen(false);

    addToast(
      'Master Distribution Scheduled!',
      `"${newRelease.title}" is queued for ingest across ${newRelease.stores.length} platforms. Master UPC & ISRC codes generated.`,
      'gold'
    );
  };

  // Artist registration & onboarding
  const handleRegisterArtist = (data: Partial<Artist>) => {
    const updatedArtist: Artist = {
      ...currentArtist,
      stageName: data.stageName || currentArtist.stageName,
      genre: data.genre || currentArtist.genre,
      bio: data.bio || currentArtist.bio,
      avatarUrl: data.avatarUrl || currentArtist.avatarUrl,
      spotifyUrl: data.spotifyUrl || currentArtist.spotifyUrl,
      appleMusicUrl: data.appleMusicUrl || currentArtist.appleMusicUrl,
      instagram: data.instagram || currentArtist.instagram,
      twitter: data.twitter || currentArtist.twitter,
    };

    setCurrentArtist(updatedArtist);
    setUserRole('artist');
    setActiveTab('artist-dashboard');
    setOnboardingModalOpen(false);
    closeAuthModal();

    addToast(
      'Welcome to Downtown Radio!',
      `Artist Profile for ${updatedArtist.stageName} is live. Your artist portal and tip dashboard are ready.`,
      'gold'
    );
  };

  const handleUpgradeToPro = () => {
    setCurrentArtist(prev => ({
      ...prev,
      isPro: true,
    }));
    setProModalOpen(false);

    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#FF9F1C', '#FFD166', '#FFE29F'],
      });
    } catch (e) {}

    addToast(
      'Downtown Pro Activated!',
      'You unlocked 0% tip commission, priority festival pitching & 24hr distribution.',
      'gold'
    );
  };

  const toggleLikeTrack = (trackId: string) => {
    setTracks(prev =>
      prev.map(t => {
        if (t.id === trackId) {
          const nextLiked = !t.liked;
          addToast(
            nextLiked ? 'Added to Loved Tracks' : 'Removed from Loved Tracks',
            nextLiked ? `"${t.title}" saved to your Downtown favorites.` : '',
            'info'
          );
          return { ...t, liked: nextLiked };
        }
        return t;
      })
    );
  };

  return (
    <StoreContext.Provider
      value={{
        activeTab,
        setActiveTab,
        userRole,
        setUserRole,
        isLoggedIn,
        setIsLoggedIn,
        currentArtist,
        setCurrentArtist,
        tracks,
        events,
        pitches,
        releases,
        leaderboard,
        fanMessages,
        tippingModalOpen,
        tippingTrack,
        openTippingModal,
        closeTippingModal,
        pitchModalOpen,
        pitchEvent,
        openPitchModal,
        closePitchModal,
        distributionModalOpen,
        setDistributionModalOpen,
        authModalOpen,
        authMode,
        openAuthModal,
        closeAuthModal,
        proModalOpen,
        setProModalOpen,
        onboardingModalOpen,
        setOnboardingModalOpen,
        openLetterOpen,
        setOpenLetterOpen,
        ticketModalOpen,
        setTicketModalOpen,
        theme,
        setTheme,
        toggleTheme,
        handleSendTip,
        handleSubmitPitch,
        handleSubmitRelease,
        handleRegisterArtist,
        handleUpgradeToPro,
        toggleLikeTrack,
        toasts,
        removeToast,
        addToast,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
