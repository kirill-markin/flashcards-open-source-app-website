import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { readPageContent } from "@/lib/content/readPageContent";
import { getLanguageAlternates } from "@/lib/routeTranslations";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  getOpenGraphLocale,
  type AppLocale,
} from "@/lib/i18n";
import { getLocaleDirection } from "@/lib/localeConfig";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-serif",
});

export function createLocaleLayoutMetadata(locale: AppLocale): Metadata {
  const homePageContent = readPageContent("home", locale);
  const localizedHomePathname = getLocalizedPathname(locale, "/");
  const localizedHomeUrl = getAbsoluteUrl(localizedHomePathname);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: homePageContent.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: homePageContent.description,
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      url: localizedHomeUrl,
      siteName: SITE_NAME,
      title: homePageContent.title,
      description: homePageContent.description,
    },
    twitter: {
      card: "summary_large_image",
      title: homePageContent.title,
      description: homePageContent.description,
    },
    alternates: {
      canonical: localizedHomeUrl,
      languages: getLanguageAlternates("/"),
    },
  };
}

interface RootDocumentProps {
  readonly children: React.ReactNode;
  readonly lang: AppLocale;
}

export function RootDocument({
  children,
  lang,
}: RootDocumentProps): React.JSX.Element {
  return (
    <html
      lang={lang}
      dir={getLocaleDirection(lang)}
      className={sourceSerif.variable}
    >
      <body>{children}</body>
    </html>
  );
}
