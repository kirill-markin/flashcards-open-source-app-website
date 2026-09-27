---
title: "Parimad avatud lähtekoodiga õpikaardirakendused 2026. aastal: 6 FOSS-rakenduse võrdlus"
description: "Võrdle kuut aktiivselt hooldatavat avatud lähtekoodiga õpikaardirakendust lähtekoodi ulatuse, kohalike andmete, sünkroonimise, Anki impordi, ekspordi, ise majutamise ja taastamise järgi."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "parimad avatud lähtekoodiga õpikaardirakendused"
  - "avatud lähtekoodiga õpikaardirakendus"
  - "avatud lähtekoodiga hajutatud kordamine"
  - "ise majutatavad õpikaardid"
  - "võrguühenduseta õpikaardirakendus"
  - "avatud lähtekoodiga Anki alternatiiv"
  - "FOSS õpikaardid"
---

Anki on ka 2026. aastal enamiku inimeste jaoks parim avatud lähtekoodiga õpikaardirakendus. Huvitavaks läheb valik siis, kui avatud lähtekood pole su ainus vältimatu nõue.

Võib-olla vajad brauserirakendust oma serveris. Või kaardipakki, mida saad lugeda tavalise Markdownina. Või privaatset märkmesüsteemi, mis loob õpikaarte. Need nõuded viivad eri toodeteni ning avalik GitHubi repositoorium üksi otsust ei tee.

Avatud lähtekoodiga töölauakliendi kõrval võib olla kinnine iPhone'i rakendus. Dockeri konteiner võib pakkuda brauseriliidest, kuid mitte sünkroonida seadmesse paigaldatud klientidega. Import võib taastada sõnad, kuid kaotada mallid, meedia ja aastatepikkuse kordamisajaloo, mis tegid kogu kasulikuks.

Selle ülevaate tingimustele vastas kuus projekti. Võrdlesin nende litsentsitud lähtekoodi, uusimat stabiilset väljalaset, kohalikke andmeid, ajastusalgoritmi, sünkroonimist, Ankist üleviimist, eksporti ja seda, mida täpselt saab ise majutada. Viimane piirang loeb rohkem, kui enamik funktsiooniloendeid välja näitab.

> **Autori seotus:** olen Kirill Markin ja arendan [Nibomot](https://nibomo.com/), üht allpool käsitletud kuuest rakendusest. Selle MIT-litsentsiga repositoorium hõlmab veebirakendust, seadmesse paigaldatavaid kliente, serveripoolset süsteemi, sünkroonimist ja taristut. Ma ei ole seda esikohale pannud. Anki on kindlam üldvalik, Mnemosyne pakub kauem kasutusel olnud Anki üleviimise võimalust ning mitut siinset rakendust on märksa lihtsam käitada.

**Faktid kontrollitud:** 5. septembril 2026. Stabiilseid väljalaskeid käsitlen eraldi tööst, mis leidub ainult vaikeharus.

![Matkaja võrdleb kuut avatud seljakotti ja katsetab varukomplekti enne avatud lähtekoodiga õpikaardirakenduse valimist](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Lühivastus

| Su peamine nõue | Sobivaim valik | Miks | Piirang, mida esmalt katsetada |
| --- | --- | --- | --- |
| Töökindel üldotstarbeline süsteem või keerukas olemasolev kogu | [Anki](https://apps.ankiweb.net/) | Küps kaardi- ja mallisüsteem, FSRS, lisad, lai kliendivalik ning põhjalikud ekspordipaketid | Ametlik iOS-i rakendus ja AnkiWeb ei kuulu avatud lähtekoodiga töölauarakenduse koodi hulka; ise majutamine annab sünkroonimise, mitte AnkiWebi |
| Kindla fookusega töölaua-alternatiiv, mille Anki import on ammu kasutusel | [Mnemosyne](https://mnemosyne-proj.org/) | Kohalik õppimine, Anki kaarditüüpide ja õppimisandmete import ning ise käitatav sünkroonimisserver | Versioon 2.11 on endiselt uusim stabiilne väljalase; Androidis saab korrata, kuid mitte muuta |
| Märkmed ja õpikaardid ühes kohalikus teadmistebaasis | [SiYuan](https://b3log.org/siyuan/en/) | Võrguühenduseta töötavad paigaldatavad rakendused, sisseehitatud FSRS ja päris brauserirakendus Dockeris | Dockeri klient ei sünkrooni paigaldatud rakendustega ning mitu impordi- ja ekspordikäsku pole Dockeris saadaval |
| Veebi, mobiilirakenduste, serveripoolse süsteemi ja taristu lähtekood | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Üks MIT-litsentsiga monorepositoorium ja dokumenteeritud tootmiskeskkonna paigaldus | Toetatud tootmiskeskkond põhineb AWS-il ning Ankist üleviimisel läheb osa andmeid kaotsi |
| Noorem, eeskätt kohalikel andmetel põhinev töölauarakendus otsese APKG-impordiga | [Recall](https://github.com/Madlezz/Recall) | FSRS, töölauaversioonid, PWA, kohalikud andmebaasid ja valikuline krüptitud vahendusteenus | Import säilitab vaid ajastuse hetkeseisu, kasutab märkme kaht esimest välja ja jätab heli vahele |
| Inimloetavad Markdowni kaardipakid ilma võrgusõltuvuseta | [Essentialist](https://github.com/essentialist-app/essentialist) | Lihtsad pakifailid ja teadlikult võrguühenduseta töölaua- ning Androidi rakendus | Sünkroonimist pole ja edenemine asub eraldi peidetud andmebaasis |

See pole funktsioonide punktitabel. Alusta sellest, millise ebaõnnestumisega sa leppida ei saa. Kui sul on kümne aasta jagu Anki kordamisi, loeb üleviimise täpsus rohkem kui puhtam liides. Kui haldad kooli süsteemi, võivad brauseris kasutamine ja kontrollitud taastamine olla lisadest tähtsamad.

## Mida pidasin avatud lähtekoodiga õpikaardirakenduseks

Kasutasin nelja tingimust:

1. **Põhilise õppefunktsionaalsuse lähtekood on avalik ja selgelt avatud lähtekoodi litsentsiga.** Avaldamata tuuma ümber loodud integratsioonide kataloog ei lähe arvesse.
2. **Hajutatud kordamine töötab juba praegu.** Arendusplaani märkusest või üldisest viktoriinirežiimist ei piisa.
3. **Olemas on avaldatud rakendusversioon või selgelt dokumenteeritud ametlik paigaldusviis.** Hiljutised koodimuudatused üksi ei tee prototüübist kindlat soovitust.
4. **Ametlikud allikad kirjeldavad andmete käsitlemist piisavalt, et seda kontrollida.** Vajasin konkreetseid vastuseid võrguühenduseta salvestamise, sünkroonimise, impordi ja ekspordi või majutamise kohta, mitte ebamäärast lubadust, et kasutajad „omavad oma andmeid”.

GitHubi tähtede arv polnud valikukriteerium. Tähed peegeldavad projekti vanust ja tuntust sama palju kui toote sobivust. Küpsus siiski loeb. Ankil, Mnemosynel ja SiYuanil on väljakujunenud väljalasked ja käitamisviisid. Recall ja Essentialist said kitsama kasutusotstarbega koha, sest nende avaldatud versioonide käitumine on konkreetse soovituse jaoks piisavalt hästi dokumenteeritud.

Ka väidet „aktiivselt hooldatav” tuleb kontrollida kahest küljest. Versioonisildiga väljalase näitab, mida kasutaja saab paigaldada; vaikeharu näitab, kuhu projekt liigub. Essentialist on kõige selgem näide. Selle stabiilse väljalaske dokumentatsioon kirjeldab SM-2, praeguse haru oma aga FSRS-i. Allolevas tabelis on kirjas SM-2.

## Kuue FOSS-õpikaardirakenduse võrdlus

| Rakendus | Kontrollitud stabiilne versioon | Platvormid | Andmed võrguühenduseta | Ajastusalgoritm | Sünkroonimine | Ankist üleviimine ja andmete väljaviimine | Mida saab ise majutada |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. august 2026 | Windows, macOS, Linux; eraldi Androidi ja iOS-i kliendid; AnkiWeb | Paigaldatud kliendid kasutavad õppimiseks kohalikke kogusid | FSRS või varasem SM-2 | AnkiWeb või ametlik ise majutatav sünkroonimisserver | Impordib teksti, APKG-/COLPKG-faile ja Mnemosyne andmebaase; ekspordib teksti või pakette, kuhu saab valikuliselt lisada meedia ja ajastusandmed | **Ainult sünkroonimisserver.** Ise majutatavat AnkiWebi ega brauseris õppimise liidest pole |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. november 2023; repositooriumi arendus jätkus 2026. aastal | Windows, macOS, Linux, Android; piiratud kordamine brauseris | Töölauaversioon on kohalik; Androidis saab korrata võrguühenduseta, kuid mitte muuta | Kohanduv ajastus, mis lähtub meenutamise hindest skaalal 0–5 | Sisseehitatud sünkroonimine töölauarakenduse või graafilise liideseta serveriga | Ametlikult dokumenteeritud täielik Anki import koos kohandatud kaarditüüpide ja õppimisandmetega; jagamiseks mõeldud eksport pole täielik varukoopia | **Sünkroonimine ja piiratud kordamine brauseris.** Brauseriserveril pole turvafunktsioone |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. august 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; brauser Dockeriga | Paigaldatud kliendid hoiavad tööruumi kohalikult | FSRS | Tasuline ametlik otspunktkrüptitud sünkroonimine või tasuline välise S3/WebDAV-salvestusruumi integratsioon | Üldine rakendus impordib Markdowni ja andmeid ning ekspordib mitut dokumendi- ja andmevormingut; dokumenteeritud APKG-importijat pole | **Terviklik brauserirakendus.** Docker ei sünkrooni paigaldatud klientidega ja osa impordi- ning ekspordikäske puudub |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. september 2026 | Veeb, iOS, Android | Veebis IndexedDB; iOS-is SQLite; Androidis Room SQLite'i peal; kohalikud muudatused lähevad sünkroonimisjärjekorda | FSRS | Teenusepakkuja majutatud või haldaja paigaldatud serveripoolne süsteem | Oma ZIP-vorming viib üle kaardid, sildid, allika metaandmed ja viidatud meedia, kuid mitte kaardipakke, õppimisseisu, seadeid ega kontosid; APKG-importijat pole | **Kogu veebi- ja serveripoolne süsteem.** Tootmiskeskkond põhineb AWS-il; privaatsed mobiilirakendused tuleb eraldi ehitada |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. juuli 2026 | Windows, macOS, Linux; paigaldatav PWA | Töölaual SQLite; brauseris IndexedDB; vaikimisi ilma konto ja telemeetriata | FSRS | Töölaua kaustasünkroonimine või valikuline krüptitud Cloudflare Workeri/R2 vahendusteenus | Töölaua APKG-import loeb kaht esimest välja, pakke, silte, ligikaudset ajastuse hetkeseisu ja pilte; JSON-eksport ja Recalli arhiivid | **Ainult krüptitud hetkeseisude vahendusteenus.** See ei majuta PWA-d |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. oktoober 2025; lähtekoodi arendus jätkus 2026. aastal | Androidi APK, macOS-i DMG, Linuxi Flatpak; Windowsi jaoks tuleb lähtekoodist ehitada | Võrgujuurdepääsu pole; kaardipaki sisu on Markdownis | Stabiilne väljalase: SM-2; vaikeharu: FSRS | Puudub | Markdown säilitab kaartide sisu; kõrval asuv peidetud andmebaas säilitab edenemise | **Majutada pole midagi.** Varunda Markdowni fail ja selle kõrvalfail koos |

## 1. Anki on kõige kindlam üldvalik

Anki tugevus on vähem silmatorkavates asjades. See suudab esitada keerukaid märkmetüüpe, luua mallidest ühe märkme eri kaarte, hoida meediat koos koguga ja säilitada aastate jagu ajastusandmeid. Selle ülevaate stabiilne töölauaversioon on [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Uuem 26.09b2 on märgitud beetaks, seega ei võta ma seda siin aluseks.

Lähtekood pole kõigi osade puhul ühtviisi avatud. [Töölauarepositoorium kasutab litsentsi AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), kaasatud komponentidele kehtivad loetletud erandid. [AnkiDroid](https://github.com/ankidroid/Anki-Android) on eraldi avatud lähtekoodiga Androidi projekt. AnkiMobile ja AnkiWeb on ametlikud tooted, kuid nende lähtekood nendesse repositooriumidesse ei kuulu. Pikem selgitus on artiklis [„Kas Anki on avatud lähtekoodiga?”](/blog/is-anki-open-source/).

Paigaldatud kliendid hoiavad kogusid kohalikult, nii et tavapärane kordamine töötab ühenduseta. AnkiWeb on veebivariant. Kui otsustavaks saab võrguühenduseta käitumine, eristab [„Kas Anki töötab võrguühenduseta?”](/blog/does-anki-work-offline/) kohaliku töö sellest, mis peab sünkroonimist ootama.

Anki toetab [FSRS-i ja oma vanemat ajastusalgoritmi](https://docs.ankiweb.net/deck-options.html). Selle ekspordivormingud annavad siinse valiku hulgas üleviimiseks tugevaima lähtekoha. [COLPKG sisaldab kogu kollektsiooni koos ajastusandmetega](https://docs.ankiweb.net/exporting.html), APKG-ekspordile saab aga vastavate valikutega lisada ajastusandmed ja meedia. Anki impordib ka teksti, Anki pakette ja Mnemosyne 2.0 andmebaase.

Nii põhjalik lähtepakett ei taga mujal täiuslikku importi. Sihtrakendus peab ikkagi mõistma selles olevaid malle, kaartide loomise reegleid, meediaviiteid ja ajastusvälju. Tal on lihtsalt rohkem teavet, millega töötada, kui CSV-faili puhul.

[Ametlik ise majutatav server](https://docs.ankiweb.net/sync-server.html) on teadlikult väikese ulatusega. See sünkroonib ühilduvaid Anki kliente; AnkiWebi, brauseris kordamist ega kontoportaali see ei paku. Vaikimisi kuulab see krüptimata HTTP-ühendusi ning juhend soovitab hoida seda kohalikus võrgus või panna selle ette VPN-i või HTTPS-pöördproksi. Ka kliendi ja serveri versioonid peavad jääma ühilduvaks.

Vali Anki, kui esikohal on kogu täpne säilimine, mallid, lisad või lai klienditugi. Vaata mujale siis, kui mõni kindel nõue, näiteks ise majutatav brauseriliides või täielikult avalik mobiilirakenduste lähtekood, kaalub need üles.

## 2. Mnemosyne keskendub kohalikule õppimisele

Mnemosyne mõjub töölaual õppimise tööriistana, sest seda see ongi. See ei too kaasa teadmistebaasi ega pilveplatvormi. Saad kohaliku andmebaasi, tavapärase hajutatud kordamise töövoo, Androidi abirakenduse kordamiseks ja sünkroonimisserveri, mis võib töötada töölaual või graafilise liideseta masinas.

Uusim stabiilne väljalase on endiselt [2.11 novembrist 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Repositooriumi muudeti ka 2026. aastal, kuid see ei tee neist muudatustest stabiilset paigalduspaketti. Katseta versiooni 2.11 operatsioonisüsteemides, mida kavatsed lähiaastatel kasutada.

Ka litsentsi ei saa ühe märgiga kokku võtta. [Repositooriumi juurkausta litsentside ülevaade](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) määrab openSM2syncile LGPL v3 ja ülejäänud Mnemosynele eraldi tingimused. [Põhiprogrammi litsents](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) kasutab AGPL v3 koos lisatingimusega: Mnemosyne nimi peab jääma tuletatud töös selgelt nähtavaks ning selle täpne vorm tuleb arendajatega läbi arutada. Loe need tingimused enne muudetud versiooni levitamist läbi.

[Androidi kliendis saab korrata võrguühenduseta, kuid kaarte muuta ei saa](https://mnemosyne-proj.org/help/android-client). Muud seadmed saavad kasutada töölauarakendusest käivitatud brauseris kordamise serverit, ent ametlik funktsioonileht hoiatab, et serveril pole turvafunktsioone. See on käepärane kohtvõrguliides, mitte viimistletud avalik veebirakendus.

Üleviimine on Mnemosyne tugevaim argument Anki juurde jäämise vastu. Ametlik funktsioonileht kirjeldab [täielikku Anki importi, sealhulgas kohandatud kaarditüüpe ja õppimisandmeid](https://mnemosyne-proj.org/features). [Sisseehitatud sünkroonimine](https://mnemosyne-proj.org/help/syncing) ühendab kaardid ja õppimisandmed ning võib kasutada sinu kontrollitavat masinat.

Tavaline ekspordikäsk võib varundamisel eksitada. See on mõeldud valitud kaartide jagamiseks ja jätab õppimisandmed välja. Kogu süsteemi teisaldamiseks või taastamiseks soovitab [mitme arvuti kasutamise juhend](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) kopeerida terve andmekausta.

Mnemosyne on siin tugevaim kindla fookusega avatud lähtekoodiga Anki alternatiiv. Vastukaaluks tuleb leppida harvade stabiilsete väljalasetega, piiratud muutmisvõimalustega mobiilis ja brauseriliidesega, mille võrgujuurdepääs vajab hoolikat piiramist.

## 3. SiYuan sobib siis, kui põhisüsteemiks on märkmed

SiYuan on privaatsusele keskenduv teadmiste haldamise rakendus, mille õpikaardid kasutavad sama plokkide ja dokumentide mudelit kui märkmed. Sellest on kasu, kui kordamismaterjal tekib märkmetest. Kui vajad ainult kordamist ootavate kaartide järjekorda, tuleb kaasa päris palju lisafunktsioone.

[AGPL-3.0 repositoorium](https://github.com/siyuan-note/siyuan) seob kokku kasutajaliidese, tuuma, mobiilirakendused, andmekihi ja FSRS-komponendi. Siin kontrollitud stabiilne väljalase on [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Töölaua- ja mobiilikliendid salvestavad tööruumi kohalikult ning töötavad edasi ka võrguühenduseta.

Sünkroonimine ei kuulu tasuta kohaliku salvestamise paketti. [Ametlik hinnaleht](https://b3log.org/siyuan/en/pricing.html) pakub tellimusega ametlikku otspunktkrüptitud sünkroonimist, tasulised Pro-funktsioonid lisavad aga oma S3 või WebDAV salvestusruumi integratsioonid. Projekt hoiatab ka aktiivse tööruumi paigutamise eest tavalisse failisünkroonimiskausta, sest samaaegsed muudatused võivad andmeid rikkuda või üle kirjutada.

Dockeris töötab päris brauserirakendus, kuid sellest ei saa paigaldatud rakenduste sünkroonimisserverit. [Versiooni v3.8.2 Dockeri dokumentatsioon](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) ütleb, et töölaua- ja mobiilikliendid ei saa sellega ühenduda. Dockeris puuduvad ka Markdowni import ning PDF-, HTML- ja Word-eksport. Need käsud on olemas laiemas, seadmesse paigaldatavas rakenduses, nii et üldise funktsiooniloendi kopeerimine Dockeri paigaldusplaani oleks eksitav.

Ametlikku APKG-importijat ma ei leidnud. SiYuan võimaldab andmeid üle kanda Markdowni ja oma andmevormingute kaudu, kuid Anki kogu vajab läbimõeldumat uuesti ülesehitamist.

Vali SiYuan siis, kui põhiline toode on teadmistebaas ja õpikaardid peaksid selle sees asuma. Kui soovid otsest Anki asendust, on Mnemosyne ja Anki puhul üleviimise võimalused selgemad.

## 4. Nibomo avaldab rohkem süsteemi lähtekoodi ja jätab käitamise sulle

Nibomo avaldab siinse võrdluse toodetest kõige rohkemate osade lähtekoodi. MIT-litsentsiga monorepositoorium sisaldab veebirakendust, iOS-i ja Androidi kliente, serveripoolset süsteemi, autentimisteenust, sünkroonimist, haldusrakendust, andmebaasi migratsioone ja AWS-i taristut. Siin kasutatud stabiilne väljalase on [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Hilisemat tööd vaikeharus ei käsitle ma avaldatud versiooni funktsionaalsusena.

[Arhitektuur](/docs/architecture/) lähtub võrguühenduseta kasutamisest, kuid see tähendab iga kliendi puhul veidi erinevat asja. Veebirakenduse kohalik põhiandmeallikas on IndexedDB. iOS kasutab SQLite'i, Android aga Roomi SQLite'i peal. Muudatused kirjutatakse kohalikult ja pannakse enne sünkroonimist väljaminevate muudatuste järjekorda. See lahendus tuleb toime katkenud ühendusega; brauseri salvestusruumi see püsivaks ei tee ega kaota vajadust katsetada iga seadme puhul täielikult suletud rakenduse uuesti käivitamist.

Nibomo enda ZIP-pakett on sisu ülekandmise vorming, mitte konto varukoopia. Versiooni v1.23.0 [paketiskeem](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) kannab üle esi- ja tagakülje sisu, sildid, kaarditüübi, allika metaandmed ning paketi metaandmed; viidatud meedia lisatakse eraldi. See ei sisalda pakkide struktuuri, kordamisajalugu, FSRS-i seisundit, tööruumi seadeid ega kontosid.

Versioonis v1.23.0 pole APKG-importijat. Dokumenteeritud [Anki TXT-/CSV-üleviimise töövoog](/blog/migrate-from-anki-txt-export-open-source-flashcards/) ehitab kaardid eksporditud tekstist uuesti üles ja nõuab inimese kontrolli. Mallid, ajastuse seisund, pakkide struktuur ja kaasas olev meedia ei säili sellel teel automaatselt. Lihtsa tekstipaki jaoks on see mõistlik, tugevalt kohandatud kogu jaoks kehv valik.

[Ise majutamise juhend](/docs/self-hosting/) on sama konkreetne. Tootmiskeskkond kasutab AWS CDK süsteemi, kuhu kuuluvad RDS, Cognito, API Gateway ja Lambda, S3 ja CloudFront, salajased konfiguratsiooniandmed, häired ning varukoopiad. Cloudflare DNS, Resendi e-post ja Sentry seadistus asuvad AWS-ist väljaspool. Docker Compose on kohalikuks arenduseks; see pole toetatud tootmiskeskkonna pakett. Haldajad, kes soovivad privaatseid iOS-i või Androidi rakendusi, peavad need eraldi ehitama ja levitama.

Vali Nibomo siis, kui kogu veebi-, mobiili- ja serveripoolse lähtekoodi omamine õigustab seda käitamistööd. Vali Anki või Mnemosyne siis, kui olemasoleva kogu säilitamine on rangem nõue.

## 5. Recall on moodne, kuid importija tasub hoolega üle vaadata

Recall on põhisoovitustest noorim. See jõudis nimekirja, sest [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) pakub versioonitud töölauarakendusi, paigaldatavat PWA-d, selgelt kirjeldatud kohalikku salvestamist, FSRS-i, andmete eksporti ja dokumenteeritud ise majutatavat sünkroonimislahendust.

MIT-litsentsiga töölauarakendus kasutab SQLite'i, PWA aga IndexedDB-d. Kumbki ei vaja kontot ning projekti sõnul on telemeetria vaikimisi välja lülitatud. Töölauaversioonid on olemas Windowsile, macOS-ile ja Linuxile.

APKG-importija on kasulik, kuid README väljend „review history” ehk kordamisajalugu lubab versioonisildiga teostuse kohta liiga palju. [Versiooni v1.3.0 importija lähtekood](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) ei loe Anki kordamislogi. See loeb kaardi praegust seisundit, intervalli, kordamiste ja unustamiste arvu ning FSRS-i stabiilsuse ja raskusastme väärtusi, kui Anki on need salvestanud. Vanemate kaartide puhul, millel FSRS-i väljad puuduvad, hindab Recall neid SM-2 väärtuste põhjal.

Ka sisu teisendamisel on olulisi piiranguid. Importija kasutab esi- ja tagaküljena märkme kaht esimest välja, selle asemel et luua Anki märkmetüübid ja mallid uuesti. Pakkide nimed ja sildid säilivad. Importija pakib lahti levinud vormingus pildid ja kirjutab nende viited ümber, kuid jätab heli ja muu meedia vahele. Kuna importija on Tauri käsk, töötab otsene APKG-üleviimine töölaual, mitte brauseri PWA-s.

See on märksa parem kui lihttekstist uuesti ülesehitamine, kuid kogu ei säili täpselt algsel kujul. Enne suure kogu üleviimist katseta lünktekste, ühest märkmest loodud eri kaarte, lisavälju, HTML-i/CSS-i, pilte, heli, kordamistähtaegu ja korduvaid märkmeid.

Recallil on kaks sünkroonimisviisi. Töölauaversioon saab kirjutada hetkeseisu kausta, mida haldab Dropbox, Drive või mõni muu failisünkroonimistööriist. Valikuline vahendusteenus kasutab Cloudflare Workerit ja R2 salvestuskonteinerit. Versioonisildiga [sünkroonimiskirjelduse](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) järgi krüptivad kliendid hetkeseisud enne üleslaadimist AES-GCM-iga; vahendusteenus näeb krüptitud teksti, mitte kaartide andmeid ega võtit. Uuendused kasutavad optimistlikku samaaegsuskontrolli ja proovivad ühe konflikti korral uuesti, kuid ühendavad siiski terveid hetkeseise, mitte üksikuid välju. Arendajate rahastatud avalikku vahendusteenust pole: paigaldad selle ise ja sisestad selle URL-i.

JSON-eksport ja Recalli arhiivid annavad võimaluse andmed välja viia. Taasta üks neist tühja profiili, enne kui nimetad seda varukoopiaks.

Vali Recall siis, kui soovid moodsat, eeskätt kohalikel andmetel põhinevat töölaua- või PWA-kogemust ning lepid noore projektiga ja importijaga, mis säilitab kasuliku hetkeseisu, mitte tervet Anki süsteemi.

## 6. Essentialist teeb paki loetavaks, kuid kogu seisund ei asu selles

Essentialist on siinse valiku kõige kitsama fookusega rakendus. Iga kaardipakk on Markdowni fail, mille saad avada tekstiredaktoris, hoida versioonihalduses või kopeerida tavaliste failitööriistadega. Rakendus ei tee teadlikult ühtegi võrgupäringut.

Uusim stabiilne väljalase on [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Kaasas on Androidi, macOS-i ja Linuxi paigaldusfailid; Windowsi kasutajad ehitavad rakenduse lähtekoodist. [Selle versiooni README](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) nimetab ajastusalgoritmiks SM-2.

[Vaikeharu README](https://github.com/essentialist-app/essentialist/blob/main/README.md) nimetab nüüd FSRS-i ning repositooriumi lähtekoodi muudeti ka 2026. aastal. See näitab kasulikku arengusuunda, kuid ei anna põhjust nimetada 2025. aasta valmisehitatud rakendust FSRS-i kasutavaks.

Markdown sisaldab ka vähem, kui esialgu paistab. Kaarditekst asub nähtavas failis, edenemine aga peidetud andmebaasis nimega `.<deck file>.db`. Kui kopeerid `sample.md` ilma failita `.sample.md.db`, säilivad küsimused ja vastused, kuid õppimisseis läheb kaduma.

Sisseehitatud seadmete sünkroonimist ega serverit pole. Võid panna failid oma sünkroonitud kausta, kuid siis jäävad konfliktide lahendamine ja taastamine sinu mureks.

Vali Essentialist siis, kui eesmärk on loetav Markdown ja võrguta töövoog. See pole sujuv mitme seadme süsteem ning üks nähtav fail pole täielik varukoopia.

## Neli aktiivset projekti, millel silma peal hoida

Nende projektide taga on päris arendustöö ka 2026. aastal. Põhikuusikust jäävad need välja, sest soovituseks on vaja enamat kui huvitavat lähtekoodi.

| Projekt | Mis on juba olemas | Miks see veel põhinimekirja ei kuulu |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL-lähtekood, FSRS-i/SM-2/Leitneri ajastusalgoritmid, Dockeri paigaldus, hallatud teenus, CSV-import ja andmete eksport | Loodud juulis 2026; versioonitud rakenduse väljalaset pole. GitHubi väljalase on helipakett, mitte rakenduse versioon |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT-litsentsiga veebirakendus, millel on FSRS, CSV-import, pildiosade peitmine ning dokumenteeritud Supabase'i/Verceli arhitektuur | Versioonisildiga väljalaset pole ning ametlik dokumentatsioon ei kirjelda veel täielikult võrguühenduseta kasutamist, eksporti ega ise majutatud süsteemi taastamist |
| [Prep](https://github.com/Zamua/prep-app) | MIT-lähtekood, FSRS, majutatud kasutus ja dokumenteeritud paigaldus ise majutatavale celld käituskeskkonnale | Versioonisildiga väljalaset pole; ise majutamine tähendab ka celld ja objektisalvestuse käitamist, mitte eraldiseisva õpikaardirakenduse paigaldamist |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | GPLv3-litsentsiga Kotlini mobiilirakendus, FSRS/SM-2, Androidi väljalase ning APKG-import koos mallide ja meediaga | Loodud 2026. aastal; iOS nõuab lähtekoodist ehitamist ning ametlik dokumentatsioon ei kirjelda üldist telefonidevahelist sünkroonimist |

Mitmed tuttavad nimed jäävad välja lihtsamatel põhjustel. Mochi [avatud lähtekoodiga repositoorium](https://github.com/mochi-cards/open-source) on integratsioonide kogu, mitte põhirakendus. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) on avatud lähtekoodiga ja ise majutatav, kuid selle ametlik README paigutab hajutatud kordamise endiselt jaotisse „Features coming soon” ehk tulevaste funktsioonide hulka. [OpenCardsil](https://github.com/holgerbrandl/opencards) pole olnud väljalaset pärast [versiooni v2.5.1 jaanuaris 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) ning selle repositooriumi koodi pole muudetud alates 2018. aastast.

Kui ligipääs lähtekoodile pole kohustuslik, sisaldab [laiem Anki alternatiivide võrdlus](/et/blog/best-anki-alternatives/) tooteid, mis vastavad teistsugusele küsimusele.

## Katseta üleviimist viies eraldi kihis

„Impordib Ankit” on ilma järgneva selgituseta peaaegu kasutu väide. Üleviimine võib ühes kihis õnnestuda ja neljas teises ebaõnnestuda.

| Kiht | Mida võrrelda | Eksitav õnnestumise märk |
| --- | --- | --- |
| Kaartide sisu | Iga väli, lünkteksti märgend, silt, erimärk ja korduv märge | Kaartide koguarv on ligikaudu sama |
| Struktuur | Märkmetüübid, mallid, ühest märkmest loodud eri kaardid ja pesastatud pakid | Esi- ja tagakülje tekst ilmus kuhugi |
| Meedia | Pildid ja heli kopeeriti, viited osutavad kohalikele failidele ning meedia töötab võrguühenduseta | Importija tundis failinimed ära |
| Õppimisseis | Kordamislogi, seisund, tähtaeg, intervall, unustamised ja ajastusalgoritmi parameetrid | Imporditud kaardid on olemas, kuid lähevad ilma hoiatuseta uuesti õppimisse nagu uued kaardid |
| Andmete väljaviimine ja taastamine | Dokumenteeritud eksport või varukoopia suudab sama süsteemi mujal taastada | Loetavat tekstieksporti peetakse täielikuks varukoopiaks |

Enne päris kogu teisaldamist loo üks meelega keerukas katsepakk. Lisa lisavälju, lünktekste, edasi- ja tagasisuunalisi malle, pesastatud pakke, silte, pilte, heli ning piisavalt kordamisajalugu, et oleks näha, kas sihtrakendus selle säilitas.

Hoia algne varukoopia puutumata. Pärast importi võrdle eraldi märkmete, kaartide ja meedia hulka. Kontrolli kordamistähtaegu selle asemel, et usaldada teadet „ajastus imporditud”. Korda võrguühenduseta igas seadmes, mida kavatsed kasutada. Seejärel tee kahes seadmes katseks vastuolulisi muudatusi ja jälgi, mida sünkroonimine teeb.

Kasuta mõlemat süsteemi mõne päeva jooksul. Vana kogu kustutamine on viimane samm, mitte tõend uue süsteemi toimimisest.

## Ise majutamine on valmis alles pärast taastamise katsetamist

Eespool kirjeldatud tooted mõtlevad „ise majutamise” all väga erinevaid asju:

- Anki ja Mnemosyne käitavad **sünkroonimisteenuseid**, õppimisliideseks jäävad paigaldatud kliendid.
- SiYuan Docker käitab **brauserirakendust**, mida paigaldatud kliendid ei saa kasutada oma sünkroonimisserverina.
- Recall käitab **krüptitud hetkeseisude vahendusteenust**, mitte PWA-d ennast.
- Nibomo paigaldab **terve veebi- ja serveripoolse süsteemi**, mobiilirakendused tuleb endiselt eraldi ehitada.
- Essentialistil **pole serverit**; sinu hallatav osa on kohalikud failid.

Kui majutatava osa ulatus on selge, katseta seda, mida haldajad kipuvad edasi lükkama:

1. Loo kaardid, lisa meedia, tee kordamisi ja sünkrooni kahest kliendist.
2. Salvesta kõik dokumentatsioonis nimetatud andmebaasid, objektisalvestuse konteinerid, kohalikud failid, salajased konfiguratsiooniandmed ja seadistusväärtused.
3. Taasta süsteem tühjale kontole, masinale või eraldatud keskkonda.
4. Võrdle kaartide arvu, meediat, kordamisajalugu, kordamistähtaegade seisundit, sisselogimist ja klientide sünkroonimist.
5. Uuenda taastatud koopiat ja läbi veel üks kordamistsükkel.

Kui uuesti ülesehitamine sõltub endiselt vanast masinast, on sul töötav teenus. Kontrollitud varukoopiat sul veel pole.

## Korduma kippuvad küsimused

### Milline on 2026. aasta parim avatud lähtekoodiga õpikaardirakendus?

Anki on enamiku õppijate jaoks parim üldvalik. See ühendab küpse kogumudeli, FSRS-i, laia kliendivaliku ning kõige põhjalikumad rakenduse enda varundus- ja ekspordivormingud. Mööndus on see, et ametliku iOS-i rakenduse ja veebiteenuse lähtekood ei kuulu avatud töölauarepositooriumi ning ise majutatav server pakub sünkroonimist, mitte brauseris õppimist.

### Milline on parim avatud lähtekoodiga Anki alternatiiv?

Mnemosyne on kõige pikemalt kasutusel olnud kindla fookusega alternatiiv ning dokumenteerib ametlikult Anki kohandatud kaarditüüpide ja õppimisandmete impordi. Recall näeb moodsam välja ja impordib APKG-faile otse töölaual, kuid teisendab märkme kaht esimest välja, säilitab ainult ajastuse hetkeseisu, impordib pilte, mitte heli, ega kanna üle täielikku kordamislogi.

### Kas saan Ankit ise majutada?

Jah, saad käitada Anki ametlikku sünkroonimisserverit ühilduvate klientide jaoks. See ei ole aga ise majutatav AnkiWebi asendus: brauseris õppimise liidest pole.

### Kas avatud lähtekood tähendab võrguühenduseta kasutust?

Ei. Avatud lähtekood kirjeldab litsentsi ja ligipääsu koodile. Võrguühenduseta käitumine sõltub sellest, kus klient andmeid salvestab ja millised tegevused vajavad teenust. Kehtib ka vastupidine: rakendus võib hoida andmeid kohalikult oma põhilist lähtekoodi avaldamata.

### Kas ise majutamine tagab andmete teisaldatavuse?

Ei. Ise majutamine annab kontrolli selle üle, kus teenus töötab. Teisaldatavus sõltub ekspordist, täielikest varukoopiatest ja taastamisest, mida oled päriselt katsetanud. Ka oma serveri andmebaasi võib olla raske üle viia ning loetavast Markdowni pakist võib puududa selle kõrval salvestatud kordamisseis.

## Minu soovitus

Jää **Anki** juurde või vali see, kui ükski selle piirang ei tekita päris probleemi. Vali **Mnemosyne**, kui soovid õppimisele keskenduvat kohalikku töölauarakendust ja väljakujunenud Anki importi. Kasuta **SiYuani**, kui õpikaardid peaksid olema osa suuremast teadmistebaasist. Kaalu **Nibomot**, kui kogu veebi-, mobiili- ja serveripoolse lähtekoodi omamine õigustab AWS-i tootmiskeskkonda. Vali **Recall**, kui soovid moodsat, eeskätt kohalikel andmetel põhinevat klienti ja oled selle teisenduspiiranguid katsetanud. Vali **Essentialist**, kui lihtne Markdown ja täielik võrguta kasutus on sünkroonimisest tähtsamad.

Parim avatud lähtekoodiga õpikaardirakendus pole kõige pikema funktsiooniloendiga repositoorium. See on rakendus, mille lähtekoodi, kohalike andmete, üleviimise, sünkroonimise, majutamise ja taastamise ulatus sobib süsteemiga, mille eest oled päriselt valmis vastutama.
