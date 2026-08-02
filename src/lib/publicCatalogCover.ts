export function getPublicCatalogCoverInitial(title: string): string {
  const [initial] = Array.from(title.trim());

  if (initial === undefined) {
    throw new Error("Public catalog package title must not be empty.");
  }

  return initial.toUpperCase();
}

export function getPublicCatalogCoverAccessibleLabel(
  title: string,
  coverAltText: string | null,
  placeholderLabel: string,
): string {
  if (coverAltText === null || coverAltText.trim() === "") {
    return `${title}: ${placeholderLabel}`;
  }

  return `${title}: ${coverAltText.trim()}. ${placeholderLabel}`;
}
