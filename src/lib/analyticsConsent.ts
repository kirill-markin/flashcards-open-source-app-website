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
 *
 * Whether anything is collected at all is a second, separate decision, stored beside the first and
 * answered by nobody until someone turns it off: the basis for collection is legitimate interest,
 * not consent, so it is on until this browser says otherwise. Refusing the cookie is not refusing
 * collection - a browser that refused keeps reporting identity-free rows, which is what the banner
 * it answered said would happen.
 */

import { hasAnalyticsPrivacySignal } from "./analyticsPrivacySignal";

export type AnalyticsConsentChoice = "granted" | "declined";
export type SiteAnalyticsCollectionChoice = "enabled" | "disabled";

const CONSENT_DECISION_STORAGE_KEY = "nibomo.analyticsConsent.decision";
const COLLECTION_DECISION_STORAGE_KEY = "nibomo.analyticsCollection.decision";

/**
 * Whether the visitor's country requires a decision before this browser may be given an identity,
 * or null while this load has not been told. A browser that already holds the shared cookie is told
 * `false` without a country lookup: the cookie is itself the record that it was allowed one.
 */
let requiresConsentDecision: boolean | null = null;

/** This load's answer once the switch has been flipped, which holds even if storage refused it. */
let recordedCollectionDecision: SiteAnalyticsCollectionChoice | null = null;

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

/**
 * Forgets a stored grant, and only a grant. It is right only beside taking the identifier away -
 * what `resolveAnalyticsVisitorIdentity` does under Global Privacy Control - because a grant is then
 * an answer about a cookie that no longer exists, and keeping it would let a surface claim an
 * identity this browser does not have.
 *
 * A refusal is deliberately kept. It is a standing preference about a cookie that should never be
 * minted, and the signal agrees with it rather than overriding it - forgetting it would leave a
 * browser that raised the signal and later dropped it holding the identifier it had already refused,
 * wherever consent is not required. Kept, it goes on acting alone: `resolveAnalyticsVisitorIdentity`
 * returns on a stored refusal before it asks the backend anything, in every country, and
 * `isAnalyticsIdentityConsented` stays false so no event attaches an identifier either.
 *
 * Writes storage and notifies nobody, unlike `recordAnalyticsConsentDecision`. Not because no click
 * can reach it - the collection switch calls `resolveAnalyticsVisitorIdentity` when it is turned
 * back on - but because under the signal both surfaces that read this decision are already
 * suppressed by conditions that do not depend on it: the cookie half of the corner control by
 * `isAnalyticsCookieDecisionRevisitable`, which reads the signal itself, and the banner by a
 * jurisdiction `isAnalyticsConsentBannerVisible` is never told under it. There is nothing on screen
 * a notification could correct.
 *
 * The collection switch is a separate decision under its own key and is deliberately untouched: it
 * is about whether anything is reported at all, which the signal does not decide.
 */
export function clearGrantedAnalyticsConsentDecision(): void {
  if (readStoredConsentDecision() !== "granted") {
    return;
  }

  try {
    window.localStorage.removeItem(CONSENT_DECISION_STORAGE_KEY);
  } catch {
    // Storage that refuses the removal is storage that refused the write, so there was no stored
    // answer to forget. The signal keeps the cookie half out for this load either way.
  }
}

/**
 * Whether this browser reports anything at all. Only a stored refusal turns it off, so a browser
 * with no storage, or one whose storage cannot be read, collects - the same answer it gives before
 * anyone has touched the switch.
 *
 * The site has no accounts, so this is a fact about this browser and acts only here.
 */
export function isSiteAnalyticsCollectionEnabled(): boolean {
  if (recordedCollectionDecision !== null) {
    return recordedCollectionDecision === "enabled";
  }

  let storedValue: string | null;

  try {
    storedValue = window.localStorage.getItem(COLLECTION_DECISION_STORAGE_KEY);
  } catch {
    return true;
  }

  return storedValue !== "disabled";
}

/**
 * The switch in the corner control, and the only thing that ever writes this decision. Answers
 * whether the browser actually kept it.
 *
 * The answer is written back out and read again rather than assumed: storage that throws is not the
 * only way a write is lost, and this site is multi-page, so every navigation is a new document and
 * the module variable holding the answer dies with it. A refusal that did not persist is one click
 * away from collecting again under a switch that reads "On", which the visitor has to be told rather
 * than left to discover, so the caller is handed the failure to put on screen.
 */
export function recordSiteAnalyticsCollectionDecision(
  decision: SiteAnalyticsCollectionChoice,
): boolean {
  recordedCollectionDecision = decision;

  let isStored: boolean;

  try {
    window.localStorage.setItem(COLLECTION_DECISION_STORAGE_KEY, decision);
    isStored =
      window.localStorage.getItem(COLLECTION_DECISION_STORAGE_KEY) === decision;
  } catch {
    isStored = false;
  }

  notifyConsentListeners();

  return isStored;
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

/**
 * The banner is shown only once the jurisdiction answer says this visitor has to be asked, and never
 * to a browser that collects nothing: the identifier it asks for would have no event to travel on,
 * and answering "Allow" could not mint one anyway - `grantAnalyticsConsent` refuses while the switch
 * is off. It no longer decides whether the corner control is reachable, so the two can share the
 * bottom edge, and the corner control keeps the switch that turns this question off.
 */
export function isAnalyticsConsentBannerVisible(): boolean {
  return (
    isSiteAnalyticsCollectionEnabled() &&
    requiresConsentDecision === true &&
    readAnalyticsConsentDecision() === null
  );
}

/**
 * Whether the cookie answer this browser gave is one it can be offered back. False while it is still
 * waiting to be asked: there is nothing to revisit yet, and the banner is the surface that asks.
 *
 * False too under Global Privacy Control, whatever this browser answered on an earlier visit. That
 * browser is given no identifier, `resolveAnalyticsVisitorIdentity` clears the one it may still have
 * been carrying along with an answer that had allowed it, and `grantAnalyticsConsent` refuses
 * outright - so there is nothing left to withdraw and no move the switch could make. The signal is
 * read here rather than left to the forgotten answer alone, because this renders at mount beside
 * that clear rather than after it. Offering it anyway is what the withdrawal control's own rule
 * forbids: an "On" reading would contradict the privacy policy, which says such a browser never
 * carries `analytics_visitor`, and an "Off" reading would invite a grant that can only fail.
 *
 * Only the cookie half of the corner control is conditional. The control itself is on every page in
 * every region unconditionally, because the collection switch it also carries has to be reachable in
 * exactly the states that used to hide it - a first visit with the banner up, and a browser that
 * turned collection off and was therefore never asked anything.
 */
export function isAnalyticsCookieDecisionRevisitable(): boolean {
  return (
    hasAnalyticsPrivacySignal() === false &&
    isAwaitingAnalyticsConsentDecision() === false
  );
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
