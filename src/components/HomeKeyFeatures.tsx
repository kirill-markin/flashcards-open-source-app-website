import type { FeatureListSection } from "@/lib/content/types";
import { FeatureIcon, FEATURE_ICON_NAMES } from "@/components/FeatureIcon";
import styles from "./HomeKeyFeatures.module.css";

export function HomeKeyFeatures({
  section,
}: { readonly section: FeatureListSection }): React.JSX.Element {
  if (section.items.length !== FEATURE_ICON_NAMES.length) {
    throw new Error(`Home features require ${FEATURE_ICON_NAMES.length} items; received ${section.items.length}`);
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="home-key-features-title"
      id="key-features"
    >
      <div className={styles.inner}>
        <h2 className={styles.title} id="home-key-features-title">{section.title}</h2>
        <div className={styles.grid}>
          {section.items.map((item, index) => {
            const icon = FEATURE_ICON_NAMES[index];
            if (icon === undefined) {
              throw new Error(`Missing home feature icon for: ${item.title}`);
            }

            return (
              <article className={styles.feature} key={item.title}>
                <span className={styles.icon} aria-hidden="true">
                  <FeatureIcon name={icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
