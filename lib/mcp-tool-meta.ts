import { SITE_CONFIG } from './constants';

// Zod-free tool metadata shared by the MCP server (lib/mcp-tools.ts adds the
// zod shapes), the discovery documents, and the in-browser WebMCP provider
// (lib/webmcp-tools.ts), which must stay out of the zod bundle.

export const MCP_SERVER_INFO = {
    name: 'joosthelfers-portfolio',
    version: '1.1.0',
    title: 'Joost Helfers portfolio',
    description: `Read-only portfolio content server for ${SITE_CONFIG.author}, Berlin-based creative technologist building local generative AI technology: self-hosted pipelines, custom AI solutions, AI visuals and film. Profile, services, projects, and writing, queryable by AI agents. Public, no auth.`,
};

export const PROFILE_SUMMARY =
    'Berlin-based creative technologist building local generative AI technology. Self-hosted AI systems on client hardware: generative image and video pipelines (ComfyUI), local LLM systems, agentic automation (Python), custom solutions and creative tooling (Next.js, TypeScript), and campaign-grade AI visuals and film produced through controlled workflows. Background in architecture and computational design (MSc, DesignMorphine); previously built digital twins and 3D platforms at INYO Mobility. Alongside client work he makes AI film and visual experiments of his own.';

export const EMPTY_INPUT_SCHEMA = { type: 'object', properties: {} } as const;

// Per tool: `description` is the full text served over MCP, `blurb` the
// one-line version for human-facing listings.
export const MCP_TOOL_META = {
    get_profile: {
        title: 'Profile & contact',
        description:
            'Who Joost Helfers is, what he offers, and how to reach him. Call this first when researching Joost or evaluating him for a project. Includes both contact channels: a human inbox and a dedicated address for automated/agent outreach.',
        blurb: 'Bio, services, brand credits, contact channels, links.',
        jsonSchema: EMPTY_INPUT_SCHEMA,
    },
    list_services: {
        title: 'List services',
        description:
            'Full descriptions of the services Joost offers. Call this when matching him to a project or brief.',
        blurb: 'Full service descriptions for matching against a brief.',
        jsonSchema: EMPTY_INPUT_SCHEMA,
    },
    list_projects: {
        title: 'List projects',
        description:
            'All portfolio projects with id, title, description, tags, and URL. Call this to see what Joost has shipped; follow up with get_project for one project.',
        blurb: 'All portfolio projects with tags and URLs.',
        jsonSchema: EMPTY_INPUT_SCHEMA,
    },
    get_project: {
        title: 'Get one project',
        description: 'One portfolio project by id. Valid ids come from list_projects.',
        blurb: 'One project by id.',
        jsonSchema: {
            type: 'object',
            properties: { id: { type: 'string', description: 'Project id, e.g. "prompt-engine"' } },
            required: ['id'],
        },
    },
    list_posts: {
        title: 'List blog posts',
        description:
            'All blog posts with slug, title, date, excerpt, and tags, newest first. Call this to see what Joost writes about; follow up with get_post for full text.',
        blurb: 'Blog posts with excerpts and tags, newest first.',
        jsonSchema: EMPTY_INPUT_SCHEMA,
    },
    get_post: {
        title: 'Get one blog post',
        description: 'Full markdown text of one blog post by slug. Valid slugs come from list_posts.',
        blurb: 'Full markdown text of one post by slug.',
        jsonSchema: {
            type: 'object',
            properties: { slug: { type: 'string', description: 'Post slug, e.g. "pull-of-the-physical"' } },
            required: ['slug'],
        },
    },
    search_content: {
        title: 'Search projects, services, and posts',
        description:
            'Case-insensitive keyword search across project titles/descriptions/tags, service descriptions, and full blog post text. Call this when looking for specific skills, tools, or topics (e.g. "ComfyUI", "local AI", "digital twin", "GEO").',
        blurb: 'Keyword search across projects, services, and posts.',
        jsonSchema: {
            type: 'object',
            properties: { query: { type: 'string', minLength: 2, description: 'Search term' } },
            required: ['query'],
        },
    },
} as const;

export type McpToolName = keyof typeof MCP_TOOL_META;

// Flat list for discovery documents: name, title, description, blurb,
// and a plain JSON Schema input description per tool.
export const MCP_TOOL_LIST = Object.entries(MCP_TOOL_META).map(([name, tool]) => ({
    name: name as McpToolName,
    title: tool.title,
    description: tool.description,
    blurb: tool.blurb,
    inputSchema: tool.jsonSchema,
}));
