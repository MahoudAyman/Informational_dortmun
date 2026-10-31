'use client';

import { FaStar, FaQuoteRight } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="relative bg-white dark:bg-[#0d1f3c] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 hover:border-[#D4A843] dark:hover:border-[#D4A843]/40 transition-all duration-300 h-full flex flex-col shadow-lg dark:shadow-none hover:shadow-2xl hover:shadow-[#D4A843]/10">
      {/* Quote decoration */}
      <div className="absolute top-5 left-5 text-[#D4A843]/15 pointer-events-none">
        <FaQuoteRight className="w-10 h-10" />
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-[#D4A843]' : 'text-slate-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-gray-300 mb-6 flex-1 italic">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="border-t border-slate-100 dark:border-white/10 pt-5">
        <div className="flex items-center gap-3">
          {/* Avatar badge */}
          <div className="w-11 h-11 rounded-full bg-[#D4A843]/15 border border-[#D4A843]/40 flex items-center justify-center text-[#D4A843] font-black text-sm flex-shrink-0 shadow-sm">
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-black text-slate-900 dark:text-white">{name}</p>
            <p className="text-xs text-slate-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
