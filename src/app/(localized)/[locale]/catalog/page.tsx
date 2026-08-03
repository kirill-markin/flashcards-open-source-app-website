import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
import { PublicCatalogBrowsePageView } from "@/components/PublicCatalogBrowsePageView";
import { readPublicCatalog } from "@/lib/publicCatalogData";
import { createPublicCatalogRootMetadata } from "@/lib/seo/createPublicCatalogMetadata";

export const dynamicParams = false;

export function generateStaticParams(): Array<{ locale: string }> {
  if (readPublicCatalog() === null) {
    return [];
  }

  return getLocalizedRouteStaticParams();
}

interface PageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return createPublicCatalogRootMetadata(locale);
}

export default async function LocalizedPublicCatalogPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return <PublicCatalogBrowsePageView catalog={catalog} locale={locale} />;
}
