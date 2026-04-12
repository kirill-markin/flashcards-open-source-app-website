import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFrame } from "@/components/SiteFrame";
import { renderMarkdownToHtml } from "@/lib/content/renderMarkdownToHtml";
import { readDoc } from "@/lib/docs";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { localizeInternalLinks } from "@/lib/localizeInternalLinks";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "@/app/docs/[slug]/page.module.css";

interface DocPageViewProps {
  readonly locale: AppLocale;
  readonly slug: string;
}

export async function DocPageView({
  locale,
  slug,
}: DocPageViewProps): Promise<React.JSX.Element> {
  const uiCopy = getUiCopy(locale);
  const doc = readDoc(locale, slug);

  if (doc === null) {
    return (
      <SiteFrame locale={locale} routePathname={`/docs/${slug}/`}>
        <div className={styles.container}>
          <section className={styles.intro}>
            <h1 className={styles.title}>{uiCopy.docs.comingSoonTitle}</h1>
          </section>
          <section className={styles.contentPanel}>
            <p className={styles.empty}>{uiCopy.docs.comingSoonDescription}</p>
          </section>
        </div>
      </SiteFrame>
    );
  }

  const contentHtml = await renderMarkdownToHtml(
    localizeInternalLinks(doc.bodyMarkdown, locale)
  );

  return (
    <SiteFrame locale={locale} routePathname={`/docs/${slug}/`}>
      <div className={styles.container}>
        <section className={styles.intro}>
          <Breadcrumbs
            items={[
              {
                label: uiCopy.docs.breadcrumbLabel,
                href: getLocalizedPathname(locale, "/docs/"),
              },
              {
                label: doc.title,
                href: getLocalizedPathname(locale, `/docs/${slug}/`),
              },
            ]}
            locale={locale}
          />
          <h1 className={styles.title}>{doc.title}</h1>
        </section>
        <section className={styles.contentPanel}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>
      </div>
    </SiteFrame>
  );
}
