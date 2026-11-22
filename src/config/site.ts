/**
 * Downtown Radio — Centralized Site & Event Configuration
 * Source of truth for all metadata, platform metrics, canonical broadcasting node,
 * social links, contacts, and unverified event (TBE) rules.
 */

export interface EventConfigItem {
  id: string;
  title: string;
  subtitle: string;
  isVerified: boolean; // CRITICAL RULE: false means unverified (TBE)
  status: 'tbe' | 'verified' | 'Open for Pitching' | 'Reviewing' | 'Sold Out' | 'Upcoming' | 'To Be Announced (TBA)' | string;
  date: string;
  time: string;
  venue: string;
  city: string;
  capacity: string;
  flyerUrl: string | null; // Leave off / null for unverified events
  flyerStatus: string;
  pitchDeadline: string;
  slotsAvailable: number;
  description: string;
  perks: string[];
  headliners?: string[];
  vibe: string;
  ticketUrl?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  frequency: string;
  canonicalBroadcastingNode: string;
  contact: {
    email: string;
    ceoEmail: string;
  };
  socials: {
    handle: string;
    instagram: string;
    twitter: string;
    website: string;
  };
  stats: {
    fanTipsPaidOut: string;
    fanTipsLabel: string;
    masterOwnershipKept: string;
    masterOwnershipLabel: string;
    upcomingStatus: string;
    upcomingStatusLabel: string;
    openSlotsCount: string;
    openSlotsLabel: string;
  };
  events: EventConfigItem[];
}

export const siteConfig: SiteConfig = {
  name: 'Downtown Radio',
  shortName: 'Downtown',
  tagline: 'The Sovereign Frequency for African Independent Sound',
  frequency: '101.4 FM WAT',
  canonicalBroadcastingNode: 'Broadcasting Node: Lagos • 101.4 FM WAT',
  contact: {
    email: 'hello@downtownradio.ng',
    ceoEmail: 'dynamiteking1@gmail.com',
  },
  socials: {
    handle: '@downtownradio.ng',
    instagram: 'https://instagram.com/downtownradio.ng',
    twitter: 'https://twitter.com/downtownradio_ng',
    website: 'https://downtownradio.live',
  },
  stats: {
    fanTipsPaidOut: '₦1,802,500+',
    fanTipsLabel: 'Platform-wide creator tips',
    masterOwnershipKept: '100%',
    masterOwnershipLabel: 'Master & publishing rights retained by artists',
    upcomingStatus: 'STATUS: TBE',
    upcomingStatusLabel: 'Upcoming event dates & locations TBE',
    openSlotsCount: '4 Slots',
    openSlotsLabel: 'Open showcase performance slots',
  },
  events: [
    {
      id: 'event-royal-rave',
      title: 'Royal Rave Festival',
      subtitle: 'Downtown Radio Presents: The All-Night Rave Showcase',
      isVerified: false, // UNVERIFIED: Enforces TBE rule, no flyer image rendered
      status: 'tbe',
      date: 'Date: TBE',
      time: 'Time: TBE',
      venue: 'Venue: TBE',
      city: 'Location: TBE',
      capacity: 'Strict RSVP / TBE Waitlist',
      flyerUrl: null, // Flyer left off while unverified
      flyerStatus: 'Flyer: TBE',
      pitchDeadline: 'Pitch Deadline: TBE',
      slotsAvailable: 4,
      description:
        'Downtown Radio presents the Royal Rave Festival showcase. All dates, locations, and flyers are currently To Be Announced (TBE). Register for official TBE alert notifications and pitch your unreleased music for 4 open performance slots.',
      perks: [
        'Main Stage Showcase Performance Slot (TBE)',
        'Multi-angle 4K Festival Recording + Live Audio Master',
        'VIP Artist Hospitality & Downtown Lounge Access',
        'Guaranteed Placement on "Downtown Showcase Selects" Playlist',
        '₦200,000 Performance Stipend + 100% of Live Fan Tips in Naira',
      ],
      headliners: ['Lady Donli', 'The Cavemen', 'Downtown Resident DJs'],
      vibe: 'Golden Glow Lights, Sovereign Sound & All-Night Energy',
      ticketUrl: '/events#ticket-booking-section',
    },
    {
      id: 'event-creative-gathering',
      title: 'Just For Us: The Creative Gathering',
      subtitle: 'Underground Cypher, Masterclass & Indie Showcase',
      isVerified: false, // UNVERIFIED: Enforces TBE rule, no flyer image rendered
      status: 'tbe',
      date: 'Date: TBE',
      time: 'Time: TBE',
      venue: 'Venue: TBE',
      city: 'Location: TBE',
      capacity: '300 Guests (Strict RSVP)',
      flyerUrl: null,
      flyerStatus: 'Flyer: TBE',
      pitchDeadline: 'Pitch Deadline: TBE',
      slotsAvailable: 3,
      description:
        'Lagos creative hub for raw musical experimentation. An electric room filled with sound designers, independent producers, visual tastemakers, and passionate music fans. All official event details and flyers are TBE.',
      perks: [
        'Interactive Downtown Radio Live Broadcast (Streamed to 45,000 listeners)',
        'Downtown Pro Artist Spotlight Feature Article',
        'Producer Collaboration Suite access post-event',
        'Dedicated Social Media Clip Blitz across TikTok & Instagram',
      ],
      headliners: ['PsychoYP', 'Bloody Civilian', 'Underground All-Stars'],
      vibe: 'Industrial Dark Lighting, Neon Gold Strobe, High Voltage Sound System',
    },
    {
      id: 'event-soundclash',
      title: 'Downtown Sunset Soundclash',
      subtitle: 'Live Sound Systems, Beachside Alté & Experimental Beats',
      isVerified: false, // UNVERIFIED: Enforces TBE rule, no flyer image rendered
      status: 'tbe',
      date: 'Date: TBE',
      time: 'Time: TBE',
      venue: 'Venue: TBE',
      city: 'Location: TBE',
      capacity: '600 Guests',
      flyerUrl: null,
      flyerStatus: 'Flyer: TBE',
      pitchDeadline: 'Pitch Deadline: TBE',
      slotsAvailable: 5,
      description:
        'Where ocean breeze meets heavy sub-bass and soulful chord progressions. The end-of-year celebration for the Downtown Radio community. Event dates, location, and official flyer are TBE.',
      perks: [
        'Main Stage performance slot with full live band support',
        '₦250,000 Appearance fee for selected acts',
        'Direct label scout presence from Downtown Pro & partner labels',
        'VIP Cabana access for artist crew',
      ],
      headliners: ['Tay Iwar', 'Cruel Santino', 'Downtown Sound System'],
      vibe: 'Golden Hour Sunset, Ocean Mist, Heavy Basslines & Boho Rugs',
    },
  ],
};

/**
 * Event Verification Helpers
 */
export function isEventVerified(event?: { isVerified?: boolean; status?: string } | null): boolean {
  if (!event) return false;
  return event.isVerified === true && event.status === 'verified';
}

export function getEventDateLabel(event?: { isVerified?: boolean; status?: string; date?: string } | null): string {
  if (event && isEventVerified(event) && event.date && event.date !== 'TBE' && !event.date.includes('TBE')) {
    return event.date;
  }
  return 'Date: TBE';
}

export function getEventLocationLabel(event?: { isVerified?: boolean; status?: string; venue?: string; city?: string } | null): string {
  if (event && isEventVerified(event) && event.venue && event.venue !== 'TBE' && !event.venue.includes('TBE')) {
    return `${event.venue}${event.city ? ` • ${event.city}` : ''}`;
  }
  return 'Location: TBE';
}

export function getEventFlyerUrl(event?: { isVerified?: boolean; status?: string; flyerUrl?: string | null } | null): string | null {
  if (event && isEventVerified(event) && event.flyerUrl) {
    return event.flyerUrl;
  }
  return null; // Do NOT render flyers for unverified events
}
