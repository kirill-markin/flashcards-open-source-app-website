"use client";

/**
 * Global Privacy Control, the opt-out signal this site honours before anything else it does about
 * analytics.
 *
 * A browser that raises it is never asked for a visitor identity, has any identifier it still
 * carries cleared along with an answer that had allowed it, attaches none to an event, is shown
 * neither the consent banner nor the corner control's cookie switch, and hands Vercel Web Analytics
 * nothing at all: the law points the signal at third-party measurement and at the identifier, and
 * asking `GET /v1/analytics/visitor` outside a consent jurisdiction mints a 13-month cookie. A
 * stored refusal is kept rather than cleared with the grant, because the signal agrees with it and
 * it goes on deciding alone once the signal is dropped. Our own first-party collector keeps
 * receiving identity-free rows from such a browser, exactly as it does from one that declined the
 * cookie.
 */

interface NavigatorPrivacySignals {
  readonly globalPrivacyControl?: boolean;
}

export function hasAnalyticsPrivacySignal(): boolean {
  const privacyNavigator = navigator as Navigator & NavigatorPrivacySignals;

  return privacyNavigator.globalPrivacyControl === true;
}
