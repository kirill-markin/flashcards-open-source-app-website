---
title: "Alternativy k Anki v roce 2026: co si při přechodu zachováte, co ztratíte a co získáte"
description: "Srovnání sedmi alternativ k Anki podle věrnosti migrace, fungování offline, plánování, ceny, přístupu ke kódu a vlastního hostování. Kdy je bezpečnější zůstat u Anki?"
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternativy k Anki"
  - "alternativa k Anki"
  - "aplikace jako Anki"
  - "open source alternativa k Anki"
  - "bezplatné alternativy k Anki"
  - "alternativa k Anki pro iOS"
  - "přechod z Anki"
---

Import z Anki může skončit bez chyby, a přesto vás připravit o to, díky čemu váš balíček funguje. Text se přenese. Karty se otevřou. Pak zjistíte, že chybí CSS, pole se zvukem je prázdné, všechny karty jsou nové nebo že z jedné poznámky už nevznikají karty v očekávaných směrech.

Právě tyto ztráty mohou přechod z Anki prodražit. Přehlednější editor nebo levnější tarif snadno posoudíte ještě před přechodem. Co se ale stane se šablonami, historií opakování, termíny, doplňky a médii dostupnými offline a zda půjdou data zase vyexportovat, často zjistíte až ve chvíli, kdy už vznikla škoda.

Toto srovnání proto začíná tím, co se při přenosu zachová. Zahrnuje sedm aplikací podobných Anki: co každá dokáže převzít ze stávající sbírky, co se po importu změní a kdy je bezpečnější zůstat u Anki.

> **Vztah autora k produktům:** Jsem Kirill Markin a vyvíjím [Nibomo](https://nibomo.com/), jeden z níže uvedených produktů. Zařadil jsem ho kvůli otevřenému zdrojovému kódu, možnosti vlastního hostování a práci s agenty. Není automatickým vítězem: nemá přímý import `.apkg`, při migraci z Anki se část dat ztrácí a provoz na vlastní infrastruktuře vyžaduje skutečnou správu celého systému.

**Fakta ověřena:** 28. srpna 2026. Ceny odpovídají veřejným cenám pro USA nebo uvedeným místním cenám dostupným k tomuto datu. Výslednou částku mohou změnit daně, region, nabídky pro školství a platby přes obchody s aplikacemi.

![Hodinář kontroluje, zda se osvědčený strojek kapesních hodinek vejde do jiného pouzdra](/blog/best-anki-alternatives.png)

## Stručná odpověď, než začnete cokoli přesouvat

Výchozí volbou by mělo být zůstat u Anki. Přejděte jinam pouze tehdy, když jiná aplikace odstraní opakující se problém a tento přínos stojí za migraci.

Tři produkty přijímají balíčky Anki včetně údajů o učení, ale každý zachovává něco jiného:

- **Mnemosyne** v dokumentaci uvádí úplný import z Anki včetně vlastních typů karet a údajů o učení. Z porovnávaných aplikací se nejvíce blíží tradiční práci v lokální desktopové aplikaci s otevřeným kódem, i když nemá nativní aplikaci pro iOS.
- **Mochi** importuje soubory `.apkg` s historií opakování. Převádí HTML na Markdown, odstraňuje CSS a JavaScript a čtyři tlačítka hodnocení v Anki nahrazuje volbami Remembered a Forgot.
- **RemNote** importuje soubory `.apkg`, většinu typů poznámek a historii opakování. Jeho současný návod ale také říká, že importované karty přejdou do samostatné fronty **Need to Learn**. „Importovaná historie opakování“ tedy neznamená „přesně zkopírovaná dnešní fronta z Anki“.

U zbývajících čtyř jde o nové vytvoření obsahu, nikoli o migraci sbírky:

- **Quizlet** se hodí pro veřejné sady, třídy, hry a řízené procvičování.
- **Brainscape** nabízí skupině jednodušší opakování s hodnocením jistoty na stupnici 1–5.
- **SuperMemo** znamená přechod na jeho vlastní metodu a katalog kurzů.
- **Nibomo** nabízí webovou aplikaci i nativní klienty pod licencí MIT, backend na vlastní infrastruktuře a přístup přes API a MCP. Jeho postup založený na TXT nebo CSV a následné kontrole návrhů nezachovává stav učení z Anki.

Pokud vaše karty závisejí na přesném vykreslování, doplňcích nebo současné frontě opakování, zůstat u Anki není nerozhodnost. Je to odpověď.

## Nejprve si ujasněte, co vaše sbírka v Anki skutečně obsahuje

„Balíček“ není jeden přenositelný objekt. Než začnete porovnávat produkty, rozdělte si jednotlivé části, které možná budete přesouvat.

| Část sbírky | Co může Anki vložit do balíčku | Co musí cílová aplikace výslovně podporovat |
| --- | --- | --- |
| **Obsah poznámek** | Textová pole a uložené HTML | Mapování polí, doplňovačky, text mimo latinku, kód a zalomení řádků |
| **Generování karet** | Typy poznámek a šablony karet | Karty v obou směrech, vlastní pole, CSS a chování JavaScriptu |
| **Média** | Místní obrázky, zvuk a další soubory při zapnuté volbě **Include media** | Rozbalení souborů, odkazy na ně, podporované formáty a synchronizaci mezi zařízeními |
| **Uspořádání** | Balíčky, podbalíčky, štítky a volitelně předvolby balíčků | Hierarchii, význam štítků, předvolby a vymezení obsahu ke studiu |
| **Stav učení** | Informace o plánování a historii opakování, pokud jsou zahrnuty | Termíny opakování, intervaly, zapomenutí již naučených karet a převod do cílového plánovače |
| **Doplňky pro práci se sbírkou** | Doplňky nejsou součástí exportovaného balíčku | Náhradu nástrojů pro procházení sbírky, hromadných úprav, generování poznámek a dalších funkcí doplňků |

[Příručka k exportu z Anki](https://docs.ankiweb.net/exporting.html) popisuje všechny tyto možnosti balíčků. Textový importér vidí pouze první řádek tabulky a případně štítky. Přímý importér `.apkg` může vidět více, ale každý produkt sám určuje, co převede a co zahodí.

Proto je tvrzení „umí import z Anki“ příliš vágní na to, abyste se podle něj rozhodli pro přechod. Položte si tři samostatné otázky:

1. **Má karta stále stejný význam?** Zkontrolujte pole, směry vygenerovaných karet, doplňovačky, média a vykreslení.
2. **Ví cílová aplikace, co už umím?** Zkontrolujte záznamy opakování, aktuální stav, termíny a první skutečnou frontu.
3. **Mohu zase odejít?** Proveďte export z cílové aplikace a prohlédněte si, co výstupní formát skutečně obsahuje.

Importér může obstát u první otázky a selhat u zbývajících dvou.

## Co se při migraci zachová

| Produkt | Cesta importu z Anki | Stav učení | Hlavní možné ztráty ke kontrole |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Přímý import `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) pro většinu typů poznámek, média a historii opakování | Historie opakování se přenese, ale importované karty vstoupí do samostatné fronty **Need to Learn** v RemNote | Složitější CSS, vlastní JavaScript, některé způsoby generování řeči z textu (TTS) a přejmenovaná pole pro zakrývání obrázků |
| [Mochi](https://mochi.cards/) | [Přímý import `.apkg`](https://mochi.cards/docs/import-and-export/importing/) včetně historie opakování | Historie se přenese; dokumentace neslibuje totožnou frontu ani termíny jako v Anki | HTML se změní na Markdown; CSS a JavaScript se odstraní; další hodnocení má jen dvě možnosti |
| [Mnemosyne](https://mnemosyne-proj.org/) | Projekt dokumentuje [úplný import z Anki](https://mnemosyne-proj.org/features) s vlastními typy karet a údaji o učení | Údaje o učení se importují do jiného plánovače | Přesné chování šablon, převedené termíny a vykreslení karet je stále potřeba vyzkoušet |
| [Quizlet](https://quizlet.com/) | [Vložení pojmů a definic](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Z Anki se nepřenáší | Typy poznámek, šablony, balíčky, struktura médií a veškeré údaje o plánování |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX nebo ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Z Anki se nepřenáší | Šablony, doplňky, pravidla pro média a veškeré údaje o plánování |
| [SuperMemo](https://www.supermemo.com/) | [Vložení řádků s otázkou a odpovědí rozdělenými oddělovacím znakem](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), nejvýše 100 najednou | Z Anki se nepřenáší | Struktura sbírky, média, šablony a veškeré údaje o plánování |
| [Nibomo](https://nibomo.com/) | Návrhy vytvořené s pomocí AI z TXT nebo CSV z Anki a následně zkontrolované | Z Anki se nepřenáší | Bez podpory `.apkg`; šablony, věrné zachování médií, hierarchie balíčků a veškeré údaje o plánování se nepřenášejí |

## Cena, fungování offline, plánování a kontrola nad aplikací

| Produkt | Cena ověřená 28. srpna 2026 | Omezení offline režimu | Plánovač | Zdrojový kód a vlastní hostování |
| --- | --- | --- | --- | --- |
| **RemNote** | [Zdarma; Pro za 8 USD měsíčně při platbě 96 USD ročně](https://www.remnote.com/pricing) | Nainstalované aplikace umožňují po přihlášení úpravy i opakování offline. Desktop uchovává všechna média znalostní báze; mobil ukládá do mezipaměti jen některé nedávné obrázky. Web potřebuje již otevřenou kartu prohlížeče. | [Anki SM-2 nebo beta FSRS v6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Proprietární jádro; není zdokumentován podporovaný způsob vlastního hostování |
| **Mochi** | [Offline zdarma; synchronizace Pro za 5 USD měsíčně](https://mochi.cards/#pricing-section) | Nainstalované aplikace fungují zcela offline bez účtu. Úložiště prohlížeče může být vymazáno. | [Plánovač Mochi nebo FSRS](https://mochi.cards/docs/reviewing/fsrs/), oba s volbami Remembered / Forgot | Proprietární jádro; veřejné repozitáře obsahují integrace, nikoli aplikaci pro vlastní hostování |
| **Mnemosyne** | Zdarma | [Lokální práce na desktopu a opakování offline na Androidu](https://mnemosyne-proj.org/download-mnemosyne.php); na Androidu nelze upravovat. Bez nativní aplikace pro iOS. | Adaptivní plánování podle toho, jak dobře si odpověď vybavíte, na stupnici 0–5 | Licence zdrojového kódu se liší podle komponenty; vlastní synchronizační server na desktopu nebo stroji bez grafického rozhraní |
| **Quizlet** | Základní použití zdarma; [Plus za 35,99 USD ročně, Plus Unlimited za 44,99 USD ročně](https://quizlet.com/upgrade?source=signup) | Stažené sady fungují offline v aplikacích pro iOS a Android v režimech Flashcards a Match. | [Rozložené opakování na webu](https://quizlet.com/features/spaced-repetition) pro sady se 100 a více pojmy; podpora mobilů je stále označena jako připravovaná. Learn je samostatné adaptivní procvičování. | Proprietární hostovaná služba; bez podporovaného vlastního hostování |
| **Brainscape** | [Zdarma; Pro za 7,99 USD měsíčně při roční platbě](https://www.brainscape.com/pricing) | [Mobilní aplikace uchovává změny i offline a po připojení synchronizuje dříve stažené třídy](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); dokumentace neslibuje úplnou lokální knihovnu. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), hodnocení 1–5 | Proprietární hostovaná služba; bez podporovaného vlastního hostování |
| **SuperMemo** | Bezplatný účet s omezeními; [35,99 PLN měsíčně nebo 359 PLN ročně](https://www.supermemo.com/en/premium-subscription) | Stažené mobilní kurzy fungují offline; úpravy, AI, vyhledávání, nahrávky a statistiky nikoli. | [Proprietární metoda SuperMemo](https://www.supermemo.com/en/supermemo-method) | Proprietární hostovaná služba; bez podporovaného vlastního hostování |
| **Nibomo** | [Základ hostované služby zdarma během bety; software pro vlastní hostování zdarma](/cs/pricing/), navíc náklady na vlastní infrastrukturu | Nativní aplikace zapisují lokálně po online přihlášení a prvním načtení dat pracovního prostoru; vzdálená média už musí být v mezipaměti. | [FSRS](/docs/architecture/#scheduling) | MIT; podporované produkční nasazení zahrnuje celý systém postavený především na AWS |

Tyto tabulky nejsou bodovým hodnocením. Pokud máte 30 000 dlouhodobě naučených karet, může být přímý importér důležitější než všechny ostatní funkce. Nativní aplikace pro iPhone může rozhodnout, pokud opakujete právě na něm. Přístup ke zdrojovému kódu má význam jen tehdy, když ho budete udržovat vy nebo někdo, komu důvěřujete.

Každý uvedený produkt nabízí možnost začít zdarma, ale přechod na bezplatnou alternativu k Anki má své náklady. Cenu předplatného spočítáte snadno. Obnova šablon, kontrola médií a budování nové historie opakování často stojí více.

## RemNote: přesuňte karty do propojených poznámek

RemNote mění způsob, jakým karty vznikají. Místo samostatného balíčku vedle poznámek z přednášek vytváříte karty přímo v osnově, dokumentu nebo při práci s PDF. To je skutečný důvod odejít z Anki, pokud vám nejvíc času zabírá kopírování materiálu mezi aplikací na poznámky a aplikací na kartičky.

Import přenáší mnoho údajů, ale u fronty k opakování je potřeba rozlišovat, co to přesně znamená. [Současný návod RemNote k importu z Anki](https://help.remnote.com/en/articles/6751471-importing-from-anki) doporučuje exportovat `.apkg` s informacemi o plánování, předvolbami balíčků a médii. Importuje historii opakování a většinu typů poznámek včetně základních karet, doplňovaček a běžných karet se zakrýváním obrázků.

Stejný návod říká, že nově importované karty míří do samostatné fronty **Need to Learn**. RemNote tedy má historii k dispozici, ale dokumentace neslibuje, že se vaše současná fronta k opakování z Anki objeví beze změny. Složitější CSS se také zahodí, vlastní JavaScript není podporován, některé způsoby převodu textu na řeč za běhu nefungují a import karet se zakrýváním obrázků závisí na očekávaných názvech poznámek a polí.

Vyzkoušejte reprezentativní balíček a prohlédněte si karty i první frontu. Import, který dobře vypadá, je jen polovina testu.

Nainstalované desktopové a mobilní aplikace fungují po instalaci a přihlášení offline. [Návod k offline režimu](https://help.remnote.com/en/articles/6752029-offline-mode) vymezuje důležité omezení médií: desktop ukládá všechny obrázky a PDF ze znalostní báze, zatímco mobil má v mezipaměti jen některé nedávné obrázky. Webová aplikace může pokračovat v již otevřené kartě prohlížeče, ale bez připojení ji nově nespustíte.

RemNote používejte, pokud vám propojené poznámky stojí za změnu uspořádání sbírky. U Anki zůstaňte, pokud šablony karet a doplňky tvoří samotný systém a nejsou jen jeho ozdobou.

## Mochi: lokální Markdown s úplným exportem ve vlastním formátu

Mochi je jednodušší aplikace pro lidi, kteří chtějí lokální data, karty psané v Markdownu a méně ovládacích prvků na obrazovce. Jeho nainstalované aplikace běží na všech hlavních desktopových a mobilních platformách a lze je používat [zcela offline bez účtu](https://mochi.cards/docs/getting-started/download-and-install/). Platí se za synchronizaci, 5 USD měsíčně.

Přímý importér z Anki přenáší historii opakování, takže Mochi zachovává podstatně více než aplikace, které přijímají jen text. Způsob převodu je navíc popsán nezvykle jasně: Mochi odstraní CSS a JavaScript a převede HTML na Markdown. To funguje, když význam spočívá v textu a běžných přílohách. Pokud význam nese šablona, je to varování.

Mochi nyní nabízí dva plánovače. Výchozí zůstává jeho vlastní algoritmus, ale [lze zapnout FSRS](https://mochi.cards/docs/reviewing/fsrs/) bez vynulování dosavadního pokroku v Mochi. FSRS odvozuje stav karty z historie opakování, kterou má Mochi k dispozici. Hodnocení má i s FSRS jen dvě možnosti, Remembered nebo Forgot. Uživatelé Anki, kteří spoléhají na Hard a Easy jako samostatné signály, by proto měli počítat s jiným rytmem každodenního opakování.

Možnosti exportu jsou popsané jasněji než u většiny proprietárních aplikací. [Export ve vlastním formátu `.mochi`](https://mochi.cards/docs/import-and-export/exporting/) obsahuje karty, šablony, přílohy, štítky, strukturu balíčků a historii opakování. Markdown a CSV se snáze prohlížejí jinde, ale historii opakování a další metadata vynechávají.

Veřejné repozitáře Mochi na GitHubu obsahují [integrace a související nástroje](https://github.com/mochi-cards/open-source), nikoli jádro aplikace nebo podporovaný synchronizační server. Vyberte si ho kvůli práci offline a přenositelnosti dat, ne kvůli kontrole nad zdrojovým kódem.

## Mnemosyne: cesta k desktopové aplikaci s otevřeným kódem

Mnemosyne se nejvíce blíží tradičnímu modelu „program a lokální databáze“. Aktuální verze podporuje Windows, macOS a Linux a nabízí klienta pro Android na opakování offline. Stránka s funkcemi popisuje obsahově bohaté karty, hierarchické štítky, pluginy, stupnici hodnocení 0–5 a úplný import z Anki s vlastními typy karet a údaji o učení.

Z porovnávaných možností jde o nejpřímější cestu k aplikaci s otevřeným kódem, pokud chcete odejít z Anki bez přechodu do rozsáhlého poznámkového systému nebo cloudové služby. Má také [vestavěný synchronizační server](https://mnemosyne-proj.org/help/syncing), který může běžet na desktopu nebo stroji bez grafického rozhraní a slučovat údaje o učení z několika klientů.

Při rozhodování je nutné počítat i s nedostatky. Klient pro Android [neumí upravovat karty](https://mnemosyne-proj.org/help/android-client). Uživatelé iOS musí opakovat přes webové rozhraní serveru běžícího na jiném stroji a oficiální přehled jeho funkcí upozorňuje, že nemá žádné bezpečnostní funkce. Vlastní synchronizace také znamená udržovat server dostupný, nastavit síť a zálohovat datový adresář.

Licencování je konkrétnější než pouhé označení „GPL“: [licenční soubor projektu](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) odkazuje na různé podmínky podle komponenty. [Licence jádra](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) používá AGPL v3 s dodatečným ustanovením o názvu a uvedení autorství, zatímco [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) používá LGPL v3. Pokud plánujete úpravy nebo další šíření, přečtěte si tyto soubory.

## Quizlet: přechod kvůli výuce ve třídě, nikoli věrnému přenosu sbírky

Quizlet se hodí k jinému účelu. Veřejné studijní sady, třídy vedené učiteli, sdílení, režimy Match, Test a Learn i skupinové aktivity se ve výuce zavádějí snáze než vlastní upravený profil Anki.

Hranicí migrace je prostý text. Quizlet umí z vložených řádků vytvořit pojmy a definice, ale nepřečte `.apkg` a neobnoví typy poznámek, šablony, plánování ani historii opakování. Autoři mohou [exportovat vlastní sady zkopírováním textu](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), bez obrázků; zkopírované sady od jiných uživatelů exportovat nelze. Přenositelný je obsah, nikoli sbírka jako celek.

Možnosti plánování v Quizletu se mění. Jeho nový režim [Spaced Repetition](https://quizlet.com/features/spaced-repetition) se na webu automaticky aktivuje pro sady s alespoň 100 pojmy a používá hodnocení Repeat, Hard, Okay a Easy. Podporu mobilů Quizlet stále označuje jako připravovanou. Learn zůstává samostatným adaptivním procvičováním s limity používání navázanými na placené tarify.

Offline režim se také týká mobilních aplikací, nikoli webu. Quizlet automaticky ukládá osm nedávných sad a umožňuje stáhnout další; [Flashcards a Match fungují offline](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps) a pokrok se po obnovení připojení synchronizuje.

Přejděte sem, pokud je cílem distribuce materiálů a aktivita ve třídě. Zahodit kvůli těmto funkcím dlouhodobě zaběhnutý osobní plán a vytvářet ho znovu se obvykle nevyplatí.

## Brainscape: méně nastavování plánovače, méně přenesených dat

Brainscape po vás chce ohodnotit jistotu odpovědi na stupnici 1 až 5. Karty, u kterých si nejste jistí, pak vrací dříve. Úplný vzorec není zveřejněn, ale tento způsob opakování lze třídě snadno vysvětlit.

Přijímá soubory CSV, TXT, XLSX a ODS. To je pohodlné pro karty s přední a zadní stranou, ale šablony, doplňky, pravidla pro média a údaje o učení z Anki se nepřenesou. Export osobní zálohy je funkcí tarifu Pro a vytváří soubory, které lze otevřít v tabulkovém procesoru a později znovu importovat.

Současné centrum nápovědy Brainscape uvádí, že web a mobilní aplikace nyní sdílejí stejné základní funkce pro vyhledávání, tvorbu, sdílení a studium. Popisuje také používání mobilu offline, ruční opětovnou synchronizaci a aktualizace tříd již stažených do zařízení. Po opětovném připojení tedy můžete data synchronizovat. Neznamená to ale, že máte v zařízení dostupný celý účet jako úplnou lokální knihovnu.

Export osobních balíčků zůstává [funkcí Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Zdrojový kód není oficiálně zveřejněn a vlastní hostování není dostupné.

Brainscape stojí za zvážení, pokud Anki vyžaduje od lidí, kteří se mají učit, příliš mnoho nastavování. Pro někoho, kdo toto nastavení už dobře využívá, to není vhodná cesta ven.

## SuperMemo: zvolte metodu a přijměte nový začátek

Současná služba SuperMemo.com je platforma pro výuku jazyků na webu, iOS a Androidu, postavená na proprietární metodě plánování SuperMemo. Jde o jiný produkt než starší program pro Windows, který mohou znát dlouholetí uživatelé SuperMemo.

Důvodem k přechodu je jeho metoda a katalog kurzů, ne snadná migrace z Anki. SuperMemo podporuje [hromadné vytváření karet vložením řádků s otázkou a odpovědí rozdělenými oddělovacím znakem](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), s limitem 100 karet na jeden import. Nenašel jsem žádný současný oficiální importér `.apkg` ani možnost uživatelského exportu z hostované služby. Šablony, doplňky, struktura médií a historie opakování se tedy touto zdokumentovanou cestou nepřenášejí.

Stažené kurzy lze v mobilních aplikacích studovat offline. [Návod k offline režimu](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) z něj vylučuje funkce AI, přidávání MemoCards, vyhledávání, nahrávky, statistiky a editor kurzů, takže si materiály připravte a synchronizujte před odpojením.

SuperMemo si vyberte, pokud jeho vlastní metodu nebo katalog kurzů chcete natolik, že jste ochotni začít s novým plánem. Pokud je prioritou zachovat stávající plán, řeší jiný problém, než potřebujete.

## Nibomo: přístup ke kódu celého systému, ale nejslabší import z Anki

Nibomo umožňuje uživateli spravovat velkou část systému a pracovat s jejím zdrojovým kódem. [Repozitář s licencí MIT](https://github.com/kirill-markin/flashcards-open-source-app) obsahuje webovou aplikaci, klienty pro iOS a Android, backend, offline synchronizaci, infrastrukturu, [veřejné API](/docs/api/) a [MCP server](/docs/mcp-connector/). Opakování používá [FSRS](/docs/architecture/#scheduling). Web, iOS i Android zapisují nejprve lokálně, přidávají změny do fronty k odeslání a po obnovení připojení je synchronizují.

To ale neznamená kompatibilitu s Anki. Nibomo neumí číst `.apkg` ani `.colpkg`. Podporovaná [migrace z Anki přes TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) je postup, při němž AI pomáhá navrhnout převážně textové karty a návrhy se následně kontrolují. Nezachovává šablony, doplňky, hierarchii balíčků, termíny, intervaly ani záznamy opakování. Odkazy na média v TXT nejsou samotné mediální soubory, takže balíčky s velkým množstvím médií vyžadují samostatnou obnovu a kontrolu.

Také vlastní balíček `flashcards.zip` v Nibomo má užší rozsah než záloha. Přenáší karty, štítky a související média mezi pracovními prostory Nibomo. Nepřenáší historii opakování, stav FSRS, úplné struktury balíčků, nastavení pracovního prostoru ani účty.

Základ hostované služby je [během bety zdarma](/cs/pricing/). Produkční systém na vlastní infrastruktuře nenasadíte jediným příkazem Dockeru: [návod k vlastnímu hostování](/docs/self-hosting/) používá AWS CDK a vyžaduje služby AWS spolu s Cloudflare, Resend, Sentry, správou tajných údajů, migracemi, zálohami, obnovou a aktualizacemi. Docker Compose slouží pro vývoj, nikoli jako podporované produkční nasazení.

Nibomo používejte, pokud je důvodem přechodu úplný zdrojový kód a backend pod vaší správou a vaše karty jsou dost jednoduché, abyste je mohli bezpečně znovu vytvořit. [Otevřete hostovanou aplikaci](https://app.nibomo.com/) a vyzkoušejte malý dočasný balíček. Pokud je nejdůležitější věrné zachování stavu učení, zůstaňte u Anki nebo vyzkoušejte RemNote, Mochi či Mnemosyne.

## Která alternativa k Anki funguje na iOS bez nepříjemného překvapení při migraci?

„Alternativa k Anki pro iOS“ může znamenat dvě různé věci: nativní aplikaci pro iPhone nebo náhradu za [AnkiMobile s jednorázovou cenou 24,99 USD](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo i Nibomo mají aplikace pro iOS. Mnemosyne ji nemá. Otázka migrace ale zůstává:

- **Mochi** zachovává více než aplikace pro iOS s čistě textovým importem: importuje historii opakování z `.apkg`, převádí obsah do Markdownu a používá hodnocení se dvěma možnostmi.
- **RemNote** také importuje historii opakování z `.apkg`, ale otestujte jeho frontu **Need to Learn**, místo abyste předpokládali, že dnešní plán z Anki zůstane zachován.
- **Quizlet** se hodí pro distribuci materiálů ve třídě, ale z Anki přenáší jen text a jeho nový režim rozloženého opakování zatím na mobilech není.
- **Nibomo** je možnost s dostupným zdrojovým kódem a nativním klientem pro iOS, ale migrace z Anki vynuluje stav učení.
- **Brainscape** a **SuperMemo** dávají smysl pouze tehdy, pokud jejich metoda opakování stojí za nové vytvoření karet a plánu.

Než opustíte AnkiMobile kvůli ceně, srovnejte ji s náklady na předplatné a hodinami potřebnými k opravě migrace. Jednorázový nákup aplikace může vyjít levněji než bezplatná aplikace, která z dlouho budované sbírky udělá projekt plný ruční práce.

## Kdy je bezpečnější zůstat u Anki

Zůstat je rozhodnutí, ne neschopnost vybrat si něco novějšího. U Anki zůstaňte, pokud platí něco z následujícího:

- vaše sbírka závisí na vlastních šablonách, CSS, JavaScriptu nebo doplňcích;
- zakrývání částí obrázků (Image Occlusion), zvuk nebo jiná média nesou zásadní význam;
- z jedné poznámky vzniká několik karet v různých směrech, které musejí zůstat propojené;
- roky historie opakování a současné termíny jsou cennější než nový editor;
- spoléháte na desktopový pracovní postup nebo kombinaci platforem, které alternativa nenabízí;
- offline režim náhrady funguje jen v prostředí, které nebudete používat;
- vlastní hostování se vám líbí v teorii, ale nechcete provozovat, zabezpečovat, zálohovat a aktualizovat server;
- alternativa neřeší žádný opakující se problém kromě toho, že vypadá přehledněji.

Anki stále nabízí vyspělý ekosystém doplňků, flexibilní šablony poznámek a karet, FSRS i nastavení staršího plánování, lokální nainstalované klienty a formáty balíčků schopné přenést sbírku. Žádný z výše uvedených produktů to vše nenahrazuje.

Podrobnější srovnání míry kontroly nad aplikacemi najdete v [průvodci kartičkovými aplikacemi s otevřeným kódem](/blog/best-open-source-flashcard-apps-2026/). Pokud rozhoduje fungování bez připojení, [srovnání offline kartičkových aplikací](/blog/best-offline-flashcards-app/) rozlišuje nainstalované aplikace, obsah v mezipaměti a karty prohlížeče.

## Kontrolní seznam pro migraci, která stále může skončit odpovědí „ne“

Nezačínejte celou sbírkou. Připravte test, u kterého je neúspěch přijatelný výsledek.

1. **Vytvořte balíček pro obnovu.** Exportujte `.colpkg` s médii, uložte ho mimo profil Anki a druhou kopii si ponechte jinde.
2. **Vyberte problematický balíček.** Zahrňte doplňovačky, vlastní pole, karty v obou směrech, vnořené balíčky, štítky, obrázky, zvuk a dostatečnou historii opakování, aby se projevily změny při převodu plánu.
3. **Exportujte formát, který cíl skutečně podporuje.** Pro přímý importér použijte `.apkg` s plánováním, předvolbami a médii. Volbu Notes in Plain Text použijte jen tehdy, když souhlasíte s přenosem samotného obsahu a jeho novým zpracováním.
4. **Zaznamenejte výchozí stav.** Počty poznámek, počty karet, názvy štítků a balíčků, počet médií, několik termínů a intervalů a očekávaný počet karet generovaných z každého typu poznámky.
5. **Importujte do dočasného prostoru.** Nepřepisujte zdrojový profil a první test neslučujte s trvalou knihovnou v cílové aplikaci.
6. **Kontrolujte obsah a stav učení odděleně.** Správná přední a zadní strana nedokazují, že se zachovaly doplňovačky, média, další karty vytvořené ze stejné poznámky, historie opakování nebo příští termín.
7. **Na každém používaném zařízení vyzkoušejte spuštění úplně zavřené aplikace bez připojení.** Opakujte, upravujte, úplně aplikaci zavřete, znovu ji otevřete bez připojení a pak se připojte a zkontrolujte jiné zařízení.
8. **Prohlédněte si frontu, než se plány začnou rozcházet.** Porovnejte první sadu k opakování a vzorek intervalů, než budete hodnotit stejné skutečně používané karty v obou aplikacích. Po prvním opakování jinde už jsou oba plány nezávislé.
9. **Vyzkoušejte odchod, než se rozhodnete zůstat.** Proveďte export z cílové aplikace a prohlédněte si, co byste dokázali obnovit, kdybyste ji příští rok opustili.
10. **Ponechte si Anki i nedotčenou zálohu.** Nic z toho nemažte, dokud náhrada neobstojí v běžném používání a vědomě nepřijmete každou ztrátu.

Pokud cílová aplikace přijímá jen text, postupujte podle úplného [návodu k bezpečnému exportu TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Odděluje obnovovací `.colpkg` od přenositelného pracovního souboru a výslovně upozorňuje na vynulování stavu učení.

## Rozhodujte se v tomto pořadí

Začněte tím, co si nemůžete dovolit ztratit:

1. Pokud jsou zásadní přesné šablony, doplňky nebo současná fronta, zůstaňte u Anki, dokud reprezentativní `.apkg` neprokáže, že přechod zvládnete.
2. Pokud se poznámky a karty mají stát jedním systémem, vyzkoušejte RemNote. Zkontrolujte frontu **Need to Learn**, nejen importované stránky.
3. Pokud na lokálním Markdownu a exportech, které lze snadno prohlížet, záleží více než na vykreslování podle Anki, vyzkoušejte Mochi.
4. Pokud chcete úzce zaměřenou desktopovou aplikaci s otevřeným kódem a přímým importem z Anki, vyzkoušejte Mnemosyne a ověřte, že jeho mobilní omezení odpovídají vašim návykům.
5. Pokud je skutečným problémem distribuce ve třídě nebo jednodušší společné opakování, vytvořte malou sadu znovu v Quizletu nebo Brainscape.
6. Pokud chcete konkrétně metodu SuperMemo, přijměte nový plán. Pokud chcete konkrétně zdrojový kód celého systému, vlastní hostování a přístup přes API a MCP, počítejte s novým vytvořením obsahu v Nibomo, ztrátou části dat i prací spojenou s provozem.

Srovnání jednotlivých funkcí tří velmi odlišných modelů najdete v článku [Anki vs. Quizlet vs. Nibomo](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Praktické pravidlo je jednoduché: přejděte, pokud je přínos konkrétní a reálný test ukázal, že ztráty jsou přijatelné. Jestliže váš reprezentativní balíček nezvládne přenos bez problémů, zůstat u Anki není konzervativní nouzové řešení. Je to výsledek srovnání.
