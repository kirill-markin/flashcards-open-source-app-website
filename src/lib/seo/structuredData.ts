import {
  CANONICAL_APP_STORE_URL,
  CANONICAL_GOOGLE_PLAY_URL,
} from "@/lib/humanPlatforms";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  type AppLocale,
} from "@/lib/i18n";
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
  readonly url: string;
}

export interface MonthlyPriceSpecificationStructuredData {
  readonly "@type": "UnitPriceSpecification";
  readonly billingDuration: "P1M";
  readonly price: "6.99";
  readonly priceCurrency: "USD";
  readonly valueAddedTaxIncluded: true;
}

export interface PremiumOfferStructuredData {
  readonly "@type": "Offer";
  readonly name: "Premium";
  readonly price: "6.99";
  readonly priceCurrency: "USD";
  readonly priceSpecification: MonthlyPriceSpecificationStructuredData;
  readonly url: string;
}

export type ProductOfferStructuredData =
  | FreeOfferStructuredData
  | PremiumOfferStructuredData;

/**
 * Every offer must match prices visible on the page that carries it: only the
 * pricing page shows the Premium price.
 */
export type ProductOfferNames = readonly ["Free"] | readonly ["Free", "Premium"];

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
  readonly "@type": readonly ["WebApplication", "MobileApplication"];
  readonly applicationCategory: "EducationalApplication";
  readonly creator: StructuredDataEntityReference;
  readonly description: string;
  readonly image: typeof FLASHCARDS_LOGO_URL;
  readonly installUrl: readonly [
    typeof PRODUCT_APP_ORIGIN,
    typeof CANONICAL_APP_STORE_URL,
    typeof CANONICAL_GOOGLE_PLAY_URL,
  ];
  readonly isAccessibleForFree: true;
  readonly license: "https://opensource.org/licenses/MIT";
  readonly name: typeof SITE_NAME;
  readonly offers: readonly ProductOfferStructuredData[];
  readonly operatingSystem: "Web, iOS, Android";
  readonly publisher: StructuredDataEntityReference;
  readonly sameAs: readonly [
    typeof CANONICAL_APP_STORE_URL,
    typeof CANONICAL_GOOGLE_PLAY_URL,
  ];
  readonly url: typeof SITE_HOME_URL;
}

export interface SoftwareSourceCodeStructuredData {
  readonly "@id": typeof STRUCTURED_DATA_ENTITY_IDS.sourceCode;
  readonly "@type": "SoftwareSourceCode";
  readonly codeRepository: typeof FLASHCARDS_REPOSITORY_URL;
  readonly creator: StructuredDataEntityReference;
  readonly license: "https://opensource.org/licenses/MIT";
  readonly targetProduct: StructuredDataEntityReference;
}

export type SiteGraphEntity =
  | WebSiteStructuredData
  | PersonStructuredData
  | OrganizationStructuredData;

export interface SiteJsonLdGraph {
  readonly "@context": "https://schema.org";
  readonly "@graph": readonly SiteGraphEntity[];
}

export interface CreateSiteJsonLdGraphParams {
  readonly description: string;
  readonly locale: AppLocale;
}

export type ProductGraphEntity =
  | SoftwareApplicationStructuredData
  | SoftwareSourceCodeStructuredData;

export interface ProductJsonLdGraph {
  readonly "@context": "https://schema.org";
  readonly "@graph": readonly ProductGraphEntity[];
}

export interface CreateProductJsonLdGraphParams {
  readonly description: string;
  readonly locale: AppLocale;
  readonly offerNames: ProductOfferNames;
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
  params: CreateSiteJsonLdGraphParams
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

function createOfferStructuredData(
  name: ProductOfferNames[number],
  pricingPageUrl: string
): ProductOfferStructuredData {
  switch (name) {
    case "Free":
      return {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        url: pricingPageUrl,
      };
    case "Premium":
      return {
        "@type": "Offer",
        name: "Premium",
        price: "6.99",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "6.99",
          priceCurrency: "USD",
          billingDuration: "P1M",
          valueAddedTaxIncluded: true,
        },
        url: pricingPageUrl,
      };
  }
}

function createSoftwareApplicationStructuredData(
  params: CreateProductJsonLdGraphParams
): SoftwareApplicationStructuredData {
  const pricingPageUrl = getAbsoluteUrl(getLocalizedPathname(params.locale, "/pricing/"));

  return {
    "@id": STRUCTURED_DATA_ENTITY_IDS.software,
    "@type": ["WebApplication", "MobileApplication"],
    name: SITE_NAME,
    description: params.description,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, iOS, Android",
    license: "https://opensource.org/licenses/MIT",
    isAccessibleForFree: true,
    offers: params.offerNames.map((name) => createOfferStructuredData(name, pricingPageUrl)),
    image: FLASHCARDS_LOGO_URL,
    creator: CREATOR_REFERENCE,
    publisher: PUBLISHER_REFERENCE,
    url: SITE_HOME_URL,
    installUrl: [PRODUCT_APP_ORIGIN, CANONICAL_APP_STORE_URL, CANONICAL_GOOGLE_PLAY_URL],
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

/** Sitewide entities; they refer to the product only by `@id`. */
export function createSiteJsonLdGraph(
  params: CreateSiteJsonLdGraphParams
): SiteJsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createWebsiteStructuredData(params),
      CREATOR_ENTITY,
      PUBLISHER_ENTITY,
    ],
  };
}

/** Full product markup, rendered only on pages that show the offered prices. */
export function createProductJsonLdGraph(
  params: CreateProductJsonLdGraphParams
): ProductJsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createSoftwareApplicationStructuredData(params),
      createSoftwareSourceCodeStructuredData(),
    ],
  };
}
