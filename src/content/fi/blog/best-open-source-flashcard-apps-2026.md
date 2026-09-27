---
title: "Parhaat avoimen lähdekoodin oppimiskorttisovellukset 2026: kuusi FOSS-vaihtoehtoa vertailussa"
description: "Vertaa kuutta ylläpidettyä avoimen lähdekoodin oppimiskorttisovellusta: lähdekoodi, offline-tiedot, synkronointi, Anki-tuonti, vienti, itseylläpito ja palautus."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "parhaat avoimen lähdekoodin oppimiskorttisovellukset"
  - "avoimen lähdekoodin oppimiskorttisovellus"
  - "avoimen lähdekoodin aikavälikertaus"
  - "itse ylläpidettävät oppimiskortit"
  - "offline-oppimiskorttisovellus"
  - "avoimen lähdekoodin Anki-vaihtoehto"
  - "FOSS-oppimiskortit"
---

Anki on vuonna 2026 edelleen useimmille paras avoimen lähdekoodin oppimiskorttisovellus. Kiinnostavaksi valinta muuttuu, kun avoin lähdekoodi ei ole ainoa ehdoton vaatimuksesi.

Ehkä tarvitset omalla palvelimellasi toimivan selainsovelluksen. Tai pakan, jota voit lukea tavallisena Markdown-tekstinä. Tai yksityisen muistiinpanojärjestelmän, josta syntyy oppimiskortteja. Nämä tarpeet johtavat eri tuotteisiin, eikä julkinen GitHub-repositorio yksin ratkaise valintaa.

Avoimen työpöytäsovelluksen rinnalla voi olla suljettu iPhone-sovellus. Docker-kontissa voi toimia selainkäyttöliittymä, joka ei synkronoi natiivisovelluksia. Tuonti voi palauttaa sanat mutta hukata korttipohjat, median ja vuosien kertaushistorian, jotka tekivät kokoelmasta hyödyllisen.

Kuusi projektia läpäisi tämän arvioinnin. Vertailin niiden lisensoitua lähdekoodia, uusinta vakaata julkaisua, paikallisia tietoja, ajoitusalgoritmia, synkronointia, siirtoa Ankista, vientiä ja sitä, mitä itse voi tarkalleen ylläpitää. Viimeinen näistä merkitsee enemmän kuin useimmat ominaisuuslistat antavat ymmärtää.

> **Sidonnaisuus:** Olen Kirill Markin ja kehitän [Nibomoa](https://nibomo.com/), yhtä alla olevista kuudesta sovelluksesta. Sen MIT-lisensoitu repositorio kattaa verkkosovelluksen, natiivisovellukset, taustapalvelun, synkronoinnin ja infrastruktuurin. En ole sijoittanut sitä ensimmäiseksi. Anki on turvallisempi oletusvalinta, Mnemosynen Anki-siirto on vakiintuneempi ja useita tämän vertailun vaihtoehtoja on paljon helpompi ylläpitää.

**Tiedot tarkistettu:** 5. syyskuuta 2026. Vakaat julkaisut on erotettu työstä, joka on saatavilla vain oletushaarassa.

![Vaeltaja vertaa kuutta avointa reppua ja testaa varavarusteita ennen avoimen lähdekoodin oppimiskorttisovelluksen valintaa](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Vastaus lyhyesti

| Tärkein tarpeesi | Sopivin valinta | Miksi | Rajoitus, joka kannattaa testata ensin |
| --- | --- | --- | --- |
| Luotettava yleiskäyttöinen järjestelmä tai monimutkainen olemassa oleva kokoelma | [Anki](https://apps.ankiweb.net/) | Kypsä kortti- ja korttipohjamalli, FSRS, lisäosat, laaja laitetuki ja kattavat pakettiviennit | Virallinen iOS-sovellus ja AnkiWeb eivät kuulu avoimeen työpöytäkoodiin; itseylläpito tarjoaa synkronoinnin, ei AnkiWebiä |
| Opiskeluun keskittyvä työpöytävaihtoehto, jolla on vakiintunut Anki-tuonti | [Mnemosyne](https://mnemosyne-proj.org/) | Paikallinen opiskelu, Ankin korttityyppien ja oppimistietojen tuonti sekä itse ylläpidettävä synkronointipalvelin | Versio 2.11 on edelleen uusin vakaa julkaisu; Androidilla voi kerrata muttei muokata |
| Muistiinpanot ja oppimiskortit samassa paikallisessa tietopankissa | [SiYuan](https://b3log.org/siyuan/en/) | Offline-tilassa toimivat natiivisovellukset, sisäänrakennettu FSRS ja aito Dockerissa toimiva selainsovellus | Docker-versio ei synkronoi natiivisovellusten kanssa, ja useita tuonti- ja vientikomentoja puuttuu |
| Verkko- ja mobiilisovellusten, taustapalvelun ja infrastruktuurin lähdekoodi | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Yksi MIT-monorepositorio ja dokumentoitu tuotantokäyttöönotto | Tuettu tuotantoympäristö painottuu AWS:ään, ja siirrossa Ankista katoaa tietoja |
| Nuorempi, ensisijaisesti paikallinen työpöytäsovellus ja suora APKG-tuonti | [Recall](https://github.com/Madlezz/Recall) | FSRS, työpöytäversiot, PWA, paikalliset tietokannat ja valinnainen salattu välityspalvelu | Tuonti säilyttää vain ajoitustilan tilannekuvan, käsittelee muistiinpanon kaksi ensimmäistä kenttää ja ohittaa äänen |
| Ihmisen luettavat Markdown-pakat ilman verkkoriippuvuutta | [Essentialist](https://github.com/essentialist-app/essentialist) | Tavalliset pakkatiedostot ja tarkoituksella offline-käyttöön tehty työpöytä- ja Android-sovellus | Synkronointia ei ole, ja edistyminen tallennetaan erilliseen piilotettuun tietokantaan |

Tämä ei ole ominaisuuksien pisteytys. Aloita ongelmasta, jota et voi hyväksyä. Jos sinulla on kymmenen vuoden Anki-kertaukset, siirron tarkkuus merkitsee enemmän kuin siistimpi käyttöliittymä. Jos ylläpidät koulun järjestelmää, selainkäyttö ja toimivaksi todettu palautus voivat merkitä enemmän kuin lisäosat.

## Mitä pidin avoimen lähdekoodin oppimiskorttisovelluksena

Käytin neljää valintakriteeriä:

1. **Varsinaisen opiskelutoiminnallisuuden lähdekoodi on julkaistu selkeällä avoimen lähdekoodin lisenssillä.** Julkaisemattoman ydinsovelluksen ympärille tehty integraatiokokoelma ei riitä.
2. **Aikavälikertaus toimii jo nyt.** Merkintä kehityssuunnitelmassa tai yleinen tietovisatila ei riitä.
3. **Sovelluksesta on julkaistu valmis versio tai sillä on selvästi dokumentoitu virallinen käyttöönottotapa.** Tuoreet commitit eivät yksin tee prototyypistä turvallista suositusta.
4. **Viralliset lähteet kertovat tietojen käsittelystä riittävästi arviointia varten.** Tarvitsin konkreettisia vastauksia offline-tallennuksesta, synkronoinnista, tuonnista ja viennistä tai ylläpidosta. Epämääräinen lupaus, että käyttäjät ”omistavat tietonsa”, ei riitä.

Tähtimäärä ei ollut valintakriteeri. Siinä näkyvät projektin ikä ja julkisuus yhtä lailla kuin sen sopivuus käyttäjän tarpeisiin. Kypsyydellä on silti merkitystä. Ankilla, Mnemosynellä ja SiYuanilla on vakiintuneet julkaisut ja toimintamallit. Recall ja Essentialist saivat rajatummat suositukset, koska niiden julkaistujen versioiden toiminta on dokumentoitu riittävän hyvin täsmällistä suositusta varten.

Myös ylläpitoa pitää arvioida kahdesta suunnasta. Versionumerolla merkitty julkaisu kertoo, mitä käyttäjä voi asentaa; oletushaara kertoo, mihin projekti on menossa. Essentialist on selkein esimerkki. Sen vakaan julkaisun ohjeissa mainitaan SM-2 ja nykyisen haaran ohjeissa FSRS. Alla olevaan taulukkoon on merkitty SM-2.

## Kuusi FOSS-oppimiskorttisovellusta vertailussa

| Sovellus | Tarkistettu vakaa versio | Alustat | Offline-tiedot | Ajoitusalgoritmi | Synkronointi | Siirto Ankista ja tietojen vienti | Itse ylläpidettävä osa |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. elokuuta 2026 | Windows, macOS, Linux; erilliset Android- ja iOS-sovellukset; AnkiWeb | Asennetut sovellukset käyttävät opiskeluun paikallisia kokoelmia | FSRS tai vanhempi SM-2 | AnkiWeb tai virallinen itse ylläpidettävä synkronointipalvelin | Tuo tekstiä, APKG/COLPKG-paketteja ja Mnemosyne-tietokantoja; vie tekstiä tai paketteja, joihin voi valita median ja ajoitustiedot | **Vain synkronointipalvelin.** Ei itse ylläpidettävää AnkiWebiä tai opiskelun selainkäyttöliittymää |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. marraskuuta 2023; repositorion kehitys jatkui vuonna 2026 | Windows, macOS, Linux, Android; rajoitettu kertaus selaimessa | Työpöytäversio toimii paikallisesti; Androidilla voi kerrata offline-tilassa muttei muokata | Mukautuva muistamisen arviointi asteikolla 0–5 | Sisäänrakennettu synkronointi työpöytäkoneeseen tai ilman käyttöliittymää toimivaan instanssiin | Virallisesti dokumentoitu täysi Anki-tuonti mukautettuine korttityyppeineen ja oppimistietoineen; jakamiseen tarkoitettu vienti ei ole täydellinen varmuuskopio | **Synkronointi ja rajoitettu selainkertaus.** Selainpalvelimessa ei ole tietoturvaominaisuuksia |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. elokuuta 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; selain Dockerin kautta | Natiivisovellukset säilyttävät työtilan paikallisesti | FSRS | Maksullinen virallinen päästä päähän salattu synkronointi tai maksullinen ulkoisen S3/WebDAV-tallennuksen integraatio | Varsinainen sovellus tuo Markdownia ja muita tietomuotoja sekä vie tietoja useisiin asiakirja- ja datamuotoihin; ei dokumentoitua APKG-tuontia | **Täysi selainsovellus.** Docker ei synkronoi natiivisovelluksia, ja osa tuonti- ja vientikomennoista puuttuu |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. syyskuuta 2026 | Verkko, iOS, Android | Verkossa IndexedDB; iOS:ssä SQLite; Androidissa Room SQLite-tietokannan päällä; paikalliset muutokset jonotetaan synkronointiin | FSRS | Ylläpidetty tai itse käyttöön otettu taustapalvelu | Oma ZIP-muoto siirtää kortit, tunnisteet, lähdemetatiedot ja viitatun median mutta ei pakkoja, oppimistilaa, asetuksia tai tilejä; ei APKG-tuontia | **Koko verkko- ja taustapalvelujärjestelmä.** Tuotantokäyttöönotto painottuu AWS:ään; yksityiset natiiviversiot rakennetaan erikseen |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. heinäkuuta 2026 | Windows, macOS, Linux; asennettava PWA | Työpöydällä SQLite; selaimessa IndexedDB; oletuksena ei tiliä eikä telemetriaa | FSRS | Työpöydän kansiosynkronointi tai valinnainen salattu Cloudflare Worker/R2 -välityspalvelu | Työpöydän APKG-tuonti lukee kaksi ensimmäistä kenttää, pakat, tunnisteet, likimääräisen ajoitustilan tilannekuvan ja kuvat; vienti JSON- ja Recall-arkistomuotoihin | **Vain salattujen tilannekuvien välityspalvelu.** Se ei ylläpidä PWA:ta |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. lokakuuta 2025; lähdekoodin kehitys jatkui vuonna 2026 | Android APK, macOS DMG, Linux Flatpak; Windows-versio rakennetaan lähdekoodista | Ei verkkoyhteyksiä; pakkojen sisältö on Markdownia | Vakaa julkaisu: SM-2; oletushaara: FSRS | Ei ole | Markdown säilyttää korttien sisällön; rinnalla oleva piilotettu tietokanta säilyttää edistymisen | **Ei ylläpidettävää palvelua.** Varmuuskopioi Markdown-tiedosto ja sen rinnakkaistietokanta yhdessä |

## 1. Anki on turvallisin oletusvalinta

Ankin vahvuudet ovat arkisissa perusasioissa. Se osaa esittää monimutkaisia muistiinpanotyyppejä, luoda samasta muistiinpanosta rinnakkaiskortteja korttipohjien avulla, säilyttää median kokoelman yhteydessä ja säilyttää vuosien ajoitustiedot. Tämän arvioinnin vakaa työpöytäversio on [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Uudempi 26.09b2 on merkitty beetaksi, joten sitä ei käytetä vertailun perustana.

Avoimuus vaihtelee tuotteen osasta toiseen. [Työpöytärepositorio on lisensoitu AGPL-3.0-or-later-lisenssillä](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), ja mukana toimitettujen komponenttien poikkeukset on lueteltu erikseen. [AnkiDroid](https://github.com/ankidroid/Anki-Android) on erillinen avoimen lähdekoodin Android-projekti. AnkiMobile ja AnkiWeb ovat virallisia tuotteita, mutta niiden lähdekoodi ei sisälly näihin repositorioihin. Aihetta käsitellään tarkemmin artikkelissa [Onko Anki avointa lähdekoodia?](/blog/is-anki-open-source/).

Asennetut sovellukset säilyttävät kokoelmat paikallisesti, joten tavallinen kertaus toimii ilman yhteyttä. AnkiWeb on verkkokäyttöön tarkoitettu osa. Jos offline-toiminta ratkaisee valinnan, [Toimiiko Anki ilman verkkoyhteyttä?](/blog/does-anki-work-offline/) erottaa paikalliset toiminnot synkronointia odottavista.

Anki tukee [FSRS:ää ja vanhempaa ajoitusalgoritmiaan](https://docs.ankiweb.net/deck-options.html). Sen vientimuodot tarjoavat tämän joukon parhaat lähtötiedot siirtoon. [COLPKG sisältää koko kokoelman ajoitustietoineen](https://docs.ankiweb.net/exporting.html), kun taas APKG-vientiin voi sisällyttää ajoitustiedot ja median valitsemalla vastaavat asetukset. Anki tuo myös tekstiä, Anki-paketteja ja Mnemosyne 2.0 -tietokantoja.

Runsaasti tietoa sisältävä lähdepaketti ei takaa täydellistä tuontia muualla. Kohdesovelluksen pitää silti ymmärtää sen korttipohjat, korttien muodostussäännöt, mediaviittaukset ja ajoituskentät. Käytettävissä on vain enemmän tietoa kuin CSV-tiedostossa.

[Virallinen itse ylläpidettävä palvelin](https://docs.ankiweb.net/sync-server.html) on tarkoituksella suppea. Se synkronoi yhteensopivia Anki-sovelluksia; siihen ei kuulu AnkiWebiä, selainkertausta tai tiliportaalia. Se kuuntelee oletuksena salaamatonta HTTP-liikennettä. Ohje suosittelee pitämään sen lähiverkossa tai asettamaan eteen VPN:n tai käänteisen HTTPS-välityspalvelimen. Myös asiakas- ja palvelinversioiden on pysyttävä yhteensopivina.

Valitse Anki, kun kokoelman säilyminen, korttipohjat, lisäosat tai laaja laitetuki ovat tärkeimpiä. Etsi muuta vasta, kun jokin tarkka vaatimus, kuten itse ylläpidettävä selainkäyttöliittymä tai mobiilisovellukset, joiden koko lähdekoodi on julkaistu, painaa enemmän.

## 2. Mnemosyne keskittyy paikalliseen opiskeluun

Mnemosyne tuntuu työpöydän opiskelutyökalulta, koska sellainen se on. Mukana ei tule tietopankkia tai pilvialustaa. Saat paikallisen tietokannan, perinteisen aikavälikertauksen, Android-sovelluksen kertaamiseen ja synkronointipalvelimen, joka voi toimia työpöytäkoneessa tai ilman käyttöliittymää.

Uusin vakaa julkaisu on yhä [2.11 marraskuulta 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Repositorioon tehtiin muutoksia vuonna 2026, mutta se ei tee niistä vakaata asennuspakettia. Testaa versiota 2.11 niillä käyttöjärjestelmillä, joita aiot käyttää seuraavat vuodet.

Lisenssiäkään ei voi kuvata yhdellä tunnuksella. [Juurihakemiston lisenssiluettelo](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) määrittää openSM2syncille LGPL v3:n ja Mnemosynen muille osille erilliset ehdot. [Pääohjelman lisenssinä](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) on AGPL v3 lisäehdolla, joka vaatii Mnemosyne-nimen säilyvän selvästi näkyvissä johdannaisteoksissa. Tarkasta esitystavasta tulee keskustella ylläpitäjien kanssa. Lue teksti ennen muokatun version jakelua.

[Android-sovelluksella voi kerrata offline-tilassa mutta ei muokata kortteja](https://mnemosyne-proj.org/help/android-client). Muut laitteet voivat käyttää työpöytäsovelluksesta käynnistettävää selainkertauspalvelinta, mutta virallinen ominaisuussivu varoittaa, ettei palvelimessa ole tietoturvaominaisuuksia. Se on kätevä lähiverkon käyttöliittymä, ei viimeistelty julkinen verkkosovellus.

Mnemosynen vahvin valtti Ankista vaihtavalle on sen tuontitoiminto. Virallinen ominaisuussivu dokumentoi [täyden Anki-tuonnin, mukaan lukien mukautetut korttityypit ja oppimistiedot](https://mnemosyne-proj.org/features). [Sisäänrakennettu synkronointi](https://mnemosyne-proj.org/help/syncing) yhdistää kortit ja oppimistiedot, ja sen kohteeksi voi asettaa oman koneen.

Tavallinen vientikomento on varmuuskopioinnissa ansa. Se on tarkoitettu valittujen korttien jakamiseen ja jättää oppimistiedot pois. Koko järjestelmän siirtämistä tai palauttamista varten [usean tietokoneen käyttöohje](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) neuvoo kopioimaan koko datahakemiston.

Mnemosyne on tämän vertailun vahvin opiskeluun keskittyvä avoimen lähdekoodin vaihtoehto Ankille. Vastapainona ovat vakaiden julkaisujen hidas tahti, rajoitettu mobiilimuokkaus ja selainkäyttö, joka vaatii huolellista verkkoyhteyksien rajaamista.

## 3. SiYuan sopii, kun muistiinpanot ovat järjestelmän ydin

SiYuan on yksityisyyttä painottava tiedonhallintasovellus, jonka oppimiskortit kuuluvat samaan lohko- ja dokumenttimalliin kuin muu sisältö. Tästä on hyötyä, kun kertausaineisto syntyy muistiinpanoistasi. Jos haluat vain korttijonon, mukana tulee paljon ylimääräistä.

[AGPL-3.0-repositorio](https://github.com/siyuan-note/siyuan) linkittää käyttöliittymän, ytimen, mobiilisovellukset, tietokerroksen ja FSRS-komponentin. Tässä tarkistettu vakaa julkaisu on [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Työpöytä- ja mobiilisovellukset säilyttävät työtilan paikallisesti ja toimivat edelleen offline-tilassa.

Ilmainen versio tallentaa tiedot paikallisesti, mutta siihen ei kuulu synkronointia. [Virallisen hinnaston](https://b3log.org/siyuan/en/pricing.html) mukaan tilaus sisältää virallisen päästä päähän salatun synkronoinnin. Maksulliset Pro-ominaisuudet lisäävät integraatiot omaan S3- tai WebDAV-tallennukseen. Projekti varoittaa myös sijoittamasta käytössä olevaa työtilaa yleisen tiedostosynkronoinnin kansioon, koska samanaikaiset muutokset voivat vioittaa tai ylikirjoittaa tietoja.

Dockerissa toimii oikea selainsovellus, mutta se ei ole asennettujen sovellusten synkronointipalvelin. [Version v3.8.2 Docker-ohje](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) kertoo, etteivät työpöytä- ja mobiilisovellukset voi yhdistää siihen. Docker-versiosta puuttuvat myös Markdown-tuonti sekä PDF-, HTML- ja Word-vienti. Nämä komennot ovat laajemmassa natiivisovelluksessa, joten yleisen ominaisuuslistan kopioiminen Docker-käyttöönottosuunnitelmaan antaisi väärän kuvan.

En löytänyt virallista APKG-tuontia. SiYuan osaa siirtää Markdownia ja omia tietomuotojaan, mutta Anki-kokoelma on rakennettava uudelleen harkitummin.

Valitse SiYuan, kun tarvitset ensisijaisesti tietopankin ja haluat oppimiskortit sen osaksi. Jos haluat suoran korvaajan Ankille, Mnemosynen ja Ankin siirto-ominaisuuksien rajat ovat selvemmät.

## 4. Nibomo avaa laajemman osan järjestelmästä ja jättää sen ylläpidon sinulle

Nibomon julkaisema lähdekoodi kattaa tuotteen osat laajemmin kuin muissa tämän vertailun sovelluksissa. MIT-monorepositorio sisältää verkkosovelluksen, iOS- ja Android-sovellukset, taustapalvelun, tunnistuspalvelun, synkronoinnin, hallintasovelluksen, tietokantamigraatiot ja AWS-infrastruktuurin. Tässä käytetty vakaa julkaisu on [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Oletushaaran myöhempiä muutoksia ei lasketa julkaistuiksi ominaisuuksiksi.

[Arkkitehtuuri](/docs/architecture/) lähtee offline-käytöstä, mutta ”offline” tarkoittaa eri sovelluksissa hieman eri asiaa. Verkkosovelluksen ensisijainen paikallinen tietovarasto on IndexedDB. iOS käyttää SQLiteä ja Android Roomia SQLiten päällä. Muutokset kirjoitetaan paikallisesti ja jonotetaan lähetettäviksi ennen synkronointia. Tämä rakenne kestää yhteyden katkeamisen; se ei tee selaimen tallennustilasta pysyvää eikä poista tarvetta testata sovelluksen käynnistämistä suljetusta tilasta jokaisella laitteella.

Nibomon oma ZIP-paketti on sisällön siirtomuoto, ei tilin varmuuskopio. Version v1.23.0 [pakettiskeema](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) sisältää etu- ja kääntöpuolen sisällön, tunnisteet, korttityypin, lähdemetatiedot ja paketin metatiedot. Viitattu media pakataan mukaan erikseen. Mukana eivät kulje pakkarakenne, kertaushistoria, FSRS-tila, työtilan asetukset tai tilit.

Versiossa v1.23.0 ei ole APKG-tuontia. Dokumentoitu [Ankin TXT/CSV-siirtotapa](/blog/migrate-from-anki-txt-export-open-source-flashcards/) rakentaa kortit uudelleen viedystä tekstistä ja vaatii ihmisen tekemän tarkistuksen. Korttipohjat, ajoitustila, pakkarakenne ja pakettiin sisältyvä media eivät säily tällä reitillä automaattisesti. Se on kohtuullinen vaihtoehto yksinkertaiselle tekstipakalle ja huono valinta vahvasti mukautetulle kokoelmalle.

[Itseylläpito-ohje](/docs/self-hosting/) on yhtä selkeä. Tuotannossa käytetään AWS CDK -kokonaisuutta, johon kuuluvat RDS, Cognito, API Gateway ja Lambda, S3 ja CloudFront sekä salaisuudet, hälytykset ja varmuuskopiot. Cloudflare DNS, Resend-sähköposti ja Sentryn asetukset ovat AWS:n ulkopuolella. Docker Compose palvelee paikallista kehitystä; se ei ole tuettu tuotantopaketti. Ylläpitäjät, jotka haluavat omat yksityiset iOS- tai Android-sovellusversiot, rakentavat ja jakelevat ne erikseen.

Valitse Nibomo, kun koko verkko-, natiivi- ja taustapalvelukoodin hallinta on ylläpitotyön arvoista. Valitse Anki tai Mnemosyne, kun olemassa olevan kokoelman säilyttäminen on tärkeämpi vaatimus.

## 5. Recall on moderni, mutta tutki tuontia tarkasti

Recall on pääsuosituksista nuorin. Se pääsi listalle, koska [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) tarjoaa versionumerolla julkaistut työpöytäversiot, asennettavan PWA:n, selvästi määritellyn paikallisen tallennuksen, FSRS:n, tietojen viennin ja dokumentoidun itse ylläpidettävän synkronoinnin.

MIT-lisensoitu työpöytäsovellus käyttää SQLiteä ja PWA IndexedDB:tä. Kumpikaan ei tarvitse tiliä, ja projektin mukaan telemetria on oletuksena pois päältä. Työpöytäjulkaisut kattavat Windowsin, macOS:n ja Linuxin.

APKG-tuonti on hyödyllinen, mutta README-tiedoston ilmaus ”review history” eli kertaushistoria lupaa liikaa kyseisen version toteutukseen nähden. [Version v1.3.0 tuonnin lähdekoodi](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) ei lue Ankin kertauslokia. Se lukee kortin nykyisen tilan, kertausvälin, kertausten ja unohdusten lukumäärät sekä FSRS:n vakauden ja vaikeuden, jos Anki on tallentanut ne. Vanhemmille korteille, joilta nämä FSRS-kentät puuttuvat, Recall arvioi arvot SM-2-tietojen perusteella.

Myös sisällön muunnoksessa on rajoituksia. Tuonti käyttää muistiinpanon kahta ensimmäistä kenttää etu- ja kääntöpuolena sen sijaan, että se jäljentäisi Ankin muistiinpanotyypit ja korttipohjat. Se säilyttää pakkojen nimet ja tunnisteet. Se poimii yleisissä tiedostomuodoissa olevat kuvat ja päivittää niiden viittaukset, mutta ohittaa äänen ja muun median. Koska tuonti on Tauri-komento, suora APKG-siirto on työpöytäominaisuus eikä toimi selaimen PWA:ssa.

Tämä on paljon parempi kuin uudelleenrakennus pelkästä tekstistä, mutta kokoelma ei säily sellaisenaan. Testaa aukkotehtävät, samasta muistiinpanosta muodostetut rinnakkaiskortit, lisäkentät, HTML/CSS, kuvat, ääni, kertauspäivät ja toistuvat muistiinpanot ennen suurta siirtoa.

Recallissa on kaksi synkronointitapaa. Työpöytäsovellus voi kirjoittaa tilannekuvan Dropboxin, Driven tai muun tiedostosynkronointityökalun hallitsemaan kansioon. Valinnainen välityspalvelu käyttää Cloudflare Workeria ja R2-tallennussäiliötä. Kyseisen version [synkronointikuvauksen](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) mukaan asiakassovellukset salaavat tilannekuvat AES-GCM:llä ennen lähettämistä. Välityspalvelu näkee vain salatun aineiston, ei korttien tietoja tai avainta. Päivitykset käyttävät optimistista rinnakkaisuuden hallintaa ja yrittävät uudelleen yhden ristiriidan jälkeen. Ne yhdistävät silti kokonaisia tilannekuvia kenttien sijaan. Ylläpitäjän rahoittamaa julkista välityspalvelua ei ole: otat sen itse käyttöön ja syötät sen URL-osoitteen.

JSON- ja Recall-arkistoviennit tarjoavat tavan saada tiedot ulos. Palauta vienti puhtaaseen profiiliin ennen kuin kutsut sitä varmuuskopioksi.

Valitse Recall, kun haluat modernin, ensisijaisesti paikallisen työpöytä- ja PWA-kokemuksen ja hyväksyt nuoren projektin sekä tuonnin, joka säilyttää hyödyllisen tilannekuvan koko Anki-järjestelmän sijaan.

## 6. Essentialistin pakka on helppolukuinen, mutta oppimistila on erillään

Essentialist on tämän vertailun suppein kokonaisuus. Jokainen pakka on Markdown-tiedosto, jonka voi avata tekstieditorissa, pitää versionhallinnassa tai kopioida tavallisilla tiedostotyökaluilla. Sovellus ei tarkoituksella tee verkkopyyntöjä.

Uusin vakaa julkaisu on [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Siitä voi ladata Android-, macOS- ja Linux-versiot; Windows-käyttäjät rakentavat sovelluksen lähdekoodista. [Julkaisun README](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) nimeää ajoitusalgoritmiksi SM-2:n.

[Oletushaaran README](https://github.com/essentialist-app/essentialist/blob/main/README.md) nimeää nyt FSRS:n, ja lähdekoodiin tehtiin muutoksia vuonna 2026. Se kertoo kehityksen suunnasta, mutta ei tarkoita, että vuoden 2025 valmis sovellusversio käyttäisi FSRS:ää.

Myös Markdown-tiedosto sisältää vähemmän kuin voisi luulla. Korttien teksti on näkyvässä tiedostossa, mutta edistyminen piilotetussa tietokannassa nimeltä `.<deck file>.db`. Jos kopioit tiedoston `sample.md` ilman tiedostoa `.sample.md.db`, kysymykset ja vastaukset säilyvät mutta oppimistila katoaa.

Sisäänrakennettua laitesynkronointia tai palvelinta ei ole. Voit sijoittaa tiedostot omaan synkronoituun kansioosi, mutta silloin ristiriitojen käsittely ja palautus jäävät vastuullesi.

Valitse Essentialist, kun luettava Markdown ja verkkoyhteydetön työskentely ovat pääasia. Se ei ole saumaton monen laitteen järjestelmä, eikä yksi näkyvä tiedosto ole täydellinen varmuuskopio.

## Neljä aktiivista projektia, joita kannattaa seurata

Näissä projekteissa on tehty oikeaa kehitystyötä vuonna 2026. Ne jäävät kuuden pääsuosituksen ulkopuolelle, koska suositus vaatii kiinnostavaa lähdekoodia enemmän.

| Projekti | Mitä on jo konkreettisesti tarjolla | Mikä vielä estää pääsuosituksen |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL-lähdekoodi, FSRS/SM-2/Leitner-ajoitusalgoritmit, Docker-käyttöönotto, ylläpidetty palvelu, CSV-tuonti ja tietojen vienti | Luotu heinäkuussa 2026; ei versionumerolla julkaistua sovellusta. GitHub-julkaisu sisältää äänipaketin, ei sovellusversiota |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT-verkkosovellus, jossa on FSRS, CSV-tuonti, kuvien peittotehtävät ja dokumentoitu Supabase/Vercel-arkkitehtuuri | Ei versionumerolla merkittyä julkaisua, eivätkä viralliset ohjeet vielä määritä kattavasti offline-käyttöä, vientiä ja itse ylläpidetyn järjestelmän palautusta |
| [Prep](https://github.com/Zamua/prep-app) | MIT-lähdekoodi, FSRS, ylläpidetty palvelu ja dokumentoitu käyttöönotto itse ylläpidettävässä celld-ajoympäristössä | Ei versionumerolla merkittyä julkaisua; itseylläpito tarkoittaa myös celld:n ja objektitallennuksen ylläpitoa, ei erillisen oppimiskorttisovelluksen asennusta |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | GPLv3-lisensoitu Kotlin-mobiilisovellus, FSRS/SM-2, Android-julkaisu ja APKG-tuonti korttipohjineen ja medioineen | Luotu vuonna 2026; iOS-versio on rakennettava lähdekoodista, eivätkä viralliset ohjeet määritä yleistä puhelinten välistä synkronointia |

Useampi tuttu nimi jää pois yksinkertaisemmasta syystä. Mochin [avoimen lähdekoodin repositorio](https://github.com/mochi-cards/open-source) on integraatiokokoelma, ei ydinsovellus. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) on avointa lähdekoodia ja itse ylläpidettävä, mutta sen virallinen README luettelee aikavälikertauksen edelleen tulevien ominaisuuksien kohdassa ”Features coming soon”. [OpenCardsista](https://github.com/holgerbrandl/opencards) ei ole tullut julkaisua sitten [version v2.5.1 tammikuussa 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), eikä sen repositorion koodia ole muutettu vuoden 2018 jälkeen.

Jos lähdekoodin saatavuus ei ole ehdoton vaatimus, [laajempi Anki-vaihtoehtojen vertailu](/fi/blog/best-anki-alternatives/) sisältää tuotteita, jotka vastaavat toisenlaiseen tarpeeseen.

## Testaa siirto viidellä eri tasolla

”Tuo Ankista” ei kerro juuri mitään, ellei tarkenneta, mitä tuonti säilyttää. Siirto voi onnistua yhdellä tasolla ja epäonnistua neljällä muulla.

| Taso | Mitä verrata | Harhaanjohtava merkki onnistumisesta |
| --- | --- | --- |
| Korttien sisältö | Jokainen kenttä, aukkotehtävämerkintä, tunniste, erikoismerkki ja toistuva muistiinpano | Korttien kokonaismäärä on suunnilleen oikein |
| Rakenne | Muistiinpanotyypit, korttipohjat, muodostetut rinnakkaiskortit ja sisäkkäiset pakat | Etu- ja kääntöpuolen tekstit ilmestyivät jonnekin |
| Media | Kuvat ja ääni kopioitiin, niiden viittaukset toimivat paikallisesti ja ne toistuvat offline-tilassa | Tuonti tunnisti tiedostonimet |
| Oppimistila | Kertausloki, tila, kertauspäivä, kertausväli, unohdukset ja ajoitusalgoritmin parametrit | Tuodut kortit näkyvät mutta aloittavat huomaamatta alusta uusina |
| Tietojen vienti ja palautus | Dokumentoitu vienti tai varmuuskopio pystyy rakentamaan saman järjestelmän muualla | Luettavaa tekstivientiä pidetään täydellisenä varmuuskopiona |

Rakenna tarkoituksella hankala testipakka ennen varsinaisen kokoelman siirtämistä. Sisällytä lisäkenttiä, aukkotehtäviä, tavallisia ja käänteisiä korttipohjia, sisäkkäisiä pakkoja, tunnisteita, kuvia, ääntä ja riittävästi kertaushistoriaa sen selvittämiseksi, säilyttikö kohde sen.

Säilytä koskematon varmuuskopio alkuperäisestä. Vertaa tuonnin jälkeen muistiinpanojen, korttien ja mediatiedostojen määriä erikseen. Tarkista kertauspäivät sen sijaan, että luottaisit ilmoitukseen tuoduista ajoitustiedoista. Kertaa offline-tilassa jokaisella laitteella, jota aiot käyttää. Tee sitten kahdella laitteella ristiriitaisia muutoksia väliaikaiseen testisisältöön ja seuraa, mitä synkronointi tekee.

Käytä molempia järjestelmiä muutaman päivän ajan. Vanhan kokoelman poistaminen on viimeinen vaihe, ei todiste uuden toimivuudesta.

## Itseylläpito on valmis vasta palautuksen jälkeen

Edellä olevat tuotteet tarkoittavat itseylläpidolla hyvin eri asioita:

- Anki ja Mnemosyne tarjoavat **synkronointipalveluja**, ja opiskelu tapahtuu edelleen asennetuissa sovelluksissa.
- SiYuan Docker tarjoaa **selainsovelluksen**, jota natiivisovellukset eivät voi käyttää synkronointipalvelimenaan.
- Recall tarjoaa **salattujen tilannekuvien välityspalvelun**, ei itse PWA:ta.
- Nibomo ottaa käyttöön **koko verkko- ja taustapalvelujärjestelmän**, kun taas natiivisovellukset rakennetaan erikseen.
- Essentialistissa **ei ole palvelinta**; hallittavana ovat paikalliset tiedostot.

Kun kokonaisuus on selvillä, testaa se osa, jota ylläpitäjät yleensä lykkäävät:

1. Luo kortteja, liitä mediaa, tee kertauksia ja synkronoi kahdesta sovelluksesta.
2. Tallenna jokainen ohjeissa mainittu tietokanta, objektitallennussäiliö, paikallinen tiedosto, salaisuus ja asetusarvo.
3. Palauta tyhjälle tilille, koneelle tai erilliseen ympäristöön.
4. Vertaa korttimäärää, mediaa, kertaushistoriaa, kertausajankohtien tilaa, kirjautumista ja sovellusten synkronointia.
5. Päivitä palautettu kopio ja tee uusi kertauskierros.

Jos uudelleenrakennus riippuu yhä vanhasta koneesta, sinulla on toimiva palvelu. Varmennettua varmuuskopiota sinulla ei vielä ole.

## Usein kysytyt kysymykset

### Mikä on paras avoimen lähdekoodin oppimiskorttisovellus vuonna 2026?

Anki on paras oletusvalinta useimmille oppijoille. Siinä yhdistyvät kypsä kokoelmamalli, FSRS, laaja laitetuki sekä kattavimmat sovelluksen omat varmuuskopio- ja vientimuodot. Rajoitus on, etteivät viralliset iOS- ja verkkotuotteet kuulu avoimen lähdekoodin työpöytärepositorioon. Itse ylläpidettävä palvelin tarjoaa synkronoinnin, ei opiskelua selaimessa.

### Mikä on paras avoimen lähdekoodin vaihtoehto Ankille?

Mnemosyne on vakiintunein opiskeluun keskittyvä vaihtoehto, ja se dokumentoi virallisesti Ankin mukautettujen korttityyppien ja oppimistietojen tuonnin. Recall näyttää modernimmalta ja tuo APKG-tiedostot suoraan työpöydällä. Se kuitenkin muuntaa vain muistiinpanon kaksi ensimmäistä kenttää, säilyttää vain ajoitustilan tilannekuvan, tuo kuvat muttei ääntä eikä siirrä koko kertauslokia.

### Voinko ylläpitää Ankia itse?

Kyllä, voit ajaa Ankin virallista synkronointipalvelinta yhteensopiville sovelluksille. Se ei kuitenkaan ole itse ylläpidettävä AnkiWebin korvaaja: opiskelun selainkäyttöliittymää ei ole.

### Tarkoittaako avoin lähdekoodi offline-käyttöä?

Ei. Avoin lähdekoodi kuvaa lisensointia ja lähdekoodin saatavuutta. Offline-toiminta riippuu siitä, mihin sovellus tallentaa tiedot ja mitkä toiminnot tarvitsevat palvelua. Myös käänteinen pätee: sovellus voi säilyttää tietonsa paikallisesti julkaisematta ydinsovelluksensa lähdekoodia.

### Takaako itseylläpito tietojen siirrettävyyden?

Ei. Itseylläpidossa päätät, missä palvelu toimii. Siirrettävyys riippuu vientitoiminnoista, täydellisistä varmuuskopioista ja palautuksesta, jonka olet oikeasti testannut. Omalla palvelimella oleva tietokanta voi silti olla hankala siirtää, ja luettavasta Markdown-pakasta voi puuttua sen vieressä säilytettävä kertaustila.

## Oma suositukseni

Jatka **Ankin** käyttöä tai valitse se, ellei jokin sen rajoituksista aiheuta todellista ongelmaa. Valitse **Mnemosyne**, kun haluat keskittyä paikalliseen työpöytäopiskeluun ja tarvitset vakiintuneen Anki-tuonnin. Käytä **SiYuania**, kun oppimiskortit kuuluvat laajempaan tietopankkiin. Harkitse **Nibomoa**, kun koko verkko-, natiivi- ja taustapalvelukoodin hallinta on AWS-tuotantoympäristön ylläpidon arvoista. Valitse **Recall**, jos haluat modernin, ensisijaisesti paikallisen sovelluksen ja olet testannut sen muunnosrajoitukset. Valitse **Essentialist**, kun tavallinen Markdown ja verkkoyhteyksien täydellinen puuttuminen merkitsevät enemmän kuin synkronointi.

Paras avoimen lähdekoodin oppimiskorttisovellus ei ole pisimmän ominaisuuslistan repositorio. Se on sovellus, jonka lähdekoodin, offline-tietojen, siirron, synkronoinnin, ylläpidon ja palautuksen rajat sopivat järjestelmään, jonka olet oikeasti valmis ottamaan vastuullesi.
