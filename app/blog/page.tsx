import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'var(--max-width)', margin: '0 0' }}>
            <h1 className="text-3xl font-bold mb-8">Blog</h1>
            <div className="space-y-8">
                {posts.map((post) => (
                    <div key={post.slug} className="group">
                        <Link href={`/blog/${post.slug}`} className="block">
                            <h2 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-sm text-gray-500 mb-2">
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                            <p className="text-gray-700">{post.excerpt}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
