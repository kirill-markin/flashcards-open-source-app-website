import type { AppLocale } from "./localeConfig";

interface DocsExperienceCopy {
  readonly startHere: string;
  readonly readGuide: string;
}

const COPY: Readonly<Record<AppLocale, DocsExperienceCopy>> = {
  en: { startHere: "Start here", readGuide: "Read the guide" },
  es: { startHere: "Empieza aquí", readGuide: "Leer la guía" },
  ar: { startHere: "ابدأ هنا", readGuide: "اقرأ الدليل" },
  de: { startHere: "Hier starten", readGuide: "Anleitung lesen" },
  hi: { startHere: "यहाँ शुरू करें", readGuide: "गाइड पढ़ें" },
  ja: { startHere: "ここから始める", readGuide: "ガイドを読む" },
  fr: { startHere: "Commencez ici", readGuide: "Lire le guide" },
  pt: { startHere: "Comece aqui", readGuide: "Ler o guia" },
  ru: { startHere: "Начните здесь", readGuide: "Открыть руководство" },
  zh: { startHere: "从这里开始", readGuide: "阅读指南" },
  it: { startHere: "Inizia qui", readGuide: "Leggi la guida" },
  ko: { startHere: "여기서 시작하세요", readGuide: "가이드 읽기" },
  id: { startHere: "Mulai di sini", readGuide: "Baca panduan" },
  tr: { startHere: "Buradan başlayın", readGuide: "Kılavuzu okuyun" },
  nl: { startHere: "Begin hier", readGuide: "Lees de gids" },
  pl: { startHere: "Zacznij tutaj", readGuide: "Przeczytaj poradnik" },
  vi: { startHere: "Bắt đầu tại đây", readGuide: "Đọc hướng dẫn" },
  th: { startHere: "เริ่มที่นี่", readGuide: "อ่านคู่มือ" },
  uk: { startHere: "Почніть тут", readGuide: "Відкрити посібник" },
  he: { startHere: "התחילו כאן", readGuide: "קראו את המדריך" },
  sv: { startHere: "Börja här", readGuide: "Läs guiden" },
  da: { startHere: "Start her", readGuide: "Læs guiden" },
  nb: { startHere: "Start her", readGuide: "Les veiledningen" },
  fi: { startHere: "Aloita tästä", readGuide: "Lue opas" },
  cs: { startHere: "Začněte zde", readGuide: "Přečíst průvodce" },
  el: { startHere: "Ξεκινήστε εδώ", readGuide: "Διαβάστε τον οδηγό" },
  ro: { startHere: "Începe aici", readGuide: "Citește ghidul" },
  hu: { startHere: "Kezdd itt", readGuide: "Útmutató elolvasása" },
  fa: { startHere: "از اینجا شروع کنید", readGuide: "راهنما را بخوانید" },
  ca: { startHere: "Comença aquí", readGuide: "Llegeix la guia" },
  bn: { startHere: "এখানে শুরু করুন", readGuide: "গাইড পড়ুন" },
  gu: { startHere: "અહીંથી શરૂ કરો", readGuide: "માર્ગદર્શિકા વાંચો" },
  kn: { startHere: "ಇಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿ", readGuide: "ಮಾರ್ಗದರ್ಶಿ ಓದಿ" },
  ml: { startHere: "ഇവിടെ തുടങ്ങുക", readGuide: "ഗൈഡ് വായിക്കുക" },
  mr: { startHere: "इथून सुरुवात करा", readGuide: "मार्गदर्शक वाचा" },
  pa: { startHere: "ਇੱਥੋਂ ਸ਼ੁਰੂ ਕਰੋ", readGuide: "ਗਾਈਡ ਪੜ੍ਹੋ" },
  ta: { startHere: "இங்கே தொடங்குங்கள்", readGuide: "வழிகாட்டியைப் படிக்கவும்" },
  te: { startHere: "ఇక్కడ ప్రారంభించండి", readGuide: "మార్గదర్శిని చదవండి" },
  ur: { startHere: "یہاں سے شروع کریں", readGuide: "گائیڈ پڑھیں" },
  sw: { startHere: "Anza hapa", readGuide: "Soma mwongozo" },
  bg: { startHere: "Започнете тук", readGuide: "Прочетете ръководството" },
  et: { startHere: "Alusta siit", readGuide: "Loe juhendit" },
  hr: { startHere: "Počnite ovdje", readGuide: "Pročitajte vodič" },
  is: { startHere: "Byrjaðu hér", readGuide: "Lestu leiðbeiningarnar" },
  lt: { startHere: "Pradėkite čia", readGuide: "Skaityti vadovą" },
  lv: { startHere: "Sāciet šeit", readGuide: "Lasīt ceļvedi" },
  sk: { startHere: "Začnite tu", readGuide: "Prečítať sprievodcu" },
  sl: { startHere: "Začnite tukaj", readGuide: "Preberite vodnik" },
  zu: { startHere: "Qala lapha", readGuide: "Funda umhlahlandlela" },
};

export function getDocsExperienceCopy(locale: AppLocale): DocsExperienceCopy {
  return COPY[locale];
}
