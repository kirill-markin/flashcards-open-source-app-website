import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveNonDefaultLocaleOrNotFound } from "@/app/localizedRouteHelpers";
import { PublicCatalogPackagePageView } from "@/components/PublicCatalogPackagePageView";
import {
  listPublicCatalogPackageAudienceLocaleParams,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import {
  getPublicCatalogCollectionsByPackageSlug,
  getPublicCatalogPackageBySlug,
} from "@/lib/publicCatalogReadModel";
import { createPublicCatalogPackageMetadata } from "@/lib/seo/createPublicCatalogMetadata";
import { getPublicCatalogPackageAudienceLocales } from "@/lib/publicCatalogUrls";

export const dynamicParams = false;

export function generateStaticParams(): Array<{
  locale: string;
  packageSlug: string;
}> {
  return listPublicCatalogPackageAudienceLocaleParams();
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

  if (
    packageView === undefined
    || getPublicCatalogPackageAudienceLocales(
      packageView.latestVersion.languageTags,
    ).includes(locale) === false
  ) {
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

  if (
    packageView === undefined
    || getPublicCatalogPackageAudienceLocales(
      packageView.latestVersion.languageTags,
    ).includes(locale) === false
  ) {
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
