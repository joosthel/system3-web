import { personSchema, webSiteSchema, toJsonLd } from '@/lib/schema';

export default function JsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(toJsonLd(personSchema(), webSiteSchema())) }}
        />
    );
}
