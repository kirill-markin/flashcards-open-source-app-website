import Image from "next/image";
import { AuthButton } from "@/components/AuthButton";
import { CopyCodeField } from "@/components/CopyCodeField";
import { HumanPlatformLinks } from "@/components/HumanPlatformLinks";
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
          <div className={styles.humanAccess}>
            <h2 className={styles.hintTitle}>FOR HUMAN</h2>
            <HumanPlatformLinks />
          </div>
          <div className={styles.hintDivider} />
          <div className={styles.agentAccess}>
            <h2 className={styles.hintTitle}>FOR AI AGENT</h2>
            <p className={styles.hintDescription}>{agentHintText}</p>
            <CopyCodeField
              value={`${heroSection.hintText}\n${heroSection.hintLink.href}`}
            />
          </div>
        </div>
      </section>

      <section className={styles.appShowcase} aria-label="App preview">
        <p className={styles.appShowcaseLabel}>APP PREVIEW</p>
        <div className={styles.appShowcaseFrame}>
          <Image
            src="/home/app-screens-showcase.jpg"
            alt="Flashcards app screens showing review, cards, AI, editing, open source, and server setup flows."
            width={8452}
            height={2889}
            priority
            sizes="(max-width: 768px) calc(100vw - 28px), (max-width: 1280px) calc(100vw - 40px), 1240px"
            className={styles.appShowcaseImage}
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
