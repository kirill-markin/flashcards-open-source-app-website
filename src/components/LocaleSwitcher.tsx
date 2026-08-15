import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";
import { getLocaleShortLabel } from "@/lib/localeConfig";
import { getLocaleSwitcherEntries } from "@/lib/routeTranslations";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./LocaleSwitcher.module.css";

interface LocaleSwitcherProps {
  readonly locale: AppLocale;
  readonly routePathname: string;
}

export function LocaleSwitcher({
  locale,
  routePathname,
}: LocaleSwitcherProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const availableEntries = getLocaleSwitcherEntries(routePathname).filter(
    (entry) => entry.available,
  );

  if (!availableEntries.some((entry) => entry.locale === locale)) {
    throw new Error(`Missing locale switcher entry for locale: ${locale}`);
  }

  return (
    <details className={styles.switcher}>
      <summary
        aria-label={uiCopy.locale.switcherAriaLabel}
        className={styles.trigger}
      >
        <span className={styles.current}>{getLocaleShortLabel(locale)}</span>
        <span className={styles.chevron} aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu} aria-label={uiCopy.locale.switcherAriaLabel}>
          {availableEntries.map((entry) => (
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
