'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaWhatsapp, FaTools } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useApp } from '@/context/AppContext';

export default function NotFound() {
  const { lang, t } = useApp();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-[#0a1628] flex items-center justify-center relative overflow-hidden transition-colors duration-300 pt-28 pb-16 px-4">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4A843]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* 404 Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
            className="mb-6"
          >
            <span className="text-8xl sm:text-9xl md:text-[11rem] font-black leading-none bg-gradient-to-b from-[#D4A843] to-[#B8922E] bg-clip-text text-transparent font-mono select-none drop-shadow-sm">
              404
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-[#D4A843]/15 border border-[#D4A843]/30 text-[#D4A843] flex items-center justify-center text-3xl mx-auto mb-6 shadow-md"
          >
            <FaTools />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4"
          >
            {lang === 'ar' ? 'عفواً، الصفحة غير موجودة' : 'Page Not Found'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed"
          >
            {lang === 'ar'
              ? 'الصفحة التي تحاول الوصول إليها قد تكون تم نقلها أو حذفها، أو أن العنوان المكتوب غير دقيق. يمكنك الرجوع للصفحة الرئيسية أو التواصل المباشر مع إدارة دورتمون.'
              : 'The page you are looking for may have been moved, removed, or is temporarily unavailable. Return home or contact management directly.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              title={lang === 'ar' ? 'الرجوع إلى الصفحة الرئيسية' : 'Return to Home'}
              aria-label={lang === 'ar' ? 'الرجوع إلى الصفحة الرئيسية لشركة دورتمون' : 'Return to Dortmund Home'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#FDE68A] via-[#D4A843] to-[#B8922E] text-[#0a1628] rounded-2xl font-black text-sm hover:brightness-110 shadow-lg shadow-[#D4A843]/20 transition-all"
            >
              <FaHome className="w-4 h-4" />
              <span>{lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
            </Link>

            <a
              href="https://wa.me/201029046651?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%AF%D9%88%D8%B1%D8%AA%D9%85%D9%88%D9%86%D8%8C%20%D9%88%D8%A7%D8%AC%D9%87%D8%AA%20%D8%AE%D8%B7%D8%A3%20404%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9"
              target="_blank"
              rel="noopener noreferrer"
              title={lang === 'ar' ? 'تواصل مع الدعم عبر واتساب' : 'Contact Support via WhatsApp'}
              aria-label={lang === 'ar' ? 'تواصل مع الدعم الفني وإدارة دورتمون عبر واتساب' : 'Contact Dortmund via WhatsApp'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white dark:bg-white/10 text-slate-800 dark:text-white border border-slate-300 dark:border-white/20 rounded-2xl font-bold text-sm hover:border-[#D4A843] transition-all"
            >
              <FaWhatsapp className="w-4 h-4 text-green-500" />
              <span>{lang === 'ar' ? 'محادثة فورية مع الإدارة' : 'WhatsApp Management'}</span>
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
