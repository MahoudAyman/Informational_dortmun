'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaShieldAlt,
  FaUserShield,
  FaFileContract,
  FaLock,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaHome,
  FaDatabase,
  FaRegHandshake,
} from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useApp } from '@/context/AppContext';

export default function PrivacyPage() {
  const { lang } = useApp();

  const sectionsAr = [
    {
      id: 'intro',
      icon: FaShieldAlt,
      title: '1. مقدمة والتزامنا بالخصوصية',
      content: [
        'تلتزم شركة دورتمون للمقاولات والتوريدات العامة (المسجلة ضريبياً برقم 781-865-344) بأعلى معايير حماية وخصوصية بيانات عملائها وزوار موقعها الإلكتروني.',
        'توضح هذه الوثيقة ماهية البيانات التي قد نجمعها منك عند استخدامك لموقعنا الإلكتروني أو عند التواصل معنا لطلب المعاينات وعروض الأسعار، وكيفية استخدامنا لهذه البيانات وحمايتها وفقاً للقوانين المصرية المعمول بها.',
      ],
    },
    {
      id: 'data-collection',
      icon: FaDatabase,
      title: '2. البيانات التي نقوم بجمعها',
      content: [
        'نقوم فقط بجمع البيانات الضرورية لتقديم خدمات المقاولات، التكسير، التشوين، وتوريد العمالة بكفاءة عالية، وتشمل:',
        '• بيانات الاتصال الشخصية: مثل الاسم الكامل، رقم الهاتف، ورقم الواتساب للتواصل معك وتأكيد المواعيد.',
        '• تفاصيل الموقع والمشروع: عنوان العقار أو الموقع المطلوب معاينته، رقم الدور، نوع الخدمة المطلوبة (تكسير، تشوين، عمالة، أو نظافة)، والكميات التقديرية.',
        '• البيانات التقنية الأساسية: عنوان IP ونوع المتصفح ونظام التشغيل لضمان استقرار وسرعة وأمان الموقع الإلكتروني.',
      ],
    },
    {
      id: 'data-usage',
      icon: FaRegHandshake,
      title: '3. كيفية استخدام بياناتك',
      content: [
        'تُستخدم بياناتك فقط للأغراض المشروعة والتنفيذية الآتية:',
        '• إعداد وتقديم المقايسات المالية وعروض الأسعار المخصصة لمشروعك.',
        '• تنسيق وإرسال طواقم العمل والمعاينة الميدانية إلى موقع العقار أو المشروع.',
        '• التواصل معك عبر الهاتف أو الواتساب لمتابعة سير الأعمال والتوريدات.',
        '• إصدار الفواتير الضريبية المعتمدة طبقاً للرقم الضريبي المسجل للشركة (781-865-344).',
        '• الرد الفوري على الاستفسارات الفنية وخدمة العملاء.',
      ],
    },
    {
      id: 'data-security',
      icon: FaLock,
      title: '4. أمان وسرية البيانات',
      content: [
        'نحن نتخذ كافة التدابير الأمنية والتقنية لمنع أي وصول غير مصرح به أو إفشاء أو تعديل لبياناتك.',
        'يتم تشفير جميع الاتصالات والبيانات المنقولة عبر موقعنا باستخدام بروتوكول التشفير الآمن SSL/TLS الحديث.',
        'لا يتم الاطلاع على بيانات العملاء إلا من قِبل إدارة المشاريع المعتمدة بشركة دورتمون لتنفيذ الأعمال المتفق عليها فقط.',
      ],
    },
    {
      id: 'sharing',
      icon: FaUserShield,
      title: '5. عدم بيع أو مشاركة البيانات لأطراف ثالثة',
      content: [
        'تؤكد شركة دورتمون بشكل قاطع أنها لا تقوم ببيع أو تأجير أو مشاركة أو تداول بيانات عملائها مع أي شركات إعلانية أو جهات تسويقية خارجية بأي شكل من الأشكال.',
        'لا تتم مشاركة أي بيانات إلا مع الجهات الحكومية أو الضريبية المصرية الرسمية في حال طلبها بموجب التزامات قانونية ملزمة.',
      ],
    },
    {
      id: 'cookies',
      icon: FaFileContract,
      title: '6. ملفات تعريف الارتباط (Cookies)',
      content: [
        'يستخدم موقعنا ملفات تعريف ارتباط خفيفة (Cookies) مقتصرة على تحسين تجربة التصفح وحفظ تفضيلاتك (مثل اللغة والمظهر الليلي والنهاري) وضمان سرعة تحميل الصفحات.',
        'يمكنك التحكم في إعدادات ملفات تعريف الارتباط أو تعطيلها في أي وقت من خلال متصفح الويب الخاص بك.',
      ],
    },
    {
      id: 'rights',
      icon: FaCheckCircle,
      title: '7. حقوق العميل والتحكم في البيانات',
      content: [
        'يحق لك في أي وقت التواصل مع إدارة دورتمون لـ:',
        '• طلب مراجعة أو تحديث بيانات الاتصال الخاصة بك المسجلة لدينا.',
        '• طلب حذف بياناتك أو إلغاء تلقي أي اتصالات بعد انتهاء المعاينة أو المشروع.',
        '• الاستفسار عن كيفية معالجة وتأمين بياناتك بموجب هذه السياسة.',
      ],
    },
  ];

  const sectionsEn = [
    {
      id: 'intro',
      icon: FaShieldAlt,
      title: '1. Introduction & Commitment',
      content: [
        'Dortmund General Contracting & Supplies (Registered Tax ID: 781-865-344) is firmly committed to safeguarding the privacy and security of our clients and website visitors.',
        'This policy outlines what data we may collect when you browse our site, request quotations, or book field surveys, and how we protect that information under applicable laws.',
      ],
    },
    {
      id: 'data-collection',
      icon: FaDatabase,
      title: '2. Information We Collect',
      content: [
        'We only collect information strictly required to provide our demolition, hoisting, labor supply, and site cleanup services efficiently:',
        '• Contact Details: Full name, phone number, and WhatsApp number for coordination.',
        '• Site & Project Data: Site address for on-site inspections, floor number, service scope, and material volumes.',
        '• Basic Technical Data: IP address, browser type, and device information to ensure website performance and security.',
      ],
    },
    {
      id: 'data-usage',
      icon: FaRegHandshake,
      title: '3. How We Use Your Information',
      content: [
        'Your information is exclusively used for operational and project fulfillment purposes:',
        '• Preparing tailored pricing estimates and project scopes.',
        '• Dispatching survey teams, labor forces, and hoisting equipment to your location.',
        '• Direct communication via phone and WhatsApp regarding scheduling and progress.',
        '• Issuing official tax invoices under certified Tax ID: 781-865-344.',
        '• Providing prompt customer support and responding to technical inquiries.',
      ],
    },
    {
      id: 'data-security',
      icon: FaLock,
      title: '4. Data Security & Confidentiality',
      content: [
        'We enforce strict technical and organizational measures to prevent unauthorized access, disclosure, or alteration of your personal data.',
        'All data transmission over our website is encrypted using industry-standard SSL/TLS encryption.',
        'Client data is strictly accessible only to authorized Dortmund project management personnel.',
      ],
    },
    {
      id: 'sharing',
      icon: FaUserShield,
      title: '5. Zero Third-Party Selling or Sharing',
      content: [
        'Dortmund Contracting strictly does NOT sell, rent, trade, or share your personal information with external advertisers or marketing agencies.',
        'Information is only disclosed to official Egyptian government authorities when mandated by legal and regulatory requirements.',
      ],
    },
    {
      id: 'cookies',
      icon: FaFileContract,
      title: '6. Cookies & Browser Storage',
      content: [
        'Our website uses lightweight cookies solely to enhance user experience, preserve UI preferences (language and dark/light mode), and optimize load times.',
        'You can manage or disable cookies at any time via your browser settings.',
      ],
    },
    {
      id: 'rights',
      icon: FaCheckCircle,
      title: '7. Your Rights & Control',
      content: [
        'You maintain full rights to contact Dortmund management at any time to:',
        '• Request access to or updates of your contact information.',
        '• Request deletion of your contact records following project completion.',
        '• Inquire about data handling practices under this policy.',
      ],
    },
  ];

  const sections = lang === 'ar' ? sectionsAr : sectionsEn;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-[#0a1628] text-slate-800 dark:text-gray-200 transition-colors duration-300 pt-28 pb-20">
        {/* Header Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#D4A843]/10 via-transparent to-transparent">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-gray-400 mb-6 font-semibold">
              <Link href="/" className="hover:text-[#D4A843] flex items-center gap-1.5 transition-colors">
                <FaHome className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'الرئيسية' : 'Home'}</span>
              </Link>
              <span>/</span>
              <span className="text-[#D4A843]">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#D4A843]/15 border border-[#D4A843]/30 text-[#8F6B17] dark:text-[#D4A843] px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-sm"
            >
              <FaShieldAlt className="w-3.5 h-3.5" />
              <span>
                {lang === 'ar'
                  ? 'سجل ضريبي معتمد: 781-865-344 | حماية كاملة للبيانات'
                  : 'Certified Tax ID: 781-865-344 | Total Data Protection'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight"
            >
              {lang === 'ar' ? 'سياسة الخصوصية وسرية البيانات' : 'Privacy & Confidentiality Policy'}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              {lang === 'ar'
                ? 'نحن في شركة دورتمون نعتبر خصوصية عملائنا وسلامة بياناتهم أمانة قانونية وأخلاقية نلتزم بها بكل شفافية في جميع تعاملاتنا ومشاريعنا.'
                : 'At Dortmund Contracting, we hold client confidentiality and data security as a legal and ethical pledge upheld across all operations.'}
            </motion.p>

            <div className="mt-4 text-xs text-slate-500 dark:text-gray-400 font-medium">
              {lang === 'ar' ? 'آخر تحديث: أكتوبر 2026' : 'Last Updated: October 2026'}
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.article
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#D4A843]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#D4A843]/15 text-[#D4A843] flex items-center justify-center text-lg flex-shrink-0">
                      <Icon />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed pr-2">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </motion.article>
              );
            })}

            {/* Official Contact & Privacy Inquiries Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0a1628] to-[#12233f] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#D4A843]/40 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A843]/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#D4A843]/20 border border-[#D4A843]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FDE68A] mb-4">
                  <FaFileContract className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'مسؤولو الاتصال والخصوصية المباشرون' : 'Direct Privacy Officers'}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black mb-3">
                  {lang === 'ar' ? 'هل لديك أي استفسار أو طلب بخصوص بياناتك؟' : 'Have Questions Regarding Your Data?'}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  {lang === 'ar'
                    ? 'فريق إدارة شركة دورتمون متاح للتواصل المباشر والرد على أي أسئلة تتعلق ببياناتك أو مقايسات مشاريعك بكل وضوح وسرعة.'
                    : 'Dortmund management is readily available to answer any questions regarding your data or project quotations promptly.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone 1 */}
                  <a
                    href="tel:+201029046651"
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4A843] text-[#0a1628] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <span className="text-xs text-gray-300 font-semibold block">
                        {lang === 'ar' ? 'محمود أيمن — إدارة المشاريع' : 'Mahmoud Ayman — Project Management'}
                      </span>
                      <span dir="ltr" className="text-lg font-black font-mono text-white">
                        01029046651
                      </span>
                    </div>
                  </a>

                  {/* Phone 2 */}
                  <a
                    href="tel:+201035633986"
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4A843] text-[#0a1628] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <span className="text-xs text-gray-300 font-semibold block">
                        {lang === 'ar' ? 'محمود حمادة — إدارة العمليات' : 'Mahmoud Hamada — Operations'}
                      </span>
                      <span dir="ltr" className="text-lg font-black font-mono text-white">
                        01035633986
                      </span>
                    </div>
                  </a>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://wa.me/201029046651?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%AF%D9%88%D8%B1%D8%AA%D9%85%D9%88%D9%86%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%AD%D9%88%D9%84%20%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'محادثة فورية عبر واتساب' : 'Chat via WhatsApp'}</span>
                  </a>

                  <Link
                    href="/"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
                  >
                    <FaHome className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'العودة للصفحة الرئيسية' : 'Back to Home'}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

