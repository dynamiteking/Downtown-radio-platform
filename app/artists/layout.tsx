import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artist Portal & Distribution — Downtown Radio',
  description: 'Upload tracks, receive direct Naira fan tips with 100% payout, pitch for live festival stages, and distribute to 20+ DSPs.',
  openGraph: {
    title: 'Artist Portal & Distribution — Downtown Radio',
    description: 'Upload tracks, receive direct Naira fan tips with 100% payout, pitch for live festival stages, and distribute to 20+ DSPs.',
    images: ['/images/atwn/atwn-cover.jpg'],
  },
};

export default function ArtistsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
