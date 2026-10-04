import {
  CANONICAL_APP_STORE_URL,
  CANONICAL_GOOGLE_PLAY_URL,
} from "@/lib/humanPlatforms";
import type { AppLocale } from "@/lib/i18n";
import { PRODUCT_APP_ORIGIN, SITE_NAME, SITE_URL } from "@/lib/site";

export const STRUCTURED_DATA_ENTITY_IDS = {
  website: `${SITE_URL}/#website`,
  software: `${SITE_URL}/#software`,
  sourceCode: `${SITE_URL}/#source-code`,
  creator: "https://kirill-markin.com/#person",
  organization: "https://kirill-markin.com/samo-danni-eood/#organization",
} as const;

export const STRUCTURED_DATA_AUTHOR_NAME = "Kirill Markin";
export const STRUCTURED_DATA_AUTHOR_URL = "https://kirill-markin.com/";
export const STRUCTURED_DATA_PUBLISHER_NAME = "SAMO DANNI EOOD";
export const STRUCTURED_DATA_PUBLISHER_URL = "https://kirill-markin.com/samo-danni-eood/";
export const STRUCTURED_DATA_PUBLISHER_LOGO_URL =
  "https://kirill-markin.com/samo-danni-eood/google-play-developer/logo.png";
const SITE_HOME_URL = `${SITE_URL}/` as const;
export const FLASHCARDS_REPOSITORY_URL =
  "https://github.com/kirill-markin/flashcards-open-source-app";
export const FLASHCARDS_LOGO_URL = `${SITE_URL}/logo-512.png`;

export function serializeStructuredData(value: object): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

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

export interface OrganizationStructuredData {
  readonly "@id": typeof STRUCTURED_DATA_ENTITY_IDS.organization;
  readonly "@type": "Organization";
  readonly legalName: typeof STRUCTURED_DATA_PUBLISHER_NAME;
  readonly logo: typeof STRUCTURED_DATA_PUBLISHER_LOGO_URL;
  readonly name: typeof STRUCTURED_DATA_PUBLISHER_NAME;
  readonly url: typeof STRUCTURED_DATA_PUBLISHER_URL;
}

export interface FreeOfferStructuredData {
  readonly "@type": "Offer";
  readonly name: "Free";
  readonly price: "0";
  readonly priceCurrency: "USD";
}

export interface MonthlyPriceSpecificationStructuredData {
  readonly "@type": "UnitPriceSpecification";
  readonly billingDuration: "P1M";
  readonly price: "6.99";
  readonly priceCurrency: "USD";
}

export interface PremiumOfferStructuredData {
  readonly "@type": "Offer";
  readonly name: "Premium";
  readonly price: "6.99";
  readonly priceCurrency: "USD";
  readonly priceSpecification: MonthlyPriceSpecificationStructuredData;
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
  readonly publisher: StructuredDataEntityReference;
  readonly url: typeof SITE_HOME_URL;
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
  readonly offers: readonly [FreeOfferStructuredData, PremiumOfferStructuredData];
  readonly operatingSystem: "Web, iOS, Android";
  readonly publisher: StructuredDataEntityReference;
  readonly sameAs: readonly [
    typeof CANONICAL_APP_STORE_URL,
    typeof CANONICAL_GOOGLE_PLAY_URL,
  ];
  readonly url: typeof PRODUCT_APP_ORIGIN;
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
  | PersonStructuredData
  | OrganizationStructuredData;

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

export const PUBLISHER_REFERENCE: StructuredDataEntityReference = {
  "@id": STRUCTURED_DATA_ENTITY_IDS.organization,
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

const PUBLISHER_ENTITY: OrganizationStructuredData = {
  "@id": STRUCTURED_DATA_ENTITY_IDS.organization,
  "@type": "Organization",
  name: STRUCTURED_DATA_PUBLISHER_NAME,
  legalName: STRUCTURED_DATA_PUBLISHER_NAME,
  url: STRUCTURED_DATA_PUBLISHER_URL,
  logo: STRUCTURED_DATA_PUBLISHER_LOGO_URL,
};

function createWebsiteStructuredData(
  params: CreateSiteApplicationJsonLdGraphParams
): WebSiteStructuredData {
  return {
    "@id": STRUCTURED_DATA_ENTITY_IDS.website,
    "@type": "WebSite",
    url: SITE_HOME_URL,
    name: SITE_NAME,
    alternateName: [
      "Flashcards Open Source App",
      "Open Source Flashcards App",
      "Flashcards",
    ],
    description: params.description,
    inLanguage: params.locale,
    about: SOFTWARE_REFERENCE,
    creator: CREATOR_REFERENCE,
    publisher: PUBLISHER_REFERENCE,
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
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Premium",
        price: "6.99",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "6.99",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
    ],
    image: FLASHCARDS_LOGO_URL,
    creator: CREATOR_REFERENCE,
    publisher: PUBLISHER_REFERENCE,
    url: PRODUCT_APP_ORIGIN,
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
      PUBLISHER_ENTITY,
    ],
  };
}
