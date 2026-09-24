import { isSiteAnalyticsCollectionEnabled } from "./analyticsConsent";
import { hasAnalyticsPrivacySignal } from "./analyticsPrivacySignal";
import { readAnalyticsAnonymousId } from "./analyticsVisitor";
import { resolveLocaleFromPathname, type AppLocale } from "./i18n";
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

/** The app-entry targets a store QR card can stand behind; the web app CTA has no card. */
export type SiteAppEntryStoreTarget = Exclude<SiteAppEntryTarget, "web_app">;

/** Which way into the web app a CTA offers; a store CTA offers no such choice and carries none. */
export type SiteAppEntryAction = "login" | "signup" | "open_app";

export type SiteInternalCtaTarget = "home";

export type SiteOutboundTarget = "repository";

export type SiteCopyTarget = "mcp_endpoint";

export type SiteLocaleSuggestionOutcome = "opened" | "dismissed";

/**
 * The catalog vocabularies as the backend catalog spells them, rather than the site's own browse
 * and install types they happen to equal today. The collector refuses a value the catalog does not
 * list, so holding the closed sets here turns a sort, a facet, a card part or an install slot the
 * site gains into a compile error where a producer hands its own widened type over, instead of a
 * whole event series that stops being stored with no local signal.
 */
export type SiteCatalogInstallPlacement = "top" | "middle" | "bottom";
export type SiteCatalogSort = "relevance" | "title" | "newest";
export type SiteCatalogFilterAction = "add" | "clear" | "remove" | "select";
export type SiteCatalogFilterCategory =
  | "all"
  | "author"
  | "collection"
  | "language";
export type SiteCatalogDeckPlacement =
  | "card_cover"
  | "card_title"
  | "related_deck";

/** The consent and collection facts are the decision itself and carry nothing beside it. */
type SiteEmptyEventProperties = Readonly<Record<string, never>>;

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

/**
 * A store QR card carries the app-entry click's own properties with the target narrowed to the two
 * that can have a card, so a QR show and the click it may precede join by equality on the rest.
 *
 * The shape is shared, but the backend catalog declares this event's properties independently and
 * refuses anything else, so a property added for the app-entry pair has to be declared there before
 * it can be sent here.
 */
type SiteStoreQrEventProperties = Readonly<
  Omit<SiteAppEntryEventProperties, "target">
  & { target: SiteAppEntryStoreTarget }
>;

interface SiteAnalyticsEventPropertiesByName {
  readonly catalog_install_clicked: Readonly<{
    package_version_id: string;
    placement: SiteCatalogInstallPlacement;
    source: SiteSource;
    device_category: SiteDeviceCategory;
  }>;
  /**
   * `referrer_host` and the three `utm_*` properties say where the visit came from, which `source`
   * only sorts into six buckets. They are optional the way `page_path` is: a direct visit has no
   * referrer, an uncampaigned link has no `utm_*`, and a value outside its shape is left out rather
   * than trimmed into one. They sit here alone because a visit begins once.
   */
  readonly site_page_viewed: Readonly<{
    page_kind: SitePageKind;
    page_path?: string;
    package_version_id?: string;
    source: SiteSource;
    device_category: SiteDeviceCategory;
    referrer_host?: SiteReferrerHost;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  }>;
  /**
   * `action` is added on top of the shared app-entry map rather than into it, so the impression
   * keeps exactly the properties it had and the two halves still join by equality on them. It is
   * optional because a store click has no such choice to carry.
   */
  readonly site_app_entry_clicked: Readonly<
    SiteAppEntryEventProperties & { action?: SiteAppEntryAction }
  >;
  readonly site_app_entry_shown: SiteAppEntryEventProperties;
  readonly site_store_qr_shown: SiteStoreQrEventProperties;
  readonly site_internal_cta_clicked: Readonly<{
    target: SiteInternalCtaTarget;
    page_kind: SitePageKind;
    placement: string;
    source: SiteSource;
    device_category: SiteDeviceCategory;
  }>;
  /**
   * How the public catalog was browsed. The browse vocabularies are the closed sets spelled above
   * rather than the site's own browse types, so a facet, a sort or a card part the site gains is a
   * compile error where its producer passes the widened type here, instead of an event the
   * collector refuses in production.
   *
   * `query_length` stands beside `query_text` rather than being derived from it: the text is absent
   * whenever the normalized query does not fit the collector's shape, and the length is then the
   * only thing left about that search.
   */
  readonly site_catalog_searched: Readonly<{
    query_length: number;
    result_count: number;
    query_text?: string;
  }>;
  readonly site_catalog_filtered: Readonly<{
    action: SiteCatalogFilterAction;
    category: SiteCatalogFilterCategory;
    result_count: number;
    selected_count: number;
  }>;
  readonly site_catalog_sorted: Readonly<{
    sort: SiteCatalogSort;
    result_count: number;
  }>;
  readonly site_catalog_paginated: Readonly<{
    page: number;
    total_pages: number;
    result_count: number;
  }>;
  readonly site_catalog_deck_opened: Readonly<{
    package_slug: string;
    placement: SiteCatalogDeckPlacement;
  }>;
  /**
   * This site's own consent decision and the collection switch moved after it was answered, which
   * is a different fact from the answer. All of them but the grant are identity-free, listed as
   * such in `SITE_IDENTITY_FREE_EVENT_NAMES` below.
   */
  readonly site_consent_prompt_shown: SiteEmptyEventProperties;
  readonly site_consent_granted: SiteEmptyEventProperties;
  readonly site_consent_declined: SiteEmptyEventProperties;
  readonly site_collection_disabled: SiteEmptyEventProperties;
  readonly site_collection_enabled: SiteEmptyEventProperties;
  readonly site_outbound_clicked: Readonly<{
    target: SiteOutboundTarget;
    page_kind: SitePageKind;
    placement: string;
    source: SiteSource;
    device_category: SiteDeviceCategory;
  }>;
  /** A copy carries no acquisition: it is an act on the page, and the visit's is on the page view. */
  readonly site_copy_action: Readonly<{
    target: SiteCopyTarget;
    page_kind: SitePageKind;
    placement: string;
  }>;
  /** `suggested_locale` is the language offered and never the one the page is already in. */
  readonly site_locale_suggestion_shown: Readonly<{
    suggested_locale: AppLocale;
    page_kind: SitePageKind;
  }>;
  readonly site_locale_suggestion_answered: Readonly<{
    suggested_locale: AppLocale;
    outcome: SiteLocaleSuggestionOutcome;
    page_kind: SitePageKind;
  }>;
}

export type SiteAnalyticsEventName = keyof SiteAnalyticsEventPropertiesByName;

/**
 * The events the collector stores with no identity at all. It refuses one that claims an
 * `anonymousId` rather than stripping it, so `sendSiteAnalyticsEvent` never reads the visitor id for
 * a name listed here and no producer can attach one by forgetting. The grant is absent on purpose:
 * it is the moment an id may exist at all.
 */
const SITE_IDENTITY_FREE_EVENT_NAMES: readonly SiteAnalyticsEventName[] = [
  "site_consent_prompt_shown",
  "site_consent_declined",
  "site_collection_disabled",
  "site_collection_enabled",
];

interface SiteAnalyticsErrorBody {
  readonly code: string | null;
}

/** Set by the catalog package page on an element carrying the package version id it installs. */
export const SITE_PACKAGE_VERSION_ID_ATTRIBUTE = "data-site-package-version-id";

const SITE_ANALYTICS_EVENT_URL = `${PRODUCT_API_ORIGIN}/v1/analytics/anonymous-events`;
const GOOGLE_SEARCH_HOSTNAME = "google.com";
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

/**
 * The host of the site a visit came from, reduced to one this file already names: every Google
 * country domain answers `google.com`, every other known search or social site answers its own
 * entry, and anything else answers `other`. The property therefore carries no host we did not name,
 * and every value it can take fits the collector's host shape without the producer testing it.
 */
export type SiteReferrerHost =
  | typeof GOOGLE_SEARCH_HOSTNAME
  | (typeof SEARCH_HOSTNAMES)[number]
  | (typeof SOCIAL_HOSTNAMES)[number]
  | "other";

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
  return hostname === GOOGLE_SEARCH_HOSTNAME
    || hostname.startsWith("google.")
    || hostname.startsWith("www.google.");
}

/**
 * A Google search host proper: `google.com`, a country domain, or a two-label one such as
 * `google.co.uk`, each optionally under `www.`. `classifySiteSource` keeps the looser prefix check
 * above unchanged, because there it only over-claims the bucket `search`; `referrer_host` names a
 * host outright, and `google.anything.example` passing that check would assert a site the visitor
 * never came from, so the host classifier answers by this predicate instead.
 */
const GOOGLE_SEARCH_HOSTNAME_PATTERN =
  /^(?:www\.)?google\.(?:com|[a-z]{2}|(?:co|com)\.[a-z]{2})$/u;

function isNamedGoogleSearchHostname(hostname: string): boolean {
  return GOOGLE_SEARCH_HOSTNAME_PATTERN.test(hostname);
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

/**
 * Which site sent the visit, where `classifySiteSource` above says only what kind of site it was.
 * A same-site referrer - including the page a client-side navigation just left - and an absent one
 * answer null, because the visit came from nowhere else to name; the page view then leaves the
 * property out rather than sending an empty value the collector would refuse the whole event for.
 * `other` covers both an unnamed external site and a referrer that named no parseable site at all,
 * such as an `android-app://` one, which `source` separates as `referral` from `unknown`.
 */
export function classifySiteReferrerHost(
  referrer: string,
  currentHostname: string,
): SiteReferrerHost | null {
  if (referrer === "") {
    return null;
  }

  let referrerUrl: URL;
  try {
    referrerUrl = new URL(referrer);
  } catch {
    return "other";
  }

  if (referrerUrl.protocol !== "http:" && referrerUrl.protocol !== "https:") {
    return "other";
  }

  const hostname = referrerUrl.hostname.toLowerCase();
  if (
    hostnameMatches(hostname, currentHostname.toLowerCase())
    || PRODUCT_ROOT_HOSTNAMES.some((productHostname) =>
      hostnameMatches(hostname, productHostname))
  ) {
    return null;
  }

  if (isNamedGoogleSearchHostname(hostname)) {
    return GOOGLE_SEARCH_HOSTNAME;
  }

  const searchHostname = SEARCH_HOSTNAMES.find((knownHostname) =>
    hostnameMatches(hostname, knownHostname));
  if (searchHostname !== undefined) {
    return searchHostname;
  }

  const socialHostname = SOCIAL_HOSTNAMES.find((knownHostname) =>
    hostnameMatches(hostname, knownHostname));
  if (socialHostname !== undefined) {
    return socialHostname;
  }

  return "other";
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

/**
 * The shape the collector accepts for a campaign token. Both separators are admitted and neither is
 * rewritten into the other, because equality with the campaign as it is spelled in the store and in
 * the ad platform is the whole point of carrying it; case is the one normalization taken, because
 * the collector admits lowercase alone.
 */
const SITE_CAMPAIGN_TOKEN_PATTERN = /^[a-z0-9](?:[a-z0-9_-]{0,62}[a-z0-9])?$/u;

export interface SiteCampaignParameters {
  readonly utmSource: string | null;
  readonly utmMedium: string | null;
  readonly utmCampaign: string | null;
}

function readSiteCampaignToken(
  parameters: URLSearchParams,
  parameterName: string,
): string | null {
  const value = parameters.get(parameterName)?.toLowerCase() ?? null;
  if (value === null || SITE_CAMPAIGN_TOKEN_PATTERN.test(value) === false) {
    return null;
  }

  return value;
}

/**
 * The three campaign parameters of an address, lowercased. A value outside the token shape answers
 * null so the page view still goes out without that property: somebody else's link can spell a
 * campaign any way it likes, and trimming one into shape would report a campaign nobody ran.
 */
export function readSiteCampaignParameters(search: string): SiteCampaignParameters {
  const parameters = new URLSearchParams(search);

  return {
    utmSource: readSiteCampaignToken(parameters, "utm_source"),
    utmMedium: readSiteCampaignToken(parameters, "utm_medium"),
    utmCampaign: readSiteCampaignToken(parameters, "utm_campaign"),
  };
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
    const anonymousId = SITE_IDENTITY_FREE_EVENT_NAMES.includes(eventName)
      ? null
      : readAnalyticsAnonymousId();
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
