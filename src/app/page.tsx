import { AuthButton } from "@/components/AuthButton";
import { CopyCodeField } from "@/components/CopyCodeField";
import { readPageContent } from "@/lib/content/readPageContent";
import styles from "./page.module.css";

const pageContent = readPageContent("home");

function getHeroSection() {
  const section = pageContent.sections[0];

  if (section?.type !== "hero") {
    throw new Error("Invalid home page content structure");
  }

  return section;
}

function getFeatureSection() {
  const section = pageContent.sections[1];

  if (section?.type !== "feature_list") {
    throw new Error("Invalid home page content structure");
  }

  return section;
}

const heroSection = getHeroSection();
const featureSection = getFeatureSection();
const agentHintText =
  "Share this discovery URL with your AI agent. It can sign up, create your account, and manage your Flashcards workspace for you.";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMain}>
          <h1 className={styles.title}>
            {heroSection.titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < heroSection.titleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <p className={styles.subtitle}>{heroSection.subtitle}</p>
          <div className={styles.cta}>
            <AuthButton />
          </div>
        </div>
        <div className={styles.heroHint}>
          <p className={styles.hintDescription}>{agentHintText}</p>
          <CopyCodeField
            value={`${heroSection.hintText}\n${heroSection.hintLink.href}`}
          />
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <div className={styles.featureGrid}>
            {featureSection.items.map((item) => (
              <div key={item.title} className={styles.featureCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
