"use client";

import {
  useId,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import styles from "./PublicActivitySection.module.css";

type ActivityChartScrollerProps = Readonly<{
  children: ReactNode;
  className: string;
  ariaLabel: string;
  earlierDatesLabel: string;
  laterDatesLabel: string;
  latestDatesLabel: string;
  latestDate: string;
}>;

export function ActivityChartScroller({
  children,
  className,
  ariaLabel,
  earlierDatesLabel,
  laterDatesLabel,
  latestDatesLabel,
  latestDate,
}: ActivityChartScrollerProps): React.JSX.Element {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerId = useId();

  function getScroller(): HTMLDivElement {
    const scroller = scrollerRef.current;

    if (scroller === null) {
      throw new Error("Activity chart scroller must be mounted before navigation.");
    }

    return scroller;
  }

  function showEarlierDates(): void {
    const scroller = getScroller();
    scroller.scrollBy({ left: -scroller.clientWidth * 0.8 });
  }

  function showLaterDates(): void {
    const scroller = getScroller();
    scroller.scrollBy({ left: scroller.clientWidth * 0.8 });
  }

  function showLatestDates(): void {
    const scroller = getScroller();
    scroller.scrollTo({ left: scroller.scrollWidth - scroller.clientWidth });
  }

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;

    if (scroller === null) {
      throw new Error("Activity chart scroller must be mounted before initialization.");
    }

    scroller.scrollLeft = scroller.scrollWidth - scroller.clientWidth;
  }, [latestDate]);

  return (
    <>
      <div
        ref={scrollerRef}
        id={scrollerId}
        className={className}
        dir="ltr"
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
      >
        {children}
      </div>
      <div className={styles.chartNavigation}>
        <button type="button" aria-controls={scrollerId} onClick={showEarlierDates}>
          <span aria-hidden="true">←</span> <span dir="auto">{earlierDatesLabel}</span>
        </button>
        <button type="button" aria-controls={scrollerId} onClick={showLaterDates}>
          <span dir="auto">{laterDatesLabel}</span> <span aria-hidden="true">→</span>
        </button>
        <button type="button" aria-controls={scrollerId} onClick={showLatestDates}>
          <span dir="auto">{latestDatesLabel}</span>
        </button>
      </div>
    </>
  );
}
