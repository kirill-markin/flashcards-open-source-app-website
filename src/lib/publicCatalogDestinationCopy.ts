import type { AppLocale } from "./localeConfig";

export interface PublicCatalogDestinationCopy {
  readonly allPackagesNavigationLabel: string;
  readonly authorNoPackagesLabel: string;
  readonly authorPackagesHeadingTemplate: string;
  readonly authorWebsiteLabel: string;
  readonly authorsIntro: string;
  readonly authorsNavigationLabel: string;
  readonly authorsTitle: string;
  readonly collectionAboutHeading: string;
  readonly collectionEmptyLabel: string;
  readonly collectionPackagesHeading: string;
  readonly collectionsContainingLabel: string;
  readonly collectionsIntro: string;
  readonly collectionsNavigationLabel: string;
  readonly collectionsTitle: string;
  readonly facetPackagesHeading: string;
  readonly languageIntroTemplate: string;
  readonly languageTitleTemplate: string;
  readonly packageCountTemplates: Readonly<Record<Intl.LDMLPluralRule, string>>;
}

const PUBLIC_CATALOG_DESTINATION_COPY_BY_LOCALE: Readonly<
  Record<AppLocale, PublicCatalogDestinationCopy>
> = {
  en: {
    allPackagesNavigationLabel: "All decks",
    authorNoPackagesLabel: "This author has no published decks.",
    authorPackagesHeadingTemplate: "Decks by {name}",
    authorWebsiteLabel: "Visit author website",
    authorsIntro: "Meet the people who publish flashcard decks for the community.",
    authorsNavigationLabel: "Authors",
    authorsTitle: "Catalog authors",
    collectionAboutHeading: "About this collection",
    collectionEmptyLabel: "This collection does not contain any decks yet.",
    collectionPackagesHeading: "Decks in this collection",
    collectionsContainingLabel: "Collections",
    collectionsIntro: "Browse curated groups of public flashcard decks.",
    collectionsNavigationLabel: "Collections",
    collectionsTitle: "Flashcard collections",
    facetPackagesHeading: "Decks",
    languageIntroTemplate: "Browse public flashcard decks tagged with the content language {tag}.",
    languageTitleTemplate: "{tag} flashcard decks",
    packageCountTemplates: {
      zero: "{count} decks",
      one: "{count} deck",
      two: "{count} decks",
      few: "{count} decks",
      many: "{count} decks",
      other: "{count} decks",
    },
  },
  es: {
    allPackagesNavigationLabel: "Todos los mazos",
    authorNoPackagesLabel: "Este autor no tiene mazos publicados.",
    authorPackagesHeadingTemplate: "Mazos de {name}",
    authorWebsiteLabel: "Visitar el sitio web del autor",
    authorsIntro: "Conoce a quienes publican mazos de tarjetas para la comunidad.",
    authorsNavigationLabel: "Autores",
    authorsTitle: "Autores del catálogo",
    collectionAboutHeading: "Sobre esta colección",
    collectionEmptyLabel: "Esta colección todavía no contiene mazos.",
    collectionPackagesHeading: "Mazos de esta colección",
    collectionsContainingLabel: "Colecciones",
    collectionsIntro: "Explora grupos seleccionados de mazos públicos de tarjetas.",
    collectionsNavigationLabel: "Colecciones",
    collectionsTitle: "Colecciones de tarjetas",
    facetPackagesHeading: "Mazos",
    languageIntroTemplate: "Explora mazos públicos de tarjetas con el idioma de contenido {tag}.",
    languageTitleTemplate: "Mazos de tarjetas en {tag}",
    packageCountTemplates: {
      zero: "{count} mazos",
      one: "{count} mazo",
      two: "{count} mazos",
      few: "{count} mazos",
      many: "{count} mazos",
      other: "{count} mazos",
    },
  },
  ar: {
    allPackagesNavigationLabel: "كل الرزم",
    authorNoPackagesLabel: "لا يملك هذا المؤلف رزمًا منشورة.",
    authorPackagesHeadingTemplate: "رزم {name}",
    authorWebsiteLabel: "زيارة موقع المؤلف",
    authorsIntro: "تعرّف على الأشخاص الذين ينشرون رزم البطاقات التعليمية للمجتمع.",
    authorsNavigationLabel: "المؤلفون",
    authorsTitle: "مؤلفو الكتالوج",
    collectionAboutHeading: "حول هذه المجموعة",
    collectionEmptyLabel: "لا تحتوي هذه المجموعة على أي رزم بعد.",
    collectionPackagesHeading: "الرزم في هذه المجموعة",
    collectionsContainingLabel: "المجموعات",
    collectionsIntro: "تصفح مجموعات منتقاة من رزم البطاقات التعليمية العامة.",
    collectionsNavigationLabel: "المجموعات",
    collectionsTitle: "مجموعات البطاقات التعليمية",
    facetPackagesHeading: "الرزم",
    languageIntroTemplate: "تصفح رزم البطاقات التعليمية العامة الموسومة بلغة المحتوى {tag}.",
    languageTitleTemplate: "رزم بطاقات تعليمية بلغة {tag}",
    packageCountTemplates: {
      zero: "{count} رزم",
      one: "رزمة واحدة",
      two: "رزمتان",
      few: "{count} رزم",
      many: "{count} رزمة",
      other: "{count} رزمة",
    },
  },
  de: {
    allPackagesNavigationLabel: "Alle Lernkartensets",
    authorNoPackagesLabel: "Dieser Autor hat keine Lernkartensets veröffentlicht.",
    authorPackagesHeadingTemplate: "Lernkartensets von {name}",
    authorWebsiteLabel: "Website des Autors besuchen",
    authorsIntro: "Lerne die Menschen kennen, die Lernkartensets für die Community veröffentlichen.",
    authorsNavigationLabel: "Autoren",
    authorsTitle: "Katalogautoren",
    collectionAboutHeading: "Über diese Sammlung",
    collectionEmptyLabel: "Diese Sammlung enthält noch keine Lernkartensets.",
    collectionPackagesHeading: "Lernkartensets in dieser Sammlung",
    collectionsContainingLabel: "Sammlungen",
    collectionsIntro: "Entdecke kuratierte Gruppen öffentlicher Lernkartensets.",
    collectionsNavigationLabel: "Sammlungen",
    collectionsTitle: "Lernkartensammlungen",
    facetPackagesHeading: "Lernkartensets",
    languageIntroTemplate: "Entdecke öffentliche Lernkartensets mit der Inhaltssprache {tag}.",
    languageTitleTemplate: "Lernkartensets in {tag}",
    packageCountTemplates: {
      zero: "{count} Lernkartensets",
      one: "{count} Lernkartenset",
      two: "{count} Lernkartensets",
      few: "{count} Lernkartensets",
      many: "{count} Lernkartensets",
      other: "{count} Lernkartensets",
    },
  },
  hi: {
    allPackagesNavigationLabel: "सभी डेक",
    authorNoPackagesLabel: "इस लेखक का कोई प्रकाशित डेक नहीं है।",
    authorPackagesHeadingTemplate: "{name} के डेक",
    authorWebsiteLabel: "लेखक की वेबसाइट देखें",
    authorsIntro: "समुदाय के लिए फ़्लैशकार्ड डेक प्रकाशित करने वाले लोगों से मिलें।",
    authorsNavigationLabel: "लेखक",
    authorsTitle: "कैटलॉग लेखक",
    collectionAboutHeading: "इस संग्रह के बारे में",
    collectionEmptyLabel: "इस संग्रह में अभी कोई डेक नहीं है।",
    collectionPackagesHeading: "इस संग्रह के डेक",
    collectionsContainingLabel: "संग्रह",
    collectionsIntro: "सार्वजनिक फ़्लैशकार्ड डेक के चुने हुए समूह देखें।",
    collectionsNavigationLabel: "संग्रह",
    collectionsTitle: "फ़्लैशकार्ड संग्रह",
    facetPackagesHeading: "डेक",
    languageIntroTemplate: "{tag} सामग्री भाषा वाले सार्वजनिक फ़्लैशकार्ड डेक देखें।",
    languageTitleTemplate: "{tag} फ़्लैशकार्ड डेक",
    packageCountTemplates: {
      zero: "{count} डेक",
      one: "{count} डेक",
      two: "{count} डेक",
      few: "{count} डेक",
      many: "{count} डेक",
      other: "{count} डेक",
    },
  },
  ja: {
    allPackagesNavigationLabel: "すべてのデッキ",
    authorNoPackagesLabel: "この作成者が公開したデッキはありません。",
    authorPackagesHeadingTemplate: "{name} のデッキ",
    authorWebsiteLabel: "作成者のウェブサイトを見る",
    authorsIntro: "コミュニティ向けにフラッシュカードデッキを公開している人々を紹介します。",
    authorsNavigationLabel: "作成者",
    authorsTitle: "カタログの作成者",
    collectionAboutHeading: "このコレクションについて",
    collectionEmptyLabel: "このコレクションにはまだデッキがありません。",
    collectionPackagesHeading: "このコレクションのデッキ",
    collectionsContainingLabel: "コレクション",
    collectionsIntro: "公開フラッシュカードデッキをまとめたコレクションを探せます。",
    collectionsNavigationLabel: "コレクション",
    collectionsTitle: "フラッシュカードコレクション",
    facetPackagesHeading: "デッキ",
    languageIntroTemplate: "コンテンツ言語が {tag} の公開フラッシュカードデッキを探せます。",
    languageTitleTemplate: "{tag} のフラッシュカードデッキ",
    packageCountTemplates: {
      zero: "{count}件のデッキ",
      one: "{count}件のデッキ",
      two: "{count}件のデッキ",
      few: "{count}件のデッキ",
      many: "{count}件のデッキ",
      other: "{count}件のデッキ",
    },
  },
  ru: {
    allPackagesNavigationLabel: "Все колоды",
    authorNoPackagesLabel: "У этого автора нет опубликованных колод.",
    authorPackagesHeadingTemplate: "Колоды автора {name}",
    authorWebsiteLabel: "Перейти на сайт автора",
    authorsIntro: "Познакомьтесь с авторами, которые публикуют колоды карточек для сообщества.",
    authorsNavigationLabel: "Авторы",
    authorsTitle: "Авторы каталога",
    collectionAboutHeading: "Об этой коллекции",
    collectionEmptyLabel: "В этой коллекции пока нет колод.",
    collectionPackagesHeading: "Колоды в этой коллекции",
    collectionsContainingLabel: "Коллекции",
    collectionsIntro: "Просматривайте тематические подборки общедоступных колод карточек.",
    collectionsNavigationLabel: "Коллекции",
    collectionsTitle: "Коллекции карточек",
    facetPackagesHeading: "Колоды",
    languageIntroTemplate: "Просматривайте общедоступные колоды карточек с языком содержимого {tag}.",
    languageTitleTemplate: "Колоды карточек на языке {tag}",
    packageCountTemplates: {
      zero: "{count} колод",
      one: "{count} колода",
      two: "{count} колоды",
      few: "{count} колоды",
      many: "{count} колод",
      other: "{count} колоды",
    },
  },
  zh: {
    allPackagesNavigationLabel: "所有卡组",
    authorNoPackagesLabel: "该作者尚未发布卡组。",
    authorPackagesHeadingTemplate: "{name} 的卡组",
    authorWebsiteLabel: "访问作者网站",
    authorsIntro: "了解为社区发布闪卡组的作者。",
    authorsNavigationLabel: "作者",
    authorsTitle: "目录作者",
    collectionAboutHeading: "关于此合集",
    collectionEmptyLabel: "此合集尚未包含任何卡组。",
    collectionPackagesHeading: "此合集中的卡组",
    collectionsContainingLabel: "合集",
    collectionsIntro: "浏览精心整理的公开闪卡组合集。",
    collectionsNavigationLabel: "合集",
    collectionsTitle: "闪卡合集",
    facetPackagesHeading: "卡组",
    languageIntroTemplate: "浏览内容语言标记为 {tag} 的公开闪卡组。",
    languageTitleTemplate: "{tag} 闪卡组",
    packageCountTemplates: {
      zero: "{count}个卡组",
      one: "{count}个卡组",
      two: "{count}个卡组",
      few: "{count}个卡组",
      many: "{count}个卡组",
      other: "{count}个卡组",
    },
  },
};

export function getPublicCatalogDestinationCopy(
  locale: AppLocale,
): PublicCatalogDestinationCopy {
  return PUBLIC_CATALOG_DESTINATION_COPY_BY_LOCALE[locale];
}

export function interpolatePublicCatalogCopy(
  template: string,
  placeholder: "name" | "tag",
  value: string,
): string {
  return template.replace(`{${placeholder}}`, value);
}
