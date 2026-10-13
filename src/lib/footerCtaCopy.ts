import type { AppLocale } from "./localeConfig";

interface FooterCtaCopy {
  readonly title: string;
  readonly descriptionLines: readonly [string, string];
}

type FooterCtaText = readonly [title: string, firstLine: string, secondLine: string];

const FOOTER_CTA_TEXT: Readonly<Record<AppLocale, FooterCtaText>> = {
  en: ["Learn something. Keep it.", "A topic, a few notes, your first card.", "That’s a good place to begin."],
  es: ["Aprende algo. Recuérdalo.", "Un tema, unas notas, tu primera tarjeta.", "Es un buen punto de partida."],
  ar: ["تعلّم شيئًا. واحتفظ به.", "موضوع، وبعض الملاحظات، وبطاقتك الأولى.", "هذه بداية جيدة."],
  de: ["Lerne etwas. Behalte es.", "Ein Thema, ein paar Notizen, deine erste Karte.", "Das ist ein guter Anfang."],
  hi: ["कुछ सीखें। याद रखें।", "एक विषय, कुछ नोट्स, आपका पहला कार्ड।", "शुरुआत के लिए इतना काफ़ी है।"],
  ja: ["学んだことを、覚えておこう。", "ひとつのテーマ、少しのメモ、最初のカード。", "まずはそこから始めましょう。"],
  fr: ["Apprenez quelque chose. Retenez-le.", "Un sujet, quelques notes, votre première carte.", "C’est un bon début."],
  pt: ["Aprenda algo. Guarde na memória.", "Um tema, algumas notas, seu primeiro cartão.", "É um bom começo."],
  ru: ["Узнайте что-то. Запомните это.", "Тема, несколько заметок, ваша первая карточка.", "Хорошее начало."],
  zh: ["学到新知识，记在心里。", "一个主题，几条笔记，你的第一张卡片。", "这就是一个好的开始。"],
  it: ["Impara qualcosa. Ricordalo.", "Un argomento, qualche appunto, la tua prima scheda.", "È un buon punto di partenza."],
  ko: ["새롭게 배우고, 오래 기억하세요.", "주제 하나, 몇 가지 메모, 첫 번째 카드.", "그렇게 시작하면 됩니다."],
  id: ["Pelajari sesuatu. Ingatlah.", "Satu topik, beberapa catatan, kartu pertamamu.", "Itu awal yang baik."],
  tr: ["Bir şey öğren. Aklında tut.", "Bir konu, birkaç not, ilk kartın.", "Başlamak için güzel bir adım."],
  nl: ["Leer iets. Onthoud het.", "Een onderwerp, een paar notities, je eerste kaart.", "Dat is een goed begin."],
  pl: ["Naucz się czegoś. Zapamiętaj to.", "Temat, kilka notatek, Twoja pierwsza fiszka.", "To dobry początek."],
  vi: ["Học điều mới. Ghi nhớ lâu.", "Một chủ đề, vài ghi chú, thẻ đầu tiên của bạn.", "Đó là một khởi đầu tốt."],
  th: ["เรียนรู้สิ่งใหม่ แล้วจดจำไว้", "หนึ่งหัวข้อ โน้ตไม่กี่บรรทัด และการ์ดใบแรกของคุณ", "เริ่มต้นแค่นี้ก็ดีแล้ว"],
  uk: ["Дізнайтеся щось. Запам’ятайте це.", "Тема, кілька нотаток, ваша перша картка.", "Гарний початок."],
  he: ["למדו משהו. זכרו אותו.", "נושא, כמה הערות, הכרטיס הראשון שלכם.", "זו התחלה טובה."],
  sv: ["Lär dig något. Kom ihåg det.", "Ett ämne, några anteckningar, ditt första kort.", "Det är en bra början."],
  da: ["Lær noget. Husk det.", "Et emne, et par noter, dit første kort.", "Det er en god begyndelse."],
  nb: ["Lær noe. Husk det.", "Et tema, noen notater, ditt første kort.", "Det er en god start."],
  fi: ["Opi jotain. Muista se.", "Aihe, muutama muistiinpano, ensimmäinen korttisi.", "Siitä on hyvä aloittaa."],
  cs: ["Naučte se něco. Zapamatujte si to.", "Téma, pár poznámek, vaše první kartička.", "To je dobrý začátek."],
  el: ["Μάθε κάτι. Κράτησέ το στη μνήμη σου.", "Ένα θέμα, λίγες σημειώσεις, η πρώτη σου κάρτα.", "Είναι μια καλή αρχή."],
  ro: ["Învață ceva. Ține minte.", "Un subiect, câteva notițe, primul tău card.", "E un început bun."],
  hu: ["Tanulj valamit. Emlékezz rá.", "Egy téma, néhány jegyzet, az első kártyád.", "Ez jó kezdet."],
  fa: ["چیزی یاد بگیرید. به خاطر بسپارید.", "یک موضوع، چند یادداشت، اولین کارت شما.", "این شروع خوبی است."],
  ca: ["Aprèn alguna cosa. Recorda-la.", "Un tema, unes notes, la teva primera targeta.", "És un bon punt de partida."],
  bn: ["কিছু শিখুন। মনে রাখুন।", "একটি বিষয়, কয়েকটি নোট, আপনার প্রথম কার্ড।", "শুরু করার জন্য এটুকুই যথেষ্ট।"],
  gu: ["કંઈક શીખો. યાદ રાખો.", "એક વિષય, થોડી નોંધો, તમારું પહેલું કાર્ડ.", "શરૂઆત માટે આટલું પૂરતું છે."],
  kn: ["ಏನಾದರೂ ಕಲಿಯಿರಿ. ನೆನಪಿಟ್ಟುಕೊಳ್ಳಿ.", "ಒಂದು ವಿಷಯ, ಕೆಲವು ಟಿಪ್ಪಣಿಗಳು, ನಿಮ್ಮ ಮೊದಲ ಕಾರ್ಡ್.", "ಇದು ಒಳ್ಳೆಯ ಆರಂಭ."],
  ml: ["പുതിയതൊന്ന് പഠിക്കൂ. ഓർത്തുവെക്കൂ.", "ഒരു വിഷയം, കുറച്ച് കുറിപ്പുകൾ, നിങ്ങളുടെ ആദ്യ കാർഡ്.", "അതൊരു നല്ല തുടക്കമാണ്."],
  mr: ["काहीतरी शिका. लक्षात ठेवा.", "एक विषय, काही नोंदी, तुमचे पहिले कार्ड.", "ही चांगली सुरुवात आहे."],
  pa: ["ਕੁਝ ਸਿੱਖੋ। ਯਾਦ ਰੱਖੋ।", "ਇੱਕ ਵਿਸ਼ਾ, ਕੁਝ ਨੋਟਸ, ਤੁਹਾਡਾ ਪਹਿਲਾ ਕਾਰਡ।", "ਸ਼ੁਰੂਆਤ ਲਈ ਇੰਨਾ ਹੀ ਕਾਫ਼ੀ ਹੈ।"],
  ta: ["ஏதாவது கற்றுக்கொள்ளுங்கள். நினைவில் வைத்திருங்கள்.", "ஒரு தலைப்பு, சில குறிப்புகள், உங்கள் முதல் அட்டை.", "இது ஒரு நல்ல தொடக்கம்."],
  te: ["కొత్తది నేర్చుకోండి. గుర్తుంచుకోండి.", "ఒక అంశం, కొన్ని గమనికలు, మీ మొదటి కార్డు.", "ఇది మంచి ప్రారంభం."],
  ur: ["کچھ سیکھیں۔ یاد رکھیں۔", "ایک موضوع، چند نوٹس، آپ کا پہلا کارڈ۔", "یہ ایک اچھی شروعات ہے۔"],
  sw: ["Jifunze kitu. Kikumbuke.", "Mada moja, maelezo machache, kadi yako ya kwanza.", "Huo ni mwanzo mzuri."],
  bg: ["Научи нещо. Запомни го.", "Тема, няколко бележки, първата ти карта.", "Това е добро начало."],
  et: ["Õpi midagi. Jäta see meelde.", "Üks teema, paar märkust, sinu esimene kaart.", "See on hea algus."],
  hr: ["Nauči nešto. Zapamti to.", "Tema, nekoliko bilježaka, tvoja prva kartica.", "To je dobar početak."],
  is: ["Lærðu eitthvað. Mundu það.", "Efni, nokkrar glósur, fyrsta spjaldið þitt.", "Það er góð byrjun."],
  lt: ["Sužinok ką nors. Įsimink.", "Tema, kelios pastabos, tavo pirmoji kortelė.", "Tai gera pradžia."],
  lv: ["Iemācies ko jaunu. Atceries to.", "Tēma, dažas piezīmes, tava pirmā kartīte.", "Tas ir labs sākums."],
  sk: ["Naučte sa niečo. Zapamätajte si to.", "Téma, pár poznámok, vaša prvá kartička.", "To je dobrý začiatok."],
  sl: ["Nauči se nekaj. Zapomni si.", "Tema, nekaj zapiskov, tvoja prva kartica.", "To je dober začetek."],
  zu: ["Funda okuthile. Kukhumbule.", "Isihloko, amanothi ambalwa, ikhadi lakho lokuqala.", "Kuyisiqalo esihle."],
};

export function getFooterCtaCopy(locale: AppLocale): FooterCtaCopy {
  const [title, firstLine, secondLine] = FOOTER_CTA_TEXT[locale];
  return { title, descriptionLines: [firstLine, secondLine] };
}
