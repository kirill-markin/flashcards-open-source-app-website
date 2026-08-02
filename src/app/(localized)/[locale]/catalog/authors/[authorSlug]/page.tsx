import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
import { PublicCatalogAuthorPageView } from "@/components/PublicCatalogAuthorPageView";
import {
  listPublicCatalogAuthorSlugs,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "@/lib/publicCatalogDestinationCopy";
import {
  getPublicCatalogAuthorBySlug,
  getPublicCatalogPackagesByAuthorSlug,
} from "@/lib/publicCatalogReadModel";
import { getPublicCatalogAuthorRoutePathname } from "@/lib/publicCatalogUrls";
import { createPublicCatalogMetadata } from "@/lib/seo/createPublicCatalogMetadata";

export const dynamicParams = false;

export function generateStaticParams(): Array<{
  authorSlug: string;
  locale: string;
}> {
  const authorSlugs = listPublicCatalogAuthorSlugs();

  return getLocalizedRouteStaticParams().flatMap(({ locale }) =>
    authorSlugs.map((authorSlug) => ({ authorSlug, locale })),
  );
}

interface PageProps {
  readonly params: Promise<{ authorSlug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { authorSlug, locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();
  const author = catalog === null
    ? undefined
    : getPublicCatalogAuthorBySlug(catalog, authorSlug);

  if (author === undefined) {
    notFound();
  }

  const copy = getPublicCatalogDestinationCopy(locale);

  return createPublicCatalogMetadata({
    description: author.bio === null || author.bio.trim() === ""
      ? copy.authorsIntro
      : author.bio,
    locale,
    publishedTime: null,
    routePathname: getPublicCatalogAuthorRoutePathname(authorSlug),
    title: interpolatePublicCatalogCopy(
      copy.authorPackagesHeadingTemplate,
      "name",
      author.displayName,
    ),
    type: "website",
  });
}

export default async function LocalizedPublicCatalogAuthorPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { authorSlug, locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const catalog = readPublicCatalog();
  const author = catalog === null
    ? undefined
    : getPublicCatalogAuthorBySlug(catalog, authorSlug);
  const packages = catalog === null
    ? undefined
    : getPublicCatalogPackagesByAuthorSlug(catalog, authorSlug);

  if (author === undefined || packages === undefined) {
    notFound();
  }

  return (
    <PublicCatalogAuthorPageView
      author={author}
      locale={locale}
      packages={packages}
    />
  );
}
