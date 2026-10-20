---
title: "Geriausi Anki FSRS nustatymai 2026 m.: įsiminimas, mokymosi žingsniai ir kartojimo krūvis"
description: "Pasirinkite saugius Anki 26.08 su FSRS-6 nustatymus: norimą įsiminimo lygį, mokymosi žingsnius, optimizavimą, perplanavimą ir kartojimo krūvį."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS nustatymai"
  - "geriausi FSRS nustatymai"
  - "Anki FSRS nustatymai"
  - "FSRS norimas įsiminimo lygis"
  - "FSRS mokymosi žingsniai"
  - "FSRS simuliatorius"
  - "FSRS parametrų optimizavimas"
  - "FSRS-6"
---

Norimo įsiminimo lygio padidinimas Anki nuo 90 % iki 95 % atrodo nedidelis pokytis. Tačiau tai nereiškia, kad darbo padaugės penkiais procentais. Didėjant šiai reikšmei, FSRS turi trumpinti intervalus, todėl ilgai naudojamoje kolekcijoje kartojimo eilė gali gerokai išaugti. Jei dar įjungsite **Reschedule cards on change**, dalis šio krūvio gali atsirasti iš karto.

Todėl geriausi FSRS nustatymai nėra parametrų eilutė, kurią tereikia nukopijuoti. Tai sprendimų seka: nusistatykite įveikiamą krūvį, pagal jį pasirinkite įsiminimo tikslą, pritaikykite modelį savo kartojimų istorijai ir nekeiskite esamų kartojimo datų, nebent sąmoningai norite jas perskaičiuoti.

Toliau pateikti nustatymų pavadinimai ir aprašytas veikimas atitinka [Anki 26.08 versiją](https://github.com/ankitects/anki/releases/tag/26.08) bei joje esančius FSRS-6 nustatymus. Jei pirmiausia norite suprasti patį modelį, skaitykite [Kas yra FSRS?](/blog/what-is-fsrs/). Jei dar renkatės planavimo algoritmą, pradėkite nuo [FSRS ir SM-2 palyginimo](/blog/fsrs-vs-sm-2/).

> **Interesų atskleidimas:** esu Kirill Markin ir kuriu [Nibomo](/lt/features/). Anki siūlo individualų parametrų pritaikymą ir eksperimentinius krūvio simuliatorius, kurių Nibomo šiuo metu neturi. Palyginime straipsnio pabaigoje šie skirtumai nurodyti aiškiai.

**Faktai patikrinti:** 2026 m. rugsėjo 8 d.

![Kanalo šliuzo operatorius tikrina vandens srautą sumažintame modelyje prieš keisdamas tikrąjį šliuzą](/blog/fsrs-settings-v2.png)

## Trumpai: nuo ko pradėti

Daugumai Anki naudotojų tai saugūs pradiniai pasirinkimai, o ne universalūs nustatymai:

| Nustatymas arba įprotis | Saugus pradinis pasirinkimas | Kodėl |
| --- | --- | --- |
| Norimas įsiminimo lygis | `0.90` | Tai numatytoji Anki reikšmė, derinanti atsiminimą ir kartojimo krūvį. |
| FSRS parametrai | Naudokite **Optimize Current Preset**; neįklijuokite ir ranka nekeiskite svorių | Optimizatorius pritaiko modelį jūsų kartojimų istorijai. |
| Optimizavimo dažnis | Ne dažniau kaip kartą per mėnesį; paprastai pakanka kas kelis mėnesius | Anki nerekomenduoja dažnai optimizuoti. |
| Mokymosi žingsniai | Palikite kelis žingsnius, kuriuos galima užbaigti tą pačią dieną | Ilgos žingsnių sekos atitolina modeliu pagrįsto planavimo pradžią. |
| Pakartotinio mokymosi žingsniai | Kuo mažiau, visi trumpesni nei viena diena | Ta pati riba galioja ir neatsiminus kartojamos kortelės. |
| Reschedule cards on change | Išjungta | Nauji nustatymai gali įsigalioti per būsimus kartojimus, neperdarant šiandienos eilės. |
| Didžiausias intervalas | Palikite numatytuosius 100 metų | Mažesnė riba verčia dažniau kartoti jau gerai išmoktas korteles. |
| Naujos kortelės per dieną | Rinkitės pagal krūvį, kurį galite nuolat įveikti | Kiekvieną naują kortelę reikia išmokti dabar ir kartoti vėliau. |
| Again ir Hard | Again reiškia, kad neatsiminėte; Hard – kad atsiminėte sunkiai | Klaidingi įvertinimai modeliui pateikia klaidingą istoriją. |

Jei kartojimo krūvis įveikiamas, o jūsų nustatymai jau panašūs, galbūt nieko taisyti nereikia. Nustatymų priežiūra nėra mokymasis.

## Atskirkite tris sprendimus

Norimas įsiminimo lygis, FSRS parametrai ir kasdienis krūvis dažnai suplakami į vieną. Tačiau jie valdo skirtingus dalykus:

- **Norimas įsiminimo lygis** yra jūsų atsiminimo tikslas. Jį pasirenkate pagal savo tikslus ir mokymuisi turimą laiką.
- **FSRS parametrai** pritaiko atminties modelį kartojimų istorijai. Juos apskaičiuoja Anki optimizatorius.
- **Naujų kortelių ir kartojimų ribos** nustato, kiek naujos medžiagos patenka į sistemą ir kiek kortelių, kurias jau laikas kartoti, Anki gali parodyti kasdien.

Atskyrus šiuos dalykus lengviau rasti problemų priežastis. Didelė eilė savaime nereiškia, kad parametrai netinkami. Svarbios medžiagos kaladei nebūtinai reikia atskiro parametrų rinkinio. O sumažinę norimą įsiminimo lygį neišspręsite problemos, jei nuo pat pradžių pridedate daugiau kortelių, nei galite įveikti.

## Norimą įsiminimo lygį rinkitės pagal krūvį, o ne ambicijas

Norimas įsiminimo lygis nurodo FSRS, kokios atsiminimo tikimybės siekiate tada, kai ateis laikas kartoti kortelę. Nustačius `0.90`, FSRS parenka laiką pagal prognozuojamą 90 % atsiminimo tikimybę. Tai modelio tikslas, o ne garantija, kad per kiekvieną mokymosi sesiją ar egzaminą teisingai atsakysite į lygiai 90 % klausimų.

Keisdami šį tikslą, kartu keičiate krūvį ir užmiršimo tikimybę:

- Padidinus norimą įsiminimo lygį, intervalai trumpėja, o kartojimų daugėja.
- Jį sumažinus, intervalai ilgėja, tačiau dažniau nepavyksta prisiminti.
- Sumažinus per daug, papildomas užmirštų kortelių mokymasis gali sunaudoti dalį laiko, kurį tikėjotės sutaupyti.

Numatytoji Anki reikšmė yra 90 %. [Norimo įsiminimo lygio rekomendacijose](https://docs.ankiweb.net/deck-options.html#desired-retention) įspėjama, kad artėjant prie 100 % krūvis sparčiai didėja, ir rekomenduojama rinktis mažesnę nei 97 % reikšmę. Oficialus [optimalaus įsiminimo lygio paaiškinimas](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) apima kitą kreivės galą: labai žemas įsiminimo lygis taip pat gali būti neefektyvus, nes užmirštoms kortelėms reikia daugiau darbo.

Pradėkite nuo `0.90` ir keiskite tik įvertinę krūvį. Aukštesnis tikslas gali būti prasmingas medžiagai, kurią pamiršti iš tiesų kainuoja. Žemesnis gali tikti, kai kartojimai išstumia vertingesnį mokymąsi. Nė vienas pasirinkimas nepataisys neaiškių kortelių, nesąžiningų įvertinimų ar per didelio naujų kortelių kiekio.

### Kaladės įsiminimo tikslas ir bendri parametrai turi skirtingas taikymo sritis

Anki 26.08 nustatymas **Desired retention** turi dvi taikymo sritis: bendram nustatymų rinkiniui (**Shared Preset**) ir konkrečiai kaladei (**This deck**). Taigi susijusios kaladės gali naudoti vieną parametrų rinkinį, o konkrečiai kaladei galite nustatyti atskirą įsiminimo tikslą.

Naudokite šią galimybę, kai skiriasi užmiršimo kaina. Profesinės kvalifikacijos egzaminui skirta kaladė gali pateisinti aukštesnį tikslą nei mažiau svarbios informacijos kaladė, nors abi naudoja tą patį pritaikytą modelį.

Pasirinkus **This deck**, FSRS parametrai netampa atskiri tai kaladei. Pagal numatytąją tvarką Anki juos pritaiko pagal visų dabartinį nustatymų rinkinį naudojančių kaladžių kartojimų istoriją. Jei kaladžių grupės labai skiriasi subjektyviu sudėtingumu, norint joms parametrus pritaikyti atskirai reikia naudoti atskirus nustatymų rinkinius.

## Help Me Decide ir Simulator skirti skirtingiems klausimams

Anki 26.08 pateikia du atskirus eksperimentinius įrankius:

- **Help Me Decide (Experimental)** rodo individualią įsiminimo lygio ir krūvio kreivę. Jis padeda atsakyti: „Koks įsiminimo tikslas tinka pagal tai, kiek kortelių galiu reguliariai kartoti ar kiek minučių tam skirti?“
- **FSRS Simulator (Experimental)** prognozuoja, kaip pasirinkta konfigūracija gali veikti laikui bėgant. Juo palyginkite įsiminimo lygio, naujų kortelių kiekio, kartojimų ribų ir didžiausio intervalo pokyčius.

[FSRS Simulator dokumentacijoje](https://docs.ankiweb.net/deck-options.html#the-simulator) nurodyti pagrindiniai įvesties duomenys:

- modeliuojamų dienų skaičius
- papildomų naujų kortelių, įtraukiamų į modeliavimą, skaičius
- naujų kortelių skaičius per dieną
- didžiausias kartojimų skaičius per dieną
- didžiausias intervalas
- norimas įsiminimo lygis ir pasirinkto nustatymų rinkinio FSRS parametrai

Modeliuojant taip pat naudojamos tikrosios tam nustatymų rinkiniui priklausančių kortelių atminties būsenos. Todėl ilgai naudojamai kolekcijai jis naudingesnis nei šiandien kartotinų kortelių skaičiaus dauginimas iš visiems vienodo procento.

Prieš keisdami naudojamus nustatymus, išbandykite tris scenarijus:

1. Dabartinį įsiminimo lygį ir naujų kortelių kiekį.
2. Svarstomą įsiminimo tikslą.
3. Tą patį tikslą su mažesniu naujų kortelių skaičiumi per dieną.

Trečiu bandymu patikrinsite dažnai tinkamą alternatyvą: išlaikyti atsiminimo tikslą ir lėtinti naujos medžiagos srautą. Jei prognozuojamas krūvis tampa įveikiamas, nereikia susitaikyti su dažnesniu užmiršimu vien tam, kad sutrumpintumėte eilę. Daugiau apie naujų kortelių kiekį skaitykite straipsnyje [Kiek naujų mokymosi kortelių pridėti per dieną?](/blog/how-many-new-flashcards-per-day/).

Abu įrankiai pateikia prognozes. Praleistos dienos, redaguotos kortelės, nauja medžiaga ir pasikeitę vertinimo įpročiai gali lemti, kad tikrasis krūvis skirsis nuo grafiko. Palyginimas padeda pasirinkti kryptį, tačiau negali tiksliai numatyti, kokia bus eilė po kelių mėnesių.

Senesniuose vadovuose galite rasti **Compute Minimum Recommended Retention**, arba CMRR. Anki šią funkciją pašalino 25.07 versijoje. Dabartinėje versijoje norimas įsiminimo lygis pasirenkamas kitais įrankiais.

## Optimizuokite FSRS parametrus pagal savo istoriją

Norimas įsiminimo lygis išreiškia jūsų tikslą. FSRS parametrai apibūdina, kaip modelis pritaikytas jūsų kartojimams.

Anki 26.08 pasirinkite **Optimize Current Preset**, kad pritaikytumėte aktyvaus nustatymų rinkinio parametrus. Pagal numatytąją tvarką Anki įtraukia kiekvienos šį rinkinį naudojančios kaladės kartojimų istoriją; jei modeliui pritaikyti norite naudoti mažesnę imtį, galite pakoreguoti paiešką. **Optimize All Presets** vienu veiksmu atnaujina visus nustatymų rinkinius.

Neįvedinėkite svorių ranka ir nekopijuokite jų iš Reddit, vaizdo įrašo ar kito žmogaus kaladės. Jo kortelės, kartojimų laikas ir vertinimo įpročiai nėra jūsų istorija. Tvarkinga [FSRS-6 svorių](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) eilutė nėra mokymosi strategija, kurią galima perkelti kitam žmogui.

Optimizuokite iš naujo tik sukaupę pakankamai naujų kartojimų duomenų. Anki vadove teigiama, kad pakanka karto per mėnesį, o 26.08 versijos paaiškinime programėlėje – kad pakanka karto per kelis mėnesius. Praktinė išvada ta pati: nėra priežasties optimizuoti kas savaitę, juo labiau po kiekvienos sesijos.

### Dabartiniam nustatymų rinkiniui naudokite tinkamumo patikrą

Įjunkite **Check health when optimizing (slow)**, jei norite, kad Anki įvertintų, kaip gerai FSRS gali prisitaikyti prie dabartinio nustatymų rinkinio istorijos. Ši patikra veikia su **Optimize Current Preset**, bet ne su **Optimize All Presets**.

Jei rezultatas prastas, prieš keisdami svorius peržiūrėkite duomenis. [Anki FSRS parametrų rekomendacijose](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) nurodomos dažnos priežastys: mažiau nei keli šimtai kartojimų, Hard naudojimas neatsiminus ir Again nespaudimas, kai prisiminti nepavyksta. Jei naudingos istorijos mažai, palikite numatytąsias reikšmes ir optimizuokite vėliau, užuot skolinęsi kito naudotojo parametrus.

## Again reiškia, kad neatsiminėte; Hard – kad atsiminėte

Šis įprotis toks pat svarbus kaip bet kuris nustatymas.

Spauskite **Again**, kai negalėjote pateikti reikiamo atsakymo arba suklydote. **Hard** rinkitės tik tada, kai atsiminėte teisingai, bet prireikė didelių pastangų ar ilgai dvejojote. Good ir Easy taip pat reiškia sėkmingą atsiminimą.

Spausdami Hard vien tam, kad išvengtumėte trumpo Again intervalo, po nesėkmės užregistruojate sėkmę. Tada FSRS mokosi iš klaidingo įvykio. Rinkitės mygtuką pagal tai, kaip prisiminėte, o ne pagal norimą intervalą, rodomą virš mygtukų.

Dviprasmiškos kortelės trukdo vertinti sąžiningai. Jei užduotyje prašoma penkių faktų, o prisimenate keturis, planavimo problema prasidėjo kortelių redaktoriuje. Padalykite arba perrašykite kortelę. Jei kai kurių kortelių vis nepavyksta prisiminti net po daugelio kartojimų, skaitykite [Kaip pataisyti sunkiai įsimenamas mokymosi korteles](/blog/how-to-fix-leech-flashcards/).

## Rinkitės trumpus FSRS mokymosi žingsnius arba sąmoningai palikite laukus tuščius

Mokymosi ir pakartotinio mokymosi žingsniai nustato trumpus intervalus tarp kortelės kartojimų, kol pradeda veikti įprastas ilgalaikis grafikas. Tai nėra dar vienas įsiminimo tikslas.

Anki FSRS rekomendacijose nurodomi du apribojimai:

- kiekvienas žingsnis turėtų trukti trumpiau nei vieną dieną, kad jį būtų galima užbaigti tą pačią dieną
- kartojimų tą pačią dieną turėtų būti nedaug

Ilgos sekos, pavyzdžiui, `1m 10m 1d 3d`, perkelia seną SM-2 įprotį į FSRS. Vienos dienos ar ilgesni žingsniai atitolina modeliu pagrįstą planavimą ir dėl jų prie mygtukų gali būti rodomi klaidinantys intervalai: pavyzdžiui, Hard gali rodyti ilgesnį intervalą nei Good.

Trumpa seka, pavyzdžiui, `1m 10m`, ir `10m` pakartotinio mokymosi žingsnis yra atsargus pradinis variantas, jei jis tinka jūsų mokymosi sesijoms. Daugiau kartojimų tą pačią dieną savaime nėra geriau.

Anki 26.08 taip pat leidžia palikti tuščią mokymosi žingsnių lauką, pakartotinio mokymosi žingsnių lauką arba abu. Įjungus FSRS, tuščias laukas perduoda atitinkamo trumpalaikio kartojimo planavimą FSRS. Ši funkcija eksperimentinė, o Again intervalas gali būti viena diena ar ilgesnis. Jei norite iš anksto žinoti, kada kortelę vėl kartosite tą pačią dieną, palikite trumpus ranka nustatytus žingsnius; išvalykite lauką tik sąmoningai sutikdami, kad laiką parinktų FSRS.

## Kad grafikas keistųsi palaipsniui, išjunkite Reschedule cards on change

Kai **Reschedule cards on change** išjungta – tai numatytoji būsena – įjungus FSRS arba pakeitus norimą įsiminimo lygį ar parametrus, esamos kartojimo datos iš karto neperrašomos. Nauja konfigūracija pradedama taikyti ateityje kartojant korteles, todėl eilė keičiasi palaipsniui.

Išsaugojus vieną iš šių FSRS pakeitimų su įjungta parinktimi, kartojimo datos perskaičiuojamos iš karto. Priklausomai nuo naujo tikslo ir kortelių būsenų, gali tekti iš karto kartoti daug kortelių. Anki taip pat prideda perplanuotų kortelių kartojimų įrašus, todėl kolekcija padidėja.

Ši parinktis naudinga tik tada, kai iš tiesų norite perskaičiuoti jau sudarytą grafiką. Jei kolekciją naudojate seniai:

1. Sukurkite naują atsarginę kopiją ir įsitikinkite, kad mokate atšaukti pakeitimą arba atkurti duomenis iš atsarginės kopijos.
2. Paleiskite Simulator su siūlomais nustatymais.
3. Pasirinkite vieną konfigūracijos pakeitimą; nejunkite kelių eksperimentų.
4. Išsaugodami įjunkite perplanavimą tik jei norite, kad kartojimo datos būtų iš karto perrašytos, ir galite įveikti susidariusį krūvį.

Anki aiškiai rekomenduoja atsarginę kopiją pereinant nuo SM-2 su perplanavimu. Platesniame [mokymosi kortelių atsarginių kopijų vadove](/blog/how-to-back-up-flashcards/) paaiškinta, kodėl atkūrimo būdas toks pat svarbus kaip pats kopijos failas.

## Palikite didelę didžiausio intervalo ribą

Numatytasis Anki didžiausias intervalas yra 100 metų. Tai atrodo keista, kol neprisimenate, kad tai viršutinė riba, o ne pažadas kiekvieną gerai išmoktą kortelę paslėpti šimtmečiui.

Sumažinę ribą priverčiate gerai žinomas korteles grįžti anksčiau ir padidinate krūvį. Pasiekus ribą, Hard, Good ir Easy gali rodyti vienodą intervalą, nes nė vienas negali viršyti didžiausios reikšmės.

Trumpesnis didžiausias intervalas gali būti pagrįstas, kai egzaminas nustato konkretų terminą, medžiaga dažnai keičiasi arba profesinė taisyklė reikalauja kartoti nepaisant prognozuojamos atsiminimo tikimybės. Derinkite ribą su kalendoriumi ir Simulator, užuot rinkęsi mažą skaičių iš nerimo. Pasiruošimas egzaminui išsamiau aptartas straipsnyje [Kaip su FSRS ruoštis egzaminui](/blog/how-to-study-for-an-exam-with-fsrs/).

Įprastam ilgalaikiam mokymuisi palikite didelę ribą. Norimas įsiminimo lygis jau nustato, kada pagal prognozuojamą atsiminimą reikia kartoti.

## Rinkdamiesi krūvį įvertinkite ir naujų kortelių kiekį

FSRS gali paskirstyti kartojimus, bet negali neriboto naujų kortelių kiekio paversti įveikiamu krūviu. Kiekvieną naują kortelę reikia išmokti dabar ir kartoti vėliau.

Kai eilė per didelė, prieš mažindami norimą įsiminimo lygį peržiūrėkite:

- naujų kortelių skaičių per dieną
- didelius importus arba sugeneruotų kortelių partijas
- didžiausio kartojimų skaičiaus ribą, dėl kurios nuolat lieka neparodytų kortelių, nors jas jau laikas kartoti
- sunkiai įsimenamas ir neaiškias korteles, kurias vis tenka mokytis iš naujo
- praleistas kartojimo dienas

Naudokite **Additional new cards to simulate**, kai žinote, kad kaladė augs. Tik dabartine kolekcija paremta prognozė neatspindės krūvio po didelio importo.

Jei prognozuojamas krūvis per didelis, sumažinkite naujų kortelių kiekį ir modeliuokite dar kartą. Taip išsaugosite atsiminimo tikslą neprašydami planavimo algoritmo toleruoti dažnesnio užmiršimo.

## Anki ir Nibomo siūlo skirtingas FSRS nustatymo galimybes

Abu produktai naudoja FSRS-6, tačiau Anki FSRS nustatymai tiesiogiai neatitinka Nibomo nustatymų.

| Galimybė | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Norimas įsiminimo lygis | **Shared Preset** arba **This deck** | Nustatomas kiekvienai darbo sričiai; numatytoji reikšmė `0.90` |
| FSRS parametrai | **Optimize Current Preset** arba **Optimize All Presets** pagal kartojimų istoriją | Oficialūs numatytieji FSRS-6 svoriai fiksuoti; v1 naudotojas jų keisti negali |
| Mokymosi žingsniai | Keičiami; kai laukas tuščias, FSRS planavimas yra eksperimentinis | Nustatomi kiekvienai darbo sričiai; numatytoji seka `1m 10m` |
| Pakartotinio mokymosi žingsniai | Keičiami; kai laukas tuščias, FSRS planavimas yra eksperimentinis | Nustatomi kiekvienai darbo sričiai; numatytoji reikšmė `10m` |
| Didžiausias intervalas | Numatytoji reikšmė – 100 metų | Numatytoji reikšmė – 36 500 dienų, taip pat 100 metų |
| Nustatymų pakeitimai | Pagal numatytąją tvarką taikomi būsimiems kartojimams; galima perplanuoti ir esamą grafiką | Taikomi tik būsimiems kartojimams; esamos kartojimo datos neperskaičiuojamos |
| Krūvio įrankiai | **Help Me Decide (Experimental)** ir **FSRS Simulator (Experimental)** | v1 neturi lygiaverčio krūvio simuliatoriaus |

Nibomo naudoja standartinius Again, Hard, Good ir Easy įvertinimus ir saugo kiekvienos kortelės FSRS atminties būseną. Serverio, iOS ir Android planavimo algoritmai įgyvendinti atskirai, bet palaikomas vienodas jų veikimas; kartojimas žiniatinklyje naudoja serverio planavimo algoritmą, o ne ketvirtą jo kopiją.

Šios ribos ir numatytosios reikšmės aprašytos viešoje [Nibomo FSRS planavimo specifikacijoje](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Kompromisas aiškus: Nibomo suteikia praktišką FSRS-6 konfigūraciją darbo srities lygmeniu, o Anki leidžia smulkiau parinkti taikymo sritį, individualiai pritaikyti parametrus ir modeliuoti krūvį. Jei šios galimybės būtinos, Anki tiks geriau.

## Saugesnė eiga seniai naudojamai kolekcijai

Jei jau turite kelių mėnesių ar metų kartojimų istoriją, laikykitės šios tvarkos:

1. **Teisingai naudokite įvertinimus.** Again reiškia nesėkmę; Hard – sunkų, bet sėkmingą atsiminimą.
2. **Optimizuokite dabartinį nustatymų rinkinį.** Pritaikykite modelį savo istorijai, užuot redagavę ar kopijavę svorius.
3. **Jei reikia, paleiskite tinkamumo patikrą.** Kartojimų istorijos trūkumą ar nenuoseklumą laikykite duomenų problema.
4. **Naudokite Help Me Decide.** Pasirinkite įsiminimo lygio diapazoną pagal tai, kiek kortelių galite kartoti ar kiek minučių tam skirti.
5. **Paleiskite Simulator.** Palyginkite dabartinę konfigūraciją, siūlomą tikslą ir mažesnį naujų kortelių kiekį.
6. **Pakeiskite vieną nustatymą.** Pirmiausia koreguokite įsiminimo lygį arba naujų kortelių kiekį, tada stebėkite tikrąją eilę.
7. **Palikite trumpus žingsnius.** Atsisakykite vienos ar kelių dienų mokymosi ir pakartotinio mokymosi sekų; tuščius laukus naudokite tik kaip eksperimentą.
8. **Palikite didelę didžiausio intervalo ribą.** Trumpinkite tik dėl konkretaus termino ar reikalavimo.
9. **Palikite perplanavimą išjungtą.** Jei grafiką reikia perskaičiuoti iš karto, pirmiausia pasidarykite atsarginę kopiją ir pasiruoškite susidarysiančiai eilei.

Ši seka kuo ilgiau išsaugo galimybę atšaukti nusistovėjusio grafiko pakeitimus. Ji taip pat neleidžia trims atskiroms problemoms – modelio pritaikymui, atsiminimo tikslui ir naujos medžiagos srautui – susilieti į vieną nustatymų galvosūkį.

## Dažniausi klausimai apie geriausius FSRS nustatymus

### Ar 90 % yra geriausias FSRS norimas įsiminimo lygis?

Tai saugiausia pradinė reikšmė daugumai naudotojų, nes ji yra numatytoji Anki reikšmė ir leidžia išvengti stačiausios didelio įsiminimo lygio krūvio kreivės dalies. Geriausia reikšmė konkrečiai kaladei priklauso nuo užmiršimo kainos ir krūvio, kurį galite išlaikyti. Prieš keisdami pasinaudokite **Help Me Decide (Experimental)**.

### Ar verta nustatyti 95 % norimą įsiminimo lygį?

Tik įvertinus, kiek papildomai reikės kartoti ir kiek laiko tai užtruks. Tvarkinga svarbios medžiagos kaladė gali pateisinti 95 %, o didelė laisvalaikio mokymuisi skirta kolekcija gali sukelti nereikalingą krūvį. Kartu neįjunkite esamo grafiko perplanavimo, nebent sąmoningai norite iš karto perskaičiuoti kartojimo datas.

### Kaip dažnai optimizuoti FSRS parametrus?

Kartą per mėnesį – jau pakankamai dažnai, o Anki 26.08 paaiškinime programėlėje teigiama, kad pakanka karto per kelis mėnesius. Optimizuokite sukaupę pakankamai naujų kartojimų duomenų, o ne pagal kasdienį ar savaitinį grafiką.

### Ar FSRS mokymosi žingsnius reikėtų palikti tuščius?

Tušti mokymosi arba pakartotinio mokymosi žingsnių laukai leidžia Anki 26.08 perduoti atitinkamą trumpalaikį planavimą FSRS. Funkcija eksperimentinė, o Again kartojimas gali būti suplanuotas po dienos ar dar vėliau. Keli trumpi tos pačios dienos žingsniai išlieka atsargesnis pasirinkimas.

### Ar pakeitus FSRS nustatymus perplanuojamos esamos Anki kortelės?

Pagal numatytąją tvarką – ne. Kai **Reschedule cards on change** išjungta, nauji nustatymai veikia būsimus kartojimus, bet iš karto neperdaro eilės. Įjungus parinktį pasikeičia kartojimo datos ir gali tekti iš karto kartoti daug kortelių, todėl pirmiausia pasidarykite atsarginę kopiją.

### Ar Anki vis dar turi CMRR?

Ne. Anki pašalino Compute Minimum Recommended Retention 25.07 versijoje. Anki 26.08 naudokite **Help Me Decide (Experimental)** ir **FSRS Simulator (Experimental)**, kad palygintumėte įsiminimo lygį su numatomu krūviu.

### Ar Nibomo naudoja tuos pačius nustatymus kaip Anki?

Nibomo naudoja FSRS-6 ir leidžia kiekvienai darbo sričiai nustatyti norimą įsiminimo lygį, mokymosi žingsnius, pakartotinio mokymosi žingsnius, didžiausią intervalą ir atsitiktinį intervalų išsklaidymą (fuzz). Tačiau nekopijuoja viso Anki nustatymų modelio: v1 svoriai fiksuoti, pakeitimai taikomi tik būsimiems kartojimams, nėra nei individualaus parametrų optimizavimo, nei krūvio simuliatoriaus.

## Pirmiausia pasirinkite krūvį, tada procentą

Geri FSRS nustatymai padeda kartojimo eilę priderinti prie tikro mokymosi plano. Pradėkite nuo 90 %, įvertinkite darbą, kontroliuokite naujų kortelių kiekį ir didinkite įsiminimo lygį tik tada, kai geresnis atsiminimas vertas papildomų kartojimų. Rinkitės trumpus žingsnius, palikite didelę didžiausio intervalo ribą ir sąžiningai vertinkite atsakymus.

Tada užverkite nustatymų ekraną. Planavimo algoritmui labiau reikia nuoseklių kartojimų nei dar vieno derinimui skirto vakaro.
