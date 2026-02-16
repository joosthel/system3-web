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

export default function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = params;
    try {
        const post = getPostBySlug(slug);

        return (
            <article className="py-12 px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'var(--max-width)' }}>
                <Link
                    href="/blog"
                    className="text-sm text-gray-500 hover:text-gray-800 mb-8 inline-block transition-colors"
                >
                    ← Back to blog
                </Link>
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                    <p className="text-gray-500">
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </header>
                <div className="prose prose-lg prose-gray max-w-none">
                    <MDXRemote source={post.content} />
                </div>
            </article>
        );
    } catch (error) {
        notFound();
    }
}
