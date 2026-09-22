# Localization

The site carries one generic tag per language: a single `es`, and `nb` for Norwegian where the Android app and the stores use `no`. The locale set, its order, and each locale's direction, native and English names, and Open Graph locale live in [src/lib/localeConfig.ts](../src/lib/localeConfig.ts). Read counts from `SUPPORTED_LOCALES`; do not copy the list anywhere else.

## What is translated

- Every locale ships the interface, home, features, pricing, and catalog chrome translated.
- Docs, legal pages, and blog articles exist only where their files exist under `src/content/<locale>/`. [src/data/contentRegistry.ts](../src/data/contentRegistry.ts) derives each locale's translated routes from those files, so the content tree is the source of truth for which locales carry full docs and legal content.
- Locales added in the 49-language expansion do not get docs, legal pages, or blog articles; those fall back to English. This is a permanent decision, not a backlog.
- Blog articles are translated separately and only after an article has proven itself, through the dedicated blog-translation workflow.
- Catalog pages exist for every locale, and every language appears in the catalog filters. Deck content is never translated, and a locale's catalog can be empty.

## Routes

Routes whose content exists only in some locales (docs, privacy, terms, support) prerender through `getTranslatedRouteStaticParams` in [src/app/localizedRouteHelpers.ts](../src/app/localizedRouteHelpers.ts), which keeps only the locales that have the content. Every rendered page asserts that its own locale is available, and `LocaleSwitcher` throws otherwise. An `existsSync` fallback in content resolution does not change route generation: a route that emits every locale will prerender pages the switcher rejects and fail the build.

## Add a locale

1. Add the tag to `SUPPORTED_LOCALES`, `NON_DEFAULT_LOCALES`, and `LOCALE_DEFINITIONS` in [src/lib/localeConfig.ts](../src/lib/localeConfig.ts). Use the generic two-letter tag.
2. Add it to `PRIMARY_LANGUAGE_LOCALES` in [src/lib/browserLocaleMatching.ts](../src/lib/browserLocaleMatching.ts). It is a plain string array, so a search for locale-keyed objects misses it. Chinese is matched by a separate rule and stays out of the array. If browsers send a different primary subtag than the site tag (such as `no` or `nn` for `nb`), add an alias rule next to the Chinese one.
3. Add an entry to every locale-keyed map. Find them by the data, not the type: list files with a line-leading key for an existing non-default locale (`rg -l '^\s+"?zh"?:' src`) and check each against the new tag. `tsx` strips types without checking them, so a missed `Record<AppLocale, …>` passes tests and crashes the production build.
4. Create `src/content/<locale>/pages/` with `home.ts`, `features.ts`, and `pricing.ts`, and register them in [src/content/structuredPageModules.ts](../src/content/structuredPageModules.ts). Add no docs, legal, or blog files.
5. Copy the app's home-page composite to `public/home/app-screens-showcase-<site-tag>.png` and map it in [src/lib/homeShowcaseImage.ts](../src/lib/homeShowcaseImage.ts). The composites come from `scripts/ios/build-ios-marketing-materials.sh` in the app repository and are renamed from the app tag to the site tag; the app repository's [Add a Language](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/add-language.md) owns the mapping.
6. Add the tag to `catalogAudienceLocales` in the app repository's [apps/backend/src/catalog/types.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/catalog/types.ts). Nothing compares the two lists; the only guard is this site's catalog parser, which fails the build when a published deck carries a tag outside `SUPPORTED_LOCALES`. So merge and deploy the site change before the backend change, or a deck published with the new tag breaks the site build.
7. Run `npm run test:catalog`. [src/lib/publicCatalog.test.ts](../src/lib/publicCatalog.test.ts) derives its counts from `SUPPORTED_LOCALES.length`; its unsupported-tag example must stay outside the set, so never use a supported locale there.
8. Run `npm run build` locally or check the Vercel preview; the required check does not render pages.

## Translation rules

- Translate "spaced repetition" per the rule in [AGENTS.md](../AGENTS.md#rules).
- In marketing prose, the shipped Google Play listing for that language governs product naming, such as the AI noun. For in-app wording, the app's iOS strings govern. Where they disagree, the site follows Play.
- In Estonian, Icelandic, Lithuanian, Croatian, Slovenian, and similar languages, the literal "memory card" compound means an SD card. Never use it for flashcards.
- Placeholders are bytes: never glue case endings onto them.
