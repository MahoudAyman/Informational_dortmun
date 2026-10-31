'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFileContract,
} from 'react-icons/fa';
import Logo from './Logo';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { lang, t } = useApp();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
    { href: '/faq', label: lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQs' },
  ];

  const companyServices = [
    { href: '/services#labor', label: t('services.labor.title') },
    { href: '/services#materials', label: t('services.materials.title') },
    { href: '/services#demolition', label: t('services.demolition.title') },
    { href: '/services#cleaning', label: t('services.cleaning.title') },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-[#0a1628] text-slate-700 dark:text-gray-300 border-t-2 border-[#D4A843] transition-colors duration-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400 mb-6">
              {t('footer.about')}
            </p>
            {/* Tax Info Card */}
            <div className="inline-flex items-center gap-2 bg-white dark:bg-[#D4A843]/10 border border-slate-200 dark:border-[#D4A843]/30 px-3.5 py-2.5 rounded-xl text-xs text-[#8F6B17] dark:text-[#D4A843] mb-6 shadow-sm">
              <FaFileContract className="w-4 h-4 flex-shrink-0 text-[#8F6B17] dark:text-[#D4A843]" />
              <span>
                {lang === 'ar' ? 'السجل والبطاقة الضريبية:' : 'Certified Tax Registration:'}{' '}
                <strong className="font-mono text-slate-900 dark:text-white text-sm" dir="ltr">
                  781-865-344
                </strong>
              </span>
            </div>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/201029046651"
                target="_blank"
                rel="noopener noreferrer"
                title="واتساب شركة دورتمون"
                aria-label="واتساب شركة دورتمون"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-transparent text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="صفحة فيسبوك الرسمية"
                aria-label="صفحة فيسبوك الرسمية"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-transparent text-slate-600 dark:text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="حساب انستغرام الرسمي"
                aria-label="حساب انستغرام الرسمي"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-transparent text-slate-600 dark:text-gray-400 hover:bg-[#E4405F] hover:text-white transition-all duration-300 shadow-sm"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-5 relative pb-2 inline-block">
              {t('footer.quickLinks')}
              <span className={`absolute bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-12 h-0.5 bg-[#D4A843]`} />
            </h3>
            <ul className="space-y-3 mt-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={link.label}
                    aria-label={link.label}
                    className="text-sm text-slate-600 dark:text-gray-400 hover:text-[#D4A843] dark:hover:text-[#D4A843] transition-colors duration-300 flex items-center gap-2 group font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]/50 group-hover:bg-[#D4A843] group-hover:w-3 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-5 relative pb-2 inline-block">
              {t('footer.services')}
              <span className={`absolute bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-12 h-0.5 bg-[#D4A843]`} />
            </h3>
            <ul className="space-y-3 mt-4">
              {companyServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    title={service.label}
                    aria-label={service.label}
                    className="text-sm text-slate-600 dark:text-gray-400 hover:text-[#D4A843] dark:hover:text-[#D4A843] transition-colors duration-300 flex items-center gap-2 group font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]/50 group-hover:bg-[#D4A843] group-hover:w-3 transition-all" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-5 relative pb-2 inline-block">
              {t('footer.contact')}
              <span className={`absolute bottom-0 ${lang === 'ar' ? 'right-0' : 'left-0'} w-12 h-0.5 bg-[#D4A843]`} />
            </h3>
            <div className="space-y-4 mt-4">
              {/* Phone - Mahmoud Ayman */}
              <a
                href="tel:+201029046651"
                title={`اتصال هاتفياً بـ ${t('person.mahmoud_ayman')}`}
                aria-label={`اتصال هاتفياً بـ ${t('person.mahmoud_ayman')}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-[#D4A843] dark:hover:border-[#D4A843]/50 transition-all duration-300 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4A843]/15 flex items-center justify-center text-[#D4A843] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-[#D4A843] font-bold block">
                    {t('person.mahmoud_ayman_role')} — {t('person.mahmoud_ayman')}
                  </span>
                  <span dir="ltr" className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#D4A843] transition-colors font-mono">
                    01029046651
                  </span>
                </div>
              </a>

              {/* Phone - Mahmoud Hamada */}
              <a
                href="tel:+201035633986"
                title={`اتصال هاتفياً بـ ${t('person.mahmoud_hamada')}`}
                aria-label={`اتصال هاتفياً بـ ${t('person.mahmoud_hamada')}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-[#D4A843] dark:hover:border-[#D4A843]/50 transition-all duration-300 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4A843]/15 flex items-center justify-center text-[#D4A843] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-[#D4A843] font-bold block">
                    {t('person.mahmoud_hamada_role')} — {t('person.mahmoud_hamada')}
                  </span>
                  <span dir="ltr" className="text-base font-black text-slate-900 dark:text-white group-hover:text-[#D4A843] transition-colors font-mono">
                    01035633986
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-gray-400 pt-1 font-semibold">
                <FaMapMarkerAlt className="w-5 h-5 text-[#D4A843] flex-shrink-0" />
                <span>
                  {lang === 'ar'
                    ? 'نغطي ونخدم جميع محافظات جمهورية مصر العربية 24 ساعة'
                    : 'Serving All Egypt Governorates 24/7 with Fast Deployment'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-white/10 bg-slate-200/70 dark:bg-[#071120] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-xs text-slate-600 dark:text-gray-400 font-medium">
              © 2025 {t('footer.rights')} | {t('footer.taxNotice')}
            </p>
            <p className="text-xs text-[#9E7820] dark:text-[#D4A843] font-bold">
              {lang === 'ar'
                ? 'أفضل خدمات التكسير، التشوين، توريد العمالة والنظافة في مصر'
                : 'Premier Demolition, Material Hoisting & Labor Supply in Egypt'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
