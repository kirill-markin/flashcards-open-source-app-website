---
title: "Ankin vaihtoehdot vuonna 2026: mitä säilytät, menetät ja saat vaihtaessasi"
description: "Vertaa seitsemää Ankin vaihtoehtoa tietojen siirtymisen, offline-käytön, ajoituksen, hinnan, lähdekoodin ja itseylläpidon kannalta. Katso myös, milloin Anki on turvallisempi valinta."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "Ankin vaihtoehdot"
  - "vaihtoehto Ankille"
  - "Ankin kaltaiset sovellukset"
  - "avoimen lähdekoodin vaihtoehto Ankille"
  - "ilmaiset Ankin vaihtoehdot"
  - "Ankin vaihtoehto iOS:lle"
  - "siirtyminen Ankista"
---

Anki-tuonti voi valmistua ilman virheitä ja silti viedä mukanaan juuri sen, mikä tekee pakastasi toimivan. Teksti siirtyy. Kortit avautuvat. Sitten huomaat, että CSS puuttuu, äänikenttä on tyhjä, kaikki kortit ovat uusia tai yhdestä muistiinpanosta ei enää synny kortteja odottamiisi kysymyssuuntiin.

Juuri näistä eroista voi koitua suurin kustannus Ankin vaihtoehtoja vertaillessa. Selkeämpi editori tai edullisempi tilaus on helppo huomata ennen vaihtoa. Korttipohjien toiminta, kertaushistoria, eräpäivät, lisäosat, median saatavuus ilman verkkoyhteyttä ja mahdollisuus viedä tiedot myöhemmin muualle tulevat usein tarkistetuiksi vasta vahingon tapahduttua.

Tämän vertailun lähtökohtana on se, mitä siirrossa säilyy ja mitä katoaa. Se käy läpi seitsemän Ankin kaltaista sovellusta: mitä kuhunkin voi siirtää olemassa olevasta kokoelmasta, mikä muuttuu tuonnin jälkeen ja milloin Ankissa pysyminen on turvallisempi ratkaisu.

> **Sidonnaisuus:** Olen Kirill Markin ja kehitän [Nibomoa](https://nibomo.com/), joka on yksi alla käsitellyistä tuotteista. Otin sen mukaan avoimen lähdekoodin, itseylläpidon ja agenttityönkulkujen vuoksi. Se ei voita vertailua automaattisesti: suoraa `.apkg`-tuontia ei ole, Anki-siirrossa menetetään tietoja ja itse ylläpidettävän kokonaisuuden pyörittäminen on oikeaa infrastruktuurityötä.

**Tiedot tarkistettu:** 28. elokuuta 2026. Hinnat ovat tuolloin julkisesti saatavilla olleita Yhdysvaltain hintoja tai ilmoitettuja paikallisia hintoja. Verot, alue, koulutustarjoukset ja sovelluskaupan laskutus voivat vaikuttaa summaan.

![Kelloseppä tarkistaa, sopiiko vanhan taskukellon koneisto toiseen kuoreen](/blog/best-anki-alternatives.png)

## Lyhyt vastaus ennen kuin siirrät mitään

Jatka lähtökohtaisesti Ankin käyttöä. Vaihda vain, jos toinen sovellus ratkaisee toistuvan ongelman, jonka poistaminen on siirron vaivan arvoista.

Kolme tuotetta ottaa vastaan Anki-paketteja oppimistietoineen, mutta niiden lupaukset ulottuvat eri asioihin:

- **Mnemosyne** dokumentoi täyden Anki-tuonnin, joka sisältää mukautetut korttityypit ja oppimistiedot. Se vastaa tämän vertailun tuotteista parhaiten perinteistä, paikallista ja avoimeen lähdekoodiin perustuvaa työpöytäkäyttöä, vaikka natiivia iOS-sovellusta ei ole.
- **Mochi** tuo `.apkg`-tiedostot kertaushistorioineen. Se muuntaa HTML:n Markdowniksi, poistaa CSS:n ja JavaScriptin sekä korvaa Ankin neljä kertauspainiketta vaihtoehdoilla Remembered ja Forgot.
- **RemNote** tuo `.apkg`-tiedostot, useimmat muistiinpanotyypit ja kertaushistorian. Sen nykyisen ohjeen mukaan tuodut kortit siirtyvät kuitenkin erilliseen **Need to Learn** -jonoon. Älä siis tulkitse kertaushistorian tuontia lupaukseksi siitä, että tämän päivän Anki-jono kopioituu täsmälleen.

Neljässä muussa vaihtoehdossa sisältö rakennetaan uudelleen sen sijaan, että koko kokoelma siirtyisi:

- **Quizlet** sopii julkisiin opiskelusarjoihin, opetusryhmiin, peleihin ja ohjattuun harjoitteluun.
- **Brainscape** tarjoaa ryhmälle yksinkertaisemman kertausmallin, jossa omaa varmuutta arvioidaan asteikolla 1–5.
- **SuperMemo** tarkoittaa siirtymistä sen omaan suljettuun menetelmään ja kurssivalikoimaan.
- **Nibomo** tarjoaa MIT-lisensoidut verkko- ja natiivisovellukset, itse ylläpidettävän taustajärjestelmän sekä API- ja MCP-yhteydet. Sen TXT- tai CSV-työnkulkuun kuuluu tulosten tarkistaminen, eikä se säilytä Ankin oppimistilaa.

Jos korttisi ovat riippuvaisia tarkasta ulkoasusta, lisäosista tai nykyisestä kertausjonosta, Ankissa pysyminen on harkittu vastaus.

## Selvitä ensin, mitä Anki-kokoelmassasi oikeastaan on

Pakka ei ole yksi sellaisenaan siirrettävä kokonaisuus. Erottele siirrettävät osat ennen tuotteiden vertailua.

| Kokoelman osa | Mitä Anki voi sisällyttää pakettiin | Mitä kohdesovelluksen on nimenomaisesti tuettava |
| --- | --- | --- |
| **Muistiinpanojen sisältö** | Tekstikentät ja tallennettu HTML | Kenttien vastaavuudet, aukkotehtävät, muut kuin latinalaiset kirjoitusjärjestelmät, koodi ja rivinvaihdot |
| **Korttien muodostaminen** | Muistiinpanotyypit ja korttipohjat | Kortit molempiin kysymyssuuntiin, mukautetut kentät sekä CSS:n ja JavaScriptin toiminta |
| **Media** | Paikalliset kuvat, äänet ja muut tiedostot, kun **Include media** on valittuna | Tiedostojen purkaminen, viittaukset, tuetut tiedostomuodot ja synkronointi laitteiden välillä |
| **Järjestely** | Pakat, alipakat, tunnisteet ja valinnaiset pakkojen asetusprofiilit | Hierarkia, tunnisteiden merkitys, asetusprofiilit ja opiskeltavan sisällön rajaukset |
| **Oppimistila** | Ajoitustiedot ja kertaushistoria, jos ne sisällytetään vientiin | Eräpäivät, kertausvälit, unohdukset ja muunnos kohdesovelluksen ajoitusalgoritmiin |
| **Työnkulkuja ohjaava koodi** | Lisäosia ei sisällytetä pakkatiedostoon | Korvaavat toiminnot korttiselaimen työkaluille, erämuokkauksille, muistiinpanojen luomiselle ja muille lisäosien tehtäville |

[Ankin vientiohje](https://docs.ankiweb.net/exporting.html) kuvaa kaikki nämä paketin vaihtoehdot. Tekstimuotoinen tuonti kattaa vain taulukon ensimmäisen rivin ja mahdollisesti tunnisteet. Suora `.apkg`-tuonti voi kattaa enemmän, mutta jokainen tuote päättää itse, mitä se muuntaa ja mitä jättää pois.

Siksi ilmaus ”tukee Anki-tuontia” on liian epämääräinen vaihtopäätöksen pohjaksi. Kysy kolme erillistä kysymystä:

1. **Tarkoittaako kortti edelleen samaa?** Tarkista kentät, muodostettujen korttien kysymyssuunnat, aukkotehtävät, media ja ulkoasu.
2. **Tietääkö kohdesovellus, mitä olen oppinut?** Tarkista kertaustapahtumat, nykyinen tila, eräpäivät ja ensimmäinen todellinen kertausjono.
3. **Pääsenkö siirtämään tiedot myöhemmin taas muualle?** Vie tiedot kohdesovelluksesta ja tarkista, mitä vientimuoto oikeasti sisältää.

Tuonti voi läpäistä ensimmäisen kohdan ja epäonnistua kahdessa muussa.

## Mitä siirrossa säilyy

| Tuote | Tuontitapa Ankista | Oppimistila | Mitä mahdollista menetystä on erityisesti testattava |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Suora `.apkg`-tuonti](https://help.remnote.com/en/articles/6751471-importing-from-anki) useimmille muistiinpanotyypeille, medialle ja kertaushistorialle | Kertaushistoria siirtyy, mutta tuodut kortit päätyvät RemNoten erilliseen **Need to Learn** -jonoon | Laajat CSS-muotoilut, mukautettu JavaScript, osa käytön aikana tuotetusta puhesynteesistä ja uudelleennimetyt kuvapeittokentät |
| [Mochi](https://mochi.cards/) | [Suora `.apkg`-tuonti](https://mochi.cards/docs/import-and-export/importing/) kertaushistorioineen | Historia siirtyy; ohjeet eivät lupaa samaa jonoa tai samoja eräpäiviä kuin Ankissa | HTML muuttuu Markdowniksi; CSS ja JavaScript poistetaan; jatkossa käytössä on vain kaksi arviota |
| [Mnemosyne](https://mnemosyne-proj.org/) | Projekti dokumentoi [täyden Anki-tuonnin](https://mnemosyne-proj.org/features), joka sisältää mukautetut korttityypit ja oppimistiedot | Oppimistiedot tuodaan eri ajoitusalgoritmiin | Korttipohjien tarkka toiminta, muunnetut eräpäivät ja korttien ulkoasu pitää silti testata |
| [Quizlet](https://quizlet.com/) | [Termien ja määritelmien liittäminen](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Ei mitään Ankista | Muistiinpanotyypit, korttipohjat, pakat, median rakenne ja kaikki ajoitustiedot |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX tai ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Ei mitään Ankista | Korttipohjat, lisäosat, median käsittelysäännöt ja kaikki ajoitustiedot |
| [SuperMemo](https://www.supermemo.com/) | [Erottimilla jäsenneltyjen kysymys–vastausrivien liittäminen](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), enintään 100 kerrallaan | Ei mitään Ankista | Kokoelman rakenne, media, korttipohjat ja kaikki ajoitustiedot |
| [Nibomo](https://nibomo.com/) | Tekoälyavusteinen luonnostelu Ankin TXT- tai CSV-tiedostosta ja luonnosten tarkistaminen | Ei mitään Ankista | Ei `.apkg`-tukea; korttipohjat, median tarkka esitystapa, pakkahierarkia ja kaikki ajoitustiedot jäävät pois |

## Hinta, offline-käyttö, ajoitus ja omistajuus

| Tuote | Hinta tarkistettu 28.8.2026 | Offline-käytön rajat | Ajoitusalgoritmi | Lähdekoodi ja itseylläpito |
| --- | --- | --- | --- | --- |
| **RemNote** | [Ilmainen; Pro 8 $/kk, laskutus 96 $/vuosi](https://www.remnote.com/pricing) | Asennetut sovellukset tukevat muokkaamista ja kertaamista offline-tilassa kirjautumisen jälkeen. Työpöytäsovellus säilyttää kaiken tietokannan median; mobiili tallentaa välimuistiin vain osan viimeaikaisista kuvista. Verkkoversio tarvitsee valmiiksi avoimen välilehden. | [Anki SM-2 tai beetavaiheessa oleva FSRS v6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Suljettu ydinsovellus; tuettua itseylläpitotapaa ei ole dokumentoitu |
| **Mochi** | [Offline-käyttö ilmaista; Pro-synkronointi 5 $/kk](https://mochi.cards/#pricing-section) | Asennetut sovellukset toimivat kokonaan offline-tilassa ilman tiliä. Selaimen tallennustila voi tyhjentyä. | [Mochin oma algoritmi tai FSRS](https://mochi.cards/docs/reviewing/fsrs/), molemmissa Remembered / Forgot | Suljettu ydinsovellus; julkisissa repositorioissa on integraatioita, ei itse ylläpidettävää sovellusta |
| **Mnemosyne** | Ilmainen | [Paikallinen työpöytäkäyttö ja offline-kertaus Androidilla](https://mnemosyne-proj.org/download-mnemosyne.php); Androidilla ei voi muokata. Ei natiivia iOS-sovellusta. | Mukautuva ajoitus asteikolla 0–5 annettujen muistamisarvioiden perusteella | Komponenttikohtaiset lähdekoodilisenssit; itse ajettava synkronointipalvelin työpöytäkoneella tai ilman graafista käyttöliittymää |
| **Quizlet** | Peruskäyttö ilmaista; [Plus 35,99 $/vuosi, Plus Unlimited 44,99 $/vuosi](https://quizlet.com/upgrade?source=signup) | Ladatut sarjat toimivat offline-tilassa iOS- ja Android-sovellusten Flashcards- ja Match-toiminnoissa. | [Verkkoversion aikavälikertaus](https://quizlet.com/features/spaced-repetition) vähintään 100 termin sarjoille; mobiilituki on edelleen merkitty tulossa olevaksi. Learn on erillinen mukautuva harjoittelutoiminto. | Suljettu ylläpidetty palvelu; ei tuettua itseylläpitotapaa |
| **Brainscape** | [Ilmainen; Pro 7,99 $/kk vuosilaskutuksella](https://www.brainscape.com/pricing) | [Mobiilisovellus voi säilyttää offline-tilassa tehdyn työn ja synkronoida aiemmin ladatut kurssikokonaisuudet myöhemmin](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); ohjeet eivät lupaa koko kirjaston paikallista kopiota. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), arviointi 1–5 | Suljettu ylläpidetty palvelu; ei tuettua itseylläpitotapaa |
| **SuperMemo** | Ilmainen tili rajoituksin; [35,99 PLN/kk tai 359 PLN/vuosi](https://www.supermemo.com/en/premium-subscription) | Ladatut mobiilikurssit toimivat offline-tilassa; muokkaus, tekoäly, haku, tallenteet ja tilastot eivät. | [SuperMemon oma suljettu menetelmä](https://www.supermemo.com/en/supermemo-method) | Suljettu ylläpidetty palvelu; ei tuettua itseylläpitotapaa |
| **Nibomo** | [Ylläpidetyt ydintoiminnot ilmaisia beetavaiheessa; ohjelmisto ilmainen itse ylläpidettäväksi](/fi/pricing/), lisäksi omat infrastruktuurikulut | Natiivisovellukset tallentavat paikallisesti verkossa kirjautumisen ja työtilan ensilatauksen jälkeen; etämedian täytyy olla jo välimuistissa. | [FSRS](/docs/architecture/#scheduling) | MIT; tuettu tuotantoasennus on AWS-keskeinen kokonaisuus |

Näissä taulukoissa ei lasketa ominaisuuksista pisteitä. Suora tuonti voi olla kaikkia muita ominaisuuksia tärkeämpi, jos sinulla on 30 000 jo hyvin opittua korttia. Natiivi iPhone-sovellus voi ratkaista valinnan, jos kertaat sillä. Lähdekoodin saatavuudella on merkitystä vain, jos sinä tai joku, johon luotat, ylläpitää sitä.

Kaikkien tuotteiden käytön voi aloittaa ilmaiseksi, mutta ilmaiseen Ankin vaihtoehtoon siirtyminen ei ole ilmaista. Tilaushinta on helppo laskea. Korttipohjien uudelleenrakentaminen, median tarkistaminen ja kertaushistorian aloittaminen alusta maksavat usein enemmän.

## RemNote: kortit osaksi toisiinsa liittyviä muistiinpanoja

RemNote muuttaa korttien syntytapaa. Erillisen pakan ylläpitämisen sijaan luot kortteja suoraan luentomuistiinpanojen jäsennykseen, dokumenttiin tai PDF-työnkulkuun. Se on todellinen syy luopua Ankista, jos materiaalin kopiointi muistiinpano- ja muistikorttisovelluksen välillä on alkanut viedä liikaa aikaa.

Tuonti säilyttää paljon tietoja, mutta kertausjonon suhteen on oltava tarkkana. RemNoten [nykyinen Anki-tuontiohje](https://help.remnote.com/en/articles/6751471-importing-from-anki) neuvoo viemään `.apkg`-tiedoston, joka sisältää ajoitustiedot, pakkojen asetusprofiilit ja median. Mukana siirtyvät kertaushistoria ja useimmat muistiinpanotyypit, kuten peruskortit, aukkotehtävät ja tavalliset kuvapeittokortit.

Samassa ohjeessa sanotaan, että juuri tuodut kortit ohjataan erilliseen **Need to Learn** -jonoon. RemNotella on siis historia käytettävissään, mutta dokumentaatio ei lupaa nykyisen Anki-kertausjonosi ilmestyvän muuttumattomana. Laajat CSS-muotoilut jäävät myös pois, mukautettua JavaScriptiä ei tueta, osa käytön aikana tuotetusta puhesynteesistä ei toimi ja kuvapeittojen tuonti edellyttää odotettuja muistiinpano- ja kenttänimiä.

Tuo edustava pakka ja tarkista sekä kortit että ensimmäinen jono. Siistiltä näyttävä tuonti on vasta puolet testistä.

Asennetut työpöytä- ja mobiilisovellukset toimivat offline-tilassa asennuksen ja kirjautumisen jälkeen. [Offline-ohje](https://help.remnote.com/en/articles/6752029-offline-mode) tekee median kohdalla tärkeän eron: työpöytäsovellus tallentaa tietokannan kaikki kuvat ja PDF:t, mutta mobiilisovellus vain osan viimeaikaisista kuvista välimuistiin. Verkkosovelluksen käyttöä voi jatkaa jo avoimessa välilehdessä, mutta sitä ei voi avata alusta ilman verkkoyhteyttä.

Valitse RemNote, kun toisiinsa liittyvät muistiinpanot ovat kokoelman toimintamallin muuttamisen arvoisia. Pidä Anki, jos korttipohjat ja lisäosat muodostavat järjestelmäsi perustan.

## Mochi: paikallinen Markdown ja kattava vienti omassa tiedostomuodossa

Mochi on kevyempi vaihtoehto niille, jotka haluavat tallentaa tietonsa paikallisesti, kirjoittaa kortit Markdownilla ja nähdä ruudulla vähemmän säätimiä. Sen asennettavat sovellukset toimivat kaikilla keskeisillä työpöytä- ja mobiilialustoilla, ja niitä voi käyttää [kokonaan offline-tilassa ilman tiliä](https://mochi.cards/docs/getting-started/download-and-install/). Synkronointi on maksullinen osa, 5 dollaria kuukaudessa.

Suora Anki-tuonti siirtää kertaushistorian, mikä nostaa Mochin selvästi pelkkää tekstiä tukevien vaihtoehtojen edelle. Muunnos on myös poikkeuksellisen selkeästi kuvattu: Mochi poistaa CSS:n ja JavaScriptin sekä muuntaa HTML:n Markdowniksi. Se toimii, kun merkitys on tekstissä ja tavallisissa liitteissä. Jos merkitys riippuu korttipohjasta, tämä on varoitusmerkki.

Mochi tarjoaa nyt kaksi ajoitusalgoritmia. Sen oma algoritmi on edelleen oletus, mutta [FSRS:n voi ottaa käyttöön](https://mochi.cards/docs/reviewing/fsrs/) nollaamatta Mochissa jo kertynyttä edistymistä. FSRS laskee kortin tilan Mochin käytettävissä olevan kertaushistorian perusteella. Arvioinnissa on myös FSRS:n kanssa vain kaksi vaihtoehtoa, Remembered ja Forgot. Ankin käyttäjän, joka hyödyntää Hard- ja Easy-arvioita erillisinä signaaleina, kannattaa siis varautua erilaiseen päivittäiseen rytmiin.

Tietojen vienti ulos on selkeämpää kuin useimmissa suljetuissa sovelluksissa. Mochin oma [`.mochi`-vienti](https://mochi.cards/docs/import-and-export/exporting/) sisältää kortit, korttipohjat, liitteet, tunnisteet, pakkarakenteen ja kertaushistorian. Markdownia ja CSV:tä on helpompi tarkastella muualla, mutta niistä jäävät pois kertaushistoria ja muut metatiedot.

Mochin julkisissa GitHub-repositorioissa on [integraatioita ja niihin liittyviä työkaluja](https://github.com/mochi-cards/open-source), ei ydinsovellusta tai tuettua synkronointipalvelinta. Valitse se offline-käytön ja tietojen siirrettävyyden vuoksi, älä siksi, että haluaisit hallita sovelluksen lähdekoodia.

## Mnemosyne: avoimen lähdekoodin työpöytävaihtoehto

Mnemosyne on lähimpänä perinteistä ohjelman ja paikallisen tietokannan mallia. Nykyinen versio tukee Windowsia, macOS:ää ja Linuxia, ja Android-sovelluksella voi kerrata offline-tilassa. Ominaisuussivu kuvaa monipuoliset kortit, hierarkkiset tunnisteet, lisäosat, kertausasteikon 0–5 sekä täyden Anki-tuonnin mukautettuine korttityyppeineen ja oppimistietoineen.

Tämä on vertailun suoraviivaisin avoimen lähdekoodin siirtovaihtoehto, kun haluat pois Ankista siirtymättä laajaan muistiinpanojärjestelmään tai pilvipalveluun. Siinä on myös [sisäänrakennettu synkronointipalvelin](https://mnemosyne-proj.org/help/syncing), jota voi ajaa työpöytäkoneella tai ilman graafista käyttöliittymää ja joka yhdistää oppimistiedot useista asiakassovelluksista.

Myös rajoitukset on otettava huomioon valinnassa. Android-sovelluksella [ei voi muokata kortteja](https://mnemosyne-proj.org/help/android-client). iOS-käyttäjien on kerrattava toisella koneella toimivan selainpalvelimen kautta, ja sen virallisella ominaisuussivulla varoitetaan tietoturvaominaisuuksien puuttumisesta. Oman synkronointipalvelimen ylläpito tarkoittaa myös palvelimen pitämistä tavoitettavana, verkon määrittämistä ja tietohakemiston varmuuskopiointia.

Pelkkä ”GPL” ei kuvaa lisensointia riittävän tarkasti: [projektin lisenssitiedosto](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) viittaa komponenttikohtaisiin ehtoihin. [Ytimen lisenssi](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) on AGPL v3, johon liittyy nimeä ja tekijän mainitsemista koskeva lisäehto, kun taas [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) käyttää LGPL v3:a. Lue tiedostot, jos aiot muokata tai jakaa ohjelmistoa edelleen.

## Quizlet: vaihda opetuskäytön vuoksi, varaudu kokoelman muutoksiin

Quizletin vahvuudet ovat opetuskäytössä. Julkiset opiskelusarjat, opettajien ryhmät, jakaminen, Match, Test, Learn ja ryhmätehtävät on helpompi antaa luokan käyttöön kuin mukautettu Anki-profiili.

Siirron raja kulkee pelkässä tekstissä. Quizlet voi muuttaa liitetyt rivit termeiksi ja määritelmiksi, mutta se ei lue `.apkg`-tiedostoa ja palauta muistiinpanotyyppejä, korttipohjia, ajoitusta tai kertaushistoriaa. Tekijät voivat [viedä omat sarjansa kopioitavana tekstinä](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) ilman kuvia; muilta käyttäjiltä kopioituja sarjoja ei voi viedä. Sisältö on siis siirrettävissä, koko kokoelma ei.

Quizletin ajoitusominaisuudet muuttuvat. Sen uusi [Spaced Repetition](https://quizlet.com/features/spaced-repetition) -toiminto aktivoituu verkkoversiossa automaattisesti vähintään 100 termin sarjoille ja käyttää arvioita Repeat, Hard, Okay ja Easy. Quizlet ilmoittaa mobiilituen olevan yhä tulossa. Learn on edelleen erillinen mukautuvan harjoittelun toiminto, jonka käyttörajat riippuvat tilauksesta.

Offline-käyttökin tarkoittaa mobiilisovelluksia. Verkkosivusto ei toimi ilman yhteyttä. Quizlet tallentaa automaattisesti kahdeksan viimeaikaista sarjaa ja antaa ladata lisää. [Flashcards ja Match toimivat offline-tilassa](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), ja edistyminen synkronoituu yhteyden palattua.

Siirry tänne, kun tavoitteena on materiaalin jakelu ja toiminta opetuksessa. Pitkään kehittyneen henkilökohtaisen kertausaikataulun rakentaminen uudelleen vain näiden ominaisuuksien vuoksi on yleensä huono vaihtokauppa.

## Brainscape: vähemmän ajoitusvalintoja, vähemmän siirtyviä tietoja

Brainscape pyytää arvioimaan varmuutesi asteikolla 1–5 ja tuo tämän tiedon perusteella heikosti osatut kortit takaisin nopeammin. Koko laskentakaavaa ei ole julkaistu, mutta käyttötapa on helppo opettaa yhteiselle ryhmälle.

Se hyväksyy CSV-, TXT-, XLSX- ja ODS-tiedostoja. Tämä sopii hyvin etu- ja kääntöpuolesta koostuviin kortteihin, mutta korttipohjat, lisäosat, median käsittelysäännöt ja Ankin oppimistiedot jäävät pois. Oman varmuuskopion vienti on Pro-ominaisuus. Se tuottaa tiedostoja, jotka voi avata taulukkolaskentaohjelmassa ja tuoda myöhemmin takaisin.

Brainscapen nykyisen ohjekeskuksen mukaan verkkosivustolla ja mobiilisovelluksissa on nyt samat keskeiset haku-, luonti-, jako- ja opiskelutoiminnot. Ohjeet kuvaavat myös mobiilikäyttöä offline-tilassa, manuaalista uudelleensynkronointia ja laitteelle jo ladattujen kurssikokonaisuuksien päivittämistä. Näin työskentelyä voi jatkaa yhteyden katkettua ja tiedot synkronoida myöhemmin, mutta ohjeet eivät lupaa koko tilin kattavaa paikallista kirjastoa.

Omien pakkojen vienti on edelleen [Pro-ominaisuus](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Virallista lähdekoodijulkaisua tai itseylläpitotapaa ei ole.

Brainscapea kannattaa harkita, kun Anki tuntuu liian työläältä säädettäväksi niille, joiden pitäisi opiskella. Se ei ole hyvä poistumisreitti ihmiselle, joka osaa jo hyödyntää Ankin asetuksia.

## SuperMemo: valitse menetelmä ja hyväksy uusi alku

Nykyinen SuperMemo.com-palvelu on verkossa, iOS:llä ja Androidilla toimiva kieltenoppimisalusta, joka perustuu SuperMemon omaan suljettuun ajoitusmenetelmään. Se on erillinen tuote vanhasta Windows-ohjelmasta, jonka pitkäaikaiset SuperMemo-käyttäjät saattavat tuntea.

Päätös koskee menetelmää ja kurssivalikoimaa, ei saumatonta Anki-siirtoa. SuperMemo tukee [korttien joukkoluontia liittämällä erottimilla jäsenneltyjä kysymys–vastausrivejä](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), enintään 100 korttia kerralla. En löytänyt ylläpidetylle palvelulle nykyistä virallista `.apkg`-tuontia tai käyttäjän tietojen vientitapaa. Korttipohjat, lisäosat, median rakenne ja kertaushistoria eivät siis siirry dokumentoitua reittiä pitkin.

Ladattuja kursseja voi opiskella mobiilisovelluksissa offline-tilassa. [Offline-ohje](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) rajaa ulkopuolelle tekoälyominaisuudet, MemoCards-korttien lisäämisen, haun, tallenteet, tilastot ja kurssieditorin. Valmistele siis aineisto ja synkronoi ennen yhteyden katkaisemista.

Valitse SuperMemo, jos haluat sen oman menetelmän tai kurssivalikoiman niin vahvasti, että olet valmis aloittamaan kertausaikataulun alusta. Jos tärkeintä on nykyisen aikataulun säilyttäminen, se ratkaisee väärää ongelmaa.

## Nibomo: koko järjestelmän lähdekoodi, mutta heikoin Anki-tuonti

Nibomossa voit hallita laajaa osaa järjestelmästä itse. [MIT-lisensoitu repositorio](https://github.com/kirill-markin/flashcards-open-source-app) sisältää verkkosovelluksen, iOS- ja Android-sovellukset, taustajärjestelmän, offline-synkronoinnin, infrastruktuurin, [julkisen API:n](/docs/api/) ja [MCP-palvelimen](/docs/mcp-connector/). Kertaus käyttää [FSRS:ää](/docs/architecture/#scheduling). Verkko-, iOS- ja Android-sovellukset tallentavat ensin paikallisesti, lisäävät muutokset lähetysjonoon ja synkronoivat yhteyden palattua.

Tämä ei tee siitä Anki-yhteensopivaa. Nibomo ei osaa lukea `.apkg`- tai `.colpkg`-tiedostoja. Tuettu [siirto Ankin TXT-viennistä](/blog/migrate-from-anki-txt-export-open-source-flashcards/) perustuu pääosin tekstipohjaisten korttien tekoälyavusteiseen luonnosteluun ja luonnosten tarkistamiseen. Se ei säilytä korttipohjia, lisäosia, pakkahierarkiaa, eräpäiviä, kertausvälejä tai kertaustapahtumia. TXT-tiedoston mediaviittaukset eivät ole mediatiedostoja, joten paljon mediaa sisältävät pakat vaativat erillistä uudelleenrakentamista ja tarkistamista.

Myös Nibomon oma `flashcards.zip`-paketti on varmuuskopiota suppeampi. Se siirtää kortit, tunnisteet ja niihin liittyvän median Nibomon työtilojen välillä. Se ei siirrä kertaushistoriaa, FSRS-tilaa, kokonaisia pakkarakenteita, työtilan asetuksia tai tilejä.

Ylläpidetyt ydintoiminnot ovat [ilmaisia beetavaiheessa](/fi/pricing/). Tuotantokokonaisuuden itseylläpito ei ole yhden komennon Docker-asennus: [itseylläpito-ohje](/docs/self-hosting/) käyttää AWS CDK:ta ja edellyttää AWS-palvelujen lisäksi Cloudflarea, Resendiä, Sentryä, salaisuuksien hallintaa, migraatioita, varmuuskopioita, palautuksia ja päivityksiä. Docker Compose on kehityskäytön ratkaisu, ei tuettu tuotantoasennus.

Käytä Nibomoa, kun syy vaihtoon on koko lähdekoodin saatavuus ja ylläpitäjän hallitsema taustajärjestelmä, ja korttisi ovat riittävän yksinkertaisia rakennettaviksi turvallisesti uudelleen. [Avaa ylläpidetty sovellus](https://app.nibomo.com/) ja kokeile pientä väliaikaista pakkaa. Pidä Anki tai testaa RemNotea, Mochia tai Mnemosynea, kun oppimistilan säilyminen on etusijalla.

## Mikä Ankin vaihtoehto toimii iOS:llä ilman ikävää siirtoyllätystä?

”Ankin vaihtoehto iOS:lle” voi tarkoittaa kahta asiaa: natiivia iPhone-sovellusta tai korvaajaa [AnkiMobilen 24,99 dollarin kertamaksulle](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNotella, Mochilla, Quizletillä, Brainscapella, SuperMemolla ja Nibomolla on kaikilla iOS-sovellukset. Mnemosynella ei ole. Jäljelle jää silti kysymys tietojen siirrosta:

- **Mochi** säilyttää enemmän kuin pelkkää tekstiä tuovat iOS-vaihtoehdot: se tuo `.apkg`-tiedoston kertaushistorian, mutta muuntaa sisällön Markdowniksi ja käyttää kaksivaihtoehtoista arviointia.
- **RemNote** tuo myös `.apkg`-tiedoston kertaushistorian, mutta testaa sen **Need to Learn** -jono sen sijaan, että olettaisit nykyisen Anki-aikataulusi säilyvän.
- **Quizlet** sopii materiaalin jakamiseen opetuksessa, mutta Anki-siirto käsittää vain tekstin eikä uusi aikavälikertaus ole vielä mobiilissa.
- **Nibomo** tarjoaa lähdekoodin ja natiivin iOS-sovelluksen, mutta Anki-siirto nollaa oppimistilan.
- **Brainscape** ja **SuperMemo** ovat järkeviä vain, jos niiden kertausmenetelmä on korttien ja aikataulun uudelleenrakentamisen arvoinen.

Ennen kuin luovut AnkiMobilesta hinnan vuoksi, vertaa hintaa tilauksen kustannuksiin ja siirron korjaamiseen tarvittaviin tunteihin. Kertamaksullinen sovellus voi tulla halvemmaksi kuin ilmainen sovellus, joka muuttaa vuosien aikana kehittyneen kokoelman käsin korjattavaksi projektiksi.

## Milloin Ankissa pysyminen on turvallisempaa

Pysyminenkin on päätös. Se ei tarkoita, ettet olisi osannut valita uudempaa tuotetta. Pidä Anki, jos jokin seuraavista pätee:

- kokoelmasi riippuu mukautetuista korttipohjista, CSS:stä, JavaScriptistä tai lisäosista;
- Image Occlusion, ääni tai muu media välittää olennaista sisältöä;
- yksi muistiinpano tuottaa useita eri kysymyssuuntien kortteja, joiden on pysyttävä yhteydessä toisiinsa;
- vuosien kertaushistoria ja nykyiset eräpäivät ovat arvokkaampia kuin uusi editori;
- tukeudut työpöytätyönkulkuun tai alustayhdistelmään, jota vaihtoehto ei vastaa;
- korvaavan sovelluksen offline-tila toimii vain käyttöympäristössä, jota et aio käyttää;
- haluat itseylläpitoa teoriassa, mutta et halua ylläpitää, suojata, varmuuskopioida ja päivittää palvelinta;
- vaihtoehto näyttää siistimmältä, mutta ei ratkaise mitään toistuvaa ongelmaa.

Anki tarjoaa edelleen pitkälle kehittyneen lisäosaekosysteemin, joustavat muistiinpano- ja korttipohjat, FSRS:n ja vanhempien ajoitusalgoritmien säädöt, paikalliset asennettavat sovellukset sekä kokoelman siirtämiseen soveltuvat pakettimuodot. Yksikään yllä käsitelty tuote ei tarjoa tätä kaikkea.

Jos haluat tarkemman vertailun siitä, mitä saat itse hallintaasi, lue [avoimen lähdekoodin muistikorttisovellusten opas](/blog/best-open-source-flashcard-apps-2026/). Jos offline-käyttö ratkaisee, [offline-muistikorttisovellusten vertailu](/blog/best-offline-flashcards-app/) erottaa toisistaan asennetut sovellukset, välimuistiin tallennetun sisällön ja selaimen välilehdet.

## Siirron tarkistuslista, jonka lopputulos voi olla myös ”ei”

Älä aloita koko kokoelmastasi. Rakenna testi, joka saa epäonnistua.

1. **Luo palautuspaketti.** Vie `.colpkg` medioineen, tallenna se Anki-profiilin ulkopuolelle ja säilytä toinen kopio muualla.
2. **Valitse hankala pakka.** Ota mukaan aukkotehtäviä, mukautettuja kenttiä, kortteja molempiin kysymyssuuntiin, sisäkkäisiä pakkoja, tunnisteita, kuvia, ääntä ja riittävästi kertaushistoriaa, jotta ajoituksen muunnos tulee näkyviin.
3. **Vie muodossa, jota kohde oikeasti tukee.** Käytä suorassa tuonnissa `.apkg`-tiedostoa, jossa ovat mukana ajoitus, asetusprofiilit ja media. Käytä Notes in Plain Text -vaihtoehtoa vain, jos hyväksyt pelkän sisällön uudelleenrakentamisen.
4. **Kirjaa lähtötilanne.** Merkitse muistiin muistiinpanojen ja korttien määrät, tunnisteiden ja pakkojen nimet, mediatiedostojen määrä, muutama eräpäivä ja kertausväli sekä odotettu korttimäärä kustakin muistiinpanotyypistä.
5. **Tuo väliaikaiseen tilaan.** Älä ylikirjoita lähdeprofiilia tai yhdistä ensimmäistä testiä kohdesovelluksen pysyvään kirjastoon.
6. **Tarkista sisältö ja oppimistila erikseen.** Oikea etu- ja kääntöpuoli eivät todista, että aukkotehtävät, media, samasta muistiinpanosta syntyneet sisarkortit, kertaushistoria tai seuraava eräpäivä säilyivät.
7. **Avaa sovellus alusta offline-tilassa jokaisella oikeasti käyttämälläsi laitteella.** Kertaa, muokkaa, sulje sovellus kokonaan ja avaa se uudelleen ilman verkkoyhteyttä. Palauta sitten yhteys ja tarkista toinen laite.
8. **Tarkkaile jonoa ennen kuin aikataulut erkanevat.** Vertaa ensimmäisiä kerrattaviksi erääntyviä kortteja ja joitakin kertausvälejä ennen kuin arvioit samoja varsinaisessa käytössä olevia kortteja molemmissa sovelluksissa. Ensimmäisestä muualla tehdystä kertauksesta lähtien aikataulut ovat itsenäisiä.
9. **Testaa ulospääsy ennen sitoutumista.** Vie tiedot kohdesovelluksesta ja tarkista, mitä saisit palautettua, jos jättäisit sen ensi vuonna.
10. **Säilytä Anki ja koskematon varmuuskopio.** Älä poista kumpaakaan ennen kuin korvaava sovellus on kestänyt tavallista käyttöä ja olet tietoisesti hyväksynyt kaikki menetykset.

Jos kohde hyväksyy vain tekstiä, noudata koko [turvallisen TXT-viennin työnkulkua](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Se erottaa palautukseen tarkoitetun `.colpkg`-tiedoston siirrettävästä työtiedostosta ja tekee oppimistilan nollautumisen selväksi.

## Tee päätös tässä järjestyksessä

Aloita siitä, mitä sinulla ei ole varaa menettää:

1. Jos täsmälliset korttipohjat, lisäosat tai nykyinen jono ovat välttämättömiä, pidä Anki, ellei edustavalla `.apkg`-tiedostolla tehty testi osoita muuta.
2. Jos muistiinpanojen ja korttien pitäisi muodostaa yksi järjestelmä, testaa RemNotea. Tarkista **Need to Learn** -jono, älä vain tuotuja sivuja.
3. Jos paikallinen Markdown ja tarkasteltavat vientitiedostot ovat tärkeämpiä kuin Ankin esitystapa, testaa Mochia.
4. Jos haluat rajattuun tehtävään keskittyvän avoimen lähdekoodin työpöytäsovelluksen suoralla Anki-tuonnilla, testaa Mnemosynea ja varmista, että sen mobiilirajoitukset sopivat arkeesi.
5. Jos varsinainen ongelma on materiaalin jakelu opetuksessa tai tarve yksinkertaisemmalle yhteiselle kertaustavalle, rakenna pieni sarja uudelleen Quizletissä tai Brainscapessa.
6. Jos haluat nimenomaan SuperMemon menetelmän, hyväksy uusi kertausaikataulu. Jos haluat nimenomaan koko järjestelmän lähdekoodin, itseylläpidon sekä API- ja MCP-yhteydet, hyväksy Nibomon sisällön uudelleenrakentamiseen liittyvät tietojen menetykset ja ylläpitotyö.

Kolmen hyvin erilaisen mallin ominaisuuskohtainen vertailu löytyy artikkelista [Anki, Quizlet ja Nibomo vertailussa](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Hyödyllinen sääntö on yksinkertainen: vaihda, kun hyöty on konkreettinen ja olet testannut käytännössä, että voit hyväksyä menetykset. Jos edustava pakkasi ei siirry kunnolla, Ankissa pysyminen on vertailun tulos.
