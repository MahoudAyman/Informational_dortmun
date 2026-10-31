import NotFound from '@/app/not-found';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - الصفحة غير موجودة | شركة دورتمون للمقاولات والتوريدات',
  description: 'الصفحة التي تبحث عنها غير موجودة في موقع شركة دورتمون للمقاولات والتوريدات.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Custom404Page() {
  return <NotFound />;
}

