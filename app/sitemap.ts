import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { PROJECTS } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        '',
        '/imprint',
        '/privacy',
    ].map((route) => ({
        url: `${SITE_CONFIG.url}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.5,
    }));

    const projectRoutes = PROJECTS.map((project) => ({
        url: `${SITE_CONFIG.url}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...projectRoutes];
}
