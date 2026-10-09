---
title: "Má Quizlet v roce 2026 veřejné API? Současný stav a bezpečné alternativy"
description: "Má Quizlet API? K 18. srpnu 2026 nemá zdokumentované veřejné API s přístupem bez individuální dohody. Porovnejte podporované alternativy."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "má Quizlet API"
  - "veřejné API Quizletu"
  - "vývojářské API Quizletu"
  - "alternativa k Quizlet API"
  - "automatizace kartiček"
---

K 18. srpnu 2026 Quizlet neuvádí v dokumentaci veřejné vývojářské API s přístupem bez individuální dohody ani veřejný portál pro vývojáře. Nezávislý vývojář v současnosti nemá oficiální způsob, jak zaregistrovat aplikaci, získat API klíč Quizletu a pomocí zdokumentovaných endpointů číst nebo zapisovat data kartiček.

Toto zjištění se týká veřejné dokumentace Quizletu, nikoli jeho interních systémů. Quizlet má zjevně produktové i partnerské integrace. Dvěma současnými příklady jsou jeho aplikace v ChatGPT a doplněk pro Google Classroom. Ani jedna z těchto integrací nezpřístupňuje ostatním aplikacím univerzální vývojářské API Quizletu.

**Fakta ověřena:** 18. srpna 2026.

> **Můj vztah k produktu:** Jsem Kirill Markin a vyvíjím Nibomo. Jeho Agent API a MCP server níže uvádím jako alternativy. Nibomo není kompatibilní s Quizletem a sady z Quizletu automaticky neimportuje.

![Vývojář porovnává export z Quizletu, vložení do stránky, konkrétní integrace a zdokumentované API pro kartičky](/blog/quizlet-api.png)

## Stručná odpověď: Quizlet nemá zdokumentované veřejné API s přístupem bez individuální dohody

Pokud jste hledali „má Quizlet API?“, protože chcete automatizovat samotný Quizlet, současná praktická odpověď zní: **veřejné API s přístupem bez individuální dohody není zdokumentované**.

Několik oficiálních funkcí může zvenčí připomínat API. Každá ale řeší užší úkol:

| Co potřebujete | Podporovaný způsob | K čemu se hodí | Co neposkytuje |
|---|---|---|---|
| Přenést text ze sady, kterou jste vytvořili | [Export na webu Quizletu](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Jednorázové zkopírování pojmů a definic | Obrázky, export zkopírovaných sad, historii učení ani přístup k API |
| Umístit veřejnou sadu na web nebo stránku v LMS | [Vložení Quizletu do stránky](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Studijní aktivita s logem Quizletu přímo na vaší stránce | Strukturovaná data kartiček ani přístup pro čtení a zápis |
| Vytvořit sadu v Quizletu z konverzace v ChatGPT | [Aplikace Quizlet v ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Vytvoření a náhled sady pomocí `@Quizlet` | Přihlašovací údaje ani endpointy pro vaši vlastní aplikaci |
| Zadávat úkoly z Quizletu v Google Classroom | [Doplněk Quizlet pro Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Vyhledávání, zadávání a sledování aktivit v Classroom | Univerzální API pro vlastní vzdělávací software |
| Vytvořit vlastní integraci s Quizletem | Žádný postup bez individuální dohody není v současnosti zdokumentovaný | Může existovat konkrétní partnerská dohoda | Veřejnou registraci, API klíče ani zdokumentované rozhraní pro práci s kartičkami |
| Automatizovat vlastní pracovní prostor s kartičkami | [Nibomo Agent API](/cs/docs/api/) nebo [MCP konektor](/cs/docs/mcp-connector/) | Opakované čtení a zápis kartiček a balíčků v rámci pracovního prostoru | Kompatibilitu s Quizletem ani automatický import z Quizletu |

Rozdíl je jednoduchý: jednorázové zkopírování textu vlastních kartiček je export. Zobrazení Quizletu na jiné stránce je vložení do stránky. Konkrétní integrace funguje jen v daném produktu a pro činnosti, které podporuje. Software, který opakovaně vytváří, čte a upravuje kartičky, potřebuje zdokumentované API pro čtení a zápis.

## Export, vložení do stránky a partnerský přístup nejsou veřejná API

Veřejné API dává externím vývojářům jasná pravidla: dokumentaci, autentizaci, podporované operace, podmínky používání a způsob získání přístupových údajů. Žádné ze současných veřejných rozhraní Quizletu neposkytuje celý tento postup bez individuální dohody.

**Export** z Quizletu je ruční přenos. Autor sady může na webu nastavit uspořádání pojmů a definic, zvolit kopírování textu (**Copy text**) a vložit výsledek jinam. Podle Quizletu nelze exportovat obrázky ani zkopírované sady a funkce je dostupná pouze na webu. Pro pečlivě provedenou jednorázovou migraci to stačí. Software tím ale nemůže udržovat dva systémy synchronizované.

**Vložení do stránky** slouží k zobrazení, nikoli k přístupu k datům. Quizlet umožňuje zkopírovat HTML veřejné sady v režimech Match, Learn, Test, Flashcards nebo Spell. Vložená aktivita zachovává logo Quizletu a studenti pracují s jeho rozhraním. Vaše aplikace nedostane sadu jako záznamy kartiček, které by mohla upravovat.

**Konkrétní integrace** podporuje činnosti dohodnuté pro daný produkt. Quizlet může spolupracovat s ChatGPT nebo Google Classroom, aniž by stejné rozhraní nabízel každému vývojáři. Spuštění těchto integrací dokládá jejich existenci; nedokazuje, že je za nimi veřejné API Quizletu pro obecné použití.

Ze stejného důvodu není podporovaným API Quizletu ani stará knihovna, která jeho rozhraní obaluje, ani požadavek viditelný ve vývojářských nástrojích prohlížeče. Chybí veřejná dokumentace a stabilní rozhraní s jasnými pravidly pro vývojáře.

## Vyberte postup podle svého úkolu

### Pro jednorázovou zálohu nebo migraci použijte export

U sady, kterou jste vytvořili, použijte oficiální postup exportu z Quizletu. Protože končí kopírováním textu (**Copy text**), ponechte první vloženou kopii beze změn, než začnete upravovat oddělovače nebo mapovat pole. Uchováváte pojmy a definice, nestahujete balíček, ze kterého by šla sada obnovit. Obrázky a historie učení zůstávají v Quizletu.

Praktický kontrolní seznam najdete v článku [Jak exportovat sady z Quizletu v roce 2026](/cs/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Popisuje původní a pracovní kopie, UTF-8, tabulátory, víceřádkové definice a rozdíl mezi přenosem obsahu kartiček a přenosem údajů, podle kterých se plánuje opakování.

Export se hodí pro jednorázový přesun. Pro každodenní vytváření, synchronizaci nebo opakované úpravy prostřednictvím softwaru se nehodí.

### Pro zobrazení na stránce použijte oficiální kód pro vložení

Pokud mají studenti procvičovat veřejnou sadu z Quizletu na webu třídy nebo stránce v LMS, použijte kód pro vložení, který Quizlet poskytuje na svém webu. Vyberte aktivitu, zvolte kopírování HTML (**Copy HTML**) a přidejte výsledek na stránku. Studenti získají interaktivní aktivitu Quizletu; hostitelský web nedostane přímý přístup k datům kartiček.

Učiteli to často úplně stačí. Označovat to za API jen zbytečně komplikuje popis požadavku.

### Pro ChatGPT nebo Google Classroom použijte jejich konkrétní integraci

Oznámení Quizletu o ChatGPT z 10. března 2026 popisuje konkrétní postup: připojte aplikaci Quizlet, začněte zadání výrazem `@Quizlet`, zobrazte si náhled vytvořené sady v ChatGPT a poté ji otevřete v Quizletu, kde ji můžete přizpůsobit a začít se učit. Je to podporovaný způsob, jak z dané konverzace vytvořit sadu v Quizletu. Váš bot, skript ani web tím nezíská opakovaně použitelné přístupové údaje k API Quizletu.

Stejně konkrétní je oznámení Quizletu o Google Classroom z 30. června 2026. Doplněk umožňuje učitelům vyhledávat a zadávat aktivity, včetně procvičovacích otázek, kartiček a her, a pak v rámci Classroom sledovat zapojení a pokrok studentů. Podle Quizletu vyžaduje Google Workspace for Education Plus; učitelé mohou potřebovat, aby jim správce IT udělil oprávnění nebo doplněk zpřístupnil.

Pokud některý z těchto postupů odpovídá vašemu cíli, použijte ho. Pro vlastní aplikaci ale ani jedna z integrací nenahrazuje veřejný přístup pro vývojáře.

### Pro pravidelnou automatizaci vyberte zdokumentované rozhraní pro čtení a zápis

Průběžná automatizace znamená, že váš software musí opakovaně a spolehlivě dělat stejnou práci: vytvářet kartičky z poznámek, vypisovat balíčky, aktualizovat odpovědi nebo dlouhodobě spravovat pracovní prostor. Export přes schránku takové rozhraní neposkytne.

Bezpečnou cestou je systém pro kartičky, který výslovně zveřejňuje, jak se externí software autentizuje a jaké operace čtení a zápisu podporuje. Pro automatizovanou část práce to může znamenat výběr alternativy k API Quizletu. Quizlet si přitom můžete ponechat pro studijní činnosti, které jeho veřejně dostupná aplikace podporuje.

## Co alternativa v podobě API Nibomo skutečně nabízí

Nibomo zveřejňuje dva způsoby přístupu ke stejnému omezenému souboru dat jednotlivých uživatelů:

- [Externí Agent API](/cs/docs/api/) začíná na `GET https://api.nibomo.com/v1/`. Jeho úvodní odpověď provede agenta přihlášením pomocí jednorázového kódu zaslaného e-mailem, vytvořením API klíče a výběrem pracovního prostoru. Čtení probíhá přes endpoint pro dotazy ve stylu SQL; zápis přes samostatný endpoint execute.
- [Vzdálený MCP server](/cs/docs/mcp-connector/) je dostupný na `https://mcp.nibomo.com/mcp`. Klienti MCP mají osm nástrojů: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` a nástroje pro opakování `next_review_card`, `reveal_answer` a `submit_review`.

`get_usage_limits` — umožňuje pouze číst tarif účtu, limity a využití AI v aktuálním měsíci; kartičky nečte ani nemění.

Oba způsoby přístupu jsou omezené na vybraný pracovní prostor. Dostupné datové zdroje jsou `workspace`, `cards`, `decks` a `review_events` a výsledky jsou omezené na 100 řádků na příkaz. Rozhraní ve stylu SQL používá omezený dialekt, nikoli přímo PostgreSQL. Schéma OpenAPI není k dispozici, takže postupy závislé na generovaných klientech OpenAPI budou potřebovat jiné rozhraní.

To může vývojáři nebo AI agentovi pomoci automatizovat práci s vlastními kartičkami. Nibomo ale neumí načíst obsah z URL Quizletu, zrcadlit účet v Quizletu ani fungovat jako jeho nezdokumentovaný klient. Automatický import z Quizletu není k dispozici. Při migraci nejprve exportujte pojmy a definice ze své vlastní sady, zkontrolujte text a poté ho namapujte do polí kartiček v cílovém systému. Ten si vytvoří vlastní stav učení; historie z Quizletu se nepřenese.

Rozdíly mezi produkty nad rámec přístupu k API najdete ve [srovnání s open source alternativou k Quizletu](/blog/quizlet-alternative/).

## Interní požadavky webového rozhraní nejsou bezpečná zkratka

Webové rozhraní Quizletu posílá síťové požadavky stejně jako každá moderní webová aplikace. Nalezení jednoho takového požadavku z něj ale nedělá podporovaný endpoint pro váš program.

Interní endpointy používané prohlížečem mohou záviset na cookies relace, interních formátech, ochraně proti zneužití a konkrétní podobě současného rozhraní. Mohou se měnit bez veřejného verzování nebo pokynů k migraci. A [podmínky služby Quizlet](https://quizlet.com/tos), naposledy aktualizované 28. května 2026, výslovně zakazují scraping a jiné automatizované získávání dat i neoprávněné automatizované používání služby.

Je to křehký a riskantní základ i pro osobní skript, natož pro produkt. Odhadované endpointy ani postup zpětného zkoumání rozhraní zde poskytovat nebudu.

Pro jednorázový přesun vlastní sady použijte export. Veřejnou sadu vložte do stránky, pokud ji tam studenti potřebují. Konkrétní integrace s ChatGPT nebo Google Classroom použijte pro přesně ty postupy, které podporují. Pro opakované čtení a zápis vyberte software se zdokumentovanými pravidly automatizace — nebo pracujte s Quizletem ručně, dokud takové rozhraní nezveřejní.

## Jak poznat, že se situace změnila

Quizlet může po datu ověření faktů v tomto článku spustit program pro vývojáře. Hledejte oficiální vývojářský portál nebo dokumentaci, která vysvětluje, kdo se může registrovat, jak funguje autentizace, jaké operace s kartičkami jsou podporované a jaká pravidla používání platí.

Další knihovna třetí strany, která rozhraní obaluje, by odpověď nezměnila. Stejně tak ani nové konkrétní partnerství. Dokud Quizlet nezdokumentuje přístup pro vývojáře bez individuální dohody, přistupujte k tvrzením o aktuálním API Quizletu opatrně a vyberte podporovaný postup, který odpovídá vašemu skutečnému úkolu.
