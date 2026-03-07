import type { Metadata } from "next";
import { FEATURES } from "@/data/features";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Review queue, card creation, passwordless auth, self-hosting, and the offline-first roadmap.",
  alternates: {
    types: { "text/markdown": "/features.md" },
  },
};

export default function FeaturesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Features</h1>
      <p className={styles.subtitle}>
        A focused flashcards stack: the current web MVP, the public API surface,
        and the infrastructure already in place for self-hosting and future
        mobile clients.
      </p>
      <div className={styles.grid}>
        {FEATURES.map((feature) => (
          <div key={feature.title} className={styles.card}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
