---
title: Import kartičiek do Nibomo
description: Preneste kartičky z Quizletu, Anki alebo inej aplikácie. Zistite, ktorý formát vybrať a ako kartičky skontrolovať pred hromadným importom.
---

Otvorte [Nibomo](https://app.nibomo.com/?locale=sk), prepnite sa do pracovného priestoru, do ktorého chcete kartičky pridať, a prejdite na **Knižnica > Import**. V časti **Z inej aplikácie** vyberte pôvodnú aplikáciu. Každá má vlastnú položku, aj keď používa rovnaký formát ako iná aplikácia.

Nasledujúce možnosti nájdete vo webovej aplikácii. Ak na iPhone, iPade, Macu alebo Androide nevidíte ponuku alebo potrebný zdroj, použite webovú aplikáciu. Ak na zariadení používate Nibomo ako hosť, najprv sa na ňom prihláste. Na webe sa prihláste do toho istého účtu Nibomo a pred importom vyberte pracovný priestor, do ktorého chcete kartičky pridať.

## Výber zdroja

| Zdroj | Čo si pripraviť | Spôsob importu |
| --- | --- | --- |
| Quizlet | Skopírovaný exportovaný text | Prilepte ho na obrazovke importu z Quizletu |
| Anki | Balík `.apkg` alebo zbierku `.colpkg` | Vybrať súbory |
| Noji | `.csv` alebo `.ofc` | Vybrať súbory |
| Knowt | `.pdf` | Vybrať súbory |
| RemNote | `.apkg`, `.md` alebo `.txt` | Vybrať súbory |
| Brainscape | `.csv` | Vybrať súbory |
| StudySmarter | `.csv` | Vybrať súbory |
| Cram | `.csv` | Vybrať súbory |
| Mochi | `.mochi` | Vybrať súbory |
| SuperMemo | `.xml` | Vybrať súbory |
| AlgoApp (predtým AnkiApp) | `.zip` alebo `.xml` | Vybrať súbory |
| Iná aplikácia | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx` alebo `.zip` | Vyberte súbory cez **Importovať z inej aplikácie** |
| Tabuľka | Skopírované riadky s prednou a zadnou stranou každej kartičky | Prilepte ich cez **Importovať z tabuľky** |
| Nibomo | Súbor `flashcards.zip` exportovaný z Nibomo | Zobrazte náhľad cez **Importovať z Nibomo** |

AlgoApp môže byť v ponuke ešte pod starým názvom **AnkiApp**. Anki má vlastnú položku.

Starší excelovský súbor `.xls` pred importom uložte ako `.xlsx` alebo `.csv`. Môžete tiež skopírovať stĺpce s prednou a zadnou stranou a [prilepiť ich pri importe z tabuľky](#prilepenie-z-tabuľky).

## Import z inej aplikácie

1. V pôvodnej aplikácii exportujte kartičky, ktoré chcete preniesť. V Quizlete otvorte svoju sadu, vyberte **Export** a skopírujte text. Medzi pojem a definíciu sa hodí tabulátor a medzi kartičky nový riadok.
2. V Nibomo otvorte **Knižnica > Import** a vyberte položku pre danú aplikáciu. Pri Quizlete prilepte skopírovaný text. Pri ostatných zdrojoch vyberte exportovaný súbor alebo súbory. Ak vaša aplikácia nemá vlastnú položku, ale poskytuje podporovaný export, napríklad PDF, vyberte **Importovať z inej aplikácie**.
3. Vyberte **Spustiť import**. Nibomo otvorí nový AI chat a odošle požiadavku na import spolu so súbormi alebo prilepeným textom. Potrebujete pripojenie na internet. Každý súbor pri importe cez AI môže mať najviac **30 MiB**. Väčšie exporty skúste rozdeliť tak, že samostatne exportujete menšie balíky alebo sady.
4. Výsledok skontrolujte v sekcii **Knižnica**. AI chat môže kartičky ukladať postupne po dávkach. Ak sa import preruší, zistite, ktoré kartičky už sú v Nibomo, a požiadajte AI chat, aby pokračoval zvyšnými. Až potom skúste zopakovať celý import, ak je to potrebné.

### Najprv skúste malý import

Pôvodný export si odložte a začnite jedným malým balíkom alebo sadou. Porovnajte počet kartičiek a skontrolujte niekoľko predných a zadných strán, štítky aj obrázky či formátovanie, na ktoré sa spoliehate. Ak chcete najprv vidieť ukážku, požiadajte AI chat o náhľad niekoľkých kartičiek bez uloženia. Namiesto voľby **Spustiť import** priložte export v novom AI chate a napíšte vlastnú požiadavku.

Kartičky importované cez AI začínajú v Nibomo ako nové. História opakovania ani termíny ďalších opakovaní sa neprenesú. To, koľko z pôvodného usporiadania, formátovania a médií sa prenesie, závisí od obsahu exportu a od toho, čo z neho AI chat dokáže načítať. Výsledok si overte, skôr ako sa naň spoľahnete alebo niečo vymažete v pôvodnej aplikácii.

## Prilepenie z tabuľky

Pri jednoduchých kartičkách s prednou a zadnou stranou použite **Knižnica > Import > Importovať z tabuľky**. Skopírujte dva stĺpce bez riadka s hlavičkou a prilepte ich na obrazovke importu. Pri kopírovaní buniek skúste najprv **Tabulátor** medzi prednou a zadnou stranou a **Nový riadok** medzi kartičkami. Ak text používa iné oddeľovače, zmeňte ich.

Pozrite si náhľad, opravte neúplné riadky a vyberte štítky, ktoré chcete pridať. Potom vyberte tlačidlo **Importovať** s počtom kartičiek. Kartičky sa uložia bez AI chatu.

## Import súboru ZIP z Nibomo

Pre súbor `flashcards.zip` exportovaný z Nibomo použite **Knižnica > Import > Importovať z Nibomo**. Vyberte súbor ZIP bez rozbaľovania, v náhľade skontrolujte kartičky a odkazované médiá a potvrďte import. Takto môžete preniesť kartičky, štítky a médiá obsiahnuté v balíku. AI chat sa pri tomto importe nepoužíva.
