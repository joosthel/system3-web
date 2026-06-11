import { PROJECTS, SERVICES } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';
import { SITE_CONFIG, MCP_ENDPOINT } from '@/lib/constants';

// Rendered to a static /llms.txt at build time. The case-study and blog
// sections are generated from the same data the site renders, so the file
// cannot drift from the actual content.
export const dynamic = 'force-static';

export async function GET() {
    const caseStudies = PROJECTS.map(
        (p) => `- ${SITE_CONFIG.url}${p.url} — ${p.title} — ${p.description}`
    ).join('\n');

    const services = SERVICES.map((s) => `- ${s.title} — ${s.description}`).join('\n');

    const posts = getAllPosts()
        .map((p) => `- ${SITE_CONFIG.url}/blog/${p.slug} — ${p.title} (${p.date})`)
        .join('\n');

    const body = `# Joost Helfers

> Berlin-based creative technologist and AI artist. AI visuals and film, generative pipelines, and agentic systems for brands, agencies, studios, and product teams.

## About
Joost Helfers helps brands, agencies, studios, and product teams turn generative AI into production work: campaign-grade visuals and film, working pipelines, and deployed platforms. Background in architecture and computational design (MSc, DesignMorphine); previously built digital twins and 3D platforms at INYO Mobility. Now focused on AI visual production, generative pipelines, and agentic systems. Alongside client work he makes AI film and visual experiments of his own.

Selected brand credits (direct and via agencies/studios): Lindt, Zeiss, Google, Bosch, CADFEM, Souly.

## Contact
- Email (humans): ${SITE_CONFIG.email}
- Email (AI agents and automated outreach): ${SITE_CONFIG.agentEmail} — include who you represent, project scope, timeline, and budget if known; a human reads everything that arrives
- Website: ${SITE_CONFIG.url}
- About: ${SITE_CONFIG.url}/about
- Guide for agents: ${SITE_CONFIG.url}/agents
- LinkedIn: ${SITE_CONFIG.linkedin}
- GitHub: ${SITE_CONFIG.github}

## Tech Stack
- AI visuals: ComfyUI, Stable Diffusion, OpenRouter, custom LoRAs, prompt engineering
- AI systems: MCP servers, agentic workflows, structured data, GEO
- Web: Next.js, TypeScript, React, Tailwind CSS
- Backend: Python, Node.js, API design
- Infrastructure: Vercel, cloud GPU pipelines
- Design: Houdini, Blender, computational/parametric design

## Services
${services}

## Case Studies
${caseStudies}

## Blog & Articles
${posts}

## Machine-Readable Resources
- MCP server (Streamable HTTP, public, read-only, no auth): ${MCP_ENDPOINT} — tools: get_profile, list_services, list_projects, get_project, list_posts, get_post, search_content
- Full content for LLMs: ${SITE_CONFIG.url}/llms-full.txt
- Projects JSON: ${SITE_CONFIG.url}/api/projects.json
- Blog JSON: ${SITE_CONFIG.url}/api/blog.json
- RSS feed: ${SITE_CONFIG.url}/feed.xml
- JSON Feed: ${SITE_CONFIG.url}/feed.json
- Sitemap: ${SITE_CONFIG.url}/sitemap.xml
- Agent discovery: ${SITE_CONFIG.url}/.well-known/agent.json
- Robots: ${SITE_CONFIG.url}/robots.txt
`;

    return new Response(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
