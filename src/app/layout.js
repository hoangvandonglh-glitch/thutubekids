import Script from 'next/script';
import './globals.css';

const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'google9018ad2318338bf8';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-CFB5MEL4DM';
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-1471689577428401';
const SITE_URL = 'https://thetubekids.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Thetubekids.com — Safe & Fun Educational Videos for Children',
    template: '%s | Thetubekids.com',
  },
  description: 'Watch curated, safe and educational videos for kids on Thetubekids.com. Nursery rhymes, cartoons, learning, stories and more! 100% child-friendly content screened for families.',
  keywords: [
    'thetubekids',
    'safe videos for kids',
    'children videos',
    'nursery rhymes',
    'educational videos for toddlers',
    'kid songs',
    'cartoons for kids',
    'safe youtube kids alternative',
    'preschool learning'
  ],
  authors: [{ name: 'Thetubekids Editorial Team', url: SITE_URL }],
  creator: 'Thetubekids',
  publisher: 'Thetubekids',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: GSC_VERIFICATION,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Thetubekids.com — Safe & Fun Videos for Children',
    description: 'Curated, safe and educational videos for kids of all ages. 100% ad-screened and family-friendly.',
    url: SITE_URL,
    siteName: 'Thetubekids.com',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Thetubekids.com — Safe Kids Videos',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thetubekids.com — Safe & Fun Videos for Children',
    description: 'Curated, safe and educational videos for toddlers, preschoolers and young learners.',
    images: ['/icon.png'],
    creator: '@thetubekids',
  },
};

export default function RootLayout({ children }) {
  // Website and Organization JSON-LD Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Thetubekids.com',
        description: 'Safe & Curated Educational Kids Videos Platform',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Thetubekids',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/icon.png`,
          width: 512,
          height: 512,
        },
        sameAs: [],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7C3AED" />

        {/* Performance Preconnects for Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* Global Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* 1. Google Search Console Verification Meta Tag */}
        {GSC_VERIFICATION && (
          <meta name="google-site-verification" content={GSC_VERIFICATION} />
        )}

        {/* 2. Google AdSense Global Script */}
        {ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        {/* 3. Google Analytics 4 (GA4) Scripts */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {children}
      </body>
    </html>
  );
}
