"use client";

import { useRef, useState } from "react";
import { getIntlLocale, type AppLocale } from "@/lib/localeConfig";
import styles from "@/app/blog/page.module.css";

interface BlogReadingListProps {
  readonly locale: AppLocale;
  readonly pages: ReadonlyArray<React.ReactNode>;
  readonly pageSize: number;
  readonly totalPosts: number;
  readonly labels: {
    readonly title: string;
    readonly previous: string;
    readonly next: string;
    readonly pageStatus: string;
  };
}

export function BlogReadingList({
  locale, pages, pageSize, totalPosts, labels,
}: BlogReadingListProps): React.JSX.Element {
  const [page, setPage] = useState<number>(0);
  const resultsRef = useRef<HTMLElement>(null);
  const numbers = new Intl.NumberFormat(getIntlLocale(locale));
  const pageStatus = labels.pageStatus
    .replace("{page}", numbers.format(page + 1))
    .replace("{total}", numbers.format(pages.length));

  function changePage(nextPage: number): void {
    setPage(nextPage);
    resultsRef.current?.focus({ preventScroll: true });
    resultsRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }

  return (
    <>
      <section className={styles.results} ref={resultsRef} tabIndex={-1} aria-label={labels.title}>
        {/* Keep every server-rendered article in the HTML so all localized links remain discoverable. */}
        {pages.map((articles, index) => (
          <div className={styles.list} key={index} hidden={index !== page}>{articles}</div>
        ))}
      </section>
      {pages.length > 1 && (
        <nav className={styles.pagination} aria-label={labels.title}>
          <p><bdi>{numbers.format(page * pageSize + 1)}–{numbers.format(Math.min((page + 1) * pageSize, totalPosts))} / {numbers.format(totalPosts)}</bdi></p>
          <div>
            <button type="button" disabled={page === 0} onClick={() => changePage(page - 1)}>{labels.previous}</button>
            <span aria-live="polite" aria-label={pageStatus}><bdi>{numbers.format(page + 1)} / {numbers.format(pages.length)}</bdi></span>
            <button type="button" disabled={page === pages.length - 1} onClick={() => changePage(page + 1)}>
              {labels.next}
              <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
