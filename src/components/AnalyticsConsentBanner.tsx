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
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./AnalyticsConsentBanner.module.css";

/** Published on `:root`; anything else fixed to the bottom edge reads it as extra clearance. */
const BANNER_HEIGHT_CUSTOM_PROPERTY = "--analytics-consent-banner-height";

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
      }
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
