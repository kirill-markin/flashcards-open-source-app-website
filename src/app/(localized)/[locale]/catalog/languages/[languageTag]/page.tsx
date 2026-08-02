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

export const dynamicParams = false;

export function generateStaticParams(): Array<{
  languageTag: string;
  locale: string;
}> {
  const languageTags = listPublicCatalogLanguageTags();

  return getLocalizedRouteStaticParams().flatMap(({ locale }) =>
    languageTags.map((languageTag) => ({ languageTag, locale })),
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

export default async function LocalizedPublicCatalogLanguagePage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { languageTag: routeLanguageTag, locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
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
