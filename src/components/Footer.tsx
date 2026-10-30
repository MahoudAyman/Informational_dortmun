'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Logo from './Logo';

const quickLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'من نحن' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/projects', label: 'مشاريعنا' },
  { href: '/contact', label: 'تواصل معنا' },
];

const services = [
  { href: '/services#cleaning', label: 'خدمات النظافة' },
  { href: '/services#pest-control', label: 'مكافحة الحشرات' },
  { href: '/services#landscaping', label: 'تنسيق الحدائق' },
  { href: '/services#facade', label: 'تنظيف الواجهات' },
  { href: '/services#marble', label: 'جلي وتلميع الرخام' },
  { href: '/services#pools', label: 'تنظيف المسابح' },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: FaFacebookF, label: 'فيسبوك' },
  { href: 'https://instagram.com', icon: FaInstagram, label: 'انستغرام' },
  { href: 'https://twitter.com', icon: FaTwitter, label: 'تويتر' },
  { href: 'https://linkedin.com', icon: FaLinkedinIn, label: 'لينكدإن' },
  { href: 'https://youtube.com', icon: FaYoutube, label: 'يوتيوب' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              شركة دورتمون للخدمات المتكاملة - نقدم أعلى مستويات الجودة في
              خدمات النظافة والصيانة ومكافحة الحشرات. خبرة تمتد لأكثر من 10
              سنوات في خدمة عملائنا.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-[#D4A843] hover:text-[#0a1628] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 relative">
              روابط سريعة
              <span className="absolute bottom-[-8px] right-0 w-10 h-0.5 bg-[#D4A843]" />
            </h3>
            <ul className="space-y-3 mt-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#D4A843] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]/50 group-hover:bg-[#D4A843] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 relative">
              خدماتنا
              <span className="absolute bottom-[-8px] right-0 w-10 h-0.5 bg-[#D4A843]" />
            </h3>
            <ul className="space-y-3 mt-4">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-[#D4A843] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]/50 group-hover:bg-[#D4A843] transition-colors" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 relative">
              تواصل معنا
              <span className="absolute bottom-[-8px] right-0 w-10 h-0.5 bg-[#D4A843]" />
            </h3>
            <div className="space-y-4 mt-4">
              {/* Phone - Mahmoud */}
              <a
                href="tel:+201029046651"
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#D4A843] transition-colors duration-300 group"
              >
                <FaPhone className="w-4 h-4 mt-0.5 text-[#D4A843] flex-shrink-0" />
                <div>
                  <span dir="ltr" className="block">01029046651</span>
                  <span className="text-xs text-gray-500">محمود</span>
                </div>
              </a>

              {/* Phone - Ayman */}
              <a
                href="tel:+201035633986"
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#D4A843] transition-colors duration-300 group"
              >
                <FaPhone className="w-4 h-4 mt-0.5 text-[#D4A843] flex-shrink-0" />
                <div>
                  <span dir="ltr" className="block">01035633986</span>
                  <span className="text-xs text-gray-500">أيمن</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@dortmund-eg.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#D4A843] transition-colors duration-300"
              >
                <FaEnvelope className="w-4 h-4 text-[#D4A843] flex-shrink-0" />
                <span>info@dortmund-eg.com</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4 text-[#D4A843] flex-shrink-0" />
                <span>مصر</span>
              </div>

              {/* Tax Number */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500">
                  الرقم الضريبي:{' '}
                  <span dir="ltr" className="text-gray-400 font-medium">
                    781-865-344
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} جميع الحقوق محفوظة لشركة دورتمون
            </p>
            <p className="text-xs text-gray-600">
              تصميم وتطوير بـ ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
