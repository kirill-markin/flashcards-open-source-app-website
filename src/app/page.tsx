import Image from "next/image";
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
const appShowcaseTitle = "Inside the app";
const appShowcaseDescription =
  "A full-width preview of review, search, AI chat, editing, open-source, and server setup screens from the native client.";

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
          <h2 className={styles.hintTitle}>FOR AI AGENT</h2>
          <p className={styles.hintDescription}>{agentHintText}</p>
          <CopyCodeField
            value={`${heroSection.hintText}\n${heroSection.hintLink.href}`}
          />
        </div>
      </section>

      <section className={styles.appShowcase} aria-labelledby="app-showcase-title">
        <div className={styles.appShowcaseHeader}>
          <div className={styles.appShowcaseCopy}>
            <p className={styles.appShowcaseEyebrow}>IN THE APP</p>
            <h2 id="app-showcase-title" className={styles.appShowcaseTitle}>
              {appShowcaseTitle}
            </h2>
            <p className={styles.appShowcaseDescription}>{appShowcaseDescription}</p>
          </div>
        </div>
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
