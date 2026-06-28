import {
  CANONICAL_APP_STORE_URL,
  CANONICAL_GOOGLE_PLAY_URL,
} from "@/lib/humanPlatforms";
import type { AppLocale } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const STRUCTURED_DATA_ENTITY_IDS = {
  website: `${SITE_URL}/#website`,
  software: `${SITE_URL}/#software`,
  sourceCode: `${SITE_URL}/#source-code`,
  creator: `${SITE_URL}/#kirill-markin`,
} as const;

export const STRUCTURED_DATA_AUTHOR_NAME = "Kirill Markin";
export const STRUCTURED_DATA_AUTHOR_URL = "https://kirill-markin.com/";
export const FLASHCARDS_REPOSITORY_URL =
  "https://github.com/kirill-markin/flashcards-open-source-app";
export const FLASHCARDS_LOGO_URL = `${SITE_URL}/logo-512.png`;
export const FLASHCARDS_WEB_APP_URL =
  "https://app.flashcards-open-source-app.com";

export type StructuredDataEntityId =
  (typeof STRUCTURED_DATA_ENTITY_IDS)[keyof typeof STRUCTURED_DATA_ENTITY_IDS];

export interface StructuredDataEntityReference {
  readonly "@id": StructuredDataEntityId;
}

export interface PersonStructuredData {
  readonly "@id": typeof STRUCTURED_DATA_ENTITY_IDS.creator;
  readonly "@type": "Person";
  readonly name: typeof STRUCTURED_DATA_AUTHOR_NAME;
  readonly url: typeof STRUCTURED_DATA_AUTHOR_URL;
}

export interface OfferStructuredData {
  readonly "@type": "Offer";
  readonly price: "0";
  readonly priceCurrency: "USD";
}

export interface WebSiteStructuredData {
  readonly "@id": typeof STRUCTURED_DATA_ENTITY_IDS.website;
  readonly "@type": "WebSite";
  readonly alternateName: readonly string[];
  readonly about: StructuredDataEntityReference;
  readonly creator: StructuredDataEntityReference;
  readonly description: string;
  readonly inLanguage: AppLocale;
  readonly name: typeof SITE_NAME;
  readonly url: typeof SITE_URL;
}

export interface SoftwareApplicationStructuredData {
  readonly "@id": typeof STRUCTURED_DATA_ENTITY_IDS.software;
  readonly "@type": "SoftwareApplication";
  readonly applicationCategory: "EducationalApplication";
  readonly creator: StructuredDataEntityReference;
  readonly description: string;
  readonly image: typeof FLASHCARDS_LOGO_URL;
  readonly installUrl: readonly [
    typeof CANONICAL_APP_STORE_URL,
    typeof CANONICAL_GOOGLE_PLAY_URL,
  ];
  readonly isAccessibleForFree: true;
  readonly license: "https://opensource.org/licenses/MIT";
  readonly name: typeof SITE_NAME;
  readonly offers: OfferStructuredData;
  readonly operatingSystem: "Web, iOS, Android";
  readonly sameAs: readonly [
    typeof CANONICAL_APP_STORE_URL,
    typeof CANONICAL_GOOGLE_PLAY_URL,
  ];
  readonly url: typeof FLASHCARDS_WEB_APP_URL;
}

export interface SoftwareSourceCodeStructuredData {
  readonly "@id": typeof STRUCTURED_DATA_ENTITY_IDS.sourceCode;
  readonly "@type": "SoftwareSourceCode";
  readonly codeRepository: typeof FLASHCARDS_REPOSITORY_URL;
  readonly creator: StructuredDataEntityReference;
  readonly license: "https://opensource.org/licenses/MIT";
  readonly targetProduct: StructuredDataEntityReference;
}

export type SiteApplicationGraphEntity =
  | WebSiteStructuredData
  | SoftwareApplicationStructuredData
  | SoftwareSourceCodeStructuredData
  | PersonStructuredData;

export interface SiteApplicationJsonLdGraph {
  readonly "@context": "https://schema.org";
  readonly "@graph": readonly SiteApplicationGraphEntity[];
}

export interface CreateSiteApplicationJsonLdGraphParams {
  readonly description: string;
  readonly locale: AppLocale;
}

export const CREATOR_REFERENCE: StructuredDataEntityReference = {
  "@id": STRUCTURED_DATA_ENTITY_IDS.creator,
};

export const SOFTWARE_REFERENCE: StructuredDataEntityReference = {
  "@id": STRUCTURED_DATA_ENTITY_IDS.software,
};

export const CREATOR_ENTITY: PersonStructuredData = {
  "@id": STRUCTURED_DATA_ENTITY_IDS.creator,
  "@type": "Person",
  name: STRUCTURED_DATA_AUTHOR_NAME,
  url: STRUCTURED_DATA_AUTHOR_URL,
};

function createWebsiteStructuredData(
  params: CreateSiteApplicationJsonLdGraphParams
): WebSiteStructuredData {
  return {
    "@id": STRUCTURED_DATA_ENTITY_IDS.website,
    "@type": "WebSite",
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: ["Flashcards Open Source App", "Open Source Flashcards App"],
    description: params.description,
    inLanguage: params.locale,
    about: SOFTWARE_REFERENCE,
    creator: CREATOR_REFERENCE,
  };
}

function createSoftwareApplicationStructuredData(
  params: CreateSiteApplicationJsonLdGraphParams
): SoftwareApplicationStructuredData {
  return {
    "@id": STRUCTURED_DATA_ENTITY_IDS.software,
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    description: params.description,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, iOS, Android",
    license: "https://opensource.org/licenses/MIT",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    image: FLASHCARDS_LOGO_URL,
    creator: CREATOR_REFERENCE,
    url: FLASHCARDS_WEB_APP_URL,
    installUrl: [CANONICAL_APP_STORE_URL, CANONICAL_GOOGLE_PLAY_URL],
    sameAs: [CANONICAL_APP_STORE_URL, CANONICAL_GOOGLE_PLAY_URL],
  };
}

function createSoftwareSourceCodeStructuredData(): SoftwareSourceCodeStructuredData {
  return {
    "@id": STRUCTURED_DATA_ENTITY_IDS.sourceCode,
    "@type": "SoftwareSourceCode",
    codeRepository: FLASHCARDS_REPOSITORY_URL,
    license: "https://opensource.org/licenses/MIT",
    creator: CREATOR_REFERENCE,
    targetProduct: SOFTWARE_REFERENCE,
  };
}

export function createSiteApplicationJsonLdGraph(
  params: CreateSiteApplicationJsonLdGraphParams
): SiteApplicationJsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createWebsiteStructuredData(params),
      createSoftwareApplicationStructuredData(params),
      createSoftwareSourceCodeStructuredData(),
      CREATOR_ENTITY,
    ],
  };
}
