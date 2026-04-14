import type { Metadata } from "next";
import type { AppLocale } from "@/lib/i18n";
import { getLanguageAlternates } from "@/lib/routeTranslations";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  getMarkdownPathname,
  getOpenGraphLocale,
} from "@/lib/i18n";
import {
  OPEN_GRAPH_IMAGE_URL,
  SITE_NAME,
  TWITTER_IMAGE_URL,
} from "@/lib/site";

type OpenGraphType = "website" | "article";

interface CreatePageMetadataParams {
  readonly description: string;
  readonly locale: AppLocale;
  readonly openGraphType: OpenGraphType;
  readonly publishedTime?: string;
  readonly routePathname: string;
  readonly title: string;
}

export function createPageMetadata(
  params: CreatePageMetadataParams
): Metadata {
  const localizedPathname = getLocalizedPathname(
    params.locale,
    params.routePathname
  );
  const pageUrl = getAbsoluteUrl(localizedPathname);
  const markdownUrl = getAbsoluteUrl(getMarkdownPathname(localizedPathname));
  const alternatesLanguages = getLanguageAlternates(params.routePathname);

  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: pageUrl,
      languages: alternatesLanguages,
      types: { "text/markdown": markdownUrl },
    },
    openGraph: {
      type: params.openGraphType,
      locale: getOpenGraphLocale(params.locale),
      siteName: SITE_NAME,
      url: pageUrl,
      title: params.title,
      description: params.description,
      images: [
        {
          url: OPEN_GRAPH_IMAGE_URL,
        },
      ],
      publishedTime: params.publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
      images: [TWITTER_IMAGE_URL],
    },
  };
}
