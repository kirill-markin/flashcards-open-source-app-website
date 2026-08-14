import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";
import { getAbsoluteUrl, getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import { serializeStructuredData } from "@/lib/seo/structuredData";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbItem {
  readonly label: string;
  readonly href: string;
}

interface BreadcrumbsProps {
  readonly items: ReadonlyArray<BreadcrumbItem>;
  readonly locale: AppLocale;
}

interface AncestorBreadcrumbsProps {
  readonly ancestors: ReadonlyArray<BreadcrumbItem>;
  readonly currentPage: BreadcrumbItem;
  readonly locale: AppLocale;
}

interface BreadcrumbSchemaItem {
  readonly "@type": "ListItem";
  readonly item: string;
  readonly name: string;
  readonly position: number;
}

interface BreadcrumbSchema {
  readonly "@context": "https://schema.org";
  readonly "@type": "BreadcrumbList";
  readonly itemListElement: ReadonlyArray<BreadcrumbSchemaItem>;
}

function getHomeBreadcrumbItem(locale: AppLocale): BreadcrumbItem {
  return {
    label: getUiCopy(locale).breadcrumbs.homeLabel,
    href: getLocalizedPathname(locale, "/"),
  };
}

function createBreadcrumbSchema(
  items: ReadonlyArray<BreadcrumbItem>,
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.label,
      item: getAbsoluteUrl(item.href),
    })),
  };
}

export function Breadcrumbs({
  items,
  locale,
}: BreadcrumbsProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const allItems: ReadonlyArray<BreadcrumbItem> = [
    getHomeBreadcrumbItem(locale),
    ...items,
  ];
  const schema = createBreadcrumbSchema(allItems);

  return (
    <nav aria-label={uiCopy.breadcrumbs.ariaLabel} className={styles.nav}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }}
      />
      <ol className={styles.list}>
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={item.href} className={styles.item}>
              {index > 0 && (
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function AncestorBreadcrumbs({
  ancestors,
  currentPage,
  locale,
}: AncestorBreadcrumbsProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const visibleItems: ReadonlyArray<BreadcrumbItem> = [
    getHomeBreadcrumbItem(locale),
    ...ancestors,
  ];
  const schema = createBreadcrumbSchema([...visibleItems, currentPage]);

  return (
    <nav aria-label={uiCopy.breadcrumbs.ariaLabel} className={styles.nav}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(schema) }}
      />
      <ol className={styles.list}>
        {visibleItems.map((item, index) => (
          <li
            key={item.href}
            className={`${styles.item} ${styles.ancestorItem}`}
          >
            {index > 0 && (
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
            )}
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
