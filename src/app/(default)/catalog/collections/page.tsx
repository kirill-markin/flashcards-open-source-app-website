import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogCollectionsPageView } from "@/components/PublicCatalogCollectionsPageView";
import { readPublicCatalog } from "@/lib/publicCatalogData";
import { createPublicCatalogCollectionsMetadata } from "@/lib/seo/createPublicCatalogMetadata";

const locale = "en" as const;

export function generateMetadata(): Metadata {
  if (readPublicCatalog() === null) {
    notFound();
  }

  return createPublicCatalogCollectionsMetadata(locale);
}

export default function PublicCatalogCollectionsPage(): React.JSX.Element {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return <PublicCatalogCollectionsPageView catalog={catalog} locale={locale} />;
}
