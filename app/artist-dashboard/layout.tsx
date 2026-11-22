import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artist Portal & Creator Incubation Terminal',
  description:
    'Upload uncompressed master audio (WAV), track real-time fan tips in Naira with 100% payout, submit festival performance pitches for upcoming showcases (Royal Rave), and distribute worldwide to 20+ DSPs.',
  alternates: {
    canonical: '/artist-dashboard',
  },
  openGraph: {
    title: 'Artist Portal & Creator Sanctuary — Downtown Radio',
    description:
      'Direct fan tipping in Nigerian Naira, 100% master ownership retention, and global digital distribution to Spotify, Apple, and Boomplay.',
    url: '/artist-dashboard',
    images: ['/images/downtown-radio-logo.jpg'],
  },
};

export default function ArtistDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
