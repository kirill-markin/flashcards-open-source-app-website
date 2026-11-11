# Localization

The locale set, its order, and each locale's direction, native and English names, and Open Graph locale live in [src/lib/localeConfig.ts](../src/lib/localeConfig.ts). Read counts from `SUPPORTED_LOCALES`; do not copy the list anywhere else.

## What is translated

- Every locale ships the interface, home, pricing, and catalog chrome translated.
- Every locale ships the Privacy, Terms, and Support pages and its required docs. [src/lib/localizedContentCompleteness.test.ts](../src/lib/localizedContentCompleteness.test.ts) checks the required files, including the smaller set for locales in `CORE_DOCS_LOCALES`.
- [src/data/contentRegistry.ts](../src/data/contentRegistry.ts) derives each locale's translated routes from the files under `src/content/<locale>/`, so the content tree is the source of truth for which routes a locale carries.
- Blog articles exist only where their files exist. They are translated separately and only after an article has proven itself, through the dedicated blog-translation workflow.
- Catalog pages exist for every interface locale. Their default filter uses the audience tag defined in [src/lib/publicCatalogAudience.ts](../src/lib/publicCatalogAudience.ts). Deck content is never translated, and a locale's catalog can be empty.

## Routes

File-backed routes (docs, privacy, terms, support) prerender through `getTranslatedRouteStaticParams` in [src/app/localizedRouteHelpers.ts](../src/app/localizedRouteHelpers.ts), which keeps only the locales that have the content. Every rendered page asserts that its own locale is available, and `LocaleSwitcher` throws otherwise. An `existsSync` fallback in content resolution does not change route generation: a route that emits every locale will prerender pages the switcher rejects and fail the build.

## Add a locale

1. Add the lowercase route tag to `SUPPORTED_LOCALES`, `NON_DEFAULT_LOCALES`, and `LOCALE_DEFINITIONS` in [src/lib/localeConfig.ts](../src/lib/localeConfig.ts). Check [browser locale matching](../src/lib/browserLocaleMatching.ts) if browsers use a different tag.
2. Add an entry to every locale-keyed map. Find them by the data, not the type: list files with a line-leading key for an existing non-default locale (`rg -l '^\s+"?zh"?:' src`) and check each against the new tag. `tsx` strips types without checking them, so a missed `Record<AppLocale, …>` passes tests and crashes the production build.
3. Create `src/content/<locale>/pages/` with `home.ts` and `pricing.ts`, and register them in [src/content/structuredPageModules.ts](../src/content/structuredPageModules.ts). Translate the required docs into `src/content/<locale>/docs/` and the legal pages into `src/content/<locale>/pages/{privacy,support,terms}/index.md`. Add no blog files.
4. Copy the app's home-page composite to `public/home/app-screens-showcase-<site-tag>.png` and map it in [src/lib/homeShowcaseImage.ts](../src/lib/homeShowcaseImage.ts). The composites come from `scripts/ios/build-ios-marketing-materials.sh` in the app repository and are renamed from the app tag to the site tag; the app repository's [Add a Language](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/add-language.md) owns the mapping. Run `npm run generate:home-images` to extract the four localized screens into the existing gradient and phone-frame templates, preserving their transparent corners. Reference `/home/<step>-<site-tag>.png` in the locale's walkthrough content; English uses the original `/home/<step>.png` templates. These paths also supply the Markdown images.
5. For a regional interface alias, map it to its base audience in [src/lib/publicCatalogAudience.ts](../src/lib/publicCatalogAudience.ts) and keep the alias out of backend audience tags. For a new audience tag, deploy site support before adding the tag to `catalogAudienceLocales` in the app repository's [apps/backend/src/catalog/types.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/catalog/types.ts). The site build rejects published decks or collections whose tags are outside `PUBLIC_CATALOG_AUDIENCE_TAGS`.
6. Run `npm run test:catalog`. Keep the unsupported-tag example in [src/lib/publicCatalog.test.ts](../src/lib/publicCatalog.test.ts) outside the audience tag set.
7. Run `npm run build` locally or check the Vercel preview; the required check does not render pages.

## Translation rules

The homepage headings, example flashcards, recall controls, and compact agent hint are localized in [src/lib/homeExperienceCopy.ts](../src/lib/homeExperienceCopy.ts). Every supported locale has a complete entry; there is no English fallback. [src/lib/content/homeExperienceContent.ts](../src/lib/content/homeExperienceContent.ts) composes this copy with the locale's existing home content for both HTML and generated Markdown. The walkthrough and supporting feature descriptions remain in `src/content/<locale>/pages/home.ts`.

- Translate "spaced repetition" per the rule in [AGENTS.md](../AGENTS.md#rules).
- Terms and Privacy end with a translated Language section stating that the English version prevails.
- In marketing prose, the shipped Google Play listing for that language governs product naming, such as the AI noun. For in-app wording, the app's iOS strings govern. Where they disagree, the site follows Play.
- In Estonian, Icelandic, Lithuanian, Croatian, Slovenian, and similar languages, the literal "memory card" compound means an SD card. Never use it for flashcards.
- Placeholders are bytes: never glue case endings onto them.
