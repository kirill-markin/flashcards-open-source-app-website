import type { AppLocale } from "@/lib/i18n";
import { getAbsoluteUrl, getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import { StructuredDataScript } from "@/components/StructuredDataScript";

interface BreadcrumbItem {
  readonly label: string;
  readonly href: string;
}

interface BreadcrumbStructuredDataProps {
  readonly items: ReadonlyArray<BreadcrumbItem>;
  readonly locale: AppLocale;
}

interface AncestorBreadcrumbStructuredDataProps {
  readonly ancestors: ReadonlyArray<BreadcrumbItem>;
  readonly currentPage: BreadcrumbItem;
  readonly locale: AppLocale;
}

export function BreadcrumbStructuredData({
  items,
  locale,
}: BreadcrumbStructuredDataProps): React.JSX.Element {
  const allItems: ReadonlyArray<BreadcrumbItem> = [
    {
      label: getUiCopy(locale).breadcrumbs.homeLabel,
      href: getLocalizedPathname(locale, "/"),
    },
    ...items,
  ];

  return (
    <StructuredDataScript
      value={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: allItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: getAbsoluteUrl(item.href),
        })),
      }}
    />
  );
}

export function AncestorBreadcrumbStructuredData({
  ancestors,
  currentPage,
  locale,
}: AncestorBreadcrumbStructuredDataProps): React.JSX.Element {
  return (
    <BreadcrumbStructuredData items={[...ancestors, currentPage]} locale={locale} />
  );
}
