import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SiteFrame } from "@/components/SiteFrame";
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
            <Breadcrumbs
              items={[
                {
                  label: uiCopy.blog.breadcrumbLabel,
                  href: getLocalizedPathname(locale, "/blog/"),
                },
              ]}
              locale={locale}
            />
            <h1 className={styles.title}>{uiCopy.blog.title}</h1>
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
                      <h2 className={styles.cardTitle}>{post.title}</h2>
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
