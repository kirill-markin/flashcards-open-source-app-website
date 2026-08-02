import type { Metadata } from "next";
import type { AppLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  getOpenGraphLocale,
} from "@/lib/i18n";
import { getLanguageAlternates } from "@/lib/routeTranslations";
import { OPEN_GRAPH_IMAGE_URL, SITE_NAME, SITE_URL } from "@/lib/site";

interface CreatePublicCatalogMetadataParams {
  readonly description: string;
  readonly locale: AppLocale;
  readonly publishedTime: string | null;
  readonly routePathname: string;
  readonly title: string;
  readonly type: "article" | "website";
}

export function createPublicCatalogMetadata(
  params: CreatePublicCatalogMetadataParams,
): Metadata {
  const localizedPathname = getLocalizedPathname(
    params.locale,
    params.routePathname,
  );
  const pageUrl = getAbsoluteUrl(localizedPathname);

  return {
    metadataBase: new URL(SITE_URL),
    title: params.title,
    description: params.description,
    alternates: {
      canonical: pageUrl,
      languages: getLanguageAlternates(params.routePathname),
    },
    openGraph: {
      type: params.type,
      locale: getOpenGraphLocale(params.locale),
      siteName: SITE_NAME,
      url: pageUrl,
      title: params.title,
      description: params.description,
      images: [{ url: OPEN_GRAPH_IMAGE_URL }],
      publishedTime: params.publishedTime ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
      images: [OPEN_GRAPH_IMAGE_URL],
    },
  };
}
