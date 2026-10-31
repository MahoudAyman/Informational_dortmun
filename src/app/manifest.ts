import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'شركة دورتمون للمقاولات العامة والتوريدات',
    short_name: 'دورتمون',
    description:
      'توريد عمالة مدربة، تشوين رملة وأسمنت وسن لجميع الأدوار، أعمال تكسير حوائط وحمامات، ونظافة مواقع في مصر (سجل ضريبي: 781-865-344)',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0a1628',
    theme_color: '#0a1628',
    lang: 'ar',
    dir: 'rtl',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-maskable-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
