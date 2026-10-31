'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { useApp } from '@/context/AppContext';

export default function WhatsAppFloat() {
  const { lang, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed bottom-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-50`}>
      {/* Pop-up Quick Contacts Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className={`absolute bottom-16 ${
              lang === 'ar' ? 'left-0' : 'right-0'
            } w-72 bg-white dark:bg-[#0a1628] border-2 border-[#D4A843] rounded-3xl p-4 shadow-2xl space-y-3 backdrop-blur-md`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
              <span className="text-xs font-black text-slate-900 dark:text-white">
                {lang === 'ar' ? 'تواصل مباشر مع الإدارة' : 'Direct Management Contact'}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={lang === 'ar' ? 'إغلاق نافذة الاتصال المباشر' : 'Close direct contacts card'}
                title={lang === 'ar' ? 'إغلاق' : 'Close'}
                className="w-6 h-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-xs text-slate-500 hover:text-red-500 transition-colors cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mahmoud Ayman */}
            <a
              href="https://wa.me/201029046651?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%85%D8%AD%D9%85%D9%88%D8%AF%20%D8%A3%D9%8A%D9%85%D9%86%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%B7%D9%84%D8%A8%20%D9%85%D9%82%D8%A7%D9%8A%D8%B3%D8%A9%20%D9%88%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1"
              target="_blank"
              rel="noopener noreferrer"
              title="محادثة واتساب فورية مع محمود أيمن (01029046651)"
              aria-label="محادثة واتساب فورية مع محمود أيمن (01029046651)"
              className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-[#D4A843]/15 border border-slate-200 dark:border-white/10 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-green-500/20 text-green-500 flex items-center justify-center text-sm font-black">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white group-hover:text-[#D4A843] transition-colors">
                    {t('person.mahmoud_ayman')}
                  </p>
                  <span className="text-[10px] text-[#D4A843] font-bold block">
                    {t('person.mahmoud_ayman_role')}
                  </span>
                </div>
              </div>
              <span dir="ltr" className="text-xs font-mono font-bold text-slate-700 dark:text-gray-300">
                01029046651
              </span>
            </a>

            {/* Mahmoud Hamada */}
            <a
              href="tel:+201035633986"
              title="اتصال مباشر بمحمود حمادة (01035633986)"
              aria-label="اتصال هاتفي مباشر بمحمود حمادة (01035633986)"
              className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-[#D4A843]/15 border border-slate-200 dark:border-white/10 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center text-sm font-black">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white group-hover:text-[#D4A843] transition-colors">
                    {t('person.mahmoud_hamada')}
                  </p>
                  <span className="text-[10px] text-[#D4A843] font-bold block">
                    {t('person.mahmoud_hamada_role')}
                  </span>
                </div>
              </div>
              <span dir="ltr" className="text-xs font-mono font-bold text-slate-700 dark:text-gray-300">
                01035633986
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={lang === 'ar' ? 'تواصل فوري عبر واتساب وهاتف إدارة شركة دورتمون' : 'Direct contact via WhatsApp and phone'}
        title={lang === 'ar' ? 'تواصل فوري مع الإدارة' : 'Quick Contact'}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <FaWhatsapp className="w-7 h-7" />
      </button>
    </div>
  );
}
