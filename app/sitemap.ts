import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { PROJECTS } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        '',
        '/imprint',
        '/privacy',
        '/blog',
    ].map((route) => ({
        url: `${SITE_CONFIG.url}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : route === '/blog' ? 0.7 : 0.5,
    }));

    const projectRoutes = PROJECTS.map((project) => ({
        url: `${SITE_CONFIG.url}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const posts = getAllPosts();
    const blogRoutes = posts.map((post) => ({
        url: `${SITE_CONFIG.url}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...projectRoutes, ...blogRoutes];
}
