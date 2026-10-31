'use client';

import { ReactNode, ComponentType, isValidElement } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiCheck, HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { useApp } from '@/context/AppContext';

interface ServiceCardProps {
  icon: ReactNode | ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  link?: string;
  href?: string;
  color?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  link,
  href,
}: ServiceCardProps) {
  const { lang } = useApp();
  const targetLink = link || href || '/services';

  const renderIcon = () => {
    if (isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === 'function') {
      const IconComp = icon as ComponentType<{ className?: string }>;
      return <IconComp className="w-8 h-8" />;
    }
    return null;
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="group relative rounded-3xl p-6 sm:p-8 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between border bg-white dark:bg-[#0d1f3c] border-slate-200 dark:border-white/10 hover:border-[#D4A843] dark:hover:border-[#D4A843]/60 shadow-lg hover:shadow-2xl hover:shadow-[#D4A843]/15"
    >
      {/* Top Gold Corner Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4A843]/20 via-[#D4A843]/5 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

      <div>
        {/* Icon Container with Animated Gold Ring */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#D4A843]/15 dark:bg-[#D4A843]/20 border border-[#D4A843]/40 flex items-center justify-center text-[#D4A843] text-3xl group-hover:bg-[#D4A843] group-hover:text-[#0a1628] transition-all duration-300 shadow-md">
            {renderIcon()}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black mb-3 transition-colors duration-300 text-[#0a1628] dark:text-white group-hover:text-[#D4A843] dark:group-hover:text-[#D4A843]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-6 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <span className="w-5 h-5 rounded-full bg-[#D4A843]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <HiCheck className="w-3.5 h-3.5 text-[#D4A843]" />
              </span>
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Link */}
      <Link
        href={targetLink}
        title={lang === 'ar' ? `تفاصيل خدمة ${title} وطلب مقايسة` : `Details of ${title} and price quote`}
        aria-label={lang === 'ar' ? `تفاصيل خدمة ${title} وطلب مقايسة` : `Details of ${title} and price quote`}
        className="relative inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#D4A843] dark:hover:border-[#D4A843] text-xs sm:text-sm font-black text-[#0a1628] dark:text-[#D4A843] hover:bg-[#D4A843] hover:text-[#0a1628] dark:hover:bg-[#D4A843] dark:hover:text-[#0a1628] transition-all duration-300 mt-auto group/btn cursor-pointer"
      >
        <span>{lang === 'ar' ? 'تفاصيل الخدمة وطلب عرض سعر' : 'Service Details & Quote'}</span>
        {lang === 'ar' ? (
          <HiArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
        ) : (
          <HiArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        )}
      </Link>
    </motion.div>
  );
}
