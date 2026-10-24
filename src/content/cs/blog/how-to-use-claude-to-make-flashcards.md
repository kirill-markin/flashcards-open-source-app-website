---
title: "Jak v roce 2026 vytvářet kartičky pomocí modelu Claude: projekty, nahrávání souborů a opakování s FSRS"
description: "Praktický postup pro tvorbu kartiček s modelem Claude v roce 2026: v projektech s nahranými soubory navrhněte stručnější a jasnější kartičky a ty povedené přesuňte do Nibomo k opakování s FSRS."
date: "2026-06-11"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "jak vytvářet kartičky pomocí modelu Claude"
  - "Claude kartičky"
  - "z modelu Claude na kartičky"
  - "kartičky v projektech Claude"
  - "Claude kartičky z nahraných souborů"
  - "Claude z PDF na kartičky"
  - "tvorba kartiček s modelem Claude"
  - "kartičky FSRS"
---

> [Připojit k aplikaci Claude](https://claude.ai/directory/nibomo) · [Dokumentace](/cs/docs/mcp-connector/)

Včera jsem do nástroje Claude nahrál osnovu jedné přednášky a jedno nepřehledné PDF se zadanou četbou a požádal ho o kartičky. Několik jich bylo dobrých. Zbytek měl ten známý nádech výstupů AI: kartičky byly po věcné stránce správné, podivně uhlazené a při opakování mnohem náročnější, než se na první přečtení zdálo.

Právě v tom je skutečný problém s tím, **jak vytvářet kartičky pomocí modelu Claude**.

Claude umí ze zdrojových materiálů dobře navrhovat kartičky. Sám od sebe ale neumí stejně dobře rozhodnout, co patří do dlouhodobého opakování, jak malý rozsah má kartička mít nebo jestli se pěkně znějící odpověď bude dát snadno vyhodnotit i příští čtvrtek.

Postup, kterému bych v roce 2026 skutečně věřil, je proto užší, než lidé zpočátku chtějí: držet se jednoho tématu v jednom projektu Claude, nahrát jen materiály pro danou dávku, nechat si navrhnout jednoduché kartičky ve formátu otázka–odpověď, bez milosti mazat a pak přeživší přesunout do skutečného systému na opakování kartiček s FSRS.

![Útulný pracovní stůl s návrhy v projektech Claude, náhledy nahraných souborů a vybranými kartičkami pro FSRS](/blog/how-to-use-claude-to-make-flashcards.png)

## Claude má pro tento postup konečně vhodné nástroje

Tahle otázka je teď důležitější, protože Claude je pro studium vhodnější než dřív.

Anthropic představil **Claude for Education** dne **2. dubna 2025**, včetně **Learning Mode** v projektech. Stejně důležitá je jeho současná nápověda. Stránka nápovědy Anthropic k projektům s datem **16. března 2026** uvádí, že projekty jsou dostupné všem uživatelům a bezplatné účty jich mohou vytvořit až pět. Stránka nápovědy k nahrávání souborů s datem **22. dubna 2026** uvádí, že Claude podporuje formáty vhodné pro studium, včetně **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON a XLSX**.

Pro **tvorbu kartiček s modelem Claude** to nabízí mnohem přehlednější výchozí podmínky než starý postup „naházet všechno do jednoho chatu a doufat“.

Zpráva Anthropic o vzdělávání také ukazuje, že takové použití už je běžné. Uvádí, že ve **39,3 %** analyzovaných konverzací souvisejících se vzděláváním studenti používali nástroj Claude především k tvorbě a vylepšování vzdělávacího obsahu. Zajímavou otázkou tedy už není, zda lidé nástroj Claude na studijní materiály používají. Očividně ano. Lepší otázka je, jak z těchto materiálů udělat kartičky, které má smysl později opakovat.

## Začněte jedním projektem Claude pro každý předmět, zkoušku nebo téma

Tohle je první návyk, který bych si osvojil, protože zlepšuje téměř všechno, co následuje.

Současná dokumentace k projektům Claude je popisuje jako samostatné pracovní prostory s vlastní historií chatů a znalostními bázemi. Přesně to při navrhování kartiček potřebujete.

Nevytvářejte jeden obří pracovní prostor Claude s názvem `škola`.

Vytvořte jeden projekt pro:

- jeden kurz
- jednu certifikační zkoušku
- jeden celek, který chcete tento týden dokončit
- jednu skupinu témat, která k sobě opravdu patří

Návrhy tak budou přehlednější, protože se Claude nebude snažit smíchat nesouvisející materiály ze čtyř předmětů do jedné odpovědi. I následné úpravy budou méně otravné, protože víte, co měla každá dávka pokrývat.

Pokud nástroj Claude používáte obecněji jako doučovatele, nejen k navrhování kartiček, lépe vám jako doplněk poslouží článek [Jak používat nástroj Claude ke studiu v roce 2026](/cs/blog/how-to-use-claude-for-studying/). Tento článek má užší záběr. Jde v něm o cestu od výstupu modelu Claude ke kartičkám, které vám budou dávat smysl i při opakování.

## Nastavte pokyny projektu jednou, ať každá dávka začíná lépe

Tohle je jedna z nejužitečnějších výhod, které nabízí právě Claude.

Podle současné nápovědy Anthropic k projektům můžete nastavit **pokyny projektu**, aby se Claude ve všech jeho chatech držel stejných požadavků. U kartiček vám to ušetří opakování stejných pravidel pro formátování a vyřazování pokaždé, když nahrajete novou část materiálu.

Pokyny projektu bych napsal stručně a jednoduše:

```text
Když požádám o kartičky, použij jednoduchý formát s přední a zadní stranou. Na každé kartičce má být jeden pojem, fakt, rozdíl nebo krok postupu. Přední strana musí být konkrétní a musí se na ni dát odpovědět. Zadní strana má být krátká. Vynech duplicity, vágní otázky a vše, co závisí na chybějícím kontextu z původního zdroje.
```

Pokyny pro konkrétní úkol pak pište přímo do chatu při nahrávání nové dávky.

Toto rozdělení funguje dobře: pokyny projektu nastavují společná pravidla a zadání v chatu řeší právě nahranou přednášku, kapitolu nebo sadu otázek.

## Nahrávejte zdrojové materiály po menších dávkách, než si myslíte, že potřebujete

Právě tady většina postupů pro **převod materiálů na kartičky pomocí modelu Claude** ztrácí účinnost.

Lidé vidí možnost nahrávat soubory a berou ji jako svolení hodit do jediného požadavku materiály k celému kurzu. Výsledkem bývají horší kartičky, nikoli lepší.

Samotná dokumentace Anthropic k nahrávání u velkých dokumentů doporučuje to obyčejné řešení: rozdělit je na menší části. Udělal bych přesně to.

Lepší vstupy jsou třeba:

- poznámky z jedné přednášky
- jedna část zadané četby
- jedna opravená sada cvičných otázek
- jedna podkapitola
- jedna přehledná část studijní příručky

Horší vstupy jsou třeba:

- celá učebnice
- dvanáct přednášek najednou
- složka za celý semestr, kterou jste neprošli
- obří hromada přepisů, které ve skutečnosti nechcete opakovat kartičku po kartičce

Malé dávky vás nutí položit si poctivější otázku: co z této části si stojí za to později vybavit z paměti bez opětovného otevírání zdroje?

Díky této otázce zůstane balíček menší a lepší.

## Claude dobře navrhuje kartičky ze zdrojů, ale sám nevybere, co je důležité

Podle mě je to nejužitečnější způsob, jak o něm přemýšlet.

Claude dokáže:

- zkrátit část četby
- vysvětlit pojem srozumitelněji
- oddělit zjevná dílčí témata
- převést poznámky na návrhy kartiček s otázkou a odpovědí
- odhalit opakující se terminologii a definice

Claude sám od sebe neví:

- které skutečnosti už jsou vám dost jasné na to, abyste je vynechali
- které rozdíly vám pořád dělají problémy
- která odpověď je příliš dlouhá na rychlé vyhodnocení
- která kartička dává smysl jen proto, že si ještě pamatujete odstavec, ze kterého vznikla

Proto **tvorba kartiček s modelem Claude** funguje nejlépe, když Claude navrhuje a vy upravujete.

Když necháte všechna rozhodnutí na modelu Claude, obvykle dostanete balíček, který se až příliš snaží nic nevynechat. Zachovává toho moc, příliš vysvětluje a ponechává materiál, který se v danou chvíli zdál užitečný, ale další opakování si nezaslouží.

## Použijte jednoduché zadání a opřete se o jasná pravidla

Nepotřebujete žádné velkolepé zadání.

Přímo v chatu bych použil něco podobného:

```text
Převeď tento zdroj na jednoduché kartičky s přední a zadní stranou.

Pravidla:
- Jeden fakt, rozdíl nebo krok postupu na kartičku
- Přední strana musí být konkrétní a musí se na ni dát odpovědět
- Zadní strana musí být krátká a přímá
- Žádná vymyšlená fakta
- Vynech duplicity a vágní otázky
- Vynech kartičky, které závisejí na chybějícím kontextu z původního dokumentu
- Bez váhání vyřazuj kartičky, které nestojí za dlouhodobé opakování
```

Pokud je zdrojem opravená sada otázek, přidejte jednu větu:

```text
Zaměř se hlavně na chyby, nejasnosti a rozdíly, ve kterých se pravděpodobně spletu znovu.
```

To stačí.

Užitečná omezení jsou jednoduchá:

- jedna věc k zapamatování na kartičku
- krátké odpovědi
- žádná vymyšlená fakta
- žádné otázky vyžadující obsáhlé shrnutí
- žádná kartička, ke které musíte mít vedle sebe otevřený celý zdroj

Claude na jasné hranice obvykle reaguje dobře. Problém málokdy spočívá v chybějícím kouzelném zadání. Lidé toho zkrátka chtějí příliš mnoho najednou.

## Nejlepší kartičky z modelu Claude obvykle vznikají ze tří druhů materiálu

Modelu Claude nejvíc věřím, když už je zdroj téměř připravený k převodu na kartičky, ale ještě potřebuje upravit.

Nejlépe fungují:

- poznámky z přednášek, které je potřeba zkrátit
- četba, ze které je potřeba vytáhnout podstatné informace
- opravené otázky, které odhalují jednu konkrétní chybu

Na tom záleží, protože Claude nevymýšlí studijní systém od nuly. Pomáhá vám převést surový materiál na konkrétnější otázky pro vybavování z paměti.

Pokud pracujete hlavně s poznámkami, článek [Jak v roce 2026 převádět poznámky na kartičky (anglicky)](/blog/turn-notes-into-flashcards/) rozebírá úpravy podrobněji. Ze souborů vyberte malou relevantní část a před přijetím návrhů kartiček zkontrolujte text, rovnice a popisky.

## Vymažte kartičky, které pořád znějí jako Claude

Právě tady se kvalita skutečně posune.

Kartičky vytvořené pomocí modelu Claude často selhávají podobným způsobem:

- přední strana zní elegantně, ale nedá se na ni odpovědět
- zadní strana obsahuje tři fakta, protože tři fakta obsahoval i odstavec
- kartička obsahuje neurčité obraty jako „klíčové aspekty“ nebo „důležité faktory“
- formulace je tak srozumitelná, že ji při čtení obdivujete, ale při opakování vás rozčiluje

Takové bych vyřadil hned.

Přední strana kartičky nemá znít jako úvodní věta studijní příručky. Má znít jako otázka, na kterou buď odpovíte, nebo ne.

Kartičku si nechte jen tehdy, pokud:

- na ni dokážete odpovědět bez opětovného otevření zdroje
- zadní strana je dost krátká na rychlé vyhodnocení
- ověřuje jeden pojem, ne celou skupinu
- i za týden vám bude záležet na tom, abyste si její obsah pamatovali

Jinak ji smažte.

To je hlavní rozdíl mezi konverzací s modelem Claude, která působí produktivně, a balíčkem, který zůstává užitečný.

## Jedna slabá kartička z modelu Claude a verze, kterou bych si opravdu nechal

Řekněme, že Claude přečte pasáž o glykolýze a nabídne vám tohle:

- Přední strana: Jaké jsou hlavní vlastnosti a produkty glykolýzy?
  Zadní strana: Glykolýza je metabolická dráha, která probíhá v cytoplazmě, přeměňuje glukózu na pyruvát, vytváří ATP a NADH a nevyžaduje kyslík.

To není jedna kartička. To je odstavec se jmenovkou.

Lepší verzí bývá několik menších kartiček:

- Přední strana: Kde probíhá glykolýza?
  Zadní strana: V cytoplazmě.
- Přední strana: Jakou molekulu glykolýza rozkládá?
  Zadní strana: Glukózu.
- Přední strana: Vyžaduje glykolýza kyslík?
  Zadní strana: Ne.

Možná si necháte ještě jednu kartičku o produktech reakce, pokud je toto rozlišení ve vašem kurzu důležité.

Smyslem není zachovat uhlazenou odpověď modelu Claude. Smyslem je zachovat jednotlivé informace, které se v ní skrývají a které si chcete vybavovat z paměti.

## Nepleťte si paměť a kontext modelu Claude s intervalovým opakováním

Claude má dnes lepší nástroje pro práci s kontextem než dřív. Pomáhají projekty. Pomáhají nahrané soubory. Pomáhají pokyny projektu. To všechno je užitečné.

Pořád to ale není totéž co systém pro opakování.

Claude si dokáže udržet kontext kolem tématu. Dokáže si lépe pamatovat průběh vaší konverzace než starší chatovací nástroje. Nic z toho nenahrazuje tu obyčejnou část, na které později skutečně záleží: znovu vidět správnou kartičku ve správný čas.

Proto by **kartičky z projektů Claude** měly skončit ve skutečné aplikaci na kartičky, místo aby zůstaly v samotném projektu.

Claude dokáže udržet kontext.

FSRS řeší zapomínání.

To jsou různé úkoly.

Pokud vás zajímá podrobněji plánování opakování, přímo na to navazuje článek [FSRS vs. SM-2 v roce 2026 (anglicky)](/blog/fsrs-vs-sm-2/).

## Uložte schválené kartičky do Nibomo

Otevřete [Nibomo v katalogu Claude](https://claude.ai/directory/nibomo), připojte ho, přihlaste se ke svému účtu Nibomo a povolte přístup. Nibomo je v katalogu uvedeno jako komunitní konektor v kategorii Community.

Požádejte model Claude, aby přes konektor MCP služby Nibomo uložil pouze kartičky, které jste zkontrolovali a schválili. Nejdřív si prohlédněte cílový pracovní prostor a požadavek na zápis, schvalte ho a poté uložené kartičky zkontrolujte v Nibomo, než je začnete opakovat s FSRS. Možností zůstává i ruční kopírování.

[Nibomo](/cs/) se do tohoto postupu hodí, protože současný produkt pokrývá část, kterou Claude sám nedokončí:

- tvorbu a úpravy kartiček s přední a zadní stranou
- chat s AI, který pracuje s daty pracovního prostoru a přílohami
- balíčky a štítky pro uspořádání finálních kartiček
- opakování s FSRS, jakmile kartičky stojí za uchování
- hostovanou webovou aplikaci, pokud chcete začít rychle
- možnost vlastního hostování, pokud chcete později provozovat vlastní systém

Pokud chcete začít co nejrychleji, hostovanou aplikaci popisuje návod [Začínáme](/cs/docs/getting-started/). Jestli je pro vás důležitější provozovat vše sami, vhodným pokračováním je [průvodce vlastním hostováním](/cs/docs/self-hosting/).

## Postup, který bych skutečně opakoval

Dobrý postup pro **tvorbu kartiček pomocí modelu Claude** je dost krátký na to, abyste ho používali i poté, co opadne počáteční nadšení.

Tohoto postupu bych se držel:

1. Vytvořte jeden projekt Claude pro jeden předmět, zkoušku nebo téma.
2. Přidejte krátké pokyny projektu s pravidly pro přední a zadní stranu kartiček.
3. Nahrajte jednu malou dávku: přednášku, část četby nebo opravené cvičné otázky.
4. Požádejte model Claude o jednoduché návrhy kartiček s přední a zadní stranou.
5. Slabé kartičky okamžitě smažte nebo přepište.
6. Požádejte model Claude, aby přes konektor MCP služby Nibomo uložil pouze kartičky, které jste zkontrolovali a schválili. Nejdřív si prohlédněte cílový pracovní prostor a požadavek na zápis, schvalte ho a poté uložené kartičky zkontrolujte v Nibomo, než je začnete opakovat s FSRS. Možností zůstává i ruční kopírování.
7. Finální balíček opakujte s FSRS.

To je uvěřitelnější postup než předstírat, že právě Claude je místo, kde by měly zůstat vaše znalosti.

Pokud už váš balíček vytvořený AI působí zbytečně rozsáhle, přestaňte přijímat nové návrhy a opravte ty stávající podle článku [Jak v roce 2026 opravit kartičky vytvořené AI (anglicky)](/blog/how-to-fix-ai-flashcards/).

## Lepší pravidlo pro tvorbu kartiček pomocí modelu Claude

Nechtějte po modelu Claude, aby se učil za vás.

Požádejte ho, aby vás zbavil mechanické práce.

Tenhle postup pro **tvorbu kartiček pomocí modelu Claude** v roce 2026 opravdu obstojí:

- jeden projekt na téma
- jedna malá dávka najednou
- jeden fakt nebo rozdíl na kartičku
- důsledné vyřazování
- skutečné opakování potom

Claude vám pomůže rychleji přejít od nepřehledných zdrojů k návrhům kartiček.

Nibomo spolu s FSRS z těchto návrhů udělá něco, co si možná budete pamatovat i za měsíc.
