import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music Hub — Stream Indie Alté & Afro-Fusion | Downtown Radio',
  description: 'Stream uncompressed lossless alté releases, discover curated playlists, and tip creators directly in Naira.',
  openGraph: {
    title: 'Music Hub — Stream Indie Alté & Afro-Fusion | Downtown Radio',
    description: 'Stream uncompressed lossless alté releases, discover curated playlists, and tip creators directly in Naira.',
    images: ['/images/atwn/atwn-cover.jpg'],
  },
};

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
