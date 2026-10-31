'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaArrowLeft, FaArrowRight, FaShieldAlt, FaMapMarkerAlt, FaPause, FaPlay } from 'react-icons/fa';
import { GiDemolish, GiCrane } from 'react-icons/gi';
import { FaTruckLoading } from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';
import { useApp } from '@/context/AppContext';
import SectionTitle from './SectionTitle';

export default function MovingCardsSection() {
  const { lang, t } = useApp();
  const [isPaused, setIsPaused] = useState(false);

  const row1Cards = [
    {
      id: 'mc-1',
      title: lang === 'ar' ? 'تكسير وتجريد فيلا بالتجمع' : 'Villa Stripping - 5th Settlement',
      tag: lang === 'ar' ? 'أمان إنشائي 100%' : '100% Structural Safety',
      desc: lang === 'ar' ? 'تكسير جدران وقواطع وتجريد 4 حمامات ومطبخ ونقل 8 سيارات ردش' : 'Partition demolition, 4 bathrooms tile stripping, and 8 truckloads debris hauling',
      location: lang === 'ar' ? 'التجمع الخامس، القاهرة' : 'New Cairo, Egypt',
      image: '/images/project-villa.webp',
      icon: GiDemolish,
    },
    {
      id: 'mc-2',
      title: lang === 'ar' ? 'تشوين 500 طن للأدوار العليا' : '500-Ton High-Rise Hoisting',
      tag: lang === 'ar' ? 'أوناش هيدروليكية' : 'Hydraulic Cranes',
      desc: lang === 'ar' ? 'رفع رمل مغسول وأسمنت وسن لعمارة 11 دور بمدينة نصر' : 'Hoisting washed sand, cement, and aggregate to an 11-story building',
      location: lang === 'ar' ? 'مدينة نصر، القاهرة' : 'Nasr City, Cairo',
      image: '/images/materials-ai.webp',
      icon: FaTruckLoading,
    },
    {
      id: 'mc-3',
      title: lang === 'ar' ? 'توريد طاقم 40 عامل وصنايعي' : '40-Worker Heavy Squad',
      tag: lang === 'ar' ? 'جاهزية 24 ساعة' : '24h Squad Dispatch',
      desc: lang === 'ar' ? 'عمالة ماهرة للتكسير والتشوين بالعاصمة الإدارية' : 'Certified heavy-duty breaker and hoisting crew in New Capital',
      location: lang === 'ar' ? 'العاصمة الإدارية' : 'New Capital, Egypt',
      image: '/images/labor-ai.webp',
      icon: GiCrane,
    },
    {
      id: 'mc-4',
      title: lang === 'ar' ? 'نظافة موقع كمبوند زايد' : 'Compound Turnkey Cleanup',
      tag: lang === 'ar' ? 'تسليم على المفتاح' : 'Turnkey Handover',
      desc: lang === 'ar' ? 'تنظيف شامل وجلي أرضيات وتسليم نظيف بعد التشطيب' : 'Deep site cleaning, rubble bagging, and floor polishing post-renovation',
      location: lang === 'ar' ? 'الشيخ زايد، الجيزة' : 'Sheikh Zayed, Giza',
      image: '/images/cleaning-after.webp',
      icon: MdCleaningServices,
    },
  ];

  const row2Cards = [
    {
      id: 'mc-5',
      title: lang === 'ar' ? 'تكسير وتجديد حمامات ومطابخ' : 'Kitchen & Bath Strip-down',
      tag: lang === 'ar' ? 'دقة وتأمين' : 'Precision Execution',
      desc: lang === 'ar' ? 'تجريد كامل للسيراميك دون التأثير على خرسانة الأعمدة' : 'Complete ceramic stripping protecting load-bearing columns',
      location: lang === 'ar' ? 'مدينة 6 أكتوبر' : '6th of October City',
      image: '/images/demolition-ai.webp',
      icon: GiDemolish,
    },
    {
      id: 'mc-6',
      title: lang === 'ar' ? 'تشوين خامات سن ورمل لمول' : 'Mall Materials Delivery',
      tag: lang === 'ar' ? 'توريد جملة' : 'Wholesale Supply',
      desc: lang === 'ar' ? 'توريد سن 1 و 2 ورمل ناعم وخشن بمواصفات معتمدة' : 'Standard aggregate and washed plastering sand wholesale delivery',
      location: lang === 'ar' ? 'الشروق، القاهرة' : 'El Shorouk, Cairo',
      image: '/images/materials-storage.webp',
      icon: FaTruckLoading,
    },
    {
      id: 'mc-7',
      title: lang === 'ar' ? 'فتح ممرات وتكسير قواطع' : 'Wall Openings & Blueprints',
      tag: lang === 'ar' ? 'هيلتيات صامتة' : 'Low-Vibration Breakers',
      desc: lang === 'ar' ? 'فتح مداخل وممرات ومطابخ أمريكية وفق المخطط' : 'Safe interior layout restructuring without structural compromise',
      location: lang === 'ar' ? 'المعادي، القاهرة' : 'Maadi, Cairo',
      image: '/images/demolition-after.webp',
      icon: GiDemolish,
    },
    {
      id: 'mc-8',
      title: lang === 'ar' ? 'رفع مخلفات ونقل للمقالب' : 'Licensed Rubble Hauling',
      tag: lang === 'ar' ? 'أسطول سيارات' : 'Dedicated Fleet',
      desc: lang === 'ar' ? 'تعبئة الردش ونقله فورياً للمقالب العمومية المرخصة' : 'Rubble bagging and immediate dumping to municipal approved dumpsites',
      location: lang === 'ar' ? 'الجيزة والقاهرة' : 'Cairo & Giza',
      image: '/images/cleaning-site.webp',
      icon: MdCleaningServices,
    },
  ];

  const renderCard = (card: typeof row1Cards[0]) => (
    <div
      key={card.id}
      className="flex-shrink-0 w-[290px] sm:w-[350px] bg-white dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#D4A843] transition-all duration-300 group flex flex-col justify-between"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={card.image}
          alt={card.title}
          fill
          quality={70}
          sizes="(max-width: 640px) 290px, 350px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

        <span className="absolute top-3 right-3 bg-[#0a1628]/90 text-[#D4A843] border border-[#D4A843]/40 text-[11px] font-black px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
          {card.tag}
        </span>

        <span className="absolute bottom-2.5 right-3 flex items-center gap-1.5 text-[11px] text-white/95 font-bold bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-sm">
          <FaMapMarkerAlt className="text-[#D4A843]" />
          <span>{card.location}</span>
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-[#D4A843] transition-colors flex items-center gap-2">
            <card.icon className="w-4 h-4 text-[#D4A843] flex-shrink-0" />
            <span className="line-clamp-1">{card.title}</span>
          </h3>
          <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-2">
            {card.desc}
          </p>
        </div>

        <a
          href={`https://wa.me/201029046651?text=${encodeURIComponent(
            `مرحباً شركة دورتمون، أود الاستفسار وطلب تنفيذ: ${card.title} (${card.location})`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          title={lang === 'ar' ? `طلب تنفيذ ${card.title} عبر واتساب` : `Request ${card.title} via WhatsApp`}
          aria-label={lang === 'ar' ? `طلب تنفيذ ${card.title} عبر واتساب` : `Request ${card.title} via WhatsApp`}
          className="w-full py-2.5 px-3.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-[#D4A843] hover:text-[#0a1628] text-slate-800 dark:text-white text-xs font-black transition-all flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 group-hover:bg-[#D4A843] group-hover:text-[#0a1628]"
        >
          <FaWhatsapp className="w-4 h-4 text-green-500 group-hover:text-[#0a1628]" />
          <span>{lang === 'ar' ? 'طلب تنفيذ ومقايسة فورية' : 'Request Instant Quote'}</span>
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#07111e] border-y border-slate-200 dark:border-white/10 overflow-hidden relative transition-colors duration-300">
      {/* Golden Ambient Blur */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#D4A843]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <SectionTitle
          title={lang === 'ar' ? 'أعمالنا الميدانية والتنفيذ في حركة مستمرة' : 'Field Operations & Real-Time Execution'}
          subtitle={lang === 'ar' ? 'أسطولنا وفرق العمل في مختلف محافظات مصر 24/7' : 'Our Squads & Equipment Across Egypt 24/7'}
        />

        {/* Control Button (Pause/Play) */}
        <div className="flex items-center justify-center gap-3 -mt-6 mb-8">
          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? (lang === 'ar' ? 'تشغيل الحركة' : 'Play motion') : (lang === 'ar' ? 'إيقاف الحركة مؤقتاً' : 'Pause motion')}
            aria-label={isPaused ? (lang === 'ar' ? 'تشغيل حركة البطاقات' : 'Resume cards motion') : (lang === 'ar' ? 'إيقاف حركة البطاقات مؤقتاً' : 'Pause cards motion')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-gray-300 hover:border-[#D4A843] hover:text-[#D4A843] transition-all cursor-pointer shadow-sm"
          >
            {isPaused ? <FaPlay className="w-3 h-3 text-[#D4A843]" /> : <FaPause className="w-3 h-3 text-[#D4A843]" />}
            <span>{isPaused ? (lang === 'ar' ? 'استئناف الحركة' : 'Resume Motion') : (lang === 'ar' ? 'إيقاف مؤقت للقراءة' : 'Pause for Reading')}</span>
          </button>
        </div>
      </div>

      {/* Row 1: Sliding Left (with duplicate for smooth loop) */}
      <div
        className="relative w-full overflow-hidden mb-6 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-6 w-max animate-marquee-left ${isPaused ? '[animation-play-state:paused]' : ''}`}
        >
          {row1Cards.map(renderCard)}
          {row1Cards.map(renderCard)}
        </div>
      </div>

      {/* Row 2: Sliding Right (in the opposite direction) */}
      <div
        className="relative w-full overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-6 w-max animate-marquee-right ${isPaused ? '[animation-play-state:paused]' : ''}`}
        >
          {row2Cards.map(renderCard)}
          {row2Cards.map(renderCard)}
        </div>
      </div>
    </section>
  );
}

