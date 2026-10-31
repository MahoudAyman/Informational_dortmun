import NotFound from '@/app/not-found';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - الصفحة غير موجودة | شركة دورتمون للمقاولات والتوريدات',
  description:
    'عفواً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. تصفح خدمات شركة دورتمون لتوريد العمالة، تشوين المواد، تكسير الحوائط ونظافة المواقع في مصر.',
  alternates: {
    canonical: 'https://dortmund-eg.com/404',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
    },
  },
  openGraph: {
    title: '404 - الصفحة غير موجودة | شركة دورتمون للمقاولات والتوريدات',
    description:
      'الصفحة المطلوبة غير موجودة. انتقل للرئيسية أو تواصل مع إدارة دورتمون: 01029046651.',
    url: 'https://dortmund-eg.com/404',
    siteName: 'شركة دورتمون للمقاولات والتوريدات',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function Custom404Page() {
  return <NotFound />;
}
