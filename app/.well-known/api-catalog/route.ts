import { SITE_CONFIG, MCP_ENDPOINT } from '@/lib/constants';

// API catalog per RFC 9727, as a linkset (RFC 9264). Two anchors: the MCP
// server and the plain JSON/feed endpoints under the site root.
export const dynamic = 'force-static';

export async function GET() {
    const url = SITE_CONFIG.url;
    const health = [{ href: `${url}/api/health`, type: 'application/health+json' }];

    const linkset = {
        linkset: [
            {
                anchor: MCP_ENDPOINT,
                'service-doc': [{ href: `${url}/agents`, type: 'text/html' }],
                describedby: [
                    { href: `${url}/.well-known/mcp/server-card.json`, type: 'application/json' },
                ],
                status: health,
            },
            {
                anchor: `${url}/`,
                'service-desc': [{ href: `${url}/openapi.json`, type: 'application/openapi+json' }],
                'service-doc': [{ href: `${url}/llms.txt`, type: 'text/plain' }],
                status: health,
                item: [
                    { href: `${url}/api/projects.json`, type: 'application/json' },
                    { href: `${url}/api/blog.json`, type: 'application/json' },
                    { href: `${url}/feed.xml`, type: 'application/rss+xml' },
                    { href: `${url}/feed.json`, type: 'application/feed+json' },
                ],
            },
        ],
    };

    return Response.json(linkset, {
        headers: { 'Content-Type': 'application/linkset+json; charset=utf-8' },
    });
}
