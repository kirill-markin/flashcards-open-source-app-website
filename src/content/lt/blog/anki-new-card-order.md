---
title: "Naujų kortelių tvarka „Anki“ programoje: atranka, rikiavimas ir eilės patikra"
description: "Šešių kortelių pavyzdys parodo, kaip „Anki“ atrenka ir rikiuoja naujas korteles. Patikrinkite antrinių kaladžių limitus, kortelių pozicijas ir tai, kurią kaladę pasirinkote mokytis."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "naujų kortelių tvarka Anki"
  - "naujų kortelių atrankos tvarka Anki"
  - "naujų kortelių rikiavimo tvarka Anki"
  - "Anki atranka didėjančia pozicijų tvarka"
  - "Anki kortelės rodomos ne ta tvarka"
---

„Anki“ nauja kortelė, kurios pozicija yra 10, gali pasirodyti po kortelės, kurios pozicija yra 60. Jei mokotės iš pagrindinės kaladės, o kortelės atrenkamos **Pagal kaladę** (*Deck*) ir rikiuojamos **Atrankos tvarka** (*Order gathered*), „Anki“ gali baigti atranką iš pirmesnės antrinės kaladės ir tik tada pereiti prie tos, kurioje yra 10-osios pozicijos kortelė. Surikiavus korteles naršyklėje pagal sukūrimo datą, mokymosi eilė nepasikeis.

„Anki“ naujų kortelių eilę sudaro dviem etapais. **Atranka** pagal šiandienos limitus nustato, kurios kortelės pateks į eilę, o **rikiavimas** sudėlioja jau atrinktas korteles. Pirmiausia išsiaiškinkite, ar į eilę patenka ne tos kortelės, ar reikiamos kortelės pasirodo netikėta tvarka.

Čia kalbama apie įprastas kalades kompiuteriams skirtoje „Anki“ programoje. Šešių kortelių pavyzdys apskaičiuotas popieriuje pagal tuo metu aktualų vadovą ir išleistą [„Anki“ 26.09.3 versiją](https://github.com/ankitects/anki/releases/tag/26.09.3). Šaltiniai patikrinti 2026 m. spalio 6 d. Pavyzdys programoje nebandytas.

![Vyras laiko ketvirtą vinilinę plokštelę virš tuščio stovo skyriaus greta trijų plokštelių, o už jo stovi dvi dėžės su dar neatrinktais albumais](/blog/anki-new-card-order.png)

## Pasirinkite, kokia tvarka norite matyti korteles

Atidarykite kaladės, iš kurios pradedate mokytis, **Parinktis** (*Options*) ir raskite skiltį **Rodymo tvarka** (*Display Order*). Pradėjus mokytis iš pagrindinės kaladės, jos rodymo tvarkos nuostatos galioja visam seansui, įskaitant antrinių kaladžių korteles.

| Norimas rezultatas | Naujų kortelių atrankos tvarka (*New Card Gather Order*) | Naujų kortelių rikiavimo tvarka (*New Card Sort Order*) |
| --- | --- | --- |
| Rodyti korteles didėjančia pozicijų tvarka visame pasirinktos kaladės medyje | Didėjančia pozicijų tvarka (*Ascending position*) | Atrankos tvarka |
| Pirmiausia atsižvelgti į antrinių kaladžių abėcėlės tvarką, tada į pozicijas kiekvienoje iš jų | Pagal kaladę | Atrankos tvarka |
| Atrinkti tas pačias korteles ir sumaišyti jų rodymo eilę | Jūsų pasirinkta atrankos nuostata | Atsitiktine tvarka (*Random*) |

Šie deriniai atitinka [atrankos](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) ir [rikiavimo](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) aprašus „Anki“ vadove anglų kalba. Nuostata **Didėjančia pozicijų tvarka** remiasi išsaugotomis naujų kortelių pozicijomis. Jos nebūtinai atitinka sukūrimo datų eilę. Pozicijos gali keistis priklausomai nuo kortelių įterpimo tvarkos arba jas pakeitus rankiniu būdu.

Prieš ką nors keisdami patikrinkite, kuris parinkčių rinkinys priskirtas kaladei ir kurios kitos kaladės jį naudoja. Rodymo tvarka nustatoma visam rinkiniui. Jei pakeitimas skirtas tik šiai kaladei, pirmiausia priskirkite jai atskirą rinkinį pagal [vienai kaladei skirto parinkčių rinkinio vadovą anglų kalba](/blog/anki-deck-options-presets/). Dienos limitams galima nustatyti išimtis **Šiai kaladei** (*This deck*) arba **Tik šiandien** (*Today only*). Rodymo tvarkos nuostatos lieka bendros visoms tą rinkinį naudojančioms kaladėms.

## Kurios keturios kortelės pateks į eilę?

Tarkime, įprastoje pagrindinėje kaladėje `OrderLab` yra dvi antrinės kaladės ir tik šios šešios kortelės. Kiekviena kortelė sukurta iš atskiro **Paprastojo** (*Basic*) tipo įrašo, pagal kurį sukuriama viena kortelė. Taigi visų šešių kortelių tipo numeris vienodas ir nė dvi kortelės nėra sukurtos iš to paties įrašo.

| Kortelė | Kaladė | Išsaugota naujos kortelės pozicija |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Visos šešios kortelės naujos, nė viena nėra laikinai paslėpta, sustabdyta ar perkelta į filtruotą kaladę. Pradžioje nėra kitų kortelių, pakartotinių rodymų mokymosi etape ar kartoti paruoštų kortelių. Šiandien dar nesimokėte. `OrderLab` neturi aukštesnio lygio kaladės, o taikomi kartojimo limitai palieka vietos visoms šešioms naujoms kortelėms.

Mokytis pasirinkite **OrderLab**. Jai taikomas **4** naujų kortelių limitas. `01 First` limitas yra **3**, o `02 Second` – **2**. Laikinų išimčių nėra. Abiem atvejais korteles rikiuokite **Atrankos tvarka**. Abu variantus apskaičiuokite popieriuje nuo tos pačios pradinės kolekcijos būsenos. Tarp palyginimų į korteles neatsakinėkite.

Pasirinkus atranką **Pagal kaladę**, „Anki“ veikia taip.

1. Pagal abėcėlę pirmiau pasiekia `01 First`, paskui `02 Second`.
2. Pagal pozicijas atrenka **A, B, C**. `01 First` jau davė tris korteles, tad pagal pagrindinės kaladės limitą liko viena vieta.
3. Iš `02 Second` atrenka **D** ir pasiekia pagrindinės kaladės keturių kortelių limitą.

Numatoma pirmojo naujų kortelių rodymo eilė yra **A → B → C → D**. E ir F į atrinktą rinkinį nepatenka.

Atrenkant **Didėjančia pozicijų tvarka**, abiejų antrinių kaladžių kortelės tikrinamos iš eilės **D → A → E → B → F → C**. Pirmosios keturios telpa į visus limitus. Dvi yra iš `02 Second`, dvi iš `01 First`, iš viso keturios. Tuo atranka ir baigiasi.

Numatoma eilė yra **D → A → E → B**. C ir F į šį rinkinį nepatenka. Išleistos versijos [atrankos kodas](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) įtraukdamas kiekvieną kortelę taiko jos kaladės ir aukštesnio lygio kaladžių limitus.

Iš `02 Second` galima paimti daugiausia dvi korteles. Atrenkant pagal kaladę iš jos patenka tik viena, nes `01 First` jau užėmė tris iš keturių vietų. Atrenkant didėjančia pozicijų tvarka šįkart iš abiejų kaladžių patenka po dvi korteles dėl konkrečių jų pozicijų. Kitoje kolekcijoje kortelės gali pasiskirstyti kitaip.

## Įtraukite visas šešias ir palyginkite jų eilę

Antram palyginimui popieriuje nustatykite limitus taip, kad tilptų visos šešios kortelės. Pagrindinei kaladei skirkite **6**, `01 First` – **3**, o `02 Second` – **3**. Palikite rikiavimą **Atrankos tvarka**.

| Atrankos nuostata | Limitai (pagrindinė kaladė / `01 First` / `02 Second`) | Numatoma pirmojo rodymo eilė |
| --- | --- | --- |
| Pagal kaladę | 6 / 3 / 3 | A → B → C → D → E → F |
| Didėjančia pozicijų tvarka | 6 / 3 / 3 | D → A → E → B → F → C |

Abiem atvejais į eilę patenka visos šešios kortelės. Skiriasi tik jų rodymo tvarka. Jei iki šešių padidintumėte tik pagrindinės kaladės limitą, o `02 Second` paliktumėte dviejų kortelių limitą, patektų tik penkios kortelės. F vis tiek liktų už eilės ribų. Didesni limitai čia skirti tik skaičiavimui.

## Rikiavimas neįtraukia per atranką praleistų kortelių

Grįžkite prie pradinių **4 / 3 / 2** limitų ir tik **Naujų kortelių rikiavimo tvarkos** skiltyje pasirinkite **Atsitiktine tvarka**.

| Atrankos nuostata | Kortelės, kurių eilę galima sumaišyti | Kortelės, kurių rikiavimas negali pridėti |
| --- | --- | --- |
| Pagal kaladę | A, B, C, D | E, F |
| Didėjančia pozicijų tvarka | D, A, E, B | C, F |

Rodoma atsitiktine tvarka, tačiau pats kortelių rinkinys lieka toks pat. Iš lentelės konkrečios atsitiktinės eilės nuspėti negalima. Išleistos „Anki“ versijos [rikiavimo kodas](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) perrikiuoja jau atrinktas korteles.

Nuostata **Pagal kortelės tipą, tada atrankos tvarka** (*Card type, then order gathered*) irgi taikoma jau atrinktoms kortelėms. Visų šešių kortelių, sukurtų iš paprastojo tipo įrašų, kortelės tipo numeris vienodas, todėl šiame pavyzdyje jų atrankos tvarka išlieka.

Atskirame rikiavimo pavyzdyje tarkime, kad iš įrašų, turinčių po kelis šablonus, jau atrinktos keturios kortelės. Jų eilė yra **W (2 tipas), X (1 tipas), Y (2 tipas), Z (1 tipas)**. Surikiavus pagal kortelės tipą gaunama **X → Z → W → Y**. Pirmiausia rodomos 1 tipo kortelės, o to paties tipo kortelės lieka atrankos tvarka. Šis pavyzdys prasideda jau po atrankos. Kurios iš to paties įrašo sukurtos kortelės patektų į atrinktą rinkinį, šiame pavyzdyje nenustatoma, nes tai priklauso nuo laikino slėpimo nuostatų.

Numeris žymi kortelės šablono vietą to įrašo tipo šablonų sąraše. Nuo jūsų šablonų priklauso, kurios kortelės skirtos atpažinti, o kurios – savarankiškai pateikti atsakymą. Prieš darydami prielaidą, kad rikiuojant pagal tipą visi tiesioginės krypties klausimai bus rodomi pirmiausia, patikrinkite pačius klausimus.

## Prieš keisdami pozicijas patikrinkite jas naršyklėje

Mygtuku **Naršyti** (*Browse*) atidarykite kortelių naršyklę, pasirinkite **Kortelių** (*Cards*) režimą ir ieškokite savo kaladėje bei jos antrinėse kaladėse. Pavyzdžio užklausa:

```text
deck:OrderLab is:new
```

Stulpelių antraščių meniu įjunkite **Klausimas** (*Question*), **Kortelė** (*Card*), **Kaladė** (*Deck*), **Terminas** (*Due*) ir **Sukurta** (*Created*) stulpelius. Naujos kortelės **Termino** stulpelyje matysite jos poziciją eilėje, o stulpelyje **Sukurta** – kada sukurtas jos įrašas. **Rikiavimo lauko** (*Sort Field*) stulpelyje matysite rikiuoti skirtą įrašo lauką. Rikiuojant pagal naršyklės stulpelį keičiasi tik lentelės rodinys. Išsaugotos pozicijos ir mokymosi seanso atrankos nuostata lieka tos pačios. Šios reikšmės aprašytos [„Anki“ naršyklės stulpelių dokumentacijoje anglų kalba](https://docs.ankiweb.net/manual/browsing#columns).

Paieška `is:new` gali rasti ir sustabdytų ar laikinai paslėptų naujų kortelių. Jų reikšmės **Termino** stulpelyje rodomos skliaustuose. Norėdami susiaurinti paiešką, atmeskite šias korteles ir tas, kurios šiuo metu yra filtruotose kaladėse:

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

„Anki“ vadove anglų kalba aprašyta [paieška pagal kortelės būseną](https://docs.ankiweb.net/manual/searching#card-state) ir [paieška pagal kaladę](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Jei kaladės pavadinime yra tarpų, rašykite jį kabutėse, kaip užklausoje `deck:"My Deck"`. Paieška parodo, kurios kortelės galėtų patekti į eilę. Šiandien į ją gali patekti mažiau kortelių dėl limitų ir automatinio iš to paties įrašo sukurtų kortelių slėpimo. Kada šios kortelės nepasiekiamos, paaiškinta [laikino slėpimo ir sustabdymo vadove anglų kalba](/blog/anki-bury-vs-suspend/).

Jei pozicijos jau atitinka norimą tvarką, palikite jas. Jei pozicijas reikia keisti, užsirašykite ankstesnes reikšmes, pažymėkite kelias konkrečias naujas korteles ir pasirinkite **Kortelės → Keisti poziciją** (*Cards → Reposition*). Pirmiausia peržiūrėkite dialogo lango parinktis. Parinktis **Pastumti esamas korteles** (*Shift position of existing cards*) gali pakeisti ir nepažymėtų kortelių, kurių pozicijos didesnės, vietą eilėje. Jei esamų kortelių nepastumsite, naujos pozicijos gali sutapti su esamomis. Tada vien iš pozicijos nebus aišku, kuri iš vienodą poziciją turinčių kortelių bus parodyta pirmiau. Šis veiksmas aprašytas [„Anki“ vadove anglų kalba](https://docs.ankiweb.net/manual/browsing#cards).

Norint pakeisti atrankos ar rikiavimo nuostatas, mokymosi ir kartojimo istorijos ištrinti nereikia. Aiškindamiesi eilės neatitikimą, sutelkite dėmesį į naujų kortelių pozicijas ir rodymo tvarką.

## Patikrinkite, kurią kaladę pasirinkote ir kiek vietų dar liko šiandien

Pradiniame pavyzdyje, tiesiogiai pasirinkus `OrderLab::02 Second`, atrankai svarstomos tik D, E ir F. Kai galioja dviejų kortelių limitas, atranka **Didėjančia pozicijų tvarka** ir rikiavimas **Atrankos tvarka**, numatoma eilė yra **D → E**. Pagrindinės kaladės limitas dar visiškai nepanaudotas, tad abi kortelės telpa ir tada, kai taikomi aukštesnio lygio kaladžių limitai. Pasirinkus pagrindinę kaladę, atranką **Pagal kaladę** ir limitus **4 / 3 / 2**, eilė bus **A → B → C → D**.

Pradėjus seansą iš `OrderLab`, galioja jos rodymo tvarka. Pakeitus `02 Second` rodymo tvarką, šio seanso eilė nepasikeis. Pasirinkta kaladė nustato rodymo tvarką ir bendrą limitą. Kartu taikomi atitinkami antrinių kaladžių limitai. Nuostata **Taikyti limitus nuo aukščiausio lygio** (*Limits start from top*) lemia, ar pradėjus mokytis tiesiogiai iš antrinės kaladės galioja ir aukštesnio lygio kaladžių limitai. Apie tai rašoma „Anki“ vadovo anglų kalba skyriuose apie [antrinių kaladžių taisykles](https://docs.ankiweb.net/manual/deck-options#subdecks) ir [aukštesnio lygio kaladžių limitų taikymą](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Patikrinkite ir kartojimo limitus. Pagal numatytąsias nuostatas kartojimo limitas riboja ir naujų kortelių skaičių. Tai pakeičia nuostata **Naujoms kortelėms netaikyti kartojimo limito** (*New cards ignore review limit*). Ši nuostata ir **Taikyti limitus nuo aukščiausio lygio** galioja visai kolekcijai, kaip matyti iš išleistos versijos [dienos limitų sąsajos kodo](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Prieš spręsdami, kiek naujų kortelių dar gali pasirodyti šiandien, pasižymėkite, ar abi nuostatos įjungtos.

Naršyklėje pasirinkę **Peržiūrą** (*Preview*) galite perskaityti klausimus į juos neatsakydami. Per kitą įprastą mokymosi seansą pasižymėkite šiuos dalykus.

| Ką užsirašyti | Ką tai padeda išsiaiškinti |
| --- | --- |
| Mokytis pasirinkta kaladė, jos parinkčių rinkinys, atrankos ir rikiavimo nuostatos | Kokia rodymo tvarka galioja seansui? |
| Kortelės, kurių tikitės, ir jų išsaugotos pozicijos | Neatitikimas atsiranda atrenkant korteles ar jas rikiuojant? |
| Naujų ir kartojamų kortelių limitai, konkrečiai kaladei ar tik šiandienai nustatytos išimtys ir tai, kiek kortelių šiandien jau mokėtės | Kiek vietų dar liko? |
| Aukštesnio lygio kaladžių limitai ir abi visai kolekcijai taikomos limitų nuostatos | Kokie papildomi limitai taikomi? |
| Laikinai paslėptos, sustabdytos, filtruotose kaladėse esančios arba iš to paties įrašo sukurtos kortelės | Kurios iš pažiūros tinkamos kortelės gali būti nepasiekiamos? |
| Kortelių pirmojo rodymo eilė, atskirai nuo pakartotinių rodymų mokymosi etape | Ar naujų kortelių eilė sutampa su numatyta? |

Atsakius į naują kortelę, į seanso eigą gali įsiterpti pakartotinis jos rodymas mokymosi etape. Nuostata **Naujų ir kartojamų kortelių tvarka** (*New/Review Order*) nustato, ar naujos kortelės rodomos prieš kartojamas, po jų ar tarp jų. Naujų kortelių atranką ir rikiavimą toliau valdo atskiros nuostatos. Išleistos versijos [eilės sudarymo kodas](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) sujungia šias kortelių kategorijas jau surikiavus naujas korteles.

Patikrą galite baigti, kai numatytas atrinktų kortelių rinkinys ir pirmojo jų rodymo eilė sutampa su tuo, ką matote. Jei neatitikimas išlieka, pasižymėkite pozicijas, nuostatas, pasirinktą kaladę, „Anki“ versiją, stebėtą eilę ir susijusius papildinius. Pagal šiuos duomenis galėsite tiksliau ieškoti priežasties. Jei norite papildomai pasikartoti kurią nors temą, naudokitės atskiru [mokymosi su filtruota kalade vadovu anglų kalba](/blog/anki-filtered-decks-without-rescheduling/).
