'use client';

import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  icon: ReactNode;
}

interface StatsCounterProps {
  stats: StatItem[];
}

function AnimatedNumber({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
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
    <span className="text-4xl sm:text-5xl font-bold text-[#D4A843] tabular-nums" dir="ltr">
      {suffix === '+' && '+'}
      {count.toLocaleString('en-US')}
      {suffix !== '+' && suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-[#0a1628] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#D4A843]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#D4A843]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#D4A843]/10 border border-[#D4A843]/20 flex items-center justify-center text-[#D4A843] text-xl">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="mb-2">
                <AnimatedNumber
                  target={stat.number}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>

              {/* Label */}
              <p className="text-sm sm:text-base text-gray-400 font-medium">
                {stat.label}
              </p>

              {/* Decorative line */}
              <div className="mt-3 mx-auto w-8 h-0.5 bg-[#D4A843]/30 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
