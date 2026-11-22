import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Downtown Radio — African Independent Sound Ecosystem',
  description:
    'Discover the cultural vision behind Downtown Radio, CEO and visionary DK, the debut collaborative EP ATWN with Nirati Dagwi, and our global music distribution network delivering to 20+ DSPs.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Downtown Radio — African Independent Sound Ecosystem',
    description:
      'The cultural movement bridging uncompressed sound, sovereign music distribution, and direct Naira fan patronage across West Africa.',
    url: '/about',
    images: ['/images/atwn/atwn-cover.jpg'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
