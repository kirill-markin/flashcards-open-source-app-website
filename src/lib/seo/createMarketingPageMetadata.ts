import type { Metadata } from "next";
import { readPageContent } from "@/lib/content/readPageContent";
import type { MarketingPageSlug } from "@/lib/content/types";
import type { AppLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";

function getMarketingRoutePathname(slug: MarketingPageSlug): string {
  if (slug === "home") {
    return "/";
  }

  return `/${slug}/`;
}

export function createMarketingPageMetadata(
  slug: MarketingPageSlug,
  locale: AppLocale
): Metadata {
  const pageContent = readPageContent(slug, locale);

  return createPageMetadata({
    title: pageContent.title,
    description: pageContent.description,
    locale,
    routePathname: getMarketingRoutePathname(slug),
    openGraphType: "website",
  });
}
