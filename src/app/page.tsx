'use client';

import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaTruckLoading,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaProjectDiagram,
  FaCalendarCheck,
  FaUserTie,
  FaFileContract,
  FaMapMarkerAlt,
  FaBolt,
  FaTools,
  FaCalculator,
  FaTimes,
  FaCertificate,
} from 'react-icons/fa';
import {
  MdCleaningServices,
  MdPriceCheck,
  MdSupportAgent,
  MdVerified,
} from 'react-icons/md';
import { GiCrane, GiDemolish } from 'react-icons/gi';
import { HiCheckCircle } from 'react-icons/hi';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import StatsCounter from '@/components/StatsCounter';
import TestimonialCard from '@/components/TestimonialCard';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ScrollToTop from '@/components/ScrollToTop';
import MovingCardsSection from '@/components/MovingCardsSection';
import { useApp } from '@/context/AppContext';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function HomePage() {
  const { lang, t } = useApp();
  const [quickPhone, setQuickPhone] = useState('');
  const [selectedGovIndex, setSelectedGovIndex] = useState(0);
  const [showTaxModal, setShowTaxModal] = useState(false);
  const [calcService, setCalcService] = useState<'demolition' | 'materials' | 'labor' | 'cleaning'>('demolition');
  const [calcQuantity, setCalcQuantity] = useState<number>(60);
  const [calcFloor, setCalcFloor] = useState<number>(3);

  const calculateEstimate = () => {
    let baseRate = 50;
    if (calcService === 'demolition') baseRate = 55;
    else if (calcService === 'materials') baseRate = 85;
    else if (calcService === 'labor') baseRate = 450;
    else if (calcService === 'cleaning') baseRate = 30;

    const floorMultiplier = 1 + Math.max(0, calcFloor - 1) * 0.08;
    const estimatedTotal = Math.round(baseRate * calcQuantity * floorMultiplier);
    return {
      min: Math.round(estimatedTotal * 0.9),
      max: Math.round(estimatedTotal * 1.15),
    };
  };

  const estimate = calculateEstimate();

  const services = [
    {
      id: 'labor',
      icon: GiCrane,
      title: lang === 'ar' ? 'توريد عمالة مدربة في مصر' : 'Skilled Labor Supply in Egypt',
      description:
        lang === 'ar'
          ? 'شركة دورتمون توفر عمالة مدربة ومهارة لتكسير، تشوين، نظافة مواقع، وعمالة بناء في القاهرة وجميع محافظات مصر.'
          : 'Dortmun supplies trained labor for demolition, hoisting, cleaning, and construction works across Cairo and all Egyptian governorates.',
      features:
        lang === 'ar'
          ? [
              'عمال تشوين رملة وأسمنت',
              'عمال تكسير حمامات ومطابخ',
              'عمال نظافة مواقع ورفع أنقاض',
              'توفير الطاقم خلال 24 ساعة',
            ]
          : [
              'Sand and cement hoisting crews',
              'Bathroom and kitchen demolition workers',
              'Site cleaning and rubble removal crews',
              'Fast deployment within 24 hours',
            ],
      href: '/services#labor',
    },
    {
      id: 'materials',
      icon: FaTruckLoading,
      title: lang === 'ar' ? 'تشوين رملة وأسمنت وسن' : 'Sand, Cement & Aggregate Hoisting',
      description:
        lang === 'ar'
          ? 'خدمات تشوين رملة وأسمنت وسن للأدوار العليا مع أوناش رفع وتوريد مباشر في جميع مناطق مصر.'
          : 'Professional sand, cement, and aggregate hoisting to upper floors with cranes and direct delivery across Egypt.',
      features:
        lang === 'ar'
          ? [
              'رملة مغسولة ومعتمدة',
              'أسمنت بورتلاندي ممتاز',
              'سن 1 وسن 2 وزلط',
              'رفع للأدوار العليا بالأوناش',
            ]
          : [
              'Washed and approved sand',
              'Premium Portland cement',
              'Graded aggregate and stone',
              'Hydraulic hoisting to upper floors',
            ],
      href: '/services#materials',
    },
    {
      id: 'demolition',
      icon: GiDemolish,
      title: lang === 'ar' ? 'تكسير حمامات ومطابخ وبيوت في مصر' : 'Bathroom, Kitchen & House Demolition in Egypt',
      description:
        lang === 'ar'
          ? 'نقدم تكسير حمامات في مصر، تكسير مطابخ، تكسير حوائط، وتكسير بيوت كاملة بأمان واحترافية عالية.'
          : 'We provide bathroom demolition, kitchen demolition, wall breaking, and full house demolition with safety and precision.',
      features:
        lang === 'ar'
          ? [
              'تكسير حمامات في مصر',
              'تكسير مطابخ وسيراميك',
              'تكسير جدران وبيوت',
              'هدم كامل مع تنظيف الموقع',
            ]
          : [
              'Bathroom demolition in Egypt',
              'Kitchen and tile stripping',
              'Wall and house demolition',
              'Full teardown with site cleanup',
            ],
      href: '/services#demolition',
    },
    {
      id: 'cleaning',
      icon: MdCleaningServices,
      title: lang === 'ar' ? 'نظافة مواقع ورفع أنقاض' : 'Site Cleanup & Rubble Removal',
      description:
        lang === 'ar'
          ? 'نظافة مواقع بعد التكسير أو التشطيب ورفع الأنقاض والمخلفات في أقصر وقت مع سيارات مرخصة.'
          : 'Site cleanup after demolition or finishing, including rubble hauling and debris disposal with licensed trucks.',
      features:
        lang === 'ar'
          ? [
              'رفع أنقاض وهدم',
              'نظافة شاملة بعد التكسير',
              'فارغ الموقع للمرحلة التالية',
              'مخلفات إلى المقالب المرخصة',
            ]
          : [
              'Rubble and debris removal',
              'Deep cleaning after demolition',
              'Turnkey site handover',
              'Licensed disposal to dumpsites',
            ],
      href: '/services#cleaning',
    },
  ];

  const whyChooseUs = [
    { id: 'why-1', icon: FaFileContract, title: t('why.1.title'), description: t('why.1.desc') },
    { id: 'why-2', icon: FaBolt, title: t('why.2.title'), description: t('why.2.desc') },
    { id: 'why-3', icon: FaShieldAlt, title: t('why.3.title'), description: t('why.3.desc') },
    { id: 'why-4', icon: FaTools, title: t('why.4.title'), description: t('why.4.desc') },
    { id: 'why-5', icon: MdPriceCheck, title: t('why.5.title'), description: t('why.5.desc') },
    { id: 'why-6', icon: MdSupportAgent, title: t('why.6.title'), description: t('why.6.desc') },
  ];

  const governorateCoverage = [
    {
      id: 'gov-cairo',
      name: lang === 'ar' ? 'القاهرة الكبرى' : 'Greater Cairo',
      speed: lang === 'ar' ? 'خلال ساعتين' : 'Within 2 Hours',
      areas: lang === 'ar' ? 'التجمع الخامس، الشروق، المعادي، مدينة نصر، وسط البلد، المقطم' : '5th Settlement, El Shorouk, Maadi, Nasr City, Downtown, Mokattam',
    },
    {
      id: 'gov-giza',
      name: lang === 'ar' ? 'الجيزة وأكتوبر' : 'Giza & 6th of October',
      speed: lang === 'ar' ? 'خلال ساعتين' : 'Within 2 Hours',
      areas: lang === 'ar' ? '6 أكتوبر، الشيخ زايد، حدائق الأهرام، المهندسين، الدقي، الهرم' : '6th of October, Sheikh Zayed, Pyramids Gardens, Mohandessin, Dokki',
    },
    {
      id: 'gov-capital',
      name: lang === 'ar' ? 'العاصمة الإدارية' : 'New Administrative Capital',
      speed: lang === 'ar' ? 'خلال 3 ساعات' : 'Within 3 Hours',
      areas: lang === 'ar' ? 'الحي الحكومي، R3، R5، R7، والأحياء السكنية ومنطقة الأبراج' : 'Government District, R3, R5, R7 Residential Districts & Towers',
    },
    {
      id: 'gov-alex',
      name: lang === 'ar' ? 'الإسكندرية والساحل' : 'Alexandria & North Coast',
      speed: lang === 'ar' ? 'خلال 24 ساعة' : 'Within 24 Hours',
      areas: lang === 'ar' ? 'سموحة، ميامي، العجمي، الساحل الشمالي، العلمين الجديدة' : 'Smouha, Miami, Agami, North Coast, New Alamein',
    },
    {
      id: 'gov-delta',
      name: lang === 'ar' ? 'محافظات الدلتا' : 'Delta Governorates',
      speed: lang === 'ar' ? 'خلال 24 ساعة' : 'Within 24 Hours',
      areas: lang === 'ar' ? 'المنصورة، طنطا، بنها، العبور، الزقازيق، المنوفية، كفر الشيخ' : 'Mansoura, Tanta, Benha, Obour, Zagazig, Menofia, Kafr El-Sheikh',
    },
    {
      id: 'gov-canal-upper',
      name: lang === 'ar' ? 'مدن القناة والصعيد' : 'Canal & Upper Egypt',
      speed: lang === 'ar' ? 'خلال 24-48 ساعة' : 'Within 24-48 Hours',
      areas: lang === 'ar' ? 'السويس، الإسماعيلية، بورسعيد، الفيوم، بني سويف، أسيوط، المنيا' : 'Suez, Ismailia, Port Said, Fayoum, Beni Suef, Asyut, Minya',
    },
  ];

  const stats = [
    { icon: FaProjectDiagram, value: 500, suffix: '+', label: t('stat.1') },
    { icon: FaUsers, value: 1200, suffix: '+', label: t('stat.2') },
    { icon: FaCalendarCheck, value: 10, suffix: '+', label: t('stat.3') },
    { icon: FaUserTie, value: 75, suffix: '+', label: t('stat.4') },
  ];

  const testimonials = [
    {
      id: 'test-1',
      name: lang === 'ar' ? 'م. أحمد الشريف' : 'Eng. Ahmed El-Sherif',
      role: lang === 'ar' ? 'استشاري مشاريع سكنية - التجمع الخامس' : 'Residential Consultant - 5th Settlement',
      content: lang === 'ar' ? 'تعاملت مع شركة دورتمون في أعمال تكسير جدران فيلا وتشوين رملة وأسمنت للدور الثالث بالونش. الالتزام كان ممتازاً والتكسير تم بدقة بدون إتلاف الأعمدة.' : 'Worked with Dortmund on villa partition demolition and sand/cement crane hoisting to 3rd floor. Outstanding timing and structural precision with zero damage to beams.',
      rating: 5,
    },
    {
      id: 'test-2',
      name: lang === 'ar' ? 'أ. طارق عبد العال' : 'Mr. Tarek Abdel Aal',
      role: lang === 'ar' ? 'مالك شقة - الشيخ زايد' : 'Property Owner - Sheikh Zayed',
      content: lang === 'ar' ? 'خدمة تكسير الحمامات والمطابخ ونظافة الموقع كانت ممتازة جداً. العمالة مهنية، وقاموا بتكسير السيراميك ثم رفع الأنقاض بشكل كامل.' : 'The bathroom & kitchen demolition and post-cleanup were flawless. Workers were polite, equipped, and left the flat turnkey ready.',
      rating: 5,
    },
    {
      id: 'test-3',
      name: lang === 'ar' ? 'م. هشام السعيد' : 'Eng. Hesham El-Saeed',
      role: lang === 'ar' ? 'مدير تنفيذي شركة مقاولات - أكتوبر' : 'Managing Director - 6th of October',
      content: lang === 'ar' ? 'شركة دورتمون هي شريكنا الدائم في توريد العمالة وتشوين السن والأسمنت لمواقعنا الإنشائية. استجابة سريعة جداً ومتابعة مباشرة.' : 'Dortmun is our permanent partner for skilled labor supply and materials hoisting. Ultra-fast deployment even at peak times.',
      rating: 5,
    },
  ];

  const handleQuickCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone) return;
    const msg =
      lang === 'ar'
        ? `مرحباً شركة دورتمون، أطلب اتصالاً ومقايسة سريعة على رقمي: ${quickPhone}`
        : `Hello Dortmund Contracting, please call me back for a quote on: ${quickPhone}`;
    window.open(`https://wa.me/201029046651?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSendEstimate = () => {
    const serviceName =
      calcService === 'demolition'
        ? 'تكسير حوائط وحمامات'
        : calcService === 'materials'
        ? 'تشوين رملة وأسمنت وسن'
        : calcService === 'labor'
        ? 'توريد عمالة وصنايعية'
        : 'نظافة مواقع ورفع أنقاض';

    const msg =
      lang === 'ar'
        ? `مرحباً إدارة شركة دورتمون، أود اعتماد مقايسة تقديرية:\n- الخدمة: ${serviceName}\n- المساحة/الكمية: ${calcQuantity}\n- الدور: ${calcFloor}\n- التقدير: ${estimate.min} - ${estimate.max} جنيه` 
        : `Hello Dortmund Management, I would like to confirm an estimated quote:\n- Service: ${serviceName}\n- Quantity: ${calcQuantity}\n- Floor: ${calcFloor}\n- Estimated Cost: ${estimate.min} - ${estimate.max} EGP`;

    window.open(`https://wa.me/201029046651?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen transition-colors duration-300">
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 transition-colors duration-500">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src="/images/hero-bg.webp"
              alt="شركة دورتمون للمقاولات والتوريدات العامة"
              fill
              priority
              fetchPriority="high"
              quality={75}
              sizes="100vw"
              className="object-cover object-center scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-white/90 to-slate-50/95 dark:from-[#0a1628]/95 dark:via-[#0d1f3c]/90 dark:to-[#0a1628]/95 backdrop-blur-[2px]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4A843]/10 dark:bg-[#D4A843]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-[#1a75ff]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.button
              onClick={() => setShowTaxModal(true)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              title={lang === 'ar' ? 'عرض السجل الضريبي الرسمي 781-865-344' : 'View Official Tax Registry 781-865-344'}
              aria-label={lang === 'ar' ? 'عرض السجل الضريبي الرسمي لشركة دورتمون' : 'View Dortmund Official Tax ID'}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#D4A843]/60 bg-[#0a1628] text-[#D4A843] text-xs sm:text-sm font-black mb-8 shadow-xl shadow-black/30"
            >
              <FaShieldAlt className="w-4 h-4 text-[#D4A843] animate-pulse" />
              <span>{t('hero.badge')}</span>
              <span className="text-[10px] bg-[#D4A843] text-[#0a1628] px-2 py-0.5 rounded-full font-black">
                {lang === 'ar' ? 'عرض السجل' : 'View Tax ID'}
              </span>
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-6 transition-colors"
            >
              {lang === 'ar' ? 'تكسير حمامات في مصر' : 'Bathroom Demolition in Egypt'}
              <br />
              <span className="shimmer-gold">
                {lang === 'ar' ? 'تكسير مطابخ وبيوت | شركة دورتمون' : 'Kitchen & House Demolition | Dortmund'}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-xl text-slate-700 dark:text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed font-normal transition-colors"
            >
              {lang === 'ar'
                ? 'شركة دورتمون تقدم تكسير حمامات في مصر، تكسير مطابخ، تكسير بيوت، هدم منازل، تشوين رملة وأسمنت وسن، وتوريد عمالة مدربة في القاهرة وجميع محافظات مصر.'
                : 'Dortmun provides bathroom demolition in Egypt, kitchen demolition, house demolition, rubble removal, and labor supply across Cairo and all Egyptian governorates.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a
                href="https://wa.me/201029046651?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%AF%D9%88%D8%B1%D8%AA%D9%85%D9%88%D9%86%20%D8%A3%D8%B1%D9%8A%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D9%81%D9%84%D8%AA%D9%83%D8%B3%D9%8A%D8%B1%20%D9%81%D9%84%D8%AD%D9%85%D8%A7%D9%85%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%8D%20%D8%A7%D9%84%D8%AA%D8%B4%D9%88%D9%8A%D9%86%20%D9%81%D9%84%D8%B1%D9%85%D9%84%D8%A9%20%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%AA%D9%86"
                target="_blank"
                rel="noopener noreferrer"
                title={lang === 'ar' ? 'طلب عرض سعر لتكسير حمامات ومطابخ وبيوت' : 'Request a quote for bathroom, kitchen and house demolition'}
                aria-label={lang === 'ar' ? 'طلب عرض سعر لتكسير حمامات ومطابخ وبيوت' : 'Request a quote for bathroom, kitchen and house demolition'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black text-[#0a1628] bg-gradient-to-r from-[#FDE68A] via-[#D4A843] to-[#B8922E] rounded-2xl shadow-xl"
              >
                <FaWhatsapp className="w-6 h-6 text-[#0a1628]" />
                {lang === 'ar' ? 'طلب عرض سعر فوري' : 'Request Instant Quote'}
              </a>

              <Link
                href="/contact"
                title={lang === 'ar' ? 'تواصل معنا' : 'Contact us'}
                aria-label={lang === 'ar' ? 'تواصل معنا' : 'Contact us'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-bold text-slate-800 dark:text-white bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-2xl"
              >
                <FaPhoneAlt className="w-4 h-4 text-[#D4A843]" />
                {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-xl mx-auto bg-white/95 dark:bg-[#0a1628]/90 border border-slate-200 dark:border-[#D4A843]/30 rounded-2xl p-3 sm:p-2.5 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-center gap-3"
            >
              <div className="flex items-center gap-2 px-3 text-xs text-[#745209] dark:text-[#D4A843] font-black whitespace-nowrap">
                <FaClock className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
                <span>{lang === 'ar' ? 'اطلب اتصالاً خلال دقيقة:' : 'Request a call in 60 seconds:'}</span>
              </div>
              <form onSubmit={handleQuickCallback} className="w-full flex items-center gap-2">
                <input
                  type="tel"
                  dir="ltr"
                  aria-label={lang === 'ar' ? 'رقم الهاتف' : 'Phone number'}
                  placeholder={lang === 'ar' ? 'رقم هاتفك (010...)' : 'Your phone (010...)'}
                  value={quickPhone}
                  onChange={(e) => setQuickPhone(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                />
                <button
                  type="submit"
                  title={lang === 'ar' ? 'اتصلوا بي الآن' : 'Call me now'}
                  aria-label={lang === 'ar' ? 'اتصلوا بي الآن' : 'Call me now'}
                  className="px-5 py-2.5 rounded-xl bg-[#D4A843] hover:bg-[#c49a3a] text-[#0a1628] font-black text-xs whitespace-nowrap transition-all shadow-md cursor-pointer"
                >
                  {lang === 'ar' ? 'اتصلوا بي الآن' : 'Call Me Now'}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-100 dark:bg-[#07111e] border-y border-slate-200 dark:border-[#D4A843]/20 py-5 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <FaFileContract className="w-6 h-6 text-[#D4A843] flex-shrink-0" />
                <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <span className="text-xs text-slate-600 dark:text-gray-300 font-bold block">{t('trust.tax')}</span>
                  <strong className="text-sm font-mono text-slate-900 dark:text-white" dir="ltr">{t('trust.taxVal')}</strong>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FaBolt className="w-6 h-6 text-[#D4A843] flex-shrink-0" />
                <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <span className="text-xs text-slate-600 dark:text-gray-300 font-bold block">{t('trust.speed')}</span>
                  <strong className="text-sm text-slate-900 dark:text-white">{t('trust.speedVal')}</strong>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FaTools className="w-6 h-6 text-[#D4A843] flex-shrink-0" />
                <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <span className="text-xs text-slate-600 dark:text-gray-300 font-bold block">{t('trust.equip')}</span>
                  <strong className="text-sm text-slate-900 dark:text-white">{t('trust.equipVal')}</strong>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FaMapMarkerAlt className="w-6 h-6 text-[#D4A843] flex-shrink-0" />
                <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                  <span className="text-xs text-slate-600 dark:text-gray-300 font-bold block">{t('trust.cov')}</span>
                  <strong className="text-sm text-slate-900 dark:text-white">{t('trust.covVal')}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-200/80 dark:bg-[#040912] border-b border-slate-300 dark:border-white/5 py-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 px-4 py-1 bg-[#D4A843] text-[#0a1628] text-xs font-black rounded-r-full flex items-center gap-1.5 shadow-md z-10">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span>{t('ticker.liveBadge')}</span>
            </div>
            <div className="relative w-full overflow-hidden whitespace-nowrap">
              <div className="animate-marquee-left flex items-center gap-12 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                <span>{lang === 'ar' ? '⚡ التجمع الخامس: تشوين رملة وأسمنت للأدوار العليا' : '⚡ 5th Settlement: sand and cement hoisting underway'}</span>
                <span className="text-[#D4A843]">✦</span>
                <span>{lang === 'ar' ? '🔨 الشيخ زايد: تكسير فيلا وتجريد حمام ومطبخ' : '🔨 Sheikh Zayed: villa and kitchen demolition works'}</span>
                <span className="text-[#D4A843]">✦</span>
                <span>{lang === 'ar' ? '👷 أكتوبر: توريد عمالة مدربة خلال 24 ساعة' : '👷 October: trained labor dispatch in 24 hours'}</span>
                <span className="text-[#D4A843]">✦</span>
                <span>{lang === 'ar' ? '🏗️ العاصمة الإدارية: تشوين رملة وسن بالأوناش' : '🏗️ New Capital: concrete aggregate hoisting'}</span>
                <span className="text-[#D4A843]">✦</span>
                <span>{lang === 'ar' ? '🧹 المعادي: رفع أنقاض ونظافة المواقع' : '🧹 Maadi: rubble removal and site cleanup'}</span>
                <span className="text-[#D4A843]">✦</span>
                <span>{lang === 'ar' ? '📜 شركة دورتمون مسجلة ضريبياً 781-865-344' : '📜 Dortmund is tax-registered 781-865-344'}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white dark:bg-[#0a1628] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title={lang === 'ar' ? 'خدمات شركة دورتمون في التكسير والتوريد' : 'Dortmun Services in Demolition & Materials'}
              subtitle={lang === 'ar' ? 'نغطي التكسير، التشوين، العمالة، والنظافة في جميع المحافظات' : 'We cover demolition, hoisting, labor, and cleanup across all governorates'}
            />

            <motion.div key={lang} variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {services.map((service, i) => (
                <motion.div key={service.id} variants={fadeUp} custom={i}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    href={service.href}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#0d1f3c]/60 border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title={lang === 'ar' ? 'شاهد الفرق في أعمالنا: قبل وبعد' : 'See the Difference in Our Works: Before & After'}
              subtitle={lang === 'ar' ? 'أعمال تكسير حقيقية، تشوين رمل وأسمنت، ونظافة مواقع كاملة' : 'Real demolition jobs, hoisting works, and complete site cleanup'}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
              <div className="bg-white dark:bg-[#0a1628] rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <GiDemolish className="text-[#D4A843] text-2xl" />
                    <span>{lang === 'ar' ? 'تكسير حمامات ومطابخ وبيوت' : 'Bathroom, Kitchen & House Demolition'}</span>
                  </h3>
                  <span className="text-xs bg-[#D4A843]/15 text-[#D4A843] px-3 py-1 rounded-full font-bold">
                    {lang === 'ar' ? 'أمان إنشائي' : 'Structural Safety'}
                  </span>
                </div>
                <BeforeAfterSlider
                  beforeImage="/images/demolition-ai.webp"
                  afterImage="/images/renovated-ai.webp"
                  beforeLabel={lang === 'ar' ? 'قبل: تكسير وتجريد' : 'Before: demolition and stripping'}
                  afterLabel={lang === 'ar' ? 'بعد: فراغ جاهز للتشطيب' : 'After: ready-for-finishing space'}
                />
              </div>

              <div className="bg-white dark:bg-[#0a1628] rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FaTruckLoading className="text-[#D4A843] text-2xl" />
                    <span>{lang === 'ar' ? 'تشوين رملة وأسمنت وسن' : 'Sand, Cement & Aggregate Hoisting'}</span>
                  </h3>
                  <span className="text-xs bg-green-500/15 text-emerald-800 dark:text-green-400 px-3 py-1 rounded-full font-bold">
                    {lang === 'ar' ? 'رفع بالأوناش' : 'Hydraulic Hoists'}
                  </span>
                </div>
                <BeforeAfterSlider
                  beforeImage="/images/materials-before.webp"
                  afterImage="/images/materials-ai.webp"
                  beforeLabel={lang === 'ar' ? 'قبل: موقع غير منظم' : 'Before: cluttered site'}
                  afterLabel={lang === 'ar' ? 'بعد: تشوين منظم للأدوار' : 'After: organized hoisting to upper floors'}
                />
              </div>
            </div>
          </div>
        </section>

        <MovingCardsSection />

        <section className="py-20 md:py-28 bg-white dark:bg-[#0a1628] transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title={t('calc.title')}
              subtitle={t('calc.sub')}
            />

            <div className="mt-12 bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-black text-slate-800 dark:text-white mb-2">{t('calc.serviceLabel')}</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button type="button" onClick={() => setCalcService('demolition')} className={`p-3 rounded-xl text-xs sm:text-sm font-bold border ...`}>{lang === 'ar' ? 'تكسير حوائط وحمامات' : 'Demolition Works'}</button>
                      <button type="button" onClick={() => setCalcService('materials')} className={`p-3 rounded-xl text-xs sm:text-sm font-bold border ...`}>{lang === 'ar' ? 'تشوين رملة وأسمنت' : 'Materials Hoisting'}</button>
                      <button type="button" onClick={() => setCalcService('labor')} className={`p-3 rounded-xl text-xs sm:text-sm font-bold border ...`}>{lang === 'ar' ? 'توريد عمالة' : 'Labor Supply'}</button>
                      <button type="button" onClick={() => setCalcService('cleaning')} className={`p-3 rounded-xl text-xs sm:text-sm font-bold border ...`}>{lang === 'ar' ? 'نظافة مواقع وردش' : 'Site Cleanup'}</button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-800 dark:text-white mb-2">
                      <span>{t('calc.areaLabel')}</span>
                      <span className="text-[#8F6B17] dark:text-[#D4A843] font-mono font-black">{calcQuantity} {calcService === 'labor' ? (lang === 'ar' ? 'عامل/يوم' : 'workers') : (lang === 'ar' ? 'م² / طن' : 'm² / ton')}</span>
                    </div>
                    <input type="range" min={calcService === 'labor' ? 2 : 10} max={calcService === 'labor' ? 50 : 300} value={calcQuantity} onChange={(e) => setCalcQuantity(Number(e.target.value))} className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#D4A843]" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-800 dark:text-white mb-2">
                      <span>{t('calc.floorsLabel')}</span>
                      <span className="text-[#8F6B17] dark:text-[#D4A843] font-mono font-black">{calcFloor === 1 ? (lang === 'ar' ? 'أرضي / أول' : 'Ground') : `${calcFloor}`}</span>
                    </div>
                    <input type="range" min="1" max="16" value={calcFloor} onChange={(e) => setCalcFloor(Number(e.target.value))} className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#D4A843]" />
                  </div>
                </div>

                <div className="bg-white dark:bg-[#07111e] border-2 border-[#D4A843] rounded-3xl p-6 sm:p-8 text-center shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4A843]/15 text-[#D4A843] text-2xl mx-auto flex items-center justify-center mb-4"><FaCalculator /></div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-600 dark:text-gray-400 mb-2">{t('calc.approxCost')}</h3>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2 font-mono">
                    {estimate.min.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')} - {estimate.max.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')}
                    <span className="text-sm text-[#8F6B17] dark:text-[#D4A843] font-tajawal mr-2 ml-2">{t('calc.egp')}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-gray-400 mb-6 leading-relaxed">{t('calc.note')}</p>
                  <button onClick={handleSendEstimate} className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FDE68A] via-[#D4A843] to-[#B8922E] text-[#0a1628] font-black text-sm sm:text-base hover:brightness-110 shadow-lg flex items-center justify-center gap-3">
                    <FaWhatsapp className="w-5 h-5" />
                    <span>{t('calc.sendBtn')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#0a1628] transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title={t('gov.title')} subtitle={t('gov.sub')} />
            <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8">
              {governorateCoverage.map((gov, index) => (
                <button
                  key={gov.id}
                  onClick={() => setSelectedGovIndex(index)}
                  title={gov.name}
                  aria-label={`${gov.name} - ${gov.speed}`}
                  className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${selectedGovIndex === index ? 'bg-[#D4A843] text-[#0a1628] shadow-lg shadow-[#D4A843]/30 scale-105' : 'bg-white dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'}`}
                >
                  {gov.name}
                </button>
              ))}
            </div>

            <div className="bg-white dark:bg-[#0d1f3c] rounded-3xl p-8 border border-[#D4A843]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className={`space-y-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <span className="text-xs font-bold text-[#8F6B17] dark:text-[#D4A843] bg-[#D4A843]/15 px-3 py-1 rounded-full">{t('gov.speedPrefix')} {governorateCoverage[selectedGovIndex].speed}</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">{lang === 'ar' ? `خدمات دورتمون في ${governorateCoverage[selectedGovIndex].name}` : `Dortmun Services in ${governorateCoverage[selectedGovIndex].name}`}</h3>
                <p className="text-sm text-slate-600 dark:text-gray-300 max-w-xl">{governorateCoverage[selectedGovIndex].areas}</p>
                <div className="flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-400 font-bold pt-1">
                  <HiCheckCircle className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>{t('gov.available')}</span>
                </div>
              </div>

              <a href={`https://wa.me/201029046651?text=${encodeURIComponent(`مرحباً شركة دورتمون، أود طلب طاقم عمل ومقايسة في: ${governorateCoverage[selectedGovIndex].name}`)}`} target="_blank" rel="noopener noreferrer" title={t('gov.orderBtn')} aria-label={t('gov.orderBtn')} className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-black text-sm whitespace-nowrap transition-all shadow-lg flex items-center gap-2">
                <FaWhatsapp className="w-5 h-5" />
                <span>{t('gov.orderBtn')}</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white dark:bg-[#0d1f3c]/40 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title={t('why.title')} subtitle={t('why.sub')} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
              {whyChooseUs.map((item) => (
                <div key={item.id} className="group relative p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-[#D4A843] dark:hover:border-[#D4A843]/40 transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#D4A843]/15 text-[#D4A843] text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"><item.icon /></div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-100 dark:bg-[#0a1628] border-y border-slate-200 dark:border-[#D4A843]/20 relative overflow-hidden transition-colors">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StatsCounter stats={stats} />
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white dark:bg-[#0d1f3c]/30 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title={t('test.title')} subtitle={t('test.sub')} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} name={testimonial.name} role={testimonial.role} content={testimonial.content} rating={testimonial.rating} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#D4A843] via-[#C49A3A] to-[#B08630] text-[#0a1628]">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-black mb-6">{t('cta.title')}</h2>
            <p className="text-lg sm:text-xl font-medium text-[#0a1628]/85 mb-10 max-w-2xl mx-auto leading-relaxed">{t('cta.sub')}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="https://wa.me/201029046651?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%AF%D9%88%D8%B1%D8%AA%D9%85%D9%88%D9%86%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%AD%D8%AF%D9%88%20%D9%85%D8%A7%D9%84%D8%AA%D9%83%D8%B3%D9%8A%D8%B1%20%D9%88%D8%A7%D9%84%D8%AA%D8%B4%D9%88%D9%8A%D9%86%20%D9%88%D8%A7%D9%84%D8%A7%D8%B1%D8%AA%D9%88%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9" target="_blank" rel="noopener noreferrer" title={t('cta.whatsapp')} aria-label={t('cta.whatsapp')} className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black text-white bg-green-700 hover:bg-green-800 rounded-2xl transition-all shadow-xl">
                <FaWhatsapp className="w-6 h-6" />
                {t('cta.whatsapp')}
              </a>

              <a href="tel:+201029046651" title={t('cta.call')} aria-label={t('cta.call')} className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black text-[#0a1628] bg-white hover:bg-gray-100 rounded-2xl transition-all shadow-xl">
                <FaPhoneAlt className="w-5 h-5 text-[#0a1628]" />
                {t('cta.call')}
              </a>
            </div>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-[#0a1628]/15 px-6 py-3.5 rounded-full text-xs sm:text-sm font-black">
              <span>{t('person.mahmoud_ayman')}: <span dir="ltr">01029046651</span></span>
              <span>•</span>
              <span>{t('person.mahmoud_hamada')}: <span dir="ltr">01035633986</span></span>
              <span>•</span>
              <span>{t('tax.certified')}</span>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {showTaxModal && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowTaxModal(false)} aria-hidden="true" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-lg bg-white dark:bg-[#0a1628] border-2 border-[#D4A843] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-right overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4A843]/10 rounded-br-full pointer-events-none" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A843]/20 flex items-center justify-center text-[#D4A843]">
                    <FaCertificate className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">{t('verify.taxHeader')}</h3>
                    <span className="text-xs text-green-600 dark:text-green-400 font-bold flex items-center gap-1"><MdVerified className="w-4 h-4" /> {t('verify.statusVal')}</span>
                  </div>
                </div>
                <button onClick={() => setShowTaxModal(false)} title={lang === 'ar' ? 'إغلاق نافذة السجل الضريبي' : 'Close Tax Info Modal'} aria-label={lang === 'ar' ? 'إغلاق نافذة السجل الضريبي' : 'Close Tax Info Modal'} className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-gray-300 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex justify-between items-center">
                  <span className="text-slate-500 dark:text-gray-400 font-bold">{t('verify.entityName')}</span>
                  <strong className="text-slate-900 dark:text-white font-black">{t('verify.entityNameVal')}</strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#D4A843]/10 border border-[#D4A843]/30 flex justify-between items-center">
                  <span className="text-[#D4A843] font-bold">{t('verify.taxReg')}</span>
                  <strong className="text-lg font-mono text-slate-900 dark:text-white font-black" dir="ltr">781-865-344</strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                  <span className="text-slate-500 dark:text-gray-400 font-bold block">{t('verify.directors')}</span>
                  <div className="text-xs space-y-1 font-bold text-slate-800 dark:text-gray-200">
                    <p className="flex items-center gap-1.5"><span className="text-[#D4A843]">✦</span><span>{t('verify.ayman')}</span></p>
                    <p className="flex items-center gap-1.5"><span className="text-[#D4A843]">✦</span><span>{t('verify.hamada')}</span></p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 dark:text-gray-400 text-center pt-2 leading-relaxed">{lang === 'ar' ? 'يحق لجميع عملائنا من مكاتب هندسية، شركات مقاولات، وأفراد طلب فواتير ضريبية معتمدة وعقود تنفيذ قانونية.' : 'All corporate and individual clients are entitled to verified tax invoices and certified legal execution contracts.'}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex gap-3">
                <a href="tel:+201029046651" title="اتصال بمحمود أيمن 01029046651" aria-label="اتصال بمحمود أيمن 01029046651" className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-[#D4A843] hover:text-[#0a1628] text-center text-xs font-black transition-all">{t('person.mahmoud_ayman')} (01029046651)</a>
                <a href="tel:+201035633986" title="اتصال بمحمود حمادة 01035633986" aria-label="اتصال بمحمود حمادة 01035633986" className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-[#D4A843] hover:text-[#0a1628] text-center text-xs font-black transition-all">{t('person.mahmoud_hamada')} (01035633986)</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
