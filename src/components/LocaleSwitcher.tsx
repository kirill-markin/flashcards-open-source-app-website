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

  return (
    <div aria-label={uiCopy.locale.switcherAriaLabel} className={styles.switcher}>
      {entries.map((entry, index) => {
        const label =
          entry.locale === "en"
            ? uiCopy.locale.englishLabel
            : uiCopy.locale.spanishLabel;

        return (
          <span key={entry.locale}>
            {entry.locale === locale ? (
              <span className={styles.current} aria-current="true">
                {label}
              </span>
            ) : (
              <Link href={entry.href}>{label}</Link>
            )}
            {index < entries.length - 1 ? (
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}
