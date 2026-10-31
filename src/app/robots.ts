import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/logo.svg', '/logo.png', '/og-image.png', '/og-image.svg'],
      },
    ],
    sitemap: 'https://dortmun.site/sitemap.xml',
    host: 'https://dortmun.site',
  };
}
