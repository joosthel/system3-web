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

const TAG_OPTIONS = ["Technical", "Strategy", "Process", "Opinion"];

export default function BlogFilter({ posts }: { posts: BlogPost[] }) {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const filtered = activeTag
        ? posts.filter((p) => p.tags.includes(activeTag))
        : posts;

    return (
        <>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                <button
                    onClick={() => setActiveTag(null)}
                    className={`tag-filter ${!activeTag ? "tag-filter-active" : ""}`}
                >
                    All
                </button>
                {TAG_OPTIONS.map((tag) => (
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
                    <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                        display: 'block',
                        borderBottom: '1px solid var(--border)',
                        padding: '1.5rem 0',
                        textDecoration: 'none',
                        transition: 'opacity 0.15s ease',
                    }}>
                        <h2 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            fontFamily: "'Doto'",
                            marginBottom: '0.375rem',
                            color: 'var(--text-primary)',
                        }}>
                            {post.title}
                        </h2>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            fontSize: '0.75rem',
                            fontFamily: "'Doto'",
                            color: 'var(--text-tertiary)',
                            letterSpacing: '0.02em',
                            marginBottom: '0.5rem',
                        }}>
                            <time>
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </time>
                            <span>·</span>
                            <span>{post.readTime} min</span>
                            {post.tags.length > 0 && (
                                <>
                                    <span>·</span>
                                    <span>{post.tags.join(", ")}</span>
                                </>
                            )}
                        </div>
                        <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            marginBottom: 0,
                        }}>{post.excerpt}</p>
                    </Link>
                ))}
                {filtered.length === 0 && (
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>No posts found for this tag.</p>
                )}
            </div>
        </>
    );
}
