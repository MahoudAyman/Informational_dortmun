'use client';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  width?: number;
  height?: number;
  invertText?: boolean;
}

export default function Logo({
  className = '',
  variant = 'full',
  width,
  height,
  invertText = false,
}: LogoProps) {
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <svg
          width={width || 48}
          height={height || 48}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="50%" stopColor="#D4A843" />
              <stop offset="100%" stopColor="#9E7820" />
            </linearGradient>
            <linearGradient id="shieldDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#132742" />
              <stop offset="100%" stopColor="#08111D" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D4A843" floodOpacity="0.3" />
            </filter>
          </defs>
          {/* Hexagonal Shield */}
          <polygon
            points="50,5 92,26 92,74 50,95 8,74 8,26"
            fill="url(#shieldDark)"
            stroke="url(#goldGradient)"
            strokeWidth="3.5"
            strokeLinejoin="round"
            filter="url(#glow)"
          />
          {/* Inner Geometric Shield Outline */}
          <polygon
            points="50,13 84,30 84,70 50,87 16,70 16,30"
            fill="none"
            stroke="#D4A843"
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="4 2"
          />
          {/* Stylized Modern Construction Crane / Letter D Emblem */}
          <path
            d="M32 30 H56 C68 30 75 38 75 50 C75 62 68 70 56 70 H32 V30 Z"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44 42 H54 C59 42 63 45 63 50 C63 55 59 58 54 58 H44 V42 Z"
            fill="url(#goldGradient)"
            opacity="0.9"
          />
          {/* Construction hook / beam element */}
          <path
            d="M50 18 L50 30"
            stroke="url(#goldGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="50" cy="18" r="2.5" fill="#D4A843" />
        </svg>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className={`text-2xl font-black tracking-tight font-[Tajawal] ${invertText ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
          دورتمـ<span className="text-[#D4A843]">ـون</span>
        </span>
        <span className="text-[10px] font-medium tracking-widest text-[#D4A843] uppercase -mt-1">
          للمقاولات والتوريدات
        </span>
      </div>
    );
  }

  // Full Variant
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="flex-shrink-0">
        <svg
          width={width || 52}
          height={height || 52}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:rotate-3"
        >
          <defs>
            <linearGradient id="fullGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="40%" stopColor="#E5B94E" />
              <stop offset="70%" stopColor="#D4A843" />
              <stop offset="100%" stopColor="#9E7820" />
            </linearGradient>
            <linearGradient id="fullDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15273f" />
              <stop offset="100%" stopColor="#08121f" />
            </linearGradient>
            <filter id="fullGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D4A843" floodOpacity="0.4" />
            </filter>
          </defs>
          <polygon
            points="50,6 92,26 92,74 50,94 8,74 8,26"
            fill="url(#fullDark)"
            stroke="url(#fullGold)"
            strokeWidth="3.5"
            strokeLinejoin="round"
            filter="url(#fullGlow)"
          />
          <polygon
            points="50,14 84,31 84,69 50,86 16,69 16,31"
            fill="none"
            stroke="#D4A843"
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="4 2"
          />
          {/* Construction Shield Letter D */}
          <path
            d="M32 30 H55 C67 30 74 38 74 50 C74 62 67 70 55 70 H32 V30 Z"
            fill="none"
            stroke="url(#fullGold)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44 42 H53 C58 42 62 45 62 50 C62 55 58 58 53 58 H44 V42 Z"
            fill="url(#fullGold)"
            opacity="0.95"
          />
          {/* Crane Hook */}
          <path
            d="M50 18 L50 30"
            stroke="url(#fullGold)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="50" cy="18" r="3" fill="#FDE68A" />
        </svg>
      </div>

      <div className="flex flex-col text-right">
        <span className={`text-2xl sm:text-[26px] font-black tracking-tight font-[Tajawal] leading-none ${invertText ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
          دورتمـ<span className="text-[#9E7820] dark:text-[#D4A843]">ـون</span>
        </span>
        <span className="text-[11px] sm:text-xs font-bold text-[#8F6B17] dark:text-[#D4A843] tracking-normal mt-1 opacity-95">
          للمقاولات والتوريدات العامة
        </span>
      </div>
    </div>
  );
}
