import type { FeatureListSection } from "@/lib/content/types";
import styles from "./HomeKeyFeatures.module.css";

type FeatureIconName = "reviews" | "cards" | "offline" | "data" | "agents" | "server";

const FEATURE_ICONS_BY_TITLE: Readonly<Record<string, FeatureIconName>> = {
  "Smarter Reviews": "reviews",
  "AI-Assisted Card Creation": "cards",
  "Offline Study with Automatic Sync": "offline",
  "Import, Export Own Your Data": "data",
  "Works with AI Agents": "agents",
  "Free and Self-Hostable": "server",
};

const ICON_CONTENT: Readonly<Record<FeatureIconName, React.ReactNode>> = {
  reviews: (
    <>
      <path d="M4 8a8 8 0 1 1-.6 6M4 3v5h5" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  cards: (
    <>
      <rect x="3" y="8" width="14" height="12" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h5M7 12h6M7 16h4" />
      <path d="m18 2 1.2 3.8L23 7l-3.8 1.2L18 12l-1.2-3.8L13 7l3.8-1.2Z" />
    </>
  ),
  offline: (
    <>
      <path d="M6 15H5a4 4 0 0 1-.8-7.9 6 6 0 0 1 11.5-1.5A4.8 4.8 0 0 1 20 15h-2" />
      <path d="M12 10v11m-4-4 4 4 4-4" />
    </>
  ),
  data: (
    <>
      <path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
      <path d="M8 3v12m-3-3 3 3 3-3M16 15V3m-3 3 3-3 3 3" />
    </>
  ),
  agents: (
    <>
      <rect x="4" y="7" width="16" height="14" rx="4" />
      <path d="M12 3v4M2 12v4m20-4v4M8 17h8" />
      <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.5h.01M7 17.5h.01M14 6.5h3m-3 11h3" />
    </>
  ),
};

function FeatureIcon({ name }: { readonly name: FeatureIconName }): React.JSX.Element {
  return (
    <span className={styles.icon} aria-hidden="true">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        {ICON_CONTENT[name]}
      </svg>
    </span>
  );
}

export function HomeKeyFeatures({
  section,
}: { readonly section: FeatureListSection }): React.JSX.Element {
  return (
    <section
      className={styles.section}
      aria-labelledby="home-key-features-title"
      id="key-features"
    >
      <div className={styles.inner}>
        <h2 className={styles.title} id="home-key-features-title">{section.title}</h2>
        <div className={styles.grid}>
          {section.items.map((item) => {
            const icon = FEATURE_ICONS_BY_TITLE[item.title];
            if (icon === undefined) {
              throw new Error(`Missing home feature icon for: ${item.title}`);
            }

            return (
              <article className={styles.feature} key={item.title}>
                <FeatureIcon name={icon} />
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
