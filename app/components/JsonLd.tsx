import { SITE_CONFIG } from '@/lib/constants';

export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Joost Helfers',
        url: SITE_CONFIG.url,
        sameAs: [
            `https://github.com/${SITE_CONFIG.github}`,
            `https://instagram.com/${SITE_CONFIG.instagram}`,
            `https://linkedin.com/in/${SITE_CONFIG.linkedin}`,
        ],
        jobTitle: 'Creative Technologist',
        worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
        },
        description: SITE_CONFIG.description,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
