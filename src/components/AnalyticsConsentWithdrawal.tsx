"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  isAnalyticsConsentWithdrawalVisible,
  readAnalyticsConsentDecision,
  subscribeToAnalyticsConsent,
} from "@/lib/analyticsConsent";
import {
  declineAnalyticsConsent,
  grantAnalyticsConsent,
} from "@/lib/analyticsVisitor";
import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./AnalyticsConsentWithdrawal.module.css";

/** Published on `:root`; anything fixed to the bottom edge reads it as extra clearance. */
const WITHDRAWAL_HEIGHT_CUSTOM_PROPERTY =
  "--analytics-consent-withdrawal-height";

interface AnalyticsConsentWithdrawalProps {
  readonly locale: AppLocale;
}

/**
 * The way back from an answer already given, in the corner the consent strip used to occupy.
 *
 * It ships with the banner rather than after it: the privacy policy describes withdrawal with no
 * qualifier, and a banner that can be answered but not revisited leaves the person who accepted with
 * nothing but clearing browser storage. It is offered in every region for the same reason, including
 * where nobody is asked - a browser that was never asked was measured because its jurisdiction
 * requires no asking, and turning this off is its withdrawal.
 */
export function AnalyticsConsentWithdrawal({
  locale,
}: AnalyticsConsentWithdrawalProps): React.JSX.Element | null {
  const isVisible = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    isAnalyticsConsentWithdrawalVisible,
    () => false,
  );
  const decision = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    readAnalyticsConsentDecision,
    () => null,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const copy = getUiCopy(locale);
  const withdrawalCopy = copy.analyticsConsentWithdrawal;

  const closePanel = useCallback((): void => {
    setIsOpen(false);
  }, []);

  /**
   * Escape closes the panel and hands focus back to the link that opened it, because the panel is
   * the only thing on this site a keyboard visitor can open from a corner with nothing else in it.
   */
  useEffect(() => {
    if (isOpen === false) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key !== "Escape") {
        return;
      }

      closePanel();
      triggerRef.current?.focus();
    };

    const closeOnOutsidePointer = (event: PointerEvent): void => {
      const container = containerRef.current;

      if (
        container === null ||
        (event.target instanceof Node && container.contains(event.target))
      ) {
        return;
      }

      closePanel();
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);

    return (): void => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [closePanel, isOpen]);

  /**
   * Publishes how much of the bottom corner the link occupies, the way the strip publishes its own.
   * It is fixed and has no background, so nothing in the layout would otherwise know it is there,
   * and what it would silently cover is the end of every page - the footer, and whatever call to
   * action sits above it.
   *
   * The border box, not the default content box: almost all of this height is padding, so a
   * safe-area inset changing on an orientation change resizes nothing a content-box observer can
   * see and would leave the stale reserve behind. The label's length is per-locale and the inset is
   * per-orientation, so the measurement is republished rather than taken once.
   */
  useEffect(() => {
    const container = containerRef.current;
    const rootStyle = document.documentElement.style;

    if (isVisible === false || container === null) {
      return;
    }

    const publishWithdrawalHeight = (): void => {
      rootStyle.setProperty(
        WITHDRAWAL_HEIGHT_CUSTOM_PROPERTY,
        `${container.offsetHeight}px`,
      );
    };

    publishWithdrawalHeight();
    const observer = new ResizeObserver(publishWithdrawalHeight);
    observer.observe(container, { box: "border-box" });

    return (): void => {
      observer.disconnect();
      rootStyle.removeProperty(WITHDRAWAL_HEIGHT_CUSTOM_PROPERTY);
    };
  }, [isVisible]);

  if (isVisible === false) {
    return null;
  }

  const isAnalyticsAllowed = decision !== "declined";

  const changeAnalyticsConsent = async (nextAllowed: boolean): Promise<void> => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if (nextAllowed) {
        if ((await grantAnalyticsConsent()) === false) {
          setErrorMessage(copy.analyticsConsentBanner.error);
        }

        return;
      }

      await declineAnalyticsConsent();
    } catch {
      // The switch shows what this browser actually stores, so a request the server did not record
      // is named here rather than reflected in the switch.
      setErrorMessage(copy.analyticsConsentBanner.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className={styles.container}>
      {isOpen ? (
        <div
          className={styles.panel}
          role="dialog"
          aria-label={withdrawalCopy.title}
          data-testid="analytics-consent-withdrawal-panel"
        >
          <div className={styles.copy}>
            <strong className={styles.title}>
              {withdrawalCopy.toggleTitle}
            </strong>
            <p className={styles.description}>
              {withdrawalCopy.toggleDescription}
            </p>
          </div>
          <button
            className={styles.toggle}
            type="button"
            role="switch"
            aria-checked={isAnalyticsAllowed}
            aria-label={withdrawalCopy.toggleTitle}
            data-state={isAnalyticsAllowed ? "on" : "off"}
            data-testid="analytics-consent-withdrawal-toggle"
            disabled={isSubmitting}
            onClick={() =>
              void changeAnalyticsConsent(isAnalyticsAllowed === false)
            }
          >
            <span className={styles.toggleTrack} aria-hidden="true">
              <span className={styles.toggleThumb} />
            </span>
            <span className={styles.toggleValue}>
              {isAnalyticsAllowed ? withdrawalCopy.on : withdrawalCopy.off}
            </span>
          </button>
          {errorMessage === "" ? null : (
            <p
              className={styles.error}
              data-testid="analytics-consent-withdrawal-error"
              role="alert"
            >
              {errorMessage}
            </p>
          )}
          <button
            className={styles.close}
            type="button"
            onClick={closePanel}
          >
            {withdrawalCopy.close}
          </button>
        </div>
      ) : null}
      <button
        ref={triggerRef}
        className={styles.link}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        data-testid="analytics-consent-withdrawal-link"
        onClick={() => setIsOpen(isOpen === false)}
      >
        {withdrawalCopy.link}
      </button>
    </div>
  );
}
