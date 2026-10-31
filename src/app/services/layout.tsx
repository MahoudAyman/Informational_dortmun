import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'خدمات توريد عمالة وتكسير وتشوين ونظافة مواقع | شركة دورتمون مصر',
  description:
    'خدمات متكاملة من شركة دورتمون: توريد عمالة مدربة، تشوين رملة وأسمنت وسن لجميع الأدوار، أعمال تكسير حوائط وحمامات وبيوت كاملة، وخدمات نظافة المواقع والإنشاءات في جميع محافظات مصر. تواصل: 01029046651 - 01035633986',
  keywords: [
    'خدمات شركة دورتمون',
    'توريد عمالة مصر',
    'تشوين رملة واسمنت وسن',
    'تكسير حوائط وحمامات',
    'هدم بيوت ومباني',
    'نظافة مواقع بناء مصر',
    'مقاولات توريد عمالة',
    'رقم ضريبي 781-865-344',
    'dortmun.site',
  ],
  alternates: {
    canonical: 'https://dortmun.site/services',
  },
  openGraph: {
    title: 'خدمات شركة دورتمون للمقاولات والتوريدات',
    description:
      'توريد عمالة، تشوين مواد بناء، تكسير حوائط وحمامات، ونظافة مواقع في جميع محافظات مصر.',
    url: 'https://dortmun.site/services',
    siteName: 'شركة دورتمون للمقاولات العامة والتوريدات',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'خدمات شركة دورتمون للمقاولات والتوريدات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات شركة دورتمون للمقاولات والتوريدات',
    description:
      'توريد عمالة مدربة، تشوين مواد، تكسير حوائط، ونظافة مواقع في كافة محافظات مصر.',
    images: ['/og-image.png'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
