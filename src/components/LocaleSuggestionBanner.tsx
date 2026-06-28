"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getBrowserPreferredLocale } from "@/lib/browserLocaleMatching";
import type { AppLocale } from "@/lib/i18n";
import { getLocaleDirection } from "@/lib/localeConfig";
import type { LocaleSuggestionTarget } from "@/lib/routeTranslations";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./LocaleSuggestionBanner.module.css";

const DISMISSAL_STORAGE_KEY = "flashcards.localeSuggestion.dismissedUntil";
const DISMISSAL_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

interface LocaleSuggestionBannerProps {
  readonly currentLocale: AppLocale;
  readonly targets: ReadonlyArray<LocaleSuggestionTarget>;
}

interface DismissalState {
  readonly dismissed: boolean;
  readonly storageAvailable: boolean;
}

function isSecurityError(error: unknown): boolean {
  return error instanceof DOMException && error.name === "SecurityError";
}

function isExpectedStorageWriteError(error: unknown): boolean {
  return (
    error instanceof DOMException &&
    (error.name === "SecurityError" || error.name === "QuotaExceededError")
  );
}

function getDismissalState(now: number): DismissalState {
  try {
    const dismissedUntilValue = window.localStorage.getItem(
      DISMISSAL_STORAGE_KEY
    );

    if (dismissedUntilValue === null) {
      return {
        dismissed: false,
        storageAvailable: true,
      };
    }

    const dismissedUntil = Number(dismissedUntilValue);

    if (!Number.isFinite(dismissedUntil) || dismissedUntil <= now) {
      window.localStorage.removeItem(DISMISSAL_STORAGE_KEY);

      return {
        dismissed: false,
        storageAvailable: true,
      };
    }

    return {
      dismissed: true,
      storageAvailable: true,
    };
  } catch (error: unknown) {
    if (isSecurityError(error)) {
      return {
        dismissed: true,
        storageAvailable: false,
      };
    }

    throw error;
  }
}

function storeDismissal(now: number): void {
  try {
    window.localStorage.setItem(
      DISMISSAL_STORAGE_KEY,
      String(now + DISMISSAL_DURATION_MS)
    );
  } catch (error: unknown) {
    if (isExpectedStorageWriteError(error)) {
      return;
    }

    throw error;
  }
}

function findSuggestedTarget(
  browserLanguages: ReadonlyArray<string>,
  currentLocale: AppLocale,
  targets: ReadonlyArray<LocaleSuggestionTarget>
): LocaleSuggestionTarget | null {
  const availableLocales: ReadonlyArray<AppLocale> = [
    currentLocale,
    ...targets.map((target) => target.locale),
  ];
  const matchedLocale = getBrowserPreferredLocale(
    browserLanguages,
    availableLocales
  );

  if (matchedLocale === null || matchedLocale === currentLocale) {
    return null;
  }

  const matchedTarget = targets.find((target) => target.locale === matchedLocale);

  if (matchedTarget === undefined) {
    throw new Error(
      `Matched locale is missing from locale suggestion targets: ${matchedLocale}`
    );
  }

  return matchedTarget;
}

function getVisibleTarget(
  browserLanguages: ReadonlyArray<string>,
  currentLocale: AppLocale,
  targets: ReadonlyArray<LocaleSuggestionTarget>,
  dismissedForSession: boolean,
  now: number
): LocaleSuggestionTarget | null {
  if (targets.length === 0) {
    return null;
  }

  if (dismissedForSession) {
    return null;
  }

  const dismissalState = getDismissalState(now);

  if (!dismissalState.storageAvailable || dismissalState.dismissed) {
    return null;
  }

  return findSuggestedTarget(browserLanguages, currentLocale, targets);
}

export function LocaleSuggestionBanner({
  currentLocale,
  targets,
}: LocaleSuggestionBannerProps): React.JSX.Element | null {
  const [dismissedForSession, setDismissedForSession] =
    useState<boolean>(false);
  const [suggestedTarget, setSuggestedTarget] =
    useState<LocaleSuggestionTarget | null>(null);

  useEffect(() => {
    const updateSuggestedTarget = (): void => {
      setSuggestedTarget(
        getVisibleTarget(
          navigator.languages,
          currentLocale,
          targets,
          dismissedForSession,
          Date.now()
        )
      );
    };

    updateSuggestedTarget();
    window.addEventListener("languagechange", updateSuggestedTarget);

    return () => {
      window.removeEventListener("languagechange", updateSuggestedTarget);
    };
  }, [currentLocale, dismissedForSession, targets]);

  if (suggestedTarget === null) {
    return null;
  }

  const localeSuggestionCopy = getUiCopy(
    suggestedTarget.locale
  ).localeSuggestion;

  const handleDismiss = (): void => {
    setDismissedForSession(true);
    setSuggestedTarget(null);
    storeDismissal(Date.now());
  };

  return (
    <div className={styles.wrapper}>
      <aside
        className={styles.banner}
        data-testid="locale-suggestion-banner"
        lang={suggestedTarget.locale}
        dir={getLocaleDirection(suggestedTarget.locale)}
      >
        <p className={styles.message}>{localeSuggestionCopy.message}</p>
        <Link
          className={styles.action}
          data-testid="locale-suggestion-action"
          href={suggestedTarget.href}
        >
          {localeSuggestionCopy.actionLabel}
        </Link>
        <button
          className={styles.closeButton}
          data-testid="locale-suggestion-dismiss"
          type="button"
          aria-label={localeSuggestionCopy.dismissLabel}
          onClick={handleDismiss}
        >
          <span className={styles.closeIcon} aria-hidden="true" />
        </button>
      </aside>
    </div>
  );
}
