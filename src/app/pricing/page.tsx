import type { Metadata } from "next";
import { AuthButton } from "@/components/AuthButton";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free self-hosting or hosted cloud beta. Open source, no feature gating.",
  alternates: {
    types: { "text/markdown": "/pricing.md" },
  },
};

export default function PricingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pricing</h1>
      <p className={styles.subtitle}>
        All features are available in every plan. No feature gating.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Self-Hosted</h2>
          <div className={styles.price}>Free</div>
          <ul className={styles.features}>
            <li>Full source code on GitHub</li>
            <li>Local Postgres + auth + backend + web stack</li>
            <li>All current features included</li>
            <li>Your domain, your data, your deployment</li>
            <li>Adapt the stack for your own learning workflow</li>
          </ul>
          <a
            href="https://github.com/kirill-markin/flashcards-open-source-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            View on GitHub
          </a>
        </div>

        <div className={`${styles.card} ${styles.highlighted}`}>
          <h2>Cloud Beta</h2>
          <div className={styles.price}>Free during beta</div>
          <ul className={styles.features}>
            <li>Hosted web app on the project domain</li>
            <li>Email OTP authentication</li>
            <li>Shared-domain browser login flow</li>
            <li>Managed AWS infrastructure</li>
            <li>Early access while the product is still evolving</li>
          </ul>
          <div className={styles.ctaWrapper}>
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
}
