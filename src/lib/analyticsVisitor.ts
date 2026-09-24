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
  clearGrantedAnalyticsConsentDecision,
  isAnalyticsIdentityConsented,
  isSiteAnalyticsCollectionEnabled,
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
 * Global Privacy Control is read here as well as where the cookie is cleared. The clear runs at
 * least once per load, and again on every page view, but `analytics_visitor` is shared with the
 * hosted web app, which reads no signal and can mint it again between two of them - so an event must
 * never attach whatever it happens to find, even on a browser this site has already cleared.
 *
 * There is deliberately no per-tab fallback for a browser that blocks cookies. The app keeps one
 * because a single-page session stays in one document; this site is multi-page, so a fabricated id
 * would be a fresh one on every navigation and would count one visitor many times over - the
 * outcome the contract names and forbids.
 */
export function readAnalyticsAnonymousId(): string | null {
  if (hasAnalyticsPrivacySignal() || isAnalyticsIdentityConsented() === false) {
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

/**
 * Whether the identifier this browser holds right now is the one this answer minted, and therefore
 * ours to take away. Each caller holds only the id its own request was answered with, and
 * `analytics_visitor` is scoped to the parent domain and shared with the app, so the cookie stored
 * now can have been written by another tab inside that request's flight window - and then it belongs
 * to the document that owns it.
 *
 * The stored value is compared as the backend wrote it rather than through `readAnalyticsVisitorId`,
 * which answers null for every shape it does not recognise: an id outside that shape is still a
 * cookie this answer put on this browser, and matching through the reader would silently leave
 * exactly that one in place.
 */
function isMintedVisitorCookieStored(mintedVisitorId: string | null): boolean {
  if (mintedVisitorId === null) {
    return false;
  }

  return (
    readBrowserCookie(ANALYTICS_VISITOR_COOKIE_NAME)?.toLowerCase() ===
    mintedVisitorId.toLowerCase()
  );
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

    // The answer's own `visitorId` is deliberately not read as evidence of identity: it carries a
    // fresh id whether or not the browser stored the cookie that came with it, so the cookie is the
    // only evidence that this browser has an identity at all. It is kept for the one narrower
    // purpose below - recognising the cookie this very answer minted.
    const visitor = await requestAnalyticsVisitor({ method: "GET" });

    if (isSiteAnalyticsCollectionEnabled() === false) {
      // The switch was turned off while this request was open, and a browser that has declared it
      // reports nothing must not walk away holding an identifier for events it will never send -
      // the rule the grant path applies after its own answer lands. The jurisdiction stays
      // unpublished for the same reason it is never asked for while collection is off: it only
      // decides whether this browser is asked about an identifier, and this one is being asked
      // nothing.
      //
      // Only the cookie this answer minted is cleared. A value that does not match was minted by
      // another document and is left for it; this one reports nothing either way.
      if (isMintedVisitorCookieStored(visitor.visitorId)) {
        clearAnalyticsVisitorCookie();
      }

      // Dropped rather than left resolved. This runs after the `await` above, so the memo at the
      // call site already holds this task; leaving it there would make turning collection back on
      // reuse an answer that published no jurisdiction, and this browser would then wait on one for
      // the rest of the document - no banner where one is owed, no cookie block in the corner panel,
      // and every page view identity-free. Nulling it makes the re-enable resolve again.
      visitorIdentityTask = null;

      return;
    }

    publishAnalyticsConsentJurisdiction(visitor.consentRequired);
  } catch {
    if (isSiteAnalyticsCollectionEnabled() === false) {
      // Dropped for the same reason the branch above drops it. The request has settled either way,
      // so there is nothing left to wait on, and leaving the memo resolved would make turning
      // collection back on reuse an answer that never published a real jurisdiction - no second
      // `GET` for the rest of the document.
      visitorIdentityTask = null;
    }

    // This load will never be told what the country requires, and not knowing is not permission -
    // the same rule the route itself applies when it cannot place a caller. Published as "must be
    // asked", so the gate stays shut and the visitor is given the question rather than measured
    // without it. Nothing analytics does may surface to the visitor, so the failure ends here.
    publishAnalyticsConsentJurisdiction(true);
  }
}

/**
 * Asks the backend for the identity when this browser has none. Never gates rendering: a first
 * visit can pay a country-database download inside the request, so the page renders while it runs.
 * Page views wait for it; clicks do not. One attempt per page load - a navigation is the retry, and
 * the static site gives every visitor plenty of them.
 */
export function resolveAnalyticsVisitorIdentity(): Promise<void> {
  if (hasAnalyticsPrivacySignal()) {
    // The signal opts out of the identifier, not of measurement, so the jurisdiction is never
    // published: the gate stays shut for the whole load, no banner is shown, the corner control
    // leaves the cookie half out, and no identity is asked for. Identity-free events keep reaching
    // our own collector.
    //
    // The identifier this browser may already hold is cleared rather than merely left unattached. A
    // browser that consented and raised the signal afterwards carries the cookie for 13 months, and
    // the privacy policy states that a browser exposing Global Privacy Control never carries
    // `analytics_visitor` - withholding it at attach time would only simulate that sentence. It is
    // also what leaves the hidden cookie half nothing to withdraw.
    //
    // An answer that allowed that cookie is forgotten with it, because the two are one act: a
    // stored "granted" outliving the identifier it was about is the "on with no identifier" state
    // this gate exists to forbid, arriving one step later. Without it, a browser that turns the
    // signal off again lands with a decision that is not null, so the banner cannot ask - and with
    // no cookie, so `isAnalyticsCookieDecisionRevisitable` offers a switch that reads "On" for an
    // identity that no longer exists and can only be regained by declining first. Forgetting it
    // leaves that browser exactly where a first-time visitor is: asked again where asking is
    // required, and minted where it is not.
    //
    // A refusal is kept instead, and `clearGrantedAnalyticsConsentDecision` is what draws that
    // line. The signal agrees with a refusal rather than overriding it, so forgetting it would end
    // with the browser holding, where consent is not required, the identifier it had already said
    // no to - a stronger privacy action buying less privacy than doing nothing. Kept, it still
    // decides on its own once the signal is gone: the stored "declined" below returns before any
    // request, in every country, and `readAnalyticsAnonymousId` attaches nothing meanwhile. The
    // collection switch's own decision is untouched either way.
    //
    // Consequence, deliberate rather than overlooked: `analytics_visitor` is scoped to the shared
    // registrable domain and read by the hosted web app, which reads no signal, so clearing it here
    // resets that app's visitor continuity too, and an app visit that mints a fresh one is cleared
    // again by this site's next page load. The policy sentence is about the browser, not about one
    // origin. Unconditional, unlike the ownership-matched clears below: no request is in flight
    // here whose cookie could belong to another document.
    clearAnalyticsVisitorCookie();
    clearGrantedAnalyticsConsentDecision();

    return Promise.resolve();
  }

  if (isSiteAnalyticsCollectionEnabled() === false) {
    // Nothing will be reported from this browser, so nothing is asked for on its behalf: no identity
    // is minted for events that will never be sent, and the banner stays away while it would be
    // asking about an identifier with nothing to travel on. Any cookie this browser already holds is
    // left alone - that is the other decision, and it is the app's record too.
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
 *
 * The collection switch and Global Privacy Control are checked here rather than only where identity
 * is resolved, because this is the call that actually asks the backend to mint the 13-month shared
 * cookie: a browser that has declared it reports nothing, or that raises the signal, must not walk
 * away holding an identifier. Neither surface offers the grant in those states - no banner is shown
 * and the corner control leaves the cookie half out - so this is the backstop rather than the gate,
 * and it is kept because nothing else stands between a caller of this function and a fresh cookie.
 * The collection switch is checked again after the answer lands, because the banner and the corner
 * panel are separate surfaces and one can be answered while the other is open - the switch wins, and
 * the identity that was just minted goes straight back out.
 */
export async function grantAnalyticsConsent(): Promise<boolean> {
  if (
    isSiteAnalyticsCollectionEnabled() === false ||
    hasAnalyticsPrivacySignal()
  ) {
    return false;
  }

  const visitor = await requestAnalyticsVisitor({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ granted: true }),
  });

  if (visitor.visitorId === null) {
    return false;
  }

  if (isSiteAnalyticsCollectionEnabled() === false) {
    // Ownership-matched exactly as the `GET` path is: the flight window of this `POST` is open to
    // another tab on the shared parent domain too, and a cookie that document minted is not this
    // one's to take away. Nothing is recorded as granted either way.
    if (isMintedVisitorCookieStored(visitor.visitorId)) {
      clearAnalyticsVisitorCookie();
    }

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
    // error, and null too on a load that returned early because collection is off - a browser that
    // refuses from there starts no `GET` afterwards either, because the stored refusal is checked
    // before the request on every later call. Null once more once a `GET` that settled after the
    // switch went off dropped its own memo: that request has finished by then and its cookie has
    // already been dealt with, so there is nothing left to wait for. In `finally`, so a refusal the
    // network swallowed still ends with the identifier gone.
    await visitorIdentityTask?.catch(() => {});
    clearAnalyticsVisitorCookie();
  }
}
