"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    readTime: number;
}

export default function BlogFilter({ posts, tags }: { posts: BlogPost[]; tags: string[] }) {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const filtered = activeTag
        ? posts.filter((p) => p.tags.includes(activeTag))
        : posts;

    return (
        <>
            <div className="blog-filter-row">
                <button
                    onClick={() => setActiveTag(null)}
                    className={`tag-filter ${!activeTag ? "tag-filter-active" : ""}`}
                >
                    All
                </button>
                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                        className={`tag-filter ${activeTag === tag ? "tag-filter-active" : ""}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            <div>
                {filtered.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-list-item">
                        <div className="blog-list-line">
                            <h2>{post.title}</h2>
                            <div className="blog-meta">
                                <time>
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        timeZone: "UTC",
                                    })}
                                </time>
                                {post.tags.length > 0 && (
                                    <>
                                        <span>·</span>
                                        <span>{post.tags.join(", ")}</span>
                                    </>
                                )}
                            </div>
                        </div>
                        <p>{post.excerpt}</p>
                    </Link>
                ))}
                {filtered.length === 0 && (
                    <p className="blog-empty">No posts found for this tag.</p>
                )}
            </div>
        </>
    );
}
