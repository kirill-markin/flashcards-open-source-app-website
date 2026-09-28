---
title: "Alternatívy k RemNote v roku 2026: bezplatné a open-source možnosti"
description: "Porovnajte alternatívy k RemNote podľa poznámok, PDF, kartičiek, ceny a vlastného hostovania. Čo sa prenesie, čo sa stratí a ako si prechod bezpečne vyskúšať."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "alternatíva k remnote"
  - "alternatívy k remnote"
  - "remnote open source"
  - "bezplatná alternatíva k remnote"
  - "remnote vs anki"
  - "open-source alternatíva k remnote"
  - "alternatíva k remnote s vlastným hostovaním"
  - "aplikácia na učebné kartičky offline"
---

RemNote označuje svoj export do Anki ako **Flashcards Only**, teda iba kartičky. Odrážky bez kartičiek sa preskočia a balík neobsahuje váš systém prepojených poznámok, PDF ani spôsob práce s nástrojom Reader. Nová aplikácia môže prijať každú otázku aj odpoveď, no systém, vďaka ktorému boli tieto kartičky užitočné, môže zostať v pôvodnej aplikácii.

Najlepšia **alternatíva k RemNote** vyrieši problém, pre ktorý chcete odísť, bez toho, aby vás nenápadne pripravila o tú časť RemNote, ktorá vám stále vyhovuje. Pre niekoho je rozhodujúca cena. Pre iného bežné lokálne súbory, prepracovanejší systém kartičiek alebo aplikácia s dostupným zdrojovým kódom, ktorú môže sám prevádzkovať.

> **Môj vzťah k produktu:** Som Kirill Markin a vyvíjam [Nibomo](/sk/), jeden z produktov v tomto porovnaní. Nibomo nie je úplná náhrada RemNote. RemNote má v tomto porovnaní najlepšie integrovanú prácu s poznámkami a PDF, zatiaľ čo Anki má najvyspelejší systém kartičiek a formáty na migráciu.

**Fakty a ceny overené:** 31. augusta 2026. Uvedené ceny vychádzajú z verejného cenníka pre USA a tam, kde sa to uvádza, z ročnej fakturácie. Výslednú sumu môžu ovplyvniť dane, región, obchod s aplikáciami a podmienky beta verzie.

![Archívny konzervátor skúša prenos malej vzorky z neporušeného prepojeného študijného spisu do samostatných systémov kartičiek, súborov a blokov](/blog/remnote-alternative.png)

## Začnite dôvodom, prečo chcete odísť

- **Cena:** Overte si, či RemNote Free už nepokrýva váš skutočný spôsob práce. Zahŕňa neobmedzené poznámky, kartičky a synchronizované zariadenia, no obmedzuje počet anotovaných dokumentov a niektoré pokročilé funkcie.
- **Práca s kartičkami je príliš naviazaná na poznámky:** Vyskúšajte Anki. Kartičky, šablóny, importy a FSRS v ňom stoja v centre celého systému.
- **Bežné lokálne súbory s poznámkami:** Rozdeľte úlohy medzi Obsidian na poznámky v Markdowne a Anki na opakovanie. Prepojenie je slabšie, ale oveľa jasnejšie vidíte, kde sú vaše dáta a kto ich spravuje.
- **Open-source prepojené poznámky s PDF a vstavanými kartičkami:** Najbližšie je tu Logseq, no v roku 2026 má zásadné obmedzenie: nová databázová verzia je v bete, nová aplikácia pre iOS a synchronizácia v reálnom čase sú v alfe a nová aplikácia pre Android zatiaľ nie je otvorená na testovanie.
- **Zdrojový kód a vlastné hostovanie systému zameraného na kartičky:** Zvážte Nibomo, ak vám stačia kartičky s prednou a zadnou stranou a ste ochotní začať s novým plánom opakovania aj venovať značné úsilie prevádzke v AWS.
- **Čítanie PDF, prepojené zvýraznenia a kartičky na jednom mieste:** Zostaňte pri RemNote. Žiadna z ostatných možností tento spôsob práce nenahradí bez komplikácií.

Posledná odpoveď sa ľahko prehliadne. Zmena nie je pokrok, ak alternatíva splní vašu predstavu o licencii, ale naruší zajtrajšie učenie.

## Alternatívy k RemNote: porovnávacia tabuľka

| Možnosť | Hlavný dôvod na výber | Poznámky a PDF | Plánovač | Offline a kontrola nad dátami | Cena overená 31. 8. 2026 | Hlavné obmedzenie migrácie |
|---|---|---|---|---|---|---|
| **Zostať pri RemNote** | Prepojené poznámky, čítanie zdrojov a kartičky patria spolu | Vlastná znalostná báza a Reader s prepojenými zvýrazneniami v PDF, poznámkami a kartičkami | Beta FSRS-6 s manuálnym zapnutím a trénovaním váh; predvolený zostáva SM-2 | Počítačová a mobilná aplikácia fungujú po prihlásení offline; na počítači sú dostupné aj výlučne lokálne znalostné bázy | Zadarmo; Pro 8 USD mesačne pri ročnej platbe; Pro s AI 18 USD mesačne pri ročnej platbe | Natívny export je najlepší na obnovenie v RemNote, ale momentálne vynecháva obrázky a PDF |
| **Anki** | Prioritou sú kartičky, šablóny, doplnky a verný prenos kolekcie | Bez integrovaného prostredia na prepojené poznámky alebo čítanie PDF | Prepracované nastavenia FSRS, optimalizované parametre, požadovaná miera zapamätania a simulácia študijnej záťaže | Lokálne kolekcie na počítači a mobile; otvorené jadro počítačovej aplikácie a oficiálny synchronizačný server na vlastné hostovanie | Počítačová aplikácia, AnkiWeb a AnkiDroid sú zadarmo; oficiálny AnkiMobile je platená aplikácia pre iOS | RemNote exportuje do `.apkg` kartičky, nie celý systém poznámok; údaje o plánovaní a médiá overte skúšobným importom |
| **Obsidian + Anki** | Chcete bežné lokálne poznámky v Markdowne bez toho, aby ste sa vzdali vyspelého plánovača kartičiek | Obsidian spravuje lokálne poznámky a prílohy; Anki kartičky; chýba jeden integrovaný postup od čítania po opakovanie | FSRS v Anki | Lokálny priečinok poznámok v Markdowne a lokálna kolekcia Anki; samotný Obsidian je zadarmo, ale má uzavretý zdrojový kód | Obsidian zadarmo; voliteľný Sync od 4 USD mesačne pri ročnej platbe; ceny Anki sú uvedené vyššie | Exporty RemNote do Markdownu a Anki vytvoria dva systémy; živé prepojenia poznámok, zdrojov a kartičiek v RemNote sa neprenesú ako jeden funkčný celok |
| **Logseq** | Chcete práve open-source editor hierarchických poznámok s PDF a vstavanými kartičkami | Prepojené bloky, anotovanie PDF a opakovanie kartičiek so štyrmi stupňami hodnotenia | Vstavaný plánovač so štyrmi stupňami hodnotenia; [dokumentácia pri novom algoritme odkazuje](https://github.com/logseq/docs/blob/master/db-version.md#cards) na pôvodný projekt FSRS | Aplikácia s licenciou AGPL; dáta databázovej verzie možno exportovať ako SQLite, EDN alebo štandardný Markdown so stratou informácií | Bezplatná open-source aplikácia | Aktuálna databázová verzia je v bete; nová aplikácia pre iOS a synchronizácia v reálnom čase sú v alfe, nová aplikácia pre Android zatiaľ nie je otvorená na testovanie a starý stav SRS z Logseq nie je kompatibilný s novým algoritmom kartičiek |
| **Nibomo** | Chcete jednoduché kartičky s otvoreným kódom webu, mobilných aplikácií aj backendu | Bez znalostnej bázy poznámok, spätných odkazov, čítačky PDF či natívnej počítačovej aplikácie | FSRS-6 s pevnými váhami a menšími možnosťami ladenia než Anki či RemNote | Web, iOS a Android navrhnuté na prácu offline; celý systém pod licenciou MIT s postupom na produkčné nasadenie v AWS | Hostovaná aplikácia je počas bety zadarmo; vlastné hostovanie pridáva náklady na infraštruktúru a poskytovateľov služieb | Bez priameho importu z RemNote či Anki; obsah možno vytvoriť nanovo, ale história opakovania a stav FSRS sa neprenesú |

Toto nie je bodovanie funkcií. Študent, ktorý veľa pracuje s PDF, môže prechodom na „najotvorenejšiu“ možnosť stratiť viac, než získa jej licenciou. Niekto s jednoduchým balíčkom slovíčok zasa možno platí za systém poznámok, ktorý už nepoužíva. Začnite riadkom, ktorý vystihuje váš problém, a potom otestujte obmedzenia migrácie.

Bezplatnosť a otvorený zdrojový kód sú dve samostatné kritériá. RemNote Free aj Obsidian ponúkajú základnú aplikáciu zadarmo, ale majú uzavretý zdrojový kód. Zdrojový kód jadra počítačovej verzie Anki, Logseq a Nibomo je verejne dostupný; AnkiMobile je však stále platená aplikácia pre iOS a pri vlastnom hostovaní Nibomo naďalej vznikajú náklady na cloud.

## Zostaňte pri RemNote, ak si ceníte prepojenie celého štúdia

RemNote spája kroky, ktoré väčšina alternatív oddeľuje. Jeho [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) umožňuje mať PDF otvorené vedľa poznámok, vkladať odkazy na konkrétne zvýraznené pasáže a meniť poznámky či zvýraznenia na kartičky. V pláne Free môžete anotovať tri dokumenty; aktuálny [cenník](https://www.remnote.com/pricing) uvádza pri Pro neobmedzený počet anotovaných dokumentov.

Ani plánovač už nie je jednoznačným dôvodom na odchod. RemNote teraz v dokumentácii uvádza [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) ako beta možnosť, ktorú zapnete manuálne. Po aspoň 1 000 opakovaniach dokáže trénovať váhy na základe vašej vlastnej histórie. Anki stále ponúka podrobnejšie nastavenia, ale človek, ktorému vyhovujú poznámky a PDF v RemNote, sa ich nemusí vzdať len preto, aby mohol používať FSRS.

Aj režim offline dokáže viac než len udržať aplikáciu v chode v otvorenej karte prehliadača. [Počítačové a mobilné aplikácie](https://help.remnote.com/en/articles/6752029-offline-mode) RemNote umožňujú po inštalácii a prihlásení upravovať poznámky a opakovať kartičky offline. Počítačová aplikácia uchováva úplnú lokálnu kópiu obrázkov a PDF. Na mobile a webe môžu chýbať médiá, ktoré nie sú vo vyrovnávacej pamäti, a webovú aplikáciu nemožno bez pripojenia spustiť po zatvorení alebo obnovení karty.

Ak ste začali hľadať **bezplatnú alternatívu k RemNote**, pred prechodom vyskúšajte plán Free. Ak vám prekáža chýbajúci prístup k zdrojovému kódu, lokálny režim nie je to isté ako open source alebo vlastné hostovanie. Samostatný článok o tom, [či je RemNote open source](/blog/is-remnote-open-source/), tento rozdiel rozoberá podrobnejšie.

## RemNote vs Anki: vyberte si, čo má byť v centre

Užitočný rozdiel pri porovnaní **RemNote vs Anki** nespočíva v tom, že jedno má poznámky a druhé nie. Aj Anki ukladá poznámky, no poznámka v Anki je súbor polí, z ktorých [šablóny kartičiek](https://docs.ankiweb.net/templates/intro.html) vytvárajú kartičky na opakovanie. RemNote vychádza z dokumentov a prepojených odrážok, ktoré sa môžu stať kartičkami. Jedno je vyspelý systém na tvorbu kartičiek, druhé študijné prostredie postavené na poznámkach a zdrojoch.

Vyberte si Anki, ak sú pre vás kľúčové vlastné polia, generované varianty kartičiek, šablóny HTML/CSS, doplnky alebo roky histórie opakovania. Jeho aktuálne [nastavenia FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) zahŕňajú optimalizáciu parametrov, požadovanú mieru zapamätania a simuláciu študijnej záťaže. [Exporty](https://docs.ankiweb.net/exporting.html) dokážu uchovať celú kolekciu vo formáte `.colpkg`, zatiaľ čo balíky `.apkg` môžu zahŕňať údaje o plánovaní, predvoľby a médiá.

RemNote umožňuje prechod do Anki, ale na označení záleží: [export do Anki je „Flashcards Only“](https://help.remnote.com/en/articles/7898019-exporting-notes). Odrážky bez kartičiek sa nezahrnú. RemNote v exportovaných kartičkách zachováva kontext nadradených položiek a zjednodušuje kartičky s výberom odpovede, no export nie je vaša znalostná báza, knižnica PDF ani celý postup čítania. Oficiálna stránka o exporte z RemNote tiež nesľubuje, že sa do Anki prenesie každá časť stavu plánovania. Skôr než budete túto cestu považovať za bezstratovú, otestujte ju.

Anki je tu najsilnejšou voľbou zameranou na kartičky. RemNote Reader však nenahradí bez komplikácií. Ak stále anotujete odborné články a píšete prepojené poznámky, skombinujte ho s nástrojom na poznámky namiesto toho, aby ste túto úlohu vnucovali Anki. [Širší prehľad alternatív k Anki](/sk/blog/best-anki-alternatives/) predstavuje ďalšie možnosti zamerané na kartičky.

## Obsidian a Anki: lokálne súbory a zámerné rozdelenie úloh

Niektorí ľudia hľadajúci alternatívu k RemNote nepotrebujú ďalšiu aplikáciu na všetko. Chcú poznámky, ktoré zostanú bežnými súbormi, a systém opakovania, ktorý sa môže vyvíjať nezávisle. Obsidian a Anki predstavujú jasné rozdelenie týchto úloh.

[Obsidian ukladá poznámky](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) ako obyčajný text formátovaný v Markdowne v lokálnom priečinku. Aplikácia je zadarmo aj bez účtu; voliteľný [Obsidian Sync](https://obsidian.md/pricing) začína na 4 USD mesačne pri ročnej fakturácii. Obsidian nemá otvorený zdrojový kód, ale súbory s poznámkami sú priamo čitateľné a možno ich zálohovať bežnými súborovými nástrojmi.

Na poznámky použite export RemNote do Markdownu a na kartičky jeho export `.apkg`. Počítajte s úpravami. Vnorená osnova exportovaná do čitateľného Markdownu nie je to isté ako živé odkazy, portály, šablóny či pripnuté miesta v PDF v RemNote. Keď sú poznámky a kartičky v dvoch aplikáciách, ani zmeny sa už medzi nimi automaticky neprenášajú.

Táto cesta funguje, keď je kontrola nad lokálnymi súbormi dôležitejšia než plynulý postup „zvýrazniť, prepojiť, vytvoriť kartičku, zopakovať“. Je nevýhodná, ak ste si RemNote vybrali práve kvôli tomuto postupu.

## Logseq: open-source nástroj postavený na poznámkach prechádza zmenou

Logseq patrí do porovnania **open-source alternatív k RemNote**, pretože v ňom poznámky skutočne stoja na prvom mieste. Oficiálny [repozitár s licenciou AGPL](https://github.com/logseq/logseq) opisuje aplikáciu na správu znalostí s prepojenými blokmi a anotovaním PDF. [Aktuálna dokumentácia databázovej verzie](https://github.com/logseq/docs/blob/master/db-version.md#cards) pridáva vstavané kartičky: označíte blok, vidíte, kedy ho treba zopakovať, a pri opakovaní použijete jeden zo štyroch stupňov hodnotenia.

Aktuálny stav je dôležitejší než zoznam funkcií. Samotný repozitár Logseq uvádza, že databázová verzia je v bete, zatiaľ čo nová aplikácia pre iOS a synchronizácia v reálnom čase sú v alfe. Aktuálna dokumentácia databázovej verzie hovorí, že aplikácia pre Android zatiaľ nie je otvorená na alfa testovanie. Logseq výslovne upozorňuje na možnú stratu dát a odporúča skúšobný graf bez kriticky dôležitých údajov spolu so zálohami. [Poznámky k zmenám databázovej verzie](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) tiež uvádzajú, že nový algoritmus kartičiek neimportuje vlastnosti ani údaje SRS zo starších kartičiek Logseq.

Rovnako presne treba hovoriť aj o prenosnosti dát. Aktuálna [dokumentácia exportu databázovej verzie](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) ponúka SQLite s prílohami, EDN a štandardný Markdown. Uvádza, že EDN je jediný upraviteľný export, ktorý úplne zachytáva dáta grafu, no neodporúča používať EDN ako jedinú zálohu. Štandardný Markdown vynecháva vlastnosti a časové pečiatky.

Logseq teda stojí za vyskúšanie, ak vám záleží na otvorenom kóde, prepojených poznámkach, PDF aj vstavaných kartičkách. V auguste 2026 by som si ho však nevybral na jednodňový presun dôležitej znalostnej bázy zo štúdia medicíny. Najprv ho používajte súbežne s RemNote a dajte mu čas, kým sa počas tejto prechodnej fázy jeho fungovanie na vašich zariadeniach ustáli.

## Nibomo: otvorený celý systém, úzko zameraný spôsob učenia

Nibomo volí takmer opačný kompromis než RemNote. Jeho [funkcie](/sk/features/) sa sústreďujú na kartičky s prednou a zadnou stranou v Markdowne, balíčky, značky, médiá, opakovanie pomocou FSRS, aplikácie navrhnuté na prácu offline a prípravu návrhov kartičiek s pomocou AI. Nemá znalostnú bázu prepojených poznámok, čítačku PDF, natívnu počítačovú aplikáciu ani priamy import z RemNote.

Rozsah zverejneného zdrojového kódu je široký: repozitár s licenciou MIT zahŕňa web, iOS, Android, prihlasovanie, backend, synchronizáciu aj infraštruktúru. Podporovaný [návod na vlastné produkčné hostovanie](/docs/self-hosting/) používa AWS CDK. Nejde o lokálny systém, ktorý spustíte jedným príkazom. Prevádzkovateľ zodpovedá za náklady na cloud, tajné údaje, migrácie, monitoring, zálohy, skúšky obnovy a samostatné zostavenie mobilných aplikácií.

Pre existujúceho používateľa RemNote je väčším obmedzením migrácia. Nibomo importuje vlastné balíky `flashcards.zip`, nie Markdown z RemNote ani `.apkg` z Anki. Tieto balíky prenášajú kartičky, značky a odkazované médiá, ale nie históriu opakovania, stav FSRS, nastavenia pracovného priestoru, úplnú štruktúru balíčkov ani účty. AI chat dokáže z exportovaného textu vytvoriť návrhy kartičiek, ktoré si skontrolujete; ide o opätovné vytvorenie obsahu, nie o pokračovanie pôvodnej kolekcie. [Návod na migráciu cez TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) krok za krokom ukazuje, čo sa pri tom stráca.

Vyberte si Nibomo pre nový alebo jednoduchý priestor na kartičky, ak vám záleží na prístupe k zdrojovému kódu celého systému. Pri prepojenom štúdiu si ponechajte RemNote a pri dôraze na verný prenos dát alebo pokročilú štruktúru kartičiek zvoľte Anki. Užšie porovnanie systémov kartičiek nájdete v článku [Anki vs Nibomo](/blog/anki-vs-flashcards-open-source-app/) a v [prehľade open-source aplikácií na kartičky](/sk/blog/best-open-source-flashcard-apps-2026/).

## Čo sa z RemNote neprenesie bez problémov

RemNote ponúka niekoľko užitočných exportov, ale žiadny súbor sám osebe nevytvorí celý produkt v inej aplikácii.

- **Úplný export RemNote** je najlepší formát na obnovenie v RemNote. Momentálne vynecháva obrázky a PDF.
- **Export Anki `.apkg`** obsahuje iba kartičky. Odrážky bez kartičiek sa pri tejto ceste vynechajú a výsledkom nie je váš systém prepojených poznámok.
- **Markdown, HTML, OPML a text** uľahčia čítanie obsahu inde. Nezabezpečia, aby iná aplikácia rozumela každému vzťahu alebo postupu špecifickému pre RemNote.
- **Zvýraznenia v PDF a zdroje** treba skontrolovať samostatne. RemNote Reader umožňuje stiahnuť PDF so zvýrazneniami, no nepredpokladajte, že tento súbor bude aj súčasťou úplného exportu znalostnej bázy.
- **Nastavenia, motívy a doplnky** podľa [dokumentácie zálohovania](https://help.remnote.com/en/articles/6301627-remnote-backups) nie sú zahrnuté v manuálnej zálohe RemNote.
- **Stav opakovania** treba v cieľovej aplikácii overiť pri každej kartičke. Import môže zachovať otázku a odpoveď, a pritom spustiť plán opakovania od začiatku.

Preto nestačí, že aplikácia „podporuje Markdown“ alebo „importuje Anki“. Prenosnosť má viac vrstiev: čitateľné poznámky, použiteľné médiá, prepojené zdroje, štruktúru kartičiek a históriu učenia.

## Vyskúšajte si prechod skôr, než zrušíte predplatné

Zabezpečte si možnosť návratu. Jedna pokojná hodina teraz vás vyjde lacnejšie než zistenie, že vám chýba PDF počas skúškového týždňa.

1. Vytvorte nový manuálny export **RemNote (Complete)** a uchovajte ho bez zmien.
2. Na počítači skopírujte lokálne zálohy `.db.zip` a priečinok `files`. Stiahnite si všetky pôvodné alebo anotované PDF, ktoré nemôžete nahradiť.
3. Vyberte malú vzorku, na ktorej sa ukážu možné problémy: vnorené poznámky, odkazy, jedno PDF, obrázky, doplňovacie kartičky alebo kartičky s výberom odpovede, značky a kartičky s bohatšou históriou opakovania.
4. Exportujte vzorku do všetkých formátov, ktoré zvolená cesta potrebuje, zvyčajne Markdown na poznámky a `.apkg` pre Anki.
5. Importujte ju do dočasného úložiska poznámok, grafu, profilu alebo pracovného priestoru. Vedľa seba porovnajte RemNote a cieľovú aplikáciu: počty, formátovanie, odkazy, médiá, predné a zadné strany kartičiek aj termíny opakovania.
6. Pracujte offline na každom zariadení, ktoré plánujete používať. Potom sa znova pripojte a overte, že úpravy a opakovania dorazili tam, kam mali.
7. Obnovte úplnú zálohu do dočasnej lokálnej znalostnej bázy RemNote. Stiahnutý archív sa stane plánom obnovy až vtedy, keď ho úspešne otvoríte.
8. Učte sa v oboch systémoch aspoň počas niekoľkých bežných študijných blokov. Predplatné zrušte až po tom, čo náhrada zvládne každodennú prácu, export aj obnovenie.

Zdrojové exporty si ponechajte aj po prechode. Úspešný import dokazuje kompatibilitu s dnešnou verziou cieľovej aplikácie, nie trvalý prístup ku každej časti pôvodného systému.

## Praktický užší výber

- **Zostaňte pri RemNote**, ak sú pre vás cenné prepojené poznámky a štúdium z PDF. Jeho plán Free alebo výlučne lokálna znalostná báza už možno vyriešia váš problém.
- **Vyberte si Anki**, ak sú na prvom mieste kartičky, šablóny, nastavenia FSRS a verný prenos dát.
- **Vyberte si Obsidian a Anki**, ak bežné lokálne súbory s poznámkami stoja za používanie dvoch nástrojov.
- **Vyskúšajte Logseq**, ak potrebujete open-source prepojené poznámky a vstavané kartičky, no kým sú jeho aktuálna databáza a synchronizácia v bete a alfe, neskúšajte ho na kriticky dôležitých dátach.
- **Vyberte si Nibomo**, ak je jednoduchý nový systém kartičiek a prístup k zdrojovému kódu celého systému dôležitejší než poznámky, PDF alebo zachovanie plánu opakovania.

Vyvíjam Nibomo, a napriek tomu by som si na prepojený poznámkový systém s množstvom PDF ponechal RemNote a na zložitú dlhoročnú kolekciu vybral Anki. Nibomo je užšie zameraná voľba: kartičky s prednou a zadnou stranou, otvorený systém a nový plán opakovania.

Keď už viete, ktoré obmedzenie dokážete prijať, testujte iba túto cestu. Ak vám Nibomo vyhovuje, [úvodný návod](/docs/getting-started/) ukazuje, ako začať s hostovanou verziou aj vlastným hostovaním. Ak nie, zostať pri RemNote je tiež rozumné rozhodnutie.
