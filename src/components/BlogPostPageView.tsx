import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  getRecommendedBlogPosts,
  readBlogPost,
} from "@/lib/blog";
import { renderMarkdownToHtml } from "@/lib/content/renderMarkdownToHtml";
import type { AppLocale } from "@/lib/i18n";
import { getAbsoluteUrl, getLocalizedPathname } from "@/lib/i18n";
import { localizeInternalLinks } from "@/lib/localizeInternalLinks";
import { SITE_NAME } from "@/lib/site";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "@/app/blog/[slug]/page.module.css";

const AUTHOR_NAME = "Kirill Markin";
const AUTHOR_URL = "https://kirill-markin.com/";

interface ArticleAuthor {
  readonly "@type": "Person";
  readonly name: string;
  readonly url: string;
}

interface BlogPostPageViewProps {
  readonly locale: AppLocale;
  readonly slug: string;
}

const ARTICLE_AUTHOR: ArticleAuthor = {
  "@type": "Person",
  name: AUTHOR_NAME,
  url: AUTHOR_URL,
};

export async function BlogPostPageView({
  locale,
  slug,
}: BlogPostPageViewProps): Promise<React.JSX.Element> {
  const uiCopy = getUiCopy(locale);
  const post = readBlogPost(locale, slug);

  if (post === null) {
    return (
      <div className={styles.container}>
        <section className={styles.intro}>
          <h1 className={styles.title}>{uiCopy.blog.notFoundTitle}</h1>
        </section>
        <section className={styles.contentPanel}>
          <p className={styles.empty}>{uiCopy.blog.notFoundDescription}</p>
        </section>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: locale,
    url: getAbsoluteUrl(getLocalizedPathname(locale, `/blog/${slug}/`)),
    author: ARTICLE_AUTHOR,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getAbsoluteUrl("/"),
    },
  };
  const recommendedPosts = getRecommendedBlogPosts(locale, slug, 4);
  const localizedContentHtml = await renderMarkdownToHtml(
    localizeInternalLinks(post.bodyMarkdown, locale)
  );

  return (
    <article className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className={styles.intro}>
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
        <time className={styles.date}>{post.date}</time>
        <a href={AUTHOR_URL} className={styles.byline}>
          {uiCopy.blog.byPrefix} {AUTHOR_NAME}
        </a>
        <h1 className={styles.title}>{post.title}</h1>
      </section>
      <section className={styles.contentPanel}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: localizedContentHtml }}
        />
      </section>
      <section className={styles.relatedPanel}>
        <h2 className={styles.relatedHeading}>{uiCopy.blog.readNextHeading}</h2>
        <div className={styles.relatedList}>
          {recommendedPosts.map((recommendedPost) => (
            <Link
              key={recommendedPost.slug}
              href={getLocalizedPathname(locale, `/blog/${recommendedPost.slug}/`)}
              className={styles.relatedCard}
            >
              <time className={styles.date}>{recommendedPost.date}</time>
              <h3>{recommendedPost.title}</h3>
              <p className={styles.relatedDescription}>
                {recommendedPost.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
