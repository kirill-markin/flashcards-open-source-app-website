const backslashPattern = /\\/u;
const unsafeDestinationCharacterPattern = /[\u0000-\u001F\u007F]/u;
const markdownControlCharacterPattern = /[\u0000-\u001F\u007F]+/gu;
const percentEncodedBytePattern = /%([0-9a-f]{2})/giu;

function listDecodedDestinationLayers(
  value: string,
): ReadonlyArray<string> {
  const decodedLayers = [value];
  let decodedValue = value;

  while (true) {
    const nextDecodedValue = decodedValue.replace(
      percentEncodedBytePattern,
      (_encodedByte, hexadecimalByte: string) =>
        String.fromCharCode(Number.parseInt(hexadecimalByte, 16)),
    );

    if (nextDecodedValue === decodedValue) {
      return decodedLayers;
    }

    decodedLayers.push(nextDecodedValue);
    decodedValue = nextDecodedValue;
  }
}

export function assertNoForbiddenUrlInputCharacters(
  value: string,
  context: string,
): void {
  const decodedLayers = listDecodedDestinationLayers(value);

  if (decodedLayers.some((decodedLayer) =>
    unsafeDestinationCharacterPattern.test(decodedLayer)
    || backslashPattern.test(decodedLayer))) {
    throw new Error(
      `${context} contains an unsafe or unsupported Markdown destination or URL value. `
        + "Control characters, backslashes, and their encoded variants are forbidden. "
        + `received=${value}`,
    );
  }
}

export function assertSafeMarkdownDestinationInput(
  value: string,
  context: string,
): void {
  if (value === "") {
    throw new Error(
      `${context} contains an unsafe or unsupported Markdown destination. `
        + `Destinations must not be empty. received=${value}`,
    );
  }

  assertNoForbiddenUrlInputCharacters(value, context);

  try {
    decodeURIComponent(value);
  } catch {
    throw new Error(
      `${context} contains an unsafe or unsupported Markdown destination. `
        + `Percent encoding must be valid. received=${value}`,
    );
  }
}

export function escapeMarkdownText(value: string): string {
  return value
    .replace(markdownControlCharacterPattern, " ")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replace(/([\\`*_\[\]{}()#+.!|~=-])/g, "\\$1");
}

export function canonicalizeHttpsUrl(value: string, context: string): string {
  assertSafeMarkdownDestinationInput(value, context);

  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error(`${context} must be an absolute HTTPS URL. received=${value}`);
  }

  if (url.protocol !== "https:" || url.username !== "" || url.password !== "") {
    throw new Error(`${context} must be an absolute HTTPS URL. received=${value}`);
  }

  return url.toString();
}

export function renderMarkdownLink(
  label: string,
  destination: string,
  context: string,
): string {
  const canonicalDestination = canonicalizeHttpsUrl(destination, context);
  const escapedDestination = canonicalDestination.replaceAll("&", "&amp;");

  return `[${escapeMarkdownText(label)}](<${escapedDestination}>)`;
}
