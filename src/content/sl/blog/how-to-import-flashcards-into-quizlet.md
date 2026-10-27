---
title: "Kako uvoziti učne kartice v Quizlet iz Excela, Google Preglednic ali besedila"
description: "Uvozite seznam besed v dveh stolpcih v Quizlet, izberite tabulatorje in nove vrstice ter pred objavo odpravite razdeljene definicije, odvečne kartice in težave s CSV."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "kako uvoziti učne kartice v Quizlet"
  - "oblika za uvoz v Quizlet"
  - "uvoz v Quizlet iz Excela"
  - "iz Google Preglednic v Quizlet"
  - "uvoz v Quizlet s tabulatorji"
---

»Red, green, blue« je videti kot običajen odgovor na učni kartici. Če pa z vejicami ločujete izraz od definicije, te iste vejice povzročijo, da vrstica ni več enoznačna. Zaradi nekaj ločil boste morali pripravljen seznam besed še dodatno popravljati.

Za uvoz učnih kartic v Quizlet iz Excela, Google Preglednic ali besedila začnite z dvema stolpcema: enim za izraze in drugim za definicije. Podatke kopirajte, jih prilepite v obrazec za uvoz na spletnem mestu ter za ločevanje polj izberite tabulatorje, za ločevanje kartic pa nove vrstice. Najprej poskusite s štirimi vrsticami, da boste lahko pregledali vsak par, preden prenesete celoten seznam.

![Lončar razporeja keramične skodelice z ustreznimi krožnički v ločene vrste, preden jih prenese na polico](/blog/how-to-import-flashcards-into-quizlet.png)

## Kje najdete Quizletov obrazec za uvoz

Quizlet v navodilih opisuje uvoz na svojem spletnem mestu, pri katerem polja ločujejo vejice, tabulatorji ali vezaji, kartice pa podpičja ali nove vrstice. [Uradna navodila za uvoz](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) navajajo naslednje zaporedje:

1. Prijavite se in izberite **Create → Flashcard set** (Ustvari → Zbirka učnih kartic).
2. Vnesite naslov, izberite **Import** (Uvoz) in prilepite besedilo.
3. Nastavitve ločil prilagodite svojemu besedilu. Za primere v tem članku uporabite **Tab** (Tabulator) in **New line** (Nova vrstica).
4. Izberite **Import**, nato določite jezika izrazov in definicij.
5. Preglejte kartice, preden izberete **Create**, s čimer zbirko shranite in objavite.

Navodila so bila preverjena 15. septembra 2026. Spodnji primeri pojasnjujejo, kako pripraviti in pregledati besedilo; ne opisujejo preizkusa v prijavljenem računu.

## Začnite z majhnim obsegom celic v preglednici

V Excelu ali Google Preglednicah v vsako vrstico vnesite en par izraza in definicije. Za poskus uporabite te štiri kartice:

| Izraz | Definicija |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Kopirajte samo štiri podatkovne vrstice v obeh stolpcih. Če sta glavi stolpcev v prvi vrstici, izberite **A2:B5**. Glavi izpustite iz kopiranega obsega.

Pričakovani rezultat so štiri kartice s španskimi izrazi in angleškimi definicijami. Na zadnji kartici mora »colores primarios de la luz« ostati skupaj na eni strani, »red, green, blue« pa skupaj na drugi. Vejice so del odgovora.

Ko razumete ta primer, pripravite svojo preglednico. Delajte v kopiji, da boste izvirnik ohranili za primerjavo. Odstranite prazne vrstice ter iz izbora izključite opombe in dodatne stolpce. Pred kopiranjem dopolnite manjkajoče izraze ali definicije.

Pri razvrščanju vedno ohranite oba stolpca skupaj. Če bi razvrstili samo izraze, bi jih ločili od pripadajočih odgovorov. Tako bi lahko uvoz vseboval napačne pare, čeprav bi bilo število kartic pravilno.

## Oblika navadnega besedila uporablja prave tabulatorje

Iste štiri vrstice so kot besedilo, ločeno s tabulatorji, videti takole. Med vsakim izrazom in njegovo definicijo je en dejanski tabulator:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tabulator je poseben znak. Več presledkov je lahko na videz podobnih, vendar ne označujejo meje, določene s tabulatorjem. Tudi vnos znakov `\t` ne vstavi tabulatorja. Če vam urejevalnik besedila to otežuje, pare vnesite v dva stolpca preglednice in kopirajte celice.

Vsaka kartica mora biti v eni dejanski vrstici besedila. Dolga definicija se lahko zaradi ozkega okna na zaslonu prelomi v drugo vrstico; to v vsebino ne doda preloma vrstice. Prelom, vstavljen znotraj celice preglednice, pa ga doda. Te notranje prelome odstranite, preden za ločevanje kartic uporabite nove vrstice.

Odstranite tudi vse tabulatorje znotraj izraza ali definicije. Pri tej obliki sodijo tabulatorji samo med obe polji.

## Če je vaš seznam v datoteki CSV

Pred pripravo uvoza odprite CSV v preglednici. Takšen zapis CSV ima ob upoštevanju pravil za narekovaje dve polji:

```text
"colores primarios de la luz","red, green, blue"
```

Odgovor v narekovajih vsebuje vejice. Besedilno polje, ki vnos razdeli po vejicah, ni nujno bralnik CSV, zato se tam ne zanašajte na to, da bodo narekovaji ohranili odgovor skupaj.

V Excelu ali Google Preglednicah preverite, ali zapis zaseda natanko dve celici. Nato celici kopirajte za vnos, ločen s tabulatorjem. Če se je odgovor razdelil v dodatne stolpce, najprej popravite nastavitve uvoza CSV v preglednici. S kopiranjem napačno razdeljene vrstice bi napako samo prenesli naprej.

Preverite tudi vrednosti, ki bi jih preglednica lahko samodejno pretvorila. Če je `0012` koda, ki se je morate naučiti, se s pretvorbo v `12` spremeni tudi vsebina kartice. Pred kopiranjem obsega primerjajte identifikatorje, datume, narekovaje in besede z naglasnimi znamenji z izvirno datoteko.

## Ko se kartice ne ujemajo z vrsticami

S poskusnim uvozom poiščite prvo neujemanje. Spreminjajte po eno stvar naenkrat, nato pa rezultat primerjajte z istimi štirimi izvornimi vrsticami.

| Težava | Verjetna težava z ločili | Kaj spremeniti |
| --- | --- | --- |
| Odgovor se razdeli pri vejicah | Za ločevanje polj je izbrana vejica | Pripravite dva stolpca in izberite Tab |
| Izraz »well-being« se razdeli pri vezaju | Za ločevanje polj je izbran vezaj | Ohranite vezaj, polji pa ločite s tabulatorjem |
| Iz enega odgovora nastane več kartic | Notranji prelomi vrstic v izvornih podatkih | Odgovor zapišite v eno dejansko vrstico |
| »Term« in »Definition« se pojavita kot kartica | Kopirana je vrstica z glavama stolpcev | Izberite samo podatkovne vrstice |
| Obe polji ostaneta na isti strani | Namesto tabulatorja so uporabljeni presledki | Kopirajte obseg iz dveh stolpcev preglednice |

Odgovor, v katerem sta na primer »first stage« in »second stage« v ločenih vrsticah, lahko spremenite v `first stage; second stage`. Tako oba dela ostaneta v eni vrstici. Če znotraj odgovora uporabite podpičje, za ločevanje kartic ohranite izbrano možnost **New line**.

Če je vsaka od teh dveh faz vredna svojega vprašanja, namesto tega napišite dva popolna para. Pri tej odločitvi vam lahko pomaga [vodnik za izdelavo boljših učnih kartic (v angleščini)](/blog/how-to-make-better-flashcards/).

## Pred objavo preverite rezultat

Preglejte vse štiri poskusne kartice. Pri celotnem seznamu primerjajte uvožene kartice s prečiščenim virom:

- Ali se skupno število ujema s številom popolnih podatkovnih vrstic?
- Ali se prvi in zadnji par ujemata z virom, vključno s celotnima odgovoroma?
- Ali so ločila, naglasna znamenja in kode ostali nespremenjeni?
- Ali so med karticami prazne strani, glave stolpcev, podvojene kartice ali odgovori, povezani z napačnimi izrazi?
- Ali je vsak odgovor, v katerem ste uredili prelome vrstic, še vedno smiseln?

Poleg sumljivih preberite tudi več običajnih parov. Samo ujemanje števila kartic ne bo razkrilo napačnega odgovora, povezanega z veljavnim izrazom. Če kaj ni v redu, pred ponovnim uvozom popravite vir. Prečiščeno datoteko shranite za prihodnje popravke.

## Že napisani pari ali kartice, ustvarjene z umetno inteligenco?

Quizlet v svojem [pregledu ustvarjanja z umetno inteligenco](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai) opisuje tudi izdelavo kartic iz priloženega gradiva s pomočjo umetne inteligence. Ustvarjeno besedilo zahteva ločen vsebinski pregled. Pri že dokončanem seznamu izrazov in definicij vam strukturirani uvoz omogoča, da prenos preverite glede na pare, ki ste jih že napisali.

Začenjate z odstavki? Pred pripravo besedila za uvoz [pretvorite svoje zapiske v učne kartice (vodnik v angleščini)](/blog/turn-notes-into-flashcards/). Prenašate zbirko v nasprotni smeri? Uporabite [vodnik za izvoz iz Quizleta](/sl/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
