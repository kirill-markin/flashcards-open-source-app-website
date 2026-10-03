import type { AppLocale } from "@/lib/i18n";

export const CLAUDE_DIRECTORY_URL = "https://claude.ai/directory/nibomo";

interface ConnectorDirectory {
  readonly provider: string;
  readonly providerName: string;
  readonly name: string;
  readonly href: string;
}

export const CONNECTOR_DIRECTORIES: readonly ConnectorDirectory[] = [
  { provider: "anthropic", providerName: "Anthropic", name: "Claude", href: CLAUDE_DIRECTORY_URL },
];

const connectLabels: Readonly<Record<AppLocale, string>> = {
  en: "Connect to {provider}",
  es: "Conectar con {provider}",
  ar: "الاتصال بـ {provider}",
  de: "Mit {provider} verbinden",
  hi: "{provider} से कनेक्ट करें",
  ja: "{provider} に接続",
  fr: "Se connecter à {provider}",
  pt: "Conectar ao {provider}",
  ru: "Подключить к {provider}",
  zh: "连接到 {provider}",
  it: "Connetti a {provider}",
  ko: "연결: {provider}",
  id: "Hubungkan ke {provider}",
  tr: "{provider} ile bağlan",
  nl: "Verbinden met {provider}",
  pl: "Połącz z {provider}",
  vi: "Kết nối với {provider}",
  th: "เชื่อมต่อกับ {provider}",
  uk: "Підключити до {provider}",
  he: "התחברות ל־{provider}",
  sv: "Anslut till {provider}",
  da: "Forbind til {provider}",
  nb: "Koble til {provider}",
  fi: "Yhdistä palveluun {provider}",
  cs: "Připojit k {provider}",
  el: "Σύνδεση με το {provider}",
  ro: "Conectează la {provider}",
  hu: "Csatlakozás a következőhöz: {provider}",
  fa: "اتصال به {provider}",
  ca: "Connecta amb {provider}",
  bn: "সংযোগ করুন: {provider}",
  gu: "{provider} સાથે જોડાઓ",
  kn: "{provider} ಗೆ ಸಂಪರ್ಕಿಸಿ",
  ml: "ബന്ധിപ്പിക്കുക: {provider}",
  mr: "{provider} शी कनेक्ट करा",
  pa: "{provider} ਨਾਲ ਜੁੜੋ",
  ta: "{provider} உடன் இணைக்கவும்",
  te: "కనెక్ట్ చేయండి: {provider}",
  ur: "{provider} سے جڑیں",
  sw: "Unganisha na {provider}",
  bg: "Свържете се с {provider}",
  et: "Ühenda teenusega {provider}",
  hr: "Poveži s uslugom {provider}",
  is: "Tengjast {provider}",
  lt: "Prisijungti prie {provider}",
  lv: "Savienot ar {provider}",
  sk: "Pripojiť k {provider}",
  sl: "Poveži z {provider}",
  zu: "Xhuma ku-{provider}",
};

export function getConnectorDirectoryLabel(locale: AppLocale, provider: string): string {
  return connectLabels[locale].replace("{provider}", provider);
}

const openAiDirectoryNotices: Readonly<Record<AppLocale, string>> = {
  en: "Not in the directory yet. Please use the MCP URL below.",
  es: "Aún no está en el directorio. Usa la URL de MCP de abajo.",
  ar: "غير متاح في الدليل بعد. يُرجى استخدام رابط MCP أدناه.",
  de: "Noch nicht im Verzeichnis. Bitte verwende die MCP-URL unten.",
  hi: "अभी डायरेक्टरी में नहीं है। नीचे दिया गया MCP URL इस्तेमाल करें।",
  ja: "まだディレクトリに掲載されていません。下の MCP URL を使ってください。",
  fr: "Pas encore dans l’annuaire. Utilisez l’URL MCP ci-dessous.",
  pt: "Ainda não está no diretório. Use a URL MCP abaixo.",
  ru: "Пока нет в каталоге. Используйте MCP URL ниже.",
  zh: "尚未加入目录。请使用下方的 MCP URL。",
  it: "Non ancora nella directory. Usa l’URL MCP qui sotto.",
  ko: "아직 디렉터리에 없습니다. 아래 MCP URL을 사용하세요.",
  id: "Belum ada di direktori. Gunakan URL MCP di bawah.",
  tr: "Henüz dizinde yok. Lütfen aşağıdaki MCP URL’sini kullanın.",
  nl: "Nog niet in de directory. Gebruik de MCP-URL hieronder.",
  pl: "Jeszcze nie ma w katalogu. Użyj adresu URL MCP poniżej.",
  vi: "Chưa có trong danh mục. Vui lòng dùng URL MCP bên dưới.",
  th: "ยังไม่มีในไดเรกทอรี โปรดใช้ URL MCP ด้านล่าง",
  uk: "Поки немає в каталозі. Використовуйте MCP URL нижче.",
  he: "עדיין לא מופיע במדריך. השתמשו בכתובת MCP שלמטה.",
  sv: "Finns inte i katalogen än. Använd MCP-adressen nedan.",
  da: "Ikke i kataloget endnu. Brug MCP-URL’en nedenfor.",
  nb: "Ikke i katalogen ennå. Bruk MCP-adressen nedenfor.",
  fi: "Ei vielä hakemistossa. Käytä alla olevaa MCP-URL-osoitetta.",
  cs: "Zatím není v katalogu. Použijte MCP URL níže.",
  el: "Δεν είναι ακόμη στον κατάλογο. Χρησιμοποιήστε το MCP URL παρακάτω.",
  ro: "Nu este încă în director. Folosește URL-ul MCP de mai jos.",
  hu: "Még nincs a katalógusban. Használd az alábbi MCP URL-t.",
  fa: "هنوز در فهرست نیست. لطفاً از نشانی MCP زیر استفاده کنید.",
  ca: "Encara no és al directori. Utilitza l’URL MCP de sota.",
  bn: "এখনও ডিরেক্টরিতে নেই। নিচের MCP URL ব্যবহার করুন।",
  gu: "હજી ડિરેક્ટરીમાં નથી. નીચેનો MCP URL વાપરો.",
  kn: "ಇನ್ನೂ ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ ಇಲ್ಲ. ಕೆಳಗಿನ MCP URL ಬಳಸಿ.",
  ml: "ഇതുവരെ ഡയറക്ടറിയിൽ ഇല്ല. താഴെയുള്ള MCP URL ഉപയോഗിക്കുക.",
  mr: "अजून डायरेक्टरीत नाही. खालील MCP URL वापरा.",
  pa: "ਹਾਲੇ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਨਹੀਂ ਹੈ। ਹੇਠਾਂ ਦਿੱਤਾ MCP URL ਵਰਤੋ।",
  ta: "இன்னும் அடைவில் இல்லை. கீழே உள்ள MCP URL-ஐப் பயன்படுத்தவும்.",
  te: "ఇంకా డైరెక్టరీలో లేదు. దిగువ MCP URL ఉపయోగించండి.",
  ur: "ابھی ڈائریکٹری میں نہیں ہے۔ نیچے دیا گیا MCP URL استعمال کریں۔",
  sw: "Bado haipo kwenye saraka. Tumia URL ya MCP hapa chini.",
  bg: "Все още не е в каталога. Използвайте MCP URL по-долу.",
  et: "Veel pole kataloogis. Kasuta allolevat MCP URL-i.",
  hr: "Još nije u katalogu. Upotrijebite MCP URL u nastavku.",
  is: "Ekki enn í skránni. Notaðu MCP-slóðina hér fyrir neðan.",
  lt: "Dar nėra kataloge. Naudokite žemiau pateiktą MCP URL.",
  lv: "Vēl nav katalogā. Izmantojiet zemāk norādīto MCP URL.",
  sk: "Zatiaľ nie je v katalógu. Použite MCP URL nižšie.",
  sl: "Še ni v imeniku. Uporabite spodnji MCP URL.",
  zu: "Ayikabi ohlwini. Sebenzisa i-URL ye-MCP engezansi.",
};

export function getOpenAiDirectoryNotice(locale: AppLocale): string {
  return openAiDirectoryNotices[locale];
}
