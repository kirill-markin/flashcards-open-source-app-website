import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogAuthorsPageView } from "@/components/PublicCatalogAuthorsPageView";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import { readPublicCatalog } from "@/lib/publicCatalogData";
import { PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME } from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

const locale = "en" as const;

export function generateMetadata(): Metadata {
  if (readPublicCatalog() === null) {
    notFound();
  }

  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    description: copy.authorsIntro,
    locale,
    publishedTime: null,
    routePathname: PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
    title: copy.authorsTitle,
    type: "website",
  });
}

export default function PublicCatalogAuthorsPage(): React.JSX.Element {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return <PublicCatalogAuthorsPageView catalog={catalog} locale={locale} />;
}
