import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogFacetPageView } from "@/components/PublicCatalogFacetPageView";
import {
  listPublicCatalogLanguageTags,
  listPublicCatalogTopicTags,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import {
  getPublicCatalogPackagesByLanguageTag,
  getPublicCatalogPackagesByTopicTag,
} from "@/lib/publicCatalogReadModel";
import {
  assertUniquePublicCatalogFacetAliases,
  getPublicCatalogFacetAlias,
  resolvePublicCatalogFacetAlias,
  type PublicCatalogFacetKind,
} from "@/lib/publicCatalogStaticAssets";
import { isSupportedLocale, SUPPORTED_LOCALES } from "@/lib/localeConfig";
import { createPublicCatalogFacetMetadata } from "@/lib/seo/createPublicCatalogMetadata";

export const dynamicParams = false;

interface FacetDefinition {
  readonly facetKind: PublicCatalogFacetKind;
  readonly tags: ReadonlyArray<string>;
}

function listFacetDefinitions(): ReadonlyArray<FacetDefinition> {
  return [
    { facetKind: "language", tags: listPublicCatalogLanguageTags() },
    { facetKind: "topic", tags: listPublicCatalogTopicTags() },
  ];
}

export function generateStaticParams(): Array<{
  alias: string;
  facetKind: PublicCatalogFacetKind;
  locale: string;
}> {
  return listFacetDefinitions().flatMap(({ facetKind, tags }) => {
    assertUniquePublicCatalogFacetAliases(facetKind, tags);

    return SUPPORTED_LOCALES.flatMap((locale) =>
      tags.map((tag) => ({
        alias: getPublicCatalogFacetAlias(facetKind, tag),
        facetKind,
        locale,
      })),
    );
  });
}

interface PageProps {
  readonly params: Promise<{
    alias: string;
    facetKind: string;
    locale: string;
  }>;
}

async function resolveFacet(params: PageProps["params"]): Promise<{
  readonly facetKind: PublicCatalogFacetKind;
  readonly locale: (typeof SUPPORTED_LOCALES)[number];
  readonly tag: string;
}> {
  const { alias, facetKind, locale } = await params;

  if (
    isSupportedLocale(locale) === false
    || (facetKind !== "language" && facetKind !== "topic")
  ) {
    notFound();
  }

  const tags = facetKind === "language"
    ? listPublicCatalogLanguageTags()
    : listPublicCatalogTopicTags();
  const tag = resolvePublicCatalogFacetAlias(alias, facetKind, tags);

  if (tag === undefined) {
    notFound();
  }

  return { facetKind, locale, tag };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { facetKind, locale, tag } = await resolveFacet(params);

  return createPublicCatalogFacetMetadata(locale, facetKind, tag);
}

export default async function PublicCatalogFacetStaticPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { facetKind, locale, tag } = await resolveFacet(params);
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  const packages = facetKind === "language"
    ? getPublicCatalogPackagesByLanguageTag(catalog, tag)
    : getPublicCatalogPackagesByTopicTag(catalog, tag);

  return (
    <PublicCatalogFacetPageView
      facetKind={facetKind}
      locale={locale}
      packages={packages}
      tag={tag}
    />
  );
}
