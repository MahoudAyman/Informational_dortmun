'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SectionTitle from '@/components/SectionTitle';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ScrollToTop from '@/components/ScrollToTop';
import { FaWhatsapp, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import { useApp } from '@/context/AppContext';

export default function ProjectsPage() {
  const { lang, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: lang === 'ar' ? 'الكل' : 'All Projects' },
    { id: 'demolition', label: lang === 'ar' ? 'أعمال التكسير' : 'Demolition' },
    { id: 'materials', label: lang === 'ar' ? 'تشوين المواد' : 'Materials Hoisting' },
    { id: 'cleaning', label: lang === 'ar' ? 'نظافة مواقع' : 'Site Cleanup' },
    { id: 'labor', label: lang === 'ar' ? 'توريد عمالة' : 'Labor Supply' },
  ];

  const projects = [
    {
      id: 1,
      title: lang === 'ar' ? 'تكسير وتجريد فيلا بالتجمع الخامس' : 'Villa Demolition & Stripping - 5th Settlement',
      category: 'demolition',
      location: lang === 'ar' ? 'التجمع الخامس، القاهرة الجديدة' : '5th Settlement, New Cairo',
      description:
        lang === 'ar'
          ? 'تكسير حوائط وقواطع وتجريد 4 حمامات ومطبخ من السيراميك مع تكسير أرضيات ونقل 8 سيارات ردش للمقالب العمومية.'
          : 'Partition wall demolition, stripping 4 bathrooms & kitchen tiles, and hauling away 8 truckloads of debris.',
      image: '/images/project-villa.webp',
      badge: lang === 'ar' ? 'أمان إنشائي 100%' : '100% Engineering Safety',
    },
    {
      id: 2,
      title: lang === 'ar' ? 'تشوين رمل وأسمنت وسن للأدوار العليا' : 'Sand & Cement Crane Hoisting to High Floors',
      category: 'materials',
      location: lang === 'ar' ? 'مدينة نصر، القاهرة' : 'Nasr City, Cairo',
      description:
        lang === 'ar'
          ? 'توريد ورفع 500 طن رمل مغسول وأسمنت بورتلاندي وسن 1 و 2 بالونش الهيدروليكي لعمارة سكنية 11 دور.'
          : 'Supplying and hoisting 500 tons of washed sand, cement, and crushed stone to an 11-story building.',
      image: '/images/materials-ai.webp',
      badge: lang === 'ar' ? 'أوناش رفع هيدروليكية' : 'Hydraulic Cranes',
    },
    {
      id: 3,
      title: lang === 'ar' ? 'نظافة موقع وتسليم كمبوند بالشيخ زايد' : 'Compound Site Cleanup & Turnkey Handover',
      category: 'cleaning',
      location: lang === 'ar' ? 'الشيخ زايد، الجيزة' : 'Sheikh Zayed, Giza',
      description:
        lang === 'ar'
          ? 'تنظيف شامل لموقع إنشائي بمساحة 1200 متر مربع بعد انتهاء أعمال التشطيب مع جلي الأرضيات وتسليمه على المفتاح.'
          : 'Deep cleaning for 1,200m² site post-finishing, floor scrubbing, and turnkey handover to owner.',
      image: '/images/cleaning-after.webp',
      badge: lang === 'ar' ? 'تسليم على المفتاح' : 'Turnkey Handover',
    },
    {
      id: 4,
      title: lang === 'ar' ? 'توريد طاقم عمالة ماهرة وصنايعية هيلتي' : 'Skilled Breaker Labor Crew Deployment',
      category: 'labor',
      location: lang === 'ar' ? 'العاصمة الإدارية الجديدة' : 'New Administrative Capital',
      description:
        lang === 'ar'
          ? 'توفير طاقم مكون من 40 عامل بناء وتكسير وتشوين لمشروع برجي متعدد الاستخدامات بانتظام وإشراف يومي.'
          : 'Deployment of 40 certified masonry, demolition, and hoisting workers for high-rise commercial project.',
      image: '/images/labor-ai.webp',
      badge: lang === 'ar' ? 'جاهزية 24 ساعة' : '24h Squad Dispatch',
    },
    {
      id: 5,
      title: lang === 'ar' ? 'تكسير وتجديد حمامات ومطابخ شقق بـ 6 أكتوبر' : 'Apartment Bathroom & Kitchen Stripping',
      category: 'demolition',
      location: lang === 'ar' ? 'مدينة 6 أكتوبر، الجيزة' : '6th of October City, Giza',
      description:
        lang === 'ar'
          ? 'تجريد كامل للحمامات وتكسير أرضيات ومحارة قديمة مع فتح مدخل صالة أمريكي دون التأثير على الأعمدة الحاملة.'
          : 'Complete bathroom ceramic strip-down, old plaster removal, and open-plan arch creation safely.',
      image: '/images/demolition-ai.webp',
      badge: lang === 'ar' ? 'دقة وتأمين' : 'Precision Execution',
    },
    {
      id: 6,
      title: lang === 'ar' ? 'تشوين خامات خرسانية وبناء لمول تجاري' : 'Building Material Hoisting for Shopping Mall',
      category: 'materials',
      location: lang === 'ar' ? 'الشروق، القاهرة' : 'El Shorouk, Cairo',
      description:
        lang === 'ar'
          ? 'توريد سن 1 وسن 2 ورملة ناعمة وخشنة مع أطقم تشوين متخصصة لنقل الخامات إلى الأدوار الداخلية للمول.'
          : 'Aggregate and washed sand supply with dedicated interior hauling labor crews inside mall structure.',
      image: '/images/materials-before.webp',
      badge: lang === 'ar' ? 'توريد جملة' : 'Wholesale Supply',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
            {lang === 'ar' ? 'معرض مشاريع وإنجازات دورتمون' : 'Dortmund Projects & Achievements'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'ar'
              ? 'نماذج حقيقية من مئات المشاريع التي قمنا بتنفيذها بنجاح في القاهرة والجيزة وجميع محافظات مصر مع كبرى شركات المقاولات والعملاء.'
              : 'Real showcases from hundreds of projects successfully executed across Cairo, Giza, and all Egyptian governorates.'}
          </p>
        </div>

        {/* Filter Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                aria-label={cat.label}
                title={cat.label}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4A843] text-[#0a1628] shadow-md shadow-[#D4A843]/30 scale-105'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div layout key={lang} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#D4A843] transition-all flex flex-col justify-between"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 bg-[#D4A843] text-[#0a1628] text-xs font-black px-3 py-1 rounded-full shadow-md">
                      {project.badge}
                    </span>
                    <span className="absolute bottom-3 right-4 flex items-center gap-1.5 text-xs text-white/90 font-bold bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      <FaMapMarkerAlt className="text-[#D4A843]" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-[#D4A843] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/201029046651?text=${encodeURIComponent(
                        `مرحباً شركة دورتمون، أود الاستفسار وطلب تنفيذ مشروع مماثل لمشروع: ${project.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={lang === 'ar' ? `طلب تنفيذ مشروع مماثل: ${project.title}` : `Request similar project: ${project.title}`}
                      title={lang === 'ar' ? `طلب تنفيذ مشروع مماثل: ${project.title}` : `Request similar project: ${project.title}`}
                      className="w-full py-3 px-4 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-[#D4A843] hover:text-[#0a1628] text-slate-800 dark:text-white text-xs font-black transition-all flex items-center justify-center gap-2 border border-slate-300 dark:border-white/10"
                    >
                      <FaWhatsapp className="w-4 h-4 text-green-500 group-hover:text-[#0a1628]" />
                      <span>{lang === 'ar' ? 'طلب تنفيذ مشروع مماثل' : 'Request Similar Project'}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Before / After Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('ba.title')}
            subtitle={t('ba.sub')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-slate-50 dark:bg-[#0d1f3c] p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
              <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
                {t('ba.demoTitle')}
              </h3>
              <BeforeAfterSlider
                beforeImage="/images/demolition-ai.webp"
                afterImage="/images/renovated-ai.webp"
                beforeLabel={t('ba.demoBefore')}
                afterLabel={t('ba.demoAfter')}
              />
            </div>
            <div className="bg-slate-50 dark:bg-[#0d1f3c] p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
              <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
                {t('ba.matTitle')}
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
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
