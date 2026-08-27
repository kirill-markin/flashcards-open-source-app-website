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
  getPublicCatalogRelatedPackages,
} from "@/lib/publicCatalogReadModel";
import { createPublicCatalogPackageMetadata } from "@/lib/seo/createPublicCatalogMetadata";

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

  return createPublicCatalogPackageMetadata(locale, packageView);
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
  const relatedPackages = catalog === null
    ? undefined
    : getPublicCatalogRelatedPackages(
      catalog,
      packageView.packageMetadata.packageId,
    );

  if (collections === undefined || relatedPackages === undefined) {
    notFound();
  }

  return (
    <PublicCatalogPackagePageView
      collections={collections}
      locale={locale}
      packageView={packageView}
      relatedPackages={relatedPackages}
    />
  );
}
