---
title: "Najboljše odprtokodne aplikacije za učne kartice v letu 2026: primerjava 6 možnosti FOSS"
description: "Primerjajte šest vzdrževanih odprtokodnih aplikacij za učne kartice: obseg kode, delo brez povezave, sinhronizacijo, uvoz iz Ankija, izvoz, lastno gostovanje in obnovitev."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "najboljše odprtokodne aplikacije za učne kartice"
  - "odprtokodna aplikacija za učne kartice"
  - "odprtokodno razmaknjeno ponavljanje"
  - "učenje s karticami na lastnem strežniku"
  - "aplikacija za učne kartice brez povezave"
  - "odprtokodna alternativa Ankiju"
  - "učne kartice FOSS"
---

Anki je tudi v letu 2026 za večino ljudi najboljša odprtokodna aplikacija za učne kartice. Izbira postane zanimiva, ko odprta koda ni vaša edina nujna zahteva.

Morda potrebujete spletno aplikacijo na svojem strežniku. Ali komplet kartic, ki ga lahko berete kot navaden Markdown. Ali zaseben sistem zapiskov, iz katerih nastajajo učne kartice. Te zahteve vodijo do različnih izdelkov, javni repozitorij na GitHubu pa sam po sebi še ni dovolj za odločitev.

Odprtokodni namizni odjemalec ima lahko ob sebi zaprtokodno aplikacijo za iPhone. Vsebnik Docker lahko poganja spletni vmesnik, ne da bi sinhroniziral namenske odjemalce. Pri uvozu se lahko ohrani besedilo, izgubijo pa se predloge, predstavnostne datoteke in leta zgodovine ponavljanja, zaradi katerih je bila zbirka uporabna.

Merila tega pregleda je izpolnilo šest projektov. Primerjal sem njihove licence in objavljeno kodo, zadnjo stabilno izdajo, lokalne podatke, razporejanje, sinhronizacijo, prenos iz Ankija, izvoz ter natančen obseg lastnega gostovanja. Prav obseg lastnega gostovanja je pomembnejši, kot bi sklepali iz večine seznamov funkcij.

> **Razkritje:** Sem Kirill Markin in razvijam [Nibomo](https://nibomo.com/), eno od šestih spodnjih aplikacij. Njegov repozitorij pod licenco MIT vključuje spletno aplikacijo, namenske odjemalce, zaledni sistem, sinhronizacijo in infrastrukturo. Nisem ga uvrstil na prvo mesto. Anki je varnejša privzeta izbira, Mnemosyne ima bolj uveljavljen postopek prenosa iz Ankija, več tukajšnjih možnosti pa je precej lažje upravljati.

**Dejstva preverjena:** 5. septembra 2026. Stabilne izdaje so ločene od dela, ki obstaja le v privzeti veji repozitorija.

![Pohodnik primerja šest odprtih nahrbtnikov in preizkuša rezervno opremo, preden izbere odprtokodno aplikacijo za učne kartice](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Kratek odgovor

| Vaša glavna zahteva | Najprimernejša izbira | Zakaj | Kaj najprej preizkusiti |
| --- | --- | --- | --- |
| Zanesljiv sistem za splošno uporabo ali zapletena obstoječa zbirka | [Anki](https://apps.ankiweb.net/) | Zrel model kartic in predlog, FSRS, dodatki, široka izbira odjemalcev in vsebinsko bogati izvozni paketi | Uradna aplikacija za iOS in AnkiWeb nista del odprte namizne kode; lastno gostovanje omogoča sinhronizacijo, ne storitve AnkiWeb |
| Namizna alternativa z jasno usmeritvijo in uveljavljenim uvozom iz Ankija | [Mnemosyne](https://mnemosyne-proj.org/) | Lokalno učenje, uvoz Ankijevih vrst kartic in podatkov o učenju ter sinhronizacijski strežnik, ki ga lahko poganjate sami | Različica 2.11 je še vedno zadnja stabilna izdaja; Android omogoča ponavljanje, ne urejanja |
| Zapiski in učne kartice v eni lokalni bazi znanja | [SiYuan](https://b3log.org/siyuan/en/) | Namenske aplikacije za delo brez povezave, vgrajeni FSRS in prava spletna aplikacija v Dockerju | Odjemalci v Dockerju se ne morejo sinhronizirati z namenskimi aplikacijami, več ukazov za uvoz in izvoz pa v Dockerju ni na voljo |
| Izvorna koda za splet, mobilne naprave, zaledni sistem in infrastrukturo | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | En monorepozitorij pod licenco MIT z dokumentirano produkcijsko postavitvijo | Podprta produkcijska postavitev temelji na AWS, pri prenosu iz Ankija pa se del podatkov izgubi |
| Mlajša namizna aplikacija, ki temelji na lokalnih podatkih in neposredno uvaža APKG | [Recall](https://github.com/Madlezz/Recall) | FSRS, namizne izdaje, PWA, lokalne podatkovne baze in izbirni posrednik za šifrirane podatke | Uvoz ohrani le posnetek stanja razporejanja, obravnava prvi dve polji zapisa in preskoči zvok |
| Človeku berljivi kompleti v Markdownu brez odvisnosti od omrežja | [Essentialist](https://github.com/essentialist-app/essentialist) | Navadne datoteke s kompleti in aplikacija za namizje in Android, ki namenoma deluje brez omrežja | Sinhronizacije ni, napredek pa je shranjen v ločeni skriti podatkovni bazi |

To ni točkovanje funkcij. Začnite pri težavi, ki je ne morete sprejeti. Če imate deset let ponavljanj v Ankiju, je popolnost prenosa pomembnejša od preglednejšega vmesnika. Če upravljate postavitev za šolo, sta dostop prek brskalnika in preverjena obnovitev morda pomembnejša od dodatkov.

## Kaj je štelo kot odprtokodna aplikacija za učne kartice

Uporabil sem štiri merila:

1. **Osnovne funkcije za učenje imajo objavljeno izvorno kodo in izrecno odprtokodno licenco.** Seznam integracij za neobjavljeno jedro ne zadošča.
2. **Razmaknjeno ponavljanje deluje že danes.** Vnos v načrt razvoja ali splošen način kviza ni dovolj.
3. **Obstaja izdana aplikacija ali jasno dokumentirana uradna postavitev.** Nedavne spremembe kode same po sebi še ne pomenijo, da lahko prototip varno priporočimo.
4. **Uradni viri dovolj jasno opredelijo ravnanje s podatki, da ga je mogoče preveriti.** Potreboval sem konkretne odgovore o hrambi brez povezave, sinhronizaciji, uvozu in izvozu ali gostovanju, ne nedoločne obljube, da imajo uporabniki »svoje podatke v lasti«.

Število zvezdic ni bilo pogoj. Odraža starost in prepoznavnost projekta prav toliko kot ustreznost izdelka. Zrelost pa vseeno šteje. Anki, Mnemosyne in SiYuan imajo uveljavljene izdaje in načine delovanja. Recall in Essentialist sta si prislužila ožje priporočilo, ker je delovanje njunih izdanih različic dovolj dobro dokumentirano za konkretno izbiro.

Tudi izraz »vzdrževan« zahteva dve preverjanji. Označena izdaja pove, kaj lahko uporabniki namestijo; privzeta veja pa, kam gre razvoj. Essentialist je najjasnejši primer. Njegova stabilna izdaja dokumentira SM-2, trenutna veja pa FSRS. Spodnja tabela zato navaja SM-2.

## Primerjava šestih prostih in odprtokodnih aplikacij za učne kartice

| Aplikacija | Preverjena stabilna različica | Platforme | Podatki brez povezave | Razporejanje | Sinhronizacija | Prenos iz Ankija in možnosti izvoza | Kaj lahko gostujete sami |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. avgusta 2026 | Windows, macOS, Linux; ločena odjemalca za Android in iOS; AnkiWeb | Nameščeni odjemalci omogočajo učenje iz lokalnih zbirk | FSRS ali starejši SM-2 | AnkiWeb ali uradni sinhronizacijski strežnik na lastni infrastrukturi | Uvaža besedilo, APKG/COLPKG in baze Mnemosyne; izvaža besedilo ali pakete z izbirno vključitvijo predstavnostnih datotek in razporejanja | **Samo sinhronizacijski strežnik.** Brez lastnega AnkiWeba ali spletnega vmesnika za učenje |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. novembra 2023; delo v repozitoriju se je nadaljevalo v letu 2026 | Windows, macOS, Linux, Android; omejeno ponavljanje v brskalniku | Namizje deluje lokalno; Android omogoča ponavljanje brez povezave, ne pa urejanja | Prilagodljivo ocenjevanje priklica od 0 do 5 | Vgrajena sinhronizacija z namiznim računalnikom ali primerkom brez grafičnega vmesnika | Uradno dokumentira popoln uvoz iz Ankija z vrstami kartic po meri in podatki o učenju; izvoz za deljenje ni popolna varnostna kopija | **Sinhronizacija in omejeno ponavljanje v brskalniku.** Strežnik za brskalnik nima varnostnih funkcij |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. avgusta 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; brskalnik prek Dockerja | Namenski odjemalci hranijo delovni prostor lokalno | FSRS | Plačljiva uradna sinhronizacija s šifriranjem od konca do konca ali plačljiva integracija s shrambo S3/WebDAV | Splošna aplikacija uvaža Markdown in podatke ter izvaža več oblik dokumentov in podatkov; dokumentiranega uvoznika APKG ni | **Celotna spletna aplikacija.** Docker ne more sinhronizirati namenskih odjemalcev in nima nekaterih ukazov za uvoz in izvoz |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. septembra 2026 | Splet, iOS, Android | IndexedDB na spletu; SQLite v iOS; Room nad SQLite v Androidu; lokalni zapisi čakajo v vrsti za sinhronizacijo | FSRS | Gostovani zaledni sistem ali zaledni sistem na lastni infrastrukturi | Lastni ZIP prenese kartice, oznake, metapodatke o viru in pripadajoče predstavnostne datoteke, ne pa kompletov, stanja učenja, nastavitev ali računov; uvoznika APKG ni | **Celoten spletni in zaledni sistem.** Produkcijska postavitev temelji na AWS; zasebne namenske aplikacije se gradijo ločeno |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. julija 2026 | Windows, macOS, Linux; PWA, ki jo lahko namestite | SQLite na namizju; IndexedDB v brskalniku; račun ni potreben, telemetrija je privzeto izključena | FSRS | Sinhronizacija namizne mape ali izbirni posrednik za šifrirane podatke s Cloudflare Workerjem in R2 | Namizni uvoz APKG prebere prvi dve polji, komplete, oznake, približen posnetek stanja razporejanja in slike; izvoz JSON in arhivov Recall | **Samo posrednik za šifrirane posnetke.** Ne gosti same PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. oktobra 2025; delo na kodi se je nadaljevalo v letu 2026 | Android APK, macOS DMG, Linux Flatpak; Windows z gradnjo iz izvorne kode | Brez dostopa do omrežja; vsebina kompletov je v Markdownu | Stabilna izdaja: SM-2; privzeta veja: FSRS | Je ni | Markdown ohrani vsebino kartic; skrita spremljevalna podatkovna baza ohrani napredek | **Ničesar ni treba gostovati.** Varnostno kopirajte datoteko Markdown in spremljevalno bazo skupaj |

## 1. Anki je najvarnejša privzeta izbira

Anki se izkaže pri manj opaznih podrobnostih. Podpira zapletene vrste zapisov, iz predlog ustvarja sorodne kartice, ob zbirki hrani predstavnostne datoteke in ohrani leta podatkov o razporejanju. Stabilna namizna izdaja v tem pregledu je [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Novejša različica 26.09b2 je označena kot beta, zato ni osnova te primerjave.

Obseg odprte kode je različen. [Namizni repozitorij ima licenco AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), z navedenimi izjemami za vključene komponente. [AnkiDroid](https://github.com/ankidroid/Anki-Android) je ločen odprtokodni projekt za Android. AnkiMobile in AnkiWeb sta uradna dela ponudbe, vendar njuna koda ni vključena v ta repozitorija. Več o tem je v članku [Ali je Anki odprtokoden?](/blog/is-anki-open-source/).

Nameščeni odjemalci hranijo lokalne zbirke, zato običajno ponavljanje deluje brez povezave. AnkiWeb zahteva spletno povezavo. Če je odločilno delo brez povezave, članek [Ali Anki deluje brez povezave?](/blog/does-anki-work-offline/) loči podatke, ki ostanejo lokalno, od dejanj, ki počakajo na sinhronizacijo.

Anki podpira [FSRS in svoj starejši razporejevalnik](https://docs.ankiweb.net/deck-options.html). Njegove izvozne oblike so med temi aplikacijami najboljše izhodišče za prenos. [COLPKG vsebuje celotno zbirko z razporejanjem](https://docs.ankiweb.net/exporting.html), izvozi APKG pa lahko vključujejo podatke o razporejanju in predstavnostne datoteke, če izberete ustrezni možnosti. Anki uvaža tudi besedilo, pakete Anki in podatkovne baze Mnemosyne 2.0.

Tako bogat izvorni paket še ne zagotavlja popolnega uvoza drugam. Ciljna aplikacija mora še vedno razumeti predloge, pravila ustvarjanja kartic, sklice na predstavnostne datoteke in polja razporejevalnika v njem. Ima pa na voljo več informacij kot pri datoteki CSV.

[Uradni strežnik za lastno gostovanje](https://docs.ankiweb.net/sync-server.html) je namenoma omejen. Sinhronizira združljive odjemalce Anki; ne ponuja AnkiWeba, ponavljanja v brskalniku ali portala za račune. Privzeto posluša prek nešifriranega HTTP-ja, navodila pa priporočajo lokalno omrežje ali zaščito z VPN-jem oziroma povratnim posredniškim strežnikom HTTPS. Tudi različici odjemalca in strežnika morata ostati združljivi.

Izberite Anki, kadar so najpomembnejši ohranitev zbirke, predloge, dodatki ali široka podpora odjemalcem. Drugam se ozrite le, če vam več pomeni konkretna zahteva, denimo spletni vmesnik na lastnem strežniku ali v celoti objavljena koda za mobilne aplikacije.

## 2. Mnemosyne se osredotoča na lokalno učenje

Mnemosyne deluje kot namizno orodje za učenje, ker to tudi je. Zraven ne prinese baze znanja ali oblačne platforme. Dobite lokalno podatkovno bazo, tradicionalno razmaknjeno ponavljanje, spremljevalno aplikacijo za ponavljanje v Androidu in sinhronizacijski strežnik, ki lahko teče na namiznem računalniku ali računalniku brez grafičnega vmesnika.

Zadnja stabilna izdaja je še vedno [2.11 iz novembra 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Koda v repozitoriju se je spreminjala tudi leta 2026, vendar te spremembe zato še niso vključene v stabilni namestitveni paket. Različico 2.11 preizkusite na operacijskih sistemih, ki jih nameravate uporabljati naslednjih nekaj let.

Tudi licence ni mogoče pojasniti z eno značko. [Pregled licenc v korenu repozitorija](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) za openSM2sync določa LGPL v3, za preostali Mnemosyne pa ločene pogoje. [Licenca glavnega programa](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) uporablja AGPL v3 z dodatnim določilom, da mora ime Mnemosyne ostati jasno vidno v izpeljanih delih, o natančni obliki pa se je treba dogovoriti z vzdrževalci. Pred nadaljnjim razširjanjem spremenjene različice preberite to besedilo.

[Odjemalec za Android omogoča ponavljanje brez povezave, ne pa urejanja kartic](https://mnemosyne-proj.org/help/android-client). Druge naprave lahko uporabljajo strežnik za ponavljanje v brskalniku, ki ga zaženete iz namizne aplikacije, vendar uradna stran s funkcijami opozarja, da strežnik nima varnostnih funkcij. To je priročen vmesnik za lokalno omrežje, ne dodelana javna spletna aplikacija.

Prenos podatkov je najmočnejši razlog za Mnemosyne namesto vztrajanja pri Ankiju. Uradna stran s funkcijami dokumentira [popoln uvoz iz Ankija, vključno z vrstami kartic po meri in podatki o učenju](https://mnemosyne-proj.org/features). [Vgrajena sinhronizacija](https://mnemosyne-proj.org/help/syncing) združuje kartice in podatke o učenju ter lahko uporablja računalnik pod vašim nadzorom.

Običajni ukaz za izvoz je pri varnostnih kopijah past. Namenjen je deljenju izbranih kartic in izpusti podatke o učenju. Za prenos ali obnovitev celotnega sistema [navodila za več računalnikov](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) naročajo kopiranje celotne podatkovne mape.

Mnemosyne je tu najmočnejša odprtokodna alternativa Ankiju, osredotočena na učenje. Sprejeti pa morate redke stabilne izdaje, omejeno urejanje na mobilnih napravah in spletni vmesnik, pri katerem morate skrbno omejiti omrežni dostop.

## 3. SiYuan je smiseln, ko so v središču zapiski

SiYuan je aplikacija za upravljanje znanja, ki daje prednost zasebnosti in vključuje učne kartice v isti model blokov in dokumentov. To je uporabno, kadar gradivo za ponavljanje nastaja iz zapiskov. Če želite le čakalno vrsto kartic, pa dobite še veliko funkcij, ki jih ne potrebujete.

[Repozitorij pod licenco AGPL-3.0](https://github.com/siyuan-note/siyuan) povezuje uporabniški vmesnik, jedro, mobilne aplikacije, podatkovni sloj in komponento FSRS. Tu preverjena stabilna izdaja je [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Namizni in mobilni odjemalci hranijo delovni prostor lokalno in delujejo tudi brez povezave.

Sinhronizacija ni del brezplačne ponudbe lokalne hrambe. [Uradni cenik](https://b3log.org/siyuan/en/pricing.html) ob naročnini ponuja uradno sinhronizacijo s šifriranjem od konca do konca, plačljive funkcije Pro pa dodajo integracije za lastno shrambo S3 ali WebDAV. Projekt opozarja tudi, da delovnega prostora, ki ga uporabljate, ne postavljajte v mapo običajnega orodja za sinhronizacijo datotek, saj lahko sočasne spremembe podatke poškodujejo ali prepišejo.

Docker poganja pravo spletno aplikacijo, vendar s tem ne postane sinhronizacijski strežnik za nameščene aplikacije. [Dokumentacija Dockerja za v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) pravi, da se namizni in mobilni odjemalci nanj ne morejo povezati. V Dockerju tudi ni uvoza Markdown ter izvoza v PDF, HTML in Word. Ti ukazi obstajajo v namenski aplikaciji, zato bi bilo prepisovanje splošnega seznama funkcij v načrt postavitve z Dockerjem zavajajoče.

Uradnega uvoznika APKG nisem našel. SiYuan lahko prenaša Markdown in svoje podatkovne oblike, zbirko iz Ankija pa je treba bolj premišljeno sestaviti na novo.

SiYuan izberite, ko je baza znanja glavni izdelek in učne kartice sodijo vanjo. Če želite neposredno zamenjavo za Anki, imata Mnemosyne in Anki jasneje opredeljene možnosti prenosa.

## 4. Nibomo objavlja več kode, upravljanje sistema pa prepusti vam

Nibomo med primerjanimi aplikacijami objavlja izvorno kodo za največ delov sistema. Monorepozitorij pod licenco MIT vključuje spletno aplikacijo, odjemalca za iOS in Android, zaledni sistem, storitev za prijavo, sinhronizacijo, skrbniško aplikacijo, migracije podatkovne baze in infrastrukturo AWS. Tu uporabljena stabilna izdaja je [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Poznejšega dela v privzeti veji ne štejem med izdane funkcije.

[Arhitektura](/docs/architecture/) daje prednost delu brez povezave, vendar to pri vsakem odjemalcu pomeni nekaj malo drugačnega. Spletna aplikacija hrani glavno lokalno kopijo podatkov v IndexedDB. iOS uporablja SQLite, Android pa Room nad SQLite. Spremembe se najprej zapišejo lokalno in pred sinhronizacijo počakajo v izhodni vrsti. Takšna zasnova prenese prekinitev povezave; ne zagotovi pa trajnosti shrambe v brskalniku in ne odpravi potrebe po preizkusu zagona iz povsem zaprtega stanja na vsaki napravi.

Lastni paket ZIP v Nibomu je oblika za prenos vsebine, ne varnostna kopija računa. V različici v1.23.0 njegova [shema paketa](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) vključuje vsebino sprednje in zadnje strani, oznake, vrsto kartice, metapodatke o viru in paketu; povezane predstavnostne datoteke so priložene ločeno. Ne vključuje strukture kompletov, zgodovine ponavljanja, stanja FSRS, nastavitev delovnega prostora ali računov.

V različici v1.23.0 ni uvoznika APKG. Dokumentirani [postopek prenosa iz Ankija prek TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) uporablja izvoženo besedilo za ponovno sestavljanje kartic in zahteva človeški pregled. Predloge, stanje razporejanja, struktura kompletov in priložene predstavnostne datoteke se po tej poti ne ohranijo samodejno. To je smiselno za preprost besedilni komplet, za močno prilagojeno zbirko pa slaba izbira.

[Navodila za lastno gostovanje](/docs/self-hosting/) so prav tako jasna. Produkcija uporablja postavitev AWS CDK z RDS, Cognito, API Gateway in Lambda, S3 in CloudFront, skrivnostmi, alarmi in varnostnimi kopijami. Nastavitve za Cloudflare DNS, e-pošto Resend in Sentry so zunaj AWS. Docker Compose je namenjen lokalnemu razvoju; ni podprti produkcijski paket. Kdor želi zasebne aplikacije za iOS ali Android, jih zgradi in distribuira ločeno.

Nibomo izberite, ko lastništvo celotne kode za splet, namenske odjemalce in zaledni sistem upraviči to upravljavsko delo. Anki ali Mnemosyne izberite, kadar je pomembneje ohraniti obstoječo zbirko.

## 5. Recall je sodoben, a pozorno preverite uvoznik

Recall je najmlajši med glavnimi priporočili. Na seznam se je uvrstil, ker [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) ponuja označene namizne izdaje, PWA, ki jo lahko namestite, izrecno lokalno hrambo, FSRS, izvoz podatkov in dokumentirano zasnovo sinhronizacije na lastni infrastrukturi.

Namizna aplikacija pod licenco MIT uporablja SQLite, PWA pa IndexedDB. Nobena ne potrebuje računa, projekt pa navaja, da je telemetrija privzeto izključena. Namizne izdaje so na voljo za Windows, macOS in Linux.

Uvoznik APKG je uporaben, vendar izraz »zgodovina ponavljanja« v README-ju obljublja več, kot prenese uvoznik v označeni različici. [Izvorna koda uvoznika v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) ne bere Ankijevega dnevnika ponavljanj. Prebere trenutno stanje kartice, interval, število ponavljanj in pozabljenih odgovorov pri že naučenih karticah ter stabilnost in težavnost FSRS, kadar ju je Anki shranil. Pri starejših karticah brez teh polj FSRS ju Recall oceni iz vrednosti SM-2.

Tudi pretvorba vsebine ima omejitve. Uvoznik uporabi prvi dve polji zapisa kot sprednjo in zadnjo stran, namesto da bi poustvaril Ankijeve vrste zapisov in predloge. Ohrani imena kompletov in oznake. Izlušči običajne oblike slik in popravi njihove sklice, preskoči pa zvok in druge predstavnostne datoteke. Ker je uvoznik ukaz Tauri, je neposreden prenos APKG namizna funkcija, ki je PWA v brskalniku nima.

To je precej bolje od ponovnega sestavljanja iz navadnega besedila, vendar ne ohrani celotne zbirke. Pred večjim prenosom preizkusite naloge z izpuščenim besedilom, sorodne kartice iz istega zapisa, dodatna polja, HTML/CSS, slike, zvok, roke in ponovljene zapise.

Recall ima dve poti sinhronizacije. Namizna aplikacija lahko zapiše posnetek v mapo, ki jo upravlja Dropbox, Drive ali drugo orodje za sinhronizacijo datotek. Izbirni posrednik uporablja Cloudflare Worker in shrambo R2. Po [zasnovi sinhronizacije v označeni različici](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) odjemalci pred nalaganjem šifrirajo posnetke z AES-GCM; posrednik vidi šifrirane podatke, ne vsebine kartic ali ključa. Posodobitve uporabljajo optimistični nadzor sočasnosti in ob konfliktu enkrat poskusijo znova, vendar še vedno združujejo celotne posnetke, ne posameznih polj. Javnega posrednika, ki bi ga financiral vzdrževalec, ni: postavite ga sami in vnesete njegov URL.

Izvozi JSON in arhivov Recall omogočajo prenos podatkov drugam. Preden izvoz označite za varnostno kopijo, ga obnovite v prazen profil.

Recall izberite, če želite sodobno namizno aplikacijo oziroma PWA, ki temelji na lokalnih podatkih, ter lahko sprejmete mlad projekt in uvoznik, ki ohrani uporaben posnetek namesto celotnega sistema Anki.

## 6. Essentialist hrani berljiv komplet, stanje učenja pa ločeno

Essentialist med temi aplikacijami pokriva najožji nabor funkcij. Vsak komplet je datoteka Markdown, ki jo lahko odprete v urejevalniku besedila, hranite v sistemu za nadzor različic ali kopirate z običajnimi datotečnimi orodji. Aplikacija namenoma ne pošilja omrežnih zahtev.

Zadnja stabilna izdaja je [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Vključuje namestitvene datoteke za Android, macOS in Linux; uporabniki Windows jo zgradijo iz kode. [README označene izdaje](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) kot razporejevalnik navaja SM-2.

[README privzete veje](https://github.com/essentialist-app/essentialist/blob/main/README.md) zdaj navaja FSRS, v repozitoriju pa so bile spremembe kode tudi leta 2026. To kaže smer razvoja, ni pa razlog, da bi pripravljeno aplikacijo iz leta 2025 označili kot izdajo s FSRS.

Markdown zajame manj, kot se sprva zdi. Besedilo kartic je v vidni datoteki, napredek pa v skriti podatkovni bazi z imenom `.<deck file>.db`. Če kopirate `sample.md` brez `.sample.md.db`, shranite vprašanja in odgovore, izgubite pa stanje učenja.

Vgrajene sinhronizacije med napravami ali strežnika ni. Datoteke lahko postavite v svojo sinhronizirano mapo, vendar potem sami prevzamete reševanje konfliktov in obnovitev.

Essentialist izberite, če sta vam bistvena berljiv Markdown in delo brez omrežja. Ne gre za nemoten sistem za več naprav, ena vidna datoteka pa ni popolna varnostna kopija.

## Štirje dejavni projekti, ki jih je vredno spremljati

Ti projekti so se dejansko razvijali tudi v letu 2026. Ostajajo zunaj glavne šesterice, ker je za priporočilo potrebno več kot zanimiva izvorna koda.

| Projekt | Kaj že ponuja | Kaj še preprečuje uvrstitev med glavna priporočila |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Kodo pod licenco AGPL, razporejevalnike FSRS/SM-2/Leitner, postavitev z Dockerjem, upravljano storitev, uvoz CSV in izvoz podatkov | Ustvarjen julija 2026; nima označene izdaje aplikacije. Njegova izdaja na GitHubu je zvočni paket, ne izdaja aplikacije |
| [Openlet](https://github.com/ChloeVPin/openlet) | Spletno aplikacijo pod licenco MIT s FSRS, uvozom CSV, zakrivanjem delov slik in dokumentirano arhitekturo Supabase/Vercel | Brez označene izdaje; uradna dokumentacija še ne opredeljuje v celoti dela brez povezave, izvoza in obnovitve pri lastnem gostovanju |
| [Prep](https://github.com/Zamua/prep-app) | Kodo pod licenco MIT, FSRS, gostovano uporabo in dokumentirano postavitev v izvajalnem okolju celld, ki ga lahko gostujete sami | Brez označene izdaje; lastno gostovanje pomeni tudi upravljanje celld in objektne shrambe, ne le namestitve samostojne aplikacije za kartice |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Mobilno aplikacijo Kotlin pod licenco GPLv3, FSRS/SM-2, izdajo za Android in uvoz APKG s predlogami in predstavnostnimi datotekami | Ustvarjen leta 2026; iOS zahteva gradnjo iz kode, uradna navodila pa ne opredeljujejo splošne sinhronizacije med telefoni |

Več znanih imen ne izpolni meril iz preprostejših razlogov. Mochijev [odprtokodni repozitorij](https://github.com/mochi-cards/open-source) je zbirka integracij, ne jedro aplikacije. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) je odprtokoden in omogoča lastno gostovanje, vendar njegov uradni README razmaknjeno ponavljanje še vedno uvršča med »Features coming soon« (Prihajajoče funkcije). [OpenCards](https://github.com/holgerbrandl/opencards) ni izdal nove različice od [v2.5.1 januarja 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), v njegovem repozitoriju pa od leta 2018 ni bilo spremembe kode.

Če dostop do kode ni pogoj, [širša primerjava alternativ Ankiju](/sl/blog/best-anki-alternatives/) vključuje izdelke, ki odgovarjajo na drugačno vprašanje.

## Prenos preverite v petih ločenih plasteh

Trditev »uvaža iz Ankija« brez naslednjega stavka pove zelo malo. Prenos lahko uspe v eni plasti in odpove v preostalih štirih.

| Plast | Kaj primerjati | Zavajajoč znak uspeha |
| --- | --- | --- |
| Vsebina kartic | Vsako polje, oznako izpuščenega besedila, oznako, poseben znak in ponovljen zapis | Skupno število kartic je približno enako |
| Struktura | Vrste zapisov, predloge, ustvarjene sorodne kartice in vgnezdene komplete | Besedilo sprednje in zadnje strani se je nekje pojavilo |
| Predstavnostne datoteke | Slike in zvok so prekopirani, lokalni sklici delujejo, vsebina se prikaže oziroma predvaja brez povezave | Uvoznik je prepoznal imena datotek |
| Stanje učenja | Dnevnik ponavljanj, stanje, rok, interval, pozabljene odgovore pri že naučenih karticah in parametre razporejevalnika | Uvožene kartice so prisotne, a tiho začnejo znova kot nove |
| Izvoz in obnovitev | Dokumentiran izvoz ali varnostna kopija lahko isti sistem obnovi drugje | Berljiv besedilni izvoz se obravnava kot popolna varnostna kopija |

Pred prenosom prave zbirke sestavite en namenoma zahteven preizkusni komplet. Vključite dodatna polja, naloge z izpuščenim besedilom, predloge v obeh smereh, vgnezdene komplete, oznake, slike, zvok in dovolj zgodovine ponavljanja, da boste videli, ali jo je ciljna aplikacija ohranila.

Ohranite nedotaknjeno izvorno varnostno kopijo. Po uvozu ločeno primerjajte število zapisov, kartic in predstavnostnih datotek. Preglejte roke, namesto da zaupate sporočilu »razporejanje uvoženo«. Ponavljajte brez povezave na vsaki napravi, ki jo nameravate uporabljati. Nato na dveh napravah naredite začasne nasprotujoče si spremembe in opazujte sinhronizacijo.

Oba sistema uporabljajte nekaj dni. Brisanje stare zbirke je zadnji korak, ne dokaz, da nova deluje.

## Lastno gostovanje je preverjeno šele po obnovitvi

Zgornji izdelki z izrazom »lastno gostovanje« opisujejo precej različne stvari:

- Anki in Mnemosyne poganjata **storitve za sinhronizacijo**, nameščeni odjemalci pa ostanejo vmesnik za učenje.
- SiYuan v Dockerju poganja **spletno aplikacijo**, ki je namenski odjemalci ne morejo uporabljati kot svoj sinhronizacijski strežnik.
- Recall poganja **posrednika za šifrirane posnetke**, ne same PWA.
- Nibomo postavi **celoten spletni in zaledni sistem**, namenske aplikacije pa se še vedno gradijo ločeno.
- Essentialist **nima strežnika**; v vaših rokah so lokalne datoteke.

Ko je ta obseg jasen, preizkusite del, ki ga upravljavci radi odlagajo:

1. Ustvarite kartice, priložite predstavnostne datoteke, opravite ponavljanja in sinhronizirajte iz dveh odjemalcev.
2. Shranite vse dokumentirane podatkovne baze, vsebnike objektne shrambe, lokalne datoteke, skrivnosti in nastavitvene vrednosti.
3. Obnovite jih v prazen račun, računalnik ali ločeno postavitev.
4. Primerjajte število kartic, predstavnostne datoteke, zgodovino ponavljanja, stanje zapadlih kartic, prijavo in sinhronizacijo odjemalcev.
5. Nadgradite obnovljeno kopijo in opravite še en cikel ponavljanja.

Če je obnovitev še vedno odvisna od starega računalnika, imate delujočo storitev. Nimate pa preverjene varnostne kopije.

## Pogosta vprašanja

### Katera je najboljša odprtokodna aplikacija za učne kartice v letu 2026?

Anki je najboljša privzeta izbira za večino ljudi. Združuje zrel model zbirke, FSRS, široko izbiro odjemalcev in najbogatejše lastne oblike varnostnih kopij ter izvoza. Omejitev je, da odprtokodni namizni repozitorij ne zajema uradne aplikacije za iOS in spletne storitve, njegov strežnik za lastno gostovanje pa omogoča sinhronizacijo, ne učenja v brskalniku.

### Katera je najboljša odprtokodna alternativa Ankiju?

Mnemosyne je najbolj uveljavljena alternativa, osredotočena na učenje, in uradno dokumentira uvoz Ankijevih vrst kartic po meri ter podatkov o učenju. Recall deluje bolj sodobno in neposredno uvaža APKG na namizju, vendar pretvori prvi dve polji zapisa, ohrani le posnetek stanja razporejanja, uvozi slike, ne zvoka, in ne prenese celotnega dnevnika ponavljanj.

### Ali lahko Anki gostujem sam?

Da, za združljive odjemalce lahko poganjate uradni sinhronizacijski strežnik Anki. Ni pa to nadomestilo za AnkiWeb na vašem strežniku: spletnega vmesnika za učenje ni.

### Ali odprta koda pomeni delovanje brez povezave?

Ne. Odprta koda opisuje licenco in dostop do izvorne kode. Delo brez povezave je odvisno od tega, kje odjemalec hrani podatke in katera dejanja potrebujejo storitev. Velja tudi obratno: aplikacija lahko hrani podatke lokalno, ne da bi objavila kodo svojega jedra.

### Ali lastno gostovanje zagotavlja prenosljivost?

Ne. Lastno gostovanje omogoča nadzor nad tem, kje storitev teče. Prenosljivost je odvisna od izvoza, popolnih varnostnih kopij in obnovitve, ki ste jo dejansko preizkusili. Podatkovno bazo na svojem strežniku je lahko še vedno težko prenesti, berljiv komplet Markdown pa lahko izpusti stanje ponavljanja, shranjeno ob njem.

## Moje priporočilo

Ostanite pri **Ankiju** ali ga izberite, razen če vam katera od njegovih omejitev povzroča resnično težavo. **Mnemosyne** izberite za osredotočeno lokalno učenje na namizju in uveljavljen uvoz iz Ankija. **SiYuan** uporabite, kadar učne kartice sodijo v večjo bazo znanja. O **Nibomu** razmislite, ko lastništvo celotne kode za splet, namenske odjemalce in zaledni sistem upraviči produkcijsko infrastrukturo AWS. **Recall** izberite za sodobnega odjemalca, ki temelji na lokalnih podatkih, potem ko preverite omejitve pretvorbe. **Essentialist** izberite, ko sta navaden Markdown in popolna odsotnost omrežnega dostopa pomembnejša od sinhronizacije.

Najboljša odprtokodna aplikacija za učne kartice ni repozitorij z najdaljšim seznamom funkcij. Je tista, katere obseg kode, lokalni podatki, prenos, sinhronizacija, gostovanje in obnovitev ustrezajo sistemu, za katerega ste dejansko pripravljeni skrbeti.
