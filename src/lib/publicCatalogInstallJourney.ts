import type { AppLocale } from "./i18n";
import type { PublicCatalogInstallPlacement } from "./publicCatalogAnalytics";
import { SITE_URL } from "./site";

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

interface NavigatorPrivacySignals {
  readonly globalPrivacyControl?: boolean;
  readonly msDoNotTrack?: string | null;
}

interface WindowPrivacySignals {
  readonly doNotTrack?: string | null;
}

interface CatalogInstallErrorBody {
  readonly code: string | null;
}

const CATALOG_INSTALL_EVENT_NAME = "catalog_install_clicked";
const CATALOG_INSTALL_EVENT_URL =
  "https://api.flashcards-open-source-app.com/v1/analytics/catalog-install-events";
const CATALOG_APP_HOSTNAME = "app.flashcards-open-source-app.com";
const INSTALL_JOURNEY_QUERY_PARAMETER = "install_journey_id";
const PRODUCT_HOSTNAME = new URL(SITE_URL).hostname;
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
    || hostnameMatches(hostname, PRODUCT_HOSTNAME)
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

function hasCatalogInstallPrivacySignal(): boolean {
  const privacyNavigator = navigator as Navigator & NavigatorPrivacySignals;
  const privacyWindow = window as Window & WindowPrivacySignals;

  return privacyNavigator.globalPrivacyControl === true
    || privacyNavigator.doNotTrack === "1"
    || privacyNavigator.msDoNotTrack === "1"
    || privacyWindow.doNotTrack === "1";
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

function emitCatalogInstallClick(
  installJourneyId: string,
  packageVersionId: string,
  locale: AppLocale,
  placement: PublicCatalogInstallPlacement,
): void {
  const occurredAt = new Date().toISOString();
  const body = {
    eventId: createUuidV7(),
    eventName: CATALOG_INSTALL_EVENT_NAME,
    clientOccurredAt: occurredAt,
    clientSentAt: occurredAt,
    uiLocale: locale,
    deviceLocale: navigator.language,
    properties: {
      install_journey_id: installJourneyId,
      package_version_id: packageVersionId,
      placement,
      source: classifyCatalogInstallSource(
        document.referrer,
        window.location.hostname,
      ),
      device_category: getCatalogInstallDeviceCategory(),
    },
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
    || installUrl.hostname.toLowerCase() !== CATALOG_APP_HOSTNAME
  ) {
    throw new TypeError("Catalog install URL must use the canonical app origin.");
  }

  const pathMatch = PACKAGE_VERSION_PATH_PATTERN.exec(installUrl.pathname);
  const packageVersionId = pathMatch?.[1] ?? "";
  if (UUID_PATTERN.test(packageVersionId) === false) {
    throw new TypeError("Catalog install URL must end with a package version UUID.");
  }

  return packageVersionId.toLowerCase();
}

export function activatePublicCatalogInstallJourney(
  href: string,
  locale: AppLocale,
  placement: PublicCatalogInstallPlacement,
): string {
  if (hasCatalogInstallPrivacySignal()) {
    return href;
  }

  try {
    const installUrl = new URL(href);
    const packageVersionId = getPackageVersionId(installUrl);
    const installJourneyId = createUuidV7();
    installUrl.searchParams.set(INSTALL_JOURNEY_QUERY_PARAMETER, installJourneyId);
    emitCatalogInstallClick(
      installJourneyId,
      packageVersionId,
      locale,
      placement,
    );
    return installUrl.toString();
  } catch {
    console.warn("catalog_install_analytics_error", {
      code: "CLIENT_SETUP_ERROR",
      eventName: CATALOG_INSTALL_EVENT_NAME,
      requestId: null,
      responseStatus: null,
    });
    return href;
  }
}
