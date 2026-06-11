import { createHash } from 'node:crypto';
import {
    QUERY_PORTFOLIO_SKILL_DESCRIPTION,
    QUERY_PORTFOLIO_SKILL_MD,
    QUERY_PORTFOLIO_SKILL_NAME,
} from '@/lib/agent-skills';
import { SITE_CONFIG } from '@/lib/constants';

// Agent Skills Discovery index (RFC v0.2.0). The digest is computed at
// build time from the same string the SKILL.md route serves.
export const dynamic = 'force-static';

export async function GET() {
    const digest = createHash('sha256')
        .update(QUERY_PORTFOLIO_SKILL_MD, 'utf8')
        .digest('hex');

    return Response.json({
        $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
        skills: [
            {
                name: QUERY_PORTFOLIO_SKILL_NAME,
                type: 'skill-md',
                description: QUERY_PORTFOLIO_SKILL_DESCRIPTION,
                url: `${SITE_CONFIG.url}/.well-known/agent-skills/${QUERY_PORTFOLIO_SKILL_NAME}/SKILL.md`,
                digest: `sha256:${digest}`,
            },
        ],
    });
}
