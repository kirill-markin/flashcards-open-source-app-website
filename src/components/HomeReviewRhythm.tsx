"use client";

import { useState, type CSSProperties } from "react";
import type { HomeExperienceCopy } from "@/lib/homeExperienceCopy";
import styles from "./HomeLanding.module.css";

type RecallRating = "Again" | "Hard" | "Good" | "Easy";

const RECALL_RATINGS: ReadonlyArray<RecallRating> = ["Again", "Hard", "Good", "Easy"];
interface RecallOutcome {
  readonly position: number;
  readonly index: 0 | 1 | 2 | 3;
}

const RECALL_OUTCOMES: Readonly<Record<RecallRating, RecallOutcome>> = {
  Again: { position: 8, index: 0 },
  Hard: { position: 30, index: 1 },
  Good: { position: 58, index: 2 },
  Easy: { position: 85, index: 3 },
};

export function HomeReviewRhythm({copy}: {readonly copy: Pick<HomeExperienceCopy,"reviewCard"|"controls"|"recall"|"ratings"|"outcomes">}): React.JSX.Element {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [rating, setRating] = useState<RecallRating | null>(null);
  const outcome = rating === null ? null : RECALL_OUTCOMES[rating];
  const timingStyle: CSSProperties & { "--review-position": string } = {
    "--review-position": outcome === null ? "0%" : `${outcome.position}%`,
  };

  return (
    <article className={styles.leadFeature} aria-label={copy.recall[0]} data-testid="home-review-demo">
      <div className={`${styles.cardPerspective} ${styles.rhythmPerspective}`}>
        <div className={`${styles.flipper} ${styles.rhythmFlipper}`} data-revealed={showAnswer}>
          <div className={`${styles.cardFront} ${styles.rhythmFace}`} aria-hidden={showAnswer} inert={showAnswer}>
            <span className={styles.rhythmSubject}>{copy.reviewCard[0]}</span>
            <p className={styles.rhythmLabel}>{copy.controls[0]}</p>
            <p className={styles.rhythmQuestion}>{copy.reviewCard[1]}</p>
          </div>
          <div
            id="rhythm-example-answer"
            className={`${styles.cardBack} ${styles.rhythmFace}`}
            aria-hidden={!showAnswer}
            inert={!showAnswer}
          >
            <span className={styles.rhythmSubject}>{copy.reviewCard[0]}</span>
            <p className={styles.rhythmLabel}>{copy.controls[1]}</p>
            <p className={styles.rhythmQuestion}>{copy.reviewCard[2]}</p>
          </div>
        </div>
        <button
          type="button"
          className={styles.rhythmReveal}
          aria-expanded={showAnswer}
          aria-controls="rhythm-example-answer"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? copy.controls[3] : copy.controls[2]}
        </button>
      </div>
      <div className={styles.rhythmControls}>
        <p className={styles.rhythmPrompt} id="rhythm-rating-label">{copy.recall[0]}</p>
        <div className={styles.rhythmRatings} role="group" aria-labelledby="rhythm-rating-label">
          {RECALL_RATINGS.map((value, index) => (
            <button
              key={value}
              type="button"
              aria-pressed={rating === value}
              onClick={() => setRating(value)}
            >
              {copy.ratings[index]}
            </button>
          ))}
        </div>
        <div className={styles.rhythmTiming} style={timingStyle}>
          <div className={styles.rhythmAxis} aria-hidden="true"><span>{copy.recall[1]}</span><span>{copy.recall[2]}</span></div>
          <div className={styles.rhythmTrack} aria-hidden="true">
            <span className={styles.rhythmFill} />
            {outcome !== null && <span className={styles.rhythmMarker} />}
          </div>
          <div className={styles.rhythmFeedback}>
            <p className={styles.rhythmOutcome} role="status" aria-atomic="true">{outcome === null ? null : copy.outcomes[outcome.index]}</p>
            {copy.outcomes.map(description=><span key={description} className={`${styles.rhythmOutcome} ${styles.rhythmOutcomeMeasure}`} aria-hidden="true">{description}</span>)}
          </div>
        </div>
      </div>
    </article>
  );
}
