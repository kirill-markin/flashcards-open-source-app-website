# flashcards-open-source-app-website

Marketing website for Nibomo. Static Next.js site deployed on Vercel.

**Git Workflow**: work through a pull request; deploy is automatic after merge. The required check neither typechecks nor renders pages, so a green check is not a working build: merge only after the Vercel preview deployment succeeds.

**CI**: `.github/workflows/pr-checks.yml` runs `npm run test:catalog` on pull requests and on pushes to `main`. Its `Catalog test suite` job is a required status check for merging a pull request into `main`; the branch need not be up to date. A direct push to `main` by an admin bypasses the check: the run reports after the commit has landed and Vercel has started deploying it, so it detects a broken commit rather than blocking one.

## Rules

- Use English for code comments and documentation.
- Prefer functional programming and pure functions.
- Use classes only for connectors to external systems.
- Use strict typing across functions, variables, and collections.
- Avoid fallback logic unless explicitly requested.
- Raise explicit, actionable errors with context.
- Keep changes minimal and scoped to the current request.
- Prefer non-interactive terminal commands.
- RTL support: use CSS logical properties such as `inset-inline-start`/`end`, `margin-inline-start`/`end`, `padding-inline-start`/`end`, and `text-align: start`/`end`; do not use physical directional properties.
- Translate "spaced repetition" only where the language has an attested native term for it, and transliterate it where none exists; the phrase sits in the page title and meta description, so it has to match what people in that language actually search for rather than a coined compound nobody types. Anki's own localizations leave the English term in place across the Indic set, which is the strongest signal that no settled native term exists there. Three shipped locales do have an attested term and still ship the transliteration: Bengali, Telugu and Gujarati. Whether to switch them, and whether to carry the English in parentheses alongside the native term as those languages normally do for imported technical concepts, is an open question rather than an oversight.
- Analytics records facts; funnels, cohorts, and groupings are built by queries over those facts, and no event is created to serve one report.

## Development

- `npm run dev`: development server with Turbopack
- `npm run build`: production build
- `npm run lint`: ESLint
- `npm run test:catalog`: catalog test suite

## Data Sources for Analysis

- Internal admin reports on product events, audience, and catalog-install funnels: [admin documentation](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/admin-app.md) in the separate `kirill-markin/flashcards-open-source-app` repository. Its [Data Sources for Analysis](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/AGENTS.md#data-sources-for-analysis) lists direct SQL access, logs, and other product data sources. It is usually checked out on the same machine in a neighboring directory; verify its local path.

### BigQuery Analytics

- Google Search Console bulk exports use two BigQuery datasets for the former marketing domain `flashcards-open-source-app.com` and the current domain `nibomo.com`. Discover and query both with the configured service account when analyzing search traffic across the move; access to both is configured. The old-domain export started on 2026-08-09; do not expect earlier exported data. Use these exports for page and query clicks, search impressions, CTR, and average position.
- Use `npm run bigquery:query` with GoogleSQL on stdin for Search Console and SEO analysis; the implementation is `scripts/queryBigQuery.ts`.
- The ignored `.env.bigquery.local` stores the local key path, project ID, location, and per-query byte limit. The service-account JSON stays outside the repository.
- Never use or modify `gcloud` authentication for this integration, and never commit local configuration or credentials. If the configuration, key, or API access is unavailable, ask the user to provision or restore it instead of falling back to another Google identity.

## Stack

- Next.js 16 App Router, TypeScript, React 19 Server Components
- Tailwind CSS v4 + CSS Modules
- Markdown via `gray-matter` and `remark`
- Path alias: `@/*` -> `./src/*`

## Core Principles

- Static generation first: pre-render all content at build time; no request-time server computation.
- Server Components first: use client components only where interactivity is required (`AuthButton`, header mobile menu).
- Public content only: no secret pages, private data, or server-side personalization.
- No request-time HTML rendering: do not add SSR, server-side cookie checks, or similar HTML personalization; if a UI detail depends on browser state, handle it after load in a small client component.
- Narrow runtime negotiation layer: keep the proxy only for `.md` URLs, `Accept: text/markdown`, `Vary: Accept`, `Link rel="alternate"`, and existing host-level redirects; never use it for HTML rendering or personalization.
- Static Markdown and LLM assets: `.md` URLs and `Accept: text/markdown` are required public interfaces; generate Markdown and `llms.txt` at build time whenever possible and use the runtime proxy only to route to those prebuilt assets.
- Shrink client islands over time instead of adding SSR; prefer server-rendered shells with small client islands for auth buttons and mobile navigation.
- Marketing attribution links and campaign naming rules live in [docs/marketing-links.md](docs/marketing-links.md).

## Project Structure

- `src/app/`: landing, features, pricing, docs, blog, privacy, terms
- `src/components/`: shared components (`Header`, `Footer`, `AuthButton`)
- `src/content/<locale>/pages/`: locale-rooted marketing page content modules plus markdown-backed legal pages
- `src/content/<locale>/docs/`: locale-rooted documentation markdown files
- `src/content/<locale>/blog/`: locale-rooted blog markdown files
- `src/lib/`: utilities (`auth` helpers)

## Auth Integration

The site has zero auth logic. It only checks whether the `logged_in` cookie is present to switch between "Log In / Sign Up" and "Open App" buttons. There is no JWT verification. The auth host writes that cookie with the backend's single `COOKIE_DOMAIN`, which is still `flashcards-open-source-app.com`, so `nibomo.com` cannot read it and signed-in visitors keep seeing the signed-out buttons; both still land in the app. Once the backend scopes the cookie to the domain the request arrived on, a session established through `auth.nibomo.com` becomes readable here, while one established on the legacy domain stays invisible until it is re-established. This degradation is accepted and no cross-domain session check is added. That one variable scopes every cookie the backend writes, the shared `analytics_visitor` analytics cookie included, so its current value is stated here and nowhere else; code that depends on it points back to this paragraph instead of naming a domain of its own.

## Domain Layout

| Domain | What | Where |
| --- | --- | --- |
| `nibomo.com` | This marketing site | Vercel |
| `flashcards-open-source-app.com` | Former marketing domain, redirects here | Vercel |
| `app.nibomo.com` | Main app | AWS CloudFront + S3 |
| `auth.nibomo.com` | Cognito auth UI/API | AWS API Gateway + Lambda |
| `api.nibomo.com` | Backend API | AWS API Gateway + Lambda |
| `mcp.nibomo.com` | MCP server | AWS API Gateway + Lambda |

`flashcards-open-source-app.com` and both `www` hosts issue one path-preserving 308 redirect to `nibomo.com` and stay alive permanently. `src/lib/site.ts` is the single place the site names a product host; the old app host also stays in `CATALOG_APP_HOSTNAMES` so install links minted on either side of the cutover keep reporting.

## Client Entry Points

- Hosted web app for humans starts at `https://app.nibomo.com`
- Terminal / AI-agent onboarding starts at `GET https://api.nibomo.com/v1/agent`
- Start here for instructions: `src/content/en/docs/getting-started.md`, `src/content/en/docs/api.md`, and `src/content/en/blog/claude-code-codex-openclaw-flashcards-login.md`

## Content

Typed content modules power composed/list pages:
- `src/content/en/pages/home.ts`
- `src/content/en/pages/features.ts`
- `src/content/en/pages/pricing.ts`

Mostly text pages stay Markdown-backed:
- `src/content/en/pages/privacy/index.md`
- `src/content/en/pages/terms/index.md`
- `src/content/en/docs/*.md`
- `src/content/en/blog/*.md`

Keep typed content models mirrored with the other marketing website repository. Build-time generation must produce both HTML and Markdown from the same source of truth.

- Keep every catalog route localized, including package pages. Locale selects UI language; package content language comes only from `languageTags`, and locale catalog roots expose `?language=<locale>`.
- Collections are the only curated package grouping; do not add catalog topics.
