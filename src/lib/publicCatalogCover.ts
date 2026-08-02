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
