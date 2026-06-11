import { getMarkdownParams, renderMarkdown } from '@/lib/markdown';

// Prerendered markdown renditions of the HTML pages. Reached through
// proxy.ts content negotiation (Accept: text/markdown); direct hits are
// noindexed because the HTML page is canonical.
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
    return getMarkdownParams().map((segments) => ({
        slug: segments.length ? segments : undefined,
    }));
}

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ slug?: string[] }> },
) {
    const { slug } = await params;
    const body = renderMarkdown(slug ?? []);

    if (body === null) {
        return new Response('Not found', { status: 404 });
    }

    return new Response(body, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            Vary: 'Accept',
            'X-Robots-Tag': 'noindex',
            // Rough estimate (~4 chars per token) per the Markdown for
            // Agents convention.
            'X-Markdown-Tokens': String(Math.ceil(body.length / 4)),
        },
    });
}
