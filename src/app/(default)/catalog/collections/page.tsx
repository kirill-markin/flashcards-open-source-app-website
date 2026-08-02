import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogCollectionsPageView } from "@/components/PublicCatalogCollectionsPageView";
import { readPublicCatalog } from "@/lib/publicCatalogData";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import { PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME } from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

const locale = "en" as const;

export function generateMetadata(): Metadata {
  if (readPublicCatalog() === null) {
    notFound();
  }

  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    description: copy.collectionsIntro,
    locale,
    publishedTime: null,
    routePathname: PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
    title: copy.collectionsTitle,
    type: "website",
  });
}

export default function PublicCatalogCollectionsPage(): React.JSX.Element {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return <PublicCatalogCollectionsPageView catalog={catalog} locale={locale} />;
}
