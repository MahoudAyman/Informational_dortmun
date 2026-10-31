import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'طلب عرض سعر وتواصل معنا | شركة دورتمون مصر',
  description:
    'تواصل مع شركة دورتمون واطلب عرض سعر فوري ومجاني لمشروعك. أرقام الهاتف: 01029046651 (محمود أيمن) - 01035633986 (محمود حمادة) أو عبر واتساب مباشرة. سجل ضريبي: 781-865-344.',
  keywords: [
    'اتصل بشركة دورتمون',
    'طلب عرض سعر مقاولات',
    'رقم هاتف دورتمون',
    '01029046651',
    '01035633986',
    'واتساب شركة دورتمون',
    'معاينة موقع مجانية',
    'dortmun.site',
  ],
  alternates: {
    canonical: 'https://dortmun.site/contact',
  },
  openGraph: {
    title: 'طلب عرض سعر وتواصل معنا | شركة دورتمون مصر',
    description:
      'تواصل مع إدارة دورتمون لطلب المعاينات وعروض الأسعار الفورية: 01029046651 - 01035633986.',
    url: 'https://dortmun.site/contact',
    siteName: 'شركة دورتمون للمقاولات العامة والتوريدات',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'تواصل مع شركة دورتمون للمقاولات والتوريدات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تواصل مع شركة دورتمون للمقاولات والتوريدات',
    description:
      'طلب عرض سعر فوري ومعاينة موقع: 01029046651 - 01035633986 (سجل ضريبي: 781-865-344).',
    images: ['/og-image.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
