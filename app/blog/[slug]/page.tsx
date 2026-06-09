import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { OG_DEFAULT_IMAGE, absoluteUrl } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { blogPostingSchema, breadcrumbSchema, toJsonLd } from "@/lib/schema";
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
        const image = absoluteUrl(OG_DEFAULT_IMAGE);
        return {
            title: post.title,
            description: post.excerpt,
            alternates: { canonical: `/blog/${post.slug}` },
            openGraph: {
                title: post.title,
                description: post.excerpt,
                url: absoluteUrl(`/blog/${post.slug}`),
                type: 'article',
                publishedTime: new Date(post.date).toISOString(),
                authors: [SITE_CONFIG.author],
                tags: post.tags,
                images: [{ url: image }],
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description: post.excerpt,
                images: [image],
            },
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
            <article className="blog-post">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(toJsonLd(
                            blogPostingSchema(post),
                            breadcrumbSchema([
                                { name: 'Home', path: '/' },
                                { name: 'Writing', path: '/blog' },
                                { name: post.title, path: `/blog/${post.slug}` },
                            ])
                        ))
                    }}
                />
                <Link href="/blog" className="blog-post-back">
                    ← Back
                </Link>
                <header className="blog-post-header">
                    <h1>{post.title}</h1>
                    <div className="blog-meta">
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
                <div className="prose prose-lg max-w-none blog-post-body">
                    <MDXRemote source={post.content} />
                </div>

                {relatedPosts.length > 0 && (
                    <div className="blog-related">
                        <h3 className="blog-related-heading">Related</h3>
                        <div className="blog-related-list">
                            {relatedPosts.map((rp) => rp && (
                                <Link key={rp.slug} href={`/blog/${rp.slug}`}>
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
