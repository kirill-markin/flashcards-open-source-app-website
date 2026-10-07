import type { Metadata } from "next";
import { SiteVercelAnalytics } from "@/components/SiteVercelAnalytics";
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
import { siteFont } from "@/lib/siteFont";

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
      className={siteFont.variable}
    >
      <body>
        {children}
        <SiteVercelAnalytics />
      </body>
    </html>
  );
}
