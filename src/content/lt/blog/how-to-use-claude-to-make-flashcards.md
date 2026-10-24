---
title: "Kaip kurti mokymosi korteles su Claude 2026 m.: projektai, failų įkėlimas ir kartojimas su FSRS"
description: "Praktinė kortelių kūrimo su Claude eiga 2026 m.: projektuose iš įkeltų failų parenkite trumpesnes, aiškesnes korteles, o atrinktas perkelkite į Nibomo kartoti su FSRS."
date: "2026-06-11"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "kaip kurti mokymosi korteles su Claude"
  - "Claude mokymosi kortelės"
  - "Claude atsakymus paversti kortelėmis"
  - "Claude Projects mokymosi kortelės"
  - "Claude failų įkėlimas kortelėms"
  - "Claude PDF paversti kortelėmis"
  - "kurti korteles su Claude"
  - "FSRS mokymosi kortelės"
---

> [Prijungti prie Claude](https://claude.ai/directory/nibomo) · [Dokumentacija](/lt/docs/mcp-connector/)

Vakar į Claude įkėliau vienos paskaitos planą ir vieną netvarkingą PDF su skaitiniu, tada paprašiau mokymosi kortelių. Kelios buvo geros. Likusios turėjo tą pažįstamą DI prieskonį: techniškai teisingos, keistai nugludintos ir gerokai sunkiau kartojamos, nei atrodė pirmą kartą perskaičius.

Būtent čia slypi tikroji problema, kai svarstome, **kaip kurti mokymosi korteles su Claude**.

Claude gerai paverčia pradinę medžiagą kortelių juodraščiais. Tačiau jis savaime nemoka gerai nuspręsti, ką verta kartoti ilgą laiką, kiek informacijos turėtų apimti viena kortelė ir ar gražiai suformuluotą atsakymą vis dar bus lengva įvertinti kitą ketvirtadienį.

Todėl eiga, kuria iš tiesų pasitikėčiau 2026 m., yra siauresnė, nei iš pradžių norėtųsi: vieną temą laikykite viename Claude projekte, įkelkite tik tam kartui skirtą medžiagą, paprašykite paprastų klausimų ir atsakymų kortelių juodraščių, drąsiai trinkite, o atrinktas korteles perkelkite į tikrą mokymosi kortelių sistemą su FSRS.

![Jauki darbo stalo scena su Claude projektų juodraščiais, įkeliamų failų kortelėmis ir atrinktomis FSRS mokymosi kortelėmis](/blog/how-to-use-claude-to-make-flashcards.png)

## Claude pagaliau turi šiai eigai tinkamus įrankius

Šis klausimas dabar aktualesnis, nes Claude geriau pritaikytas mokymuisi nei anksčiau.

Anthropic pristatė **Claude for Education** **2025 m. balandžio 2 d.**, kartu ir **Learning Mode** projektų aplinkoje. Ne mažiau svarbi dabartinė pagalbos dokumentacija. Anthropic projektų pagalbos puslapyje, datuotame **2026 m. kovo 16 d.**, nurodyta, kad projektai prieinami visiems naudotojams, o nemokamos paskyros gali jų susikurti iki penkių. Anthropic failų įkėlimo pagalbos puslapyje, datuotame **2026 m. balandžio 22 d.**, rašoma, kad Claude palaiko mokymuisi naudingus failų tipus, tarp jų **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON ir XLSX**.

Taip **mokymosi korteles su Claude** galima kurti daug tvarkingiau nei laikantis senojo įpročio „sumesti viską į vieną pokalbį ir tikėtis geriausio“.

Anthropic švietimo ataskaita taip pat rodo, kad taip jau elgiamasi dažnai. Joje nurodyta, kad **39,3 %** analizuotų su švietimu susijusių pokalbių pagrindinis studentų tikslas buvo kurti ir tobulinti mokomąją medžiagą. Taigi įdomesnis klausimas jau nebe tas, ar žmonės naudoja Claude mokymosi medžiagai. Akivaizdu, kad naudoja. Geriau klausti, kaip tą medžiagą paversti kortelėmis, kurias vėliau būtų verta kartoti.

## Pradėkite nuo vieno Claude projekto kiekvienam kursui, egzaminui ar temai

Tai pirmasis įprotis, kurį išlaikyčiau, nes jis pagerina beveik visus tolesnius žingsnius.

Dabartinėje Claude projektų dokumentacijoje projektai apibūdinami kaip savarankiškos darbo sritys, turinčios savo pokalbių istoriją ir žinių bazę. Kortelių juodraščiams reikia būtent to.

Nekurkite vienos milžiniškos Claude darbo srities pavadinimu `mokslai`.

Kurkite atskirą projektą:

- vienam kursui
- vienam sertifikavimo egzaminui
- vienam skyriui, kurį šią savaitę norite baigti
- vienai iš tikrųjų susijusių temų grupei

Taip juodraščiai būna tvarkingesni, nes Claude nebando viename atsakyme sumaišyti nesusijusios keturių dalykų medžiagos. Ir tvarkyti juos paprasčiau, nes žinote, ką turėjo apimti kiekvienas juodraščių rinkinys.

Jei Claude naudojate plačiau, kaip korepetitorių, o ne vien kortelių juodraščiams, geriau tiks papildomas straipsnis [„Kaip naudoti Claude mokymuisi 2026 m.“](/lt/blog/how-to-use-claude-for-studying/). Šio straipsnio tema siauresnė. Jis apie tai, kaip iš Claude atsakymų gauti korteles, kurios ir kartojant vis dar atrodys vertos jūsų laiko.

## Vieną kartą nustatykite projekto nurodymus, kad kiekvienas juodraščių rinkinys būtų tvarkingesnis

Tai vienas naudingiausių būtent Claude privalumų.

Dabartinėse Anthropic projektų gairėse nurodyta, kad galite nustatyti **projekto nurodymus**, kad Claude visuose to projekto pokalbiuose laikytųsi tų pačių reikalavimų. Kuriant korteles tai padeda nekartoti tų pačių formato ir atmetimo taisyklių kaskart įkėlus naują dalį.

Projekto nurodymą rašyčiau trumpą ir paprastą:

```text
Kai prašau mokymosi kortelių, naudok paprastą klausimo ir atsakymo formatą. Vienoje kortelėje turi būti po vieną sąvoką, faktą, skirtumą arba proceso žingsnį. Klausimai turi būti konkretūs, į juos turi būti įmanoma atsakyti. Atsakymai turi būti trumpi. Praleisk pasikartojimus, miglotus klausimus ir viską, kam atsakyti reikėtų trūkstamo pirminio šaltinio konteksto.
```

O konkrečiai užduočiai skirtus nurodymus pateikite pačiame pokalbyje, kai įkeliate naują medžiagos dalį.

Šis atskyrimas gerai veikia: projekto nurodymas nustato bendras taisykles, o pokalbio užklausa skirta dabartinei paskaitai, skyriui ar klausimų rinkiniui.

## Kelkite mažesnes šaltinio dalis, nei atrodo būtina

Būtent čia dažniausiai stringa **Claude atsakymų pavertimas kortelėmis**.

Žmonės pamato failų įkėlimo galimybę ir supranta ją kaip leidimą viena užklausa pateikti visą kurso medžiagą. Dažniausiai taip gaunamos prastesnės kortelės.

Pačios Anthropic įkėlimo dokumentacijoje dideliems dokumentams siūlomas paprastas kelias: suskaidyti juos į mažesnes dalis. Taip ir daryčiau.

Geresnė pradinė medžiaga:

- vienos paskaitos užrašai
- viena skaitinio dalis
- vienas ištaisytų praktinių klausimų rinkinys
- vienas skyriaus poskyris
- viena tvarkinga mokymosi atmintinės dalis

Prastesnė pradinė medžiaga:

- visas vadovėlis
- dvylika paskaitų vienu metu
- vienas dar nesutvarkytas semestro aplankas
- milžiniška išklotinė, kurios iš tiesų nenorite kartoti kortelė po kortelės

Nedidelės medžiagos dalys verčia sąžiningiau paklausti: ką iš šios dalies verta vėliau prisiminti neatsivertus šaltinio?

Šis klausimas padeda išlaikyti mažesnį ir geresnį kortelių rinkinį.

## Claude gerai rengia juodraščius iš šaltinio, bet prasčiau atrenka, kas svarbu

Manau, tai naudingiausias būdas suprasti jo vaidmenį.

Claude gali:

- sutrumpinti skaitinio dalį
- aiškiau paaiškinti sąvoką
- atskirti akivaizdžias potemes
- užrašus paversti klausimų ir atsakymų kortelių juodraščiais
- pastebėti pasikartojančius terminus ir apibrėžimus

Claude savaime nežino:

- kurie faktai jums jau tokie aiškūs, kad juos galima praleisti
- kuriuos skirtumus nuolat painiojate
- kuris atsakymas per ilgas, kad jį greitai įvertintumėte
- kuri kortelė atrodo suprantama tik todėl, kad dar prisimenate pastraipą, iš kurios ji paimta

Todėl **kurti korteles su Claude** geriausiai sekasi tada, kai Claude rengia juodraščius, o jūs redaguojate.

Jei paprašote Claude viską nuspręsti pačiam, paprastai gaunate pernelyg nuolaidų rinkinį. Jis išsaugo per daug, aiškina per daug ir palieka medžiagą, kuri tuo metu atrodė naudinga, bet neverta būsimų kartojimų.

## Naudokite paprastą užklausą, o darbą tegu atlieka apribojimai

Įmantrios užklausos nereikia.

Pačiame pokalbyje rašyčiau maždaug taip:

```text
Paversk šią šaltinio medžiagą paprastomis klausimų ir atsakymų mokymosi kortelėmis.

Taisyklės:
- Vienas faktas, skirtumas arba proceso žingsnis vienoje kortelėje
- Klausimas turi būti konkretus, į jį turi būti įmanoma atsakyti
- Atsakymas turi būti trumpas ir aiškus
- Neišgalvok faktų
- Praleisk pasikartojimus ir miglotus klausimus
- Praleisk korteles, kurioms reikia trūkstamo pirminio dokumento konteksto
- Drąsiai atmesk korteles, kurių neverta kartoti ilgą laiką
```

Jei šaltinis yra ištaisytų klausimų rinkinys, pridėkite vieną sakinį:

```text
Pirmenybę teik mano klaidoms, painiojamiems dalykams ir skirtumams, kuriuos greičiausiai vėl pražiūrėsiu.
```

Tiek pakanka.

Naudingi apribojimai paprasti:

- vienas įsimintinas dalykas vienoje kortelėje
- trumpi atsakymai
- jokių išgalvotų faktų
- jokių plačių apibendrinimų vietoj konkretaus klausimo
- jokių kortelių, kurioms vis dar reikia šalia atverto viso šaltinio

Claude paprastai gerai reaguoja į aiškias ribas. Retai problema būna stebuklingos užklausos trūkumas. Dažniau žmonės tiesiog prašo per daug vienu metu.

## Geriausios Claude kortelės dažniausiai gimsta iš trijų rūšių medžiagos

Claude labiausiai pasitikiu tada, kai šaltinis jau beveik tinkamas kortelėms, bet jį dar reikia sutvarkyti.

Geriausiai tinka:

- paskaitų užrašai, kuriuos reikia sutrumpinti
- skaitiniai, iš kurių reikia išrinkti informaciją
- ištaisyti klausimai, atskleidžiantys vieną konkrečią klaidą

Šis dėsningumas svarbus, nes Claude nekuria mokymosi sistemos nuo nulio. Jis padeda neapdorotą medžiagą paversti konkretesniais dalykais, kuriuos reikės atgaminti iš atminties.

Jei daugiausia naudojate užrašus, straipsnyje [„Kaip paversti užrašus mokymosi kortelėmis 2026 m.“ (anglų kalba)](/blog/turn-notes-into-flashcards/) išsamiau aptariamas medžiagos tvarkymas. Iš failų išskirkite nedidelę svarbią dalį ir prieš priimdami kortelių juodraščius patikrinkite tekstą, lygtis bei žymas.

## Ištrinkite korteles, kurios vis dar skamba kaip Claude

Čia kokybė iš tiesų pastebimai pagerėja.

Claude sukurtos kortelės dažnai turi atpažįstamų trūkumų:

- klausimas skamba elegantiškai, bet neaišku, kokio atsakymo tikimasi
- atsakyme yra trys faktai, nes šaltinio pastraipoje buvo trys faktai
- kortelėje lieka miglotų frazių, tokių kaip „pagrindiniai aspektai“ ar „svarbūs veiksniai“
- formuluotė pakankamai aiški, kad ja žavėtumėtės, bet erzina kartojant

Tokias iškart atmesčiau.

Kortelės klausimas neturėtų skambėti kaip įžanginis mokymosi atmintinės sakinys. Jis turėtų būti toks, į kurį arba atsakote, arba ne.

Palikite kortelę tik tada, jei:

- galite atsakyti neatsivertę šaltinio
- atsakymas pakankamai trumpas, kad greitai jį įvertintumėte
- ji tikrina vieną sąvoką, o ne visą jų grupę
- po savaitės vis dar norėsite tai prisiminti

Jei ne, ištrinkite.

Tai pagrindinis skirtumas tarp produktyviai atrodančios Claude sesijos ir kortelių rinkinio, kuris išlieka naudingas.

## Viena silpna Claude kortelė ir versija, kurią iš tikrųjų palikčiau

Tarkime, Claude perskaito tekstą apie glikolizę ir pateikia štai ką:

- Klausimas: Kokie pagrindiniai glikolizės ypatumai ir rezultatai?
  Atsakymas: Glikolizė yra metabolinis kelias, vykstantis citoplazmoje, kurio metu gliukozė paverčiama piruvatu, gaminami ATP ir NADH, o deguonis nereikalingas.

Tai ne viena kortelė. Tai pastraipa su priklijuota etikete.

Geresnė versija paprastai yra kelios mažesnės kortelės:

- Klausimas: Kur vyksta glikolizė?
  Atsakymas: Citoplazmoje.
- Klausimas: Kokia molekulė skaidoma glikolizės metu?
  Atsakymas: Gliukozė.
- Klausimas: Ar glikolizei reikia deguonies?
  Atsakymas: Ne.

Galbūt paliksite dar vieną kortelę apie susidarančius produktus, jei jūsų kurse tai svarbu atskirti.

Svarbu išsaugoti ne sklandų Claude atsakymą, o jame slypinčius dalykus, kuriuos verta atgaminti iš atminties.

## Nepainiokite Claude atminties ir konteksto su kartojimu intervalais

Dabar Claude turi geresnius darbo su kontekstu įrankius nei anksčiau. Projektai padeda. Įkelti failai padeda. Projekto nurodymai padeda. Visa tai naudinga.

Tačiau tai vis dar neprilygsta kartojimo sistemai.

Claude gali išlaikyti temos kontekstą. Jis gali geriau prisiminti jūsų sesijos eigą nei senesni pokalbių įrankiai. Visa tai nepakeičia nuobodžios dalies, kuri vėliau iš tiesų svarbi: vėl pamatyti tinkamą kortelę tinkamu laiku.

Todėl **Claude Projects aplinkoje kuriamos kortelės** turėtų keliauti į tikrą mokymosi kortelių programėlę, o ne likti pačiame projekte.

Claude gali išlaikyti kontekstą.

FSRS rūpinasi užmiršimu.

Tai skirtingi darbai.

Jei norite išsamiau suprasti kartojimo planavimą, toliau skaitykite [„FSRS ir SM-2 palyginimas 2026 m.“ (anglų kalba)](/blog/fsrs-vs-sm-2/).

## Patvirtintas korteles išsaugokite Nibomo

Atidarykite [Nibomo įrašą Claude kataloge](https://claude.ai/directory/nibomo), prijunkite Nibomo, prisijunkite prie savo Nibomo paskyros ir suteikite prieigą. Nibomo kataloge pateikiama kaip bendruomenės jungtis („Community“).

Paprašykite Claude per Nibomo MCP jungtį išsaugoti tik tas korteles, kurias patikrinote ir patvirtinote. Peržiūrėkite paskirties darbo sritį ir duomenų įrašymo užklausą, ją patvirtinkite, tada patikrinkite išsaugotas korteles Nibomo ir tik tuomet pradėkite kartoti su FSRS. Taip pat galima korteles nukopijuoti rankiniu būdu.

[Nibomo](/lt/) tinka šiai eigai, nes dabartinis produktas apima tai, ko Claude vienas neatlieka iki galo:

- klausimų ir atsakymų kortelių kūrimą ir redagavimą
- DI pokalbį su darbo srities duomenimis ir pridėtais failais
- rinkinius ir žymas galutinėms kortelėms tvarkyti
- kartojimą su FSRS, kai korteles jau verta pasilikti
- jau veikiančią žiniatinklio programėlę, jei norite pradėti greitai
- galimybę vėliau sistemą paleisti savo infrastruktūroje

Jei norite greičiausio kelio, [darbo pradžios vadove](/lt/docs/getting-started/) aprašyta jau veikianti žiniatinklio programėlė. Jei svarbiau valdyti visą sistemą patiems, toliau skaitykite [diegimo savo infrastruktūroje vadovą](/lt/docs/self-hosting/).

## Eiga, kurią iš tikrųjų kartočiau

Gera eiga, paaiškinanti, **kaip kurti mokymosi korteles su Claude**, turi būti pakankamai trumpa, kad jos laikytumėtės ir išblėsus naujumo įspūdžiui.

Aš pasilikčiau tokią versiją:

1. Sukurkite vieną Claude projektą vienam kursui, egzaminui ar temai.
2. Pridėkite trumpą projekto nurodymą su klausimų ir atsakymų kortelių taisyklėmis.
3. Įkelkite vieną nedidelę medžiagos dalį: paskaitą, skaitinio dalį arba ištaisytus praktinius klausimus.
4. Paprašykite Claude paprastų klausimų ir atsakymų kortelių juodraščių.
5. Silpnas korteles iškart ištrinkite arba perrašykite.
6. Paprašykite Claude per Nibomo MCP jungtį išsaugoti tik tas korteles, kurias patikrinote ir patvirtinote. Peržiūrėkite paskirties darbo sritį ir duomenų įrašymo užklausą, ją patvirtinkite, tada patikrinkite išsaugotas korteles Nibomo ir tik tuomet pradėkite kartoti su FSRS. Taip pat galima korteles nukopijuoti rankiniu būdu.
7. Kartokite galutinį rinkinį su FSRS.

Tokia eiga atrodo patikimesnė nei apsimesti, kad pats Claude yra vieta, kurioje turėtų gyventi jūsų atmintis.

Jei DI sukurtas rinkinys jau atrodo išsipūtęs, nustokite priimti naujus juodraščius ir sutvarkykite esamus pagal straipsnį [„Kaip pataisyti DI sukurtas mokymosi korteles 2026 m.“ (anglų kalba)](/blog/how-to-fix-ai-flashcards/).

## Geresnė kortelių kūrimo su Claude taisyklė

Neprašykite Claude užbaigti mokymosi už jus.

Paprašykite jo perimti mechaninį darbą.

Štai kokia **kortelių kūrimo su Claude** eiga iš tiesų pasiteisina 2026 m.:

- vienas projektas vienai temai
- po vieną nedidelę medžiagos dalį
- vienas faktas arba skirtumas vienoje kortelėje
- drąsus nereikalingų kortelių trynimas
- tikras kartojimas po to

Claude padeda greičiau iš netvarkingos šaltinio medžiagos gauti kortelių juodraščius.

Nibomo kartu su FSRS tuos juodraščius paverčia tuo, ką galbūt dar prisiminsite po mėnesio.
