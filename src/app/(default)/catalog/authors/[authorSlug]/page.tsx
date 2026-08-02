import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicCatalogAuthorPageView } from "@/components/PublicCatalogAuthorPageView";
import {
  listPublicCatalogAuthorSlugs,
  readPublicCatalog,
} from "@/lib/publicCatalogData";
import {
  getPublicCatalogAuthorBySlug,
  getPublicCatalogPackagesByAuthorSlug,
} from "@/lib/publicCatalogReadModel";
import { createPublicCatalogAuthorMetadata } from "@/lib/seo/createPublicCatalogMetadata";

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

  return createPublicCatalogAuthorMetadata(locale, author);
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
