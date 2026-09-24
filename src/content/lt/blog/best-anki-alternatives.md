---
title: "Anki alternatyvos 2026 m.: ką išsaugosite, prarasite ir gausite pakeitę programėlę"
description: "Palyginkite septynias Anki alternatyvas pagal perkėlimo tikslumą, veikimą be interneto, kartojimo planavimą, kainą, prieigą prie kodo bei savarankišką diegimą ir sužinokite, kada saugiau likti su Anki."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "Anki alternatyvos"
  - "Anki alternatyva"
  - "į Anki panašios programėlės"
  - "atvirojo kodo Anki alternatyva"
  - "nemokamos Anki alternatyvos"
  - "Anki alternatyva iOS"
  - "perkėlimas iš Anki"
---

Importas iš Anki gali baigtis be klaidų ir vis tiek sunaikinti tai, dėl ko jūsų kortelių rinkinys buvo naudingas. Tekstas perkeltas, kortelės atsidaro, bet tada pastebite, kad dingo CSS, garso laukas tuščias, visos kortelės laikomos naujomis arba iš vieno užrašo nebesukuriamos tikėtos tiesioginės ar atvirkštinės kortelės.

Būtent šie skirtumai gali brangiai kainuoti renkantis Anki alternatyvą. Patogesnį redaktorių ar pigesnį planą lengva įvertinti dar prieš pereinant. O kas nutinka šablonams, kartojimų istorijai, numatytoms kartojimo datoms, papildiniams, medijai be interneto ir galimybei vėl išsikelti duomenis, dažnai paaiškėja tik tada, kai žala jau padaryta.

Todėl lyginant svarbiausia, ką pavyks perkelti. Toliau aptariamos septynios į Anki panašios programėlės: ką kiekviena gali perimti iš turimos kolekcijos, kas pasikeičia po importo ir kada saugiau likti su Anki.

> **Autoriaus ryšys su produktu:** esu Kirill Markin ir kuriu [Nibomo](https://nibomo.com/) – vieną iš toliau aptariamų produktų. Jį įtraukiau dėl atvirojo kodo, galimybės diegti savo infrastruktūroje ir darbo su agentais. Tai nereiškia, kad Nibomo savaime geriausias pasirinkimas: tiesioginio `.apkg` importo nėra, perkeliant iš Anki dalis duomenų prarandama, o savarankiškai įdiegtai sistemai reikia rimtos infrastruktūros priežiūros.

**Faktai patikrinti:** 2026 m. rugpjūčio 28 d. Kainos – tą dieną viešai skelbtos JAV arba nurodytos vietinės kainos. Galutinę sumą gali keisti mokesčiai, regionas, švietimui skirti pasiūlymai ir atsiskaitymas per programėlių parduotuves.

![Laikrodininkas tikrina, ar nusistovėjusios konstrukcijos kišeninio laikrodžio mechanizmas tilps į kitą korpusą](/blog/best-anki-alternatives.png)

## Trumpas atsakymas, kol dar nieko neperkėlėte

Jei nėra svarios priežasties keisti programėlę, likite su Anki. Keiskite programėlę tik tada, kai kita išsprendžia pasikartojančią problemą ir dėl to verta perkelti duomenis.

Trys produktai priima Anki paketus su mokymosi duomenimis, tačiau kiekvieno pažadai turi skirtingas ribas:

- **Mnemosyne** dokumentacijoje nurodytas visas Anki importas su pasirinktiniais kortelių tipais ir mokymosi duomenimis. Iš čia aptariamų variantų jis artimiausias tradiciniam darbui vietinėje atvirojo kodo kompiuterio programoje, nors savos iOS programėlės neturi.
- **Mochi** importuoja `.apkg` failus su kartojimų istorija. HTML paverčia Markdown, pašalina CSS ir JavaScript, o keturis Anki kartojimo mygtukus pakeičia į Remembered („Prisiminiau“) ir Forgot („Pamiršau“).
- **RemNote** importuoja `.apkg` failus, daugumą užrašų tipų ir kartojimų istoriją. Dabartiniame vadove taip pat rašoma, kad importuotos kortelės patenka į atskirą **Need to Learn** („Reikia išmokti“) eilę. Todėl „kartojimų istorija importuota“ nereiškia, kad šiandienos Anki eilė nukopijuota tiksliai.

Likusiuose keturiuose produktuose turinį reikės atkurti – tai nėra kolekcijos perkėlimas:

- **Quizlet** praverčia viešiems rinkiniams, klasėms, žaidimams ir mokymuisi pagal programėlės nurodymus.
- **Brainscape** grupei siūlo paprastesnį kartojimą, pagrįstą pasitikėjimo atsakymu vertinimu nuo 1 iki 5.
- **SuperMemo** reiškia perėjimą prie jo nuosavo metodo ir kursų katalogo.
- **Nibomo** suteikia pagal MIT licenciją platinamą žiniatinklio programėlę ir įrenginiuose įdiegiamus klientus, savo infrastruktūroje diegiamą serverio dalį, API ir MCP prieigą. Jo TXT ar CSV procesas su rezultatų peržiūra Anki mokymosi būsenos neišsaugo.

Jei jūsų kortelėms būtinas tikslus atvaizdavimas, papildiniai ar dabartinė kartojimų eilė, likti su Anki nėra neryžtingumas. Tai ir yra atsakymas.

## Pirmiausia suskaičiuokite, kas iš tikrųjų yra jūsų Anki kolekcijoje

„Rinkinys“ nėra vienas lengvai perkeliamas objektas. Prieš lygindami produktus atskirkite, kokius duomenis ir funkcijas ketinate perkelti.

| Kolekcijos dalis | Ką Anki gali įtraukti į paketą | Ką priimanti programa turi aiškiai palaikyti |
| --- | --- | --- |
| **Užrašų turinys** | Teksto laukai ir išsaugotas HTML | Laukų susiejimą, praleisto teksto užduotis, nelotyniškus rašmenis, kodą ir eilučių lūžius |
| **Kortelių kūrimas** | Užrašų tipus ir kortelių šablonus | Tiesiogines bei atvirkštines korteles, pasirinktinius laukus, CSS ir JavaScript veikimą |
| **Medija** | Vietinius paveikslėlius, garso ir kitus failus, kai įjungta **Include media** („Įtraukti mediją“) | Failų išpakavimą, nuorodas, palaikomus formatus ir sinchronizavimą tarp įrenginių |
| **Organizavimas** | Rinkinius, įdėtinius rinkinius, žymas ir, pasirinktinai, rinkinių nustatymų profilius | Hierarchiją, žymų reikšmę, nustatymų profilius ir mokymuisi pasirenkamas dalis |
| **Mokymosi būsena** | Kartojimo planavimo duomenis ir kartojimų istoriją, jei jie įtraukti | Kartojimo datas, intervalus, pamiršimo atvejus ir konvertavimą į naujos programos planavimo algoritmą |
| **Darbo procesą papildantis kodas** | Papildiniai nėra įtraukiami į rinkinio paketą | Pakaitalą naršyklės įrankiams, masiniam redagavimui, užrašų kūrimui ir kitoms papildinių funkcijoms |

Visos šios paketo parinktys aprašytos [Anki eksporto vadove](https://docs.ankiweb.net/exporting.html). Teksto importavimo priemonė perskaito tik pirmoje lentelės eilutėje nurodytą turinį ir galbūt žymas. Tiesioginio `.apkg` importo priemonė gali perskaityti daugiau, bet kiekvienas produktas pats nustato, ką konvertuoti, o ką atmesti.

Todėl teiginys „importuoja iš Anki“ per miglotas, kad pagal jį spręstumėte, ar pereiti. Užduokite tris atskirus klausimus:

1. **Ar kortelė vis dar reiškia tą patį?** Patikrinkite laukus, sukurtų kortelių klausimo ir atsakymo kryptis, praleisto teksto užduotis, mediją ir atvaizdavimą.
2. **Ar nauja programa žino, ką jau išmokau?** Patikrinkite kartojimų įrašus, dabartinę būseną, kartojimo datas ir pirmą tikrą kartojimų eilę.
3. **Ar galėsiu vėl išsikelti duomenis?** Eksportuokite juos iš naujos programos ir pažiūrėkite, ką iš tiesų apima eksporto formatas.

Importavimo priemonė gali atitikti pirmą kriterijų ir neatitikti kitų dviejų.

## Kas išlieka perkėlus duomenis

| Produktas | Importo iš Anki būdas | Mokymosi būsena | Svarbiausi galimi praradimai, kuriuos reikia patikrinti |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Tiesioginis `.apkg` importas](https://help.remnote.com/en/articles/6751471-importing-from-anki): dauguma užrašų tipų, medija ir kartojimų istorija | Kartojimų istorija perkeliama, bet importuotos kortelės patenka į atskirą RemNote **Need to Learn** eilę | Sudėtingas CSS, pasirinktinis JavaScript, dalis generuojamo teksto įgarsinimo ir pervadinti paveikslėlio dalių uždengimo laukai |
| [Mochi](https://mochi.cards/) | [Tiesioginis `.apkg` importas](https://mochi.cards/docs/import-and-export/importing/) su kartojimų istorija | Istorija perkeliama; dokumentacija nežada identiškos Anki eilės ar kartojimo datų | HTML virsta Markdown; CSS ir JavaScript pašalinami; tolesniam vertinimui lieka du pasirinkimai |
| [Mnemosyne](https://mnemosyne-proj.org/) | Projekto dokumentacijoje aprašytas [visas Anki importas](https://mnemosyne-proj.org/features) su pasirinktiniais kortelių tipais ir mokymosi duomenimis | Mokymosi duomenys importuojami į kitą planavimo algoritmą | Vis tiek reikia patikrinti tikslų šablonų veikimą, konvertuotas kartojimo datas bei būseną ir kortelių atvaizdavimą |
| [Quizlet](https://quizlet.com/) | [Terminų ir apibrėžimų įklijavimas](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Iš Anki neperkeliama | Užrašų tipai, šablonai, rinkiniai, medijos struktūra ir visi kartojimo planavimo duomenys |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX arba ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Iš Anki neperkeliama | Šablonai, papildiniai, medijos taisyklės ir visi kartojimo planavimo duomenys |
| [SuperMemo](https://www.supermemo.com/) | [Klausimų ir atsakymų eilučių su skirtukais įklijavimas](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), iki 100 vienu kartu | Iš Anki neperkeliama | Kolekcijos struktūra, medija, šablonai ir visi kartojimo planavimo duomenys |
| [Nibomo](https://nibomo.com/) | Juodraščių rengimas iš Anki TXT ar CSV su DI pagalba ir rezultatų peržiūra | Iš Anki neperkeliama | `.apkg` nepalaikomas; šablonai, tikslus medijos atkūrimas, rinkinių hierarchija ir visi kartojimo planavimo duomenys neperkeliami |

## Kaina, veikimas be interneto, kartojimo planavimas ir kontrolė

| Produktas | Kaina patikrinta 2026 m. rugpjūčio 28 d. | Veikimo be interneto ribos | Planavimo algoritmas | Kodas ir savarankiškas diegimas |
| --- | --- | --- | --- | --- |
| **RemNote** | [Nemokamas; Pro – 8 USD/mėn., mokant 96 USD už metus](https://www.remnote.com/pricing) | Įdiegtose programėlėse po prisijungimo galima redaguoti ir kartoti be interneto. Kompiuteryje saugoma visa žinių bazės medija; mobiliajame įrenginyje – tik dalis naujausių paveikslėlių. Žiniatinklio versijai reikia neuždaryto skirtuko. | [Anki SM-2 arba bandomasis FSRS v6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Uždarojo kodo pagrindas; palaikomas savarankiško diegimo būdas nedokumentuotas |
| **Mochi** | [Be interneto nemokamas; Pro sinchronizavimas – 5 USD/mėn.](https://mochi.cards/#pricing-section) | Įdiegtos programėlės veikia visiškai be interneto ir be paskyros. Naršyklės saugykla gali būti išvalyta. | [Mochi algoritmas arba FSRS](https://mochi.cards/docs/reviewing/fsrs/), abu su Remembered / Forgot | Uždarojo kodo pagrindas; viešose saugyklose yra integracijos, o ne savarankiškai diegiama programa |
| **Mnemosyne** | Nemokamas | [Vietinis naudojimas kompiuteryje ir kartojimas be interneto Android įrenginyje](https://mnemosyne-proj.org/download-mnemosyne.php); Android negalima redaguoti. Savos iOS programėlės nėra. | Prisitaikantis planavimas pagal prisiminimo įvertinimus nuo 0 iki 5 | Atskiros kodo licencijos pagal komponentą; savas sinchronizavimo serveris kompiuteryje arba įrenginyje be grafinės sąsajos |
| **Quizlet** | Pagrindinės funkcijos nemokamos; [Plus – 35,99 USD/metus, Plus Unlimited – 44,99 USD/metus](https://quizlet.com/upgrade?source=signup) | Atsisiųsti rinkiniai iOS ir Android programėlėse veikia be interneto Flashcards ir Match režimais. | [Intervalinis kartojimas žiniatinklyje](https://quizlet.com/features/spaced-repetition) rinkiniams su bent 100 terminų; mobilioji versija vis dar pažymėta kaip būsima. Learn yra atskiras prisitaikantis mokymosi režimas. | Uždarojo kodo paslauga; palaikomo savarankiško diegimo būdo nėra |
| **Brainscape** | [Nemokamas; Pro – 7,99 USD/mėn., mokant už metus](https://www.brainscape.com/pricing) | [Mobilioji programėlė gali išsaugoti darbą be interneto ir vėliau sinchronizuoti anksčiau atsisiųstas klases](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); dokumentacija nežada visos bibliotekos vietinės kopijos. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/) – kartojimas pagal pasitikėjimo atsakymu įvertinimą nuo 1 iki 5 | Uždarojo kodo paslauga; palaikomo savarankiško diegimo būdo nėra |
| **SuperMemo** | Nemokama paskyra su apribojimais; [35,99 PLN/mėn. arba 359 PLN/metus](https://www.supermemo.com/en/premium-subscription) | Atsisiųsti kursai mobiliajame įrenginyje veikia be interneto; redagavimas, DI, paieška, įrašai ir statistika neveikia. | [Nuosavas SuperMemo metodas](https://www.supermemo.com/en/supermemo-method) | Uždarojo kodo paslauga; palaikomo savarankiško diegimo būdo nėra |
| **Nibomo** | [Pagrindinės teikiamos paslaugos funkcijos beta laikotarpiu nemokamos; programinę įrangą galima nemokamai diegti savo infrastruktūroje](/lt/pricing/), bet infrastruktūros išlaidas padengiate patys | Įrenginiuose įdiegtos programėlės įrašo duomenis vietoje po prisijungimo internetu ir pradinio darbo srities duomenų įkėlimo; nuotolinė medija turi būti jau išsaugota podėlyje. | [FSRS](/docs/architecture/#scheduling) | MIT; palaikomas produkcinis diegimas apima visą sistemą, kurios pagrindas – AWS |

Šios lentelės nėra balų suvestinė. Tiesioginis importas gali būti svarbesnis už visas kitas funkcijas, jei turite 30 000 gerai išmoktų kortelių. Sava iPhone programėlė gali nulemti pasirinkimą, jei kartojate būtent ten. Prieiga prie kodo svarbi tik tada, kai jūs arba žmogus, kuriuo pasitikite, tą kodą prižiūrės.

Kiekvieną čia aptariamą produktą galima pradėti naudoti nemokamai, tačiau perėjimas prie nemokamos Anki alternatyvos vis tiek kainuoja. Prenumeratos kainą lengva suskaičiuoti. Šablonų atkūrimas, medijos tikrinimas ir kartojimų istorijos kaupimas iš naujo dažnai kainuoja daugiau.

## RemNote: kortelės tampa susietų užrašų dalimi

RemNote keičia tai, kur ir kaip kuriate korteles. Užuot greta paskaitų užrašų prižiūrėję atskirą rinkinį, korteles kuriate tiesiai struktūrizuotuose užrašuose, dokumente ar dirbdami su PDF. Tai rimta priežastis palikti Anki, jei daugiausia pastangų reikalauja medžiagos kopijavimas tarp užrašų ir kortelių programėlių.

Perkeliama daug kas, tačiau apie kartojimų eilę reikia kalbėti tiksliai. [Dabartiniame RemNote importo iš Anki vadove](https://help.remnote.com/en/articles/6751471-importing-from-anki) nurodoma eksportuoti `.apkg` su kartojimo planavimo duomenimis, rinkinių nustatymų profiliais ir medija. Importuojama kartojimų istorija ir dauguma užrašų tipų, įskaitant paprastas korteles, praleisto teksto užduotis ir įprastas korteles su uždengtomis paveikslėlio dalimis.

Tame pačiame vadove rašoma, kad naujai importuotos kortelės nukreipiamos į atskirą **Need to Learn** eilę. Kitaip tariant, RemNote turi istoriją, tačiau dokumentacija nežada atkurti dabartinės Anki kartojimų eilės be pakeitimų. Sudėtingas CSS taip pat pašalinamas, pasirinktinis JavaScript nepalaikomas, kai kurie teksto įgarsinimo realiuoju laiku būdai neveikia, o paveikslėlio dalių uždengimo importui būtini numatyti užrašų ir laukų pavadinimai.

Importuokite rinkinį, kuriame yra jūsų įprastų kortelių pavyzdžių, ir apžiūrėkite tiek korteles, tiek pirmąją eilę. Tvarkingai atrodantis importas – tik pusė patikrinimo.

Kompiuterio ir mobiliosios programėlės, jas įdiegus ir prisijungus prie paskyros, veikia be interneto. [Veikimo be interneto vadove](https://help.remnote.com/en/articles/6752029-offline-mode) aiškiai nurodyta medijos riba: kompiuteryje saugomi visi žinių bazės paveikslėliai ir PDF, o mobiliajame įrenginyje podėlyje lieka tik dalis naujausių paveikslėlių. Žiniatinklio programėlė gali toliau veikti jau atidarytame skirtuke, tačiau jos negalima iš naujo atidaryti be interneto.

Rinkitės RemNote, jei dėl susietų užrašų verta keisti kolekcijos modelį. Likite su Anki, jei kortelių šablonai ir papildiniai sudaro pačią jūsų mokymosi sistemą, o ne vien ją puošia.

## Mochi: vietoje saugomas Markdown ir išsamus eksportas savuoju formatu

Mochi – paprastesnis pasirinkimas tiems, kas nori vietoje saugomų duomenų, Markdown formato kortelių ir mažiau valdiklių ekrane. Įdiegtos programėlės veikia visose pagrindinėse kompiuterių bei mobiliosiose platformose ir gali būti naudojamos [visiškai be interneto ir be paskyros](https://mochi.cards/docs/getting-started/download-and-install/). Mokama dalis – sinchronizavimas, kainuojantis 5 USD per mėnesį.

Tiesioginio Anki importo priemonė perkelia kartojimų istoriją, todėl Mochi gerokai lenkia variantus, importuojančius vien tekstą. Konvertavimo taisyklės taip pat neįprastai aiškios: Mochi pašalina CSS bei JavaScript ir HTML paverčia Markdown. Tai tinka, kai prasmę perteikia tekstas ir įprasti priedai. Jei prasmė priklauso nuo šablono, tai jau įspėjimas.

Mochi dabar siūlo du planavimo algoritmus. Jo paties algoritmas lieka numatytasis, o [FSRS galima įjungti](https://mochi.cards/docs/reviewing/fsrs/) neanuliuojant turimos Mochi pažangos. FSRS kortelės būseną nustato pagal Mochi turimą kartojimų istoriją. Net ir naudojant FSRS lieka du vertinimai – Remembered arba Forgot. Tad Anki naudotojai, kuriems Hard ir Easy yra atskiri reikšmingi signalai, turėtų tikėtis kitokio kasdienio ritmo.

Duomenų iškėlimas čia aiškesnis nei daugumoje uždarojo kodo programėlių. Eksportas savuoju [`.mochi` formatu](https://mochi.cards/docs/import-and-export/exporting/) apima korteles, šablonus, priedus, žymas, rinkinių struktūrą ir kartojimų istoriją. Markdown ir CSV failus lengviau nagrinėti kitur, tačiau jie neapima kartojimų istorijos ir kitų metaduomenų.

Viešose Mochi GitHub saugyklose yra [integracijos ir susiję įrankiai](https://github.com/mochi-cards/open-source), o ne pagrindinė programa ar palaikomas sinchronizavimo serveris. Rinkitės jį dėl darbo be interneto ir duomenų perkeliamumo, o ne dėl galimybės valdyti programos kodą.

## Mnemosyne: atvirojo kodo kelias kompiuteryje

Mnemosyne artimiausias tradiciniam modeliui „programa ir vietinė duomenų bazė“. Dabartinė versija palaiko Windows, macOS ir Linux, o Android klientas leidžia kartoti be interneto. Funkcijų puslapyje aprašytos kortelės su įvairiu turiniu, hierarchinės žymos, papildiniai, vertinimas nuo 0 iki 5 ir visas Anki importas su pasirinktiniais kortelių tipais bei mokymosi duomenimis.

Tai tiesiausias čia aptariamas atvirojo kodo perkėlimo kelias, jei norite palikti Anki, bet nenorite didelės užrašų sistemos ar debesijos paslaugos. Jis taip pat turi [integruotą sinchronizavimo serverį](https://mnemosyne-proj.org/help/syncing), galintį veikti kompiuteryje arba įrenginyje be grafinės sąsajos ir sujungti kelių klientų mokymosi duomenis.

Trūkumai taip pat svarbūs sprendimui. Android klientas [neleidžia redaguoti kortelių](https://mnemosyne-proj.org/help/android-client). iOS naudotojai turi kartoti per kitame įrenginyje veikiantį naršyklei skirtą serverį, kurio oficialiame funkcijų puslapyje perspėjama, kad jis neturi saugumo funkcijų. Savas sinchronizavimo serveris taip pat reiškia, kad turėsite užtikrinti jo pasiekiamumą, sukonfigūruoti tinklą ir kurti duomenų katalogo atsargines kopijas.

Licencijavimas sudėtingesnis nei vien užrašas „GPL“: [projekto licencijos faile](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) nurodytos skirtingiems komponentams taikomos sąlygos. [Pagrindinio kodo licencija](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) yra AGPL v3 su papildoma pavadinimo ir autorystės nurodymo sąlyga, o [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) taikoma LGPL v3. Perskaitykite šiuos failus, jei planuojate kodą keisti ar platinti.

## Quizlet: pereikite dėl darbo klasėje, o ne dėl tikslaus kolekcijos perkėlimo

Quizlet pranašumai išryškėja kitur. Viešus mokymosi rinkinius, mokytojų klases, dalijimąsi, Match, Test, Learn ir grupines veiklas klasei pristatyti lengviau nei individualiai pritaikytą Anki profilį.

Perkėlimo riba – paprastas tekstas. Quizlet gali įklijuotas eilutes paversti terminais ir apibrėžimais, bet neskaito `.apkg` ir neatkuria užrašų tipų, šablonų, kartojimo plano ar istorijos. Kūrėjai gali [eksportuoti savo rinkinius kaip kopijuojamą tekstą](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), be paveikslėlių; iš kitų naudotojų nukopijuotų rinkinių eksportuoti negalima. Tai turinio, o ne kolekcijos perkeliamumas.

Quizlet kartojimo planavimas keičiasi. Naujoji [Spaced Repetition](https://quizlet.com/features/spaced-repetition) funkcija žiniatinklyje automatiškai įsijungia rinkiniams su bent 100 terminų ir naudoja Repeat, Hard, Okay bei Easy įvertinimus. Mobiliųjų įrenginių palaikymą Quizlet vis dar žymi kaip būsimą. Learn lieka atskiras prisitaikantis mokymosi režimas, kurio naudojimo limitai priklauso nuo mokamo plano.

Be interneto taip pat veikia mobiliosios programėlės, o ne svetainė. Quizlet automatiškai išsaugo aštuonis naujausius rinkinius ir leidžia atsisiųsti daugiau; [Flashcards ir Match veikia be interneto](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), o vėl prisijungus pažanga sinchronizuojama.

Pereikite čia, kai tikslas – dalytis medžiaga ir organizuoti klasės veiklą. Iš naujo kurti nusistovėjusį asmeninį kartojimo planą vien dėl šių funkcijų paprastai neapsimoka.

## Brainscape: mažiau planavimo sprendimų, mažiau perkeltų duomenų

Brainscape prašo įvertinti pasitikėjimą savo atsakymu nuo 1 iki 5 ir pagal šį įvertinimą prasčiau išmoktas korteles pateikia pakartoti anksčiau. Visa formulė neskelbiama, bet klasei tokį kartojimo būdą lengva paaiškinti.

Jis priima CSV, TXT, XLSX ir ODS failus. Tai patogu kortelėms su priekine ir galine puse, tačiau šablonai, papildiniai, medijos taisyklės ir Anki mokymosi duomenys lieka neperkelti. Asmeninės atsarginės kopijos eksportas yra Pro funkcija: sukurtus failus galima atidaryti skaičiuoklėje ir vėliau importuoti atgal.

Dabartiniame Brainscape pagalbos centre rašoma, kad svetainė ir mobiliosios programėlės jau turi tas pačias pagrindines paieškos, kūrimo, dalijimosi ir mokymosi funkcijas. Ten taip pat aprašytas darbas mobiliajame įrenginyje be interneto, rankinis pakartotinis sinchronizavimas ir į įrenginį jau atsisiųstų klasių atnaujinimai. Vadinasi, galima dirbti be ryšio ir vėliau sinchronizuoti duomenis, tačiau nežadama, kad visa paskyros biblioteka bus saugoma įrenginyje.

Asmeninių rinkinių eksportas lieka [Pro funkcija](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Oficialiai paskelbto kodo ar savarankiško diegimo būdo nėra.

Brainscape verta apsvarstyti, kai žmonėms, kuriems reikia mokytis, Anki nustatymų atrodo per daug. Tačiau tai nėra geras pakaitalas tiems, kas tais nustatymais jau sėkmingai naudojasi.

## SuperMemo: pasirinkite metodą ir susitaikykite su nauja pradžia

Dabartinė SuperMemo.com paslauga – kalbų mokymosi platforma žiniatinkliui, iOS ir Android, paremta nuosavu SuperMemo kartojimo planavimo metodu. Tai atskiras produktas nuo senosios Windows programos, kurią gali pažinoti ilgamečiai SuperMemo naudotojai.

Čia renkatės metodą ir katalogą, o ne sklandų perkėlimą iš Anki. SuperMemo palaiko [daugelio kortelių kūrimą įklijuojant klausimų ir atsakymų eilutes su skirtukais](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), bet vienu importu galima įkelti ne daugiau kaip 100 kortelių. Neradau šiuo metu siūlomos oficialios `.apkg` importavimo priemonės ar būdo naudotojui eksportuoti duomenis iš šios paslaugos. Taigi dokumentuotu būdu neperkeliami šablonai, papildiniai, medijos struktūra ir kartojimų istorija.

Atsisiųstus kursus galima mokytis be interneto mobiliosiose programėlėse. [Veikimo be interneto vadove](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) nurodyta, kad DI funkcijos, MemoCards pridėjimas, paieška, įrašai, statistika ir kursų redaktorius tada neveikia. Tad medžiagą paruoškite ir sinchronizuokite prieš atsijungdami.

Rinkitės SuperMemo, jei jo metodo ar kursų katalogo norite tiek, kad verta pradėti naują kartojimo planą. Jei svarbiausia išsaugoti dabartinį planą, jis sprendžia ne tą problemą.

## Nibomo: visos sistemos kodas prieinamas, tačiau importas iš Anki silpniausias

Nibomo leidžia valdyti didelę sistemos dalį. [Pagal MIT licenciją platinamoje saugykloje](https://github.com/kirill-markin/flashcards-open-source-app) yra žiniatinklio programėlė, iOS ir Android klientai, serverio dalis, sinchronizavimas po darbo be interneto, infrastruktūra, [vieša API](/docs/api/) ir [MCP serveris](/docs/mcp-connector/). Kartojimui naudojamas [FSRS](/docs/architecture/#scheduling). Žiniatinklio, iOS ir Android programėlės pirmiausia įrašo duomenis vietoje, pakeitimus įtraukia į siuntimo eilę ir sinchronizuoja vėl prisijungus.

Tačiau tai nereiškia suderinamumo su Anki. Nibomo neskaito `.apkg` ar `.colpkg`. Palaikomas [perkėlimas iš Anki per TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) yra juodraščių rengimas su DI pagalba ir rezultatų peržiūra, skirtas daugiausia tekstinėms kortelėms. Jis neišsaugo šablonų, papildinių, rinkinių hierarchijos, kartojimo datų, intervalų ar kartojimų įrašų. Medijos nuorodos TXT faile nėra patys medijos failai, todėl rinkinius, kuriuose daug medijos, reikės atskirai atkurti ir patikrinti.

Nuosavas Nibomo `flashcards.zip` paketas taip pat siauresnis už atsarginę kopiją. Jis perkelia korteles, žymas ir susijusią mediją tarp Nibomo darbo sričių. Jis neperkelia kartojimų istorijos, FSRS būsenos, visos rinkinių struktūros, darbo srities nustatymų ar paskyrų.

Pagrindinės teikiamos paslaugos funkcijos [beta laikotarpiu nemokamos](/lt/pricing/). Produkcinės sistemos diegimas savo infrastruktūroje nėra Docker paleidimas viena komanda: [savarankiško diegimo vadove](/docs/self-hosting/) naudojamas AWS CDK, reikia AWS paslaugų, taip pat Cloudflare, Resend, Sentry, slaptųjų duomenų tvarkymo, migracijų, atsarginių kopijų, atkūrimo ir atnaujinimų. Docker Compose skirtas kūrimui, o ne palaikomam produkciniam diegimui.

Rinkitės Nibomo, kai keisti programėlę skatina prieiga prie viso kodo ir galimybė patiems valdyti serverio dalį, o jūsų kortelės pakankamai paprastos, kad jas būtų saugu atkurti. [Atidarykite paslaugos teikėjo prižiūrimą programėlę](https://app.nibomo.com/) ir išbandykite nedidelį laikiną rinkinį. Likite su Anki arba išbandykite RemNote, Mochi ar Mnemosyne, kai svarbiausia tiksliai išsaugoti mokymosi būseną.

## Kuri Anki alternatyva veikia iOS be nemalonių perkėlimo staigmenų?

„Anki alternatyva iOS“ gali reikšti du skirtingus dalykus: savą iPhone programėlę arba pakaitalą [AnkiMobile, už kurį vieną kartą mokama 24,99 USD](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo ir Nibomo turi iOS programėles. Mnemosyne jos neturi. Tačiau perkėlimo klausimas niekur nedingsta:

- **Mochi** išsaugo daugiau nei tik tekstą perkeliantys iOS variantai: jis importuoja `.apkg` kartojimų istoriją, konvertuoja į Markdown ir naudoja du vertinimus.
- **RemNote** taip pat importuoja `.apkg` kartojimų istoriją, tačiau patikrinkite jo **Need to Learn** eilę, užuot manę, kad šiandienos Anki planas išliks.
- **Quizlet** tinka dalytis medžiaga klasėje, tačiau iš Anki perkelia tik tekstą, o jo naujoji intervalinio kartojimo funkcija mobiliajame įrenginyje dar neveikia.
- **Nibomo** yra variantas su prieinamu kodu ir savu iOS klientu, tačiau perkeliant iš Anki mokymosi būsena pradedama nuo nulio.
- **Brainscape** ir **SuperMemo** prasmingi tik tada, jei dėl jų kartojimo metodo verta iš naujo kurti korteles ir planą.

Prieš atsisakydami AnkiMobile dėl kainos, palyginkite ją su prenumeratos išlaidomis ir valandomis, kurių reikės perkėlimo trūkumams taisyti. Vienkartinis programėlės pirkimas gali kainuoti mažiau nei nemokama programėlė, kuri seniai naudojamą kolekciją paverčia rankinio darbo projektu.

## Kada saugiau likti su Anki

Likti yra sprendimas, o ne nesugebėjimas pasirinkti kažko naujesnio. Likite su Anki, jei tinka bent vienas iš šių teiginių:

- jūsų kolekcija priklauso nuo pasirinktinių šablonų, CSS, JavaScript ar papildinių;
- Image Occlusion, garsas ar kita medija perteikia esminę prasmę;
- vienas užrašas sukuria kelių krypčių korteles, kurios turi likti susietos;
- kelerius metus kaupta kartojimų istorija ir dabartinės kartojimo datos vertingesnės už naują redaktorių;
- dirbate kompiuteryje arba naudojate tokį platformų derinį, kurio alternatyva neatstoja;
- pakaitalo režimas be interneto veikia tik ten, kur nesiruošiate jo naudoti;
- teoriškai norite savo serverio, tačiau nenorite jo prižiūrėti, saugoti, kurti atsarginių kopijų ir atnaujinti;
- alternatyva, be tvarkingesnės išvaizdos, neišsprendžia jokios pasikartojančios problemos.

Anki vis dar siūlo brandžią papildinių ekosistemą, lanksčius užrašų bei kortelių šablonus, FSRS ir ankstesnio kartojimo planavimo algoritmo nustatymus, vietoje įdiegtus klientus ir paketų formatus, galinčius perkelti kolekciją. Nė vienas iš aptartų produktų viso to neatkuria.

Jei norite konkrečiau palyginti, kiek sistemos galite valdyti patys, skaitykite [atvirojo kodo kortelių programėlių vadovą](/blog/best-open-source-flashcard-apps-2026/). Jei lemia veikimas be interneto, [kortelių programėlių be interneto palyginime](/blog/best-offline-flashcards-app/) atskiriamos įdiegtos programėlės, podėlyje saugomas turinys ir naršyklės skirtukai.

## Perkėlimo patikra, kurios rezultatas vis dar gali būti „ne“

Nepradėkite nuo visos kolekcijos. Pradėkite nuo bandymo, kurio nesėkmė nesugadins jūsų kolekcijos.

1. **Sukurkite atkūrimo paketą.** Eksportuokite `.colpkg` su medija, laikykite jį ne Anki profilio kataloge ir išsaugokite antrą kopiją kitoje vietoje.
2. **Pasirinkite sudėtingą rinkinį.** Įtraukite praleisto teksto užduotis, pasirinktinius laukus, tiesiogines ir atvirkštines korteles, įdėtinius rinkinius, žymas, paveikslėlius, garsą ir pakankamai kartojimų istorijos, kad matytumėte, kaip konvertuojamas planas.
3. **Eksportuokite formatą, kurį nauja programa iš tiesų palaiko.** Tiesioginiam importui naudokite `.apkg` su kartojimo planavimo duomenimis, nustatymų profiliais ir medija. Notes in Plain Text („Užrašai paprastuoju tekstu“) rinkitės tik tada, kai sutinkate atkurti vien turinį.
4. **Užfiksuokite pradinę būseną.** Užrašykite užrašų ir kortelių skaičius, žymų bei rinkinių pavadinimus, medijos failų skaičių, kelias kartojimo datas ir intervalus bei numatomą iš kiekvieno užrašo tipo sukuriamų kortelių skaičių.
5. **Importuokite į laikiną aplinką.** Neperrašykite pradinio profilio ir pirmojo bandymo nejunkite su nuolatine naujos programos biblioteka.
6. **Turinį ir mokymosi būseną tikrinkite atskirai.** Teisinga priekinė ir galinė kortelės pusė neįrodo, kad išliko praleisto teksto užduotys, medija, kortelės iš to paties užrašo, kartojimų istorija ar kito kartojimo data.
7. **Kiekviename naudojamame įrenginyje atidarykite programėlę iš naujo be interneto.** Pakartokite ir paredaguokite korteles, visiškai uždarykite programėlę, atidarykite ją be ryšio, tada vėl prisijunkite ir patikrinkite kitą įrenginį.
8. **Apžiūrėkite eilę, kol planai dar nepradėjo skirtis.** Prieš vertindami tas pačias kasdien naudojamas korteles abiejose programėlėse, palyginkite pirmą numatytų kartoti kortelių grupę ir kelis intervalus. Po pirmojo kartojimo kitoje programėlėje abu planai jau bus nepriklausomi.
9. **Prieš apsispręsdami patikrinkite, kaip išsikelsite duomenis.** Eksportuokite duomenis iš naujos programos ir pažiūrėkite, ką galėtumėte atkurti, jei po metų nuspręstumėte ją palikti.
10. **Pasilikite Anki ir nepaliestą atsarginę kopiją.** Neištrinkite nei programos, nei kopijos, kol pakaitalas neatlaikė įprasto naudojimo ir sąmoningai nesutikote su kiekvienu praradimu.

Jei nauja programa priima tik tekstą, vadovaukitės visu [saugaus TXT eksporto procesu](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Jame atkūrimui skirtas `.colpkg` atskiriamas nuo perkeliamo darbinio failo ir aiškiai įvardijama, kad mokymosi būsena bus pradėta iš naujo.

## Spręskite tokia tvarka

Pradėkite nuo to, ko negalite sau leisti prarasti:

1. Jei būtini tikslūs šablonai, papildiniai ar dabartinė eilė, likite su Anki, nebent būdingų kortelių `.apkg` bandymas įrodytų, kad juos galima perkelti.
2. Jei užrašai ir kortelės turėtų tapti viena sistema, išbandykite RemNote. Tikrinkite **Need to Learn** eilę, ne vien importuotus puslapius.
3. Jei vietoje saugomas Markdown ir lengvai patikrinami eksporto failai svarbesni už Anki atvaizdavimą, išbandykite Mochi.
4. Jei norite konkrečiai kortelėms skirtos atvirojo kodo kompiuterio programos su tiesioginiu Anki importu, išbandykite Mnemosyne ir įsitikinkite, kad jo mobilieji apribojimai dera su jūsų įpročiais.
5. Jei tikroji problema – dalijimasis klasėje ar paprastesnis bendras kartojimo procesas, atkurkite nedidelį rinkinį Quizlet arba Brainscape.
6. Jei norite būtent SuperMemo metodo, sutikite pradėti naują kartojimo planą. Jei norite būtent visos sistemos kodo, savarankiško diegimo, API ir MCP prieigos, pasiruoškite atkurti turinį Nibomo, prarasti dalį duomenų ir prižiūrėti sistemą.

Trijų labai skirtingų modelių funkcijų palyginimą rasite straipsnyje [Anki, Quizlet ir Nibomo palyginimas](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Naudinga taisyklė paprasta: pereikite tada, kai nauda konkreti, o tikras bandymas parodė, kad praradimai jums priimtini. Jei tipiško rinkinio nepavyksta sklandžiai perkelti, sprendimą likti su Anki lemia ne vien atsargumas. Tai palyginimo rezultatas.
