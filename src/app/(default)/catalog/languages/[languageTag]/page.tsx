import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogFacetPageView } from "@/components/PublicCatalogFacetPageView";
import {
  listPublicCatalogLanguageTags,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import { getPublicCatalogPackagesByLanguageTag } from "@/lib/publicCatalogReadModel";
import {
  resolvePublicCatalogRouteSegment,
} from "@/lib/publicCatalogUrls";
import { createPublicCatalogFacetMetadata } from "@/lib/seo/createPublicCatalogMetadata";

const locale = "en" as const;

export const dynamicParams = false;

export function generateStaticParams(): Array<{ languageTag: string }> {
  return listPublicCatalogLanguageTags().map((languageTag) => ({ languageTag }));
}

interface PageProps {
  readonly params: Promise<{ languageTag: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { languageTag: routeLanguageTag } = await params;
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  const languageTag = resolvePublicCatalogRouteSegment(
    encodeURIComponent(routeLanguageTag),
    catalog.languageTags,
  );

  if (languageTag === undefined) {
    notFound();
  }

  return createPublicCatalogFacetMetadata(locale, "language", languageTag);
}

export default async function PublicCatalogLanguagePage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { languageTag: routeLanguageTag } = await params;
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  const languageTag = resolvePublicCatalogRouteSegment(
    routeLanguageTag,
    catalog.languageTags,
  );

  if (languageTag === undefined) {
    notFound();
  }

  return (
    <PublicCatalogFacetPageView
      facetKind="language"
      locale={locale}
      packages={getPublicCatalogPackagesByLanguageTag(catalog, languageTag)}
      tag={languageTag}
    />
  );
}
