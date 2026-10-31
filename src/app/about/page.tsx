'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SectionTitle from '@/components/SectionTitle';
import ScrollToTop from '@/components/ScrollToTop';
import {
  FaShieldAlt,
  FaFileContract,
  FaUserTie,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaAward,
  FaHardHat,
} from 'react-icons/fa';
import { useApp } from '@/context/AppContext';

export default function AboutPage() {
  const { lang, t } = useApp();

  const values = [
    {
      title: lang === 'ar' ? 'الجودة الفائقة' : 'Superior Quality',
      desc:
        lang === 'ar'
          ? 'نلتزم بأعلى معايير التنفيذ الهندسي واختيار أجود خامات الرمل والأسمنت والسن.'
          : 'Committed to top engineering standards and supplying certified grade sand, cement and aggregate.',
    },
    {
      title: lang === 'ar' ? 'الأمان الإنشائي' : 'Structural Safety',
      desc:
        lang === 'ar'
          ? 'تكسير حوائط وتجريد حمامات بحرفية تامة دون المساس بالأعمدة والكمرات الخرسانية.'
          : 'Partition wall demolition and tile stripping avoiding any damage to columns or beams.',
    },
    {
      title: lang === 'ar' ? 'الالتزام والسرعة' : 'Punctuality & Speed',
      desc:
        lang === 'ar'
          ? 'توفير العمالة وتشوين المواد خلال 24 ساعة بموقعك في أي محافظة بمصر.'
          : 'Deployment of labor squads and hoisting materials within 24 hours nationwide.',
    },
    {
      title: lang === 'ar' ? 'الشرعية الضريبية' : 'Tax & Legal Compliance',
      desc:
        lang === 'ar'
          ? 'شركة دورتمون مسجلة ضريبياً برقم 781-865-344 وتقدم فواتير رسمية لكافة المشاريع.'
          : 'Fully registered with Tax ID 781-865-344, providing official verified tax invoices.',
    },
  ];

  const leaders = [
    {
      name: t('person.mahmoud_ayman'),
      role: t('person.mahmoud_ayman_role'),
      phone: '01029046651',
      desc:
        lang === 'ar'
          ? 'مسؤول التخطيط، إعداد المقايسات الفورية، إدارة عقود التوريدات وتنسيق متطلبات الشركات والمكاتب الاستشارية.'
          : 'Oversees project planning, instant quote estimates, supply contract negotiations, and corporate accounts.',
    },
    {
      name: t('person.mahmoud_hamada'),
      role: t('person.mahmoud_hamada_role'),
      phone: '01035633986',
      desc:
        lang === 'ar'
          ? 'مسؤول العمليات الميدانية، قيادة أطقم العمالة، الإشراف على أوناش الرفع الهيدروليكية ومعدات التكسير وضمان السلامة.'
          : 'Directs field operations, commands labor squads, supervises hydraulic cranes, and enforces safety.',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white dark:bg-[#0a1628] text-slate-900 dark:text-white transition-colors duration-300 pt-28 pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A843]/15 border border-[#D4A843]/30 text-[#D4A843] text-xs sm:text-sm font-black mb-4">
            <FaShieldAlt />
            <span>{t('tax.certified')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 text-slate-900 dark:text-white">
            {lang === 'ar' ? 'عن شركة دورتمون للمقاولات والتوريدات' : 'About Dortmund Contracting & Supplies'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'ar'
              ? 'الكيان الرائد في مصر لخدمات توريد العمالة المدربة، تشوين مواد البناء، أعمال التكسير والهدم المتخصصة، ونظافة المواقع الإنشائية بجميع المحافظات.'
              : 'Egypt’s premier enterprise for certified labor supply, construction materials crane hoisting, specialized structural demolition, and post-construction cleanup.'}
          </p>
        </div>

        {/* Company Overview & Tax Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-black text-[#D4A843] uppercase tracking-wider block mb-2">
                {lang === 'ar' ? 'من نحن ورؤيتنا' : 'Who We Are & Our Vision'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-6 text-slate-900 dark:text-white">
                {lang === 'ar'
                  ? 'نبني الثقة من خلال العمل الدقيق والالتزام الصارم'
                  : 'Building Trust Through Precision & Strict Reliability'}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                {lang === 'ar'
                  ? 'تأسست شركة دورتمون لتكون شريك النجاح الأول للمقاولين، المهندسين، وملاك العقارات في مصر. نحرص على تقديم خدمات المقاولات الميدانية بأعلى مستويات الحرفية والتأمين الإنشائي، مستندين إلى كوادر بشرية خبيرة ومعدات هيدروليكية متطورة.'
                  : 'Dortmund was founded to serve as the premier execution partner for contractors, consultants, and developers in Egypt, delivering high-tier field services backed by heavy hydraulic machinery and vetted crews.'}
              </p>

              {/* Tax proof badge */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-[#D4A843]/30 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#D4A843]/20 flex items-center justify-center text-[#D4A843] text-xl flex-shrink-0">
                  <FaFileContract />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-gray-400 block font-bold">
                    {lang === 'ar' ? 'سجل ضريبي وتجاري رسمي معتمد:' : 'Official Certified Tax Registry:'}
                  </span>
                  <span className="text-lg font-mono font-black text-slate-900 dark:text-white" dir="ltr">
                    781-865-344
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 rounded-2xl shadow-sm hover:border-[#D4A843] transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D4A843]/20 text-[#D4A843] flex items-center justify-center text-sm font-black mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Management Team */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionTitle
            title={lang === 'ar' ? 'الإدارة التنفيذية المباشرة' : 'Executive Management'}
            subtitle={lang === 'ar' ? 'تواصل مباشر مع مسؤولي المشاريع والعمليات' : 'Direct Contact with Operations Leaders'}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-[#D4A843] transition-all"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#D4A843]/15 text-[#D4A843] flex items-center justify-center text-2xl font-black">
                      <FaUserTie />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-[#D4A843] font-bold">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                    {leader.desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                  <a
                    href={`tel:+20${leader.phone.substring(1)}`}
                    aria-label={`اتصال هاتفياً بـ ${leader.name} ${leader.phone}`}
                    title={`اتصال هاتفياً بـ ${leader.name} ${leader.phone}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-[#D4A843] hover:text-[#0a1628] text-slate-900 dark:text-white text-xs font-black transition-all flex items-center justify-center gap-2"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                    <span dir="ltr">{leader.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/20${leader.phone.substring(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`مراسلة ${leader.name} عبر واتساب`}
                    title={`مراسلة ${leader.name} عبر واتساب`}
                    className="p-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
