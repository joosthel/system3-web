import { getAllPosts } from "@/lib/blog";
import BlogFilter from "./BlogFilter";

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '4rem', maxWidth: '1200px', margin: '0 auto', padding: '120px 2.5rem 4rem' }}>
            <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '2rem' }}>Writing</h1>
            <BlogFilter posts={posts.map(p => ({
                slug: p.slug,
                title: p.title,
                date: p.date,
                excerpt: p.excerpt,
                tags: p.tags,
                readTime: p.readTime,
            }))} />
        </div>
    );
}
