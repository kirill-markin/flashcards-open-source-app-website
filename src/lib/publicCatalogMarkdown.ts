import type { AppLocale } from "./i18n";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  resolveLocaleFromPathname,
  SUPPORTED_LOCALES,
} from "./i18n";
import {
  getPublicCatalogUiCopy,
  interpolatePublicCatalogCardHeading,
} from "./publicCatalogCopy";
import {
  getPublicCatalogDestinationCopy,
  interpolatePublicCatalogCopy,
} from "./publicCatalogDestinationCopy";
import {
  formatPublicCatalogCardCount,
  formatPublicCatalogDate,
  formatPublicCatalogFacetTag,
  formatPublicCatalogNumber,
  formatPublicCatalogPackageCount,
} from "./publicCatalogFormatting";
import {
  getPublicCatalogPackageCardTags,
  getPublicCatalogRelatedPackages,
  type PublicCatalogPackageView,
  type PublicCatalogReadModel,
} from "./publicCatalogReadModel";
import type {
  PublicCatalogAuthor,
  PublicCatalogCollection,
} from "./publicCatalogTypes";
import {
  escapeMarkdownText,
  renderMarkdownLink,
} from "./markdownLinks";
import {
  normalizePublicCatalogCardMarkdownFragment,
  normalizePublicCatalogDescriptionMarkdownFragment,
} from "./publicCatalogMarkdownFragment";
import { getPublicCatalogCardMediaDownloadUrls } from "./publicCatalogCardMedia";
import {
  getPublicCatalogAuthorRoutePathname,
  getPublicCatalogCollectionRoutePathname,
  getPublicCatalogLanguageRoutePathname,
  getPublicCatalogPackageLocalizedPathname,
  getPublicCatalogPackagePageLocales,
  getPublicCatalogRootUrl,
  PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
  PUBLIC_CATALOG_ROUTE_PATHNAME,
  resolvePublicCatalogRouteSegment,
} from "./publicCatalogUrls";

export interface PublicCatalogMarkdownDocument {
  readonly locale: AppLocale;
  readonly markdown: string;
}

function getPagePath(pathname: string): string {
  return pathname.replace(/^\/+/, "").replace(/\/+$/, "");
}

function createMarkdownLink(label: string, pathnameOrUrl: string): string {
  const href = pathnameOrUrl.startsWith("/")
    ? getAbsoluteUrl(pathnameOrUrl)
    : pathnameOrUrl;

  return renderMarkdownLink(label, href, "Public catalog Markdown link destination");
}

function createLocalizedCatalogLink(
  label: string,
  locale: AppLocale,
  routePathname: string,
): string {
  return createMarkdownLink(label, getLocalizedPathname(locale, routePathname));
}

function createLocalizedPackageLink(
  label: string,
  locale: AppLocale,
  packageView: Readonly<{
    packageMetadata: Readonly<{ slug: string }>;
  }>,
): string {
  return createMarkdownLink(
    label,
    getPublicCatalogPackageLocalizedPathname(
      locale,
      packageView.packageMetadata.slug,
    ),
  );
}

function joinLinks(links: ReadonlyArray<string>): string {
  return links.length === 0 ? "—" : links.join(", ");
}

function renderPackageFacts(
  collections: ReadonlyArray<PublicCatalogCollection>,
  locale: AppLocale,
  packageView: PublicCatalogPackageView,
): ReadonlyArray<string> {
  const copy = getPublicCatalogUiCopy(locale);
  const destinationCopy = getPublicCatalogDestinationCopy(locale);
  const { latestVersion, packageMetadata } = packageView;
  const cardTags = getPublicCatalogPackageCardTags(packageView);
  const lines = [
    `- ${copy.cardsLabel}: ${formatPublicCatalogCardCount(locale, latestVersion.cardCount, copy)}`,
    `- ${copy.versionLabel}: ${formatPublicCatalogNumber(locale, latestVersion.versionNumber)}`,
    `- ${copy.publishedLabel}: ${formatPublicCatalogDate(locale, packageMetadata.publishedAt)}`,
    `- ${copy.lastUpdatedLabel}: ${formatPublicCatalogDate(locale, latestVersion.updatedAt)}`,
    `- ${copy.licenseLabel}: ${escapeMarkdownText(latestVersion.license)}`,
  ];

  if (latestVersion.languageTags.length > 0) {
    lines.push(`- ${copy.languagesLabel}: ${joinLinks(latestVersion.languageTags.map((languageTag) =>
      createLocalizedCatalogLink(
        languageTag,
        locale,
        getPublicCatalogLanguageRoutePathname(languageTag),
      )))}`);
  }

  if (cardTags.length > 0) {
    lines.push(`- ${copy.tagsLabel}: ${cardTags.map(escapeMarkdownText).join(", ")}`);
  }

  if (collections.length > 0) {
    lines.push(`- ${destinationCopy.collectionsContainingLabel}: ${joinLinks(collections.map((collection) =>
      createLocalizedCatalogLink(
        collection.title,
        locale,
        getPublicCatalogCollectionRoutePathname(collection.slug),
      )))}`);
  }

  return lines;
}

function renderPackageListItem(
  locale: AppLocale,
  packageView: PublicCatalogPackageView,
): ReadonlyArray<string> {
  const copy = getPublicCatalogUiCopy(locale);
  const { author, latestVersion } = packageView;
  const lines = [
    `- ${createLocalizedPackageLink(
      latestVersion.title,
      locale,
      packageView,
    )}`,
  ];

  if (latestVersion.summary !== "") {
    lines.push(`  - ${escapeMarkdownText(latestVersion.summary)}`);
  }

  lines.push(
    `  - ${copy.byLabel}: ${createLocalizedCatalogLink(
      author.displayName,
      locale,
      getPublicCatalogAuthorRoutePathname(author.slug),
    )}`,
    `  - ${copy.versionLabel}: ${formatPublicCatalogNumber(locale, latestVersion.versionNumber)}`,
    `  - ${copy.cardsLabel}: ${formatPublicCatalogCardCount(locale, latestVersion.cardCount, copy)}`,
    `  - ${copy.licenseLabel}: ${escapeMarkdownText(latestVersion.license)}`,
    `  - ${copy.languagesLabel}: ${joinLinks(latestVersion.languageTags.map((languageTag) =>
      createLocalizedCatalogLink(
        languageTag,
        locale,
        getPublicCatalogLanguageRoutePathname(languageTag),
      )))}`,
  );

  return lines;
}

function renderPackageList(
  locale: AppLocale,
  packages: ReadonlyArray<PublicCatalogPackageView>,
): string {
  const copy = getPublicCatalogUiCopy(locale);

  if (packages.length === 0) {
    return copy.emptyLabel;
  }

  return packages.flatMap((packageView) => renderPackageListItem(locale, packageView)).join("\n");
}

function renderOrderedPackageList(
  locale: AppLocale,
  packages: ReadonlyArray<PublicCatalogPackageView>,
): string {
  const copy = getPublicCatalogUiCopy(locale);

  if (packages.length === 0) {
    return copy.emptyLabel;
  }

  return packages.flatMap((packageView, index) => {
    const [firstLine, ...remainingLines] = renderPackageListItem(locale, packageView);

    if (firstLine === undefined) {
      throw new Error(
        `Cannot render ordered catalog package ${packageView.packageMetadata.packageId}: list item is empty.`,
      );
    }

    const marker = `${index + 1}.`;
    const continuationIndent = " ".repeat(marker.length + 1);

    return [
      `${marker} ${firstLine.slice(2)}`,
      ...remainingLines.map((line) => `${continuationIndent}${line.slice(2)}`),
    ];
  }).join("\n");
}

function renderCatalogRoot(
  catalog: PublicCatalogReadModel,
  locale: AppLocale,
): string {
  const copy = getPublicCatalogUiCopy(locale);
  const destinationCopy = getPublicCatalogDestinationCopy(locale);

  return [
    `# ${escapeMarkdownText(copy.title)}`,
    "",
    escapeMarkdownText(copy.intro),
    "",
    `- ${createLocalizedCatalogLink(
      destinationCopy.authorsTitle,
      locale,
      PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
    )}`,
    `- ${createLocalizedCatalogLink(
      destinationCopy.collectionsTitle,
      locale,
      PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
    )}`,
    "",
    `## ${escapeMarkdownText(destinationCopy.allPackagesNavigationLabel)}`,
    "",
    renderPackageList(locale, catalog.packages),
  ].join("\n");
}

function renderPackageDetail(
  catalog: PublicCatalogReadModel,
  locale: AppLocale,
  packageView: PublicCatalogPackageView,
): string {
  const copy = getPublicCatalogUiCopy(locale);
  const { author, latestVersion, packageMetadata } = packageView;
  const collections = catalog.collectionsByPackageId.get(packageMetadata.packageId) ?? [];
  const relatedPackages = getPublicCatalogRelatedPackages(
    catalog,
    packageMetadata.packageId,
  );
  const lines = [
    `# ${escapeMarkdownText(latestVersion.title)}`,
    "",
  ];

  if (latestVersion.summary !== "") {
    lines.push(escapeMarkdownText(latestVersion.summary), "");
  }

  lines.push(
    `${escapeMarkdownText(copy.byLabel)} ${createLocalizedCatalogLink(
      author.displayName,
      locale,
      getPublicCatalogAuthorRoutePathname(author.slug),
    )}`,
    "",
    createMarkdownLink(copy.installLabel, latestVersion.installUrl),
    "",
    escapeMarkdownText(copy.installHelper),
    "",
    `## ${escapeMarkdownText(copy.deckDetailsHeading)}`,
    "",
    ...renderPackageFacts(collections, locale, packageView),
  );

  if (latestVersion.contentWarning !== null) {
    lines.push(
      "",
      `> **${escapeMarkdownText(copy.contentWarningLabel)}:** ${escapeMarkdownText(latestVersion.contentWarning)}`,
    );
  }

  if (latestVersion.description.trim() !== "") {
    lines.push(
      "",
      `## ${escapeMarkdownText(copy.descriptionHeading)}`,
      "",
      normalizePublicCatalogDescriptionMarkdownFragment(
        latestVersion.description,
        locale,
        `Public catalog package ${packageMetadata.packageId} description`,
      ),
    );
  }

  if (relatedPackages.length > 0) {
    lines.push(
      "",
      `## ${escapeMarkdownText(copy.similarDecksHeading)}`,
      "",
      ...relatedPackages.map((relatedPackage) => `- ${createLocalizedPackageLink(
        relatedPackage.latestVersion.title,
        locale,
        relatedPackage,
      )}`),
    );
  }

  lines.push("", `## ${escapeMarkdownText(copy.cardPreviewsHeading)}`, "");

  if (packageView.cards.length === 0) {
    lines.push(escapeMarkdownText(copy.noCardPreviewsLabel));
  } else {
    packageView.cards.forEach((card, index) => {
      const mediaDownloadUrls = getPublicCatalogCardMediaDownloadUrls(
        card,
        packageView.mediaAssets,
      );
      const cardContext =
        `Public catalog package version ${latestVersion.packageVersionId} card ${card.packageCardId}`;
      const cardHeading = interpolatePublicCatalogCardHeading(
        copy,
        formatPublicCatalogNumber(locale, index + 1),
      );

      lines.push(
        `### ${escapeMarkdownText(cardHeading)}`,
        "",
        `**${escapeMarkdownText(copy.cardFrontLabel)}**`,
        "",
        normalizePublicCatalogCardMarkdownFragment(
          card.frontText,
          locale,
          mediaDownloadUrls,
          `${cardContext} frontText`,
        ),
        "",
        `**${escapeMarkdownText(copy.cardBackLabel)}**`,
        "",
        normalizePublicCatalogCardMarkdownFragment(
          card.backText,
          locale,
          mediaDownloadUrls,
          `${cardContext} backText`,
        ),
      );

      lines.push("");
    });
  }

  return lines.join("\n").trim();
}

function renderAuthorsIndex(
  catalog: PublicCatalogReadModel,
  locale: AppLocale,
): string {
  const copy = getPublicCatalogDestinationCopy(locale);
  const lines = [
    `# ${escapeMarkdownText(copy.authorsTitle)}`,
    "",
    escapeMarkdownText(copy.authorsIntro),
    "",
  ];

  for (const author of catalog.authorBySlug.values()) {
    const packages = catalog.packagesByAuthorId.get(author.authorId) ?? [];

    lines.push(
      `- ${createLocalizedCatalogLink(
        author.displayName,
        locale,
        getPublicCatalogAuthorRoutePathname(author.slug),
      )} — ${formatPublicCatalogPackageCount(locale, packages.length, copy)}`,
    );

    if (author.bio !== null && author.bio.trim() !== "") {
      lines.push(`  - ${escapeMarkdownText(author.bio)}`);
    }
  }

  return lines.join("\n");
}

function renderAuthorDetail(
  catalog: PublicCatalogReadModel,
  locale: AppLocale,
  author: PublicCatalogAuthor,
): string {
  const copy = getPublicCatalogDestinationCopy(locale);
  const packages = catalog.packagesByAuthorId.get(author.authorId) ?? [];
  const packagesHeading = interpolatePublicCatalogCopy(
    copy.authorPackagesHeadingTemplate,
    "name",
    author.displayName,
  );
  const lines = [`# ${escapeMarkdownText(author.displayName)}`];

  if (author.bio !== null && author.bio.trim() !== "") {
    lines.push("", escapeMarkdownText(author.bio));
  }

  if (author.websiteUrl !== null) {
    lines.push("", createMarkdownLink(copy.authorWebsiteLabel, author.websiteUrl));
  }

  lines.push(
    "",
    `## ${escapeMarkdownText(packagesHeading)}`,
    "",
    renderPackageList(locale, packages),
  );

  return lines.join("\n");
}

function renderCollectionsIndex(
  catalog: PublicCatalogReadModel,
  locale: AppLocale,
): string {
  const copy = getPublicCatalogDestinationCopy(locale);
  const lines = [
    `# ${escapeMarkdownText(copy.collectionsTitle)}`,
    "",
    escapeMarkdownText(copy.collectionsIntro),
    "",
  ];

  for (const collection of catalog.collectionBySlug.values()) {
    const packages = catalog.packagesByCollectionId.get(collection.collectionId) ?? [];

    lines.push(
      `- ${createLocalizedCatalogLink(
        collection.title,
        locale,
        getPublicCatalogCollectionRoutePathname(collection.slug),
      )} — ${formatPublicCatalogPackageCount(locale, packages.length, copy)}`,
    );

    if (collection.summary !== "") {
      lines.push(`  - ${escapeMarkdownText(collection.summary)}`);
    }
  }

  return lines.join("\n");
}

function renderCollectionDetail(
  catalog: PublicCatalogReadModel,
  locale: AppLocale,
  collection: PublicCatalogCollection,
): string {
  const catalogCopy = getPublicCatalogUiCopy(locale);
  const copy = getPublicCatalogDestinationCopy(locale);
  const packages = catalog.packagesByCollectionId.get(collection.collectionId) ?? [];
  const lines = [`# ${escapeMarkdownText(collection.title)}`, ""];

  if (collection.summary !== "") {
    lines.push(escapeMarkdownText(collection.summary), "");
  }

  lines.push(
    `- ${catalogCopy.publishedLabel}: ${formatPublicCatalogDate(locale, collection.publishedAt)}`,
    `- ${catalogCopy.lastUpdatedLabel}: ${formatPublicCatalogDate(locale, collection.updatedAt)}`,
    `- ${catalogCopy.languagesLabel}: ${joinLinks(collection.languageTags.map((languageTag) =>
      createLocalizedCatalogLink(
        languageTag,
        locale,
        getPublicCatalogLanguageRoutePathname(languageTag),
      )))}`,
  );

  if (collection.description.trim() !== "") {
    lines.push(
      "",
      `## ${escapeMarkdownText(copy.collectionAboutHeading)}`,
      "",
      normalizePublicCatalogDescriptionMarkdownFragment(
        collection.description,
        locale,
        `Public catalog collection ${collection.collectionId} description`,
      ),
    );
  }

  lines.push(
    "",
    `## ${escapeMarkdownText(copy.collectionPackagesHeading)}`,
    "",
    renderOrderedPackageList(locale, packages),
  );

  return lines.join("\n");
}

function renderFacet(
  locale: AppLocale,
  packages: ReadonlyArray<PublicCatalogPackageView>,
  tag: string,
): string {
  const copy = getPublicCatalogDestinationCopy(locale);
  const displayTag = formatPublicCatalogFacetTag(tag);
  const title = interpolatePublicCatalogCopy(
    copy.languageTitleTemplate,
    "tag",
    displayTag,
  );
  const intro = interpolatePublicCatalogCopy(
    copy.languageIntroTemplate,
    "tag",
    displayTag,
  );

  return [
    `# ${escapeMarkdownText(title)}`,
    "",
    escapeMarkdownText(intro),
    "",
    `## ${escapeMarkdownText(copy.facetPackagesHeading)}`,
    "",
    renderPackageList(locale, packages),
  ].join("\n");
}

function listCatalogRoutePathnames(
  catalog: PublicCatalogReadModel,
): ReadonlyArray<string> {
  return [
    PUBLIC_CATALOG_ROUTE_PATHNAME,
    PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
    ...[...catalog.authorBySlug.values()].map((author) =>
      getPublicCatalogAuthorRoutePathname(author.slug)),
    PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
    ...[...catalog.collectionBySlug.values()].map((collection) =>
      getPublicCatalogCollectionRoutePathname(collection.slug)),
    ...catalog.languageTags.map(getPublicCatalogLanguageRoutePathname),
  ];
}

export function listPublicCatalogMarkdownPagePaths(
  catalog: PublicCatalogReadModel,
): ReadonlyArray<string> {
  const routePathnames = listCatalogRoutePathnames(catalog);
  const packagePagePaths = catalog.packages.flatMap((packageView) =>
    getPublicCatalogPackagePageLocales().map((locale) =>
      getPagePath(getPublicCatalogPackageLocalizedPathname(
        locale,
        packageView.packageMetadata.slug,
      ))),
  );

  return [
    ...SUPPORTED_LOCALES.flatMap((locale) =>
      routePathnames.map((routePathname) =>
        getPagePath(getLocalizedPathname(locale, routePathname)))),
    ...packagePagePaths,
  ];
}

export function renderPublicCatalogMarkdownDocument(
  pagePath: string,
  catalog: PublicCatalogReadModel,
): PublicCatalogMarkdownDocument | null {
  const pathname = pagePath === "" ? "/" : `/${pagePath}/`;
  const { locale, routePathname } = resolveLocaleFromPathname(pathname);

  if (routePathname === PUBLIC_CATALOG_ROUTE_PATHNAME) {
    return { locale, markdown: renderCatalogRoot(catalog, locale) };
  }

  if (routePathname === PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME) {
    return { locale, markdown: renderAuthorsIndex(catalog, locale) };
  }

  if (routePathname === PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME) {
    return { locale, markdown: renderCollectionsIndex(catalog, locale) };
  }

  const routeMatch = routePathname.match(
    /^\/catalog\/(packages|authors|collections|languages)\/([^/]+)\/$/,
  );

  if (routeMatch === null) {
    return null;
  }

  const [, routeKind, routeSegment] = routeMatch;

  if (routeKind === undefined || routeSegment === undefined) {
    throw new Error(`Cannot render public catalog Markdown route: ${routePathname}`);
  }

  if (routeKind === "packages") {
    const slug = resolvePublicCatalogRouteSegment(
      routeSegment,
      [...catalog.packageBySlug.keys()],
    );
    const packageView = slug === undefined ? undefined : catalog.packageBySlug.get(slug);

    if (packageView === undefined) {
      return null;
    }

    return {
      locale,
      markdown: renderPackageDetail(catalog, locale, packageView),
    };
  }

  if (routeKind === "authors") {
    const slug = resolvePublicCatalogRouteSegment(
      routeSegment,
      [...catalog.authorBySlug.keys()],
    );
    const author = slug === undefined ? undefined : catalog.authorBySlug.get(slug);

    return author === undefined
      ? null
      : { locale, markdown: renderAuthorDetail(catalog, locale, author) };
  }

  if (routeKind === "collections") {
    const slug = resolvePublicCatalogRouteSegment(
      routeSegment,
      [...catalog.collectionBySlug.keys()],
    );
    const collection = slug === undefined ? undefined : catalog.collectionBySlug.get(slug);

    return collection === undefined
      ? null
      : { locale, markdown: renderCollectionDetail(catalog, locale, collection) };
  }

  if (routeKind === "languages") {
    const tag = resolvePublicCatalogRouteSegment(routeSegment, catalog.languageTags);

    return tag === undefined
      ? null
      : {
          locale,
          markdown: renderFacet(
            locale,
            catalog.packagesByLanguageTag.get(tag) ?? [],
            tag,
          ),
        };
  }

  return null;
}

export function renderPublicCatalogLlmsSection(
  catalog: PublicCatalogReadModel,
): string {
  const lines = [
    `- ${createMarkdownLink("Public catalog", getPublicCatalogRootUrl("en"))}`,
    `- ${createLocalizedCatalogLink("Catalog authors", "en", PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME)}`,
    `- ${createLocalizedCatalogLink("Catalog collections", "en", PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME)}`,
  ];

  catalog.packages.forEach((packageView) => {
    lines.push(`- ${createLocalizedPackageLink(
      packageView.latestVersion.title,
      "en",
      packageView,
    )}: ${escapeMarkdownText(packageView.latestVersion.summary)}`);
  });
  for (const author of catalog.authorBySlug.values()) {
    lines.push(`- ${createLocalizedCatalogLink(
      `Author: ${author.displayName}`,
      "en",
      getPublicCatalogAuthorRoutePathname(author.slug),
    )}`);
  }
  for (const collection of catalog.collectionBySlug.values()) {
    lines.push(`- ${createLocalizedCatalogLink(
      `Collection: ${collection.title}`,
      "en",
      getPublicCatalogCollectionRoutePathname(collection.slug),
    )}: ${escapeMarkdownText(collection.summary)}`);
  }
  catalog.languageTags.forEach((languageTag) => {
    lines.push(`- ${createLocalizedCatalogLink(
      `Audience language: ${languageTag}`,
      "en",
      getPublicCatalogLanguageRoutePathname(languageTag),
    )}`);
  });
  return lines.join("\n");
}
