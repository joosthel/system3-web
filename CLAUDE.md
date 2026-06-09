# system3-web — joosthelfers.com

Personal portfolio of Joost Helfers, Berlin-based creative technologist (AI visual
production, generative pipelines, digital platforms).

## Stack & deployment

- Next.js App Router, TypeScript, Tailwind CSS, `output: 'export'` (fully static).
- Deployed to **GitHub Pages** by `.github/workflows/nextjs.yml` on push to `main`.
  There is **no server runtime**: no dynamic API routes, no headers()/cookies(), no ISR.
- Build: `npm run build` (outputs to `out/`). Preview: `npx serve out`.

## Where content lives

- Projects + services: `lib/data.ts` (single source of truth — carousel, sitemap,
  JSON endpoints, and llms.txt all derive from it).
- Blog posts: `content/blog/*.mdx` (frontmatter: title, date, optional `updated`,
  excerpt, tags, optional relatedPosts).
- Site config: `lib/constants.ts`. Bump `SITE_LAST_UPDATED` when static-page copy changes.
- Design system: `app/globals.css` — five neutrals, one blue accent (#0057ff),
  Doto display + Inter body, zero border radii. Reuse existing classes before adding new ones.

## Generated endpoints — never hand-edit the output

`/llms.txt`, `/llms-full.txt`, `/feed.xml`, `/feed.json`, `/api/projects.json`,
`/api/blog.json` are build-time route handlers under `app/` (with
`export const dynamic = 'force-static'`). They regenerate from `lib/data.ts` and
`content/blog` on every build. To change them, edit the route handler or the source
data, never a file in `public/`. A route-handler path must not collide with a
`public/` file of the same name.

JSON-LD schema builders live in `lib/schema.ts`; per-page metadata helpers in
`lib/metadata.ts`.

## Voice rules for all site copy

Authentic and down to earth. Direct, modest, concrete sentences. No hype words
(transformative, cutting-edge, passionate), no em dashes, no rule-of-three flourishes,
no AI-sounding filler. Technical terms only where they are earned. When naming brand
credits, keep the honest qualifier: some work shipped via agencies that held the contract.

## Facts that are easy to get wrong

- Brand credits line (Lindt, Zeiss, Google, Bosch, CADFEM, Souly) is "direct and via
  agencies" — do not phrase as direct client relationships.
- XD Network (https://xdnet.work/) is a Berlin collective; Joost is a core member.
  Event formats: SOIREE XD, Science of Rave, Demo Days, Mono XD.
- Two projects are NDA ("NDA. Process only.") — never name those clients.
