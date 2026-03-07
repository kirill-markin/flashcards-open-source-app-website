import { AuthButton } from "@/components/AuthButton";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.title}>
          Create cards.
          <br />
          Review on time.
          <br />
          Own your data.
        </h1>
        <p className={styles.subtitle}>
          Open-source flashcards app with spaced repetition, a fast review
          queue, passwordless auth, and a self-hosted AWS/Postgres stack. Use
          the web MVP today and keep the door open for the iOS offline-first
          client.
        </p>
        <div className={styles.cta}>
          <AuthButton />
        </div>
        <p className={styles.hint}>
          Free and open source.{" "}
          <a
            href="https://github.com/kirill-markin/flashcards-open-source-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </div>

      <section className={styles.features}>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Spaced Repetition</h3>
            <p>
              Review cards with a built-in queue and a simple rating flow. The
              backend updates scheduling fields on every review submission.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Fast Web MVP</h3>
            <p>
              Create cards, browse your collection, and work through due items
              in the browser with a minimal interface.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Passwordless Auth</h3>
            <p>
              Email OTP via Cognito with shared-domain cookies across the auth
              and app subdomains.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Self-Hosted</h3>
            <p>
              Run Postgres locally, start auth, backend, and web separately,
              and keep the full stack under your control.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>API Surface</h3>
            <p>
              Use the existing `/v1/me`, `/v1/cards`, `/v1/review-queue`, and
              `/v1/reviews` endpoints from your own clients and scripts.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Offline-First Direction</h3>
            <p>
              The repository is structured around an offline-first roadmap with
              Postgres on the backend and iOS as the next client priority.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
