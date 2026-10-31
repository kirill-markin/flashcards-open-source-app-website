import type { AppLocale } from "@/lib/localeConfig";
import { CATALOG_APP_HOSTNAMES, PRODUCT_APP_ORIGIN } from "@/lib/site";

export function getAppUrl(destination: string, locale: AppLocale, pricingCountry?: string): string {
  const url = new URL(destination, PRODUCT_APP_ORIGIN);
  if (
    url.protocol !== "https:"
    || CATALOG_APP_HOSTNAMES.includes(url.hostname.toLowerCase()) === false
    || url.port !== ""
    || url.username !== ""
    || url.password !== ""
  ) {
    throw new TypeError("App entry URL must use an allowed HTTPS app origin: " + destination);
  }

  const appUrl = new URL(PRODUCT_APP_ORIGIN);
  appUrl.pathname = url.pathname;
  appUrl.search = url.search;
  appUrl.hash = url.hash;
  appUrl.searchParams.set("locale", locale);
  if (pricingCountry !== undefined) {
    if (!/^[A-Z]{2}$/.test(pricingCountry)) throw new TypeError("Invalid app-entry pricing country: " + pricingCountry);
    appUrl.searchParams.set("pricing_country", pricingCountry);
  }
  return appUrl.href;
}
