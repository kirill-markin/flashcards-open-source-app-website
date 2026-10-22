---
title: "Jak používat Claude při studiu v roce 2026: praktický postup"
description: "Studujte s Claude z vlastních poznámek, odpovídejte po jedné otázce, ověřujte opravy a převádějte slabá místa na kartičky v mezích pravidel svého kurzu pro AI."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "jak používat Claude při studiu"
  - "Claude při studiu"
  - "studijní postup s Claude"
  - "Claude jako doučovatel"
  - "kartičky s Claude"
  - "režim učení Claude Learning mode"
---

Pokud hledáte, **jak používat Claude při studiu**, začněte malou částí svých poznámek z kurzu. Zkontrolujte, co tyto poznámky dokládají, a odpovídejte vždy na jednu otázku, než uvidíte nápovědu. Ověřte opravy a pak si uložte slabá místa, která potřebujete znovu procvičit. Pro tento poslední krok doporučuji [plugin Nibomo pro Claude](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory): nabízí postupy pro tvorbu kartiček, opakování kartiček podle plánu a úpravu těch, které vás matou.

Užitečný cyklus je **kontrola zdroje → odpověď zpaměti → ověření → uložení → opakování v naplánovaný čas**. Běžná zadání pro doučování fungují v obyčejném chatu s Claude; plugin toto studium propojí s uloženými kartičkami a plánem opakování.

> **Pro transparentnost:** Jsem Kirill Markin a vyvíjím [Nibomo](/cs/features/). Při rešerši a úpravách tohoto článku pomáhala AI.

**Fakta ověřena:** 22. října 2026.

![Studijní pracovní plocha propojující poznámky ze zdroje s jednou otázkou a dvěma ověřenými kartičkami ke slabým místům; nejednoznačná poznámka je odložena stranou](/blog/how-to-use-claude-for-studying-v2.png)

## Stručný postup studia s Claude

Použijte tento cyklus pro jednu část přednášky, četbu nebo sadu cvičení:

1. Zjistěte, co váš kurz dovoluje dělat s AI.
2. Dejte Claude malý, jasně pojmenovaný soubor zdrojových materiálů.
3. Než začne vysvětlovat, požádejte ho, aby označil chybějící, rozporné nebo nečitelné informace.
4. Odpovídejte zpaměti vždy na jednu otázku.
5. Zaznamenejte opravu, umístění ve zdroji a případnou nejistotu.
6. Důležité odpovědi si sami ověřte.
7. Uložte si několik ověřených slabých míst s dlouhodobějším významem jako kartičky v Nibomo.
8. Uložené kartičky opakujte v naplánovaný čas v Claude nebo v aplikaci Nibomo.

Na pořadí záleží. Zkoušení z nejednoznačného zdroje jen ztěžuje odhalení jeho nejasností.

## Nastavte si Nibomo v Claude

Otevřete [plugin Nibomo](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory), nebo přejděte na **Customize → Plugins**, vyhledejte Nibomo a klikněte na **Add**. Pokud už je nainstalovaný, ověřte, že je zapnutý.

Připojte konektor Nibomo, který je součástí pluginu. Podle pokynů se přihlaste ke svému účtu Nibomo nebo si ho vytvořte a povolte Claude přístup. Na vyzvání vyberte zamýšlený pracovní prostor. Při tomto postupu nemusíte kopírovat API token ani zadávat adresu serveru.

Plugin poskytuje postupy pro tvorbu, opakování a úpravu kartiček. Jeho konektor MCP zajišťuje spojení, přes které může Claude číst a aktualizovat váš účet Nibomo. [Konektor najdete také v katalogu Claude](https://claude.ai/directory/nibomo). Podrobnosti vysvětluje náš [návod k propojení s Claude](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (v angličtině) a [dokumentace konektoru MCP](/cs/docs/mcp-connector/).

Anthropic aktuálně nabízí [pluginy v tarifech Pro, Max, Team a Enterprise](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), a to v Claude na webu, na kartě Chat v Claude Desktop a v Cowork. Pokud váš účet pluginy nemá, můžete dál používat níže uvedená zadání pro doučování a vybrané kartičky ručně kopírovat do své aplikace na opakování.

## Před prvním nahráním souboru si ověřte pravidla kurzu

Začněte sylabem, pokyny k úkolu a pravidly vaší školy pro používání AI. Pravidla se mohou lišit podle kurzu i úkolu, proto si napište, co je dovoleno právě u tohoto zadání: vysvětlování, cvičné otázky, zpětná vazba, návrh osnovy, pomoc s citacemi, nebo nic z toho.

Anthropic v [pokynech pro studenty používající Claude for Education](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) uvádí jako studijní využití vysvětlování, cvičné otázky, studijní přehledy a kartičky. Stejné pokyny říkají, že je třeba dodržovat školní pravidla akademické poctivosti a nepoužívat Claude k práci, kterou máte zvládnout samostatně.

Z toho plynou praktické hranice:

- Používejte Claude k procvičování pojmů, pokud je doučování a procvičování povoleno.
- Nežádejte ho o řešení právě probíhajícího hodnoceného úkolu, který musíte vypracovat sami.
- Nenahrávejte důvěrné, osobní, autorsky chráněné ani jinak omezené studijní materiály, pokud nemáte povolení sdílet je s touto službou.
- Pokud jsou pravidla vágní, zeptejte se vyučujícího ještě před začátkem hodnocené práce.

Vlastní práci odvádějte sami. Zpětná vazba po vašem pokusu může být povolenou studijní pomocí; odevzdání práce vytvořené pomocí Claude jako vlastní může porušovat pravidla kurzu.

## Dejte správné soubory na správné místo

Pro krátké studium stačí jednorázový chat. Pro průběžnou práci v kurzu vytvořte jeden projekt v Claude a přidejte do něj pouze příslušné materiály.

[Projekty v Claude](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) jsou dostupné všem uživatelům; účty Free jsou v současnosti omezeny na pět projektů. Přesné soubory z kurzu a pokyny ke studiu přidejte do znalostní báze projektu, aby byly dostupné ve všech jeho chatech.

Pokud je zapnutá paměť, může projekt mezi rozhovory přenášet i zapamatovaný kontext. Berte tuto paměť jako kontext ke studiu, nikoli jako autoritativní přepis nebo náhradu zdrojových souborů. Doklady a opravy, které budete potřebovat znovu, uchovávejte ve znalostní bázi projektu a žádejte Claude o citace původního materiálu.

[Dokumentace Claude k nahrávání souborů](https://support.claude.com/en/articles/8241126-upload-files-to-claude) aktuálně uvádí PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON a XLSX spolu s obrázky JPEG, PNG, GIF a WebP. Nahrávání XLSX vyžaduje zapnuté spouštění kódu a vytváření souborů. Soubor můžete připojit k jednomu chatu nebo jej ponechat v části Files projektu pro další použití.

Použijte co nejmenší smysluplný soubor materiálů: jednu přednášku, část kapitoly nebo otázky, ve kterých jste právě chybovali. Rozsah v zadání výslovně určete, například „snímky 8–17“ nebo „oddíl s názvem Genová vazba“. V menším souboru materiálů snáze najdete doklady a odhalíte nechtěné míchání informací.

Anthropic představil [**Learning mode** v projektech Claude for Education](https://www.anthropic.com/news/introducing-claude-for-education) jako vedené učení sokratovskou metodou, při kterém mají studenti přemýšlet namísto okamžitého získání odpovědi. Můžete k němu mít přístup, pokud vaše univerzita poskytuje Claude for Education, ale nepředpokládejte, že je dostupný na každém osobním účtu Claude. Níže uvedená zadání vytvářejí podobné učení pomocí otázek v běžném chatu.

## Nechte Claude odhalit nejasnosti, než začne vysvětlovat

Na snímku z přednášky může stát „chromozomy se oddělují“, aniž by bylo uvedeno, které. Pokud Claude mezeru potichu doplní z obecných znalostí, můžete si procvičovat sebejistou odpověď, kterou váš zdroj vůbec nedokládá.

Připojte materiál, vymezte přesný rozsah a nejprve požádejte o kontrolu zdrojů:

```text
Pro toto studium používej pouze soubory a oddíly, které uvedu. Nedoplňuj mezery
z obecných znalostí, pokud tě o to výslovně nepožádám.

Než mě začneš doučovat, vytvoř přehled zdrojů obsahující:
- pojmy, které materiál jasně vysvětluje;
- termíny, schémata nebo pasáže, které jsou nejednoznačné či neúplné;
- text, vzorce, popisky nebo stránky, které nedokážeš spolehlivě přečíst;
- rozpory mezi dodanými zdroji;
- předchozí znalosti, které materiál předpokládá, ale nevysvětluje.

U každé položky uveď název souboru a stránku, snímek nebo nadpis. Vše bez přímé
opory ve zdroji označ jako NEDOLOŽENO. Zatím mě nezačínej zkoušet.
```

Porovnejte přehled se soubory. Pokud Claude tvrdí, že definice je na snímku 12, otevřete snímek 12. Je-li popisek grafu nečitelný, vložte příslušný text nebo nahrajte zřetelnější obrázek. Pokud si dva zdroje z kurzu odporují, ponechte rozpor viditelný a zeptejte se vyučujícího nebo použijte zdroj, který kurz označuje za rozhodující.

O vysvětlení z jiných zdrojů můžete požádat později. Držte ho odděleně:

```text
Zdroj z kurzu tento předpokládaný základ nevysvětluje. Vysvětli ho z obecných
znalostí v oddílu označeném MIMO MATERIÁLY KURZU. Nepodávej toto vysvětlení tak,
jako by pocházelo z mých souborů.
```

Toto označení pomáhá zabránit tomu, aby se obecné znalosti nenápadně proměnily v doklad ze studijních materiálů.

## Jedna otázka, pak počkat

Jakmile přehled zdrojů vypadá věrohodně, začněte procvičovat vybavování z paměti: formulujte odpověď dřív, než ji uvidíte, místo abyste jen měli pocit, že uhlazené vysvětlení znáte, až vám ho Claude ukáže.

```text
Doučuj mě pouze z doloženého materiálu v přehledu zdrojů.

Pokládej vždy jednu otázku a počkej na mou odpověď. Do otázky nevkládej nápovědu.
Až odpovím:
1. označ odpověď jako Správně, Částečně správně, Nesprávně nebo Nejasný zdroj;
2. dej stručnou zpětnou vazbu, aniž bys prozradil celou odpověď;
3. cituj příslušný soubor a stránku, snímek nebo nadpis;
4. pokud je má odpověď částečně správná nebo nesprávná, dej mi nápovědu a nech
   mě to zkusit znovu, než ukážeš celou odpověď;
5. do záznamu slabých míst přidej pouze skutečný nedostatek.

Pokud je zdroj nejasný, označ otázku k ověření místo toho, abys mě vyzýval
k dalšímu pokusu.

Střídej přímé vybavování, rozlišování podobných pojmů a krátké úlohy na použití
znalostí. Zatím nevytvářej kartičky. Po 10 otázkách skonči a ukaž záznam.
```

Jedna otázka po druhé odstraňuje nápovědy z pozdějších položek a usnadňuje vyhodnocení každého pokusu. U seznamu deseti otázek snadno přeskočíte ty nepříjemné nebo odpovíte jen na části, které znáte.

Požádejte Claude také o střídání typů otázek. Definice odhalí chybějící termíny. Porovnání odhalí pojmy, které si pletete. Krátké úlohy ukážou, zda umíte myšlenku použít, nebo jen zopakovat její znění. Vícekrokový výpočet vypracujte na papíře a ukažte postup; samotné výsledné číslo dává Claude jen málo podkladů k rozpoznání problému.

## Veďte si záznam dokladů a nejistot

Záznam slabých míst má umožnit zpětnou kontrolu, ne jen sčítat body. Použijte malou tabulku:

| Otázka | Vaše odpověď | Hodnocení | Oprava | Doklad | Nejistota | Další krok |
| --- | --- | --- | --- | --- | --- | --- |
| Co se odděluje v anafázi I? | Sesterské chromatidy | Nesprávně | Oddělují se homologní chromozomy; sesterské chromatidy zůstávají spojené | Přednáška 4, snímek 18 | Žádná | Zkusit znovu, pak zvážit jednu kartičku |

Požádejte Claude, aby napsal „Nejasný zdroj“, pokud z podkladů nelze určit správnou odpověď. Obsah takového řádku se zatím neučte nazpaměť. Nejprve nejasnost vyřešte.

Sloupec nejistoty zachytí i méně zjevné problémy: schéma, které Claude nedokázal přečíst, termín, který vyučující používá jinak než učebnice, nebo závěr závislý na nevysloveném předpokladu. „Pravděpodobně správně“ a „doloženo snímkem 18“ nejsou totéž.

## Příklad: vysvětlení při doučování a jedna užitečná kartička

Předpokládejme, že dodané poznámky z kurzu říkají:

> Během anafáze I se homologní chromozomy pohybují k opačným pólům. Sesterské chromatidy zůstávají spojené v centromerách.

Claude se zeptá: „Co se odděluje během anafáze I?“ Odpovíte: „Sesterské chromatidy.“

Užitečná zpětná vazba při doučování je stručná a konkrétní:

```text
Nesprávně. Sesterské chromatidy zůstávají během anafáze I spojené. Podívej se
znovu na ty dvě věty: co se pohybuje k opačným pólům?
```

Pokud dodané materiály pokrývají i anafázi II, může Claude po dalším pokusu obě fáze porovnat. Toto vysvětlení patří do doučovacího rozhovoru. Slabé místo, ke kterému má smysl se vracet, je užší:

```text
Přední strana: Co se odděluje během anafáze I meiózy?
Zadní strana: Homologní chromozomy; sesterské chromatidy zůstávají spojené.
Doklad: Přednáška 4, snímek 18
```

Z jedné chyby vznikla jedna konkrétní kartička s odpovědí, kterou lze jednoznačně vyhodnotit. Nápověda, další pokus, vysvětlení i povzbuzení splnily svůj účel v danou chvíli; nemusí vás všechny provázet při budoucím opakování.

## Opravu si ověřte, než jí uvěříte

Claude může podat odpověď jako jistou, a přitom špatně přečíst soubor, přimíchat znalosti odjinud nebo přijmout vágní odpověď. Způsob ověření má odpovídat tvrzení:

1. **Fakta specifická pro kurz:** otevřete citovanou stránku nebo snímek a sami porovnejte znění, podmínky a výjimky.
2. **Řešené úlohy:** nezávisle zopakujte postup, zkontrolujte jednotky a znaménka a pak ho porovnejte s oficiálním řešením nebo pokyny vyučujícího, pokud je máte.
3. **Aktuální fakta:** pokud váš model a účet podporují vyhledávání na webu, požádejte Claude, aby vyhledal a citoval primární zdroje. Odkazy otevřete; citace umožňují kontrolu, ale neprovádějí ji za vás.
4. **Závažné nebo sporné body:** použijte předepsanou učebnici, obraťte se na vyučující nebo na jinou autoritu, kterou váš kurz uznává.

[Průvodce vyhledáváním na webu od Anthropic](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) uvádí, že odpovědi využívající vyhledávání obsahují citace, a doporučuje důležité informace ověřovat u autoritativních zdrojů. Dostupnost vyhledávání se může lišit; pokud ho nemáte, použijte důvěryhodný zdroj přímo a nenechte Claude hádat.

Užitečné zadání pro ověření je záměrně přísné:

```text
Zkontroluj záznam slabých míst. U každé opravy uveď přesné místo ve zdroji a krátký
úryvek, který ji dokládá. Pokud zdroj odpověď přímo nepodporuje, změň hodnocení
na NEDOLOŽENO. Vypiš všechny odpovědi závislé na znalostech odjinud, úsudku nebo
nečitelném obsahu. Tyto mezery nedoplňuj hádáním.
```

Pak citovaný materiál sami prohlédněte. Claude vám pomáhá doklady najít, nenahrazuje je.

## Rozhodněte, k čemu se vyplatí vrátit

Ne každá oprava má skončit na kartičce. Některé mezery vyžadují řešený příklad, schéma, konzultaci s vyučujícím nebo další cvičnou úlohu.

Návrh kartičky si ponechte, pokud:

- vychází z odpovědi, ve které jste chybovali, kterou jste si vybavovali pomalu nebo v níž jste si spletli podobné pojmy;
- má význam i mimo aktuální otázku;
- lze jej ověřit jednou jasnou otázkou a jednou krátkou odpovědí;
- je podložený zdrojem, který jste zkontrolovali;
- bude dávat smysl i bez přiloženého rozhovoru s Claude.

Vynechte ho, pokud:

- samotný zdroj zůstává nejednoznačný;
- odpovídali jste snadno a opakovaně správně;
- zadání vyžaduje celou esej nebo popis celého postupu;
- odpověď se mění podle neuvedených podmínek;
- procvičování dovednosti by pomohlo víc než zapamatování věty.

Požádejte Claude o návrhy, ne o hotový balíček:

```text
Projdi ověřený záznam slabých míst. Navrhni kartičky jen pro opakované nebo důležité
mezery, které lze jednoznačně ověřit.

Na každou kartičku dej jednu věc k zapamatování. Přední stranu formuluj konkrétně
a zadní stručně. Přidej umístění dokladu ve zdroji a případnou zbývající nejistotu.
Mezery, které potřebují jen procvičování, dej do samostatného seznamu s vhodným
cvičením. Zatím nic neukládej.
```

Zbytek vyřaďte. Studium s Claude může být užitečné, i když při něm nevznikne žádná kartička.

## Uložte ověřená slabá místa do Nibomo

Jakmile zkontrolujete doklady, požádejte plugin Nibomo, aby z vybraných mezer vytvořil a uložil kartičky. Uveďte pracovní prostor a nechte Claude před přidáváním zkontrolovat existující kartičky. Toto zadání žádá o náhled před uložením:

```text
Pomocí Nibomo vytvoř nejvýše 5 kartiček z výše uvedeného ověřeného záznamu
slabých míst. Použij zamýšlený pracovní prostor: [název pracovního prostoru].
Pokud je název nejednoznačný, před uložením si ověř, který prostor mám na mysli.

Zkontroluj existující kartičky, zda mezi nimi nejsou duplicity nebo kartičky
ověřující stejnou věc. Používej jen mezery podložené doklady, které jsem
zkontroloval. Na každé kartičce ověřuj jednu věc; přední stranu formuluj
konkrétně, zadní stručně a přidej umístění ve zdroji.

Nejprve mi ukaž navržené kartičky, jejich doklady a případné shody s existujícími
kartičkami. Před uložením počkej na mé schválení. Po uložení potvrď, co vzniklo
a kde.
```

Náhled je preference, kterou nastavujete tímto zadáním. Sami si můžete zvolit, jak důkladně chcete kartičky zkontrolovat, než požádáte Claude o jejich uložení nebo úpravu; není to požadavek pro každou akci pluginu.

Pamatujte na rozdíl z uvedeného příkladu: vysvětlení vám pomohlo pochopit meiózu, zatímco uložená kartička ověřuje konkrétní rozlišení, ve kterém jste chybovali. I z dlouhé odpovědi doučovatele obvykle stačí udělat krátkou kartičku.

## Opakujte v Claude kartičky, které jsou na řadě

Zkoušení z nově nahraných poznámek je doučování. Při plánovaném opakování v Nibomo používáte již uložené kartičky a zaznamenáváte výsledek, který ovlivní, kdy se znovu objeví. Požádejte o to výslovně:

```text
Pomocí Nibomo se mnou 10 minut opakuj kartičky, které jsou nyní na řadě
v pracovním prostoru [název pracovního prostoru]. Použij časové pásmo Europe/Paris.

Ukazuj vždy jednu otázku a počkej na můj pokus, než odhalíš uloženou odpověď.
Pak s ní porovnej můj původní pokus, dej stručnou zpětnou vazbu a zaznamenej
odpovídající hodnocení toho, jak dobře jsem si odpověď vybavil. Řekni mi, které
hodnocení jsi zaznamenal.
Hodnoť původní pokus, nikoli opravenou odpověď, kterou dám po odhalení řešení.
Skonči, až vyprší čas nebo nezbudou žádné kartičky k opakování, a shrň opakování,
jejichž uložení Nibomo potvrdilo.
```

Pracovní prostor a časové pásmo nahraďte svými údaji. Claude obvykle oznámí své hodnocení a automaticky ho zaznamená. Pokud chcete každé hodnocení zvolit sami, přidejte: „Používej ruční režim hodnocení: po odhalení odpovědi počkej, až zvolím Again, Hard, Good nebo Easy, a teprve pak hodnocení zaznamenej.“

Pokud u kartičky o anafázi I odpovíte „sesterské chromatidy“, ani rozpoznání správné odpovědi po jejím odhalení neznamená, že byl původní pokus správný. Pozdější otázka na anafázi II může ověřit, zda už obě fáze rozlišujete; neměla by zpětně zlepšit první hodnocení.

Opakovat můžete i v [aplikaci Nibomo](https://app.nibomo.com/). Potvrzená opakování aktualizují tentýž plán bez ohledu na to, zda proběhla v aplikaci, nebo v Claude. Můžete tak mezi nimi přecházet, aniž byste vedli dvě historie opakování. Požádejte Claude, aby jasně oznámil neúspěšné nebo nepotvrzené odeslání a nepovažoval ho za uložený pokrok.

## Vylepšete kartičky, které vás stále matou

Opakované chyby mohou odhalit vágní otázku, přetíženou odpověď nebo chybějící podmínku. Než usoudíte, že prostě potřebujete víc opakování, nechte Claude kartičku prohlédnout:

```text
Pomocí Nibomo zkontroluj kartičky, které mě při tomto opakování mátly. Hledej
vágní otázky, více věcí k zapamatování na jedné kartičce, chybějící podmínky,
nedoložené odpovědi a duplicity. Navrhované opravy porovnej s výše uvedenými
doklady z kurzu.

Ukaž současnou kartičku a navrženou změnu vedle sebe, se stručným důvodem
a umístěním ve zdroji. Označ vše, co z dokladů nelze rozhodnout. Před úpravou
počkej na mé schválení; kartičky nemaž ani neměň fakta, která zůstávají nevyjasněná.
```

Kartičku neměňte, pokud je otázka jasná a vy jste si jen nedokázali vybavit odpověď. U mezer, které vyžadují schéma nebo další řešenou úlohu, se vraťte k doučování nebo přímému procvičování.

Pokud dáváte přednost ručnímu kopírování, požádejte Claude o schválené kartičky jako prosté bloky s přední a zadní stranou a přidejte je do své obvyklé aplikace na kartičky. Kontrola zdrojů i doučování, při kterém nejprve odpovídáte sami, platí dál.

## Kde Claude stále potřebuje dohled

Tato metoda omezuje chyby, kterým lze předejít; nedělá z Claude autoritu.

- Odpověď opřená o zdroj může být chybná, pokud je chybný zdroj.
- Při získávání obsahu ze souboru se může ztratit kontext, zejména u schémat, tabulek a naskenovaných stránek.
- Claude může volnou odpověď hodnotit příliš shovívavě nebo příliš doslovně.
- Dlouhý doučovací chat se může vzdálit od původně vymezeného rozsahu.
- Snadné nápovědy mohou vést k rozpoznání odpovědi, aniž byste si ji dokázali dlouhodobě vybavit.

Když se rozhovor odchýlí, začněte znovu od určeného zdroje. Když se vysvětlení změní, nechte si znovu ukázat, o které místo ve zdroji se opírá. U dovedností, jako je dokazování, psaní esejí, výslovnost, laboratorní práce nebo programování, kombinujte otázky na vybavování s přímým procvičováním a lidskou zpětnou vazbou.

## Závěrečný kontrolní seznam pro studium s Claude

Než studium ukončíte, zkontrolujte, že:

- použití AI odpovídá pravidlům tohoto kurzu a úkolu;
- Claude označil vše nejednoznačné, nečitelné nebo nedoložené;
- odpovídali jste vždy na jednu otázku, než jste viděli nápovědu;
- každá oprava odkazuje na doklad, který jste sami otevřeli;
- znalosti odjinud jsou označené odděleně od materiálů kurzu;
- z nevyřešené nejistoty nevznikla kartička;
- vzniklo jen několik uložených kartiček k ověřeným slabým místům s dlouhodobějším významem;
- kartičky se uložily do zamýšleného pracovního prostoru bez zbytečných duplicit;
- pro plánované opakování jste zvolili automatické nebo ruční hodnocení;
- hodnocení odpovídají vašemu původnímu pokusu a uložení výsledků opakování bylo potvrzeno;
- víte, kam se vrátit k dalšímu naplánovanému opakování.

**Claude jako doučovatel** je užitečný, když dělá víc než jen vysvětluje. Ukazuje, kde zdroj přestává poskytovat oporu, čeká, než si odpověď vybavíte, a zanechává stručný záznam toho, co vám skutečně nešlo. Právě díky tomuto záznamu se vyplatí studijní postup s Claude opakovat; na délce chatu nezáleží.
