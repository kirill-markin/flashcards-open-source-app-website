import type { AppLocale } from "@/lib/i18n";
import { readPageContent } from "@/lib/content/readPageContent";
import { createSiteApplicationJsonLdGraph } from "@/lib/seo/structuredData";

interface JsonLdSchemaProps {
  readonly locale: AppLocale;
}

export function JsonLdSchema({
  locale,
}: JsonLdSchemaProps): React.JSX.Element {
  const homePageContent = readPageContent("home", locale);
  const siteApplicationGraph = createSiteApplicationJsonLdGraph({
    description: homePageContent.description,
    locale,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(siteApplicationGraph) }}
    />
  );
}
