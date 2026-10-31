'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : 'text-right'}`}
    >
      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs sm:text-sm font-black tracking-wider uppercase mb-3 text-[#8F6B17] dark:text-[#D4A843]"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Main Title */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#0a1628] dark:text-white transition-colors duration-300">
        {title}
      </h2>

      {/* Decorative Gold Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className={`mt-4 flex items-center justify-center gap-2 ${
          centered ? 'mx-auto' : 'mr-0'
        }`}
      >
        <span className="w-12 h-1 bg-[#D4A843] rounded-full" />
        <span className="w-2.5 h-2.5 bg-[#D4A843] rotate-45 rounded-sm" />
        <span className="w-12 h-1 bg-[#D4A843] rounded-full" />
      </motion.div>
    </motion.div>
  );
}
