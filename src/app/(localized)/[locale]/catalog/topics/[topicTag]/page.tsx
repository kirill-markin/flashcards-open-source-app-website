import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
import { PublicCatalogFacetPageView } from "@/components/PublicCatalogFacetPageView";
import {
  listPublicCatalogTopicTags,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import { getPublicCatalogPackagesByTopicTag } from "@/lib/publicCatalogReadModel";
import {
  resolvePublicCatalogRouteSegment,
} from "@/lib/publicCatalogUrls";
import { createPublicCatalogFacetMetadata } from "@/lib/seo/createPublicCatalogMetadata";

export const dynamicParams = false;

export function generateStaticParams(): Array<{
  locale: string;
  topicTag: string;
}> {
  const topicTags = listPublicCatalogTopicTags();

  return getLocalizedRouteStaticParams().flatMap(({ locale }) =>
    topicTags.map((topicTag) => ({ locale, topicTag })),
  );
}

interface PageProps {
  readonly params: Promise<{ locale: string; topicTag: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, topicTag: routeTopicTag } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  const topicTag = resolvePublicCatalogRouteSegment(
    encodeURIComponent(routeTopicTag),
    catalog.topicTags,
  );

  if (topicTag === undefined) {
    notFound();
  }

  return createPublicCatalogFacetMetadata(locale, "topic", topicTag);
}

export default async function LocalizedPublicCatalogTopicPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale, topicTag: routeTopicTag } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  const topicTag = resolvePublicCatalogRouteSegment(
    routeTopicTag,
    catalog.topicTags,
  );

  if (topicTag === undefined) {
    notFound();
  }

  return (
    <PublicCatalogFacetPageView
      facetKind="topic"
      locale={locale}
      packages={getPublicCatalogPackagesByTopicTag(catalog, topicTag)}
      tag={topicTag}
    />
  );
}
