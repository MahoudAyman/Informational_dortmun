import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية وسرية البيانات | شركة دورتمون للمقاولات والتوريدات',
  description:
    'سياسة الخصوصية وسرية البيانات لشركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي معتمد: 781-865-344). نلتزم بأعلى معايير حماية البيانات وتشفيرها لعملائنا في مصر. للتواصل: 01029046651 - 01035633986.',
  keywords: [
    'سياسة الخصوصية شركة دورتمون',
    'حماية البيانات دورتمون',
    'سجل ضريبي 781-865-344',
    'شروط الاستخدام دورتمون للمقاولات',
    'سرية البيانات مقاولات مصر',
    'شركة دورتمون للمقاولات والتوريدات',
    'محمود أيمن دورتمون',
    'محمود حمادة دورتمون',
  ],
  alternates: {
    canonical: 'https://dortmun.site/privacy',
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
  openGraph: {
    title: 'سياسة الخصوصية وسرية البيانات | شركة دورتمون للمقاولات والتوريدات',
    description:
      'سياسة الخصوصية وسرية البيانات لشركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344).',
    url: 'https://dortmun.site/privacy',
    siteName: 'شركة دورتمون للمقاولات والتوريدات',
    locale: 'ar_EG',
    type: 'article',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'سياسة الخصوصية - شركة دورتمون للمقاولات والتوريدات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سياسة الخصوصية وسرية البيانات | شركة دورتمون للمقاولات والتوريدات',
    description:
      'سياسة الخصوصية وحماية البيانات لشركة دورتمون (سجل ضريبي: 781-865-344).',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://dortmun.site/privacy#webpage',
  url: 'https://dortmun.site/privacy',
  name: 'سياسة الخصوصية وسرية البيانات - شركة دورتمون للمقاولات والتوريدات',
  description:
    'سياسة الخصوصية وسرية البيانات لشركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344).',
  inLanguage: 'ar-EG',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://dortmun.site/#website',
    url: 'https://dortmun.site',
    name: 'شركة دورتمون للمقاولات والتوريدات',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'الرئيسية',
        item: 'https://dortmun.site',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'سياسة الخصوصية',
        item: 'https://dortmun.site/privacy',
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'شركة دورتمون للمقاولات والتوريدات',
    url: 'https://dortmun.site',
    logo: 'https://dortmun.site/logo.png',
    taxID: '781-865-344',
    telephone: '+201029046651',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressRegion: 'Cairo',
    },
    founder: [
      {
        '@type': 'Person',
        name: 'محمود أيمن',
        jobTitle: 'إدارة المشاريع والتوريدات',
        telephone: '+201029046651',
      },
      {
        '@type': 'Person',
        name: 'محمود حمادة',
        jobTitle: 'إدارة العمليات والتنفيذ الميداني',
        telephone: '+201035633986',
      },
    ],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
