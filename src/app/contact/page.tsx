'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaPaperPlane,
  FaUserTie,
} from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SectionTitle from '@/components/SectionTitle';
import ScrollToTop from '@/components/ScrollToTop';
import { useApp } from '@/context/AppContext';

export default function ContactPage() {
  const { lang, t } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'demolition',
    governorate: 'cairo',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    { id: 'demolition', label: lang === 'ar' ? 'أعمال تكسير حوائط وحمامات وبيوت' : 'Wall, Bathroom & House Demolition' },
    { id: 'materials', label: lang === 'ar' ? 'تشوين رملة وأسمنت وسن للأدوار العليا' : 'Sand, Cement & Aggregate Hoisting' },
    { id: 'labor', label: lang === 'ar' ? 'توريد عمالة مدربة وصنايعية' : 'Skilled Labor & Craftsmen Supply' },
    { id: 'cleaning', label: lang === 'ar' ? 'عمالة نظافة مواقع وإنشاءات ورفع أنقاض' : 'Site Cleanup & Rubble Hauling' },
    { id: 'renovation', label: lang === 'ar' ? 'تكسير وتجريد وترميم كامل' : 'Full Stripping & Demolition Package' },
  ];

  const governorates = [
    { id: 'cairo', label: lang === 'ar' ? 'القاهرة الكبرى والتجمع والشروق' : 'Greater Cairo (5th Settlement, Shorouk)' },
    { id: 'giza', label: lang === 'ar' ? 'الجيزة وأكتوبر والشيخ زايد' : 'Giza & 6th of October & Zayed' },
    { id: 'new_capital', label: lang === 'ar' ? 'العاصمة الإدارية الجديدة' : 'New Administrative Capital' },
    { id: 'alex', label: lang === 'ar' ? 'الإسكندرية والساحل الشمالي' : 'Alexandria & North Coast' },
    { id: 'delta', label: lang === 'ar' ? 'محافظات الدلتا (المنصورة، طنطا، بنها)' : 'Delta (Mansoura, Tanta, Benha)' },
    { id: 'canal_upper', label: lang === 'ar' ? 'مدن القناة والصعيد' : 'Canal Cities & Upper Egypt' },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const selectedServiceLabel =
      serviceOptions.find((s) => s.id === formData.service)?.label || formData.service;
    const selectedGovLabel =
      governorates.find((g) => g.id === formData.governorate)?.label || formData.governorate;

    const message =
      lang === 'ar'
        ? `*طلب مقايسة وعرض سعر جديد — دورتمون للمقاولات*\n\n` +
          `👤 *الاسم:* ${formData.name}\n` +
          `📞 *رقم الهاتف:* ${formData.phone}\n` +
          `🔨 *الخدمة المطلوبة:* ${selectedServiceLabel}\n` +
          `📍 *المحافظة / الموقع:* ${selectedGovLabel}\n` +
          `📝 *تفاصيل المشروع:* ${formData.details || 'لا توجد ملاحظات إضافية'}\n\n` +
          `_تم الإرسال عبر الموقع الرسمي لشركة دورتمون (سجل ضريبي: 781-865-344)_`
        : `*New Dortmund Contracting Quote Request*\n\n` +
          `👤 *Name:* ${formData.name}\n` +
          `📞 *Phone:* ${formData.phone}\n` +
          `🔨 *Service:* ${selectedServiceLabel}\n` +
          `📍 *Location:* ${selectedGovLabel}\n` +
          `📝 *Details:* ${formData.details || 'None'}\n\n` +
          `_Sent via Dortmund Official Web Portal (Tax ID: 781-865-344)_`;

    window.open(`https://wa.me/201029046651?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
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
            {lang === 'ar' ? 'تواصل مع إدارة شركة دورتمون' : 'Contact Dortmund Management'}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'ar'
              ? 'احصل على مقايسة فورية ومعاينة مجانية لمشروعك في أي مكان بمصر. تواصل مباشرة مع الإدارة أو أرسل تفاصيل مشروعك عبر النموذج.'
              : 'Get an instant quote and free on-site survey anywhere in Egypt. Connect directly with management or send your request below.'}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Direct Contacts Column */}
            <div className="space-y-6">
              {/* Mahmoud Ayman */}
              <div className="bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4A843]/15 text-[#D4A843] flex items-center justify-center text-xl font-black">
                    <FaUserTie />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {t('person.mahmoud_ayman')}
                    </h3>
                    <p className="text-xs text-[#D4A843] font-bold">
                      {t('person.mahmoud_ayman_role')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href="tel:+201029046651"
                    aria-label={`اتصال هاتفياً بـ ${t('person.mahmoud_ayman')} 01029046651`}
                    title={`اتصال هاتفياً بـ ${t('person.mahmoud_ayman')} 01029046651`}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-[#D4A843] hover:text-[#0a1628] text-slate-900 dark:text-white text-xs font-black transition-all flex items-center justify-center gap-2"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                    <span dir="ltr">01029046651</span>
                  </a>
                  <a
                    href="https://wa.me/201029046651"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`مراسلة ${t('person.mahmoud_ayman')} عبر واتساب`}
                    title={`مراسلة ${t('person.mahmoud_ayman')} عبر واتساب`}
                    className="p-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Mahmoud Hamada */}
              <div className="bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4A843]/15 text-[#D4A843] flex items-center justify-center text-xl font-black">
                    <FaUserTie />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {t('person.mahmoud_hamada')}
                    </h3>
                    <p className="text-xs text-[#D4A843] font-bold">
                      {t('person.mahmoud_hamada_role')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href="tel:+201035633986"
                    aria-label={`اتصال هاتفياً بـ ${t('person.mahmoud_hamada')} 01035633986`}
                    title={`اتصال هاتفياً بـ ${t('person.mahmoud_hamada')} 01035633986`}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-[#D4A843] hover:text-[#0a1628] text-slate-900 dark:text-white text-xs font-black transition-all flex items-center justify-center gap-2"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                    <span dir="ltr">01035633986</span>
                  </a>
                  <a
                    href="https://wa.me/201035633986"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`مراسلة ${t('person.mahmoud_hamada')} عبر واتساب`}
                    title={`مراسلة ${t('person.mahmoud_hamada')} عبر واتساب`}
                    className="p-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Official Tax Card */}
              <div className="bg-[#D4A843]/10 border border-[#D4A843]/30 rounded-3xl p-6 text-center">
                <FaFileInvoiceDollar className="w-8 h-8 text-[#D4A843] mx-auto mb-2" />
                <span className="text-xs text-slate-600 dark:text-gray-300 font-bold block mb-1">
                  {lang === 'ar' ? 'رقم السجل والبطاقة الضريبية الرسمية:' : 'Official Certified Tax Registry:'}
                </span>
                <span className="text-xl font-mono font-black text-slate-900 dark:text-white" dir="ltr">
                  781-865-344
                </span>
                <p className="text-[11px] text-slate-500 dark:text-gray-400 mt-2">
                  {lang === 'ar'
                    ? 'فواتير ضريبية معتمدة لجميع الشركات والمؤسسات والأفراد'
                    : 'Certified tax invoices issued for all projects'}
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-black mb-2 text-slate-900 dark:text-white">
                  {lang === 'ar' ? 'طلب مقايسة فورية وتحديد موعد معاينة' : 'Instant Quote & On-Site Survey Request'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mb-8">
                  {lang === 'ar'
                    ? 'املأ النموذج وسيتم تحويله فوراً ومنظماً عبر واتساب إلى مسؤولي المشاريع للرد خلال دقائق.'
                    : 'Fill out this form to generate a structured request sent directly to project management via WhatsApp.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 mb-2">
                        {lang === 'ar' ? 'الاسم بالكامل *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        aria-label={lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
                        title={lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
                        placeholder={lang === 'ar' ? 'مثال: م. أحمد الشريف' : 'e.g. Eng. Ahmed'}
                        className="w-full p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-[#D4A843] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 mb-2">
                        {lang === 'ar' ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        aria-label={lang === 'ar' ? 'رقم الهاتف أو الواتساب' : 'Phone or WhatsApp Number'}
                        title={lang === 'ar' ? 'رقم الهاتف أو الواتساب' : 'Phone or WhatsApp Number'}
                        placeholder="010XXXXXXXX"
                        className="w-full p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-[#D4A843] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 mb-2">
                        {lang === 'ar' ? 'الخدمة المطلوبة' : 'Required Service'}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        aria-label={lang === 'ar' ? 'الخدمة المطلوبة' : 'Required Service'}
                        title={lang === 'ar' ? 'الخدمة المطلوبة' : 'Required Service'}
                        className="w-full p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-[#D4A843] focus:outline-none"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.id} value={opt.id} className="bg-white dark:bg-[#0a1628] text-slate-900 dark:text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 mb-2">
                        {lang === 'ar' ? 'المحافظة أو المنطقة' : 'Governorate / Area'}
                      </label>
                      <select
                        value={formData.governorate}
                        onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                        aria-label={lang === 'ar' ? 'المحافظة أو المنطقة' : 'Governorate or Area'}
                        title={lang === 'ar' ? 'المحافظة أو المنطقة' : 'Governorate or Area'}
                        className="w-full p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-[#D4A843] focus:outline-none"
                      >
                        {governorates.map((gov) => (
                          <option key={gov.id} value={gov.id} className="bg-white dark:bg-[#0a1628] text-slate-900 dark:text-white">
                            {gov.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-gray-300 mb-2">
                      {lang === 'ar' ? 'تفاصيل المشروع أو التشوين أو التكسير' : 'Project & Quantity Details'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      aria-label={lang === 'ar' ? 'تفاصيل المشروع أو التشوين أو التكسير' : 'Project and Quantity Details'}
                      title={lang === 'ar' ? 'تفاصيل المشروع أو التشوين أو التكسير' : 'Project and Quantity Details'}
                      placeholder={
                        lang === 'ar'
                          ? 'اذكر تفاصيل المساحة، عدد الأدوار، كمية الرمل أو الأسمنت، أو مواصفات التكسير المطلوبة...'
                          : 'Mention approximate area, floor elevation, material volume, or demolition requirements...'
                      }
                      className="w-full p-3.5 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-[#D4A843] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    aria-label={lang === 'ar' ? 'إرسال طلب المقايسة فورياً عبر واتساب' : 'Send Quote Request via WhatsApp'}
                    title={lang === 'ar' ? 'إرسال طلب المقايسة فورياً عبر واتساب' : 'Send Quote Request via WhatsApp'}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FDE68A] via-[#D4A843] to-[#B8922E] text-[#0a1628] font-black text-sm sm:text-base hover:brightness-110 shadow-xl shadow-[#D4A843]/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>
                      {lang === 'ar'
                        ? 'إرسال الطلب فورياً عبر واتساب (محمود أيمن: 01029046651)'
                        : 'Send Request Directly via WhatsApp (01029046651)'}
                    </span>
                  </button>
                </form>
              </div>
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
