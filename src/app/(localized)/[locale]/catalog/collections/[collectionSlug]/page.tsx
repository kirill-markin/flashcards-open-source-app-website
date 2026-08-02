import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
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

export const dynamicParams = false;

export function generateStaticParams(): Array<{
  collectionSlug: string;
  locale: string;
}> {
  const collectionSlugs = listPublicCatalogCollectionSlugs();

  return getLocalizedRouteStaticParams().flatMap(({ locale }) =>
    collectionSlugs.map((collectionSlug) => ({ collectionSlug, locale })),
  );
}

interface PageProps {
  readonly params: Promise<{ collectionSlug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { collectionSlug, locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
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

export default async function LocalizedPublicCatalogCollectionPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { collectionSlug, locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
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
