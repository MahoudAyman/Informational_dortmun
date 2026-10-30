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
    <div className="relative bg-gradient-to-br from-[#0d1f3c] to-[#0a1628] rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-[#D4A843]/20 transition-all duration-300 h-full flex flex-col">
      {/* Quote decoration */}
      <div className="absolute top-5 left-5 text-[#D4A843]/10 pointer-events-none">
        <FaQuoteRight className="w-10 h-10" />
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-[#D4A843]' : 'text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-sm sm:text-base leading-relaxed text-gray-300 mb-6 flex-1">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="border-t border-white/10 pt-5">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-11 h-11 rounded-full bg-[#D4A843]/15 flex items-center justify-center text-[#D4A843] font-bold text-sm flex-shrink-0">
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-white">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
