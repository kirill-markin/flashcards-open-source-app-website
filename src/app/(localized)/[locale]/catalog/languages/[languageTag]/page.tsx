import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
import { PublicCatalogFacetPageView } from "@/components/PublicCatalogFacetPageView";
import {
  listPublicCatalogLanguageTags,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import { getPublicCatalogPackagesByLanguageTag } from "@/lib/publicCatalogReadModel";
import {
  getPublicCatalogFacetStaticParam,
  resolvePublicCatalogFacetStaticParam,
} from "@/lib/publicCatalogUrls";
import { createPublicCatalogFacetMetadata } from "@/lib/seo/createPublicCatalogMetadata";

export const dynamicParams = false;

export function generateStaticParams(): Array<{
  languageTag: string;
  locale: string;
}> {
  const languageTags = listPublicCatalogLanguageTags();

  return getLocalizedRouteStaticParams().flatMap(({ locale }) =>
    languageTags.map((languageTag) => ({
      languageTag: getPublicCatalogFacetStaticParam(languageTag),
      locale,
    })),
  );
}

interface PageProps {
  readonly params: Promise<{ languageTag: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { languageTag: routeLanguageTag, locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  const languageTag = resolvePublicCatalogFacetStaticParam(
    routeLanguageTag,
    catalog.languageTags,
  );

  if (languageTag === undefined) {
    notFound();
  }

  return createPublicCatalogFacetMetadata(locale, "language", languageTag);
}

export default async function LocalizedPublicCatalogLanguagePage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { languageTag: routeLanguageTag, locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  const languageTag = resolvePublicCatalogFacetStaticParam(
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
