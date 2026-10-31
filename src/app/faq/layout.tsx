import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة | شركة دورتمون للمقاولات والتوريدات',
  description:
    'إجابات على أكثر الأسئلة شيوعاً حول خدمات شركة دورتمون: الأسعار، أوقات العمل، مناطق الخدمة بجميع محافظات مصر، شروط التوريد والتشوين، ضمانات أعمال التكسير، والرقم الضريبي.',
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
