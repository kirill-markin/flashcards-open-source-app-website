---
title: "Ako importovať kartičky do Quizletu z Excelu, Google Sheets alebo textu"
description: "Importujte dvojstĺpcový zoznam slov do Quizletu, nastavte tabulátory a nové riadky a pred zverejnením opravte rozdelené definície, nadbytočné kartičky či problémy s CSV."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "ako importovať kartičky do Quizletu"
  - "formát importu Quizlet"
  - "import do Quizletu z Excelu"
  - "Google Sheets do Quizletu"
  - "import do Quizletu s tabulátormi"
---

„Red, green, blue“ vyzerá ako bežná odpoveď na kartičke. Ak však čiarkou oddeľujete pojem od definície, tie isté čiarky spôsobia, že riadok nebude jednoznačný. Pár interpunkčných znamienok tak môže znamenať, že pripravený zoznam slov budete musieť opravovať.

Pri importe kartičiek do Quizletu z Excelu, Google Sheets alebo textu začnite dvoma stĺpcami: jedným pre pojmy a druhým pre definície. Skopírujte údaje, vložte ich do importného formulára na webe a nastavte tabulátory medzi poliami a nové riadky medzi kartičkami. Najprv vyskúšajte štyri riadky, aby ste mohli skontrolovať každú dvojicu ešte pred prenesením celého zoznamu.

![Hrnčiar priraďuje keramické šálky k zodpovedajúcim podšálkam v samostatných radoch pred ich premiestnením na policu](/blog/how-to-import-flashcards-into-quizlet.png)

## Kde nájdete importný formulár Quizletu

Quizlet vo svojom návode opisuje import na webe. Polia možno oddeliť čiarkami, tabulátormi alebo pomlčkami a kartičky bodkočiarkami alebo novými riadkami. [Oficiálny návod na import](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) uvádza tento postup:

1. Prihláste sa a vyberte **Create → Flashcard set** (vytvoriť → sada kartičiek).
2. Zadajte názov, vyberte **Import** a vložte text.
3. Prispôsobte oddeľovače vstupnému textu. Pre príklady v tomto článku použite **Tab** (tabulátor) a **New line** (nový riadok).
4. Vyberte **Import** a potom nastavte jazyk pojmov a definícií.
5. Skontrolujte kartičky a až potom vyberte **Create**, čím sadu uložíte a zverejníte.

Návod bol overený 15. septembra 2026. Príklady nižšie vysvetľujú prípravu a kontrolu textu; neopisujú test v prihlásenom účte.

## Začnite malým rozsahom buniek

V Exceli alebo Google Sheets vložte každú dvojicu pojmu a definície do samostatného riadka. Na skúšku použite tieto štyri kartičky:

| Pojem | Definícia |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Skopírujte iba štyri riadky s údajmi v oboch stĺpcoch. Ak sú hlavičky v prvom riadku, označte **A2:B5**. Hlavičky do kopírovaného rozsahu nezahŕňajte.

Výsledkom majú byť štyri kartičky so španielskymi pojmami a anglickými definíciami. Na poslednej kartičke má zostať „colores primarios de la luz“ vcelku na jednej strane a „red, green, blue“ vcelku na druhej. Čiarky sú súčasťou odpovede.

Keď tomuto príkladu rozumiete, pripravte si vlastnú tabuľku. Pracujte s kópiou, aby ste si originál ponechali na porovnanie. Odstráňte prázdne riadky a do výberu nezahŕňajte poznámky ani ďalšie stĺpce. Pred kopírovaním doplňte chýbajúce pojmy a definície.

Pri zoraďovaní vždy zoraďujte oba stĺpce spoločne. Ak zoradíte iba pojmy, oddelia sa od svojich odpovedí. Aj import so správnym počtom kartičiek potom môže obsahovať nesprávne dvojice.

## Obyčajný text musí obsahovať skutočné tabulátory

Tie isté štyri riadky vyzerajú v texte oddelenom tabulátormi takto. Medzi každým pojmom a jeho definíciou je jeden skutočný tabulátor:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tabulátor je konkrétny znak. Niekoľko medzier môže vyzerať podobne, ale hranicu označenú tabulátorom nevytvorí. Ani napísanie znakov `\t` nevloží tabulátor. Ak je to vo vašom textovom editore komplikované, vložte dvojice do dvoch stĺpcov tabuľky a skopírujte príslušné bunky.

Každá kartička má zaberať jeden fyzický riadok textu. Dlhá definícia sa môže pre úzke okno vizuálne zalomiť do druhého riadka; do obsahu sa tým znak nového riadka nepridá. Ak však vložíte zalomenie riadka priamo do bunky tabuľky, znak nového riadka bude súčasťou obsahu. Pred použitím nových riadkov ako oddeľovačov kartičiek takéto vnútorné zalomenia odstráňte.

Odstráňte aj tabulátory vnútri pojmov a definícií. V tomto formáte patria tabulátory iba medzi obe polia.

## Ak máte zoznam v súbore CSV

Pred prípravou importu otvorte CSV v tabuľkovom procesore. Záznam CSV, ako je tento, má pri správnom spracovaní úvodzoviek dve polia:

```text
"colores primarios de la luz","red, green, blue"
```

Odpoveď v úvodzovkách obsahuje čiarky. Textové pole, ktoré rozdeľuje vstup podľa čiarok, nemusí vedieť čítať formát CSV. Nespoliehajte sa preto, že v ňom úvodzovky ochránia odpoveď pred rozdelením.

V Exceli alebo Google Sheets si overte, že záznam zaberá presne dve bunky. Potom bunky skopírujte, aby ste získali vstup oddelený tabulátormi. Ak sa odpoveď rozdelila do ďalších stĺpcov, najprv opravte nastavenia importu CSV v tabuľkovom procesore. Skopírovaním poškodeného riadka prenesiete chybu ďalej.

Skontrolujte aj hodnoty, ktoré môže tabuľkový procesor automaticky zmeniť. Ak sa potrebujete naučiť kód `0012`, zmena na `12` zmení obsah kartičky. Pred kopírovaním rozsahu porovnajte identifikátory, dátumy, úvodzovky a slová s diakritikou s pôvodným súborom.

## Keď kartičky nezodpovedajú zdrojovým riadkom

Na skúšobných štyroch riadkoch nájdite prvý rozdiel. Vždy zmeňte iba jednu vec a potom výsledok porovnajte s tými istými štyrmi zdrojovými riadkami.

| Príznak | Pravdepodobný problém s oddeľovačmi | Čo zmeniť |
| --- | --- | --- |
| Odpoveď sa rozdelí na miestach s čiarkami | Ako oddeľovač polí je vybraná čiarka | Pripravte dva stĺpce a vyberte Tab |
| „well-being“ sa rozdelí vnútri pojmu | Ako oddeľovač polí je vybraná pomlčka | Spojovník zachovajte a polia oddeľte tabulátorom |
| Z jednej odpovede vznikne viac kartičiek | Zdroj obsahuje vnútorné zalomenia riadkov | Dajte celú odpoveď do jedného fyzického riadka |
| Z hlavičiek „Pojem“ a „Definícia“ vznikne kartička | Skopírovali ste aj riadok s hlavičkami | Označte iba riadky s údajmi |
| Obe polia zostanú na tej istej strane | Namiesto tabulátora sú použité medzery | Skopírujte rozsah buniek z dvoch stĺpcov tabuľky |

Napríklad odpoveď s textami „first stage“ a „second stage“ na samostatných riadkoch môžete zmeniť na `first stage; second stage`. Obe časti tak zostanú na jednom riadku. Keď použijete bodkočiarku vnútri odpovede, medzi kartičkami ponechajte vybrané **New line**.

Ak si obe fázy zaslúžia samostatné otázky, napíšte radšej dve úplné dvojice. Pri rozhodovaní vám môže pomôcť [návod na tvorbu lepších kartičiek v angličtine](/blog/how-to-make-better-flashcards/).

## Pred zverejnením skontrolujte výsledok

Prezrite si všetky štyri skúšobné kartičky. Pri celom zozname porovnajte importované kartičky s vyčisteným zdrojom:

- Zodpovedá celkový počet kartičiek počtu úplných riadkov s údajmi?
- Zhoduje sa prvá aj posledná dvojica vrátane celých odpovedí?
- Zachovali sa interpunkcia, diakritika a kódy bez zmien?
- Nie sú niektoré strany prázdne, nie sú medzi kartičkami hlavičky či duplicity a nie sú odpovede priradené k nesprávnym pojmom?
- Dáva každá odpoveď, v ktorej ste upravovali zalomenia riadkov, stále zmysel?

Prečítajte si aj niekoľko bežných dvojíc, nielen tie podozrivé. Samotná zhoda počtu neodhalí nesprávnu odpoveď priradenú k platnému pojmu. Ak niečo nesedí, pred opakovaním importu opravte zdroj. Vyčistený súbor si ponechajte pre prípad budúcich opráv.

## Hotové dvojice alebo kartičky vytvorené AI?

Quizlet vo svojom [prehľade tvorby pomocou AI](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai) opisuje aj vytváranie kartičiek z dodaných materiálov s pomocou umelej inteligencie. Pri vygenerovanom texte treba samostatne skontrolovať obsah. Pri hotovom zozname pojmov a definícií vám štruktúrovaný import umožní skontrolovať, či sa dvojice, ktoré ste už napísali, preniesli správne.

Začínate odsekmi textu? Pred prípravou textu na import si pozrite [návod v angličtine, ako premeniť poznámky na kartičky](/blog/turn-notes-into-flashcards/). Prenášate sadu opačným smerom? Použite [návod na export z Quizletu](/sk/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
