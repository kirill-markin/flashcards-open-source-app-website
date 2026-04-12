import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { getLocalizedRouteStaticParams, resolveNonDefaultLocaleOrNotFound } from "@/app/localizedRouteHelpers";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

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

  return createMarketingPageMetadata("features", locale);
}

export default async function LocalizedFeaturesPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);

  return <MarketingPageView locale={locale} slug="features" />;
}
