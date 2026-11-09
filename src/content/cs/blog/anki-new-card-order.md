---
title: "Pořadí nových karet v Anki: výběr, řazení a kontrola fronty"
description: "Na příkladu šesti karet uvidíte, jak Anki nové karty vybírá a řadí. Zkontrolujte limity podbalíčků, pozice ve frontě i balíček, ze kterého spouštíte studium."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "pořadí nových karet v Anki"
  - "pořadí výběru nových karet v Anki"
  - "řazení nových karet v Anki"
  - "Anki vzestupně podle pozice"
  - "karty v Anki v nesprávném pořadí"
---

Karta na pozici 10 se v Anki může poprvé zobrazit až po kartě na pozici 60. Když se učíte z nadřazeného balíčku a máte nastavený výběr **Podle balíčku** (**Deck**) a řazení **V pořadí výběru** (**Order gathered**), Anki může dokončit výběr z jednoho podbalíčku, než se dostane k podbalíčku s kartou na pozici 10. Seřazení podle data vytvoření v prohlížeči karet tuhle studijní frontu nezmění.

Anki postupuje ve dvou krocích. Při **výběru** určí, které nové karty se vejdou do dnešních limitů. Při **řazení** určí, v jakém pořadí je zobrazí. Nejdřív si ujasněte, jestli Anki vybírá jiné karty, než čekáte, nebo jestli očekávané karty ukazuje v jiném pořadí.

Postup platí pro běžné balíčky v desktopovém Anki. Příklad se šesti kartami je vlastní výpočet na papíře, bez zkoušení v aplikaci. Vychází z aktuální příručky a vydané verze [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), ověřených 6. října 2026.

![Muž drží čtvrtou vinylovou desku nad prázdnou přihrádkou stojanu vedle tří desek. Za ním jsou dvě bedny s alby, která nevybral.](/blog/anki-new-card-order.png)

## Zvolte pořadí, které chcete při studiu

U balíčku, ze kterého spouštíte studium, otevřete **Možnosti** (**Options**) a najděte část **Pořadí zobrazení** (**Display Order**). Když studium spustíte z nadřazeného balíčku, jeho nastavení pořadí zobrazení platí pro celé studium včetně karet z podbalíčků.

| Jak mají karty přicházet na řadu | Pořadí výběru nových karet (New Card Gather Order) | Řazení nových karet (New Card Sort Order) |
| --- | --- | --- |
| Od nejnižší pozice po nejvyšší napříč vybraným balíčkem a jeho podbalíčky | Vzestupně podle pozice (Ascending position) | V pořadí výběru |
| Podbalíčky abecedně, uvnitř každého podle pozice | Podle balíčku | V pořadí výběru |
| Stejné vybrané karty v promíchaném pořadí | Nastavení výběru podle potřeby | Náhodně (Random) |

Tyto kombinace vycházejí z anglické příručky Anki, která popisuje [výběr](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) a [řazení](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order). Volba **Vzestupně podle pozice** se řídí uloženými pozicemi nových karet. Ty se mohou od pořadí podle data vytvoření lišit. Záleží na pořadí vkládání karet i na případných ručních změnách pozic.

Před úpravou zkontrolujte, jakou předvolbu má balíček přiřazenou a které další balíčky ji používají. Nastavení pořadí zobrazení patří k předvolbě a sdílejí je všechny balíčky, které ji používají. Pokud chcete změnu jen pro jeden balíček, nejdřív mu nastavte vlastní předvolbu podle [anglického návodu k předvolbám pro jednotlivé balíčky](/blog/anki-deck-options-presets/). U denních limitů můžete použít zvláštní hodnotu pro **Tento balíček** (**This deck**) nebo **Pouze dnes** (**Today only**).

## Spočítejte, které čtyři karty se vejdou

Představte si běžný nadřazený balíček `OrderLab` se dvěma podbalíčky a pouze těmito šesti kartami. Každá pochází z jiné poznámky typu **Základní** (**Basic**) s jedinou kartou. Všech šest karet má proto stejné číslo typu a žádné dvě nepocházejí ze stejné poznámky.

| Karta | Balíček | Uložená pozice nové karty |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Všech šest karet je nových. Žádná není odložená, pozastavená ani ve filtrovaném balíčku. Na začátku nejsou ve frontě žádné další karty, žádná další zobrazení karet ve fázi učení ani karty k opakování. Dnes ještě neproběhlo žádné studium. `OrderLab` už nemá žádný nadřazený balíček a platné limity opakování nechávají prostor pro všech šest nových karet.

Pro studium vyberte **OrderLab**. Jeho platný limit nových karet je **4**, `01 First` má limit **3** a `02 Second` má limit **2**. Žádný z limitů nemá dočasně nastavenou jinou hodnotu. V obou variantách použijte řazení **V pořadí výběru**. Obě varianty spočítejte na papíře ze stejného výchozího stavu sbírky, bez odpovídání na karty mezi nimi.

Při výběru **Podle balíčku** postupuje Anki takto.

1. Podle abecedy přijde `01 First` na řadu před `02 Second`.
2. Anki vybere **A, B, C** v pořadí podle pozic. Z `01 First` tak vezme tři karty a v limitu nadřazeného balíčku zbude jedno místo.
3. Z `02 Second` vybere **D**, čímž dosáhne limitu čtyř karet pro nadřazený balíček.

Očekávané pořadí prvního zobrazení je **A → B → C → D**. Karty E a F se do výběru nedostanou.

Při výběru **Vzestupně podle pozice** přicházejí karty z obou podbalíčků v úvahu v pořadí **D → A → E → B → F → C**. První čtyři se vejdou do všech limitů. Dvě jsou z `02 Second`, dvě z `01 First` a dohromady zaplní všechna čtyři místa. Tím výběr končí.

Očekávané pořadí je **D → A → E → B**. Karty C a F zůstanou mimo výběr. Ve vydané verzi Anki se limity balíčku i jeho nadřazených balíčků uplatňují průběžně při zařazování jednotlivých karet. [Zdrojový kód výběru](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

Limit dvou karet pro `02 Second` říká, kolik karet z něj Anki může vzít nejvýš. Při výběru podle balíčku z něj vezme jen jednu, protože `01 First` už zaplnil tři ze čtyř míst. Při vzestupném výběru vyjdou díky konkrétním pozicím dvě karty z každého podbalíčku. V jiné sbírce se místa mohou rozdělit jinak.

## Srovnejte pořadí, když se vejde všech šest karet

Pro druhé srovnání na papíře nastavte limity tak, aby se vešlo všech šest karet. Nadřazený balíček bude mít limit **6**, `01 First` limit **3** a `02 Second` také **3**. Ponechte řazení **V pořadí výběru**.

| Nastavení výběru | Limity pro nadřazený balíček / `01 First` / `02 Second` | Očekávané pořadí prvního zobrazení |
| --- | --- | --- |
| Podle balíčku | 6 / 3 / 3 | A → B → C → D → E → F |
| Vzestupně podle pozice | 6 / 3 / 3 | D → A → E → B → F → C |

Obě nastavení vyberou všech šest karet. Teď se liší jen jejich pořadí. Kdybyste zvýšili na šest pouze limit nadřazeného balíčku a `02 Second` ponechali na dvou, do výběru by se vešlo jen pět karet. Karta F by pořád zůstala mimo. Vyšší limity slouží jen k tomuto výpočtu na papíře.

## Řazení už vynechanou kartu nepřidá

Vraťte se k původním limitům **4 / 3 / 2** a změňte pouze **Řazení nových karet** na **Náhodně**.

| Nastavení výběru | Karty, které může řazení promíchat | Karty, které řazení nemůže přidat |
| --- | --- | --- |
| Podle balíčku | A, B, C, D | E, F |
| Vzestupně podle pozice | D, A, E, B | C, F |

Anki promíchá pořadí zobrazení, ale v každé variantě zůstanou ve výběru stejné karty. Konkrétní náhodné pořadí z tabulky pozic nevyčtete. Ve vydané verzi Anki řazení mění pořadí karet, které už prošly výběrem. [Zdrojový kód řazení](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

S už vybranými kartami pracuje i volba **Podle typu karty, pak v pořadí výběru** (**Card type, then order gathered**). Všech šest karet z poznámek typu **Základní** má stejné číslo typu, takže tato volba v příkladu zachová pořadí výběru.

Pro samostatný příklad řazení si představte čtyři karty z poznámek s více šablonami. Anki je už vybralo v pořadí **W (typ 2), X (typ 1), Y (typ 2), Z (typ 1)**. Po seřazení podle typu dostanete **X → Z → W → Y**. Nejdřív přijdou karty typu 1 a uvnitř každého typu zůstane pořadí výběru. Příklad začíná až po výběru. Které karty ze stejné poznámky by se do výběru dostaly, záleží na nastavení odkládání.

Číslo typu karty označuje pozici její šablony v rámci typu poznámky. To, zda karta procvičuje rozpoznávání nebo aktivní vybavení, záleží na šabloně. Pokud čekáte, že řazení podle typu zobrazí nejdřív všechny otázky v původním směru, ověřte si to podle konkrétních otázek.

## Než změníte pozice, zkontrolujte je v prohlížeči

Otevřete **Prohlížeč** (**Browse**), přepněte do režimu **Karty** (**Cards**) a vyhledejte karty ve vybraném balíčku a jeho podbalíčcích. Pro tento příklad použijte následující dotaz.

```text
deck:OrderLab is:new
```

V nabídce záhlaví tabulky zapněte sloupce **Otázka** (**Question**), **Karta** (**Card**), **Balíček** (**Deck**), **Termín** (**Due**) a **Vytvořeno** (**Created**). U nové karty ukazuje **Termín** její pozici ve frontě a **Vytvořeno** datum vytvoření její poznámky. Ve sloupci **Pole pro řazení** (**Sort Field**) najdete hodnotu pole poznámky určeného k řazení. Když tabulku seřadíte podle sloupce, změní se jen její zobrazení. Uložené pozice i nastavení výběru pro studium zůstanou stejné. [Sloupce prohlížeče v anglické příručce Anki](https://docs.ankiweb.net/manual/browsing#columns)

Dotaz `is:new` může najít i pozastavené nebo odložené nové karty. Jejich hodnoty ve sloupci **Termín** se zobrazují v závorkách. Užší dotaz vynechá tyto karty i karty, které jsou právě ve filtrovaných balíčcích.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

V anglické příručce Anki najdete [vyhledávání podle stavu karty](https://docs.ankiweb.net/manual/searching#card-state) i [vyhledávání podle balíčku](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Pokud název balíčku obsahuje mezery, dejte ho do uvozovek, například `deck:"My Deck"`. Dnešní fronta může být i tak kratší než seznam výsledků, protože ji mohou zúžit limity a automatické odkládání karet ze stejné poznámky. Kdy jsou karty nedostupné, vysvětluje [anglický návod k odkládání a pozastavování karet](/blog/anki-bury-vs-suspend/).

Pokud pozice už odpovídají požadovanému pořadí, nechte je být. Když je potřebujete změnit, poznamenejte si původní hodnoty, vyberte několik konkrétních nových karet a použijte **Karty → Změnit pozici** (**Cards → Reposition**). Před potvrzením zkontrolujte dialog. Volba **Posunout pozice stávajících karet** (**Shift position of existing cards**) může změnit i pozice karet s vyššími čísly mimo výběr. Bez posunu mohou nově přiřazené pozice připadnout na čísla, která už mají jiné karty. U karet se stejnou pozicí pak z čísla samotného pořadí zobrazení nepoznáte. [Změna pozice v anglické příručce Anki](https://docs.ankiweb.net/manual/browsing#cards)

Při změně výběru nebo řazení můžete historii učení i opakování ponechat. Při hledání příčiny se držte pozic nových karet a pořadí zobrazení.

## Zkontrolujte, odkud studium spouštíte a kolik karet se dnes ještě vejde

Pokud v původním příkladu spustíte studium přímo z `OrderLab::02 Second`, připadají v úvahu jen D, E a F. S limitem dvou karet, výběrem **Vzestupně podle pozice** a řazením **V pořadí výběru** očekávejte **D → E**. Z limitu čtyř karet nadřazeného balíčku se ještě nic nevyčerpalo, takže i pokud platí, obě karty se do něj vejdou. Když místo toho spustíte studium z nadřazeného balíčku s výběrem **Podle balíčku** a limity **4 / 3 / 2**, dostanete **A → B → C → D**.

Při studiu spuštěném z `OrderLab` platí nastavení pořadí zobrazení balíčku `OrderLab`. Změna nastavení samotného `02 Second` se projeví při studiu spuštěném přímo z něj. Balíček, který vyberete ke studiu, určuje pořadí zobrazení a celkový strop. Při výběru zároveň platí příslušné limity podbalíčků. Volba **Počítat limity od nejvyššího balíčku** (**Limits start from top**) určuje, jestli se limity nadřazených balíčků uplatní i při přímém studiu podbalíčku. Anglická příručka Anki popisuje [pravidla pro podbalíčky](https://docs.ankiweb.net/manual/deck-options#subdecks) i [nastavení limitů nadřazených balíčků](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Zkontrolujte také limity opakování. Ve výchozím nastavení limit opakování omezuje i počet nových karet. Volba **Nové karty ignorují limit opakování** (**New cards ignore review limit**) toto chování mění. Tato volba i **Počítat limity od nejvyššího balíčku** platí pro celou sbírku. Než podle limitu nových karet odhadnete, kolik se jich dnes ještě zobrazí, poznamenejte si stav obou voleb. [Zdrojový kód rozhraní denních limitů ve vydané verzi](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

V **Náhledu** (**Preview**) v prohlížeči si můžete otázky prohlédnout bez odpovídání. Při příštím běžném studiu si zaznamenejte údaje z tabulky.

| Co si zapsat | Co tím zjistíte |
| --- | --- |
| Balíček, ze kterého jste spustili studium, jeho předvolbu a nastavení výběru a řazení | Které nastavení pořadí zobrazení při studiu platí? |
| Očekávané karty a jejich uložené pozice | Je problém ve výběru, nebo v pořadí? |
| Limity nových karet a opakování, případné zvláštní limity pro balíček nebo dnešek a kolik karet jste už dnes prošli | Kolik místa v limitech ještě zbývá? |
| Limity nadřazených balíčků a stav obou voleb pro celou sbírku | Které další limity platí? |
| Odložené a pozastavené karty, karty ve filtrovaných balíčcích a karty ze stejné poznámky | Které karty mohou z výběru vypadnout? |
| Skutečné pořadí prvních zobrazení nových karet, odděleně od jejich dalších zobrazení ve fázi učení | Odpovídá pořadí nových karet očekávání? |

Jakmile odpovíte na novou kartu, její další zobrazení ve fázi učení mohou přerušit sled nových karet. Volba **Pořadí nových karet a opakování** (**New/Review Order**) určuje, zda se nové karty zobrazí před kartami k opakování, po nich, nebo mezi nimi. Výběr a řazení nových karet se dál řídí vlastními nastaveními. Ve vydané verzi Anki se tyto skupiny karet spojují až po seřazení nových karet. [Zdrojový kód sestavování fronty](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Kontrolu můžete ukončit, jakmile očekávaný výběr i pořadí prvních zobrazení odpovídají tomu, co při studiu vidíte. Pokud se pořád rozcházejí, pro další hledání příčiny si zaznamenejte pozice, nastavení, vybraný balíček, verzi Anki, pozorované pořadí a doplňky, které s tím mohou souviset. Pokud si chcete některé téma procvičit navíc, použijte [samostatný anglický návod k procvičování ve filtrovaném balíčku](/blog/anki-filtered-decks-without-rescheduling/).
