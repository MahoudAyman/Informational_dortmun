import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'معرض المشاريع وأعمال قبل وبعد | شركة دورتمون مصر',
  description:
    'استعرض سابقة أعمال شركة دورتمون: مشاريع تكسير الحوائط والحمامات، تشوين الرملة والأسمنت والسن، نظافة المواقع، وتوريد العمالة في مختلف المحافظات المصرية مع صور المقارنة قبل وبعد التنفيذ.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
