'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiPhone, HiGlobeAlt } from 'react-icons/hi';
import { FaSun, FaMoon, FaShieldAlt } from 'react-icons/fa';
import Logo from './Logo';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, theme, toggleLang, toggleTheme, t } = useApp();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 py-2.5 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0a1628]/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-[#D4A843]/20'
            : 'bg-white/90 dark:bg-[#0a1628]/90 backdrop-blur-md shadow-sm border-b border-slate-200/70 dark:border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              title={lang === 'ar' ? 'شركة دورتمون للمقاولات والتوريدات - الصفحة الرئيسية' : 'Dortmund Contracting & Supplies - Home'}
              aria-label={lang === 'ar' ? 'شركة دورتمون للمقاولات والتوريدات' : 'Dortmund Contracting & Supplies'}
              className="flex-shrink-0 group"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label={lang === 'ar' ? 'قائمة التنقل الرئيسية' : 'Main navigation'}
              className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-white/5 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  title={link.label}
                  aria-label={link.label}
                  className="relative px-4 py-2 text-sm font-bold text-slate-800 dark:text-gray-200 hover:text-[#D4A843] dark:hover:text-[#D4A843] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 right-2 left-2 h-0.5 bg-[#D4A843] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Phone quick call */}
              <a
                href="tel:+201029046651"
                title={lang === 'ar' ? 'اتصال مباشر بإدارة المشاريع (محمود أيمن: 01029046651)' : 'Call Projects Management (01029046651)'}
                aria-label={lang === 'ar' ? 'اتصال مباشر بإدارة المشاريع محمود أيمن' : 'Call Projects Management'}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-gray-200 hover:border-[#D4A843] hover:text-[#D4A843] transition-all"
              >
                <HiPhone className="w-4 h-4 text-[#D4A843]" />
                <span dir="ltr">01029046651</span>
              </a>

              {/* Theme Toggle (Dark / Light) */}
              <button
                onClick={toggleTheme}
                title={theme === 'dark' ? (lang === 'ar' ? 'تفعيل الوضع النهاري' : 'Switch to Light Mode') : (lang === 'ar' ? 'تفعيل الوضع الليلي' : 'Switch to Dark Mode')}
                aria-label={theme === 'dark' ? (lang === 'ar' ? 'تفعيل الوضع النهاري' : 'Switch to Light Mode') : (lang === 'ar' ? 'تفعيل الوضع الليلي' : 'Switch to Dark Mode')}
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-[#D4A843] dark:hover:text-[#D4A843] hover:border-[#D4A843] transition-all cursor-pointer shadow-sm hover:scale-105"
              >
                {theme === 'dark' ? (
                  <FaSun className="w-4 h-4 text-[#D4A843]" />
                ) : (
                  <FaMoon className="w-4 h-4 text-blue-500" />
                )}
              </button>

              {/* Language Toggle (AR / EN) */}
              <button
                onClick={toggleLang}
                title={lang === 'ar' ? 'Switch website language to English' : 'تغيير لغة الموقع إلى العربية'}
                aria-label={lang === 'ar' ? 'English - Switch language to English' : 'عربي - التبديل إلى اللغة العربية'}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-white/20 rounded-xl hover:border-[#D4A843] hover:text-[#D4A843] transition-all bg-slate-100 dark:bg-white/5 cursor-pointer hover:scale-105"
              >
                <HiGlobeAlt className="w-4 h-4 text-[#D4A843]" />
                <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                title={t('nav.quote')}
                aria-label={t('nav.quote')}
                className="px-5 py-2.5 text-sm font-black text-[#0a1628] bg-gradient-to-r from-[#FDE68A] via-[#D4A843] to-[#B8922E] rounded-xl hover:brightness-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A843]/30"
              >
                {t('nav.quote')}
              </Link>
            </div>

            {/* Mobile Actions & Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                title={theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'}
                aria-label={theme === 'dark' ? 'تبديل إلى الوضع النهاري' : 'تبديل إلى الوضع الليلي'}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-[#D4A843]"
              >
                {theme === 'dark' ? <FaSun className="w-4 h-4 text-[#D4A843]" /> : <FaMoon className="w-4 h-4 text-blue-500" />}
              </button>

              <button
                onClick={toggleLang}
                title="Language / اللغة"
                aria-label={lang === 'ar' ? 'EN - Switch to English' : 'عربي - التبديل إلى العربية'}
                className="px-2.5 py-1.5 text-xs font-bold border border-slate-300 dark:border-white/20 rounded-xl text-slate-800 dark:text-white bg-slate-100 dark:bg-white/5"
              >
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-gray-200 hover:text-[#D4A843] transition-colors cursor-pointer"
                aria-label={lang === 'ar' ? 'فتح قائمة التنقل الرئيسية' : 'Open mobile navigation menu'}
                title={lang === 'ar' ? 'فتح القائمة' : 'Open Menu'}
              >
                <HiMenuAlt3 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ─────────────────────────────────────────────────────────────
         LUXURY MOBILE DRAWER WITH ULTRA SMOOTH SPRING ANIMATION
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100]">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: lang === 'ar' ? '100%' : '-100%', opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: lang === 'ar' ? '100%' : '-100%', opacity: 0.8 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className={`fixed top-0 bottom-0 ${
                lang === 'ar' ? 'right-0 border-l' : 'left-0 border-r'
              } w-80 max-w-[85vw] bg-white dark:bg-[#0a1628] border-slate-200 dark:border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto`}
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0d1f3c]">
                  <Logo />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-gray-300 hover:text-red-500 hover:scale-110 transition-all duration-300 cursor-pointer"
                    aria-label={lang === 'ar' ? 'إغلاق قائمة التنقل' : 'Close navigation menu'}
                    title={lang === 'ar' ? 'إغلاق' : 'Close'}
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Tax Badge */}
                <div className="p-4 mx-4 mt-4 rounded-2xl bg-[#D4A843]/10 border border-[#D4A843]/30 flex items-center gap-2.5 text-xs text-[#D4A843]">
                  <FaShieldAlt className="w-4 h-4 flex-shrink-0 animate-pulse" />
                  <span>
                    {lang === 'ar' ? 'سجل ضريبي معتمد:' : 'Certified Tax ID:'}{' '}
                    <strong className="font-mono text-slate-900 dark:text-white font-bold">781-865-344</strong>
                  </span>
                </div>

                {/* Drawer Navigation Links with Staggered Fade-in */}
                <nav
                  aria-label={lang === 'ar' ? 'قائمة الجوال الجانبية' : 'Mobile drawer navigation'}
                  className="py-6 px-4 space-y-2"
                >
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * (idx + 1), duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        title={link.label}
                        aria-label={link.label}
                        className="flex items-center justify-between px-4 py-3.5 text-base font-black text-slate-800 dark:text-gray-100 hover:text-[#D4A843] dark:hover:text-[#D4A843] hover:bg-slate-100 dark:hover:bg-white/5 rounded-2xl transition-all duration-200 border border-transparent hover:border-[#D4A843]/30"
                      >
                        <span>{link.label}</span>
                        <span className="text-[#D4A843] text-sm">✦</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer CTA */}
              <div className="p-5 border-t border-slate-200 dark:border-white/10 space-y-3 bg-slate-50 dark:bg-[#07111e]">
                {/* Mahmoud Ayman */}
                <a
                  href="tel:+201029046651"
                  title="اتصال بمحمود أيمن 01029046651"
                  aria-label="اتصال هاتفي بمحمود أيمن 01029046651"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-gray-200 hover:border-[#D4A843] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <HiPhone className="w-4 h-4 text-[#D4A843]" />
                    <span>{t('person.mahmoud_ayman')}</span>
                  </div>
                  <span dir="ltr" className="font-mono font-bold text-[#D4A843]">01029046651</span>
                </a>

                {/* Mahmoud Hamada */}
                <a
                  href="tel:+201035633986"
                  title="اتصال بمحمود حمادة 01035633986"
                  aria-label="اتصال هاتفي بمحمود حمادة 01035633986"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-gray-200 hover:border-[#D4A843] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <HiPhone className="w-4 h-4 text-[#D4A843]" />
                    <span>{t('person.mahmoud_hamada')}</span>
                  </div>
                  <span dir="ltr" className="font-mono font-bold text-[#D4A843]">01035633986</span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  title={t('nav.quote')}
                  aria-label={t('nav.quote')}
                  className="block w-full text-center px-6 py-3.5 text-sm font-black text-[#0a1628] bg-gradient-to-r from-[#FDE68A] via-[#D4A843] to-[#B8922E] rounded-xl hover:brightness-110 transition-all shadow-xl"
                >
                  {t('nav.quote')}
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
