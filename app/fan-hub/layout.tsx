import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music Hub — Stream Indie Alté & Afro-Fusion | Downtown Radio',
  description:
    'Stream lossless indie African music, discover curated Alté and Afro-Fusion playlists, explore the live supporter leaderboard, and tip artists directly in Nigerian Naira with 100% payout.',
  alternates: {
    canonical: '/fan-hub',
  },
  openGraph: {
    title: 'Music Hub — Stream Indie Alté & Afro-Fusion | Downtown Radio',
    description:
      'Stream lossless indie African music, discover curated Alté and Afro-Fusion playlists, and tip artists directly in Nigerian Naira.',
    url: '/fan-hub',
    images: ['/images/atwn/atwn-cover.jpg'],
  },
};

export default function FanHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
