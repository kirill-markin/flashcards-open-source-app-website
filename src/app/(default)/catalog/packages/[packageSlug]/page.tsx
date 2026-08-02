import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogPackagePageView } from "@/components/PublicCatalogPackagePageView";
import {
  listPublicCatalogPackageSlugs,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import {
  getPublicCatalogCollectionsByPackageSlug,
  getPublicCatalogPackageBySlug,
} from "@/lib/publicCatalogReadModel";
import { getPublicCatalogPackageRoutePathname } from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

const locale = "en" as const;

export const dynamicParams = false;

export function generateStaticParams(): Array<{ packageSlug: string }> {
  return listPublicCatalogPackageSlugs().map((packageSlug) => ({ packageSlug }));
}

interface PageProps {
  readonly params: Promise<{ packageSlug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { packageSlug } = await params;
  const catalog = readPublicCatalog();
  const packageView = catalog === null
    ? undefined
    : getPublicCatalogPackageBySlug(catalog, packageSlug);

  if (packageView === undefined) {
    notFound();
  }

  return createPublicCatalogMetadata({
    description: packageView.packageMetadata.summary,
    locale,
    publishedTime: packageView.packageMetadata.publishedAt,
    routePathname: getPublicCatalogPackageRoutePathname(packageSlug),
    title: packageView.packageMetadata.title,
    type: "article",
  });
}

export default async function PublicCatalogPackagePage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { packageSlug } = await params;
  const catalog = readPublicCatalog();
  const packageView = catalog === null
    ? undefined
    : getPublicCatalogPackageBySlug(catalog, packageSlug);

  if (packageView === undefined) {
    notFound();
  }

  const collections = catalog === null
    ? undefined
    : getPublicCatalogCollectionsByPackageSlug(catalog, packageSlug);

  if (collections === undefined) {
    notFound();
  }

  return (
    <PublicCatalogPackagePageView
      collections={collections}
      locale={locale}
      packageView={packageView}
    />
  );
}
