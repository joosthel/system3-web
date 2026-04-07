import { SITE_CONFIG } from '@/lib/constants';

export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: SITE_CONFIG.author,
        url: SITE_CONFIG.url,
        sameAs: SITE_CONFIG.sameAs,
        jobTitle: SITE_CONFIG.jobTitle,
        worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
        },
        description: SITE_CONFIG.description,
        knowsAbout: [
            "Creative Technology",
            "AI Strategy",
            "3D Design",
            "Workflow Automation",
            "Creative Coding"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
