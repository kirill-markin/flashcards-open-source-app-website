import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getLocaleShortLabel } from "@/lib/localeConfig";
import { getRouteLocales } from "@/lib/routeTranslations";
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
  const availableLocales = getRouteLocales(routePathname);

  if (!availableLocales.includes(locale)) {
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
          {availableLocales.map((availableLocale) => (
            <li key={availableLocale}>
              {availableLocale === locale ? (
                <span className={styles.currentOption} aria-current="true">
                  {getLocaleShortLabel(availableLocale)}
                </span>
              ) : (
                <Link href={getLocalizedPathname(availableLocale, routePathname)}>
                  {getLocaleShortLabel(availableLocale)}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
