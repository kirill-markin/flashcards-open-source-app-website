import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getPublicCatalogDestinationCopy } from "@/lib/publicCatalogDestinationCopy";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import {
  getPublicCatalogRootUrl,
  PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
} from "@/lib/publicCatalogUrls";
import styles from "./PublicCatalogNavigation.module.css";

interface PublicCatalogNavigationProps {
  readonly currentSection: "authors" | "collections" | "packages" | null;
  readonly locale: AppLocale;
}

export function PublicCatalogNavigation({
  currentSection,
  locale,
}: PublicCatalogNavigationProps): React.JSX.Element {
  const copy = getPublicCatalogDestinationCopy(locale);
  const catalogCopy = getPublicCatalogUiCopy(locale);
  const links = [
    {
      href: getPublicCatalogRootUrl(locale),
      label: copy.allPackagesNavigationLabel,
      section: "packages" as const,
    },
    {
      href: getLocalizedPathname(locale, PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME),
      label: copy.collectionsNavigationLabel,
      section: "collections" as const,
    },
    {
      href: getLocalizedPathname(locale, PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME),
      label: copy.authorsNavigationLabel,
      section: "authors" as const,
    },
  ];

  return (
    <nav className={styles.nav} aria-label={catalogCopy.navigationLabel}>
      <ul className={styles.list}>
        {links.map((link) => {
          const isCurrent = link.section === currentSection;

          return (
            <li key={link.section}>
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className={`${styles.link} ${isCurrent ? styles.current : ""}`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
