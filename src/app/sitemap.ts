import type { MetadataRoute } from "next";
import { join } from "path";
import { BLOG_POST_SLUGS } from "@/data/blog";
import { DOC_SLUGS } from "@/data/docs";
import { hasBlogTranslation } from "@/lib/blog";
import {
  getBlogDirectory,
  getBlogFilePath,
  getDocFilePath,
  getDocsDirectory,
} from "@/lib/content/paths";
import { hasDocTranslation } from "@/lib/docs";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  SUPPORTED_LOCALES,
  type AppLocale,
} from "@/lib/i18n";
import { getGlobalActivitySnapshotGeneratedFilePath } from "@/lib/globalActivitySnapshot";
import { DASHBOARDS_ROUTE_PATHNAME } from "@/lib/dashboardsPage";
import {
  getLanguageAlternates,
  hasRouteTranslation,
} from "@/lib/routeTranslations";
import {
  getMarketingPageSourceFilePath,
  hasMarketingPageTranslation,
  MARKETING_PAGE_SLUGS,
} from "@/lib/content/readPageContent";
import {
  getFileLastModified,
  getNewestDirectoryFileLastModified,
} from "@/lib/sitemap/getLastModified";

const DEFAULT_ROUTES_DIR = join(process.cwd(), "src/app", "(default)");

function getMarketingRoutePathname(
  slug: (typeof MARKETING_PAGE_SLUGS)[number]
): string {
  if (slug === "home") {
    return "/";
  }

  return `/${slug}/`;
}

function getMarketingPriority(
  slug: (typeof MARKETING_PAGE_SLUGS)[number]
): number {
  switch (slug) {
    case "home":
      return 1;
    case "features":
    case "pricing":
      return 0.8;
    case "privacy":
    case "support":
    case "terms":
      return 0.3;
    default:
      throw new Error(`Unsupported marketing page slug in sitemap: ${slug}`);
  }
}

function getMarketingChangeFrequency(
  slug: (typeof MARKETING_PAGE_SLUGS)[number]
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  switch (slug) {
    case "home":
      return "weekly";
    case "features":
    case "pricing":
      return "monthly";
    case "privacy":
    case "support":
    case "terms":
      return "yearly";
    default:
      throw new Error(`Unsupported marketing page slug in sitemap: ${slug}`);
  }
}

function getMarketingEntries(): MetadataRoute.Sitemap {
  return MARKETING_PAGE_SLUGS.flatMap((slug) => {
    const routePathname = getMarketingRoutePathname(slug);

    return SUPPORTED_LOCALES.filter((locale) =>
      hasMarketingPageTranslation(slug, locale)
    ).map((locale) => ({
      url: getAbsoluteUrl(getLocalizedPathname(locale, routePathname)),
      lastModified: getFileLastModified(getMarketingPageSourceFilePath(slug, locale)),
      changeFrequency: getMarketingChangeFrequency(slug),
      priority: getMarketingPriority(slug),
      alternates: {
        languages: getLanguageAlternates(routePathname),
      },
    }));
  });
}

function getDashboardsEntries(): MetadataRoute.Sitemap {
  return getLocalizedContentEntries(
    DASHBOARDS_ROUTE_PATHNAME,
    0.7,
    "daily",
    () =>
      getFileLastModified(
        getGlobalActivitySnapshotGeneratedFilePath(process.cwd())
      )
  );
}

function getLocalizedContentEntries(
  routePathname: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  getLastModified: (locale: AppLocale) => Date
): MetadataRoute.Sitemap {
  return SUPPORTED_LOCALES.filter((locale) =>
    hasRouteTranslation(routePathname, locale)
  ).map((locale) => ({
    url: getAbsoluteUrl(getLocalizedPathname(locale, routePathname)),
    lastModified: getLastModified(locale),
    changeFrequency,
    priority,
    alternates: {
      languages: getLanguageAlternates(routePathname),
    },
  }));
}

function getDocsEntries(): MetadataRoute.Sitemap {
  const docsIndexEntries = getLocalizedContentEntries(
    "/docs/",
    0.7,
    "monthly",
    (locale) => {
      const lastModified = getNewestDirectoryFileLastModified(getDocsDirectory(locale));

      if (lastModified === null) {
        throw new Error(
          `Missing localized docs markdown files for sitemap locale: ${locale}`
        );
      }

      return lastModified;
    }
  );

  const docEntries = DOC_SLUGS.flatMap((slug) =>
    SUPPORTED_LOCALES.filter((locale) => hasDocTranslation(slug, locale)).map(
      (locale) => ({
        url: getAbsoluteUrl(getLocalizedPathname(locale, `/docs/${slug}/`)),
        lastModified: getFileLastModified(getDocFilePath(locale, slug)),
        changeFrequency: "monthly" as const,
        priority: 0.5,
        alternates: {
          languages: getLanguageAlternates(`/docs/${slug}/`),
        },
      })
    )
  );

  return [...docsIndexEntries, ...docEntries];
}

function getBlogEntries(): MetadataRoute.Sitemap {
  const blogIndexEntries = getLocalizedContentEntries(
    "/blog/",
    0.7,
    "weekly",
    (locale) => {
      const lastModified =
        getNewestDirectoryFileLastModified(getBlogDirectory(locale)) ??
        getFileLastModified(join(DEFAULT_ROUTES_DIR, "blog", "page.tsx"));

      return lastModified;
    }
  );

  const blogEntries = BLOG_POST_SLUGS.flatMap((slug) =>
    SUPPORTED_LOCALES.filter((locale) => hasBlogTranslation(slug, locale)).map(
      (locale) => ({
        url: getAbsoluteUrl(getLocalizedPathname(locale, `/blog/${slug}/`)),
        lastModified: getFileLastModified(getBlogFilePath(locale, slug)),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: {
          languages: getLanguageAlternates(`/blog/${slug}/`),
        },
      })
    )
  );

  return [...blogIndexEntries, ...blogEntries];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...getMarketingEntries(),
    ...getDashboardsEntries(),
    ...getDocsEntries(),
    ...getBlogEntries(),
  ];
}
