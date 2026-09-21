"use client";

/**
 * Obtaining the shared `analytics_visitor` identity for this browser, and recording the consent
 * answer that may mint or clear it.
 *
 * This mirrors the app's `apps/web/src/analytics/visitorIdentity.ts` and the two calls behind it;
 * `docs/analytics-visitor-identity.md` in the app repository owns the contract. Sharing one cookie
 * with the app is what counts a person from their first site visit rather than from their first app
 * open; `src/lib/site.ts` states the domain that cookie is scoped to.
 */

import {
  isAnalyticsIdentityConsented,
  publishAnalyticsConsentJurisdiction,
  readAnalyticsConsentDecision,
  recordAnalyticsConsentDecision,
} from "@/lib/analyticsConsent";
import { hasAnalyticsPrivacySignal } from "@/lib/analyticsPrivacySignal";
import { PRODUCT_API_ORIGIN } from "@/lib/site";

interface AnalyticsVisitorEnvelope {
  readonly consentRequired: boolean;
  readonly visitorId: string | null;
}

const ANALYTICS_VISITOR_COOKIE_NAME = "analytics_visitor";
const ANALYTICS_VISITOR_URL = `${PRODUCT_API_ORIGIN}/v1/analytics/visitor`;
const ANALYTICS_VISITOR_UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/u;

let visitorIdentityTask: Promise<void> | null = null;

function readBrowserCookie(cookieName: string): string | null {
  for (const cookieEntry of document.cookie.split(";")) {
    const separatorIndex = cookieEntry.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    if (cookieEntry.slice(0, separatorIndex).trim() !== cookieName) {
      continue;
    }

    return cookieEntry.slice(separatorIndex + 1).trim();
  }

  return null;
}

/**
 * This browser's shared visitor id, or null when it holds none: the backend withheld one because
 * consent is required here, or the browser kept no cookie at all.
 */
export function readAnalyticsVisitorId(): string | null {
  const cookieValue = readBrowserCookie(ANALYTICS_VISITOR_COOKIE_NAME);

  if (cookieValue === null) {
    return null;
  }

  const visitorId = cookieValue.toLowerCase();

  return ANALYTICS_VISITOR_UUID_PATTERN.test(visitorId) ? visitorId : null;
}

/**
 * The id a reported event may carry, or null where this browser may carry none.
 *
 * There is deliberately no per-tab fallback for a browser that blocks cookies. The app keeps one
 * because a single-page session stays in one document; this site is multi-page, so a fabricated id
 * would be a fresh one on every navigation and would count one visitor many times over - the
 * outcome the contract names and forbids.
 */
export function readAnalyticsAnonymousId(): string | null {
  if (isAnalyticsIdentityConsented() === false) {
    return null;
  }

  return readAnalyticsVisitorId();
}

/**
 * The domain the shared cookie is published on: the API host's parent, which is this site's own
 * registrable domain and the domain the backend writes the cookie with.
 */
function readSharedVisitorCookieDomain(): string {
  const apiHostname = new URL(PRODUCT_API_ORIGIN).hostname;

  return apiHostname.slice(apiHostname.indexOf(".") + 1);
}

/**
 * Expires the shared cookie from the browser side, written with the attributes the backend mints it
 * with because a cookie is only replaced by one naming the same domain and path.
 *
 * Closes the window a refusal leaves open: a `GET` that was already in flight when the answer landed
 * carries its own `Set-Cookie`, and a browser that has just refused must end up without the
 * identifier rather than merely ignoring one.
 */
function clearAnalyticsVisitorCookie(): void {
  document.cookie = `${ANALYTICS_VISITOR_COOKIE_NAME}=; Domain=${readSharedVisitorCookieDomain()}; Path=/; Max-Age=0; Secure; SameSite=Lax`;
}

// An unreadable body is read as consent-required and no identity, the same way the route itself
// fails closed when it cannot place the caller.
function parseAnalyticsVisitorEnvelope(value: unknown): AnalyticsVisitorEnvelope {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return { consentRequired: true, visitorId: null };
  }

  const { consentRequired, visitorId } = value as Readonly<{
    consentRequired?: unknown;
    visitorId?: unknown;
  }>;

  return {
    consentRequired: consentRequired !== false,
    visitorId:
      typeof visitorId === "string" && visitorId !== "" ? visitorId : null,
  };
}

/**
 * `credentials: "include"` is what makes this work at all: the cookie is the whole effect of the
 * call, and a same-site cross-origin request sends and stores it only with credentials on both
 * sides. The route answers no cross-origin caller it has not been built with, so the site origin has
 * to be on the backend's browser origin allowlist.
 */
async function requestAnalyticsVisitor(
  requestInit: RequestInit,
): Promise<AnalyticsVisitorEnvelope> {
  const response = await fetch(ANALYTICS_VISITOR_URL, {
    ...requestInit,
    credentials: "include",
  });

  if (response.ok === false) {
    throw new Error(
      `Analytics visitor identity request failed. status=${response.status} requestId=${response.headers.get("X-Request-Id") ?? "none"}`,
    );
  }

  return parseAnalyticsVisitorEnvelope(await response.json());
}

async function runVisitorIdentityResolution(): Promise<void> {
  try {
    if (readAnalyticsVisitorId() !== null) {
      // This browser already carries the shared identity, and the cookie is itself the record that
      // it was allowed one: no banner is owed to a browser that already holds it.
      publishAnalyticsConsentJurisdiction(false);

      return;
    }

    // The answer's own `visitorId` is deliberately not read: it carries a fresh id whether or not
    // the browser stored the cookie that came with it, so the cookie is the only evidence that this
    // browser has an identity at all.
    const visitor = await requestAnalyticsVisitor({ method: "GET" });

    publishAnalyticsConsentJurisdiction(visitor.consentRequired);
  } catch {
    // This load will never be told what the country requires, and not knowing is not permission -
    // the same rule the route itself applies when it cannot place a caller. Published as "must be
    // asked", so the gate stays shut and the visitor is given the question rather than measured
    // without it. Nothing analytics does may surface to the visitor, so the failure ends here.
    publishAnalyticsConsentJurisdiction(true);
  }
}

/**
 * Asks the backend for the identity when this browser has none. Never gates rendering or an event:
 * a first visit can pay a country-database download inside the request, so the page renders and
 * events are held while it runs. One attempt per page load - a navigation is the retry, and the
 * static site gives every visitor plenty of them.
 */
export function resolveAnalyticsVisitorIdentity(): Promise<void> {
  if (hasAnalyticsPrivacySignal()) {
    // The signal opts out of measurement entirely, so the jurisdiction is never published: the gate
    // stays shut for the whole load, no banner is shown, and no identity is asked for or attached.
    return Promise.resolve();
  }

  if (readAnalyticsConsentDecision() === "declined") {
    // A browser that refused is never asked again. The refusal cleared the cookie, so the next
    // navigation finds none, and the route mints for any country that requires no consent: one more
    // `GET` would hand back the identity the refusal had just cleared, and the cookie is the
    // cross-origin record, so the app would then stop asking too.
    return Promise.resolve();
  }

  visitorIdentityTask ??= runVisitorIdentityResolution();

  return visitorIdentityTask;
}

/**
 * Records a grant, the one thing that turns a deliberately withheld identity into one this browser
 * may hold. The grant succeeded exactly when the answer carries a `visitorId`: the envelope's
 * `consentRequired` reports the jurisdiction on `POST`, not whether this browser still has to be
 * asked, so a granting European browser is answered `true` beside the id it was just given.
 */
export async function grantAnalyticsConsent(): Promise<boolean> {
  const visitor = await requestAnalyticsVisitor({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ granted: true }),
  });

  if (visitor.visitorId === null) {
    return false;
  }

  recordAnalyticsConsentDecision("granted");

  return true;
}

/**
 * Records a refusal. The browser is given no identifier at all from here on and keeps reporting
 * identity-free rows, which is what it was already doing while the question was open.
 *
 * The local record is stored before the call, not after it: it is what gates every client
 * behaviour, and `/analytics/` paths are a routine content-blocker target, so a refusal whose `POST`
 * never lands must still leave this browser refused rather than raise a banner it cannot answer.
 * Deliberately not symmetric with the grant, where nothing may be stored until the server has
 * actually minted the identity.
 */
export async function declineAnalyticsConsent(): Promise<void> {
  recordAnalyticsConsentDecision("declined");

  try {
    await requestAnalyticsVisitor({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ granted: false }),
    });
  } finally {
    // Settled before the clear rather than behind it: the task resolves only once the `GET` body has
    // been read, therefore once its own `Set-Cookie` has been applied. The withdrawal control is the
    // path that reaches this inside that window - it renders at mount, beside the `GET` the same
    // load started - and without the wait a refusal there could end with a freshly minted 13-month
    // identity still in place. Null on a load whose stored refusal returned early and started no
    // `GET`; the rejection is swallowed so a failed resolution cannot stand in for the `POST`'s own
    // error. In `finally`, so a refusal the network swallowed still ends with the identifier gone.
    await visitorIdentityTask?.catch(() => {});
    clearAnalyticsVisitorCookie();
  }
}
