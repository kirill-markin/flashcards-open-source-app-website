"use client";

/**
 * What this browser is allowed to do before, and after, the visitor answers the consent banner.
 *
 * This mirrors the app's `apps/web/src/analytics/consent.ts`; the contract both surfaces implement
 * is owned by `docs/analytics-visitor-identity.md` in the app repository, and is deliberately not
 * restated here.
 *
 * Two facts decide everything: the decision this browser has stored, and whether the jurisdiction
 * it is in requires one at all. The second is the backend's answer to `GET /v1/analytics/visitor`
 * and is unknown until that call returns, so a browser that has stored no decision starts out
 * treated exactly as one that has to be asked - no identity may be written to it or requested for
 * it while the question is open.
 *
 * The stored decision cannot be the app's: `localStorage` is origin-scoped, so `nibomo.com` and
 * `app.nibomo.com` keep separate copies of it. The `analytics_visitor` cookie is the only record
 * that crosses, and a browser holding it is never asked again on either origin.
 */

export type AnalyticsConsentChoice = "granted" | "declined";

const CONSENT_DECISION_STORAGE_KEY = "nibomo.analyticsConsent.decision";

/**
 * Whether the visitor's country requires a decision before this browser may be given an identity,
 * or null while this load has not been told. A browser that already holds the shared cookie is told
 * `false` without a country lookup: the cookie is itself the record that it was allowed one.
 */
let requiresConsentDecision: boolean | null = null;

const consentListeners = new Set<() => void>();

// Browser storage throws in real configurations - Safari private browsing, storage disabled by
// policy - and analytics must never surface that to the visitor. A browser that keeps no storage is
// asked again on its next load, which is the only honest outcome available there.
function readStoredConsentDecision(): AnalyticsConsentChoice | null {
  let storedValue: string | null;

  try {
    storedValue = window.localStorage.getItem(CONSENT_DECISION_STORAGE_KEY);
  } catch {
    return null;
  }

  if (storedValue === "granted") {
    return "granted";
  }

  return storedValue === "declined" ? "declined" : null;
}

function writeStoredConsentDecision(decision: AnalyticsConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_DECISION_STORAGE_KEY, decision);
  } catch {
    // Nothing else can be done, and the answer still holds for the rest of this page load.
  }
}

export function readAnalyticsConsentDecision(): AnalyticsConsentChoice | null {
  return readStoredConsentDecision();
}

/**
 * Records the answer for this browser. It is the only write the consent flow makes to the device
 * before an identity exists, and it is what keeps the banner from asking the same person twice.
 */
export function recordAnalyticsConsentDecision(
  decision: AnalyticsConsentChoice,
): void {
  writeStoredConsentDecision(decision);
  notifyConsentListeners();
}

/** Published by the visitor identity resolution, which is the only caller that learns this. */
export function publishAnalyticsConsentJurisdiction(
  requiresDecision: boolean,
): void {
  if (requiresConsentDecision === requiresDecision) {
    return;
  }

  requiresConsentDecision = requiresDecision;
  notifyConsentListeners();
}

/**
 * Whether this browser is still waiting to be told what it may do - because it has not been asked
 * yet where it has to be, or because it does not know yet whether it has to be asked at all.
 * No identity may be written to the device or requested for it while this holds. Events are not
 * held back for it: `sendSiteAnalyticsEvent` reports one with no identifier attached, and says why.
 */
export function isAwaitingAnalyticsConsentDecision(): boolean {
  return (
    readAnalyticsConsentDecision() === null && requiresConsentDecision !== false
  );
}

/**
 * Whether this browser may be given an analytics identifier of any kind: it granted, or it is
 * somewhere that asks nobody. False while the question is open, and false after a refusal.
 */
export function isAnalyticsIdentityConsented(): boolean {
  return (
    isAwaitingAnalyticsConsentDecision() === false &&
    readAnalyticsConsentDecision() !== "declined"
  );
}

/** The banner is shown only once the jurisdiction answer says this visitor has to be asked. */
export function isAnalyticsConsentBannerVisible(): boolean {
  return requiresConsentDecision === true && readAnalyticsConsentDecision() === null;
}

/**
 * The withdrawal link is offered exactly when this browser is no longer waiting to be asked: it
 * stored an answer, or it is somewhere that asks nobody. That is the whole set of states in which
 * there is something to withdraw, and it is the complement of the banner's condition, so the two can
 * never occupy the same corner at once.
 */
export function isAnalyticsConsentWithdrawalVisible(): boolean {
  return isAwaitingAnalyticsConsentDecision() === false;
}

export function subscribeToAnalyticsConsent(listener: () => void): () => void {
  consentListeners.add(listener);

  return (): void => {
    consentListeners.delete(listener);
  };
}

function notifyConsentListeners(): void {
  for (const listener of consentListeners) {
    listener();
  }
}
