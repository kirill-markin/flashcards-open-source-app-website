---
title: "Jak importovat kartičky do Quizletu z Excelu, Tabulek Google nebo textu"
description: "Importujte do Quizletu seznam slov ve dvou sloupcích, zvolte tabulátory a nové řádky a před zveřejněním opravte rozdělené definice, nadbytečné kartičky i problémy s CSV."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "jak importovat kartičky do Quizletu"
  - "formát importu Quizlet"
  - "import do Quizletu z Excelu"
  - "Tabulky Google do Quizletu"
  - "import do Quizletu s tabulátory"
---

„Red, green, blue“ vypadá jako obyčejná odpověď na kartičce. Pokud ale čárkami oddělujete pojem od definice, stejné čárky způsobí, že řádek nebude jednoznačný. Kvůli pár interpunkčním znaménkům tak může připravený seznam slov vyžadovat další opravy.

Při importu kartiček do Quizletu z Excelu, Tabulek Google nebo textu začněte dvěma sloupci: jedním pro pojmy a druhým pro definice. Zkopírujte data, vložte je do importního formuláře na webu a zvolte tabulátory mezi poli a nové řádky mezi kartičkami. Nejprve zkuste čtyři řádky, abyste mohli zkontrolovat každou dvojici, než přenesete celý seznam.

![Hrnčíř řadí keramické šálky k odpovídajícím podšálkům do samostatných řad, než je přemístí na polici](/blog/how-to-import-flashcards-into-quizlet.png)

## Kde najdete importní formulář Quizletu

Quizlet na svém webu popisuje import s čárkami, tabulátory nebo pomlčkami mezi poli a se středníky nebo novými řádky mezi kartičkami. [Oficiální návod k importu](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) uvádí tento postup:

1. Přihlaste se a zvolte **Create → Flashcard set** (Vytvořit → Sada kartiček).
2. Zadejte název, vyberte **Import** (Importovat) a vložte text.
3. Nastavte oddělovače podle vstupních dat. Pro příklady v tomto článku použijte **Tab** (Tabulátor) a **New line** (Nový řádek).
4. Vyberte **Import** (Importovat) a potom zvolte jazyk pojmů a definic.
5. Zkontrolujte kartičky, než pomocí **Create** (Vytvořit) sadu uložíte a zveřejníte.

Návod byl ověřen 15. září 2026. Následující příklady vysvětlují přípravu a kontrolu textu; nepopisují test v přihlášeném účtu.

## Začněte malou oblastí buněk

V Excelu nebo Tabulkách Google umístěte každou dvojici pojmu a definice na samostatný řádek. Tady je zkouška se čtyřmi kartičkami:

| Pojem | Definice |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Zkopírujte pouze čtyři datové řádky ve dvou sloupcích. Pokud jsou záhlaví na řádku 1, vyberte **A2:B5**. Záhlaví do kopírované oblasti nezahrnujte.

Očekávaným výsledkem jsou čtyři kartičky se španělskými pojmy a anglickými definicemi. Poslední kartička má zachovat „colores primarios de la luz“ pohromadě na jedné straně a „red, green, blue“ na druhé. Čárky jsou součástí odpovědi.

Až bude tento příklad jasný, připravte vlastní tabulku. Pracujte s kopií, aby vám původní soubor zůstal pro porovnání. Odstraňte prázdné řádky a do výběru nezahrnujte poznámky ani další sloupce. Před kopírováním doplňte chybějící pojmy nebo definice.

Při řazení ponechte oba sloupce pohromadě. Seřazením samotných pojmů byste je oddělili od odpovědí a import by pak mohl mít správný počet kartiček, ale nesprávné dvojice.

## Prostý text potřebuje skutečné tabulátory

Stejné čtyři řádky vypadají jako text oddělený tabulátory takto. Pojem od definice na každém řádku odděluje jeden skutečný tabulátor:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tabulátor je konkrétní znak. Několik mezer může vypadat podobně, ale hranici vyznačenou tabulátorem nevytvoří. Ani napsáním znaků `\t` tabulátor nevložíte. Pokud se vám s tím v textovém editoru pracuje obtížně, vložte dvojice do dvou sloupců tabulky a zkopírujte příslušné buňky.

Každá kartička má zabírat jeden skutečný řádek textu. Dlouhá definice se může v úzkém okně vizuálně zalomit na další řádek; tím se do obsahu nevloží znak nového řádku. Zalomení řádku vložené dovnitř buňky tabulky ho ale přidá. Než použijete nové řádky jako oddělovače kartiček, tato vnitřní zalomení odstraňte.

Odstraňte také všechny tabulátory uvnitř pojmů nebo definic. V tomto formátu patří tabulátory pouze mezi obě pole.

## Pokud máte seznam v souboru CSV

Než připravíte import, otevřete CSV v tabulkovém procesoru. Následující záznam CSV má dvě pole, pokud jej načtete podle pravidel pro uvozovky v CSV:

```text
"colores primarios de la luz","red, green, blue"
```

Odpověď v uvozovkách obsahuje čárky. Textové pole, které rozděluje vstup podle čárek, nemusí umět číst CSV, takže v něm na ochranu odpovědi uvozovkami nespoléhejte.

V Excelu nebo Tabulkách Google ověřte, že záznam zabírá přesně dvě buňky. Potom buňky zkopírujte pro vstup oddělený tabulátory. Pokud se odpověď rozdělila do dalších sloupců, nejprve opravte nastavení importu CSV v tabulkovém procesoru. Zkopírováním chybně rozděleného řádku chybu přenesete dál.

Zkontrolujte i hodnoty, které by tabulkový procesor mohl vyhodnotit jinak. Pokud je `0012` kód, který se potřebujete naučit, převod na `12` kartičku změní. Před kopírováním oblasti porovnejte identifikátory, data, uvozovky a slova s diakritikou s původním souborem.

## Když kartičky neodpovídají řádkům

Pomocí zkušebního importu najděte první nesrovnalost. Měňte vždy jen jednu věc a potom výsledek porovnejte se stejnými čtyřmi zdrojovými řádky.

| Problém | Pravděpodobná chyba oddělování | Co změnit |
| --- | --- | --- |
| Odpověď se rozděluje u čárek | Jako oddělovač polí je vybraná čárka | Připravte dva sloupce a zvolte Tab (Tabulátor) |
| Pojem „well-being“ se rozděluje uvnitř slova | Jako oddělovač polí je vybraná pomlčka | Spojovník zachovejte a pole oddělte tabulátorem |
| Z jedné odpovědi vznikne několik kartiček | Zdroj obsahuje vnitřní zalomení řádků | Umístěte odpověď na jeden skutečný řádek textu |
| „Pojem“ a „Definice“ se objeví jako kartička | Zkopírovaný řádek záhlaví | Vyberte pouze datové řádky |
| Obě pole zůstanou na stejné straně | Místo tabulátoru jsou použité mezery | Zkopírujte oblast tabulky se dvěma sloupci |

Například odpověď, ve které jsou „first stage“ a „second stage“ na samostatných řádcích, můžete upravit na `first stage; second stage`. Obě části tak zůstanou na jednom řádku. Pokud uvnitř odpovědi používáte středník, ponechte mezi kartičkami vybranou možnost **New line** (Nový řádek).

Pokud si obě fáze zaslouží samostatné otázky, napište místo toho dvě úplné dvojice. S rozhodnutím vám může pomoci [návod na tvorbu lepších kartiček (anglicky)](/blog/how-to-make-better-flashcards/).

## Před zveřejněním zkontrolujte výsledek

Prohlédněte si všechny čtyři zkušební kartičky. U celého seznamu porovnejte importované kartičky s upraveným zdrojem:

- Odpovídá celkový počet počtu úplných datových řádků?
- Shoduje se první i poslední dvojice včetně celých odpovědí?
- Zůstaly interpunkce, diakritika a kódy beze změny?
- Nejsou některé strany prázdné, neobjevila se záhlaví, duplicity nebo odpovědi přiřazené k nesprávným pojmům?
- Dává stále smysl každá odpověď, ve které jste upravovali zalomení řádků?

Přečtěte si několik běžných dvojic i těch podezřelých. Samotná shoda počtů neodhalí nesprávnou odpověď přiřazenou k platnému pojmu. Pokud něco nesedí, před opakováním importu opravte zdroj. Upravený soubor si ponechte pro budoucí opravy.

## Hotové dvojice, nebo kartičky vytvořené pomocí AI?

Quizlet ve svém [přehledu tvorby pomocí AI](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai) popisuje také vytváření kartiček z dodaných materiálů s pomocí umělé inteligence. U vygenerovaného znění je potřeba samostatně zkontrolovat obsah. U hotového seznamu pojmů a definic vám strukturovaný import umožní porovnat přenos s dvojicemi, které jste už napsali.

Začínáte s odstavci textu? Než připravíte text pro import, [převeďte své poznámky na kartičky (anglicky)](/blog/turn-notes-into-flashcards/). Přenášíte sadu opačným směrem? Použijte [návod k exportu z Quizletu](/cs/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
