---
title: "Recenzia kartičiek Mochi (2026): bezplatný plán, používanie offline a porovnanie s Anki"
description: "Recenzia kartičiek Mochi s overenými zdrojmi: bezplatný plán, aplikácie offline, poznámky v Markdowne, FSRS, synchronizácia, import z Anki, exporty a obmedzenia vlastného hostovania."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "kartičky mochi"
  - "učebné kartičky mochi"
  - "mochi vs anki"
  - "anki vs mochi"
  - "je mochi zadarmo"
  - "mochi offline"
  - "cenník mochi"
  - "hostovanie mochi"
  - "kartičky v markdowne"
  - "intervalové opakovanie mochi"
---

Mochi začína dokumentom v Markdowne, nie bežným formulárom pre prednú a zadnú stranu. Pridajte riadok s tromi spojovníkmi a dokument získa strany na opakovanie. Môžete ho nechať ako poznámku, prepojiť s inou kartičkou alebo archivovať, aby sa dal naďalej vyhľadať bez zaradenia do radu na opakovanie.

Tento malý oddeľovač vysvetľuje, komu sa **kartičky Mochi** hodia. Mochi je dobrá voľba pre človeka, ktorý chce poznámky a intervalové opakovanie v jednej aplikácii s lokálnym ukladaním dát, najmä ak mu vyhovuje Markdown, spätné odkazy a jednoduché hodnotenie Pamätám si/Zabudol som. Menej presvedčivé je pre dlhoročného používateľa Anki, ktorého kolekcia závisí od generovaných variantov kartičiek, vlastného HTML/CSS, JavaScriptu, doplnkov alebo podrobných nastavení plánovača.

Pri používaní na jednom zariadení je bezplatný plán viac než skúšobná verzia: registrácia nie je potrebná a Mochi v dokumentácii uvádza neobmedzené používanie offline. Háčik je v tom, že synchronizácia medzi zariadeniami patrí do **plánu Pro za 5 USD mesačne**. Používateľa Anki môžu viac stáť straty pri migrácii. Mochi dokáže importovať balík Anki aj jeho históriu opakovaní, no nedokáže zachovať každú šablónu, štýl, skript, nastavenie plánovača ani správanie doplnkov.

> **Môj vzťah k produktu:** Som Kirill Markin a vyvíjam [Nibomo](/sk/). Táto recenzia sa zameriava na prácu s aplikáciou a vychádza z overených zdrojov; netvrdím, že som produkt osobne testoval. Článok neobsahuje partnerské odkazy. Hlavné porovnanie sa týka Mochi a Anki; môj produkt sa objavuje až ku koncu ako jasne označená alternatíva.

**Fakty overené:** 7. septembra 2026. Najnovšie vtedy dostupné [vydanie Mochi](https://mochi.cards/changelog/) bolo vo verzii 26.8.2 z 10. augusta 2026. Ceny a údaje v obchodoch s aplikáciami sa môžu meniť.

![Reštaurátor kníh skúša malé leporelo prepojených kartičiek, zatiaľ čo pôvodný archív zostáva bezpečne uložený v škatuli](/blog/mochi-alternative-v3.png)

## Stručná recenzia

- **Vyberte si Mochi**, ak chcete poznámky v Markdowne spolu s kartičkami, používanie offline bez účtu na jednom zariadení, spätné odkazy a hodnotenie s dvoma možnosťami.
- **Vyberte si Anki**, ak potrebujete osvedčené typy poznámok, šablóny HTML/CSS, doplnky, bezplatnú hostovanú synchronizáciu, štyri stupne hodnotenia alebo podrobnejšie nastavenia FSRS.
- **Zatiaľ neprechádzajte**, ak už pravidelne opakujete a neviete pomenovať problém pri práci, ktorý Mochi vyrieši. Nové rozhranie nie je dostatočný dôvod, aby ste riskovali údaje o plánovaní nazbierané za roky a kartičky s vlastnými úpravami.
- **Pred migráciou testujte**, ak už máte v Anki dlhoročnú kolekciu. Mochi prijíma súbory `.apkg` a dokáže preniesť históriu opakovania, ale prevádza HTML na Markdown a odstraňuje CSS aj JavaScript.

## Rýchle porovnanie Mochi a Anki

| Kritérium | Mochi | Anki |
|---|---|---|
| Komu sa hodí | Používateľom prepojených poznámok a Markdownu, ktorí chcú poznámky vedľa kartičiek na opakovanie | Ľuďom, ktorí chcú osvedčený, nastaviteľný systém učebných kartičiek |
| Vytváranie kartičiek | Dokument v Markdowne získa viac strán pridaním `---`; dostupné sú aj polia a šablóny | Poznámky obsahujú polia; šablóny HTML/CSS generujú jednu alebo viac kartičiek |
| Priebeh opakovania | Nové kartičky najprv prejdú fázou učenia; naučené kartičky hodnotíte možnosťami Forgot (Zabudol som) / Remembered (Pamätám si) | Kartičky hodnotíte možnosťami Again (Znova) / Hard (Ťažké) / Good (Dobré) / Easy (Ľahké) |
| Plánovanie | Predvolene vlastný algoritmus Mochi; FSRS je voliteľný | FSRS alebo starší SM-2 s rozsiahlejšími nástrojmi na ladenie FSRS |
| Bezplatné používanie | Bez registrácie a s neobmedzeným používaním offline | Bezplatné aplikácie pre počítač a synchronizácia AnkiWeb; oficiálna aplikácia pre iOS je platená |
| Synchronizácia medzi zariadeniami | Pro, 5 USD mesačne | Zadarmo cez AnkiWeb |
| Platformy | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, oficiálny AnkiMobile, nezávislý AnkiDroid |
| Prenosné formáty | Natívny `.mochi`, exporty Markdown a CSV | Natívne `.colpkg` a `.apkg` aj text oddelený tabulátormi |
| Hranice správy dát a hostovania | Dáta sú primárne lokálne; základná aplikácia sa neprezentuje ako open source a podporovaná synchronizačná služba na vlastné hostovanie nie je zdokumentovaná | Hlavný repozitár má licenciu AGPL; oficiálny synchronizačný server na vlastné hostovanie je zdokumentovaný |

Hlavný rozdiel je medzi **jednoduchou prácou s poznámkami a kontrolou nad celou kolekciou**.

## Na čom stojí rozhranie Mochi

Rozhranie Mochi dáva väčší zmysel, keď ním prejdete s jednou kartičkou.

Každá kartička patrí do balíčka. Kliknete na **New Card (Nová kartička)** a namiesto pevných polí pre otázku a odpoveď dostanete plochu na písanie v Markdowne. Jedna kartička môže obsahovať nadpisy, zoznamy, kód, obrázky, štruktúrované polia aj odkazy. Medzi bloky pridajte `---` a vytvoríte dve alebo viac strán na opakovanie. Pomocou dvojitých hranatých zátvoriek, ako v zápise `[[double brackets]]`, odkážete na inú kartičku; Mochi automaticky vytvorí spätný odkaz. Oficiálny [prehľad kartičiek](https://mochi.cards/docs/cards/) opisuje aj šablóny, ktorých zástupné prvky zobrazujú hodnoty štruktúrovaných polí.

Kartičky môžu plniť dve úlohy bez toho, aby boli v samostatných systémoch:

- kartička na opakovanie má viac strán a zaradí sa do intervalového opakovania;
- poznámka určená na vyhľadávanie informácií môže zostať v rovnakom balíčku aj po archivovaní. Archivácia ju vyradí z radov nových kartičiek a kartičiek čakajúcich na opakovanie bez odstránenia obsahu, značiek, odkazov alebo histórie.

[Zobrazenia balíčkov](https://mochi.cards/docs/decks/custom-views/) sú uložené kombinácie filtrov, zoradenia a rozloženia. Na bežné prezeranie si môžete ponechať mriežku a vytvoriť ďalšie zobrazenie podľa značky, termínu opakovania, nízkej miery zapamätania alebo nedávneho opakovania. Mochi tiež umožňuje použiť zobrazenie na intenzívne precvičovanie bez zmeny bežného plánovania či histórie opakovania. Je to konkrétnejšie než označiť rozhranie za „prehľadné“: ten istý balíček môže slúžiť ako zápisník, filtrovaná databáza aj rad na učenie.

[Denné opakovanie](https://mochi.cards/docs/getting-started/reviewing-cards/) má dve fázy. Vo fáze **New cards (Nové kartičky)** buď kartičku pridáte do plánu opakovania, alebo zvolíte Again (Znova), aby sa čoskoro zobrazila opäť. Po naučení kartička pri najbližšom termíne opakovania odhalí ďalšiu stranu a ponúkne **Forgot (Zabudol som)** alebo **Remembered (Pamätám si)**. Ak si nespomeniete, Mochi ju najprv zaradí na opätovné precvičenie a až potom vynuluje pokrok. Rozhodovanie pri opakovaní je tak zámerne obmedzené na minimum.

## Je Mochi zadarmo a čo funguje offline?

Áno, ale „zadarmo“ a „offline“ znamenajú rôzne veci podľa toho, kde aplikáciu používate. [Aktuálny cenník Mochi](https://mochi.cards/) uvádza:

- **Free:** 0 USD navždy, bez registrácie, s neobmedzeným používaním offline.
- **Pro:** 5 USD mesačne, navyše so synchronizáciou medzi zariadeniami, publikovaním balíčkov, dynamickými poľami, integráciou AI a e-mailovou podporou.

Mochi funguje na macOS, Windowse, Linuxe, iOS, Androide a na webe. Jeho [návod na stiahnutie a inštaláciu](https://mochi.cards/docs/getting-started/download-and-install/) vymedzuje praktické hranice:

| Prostredie | Čo znamená zadarmo a offline |
|---|---|
| Nainštalovaná aplikácia pre počítač alebo mobil | Mochi môžete používať offline bez účtu. Dáta sú uložené v zariadení, takže jedna nainštalovaná aplikácia môže úplne pokryť bezplatné používanie. |
| Webová aplikácia bez Pro | Obsah sa uchováva v offline úložisku prehliadača. Mochi upozorňuje, že prehliadač môže tieto dáta bez varovania vymazať. |
| Rovnaká kolekcia na viacerých zariadeniach | Automatická synchronizácia medzi zariadeniami je funkciou Pro, hoci každá nainštalovaná aplikácia môže fungovať offline. |

Používanie offline a synchronizácia sú dve samostatné funkcie. Na samotné vytváranie či opakovanie kartičiek v stiahnutej aplikácii Pro nepotrebujete. Potrebujete ho, ak chcete mať tú istú aktuálnu kolekciu automaticky dostupnú na notebooku aj telefóne. Pri dôležitých dátach v bezplatnom pláne si uchovávajte natívnu zálohu a nespoliehajte sa na zariadenie — a najmä na úložisko prehliadača — ako na jedinú kópiu.

Ak je rozhodujúce fungovanie offline, porovnajte presný postup pre svoje zariadenia v článku [Funguje Anki offline?](/blog/does-anki-work-offline/) a v širšom [sprievodcovi aplikáciami na kartičky offline](/blog/best-offline-flashcards-app/).

## Kartičky v Markdowne sú skutočným dôvodom na výber Mochi

Skutočná výhoda Mochi spočíva v tom, ako Markdown mení zdrojový materiál, ktorý spravujete.

Kartička Mochi zostáva čitateľná ako text. Ten istý dokument môže obsahovať krátke vysvetlenie, blok kódu, odkazy na súvisiace myšlienky a oddeľovače medzi stranami na opakovanie. Kartičky môžu používať aj polia a šablóny, ak záleží na opakovanej štruktúre. Keď použijete šablónu, Mochi vykreslí Markdown šablóny so zástupnými prvkami pre polia a pri vykresľovaní ignoruje vlastný Markdown kartičky bez toho, aby ho vymazalo.

Anki vychádza z iného modelu. Poznámka uchováva polia a [šablóny kartičiek](https://docs.ankiweb.net/templates/intro.html) určujú, ktoré polia sa zobrazia a aké kartičky sa vygenerujú. Šablóny používajú HTML a na štýlovanie CSS. Jedna poznámka so slovíčkom tak môže vytvoriť kartičky na rozpoznanie slova aj jeho aktívne vybavenie z pamäti, pričom podkladové dáta zostávajú na jednom mieste.

Táto štruktúra dáva Anki viac možností pri podmienených rozloženiach, generovaných variantoch kartičiek, písaných odpovediach, vlastných štýloch a postupoch rozšírených doplnkami. Zároveň to znamená, že Anki nie je aplikácia na kartičky s natívnou podporou Markdownu. Práca s Markdownom v Anki si vyžaduje ďalšiu konverziu alebo doplnok.

Praktická otázka je jednoduchá: chcete poznámku, z ktorej sa môže stať kartička, alebo štruktúrovaný typ poznámky, ktorý dokáže vygenerovať viacero kartičiek? Mochi je prispôsobené prvej možnosti. Anki druhej.

## Intervalové opakovanie v Mochi už zahŕňa FSRS

Porovnania, ktoré tvrdia, že Mochi nemá FSRS, sú zastarané. Mochi pridalo predbežnú verziu FSRS v roku 2025 a odvtedy vydávalo ďalšie opravy plánovača. Napriek tomu [zostáva predvolený vlastný algoritmus Mochi](https://mochi.cards/docs/reviewing/fsrs/).

Predvolený algoritmus mení intervaly pomocou pevných násobiteľov po každom opakovaní podľa toho, či si odpoveď pamätáte alebo ste ju zabudli. V Review Settings (Nastavenia opakovania) prepnite na FSRS a už naučené kartičky prejdú na FSRS bez straty histórie. Môžete nastaviť cieľovú mieru zapamätania, zadať vlastné parametre a neskôr prepnúť späť.

Mochi zachováva hodnotenie s dvoma možnosťami pri oboch plánovačoch:

- **Forgot (Zabudol som)** zodpovedá hodnoteniu Again (Znova) vo FSRS.
- **Remembered (Pamätám si)** zodpovedá hodnoteniu Good (Dobré) vo FSRS.

Dokumentácia Mochi uvádza, že hodnotenie s dvoma možnosťami s FSRS funguje, hoci sa stráca časť informácií, ktoré by poskytli Hard (Ťažké) a Easy (Ľahké). Mochi prijíma optimalizované vlastné parametre, ale nemá vstavaný optimalizátor; na vytvorenie osobných parametrov potrebujete externý optimalizátor FSRS a históriu opakovania z Mochi.

[Nastavenia FSRS v Anki](https://docs.ankiweb.net/deck-options.html#fsrs) idú ďalej. Požadovanú mieru zapamätania a parametre možno naviazať na predvoľby, vstavaný optimalizátor dokáže prispôsobiť parametre histórii opakovania a simulátor odhaduje počet opakovaní alebo minúty učenia pri rôznych nastaveniach. Anki tiež zaznamenáva štyri výsledky: Again (Znova), Hard (Ťažké), Good (Dobré) a Easy (Ľahké).

Tieto tlačidlá navyše pomáhajú iba vtedy, keď ich používate dôsledne. Podľa príručky Anki znamená Hard, že ste si na odpoveď úspešne spomenuli. Ak stlačíte Hard, keď ste odpoveď zabudli, poskytnete FSRS nesprávnu informáciu a výsledné intervaly môžu byť príliš dlhé.

Vyberte si hodnotenie Mochi s dvoma možnosťami, ak vám rozhodnutie pamätám si/nepamätám si uľahčuje opakovanie. Vyberte si Anki, ak chcete podrobnejší signál z hodnotenia a budete používať jeho optimalizátor, nastavenia miery zapamätania, predvoľby alebo simulátor záťaže. Porovnanie samotných plánovačov namiesto aplikácií nájdete v článku [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

## Mochi a Anki účtujú za rôzne veci

Pri učení na jednom počítači vás obe aplikácie môžu stáť nulu. Keď začnete používať viac zariadení, náklady sa objavia na inom mieste.

Mochi si za synchronizáciu Pro účtuje **5 USD mesačne** a spája ju s publikovaním, dynamickými poľami, integráciou AI a podporou. Počítačové aplikácie Anki sú zadarmo a [oficiálny web Anki](https://apps.ankiweb.net/) opisuje synchronizáciu AnkiWeb ako bezplatnú. AnkiMobile je platená oficiálna aplikácia pre iPhone a iPad; AnkiDroid je bezplatný, nezávisle vyvíjaný klient pre Android.

Odpoveď na otázku „Čo je lacnejšie?“ teda závisí od vašich zariadení:

- jeden počítač: obe možnosti môžu byť zadarmo;
- viac počítačov alebo zariadení s Androidom: bezplatná hostovaná synchronizácia Anki znamená, že nepotrebujete predplatné;
- iPhone alebo iPad: pri Anki pribudne jednorazový nákup aplikácie, kým Mochi podmieňuje synchronizáciu medzi zariadeniami pravidelne plateným plánom Pro;
- používatelia Mochi, ktorí už chcú publikovanie, dynamické polia alebo integráciu AI, môžu synchronizáciu vnímať ako jednu časť balíka, nie ako jediný dôvod platby.

Pred porovnávaním presných celkových nákladov na iOS si pozrite regionálny App Store. Táto recenzia neuvádza cenu v obchode s aplikáciami ako nemennú, keďže sa môže líšiť podľa trhu.

## Hostovanie Mochi nie je to isté ako lokálne používanie

Tri označenia sa často zlievajú do jedného:

- **Prednostne lokálne fungovanie (local-first)** znamená, že pracovná kópia je vo vašom zariadení a aplikácia môže ďalej fungovať bez svojej cloudovej služby.
- **Otvorený zdrojový kód (open source)** znamená, že zdrojový kód je dostupný pod licenciou umožňujúcou jeho skúmanie a úpravy.
- **Vlastné hostovanie** znamená, že produkt má zdokumentovaný podporovaný spôsob prevádzkovania príslušnej služby na vlastnej infraštruktúre.

Mochi jasne dokumentuje lokálne fungovanie. Svoju základnú aplikáciu neprezentuje ako open source: odkaz „Open source“ v päte jeho verejného webu vedie na [zbierku integrácií](https://github.com/mochi-cards/open-source), nie na samotnú aplikáciu. Oficiálny web ani nedokumentuje podporovanú náhradu synchronizácie Pro na vlastnom serveri.

Ak hľadáte **hostovanie Mochi**, pretože chcete vlastný server, hranica je takáto: môžete si ponechať lokálne dáta a natívne zálohy, ale zdokumentovanou cestou medzi zariadeniami je Mochi Pro. Lokálne fungovanie prináša užitočnú kontrolu nad dátami; nie je to vlastné hostovanie.

Hlavný repozitár Anki má [licenciu AGPL verzie 3 alebo novšej](https://github.com/ankitects/anki/blob/main/LICENSE) s uvedenými výnimkami pre niektoré súčasti. Oficiálna príručka pre pokročilých používateľov dokumentuje aj [synchronizačný server na vlastné hostovanie](https://docs.ankiweb.net/sync-server.html). Tento server nahrádza synchronizáciu AnkiWeb pre kompatibilných klientov; nie je to kópia webu AnkiWeb na vlastnom serveri. Anki od jeho prevádzkovateľa očakáva zvládnutie práce s príkazovým riadkom a riešenie problémov so sieťou, firewallom, protokolom a aktualizáciami.

## Čo import z Anki zachová a čo zmení

Podľa [dokumentácie importu](https://mochi.cards/docs/import-and-export/importing/) Mochi prijíma súbory Anki `.apkg` vrátane histórie opakovania. „Importované“ však neznamená „rovnocenné“.

Počas importu Mochi prevádza HTML na Markdown a odstraňuje CSS aj JavaScript. Ide o konverziu formátu medzi dvoma rôznymi modelmi kartičiek. Najjednoduchší prípad je obyčajný obsah s prednou a zadnou stranou. Kartičku, ktorá závisí od štýlovania, logiky šablóny, zadávania odpovedí alebo JavaScriptu, treba po importe skontrolovať.

História opakovania si tiež vyžaduje výslovnú voľbu pri exporte. [Príručka exportu Anki](https://docs.ankiweb.net/exporting.html) uvádza, že možnosť **Include Scheduling Information (Zahrnúť informácie o plánovaní)** určuje, či sa do balíka dostane história opakovania. Ak ju necháte vypnutú, Mochi nedokáže obnoviť históriu, ktorú `.apkg` nikdy neobsahoval.

Ani po prenose histórie neočakávajte totožné budúce termíny opakovania. Obe aplikácie môžu používať rôzne plánovače, hodnotenia, cieľovú mieru zapamätania, parametre, kroky učenia a nastavenia balíčkov. Zachované udalosti poskytnú novému plánovaču podklady; neurobia z oboch systémov totožné riešenia.

## Natívne zálohy a prenosný text plnia rôzne úlohy

Pred akýmkoľvek presunom si uchovajte zálohu, z ktorej dokážete obnoviť pôvodný systém. Čitateľný export je užitočný, no nie vždy z neho možno všetko obnoviť.

[Sprievodca zálohovaním Mochi](https://mochi.cards/docs/getting-started/backing-up/) dokumentuje dve natívne možnosti ochrany dát:

- Skopírovanie celého používateľského adresára zachová obsah, históriu opakovania, prílohy, nastavenia aplikácie aj stav prihlásenia.
- Export `.mochi` zachová balíčky, kartičky, šablóny a polia, prílohy, značky a metadáta, históriu opakovania, poradie kartičiek aj štruktúru balíčkov.

[Exporty Mochi do Markdownu a CSV](https://mochi.cards/docs/import-and-export/exporting/) slúžia na prenos obsahu medzi aplikáciami. Markdown vytvorí jeden súbor pre každú kartičku a priečinky pre podbalíčky, ale vynechá históriu opakovaní, poradie kartičiek aj šablóny. Značky z metadát sa prenesú len vtedy, ak sú zapísané aj priamo v Markdowne. CSV dokáže exportovať polia šablóny alebo vykreslené predné a zadné strany, no nezachová históriu opakovaní ani šablóny. Ani v CSV sa značky z metadát neprenesú, ak nie sú vložené do obsahu.

Anki rozlišuje podobne:

- `.colpkg` exportuje celú kolekciu s plánovaním a môže obsahovať médiá. Jeho import nahradí kartičky v cieľovej kolekcii Anki.
- `.apkg` exportuje jeden balíček a jeho podbalíčky s možnosťami zahrnúť informácie o plánovaní, predvoľby a médiá.
- Poznámky v obyčajnom texte používajú polia oddelené tabulátormi s vloženým formátovaním HTML. Zachovávajú upraviteľný obsah, nie celé správanie kolekcie.

Návrat z Mochi do Anki zvyčajne znamená CSV. Anki dokáže [priradiť textové stĺpce k poliam poznámky](https://docs.ankiweb.net/importing/text-files.html), ale odkazy Mochi, fungovanie viacerých strán, šablóny a história opakovania sa cez tento súbor nezmenia na rovnocenné objekty Anki. Export `.mochi` si ponechajte aj vtedy, keď kópia v Anki vyzerá správne.

## Otestujte reprezentatívny balíček tak, aby ste sa mohli vrátiť späť

Potvrdenie úspešného importu dokazuje, že aplikácia prijala súbor. Nedokazuje, že vaša skutočná kolekcia stále funguje — ani že z nej dokážete dostať použiteľný obsah späť. Otestujte oba smery a svoj bežný profil Anki nechajte nedotknutý.

1. **Zálohujte celé Anki.** Exportujte `.colpkg` s médiami a uložte ho mimo pracovného profilu.
2. **Overte, že sa záloha dá otvoriť.** Vytvorte prázdny dočasný profil Anki a importujte `.colpkg` tam. Import balíka kolekcie nahrádza cieľovú kolekciu, preto je dočasný profil dôležitý.
3. **V dočasnom profile vytvorte reprezentatívny balíček.** Mal by byť dosť malý na kontrolu každej kartičky, ale mal by zahŕňať funkcie, na ktoré sa spoliehate: základné aj obrátené kartičky, dopĺňanie vynechaného textu (cloze), vlastné šablóny, CSS, JavaScript, obrázky, zvuk, rovnice, značky, vnorené balíčky a históriu opakovania.
4. **Exportujte tento balíček ako `.apkg`.** Zahrňte informácie o plánovaní, predvoľby a médiá, ak na nich záleží. Tieto možnosti vložia dáta do balíka Anki; nesľubujú, že Mochi zopakuje každé nastavenie.
5. **Importujte ho do nového balíčka Mochi.** Svoj každodenný profil Anki aj jeho rad kartičiek na opakovanie nechajte nezmenené.
6. **Pred opakovaním všetko skontrolujte.** Porovnajte obsah, formátovanie, polia, médiá, značky, štruktúru balíčkov aj históriu. Osobitnú pozornosť venujte všetkému, čo záviselo od HTML, CSS, JavaScriptu alebo generovaných variantov kartičiek.
7. **Plánovač vyberte vedome.** Mochi začína vlastným algoritmom. FSRS zapnite len vtedy, ak ho plánujete používať aj po skúške.
8. **Jeden bežný týždeň sa učte z tejto kópie.** Posúďte úpravy v Markdowne, fázu New cards (Nové kartičky), rozhodovanie Remembered/Forgot (Pamätám si/Zabudol som), fungovanie offline a — ak ste si ju zaplatili — synchronizáciu na zariadeniach, ktoré skutočne nosíte so sebou.
9. **Otestujte cestu späť.** Skúšobný balíček Mochi exportujte ako `.mochi` na natívnu zálohu a ako CSV pre Anki. Ak záleží na opätovne použiteľných poliach, použite CSV s hodnotami polí; ak potrebujete najmä viditeľný obsah prednej a zadnej strany, použite CSV s vykreslenými stranami. Importujte CSV do ďalšieho prázdneho profilu Anki a priraďte jeho stĺpce k vhodnému typu poznámky.
10. **Zapíšte si každú stratu, ktorú prijímate.** Cestu tam a späť skontrolujte osobitne. Presné štýlovanie, fungovanie viacerých strán, správanie doplnkov, generované varianty, hodnotenia, história alebo budúce termíny opakovania môžu mať pri každodennom používaní väčšiu váhu než v porovnávacej tabuľke.

Návrat cez CSV je migrácia obsahu, nie úplná obnova Mochi: neprenáša históriu opakovaní ani šablóny. Značky z metadát sa prenesú len vtedy, ak sú vložené do samotného obsahu. Ak Mochi nevyrieši problém, ktorý ste pomenovali, odstráňte skúšobný balíček a pokračujte s pôvodným profilom Anki. Ak ho vyrieši, presúvajte skutočné balíčky po jednom a zálohy Anki `.colpkg` a Mochi `.mochi` si ponechajte počas niekoľkých bežných cyklov opakovania.

## Kto by mal používať kartičky Mochi?

Mochi sa hodí, keď:

- už píšete a premýšľate v Markdowne;
- poznámky a kartičky na opakovanie patria do rovnakého prepojeného pracovného priestoru;
- chcete jednoduché rozhodnutie Pamätám si/Zabudol som namiesto štyroch stupňov hodnotenia;
- bezplatné používanie offline na jednom zariadení vám stačí alebo vám synchronizácia Pro stojí za 5 USD mesačne;
- vaša kolekcia je nová alebo dosť jednoduchá na to, aby konverzia z Anki predstavovala malé riziko.

Zostaňte pri Anki, keď:

- vaše typy poznámok generujú viacero dôležitých variantov kartičiek;
- súčasťou vášho systému sú šablóny HTML/CSS, JavaScript, doplnky alebo zdieľané balíčky;
- bezplatná synchronizácia medzi zariadeniami je dôležitejšia než písanie v Markdowne;
- chcete optimalizátor FSRS, nastavenia predvolieb, štyri stupne hodnotenia a simulátor záťaže v Anki;
- vaše údaje o opakovaní nazbierané za roky a vlastné úpravy už dobre slúžia svojmu účelu.

Najrozumnejšia alternatíva k Mochi závisí od toho, prečo vám nevyhovuje ani jedna možnosť. Ak začínate s novou, jednoduchšou kolekciou, [Nibomo ponúka](/sk/features/) opakovanie s FSRS, učenie offline a synchronizáciu, prenos kartičiek, značiek a médií, prístup pre agentov aj zdokumentovaný postup vlastného hostovania. Vyvíjam ho a jeho obmedzenia sú podstatné: nenahrádza prepojený zápisník Mochi v Markdowne ani osvedčený systém šablón a doplnkov Anki. [Úvodná príručka](/docs/getting-started/) ukazuje aktuálne možnosti hostovanej a mobilnej aplikácie, prístupu pre agentov aj vlastného hostovania.

## Záverečné zhodnotenie

Mochi je viac než krajšie rozhranie Anki. Jeho podstatou je, že poznámka v Markdowne, záznam v prepojenej databáze vedomostí a kartička na intervalové opakovanie môžu byť tým istým objektom. Bezplatný plán pokrýva prácu offline bez účtu; Pro pridáva hostované funkcie vrátane synchronizácie medzi zariadeniami.

Pre človeka, ktorý začína novú kolekciu založenú na Markdowne, je to dobrý kompromis. Prechod z Anki sa tiež môže oplatiť, ak test reprezentatívneho balíčka preukáže, že natívny Markdown a hodnotenie s dvoma možnosťami odstránia skutočné prekážky pri používaní.

Ak Anki používate už dlho, potrebujete presvedčivý dôvod na zmenu. Zálohujte kolekciu, otestujte kartičky s najväčším množstvom vlastných úprav a zostaňte pri Anki, pokiaľ Mochi nezlepší bežný týždeň učenia natoľko, aby to vyvážilo konkrétne funkcie formátovania, šablón, plánovača a ekosystému, ktorých sa vzdáte.
