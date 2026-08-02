import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogBrowsePageView } from "@/components/PublicCatalogBrowsePageView";
import { readPublicCatalog } from "@/lib/publicCatalogData";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import { PUBLIC_CATALOG_ROUTE_PATHNAME } from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

const locale = "en" as const;

export function generateMetadata(): Metadata {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  const copy = getPublicCatalogUiCopy(locale);

  return createPublicCatalogMetadata({
    description: copy.intro,
    locale,
    publishedTime: null,
    routePathname: PUBLIC_CATALOG_ROUTE_PATHNAME,
    title: copy.title,
    type: "website",
  });
}

export default function PublicCatalogPage(): React.JSX.Element {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return <PublicCatalogBrowsePageView catalog={catalog} locale={locale} />;
}
