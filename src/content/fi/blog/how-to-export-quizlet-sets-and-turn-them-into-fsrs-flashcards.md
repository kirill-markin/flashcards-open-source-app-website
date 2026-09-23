---
title: "Näin viet Quizlet-korttipakan vuonna 2026 (ja miksi vientipainike puuttuu)"
description: "Vie Quizlet-korttipakka verkkosivuston nykyisillä ohjeilla. Jos vientipainike puuttuu, tarkista, loitko pakan itse, onko se kopio tai käytätkö mobiilisovellusta."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "Quizlet-korttien vienti"
  - "miten viedä Quizlet-kortit"
  - "Quizlet Export-painike puuttuu"
  - "Quizlet-korttien lataaminen"
  - "Quizlet CSV-tiedostoksi"
  - "Quizletista Ankiin"
---

Jos Quizletin **Export**-painike puuttuu, tarkista ensin kaksi asiaa: loitko alkuperäisen korttipakan itse ja käytätkö Quizletin verkkosivustoa? Quizlet sallii viennin vain pakan alkuperäiselle tekijälle, ja toiminto on käytettävissä vain verkkosivustolla. Kopioitua pakkaa ei voi viedä, vaikka kopio näkyisi nyt omassa kirjastossasi.

Jos ehdot täyttyvät, vienti käy nopeasti: avaa pakka verkkosivustolla, valitse **More → Export**, määritä termien ja määritelmien asettelu ja valitse **Copy text**. Quizlet ei lataa pakasta tiedostoa. Se kopioi tekstin leikepöydälle ilman kuvia.

**Tiedot tarkistettu:** 30. elokuuta 2026 [Quizletin virallisista vientiohjeista](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Arkistonhoitaja tarkistaa omistajuustunnisteet ennen tekstikorttiparien luovuttamista. Kaksi asiakirjakansiota on valmiina, ja valokuvat jäävät lasin taakse.](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Pitäisikö Export-painikkeen näkyä?

Tarkista nämä asiat ennen kuin yrität ladata Quizlet-kortteja muulla tavalla:

| Tilanteesi | Pitäisikö Export-toiminnon olla käytettävissä? | Seuraava vaihe |
| --- | --- | --- |
| Loit alkuperäisen pakan ja avasit sen Quizletin verkkosivustolla | Kyllä, Quizletin ohjesivun mukaan | Noudata alla olevia ohjeita |
| Käytät iOS- tai Android-sovellusta | Ei; vienti toimii vain verkkosivustolla | Avaa Quizlet selaimessa ja kirjaudu sisään |
| Kopioit toisen käyttäjän pakan | Ei; Quizletin mukaan kopioituja pakkoja ei voi viedä | Kopioiminen ei tuo Export-toimintoa käyttöösi |
| Voit tarkastella pakkaa, mutta et luonut sitä | Ei; katseluoikeus ei tee sinusta alkuperäistä tekijää | Pyydä tekijältä lähdetiedostoa tai luo pakka uudelleen aineistosta, jota saat käyttää |

Jos loit alkuperäisen pakan mutta Quizletin vientipainike puuttuu silti, varmista, että olet kirjautunut pakan omistavalle tilille ja avannut alkuperäisen pakan etkä kopiota. Quizletin ohjesivulla ei kuvata muuta vientitapaa. Ota siinä vaiheessa yhteyttä Quizletin tukeen sen sijaan, että luottaisit rajoituksen kiertämistä lupaavaan lataustyökaluun.

## Quizlet-korttien vienti verkkosivustolla

Kun olet luonut pakan itse:

1. Kirjaudu Quizletin verkkosivustolle.
2. Valitse oma kirjasto (**Your library**).
3. Valitse korttipakat (**Flashcard sets**).
4. Avaa pakka, jonka haluat viedä.
5. Avaa lisävalikko (**More**).
6. Valitse vienti (**Export**).
7. Valitse termien ja määritelmien asettelu.
8. Valitse tekstin kopiointi (**Copy text**).
9. Liitä tulos tekstieditoriin, joka käsittelee pelkkää tekstiä.

Tämä on nykyinen vientiprosessi kokonaisuudessaan. Lopussa ei ole erillistä latauspainiketta.

Tavallisille etu- ja kääntöpuolen sisältäville korteille suosittelen sarkainta termin ja määritelmän väliin sekä rivinvaihtoa korttien väliin. Tämä erotinvalinta on käytännön suositus, ei Quizletin vaatimus. Sarkaimet on yleensä helpompi tarkistaa kuin pilkut, sillä pilkkuja esiintyy usein myös määritelmien tekstissä.

Siisti kahden kortin tiedosto näyttäisi tältä. Kummankin rivin keskellä on yksi sarkain:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Mitä Quizletin viennissä säilyy?

Quizlet kuvaa toiminnon rajat tarkasti: se vie tekijän omasta pakasta **termit ja määritelmät**. Ohjeessa kerrotaan myös, ettei kuvia voi viedä.

Turvallisinta on olettaa, että viennissä säilyy vain se, mikä näkyy liittämässäsi tekstissä. Jos teksti, erotin tai rivinvaihto näkyy siinä, voit säilyttää sen tiedostossa. Quizletin ohjesivu ei lupaa siirtää kansioita, opiskelutiloja, muotoiluja, osaamisen tasoa, kertaushistoriaa tai kertausaikataulua.

Saat siis kopion korttien tekstistä, et varmuuskopiota, josta Quizletin tilan voisi palauttaa. Sama ero on olennainen, jos etsit ohjetta Quizlet-korttien lataamiseen: Quizlet kopioi tekstin leikepöydälle, ja tiedoston luot itse.

## Tallenna alkuperäinen kopio UTF-8-muodossa ennen muokkaamista

Varmista, että voit palata lähtötilanteeseen:

1. Liitä viety teksti pelkkää tekstiä käsittelevään editoriin.
2. Tallenna se UTF-8-muodossa, esimerkiksi nimellä `biology-quizlet-raw.txt`.
3. Tee siitä kopio nimellä `biology-quizlet-working.txt`.
4. Jätä alkuperäinen tiedosto ennalleen ja muokkaa vain työkopiota.

Tarkista työkopio ennen tuontia, kun Quizlet-pakka on vielä auki:

- Ota näkymättömien merkkien näyttö käyttöön ja tarkista sarkainten ja rivinvaihtojen paikat.
- Etsi valitsemaasi erotinta termien ja määritelmien sisältä. Ylimääräinen sarkain voi luoda odottamattoman kolmannen kentän.
- Etsi määritelmiä, joissa on omia rivinvaihtoja. Ne voidaan tulkita ylimääräisiksi korteiksi.
- Vertaa tiedoston alkua, keskikohtaa ja loppua Quizletiin. Tarkista myös pisimmät määritelmät.
- Sulje tiedosto ja avaa se uudelleen. Tarkista sitten tarkkeelliset kirjaimet, muut kuin latinalaiset kirjoitusjärjestelmät, symbolit ja typografiset lainausmerkit ja heittomerkit.
- Merkitse tyhjät kentät, kaksoiskappaleet ja poikkeavat rivit erikseen sen sijaan, että korjaisit ne huomaamatta arvauksen perusteella.

Vertaa rivimäärää korttien määrään vain, jos jokainen kortti on täsmälleen yhdellä rivillä. Moniriviset määritelmät tekevät tästä oikotiestä epäluotettavan.

Säilytä alkuperäinen tiedosto, vaikka työkopio näyttäisi hyvältä. Jos tuonnissa kenttä siirtyy väärään paikkaan tai sisältöä katoaa, sinulla on yhä muuttumaton vertailukohta.

## Quizlet CSV-tiedostoksi: tee muunnos huolellisesti

`.txt`-tiedoston nimeäminen `.csv`-päätteiseksi ei muunna tiedostoa. CSV vaatii johdonmukaiset erottimet sekä oikean lainausmerkkien käytön kentissä, jotka sisältävät pilkkuja, lainausmerkkejä tai useita rivejä.

Näin luot Quizletin tekstistä CSV-tiedoston turvallisesti:

1. Säilytä alkuperäinen tekstivarmuuskopio muuttumattomana.
2. Avaa työkopio taulukkolaskentaohjelmassa ja valitse täsmälleen sama erotin, jota käytit Quizletissa.
3. Varmista, että jokainen kortti on omalla rivillään kahdessa sarakkeessa: termi ja määritelmä.
4. Tarkista lainausmerkit, erottimet ja moniriviset määritelmät.
5. Vie tiedosto UTF-8-koodattuna CSV-tiedostona.
6. Avaa CSV uudelleen erilliseen esikatseluun ennen kuin käytät sitä muualla.

Taulukkolaskentaohjelma voi lisätä CSV-muodon vaatimat lainausmerkit. Kaikkien sarkainten korvaaminen pilkuilla ei tee sitä luotettavasti.

## Siirrä teksti Nibomoon tarkistettaviksi korttiluonnoksiksi

[Nibomossa](/fi/features/) ei ole suoraa Quizlet-tuontia. Verkkopalvelussa TXT- tai CSV-tiedostoa käytetään tekoälyavusteiseen korttien luonnosteluun tiedostoliitteestä. Kyse ei ole häviöttömästä siirrosta.

1. Säilytä alkuperäinen Quizlet-tiedosto sovelluksen ulkopuolella.
2. Liitä siistitty TXT-tiedosto tai huolellisesti valmisteltu CSV-tiedosto Nibomon tekoälykeskusteluun.
3. Kerro avustajalle, mitä erotinta ja kenttiä tiedosto käyttää.
4. Pyydä pientä esikatselua ja sano selvästi, ettei kortteja saa vielä tallentaa.
5. Vertaa ehdotettua korttimäärää sekä etu- ja kääntöpuolia työkopioon.
6. Tallenna vain tarkistamasi kortit.

[Aloitusopas](/docs/getting-started/) kuvaa tekoälykeskustelun käyttöä työtilan tietojen ja tiedostoliitteiden kanssa. Huolellisesti rajattu pyyntö voisi olla:

> Lue tämä tiedosto sarkaimella erotettuina termi–määritelmäpareina. Älä tallenna kortteja vielä. Luonnostele pieni näyte, säilytä lähteen sanamuodot ja muut kuin latinalaiset merkit ja luettele virheelliset, tyhjät tai monitulkintaiset rivit erikseen arvaamisen sijaan.

Tämä voi olla hyödyllistä, kun vanhat kortitkin kaipaavat siistimistä. Se ei todista, että jokainen rivi siirtyi oikein. Käytä [tekoälyn luomien korttien korjausoppaan](/blog/how-to-fix-ai-flashcards/) tarkistuslistaa ja kokeile sitten pienellä pakalla ennen kuin luot loput kortit.

Nibomoon luoduille korteille alkaa uusi oppimishistoria. Quizletin teksti ei sisällä kertaustapahtumia tai aikataulutietoja, joita vanhan kertausjonon jatkaminen edellyttäisi.

> **Sidonnaisuus:** Kehitän Nibomoa. Tässä kuvattu toimintatapa kertoo tuotteen nykyisistä rajoituksista. Se ei ole lupaus täydellisestä Quizlet-yhteensopivuudesta.

## Quizletista Ankiin: käytä Ankin tekstintuontia

Ankin [virallisen tekstintuontiohjeen](https://docs.ankiweb.net/importing/text-files.html) mukaan tuonti tukee UTF-8-koodattuja tekstitiedostoja, joiden kentät erotetaan pilkuilla, puolipisteillä tai sarkaimilla.

Kun työkopiosi on sarkaineroteltu:

1. Avaa Ankin tuontitoiminto ja valitse UTF-8-tekstitiedosto.
2. Varmista esikatselusta, että Anki tunnisti sarkaimen. Muuta erotinasetusta tarvittaessa.
3. Valitse muistiinpanotyyppi ja kohdepakka.
4. Kohdista ensimmäinen kenttä etupuoleen ja toinen kääntöpuoleen.
5. Tarkista esikatselusta tyhjät, väärään paikkaan siirtyneet ja ylimääräiset kentät.
6. Tarkista kaksoiskappaleiden ja päivitysten käsittelyasetus ennen tuontia.

Anki määrittää odotetun kenttämäärän ensimmäisestä rivistä, joka ei ole kommentti. Myöhemmissä tietueissa puuttuvat kentät jäävät tyhjiksi eikä ylimääräisiä kenttiä tuoda. Siksi esikatselu on tärkeä: jo yksi ylimääräinen erotin voi muuttaa rivin rakennetta.

Myös monirivisten määritelmien käsittelytapa pitää valita erikseen. Anki tukee lainausmerkeillä rajattuja kenttiä, jotka jatkuvat usealle riville. Vaihtoehtoisesti se voi tulkita `<br>`-merkinnän rivinvaihdoksi, kun HTML:n salliva asetus (**Allow HTML in fields**) on käytössä. Käytä yhtä tapaa ja tarkista kopioitu näyte ennen koko tiedoston tuontia.

Oletusasetuksilla Anki voi tunnistaa olemassa olevan samantyyppisen muistiinpanon ensimmäisen kentän perusteella ja päivittää muut kentät. Tuontiasetuksista voi sen sijaan valita kaksoiskappaleiden ohittamisen tai lisäämisen uusina muistiinpanoina. Olemassa olevan Anki-muistiinpanon päivittäminen voi säilyttää sen Anki-kertausaikataulun, mutta Quizletin kertausaikataulu ei siirry tekstitiedostossa.

## Säilytä alkuperäinen, kunnes uusi pakka toimii

Quizletin virallinen vientitapa päättyy **Copy text** -valintaan verkkosivustolla, ja se koskee vain itse luotuja pakkoja. Tietoja keräävät skriptit, arvatut yksityiset rajapintaosoitteet ja kolmansien osapuolten lataustyökalut ovat erillisiä työnkulkuja, joille ei ole virallista tukea. Ne eivät tee kopioidusta tai vain katseltavissa olevasta pakasta virallisesti vietävää.

Jos tarvitset toistuvaa automaatiota yksittäisen kopion sijaan, [Quizletin API:n nykytilaa käsittelevä artikkeli](/blog/quizlet-api/) selittää virallisen tuen rajat. Jos pakka ei ole sinun, pyydä sen tekijältä lähdetiedostoa tai kokoa pienempi pakka omista muistiinpanoistasi. [Opas parempien korttien tekemiseen](/blog/how-to-make-better-flashcards/) voi auttaa parantamaan uudelleen luotavaa pakkaa sen sijaan, että kopioisit jokaisen vanhan rivin.

Älä poista alkuperäistä Quizlet-pakkaa ennen kuin:

- alkuperäinen UTF-8-tiedosto on tallennettu paikkaan, josta otetaan varmuuskopio;
- työkopio avautuu uudelleen ja sen merkit sekä erottimet näkyvät oikein;
- moniriviset kentät, tyhjät kentät, kaksoiskappaleet ja poikkeavat rivit on tarkistettu;
- kuvien välittämä olennainen tieto on palautettu aineistosta, jota saat käyttää; ja
- pieni kokeilu on tuottanut kohdesovelluksessa oikeat etu- ja kääntöpuolet.

Säilytä alkuperäinen tekstitiedosto tämän jälkeenkin. Se on helpoin riippumaton vertailukohta, jos myöhempi tuonti näyttää virheelliseltä. Jos vielä mietit, mihin kortit kannattaa siirtää, [Quizletin vaihtoehtojen vertailu](/blog/quizlet-alternative/) käy läpi valinnan laajempia hyötyjä ja haittoja.
