---
title: "Má Quizlet v roce 2026 MCP server? Co mohou používat Claude a Codex"
description: "Quizlet v roce 2026 MCP server nedokumentuje. Porovnejte jeho aplikaci v ChatGPT, export dostupný jen autorům sad a bezpečný postup pro opakovaný přístup pomocí Claude nebo Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "MCP server Quizlet"
  - "konektor Quizlet pro Claude"
  - "propojení Quizlet s Claude"
  - "Quizlet Codex"
  - "aplikace Quizlet v ChatGPT"
  - "alternativa k API Quizlet"
---

K 12. září 2026 veřejná dokumentace služby Quizlet nepopisuje MCP server ani veřejné vývojářské API se samoobslužným přístupem. Pokud jste hledali URL MCP serveru Quizlet, kterou byste vložili do aplikace Claude, do Codex nebo do jiného MCP klienta, v dokumentaci Quizlet dnes žádný veřejný postup nastavení nenajdete.

Quizlet má oficiální aplikaci v ChatGPT. Dokáže z konverzace v ChatGPT vytvořit novou sadu v Quizlet, ale tento konkrétní postup není opakovaně použitelný MCP server Quizlet. Pokud potřebujete, aby měl agent opakovaný přístup k existujícím kartičkám, praktickou cestou je exportovat text ze sady, kterou jste vytvořili, ponechat si původní kopii, zkontrolovat přenos a použít systém na učení s kartičkami, který výslovně podporuje čtení a zápis prostřednictvím agentů.

**Fakta ověřena:** 12. září 2026.

> **Prohlášení o vlastním zájmu:** Jmenuji se Kirill Markin a vyvíjím Nibomo, jehož MCP server a Agent API níže uvádím jako alternativy. Nibomo se neumí připojit k účtu Quizlet ani importovat sadu z URL služby Quizlet.

![Zahradník přenáší jednu mladou rostlinu z uzavřeného skleníku na záhon s rozvětvenou kapkovou závlahou](/blog/quizlet-mcp-server.png)

## Aplikace v ChatGPT, export a MCP řeší různé úkoly

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) je otevřený standard pro připojení AI aplikací k externím systémům. MCP server obvykle poskytuje kompatibilním klientům známý koncový bod a definovanou sadu nástrojů, které mohou volat.

[Oficiální oznámení Quizlet o aplikaci v ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) popisuje jiný způsob použití. Nainstalujete si aplikaci Quizlet v ChatGPT, začnete zadání výrazem `@Quizlet`, prohlédnete si vygenerované kartičky přímo v ChatGPT a pak sadu otevřete v Quizlet, kde si ji upravíte a budete se z ní učit.

To se hodí pro úkol „převést tuto konverzaci v ChatGPT na sadu v Quizlet“. Oznámení nezveřejňuje obecný koncový bod MCP služby Quizlet, neposkytuje aplikacím Claude ani Codex přístup k vaší knihovně v Quizlet a nenabízí opakovaně použitelné přihlašovací údaje pro vývojáře.

O soukromé ani interní infrastruktuře Quizlet to nic nevypovídá. Popisuje to pouze rozhraní, které Quizlet zpřístupňuje ve své veřejné dokumentaci. Možnostem a omezením přístupu pro vývojáře se podrobněji věnuje článek [Má Quizlet v roce 2026 veřejné API?](/cs/blog/quizlet-api/).

Rozdíl je následující:

| Co skutečně potřebujete | Nejlépe podporovaná cesta v současnosti | Co očekávat |
| --- | --- | --- |
| Vytvořit novou sadu v Quizlet z konverzace v ChatGPT | Oficiální aplikace Quizlet v ChatGPT | Konkrétní postup s `@Quizlet` v ChatGPT a následné úpravy a učení v Quizlet |
| Přenést pojmy a definice ze sady, kterou jste vytvořili | Export na webu Quizlet | Jednorázovou textovou kopii, kterou si uložíte a zkontrolujete |
| Umožnit aplikacím Claude, Codex nebo jinému agentovi opakovaně číst či upravovat kartičky | Systém na učení s kartičkami s dokumentovaným MCP serverem nebo API pro agenty | Přístup s ověřením identity k cílovému pracovnímu prostoru, nikoli k Quizlet |
| Vyvíjet software pracující s daty účtu Quizlet | Počkat na oficiální vývojářskou dokumentaci nebo přístup přes autorizované partnerství | Veřejné samoobslužné API ani specifikace MCP pro Quizlet dnes nejsou zdokumentovány |

Aplikace Quizlet v ChatGPT zajišťuje jeden postup vytváření sad. Export slouží k jednorázovému přenosu. MCP zajišťuje opakovaný přístup k systému, který záměrně zpřístupňuje nástroje. Tyto možnosti nejsou zaměnitelné.

## Zvolte nejkratší podporovanou cestu

Pokud oficiální aplikace v ChatGPT vašemu úkolu vyhovuje, použijte ji. Kvůli vytvoření jediné sady v Quizlet z jedné konverzace není důvod přidávat druhý systém.

Pokud potřebujete jen zálohu nebo jednorázový přesun, použijte export z Quizlet. Pokud se má agent zítra vrátit, najít balíček, přidat kartičky a opravit je, potřebujete na cílové straně dokumentované rozhraní pro čtení a zápis. Dokud ho Quizlet nezveřejní, nemůže tento opakovaný postup fungovat jako podporované přímé připojení k vašemu účtu Quizlet.

U vlastního softwaru postaveného přímo na datech Quizlet se zastavte u stejné hranice. Požadavek z prohlížeče, stará obalová knihovna ani integrace, kterou někdo vytvořil reverzním inženýrstvím, nenahrazují aktuální vývojářskou dokumentaci.

## Při přenosu vlastní sady si ponechte možnost vrátit se zpět

[Oficiální pokyny Quizlet pro export](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) uvádějí, že sadu může exportovat pouze její autor, a to jen na webu. Postup je **Více → Exportovat → Kopírovat text**. Export zahrnuje pojmy a definice; podle Quizlet nelze exportovat obrázky a zkopírované sady exportovat nelze.

U sady, kterou jste vytvořili, stačí k opatrnému přenosu několik kroků:

1. Použijte export na webu Quizlet a výsledek vložte do prostého textového souboru.
2. Než změníte oddělovače, zalomení řádků nebo znění textu, uložte si nedotčenou kopii v UTF-8.
3. Upravujte duplikát, nikoli původní export.
4. Zkontrolujte vzorek ze začátku, prostředku a konce a také víceřádkové definice a znaky mimo latinku.
5. Importujte nebo přiložte pracovní kopii, prohlédněte si několik předních a zadních stran a teprve potom kartičky uložte.
6. Sadu v Quizlet i původní soubor si ponechte, dokud cílový balíček neotevřete a nevyzkoušíte.

Úplný postup kontroly oddělovačů, CSV a souborů najdete v článku [Jak exportovat sady z Quizlet v roce 2026](/cs/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Důležité omezení se snadno přehlédne: export přenáší text kartiček, nikoli obrázky z Quizlet, složky, historii učení, stav zvládnutí učiva ani plánování opakování.

Právě proto záleží na tom, abyste se mohli vrátit k původním datům. Pokud se z víceřádkové definice stanou dvě kartičky nebo oddělovač posune pole, původní soubor vám poslouží jako spolehlivý podklad pro porovnání.

## Co mohou Claude a Codex používat po exportu

Nibomo zveřejňuje vzdálený koncový bod MCP na adrese:

`https://mcp.nibomo.com/mcp`

> [Připojit k aplikaci Claude](https://claude.ai/directory/nibomo) · [Dokumentace](/cs/docs/mcp-connector/)

Jeho [dokumentace konektoru MCP](/cs/docs/mcp-connector/) definuje osm nástrojů: `list_workspaces`, `sql_query` pro čtení, `sql_execute` pro zápis, `get_guide` pro referenční příručky a dále `next_review_card`, `reveal_answer` a `submit_review` pro opakování. Interaktivní MCP klienti mohou přístup autorizovat přes OAuth. Agenti v terminálu mohou místo toho začít u [dokumentace Agent API](/cs/docs/api/) a použít zveřejněný postup přes HTTP.

`get_usage_limits` — pouze čte údaje o tarifu účtu, limitech a aktuálním měsíčním využití AI; kartičky nečte ani nemění.

Tím se z Nibomo nestává konektor pro Quizlet. Podporovaný postup je následující:

1. exportovat text ze sady v Quizlet, jejímž jste autorem;
2. uchovat původní soubor a zkontrolovat pracovní kopii;
3. před uložením do Nibomo zkontrolovat kartičky vzniklé přiřazením polí exportu;
4. připojit výsledný pracovní prostor v Nibomo ke kompatibilnímu klientovi pro budoucí čtení a zápis.

Postup připojení pro Claude najdete v článku [Jak připojit Nibomo k aplikaci Claude přes MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex a další agenti mohou použít dokumentovanou cestu přes MCP nebo Agent API podle toho, co jejich prostředí podporuje.

Nibomo neumí načíst URL z Quizlet, zrcadlit účet Quizlet, synchronizovat pozdější změny v Quizlet ani obnovit obrázky a historii učení, které export neobsahuje. Z materiálu, který se rozhodnete přenést, vytváří vlastní kartičky a nový stav plánování opakování.

Pokud zvažujete, zda se vám tento kompromis vyplatí i z jiných důvodů než kvůli přístupu agentů, podívejte se na [srovnání open source alternativy ke Quizlet](/blog/quizlet-alternative/).

## Oprávnění omezte na nezbytný rozsah úkolu

Veřejná specifikace odstraňuje část nejistoty při integraci, ale nezaručuje bezpečnost každé akce přes MCP. OAuth ověřuje připojení. Nezaručuje, že kartička vygenerovaná AI je správná, nezajišťuje, že vrácená data kartiček zůstanou uvnitř služby na učení s kartičkami a nerozhoduje, zda úprava odpovídá vašemu záměru.

Nibomo odděluje operace čtení od nástrojů pro zápis: `sql_execute` pro kartičky a balíčky, `submit_review` pro opakování. Přihlašovací údaj OAuth přesto pokrývá celé rozhraní konektoru, takže blokování nástrojů a způsob schvalování závisí na klientovi. Začněte s malým pracovním prostorem bez citlivých údajů. Nechte agenta číst jen data potřebná pro daný úkol, u zápisů ponechte schvalování každého volání zvlášť, pokud to klient podporuje, a před přijetím změny zkontrolujte pracovní prostor i navrhovanou úpravu.

Soukromé studijní materiály nepřipojujte, dokud si neověříte podmínky AI klienta týkající se uchovávání dat a nakládání s nimi. Pro první přenos stačí jednoduché pravidlo: ponechte si původní export, prohlédněte si několik kartiček, schvalte zápis v úzkém rozsahu a před dalšími kroky ověřte výsledek v cílové aplikaci.

## Nedělejte ze soukromé komunikace prohlížeče API

Požadavek viditelný ve vývojářských nástrojích prohlížeče není veřejné API Quizlet. Soukromé koncové body mohou záviset na souborech cookie relace, interních formátech a chování, které se mění bez upozornění. Jakékoli automatizované použití také musí být v souladu s [podmínkami služby Quizlet](https://quizlet.com/tos) a s oprávněními, která máte k danému materiálu.

Tento článek neposkytuje návody na scraping ani koncové body získané reverzním inženýrstvím. Pokud oficiální aplikace v ChatGPT úkolu vyhovuje, použijte ji. Pokud jste sadu vytvořili a potřebujete ji jednorázově přesunout, exportujte ji. Pokud potřebujete opakované čtení a zápis prostřednictvím agentů, přeneste zkontrolovaný obsah do systému, který takové rozhraní zveřejňuje, a práci na straně Quizlet ponechte ruční, dokud Quizlet nezdokumentuje něco nového.
