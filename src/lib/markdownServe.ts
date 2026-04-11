import { DOC_SLUGS } from "@/data/docs";
import { listBlogPosts, readBlogPost } from "@/lib/blog";
import { getDocs, readDoc } from "@/lib/docs";
import {
  getLocalizedPathname,
  resolveLocaleFromPathname,
  SUPPORTED_LOCALES,
  type AppLocale,
} from "@/lib/i18n";
import { localizeInternalLinks } from "@/lib/localizeInternalLinks";
import {
  getMarketingPageFromPath,
  listMarketingPagePaths,
  readAllMarketingPages,
  readPageContent,
} from "@/lib/content/readPageContent";
import {
  renderMarketingPageMarkdown,
  type MarkdownSiteContext,
} from "@/lib/content/renderMarkdown";
import { getUiCopy } from "@/lib/uiCopy";

const SITE_CONTEXT: MarkdownSiteContext = {
  siteUrl: "https://flashcards-open-source-app.com",
  appUrl: "https://app.flashcards-open-source-app.com",
  githubUrl: "https://github.com/kirill-markin/flashcards-open-source-app",
};
const DISCOVERY_URL = "https://api.flashcards-open-source-app.com/v1/";
type MarkdownResult = {
  readonly markdown: string;
  readonly status: 200 | 404;
};

export interface BlogMeta {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
}

function getOriginalPageUrl(pagePath: string): string {
  if (pagePath === "") {
    return `${SITE_CONTEXT.siteUrl}/`;
  }

  return `${SITE_CONTEXT.siteUrl}/${pagePath}/`;
}

function appendMarkdownFooter(
  markdown: string,
  locale: AppLocale,
  pagePath: string
): string {
  const htmlVersionLine =
    locale === "es"
      ? `*[Ver la version HTML con estilo de esta pagina](${getOriginalPageUrl(pagePath)})*`
      : `*[View the styled HTML version of this page](${getOriginalPageUrl(pagePath)})*`;
  const agentLine =
    locale === "es"
      ? `*Los agentes de IA pueden crear una cuenta para el usuario en este servicio comenzando con \`GET ${DISCOVERY_URL}\`.*`
      : `*AI agents can create an account for the user in this service by starting with \`GET ${DISCOVERY_URL}\`.*`;
  const markdownTipLine =
    locale === "es"
      ? `*Consejo: Anade \`.md\` a cualquier URL en ${SITE_CONTEXT.siteUrl} para obtener una version limpia en Markdown de esa pagina.*`
      : `*Tip: Append \`.md\` to any URL on ${SITE_CONTEXT.siteUrl} to get a clean Markdown version of that page.*`;

  return `${markdown.trim()}\n\n---\n${htmlVersionLine}\n\n${agentLine}\n\n${markdownTipLine}`;
}

function renderMarketingPageMarkdownDocument(pagePath: string): MarkdownResult {
  const page = getMarketingPageFromPath(pagePath);

  if (page === null) {
    return { markdown: `# 404\n\nPage not found: /${pagePath}`, status: 404 };
  }

  const pageContent = readPageContent(page.slug, page.locale);

  return {
    markdown: appendMarkdownFooter(
      renderMarketingPageMarkdown(pageContent, page.locale),
      page.locale,
      pagePath
    ),
    status: 200,
  };
}

export function renderDocsListingMarkdown(locale: AppLocale): MarkdownResult {
  const uiCopy = getUiCopy(locale);
  const lines: string[] = [
    `# ${uiCopy.docs.title}`,
    "",
  ];

  for (const doc of getDocs(locale, DOC_SLUGS)) {
    const docPath = getLocalizedPathname(locale, `/docs/${doc.slug}/`);

    lines.push(
      `- [${doc.title}](${SITE_CONTEXT.siteUrl}${docPath}): ${doc.description}`
    );
  }

  return {
    markdown: appendMarkdownFooter(
      lines.join("\n"),
      locale,
      getPagePath(getLocalizedPathname(locale, "/docs/"))
    ),
    status: 200,
  };
}

export function getBlogPosts(locale: AppLocale): ReadonlyArray<BlogMeta> {
  return listBlogPosts(locale).map((post): BlogMeta => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
  }));
}

export function renderDocMarkdown(
  locale: AppLocale,
  slug: string
): MarkdownResult {
  const doc = readDoc(locale, slug);

  if (doc === null) {
    return { markdown: `# 404\n\nDocument not found: ${slug}`, status: 404 };
  }

  const docPath = getPagePath(getLocalizedPathname(locale, `/docs/${slug}/`));

  return {
    markdown: appendMarkdownFooter(
      `# ${doc.title}\n\n${localizeInternalLinks(doc.bodyMarkdown, locale)}`,
      locale,
      docPath
    ),
    status: 200,
  };
}

export function renderBlogListingMarkdown(locale: AppLocale): MarkdownResult {
  const posts = getBlogPosts(locale);
  const uiCopy = getUiCopy(locale);

  if (posts.length === 0) {
    return {
      markdown:
        locale === "es"
          ? "# Blog\n\nPublicaciones proximamente."
          : "# Blog\n\nPosts coming soon.",
      status: 200,
    };
  }

  const lines: string[] = [
    `# ${uiCopy.blog.title}`,
    "",
  ];

  for (const post of posts) {
    const postPath = getLocalizedPathname(locale, `/blog/${post.slug}/`);

    lines.push(
      `- [${post.title}](${SITE_CONTEXT.siteUrl}${postPath}) — ${post.date}: ${post.description}`
    );
  }

  return {
    markdown: appendMarkdownFooter(
      lines.join("\n"),
      locale,
      getPagePath(getLocalizedPathname(locale, "/blog/"))
    ),
    status: 200,
  };
}

export function renderBlogPostMarkdown(
  locale: AppLocale,
  slug: string
): MarkdownResult {
  const post = readBlogPost(locale, slug);

  if (post === null) {
    return { markdown: `# 404\n\nBlog post not found: ${slug}`, status: 404 };
  }

  const postPath = getPagePath(getLocalizedPathname(locale, `/blog/${slug}/`));

  return {
    markdown: appendMarkdownFooter(
      `# ${post.title}\n\n*${post.date}*\n\n${localizeInternalLinks(
        post.bodyMarkdown.trim(),
        locale
      )}`,
      locale,
      postPath
    ),
    status: 200,
  };
}

export function listMarkdownPagePaths(): ReadonlyArray<string> {
  const localizedDocsAndBlogPaths = SUPPORTED_LOCALES.flatMap((locale) => {
      const blogPostPaths = getBlogPosts(locale).map((post) =>
        getPagePath(getLocalizedPathname(locale, `/blog/${post.slug}/`))
      );
      const docPaths = getDocs(locale, DOC_SLUGS).map((doc) =>
        getPagePath(getLocalizedPathname(locale, `/docs/${doc.slug}/`))
      );

      return [
        getPagePath(getLocalizedPathname(locale, "/docs/")),
        ...docPaths,
        getPagePath(getLocalizedPathname(locale, "/blog/")),
        ...blogPostPaths,
      ];
    });

  return [
    ...listMarketingPagePaths(),
    ...localizedDocsAndBlogPaths,
  ];
}

export function renderMarkdownDocument(pagePath: string): MarkdownResult {
  const marketingPageResult = renderMarketingPageMarkdownDocument(pagePath);

  if (marketingPageResult.status === 200) {
    return marketingPageResult;
  }

  const pagePathname = pagePath === "" ? "/" : `/${pagePath}/`;
  const { locale, routePathname } = resolveLocaleFromPathname(pagePathname);
  const normalizedRoutePathname = routePathname.replace(/\/+$/, "") || "/";

  if (normalizedRoutePathname === "/docs") {
    return renderDocsListingMarkdown(locale);
  }

  if (normalizedRoutePathname.startsWith("/docs/")) {
    return renderDocMarkdown(locale, normalizedRoutePathname.replace(/^\/docs\//, ""));
  }

  if (normalizedRoutePathname === "/blog") {
    return renderBlogListingMarkdown(locale);
  }

  if (normalizedRoutePathname.startsWith("/blog/")) {
    return renderBlogPostMarkdown(
      locale,
      normalizedRoutePathname.replace(/^\/blog\//, "")
    );
  }

  return marketingPageResult;
}

export function renderLlmsText(): string {
  const pagesSection = readAllMarketingPages("en")
    .map((pageContent) => {
      const pageHref =
        pageContent.slug === "home"
          ? `${SITE_CONTEXT.siteUrl}/`
          : `${SITE_CONTEXT.siteUrl}/${pageContent.slug}/`;

      return `- [${pageContent.title}](${pageHref}): ${pageContent.description}`;
    })
    .join("\n");

  const posts = getBlogPosts("en");

  const docsSection = getDocs("en", DOC_SLUGS).map(
    (doc) =>
      `- [${doc.title}](${SITE_CONTEXT.siteUrl}/docs/${doc.slug}/): ${doc.description}`
  ).join("\n");

  const blogSection =
    posts.length > 0
      ? posts
          .map(
            (post) =>
              `- [${post.title}](${SITE_CONTEXT.siteUrl}/blog/${post.slug}/): ${post.description}`
          )
          .join("\n")
      : "- Posts coming soon.";

  return `# Flashcards

> Open-source flashcards app with spaced repetition, web and iOS clients, agent-ready onboarding, and a self-hosted AWS/Postgres deployment path.

## Pages

${pagesSection}

## Documentation

${docsSection}

## Blog

${blogSection}

## Links

- [GitHub Repository](${SITE_CONTEXT.githubUrl})
- [Cloud App](${SITE_CONTEXT.appUrl})

## Markdown Access

Any page on this site is available as clean Markdown for LLM consumption:
- Append \`.md\` to any URL (e.g. ${SITE_CONTEXT.siteUrl}/.md, ${SITE_CONTEXT.siteUrl}/features.md, ${SITE_CONTEXT.siteUrl}/docs/api.md)
- Or send the HTTP header \`Accept: text/markdown\` to get Markdown from the original URL`;
}

function getPagePath(pathname: string): string {
  return pathname === "/" ? "" : pathname.replace(/^\/+/, "").replace(/\/+$/, "");
}
