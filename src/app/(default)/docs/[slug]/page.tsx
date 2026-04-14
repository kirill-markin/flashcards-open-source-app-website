import type { Metadata } from "next";
import { DocPageView } from "@/components/DocPageView";
import { DOC_SLUGS } from "@/data/docs";
import { readDoc } from "@/lib/docs";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

const locale = "en" as const;
const uiCopy = getUiCopy(locale);

export const generateStaticParams = (): Array<{ slug: string }> =>
  DOC_SLUGS.map((slug) => ({ slug }));

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
    openGraphType: "article",
  });
}

export default async function DocPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;

  return <DocPageView locale={locale} slug={slug} />;
}
