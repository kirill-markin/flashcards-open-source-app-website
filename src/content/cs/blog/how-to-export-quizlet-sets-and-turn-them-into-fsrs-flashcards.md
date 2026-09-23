---
title: "Jak exportovat sady z Quizletu v roce 2026 (a proč chybí tlačítko Export)"
description: "Exportujte sadu z Quizletu podle aktuálního postupu na webu. Pokud Export chybí, ověřte, zda jste autorem sady, zda nejde o kopii a zda nepoužíváte mobilní aplikaci."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "jak exportovat Quizlet"
  - "jak exportovat kartičky z Quizletu"
  - "Quizlet chybí tlačítko export"
  - "stáhnout kartičky z Quizletu"
  - "Quizlet do CSV"
  - "Quizlet do Anki"
---

Pokud v Quizletu chybí tlačítko **Export**, nejprve ověřte dvě věci: vytvořili jste původní sadu a používáte web Quizletu? Quizlet umožňuje export pouze původnímu autorovi sady a jen na webu. Zkopírovanou sadu nelze exportovat, ani když se kopie nyní zobrazuje ve vaší knihovně.

Pokud tyto podmínky splňujete, samotný export je rychlý: otevřete sadu na webu, zvolte **More → Export**, nastavte uspořádání pojmů a definic a vyberte **Copy text**. Quizlet nestáhne soubor s balíčkem. Zkopíruje text do schránky, bez obrázků.

**Fakta ověřena:** 30. srpna 2026 podle [oficiálního návodu Quizletu k exportu](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Pracovník archivu ověřuje vlastnictví pomocí žetonů před předáním dvojic textových kartiček; vedle jsou připravené dvě složky na dokumenty a fotografie zůstávají za sklem](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Má se vám tlačítko Export vůbec zobrazovat?

Než zkusíte stáhnout kartičky z Quizletu jiným způsobem, projděte si tuto tabulku:

| Vaše situace | Má být Export dostupný? | Další krok |
| --- | --- | --- |
| Vytvořili jste původní sadu a otevřeli ji na webu Quizletu | Ano, podle nápovědy Quizletu | Postupujte podle kroků níže |
| Používáte aplikaci pro iOS nebo Android | Ne; export funguje pouze na webu | Otevřete Quizlet ve webovém prohlížeči a přihlaste se |
| Zkopírovali jste sadu jiného uživatele | Ne; podle Quizletu nelze zkopírované sady exportovat | Nepočítejte s tím, že vytvořením kopie zpřístupníte Export |
| Sadu si můžete prohlížet, ale nevytvořili jste ji | Ne; přístup k prohlížení z vás nedělá autora sady | Požádejte autora o zdrojový soubor nebo sadu vytvořte znovu z materiálů, které můžete použít |

Pokud jste původní sadu vytvořili, ale tlačítko exportu stále chybí, ověřte, že jste přihlášeni k účtu, kterému sada patří, a že jste otevřeli originál, nikoli kopii. Nápověda Quizletu žádný další způsob exportu neuvádí. V takovém případě se obraťte na podporu Quizletu. Nespoléhejte na nástroj ke stahování, který slibuje obejití tohoto omezení.

## Jak exportovat kartičky z Quizletu na webu

U sady, kterou jste vytvořili:

1. Přihlaste se na webu Quizletu.
2. Vyberte svou knihovnu (**Your library**).
3. Vyberte sady kartiček (**Flashcard sets**).
4. Otevřete sadu, kterou chcete exportovat.
5. Otevřete nabídku dalších možností (**More**).
6. Vyberte **Export**.
7. Zvolte uspořádání pojmů a definic.
8. Vyberte kopírování textu (**Copy text**).
9. Vložte výsledek do editoru prostého textu.

To je celý současný postup. Žádné závěrečné tlačítko „stáhnout“ tu není.

U běžných kartiček s přední a zadní stranou doporučuji oddělit pojem od definice tabulátorem a jednotlivé kartičky novým řádkem. Jde o praktické doporučení, nikoli požadavek Quizletu. Tabulátory se při kontrole obvykle rozpoznávají snáz než čárky, protože čárky se v běžných definicích objevují často.

Přehledný soubor se dvěma kartičkami by vypadal takto, s jedním tabulátorem uprostřed každého řádku:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Co export z Quizletu zachová

Quizlet tuto funkci vymezuje úzce: exportuje **pojmy a definice** ze sady, kterou uživatel sám vytvořil. Zároveň uvádí, že obrázky exportovat nelze.

Nejspolehlivější je vycházet z toho, co se skutečně vloží ze schránky. Pokud tam je text, oddělovač nebo konec řádku, můžete jej zachovat v souboru. Nápověda Quizletu neslibuje přenos složek, studijních režimů, formátování, úrovně zvládnutí učiva, historie opakování ani plánu opakování.

Jde tedy o kopii textu kartiček, nikoli o zálohu, ze které lze Quizlet obnovit. Na tomto rozdílu záleží i tehdy, pokud jste hledali „stáhnout kartičky z Quizletu“: Quizlet zkopíruje text do schránky a soubor si vytvoříte sami.

## Než začnete text upravovat, uložte původní kopii v UTF-8

Postupujte tak, abyste se mohli vrátit k původnímu exportu:

1. Vložte export do editoru prostého textu.
2. Uložte jej v UTF-8, například jako `biology-quizlet-raw.txt`.
3. Vytvořte kopii s názvem `biology-quizlet-working.txt`.
4. Původní soubor ponechte beze změn a upravujte pouze pracovní kopii.

Před importem pracovní soubor zkontrolujte, dokud máte sadu v Quizletu stále otevřenou:

- Zapněte zobrazování bílých znaků a ověřte, kde jsou tabulátory a konce řádků.
- Vyhledejte zvolený oddělovač uvnitř pojmů a definic. Tabulátor navíc může vytvořit nečekané třetí pole.
- Najděte definice, které samy obsahují konce řádků; při importu mohou být mylně považovány za další kartičky.
- Porovnejte začátek, prostředek a konec souboru s Quizletem, včetně nejdelších definic.
- Zavřete soubor, znovu jej otevřete a zkontrolujte diakritiku, nelatinková písma, symboly a typografická interpunkční znaménka.
- Prázdná pole, duplicity a nestandardní řádky si označte; neopravujte je jen podle odhadu.

Počet řádků porovnávejte s počtem kartiček pouze tehdy, když každá kartička zabírá přesně jeden řádek. U víceřádkových definic tato zkratka nefunguje.

Původní soubor si ponechte, i když pracovní kopie vypadá správně. Pokud import posune pole nebo vynechá obsah, budete mít stále nezměněný podklad k porovnání.

## Quizlet do CSV: soubor je potřeba skutečně převést

Přejmenování souboru z `.txt` na `.csv` jej nepřevede. CSV vyžaduje jednotné oddělovače a správné použití uvozovek u obsahu s čárkami, uvozovkami a více řádky.

Jak spolehlivě vytvořit CSV z exportu Quizletu:

1. Původní textovou zálohu ponechte beze změn.
2. Otevřete pracovní kopii v tabulkovém procesoru a vyberte přesně ten oddělovač, který jste použili v Quizletu.
3. Ověřte, že každý očekávaný záznam má dva sloupce: pojem a definici.
4. Zkontrolujte uvozovky, oddělovače a víceřádkové definice.
5. Exportujte soubor jako CSV v UTF-8.
6. Než CSV použijete jinde, znovu jej otevřete v novém náhledu.

Tabulkový procesor dokáže doplnit uvozovky, které CSV potřebuje. Hromadné nahrazení tabulátorů čárkami to spolehlivě nezvládne.

## V Nibomo použijte text k návrhu kartiček a ty pak zkontrolujte

[Nibomo](/cs/features/) nemá přímý import z Quizletu. V hostované aplikaci lze TXT nebo CSV přiložit jako soubor a s pomocí AI z něj vytvořit návrhy kartiček; nejde o bezeztrátovou migraci.

1. Původní soubor z Quizletu uchovejte mimo aplikaci.
2. V AI chatu Nibomo přiložte upravený soubor TXT nebo řádně připravený soubor CSV.
3. Sdělte asistentovi, jaký oddělovač a jaká pole soubor používá.
4. Požádejte o malou ukázku a výslovně uveďte, že zatím nemá kartičky ukládat.
5. Porovnejte navržený počet kartiček i jejich přední a zadní strany s pracovním souborem.
6. Uložte pouze kartičky, které jste zkontrolovali.

[Průvodce prvními kroky](/docs/getting-started/) popisuje AI chat s daty pracovního prostoru a přílohami. Obezřetné zadání může vypadat takto:

> Čti tento soubor jako dvojice pojmů a definic oddělené tabulátorem. Zatím kartičky neukládej. Navrhni malou ukázku, zachovej původní znění i znaky nelatinkových písem a chybné, prázdné nebo nejednoznačné řádky vypiš zvlášť místo odhadování jejich významu.

To se může hodit, pokud staré kartičky zároveň potřebují upravit. Samo o sobě to ale nedokazuje, že se každý řádek přenesl správně. Použijte kontrolní seznam v článku [Jak opravit kartičky vytvořené AI](/blog/how-to-fix-ai-flashcards/) a před vytvořením zbytku vyzkoušejte malý balíček.

Kartičky vytvořené v Nibomo začínají s novou historií učení. Text z Quizletu neobsahuje záznamy o opakování ani údaje o jeho naplánování, které by umožnily navázat na původní frontu kartiček k opakování.

> **Pro upřesnění:** Nibomo vyvíjím. Tento postup popisuje současná omezení produktu; netvrdí, že je s Quizletem plně kompatibilní.

## Quizlet do Anki: použijte textový import Anki

Podle [oficiálního návodu k importu textu](https://docs.ankiweb.net/importing/text-files.html) Anki podporuje soubory prostého textu v UTF-8 s poli oddělenými čárkami, středníky nebo tabulátory.

U pracovní kopie oddělené tabulátory:

1. Otevřete import v Anki a vyberte textový soubor v UTF-8.
2. V náhledu ověřte, že Anki rozpoznalo tabulátor; pokud ne, změňte nastavení oddělovače.
3. Vyberte typ poznámky a cílový balíček.
4. Přiřaďte první pole přední straně a druhé zadní straně.
5. Zkontrolujte, zda v náhledu nejsou prázdná, posunutá nebo nadbytečná pole.
6. Před importem si projděte nastavení duplicit a aktualizací.

Anki určuje očekávaný počet polí podle prvního řádku, který není komentářem. V dalších záznamech zůstanou chybějící pole prázdná a nadbytečná pole se nenaimportují. Náhled je proto důležitý, zvlášť když může jediný zatoulaný oddělovač změnit strukturu řádku.

U víceřádkových definic je také nutné zvolit konkrétní postup. Anki podporuje pole v uvozovkách, která se rozkládají přes více řádků. Případně umí interpretovat `<br>` jako konec řádku, pokud je zapnutá volba **Allow HTML in fields** (povolit HTML v polích). Použijte jeden z těchto způsobů a před importem celého souboru zkontrolujte zkopírovanou ukázku.

Ve výchozím nastavení může Anki podle prvního pole najít existující poznámku stejného typu a aktualizovat její ostatní pole. V nastavení importu lze místo toho duplicity ignorovat nebo je přidat jako nové poznámky. Aktualizace existující poznámky v Anki může zachovat její plán opakování v Anki, ale žádný plán opakování z Quizletu se přes textový soubor nepřenese.

## Původní sadu ponechte, dokud nový balíček nefunguje

Oficiální export v Quizletu funguje na webu, je určený pro sady, které jste sami vytvořili, a končí volbou **Copy text**. Skripty pro scraping, pokusy odhadnout neveřejné endpointy a nástroje třetích stran ke stahování představují samostatné, nepodporované postupy. Jejich použitím se export zkopírované sady ani sady přístupné pouze k prohlížení nestane oficiálně podporovaným.

Pokud potřebujete opakovanou automatizaci místo jednorázové kopie, [aktuální stav API Quizletu](/blog/quizlet-api/) vysvětluje, co je podporováno. Pokud sada není vaše, požádejte jejího autora o zdrojový soubor nebo si z vlastních poznámek vytvořte menší balíček. Článek [Jak vytvářet lepší kartičky](/blog/how-to-make-better-flashcards/) vám může pomoci nový balíček vylepšit místo kopírování všech starých řádků.

Původní sadu v Quizletu nemažte, dokud:

- nemáte původní soubor v UTF-8 uložený na místě, které se zálohuje;
- se pracovní soubor po opětovném otevření nezobrazuje se správnými znaky a oddělovači;
- nezkontrolujete víceřádková pole, prázdná místa, duplicity a nestandardní řádky;
- nedoplníte důležité informace z obrázků ze zdroje, který můžete použít; a
- malý test nevytvoří v cílové aplikaci správné přední a zadní strany kartiček.

Původní textový soubor si ponechte i potom. Je to nejsnazší nezávislý podklad k porovnání, když pozdější import nevypadá správně. Pokud se stále rozhodujete, kam kartičky přesunout, [srovnání alternativ ke Quizletu](/blog/quizlet-alternative/) popisuje i další výhody a nevýhody jednotlivých možností.
