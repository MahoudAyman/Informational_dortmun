import PrivacyPage from '@/app/privacy/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | شركة دورتمون للمقاولات والتوريدات',
  description:
    'سياسة الخصوصية وسرية البيانات لشركة دورتمون للمقاولات والتوريدات العامة (سجل ضريبي: 781-865-344).',
  alternates: {
    canonical: 'https://dortmund-eg.com/privacy',
  },
};

export default function PrivacyPolicyAlias() {
  return <PrivacyPage />;
}

