import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogCollectionPageView } from "@/components/PublicCatalogCollectionPageView";
import {
  listPublicCatalogCollectionSlugs,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import {
  getPublicCatalogCollectionBySlug,
  getPublicCatalogPackagesByCollectionSlug,
} from "@/lib/publicCatalogReadModel";
import { getPublicCatalogCollectionRoutePathname } from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

const locale = "en" as const;

export const dynamicParams = false;

export function generateStaticParams(): Array<{ collectionSlug: string }> {
  return listPublicCatalogCollectionSlugs().map((collectionSlug) => ({ collectionSlug }));
}

interface PageProps {
  readonly params: Promise<{ collectionSlug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { collectionSlug } = await params;
  const catalog = readPublicCatalog();
  const collection = catalog === null
    ? undefined
    : getPublicCatalogCollectionBySlug(catalog, collectionSlug);

  if (collection === undefined) {
    notFound();
  }

  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    description: collection.summary === "" ? copy.collectionsIntro : collection.summary,
    locale,
    publishedTime: collection.publishedAt,
    routePathname: getPublicCatalogCollectionRoutePathname(collectionSlug),
    title: collection.title,
    type: "article",
  });
}

export default async function PublicCatalogCollectionPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { collectionSlug } = await params;
  const catalog = readPublicCatalog();
  const collection = catalog === null
    ? undefined
    : getPublicCatalogCollectionBySlug(catalog, collectionSlug);
  const packages = catalog === null
    ? undefined
    : getPublicCatalogPackagesByCollectionSlug(catalog, collectionSlug);

  if (collection === undefined || packages === undefined) {
    notFound();
  }

  return (
    <PublicCatalogCollectionPageView
      collection={collection}
      locale={locale}
      packages={packages}
    />
  );
}
