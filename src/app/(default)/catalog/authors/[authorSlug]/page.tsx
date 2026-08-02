import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

const locale = "en" as const;

export const dynamicParams = false;

export function generateStaticParams(): Array<{ authorSlug: string }> {
  return listPublicCatalogAuthorSlugs().map((authorSlug) => ({ authorSlug }));
}

interface PageProps {
  readonly params: Promise<{ authorSlug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { authorSlug } = await params;
  const catalog = readPublicCatalog();
  const author = catalog === null
    ? undefined
    : getPublicCatalogAuthorBySlug(catalog, authorSlug);

  if (author === undefined) {
    notFound();
  }

  const copy = getPublicCatalogDestinationCopy(locale);
  const description = author.bio === null || author.bio.trim() === ""
    ? copy.authorsIntro
    : author.bio;

  return createPublicCatalogMetadata({
    description,
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

export default async function PublicCatalogAuthorPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { authorSlug } = await params;
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
