import React from 'react';

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://downtownradio.live';

  const radioStationSchema = {
    '@context': 'https://schema.org',
    '@type': ['RadioStation', 'Organization', 'BroadcastService'],
    '@id': `${baseUrl}/#organization`,
    name: 'Downtown Radio',
    alternateName: ['Downtown Radio NG', 'Downtown 101.4 FM WAT', 'Downtown Festival Ecosystem'],
    url: baseUrl,
    logo: `${baseUrl}/images/downtown-radio-logo.jpg`,
    image: `${baseUrl}/images/downtown-radio-logo.jpg`,
    description:
      "Africa's premier entertainment grooming sanctuary, broadcast radio node (101.4 FM WAT), direct Naira fan tipping platform, and global music distribution ecosystem for independent African creators.",
    broadcastFrequency: '101.4 FM WAT',
    founder: {
      '@type': 'Person',
      name: 'DK',
      alternateName: 'Dynamite King',
      jobTitle: 'CEO & Pioneer',
      email: 'dynamiteking1@gmail.com',
      image: `${baseUrl}/images/dk/dk-profile-1.jpg`,
      description:
        'Multi-dimensional creative powerhouse, executive, event host, and creative director shaping African contemporary sound and culture.',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Downtown Radio Sound Labs & Broadcast Hub',
      addressLocality: 'Lagos',
      addressRegion: 'Nigeria',
      addressCountry: 'NG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'dynamiteking1@gmail.com',
      contactType: 'Executive Office & A&R Submissions',
    },
    sameAs: [
      'https://instagram.com/downtownfest.ng',
      'https://twitter.com/downtownradio_ng',
      'https://downtownradio.live',
    ],
  };

  const festivalEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    '@id': `${baseUrl}/events#royal-rave`,
    name: 'Royal Rave Festival (Downtown Radio Showcase — Status: TBE)',
    eventStatus: 'https://schema.org/EventPostponed',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'To Be Announced (TBE)',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nigeria',
        addressCountry: 'NG',
      },
    },
    image: [
      `${baseUrl}/images/downtown-radio-logo.jpg`,
    ],
    description:
      'Live showcase and festival experience from Downtown Radio. Dates, locations, and flyers are currently TBE (To Be Announced).',
    organizer: {
      '@type': 'Organization',
      name: 'Downtown Radio',
      url: baseUrl,
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Early Bird Rooftop Pass',
        price: '3500',
        priceCurrency: 'NGN',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/events#ticket-booking-section`,
        validFrom: '2026-10-01',
      },
      {
        '@type': 'Offer',
        name: 'VIP Palace Deck Pass',
        price: '12500',
        priceCurrency: 'NGN',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/events#ticket-booking-section`,
        validFrom: '2026-10-01',
      },
      {
        '@type': 'Offer',
        name: 'Creator All-Access Pass',
        price: '25000',
        priceCurrency: 'NGN',
        availability: 'https://schema.org/InStock',
        url: `${baseUrl}/events#ticket-booking-section`,
        validFrom: '2026-10-01',
      },
    ],
    performer: [
      {
        '@type': 'Person',
        name: 'DK',
      },
      {
        '@type': 'Person',
        name: 'Nirati Dagwi',
      },
      {
        '@type': 'Person',
        name: 'Lady Donli',
      },
      {
        '@type': 'Person',
        name: 'Odunsi',
      },
    ],
  };

  const albumSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicAlbum',
    '@id': `${baseUrl}/about#atwn-ep`,
    name: 'ATWN (After This, What Next?)',
    byArtist: {
      '@type': 'MusicGroup',
      name: 'DK & Nirati Dagwi',
    },
    datePublished: '2026-10-29',
    image: `${baseUrl}/images/atwn/atwn-cover.jpg`,
    genre: 'Alté / Afro-Fusion / Sovereign Underground',
    numTracks: 4,
    track: [
      {
        '@type': 'MusicRecording',
        name: 'FUR SURE',
        duration: 'PT2M45S',
        byArtist: 'Nirati Dagwi x DK',
      },
      {
        '@type': 'MusicRecording',
        name: 'Midnight in Ife (Rooftop Dub)',
        duration: 'PT3M38S',
        byArtist: 'Lady Donli & Odunsi',
      },
      {
        '@type': 'MusicRecording',
        name: 'Lagos Altitude',
        duration: 'PT2M54S',
        byArtist: 'Cruel Santino x Maison',
      },
      {
        '@type': 'MusicRecording',
        name: 'Alte Sanctuary (Palace Session)',
        duration: 'PT4M12S',
        byArtist: 'Tay Iwar',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Downtown Radio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Downtown Radio (101.4 FM WAT) is an end-to-end entertainment grooming sanctuary, digital music ecosystem, and live event organizer headquartered in Lagos, Nigeria. It combines uncompressed lossless web streaming, direct fan tipping in Naira, global digital distribution to 20+ DSPs, and curated live gatherings like the Royal Rave Festival.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is DK in relation to Downtown Radio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DK is the CEO, Pioneer, and Creative Director of Downtown Radio. He is an executive, event host, and creative strategist. Following a four-year hiatus from the studio, DK makes his official return to music in 2026 with the debut collaborative EP "ATWN" (After This, What Next?) alongside Nirati Dagwi.',
        },
      },
      {
        '@type': 'Question',
        name: 'When and where is the Royal Rave Showcase?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Upcoming showcase dates and locations are To Be Announced (TBE). Registration for early priority notice and performance slot pitching is open on the platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does tipping work for independent artists on Downtown Radio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fans can tip creators directly in Nigerian Naira (₦) using Instant Bank Transfer, USSD, debit cards, or Apple Pay. With the Downtown Pro plan, creators keep 100% of fan tips with zero commission fees, deposited directly into their verified Nigerian bank accounts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which streaming platforms does Downtown Radio distribute to?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Downtown Radio distributes uncompressed audio to 20 verified global platforms, including Spotify, Apple Music, Audiomack, Boomplay, YouTube Music, Tidal, Amazon Music, Deezer, SoundCloud, Shazam, Pandora, QQ Music, JioSaavn, iHeartRadio, TuneIn Radio, and Apple Podcasts, while allowing artists to keep 100% of their master rights.',
        },
      },
    ],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Downtown Radio',
    description: 'The Sovereign Frequency for African Independent Sound',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/fan-hub?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(radioStationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(festivalEventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(albumSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
