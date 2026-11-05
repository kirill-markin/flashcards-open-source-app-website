---
title: "Anki kortelių dublikatai – kaip juos rasti ir nuspręsti, ką palikti"
description: "Sužinokite, kodėl Anki rodo pasikartojančias korteles, kaip palyginti užrašus ir išsirinkti, kurį pasilikti. Trumpas pratimas padės patikrinti, ar išliko kartojimų istorija."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "Anki kortelių dublikatai"
  - "kaip rasti dublikatus Anki"
  - "kaip ištrinti Anki užrašų dublikatus"
  - "Anki užrašų dublikatai"
  - "Anki kartojimų istorija"
---

Atpažįstate jau kartotą klausimą, bet Anki jį rodo kaip naują. Gal importuojant atsirado kopija. O gal matote antrą kortelę, sukurtą iš to paties užrašo. Prieš trinant svarbu išsiaiškinti, kas nutiko. Ištrynus vieną eilutę naršymo lange, gali dingti visos to užrašo kortelės, net ir ta, kurią norėjote pasilikti.

Norėdami sutvarkyti **Anki kortelių dublikatus**, pirmiausia išsiaiškinkite, kodėl kartojasi klausimai. Jei kortelės sukurtos iš skirtingų užrašų, galimų dublikatų ieškokite per **Notes → Find Duplicates**. Sutampantis laukas parodys, kuriuos užrašus verta palyginti. Peržiūrėję jų turinį ir kiekvienos kortelės istoriją, kiekvienoje grupėje atskirai nuspręskite, kurią kopiją pasilikti.

Šios instrukcijos skirtos kompiuteriams ir remiasi Anki dokumentacija bei išleistos versijos kodu, patikrintais 2026 m. spalio 4 d. Meniu pavadinimai pateikti taip, kaip rodomi angliškoje sąsajoje. Pratimas išgalvotas, o jo lentelėse nurodyti tikėtini rezultatai pagal šiuos šaltinius.

![Šachmatų klubo narys lygina dar vieną šviesų bokštą su dviem aptrintais bokštais ant medinės šachmatų lentos](/blog/anki-duplicate-cards.png)

## Išsiaiškinkite, kas kartojasi

Užrašą sudaro laukai, pavyzdžiui, **Front** (priekinė pusė) ir **Back** (galinė pusė). Iš jų pagal šablonus Anki sukuria korteles. Vienoje žodyno kortelėje gali reikėti atpažinti užsienio kalbos žodį, kitoje – prisiminti tos kalbos žodį pagal jo reikšmę. Abi kortelės priklauso tam pačiam užrašui, tačiau kiekviena turi savo kartojimo grafiką. [Anki vadovas apie užrašus ir laukus](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Naršymo lange (**Browse**) įjunkite **Cards** režimą. Pažymėkite eilutę, kurioje matote galimą dublikatą, ir pasirinkite **Cards → Info**. Taip pat patikrinkite kitas tokias eilutes ir palyginkite užrašų identifikatorius (**Note ID**). Vienodas identifikatorius reiškia, kad kortelės priklauso tam pačiam užrašui. Skirtingi identifikatoriai rodo atskirus užrašus. Užklausoje `nid:123` vietoj `123` įrašykite tikrą užrašo identifikatorių ir pamatysite visas to užrašo korteles, kad ir kuriose kaladėse jos būtų. [Anki vadovas apie identifikatorius ir paiešką pagal juos](https://docs.ankiweb.net/searching.html#object-ids)

| Ką radote | Tikėtina priežastis | Ką daryti |
| --- | --- | --- |
| Tas pats užrašas, klausimai priešingomis kryptimis | Abi kortelės sukurtos sąmoningai | Įvertinkite, ar abu klausimai naudingi |
| Tas pats užrašas, kortelėse rodomi vienodi klausimai | Gali dubliuotis kortelių šablonai | Palyginkite šablonus ir tai, ką rodo kortelių peržiūra |
| Skirtingi užrašai, klausimai atrodo vienodi | Užrašai gali dubliuotis | Prieš rinkdamiesi, kurį palikti, palyginkite visą abiejų užrašų turinį |

Kaip veikia abi klausimų kryptys, paaiškinta [atvirkštinių kortelių vadove (anglų kalba)](/blog/anki-reverse-cards/). Jeigu norite pristabdyti tik vieną kortelę, pasinaudokite [kortelės sustabdymo instrukcija (anglų kalba)](/blog/anki-bury-vs-suspend/). Sustabdyta kortelė lieka kolekcijoje.

Jei šablonai vienodi, vadovaukitės Anki [instrukcijomis, kaip nustatyti papildomų kopijų priežastį](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Pašalinus šabloną, pasikeis visų to tipo užrašų kortelės, taip pat ir esančios kitose kaladėse. Tai atskiras kolekcijos struktūros pakeitimas.

## Ieškokite užrašų dublikatų pasirinktoje srityje

Atverkite **Notes → Find Duplicates** ir pasirinkite lauką, kurį norite palyginti, pavyzdžiui, **Front**. Pagal numatytuosius nustatymus Anki tikrina visų tipų užrašus, turinčius pasirinktą lauką. Paieškos sritį susiaurinkite laukelyje **Optional filter**, tada spustelėkite **Search**. [Anki vadovas apie funkciją „Find Duplicates“](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Jei kaladė vadinasi `Cleanup practice`, įveskite šią užklausą.

```text
deck:"Cleanup practice"
```

Paieška pagal kaladę apima ir visas į ją įdėtas kalades. Jei kopijų gali būti skirtingose kaladėse, pašalinkite filtrą ir ieškokite visoje kolekcijoje. Vienoje kaladėje galite nieko nerasti, nors kopija yra kitur. [Anki paieškos pagal kaladę sintaksė](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Spustelėkite rezultatų grupę ir peržiūrėkite jos užrašus. Angliškoje sąsajoje komanda **Tag Duplicates** priskiria žymą `duplicate` visiems sutampantiems užrašams, įskaitant tuos, kuriuos norėsite pasilikti. Kaip matyti iš išleistos versijos [žymėjimo kodo](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py), pažymimi visi kiekvienos grupės užrašai. **Ištrynę visus `tag:duplicate` rezultatus, prarastumėte ir užrašus, kuriuos norėjote pasilikti.** Pagal žymą raskite galimus dublikatus ir po vieną atsirinkite, kuriuos šalinti.

Paieška lygina pasirinkto lauko turinį. Ar dviem klausimais tikrinamas tas pats faktas, reikia nuspręsti patiems. Kitaip suformuluotų klausimų gali tekti ieškoti rankiniu būdu. Net vienodi klausimai gali būti skirti skirtingoms kalboms ar kursams.

## Pratimas su trimis užrašų poromis

Įsivaizduokite kaladę `Cleanup practice` su šešiais užrašais ir be įdėtų kaladžių. Pagal nepakeistus **Basic (and reversed card)** šablonus iš A ir B sukuriama po dvi korteles. Pagal **Basic** šabloną iš C–F sukuriama po vieną. Visos aštuonios kortelės yra toje pačioje kaladėje. Raidės naudojamos tik šiame pavyzdyje. Anki užrašų ir kortelių identifikatoriai yra skaičiai.

| Užrašai | Front → Back | Išgalvota mokymosi būsena | Sprendimas |
| --- | --- | --- | --- |
| A ir B | `le vélo` → `bicycle` | A kortelė, kurioje reikia atpažinti prancūzišką žodį, kartota 12 kartų. Kortelė, kurioje reikia jį prisiminti, kartota 3 kartus. Abi B kortelės naujos. | Palikite A. Pirmiausia patikrinkite, ar galima ištrinti B. |
| C ir D | `Chemical symbol for silver?` → `Ag` | C kortelė kartota 20 kartų, D – 6 kartus. | Palyginkite abiejų kortelių istoriją ir pasirinkite, kurią toliau kartosite. |
| E ir F | E: `bank` → `financial institution`, F: `bank` → `side of a river` | Tikrinamos skirtingos žodžio reikšmės. | Palikite abu užrašus ir patikslinkite klausimus, pridėdami konteksto. |

Paieška pagal lauką **Front** gali rasti visas tris poras. Lengva apsispręsti tik dėl pirmos. Prieš nuspręsdami, kad B nereikalingas, palyginkite **visus laukus**, pridėtus medijos failus, žymas, užrašo tipą ir tai, ką rodo abiejų krypčių kortelės. Gal B turi tarimo įrašą, kurio nėra A, arba iš B sukuriama kortelė su klausimu, kurio nėra tarp A kortelių.

Jei papildomas turinys padeda mokytis to paties dalyko, nukopijuokite jį į pasiliekamą užrašą ir peržiūrėkite rezultatą. Perkelkite ir naudingas žymas. Jei keičiate patį tikrinamą faktą, sukurkite naują klausimą. Taip ankstesnio klausimo kartojimų istorija liks susieta su tuo, ko iš tiesų mokėtės.

C ir D atveju didesnis kartojimų skaičius tėra užuomina. Patikrinkite abiejų kortelių kartojimų įrašus su datomis, atsakymų įvertinimus, esamus intervalus ir kito kartojimo duomenis. Gal vieną kortelę teko dažniau mokytis iš naujo. Įvertinkite, ar klausimas ir atsakymas naudingi, ir pasirinkite, kurios kortelės kartojimų istoriją norite tęsti. Jei atsakymai nesutampa, pirmiausia patikrinkite mokymosi šaltinį. Kartojimų skaičius nepasako, kuris atsakymas teisingas.

Palikus C ir ištrynus D, **jų istorijos nesujungiamos**. C išsaugo savo mokymosi būseną. Anki [kortelės informacijos lange (**Card Info**)](https://docs.ankiweb.net/stats.html#card-info) rodoma kiekvienos kortelės istorija atskirai. Ištrintų užrašų kortelių kartojimų įrašai lieka visos kolekcijos statistikoje, tačiau dingsta iš atskirų kaladžių statistikos. Kortelės, kurią palikote, istorija šių įrašų neperima. [Anki vadovas apie ištrintų užrašų statistiką](https://docs.ankiweb.net/stats.html#more)

Jei dar neapsisprendėte, atidėkite trynimą. Pasižymėkite, ką reikia patikrinti, ir, jei reikia, laikinai sustabdykite korteles, kurių kol kas nenorite kartoti.

## Ištrinkite vieną patikrintą kopiją ir palyginkite duomenis

Prieš trindami užrašus savo kolekcijoje, sinchronizuokite Anki kituose įrenginiuose, kuriuose yra neišsiųstų pakeitimų. Tada sinchronizuokite Anki kompiuteryje, kad tuos pakeitimus gautų ir jo kolekcija. Veiksmų seka aprašyta [Anki sinchronizavimo vadove](https://docs.ankiweb.net/syncing.html). Pasirinkite **File → Export** ir išsaugokite **Anki Collection Package (`.colpkg`)**, pažymėję **Include Media**. Pakete yra visos kaladės, jų kartojimo grafikai ir kartojimų istorija. Laikykite failą saugioje vietoje. Importuojant paketą, išsaugota kolekcija pakeičia visas atverto profilio korteles. [Kolekcijos eksportavimo dokumentacija](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Jei norite išbandyti trynimą, per **File → Switch Profile** sukurkite atskirą profilį ir importuokite į jį atsarginę kopiją. Bandomojo profilio nejunkite prie AnkiWeb. [Kiekvienas profilis turi atskirą kolekciją](https://docs.ankiweb.net/profiles.html). Prijungus abu profilius prie tos pačios paskyros, viena kolekcija gali būti pakeista kita. Kuo skiriasi atsarginės kopijos ir jų importas, aprašyta [APKG ir COLPKG vadove (anglų kalba)](/blog/anki-apkg-vs-colpkg/).

Pavyzdyje A1 vadinkime A kortelę, kurioje reikia atpažinti prancūzišką žodį, o A2 – kortelę, kurioje reikia jį prisiminti. Atitinkamos B kortelės yra B1 ir B2. Per **Cards → Info** pasižymėkite tikrus abiejų A kortelių identifikatorius (**Card ID**), kito kartojimo duomenis, intervalus ir kelis lengvai atpažįstamus istorijos įrašus. Pasižymėkite ir B užrašo **Note ID**. Duomenis prieš trynimą ir po jo palyginkite per tą patį seansą. Per tą laiką nekartokite nė vienos iš šių kortelių ir nekeiskite jų grafiko.

Anki užrašų dublikatus trinkite po vieną.

1. Naršymo lange pakeiskite paiešką užklausa `nid:` su tikruoju B užrašo identifikatoriumi. Režimu **Cards** patikrinkite kiekvieną rezultatą ir peržiūrėkite abiejų krypčių korteles. Tvarkydami tikrą kolekciją, patikrinkite, ar kitose kaladėse nėra to paties užrašo kortelių. Šiai paieškai kaladės filtro nenaudokite.
2. Įjunkite **Notes** režimą. Įsitikinkite, kad vienintelis rezultatas yra nereikalingas užrašas B, pažymėkite tik jį ir pasirinkite **Notes → Delete**. Anki komanda [**Delete**](https://docs.ankiweb.net/browsing.html#notes) pašalina pažymėtą užrašą ir visas jo korteles, net jei ją paleidžiate pažymėję tik vieną **Cards** eilutę.
3. Dar kartą ieškokite pagal B užrašo identifikatorių ir įsitikinkite, kad rezultatų nebėra. Po `cid:` įrašykite abu pasižymėtus A kortelių identifikatorius, atskirtus kableliu. Abiejų rastų kortelių **Info** duomenis palyginkite su tuo, ką pasižymėjote.
4. Paleiskite paiešką `deck:"Cleanup practice"` ir palyginkite eilučių skaičių **Notes** bei **Cards** režimais. Patikrinkite likusius užrašus pagal toliau pateiktą lentelę.

Ištrynus tik B, turėtumėte matyti tokius rezultatus.

| Ką tikrinti | Prieš trynimą | Ko tikėtis po trynimo |
| --- | --- | --- |
| Visa pavyzdinė kaladė | 6 užrašai / 8 kortelės | 5 užrašai / 6 kortelės |
| Abu užrašai apie dviratį | A1, A2, B1, B2 | Tik A1 ir A2 |
| A kortelių identifikatoriai, kito kartojimo duomenys, intervalai ir istorija | Jūsų pasižymėti duomenys | Tos pačios kortelės, tas pats grafikas ir tie patys istorijos įrašai |
| Paieška pagal B užrašo identifikatorių | Abi B kortelės | Rezultatų nėra |
| Užrašai apie sidabrą ir žodį „bank“ | C, D, E, F | Lieka tie patys keturi užrašai |

Šiame pavyzdyje ištrynus vieną užrašą dingsta dvi kortelės. Ištrynę A vietoje B, gautumėte tuos pačius skaičius, bet prarastumėte jau kartotas korteles, kurias norėjote pasilikti. Patikrinkite ir skaičių, ir konkrečių kortelių identifikatorius. Tvarkydami dublikatus, negrąžinkite paliktų kortelių į naujų kortelių būseną ir nekeiskite jų kartojimo grafiko.

Visos kolekcijos kartojimų diagramoje dar gali matytis pašalintų kortelių kartojimai. Norėdami patikrinti, ar išsaugojote pažangą, sutikrinkite likusios kortelės identifikatorių ir jos **Info** duomenis.

Kai šios grupės rezultatai sutaps su pasižymėtais duomenimis, pereikite prie kitos grupės ir atskirai nuspręskite, ką joje palikti. Jei veiksmus išbandėte su kopija, pirmiausia pakartokite juos tikrajame profilyje. Patikrinę kolekciją, sinchronizuokite Anki kompiuteryje, paskui kituose įrenginiuose ir tik tada juose tęskite mokymąsi. Jei kopijos atsirado per importą, prieš kitą importą perskaitykite [užrašų atnaujinimo iš CSV vadovą (anglų kalba)](/blog/anki-csv-update-existing-notes/). Jei kopijavote užrašus, kad tą patį faktą rastumėte prie kelių temų, [galite priskirti temų žymas (anglų kalba)](/blog/anki-tags-vs-decks/) ir tam pačiam faktui turėti tik vieną mokymosi istoriją.
