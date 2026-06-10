# Roadmap — joosthelfers.com

Where the site and the positioning go next. Written June 2026, after the
positioning + GEO upgrade (about page, brand credits, XD Network, structured
data, feeds, llms.txt/llms-full.txt, machine-readable JSON endpoints).

## 1. MCP server — shipped June 2026, in-app

The plan changed from the original separate-repo idea: the whole site moved
from GitHub Pages to Vercel, so the MCP server lives in this repo at
`app/api/[transport]/route.ts` (`/api/mcp`, Streamable HTTP via `mcp-handler`,
public, read-only, no auth). It imports `lib/data.ts` and `content/blog`
directly; no fetch layer, no content duplication. Tools instead of resources
(broader client support): get_profile, list_services, list_projects,
get_project, list_posts, get_post, search_content. Linked from
`/.well-known/agent.json`, llms.txt, and the `/agents` page.

**Still open from the launch checklist**
- Point joosthelfers.com DNS at Vercel (at Hostinger: replace the four
  GitHub Pages A records on `@` with `A @ 76.76.21.21`; leave the www CNAME
  and the iCloud MX records alone) and retire the GitHub Pages deployment.
- Telegram channel for human and agent requests: deferred, planned. Once it
  exists, add the link to `/agents`, `agent.json`, and `SITE_CONFIG`.
- Write the build up as a blog post (see cluster c below). Self-demonstrating.

**Done June 2026**
- `llms@joosthelfers.com` receives mail (catch-all on the domain, iCloud MX).

## 2. Editorial calendar (~1 post per month)

Three clusters that match the positioning. Cross-link new posts through the
`relatedPosts` frontmatter field.

**a. AI visual production for brands**
- Product consistency across generated shots: what actually works.
- Training brand LoRAs: when it pays off and when it does not.
- AI vs CGI for campaign work: honest cost and turnaround comparison.
- What "campaign-grade" requires that demos never show.

**b. Shipping AI systems / agentic workflows**
- ComfyUI from prototype to production.
- How I use coding agents on client work.
- Evaluating creative pipelines: quality gates that scale.

**c. GEO / agentic web presence** (continues the MCP-apps post)
- "How I rebuilt my portfolio for AI agents": this upgrade as a case study
  (llms.txt, schema graph, feeds, agent.json). Self-demonstrating.
- Building the portfolio MCP server (phase 2 write-up).
- What LLMs actually read: practical notes on llms.txt, feeds, and schemas.

## 3. Positioning arc

- **Now**: "I build AI systems that actually ship." Proof: portfolio,
  brand credits line, live Prompt Enhancement Engine.
- **Next 6 months**: accumulate named proof. More public case studies in the
  T-Cell mold, testimonials where clients allow it, XD Network visibility
  (events are public, citable, and Berlin-local).
- **12 months**: the GEO/agentic-presence cluster positions Joost as someone
  who builds and explains agent-readable brand presence. That feeds directly
  into an "agentic presence" service offer (MCP apps, GEO audits) on top of
  the existing three capabilities.

## 4. Site backlog (small, non-urgent)

- Portrait photo for the Person schema `image` property and the about page.
- A SOIREE XD project page if there is shareable work from the events
  (a thumbnail already exists in `public/assets/imgs/proj_soireexd/`).
- A "Lab" page for the experiments in `public/assets/imgs/lab/` (28 unused
  generative images): cheap proof of ongoing exploration.
- JPG copies of project hero images if LinkedIn previews of webp ever
  cause trouble.
- Consider `next/image` with `unoptimized` for lazy-loading wins (current
  `<img>` warnings from lint are accepted for now).
