import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'معرض المشاريع وأعمال قبل وبعد | شركة دورتمون مصر',
  description:
    'استعرض سابقة أعمال شركة دورتمون: مشاريع تكسير الحوائط والحمامات، تشوين الرملة والأسمنت والسن، نظافة المواقع، وتوريد العمالة في مختلف المحافظات المصرية مع صور المقارنة قبل وبعد التنفيذ.',
  keywords: [
    'مشاريع شركة دورتمون',
    'قبل وبعد تكسير',
    'سابقة اعمال دورتمون',
    'تشوين مشاريع مصر',
    'تكسير فيلات وعقارات',
    'dortmun.site',
  ],
  alternates: {
    canonical: 'https://dortmun.site/projects',
  },
  openGraph: {
    title: 'معرض المشاريع وأعمال قبل وبعد | شركة دورتمون مصر',
    description:
      'شاهد أعمال وتطبيقات شركة دورتمون الميدانية بالصور والمقارنات قبل وبعد التنفيذ.',
    url: 'https://dortmun.site/projects',
    siteName: 'شركة دورتمون للمقاولات العامة والتوريدات',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'مشاريع شركة دورتمون للمقاولات والتوريدات',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مشاريع شركة دورتمون للمقاولات والتوريدات',
    description:
      'استعرض سابقة أعمال ومشاريع تكسير، تشوين، توريد عمالة ونظافة مواقع في مصر.',
    images: ['/og-image.png'],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
