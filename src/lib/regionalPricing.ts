import { PRODUCT_API_ORIGIN, SITE_URL } from "./site";

interface RegionalPrice {
  readonly currency: string;
  readonly unitAmount: number;
  readonly interval: "month";
  readonly taxBehavior: "inclusive";
}

export type PublicRegionalOffer = {
  readonly state: "offer";
  readonly supportedCountryCodes: readonly string[];
  readonly selectedCountry: string;
  readonly countrySource: "explicit" | "ip";
  readonly offer: {
    readonly pricingBand: "full" | "discounted";
    readonly basePrice: RegionalPrice;
    readonly trialDays: 7;
    readonly trialEligibility: "eligible_new_subscribers";
    readonly salesAvailable: boolean;
    readonly salesUnavailableReason: "purchases_disabled" | "country_unavailable" | null;
  };
} | {
  readonly state: "needs_country";
  readonly supportedCountryCodes: readonly string[];
  readonly selectedCountry: null;
  readonly countrySource: null;
  readonly reason: "unknown_country" | "detection_unavailable";
  readonly offer: null;
};

function object(value: unknown): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new TypeError("Regional offer must contain a JSON object.");
  }
  return value as Record<string, unknown>;
}

function parseRegionalOffer(value: unknown): PublicRegionalOffer {
  const data = object(value);
  const codes = data.supportedCountryCodes;
  if (!Array.isArray(codes) || codes.length === 0 || !codes.every((code: unknown) => typeof code === "string" && /^[A-Z]{2}$/.test(code)) || new Set(codes).size !== codes.length) {
    throw new TypeError("Regional offer has an invalid supported country list.");
  }
  if (data.state === "needs_country" && data.selectedCountry === null && data.countrySource === null && data.offer === null && (data.reason === "unknown_country" || data.reason === "detection_unavailable")) {
    return { state: data.state, supportedCountryCodes: codes, selectedCountry: null, countrySource: null, offer: null, reason: data.reason };
  }
  const offer = object(data.offer);
  const price = object(offer.basePrice);
  if (data.state !== "offer" || typeof data.selectedCountry !== "string" || !codes.includes(data.selectedCountry) || (data.countrySource !== "explicit" && data.countrySource !== "ip")
    || (offer.pricingBand !== "full" && offer.pricingBand !== "discounted") || offer.trialDays !== 7 || offer.trialEligibility !== "eligible_new_subscribers"
    || typeof offer.salesAvailable !== "boolean" || ![null, "purchases_disabled", "country_unavailable"].includes(offer.salesUnavailableReason as string | null)
    || (offer.salesAvailable !== (offer.salesUnavailableReason === null))
    || typeof price.currency !== "string" || !/^[a-zA-Z]{3}$/.test(price.currency) || typeof price.unitAmount !== "number" || !Number.isSafeInteger(price.unitAmount) || price.unitAmount < 0
    || price.interval !== "month" || price.taxBehavior !== "inclusive") {
    throw new TypeError("Regional offer has invalid price, country, or availability fields.");
  }
  return {
    state: data.state, supportedCountryCodes: codes, selectedCountry: data.selectedCountry, countrySource: data.countrySource,
    offer: {
      pricingBand: offer.pricingBand, trialDays: offer.trialDays, trialEligibility: offer.trialEligibility,
      salesAvailable: offer.salesAvailable, salesUnavailableReason: offer.salesUnavailableReason as "purchases_disabled" | "country_unavailable" | null,
      basePrice: { currency: price.currency, unitAmount: price.unitAmount, interval: price.interval, taxBehavior: price.taxBehavior },
    },
  };
}

export async function fetchRegionalOffer(country: string | null, signal: AbortSignal): Promise<PublicRegionalOffer> {
  const url = new URL("/v1/billing/regional-offer", PRODUCT_API_ORIGIN);
  if (country !== null) url.searchParams.set("country", country);
  const response = await fetch(url, { credentials: "omit", cache: "no-store", signal });
  if (!response.ok) {
    throw new Error(`Regional offer request failed: country=${country ?? "IP"}, status=${response.status}, requestId=${response.headers.get("x-request-id")}, body=${await response.text()}`);
  }
  const offer = parseRegionalOffer(await response.json());
  if (country !== null && (offer.state !== "offer" || offer.selectedCountry !== country || offer.countrySource !== "explicit")) {
    throw new TypeError("Regional offer does not match the requested country: " + country);
  }
  return offer;
}

const COUNTRY_COOKIE = "nibomo_pricing_country";

export function readPricingCountry(codes: readonly string[]): string | null {
  const query = new URL(window.location.href).searchParams.getAll("pricing_country");
  if (query.length === 1 && codes.includes(query[0])) return query[0];
  const cookie = document.cookie.split(";").map(part => part.trim()).find(part => part.startsWith(COUNTRY_COOKIE + "="))?.slice(COUNTRY_COOKIE.length + 1);
  return cookie !== undefined && codes.includes(cookie) ? cookie : null;
}

export function rememberPricingCountry(country: string, codes: readonly string[]): void {
  if (!codes.includes(country)) throw new TypeError("Cannot remember an unsupported pricing country: " + country);
  const root = new URL(SITE_URL).hostname;
  const host = window.location.hostname;
  const domain = host === root || host.endsWith("." + root) ? "; Domain=" + root : "";
  document.cookie = `${COUNTRY_COOKIE}=${country}; Path=/; Secure; SameSite=Lax; Max-Age=31536000${domain}`;
  if (!document.cookie.split(";").some(part => part.trim() === `${COUNTRY_COOKIE}=${country}`)) {
    throw new Error("Pricing country could not be saved in browser cookies.");
  }
}
