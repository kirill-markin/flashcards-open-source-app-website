import type { AppLocale } from "@/lib/i18n";
import { readPageContent } from "@/lib/content/readPageContent";
import {
  createSiteJsonLdGraph,
  serializeStructuredData,
} from "@/lib/seo/structuredData";

interface JsonLdSchemaProps {
  readonly locale: AppLocale;
}

export function JsonLdSchema({
  locale,
}: JsonLdSchemaProps): React.JSX.Element {
  const homePageContent = readPageContent("home", locale);
  const siteGraph = createSiteJsonLdGraph({
    description: homePageContent.description,
    locale,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(siteGraph) }}
    />
  );
}
