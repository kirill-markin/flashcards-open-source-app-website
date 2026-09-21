import { DOC_SLUGS } from "@/data/docs";
import { listBlogPosts, readBlogPost } from "@/lib/blog";
import { getDocs, readDoc } from "@/lib/docs";
import {
  getLocalizedPathname,
  resolveLocaleFromPathname,
  SUPPORTED_LOCALES,
  type AppLocale,
} from "@/lib/i18n";
import { localizeInternalLinks } from "@/lib/localizeInternalLinks";
import { hasRouteTranslation } from "@/lib/routeTranslations";
import {
  getMarketingPageFromPath,
  hasMarketingPageTranslation,
  listMarketingPagePaths,
  readAllMarketingPages,
  readPageContent,
} from "@/lib/content/readPageContent";
import {
  renderMarketingPageMarkdown,
  type MarketingPageMarkdownContext,
  type MarkdownSiteContext,
} from "@/lib/content/renderMarkdown";
import { renderMarkdownLink } from "@/lib/markdownLinks";
import { SITE_URL } from "@/lib/site";
import {
  globalActivitySnapshotUrl,
  type GlobalActivitySnapshot,
  type GlobalActivitySnapshotDay,
  serializeGlobalActivitySnapshot,
} from "@/lib/globalActivitySnapshot";
import {
  formatActivityDateRange,
  formatActivityNumber,
  formatActivityTimestamp,
} from "@/lib/activityFormatting";
import { getSignupUrl } from "@/lib/auth";
import {
  DASHBOARDS_ROUTE_PATHNAME,
  getDashboardsPageDescription,
  getDashboardsPageTitle,
} from "@/lib/dashboardsPage";
import { getUiCopy } from "@/lib/uiCopy";
import {
  listPublicCatalogMarkdownPagePaths,
  renderPublicCatalogLlmsSection,
  renderPublicCatalogMarkdownDocument,
} from "@/lib/publicCatalogMarkdown";
import type { PublicCatalogReadModel } from "@/lib/publicCatalogReadModel";

const SITE_CONTEXT: MarkdownSiteContext = {
  siteUrl: SITE_URL,
  appUrl: "https://app.flashcards-open-source-app.com",
  githubUrl: "https://github.com/kirill-markin/flashcards-open-source-app",
};
const DISCOVERY_URL = "https://api.flashcards-open-source-app.com/v1/";
const MCP_URL = "https://mcp.nibomo.com/mcp";
const DASHBOARDS_NORMALIZED_ROUTE_PATHNAME =
  DASHBOARDS_ROUTE_PATHNAME.replace(/\/+$/, "");
type MarkdownResult = {
  readonly markdown: string;
  readonly status: 200 | 404;
};

export interface MarkdownRenderContext extends MarketingPageMarkdownContext {
  readonly publicCatalog: PublicCatalogReadModel | null;
}

function getMaxGlobalActivityDailyValue(
  days: ReadonlyArray<GlobalActivitySnapshotDay>,
  getValue: (day: GlobalActivitySnapshotDay) => number,
  label: string
): number {
  const [firstDay] = days;

  if (firstDay === undefined) {
    throw new Error(`Global activity snapshot days must not be empty when rendering llms.txt ${label}.`);
  }

  return days.reduce<number>(
    (maxValue, day) => Math.max(maxValue, getValue(day)),
    getValue(firstDay)
  );
}

export interface BlogMeta {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly date: string;
}

function getOriginalPageUrl(pagePath: string): string {
  if (pagePath === "") {
    return `${SITE_CONTEXT.siteUrl}/`;
  }

  return `${SITE_CONTEXT.siteUrl}/${pagePath}/`;
}

function appendMarkdownFooter(
  markdown: string,
  locale: AppLocale,
  pagePath: string
): string {
  const footerCopyByLocale: Readonly<
    Record<
      AppLocale,
      {
        readonly agent: string;
        readonly htmlVersionLabel: string;
        readonly markdownTip: string;
      }
    >
  > = {
    en: {
      agent: `*AI agents can create an account for the user in this service by starting with \`GET ${DISCOVERY_URL}\`. Once set up, they can also connect over MCP at \`${MCP_URL}\`.*`,
      htmlVersionLabel: "View the styled HTML version of this page",
      markdownTip: `*Tip: Append \`.md\` to any URL on ${SITE_CONTEXT.siteUrl} to get a clean Markdown version of that page.*`,
    },
    es: {
      agent: `*Los agentes de IA pueden crear una cuenta para el usuario en este servicio empezando con \`GET ${DISCOVERY_URL}\`. Una vez configurados, también pueden conectarse por MCP en \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Ver la versión HTML con estilo de esta página",
      markdownTip: `*Consejo: añade \`.md\` a cualquier URL en ${SITE_CONTEXT.siteUrl} para obtener una versión limpia en Markdown de esa página.*`,
    },
    ar: {
      agent: `*يمكن لوكلاء الذكاء الاصطناعي إنشاء حساب للمستخدم في هذه الخدمة بدءًا من \`GET ${DISCOVERY_URL}\`. وبعد الإعداد، يمكنهم أيضًا الاتصال عبر MCP على \`${MCP_URL}\`.*`,
      htmlVersionLabel: "عرض النسخة المنسقة HTML من هذه الصفحة",
      markdownTip: `*نصيحة: أضف \`.md\` إلى أي رابط على ${SITE_CONTEXT.siteUrl} للحصول على نسخة Markdown نظيفة من الصفحة.*`,
    },
    de: {
      agent: `*KI-Agenten können in diesem Dienst ein Benutzerkonto anlegen, beginnend mit \`GET ${DISCOVERY_URL}\`. Nach der Einrichtung können sie sich auch über MCP unter \`${MCP_URL}\` verbinden.*`,
      htmlVersionLabel: "Die gestaltete HTML-Version dieser Seite ansehen",
      markdownTip: `*Tipp: Hänge \`.md\` an jede URL auf ${SITE_CONTEXT.siteUrl} an, um eine saubere Markdown-Version der Seite zu erhalten.*`,
    },
    hi: {
      agent: `*AI agent इस सेवा में उपयोगकर्ता का अकाउंट \`GET ${DISCOVERY_URL}\` से शुरू करके बना सकते हैं। सेटअप के बाद, वे MCP के जरिए \`${MCP_URL}\` पर भी कनेक्ट कर सकते हैं।*`,
      htmlVersionLabel: "इस पेज का styled HTML संस्करण देखें",
      markdownTip: `*टिप: ${SITE_CONTEXT.siteUrl} पर किसी भी URL के अंत में \`.md\` जोड़ें ताकि उसका साफ़ Markdown संस्करण मिले।*`,
    },
    ja: {
      agent: `*AI エージェントは \`GET ${DISCOVERY_URL}\` から開始して、このサービスでユーザーアカウントを作成できます。設定後は、\`${MCP_URL}\` の MCP 経由で接続することもできます。*`,
      htmlVersionLabel: "このページのスタイル付き HTML 版を見る",
      markdownTip: `*ヒント: ${SITE_CONTEXT.siteUrl} の任意の URL に \`.md\` を付けると、ページのクリーンな Markdown 版を取得できます。*`,
    },
    fr: {
      agent: `*Les agents IA peuvent créer un compte pour l'utilisateur dans ce service en commençant par \`GET ${DISCOVERY_URL}\`. Une fois configurés, ils peuvent aussi se connecter en MCP à \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Voir la version HTML mise en forme de cette page",
      markdownTip: `*Astuce : ajoutez \`.md\` à n'importe quelle URL sur ${SITE_CONTEXT.siteUrl} pour obtenir une version Markdown épurée de cette page.*`,
    },
    pt: {
      agent: `*Agentes de IA podem criar uma conta para o usuário neste serviço começando por \`GET ${DISCOVERY_URL}\`. Depois da configuração, eles também podem se conectar por MCP em \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Ver a versão HTML estilizada desta página",
      markdownTip: `*Dica: adicione \`.md\` a qualquer URL em ${SITE_CONTEXT.siteUrl} para obter uma versão Markdown limpa da página.*`,
    },
    ru: {
      agent: `*AI-агенты могут создать аккаунт пользователя в этом сервисе, начиная с \`GET ${DISCOVERY_URL}\`. После настройки они также могут подключиться по MCP по адресу \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Открыть оформленную HTML-версию этой страницы",
      markdownTip: `*Совет: добавьте \`.md\` к любому URL на ${SITE_CONTEXT.siteUrl}, чтобы получить чистую Markdown-версию страницы.*`,
    },
    zh: {
      agent: `*AI agent 可以从 \`GET ${DISCOVERY_URL}\` 开始，为用户在该服务中创建账号。完成设置后，也可以通过 MCP 连接 \`${MCP_URL}\`。*`,
      htmlVersionLabel: "查看此页面的带样式 HTML 版本",
      markdownTip: `*提示：在 ${SITE_CONTEXT.siteUrl} 上任意 URL 后追加 \`.md\`，即可获得该页面的纯 Markdown 版本。*`,
    },
    it: {
      agent: `*Gli agenti AI possono creare un account per l'utente in questo servizio partendo da \`GET ${DISCOVERY_URL}\`. Una volta configurati, possono anche connettersi via MCP su \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Vedi la versione HTML con stile di questa pagina",
      markdownTip: `*Suggerimento: aggiungi \`.md\` a qualsiasi URL su ${SITE_CONTEXT.siteUrl} per ottenere una versione Markdown pulita di quella pagina.*`,
    },
    ko: {
      agent: `*AI 에이전트는 \`GET ${DISCOVERY_URL}\`으로 시작해 이 서비스에서 사용자 계정을 만들 수 있습니다. 설정이 끝나면 \`${MCP_URL}\`의 MCP로 연결할 수도 있습니다.*`,
      htmlVersionLabel: "이 페이지의 스타일이 적용된 HTML 버전 보기",
      markdownTip: `*팁: ${SITE_CONTEXT.siteUrl}의 어떤 URL 뒤에든 \`.md\`를 붙이면 해당 페이지의 깔끔한 Markdown 버전을 받을 수 있습니다.*`,
    },
    id: {
      agent: `*Agen AI bisa membuat akun untuk pengguna di layanan ini dengan memulai dari \`GET ${DISCOVERY_URL}\`. Setelah disiapkan, mereka juga bisa terhubung lewat MCP di \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Lihat versi HTML bergaya dari halaman ini",
      markdownTip: `*Tips: tambahkan \`.md\` ke URL mana pun di ${SITE_CONTEXT.siteUrl} untuk mendapatkan versi Markdown yang bersih dari halaman itu.*`,
    },
    tr: {
      agent: `*AI agent'lar \`GET ${DISCOVERY_URL}\` ile başlayarak bu serviste kullanıcı için bir hesap oluşturabilir. Kurulumdan sonra \`${MCP_URL}\` adresinden MCP üzerinden de bağlanabilirler.*`,
      htmlVersionLabel: "Bu sayfanın biçimlendirilmiş HTML sürümünü görüntüle",
      markdownTip: `*İpucu: ${SITE_CONTEXT.siteUrl} üzerindeki herhangi bir URL'nin sonuna \`.md\` ekleyin ve sayfanın temiz Markdown sürümünü alın.*`,
    },
    nl: {
      agent: `*AI-agents kunnen in deze dienst een account voor de gebruiker aanmaken door te beginnen met \`GET ${DISCOVERY_URL}\`. Na het instellen kunnen ze ook via MCP verbinden op \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Bekijk de opgemaakte HTML-versie van deze pagina",
      markdownTip: `*Tip: voeg \`.md\` toe aan elke URL op ${SITE_CONTEXT.siteUrl} voor een schone Markdown-versie van die pagina.*`,
    },
    pl: {
      agent: `*Agenci AI mogą utworzyć konto użytkownika w tej usłudze, zaczynając od \`GET ${DISCOVERY_URL}\`. Po konfiguracji mogą też połączyć się przez MCP pod adresem \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Zobacz sformatowaną wersję HTML tej strony",
      markdownTip: `*Wskazówka: dodaj \`.md\` do dowolnego adresu URL w ${SITE_CONTEXT.siteUrl}, aby otrzymać czystą wersję Markdown tej strony.*`,
    },
    vi: {
      agent: `*AI agent có thể tạo tài khoản cho người dùng trong dịch vụ này bằng cách bắt đầu với \`GET ${DISCOVERY_URL}\`. Sau khi thiết lập, chúng cũng có thể kết nối qua MCP tại \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Xem bản HTML có định dạng của trang này",
      markdownTip: `*Mẹo: thêm \`.md\` vào bất kỳ URL nào trên ${SITE_CONTEXT.siteUrl} để nhận bản Markdown gọn gàng của trang đó.*`,
    },
    th: {
      agent: `*AI agent สามารถสร้างบัญชีให้ผู้ใช้ในบริการนี้ได้ โดยเริ่มจาก \`GET ${DISCOVERY_URL}\` หลังตั้งค่าเสร็จแล้ว ยังเชื่อมต่อผ่าน MCP ที่ \`${MCP_URL}\` ได้ด้วย*`,
      htmlVersionLabel: "ดูหน้านี้ในเวอร์ชัน HTML ที่จัดรูปแบบแล้ว",
      markdownTip: `*เคล็ดลับ: เติม \`.md\` ต่อท้าย URL ใดก็ได้บน ${SITE_CONTEXT.siteUrl} เพื่อรับเวอร์ชัน Markdown ที่สะอาดของหน้านั้น*`,
    },
    uk: {
      agent: `*AI-агенти можуть створити акаунт користувача в цьому сервісі, почавши з \`GET ${DISCOVERY_URL}\`. Після налаштування вони також можуть підключитися по MCP за адресою \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Відкрити оформлену HTML-версію цієї сторінки",
      markdownTip: `*Порада: додайте \`.md\` до будь-якого URL на ${SITE_CONTEXT.siteUrl}, щоб отримати чисту Markdown-версію сторінки.*`,
    },
    he: {
      agent: `*סוכני AI יכולים ליצור חשבון למשתמש בשירות הזה, החל מ-\`GET ${DISCOVERY_URL}\`. לאחר ההגדרה הם יכולים גם להתחבר דרך MCP בכתובת \`${MCP_URL}\`.*`,
      htmlVersionLabel: "הצג את גרסת ה-HTML המעוצבת של הדף הזה",
      markdownTip: `*טיפ: הוסיפו \`.md\` לכל כתובת URL באתר ${SITE_CONTEXT.siteUrl} כדי לקבל גרסת Markdown נקייה של הדף.*`,
    },
    sv: {
      agent: `*AI-agenter kan skapa ett konto åt användaren i den här tjänsten genom att börja med \`GET ${DISCOVERY_URL}\`. När allt är uppsatt kan de även ansluta via MCP på \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Visa den formaterade HTML-versionen av den här sidan",
      markdownTip: `*Tips: lägg till \`.md\` efter vilken URL som helst på ${SITE_CONTEXT.siteUrl} för att få en ren Markdown-version av sidan.*`,
    },
    da: {
      agent: `*AI-agenter kan oprette en konto til brugeren i denne tjeneste ved at starte med \`GET ${DISCOVERY_URL}\`. Når det er sat op, kan de også forbinde via MCP på \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Se den formaterede HTML-version af denne side",
      markdownTip: `*Tip: føj \`.md\` til enhver URL på ${SITE_CONTEXT.siteUrl} for at få en ren Markdown-version af siden.*`,
    },
    nb: {
      agent: `*AI-agenter kan opprette en konto for brukeren i denne tjenesten ved å starte med \`GET ${DISCOVERY_URL}\`. Når det er satt opp, kan de også koble seg til via MCP på \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Se den stilsatte HTML-versjonen av denne siden",
      markdownTip: `*Tips: Legg \`.md\` til slutt i en hvilken som helst URL på ${SITE_CONTEXT.siteUrl} for å få en ren Markdown-versjon av den siden.*`,
    },
    fi: {
      agent: `*Tekoälyagentit voivat luoda käyttäjälle tilin tähän palveluun aloittamalla osoitteesta \`GET ${DISCOVERY_URL}\`. Kun ne on määritetty, ne voivat myös yhdistää MCP:llä osoitteessa \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Katso tämän sivun muotoiltu HTML-versio",
      markdownTip: `*Vinkki: lisää \`.md\` mihin tahansa osoitteeseen sivustolla ${SITE_CONTEXT.siteUrl}, niin saat sivusta selkeän Markdown-version.*`,
    },
    cs: {
      agent: `*AI agenti mohou v této službě vytvořit uživateli účet tak, že začnou s \`GET ${DISCOVERY_URL}\`. Po nastavení se mohou také připojit přes MCP na adrese \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Zobrazit naformátovanou HTML verzi této stránky",
      markdownTip: `*Tip: připojte \`.md\` k libovolné adrese URL na ${SITE_CONTEXT.siteUrl} a získáte čistou Markdown verzi dané stránky.*`,
    },
    el: {
      agent: `*Οι πράκτορες ΤΝ μπορούν να δημιουργήσουν λογαριασμό για τον χρήστη σε αυτήν την υπηρεσία ξεκινώντας με \`GET ${DISCOVERY_URL}\`. Μετά τη ρύθμιση, μπορούν επίσης να συνδεθούν μέσω MCP στο \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Δείτε τη μορφοποιημένη έκδοση HTML αυτής της σελίδας",
      markdownTip: `*Συμβουλή: προσθέστε \`.md\` σε οποιοδήποτε URL στο ${SITE_CONTEXT.siteUrl} για να λάβετε μια καθαρή έκδοση της σελίδας σε Markdown.*`,
    },
    ro: {
      agent: `*Agenții AI pot crea un cont pentru utilizator în acest serviciu începând cu \`GET ${DISCOVERY_URL}\`. După configurare, se pot conecta și prin MCP la \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Vezi versiunea HTML stilizată a acestei pagini",
      markdownTip: `*Sfat: adaugă \`.md\` la orice URL de pe ${SITE_CONTEXT.siteUrl} ca să obții o versiune Markdown curată a paginii.*`,
    },
    hu: {
      agent: `*Az AI-ügynökök a \`GET ${DISCOVERY_URL}\` hívással kezdve létre tudnak hozni fiókot a felhasználónak ebben a szolgáltatásban. A beállítás után MCP-n keresztül is csatlakozhatnak a \`${MCP_URL}\` címen.*`,
      htmlVersionLabel: "Az oldal formázott HTML-változatának megtekintése",
      markdownTip: `*Tipp: írj \`.md\` végződést a ${SITE_CONTEXT.siteUrl} bármelyik URL-je után, és megkapod az oldal letisztult Markdown-változatát.*`,
    },
    fa: {
      agent: `*عامل‌های هوش مصنوعی می‌توانند با شروع از \`GET ${DISCOVERY_URL}\` در این سرویس برای کاربر حساب بسازند. پس از راه‌اندازی، می‌توانند از طریق MCP هم به \`${MCP_URL}\` وصل شوند.*`,
      htmlVersionLabel: "مشاهدهٔ نسخهٔ HTML قالب‌بندی‌شدهٔ این صفحه",
      markdownTip: `*نکته: به هر URL در ${SITE_CONTEXT.siteUrl} پسوند \`.md\` اضافه کنید تا نسخهٔ تمیز Markdown آن صفحه را بگیرید.*`,
    },
    ca: {
      agent: `*Els agents d'IA poden crear un compte per a l'usuari en aquest servei començant per \`GET ${DISCOVERY_URL}\`. Un cop configurats, també es poden connectar per MCP a \`${MCP_URL}\`.*`,
      htmlVersionLabel: "Mostra la versió HTML amb estil d'aquesta pàgina",
      markdownTip: `*Consell: afegeix \`.md\` a qualsevol URL de ${SITE_CONTEXT.siteUrl} per obtenir una versió neta en Markdown d'aquesta pàgina.*`,
    },
  };
  const footerCopy = footerCopyByLocale[locale];

  const htmlVersionLink = renderMarkdownLink(
    footerCopy.htmlVersionLabel,
    getOriginalPageUrl(pagePath),
    "Markdown footer HTML version URL",
  );

  return `${markdown.trim()}\n\n---\n*${htmlVersionLink}*\n\n${footerCopy.agent}\n\n${footerCopy.markdownTip}`;
}

function renderMarketingPageMarkdownDocument(
  pagePath: string,
  context: MarketingPageMarkdownContext
): MarkdownResult {
  const page = getMarketingPageFromPath(pagePath);

  if (page === null) {
    return { markdown: `# 404\n\nPage not found: /${pagePath}`, status: 404 };
  }

  if (!hasMarketingPageTranslation(page.slug, page.locale)) {
    return { markdown: `# 404\n\nPage not found: /${pagePath}`, status: 404 };
  }

  const pageContent = readPageContent(page.slug, page.locale);

  return {
    markdown: appendMarkdownFooter(
      renderMarketingPageMarkdown(pageContent, page.locale, context),
      page.locale,
      pagePath
    ),
    status: 200,
  };
}

function renderDashboardsMarkdown(
  locale: AppLocale,
  context: MarketingPageMarkdownContext
): MarkdownResult {
  const uiCopy = getUiCopy(locale);
  const activityCopy = uiCopy.home.activity;
  const snapshot = context.globalActivitySnapshot;
  const pagePath = getPagePath(
    getLocalizedPathname(locale, DASHBOARDS_ROUTE_PATHNAME)
  );
  const lines = [
    `# ${getDashboardsPageTitle(locale)}`,
    "",
    getDashboardsPageDescription(locale),
    "",
    `- [${activityCopy.sourceLabel}](${globalActivitySnapshotUrl})`,
    `- ${activityCopy.totalReviewEventsLabel}: ${formatActivityNumber(locale, snapshot.totals.reviewEvents.total)}`,
    `- ${activityCopy.usersWithReviewEventsLabel}: ${formatActivityNumber(locale, snapshot.totals.uniqueReviewingUsers)}`,
    `- ${activityCopy.dateRangeLabel}: ${formatActivityDateRange(locale, snapshot.from, snapshot.to)}`,
    `- ${activityCopy.lastUpdatedLabel}: ${formatActivityTimestamp(locale, snapshot.generatedAtUtc)}`,
    "",
    `## ${activityCopy.dailyUniqueUsersChartTitle}`,
    "",
    activityCopy.dailyUniqueUsersChartDescription,
    "",
    `## ${activityCopy.platformActivityChartTitle}`,
    "",
    activityCopy.platformActivityChartDescription,
    "",
    `${activityCopy.rawSnapshotLabel}:`,
    "",
    "```json",
    serializeGlobalActivitySnapshot(snapshot).trim(),
    "```",
    "",
    `## ${uiCopy.cta.activityHeading}`,
    "",
    `[${uiCopy.auth.startStudyingFree}](${getSignupUrl()})`,
  ];

  return {
    markdown: appendMarkdownFooter(lines.join("\n"), locale, pagePath),
    status: 200,
  };
}

export function renderDocsListingMarkdown(locale: AppLocale): MarkdownResult {
  const uiCopy = getUiCopy(locale);
  const lines: string[] = [
    `# ${uiCopy.docs.title}`,
    "",
  ];

  for (const doc of getDocs(locale, DOC_SLUGS)) {
    const docPath = getLocalizedPathname(locale, `/docs/${doc.slug}/`);

    lines.push(
      `- [${doc.title}](${SITE_CONTEXT.siteUrl}${docPath}): ${doc.description}`
    );
  }

  return {
    markdown: appendMarkdownFooter(
      lines.join("\n"),
      locale,
      getPagePath(getLocalizedPathname(locale, "/docs/"))
    ),
    status: 200,
  };
}

export function getBlogPosts(locale: AppLocale): ReadonlyArray<BlogMeta> {
  return listBlogPosts(locale).map((post): BlogMeta => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
  }));
}

export function renderDocMarkdown(
  locale: AppLocale,
  slug: string
): MarkdownResult {
  const doc = readDoc(locale, slug);

  if (doc === null) {
    return { markdown: `# 404\n\nDocument not found: ${slug}`, status: 404 };
  }

  const docPath = getPagePath(getLocalizedPathname(locale, `/docs/${slug}/`));

  return {
    markdown: appendMarkdownFooter(
      `# ${doc.title}\n\n${localizeInternalLinks(doc.bodyMarkdown, locale)}`,
      locale,
      docPath
    ),
    status: 200,
  };
}

export function renderBlogListingMarkdown(locale: AppLocale): MarkdownResult {
  const posts = getBlogPosts(locale);
  const uiCopy = getUiCopy(locale);

  const lines: string[] = [
    `# ${uiCopy.blog.title}`,
    "",
  ];

  if (posts.length === 0) {
    lines.push(uiCopy.blog.empty);
  }

  for (const post of posts) {
    const postPath = getLocalizedPathname(locale, `/blog/${post.slug}/`);

    lines.push(
      `- [${post.title}](${SITE_CONTEXT.siteUrl}${postPath}) — ${post.date}: ${post.description}`
    );
  }

  return {
    markdown: appendMarkdownFooter(
      lines.join("\n"),
      locale,
      getPagePath(getLocalizedPathname(locale, "/blog/"))
    ),
    status: 200,
  };
}

export function renderBlogPostMarkdown(
  locale: AppLocale,
  slug: string
): MarkdownResult {
  const post = readBlogPost(locale, slug);

  if (post === null) {
    return { markdown: `# 404\n\nBlog post not found: ${slug}`, status: 404 };
  }

  const postPath = getPagePath(getLocalizedPathname(locale, `/blog/${slug}/`));

  return {
    markdown: appendMarkdownFooter(
      `# ${post.title}\n\n*${post.date}*\n\n${localizeInternalLinks(
        post.bodyMarkdown.trim(),
        locale
      )}`,
      locale,
      postPath
    ),
    status: 200,
  };
}

export function listMarkdownPagePaths(
  publicCatalog: PublicCatalogReadModel | null,
): ReadonlyArray<string> {
  const localizedDashboardPaths = SUPPORTED_LOCALES.filter((locale) =>
    hasRouteTranslation(DASHBOARDS_ROUTE_PATHNAME, locale)
  ).map((locale) =>
    getPagePath(getLocalizedPathname(locale, DASHBOARDS_ROUTE_PATHNAME))
  );
  const localizedDocsAndBlogPaths = SUPPORTED_LOCALES.flatMap((locale) => {
    const blogPostPaths = getBlogPosts(locale).map((post) =>
      getPagePath(getLocalizedPathname(locale, `/blog/${post.slug}/`))
    );
    const docPaths = getDocs(locale, DOC_SLUGS).map((doc) =>
      getPagePath(getLocalizedPathname(locale, `/docs/${doc.slug}/`))
    );
    const docsIndexPath = hasRouteTranslation("/docs/", locale)
      ? [getPagePath(getLocalizedPathname(locale, "/docs/"))]
      : [];
    const blogIndexPath = hasRouteTranslation("/blog/", locale)
      ? [getPagePath(getLocalizedPathname(locale, "/blog/"))]
      : [];

    return [...docsIndexPath, ...docPaths, ...blogIndexPath, ...blogPostPaths];
  });

  return [
    ...listMarketingPagePaths(),
    ...localizedDashboardPaths,
    ...localizedDocsAndBlogPaths,
    ...(publicCatalog === null
      ? []
      : listPublicCatalogMarkdownPagePaths(publicCatalog)),
  ];
}

export function renderMarkdownDocument(
  pagePath: string,
  context: MarkdownRenderContext
): MarkdownResult {
  const marketingPageResult = renderMarketingPageMarkdownDocument(pagePath, context);

  if (marketingPageResult.status === 200) {
    return marketingPageResult;
  }

  const pagePathname = pagePath === "" ? "/" : `/${pagePath}/`;
  const { locale, routePathname } = resolveLocaleFromPathname(pagePathname);
  const normalizedRoutePathname = routePathname.replace(/\/+$/, "") || "/";

  if (
    normalizedRoutePathname === DASHBOARDS_NORMALIZED_ROUTE_PATHNAME &&
    hasRouteTranslation(DASHBOARDS_ROUTE_PATHNAME, locale)
  ) {
    return renderDashboardsMarkdown(locale, context);
  }

  if (normalizedRoutePathname === "/docs" && hasRouteTranslation("/docs/", locale)) {
    return renderDocsListingMarkdown(locale);
  }

  if (normalizedRoutePathname.startsWith("/docs/")) {
    return renderDocMarkdown(locale, normalizedRoutePathname.replace(/^\/docs\//, ""));
  }

  if (normalizedRoutePathname === "/blog" && hasRouteTranslation("/blog/", locale)) {
    return renderBlogListingMarkdown(locale);
  }

  if (normalizedRoutePathname.startsWith("/blog/")) {
    return renderBlogPostMarkdown(
      locale,
      normalizedRoutePathname.replace(/^\/blog\//, "")
    );
  }

  if (context.publicCatalog !== null) {
    const publicCatalogDocument = renderPublicCatalogMarkdownDocument(
      pagePath,
      context.publicCatalog,
    );

    if (publicCatalogDocument !== null) {
      return {
        markdown: appendMarkdownFooter(
          publicCatalogDocument.markdown,
          publicCatalogDocument.locale,
          pagePath,
        ),
        status: 200,
      };
    }
  }

  return marketingPageResult;
}

export function renderLlmsText(
  globalActivitySnapshot: GlobalActivitySnapshot,
  publicCatalog: PublicCatalogReadModel | null,
): string {
  const activityCopy = getUiCopy("en").home.activity;
  const peakDailyReviewEvents = getMaxGlobalActivityDailyValue(
    globalActivitySnapshot.days,
    (day) => day.reviewEvents.total,
    "peak daily review events"
  );
  const peakDailyUniqueUsers = getMaxGlobalActivityDailyValue(
    globalActivitySnapshot.days,
    (day) => day.uniqueReviewingUsers,
    "peak daily unique users"
  );
  const dashboardsPageTitle = getDashboardsPageTitle("en");
  const dashboardsPageDescription = getDashboardsPageDescription("en");
  const dashboardsPageUrl = `${SITE_CONTEXT.siteUrl}${DASHBOARDS_ROUTE_PATHNAME}`;
  const dashboardsPageLine =
    `- [${dashboardsPageTitle}](${dashboardsPageUrl}): ${dashboardsPageDescription}`;
  const pagesSection = readAllMarketingPages("en")
    .map((pageContent) => {
      const pageHref =
        pageContent.slug === "home"
          ? `${SITE_CONTEXT.siteUrl}/`
          : `${SITE_CONTEXT.siteUrl}/${pageContent.slug}/`;

      return `- [${pageContent.title}](${pageHref}): ${pageContent.description}`;
    })
    .concat(dashboardsPageLine)
    .join("\n");

  const posts = getBlogPosts("en");

  const docsSection = getDocs("en", DOC_SLUGS).map(
    (doc) =>
      `- [${doc.title}](${SITE_CONTEXT.siteUrl}/docs/${doc.slug}/): ${doc.description}`
  ).join("\n");

  const blogSection =
    posts.length > 0
      ? posts
          .map(
            (post) =>
              `- [${post.title}](${SITE_CONTEXT.siteUrl}/blog/${post.slug}/): ${post.description}`
          )
          .join("\n")
      : "- Posts coming soon.";
  const publicActivitySection = [
    `- [${activityCopy.sourceLabel}](${globalActivitySnapshotUrl})`,
    `- ${activityCopy.lastUpdatedLabel}: ${formatActivityTimestamp("en", globalActivitySnapshot.generatedAtUtc)}`,
    `- ${activityCopy.dateRangeLabel}: ${formatActivityDateRange("en", globalActivitySnapshot.from, globalActivitySnapshot.to)}`,
    `- ${activityCopy.totalReviewEventsLabel}: ${formatActivityNumber("en", globalActivitySnapshot.totals.reviewEvents.total)}`,
    `- ${activityCopy.usersWithReviewEventsLabel}: ${formatActivityNumber("en", globalActivitySnapshot.totals.uniqueReviewingUsers)}`,
    `- ${activityCopy.daysInRangeLabel}: ${formatActivityNumber("en", globalActivitySnapshot.days.length)}`,
    `- ${activityCopy.peakDailyVolumeLabel}: ${formatActivityNumber("en", peakDailyReviewEvents)}`,
    `- ${activityCopy.peakDailyUniqueUsersLabel}: ${formatActivityNumber("en", peakDailyUniqueUsers)}`,
    `- ${activityCopy.dailyUniqueUsersChartTitle}: ${activityCopy.dailyUniqueUsersChartDescription}`,
    `- ${activityCopy.platformActivityChartTitle}: ${activityCopy.platformActivityChartDescription}`,
  ].join("\n");
  const publicCatalogSection = publicCatalog === null
    ? ""
    : `\n\n## Public Catalog\n\n${renderPublicCatalogLlmsSection(publicCatalog)}`;

  return `# Nibomo

> Open-source flashcards app with spaced repetition, web and iOS clients, agent-ready onboarding, and a self-hosted AWS/Postgres deployment path.

## Pages

${pagesSection}

## Documentation

${docsSection}

## Blog

${blogSection}
${publicCatalogSection}

## Public Activity Snapshot

${publicActivitySection}

## Links

- [GitHub Repository](${SITE_CONTEXT.githubUrl})
- [Cloud App](${SITE_CONTEXT.appUrl})

## Markdown Access

Any page on this site is available as clean Markdown for LLM consumption:
- Append \`.md\` to any URL (e.g. ${SITE_CONTEXT.siteUrl}/.md, ${SITE_CONTEXT.siteUrl}/features.md, ${SITE_CONTEXT.siteUrl}/docs/api.md)
- Or send the HTTP header \`Accept: text/markdown\` to get Markdown from the original URL`;
}

function getPagePath(pathname: string): string {
  return pathname === "/" ? "" : pathname.replace(/^\/+/, "").replace(/\/+$/, "");
}
