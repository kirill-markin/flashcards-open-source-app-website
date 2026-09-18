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
  const metadata = createPageMetadata({
    title: pageContent.title,
    description: pageContent.description,
    locale,
    routePathname: getMarketingRoutePathname(slug),
    openGraphType: "website",
  });

  if (slug !== "home") {
    return metadata;
  }

  // The root layout appends the site name to every page title, and the home
  // title already names the brand, so keep the home title absolute.
  return { ...metadata, title: { absolute: pageContent.title } };
}
