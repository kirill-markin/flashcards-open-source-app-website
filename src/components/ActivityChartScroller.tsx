"use client";

import {
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";

type ActivityChartScrollerProps = Readonly<{
  children: ReactNode;
  className: string;
  latestDate: string;
}>;

export function ActivityChartScroller({
  children,
  className,
  latestDate,
}: ActivityChartScrollerProps): React.JSX.Element {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;

    if (scroller === null) {
      throw new Error("Activity chart scroller must be mounted before initialization.");
    }

    const maximumScrollOffset = scroller.scrollWidth - scroller.clientWidth;

    if (maximumScrollOffset > 0) {
      scroller.scrollLeft = maximumScrollOffset;
    }
  }, [latestDate]);

  return (
    <div
      ref={scrollerRef}
      className={className}
      dir="ltr"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
