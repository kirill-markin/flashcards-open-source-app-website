import Link from "next/link";
import { BreadcrumbStructuredData } from "@/components/BreadcrumbStructuredData";
import { BlogReadingList } from "@/components/BlogReadingList";
import { SiteFrame } from "@/components/SiteFrame";
import { MarketingHeading, getMarketingHeadingBadge } from "@/components/MarketingHeading";
import { formatHeadingText } from "@/lib/headingText";
import { listBlogPosts } from "@/lib/blog";
import { formatBlogArticleCount } from "@/lib/blogExperienceCopy";
import { getIntlLocale } from "@/lib/localeConfig";
import { getPublicCatalogUiCopy } from "@/lib/publicCatalogCopy";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "@/app/blog/page.module.css";

interface BlogPageViewProps {
  readonly locale: AppLocale;
}

export function BlogPageView({
  locale,
}: BlogPageViewProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const posts = listBlogPosts(locale);
  const paginationCopy = getPublicCatalogUiCopy(locale).browse;
  const pageSize = 12;
  const dateFormatter = new Intl.DateTimeFormat(getIntlLocale(locale), {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  const pages: ReadonlyArray<React.ReactNode> = Array.from(
    { length: Math.ceil(posts.length / pageSize) },
    (_, page) => posts.slice(page * pageSize, (page + 1) * pageSize).map((post) => (
      <article className={styles.article} key={post.slug}>
        <Link
          href={getLocalizedPathname(locale, `/blog/${post.slug}/`)}
          className={styles.card}
          prefetch={false}
          aria-labelledby={`title-${post.slug}`}
        >
          <time className={styles.date} dateTime={post.date}>
            {dateFormatter.format(new Date(post.date))}
          </time>
          <div className={styles.cardCopy}>
            <h2 className={styles.cardTitle} id={`title-${post.slug}`}>
              {formatHeadingText(post.title)}
            </h2>
            <p>{post.description}</p>
          </div>
          <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </article>
    )),
  );

  return (
    <SiteFrame locale={locale} routePathname="/blog/">
      <div className={styles.container}>
        <BreadcrumbStructuredData
          items={[{ label: uiCopy.blog.breadcrumbLabel, href: getLocalizedPathname(locale, "/blog/") }]}
          locale={locale}
        />
        <header className={styles.intro}>
          <MarketingHeading badge={getMarketingHeadingBadge(locale, "blog")} title={uiCopy.blog.title} />
          <p className={styles.count}><bdi>{formatBlogArticleCount(locale, posts.length)}</bdi></p>
        </header>
        {posts.length === 0 ? (
          <p className={styles.empty}>{uiCopy.blog.empty}</p>
        ) : (
          <BlogReadingList
            locale={locale}
            pages={pages}
            pageSize={pageSize}
            totalPosts={posts.length}
            labels={{
              title: uiCopy.blog.title,
              previous: paginationCopy.previousPageLabel,
              next: paginationCopy.nextPageLabel,
              pageStatus: paginationCopy.pageStatusTemplate,
            }}
          />
        )}
      </div>
    </SiteFrame>
  );
}
