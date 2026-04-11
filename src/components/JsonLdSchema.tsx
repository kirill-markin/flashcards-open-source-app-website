import type { AppLocale } from "@/lib/i18n";
import { getAbsoluteUrl, getLocalizedPathname } from "@/lib/i18n";
import { readPageContent } from "@/lib/content/readPageContent";

interface JsonLdSchemaProps {
  readonly locale: AppLocale;
}

export function JsonLdSchema({
  locale,
}: JsonLdSchemaProps): React.JSX.Element {
  const homePageContent = readPageContent("home", locale);
  const localizedHomeUrl = getAbsoluteUrl(getLocalizedPathname(locale, "/"));

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Flashcards",
    description: homePageContent.description,
    url: localizedHomeUrl,
    inLanguage: locale,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    license: "https://opensource.org/licenses/MIT",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    codeRepository:
      "https://github.com/kirill-markin/flashcards-open-source-app",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: localizedHomeUrl,
    name: "Flashcards",
    description: homePageContent.description,
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
