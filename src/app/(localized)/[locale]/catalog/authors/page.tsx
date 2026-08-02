import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
import { PublicCatalogAuthorsPageView } from "@/components/PublicCatalogAuthorsPageView";
import { readPublicCatalog } from "@/lib/publicCatalogData";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import { PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME } from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

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

  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    description: copy.authorsIntro,
    locale,
    publishedTime: null,
    routePathname: PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
    title: copy.authorsTitle,
    type: "website",
  });
}

export default async function LocalizedPublicCatalogAuthorsPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();

  if (catalog === null) {
    notFound();
  }

  return <PublicCatalogAuthorsPageView catalog={catalog} locale={locale} />;
}
