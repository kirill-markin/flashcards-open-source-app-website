import type { AppLocale } from "./i18n";
import {
  getAbsoluteUrl,
  getLocalizedPathname,
  resolveLocaleFromPathname,
  SUPPORTED_LOCALES,
} from "./i18n";
import { getPublicCatalogUiCopy } from "./publicCatalogCopy";
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
import type {
  PublicCatalogPackageView,
  PublicCatalogReadModel,
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
  getPublicCatalogPackageRoutePathname,
  getPublicCatalogTopicRoutePathname,
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
  const { author, latestVersion, packageMetadata } = packageView;

  return [
    `- ${copy.byLabel}: ${createLocalizedCatalogLink(
      author.displayName,
      locale,
      getPublicCatalogAuthorRoutePathname(author.slug),
    )}`,
    `- ${copy.versionLabel}: ${formatPublicCatalogNumber(locale, latestVersion.versionNumber)}`,
    `- ${copy.cardsLabel}: ${formatPublicCatalogCardCount(locale, latestVersion.cardCount, copy)}`,
    `- ${copy.licenseLabel}: ${escapeMarkdownText(latestVersion.license)}`,
    `- ${copy.publishedLabel}: ${formatPublicCatalogDate(locale, packageMetadata.publishedAt)}`,
    `- ${copy.languagesLabel}: ${joinLinks(latestVersion.languageTags.map((languageTag) =>
      createLocalizedCatalogLink(
        languageTag,
        locale,
        getPublicCatalogLanguageRoutePathname(languageTag),
      )))}`,
    `- ${copy.topicsLabel}: ${joinLinks(latestVersion.topicTags.map((topicTag) =>
      createLocalizedCatalogLink(
        topicTag,
        locale,
        getPublicCatalogTopicRoutePathname(topicTag),
      )))}`,
    `- ${destinationCopy.collectionsContainingLabel}: ${joinLinks(collections.map((collection) =>
      createLocalizedCatalogLink(
        collection.title,
        locale,
        getPublicCatalogCollectionRoutePathname(collection.slug),
      )))}`,
  ];
}

function renderPackageListItem(
  locale: AppLocale,
  packageView: PublicCatalogPackageView,
): ReadonlyArray<string> {
  const copy = getPublicCatalogUiCopy(locale);
  const { author, latestVersion, packageMetadata } = packageView;
  const lines = [
    `- ${createLocalizedCatalogLink(
      latestVersion.title,
      locale,
      getPublicCatalogPackageRoutePathname(packageMetadata.slug),
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
    `  - ${copy.topicsLabel}: ${joinLinks(latestVersion.topicTags.map((topicTag) =>
      createLocalizedCatalogLink(
        topicTag,
        locale,
        getPublicCatalogTopicRoutePathname(topicTag),
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
    `> **${escapeMarkdownText(copy.constructionNoticeLabel)}**`,
    ">",
    `> **${escapeMarkdownText(copy.constructionNoticeTitle)}**`,
    ">",
    `> ${escapeMarkdownText(copy.constructionNoticeBody)}`,
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
  const { latestVersion, packageMetadata } = packageView;
  const collections = catalog.collectionsByPackageId.get(packageMetadata.packageId) ?? [];
  const lines = [
    `# ${escapeMarkdownText(latestVersion.title)}`,
    "",
  ];

  if (latestVersion.summary !== "") {
    lines.push(escapeMarkdownText(latestVersion.summary), "");
  }

  lines.push(
    ...renderPackageFacts(collections, locale, packageView),
    "",
    createMarkdownLink(copy.installLabel, latestVersion.installUrl),
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

  lines.push("", `## ${escapeMarkdownText(copy.cardPreviewsHeading)}`, "");

  if (packageView.cards.length === 0) {
    lines.push(escapeMarkdownText(copy.noCardPreviewsLabel));
  } else {
    packageView.cards.forEach((card, index) => {
      const mediaDownloadUrls = getPublicCatalogCardMediaDownloadUrls(
        card,
        packageView.mediaAssets,
      );

      lines.push(
        `### ${formatPublicCatalogNumber(locale, index + 1)}`,
        "",
        `**${escapeMarkdownText(copy.cardFrontLabel)}**`,
        "",
        normalizePublicCatalogCardMarkdownFragment(
          card.frontText,
          locale,
          mediaDownloadUrls,
          `Public catalog card ${card.packageCardId} frontText`,
        ),
        "",
        `**${escapeMarkdownText(copy.cardBackLabel)}**`,
        "",
        normalizePublicCatalogCardMarkdownFragment(
          card.backText,
          locale,
          mediaDownloadUrls,
          `Public catalog card ${card.packageCardId} backText`,
        ),
      );

      if (card.tags.length > 0) {
        lines.push(
          "",
          `**${escapeMarkdownText(copy.tagsLabel)}:** ${card.tags.map(escapeMarkdownText).join(", ")}`,
        );
      }

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
    `- ${catalogCopy.languagesLabel}: ${joinLinks(collection.languageTags.map((languageTag) =>
      createLocalizedCatalogLink(
        languageTag,
        locale,
        getPublicCatalogLanguageRoutePathname(languageTag),
      )))}`,
    `- ${catalogCopy.topicsLabel}: ${joinLinks(collection.topicTags.map((topicTag) =>
      createLocalizedCatalogLink(
        topicTag,
        locale,
        getPublicCatalogTopicRoutePathname(topicTag),
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
  facetKind: "language" | "topic",
  locale: AppLocale,
  packages: ReadonlyArray<PublicCatalogPackageView>,
  tag: string,
): string {
  const copy = getPublicCatalogDestinationCopy(locale);
  const displayTag = formatPublicCatalogFacetTag(tag);
  const title = interpolatePublicCatalogCopy(
    facetKind === "language" ? copy.languageTitleTemplate : copy.topicTitleTemplate,
    "tag",
    displayTag,
  );
  const intro = interpolatePublicCatalogCopy(
    facetKind === "language" ? copy.languageIntroTemplate : copy.topicIntroTemplate,
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
    ...catalog.packages.map((packageView) =>
      getPublicCatalogPackageRoutePathname(packageView.packageMetadata.slug)),
    PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME,
    ...[...catalog.authorBySlug.values()].map((author) =>
      getPublicCatalogAuthorRoutePathname(author.slug)),
    PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME,
    ...[...catalog.collectionBySlug.values()].map((collection) =>
      getPublicCatalogCollectionRoutePathname(collection.slug)),
    ...catalog.languageTags.map(getPublicCatalogLanguageRoutePathname),
    ...catalog.topicTags.map(getPublicCatalogTopicRoutePathname),
  ];
}

export function listPublicCatalogMarkdownPagePaths(
  catalog: PublicCatalogReadModel,
): ReadonlyArray<string> {
  const routePathnames = listCatalogRoutePathnames(catalog);

  return SUPPORTED_LOCALES.flatMap((locale) =>
    routePathnames.map((routePathname) =>
      getPagePath(getLocalizedPathname(locale, routePathname))));
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
    /^\/catalog\/(packages|authors|collections|languages|topics)\/([^/]+)\/$/,
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

    return packageView === undefined
      ? null
      : { locale, markdown: renderPackageDetail(catalog, locale, packageView) };
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
            "language",
            locale,
            catalog.packagesByLanguageTag.get(tag) ?? [],
            tag,
          ),
        };
  }

  const tag = resolvePublicCatalogRouteSegment(routeSegment, catalog.topicTags);

  return tag === undefined
    ? null
    : {
        locale,
        markdown: renderFacet(
          "topic",
          locale,
          catalog.packagesByTopicTag.get(tag) ?? [],
          tag,
        ),
      };
}

export function renderPublicCatalogLlmsSection(
  catalog: PublicCatalogReadModel,
): string {
  const lines = [
    `- ${createLocalizedCatalogLink("Public catalog", "en", PUBLIC_CATALOG_ROUTE_PATHNAME)}`,
    `- ${createLocalizedCatalogLink("Catalog authors", "en", PUBLIC_CATALOG_AUTHORS_ROUTE_PATHNAME)}`,
    `- ${createLocalizedCatalogLink("Catalog collections", "en", PUBLIC_CATALOG_COLLECTIONS_ROUTE_PATHNAME)}`,
  ];

  catalog.packages.forEach((packageView) => {
    lines.push(`- ${createLocalizedCatalogLink(
      packageView.latestVersion.title,
      "en",
      getPublicCatalogPackageRoutePathname(packageView.packageMetadata.slug),
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
      `Language: ${languageTag}`,
      "en",
      getPublicCatalogLanguageRoutePathname(languageTag),
    )}`);
  });
  catalog.topicTags.forEach((topicTag) => {
    lines.push(`- ${createLocalizedCatalogLink(
      `Topic: ${topicTag}`,
      "en",
      getPublicCatalogTopicRoutePathname(topicTag),
    )}`);
  });

  return lines.join("\n");
}
