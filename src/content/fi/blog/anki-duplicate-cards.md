---
title: "Ankin korttien kaksoiskappaleet – löydä kopiot ja valitse, mitkä säilytät"
description: "Selvitä, miksi sama kysymys näkyy Ankissa usealla kortilla. Vertaa muistiinpanoja ja päätä, minkä kopion säilytät. Harjoituksen avulla tarkistat kertaushistorian."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "Ankin kaksoiskappaleet"
  - "kaksoiskappaleiden etsiminen Ankissa"
  - "Ankin muistiinpanojen kaksoiskappaleiden poistaminen"
  - "Ankin päällekkäiset muistiinpanot"
  - "Ankin kertaushistoria"
---

Tunnistat kysymyksen, jota olet jo kerrannut, mutta Anki näyttää sen uutena. Ehkä tuonnissa syntyi kopio. Tai ehkä sama muistiinpano tuottaa kaksi kysymystä. Erolla on väliä, sillä yhden rivin poistaminen Ankin korttiselaimessa voi poistaa muistiinpanon kaikki kortit, myös sen, jonka halusit säilyttää.

Kun siivoat **Ankin korttien kaksoiskappaleita**, selvitä ensin, mistä toisto johtuu. Jos kortit kuuluvat eri muistiinpanoihin, etsi mahdolliset kaksoiskappaleet toiminnolla **Notes → Find Duplicates**. Samansisältöinen kenttä auttaa löytämään vertailtavat muistiinpanot. Vertaa muistiinpanojen sisältöä ja kunkin kortin kertaushistoriaa. Päätä sitten jokaisen ryhmän kohdalla erikseen, minkä kopion säilytät.

Ohjeet koskevat Ankin työpöytäversiota ja perustuvat käyttöoppaaseen ja julkaistuun lähdekoodiin, jotka tarkistettiin 4. lokakuuta 2026. Valikkokohdat ovat englanninkielisestä käyttöliittymästä. Alla oleva kuvitteellinen harjoitus kuvaa, millaista tulosta voi odottaa.

![Shakkikerhon jäsen vertaa ylimääräistä vaaleaa tornia kahteen kuluneeseen torniin puisella shakkilaudalla](/blog/anki-duplicate-cards.png)

## Selvitä ensin, mikä toistuu

Muistiinpano sisältää kenttiä, kuten Front ja Back. Anki luo kortit niistä korttipohjien avulla. Yhdestä sanastomuistiinpanosta voi syntyä yksi kortti sanan tunnistamiseen ja toinen sanan tuottamiseen muistista. Kummallakin on oma kertausaikataulunsa. Anki kutsuu saman muistiinpanon kortteja sisarkorteiksi. [Ankin ohje muistiinpanoista ja kentistä](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Avaa **Browse** ja valitse **Cards**-tila. Valitse epäilyttävät rivit vuorotellen ja avaa kunkin kohdalla **Cards → Info**. Vertaa muistiinpanojen tunnisteita (Note ID). Sama tunniste tarkoittaa, että kortit kuuluvat samaan muistiinpanoon. Eri tunnisteet tarkoittavat eri muistiinpanoja. Korvaa haussa `nid:123` luku `123` oikealla tunnisteella, niin näet muistiinpanon kortit kaikista pakoista. [Ankin ohje tunnisteista ja niillä hakemisesta](https://docs.ankiweb.net/searching.html#object-ids)

| Mitä löydät | Todennäköinen selitys | Mitä tehdä |
| --- | --- | --- |
| Sama muistiinpano, kysymykset eri suuntiin | Tarkoituksella luodut sisarkortit | Tarkista, tarvitsetko molemmat kysymykset |
| Sama muistiinpano, korteissa näkyy sama kysymys | Mahdollisesti päällekkäiset korttipohjat | Vertaa pohjia ja korttien esikatseluja |
| Eri muistiinpanot, kysymykset näyttävät samoilta | Mahdolliset muistiinpanojen kaksoiskappaleet | Vertaa muistiinpanoja kokonaisuudessaan ennen kuin päätät, kumman säilytät |

Jos sisarkortit on luotu tarkoituksella, [opas käänteisiin kortteihin](/blog/anki-reverse-cards/) (englanniksi) selittää kysymysten kaksi suuntaa. Jos haluat jättää vain toisen pois kertauksesta, käytä sille [Suspend-toimintoa](/blog/anki-bury-vs-suspend/) (opas englanniksi). Kortti jää kokoelmaan.

Jos korttipohjat ovat identtiset, seuraa [Ankin ohjetta ylimääräisten korttien selvittämiseen](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Korttipohjan poistaminen vaikuttaa kaikkiin sitä muistiinpanotyyppiä käyttäviin muistiinpanoihin, myös muissa pakoissa. Käsittele pohjan poistamista erillisenä rakennemuutoksena.

## Rajaa muistiinpanojen kaksoiskappaleiden haku

Avaa **Notes → Find Duplicates** ja valitse vertailtava kenttä, esimerkiksi **Front**. Oletuksena Anki hakee kaikista muistiinpanotyypeistä, joissa on kyseinen kenttä. Rajaa haku **Optional filter** -kentässä ja napsauta **Search**. [Ankin ohje Find Duplicates -toiminnosta](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Jos pakan nimi on `Cleanup practice`, kirjoita **Optional filter** -kenttään seuraava lauseke.

```text
deck:"Cleanup practice"
```

Pakkahaku kattaa myös alipakat. Poista rajaus, jos kopioita voi olla eri pakoissa. Tyhjä hakutulos yhdessä pakassa kertoo vain sen pakan ja sen alipakkojen tilanteesta. [Ankin pakkahaun syntaksi](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Napsauta tulosryhmää, niin näet sen muistiinpanot. **Tag Duplicates** lisää englanninkielisessä käyttöliittymässä tunnisteen `duplicate` kaikkien tulosryhmien jokaiseen muistiinpanoon, myös niihin, jotka aiot säilyttää. **Älä poista kaikkia haun `tag:duplicate` tuloksia.** Hae tunnisteella tarkistettavat muistiinpanot ja valitse poistettavat yksitellen. [Tunnisteiden lisääminen julkaistussa lähdekoodissa](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

Haku vertaa valitun kentän sisältöä. Jos samaa asiaa kysytään eri sanoin, voit joutua etsimään kysymykset käsin. Sanasta sanaan samat kysymykset puolestaan voivat liittyä eri kieliin tai kursseihin.

## Kokeile kolmea päätöstä paperilla

Kuvittele, että pakassa `Cleanup practice` on kuusi muistiinpanoa ja ettei sillä ole alipakkoja. A ja B käyttävät **Basic (and reversed card)** -tyypin muuttamattomia korttipohjia, joten kummastakin syntyy kaksi korttia. C–F käyttävät **Basic**-tyyppiä, joka luo kustakin yhden kortin. Kaikki kahdeksan korttia ovat samassa pakassa. Kirjaimet kuuluvat vain tähän esimerkkiin. Ankissa muistiinpanojen ja korttien tunnisteet ovat numeroita.

| Muistiinpanot | Front → Back | Kuvitteellinen opiskelutilanne | Päätös |
| --- | --- | --- | --- |
| A ja B | `le vélo` → `bicycle` | A:n tunnistamiskortilla on 12 kertausta ja tuottamiskortilla 3. B:n molemmat kortit ovat uusia. | Säilytä A. Tarkista ensin, voiko B:n poistaa. |
| C ja D | `Chemical symbol for silver?` → `Ag` | C:llä on 20 kertausta ja D:llä 6. | Vertaa kertaushistorioita ja päätä, kummalla kortilla jatkat. |
| E ja F | E: `bank` → `financial institution`. F: `bank` → `side of a river` | Kysymykset koskevat eri merkityksiä. | Säilytä molemmat ja lisää kysymyksiin asiayhteys. |

Haku voi löytää kaikki kolme paria Front-kentän perusteella. Päätös on helppo vain ensimmäisen parin kohdalla. Ennen kuin päätät poistaa B:n, vertaa **kaikkia kenttiä**, mediatiedostoja, tunnisteita ja muistiinpanotyyppejä. Esikatsele myös kysymykset molempiin suuntiin. B:ssä voi olla ääntämisäänite, joka A:sta puuttuu. B voi myös tuottaa kysymyksen, jota A:ssa ei ole.

Jos hyödyllinen sisältö liittyy samaan oppimistavoitteeseen, kopioi se harkiten säilytettävään muistiinpanoon ja tarkista tulos esikatselussa. Säilytä myös hyödylliset lähdetunnisteet. Jos haluat testata eri asiaa, luo sille uusi kysymys, jolle kertyy oma kertaushistoria.

C:n ja D:n kohdalla kertausmäärä antaa yhden vihjeen. Katso kummankin kortin kertauspäivät ja arviot sekä nykyinen kertausväli ja seuraava kertausajankohta. Useammin kerrattu kortti on ehkä vain vaatinut enemmän uudelleenopettelua. Tarkista, että säilytettävän kortin kysymys ja vastaus palvelevat tavoitettasi. Valitse sitten, kumman kortin kertauksia jatkat. Jos vastaukset ovat ristiriidassa, tarkista ensin oppimateriaalin lähde. Kertausmäärä ei kerro, kumpi vastaus on oikein.

Kun säilytät C:n ja poistat D:n, **kertaushistoriat pysyvät erillään**. C:n kertaukset jatkuvat sen oman aikataulun mukaan. Ankin [Card Info -näkymä](https://docs.ankiweb.net/stats.html#card-info) näyttää historian korttikohtaisesti. Poistettujen muistiinpanojen kertausmerkinnät näkyvät edelleen kokoelman tilastoissa, mutta poistuvat pakkakohtaisista tilastoista. Ne eivät siirry säilytetylle kortille. [Käyttöoppaan selitys poistettujen muistiinpanojen tilastoista](https://docs.ankiweb.net/stats.html#more)

Jos päätös on vielä auki, lykkää poistoa. Kirjaa, mitä pitää tarkistaa. Tarvittaessa voit jättää kortteja selvityksen ajaksi pois kertauksesta Suspend-toiminnolla.

## Poista yksi tarkistettu kopio ja vertaa tulosta kirjattuihin tietoihin

Synkronoi ennen poistamista ensin muilla laitteilla tehdyt muutokset. Synkronoi sitten työpöytäversio, jotta muutokset ovat mukana sen kokoelmassa. [Ankin synkronointiohje](https://docs.ankiweb.net/syncing.html)

Avaa **File → Export** ja vie kokoelma muodossa **Anki Collection Package (`.colpkg`)**. Valitse **Include Media**. Paketti sisältää kaikki pakat sekä niiden kertausaikataulut ja kertaushistorian. Säilytä tiedosto turvallisessa paikassa. Kun tuot tiedoston, varmuuskopion kokoelma korvaa avoimen profiilin nykyiset kortit kokonaan. [Kokoelman vientiohje](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Jos haluat harjoitella poistamista, luo erillinen profiili kohdasta **File → Switch Profile** ja tuo varmuuskopio siihen. Käytä harjoitusprofiilia ilman AnkiWeb-yhteyttä. [Jokaisella profiililla on oma kokoelmansa](https://docs.ankiweb.net/profiles.html). Jos yhdistät molemmat profiilit samaan tiliin, toinen kokoelma voi korvata toisen. [Opas APKG- ja COLPKG-tiedostoihin](/blog/anki-apkg-vs-colpkg/) (englanniksi) kertoo, mitä kumpikin tiedosto sisältää ja mitä tuonnissa tapahtuu.

Merkitse harjoituksessa A:n tunnistamiskortti A1:ksi ja tuottamiskortti A2:ksi. B1 ja B2 ovat B:n vastaavat kortit. Avaa **Cards → Info** ja kirjaa A:n kummankin kortin todellinen tunniste (Card ID), seuraava kertausajankohta, kertausväli ja muutama tunnistettava kertaushistorian merkintä. Kirjaa myös B:n muistiinpanon tunniste (Note ID). Vertaa tilannetta ennen poistoa ja sen jälkeen saman istunnon aikana. Jätä molempien kopioiden kertaukset ja aikataulut vertailun ajaksi ennalleen.

Näin poistat Ankin päällekkäiset muistiinpanot yksitellen.

1. Korvaa selaimen haku `nid:`-haulla, jossa on B:n todellinen muistiinpanotunniste. Tarkista **Cards**-tilassa jokainen tulos ja esikatsele kysymys molempiin suuntiin. Kun siivoat omaa aineistoasi, etsi sisarkortteja muistakin pakoista. Jätä siksi pakkarajaus pois tästä hausta.
2. Siirry **Notes**-tilaan. Varmista, että ainoa tulos on poistettava B-muistiinpano, valitse vain se ja käytä toimintoa **Notes → Delete**. Ankin [Delete-toiminto](https://docs.ankiweb.net/browsing.html#notes) poistaa valitun muistiinpanon ja kaikki sen kortit, vaikka olisit valinnut **Cards**-tilassa vain yhden kortin.
3. Toista haku B:n muistiinpanotunnisteella ja varmista, että tuloksia ei enää tule. Hae A:n tallennetuilla korttitunnisteilla käyttäen hakua `cid:` ja erota tunnisteet pilkulla. Vertaa molempien korttien **Info**-tietoja siihen, mitä kirjasit.
4. Hae lausekkeella `deck:"Cleanup practice"` ja vertaa rivimääriä **Notes**- ja **Cards**-tiloissa. Tarkista jäljellä olevat muistiinpanot alla olevasta taulukosta.

Kun poistat vain B:n, tuloksen pitäisi näyttää tältä.

| Tarkistus | Ennen poistoa | Odotettu tulos poiston jälkeen |
| --- | --- | --- |
| Koko esimerkkipakka | 6 muistiinpanoa / 8 korttia | 5 muistiinpanoa / 6 korttia |
| Polkupyörää koskevat kortit | A1, A2, B1, B2 | Vain A1 ja A2 |
| A:n korttitunnisteet, seuraavat kertausajankohdat, kertausvälit ja historia | Kirjaamasi tiedot | Samat kortit, aikataulut ja kertaushistorian merkinnät |
| Haku B:n muistiinpanotunnisteella | B:n kaksi korttia | Ei tuloksia |
| Hopeaa ja sanaa *bank* koskevat muistiinpanot | C, D, E, F | Samat neljä muistiinpanoa |

Tässä yhden muistiinpanon poistaminen poistaa kaksi korttia. Jos poistaisit vahingossa A:n, määrät täsmäisivät silti, vaikka menettäisit jo kerratut kortit, jotka halusit säilyttää. Tarkista määrien lisäksi tunnisteet. Jätä säilytettävien korttien oppimistila ja kertausaikataulut ennalleen.

Kokoelman kertauskaaviossa voi yhä näkyä poistettujen korttien kertauksia. Varmista tunnisteen avulla, että tarkastelet säilytettyä korttia, ja tarkista sen edistyminen **Info**-näkymästä.

Kun yhden ryhmän tulos vastaa kirjaamiasi tietoja, siirry seuraavaan ryhmään ja päätä erikseen, minkä kopion siinä säilytät. Jos harjoittelit varmuuskopiolla, tee tarkistettu siivous ensin varsinaisessa profiilissasi. Tarkista kokoelma, synkronoi työpöytäversio ja synkronoi muut laitteet ennen kuin jatkat opiskelua niillä. Jos kopiot syntyivät tuonnissa, lue ennen seuraavaa tuontia [opas muistiinpanojen päivittämiseen CSV-tiedostosta](/blog/anki-csv-update-existing-notes/) (englanniksi). Jos kopioit muistiinpanon saadaksesi saman asian usean aiheen alle, [voit merkitä aiheet tunnisteilla](/blog/anki-tags-vs-decks/) (opas englanniksi) ja jatkaa samalla kertaushistorialla.
