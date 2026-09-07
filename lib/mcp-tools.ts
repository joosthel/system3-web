import { z } from 'zod';
import { MCP_TOOL_META } from './mcp-tool-meta';

// Single source of truth for MCP server identity and tool metadata.
// Consumed by the live server (app/api/[transport]/route.ts) and the
// discovery surfaces (/.well-known/mcp/server-card.json,
// /.well-known/agent-card.json, the /agents page). The zod-free part lives
// in lib/mcp-tool-meta.ts so the in-browser WebMCP provider can share it.
// public/.well-known/agent.json mirrors the tool names by hand; keep it
// in sync when tools change.

export { MCP_SERVER_INFO, MCP_TOOL_LIST } from './mcp-tool-meta';

// The three tools with input carry the zod shape (for mcp-handler) next to
// the plain JSON Schema (for discovery documents).
export const MCP_TOOLS = {
    get_profile: MCP_TOOL_META.get_profile,
    list_services: MCP_TOOL_META.list_services,
    list_projects: MCP_TOOL_META.list_projects,
    get_project: {
        ...MCP_TOOL_META.get_project,
        zodShape: { id: z.string().describe('Project id, e.g. "prompt-engine"') },
    },
    list_posts: MCP_TOOL_META.list_posts,
    get_post: {
        ...MCP_TOOL_META.get_post,
        zodShape: { slug: z.string().describe('Post slug, e.g. "pull-of-the-physical"') },
    },
    search_content: {
        ...MCP_TOOL_META.search_content,
        zodShape: { query: z.string().min(2).describe('Search term') },
    },
} as const;
