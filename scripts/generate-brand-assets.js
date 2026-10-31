const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(process.cwd(), 'public');

// 1. Standalone Big & Clear Logo Shield SVG (512x512)
function getShieldSvg({ size = 512, padding = 30, bg = '#0A1628', isMaskable = false } = {}) {
  // For maskable, safe zone is inner circle radius 40% (outer 20% can be cropped)
  // so padding is larger for maskable (e.g. 70px)
  const pad = isMaskable ? Math.round(size * 0.16) : Math.round(size * 0.06);
  const drawWidth = size - pad * 2;
  const scale = drawWidth / 100;
  const offset = pad;

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${bg ? `<rect width="${size}" height="${size}" fill="${bg}"/>` : ''}
    <defs>
      <linearGradient id="goldGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF2A3" />
        <stop offset="35%" stop-color="#E5B94E" />
        <stop offset="70%" stop-color="#D4A843" />
        <stop offset="100%" stop-color="#9E7820" />
      </linearGradient>
      <linearGradient id="shieldGrad_${size}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#182E4B" />
        <stop offset="100%" stop-color="#08121E" />
      </linearGradient>
      <filter id="glow_${size}" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#D4A843" flood-opacity="0.45" />
      </filter>
    </defs>
    <g transform="translate(${offset}, ${offset}) scale(${scale})">
      <!-- Outer Hexagonal Shield -->
      <polygon points="50,4 94,26 94,74 50,96 6,74 6,26" fill="url(#shieldGrad_${size})" stroke="url(#goldGrad_${size})" stroke-width="4.5" stroke-linejoin="round" filter="url(#glow_${size})" />
      
      <!-- Inner Dashed Construction Contour -->
      <polygon points="50,13 86,30 86,70 50,87 14,70 14,30" fill="none" stroke="#D4A843" stroke-width="1.4" stroke-opacity="0.6" stroke-dasharray="4 2.5" />
      
      <!-- Construction Crane / Letter D Monogram -->
      <path d="M30 28 H56 C69 28 76 37 76 50 C76 63 69 72 56 72 H30 V28 Z" fill="none" stroke="url(#goldGrad_${size})" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M42 41 H53 C58 41 62 44.5 62 50 C62 55.5 58 59 53 59 H42 V41 Z" fill="url(#goldGrad_${size})" />
      
      <!-- Heavy Crane Lift Hook Element -->
      <path d="M50 15 L50 28" stroke="url(#goldGrad_${size})" stroke-width="4" stroke-linecap="round" />
      <circle cx="50" cy="15" r="3.5" fill="#FFF2A3" />
    </g>
  </svg>`;
}

// 2. High Impact Social Share OG Image (1200x630)
function getOgImageSvg() {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Deep Navy Background with Subtle Radial Glow -->
    <rect width="1200" height="630" fill="#07111E"/>
    <defs>
      <linearGradient id="ogGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF2A3"/>
        <stop offset="40%" stop-color="#E5B94E"/>
        <stop offset="80%" stop-color="#D4A843"/>
        <stop offset="100%" stop-color="#9E7820"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14263E"/>
        <stop offset="100%" stop-color="#0A1628"/>
      </linearGradient>
      <radialGradient id="goldAura" cx="80%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#D4A843" stop-opacity="0.25"/>
        <stop offset="60%" stop-color="#D4A843" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#07111E" stop-opacity="0"/>
      </radialGradient>
      <filter id="bigGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="6" stdDeviation="16" flood-color="#D4A843" flood-opacity="0.5"/>
      </filter>
    </defs>

    <rect width="1200" height="630" fill="url(#goldAura)"/>

    <!-- Decorative Framing Borders -->
    <rect x="30" y="30" width="1140" height="570" rx="28" fill="none" stroke="#D4A843" stroke-width="2" stroke-opacity="0.35"/>
    <rect x="42" y="42" width="1116" height="546" rx="20" fill="none" stroke="#D4A843" stroke-width="1" stroke-opacity="0.15" stroke-dasharray="10 5"/>

    <!-- Left Side: Massive, Prestigious Shield Logo Mark (Occupies 340x340) -->
    <g transform="translate(85, 145) scale(3.5)" filter="url(#bigGlow)">
      <polygon points="50,4 94,26 94,74 50,96 6,74 6,26" fill="#132742" stroke="url(#ogGold)" stroke-width="4.5" stroke-linejoin="round" />
      <polygon points="50,13 86,30 86,70 50,87 14,70 14,30" fill="none" stroke="#D4A843" stroke-width="1.2" stroke-opacity="0.6" stroke-dasharray="4 2" />
      <path d="M30 28 H56 C69 28 76 37 76 50 C76 63 69 72 56 72 H30 V28 Z" fill="none" stroke="url(#ogGold)" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M42 41 H53 C58 41 62 44.5 62 50 C62 55.5 58 59 53 59 H42 V41 Z" fill="url(#ogGold)" />
      <path d="M50 15 L50 28" stroke="url(#ogGold)" stroke-width="4" stroke-linecap="round" />
      <circle cx="50" cy="15" r="3.5" fill="#FFF2A3" />
    </g>

    <!-- Right Side: Clean Structured Content Cards for 100% Social Render -->
    <g transform="translate(480, 85)">
      <!-- Official Certification Pill -->
      <rect x="360" y="0" width="310" height="42" rx="21" fill="#D4A843" fill-opacity="0.18" stroke="#D4A843" stroke-width="1.8"/>
      <circle cx="645" cy="21" r="7" fill="#48BB78"/>
      <text x="500" y="27" text-anchor="middle" fill="#FFF2A3" font-family="'Tajawal', 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif" font-weight="800" font-size="17">
        سجل ضريبي معتمد: 781-865-344
      </text>

      <!-- Main Company Name -->
      <text x="670" y="105" text-anchor="end" fill="#FFFFFF" font-family="'Tajawal', 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif" font-weight="900" font-size="52">
        شركة دورتمـ<tspan fill="#D4A843">ـون</tspan>
      </text>
      <text x="670" y="150" text-anchor="end" fill="#D4A843" font-family="'Tajawal', 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif" font-weight="800" font-size="24" letter-spacing="1">
        للمقاولات العامة والتوريدات الميدانية
      </text>

      <!-- Core Services List Pill Box -->
      <rect x="0" y="180" width="670" height="96" rx="20" fill="url(#cardGrad)" stroke="#D4A843" stroke-width="1.5" stroke-opacity="0.4"/>
      <text x="645" y="222" text-anchor="end" fill="#F8FAFC" font-family="'Tajawal', 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif" font-weight="700" font-size="20">
        ✦ توريد عمالة ماهرة وصنايعية • تشوين رملة وأسمنت وسن
      </text>
      <text x="645" y="254" text-anchor="end" fill="#F8FAFC" font-family="'Tajawal', 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif" font-weight="700" font-size="20">
        ✦ تكسير حوائط وحمامات وبيوت • نظافة مواقع ورفع أنقاض
      </text>

      <!-- Nationwide Coverage Line -->
      <text x="670" y="315" text-anchor="end" fill="#CBD5E1" font-family="'Tajawal', 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif" font-weight="600" font-size="18">
        نخدم جميع المحافظات: القاهرة الكبرى • الجيزة • العاصمة الإدارية • الإسكندرية • الدلتا والصعيد
      </text>

      <!-- Contact Numbers Cards -->
      <g transform="translate(0, 345)">
        <!-- Mahmoud Ayman -->
        <rect x="350" y="0" width="320" height="74" rx="18" fill="#14263E" stroke="#D4A843" stroke-width="2"/>
        <text x="510" y="32" text-anchor="middle" fill="#CBD5E1" font-family="'Tajawal', 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif" font-weight="700" font-size="15">إدارة المشاريع — محمود أيمن</text>
        <text x="510" y="58" text-anchor="middle" fill="#FFFFFF" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-weight="900" font-size="21" letter-spacing="1.5">01029046651</text>

        <!-- Mahmoud Hamada -->
        <rect x="0" y="0" width="330" height="74" rx="18" fill="#14263E" stroke="#D4A843" stroke-width="2"/>
        <text x="165" y="32" text-anchor="middle" fill="#CBD5E1" font-family="'Tajawal', 'Cairo', 'Segoe UI', Tahoma, Arial, sans-serif" font-weight="700" font-size="15">إدارة العمليات — محمود حمادة</text>
        <text x="165" y="58" text-anchor="middle" fill="#FFFFFF" font-family="'Segoe UI', Tahoma, Arial, sans-serif" font-weight="900" font-size="21" letter-spacing="1.5">01035633986</text>
      </g>
    </g>
  </svg>`;
}

async function generateBrandAssets() {
  console.log('Generating high-resolution Brand & PWA assets...');

  // 1. Standalone logo.svg (vector)
  const logoSvg = getShieldSvg({ size: 512, isMaskable: false });
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), logoSvg);
  console.log('Saved logo.svg');

  // 2. High-res logo.png (512x512) for Google Schema & search
  await sharp(Buffer.from(logoSvg))
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Saved logo.png (512x512)');

  // 3. icon-192.png & icon-512.png (any)
  const icon512Svg = getShieldSvg({ size: 512, isMaskable: false });
  await sharp(Buffer.from(icon512Svg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('Saved icon-512.png');

  await sharp(Buffer.from(icon512Svg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('Saved icon-192.png');

  // 4. Maskable icons for Android PWA (Safe zone padding so it NEVER gets shrunken or clipped)
  const maskableSvg = getShieldSvg({ size: 512, isMaskable: true });
  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-maskable-512.png'));
  console.log('Saved icon-maskable-512.png');

  await sharp(Buffer.from(maskableSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-maskable-192.png'));
  console.log('Saved icon-maskable-192.png');

  // 5. Apple Touch Icon for iOS (180x180 solid background)
  const appleSvg = getShieldSvg({ size: 180, isMaskable: false });
  await sharp(Buffer.from(appleSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Saved apple-touch-icon.png (180x180)');

  // 6. Favicon (48x48 PNG)
  const favSvg = getShieldSvg({ size: 48, isMaskable: false });
  await sharp(Buffer.from(favSvg))
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Saved favicon.ico (48x48)');

  // 7. OG Image (1200x630) for WhatsApp, Facebook, Twitter, LinkedIn
  const ogSvg = getOgImageSvg();
  fs.writeFileSync(path.join(publicDir, 'og-image.svg'), ogSvg);
  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('Saved og-image.png (1200x630)');

  console.log('All brand assets successfully generated!');
}

generateBrandAssets().catch(err => console.error(err));

