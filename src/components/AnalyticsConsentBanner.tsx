"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  isAnalyticsConsentBannerVisible,
  subscribeToAnalyticsConsent,
} from "@/lib/analyticsConsent";
import {
  declineAnalyticsConsent,
  grantAnalyticsConsent,
} from "@/lib/analyticsVisitor";
import type { AppLocale } from "@/lib/i18n";
import {
  reportSiteConsentDeclined,
  reportSiteConsentGranted,
  reportSiteConsentPromptShown,
} from "@/lib/siteConsentEvents";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./AnalyticsConsentBanner.module.css";

/** Published on `:root`; anything else fixed to the bottom edge reads it as extra clearance. */
const BANNER_HEIGHT_CUSTOM_PROPERTY = "--analytics-consent-banner-height";

// Module-scoped rather than a ref, so it survives both React strict mode's simulated remount and a
// layout remount on a locale change: one showing of the strip is one reported question, the way
// `lastReportedPageUrl` keeps one report per page.
let hasReportedConsentPromptShowing = false;

interface AnalyticsConsentBannerProps {
  readonly locale: AppLocale;
  readonly privacyPolicyPathname: string;
}

/**
 * Asks for analytics cookie consent where the law requires it, and only there: the backend answers
 * whether this browser has to be asked, and the two buttons are the only way past it.
 *
 * A strip along the bottom rather than a modal. The page underneath stays readable, because a banner
 * that blocks the page is one people click through to get rid of, and an answer given to make
 * something go away is not much of an answer. Nothing is pre-selected, dismissing it is not offered
 * at all, and the two buttons sit side by side on one layer at the same size. Allow wears the site's
 * accent like every primary action here; Decline stays a full, legible button, so refusing is never
 * harder to find or to press than agreeing.
 */
export function AnalyticsConsentBanner({
  locale,
  privacyPolicyPathname,
}: AnalyticsConsentBannerProps): React.JSX.Element | null {
  const isVisible = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    isAnalyticsConsentBannerVisible,
    () => false,
  );
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const copy = getUiCopy(locale).analyticsConsentBanner;

  /**
   * Reports the question being put, which is the denominator every answer below is a share of -
   * not one that bounds the ratio at 1. A browser that cannot store its answer is never taken off
   * the strip by pressing, and this guard still reports the showing once, so that slice can carry
   * more `site_consent_declined` than `site_consent_prompt_shown`, and a single showing can yield
   * both a decline and a grant when the person presses Decline, sees the strip remain, then
   * presses Allow.
   *
   * Once per showing rather than once per page or once per browser. The strip is mounted from the
   * shared layout document and this site navigates client-side, so a visitor who walks five pages
   * with it still up was asked once, not five times. The guard is reset when it goes down, so a
   * strip that comes back - collection switched off and on again - is a new question and is
   * reported again.
   */
  useEffect(() => {
    if (isVisible === false) {
      hasReportedConsentPromptShowing = false;

      return;
    }

    if (hasReportedConsentPromptShowing) {
      return;
    }

    hasReportedConsentPromptShowing = true;
    reportSiteConsentPromptShown(locale);
  }, [isVisible, locale]);

  /**
   * Publishes how much of the bottom edge the strip is using, for as long as it is up. It is fixed,
   * so nothing in the layout would otherwise know it is there - and the locale suggestion banner
   * sits in the same corner. The height is measured rather than declared because the strip wraps its
   * buttons on a narrow screen and grows an error line.
   *
   * The fixed wrapper rather than the strip inside it: the wrapper's own bottom padding is part of
   * what covers the page, and reserving only the strip would leave the last rows of content under
   * it. Observed as a border box, the box `offsetHeight` reports, so a padding change alone - the
   * narrow-screen breakpoint tightens it - cannot leave a stale reserve behind, matching the
   * withdrawal control.
   */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const rootStyle = document.documentElement.style;

    if (isVisible === false || wrapper === null) {
      return;
    }

    const publishBannerHeight = (): void => {
      rootStyle.setProperty(
        BANNER_HEIGHT_CUSTOM_PROPERTY,
        `${wrapper.offsetHeight}px`,
      );
    };

    publishBannerHeight();
    const observer = new ResizeObserver(publishBannerHeight);
    observer.observe(wrapper, { box: "border-box" });

    return (): void => {
      observer.disconnect();
      rootStyle.removeProperty(BANNER_HEIGHT_CUSTOM_PROPERTY);
    };
  }, [isVisible]);

  if (isVisible === false) {
    return null;
  }

  const allowAnalytics = async (): Promise<void> => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if ((await grantAnalyticsConsent()) === false) {
        setErrorMessage(copy.error);
        return;
      }

      reportSiteConsentGranted(locale, "banner");
    } catch {
      // The strip stays up with the failure named on it: an answer the server did not record is not
      // an answer, and nothing about analytics may reach the site's other error surfaces.
      setErrorMessage(copy.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const declineAnalytics = async (): Promise<void> => {
    setIsSubmitting(true);
    setErrorMessage("");

    // Before the request, on the same terms the refusal is stored on: `declineAnalyticsConsent`
    // records `declined` synchronously on its first line, so wherever the answer can be stored at
    // all, a `POST` that a content blocker or the network ate still leaves this browser refused -
    // and leaves the strip gone, because that stored answer flips its visibility before the throw.
    // Where the write is refused nothing is stored at all: the consent decision has no in-memory
    // holder and is re-read from storage on every call, so the strip stays up and a further press
    // reports again. That browser answering more than once is the same honest un-deduplicated
    // behaviour it already has everywhere else. Reporting on the success path alone would lose the
    // eaten-`POST` case entirely, leaving a reported question with no reported answer.
    // Deliberately not symmetric with the grant, which is reported only once the server has minted
    // the identity, because only then is anything recorded there.
    reportSiteConsentDeclined(locale, "banner");

    try {
      await declineAnalyticsConsent();
    } catch {
      setErrorMessage(copy.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <aside
        className={styles.banner}
        role="region"
        aria-label={copy.label}
        data-testid="analytics-consent-banner"
      >
        <div className={styles.copy}>
          <p className={styles.message}>{copy.message}</p>
          <Link
            className={styles.privacyLink}
            href={privacyPolicyPathname}
          >
            {copy.privacyPolicy}
          </Link>
        </div>
        <div className={styles.actions}>
          <button
            className={`${styles.action} ${styles.allowAction}`}
            data-testid="analytics-consent-allow"
            disabled={isSubmitting}
            onClick={() => void allowAnalytics()}
            type="button"
          >
            {copy.allow}
          </button>
          <button
            className={styles.action}
            data-testid="analytics-consent-decline"
            disabled={isSubmitting}
            onClick={() => void declineAnalytics()}
            type="button"
          >
            {copy.decline}
          </button>
        </div>
        {errorMessage === "" ? null : (
          <p
            className={styles.error}
            data-testid="analytics-consent-error"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </aside>
    </div>
  );
}
