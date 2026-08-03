import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
import { PublicCatalogCollectionsPageView } from "@/components/PublicCatalogCollectionsPageView";
import { readPublicCatalog } from "@/lib/publicCatalogData";
import { createPublicCatalogCollectionsMetadata } from "@/lib/seo/createPublicCatalogMetadata";

export const dynamicParams = false;

export function generateStaticParams(): Array<{ locale: string }> {
  return readPublicCatalog() === null ? [] : getLocalizedRouteStaticParams();
}

interface PageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);

  if (readPublicCatalog() === null) {
    notFound();
  }

  return createPublicCatalogCollectionsMetadata(locale);
}

export default async function LocalizedPublicCatalogCollectionsPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return <PublicCatalogCollectionsPageView catalog={catalog} locale={locale} />;
}
