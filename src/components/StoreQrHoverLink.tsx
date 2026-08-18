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
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import styles from "./StoreQrHoverLink.module.css";

const hoverIntentDelayMs = 120;

interface StoreQrHoverLinkProps {
  readonly ariaLabel: string;
  readonly children: React.ReactNode;
  readonly className: string | undefined;
  readonly hint: string;
  readonly href: string;
  readonly onClick: () => void;
  readonly qrSvgMarkup: string;
}

export const StoreQrHoverLink: React.FC<StoreQrHoverLinkProps> = ({
  ariaLabel,
  children,
  className,
  hint,
  href,
  onClick,
  qrSvgMarkup,
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
      setIsCardVisible(true);
    }, hoverIntentDelayMs);
  };
  const handleFocus = (event: ReactFocusEvent<HTMLAnchorElement>): void => {
    if (event.target.matches(":focus-visible") === false) {
      return;
    }

    clearHoverIntent();
    setIsCardVisible(true);
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
