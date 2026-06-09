import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogFilter from "./BlogFilter";

export const metadata: Metadata = {
    title: 'Writing',
    description: 'Notes on AI visual production, agentic workflows, and how brands show up for AI agents. Written by Joost Helfers.',
    alternates: { canonical: '/blog' },
    openGraph: {
        title: 'Writing | Joost Helfers',
        description: 'Notes on AI visual production, agentic workflows, and how brands show up for AI agents.',
        url: '/blog',
        type: 'website',
    },
};

export default function BlogIndex() {
    const posts = getAllPosts();
    const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

    return (
        <div className="blog-page">
            <h1>Writing</h1>
            <BlogFilter
                tags={tags}
                posts={posts.map(p => ({
                    slug: p.slug,
                    title: p.title,
                    date: p.date,
                    excerpt: p.excerpt,
                    tags: p.tags,
                    readTime: p.readTime,
                }))}
            />
        </div>
    );
}
