'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          aria-label="الرجوع إلى أعلى الصفحة"
          title="الرجوع إلى أعلى الصفحة"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#D4A843] text-[#0a1628] shadow-lg shadow-[#D4A843]/25 hover:bg-[#c49a3a] hover:shadow-xl hover:shadow-[#D4A843]/40 transition-all duration-300 flex items-center justify-center hover:scale-110 cursor-pointer"
        >
          <HiArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
