---
title: "Kā importēt mācību kartītes platformā Quizlet no Excel, Google Sheets vai teksta"
description: "Importējiet divu kolonnu vārdu sarakstu platformā Quizlet, izvēlieties tabulācijas un jaunas rindas un pirms publicēšanas novērsiet atbilžu sadalīšanu, liekas kartītes un CSV kļūdas."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "kā importēt mācību kartītes Quizlet"
  - "Quizlet importa formāts"
  - "Quizlet imports no Excel"
  - "Google Sheets uz Quizlet"
  - "Quizlet imports ar tabulāciju"
---

“Red, green, blue” izskatās pēc parastas atbildes mācību kartītē. Taču, ja ar komatiem atdalāt terminu no definīcijas, šie paši komati padara rindu neviennozīmīgu. Dažu pieturzīmju dēļ sagatavotais vārdu saraksts var prasīt papildu labojumus.

Lai importētu mācību kartītes platformā Quizlet no Excel, Google Sheets vai teksta, sāciet ar divām kolonnām: vienu terminiem, otru definīcijām. Nokopējiet datus, ielīmējiet tos vietnes importa veidlapā un izvēlieties tabulācijas kā lauku atdalītājus un jaunas rindas kā kartīšu atdalītājus. Vispirms izmēģiniet četras rindas, lai pirms visa saraksta pārvietošanas varētu pārbaudīt katru pāri.

![Podnieks atsevišķās rindās sakārto keramikas krūzītes ar tām atbilstošām apakštasītēm, pirms pārvieto tās uz plauktu](/blog/how-to-import-flashcards-into-quizlet.png)

## Kur atrast Quizlet importa veidlapu

Quizlet savā vietnē apraksta importēšanu, kurā laukus atdala ar komatiem, tabulācijām vai domuzīmēm, bet kartītes — ar semikoliem vai jaunām rindām. [Oficiālajos importēšanas norādījumos](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) aprakstīta šāda secība:

1. Pierakstieties kontā un izvēlieties **Create → Flashcard set** (Izveidot → Mācību kartīšu komplekts).
2. Ievadiet nosaukumu, atlasiet **Import** (Importēt) un ielīmējiet tekstu.
3. Pielāgojiet atdalītāju iestatījumus ievades datiem. Šeit redzamajiem piemēriem izvēlieties **Tab** (Tabulācija) un **New line** (Jauna rinda).
4. Atlasiet **Import**, pēc tam izvēlieties terminu un definīciju valodas.
5. Pārskatiet kartītes, pirms atlasāt **Create**, lai saglabātu un publicētu komplektu.

Norādījumi pārbaudīti 2026. gada 15. septembrī. Tālāk dotie piemēri izskaidro, kā sagatavot un pārbaudīt tekstu; tie neapraksta pārbaudi pierakstītā lietotāja kontā.

## Sāciet ar nelielu izklājlapas diapazonu

Excel vai Google Sheets katrā rindā ievietojiet vienu termina un definīcijas pāri. Izmēģinājumam noder šīs četras kartītes:

| Termins | Definīcija |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Nokopējiet tikai četras datu rindas abās kolonnās. Ja virsraksti ir 1. rindā, atlasiet **A2:B5**. Neiekļaujiet virsrakstus kopējamajā diapazonā.

Rezultātā jābūt četrām kartītēm ar terminiem spāņu valodā un definīcijām angļu valodā. Pēdējā kartītē vārdkopai “colores primarios de la luz” jāpaliek kopā vienā pusē, bet “red, green, blue” — otrā. Komati ir daļa no atbildes.

Kad šis piemērs ir skaidrs, sagatavojiet savu izklājlapu. Strādājiet kopijā, lai saglabātu oriģinālu salīdzināšanai. Dzēsiet tukšās rindas un neiekļaujiet atlasē piezīmes vai papildu kolonnas. Pirms kopēšanas aizpildiet trūkstošos terminus vai definīcijas.

Kārtojiet abas kolonnas kopā. Kārtojot tikai terminus, tie zaudētu saikni ar savām atbildēm. Tad arī importā ar pareizu kartīšu skaitu varētu būt nepareizi pāri.

## Vienkārša teksta formātā vajadzīgas īstas tabulācijas

Šīs pašas četras rindas ar tabulācijām atdalītā tekstā izskatās šādi. Katrā rindā starp terminu un tā definīciju ir viena īsta tabulācijas rakstzīme:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tabulācija ir noteikta rakstzīme. Vairākas atstarpes var izskatīties līdzīgi, taču tās neveido tabulācijas atdalītāju. Arī ierakstot rakstzīmes `\t`, tabulācija netiek ievietota. Ja teksta redaktorā to ir grūti izdarīt, ievietojiet pārus divās izklājlapas kolonnās un nokopējiet šīs šūnas.

Katrai kartītei jāaizņem viena fiziska teksta rinda. Gara definīcija šaurā logā var tikt attēlota divās rindās; tas saturam nepievieno rindas pārtraukumu. Savukārt izklājlapas šūnā ievietots rindas pārtraukums to pievieno. Pirms izmantojat jaunas rindas kā kartīšu atdalītājus, noņemiet šādus pārtraukumus šūnu iekšienē.

Noņemiet arī tabulācijas termina vai definīcijas iekšienē. Šajā formātā tabulācijām jābūt tikai starp abiem laukiem.

## Ja saraksts ir CSV failā

Pirms importa sagatavošanas atveriet CSV failu izklājlapā. Šādam CSV ierakstam ir divi lauki, ja to nolasa atbilstoši CSV pēdiņu lietošanas noteikumiem:

```text
"colores primarios de la luz","red, green, blue"
```

Pēdiņās ievietotajā atbildē ir komati. Teksta lauks, kas ievadi sadala pēc komatiem, ne vienmēr prot nolasīt CSV, tāpēc nepaļaujieties, ka pēdiņas tajā pasargās atbildi no sadalīšanas.

Excel vai Google Sheets pārliecinieties, ka ieraksts aizņem tieši divas šūnas. Pēc tam nokopējiet šūnas, lai iegūtu ar tabulācijām atdalītu ievadi. Ja atbilde ir sadalīta vairākās kolonnās, vispirms izlabojiet izklājlapas CSV importa iestatījumus. Nokopējot bojātu rindu, kļūda nonāks arī importā.

Pārbaudiet arī vērtības, kuras izklājlapa varētu pārveidot. Ja `0012` ir kods, kas jums jāiemācās, tā pārveidošana par `12` maina kartītes saturu. Pirms diapazona kopēšanas salīdziniet identifikatorus, datumus, pēdiņas un vārdus ar diakritiskajām zīmēm ar oriģinālo failu.

## Kad kartītes neatbilst jūsu rindām

Izmantojiet izmēģinājumu, lai atrastu pirmo neatbilstību. Mainiet pa vienai lietai un pēc tam salīdziniet rezultātu ar tām pašām četrām avota rindām.

| Pazīme | Iespējamā atdalītāju problēma | Kas jāmaina |
| --- | --- | --- |
| Atbilde sadalās pie komatiem | Starp laukiem izvēlēts komats | Sagatavojiet divas kolonnas un izvēlieties Tab |
| “well-being” sadalās termina vidū | Starp laukiem izvēlēta domuzīme | Saglabājiet defisi un atdaliet laukus ar tabulāciju |
| Viena atbilde pārvēršas vairākās kartītēs | Avotā ir rindas pārtraukumi lauka iekšienē | Ievietojiet atbildi vienā fiziskā teksta rindā |
| “Term” un “Definition” parādās kā kartīte | Nokopēta virsrakstu rinda | Atlasiet tikai datu rindas |
| Abi lauki paliek vienā pusē | Tabulācijas vietā izmantotas atstarpes | Nokopējiet divu kolonnu izklājlapas diapazonu |

Piemēram, atbildi, kurā “first stage” un “second stage” ir atsevišķās rindās, var pārveidot par `first stage; second stage`. Tā abas daļas paliek vienā rindā. Ja atbildē izmantojat semikolu, starp kartītēm atstājiet izvēlētu **New line**.

Ja par abiem posmiem būtu vērts uzdot atsevišķus jautājumus, uzrakstiet divus pilnīgus pārus. Izvēlēties palīdzēs [ceļvedis labāku mācību kartīšu veidošanai (angļu valodā)](/blog/how-to-make-better-flashcards/).

## Pirms publicēšanas pārbaudiet rezultātu

Pārbaudiet visas četras izmēģinājuma kartītes. Importējot pilno sarakstu, salīdziniet kartītes ar sakārtoto avotu:

- Vai kopējais skaits atbilst pilnībā aizpildīto datu rindu skaitam?
- Vai pirmais un pēdējais pāris sakrīt, ieskaitot pilnas atbildes?
- Vai pieturzīmes, diakritiskās zīmes un kodi ir saglabāti bez izmaiņām?
- Vai ir tukšas puses, virsraksti, dublikāti vai atbildes, kas savienotas ar nepareiziem terminiem?
- Vai katra atbilde, kurā labojāt rindas pārtraukumus, joprojām ir saprotama?

Izlasiet arī vairākus parastus pārus, ne tikai aizdomīgos. Tas, ka skaits sakrīt, vēl nenozīmē, ka pareizam terminam nav pievienota nepareiza atbilde. Ja kaut kas neatbilst, pirms atkārtota importa izlabojiet avotu. Saglabājiet sakārtoto failu turpmākiem labojumiem.

## Jau uzrakstīti pāri vai mākslīgā intelekta veidotas kartītes?

Quizlet savā [pārskatā par kartīšu veidošanu ar mākslīgo intelektu](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai) apraksta arī kartīšu izveidi no iesniegta materiāla ar mākslīgā intelekta palīdzību. Ģenerētā teksta saturs jāpārbauda atsevišķi. Ja terminu un definīciju saraksts jau ir gatavs, strukturēta importēšana ļauj pārbaudīt pārsūtītos datus, salīdzinot tos ar jau uzrakstītajiem pāriem.

Sākat ar rindkopām? Pirms importa teksta sagatavošanas [pārvērtiet savas piezīmes mācību kartītēs (ceļvedis angļu valodā)](/blog/turn-notes-into-flashcards/). Pārvietojat komplektu pretējā virzienā? Izmantojiet [Quizlet eksportēšanas ceļvedi](/lv/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
