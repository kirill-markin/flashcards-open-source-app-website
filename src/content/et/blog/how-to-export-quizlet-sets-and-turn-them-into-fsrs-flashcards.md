---
title: "Kuidas eksportida Quizleti komplekte 2026. aastal (ja miks ekspordinupp puudub)"
description: "Ekspordi Quizleti komplekt veebisaidi praeguste juhiste järgi. Kui ekspordinupp puudub, kontrolli, kas oled komplekti autor, tegid koopia või kasutad mobiiliäppi."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "kuidas Quizletist eksportida"
  - "kuidas eksportida Quizleti õpikaarte"
  - "Quizleti ekspordinupp puudub"
  - "Quizleti õpikaartide allalaadimine"
  - "Quizletist CSV-failiks"
  - "Quizletist Ankisse"
---

Kui Quizletis puudub nupp **Export**, kontrolli esmalt kahte asja: kas lõid algse komplekti ise ja kas kasutad Quizleti veebisaiti? Quizlet lubab eksportida ainult komplekti algsel autoril ning see funktsioon töötab ainult veebisaidil. Kopeeritud komplekti eksportida ei saa, isegi kui koopia on nüüd sinu kogus.

Kui sul on ekspordiõigus, käib eksport kiiresti: ava komplekt veebisaidil, vali **More → Export**, määra terminite ja definitsioonide paigutus ning vali **Copy text**. Quizlet ei laadi kaardipaki faili alla. See kopeerib teksti lõikelauale, ilma piltideta.

**Faktid kontrollitud:** 30. augustil 2026 [Quizleti ametliku ekspordijuhendi](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) põhjal.

![Arhiivitöötaja võrdleb omandit tõendavaid märke enne tekstikaartide paaride üleandmist; kaks dokumenditaskut on valmis ja fotod jäävad klaasi taha](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Kas ekspordinupp peaks üldse nähtaval olema?

Kontrolli seda enne, kui proovid Quizleti õpikaarte mõnel muul viisil alla laadida:

| Sinu olukord | Kas Export peaks olema saadaval? | Järgmine samm |
| --- | --- | --- |
| Lõid algse komplekti ise ja avasid selle Quizleti veebisaidil | Jah, Quizleti abilehe järgi | Järgi allolevaid samme |
| Kasutad iOS-i või Androidi äppi | Ei; eksport töötab ainult veebisaidil | Ava Quizlet veebibrauseris ja logi sisse |
| Kopeerisid teise kasutaja komplekti | Ei; Quizleti sõnul ei saa kopeeritud komplekte eksportida | Ära eelda, et koopia annab juurdepääsu ekspordile |
| Saad komplekti vaadata, kuid ei loonud seda ise | Ei; vaatamisõigus ei tee sind komplekti autoriks | Küsi autorilt lähtefaili või loo komplekt uuesti materjalist, mida tohid kasutada |

Kui lõid algse komplekti ise, kuid Quizleti ekspordinupp ikkagi puudub, veendu, et oled sisse logitud komplekti omavale kontole ja avasid originaali, mitte koopia. Quizleti abileht ei kirjelda teist ekspordivõimalust. Sel juhul võta ühendust Quizleti kasutajatoega, selle asemel et usaldada allalaadimistööriista, mis väidab, et suudab piirangust mööda minna.

## Kuidas eksportida Quizleti õpikaarte veebisaidil

Enda loodud komplekti puhul:

1. Logi Quizleti veebisaidil sisse.
2. Vali **Your library** (sinu kogu).
3. Vali **Flashcard sets** (õpikaartide komplektid).
4. Ava komplekt, mida soovid eksportida.
5. Ava menüü **More** (rohkem).
6. Vali **Export** (eksport).
7. Vali, kuidas terminid ja definitsioonid paigutada.
8. Vali **Copy text** (kopeeri tekst).
9. Kleebi tulemus lihttekstiredaktorisse.

See on kogu praegune töövoog. Lõpus eraldi allalaadimisnuppu ei ole.

Tavaliste kahepoolsete kaartide puhul soovitan termini ja definitsiooni vahele tabeldusmärki ning iga kaardi jaoks uut rida. See eraldaja valik on praktiline soovitus, mitte Quizleti nõue. Tabeldusmärke on tavaliselt lihtsam kontrollida kui komasid, sest komasid esineb tavalistes definitsioonides nii sageli.

Korrektne kahe kaardiga fail näeks välja nii, iga rea keskel üks tabeldusmärk:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Mida Quizleti eksport säilitab

Quizlet kirjeldab seda funktsiooni kitsalt: see ekspordib autori enda komplekti **terminid ja definitsioonid**. Samuti ütleb Quizlet, et pilte eksportida ei saa.

Kõige kindlam on lähtuda kleebitud tulemusest. Kui tekst, eraldaja või reavahetus seal esineb, saad selle faili salvestada. Quizleti abileht ei luba üle kanda kaustu, õpperežiime, vormindust, õpitu omandamise taset, kordamiste ajalugu ega kordamisgraafikut.

Seega on tegu kaarditeksti koopiaga, mitte taastatava Quizleti varukoopiaga. Sama vahe on oluline ka siis, kui otsisid „Quizleti õpikaartide allalaadimist”: Quizlet kopeerib teksti lõikelauale ja faili lood ise.

## Salvesta enne korrastamist muutmata UTF-8 koopia

Tee nii, et saaksid vajaduse korral algseisu juurde tagasi tulla:

1. Kleebi eksport lihttekstiredaktorisse.
2. Salvesta see UTF-8 kodeeringus, näiteks nimega `biology-quizlet-raw.txt`.
3. Tee sellest koopia nimega `biology-quizlet-working.txt`.
4. Jäta algfail puutumata ja muuda ainult töökoopiat.

Enne tööfaili importimist kontrolli seda, hoides Quizleti komplekti veel avatuna:

- Lülita sisse nähtamatute märkide kuvamine ning kontrolli tabeldusmärkide ja reavahetuste asukohti.
- Otsi valitud eraldajat terminite ja definitsioonide seest. Üleliigne tabeldusmärk võib tekitada ootamatu kolmanda välja.
- Otsi definitsioone, mis sisaldavad reavahetusi; neid võidakse pidada lisakaartideks.
- Võrdle faili algust, keskosa ja lõppu Quizletiga, sealhulgas kõige pikemaid definitsioone.
- Sulge fail ja ava see uuesti, seejärel kontrolli diakriitilisi märke, mitteladina kirjas teksti, sümboleid ja tüpograafilisi kirjavahemärke.
- Märgi tühjad väljad, duplikaadid ja ebakorrapärased read eraldi ära, selle asemel et vaikselt oletada, kuidas neid parandada.

Võrdle ridade arvu kaartide arvuga ainult siis, kui iga kaart võtab täpselt ühe rea. Mitmerealiste definitsioonide puhul see lihtne kontroll ei tööta.

Hoia algfail alles ka pärast seda, kui töökoopia paistab korras. Kui import nihutab mõne välja paigast või jätab sisu välja, on sul muutmata võrdlusalus olemas.

## Quizletist CSV-failiks: loo fail läbimõeldult

Faili laiendi muutmine `.txt`-st `.csv`-ks ei teisenda faili. CSV vajab ühtseid eraldajaid ning komasid, jutumärke ja mitmerealist sisu sisaldavate väljade korrektset jutumärkidesse paigutamist.

Quizleti andmetest CSV-faili turvaliseks loomiseks:

1. Jäta algteksti varukoopia puutumata.
2. Ava töökoopia tabelarvutusprogrammis ja vali täpselt sama eraldaja, mida kasutasid Quizletis.
3. Veendu, et igal eeldatud kirjel on kaks veergu: termin ja definitsioon.
4. Kontrolli jutumärke, eraldajaid ja mitmerealisi definitsioone.
5. Ekspordi UTF-8 kodeeringus CSV-failina.
6. Ava CSV enne mujal kasutamist uues eelvaates.

Tabelarvutusprogramm saab lisada CSV jaoks vajalikud jutumärgid. Kõigi tabeldusmärkide asendamine komadega seda usaldusväärselt ei tee.

## Kasuta teksti Nibomos kaardimustandite loomiseks ja vaata need üle

[Nibomol](/et/features/) ei ole otsest Quizleti importijat. Veebirakenduses kasutatakse TXT- või CSV-manust tehisintellekti abil kaartide mustandite loomiseks, mitte kadudeta ülekandmiseks.

1. Hoia Quizleti algfail väljaspool rakendust alles.
2. Lisa korrastatud TXT või läbimõeldult koostatud CSV manusena Nibomo tehisintellektivestlusse.
3. Ütle assistendile, millist eraldajat ja milliseid välju fail kasutab.
4. Palu väikest eelvaadet ja ütle selgesõnaliselt, et kaarte veel ei salvestataks.
5. Võrdle pakutud kaartide arvu ning esi- ja tagakülgi tööfailiga.
6. Salvesta ainult need kaardid, mille oled üle vaadanud.

[Alustamisjuhend](/docs/getting-started/) kirjeldab tehisintellektivestluse kasutamist tööruumi andmete ja failimanustega. Ettevaatlikult sõnastatud juhis võiks olla selline:

> Loe seda faili tabeldusmärgiga eraldatud termini ja definitsiooni paaridena. Ära veel kaarte salvesta. Koosta väike näidis, säilita lähteteksti sõnastus ja mitteladina kirjamärgid ning loetle vigased, tühjad või mitmeti mõistetavad read eraldi, selle asemel et oletada.

Sellest võib abi olla, kui vanad kaardid vajavad ka korrastamist. See ei tõesta, et iga rida kandus õigesti üle. Kasuta artikli [Kuidas parandada tehisintellekti loodud õpikaarte](/blog/how-to-fix-ai-flashcards/) kontrollnimekirja ja proovi enne ülejäänute loomist väikest kaardipakki.

Nibomos loodud kaardid alustavad uue õppimisajalooga. Quizleti tekst ei sisalda kordamissündmusi ega kordamisgraafiku olekut, mida oleks vaja vana järjekorra jätkamiseks.

> **Läbipaistvuse huvides:** ma arendan Nibomot. See töövoog kirjeldab toote praeguseid piiranguid ega väida täielikku ühilduvust Quizletiga.

## Quizletist Ankisse: kasuta Anki tekstiimportijat

Anki toetab [ametliku teksti importimise juhendi](https://docs.ankiweb.net/importing/text-files.html) järgi UTF-8 kodeeringus lihttekstifaile, mille väljad on eraldatud komade, semikoolonite või tabeldusmärkidega.

Tabeldusmärgiga eraldatud töökoopia puhul:

1. Ava Anki importimisvaade ja vali UTF-8 tekstifail.
2. Veendu eelvaates, et Anki tuvastas tabeldusmärgi; kui ei tuvastanud, muuda eraldaja seadistust.
3. Vali märkme tüüp ja sihtpakk.
4. Määra esimene väli esiküljele ja teine tagaküljele.
5. Kontrolli eelvaates, kas leidub tühje, paigast nihkunud või üleliigseid välju.
6. Vaata enne importimist üle duplikaatide ja uuendamise seadistus.

Anki määrab eeldatava väljade arvu esimese rea järgi, mis ei ole kommentaar. Hilisemates kirjetes jäävad puuduvad väljad tühjaks ja üleliigseid välju ei impordita. Seetõttu on eelvaade oluline, eriti kui üks juhuslik eraldaja võib rea struktuuri muuta.

Ka mitmerealiste definitsioonide jaoks tuleb meetod teadlikult valida. Anki toetab jutumärkides välju, mis ulatuvad üle mitme rea. Teise võimalusena saab Anki tõlgendada märgendit `<br>` reavahetusena, kui **Allow HTML in fields** (luba väljadel HTML-i) on sisse lülitatud. Kasuta üht meetodit ja kontrolli enne kogu faili importimist kopeeritud näidist.

Vaikimisi saab Anki leida esimese välja järgi sama tüüpi olemasoleva märkme ja uuendada selle teisi välju. Impordivalikutes saab selle asemel lasta duplikaate eirata või lisada need uute märkmetena. Olemasoleva Anki märkme uuendamine võib säilitada selle Anki kordamisgraafiku, kuid Quizleti kordamisgraafikut tekstifailiga üle ei kanta.

## Hoia originaal alles, kuni uus kaardipakk töötab

Quizleti ametlik eksporditee lõpeb veebisaidil valikuga **Copy text** ja kehtib komplekti algsele autorile. Andmekraapimisskriptid, oletatud privaatsed API-otspunktid ja kolmandate osapoolte allalaadimistööriistad on eraldi, ametliku toeta töövood. Need ei muuda kopeeritud või üksnes vaadatavat komplekti ametlikult eksporditavaks.

Kui vajad ühekordse koopia asemel korduvat automatiseerimist, selgitab [Quizleti API praegust seisu käsitlev artikkel](/blog/quizlet-api/) ametliku toe piire. Kui komplekt pole sinu oma, küsi selle autorilt lähtefaili või loo oma märkmete põhjal väiksem kaardipakk. [Kuidas teha paremaid õpikaarte](/blog/how-to-make-better-flashcards/) aitab sul uut pakki parandada, selle asemel et kopeerida iga vana rida.

Ära kustuta algset Quizleti komplekti enne, kui:

- muutmata UTF-8 fail on salvestatud kohta, millest tehakse varukoopiaid;
- tööfail avaneb uuesti oodatud märkide ja eraldajatega;
- mitmerealised väljad, tühjad väljad, duplikaadid ja ebakorrapärased read on üle kontrollitud;
- piltidel olnud oluline kontekst on taastatud allikast, mida tohid kasutada; ja
- väike katse on andnud sihtrakenduses õiged esi- ja tagaküljed.

Hoia algne tekstifail ka edaspidi alles. See on kõige lihtsam sõltumatu võrdlusalus, kui mõni hilisem import paistab vale. Kui alles valid, kuhu kaardid viia, käsitleb [Quizleti alternatiivide võrdlus](/blog/quizlet-alternative/) valikute laiemaid eeliseid ja puudusi.
