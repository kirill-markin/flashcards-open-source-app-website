"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { normalizeLocaleSearchText } from "@/lib/localeSearch";
import styles from "./LocaleSwitcher.module.css";

interface LocaleSwitcherSearchProps {
  readonly emptyLabel: string;
  readonly placeholder: string;
}

interface LocaleSwitcherElements {
  readonly details: HTMLDetailsElement;
  readonly items: ReadonlyArray<HTMLLIElement>;
  readonly summary: HTMLElement;
  readonly wrapper: HTMLElement;
}

/** Touch keyboards would cover the list, so only these devices get autofocus. */
const AUTOFOCUS_MEDIA_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeToNothing(): () => void {
  return () => undefined;
}

function getSwitcherElements(root: HTMLElement): LocaleSwitcherElements {
  const wrapper = root.parentElement;
  const details = root.closest("details");
  const summary = details?.querySelector<HTMLElement>(":scope > summary");

  if (wrapper === null || details === null || summary === null || summary === undefined) {
    throw new Error("LocaleSwitcherSearch must render inside the LocaleSwitcher popover");
  }

  return {
    details,
    items: Array.from(wrapper.querySelectorAll<HTMLLIElement>("li[data-locale-search]")),
    summary,
    wrapper,
  };
}

function getSearchText(item: HTMLLIElement): string {
  const searchText = item.dataset.localeSearch;

  if (searchText === undefined) {
    throw new Error("Locale switcher entry is missing data-locale-search");
  }

  return searchText;
}

/** Hides non-matching entries and returns whether a non-empty query matched nothing. */
function filterLocaleEntries(elements: LocaleSwitcherElements, query: string): boolean {
  const normalizedQuery = normalizeLocaleSearchText(query.trim());

  // Pin the unfiltered height so the input stays put while entries disappear.
  if (normalizedQuery === "") {
    elements.wrapper.style.minBlockSize = "";
  } else if (elements.wrapper.style.minBlockSize === "") {
    elements.wrapper.style.minBlockSize = `${elements.wrapper.offsetHeight}px`;
  }

  const matchCount = elements.items.filter((item) => {
    const isMatch = getSearchText(item).includes(normalizedQuery);
    item.hidden = !isMatch;
    return isMatch;
  }).length;

  return normalizedQuery !== "" && matchCount === 0;
}

function getVisibleLinks(elements: LocaleSwitcherElements): ReadonlyArray<HTMLAnchorElement> {
  return elements.items
    .filter((item) => !item.hidden)
    .flatMap((item) => Array.from(item.querySelectorAll<HTMLAnchorElement>("a[href]")));
}

function MagnifierIcon(): React.JSX.Element {
  return (
    <svg aria-hidden="true" className={styles.searchIcon} viewBox="0 0 20 20">
      <circle cx="9" cy="9" r="5.5" />
      <path d="m13 13 4.5 4.5" />
    </svg>
  );
}

/**
 * Progressive enhancement over the server-rendered list: renders nothing until
 * hydration, then only toggles `hidden` on the existing entries.
 */
export function LocaleSwitcherSearch({
  emptyLabel,
  placeholder,
}: LocaleSwitcherSearchProps): React.JSX.Element | null {
  const isHydrated = useSyncExternalStore(subscribeToNothing, () => true, () => false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    if (!isHydrated) {
      return undefined;
    }

    const root = rootRef.current;
    const input = inputRef.current;

    if (root === null || input === null) {
      throw new Error("LocaleSwitcherSearch rendered without its input");
    }

    const elements = getSwitcherElements(root);
    const { details, summary } = elements;

    const clearFilter = (): void => {
      input.value = "";
      setIsEmpty(filterLocaleEntries(elements, ""));
    };

    const handleToggle = (): void => {
      if (!details.open) {
        clearFilter();
        return;
      }

      if (window.matchMedia(AUTOFOCUS_MEDIA_QUERY).matches) {
        input.focus();
      }
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      // Safari fires compositionend before the confirming keydown, which then has keyCode 229.
      if (!details.open || event.isComposing || event.keyCode === 229) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();

        if (input.value !== "") {
          clearFilter();
          input.focus();
          return;
        }

        details.open = false;
        summary.focus();
        return;
      }

      const links = getVisibleLinks(elements);

      if (event.target === input) {
        if (event.key === "Enter") {
          event.preventDefault();
          const firstMatch = input.value.trim() === ""
            ? undefined
            : elements.items.find((item) => !item.hidden);

          if (firstMatch === undefined) {
            return;
          }

          const firstMatchLink = firstMatch.querySelector<HTMLAnchorElement>("a[href]");

          // The current language has no link: the reader is already there.
          if (firstMatchLink === null) {
            details.open = false;
            summary.focus();
          } else {
            firstMatchLink.click();
          }
          return;
        }

        if (event.key === "ArrowDown") {
          event.preventDefault();
          links[0]?.focus();
        }
        return;
      }

      if (!(event.target instanceof HTMLAnchorElement)) {
        return;
      }

      const index = links.indexOf(event.target);

      if (index === -1) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        links[index + 1]?.focus();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        (index === 0 ? input : links[index - 1]).focus();
      }
    };

    details.addEventListener("toggle", handleToggle);
    details.addEventListener("keydown", handleKeyDown);

    return () => {
      details.removeEventListener("toggle", handleToggle);
      details.removeEventListener("keydown", handleKeyDown);
    };
  }, [isHydrated]);

  if (!isHydrated) {
    return null;
  }

  return (
    <div ref={rootRef} className={styles.search}>
      <div className={styles.searchField}>
        <MagnifierIcon />
        <input
          ref={inputRef}
          aria-label={placeholder}
          autoComplete="off"
          className={styles.searchInput}
          enterKeyHint="go"
          onChange={(event) => {
            const root = rootRef.current;

            if (root === null) {
              throw new Error("LocaleSwitcherSearch input changed before mounting");
            }

            setIsEmpty(filterLocaleEntries(getSwitcherElements(root), event.currentTarget.value));
          }}
          placeholder={placeholder}
          spellCheck={false}
          type="search"
        />
      </div>
      <p className={styles.searchEmpty} role="status">
        {isEmpty ? emptyLabel : ""}
      </p>
    </div>
  );
}
