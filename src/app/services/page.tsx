'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaTruckLoading,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaCalculator,
  FaTools,
  FaFileContract,
} from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';
import { GiDemolish, GiCrane } from 'react-icons/gi';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SectionTitle from '@/components/SectionTitle';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ScrollToTop from '@/components/ScrollToTop';
import { useApp } from '@/context/AppContext';

export default function ServicesPage() {
  const { lang, t } = useApp();
  const [selectedService, setSelectedService] = useState('labor');
  const [calcService, setCalcService] = useState('demolition');
  const [calcArea, setCalcArea] = useState(50);
  const [calcFloors, setCalcFloors] = useState(1);

  const servicesList = [
    {
      id: 'labor',
      title: lang === 'ar' ? 'توريد عمالة مدربة ومحترفة' : 'Skilled Labor & Craftsmen Supply',
      subtitle:
        lang === 'ar'
          ? 'نوفر كوادر بشرية ماهرة بمختلف التخصصات لكبرى المشاريع والفلل والشقق'
          : 'Providing vetted skilled labor for major projects, villas, and apartments',
      icon: GiCrane,
      badge: lang === 'ar' ? 'كفاءة وسرعة' : 'Speed & Efficiency',
      description:
        lang === 'ar'
          ? 'نوفر في شركة دورتمون أطقم عمالة مدربة ومعتمدة لجميع الأعمال الإنشائية والمعمارية. عمال تكسير، عمال تشوين، عمال نظافة مواقع، ومساعدين فنيين بأعلى درجات الالتزام والأمانة.'
          : 'Dortmund supplies certified construction labor squads for all civil works: breaker operators, hoisting crews, site cleaners, and technicians with high reliability.',
      features:
        lang === 'ar'
          ? [
              'عمالة يومية أو شهرية أو بالمقاولة حسب احتياج العميل',
              'فريق عمل مدرّب على أعلى معايير السلامة المهنية',
              'إشراف هندسي ومتابعة ميدانية مستمرة للأداء',
              'سرعة توفير الأعداد المطلوبة خلال 24 ساعة في أي محافظة',
              'عمال تكسير ذوو بنية قوية وخبرة باستخدام الهيلتي والكمبروسر',
              'عمالة تشوين ونقل متخصصة في الرفع والتنزيل بحرص تام',
            ]
          : [
              'Daily, monthly, or turnkey contract labor',
              'Trained under strict occupational safety standards',
              'Continuous field supervision and management',
              'Rapid deployment within 24 hours across any governorate',
              'Heavy-duty breaker operators skilled in air compressors & jackhammers',
              'Dedicated materials handling crews for safe hoisting & unloading',
            ],
      highlight:
        lang === 'ar'
          ? 'نوفر عمالة فردية أو فرق عمل كاملة لجميع محافظات مصر'
          : 'Available as individual craftsmen or complete squads nationwide',
      image: '/images/labor-ai.webp',
    },
    {
      id: 'materials',
      title: lang === 'ar' ? 'تشوين رملة وأسمنت وسن' : 'Sand, Cement & Aggregate Hoisting',
      subtitle:
        lang === 'ar'
          ? 'أجود خامات البناء مع أسطول نقل ورافعات لجميع الأدوار والمواقع'
          : 'Premium building supplies with transport fleet & roof hoists to high floors',
      icon: FaTruckLoading,
      badge: lang === 'ar' ? 'خامات معتمدة 100%' : '100% Certified Materials',
      description:
        lang === 'ar'
          ? 'نقدم خدمة متكاملة لتوريد وتشوين مواد البناء الأساسية بأعلى مواصفات الجودة المصرية. تشوين الرملة النظيفة الخالية من الشوائب، والأسمنت البورتلاندي الطازج من أفضل المصانع، وسن 1 و 2 والزلط المدرج مع خدمة الرفع للأدوار العليا بالأوناش والعمالة المتخصصة.'
          : 'Full-service supply and delivery of standard construction materials: clean washed sand, fresh Portland cement from top plants, and graded aggregate (crushed stone 1 & 2) with crane hoisting to high floors.',
      features:
        lang === 'ar'
          ? [
              'توريد رملة ناعمة وخشنة مغسولة ومعتمدة للمحارة والخرسانة',
              'أسمنت ممتاز ومقاوم من كبرى المصانع المصرية المعتمدة',
              'سن 1 وسن 2 وزلط مدرج نظيف خالي من الأتربة',
              'أسطول سيارات نقل مجهز لتوصيل الكميات لأي مكان في مصر',
              'أوناش رفع هيدروليكية وعمال تشوين للرفع حتى أعلى الأدوار',
              'أسعار جملة تنافسية وخصومات للكميات والمشاريع الكبيرة',
            ]
          : [
              'Fine & coarse washed sand certified for masonry and plastering',
              'Resistant and Portland cement from certified Egyptian plants',
              'Clean, dust-free graded crushed stone aggregate (Size 1 & 2)',
              'Dedicated truck transport fleet delivering nationwide',
              'Hydraulic roof cranes and hoisting crews for high elevations',
              'Wholesale competitive rates for large contractor orders',
            ],
      highlight:
        lang === 'ar'
          ? 'التزام صارم بمواعيد التسليم وخامات مطابقة للمواصفات'
          : 'Strict adherence to delivery timelines and laboratory standards',
      image: '/images/materials-ai.webp',
    },
    {
      id: 'demolition',
      title: lang === 'ar' ? 'أعمال التكسير المتخصصة والهدم' : 'Specialized Demolition & Structural Openings',
      subtitle:
        lang === 'ar'
          ? 'تكسير حوائط وحمامات وبيوت وعقارات كاملة بأحدث المعدات وأعلى أمان'
          : 'Partition and bathroom tile demolition, concrete openings, and full teardowns',
      icon: GiDemolish,
      badge: lang === 'ar' ? 'دقة واحترافية' : 'Precision & Safety',
      description:
        lang === 'ar'
          ? 'نمتلك أحدث معدات التكسير الهيدروليكية والميكانيكية (هيلتيات قوية، كمبروسرات هواء، قواطع خرسانية). نقوم بتكسير وإزالة الحوائط القاطعة، تكسير الحمامات والمطابخ وتجريدها من السيراميك، فتح ممرات وأبواب وشبابيك في الخرسانة والطوب، وهدم البيوت والمباني القديمة مع ضمان سلامة الهيكل الخرساني والإنشائي.'
          : 'Armed with industrial pneumatic compressors and heavy electric breakers, we handle non-structural wall removal, complete bathroom/kitchen tile stripping, concrete cutting, and old house demolitions with engineering safety guarantees.',
      features:
        lang === 'ar'
          ? [
              'تكسير حوائط دون الإضرار بالأعمدة والكمرات الإنشائية',
              'تجريد وتكسير كامل للحمامات والمطابخ حتى الطوب الأحمر',
              'إزالة أرضيات السيراميك والبورسلين والرخام والخرسانات',
              'تكسير أسقف وفواصل وتوسيع غرف وفق المخططات الهندسية',
              'هدم كامل للمنازل والأسوار والمباني مع عزل وتأمين الموقع',
              'استخدام أحدث الهيلتيات الصامتة وقواطع الليزر عند الحاجة',
            ]
          : [
              'Partition demolition strictly avoiding columns and structural beams',
              'Full stripping of bathrooms and kitchens down to red brick',
              'Ceramic, porcelain, marble, and concrete floor slab removal',
              'Room enlargements and wall openings per architectural blueprints',
              'Full teardown of aging buildings, fences, and villas safely',
              'Modern low-vibration breakers and concrete saws for occupied buildings',
            ],
      highlight:
        lang === 'ar'
          ? 'فحص مسبق لضمان الأمان الإنشائي وعدم تأثر المبنى المتبقي'
          : 'Pre-demolition structural survey to prevent any damage to load-bearing units',
      image: '/images/demolition-ai.webp',
    },
    {
      id: 'cleaning',
      title: lang === 'ar' ? 'عمالة نظافة مواقع وإنشاءات' : 'Post-Demolition Site Cleanup & Rubble Hauling',
      subtitle:
        lang === 'ar'
          ? 'نظافة ما بعد التكسير والتشطيب ورفع الأنقاض وتسليم الموقع نظيفاً تماماً'
          : 'Rubble bagging, licensed truck transport, and turnkey spotless site delivery',
      icon: MdCleaningServices,
      badge: lang === 'ar' ? 'تسليم على المفتاح' : 'Turnkey Handover',
      description:
        lang === 'ar'
          ? 'نقدم خدمة تنظيف شاملة ومتطورة لمواقع العمل بعد انتهاء أعمال التكسير أو التشطيب. يشمل ذلك جمع الردش والمخلفات وتعبئتها في شكائر، تنزيلها ونقلها بمقاولات نقل معتمدة إلى المقالب العمومية، مع كنس وتلميع الموقع ليصبح جاهزاً للمرحلة التالية.'
          : 'Turnkey site restoration: packaging demolition debris and rubble into bags, lowering from high floors, and hauling away with licensed dump trucks to official city dumps, followed by deep floor sweeping and preparation.',
      features:
        lang === 'ar'
          ? [
              'رفع الأنقاض ومخلفات الهدم والردش ونقلها فورياً بالسيارات',
              'نظافة عميقة بعد التكسير والتشطيب وإزالة بقع الدهانات والأسمنت',
              'تطهير وتنظيف المواقع السكنية والتجارية والصناعية',
              'أحدث ماكينات جلي الأرضيات والمكانس الصناعية القوية',
              'تسليم فوري ومتقن يوفر عليك عناء البحث عن مقاولي نقل ومخلفات',
              'التزام بيئي بالتخلص من الأنقاض في المقالب العمومية المرخصة',
            ]
          : [
              'Immediate post-demolition rubble bagging and truck transport',
              'Deep cleaning post-finishing, removing paint and cement stains',
              'Cleaning of residential, commercial, and industrial facilities',
              'Heavy industrial vacuum sweepers and scrubbers',
              'Fast delivery saving clients the hassle of independent waste truckers',
              'Full environmental compliance using municipal licensed dumpsites',
            ],
      highlight:
        lang === 'ar'
          ? 'تنظيف شامل وتسليم نظيف 100% دون ترك أي أثر للمخلفات'
          : '100% clean handover with zero leftover rubble or dust',
      image: '/images/cleaning-after.webp',
    },
  ];

  // Estimator calculation
  const getEstimatedCost = () => {
    let baseRate = 0;
    if (calcService === 'demolition') baseRate = 50;
    else if (calcService === 'materials') baseRate = 85;
    else if (calcService === 'cleaning') baseRate = 30;
    else baseRate = 400;

    const total = Math.round(baseRate * calcArea * (1 + (calcFloors - 1) * 0.1));
    return total.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US');
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white dark:bg-[#0a1628] text-slate-900 dark:text-white transition-colors duration-300 pt-28 pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A843]/15 border border-[#D4A843]/30 text-[#D4A843] text-xs sm:text-sm font-black mb-4">
            <FaShieldAlt />
            <span>{t('tax.certified')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 text-slate-900 dark:text-white">
            {lang === 'ar' ? 'خدمات شركة دورتمون الميدانية' : 'Dortmund Field Contracting Services'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'ar'
              ? 'حلول شاملة وموثوقة للبناء والتشييد: توريد العمالة المدربة، تشوين الرمل والأسمنت والسن، أعمال التكسير والهدم المتخصصة، ونظافة المواقع في جميع محافظات مصر.'
              : 'End-to-end building solutions: vetted labor supply, sand/cement/gravel hoisting, structural demolition, and post-construction cleanup across all of Egypt.'}
          </p>
        </div>

        {/* Services Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {servicesList.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                aria-label={service.title}
                title={service.title}
                className={`px-6 py-3.5 rounded-2xl text-sm font-black transition-all cursor-pointer flex items-center gap-2.5 ${
                  selectedService === service.id
                    ? 'bg-[#D4A843] text-[#0a1628] shadow-lg shadow-[#D4A843]/30 scale-105'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                }`}
              >
                <service.icon className="w-5 h-5 text-current" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          {servicesList
            .filter((s) => s.id === selectedService)
            .map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <div className="inline-block px-3.5 py-1 rounded-full bg-[#D4A843]/15 text-[#D4A843] text-xs font-black mb-4">
                    {service.badge}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black mb-4 text-slate-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#D4A843]/10 border border-[#D4A843]/30 text-xs sm:text-sm font-bold text-[#D4A843] mb-8">
                    ✦ {service.highlight}
                  </div>

                  <h3 className="text-sm font-black text-slate-900 dark:text-white mb-4">
                    {lang === 'ar' ? 'أبرز مميزات الخدمة ومعايير التنفيذ:' : 'Key Service Highlights & Standards:'}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <FaCheckCircle className="w-4 h-4 text-[#D4A843] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`https://wa.me/201029046651?text=${encodeURIComponent(
                        `مرحباً شركة دورتمون، أود طلب عرض سعر ومعاينة لخدمة: ${service.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={lang === 'ar' ? `طلب عرض سعر فوري لخدمة ${service.title} عبر واتساب` : `Request instant quote for ${service.title} via WhatsApp`}
                      title={lang === 'ar' ? `طلب عرض سعر فوري لخدمة ${service.title} عبر واتساب` : `Request instant quote for ${service.title} via WhatsApp`}
                      className="px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-black text-sm flex items-center gap-2 shadow-lg"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>{lang === 'ar' ? 'طلب عرض سعر فوري' : 'Request Instant Quote'}</span>
                    </a>
                    <a
                      href="tel:+201029046651"
                      aria-label={`اتصال هاتفياً بـ ${t('person.mahmoud_ayman')}`}
                      title={`اتصال هاتفياً بـ ${t('person.mahmoud_ayman')}`}
                      className="px-6 py-3.5 rounded-xl bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-[#D4A843] hover:text-[#0a1628] font-bold text-sm flex items-center gap-2 transition-colors"
                    >
                      <FaPhoneAlt className="w-4 h-4" />
                      <span>{t('person.mahmoud_ayman')}</span>
                    </a>
                  </div>
                </div>

                {/* Service Image / Preview */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 aspect-[4/3] shadow-xl">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4 text-white text-xs font-bold bg-black/60 p-3 rounded-xl backdrop-blur-sm">
                    {service.subtitle}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* ───────── BEFORE / AFTER SLIDER SECTION ───────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <SectionTitle
            title={t('ba.title')}
            subtitle={t('ba.sub')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-slate-50 dark:bg-[#0d1f3c] p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
              <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                <GiDemolish className="text-[#D4A843] text-xl" />
                <span>{t('ba.demoTitle')}</span>
              </h3>
              <BeforeAfterSlider
                beforeImage="/images/demolition-ai.webp"
                afterImage="/images/renovated-ai.webp"
                beforeLabel={t('ba.demoBefore')}
                afterLabel={t('ba.demoAfter')}
              />
            </div>

            <div className="bg-slate-50 dark:bg-[#0d1f3c] p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
              <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                <FaTruckLoading className="text-[#D4A843] text-xl" />
                <span>{t('ba.matTitle')}</span>
              </h3>
              <BeforeAfterSlider
                beforeImage="/images/materials-before.webp"
                afterImage="/images/materials-ai.webp"
                beforeLabel={t('ba.matBefore')}
                afterLabel={t('ba.matAfter')}
              />
            </div>
          </div>
        </div>

        {/* ───────── ESTIMATOR CALCULATOR ───────── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 dark:bg-[#0d1f3c] border-2 border-[#D4A843]/40 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#D4A843]/20 flex items-center justify-center text-[#D4A843] text-2xl">
                <FaCalculator />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {t('calc.title')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400">
                  {t('calc.sub')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 mb-2">
                  {t('calc.serviceLabel')}
                </label>
                <select
                  value={calcService}
                  onChange={(e) => setCalcService(e.target.value)}
                  aria-label={t('calc.serviceLabel')}
                  title={t('calc.serviceLabel')}
                  className="w-full p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs font-bold"
                >
                  <option value="demolition">{lang === 'ar' ? 'تكسير حوائط وحمامات' : 'Demolition'}</option>
                  <option value="materials">{lang === 'ar' ? 'تشوين رملة وأسمنت' : 'Materials Hoisting'}</option>
                  <option value="labor">{lang === 'ar' ? 'توريد عمالة' : 'Labor Supply'}</option>
                  <option value="cleaning">{lang === 'ar' ? 'نظافة مواقع وردش' : 'Site Cleanup'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 mb-2">
                  {t('calc.areaLabel')} ({calcArea})
                </label>
                <input
                  type="range"
                  min="10"
                  max="300"
                  value={calcArea}
                  onChange={(e) => setCalcArea(Number(e.target.value))}
                  aria-label={`${t('calc.areaLabel')} (${calcArea})`}
                  title={`${t('calc.areaLabel')} (${calcArea})`}
                  className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#D4A843] mt-3"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 mb-2">
                  {t('calc.floorsLabel')} ({calcFloors})
                </label>
                <input
                  type="range"
                  min="1"
                  max="16"
                  value={calcFloors}
                  onChange={(e) => setCalcFloors(Number(e.target.value))}
                  aria-label={`${t('calc.floorsLabel')} (${calcFloors})`}
                  title={`${t('calc.floorsLabel')} (${calcFloors})`}
                  className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#D4A843] mt-3"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#07111e] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 dark:text-gray-400 font-bold block">
                  {t('calc.approxCost')}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">
                  {getEstimatedCost()} <span className="text-sm text-[#D4A843] font-tajawal">{t('calc.egp')}</span>
                </span>
              </div>

              <a
                href={`https://wa.me/201029046651?text=${encodeURIComponent(
                  `مرحباً شركة دورتمون، أود الاستفسار عن مقايسة تقديرية لخدمة ${calcService} بمساحة ${calcArea} والدور ${calcFloors}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('calc.sendBtn')}
                title={t('calc.sendBtn')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FDE68A] via-[#D4A843] to-[#B8922E] text-[#0a1628] font-black text-sm hover:brightness-110 shadow-lg flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>{t('calc.sendBtn')}</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
