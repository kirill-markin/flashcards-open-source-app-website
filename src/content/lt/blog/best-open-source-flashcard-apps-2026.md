---
title: "Geriausios atvirojo kodo mokymosi kortelių programėlės 2026 m.: 6 FOSS variantų palyginimas"
description: "Šešių prižiūrimų atvirojo kodo mokymosi kortelių programėlių palyginimas: kodo aprėptis, vietiniai duomenys, sinchronizavimas, Anki importas, eksportas, savarankiškas diegimas ir atkūrimas."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "geriausios atvirojo kodo mokymosi kortelių programėlės"
  - "atvirojo kodo mokymosi kortelių programėlė"
  - "atvirojo kodo intervalinis kartojimas"
  - "mokymosi kortelės savame serveryje"
  - "mokymosi kortelių programėlė be interneto"
  - "atvirojo kodo Anki alternatyva"
  - "FOSS mokymosi kortelės"
---

2026 m. Anki vis dar yra geriausia atvirojo kodo mokymosi kortelių programėlė daugumai žmonių. Pasirinkimas tampa įdomesnis, kai atvirasis kodas nėra vienintelis būtinas reikalavimas.

Galbūt jums reikia naršyklės programėlės savame serveryje. Arba rinkinio, kurį galima skaityti kaip paprastą Markdown tekstą. Arba privačios užrašų sistemos, kurioje kuriamos mokymosi kortelės. Kiekvienam poreikiui tinka skirtingas produktas, o vieša GitHub saugykla pati savaime pasirinkimo nenulemia.

Greta atvirojo kodo kompiuterio programos gali būti uždarojo kodo iPhone programėlė. Docker konteineryje gali veikti naršyklės sąsaja, kuri nesinchronizuoja duomenų su įdiegtomis programėlėmis. Importas gali perkelti žodžius, bet prarasti šablonus, medijos failus ir daugelį metų kauptą kartojimų istoriją, dėl kurios kolekcija buvo naudinga.

Šios apžvalgos kriterijus atitiko šeši projektai. Palyginau jų licencijuotą pirminį kodą, naujausią stabilią versiją, vietinius duomenis, kartojimo planavimą, sinchronizavimą, perkėlimą iš Anki, eksportą ir tiksliai tai, ką galima paleisti savo serveryje. Pastaroji riba svarbesnė, nei leidžia suprasti dauguma funkcijų sąrašų.

> **Autoriaus ryšys su produktu:** esu Kirill Markin ir kuriu [Nibomo](https://nibomo.com/lt/), vieną iš šešių toliau aptariamų programėlių. Jos MIT saugykla apima žiniatinklio programėlę, įrenginiams skirtas programėles, serverio dalį, sinchronizavimą ir infrastruktūrą. Neskyriau jai pirmos vietos. Anki yra saugesnis įprastas pasirinkimas, Mnemosyne turi labiau nusistovėjusį perkėlimo iš Anki būdą, o kelis čia aptariamus variantus gerokai lengviau administruoti.

**Faktai patikrinti:** 2026 m. rugsėjo 5 d. Stabilios versijos atskirtos nuo pakeitimų, kurie yra tik numatytojoje kodo šakoje.

![Žygeivis lygina šešias atvertas kuprines ir išbando atsarginį rinkinį prieš pasirinkdamas atvirojo kodo mokymosi kortelių programėlę](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Trumpas atsakymas

| Svarbiausias poreikis | Tinkamiausias pasirinkimas | Kodėl | Ką pirmiausia patikrinti |
| --- | --- | --- | --- |
| Patikima universali sistema arba sudėtinga jau turima kolekcija | [Anki](https://apps.ankiweb.net/) | Brandžios kortelės ir šablonai, FSRS, papildiniai, programėlės daugeliui platformų ir išsamus paketų eksportas | Oficiali iOS programėlė ir AnkiWeb nėra kompiuterio programos atvirojo kodo dalis; savame serveryje gaunate sinchronizavimą, bet ne AnkiWeb |
| Į mokymąsi orientuota kompiuterio programa su nusistovėjusiu Anki importu | [Mnemosyne](https://mnemosyne-proj.org/) | Mokymasis iš vietinių duomenų, Anki kortelių tipų ir mokymosi duomenų importas bei savarankiškai paleidžiamas sinchronizavimo serveris | Naujausia stabili versija tebėra 2.11; Android leidžia kartoti, bet ne redaguoti |
| Užrašai ir mokymosi kortelės vienoje vietinėje žinių bazėje | [SiYuan](https://b3log.org/siyuan/en/) | Be interneto veikiančios įdiegtos programėlės, integruotas FSRS ir tikra naršyklės programėlė, paleidžiama per Docker | Docker versija negali sinchronizuotis su įdiegtomis programėlėmis; joje nėra dalies importo ir eksporto komandų |
| Žiniatinklio, mobiliųjų programėlių, serverio dalies ir infrastruktūros kodas | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Viena MIT monorepozitorija su dokumentuotu diegimu produkcinėje aplinkoje | Palaikoma produkcinė infrastruktūra paremta AWS, o perkeliant iš Anki dalis duomenų prarandama |
| Naujesnė kompiuterio programa, pirmiausia sauganti duomenis įrenginyje ir tiesiogiai importuojanti APKG | [Recall](https://github.com/Madlezz/Recall) | FSRS, kompiuterių versijos, PWA, vietinės duomenų bazės ir pasirenkamas šifruotų duomenų perdavimo serveris | Importas išsaugo tik dabartinę planavimo būseną, apdoroja pirmus du užrašo laukus ir praleidžia garsą |
| Žmogui skaitomi Markdown rinkiniai, nepriklausantys nuo tinklo | [Essentialist](https://github.com/essentialist-app/essentialist) | Paprasti rinkinių failai ir sąmoningai be interneto veikianti kompiuterio bei Android programėlė | Sinchronizavimo nėra, o pažanga saugoma atskiroje paslėptoje duomenų bazėje |

Čia funkcijos nevertinamos taškais. Pradėkite nuo to, su kokiu trūkumu negalite susitaikyti. Jei turite dešimties metų Anki kartojimų duomenis, perkėlimo tikslumas svarbesnis už tvarkingesnę sąsają. Jei administruojate sistemą mokykloje, prieiga per naršyklę ir patikrintas atkūrimas gali būti svarbesni už papildinius.

## Kas laikyta atvirojo kodo mokymosi kortelių programėle

Taikiau keturis kriterijus:

1. **Pagrindinių mokymosi funkcijų kodas paskelbtas su aiškia atvirojo kodo licencija.** Integracijų rinkinys, kurio pagrindinės programos kodas nepaskelbtas, netinka.
2. **Intervalinis kartojimas jau veikia.** Įrašo planuose ar bendro viktorinos režimo neužtenka.
3. **Yra išleista programos versija arba aiškiai dokumentuotas oficialus diegimo būdas.** Vien nauji kodo pakeitimai dar nereiškia, kad prototipą galima saugiai rekomenduoti.
4. **Oficialiuose šaltiniuose pakanka informacijos duomenų tvarkymui įvertinti.** Reikėjo konkrečių atsakymų apie vietinę saugyklą, sinchronizavimą, importą, eksportą ar prieglobą, o ne migloto pažado, kad naudotojai „valdo savo duomenis“.

GitHub žvaigždučių skaičius nebuvo atrankos kriterijus. Jis rodo projekto amžių ir žinomumą ne mažiau nei tinkamumą. Vis dėlto branda svarbi. Anki, Mnemosyne ir SiYuan turi nusistovėjusią versijų leidimo ir naudojimo tvarką. Recall ir Essentialist pateko į sąrašą siauresniems poreikiams, nes jų išleistų versijų veikimas dokumentuotas pakankamai gerai konkrečiai rekomendacijai pateikti.

Žodį „prižiūrima“ irgi reikia tikrinti dviem būdais. Versijos žyma parodo, ką naudotojas gali įsidiegti, o numatytoji šaka – kur link juda projektas. Essentialist yra aiškiausias pavyzdys. Stabilios versijos dokumentacijoje nurodytas SM-2, o dabartinės šakos dokumentacijoje – FSRS. Toliau lentelėje užfiksuotas SM-2.

## Šešių laisvojo ir atvirojo kodo mokymosi kortelių programėlių palyginimas

| Programėlė | Patikrinta stabili versija | Platformos | Duomenys be interneto | Kartojimo planavimas | Sinchronizavimas | Perkėlimas iš Anki ir duomenų išsikėlimas | Ką galima paleisti savarankiškai |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 2026 m. rugpjūčio 5 d. | Windows, macOS, Linux; atskiros Android ir iOS programėlės; AnkiWeb | Įdiegtos programėlės mokymuisi naudoja vietines kolekcijas | FSRS arba ankstesnis SM-2 | AnkiWeb arba oficialus savarankiškai paleidžiamas sinchronizavimo serveris | Importuoja tekstą, APKG/COLPKG ir Mnemosyne duomenų bazes; eksportuoja tekstą arba paketus su pasirenkamais medijos ir planavimo duomenimis | **Tik sinchronizavimo serverį.** Nėra savarankiškai diegiamo AnkiWeb ar mokymosi per naršyklę sąsajos |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 2023 m. lapkričio 12 d.; saugykla toliau keista 2026 m. | Windows, macOS, Linux, Android; ribotas kartojimas naršyklėje | Kompiuteryje duomenys vietiniai; Android leidžia kartoti be interneto, bet ne redaguoti | Adaptyvus planavimas pagal 0–5 prisiminimo įvertinimus | Integruotas sinchronizavimas su kompiuteryje arba be grafinės aplinkos veikiančiu serveriu | Oficialiai dokumentuotas visas Anki importas su pasirinktiniais kortelių tipais ir mokymosi duomenimis; dalijimuisi skirtas eksportas nėra visa atsarginė kopija | **Sinchronizavimą ir ribotą kartojimą naršyklėje.** Naršyklės serveris neturi saugumo funkcijų |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 2026 m. rugpjūčio 30 d. | Windows, macOS, Linux, Android, iOS, HarmonyOS; naršyklė per Docker | Įdiegtos programėlės saugo darbo sritį įrenginyje | FSRS | Mokamas oficialus iš vieno galo į kitą šifruotas sinchronizavimas arba mokama S3/WebDAV integracija | Bendroji programa importuoja Markdown ir duomenis bei eksportuoja keliais dokumentų ir duomenų formatais; dokumentuoto APKG importo nėra | **Visą naršyklės programėlę.** Docker nesinchronizuoja įdiegtų programėlių ir neturi dalies importo bei eksporto komandų |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 2026 m. rugsėjo 1 d. | Žiniatinklis, iOS, Android | Žiniatinklyje – IndexedDB; iOS – SQLite; Android – SQLite pagrindu veikiantis Room; vietiniai pakeitimai patenka į sinchronizavimo eilę | FSRS | Teikėjo arba jūsų įdiegta serverio dalis | Savasis ZIP perkelia korteles, žymas, šaltinio metaduomenis ir susietą mediją, bet ne rinkinius, mokymosi būseną, nustatymus ar paskyras; APKG importo nėra | **Visą žiniatinklio ir serverio infrastruktūrą.** Produkcinis diegimas paremtas AWS; privačios įrenginių programėlių versijos kuriamos atskirai |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 2026 m. liepos 31 d. | Windows, macOS, Linux; įdiegiama PWA | Kompiuteryje – SQLite; naršyklėje – IndexedDB; paskyros nereikia, telemetrija pagal numatytuosius nustatymus išjungta | FSRS | Kompiuterio aplanko sinchronizavimas arba pasirenkamas šifruotų duomenų perdavimas per Cloudflare Worker/R2 | APKG importas kompiuteryje nuskaito pirmus du laukus, rinkinius, žymas, apytikrę planavimo būseną ir paveikslėlius; eksportas į JSON bei Recall archyvą | **Tik šifruotų būsenos kopijų perdavimo serverį.** Jis netalpina PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 2025 m. spalio 10 d.; kodas toliau keistas 2026 m. | Android APK, macOS DMG, Linux Flatpak; Windows kompiliuojama iš kodo | Tinklo nenaudoja; rinkinio turinys – Markdown | Stabili versija: SM-2; numatytoji šaka: FSRS | Nėra | Markdown išsaugo kortelių turinį; greta esanti paslėpta duomenų bazė išsaugo pažangą | **Nėra ką talpinti serveryje.** Kartu saugokite Markdown failo ir jo duomenų bazės kopijas |

## 1. Anki – saugiausias įprastas pasirinkimas

Anki laimi dėl ne itin įspūdingų, bet svarbių dalykų. Ji palaiko sudėtingus užrašų tipus, iš šablonų generuoja kelias to paties užrašo korteles, saugo mediją kartu su kolekcija ir perkelia daugelio metų planavimo duomenis. Šioje apžvalgoje tikrinta stabili kompiuterio versija [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Naujesnė 26.09b2 pažymėta kaip beta, todėl ja čia nesiremiama.

Ne visas produktas yra atvirojo kodo. [Kompiuterio programos saugyklai taikoma AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE) su išvardytomis įtrauktų komponentų išimtimis. [AnkiDroid](https://github.com/ankidroid/Anki-Android) yra atskiras atvirojo kodo Android projektas. AnkiMobile ir AnkiWeb yra oficialios produkto dalys, tačiau jų kodo šiose saugyklose nėra. Plačiau apie tai – straipsnyje [Ar Anki yra atvirojo kodo?](/blog/is-anki-open-source/).

Įdiegtos programėlės saugo vietines kolekcijas, todėl įprastam kartojimui ryšio nereikia. AnkiWeb veikia internetu. Jei svarbiausias kriterijus yra naudojimas be interneto, straipsnyje [Ar Anki veikia be interneto?](/blog/does-anki-work-offline/) atskirta, kas lieka įrenginyje, o kam reikia sulaukti sinchronizavimo.

Anki palaiko [FSRS ir ankstesnį kartojimo planavimo algoritmą](https://docs.ankiweb.net/deck-options.html). Iš čia lyginamų programų Anki eksporto formatai suteikia geriausią pagrindą duomenims perkelti. [COLPKG apima visą kolekciją su planavimo duomenimis](https://docs.ankiweb.net/exporting.html), o į APKG eksportą galima įtraukti planavimo informaciją ir mediją, pasirinkus atitinkamas parinktis. Anki taip pat importuoja tekstą, Anki paketus ir Mnemosyne 2.0 duomenų bazes.

Toks išsamus pradinis paketas negarantuoja tobulo importo kitoje programoje. Paskirties programa vis tiek turi suprasti jame esančius šablonus, kortelių generavimo taisykles, medijos nuorodas ir planavimo laukus. Ji tiesiog gauna daugiau informacijos nei iš CSV failo.

[Oficialaus savarankiškai paleidžiamo serverio](https://docs.ankiweb.net/sync-server.html) paskirtis sąmoningai siaura. Jis sinchronizuoja suderinamas Anki programėles, bet nesuteikia AnkiWeb, kartojimo naršyklėje ar paskyrų portalo. Pagal numatytuosius nustatymus jis priima užklausas nešifruotu HTTP ryšiu; vadove rekomenduojama laikyti jį vietiniame tinkle arba prieigą apsaugoti VPN ar HTTPS atvirkštiniu tarpiniu serveriu. Programėlių ir serverio versijos taip pat turi likti suderinamos.

Rinkitės Anki, kai svarbiausia išsaugoti kolekciją, šablonus, papildinius ar palaikyti daug platformų. Kitų variantų ieškokite tada, kai svarbesnis konkretus reikalavimas, pavyzdžiui, naršyklės sąsaja savame serveryje ar visas paskelbtas mobiliųjų programėlių kodas.

## 2. Mnemosyne padeda susitelkti į mokymąsi kompiuteryje

Mnemosyne atrodo kaip mokymosi priemonė kompiuteriui, nes būtent tokia ir yra. Kartu negaunate žinių bazės ar debesijos platformos. Gaunate vietinę duomenų bazę, įprastą intervalinio kartojimo eigą, papildomą Android programėlę kartojimui ir sinchronizavimo serverį, veikiantį kompiuteryje arba įrenginyje be grafinės aplinkos.

Naujausia stabili versija tebėra [2.11, išleista 2023 m. lapkritį](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Saugykla keista ir 2026 m., tačiau šie pakeitimai dar nėra stabilios išleistos versijos dalis. Išbandykite 2.11 tose operacinėse sistemose, kurias planuojate naudoti kelerius ateinančius metus.

Licencijos negalima nusakyti vienu ženkliuku. [Šakniniame licencijų faile](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) openSM2sync priskirta LGPL v3, o likusiai Mnemosyne daliai – atskiros sąlygos. [Pagrindinės programos licencija](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) numato AGPL v3 ir papildomą reikalavimą, kad išvestiniame kūrinyje Mnemosyne pavadinimas liktų aiškiai matomas, o konkreti jo pateikimo forma būtų aptarta su projekto prižiūrėtojais. Prieš platindami pakeistą versiją perskaitykite šį tekstą.

[Android programėlė leidžia kartoti be interneto, bet negali redaguoti kortelių](https://mnemosyne-proj.org/help/android-client). Kituose įrenginiuose galima naudoti iš kompiuterio programos paleistą kartojimo naršyklėje serverį, tačiau oficialiame funkcijų puslapyje perspėjama, kad jis neturi saugumo funkcijų. Tai patogi sąsaja vietiniam tinklui, o ne parengta vieša žiniatinklio programa.

Perkėlimas yra stipriausias Mnemosyne argumentas, kai svarstote, ar tiesiog likti su Anki. Oficialiame funkcijų puslapyje dokumentuotas [visas Anki importas, įskaitant pasirinktinius kortelių tipus ir mokymosi duomenis](https://mnemosyne-proj.org/features). [Integruotas sinchronizavimas](https://mnemosyne-proj.org/help/syncing) sujungia korteles bei mokymosi duomenis ir gali naudoti jūsų valdomą kompiuterį.

Įprasta eksporto komanda gali suklaidinti darant atsarginę kopiją. Ji skirta dalytis pasirinktomis kortelėmis ir neįtraukia mokymosi duomenų. Norint perkelti ar atkurti visą sistemą, [naudojimo keliuose kompiuteriuose vadove](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) nurodyta kopijuoti visą duomenų katalogą.

Mnemosyne yra stipriausia į patį mokymąsi orientuota atvirojo kodo Anki alternatyva šiame sąraše. Kompromisai – retai leidžiamos stabilios versijos, ribotas redagavimas telefone ir naršyklės sąsaja, kurios prieigą reikia kruopščiai apriboti tinkle.

## 3. SiYuan tinka, kai visa sistema sukasi apie užrašus

SiYuan yra į privatumą orientuota žinių valdymo programa, kurioje mokymosi kortelės integruotos į tą patį blokų ir dokumentų modelį. Tai naudinga, kai kartojimo medžiaga gimsta iš užrašų. Jei norite tik kortelių eilės, gausite nemažai papildomo sudėtingumo.

[AGPL-3.0 saugykla](https://github.com/siyuan-note/siyuan) susieja sąsają, branduolį, mobiliąsias programėles, duomenų sluoksnį ir FSRS komponentą. Čia tikrinta stabili versija [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Kompiuterio ir mobiliosios programėlės saugo darbo sritį įrenginyje ir veikia be interneto.

Sinchronizavimas neįeina į nemokamą vietinio saugojimo planą. [Oficialiame kainoraštyje](https://b3log.org/siyuan/en/pricing.html) iš vieno galo į kitą šifruotas oficialus sinchronizavimas siūlomas su prenumerata, o mokamos Pro funkcijos suteikia integracijas su jūsų S3 ar WebDAV saugykla. Projektas taip pat įspėja nelaikyti aktyvios darbo srities bendros paskirties failų sinchronizavimo aplanke: vienalaikiai pakeitimai gali sugadinti arba perrašyti duomenis.

Per Docker veikia tikra naršyklės programa, tačiau ji netampa sinchronizavimo serveriu įdiegtoms programėlėms. [v3.8.2 Docker dokumentacijoje](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) nurodyta, kad kompiuterio ir mobiliosios programėlės prie jos prisijungti negali. Docker versijoje taip pat nėra Markdown importo ir PDF, HTML bei Word eksporto. Įprastoje įdiegtoje programoje šios komandos yra, todėl tiesiog nukopijavę bendrą funkcijų sąrašą į Docker diegimo planą susidarytumėte klaidingą vaizdą.

Oficialaus APKG importo neradau. SiYuan gali perkelti Markdown ir savo duomenų formatus, bet Anki kolekciją reikės atkurti apgalvočiau.

Rinkitės SiYuan, kai pagrindinis produktas jums yra žinių bazė, o mokymosi kortelės turi būti jos dalis. Jei ieškote tiesioginio Anki pakaitalo, Mnemosyne ir Anki perkėlimo galimybės aiškesnės.

## 4. Nibomo atveria daugiau kodo, bet tą sistemą teks prižiūrėti

Iš čia lyginamų produktų Nibomo viešina daugiausia sistemos dalių kodo. MIT monorepozitorija apima žiniatinklio programėlę, iOS ir Android programėles, serverio dalį, autentifikavimo paslaugą, sinchronizavimą, administravimo programą, duomenų bazės migracijas ir AWS infrastruktūrą. Čia remiamasi stabilia versija [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Vėlesni numatytosios šakos pakeitimai nelaikomi išleistos versijos funkcijomis.

[Architektūra](/docs/architecture/) pirmiausia pritaikyta veikti be interneto, tačiau kiekvienoje programėlėje tai reiškia šiek tiek skirtingus dalykus. Žiniatinklio programėlė pagrindinius vietinius duomenis laiko IndexedDB. iOS naudoja SQLite, o Android – SQLite pagrindu veikiantį Room. Pakeitimai pirmiausia įrašomi įrenginyje ir patenka į siuntimo eilę, tada sinchronizuojami. Toks sprendimas leidžia dirbti nutrūkus ryšiui, bet nepaverčia naršyklės saugyklos nuolatine ir neatleidžia nuo būtinybės kiekviename įrenginyje patikrinti paleidimą visiškai uždarius programėlę.

Savasis Nibomo ZIP paketas yra turinio perkėlimo formatas, o ne paskyros atsarginė kopija. v1.23.0 [paketo schema](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) apima abiejų kortelės pusių turinį, žymas, kortelės tipą, šaltinio ir paketo metaduomenis; susieta medija supakuojama atskirai. Ji neapima rinkinių struktūros, kartojimų istorijos, FSRS būsenos, darbo srities nustatymų ar paskyrų.

v1.23.0 neturi APKG importo. Dokumentuotame [perkėlimo iš Anki TXT/CSV būde](/blog/migrate-from-anki-txt-export-open-source-flashcards/) kortelės atkuriamos iš eksportuoto teksto ir jas turi patikrinti žmogus. Šablonai, planavimo būsena, rinkinių struktūra ir į paketą įtraukta medija šiuo būdu automatiškai neišsaugomi. Paprastam tekstiniam rinkiniui tai pagrįstas pasirinkimas, tačiau smarkiai pritaikytai kolekcijai – prastas.

[Savarankiško diegimo vadovas](/docs/self-hosting/) toks pat konkretus. Produkcinėje aplinkoje naudojama AWS CDK infrastruktūra su RDS, Cognito, API Gateway ir Lambda, S3 ir CloudFront, slaptaisiais duomenimis, įspėjimais bei atsarginėmis kopijomis. Cloudflare DNS, Resend el. paštas ir Sentry konfigūracija lieka už AWS ribų. Docker Compose skirtas vietiniam kūrimui, o ne palaikomam produkciniam diegimui. Norintys privačių iOS ar Android programėlių versijų jas kompiliuoja ir platina atskirai.

Rinkitės Nibomo, kai viso žiniatinklio, įrenginių programėlių ir serverio kodo valdymas pateisina tokį administravimo darbą. Rinkitės Anki arba Mnemosyne, kai sunkiausias reikalavimas yra išsaugoti turimą kolekciją.

## 5. Recall atrodo šiuolaikiškai, bet importą nagrinėkite atidžiai

Recall – jauniausias projektas pagrindinių rekomendacijų sąraše. Jis pateko čia, nes [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) pateikia versijuotas kompiuterių programas, įdiegiamą PWA, aiškiai aprašytą vietinį saugojimą, FSRS, duomenų eksportą ir dokumentuotą savarankiškai diegiamo sinchronizavimo sprendimą.

MIT licencijuota kompiuterio programa naudoja SQLite, o PWA – IndexedDB. Nė vienai iš jų nereikia paskyros; projektas teigia, kad telemetrija pagal numatytuosius nustatymus išjungta. Kompiuterių versijos išleidžiamos Windows, macOS ir Linux.

APKG importas naudingas, bet README vartojama frazė „kartojimų istorija“ žada daugiau, nei daro pažymėtos versijos kodas. [v1.3.0 importo kodas](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) neskaito Anki kartojimų žurnalo. Jis nuskaito dabartinę kortelės būseną, intervalą, kartojimų ir pamiršimų skaičių bei FSRS stabilumą ir sunkumą, jei Anki juos išsaugojo. Senesnėms kortelėms, neturinčioms šių FSRS laukų, Recall juos apytikriai apskaičiuoja pagal SM-2 reikšmes.

Turinio konvertavimas taip pat turi ribų. Importas naudoja pirmus du užrašo laukus kaip priekinę ir galinę kortelės puses, o ne atkuria Anki užrašų tipus ir šablonus. Išsaugomi rinkinių pavadinimai ir žymos. Ištraukiami įprastų formatų paveikslėliai ir perrašomos jų nuorodos, tačiau garsas ir kita medija praleidžiami. Kadangi importas vykdomas Tauri komanda, tiesioginis APKG perkėlimas veikia kompiuterio programoje, o ne naršyklės PWA.

Tai gerokai daugiau nei atkūrimas iš paprasto teksto, bet visos kolekcijos tiksliai neišsaugo. Prieš perkeldami didelę kolekciją patikrinkite teksto praleidimus (cloze), iš to paties užrašo generuojamas korteles, papildomus laukus, HTML/CSS, paveikslėlius, garsą, kartojimo datas ir pasikartojančius užrašus.

Recall turi du sinchronizavimo būdus. Kompiuterio programa gali įrašyti būsenos kopiją į Dropbox, Drive ar kitos failų sinchronizavimo priemonės valdomą aplanką. Pasirenkamas perdavimo serveris naudoja Cloudflare Worker ir R2 saugyklą. Pagal šios versijos [sinchronizavimo aprašą](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md), programėlės prieš siųsdamos užšifruoja būsenos kopijas AES-GCM algoritmu; perdavimo serveris mato šifruotą tekstą, o ne kortelių duomenis ar raktą. Atnaujinimai naudoja optimistinį lygiagrečių pakeitimų valdymą ir vieną kartą pakartoja bandymą kilus konfliktui, bet vis tiek sujungia visas būsenos kopijas, o ne atskirus laukus. Projekto prižiūrėtojų finansuojamo viešo perdavimo serverio nėra: jį įdiegiate patys ir įvedate jo URL.

JSON ir Recall archyvo eksportas leidžia pasiimti duomenis. Prieš laikydami eksportą atsargine kopija, atkurkite jį švariame profilyje.

Rinkitės Recall, jei norite šiuolaikiškos kompiuterio ar PWA programėlės, pirmiausia naudojančios vietinius duomenis, ir galite priimti jauno projekto riziką bei importą, išsaugantį naudingą būsenos kopiją, bet ne visą Anki sistemą.

## 6. Essentialist leidžia lengvai skaityti rinkinį, bet ne visą jo būseną

Essentialist aprėptis čia mažiausia. Kiekvienas rinkinys yra Markdown failas, kurį galite atverti teksto redaktoriumi, saugoti versijų valdymo sistemoje ar kopijuoti įprastomis failų priemonėmis. Programa sąmoningai nesiunčia jokių tinklo užklausų.

Naujausia stabili versija – [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Tarp jos failų yra Android, macOS ir Linux programos; Windows naudotojai kompiliuoja iš pirminio kodo. [Šios versijos README](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) kartojimo planavimo algoritmu nurodo SM-2.

[Numatytosios šakos README](https://github.com/essentialist-app/essentialist/blob/main/README.md) jau nurodo FSRS, o saugyklos kodas keistas ir 2026 m. Tai parodo projekto kryptį, bet nesuteikia pagrindo teigti, kad 2025 m. išleista programa naudoja FSRS.

Markdown taip pat apima mažiau, nei gali pasirodyti. Kortelių tekstas saugomas matomame faile, o pažanga – paslėptoje duomenų bazėje, pavadintoje `.<deck file>.db`. Nukopijavę `sample.md` be `.sample.md.db`, išsaugosite klausimus ir atsakymus, bet prarasite mokymosi būseną.

Integruoto įrenginių sinchronizavimo ar serverio nėra. Failus galite laikyti savo sinchronizuojamame aplanke, tačiau tada konfliktų sprendimas ir atkūrimas tampa jūsų atsakomybe.

Rinkitės Essentialist, kai svarbiausia skaitomas Markdown ir darbas be tinklo. Tai nėra sklandžiai keliuose įrenginiuose veikianti sistema, o vienas matomas failas nėra visa atsarginė kopija.

## Keturi aktyvūs projektai, kuriuos verta stebėti

Šiuose projektuose 2026 m. iš tiesų dirbama. Jie nepateko į pagrindinį šešetą, nes rekomendacijai reikia daugiau nei įdomaus kodo.

| Projektas | Kas jau aišku | Kas dar trukdo rekomenduoti pagrindiniame sąraše |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL kodas, FSRS/SM-2/Leitner algoritmai, diegimas per Docker, teikėjo prižiūrima paslauga, CSV importas ir duomenų eksportas | Sukurtas 2026 m. liepą; nėra versijuotos programos laidos. GitHub laida yra garso paketas, o ne programos versija |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT žiniatinklio programa su FSRS, CSV importu, paveikslėlių dalių uždengimu ir dokumentuota Supabase/Vercel architektūra | Nėra žyma pažymėtos laidos, o oficiali dokumentacija dar išsamiai neapibrėžia veikimo be interneto, eksporto ir savarankiškai įdiegtos sistemos atkūrimo |
| [Prep](https://github.com/Zamua/prep-app) | MIT kodas, FSRS, teikėjo talpinama paslauga ir dokumentuotas diegimas savarankiškai paleidžiamoje celld vykdymo aplinkoje | Nėra žyma pažymėtos laidos; savarankiškas diegimas taip pat reiškia celld ir objektų saugyklos administravimą, o ne atskiros mokymosi kortelių programos paleidimą |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | GPLv3 Kotlin mobilioji programėlė, FSRS/SM-2, Android laida ir APKG importas su šablonais bei medija | Sukurta 2026 m.; iOS reikia kompiliuoti iš kodo, o oficiali dokumentacija neapibrėžia bendro sinchronizavimo tarp telefonų |

Keli pažįstami pavadinimai kriterijų neatitinka dėl paprastesnių priežasčių. Mochi [atvirojo kodo saugykla](https://github.com/mochi-cards/open-source) yra integracijų rinkinys, o ne pagrindinė programa. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) yra atvirojo kodo ir gali būti diegiama savarankiškai, tačiau oficialiame README intervalinis kartojimas vis dar įrašytas į „Features coming soon“ (būsimas funkcijas). [OpenCards](https://github.com/holgerbrandl/opencards) neturėjo naujos laidos nuo [v2.5.1, išleistos 2017 m. sausį](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), o saugyklos kodas nekeistas nuo 2018 m.

Jei prieiga prie kodo nebūtina, [platesniame Anki alternatyvų palyginime](/lt/blog/best-anki-alternatives/) rasite produktų, atitinkančių kitokius poreikius.

## Perkėlimą tikrinkite penkiais atskirais lygmenimis

Teiginys „importuoja Anki“ beveik nieko nesako be kito sakinio. Vienas perkėlimo lygmuo gali pavykti, o kiti keturi – ne.

| Lygmuo | Ką lyginti | Klaidinantis sėkmės ženklas |
| --- | --- | --- |
| Kortelių turinys | Kiekvieną lauką, teksto praleidimo žymeklį, žymą, specialųjį simbolį ir pasikartojantį užrašą | Bendras kortelių skaičius panašus |
| Struktūra | Užrašų tipus, šablonus, iš to paties užrašo generuojamas korteles ir įdėtinius rinkinius | Priekinės ir galinės pusės tekstas kažkur atsirado |
| Medija | Ar paveikslėliai ir garsas nukopijuoti, pasiekiami įrenginyje ir veikia be interneto | Importas atpažino failų pavadinimus |
| Mokymosi būsena | Kartojimų žurnalą, būseną, kartojimo datą, intervalą, pamiršimus ir algoritmo parametrus | Importuotos kortelės yra, bet nepastebimai pradedamos mokytis iš naujo |
| Duomenų išsikėlimas ir atkūrimas | Ar dokumentuotas eksportas arba atsarginė kopija leidžia kitur atkurti tą pačią sistemą | Skaitomas tekstinis eksportas laikomas visa atsargine kopija |

Prieš perkeldami tikrąją kolekciją, sukurkite vieną sąmoningai nepatogų bandomąjį rinkinį. Įtraukite papildomų laukų, teksto praleidimų, tiesioginių ir atvirkštinių šablonų, įdėtinių rinkinių, žymų, paveikslėlių, garso ir pakankamai kartojimų istorijos, kad matytumėte, ar paskirties programa ją išsaugojo.

Pasilikite nepakeistą pradinę atsarginę kopiją. Po importo atskirai palyginkite užrašų, kortelių ir medijos failų skaičių. Patikrinkite kartojimo datas, užuot pasitikėję pranešimu „planavimas importuotas“. Kartokite be interneto kiekviename įrenginyje, kurį ketinate naudoti. Tada dviejuose įrenginiuose sukurkite bandomų prieštaraujančių pakeitimų ir stebėkite, kaip elgiasi sinchronizavimas.

Kelias dienas naudokite abi sistemas. Senos kolekcijos ištrynimas yra paskutinis žingsnis, o ne įrodymas, kad naujoji veikia.

## Savarankiškas diegimas baigtas tik patikrinus atkūrimą

Aptarti produktai „savarankišku diegimu“ vadina labai skirtingus dalykus:

- Anki ir Mnemosyne paleidžia **sinchronizavimo paslaugas**, o mokymosi sąsaja lieka įdiegtose programėlėse.
- SiYuan Docker paleidžia **naršyklės programą**, kurios įdiegtos programėlės negali naudoti kaip sinchronizavimo serverio.
- Recall paleidžia **šifruotų būsenos kopijų perdavimo serverį**, o ne pačią PWA.
- Nibomo diegia **visą žiniatinklio ir serverio infrastruktūrą**, o įrenginiams skirtos programėlės kompiliuojamos atskirai.
- Essentialist **neturi serverio**; valdote vietinius failus.

Kai ši aprėptis aiški, patikrinkite tai, ką administratoriai linkę atidėti:

1. Sukurkite kortelių, pridėkite medijos, atlikite kartojimus ir sinchronizuokite iš dviejų programėlių.
2. Išsaugokite visas dokumentacijoje nurodytas duomenų bazes, objektų saugyklas, vietinius failus, slaptuosius duomenis ir konfigūracijos reikšmes.
3. Atkurkite tuščioje paskyroje, kitame kompiuteryje arba izoliuotoje aplinkoje.
4. Palyginkite kortelių skaičių, mediją, kartojimų istoriją, numatytų kartojimų būseną, prisijungimą ir programėlių sinchronizavimą.
5. Atnaujinkite atkurtą kopiją ir atlikite dar vieną kartojimo ciklą.

Jei atkūrimas vis dar priklauso nuo senojo kompiuterio, turite veikiančią paslaugą, bet ne patikrintą atsarginę kopiją.

## Dažniausi klausimai

### Kokia geriausia atvirojo kodo mokymosi kortelių programėlė 2026 m.?

Daugumai besimokančiųjų geriausias įprastas pasirinkimas yra Anki. Ji sujungia brandų kolekcijos modelį, FSRS, daug palaikomų platformų ir išsamiausius pačios programos atsarginių kopijų bei eksporto formatus. Išlyga ta, kad oficialios iOS ir žiniatinklio versijos neįeina į atvirojo kodo kompiuterio saugyklą, o savarankiškai paleidžiamas serveris suteikia sinchronizavimą, bet ne mokymąsi naršyklėje.

### Kokia geriausia atvirojo kodo Anki alternatyva?

Mnemosyne yra labiausiai nusistovėjusi į mokymąsi orientuota alternatyva; jos dokumentacijoje oficialiai aprašytas pasirinktinių Anki kortelių tipų ir mokymosi duomenų importas. Recall atrodo šiuolaikiškiau ir kompiuteryje tiesiogiai importuoja APKG failus, tačiau konvertuoja pirmus du užrašo laukus, išsaugo tik dabartinę planavimo būseną, importuoja paveikslėlius, bet ne garsą, ir neperkelia viso kartojimų žurnalo.

### Ar galiu paleisti Anki savo serveryje?

Taip, galite paleisti oficialų Anki sinchronizavimo serverį suderinamoms programėlėms. Tačiau tai nėra savarankiškai diegiamas AnkiWeb pakaitalas: mokymosi naršyklėje sąsajos nėra.

### Ar atvirasis kodas reiškia veikimą be interneto?

Ne. Atvirasis kodas nusako licencijavimą ir prieigą prie kodo. Veikimas be interneto priklauso nuo to, kur programėlė saugo duomenis ir kuriems veiksmams reikia paslaugos. Galioja ir atvirkščias teiginys: programa gali laikyti duomenis įrenginyje nepaskelbusi savo pagrindinio kodo.

### Ar savarankiškas diegimas garantuoja duomenų perkeliamumą?

Ne. Savarankiškai diegdami valdote, kur veikia paslauga. Perkeliamumas priklauso nuo eksporto, išsamių atsarginių kopijų ir iš tikrųjų išbandyto atkūrimo. Net jūsų serveryje esančią duomenų bazę gali būti sunku perkelti, o skaitomas Markdown rinkinys vis tiek gali neapimti greta saugomos kartojimo būsenos.

## Mano rekomendacija

Likite su **Anki** arba rinkitės ją, nebent viena iš jos ribų kelia tikrą problemą. **Mnemosyne** rinkitės, jei norite susitelkti į mokymąsi kompiuteryje iš vietinių duomenų ir naudotis nusistovėjusiu Anki importu. **SiYuan** naudokite, kai mokymosi kortelės turi būti didesnės žinių bazės dalis. **Nibomo** svarstykite, kai viso žiniatinklio, įrenginių programėlių ir serverio kodo valdymas pateisina AWS produkcinę infrastruktūrą. **Recall** rinkitės, jei norite šiuolaikiškos programėlės, pirmiausia saugančios duomenis įrenginyje, ir jau patikrinote jos konvertavimo ribas. **Essentialist** rinkitės, kai paprastas Markdown ir visiškas tinklo nenaudojimas svarbesni už sinchronizavimą.

Geriausia atvirojo kodo mokymosi kortelių programėlė nebūtinai turi ilgiausią funkcijų sąrašą. Geriausia yra ta, kurios kodo, vietinių duomenų, perkėlimo, sinchronizavimo, prieglobos ir atkūrimo galimybės atitinka sistemą, kurią iš tikrųjų esate pasirengę valdyti.
