---
title: "Kaip naudoti Claude mokymuisi 2026 m.: praktinė eiga"
description: "Mokykitės su Claude iš savo užrašų: atsakykite po vieną klausimą, tikrinkite pataisymus ir paverskite spragas kortelėmis, laikydamiesi kurso DI taisyklių."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "kaip naudoti Claude mokymuisi"
  - "Claude mokymuisi"
  - "mokymosi su Claude eiga"
  - "Claude korepetitorius"
  - "Claude mokymosi kortelės"
  - "Claude mokymosi režimas"
---

Jei norite sužinoti, **kaip naudoti Claude mokymuisi**, pradėkite nuo nedidelės savo kurso užrašų dalies. Patikrinkite, ką šie užrašai pagrindžia, ir atsakykite po vieną klausimą dar nepamatę pagalbos. Patikrinkite pataisymus, tada išsaugokite žinių spragas, prie kurių dar reikės grįžti. Tam rekomenduoju [Claude skirtą Nibomo įskiepį](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory): jis pateikia Claude nurodymus, kaip kurti mokymosi korteles, kartoti jas numatytu laiku ir tobulinti tas, kurios jus klaidina.

Naudinga eiga yra **šaltinio patikra → atsakymas iš atminties → tikrinimas → išsaugojimas → kartojimas numatytu laiku**. Įprastos mokymosi užklausos veikia paprastame Claude pokalbyje; įskiepis susieja jį su išsaugotomis kortelėmis ir kartojimo tvarkaraščiu.

> **Apie autoriaus interesus:** esu Kirill Markin, kuriu [Nibomo](/lt/features/). Renkant informaciją šiam straipsniui ir jį redaguojant naudotasi DI pagalba.

**Faktai patikrinti:** 2026 m. spalio 22 d.

![Mokymosi stalas: šaltinio užrašai susieti su vienu klausimu ir dviem patikrintomis žinių spragų kortelėmis, o dviprasmiškas užrašas atidėtas į šalį](/blog/how-to-use-claude-for-studying-v2.png)

## Trumpa mokymosi su Claude eiga

Šią eigą taikykite vienai paskaitos daliai, skaitiniui ar užduočių rinkiniui:

1. Patikrinkite, kaip jūsų kurse leidžiama naudoti DI.
2. Pateikite Claude nedidelį, aiškiai įvardytą šaltinių rinkinį.
3. Prieš pradėdamas mokyti, tegul jis pažymi trūkstamą, prieštaringą ar neįskaitomą informaciją.
4. Iš atminties atsakykite po vieną klausimą.
5. Užrašykite pataisymą, jo vietą šaltinyje ir visus neaiškumus.
6. Svarbius atsakymus patikrinkite patys.
7. Kelias patikrintas, ilgesniam laikui aktualias žinių spragas išsaugokite kaip korteles Nibomo.
8. Atėjus laikui, kartokite išsaugotas korteles su Claude arba Nibomo programėlėje.

Eiliškumas svarbus. Klausimai iš dviprasmiško šaltinio tik apsunkina tos dviprasmybės pastebėjimą.

## Kaip paruošti Nibomo darbui su Claude

Atidarykite [Nibomo įskiepį](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) arba eikite į **Customize → Plugins**, raskite Nibomo ir spustelėkite **Add**. Jei įskiepis jau įdiegtas, patikrinkite, ar jis įjungtas.

Prijunkite kartu su įskiepiu pateikiamą Nibomo jungtį. Atlikite prisijungimo veiksmus: prisijunkite prie savo Nibomo paskyros arba sukurkite naują ir suteikite Claude prieigą. Kai būsite paprašyti, pasirinkite reikiamą darbo sritį. Šiuo būdu nereikia kopijuoti API rakto ar įvesti serverio URL.

Įskiepis pateikia nurodymus, kaip kurti, kartoti ir tobulinti korteles. Jo MCP jungtis leidžia Claude skaityti ir atnaujinti jūsų Nibomo paskyros duomenis. [Jungtį rasite ir Claude kataloge](https://claude.ai/directory/nibomo). Išsamiau apie prisijungimą rašoma mūsų [Claude prijungimo vadove](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (anglų kalba) ir [MCP jungties dokumentacijoje](/lt/docs/mcp-connector/).

Šiuo metu Anthropic [įskiepius leidžia naudoti Pro, Max, Team ir Enterprise planų naudotojams](https://support.claude.com/en/articles/13837440-use-plugins-in-claude): Claude žiniatinklio versijoje, Claude Desktop skirtuke Chat ir Cowork. Jei jūsų paskyroje įskiepių nėra, vis tiek galite naudoti toliau pateiktas mokymosi užklausas ir rankiniu būdu nukopijuoti atrinktas korteles į savo kartojimo programėlę.

## Prieš pirmą įkėlimą patikrinkite kurso taisykles

Pradėkite nuo kurso programos, užduoties nurodymų ir savo mokymo įstaigos DI naudojimo taisyklių. Skirtinguose kursuose ir užduotyse taisyklės gali skirtis, todėl užsirašykite, kas leidžiama būtent šiai užduočiai: paaiškinimai, praktiniai klausimai, grįžtamasis ryšys, plano sudarymas, pagalba cituojant ar nė vienas iš šių dalykų.

Anthropic [Claude for Education gairėse studentams](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) tarp mokymosi būdų minimi paaiškinimai, praktiniai klausimai, mokymosi gairės ir kortelės. Tose pačiose gairėse nurodoma laikytis įstaigos akademinio sąžiningumo taisyklių ir nenaudoti Claude darbui, kurį turite atlikti savarankiškai.

Tai padeda nusibrėžti praktines ribas:

- Naudokite Claude sąvokoms kartoti, kai leidžiama korepetitoriaus pagalba ir praktika.
- Neprašykite jo išspręsti šiuo metu atliekamos vertinamos užduoties, kurią turite atlikti vieni.
- Nekelkite konfidencialios, asmeninės, autorių teisių saugomos ar riboto naudojimo kurso medžiagos, jei neturite leidimo ja dalytis su šia paslauga.
- Jei taisyklės neaiškios, pasitarkite su dėstytoju dar prieš pradėdami vertinamą darbą.

Darbą pirmiausia atlikite patys. Grįžtamasis ryšys po jūsų pačių bandymo gali būti leidžiama mokymosi pagalba; Claude darbo pateikimas kaip savo gali pažeisti kurso taisykles.

## Sudėkite tinkamus failus į tinkamą vietą

Trumpam mokymuisi pakanka vieno pokalbio. Jei kursą mokysitės ilgesnį laiką, sukurkite vieną Claude projektą ir pridėkite tik tam kursui priklausančią medžiagą.

[Claude projektai](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) prieinami visiems naudotojams; šiuo metu nemokamose paskyrose galima turėti iki penkių projektų. Tikslius kurso failus ir mokymosi nurodymus pridėkite į projekto žinių bazę, kad jie būtų prieinami visuose jo pokalbiuose.

Kai atmintis įjungta, projektas taip pat gali išlaikyti įsimintą kontekstą tarp pokalbių. Laikykite šią atmintį mokymosi kontekstu, o ne patikimu pokalbio nuorašu ar šaltinių pakaitalu. Pagrindimą ir pataisymus, kurių reikės vėliau, laikykite projekto žinių bazėje ir prašykite Claude nurodyti pirminę medžiagą.

Claude [failų įkėlimo dokumentacijoje](https://support.claude.com/en/articles/8241126-upload-files-to-claude) šiuo metu nurodyti PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON ir XLSX formatai, taip pat JPEG, PNG, GIF ir WebP vaizdai. Norint įkelti XLSX, turi būti įjungtas kodo vykdymas ir failų kūrimas. Failą galite pridėti prie vieno pokalbio arba laikyti projekto skiltyje Files, kad galėtumėte jį naudoti pakartotinai.

Rinkitės mažiausią naudingą medžiagos dalį: vieną paskaitą, vieną skyriaus dalį arba klausimus, į kuriuos ką tik atsakėte klaidingai. Užklausoje aiškiai įvardykite ribas, pavyzdžiui, 8–17 skaidres arba skyrių „Genų sankiba“. Mažesniame rinkinyje lengviau rasti pagrindimą ir pastebėti netyčinį skirtingos medžiagos suplakimą.

Anthropic pristatė [**Learning mode** Claude for Education projektuose](https://www.anthropic.com/news/introducing-claude-for-education) – sokratinį mokymosi režimą, kuris skatina studentus samprotauti, užuot iš karto pateikęs atsakymus. Jis gali būti prieinamas, jei jūsų universitetas teikia Claude for Education, tačiau nereikėtų manyti, kad jį turi kiekviena asmeninė Claude paskyra. Toliau pateiktos užklausos leidžia panašiai mokytis per klausimus ir įprastame pokalbyje.

## Prieš mokydamas Claude turi atskleisti neaiškumus

Paskaitos skaidrėje gali būti parašyta „chromosomos atsiskiria“, bet nenurodyta, kurios. Jei Claude tyliai užpildys šią spragą bendromis žiniomis, galite pradėti kartoti užtikrintai skambantį atsakymą, kurio jūsų šaltinis niekada nepagrindė.

Pridėkite medžiagą, tiksliai apibrėžkite jos ribas ir pirmiausia paprašykite patikrinti šaltinius:

```text
Šiam mokymuisi naudok tik mano įvardytus failus ir jų dalis. Nepildyk spragų
bendromis žiniomis, nebent to aiškiai paprašysiu.

Prieš pradėdamas mane mokyti, sudaryk šaltinių apžvalgą ir joje nurodyk:
- sąvokas, kurias medžiaga paaiškina aiškiai;
- dviprasmiškus ar neišsamius terminus, schemas ir ištraukas;
- tekstą, formules, žymas ar puslapius, kurių negali patikimai perskaityti;
- pateiktų šaltinių prieštaravimus;
- išankstines žinias, kurias medžiaga numano, bet nepaaiškina.

Prie kiekvieno punkto nurodyk failo pavadinimą ir puslapį, skaidrę arba antraštę.
Visa, kas tiesiogiai nepagrįsta, pažymėk NEPAGRĮSTA. Klausimų dar neužduok.
```

Palyginkite apžvalgą su failais. Jei Claude teigia, kad apibrėžimas yra 12 skaidrėje, atidarykite 12 skaidrę. Jei diagramos žyma neįskaitoma, įklijuokite atitinkamą tekstą arba įkelkite aiškesnį vaizdą. Jei du kurso šaltiniai prieštarauja vienas kitam, aiškiai užfiksuokite prieštaravimą ir pasitarkite su dėstytoju arba remkitės šaltiniu, kurį jūsų kursas laiko pagrindiniu.

Vėliau galite paprašyti paaiškinimo iš kitur. Laikykite jį atskirai:

```text
Kurso šaltinis nepaaiškina šių išankstinių žinių. Paaiškink jas remdamasis
bendromis žiniomis atskirame skyriuje, pažymėtame NE IŠ KURSO MEDŽIAGOS.
Nepateik šio paaiškinimo taip, tarsi jis būtų iš mano failų.
```

Tokia žyma padeda išvengti situacijos, kai bendrosios žinios nepastebimai tampa kurso medžiagos pagrindimu.

## Tegul Claude užduoda vieną klausimą ir palaukia

Kai šaltinių apžvalga atrodo patikima, pradėkite aktyvaus atsiminimo praktiką: patys suformuluokite atsakymą prieš jį pamatydami, užuot tik atpažinę sklandų paaiškinimą, kurį Claude jau parodė.

```text
Mokyk mane tik to, kas pagrįsta šaltinių apžvalgoje.

Užduok po vieną klausimą ir lauk mano atsakymo. Klausime nepateik užuominų.
Kai atsakysiu:
1. įvertink: Teisinga, Iš dalies teisinga, Neteisinga arba Šaltinis neaiškus;
2. pateik trumpą grįžtamąjį ryšį, neatskleisdamas viso atsakymo;
3. nurodyk pagrindžiantį failą ir puslapį, skaidrę arba antraštę;
4. jei atsakymas iš dalies teisingas arba neteisingas, duok užuominą ir leisk
   pabandyti dar kartą prieš parodydamas visą atsakymą;
5. į žinių spragų žurnalą įtrauk tik tikrą spragą.

Jei šaltinis neaiškus, pažymėk klausimą patikrai, užuot prašęs manęs
bandyti atsakyti dar kartą.

Derink tiesioginio atsiminimo klausimus, panašių idėjų palyginimus ir trumpas
taikymo užduotis. Kortelių dar nekurk. Sustok po 10 klausimų ir parodyk žurnalą.
```

Klausinėjant po vieną, vėlesni klausimai nesuteikia užuominų, o kiekvieną bandymą lengviau įvertinti. Gavus dešimties klausimų sąrašą, lengva praleisti nepatogius klausimus arba atsakyti tik į tas dalis, kurias mokate.

Paprašykite Claude keisti ir klausimų tipą. Apibrėžimai atskleidžia nežinomus terminus. Palyginimai parodo, kurias sąvokas painiojate. Trumpos taikymo užduotys leidžia pamatyti, ar galite idėją panaudoti, o ne tik atkartoti jos formuluotę. Kelių žingsnių skaičiavimą atlikite popieriuje ir parodykite eigą; vien galutinis skaičius Claude beveik nepadeda nustatyti, kur klystate.

## Fiksuokite pagrindimą ir neaiškumus

Žinių spragų žurnalas turėtų leisti atsekti išvadas, o ne vien skaičiuoti balus. Pakanka nedidelės lentelės:

| Klausimas | Jūsų atsakymas | Įvertinimas | Pataisymas | Pagrindimas | Neaiškumai | Kitas žingsnis |
| --- | --- | --- | --- | --- | --- | --- |
| Kas atsiskiria per anafazę I? | Seserinės chromatidės | Neteisinga | Atsiskiria homologinės chromosomos; seserinės chromatidės lieka susijungusios | 4 paskaita, 18 skaidrė | Nėra | Bandyti dar kartą, tada apsvarstyti vieną kortelę |

Paprašykite Claude rašyti „Šaltinis neaiškus“, kai pagrindimo nepakanka atsakymui nustatyti. Tokio įrašo nepaverskite tuo, ką reikia įsiminti. Pirmiausia išsiaiškinkite.

Neaiškumų stulpelis padeda pastebėti ir mažiau akivaizdžias problemas: schemą, kurios Claude negalėjo perskaityti, terminą, kurį dėstytojas vartoja kitaip nei vadovėlis, arba išvadą, priklausančią nuo neįvardytos prielaidos. „Tikriausiai teisinga“ ir „pagrįsta 18 skaidre“ nėra tas pats.

## Praktinis pavyzdys: mokytojo paaiškinimas ir viena kortelė vėlesniam kartojimui

Tarkime, pateiktame kurso užraše parašyta:

> Per anafazę I homologinės chromosomos juda į priešingus polius. Seserinės chromatidės lieka susijungusios ties centromeromis.

Claude klausia: „Kas atsiskiria per anafazę I?“ Jūs atsakote: „Seserinės chromatidės.“

Naudingas mokytojo atsakas trumpas ir konkretus:

```text
Neteisinga. Per anafazę I seserinės chromatidės lieka susijungusios. Dar kartą
perskaityk tuos du sakinius: kas juda į priešingus polius?
```

Jei jūsų pateikta medžiaga apima ir anafazę II, po pakartotinio bandymo Claude gali palyginti šiuos du etapus. Šis paaiškinimas tinka mokymosi pokalbiui. Ilgalaikiam kartojimui aktuali spraga yra mažesnė:

```text
Priekinė pusė: Kas atsiskiria per mejozės anafazę I?
Galinė pusė: Homologinės chromosomos; seserinės chromatidės lieka susijungusios.
Pagrindimas: 4 paskaita, 18 skaidrė
```

Viena klaida virto viena konkrečia kortele, kurios atsakymą galima aiškiai įvertinti. Užuomina, pakartotinis bandymas, paaiškinimas ir padrąsinimas atliko savo darbą tuo metu; nebūtina viso to neštis į būsimus kartojimus.

## Prieš pasitikėdami pataisymu, jį patikrinkite

Claude gali pateikti atsakymą kaip neabejotiną, nors klaidingai perskaitė failą, įtraukė išorinių žinių arba priėmė miglotą atsakymą. Tikrinimo būdas turi atitikti teiginį:

1. **Kursui būdingi faktai:** atidarykite nurodytą puslapį ar skaidrę ir patys palyginkite formuluotes, sąlygas bei išimtis.
2. **Išspręstos užduotys:** savarankiškai pakartokite sprendimo žingsnius, patikrinkite matavimo vienetus ir ženklus, tada palyginkite su oficialiais atsakymais arba dėstytojo paaiškinimais, jei tokių yra.
3. **Dabartiniai faktai:** jei jūsų modeliui ir paskyrai prieinama žiniatinklio paieška, paprašykite Claude ieškoti ir pateikti pirminius šaltinius. Atidarykite nuorodas; nuorodos leidžia patikrinti informaciją, bet pačios jos nepatikrina.
4. **Klausimai, kurių atsakymai turi rimtų pasekmių arba yra ginčijami:** remkitės paskirtu vadovėliu, kurso dėstytojais ar kitu jūsų kurso pripažįstamu autoritetingu šaltiniu.

Anthropic [žiniatinklio paieškos vadove](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) rašoma, kad paieškos atsakymuose pateikiamos nuorodos į šaltinius, ir patariama svarbią informaciją papildomai tikrinti autoritetinguose šaltiniuose. Paieškos prieinamumas gali skirtis; jei jos nėra, tiesiogiai atsiverskite patikimą šaltinį, užuot leidę Claude spėlioti.

Naudinga tikrinimo užklausa sąmoningai griežta:

```text
Patikrink žinių spragų žurnalą. Prie kiekvieno pataisymo nurodyk tikslią vietą
šaltinyje ir trumpą pagrindžiančią ištrauką. Jei šaltinis atsakymo tiesiogiai
nepagrindžia, pakeisk įvertinimą į NEPAGRĮSTA. Išvardyk visus atsakymus, kurie
priklauso nuo išorinių žinių, išvados ar neįskaitomo turinio. Šių spragų
neužpildyk spėliodamas.
```

Tada patys peržiūrėkite nurodytą medžiagą. Claude padeda rasti pagrindimą, bet jo neatstoja.

## Nuspręskite, ką verta pakartoti

Ne kiekvienas pataisymas turėtų virsti kortele. Kai kurioms spragoms reikia išspręsto pavyzdžio, schemos, konsultacijos su dėstytoju ar kitos praktinės užduoties.

Pasilikite pasiūlymą kortelei, jei jis:

- kilo iš atsakymo, kurį pateikėte klaidingai, lėtai arba supainiojote su panašia idėja;
- svarbus ne vien šiam klausimui;
- gali būti patikrintas vienu aiškiu klausimu ir vienu trumpu atsakymu;
- pagrįstas šaltiniu, kurį patikrinote;
- liks suprantamas ir neturint šalia Claude pokalbio.

Praleiskite jį, jei:

- pats šaltinis tebėra dviprasmiškas;
- į klausimą nuolat atsakote lengvai;
- klausimas reikalauja viso rašinio ar proceso aprašymo;
- atsakymas kinta priklausomai nuo neįvardytų sąlygų;
- įgūdžio lavinimas padėtų labiau nei sakinio išmokimas atmintinai.

Paprašykite Claude pasiūlymų, o ne baigto kortelių rinkinio:

```text
Peržiūrėk patikrintą žinių spragų žurnalą. Siūlyk korteles tik pasikartojančioms
ar svarbioms spragoms, kurias galima aiškiai patikrinti.

Vienai kortelei skirk vieną įsiminimo tikslą. Kiekvienoje priekinėje pusėje
rašyk konkretų klausimą, o galinėje – trumpą atsakymą. Nurodyk pagrindimo vietą
ir likusius neaiškumus. Spragas, kurioms reikia tik praktikos, sudėk į atskirą
sąrašą su tinkamu pratimu. Kol kas nieko neišsaugok.
```

Visa kita atmeskite. Mokymasis su Claude gali būti naudingas ir nesukūrus nė vienos kortelės.

## Išsaugokite patikrintas žinių spragas Nibomo

Patikrinę pagrindimą, paprašykite Nibomo įskiepio atrinktas spragas paversti išsaugotomis kortelėmis. Įvardykite darbo sritį ir paprašykite Claude prieš pridedant naujas korteles patikrinti esamas. Šia užklausa prašoma prieš išsaugant parodyti pasiūlymus:

```text
Naudodamas Nibomo, sukurk iki 5 mokymosi kortelių iš pirmiau pateikto
patikrinto žinių spragų žurnalo. Naudok mano pasirinktą darbo sritį:
[darbo srities pavadinimas]. Jei pavadinimas dviprasmiškas, prieš išsaugodamas
pasitikslink, kurią darbo sritį turiu omenyje.

Patikrink, ar nėra pasikartojančių kortelių arba kortelių tam pačiam įsiminimo
tikslui. Naudok tik spragas, pagrįstas mano patikrintais šaltiniais. Kiekvienai
kortelei skirk vieną įsiminimo tikslą, konkretų klausimą priekinėje pusėje,
trumpą atsakymą galinėje pusėje ir vietą šaltinyje.

Pirmiausia parodyk siūlomas korteles, jų pagrindimą ir rastus sutapimus.
Prieš išsaugodamas palauk mano patvirtinimo. Išsaugojęs patvirtink,
kas buvo sukurta ir kur.
```

Peržiūra prieš išsaugant yra šioje užklausoje jūsų pasirinktas būdas. Galite patys nuspręsti, kiek norite peržiūrėti prieš prašydami Claude išsaugoti ar redaguoti korteles; tai nėra reikalavimas kiekvienam įskiepio veiksmui.

Prisiminkite praktinio pavyzdžio skirtumą: paaiškinimas padėjo suprasti mejozę, o išsaugota kortelė tikrina konkretų skirtumą, kurį supainiojote. Ilgas mokytojo atsakymas retai turi virsti ilga kortele.

## Kartokite korteles su Claude atėjus jų laikui

Klausimai iš ką tik įkeltų užrašų yra mokymasis su korepetitoriumi. Nibomo kartojimas numatytu laiku naudoja jau išsaugotas korteles ir užregistruoja rezultatą, nuo kurio priklauso, kada kiekviena kortelė pasirodys vėl. Paprašykite to aiškiai:

```text
Naudodamas Nibomo, 10 minučių kartok su manimi korteles, kurių kartojimo
laikas jau atėjo, darbo srityje [darbo srities pavadinimas].
Naudok laiko juostą Europe/Paris.

Rodyk po vieną klausimą ir prieš atskleisdamas išsaugotą atsakymą palauk
mano bandymo. Tada palygink mano pradinį bandymą su tuo atsakymu, pateik
trumpą grįžtamąjį ryšį ir užregistruok tinkamą atsiminimo įvertinimą.
Pasakyk, kurį įvertinimą užregistravai. Vertink pradinį bandymą, o ne
pataisytą atsakymą, kurį pateikiu jau pamatęs kortelės atsakymą.
Baik, kai laikas pasibaigs arba nebeliks kortelių, kurias laikas kartoti,
ir apibendrink kartojimus, kurių įrašymą Nibomo patvirtino.
```

Darbo sritį ir laiko juostą pakeiskite savosiomis. Paprastai Claude praneša savo įvertinimą ir jį užregistruoja automatiškai. Jei kiekvieną įvertinimą norite pasirinkti patys, pridėkite: „Naudok rankinį vertinimo režimą: atskleidęs atsakymą palauk, kol pasirinksiu Again, Hard, Good arba Easy, ir tik tada užregistruok įvertinimą.“

Jei į kortelės klausimą apie anafazę I atsakote „seserinės chromatidės“, pataisymo atpažinimas po atsakymo atskleidimo nepadaro pradinio bandymo teisingo. Vėlesnis klausimas apie anafazę II gali patikrinti, ar dabar skiriate šiuos etapus; jis neturėtų pakeisti pirmojo bandymo įvertinimo į geresnį.

Kartoti galite ir [Nibomo programėlėje](https://app.nibomo.com/). Patvirtinti kartojimai atnaujina tą patį tvarkaraštį tiek programėlėje, tiek Claude, todėl galite pereiti iš vieno į kitą netvarkydami dviejų kartojimo istorijų. Paprašykite Claude aiškiai pranešti apie nepavykusį arba nepatvirtintą įrašymą ir nelaikyti jo išsaugota pažanga.

## Patobulinkite korteles, kurios vis klaidina

Pasikartojančios klaidos gali atskleisti miglotą klausimą, pernelyg platų atsakymą ar trūkstamą sąlygą. Prieš nuspręsdami, kad tiesiog reikia daugiau kartojimų, paprašykite Claude patikrinti kortelę:

```text
Naudodamas Nibomo, patikrink korteles, kurios šiame kartojime mane klaidino.
Ieškok neaiškių klausimų priekinėje pusėje, kelių įsiminimo tikslų vienoje
kortelėje, trūkstamų sąlygų, nepagrįstų atsakymų ir pasikartojimų.
Siūlomus pataisymus palygink su pirmiau pateiktais kurso šaltiniais.

Greta parodyk dabartinę kortelę ir siūlomą pakeitimą, trumpai nurodyk
priežastį ir vietą šaltinyje. Pažymėk viską, ko šaltiniai neleidžia nustatyti.
Prieš redaguodamas palauk mano patvirtinimo; neištrink kortelių ir nekeisk
neišsiaiškintų faktų.
```

Jei klausimas aiškus ir tiesiog negalėjote prisiminti atsakymo, palikite kortelę nepakeistą. Jei spragai įveikti reikia schemos ar dar vieno išspręsto pavyzdžio, grįžkite prie mokymosi su korepetitoriumi arba tiesioginės praktikos.

Jei mieliau kopijuojate rankiniu būdu, paprašykite Claude pateikti patvirtintas korteles paprastais priekinės ir galinės pusės teksto blokais ir pridėkite jas į įprastą kortelių programėlę. Šaltinių patikra ir mokymasis pirmiausia atsakant į klausimus lieka tokie patys.

## Kur Claude vis dar reikia priežiūros

Šis metodas padeda išvengti dalies klaidų, bet nepaverčia Claude autoritetingu šaltiniu.

- Šaltiniais apribotas atsakymas vis tiek gali būti klaidingas, jei klaidingas pats šaltinis.
- Iš failo išgautas turinys gali prarasti kontekstą, ypač schemose, lentelėse ir nuskenuotuose puslapiuose.
- Claude gali vertinti atvirą atsakymą pernelyg atlaidžiai arba pernelyg pažodžiui.
- Ilgas mokymosi pokalbis gali nutolti nuo pradinių ribų.
- Lengvos užuominos gali išmokyti atpažinti, bet ne tvirtai prisiminti.

Kai pokalbis nukrypsta, pradėkite iš naujo nuo įvardyto šaltinio. Pasikeitus paaiškinimui, paprašykite vėl nurodyti jo vietą šaltinyje. Mokydamiesi įrodinėti teiginius, rašyti rašinius, taisyklingai tarti, atlikti laboratorinius darbus ar programuoti, greta atsiminimo klausimų tiesiogiai praktikuokitės ir naudokitės žmonių grįžtamuoju ryšiu.

## Ką patikrinti baigiant mokytis su Claude

Prieš baigdami patikrinkite, ar:

- DI naudojimas atitinka šio kurso ir užduoties taisykles;
- Claude įvardijo viską, kas dviprasmiška, neįskaitoma ar nepagrįsta;
- atsakinėjote po vieną klausimą prieš pamatydami pagalbą;
- kiekvienas pataisymas nurodo pagrindimą, kurį patys atidarėte;
- išorinės žinios pažymėtos atskirai nuo kurso medžiagos;
- neišspręsti neaiškumai nevirto kortelėmis;
- išsaugotomis kortelėmis tapo tik kelios patikrintos, ilgesniam laikui aktualios žinių spragos;
- kortelės išsaugotos reikiamoje darbo srityje be nereikalingų pasikartojimų;
- kartojimams pasirinkote automatinį arba rankinį vertinimą;
- įvertinimai atspindi pradinius bandymus, o kartojimų įrašymas buvo patvirtintas;
- žinote, kur grįžti kitam suplanuotam kartojimui.

Naudingas **Claude korepetitorius** ne tik aiškina. Jis parodo, kur baigiasi šaltinio informacija, laukia, kol prisiminsite, ir palieka trumpą įrašą apie tai, kas iš tikrųjų nepavyko. Būtent dėl šio įrašo, o ne pokalbio ilgio, mokymosi su Claude eigą verta kartoti.
