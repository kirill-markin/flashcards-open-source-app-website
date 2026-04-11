import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";
import { getAbsoluteUrl, getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: ReadonlyArray<BreadcrumbItem>;
  locale: AppLocale;
}

export function Breadcrumbs({
  items,
  locale,
}: BreadcrumbsProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const allItems: ReadonlyArray<BreadcrumbItem> = [
    {
      label: uiCopy.breadcrumbs.homeLabel,
      href: getLocalizedPathname(locale, "/"),
    },
    ...items,
  ];

  const schemaItems = allItems.map((item, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    name: item.label,
    item: getAbsoluteUrl(item.href),
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <nav aria-label={uiCopy.breadcrumbs.ariaLabel} className={styles.nav}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
