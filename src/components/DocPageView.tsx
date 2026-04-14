import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFrame } from "@/components/SiteFrame";
import { renderMarkdownToHtml } from "@/lib/content/renderMarkdownToHtml";
import { readDoc } from "@/lib/docs";
import type { AppLocale } from "@/lib/i18n";
import { getAbsoluteUrl, getLocalizedPathname } from "@/lib/i18n";
import { localizeInternalLinks } from "@/lib/localizeInternalLinks";
import { SITE_NAME } from "@/lib/site";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "@/app/docs/[slug]/page.module.css";

const AUTHOR_NAME = "Kirill Markin";
const AUTHOR_URL = "https://kirill-markin.com/";

interface ArticleAuthor {
  readonly "@type": "Person";
  readonly name: string;
  readonly url: string;
}

interface ArticlePublisher {
  readonly "@type": "Organization";
  readonly name: string;
  readonly url: string;
}

interface ArticleMainEntityOfPage {
  readonly "@type": "WebPage";
  readonly "@id": string;
}

interface TechArticleSchema {
  readonly "@context": "https://schema.org";
  readonly "@type": "TechArticle";
  readonly author: ArticleAuthor;
  readonly description: string;
  readonly headline: string;
  readonly inLanguage: AppLocale;
  readonly mainEntityOfPage: ArticleMainEntityOfPage;
  readonly publisher: ArticlePublisher;
  readonly url: string;
}

const ARTICLE_AUTHOR: ArticleAuthor = {
  "@type": "Person",
  name: AUTHOR_NAME,
  url: AUTHOR_URL,
};

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
  const articleUrl = getAbsoluteUrl(getLocalizedPathname(locale, `/docs/${slug}/`));
  const articleSchema: TechArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.title,
    description: doc.description,
    inLanguage: locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    author: ARTICLE_AUTHOR,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getAbsoluteUrl("/"),
    },
  };

  return (
    <SiteFrame locale={locale} routePathname={`/docs/${slug}/`}>
      <article className={styles.container} aria-labelledby="doc-title">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <header className={styles.intro}>
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
          <h1 className={styles.title} id="doc-title">
            {doc.title}
          </h1>
        </header>
        <section className={styles.contentPanel}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>
      </article>
    </SiteFrame>
  );
}
