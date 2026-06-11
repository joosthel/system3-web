import { SITE_CONFIG } from '@/lib/constants';

// Minimal, honest OpenAPI 3.1 description of the public GET endpoints.
// The MCP server at /api/mcp is JSON-RPC and is documented by
// /.well-known/mcp/server-card.json instead. Referenced as
// rel="service-desc" from /.well-known/api-catalog.
export const dynamic = 'force-static';

export async function GET() {
    const spec = {
        openapi: '3.1.0',
        info: {
            title: 'joosthelfers.com public JSON endpoints',
            description:
                'Read-only JSON endpoints for the portfolio of Joost Helfers, Berlin-based creative technologist and AI artist. Public, no authentication.',
            version: '1.0.0',
            contact: {
                name: SITE_CONFIG.author,
                email: SITE_CONFIG.agentEmail,
                url: `${SITE_CONFIG.url}/agents`,
            },
        },
        servers: [{ url: SITE_CONFIG.url }],
        paths: {
            '/api/projects.json': {
                get: {
                    operationId: 'listProjects',
                    summary: 'All portfolio projects',
                    responses: {
                        '200': {
                            description: 'Array of projects.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: { type: 'string' },
                                                title: { type: 'string' },
                                                description: { type: 'string' },
                                                url: { type: 'string', format: 'uri' },
                                                image: { type: 'string', format: 'uri' },
                                                date: { type: ['string', 'null'] },
                                                tags: { type: 'array', items: { type: 'string' } },
                                                badge: { type: 'string' },
                                                live_url: { type: 'string', format: 'uri' },
                                            },
                                            required: ['id', 'title', 'description', 'url'],
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '/api/blog.json': {
                get: {
                    operationId: 'listPosts',
                    summary: 'All blog posts',
                    responses: {
                        '200': {
                            description: 'Array of blog posts, newest first.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                slug: { type: 'string' },
                                                title: { type: 'string' },
                                                date: { type: 'string' },
                                                updated: { type: 'string' },
                                                excerpt: { type: 'string' },
                                                tags: { type: 'array', items: { type: 'string' } },
                                                read_time_minutes: { type: 'integer' },
                                                url: { type: 'string', format: 'uri' },
                                            },
                                            required: ['slug', 'title', 'date', 'excerpt', 'url'],
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '/api/health': {
                get: {
                    operationId: 'getHealth',
                    summary: 'Deployment health',
                    responses: {
                        '200': {
                            description: 'Static health document; 200 means the deployment serves.',
                            content: {
                                'application/health+json': {
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            status: { type: 'string' },
                                            service: { type: 'string' },
                                            version: { type: 'string' },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    };

    return Response.json(spec, {
        headers: { 'Content-Type': 'application/openapi+json; charset=utf-8' },
    });
}
