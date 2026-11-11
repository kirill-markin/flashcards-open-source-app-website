import {
  getIntlLocale,
  getLocaleEnglishName,
  getLocaleNativeName,
  type AppLocale,
} from "./localeConfig";
import {
  getPublicCatalogAudienceTag,
  isPublicCatalogAudienceTag,
  type PublicCatalogAudienceTag,
} from "./publicCatalogAudience";

/** Labels use the site language menu's names so the catalog and the menu name a language identically. */
export type PublicCatalogLanguageName = Readonly<{
  tag: PublicCatalogAudienceTag;
  nativeName: string;
  englishName: string;
}>;

function assertSupportedLanguageTag(tag: string): PublicCatalogAudienceTag {
  if (isPublicCatalogAudienceTag(tag) === false) {
    throw new Error(
      `Cannot name public catalog language ${tag}: it is not a supported catalog audience tag. Correct the language tag.`,
    );
  }

  return tag;
}

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

export function getPublicCatalogLanguageName(tag: string): PublicCatalogLanguageName {
  const supportedTag = assertSupportedLanguageTag(tag);

  return {
    tag: supportedTag,
    nativeName: getLocaleNativeName(supportedTag),
    englishName: getLocaleEnglishName(supportedTag),
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

/** Non-English page locales get the uncapitalized Intl name because their templates place it mid-sentence. */
export function getPublicCatalogLanguageNameInLocale(tag: string, locale: AppLocale): string {
  const supportedTag = assertSupportedLanguageTag(tag);

  return getPublicCatalogAudienceTag(locale) === "en"
    ? getLocaleEnglishName(supportedTag)
    : getLanguageDisplayName(getIntlLocale(locale), supportedTag);
}
