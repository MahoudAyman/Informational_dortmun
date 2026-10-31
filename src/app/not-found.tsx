'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaHome,
  FaSearch,
  FaWhatsapp,
  FaPhoneAlt,
  FaHardHat,
  FaTools,
  FaTruckLoading,
  FaBroom,
  FaCalculator,
  FaQuestionCircle,
  FaArrowRight,
  FaArrowLeft,
  FaUndo,
  FaShieldAlt,
  FaFolderOpen,
} from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useApp } from '@/context/AppContext';

export default function NotFound() {
  const { lang } = useApp();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const ArrowIcon = lang === 'ar' ? FaArrowLeft : FaArrowRight;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const allDestinations = useMemo(
    () => [
      {
        id: 'home',
        title: lang === 'ar' ? 'الصفحة الرئيسية' : 'Home Page',
        desc: lang === 'ar' ? 'نظرة عامة على خدمات وتوريدات شركة دورتمون' : 'Overview of Dortmund services & supplies',
        href: '/',
        icon: FaHome,
        category: lang === 'ar' ? 'عام' : 'General',
        keywords: ['رئيسية', 'home', 'دورتمون', 'dortmund', 'موقع'],
      },
      {
        id: 'labor',
        title: lang === 'ar' ? 'توريد العمالة والصنايعية' : 'Skilled Labor Supply',
        desc: lang === 'ar' ? 'عمالة مدربة وصنايعية هيلتي وتكسير وتشوين' : 'Certified craftsmen and field labor teams',
        href: '/services#labor',
        icon: FaHardHat,
        category: lang === 'ar' ? 'خدمات' : 'Services',
        keywords: ['عمال', 'صنايعية', 'عمالة', 'تشغيل', 'labor', 'workers'],
      },
      {
        id: 'demolition',
        title: lang === 'ar' ? 'أعمال التكسير والهدم' : 'Demolition & Breaking',
        desc: lang === 'ar' ? 'تكسير حوائط، حمامات، مطابخ، وهدم مباني' : 'Wall, bathroom, kitchen and house demolition',
        href: '/services#demolition',
        icon: FaTools,
        category: lang === 'ar' ? 'خدمات' : 'Services',
        keywords: ['تكسير', 'هدم', 'حوائط', 'حمامات', 'مطابخ', 'هيلتي', 'demolition'],
      },
      {
        id: 'materials',
        title: lang === 'ar' ? 'تشوين ونقل مواد البناء' : 'Material Hoisting',
        desc: lang === 'ar' ? 'تشوين رملة، أسمنت، وسن بالونش للأدوار العليا' : 'Sand, cement & gravel hoisting with cranes',
        href: '/services#materials',
        icon: FaTruckLoading,
        category: lang === 'ar' ? 'خدمات' : 'Services',
        keywords: ['تشوين', 'رمل', 'رملة', 'اسمنت', 'سن', 'ونش', 'hoisting', 'materials'],
      },
      {
        id: 'cleaning',
        title: lang === 'ar' ? 'نظافة المواقع ورفع الردش' : 'Site Cleanup & Hauling',
        desc: lang === 'ar' ? 'تعبئة وتنزيل ونقل مخلفات الهدم والتشطيب' : 'Post-renovation rubble removal and deep site cleaning',
        href: '/services#cleaning',
        icon: FaBroom,
        category: lang === 'ar' ? 'خدمات' : 'Services',
        keywords: ['نظافة', 'ردش', 'انقاض', 'مخلفات', 'تنزيل', 'cleaning', 'rubble'],
      },
      {
        id: 'calc',
        title: lang === 'ar' ? 'حاسبة المقايسة الذكية' : 'Instant Cost Calculator',
        desc: lang === 'ar' ? 'احسب تكلفة التكسير أو التشوين في ثوانٍ' : 'Estimate your demolition or hoisting cost in seconds',
        href: '/#calculator',
        icon: FaCalculator,
        category: lang === 'ar' ? 'أدوات' : 'Tools',
        keywords: ['حاسبة', 'سعر', 'مقايسة', 'تكلفة', 'احسب', 'calculator', 'price'],
      },
      {
        id: 'projects',
        title: lang === 'ar' ? 'معرض المشاريع السابقة' : 'Completed Projects',
        desc: lang === 'ar' ? 'شاهد صور وفيديوهات أعمالنا قبل وبعد التنفيذ' : 'Browse before & after images of recent site works',
        href: '/projects',
        icon: FaFolderOpen,
        category: lang === 'ar' ? 'أعمالنا' : 'Portfolio',
        keywords: ['مشاريع', 'اعمال', 'قبل وبعد', 'صور', 'projects'],
      },
      {
        id: 'faq',
        title: lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
        desc: lang === 'ar' ? 'إجابات حول الأسعار، المواعيد، والسجل الضريبي' : 'Answers about pricing, timelines and tax verification',
        href: '/faq',
        icon: FaQuestionCircle,
        category: lang === 'ar' ? 'مساعدة' : 'Help',
        keywords: ['اسئلة', 'شائعة', 'سؤال', 'استفسار', 'faq'],
      },
      {
        id: 'privacy',
        title: lang === 'ar' ? 'سياسة الخصوصية وسرية البيانات' : 'Privacy & Confidentiality',
        desc: lang === 'ar' ? 'حماية بيانات العملاء والسجل الضريبي 781-865-344' : 'Customer data protection and official tax credentials',
        href: '/privacy',
        icon: FaShieldAlt,
        category: lang === 'ar' ? 'قانوني' : 'Legal',
        keywords: ['خصوصية', 'بيانات', 'سجل ضريبي', 'امان', 'privacy'],
      },
    ],
    [lang]
  );

  const filteredDestinations = useMemo(() => {
    if (!searchQuery.trim()) return allDestinations.slice(0, 4);
    const query = searchQuery.trim().toLowerCase();
    return allDestinations.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(query))
    );
  }, [searchQuery, allDestinations]);

  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const brokenLinkWhatsappUrl = `https://wa.me/201029046651?text=${encodeURIComponent(
    `مرحباً إدارة دورتمون، واجهت صفحة غير موجودة (404) على هذا الرابط:\n${currentUrl || 'صفحة غير محددة'}`
  )}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-[#0a1628] text-slate-800 dark:text-gray-200 transition-colors duration-300 pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#D4A843]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[32rem] h-[32rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Animated 404 Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
            className="relative inline-block mb-3"
          >
            <span className="text-8xl sm:text-9xl md:text-[11rem] font-black leading-none bg-gradient-to-b from-[#FDE68A] via-[#D4A843] to-[#B8922E] bg-clip-text text-transparent font-mono select-none drop-shadow-sm">
              404
            </span>
            <span className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 px-3 py-1 bg-[#D4A843] text-[#0a1628] text-xs sm:text-sm font-black rounded-full shadow-lg border-2 border-white dark:border-[#0a1628] uppercase tracking-wider animate-bounce">
              {lang === 'ar' ? 'صفحة مفقودة' : 'Lost Link'}
            </span>
          </motion.div>

          {/* Icon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="w-16 h-16 rounded-2xl bg-[#D4A843]/15 border border-[#D4A843]/30 text-[#D4A843] flex items-center justify-center text-2xl mx-auto mb-6 shadow-md"
          >
            <FaTools />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4"
          >
            {lang === 'ar' ? 'عفواً، لم نتمكن من العثور على هذه الصفحة' : 'Oops! Page Not Found'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed"
          >
            {lang === 'ar'
              ? 'يبدو أن الرابط الذي طلبته قد تم نقله أو تغييره أثناء تحديثات الموقع، أو أن العنوان غير دقيق. يمكنك البحث أدناه، أو العودة للصفحة السابقة، أو التواصل مباشرة مع إدارة دورتمون.'
              : 'The link you requested might have been moved or removed during recent site upgrades. Use the live search below, navigate back, or contact Dortmund management.'}
          </motion.p>

          {/* Quick Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
          >
            <button
              onClick={handleGoBack}
              title={lang === 'ar' ? 'الرجوع للصفحة السابقة' : 'Go back to previous page'}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-white/10 text-slate-800 dark:text-white border border-slate-300 dark:border-white/20 font-bold text-sm hover:border-[#D4A843] hover:text-[#D4A843] transition-all shadow-sm"
            >
              <FaUndo className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'الرجوع للخلف' : 'Go Back'}</span>
            </button>

            <Link
              href="/"
              title={lang === 'ar' ? 'الرجوع إلى الصفحة الرئيسية' : 'Return to Home'}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#FDE68A] via-[#D4A843] to-[#B8922E] text-[#0a1628] font-black text-sm hover:brightness-110 shadow-lg shadow-[#D4A843]/20 transition-all"
            >
              <FaHome className="w-4 h-4" />
              <span>{lang === 'ar' ? 'الصفحة الرئيسية' : 'Home'}</span>
            </Link>

            <a
              href="tel:+201029046651"
              title={lang === 'ar' ? 'اتصال هاتفي مباشر بالإدارة' : 'Call management'}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-white/10 text-slate-800 dark:text-white border border-slate-300 dark:border-white/20 font-bold text-sm hover:border-[#D4A843] transition-all shadow-sm"
            >
              <FaPhoneAlt className="w-3.5 h-3.5 text-[#D4A843]" />
              <span dir="ltr" className="font-mono">01029046651</span>
            </a>

            <a
              href={brokenLinkWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={lang === 'ar' ? 'إبلاغ الإدارة عن هذا الرابط عبر واتساب' : 'Report this broken URL via WhatsApp'}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>{lang === 'ar' ? 'إبلاغ عن الرابط' : 'Report Broken Link'}</span>
            </a>
          </motion.div>

          {/* Interactive Live Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                <FaSearch className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'ar'
                    ? 'ابحث عما تبحث عنه فوراً (تكسير، تشوين، عمالة، حاسبة، أسعار...)'
                    : 'Search what you need (demolition, labor, hoisting, calculator...)'
                }
                className="w-full pl-4 pr-11 py-4 bg-white dark:bg-[#071120] border-2 border-slate-300 dark:border-white/15 focus:border-[#D4A843] rounded-2xl text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none transition-all shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 left-0 pl-4 flex items-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  {lang === 'ar' ? 'مسح' : 'Clear'}
                </button>
              )}
            </div>
          </motion.div>

          {/* Filtered & Suggested Navigation Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm text-right"
          >
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200 dark:border-white/10">
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {searchQuery
                  ? lang === 'ar'
                    ? `نتائج البحث عن "${searchQuery}" (${filteredDestinations.length}):`
                    : `Search results for "${searchQuery}" (${filteredDestinations.length}):`
                  : lang === 'ar'
                  ? 'وجهات مقترحة وسريعة قد تساعدك:'
                  : 'Suggested destinations that might help:'}
              </h2>
              <span className="text-xs text-[#8F6B17] dark:text-[#D4A843] font-bold">
                {lang === 'ar' ? 'شركة دورتمون الرسمية' : 'Official Dortmund Hub'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              <AnimatePresence>
                {filteredDestinations.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className="h-full p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 hover:border-[#D4A843] dark:hover:border-[#D4A843] transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-9 h-9 rounded-xl bg-[#D4A843]/15 text-[#D4A843] flex items-center justify-center text-base group-hover:scale-110 transition-transform">
                              <Icon />
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-gray-300">
                              {item.category}
                            </span>
                          </div>
                          <h3 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#D4A843] transition-colors mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#8F6B17] dark:text-[#D4A843]">
                          <span>{lang === 'ar' ? 'زيارة الصفحة' : 'Open Page'}</span>
                          <ArrowIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {filteredDestinations.length === 0 && (
              <div className="py-8 text-center text-slate-500 dark:text-gray-400">
                <p className="text-sm font-semibold mb-2">
                  {lang === 'ar' ? 'لم يتم العثور على نتائج مطابقة لبحثك' : 'No matching pages found for your query'}
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#D4A843] underline font-bold"
                >
                  {lang === 'ar' ? 'عرض جميع الوجهات المقترحة' : 'Show all suggested destinations'}
                </button>
              </div>
            )}
          </motion.div>

          {/* Direct Hotline Assistance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#D4A843]/15 via-transparent to-[#D4A843]/15 border border-[#D4A843]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8F6B17] dark:text-[#D4A843] mb-1">
                <FaShieldAlt className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'سجل ضريبي معتمد: 781-865-344' : 'Certified Tax Registration: 781-865-344'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                {lang === 'ar' ? 'هل تبحث عن معاينة موقع أو عرض سعر عاجل؟' : 'Need an urgent site survey or quotation?'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400">
                {lang === 'ar'
                  ? 'اتصل مباشرة بمسؤولي دورتمون: محمود أيمن (01029046651) أو محمود حمادة (01035633986)'
                  : 'Contact managers directly: Mahmoud Ayman (01029046651) or Mahmoud Hamada (01035633986)'}
              </p>
            </div>

            <a
              href="tel:+201029046651"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#D4A843] text-[#0a1628] font-black text-xs hover:brightness-110 shadow-md transition-all flex-shrink-0"
            >
              <FaPhoneAlt className="w-3 h-3" />
              <span>{lang === 'ar' ? 'اتصل الآن 24 ساعة' : 'Call 24/7'}</span>
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
