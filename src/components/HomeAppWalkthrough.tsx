import Image from "next/image";
import { TrackedAppEntryLink } from "@/components/TrackedAppEntryLink";
import { getAppUrl } from "@/lib/auth";
import type { AppWalkthroughSection } from "@/lib/content/types";
import type { AppLocale } from "@/lib/i18n";
import styles from "./HomeAppWalkthrough.module.css";

interface HomeAppWalkthroughProps {
  readonly locale: AppLocale;
  readonly section: AppWalkthroughSection;
}

export function HomeAppWalkthrough({
  locale,
  section,
}: HomeAppWalkthroughProps): React.JSX.Element {
  return (
    <section
      className={styles.walkthrough}
      aria-label={section.title}
      id="how-nibomo-works"
    >
      {section.items.map((item) => (
        <article className={styles.step} key={item.label}>
          <div className={styles.copy}>
            <p className={styles.label}>{item.label}</p>
            <h2 className={styles.title}>
              {item.titleLines.map((line) => <span key={line}>{line}</span>)}
            </h2>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.link}>
              <TrackedAppEntryLink
                action="open_app"
                href={getAppUrl()}
                label={`${item.linkLabel} →`}
                locale={locale}
                placement="home_walkthrough"
              />
            </div>
          </div>
          <Image
            className={styles.preview}
            src={item.imagePath}
            alt={item.imageAlt}
            width={582}
            height={858}
            sizes="291px"
          />
        </article>
      ))}
    </section>
  );
}
