import { hasAnalyticsPrivacySignal } from "./analyticsPrivacySignal";
import { readAnalyticsAnonymousId } from "./analyticsVisitor";
import type { AppLocale } from "./i18n";
import type { PublicCatalogInstallPlacement } from "./publicCatalogAnalytics";
import { PRODUCT_API_ORIGIN, PRODUCT_ROOT_HOSTNAMES } from "./site";

type CatalogInstallSource =
  | "direct"
  | "search"
  | "social"
  | "referral"
  | "internal"
  | "unknown";

type CatalogInstallDeviceCategory =
  | "desktop"
  | "mobile"
  | "tablet"
  | "unknown";

interface CatalogInstallErrorBody {
  readonly code: string | null;
}

interface CatalogInstallEventProperties {
  readonly package_version_id: string;
  readonly placement: PublicCatalogInstallPlacement;
  readonly source: CatalogInstallSource;
  readonly device_category: CatalogInstallDeviceCategory;
}

/**
 * Everything about one click that is read off the page, kept apart from the two fields the send
 * decides: the visitor identifier, which depends on the consent answer, and `clientSentAt`.
 */
interface CatalogInstallEventDraft {
  readonly eventId: string;
  readonly clientOccurredAt: string;
  readonly uiLocale: AppLocale;
  readonly deviceLocale: string;
  readonly properties: CatalogInstallEventProperties;
}

const CATALOG_INSTALL_EVENT_NAME = "catalog_install_clicked";
const CATALOG_INSTALL_EVENT_URL = `${PRODUCT_API_ORIGIN}/v1/analytics/catalog-install-events`;
// Both app host families. The catalog install links the backend renders move to the new host at the
// web cutover, and a validator naming only one of them would reject every link on one side of that
// day and silently stop reporting the funnel step this whole path exists for.
const CATALOG_APP_HOSTNAMES: ReadonlyArray<string> = [
  "app.nibomo.com",
  "app.flashcards-open-source-app.com",
];
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const PACKAGE_VERSION_PATH_PATTERN =
  /^\/catalog\/import\/([0-9a-f-]+)\/?$/i;
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

function classifyCatalogInstallSource(
  referrer: string,
  currentHostname: string,
): CatalogInstallSource {
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

function getCatalogInstallDeviceCategory(): CatalogInstallDeviceCategory {
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

function parseCatalogInstallErrorBody(value: unknown): CatalogInstallErrorBody {
  if (typeof value !== "object" || value === null || !("code" in value)) {
    return { code: null };
  }

  const code = value.code;
  return {
    code: typeof code === "string" && code.length <= 128 ? code : null,
  };
}

async function warnAboutRejectedCatalogInstallEvent(
  response: Response,
): Promise<void> {
  let code: string | null;
  try {
    const body: unknown = await response.json();
    code = parseCatalogInstallErrorBody(body).code;
  } catch {
    code = "INVALID_ERROR_RESPONSE";
  }

  console.warn("catalog_install_analytics_error", {
    code,
    eventName: CATALOG_INSTALL_EVENT_NAME,
    requestId: response.headers.get("X-Request-Id"),
    responseStatus: response.status,
  });
}

/**
 * `credentials: "omit"` stays. The collector reads no credential at all, and its CORS allowlist
 * carries no `Access-Control-Allow-Credentials`, so a credentialed request here would be refused by
 * the browser rather than carry anything useful. The identity travels in `anonymousId` instead, read
 * from the cookie the visitor identity route minted on this same registrable domain.
 *
 * `readAnalyticsAnonymousId` answers null for every browser that may not carry one - one that
 * refused, and one whose consent question is still open - so a click that happens before an answer
 * exists is reported here and now with no identifier attached, exactly as a declining browser's is.
 * Holding it instead would lose it: this site has no durable queue, and the top of the funnel is
 * precisely where a first-time visitor clicks before reading a banner.
 */
function sendCatalogInstallEvent(draft: CatalogInstallEventDraft): void {
  const anonymousId = readAnalyticsAnonymousId();
  const body = {
    eventId: draft.eventId,
    eventName: CATALOG_INSTALL_EVENT_NAME,
    clientOccurredAt: draft.clientOccurredAt,
    clientSentAt: new Date().toISOString(),
    ...(anonymousId === null ? {} : { anonymousId }),
    uiLocale: draft.uiLocale,
    deviceLocale: draft.deviceLocale,
    properties: draft.properties,
  };

  void fetch(CATALOG_INSTALL_EVENT_URL, {
    body: JSON.stringify(body),
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    method: "POST",
  }).then((response) => {
    if (response.ok === false) {
      void warnAboutRejectedCatalogInstallEvent(response);
    }
  }).catch(() => {
    console.warn("catalog_install_analytics_error", {
      code: "NETWORK_ERROR",
      eventName: CATALOG_INSTALL_EVENT_NAME,
      requestId: null,
      responseStatus: null,
    });
  });
}

function getPackageVersionId(installUrl: URL): string {
  if (
    installUrl.protocol !== "https:"
    || CATALOG_APP_HOSTNAMES.includes(installUrl.hostname.toLowerCase()) === false
  ) {
    throw new TypeError("Catalog install URL must use a canonical app origin.");
  }

  const pathMatch = PACKAGE_VERSION_PATH_PATTERN.exec(installUrl.pathname);
  const packageVersionId = pathMatch?.[1] ?? "";
  if (UUID_PATTERN.test(packageVersionId) === false) {
    throw new TypeError("Catalog install URL must end with a package version UUID.");
  }

  return packageVersionId.toLowerCase();
}

export function reportPublicCatalogInstallClick(
  href: string,
  locale: AppLocale,
  placement: PublicCatalogInstallPlacement,
): void {
  if (hasAnalyticsPrivacySignal()) {
    return;
  }

  try {
    const draft: CatalogInstallEventDraft = {
      eventId: createUuidV7(),
      clientOccurredAt: new Date().toISOString(),
      uiLocale: locale,
      deviceLocale: navigator.language,
      properties: {
        package_version_id: getPackageVersionId(new URL(href)),
        placement,
        source: classifyCatalogInstallSource(
          document.referrer,
          window.location.hostname,
        ),
        device_category: getCatalogInstallDeviceCategory(),
      },
    };

    sendCatalogInstallEvent(draft);
  } catch {
    console.warn("catalog_install_analytics_error", {
      code: "CLIENT_SETUP_ERROR",
      eventName: CATALOG_INSTALL_EVENT_NAME,
      requestId: null,
      responseStatus: null,
    });
  }
}
