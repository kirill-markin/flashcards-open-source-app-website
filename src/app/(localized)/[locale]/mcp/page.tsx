import type { Metadata } from "next";
import {
  getLocalizedRouteStaticParams,
  resolveNonDefaultLocaleOrNotFound,
} from "@/app/localizedRouteHelpers";
import { McpPageView } from "@/components/McpPageView";
import { createMcpPageMetadata } from "@/lib/seo/createMcpPageMetadata";

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

  return createMcpPageMetadata(locale);
}

export default async function LocalizedMcpPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);

  return <McpPageView locale={locale} />;
}
