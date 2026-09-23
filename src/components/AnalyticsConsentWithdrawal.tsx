"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  isAnalyticsCookieDecisionRevisitable,
  isSiteAnalyticsCollectionEnabled,
  readAnalyticsConsentDecision,
  recordSiteAnalyticsCollectionDecision,
  subscribeToAnalyticsConsent,
} from "@/lib/analyticsConsent";
import {
  declineAnalyticsConsent,
  grantAnalyticsConsent,
  resolveAnalyticsVisitorIdentity,
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

interface AnalyticsDecisionToggleProps {
  readonly isDisabled: boolean;
  readonly isOn: boolean;
  readonly label: string;
  readonly offLabel: string;
  readonly onLabel: string;
  readonly onToggle: () => void;
  readonly testId: string;
}

function AnalyticsDecisionToggle({
  isDisabled,
  isOn,
  label,
  offLabel,
  onLabel,
  onToggle,
  testId,
}: AnalyticsDecisionToggleProps): React.JSX.Element {
  return (
    <button
      className={styles.toggle}
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={label}
      data-state={isOn ? "on" : "off"}
      data-testid={testId}
      disabled={isDisabled}
      onClick={onToggle}
    >
      <span className={styles.toggleTrack} aria-hidden="true">
        <span className={styles.toggleThumb} />
      </span>
      <span className={styles.toggleValue}>{isOn ? onLabel : offLabel}</span>
    </button>
  );
}

/**
 * The way back from an answer already given, and the way out of being measured at all.
 *
 * It carries both decisions, because they are two: the cookie the banner asks about, and whether
 * anything is collected from this browser at all. Refusing the cookie leaves visits counted
 * identity-free, so the second switch is the only one that stops collection.
 *
 * The control itself is unconditional - every page, every region, every consent state, including the
 * first load with the banner still up. The off switch would otherwise be missing from exactly the
 * moments it is wanted: while a first-time visitor is being asked about the cookie and is already
 * being counted, and on a browser that turned collection off and, having asked the backend nothing
 * since, counts as never asked. The strip publishes its height and this sits directly above it, so
 * the two share the bottom edge rather than the same corner.
 *
 * Only the cookie half is conditional, on there being an answer to revisit and a move it can still
 * make: the privacy policy describes withdrawal with no qualifier, and a banner that can be answered
 * but not revisited leaves the person who accepted with nothing but clearing browser storage.
 */
export function AnalyticsConsentWithdrawal({
  locale,
}: AnalyticsConsentWithdrawalProps): React.JSX.Element {
  const isCookieDecisionRevisitable = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    isAnalyticsCookieDecisionRevisitable,
    () => false,
  );
  const decision = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    readAnalyticsConsentDecision,
    () => null,
  );
  const isCollectionEnabled = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    isSiteAnalyticsCollectionEnabled,
    () => true,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [collectionErrorMessage, setCollectionErrorMessage] =
    useState<string>("");
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
   *
   * The reserve is the link's own height and never the strip's as well, even while both are up: the
   * container is lifted by the strip's published height in CSS rather than growing by it, so the
   * page below adds the two without ever counting the strip twice.
   */
  useEffect(() => {
    const container = containerRef.current;
    const rootStyle = document.documentElement.style;

    if (container === null) {
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
  }, []);

  const isAnalyticsAllowed = decision !== "declined";

  /**
   * While collection is off the cookie half is offered only while there is still an identifier to
   * take away. Nothing may be minted for a browser that reports nothing, and `grantAnalyticsConsent`
   * refuses outright, so rather than showing a switch that cannot act, the whole block is left out -
   * a disabled control with nothing naming its reason is no answer either. The collection row's own
   * text says the cookie choice comes back with collection, which is the way back to it.
   */
  const isCookieSwitchOffered = isCollectionEnabled || isAnalyticsAllowed;

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

  /**
   * Stored and in force at once: there is no server to tell, because this site has no account to
   * hold the answer. Turning it back on is where the identity this load never asked for is asked
   * for, and reporting resumes from there rather than replaying the visit: the page whose view was
   * already reported before the switch went off is not reported a second time.
   *
   * A browser that kept nothing is told so rather than shown a switch that will read "On" again on
   * the next page. The answer still holds for this document, which is all that can be offered there.
   */
  const changeAnalyticsCollection = (nextEnabled: boolean): void => {
    const isStored = recordSiteAnalyticsCollectionDecision(
      nextEnabled ? "enabled" : "disabled",
    );

    setCollectionErrorMessage(
      isStored ? "" : withdrawalCopy.collectionStorageError,
    );

    if (nextEnabled) {
      void resolveAnalyticsVisitorIdentity();
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
          {isCookieDecisionRevisitable && isCookieSwitchOffered ? (
            <div className={styles.decision}>
              <div className={styles.copy}>
                <strong className={styles.title}>
                  {withdrawalCopy.toggleTitle}
                </strong>
                <p className={styles.description}>
                  {withdrawalCopy.toggleDescription}
                </p>
              </div>
              <AnalyticsDecisionToggle
                isDisabled={isSubmitting}
                isOn={isAnalyticsAllowed}
                label={withdrawalCopy.toggleTitle}
                offLabel={withdrawalCopy.off}
                onLabel={withdrawalCopy.on}
                onToggle={() =>
                  void changeAnalyticsConsent(isAnalyticsAllowed === false)
                }
                testId="analytics-consent-withdrawal-toggle"
              />
              {errorMessage === "" ? null : (
                <p
                  className={styles.error}
                  data-testid="analytics-consent-withdrawal-error"
                  role="alert"
                >
                  {errorMessage}
                </p>
              )}
            </div>
          ) : null}
          <div className={styles.decision}>
            <div className={styles.copy}>
              <strong className={styles.title}>
                {withdrawalCopy.collectionTitle}
              </strong>
              <p className={styles.description}>
                {withdrawalCopy.collectionDescription}
              </p>
            </div>
            <AnalyticsDecisionToggle
              isDisabled={isSubmitting}
              isOn={isCollectionEnabled}
              label={withdrawalCopy.collectionTitle}
              offLabel={withdrawalCopy.off}
              onLabel={withdrawalCopy.on}
              onToggle={() =>
                changeAnalyticsCollection(isCollectionEnabled === false)
              }
              testId="analytics-consent-withdrawal-collection-toggle"
            />
            {collectionErrorMessage === "" ? null : (
              <p
                className={styles.error}
                data-testid="analytics-consent-withdrawal-collection-error"
                role="alert"
              >
                {collectionErrorMessage}
              </p>
            )}
          </div>
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
        {withdrawalCopy.title}
      </button>
    </div>
  );
}
