import Link from "next/link";
import { DocsArrow, DocsIcon } from "@/components/DocsIcon";
import type { DocEntry } from "@/lib/docs";
import { getDocsExperienceCopy } from "@/lib/docsExperienceCopy";
import { formatHeadingText } from "@/lib/headingText";
import { getLocalizedPathname, type AppLocale } from "@/lib/i18n";
import styles from "@/app/docs/page.module.css";

interface DocsGuideGridProps {
  readonly docs: ReadonlyArray<DocEntry>;
  readonly locale: AppLocale;
}

export function DocsGuideGrid({ docs, locale }: DocsGuideGridProps): React.JSX.Element {
  const copy = getDocsExperienceCopy(locale);

  return (
    <div className={styles.grid}>
      {docs.map((doc) => {
        const featured = doc.slug === "getting-started";
        return (
          <Link key={doc.slug} href={getLocalizedPathname(locale, `/docs/${doc.slug}/`)} className={`${styles.card} ${featured ? styles.featured : ""}`}>
            <div className={styles.cardTop}>
              <span className={styles.icon}><DocsIcon slug={doc.slug} /></span>
              {featured ? <span className={styles.startLabel}>{copy.startHere}</span> : <span className={styles.arrow}><DocsArrow /></span>}
            </div>
            <div className={styles.cardCopy}>
              <h2>{formatHeadingText(doc.title)}</h2>
              <p>{doc.description}</p>
            </div>
            {featured && <span className={styles.readGuide}>{copy.readGuide}<DocsArrow /></span>}
          </Link>
        );
      })}
    </div>
  );
}
