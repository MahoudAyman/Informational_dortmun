'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
      className="fixed bottom-6 left-6 z-50"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 mb-3 whitespace-nowrap bg-[#0a1628] text-white text-sm px-4 py-2 rounded-lg shadow-lg"
          >
            تواصل معنا عبر واتساب
            <span className="absolute top-full left-6 w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-[#0a1628]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse Rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <span
        className="absolute inset-[-4px] rounded-full bg-[#25D366] opacity-10 animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Button */}
      <a
        href="https://wa.me/201029046651"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </motion.div>
  );
}
