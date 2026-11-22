import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events & Live Showcases (TBE) — Downtown Radio',
  description:
    'Upcoming festival showcases, stage pitching, and crowd archives from Downtown Radio. All upcoming event dates, locations, and flyers are currently TBE (To Be Announced).',
  alternates: {
    canonical: '/events',
  },
  openGraph: {
    title: 'Events & Live Showcases (TBE) — Downtown Radio',
    description:
      'Live showcases, stage pitching, and crowd archives from Downtown Radio. Upcoming event dates, locations, and flyers are currently TBE.',
    url: '/events',
    images: ['/images/downtown-radio-logo.jpg'],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
