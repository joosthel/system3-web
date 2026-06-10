// Bump when homepage or other static-page copy changes; used for sitemap lastModified.
// (Git dates are unreliable in CI: deploy builds use shallow clones.)
export const SITE_LAST_UPDATED = '2026-06-10';

export const SITE_CONFIG = {
    title: "Joost Helfers. Creative Technologist. AI Visuals & Pipelines. Berlin.",
    author: "Joost Helfers",
    email: "mail@joosthelfers.com",
    // Dedicated address for AI agents and automated outreach. Mail here is
    // expected to come from bots; replies are read by a human.
    agentEmail: "llms@joosthelfers.com",
    description: "Berlin-based creative technologist. I build AI visual pipelines, automation workflows, and interactive platforms for agencies, studios, and product teams.",
    url: "https://joosthelfers.com",
    github: "https://github.com/joosthel",
    instagram: "https://instagram.com/joosthel",
    linkedin: "https://linkedin.com/in/joosthel",
    jobTitle: "Creative Technologist",
    sameAs: [
        "https://github.com/joosthel",
        "https://instagram.com/joosthel",
        "https://linkedin.com/in/joosthel"
    ]
};

// Public MCP endpoint (Streamable HTTP, no auth), served by app/api/[transport]/route.ts.
export const MCP_ENDPOINT = `${SITE_CONFIG.url}/api/mcp`;
