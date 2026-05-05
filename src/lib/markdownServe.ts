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
import { hasRouteTranslation } from "@/lib/routeTranslations";
import {
  getMarketingPageFromPath,
  hasMarketingPageTranslation,
  listMarketingPagePaths,
  readAllMarketingPages,
  readPageContent,
} from "@/lib/content/readPageContent";
import {
  renderMarketingPageMarkdown,
  type MarketingPageMarkdownContext,
  type MarkdownSiteContext,
} from "@/lib/content/renderMarkdown";
import {
  globalActivitySnapshotUrl,
  type GlobalActivitySnapshot,
  type GlobalActivitySnapshotDay,
  serializeGlobalActivitySnapshot,
} from "@/lib/globalActivitySnapshot";
import {
  DASHBOARDS_ROUTE_PATHNAME,
  getDashboardsPageDescription,
  getDashboardsPageTitle,
} from "@/lib/dashboardsPage";
import { getUiCopy } from "@/lib/uiCopy";

const SITE_CONTEXT: MarkdownSiteContext = {
  siteUrl: "https://flashcards-open-source-app.com",
  appUrl: "https://app.flashcards-open-source-app.com",
  githubUrl: "https://github.com/kirill-markin/flashcards-open-source-app",
};
const DISCOVERY_URL = "https://api.flashcards-open-source-app.com/v1/";
const DASHBOARDS_NORMALIZED_ROUTE_PATHNAME =
  DASHBOARDS_ROUTE_PATHNAME.replace(/\/+$/, "");
type MarkdownResult = {
  readonly markdown: string;
  readonly status: 200 | 404;
};

function getMaxGlobalActivityDailyValue(
  days: ReadonlyArray<GlobalActivitySnapshotDay>,
  getValue: (day: GlobalActivitySnapshotDay) => number,
  label: string
): number {
  const [firstDay] = days;

  if (firstDay === undefined) {
    throw new Error(`Global activity snapshot days must not be empty when rendering llms.txt ${label}.`);
  }

  return days.reduce<number>(
    (maxValue, day) => Math.max(maxValue, getValue(day)),
    getValue(firstDay)
  );
}

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
  const footerCopyByLocale: Readonly<
    Record<
      AppLocale,
      {
        readonly agent: string;
        readonly htmlVersion: string;
        readonly markdownTip: string;
      }
    >
  > = {
    en: {
      agent: `*AI agents can create an account for the user in this service by starting with \`GET ${DISCOVERY_URL}\`.*`,
      htmlVersion: `*[View the styled HTML version of this page](${getOriginalPageUrl(pagePath)})*`,
      markdownTip: `*Tip: Append \`.md\` to any URL on ${SITE_CONTEXT.siteUrl} to get a clean Markdown version of that page.*`,
    },
    es: {
      agent: `*Los agentes de IA pueden crear una cuenta para el usuario en este servicio empezando con \`GET ${DISCOVERY_URL}\`.*`,
      htmlVersion: `*[Ver la versión HTML con estilo de esta página](${getOriginalPageUrl(pagePath)})*`,
      markdownTip: `*Consejo: añade \`.md\` a cualquier URL en ${SITE_CONTEXT.siteUrl} para obtener una versión limpia en Markdown de esa página.*`,
    },
    ar: {
      agent: `*يمكن لوكلاء الذكاء الاصطناعي إنشاء حساب للمستخدم في هذه الخدمة بدءًا من \`GET ${DISCOVERY_URL}\`.*`,
      htmlVersion: `*[عرض النسخة المنسقة HTML من هذه الصفحة](${getOriginalPageUrl(pagePath)})*`,
      markdownTip: `*نصيحة: أضف \`.md\` إلى أي رابط على ${SITE_CONTEXT.siteUrl} للحصول على نسخة Markdown نظيفة من الصفحة.*`,
    },
    de: {
      agent: `*KI-Agenten können in diesem Dienst ein Benutzerkonto anlegen, beginnend mit \`GET ${DISCOVERY_URL}\`.*`,
      htmlVersion: `*[Die gestaltete HTML-Version dieser Seite ansehen](${getOriginalPageUrl(pagePath)})*`,
      markdownTip: `*Tipp: Hänge \`.md\` an jede URL auf ${SITE_CONTEXT.siteUrl} an, um eine saubere Markdown-Version der Seite zu erhalten.*`,
    },
    hi: {
      agent: `*AI agent इस सेवा में उपयोगकर्ता का अकाउंट \`GET ${DISCOVERY_URL}\` से शुरू करके बना सकते हैं।*`,
      htmlVersion: `*[इस पेज का styled HTML संस्करण देखें](${getOriginalPageUrl(pagePath)})*`,
      markdownTip: `*टिप: ${SITE_CONTEXT.siteUrl} पर किसी भी URL के अंत में \`.md\` जोड़ें ताकि उसका साफ़ Markdown संस्करण मिले।*`,
    },
    ja: {
      agent: `*AI エージェントは \`GET ${DISCOVERY_URL}\` から開始して、このサービスでユーザーアカウントを作成できます。*`,
      htmlVersion: `*[このページのスタイル付き HTML 版を見る](${getOriginalPageUrl(pagePath)})*`,
      markdownTip: `*ヒント: ${SITE_CONTEXT.siteUrl} の任意の URL に \`.md\` を付けると、ページのクリーンな Markdown 版を取得できます。*`,
    },
    ru: {
      agent: `*AI-агенты могут создать аккаунт пользователя в этом сервисе, начиная с \`GET ${DISCOVERY_URL}\`.*`,
      htmlVersion: `*[Открыть оформленную HTML-версию этой страницы](${getOriginalPageUrl(pagePath)})*`,
      markdownTip: `*Совет: добавьте \`.md\` к любому URL на ${SITE_CONTEXT.siteUrl}, чтобы получить чистую Markdown-версию страницы.*`,
    },
    zh: {
      agent: `*AI agent 可以从 \`GET ${DISCOVERY_URL}\` 开始，为用户在该服务中创建账号。*`,
      htmlVersion: `*[查看此页面的带样式 HTML 版本](${getOriginalPageUrl(pagePath)})*`,
      markdownTip: `*提示：在 ${SITE_CONTEXT.siteUrl} 上任意 URL 后追加 \`.md\`，即可获得该页面的纯 Markdown 版本。*`,
    },
  };
  const footerCopy = footerCopyByLocale[locale];

  return `${markdown.trim()}\n\n---\n${footerCopy.htmlVersion}\n\n${footerCopy.agent}\n\n${footerCopy.markdownTip}`;
}

function renderMarketingPageMarkdownDocument(
  pagePath: string,
  context: MarketingPageMarkdownContext
): MarkdownResult {
  const page = getMarketingPageFromPath(pagePath);

  if (page === null) {
    return { markdown: `# 404\n\nPage not found: /${pagePath}`, status: 404 };
  }

  if (!hasMarketingPageTranslation(page.slug, page.locale)) {
    return { markdown: `# 404\n\nPage not found: /${pagePath}`, status: 404 };
  }

  const pageContent = readPageContent(page.slug, page.locale);

  return {
    markdown: appendMarkdownFooter(
      renderMarketingPageMarkdown(pageContent, page.locale, context),
      page.locale,
      pagePath
    ),
    status: 200,
  };
}

function renderDashboardsMarkdown(
  locale: AppLocale,
  context: MarketingPageMarkdownContext
): MarkdownResult {
  const activityCopy = getUiCopy(locale).home.activity;
  const pagePath = getPagePath(
    getLocalizedPathname(locale, DASHBOARDS_ROUTE_PATHNAME)
  );
  const lines = [
    `# ${getDashboardsPageTitle(locale)}`,
    "",
    getDashboardsPageDescription(locale),
    "",
    `- [${activityCopy.sourceLabel}](${globalActivitySnapshotUrl})`,
    "",
    `## ${activityCopy.dailyUniqueUsersChartTitle}`,
    "",
    activityCopy.dailyUniqueUsersChartDescription,
    "",
    `## ${activityCopy.platformActivityChartTitle}`,
    "",
    activityCopy.platformActivityChartDescription,
    "",
    "Build-time raw snapshot:",
    "",
    "```json",
    serializeGlobalActivitySnapshot(context.globalActivitySnapshot).trim(),
    "```",
  ];

  return {
    markdown: appendMarkdownFooter(lines.join("\n"), locale, pagePath),
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
      markdown: `# ${uiCopy.blog.title}\n\n${uiCopy.blog.empty}`,
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
  const localizedDashboardPaths = SUPPORTED_LOCALES.filter((locale) =>
    hasRouteTranslation(DASHBOARDS_ROUTE_PATHNAME, locale)
  ).map((locale) =>
    getPagePath(getLocalizedPathname(locale, DASHBOARDS_ROUTE_PATHNAME))
  );
  const localizedDocsAndBlogPaths = SUPPORTED_LOCALES.flatMap((locale) => {
    const blogPostPaths = getBlogPosts(locale).map((post) =>
      getPagePath(getLocalizedPathname(locale, `/blog/${post.slug}/`))
    );
    const docPaths = getDocs(locale, DOC_SLUGS).map((doc) =>
      getPagePath(getLocalizedPathname(locale, `/docs/${doc.slug}/`))
    );
    const docsIndexPath = hasRouteTranslation("/docs/", locale)
      ? [getPagePath(getLocalizedPathname(locale, "/docs/"))]
      : [];
    const blogIndexPath = hasRouteTranslation("/blog/", locale)
      ? [getPagePath(getLocalizedPathname(locale, "/blog/"))]
      : [];

    return [...docsIndexPath, ...docPaths, ...blogIndexPath, ...blogPostPaths];
  });

  return [
    ...listMarketingPagePaths(),
    ...localizedDashboardPaths,
    ...localizedDocsAndBlogPaths,
  ];
}

export function renderMarkdownDocument(
  pagePath: string,
  context: MarketingPageMarkdownContext
): MarkdownResult {
  const marketingPageResult = renderMarketingPageMarkdownDocument(pagePath, context);

  if (marketingPageResult.status === 200) {
    return marketingPageResult;
  }

  const pagePathname = pagePath === "" ? "/" : `/${pagePath}/`;
  const { locale, routePathname } = resolveLocaleFromPathname(pagePathname);
  const normalizedRoutePathname = routePathname.replace(/\/+$/, "") || "/";

  if (
    normalizedRoutePathname === DASHBOARDS_NORMALIZED_ROUTE_PATHNAME &&
    hasRouteTranslation(DASHBOARDS_ROUTE_PATHNAME, locale)
  ) {
    return renderDashboardsMarkdown(locale, context);
  }

  if (normalizedRoutePathname === "/docs" && hasRouteTranslation("/docs/", locale)) {
    return renderDocsListingMarkdown(locale);
  }

  if (normalizedRoutePathname.startsWith("/docs/")) {
    return renderDocMarkdown(locale, normalizedRoutePathname.replace(/^\/docs\//, ""));
  }

  if (normalizedRoutePathname === "/blog" && hasRouteTranslation("/blog/", locale)) {
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

export function renderLlmsText(globalActivitySnapshot: GlobalActivitySnapshot): string {
  const activityCopy = getUiCopy("en").home.activity;
  const peakDailyReviewEvents = getMaxGlobalActivityDailyValue(
    globalActivitySnapshot.days,
    (day) => day.reviewEvents.total,
    "peak daily review events"
  );
  const peakDailyUniqueUsers = getMaxGlobalActivityDailyValue(
    globalActivitySnapshot.days,
    (day) => day.uniqueReviewingUsers,
    "peak daily unique users"
  );
  const dashboardsPageTitle = getDashboardsPageTitle("en");
  const dashboardsPageDescription = getDashboardsPageDescription("en");
  const dashboardsPageUrl = `${SITE_CONTEXT.siteUrl}${DASHBOARDS_ROUTE_PATHNAME}`;
  const dashboardsPageLine =
    `- [${dashboardsPageTitle}](${dashboardsPageUrl}): ${dashboardsPageDescription}`;
  const pagesSection = readAllMarketingPages("en")
    .map((pageContent) => {
      const pageHref =
        pageContent.slug === "home"
          ? `${SITE_CONTEXT.siteUrl}/`
          : `${SITE_CONTEXT.siteUrl}/${pageContent.slug}/`;

      return `- [${pageContent.title}](${pageHref}): ${pageContent.description}`;
    })
    .concat(dashboardsPageLine)
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
  const publicActivitySection = [
    `- [Snapshot JSON](${globalActivitySnapshotUrl})`,
    `- Generated at UTC: ${globalActivitySnapshot.generatedAtUtc}`,
    `- Date window: ${globalActivitySnapshot.from} to ${globalActivitySnapshot.to}`,
    `- ${activityCopy.totalReviewEventsLabel}: ${globalActivitySnapshot.totals.reviewEvents.total}`,
    `- ${activityCopy.usersWithReviewEventsLabel}: ${globalActivitySnapshot.totals.uniqueReviewingUsers}`,
    `- ${activityCopy.daysInRangeLabel}: ${globalActivitySnapshot.days.length}`,
    `- ${activityCopy.peakDailyVolumeLabel}: ${peakDailyReviewEvents}`,
    `- ${activityCopy.peakDailyUniqueUsersLabel}: ${peakDailyUniqueUsers}`,
    `- ${activityCopy.dailyUniqueUsersChartTitle}: ${activityCopy.dailyUniqueUsersChartDescription}`,
    `- ${activityCopy.platformActivityChartTitle}: ${activityCopy.platformActivityChartDescription}`,
  ].join("\n");

  return `# Flashcards

> Open-source flashcards app with spaced repetition, web and iOS clients, agent-ready onboarding, and a self-hosted AWS/Postgres deployment path.

## Pages

${pagesSection}

## Documentation

${docsSection}

## Blog

${blogSection}

## Public Activity Snapshot

${publicActivitySection}

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
