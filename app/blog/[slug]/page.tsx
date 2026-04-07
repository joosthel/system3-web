import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = getPostSlugs();
    return posts.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const post = getPostBySlug(params.slug);
        return {
            title: post.title,
            description: post.content.substring(0, 160).replace(/\s+/g, ' ').trim() + '...',
        };
    } catch {
        return {};
    }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = params;
    try {
        const post = getPostBySlug(slug);

        const relatedPosts = post.relatedPosts
            ? post.relatedPosts.map((relSlug) => {
                try { return getPostBySlug(relSlug); } catch { return null; }
            }).filter(Boolean)
            : [];

        return (
            <article style={{ paddingTop: '120px', paddingBottom: '4rem', maxWidth: '1200px', margin: '0 auto', padding: '120px 2.5rem 4rem' }}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "datePublished": new Date(post.date).toISOString(),
                            "author": [{
                                "@type": "Person",
                                "name": "Joost Helfers",
                                "url": "https://joosthelfers.com"
                            }]
                        })
                    }}
                />
                <Link
                    href="/blog"
                    style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginBottom: '2rem', display: 'inline-block' }}
                >
                    ← Back
                </Link>
                <header style={{ marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '0.75rem' }}>{post.title}</h1>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontFamily: "'Doto'",
                        fontSize: '0.75rem',
                        color: 'var(--text-tertiary)',
                        letterSpacing: '0.02em',
                    }}>
                        <time>
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                        <span>·</span>
                        <span>{post.readTime} min read</span>
                        {post.tags.length > 0 && (
                            <>
                                <span>·</span>
                                <span>{post.tags.join(", ")}</span>
                            </>
                        )}
                    </div>
                </header>
                <div className="prose prose-lg max-w-none" style={{ maxWidth: '680px' }}>
                    <MDXRemote source={post.content} />
                </div>

                {relatedPosts.length > 0 && (
                    <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', maxWidth: '680px' }}>
                        <h3 style={{
                            fontFamily: "'Doto'",
                            fontSize: '0.6875rem',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: 'var(--text-tertiary)',
                            marginBottom: '1rem',
                        }}>Related</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {relatedPosts.map((rp) => rp && (
                                <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{
                                    fontSize: '0.9375rem',
                                    fontFamily: "'Doto'",
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                }}>
                                    {rp.title} →
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        );
    } catch (error) {
        notFound();
    }
}
