import { getIntlLocale, type AppLocale } from "./localeConfig";

/**
 * Node ICU and browser ICU can name languages differently, so names are resolved on the
 * server and handed to client components as data to keep hydration stable.
 */
export type PublicCatalogLanguageName = Readonly<{
  tag: string;
  nativeName: string;
  englishName: string;
}>;

function getLanguageDisplayName(displayLocale: string, tag: string): string {
  const name = new Intl.DisplayNames([displayLocale], {
    type: "language",
    fallback: "none",
  }).of(tag);

  if (name === undefined) {
    throw new Error(
      `Cannot name public catalog language ${tag} in ${displayLocale}: Intl.DisplayNames has no name for it. Correct the language tag.`,
    );
  }

  return name;
}

/** Leaves names with their own capitalization, such as "isiZulu", untouched. */
function capitalizeLanguageName(name: string, tag: string): string {
  return name === name.toLocaleLowerCase(tag)
    ? `${name.charAt(0).toLocaleUpperCase(tag)}${name.slice(1)}`
    : name;
}

export function getPublicCatalogLanguageName(tag: string): PublicCatalogLanguageName {
  return {
    tag,
    nativeName: capitalizeLanguageName(getLanguageDisplayName(tag, tag), tag),
    englishName: getLanguageDisplayName("en", tag),
  };
}

export function getPublicCatalogLanguageNames(
  tags: ReadonlyArray<string>,
): ReadonlyArray<PublicCatalogLanguageName> {
  return tags.map(getPublicCatalogLanguageName);
}

export function formatPublicCatalogLanguageLabel(name: PublicCatalogLanguageName): string {
  return name.nativeName === name.englishName
    ? name.nativeName
    : `${name.nativeName} — ${name.englishName}`;
}

/** Uncapitalized because templates place it mid-sentence. */
export function getPublicCatalogLanguageNameInLocale(tag: string, locale: AppLocale): string {
  return getLanguageDisplayName(getIntlLocale(locale), tag);
}
