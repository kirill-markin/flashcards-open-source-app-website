---
title: "Kuidas importida õpikaarte Quizletisse Excelist, Google Sheetsist või tekstist"
description: "Impordi kaheveeruline sõnaloend Quizletisse, vali tabeldusmärgid ja reavahetused ning paranda enne avaldamist poolitatud vastused, liigsed kaardid ja CSV-vead."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "õpikaartide importimine Quizletisse"
  - "Quizleti impordivorming"
  - "Quizletisse importimine Excelist"
  - "Google Sheetsist Quizletisse"
  - "Quizleti import tabeldusmärkidega"
---

„Red, green, blue” tundub tavalise õpikaardi vastusena. Kui aga kasutad mõiste ja selle selgituse eraldamiseks komasid, muudavad samad komad rea mitmeti tõlgendatavaks. Mõne kirjavahemärgi tõttu võib valmis sõnaloend vajada hoopis parandamist.

Õpikaartide importimiseks Quizletisse Excelist, Google Sheetsist või tekstist alusta kahest veerust: üks mõistete ja teine selgituste jaoks. Kopeeri andmed, kleebi need veebisaidi impordivormi ning vali väljade eraldajaks tabeldusmärk ja kaartide eraldajaks reavahetus. Proovi esmalt nelja reaga, et saaksid enne kogu loendi ülekandmist iga paari üle vaadata.

![Pottsepp seab keraamilised tassid koos sobivate alustassidega eraldi ridadesse, enne kui need riiulile tõstab](/blog/how-to-import-flashcards-into-quizlet.png)

## Kust leida Quizleti impordivorm

Quizleti veebisaidi juhend kirjeldab importimist, kus välju eraldavad komad, tabeldusmärgid või sidekriipsud ning kaarte semikoolonid või reavahetused. [Ametlik impordijuhend](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) annab järgmised sammud:

1. Logi sisse ja vali **Create → Flashcard set** (Loo → Õpikaartide komplekt).
2. Sisesta pealkiri, vali **Import** (Impordi) ja kleebi tekst.
3. Vali sisendile vastavad eraldajad. Siinsete näidete puhul kasuta valikuid **Tab** (Tabeldusmärk) ja **New line** (Reavahetus).
4. Vali **Import** ning seejärel mõistete ja selgituste keel.
5. Vaata kaardid üle, enne kui valid komplekti salvestamiseks ja avaldamiseks **Create** (Loo).

Juhendit kontrolliti 15. septembril 2026. Allolevad näited selgitavad teksti ettevalmistamist ja kontrollimist; need ei kirjelda sisselogitud kontoga tehtud testi.

## Alusta väikesest tabelivahemikust

Pane Excelis või Google Sheetsis iga mõiste ja selle selgitus ühele reale. Siin on nelja kaardiga proov:

| Mõiste | Selgitus |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Kopeeri kahest veerust ainult neli andmerida. Kui veerupäised on 1. real, vali **A2:B5**. Jäta päised kopeeritavast vahemikust välja.

Tulemuseks peaks olema neli kaarti, mille mõisted on hispaania ja selgitused inglise keeles. Viimasel kaardil peab „colores primarios de la luz” jääma tervikuna ühele ja „red, green, blue” teisele poolele. Komad kuuluvad vastuse juurde.

Kui see näide on selge, valmista ette oma tabel. Tööta koopiaga, et originaal jääks võrdlemiseks alles. Eemalda tühjad read ning jäta märkused ja lisaveerud valikust välja. Lisa enne kopeerimist kõik puuduvad mõisted ja selgitused.

Hoia sortimisel kaks veergu koos. Kui sordid ainult mõisteid, lähevad need vastustest lahku. Imporditud komplekt võib sisaldada valesid paare ka siis, kui kaartide arv on õige.

## Lihttekstis on vaja päris tabeldusmärke

Samad neli rida näevad tabeldusmärkidega eraldatud tekstina välja nii. Mõistet ja selle selgitust eraldab igal real üks päris tabeldusmärk:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tabeldusmärk on konkreetne märk. Mitu tühikut võivad paista sarnased, kuid need ei toimi tabeldusmärgina. Ka märkide `\t` sisestamine ei lisa tabeldusmärki. Kui tekstiredaktoris on seda keeruline teha, pane paarid tabeli kahte veergu ja kopeeri need lahtrid.

Iga kaart peab paiknema ühel tegelikul tekstireal. Pikk selgitus võib kitsa akna tõttu kuvamisel järgmisele reale murduda, kuid see ei lisa sisusse reavahetust. Kui aga sisestad reavahetuse tabelilahtrisse, jääb see ka sisusse alles. Eemalda sellised lahtrisisesed reavahetused, enne kui kasutad reavahetusi kaartide eraldamiseks.

Eemalda ka kõik mõiste või selgituse sees olevad tabeldusmärgid. Selles vormingus kuuluvad tabeldusmärgid ainult kahe välja vahele.

## Kui loend on CSV-failis

Enne impordi ettevalmistamist ava CSV tabelarvutusprogrammis. Sellises CSV-kirjes on jutumärkide kasutamise reeglite järgi kaks välja:

```text
"colores primarios de la luz","red, green, blue"
```

Jutumärkides vastus sisaldab komasid. Komade järgi sisendit tükeldav tekstiväli ei pruugi olla CSV-lugeja, seega ära looda seal vastuse kooshoidmiseks jutumärkidele.

Kontrolli Excelis või Google Sheetsis, et kirje paikneks täpselt kahes lahtris. Seejärel kopeeri lahtrid, et saada tabeldusmärkidega eraldatud sisend. Kui vastus on jagunenud lisaveergudesse, paranda esmalt tabelarvutusprogrammi CSV importimise seadeid. Vigase rea kopeerimine kannab vea edasi.

Kontrolli ka väärtusi, mida tabelarvutusprogramm võib ümber tõlgendada. Kui `0012` on kood, mida pead õppima, muudab selle teisendamine kujule `12` kaardi sisu. Enne vahemiku kopeerimist võrdle tunnuseid, kuupäevi, jutumärke ja diakriitiliste märkidega sõnu algfailiga.

## Kui kaardid ei vasta tabeliridadele

Leia väikese prooviga esimene lahknevus. Muuda korraga üht asja ja võrdle tulemust siis sama nelja lähtereaga.

| Probleem | Tõenäoline põhjus | Mida muuta |
| --- | --- | --- |
| Vastus jaguneb komade juurest osadeks | Väljade eraldajaks on valitud koma | Valmista ette kaks veergu ja vali Tab |
| „well-being” jaguneb mõiste seest pooleks | Väljade eraldajaks on valitud sidekriips | Säilita sidekriips ja eralda väljad tabeldusmärgiga |
| Ühest vastusest saab mitu kaarti | Lähteandmetes on lahtrisisesed reavahetused | Pane vastus ühele tegelikule tekstireale |
| „Mõiste” ja „Selgitus” ilmuvad kaardina | Kopeeritud on ka päiserida | Vali ainult andmeread |
| Mõlemad väljad jäävad samale poolele | Tabeldusmärgi asemel on tühikud | Kopeeri tabelist kaheveeruline vahemik |

Näiteks vastuse, milles „first stage” ja „second stage” on eraldi ridadel, võib muuta kujule `first stage; second stage`. Nii jäävad mõlemad osad ühele reale. Kui kasutad vastuse sees semikoolonit, jäta kaartide eraldajaks **New line**.

Kui need kaks etappi väärivad eraldi küsimusi, kirjuta selle asemel kaks täielikku paari. Otsustamisel aitab [paremate õpikaartide koostamise juhend (inglise keeles)](/blog/how-to-make-better-flashcards/).

## Kontrolli tulemust enne avaldamist

Vaata üle kõik neli proovikaarti. Kogu loendi puhul võrdle imporditud kaarte korrastatud lähteandmetega:

- Kas koguarv vastab täielike andmeridade arvule?
- Kas esimene ja viimane paar klapivad, sealhulgas nende täielikud vastused?
- Kas kirjavahemärgid, diakriitilised märgid ja koodid jäid muutumatuks?
- Kas leidub tühje kaardipooli, päiseid, duplikaate või valede mõistetega seotud vastuseid?
- Kas iga vastus, mille reavahetusi muutsid, on endiselt mõistetav?

Loe kahtlaste paaride kõrval ka mitut tavalist paari. Ainuüksi klappiv kaartide arv ei paljasta vale vastust, mis on seotud õige mõistega. Kui miski ei klapi, paranda enne uut importimist lähteandmed. Hoia korrastatud fail alles tulevaste paranduste jaoks.

## Valmis paarid või tehisaru loodud kaardid?

Quizlet kirjeldab ka kaartide loomist tehisaru abil etteantud materjalist oma [tehisaruga kaartide loomise ülevaates](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Loodud sõnastus vajab eraldi sisulist ülevaatust. Valmis mõistete ja selgituste loendi puhul võimaldab struktureeritud import kontrollida, kas sinu kirjutatud paarid kandusid õigesti üle.

Alustad tekstilõikudest? [Muuda märkmed õpikaartideks (inglise keeles)](/blog/turn-notes-into-flashcards/), enne kui imporditeksti ette valmistad. Viid komplekti hoopis Quizletist välja? Kasuta [Quizleti ekspordijuhendit](/et/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
