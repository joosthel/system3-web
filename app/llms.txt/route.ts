import { PROJECTS, SERVICES } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/constants';

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

> Berlin-based creative technologist specializing in AI visual production and technical AI solutions.

## About
Joost Helfers helps agencies, studios, and product teams turn complex AI ideas into campaign-grade visuals, working pipelines, and deployed platforms. Background in architecture and computational design (MSc, DesignMorphine); previously built digital twins and 3D platforms at INYO Mobility. Now focused on AI visual production and technical AI solutions: generative pipelines, prompt engineering, and full-stack AI tooling.

Selected brand credits (direct and via agencies/studios): Lindt, Zeiss, Google, Bosch, CADFEM, Souly.

## Community
Core member of XD Network (https://xdnet.work/), a Berlin collective running community-led events around new technology and culture, including the SOIREE XD talk series, Science of Rave, and Demo Days.

## Contact
- Email: ${SITE_CONFIG.email}
- Website: ${SITE_CONFIG.url}
- About: ${SITE_CONFIG.url}/about
- LinkedIn: ${SITE_CONFIG.linkedin}
- GitHub: ${SITE_CONFIG.github}

## Tech Stack
- Frontend: Next.js, TypeScript, React, Three.js, Tailwind CSS
- AI/ML: ComfyUI, Stable Diffusion, OpenRouter, custom LoRAs, prompt engineering
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
