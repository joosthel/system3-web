"use client";

import { useEffect } from 'react';
import { SITE_CONFIG, MCP_ENDPOINT } from '../../lib/constants';

// WebMCP: expose a few site tools to AI agents running in the browser via
// navigator.modelContext.provideContext(). Hard no-op in browsers without
// the API. Data comes inline from SITE_CONFIG (already in the bundle) or
// lazily from the existing JSON endpoints, so the component stays tiny.

type TextResult = { content: Array<{ type: 'text'; text: string }> };

type WebMcpTool = {
    name: string;
    description: string;
    inputSchema: Record<string, unknown>;
    execute: (args?: Record<string, unknown>) => Promise<TextResult>;
};

type ModelContext = {
    provideContext?: (context: { tools: WebMcpTool[] }) => void;
};

const text = (data: unknown): TextResult => ({
    content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
});

const fetchJson = (path: string): Promise<Array<Record<string, unknown>>> =>
    fetch(path).then((res) => res.json());

let registered = false;

export default function WebMcpProvider() {
    useEffect(() => {
        if (registered) return;
        const modelContext = (navigator as Navigator & { modelContext?: ModelContext })
            .modelContext;
        if (typeof modelContext?.provideContext !== 'function') return;
        registered = true;

        modelContext.provideContext({
            tools: [
                {
                    name: 'get_profile',
                    description:
                        'Who Joost Helfers is (Berlin-based creative technologist and AI artist), what he offers, and how to reach him.',
                    inputSchema: { type: 'object', properties: {} },
                    execute: async () =>
                        text({
                            name: SITE_CONFIG.author,
                            role: SITE_CONFIG.jobTitle,
                            location: 'Berlin, Germany',
                            description: SITE_CONFIG.description,
                            contact: {
                                humans: SITE_CONFIG.email,
                                agents: SITE_CONFIG.agentEmail,
                            },
                            links: {
                                website: SITE_CONFIG.url,
                                agentsGuide: `${SITE_CONFIG.url}/agents`,
                                mcp: MCP_ENDPOINT,
                                linkedin: SITE_CONFIG.linkedin,
                                github: SITE_CONFIG.github,
                            },
                        }),
                },
                {
                    name: 'list_projects',
                    description:
                        'All portfolio projects with title, description, tags, and URL.',
                    inputSchema: { type: 'object', properties: {} },
                    execute: async () => text(await fetchJson('/api/projects.json')),
                },
                {
                    name: 'search_content',
                    description:
                        'Case-insensitive keyword search across portfolio projects and blog posts.',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            query: {
                                type: 'string',
                                description: 'Search term, at least 2 characters',
                            },
                        },
                        required: ['query'],
                    },
                    execute: async (args) => {
                        const query = String(args?.query ?? '').trim().toLowerCase();
                        if (query.length < 2) {
                            return text({ error: 'query must be at least 2 characters' });
                        }
                        const [projects, posts] = await Promise.all([
                            fetchJson('/api/projects.json'),
                            fetchJson('/api/blog.json'),
                        ]);
                        const hit = (item: Record<string, unknown>, fields: string[]) =>
                            fields
                                .map((field) => {
                                    const value = item[field];
                                    return Array.isArray(value) ? value.join(' ') : String(value ?? '');
                                })
                                .join(' ')
                                .toLowerCase()
                                .includes(query);
                        return text({
                            query,
                            projects: projects.filter((p) => hit(p, ['title', 'description', 'tags'])),
                            posts: posts.filter((p) => hit(p, ['title', 'excerpt', 'tags'])),
                        });
                    },
                },
            ],
        });
    }, []);

    return null;
}
