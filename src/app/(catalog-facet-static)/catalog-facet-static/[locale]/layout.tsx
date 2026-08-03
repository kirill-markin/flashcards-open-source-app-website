import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import {
  createLocaleLayoutMetadata,
  RootDocument,
} from "@/app/rootLayoutShared";
import { SiteLayoutDocument } from "@/components/SiteLayoutDocument";
import { isSupportedLocale } from "@/lib/localeConfig";

interface LayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}

async function resolveLocale(params: LayoutProps["params"]) {
  const { locale } = await params;

  if (isSupportedLocale(locale) === false) {
    notFound();
  }

  return locale;
}

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">): Promise<Metadata> {
  return createLocaleLayoutMetadata(await resolveLocale(params));
}

export default async function PublicCatalogFacetStaticLayout({
  children,
  params,
}: LayoutProps): Promise<React.JSX.Element> {
  const locale = await resolveLocale(params);

  return (
    <RootDocument lang={locale}>
      <SiteLayoutDocument locale={locale}>{children}</SiteLayoutDocument>
    </RootDocument>
  );
}
