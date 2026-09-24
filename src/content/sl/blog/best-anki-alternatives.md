---
title: "Alternative Ankiju v letu 2026: kaj ob menjavi ohranite, izgubite in pridobite"
description: "Primerjajte sedem alternativ Ankiju: ohranitev podatkov pri prenosu, delo brez povezave, razporejanje, cene, dostop do kode in lastno gostovanje. Kdaj je varneje ostati pri Ankiju?"
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternative Ankiju"
  - "alternativa Ankiju"
  - "aplikacije, podobne Ankiju"
  - "odprtokodna alternativa Ankiju"
  - "brezplačne alternative Ankiju"
  - "alternativa Ankiju za iOS"
  - "prehod z Ankija"
---

Uvoz iz Ankija se lahko konča brez napake, pa vseeno odstrani prav tisto, zaradi česar vaš komplet kartic deluje. Besedilo se prenese. Kartice se odprejo. Nato opazite, da manjka CSS, da je zvočno polje prazno, da so vse kartice nove ali da iz enega zapisa ne nastajajo več kartice v pričakovanih smereh.

Prav te izgube vas lahko pri menjavi Ankija drago stanejo. Preglednejši urejevalnik ali cenejšo naročnino zlahka opazite pred menjavo. Kako delujejo predloge, kaj se zgodi z zgodovino ponavljanja, roki, dodatki in predstavnostnimi datotekami brez povezave ter kako podatke spet izvoziti, pogosto ugotovite šele, ko je škoda že narejena.

Ta primerjava se začne pri teh omejitvah. Obravnava sedem aplikacij, podobnih Ankiju: kaj lahko vsaka prevzame iz obstoječe zbirke, kaj se po uvozu spremeni in kdaj je varneje ostati pri Ankiju.

> **Razkritje:** Sem Kirill Markin in razvijam [Nibomo](https://nibomo.com/), enega od spodnjih izdelkov. Vključil sem ga zaradi odprte kode, možnosti lastnega gostovanja in dela z agenti. Ni samodejni zmagovalec: nima neposrednega uvoza `.apkg`, pri prenosu iz Ankija se del podatkov izgubi, upravljanje celotnega sistema na lastni infrastrukturi pa zahteva precej dela z infrastrukturo.

**Dejstva preverjena:** 28. avgusta 2026. Cene so javno objavljene ameriške ali navedene lokalne cene, ki so veljale na ta dan. Davki, regija, izobraževalne ponudbe in obračunavanje prek trgovin z aplikacijami lahko znesek spremenijo.

![Urar preverja, ali bo utečen mehanizem žepne ure ustrezal drugemu ohišju](/blog/best-anki-alternatives.png)

## Kratek odgovor, preden kar koli prenesete

Praviloma ostanite pri Ankiju. Zamenjajte ga le, če druga aplikacija odpravi ponavljajočo se težavo, zaradi katere je prenos vreden truda.

Trije izdelki sprejemajo Ankijeve pakete s podatki o učenju, vendar vsak zagotavlja drugačen obseg prenosa:

- **Mnemosyne** v dokumentaciji navaja popoln uvoz iz Ankija z vrstami kartic po meri in podatki o učenju. Med tukajšnjimi možnostmi je najbližje tradicionalnemu lokalnemu delu v odprtokodni namizni aplikaciji, čeprav nima namenske aplikacije za iOS.
- **Mochi** uvaža datoteke `.apkg` z zgodovino ponavljanja. HTML pretvori v Markdown, odstrani CSS in JavaScript ter Ankijeve štiri gumbe za ocenjevanje zamenja z Remembered (Spomnil sem se) in Forgot (Pozabil sem).
- **RemNote** uvaža datoteke `.apkg`, večino vrst zapisov in zgodovino ponavljanja. Njegova trenutna navodila tudi pravijo, da uvožene kartice pristanejo v ločeni čakalni vrsti **Need to Learn** (Treba se je naučiti). Zato »uvožena zgodovina ponavljanja« ne pomeni »natančno prekopirana današnja Ankijeva čakalna vrsta«.

Pri preostalih štirih gre za ponovno sestavljanje vsebine, ne za prenos celotne zbirke:

- **Quizlet** je uporaben za javne zbirke, razrede, igre in vodeno vajo.
- **Brainscape** skupini ponuja preprostejše ponavljanje z ocenjevanjem prepričanosti v svoje znanje od 1 do 5.
- **SuperMemo** pomeni prehod na njegovo lastniško metodo in katalog tečajev.
- **Nibomo** ponuja spletno aplikacijo in namenske odjemalce pod licenco MIT, zaledni sistem na lastni infrastrukturi ter dostop prek API-ja in MCP-ja. Njegov postopek s TXT ali CSV, ki vključuje pregled vsebine, ne ohrani Ankijevega stanja učenja.

Če so vaše kartice odvisne od natančnega prikaza, dodatkov ali trenutne čakalne vrste za ponavljanje, odločitev, da ostanete pri Ankiju, ni neodločnost. Je odgovor.

## Najprej preštejte, kaj vaša zbirka v Ankiju sploh vsebuje

»Komplet kartic« ni en sam prenosljiv predmet. Pred primerjavo izdelkov ločite sestavine, ki bi jih morda prenesli.

| Del zbirke | Kaj lahko Anki vključi v paket | Kaj mora ciljna aplikacija izrecno podpirati |
| --- | --- | --- |
| **Vsebina zapisov** | Besedilna polja in shranjeni HTML | Preslikavo polj, naloge z izpuščenim besedilom, nelatinične pisave, kodo in prelome vrstic |
| **Ustvarjanje kartic** | Vrste zapisov in predloge kartic | Kartice v obeh smereh, polja po meri ter delovanje CSS-ja in JavaScripta |
| **Predstavnostne datoteke** | Lokalne slike, zvok in druge datoteke, ko je vključena možnost **Include media** (Vključi predstavnostne datoteke) | Razširjanje stisnjenih datotek iz paketa, sklice, podprte oblike in sinhronizacijo med napravami |
| **Organizacija** | Komplete, podkomplete, oznake in po želji prednastavitve kompletov | Hierarhijo, pomen oznak, prednastavitve in izbor gradiva za učenje |
| **Stanje učenja** | Podatke o razporejanju in zgodovino ponavljanja, če jih vključite | Roke, intervale, primere pozabljenih odgovorov pri že naučenih karticah in pretvorbo v ciljni algoritem razporejanja |
| **Koda za podporo delu** | Dodatki niso vključeni v paket kartic | Nadomestilo za orodja pregledovalnika, množično urejanje, ustvarjanje zapisov in druge funkcije dodatkov |

[Ankijev priročnik za izvoz](https://docs.ankiweb.net/exporting.html) opisuje vse te možnosti paketov. Uvoznik besedila vidi le prvo vrstico tabele in morda še oznake. Neposredni uvoznik `.apkg` lahko vidi več, vendar se vsak izdelek sam odloči, kaj bo pretvoril in kaj zavrgel.

Zato je trditev »uvaža iz Ankija« preveč ohlapna za odločitev o menjavi. Zastavite tri ločena vprašanja:

1. **Ali kartica še vedno pomeni isto?** Preverite polja, smeri ustvarjenih kartic, izpuščeno besedilo, predstavnostne datoteke in prikaz.
2. **Ali ciljna aplikacija ve, kaj sem se že naučil?** Preverite posamezna ponavljanja, trenutno stanje, roke in prvo dejansko čakalno vrsto.
3. **Ali lahko spet odidem?** Izvozite podatke iz ciljne aplikacije in preverite, kaj izvozna oblika dejansko vsebuje.

Uvoznik lahko opravi prvi preizkus, pri drugih dveh pa odpove.

## Kaj se pri prenosu ohrani

| Izdelek | Pot uvoza iz Ankija | Stanje učenja | Glavna izguba, ki jo je treba preveriti |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Neposredni uvoz `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) za večino vrst zapisov, predstavnostne datoteke in zgodovino ponavljanja | Zgodovina se prenese, vendar uvožene kartice vstopijo v ločeno RemNotovo čakalno vrsto **Need to Learn** | Obsežen CSS, JavaScript po meri, del sproti ustvarjenega govora iz besedila in preimenovana polja za prekrivanje slik |
| [Mochi](https://mochi.cards/) | [Neposredni uvoz `.apkg`](https://mochi.cards/docs/import-and-export/importing/), vključno z zgodovino ponavljanja | Zgodovina se prenese; dokumentacija ne zagotavlja enake čakalne vrste ali rokov kot v Ankiju | HTML postane Markdown; CSS in JavaScript se odstranita; nadaljnje ocenjevanje ima dve možnosti |
| [Mnemosyne](https://mnemosyne-proj.org/) | Projekt navaja [popoln uvoz iz Ankija](https://mnemosyne-proj.org/features) z vrstami kartic po meri in podatki o učenju | Podatki o učenju se uvozijo v drug algoritem razporejanja | Natančno delovanje predlog, pretvorjene roke in prikaz kartic je še vedno treba preizkusiti |
| [Quizlet](https://quizlet.com/) | [Lepljenje izrazov in definicij](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Ni prenosa iz Ankija | Vrste zapisov, predloge, kompleti, struktura predstavnostnih datotek in vsi podatki o razporejanju |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX ali ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Ni prenosa iz Ankija | Predloge, dodatki, pravila za predstavnostne datoteke in vsi podatki o razporejanju |
| [SuperMemo](https://www.supermemo.com/) | [Lepljenje vrstic z vprašanji in odgovori, razmejenimi z ločilom](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), največ 100 naenkrat | Ni prenosa iz Ankija | Struktura zbirke, predstavnostne datoteke, predloge in vsi podatki o razporejanju |
| [Nibomo](https://nibomo.com/) | Priprava osnutkov iz Ankijevega TXT ali CSV s pomočjo umetne inteligence in pregledom vsebine | Ni prenosa iz Ankija | Ni podpore za `.apkg`; predloge, hierarhija kompletov in vsi podatki o razporejanju se ne prenesejo, predstavnostne vsebine pa se ne ohranijo v celoti |

## Cena, delo brez povezave, razporejanje in lastništvo

| Izdelek | Cena, preverjena 28. avgusta 2026 | Omejitve dela brez povezave | Razporejanje | Izvorna koda in lastno gostovanje |
| --- | --- | --- | --- | --- |
| **RemNote** | [Brezplačno; Pro 8 USD/mesec, obračunano kot 96 USD/leto](https://www.remnote.com/pricing) | Nameščene aplikacije po prijavi omogočajo urejanje in ponavljanje brez povezave. Namizna aplikacija hrani vse predstavnostne datoteke baze znanja; mobilna predpomni le nekatere nedavne slike. Spletna aplikacija potrebuje še vedno odprt zavihek. | [Anki SM-2 ali FSRS v6 v različici beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Lastniško jedro; dokumentacija ne navaja podprtega načina lastnega gostovanja |
| **Mochi** | [Brez povezave brezplačno; sinhronizacija Pro 5 USD/mesec](https://mochi.cards/#pricing-section) | Nameščene aplikacije delujejo povsem brez povezave in brez računa. Shramba brskalnika se lahko izbriše. | [Mochijev algoritem ali FSRS](https://mochi.cards/docs/reviewing/fsrs/), oba z Remembered / Forgot | Lastniško jedro; javni repozitoriji vsebujejo integracije, ne aplikacije za lastno gostovanje |
| **Mnemosyne** | Brezplačno | [Lokalno delo na namizju in ponavljanje brez povezave na Androidu](https://mnemosyne-proj.org/download-mnemosyne.php); Android ne omogoča urejanja. Ni namenske aplikacije za iOS. | Prilagodljivo razporejanje na podlagi ocen priklica od 0 do 5 | Licence izvorne kode se razlikujejo po komponentah; lasten sinhronizacijski strežnik na namiznem računalniku ali napravi brez grafičnega vmesnika |
| **Quizlet** | Osnovna uporaba brezplačna; [Plus 35,99 USD/leto, Plus Unlimited 44,99 USD/leto](https://quizlet.com/upgrade?source=signup) | Prenesene zbirke delujejo brez povezave v aplikacijah za iOS in Android v načinih Flashcards in Match. | [Časovno razmaknjeno ponavljanje na spletu](https://quizlet.com/features/spaced-repetition) za zbirke z vsaj 100 izrazi; mobilna podpora je še vedno označena kot prihajajoča. Learn je ločena prilagodljiva vaja. | Lastniška gostovana storitev; brez podprtega načina lastnega gostovanja |
| **Brainscape** | [Brezplačno; Pro 7,99 USD/mesec ob letnem obračunu](https://www.brainscape.com/pricing) | [Mobilna aplikacija lahko ohrani opravljeno delo brez povezave in pozneje sinhronizira že prenesene razrede](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); dokumentacija ne zagotavlja popolne lokalne knjižnice. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), ocene od 1 do 5 | Lastniška gostovana storitev; brez podprtega načina lastnega gostovanja |
| **SuperMemo** | Brezplačen račun z omejitvami; [35,99 PLN/mesec ali 359 PLN/leto](https://www.supermemo.com/en/premium-subscription) | Preneseni tečaji v mobilnih aplikacijah delujejo brez povezave; urejanje, umetna inteligenca, iskanje, snemanje in statistika ne. | [Lastniška metoda SuperMemo](https://www.supermemo.com/en/supermemo-method) | Lastniška gostovana storitev; brez podprtega načina lastnega gostovanja |
| **Nibomo** | [Gostovane osnovne funkcije med različico beta brezplačne; programska oprema za lastno gostovanje brezplačna](/sl/pricing/), poleg tega vaši infrastrukturni stroški | Namenske aplikacije podatke zapisujejo lokalno po spletni prijavi in začetnem prenosu delovnega prostora; oddaljene predstavnostne datoteke morajo že biti v predpomnilniku. | [FSRS](/docs/architecture/#scheduling) | MIT; podprta produkcijska postavitev zajema celoten sistem, zasnovan okoli AWS-ja |

Ti tabeli izdelkov ne razvrščata po točkah. Neposredni uvoznik lahko odtehta vse druge funkcije, če imate 30.000 dobro utrjenih kartic. Namenska aplikacija za iPhone je lahko odločilna, če ponavljate na njem. Dostop do kode je pomemben le, če jo boste vzdrževali vi ali nekdo, ki mu zaupate.

Vsak od teh izdelkov omogoča brezplačen začetek, vendar prenos v brezplačne alternative Ankiju ni brez stroškov. Ceno naročnine je preprosto izračunati. Ponovna izdelava predlog, preverjanje predstavnostnih datotek in ponoven začetek zbiranja zgodovine ponavljanja pogosto pomenijo večji strošek.

## RemNote: kartice preselite med povezane zapiske

V RemNotu kartice nastajajo drugače. Namesto da ob zapiskih s predavanj vzdržujete ločen komplet, kartice ustvarjate v strukturiranih zapiskih, dokumentu ali med delom s PDF-jem. To je dober razlog za odhod iz Ankija, če je kopiranje gradiva med aplikacijo za zapiske in aplikacijo za učne kartice postalo najbolj zamuden del.

Uvoz prenese veliko podatkov, vendar je treba natančno povedati, kaj se zgodi s čakalno vrsto. RemNotova [trenutna navodila za uvoz iz Ankija](https://help.remnote.com/en/articles/6751471-importing-from-anki) svetujejo izvoz `.apkg` s podatki o razporejanju, prednastavitvami kompletov in predstavnostnimi datotekami. Uvozi zgodovino ponavljanja in večino vrst zapisov, vključno z osnovnimi karticami, karticami z izpuščenim besedilom in običajnimi karticami s prekritimi deli slik.

Ista navodila pravijo, da se na novo uvožene kartice usmerijo v ločeno čakalno vrsto **Need to Learn**. RemNote ima torej zgodovino na voljo, vendar dokumentacija ne zagotavlja, da se bo vaša trenutna Ankijeva čakalna vrsta kartic za ponavljanje pojavila nespremenjena. Odstrani se tudi obsežen CSS, JavaScript po meri ni podprt, del sprotnega pretvarjanja besedila v govor ne deluje, uvoz kartic s prekritimi deli slik pa je odvisen od pričakovanih imen vrst zapisov in polj.

Preizkusite reprezentativen komplet ter preglejte kartice in prvo čakalno vrsto. Uvoz, ki je na pogled uspešen, je le polovica preizkusa.

Nameščene namizne in mobilne aplikacije po namestitvi in prijavi delujejo brez povezave. [Navodila za delo brez povezave](https://help.remnote.com/en/articles/6752029-offline-mode) opozarjajo na pomembno omejitev pri predstavnostnih datotekah: namizna aplikacija hrani vse slike in PDF-je baze znanja, mobilna pa predpomni le nekatere nedavne slike. Spletna aplikacija lahko nadaljuje delo v že odprtem zavihku, brez povezave pa je ne morete odpreti na novo.

RemNote uporabite, če so povezani zapiski vredni spremembe modela zbirke. Ostanite pri Ankiju, če so predloge in dodatki temelj vašega sistema, ne le okras okoli njega.

## Mochi: lokalni Markdown s popolnim izvozom v lastni obliki

Mochi je manjša aplikacija, primerna za ljudi, ki želijo lokalne podatke, kartice v Markdownu in manj kontrolnikov na zaslonu. Njegove nameščene aplikacije delujejo na vseh večjih namiznih in mobilnih platformah ter jih lahko uporabljate [povsem brez povezave in brez računa](https://mochi.cards/docs/getting-started/download-and-install/). Plačljiva je sinhronizacija, ki stane 5 USD na mesec.

Neposredni uvoznik iz Ankija prenese zgodovino ponavljanja, zato je Mochi precej pred možnostmi, ki sprejemajo le besedilo. Tudi pretvorba je opisana nenavadno jasno: Mochi odstrani CSS in JavaScript ter pretvori HTML v Markdown. To deluje, kadar pomen nosijo besedilo in običajne priloge. Kadar pomen nosi predloga, pa je to opozorilo.

Mochi zdaj ponuja dva algoritma razporejanja. Njegov lastni ostaja privzet, [FSRS pa lahko vključite](https://mochi.cards/docs/reviewing/fsrs/) brez ponastavitve obstoječega napredka v Mochiju. FSRS stanje kartice izračuna iz zgodovine ponavljanja, ki je na voljo v Mochiju. Ocenjevanje ima tudi pri FSRS le dve možnosti: Remembered ali Forgot. Uporabniki Ankija, ki Hard (Težko) in Easy (Lahko) uporabljajo kot ločena signala, naj zato pričakujejo drugačen vsakodnevni ritem.

Pot do ponovnega izvoza je jasnejša kot pri večini lastniških aplikacij. Izvoz v lastno obliko [`.mochi`](https://mochi.cards/docs/import-and-export/exporting/) vsebuje kartice, predloge, priloge, oznake, strukturo kompletov in zgodovino ponavljanja. Markdown in CSV je drugje lažje pregledati, vendar izpustita zgodovino ponavljanja in druge metapodatke.

Mochijevi javni repozitoriji na GitHubu vsebujejo [integracije in sorodna orodja](https://github.com/mochi-cards/open-source), ne pa jedra aplikacije ali podprtega sinhronizacijskega strežnika. Izberite ga zaradi dela brez povezave in prenosljivosti, ne zaradi nadzora nad izvorno kodo.

## Mnemosyne: odprtokodna pot na namizju

Mnemosyne je najbližje tradicionalni zasnovi »program in lokalna podatkovna baza«. Trenutna izdaja podpira Windows, macOS in Linux ter ponuja odjemalca za Android za ponavljanje brez povezave. Stran s funkcijami navaja bogato oblikovane kartice, hierarhične oznake, vtičnike, ocenjevalno lestvico od 0 do 5 ter popoln uvoz iz Ankija z vrstami kartic po meri in podatki o učenju.

To je tukaj najbolj neposredna odprtokodna pot za prenos, če želite zapustiti Anki brez prehoda v obsežen sistem zapiskov ali oblačno storitev. Ima tudi [vgrajen sinhronizacijski strežnik](https://mnemosyne-proj.org/help/syncing), ki lahko deluje na namiznem računalniku ali napravi brez grafičnega vmesnika ter združuje podatke o učenju iz več odjemalcev.

Pri odločitvi upoštevajte tudi pomanjkljivosti. Odjemalec za Android [ne omogoča urejanja kartic](https://mnemosyne-proj.org/help/android-client). Uporabniki iOS-a morajo ponavljati prek brskalniškega strežnika, ki deluje na drugi napravi, uradna stran s funkcijami tega strežnika pa opozarja, da nima varnostnih funkcij. Pri lastni sinhronizaciji morate tudi zagotavljati dosegljivost strežnika, nastaviti omrežje in varnostno kopirati podatkovno mapo.

Licenciranje je natančneje določeno, kot pove preprosta oznaka »GPL«: [datoteka z licenco projekta](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) napotuje na različne pogoje za posamezne komponente. [Licenca jedra](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) uporablja AGPL v3 z dodatno določbo glede imena in navedbe avtorstva, [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) pa LGPL v3. Če nameravate kodo spreminjati ali razširjati, preberite te datoteke.

## Quizlet: menjava zaradi pouka, ne zaradi zvestega prenosa zbirke

Quizlet se bolje obnese pri drugačnem načinu uporabe. Razredu je lažje ponuditi javne učne zbirke, razrede, ki jih ustvarijo učitelji, deljenje gradiva, načine Match, Test in Learn ter skupinske dejavnosti kot prilagojen profil v Ankiju.

Prenos je omejen na golo besedilo. Quizlet lahko prilepljene vrstice pretvori v izraze in definicije, ne more pa prebrati `.apkg` ter obnoviti vrst zapisov, predlog, razporeda ali zgodovine ponavljanja. Avtorji lahko [lastne zbirke izvozijo kot kopirano besedilo](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), brez slik; zbirk, kopiranih od drugih uporabnikov, ni mogoče izvoziti. Prenosljiva je vsebina, ne celotna zbirka.

Quizletov pristop k razporejanju se spreminja. Njegova nova funkcija [Spaced Repetition](https://quizlet.com/features/spaced-repetition) se na spletu samodejno vključi za zbirke z vsaj 100 izrazi in uporablja ocene Repeat (Ponovi), Hard (Težko), Okay (V redu) in Easy (Lahko). Quizlet mobilno podporo še vedno označuje kot prihajajočo. Learn ostaja ločen način prilagodljive vaje, katerega obseg uporabe omejuje plačljivi paket.

Delo brez povezave je prav tako vezano na mobilne aplikacije, ne na spletno mesto. Quizlet samodejno shrani osem nedavnih zbirk in omogoča prenos dodatnih; [Flashcards in Match delujeta brez povezave](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), napredek pa se sinhronizira po ponovni povezavi.

Preidite nanj, kadar sta cilj deljenje gradiva in dejavnost v razredu. Ponovno sestavljanje dobro utečenega osebnega razporeda zgolj zaradi teh funkcij se običajno ne izplača.

## Brainscape: manj odločitev o razporejanju, manj temeljit prenos

Brainscape vas prosi, da svojo prepričanost v znanje ocenite od 1 do 5. Na podlagi te ocene vam prej spet pokaže kartice, ki jih slabše znate. Celotna formula ni objavljena, vendar je tak način dela vsem v razredu preprosto razložiti.

Sprejema datoteke CSV, TXT, XLSX in ODS. To je priročno za kartice s sprednjo in zadnjo stranjo, vendar pomeni, da predloge, dodatki, pravila za predstavnostne datoteke in Ankijevi podatki o učenju se ne prenesejo. Izvoz osebne varnostne kopije je funkcija Pro in ustvari datoteke, ki jih lahko odprete v programu za preglednice ter pozneje spet uvozite.

Trenutni Brainscapov center za pomoč pravi, da spletno mesto in mobilne aplikacije zdaj ponujajo enake osnovne funkcije iskanja, ustvarjanja, deljenja in učenja. Opisuje tudi mobilno uporabo brez povezave, ročno ponovno sinhronizacijo in posodobitve razredov, ki so že preneseni v napravo. Po ponovni povezavi lahko torej nadaljujete delo, vendar to še ne pomeni, da imate v napravi popolno lokalno kopijo vsega računa.

Izvoz osebnih kompletov ostaja [funkcija Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Uradne objave izvorne kode ali možnosti lastnega gostovanja ni.

O Brainscapu je smiselno razmisliti, če Anki od ljudi, ki se morajo učiti, zahteva preveč nastavljanja. Za nekoga, ki te nastavitve že dobro uporablja, ni dobra pot za odhod.

## SuperMemo: izberite metodo in sprejmite nov začetek

Trenutna storitev SuperMemo.com je platforma za učenje jezikov na spletu, iOS-u in Androidu, zasnovana okoli lastniške SuperMemove metode razporejanja. Ločena je od starejšega izdelka za Windows, ki ga morda poznajo dolgoletni uporabniki SuperMema.

To je odločitev za metodo in katalog, ne za nemoten prenos iz Ankija. SuperMemo podpira [množično ustvarjanje z lepljenjem vrstic vprašanj in odgovorov, razmejenih z ločilom](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), z omejitvijo 100 kartic na uvoz. Za gostovano storitev nisem našel trenutnega uradnega uvoznika `.apkg` ali možnosti uporabniškega izvoza. Predloge, dodatki, struktura predstavnostnih datotek in zgodovina ponavljanja se zato po dokumentirani poti ne prenesejo.

Prenesene tečaje lahko v mobilnih aplikacijah uporabljate brez povezave. [Navodila za delo brez povezave](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) izključujejo funkcije umetne inteligence, dodajanje MemoCards, iskanje, snemanje, statistiko in urejevalnik tečajev, zato gradivo pripravite in sinhronizirajte pred prekinitvijo povezave.

SuperMemo izberite, če si njegove metode ali kataloga tečajev želite dovolj, da začnete z novim razporedom. Če je najpomembnejše ohraniti obstoječi razpored, rešuje napačno težavo.

## Nibomo: dostop do kode celotnega sistema z najšibkejšim uvozom iz Ankija

Nibomo omogoča dostop do izvorne kode in nadzor nad velikim delom sistema. [Repozitorij z licenco MIT](https://github.com/kirill-markin/flashcards-open-source-app) vsebuje spletno aplikacijo, odjemalca za iOS in Android, zaledni sistem, sinhronizacijo po delu brez povezave, infrastrukturo, [javni API](/docs/api/) in [strežnik MCP](/docs/mcp-connector/). Ponavljanje uporablja [FSRS](/docs/architecture/#scheduling). Spletna aplikacija ter aplikaciji za iOS in Android najprej zapisujejo lokalno, spremembe dodajo v čakalno vrsto za pošiljanje ter jih sinhronizirajo po ponovni povezavi.

Zaradi tega še ni združljiv z Ankijem. Nibomo ne zna prebrati `.apkg` ali `.colpkg`. Podprti [prenos iz Ankija prek TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) je postopek priprave osnutkov s pomočjo umetne inteligence in pregledom vsebine za pretežno besedilne kartice. Ne ohrani predlog, dodatkov, hierarhije kompletov, rokov, intervalov ali posameznih ponavljanj. Sklici na predstavnostne datoteke v TXT niso same datoteke, zato kompleti z veliko takšne vsebine zahtevajo ločeno ponovno sestavljanje in preverjanje.

Tudi Nibomov lastni paket `flashcards.zip` vsebuje manj podatkov kot varnostna kopija. Med delovnimi prostori Nibomo prenaša kartice, oznake in povezane predstavnostne datoteke. Ne prenaša zgodovine ponavljanja, stanja FSRS, celotne strukture kompletov, nastavitev delovnega prostora ali računov.

Gostovane osnovne funkcije so [med različico beta brezplačne](/sl/pricing/). Lastno gostovanje produkcijskega sistema ni namestitev Dockerja z enim ukazom: [navodila za lastno gostovanje](/docs/self-hosting/) uporabljajo AWS CDK ter zahtevajo storitve AWS, Cloudflare, Resend in Sentry, pa tudi upravljanje skrivnosti, migracije, varnostne kopije, obnovitve in nadgradnje. Docker Compose je namenjen razvoju, ne podprti produkcijski postavitvi.

Nibomo uporabite, kadar sta razlog za menjavo celotna izvorna koda in zaledni sistem pod nadzorom upravljavca, vaše kartice pa so dovolj preproste za varno ponovno sestavljanje. [Odprite gostovano aplikacijo](https://app.nibomo.com/) in preizkusite majhen začasen komplet. Ostanite pri Ankiju ali preizkusite RemNote, Mochi ali Mnemosyne, kadar je na prvem mestu zvest prenos stanja učenja.

## Katera alternativa Ankiju deluje na iOS-u brez neprijetnih presenečenj pri prenosu?

»Alternativa Ankiju za iOS« lahko pomeni dvoje: namensko aplikacijo za iPhone ali nadomestilo za [AnkiMobile, ki z enkratnim nakupom stane 24,99 USD](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo in Nibomo imajo aplikacije za iOS. Mnemosyne je nima. Vprašanje prenosa pa ostaja:

- **Mochi** ohrani več kot možnosti za iOS, ki prenašajo le besedilo: uvozi zgodovino ponavljanja iz `.apkg`, ob tem pa vsebino pretvori v Markdown in uporablja ocenjevanje z dvema možnostma.
- **RemNote** prav tako uvozi zgodovino ponavljanja iz `.apkg`, vendar preizkusite njegovo čakalno vrsto **Need to Learn**, namesto da predpostavljate, da današnji Ankijev razpored ostane nespremenjen.
- **Quizlet** je primeren za deljenje gradiva v razredu, vendar je njegova pot iz Ankija omejena na besedilo, novi način časovno razmaknjenega ponavljanja pa še ni na voljo na mobilnih napravah.
- **Nibomo** je možnost z dostopno izvorno kodo in namenskim odjemalcem za iOS, vendar njegov prenos iz Ankija ponastavi stanje učenja.
- **Brainscape** in **SuperMemo** sta smiselna le, če je njuna metoda ponavljanja vredna ponovnega sestavljanja kartic in razporeda.

Preden zapustite AnkiMobile zaradi cene, jo primerjajte s stroškom naročnine in urami, potrebnimi za popravljanje prenosa. Enkraten nakup aplikacije je lahko cenejši od brezplačne aplikacije, ki utečeno zbirko spremeni v projekt ročnega urejanja.

## Kdaj je varneje ostati pri Ankiju

Tudi če ostanete pri Ankiju, ste se odločili. To ne pomeni, da ne znate izbrati česa novejšega. Ostanite pri Ankiju, če velja kar koli od naslednjega:

- vaša zbirka je odvisna od predlog po meri, CSS-ja, JavaScripta ali dodatkov;
- Image Occlusion, zvok ali druge predstavnostne vsebine nosijo bistven pomen;
- iz enega zapisa nastanejo kartice v več smereh, ki morajo ostati povezane;
- leta zgodovine ponavljanja in trenutni roki so vrednejši od novega urejevalnika;
- zanašate se na namizni način dela ali kombinacijo platform, ki ju alternativa ne podpira enako;
- način dela brez povezave pri nadomestni aplikaciji deluje le v okolju, ki ga ne boste uporabljali;
- lastno gostovanje vas načeloma zanima, vendar ne želite upravljati, varovati, varnostno kopirati in nadgrajevati strežnika;
- alternativa ne odpravi nobene ponavljajoče se težave, razen da je videti preglednejša.

Anki še vedno ponuja zrel ekosistem dodatkov, prilagodljive predloge zapisov in kartic, FSRS in nastavitve starejšega razporejanja, lokalno nameščene odjemalce ter oblike paketov, ki lahko prenesejo celotno zbirko. Nobeden od zgornjih izdelkov ne ponovi vsega tega.

Za podrobnejšo primerjavo nadzora nad kodo in podatki preberite [vodnik po odprtokodnih aplikacijah za učne kartice](/blog/best-open-source-flashcard-apps-2026/). Če je odločilno delo brez povezave, [primerjava aplikacij za učne kartice brez povezave](/blog/best-offline-flashcards-app/) ločuje med nameščenimi aplikacijami, predpomnjeno vsebino in zavihki brskalnika.

## Kontrolni seznam za prenos, ki se lahko še vedno konča z »ne«

Ne začnite s celotno zbirko. Pripravite preizkus, pri katerem je neuspeh sprejemljiv.

1. **Ustvarite obnovitveni paket.** Izvozite `.colpkg` s predstavnostnimi datotekami, shranite ga zunaj Ankijevega profila in obdržite še drugo kopijo na drugi lokaciji.
2. **Izberite zahteven komplet.** Vključite kartice z izpuščenim besedilom, polja po meri, kartice v obeh smereh, gnezdene komplete, oznake, slike, zvok in dovolj zgodovine ponavljanja, da bo pretvorba razporeda razvidna.
3. **Izvozite obliko, ki jo ciljna aplikacija dejansko podpira.** Za neposredni uvoznik uporabite `.apkg` s podatki o razporejanju, prednastavitvami in predstavnostnimi datotekami. Notes in Plain Text (Zapisi v golem besedilu) uporabite le, če sprejemate ponovno sestavljanje samo vsebine.
4. **Zabeležite začetno stanje.** Zapišite število zapisov in kartic, imena oznak in kompletov, število predstavnostnih datotek, nekaj rokov in intervalov ter pričakovano število kartic, ustvarjenih iz vsake vrste zapisa.
5. **Uvozite v začasen prostor.** Ne prepišite izvornega profila in prvega preizkusa ne združite s trajno knjižnico v ciljni aplikaciji.
6. **Vsebino in stanje učenja preglejte ločeno.** Pravilna sprednja in zadnja stran ne dokazujeta, da so se ohranili izpuščeno besedilo, predstavnostne datoteke, sorodne kartice iz istega zapisa, zgodovina ponavljanja ali naslednji rok.
7. **Aplikacijo na novo odprite brez povezave na vseh napravah, ki jih uporabljate.** Ponavljajte, urejajte, povsem zaprite aplikacijo, jo ponovno odprite brez povezave, nato pa vzpostavite povezavo in preverite drugo napravo.
8. **Primerjajte čakalni vrsti, preden se začneta razhajati.** Primerjajte prvo skupino kartic za ponavljanje in vzorec intervalov, preden iste kartice iz svoje redne zbirke ocenjujete v obeh aplikacijah. Po prvem ponavljanju drugje sta razporeda neodvisna.
9. **Pred dokončno odločitvijo preizkusite še izvoz.** Izvozite podatke iz ciljne aplikacije in preverite, kaj bi lahko obnovili, če jo naslednje leto zapustite.
10. **Obdržite Anki in nedotaknjeno varnostno kopijo.** Nobenega ne izbrišite, dokler nadomestna aplikacija ni prestala običajne uporabe in zavestno niste sprejeli vsake izgube.

Če ciljna aplikacija sprejema le besedilo, sledite celotnemu [postopku varnega izvoza TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Loči obnovitveni `.colpkg` od prenosljive delovne datoteke in jasno opozori na ponastavitev.

## Odločajte se v tem vrstnem redu

Začnite pri tistem, česar ne smete izgubiti:

1. Če so nujne natančne predloge, dodatki ali trenutna čakalna vrsta, ostanite pri Ankiju, razen če preizkus z reprezentativnim `.apkg` pokaže drugače.
2. Če naj zapiski in kartice postanejo enoten sistem, preizkusite RemNote. Preverite čakalno vrsto **Need to Learn**, ne le uvoženih strani.
3. Če sta lokalni Markdown in izvoz, katerega vsebino lahko pregledate, pomembnejša od Ankijevega prikaza, preizkusite Mochi.
4. Če želite namensko odprtokodno namizno aplikacijo z neposrednim uvozom iz Ankija, preizkusite Mnemosyne in preverite, ali se njegove mobilne omejitve ujemajo z vašo rutino.
5. Če je dejanska težava deljenje gradiva v razredu ali preprostejše skupinsko ponavljanje, na novo sestavite majhno zbirko v Quizletu ali Brainscapu.
6. Če želite prav SuperMemovo metodo, sprejmite nov razpored. Če želite prav izvorno kodo celotnega sistema, lastno gostovanje ter dostop prek API-ja in MCP-ja, sprejmite ponovno sestavljanje vsebine v Nibomu z izgubo dela podatkov ter prevzemite upravljanje sistema.

Za primerjavo funkcij treh zelo različnih modelov si oglejte [Anki, Quizlet in Nibomo](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Uporabno pravilo je preprosto: zamenjajte aplikacijo, kadar je korist konkretna in ste izgube preverili v resničnem preizkusu. Če značilnega kompleta iz svoje zbirke ne morete prenesti brez zapletov, je odločitev, da ostanete pri Ankiju, rezultat primerjave, ne zgolj previdna rezervna rešitev.
