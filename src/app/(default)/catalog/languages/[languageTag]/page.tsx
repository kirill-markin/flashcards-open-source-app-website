import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogFacetPageView } from "@/components/PublicCatalogFacetPageView";
import {
  listPublicCatalogLanguageTags,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "@/lib/publicCatalogDestinationCopy";
import { formatPublicCatalogFacetTag } from "@/lib/publicCatalogFormatting";
import { getPublicCatalogPackagesByLanguageTag } from "@/lib/publicCatalogReadModel";
import {
  getPublicCatalogLanguageRoutePathname,
  resolvePublicCatalogRouteSegment,
} from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

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

  const copy = getPublicCatalogDestinationCopy(locale);
  const displayTag = formatPublicCatalogFacetTag(languageTag);

  return createPublicCatalogMetadata({
    description: interpolatePublicCatalogCopy(copy.languageIntroTemplate, "tag", displayTag),
    locale,
    publishedTime: null,
    routePathname: getPublicCatalogLanguageRoutePathname(languageTag),
    title: interpolatePublicCatalogCopy(copy.languageTitleTemplate, "tag", displayTag),
    type: "website",
  });
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
