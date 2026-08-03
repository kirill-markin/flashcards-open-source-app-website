import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogAuthorsPageView } from "@/components/PublicCatalogAuthorsPageView";
import { readPublicCatalog } from "@/lib/publicCatalogData";
import { createPublicCatalogAuthorsMetadata } from "@/lib/seo/createPublicCatalogMetadata";

const locale = "en" as const;

export function generateMetadata(): Metadata {
  if (readPublicCatalog() === null) {
    notFound();
  }

  return createPublicCatalogAuthorsMetadata(locale);
}

export default function PublicCatalogAuthorsPage(): React.JSX.Element {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return <PublicCatalogAuthorsPageView catalog={catalog} locale={locale} />;
}
