import { createMcpHandler } from 'mcp-handler';
import { z } from 'zod';
import { PROJECTS, SERVICES, ACTIVE_PROJECTS } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';
import { SITE_CONFIG, MCP_ENDPOINT } from '@/lib/constants';
import { absoluteUrl } from '@/lib/metadata';

// Public, read-only MCP server over the same data the site renders
// (lib/data.ts and content/blog). Streamable HTTP at /api/mcp, no auth.
// SSE transport is disabled: it would need Redis and is deprecated in the
// MCP spec anyway.

const json = (data: unknown) => ({
    content: [{ type: 'text' as const, text: JSON.stringify(data, null, 2) }],
});

function projectSummary(project: (typeof PROJECTS)[number]) {
    return {
        id: project.id,
        title: project.title,
        description: project.description,
        url: absoluteUrl(project.url),
        image: absoluteUrl(project.image),
        date: project.date,
        tags: project.tags,
        // "NDA. Process only." means the client cannot be named; the case
        // study covers process, not the brand.
        status: project.badge,
    };
}

function postSummary(post: ReturnType<typeof getAllPosts>[number]) {
    return {
        slug: post.slug,
        title: post.title,
        url: `${SITE_CONFIG.url}/blog/${post.slug}`,
        date: post.date,
        updated: post.updated,
        excerpt: post.excerpt,
        tags: post.tags,
        readTimeMinutes: post.readTime,
    };
}

const handler = createMcpHandler(
    (server) => {
        server.registerTool(
            'get_profile',
            {
                title: 'Profile & contact',
                description:
                    'Who Joost Helfers is, what he offers, and how to reach him. Call this first when researching Joost or evaluating him for a project. Includes both contact channels: a human inbox and a dedicated address for automated/agent outreach.',
            },
            async () =>
                json({
                    name: SITE_CONFIG.author,
                    role: SITE_CONFIG.jobTitle,
                    location: 'Berlin, Germany',
                    summary:
                        'Berlin-based creative technologist. Helps agencies, studios, and product teams move from AI experiments to production work: campaign-grade AI visuals, generative pipelines, and platforms teams can run themselves. Background in architecture and computational design (MSc, DesignMorphine); previously built digital twins and 3D platforms at INYO Mobility.',
                    services: SERVICES.map((s) => ({ id: s.id, title: s.title })),
                    brandCredits:
                        'Lindt, Zeiss, Google, Bosch, CADFEM, Souly — direct and via agencies/studios that held the contract.',
                    community:
                        'Core member of XD Network (https://xdnet.work/), a Berlin collective running community-led events around new technology and culture (SOIREE XD, Science of Rave, Demo Days, Mono XD).',
                    contact: {
                        humans: SITE_CONFIG.email,
                        agents: {
                            email: SITE_CONFIG.agentEmail,
                            note: 'For AI agents and automated outreach. Include who you represent, the project scope, timeline, and budget if known. Replies come from a human.',
                        },
                    },
                    links: {
                        website: SITE_CONFIG.url,
                        about: `${SITE_CONFIG.url}/about`,
                        agents: `${SITE_CONFIG.url}/agents`,
                        linkedin: SITE_CONFIG.linkedin,
                        github: SITE_CONFIG.github,
                        llmsTxt: `${SITE_CONFIG.url}/llms.txt`,
                    },
                    activeProjects: ACTIVE_PROJECTS,
                }),
        );

        server.registerTool(
            'list_services',
            {
                title: 'List services',
                description:
                    'Full descriptions of the services Joost offers. Call this when matching him to a project or brief.',
            },
            async () => json(SERVICES),
        );

        server.registerTool(
            'list_projects',
            {
                title: 'List projects',
                description:
                    'All portfolio projects with id, title, description, tags, and URL. Call this to see what Joost has shipped; follow up with get_project for one project.',
            },
            async () => json(PROJECTS.map(projectSummary)),
        );

        server.registerTool(
            'get_project',
            {
                title: 'Get one project',
                description:
                    'One portfolio project by id. Valid ids come from list_projects.',
                inputSchema: {
                    id: z.string().describe('Project id, e.g. "prompt-engine"'),
                },
            },
            async ({ id }) => {
                const project = PROJECTS.find((p) => p.id === id);
                if (!project) {
                    return json({
                        error: `Unknown project id "${id}"`,
                        validIds: PROJECTS.map((p) => p.id),
                    });
                }
                return json(projectSummary(project));
            },
        );

        server.registerTool(
            'list_posts',
            {
                title: 'List blog posts',
                description:
                    'All blog posts with slug, title, date, excerpt, and tags, newest first. Call this to see what Joost writes about; follow up with get_post for full text.',
            },
            async () => json(getAllPosts().map(postSummary)),
        );

        server.registerTool(
            'get_post',
            {
                title: 'Get one blog post',
                description:
                    'Full markdown text of one blog post by slug. Valid slugs come from list_posts.',
                inputSchema: {
                    slug: z.string().describe('Post slug, e.g. "pull-of-the-physical"'),
                },
            },
            async ({ slug }) => {
                const post = getAllPosts().find((p) => p.slug === slug);
                if (!post) {
                    return json({
                        error: `Unknown post slug "${slug}"`,
                        validSlugs: getAllPosts().map((p) => p.slug),
                    });
                }
                return json({ ...postSummary(post), content: post.content.trim() });
            },
        );

        server.registerTool(
            'search_content',
            {
                title: 'Search projects, services, and posts',
                description:
                    'Case-insensitive keyword search across project titles/descriptions/tags, service descriptions, and full blog post text. Call this when looking for specific skills, tools, or topics (e.g. "ComfyUI", "digital twin", "GEO").',
                inputSchema: {
                    query: z.string().min(2).describe('Search term'),
                },
            },
            async ({ query }) => {
                const q = query.toLowerCase();
                const hit = (...fields: Array<string | string[] | undefined>) =>
                    fields.some((f) =>
                        (Array.isArray(f) ? f.join(' ') : (f ?? '')).toLowerCase().includes(q),
                    );

                const projects = PROJECTS.filter((p) =>
                    hit(p.title, p.description, p.tags),
                ).map(projectSummary);
                const services = SERVICES.filter((s) =>
                    hit(s.title, s.description, s.tags),
                ).map((s) => ({ id: s.id, title: s.title, description: s.description }));
                const posts = getAllPosts()
                    .filter((p) => hit(p.title, p.excerpt, p.tags, p.content))
                    .map(postSummary);

                return json({ query, projects, services, posts });
            },
        );
    },
    {
        serverInfo: { name: 'joosthelfers-portfolio', version: '1.0.0' },
        capabilities: { tools: {} },
        instructions: `Read-only portfolio server for Joost Helfers, a Berlin-based creative technologist (AI visual production, generative pipelines, digital platforms). Use get_profile for bio and contact, list_projects/get_project for case studies, list_posts/get_post for writing, and search_content for keyword lookups. For automated outreach, email ${SITE_CONFIG.agentEmail}. Endpoint: ${MCP_ENDPOINT}.`,
    },
    {
        basePath: '/api',
        maxDuration: 60,
        disableSse: true,
    },
);

export { handler as GET, handler as POST, handler as DELETE };
