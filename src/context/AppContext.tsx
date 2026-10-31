'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';
export type Theme = 'dark' | 'light';

interface AppContextType {
  lang: Language;
  theme: Theme;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  toggleTheme: () => void;
  t: (key: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Brand & People
    'brand.name': 'شركة دورتمون للمقاولات والتوريدات',
    'brand.tagline': 'للمقاولات والتوريدات العامة',
    'person.mahmoud_ayman': 'محمود أيمن',
    'person.mahmoud_hamada': 'محمود حمادة',
    'person.mahmoud_ayman_role': 'إدارة المشاريع والتوريدات',
    'person.mahmoud_hamada_role': 'إدارة العمليات والتنفيذ الميداني',
    'tax.label': 'الرقم الضريبي الرسمي:',
    'tax.number': '781-865-344',
    'tax.certified': 'سجل ضريبي معتمد: 781-865-344',
    'tax.badge': 'كيان تجاري موثق رسمياً',

    // Nav
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.quote': 'طلب عرض سعر',
    'nav.callUs': 'اتصل الآن',

    // Hero
    'hero.badge': 'شركة دورتمون للمقاولات والتوريدات | سجل ضريبي معتمد: 781-865-344',
    'hero.title1': 'الشركة الأولى في مصر في',
    'hero.title2': 'توريد العمالة والتكسير والتشوين',
    'hero.desc': 'نوفر أمهر صنايعية وعمالة مدربة، خدمات تشوين رملة وأسمنت وسن للأدوار العليا بالأوناش، أعمال تكسير حوائط وحمامات وبيوت بأحدث المعدات الهيدروليكية، مع نظافة المواقع ورفع الردش في القاهرة والجيزة وجميع محافظات مصر.',
    'hero.cta.quote': 'طلب مقايسة فورية عبر واتساب',
    'hero.cta.services': 'نموذج عرض السعر المخصص',
    'hero.callback.label': 'اطلب اتصالاً خلال دقيقة:',
    'hero.callback.placeholder': 'رقم هاتفك (010...)',
    'hero.callback.btn': 'اتصلوا بي الآن',

    // Trust Bar
    'trust.tax': 'رقم ضريبي معتمد',
    'trust.taxVal': '781-865-344',
    'trust.speed': 'سرعة الاستجابة',
    'trust.speedVal': 'خلال 24 ساعة بموقعك',
    'trust.equip': 'المعدات والتنفيذ',
    'trust.equipVal': 'هيلتيات وأوناش حديثة',
    'trust.cov': 'نطاق التغطية',
    'trust.covVal': 'جميع محافظات مصر',

    // Ticker
    'ticker.liveBadge': 'تحديثات حية وميدانية من مواقع العمل:',
    'ticker.item1': '⚡ التجمع الخامس: جاري تشوين 250 طن رمل وأسمنت للأدوار العليا بالونش الهيدروليكي',
    'ticker.item2': '🔨 الشيخ زايد: انتهاء تكسير وتجريد فيلا 400م² وتسليم الموقع نظيفاً على المفتاح',
    'ticker.item3': '👷 6 أكتوبر: توريد طاقم 35 عاملاً وصناعياً معتمداً للمقاول العام لمشروع كمبوند',
    'ticker.item4': '🏗️ العاصمة الإدارية الجديدة: تشوين سن 1 وسن 2 وأسمنت بورتلاندي لمشروع برجي',
    'ticker.item5': '🧹 المعادي: رفع 6 نقلات أنقاض وردش وتلميع موقع بعد انتهاء أعمال التشطيب',
    'ticker.item6': '📜 شركة دورتمون كيان رسمي مسجل ضريبياً برقم 781-865-344 نصدر فواتير ضريبية معتمدة',

    // Services
    'services.sectionTitle': 'خدماتنا الميدانية المعتمدة',
    'services.sectionSub': 'نغطي كافة احتياجات البناء والتشييد والتكسير والتوريد بأعلى مقاييس الجودة والسلامة',
    'services.labor.title': 'توريد عمالة مدربة وصنايعية',
    'services.labor.desc': 'نوفر عمالة ماهرة ومعتمدة لكافة أعمال البناء، التكسير بالهيلتي، تشوين المواد، ونظافة المواقع بأعلى درجات الالتزام والأمانة في جميع محافظات مصر.',
    'services.materials.title': 'تشوين رملة وأسمنت وسن',
    'services.materials.desc': 'توريد وتشوين كافة مواد البناء الأساسية بأعلى المواصفات القياسية. رملة مغسولة، أسمنت بورتلاندي معتمد، وسن 1 و 2 مع أوناش رفع هيدروليكية لجميع الأدوار.',
    'services.demolition.title': 'أعمال تكسير حوائط وحمامات وبيوت',
    'services.demolition.desc': 'تكسير جدران وقواطع، تجريد كامل للحمامات والمطابخ من السيراميك، فتح أبواب وشبابيك في الخرسانة، وهدم منازل وبيوت كاملة بأحدث الهيلتيات والكمبروسرات بأمان تام.',
    'services.cleaning.title': 'عمالة نظافة مواقع ورفع أنقاض',
    'services.cleaning.desc': 'تنظيف شامل للمواقع بعد انتهاء أعمال التكسير أو التشطيب. جمع الردش والمخلفات وتعبئتها، وتنزيلها ونقلها بسيارات مجهزة للمقالب العمومية المرخصة مع تسليم الموقع على المفتاح.',
    'services.more': 'تفاصيل الخدمة وطلب عرض سعر',

    // Calculator
    'calc.title': 'احسب مقايستك التقديرية فورياً',
    'calc.sub': 'أداة ذكية متطورة لحساب تكاليف التكسير والتشوين والعمالة والنظافة بضغطة زر واحدة',
    'calc.serviceLabel': 'اختر نوع الخدمة:',
    'calc.areaLabel': 'المساحة أو الكمية التقديرية (متر مربع / طن):',
    'calc.floorsLabel': 'رقم الدور المطلوب التشوين أو العمل فيه:',
    'calc.governorateLabel': 'المحافظة أو المنطقة:',
    'calc.approxCost': 'التكلفة التقديرية التقريبية:',
    'calc.egp': 'جنيه مصري',
    'calc.note': '* الأسعار تقريبية وتتحدد بدقة بناءً على المعاينة الميدانية المجانية وحجم التوريدات.',
    'calc.sendBtn': 'طلب اعتماد المقايسة وحجز موعد عبر واتساب',

    // Official Verification
    'verify.title': 'البيانات القانونية والاعتماد الضريبي الرسمي',
    'verify.sub': 'شركة دورتمون مسجلة رسمياً وتوفر الأمان القانوني والمالي الكامل للمؤسسات والأفراد',
    'verify.taxHeader': 'مصلحة الضرائب المصرية — سجل تجاري وضريبي نشط',
    'verify.entityName': 'اسم المنشأة:',
    'verify.entityNameVal': 'شركة دورتمون للمقاولات والتوريدات العامة',
    'verify.taxReg': 'رقم التسجيل الضريبي:',
    'verify.taxRegVal': '781-865-344',
    'verify.status': 'حالة القيد الضريبي:',
    'verify.statusVal': 'مُسجل ونشط ومطابق لقانون الاستثمار والشركات',
    'verify.directors': 'الإدارة المسؤولة:',
    'verify.ayman': 'محمود أيمن — 01029046651 (المشاريع والتوريدات)',
    'verify.hamada': 'محمود حمادة — 01035633986 (العمليات والميدان)',

    // Before After
    'ba.title': 'شاهد الفرق في مشاريعنا — قبل وبعد',
    'ba.sub': 'صور حقيقية تبرز دقة وجودة التكسير والتشوين ونظافة المواقع التي ننفذها',
    'ba.demoTitle': 'تكسير وتجديد الحوائط والحمامات',
    'ba.demoBefore': 'قبل: هدم وتكسير الجدران القديمة',
    'ba.demoAfter': 'بعد: تشطيب فخم ومفتوح جاهز للمحارة',
    'ba.matTitle': 'تشوين وتنظيم خامات البناء (رمل وأسمنت وسن)',
    'ba.matBefore': 'قبل: موقع غير منظم',
    'ba.matAfter': 'بعد: تشوين رمل وأسمنت مرتب ورفع للأدوار',

    // Governorates
    'gov.title': 'تغطية كاملة لجميع محافظات مصر',
    'gov.sub': 'نصلك أينما كان مشروعك بطواقم عمل مجهزة وأحدث المعدات وسرعة فائقة',
    'gov.speedPrefix': '⚡ وقت الوصول المتوقع:',
    'gov.available': 'طواقم العمالة والأوناش وسيارات نقل الردش متوفرة وجاهزة للتحرك',
    'gov.orderBtn': 'طلب طاقم عمل في هذه المنطقة',

    // Why Choose Us
    'why.title': 'لماذا تختار شركة دورتمون؟',
    'why.sub': 'نضمن لك التزاماً قانونياً، تنفيذاً هندسياً، وأسعاراً لا تقبل المنافسة',
    'why.1.title': 'كيان تجاري مسجل ضريبياً',
    'why.1.desc': 'شركة دورتمون مسجلة رسمياً برقم ضريبي معتمد 781-865-344 وتصدر فواتير ضريبية معتمدة للشركات والأفراد.',
    'why.2.title': 'سرعة الاستجابة خلال 24 ساعة',
    'why.2.desc': 'أسطول سيارات نقل وفرق عمالة مدربة متواجدة في القاهرة والجيزة وكافة المحافظات للبدء الفوري.',
    'why.3.title': 'أمان هندسي واحترافية تامة',
    'why.3.desc': 'فحص هندسي للموقع قبل التكسير لضمان عدم المساس بالهيكل الخرساني والكمرات وتفادي أي أضرار.',
    'why.4.title': 'أحدث المعدات والأوناش',
    'why.4.desc': 'نمتلك هيلتيات صامتة وقوية، كمبروسرات هواء صناعية، وأوناش رفع هيدروليكية تصل لأعلى الطوابق.',
    'why.5.title': 'أفضل أسعار تنافسية في مصر',
    'why.5.desc': 'عروض أسعار شفافة وباقات اقتصادية شاملة التوريد والتشوين والعمالة دون أي تكاليف خفية.',
    'why.6.title': 'متابعة وإشراف مباشر 24/7',
    'why.6.desc': 'إدارة ميدانية وتواصل مباشر مع مهندسي العمليات (محمود أيمن ومحمود حمادة) لضمان أعلى جودة.',

    // Stats
    'stat.1': 'مشروع تكسير وتشوين منجز',
    'stat.2': 'عميل سعيد ومقاول دائم',
    'stat.3': 'سنوات خبرة موثقة في مصر',
    'stat.4': 'عامل وصنايعي محترف جاهز',

    // Testimonials
    'test.title': 'آراء عملائنا وشركاء النجاح',
    'test.sub': 'ثقة كبرى المكاتب الهندسية والمقاولين في مصر وسام فخر نعتز به',

    // CTA Bottom
    'cta.title': 'جاهز لتنفيذ مشروعك بأعلى كفاءة وسرعة؟',
    'cta.sub': 'تواصل مع مسؤولي المشاريع الآن واحصل على مقايسة فورية ومعاينة مجانية للموقع.',
    'cta.whatsapp': 'تواصل واتساب مع الإدارة',
    'cta.call': 'اتصل بنا هاتفياً الآن',

    // Footer
    'footer.about': 'شركة دورتمون للمقاولات والتوريدات العامة — الشركة الرائدة في مصر في توريد العمالة الماهرة، أعمال التكسير المتخصصة للحوائط والحمامات والبيوت، تشوين مواد البناء (رملة، أسمنت، سن)، وخدمات نظافة المواقع لجميع المحافظات.',
    'footer.quickLinks': 'روابط الموقع',
    'footer.services': 'خدماتنا الرئيسية',
    'footer.contact': 'أرقام التواصل والإدارة',
    'footer.rights': 'جميع الحقوق محفوظة لـ شركة دورتمون للمقاولات والتوريدات العامة',
    'footer.taxNotice': 'رقم ضريبي رسمي: 781-865-344',
  },
  en: {
    // Brand & People
    'brand.name': 'Dortmund Contracting & Supplies',
    'brand.tagline': 'General Contracting & Building Supplies',
    'person.mahmoud_ayman': 'Mahmoud Ayman',
    'person.mahmoud_hamada': 'Mahmoud Hamada',
    'person.mahmoud_ayman_role': 'Projects & Supplies Management',
    'person.mahmoud_hamada_role': 'Operations & Field Execution',
    'tax.label': 'Official Tax Registration:',
    'tax.number': '781-865-344',
    'tax.certified': 'Certified Tax ID: 781-865-344',
    'tax.badge': 'Officially Verified Enterprise',

    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.faq': 'FAQ',
    'nav.quote': 'Request Quote',
    'nav.callUs': 'Call Now',

    // Hero
    'hero.badge': 'Dortmund Contracting & Supplies | Certified Tax ID: 781-865-344',
    'hero.title1': 'Egypt’s Leading Authority in',
    'hero.title2': 'Labor Supply, Demolition & Materials',
    'hero.desc': 'Supplying certified skilled labor and master craftsmen, crane hoisting of sand, cement & gravel to high floors, professional wall & bathroom demolition with hydraulic equipment, and thorough site cleanup across Cairo, Giza, and all Egyptian governorates.',
    'hero.cta.quote': 'Instant WhatsApp Estimate',
    'hero.cta.services': 'Custom Quote Form',
    'hero.callback.label': 'Request a call in 60 seconds:',
    'hero.callback.placeholder': 'Your Phone (010...)',
    'hero.callback.btn': 'Call Me Now',

    // Trust Bar
    'trust.tax': 'Certified Tax ID',
    'trust.taxVal': '781-865-344',
    'trust.speed': 'Rapid Dispatch',
    'trust.speedVal': 'Within 24 Hours on Site',
    'trust.equip': 'Tools & Machinery',
    'trust.equipVal': 'Heavy Hoists & Breakers',
    'trust.cov': 'National Coverage',
    'trust.covVal': 'All Egypt Governorates',

    // Ticker
    'ticker.liveBadge': 'Live Updates from Ongoing Field Works:',
    'ticker.item1': '⚡ 5th Settlement: Crane hoisting of 250 tons of washed sand & cement underway to top floors',
    'ticker.item2': '🔨 Sheikh Zayed: Completed 400m² villa demolition & tile stripping, turnkey handover ready',
    'ticker.item3': '👷 6th of October: Dispatched 35 vetted craftsmen and helpers for compound general contractor',
    'ticker.item4': '🏗️ New Capital: Supplying graded aggregate 1 & 2 with cement for commercial tower project',
    'ticker.item5': '🧹 Maadi: Hauled 6 dump truckloads of post-renovation rubble with industrial deep cleaning',
    'ticker.item6': '📜 Dortmund is a legally registered entity with Tax ID 781-865-344 issuing verified tax invoices',

    // Services
    'services.sectionTitle': 'Our Certified Field Services',
    'services.sectionSub': 'Covering all construction, building, demolition, and material supply needs with top safety standards',
    'services.labor.title': 'Certified Labor & Craftsmen Supply',
    'services.labor.desc': 'Skilled and vetted workforce for all masonry, jackhammer demolition, materials hoisting, and site cleanup with complete reliability across all Egypt.',
    'services.materials.title': 'Sand, Cement & Gravel Hoisting',
    'services.materials.desc': 'Supply and delivery of standard construction materials. Washed building sand, certified Portland cement, and aggregate with hydraulic roof cranes to any floor.',
    'services.demolition.title': 'Wall, Bathroom & House Demolition',
    'services.demolition.desc': 'Partition breaking, full ceramic stripping for bathrooms & kitchens, structural concrete openings, and full house teardowns with high-power equipment safely.',
    'services.cleaning.title': 'Site Cleanup & Rubble Hauling',
    'services.cleaning.desc': 'Complete post-demolition and post-renovation site cleaning. Rubble bagging, hauling via licensed trucks to official dumpsites, and turnkey handover.',
    'services.more': 'Service Details & Price Quote',

    // Calculator
    'calc.title': 'Instant Smart Cost Estimator',
    'calc.sub': 'Calculate estimated costs for demolition, hoisting, labor and cleanup in seconds',
    'calc.serviceLabel': 'Select Service:',
    'calc.areaLabel': 'Approximate Area or Quantity (m² / Tons):',
    'calc.floorsLabel': 'Target Floor for Hoisting or Work:',
    'calc.governorateLabel': 'Governorate / Area:',
    'calc.approxCost': 'Estimated Approximate Cost:',
    'calc.egp': 'EGP',
    'calc.note': '* Estimates are indicative and finalized following a free on-site survey and material volume inspection.',
    'calc.sendBtn': 'Send Estimate & Book On-Site Survey via WhatsApp',

    // Official Verification
    'verify.title': 'Official Legal Registration & Tax Certificate',
    'verify.sub': 'Dortmund is a legally recognized enterprise ensuring complete financial & legal security',
    'verify.taxHeader': 'Egyptian Tax Authority — Active Commercial Registry',
    'verify.entityName': 'Entity Name:',
    'verify.entityNameVal': 'Dortmund General Contracting & Supplies Co.',
    'verify.taxReg': 'Tax Registration No:',
    'verify.taxRegVal': '781-865-344',
    'verify.status': 'Registration Status:',
    'verify.statusVal': 'Active, Verified & Fully Compliant with Investment Laws',
    'verify.directors': 'Executive Management:',
    'verify.ayman': 'Mahmoud Ayman — 01029046651 (Projects & Supplies)',
    'verify.hamada': 'Mahmoud Hamada — 01035633986 (Field Operations)',

    // Before After
    'ba.title': 'See The Difference In Our Projects — Before & After',
    'ba.sub': 'Authentic on-site photos showcasing our precision in demolition, hoisting, and site cleanup',
    'ba.demoTitle': 'Wall & Bathroom Demolition & Renovation',
    'ba.demoBefore': 'Before: Old Partitions Demolition',
    'ba.demoAfter': 'After: Luxury Open Layout Ready for Plaster',
    'ba.matTitle': 'Building Materials Supply & Storage',
    'ba.matBefore': 'Before: Cluttered Construction Ground',
    'ba.matAfter': 'After: Cleanly Hoisted & Stacked Materials',

    // Governorates
    'gov.title': 'Full Coverage Across All Egypt Governorates',
    'gov.sub': 'Reaching your site anywhere with fully equipped squads and rapid deployment speed',
    'gov.speedPrefix': '⚡ Expected Arrival Speed:',
    'gov.available': 'Labor squads, cranes, and rubble transport trucks ready to deploy',
    'gov.orderBtn': 'Request a Squad in This Area',

    // Why Choose Us
    'why.title': 'Why Choose Dortmund Contracting?',
    'why.sub': 'We guarantee legal legitimacy, structural engineering safety, and unbeatable competitive rates',
    'why.1.title': 'Tax Registered & Official Entity',
    'why.1.desc': 'Dortmund is an officially registered commercial entity with Tax ID 781-865-344, issuing certified tax invoices.',
    'why.2.title': 'Rapid Response Within 24 Hours',
    'why.2.desc': 'Dedicated transport fleet and ready labor teams stationed in Cairo, Giza, and all cities for immediate dispatch.',
    'why.3.title': 'Structural Engineering Safety',
    'why.3.desc': 'Thorough structural assessment before demolition to guarantee zero impact on load-bearing columns and beams.',
    'why.4.title': 'Heavy Duty Tools & Cranes',
    'why.4.desc': 'High-power electric jackhammers, industrial air compressors, and hydraulic roof hoists reaching the highest floors.',
    'why.5.title': 'Best Competitive Rates in Egypt',
    'why.5.desc': 'Transparent quotes and cost-effective bundles covering supply, hoisting, and manpower without hidden fees.',
    'why.6.title': 'Direct 24/7 Management Supervision',
    'why.6.desc': 'Direct contact with operations leaders (Mahmoud Ayman & Mahmoud Hamada) to ensure top execution quality.',

    // Stats
    'stat.1': 'Completed Demolition & Supply Projects',
    'stat.2': 'Satisfied Clients & Permanent Partners',
    'stat.3': 'Years of Proven Experience in Egypt',
    'stat.4': 'Skilled Craftsmen & Laborers Ready',

    // Testimonials
    'test.title': 'Client Reviews & Partners of Success',
    'test.sub': 'The trust of Egypt’s premier engineering offices and contractors is our greatest pride',

    // CTA Bottom
    'cta.title': 'Ready to Launch Your Project With Top Quality & Speed?',
    'cta.sub': 'Contact our project managers now for an instant quote and free on-site survey.',
    'cta.whatsapp': 'WhatsApp Direct Contact',
    'cta.call': 'Call Us by Phone Now',

    // Footer
    'footer.about': 'Dortmund General Contracting & Supplies — Egypt’s leading contractor for skilled labor supply, precision wall & bathroom demolition, construction materials hoisting (sand, cement, gravel), and site cleanup across all governorates.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Core Services',
    'footer.contact': 'Management Contacts',
    'footer.rights': 'All Rights Reserved © Dortmund Contracting & General Supplies',
    'footer.taxNotice': 'Official Tax Registration: 781-865-344',
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('ar');
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  };

  useEffect(() => {
    setMounted(true);
    // Read saved language
    const savedLang = localStorage.getItem('dortmund-lang') as Language;
    if (savedLang === 'ar' || savedLang === 'en') {
      setLangState(savedLang);
      document.documentElement.setAttribute('lang', savedLang);
      document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
    } else {
      document.documentElement.setAttribute('lang', 'ar');
      document.documentElement.setAttribute('dir', 'rtl');
    }

    // Read saved theme
    const savedTheme = localStorage.getItem('dortmund-theme') as Theme;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('dark');
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('dortmund-lang', newLang);
    document.documentElement.setAttribute('lang', newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  };

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setThemeState(newTheme);
    localStorage.setItem('dortmund-theme', newTheme);
    applyTheme(newTheme);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['ar']?.[key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        theme,
        setLang,
        toggleLang,
        toggleTheme,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
