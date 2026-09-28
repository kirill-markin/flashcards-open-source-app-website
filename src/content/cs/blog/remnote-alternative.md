---
title: "Alternativy k RemNote v roce 2026: bezplatné a open-source možnosti"
description: "Porovnejte alternativy k RemNote podle poznámek, PDF, kartiček, ceny a vlastního hostingu. Zjistěte, co lze přenést, co se ztratí a jak přechod bezpečně vyzkoušet."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "alternativa k RemNote"
  - "alternativy k RemNote"
  - "RemNote open source"
  - "bezplatná alternativa k RemNote"
  - "RemNote vs Anki"
  - "open-source alternativa k RemNote"
  - "alternativa k RemNote s vlastním hostingem"
  - "offline aplikace na kartičky"
---

RemNote označuje export do Anki jako **Flashcards Only**, tedy pouze kartičky. Body osnovy bez kartiček přeskakuje. Exportovaný balíček tak nenahradí vaše propojené poznámky, PDF ani práci s Readerem. Náhradní aplikace může přijmout všechny otázky a odpovědi, a přesto v ní bude chybět systém, díky kterému vám kartičky sloužily.

Nejlepší **alternativa k RemNote** vyřeší váš důvod k odchodu, aniž by nenápadně odstranila to, co vám v RemNote stále vyhovuje. Pro někoho je rozhodující cena. Pro jiného obyčejné lokální soubory, propracovanější systém kartiček nebo zdrojový kód, který si může sám spustit.

> **Upozornění na vztah k produktu:** Jmenuji se Kirill Markin a vyvíjím [Nibomo](/cs/), jeden ze zde srovnávaných produktů. Nibomo není plnohodnotnou náhradou RemNote. RemNote v tomto srovnání nejlépe propojuje práci s poznámkami a PDF, zatímco Anki má nejvyzrálejší systém kartiček a formáty pro přenos dat.

**Fakta a ceny ověřeny:** 31. srpna 2026. Uvedené ceny vycházejí z veřejných cen pro USA a tam, kde je to uvedeno, z roční platby. Výslednou částku mohou ovlivnit daně, region, obchod s aplikacemi a podmínky beta verze.

![Restaurátor archiválií zkouší přenos malé části neporušeného propojeného studijního souboru do samostatných systémů kartiček, souborů a bloků](/blog/remnote-alternative.png)

## Začněte důvodem, proč chcete odejít

- **Cena:** Ověřte, zda vám už tarif RemNote Free nestačí pro to, jak skutečně studujete. Nabízí neomezené poznámky, kartičky a synchronizovaná zařízení, ale omezuje počet anotovaných dokumentů a některé pokročilé funkce.
- **Práce s kartičkami je příliš svázaná s poznámkami:** Vyzkoušejte Anki. Kartičky, šablony, importy a FSRS v něm mohou stát v centru celého systému.
- **Obyčejné lokální soubory s poznámkami:** Rozdělte si práci mezi Obsidian pro poznámky v Markdownu a Anki pro opakování. Propojení je slabší, ale máte mnohem jasnější přehled o tom, kde vaše data jsou a co máte pod kontrolou.
- **Propojené poznámky, PDF a vestavěné kartičky v open-source aplikaci:** Nejblíže je zde Logseq, ovšem s podstatnou výhradou pro rok 2026: jeho nová databázová verze je v betě, nová aplikace pro iOS a synchronizace v reálném čase jsou v alfě a nová aplikace pro Android zatím není dostupná k testování.
- **Zdrojový kód a vlastní hosting systému zaměřeného na kartičky:** Zvažte Nibomo, pokud vám stačí kartičky s přední a zadní stranou a počítáte s novým plánem opakování i náročnou správou provozu na AWS.
- **Čtení PDF, odkazy na zvýrazněné pasáže a kartičky na jednom místě:** Zůstaňte u RemNote. Žádná z ostatních možností tento způsob práce nenahrazuje bez komplikací.

Poslední odpověď se snadno přehlédne. Přechod není krokem vpřed, pokud vám alternativa nabídne preferovanou licenci, ale zkomplikuje zítřejší učení.

## Alternativy k RemNote: přehled pro rozhodování

| Možnost | Hlavní důvod pro výběr | Poznámky a PDF | Plánovač opakování | Offline provoz a kontrola nad daty | Cena ověřená 31. 8. 2026 | Hlavní omezení přenosu |
|---|---|---|---|---|---|---|
| **Zůstat u RemNote** | Propojené poznámky, čtení zdrojů a kartičky patří k sobě | Vestavěná znalostní báze a Reader propojující zvýrazněné pasáže v PDF, poznámky a kartičky | FSRS-6 v betě s ručním zapnutím a trénováním vah; výchozí zůstává SM-2 | Po přihlášení fungují počítačové i mobilní aplikace offline; na počítači jsou dostupné čistě lokální znalostní báze | Zdarma; Pro 8 USD měsíčně při roční platbě; Pro s AI 18 USD měsíčně při roční platbě | Nativní export se nejlépe hodí pro obnovu v RemNote, ale momentálně neobsahuje obrázky ani PDF |
| **Anki** | Prioritou jsou kartičky, šablony, doplňky a zachování kolekce | Bez integrovaného prostředí pro propojené poznámky nebo čtení PDF | Propracované nastavení FSRS, optimalizace parametrů, požadovaná míra zapamatování a simulace studijní zátěže | Lokální kolekce na počítači i mobilu; otevřený kód jádra počítačové aplikace a oficiální synchronizační server pro vlastní hosting | Počítačová aplikace, AnkiWeb a AnkiDroid jsou zdarma; oficiální AnkiMobile je placená aplikace pro iOS | RemNote exportuje do `.apkg` kartičky, nikoli celý systém poznámek; při zkušebním importu ověřte údaje o plánování a média |
| **Obsidian + Anki** | Chcete obyčejné lokální poznámky v Markdownu a zároveň vyzrálý plánovač kartiček | Obsidian spravuje lokální poznámky a přílohy, Anki kartičky; chybí jednotný postup od Readeru po opakování | FSRS v Anki | Lokální úložiště Markdownu a lokální kolekce Anki; samotný Obsidian je zdarma, ale má uzavřený kód | Obsidian zdarma; volitelný Sync od 4 USD měsíčně při roční platbě; ceny Anki viz výše | Exporty RemNote do Markdownu a Anki vytvoří dva systémy; živá propojení mezi poznámkami, zdroji a kartičkami v RemNote se nepřenesou jako jeden funkční celek |
| **Logseq** | Chcete konkrétně open-source editor hierarchických poznámek s PDF a vestavěnými kartičkami | Propojené bloky, anotace PDF a opakování kartiček se čtyřmi stupni hodnocení | Vestavěný plánovač se čtyřmi stupni hodnocení; [dokumentace odkazuje u nového algoritmu](https://github.com/logseq/docs/blob/master/db-version.md#cards) na původní projekt FSRS | Aplikace s licencí AGPL; data databázové verze lze exportovat do SQLite, EDN nebo běžného Markdownu se ztrátou části dat | Bezplatná open-source aplikace | Současná databázová verze je v betě; nová aplikace pro iOS a synchronizace v reálném čase jsou v alfě, nová aplikace pro Android zatím není dostupná k testování a starší stav SRS v Logseq není kompatibilní s novým algoritmem kartiček |
| **Nibomo** | Chcete jednoduché kartičky v otevřeném systému zahrnujícím web, mobilní aplikace i backend | Bez znalostní báze poznámek, zpětných odkazů, čtečky PDF nebo nativní počítačové aplikace | FSRS-6 s pevnými vahami a menšími možnostmi nastavení než v Anki nebo RemNote | Web, iOS a Android navržené především pro práci offline; celý systém s licencí MIT a podporovaným produkčním nasazením na AWS | Hostovaná aplikace během bety zdarma; vlastní hosting přidává náklady na infrastrukturu a poskytovatele služeb | Bez přímého importu z RemNote nebo Anki; obsah lze znovu vytvořit, ale historie opakování a stav FSRS se nepřenášejí |

Tabulka není bodovým hodnocením funkcí. Student, který pracuje hlavně s PDF, může přechodem k „nejotevřenější“ možnosti ztratit víc, než mu přinese její licence. Někdo s jednoduchým balíčkem slovíček naopak možná platí za systém poznámek, který už nepoužívá. Začněte řádkem, který odpovídá vašemu omezení, a pak vyzkoušejte, co se při přenosu zachová.

Bezplatnost a otevřený kód jsou dvě různá kritéria. Základní aplikace RemNote Free a Obsidian nic nestojí, ale mají uzavřený kód. Zdrojový kód jádra počítačové aplikace Anki, Logseq i Nibomo je veřejný. AnkiMobile přesto zůstává placenou aplikací pro iOS a vlastní hosting Nibomo znamená náklady na cloud.

## Zůstaňte u RemNote, pokud potřebujete mít poznámky, PDF a kartičky propojené

RemNote spojuje kroky, které většina alternativ odděluje. Jeho [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) umožňuje mít PDF otevřené vedle poznámek, vkládat odkazy na konkrétní zvýraznění a vytvářet z poznámek či zvýrazněných pasáží kartičky. V tarifu Free můžete anotovat tři dokumenty; aktuální [ceník](https://www.remnote.com/pricing) uvádí v tarifu Pro neomezený počet anotovaných dokumentů.

Ani plánovač už není jednoznačným důvodem k odchodu. RemNote nyní popisuje [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) jako beta funkci, kterou zapínáte ručně. Po alespoň 1 000 opakováních dokáže natrénovat váhy podle vaší vlastní historie. Anki stále nabízí podrobnější nastavení, ale pokud vám poznámky a PDF v RemNote vyhovují, nemusíte je opouštět jen kvůli FSRS.

Také možnosti práce offline přesahují pouhé „funguje v otevřené záložce prohlížeče“. [Počítačové a mobilní aplikace](https://help.remnote.com/en/articles/6752029-offline-mode) RemNote po instalaci a přihlášení umožňují upravovat poznámky a opakovat kartičky offline. Počítačová aplikace uchovává úplnou lokální kopii obrázků a PDF. Na mobilu a webu mohou chybět média, která nejsou v mezipaměti, a po zavření nebo obnovení záložky už webovou aplikaci bez připojení nespustíte.

Pokud jste začali hledat **bezplatnou alternativu k RemNote**, vyzkoušejte před přechodem tarif Free. Pokud vám jde o přístup ke zdrojovému kódu, lokální režim není totéž co open source nebo vlastní hosting. Samostatný článek o tom, [zda je RemNote open source](/blog/is-remnote-open-source/), tento rozdíl rozebírá podrobněji.

## RemNote vs Anki: rozhodněte, co má být základem

Užitečný rozdíl při srovnání **RemNote vs Anki** nespočívá v tom, zda aplikace má poznámky. Anki je ukládá také, ale poznámka v Anki je sada polí, ze kterých [šablony kartiček](https://docs.ankiweb.net/templates/intro.html) vytvářejí kartičky k opakování. RemNote začíná dokumenty a propojenými body osnovy, z nichž se mohou stát kartičky. Jedno je vyzrálý systém pro tvorbu kartiček, druhé studijní prostředí postavené kolem poznámek a zdrojů.

Zvolte Anki, pokud jsou pro vás zásadní vlastní pole, generované varianty kartiček, šablony HTML/CSS, doplňky nebo roky historie opakování. Jeho současné [nastavení FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) zahrnuje optimalizaci parametrů, požadovanou míru zapamatování a simulaci studijní zátěže. Jeho [exporty](https://docs.ankiweb.net/exporting.html) umějí zachovat celou kolekci ve formátu `.colpkg`, zatímco balíčky `.apkg` mohou obsahovat údaje o plánování, předvolby a média.

RemNote nabízí možnost přechodu do Anki, ale jeho označení je podstatné: [export do Anki je „Flashcards Only“](https://help.remnote.com/en/articles/7898019-exporting-notes), tedy pouze kartičky. Body osnovy bez kartiček se vynechávají. RemNote v exportovaných kartičkách zachovává kontext nadřazených bodů a převádí otázky s výběrem odpovědi do jednodušší podoby, ale export neobsahuje vaši znalostní bázi, knihovnu PDF ani celý postup práce se zdroji. Oficiální stránka RemNote o exportu také neslibuje, že se do Anki přenese veškerý stav plánování. Než tento přenos budete považovat za bezeztrátový, otestujte ho.

Anki je zde nejsilnější volbou pro práci, jejímž základem jsou kartičky. RemNote Reader ale nenahrazuje hladce. Pokud stále anotujete odborné články a píšete propojené poznámky, doplňte ho nástrojem na poznámky místo toho, abyste se v něj snažili proměnit Anki. [Širší přehled alternativ k Anki](/cs/blog/best-anki-alternatives/) obsahuje další možnosti zaměřené na kartičky.

## Obsidian a Anki: lokální soubory a záměrné rozdělení práce

Někteří lidé hledající alternativy k RemNote nepotřebují další aplikaci na všechno. Chtějí poznámky, které zůstanou obyčejnými soubory, a systém opakování, který se může rozvíjet nezávisle. Obsidian spolu s Anki umožňují toto rozdělení s jasnou rolí pro každou aplikaci.

[Obsidian ukládá poznámky](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) jako prostý text formátovaný Markdownem v lokální složce. Aplikace je zdarma a nevyžaduje účet; volitelný [Obsidian Sync](https://obsidian.md/pricing) začíná na 4 USD měsíčně při roční platbě. Obsidian není open source, ale soubory s poznámkami jsou přímo čitelné a lze je zálohovat běžnými nástroji pro práci se soubory.

Pro poznámky použijte export RemNote do Markdownu, pro kartičky export do `.apkg`. Počítejte s úpravami. Vnořená osnova exportovaná do čitelného Markdownu není totéž jako živé reference, portály, šablony nebo připnutá místa v PDF v RemNote. Jakmile poznámky a kartičky existují ve dvou aplikacích, změny se mezi nimi přestanou automaticky přenášet.

Tato možnost funguje, pokud je pro vás kontrola nad lokálními soubory důležitější než plynulý postup „zvýraznit, propojit, vytvořit kartičku, opakovat“. Pokud jste si RemNote vybrali právě kvůli tomuto postupu, takový kompromis se vám nevyplatí.

## Logseq: open-source nástroj na poznámky přechází na nový systém

Logseq si zaslouží místo ve srovnání **open-source alternativ k RemNote**, protože jeho základem jsou skutečně poznámky. Oficiální [repozitář s licencí AGPL](https://github.com/logseq/logseq) jej popisuje jako aplikaci pro správu znalostí s propojenými bloky a anotacemi PDF. [Současná dokumentace databázové verze](https://github.com/logseq/docs/blob/master/db-version.md#cards) popisuje i vestavěné kartičky: označíte blok štítkem, uvidíte termín opakování a při procvičování zvolíte jeden ze čtyř stupňů hodnocení.

Současný stav je důležitější než seznam funkcí. Vlastní repozitář Logseq uvádí, že databázová verze je v betě, zatímco nová aplikace pro iOS a synchronizace v reálném čase jsou v alfě; současná dokumentace databázové verze uvádí, že aplikace pro Android zatím není otevřená ani pro alfa testování. Logseq výslovně varuje před možnou ztrátou dat a doporučuje pro testování použít graf s daty, na kterých nejste závislí, a vytvářet zálohy. Jeho [poznámky ke změnám databázové verze](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) také uvádějí, že nový algoritmus kartiček neimportuje vlastnosti ani data SRS ze starších kartiček Logseq.

Stejně přesně je potřeba popsat přenositelnost dat. Současná [dokumentace exportu databázové verze](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) nabízí SQLite s přílohami, EDN a běžný Markdown. Uvádí, že EDN je jediný upravitelný export, který plně zachycuje data grafu, přesto ho nedoporučuje jako jedinou zálohu. Běžný Markdown vynechává vlastnosti a časové údaje.

Logseq tedy stojí za vyzkoušení, pokud potřebujete otevřený kód, propojené poznámky, PDF i vestavěné kartičky. V srpnu 2026 bych ho ale nepoužil k jednodennímu přesunu nepostradatelné znalostní báze pro studium medicíny. Nejprve ho používejte souběžně s RemNote a počkejte, až se nová verze ustálí i na zařízeních, která skutečně používáte.

## Nibomo: otevřený kód celého systému, užší zaměření na kartičky

Nibomo volí téměř opačný kompromis než RemNote. Jeho [funkce](/cs/features/) se soustředí na kartičky s přední a zadní stranou v Markdownu, balíčky, štítky, média, opakování pomocí FSRS, klienty navržené především pro práci offline a tvorbu návrhů kartiček s pomocí AI. Nemá znalostní bázi propojených poznámek, čtečku PDF, nativní počítačovou aplikaci ani přímý import z RemNote.

Rozsah zveřejněného kódu je široký: repozitář s licencí MIT zahrnuje web, iOS, Android, ověřování uživatelů, backend, synchronizaci a infrastrukturu. Podporovaný [návod pro vlastní produkční hosting](/docs/self-hosting/) používá AWS CDK. Nejde o lokální řešení, které spustíte jedním příkazem. Provozovatel odpovídá za náklady na cloud, tajné přístupové údaje, migrace, monitoring, zálohy, testy obnovy a samostatně sestavované mobilní aplikace.

Pro stávajícího uživatele RemNote je větším omezením přenos dat. Nibomo importuje vlastní balíčky `flashcards.zip`, nikoli Markdown z RemNote nebo `.apkg` z Anki. Tyto balíčky obsahují kartičky, štítky a odkazovaná média, ale ne historii opakování, stav FSRS, nastavení pracovního prostoru, úplnou strukturu balíčků ani účty. Chat s AI dokáže z exportovaného textu vytvořit návrhy kartiček, které zkontrolujete; tím ale obsah vytváříte znovu, nepokračujete v původní kolekci. [Návod na přenos přes TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) ukazuje tento postup i jeho ztráty krok za krokem.

Zvolte Nibomo pro nový nebo jednoduchý prostor na kartičky, pokud vám záleží na přístupu ke zdrojovému kódu celého systému. Pro propojené studium si nechte RemNote a tam, kde rozhoduje věrnost přenosu nebo pokročilá struktura kartiček, zvolte Anki. Užší srovnání systémů kartiček najdete v článku [Anki vs Nibomo](/blog/anki-vs-flashcards-open-source-app/) a v [přehledu open-source aplikací na kartičky](/cs/blog/best-open-source-flashcard-apps-2026/).

## Co se z RemNote nepřenese hladce

RemNote nabízí několik užitečných exportů, ale žádný jednotlivý soubor nedokáže celý produkt znovu vytvořit jinde.

- **Úplný export RemNote** je nejlepším formátem pro obnovu v RemNote. Momentálně neobsahuje obrázky ani PDF.
- **Export do Anki `.apkg`** obsahuje pouze kartičky. Body osnovy bez kartiček se při tomto přenosu vynechají a výsledkem není váš systém propojených poznámek.
- **Markdown, HTML, OPML a text** usnadňují čtení obsahu jinde. Nezařídí však, aby jiná aplikace rozuměla všem vazbám a postupům specifickým pro RemNote.
- **Zvýraznění v PDF a zdrojové dokumenty** je třeba zkontrolovat zvlášť. RemNote Reader umožňuje stáhnout PDF se zvýrazněním, ale nepředpokládejte, že úplný export znalostní báze tento soubor obsahuje.
- **Nastavení, motivy a pluginy** nejsou podle [dokumentace zálohování](https://help.remnote.com/en/articles/6301627-remnote-backups) součástí ruční zálohy RemNote.
- **Stav opakování** byste měli v cílové aplikaci ověřit kartičku po kartičce. Import, který zachová otázku a odpověď, může i tak spustit plánování od začátku.

Proto nestačí „podporuje Markdown“ nebo „importuje Anki“. Přenositelnost má několik vrstev: čitelné poznámky, použitelná média, propojené zdroje, strukturu kartiček a historii učení.

## Než zrušíte předplatné, vyzkoušejte celý přechod

Připravte přechod tak, abyste se mohli vrátit. Hodina klidného zkoušení teď vás vyjde levněji než chybějící PDF uprostřed zkouškového týdne.

1. Vytvořte nový ruční export **RemNote (Complete)** a ponechte ho beze změn.
2. Na počítači zkopírujte lokální zálohy `.db.zip` a složku `files`. Stáhněte všechna původní nebo anotovaná PDF, která nedokážete nahradit.
3. Vyberte malý, ale náročný vzorek: vnořené poznámky, reference, jedno PDF, obrázky, doplňovací kartičky nebo otázky s výběrem odpovědi, štítky a kartičky s podstatnou historií opakování.
4. Exportujte vzorek do všech formátů, které zamýšlené řešení potřebuje, obvykle do Markdownu pro poznámky a `.apkg` pro Anki.
5. Importujte do dočasného úložiště, grafu, profilu nebo pracovního prostoru. Vedle otevřeného RemNote porovnejte počty, formátování, odkazy, média, přední a zadní strany kartiček a jejich termíny opakování.
6. Pracujte offline na každém zařízení, které plánujete používat. Potom se znovu připojte a ověřte, že se úpravy a opakování přenesly tam, kam mají.
7. Obnovte úplnou zálohu do dočasné lokální znalostní báze RemNote. Stažený archiv se stává plánem obnovy teprve tehdy, když ho úspěšně otevřete.
8. V obou systémech se alespoň několikrát opravdu učte. Předplatné zrušte až poté, co náhrada zvládne každodenní práci, export i obnovu.

Původní exporty si ponechte i po přechodu. Úspěšný import dokazuje kompatibilitu s dnešní verzí cílové aplikace, nikoli trvalý přístup ke každé součásti starého systému.

## Praktický výběr

- **Zůstaňte u RemNote**, pokud jsou pro vás nejcennější propojené poznámky a studium s PDF. Jeho tarif Free nebo čistě lokální znalostní báze už možná vaše omezení řeší.
- **Zvolte Anki**, pokud jsou prioritou kartičky, šablony, nastavení FSRS a věrnost přenosu dat.
- **Zvolte Obsidian a Anki**, pokud vám obyčejné lokální soubory s poznámkami stojí za používání dvou nástrojů.
- **Vyzkoušejte Logseq**, pokud potřebujete open-source propojené poznámky a vestavěné kartičky, ale dokud jsou jeho současná databáze a synchronizace ve fázi beta a alfa, testujte s daty, na kterých nejste závislí.
- **Zvolte Nibomo**, pokud je pro vás jednoduchý nový systém kartiček a přístup ke zdrojovému kódu celého řešení důležitější než poznámky, PDF nebo pokračování původního plánu opakování.

Vyvíjím Nibomo, a přesto bych si pro propojené poznámky s velkým množstvím PDF nechal RemNote a pro složitou, dlouhodobě budovanou kolekci zvolil Anki. Nibomo je užší volba: kartičky s přední a zadní stranou, otevřený systém a nový plán opakování.

Jakmile víte, která omezení přijmete, vyzkoušejte jen odpovídající možnost. Pokud vám vyhovuje Nibomo, [návod pro začátek](/docs/getting-started/) ukazuje, jak začít s hostovanou aplikací i vlastním hostingem. Pokud ne, i zůstat u RemNote je rozumné rozhodnutí.
