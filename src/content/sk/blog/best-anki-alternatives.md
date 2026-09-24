---
title: "Alternatívy k Anki v roku 2026: čo si pri prechode zachováte, čo stratíte a čo získate"
description: "Porovnajte sedem alternatív k Anki podľa vernosti migrácie, práce offline, plánovania, ceny, prístupu ku kódu a vlastného hostingu. Zistite, kedy je bezpečnejšie zostať pri Anki."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternatívy k Anki"
  - "alternatíva k Anki"
  - "aplikácie podobné Anki"
  - "open source alternatíva k Anki"
  - "bezplatné alternatívy k Anki"
  - "alternatíva k Anki pre iOS"
  - "prechod z Anki"
---

Import z Anki sa môže skončiť bez chyby a napriek tomu zničiť to, vďaka čomu váš balíček funguje. Text sa prenesie. Kartičky sa otvoria. Až potom si všimnete, že chýba CSS, zvukové pole je prázdne, každá kartička je nová alebo sa z jednej poznámky už nevytvárajú kartičky v očakávaných smeroch otázka–odpoveď.

Práve tieto rozdiely vás pri prechode z Anki môžu vyjsť draho. Prehľadnejší editor či lacnejšie predplatné si všimnete ešte pred prechodom. Správanie šablón, históriu opakovaní, termíny, doplnky, médiá offline a možnosti odchodu z novej aplikácie často spoznáte až vtedy, keď už vznikla škoda.

Toto porovnanie sa preto začína tým, čo sa pri prenose zachová. Pri siedmich aplikáciách podobných Anki rozoberá, čo dokážu prevziať z existujúcej zbierky, čo sa po importe zmení a kedy je bezpečnejšie zostať pri Anki.

> **Môj vzťah k produktu:** Som Kirill Markin a vyvíjam [Nibomo](https://nibomo.com/), jeden z produktov uvedených nižšie. Zaradil som ho pre otvorený zdrojový kód, možnosť vlastného hostingu a prácu s agentmi. Nie je automatickým víťazom: nemá priamy import `.apkg`, pri migrácii z Anki sa strácajú údaje a prevádzka celého systému na vlastnej infraštruktúre vyžaduje skutočnú prácu správcu.

**Fakty overené:** 28. augusta 2026. Ceny sú verejné ceny pre USA alebo uvedené miestne ceny dostupné v daný deň. Dane, regióny, ponuky pre vzdelávanie a platby cez obchody s aplikáciami môžu výslednú sumu zmeniť.

![Hodinár kontroluje, či sa osvedčený strojček vreckových hodiniek zmestí do iného puzdra](/blog/best-anki-alternatives.png)

## Stručná odpoveď, skôr než čokoľvek presuniete

Pokiaľ nemáte konkrétny dôvod na zmenu, zostaňte pri Anki. Prejdite inam len vtedy, keď iná aplikácia odstráni opakujúci sa problém a tento prínos stojí za migráciu.

Tri produkty prijímajú balíčky Anki aj s údajmi o učení, no rozsah prenosu sa pri každom líši:

- **Mnemosyne** dokumentuje úplný import z Anki vrátane vlastných typov kartičiek a údajov o učení. Z tohto výberu má najbližšie k tradičnej lokálnej počítačovej aplikácii s otvoreným kódom, hoci nemá natívnu aplikáciu pre iOS.
- **Mochi** importuje súbory `.apkg` s históriou opakovaní. Prevádza HTML na Markdown, odstraňuje CSS a JavaScript a štyri tlačidlá hodnotenia z Anki nahrádza možnosťami Remembered alebo Forgot.
- **RemNote** importuje súbory `.apkg`, väčšinu typov poznámok a históriu opakovaní. Jeho aktuálny návod však uvádza aj to, že importované kartičky idú do samostatného radu **Need to Learn**. „Importovaná história opakovaní“ preto neznamená „presne skopírovaný dnešný rad z Anki“.

Zvyšné štyri možnosti znamenajú opätovné vytvorenie obsahu, nie migráciu zbierky:

- **Quizlet** sa hodí na verejné sady, triedy, hry a riadené precvičovanie.
- **Brainscape** ponúka skupine jednoduchší spôsob opakovania s hodnotením istoty od 1 do 5.
- **SuperMemo** znamená prechod na jeho proprietárnu metódu a katalóg kurzov.
- **Nibomo** poskytuje webovú aplikáciu a natívnych klientov pod licenciou MIT, backend na vlastný hosting, API a prístup cez MCP. Jeho postup s TXT alebo CSV, pri ktorom výsledok kontrolujete, nezachováva stav učenia z Anki.

Ak vaše kartičky závisia od presného zobrazenia, doplnkov alebo aktuálneho radu na opakovanie, zotrvanie pri Anki nie je nerozhodnosť. Je to odpoveď.

## Najprv zistite, čo vaša zbierka v Anki skutočne obsahuje

„Balíček“ nie je jeden prenosný objekt. Pred porovnávaním produktov si rozdeľte jednotlivé súčasti, ktoré možno budete presúvať.

| Časť zbierky | Čo môže Anki vložiť do exportného balíka | Čo musí cieľová aplikácia výslovne podporovať |
| --- | --- | --- |
| **Obsah poznámok** | Textové polia a uložené HTML | Priradenie polí, dopĺňanie vynechaného textu (cloze), text v iných písmach než latinke, kód a zalomenia riadkov |
| **Generovanie kartičiek** | Typy poznámok a šablóny kartičiek | Kartičky v priamom aj opačnom smere, vlastné polia, CSS a správanie JavaScriptu |
| **Médiá** | Lokálne obrázky, zvuk a ďalšie súbory, keď je zapnuté **Include media** | Rozbalenie súborov, odkazy na ne, podporované formáty a synchronizáciu medzi zariadeniami |
| **Usporiadanie** | Balíčky, podbalíčky, značky a voliteľné predvoľby balíčkov | Hierarchiu, význam značiek, predvoľby a výber obsahu na učenie |
| **Stav učenia** | Informácie o plánovaní a históriu opakovaní, ak ich zahrniete | Termíny, intervaly, zabudnutia a prevod do plánovača cieľovej aplikácie |
| **Kód, ktorý rozširuje prácu s aplikáciou** | Doplnky nie sú súčasťou exportného balíka kartičiek | Náhradu nástrojov na prezeranie zbierky, hromadné úpravy, generovanie poznámok a ďalšie funkcie doplnkov |

[Príručka Anki k exportu](https://docs.ankiweb.net/exporting.html) dokumentuje všetky tieto možnosti balíkov. Textový importér spracuje len obsah z prvého riadka tabuľky a možno aj značky. Priamy importér `.apkg` dokáže spracovať viac, ale každý produkt si určuje, čo prevedie a čo zahodí.

Preto je tvrdenie „importuje z Anki“ príliš neurčité na rozhodnutie o prechode. Položte si tri samostatné otázky:

1. **Má kartička stále rovnaký význam?** Skontrolujte polia, smery vygenerovaných kartičiek, dopĺňanie vynechaného textu, médiá a zobrazenie.
2. **Vie cieľová aplikácia, čo som sa už naučil?** Skontrolujte záznamy opakovaní, aktuálny stav, termíny a prvý skutočný rad na opakovanie.
3. **Môžem z nej neskôr odísť?** Exportujte údaje z cieľovej aplikácie a pozrite sa, čo výstupný formát naozaj obsahuje.

Pri prvej otázke môže importér obstáť a pri zvyšných dvoch zlyhať.

## Čo sa pri migrácii zachová

| Produkt | Spôsob importu z Anki | Stav učenia | Hlavná možná strata, ktorú treba preveriť |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Priamy import `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) pre väčšinu typov poznámok, médiá a históriu opakovaní | História opakovaní sa prenesie, ale importované kartičky vstúpia do samostatného radu **Need to Learn** v RemNote | Rozsiahle CSS, vlastný JavaScript, niektoré funkcie generovania reči z textu a premenované polia pre zakrývanie častí obrázkov |
| [Mochi](https://mochi.cards/) | [Priamy import `.apkg`](https://mochi.cards/docs/import-and-export/importing/) vrátane histórie opakovaní | História sa prenesie; dokumentácia nesľubuje totožný rad ani termíny ako v Anki | HTML sa zmení na Markdown; CSS a JavaScript sa odstránia; ďalšie hodnotenie má dve možnosti |
| [Mnemosyne](https://mnemosyne-proj.org/) | Projekt dokumentuje [úplný import z Anki](https://mnemosyne-proj.org/features) s vlastnými typmi kartičiek a údajmi o učení | Údaje o učení sa importujú do iného plánovača | Presné správanie šablón, prevedené termíny opakovania a zobrazenie kartičiek stále treba otestovať |
| [Quizlet](https://quizlet.com/) | [Vloženie pojmov a definícií](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Z Anki sa neprenáša | Typy poznámok, šablóny, balíčky, štruktúra médií a všetky údaje o plánovaní |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX alebo ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Z Anki sa neprenáša | Šablóny, doplnky, pravidlá pre médiá a všetky údaje o plánovaní |
| [SuperMemo](https://www.supermemo.com/) | [Vloženie riadkov s otázkami a odpoveďami oddelenými oddeľovačom](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), najviac 100 naraz | Z Anki sa neprenáša | Štruktúra zbierky, médiá, šablóny a všetky údaje o plánovaní |
| [Nibomo](https://nibomo.com/) | Vytvorenie návrhu z Anki TXT alebo CSV s pomocou AI a následnou kontrolou | Z Anki sa neprenáša | Bez podpory `.apkg`; šablóny, vernosť médií, hierarchia balíčkov a všetky údaje o plánovaní zostávajú v Anki |

## Cena, používanie offline, plánovanie a kontrola nad systémom

| Produkt | Cena overená 28. augusta 2026 | Hranice používania offline | Plánovač | Zdrojový kód a vlastný hosting |
| --- | --- | --- | --- | --- |
| **RemNote** | [Zadarmo; Pro 8 USD/mesiac, účtovaných ako 96 USD/rok](https://www.remnote.com/pricing) | Nainštalované aplikácie po prihlásení umožňujú úpravy a opakovanie offline. Počítač uchováva všetky médiá znalostnej bázy; mobil ukladá do vyrovnávacej pamäte len niektoré nedávne obrázky. Web potrebuje stále otvorenú kartu prehliadača. | [Anki SM-2 alebo beta FSRS v6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Proprietárne jadro; podporovaný postup vlastného hostingu nie je zdokumentovaný |
| **Mochi** | [Offline zadarmo; synchronizácia Pro 5 USD/mesiac](https://mochi.cards/#pricing-section) | Nainštalované aplikácie fungujú úplne offline bez účtu. Úložisko prehliadača sa môže vymazať. | [Plánovač Mochi alebo FSRS](https://mochi.cards/docs/reviewing/fsrs/), oba s Remembered / Forgot | Proprietárne jadro; verejné repozitáre obsahujú integrácie, nie aplikáciu na vlastný hosting |
| **Mnemosyne** | Zadarmo | [Lokálne používanie na počítači a opakovanie offline na Androide](https://mnemosyne-proj.org/download-mnemosyne.php); na Androide nemožno upravovať kartičky. Bez natívnej aplikácie pre iOS. | Adaptívne plánovanie podľa toho, ako dobre si vybavíte odpoveď, na škále od 0 do 5 | Licencie zdrojového kódu sa líšia podľa komponentu; vlastný synchronizačný server na počítači alebo zariadení bez grafického rozhrania |
| **Quizlet** | Základné používanie zadarmo; [Plus 35,99 USD/rok, Plus Unlimited 44,99 USD/rok](https://quizlet.com/upgrade?source=signup) | Stiahnuté sady fungujú offline v aplikáciách pre iOS a Android v režimoch Flashcards a Match. | [Intervalové opakovanie na webe](https://quizlet.com/features/spaced-repetition) pre sady so 100 a viac pojmami; podpora mobilov je stále označená ako pripravovaná. Learn je samostatné adaptívne precvičovanie. | Proprietárna hostovaná služba; bez podporovaného postupu vlastného hostingu |
| **Brainscape** | [Zadarmo; Pro 7,99 USD/mesiac pri ročnej platbe](https://www.brainscape.com/pricing) | [Mobil dokáže uchovať prácu offline a neskôr synchronizovať už stiahnuté triedy](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); dokumentácia nesľubuje úplnú lokálnu knižnicu. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), hodnotenie od 1 do 5 | Proprietárna hostovaná služba; bez podporovaného postupu vlastného hostingu |
| **SuperMemo** | Bezplatný účet s obmedzeniami; [35,99 PLN/mesiac alebo 359 PLN/rok](https://www.supermemo.com/en/premium-subscription) | Stiahnuté kurzy v mobile fungujú offline; úpravy, AI, vyhľadávanie, nahrávky a štatistiky nie. | [Proprietárna metóda SuperMemo](https://www.supermemo.com/en/supermemo-method) | Proprietárna hostovaná služba; bez podporovaného postupu vlastného hostingu |
| **Nibomo** | [Hostované základné funkcie počas bety zadarmo; softvér na vlastný hosting zadarmo](/sk/pricing/), plus náklady na vašu infraštruktúru | Natívne aplikácie zapisujú lokálne po online prihlásení a úvodnom načítaní údajov pracovného priestoru; vzdialené médiá už musia byť vo vyrovnávacej pamäti. | [FSRS](/docs/architecture/#scheduling) | MIT; podporované produkčné nasadenie tvorí celý systém postavený najmä na AWS |

Tieto tabuľky nie sú bodovým hodnotením. Ak máte 30 000 kartičiek, ktoré sa už dlho učíte, priamy importér môže byť dôležitejší než všetky ostatné funkcie. Natívna aplikácia pre iPhone môže rozhodnúť, ak opakujete práve na ňom. Prístup ku kódu má význam len vtedy, keď ho budete udržiavať vy alebo niekto, komu dôverujete.

Každý z týchto produktov umožňuje začať zadarmo, no migrácia na bezplatné alternatívy k Anki zadarmo nie je. Cenu predplatného spočítate ľahko. Opätovné vytváranie šablón, kontrola médií a budovanie histórie opakovaní od nuly často stoja viac.

## RemNote: presuňte kartičky do prepojených poznámok

RemNote mení spôsob, akým kartičky vznikajú. Namiesto správy samostatného balíčka popri poznámkach z prednášok vytvárate kartičky priamo v osnove, dokumente alebo pri práci s PDF. To je skutočný dôvod opustiť Anki, ak vám najviac času zaberá kopírovanie materiálu medzi aplikáciou na poznámky a aplikáciou na kartičky.

Dokáže preniesť veľkú časť zbierky, no treba rozlišovať medzi históriou opakovaní a aktuálnym radom kartičiek. [Aktuálny návod RemNote na import z Anki](https://help.remnote.com/en/articles/6751471-importing-from-anki) odporúča exportovať `.apkg` s informáciami o plánovaní, predvoľbami balíčkov a médiami. Importuje históriu opakovaní a väčšinu typov poznámok vrátane základných kartičiek, dopĺňania vynechaného textu a bežných kartičiek so zakrytými časťami obrázkov.

Ten istý návod uvádza, že novo importované kartičky sa zaradia do samostatného radu **Need to Learn**. RemNote teda má históriu k dispozícii, no dokumentácia nesľubuje, že sa váš aktuálny rad naplánovaných kartičiek z Anki objaví bez zmeny. Rozsiahle CSS sa tiež zahodí, vlastný JavaScript nie je podporovaný, niektoré funkcie generovania reči z textu za behu nefungujú a import kartičiek so zakrývaním obrázkov závisí od očakávaných názvov poznámok a polí.

Vyskúšajte reprezentatívny balíček a prezrite si kartičky aj prvý rad na opakovanie. Dobre vyzerajúci import je len polovica skúšky.

Nainštalované počítačové a mobilné aplikácie po inštalácii a prihlásení fungujú offline. [Návod na režim offline](https://help.remnote.com/en/articles/6752029-offline-mode) uvádza podstatné obmedzenie médií: počítač uchováva všetky obrázky a PDF znalostnej bázy, zatiaľ čo mobil si ukladá len niektoré nedávne obrázky. Webová aplikácia môže pokračovať v už otvorenej karte prehliadača, no bez pripojenia sa nedá spustiť odznova.

Použite RemNote, keď prepojené poznámky stoja za zmenu modelu zbierky. Zostaňte pri Anki, ak šablóny kartičiek a doplnky tvoria základ vášho systému, nie iba jeho doplnkové úpravy.

## Mochi: lokálny Markdown s úplným exportom vo vlastnom formáte

Mochi je jednoduchší cieľ migrácie pre ľudí, ktorí chcú lokálne údaje, kartičky v Markdowne a menej ovládacích prvkov na obrazovke. Jeho nainštalované aplikácie fungujú na všetkých hlavných počítačových a mobilných platformách a dajú sa používať [úplne offline bez účtu](https://mochi.cards/docs/getting-started/download-and-install/). Platí sa za synchronizáciu, 5 USD mesačne.

Priamy importér z Anki prenáša históriu opakovaní, čím má Mochi výrazný náskok pred možnosťami s čisto textovým importom. Aj samotný prevod je opísaný nezvyčajne jasne: odstráni CSS a JavaScript a prevedie HTML na Markdown. Funguje to vtedy, keď význam nesie text a bežné prílohy. Ak význam závisí od šablóny, je to varovanie.

Mochi teraz ponúka dva plánovače. Predvolený zostáva jeho vlastný algoritmus, ale [FSRS možno zapnúť](https://mochi.cards/docs/reviewing/fsrs/) bez vynulovania existujúceho pokroku v Mochi. FSRS odvodzuje stav kartičiek z histórie opakovaní, ktorú má Mochi k dispozícii. Hodnotenie má aj pri FSRS stále len dve možnosti: Remembered alebo Forgot. Používatelia Anki, ktorí sa spoliehajú na Hard a Easy ako samostatné signály, by preto mali počítať s iným denným rytmom.

Možnosti exportu údajov sú jasnejšie než vo väčšine proprietárnych aplikácií. Export vo vlastnom formáte [`.mochi`](https://mochi.cards/docs/import-and-export/exporting/) obsahuje kartičky, šablóny, prílohy, značky, štruktúru balíčkov a históriu opakovaní. Markdown a CSV sa ľahšie prezerajú inde, no vynechávajú históriu opakovaní a ďalšie metadáta.

Verejné repozitáre Mochi na GitHube obsahujú [integrácie a súvisiace nástroje](https://github.com/mochi-cards/open-source), nie jadro aplikácie ani podporovaný synchronizačný server. Vyberte si ho pre používanie offline a prenosnosť údajov, nie pre kontrolu nad zdrojovým kódom.

## Mnemosyne: počítačová aplikácia s otvoreným kódom

Mnemosyne má najbližšie k tradičnému modelu „program a lokálna databáza“. Aktuálna verzia podporuje Windows, macOS a Linux a má klienta pre Android na opakovanie offline. Stránka funkcií dokumentuje kartičky s bohatým obsahom, hierarchické značky, doplnky, hodnotenie od 0 do 5 a úplný import z Anki vrátane vlastných typov kartičiek a údajov o učení.

Ide o najpriamejšiu cestu k aplikácii s otvoreným kódom v tomto výbere, ak chcete opustiť Anki bez prechodu na rozsiahly poznámkový systém alebo cloudovú službu. Má aj [vstavaný synchronizačný server](https://mnemosyne-proj.org/help/syncing), ktorý môže bežať na počítači alebo zariadení bez grafického rozhrania a spájať údaje o učení z viacerých klientov.

Súčasťou rozhodnutia sú aj nedostatky. Klient pre Android [nedokáže upravovať kartičky](https://mnemosyne-proj.org/help/android-client). Používatelia iOS musia opakovať v prehliadači cez server bežiaci na inom zariadení a oficiálna stránka funkcií tohto servera upozorňuje, že nemá bezpečnostné funkcie. Prevádzka vlastnej synchronizácie tiež znamená udržiavať server dostupný, nastaviť sieť a zálohovať dátový adresár.

Licencovanie je zložitejšie než jednoduché označenie „GPL“: [licenčný súbor projektu](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) odkazuje na rôzne podmienky podľa komponentu. [Licencia jadra](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) používa AGPL v3 s dodatočným ustanovením o názve a uvedení autorstva, kým [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) používa LGPL v3. Ak plánujete úpravy alebo ďalšie šírenie, prečítajte si tieto súbory.

## Quizlet: prechod kvôli vyučovaniu, nie vernému prenosu zbierky

Quizlet vyniká v inom prostredí. Verejné študijné sady, triedy vedené učiteľmi, zdieľanie, Match, Test, Learn a skupinové aktivity zavediete do vyučovania ľahšie než prispôsobený profil Anki.

Migrácia sa končí pri obyčajnom texte. Quizlet dokáže z vložených riadkov vytvoriť pojmy a definície, no neprečíta `.apkg` a neobnoví typy poznámok, šablóny, plánovanie ani históriu opakovaní. Autori môžu [exportovať vlastné sady ako skopírovaný text](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), bez obrázkov; skopírované sady iných používateľov sa exportovať nedajú. Prenosný je obsah, nie celá zbierka.

Plánovanie v Quizlete sa mení. Jeho nový režim [Spaced Repetition](https://quizlet.com/features/spaced-repetition) sa na webe automaticky aktivuje pri sadách s aspoň 100 pojmami a používa hodnotenia Repeat, Hard, Okay a Easy. Quizlet stále označuje podporu mobilov ako pripravovanú. Learn zostáva samostatným adaptívnym precvičovaním s limitmi používania viazanými na platený plán.

Offline tu tiež znamená mobilné aplikácie, nie web. Quizlet automaticky ukladá osem nedávnych sád a umožňuje stiahnuť ďalšie; [Flashcards a Match fungujú offline](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps) a po opätovnom pripojení sa pokrok synchronizuje.

Prejdite sem, keď je cieľom zdieľanie materiálov a aktivita v triede. Budovať odznova dlhodobo používaný osobný rozvrh opakovania len kvôli týmto funkciám sa zvyčajne neoplatí.

## Brainscape: menej rozhodovania o plánovači, obmedzenejšia migrácia

Brainscape žiada hodnotenie istoty od 1 do 5 a podľa neho vracia slabšie zvládnuté kartičky skôr. Úplný vzorec nie je zverejnený, ale tento spôsob práce sa žiakom v triede ľahko vysvetľuje.

Prijíma súbory CSV, TXT, XLSX a ODS. To je praktické pri kartičkách s prednou a zadnou stranou, no znamená to, že šablóny, doplnky, pravidlá pre médiá a údaje o učení z Anki zostanú bokom. Export osobnej zálohy patrí do plánu Pro a vytvára súbory, ktoré možno otvoriť v tabuľkovom procesore a neskôr znova importovať.

Aktuálne centrum pomoci Brainscape uvádza, že web aj mobilné aplikácie teraz ponúkajú rovnaké základné funkcie vyhľadávania, tvorby, zdieľania a učenia. Opisuje aj používanie mobilu offline, ručnú opätovnú synchronizáciu a aktualizácie tried už stiahnutých do zariadenia. Po obnovení pripojenia teda môžete údaje zosynchronizovať. Neznamená to však, že máte celý obsah účtu uložený lokálne.

Export osobných balíčkov zostáva [funkciou Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Oficiálne vydanie zdrojového kódu ani postup vlastného hostingu neexistujú.

Brainscape stojí za zváženie, keď Anki ľuďom, ktorí sa potrebujú učiť, pripadá príliš náročné na nastavovanie. Nie je dobrým východiskom pre niekoho, kto tieto nastavenia už vie dobre využiť.

## SuperMemo: vyberte si metódu a prijmite nový začiatok

Súčasná služba SuperMemo.com je platforma na učenie jazykov pre web, iOS a Android postavená na proprietárnej metóde plánovania SuperMemo. Je oddelená od staršieho produktu pre Windows, ktorý môžu poznať dlhoroční používatelia SuperMemo.

Rozhodujete sa tu pre metódu a katalóg, nie pre bezstratovú migráciu z Anki. SuperMemo podporuje [hromadné vytváranie vložením riadkov s otázkami a odpoveďami oddelenými oddeľovačom](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), s limitom 100 kartičiek na import. Nenašiel som aktuálny oficiálny importér `.apkg` ani spôsob, ako si používateľ môže exportovať údaje z hostovanej služby. Šablóny, doplnky, štruktúra médií a história opakovaní sa preto týmto zdokumentovaným postupom neprenášajú.

Stiahnuté kurzy možno študovať offline v mobilných aplikáciách. [Návod na režim offline](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) vylučuje funkcie AI, pridávanie MemoCards, vyhľadávanie, nahrávky, štatistiky a editor kurzov, preto si materiál pripravte a synchronizujte ešte pred odpojením.

Vyberte si SuperMemo, ak vám jeho vlastná metóda alebo katalóg kurzov stoja za nový rozvrh opakovania. Ak je prioritou zachovanie existujúceho rozvrhu, rieši iný problém, než potrebujete.

## Nibomo: prístup ku kódu celého systému, no najslabší import z Anki

Nibomo vám dáva kontrolu nad veľkou časťou systému. [Repozitár s licenciou MIT](https://github.com/kirill-markin/flashcards-open-source-app) obsahuje webovú aplikáciu, klientov pre iOS a Android, backend, offline synchronizáciu, infraštruktúru, [verejné API](/docs/api/) a [server MCP](/docs/mcp-connector/). Opakovanie používa [FSRS](/docs/architecture/#scheduling). Web, iOS aj Android najprv zapisujú lokálne, pridajú zmeny do radu na odoslanie a po obnovení pripojenia ich synchronizujú.

Tým sa však Nibomo nestáva kompatibilným s Anki. Nedokáže čítať `.apkg` ani `.colpkg`. Podporovaná [migrácia cez Anki TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) vytvára návrhy prevažne textových kartičiek s pomocou AI a vyžaduje kontrolu výsledku. Nezachováva šablóny, doplnky, hierarchiu balíčkov, termíny, intervaly ani záznamy opakovaní. Odkazy na médiá v súbore TXT nie sú samotné mediálne súbory, takže balíčky s množstvom médií treba samostatne vytvoriť nanovo a overiť.

Ani vlastný balík Nibomo `flashcards.zip` nie je plnohodnotnou zálohou. Presúva kartičky, značky a súvisiace médiá medzi pracovnými priestormi Nibomo. Neprenáša históriu opakovaní, stav FSRS, úplné štruktúry balíčkov, nastavenia pracovného priestoru ani účty.

Hostované základné funkcie sú [počas bety zadarmo](/sk/pricing/). Vlastný hosting produkčného systému nie je inštalácia Dockeru jedným príkazom: [návod na vlastný hosting](/docs/self-hosting/) používa AWS CDK a vyžaduje služby AWS aj Cloudflare, Resend, Sentry, správu tajných údajov, migrácie, zálohy, obnovu a aktualizácie. Docker Compose slúži na vývoj, nie ako podporované produkčné nasadenie.

Použite Nibomo, keď je dôvodom na prechod úplný zdrojový kód a backend pod kontrolou prevádzkovateľa a vaše kartičky sú dosť jednoduché na bezpečné opätovné vytvorenie. [Otvorte hostovanú aplikáciu](https://app.nibomo.com/) a vyskúšajte malý dočasný balíček. Ak je prvoradé verné zachovanie stavu učenia, zostaňte pri Anki alebo otestujte RemNote, Mochi či Mnemosyne.

## Ktorá alternatíva k Anki funguje na iOS bez nepríjemného prekvapenia pri migrácii?

„Alternatíva k Anki pre iOS“ môže znamenať dve rôzne veci: natívnu aplikáciu pre iPhone alebo náhradu za [jednorazový nákup AnkiMobile za 24,99 USD](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo aj Nibomo majú aplikácie pre iOS. Mnemosyne nie. Otázka migrácie však zostáva:

- **Mochi** zachováva viac než možnosti pre iOS s čisto textovým importom: importuje históriu opakovaní z `.apkg`, pričom prevádza obsah na Markdown a používa hodnotenie s dvoma možnosťami.
- **RemNote** tiež importuje históriu opakovaní z `.apkg`, no otestujte jeho rad **Need to Learn** namiesto predpokladu, že dnešný rozvrh Anki zostane zachovaný.
- **Quizlet** sa hodí na zdieľanie v triede, ale import z Anki je čisto textový a jeho nový režim intervalového opakovania zatiaľ nie je dostupný v mobile.
- **Nibomo** ponúka dostupný zdrojový kód a natívneho klienta pre iOS, no migrácia z Anki vynuluje stav učenia.
- **Brainscape** a **SuperMemo** dávajú zmysel len vtedy, ak ich metóda opakovania stojí za opätovné vytvorenie kartičiek aj rozvrhu.

Skôr než opustíte AnkiMobile kvôli cene, porovnajte ju s nákladmi na predplatné a hodinami potrebnými na opravu migrácie. Jednorazový nákup aplikácie môže byť lacnejší než bezplatná aplikácia, ktorá z vašej roky budovanej zbierky urobí projekt na ručné prerábanie.

## Kedy je bezpečnejšie zostať pri Anki

Aj zotrvanie pri Anki je rozhodnutie. Neznamená, že si nedokážete vybrať niečo novšie. Zostaňte pri Anki, ak platí niečo z tohto:

- vaša zbierka závisí od vlastných šablón, CSS, JavaScriptu alebo doplnkov;
- zakrývanie častí obrázkov (Image Occlusion), zvuk alebo iné médiá nesú podstatný význam;
- jedna poznámka generuje kartičky vo viacerých smeroch, ktoré musia zostať prepojené;
- roky histórie opakovaní a aktuálne termíny sú cennejšie než nový editor;
- spoliehate sa na prácu na počítači alebo kombináciu platforiem, ktorú alternatíva nepokrýva;
- offline režim náhrady funguje len v prostredí, ktoré nebudete používať;
- vlastný hosting vás teoreticky láka, ale nechcete prevádzkovať, zabezpečovať, zálohovať a aktualizovať server;
- alternatíva okrem prehľadnejšieho vzhľadu nerieši žiadny opakujúci sa problém.

Anki stále ponúka vyspelý ekosystém doplnkov, flexibilné šablóny poznámok a kartičiek, FSRS aj ovládanie starších plánovačov, lokálne nainštalovaných klientov a formáty balíkov, ktoré dokážu preniesť zbierku. Žiadny z uvedených produktov toto všetko nenahrádza.

Užšie porovnanie toho, nad čím máte kontrolu, nájdete v [sprievodcovi aplikáciami na kartičky s otvoreným kódom](/blog/best-open-source-flashcard-apps-2026/). Ak rozhoduje fungovanie offline, [porovnanie offline aplikácií na kartičky](/blog/best-offline-flashcards-app/) rozlišuje medzi nainštalovanými aplikáciami, obsahom vo vyrovnávacej pamäti a kartami prehliadača.

## Kontrolný zoznam migrácie, ktorá sa stále môže skončiť slovom „nie“

Nezačínajte celou zbierkou. Pripravte skúšku, pri ktorej môžete bez následkov zistiť, že prechod nefunguje.

1. **Vytvorte balík na obnovu.** Exportujte `.colpkg` s médiami, uložte ho mimo profilu Anki a druhú kópiu si odložte inam.
2. **Vyberte problematický balíček.** Zahrňte dopĺňanie vynechaného textu, vlastné polia, kartičky v priamom aj opačnom smere, vnorené balíčky, značky, obrázky, zvuk a dostatok histórie opakovaní na odhalenie toho, ako sa rozvrh prevedie.
3. **Exportujte formát, ktorý cieľ skutočne podporuje.** Pre priamy importér použite `.apkg` s plánovaním, predvoľbami a médiami. Notes in Plain Text použite len vtedy, keď prijímate opätovné vytvorenie samotného obsahu.
4. **Zaznamenajte východiskový stav.** Počet poznámok a kartičiek, názvy značiek a balíčkov, počet mediálnych súborov, niekoľko termínov a intervalov a očakávaný počet kartičiek generovaných z každého typu poznámky.
5. **Importujte do dočasného priestoru.** Neprepisujte zdrojový profil ani nezlučujte prvý skúšobný import s trvalou knižnicou v cieľovej aplikácii.
6. **Obsah a stav učenia kontrolujte oddelene.** Správna predná a zadná strana nedokazuje, že sa zachovali vynechané časti textu, médiá, súvisiace kartičky z tej istej poznámky, história opakovaní alebo nasledujúci termín.
7. **Na každom zariadení, ktoré naozaj používate, spustite aplikáciu odznova bez pripojenia.** Opakujte, upravujte, aplikáciu úplne zatvorte, znova ju otvorte offline, potom obnovte pripojenie a skontrolujte ďalšie zariadenie.
8. **Pozrite si rad skôr, než sa rozvrhy rozídu.** Porovnajte prvú skupinu kartičiek na opakovanie a vzorku intervalov, skôr než začnete tie isté skutočne používané kartičky hodnotiť v oboch aplikáciách. Po prvom opakovaní inde sa oba rozvrhy vyvíjajú nezávisle.
9. **Pred definitívnym prechodom otestujte odchod.** Exportujte údaje z cieľovej aplikácie a zistite, čo by ste vedeli obnoviť, keby ste ju o rok opustili.
10. **Ponechajte si Anki aj nedotknutú zálohu.** Ani jedno neodstraňujte, kým náhrada neobstojí pri bežnom používaní a kým vedome neprijmete každú stratu.

Ak cieľ prijíma iba text, postupujte podľa úplného [návodu na bezpečný export TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Oddeľuje obnovovací `.colpkg` od prenosného pracovného súboru a jasne upozorňuje na vynulovanie stavu učenia.

## Rozhodujte sa v tomto poradí

Začnite tým, čo si nemôžete dovoliť stratiť:

1. Ak sú presné šablóny, doplnky alebo aktuálny rad nevyhnutné, zostaňte pri Anki, pokiaľ reprezentatívny `.apkg` nepreukáže, že prechod je možný.
2. Ak majú poznámky a kartičky tvoriť jeden systém, otestujte RemNote. Skontrolujte rad **Need to Learn**, nie iba importované stránky.
3. Ak sú lokálny Markdown a exporty, ktorých obsah si viete prezrieť, dôležitejšie než zobrazenie v Anki, otestujte Mochi.
4. Ak chcete úzko zameranú počítačovú aplikáciu s otvoreným kódom a priamym importom z Anki, otestujte Mnemosyne a overte, že jeho mobilné obmedzenia vyhovujú vašim návykom.
5. Ak je skutočným problémom zdieľanie v triede alebo jednoduchšie spoločné opakovanie, vytvorte malú sadu nanovo v Quizlete alebo Brainscape.
6. Ak chcete konkrétne metódu SuperMemo, prijmite nový rozvrh. Ak chcete konkrétne zdrojový kód celého systému, vlastný hosting, API a prístup cez MCP, počítajte s opätovným vytvorením obsahu v Nibomo, so stratou časti údajov aj s prácou spojenou s prevádzkou.

Porovnanie troch veľmi odlišných modelov funkciu po funkcii nájdete v článku [Anki vs Quizlet vs Nibomo](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Užitočné pravidlo je jednoduché: prejdite inam, keď je prínos konkrétny a skutočná skúška ukázala, že straty sú prijateľné. Ak sa váš reprezentatívny balíček nedá preniesť bez problémov, zotrvanie pri Anki nie je konzervatívna záložná možnosť. Je to výsledok porovnania.
