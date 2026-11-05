---
title: "Anki duplikaatkaardid – kuidas leida koopiaid ja valida, milline alles jätta"
description: "Selgita välja, miks Anki kaardid korduvad, võrdle kattuvaid märkmeid ja vali, milline koopia alles jätta. Väike harjutus aitab kontrollida, kas kordamisajalugu säilis."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "Anki duplikaatkaardid"
  - "Anki duplikaatide leidmine"
  - "Anki duplikaatmärkmete kustutamine"
  - "Anki duplikaatmärkmed"
  - "Anki kordamisajalugu"
---

Oled seda küsimust juba korranud, aga Anki näitab seda uue kaardina. Võib-olla lisandus importimisel koopia või lõi Anki samast märkmest teise küsimuse. Vahe on oluline, sest sirvimisvaates ühe rea kustutamisel võivad kaduda kõik selle märkme kaardid, kaasa arvatud kaart, mille tahtsid alles jätta.

Enne kui hakkad **Anki duplikaatkaarte** korrastama, tee kindlaks, kust kordus tuleb. Kui kaardid pärinevad eri märkmetest, otsi võimalikke koopiaid käsuga **Notes → Find Duplicates**. Võrdle märkmete sisu ja iga kaardi kordamisajalugu ning vali igas rühmas eraldi, milline koopia alles jätta. Sama väljasisu aitab võimalikud koopiad üles leida. Kustutamisotsus sõltub ülejäänud sisust ja kaartide ajaloost.

Juhend lähtub Anki arvutiversiooni dokumentatsioonist ja avaldatud versiooni lähtekoodist, mida kontrolliti 4. oktoobril 2026. Allolev paberiharjutus kirjeldab väljamõeldud näite oodatavaid tulemusi. Menüükäsud ja otsingunäited lähtuvad ingliskeelsest kasutajaliidesest.

![Maleklubi liige võrdleb heledat varuvankrit kahe kulunud vankriga puidust malelaual](/blog/anki-duplicate-cards.png)

## Tee kõigepealt kindlaks, mis kordub

Märge sisaldab välju, näiteks **Front** (esikülg) ja **Back** (tagakülg). Anki loob väljade sisust mallide abil kaardid. Ühest sõnavaramärkmest võib näiteks saada kaardi võõrkeelse sõna äratundmiseks ja teise kaardi, millel tuleb see sõna ise meelde tuletada. Need on sama märkme seotud kaardid (inglise keeles *siblings*) ja kummalgi on oma kordamiskava. Loe [Anki selgitust märkmete ja väljade kohta](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

Ava **Browse** (sirvimine), vali režiim **Cards** (kaardid) ja ava iga kahtlase rea puhul **Cards → Info**. Võrdle väljal **Note ID** kuvatavaid väärtusi. Kui ID on sama, kuuluvad kaardid samale märkmele. Erinevad ID-d tähendavad eraldi märkmeid. Asenda otsingus `nid:123` arv `123` märkme tegeliku ID-ga, et näha kõiki selle kaarte, olenemata kaardipakist. Vaata [Anki juhendit ID-de järgi otsimise kohta](https://docs.ankiweb.net/searching.html#object-ids).

| Mida leiad | Tõenäoline põhjus | Mida edasi teha |
| --- | --- | --- |
| Sama märge, küsimused vastassuundades | Mõlemad kaardid on loodud sihilikult | Kontrolli, kas mõlemad küsimused on sulle kasulikud |
| Sama märge, kaardid kuvavad sama küsimust | Kaardimall võib olla dubleeritud | Võrdle malle ja kaartide eelvaateid |
| Eri märkmed, küsimused näivad ühesugused | Märkmed võivad olla duplikaadid | Võrdle märkmete kogu sisu, enne kui valid, millise alles jätad |

Kui mõlemad kaardid on loodud sihilikult, selgitab [vastassuunaliste kaartide juhend (inglise keeles)](/blog/anki-reverse-cards/) kahe küsimusesuuna erinevust. Kui tahad ainult ühe kaardi kordamises pausi teha, saad [selle kaardi kordamise peatada (juhend inglise keeles)](/blog/anki-bury-vs-suspend/). Nii jääb kaart kogusse alles.

Kui mallid annavad ühesuguseid kaarte, järgi [Anki juhist üleliigsete koopiate põhjuse leidmiseks](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Malli eemaldamine mõjutab kõiki seda tüüpi märkmeid, ka teistes pakkides. Võta see ette eraldi muudatusena.

## Piira otsingut, kui tead, kust duplikaate otsida

Ava **Notes → Find Duplicates** ja vali võrreldav väli, näiteks **Front**. Vaikimisi otsib Anki kõigi märkmetüüpide seast, kus see väli on olemas. Määra otsingu ulatus väljal **Optional filter** ja vajuta **Search**. Täpsemalt kirjeldab neid valikuid [Anki duplikaatide otsimise juhend](https://docs.ankiweb.net/browsing.html#finding-duplicates).

Kaardipaki `Cleanup practice` jaoks kasuta järgmist otsingut.

```text
deck:"Cleanup practice"
```

Kaardipaki otsing hõlmab ka selle alampakke. Kui koopiaid võib olla eri pakkides, eemalda filter ja otsi tervest kogust. Ühest pakist saadud tühi tulemus jätab lahtiseks, kas koopia on kusagil mujal. [Anki kaardipakiotsingu süntaks](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Rühma märkmete vaatamiseks klõpsa sellel otsingutulemustes. **Tag Duplicates** lisab sildi `duplicate` kõigile kattuvatele märkmetele, ka sellele, mille tahad alles jätta. [Avaldatud versiooni lähtekood](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py) näitab, et sildi saab iga märge rühmas. **Ära kustuta kõiki otsingu `tag:duplicate` tulemusi.** Koonda sildi abil võimalikud koopiad ühte vaatesse ja vali kustutatavad märkmed ükshaaval.

Otsing võrdleb valitud välja sisu. Sama fakti kohta võib olla mitu eri sõnastusega küsimust ja nende leidmiseks tuleb vahel käsitsi otsida. Täpselt sama sõnastusega küsimused võivad omakorda kuuluda eri keelte või kursuste juurde.

## Kolm näidet paberil läbiproovimiseks

Kujuta ette, et pakis `Cleanup practice` on kuus märget ja ühtegi alampakki pole. A ja B kasutavad tüübi **Basic (and reversed card)** muutmata malle, mis annavad kummastki märkmest kaks kaarti. C–F kasutavad tüüpi **Basic**, mis annab igast märkmest ühe kaardi. Kõik kaheksa kaarti on samas pakis. Tähed tähistavad märkmeid ainult selles näites. Anki tegelikud märkme- ja kaardi-ID-d on arvud.

| Märkmed | Esikülg → tagakülg | Õppimisseis näites | Otsus |
| --- | --- | --- | --- |
| A ja B | `le vélo` → `bicycle` | A äratundmiskaarti on korratud 12 korda ja meenutamiskaarti 3 korda. B mõlemad kaardid on uued. | Jäta A alles. Kõigepealt kontrolli, kas saad B kustutada. |
| C ja D | `Chemical symbol for silver?` → `Ag` | C kaarti on korratud 20 korda, D kaarti 6 korda. | Võrdle mõlema kaardi ajalugu ja vali, kumma kordamist jätkata. |
| E ja F | E: `bank` → `financial institution`. F: `bank` → `side of a river`. | Õpid sõna eri tähendusi. | Jäta mõlemad alles ja lisa küsimustele konteksti. |

Välja **Front** järgi otsides võib Anki leida kõik kolm paari. Ainult esimese paari puhul on valik lihtne. Enne kui otsustad, et B on üleliigne, võrdle **kõiki välju**, meediafaile, silte, märkmetüüpi ja mõlema suuna kaardieelvaateid. Võib-olla on B-l häälduse helifail, mis A-l puudub, või annab B ka küsimuse, mida A-l pole.

Kui kasulik sisu aitab õppida sama asja, kopeeri vajalik osa allesjäävasse märkmesse ja vaata tulemust eelvaates. Säilita ka algse märkme kasulikud sildid. Kui tahad kontrollida teise fakti tundmist, koosta uus küsimus. Nii saad selle õppimist eraldi jälgida.

C ja D puhul on kordamiste arv üks vihje. Vaata mõlema kaardi kordamiste kuupäevi, hinnanguid, praegust intervalli ja järgmise kordamise andmeid. Sagedamini korratud kaarti võis lihtsalt olla vaja rohkem kordi uuesti õppida. Kontrolli, kas küsimus ja vastus on sulle kasulikud, ning vali siis, kumma kaardiga jätkata. Kui vastused on vastuolus, lähtu kõigepealt õppematerjalist.

Kui jätad C alles ja kustutad D, **säilitab C üksnes omaenda kordamisajaloo**. C kordamiskava lähtub edasi selle kaardi senisest õppimisseisust. Anki [kaardi infovaade **Card Info**](https://docs.ankiweb.net/stats.html#card-info) näitab iga kaardi ajalugu eraldi. Kustutatud märkmete kaartide kordamised kajastuvad endiselt kogu kohta käivas statistikas, kuid kaovad kaardipaki statistikast. Loe [Anki juhendit kustutatud märkmete statistika kohta](https://docs.ankiweb.net/stats.html#more).

Kui sa pole veel kindel, lükka kustutamine edasi. Pane kirja, mida pead kontrollima. Vajaduse korral peata nende küsimuste kordamine seniks, kuni asi on selge.

## Kustuta üks tuvastatud duplikaat ja kontrolli tulemust

Enne kui päris õppematerjali kustutad, sünkrooni muudatused esmalt teistes seadmetes ja seejärel arvutis. Nii jõuavad värskeimad andmed ka arvutisse. Täpsemalt kirjeldab seda [Anki sünkroonimisjuhend](https://docs.ankiweb.net/syncing.html). Vali **File → Export**, lülita sisse **Include Media** ja salvesta varukoopia vormingus **Anki Collection Package (`.colpkg`)**. Fail sisaldab kõiki kaardipakke koos kordamiskava ja kordamisajalooga. Hoia faili kindlas kohas. Varukoopia importimisel asendab salvestatud kogu avatud profiili praegused kaardid. [Kogu eksportimise juhend](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Kui tahad kustutamist proovida, loo käsuga **File → Switch Profile** eraldi profiil ja impordi varukoopia sinna. Jäta prooviprofiil AnkiWebiga ühendamata. [Igal profiilil on eraldi kogu](https://docs.ankiweb.net/profiles.html). Kui ühendad mõlemad profiilid sama AnkiWebi kontoga, võib üks kogu teise üle kirjutada. Varundamise ja importimise erinevusi selgitab [APKG ja COLPKG võrdlus (inglise keeles)](/blog/anki-apkg-vs-colpkg/).

Harjutuses tähistab A1 märkme A äratundmiskaarti ja A2 selle meenutamiskaarti. B1 ja B2 on märkme B vastavad kaardid. Ava **Cards → Info** ning pane kirja A mõlema kaardi tegelikud **Card ID** väärtused, järgmise kordamise andmed, intervallid ja mõned hõlpsasti äratuntavad kordamiskirjed. Pane kirja ka B **Note ID**. Tee kontroll enne ja pärast kustutamist sama seansi jooksul. Vahepeal ära korda kummagi koopia kaarte ega muuda nende kordamisaegu.

Anki duplikaatmärkmete ükshaaval kustutamiseks tee nii.

1. Otsi vaates **Browse** käsuga `nid:`, kasutades märkme B tegelikku ID-d. Vaata režiimis **Cards** läbi kõik tulemused ja ava mõlema küsimusesuuna eelvaade. Jäta pakifilter otsingust välja, et päris materjali puhul näeksid ka sama märkme teistes pakkides olevaid kaarte.
2. Lülitu režiimi **Notes**. Veendu, et ainus tulemus on üleliigne märge B, vali ainult see ja kasuta käsku **Notes → Delete**. Anki [kustutamiskäsk](https://docs.ankiweb.net/browsing.html#notes) eemaldab valitud märkme koos kõigi selle kaartidega ka siis, kui kasutad käsku režiimis **Cards** ühel real.
3. Korda märkme B ID otsingut ja veendu, et tulemusi pole. Otsi A mõlemat kaarti varem kirja pandud kaardi-ID-de järgi, kasutades `cid:` ja eraldades ID-d komaga. Võrdle mõlema kaardi infot kirja pandud andmetega.
4. Otsi `deck:"Cleanup practice"` ja võrdle ridade arvu režiimides **Notes** ja **Cards**. Kontrolli allesjäänud märkmeid alloleva tabeli järgi.

Kui kustutad ainult B, peaks tulemus olema järgmine.

| Mida kontrollida | Enne | Pärast |
| --- | --- | --- |
| Kogu näidispakk | 6 märget / 8 kaarti | 5 märget / 6 kaarti |
| Jalgratta kohta käiv paar | A1, A2, B1, B2 | Ainult A1 ja A2 |
| A kaardi-ID-d, järgmise kordamise andmed, intervallid ja ajalugu | Sinu kirja pandud väärtused | Samad kaardid, sama kordamiskava ja samad kordamiskirjed |
| Märkme B ID otsing | B kaks kaarti | Tulemusi pole |
| Hõbeda ja sõna „bank” kohta käivad märkmed | C, D, E, F | Alles on samad neli märget |

Ühe märkme kustutamine eemaldab siin kaks kaarti. Ka A kustutamisel saaksid samad koguarvud, kuid kaotaksid õpitud kaardid, mille tahtsid alles jätta. Kontrolli seega ka ID-sid. Jäta allesjääva kaardi õppimisseis ja kordamisajad puutumata.

Eemaldatud kaartide kordamised võivad endiselt kajastuda kogu kordamisgraafikul. Allesjäänud kaardi edenemist saad kontrollida kaardi ID ja infovaate järgi.

Kui selle rühma tulemus klapib kirja pandud andmetega, võta ette järgmine rühm ja vali seal eraldi, milline koopia alles jätta. Kui harjutasid varukoopiaga, korda kontrollitud samme kõigepealt oma põhiprofiilis. Vaata sealne kogu üle, sünkrooni arvutis ja seejärel ka teistes seadmetes, enne kui neis õppimist jätkad. Kui koopiad tekkisid importimisel, loe enne järgmist importi [olemasolevate märkmete CSV-failist uuendamise juhendit (inglise keeles)](/blog/anki-csv-update-existing-notes/). Kui tegid koopiad selleks, et sama fakt kuuluks mitme teema alla, saad [teemade kattumist näidata siltidega (juhend inglise keeles)](/blog/anki-tags-vs-decks/). Nii piisab ühest kordamisajaloost.
