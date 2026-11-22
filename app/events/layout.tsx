import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events & Live Activations — Royal Rave Showcase (Status: TBA)',
  description:
    'Explore upcoming live activations, rooftop showcases, and festival pitching from Downtown Radio. Royal Rave Showcase status: To Be Announced (TBA). Pitch your unreleased tracks for open headliner slots.',
  alternates: {
    canonical: '/events',
  },
  openGraph: {
    title: 'Events & Live Activations — Downtown Radio (Royal Rave Status: TBA)',
    description:
      'Live activations and festival pitching from Downtown Radio. Royal Rave Showcase status: To Be Announced (TBA). Join the notification waitlist and pitch unreleased masters.',
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
