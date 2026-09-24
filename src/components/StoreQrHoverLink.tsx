"use client";

import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react-dom";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent as ReactFocusEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import { isSiteAnalyticsCollectionEnabled } from "@/lib/analyticsConsent";
import type { SiteAppEntryImpressionAttributes } from "@/lib/appEntryImpressionAttributes";
import type { AppEntryPlacement } from "@/lib/appEntryTracking";
import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import {
  classifySiteSource,
  getSiteDeviceCategory,
  getSitePageKind,
  sendSiteAnalyticsEvent,
  type SiteAppEntryStoreTarget,
} from "@/lib/siteAnalyticsCollector";
import styles from "./StoreQrHoverLink.module.css";

const hoverIntentDelayMs = 120;

/**
 * The QR shows already reported by this document, keyed by target, placement and page kind,
 * exactly as `reportedImpressionKeys` in `src/lib/appEntryImpressionTracking.ts` is keyed and for
 * the same reason: `analytics.product_events` is append-only, this component remounts on
 * navigation and under React strict mode, and a show reported twice can never be taken back.
 */
const reportedQrShowKeys = new Set<string>();

/**
 * Reports that the QR card opened. Nothing waits for a dwell on top of it: the card is already
 * worth 120 ms of deliberate hover, or a `:focus-visible` landing on the link. `page_kind`,
 * `source` and `device_category` are read exactly as `reportSiteAppEntryClick` reads them, so a
 * show and the click it may precede agree property for property and join by equality.
 *
 * The collection switch is read here as well as inside the collector, the way the impression
 * tracker reads it, so that turning it off leaves the key unburned: the corner control notifies
 * listeners rather than reloading the page, so a key spent on a send the collector dropped could
 * never be reported in this document again. The key is still taken before the send itself, because
 * a request that fails is not retried and a show reported twice can never be taken back.
 */
function reportStoreQrShown(
  target: SiteAppEntryStoreTarget,
  locale: AppLocale,
  placement: AppEntryPlacement,
): void {
  if (isSiteAnalyticsCollectionEnabled() === false) {
    return;
  }

  const pageKind = getSitePageKind(window.location.pathname);
  const qrShowKey = `${target}|${placement}|${pageKind}`;
  if (reportedQrShowKeys.has(qrShowKey)) {
    return;
  }

  reportedQrShowKeys.add(qrShowKey);

  sendSiteAnalyticsEvent("site_store_qr_shown", new Date().toISOString(), locale, {
    target,
    page_kind: pageKind,
    placement,
    source: classifySiteSource(document.referrer, window.location.hostname),
    device_category: getSiteDeviceCategory(),
  });
}

interface StoreQrHoverLinkProps {
  readonly ariaLabel: string;
  readonly children: React.ReactNode;
  readonly className: string | undefined;
  readonly hint: string;
  readonly href: string;
  /** Marks the anchor for the document-scoped app-entry impression observer. */
  readonly impressionAttributes: SiteAppEntryImpressionAttributes;
  readonly locale: AppLocale;
  readonly onClick: () => void;
  readonly placement: AppEntryPlacement;
  readonly qrSvgMarkup: string;
  readonly target: SiteAppEntryStoreTarget;
}

export const StoreQrHoverLink: React.FC<StoreQrHoverLinkProps> = ({
  ariaLabel,
  children,
  className,
  hint,
  href,
  impressionAttributes,
  locale,
  onClick,
  placement,
  qrSvgMarkup,
  target,
}) => {
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);
  const hoverIntentTimeoutRef = useRef<number | null>(null);
  const { floatingStyles, refs } = useFloating({
    middleware: [offset(10), flip({ padding: 16 }), shift({ padding: 16 })],
    placement: "top",
    strategy: "fixed",
    whileElementsMounted: autoUpdate,
  });
  const clearHoverIntent = useCallback((): void => {
    if (hoverIntentTimeoutRef.current === null) {
      return;
    }

    window.clearTimeout(hoverIntentTimeoutRef.current);
    hoverIntentTimeoutRef.current = null;
  }, []);
  const hideCard = useCallback((): void => {
    clearHoverIntent();
    setIsCardVisible(false);
  }, [clearHoverIntent]);
  const showCard = useCallback((): void => {
    setIsCardVisible(true);
    reportStoreQrShown(target, locale, placement);
  }, [locale, placement, target]);

  useEffect(() => clearHoverIntent, [clearHoverIntent]);

  // WCAG 2.1 AA 1.4.13 Dismissible: the card is revealed by hover as well as by focus,
  // so Escape has to reach it while focus sits anywhere on the page.
  useEffect(() => {
    if (isCardVisible === false) {
      return;
    }

    const handleDocumentKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== "Escape") {
        return;
      }

      hideCard();
    };

    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => document.removeEventListener("keydown", handleDocumentKeyDown);
  }, [hideCard, isCardVisible]);

  const handlePointerEnter = (event: ReactPointerEvent<HTMLAnchorElement>): void => {
    if (event.pointerType !== "mouse") {
      return;
    }

    clearHoverIntent();
    hoverIntentTimeoutRef.current = window.setTimeout(() => {
      hoverIntentTimeoutRef.current = null;
      showCard();
    }, hoverIntentDelayMs);
  };
  const handleFocus = (event: ReactFocusEvent<HTMLAnchorElement>): void => {
    if (event.target.matches(":focus-visible") === false) {
      return;
    }

    clearHoverIntent();
    showCard();
  };
  // The store link opens a new tab, and no pointerleave arrives while this tab is in the
  // background, so the card has to be hidden at click time.
  const handleClick = (): void => {
    onClick();
    hideCard();
  };

  return (
    <>
      <a
        ref={refs.setReference}
        href={href}
        {...getExternalLinkAttributes(href)}
        aria-label={ariaLabel}
        className={className}
        {...impressionAttributes}
        onBlur={hideCard}
        onClick={handleClick}
        onFocus={handleFocus}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={hideCard}
      >
        {children}
      </a>
      {isCardVisible
        ? createPortal(
          <div
            ref={refs.setFloating}
            aria-hidden="true"
            className={styles.card}
            style={floatingStyles as CSSProperties}
          >
            <span
              className={styles.qrFrame}
              dangerouslySetInnerHTML={{ __html: qrSvgMarkup }}
            />
            <span className={styles.hint}>{hint}</span>
          </div>,
          document.body,
        )
        : null}
    </>
  );
};
