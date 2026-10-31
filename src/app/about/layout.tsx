import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'من نحن | شركة دورتمون للمقاولات والتوريدات مصر',
  description:
    'تعرف على شركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344). قصة نجاحنا، فريق العمل، ورؤيتنا في تقديم أرقى خدمات توريد العمالة وتشوين المواد والتكسير والنظافة في كافة محافظات مصر.',
  keywords: [
    'من نحن دورتمون',
    'شركة دورتمون للمقاولات',
    'سجل ضريبي 781-865-344',
    'محمود أيمن دورتمون',
    'محمود حمادة دورتمون',
    'مقاولات عامة وتوريدات مصر',
    'dortmun.site',
  ],
  alternates: {
    canonical: 'https://dortmun.site/about',
  },
  openGraph: {
    title: 'من نحن | شركة دورتمون للمقاولات والتوريدات مصر',
    description:
      'تعرف على شركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344).',
    url: 'https://dortmun.site/about',
    siteName: 'شركة دورتمون للمقاولات العامة والتوريدات',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'من نحن - شركة دورتمون للمقاولات والتوريدات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'من نحن | شركة دورتمون للمقاولات والتوريدات مصر',
    description:
      'قصة نجاح وفريق عمل شركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344).',
    images: ['/og-image.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
