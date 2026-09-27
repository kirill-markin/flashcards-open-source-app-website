---
title: "Nejlepší kartičkové aplikace s otevřeným kódem v roce 2026: srovnání 6 aplikací FOSS"
description: "Srovnání šesti udržovaných kartičkových aplikací s otevřeným kódem: dostupný kód, offline data, synchronizace, import z Anki, export, vlastní hosting a obnova."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "nejlepší kartičkové aplikace s otevřeným kódem"
  - "open source aplikace na kartičky"
  - "rozložené opakování open source"
  - "kartičky na vlastním serveru"
  - "offline aplikace na kartičky"
  - "open source alternativa k Anki"
  - "FOSS kartičky"
---

Anki je i v roce 2026 nejlepší kartičkovou aplikací s otevřeným kódem pro většinu lidí. Zajímavější rozhodování začíná ve chvíli, kdy otevřený kód není vaším jediným nezbytným požadavkem.

Možná potřebujete webovou aplikaci na vlastním serveru. Nebo balíček, který si přečtete jako prostý Markdown. Nebo soukromý systém poznámek, ze kterých vznikají kartičky. Každý z těchto požadavků vede k jinému produktu a veřejný repozitář na GitHubu za vás nerozhodne.

Desktopový klient může mít otevřený kód, zatímco aplikace pro iPhone ho nezveřejňuje. Kontejner Dockeru může poskytovat webové rozhraní bez synchronizace s nativními klienty. Import může zachránit text, ale ztratit šablony, média a roky historie opakování, díky kterým byla sbírka užitečná.

Tímto posouzením prošlo šest projektů. Porovnal jsem jejich zveřejněný kód a licence, poslední stabilní vydání, lokální data, plánovač, synchronizaci, migraci z Anki, export a přesný rozsah toho, co lze provozovat samostatně. Právě poslední bod má větší význam, než připouští většina seznamů funkcí.

> **Vztah autora k produktům:** Jsem Kirill Markin a vyvíjím [Nibomo](https://nibomo.com/), jednu ze šesti níže uvedených aplikací. Její repozitář pod licencí MIT zahrnuje webovou aplikaci, nativní klienty, backend, synchronizaci a infrastrukturu. Nedal jsem ji na první místo. Anki je bezpečnější výchozí volba, Mnemosyne má zavedenější cestu pro migraci z Anki a několik zde uvedených možností je mnohem jednodušších na provoz.

**Fakta ověřena:** 5. září 2026. Stabilní vydání rozlišuji od práce dostupné pouze ve výchozí větvi repozitáře.

![Turista porovnává šest otevřených batohů a zkouší záložní výbavu před výběrem kartičkové aplikace s otevřeným kódem](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Stručná odpověď

| Váš hlavní požadavek | Nejvhodnější volba | Proč | Co nejdřív prověřit |
| --- | --- | --- | --- |
| Spolehlivý univerzální systém nebo složitá stávající sbírka | [Anki](https://apps.ankiweb.net/) | Vyspělé karty a šablony, FSRS, doplňky, široká nabídka klientů a exporty balíčků s mnoha údaji | Oficiální aplikace pro iOS a AnkiWeb nejsou součástí otevřeného desktopového kódu; vlastní hosting poskytuje synchronizaci, ne AnkiWeb |
| Úzce zaměřená desktopová alternativa se zavedeným importem z Anki | [Mnemosyne](https://mnemosyne-proj.org/) | Lokální studium, import typů karet a údajů o učení z Anki a synchronizační server, který můžete provozovat sami | Nejnovější stabilní vydání je stále 2.11; Android umí opakování, ale ne úpravy |
| Poznámky a kartičky v jedné lokální znalostní bázi | [SiYuan](https://b3log.org/siyuan/en/) | Nativní aplikace s offline režimem, vestavěné FSRS a skutečná webová aplikace v Dockeru | Aplikaci v Dockeru nelze synchronizovat s nativními aplikacemi a chybí v ní několik příkazů pro import a export |
| Zdrojový kód webu, mobilních aplikací, backendu i infrastruktury | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Jeden monorepozitář pod licencí MIT se zdokumentovaným produkčním nasazením | Podporované produkční prostředí stojí na AWS a při migraci z Anki se část dat ztrácí |
| Mladší desktopová aplikace s lokálním ukládáním a přímým importem APKG | [Recall](https://github.com/Madlezz/Recall) | FSRS, desktopová vydání, PWA, lokální databáze a volitelný šifrovaný přenosový server | Import zachová jen snímek stavu plánování, pracuje s prvními dvěma poli poznámky a vynechává zvuk |
| Čitelné balíčky v Markdownu bez závislosti na síti | [Essentialist](https://github.com/essentialist-app/essentialist) | Balíčky v prostých souborech a záměrně offline aplikace pro desktop a Android | Nemá synchronizaci a pokrok ukládá do samostatné skryté databáze |

Nejde o bodování funkcí. Začněte tím, co si nemůžete dovolit ztratit nebo postrádat. Pokud máte v Anki desetiletou historii opakování, věrnost migrace je důležitější než přehlednější rozhraní. Při nasazení ve škole může být přístup z prohlížeče a ověřená obnova důležitější než doplňky.

## Co se počítalo jako kartičková aplikace s otevřeným kódem

Použil jsem čtyři podmínky:

1. **Základní funkce pro studium mají zveřejněný zdrojový kód s výslovnou open source licencí.** Adresář integrací kolem nezveřejněného jádra nestačí.
2. **Rozložené opakování funguje už teď.** Položka v plánu vývoje ani obecný kvízový režim nestačí.
3. **Existuje vydaná sestava nebo jasně zdokumentované oficiální nasazení.** Samotné nedávné commity z prototypu neudělají bezpečné doporučení.
4. **Oficiální zdroje popisují práci s daty dost konkrétně na to, aby šla prověřit.** Potřeboval jsem konkrétní odpovědi k offline ukládání, synchronizaci, importu a exportu nebo hostování, ne neurčitý slib, že uživatelé „vlastní svá data“.

Počet hvězdiček nebyl podmínkou. Odráží stáří a publicitu stejně jako vhodnost produktu. Vyspělost ale význam má. Anki, Mnemosyne a SiYuan mají zavedená vydání i provozní modely. Recall a Essentialist doporučuji pro užší okruh použití, protože chování jejich vydaných verzí je dost dobře zdokumentované pro konkrétní použití.

Také u označení „udržovaná aplikace“ je třeba ověřit dvě věci. Vydání s verzovací značkou říká, co si uživatelé mohou nainstalovat; výchozí větev ukazuje, kam projekt směřuje. Nejjasnějším příkladem je Essentialist. Dokumentace stabilního vydání uvádí SM-2, zatímco aktuální větev uvádí FSRS. Tabulka níže proto zaznamenává SM-2.

## Srovnání šesti FOSS kartičkových aplikací

| Aplikace | Ověřená stabilní verze | Platformy | Offline data | Plánovač | Synchronizace | Migrace z Anki a možnost odchodu | Co lze hostovat samostatně |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. srpna 2026 | Windows, macOS, Linux; samostatní klienti pro Android a iOS; AnkiWeb | Nainstalovaní klienti umožňují studovat z lokálních sbírek | FSRS nebo starší SM-2 | AnkiWeb nebo oficiální synchronizační server na vlastní infrastruktuře | Importuje text, APKG/COLPKG a databáze Mnemosyne; exportuje text nebo balíčky s volitelnými médii a plánováním | **Pouze synchronizační server.** Žádný vlastní AnkiWeb ani rozhraní pro studium v prohlížeči |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. listopadu 2023; práce v repozitáři pokračovala v roce 2026 | Windows, macOS, Linux, Android; omezené opakování v prohlížeči | Desktop ukládá lokálně; Android umožňuje opakování offline, ale ne úpravy | Adaptivní plánování podle hodnocení vybavené odpovědi na stupnici 0–5 | Vestavěná synchronizace s desktopem nebo instancí bez grafického rozhraní | Oficiálně dokumentuje úplný import z Anki s vlastními typy karet a údaji o učení; export pro sdílení není úplná záloha | **Synchronizace a omezené opakování v prohlížeči.** Webový server nemá bezpečnostní funkce |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. srpna 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; prohlížeč přes Docker | Nativní klienti ukládají pracovní prostor lokálně | FSRS | Placená oficiální synchronizace s koncovým šifrováním nebo placená integrace S3/WebDAV třetích stran | Plná aplikace importuje Markdown a data a exportuje několik dokumentových a datových formátů; žádný zdokumentovaný importér APKG | **Plná webová aplikace.** Docker neumí synchronizovat nativní klienty a vynechává některé příkazy pro import a export |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. září 2026 | Web, iOS, Android | IndexedDB na webu; SQLite na iOS; Room nad SQLite na Androidu; lokální zápisy čekají ve frontě na synchronizaci | FSRS | Hostovaný backend nebo backend nasazený provozovatelem | Vlastní ZIP přenáší karty, štítky, metadata zdrojů a odkazovaná média, ale ne balíčky, stav učení, nastavení ani účty; bez importéru APKG | **Celý web a backend.** Produkční nasazení stojí na AWS; soukromé nativní sestavy vznikají samostatně |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. července 2026 | Windows, macOS, Linux; instalovatelná PWA | SQLite na desktopu; IndexedDB v prohlížeči; bez nutnosti účtu a standardně bez telemetrie | FSRS | Synchronizace složky na desktopu nebo volitelný šifrovaný přenos přes Cloudflare Worker/R2 | Desktopový import APKG čte první dvě pole, balíčky, štítky, přibližný snímek stavu plánování a obrázky; exportuje JSON a archivy Recall | **Pouze přenos šifrovaných snímků.** Nehostuje samotnou PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. října 2025; práce na kódu pokračovala v roce 2026 | Android APK, macOS DMG, Linux Flatpak; Windows ze zdrojového kódu | Bez síťového přístupu; obsah balíčku je v Markdownu | Stabilní vydání: SM-2; výchozí větev: FSRS | Žádná | Markdown zachovává obsah karet; skrytá doprovodná databáze zachovává pokrok | **Není co hostovat.** Zálohujte Markdown i doprovodný soubor společně |

## 1. Anki je nejbezpečnější výchozí volba

Anki vítězí v méně nápadných věcech. Dokáže reprezentovat složité typy poznámek, generovat ze šablon více karet k jedné poznámce, uchovávat média se sbírkou a přenášet roky údajů o plánování. Stabilním desktopovým vydáním pro toto posouzení je [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Novější sestava 26.09b2 je označena jako beta, proto z ní zde nevycházím.

Rozsah otevřeného kódu není jednotný. [Desktopový repozitář používá AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE) s uvedenými výjimkami pro přibalené komponenty. [AnkiDroid](https://github.com/ankidroid/Anki-Android) je samostatný open source projekt pro Android. AnkiMobile a AnkiWeb jsou oficiální produkty, ale jejich kód tyto repozitáře neobsahují. Podrobnosti najdete v článku [Má Anki otevřený zdrojový kód?](/blog/is-anki-open-source/).

Nainstalovaní klienti uchovávají lokální sbírky, takže běžné opakování funguje bez připojení. AnkiWeb je online rozhraní. Pokud rozhoduje offline režim, článek [Funguje Anki offline?](/blog/does-anki-work-offline/) rozlišuje, co zůstává lokální a co čeká na synchronizaci.

Anki podporuje [FSRS i svůj starší plánovač](https://docs.ankiweb.net/deck-options.html). Jeho exportní formáty jsou v této skupině nejlepším výchozím bodem pro migraci. [COLPKG obsahuje celou sbírku včetně plánování](https://docs.ankiweb.net/exporting.html), zatímco exporty APKG mohou zahrnout údaje o plánování a média, pokud tyto volby zapnete. Anki také importuje text, balíčky Anki a databáze Mnemosyne 2.0.

Takto podrobný exportní balíček nezaručuje dokonalý import jinam. Cílová aplikace stále musí rozumět jeho šablonám, pravidlům generování karet, odkazům na média a polím plánovače. Jen má k dispozici více informací než ze souboru CSV.

[Oficiální server pro vlastní hosting](https://docs.ankiweb.net/sync-server.html) je záměrně malý. Synchronizuje kompatibilní klienty Anki; neposkytuje AnkiWeb, opakování v prohlížeči ani portál pro správu účtů. Standardně naslouchá přes nešifrované HTTP a návod doporučuje ponechat ho v lokální síti nebo před něj postavit VPN či reverzní proxy s HTTPS. Také verze klienta a serveru musejí zůstat kompatibilní.

Anki si vyberte, pokud je na prvním místě věrné zachování sbírky, šablony, doplňky nebo široká podpora klientů. Jinou aplikaci hledejte až tehdy, když má větší váhu konkrétní omezení, například vlastní webové rozhraní nebo zveřejněný kód celé mobilní části.

## 2. Mnemosyne se soustředí na lokální studium

Mnemosyne působí jako desktopový studijní nástroj, protože přesně tím je. Nepřibaluje znalostní bázi ani cloudovou platformu. Dostanete lokální databázi, tradiční postup rozloženého opakování, doprovodnou aplikaci pro opakování na Androidu a synchronizační server, který může běžet na desktopu i na stroji bez grafického rozhraní.

Jeho nejnovější stabilní vydání je stále [2.11 z listopadu 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Do repozitáře přibyly změny v roce 2026, ale tím se z nich nestává stabilní instalační balíček. Vyzkoušejte verzi 2.11 na operačních systémech, které plánujete používat v příštích několika letech.

Také licenci nelze vystihnout jediným štítkem. [Přehled licencí v kořeni repozitáře](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) přiřazuje openSM2sync licenci LGPL v3 a zbytku Mnemosyne samostatné podmínky. [Licence hlavního programu](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) používá AGPL v3 s dodatečným ustanovením, podle kterého musí být název Mnemosyne jasně viditelný i v odvozeném díle a jeho konkrétní podobu je třeba projednat se správci projektu. Před dalším šířením upravené sestavy si text přečtěte.

[Klient pro Android umožňuje opakování offline, ale neumí upravovat karty](https://mnemosyne-proj.org/help/android-client). Jiná zařízení mohou využít server pro opakování v prohlížeči spuštěný z desktopové aplikace, oficiální přehled funkcí ale upozorňuje, že server nemá žádné bezpečnostní funkce. Je to užitečné rozhraní pro lokální síť, nikoli propracovaná veřejná webová aplikace.

Migrace je nejsilnější argument Mnemosyne proti prostému setrvání u Anki. Oficiální přehled funkcí dokumentuje [úplný import z Anki včetně vlastních typů karet a údajů o učení](https://mnemosyne-proj.org/features). [Vestavěná synchronizace](https://mnemosyne-proj.org/help/syncing) slučuje karty i údaje o učení a může směřovat na stroj pod vaší kontrolou.

Běžný příkaz pro export je při zálohování zrádný. Slouží ke sdílení vybraných karet a vynechává údaje o učení. Pro přesun nebo obnovu celého systému doporučuje [návod k používání více počítačů](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) zkopírovat celý datový adresář.

Mnemosyne je zde nejsilnější úzce zaměřenou open source alternativou k Anki. Počítejte ale s pomalým vydáváním stabilních verzí, omezenými úpravami na mobilu a webovým rozhraním, u kterého je třeba pečlivě omezit síťový přístup.

## 3. SiYuan se hodí, když jsou základem poznámky

SiYuan je aplikace pro správu znalostí s důrazem na soukromí. Kartičky jsou součástí stejného modelu bloků a dokumentů jako poznámky. To se hodí, když materiál k opakování vzniká z vašich poznámek. Pokud chcete jen frontu karet, je toho zbytečně mnoho.

[Repozitář pod licencí AGPL-3.0](https://github.com/siyuan-note/siyuan) propojuje rozhraní, jádro, mobilní aplikace, datovou vrstvu a komponentu FSRS. Ověřovaným stabilním vydáním je [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Desktopoví i mobilní klienti ukládají pracovní prostor lokálně a fungují i offline.

Synchronizace není součástí bezplatného tarifu s lokálním ukládáním. [Oficiální ceník](https://b3log.org/siyuan/en/pricing.html) nabízí v rámci předplatného oficiální synchronizaci s koncovým šifrováním, zatímco placené funkce Pro přidávají integrace vlastního úložiště S3 nebo WebDAV. Projekt také varuje před umístěním používaného pracovního prostoru do běžné synchronizované složky, protože souběžné úpravy mohou data poškodit nebo přepsat.

Docker provozuje skutečnou webovou aplikaci, ale nestává se tím synchronizačním serverem pro nainstalované aplikace. [Dokumentace Dockeru pro v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) uvádí, že se k němu desktopoví a mobilní klienti nemohou připojit. V Dockeru také chybí import Markdownu a export do PDF, HTML a Wordu. V plné nativní aplikaci tyto příkazy existují, takže přenést obecný seznam funkcí do plánu nasazení v Dockeru by bylo zavádějící.

Nenašel jsem oficiální importér APKG. SiYuan umí přenášet Markdown a vlastní datové formáty, ale sbírku z Anki bude třeba promyšleněji znovu sestavit.

SiYuan si vyberte, pokud je hlavním produktem znalostní báze a kartičky mají být její součástí. Pokud hledáte přímou náhradu Anki, Mnemosyne a Anki mají jasněji vymezené možnosti migrace.

## 4. Nibomo zveřejňuje více částí systému, jejich provoz je ale na vás

Nibomo v tomto srovnání zveřejňuje zdrojový kód největší části produktu. Monorepozitář pod licencí MIT zahrnuje webovou aplikaci, klienty pro iOS a Android, backend, autentizační službu, synchronizaci, administrační aplikaci, databázové migrace a infrastrukturu AWS. Zde použitým stabilním vydáním je [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Pozdější práci ve výchozí větvi nepočítám mezi vydané funkce.

[Architektura](/docs/architecture/) je navržena pro práci offline, ale „offline“ znamená u každého klienta něco trochu jiného. Webová aplikace používá IndexedDB jako hlavní lokální úložiště dat. iOS používá SQLite a Android Room nad SQLite. Změny se nejprve zapíší lokálně a před synchronizací se zařadí do odchozí fronty. Tento návrh zvládá přerušení spojení; nezajišťuje trvalost úložiště prohlížeče ani neodstraňuje potřebu vyzkoušet spuštění úplně zavřené aplikace na každém zařízení.

Vlastní ZIP balíček Nibomo slouží k přenosu obsahu, nikoli jako záloha účtu. Ve verzi v1.23.0 jeho [schéma](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) přenáší obsah přední a zadní strany, štítky, typ karty, metadata zdrojů a metadata balíčku; odkazovaná média se přibalují samostatně. Nepřenáší strukturu balíčků, historii opakování, stav FSRS, nastavení pracovního prostoru ani účty.

Verze v1.23.0 nemá importér APKG. Zdokumentovaný [postup migrace z Anki přes TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) využívá exportovaný text k novému vytvoření karet a vyžaduje lidskou kontrolu. Šablony, stav plánování, struktura balíčků a přibalená média se touto cestou automaticky nezachovají. Pro jednoduchý textový balíček je to rozumné, pro silně přizpůsobenou sbírku špatná volba.

Stejně konkrétní je [návod k vlastnímu hostování](/docs/self-hosting/). Produkční nasazení používá infrastrukturu definovanou pomocí AWS CDK s RDS, Cognito, API Gateway a Lambda, S3 a CloudFront, tajnými údaji, alarmy a zálohami. Cloudflare DNS, e-maily přes Resend a konfigurace Sentry stojí mimo AWS. Docker Compose slouží pro lokální vývoj; není podporovaným produkčním balíčkem. Provozovatelé, kteří chtějí soukromé sestavy pro iOS nebo Android, je sestavují a distribuují samostatně.

Nibomo si vyberte, pokud kontrola nad kompletním zdrojovým kódem webu, nativních aplikací a backendu stojí za práci s provozem. Anki nebo Mnemosyne zvolte tehdy, když je náročnějším požadavkem zachování stávající sbírky.

## 5. Recall je moderní, ale pečlivě si projděte importér

Recall je nejmladší z hlavních doporučených aplikací. Do seznamu se dostal, protože [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) poskytuje verzované desktopové sestavy, instalovatelnou PWA, výslovně popsané lokální ukládání, FSRS, exporty dat a zdokumentovaný návrh synchronizace na vlastní infrastruktuře.

Desktopová aplikace pod licencí MIT používá SQLite; PWA používá IndexedDB. Ani jedna nepotřebuje účet a podle projektu je telemetrie standardně vypnutá. Desktopová vydání pokrývají Windows, macOS a Linux.

Importér APKG je užitečný, ale označení „historie opakování“ v README slibuje více, než implementace dané verze poskytuje. [Zdrojový kód importéru v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) nečte záznamy opakování z Anki. Čte aktuální stav karty, interval, počet opakování a zapomenutí již naučených karet a také stabilitu a obtížnost FSRS, pokud je Anki uložilo. U starších karet bez těchto polí FSRS je Recall odhaduje z hodnot SM-2.

Také převod obsahu má omezení. Importér použije první dvě pole poznámky jako přední a zadní stranu místo toho, aby reprodukoval typy poznámek a šablony Anki. Zachovává názvy balíčků a štítky. Rozbalí běžné formáty obrázků a upraví odkazy na ně, ale zvuk a další média vynechá. Protože je importér příkazem Tauri, přímá migrace APKG funguje na desktopu, nikoli v PWA v prohlížeči.

To je výrazně lepší než nové sestavení z prostého textu, ale věrný přenos sbírky to není. Než mu svěříte velkou migraci, otestujte doplňovačky, karty vzniklé ze stejné poznámky, další pole, HTML/CSS, obrázky, zvuk, termíny opakování a opakující se poznámky.

Recall nabízí dvě cesty synchronizace. Desktop může zapisovat snímek dat do složky spravované Dropboxem, Drivem nebo jiným nástrojem pro synchronizaci souborů. Volitelný přenosový server používá Cloudflare Worker a bucket R2. Podle [návrhu synchronizace v dané verzi](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) klienti před odesláním šifrují snímky pomocí AES-GCM; server vidí šifrovaná data, nikoli obsah karet či klíč. Aktualizace používají optimistické řízení souběhu a při konfliktu provedou jeden opakovaný pokus, stále ale slučují celé snímky, ne jednotlivá pole. Veřejný přenosový server financovaný správci projektu neexistuje: nasadíte ho sami a zadáte jeho URL.

Exporty do JSON a archivů Recall umožňují odejít jinam. Než je označíte za zálohu, obnovte některý z nich do čistého profilu.

Recall si vyberte, pokud chcete moderní desktopovou aplikaci nebo PWA s lokálním ukládáním a přijmete mladý projekt i importér, který uchová užitečný snímek dat místo celého systému Anki.

## 6. Essentialist má snadno čitelný balíček, celý stav v něm ale nenajdete

Essentialist má ze všech zdejších aplikací nejmenší rozsah. Každý balíček je soubor Markdownu, který otevřete v textovém editoru, uložíte do systému správy verzí nebo zkopírujete běžnými nástroji pro práci se soubory. Aplikace záměrně neposílá žádné síťové požadavky.

Nejnovější stabilní vydání je [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Obsahuje sestavy pro Android, macOS a Linux; uživatelé Windows sestavují aplikaci ze zdrojového kódu. [README této verze](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) uvádí jako plánovač SM-2.

[README výchozí větve](https://github.com/essentialist-app/essentialist/blob/main/README.md) už uvádí FSRS a do repozitáře přibyly změny kódu v roce 2026. To ukazuje směr vývoje, ale není důvodem označovat sestavu z roku 2025 jako verzi s FSRS.

Ani soubor Markdownu neobsahuje tolik, kolik se zprvu zdá. Text karet je ve viditelném souboru, zatímco pokrok se ukládá do skryté databáze s názvem `.<deck file>.db`. Zkopírováním `sample.md` bez `.sample.md.db` zachráníte otázky a odpovědi, ale ztratíte stav učení.

Vestavěná synchronizace zařízení ani server neexistují. Soubory můžete umístit do vlastní synchronizované složky, ale řešení konfliktů a obnova pak zůstávají na vás.

Essentialist si vyberte, pokud vám jde o čitelný Markdown a práci bez sítě. Není to bezproblémový systém pro více zařízení a jeden viditelný soubor není úplná záloha.

## Čtyři aktivní projekty, které stojí za sledování

Na těchto projektech se v roce 2026 skutečně pracovalo. Do hlavní šestice se nedostaly, protože k doporučení je potřeba více než zajímavý zdrojový kód.

| Projekt | Co už konkrétně nabízí | Co zatím brání zařazení do hlavního seznamu |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Kód pod AGPL, plánovače FSRS/SM-2/Leitner, nasazení v Dockeru, spravovanou službu, import CSV a export dat | Vznikl v červenci 2026; nemá verzované vydání aplikace. Jeho vydání na GitHubu je zvukový balíček, nikoli milník aplikace |
| [Openlet](https://github.com/ChloeVPin/openlet) | Webovou aplikaci pod MIT s FSRS, importem CSV, zakrýváním částí obrázků a zdokumentovanou architekturou Supabase/Vercel | Nemá vydání s verzovací značkou a oficiální dokumentace zatím nevymezuje celý rozsah offline provozu, exportu a obnovy na vlastní infrastruktuře |
| [Prep](https://github.com/Zamua/prep-app) | Kód pod MIT, FSRS, hostované používání a zdokumentované nasazení na běhovém prostředí celld, které lze provozovat samostatně | Nemá vydání s verzovací značkou; vlastní hosting zahrnuje také provoz celld a objektového úložiště, nikoli jen nasazení samostatného spustitelného programu na kartičky |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Mobilní aplikaci v Kotlinu pod GPLv3, FSRS/SM-2, vydání pro Android a import APKG se šablonami a médii | Vznikl v roce 2026; iOS vyžaduje sestavení ze zdrojového kódu a oficiální dokumentace nepopisuje obecnou synchronizaci mezi telefony |

Několik známých jmen nesplňuje podmínky z jednodušších důvodů. [Open source repozitář Mochi](https://github.com/mochi-cards/open-source) je sbírkou integrací, nikoli jádrem aplikace. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) má otevřený kód a lze ho provozovat samostatně, ale jeho oficiální README stále řadí rozložené opakování mezi „Features coming soon“, tedy připravované funkce. [OpenCards](https://github.com/holgerbrandl/opencards) nemá nové vydání od [v2.5.1 z ledna 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) a v jeho repozitáři se kód nezměnil od roku 2018.

Pokud přístup ke zdrojovému kódu není nutnou podmínkou, [širší srovnání alternativ k Anki](/cs/blog/best-anki-alternatives/) zahrnuje produkty, které řeší jinou otázku.

## Migraci otestujte v pěti samostatných vrstvách

„Importuje z Anki“ je bez dalšího vysvětlení téměř bezcenná informace. Migrace může uspět v jedné vrstvě a selhat ve čtyřech dalších.

| Vrstva | Co porovnat | Zavádějící známka úspěchu |
| --- | --- | --- |
| Obsah karet | Každé pole, značku doplňovačky, štítek, zvláštní znak a opakující se poznámku | Celkový počet karet přibližně sedí |
| Struktura | Typy poznámek, šablony, více karet generovaných ze stejné poznámky a vnořené balíčky | Text přední a zadní strany se někde objevil |
| Média | Obrázky a zvuk se zkopírovaly, odkazy fungují lokálně a média se zobrazují či přehrávají offline | Importér rozpoznal názvy souborů |
| Stav učení | Záznamy opakování, stav, termín, interval, zapomenutí naučených karet a parametry plánovače | Importované karty existují, ale nenápadně začínají znovu jako nové |
| Odchod a obnova | Zdokumentovaný export nebo záloha dokáže jinde obnovit stejný systém | Čitelný textový export se považuje za úplnou zálohu |

Než přesunete skutečnou sbírku, vytvořte záměrně problematický testovací balíček. Zahrňte další pole, doplňovačky, šablony v obou směrech, vnořené balíčky, štítky, obrázky, zvuk a dostatek historie opakování, aby bylo poznat, zda ji cílová aplikace zachovala.

Nedotčenou zdrojovou zálohu si ponechte. Po importu porovnejte zvlášť počty poznámek, karet a médií. Místo důvěry v hlášku „plánování importováno“ si prohlédněte termíny. Opakujte offline na každém zařízení, které hodláte používat. Pak na dvou zařízeních vytvořte zkušební konfliktní úpravy, o které můžete přijít, a sledujte, co s nimi synchronizace udělá.

Několik dní používejte oba systémy. Smazání staré sbírky je poslední krok, nikoli důkaz, že nový systém funguje.

## Vlastní hosting je hotový až po obnově

Výše uvedené produkty označují vlastním hostingem velmi odlišné věci:

- Anki a Mnemosyne provozují **synchronizační služby**, zatímco ke studiu dál slouží nainstalovaní klienti.
- SiYuan v Dockeru provozuje **webovou aplikaci**, kterou nativní klienti nemohou používat jako synchronizační server.
- Recall provozuje **server pro přenos šifrovaných snímků**, nikoli samotnou PWA.
- Nibomo nasazuje **celý web a backend**, zatímco nativní aplikace zůstávají samostatnými sestavami.
- Essentialist **nemá server**; kontrola se týká lokálních souborů.

Jakmile víte, co přesně provozujete, vyzkoušejte část, kterou provozovatelé obvykle odkládají:

1. Vytvořte karty, připojte média, dokončete opakování a synchronizujte ze dvou klientů.
2. Zazálohujte každou zdokumentovanou databázi, bucket objektového úložiště, lokální soubor, tajný údaj a konfigurační hodnotu.
3. Obnovte je do prázdného účtu, stroje nebo izolovaného nasazení.
4. Porovnejte počet karet, média, historii opakování, naplánované termíny, přihlašování a synchronizaci klientů.
5. Aktualizujte obnovenou kopii a dokončete další cyklus opakování.

Pokud obnova stále závisí na původním stroji, máte běžící službu. Ověřenou zálohu ještě nemáte.

## Časté otázky

### Jaká je nejlepší kartičková aplikace s otevřeným kódem v roce 2026?

Anki je nejlepší výchozí volba pro většinu studentů. Kombinuje vyspělý model sbírek, FSRS, širokou nabídku klientů a nejbohatší vlastní formáty záloh a exportů. Má to omezení: oficiální aplikace pro iOS a webové rozhraní nejsou zahrnuty v otevřeném desktopovém repozitáři a server pro vlastní hosting poskytuje synchronizaci, nikoli studium v prohlížeči.

### Jaká je nejlepší open source alternativa k Anki?

Mnemosyne je nejzavedenější úzce zaměřená alternativa a oficiálně dokumentuje import vlastních typů karet a údajů o učení z Anki. Recall působí moderněji a na desktopu přímo importuje soubory APKG, ale převádí první dvě pole poznámky, uchovává jen snímek stavu plánování, importuje obrázky bez zvuku a nepřenáší úplné záznamy opakování.

### Mohu Anki provozovat na vlastním serveru?

Ano, pro kompatibilní klienty můžete provozovat oficiální synchronizační server Anki. Není to ale samostatně hostovaná náhrada AnkiWebu: chybí rozhraní pro studium v prohlížeči.

### Znamená otevřený kód také fungování offline?

Ne. Otevřený kód popisuje licencování a přístup ke zdrojům. Fungování offline závisí na tom, kam klient ukládá data a které operace potřebují službu. Platí to i obráceně: aplikace může uchovávat data lokálně, aniž by zveřejňovala kód svého jádra.

### Zaručuje vlastní hosting přenositelnost?

Ne. Vlastní hosting určuje, kde služba běží. Přenositelnost závisí na exportech, úplných zálohách a obnově, kterou jste skutečně vyzkoušeli. I databáze na vašem serveru může být obtížně přenositelná a čitelný balíček v Markdownu může vynechávat stav opakování uložený vedle něj.

## Moje doporučení

Ponechte si nebo zvolte **Anki**, pokud vám některé z jeho omezení nezpůsobuje skutečný problém. **Mnemosyne** vyberte pro soustředěné lokální studium na desktopu a zavedený import z Anki. **SiYuan** používejte, když mají kartičky patřit do větší znalostní báze. **Nibomo** zvažte, pokud vám kontrola nad celým zdrojovým kódem webu, nativních aplikací a backendu stojí za provoz produkčního prostředí na AWS. **Recall** zvolte pro moderního klienta s lokálním ukládáním, až vyzkoušíte omezení převodu. **Essentialist** vyberte, pokud je prostý Markdown a nulový síťový přístup důležitější než synchronizace.

Nejlepší kartičková aplikace s otevřeným kódem není repozitář s nejdelším seznamem funkcí. Je to aplikace, jejíž dostupný kód, offline data, migrace, synchronizace, hosting a možnosti obnovy odpovídají systému, který jste skutečně ochotni spravovat.
