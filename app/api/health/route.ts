import { SITE_CONFIG, SITE_LAST_UPDATED } from '@/lib/constants';

// Prerendered at build time: a 200 from this path means the deployment is
// serving. Referenced as rel="status" from /.well-known/api-catalog.
export const dynamic = 'force-static';

export async function GET() {
    return Response.json(
        {
            status: 'pass',
            service: SITE_CONFIG.url,
            version: SITE_LAST_UPDATED,
        },
        { headers: { 'Content-Type': 'application/health+json; charset=utf-8' } },
    );
}
