import type { Metadata } from "next";
import "@/app/globals.css";
import { getLocalizedRouteStaticParams, resolveNonDefaultLocaleOrNotFound } from "@/app/localizedRouteHelpers";
import {
  createLocaleLayoutMetadata,
  RootDocument,
} from "@/app/rootLayoutShared";
import { SiteLayoutDocument } from "@/components/SiteLayoutDocument";

// Each page sets dynamicParams itself: Next.js returns 404 for unlisted params
// when any segment on the route sets it to false, which would disable the
// on-demand locale copies of package pages.
export const generateStaticParams = getLocalizedRouteStaticParams;

interface LayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);

  return createLocaleLayoutMetadata(locale);
}

export default async function LocalizedLayout({
  children,
  params,
}: LayoutProps): Promise<React.JSX.Element> {
  const { locale: rawLocale } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);

  return (
    <RootDocument lang={locale}>
      <SiteLayoutDocument locale={locale}>{children}</SiteLayoutDocument>
    </RootDocument>
  );
}
