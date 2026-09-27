---
title: "Najbolje aplikacije otvorenog koda za kartice za učenje u 2026.: usporedba 6 FOSS opcija"
description: "Usporedite šest održavanih aplikacija otvorenog koda za kartice za učenje prema dostupnosti koda, lokalnim podacima, sinkronizaciji, uvozu iz Ankija, izvozu, vlastitom hostingu i oporavku."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "najbolje aplikacije otvorenog koda za kartice za učenje"
  - "aplikacija otvorenog koda za kartice za učenje"
  - "razmaknuto ponavljanje otvorenog koda"
  - "kartice za učenje na vlastitom poslužitelju"
  - "aplikacija za kartice za učenje bez interneta"
  - "alternativa Ankiju otvorenog koda"
  - "FOSS kartice za učenje"
---

Anki je i u 2026. za većinu ljudi najbolja aplikacija otvorenog koda za kartice za učenje. Izbor postaje zanimljiviji kada otvoreni kod nije vaš jedini obvezni uvjet.

Možda trebate aplikaciju koja radi u pregledniku na vašem poslužitelju. Ili špil koji možete čitati kao običan Markdown. Ili privatni sustav bilježaka iz kojih nastaju kartice. Ti zahtjevi vode prema različitim proizvodima, a javni repozitorij na GitHubu sam po sebi nije dovoljan za odluku.

Računalni klijent otvorenog koda može postojati uz aplikaciju za iPhone zatvorenog koda. Dockerov spremnik može posluživati sučelje u pregledniku bez sinkronizacije s izvornim klijentima. Uvoz može vratiti riječi, a izgubiti predloške, medije i godine povijesti ponavljanja zbog kojih je zbirka bila korisna.

Šest projekata zadovoljilo je kriterije ovog pregleda. Usporedio sam njihov licencirani izvorni kod, najnovije stabilno izdanje, lokalne podatke, algoritam raspoređivanja, sinkronizaciju, migraciju iz Ankija, izvoz i točno ono što možete sami hostati. Što točno možete sami hostati važnije je nego što se iz većine popisa značajki može zaključiti.

> **Napomena o autoru:** Ja sam Kirill Markin i razvijam [Nibomo](https://nibomo.com/), jednu od šest aplikacija u nastavku. Njegov repozitorij pod licencom MIT obuhvaća web-aplikaciju, izvorne klijente, backend, sinkronizaciju i infrastrukturu. Nisam ga stavio na prvo mjesto. Anki je sigurniji početni izbor, Mnemosyne ima uhodaniji postupak migracije iz Ankija, a nekoliko je opcija ovdje mnogo jednostavnije održavati.

**Činjenice provjerene:** 5. rujna 2026. Stabilna izdanja odvojena su od rada koji postoji samo na zadanoj grani repozitorija.

![Planinar uspoređuje šest otvorenih ruksaka i provjerava pričuvni komplet prije odabira aplikacije otvorenog koda za kartice za učenje](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Kratak odgovor

| Vaš glavni zahtjev | Najbolji izbor | Zašto | Što prvo treba provjeriti |
| --- | --- | --- | --- |
| Pouzdan sustav opće namjene ili složena postojeća zbirka | [Anki](https://apps.ankiweb.net/) | Zreli model kartica i predložaka, FSRS, dodaci, velik izbor klijenata i bogat izvoz u pakete | Službena aplikacija za iOS i AnkiWeb nisu dio otvorenog koda računalne aplikacije; vlastiti hosting daje sinkronizaciju, a ne AnkiWeb |
| Namjenski alat za učenje na računalu s uhodanim uvozom iz Ankija | [Mnemosyne](https://mnemosyne-proj.org/) | Lokalno učenje, uvoz Ankijevih vrsta kartica i podataka o učenju te poslužitelj za sinkronizaciju koji možete sami pokrenuti | Verzija 2.11 još je najnovije stabilno izdanje; Android omogućuje ponavljanje, ali ne i uređivanje |
| Bilješke i kartice unutar jedne lokalne baze znanja | [SiYuan](https://b3log.org/siyuan/en/) | Izvorne aplikacije koje rade bez interneta, ugrađeni FSRS i prava aplikacija za preglednik koja radi u Dockeru | Klijenti u Dockeru ne mogu se sinkronizirati s izvornim aplikacijama, a neke naredbe za uvoz i izvoz nisu dostupne u Dockeru |
| Izvorni kod za web, mobilne klijente, backend i infrastrukturu | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Jedan monorepozitorij pod licencom MIT s dokumentiranom produkcijskom instalacijom | Podržana produkcijska infrastruktura oslanja se na AWS, a migracija iz Ankija gubi dio podataka |
| Mlađa računalna aplikacija koja prvenstveno radi lokalno i izravno uvozi APKG | [Recall](https://github.com/Madlezz/Recall) | FSRS, računalna izdanja, PWA, lokalne baze i neobvezan šifrirani posrednički servis | Uvoz čuva samo snimku stanja rasporeda, obrađuje prva dva polja bilješke i preskače zvuk |
| Špilovi u čitljivom Markdownu bez ovisnosti o mreži | [Essentialist](https://github.com/essentialist-app/essentialist) | Obične datoteke špilova i računalna/Android aplikacija namjerno osmišljena za rad bez mreže | Nema sinkronizacije, a napredak se čuva u zasebnoj skrivenoj bazi |

Ovo nije bodovanje značajki. Krenite od problema koji ne možete prihvatiti. Ako imate deset godina ponavljanja u Ankiju, vjernost migracije važnija je od urednijeg sučelja. Ako sustav održavate za školu, pristup iz preglednika i provjeren oporavak mogu biti važniji od dodataka.

## Što se računa kao aplikacija otvorenog koda za kartice za učenje

Primijenio sam četiri kriterija:

1. **Osnovne funkcije učenja imaju objavljen izvorni kod i izričitu licencu otvorenog koda.** Direktorij integracija oko neobjavljene jezgre ne računa se.
2. **Razmaknuto ponavljanje radi već danas.** Stavka u planu razvoja ili običan kviz nisu dovoljni.
3. **Postoji objavljeno izdanje ili jasno dokumentiran službeni postupak instalacije.** Nedavni commitovi sami po sebi ne čine prototip sigurnom preporukom.
4. **Službeni izvori dovoljno jasno opisuju rad s podacima da ga je moguće provjeriti.** Trebali su mi konkretni odgovori o lokalnoj pohrani, sinkronizaciji, uvozu i izvozu ili hostingu, a ne neodređeno obećanje da korisnici „posjeduju svoje podatke”.

Broj zvjezdica nije bio kriterij za prolaz. One odražavaju starost projekta i publicitet koliko i prikladnost proizvoda. Zrelost je ipak važna. Anki, Mnemosyne i SiYuan imaju uhodana izdanja i načine rada. Recall i Essentialist dobili su uže preporuke jer je ponašanje njihovih objavljenih izdanja dovoljno dobro dokumentirano za konkretan savjet.

I tvrdnju da se projekt „održava” treba provjeriti na dva mjesta. Izdanje s oznakom verzije govori što korisnici mogu instalirati, a zadana grana kamo projekt ide. Essentialist je najjasniji primjer. Njegovo stabilno izdanje dokumentira SM-2, dok trenutačna grana dokumentira FSRS. Tablica u nastavku navodi SM-2.

## Usporedba šest FOSS aplikacija za kartice za učenje

| Aplikacija | Provjerena stabilna verzija | Platforme | Podaci dostupni bez interneta | Algoritam raspoređivanja | Sinkronizacija | Migracija iz Ankija i izvoz za prelazak drugdje | Što možete sami hostati |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. kolovoza 2026. | Windows, macOS, Linux; zasebni klijenti za Android i iOS; AnkiWeb | Instalirani klijenti za učenje koriste lokalne zbirke | FSRS ili stariji SM-2 | AnkiWeb ili službeni poslužitelj za sinkronizaciju na vlastitoj infrastrukturi | Uvozi tekst, APKG/COLPKG i baze Mnemosynea; izvozi tekst ili pakete s opcijama za medije i raspored | **Samo poslužitelj za sinkronizaciju.** Nema vlastitog AnkiWeba ni sučelja za učenje u pregledniku |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. studenoga 2023.; rad na repozitoriju nastavljen je 2026. | Windows, macOS, Linux, Android; ograničeno ponavljanje u pregledniku | Računalna aplikacija radi lokalno; Android omogućuje ponavljanje bez interneta, ali ne i uređivanje | Prilagodljivo ocjenjivanje prisjećanja od 0 do 5 | Ugrađena sinkronizacija s računalnom instancom ili instancom bez grafičkog sučelja | Službeno dokumentira potpun uvoz iz Ankija s prilagođenim vrstama kartica i podacima o učenju; izvoz za dijeljenje nije potpuna sigurnosna kopija | **Sinkronizacija i ograničeno ponavljanje u pregledniku.** Poslužitelj za preglednik nema sigurnosne funkcije |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. kolovoza 2026. | Windows, macOS, Linux, Android, iOS, HarmonyOS; preglednik putem Dockera | Izvorni klijenti čuvaju radni prostor lokalno | FSRS | Plaćena službena sinkronizacija s end-to-end šifriranjem ili plaćena integracija s vanjskim S3/WebDAV spremištem | Puna aplikacija uvozi Markdown/podatke i izvozi nekoliko formata dokumenata i podataka; nema dokumentiranog uvoza APKG-a | **Potpuna aplikacija za preglednik.** Docker ne može sinkronizirati izvorne klijente i nema neke naredbe za uvoz i izvoz |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. rujna 2026. | Web, iOS, Android | IndexedDB na webu; SQLite na iOS-u; Room nad SQLiteom na Androidu; lokalne promjene čekaju u redu za sinkronizaciju | FSRS | Backend pružatelja usluge ili backend koji sami postavite | Vlastiti ZIP prenosi kartice, oznake, metapodatke o izvoru i povezane medije, ali ne i špilove, stanje učenja, postavke ili račune; nema uvoza APKG-a | **Potpun web i backend sustav.** Produkcijska instalacija oslanja se na AWS; privatna izdanja izvornih aplikacija izrađuju se zasebno |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. srpnja 2026. | Windows, macOS, Linux; PWA koji se može instalirati | SQLite na računalu; IndexedDB u pregledniku; bez računa ili telemetrije prema zadanim postavkama | FSRS | Sinkronizacija mape na računalu ili neobvezan šifrirani posrednički servis na Cloudflare Workeru/R2 | Uvoz APKG-a na računalu čita prva dva polja, špilove, oznake, približnu snimku rasporeda i slike; izvoz u JSON i arhivu Recall | **Samo posrednički servis za šifrirane snimke stanja.** Ne hosta PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. listopada 2025.; rad na izvornom kodu nastavljen je 2026. | Android APK, macOS DMG, Linux Flatpak; izdanje za Windows gradi se iz izvornog koda | Bez pristupa mreži; sadržaj špila je Markdown | Stabilno izdanje: SM-2; zadana grana: FSRS | Nema je | Markdown čuva sadržaj kartica; skrivena prateća baza čuva napredak | **Nema što hostati.** Zajedno sigurnosno kopirajte Markdown datoteku i njezinu prateću bazu |

## 1. Anki je najsigurniji početni izbor

Anki se ističe u manje upadljivim, ali važnim stvarima. Može prikazati složene vrste bilježaka, iz predložaka stvarati povezane kartice, držati medije uz zbirku i čuvati godine podataka o rasporedu. Stabilno računalno izdanje korišteno u ovom pregledu jest [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Novije izdanje 26.09b2 označeno je kao beta, pa ovdje nije polazište.

Otvorenost koda razlikuje se od dijela do dijela sustava. [Repozitorij računalne aplikacije ima licencu AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), uz navedene iznimke za uključene komponente. [AnkiDroid](https://github.com/ankidroid/Anki-Android) zaseban je projekt otvorenog koda za Android. AnkiMobile i AnkiWeb službeni su dijelovi ponude, ali njihov kod nije uključen u te repozitorije. Opširnije o tome piše u članku [Je li Anki otvorenog koda?](/blog/is-anki-open-source/).

Instalirani klijenti čuvaju lokalne zbirke, pa uobičajeno ponavljanje radi bez veze. AnkiWeb je mrežni dio sustava. Ako je rad bez interneta presudan, članak [Radi li Anki bez interneta?](/blog/does-anki-work-offline/) razdvaja ono što ostaje lokalno od onoga što čeka sinkronizaciju.

Anki podržava [FSRS i stariji algoritam raspoređivanja](https://docs.ankiweb.net/deck-options.html). Njegovi izvozni formati najbolja su početna točka za migraciju u ovoj skupini. [COLPKG sadrži cijelu zbirku s rasporedom](https://docs.ankiweb.net/exporting.html), dok izvoz u APKG može uključiti raspored i medije ako odaberete te opcije. Anki uvozi i tekst, Ankijeve pakete te baze Mnemosyne 2.0.

Tako bogat izvorni paket ne jamči savršen uvoz drugdje. Odredišna aplikacija i dalje mora razumjeti predloške, pravila stvaranja kartica, reference na medije i polja algoritma raspoređivanja. Samo ima više podataka na raspolaganju nego iz CSV datoteke.

[Službeni poslužitelj za vlastiti hosting](https://docs.ankiweb.net/sync-server.html) namjerno ima malen opseg. Sinkronizira kompatibilne klijente za Anki; ne pruža AnkiWeb, ponavljanje u pregledniku ni portal za račune. Prema zadanim postavkama prima zahtjeve preko nešifriranog HTTP-a, a vodič preporučuje lokalnu mrežu, VPN ili HTTPS obrnuti proxy ispred poslužitelja. Verzije klijenta i poslužitelja također moraju ostati kompatibilne.

Odaberite Anki kada su na prvom mjestu očuvanje zbirke, predlošci, dodaci ili široka podrška za klijente. Potražite nešto drugo tek kada je važniji konkretan zahtjev, primjerice vlastito sučelje za preglednik ili potpuno objavljen kod mobilnih aplikacija.

## 2. Mnemosyne se drži lokalnog učenja

Mnemosyne djeluje kao računalni alat za učenje jer to i jest. S njim ne dobivate čitavu bazu znanja ili platformu u oblaku. Dobivate lokalnu bazu, klasičan postupak razmaknutog ponavljanja, prateću Android aplikaciju za ponavljanje i poslužitelj za sinkronizaciju koji može raditi na računalu s grafičkim sučeljem ili bez njega.

Najnovije stabilno izdanje još je [2.11 iz studenoga 2023.](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Repozitorij je primao promjene u 2026., ali to te promjene ne pretvara u stabilan instalacijski paket. Isprobajte 2.11 na operacijskim sustavima koje planirate koristiti sljedećih nekoliko godina.

Licencu također nije dovoljno opisati jednom oznakom. [Pregled licenci u korijenu repozitorija](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) dodjeljuje LGPL v3 komponenti openSM2sync, a ostatku Mnemosynea zasebne uvjete. [Licenca glavnog programa](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) primjenjuje AGPL v3 uz dodatnu odredbu da naziv Mnemosyne mora ostati jasno vidljiv u izvedenom djelu, pri čemu se točan oblik dogovara s održavateljima. Pročitajte taj tekst prije daljnje distribucije izmijenjenog izdanja.

[Android klijent omogućuje ponavljanje bez interneta, ali ne i uređivanje kartica](https://mnemosyne-proj.org/help/android-client). Drugi uređaji mogu koristiti poslužitelj za ponavljanje u pregledniku pokrenut iz računalne aplikacije, no službena stranica značajki upozorava da taj poslužitelj nema sigurnosne funkcije. To je praktično sučelje za lokalnu mrežu, a ne dovršena javna web-aplikacija.

Migracija je najbolji Mnemosyneov argument protiv jednostavnog ostanka na Ankiju. Službena stranica značajki dokumentira [potpun uvoz iz Ankija, uključujući prilagođene vrste kartica i podatke o učenju](https://mnemosyne-proj.org/features). [Ugrađena sinkronizacija](https://mnemosyne-proj.org/help/syncing) spaja kartice i podatke o učenju te se može povezati s računalom pod vašom kontrolom.

Uobičajena naredba za izvoz može zavarati ako je koristite za sigurnosne kopije. Namijenjena je dijeljenju odabranih kartica i izostavlja podatke o učenju. Za premještanje ili oporavak cijelog sustava [vodič za više računala](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) upućuje na kopiranje cijelog podatkovnog direktorija.

Mnemosyne je ovdje najjača alternativa Ankiju otvorenog koda namijenjena isključivo učenju. Kompromisi su rijetka stabilna izdanja, ograničeno uređivanje na mobitelu i sučelje za preglednik kojem treba pažljivo ograničiti mrežni pristup.

## 3. SiYuan ima smisla kada su bilješke glavni sustav

SiYuan je aplikacija za upravljanje znanjem kojoj je privatnost na prvom mjestu, s karticama ugrađenima u isti model blokova i dokumenata. To je korisno kada iz bilježaka nastaje gradivo za ponavljanje. No ako želite samo red kartica za ponavljanje, dobivate mnogo složeniji sustav nego što trebate.

[Repozitorij pod licencom AGPL-3.0](https://github.com/siyuan-note/siyuan) povezuje sučelje, jezgru, mobilne aplikacije, podatkovni sloj i komponentu FSRS. Ovdje je provjereno stabilno izdanje [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Računalni i mobilni klijenti čuvaju radni prostor lokalno i nastavljaju raditi bez interneta.

Sinkronizacija nije dio besplatnog paketa s lokalnom pohranom. [Službeni cjenik](https://b3log.org/siyuan/en/pricing.html) uz pretplatu nudi službenu sinkronizaciju s end-to-end šifriranjem, dok plaćene Pro značajke dodaju integracije s vlastitom S3 ili WebDAV pohranom. Projekt također upozorava da aktivni radni prostor ne stavljate u mapu običnog alata za sinkronizaciju datoteka jer istodobne izmjene mogu oštetiti ili prepisati podatke.

Docker pokreće pravu aplikaciju za preglednik, ali ne postaje poslužitelj za sinkronizaciju instaliranih aplikacija. [Dokumentacija za Docker u v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) kaže da se računalni i mobilni klijenti ne mogu povezati s njim. U Dockeru također nema uvoza Markdowna ni izvoza u PDF, HTML i Word. Te naredbe postoje u punoj izvornoj aplikaciji, pa bi prepisivanje općeg popisa značajki u plan instalacije s Dockerom dalo pogrešnu sliku.

Nisam pronašao službeni alat za uvoz APKG-a. SiYuan može prenositi Markdown i vlastite podatkovne formate, ali zbirku iz Ankija treba pažljivije ponovno izgraditi.

Odaberite SiYuan kada je baza znanja glavni proizvod i kartice trebaju biti unutar nje. Ako tražite izravnu zamjenu za Anki, kod Mnemosynea i Ankija jasnije je što migracija obuhvaća.

## 4. Nibomo objavljuje veći dio sustava, a vi ga trebate održavati

Nibomo u ovoj usporedbi objavljuje izvorni kod za najviše dijelova proizvoda. Monorepozitorij pod licencom MIT uključuje web-aplikaciju, klijente za iOS i Android, backend, servis za autentifikaciju, sinkronizaciju, administratorsku aplikaciju, migracije baze i AWS infrastrukturu. Ovdje je korišteno stabilno izdanje [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Kasniji rad na zadanoj grani ne računa se kao objavljena funkcionalnost.

[Arhitektura](/docs/architecture/) daje prednost radu bez interneta, no to na svakom klijentu znači nešto malo drukčije. Web-aplikacija svoju glavnu lokalnu kopiju podataka čuva u IndexedDB-u. iOS koristi SQLite, a Android Room nad SQLiteom. Promjene se zapisuju lokalno i prije sinkronizacije stavljaju u izlazni red. Taj dizajn podnosi prekid veze; ne čini pohranu preglednika trajnom niti uklanja potrebu za provjerom pokretanja ugašene aplikacije na svakom uređaju.

Nibomov vlastiti ZIP paket format je za prijenos sadržaja, a ne sigurnosna kopija računa. U v1.23.0 njegova [shema paketa](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) prenosi sadržaj prednje i stražnje strane, oznake, vrstu kartice, metapodatke o izvoru i metapodatke paketa; povezani mediji pakiraju se zasebno. Ne prenosi strukturu špilova, povijest ponavljanja, stanje FSRS-a, postavke radnog prostora ni račune.

U v1.23.0 nema uvoza APKG-a. Dokumentirani [postupak migracije iz Ankija putem TXT-a/CSV-a](/blog/migrate-from-anki-txt-export-open-source-flashcards/) koristi izvezeni tekst za ponovnu izradu kartica i zahtijeva ljudski pregled. Predlošci, stanje rasporeda, struktura špilova i zapakirani mediji ne prenose se automatski tim putem. To je razumno za jednostavan tekstualni špil, a loš izbor za jako prilagođenu zbirku.

[Vodič za vlastiti hosting](/docs/self-hosting/) jednako je izričit. Produkcija koristi AWS CDK sustav s RDS-om, Cognitom, API Gatewayem i Lambdom, S3-om i CloudFrontom, tajnim vrijednostima, alarmima i sigurnosnim kopijama. Cloudflare DNS, e-pošta putem Resenda i konfiguracija Sentryja nalaze se izvan AWS-a. Docker Compose služi lokalnom razvoju; nije podržani produkcijski paket. Oni koji žele privatna binarna izdanja za iOS ili Android izrađuju ih i distribuiraju zasebno.

Odaberite Nibomo kada vlasništvo nad cijelim izvornim kodom weba, izvornih aplikacija i backenda opravdava taj rad na održavanju. Odaberite Anki ili Mnemosyne kada je očuvanje postojeće zbirke važniji zahtjev.

## 5. Recall je moderan, ali pažljivo proučite uvoz

Recall je najmlađi među glavnim preporukama. Ušao je na popis jer [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) nudi računalna izdanja s oznakom verzije, PWA koji se može instalirati, jasno opisanu lokalnu pohranu, FSRS, izvoz podataka i dokumentiran model sinkronizacije na vlastitoj infrastrukturi.

Računalna aplikacija pod licencom MIT koristi SQLite, a PWA IndexedDB. Nijedna ne traži račun, a projekt navodi da je telemetrija prema zadanim postavkama isključena. Računalna izdanja pokrivaju Windows, macOS i Linux.

Uvoz APKG-a koristan je, ali izraz „povijest ponavljanja” u README-u obećava previše u odnosu na implementaciju označenog izdanja. [Izvorni kod alata za uvoz u v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) ne čita Ankijev dnevnik ponavljanja. Čita trenutačno stanje kartice, interval, broj ponavljanja i zaboravljanja već naučenih kartica te FSRS parametre stabilnosti i težine kada ih je Anki spremio. Za starije kartice bez tih FSRS polja Recall ih procjenjuje iz vrijednosti SM-2.

I pretvorba sadržaja ima ograničenja. Alat za uvoz koristi prva dva polja bilješke kao prednju i stražnju stranu umjesto da reproducira Ankijeve vrste bilježaka i predloške. Čuva nazive špilova i oznake. Izdvaja uobičajene formate slika i prepisuje njihove reference, ali preskače zvuk i druge medije. Budući da je alat za uvoz naredba Taurija, izravna migracija APKG-a dostupna je na računalu, a ne u PWA-u u pregledniku.

To je mnogo bolje od ponovne izrade iz običnog teksta, ali ne prenosi vjerno cijelu zbirku. Prije velike migracije provjerite zadatke s izostavljenim dijelovima teksta (cloze), povezane kartice iz iste bilješke, dodatna polja, HTML/CSS, slike, zvuk, datume sljedećeg ponavljanja i ponovljene bilješke.

Recall ima dva načina sinkronizacije. Računalna aplikacija može zapisati snimku stanja u mapu kojom upravlja Dropbox, Drive ili drugi alat za sinkronizaciju datoteka. Neobvezan posrednički servis koristi Cloudflare Worker i R2 spremnik. Prema [dizajnu sinkronizacije](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) u označenom izdanju, klijenti prije slanja šifriraju snimke stanja algoritmom AES-GCM; posrednik vidi šifrirani tekst, a ne podatke kartica ili ključ. Ažuriranja koriste optimističku kontrolu konkurentnosti i jedan ponovni pokušaj pri sukobu, ali i dalje spajaju cijele snimke, a ne pojedinačna polja. Nema javnog posredničkog servisa koji financiraju održavatelji: sami ga postavljate i unosite njegov URL.

Izvoz u JSON i arhivu Recall omogućuje vam prelazak na drugi sustav. Vratite jednu takvu kopiju u čist profil prije nego što je nazovete sigurnosnom kopijom.

Odaberite Recall kada želite moderan računalni/PWA klijent koji prvenstveno radi lokalno i možete prihvatiti mlad projekt te uvoz koji čuva korisnu snimku stanja umjesto cijelog Ankijeva sustava.

## 6. Essentialist čini špil čitljivim, ali ne i cijelo stanje

Essentialist je ovdje najuže usmjeren alat. Svaki je špil Markdown datoteka koju možete otvoriti u uređivaču teksta, držati pod kontrolom verzija ili kopirati običnim alatima za datoteke. Aplikacija namjerno ne šalje mrežne zahtjeve.

Najnovije stabilno izdanje jest [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Među priloženim datotekama su izdanja za Android, macOS i Linux; korisnici Windowsa grade aplikaciju iz izvornog koda. [README označenog izdanja](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) navodi SM-2 kao algoritam raspoređivanja.

[README na zadanoj grani](https://github.com/essentialist-app/essentialist/blob/main/README.md) sada navodi FSRS, a izvorni kod mijenjan je tijekom 2026. To pokazuje smjer razvoja, ali nije razlog da se binarno izdanje iz 2025. označi kao FSRS.

Markdown također obuhvaća manje nego što se na prvi pogled čini. Tekst kartica nalazi se u vidljivoj datoteci, dok je napredak u skrivenoj bazi naziva `.<deck file>.db`. Kopiranje `sample.md` bez `.sample.md.db` čuva pitanja i odgovore, ali gubi stanje učenja.

Nema ugrađene sinkronizacije uređaja ni poslužitelja. Datoteke možete staviti u vlastitu sinkroniziranu mapu, ali tada sukobi i oporavak postaju vaša odgovornost.

Odaberite Essentialist kada su čitljiv Markdown i rad bez mreže glavni cilj. To nije sustav za neometan rad na više uređaja, a jedna vidljiva datoteka nije potpuna sigurnosna kopija.

## Četiri aktivna projekta koja vrijedi pratiti

Iza ovih projekata stoji stvaran rad u 2026. Ostaju izvan glavne šestorke jer je za preporuku potrebno više od zanimljivog izvornog koda.

| Projekt | Što već konkretno postoji | Što još sprječava preporuku na glavnom popisu |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Kod pod licencom AGPL, algoritmi FSRS/SM-2/Leitner, instalacija putem Dockera, usluga koju održava pružatelj, uvoz CSV-a i izvoz podataka | Nastao je u srpnju 2026.; nema aplikacijskog izdanja s oznakom verzije. Njegovo izdanje na GitHubu zvučni je paket, a ne izdanje aplikacije |
| [Openlet](https://github.com/ChloeVPin/openlet) | Web-aplikacija pod licencom MIT s FSRS-om, uvozom CSV-a, prekrivanjem dijelova slika i dokumentiranom arhitekturom Supabase/Vercel | Nema označenog izdanja, a službena dokumentacija još ne opisuje cjelovito rad bez interneta, izvoz i oporavak pri vlastitom hostingu |
| [Prep](https://github.com/Zamua/prep-app) | Kod pod licencom MIT, FSRS, dostupna hostana usluga i dokumentirana instalacija u izvršnom okruženju celld koje također možete sami hostati | Nema označenog izdanja; vlastiti hosting znači i održavanje cellda i objektne pohrane, a ne samo instalaciju samostalne binarne aplikacije za kartice |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Mobilna aplikacija u Kotlinu pod licencom GPLv3, FSRS/SM-2, Android izdanje i uvoz APKG-a s predlošcima i medijima | Nastala je 2026.; iOS zahtijeva izgradnju iz izvornog koda, a službena dokumentacija ne definira opću sinkronizaciju između telefona |

Nekoliko poznatih imena ne prolazi kriterije iz jednostavnijih razloga. Mochijev [repozitorij otvorenog koda](https://github.com/mochi-cards/open-source) zbirka je integracija, a ne osnovna aplikacija. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) otvorenog je koda i možete ga sami hostati, ali službeni README još stavlja razmaknuto ponavljanje pod „Features coming soon” (značajke koje tek dolaze). [OpenCards](https://github.com/holgerbrandl/opencards) nije objavio izdanje od [v2.5.1 u siječnju 2017.](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), a kod u repozitoriju nije mijenjan od 2018.

Ako vam pristup izvornom kodu nije obvezan, [šira usporedba alternativa Ankiju](/hr/blog/best-anki-alternatives/) obuhvaća proizvode koji odgovaraju na drukčije pitanje.

## Provjerite migraciju na pet zasebnih razina

„Uvozi iz Ankija” gotovo je beskorisna tvrdnja bez rečenice koja slijedi. Migracija može uspjeti na jednoj razini, a zakazati na preostale četiri.

| Razina | Što usporediti | Varljiv znak uspjeha |
| --- | --- | --- |
| Sadržaj kartica | Svako polje, oznaku izostavljenog teksta (cloze), oznaku za organizaciju, poseban znak i ponovljenu bilješku | Ukupan broj kartica približno se poklapa |
| Struktura | Vrste bilježaka, predloške, generirane kartice iz iste bilješke i ugniježđene špilove | Tekst prednje i stražnje strane negdje se pojavio |
| Mediji | Jesu li slike i zvuk kopirani, dostupni lokalno i rade li bez interneta | Alat za uvoz prepoznao je nazive datoteka |
| Stanje učenja | Dnevnik ponavljanja, stanje, datum sljedećeg ponavljanja, interval, zaboravljanja i parametre algoritma raspoređivanja | Uvezene kartice postoje, ali neprimjetno ponovno počinju kao nove |
| Prelazak drugdje i oporavak | Može li dokumentirani izvoz ili sigurnosna kopija ponovno izgraditi isti sustav drugdje | Čitljiv tekstualni izvoz smatra se potpunom sigurnosnom kopijom |

Prije premještanja stvarne zbirke napravite namjerno nezgodan testni špil. Uključite dodatna polja, cloze zadatke, predloške za oba smjera, ugniježđene špilove, oznake, slike, zvuk i dovoljno povijesti ponavljanja da vidite je li je odredišna aplikacija zadržala.

Sačuvajte netaknutu izvornu sigurnosnu kopiju. Nakon uvoza zasebno usporedite broj bilježaka, kartica i medija. Pregledajte datume sljedećeg ponavljanja umjesto da vjerujete poruci „raspored je uvezen”. Ponavljajte bez interneta na svakom uređaju koji namjeravate koristiti. Zatim na dva uređaja napravite probne sukobljene izmjene i promatrajte što sinkronizacija radi.

Koristite oba sustava nekoliko dana. Brisanje stare zbirke posljednji je korak, a ne dokaz da je novi sustav proradio.

## Vlastiti hosting dovršen je tek nakon obnove iz sigurnosne kopije

Gornji proizvodi izrazom „vlastiti hosting” opisuju vrlo različite sustave:

- Anki i Mnemosyne pokreću **servise za sinkronizaciju**, dok instalirani klijenti ostaju sučelje za učenje.
- SiYuan u Dockeru pokreće **aplikaciju za preglednik** koju izvorni klijenti ne mogu koristiti kao svoj poslužitelj za sinkronizaciju.
- Recall pokreće **posrednički servis za šifrirane snimke stanja**, a ne sam PWA.
- Nibomo postavlja **potpun web i backend sustav**, dok se izvorne aplikacije i dalje grade zasebno.
- Essentialist **nema poslužitelj**; ono čime upravljate lokalne su datoteke.

Kada je jasno što održavate, provjerite dio koji se obično odgađa:

1. Izradite kartice, priložite medije, dovršite ponavljanja i sinkronizirajte dva klijenta.
2. Spremite svaku dokumentiranu bazu, spremnik objektne pohrane, lokalnu datoteku, tajnu vrijednost i konfiguracijsku postavku.
3. Obnovite sustav u praznom računu, na praznom računalu ili u izoliranoj instalaciji.
4. Usporedite broj kartica, medije, povijest ponavljanja, stanje dospjelih kartica, prijavu i sinkronizaciju klijenata.
5. Nadogradite obnovljenu kopiju i dovršite još jedan ciklus ponavljanja.

Ako ponovna izgradnja i dalje ovisi o starom računalu, imate servis koji radi. Nemate provjerenu sigurnosnu kopiju.

## Česta pitanja

### Koja je najbolja aplikacija otvorenog koda za kartice za učenje u 2026.?

Anki je najbolji početni izbor za većinu ljudi koji uče. Spaja zreo model zbirke, FSRS, široku dostupnost klijenata i najbogatije vlastite formate sigurnosnih kopija i izvoza. Ograničenje je to što službena aplikacija za iOS i web nisu obuhvaćeni otvorenim repozitorijem računalne aplikacije, a poslužitelj na vlastitoj infrastrukturi pruža sinkronizaciju, ne učenje u pregledniku.

### Koja je najbolja alternativa Ankiju otvorenog koda?

Mnemosyne je najuhodanija alternativa namijenjena isključivo učenju i službeno dokumentira uvoz Ankijevih prilagođenih vrsta kartica i podataka o učenju. Recall izgleda modernije i izravno uvozi APKG datoteke na računalu, ali pretvara prva dva polja bilješke, čuva samo snimku rasporeda, uvozi slike, a ne zvuk, i ne prenosi cijeli dnevnik ponavljanja.

### Mogu li sam hostati Anki?

Da, možete pokrenuti Ankijev službeni poslužitelj za sinkronizaciju kompatibilnih klijenata. No to nije zamjena za AnkiWeb na vlastitom poslužitelju: nema sučelja za učenje u pregledniku.

### Znači li otvoreni kod da aplikacija radi bez interneta?

Ne. Otvoreni kod opisuje licenciranje i pristup izvornom kodu. Rad bez interneta ovisi o tome gdje klijent čuva podatke i za koje radnje treba servis. Vrijedi i obratno: aplikacija može čuvati podatke lokalno bez objavljivanja svojeg osnovnog izvornog koda.

### Jamči li vlastiti hosting prenosivost podataka?

Ne. Vlastiti hosting daje kontrolu nad time gdje servis radi. Prenosivost ovisi o izvozu, potpunim sigurnosnim kopijama i obnovi koju ste stvarno provjerili. Bazu na vašem poslužitelju i dalje može biti teško migrirati, a čitljiv špil u Markdownu može izostaviti stanje ponavljanja spremljeno pokraj njega.

## Moja preporuka

Zadržite ili odaberite **Anki**, osim ako vam neko njegovo ograničenje stvara stvaran problem. Odaberite **Mnemosyne** za lokalno učenje u namjenskoj računalnoj aplikaciji i uhodan uvoz iz Ankija. Koristite **SiYuan** kada kartice trebaju biti dio veće baze znanja. Razmotrite **Nibomo** kada vlasništvo nad cijelim kodom weba, izvornih aplikacija i backenda opravdava produkcijsku infrastrukturu na AWS-u. Odaberite **Recall** za moderan klijent koji prvenstveno radi lokalno, nakon što provjerite ograničenja pretvorbe. Odaberite **Essentialist** kada su običan Markdown i rad bez ikakvog pristupa mreži važniji od sinkronizacije.

Najbolja aplikacija otvorenog koda za kartice za učenje nije repozitorij s najdužim popisom značajki. To je ona čiji dostupni izvorni kod, lokalni podaci, mogućnosti migracije, sinkronizacija, hosting i oporavak odgovaraju sustavu kojim ste doista spremni upravljati.
