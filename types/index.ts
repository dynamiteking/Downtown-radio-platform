export interface Track {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  genre: string;
  duration: number; // in seconds
  audioUrl?: string;
  synthesizerKey?: string; // used for dynamic web audio synth playback
  coverUrl: string;
  streams: number;
  tipCount: number;
  totalTips: number; // in Naira
  isPro?: boolean;
  bpm?: number;
  releaseDate: string;
  description?: string;
  liked?: boolean;
}

export interface Artist {
  id: string;
  stageName: string;
  realName: string;
  genre: string;
  bio: string;
  avatarUrl: string;
  bannerUrl: string;
  verified: boolean;
  isPro: boolean;
  monthlyListeners: number;
  totalStreams: number;
  totalTipsEarned: number;
  pendingApplications: number;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  audiomackUrl?: string;
  instagram?: string;
  twitter?: string;
  bankName?: string;
  accountNumber?: string;
}

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  capacity: string;
  bannerUrl: string;
  status: 'Open for Pitching' | 'Reviewing' | 'Sold Out' | 'Upcoming' | 'To Be Announced (TBA)';
  pitchDeadline: string;
  slotsAvailable: number;
  description: string;
  perks: string[];
  headliners?: string[];
  vibe: string;
}

export interface PitchSubmission {
  id: string;
  eventId: string;
  eventTitle: string;
  artistId: string;
  artistName: string;
  trackTitle: string;
  trackAudioMockName?: string;
  requestedSlot: string; // e.g., 'Headline (12:00 AM)', 'Prime Alté (10:30 PM)', 'Opening Act (8:00 PM)', 'Midnight Chill (1:30 AM)'
  epkUrl: string;
  livePerformanceLink: string;
  message: string;
  status: 'Pending' | 'Under Review' | 'Shortlisted' | 'Confirmed' | 'Declined';
  submittedAt: string;
}

export interface DistributionRelease {
  id: string;
  title: string;
  artistName: string;
  releaseType: 'Single' | 'EP' | 'Album';
  genre: string;
  upc: string;
  isrc: string;
  releaseDate: string;
  status: 'Draft' | 'Processing' | 'Delivered to Stores' | 'Live';
  stores: string[];
  splitPercentages: { name: string; percentage: number }[];
  coverUrl: string;
}

export interface FanTip {
  id: string;
  trackId: string;
  trackTitle: string;
  artistId: string;
  artistName: string;
  fanName: string;
  fanEmail: string;
  amount: number;
  message: string;
  timestamp: string;
  paymentGateway: 'paystack' | 'flutterwave';
}

export interface LeaderboardFan {
  id: string;
  name: string;
  avatar: string;
  rank: number;
  totalTipped: number;
  badge: string;
  favoriteArtist: string;
  verifiedFan: boolean;
}

export interface FanMessage {
  id: string;
  fanName: string;
  fanAvatar: string;
  amount: number;
  message: string;
  trackTitle: string;
  date: string;
  replied?: boolean;
}

export interface Playlist {
  id: string;
  title: string;
  curator: string;
  description: string;
  coverUrl: string;
  trackIds: string[];
  tag: string;
  followerCount: number;
}
