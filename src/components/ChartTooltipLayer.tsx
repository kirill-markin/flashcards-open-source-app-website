"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import styles from "./PublicActivitySection.module.css";

export type ChartTooltipTarget = Readonly<{
  key: string;
  lines: ReadonlyArray<string>;
  leftRatio: number;
  widthRatio: number;
  topPx: number;
  heightPx: number;
}>;

type ChartTooltipLayerProps = Readonly<{
  targets: ReadonlyArray<ChartTooltipTarget>;
}>;

type TooltipAnchorRect = Readonly<{
  blockEnd: number;
  blockStart: number;
  centerX: number;
}>;

type ActiveTooltip = Readonly<{
  anchor: TooltipAnchorRect;
  lines: ReadonlyArray<string>;
}>;

type TooltipCardPosition = Readonly<{
  left: number;
  top: number;
}>;

const tooltipViewportMargin = 8;
const tooltipAnchorGap = 10;

// The card is portalled to document.body and positioned in viewport pixels, so
// it escapes every ancestor that clips the chart card.
function resolveTooltipCardPosition(
  anchor: TooltipAnchorRect,
  cardWidth: number,
  cardHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): TooltipCardPosition {
  const topAboveAnchor = anchor.blockStart - cardHeight - tooltipAnchorGap;
  const preferredTop = topAboveAnchor >= tooltipViewportMargin
    ? topAboveAnchor
    : anchor.blockEnd + tooltipAnchorGap;
  const maxLeft = viewportWidth - cardWidth - tooltipViewportMargin;
  const maxTop = viewportHeight - cardHeight - tooltipViewportMargin;
  const centeredLeft = anchor.centerX - (cardWidth / 2);

  return {
    left: Math.min(maxLeft, Math.max(tooltipViewportMargin, centeredLeft)),
    top: Math.min(maxTop, Math.max(tooltipViewportMargin, preferredTop)),
  };
}

export function ChartTooltipLayer({
  targets,
}: ChartTooltipLayerProps): React.JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);
  const activeHitRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<ActiveTooltip | null>(null);
  const [cardPosition, setCardPosition] = useState<TooltipCardPosition | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hideTooltip = useCallback((): void => {
    activeHitRef.current = null;
    setActiveTooltip(null);
    setCardPosition(null);
  }, []);

  const showTooltip = useCallback((
    event: ReactPointerEvent<HTMLDivElement>,
    lines: ReadonlyArray<string>,
  ): void => {
    const hitRect = event.currentTarget.getBoundingClientRect();

    activeHitRef.current = event.currentTarget;
    setActiveTooltip({
      anchor: {
        blockEnd: hitRect.bottom,
        blockStart: hitRect.top,
        centerX: hitRect.left + (hitRect.width / 2),
      },
      lines,
    });
    setCardPosition(null);
  }, []);

  useEffect(() => {
    if (activeTooltip === null) {
      return;
    }

    // Touch and pen pointers get `pointerleave` right after `pointerup`, so the
    // card is dismissed by the next interaction outside the active hit target
    // instead. Capture runs before the React handler that opens the next card,
    // which also closes the other chart's card when that one is tapped.
    const handleOutsidePointerDown = (event: PointerEvent): void => {
      const activeHit = activeHitRef.current;
      const eventTarget = event.target;

      if (
        activeHit !== null
        && eventTarget instanceof Node
        && activeHit.contains(eventTarget)
      ) {
        return;
      }

      hideTooltip();
    };

    document.addEventListener("pointerdown", handleOutsidePointerDown, true);
    window.addEventListener("scroll", hideTooltip, true);
    window.addEventListener("resize", hideTooltip);

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointerDown, true);
      window.removeEventListener("scroll", hideTooltip, true);
      window.removeEventListener("resize", hideTooltip);
    };
  }, [activeTooltip, hideTooltip]);

  useLayoutEffect(() => {
    if (activeTooltip === null) {
      return;
    }

    const card = cardRef.current;

    if (card === null) {
      throw new Error("Chart tooltip card must be mounted before it is measured.");
    }

    const cardRect = card.getBoundingClientRect();

    setCardPosition(resolveTooltipCardPosition(
      activeTooltip.anchor,
      cardRect.width,
      cardRect.height,
      window.innerWidth,
      window.innerHeight,
    ));
  }, [activeTooltip]);

  // `dir="ltr"` keeps the logical inset properties aligned with the viewport
  // pixels measured above; the content wrapper restores the locale direction.
  const card = activeTooltip === null ? null : (
    <div
      ref={cardRef}
      className={styles.tooltipCard}
      dir="ltr"
      style={{
        insetBlockStart: `${cardPosition === null ? 0 : cardPosition.top}px`,
        insetInlineStart: `${cardPosition === null ? 0 : cardPosition.left}px`,
        opacity: cardPosition === null ? 0 : 1,
      }}
      aria-hidden="true"
    >
      <div className={styles.tooltipCardContent} dir="auto">
        {activeTooltip.lines.map((line, index) => (
          <span
            key={`tooltip-line-${index}`}
            className={index === 0 ? styles.tooltipCardDate : styles.tooltipCardLine}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.tooltipLayer}>
      {targets.map((target) => (
        <div
          key={target.key}
          className={styles.tooltipHit}
          title={target.lines.join(" — ")}
          style={{
            blockSize: `${target.heightPx}px`,
            inlineSize: `${target.widthRatio * 100}%`,
            insetBlockStart: `${target.topPx}px`,
            insetInlineStart: `${target.leftRatio * 100}%`,
          }}
          onPointerEnter={(event) => showTooltip(event, target.lines)}
          onPointerDown={(event) => showTooltip(event, target.lines)}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") {
              hideTooltip();
            }
          }}
        />
      ))}
      {isMounted && card !== null ? createPortal(card, document.body) : null}
    </div>
  );
}
