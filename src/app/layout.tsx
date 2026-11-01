import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
  display: 'swap',
  variable: '--font-tajawal',
});

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dortmun.site'),
  applicationName: 'شركة دورتمون للمقاولات والتوريدات',
  category: 'construction',
  generator: 'Next.js',
  title: {
    default:
      'شركة دورتمون | تكسير حمامات، تكسير مطابخ، تكسير بيوت، عمال تشوين رملة وأسمنت في مصر',
    template: '%s | شركة دورتمون للمقاولات والتوريدات',
  },
  description:
    'شركة دورتمون تقدم تكسير حمامات في مصر، تكسير مطابخ، تكسير بيوت، هدم منازل، تشوين رملة وأسمنت وسن، وتوريد عمالة مدربة في القاهرة وجميع محافظات مصر. للتواصل: info@dortmun.site | 01029046651',
  keywords: [
    'تكسير حمامات في مصر',
    'تكسير مطابخ في مصر',
    'تكسير بيوت في مصر',
    'شركة دورتمون للتكسير',
    'دورتمون لتوريد العمالة',
    'عمال تشوين رملة في مصر',
    'عمال تشوين في مصر',
    'تكسير حوائط في مصر',
    'تكسير حمامات',
    'تكسير مطابخ',
    'تكسير بيوت',
    'هدم منازل في مصر',
    'تشوين رملة وأسمنت',
    'توريد عمالة مصر',
    'شركة دورتمون',
    'دورتمون للمقاولات',
    'dortmun.site',
    'info@dortmun.site',
    '01029046651',
    '01035633986',
    '781-865-344',
  ],
  authors: [{ name: 'شركة دورتمون للمقاولات والتوريدات', url: 'https://dortmun.site' }],
  creator: 'شركة دورتمون',
  publisher: 'شركة دورتمون للمقاولات والتوريدات',
  alternates: {
    canonical: 'https://dortmun.site',
    languages: {
      ar: 'https://dortmun.site',
      en: 'https://dortmun.site',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: 'https://dortmun.site',
    siteName: 'شركة دورتمون للمقاولات العامة والتوريدات',
    title: 'شركة دورتمون | تكسير حمامات، تكسير مطابخ، تكسير بيوت، وعمال تشوين رملة في مصر',
    description:
      'شركة دورتمون تقدم تكسير حمامات في مصر، تكسير مطابخ، تكسير بيوت، هدم منازل، تشوين رملة وأسمنت وسن، وتوريد عمالة مدربة في القاهرة وجميع محافظات مصر.',
    emails: ['info@dortmun.site'],
    phoneNumbers: ['+201029046651', '+201035633986'],
    countryName: 'مصر',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'شركة دورتمون للمقاولات والتوريدات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة دورتمون | تكسير حمامات، مطابخ، وبيوت، وعمال تشوين رملة في مصر',
    description:
      'تكسير حمامات ومطابخ وبيوت في مصر، هدم منازل، تشوين رملة وأسمنت، وتوريد عمالة مدربة في جميع المحافظات. info@dortmun.site | 01029046651',
    images: ['/og-image.png'],
    creator: '@dortmun',
    site: '@dortmun',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [{ url: '/logo.svg', type: 'image/svg+xml' }],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://dortmun.site/#website',
        url: 'https://dortmun.site',
        name: 'شركة دورتمون للمقاولات العامة والتوريدات',
        alternateName: ['Dortmund Contracting', 'دورتمون', 'dortmun.site'],
        description:
          'شركة دورتمون تقدم خدمات تكسير حمامات ومطابخ وبيوت في مصر، وتشوين رملة وأسمنت، وتوريد عمالة مدربة في جميع المحافظات.',
        inLanguage: 'ar-EG',
        email: 'info@dortmun.site',
        telephone: ['+201029046651', '+201035633986'],
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://dortmun.site/services?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': 'https://dortmun.site/#organization',
        name: 'شركة دورتمون للمقاولات العامة والتوريدات',
        alternateName: ['Dortmund Contracting & Supplies', 'شركة دورتمون', 'دورتمون مصر', 'dortmun.site'],
        description:
          'الشركة الرائدة في مصر في تكسير حمامات ومطابخ وبيوت، تشوين رملة وأسمنت وسن، وتوريد عمالة مدربة في جميع محافظات مصر.',
        url: 'https://dortmun.site',
        email: 'info@dortmun.site',
        logo: 'https://dortmun.site/logo.png',
        image: 'https://dortmun.site/og-image.png',
        taxID: '781-865-344',
        telephone: ['+201029046651', '+201035633986'],
        priceRange: 'EGP 50 - 50,000',
        currenciesAccepted: 'EGP',
        paymentAccepted: 'Cash, Bank Transfer, Vodafone Cash, Electronic Wallets',
        sameAs: ['https://wa.me/201029046651', 'https://wa.me/201035633986'],
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'القاهرة الكبرى (التجمع الخامس، الشروق، المعادي، مدينة نصر، وسط البلد)',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'الجيزة (6 أكتوبر، الشيخ زايد، الهرم، الدقي، المهندسين)',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'العاصمة الإدارية الجديدة',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'الإسكندرية والساحل الشمالي',
          },
          {
            '@type': 'Country',
            name: 'جمهورية مصر العربية (جميع المحافظات)',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'شارع التسعين الجنوبي، التجمع الخامس',
          addressLocality: 'القاهرة الجديدة',
          addressRegion: 'القاهرة',
          postalCode: '11835',
          addressCountry: 'EG',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 30.0131,
          longitude: 31.4363,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+201029046651',
            email: 'info@dortmun.site',
            contactType: 'customer service',
            areaServed: 'EG',
            availableLanguage: ['Arabic', 'English'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+201035633986',
            email: 'info@dortmun.site',
            contactType: 'operations',
            areaServed: 'EG',
            availableLanguage: ['Arabic', 'English'],
          },
        ],
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl" className={`dark scroll-smooth ${tajawal.variable}`}>
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta
          name="description"
          content="شركة دورتمون تقدم تكسير حمامات في مصر، تكسير مطابخ، تكسير بيوت، هدم منازل، تشوين رملة وأسمنت وسن، وتوريد عمالة مدربة في القاهرة وجميع محافظات مصر. info@dortmun.site | 01029046651"
        />
        <meta
          name="keywords"
          content="تكسير حمامات في مصر، تكسير مطابخ في مصر، تكسير بيوت في مصر، شركة دورتمون للتكسير، دورتمون لتوريد العمالة، عمال تشوين رملة، عمال تشوين في مصر، تكسير حوائط، هدم منازل، تشوين رملة وأسمنت"
        />
        <meta name="author" content="شركة دورتمون للمقاولات والتوريدات" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="preload" as="image" href="/images/hero-bg.webp" fetchPriority="high" type="image/webp" />
      </head>
      <body className={`${tajawal.className} font-tajawal bg-slate-50 dark:bg-[#0a1628] text-slate-900 dark:text-gray-100 antialiased min-h-screen selection:bg-[#D4A843] selection:text-[#0a1628]`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
