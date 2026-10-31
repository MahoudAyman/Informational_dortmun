import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | شركة دورتمون للمقاولات والتوريدات',
  description:
    'سياسة الخصوصية وسرية البيانات لشركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344). نلتزم بحماية بيانات عملائنا واستخدامها فقط لتقديم خدمات المقاولات والتشوين والتكسير.',
  alternates: {
    canonical: 'https://dortmund-eg.com/privacy',
  },
  openGraph: {
    title: 'سياسة الخصوصية | شركة دورتمون للمقاولات والتوريدات',
    description:
      'سياسة الخصوصية وسرية البيانات لشركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344).',
    url: 'https://dortmund-eg.com/privacy',
    type: 'website',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

