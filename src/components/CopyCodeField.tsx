"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CopyCodeField.module.css";

type CopyState = "idle" | "copied" | "failed";

export interface CopyCodeFieldLabels {
  readonly copied: string;
  readonly copy: string;
  readonly copyFailed: string;
}

interface CopyCodeFieldProps {
  readonly caption?: string;
  readonly labels: CopyCodeFieldLabels;
  readonly onCopySuccess: () => void;
  readonly value: string;
}

export function CopyCodeField({
  caption,
  labels,
  onCopySuccess,
  value,
}: CopyCodeFieldProps): React.JSX.Element {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current !== null) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = (): void => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        onCopySuccess();

        if (resetTimeoutRef.current !== null) {
          window.clearTimeout(resetTimeoutRef.current);
        }

        setCopyState("copied");
        resetTimeoutRef.current = window.setTimeout(() => {
          setCopyState("idle");
          resetTimeoutRef.current = null;
        }, 1600);
      })
      .catch(() => {
        setCopyState("failed");
      });
  };

  return (
    <div className={styles.wrapper}>
      {caption ? <span className={styles.caption}>{caption}</span> : null}
      <div className={styles.box}>
        <pre className={styles.value}>
          <code>{value}</code>
        </pre>
        <button type="button" className={styles.button} onClick={handleCopy}>
          {copyState === "copied"
            ? labels.copied
            : copyState === "failed"
              ? labels.copyFailed
              : labels.copy}
        </button>
      </div>
    </div>
  );
}
