import type { AppLocale } from "@/lib/i18n";

interface HomeDeviceCopy {
  readonly byDevice: string;
  readonly web: string;
}

const HOME_DEVICE_COPY: Readonly<Record<AppLocale, HomeDeviceCopy>> = {
  en: { byDevice: "By device", web: "Web" },
  es: { byDevice: "Por dispositivo", web: "Web" },
  ar: { byDevice: "حسب الجهاز", web: "الويب" },
  de: { byDevice: "Nach Gerät", web: "Web" },
  hi: { byDevice: "डिवाइस के अनुसार", web: "वेब" },
  ja: { byDevice: "デバイス別", web: "ウェブ" },
  fr: { byDevice: "Par appareil", web: "Web" },
  pt: { byDevice: "Por dispositivo", web: "Web" },
  ru: { byDevice: "По устройству", web: "Веб" },
  zh: { byDevice: "按设备", web: "网页版" },
  it: { byDevice: "Per dispositivo", web: "Web" },
  ko: { byDevice: "기기별", web: "웹" },
  id: { byDevice: "Menurut perangkat", web: "Web" },
  tr: { byDevice: "Cihaza göre", web: "Web" },
  nl: { byDevice: "Per apparaat", web: "Web" },
  pl: { byDevice: "Według urządzenia", web: "Przeglądarka" },
  vi: { byDevice: "Theo thiết bị", web: "Web" },
  th: { byDevice: "ตามอุปกรณ์", web: "เว็บ" },
  uk: { byDevice: "За пристроєм", web: "Веб" },
  he: { byDevice: "לפי מכשיר", web: "דפדפן" },
  sv: { byDevice: "Efter enhet", web: "Webb" },
  da: { byDevice: "Efter enhed", web: "Web" },
  nb: { byDevice: "Etter enhet", web: "Nettleser" },
  fi: { byDevice: "Laitteen mukaan", web: "Selain" },
  cs: { byDevice: "Podle zařízení", web: "Web" },
  el: { byDevice: "Ανά συσκευή", web: "Ιστός" },
  ro: { byDevice: "După dispozitiv", web: "Web" },
  hu: { byDevice: "Eszköz szerint", web: "Web" },
  fa: { byDevice: "بر اساس دستگاه", web: "وب" },
  ca: { byDevice: "Per dispositiu", web: "Web" },
  bn: { byDevice: "ডিভাইস অনুযায়ী", web: "ওয়েব" },
  gu: { byDevice: "ડિવાઇસ પ્રમાણે", web: "વેબ" },
  kn: { byDevice: "ಸಾಧನದ ಪ್ರಕಾರ", web: "ವೆಬ್" },
  ml: { byDevice: "ഉപകരണത്തിനനുസരിച്ച്", web: "വെബ്" },
  mr: { byDevice: "डिव्हाइसनुसार", web: "वेब" },
  pa: { byDevice: "ਡਿਵਾਈਸ ਅਨੁਸਾਰ", web: "ਵੈੱਬ" },
  ta: { byDevice: "சாதனத்தின்படி", web: "இணையம்" },
  te: { byDevice: "పరికరం ప్రకారం", web: "వెబ్" },
  ur: { byDevice: "ڈیوائس کے مطابق", web: "ویب" },
  sw: { byDevice: "Kwa kifaa", web: "Wavuti" },
  bg: { byDevice: "По устройство", web: "Уеб" },
  et: { byDevice: "Seadme järgi", web: "Veeb" },
  hr: { byDevice: "Prema uređaju", web: "Web" },
  is: { byDevice: "Eftir tæki", web: "Vefur" },
  lt: { byDevice: "Pagal įrenginį", web: "Žiniatinklis" },
  lv: { byDevice: "Pēc ierīces", web: "Tīmeklis" },
  sk: { byDevice: "Podľa zariadenia", web: "Web" },
  sl: { byDevice: "Po napravi", web: "Splet" },
  zu: { byDevice: "Ngedivayisi", web: "Iwebhu" },
};

export function getHomeDeviceCopy(locale: AppLocale): HomeDeviceCopy {
  return HOME_DEVICE_COPY[locale];
}
