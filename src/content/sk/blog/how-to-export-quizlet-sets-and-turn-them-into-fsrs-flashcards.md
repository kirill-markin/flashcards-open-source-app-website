---
title: "Ako exportovať sady z Quizletu v roku 2026 (a prečo chýba možnosť Export)"
description: "Exportujte sadu z Quizletu podľa aktuálneho postupu na webe. Ak chýba Export, skontrolujte, či ste sadu vytvorili, či ide o kópiu alebo či používate mobilnú aplikáciu."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "ako exportovať z Quizletu"
  - "ako exportovať kartičky z Quizletu"
  - "Quizlet chýba tlačidlo export"
  - "stiahnuť kartičky z Quizletu"
  - "Quizlet do CSV"
  - "Quizlet do Anki"
---

Ak v Quizlete chýba tlačidlo **Export**, najprv si overte dve veci: vytvorili ste pôvodnú sadu a používate webovú stránku Quizletu? Quizlet povoľuje export iba pôvodnému autorovi sady a táto funkcia funguje len na webe. Skopírovanú sadu nemožno exportovať, aj keď sa jej kópia už zobrazuje vo vašej knižnici.

Ak tieto podmienky spĺňate, samotný export je rýchly: otvorte sadu na webe, vyberte **More → Export**, nastavte usporiadanie pojmov a definícií a zvoľte **Copy text**. Quizlet nestiahne súbor s balíčkom. Skopíruje text do schránky, bez obrázkov.

**Fakty overené:** 30. augusta 2026 podľa [oficiálneho návodu Quizletu na export](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Pracovník archívu kontroluje doklady vlastníctva pred odovzdaním párov textových kartičiek; pripravené sú dva obaly na dokumenty a fotografie zostávajú za sklom](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Malo by sa vám tlačidlo Export vôbec zobrazovať?

Skôr než sa pokúsite stiahnuť kartičky z Quizletu iným spôsobom, pozrite si túto tabuľku:

| Vaša situácia | Mal by byť Export dostupný? | Ďalší krok |
| --- | --- | --- |
| Vytvorili ste pôvodnú sadu a otvorili ju na webe Quizletu | Áno, podľa stránky pomocníka Quizletu | Postupujte podľa krokov nižšie |
| Používate aplikáciu pre iOS alebo Android | Nie; export funguje iba na webe | Otvorte Quizlet vo webovom prehliadači a prihláste sa |
| Skopírovali ste sadu iného používateľa | Nie; podľa Quizletu sa skopírované sady nedajú exportovať | Neočakávajte, že vytvorenie kópie sprístupní Export |
| Sadu si môžete prezerať, ale nevytvorili ste ju | Nie; prístup na prezeranie z vás nerobí autora sady | Požiadajte autora o zdrojový súbor alebo vytvorte novú sadu z materiálov, ktoré môžete použiť |

Ak ste vytvorili pôvodnú sadu, ale tlačidlo exportu z Quizletu stále chýba, overte si, že ste prihlásení do účtu, ktorému patrí, a že ste otvorili originál, nie kópiu. Stránka pomocníka Quizletu neuvádza žiadny druhý spôsob exportu. V tejto situácii kontaktujte podporu Quizletu namiesto toho, aby ste dôverovali nástroju na sťahovanie, ktorý sľubuje obídenie obmedzenia.

## Ako exportovať kartičky z Quizletu na webe

Pri sade, ktorú ste vytvorili:

1. Prihláste sa na webe Quizletu.
2. Vyberte svoju knižnicu (**Your library**).
3. Vyberte sady kartičiek (**Flashcard sets**).
4. Otvorte sadu, ktorú chcete exportovať.
5. Otvorte ponuku ďalších možností (**More**).
6. Vyberte **Export**.
7. Zvoľte usporiadanie pojmov a definícií.
8. Vyberte kopírovanie textu (**Copy text**).
9. Vložte výsledok do editora obyčajného textu.

Toto je celý aktuálny postup. Žiadne záverečné tlačidlo na stiahnutie súboru tu nie je.

Pri bežných obojstranných kartičkách odporúčam oddeľovať pojem od definície tabulátorom a jednotlivé kartičky novým riadkom. Táto voľba oddeľovača je praktická rada, nie požiadavka Quizletu. Tabulátory sa zvyčajne kontrolujú ľahšie než čiarky, pretože čiarky sa v bežných definíciách vyskytujú často.

Správne pripravený súbor s dvoma kartičkami by vyzeral takto, s jedným tabulátorom uprostred každého riadka:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Čo export z Quizletu zachová

Quizlet rozsah tejto funkcie vymedzuje úzko: autor môže exportovať **pojmy a definície** zo svojej vlastnej sady. Zároveň uvádza, že obrázky exportovať nemožno.

Najistejšie je vychádzať z toho, čo vidíte vo vloženom výsledku. Ak sa v ňom nachádza text, oddeľovač alebo zalomenie riadka, môžete ho zachovať v súbore. Stránka pomocníka Quizletu nesľubuje prenos priečinkov, režimov učenia, formátovania, stavu zvládnutia učiva, histórie opakovania ani jeho rozvrhu.

Ide teda o kópiu textu kartičiek, nie o zálohu, z ktorej možno obnoviť pôvodné dáta v Quizlete. Rovnaký rozdiel je podstatný aj vtedy, ak ste hľadali „stiahnuť kartičky z Quizletu“: Quizlet skopíruje text do schránky a súbor si vytvoríte sami.

## Pred úpravami si uložte pôvodnú kópiu v UTF-8

Postupujte tak, aby ste sa mohli vrátiť k pôvodným dátam:

1. Vložte exportovaný text do editora obyčajného textu.
2. Uložte ho v kódovaní UTF-8, napríklad ako `biology-quizlet-raw.txt`.
3. Vytvorte jeho kópiu s názvom `biology-quizlet-working.txt`.
4. Pôvodný súbor nechajte bez zmien a upravujte iba pracovnú kópiu.

Pred importom skontrolujte pracovný súbor, kým máte sadu v Quizlete ešte otvorenú:

- Zapnite zobrazenie neviditeľných znakov a overte, kde sú tabulátory a zalomenia riadkov.
- Vyhľadajte zvolený oddeľovač v samotných pojmoch a definíciách. Tabulátor navyše môže vytvoriť nechcené tretie pole.
- Nájdite definície, ktoré obsahujú vlastné zalomenia riadkov; môžu sa omylom načítať ako ďalšie kartičky.
- Porovnajte začiatok, stred a koniec súboru s Quizletom vrátane najdlhších definícií.
- Súbor zatvorte a znova otvorte. Potom skontrolujte diakritiku, nelatinkové písma, symboly a typografické úvodzovky či apostrofy.
- Označte prázdne polia, duplicity a neštandardné riadky namiesto toho, aby ste ich potichu opravovali odhadom.

Počet riadkov porovnávajte s počtom kartičiek len vtedy, keď každá kartička zaberá presne jeden riadok. Pri viacriadkových definíciách táto skratka nefunguje.

Pôvodný súbor si ponechajte aj po tom, čo pracovná kópia vyzerá správne. Ak import posunie pole alebo vynechá obsah, stále budete mať nezmenený podklad na porovnanie.

## Quizlet do CSV: súbor vytvorte správnym postupom

Premenovaním súboru z `.txt` na `.csv` jeho formát nezmeníte. CSV vyžaduje jednotné oddeľovače a správne uzatvorenie obsahu do úvodzoviek pri čiarkach, úvodzovkách a viacriadkovom texte.

Ako spoľahlivo vytvoriť CSV z exportu Quizletu:

1. Zálohu pôvodného textu ponechajte bez zmien.
2. Otvorte pracovnú kópiu v tabuľkovom procesore a vyberte presne ten oddeľovač, ktorý ste použili v Quizlete.
3. Overte, že každý očakávaný záznam má dva stĺpce: pojem a definíciu.
4. Skontrolujte úvodzovky, oddeľovače a viacriadkové definície.
5. Exportujte súbor ako CSV v kódovaní UTF-8.
6. Pred použitím v ďalšej aplikácii otvorte CSV v novom náhľade.

Tabuľkový procesor dokáže doplniť úvodzovky, ktoré CSV potrebuje. Hromadné nahradenie tabulátorov čiarkami to spoľahlivo nedokáže.

## Preneste text do Nibomo ako podklad pre návrhy, ktoré skontrolujete

[Nibomo](/sk/features/) nemá priamy import z Quizletu. V hostovanej aplikácii sa TXT alebo CSV používa ako príloha na tvorbu návrhov pomocou AI, nie na bezstratový prenos dát.

1. Pôvodný súbor z Quizletu si nechajte uložený mimo aplikácie.
2. V AI chate Nibomo priložte vyčistený súbor TXT alebo správne pripravený súbor CSV.
3. Povedzte asistentovi, aký oddeľovač a aké polia súbor používa.
4. Požiadajte o malú ukážku a výslovne uveďte, že zatiaľ nemá ukladať kartičky.
5. Porovnajte navrhovaný počet kartičiek aj ich predné a zadné strany s pracovným súborom.
6. Uložte len kartičky, ktoré ste skontrolovali.

[Úvodná príručka](/docs/getting-started/) opisuje AI chat s dátami pracovného priestoru a prílohami. Opatrne formulované zadanie môže vyzerať takto:

> Čítaj tento súbor ako dvojice pojmov a definícií oddelených tabulátorom. Zatiaľ neukladaj žiadne kartičky. Navrhni malú ukážku, zachovaj pôvodné znenie aj nelatinkové znaky. Chybné, prázdne alebo nejednoznačné riadky vypíš samostatne a ich obsah neodhaduj.

To sa môže hodiť, ak staré kartičky zároveň potrebujú úpravy. Nie je to však dôkaz, že sa každý riadok preniesol správne. Použite kontrolný zoznam v článku [Ako opraviť kartičky vytvorené AI](/blog/how-to-fix-ai-flashcards/) a pred vytvorením zvyšku vyskúšajte malý balíček.

Kartičky vytvorené v Nibomo začínajú s novou históriou učenia. Text z Quizletu neobsahuje záznamy o opakovaní ani stav plánovania potrebný na pokračovanie v pôvodnom poradí opakovania.

> **Upozornenie na môj vzťah k produktu:** Vyvíjam Nibomo. Tento postup opisuje súčasné obmedzenia produktu; netvrdí, že je úplne kompatibilný s Quizletom.

## Quizlet do Anki: použite textový import v Anki

[Oficiálna príručka Anki na import textu](https://docs.ankiweb.net/importing/text-files.html) uvádza podporu obyčajných textových súborov v UTF-8, ktorých polia sú oddelené čiarkami, bodkočiarkami alebo tabulátormi.

Pri pracovnej kópii oddelenej tabulátormi:

1. Otvorte import v Anki a vyberte textový súbor v UTF-8.
2. V náhľade overte, že Anki rozpoznalo tabulátor; ak nie, zmeňte nastavenie oddeľovača.
3. Vyberte typ poznámky a cieľový balíček.
4. Priraďte prvé pole prednej strane a druhé zadnej strane.
5. Skontrolujte, či v náhľade nie sú prázdne, posunuté alebo nadbytočné polia.
6. Pred importom skontrolujte nastavenia duplicít a aktualizácie.

Anki určuje očakávaný počet polí podľa prvého riadka, ktorý nie je komentárom. V ďalších záznamoch zostanú chýbajúce polia prázdne a nadbytočné polia sa neimportujú. Preto je náhľad dôležitý, najmä keď jediný nechcený oddeľovač môže zmeniť štruktúru riadka.

Aj pri viacriadkových definíciách si treba zvoliť konkrétny postup. Anki podporuje polia uzavreté v úvodzovkách, ktoré zaberajú viac riadkov. Pri zapnutej možnosti povoliť HTML v poliach (**Allow HTML in fields**) môže namiesto toho interpretovať `<br>` ako zalomenie riadka. Použite jeden spôsob a pred importom celého súboru skontrolujte skopírovanú ukážku.

V predvolenom nastavení môže Anki podľa prvého poľa nájsť existujúcu poznámku rovnakého typu a aktualizovať jej ostatné polia. V možnostiach importu môžete namiesto toho duplicity ignorovať alebo ich pridať ako nové poznámky. Aktualizácia existujúcej poznámky v Anki môže zachovať jej rozvrh opakovania v Anki, ale cez textový súbor sa žiadny rozvrh z Quizletu neprenesie.

## Ponechajte si originál, kým nový balíček nebude správne fungovať

Oficiálny postup v Quizlete sa končí možnosťou **Copy text**, dostupnou na webe pre sady vytvorené daným používateľom. Skripty na získavanie obsahu z webu, odhadnuté súkromné koncové body a nástroje tretích strán na sťahovanie sú samostatné, nepodporované postupy. Zo skopírovanej sady ani zo sady dostupnej len na prezeranie neurobia oficiálne exportovateľnú sadu.

Ak namiesto jednorazového kopírovania potrebujete pravidelnú automatizáciu, článok o [aktuálnom stave API Quizletu](/blog/quizlet-api/) vysvetľuje hranice oficiálnej podpory. Ak sada nie je vaša, požiadajte jej autora o zdrojový súbor alebo vytvorte menší balíček z vlastných poznámok. Článok [Ako vytvárať lepšie kartičky](/blog/how-to-make-better-flashcards/) vám pomôže nový balíček zlepšiť namiesto kopírovania každého starého riadka.

Pôvodnú sadu z Quizletu nemažte, kým:

- pôvodný súbor v UTF-8 nemáte uložený na zálohovanom mieste;
- sa pracovný súbor po opätovnom otvorení nezobrazuje s očakávanými znakmi a oddeľovačmi;
- nemáte skontrolované viacriadkové polia, prázdne hodnoty, duplicity a neštandardné riadky;
- nemáte dôležitý kontext z obrázkov znovu vytvorený zo zdroja, ktorý môžete použiť; a
- malý test v cieľovej aplikácii nevytvorí správne predné a zadné strany kartičiek.

Pôvodný textový súbor si ponechajte aj potom. Je to najjednoduchší nezávislý podklad na porovnanie, keď neskorší import nevyzerá správne. Ak sa ešte rozhodujete, kam kartičky presunúť, [porovnanie alternatívy k Quizletu](/blog/quizlet-alternative/) rozoberá širšie výhody a nevýhody.
