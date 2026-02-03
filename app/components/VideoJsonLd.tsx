
import { SITE_CONFIG } from '../../lib/constants';

interface VideoJsonLdProps {
    name: string;
    description: string;
    uploadDate: string;
    thumbnailUrl: string;
    contentUrl: string;
}

export default function VideoJsonLd({ name, description, uploadDate, thumbnailUrl, contentUrl }: VideoJsonLdProps) {
    const minifiedContentUrl = contentUrl.startsWith('http') ? contentUrl : `${SITE_CONFIG.url}${contentUrl}`;
    const minifiedThumbnailUrl = thumbnailUrl.startsWith('http') ? thumbnailUrl : `${SITE_CONFIG.url}${thumbnailUrl}`;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name,
        description,
        uploadDate,
        thumbnailUrl: minifiedThumbnailUrl,
        contentUrl: minifiedContentUrl,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
