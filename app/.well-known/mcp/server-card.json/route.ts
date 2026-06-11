import { SITE_CONFIG, MCP_ENDPOINT } from '@/lib/constants';
import { MCP_SERVER_INFO, MCP_TOOL_LIST } from '@/lib/mcp-tools';

// MCP Server Card (SEP-1649 draft). Generated from lib/mcp-tools.ts so it
// cannot drift from the live server at /api/mcp.
export const dynamic = 'force-static';

export async function GET() {
    return Response.json({
        serverInfo: {
            name: MCP_SERVER_INFO.name,
            title: MCP_SERVER_INFO.title,
            version: MCP_SERVER_INFO.version,
        },
        description: MCP_SERVER_INFO.description,
        endpoint: MCP_ENDPOINT,
        transport: 'streamable-http',
        remotes: [{ type: 'streamable-http', url: MCP_ENDPOINT }],
        authentication: { required: false },
        capabilities: { tools: { listChanged: true } },
        tools: MCP_TOOL_LIST.map(({ name, title, description, inputSchema }) => ({
            name,
            title,
            description,
            inputSchema,
        })),
        websiteUrl: SITE_CONFIG.url,
        documentationUrl: `${SITE_CONFIG.url}/agents`,
        contact: SITE_CONFIG.agentEmail,
    });
}
