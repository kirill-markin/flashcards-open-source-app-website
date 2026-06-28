import { Fragment } from "react";
import Link from "next/link";
import { BlogCta } from "@/components/BlogCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFrame } from "@/components/SiteFrame";
import { getArticleHtmlSegments } from "@/lib/content/getArticleHtmlSegments";
import {
  getBlogPostImageUrl,
  getRecommendedBlogPosts,
  readBlogPost,
} from "@/lib/blog";
import { renderMarkdownToHtml } from "@/lib/content/renderMarkdownToHtml";
import type { AppLocale } from "@/lib/i18n";
import { getAbsoluteUrl, getLocalizedPathname } from "@/lib/i18n";
import { localizeInternalLinks } from "@/lib/localizeInternalLinks";
import {
  CREATOR_ENTITY,
  CREATOR_REFERENCE,
  STRUCTURED_DATA_AUTHOR_NAME,
  STRUCTURED_DATA_AUTHOR_URL,
  type PersonStructuredData,
  type StructuredDataEntityReference,
} from "@/lib/seo/structuredData";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "@/app/blog/[slug]/page.module.css";

interface BlogPostPageViewProps {
  readonly locale: AppLocale;
  readonly slug: string;
}

interface ArticleMainEntityOfPage {
  readonly "@type": "WebPage";
  readonly "@id": string;
}

interface BlogPostingSchema {
  readonly "@context": "https://schema.org";
  readonly "@type": "BlogPosting";
  readonly author: PersonStructuredData;
  readonly dateModified?: string;
  readonly datePublished: string;
  readonly description: string;
  readonly headline: string;
  readonly image: string;
  readonly inLanguage: AppLocale;
  readonly mainEntityOfPage: ArticleMainEntityOfPage;
  readonly publisher: StructuredDataEntityReference;
  readonly url: string;
}

export async function BlogPostPageView({
  locale,
  slug,
}: BlogPostPageViewProps): Promise<React.JSX.Element> {
  const uiCopy = getUiCopy(locale);
  const post = readBlogPost(locale, slug);

  if (post === null) {
    return (
      <SiteFrame locale={locale} routePathname={`/blog/${slug}/`}>
        <div className={styles.container}>
          <section className={styles.articlePanel}>
            <header className={styles.intro}>
              <h1 className={styles.title}>{uiCopy.blog.notFoundTitle}</h1>
            </header>
            <div className={styles.contentPanel}>
              <p className={styles.empty}>{uiCopy.blog.notFoundDescription}</p>
            </div>
          </section>
        </div>
      </SiteFrame>
    );
  }

  const articleUrl = getAbsoluteUrl(getLocalizedPathname(locale, `/blog/${slug}/`));
  const articleImageUrl = getBlogPostImageUrl(post);
  const articleSchema: BlogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    image: articleImageUrl,
    inLanguage: locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    author: CREATOR_ENTITY,
    publisher: CREATOR_REFERENCE,
  };
  const recommendedPosts = getRecommendedBlogPosts(locale, slug, 4);
  const localizedContentHtml = await renderMarkdownToHtml(
    localizeInternalLinks(post.bodyMarkdown, locale)
  );
  const { chunks, midInsertIndex } = getArticleHtmlSegments(localizedContentHtml);

  return (
    <SiteFrame locale={locale} routePathname={`/blog/${slug}/`}>
      <article className={styles.container}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <div className={styles.articlePanel}>
          <header className={styles.intro}>
            <Breadcrumbs
              items={[
                {
                  label: uiCopy.blog.breadcrumbLabel,
                  href: getLocalizedPathname(locale, "/blog/"),
                },
                {
                  label: post.title,
                  href: getLocalizedPathname(locale, `/blog/${slug}/`),
                },
              ]}
              locale={locale}
            />
            <div className={styles.meta} aria-label="Article metadata">
              <time className={styles.date} dateTime={post.date}>
                {post.date}
              </time>
              <p className={styles.byline}>
                <span>{uiCopy.blog.byPrefix} </span>
                <a href={STRUCTURED_DATA_AUTHOR_URL} rel="author">
                  {STRUCTURED_DATA_AUTHOR_NAME}
                </a>
              </p>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
          </header>
          <section className={styles.contentPanel}>
            {chunks.map((chunkHtml, index) => (
              <Fragment key={index}>
                {index === midInsertIndex && (
                  <BlogCta locale={locale} placement="mid_article" />
                )}
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: chunkHtml }}
                />
              </Fragment>
            ))}
            <BlogCta locale={locale} placement="article_end" />
          </section>
        </div>
        {recommendedPosts.length > 0 ? (
          <section className={styles.relatedPanel}>
            <h2 className={styles.relatedHeading}>{uiCopy.blog.readNextHeading}</h2>
            <div className={styles.relatedList}>
              {recommendedPosts.map((recommendedPost) => (
                <Link
                  key={recommendedPost.slug}
                  href={getLocalizedPathname(locale, `/blog/${recommendedPost.slug}/`)}
                  className={styles.relatedCard}
                >
                  <time className={styles.date} dateTime={recommendedPost.date}>
                    {recommendedPost.date}
                  </time>
                  <h3>{recommendedPost.title}</h3>
                  <p className={styles.relatedDescription}>
                    {recommendedPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </SiteFrame>
  );
}
