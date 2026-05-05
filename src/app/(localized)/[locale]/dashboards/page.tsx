import type { Metadata } from "next";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
import { DashboardsPageView } from "@/components/DashboardsPageView";
import { createDashboardsPageMetadata } from "@/lib/seo/createDashboardsPageMetadata";

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

  return createDashboardsPageMetadata(locale);
}

export default async function LocalizedDashboardsPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);

  return <DashboardsPageView locale={locale} />;
}
