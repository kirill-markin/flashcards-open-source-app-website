import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveNonDefaultLocaleOrNotFound } from "@/app/localizedRouteHelpers";
import { PublicCatalogPackagePageView } from "@/components/PublicCatalogPackagePageView";
import {
  listPublicCatalogCanonicalPackagePageLocaleParams,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import {
  getPublicCatalogCollectionsByPackageSlug,
  getPublicCatalogPackageBySlug,
  getPublicCatalogRelatedPackages,
} from "@/lib/publicCatalogReadModel";
import { createPublicCatalogPackageMetadata } from "@/lib/seo/createPublicCatalogMetadata";

// Only each deck's audience-locale pages are prerendered: every locale copy of
// every deck multiplied the build to ~8.5k pages and exceeded Vercel's 45-minute
// build limit. The other copies canonicalize to the audience-locale page and stay
// out of the sitemap, so they are rendered on first request and cached until the
// next deployment, which is the only way the catalog data changes.
export const dynamicParams = true;
export const revalidate = false;

export function generateStaticParams(): Array<{
  locale: string;
  packageSlug: string;
}> {
  return listPublicCatalogCanonicalPackagePageLocaleParams();
}

interface PageProps {
  readonly params: Promise<{ locale: string; packageSlug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale, packageSlug } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();
  const packageView = catalog === null
    ? undefined
    : getPublicCatalogPackageBySlug(catalog, packageSlug);

  if (packageView === undefined) {
    notFound();
  }

  return createPublicCatalogPackageMetadata(locale, packageView);
}

export default async function LocalizedPublicCatalogPackagePage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale, packageSlug } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
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
