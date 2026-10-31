'use client';

import { useEffect, useState, ReactNode, ComponentType, isValidElement } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useApp } from '@/context/AppContext';

interface StatItem {
  number?: number;
  value?: number;
  suffix: string;
  label: string;
  icon: ReactNode | ComponentType<{ className?: string }>;
}

interface StatsCounterProps {
  stats: StatItem[];
}

function AnimatedNumber({
  target,
  suffix,
  inView,
  lang,
}: {
  target: number;
  suffix: string;
  inView: boolean;
  lang: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    let rafId: number;

    const animate = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(start));
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return (
    <span className="font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight flex items-center justify-center">
      <span className="text-[#D4A843]">{suffix}</span>
      <span>{count.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')}</span>
    </span>
  );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const { lang } = useApp();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
    >
      {stats.map((stat, i) => {
        const targetValue = stat.number ?? stat.value ?? 0;

        const renderIcon = () => {
          if (isValidElement(stat.icon)) {
            return stat.icon;
          }
          if (typeof stat.icon === 'function') {
            const IconComp = stat.icon as ComponentType<{ className?: string }>;
            return <IconComp className="w-8 h-8 text-[#D4A843]" />;
          }
          return null;
        };

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 text-center backdrop-blur-sm hover:border-[#D4A843] dark:hover:border-[#D4A843]/40 transition-all duration-300 shadow-xl dark:shadow-none hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#D4A843]/15 border border-[#D4A843]/30 flex items-center justify-center shadow-sm">
              {renderIcon()}
            </div>

            {/* Counter */}
            <div className="mb-2">
              <AnimatedNumber
                target={targetValue}
                suffix={stat.suffix}
                inView={inView}
                lang={lang}
              />
            </div>

            {/* Label */}
            <p className="text-sm sm:text-base font-bold text-slate-700 dark:text-gray-300">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
