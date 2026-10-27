---
title: "Kaip importuoti mokymosi korteles į Quizlet iš Excel, Google Sheets ar teksto"
description: "Importuokite dviejų stulpelių žodžių sąrašą į Quizlet, pasirinkite tabuliaciją ir naujas eilutes, o prieš skelbdami pataisykite suskaidytus apibrėžimus, papildomas korteles ir CSV klaidas."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "kaip importuoti mokymosi korteles į Quizlet"
  - "Quizlet importo formatas"
  - "importas į Quizlet iš Excel"
  - "iš Google Sheets į Quizlet"
  - "Quizlet importas su tabuliacija"
---

„Red, green, blue“ atrodo kaip įprastas mokymosi kortelės atsakymas. Tačiau jei kableliais atskirsite terminą nuo jo apibrėžimo, tie patys kableliai padarys eilutę dviprasmišką. Dėl kelių skyrybos ženklų paruoštą žodžių sąrašą gali tekti taisyti.

Norėdami importuoti mokymosi korteles į Quizlet iš Excel, Google Sheets ar teksto, pradėkite nuo dviejų stulpelių: vieno terminams, kito apibrėžimams. Nukopijuokite duomenis, įklijuokite juos į svetainės importo formą ir pasirinkite tabuliaciją laukams atskirti, o naujas eilutes – kortelėms atskirti. Pirmiausia išbandykite keturias eilutes, kad prieš perkeldami visą sąrašą galėtumėte patikrinti kiekvieną porą.

![Keramikas eilėmis dėlioja keraminius puodelius su jiems tinkančiomis lėkštutėmis, prieš perkeldamas juos į lentyną](/blog/how-to-import-flashcards-into-quizlet.png)

## Kur rasti Quizlet importo formą

Quizlet svetainėje aprašytas importas, kuriam tarp laukų naudojami kableliai, tabuliacijos ženklai arba brūkšneliai, o tarp kortelių – kabliataškiai arba naujos eilutės. [Oficialiose importo instrukcijose](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) pateikiama tokia veiksmų seka:

1. Prisijunkite ir pasirinkite **Create → Flashcard set**.
2. Įveskite pavadinimą, pasirinkite **Import** ir įklijuokite tekstą.
3. Pritaikykite skyriklių nustatymus prie įvesties. Šio straipsnio pavyzdžiams pasirinkite **Tab** ir **New line**.
4. Pasirinkite **Import**, tada nurodykite terminų ir apibrėžimų kalbas.
5. Peržiūrėkite korteles prieš pasirinkdami **Create**, kad išsaugotumėte ir paskelbtumėte rinkinį.

Instrukcijos patikrintos 2026 m. rugsėjo 15 d. Toliau pateikti pavyzdžiai paaiškina, kaip paruošti ir patikrinti tekstą; jie neaprašo bandymo prisijungus prie paskyros.

## Pradėkite nuo nedidelio skaičiuoklės diapazono

Excel arba Google Sheets kiekvienoje eilutėje įrašykite po vieną termino ir apibrėžimo porą. Štai keturių kortelių bandomasis sąrašas:

| Terminas | Apibrėžimas |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Nukopijuokite tik keturias duomenų eilutes dviejuose stulpeliuose. Jei antraštės yra pirmoje eilutėje, pažymėkite **A2:B5**. Antraščių į kopijuojamą diapazoną neįtraukite.

Turėtumėte gauti keturias korteles su ispaniškais terminais ir angliškais apibrėžimais. Paskutinėje kortelėje „colores primarios de la luz“ turi likti vienoje pusėje, o „red, green, blue“ – kitoje. Kableliai yra atsakymo dalis.

Kai šis pavyzdys bus aiškus, paruoškite savo skaičiuoklę. Dirbkite su kopija, kad turėtumėte originalą palyginimui. Pašalinkite tuščias eilutes, o pastabų ir papildomų stulpelių nežymėkite. Prieš kopijuodami užpildykite trūkstamus terminus ar apibrėžimus.

Rūšiuodami visada pažymėkite abu stulpelius kartu. Rūšiuojant tik terminus, jie būtų atskirti nuo savo atsakymų, todėl net ir importavus tinkamą kortelių skaičių poros galėtų būti klaidingos.

## Paprastojo teksto formatui reikia tikrų tabuliacijos ženklų

Tos pačios keturios eilutės tabuliacijos ženklais atskirtame tekste atrodo taip. Kiekviename tarpe tarp termino ir jo apibrėžimo yra vienas tikras tabuliacijos ženklas:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tabuliacijos ženklas yra konkretus simbolis. Keli tarpai gali atrodyti panašiai, tačiau jie neatstoja tabuliacijos ženklo tarp laukų. Įvedus simbolius `\t`, tabuliacijos ženklas taip pat neatsiranda. Jei teksto rengyklėje tai padaryti sunku, surašykite poras į du skaičiuoklės stulpelius ir nukopijuokite tuos langelius.

Kiekviena kortelė turi užimti vieną fizinę teksto eilutę. Ilgas apibrėžimas dėl siauro lango gali būti rodomas per dvi eilutes; dėl to į turinį naujos eilutės ženklas neįterpiamas. Tačiau skaičiuoklės langelyje įterptas eilutės lūžis jį prideda. Prieš naudodami naujas eilutes kortelėms atskirti, pašalinkite tokius lūžius langelių viduje.

Taip pat pašalinkite tabuliacijos ženklus termino ar apibrėžimo viduje. Šiame formate jie turi būti tik tarp dviejų laukų.

## Jei jūsų sąrašas yra CSV faile

Prieš ruošdami importą, atverkite CSV failą skaičiuoklėje. Toks CSV įrašas turi du laukus, jei interpretuojamas pagal CSV kabučių taisykles:

```text
"colores primarios de la luz","red, green, blue"
```

Kabutėmis apgaubtame atsakyme yra kablelių. Teksto laukas, kuris skaido įvestį pagal kablelius, nebūtinai skaito CSV formatą, todėl nepasikliaukite kabutėmis kaip būdu išsaugoti vientisą atsakymą.

Excel arba Google Sheets patikrinkite, ar įrašas užima lygiai du langelius. Tada nukopijuokite langelius, kad gautumėte tabuliacijos ženklais atskirtą įvestį. Jei atsakymas išsiskaidė į papildomus stulpelius, pirmiausia pataisykite skaičiuoklės CSV importo nustatymus. Nukopijavę sugadintą eilutę, perkelsite ir jos klaidas.

Patikrinkite ir reikšmes, kurias skaičiuoklė gali interpretuoti savaip. Jei `0012` yra kodas, kurį turite išmokti, pavertus jį į `12` kortelė pasikeičia. Prieš kopijuodami diapazoną palyginkite identifikatorius, datas, kabutes ir žodžius su diakritiniais ženklais su originaliu failu.

## Kai kortelės neatitinka jūsų eilučių

Pasinaudokite bandomuoju sąrašu, kad rastumėte pirmą neatitikimą. Keiskite po vieną dalyką, tada palyginkite rezultatą su tomis pačiomis keturiomis šaltinio eilutėmis.

| Požymis | Tikėtina skyriklio problema | Ką pakeisti |
| --- | --- | --- |
| Atsakymas suskaidomas ties kableliais | Laukams atskirti pasirinktas kablelis | Paruoškite du stulpelius ir pasirinkite Tab |
| „well-being“ suskaidomas termino viduryje | Laukams atskirti pasirinktas brūkšnelis | Palikite brūkšnelį ir atskirkite laukus tabuliacijos ženklu |
| Vienas atsakymas virsta keliomis kortelėmis | Šaltinyje yra vidinių eilučių lūžių | Sutalpinkite atsakymą į vieną fizinę teksto eilutę |
| „Term“ ir „Definition“ atsiranda kaip kortelė | Nukopijuota antraščių eilutė | Pažymėkite tik duomenų eilutes |
| Abu laukai lieka toje pačioje pusėje | Vietoj tabuliacijos ženklo įvesti tarpai | Nukopijuokite dviejų stulpelių skaičiuoklės diapazoną |

Pavyzdžiui, atsakymą, kuriame „first stage“ ir „second stage“ įrašyti atskirose eilutėse, galima pakeisti į `first stage; second stage`. Taip abi dalys lieka vienoje eilutėje. Kai atsakymo viduje naudojate kabliataškį, kortelėms atskirti palikite pasirinktą **New line**.

Jei abiem etapams verta skirti po atskirą klausimą, parašykite dvi atskiras termino ir apibrėžimo poras. [Geresnių mokymosi kortelių kūrimo vadovas (anglų kalba)](/blog/how-to-make-better-flashcards/) gali padėti tai nuspręsti.

## Patikrinkite rezultatą prieš skelbdami

Peržiūrėkite visas keturias bandomąsias korteles. Importavę visą sąrašą, palyginkite korteles su sutvarkytu šaltiniu:

- Ar bendras kortelių skaičius sutampa su visiškai užpildytų duomenų eilučių skaičiumi?
- Ar pirmoji ir paskutinė poros sutampa, įskaitant visus jų atsakymus?
- Ar skyrybos ženklai, diakritiniai ženklai ir kodai liko nepakitę?
- Ar nėra tuščių pusių, antraščių, dublikatų ar atsakymų, priskirtų ne tiems terminams?
- Ar kiekvienas atsakymas, kurio eilučių lūžius redagavote, vis dar prasmingas?

Perskaitykite ir kelias įprastas poras, ir tas, kurios kelia įtarimų. Vien sutampantis skaičius nepadės aptikti neteisingo atsakymo, priskirto tinkamam terminui. Jei kas nors nepavyko, prieš kartodami importą pataisykite šaltinį. Išsaugokite sutvarkytą failą būsimiems taisymams.

## Jau parašytos poros ar DI sugeneruotos kortelės?

Quizlet savo [kortelių kūrimo su DI apžvalgoje](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai) taip pat aprašo kortelių kūrimą iš pateiktos medžiagos pasitelkiant DI. Sugeneruoto teksto turinį reikia patikrinti atskirai. Jei jau turite baigtą terminų ir apibrėžimų sąrašą, struktūrizuotas importas leidžia patikrinti, ar parašytos poros perkeltos tiksliai.

Pradedate nuo pastraipų? Prieš ruošdami importo tekstą, [paverskite savo užrašus mokymosi kortelėmis (anglų kalba)](/blog/turn-notes-into-flashcards/). Perkeliate rinkinį priešinga kryptimi? Naudokitės [Quizlet eksporto vadovu](/lt/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
