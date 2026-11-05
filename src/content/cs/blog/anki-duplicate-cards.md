---
title: "Jak najít duplicitní kartičky v Anki a vybrat, které ponechat"
description: "Zjistěte, proč se v Anki objevují stejné kartičky, porovnejte podobné poznámky a vyberte, kterou kopii ponechat. Na krátkém cvičení si ověříte, jak zkontrolovat historii opakování."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "duplicitní kartičky v Anki"
  - "jak najít duplicity v Anki"
  - "smazat duplicitní poznámky v Anki"
  - "duplicitní poznámky v Anki"
  - "historie opakování v Anki"
---

Otázku už znáte z dřívějšího opakování, ale Anki vám ji ukazuje jako novou. Možná se při importu přidala další kopie. Anebo Anki vytvořilo druhou otázku ze stejné poznámky. Na tom rozdílu záleží. Když v prohlížeči smažete jeden řádek, můžete přijít o všechny kartičky z dané poznámky, včetně té, kterou jste si chtěli nechat.

Než začnete **duplicitní kartičky v Anki** mazat, zjistěte, proč se zobrazují víckrát. Jestli pocházejí ze samostatných poznámek, vyhledejte možné duplicity přes **Notes → Find Duplicates**. Porovnejte obsah poznámek i historii jednotlivých kartiček a u každé skupiny vyberte, kterou kopii ponecháte. Shoda v jednom poli vám ukáže, které poznámky stojí za porovnání.

Postup platí pro Anki na počítači a vychází z dokumentace a zveřejněného zdrojového kódu, ověřených 4. října 2026. Cvičení níže pracuje s fiktivními daty a uvádí očekávané výsledky. Názvy ovládacích prvků a vyhledávací příklady vycházejí z anglického rozhraní Anki.

![Člen šachového klubu na dřevěné šachovnici porovnává jednu světlou věž navíc se dvěma opotřebovanými věžemi](/blog/anki-duplicate-cards.png)

## Nejdřív zjistěte, co se opakuje

Poznámka obsahuje pole, například **Front** (přední strana) a **Back** (zadní strana). Anki z ní podle šablon vytváří kartičky. Z jedné poznámky se slovíčkem tak může vzniknout otázka na jeho význam i otázka, při níž si máte slovíčko sami vybavit. Každá kartička má vlastní plán opakování. Kartičkám z jedné poznámky se v Anki anglicky říká *siblings*. Podrobnosti najdete v [dokumentaci Anki k poznámkám a polím](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

V prohlížeči (**Browse**) přepněte do režimu **Cards** a u každého podezřelého řádku otevřete **Cards → Info**. Porovnejte identifikátory poznámek (**Note ID**). Stejné ID znamená, že kartičky patří k jedné poznámce. Různá ID označují samostatné poznámky. V dotazu `nid:123` nahraďte `123` skutečným ID a uvidíte kartičky dané poznámky bez omezení na jeden balíček. Viz [vyhledávání podle identifikátorů v Anki](https://docs.ankiweb.net/searching.html#object-ids).

| Co vidíte | Pravděpodobné vysvětlení | Další krok |
| --- | --- | --- |
| Stejná poznámka, otázky v opačných směrech | Dvě záměrně vytvořené kartičky | Zvažte, jestli vám obě otázky pomáhají |
| Stejná poznámka, otázky vypadají stejně | Možná se opakuje šablona kartičky | Porovnejte šablony a náhledy |
| Různé poznámky, otázky vypadají stejně | Možná jde o duplicitní poznámky | Než jednu vyberete, porovnejte poznámky celé |

Pokud jsou kartičky záměrně v obou směrech, jejich použití popisuje [návod k obráceným kartičkám (anglicky)](/blog/anki-reverse-cards/). Chcete-li jednu dočasně vyřadit z opakování, použijte funkci **Suspend**. Kartička tím zůstane ve sbírce. Postup najdete v [návodu k pozastavení kartičky (anglicky)](/blog/anki-bury-vs-suspend/).

Pokud šablony vytvářejí stejné otázky, postupujte podle [návodu Anki k nadbytečným kopiím kartiček](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Smazání šablony ovlivní všechny poznámky daného typu, včetně těch v jiných balíčcích. Takovou změnu struktury sbírky řešte samostatně, mimo mazání jednotlivých duplicit.

## Vyhledejte duplicitní poznámky ve zvoleném rozsahu

Otevřete **Notes → Find Duplicates** a vyberte pole, které chcete porovnat, třeba **Front**. Ve výchozím nastavení Anki prohledává všechny typy poznámek, které dané pole obsahují. Rozsah nastavte pomocí **Optional filter** a klikněte na **Search**. Jednotlivé volby popisuje [příručka k vyhledávání duplicit v Anki](https://docs.ankiweb.net/browsing.html#finding-duplicates).

Pro balíček s názvem `Cleanup practice` zadejte následující dotaz.

```text
deck:"Cleanup practice"
```

Vyhledávání v balíčku zahrnuje i jeho podbalíčky. Pokud mohou být kopie v různých balíčcích, odstraňte filtr a prohledejte celou sbírku. I když v jednom balíčku žádnou kopii nenajdete, může být jinde. Viz [syntaxe vyhledávání v balíčcích Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes).

Kliknutím na skupinu výsledků zobrazíte její poznámky. Příkaz **Tag Duplicates** přidá štítek `duplicate` ke všem poznámkám se shodnou hodnotou, tedy i k té, kterou si chcete nechat. [Zdrojový kód vydané verze](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py) potvrzuje, že se štítek přidává ke každé poznámce ve skupině. **Nemažte všechny výsledky dotazu `tag:duplicate`.** Štítek použijte k vyhledání možných duplicit a pak jednotlivě vyberte poznámky ke smazání.

Vyhledávání porovnává hodnoty ve vybraném poli. Stejnou znalost mohou ověřovat i různě formulované otázky, které bude třeba dohledat ručně. A totožné znění otázky může mít různý význam podle jazyka nebo kontextu kurzu.

## Vyzkoušejte si tři rozhodnutí nanečisto

Představte si šest poznámek v balíčku `Cleanup practice` bez podbalíčků. A a B používají nezměněné šablony typu **Basic (and reversed card)**, takže z každé vzniknou dvě kartičky. Poznámky C až F používají typ **Basic** a každá má jednu kartičku. Všech osm kartiček je ve stejném balíčku. Písmena slouží jen v tomto příkladu. Skutečná ID poznámek a kartiček jsou v Anki čísla.

| Poznámky | Front → Back | Modelový stav opakování | Rozhodnutí |
| --- | --- | --- | --- |
| A a B | `le vélo` → `bicycle` | A: 12 opakování ve směru od slovíčka k překladu a 3 v opačném směru. B: obě kartičky jsou nové. | Ponechte A. Ke smazání prověřte nejdřív B. |
| C a D | `Chemical symbol for silver?` → `Ag` | C: 20 opakování. D: 6 opakování. | Porovnejte obě historie a vyberte, se kterou kartičkou budete pokračovat. |
| E a F | E: `bank` → `financial institution`, F: `bank` → `side of a river` | Dva různé významy slova | Ponechte obě poznámky a doplňte do otázek kontext. |

Vyhledávání podle pole **Front** může najít všechny tři dvojice. Jen u první se dá rozhodnout snadno. Než B označíte za nadbytečnou, porovnejte **všechna pole**, média, štítky, typ poznámky i to, jak se kartičky zobrazují v obou směrech. Možná B obsahuje nahrávku výslovnosti, která v A chybí, nebo z ní vzniká otázka, kterou A nemá.

Pokud užitečný obsah slouží k procvičení stejné znalosti, přeneste ho do poznámky, kterou ponecháte, a zkontrolujte náhled. Zachovejte i užitečné štítky z původní poznámky. Pokud měníte samotnou znalost, kterou chcete procvičovat, vytvořte pro ni novou otázku s vlastní historií.

U C a D berte vyšší počet opakování jako vodítko. U obou kartiček projděte data a hodnocení jednotlivých opakování, aktuální interval a termín dalšího opakování. Kartičku s více opakováními jste se možná jen častěji museli učit znovu. Ověřte, že vám otázka i odpověď vyhovují, a vyberte kartičku, na jejíž historii chcete navázat. Pokud si odpovědi odporují, ověřte je nejdřív v materiálu, ze kterého se učíte. Samotný počet opakování o správnosti odpovědi nic neříká.

Když ponecháte C a smažete D, **historie obou kartiček se nesloučí**. U kartičky C budete pokračovat tam, kde jste skončili. Historii každé kartičky uvidíte zvlášť v [informacích o kartičce (Card Info)](https://docs.ankiweb.net/stats.html#card-info). Záznamy o opakování kartiček ze smazaných poznámek zůstanou ve statistikách celé sbírky. Ze statistik jednotlivých balíčků zmizí a do historie ponechané kartičky se nepřenesou. Podrobnosti uvádí [příručka Anki ke statistikám smazaných poznámek](https://docs.ankiweb.net/stats.html#more).

Pokud ještě nemáte jasno, smazání odložte. Poznamenejte si, co potřebujete ověřit, a podle potřeby mezitím pozastavte kartičky, které nechcete opakovat.

## Smažte jednu ověřenou kopii a zkontrolujte výsledek

Než začnete mazat ve skutečné sbírce, synchronizujte změny z ostatních zařízení. Poté synchronizujte Anki na počítači, aby se všechny změny promítly i tam. Postup popisuje [příručka k synchronizaci Anki](https://docs.ankiweb.net/syncing.html). Přes **File → Export** uložte **Anki Collection Package (`.colpkg`)** se zapnutou volbou **Include Media**. Export obsahuje všechny balíčky včetně plánu a historie opakování. Soubor si bezpečně uložte. Import přepíše aktuální sbírku v otevřeném profilu stavem ze zálohy. Podrobnosti najdete v [dokumentaci k exportu sbírky](https://docs.ankiweb.net/exporting.html#collection-colpkg).

Pokud si chcete mazání vyzkoušet, vytvořte přes **File → Switch Profile** samostatný profil a importujte zálohu do něj. Zkušební profil nepropojujte s AnkiWeb. [Každý profil má vlastní sbírku](https://docs.ankiweb.net/profiles.html) a při připojení obou profilů ke stejnému účtu může jedna sbírka přepsat druhou. Rozdíly mezi zálohami a chováním při importu popisuje [přehled formátů APKG a COLPKG (anglicky)](/blog/anki-apkg-vs-colpkg/).

Ve cvičení označte kartičku z poznámky A ve směru od slovíčka k překladu jako A1 a kartičku v opačném směru jako A2. B1 a B2 jsou odpovídající kartičky z poznámky B. V **Cards → Info** si u obou kartiček A poznamenejte skutečná ID (**Card ID**), termíny dalšího opakování, intervaly a několik záznamů, které v historii snadno dohledáte. Zapište si také ID poznámky B. Hned po smazání porovnejte stav s tím, co jste si zapsali. Mezitím kartičky z obou poznámek vynechte při opakování a jejich plán nechte beze změny.

Duplicitní poznámky v Anki mažte po jedné.

1. V prohlížeči nahraďte stávající dotaz vyhledáváním podle skutečného ID poznámky B pomocí `nid:`. V režimu **Cards** projděte všechny výsledky a zobrazte náhled obou směrů. Ve skutečné sbírce mohou být kartičky téže poznámky i v jiných balíčcích, proto do tohoto dotazu nepřidávejte filtr podle balíčku.
2. Přepněte do režimu **Notes**. Ověřte, že jediným výsledkem je poznámka B, kterou chcete smazat. Vyberte jen ji a použijte **Notes → Delete**. [Příkaz Delete v Anki](https://docs.ankiweb.net/browsing.html#notes) odstraní vybranou poznámku i všechny její kartičky, i když ho spustíte z jediného řádku v režimu **Cards**.
3. Znovu vyhledejte ID poznámky B a ověřte, že dotaz nic nenajde. Potom vyhledejte zapsaná ID kartiček A pomocí `cid:` a oddělte je čárkou. U obou kartiček porovnejte údaje v **Info** s tím, co jste si zapsali.
4. Vyhledejte `deck:"Cleanup practice"` a porovnejte počty řádků v režimech **Notes** a **Cards**. Zbývající poznámky zkontrolujte podle tabulky níže.

Pokud smažete pouze B, měli byste vidět tento výsledek.

| Co zkontrolovat | Před smazáním | Očekávaný stav po smazání |
| --- | --- | --- |
| Celý ukázkový balíček | 6 poznámek / 8 kartiček | 5 poznámek / 6 kartiček |
| Dvojice poznámek se slovíčkem `le vélo` | A1, A2, B1, B2 | Jen A1 a A2 |
| ID kartiček A, termíny opakování, intervaly a historie | Zapsané hodnoty | Stejné kartičky, stejný plán a stejné záznamy v historii |
| Vyhledání podle ID poznámky B | Dvě kartičky B | Žádný výsledek |
| Poznámky ke stříbru a k významům slova `bank` | C, D, E, F | Zůstávají stejné čtyři poznámky |

Smazáním jedné poznámky v tomto příkladu zmizí dvě kartičky. Po smazání A by počty vyšly stejně, jen byste přišli o už procvičené kartičky, které jste chtěli zachovat. Vedle počtů proto kontrolujte i ID a u ponechaných kartiček při úklidu neresetujte stav učení ani neměňte termíny opakování.

Graf za celou sbírku může dál zahrnovat opakování smazaných kartiček. Pokrok ověřte podle ID ponechané kartičky a údajů v jejím okně **Info**.

Jakmile stav první skupiny odpovídá vašemu záznamu, přejděte k další skupině a znovu vyberte, co ponechat. Pokud jste postup zkoušeli v kopii, nejdřív zopakujte ověřené kroky ve skutečném profilu. Zkontrolujte sbírku a synchronizujte Anki na počítači. Pak synchronizujte ostatní zařízení, než na nich budete pokračovat ve studiu. Pokud kopie vznikly při importu, před příštím importem se podívejte na [návod k aktualizaci poznámek z CSV (anglicky)](/blog/anki-csv-update-existing-notes/). Pokud jste poznámku zkopírovali kvůli tomu, že patří do více témat, můžete ji zařadit pomocí [štítků (anglicky)](/blog/anki-tags-vs-decks/) a dál vést jedinou historii učení.
