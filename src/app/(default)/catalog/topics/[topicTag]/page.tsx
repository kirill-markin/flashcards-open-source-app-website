import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

const locale = "en" as const;

export const dynamicParams = false;

export function generateStaticParams(): Array<{ topicTag: string }> {
  return listPublicCatalogTopicTags().map((topicTag) => ({ topicTag }));
}

interface PageProps {
  readonly params: Promise<{ topicTag: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topicTag: routeTopicTag } = await params;
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

export default async function PublicCatalogTopicPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { topicTag: routeTopicTag } = await params;
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
