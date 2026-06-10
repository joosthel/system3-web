import { MetadataRoute } from 'next';
import { SITE_CONFIG, SITE_LAST_UPDATED } from '@/lib/constants';
import { PROJECTS } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = getAllPosts();
    const newestPostDate = posts.length ? new Date(posts[0].date) : new Date(SITE_LAST_UPDATED);

    const routes: MetadataRoute.Sitemap = [
        {
            url: SITE_CONFIG.url,
            lastModified: new Date(SITE_LAST_UPDATED),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${SITE_CONFIG.url}/about`,
            lastModified: new Date(SITE_LAST_UPDATED),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_CONFIG.url}/agents`,
            lastModified: new Date(SITE_LAST_UPDATED),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_CONFIG.url}/blog`,
            lastModified: newestPostDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_CONFIG.url}/imprint`,
            lastModified: new Date(SITE_LAST_UPDATED),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_CONFIG.url}/privacy`,
            lastModified: new Date(SITE_LAST_UPDATED),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // lastmod reflects page modification, not when the work was done: project
    // pages change whenever the site-wide templates/copy do.
    const siteUpdated = new Date(SITE_LAST_UPDATED);
    const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => {
        const projectDate = project.date ? new Date(project.date) : siteUpdated;
        return {
            url: `${SITE_CONFIG.url}/projects/${project.id}`,
            lastModified: projectDate > siteUpdated ? projectDate : siteUpdated,
            changeFrequency: 'monthly',
            priority: 0.8,
        };
    });

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${SITE_CONFIG.url}/blog/${post.slug}`,
        lastModified: new Date(post.updated ?? post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...routes, ...projectRoutes, ...blogRoutes];
}
