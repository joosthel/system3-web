import { SITE_CONFIG } from './constants';
import { OG_DEFAULT_IMAGE, absoluteUrl } from './metadata';
import type { Project } from './data';
import type { Post } from './blog';

export const PERSON_ID = `${SITE_CONFIG.url}/#person`;
export const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

// Compact reference to the Person entity defined in the root layout graph.
// Name and url are repeated so the node is still meaningful for parsers
// that do not merge @id references across script tags.
function personRef() {
    return {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE_CONFIG.author,
        url: SITE_CONFIG.url,
    };
}

export function personSchema() {
    return {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE_CONFIG.author,
        url: SITE_CONFIG.url,
        sameAs: SITE_CONFIG.sameAs,
        jobTitle: SITE_CONFIG.jobTitle,
        description: SITE_CONFIG.description,
        email: `mailto:${SITE_CONFIG.email}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Berlin',
            addressCountry: 'DE',
        },
        alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'DesignMorphine',
        },
        memberOf: {
            '@type': 'Organization',
            name: 'XD Network',
            url: 'https://xdnet.work/',
            description: 'Berlin collective running community-led events around new technology and culture',
        },
        knowsAbout: [
            'Generative AI',
            'AI Visual Production',
            'ComfyUI',
            'Prompt Engineering',
            'Agentic Workflows',
            'Digital Twins',
            'Creative Technology',
            'Three.js',
            'Next.js',
            'Python',
            'Computational Design',
        ],
    };
}

export function webSiteSchema() {
    return {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: SITE_CONFIG.author,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        publisher: { '@id': PERSON_ID },
        inLanguage: 'en',
    };
}

const VISUAL_ARTWORK_IDS = ['souly-boondawg', 'inyo-viz', 'msc-arcadia'];

export function projectSchema(project: Project) {
    return {
        '@type': VISUAL_ARTWORK_IDS.includes(project.id) ? 'VisualArtwork' : 'CreativeWork',
        name: project.title,
        description: project.description,
        url: absoluteUrl(project.url),
        image: absoluteUrl(project.image),
        ...(project.date ? { dateCreated: project.date } : {}),
        ...(project.tags ? { keywords: project.tags.join(', ') } : {}),
        author: personRef(),
        creator: personRef(),
    };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}

export function blogPostingSchema(post: Post) {
    return {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: absoluteUrl(`/blog/${post.slug}`),
        mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        image: absoluteUrl(OG_DEFAULT_IMAGE),
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.updated ?? post.date).toISOString(),
        keywords: post.tags.join(', '),
        wordCount: post.content.trim().split(/\s+/).length,
        inLanguage: 'en',
        author: personRef(),
        isPartOf: {
            '@type': 'Blog',
            name: 'Writing',
            url: absoluteUrl('/blog'),
        },
    };
}

export function profilePageSchema() {
    return {
        '@type': 'ProfilePage',
        url: absoluteUrl('/about'),
        name: `About ${SITE_CONFIG.author}`,
        mainEntity: personRef(),
        isPartOf: {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            name: SITE_CONFIG.author,
            url: SITE_CONFIG.url,
        },
    };
}

// Wraps one or more schema nodes in a single JSON-LD payload.
export function toJsonLd(...nodes: object[]) {
    if (nodes.length === 1) {
        return { '@context': 'https://schema.org', ...nodes[0] };
    }
    return { '@context': 'https://schema.org', '@graph': nodes };
}
