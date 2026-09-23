import { isSiteAnalyticsCollectionEnabled } from "./analyticsConsent";
import { hasAnalyticsPrivacySignal } from "./analyticsPrivacySignal";
import { readAnalyticsAnonymousId } from "./analyticsVisitor";
import { resolveLocaleFromPathname, type AppLocale } from "./i18n";
import type { PublicCatalogInstallPlacement } from "./publicCatalogAnalytics";
import { PRODUCT_API_ORIGIN, PRODUCT_ROOT_HOSTNAMES } from "./site";

export type SiteSource =
  | "direct"
  | "search"
  | "social"
  | "referral"
  | "internal"
  | "unknown";

export type SiteDeviceCategory =
  | "desktop"
  | "mobile"
  | "tablet"
  | "unknown";

export type SitePageKind =
  | "home"
  | "blog_article"
  | "blog_index"
  | "catalog_package"
  | "catalog_index"
  | "catalog_other"
  | "pricing"
  | "features"
  | "docs"
  | "other";

export type SiteAppEntryTarget = "web_app" | "app_store" | "google_play";

export type SiteInternalCtaTarget = "home";

/**
 * What an app-entry CTA is and where it leads. The click and the impression below share this one
 * type rather than repeating two equal literals, mirroring the single property map the catalog
 * gives the pair, so neither half can drift and stop the two joining by equality.
 */
type SiteAppEntryEventProperties = Readonly<{
  target: SiteAppEntryTarget;
  page_kind: SitePageKind;
  placement: string;
  source: SiteSource;
  device_category: SiteDeviceCategory;
}>;

interface SiteAnalyticsEventPropertiesByName {
  readonly catalog_install_clicked: Readonly<{
    package_version_id: string;
    placement: PublicCatalogInstallPlacement;
    source: SiteSource;
    device_category: SiteDeviceCategory;
  }>;
  readonly site_page_viewed: Readonly<{
    page_kind: SitePageKind;
    page_path?: string;
    package_version_id?: string;
    source: SiteSource;
    device_category: SiteDeviceCategory;
  }>;
  readonly site_app_entry_clicked: SiteAppEntryEventProperties;
  readonly site_app_entry_shown: SiteAppEntryEventProperties;
  readonly site_internal_cta_clicked: Readonly<{
    target: SiteInternalCtaTarget;
    page_kind: SitePageKind;
    placement: string;
    source: SiteSource;
    device_category: SiteDeviceCategory;
  }>;
}

export type SiteAnalyticsEventName = keyof SiteAnalyticsEventPropertiesByName;

interface SiteAnalyticsErrorBody {
  readonly code: string | null;
}

/** Set by the catalog package page on an element carrying the package version id it installs. */
export const SITE_PACKAGE_VERSION_ID_ATTRIBUTE = "data-site-package-version-id";

const SITE_ANALYTICS_EVENT_URL = `${PRODUCT_API_ORIGIN}/v1/analytics/anonymous-events`;
const SOCIAL_HOSTNAMES = [
  "bsky.app",
  "facebook.com",
  "instagram.com",
  "linkedin.com",
  "pinterest.com",
  "reddit.com",
  "t.co",
  "threads.net",
  "tiktok.com",
  "twitter.com",
  "x.com",
  "youtube.com",
] as const;
const SEARCH_HOSTNAMES = [
  "baidu.com",
  "bing.com",
  "brave.com",
  "duckduckgo.com",
  "ecosia.org",
  "search.yahoo.com",
  "yandex.com",
  "yandex.ru",
] as const;

function createUuidV7(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  const timestamp = Date.now();

  bytes[0] = Math.floor(timestamp / 2 ** 40) & 0xff;
  bytes[1] = Math.floor(timestamp / 2 ** 32) & 0xff;
  bytes[2] = Math.floor(timestamp / 2 ** 24) & 0xff;
  bytes[3] = Math.floor(timestamp / 2 ** 16) & 0xff;
  bytes[4] = Math.floor(timestamp / 2 ** 8) & 0xff;
  bytes[5] = timestamp & 0xff;
  bytes[6] = (bytes[6] & 0x0f) | 0x70;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"));
  return [
    hex.slice(0, 4).join(""),
    hex.slice(4, 6).join(""),
    hex.slice(6, 8).join(""),
    hex.slice(8, 10).join(""),
    hex.slice(10).join(""),
  ].join("-");
}

function hostnameMatches(hostname: string, expectedHostname: string): boolean {
  return hostname === expectedHostname || hostname.endsWith(`.${expectedHostname}`);
}

function isGoogleSearchHostname(hostname: string): boolean {
  return hostname === "google.com"
    || hostname.startsWith("google.")
    || hostname.startsWith("www.google.");
}

export function classifySiteSource(
  referrer: string,
  currentHostname: string,
): SiteSource {
  if (referrer === "") {
    return "direct";
  }

  let referrerUrl: URL;
  try {
    referrerUrl = new URL(referrer);
  } catch {
    return "unknown";
  }

  if (referrerUrl.protocol !== "http:" && referrerUrl.protocol !== "https:") {
    return "unknown";
  }

  const hostname = referrerUrl.hostname.toLowerCase();
  if (
    hostnameMatches(hostname, currentHostname.toLowerCase())
    || PRODUCT_ROOT_HOSTNAMES.some((productHostname) =>
      hostnameMatches(hostname, productHostname))
  ) {
    return "internal";
  }

  if (
    isGoogleSearchHostname(hostname)
    || SEARCH_HOSTNAMES.some((searchHostname) =>
      hostnameMatches(hostname, searchHostname))
  ) {
    return "search";
  }

  if (
    SOCIAL_HOSTNAMES.some((socialHostname) =>
      hostnameMatches(hostname, socialHostname))
  ) {
    return "social";
  }

  return "referral";
}

export function getSiteDeviceCategory(): SiteDeviceCategory {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent === "") {
    return "unknown";
  }

  const isIpad = userAgent.includes("ipad")
    || (userAgent.includes("macintosh") && navigator.maxTouchPoints > 1);
  const isAndroidTablet = userAgent.includes("android")
    && userAgent.includes("mobile") === false;
  if (isIpad || isAndroidTablet || userAgent.includes("tablet")) {
    return "tablet";
  }

  if (
    userAgent.includes("mobile")
    || userAgent.includes("iphone")
    || userAgent.includes("ipod")
    || userAgent.includes("android")
  ) {
    return "mobile";
  }

  return "desktop";
}

/** Locale prefixes are stripped first, so every locale copy of a route has one kind. */
export function getSitePageKind(pathname: string): SitePageKind {
  const { routePathname } = resolveLocaleFromPathname(pathname);

  if (routePathname === "/") {
    return "home";
  }

  if (routePathname === "/blog/") {
    return "blog_index";
  }

  if (routePathname.startsWith("/blog/")) {
    return "blog_article";
  }

  if (routePathname === "/catalog/") {
    return "catalog_index";
  }

  if (routePathname.startsWith("/catalog/packages/")) {
    return "catalog_package";
  }

  if (routePathname.startsWith("/catalog/")) {
    return "catalog_other";
  }

  if (routePathname === "/pricing/") {
    return "pricing";
  }

  if (routePathname === "/features/") {
    return "features";
  }

  if (routePathname.startsWith("/docs/")) {
    return "docs";
  }

  return "other";
}

// The shape the collector accepts for `page_path`, plus its own cap on every string property.
const SITE_PAGE_PATH_PATTERN = /^\/(?:[a-z0-9][a-z0-9._-]{0,78}\/){0,6}$/u;
const SITE_PAGE_PATH_MAX_LENGTH = 200;

/**
 * The locale-stripped route of a page, as the collector accepts it. A route outside that shape
 * answers null so the page view still goes out without the property: an explicit null or empty
 * string would fail the collector's strict parse and refuse the whole event.
 */
export function getSitePagePath(pathname: string): string | null {
  const { routePathname } = resolveLocaleFromPathname(pathname);
  const pagePath = routePathname.toLowerCase();

  if (
    pagePath.length > SITE_PAGE_PATH_MAX_LENGTH
    || SITE_PAGE_PATH_PATTERN.test(pagePath) === false
  ) {
    console.warn("site_page_path_unsupported", { pathname });
    return null;
  }

  return pagePath;
}

function parseSiteAnalyticsErrorBody(value: unknown): SiteAnalyticsErrorBody {
  if (typeof value !== "object" || value === null || !("code" in value)) {
    return { code: null };
  }

  const code = value.code;
  return {
    code: typeof code === "string" && code.length <= 128 ? code : null,
  };
}

export function warnAboutSiteAnalyticsFailure(
  eventName: SiteAnalyticsEventName,
  code: string | null,
  requestId: string | null,
  responseStatus: number | null,
): void {
  console.warn("site_analytics_error", {
    code,
    eventName,
    requestId,
    responseStatus,
  });
}

async function warnAboutRejectedSiteAnalyticsEvent(
  eventName: SiteAnalyticsEventName,
  response: Response,
): Promise<void> {
  let code: string | null;
  try {
    const body: unknown = await response.json();
    code = parseSiteAnalyticsErrorBody(body).code;
  } catch {
    code = "INVALID_ERROR_RESPONSE";
  }

  warnAboutSiteAnalyticsFailure(
    eventName,
    code,
    response.headers.get("X-Request-Id"),
    response.status,
  );
}

/**
 * Reports one fact to the product's anonymous collector without blocking the caller. Nothing is sent
 * when the browser raises Global Privacy Control or Do Not Track, and nothing when this browser has
 * turned collection off - that switch is an off switch, not a demotion to identity-free reporting,
 * which is what refusing the cookie already gives.
 *
 * `credentials: "omit"` stays. The collector reads no credential at all, and its CORS allowlist
 * carries no `Access-Control-Allow-Credentials`, so a credentialed request here would be refused by
 * the browser rather than carry anything useful. The identity travels in `anonymousId` instead, read
 * from the cookie the visitor identity route minted on this same registrable domain.
 *
 * `readAnalyticsAnonymousId` answers null for every browser that may not carry one - one that
 * refused, and one whose consent question is still open - so an event that happens before an answer
 * exists is reported here and now with no identifier attached, exactly as a declining browser's is.
 * Holding it instead would lose it: this site has no durable queue, and the top of the funnel is
 * precisely where a first-time visitor acts before reading a banner.
 */
export function sendSiteAnalyticsEvent<EventName extends SiteAnalyticsEventName>(
  eventName: EventName,
  clientOccurredAt: string,
  uiLocale: AppLocale,
  properties: SiteAnalyticsEventPropertiesByName[EventName],
): void {
  if (hasAnalyticsPrivacySignal() || isSiteAnalyticsCollectionEnabled() === false) {
    return;
  }

  try {
    const anonymousId = readAnalyticsAnonymousId();
    const body = {
      eventId: createUuidV7(),
      eventName,
      clientOccurredAt,
      clientSentAt: new Date().toISOString(),
      ...(anonymousId === null ? {} : { anonymousId }),
      uiLocale,
      deviceLocale: navigator.language,
      properties,
    };

    void fetch(SITE_ANALYTICS_EVENT_URL, {
      body: JSON.stringify(body),
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      method: "POST",
    }).then((response) => {
      if (response.ok === false) {
        void warnAboutRejectedSiteAnalyticsEvent(eventName, response);
      }
    }).catch(() => {
      warnAboutSiteAnalyticsFailure(eventName, "NETWORK_ERROR", null, null);
    });
  } catch {
    warnAboutSiteAnalyticsFailure(eventName, "CLIENT_SETUP_ERROR", null, null);
  }
}
