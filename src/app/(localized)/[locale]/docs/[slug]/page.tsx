import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPageView } from "@/components/DocPageView";
import { DOC_SLUGS } from "@/data/docs";
import { getLocalizedRouteStaticParams, resolveNonDefaultLocaleOrNotFound } from "@/app/localizedRouteHelpers";
import { listTranslatedDocSlugs, readDoc } from "@/lib/docs";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

export const dynamicParams = false;

export const generateStaticParams = (): Array<{ locale: string; slug: string }> =>
  getLocalizedRouteStaticParams().flatMap(({ locale }) =>
    listTranslatedDocSlugs(locale, DOC_SLUGS).map((slug) => ({ locale, slug }))
  );

interface PageProps {
  readonly params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const uiCopy = getUiCopy(locale);
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

export default async function LocalizedDocPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const doc = readDoc(locale, slug);

  if (doc === null) {
    notFound();
  }

  return <DocPageView locale={locale} slug={slug} />;
}
