import { PROJECTS, ACTIVE_PROJECTS } from '@/lib/data';
import { absoluteUrl } from '@/lib/metadata';

// Rendered to a static file at build time. Generated from lib/data.ts so it
// can never drift from the site content. Do not hand-edit the output.
export const dynamic = 'force-static';

export async function GET() {
    const liveUrls = new Map(
        ACTIVE_PROJECTS.filter((p) => p.url).map((p) => [p.id, p.url as string])
    );

    const projects = PROJECTS.map((project) => ({
        id: project.id,
        title: project.title,
        description: project.description,
        url: absoluteUrl(project.url),
        image: absoluteUrl(project.image),
        date: project.date ?? null,
        tags: project.tags ?? [],
        ...(project.badge ? { badge: project.badge } : {}),
        ...(liveUrls.has(project.id) ? { live_url: liveUrls.get(project.id) } : {}),
    }));

    return Response.json(projects);
}
