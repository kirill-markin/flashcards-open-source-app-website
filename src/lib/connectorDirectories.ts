import type { AppLocale } from "@/lib/i18n";

export const CLAUDE_DIRECTORY_URL = "https://claude.ai/directory/nibomo";
export const OPENAI_PLUGIN_URL = "https://chatgpt.com/plugins/plugin_asdk_app_6ab77a6e971c81918b9e9185a6a19d58";

interface ConnectorDirectory {
  readonly provider: string;
  readonly providerName: string;
  readonly name: string;
  readonly href: string;
  readonly linkLabel: string;
  readonly products: string;
}

export const CONNECTOR_DIRECTORIES: readonly ConnectorDirectory[] = [
  {
    provider: "openai",
    providerName: "OpenAI",
    name: "ChatGPT",
    href: OPENAI_PLUGIN_URL,
    linkLabel: "OpenAI plugin",
    products: "ChatGPT · Codex",
  },
  {
    provider: "anthropic",
    providerName: "Anthropic",
    name: "Claude",
    href: CLAUDE_DIRECTORY_URL,
    linkLabel: "Claude MCP",
    products: "Claude · Claude Code",
  },
];

const ENGLISH_CONNECT_LABEL: string = "Connect to {provider}";
const FRENCH_CONNECT_LABEL: string = "Se connecter à {provider}";

const connectLabels: Readonly<Record<AppLocale, string>> = {
  en: ENGLISH_CONNECT_LABEL,
  es: "Conectar con {provider}",
  ar: "الاتصال بـ {provider}",
  de: "Mit {provider} verbinden",
  hi: "{provider} से कनेक्ट करें",
  ja: "{provider} に接続",
  fr: FRENCH_CONNECT_LABEL,
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
  "en-au": ENGLISH_CONNECT_LABEL,
  "en-ca": ENGLISH_CONNECT_LABEL,
  "en-gb": ENGLISH_CONNECT_LABEL,
  "fr-ca": FRENCH_CONNECT_LABEL,
  "pt-pt": "Ligar a {provider}",
  "zh-hant": "連接至 {provider}",
  ms: "Sambung ke {provider}",
  or: "{provider} ସହ ଯୋଡ଼ନ୍ତୁ",
};

export function getConnectorDirectoryLabel(locale: AppLocale, provider: string): string {
  return connectLabels[locale].replace("{provider}", provider);
}
