---
title: "Má Quizlet v roku 2026 verejné API? Aktuálny stav a bezpečné alternatívy"
description: "Má Quizlet API? K 18. augustu 2026 nemá zdokumentované verejné API so samoobslužným prístupom. Porovnajte oficiálne podporované alternatívy."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "má Quizlet API"
  - "verejné API Quizletu"
  - "API Quizletu pre vývojárov"
  - "alternatíva k API Quizletu"
  - "automatizácia kartičiek"
---

K 18. augustu 2026 Quizlet nemá zdokumentované verejné API so samoobslužným prístupom pre vývojárov ani verejný vývojársky portál. Nezávislý vývojár tak v súčasnosti nemá oficiálny spôsob, ako zaregistrovať aplikáciu, získať API kľúč Quizletu a cez zdokumentované koncové body čítať alebo zapisovať údaje kartičiek.

Toto zistenie sa týka verejnej dokumentácie Quizletu, nie jeho interných systémov. Quizlet má produktové aj partnerské integrácie. Aktuálnymi príkladmi sú jeho aplikácia v ChatGPT a doplnok pre Google Classroom. Ani jedna z nich však nesprístupňuje univerzálne vývojárske API Quizletu ostatným aplikáciám.

**Fakty overené:** 18. augusta 2026.

> **Pre transparentnosť:** Som Kirill Markin a vyvíjam Nibomo. Jeho Agent API a MCP server nižšie uvádzam ako alternatívy. Nibomo nie je kompatibilné s Quizletom a neimportuje automaticky sady z Quizletu.

![Vývojár porovnáva export z Quizletu, vloženie na web, konkrétne integrácie a zdokumentované API pre kartičky](/blog/quizlet-api.png)

## Stručná odpoveď: Quizlet nemá zdokumentované API so samoobslužným prístupom

Ak ste hľadali „má Quizlet API?“, pretože chcete automatizovať prácu priamo v Quizlete, praktická odpoveď dnes znie: **verejné API so samoobslužným prístupom nie je zdokumentované**.

Viaceré oficiálne funkcie môžu navonok pripomínať API. Slúžia však na užšie vymedzené úlohy:

| Čo potrebujete | Podporovaný spôsob | Na čo sa hodí | Čo neposkytuje |
|---|---|---|---|
| Preniesť text zo sady, ktorú ste vytvorili | [Export na webe Quizletu](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Jednorazová kópia pojmov a definícií | Obrázky, export skopírovaných sád, história učenia ani prístup cez API |
| Vložiť verejnú sadu na web alebo stránku v LMS | [Vloženie sady z Quizletu](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Študijná aktivita so značkou Quizlet priamo na vašej stránke | Štruktúrované dáta kartičiek ani prístup na čítanie a zápis |
| Vytvoriť sadu v Quizlete z konverzácie v ChatGPT | [Aplikácia Quizlet v ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Vytvorenie a náhľad sady cez `@Quizlet` | Prístupové údaje ani koncové body pre vlastnú aplikáciu |
| Zadávať úlohy z Quizletu v Google Classroom | [Doplnok Quizlet pre Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Vyhľadávanie, zadávanie a sledovanie aktivít v Classroom | Univerzálne API pre vlastný vzdelávací softvér |
| Vytvoriť vlastnú integráciu s Quizletom | Samoobslužný prístup momentálne nie je zdokumentovaný | Môže existovať individuálna partnerská dohoda | Verejná registrácia, API kľúče ani zdokumentované rozhranie na prácu s kartičkami |
| Automatizovať vlastný pracovný priestor s kartičkami | [Nibomo Agent API](/sk/docs/api/) alebo [MCP konektor](/sk/docs/mcp-connector/) | Opakované čítanie a zápis kartičiek a balíčkov v rámci pracovného priestoru | Kompatibilita s Quizletom ani automatický import z Quizletu |

Rozdiel je jednoduchý: na jednorazové skopírovanie textu vlastných kartičiek slúži export. Na zobrazenie Quizletu na inej stránke slúži vloženie na web. Konkrétna integrácia funguje len v rámci postupu, ktorý daný produkt ponúka. Softvér, ktorý opakovane vytvára, číta a upravuje kartičky, potrebuje zdokumentované API na čítanie a zápis.

## Export, vloženie na web ani partnerský prístup nie sú verejné API

Verejné API poskytuje externým vývojárom jasne definované rozhranie: dokumentáciu, autentifikáciu, podporované operácie, pravidlá používania a spôsob získania prístupových údajov. Žiadna zo súčasných verejne dostupných možností Quizletu neponúka takýto úplný samoobslužný prístup.

**Export** z Quizletu je ručný prenos. Autor sady môže na webe nastaviť usporiadanie pojmov a definícií, zvoliť kopírovanie textu (**Copy text**) a výsledok vložiť inde. Quizlet uvádza, že obrázky exportovať nemožno, skopírované sady sa nedajú exportovať a funkcia je dostupná len na webe. Na starostlivo vykonanú jednorazovú migráciu to stačí. Softvéru to však neumožní priebežne synchronizovať dva systémy.

**Vloženie na web** slúži na zobrazenie obsahu, nie na prístup k dátam. Quizlet umožňuje skopírovať HTML kód verejnej sady v režimoch priraďovania (Match), učenia (Learn), testu (Test), kartičiek (Flashcards) alebo precvičovania pravopisu (Spell). Vložená aktivita si zachová logo Quizletu a študenti používajú jeho rozhranie. Vaša aplikácia nedostane sadu vo forme záznamov kartičiek, ktoré by mohla upravovať.

**Konkrétna partnerská integrácia** má vlastný dohodnutý spôsob fungovania. Quizlet môže spolupracovať s ChatGPT alebo Google Classroom bez toho, aby rovnaké rozhranie ponúkol každému vývojárovi. Uvedenie týchto integrácií dokazuje, že existujú. Nedokazuje však, že je za nimi verejné API Quizletu dostupné na všeobecné použitie.

Preto ani stará knižnica sprostredkujúca prístup ku Quizletu, ani požiadavka viditeľná vo vývojárskych nástrojoch prehliadača nie sú podporovaným API Quizletu. Chýba verejná dokumentácia a stabilné, jasne definované rozhranie pre vývojárov.

## Vyberte si postup podľa toho, čo potrebujete urobiť

### Na jednorazovú zálohu alebo migráciu použite export

Sadu, ktorú ste vytvorili, exportujte oficiálnym postupom v Quizlete. Keďže sa postup končí kopírovaním textu (**Copy text**), prvú vloženú kópiu si ponechajte bez zmien, ešte pred úpravou oddeľovačov alebo priradením údajov k poliam. Uchovávate pojmy a definície; nesťahujete balíček, z ktorého by sa dala obnoviť pôvodná sada. Obrázky a história učenia sa neprenesú.

Praktický kontrolný zoznam nájdete v článku [Ako exportovať sady z Quizletu v roku 2026](/sk/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Venuje sa pôvodným a pracovným kópiám, kódovaniu UTF-8, tabulátorom, viacriadkovým definíciám aj rozdielu medzi prenosom obsahu kartičiek a prenosom údajov o naplánovaných opakovaniach.

Export sa hodí na jednorazový presun. Na každodenné vytváranie, synchronizáciu alebo opakované úpravy pomocou softvéru vhodný nie je.

### Na zobrazenie sady použite oficiálny kód na vloženie

Ak majú študenti pracovať s verejnou sadou z Quizletu na webe triedy alebo stránke v LMS, použite kód na vloženie, ktorý Quizlet poskytuje na svojom webe. Vyberte aktivitu, zvoľte kopírovanie HTML (**Copy HTML**) a výsledok vložte na stránku. Študenti získajú interaktívnu aktivitu z Quizletu; samotný web nezíska prístup k dátam kartičiek.

Učiteľovi často stačí práve toto. Označenie API by len zbytočne komplikovalo opis toho, čo potrebuje.

### Pre ChatGPT alebo Google Classroom použite príslušnú integráciu

Oznámenie Quizletu z 10. marca 2026 o integrácii s ChatGPT opisuje konkrétny postup: pripojte aplikáciu Quizlet, začnite zadanie výrazom `@Quizlet`, pozrite si náhľad vytvorenej sady v ChatGPT a potom ju otvorte v Quizlete, kde si ju môžete upraviť a začať sa učiť. Je to podporovaný spôsob, ako z danej konverzácie vytvoriť sadu v Quizlete. Nezískate tým však opakovane použiteľné prístupové údaje k API Quizletu pre svojho bota, skript ani web.

Podobne konkrétne je aj oznámenie Quizletu z 30. júna 2026 o Google Classroom. Doplnok umožňuje učiteľom vyhľadávať a zadávať aktivity vrátane cvičných otázok, kartičiek a hier a následne sledovať zapojenie a pokrok študentov priamo v Classroom. Podľa Quizletu vyžaduje Google Workspace for Education Plus; učitelia môžu potrebovať, aby im správca IT udelil povolenie alebo doplnok sprístupnil.

Ak niektorý z týchto postupov zodpovedá vášmu cieľu, použite ho. Ak potrebujete vlastnú aplikáciu, ani jedna z integrácií nenahrádza verejný prístup pre vývojárov.

### Na pravidelnú automatizáciu si vyberte zdokumentované rozhranie na čítanie a zápis

Pri priebežnej automatizácii musí váš softvér spoľahlivo opakovať rovnakú prácu: vytvárať kartičky z poznámok, získavať zoznam balíčkov, aktualizovať odpovede alebo dlhodobo spravovať pracovný priestor. Export cez schránku takéto rozhranie neposkytuje.

Bezpečnou cestou je aplikácia na kartičky, ktorá výslovne dokumentuje, ako sa v nej externý softvér autentifikuje a aké operácie čítania a zápisu podporuje. Môže to znamenať, že si na automatizovanú časť práce vyberiete alternatívu k API Quizletu a Quizlet si ponecháte na učenie pomocou jeho verejne dostupných funkcií.

## Čo v skutočnosti ponúka API Nibomo ako alternatíva

Nibomo ponúka dva spôsoby prístupu k rovnakému obmedzenému rozsahu dát konkrétneho používateľa:

- Vstupným bodom [externého Agent API](/sk/docs/api/) je `GET https://api.nibomo.com/v1/`. Úvodná odpoveď prevedie agenta prihlásením pomocou jednorazového kódu OTP zaslaného e-mailom, vytvorením API kľúča a výberom pracovného priestoru. Na čítanie slúži koncový bod pre dopyty v štýle SQL; na zápis samostatný koncový bod na vykonávanie príkazov.
- [Vzdialený MCP server](/sk/docs/mcp-connector/) je dostupný na `https://mcp.nibomo.com/mcp`. Klienti MCP majú k dispozícii osem nástrojov: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` a nástroje na opakovanie `next_review_card`, `reveal_answer` a `submit_review`.

Ôsmy nástroj, `get_usage_limits`, umožňuje výhradne čítať informácie o programe účtu, limitoch a aktuálnom využití AI za daný mesiac; kartičky nečíta ani nemení.

Oba spôsoby prístupu sú obmedzené na vybraný pracovný priestor. Sprístupnené zdroje sú `workspace`, `cards`, `decks` a `review_events` a výsledky sú obmedzené na 100 riadkov na jeden príkaz. Rozhranie v štýle SQL používa obmedzený dialekt; nejde o priamy prístup k PostgreSQL. Schéma OpenAPI nie je k dispozícii, takže postupy závislé od generovaných klientov OpenAPI potrebujú iné rozhranie.

Vývojárovi alebo AI agentovi to môže pomôcť automatizovať prácu s vlastnými kartičkami. Nibomo však nedokáže načítať obsah z URL Quizletu, zrkadliť účet v Quizlete ani fungovať ako nezdokumentovaný klient Quizletu. Nemá automatický importér z Quizletu. Pri migrácii najprv exportujte pojmy a definície z vlastnej sady, skontrolujte text a potom ho priraďte k poliam kartičiek v cieľovej aplikácii. Tá si vytvorí vlastný stav učenia; história z Quizletu sa neprenesie.

Rozdiely medzi produktmi nad rámec prístupu cez API nájdete v [porovnaní Quizletu s alternatívou s otvoreným zdrojovým kódom](/blog/quizlet-alternative/).

## Interné požiadavky prehliadača nie sú bezpečná skratka

Webové rozhranie Quizletu odosiela sieťové požiadavky tak ako každá moderná webová aplikácia. Nájdením takejto požiadavky z nej nevznikne podporovaný koncový bod pre váš program.

Neverejné koncové body používané prehliadačom môžu závisieť od súborov cookie relácie, interných formátov, ochrany proti zneužitiu a predpokladov viazaných na aktuálne rozhranie. Môžu sa zmeniť bez verejného verziovania alebo pokynov na migráciu. Navyše [podmienky používania Quizletu](https://quizlet.com/tos), naposledy aktualizované 28. mája 2026, zakazujú scraping a iné automatizované získavanie dát, ako aj neoprávnené automatizované používanie služby.

To je nestabilný a riskantný základ aj pre osobný skript, nieto ešte pre produkt. Preto tu neuvádzam odhadnuté koncové body ani postupy reverzného inžinierstva.

Pri jednorazovom presune vlastnej sady použite export. Keď študenti potrebujú verejnú sadu na inej stránke, vložte ju na web. Integrácie s ChatGPT a Google Classroom použite na konkrétne postupy, ktoré podporujú. Na opakované čítanie a zápis si vyberte softvér so zdokumentovaným rozhraním pre automatizáciu alebo časť práce v Quizlete robte ručne, kým takéto rozhranie nezverejní.

## Ako zistíte, že sa situácia zmenila

Quizlet môže po dátume overenia faktov v tomto článku spustiť program pre vývojárov. Hľadajte oficiálny vývojársky portál alebo dokumentáciu, ktorá vysvetľuje, kto sa môže zaregistrovať, ako funguje autentifikácia, aké operácie s kartičkami sú podporované a aké pravidlá používania platia.

Ďalšia knižnica tretej strany sprostredkujúca prístup ku Quizletu by odpoveď nezmenila. Nezmenilo by ju ani nové konkrétne partnerstvo. Kým Quizlet nezdokumentuje samoobslužný prístup pre vývojárov, pristupujte k tvrdeniam o aktuálnom API Quizletu opatrne a vyberte si podporovaný postup podľa toho, čo skutočne potrebujete urobiť.
