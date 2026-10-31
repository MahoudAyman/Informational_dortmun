import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'من نحن | شركة دورتمون للمقاولات والتوريدات مصر',
  description:
    'تعرف على شركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344). قصة نجاحنا، فريق العمل، ورؤيتنا في تقديم أرقى خدمات توريد العمالة وتشوين المواد والتكسير والنظافة في كافة محافظات مصر.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
