import { SITE_CONFIG, MCP_ENDPOINT } from './constants';
import { MCP_TOOL_META, PROFILE_SUMMARY, type McpToolName } from './mcp-tool-meta';

// In-browser WebMCP tools (document.modelContext), mirroring the seven tools
// of the MCP server in app/api/[transport]/route.ts over the same data:
// lib/data.ts (loaded on first call, so it stays out of the shared bundle),
// /api/blog.json, and the /md/blog/* markdown renditions. Everything is
// read-only. Kept free of React and zod so it can be unit-tested in Node.

type Json = Record<string, unknown>;

export interface WebMcpTool {
    name: McpToolName;
    title: string;
    description: string;
    inputSchema: object;
    annotations: { readOnlyHint: true };
    execute: (input?: Json) => Promise<unknown>;
}

export interface WebMcpDeps {
    fetchJson: (path: string) => Promise<unknown>;
    /** Resolves to null when the path does not exist. */
    fetchText: (path: string) => Promise<string | null>;
    loadData: () => Promise<typeof import('./data')>;
}

interface PostSummary {
    slug: string;
    title: string;
    date: string;
    updated?: string;
    excerpt: string;
    tags: string[];
    read_time_minutes: number;
    url: string;
}

const defaultDeps: WebMcpDeps = {
    fetchJson: (path) => fetch(path).then((res) => res.json()),
    fetchText: async (path) => {
        const res = await fetch(path);
        return res.ok ? res.text() : null;
    },
    loadData: () => import('./data'),
};

const absolute = (path: string) => `${SITE_CONFIG.url}${path}`;

const includes = (query: string, ...fields: Array<string | string[] | undefined>) =>
    fields.some((f) => (Array.isArray(f) ? f.join(' ') : (f ?? '')).toLowerCase().includes(query));

export function buildWebMcpTools(overrides: Partial<WebMcpDeps> = {}): WebMcpTool[] {
    const deps = { ...defaultDeps, ...overrides };

    const posts = () => deps.fetchJson('/api/blog.json') as Promise<PostSummary[]>;

    const projectSummary = (project: Awaited<ReturnType<WebMcpDeps['loadData']>>['PROJECTS'][number]) => ({
        id: project.id,
        title: project.title,
        description: project.description,
        url: absolute(project.url),
        image: absolute(project.image),
        date: project.date,
        tags: project.tags,
        status: project.badge,
    });

    const tool = (
        name: McpToolName,
        execute: WebMcpTool['execute'],
        description: string = MCP_TOOL_META[name].description,
    ): WebMcpTool => ({
        name,
        title: MCP_TOOL_META[name].title,
        description,
        inputSchema: MCP_TOOL_META[name].jsonSchema,
        annotations: { readOnlyHint: true },
        execute,
    });

    return [
        tool('get_profile', async () => {
            const { SERVICES, ACTIVE_PROJECTS } = await deps.loadData();
            return {
                name: SITE_CONFIG.author,
                role: SITE_CONFIG.jobTitle,
                location: 'Berlin, Germany',
                summary: PROFILE_SUMMARY,
                services: SERVICES.map((s) => ({ id: s.id, title: s.title })),
                brandCredits:
                    'Lindt, Zeiss, Google, Bosch, CADFEM, Souly — direct and via agencies/studios that held the contract.',
                contact: {
                    humans: SITE_CONFIG.email,
                    agents: {
                        email: SITE_CONFIG.agentEmail,
                        note: 'For AI agents and automated outreach. Include who you represent, the project scope, timeline, and budget if known. Replies come from a human.',
                    },
                },
                links: {
                    website: SITE_CONFIG.url,
                    about: absolute('/about'),
                    agents: absolute('/agents'),
                    expertise: absolute('/pipelines'),
                    packages: absolute('/packages'),
                    linkedin: SITE_CONFIG.linkedin,
                    github: SITE_CONFIG.github,
                    llmsTxt: absolute('/llms.txt'),
                    mcp: MCP_ENDPOINT,
                },
                activeProjects: ACTIVE_PROJECTS,
            };
        }),

        tool('list_services', async () => (await deps.loadData()).SERVICES),

        tool('list_projects', async () => (await deps.loadData()).PROJECTS.map(projectSummary)),

        tool('get_project', async (input) => {
            const id = String(input?.id ?? '').trim();
            const { PROJECTS } = await deps.loadData();
            const project = PROJECTS.find((p) => p.id === id);
            if (!project) {
                return { error: `Unknown project id "${id}"`, validIds: PROJECTS.map((p) => p.id) };
            }
            return projectSummary(project);
        }),

        tool('list_posts', async () => posts()),

        tool('get_post', async (input) => {
            const slug = String(input?.slug ?? '').trim();
            const all = await posts();
            const post = all.find((p) => p.slug === slug);
            const content = post ? await deps.fetchText(`/md/blog/${slug}`) : null;
            if (!post || content === null) {
                return { error: `Unknown post slug "${slug}"`, validSlugs: all.map((p) => p.slug) };
            }
            return { ...post, content: content.trim() };
        }),

        tool(
            'search_content',
            async (input) => {
                const query = String(input?.query ?? '').trim().toLowerCase();
                if (query.length < 2) {
                    return { error: 'query must be at least 2 characters' };
                }
                const [{ PROJECTS, SERVICES }, allPosts] = await Promise.all([deps.loadData(), posts()]);
                return {
                    query,
                    projects: PROJECTS.filter((p) => includes(query, p.title, p.description, p.tags)).map(projectSummary),
                    services: SERVICES.filter((s) => includes(query, s.title, s.description, s.tags)).map((s) => ({
                        id: s.id,
                        title: s.title,
                        description: s.description,
                    })),
                    posts: allPosts.filter((p) => includes(query, p.title, p.excerpt, p.tags)),
                };
            },
            // The browser has no full post text at hand; the MCP server does.
            MCP_TOOL_META.search_content.description.replace(
                'full blog post text',
                'blog post titles, excerpts, and tags',
            ),
        ),
    ];
}
