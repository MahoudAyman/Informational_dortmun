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
  light = false,
}: SectionTitleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : 'text-right'}`}
    >
      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-sm font-medium tracking-wide mb-3 ${
            light ? 'text-[#D4A843]' : 'text-[#D4A843]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Title */}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-[#0a1628]'
        }`}
      >
        {title}
      </h2>

      {/* Decorative Gold Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`mt-4 ${centered ? 'mx-auto' : 'mr-0'}`}
      >
        <div className="flex items-center gap-2 justify-center">
          <span className="block w-8 h-0.5 bg-[#D4A843]/40 rounded-full" />
          <span className="block w-3 h-3 rotate-45 border-2 border-[#D4A843] rounded-sm" />
          <span className="block w-16 h-0.5 bg-[#D4A843] rounded-full" />
          <span className="block w-3 h-3 rotate-45 border-2 border-[#D4A843] rounded-sm" />
          <span className="block w-8 h-0.5 bg-[#D4A843]/40 rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  );
}
