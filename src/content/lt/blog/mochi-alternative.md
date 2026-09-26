---
title: "Mochi mokymosi kortelių apžvalga (2026): nemokamas planas, naudojimas be interneto ir palyginimas su Anki"
description: "Pagal šaltinius patikrinta Mochi mokymosi kortelių apžvalga: nemokamas planas, programėlių naudojimas be interneto, Markdown užrašai, FSRS, sinchronizavimas, Anki importas, eksportas ir savarankiško talpinimo ribos."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi mokymosi kortelės"
  - "mochi kortelės"
  - "mochi ar anki"
  - "anki ar mochi"
  - "ar mochi nemokamas"
  - "mochi be interneto"
  - "mochi kainos"
  - "mochi priegloba"
  - "markdown mokymosi kortelės"
  - "mochi intervalinis kartojimas"
---

Naudodamiesi Mochi, pradedate nuo Markdown dokumento, o ne įprastos formos su priekine ir galine kortelės puse. Pridėkite eilutę su trimis brūkšneliais, ir dokumentas įgis kartojimui skirtas puses. Galite palikti jį kaip užrašą, susieti su kita kortele arba archyvuoti, kad jis liktų pasiekiamas per paiešką, bet nepatektų į kartojimo eilę.

Šis mažas skirtukas padeda suprasti, kam tinka **Mochi mokymosi kortelės**. Mochi gerai tinka tiems, kas nori užrašų ir intervalinio kartojimo vienoje programėlėje, kurios duomenys pirmiausia saugomi įrenginyje, ypač jei Markdown, atgalinės nuorodos ir paprastas pasirinkimas Remembered („Prisiminiau“) / Forgot („Pamiršau“) atrodo natūralūs. Mochi mažiau tinka ilgamečiam Anki naudotojui, kurio kolekcija priklauso nuo generuojamų kortelių variantų, pasirinktinio HTML/CSS, JavaScript, papildinių ar išsamių kartojimo planavimo nustatymų.

Naudojant vieną įrenginį, nemokamas planas nėra vien bandomoji versija: registruotis nereikia, o Mochi dokumentacijoje nurodytas neribotas naudojimas be interneto. Tačiau sinchronizavimas tarp įrenginių priklauso **Pro planui už 5 USD per mėnesį**. Anki naudotojui didesnė kaina – perkeliant prarandami duomenys ir funkcijos. Mochi gali importuoti Anki paketą ir jo kartojimų istoriją, tačiau negali išsaugoti kiekvieno šablono, stiliaus, scenarijaus, planavimo nustatymo ar papildinio veikimo.

> **Apie autoriaus interesus:** esu Kirill Markin, kuriu [Nibomo](/lt/). Tai pagal šaltinius patikrinta darbo su programa apžvalga, o ne teiginys, kad pats praktiškai išbandžiau produktą. Partnerinių nuorodų nėra. Daugiausia lyginami Mochi ir Anki; mano produktas paminėtas tik pabaigoje, aiškiai įvardytas kaip alternatyva.

**Faktai patikrinti:** 2026 m. rugsėjo 7 d. Tuo metu naujausia matoma [Mochi laida](https://mochi.cards/changelog/) buvo 26.8.2 versija, išleista 2026 m. rugpjūčio 10 d. Kainos ir programėlių parduotuvių duomenys gali keistis.

![Knygų restauratorius išbando mažą armonikėle sulankstytą susietų kortelių rinkinį, o originalus archyvas saugiai laikomas dėžėje](/blog/mochi-alternative-v3.png)

## Trumpa apžvalga

- **Rinkitės Mochi**, jei norite Markdown užrašų ir kortelių vienoje vietoje, naudojimo be interneto ir be paskyros viename įrenginyje, atgalinių nuorodų ir pasirinkimo iš dviejų kartojimo įvertinimų.
- **Rinkitės Anki**, jei reikia brandžių užrašų tipų, HTML/CSS šablonų, papildinių, nemokamo sinchronizavimo per teikėjo serverį, keturių kartojimo įvertinimų ar išsamesnių FSRS nustatymų.
- **Dar nekeiskite programos**, jei jau reguliariai kartojate ir negalite įvardyti, kokią darbo problemą išspręs Mochi. Nauja sąsaja nėra pakankama priežastis rizikuoti metų metus kauptais planavimo duomenimis ir pasirinktinėmis kortelėmis.
- **Prieš perkeldami išbandykite**, jei Anki jau saugo jūsų ilgalaikę kolekciją. Mochi priima `.apkg` failus ir gali perkelti kartojimų istoriją, tačiau HTML konvertuoja į Markdown, o CSS ir JavaScript pašalina.

## Trumpas Mochi ir Anki palyginimas

| Kriterijus | Mochi | Anki |
|---|---|---|
| Kam geriausiai tinka | Susietų užrašų ir Markdown naudotojams, norintiems užrašų greta kartojimo kortelių | Besimokantiesiems, norintiems brandžios, konfigūruojamos mokymosi kortelių sistemos |
| Kortelių kūrimas | Pridėjus `---`, Markdown dokumentas įgyja kelias puses; taip pat galima naudoti laukus ir šablonus | Užrašai turi laukus; HTML/CSS šablonai generuoja vieną ar daugiau kortelių |
| Kartojimo eiga | Naujos kortelės pirmiausia patenka į mokymosi etapą; išmoktoms naudojami Forgot / Remembered įvertinimai | Kortelėms naudojami Again / Hard / Good / Easy įvertinimai |
| Kartojimo planavimas | Pagal numatytuosius nustatymus – pačios Mochi algoritmas; FSRS galima pasirinkti | FSRS arba ankstesnis SM-2, su išsamesnėmis FSRS derinimo priemonėmis |
| Nemokamas naudojimas | Be registracijos ir neribotai be interneto | Nemokamos kompiuterių programos ir AnkiWeb sinchronizavimas; oficiali iOS programėlė mokama |
| Sinchronizavimas tarp įrenginių | Pro, 5 USD per mėnesį | Nemokamas per AnkiWeb |
| Platformos | Žiniatinklis, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, oficiali AnkiMobile, nepriklausoma AnkiDroid |
| Perkėlimo formatai | Savasis `.mochi` formatas, Markdown ir CSV eksportas | Savieji `.colpkg` ir `.apkg` formatai bei tabuliacijos ženklais atskirtas tekstas |
| Duomenų ir prieglobos ribos | Duomenys pirmiausia saugomi įrenginyje; pagrindinė programa nepristatoma kaip atvirojo kodo, palaikoma savarankiškai diegiama sinchronizavimo paslauga nedokumentuota | Pagrindinei saugyklai taikoma AGPL licencija; dokumentuotas oficialus savarankiškai diegiamas sinchronizavimo serveris |

Svarbiausias skirtumas – **darbo su užrašais paprastumas arba išsamus visos kolekcijos valdymas**.

## Kuo pagrįsta Mochi sąsaja

Mochi sąsają lengviau suprasti pasekus vienos kortelės kelią.

Kiekviena kortelė priklauso rinkiniui. Spustelėję **New Card** („Nauja kortelė“), gaunate Markdown redagavimo sritį, o ne fiksuotus klausimo ir atsakymo laukelius. Vienoje kortelėje gali būti antraščių, sąrašų, kodo, paveikslėlių, struktūrinių laukų ir nuorodų. Tarp blokų įrašykite `---`, kad sukurtumėte dvi ar daugiau kartojimui skirtų pusių. Naudokite `[[double brackets]]` – dvigubus laužtinius skliaustus – nuorodai į kitą kortelę; Mochi automatiškai sukurs atgalinę nuorodą. Oficialioje [kortelių apžvalgoje](https://mochi.cards/docs/cards/) taip pat aprašyti šablonai, kurių vietaženkliai atvaizduoja struktūrinių laukų reikšmes.

Kortelės gali atlikti dvi užduotis ir tam nereikia atskirų sistemų:

- kartojimo kortelė turi kelias puses ir įtraukiama į intervalinio kartojimo planą;
- informacinis užrašas gali likti tame pačiame rinkinyje ir būti archyvuotas: taip jis pašalinamas iš naujų ir numatytų kartoti kortelių eilių, bet išsaugomi jo turinys, žymos, nuorodos ir istorija.

[Rinkinio rodiniai](https://mochi.cards/docs/decks/custom-views/) – tai išsaugoti filtrų, rikiavimo ir išdėstymo deriniai. Įprastai peržiūrai galite palikti tinklelį, o kitą rodinį sukurti pagal žymą, kartojimo terminą, prastą įsiminimą ar paskutinį kartojimą. Mochi taip pat leidžia rodinį paversti intensyvaus mokymosi sesija, nekeičiant įprasto plano ar kartojimų istorijos. Tai konkrečiau nei pavadinti sąsają „tvarkinga“: tas pats rinkinys gali veikti kaip užrašinė, filtruojama duomenų bazė ir mokymosi eilė.

[Kasdienis kartojimas](https://mochi.cards/docs/getting-started/reviewing-cards/) turi du etapus. Etape **New cards** („Naujos kortelės“) kortelę arba įtraukiate į kartojimo planą, arba pasirenkate Again („Dar kartą“), kad netrukus ją pamatytumėte vėl. Atėjus išmoktos kortelės kartojimo laikui, atverčiate kitą jos pusę ir pasirenkate **Forgot** („Pamiršau“) arba **Remembered** („Prisiminiau“). Jei atsakymą pamiršote, prieš iš naujo nustatydama pažangą programa įtraukia kortelę į pakartotinio kartojimo eilę. Taip kartojant sąmoningai paliekamas tik paprastas pasirinkimas.

## Ar Mochi nemokamas ir kas veikia be interneto?

Taip, tačiau „nemokamas“ ir „be interneto“ reiškia skirtingus dalykus priklausomai nuo to, kur juo naudojatės. [Mochi kainoraštyje](https://mochi.cards/) nurodyta:

- **Free („Nemokamas“):** visam laikui 0 USD, registruotis nereikia, naudojimas be interneto neribotas.
- **Pro (mokamas planas):** 5 USD per mėnesį; papildomai suteikiamas sinchronizavimas tarp įrenginių, rinkinių publikavimas, dinaminiai laukai, DI integracija ir pagalba el. paštu.

Mochi veikia macOS, Windows, Linux, iOS, Android ir žiniatinklyje. Jo [atsisiuntimo ir diegimo vadove](https://mochi.cards/docs/getting-started/download-and-install/) paaiškintos praktinės ribos:

| Aplinka | Ką reiškia nemokamas naudojimas ir veikimas be interneto |
|---|---|
| Įdiegta kompiuterio ar mobilioji programėlė | Mochi galima naudoti be interneto ir be paskyros. Duomenys saugomi įrenginyje, todėl vienos įdiegtos programėlės gali pakakti visam nemokamam mokymosi procesui. |
| Žiniatinklio programėlė be Pro | Turinys laikomas vietinėje naršyklės saugykloje. Mochi įspėja, kad naršyklė gali išvalyti šiuos duomenis be įspėjimo. |
| Ta pati kolekcija keliuose įrenginiuose | Automatinis sinchronizavimas tarp įrenginių yra Pro funkcija, nors kiekviena įdiegta programėlė gali veikti be interneto. |

Naudojimas be interneto ir sinchronizavimas – atskiri pažadai. Vien tam, kad atsisiųstoje programėlėje kurtumėte ar kartotumėte korteles, Pro nereikia. Jo reikia, jei ta pati naujausia kolekcija turi automatiškai persikelti iš nešiojamojo kompiuterio į telefoną. Svarbiems nemokamo plano duomenims saugokite atsarginę kopiją savuoju programos formatu, užuot laikę įrenginį, ypač naršyklės saugyklą, vienintele kopija.

Jei svarbiausia veikimas be interneto, palyginkite konkrečių įrenginių naudojimą straipsnyje [Ar Anki veikia be interneto?](/blog/does-anki-work-offline/) ir platesniame [mokymosi kortelių programėlių be interneto vadove](/blog/best-offline-flashcards-app/).

## Markdown mokymosi kortelės – tikroji priežastis rinktis Mochi

Tikrasis Mochi pranašumas – tai, kaip Markdown pakeičia jūsų tvarkomą pradinę medžiagą.

Mochi kortelė lieka skaitoma kaip tekstas. Tame pačiame dokumente gali būti trumpas paaiškinimas, kodo blokas, nuorodos į susijusias idėjas ir skirtukai tarp kartojimui skirtų pusių. Kai svarbi pasikartojanti struktūra, kortelėse taip pat galima naudoti laukus ir šablonus. Pritaikius šabloną, Mochi atvaizduoja šablono Markdown su laukų vietaženkliais, o pačios kortelės Markdown atvaizduodamas ignoruoja, bet neištrina.

Anki pagrįstas kitu modeliu. Užrašas saugo laukus, o [kortelių šablonai](https://docs.ankiweb.net/templates/intro.html) nurodo, kurie laukai rodomi ir kokios kortelės generuojamos. Šablonuose naudojamas HTML, o stiliui – CSS. Todėl iš vieno žodyno užrašo galima sukurti atpažinimo ir savarankiško atsakymo korteles, pradinius duomenis laikant vienoje vietoje.

Tokia struktūra suteikia Anki daugiau galimybių sąlyginiam išdėstymui, generuojamiems kortelių variantams, įvedamiems atsakymams, pasirinktam stiliui ir papildiniais išplečiamam darbui. Kartu tai reiškia, kad Anki nėra mokymosi kortelių programa su integruotu Markdown palaikymu. Norint Anki dirbti su Markdown, reikia papildomo konvertavimo arba papildinio.

Praktinis klausimas paprastas: norite užrašo, kuris gali tapti kortele, ar struktūrizuoto užrašo tipo, kuris gali generuoti kelias korteles? Mochi labiau pritaikytas pirmajam variantui. Anki – antrajam.

## Mochi intervalinis kartojimas jau palaiko FSRS

Palyginimai, kuriuose teigiama, kad Mochi neturi FSRS, pasenę. Mochi pridėjo bandomąjį FSRS palaikymą 2025 m. ir toliau leido kartojimo planavimo pataisas. Vis dėlto [pagal numatytuosius nustatymus tebenaudojamas pačios Mochi algoritmas](https://mochi.cards/docs/reviewing/fsrs/).

Numatytasis algoritmas po kiekvieno prisiminto ar pamiršto atsakymo keičia intervalus naudodamas fiksuotus daugiklius. Kartojimo nustatymuose (Review Settings) perjunkite į FSRS, ir jau išmoktos kortelės pereis prie FSRS neprarasdamos istorijos. Galite nustatyti siekiamą įsiminimo lygį, įvesti pasirinktinius parametrus ir vėliau grįžti prie ankstesnio algoritmo.

Su abiem planavimo algoritmais Mochi išlaiko du įvertinimus:

- **Forgot** („Pamiršau“) atitinka FSRS Again („Dar kartą“).
- **Remembered** („Prisiminiau“) atitinka FSRS Good („Gerai“).

Mochi dokumentacijoje teigiama, kad dviejų įvertinimų sistema veikia su FSRS, nors prarandama dalis informacijos, kurią suteiktų Hard („Sunku“) ir Easy („Lengva“). Mochi priima optimizuotus pasirinktinius parametrus, tačiau neturi įtaisytos optimizavimo priemonės; asmeniniams parametrams apskaičiuoti reikia išorinės FSRS optimizavimo priemonės ir Mochi kartojimų istorijos.

[Anki FSRS nustatymai](https://docs.ankiweb.net/deck-options.html#fsrs) suteikia daugiau galimybių. Siekiamą įsiminimo lygį ir parametrus galima susieti su nustatymų profiliais, įtaisyta optimizavimo priemonė gali pritaikyti parametrus pagal kartojimų istoriją, o simuliatorius apskaičiuoja numatomą kartojimų skaičių ar mokymosi minutes esant skirtingiems nustatymams. Anki taip pat registruoja keturis rezultatus: Again, Hard, Good ir Easy.

Šie papildomi mygtukai padeda tik tada, kai juos naudojate nuosekliai. Anki vadove Hard laikomas sėkmingu prisiminimu. Paspaudę Hard, kai atsakymą pamiršote, perduodate FSRS klaidingą informaciją, todėl intervalai gali tapti per ilgi.

Rinkitės du Mochi įvertinimus, jei sprendimas „prisiminiau arba neprisiminiau“ padeda mokytis nesiblaškant. Rinkitės Anki, jei norite daugiau vertinimo informacijos ir naudosite jo optimizavimo priemonę, įsiminimo nustatymus, nustatymų profilius ar darbo krūvio simuliatorių. Apie pačius planavimo algoritmus, o ne programėles, skaitykite [FSRS ir SM-2 palyginimą](/blog/fsrs-vs-sm-2/).

## Už ką mokate naudodamiesi Mochi ir Anki

Mokantis viename kompiuteryje, abi programos gali nieko nekainuoti. Pradėjus naudoti daugiau įrenginių, mokėti tenka už skirtingus dalykus.

Mochi už Pro sinchronizavimą ima **5 USD per mėnesį** ir kartu suteikia publikavimą, dinaminius laukus, DI integraciją bei pagalbą. Anki kompiuterių programos nemokamos, o [oficialioje Anki svetainėje](https://apps.ankiweb.net/) AnkiWeb sinchronizavimas apibūdinamas kaip nemokamas. AnkiMobile yra mokama oficiali iPhone ir iPad programėlė; AnkiDroid – nemokamas, nepriklausomai kuriamas Android klientas.

Tad atsakymas į klausimą „Kas pigiau?“ priklauso nuo jūsų įrenginių:

- vienas kompiuteris: abi programos gali būti nemokamos;
- keli kompiuteriai ar Android įrenginiai: nemokamas Anki sinchronizavimas per teikėjo serverį leidžia apsieiti be prenumeratos;
- iPhone ar iPad: naudojant Anki prisideda vienkartinis programėlės pirkimas, o Mochi sinchronizavimui tarp įrenginių reikia periodiškai apmokamo Pro plano;
- Mochi naudotojai, kuriems jau reikia publikavimo, dinaminių laukų ar jo DI integracijos, sinchronizavimą gali vertinti kaip vieną paketo dalį, o ne visą pirkinį.

Prieš lygindami tikslias iOS išlaidas, patikrinkite savo regiono App Store. Šioje apžvalgoje nenurodau vienos tikslios programėlės kainos, nes ji gali skirtis priklausomai nuo rinkos.

## Mochi priegloba nėra tas pats, kas duomenų saugojimas įrenginyje

Trys sąvokos dažnai suplakamos į vieną:

- **Duomenys pirmiausia įrenginyje (local-first)** reiškia, kad darbinė kopija saugoma jūsų įrenginyje, o programėlė gali veikti ir be savo debesijos paslaugos.
- **Atvirasis kodas** reiškia, kad pradinis kodas prieinamas pagal licenciją, leidžiančią jį nagrinėti ir keisti.
- **Savarankiškas talpinimas** reiškia, kad produkto dokumentacijoje nurodytas palaikomas būdas atitinkamą paslaugą paleisti savo infrastruktūroje.

Mochi aiškiai dokumentuoja darbą su įrenginyje saugomais duomenimis. Pagrindinės programos jis nepristato kaip atvirojo kodo: viešos svetainės poraštėje esanti „Open source“ nuoroda veda į [integracijų rinkinį](https://github.com/mochi-cards/open-source), o ne į pagrindinę programą. Oficialioje svetainėje taip pat nedokumentuotas palaikomas, savarankiškai diegiamas Pro sinchronizavimo pakaitalas.

Jei ieškote **Mochi prieglobos**, nes norite savo serverio, riba tokia: galite saugoti vietinius duomenis ir atsargines kopijas savuoju programos formatu, tačiau dokumentuotas kelias tarp įrenginių yra Mochi Pro. Darbas su vietiniais duomenimis suteikia naudingą jų kontrolę, bet tai nėra savarankiškas paslaugos talpinimas.

Pagrindinei Anki saugyklai [taikoma AGPL 3 ar vėlesnės versijos licencija](https://github.com/ankitects/anki/blob/main/LICENSE), su nurodytomis išimtimis kai kuriems komponentams. Oficialiame vadove taip pat dokumentuotas [savarankiškai diegiamas sinchronizavimo serveris](https://docs.ankiweb.net/sync-server.html), skirtas pažengusiems naudotojams. Jis pakeičia AnkiWeb sinchronizavimą suderinamiems klientams; tai nėra jūsų serveryje veikianti AnkiWeb svetainės kopija. Anki tikisi, kad serverio prižiūrėtojas pats spręs komandų eilutės, tinklo, užkardos, protokolo ir atnaujinimų klausimus.

## Ką išsaugo importas iš Anki ir ką jis pakeičia

Mochi [importavimo dokumentacijoje](https://mochi.cards/docs/import-and-export/importing/) nurodyta, kad programa priima Anki `.apkg` failus, įskaitant kartojimų istoriją. Tačiau „importuota“ ir „lygiavertiškai atkurta“ nėra tas pats rezultatas.

Importuodama Mochi konvertuoja HTML į Markdown ir pašalina CSS bei JavaScript. Tai formato konvertavimas tarp dviejų skirtingų kortelių modelių. Lengviausia perkelti paprastas dvipuses korteles. Korteles, priklausančias nuo stiliaus, šablono logikos, įvedamų atsakymų ar JavaScript, po importo reikia apžiūrėti.

Norint perkelti kartojimų istoriją, eksportuojant taip pat reikia aiškiai tai pasirinkti. Anki [eksportavimo vadove](https://docs.ankiweb.net/exporting.html) nurodyta, kad **Include Scheduling Information** („Įtraukti kartojimo planavimo duomenis“) lemia, ar kartojimų istorija pateks į paketą. Jei šios parinkties neįjungsite, Mochi negalės atkurti istorijos, kurios `.apkg` faile niekada nebuvo.

Net jei istorija perkeliama, nesitikėkite vienodų būsimų kartojimo datų. Abi programos gali naudoti skirtingus planavimo algoritmus, įvertinimus, siekiamą įsiminimo lygį, parametrus, mokymosi žingsnius ir rinkinių nustatymus. Išsaugoti įvykiai suteikia naujam algoritmui duomenų, tačiau nesuvienodina sistemų.

## Atsarginės kopijos savuoju programos formatu ir perkeliamas tekstas atlieka skirtingas užduotis

Prieš ką nors perkeldami, išsaugokite atsarginę kopiją, iš kurios būtų galima atkurti pradinę sistemą. Skaitomas eksporto failas naudingas, tačiau iš jo ne visada galima viską atkurti.

Mochi [atsarginių kopijų vadove](https://mochi.cards/docs/getting-started/backing-up/) aprašyti du būdai išsaugoti atsarginę kopiją savuoju programos formatu:

- Nukopijavus visą naudotojo katalogą, išsaugomas turinys, kartojimų istorija, priedai, programėlės nustatymai ir prisijungimo būsena.
- Eksportas į `.mochi` išsaugo rinkinius, korteles, šablonus ir laukus, priedus, žymas ir metaduomenis, kartojimų istoriją, kortelių tvarką ir rinkinių struktūrą.

Mochi [Markdown ir CSV eksportas](https://mochi.cards/docs/import-and-export/exporting/) skirtas duomenims perkelti. Markdown sukuria po vieną failą kiekvienai kortelei ir aplankus įdėtiniams rinkiniams, tačiau neišsaugo kartojimų istorijos, kortelių tvarkos, šablonų ir metaduomenų žymų, nebent žymos įrašytos pačiame Markdown. CSV gali eksportuoti šablono laukus arba atvaizduotas priekines ir galines puses, tačiau neišsaugo kartojimų istorijos, šablonų ar metaduomenų žymų, nebent jos įterptos į turinį.

Anki taip pat skiria šias paskirtis:

- `.colpkg` eksportuoja visą kolekciją su kartojimo planu ir gali įtraukti mediją. Importavus jį, pakeičiamos tikslinės Anki kolekcijos kortelės.
- `.apkg` eksportuoja vieną rinkinį ir jo įdėtinius rinkinius; galima pasirinkti įtraukti kartojimo planavimo duomenis, nustatymų profilius ir mediją.
- Paprastojo teksto užrašuose naudojami tabuliacijos ženklais atskirti laukai su įterptu HTML formatavimu. Jie išsaugo redaguojamą turinį, bet ne visą kolekcijos veikimą.

Grįžtant iš Mochi į Anki paprastai naudojamas CSV formatas. Anki gali [susieti teksto stulpelius su užrašo laukais](https://docs.ankiweb.net/importing/text-files.html), tačiau per šį failą Mochi nuorodos, kelių pusių veikimas, šablonai ir kartojimų istorija netampa lygiaverčiais Anki objektais. Pasilikite `.mochi` eksporto failą ir tada, kai Anki kopija jau atrodo teisinga.

## Išbandykite tipišką rinkinį taip, kad galėtumėte grįžti

Perkėlimo dialogo langas patvirtina, kad failas priimtas. Jis neįrodo, kad tikroji kolekcija vis dar veikia ar kad galėsite susigrąžinti tinkamą naudoti turinį. Išbandykite abi kryptis, nepaliesdami įprasto Anki profilio.

1. **Sukurkite visos Anki kolekcijos atsarginę kopiją.** Eksportuokite `.colpkg` su medija ir laikykite jį ne darbiniame profilyje.
2. **Įsitikinkite, kad kopija atsidaro.** Sukurkite tuščią laikiną Anki profilį ir ten importuokite `.colpkg`. Kolekcijos paketo importas pakeičia tikslinę kolekciją, todėl laikinas profilis svarbus.
3. **Tame laikiname profilyje sudarykite tipišką rinkinį.** Jis turi būti pakankamai mažas, kad galėtumėte patikrinti kiekvieną kortelę, tačiau įtraukite jums svarbias funkcijas: paprastas ir atvirkštines korteles, praleisto teksto užduotis, pasirinktinius šablonus, CSS, JavaScript, paveikslėlius, garsą, lygtis, žymas, įdėtinius rinkinius ir kartojimų istoriją.
4. **Eksportuokite šį rinkinį kaip `.apkg`.** Įtraukite kartojimo planavimo duomenis, nustatymų profilius ir mediją, jei jie svarbūs. Šios parinktys įtraukia duomenis į Anki paketą, tačiau negarantuoja, kad Mochi atkurs kiekvieną nustatymą.
5. **Importuokite į naują Mochi rinkinį.** Kasdienį Anki profilį ir jo numatytų kartoti kortelių eilę palikite nepakeistus.
6. **Prieš kartodami patikrinkite korteles.** Palyginkite turinį, formatavimą, laukus, mediją, žymas, rinkinių struktūrą ir istoriją. Ypač atidžiai patikrinkite viską, kas priklausė nuo HTML, CSS, JavaScript ar generuojamų kortelių variantų.
7. **Planavimo algoritmą pasirinkite sąmoningai.** Mochi pradeda nuo savo algoritmo. FSRS įjunkite tik tada, jei jį ketinate naudoti ir po bandymo.
8. **Kartokite kopiją vieną įprastą savaitę.** Įvertinkite Markdown redagavimą, New cards etapą, Remembered/Forgot pasirinkimą, veikimą be interneto ir, jei už jį sumokėjote, sinchronizavimą įrenginiuose, kuriuos iš tikrųjų nešiojatės.
9. **Išbandykite grįžimą.** Eksportuokite bandomąjį Mochi rinkinį kaip `.mochi` atsarginei kopijai savuoju programos formatu ir kaip CSV perkėlimui į Anki. Rinkitės laukų reikšmių CSV, kai svarbūs pakartotinai naudojami laukai; atvaizduotų pusių CSV – kai daugiausia reikia matomo priekinės ir galinės pusės turinio. Importuokite tą CSV į kitą tuščią Anki profilį ir susiekite jo stulpelius su tinkamu užrašo tipu.
10. **Užrašykite kiekvieną praradimą, su kuriuo sutinkate.** Perkėlimą pirmyn ir atgal tikrinkite atskirai. Tikslus stilius, kelių pusių veikimas, papildinių veikimas, generuojami variantai, kartojimo įvertinimai, istorija ar būsimos kartojimo datos kasdien naudojant gali pasirodyti svarbesni nei palyginimo lentelėje.

Grįžimas per CSV yra turinio perkėlimas, o ne visiškas Mochi atkūrimas: jis neperkelia kartojimų istorijos, šablonų ar metaduomenų žymų, nebent šios žymos įterptos į turinį. Jei Mochi neišsprendžia jūsų įvardytos problemos, ištrinkite bandomąjį rinkinį ir toliau naudokite pradinį Anki profilį. Jei išsprendžia, perkelkite po vieną tikrą rinkinį ir saugokite Anki `.colpkg` bei Mochi `.mochi` atsargines kopijas per kelis įprastus kartojimo ciklus.

## Kam verta naudoti Mochi mokymosi korteles?

Mochi gerai tinka, kai:

- jau rašote ir dėliojate mintis naudodami Markdown;
- užrašai ir kartojimo kortelės turėtų būti vienoje susietoje darbo srityje;
- vietoj keturių įvertinimų norite paprasto Remembered/Forgot pasirinkimo;
- nemokamam darbui pakanka vieno įrenginio be interneto arba Pro sinchronizavimas jums vertas 5 USD per mėnesį;
- kolekcija nauja arba pakankamai paprasta, kad konvertavimas iš Anki nekeltų didelės rizikos.

Likite su Anki, kai:

- jūsų užrašų tipai generuoja kelis svarbius kortelių variantus;
- HTML/CSS šablonai, JavaScript, papildiniai ar bendrinami rinkiniai yra sistemos dalis;
- nemokamas sinchronizavimas tarp įrenginių svarbesnis už rašymą Markdown formatu;
- norite Anki FSRS optimizavimo priemonės, nustatymų profilių valdymo, keturių įvertinimų ir darbo krūvio simuliatoriaus;
- metų metus kaupti kartojimo duomenys ir pritaikytos funkcijos jau padeda sėkmingai mokytis.

Tinkamiausia Mochi alternatyva priklauso nuo to, kodėl netinka nė vienas pasirinkimas. Jei pradedate naują, paprastesnę kolekciją, [Nibomo siūlo](/lt/features/) FSRS kartojimą, mokymąsi be interneto ir sinchronizavimą, kortelių, žymų ir medijos perkėlimą, agentų prieigą ir dokumentuotą savarankiško diegimo būdą. Aš kuriu šį produktą, ir jo ribos svarbios: jis nepakeičia nei Mochi susietos Markdown užrašinės, nei brandžios Anki šablonų ir papildinių sistemos. [Darbo pradžios vadove](/docs/getting-started/) pateikti dabartiniai būdai naudotis teikėjo prižiūrima paslauga, mobiliosiomis programėlėmis, agentais ir savarankišku diegimu.

## Ką rinktis

Mochi yra daugiau nei gražesnė Anki sąsaja. Pagrindinė jo idėja – Markdown užrašas, susietas žinių įrašas ir intervalinio kartojimo kortelė gali būti tas pats objektas. Nemokamas planas apima darbą be paskyros ir be interneto; Pro suteikia papildomų debesijos funkcijų, įskaitant sinchronizavimą tarp įrenginių.

Tai geras kompromisas besimokančiajam, kuris pradeda naują, Markdown pagrįstą kolekciją. Pereiti iš Anki taip pat gali būti verta, jei tipiško rinkinio bandymas parodo, kad tiesioginis darbas su Markdown ir du kartojimo įvertinimai pašalina tikrus nepatogumus.

Ilgamečiam Anki naudotojui pirmiausia reikia įrodyti perėjimo naudą. Sukurkite kolekcijos atsarginę kopiją, išbandykite korteles, kurių veikimas labiausiai pritaikytas jūsų poreikiams, ir likite su Anki, nebent Mochi pakankamai pagerina įprastą savaitės darbą, kad pateisintų konkrečių formatavimo, šablonų, kartojimo planavimo ir ekosistemos funkcijų atsisakymą.
