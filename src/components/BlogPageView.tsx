import Link from "next/link";
import { BreadcrumbStructuredData } from "@/components/BreadcrumbStructuredData";
import { SiteFrame } from "@/components/SiteFrame";
import { MarketingHeading, getMarketingHeadingBadge } from "@/components/MarketingHeading";
import { formatHeadingText } from "@/lib/headingText";
import { listBlogPosts } from "@/lib/blog";
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

  return (
    <SiteFrame locale={locale} routePathname="/blog/">
      <div className={styles.container}>
        <div className={styles.pagePanel}>
          <header className={styles.intro}>
            <BreadcrumbStructuredData
              items={[
                {
                  label: uiCopy.blog.breadcrumbLabel,
                  href: getLocalizedPathname(locale, "/blog/"),
                },
              ]}
              locale={locale}
            />
            <MarketingHeading badge={getMarketingHeadingBadge(locale, "blog")} title={uiCopy.blog.title} />
          </header>
          <section className={styles.listPanel}>
            {posts.length === 0 ? (
              <p className={styles.empty}>{uiCopy.blog.empty}</p>
            ) : (
              <div className={styles.list}>
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={getLocalizedPathname(locale, `/blog/${post.slug}/`)}
                    className={styles.card}
                  >
                    <header className={styles.cardHeader}>
                      <time className={styles.date} dateTime={post.date}>
                        {post.date}
                      </time>
                      <h2 className={styles.cardTitle}>{formatHeadingText(post.title)}</h2>
                    </header>
                    <p>{post.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </SiteFrame>
  );
}
