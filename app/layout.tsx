import type { Metadata, Viewport } from 'next';
import './globals.css';
import { StoreProvider } from '../context/StoreContext';
import { AudioProvider } from '../context/AudioContext';
import Header from '../components/Header';
import AudioPlayer from '../components/AudioPlayer';
import TippingModal from '../components/TippingModal';
import PitchModal from '../components/PitchModal';
import DistributionModal from '../components/DistributionModal';
import ArtistOnboardingModal from '../components/ArtistOnboardingModal';
import AuthModal from '../components/AuthModal';
import OpenLetterModal from '../components/OpenLetterModal';
import NotificationToast from '../components/NotificationToast';
import Floating3DGraphics from '../components/Floating3DGraphics';
import Footer from '../components/Footer';
import StructuredData from '../components/StructuredData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://downtownradio.live';

export const viewport: Viewport = {
  themeColor: '#FF9F1C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Downtown Radio — African Independent Music Ecosystem & Live Showcases',
    template: '%s | Downtown Radio (101.4 FM WAT)',
  },
  description:
    'Official platform of Downtown Radio (101.4 FM WAT). Stream uncompressed Alté & Afro-fusion, tip indie artists directly in Naira with 100% payout, distribute music to 20+ global DSPs, and explore upcoming live activations (Royal Rave Status: TBA).',
  applicationName: 'Downtown Radio',
  authors: [
    { name: 'DK (CEO & Pioneer)', url: `${siteUrl}/about` },
    { name: 'Downtown Radio Team', url: siteUrl },
  ],
  generator: 'Next.js',
  keywords: [
    'Downtown Radio',
    'Downtown Radio 101.4 FM',
    'Royal Rave Festival',
    'Royal Rave Showcase',
    'Ile-Ife',
    'Lagos Independent Music',
    'African Independent Music',
    'Alté',
    'Afro-Fusion',
    'DK Downtown Radio',
    'Nirati Dagwi ATWN',
    'Direct Fan Tipping Nigeria',
    'Naira Music Tipping',
    'Music Distribution Spotify Apple Boomplay',
    'Entertainment Grooming Ecosystem',
    'African Sound Sanctuary',
    'Lagos Alté Scene',
    'Indie Music Incubation Nigeria',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Downtown Radio Media',
  publisher: 'Downtown Radio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Downtown Radio — The Sovereign Frequency for African Independent Sound',
    description:
      'Stream uncompressed independent African music, tip artists directly in Naira, pitch unreleased tracks for upcoming showcases (Royal Rave Status: TBA), and distribute to 20+ global DSPs with 100% master retention.',
    url: siteUrl,
    siteName: 'Downtown Radio',
    images: [
      {
        url: '/images/royal-rave-poster-updated.jpg',
        width: 1200,
        height: 630,
        alt: 'Downtown Radio — Royal Rave Showcase Poster (Status: TBA)',
      },
      {
        url: '/images/downtown-radio-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Downtown Radio Official Logo',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downtown Radio — Royal Rave Showcase & Indie Music Ecosystem',
    description:
      'Stream raw Alté music, tip indie artists directly in Naira, explore upcoming festival showcases (Royal Rave Status: TBA), and distribute master recordings worldwide.',
    creator: '@downtownradio_ng',
    images: ['/images/royal-rave-poster-updated.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Music & Entertainment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Schema.org Structured Data for Google, Bing, SearchGPT & ChatGPT */}
        <StructuredData />
        <link rel="author" href="/llms.txt" />
      </head>
      <body className="bg-charcoal-900 text-zinc-100 min-h-screen flex flex-col selection:bg-gold-500 selection:text-charcoal-950 w-full max-w-full overflow-x-hidden relative">
        <StoreProvider>
          <AudioProvider>
            {/* Global Header */}
            <Header />

            {/* Immersive 3D Scroll Graphics & Ambient Particles */}
            <Floating3DGraphics />

            {/* Notification Toasts */}
            <NotificationToast />

            {/* Main Application Body with Bottom Safe Area for Floating Player */}
            <main className="flex-1 pb-28 sm:pb-36 w-full max-w-full overflow-x-hidden">
              {children}
            </main>

            {/* Global Footer */}
            <Footer />

            {/* Interactive Modals */}
            <TippingModal />
            <PitchModal />
            <DistributionModal />
            <ArtistOnboardingModal />
            <AuthModal />
            <OpenLetterModal />

            {/* Persistent Bottom Audio Player Bar */}
            <AudioPlayer />
          </AudioProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
