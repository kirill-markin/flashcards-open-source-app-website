import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPageView } from "@/components/DocPageView";
import { DOC_SLUGS } from "@/data/docs";
import { listTranslatedDocSlugs, readDoc } from "@/lib/docs";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

const locale = "es" as const;
const uiCopy = getUiCopy(locale);

export const dynamicParams = false;

export const generateStaticParams = (): Array<{ slug: string }> =>
  listTranslatedDocSlugs(locale, DOC_SLUGS).map((slug) => ({ slug }));

interface PageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = readDoc(locale, slug);

  if (doc === null) {
    return { title: uiCopy.docs.comingSoonTitle };
  }

  return createPageMetadata({
    title: doc.title,
    description: doc.description,
    locale,
    routePathname: `/docs/${slug}/`,
    openGraphType: "website",
  });
}

export default async function SpanishDocPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const doc = readDoc(locale, slug);

  if (doc === null) {
    notFound();
  }

  return <DocPageView locale={locale} slug={slug} />;
}
