# Roadmap — joosthelfers.com

Where the site and the positioning go next. Written June 2026, after the
positioning + GEO upgrade (about page, brand credits, XD Network, structured
data, feeds, llms.txt/llms-full.txt, machine-readable JSON endpoints).

## 1. MCP server (phase 2)

A small public MCP server so AI agents can query the portfolio directly,
instead of only crawling it. This is also a credibility play: the
"MCP apps and agentic commerce" blog post argues brands need this layer,
so the portfolio should demonstrate it.

**Architecture**
- Separate small repo/app deployed to Vercel at `mcp.joosthelfers.com`.
  The website stays a static export on GitHub Pages.
- TypeScript, `@modelcontextprotocol/sdk` plus Vercel's `mcp-handler`,
  Streamable HTTP transport. Public, read-only, no auth.
- Data strategy: fetch this site's static endpoints at request time
  (`/api/projects.json`, `/api/blog.json`, `/llms-full.txt`). Zero content
  duplication; the website remains the single source of truth.

**Surface**
- Resources: `portfolio://projects`, `portfolio://projects/{id}`,
  `blog://posts`, `blog://posts/{slug}`, `profile://services`, `profile://contact`.
- One tool: `search_content(query)` over projects and posts.

**Launch checklist**
- Add `mcp` link to `/.well-known/agent.json` and the llms.txt
  Machine-Readable Resources section.
- Write the build as a blog post (see cluster c below).

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
