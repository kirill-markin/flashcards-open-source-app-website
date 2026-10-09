---
title: "Ar „Quizlet“ turi viešą API 2026 m.? Dabartinė padėtis ir saugios alternatyvos"
description: "Ar „Quizlet“ turi API? 2026 m. rugpjūčio 18 d. duomenimis, vieša API su savarankiška prieiga nedokumentuota. Palyginkite oficialiai palaikomas alternatyvas."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "ar Quizlet turi API"
  - "vieša Quizlet API"
  - "Quizlet API programuotojams"
  - "Quizlet API alternatyva"
  - "mokymosi kortelių automatizavimas"
---

2026 m. rugpjūčio 18 d. duomenimis, „Quizlet“ neskelbia dokumentacijos apie viešą API, prie kurios programuotojai galėtų prisijungti savarankiškai, ar viešą programuotojų portalą. Nepriklausomas programuotojas šiuo metu neturi oficialaus būdo užregistruoti programą, gauti „Quizlet“ API raktą ir per dokumentuotus galinius taškus skaityti ar rašyti mokymosi kortelių duomenis.

Ši išvada susijusi su vieša „Quizlet“ dokumentacija, o ne su vidinių sistemų veikimu. „Quizlet“ turi integracijų su kitais produktais ir partneriais. Du dabartiniai pavyzdžiai – „Quizlet“ programėlė „ChatGPT“ aplinkoje ir „Google Classroom“ priedas. Tačiau nė viena iš šių integracijų nesuteikia kitoms programoms bendros paskirties „Quizlet“ API.

**Faktai patikrinti:** 2026 m. rugpjūčio 18 d.

> **Apie autoriaus interesus:** esu Kirill Markin ir kuriu „Nibomo“, kurios „Agent API“ bei MCP serverį toliau pristatau kaip alternatyvas. „Nibomo“ nėra suderinama su „Quizlet“ ir automatiškai neimportuoja „Quizlet“ rinkinių.

![Programuotojas lygina „Quizlet“ eksportą, įterpimą, konkrečias integracijas ir dokumentuotą mokymosi kortelių API](/blog/quizlet-api.png)

## Trumpai: „Quizlet“ nedokumentuoja API su savarankiška prieiga

Jei ieškojote „ar Quizlet turi API“, nes norite automatizuoti veiksmus pačioje „Quizlet“, praktinis atsakymas šiuo metu toks: **vieša API, prie kurios būtų galima savarankiškai gauti prieigą, nėra dokumentuota**.

Kelios oficialios funkcijos iš šalies gali atrodyti panašios į API. Tačiau jos skirtos siauresnėms užduotims:

| Ko reikia | Palaikomas būdas | Kam tinka | Ko nesuteikia |
|---|---|---|---|
| Perkelti savo sukurto rinkinio tekstą | [Eksportas „Quizlet“ svetainėje](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Vieną kartą nukopijuoti terminus ir apibrėžtis | Paveikslėlių, nukopijuotų rinkinių eksporto, mokymosi istorijos ar API prieigos |
| Įdėti viešą rinkinį į svetainę ar mokymosi valdymo sistemos (LMS) puslapį | [„Quizlet“ rinkinio įterpimas](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Įterpti į savo puslapį mokymosi veiklą su „Quizlet“ ženklu | Struktūrizuotų kortelių duomenų ar skaitymo ir rašymo prieigos |
| „ChatGPT“ pokalbį paversti „Quizlet“ rinkiniu | [„Quizlet“ programėlė „ChatGPT“ aplinkoje](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Kurti ir peržiūrėti rinkinį per `@Quizlet` | Prieigos duomenų ar galinių taškų jūsų programai |
| Skirti „Quizlet“ užduotis per „Google Classroom“ | [„Quizlet“ priedas „Google Classroom“](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Rasti, skirti ir stebėti veiklas „Classroom“ aplinkoje | Bendros paskirties API individualiai kuriamai švietimo programinei įrangai |
| Sukurti savo integraciją su „Quizlet“ | Savarankiškos prieigos būdas šiuo metu nedokumentuotas | Gali būti sudarytas atskiras partnerystės susitarimas | Viešos registracijos, API raktų ar dokumentuotos darbo su kortelėmis specifikacijos |
| Automatizuoti darbą savo mokymosi kortelių darbo srityje | [„Nibomo Agent API“](/lt/docs/api/) arba [MCP jungtis](/lt/docs/mcp-connector/) | Reguliariai skaityti ir rašyti kortelių bei kaladžių duomenis pasirinktoje darbo srityje | Suderinamumo su „Quizlet“ ar automatinio importo iš jos |

Skirtumas paprastas: vieną kartą nukopijuoti savo kortelių tekstą padeda eksportas. Rodyti „Quizlet“ kitame puslapyje leidžia įterpimas. Konkreti integracija leidžia atlikti tik tame produkte numatytus veiksmus. Programinei įrangai, kuri reguliariai kuria, skaito ir redaguoja korteles, reikia dokumentuotos skaitymo ir rašymo API.

## Eksportas, įterpimas ir partnerių prieiga nėra viešos API

Vieša API išorės programuotojams suteikia aiškią specifikaciją: dokumentaciją, autentifikavimo tvarką, palaikomas operacijas, naudojimo taisykles ir būdą gauti prieigos duomenis. Nė viena iš dabartinių viešai prieinamų „Quizlet“ funkcijų neleidžia savarankiškai atlikti visų šių žingsnių.

„Quizlet“ **eksportas** – tai rankinis duomenų perkėlimas. Rinkinio kūrėjas svetainėje gali nustatyti terminų ir apibrėžčių išdėstymą, pasirinkti **Kopijuoti tekstą (Copy text)** ir įklijuoti rezultatą kitur. „Quizlet“ nurodo, kad negalima eksportuoti nei paveikslėlių, nei nukopijuotų rinkinių, o pati funkcija veikia tik svetainėje. Taip galima atidžiai perkelti duomenis vieną kartą, tačiau programinė įranga negali šiuo būdu nuolat sinchronizuoti dviejų sistemų.

**Įterpimas** leidžia rodyti turinį, bet nesuteikia prieigos prie duomenų. „Quizlet“ leidžia nukopijuoti viešo rinkinio HTML kodą pasirinkus susiejimo (Match), mokymosi (Learn), testo (Test), kortelių (Flashcards) ar rašybos (Spell) režimą. Įterptoje veikloje lieka „Quizlet“ logotipas, o besimokantieji naudojasi „Quizlet“ sąsaja. Jūsų programa negauna rinkinio kaip kortelių įrašų, kuriuos galėtų redaguoti.

**Integracija su konkrečiu produktu** veikia pagal atskirą susitarimą. „Quizlet“ gali veikti su „ChatGPT“ ar „Google Classroom“ nesuteikdama tos pačios sąsajos kiekvienam programuotojui. Šių integracijų pristatymas patvirtina, kad jos egzistuoja, tačiau neįrodo, jog jų naudojama „Quizlet“ API yra viešai prieinama ir kitoms reikmėms.

Todėl ir sena API biblioteka ar naršyklės kūrėjo įrankiuose matoma užklausa nėra oficialiai palaikoma „Quizlet“ API. Trūksta viešos dokumentacijos ir stabilios programuotojams skirtos specifikacijos.

## Pasirinkite užduočiai tinkamą būdą

### Vienkartinei atsarginei kopijai ar perkėlimui naudokite eksportą

Savo sukurtam rinkiniui naudokite oficialią „Quizlet“ eksporto funkciją. Kadangi procesas baigiasi veiksmu **Kopijuoti tekstą (Copy text)**, prieš tvarkydami skirtukus ar susiedami laukus išsaugokite nepakeistą pirmąją įklijuoto teksto kopiją. Taip išsaugote terminus ir apibrėžtis, o ne atsisiunčiate kaladės paketą, iš kurio būtų galima viską atkurti. Paveikslėliai ir mokymosi istorija neperkeliami.

Praktinę veiksmų seką rasite straipsnyje [Kaip eksportuoti „Quizlet“ rinkinius 2026 m.](/lt/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Jame aptariamos pradinė ir darbinė kopijos, UTF-8 koduotė, tabuliacijos ženklai, kelių eilučių apibrėžtys ir skirtumas tarp kortelių turinio bei kartojimo tvarkaraščio būsenos perkėlimo.

Eksportas tinka vienkartiniam perkėlimui. Kasdieniam kūrimui, sinchronizavimui ar reguliariam redagavimui programinėmis priemonėmis jis netinka.

### Turinį rodykite naudodami oficialų įterpimą

Jei besimokantieji turėtų naudotis viešu „Quizlet“ rinkiniu klasės svetainėje ar LMS puslapyje, rinkitės „Quizlet“ svetainėje pateikiamą įterpimo kodą. Pasirinkite veiklą, spustelėkite **Kopijuoti HTML (Copy HTML)** ir įdėkite gautą kodą į puslapį. Besimokantieji gaus interaktyvią „Quizlet“ veiklą, tačiau svetainė negaus neapdorotų kortelių duomenų srauto.

Mokytojui dažnai to visiškai pakanka. Pavadinus tai API, paprastas poreikis tik skambėtų sudėtingiau.

### Dirbdami su „ChatGPT“ ar „Google Classroom“, naudokite atitinkamą integraciją

2026 m. kovo 10 d. „Quizlet“ pranešime apie integraciją su „ChatGPT“ aprašyti konkretūs veiksmai: prijunkite „Quizlet“ programėlę, užklausą pradėkite nuo `@Quizlet`, peržiūrėkite sugeneruotą rinkinį „ChatGPT“ aplinkoje, tada atidarykite jį „Quizlet“, kad pritaikytumėte savo poreikiams ir mokytumėtės. Tai oficialiai palaikomas būdas iš to pokalbio sukurti „Quizlet“ rinkinį. Jis nesuteikia jūsų robotui, skriptui ar svetainei pakartotinai naudojamų „Quizlet“ API prieigos duomenų.

2026 m. birželio 30 d. pranešimas apie „Google Classroom“ taip pat skirtas konkrečiai integracijai. Priedas leidžia mokytojams rasti ir skirti veiklas, įskaitant praktinius klausimus, korteles bei žaidimus, o vėliau stebėti dalyvavimą ir pažangą „Classroom“ aplinkoje. „Quizlet“ nurodo, kad tam reikia „Google Workspace for Education Plus“; mokytojams gali tekti paprašyti IT administratoriaus suteikti leidimą arba įdiegti priedą.

Jei kuri nors iš šių integracijų jau atitinka jūsų tikslą, naudokite ją. Jei kuriate savo programą, nė viena iš jų neatstoja viešos prieigos programuotojams.

### Nuolatiniam automatizavimui rinkitės dokumentuotą skaitymo ir rašymo sąsają

Nuolatiniam automatizavimui reikia, kad programinė įranga patikimai kartotų tuos pačius veiksmus: kurtų korteles iš užrašų, pateiktų kaladžių sąrašus, atnaujintų atsakymus ar nuolat tvarkytų darbo sritį. Eksportas per iškarpinę tokios galimybės nesuteikia.

Saugus kelias – mokymosi kortelių sistema, kuri aiškiai dokumentuoja išorinės programinės įrangos autentifikavimą ir palaikomas skaitymo bei rašymo operacijas. Automatizuojamai darbo daliai gali tekti rinktis „Quizlet“ API alternatyvą, o „Quizlet“ palikti toms mokymosi užduotims, kurias palaiko jos viešai prieinamas produktas.

## Ką iš tiesų suteikia „Nibomo“ API alternatyva

„Nibomo“ siūlo du prieigos būdus prie to paties riboto konkretaus naudotojo duomenų rinkinio:

- [Išorinės „Agent API“](/lt/docs/api/) pradinis taškas yra `GET https://api.nibomo.com/v1/`. Jo atsakymas padeda agentui prisijungti el. paštu siunčiamu vienkartiniu kodu (OTP), sukurti API raktą ir pasirinkti darbo sritį. Duomenys skaitomi per SQL tipo užklausų maršrutą, o rašomi per atskirą vykdymo maršrutą.
- [Nuotolinis MCP serveris](/lt/docs/mcp-connector/) pasiekiamas adresu `https://mcp.nibomo.com/mcp`. MCP klientams prieinami aštuoni įrankiai: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` ir kartojimo įrankiai `next_review_card`, `reveal_answer` bei `submit_review`.

`get_usage_limits` – tik skaitymui skirtas įrankis paskyros planui, limitams ir einamojo mėnesio DI naudojimui peržiūrėti; jis neskaito ir nekeičia kortelių.

Abiem atvejais prieiga apribota pasirinkta darbo sritimi. Viešai aprašyti ištekliai yra `workspace`, `cards`, `decks` ir `review_events`, o viena komanda grąžina ne daugiau kaip 100 eilučių. SQL tipo sąsaja palaiko tik ribotą SQL dialektą, o ne visą „PostgreSQL“ SQL. „OpenAPI“ schemos nėra, todėl jei jūsų sprendimui reikia pagal „OpenAPI“ sugeneruotų klientų, turėsite rinktis kitą sąsają.

Tai gali padėti programuotojui ar DI agentui automatizuoti darbą su savo mokymosi kortelėmis. Tačiau ši sąsaja negali nuskaityti „Quizlet“ URL, atkartoti „Quizlet“ paskyros ar veikti kaip nedokumentuotas „Quizlet“ klientas. Automatinio importo iš „Quizlet“ nėra. Norėdami perkelti duomenis, pirmiausia eksportuokite savo rinkinio terminus ir apibrėžtis, peržiūrėkite tekstą ir tada susiekite jį su paskirties sistemos kortelių laukais. Paskirties sistema sukuria savo mokymosi būseną; „Quizlet“ istorija neperkeliama.

Apie kitus produktų skirtumus, neapsiribojant API prieiga, skaitykite [atvirojo kodo alternatyvos „Quizlet“ palyginime](/blog/quizlet-alternative/).

## Vidinės naršyklės užklausos nėra saugi išeitis

„Quizlet“ žiniatinklio sąsaja siunčia tinklo užklausas, kaip ir bet kuri šiuolaikinė žiniatinklio programa. Vien tai, kad radote tokią užklausą, nepaverčia jos oficialiai palaikomu galiniu tašku jūsų programai.

Naršyklės naudojami vidiniai galiniai taškai gali priklausyti nuo sesijos slapukų, vidinių formatų, apsaugos nuo piktnaudžiavimo priemonių ir to, kaip veikia dabartinė sąsaja. Jie gali keistis viešai neskelbiant versijų ar perėjimo prie naujos versijos gairių. Be to, [„Quizlet“ paslaugų teikimo sąlygos](https://quizlet.com/tos), paskutinį kartą atnaujintos 2026 m. gegužės 28 d., draudžia duomenų rinkimą nuskaitant svetainę (scraping) ir kitokį automatizuotą duomenų išgavimą, taip pat neleistiną automatizuotą naudojimąsi paslauga.

Tai nepatikimas ir rizikingas pagrindas net asmeniniam skriptui, o juo labiau produktui. Čia nepateiksiu spėjamų galinių taškų ar atvirkštinės inžinerijos veiksmų.

Kai reikia vieną kartą perkelti savo rinkinį, naudokite eksportą. Kai besimokantiesiems reikia viešo rinkinio kitame puslapyje, jį įterpkite. Konkrečioms „ChatGPT“ ar „Google Classroom“ užduotims naudokite joms skirtas integracijas. Jei duomenis reikia reguliariai skaityti ir rašyti, rinkitės programinę įrangą su dokumentuota automatizavimo sąsaja arba „Quizlet“ dalį atlikite rankiniu būdu, kol „Quizlet“ tokią sąsają paskelbs.

## Kaip sužinoti, ar padėtis pasikeitė

Po šiame straipsnyje nurodytos faktų patikros datos „Quizlet“ gali pradėti programuotojams skirtą programą. Ieškokite oficialaus programuotojų portalo arba dokumentacijos, kurioje paaiškinta, kas gali registruotis, kaip veikia autentifikavimas, kokios operacijos su kortelėmis palaikomos ir kokios naudojimo taisyklės taikomos.

Dar viena trečiosios šalies API biblioteka atsakymo nepakeistų. Jo nepakeistų ir nauja konkreti partnerystė. Kol „Quizlet“ nedokumentuoja savarankiškos prieigos programuotojams, atsargiai vertinkite teiginius apie šiuo metu veikiančią „Quizlet“ API ir rinkitės oficialiai palaikomą būdą, tinkantį jūsų užduočiai.
