import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { FEATURES } from "@/data/features";
import { DOCS } from "@/data/docs";

const SITE_URL = "https://flashcards-open-source-app.com";
const GITHUB_URL = "https://github.com/kirill-markin/flashcards-open-source-app";
const APP_URL = "https://app.flashcards-open-source-app.com";
const DOCS_DIR = join(process.cwd(), "src/content/docs");
const BLOG_DIR = join(process.cwd(), "src/content/blog");

type MarkdownResult = {
  readonly markdown: string;
  readonly status: 200 | 404;
};

interface DocFrontmatter {
  readonly title: string;
}

interface BlogFrontmatter {
  readonly title: string;
  readonly description: string;
  readonly date: string;
}

export interface BlogMeta {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
}

function normalizePagePath(pagePath: string): string {
  if (pagePath === "") {
    return "";
  }

  return pagePath.replace(/^\/+/, "").replace(/\/+$/, "");
}

function markdownFooter(pagePath: string): string {
  const normalizedPagePath = normalizePagePath(pagePath);
  const originalUrl =
    normalizedPagePath === ""
      ? `${SITE_URL}/`
      : `${SITE_URL}/${normalizedPagePath}/`;

  return `\n\n---\n*[View the styled HTML version of this page](${originalUrl})*\n\n*Tip: Append \`.md\` to any URL on ${SITE_URL} to get a clean Markdown version of that page.*`;
}

function getDocFilePath(slug: string): string {
  return join(DOCS_DIR, `${slug}.md`);
}

function getBlogFilePath(slug: string): string {
  return join(BLOG_DIR, `${slug}.md`);
}

export function renderHomeMarkdown(): MarkdownResult {
  const lines: string[] = [
    "# Flashcards",
    "",
    "Create cards. Review on time. Own your data.",
    "",
    "Open-source flashcards app with spaced repetition, a fast review queue, passwordless auth, and a self-hosted AWS/Postgres stack.",
    "",
    `- [Get Started](${APP_URL})`,
    `- [View on GitHub](${GITHUB_URL})`,
    "",
    "## Features",
    "",
    "- **Spaced Repetition** — Review cards with a built-in queue and server-side schedule updates.",
    "- **Fast Web MVP** — Create cards, browse your collection, and work through due items in the browser.",
    "- **Passwordless Auth** — Email OTP with shared-domain cookies across the auth and app subdomains.",
    "- **Self-Hosted** — Run Postgres, auth, backend, and web yourself.",
    "- **API Surface** — Use the existing `/v1/me`, `/v1/cards`, `/v1/review-queue`, and `/v1/reviews` endpoints.",
    "- **Offline-First Direction** — The repository is structured around an offline-first roadmap with iOS next.",
    "",
    `[Features](${SITE_URL}/features/) | [Pricing](${SITE_URL}/pricing/) | [Docs](${SITE_URL}/docs/) | [Blog](${SITE_URL}/blog/)`,
  ];

  return { markdown: lines.join("\n"), status: 200 };
}

export function renderFeaturesMarkdown(): MarkdownResult {
  const lines: string[] = [
    "# Features",
    "",
    "A focused flashcards stack: the current web MVP, the public API surface, and the infrastructure already in place for self-hosting and future mobile clients.",
    "",
  ];

  for (const f of FEATURES) {
    lines.push(`## ${f.title}`);
    lines.push("");
    lines.push(f.description);
    lines.push("");
  }

  return { markdown: lines.join("\n"), status: 200 };
}

export function renderPricingMarkdown(): MarkdownResult {
  const lines: string[] = [
    "# Pricing",
    "",
    "All features are available in every plan. No feature gating.",
    "",
    "## Self-Hosted — Free",
    "",
    "- Full source code on GitHub",
    "- Local Postgres + auth + backend + web stack",
    "- All current features included",
    "- Your domain, your data, your deployment",
    "- Adapt the stack for your own learning workflow",
    "",
    `[View on GitHub](${GITHUB_URL})`,
    "",
    "## Cloud Beta — Free during beta",
    "",
    "- Hosted web app on the project domain",
    "- Email OTP authentication",
    "- Shared-domain browser login flow",
    "- Managed AWS infrastructure",
    "- Early access while the product is still evolving",
    "",
    `[Get Started](${APP_URL})`,
  ];

  return { markdown: lines.join("\n"), status: 200 };
}

export function renderDocsListingMarkdown(): MarkdownResult {
  const lines: string[] = [
    "# Documentation",
    "",
  ];

  for (const doc of DOCS) {
    lines.push(`- [${doc.title}](${SITE_URL}/docs/${doc.slug}/): ${doc.description}`);
  }

  return { markdown: lines.join("\n"), status: 200 };
}

export function getBlogPosts(): ReadonlyArray<BlogMeta> {
  if (!existsSync(BLOG_DIR)) {
    return [];
  }

  return readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName): BlogMeta => {
      const raw = readFileSync(getBlogFilePath(fileName.replace(/\.md$/, "")), "utf-8");
      const { data } = matter(raw);
      const frontmatter = data as BlogFrontmatter;

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
      };
    })
    .sort((leftPost, rightPost) => (leftPost.date > rightPost.date ? -1 : 1));
}

export function renderDocMarkdown(slug: string): MarkdownResult {
  const filePath = getDocFilePath(slug);
  if (!existsSync(filePath)) {
    return { markdown: `# 404\n\nDocument not found: ${slug}`, status: 404 };
  }

  const raw = readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as DocFrontmatter;

  return { markdown: `# ${frontmatter.title}\n\n${content.trim()}`, status: 200 };
}

export function renderBlogListingMarkdown(): MarkdownResult {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    return { markdown: "# Blog\n\nPosts coming soon.", status: 200 };
  }

  const lines: string[] = [
    "# Blog",
    "",
  ];

  for (const post of posts) {
    lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}/) — ${post.date}: ${post.description}`);
  }

  return { markdown: lines.join("\n"), status: 200 };
}

export function renderBlogPostMarkdown(slug: string): MarkdownResult {
  const filePath = getBlogFilePath(slug);
  if (!existsSync(filePath)) {
    return { markdown: `# 404\n\nBlog post not found: ${slug}`, status: 404 };
  }

  const raw = readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;

  return {
    markdown: `# ${frontmatter.title}\n\n*${frontmatter.date}*\n\n${content.trim()}`,
    status: 200,
  };
}

export function renderPrivacyMarkdown(): MarkdownResult {
  const lines: string[] = [
    "# Privacy Policy",
    "",
    "**Last updated:** March 2026",
    "",
    "## What We Collect",
    "",
    "When you use the cloud beta, we store the flashcards data you create (cards, review history, workspace metadata) and your email address for authentication. Self-hosted instances do not send data to us unless you deploy your own copy that does so.",
    "",
    "## How We Use Your Data",
    "",
    "Your data is used solely to provide the service. We do not sell, share, or use your data for advertising. Authentication and workspace access are isolated by the backend services documented in the public repository.",
    "",
    "## Data Storage",
    "",
    "Cloud data is stored in AWS RDS (Postgres) in the eu-central-1 region with daily automated backups. Data is encrypted at rest and in transit.",
    "",
    "## Cookies",
    "",
    "We use authentication cookies such as `session`, `refresh`, and `logged_in` for the login flow. No tracking cookies or third-party analytics are required for the site to work.",
    "",
    "## Data Deletion",
    "",
    "For self-hosted instances, you control the database directly. The hosted beta is still evolving, so operational data removal may be a manual support action.",
    "",
    "## Open Source",
    "",
    "The entire codebase is open source. You can audit exactly what the application does with your data.",
  ];

  return { markdown: lines.join("\n"), status: 200 };
}

export function renderTermsMarkdown(): MarkdownResult {
  const lines: string[] = [
    "# Terms of Service",
    "",
    "**Last updated:** March 2026",
    "",
    "## Service",
    "",
    "Flashcards is an open-source spaced-repetition and flashcards tool. The cloud beta is provided as-is during the beta period at no cost.",
    "",
    "## Your Data",
    "",
    "You own your data. We do not claim any rights to the cards, review history, or other learning content you enter.",
    "",
    "## Acceptable Use",
    "",
    "Do not use the service for illegal activities, attempt to access other users' data, or abuse the API rate limits.",
    "",
    "## Availability",
    "",
    "The cloud service is provided on a best-effort basis. For guaranteed availability, self-host the application on your own infrastructure.",
    "",
    "## Open Source",
    "",
    "The source code is available under the MIT license. Self-hosted deployments are not subject to these terms.",
  ];

  return { markdown: lines.join("\n"), status: 200 };
}

export function listMarkdownPagePaths(): ReadonlyArray<string> {
  const blogPostPaths = getBlogPosts().map((post) => `blog/${post.slug}`);
  const docPaths = DOCS.map((doc) => `docs/${doc.slug}`);

  return [
    "",
    "features",
    "pricing",
    "docs",
    ...docPaths,
    "blog",
    ...blogPostPaths,
    "privacy",
    "terms",
  ];
}

export function renderMarkdownPage(pagePath: string): MarkdownResult {
  const normalizedPagePath = normalizePagePath(pagePath);

  if (normalizedPagePath === "" || normalizedPagePath === "home") {
    return renderHomeMarkdown();
  }

  if (normalizedPagePath === "features") {
    return renderFeaturesMarkdown();
  }

  if (normalizedPagePath === "pricing") {
    return renderPricingMarkdown();
  }

  if (normalizedPagePath === "docs") {
    return renderDocsListingMarkdown();
  }

  if (normalizedPagePath.startsWith("docs/")) {
    return renderDocMarkdown(normalizedPagePath.replace(/^docs\//, ""));
  }

  if (normalizedPagePath === "blog") {
    return renderBlogListingMarkdown();
  }

  if (normalizedPagePath.startsWith("blog/")) {
    return renderBlogPostMarkdown(normalizedPagePath.replace(/^blog\//, ""));
  }

  if (normalizedPagePath === "privacy") {
    return renderPrivacyMarkdown();
  }

  if (normalizedPagePath === "terms") {
    return renderTermsMarkdown();
  }

  return {
    markdown: `# 404\n\nPage not found: /${normalizedPagePath}`,
    status: 404,
  };
}

export function renderMarkdownDocument(pagePath: string): MarkdownResult {
  const result = renderMarkdownPage(pagePath);

  if (result.status !== 200) {
    return result;
  }

  return {
    markdown: `${result.markdown}${markdownFooter(pagePath)}`,
    status: 200,
  };
}

export function renderLlmsText(): string {
  const posts = getBlogPosts();

  const docsSection = DOCS.map(
    (doc) => `- [${doc.title}](${SITE_URL}/docs/${doc.slug}/): ${doc.description}`
  ).join("\n");

  const blogSection =
    posts.length > 0
      ? posts
          .map(
            (post) =>
              `- [${post.title}](${SITE_URL}/blog/${post.slug}/): ${post.description}`
          )
          .join("\n")
      : "- Posts coming soon.";

  return `# Flashcards

> Open-source flashcards app with spaced repetition, review queue, passwordless auth, and a self-hosted AWS/Postgres deployment path.

## Documentation

${docsSection}

## Blog

${blogSection}

## Pages

- [Home](${SITE_URL}/): Product overview and feature highlights
- [Features](${SITE_URL}/features/): Detailed feature list
- [Pricing](${SITE_URL}/pricing/): Self-hosted (free) and cloud beta plans
- [Privacy Policy](${SITE_URL}/privacy/): Data handling practices
- [Terms of Service](${SITE_URL}/terms/): Usage terms

## Links

- [GitHub Repository](${GITHUB_URL})
- [Cloud App](${APP_URL})

## Markdown Access

Any page on this site is available as clean Markdown for LLM consumption:
- Append \`.md\` to any URL (e.g. ${SITE_URL}/.md, ${SITE_URL}/features.md, ${SITE_URL}/docs/api.md)
- Or send the HTTP header \`Accept: text/markdown\` to get Markdown from the original URL`;
}
