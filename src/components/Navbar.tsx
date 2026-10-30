'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiPhone, HiGlobeAlt } from 'react-icons/hi';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/projects', label: 'مشاريعنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'تواصل معنا' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'AR' | 'EN'>('AR');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
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
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Right side in RTL */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-[#D4A843] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#D4A843] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone */}
              <a
                href="tel:+201029046651"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#D4A843] transition-colors duration-300"
              >
                <HiPhone className="w-4 h-4" />
                <span dir="ltr">010-2904-6651</span>
              </a>

              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === 'AR' ? 'EN' : 'AR')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 border border-gray-600 rounded-full hover:border-[#D4A843] hover:text-[#D4A843] transition-all duration-300"
              >
                <HiGlobeAlt className="w-4 h-4" />
                {lang === 'AR' ? 'EN' : 'عربي'}
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="px-6 py-2.5 text-sm font-bold text-[#0a1628] bg-[#D4A843] rounded-lg hover:bg-[#c49a3a] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A843]/25"
              >
                طلب عرض سعر
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-200 hover:text-[#D4A843] transition-colors"
              aria-label="فتح القائمة"
            >
              <HiMenuAlt3 className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[70] h-full w-80 max-w-[85vw] bg-[#0a1628] shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                  <Logo />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="إغلاق القائمة"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Drawer Links */}
                <div className="flex-1 overflow-y-auto py-6 px-5">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-3 text-base font-medium text-gray-200 hover:text-[#D4A843] hover:bg-white/5 rounded-lg transition-all duration-200"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Phone in drawer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 pt-6 border-t border-white/10"
                  >
                    <a
                      href="tel:+201029046651"
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-[#D4A843] transition-colors"
                    >
                      <HiPhone className="w-5 h-5" />
                      <span dir="ltr">010-2904-6651</span>
                    </a>
                  </motion.div>

                  {/* Language toggle in drawer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="px-4 mt-3"
                  >
                    <button
                      onClick={() => setLang(lang === 'AR' ? 'EN' : 'AR')}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#D4A843] transition-colors"
                    >
                      <HiGlobeAlt className="w-5 h-5" />
                      {lang === 'AR' ? 'English' : 'عربي'}
                    </button>
                  </motion.div>
                </div>

                {/* Drawer Footer CTA */}
                <div className="p-5 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 text-sm font-bold text-[#0a1628] bg-[#D4A843] rounded-lg hover:bg-[#c49a3a] transition-all duration-300"
                  >
                    طلب عرض سعر
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
