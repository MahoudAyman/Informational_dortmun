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
      'شركة دورتمون | توريد عمالة مدربة، تشوين رملة وأسمنت، تكسير حوائط وبيوت، ونظافة مواقع في مصر',
    template: '%s | شركة دورتمون للمقاولات والتوريدات',
  },
  description:
    'شركة دورتمون للمقاولات والتوريدات العامة تقدم توريد عمالة مدربة، تشوين رملة وأسمنت وسن، تكسير حوائط وبيوت، هدم، ونظافة مواقع في القاهرة وجميع محافظات مصر. للتواصل: info@dortmun.site | 01029046651.',
  keywords: [
    'شركة دورتمون',
    'دورتمون للمقاولات',
    'دورتمون مصر',
    'دورتمون للتوريدات',
    'توريد عمالة في مصر',
    'توريد عمالة في القاهرة',
    'تشوين رملة وأسمنت',
    'تشوين رمل وأسمنت وسن',
    'تكسير حوائط وبيوت',
    'تكسير حمامات',
    'هدم بيوت ومباني',
    'نظافة مواقع البناء',
    'مقاولات عامة مصر',
    'مقاولون في مصر',
    'شركة مقاولات',
    'dortmun site',
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
    title: 'شركة دورتمون | توريد عمالة مدربة، تشوين رملة وأسمنت، وتكسير ونظافة مواقع مصر',
    description:
      'شركة دورتمون تقدم خدمات توريد عمالة مدربة، تشوين مواد البناء، تكسير حوائط وبيوت، هدم، ونظافة مواقع في القاهرة وجميع محافظات مصر. البريد الرسمي: info@dortmun.site',
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
    title: 'شركة دورتمون | توريد عمالة وتشوين وتكسير ونظافة مواقع مصر',
    description:
      'توريد عمالة مدربة، تشوين رمل وأسمنت وسن، تكسير حوائط وبيوت، هدم، ونظافة مواقع في جميع محافظات مصر. تواصل: info@dortmun.site | 01029046651',
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
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
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
          'بوابة شركة دورتمون لتوريد العمالة، تشوين المواد، التكسير، والهدم، ونظافة مواقع البناء في مصر.',
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
          'الشركة الرائدة في مصر لتوريد العمالة المدربة، تشوين رملة وأسمنت وسن، أعمال التكسير والهدم، ونظافة مواقع البناء.',
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
        <meta name="description" content="شركة دورتمون | توريد عمالة مدربة، تشوين رملة وأسمنت، تكسير حوائط وبيوت، ونظافة مواقع في مصر. info@dortmun.site | 01029046651" />
        <meta name="keywords" content="شركة دورتمون, توريد عمالة مصر, تشوين رملة وأسمنت, تكسير حوائط, هدم, نظافة مواقع, info@dortmun.site, 01029046651" />
        <meta name="author" content="شركة دورتمون للمقاولات والتوريدات" />
        <link rel="preload" as="image" href="/images/hero-bg.webp" fetchPriority="high" type="image/webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${tajawal.className} font-tajawal bg-slate-50 dark:bg-[#0a1628] text-slate-900 dark:text-gray-100 antialiased min-h-screen selection:bg-[#D4A843] selection:text-[#0a1628]`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
