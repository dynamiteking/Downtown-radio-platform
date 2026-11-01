import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Royal Rave Rooftop Gathering (Red Horn, Ife) — Events & Tickets',
  description:
    'Secure tickets for the Royal Rave Rooftop Gathering at Red Horn, Ile-Ife, Osun State on Saturday, 14th November 2026 (9:00 PM — 5:00 AM WAT). Pitch your unreleased tracks for 4 open headliner slots.',
  alternates: {
    canonical: '/events',
  },
  openGraph: {
    title: 'Royal Rave Rooftop Gathering — Red Horn, Ife (Sat, Nov 14, 2026)',
    description:
      'All-night rooftop festival experience at Red Horn, Ife. Early Bird ₦3,500, VIP Palace Deck ₦12,500, Creator Pass ₦25,000. 4 open stage slots for independent acts.',
    url: '/events',
    images: ['/images/royal-rave-poster-updated.jpg'],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
