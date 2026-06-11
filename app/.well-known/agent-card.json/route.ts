import { SITE_CONFIG, MCP_ENDPOINT } from '@/lib/constants';
import { MCP_SERVER_INFO, MCP_TOOL_LIST } from '@/lib/mcp-tools';

// A2A Agent Card for discovery. Honest framing: this is a read-only
// portfolio content service, not an autonomous agent, and the endpoint
// speaks MCP (JSON-RPC over Streamable HTTP), not the A2A message
// protocol. Skills map 1:1 to the MCP tools in lib/mcp-tools.ts.
export const dynamic = 'force-static';

export async function GET() {
    const interfaces = [{ url: MCP_ENDPOINT, transport: 'JSONRPC' }];

    return Response.json({
        protocolVersion: '0.3.0',
        name: 'Joost Helfers portfolio',
        description:
            'Read-only portfolio content service for Joost Helfers, Berlin-based creative technologist and AI artist. Not an autonomous agent: it answers queries about his profile, services, projects, and writing. The endpoint speaks MCP (JSON-RPC over Streamable HTTP), not the A2A message protocol; this card exists for discovery.',
        version: MCP_SERVER_INFO.version,
        url: MCP_ENDPOINT,
        preferredTransport: 'JSONRPC',
        supportedInterfaces: interfaces,
        additionalInterfaces: interfaces,
        provider: { organization: SITE_CONFIG.author, url: SITE_CONFIG.url },
        documentationUrl: `${SITE_CONFIG.url}/agents`,
        capabilities: {
            streaming: false,
            pushNotifications: false,
            stateTransitionHistory: false,
        },
        defaultInputModes: ['text/plain'],
        defaultOutputModes: ['application/json', 'text/plain'],
        skills: MCP_TOOL_LIST.map((tool) => ({
            id: tool.name,
            name: tool.title,
            description: tool.description,
            tags: ['portfolio', 'content', 'read-only'],
        })),
        supportsAuthenticatedExtendedCard: false,
    });
}
