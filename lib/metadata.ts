import type { Metadata } from 'next';
import { PROJECTS } from './data';
import { SITE_CONFIG } from './constants';

export const OG_DEFAULT_IMAGE = '/assets/imgs/og-default.png';

export function absoluteUrl(path: string): string {
    return `${SITE_CONFIG.url}${path}`;
}

export function projectMetadata(id: string): Metadata {
    const project = PROJECTS.find((p) => p.id === id);
    if (!project) {
        // Fails the static build loudly instead of shipping a page without metadata.
        throw new Error(`projectMetadata: unknown project id "${id}"`);
    }

    const image = absoluteUrl(project.image);

    return {
        title: project.title,
        description: project.description,
        alternates: { canonical: project.url },
        openGraph: {
            title: project.title,
            description: project.description,
            url: absoluteUrl(project.url),
            type: 'article',
            images: [{ url: image }],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
            images: [image],
        },
    };
}
