import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";
import {
  getLocaleNativeName,
  getLocaleSearchAliases,
} from "@/lib/localeConfig";
import { normalizeLocaleSearchText } from "@/lib/localeSearch";
import { getLocaleSwitcherEntriesForLocales } from "@/lib/routeTranslations";
import { getUiCopy } from "@/lib/uiCopy";
import { LocaleSwitcherSearch } from "./LocaleSwitcherSearch";
import styles from "./LocaleSwitcher.module.css";

interface LocaleSwitcherProps {
  readonly locale: AppLocale;
  readonly routeLocales: ReadonlyArray<AppLocale>;
  readonly routePathname: string;
}

interface LocaleOptionLabelProps {
  readonly englishName: string;
  readonly locale: AppLocale;
  readonly nativeName: string;
}

function GlobeIcon(): React.JSX.Element {
  return (
    <svg aria-hidden="true" className={styles.globe} viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="7.5" />
      <path d="M2.5 10h15" />
      <path d="M10 2.5c2 2.1 3 4.6 3 7.5s-1 5.4-3 7.5c-2-2.1-3-4.6-3-7.5s1-5.4 3-7.5Z" />
    </svg>
  );
}

/** Newline-separated so a query cannot match across two names. */
function getLocaleSearchText(
  locale: AppLocale,
  nativeName: string,
  englishName: string,
): string {
  return [nativeName, englishName, locale, ...getLocaleSearchAliases(locale)]
    .map(normalizeLocaleSearchText)
    .join("\n");
}

/**
 * Each half is direction-isolated so the pair keeps its order on LTR and RTL pages.
 * The pair is one inline run, so the flex parent sees a single item.
 */
function LocaleOptionLabel({
  englishName,
  locale,
  nativeName,
}: LocaleOptionLabelProps): React.JSX.Element {
  if (nativeName === englishName) {
    return <bdi lang={locale}>{nativeName}</bdi>;
  }

  return (
    <span>
      <bdi lang={locale}>{nativeName}</bdi>
      {" — "}
      <bdi lang="en">{englishName}</bdi>
    </span>
  );
}

export function LocaleSwitcher({
  locale,
  routeLocales,
  routePathname,
}: LocaleSwitcherProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const availableEntries = getLocaleSwitcherEntriesForLocales(
    routePathname,
    routeLocales,
  ).filter(
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
        <GlobeIcon />
        <span className={styles.current}>{getLocaleNativeName(locale)}</span>
        <span className={styles.chevron} aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className={styles.menuWrapper}>
        <LocaleSwitcherSearch
          emptyLabel={uiCopy.locale.searchEmptyLabel}
          placeholder={uiCopy.locale.searchPlaceholder}
        />
        <ul className={styles.menu} aria-label={uiCopy.locale.switcherAriaLabel}>
          {availableEntries.map((entry) => (
            <li
              key={entry.locale}
              data-locale-search={getLocaleSearchText(
                entry.locale,
                entry.nativeName,
                entry.englishName,
              )}
            >
              {entry.locale === locale ? (
                <span className={styles.currentOption} aria-current="true">
                  <LocaleOptionLabel
                    englishName={entry.englishName}
                    locale={entry.locale}
                    nativeName={entry.nativeName}
                  />
                </span>
              ) : (
                <Link href={entry.href}>
                  <LocaleOptionLabel
                    englishName={entry.englishName}
                    locale={entry.locale}
                    nativeName={entry.nativeName}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
