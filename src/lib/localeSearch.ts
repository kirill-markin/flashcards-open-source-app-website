/**
 * Shared by the server-rendered search index and the client query so both
 * sides fold case and diacritics identically: `cestina` matches `Čeština`.
 * Lowercasing runs first because it can itself emit combining marks (`İ`).
 */
export function normalizeLocaleSearchText(value: string): string {
  return value.toLowerCase().normalize("NFD").replace(/\p{Mark}/gu, "");
}
