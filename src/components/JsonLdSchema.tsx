const SITE_URL = "https://flashcards-open-source-app.com";

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flashcards",
  description:
    "Open-source flashcards app with spaced repetition, review queue, passwordless auth, and a self-hosted AWS/Postgres stack.",
  url: `${SITE_URL}/`,
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
  url: `${SITE_URL}/`,
  name: "Flashcards",
  description:
    "Open-source flashcards app with spaced repetition, review queue, passwordless auth, and self-hosting support.",
};

export function JsonLdSchema(): React.JSX.Element {
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
