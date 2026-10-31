import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة | شركة دورتمون للمقاولات والتوريدات',
  description:
    'إجابات على أكثر الأسئلة شيوعاً حول خدمات شركة دورتمون: الأسعار، أوقات العمل، مناطق الخدمة بجميع محافظات مصر، شروط التوريد والتشوين، ضمانات أعمال التكسير، والرقم الضريبي.',
  keywords: [
    'اسئلة شائعة دورتمون',
    'اسعار التكسير والتشوين',
    'مناطق تغطية دورتمون',
    'سجل ضريبي 781-865-344',
    'ضمانات التكسير والهدم',
    'dortmun.site',
  ],
  alternates: {
    canonical: 'https://dortmun.site/faq',
  },
  openGraph: {
    title: 'الأسئلة الشائعة | شركة دورتمون للمقاولات والتوريدات',
    description:
      'إجابات شاملة على كافة الأسئلة المتعلقة بخدمات التكسير والتشوين وتوريد العمالة والنظافة.',
    url: 'https://dortmun.site/faq',
    siteName: 'شركة دورتمون للمقاولات العامة والتوريدات',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'الأسئلة الشائعة - شركة دورتمون للمقاولات والتوريدات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الأسئلة الشائعة | شركة دورتمون للمقاولات والتوريدات',
    description:
      'إجابات مفصلة حول خدمات ومقايسات وأسعار شركة دورتمون للمقاولات.',
    images: ['/og-image.png'],
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
