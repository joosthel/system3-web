import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default async function robots(): Promise<MetadataRoute.Robots> {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            // Explicitly allow AI bots for Generative Engine Optimization (GEO)
            {
                userAgent: ['Googlebot', 'GPTBot', 'Applebot', 'CCBot'],
                allow: '/',
            }
        ],
        sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    };
}
