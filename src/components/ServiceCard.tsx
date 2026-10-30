'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiCheck, HiArrowLeft } from 'react-icons/hi';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  link,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-gradient-to-br from-[#0d1f3c] to-[#0a1628] rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-[#D4A843]/40 transition-all duration-500 overflow-hidden h-full flex flex-col"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4A843]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top corner decoration */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-[#D4A843]/5 rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-[#D4A843]/10 border border-[#D4A843]/20 flex items-center justify-center text-[#D4A843] text-2xl group-hover:bg-[#D4A843]/20 group-hover:border-[#D4A843]/40 transition-all duration-300">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-[#D4A843] transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="relative text-sm leading-relaxed text-gray-400 mb-5">
        {description}
      </p>

      {/* Features List */}
      <ul className="relative space-y-2.5 mb-6 flex-1">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 text-sm text-gray-300"
          >
            <span className="w-5 h-5 rounded-full bg-[#D4A843]/10 flex items-center justify-center flex-shrink-0">
              <HiCheck className="w-3 h-3 text-[#D4A843]" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        href={link}
        className="relative inline-flex items-center gap-2 text-sm font-medium text-[#D4A843] hover:text-[#e6bc5e] transition-colors duration-300 group/link mt-auto"
      >
        اعرف المزيد
        <HiArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover/link:-translate-x-1" />
      </Link>
    </motion.div>
  );
}
