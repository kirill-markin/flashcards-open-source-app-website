---
title: "Recenze kartiček Mochi (2026): bezplatný tarif, používání offline a srovnání s Anki"
description: "Recenze kartiček Mochi ověřená podle zdrojů: bezplatný tarif, offline aplikace, poznámky v Markdownu, FSRS, synchronizace, import z Anki, exporty a omezení vlastního hostingu."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "kartičky Mochi"
  - "Mochi kartičky"
  - "Mochi vs Anki"
  - "Anki vs Mochi"
  - "je Mochi zdarma"
  - "Mochi offline"
  - "cena Mochi"
  - "hosting Mochi"
  - "kartičky v Markdownu"
  - "Mochi rozložené opakování"
---

Mochi začíná dokumentem v Markdownu, nikoli běžným formulářem pro přední a zadní stranu. Přidejte řádek se třemi pomlčkami a dokument získá strany, které lze procvičovat. Můžete ho ponechat jako poznámku, propojit s jinou kartičkou nebo archivovat, aby zůstal dohledatelný, ale nevstupoval do fronty k opakování.

Tento drobný oddělovač vysvětluje, komu **kartičky Mochi** vyhovují. Mochi je dobrá volba pro někoho, kdo chce poznámky a rozložené opakování v jedné aplikaci, která pracuje především s lokálními daty. Zvlášť pokud mu vyhovuje Markdown, zpětné odkazy a jednoduché hodnocení Remembered/Forgot, tedy „Vzpomněl jsem si / Zapomněl jsem“. Méně přesvědčivé je pro dlouholetého uživatele Anki, jehož kolekce závisí na generovaných variantách kartiček, vlastním HTML/CSS, JavaScriptu, doplňcích nebo podrobném nastavení plánovače.

Při práci na jednom zařízení je bezplatný tarif víc než zkušební verze: nevyžaduje registraci a Mochi v dokumentaci uvádí neomezené používání offline. Háček je v tom, že synchronizace mezi zařízeními patří do **tarifu Pro za 5 USD měsíčně**. Pro uživatele Anki jsou závažnější ztráty při přenosu dat. Mochi dokáže importovat balíček Anki i jeho historii opakování, ale nedokáže zachovat každou šablonu, styl, skript, nastavení plánovače nebo chování doplňků.

> **Upozornění na vztah k produktu:** Jmenuji se Kirill Markin a vyvíjím [Nibomo](/cs/). Tato recenze se zaměřuje na práci s aplikací a vychází z ověřených zdrojů; netvrdím, že jsem produkt osobně testoval. Neobsahuje žádné partnerské odkazy. Hlavním předmětem srovnání zůstávají Mochi a Anki; můj produkt se objevuje pouze jako jasně označená alternativa ke konci článku.

**Fakta ověřena:** 7. září 2026. Nejnovější tehdy zveřejněnou [verzí Mochi](https://mochi.cards/changelog/) byla verze 26.8.2 z 10. srpna 2026. Ceny a údaje v obchodech s aplikacemi se mohou změnit.

![Restaurátor knih zkouší malou harmonikově složenou řadu propojených kartiček, zatímco původní archiv zůstává bezpečně uložený v krabici](/blog/mochi-alternative-v3.png)

## Stručné hodnocení

- **Zvolte Mochi**, pokud chcete poznámky v Markdownu a kartičky pohromadě, používání offline na jednom zařízení bez účtu, zpětné odkazy a výběr ze dvou hodnocení při opakování.
- **Zvolte Anki**, pokud potřebujete vyzrálé typy poznámek, šablony HTML/CSS, doplňky, bezplatnou hostovanou synchronizaci, čtyři stupně hodnocení nebo podrobnější nastavení FSRS.
- **Zatím nepřecházejte**, pokud už pravidelně opakujete a nedokážete pojmenovat problém, který vám Mochi vyřeší. Nové rozhraní samo o sobě nestačí jako důvod riskovat roky shromažďované údaje o plánování a kartičky s vlastními úpravami.
- **Před přenosem vše vyzkoušejte**, pokud už máte v Anki dlouhodobě budovanou kolekci. Mochi přijímá soubory `.apkg` a umí převzít historii opakování, ale převádí HTML na Markdown a odstraňuje CSS a JavaScript.

## Přehledné srovnání Mochi a Anki

| Kritérium | Mochi | Anki |
|---|---|---|
| Komu nejlépe vyhovuje | Uživatelům propojených poznámek a Markdownu, kteří chtějí mít poznámky vedle kartiček k opakování | Lidem, kteří chtějí vyzrálý a nastavitelný systém kartiček |
| Tvorba kartiček | Přidáním `---` získá dokument v Markdownu více stran; k dispozici jsou i pole a šablony | Poznámky obsahují pole; šablony HTML/CSS vytvářejí jednu nebo více kartiček |
| Průběh opakování | Nové kartičky nejprve procházejí fází učení; naučené kartičky používají Forgot / Remembered (Zapomněl jsem / Vzpomněl jsem si) | Kartičky používají Again / Hard / Good / Easy (Znovu / Těžké / Dobré / Snadné) |
| Plánování | Ve výchozím nastavení vlastní algoritmus Mochi; FSRS je volitelný | FSRS nebo starší SM-2, s širšími možnostmi ladění FSRS |
| Bezplatné používání | Bez registrace a s neomezeným používáním offline | Bezplatné aplikace pro počítač a synchronizace AnkiWeb; oficiální aplikace pro iOS je placená |
| Synchronizace mezi zařízeními | Pro, 5 USD měsíčně | Zdarma přes AnkiWeb |
| Platformy | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, oficiální AnkiMobile, nezávislý AnkiDroid |
| Přenositelné formáty | Nativní `.mochi`, exporty do Markdownu a CSV | Nativní `.colpkg` a `.apkg` a text oddělený tabulátory |
| Data a možnosti hostingu | Především lokální data; hlavní aplikace není prezentována jako open source a není zdokumentována podporovaná synchronizační služba pro vlastní hosting | Hlavní repozitář má licenci AGPL; oficiální synchronizační server pro vlastní hosting je zdokumentován |

Podstatný rozdíl je mezi **jednoduchou prací založenou na poznámkách a kontrolou nad celou kolekcí**.

## Na čem stojí rozhraní Mochi

Rozhraní Mochi snáze pochopíte, když si projdete práci s jednou kartičkou.

Každá kartička patří do balíčku. Kliknutím na **New Card (Nová kartička)** získáte prostor pro Markdown místo pevných polí pro otázku a odpověď. Jedna kartička může obsahovat nadpisy, seznamy, kód, obrázky, strukturovaná pole a odkazy. Vložte mezi bloky `---` a vytvoříte dvě nebo více stran k procvičování. Pomocí `[[double brackets]]`, tedy dvojitých hranatých závorek, odkážete na jinou kartičku; Mochi automaticky vytvoří zpětný odkaz. Oficiální [přehled kartiček](https://mochi.cards/docs/cards/) popisuje také šablony, jejichž zástupné symboly zobrazují hodnoty strukturovaných polí.

Kartičky mohou plnit dvě úlohy bez potřeby samostatných systémů:

- kartička k procvičování má jednotlivé strany a zařazuje se do rozloženého opakování;
- referenční poznámka může zůstat ve stejném balíčku a být archivována, čímž se vyřadí z front nových kartiček i kartiček k opakování, aniž by se smazal její obsah, štítky, odkazy nebo historie.

[Pohledy na balíček](https://mochi.cards/docs/decks/custom-views/) jsou uložené kombinace filtrů, řazení a rozložení. Pro běžné procházení si můžete ponechat mřížku a vytvořit další pohled podle štítku, termínu opakování, nízké míry zapamatování nebo nedávného opakování. Mochi také umožňuje použít pohled k intenzivnímu procvičování, aniž by se změnilo běžné plánování nebo historie opakování. To je konkrétnější než označit rozhraní za „čisté“: stejný balíček může sloužit jako zápisník, filtrovaná databáze i fronta k učení.

[Denní opakování](https://mochi.cards/docs/getting-started/reviewing-cards/) má dvě fáze. V části **New cards (Nové kartičky)** buď přidáte kartičku do plánu opakování, nebo zvolíte Again (Znovu), abyste ji brzy viděli znovu. Jakmile je kartička naučená a přijde její čas, odkryjete další stranu a vyberete **Forgot (Zapomněl jsem)** nebo **Remembered (Vzpomněl jsem si)**. Pokud si nevzpomenete, Mochi kartičku nejprve zařadí do fronty k dalšímu procvičení, než vynuluje její dosavadní postup v učení. Při opakování se tak záměrně rozhodujete jen mezi několika možnostmi.

## Je Mochi zdarma a co funguje offline?

Ano, ale „zdarma“ a „offline“ znamenají něco jiného podle toho, kde aplikaci používáte. [Ceník Mochi](https://mochi.cards/) uvádí:

- **Free:** 0 USD navždy, bez nutnosti registrace, s neomezeným používáním offline.
- **Pro:** 5 USD měsíčně; přidává synchronizaci mezi zařízeními, publikování balíčků, dynamická pole, integraci AI a e-mailovou podporu.

Mochi funguje na macOS, Windows, Linuxu, iOS, Androidu a webu. Jeho [průvodce stažením a instalací](https://mochi.cards/docs/getting-started/download-and-install/) vymezuje praktické rozdíly:

| Prostředí | Co znamená zdarma a offline |
|---|---|
| Nainstalovaná aplikace pro počítač nebo mobil | Mochi můžete používat offline bez účtu. Data jsou uložená v zařízení, takže v jedné nainstalované aplikaci můžete zvládnout vše potřebné zdarma. |
| Webová aplikace bez Pro | Obsah se uchovává v offline úložišti prohlížeče. Mochi upozorňuje, že prohlížeč může tato data bez varování smazat. |
| Stejná kolekce na několika zařízeních | Automatická synchronizace mezi zařízeními je funkcí Pro, i když každá nainstalovaná aplikace může fungovat offline. |

Možnost pracovat offline ještě neznamená, že máte k dispozici synchronizaci. K samotné tvorbě a opakování ve stažené aplikaci Pro nepotřebujete. Potřebujete ho, pokud se má stejná aktuální kolekce automaticky přenášet z notebooku do telefonu. Důležitá data v bezplatném tarifu zálohujte v nativním formátu; zařízení, a zvlášť úložiště prohlížeče, by nemělo být jejich jedinou kopií.

Pokud rozhoduje chování offline, porovnejte konkrétní způsob práce na svých zařízeních v článku [Funguje Anki offline?](/blog/does-anki-work-offline/) a v širším [průvodci aplikacemi na kartičky pro učení offline](/blog/best-offline-flashcards-app/).

## Kartičky v Markdownu jsou hlavní důvod, proč zvolit Mochi

Skutečná výhoda Mochi spočívá v tom, jak Markdown mění podobu podkladů, které spravujete.

Kartička Mochi zůstává čitelná jako text. Stejný dokument může obsahovat krátké vysvětlení, blok kódu, odkazy na související myšlenky a oddělovače mezi stranami k procvičování. Pokud potřebujete opakující se strukturu, kartičky mohou používat také pole a šablony. Při použití šablony Mochi vykreslí její Markdown se zástupnými symboly polí a při vykreslování ignoruje vlastní Markdown kartičky, aniž by ho smazalo.

Anki vychází z jiného modelu. Poznámka obsahuje pole a [šablony kartiček](https://docs.ankiweb.net/templates/intro.html) určují, která pole se zobrazí a jaké kartičky vzniknou. Šablony používají HTML a pro vzhled CSS. Jedna slovíčková poznámka tak může vytvářet kartičky pro rozpoznávání i aktivní vybavování odpovědi, zatímco podkladová data zůstávají na jednom místě.

Tato struktura dává Anki větší možnosti pro podmíněné rozložení, generované varianty kartiček, psané odpovědi, vlastní vzhled a postupy rozšířené doplňky. Zároveň to znamená, že Anki není aplikace na kartičky s nativní podporou Markdownu. Pokud chcete v Anki pracovat s Markdownem, potřebujete další převod nebo doplněk.

Praktická otázka je jednoduchá: chcete poznámku, ze které může být kartička, nebo strukturovaný typ poznámky, který může vytvářet několik kartiček? Mochi se soustředí na první možnost. Anki na druhou.

## Rozložené opakování v Mochi už zahrnuje FSRS

Srovnání, která tvrdí, že Mochi nemá FSRS, jsou zastaralá. Mochi přidalo předběžnou verzi FSRS v roce 2025 a od té doby dál vydávalo opravy plánovače. Přesto [zůstává výchozí volbou vlastní algoritmus Mochi](https://mochi.cards/docs/reviewing/fsrs/).

Výchozí algoritmus mění intervaly pomocí pevných násobků podle toho, zda si při opakování vzpomenete, nebo zapomenete. V nastavení opakování (Review Settings) přepněte na FSRS a stávající naučené kartičky na něj přejdou bez ztráty historie. Můžete nastavit cílovou míru zapamatování, zadat vlastní parametry a později přepnout zpět.

Mochi zachovává dvě hodnocení u obou plánovačů:

- **Forgot (Zapomněl jsem)** odpovídá ve FSRS hodnocení Again (Znovu).
- **Remembered (Vzpomněl jsem si)** odpovídá ve FSRS hodnocení Good (Dobré).

Dokumentace Mochi uvádí, že dvoustupňové hodnocení s FSRS funguje, ale neposkytuje část informací, které by přinesla hodnocení Hard (Těžké) a Easy (Snadné). Mochi přijímá vlastní optimalizované parametry, ale nemá vestavěný optimalizátor; k výpočtu parametrů na míru potřebujete externí optimalizátor FSRS a historii opakování z Mochi.

[Nastavení FSRS v Anki](https://docs.ankiweb.net/deck-options.html#fsrs) jde dál. Požadovanou míru zapamatování a parametry lze přiřadit k předvolbám, vestavěný optimalizátor dokáže přizpůsobit parametry historii opakování a simulátor odhaduje počet opakování nebo minuty učení při různých nastaveních. Anki také zaznamenává čtyři výsledky: Again (Znovu), Hard (Těžké), Good (Dobré) a Easy (Snadné).

Tlačítka navíc pomáhají jen tehdy, když je používáte konzistentně. Příručka Anki chápe Hard jako úspěšné vybavení odpovědi. Pokud stisknete Hard, když jste odpověď zapomněli, předáváte FSRS nesprávnou informaci a výsledkem mohou být příliš dlouhé intervaly.

Zvolte dvoustupňové hodnocení Mochi, pokud vám rozlišení úspěch/neúspěch usnadňuje opakování. Zvolte Anki, pokud chcete podrobnější hodnocení a budete používat jeho optimalizátor, nastavení míry zapamatování, předvolby nebo simulátor studijní zátěže. Pokud vás zajímají plánovače spíše než aplikace, přečtěte si [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

## U Mochi a Anki platíte za jiné věci

Při učení na jednom počítači mohou být obě aplikace zdarma. Jakmile zapojíte další zařízení, náklady se objeví na jiném místě.

Mochi účtuje **5 USD měsíčně** za synchronizaci v Pro a spojuje ji s publikováním, dynamickými poli, integrací AI a podporou. Aplikace Anki pro počítač jsou zdarma a [oficiální web Anki](https://apps.ankiweb.net/) uvádí bezplatnou synchronizaci přes AnkiWeb. AnkiMobile je placená oficiální aplikace pro iPhone a iPad; AnkiDroid je bezplatný, nezávisle vyvíjený klient pro Android.

Odpověď na otázku „Co je levnější?“ tedy závisí na vašich zařízeních:

- jeden počítač: obojí může být zdarma;
- několik počítačů nebo zařízení s Androidem: bezplatná hostovaná synchronizace Anki nevyžaduje předplatné;
- iPhone nebo iPad: u Anki přibývá jednorázový nákup aplikace, zatímco Mochi podmiňuje synchronizaci mezi zařízeními pravidelně placeným tarifem Pro;
- uživatelé Mochi, kteří už chtějí publikování, dynamická pole nebo integraci AI, mohou synchronizaci vnímat jako jednu součást nabídky, nikoli celý důvod platby.

Než porovnáte přesné celkové náklady pro iOS, podívejte se do svého regionálního App Storu. Tato recenze neuvádí pevnou částku za aplikaci, protože cena v obchodě se může podle trhu lišit.

## Hosting Mochi není totéž co práce s lokálními daty

Tři označení se často směšují:

- **Local-first** znamená, že pracovní kopie je ve vašem zařízení a aplikace dokáže fungovat bez své cloudové služby.
- **Open source** znamená, že zdrojový kód je dostupný pod licencí, která dovoluje jeho zkoumání a úpravy.
- **Vlastní hosting** znamená, že produkt dokumentuje podporovaný způsob, jak příslušnou službu provozovat na vlastní infrastruktuře.

Mochi jasně dokumentuje práci s lokálními daty. Svou hlavní aplikaci neprezentuje jako open source: odkaz „Open source“ v patičce veřejného webu vede na [sadu integrací](https://github.com/mochi-cards/open-source), nikoli na samotnou aplikaci. Oficiální web také nedokumentuje podporovanou náhradu synchronizace Pro pro vlastní hosting.

Pokud hledáte **hosting Mochi**, protože chcete vlastní server, hranice je následující: můžete si uchovávat lokální data a nativní zálohy, ale zdokumentovanou cestou mezi zařízeními je Mochi Pro. Lokální data přinášejí užitečnou kontrolu; neznamenají vlastní hosting.

Hlavní repozitář Anki je [licencován pod AGPL verze 3 nebo novější](https://github.com/ankitects/anki/blob/main/LICENSE), s uvedenými výjimkami pro některé komponenty. Oficiální příručka dokumentuje také [synchronizační server pro vlastní hosting](https://docs.ankiweb.net/sync-server.html) určený pokročilým uživatelům. Tento server nahrazuje synchronizaci přes AnkiWeb pro kompatibilní klienty; není to kopie webu AnkiWeb pro vlastní hosting. Anki předpokládá, že jeho provozovatel zvládne práci s příkazovým řádkem a řešení problémů se sítí, firewallem, protokolem i aktualizacemi.

## Co import z Anki zachová a co změní

[Dokumentace importu Mochi](https://mochi.cards/docs/import-and-export/importing/) uvádí podporu souborů Anki `.apkg` včetně historie opakování. „Importováno“ ale neznamená „rovnocenné“.

Během importu Mochi převádí HTML na Markdown a odstraňuje CSS a JavaScript. Jde o převod formátu mezi dvěma odlišnými modely kartiček. Nejjednodušší případ je obyčejný obsah přední a zadní strany. Kartičku, která závisí na vzhledu, logice šablony, zadávání odpovědí nebo JavaScriptu, je nutné po importu zkontrolovat.

Historie opakování také vyžaduje výslovnou volbu při exportu. [Příručka exportu Anki](https://docs.ankiweb.net/exporting.html) uvádí, že volba **Include Scheduling Information (Zahrnout informace o plánování)** určuje, zda se do balíčku dostane historie opakování. Pokud ji vypnete, Mochi nemůže obnovit historii, kterou soubor `.apkg` nikdy neobsahoval.

Ani při přenosu historie nečekejte totožné budoucí termíny opakování. Aplikace mohou používat různé plánovače, hodnocení, cílovou míru zapamatování, parametry, kroky učení a nastavení balíčků. Zachované události poskytují novému plánovači podklady; nedělají z obou systémů totéž.

## Nativní zálohy a přenositelný text slouží jiným účelům

Než cokoli přesunete, vytvořte zálohu, ze které lze obnovit původní systém. Čitelný export je užitečný, ale ne vždy z něj lze vše obnovit.

[Průvodce zálohováním Mochi](https://mochi.cards/docs/getting-started/backing-up/) popisuje dvě možnosti nativní zálohy:

- Zkopírování celého uživatelského adresáře zachová obsah, historii opakování, přílohy, nastavení aplikace a stav přihlášení.
- Export `.mochi` zachová balíčky, kartičky, šablony a pole, přílohy, štítky a metadata, historii opakování, pořadí kartiček a strukturu balíčků.

[Exporty Mochi do Markdownu a CSV](https://mochi.cards/docs/import-and-export/exporting/) slouží k přenositelnosti dat. Markdown vytváří jeden soubor pro každou kartičku a složky pro podbalíčky, ale vynechává historii opakování, pořadí kartiček, šablony a štítky z metadat, pokud nejsou štítky součástí Markdownu. CSV dokáže exportovat pole šablon nebo vykreslenou přední a zadní stranu, ale nezachovává historii opakování ani šablony. Štítky z metadat se přenesou jen tehdy, pokud jsou vložené do obsahu.

Anki rozlišuje podobně:

- `.colpkg` exportuje celou kolekci s plánováním a může zahrnovat média. Jeho import nahradí kartičky v cílové kolekci Anki.
- `.apkg` exportuje jeden balíček a jeho podbalíčky, s možnostmi zahrnout informace o plánování, předvolby a média.
- Poznámky v prostém textu používají pole oddělená tabulátory s vloženým formátováním HTML. Zachovávají upravitelný obsah, nikoli úplné chování kolekce.

Návrat z Mochi do Anki obvykle znamená CSV. Anki umí [přiřadit textové sloupce k polím poznámek](https://docs.ankiweb.net/importing/text-files.html), ale odkazy Mochi, chování kartiček s více stranami, šablony a historie opakování se prostřednictvím tohoto souboru nepřevedou na rovnocenné objekty Anki. Export `.mochi` si ponechte i poté, co kopie v Anki vypadá správně.

## Vyzkoušejte reprezentativní balíček s možností návratu

Dialog importu dokazuje, že aplikace přijala soubor. Nedokazuje, že vaše skutečná kolekce stále funguje nebo že dokážete použitelný obsah přenést zpět. Otestujte oba směry a svůj běžný profil Anki přitom ponechte beze změn.

1. **Zálohujte celé Anki.** Exportujte `.colpkg` s médii a uložte ho mimo pracovní profil.
2. **Ověřte, že lze zálohu otevřít.** Vytvořte prázdný dočasný profil Anki a importujte `.colpkg` do něj. Import balíčku kolekce nahrazuje cílovou kolekci, a právě proto je dočasný profil důležitý.
3. **V dočasném profilu sestavte reprezentativní balíček.** Měl by být dost malý na kontrolu každé kartičky, ale zahrnovat funkce, na které spoléháte: základní a obrácené kartičky, doplňování vynechaného textu (cloze), vlastní šablony, CSS, JavaScript, obrázky, zvuk, rovnice, štítky, vnořené balíčky a historii opakování.
4. **Exportujte balíček jako `.apkg`.** Pokud jsou pro vás podstatné, zahrňte informace o plánování, předvolby a média. Tyto volby zahrnou data do balíčku Anki; nezaručují, že Mochi převezme každé nastavení.
5. **Importujte ho do nového balíčku Mochi.** Svůj běžný profil Anki i jeho frontu kartiček k opakování ponechte beze změn.
6. **Před opakováním proveďte kontrolu.** Porovnejte obsah, formátování, pole, média, štítky, strukturu balíčků a historii. Zvláštní pozornost věnujte všemu, co záviselo na HTML, CSS, JavaScriptu nebo generovaných variantách kartiček.
7. **Plánovač zvolte vědomě.** Mochi začíná vlastním algoritmem. FSRS zapněte jen tehdy, pokud ho hodláte používat i po vyzkoušení.
8. **Kartičky v kopii opakujte jeden běžný týden.** Posuďte úpravy v Markdownu, fázi New cards (Nové kartičky), výběr Remembered/Forgot (Vzpomněl jsem si / Zapomněl jsem), chování offline a případně placenou synchronizaci na zařízeních, která skutečně nosíte s sebou.
9. **Otestujte cestu zpět.** Zkušební balíček Mochi exportujte jako `.mochi` pro nativní zálohu a jako CSV pro Anki. Pokud potřebujete opakovaně použitelná pole, použijte CSV s hodnotami polí; pokud potřebujete hlavně viditelný obsah přední a zadní strany, použijte CSV s vykreslenými stranami. Importujte toto CSV do dalšího prázdného profilu Anki a přiřaďte jeho sloupce k vhodnému typu poznámky.
10. **Zapište si každou ztrátu, kterou přijímáte.** Přenos tam i zpět zkontrolujte zvlášť. Přesný vzhled, chování kartiček s více stranami, funkce doplňků, generované varianty, stupně hodnocení, historie nebo budoucí termíny opakování mohou být při každodenním používání důležitější než ve srovnávací tabulce.

Návrat přes CSV je přenos obsahu, nikoli úplná obnova Mochi: nepřenáší historii opakování ani šablony. Štítky z metadat přenese jen tehdy, pokud jsou vložené do obsahu. Pokud Mochi neřeší problém, který jste pojmenovali, zkušební balíček smažte a pokračujte s původním profilem Anki. Pokud ho řeší, přenášejte skutečné balíčky po jednom a zálohy Anki `.colpkg` i Mochi `.mochi` uchovávejte po několik běžných cyklů opakování.

## Komu budou kartičky Mochi vyhovovat?

Mochi je dobrá volba, pokud:

- už v Markdownu píšete a přemýšlíte;
- poznámky a kartičky k opakování chcete mít ve stejném propojeném pracovním prostoru;
- chcete jednoduchý výběr Remembered/Forgot (Vzpomněl jsem si / Zapomněl jsem) místo čtyř hodnocení;
- vám pro bezplatné používání stačí jedno zařízení offline nebo vám synchronizace Pro stojí za 5 USD měsíčně;
- je vaše kolekce nová nebo natolik jednoduchá, že převod z Anki představuje malé riziko.

Zůstaňte u Anki, pokud:

- vaše typy poznámek vytvářejí několik důležitých variant kartiček;
- jsou šablony HTML/CSS, JavaScript, doplňky nebo sdílené balíčky součástí vašeho systému;
- je bezplatná synchronizace mezi zařízeními důležitější než tvorba v Markdownu;
- chcete optimalizátor FSRS, nastavení předvoleb, čtyři hodnocení a simulátor studijní zátěže z Anki;
- vám léta shromažďovaná historie opakování a vlastní úpravy už dobře slouží.

Nejrozumnější alternativa k Mochi závisí na tom, proč vám nevyhovuje ani jedna možnost. Pro novou, jednodušší kolekci nabízí [Nibomo](/cs/features/) opakování s FSRS, učení offline a synchronizaci, přenos kartiček, štítků a médií, přístup pro agenty a zdokumentovanou cestu k vlastnímu hostingu. Nibomo vyvíjím a jeho omezení jsou podstatná: nenahrazuje propojený zápisník v Markdownu z Mochi ani vyzrálý systém šablon a doplňků Anki. [Průvodce prvními kroky](/docs/getting-started/) ukazuje současné možnosti hostované a mobilní aplikace, přístupu pro agenty a vlastního hostingu.

## Závěrečné hodnocení

Mochi je víc než hezčí rozhraní Anki. Stojí na myšlence, že poznámka v Markdownu, propojený znalostní záznam a kartička pro rozložené opakování mohou být jeden objekt. Bezplatný tarif pokrývá práci offline bez účtu; Pro přidává hostované funkce včetně synchronizace mezi zařízeními.

To je dobrý kompromis pro člověka, který začíná novou kolekci založenou na Markdownu. Přechod z Anki se může vyplatit také tehdy, pokud test reprezentativního balíčku prokáže, že nativní Markdown a dvoustupňové hodnocení odstraňují skutečné překážky při práci.

Dlouholetému uživateli Anki se naopak musí nejprve prokázat, že přechod stojí za to. Zálohujte kolekci, otestujte kartičky s nejvíce vlastními úpravami a zůstaňte u Anki, pokud Mochi nezlepší běžnou práci natolik, aby to ospravedlnilo ztrátu konkrétních možností formátování, šablon, plánovače a ekosystému.
