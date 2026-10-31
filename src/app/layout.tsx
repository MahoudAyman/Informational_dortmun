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
  title: {
    default: 'شركة دورتمون | توريد عمالة وتشوين رملة وأسمنت وتكسير حوائط ونظافة مواقع مصر',
    template: '%s | شركة دورتمون للمقاولات والتوريدات',
  },
  description:
    'شركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344). توريد عمالة مدربة، تشوين رملة وأسمنت وسن لجميع الأدوار، أعمال تكسير حوائط وحمامات وبيوت، ونظافة مواقع وإنشاءات في جميع محافظات مصر. للتواصل: 01029046651 (محمود أيمن) - 01035633986 (محمود حمادة).',
  keywords: [
    'شركة دورتمون',
    'دورتمون للمقاولات',
    'dortmun.site',
    'توريد عمالة في مصر',
    'توريد عمالة في القاهرة',
    'صنايعية في مصر',
    'صنايعية في القاهرة',
    'صنايعية وعمال في جميع المحافظات',
    'تكسير بيت',
    'تكسير بيوت',
    'تكسير حمامات',
    'تكسير حمامات في مصر',
    'تكسير حوائط',
    'تكسير مطابخ وسيراميك',
    'هدم بيوت ومباني',
    'تشوين رملة واسمنت وسن',
    'تشوين رمل واسمنت وسن بالونش',
    'تشوين مواد بناء للأدوار العليا',
    'نظافة مواقع بناء',
    'رفع ردش وانقاض هدم',
    'مقاولات عامة مصر',
    'سجل ضريبي 781-865-344',
    'محمود ايمن دورتمون',
    'محمود حمادة دورتمون',
    '01029046651',
    '01035633986',
  ],
  authors: [
    { name: 'شركة دورتمون للمقاولات والتوريدات', url: 'https://dortmun.site' },
  ],
  creator: 'شركة دورتمون',
  publisher: 'شركة دورتمون للمقاولات والتوريدات',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: 'https://dortmun.site',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: 'https://dortmun.site',
    siteName: 'شركة دورتمون للمقاولات العامة والتوريدات',
    title: 'شركة دورتمون | توريد عمالة وتشوين وتكسير ونظافة مواقع مصر',
    description:
      'شريكك الموثوق في خدمات البناء والتوريد: توريد عمالة مدربة، تشوين رملة وأسمنت وسن، تكسير حوائط وحمامات وبيوت، ونظافة مواقع لجميع محافظات مصر. رقم ضريبي: 781-865-344.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'شعار وهوية شركة دورتمون للمقاولات والتوريدات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة دورتمون | توريد عمالة وتشوين وتكسير ونظافة مواقع مصر',
    description:
      'توريد عمالة، تشوين رمل وأسمنت وسن، تكسير حوائط وبيوت، ونظافة مواقع لكافة محافظات مصر. تواصل: 01029046651 (محمود أيمن) - 01035633986 (محمود حمادة)',
    images: ['/og-image.png'],
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
        description: 'بوابة شركة دورتمون لتوريد العمالة وتشوين المواد والتكسير ونظافة المواقع في مصر',
        inLanguage: 'ar-EG',
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
          'الشركة الرائدة في مصر لتوريد العمالة المدربة، تشوين رملة وأسمنت وسن، عمالة نظافة مواقع، وتكسير حوائط وحمامات وبيوت في جميع محافظات جمهورية مصر العربية.',
        url: 'https://dortmun.site',
        logo: 'https://dortmun.site/logo.png',
        image: 'https://dortmun.site/og-image.png',
        taxID: '781-865-344',
        telephone: ['+201029046651', '+201035633986'],
        priceRange: 'EGP 50 - 50,000 (أسعار تنافسية شاملة التشوين والتكسير والعمالة)',
        currenciesAccepted: 'EGP',
        paymentAccepted: 'Cash, Bank Transfer, Vodafone Cash, Electronic Wallets',
        sameAs: [
          'https://wa.me/201029046651',
      'https://facebook.com',
      'https://instagram.com',
    ],
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    founder: [
      {
        '@type': 'Person',
        name: 'محمود أيمن',
        jobTitle: 'مدير المشاريع والتوريدات',
        telephone: '+201029046651',
      },
      {
        '@type': 'Person',
        name: 'محمود حمادة',
        jobTitle: 'مدير العمليات والتنفيذ الميداني',
        telephone: '+201035633986',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات شركة دورتمون',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'توريد عمالة مدربة',
            description: 'توريد عمالة ماهرة لجميع أعمال البناء والتشييد والتكسير والتشوين.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'تشوين رملة وأسمنت وسن',
            description: 'توريد وتشوين خامات البناء بأعلى جودة مع الرفع للأدوار العليا بالأوناش.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'أعمال التكسير المتخصصة والهدم',
            description: 'تكسير حوائط وحمامات ومطابخ وهدم بيوت وعقارات كاملة بأحدث المعدات وأمان تام.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'عمالة نظافة مواقع وإنشاءات',
            description: 'تنظيف شامل لمواقع البناء بعد التكسير والتشطيب ونقل الأنقاض والمخلفات.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '185',
      bestRating: '5',
      worstRating: '1',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+201029046651',
        contactType: 'customer service',
        areaServed: 'EG',
        availableLanguage: ['Arabic', 'English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+201035633986',
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
      <body className={`${tajawal.className} font-tajawal bg-slate-50 dark:bg-[#0a1628] text-slate-900 dark:text-gray-100 antialiased min-h-screen selection:bg-[#D4A843] selection:text-[#0a1628] transition-colors duration-250`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
