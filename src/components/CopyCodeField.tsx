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
  readonly appearance?: "default" | "compact";
}

export function CopyCodeField({
  caption,
  labels,
  onCopySuccess,
  value,
  appearance = "default",
}: CopyCodeFieldProps): React.JSX.Element {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimeoutRef = useRef<number | null>(null);
  const copyLabel = copyState === "copied"
    ? labels.copied
    : copyState === "failed"
      ? labels.copyFailed
      : labels.copy;

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
    <div className={appearance === "compact" ? `${styles.wrapper} ${styles.compact}` : styles.wrapper}>
      {caption && appearance === "default" ? <span className={styles.caption}>{caption}</span> : null}
      <div className={styles.box}>
        <pre className={styles.value}>
          <code>{value}</code>
        </pre>
        <button type="button" className={styles.button} onClick={handleCopy} aria-label={copyLabel}>
          {appearance === "compact" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {copyState === "copied" ? <path d="m5 12 4 4L19 6" /> : copyState === "failed" ? (
                <><circle cx="12" cy="12" r="8" /><path d="M12 7v6m0 4h.01" /></>
              ) : (
                <><rect x="8" y="3" width="11" height="15" rx="2" /><path d="M15 18v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" /></>
              )}
            </svg>
          ) : copyLabel}
        </button>
      </div>
      {appearance === "compact" ? <span className={styles.copyStatus} role="status">{copyState === "idle" ? "" : copyLabel}</span> : null}
    </div>
  );
}
