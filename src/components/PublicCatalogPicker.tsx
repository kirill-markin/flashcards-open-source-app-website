"use client";
import { autoUpdate, flip, offset, shift, size, useFloating } from "@floating-ui/react-dom";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import { normalizePublicCatalogSearchText } from "@/lib/publicCatalogBrowse";
import styles from "./PublicCatalogPicker.module.css";

const compactPickerMediaQuery = "(max-width: 768px)";
const keyboardFocusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "summary",
  "[tabindex]:not([tabindex='-1'])",
].join(",");
const pickerOpenEventName = "public-catalog-picker-open";

export interface PublicCatalogPickerOption<Value extends string> {
  readonly label: string;
  readonly value: Value;
}

interface SearchablePickerCopy {
  readonly emptySearchResultsLabel: string;
  readonly searchLabel: string;
  readonly searchPlaceholder: string;
}

interface SinglePickerProps<Value extends string> {
  readonly ariaLabel: string;
  readonly closeLabel: string;
  readonly onValueChange: (value: Value) => void;
  readonly options: ReadonlyArray<PublicCatalogPickerOption<Value>>;
  readonly value: Value;
}

export interface PublicCatalogSearchableSinglePickerProps<Value extends string>
  extends SearchablePickerCopy, SinglePickerProps<Value> {}

export interface PublicCatalogSearchableMultiPickerProps<Value extends string>
  extends SearchablePickerCopy {
  readonly ariaLabel: string;
  readonly doneLabel: string;
  readonly emptySelectionLabel: string;
  readonly formatSelection: (
    selectedOptions: ReadonlyArray<PublicCatalogPickerOption<Value>>,
  ) => string;
  readonly onValuesChange: (values: ReadonlyArray<Value>) => void;
  readonly options: ReadonlyArray<PublicCatalogPickerOption<Value>>;
  readonly values: ReadonlyArray<Value>;
}

export interface PublicCatalogCompactSinglePickerProps<Value extends string>
  extends SinglePickerProps<Value> {}

type InternalPickerProps<Value extends string> =
  | (PublicCatalogSearchableSinglePickerProps<Value> & {
    readonly variant: "searchable-single";
  })
  | (PublicCatalogSearchableMultiPickerProps<Value> & {
    readonly variant: "searchable-multiple";
  })
  | (PublicCatalogCompactSinglePickerProps<Value> & {
    readonly variant: "compact-single";
  });

function subscribeToCompactPickerViewport(
  onChange: () => void,
  onBreakpointChange: () => void,
): () => void {
  const mediaQuery = window.matchMedia(compactPickerMediaQuery);
  const handleChange = (): void => {
    onBreakpointChange();
    onChange();
  };
  mediaQuery.addEventListener("change", handleChange);
  return () => mediaQuery.removeEventListener("change", handleChange);
}

function getCompactPickerViewportSnapshot(): boolean {
  return window.matchMedia(compactPickerMediaQuery).matches;
}

function getServerCompactPickerViewportSnapshot(): boolean {
  return false;
}

function validatePickerOptions<Value extends string>(
  options: ReadonlyArray<PublicCatalogPickerOption<Value>>,
): void {
  const values = new Set<Value>();
  options.forEach((option) => {
    if (values.has(option.value)) {
      throw new Error(`Public catalog picker option values must be unique: ${option.value}`);
    }
    values.add(option.value);
  });
}

function getPickerOption<Value extends string>(
  options: ReadonlyArray<PublicCatalogPickerOption<Value>>,
  value: Value,
): PublicCatalogPickerOption<Value> {
  const option = options.find((candidate) => candidate.value === value);
  if (option === undefined) {
    throw new Error(`Public catalog picker value has no matching option: ${value}`);
  }
  return option;
}

function getSelectedPickerOptions<Value extends string>(
  options: ReadonlyArray<PublicCatalogPickerOption<Value>>,
  values: ReadonlyArray<Value>,
): ReadonlyArray<PublicCatalogPickerOption<Value>> {
  const uniqueValues = new Set(values);
  if (uniqueValues.size !== values.length) {
    throw new Error("Public catalog picker selected values must be unique.");
  }
  return values.map((value) => getPickerOption(options, value));
}

function getMultipleSelectionSummary<Value extends string>(
  selectedOptions: ReadonlyArray<PublicCatalogPickerOption<Value>>,
  emptySelectionLabel: string,
  formatSelection: (
    options: ReadonlyArray<PublicCatalogPickerOption<Value>>,
  ) => string,
): string {
  return selectedOptions.length === 0
    ? emptySelectionLabel
    : formatSelection(selectedOptions);
}

function filterPickerOptions<Value extends string>(
  options: ReadonlyArray<PublicCatalogPickerOption<Value>>,
  query: string,
): ReadonlyArray<PublicCatalogPickerOption<Value>> {
  const normalizedQuery = normalizePublicCatalogSearchText(query);
  if (normalizedQuery === "") {
    return options;
  }
  return options.filter((option) => {
    const normalizedLabel = normalizePublicCatalogSearchText(option.label);
    const normalizedValue = normalizePublicCatalogSearchText(option.value);

    return normalizedLabel.includes(normalizedQuery)
      || normalizedValue.includes(normalizedQuery);
  });
}

function resolveActivePickerOption<Value extends string>(
  options: ReadonlyArray<PublicCatalogPickerOption<Value>>,
  activeValue: Value | null,
  selectedValues: ReadonlyArray<Value>,
): PublicCatalogPickerOption<Value> | null {
  const activeOption = activeValue === null
    ? undefined
    : options.find((option) => option.value === activeValue);
  if (activeOption !== undefined) {
    return activeOption;
  }
  return options.find((option) => selectedValues.includes(option.value))
    ?? options[0]
    ?? null;
}

function getAdjacentPickerOption<Value extends string>(
  options: ReadonlyArray<PublicCatalogPickerOption<Value>>,
  activeValue: Value | null,
  direction: -1 | 1,
): PublicCatalogPickerOption<Value> | null {
  if (options.length === 0) {
    return null;
  }
  const activeIndex = options.findIndex((option) => option.value === activeValue);
  const startIndex = activeIndex === -1 ? (direction === 1 ? -1 : 0) : activeIndex;
  const nextIndex = (startIndex + direction + options.length) % options.length;
  return options[nextIndex] ?? null;
}

function getBoundaryPickerOption<Value extends string>(
  options: ReadonlyArray<PublicCatalogPickerOption<Value>>,
  boundary: "first" | "last",
): PublicCatalogPickerOption<Value> | null {
  const index = boundary === "first" ? 0 : options.length - 1;
  return options[index] ?? null;
}

function togglePickerValue<Value extends string>(
  values: ReadonlyArray<Value>,
  value: Value,
): ReadonlyArray<Value> {
  return values.includes(value)
    ? values.filter((candidate) => candidate !== value)
    : [...values, value];
}

function getPickerOptionId(listboxId: string, value: string): string {
  return `${listboxId}-option-${encodeURIComponent(value)}`;
}

function getAdjacentKeyboardFocusTarget(
  trigger: HTMLButtonElement,
  overlay: HTMLElement,
  direction: -1 | 1,
): HTMLElement {
  const focusTargets = Array.from(
    document.querySelectorAll<HTMLElement>(keyboardFocusableSelector),
  ).filter((element) =>
    element.tabIndex >= 0
      && overlay.contains(element) === false
      && element.getClientRects().length > 0
      && window.getComputedStyle(element).visibility !== "hidden");
  const positiveTabIndexTargets = focusTargets
    .filter((element) => element.tabIndex > 0)
    .sort((left, right) => left.tabIndex - right.tabIndex);
  const orderedFocusTargets = [
    ...positiveTabIndexTargets,
    ...focusTargets.filter((element) => element.tabIndex === 0),
  ];
  const triggerIndex = orderedFocusTargets.indexOf(trigger);

  if (triggerIndex === -1) {
    throw new Error("Public catalog picker trigger is missing from the keyboard focus order.");
  }

  const targetIndex = (
    triggerIndex + direction + orderedFocusTargets.length
  ) % orderedFocusTargets.length;
  const target = orderedFocusTargets[targetIndex];

  if (target === undefined) {
    throw new Error("Public catalog picker cannot resolve the next keyboard focus target.");
  }

  return target;
}

function PickerChevron(): React.JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function PickerCheckmark(): React.JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
    </svg>
  );
}

function PublicCatalogPicker<Value extends string>(
  props: InternalPickerProps<Value>,
): React.JSX.Element {
  validatePickerOptions(props.options);
  const pickerId = useId();
  const listboxId = `${pickerId}-listbox`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [activeValue, setActiveValue] = useState<Value | null>(null);
  const closePicker = useCallback((returnFocus: boolean): void => {
    setIsOpen(false);
    setQuery("");
    setActiveValue(null);
    if (returnFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
    }
  }, []);
  const subscribeToViewport = useCallback((onChange: () => void): (() => void) =>
    subscribeToCompactPickerViewport(
      onChange,
      () => {
        if (isOpen) {
          closePicker(true);
        }
      },
    ), [closePicker, isOpen]);
  const isCompactViewport = useSyncExternalStore(
    subscribeToViewport,
    getCompactPickerViewportSnapshot,
    getServerCompactPickerViewportSnapshot,
  );
  const floatingMiddleware = useMemo(() => [
    offset(8),
    flip({ padding: 16 }),
    shift({ padding: 16 }),
    size({
      padding: 16,
      apply({ availableHeight, availableWidth, elements, rects }): void {
        const availableInlineSize = Math.max(0, availableWidth);

        elements.floating.style.setProperty(
          "--picker-available-height",
          `${Math.max(0, availableHeight)}px`,
        );
        elements.floating.style.setProperty(
          "--picker-available-width",
          `${availableInlineSize}px`,
        );
        elements.floating.style.setProperty(
          "--picker-reference-width",
          `${Math.min(rects.reference.width, availableInlineSize)}px`,
        );
      },
    }),
  ], []);
  const { floatingStyles, refs } = useFloating({
    middleware: floatingMiddleware,
    placement: "bottom-start",
    strategy: "fixed",
    whileElementsMounted: autoUpdate,
  });
  const selectedValues = props.variant === "searchable-multiple"
    ? props.values
    : [props.value];
  const selectedOptions = getSelectedPickerOptions(props.options, selectedValues);
  const triggerSummary = props.variant === "searchable-multiple"
    ? getMultipleSelectionSummary(
      selectedOptions,
      props.emptySelectionLabel,
      props.formatSelection,
    )
    : selectedOptions[0]?.label ?? "";
  const filteredOptions = useMemo(
    () => props.variant === "compact-single"
      ? props.options
      : filterPickerOptions(props.options, query),
    [props.options, props.variant, query],
  );
  const activeOption = resolveActivePickerOption(
    filteredOptions,
    activeValue,
    selectedValues,
  );
  const activeOptionId = activeOption === null
    ? undefined
    : getPickerOptionId(listboxId, activeOption.value);
  const setTriggerReference = useCallback((node: HTMLButtonElement | null): void => {
    triggerRef.current = node;
    refs.setReference(node);
  }, [refs]);
  const openPicker = (): void => {
    document.dispatchEvent(new CustomEvent<string>(pickerOpenEventName, {
      detail: pickerId,
    }));
    setQuery("");
    setActiveValue(null);
    setIsOpen(true);
  };
  const selectOption = (option: PublicCatalogPickerOption<Value>): void => {
    if (props.variant === "searchable-multiple") {
      props.onValuesChange(togglePickerValue(props.values, option.value));
      setActiveValue(option.value);
      return;
    }
    props.onValueChange(option.value);
    closePicker(true);
  };
  const handleOverlayKeyDown = (event: ReactKeyboardEvent<HTMLElement>): void => {
    if (event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      closePicker(true);
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      const trigger = triggerRef.current;
      const overlay = dialogRef.current ?? refs.floating.current;

      if (trigger === null || overlay === null) {
        throw new Error("Public catalog picker cannot move focus: open elements are missing.");
      }

      const focusTarget = getAdjacentKeyboardFocusTarget(
        trigger,
        overlay,
        event.shiftKey ? -1 : 1,
      );

      if (dialogRef.current?.open === true) {
        dialogRef.current.close();
      }

      closePicker(false);
      window.requestAnimationFrame(() => focusTarget.focus());
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const nextOption = getAdjacentPickerOption(
        filteredOptions,
        activeOption?.value ?? null,
        event.key === "ArrowDown" ? 1 : -1,
      );
      setActiveValue(nextOption?.value ?? null);
      return;
    }
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const nextOption = getBoundaryPickerOption(
        filteredOptions,
        event.key === "Home" ? "first" : "last",
      );
      setActiveValue(nextOption?.value ?? null);
      return;
    }
    const selectsActiveOption = event.key === "Enter"
      || (event.key === " " && props.variant === "compact-single");
    if (selectsActiveOption && activeOption !== null) {
      event.preventDefault();
      selectOption(activeOption);
    }
  };
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleOtherPickerOpen = (event: Event): void => {
      const openEvent = event as CustomEvent<string>;
      if (openEvent.detail !== pickerId) {
        closePicker(false);
      }
    };
    document.addEventListener(pickerOpenEventName, handleOtherPickerOpen);
    return () => document.removeEventListener(pickerOpenEventName, handleOtherPickerOpen);
  }, [closePicker, isOpen, pickerId]);
  useEffect(() => {
    if (!isOpen || isCompactViewport) {
      return;
    }
    const handleOutsidePointerDown = (event: PointerEvent): void => {
      const target = event.target;
      if (!(target instanceof Node)) {
        throw new Error("Public catalog picker pointer event target must be a DOM node.");
      }
      if (
        triggerRef.current?.contains(target) === true
        || refs.floating.current?.contains(target) === true
      ) {
        return;
      }
      closePicker(false);
    };
    document.addEventListener("pointerdown", handleOutsidePointerDown, true);
    return () => document.removeEventListener("pointerdown", handleOutsidePointerDown, true);
  }, [closePicker, isCompactViewport, isOpen, refs.floating]);
  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }
    const focusTarget = props.variant === "compact-single"
      ? listboxRef.current
      : searchInputRef.current;
    if (focusTarget === null) {
      throw new Error("Public catalog picker focus target is missing from the open overlay.");
    }
    if (isCompactViewport) {
      const dialog = dialogRef.current;
      if (dialog === null) {
        throw new Error("Public catalog picker compact dialog is missing from the open overlay.");
      }
      dialog.showModal();
      focusTarget.focus({ preventScroll: true });
      return () => {
        if (dialog.open) {
          dialog.close();
        }
      };
    }
    focusTarget.focus({ preventScroll: true });
  }, [isCompactViewport, isOpen, props.variant]);
  useEffect(() => {
    if (!isOpen || activeOptionId === undefined) {
      return;
    }
    const optionElement = document.getElementById(activeOptionId);
    if (optionElement === null) {
      throw new Error(`Public catalog picker active option element is missing: ${activeOptionId}`);
    }
    optionElement.scrollIntoView({ block: "nearest" });
  }, [activeOptionId, isOpen]);
  const panelHeaderClassName = props.variant === "searchable-multiple"
    ? styles.panelHeader
    : `${styles.panelHeader} ${styles.singlePanelHeader}`;
  const panelActionLabel = props.variant === "searchable-multiple"
    ? props.doneLabel
    : props.closeLabel;
  const panel = (
    <div className={styles.panel}>
      <div className={panelHeaderClassName}>
        <strong>{props.ariaLabel}</strong>
        <button type="button" onClick={() => closePicker(true)}>
          {panelActionLabel}
        </button>
      </div>
      {props.variant !== "compact-single" ? (
        <div className={styles.searchField}>
          <input
            ref={searchInputRef}
            aria-activedescendant={activeOptionId}
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-expanded="true"
            aria-label={props.searchLabel}
            aria-haspopup="listbox"
            autoComplete="off"
            onChange={(event) => {
              setQuery(event.currentTarget.value);
              setActiveValue(null);
            }}
            onKeyDown={handleOverlayKeyDown}
            placeholder={props.searchPlaceholder}
            role="combobox"
            type="search"
            value={query}
          />
        </div>
      ) : null}
      <div
        ref={listboxRef}
        aria-activedescendant={props.variant === "compact-single" ? activeOptionId : undefined}
        aria-label={props.ariaLabel}
        aria-multiselectable={props.variant === "searchable-multiple" ? true : undefined}
        className={styles.listbox}
        id={listboxId}
        onKeyDown={handleOverlayKeyDown}
        role="listbox"
        tabIndex={props.variant === "compact-single" ? 0 : -1}
      >
        {filteredOptions.map((option) => {
          const isSelected = selectedValues.includes(option.value);
          return (
            <div
              aria-selected={isSelected}
              className={styles.option}
              data-active={activeOption?.value === option.value ? "true" : undefined}
              data-selected={isSelected ? "true" : undefined}
              id={getPickerOptionId(listboxId, option.value)}
              key={option.value}
              onClick={() => selectOption(option)}
              onPointerDown={(event) => {
                if (event.pointerType === "mouse") {
                  event.preventDefault();
                }
              }}
              onPointerMove={() => setActiveValue(option.value)}
              role="option"
            >
              <span>{option.label}</span>
              <span className={styles.checkmark} data-visible={isSelected ? "true" : undefined}>
                <PickerCheckmark />
              </span>
            </div>
          );
        })}
        {filteredOptions.length === 0 && props.variant !== "compact-single" ? (
          <p className={styles.emptyState} role="status">
            {props.emptySearchResultsLabel}
          </p>
        ) : null}
      </div>
    </div>
  );
  const overlay = isCompactViewport ? (
    <dialog
      ref={dialogRef}
      aria-label={props.ariaLabel}
      className={styles.dialog}
      onCancel={(event) => {
        event.preventDefault();
        closePicker(true);
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closePicker(true);
        }
      }}
    >
      {panel}
    </dialog>
  ) : (
    <div
      ref={refs.setFloating}
      aria-label={props.ariaLabel}
      className={styles.popover}
      style={floatingStyles as CSSProperties}
    >
      {panel}
    </div>
  );
  return (
    <>
      <button
        ref={setTriggerReference}
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${props.ariaLabel}: ${triggerSummary}`}
        className={props.variant === "compact-single"
          ? `${styles.trigger} ${styles.compactTrigger}`
          : styles.trigger}
        onClick={() => isOpen ? closePicker(false) : openPicker()}
        onKeyDown={(event) => {
          if (!isOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
            event.preventDefault();
            openPicker();
            const nextOption = getBoundaryPickerOption(
              props.options,
              event.key === "ArrowDown" ? "first" : "last",
            );
            setActiveValue(nextOption?.value ?? null);
          }
        }}
        type="button"
      >
        <span className={styles.triggerSummary}>{triggerSummary}</span>
        <span className={styles.chevron} data-open={isOpen ? "true" : undefined}>
          <PickerChevron />
        </span>
      </button>
      {isOpen ? createPortal(overlay, document.body) : null}
    </>
  );
}

export function PublicCatalogSearchableSinglePicker<Value extends string>(
  props: PublicCatalogSearchableSinglePickerProps<Value>,
): React.JSX.Element {
  return <PublicCatalogPicker {...props} variant="searchable-single" />;
}

export function PublicCatalogSearchableMultiPicker<Value extends string>(
  props: PublicCatalogSearchableMultiPickerProps<Value>,
): React.JSX.Element {
  return <PublicCatalogPicker {...props} variant="searchable-multiple" />;
}

export function PublicCatalogCompactSinglePicker<Value extends string>(
  props: PublicCatalogCompactSinglePickerProps<Value>,
): React.JSX.Element {
  return <PublicCatalogPicker {...props} variant="compact-single" />;
}
