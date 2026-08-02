import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogFacetPageView } from "@/components/PublicCatalogFacetPageView";
import {
  listPublicCatalogTopicTags,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "@/lib/publicCatalogDestinationCopy";
import { formatPublicCatalogFacetTag } from "@/lib/publicCatalogFormatting";
import { getPublicCatalogPackagesByTopicTag } from "@/lib/publicCatalogReadModel";
import {
  getPublicCatalogTopicRoutePathname,
  resolvePublicCatalogRouteSegment,
} from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

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

  const copy = getPublicCatalogDestinationCopy(locale);
  const displayTag = formatPublicCatalogFacetTag(topicTag);

  return createPublicCatalogMetadata({
    description: interpolatePublicCatalogCopy(copy.topicIntroTemplate, "tag", displayTag),
    locale,
    publishedTime: null,
    routePathname: getPublicCatalogTopicRoutePathname(topicTag),
    title: interpolatePublicCatalogCopy(copy.topicTitleTemplate, "tag", displayTag),
    type: "website",
  });
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
