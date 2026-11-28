import { getAppUrl } from "@/lib/auth";
import type { AppLocale } from "@/lib/i18n";
import type { PublicCatalogBrowseUiCopy } from "@/lib/publicCatalogCopy";
import { reportPublicCatalogAiDeckClick } from "@/lib/publicCatalogSiteEvents";
import coverStyles from "./PublicCatalogCover.module.css";
import styles from "./PublicCatalogPackageCard.module.css";

interface PublicCatalogAiDeckCardProps {
  readonly copy: PublicCatalogBrowseUiCopy;
  readonly locale: AppLocale;
  readonly resultCount: number;
  readonly topic: string;
}

export function PublicCatalogAiDeckCard({
  copy,
  locale,
  resultCount,
  topic,
}: PublicCatalogAiDeckCardProps): React.JSX.Element {
  const href = getAppUrl(`/chat#catalog-topic=${encodeURIComponent(topic)}`, locale);

  return (
    <a
      className={`${styles.card} ${styles.aiDeckLink}`}
      data-testid="catalog-ai-deck"
      href={href}
      onAuxClick={(event) => {
        if (event.button === 1) {
          reportPublicCatalogAiDeckClick(locale, resultCount);
        }
      }}
      onClick={(event) => {
        if (event.button === 0) {
          reportPublicCatalogAiDeckClick(locale, resultCount);
        }
      }}
    >
      <div aria-hidden="true" className={`${coverStyles.cover} ${styles.aiDeckArtwork}`}>
        <svg viewBox="0 0 64 64" fill="currentColor">
          <path d="M27 9c3.5 12 6.5 15 18.5 18.5C33.5 31 30.5 34 27 46c-3.5-12-6.5-15-18.5-18.5C20.5 24 23.5 21 27 9Z" />
          <path d="M48 31c1.9 6.5 3.5 8.1 10 10-6.5 1.9-8.1 3.5-10 10-1.9-6.5-3.5-8.1-10-10 6.5-1.9 8.1-3.5 10-10Z" />
          <path d="M50 9c1.1 3.9 2.1 4.9 6 6-3.9 1.1-4.9 2.1-6 6-1.1-3.9-2.1-4.9-6-6 3.9-1.1 4.9-2.1 6-6Z" />
        </svg>
      </div>
      <div className={styles.body}>
        <h2 className={styles.title}>{copy.createAiDeckTitle}</h2>
        <p className={styles.summary}>{copy.createAiDeckSubtitle}</p>
      </div>
    </a>
  );
}
