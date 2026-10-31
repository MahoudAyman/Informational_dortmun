import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'طلب عرض سعر وتواصل معنا | شركة دورتمون مصر',
  description:
    'تواصل مع شركة دورتمون واطلب عرض سعر فوري ومجاني لمشروعك. أرقام الهاتف: 01029046651 (محمود) - 01035633986 (أيمن) أو عبر واتساب مباشرة. سجل ضريبي: 781-865-344.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
