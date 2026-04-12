import type { Metadata } from "next";
import { DocsPageView } from "@/components/DocsPageView";
import { getLocalizedRouteStaticParams, resolveNonDefaultLocaleOrNotFound } from "@/app/localizedRouteHelpers";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

export const dynamicParams = false;

export const generateStaticParams = getLocalizedRouteStaticParams;

interface PageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const uiCopy = getUiCopy(locale);

  return createPageMetadata({
    title: uiCopy.docs.title,
    description: uiCopy.docs.metaDescription,
    locale,
    routePathname: "/docs/",
    openGraphType: "website",
  });
}

export default async function LocalizedDocsPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);

  return <DocsPageView locale={locale} />;
}
