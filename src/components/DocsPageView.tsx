import { BreadcrumbStructuredData } from "@/components/BreadcrumbStructuredData";
import { DocsGuideGrid } from "@/components/DocsGuideGrid";
import { SiteFrame } from "@/components/SiteFrame";
import { MarketingHeading, getMarketingHeadingBadge } from "@/components/MarketingHeading";
import { DOC_SLUGS } from "@/data/docs";
import { getDocs } from "@/lib/docs";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "@/app/docs/page.module.css";

interface DocsPageViewProps {
  readonly locale: AppLocale;
}

export function DocsPageView({
  locale,
}: DocsPageViewProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const docs = getDocs(locale, DOC_SLUGS);

  return (
    <SiteFrame locale={locale} routePathname="/docs/">
      <div className={styles.container}>
        <div className={styles.pagePanel}>
          <header className={styles.intro}>
            <BreadcrumbStructuredData
              items={[
                {
                  label: uiCopy.docs.breadcrumbLabel,
                  href: getLocalizedPathname(locale, "/docs/"),
                },
              ]}
              locale={locale}
            />
            <MarketingHeading badge={getMarketingHeadingBadge(locale, "docs")} title={uiCopy.docs.title} />
          </header>
          <section className={styles.gridPanel}>
            <DocsGuideGrid docs={docs} locale={locale} />
          </section>
        </div>
      </div>
    </SiteFrame>
  );
}
