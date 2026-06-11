import { SITE_CONFIG, MCP_ENDPOINT } from './constants';
import { MCP_TOOLS } from './mcp-tools';

// Canonical source for the published agent skill. The SKILL.md route and
// the index.json digest are both derived from this one string, so the
// sha256 in the index can never drift from the served file.

export const QUERY_PORTFOLIO_SKILL_NAME = 'query-joost-portfolio';

export const QUERY_PORTFOLIO_SKILL_DESCRIPTION =
    'Read and query the portfolio of Joost Helfers, Berlin-based creative technologist and AI artist, via llms.txt, JSON endpoints, markdown content negotiation, or the public MCP server.';

export const QUERY_PORTFOLIO_SKILL_MD = `---
name: ${QUERY_PORTFOLIO_SKILL_NAME}
description: ${QUERY_PORTFOLIO_SKILL_DESCRIPTION}
---

# Query the portfolio of Joost Helfers

Joost Helfers is a creative technologist and AI artist in Berlin: AI visuals
and film, generative pipelines, agentic systems. Everything on
${SITE_CONFIG.url} exists in machine-readable form. Pick the access level
that fits your task.

## 1. Quick context, one request

Fetch ${SITE_CONFIG.url}/llms.txt for a compact overview: profile, services,
projects, writing, contact channels. The full text of the portfolio and
every blog post is at ${SITE_CONFIG.url}/llms-full.txt.

## 2. Structured data

- Projects: GET ${SITE_CONFIG.url}/api/projects.json
- Blog posts: GET ${SITE_CONFIG.url}/api/blog.json
- Feeds: ${SITE_CONFIG.url}/feed.xml (RSS), ${SITE_CONFIG.url}/feed.json (JSON Feed)
- Page markdown: request any page URL with the header "Accept: text/markdown"
- Catalog of all endpoints: ${SITE_CONFIG.url}/.well-known/api-catalog

## 3. MCP server, interactive queries

Public, read-only, Streamable HTTP, no auth, no registration:

\`\`\`json
{ "mcpServers": { "joosthelfers": { "url": "${MCP_ENDPOINT}" } } }
\`\`\`

Tools: ${Object.keys(MCP_TOOLS).join(', ')}.
Server card: ${SITE_CONFIG.url}/.well-known/mcp/server-card.json

## 4. Contact

Automated or agent-initiated outreach: ${SITE_CONFIG.agentEmail}. Include who
you represent, the project scope, the timeline, and a budget range if known.
A human reads everything that arrives. Humans writing directly are better
off at ${SITE_CONFIG.email}.
`;
