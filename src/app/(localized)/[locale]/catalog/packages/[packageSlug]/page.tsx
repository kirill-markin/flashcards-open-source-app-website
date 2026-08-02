import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
import { PublicCatalogPackagePageView } from "@/components/PublicCatalogPackagePageView";
import {
  listPublicCatalogPackageSlugs,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import { getPublicCatalogPackageBySlug } from "@/lib/publicCatalogReadModel";
import { getPublicCatalogPackageRoutePathname } from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

export const dynamicParams = false;

export function generateStaticParams(): Array<{
  locale: string;
  packageSlug: string;
}> {
  const packageSlugs = listPublicCatalogPackageSlugs();

  return getLocalizedRouteStaticParams().flatMap(({ locale }) =>
    packageSlugs.map((packageSlug) => ({ locale, packageSlug })),
  );
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

  return createPublicCatalogMetadata({
    description: packageView.packageMetadata.summary,
    locale,
    publishedTime: packageView.packageMetadata.publishedAt,
    routePathname: getPublicCatalogPackageRoutePathname(packageSlug),
    title: packageView.packageMetadata.title,
    type: "article",
  });
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

  return (
    <PublicCatalogPackagePageView
      locale={locale}
      packageView={packageView}
    />
  );
}
