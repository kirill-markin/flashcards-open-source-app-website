import Image from "next/image";
import type { CSSProperties } from "react";
import { AgentDirectoryLinks } from "./AgentDirectoryLinks";
import { FeatureIcon, FEATURE_ICON_NAMES } from "./FeatureIcon";
import { HomeFlashcardDemo } from "./HomeFlashcardDemo";
import { HomeReviewRhythm } from "./HomeReviewRhythm";
import { HumanPlatformLinks } from "./HumanPlatformLinks";
import { TrackedMcpEndpointCopyField } from "./TrackedMcpEndpointCopyField";
import type { AppWalkthroughSection, FeatureListSection, HeroSection } from "@/lib/content/types";
import { getHomeExperienceCopy } from "@/lib/homeExperienceCopy";
import { getHomeShowcaseImagePath } from "@/lib/homeShowcaseImage";
import type { AppLocale } from "@/lib/i18n";
import type { StoreQrCodes } from "@/lib/storeQrCodes";
import { getUiCopy } from "@/lib/uiCopy";
import { formatHeadingText } from "@/lib/headingText";
import { MarketingHeading, getMarketingHeadingBadge } from "./MarketingHeading";
import styles from "./HomeLanding.module.css";

interface HomeLandingProps {
  readonly locale: AppLocale;
  readonly hero: HeroSection;
  readonly walkthrough: AppWalkthroughSection;
  readonly features: FeatureListSection;
  readonly storeQrCodes: StoreQrCodes;
}

function FlowArrow(): React.JSX.Element {
  return <span className={`${styles.storyBadge} ${styles.flowArrow}`} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M13 5l7 7-7 7" /></svg></span>;
}

function StudyPreview({ locale, index, alt }: { readonly locale: AppLocale; readonly index: number; readonly alt: string }): React.JSX.Element {
  const screenIndices = [3, 0, 1] as const;
  const screenIndex = screenIndices[index];
  if (screenIndex === undefined) throw new Error(`Missing walkthrough screen for step ${index}, locale ${locale}.`);
  const cropStyle: CSSProperties = { insetInlineStart: `${-100 * (120 + screenIndex * 1404) / 1284}%` };
  return (
    <div className={styles.stepPreview}>
      <Image className={styles.stepFrame} src={index === 2 ? "/home/ai-flashcards.png" : "/home/start-learning.png"} alt="" width={582} height={858} sizes="(max-width: 700px) calc(100vw - 48px), 410px" />
      <div className={styles.stepScreen}>
        <Image src={getHomeShowcaseImagePath(locale)} alt={alt} width={7140} height={3018} className={styles.screenImage} style={cropStyle} sizes="(max-width: 700px) 350vw, 1500px" />
      </div>
    </div>
  );
}

export function HomeLanding({ locale, hero, walkthrough, features, storeQrCodes }: HomeLandingProps): React.JSX.Element {
  const copy = getHomeExperienceCopy(locale);
  const uiCopy = getUiCopy(locale);
  if (walkthrough.items.length !== 3 || features.items.length !== 5) throw new Error(`Homepage requires three steps and five supporting features for ${locale}.`);
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-hero-title" id="home-hero">
        <div className={styles.heroCopy}>
          <p className={styles.storyBadge}>{hero.eyebrow} · nibomo</p>
          <h1 id="home-hero-title" className={styles.heroTitle}>{formatHeadingText(copy.heading[0])}<br />{copy.heading[1]}<span>{copy.heading[2]}</span>{formatHeadingText(copy.heading[3])}</h1>
          <div className={styles.heroDescription}>
            <p className={styles.flowLine}><span>{copy.flow[0]}</span><FlowArrow /><span>{copy.flow[1]}</span></p>
            <p className={styles.flowLine}><FlowArrow /><span>{copy.flow[2]}</span></p>
          </div>
          <div className={styles.storeLinks}><HumanPlatformLinks locale={locale} storeQrCodes={storeQrCodes} appearance="hero-badges" /></div>
        </div>
        <HomeFlashcardDemo example={copy.heroCard} controls={copy.controls} />
      </section>
      <div className={styles.agentBand}>
        <aside className={styles.agents} aria-labelledby="home-agents-title" id="home-agents">
          <h2 id="home-agents-title">{formatHeadingText(copy.agents[0])}</h2>
          <p className={styles.agentDescription}>{copy.agents[1]}</p>
          <div className={styles.agentTools}>
            <AgentDirectoryLinks locale={locale} appearance="hero" /><span className={styles.agentOr}>{copy.agents[2]}</span>
            <div className={styles.endpoint}>{hero.agentConnectors.map(connector=><TrackedMcpEndpointCopyField key={connector.link.href} caption={connector.caption} labels={uiCopy.copyCodeField} locale={locale} value={connector.link.href} appearance="compact" />)}</div>
          </div>
        </aside>
      </div>
      <section className={styles.story} aria-labelledby="home-story-title" id="how-nibomo-works">
        <MarketingHeading as="h2" badge={locale === "en" ? "Your routine" : copy.story[0]} className={styles.sectionIntro} id="home-story-title" title={[copy.story[1], copy.story[2]]} />
        <div className={styles.steps}>{walkthrough.items.map((step,index)=><article className={styles.step} key={step.label}>
          <p className={styles.stepLabel}>{step.label}</p><h3>{formatHeadingText(step.titleLines.join(" "))}</h3><p className={styles.stepDescription}>{step.description}</p><StudyPreview locale={locale} index={index} alt={step.imageAlt} />
        </article>)}</div>
      </section>
      <section className={styles.features} aria-labelledby="home-key-features-title" id="key-features">
        <div className={styles.featurePrimary}>
          <MarketingHeading as="h2" badge={getMarketingHeadingBadge(locale, "features")} id="home-key-features-title" title={features.title} />
          <HomeReviewRhythm copy={{ reviewCard: copy.reviewCard, controls: copy.controls, recall: copy.recall, ratings: copy.ratings, outcomes: copy.outcomes }} />
        </div>
        <div className={styles.featureSecondary}><div className={styles.supportingFeatures}>{features.items.map((feature,index)=>{
          const icon = FEATURE_ICON_NAMES[index+1];
          if(icon===undefined) throw new Error(`Missing supporting feature icon ${index}, locale ${locale}.`);
          return <article className={styles.smallFeature} key={feature.title}><span className={styles.icon} aria-hidden="true"><FeatureIcon name={icon} /></span><div><h3>{formatHeadingText(feature.title)}</h3><p>{feature.description}</p></div></article>;
        })}</div></div>
      </section>
    </div>
  );
}
