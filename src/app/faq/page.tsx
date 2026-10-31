'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SectionTitle from '@/components/SectionTitle';
import ScrollToTop from '@/components/ScrollToTop';
import { FaShieldAlt, FaChevronDown, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { useApp } from '@/context/AppContext';

export default function FAQPage() {
  const { lang, t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q:
        lang === 'ar'
          ? 'ما هي الخدمات الميدانية الرئيسية التي تقدمها شركة دورتمون؟'
          : 'What core contracting services does Dortmund provide?',
      a:
        lang === 'ar'
          ? 'نقدم أربع خدمات رئيسية: توريد عمالة مدربة وصنايعية هيلتي، تشوين خامات البناء (رملة، أسمنت، سن) مع الرفع بالأوناش للأدوار العليا، أعمال التكسير والهدم المتخصصة للحوائط والحمامات والمنازل، ونظافة المواقع ورفع ونقل الردش للمقالب العمومية المرخصة.'
          : 'We deliver four core services: certified labor & jackhammer craftsmen supply, crane hoisting of sand, cement & aggregate to high floors, specialized structural demolition (partitions, bathrooms, houses), and post-construction cleanup and licensed rubble transport.',
    },
    {
      q:
        lang === 'ar'
          ? 'هل أعمال تكسير الحوائط والحمامات آمنة على المبنى والخرسانة؟'
          : 'Is wall and bathroom demolition structurally safe for the building?',
      a:
        lang === 'ar'
          ? 'نعم بكل تأكيد. نحن نقوم بفحص مسبق لضمان عدم المساس بالأعمدة والكمرات الخرسانية الحاملة. نستخدم هيلتيات حديثة صامتة ومعدات دقيقة لتكسير القواطع فقط وتجريد السيراميك بأمان هندسي تام.'
          : 'Absolutely. We conduct pre-demolition assessments to strictly protect load-bearing columns and beams. We utilize low-vibration breakers and precision tools to remove partitions safely without structural impact.',
    },
    {
      q:
        lang === 'ar'
          ? 'ما هي الأماكن والمحافظات التي تغطيها شركة دورتمون؟'
          : 'Which areas and governorates does Dortmund cover?',
      a:
        lang === 'ar'
          ? 'نغطي جميع محافظات جمهورية مصر العربية 24 ساعة يومياً. نصل خلال ساعتين في القاهرة الكبرى، التجمع، الشروق، الجيزة، 6 أكتوبر، الشيخ زايد، والعاصمة الإدارية، وخلال 24 ساعة في الإسكندرية ومحافظات الدلتا والصعيد.'
          : 'We operate 24/7 across all Egyptian governorates. Fast deployment within 2 hours in Greater Cairo, New Cairo, Giza, 6th of October, Sheikh Zayed, and New Capital, and within 24 hours across Alexandria, Delta, and Upper Egypt.',
    },
    {
      q:
        lang === 'ar'
          ? 'كيف يتم حساب تكلفة التشوين أو التكسير وطلب المقايسة؟'
          : 'How are costs estimated and quotes requested?',
      a:
        lang === 'ar'
          ? 'يتم التسعير بشفافية بناءً على حجم المساحة (بالمتر المربع للتكسير)، أو كمية المواد وعدد الأدوار (للتشوين). يمكنك استخدام حاسبة التكلفة بموقعنا أو التواصل المباشر مع محمود أيمن (01029046651) أو محمود حمادة (01035633986) للحصول على مقايسة فورية ومعاينة مجانية للموقع.'
          : 'Pricing is fully transparent based on square meters (for demolition) or tonnage and floor elevation (for hoisting). You can use our on-site estimator or call Mahmoud Ayman (01029046651) or Mahmoud Hamada (01035633986) for a free survey.',
    },
    {
      q:
        lang === 'ar'
          ? 'هل شركة دورتمون مسجلة رسمياً وتصدر فواتير ضريبية؟'
          : 'Is Dortmund officially registered and tax compliant?',
      a:
        lang === 'ar'
          ? 'نعم، شركة دورتمون مسجلة رسمياً برقم ضريبي معتمد: 781-865-344. نصدر فواتير ضريبية معتمدة ونتعامل مع كبرى شركات المقاولات والمكاتب الهندسية والأفراد بعقود رسمية وموثقة.'
          : 'Yes, Dortmund is officially registered with Certified Tax ID: 781-865-344. We issue verified tax invoices and formal execution contracts for companies, consultants, and property owners.',
    },
    {
      q:
        lang === 'ar'
          ? 'هل تشمل خدمة التكسير تنزيل الردش ونظافة الشقة أو الموقع؟'
          : 'Does demolition service include rubble removal and site cleanup?',
      a:
        lang === 'ar'
          ? 'نعم، نوفر باقات متكاملة تشمل التكسير، تعبئة الردش والمخلفات في شكائر، تنزيلها بالونش أو العمالة، ونقلها بسيارات مجهزة للمقالب العمومية، مع كنس الموقع وتسليمه نظيفاً على المفتاح.'
          : 'Yes, we provide all-inclusive turnkey packages: demolition, rubble bagging, crane lowering, licensed dump truck hauling, and deep floor sweeping ready for the next trade.',
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
            {lang === 'ar' ? 'الأسئلة الشائعة وإجاباتها' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'ar'
              ? 'كل ما تود معرفته عن خدمات التكسير، التشوين، توريد العمالة، والنظافة، بالإضافة إلى المعايير القانونية والضريبية لشركة دورتمون.'
              : 'Everything you need to know regarding our demolition, hoisting, labor supply, and cleanup services, as well as legal and tax standards.'}
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:border-[#D4A843]/50 transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-label={faq.q}
                    title={faq.q}
                    className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <FaChevronDown
                      className={`w-4 h-4 text-[#D4A843] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed border-t border-slate-200 dark:border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black mb-3 text-slate-900 dark:text-white">
              {lang === 'ar' ? 'هل لديك استفسار آخر لم تجد إجابته هنا؟' : 'Have a Question Not Answered Here?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
              {lang === 'ar'
                ? 'فريق إدارة العمليات والتوريدات متاح 24 ساعة للرد على كافة أسئلتكم وتقديم المعاينة الميدانية المجانية.'
                : 'Our operations management team is available 24/7 to answer all queries and schedule free surveys.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/201029046651"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={lang === 'ar' ? 'محادثة فورية مع إدارة شركة دورتمون عبر واتساب' : 'Chat directly with Dortmund management on WhatsApp'}
                title={lang === 'ar' ? 'محادثة فورية مع إدارة شركة دورتمون عبر واتساب' : 'Chat directly with Dortmund management on WhatsApp'}
                className="px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-black text-sm flex items-center gap-2 shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>{lang === 'ar' ? 'محادثة فورية مع الإدارة' : 'Chat With Management'}</span>
              </a>

              <a
                href="tel:+201029046651"
                aria-label={`اتصال هاتفياً بـ ${t('person.mahmoud_ayman')}`}
                title={`اتصال هاتفياً بـ ${t('person.mahmoud_ayman')}`}
                className="px-6 py-3.5 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-[#D4A843] hover:text-[#0a1628] text-slate-900 dark:text-white font-black text-sm flex items-center gap-2 transition-colors"
              >
                <FaPhoneAlt className="w-4 h-4" />
                <span>{t('person.mahmoud_ayman')}: 01029046651</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
