import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Flashcards.",
  alternates: {
    types: { "text/markdown": "/privacy.md" },
  },
};

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <div className={styles.content}>
        <p>
          <strong>Last updated:</strong> March 2026
        </p>

        <h2>What We Collect</h2>
        <p>
          When you use the cloud beta, we store the flashcards data you create
          (cards, review history, workspace metadata) and your email address for
          authentication. Self-hosted instances do not send data to us unless
          you deploy your own copy that does so.
        </p>

        <h2>How We Use Your Data</h2>
        <p>
          Your data is used solely to provide the service. We do not sell,
          share, or use your data for advertising. Authentication and workspace
          access are isolated by the backend services documented in the public
          repository.
        </p>

        <h2>Data Storage</h2>
        <p>
          Cloud data is stored in AWS RDS (Postgres) in the eu-central-1 region
          with daily automated backups. Data is encrypted at rest and in
          transit.
        </p>

        <h2>Cookies</h2>
        <p>
          We use authentication cookies such as <code>session</code>,
          <code>refresh</code>, and <code>logged_in</code> for the login flow.
          No tracking cookies or third-party analytics are required for the site
          to work.
        </p>

        <h2>Data Deletion</h2>
        <p>
          For self-hosted instances, you control the database directly. The
          hosted beta is still evolving, so operational data removal may be a
          manual support action.
        </p>

        <h2>Open Source</h2>
        <p>
          The entire codebase is open source. You can audit exactly what the
          application does with your data.
        </p>
      </div>
    </div>
  );
}
