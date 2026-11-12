---
title: Import kartiček do Nibomo
description: Přeneste si kartičky z Quizletu, Anki nebo jiné aplikace. Vyberte vhodný formát exportu a zkontrolujte výsledek, než naimportujete větší balíček.
---

Otevřete [Nibomo](https://app.nibomo.com/?locale=cs), přepněte do pracovního prostoru, kam chcete kartičky přidat, a přejděte do **Knihovna > Import**. V části **Z jiné aplikace** vyberte aplikaci, kterou jste používali. Každá má vlastní položku, i když používá stejný formát souboru jako jiná aplikace.

Níže uvedené možnosti najdete ve webové aplikaci. Pokud na iPhonu, iPadu, Macu nebo Androidu nabídku nebo příslušnou položku nevidíte, použijte webovou aplikaci. Pokud Nibomo na zařízení používáte jako host, nejprve se na něm přihlaste. Poté se přihlaste ve webové aplikaci ke stejnému účtu Nibomo a vyberte pracovní prostor, kam chcete kartičky importovat.

## Vyberte zdroj kartiček

| Zdroj | Co budete potřebovat | Jak kartičky importovat |
| --- | --- | --- |
| Quizlet | Zkopírovaný text z exportu | Vložte ho na obrazovce pro import z Quizletu |
| Anki | Balíček `.apkg` nebo kolekci `.colpkg` | Vybrat soubory |
| Noji | `.csv` nebo `.ofc` | Vybrat soubory |
| Knowt | `.pdf` | Vybrat soubory |
| RemNote | `.apkg`, `.md` nebo `.txt` | Vybrat soubory |
| Brainscape | `.csv` | Vybrat soubory |
| StudySmarter | `.csv` | Vybrat soubory |
| Cram | `.csv` | Vybrat soubory |
| Mochi | `.mochi` | Vybrat soubory |
| SuperMemo | `.xml` | Vybrat soubory |
| AlgoApp (dříve AnkiApp) | `.zip` nebo `.xml` | Vybrat soubory |
| Jiná aplikace | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx` nebo `.zip` | Vyberte soubory přes **Importovat z jiné aplikace** |
| Tabulka | Zkopírované řádky s přední a zadní stranou každé kartičky | Vložte je přes **Importovat z tabulky** |
| Nibomo | Soubor `flashcards.zip` vyexportovaný z Nibomo | Zkontrolujte náhled přes **Importovat z Nibomo** |

Pokud se v nabídce zobrazuje starší název AlgoApp, hledejte **AnkiApp**. Anki je samostatná položka.

Starší soubor Excelu s příponou `.xls` před importem uložte jako `.xlsx` nebo `.csv`. Můžete také zkopírovat sloupce pro přední a zadní stranu a [vložit je na obrazovce pro import z tabulky](#vložení-kartiček-z-tabulky).

## Import z jiné aplikace s kartičkami

1. V původní aplikaci vyexportujte kartičky, které chcete přenést. V Quizletu otevřete svou sadu, vyberte **Export** (Exportovat) a zkopírujte text. Jako oddělovač pojmu a definice se hodí tabulátor. Každou kartičku dejte na nový řádek.
2. V Nibomo přejděte do **Knihovna > Import** a otevřete příslušnou položku. U Quizletu vložte zkopírovaný text. U ostatních zdrojů vyberte vyexportovaný soubor nebo soubory. Pokud vaše aplikace v nabídce není, ale umožňuje export do podporovaného formátu, například PDF, použijte **Importovat z jiné aplikace**.
3. Zvolte **Spustit import**. Nibomo otevře nový chat s AI a odešle požadavek na import spolu se soubory nebo vloženým textem. Potřebujete připojení k internetu. Každý soubor pro import pomocí AI může mít nejvýše **30 MiB**. Pokud je soubor větší, zkuste balíčky nebo sady vyexportovat po menších částech.
4. Výsledek zkontrolujte v **Knihovně**. Chat s AI může kartičky ukládat po dávkách. Pokud se zastaví, podívejte se, které kartičky už máte v Nibomo, a požádejte ho, aby pokračoval se zbývajícími, než zkusíte importovat celý export znovu.

### Nejprve vyzkoušejte malý import

Ponechte si původní export a začněte jedním malým balíčkem nebo sadou. Porovnejte počet kartiček a zkontrolujte obě strany několika z nich, jejich štítky a případné obrázky nebo zvláštní formátování, které potřebujete. Pokud chcete před uložením vidět ukázku, přiložte export k novému chatu s AI a požádejte o náhled několika kartiček bez uložení. Tuto možnost můžete použít místo tlačítka **Spustit import**.

Kartičky importované pomocí AI se do Nibomo přidají jako nové. Dřívější historie opakování a plánované termíny se nepřenesou. Zachování uspořádání, formátování a médií závisí na tom, co export obsahuje a co z něj chat s AI dokáže přečíst. Výsledek ověřte, než se na něj spolehnete nebo cokoli smažete v původní aplikaci.

## Vložení kartiček z tabulky

Pro jednoduché dvojice s přední a zadní stranou zvolte **Knihovna > Import > Importovat z tabulky**. Zkopírujte z tabulky dva sloupce bez záhlaví a vložte je na obrazovce importu. Mezi přední a zadní stranou nejprve zkuste nastavit **Tabulátor** a mezi kartičkami **Nový řádek**. Pokud text používá jiné oddělovače, změňte nastavení.

Zkontrolujte náhled kartiček, opravte neúplné řádky a vyberte štítky, které chcete přidat. Pak kartičky uložte tlačítkem pro import. Tato možnost nepoužívá chat s AI.

## Import souboru ZIP z Nibomo

Pokud máte soubor `flashcards.zip`, který jste dříve vyexportovali z Nibomo, zvolte **Knihovna > Import > Importovat z Nibomo**. Vyberte soubor ZIP bez rozbalování, v náhledu zkontrolujte kartičky a připojená média a potvrďte import. Takto můžete přenést kartičky, štítky a média uložená v balíčku. Chat s AI k tomu nepotřebujete.
