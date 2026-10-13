"use client";

import { useState } from "react";
import type { HomeExperienceCopy } from "@/lib/homeExperienceCopy";
import styles from "./HomeLanding.module.css";

export function HomeFlashcardDemo({ example, controls }: {readonly example: HomeExperienceCopy["heroCard"]; readonly controls: HomeExperienceCopy["controls"]}): React.JSX.Element {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <div className={styles.demo} data-testid="home-flashcard-demo">
      <div className={styles.cardPerspective}>
        <div className={styles.flipper} data-revealed={showAnswer}>
          <div className={styles.cardFront} aria-hidden={showAnswer}>
            <div className={styles.cardMeta}><span>{example[0]}</span><span>01 / 01</span></div>
            <p className={styles.cardLabel}>{controls[0]}</p>
            <p className={styles.cardQuestion}>{example[1]}</p>
            <p className={styles.cardHint}>{example[3]}</p>
          </div>
          <div className={styles.cardBack} id="sample-card-answer" aria-hidden={!showAnswer}>
            <div className={styles.cardMeta}><span>{example[0]}</span><span>01 / 01</span></div>
            <p className={styles.cardLabel}>{controls[1]}</p>
            <p className={styles.cardAnswer}>{example[2]}</p>
            <p className={styles.cardHint}>{example[4]}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={styles.reveal}
        aria-expanded={showAnswer}
        aria-controls="sample-card-answer"
        onClick={() => setShowAnswer((current) => !current)}
      >
        {showAnswer ? controls[4] : controls[2]}
      </button>
    </div>
  );
}
