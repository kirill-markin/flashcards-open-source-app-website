---
title: "Najlepšie open source aplikácie na kartičky v roku 2026: porovnanie 6 aplikácií FOSS"
description: "Porovnajte šesť udržiavaných open source aplikácií na kartičky podľa dostupného kódu, údajov offline, synchronizácie, importu z Anki, exportu, vlastného hostingu a obnovy."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "najlepšie open source aplikácie na kartičky"
  - "open source aplikácia na kartičky"
  - "open source intervalové opakovanie"
  - "kartičky na vlastnom serveri"
  - "aplikácia na kartičky offline"
  - "open source alternatíva k Anki"
  - "FOSS kartičky"
---

Anki je aj v roku 2026 pre väčšinu ľudí najlepšou open source aplikáciou na kartičky. Výber sa stáva zaujímavejším, keď otvorený zdrojový kód nie je vašou jedinou nevyhnutnou požiadavkou.

Možno potrebujete aplikáciu v prehliadači na vlastnom serveri. Alebo balíček, ktorý si prečítate ako obyčajný Markdown. Prípadne súkromný systém poznámok, z ktorých vznikajú kartičky. Každá z týchto požiadaviek vedie k inému produktu a verejný repozitár na GitHube za vás nerozhodne.

Počítačová aplikácia môže mať otvorený zdrojový kód, kým jej verzia pre iPhone ho nezverejňuje. Kontajner Docker môže poskytovať rozhranie v prehliadači bez synchronizácie s natívnymi klientmi. Import môže zachrániť slová a pritom stratiť šablóny, médiá aj roky histórie opakovaní, vďaka ktorým bola zbierka užitočná.

Týmto hodnotením prešlo šesť projektov. Porovnal som licencovaný zdrojový kód, najnovšie stabilné vydanie, lokálne údaje, plánovač, synchronizáciu, migráciu z Anki, export a presný rozsah vlastného hostingu. Práve tento posledný bod je dôležitejší, než väčšina zoznamov funkcií pripúšťa.

> **Môj vzťah k produktu:** Som Kirill Markin a vyvíjam [Nibomo](https://nibomo.com/), jednu zo šiestich aplikácií nižšie. Jeho repozitár pod licenciou MIT zahŕňa webovú aplikáciu, natívnych klientov, backend, synchronizáciu a infraštruktúru. Nezaradil som ho na prvé miesto. Anki je bezpečnejšia východisková voľba, Mnemosyne má osvedčenejšiu cestu migrácie z Anki a viaceré možnosti v tomto výbere sa prevádzkujú oveľa jednoduchšie.

**Fakty overené:** 5. septembra 2026. Stabilné vydania odlišujem od práce, ktorá existuje len v predvolenej vetve.

![Turista porovnáva šesť otvorených batohov a skúša záložnú výbavu pred výberom open source aplikácie na kartičky](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Stručná odpoveď

| Vaša hlavná požiadavka | Najvhodnejšia voľba | Prečo | Čo si najprv overiť |
| --- | --- | --- | --- |
| Spoľahlivý univerzálny systém alebo zložitá existujúca zbierka | [Anki](https://apps.ankiweb.net/) | Prepracované kartičky a šablóny, FSRS, doplnky, široký výber klientov a bohaté exportné balíky | Oficiálna aplikácia pre iOS a AnkiWeb nie sú súčasťou otvoreného kódu počítačovej aplikácie; vlastný hosting poskytuje synchronizáciu, nie AnkiWeb |
| Počítačová alternatíva zameraná na učenie s osvedčeným importom z Anki | [Mnemosyne](https://mnemosyne-proj.org/) | Lokálne učenie, import typov kartičiek a údajov o učení z Anki a synchronizačný server na vlastnú prevádzku | Najnovším stabilným vydaním zostáva 2.11; Android umožňuje opakovanie, ale nie úpravy |
| Poznámky a kartičky v jednej lokálnej znalostnej báze | [SiYuan](https://b3log.org/siyuan/en/) | Natívne aplikácie fungujúce offline, zabudované FSRS a plnohodnotná aplikácia v prehliadači cez Docker | Klienti v Dockeri sa nemôžu synchronizovať s natívnymi aplikáciami a niektoré príkazy na import a export v Dockeri chýbajú |
| Zdrojový kód webu, mobilných aplikácií, backendu a infraštruktúry | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Jedno monorepo pod licenciou MIT s dokumentovaným produkčným nasadením | Podporovaná produkčná infraštruktúra stojí na AWS a pri migrácii z Anki sa strácajú údaje |
| Mladšia počítačová aplikácia s dôrazom na lokálne údaje a priamym importom APKG | [Recall](https://github.com/Madlezz/Recall) | FSRS, počítačové zostavenia, PWA, lokálne databázy a voliteľný šifrovaný sprostredkovací server | Import zachováva len snímku stavu plánovania, spracuje prvé dve polia poznámky a vynecháva zvuk |
| Čitateľné balíčky v Markdowne bez závislosti od siete | [Essentialist](https://github.com/essentialist-app/essentialist) | Obyčajné súbory balíčkov a zámerne offline aplikácia pre počítač a Android | Chýba synchronizácia a pokrok sa ukladá do samostatnej skrytej databázy |

Toto nie je bodovanie funkcií. Začnite zlyhaním, ktoré si nemôžete dovoliť. Ak máte desať rokov opakovaní v Anki, vernosť migrácie je dôležitejšia než čistejšie rozhranie. Ak spravujete nasadenie pre školu, prístup cez prehliadač a overená obnova môžu byť dôležitejšie než doplnky.

## Čo som považoval za open source aplikáciu na kartičky

Použil som štyri podmienky:

1. **Základná časť aplikácie na učenie má zverejnený zdrojový kód a výslovnú open source licenciu.** Adresár integrácií okolo nezverejneného jadra nestačí.
2. **Intervalové opakovanie funguje už dnes.** Položka v pláne vývoja ani všeobecný kvízový režim nestačia.
3. **Existuje vydané zostavenie alebo jasne zdokumentované oficiálne nasadenie.** Samotné nedávne commity nerobia z prototypu bezpečné odporúčanie.
4. **Oficiálne zdroje dostatočne vysvetľujú, čo sa s údajmi deje, aby sa to dalo skontrolovať.** Potreboval som konkrétne odpovede o úložisku offline, synchronizácii, importe a exporte či hostingu, nie neurčitý sľub, že používatelia „vlastnia svoje údaje“.

Počet hviezdičiek nebol podmienkou. Odráža vek a publicitu projektu rovnako ako to, či produkt vyhovuje používateľom. Vyspelosť však stále zaváži. Anki, Mnemosyne a SiYuan majú zavedené vydania aj prevádzkové modely. Recall a Essentialist odporúčam na konkrétnejšie účely, pretože správanie ich vydaných verzií je na také odporúčanie dostatočne zdokumentované.

Aj „udržiavaný“ treba overiť dvoma spôsobmi. Vydanie označené tagom ukazuje, čo si používatelia môžu nainštalovať; predvolená vetva ukazuje smer projektu. Najjasnejším príkladom je Essentialist. Jeho stabilné vydanie dokumentuje SM-2, zatiaľ čo aktuálna vetva dokumentuje FSRS. Nasledujúca tabuľka preto uvádza SM-2.

## Porovnanie šiestich FOSS aplikácií na kartičky

| Aplikácia | Overená stabilná verzia | Platformy | Údaje offline | Plánovač | Synchronizácia | Migrácia z Anki a možnosti odchodu | Rozsah vlastného hostingu |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. augusta 2026 | Windows, macOS, Linux; samostatní klienti pre Android a iOS; AnkiWeb | Nainštalovaní klienti používajú pri učení lokálne zbierky | FSRS alebo starší SM-2 | AnkiWeb alebo oficiálny synchronizačný server na vlastnom hostingu | Import textu, APKG/COLPKG a databáz Mnemosyne; export textu alebo balíkov s voliteľnými médiami a plánovaním | **Len synchronizačný server.** Žiadny vlastný AnkiWeb ani rozhranie na učenie v prehliadači |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. novembra 2023; aktivita v repozitári pokračovala v roku 2026 | Windows, macOS, Linux, Android; obmedzené opakovanie v prehliadači | Počítač pracuje lokálne; Android umožňuje opakovanie offline, ale nie úpravy | Adaptívne hodnotenie vybavenia si odpovede z pamäti na stupnici 0–5 | Zabudovaná synchronizácia s počítačovou inštanciou alebo inštanciou bez grafického rozhrania | Oficiálne dokumentuje úplný import z Anki s vlastnými typmi kartičiek a údajmi o učení; export na zdieľanie nie je úplnou zálohou | **Synchronizácia a obmedzené opakovanie v prehliadači.** Webový server nemá bezpečnostné funkcie |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. augusta 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; prehliadač cez Docker | Natívni klienti uchovávajú pracovný priestor lokálne | FSRS | Platená oficiálna synchronizácia s koncovým šifrovaním alebo platená integrácia S3/WebDAV tretích strán | Aplikácia všeobecne importuje Markdown/údaje a exportuje viacero dokumentových a dátových formátov; bez dokumentovaného importéra APKG | **Plnohodnotná aplikácia v prehliadači.** Docker nesynchronizuje natívnych klientov a vynecháva niektoré príkazy importu a exportu |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. septembra 2026 | Web, iOS, Android | IndexedDB na webe; SQLite na iOS; Room nad SQLite na Androide; lokálne zápisy čakajú v rade na synchronizáciu | FSRS | Hostovaný backend alebo backend nasadený prevádzkovateľom | Vlastný ZIP prenáša kartičky, značky, metadáta zdrojov a odkazované médiá, ale nie balíčky, stav učenia, nastavenia či účty; bez importéra APKG | **Celý web a backend.** Produkčné nasadenie stojí na AWS; súkromné natívne zostavenia vznikajú samostatne |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. júla 2026 | Windows, macOS, Linux; inštalovateľná PWA | SQLite na počítači; IndexedDB v prehliadači; štandardne bez účtu a telemetrie | FSRS | Synchronizácia priečinka na počítači alebo voliteľný šifrovaný sprostredkovací server cez Cloudflare Worker/R2 | Počítačový import APKG číta prvé dve polia, balíčky, značky, približnú snímku stavu plánovania a obrázky; exporty JSON a archívov Recall | **Len šifrovaný prenos snímok.** Nehostuje PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. októbra 2025; vývoj kódu pokračoval v roku 2026 | Android APK, macOS DMG, Linux Flatpak; Windows zostavením zo zdrojového kódu | Bez prístupu k sieti; obsah balíčka je Markdown | Stabilné vydanie: SM-2; predvolená vetva: FSRS | Žiadna | Markdown zachováva obsah kartičiek; skrytá sprievodná databáza zachováva pokrok | **Nie je čo hostovať.** Zálohujte súbor Markdown spolu s jeho sprievodnou databázou |

## 1. Anki je najbezpečnejšia východisková voľba

Anki vyhráva v menej nápadných veciach. Dokáže vyjadriť zložité typy poznámok, zo šablón generovať súvisiace kartičky, uchovávať médiá spolu so zbierkou a prenášať roky údajov o plánovaní. Stabilným počítačovým vydaním v tomto hodnotení je [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Novšie zostavenie 26.09b2 je označené ako beta, preto z neho nevychádzam.

Otvorený zdrojový kód nepokrýva všetko rovnako. [Repozitár počítačovej aplikácie má licenciu AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE) s uvedenými výnimkami pre pribalené súčasti. [AnkiDroid](https://github.com/ankidroid/Anki-Android) je samostatný open source projekt pre Android. AnkiMobile a AnkiWeb sú oficiálne produkty, ale ich zdrojový kód tieto repozitáre neobsahujú. Podrobnosti rozoberá článok [Je Anki open source?](/blog/is-anki-open-source/).

Nainštalovaní klienti uchovávajú lokálne zbierky, takže bežné opakovanie funguje bez pripojenia. AnkiWeb je online rozhranie. Ak rozhoduje práca offline, článok [Funguje Anki offline?](/blog/does-anki-work-offline/) oddeľuje to, čo zostáva lokálne, od toho, čo čaká na synchronizáciu.

Anki podporuje [FSRS aj svoj starší plánovač](https://docs.ankiweb.net/deck-options.html). Jeho exportné formáty poskytujú v tejto skupine najlepší východiskový bod pre migráciu. [COLPKG obsahuje celú zbierku aj s plánovaním](https://docs.ankiweb.net/exporting.html), zatiaľ čo exporty APKG môžu obsahovať informácie o plánovaní a médiá, ak zvolíte príslušné možnosti. Anki importuje aj text, balíky Anki a databázy Mnemosyne 2.0.

Bohatý zdrojový balík však nesľubuje dokonalý import inde. Cieľová aplikácia stále musí rozumieť šablónam, pravidlám generovania kartičiek, odkazom na médiá a poliam plánovača v jeho vnútri. Len má k dispozícii viac informácií než zo súboru CSV.

[Oficiálny server na vlastný hosting](https://docs.ankiweb.net/sync-server.html) má zámerne malý rozsah. Synchronizuje kompatibilných klientov Anki; neposkytuje AnkiWeb, opakovanie v prehliadači ani portál účtov. Štandardne prijíma spojenia cez nešifrované HTTP a príručka odporúča nechať ho v lokálnej sieti alebo pred neho zaradiť VPN či reverzný proxy server s HTTPS. Kompatibilné musia zostať aj verzie klienta a servera.

Vyberte si Anki, keď je na prvom mieste verné zachovanie zbierky, šablóny, doplnky alebo široká podpora klientov. Inde hľadajte až vtedy, keď je dôležitejšia konkrétna požiadavka, napríklad webové rozhranie na vlastnom serveri alebo úplne zverejnený kód mobilných aplikácií.

## 2. Mnemosyne sa sústredí na lokálne učenie

Mnemosyne pôsobí ako počítačový nástroj na učenie, pretože presne tým je. Nepridáva k učeniu znalostnú bázu ani cloudovú platformu. Dostanete lokálnu databázu, tradičné intervalové opakovanie, sprievodnú aplikáciu na opakovanie pre Android a synchronizačný server, ktorý môže bežať na počítači alebo stroji bez grafického rozhrania.

Najnovším stabilným vydaním je stále [2.11 z novembra 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Vývoj v repozitári pokračoval aj v roku 2026, no tieto zmeny ešte netvoria stabilný inštalačný balík. Vyskúšajte 2.11 na operačných systémoch, ktoré chcete používať najbližšie roky.

Aj licencia si vyžaduje viac než pohľad na jeden štítok. [Prehľad licencií v koreňovom adresári](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) priraďuje openSM2sync licenciu LGPL v3 a zvyšku Mnemosyne samostatné podmienky. [Licencia hlavného programu](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) používa AGPL v3 s dodatočným ustanovením, podľa ktorého musí názov Mnemosyne zostať v odvodenom diele jasne viditeľný; presná podoba sa má dohodnúť so správcami projektu. Pred ďalšou distribúciou upraveného zostavenia si tento text prečítajte.

[Klient pre Android umožňuje opakovanie offline, ale nie úpravu kartičiek](https://mnemosyne-proj.org/help/android-client). Iné zariadenia môžu používať server na opakovanie v prehliadači spustený z počítačovej aplikácie, no oficiálna stránka funkcií upozorňuje, že server nemá bezpečnostné funkcie. Je to praktické rozhranie pre lokálnu sieť, nie hotová verejná webová aplikácia.

Migrácia je najsilnejším argumentom Mnemosyne proti jednoduchému zotrvaniu pri Anki. Oficiálna stránka funkcií dokumentuje [úplný import z Anki vrátane vlastných typov kartičiek a údajov o učení](https://mnemosyne-proj.org/features). [Zabudovaná synchronizácia](https://mnemosyne-proj.org/help/syncing) zlučuje kartičky aj údaje o učení a môže smerovať na stroj pod vašou kontrolou.

Bežný príkaz na export je pri zálohovaní pasca. Slúži na zdieľanie vybraných kartičiek a vynecháva údaje o učení. Na presun či obnovu celého systému [príručka pre viac počítačov](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) odporúča skopírovať celý dátový adresár.

Mnemosyne je tu najsilnejšou open source alternatívou k Anki zameranou priamo na učenie. Kompromisom je pomalé tempo stabilných vydaní, obmedzené úpravy na mobile a webové rozhranie, pri ktorom treba starostlivo obmedziť sieťový prístup.

## 3. SiYuan dáva zmysel, keď sú základom poznámky

SiYuan je aplikácia na správu znalostí s dôrazom na súkromie. Kartičky sú súčasťou rovnakého modelu blokov a dokumentov ako poznámky. To sa hodí, keď materiál na opakovanie vzniká z vašich poznámok. Ak chcete len rad kartičiek, je to veľa nástrojov navyše.

[Repozitár pod licenciou AGPL-3.0](https://github.com/siyuan-note/siyuan) odkazuje na rozhranie, jadro, mobilné aplikácie, dátovú vrstvu a súčasť FSRS. Overeným stabilným vydaním je tu [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Počítačoví a mobilní klienti ukladajú pracovný priestor lokálne a fungujú aj offline.

Synchronizácia nie je súčasťou bezplatnej úrovne s lokálnym úložiskom. [Oficiálny cenník](https://b3log.org/siyuan/en/pricing.html) ponúka v predplatnom oficiálnu synchronizáciu s koncovým šifrovaním; platené funkcie Pro pridávajú integráciu vlastného úložiska S3 alebo WebDAV. Projekt tiež varuje pred umiestnením aktívneho pracovného priestoru do bežného priečinka synchronizovaného súborovou službou, pretože súbežné úpravy môžu údaje poškodiť alebo prepísať.

Docker spúšťa plnohodnotnú aplikáciu v prehliadači, ale nestáva sa synchronizačným serverom pre nainštalované aplikácie. [Dokumentácia Dockeru pre v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) uvádza, že počítačoví ani mobilní klienti sa k nemu nemôžu pripojiť. V Dockeri chýba aj import Markdownu a export do PDF, HTML a Wordu. V natívnej aplikácii tieto príkazy existujú, takže skopírovať všeobecný zoznam funkcií do plánu nasadenia cez Docker by bolo zavádzajúce.

Oficiálny importér APKG som nenašiel. SiYuan dokáže prenášať Markdown a svoje dátové formáty, ale zbierku Anki treba premyslenejšie vytvoriť nanovo.

Vyberte si SiYuan, keď je hlavným produktom znalostná báza a kartičky majú patriť do nej. Pri hľadaní priamej náhrady Anki majú Mnemosyne a Anki jasnejšie vymedzené možnosti migrácie.

## 4. Nibomo zverejňuje viac súčastí a necháva ich prevádzku na vás

Nibomo v tomto porovnaní zverejňuje zdrojový kód najväčšej časti svojho produktu. Monorepo pod licenciou MIT obsahuje webovú aplikáciu, klientov pre iOS a Android, backend, autentifikačnú službu, synchronizáciu, administrátorskú aplikáciu, databázové migrácie a infraštruktúru AWS. Stabilným vydaním použitým tu je [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Neskoršiu prácu v predvolenej vetve nepovažujem za vydané funkcie.

[Architektúra](/docs/architecture/) uprednostňuje prácu offline, ale „offline“ znamená na každom klientovi trochu niečo iné. Webová aplikácia uchováva rozhodujúcu lokálnu kópiu údajov v IndexedDB. iOS používa SQLite a Android Room nad SQLite. Zmeny sa zapisujú lokálne a pred synchronizáciou sa zaradia do radu na odoslanie. Tento návrh zvláda prerušené pripojenie; nerobí však z úložiska prehliadača trvalé úložisko ani nenahrádza skúšku spustenia úplne zatvorenej aplikácie na každom zariadení.

Vlastný ZIP balík Nibomo je formát na prenos obsahu, nie záloha účtu. Vo v1.23.0 jeho [schéma balíka](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) prenáša obsah prednej a zadnej strany, značky, typ kartičky, metadáta zdroja a metadáta balíka; odkazované médiá sa pribalia samostatne. Neprenáša štruktúru balíčkov, históriu opakovaní, stav FSRS, nastavenia pracovného priestoru ani účty.

Vo v1.23.0 nie je importér APKG. Dokumentovaný [postup migrácie z Anki cez TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) používa exportovaný text na opätovné vytvorenie kartičiek a vyžaduje kontrolu človekom. Šablóny, stav plánovania, štruktúra balíčkov a pribalené médiá sa touto cestou automaticky nezachovajú. Pre jednoduchý textový balíček je to rozumné riešenie, pre výrazne prispôsobenú zbierku slabá voľba.

Rovnako priamo to vysvetľuje [príručka vlastného hostingu](/docs/self-hosting/). Produkcia používa infraštruktúru AWS CDK s RDS, Cognito, API Gateway a Lambda, S3 a CloudFront, tajnými údajmi, alarmami a zálohami. Cloudflare DNS, e-mail cez Resend a konfigurácia Sentry zostávajú mimo AWS. Docker Compose slúži na lokálny vývoj; nie je podporovaným produkčným balíkom. Prevádzkovatelia, ktorí chcú súkromné binárne súbory pre iOS alebo Android, ich zostavujú a distribuujú samostatne.

Vyberte si Nibomo, keď vlastníctvo kompletného zdrojového kódu webu, natívnych aplikácií a backendu stojí za túto prevádzkovú prácu. Ak je náročnejšou požiadavkou zachovanie existujúcej zbierky, vyberte si Anki alebo Mnemosyne.

## 5. Recall je moderný, ale importér si pozrite pozorne

Recall je najmladší projekt v hlavnom výbere. Do zoznamu sa dostal, pretože [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) poskytuje verziované počítačové zostavenia, inštalovateľnú PWA, jasne zdokumentované lokálne úložisko, FSRS, exporty údajov a zdokumentovaný návrh synchronizácie na vlastnom hostingu.

Počítačová aplikácia pod licenciou MIT používa SQLite, PWA používa IndexedDB. Ani jedna nepotrebuje účet a projekt uvádza, že telemetria je štandardne vypnutá. Počítačové vydania pokrývajú Windows, macOS a Linux.

Importér APKG je užitočný, no výraz „história opakovaní“ v README sľubuje viac, než implementácia v označenej verzii skutočne robí. [Zdrojový kód importéra vo v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) nečíta denník opakovaní z Anki. Číta aktuálny stav kartičky, interval, počty opakovaní a zabudnutí aj stabilitu a náročnosť FSRS, ak ich Anki uložilo. Pri starších kartičkách bez týchto polí FSRS ich Recall odhaduje z hodnôt SM-2.

Aj prevod obsahu má výrazné obmedzenia. Importér používa prvé dve polia poznámky ako prednú a zadnú stranu namiesto toho, aby reprodukoval typy poznámok a šablóny Anki. Zachováva názvy balíčkov a značky. Rozbalí obrázky v bežných formátoch a prepíše odkazy na ne, ale zvuk a ďalšie médiá preskočí. Keďže importér je príkaz Tauri, priama migrácia APKG je funkciou počítačovej aplikácie, nie PWA v prehliadači.

Je to oveľa lepšie než opätovné vytvorenie z čistého textu, ale nie verné zachovanie zbierky. Pred veľkým presunom vyskúšajte dopĺňanie vynechaného textu (cloze), súvisiace kartičky z jednej poznámky, ďalšie polia, HTML/CSS, obrázky, zvuk, termíny opakovania a opakujúce sa poznámky.

Recall má dve cesty synchronizácie. Počítačová aplikácia môže zapisovať snímku do priečinka spravovaného službou Dropbox, Drive alebo iným nástrojom na synchronizáciu súborov. Voliteľný sprostredkovací server používa Cloudflare Worker a úložisko R2. Podľa [návrhu synchronizácie v označenej verzii](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) klienti pred nahratím šifrujú snímky pomocou AES-GCM; server vidí šifrovaný text, nie údaje kartičiek ani kľúč. Aktualizácie používajú optimistické riadenie súbehu a pri konflikte vykonajú jeden opakovaný pokus, ale stále zlučujú celé snímky namiesto jednotlivých polí. Verejný sprostredkovací server financovaný správcami projektu neexistuje: nasadíte si ho sami a zadáte jeho URL.

Exporty do JSON a archívov Recall vám umožňujú preniesť údaje inam. Skôr než ich nazvete zálohou, skúste z jedného z nich obnoviť údaje v čistom profile.

Vyberte si Recall, keď chcete modernú počítačovú aplikáciu alebo PWA s dôrazom na lokálne údaje a dokážete prijať mladý projekt aj importér, ktorý zachová užitočnú snímku, nie celý systém Anki.

## 6. Essentialist sprístupňuje text balíčka, nie celý jeho stav

Essentialist má z tohto výberu najužší záber. Každý balíček je súbor Markdown, ktorý otvoríte v textovom editore, uložíte do systému správy verzií alebo skopírujete bežnými nástrojmi na prácu so súbormi. Aplikácia zámerne neposiela žiadne sieťové požiadavky.

Najnovšie stabilné vydanie je [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Obsahuje zostavenia pre Android, macOS a Linux; používatelia Windows zostavujú aplikáciu zo zdrojového kódu. [README v označenej verzii](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) uvádza ako plánovač SM-2.

[README v predvolenej vetve](https://github.com/essentialist-app/essentialist/blob/main/README.md) už uvádza FSRS a vývoj kódu v repozitári pokračoval aj v roku 2026. To naznačuje užitočný smer vývoja, no nie je to dôvod označovať binárne vydanie z roku 2025 za vydanie s FSRS.

Markdown tiež pokrýva menej, než sa na prvý pohľad zdá. Text kartičiek je vo viditeľnom súbore, zatiaľ čo pokrok je v skrytej databáze s názvom `.<deck file>.db`. Skopírovaním `sample.md` bez `.sample.md.db` zachováte otázky a odpovede, ale stratíte stav učenia.

Nie je tu zabudovaná synchronizácia zariadení ani server. Súbory môžete vložiť do vlastného synchronizovaného priečinka, no riešenie konfliktov a obnova potom zostávajú na vás.

Vyberte si Essentialist, keď vám ide o čitateľný Markdown a prácu bez siete. Nie je to bezproblémový systém pre viac zariadení a jeden viditeľný súbor nie je úplná záloha.

## Štyri aktívne projekty, ktoré sa oplatí sledovať

Za týmito projektmi je skutočná práca z roku 2026. Mimo hlavnej šestice zostávajú preto, že na odporúčanie nestačí zaujímavý zdrojový kód.

| Projekt | Čo už existuje | Čo zatiaľ bráni zaradeniu do hlavného výberu |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Kód pod licenciou AGPL, plánovače FSRS/SM-2/Leitner, nasadenie cez Docker, spravovaná služba, import CSV a export údajov | Vznikol v júli 2026; bez verziovaného vydania aplikácie. Jeho vydanie na GitHube je zvukový balík, nie míľnik aplikácie |
| [Openlet](https://github.com/ChloeVPin/openlet) | Webová aplikácia pod licenciou MIT s FSRS, importom CSV, zakrývaním častí obrázkov a dokumentovanou architektúrou Supabase/Vercel | Bez vydania označeného tagom; oficiálna dokumentácia zatiaľ úplne nevymedzuje prácu offline, export a obnovu pri vlastnom hostingu |
| [Prep](https://github.com/Zamua/prep-app) | Kód pod licenciou MIT, FSRS, hostované používanie a dokumentované nasadenie v prostredí celld, ktoré možno prevádzkovať na vlastnom serveri | Bez vydania označeného tagom; vlastný hosting znamená aj prevádzku celld a objektového úložiska, nie nasadenie samostatného binárneho súboru aplikácie na kartičky |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Mobilná aplikácia v Kotline pod licenciou GPLv3, FSRS/SM-2, vydanie pre Android a import APKG so šablónami a médiami | Vznikol v roku 2026; iOS vyžaduje zostavenie zo zdrojového kódu a oficiálna dokumentácia nevymedzuje všeobecnú synchronizáciu medzi telefónmi |

Viaceré známe aplikácie nespĺňajú podmienky z jednoduchších dôvodov. [Open source repozitár Mochi](https://github.com/mochi-cards/open-source) je zbierka integrácií, nie jadro aplikácie. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) je open source a umožňuje vlastný hosting, ale jeho oficiálne README stále uvádza intervalové opakovanie medzi pripravovanými funkciami („Features coming soon“). [OpenCards](https://github.com/holgerbrandl/opencards) nemá nové vydanie od [v2.5.1 z januára 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) a jeho repozitár nezaznamenal zmenu kódu od roku 2018.

Ak prístup k zdrojovému kódu nie je podmienkou, [širšie porovnanie alternatív k Anki](/sk/blog/best-anki-alternatives/) zahŕňa produkty, ktoré riešia inú otázku.

## Migráciu overte v piatich samostatných vrstvách

„Importuje z Anki“ je bez ďalšej vety takmer zbytočné tvrdenie. Migrácia môže v jednej vrstve uspieť a v ďalších štyroch zlyhať.

| Vrstva | Čo porovnať | Zavádzajúci signál úspechu |
| --- | --- | --- |
| Obsah kartičiek | Každé pole, označenie vynechaného textu, značku, špeciálny znak a opakujúcu sa poznámku | Celkový počet kartičiek je podobný |
| Štruktúra | Typy poznámok, šablóny, vygenerované súvisiace kartičky a vnorené balíčky | Text prednej a zadnej strany sa niekde objavil |
| Médiá | Obrázky a zvuk sa skopírovali, odkazy fungujú lokálne a médiá sa zobrazia či prehrajú offline | Importér rozpoznal názvy súborov |
| Stav učenia | Denník opakovaní, stav, termín, interval, zabudnutia a parametre plánovača | Importované kartičky existujú, no potichu začínajú odznova ako nové |
| Odchod a obnova | Dokumentovaný export alebo záloha dokáže obnoviť rovnaký systém inde | Čitateľný textový export sa považuje za úplnú zálohu |

Pred presunom skutočnej zbierky vytvorte jeden zámerne komplikovaný testovací balíček. Pridajte ďalšie polia, dopĺňanie vynechaného textu, šablóny v priamom aj opačnom smere, vnorené balíčky, značky, obrázky, zvuk a dostatok histórie opakovaní na to, aby sa ukázalo, či ju cieľ zachoval.

Pôvodnú zálohu si nechajte nedotknutú. Po importe porovnajte počty poznámok, kartičiek a médií samostatne. Skontrolujte termíny opakovania; nespoliehajte sa len na hlásenie „plánovanie importované“. Opakujte offline na každom zariadení, ktoré chcete používať. Potom na dvoch zariadeniach vytvorte skúšobné konfliktné úpravy, ktoré môžete zahodiť, a sledujte správanie synchronizácie.

Niekoľko dní používajte oba systémy. Vymazanie starej zbierky je posledný krok, nie dôkaz, že nová funguje.

## Vlastný hosting je hotový až po obnove

Vyššie uvedené produkty označujú ako „vlastný hosting“ veľmi odlišné veci:

- Anki a Mnemosyne prevádzkujú **synchronizačné služby**, kým rozhraním na učenie zostávajú nainštalovaní klienti.
- SiYuan v Dockeri spúšťa **aplikáciu v prehliadači**, ktorú natívni klienti nemôžu používať ako synchronizačný server.
- Recall prevádzkuje **server na prenos šifrovaných snímok**, nie samotnú PWA.
- Nibomo nasadzuje **celý web a backend**, kým natívne aplikácie zostávajú samostatnými zostaveniami.
- Essentialist **nemá server**; všetko, čo vlastníte a spravujete, sú lokálne súbory.

Keď máte tento rozsah jasný, vyskúšajte časť, ktorú prevádzkovatelia zvyknú odkladať:

1. Vytvorte kartičky, pripojte médiá, dokončite opakovania a synchronizujte z dvoch klientov.
2. Zálohujte každú databázu, kontajner objektového úložiska, lokálny súbor, tajný údaj a konfiguračnú hodnotu uvedenú v dokumentácii.
3. Obnovte ich do prázdneho účtu, na prázdny stroj alebo do izolovaného nasadenia.
4. Porovnajte počet kartičiek, médiá, históriu opakovaní, stav termínov, prihlásenie a synchronizáciu klientov.
5. Aktualizujte obnovenú kópiu a dokončite ďalší cyklus opakovania.

Ak obnova systému stále závisí od starého stroja, máte fungujúcu službu. Nemáte overenú zálohu.

## Často kladené otázky

### Aká je najlepšia open source aplikácia na kartičky v roku 2026?

Anki je najlepšia východisková voľba pre väčšinu študujúcich. Spája vyspelý model zbierky, FSRS, širokú podporu klientov a najbohatšie vlastné formáty záloh a exportov. Má to však obmedzenie: oficiálne produkty pre iOS a web nie sú zahrnuté v otvorenom repozitári počítačovej aplikácie a server na vlastnom hostingu poskytuje synchronizáciu, nie učenie v prehliadači.

### Aká je najlepšia open source alternatíva k Anki?

Mnemosyne je najosvedčenejšia alternatíva zameraná priamo na učenie a oficiálne dokumentuje import vlastných typov kartičiek a údajov o učení z Anki. Recall vyzerá modernejšie a na počítači priamo importuje súbory APKG, ale prevádza prvé dve polia poznámky, zachováva len snímku stavu plánovania, importuje obrázky bez zvuku a neprenáša úplný denník opakovaní.

### Môžem Anki prevádzkovať na vlastnom serveri?

Áno, môžete prevádzkovať oficiálny synchronizačný server Anki pre kompatibilných klientov. Nie je to však náhrada AnkiWeb na vlastnom hostingu: chýba rozhranie na učenie v prehliadači.

### Znamená open source aj fungovanie offline?

Nie. Open source opisuje licenciu a prístup k zdrojovému kódu. Správanie offline závisí od toho, kde klient ukladá údaje a ktoré úkony potrebujú službu. Platí aj opak: aplikácia môže uchovávať údaje lokálne bez zverejnenia zdrojového kódu svojho jadra.

### Zaručuje vlastný hosting prenositeľnosť?

Nie. Vlastný hosting určuje, kde služba beží. Prenositeľnosť závisí od exportov, úplných záloh a obnovy, ktorú ste skutočne vyskúšali. Aj databáza na vašom serveri sa môže migrovať ťažko a čitateľný balíček v Markdowne môže stále vynechávať stav opakovaní uložený vedľa neho.

## Moje odporúčanie

Zostaňte pri **Anki** alebo si ho vyberte, pokiaľ vám niektoré jeho obmedzenie nespôsobuje skutočný problém. **Mnemosyne** si vyberte pre sústredené lokálne učenie na počítači a osvedčený import z Anki. **SiYuan** používajte, keď kartičky patria do väčšej znalostnej bázy. **Nibomo** zvážte, keď vlastníctvo úplného kódu webu, natívnych aplikácií a backendu stojí za produkčnú infraštruktúru AWS. **Recall** si vyberte pre moderného klienta s dôrazom na lokálne údaje po overení obmedzení jeho prevodu. **Essentialist** si vyberte, keď vám viac než na synchronizácii záleží na obyčajnom Markdowne a práci úplne bez siete.

Najlepšia open source aplikácia na kartičky nie je repozitár s najdlhším zoznamom funkcií. Je to aplikácia, ktorej rozsah zdrojového kódu, údaje offline, migrácia, synchronizácia, hosting a obnova zodpovedajú systému, ktorý ste skutočne ochotní vlastniť a spravovať.
