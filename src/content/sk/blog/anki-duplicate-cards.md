---
title: "Ako nájsť duplicitné kartičky v Anki a rozhodnúť, ktoré si ponechať"
description: "Zistite, prečo v Anki vidíte rovnaké otázky. V krátkom cvičení porovnáte možné duplicity, vyberiete kópiu, ktorú si ponecháte, a overíte jej históriu opakovaní."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "duplicitné kartičky v Anki"
  - "ako nájsť duplicity v Anki"
  - "odstránenie duplicitných poznámok v Anki"
  - "duplicitné poznámky v Anki"
  - "história opakovaní v Anki"
---

Spoznávate otázku, ktorú ste už opakovali, no Anki ju zobrazuje ako novú. Možno pri importe pribudla kópia. Alebo sa vám zobrazila druhá kartička vytvorená z tej istej poznámky. Na tomto rozdiele záleží. Vymazaním riadka v prehliadači môžete odstrániť všetky kartičky danej poznámky vrátane tej, ktorú ste si chceli ponechať.

Ak chcete odstrániť **duplicitné kartičky v Anki**, najprv zistite, prečo sa otázka opakuje. Pri samostatných poznámkach použite **Notes → Find Duplicates** na vyhľadanie možných duplicít. Potom porovnajte obsah poznámok aj históriu jednotlivých kartičiek a pri každej skupine vyberte kópiu, ktorú si ponecháte. Zhoda v jednom poli vám ukáže, kde začať s kontrolou. O vymazaní rozhodnite až po porovnaní.

Postup pre počítačovú aplikáciu vychádza z dokumentácie Anki a zdrojového kódu vydanej verzie, overených 4. októbra 2026. Názvy ovládacích prvkov a príklady vyhľadávania zodpovedajú anglickému rozhraniu. Cvičenie nižšie pracuje s vymyslenými údajmi a ukazuje, aký výsledok by ste mali po vymazaní dostať.

![Člen šachového klubu porovnáva jednu svetlú vežu navyše s dvoma ošúchanými vežami na drevenej šachovnici](/blog/anki-duplicate-cards.png)

## Najprv zistite, čo sa opakuje

Poznámka obsahuje polia ako **Front** (predná strana) a **Back** (zadná strana). Anki z nej vytvára kartičky podľa šablón. Z jednej poznámky so slovíčkom môže vzniknúť kartička na rozpoznanie cudzieho slova a kartička na jeho aktívne vybavenie. Každá má vlastný plán opakovaní. Sú to sesterské kartičky. Podrobnosti nájdete v [príručke Anki o poznámkach a poliach](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

V prehliadači **Browse** prepnite na režim **Cards** a pri každom podozrivom riadku otvorte **Cards → Info**. Porovnajte identifikátory poznámok (**Note ID**). Rovnaký identifikátor znamená, že kartičky patria k jednej poznámke. Rôzne identifikátory označujú samostatné poznámky. V dotaze `nid:123` nahraďte číslo `123` skutočným identifikátorom. Tak uvidíte všetky kartičky danej poznámky bez obmedzenia na konkrétny balíček. Príručka Anki vysvetľuje [vyhľadávanie podľa identifikátorov](https://docs.ankiweb.net/searching.html#object-ids).

| Čo nájdete | Pravdepodobné vysvetlenie | Ďalší krok |
| --- | --- | --- |
| Tá istá poznámka, otázky v opačných smeroch | Sesterské kartičky vytvorené zámerne | Zvážte, či využijete obe otázky |
| Tá istá poznámka, rovnako zobrazené otázky | Možné duplicitné šablóny kartičiek | Porovnajte šablóny a náhľady kartičiek |
| Rôzne poznámky, zdanlivo rovnaké otázky | Možné duplicitné poznámky | Pred výberom kópie porovnajte celé poznámky |

Ako fungujú oba smery, vysvetľuje [návod na obrátené kartičky](/blog/anki-reverse-cards/) (v angličtine). Ak chcete jednu z dvojice prestať opakovať, [pozastavte ju](/blog/anki-bury-vs-suspend/) podľa návodu v angličtine. Kartička tak zostane v zbierke aj po vyradení z opakovania.

Ak nájdete rovnaké šablóny, postupujte podľa [návodu Anki k nadbytočným kópiám](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Odstránenie šablóny ovplyvní všetky poznámky daného typu vrátane tých v iných balíčkoch. Riešte ho samostatne ako zmenu štruktúry zbierky.

## Vyhľadajte duplicitné poznámky vo vybranej časti zbierky

Otvorte **Notes → Find Duplicates** a vyberte pole, ktoré chcete porovnať, napríklad **Front**. Anki predvolene prehľadáva všetky typy poznámok, ktoré toto pole obsahujú. Rozsah môžete nastaviť cez **Optional filter**. Potom kliknite na **Search**. Jednotlivé možnosti opisuje [príručka k funkcii Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates).

Ak sa balíček volá `Cleanup practice`, zadajte tento dotaz.

```text
deck:"Cleanup practice"
```

Vyhľadávanie v balíčku zahŕňa aj jeho podbalíčky. Ak môžu byť kópie v rôznych balíčkoch, odstráňte filter a prehľadajte celú zbierku. Aj keď v jednom balíčku nenájdete žiadnu zhodu, kópia môže byť inde. [Syntax vyhľadávania v balíčkoch podľa príručky Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Kliknite na skupinu výsledkov a prezrite si jej poznámky. Tlačidlo **Tag Duplicates** pridá štítok `duplicate` všetkým zhodným poznámkam vrátane tej, ktorú si chcete ponechať. [Zdrojový kód vydanej verzie](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py) zahŕňa každú poznámku v skupine. **Nevymazávajte všetky výsledky dotazu `tag:duplicate`.** Štítok použite na zhromaždenie možných duplicít a nepotrebné poznámky vyberte jednotlivo.

Vyhľadávanie porovnáva obsah zvoleného poľa. Či sa dve otázky pýtajú na to isté, posúďte sami. Otázky s odlišným znením možno budete musieť vyhľadať ručne. Aj rovnako znejúce otázky môžu byť z rôznych jazykov alebo kurzov.

## Vyskúšajte si tri rozhodnutia na papieri

Predstavte si šesť poznámok v balíčku `Cleanup practice` bez podbalíčkov. Poznámky A a B používajú nezmenené šablóny typu **Basic (and reversed card)**, takže z každej vzniknú dve kartičky. Poznámky C až F používajú typ **Basic** a z každej vznikne jedna kartička. Všetkých osem kartičiek je v tom istom balíčku. Písmená slúžia len na označenie v tomto príklade. V Anki sú identifikátory poznámok aj kartičiek číselné.

| Poznámky | Predná → zadná strana | Vymyslené údaje o učení | Rozhodnutie |
| --- | --- | --- | --- |
| A a B | `le vélo` → `bicycle` | A má 12 opakovaní kartičky na rozpoznanie slova a 3 opakovania kartičky na jeho vybavenie. Obe kartičky B sú nové. | Ponechajte A. Ako prvú zvážte vymazanie poznámky B. |
| C a D | `Chemical symbol for silver?` → `Ag` | C má 20 opakovaní a D má 6. | Porovnajte obe histórie a vyberte kartičku, ktorú budete ďalej opakovať. |
| E a F | E: `bank` → `financial institution`, F: `bank` → `side of a river` | Otázky sa týkajú rôznych významov. | Ponechajte obe a doplňte do otázok kontext. |

Vyhľadávanie v poli **Front** môže zoskupiť všetky tri dvojice. Len pri prvej sa dá rozhodnúť pomerne ľahko. Skôr než B vyhodnotíte ako nadbytočnú, porovnajte **každé pole**, médiá, štítky, typ poznámky a to, ako vyzerajú kartičky v oboch smeroch. B môže napríklad obsahovať nahrávku výslovnosti, ktorá v A chýba, alebo vytvárať otázku, ktorú A nemá.

Ak sa z oboch kópií učíte to isté, skopírujte užitočný obsah do poznámky, ktorú si ponecháte, a výsledok skontrolujte v náhľade. Preneste aj užitočné štítky z poznámky, z ktorej kopírujete. Ak chcete skúšať iné učivo, vytvorte novú otázku. História pôvodnej kartičky patrí k pôvodnému učivu.

Pri C a D berte počet opakovaní ako pomôcku pri rozhodovaní. Pri oboch kartičkách si pozrite dátumy a hodnotenia jednotlivých opakovaní, aktuálny interval aj termín ďalšieho opakovania. Kartička s vyšším počtom opakovaní sa vám možno len častejšie vracala na opätovné učenie. Overte, či sú otázka aj odpoveď užitočné, a potom vyberte kartičku, na ktorej históriu chcete nadviazať. Ak si odpovede odporujú, najprv si overte zdroj učiva. Počet opakovaní správnosť odpovede neurčuje.

Ak ponecháte C a vymažete D, **ich histórie sa nezlúčia**. Pri ďalšom opakovaní kartičky C Anki vychádza z jej doterajšieho stavu. V okne [Card Info](https://docs.ankiweb.net/stats.html#card-info) zobrazuje Anki históriu každej kartičky zvlášť. Záznamy opakovaní vymazaných poznámok zostanú v štatistikách celej zbierky, no zo štatistík jednotlivých balíčkov zmiznú. Kartička, ktorú si ponecháte, tieto záznamy nepreberie. Pozrite si [vysvetlenie štatistík vymazaných poznámok v príručke](https://docs.ankiweb.net/stats.html#more).

Ak si ešte nie ste istí, mazanie odložte. Zapíšte si, čo treba skontrolovať, a podľa potreby sporné kartičky počas kontroly pozastavte.

## Vymažte jednu overenú kópiu a skontrolujte výsledok

Pred mazaním vo svojej zbierke synchronizujte najprv ostatné zariadenia a potom Anki v počítači. Tak sa do zbierky v počítači dostanú aj vaše posledné zmeny. Postup vysvetľuje [príručka Anki k synchronizácii](https://docs.ankiweb.net/syncing.html). Cez **File → Export** uložte **Anki Collection Package (`.colpkg`)** so zapnutou voľbou **Include Media**. Súbor obsahuje všetky balíčky, ich plán opakovaní aj históriu. Zálohu bezpečne uschovajte. Import tejto zálohy prepíše aktuálnu zbierku v otvorenom profile. [Dokumentácia k exportu zbierky](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Ak si chcete mazanie najprv vyskúšať, cez **File → Switch Profile** vytvorte samostatný profil a importujte zálohu doň. Skúšobný profil nepripájajte k AnkiWebu. [Každý profil má vlastnú zbierku](https://docs.ankiweb.net/profiles.html). Ak oba pripojíte k tomu istému účtu, jedna zbierka môže prepísať druhú. Čo sa zálohuje a čo sa pri importe nahradí, vysvetľuje [porovnanie formátov APKG a COLPKG](/blog/anki-apkg-vs-colpkg/) (v angličtine).

V cvičení označte kartičku A na rozpoznanie slova ako A1 a kartičku A na jeho vybavenie ako A2. Zodpovedajúce kartičky poznámky B označte B1 a B2. V **Cards → Info** si pri oboch kartičkách A zapíšte skutočné identifikátory (**Card ID**), termíny ďalších opakovaní, intervaly a niekoľko záznamov, podľa ktorých ich históriu spoznáte. Zapíšte si aj identifikátor poznámky B. Stav pred zmenou a po nej porovnajte v tej istej relácii. Medzitým kartičky žiadnej z kópií neopakujte ani im nemeňte plán opakovaní.

Duplicitné poznámky v Anki mažte po jednej.

1. V prehliadači **Browse** nahraďte aktuálny dotaz vyhľadávaním `nid:` so skutočným identifikátorom poznámky B. V režime **Cards** skontrolujte každý výsledok a zobrazte si náhľad oboch smerov. Keď pracujete s vlastnou zbierkou, hľadajte aj sesterské kartičky v iných balíčkoch. Filter balíčka pri tomto vyhľadávaní vynechajte.
2. Prepnite na režim **Notes**. Overte, že jediným výsledkom je nepotrebná poznámka B. Vyberte iba ju a zvoľte **Notes → Delete**. Príkaz [Delete](https://docs.ankiweb.net/browsing.html#notes) odstráni vybranú poznámku aj všetky jej kartičky, aj keď ho použijete z jediného riadka v režime **Cards**.
3. Zopakujte vyhľadávanie podľa identifikátora poznámky B a overte, že už nemá výsledky. Zadaním `cid:` vyhľadajte zaznamenané identifikátory kartičiek A oddelené čiarkou. Pri oboch kartičkách porovnajte údaje v **Info** s tým, čo ste si zapísali.
4. Vyhľadajte `deck:"Cleanup practice"` a porovnajte počet riadkov v režimoch **Notes** a **Cards**. Zostávajúce poznámky skontrolujte podľa tabuľky nižšie.

Po vymazaní samotnej poznámky B by mali kontroly dopadnúť takto.

| Čo skontrolovať | Pred vymazaním | Očakávaný stav po vymazaní |
| --- | --- | --- |
| Celý cvičný balíček | 6 poznámok / 8 kartičiek | 5 poznámok / 6 kartičiek |
| Dvojica poznámok o bicykli | A1, A2, B1, B2 | Iba A1 a A2 |
| Identifikátory kartičiek A, termíny, intervaly a história | Hodnoty, ktoré ste si zapísali | Rovnaké kartičky, plán opakovaní a záznamy v histórii |
| Vyhľadávanie podľa identifikátora poznámky B | Dve kartičky B | Žiadne výsledky |
| Poznámky o striebre a výraze bank | C, D, E, F | Zostanú všetky štyri poznámky |

Vymazaním jednej poznámky v tomto príklade zmiznú dve kartičky. Ak by ste namiesto B vymazali A, počty by vyšli rovnako, no prišli by ste o kartičky, ktoré ste už opakovali a chceli si ponechať. Kontrolujte preto počty aj identifikátory. Pri mazaní duplicít nevynulujte ani nemeňte plán opakovaní kartičiek, ktoré si ponechávate.

Graf opakovaní celej zbierky môže stále zahŕňať aj opakovania vymazaných kartičiek. Zachovaný pokrok si overte podľa identifikátora a údajov v **Info** pri kartičke, ktorá zostala.

Keď výsledok pri prvej skupine sedí s tabuľkou, prejdite na ďalšiu a znovu vyberte, čo si ponecháte. Ak ste si mazanie vyskúšali na kópii, overený postup zopakujte vo svojom bežnom profile. Po kontrole zbierky synchronizujte najprv počítač. Ostatné zariadenia synchronizujte skôr, než na nich začnete opakovať. Ak kópie vznikli pri importe, pred ďalším importom si prečítajte [návod na aktualizáciu poznámok z CSV](/blog/anki-csv-update-existing-notes/) (v angličtine). Ak ste poznámku kopírovali, aby patrila do viacerých tém, [označte ju viacerými štítkami](/blog/anki-tags-vs-decks/) (návod v angličtine). Tak vám stačí jedna história učenia.
