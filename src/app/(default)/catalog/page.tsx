import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogBrowsePageView } from "@/components/PublicCatalogBrowsePageView";
import { readPublicCatalog } from "@/lib/publicCatalogData";
import { createPublicCatalogRootMetadata } from "@/lib/seo/createPublicCatalogMetadata";

const locale = "en" as const;

export function generateMetadata(): Metadata {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return createPublicCatalogRootMetadata(locale);
}

export default function PublicCatalogPage(): React.JSX.Element {
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return <PublicCatalogBrowsePageView catalog={catalog} locale={locale} />;
}
