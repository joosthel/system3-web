import { getAllPosts } from '@/lib/blog';
import { absoluteUrl } from '@/lib/metadata';

// Rendered to a static file at build time, generated from content/blog.
export const dynamic = 'force-static';

export async function GET() {
    const posts = getAllPosts().map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        ...(post.updated ? { updated: post.updated } : {}),
        excerpt: post.excerpt,
        tags: post.tags,
        read_time_minutes: post.readTime,
        url: absoluteUrl(`/blog/${post.slug}`),
    }));

    return Response.json(posts);
}
