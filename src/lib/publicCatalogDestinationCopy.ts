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
  readonly topicIntroTemplate: string;
  readonly topicTitleTemplate: string;
}

const PUBLIC_CATALOG_DESTINATION_COPY_BY_LOCALE: Readonly<
  Record<AppLocale, PublicCatalogDestinationCopy>
> = {
  en: {
    allPackagesNavigationLabel: "All packages",
    authorNoPackagesLabel: "This author has no published packages.",
    authorPackagesHeadingTemplate: "Packages by {name}",
    authorWebsiteLabel: "Visit author website",
    authorsIntro: "Meet the people who publish flashcard packages for the community.",
    authorsNavigationLabel: "Authors",
    authorsTitle: "Catalog authors",
    collectionAboutHeading: "About this collection",
    collectionEmptyLabel: "This collection does not contain any packages yet.",
    collectionPackagesHeading: "Packages in this collection",
    collectionsContainingLabel: "Collections",
    collectionsIntro: "Browse curated groups of public flashcard packages.",
    collectionsNavigationLabel: "Collections",
    collectionsTitle: "Flashcard collections",
    facetPackagesHeading: "Packages",
    languageIntroTemplate: "Browse public flashcard packages tagged with the content language {tag}.",
    languageTitleTemplate: "{tag} flashcard packages",
    packageCountTemplates: {
      zero: "{count} packages",
      one: "{count} package",
      two: "{count} packages",
      few: "{count} packages",
      many: "{count} packages",
      other: "{count} packages",
    },
    topicIntroTemplate: "Browse public flashcard packages about {tag}.",
    topicTitleTemplate: "{tag} flashcard packages",
  },
  es: {
    allPackagesNavigationLabel: "Todos los paquetes",
    authorNoPackagesLabel: "Este autor no tiene paquetes publicados.",
    authorPackagesHeadingTemplate: "Paquetes de {name}",
    authorWebsiteLabel: "Visitar el sitio web del autor",
    authorsIntro: "Conoce a quienes publican paquetes de tarjetas para la comunidad.",
    authorsNavigationLabel: "Autores",
    authorsTitle: "Autores del catálogo",
    collectionAboutHeading: "Sobre esta colección",
    collectionEmptyLabel: "Esta colección todavía no contiene paquetes.",
    collectionPackagesHeading: "Paquetes de esta colección",
    collectionsContainingLabel: "Colecciones",
    collectionsIntro: "Explora grupos seleccionados de paquetes públicos de tarjetas.",
    collectionsNavigationLabel: "Colecciones",
    collectionsTitle: "Colecciones de tarjetas",
    facetPackagesHeading: "Paquetes",
    languageIntroTemplate: "Explora paquetes públicos de tarjetas con el idioma de contenido {tag}.",
    languageTitleTemplate: "Paquetes de tarjetas en {tag}",
    packageCountTemplates: {
      zero: "{count} paquetes",
      one: "{count} paquete",
      two: "{count} paquetes",
      few: "{count} paquetes",
      many: "{count} paquetes",
      other: "{count} paquetes",
    },
    topicIntroTemplate: "Explora paquetes públicos de tarjetas sobre {tag}.",
    topicTitleTemplate: "Paquetes de tarjetas sobre {tag}",
  },
  ar: {
    allPackagesNavigationLabel: "كل الحزم",
    authorNoPackagesLabel: "لا يملك هذا المؤلف حزمًا منشورة.",
    authorPackagesHeadingTemplate: "حزم {name}",
    authorWebsiteLabel: "زيارة موقع المؤلف",
    authorsIntro: "تعرّف على الأشخاص الذين ينشرون حزم البطاقات التعليمية للمجتمع.",
    authorsNavigationLabel: "المؤلفون",
    authorsTitle: "مؤلفو الكتالوج",
    collectionAboutHeading: "حول هذه المجموعة",
    collectionEmptyLabel: "لا تحتوي هذه المجموعة على أي حزم بعد.",
    collectionPackagesHeading: "الحزم في هذه المجموعة",
    collectionsContainingLabel: "المجموعات",
    collectionsIntro: "تصفح مجموعات منتقاة من حزم البطاقات التعليمية العامة.",
    collectionsNavigationLabel: "المجموعات",
    collectionsTitle: "مجموعات البطاقات التعليمية",
    facetPackagesHeading: "الحزم",
    languageIntroTemplate: "تصفح حزم البطاقات التعليمية العامة الموسومة بلغة المحتوى {tag}.",
    languageTitleTemplate: "حزم بطاقات تعليمية بلغة {tag}",
    packageCountTemplates: {
      zero: "{count} حزم",
      one: "حزمة واحدة",
      two: "حزمتان",
      few: "{count} حزم",
      many: "{count} حزمة",
      other: "{count} حزمة",
    },
    topicIntroTemplate: "تصفح حزم البطاقات التعليمية العامة حول {tag}.",
    topicTitleTemplate: "حزم بطاقات تعليمية حول {tag}",
  },
  de: {
    allPackagesNavigationLabel: "Alle Pakete",
    authorNoPackagesLabel: "Dieser Autor hat keine veröffentlichten Pakete.",
    authorPackagesHeadingTemplate: "Pakete von {name}",
    authorWebsiteLabel: "Website des Autors besuchen",
    authorsIntro: "Lerne die Menschen kennen, die Lernkartenpakete für die Community veröffentlichen.",
    authorsNavigationLabel: "Autoren",
    authorsTitle: "Katalogautoren",
    collectionAboutHeading: "Über diese Sammlung",
    collectionEmptyLabel: "Diese Sammlung enthält noch keine Pakete.",
    collectionPackagesHeading: "Pakete in dieser Sammlung",
    collectionsContainingLabel: "Sammlungen",
    collectionsIntro: "Entdecke kuratierte Gruppen öffentlicher Lernkartenpakete.",
    collectionsNavigationLabel: "Sammlungen",
    collectionsTitle: "Lernkartensammlungen",
    facetPackagesHeading: "Pakete",
    languageIntroTemplate: "Entdecke öffentliche Lernkartenpakete mit der Inhaltssprache {tag}.",
    languageTitleTemplate: "Lernkartenpakete in {tag}",
    packageCountTemplates: {
      zero: "{count} Pakete",
      one: "{count} Paket",
      two: "{count} Pakete",
      few: "{count} Pakete",
      many: "{count} Pakete",
      other: "{count} Pakete",
    },
    topicIntroTemplate: "Entdecke öffentliche Lernkartenpakete zum Thema {tag}.",
    topicTitleTemplate: "Lernkartenpakete zu {tag}",
  },
  hi: {
    allPackagesNavigationLabel: "सभी पैकेज",
    authorNoPackagesLabel: "इस लेखक का कोई प्रकाशित पैकेज नहीं है।",
    authorPackagesHeadingTemplate: "{name} के पैकेज",
    authorWebsiteLabel: "लेखक की वेबसाइट देखें",
    authorsIntro: "समुदाय के लिए फ़्लैशकार्ड पैकेज प्रकाशित करने वाले लोगों से मिलें।",
    authorsNavigationLabel: "लेखक",
    authorsTitle: "कैटलॉग लेखक",
    collectionAboutHeading: "इस संग्रह के बारे में",
    collectionEmptyLabel: "इस संग्रह में अभी कोई पैकेज नहीं है।",
    collectionPackagesHeading: "इस संग्रह के पैकेज",
    collectionsContainingLabel: "संग्रह",
    collectionsIntro: "सार्वजनिक फ़्लैशकार्ड पैकेज के चुने हुए समूह देखें।",
    collectionsNavigationLabel: "संग्रह",
    collectionsTitle: "फ़्लैशकार्ड संग्रह",
    facetPackagesHeading: "पैकेज",
    languageIntroTemplate: "{tag} सामग्री भाषा वाले सार्वजनिक फ़्लैशकार्ड पैकेज देखें।",
    languageTitleTemplate: "{tag} फ़्लैशकार्ड पैकेज",
    packageCountTemplates: {
      zero: "{count} पैकेज",
      one: "{count} पैकेज",
      two: "{count} पैकेज",
      few: "{count} पैकेज",
      many: "{count} पैकेज",
      other: "{count} पैकेज",
    },
    topicIntroTemplate: "{tag} विषय के सार्वजनिक फ़्लैशकार्ड पैकेज देखें।",
    topicTitleTemplate: "{tag} फ़्लैशकार्ड पैकेज",
  },
  ja: {
    allPackagesNavigationLabel: "すべてのパッケージ",
    authorNoPackagesLabel: "この作成者が公開したパッケージはありません。",
    authorPackagesHeadingTemplate: "{name} のパッケージ",
    authorWebsiteLabel: "作成者のウェブサイトを見る",
    authorsIntro: "コミュニティ向けにフラッシュカードパッケージを公開している人々を紹介します。",
    authorsNavigationLabel: "作成者",
    authorsTitle: "カタログの作成者",
    collectionAboutHeading: "このコレクションについて",
    collectionEmptyLabel: "このコレクションにはまだパッケージがありません。",
    collectionPackagesHeading: "このコレクションのパッケージ",
    collectionsContainingLabel: "コレクション",
    collectionsIntro: "公開フラッシュカードパッケージをまとめたコレクションを探せます。",
    collectionsNavigationLabel: "コレクション",
    collectionsTitle: "フラッシュカードコレクション",
    facetPackagesHeading: "パッケージ",
    languageIntroTemplate: "コンテンツ言語が {tag} の公開フラッシュカードパッケージを探せます。",
    languageTitleTemplate: "{tag} のフラッシュカードパッケージ",
    packageCountTemplates: {
      zero: "{count}件のパッケージ",
      one: "{count}件のパッケージ",
      two: "{count}件のパッケージ",
      few: "{count}件のパッケージ",
      many: "{count}件のパッケージ",
      other: "{count}件のパッケージ",
    },
    topicIntroTemplate: "{tag} に関する公開フラッシュカードパッケージを探せます。",
    topicTitleTemplate: "{tag} のフラッシュカードパッケージ",
  },
  ru: {
    allPackagesNavigationLabel: "Все пакеты",
    authorNoPackagesLabel: "У этого автора нет опубликованных пакетов.",
    authorPackagesHeadingTemplate: "Пакеты автора {name}",
    authorWebsiteLabel: "Перейти на сайт автора",
    authorsIntro: "Познакомьтесь с авторами, которые публикуют пакеты карточек для сообщества.",
    authorsNavigationLabel: "Авторы",
    authorsTitle: "Авторы каталога",
    collectionAboutHeading: "Об этой коллекции",
    collectionEmptyLabel: "В этой коллекции пока нет пакетов.",
    collectionPackagesHeading: "Пакеты в этой коллекции",
    collectionsContainingLabel: "Коллекции",
    collectionsIntro: "Просматривайте тематические подборки общедоступных пакетов карточек.",
    collectionsNavigationLabel: "Коллекции",
    collectionsTitle: "Коллекции карточек",
    facetPackagesHeading: "Пакеты",
    languageIntroTemplate: "Просматривайте общедоступные пакеты карточек с языком содержимого {tag}.",
    languageTitleTemplate: "Пакеты карточек на языке {tag}",
    packageCountTemplates: {
      zero: "{count} пакетов",
      one: "{count} пакет",
      two: "{count} пакета",
      few: "{count} пакета",
      many: "{count} пакетов",
      other: "{count} пакета",
    },
    topicIntroTemplate: "Просматривайте общедоступные пакеты карточек по теме {tag}.",
    topicTitleTemplate: "Пакеты карточек по теме {tag}",
  },
  zh: {
    allPackagesNavigationLabel: "所有卡包",
    authorNoPackagesLabel: "该作者尚未发布卡包。",
    authorPackagesHeadingTemplate: "{name} 的卡包",
    authorWebsiteLabel: "访问作者网站",
    authorsIntro: "了解为社区发布闪卡包的作者。",
    authorsNavigationLabel: "作者",
    authorsTitle: "目录作者",
    collectionAboutHeading: "关于此合集",
    collectionEmptyLabel: "此合集尚未包含任何卡包。",
    collectionPackagesHeading: "此合集中的卡包",
    collectionsContainingLabel: "合集",
    collectionsIntro: "浏览精心整理的公开闪卡包合集。",
    collectionsNavigationLabel: "合集",
    collectionsTitle: "闪卡合集",
    facetPackagesHeading: "卡包",
    languageIntroTemplate: "浏览内容语言标记为 {tag} 的公开闪卡包。",
    languageTitleTemplate: "{tag} 闪卡包",
    packageCountTemplates: {
      zero: "{count}个卡包",
      one: "{count}个卡包",
      two: "{count}个卡包",
      few: "{count}个卡包",
      many: "{count}个卡包",
      other: "{count}个卡包",
    },
    topicIntroTemplate: "浏览关于 {tag} 的公开闪卡包。",
    topicTitleTemplate: "{tag} 闪卡包",
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
