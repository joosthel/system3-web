import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

// AI crawlers explicitly allowed for Generative Engine Optimization (GEO).
const AI_CRAWLERS = [
    'Googlebot',
    'Google-Extended',
    'Bingbot',
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-User',
    'Claude-SearchBot',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Applebot',
    'Applebot-Extended',
    'CCBot',
    'meta-externalagent',
    'FacebookBot',
    'Amazonbot',
    'DuckAssistBot',
];

export default async function robots(): Promise<MetadataRoute.Robots> {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            {
                userAgent: AI_CRAWLERS,
                allow: '/',
            }
        ],
        sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    };
}
