// Mirrors SITE_CONFIG.url in lib/constants.ts (this file cannot import TS).
const SITE_URL = 'https://joosthelfers.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // The MCP route reads blog MDX from disk at request time; bundle the
  // content directory into its serverless function.
  outputFileTracingIncludes: {
    '/api/[transport]': ['./content/blog/*.mdx'],
  },
  // RFC 8288 Link headers for agent discovery (registered IANA rels only).
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: [
              `<${SITE_URL}/.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"`,
              `<${SITE_URL}/llms.txt>; rel="service-doc"; type="text/plain"`,
              `<${SITE_URL}/.well-known/agent-card.json>; rel="describedby"; type="application/json"`,
            ].join(', '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
