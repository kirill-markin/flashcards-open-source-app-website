"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleSwitcherEntries, resolveLocaleFromPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./LocaleSwitcher.module.css";

export function LocaleSwitcher(): React.JSX.Element {
  const pathname = usePathname();
  const resolvedPathname = resolveLocaleFromPathname(pathname);
  const locale = resolvedPathname.locale;
  const uiCopy = getUiCopy(locale);
  const entries = getLocaleSwitcherEntries(pathname).filter(
    (entry) => entry.available
  );
  const currentEntry = entries.find((entry) => entry.locale === locale);

  if (currentEntry === undefined) {
    throw new Error(`Missing locale switcher entry for locale: ${locale}`);
  }

  return (
    <details className={styles.switcher}>
      <summary
        aria-label={uiCopy.locale.switcherAriaLabel}
        className={styles.trigger}
      >
        <span className={styles.current}>{currentEntry.label}</span>
        <span className={styles.chevron} aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu} aria-label={uiCopy.locale.switcherAriaLabel}>
          {entries.map((entry) => (
            <li key={entry.locale}>
              {entry.locale === locale ? (
                <span className={styles.currentOption} aria-current="true">
                  {entry.label}
                </span>
              ) : (
                <Link href={entry.href}>{entry.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
