import { PROJECTS, SERVICES } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';
import { SITE_CONFIG, MCP_ENDPOINT } from '@/lib/constants';

// Extended companion to /llms.txt: full service descriptions, every project,
// and every blog post in full text. Generated at build time from site data.
export const dynamic = 'force-static';

export async function GET() {
    const services = SERVICES.map(
        (s) => `### ${s.title}\n${s.description}\nKeywords: ${(s.tags ?? []).join(', ')}`
    ).join('\n\n');

    const projects = PROJECTS.map((p) => {
        const lines = [
            `### ${p.title}`,
            `URL: ${SITE_CONFIG.url}${p.url}`,
            ...(p.date ? [`Date: ${p.date}`] : []),
            ...(p.badge ? [`Status: ${p.badge}`] : []),
            ...(p.tags ? [`Keywords: ${p.tags.join(', ')}`] : []),
            '',
            p.description,
        ];
        return lines.join('\n');
    }).join('\n\n');

    const posts = getAllPosts()
        .map((post) => {
            const header = [
                `### ${post.title}`,
                `URL: ${SITE_CONFIG.url}/blog/${post.slug}`,
                `Published: ${post.date}`,
                ...(post.updated ? [`Updated: ${post.updated}`] : []),
                `Keywords: ${post.tags.join(', ')}`,
            ].join('\n');
            // Demote post-internal headings (## -> ####) so the markdown
            // outline stays monotonic under the ### post title.
            const body = post.content.trim().replace(/^(#{2,4})/gm, '##$1');
            return `${header}\n\n${body}`;
        })
        .join('\n\n---\n\n');

    const body = `# Joost Helfers — Full Content for LLMs

> Berlin-based creative technologist and AI artist. AI visuals and film, generative pipelines, and agentic systems. This file contains the full text of the portfolio and blog at ${SITE_CONFIG.url}. A shorter overview lives at ${SITE_CONFIG.url}/llms.txt.

## About
Joost Helfers helps brands, agencies, studios, and product teams turn generative AI into production work: campaign-grade visuals and film, working pipelines, and deployed platforms. Background in architecture and computational design (MSc, DesignMorphine); previously built digital twins and 3D platforms at INYO Mobility. Alongside client work he makes AI film and visual experiments of his own.

Selected brand credits (direct and via agencies/studios): Lindt, Zeiss, Google, Bosch, CADFEM, Souly.

Contact: ${SITE_CONFIG.email} (humans) · ${SITE_CONFIG.agentEmail} (AI agents and automated outreach) · ${SITE_CONFIG.url}/about

This portfolio also runs a public, read-only MCP server (Streamable HTTP, no auth) at ${MCP_ENDPOINT}. Connection details and all machine-readable endpoints: ${SITE_CONFIG.url}/agents

## Services

${services}

## Projects

${projects}

## Blog Posts (full text)

${posts}
`;

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
