# flashcards-open-source-app-website

Marketing website for Flashcards Open Source App. Static Next.js site deployed on Vercel.

**Git Workflow**: commit directly to `main`; deploy is automatic after push.

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

## Development

- `npm run dev`: development server with Turbopack
- `npm run build`: production build
- `npm run lint`: ESLint

## BigQuery Analytics

- BigQuery contains the Google Search Console bulk export for `flashcards-open-source-app.com`, enabled on 2026-08-09. Use it for page and query clicks, search impressions, CTR, and average position; do not expect exported data from before this date.
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

The site has zero auth logic. It only checks whether the `logged_in` cookie is present (set by `auth.flashcards-open-source-app.com` on `.flashcards-open-source-app.com`) to switch between "Log In / Sign Up" and "Open App" buttons. There is no JWT verification.

## Domain Layout

| Domain | What | Where |
| --- | --- | --- |
| `flashcards-open-source-app.com` | This marketing site | Vercel |
| `app.flashcards-open-source-app.com` | Main app | AWS CloudFront + S3 |
| `auth.flashcards-open-source-app.com` | Cognito auth UI/API | AWS API Gateway + Lambda |
| `api.flashcards-open-source-app.com` | Backend API | AWS API Gateway + Lambda |

## Client Entry Points

- Hosted web app for humans starts at `https://app.flashcards-open-source-app.com`
- Terminal / AI-agent onboarding starts at `GET https://api.flashcards-open-source-app.com/v1/agent`
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
