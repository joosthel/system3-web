import { z } from 'zod';
import { SITE_CONFIG } from './constants';

// Single source of truth for MCP server identity and tool metadata.
// Consumed by the live server (app/api/[transport]/route.ts) and the
// discovery surfaces (/.well-known/mcp/server-card.json,
// /.well-known/agent-card.json, the /agents page).
// public/.well-known/agent.json mirrors the tool names by hand; keep it
// in sync when tools change.

export const MCP_SERVER_INFO = {
    name: 'joosthelfers-portfolio',
    version: '1.0.0',
    title: 'Joost Helfers portfolio',
    description: `Read-only portfolio content server for ${SITE_CONFIG.author}, Berlin-based creative technologist and AI artist. Profile, services, projects, and writing, queryable by AI agents. Public, no auth.`,
};

// Per tool: `description` is the full text served over MCP, `blurb` the
// one-line version for human-facing listings. The three tools with input
// carry both the zod shape (for mcp-handler) and the equivalent plain
// JSON Schema (for discovery documents).
export const MCP_TOOLS = {
    get_profile: {
        title: 'Profile & contact',
        description:
            'Who Joost Helfers is, what he offers, and how to reach him. Call this first when researching Joost or evaluating him for a project. Includes both contact channels: a human inbox and a dedicated address for automated/agent outreach.',
        blurb: 'Bio, services, brand credits, contact channels, links.',
    },
    list_services: {
        title: 'List services',
        description:
            'Full descriptions of the services Joost offers. Call this when matching him to a project or brief.',
        blurb: 'Full service descriptions for matching against a brief.',
    },
    list_projects: {
        title: 'List projects',
        description:
            'All portfolio projects with id, title, description, tags, and URL. Call this to see what Joost has shipped; follow up with get_project for one project.',
        blurb: 'All portfolio projects with tags and URLs.',
    },
    get_project: {
        title: 'Get one project',
        description: 'One portfolio project by id. Valid ids come from list_projects.',
        blurb: 'One project by id.',
        zodShape: { id: z.string().describe('Project id, e.g. "prompt-engine"') },
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
    },
    get_post: {
        title: 'Get one blog post',
        description: 'Full markdown text of one blog post by slug. Valid slugs come from list_posts.',
        blurb: 'Full markdown text of one post by slug.',
        zodShape: { slug: z.string().describe('Post slug, e.g. "pull-of-the-physical"') },
        jsonSchema: {
            type: 'object',
            properties: { slug: { type: 'string', description: 'Post slug, e.g. "pull-of-the-physical"' } },
            required: ['slug'],
        },
    },
    search_content: {
        title: 'Search projects, services, and posts',
        description:
            'Case-insensitive keyword search across project titles/descriptions/tags, service descriptions, and full blog post text. Call this when looking for specific skills, tools, or topics (e.g. "ComfyUI", "digital twin", "GEO").',
        blurb: 'Keyword search across projects, services, and posts.',
        zodShape: { query: z.string().min(2).describe('Search term') },
        jsonSchema: {
            type: 'object',
            properties: { query: { type: 'string', minLength: 2, description: 'Search term' } },
            required: ['query'],
        },
    },
} as const;

const EMPTY_INPUT_SCHEMA = { type: 'object', properties: {} } as const;

// Flat list for discovery documents: name, title, description, blurb,
// and a plain JSON Schema input description per tool.
export const MCP_TOOL_LIST = Object.entries(MCP_TOOLS).map(([name, tool]) => ({
    name,
    title: tool.title,
    description: tool.description,
    blurb: tool.blurb,
    inputSchema: 'jsonSchema' in tool ? tool.jsonSchema : EMPTY_INPUT_SCHEMA,
}));
