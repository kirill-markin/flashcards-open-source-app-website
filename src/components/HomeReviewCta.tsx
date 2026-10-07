import { AuthAwareAppCtaLink } from "@/components/AuthAwareAppCtaLink";
import type { ReviewCtaSection } from "@/lib/content/types";
import type { AppLocale } from "@/lib/i18n";
import styles from "./HomeReviewCta.module.css";

interface HomeReviewCtaProps {
  readonly locale: AppLocale;
  readonly section: ReviewCtaSection;
}

export function HomeReviewCta({
  locale,
  section,
}: HomeReviewCtaProps): React.JSX.Element {
  return (
    <section
      id="start-studying"
      className={styles.section}
      aria-labelledby="home-review-cta-title"
    >
      <div className={styles.panel}>
        <h2 id="home-review-cta-title" className={styles.title}>
          {section.titleLines.map((line) => <span key={line}>{line}</span>)}
        </h2>
        <p className={styles.description}>{section.description}</p>
        <div className={styles.action}>
          <AuthAwareAppCtaLink locale={locale} placement="home_review_cta" />
        </div>
      </div>
    </section>
  );
}
