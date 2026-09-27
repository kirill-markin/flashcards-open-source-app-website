---
title: "Cele mai bune aplicații open-source de flashcarduri în 2026: 6 opțiuni FOSS comparate"
description: "Compară șase aplicații open-source de flashcarduri întreținute activ: cod publicat, date offline, sincronizare, import Anki, export, găzduire proprie și restaurare."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "cele mai bune aplicații open-source de flashcarduri"
  - "aplicație open-source de flashcarduri"
  - "repetiție spațiată open-source"
  - "flashcarduri cu găzduire proprie"
  - "aplicație de flashcarduri offline"
  - "alternativă open-source la Anki"
  - "flashcarduri FOSS"
---

Anki rămâne cea mai bună aplicație open-source de flashcarduri pentru majoritatea oamenilor în 2026. Alegerea devine mai interesantă când „open-source” nu este singura condiție obligatorie.

Poate ai nevoie de o aplicație în browser, pe serverul tău. Sau de un pachet pe care să-l poți citi ca text Markdown. Sau de un sistem privat de notițe care generează flashcarduri. Aceste cerințe duc spre produse diferite, iar existența unui depozit public pe GitHub nu este suficientă ca să alegi.

Un client desktop cu sursa publicată poate coexista cu o aplicație iPhone cu sursa închisă. Un container Docker poate găzdui o interfață în browser fără să sincronizeze clienții nativi. Un import poate recupera cuvintele, dar poate pierde șabloanele, fișierele media și anii de istoric al recapitulărilor care făceau colecția utilă.

Șase proiecte au trecut de această evaluare. Am comparat codul sursă și licența sa, ultima versiune stabilă, datele locale, algoritmul de programare a recapitulărilor, sincronizarea, migrarea din Anki, exportul și ce anume poate fi găzduit pe cont propriu. Ultimul aspect contează mai mult decât lasă să se înțeleagă majoritatea listelor de funcții.

> **Declarație de interese:** Sunt Kirill Markin și dezvolt [Nibomo](https://nibomo.com/), una dintre cele șase aplicații de mai jos. Depozitul său sub licență MIT include aplicația web, clienții nativi, backendul, sincronizarea și infrastructura. Nu am pus-o pe primul loc. Anki este alegerea implicită mai sigură, Mnemosyne are o cale de migrare din Anki mai bine stabilită, iar câteva dintre opțiunile de aici sunt mult mai ușor de administrat.

**Informații verificate:** 5 septembrie 2026. Versiunile stabile sunt tratate separat de modificările disponibile doar în ramura implicită a depozitului.

![Un drumeț compară șase rucsacuri deschise și testează un kit de rezervă înainte să aleagă o aplicație open-source de flashcarduri](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Răspunsul scurt

| Cerința ta principală | Opțiunea potrivită | De ce | Limita de verificat mai întâi |
| --- | --- | --- | --- |
| Un sistem fiabil pentru uz general sau o colecție existentă complexă | [Anki](https://apps.ankiweb.net/) | Un sistem matur de carduri și șabloane, FSRS, extensii, clienți pentru multe platforme și exporturi bogate în informații | Aplicația oficială iOS și AnkiWeb nu fac parte din codul desktop open-source; găzduirea proprie oferă sincronizare, nu AnkiWeb |
| O alternativă desktop concentrată pe studiu, cu import Anki consacrat | [Mnemosyne](https://mnemosyne-proj.org/) | Studiu local, importul tipurilor de carduri și al datelor de învățare din Anki și un server de sincronizare pe care îl poți rula singur | 2.11 rămâne ultima versiune stabilă; pe Android poți recapitula, dar nu poți edita |
| Notițe și flashcarduri în aceeași bază locală de cunoștințe | [SiYuan](https://b3log.org/siyuan/en/) | Aplicații native offline, FSRS integrat și o aplicație reală în browser, găzduită prin Docker | Clienții Docker nu se sincronizează cu aplicațiile native, iar unele comenzi de import/export lipsesc din Docker |
| Cod sursă pentru web, mobil, backend și infrastructură | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Un singur monorepo MIT, cu instalare în producție documentată | Infrastructura de producție acceptată se bazează pe AWS, iar migrarea din Anki pierde informații |
| O aplicație desktop mai nouă, bazată pe date locale, cu import APKG direct | [Recall](https://github.com/Madlezz/Recall) | FSRS, versiuni desktop, PWA, baze de date locale și un releu criptat opțional | Importul păstrează doar starea programării la momentul exportului, folosește primele două câmpuri ale notei și omite sunetul |
| Pachete Markdown ușor de citit, fără dependență de rețea | [Essentialist](https://github.com/essentialist-app/essentialist) | Pachete în fișiere text și o aplicație desktop/Android concepută pentru utilizare offline | Nu există sincronizare, iar progresul se află într-o bază de date ascunsă, separată |

Acesta nu este un clasament după numărul de funcții. Pornește de la problema pe care nu o poți accepta. Dacă ai zece ani de recapitulări în Anki, fidelitatea migrării contează mai mult decât o interfață mai curată. Dacă administrezi o instalare pentru o școală, accesul din browser și o restaurare verificată pot conta mai mult decât extensiile.

## Ce am considerat o aplicație open-source de flashcarduri

Am folosit patru criterii de selecție:

1. **Funcțiile de bază pentru studiu au cod publicat și o licență open-source explicită.** Un director de integrări în jurul unui nucleu nepublicat nu este suficient.
2. **Repetiția spațiată funcționează deja.** O mențiune în planul de dezvoltare sau un mod generic de testare nu ajunge.
3. **Există o versiune publicată sau o procedură oficială de instalare documentată clar.** Commiturile recente, singure, nu fac dintr-un prototip o recomandare sigură.
4. **Sursele oficiale explică suficient de bine cum sunt gestionate datele pentru a putea verifica acest lucru.** Am căutat răspunsuri concrete despre stocarea offline, sincronizare, import/export sau găzduire, nu promisiuni vagi că utilizatorii „dețin propriile date”.

Numărul de stele nu a fost un criteriu de excludere. Stelele recompensează vechimea și vizibilitatea la fel de mult ca utilitatea produsului. Maturitatea contează totuși. Anki, Mnemosyne și SiYuan au versiuni și modele de operare consacrate. Recall și Essentialist au primit recomandări mai restrânse, fiindcă funcționarea versiunilor publicate este suficient de bine documentată pentru o alegere concretă.

Și „întreținut activ” cere două verificări. O versiune etichetată arată ce pot instala utilizatorii; ramura implicită arată încotro merge proiectul. Essentialist este cel mai clar exemplu. Versiunea stabilă documentează SM-2, iar ramura curentă documentează FSRS. Tabelul de mai jos consemnează SM-2.

## Șase aplicații FOSS de flashcarduri, comparate

| Aplicație | Versiunea stabilă verificată | Platforme | Date offline | Algoritm de programare a recapitulărilor | Sincronizare | Migrare din Anki și posibilități de export | Ce poți găzdui singur |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 august 2026 | Windows, macOS, Linux; clienți Android și iOS separați; AnkiWeb | Clienții instalați folosesc colecții locale pentru studiu | FSRS sau vechiul SM-2 | AnkiWeb sau serverul oficial de sincronizare găzduit pe cont propriu | Importă text, APKG/COLPKG și baze de date Mnemosyne; exportă text sau pachete, cu opțiuni pentru media și programare | **Doar serverul de sincronizare.** Fără AnkiWeb sau interfață de studiu în browser găzduite pe cont propriu |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 noiembrie 2023; activitatea în depozit a continuat în 2026 | Windows, macOS, Linux, Android; recapitulare limitată în browser | Desktopul păstrează datele local; Android permite recapitulări offline, dar nu editare | Evaluare adaptivă a reamintirii pe o scară de la 0 la 5 | Sincronizare integrată cu o instanță desktop sau fără interfață grafică | Documentează oficial importul complet din Anki, cu tipuri de carduri personalizate și date de învățare; exportul pentru partajare nu este un backup complet | **Sincronizare și recapitulare limitată în browser.** Serverul pentru browser nu are funcții de securitate |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 august 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; browser prin Docker | Clienții nativi păstrează spațiul de lucru local | FSRS | Sincronizare oficială E2EE contra cost sau integrare plătită cu S3/WebDAV de la terți | Aplicația generală importă Markdown/date și exportă mai multe formate de documente/date; nu există un importator APKG documentat | **Aplicație completă în browser.** Docker nu poate sincroniza clienții nativi și elimină unele comenzi de import/export |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 septembrie 2026 | Web, iOS, Android | IndexedDB pe web; SQLite pe iOS; Room peste SQLite pe Android; modificările locale intră în coada de sincronizare | FSRS | Backend găzduit de furnizor sau instalat de operator | ZIP-ul propriu transferă carduri, etichete, metadatele sursei și fișierele media la care se face referire, dar nu pachetele, starea învățării, setările sau conturile; fără importator APKG | **Întreaga infrastructură web/backend.** Instalarea în producție se bazează pe AWS; versiunile native private se construiesc separat |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 iulie 2026 | Windows, macOS, Linux; PWA instalabilă | SQLite pe desktop; IndexedDB în browser; fără cont sau telemetrie în mod implicit | FSRS | Sincronizare printr-un folder pe desktop sau un releu criptat opțional Cloudflare Worker/R2 | Importul APKG pe desktop citește primele două câmpuri, pachetele, etichetele, o aproximare a stării programării și imaginile; exporturi JSON și arhive Recall | **Doar releul pentru copii criptate ale stării.** Nu găzduiește PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 octombrie 2025; modificările codului au continuat în 2026 | Android APK, macOS DMG, Linux Flatpak; Windows prin compilare din surse | Fără acces la rețea; conținutul pachetelor este Markdown | Versiunea stabilă: SM-2; ramura implicită: FSRS | Nu există | Markdown păstrează conținutul cardurilor; o bază de date ascunsă, alăturată, păstrează progresul | **Nimic de găzduit.** Salvează împreună fișierul Markdown și baza de date alăturată |

## 1. Anki este alegerea implicită cea mai sigură

Anki câștigă la detaliile mai puțin spectaculoase. Poate reprezenta tipuri complexe de note, genera carduri înrudite din șabloane, păstra fișierele media împreună cu colecția și păstra ani de date despre programarea recapitulărilor. Versiunea desktop stabilă folosită în această evaluare este [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Versiunea mai nouă 26.09b2 este marcată beta, așa că nu este reperul acestei comparații.

Codul open-source nu acoperă toate componentele. [Depozitul desktop are licența AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), cu excepții enumerate pentru componentele incluse. [AnkiDroid](https://github.com/ankidroid/Anki-Android) este un proiect Android open-source separat. AnkiMobile și AnkiWeb sunt produse oficiale, dar sursa lor nu se află în aceste depozite. Detaliile sunt în [Este Anki open-source?](/blog/is-anki-open-source/).

Clienții instalați păstrează colecții locale, deci recapitularea obișnuită funcționează fără conexiune. AnkiWeb este componenta online. Dacă utilizarea offline decide alegerea, [Funcționează Anki offline?](/blog/does-anki-work-offline/) separă ce rămâne local de ce așteaptă sincronizarea.

Anki acceptă [FSRS și vechiul algoritm de programare](https://docs.ankiweb.net/deck-options.html). Formatele sale de export oferă cel mai bun punct de plecare pentru migrare dintre aplicațiile de aici. Un [COLPKG conține întreaga colecție și datele de programare a recapitulărilor](https://docs.ankiweb.net/exporting.html), iar exporturile APKG pot include informații de programare și fișiere media dacă selectezi opțiunile respective. Anki importă și text, pachete Anki și baze de date Mnemosyne 2.0.

Un pachet sursă atât de bogat nu garantează un import perfect în altă aplicație. Destinația trebuie totuși să înțeleagă șabloanele, regulile de generare a cardurilor, referințele media și câmpurile de programare din el. Are doar mai multe informații la dispoziție decât ar avea dintr-un CSV.

[Serverul oficial pentru găzduire proprie](https://docs.ankiweb.net/sync-server.html) are intenționat un rol restrâns. Sincronizează clienți Anki compatibili; nu oferă AnkiWeb, recapitulare în browser sau un portal pentru conturi. Implicit, comunică prin HTTP necriptat, iar ghidul recomandă păstrarea lui într-o rețea locală sau folosirea unui VPN ori a unui proxy invers HTTPS în fața sa. Și versiunile clienților și serverului trebuie să rămână compatibile.

Alege Anki când păstrarea fidelă a colecției, șabloanele, extensiile sau disponibilitatea clienților sunt prioritare. Caută altceva doar când o limită concretă contează mai mult, de exemplu nevoia unei interfețe în browser găzduite de tine sau a întregului cod mobil publicat.

## 2. Mnemosyne se concentrează pe studiul local

Mnemosyne este, în esență, un instrument desktop pentru studiu. Nu vine la pachet cu o bază de cunoștințe sau cu o platformă cloud. Primești o bază de date locală, un mod tradițional de lucru cu repetiție spațiată, o aplicație Android pentru recapitulări și un server de sincronizare care poate rula pe desktop sau pe o mașină fără interfață grafică.

Ultima versiune stabilă este în continuare [2.11 din noiembrie 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Depozitul a primit modificări în 2026, dar acestea nu devin automat un kit de instalare stabil. Testează 2.11 pe sistemele de operare pe care intenționezi să le folosești în următorii ani.

Nici licența nu încape într-o singură etichetă. [Lista de licențe de la rădăcina depozitului](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) atribuie LGPL v3 componentei openSM2sync și condiții separate restului Mnemosyne. [Licența programului principal](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) aplică AGPL v3 plus o prevedere suplimentară: numele Mnemosyne trebuie să rămână clar vizibil în lucrările derivate, forma exactă urmând să fie discutată cu responsabilii proiectului. Citește textul înainte să redistribui o versiune modificată.

[Clientul Android permite recapitulări offline, dar nu editarea cardurilor](https://mnemosyne-proj.org/help/android-client). Alte dispozitive pot folosi un server de recapitulare în browser pornit din aplicația desktop, însă pagina oficială de funcții avertizează că serverul nu are funcții de securitate. Este o interfață utilă în rețeaua locală, nu o aplicație web publică bine finisată.

Posibilitățile de migrare sunt cel mai bun argument pentru a alege Mnemosyne în loc să rămâi la Anki. Pagina oficială de funcții documentează [importul complet din Anki, inclusiv tipuri de carduri personalizate și date de învățare](https://mnemosyne-proj.org/features). [Sincronizarea integrată](https://mnemosyne-proj.org/help/syncing) combină cardurile și datele de învățare și poate folosi o mașină pe care o controlezi.

Comanda obișnuită de export este o capcană dacă o folosești pentru backup. A fost concepută pentru partajarea unor carduri selectate și omite datele de învățare. Pentru mutarea sau recuperarea întregului sistem, [ghidul pentru mai multe calculatoare](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) recomandă copierea întregului director de date.

Mnemosyne este cea mai solidă alternativă open-source concentrată pe studiu din această comparație. Compromisul este ritmul lent de publicare a versiunilor stabile, editarea limitată pe mobil și o interfață în browser care cere atenție la expunerea în rețea.

## 3. SiYuan are sens când notițele sunt centrul sistemului

SiYuan este o aplicație de gestionare a cunoștințelor care pune confidențialitatea pe primul loc, cu flashcarduri integrate în același model de blocuri și documente. Este utilă când materialul de recapitulat provine din notițele tale. Poate fi prea mult dacă vrei doar o coadă de carduri.

[Depozitul AGPL-3.0](https://github.com/siyuan-note/siyuan) trimite la interfață, nucleu, aplicațiile mobile, stratul de date și componenta FSRS. [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) este versiunea stabilă verificată aici. Clienții desktop și mobili stochează spațiul de lucru local și continuă să funcționeze offline.

Sincronizarea nu este inclusă în planul gratuit cu stocare locală. [Pagina oficială de prețuri](https://b3log.org/siyuan/en/pricing.html) oferă sincronizare oficială cu criptare de la un capăt la altul prin abonament, iar funcțiile Pro plătite adaugă integrări cu stocarea ta S3 sau WebDAV. Proiectul avertizează și împotriva păstrării unui spațiu de lucru activ într-un folder al unui serviciu generic de sincronizare a fișierelor, fiindcă modificările simultane pot corupe sau suprascrie datele.

Docker rulează o aplicație reală în browser, dar nu devine server de sincronizare pentru aplicațiile instalate. [Documentația Docker pentru v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) spune că aplicațiile desktop și mobile nu se pot conecta la el. Docker elimină și importul Markdown, precum și exportul PDF, HTML și Word. Aceste comenzi există în aplicația nativă, așa că preluarea listei generale de funcții într-un plan de instalare Docker ar induce în eroare.

Nu am găsit un importator APKG oficial. SiYuan poate transfera Markdown și propriile formate de date, dar o colecție Anki cere o reconstrucție mai atentă.

Alege SiYuan când baza de cunoștințe este produsul principal, iar flashcardurile trebuie să facă parte din ea. Dacă vrei un înlocuitor direct pentru Anki, Mnemosyne și Anki au limite de migrare mai clare.

## 4. Nibomo publică mai mult din sistem și îți cere să-l administrezi

Nibomo publică cea mai mare parte a produsului dintre aplicațiile comparate aici. Monorepo-ul MIT include aplicația web, clienții iOS și Android, backendul, serviciul de autentificare, sincronizarea, aplicația de administrare, migrările bazei de date și infrastructura AWS. Versiunea stabilă folosită aici este [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Modificările ulterioare din ramura implicită nu sunt tratate ca funcții deja lansate.

[Arhitectura](/docs/architecture/) este concepută pentru funcționare offline, dar „offline” înseamnă ceva ușor diferit pentru fiecare client. Aplicația web păstrează datele locale de referință în IndexedDB. iOS folosește SQLite, iar Android folosește Room peste SQLite. Modificările sunt scrise local și puse într-o coadă de trimitere înainte de sincronizare. Acest model gestionează întreruperea conexiunii; nu face stocarea din browser permanentă și nu înlocuiește testarea unei porniri la rece pe fiecare dispozitiv.

Pachetul ZIP propriu Nibomo este un format de transfer al conținutului, nu un backup al contului. În v1.23.0, [schema pachetului](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) include conținutul de pe față și verso, etichete, tipul cardului, metadatele sursei și metadatele pachetului; fișierele media la care se face referire sunt incluse separat. Nu include structura pachetelor de studiu, istoricul recapitulărilor, starea FSRS, setările spațiului de lucru sau conturile.

În v1.23.0 nu există importator APKG. [Procedura documentată de migrare din Anki prin TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) folosește textul exportat pentru reconstruirea cardurilor și cere verificare umană. Șabloanele, starea programării, structura pachetelor și fișierele media incluse nu se păstrează automat pe această cale. Este o opțiune rezonabilă pentru un pachet simplu de text și una slabă pentru o colecție puternic personalizată.

[Ghidul de găzduire proprie](/docs/self-hosting/) este la fel de explicit. Producția folosește o infrastructură AWS CDK cu RDS, Cognito, API Gateway și Lambda, S3 și CloudFront, secrete, alarme și backupuri. DNS-ul Cloudflare, e-mailurile Resend și configurarea Sentry sunt în afara AWS. Docker Compose servește dezvoltării locale; nu este soluția de producție acceptată. Operatorii care vor versiuni private pentru iOS sau Android le compilează și le distribuie separat.

Alege Nibomo când controlul asupra întregului cod web, nativ și backend justifică această muncă de administrare. Alege Anki sau Mnemosyne când păstrarea unei colecții existente este cerința mai greu de îndeplinit.

## 5. Recall este modern, dar verifică atent importatorul

Recall este cel mai tânăr proiect dintre recomandările principale. A intrat pe listă deoarece [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) oferă versiuni desktop numerotate, o PWA instalabilă, stocare locală explicită, FSRS, exporturi de date și un model documentat de sincronizare găzduită pe cont propriu.

Aplicația desktop sub licență MIT folosește SQLite; PWA folosește IndexedDB. Niciuna nu cere cont, iar proiectul spune că telemetria este dezactivată implicit. Versiunile desktop acoperă Windows, macOS și Linux.

Importatorul APKG este util, dar formularea „istoricul recapitulărilor” din README promite prea mult față de implementarea din versiunea etichetată. [Codul importatorului din v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) nu citește jurnalul recapitulărilor din Anki. Citește starea curentă a cardului, intervalul, numărul de repetări și de uitări după învățare, plus stabilitatea și dificultatea FSRS atunci când Anki le-a stocat. Pentru cardurile mai vechi fără aceste câmpuri FSRS, Recall le estimează din valorile SM-2.

Și conversia conținutului are limite importante. Importatorul folosește primele două câmpuri ale notei drept față și verso, în loc să reproducă tipurile de note și șabloanele Anki. Păstrează numele pachetelor și etichetele. Extrage formatele uzuale de imagini și rescrie referințele către ele, dar omite sunetul și celelalte fișiere media. Fiind o comandă Tauri, importatorul permite migrarea APKG directă pe desktop, nu în PWA din browser.

Este mult mai bine decât reconstruirea din text simplu, dar nu înseamnă păstrarea fidelă a colecției. Testează textele cu spații de completat (cloze), cardurile înrudite, câmpurile suplimentare, HTML/CSS, imaginile, sunetul, datele scadente și notele repetate înainte de o migrare mare.

Recall are două căi de sincronizare. Pe desktop poate scrie o copie a stării într-un folder gestionat de Dropbox, Drive sau alt instrument de sincronizare a fișierelor. Releul opțional folosește un Cloudflare Worker și un bucket R2. Conform [modelului de sincronizare din versiunea etichetată](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md), clienții criptează copiile stării cu AES-GCM înainte de încărcare; releul vede date criptate, nu conținutul cardurilor sau cheia. Actualizările folosesc control optimist al concurenței și reîncearcă o dată după un conflict, dar combină tot copii complete ale stării, nu câmpuri individuale. Nu există un releu public finanțat de responsabilii proiectului: îl instalezi tu și introduci adresa sa URL.

Exporturile JSON și arhivele Recall îți oferă o cale de ieșire. Restaurează unul într-un profil curat înainte să-l consideri backup.

Alege Recall dacă vrei o experiență modernă desktop/PWA, bazată pe date locale, și poți accepta un proiect tânăr plus un importator care păstrează o copie utilă a stării, nu întregul sistem Anki.

## 6. Essentialist face pachetul ușor de citit, dar nu expune întreaga stare

Essentialist are cea mai restrânsă arie de funcționare dintre aplicațiile de aici. Fiecare pachet este un fișier Markdown pe care îl poți deschide într-un editor de text, păstra sub controlul versiunilor sau copia cu instrumente obișnuite pentru fișiere. Aplicația este concepută să nu facă nicio cerere în rețea.

Ultima versiune stabilă este [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Fișierele publicate includ versiuni pentru Android, macOS și Linux; utilizatorii Windows compilează din surse. [README-ul versiunii etichetate](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) indică SM-2 drept algoritm de programare.

[README-ul din ramura implicită](https://github.com/essentialist-app/essentialist/blob/main/README.md) indică acum FSRS, iar depozitul a primit modificări de cod în 2026. Acest lucru arată direcția proiectului, dar nu justifică prezentarea binarului din 2025 drept o versiune cu FSRS.

Și Markdown păstrează mai puțin decât pare la prima vedere. Textul cardurilor este în fișierul vizibil, iar progresul se află într-o bază de date ascunsă, numită `.<deck file>.db`. Dacă copiezi `sample.md` fără `.sample.md.db`, salvezi întrebările și răspunsurile, dar pierzi starea învățării.

Nu există sincronizare integrată între dispozitive și nici server. Poți pune fișierele într-un folder sincronizat de tine, dar atunci gestionarea conflictelor și recuperarea datelor îți revin.

Alege Essentialist când contează Markdown lizibil și lucrul fără rețea. Nu este un sistem care trece fără efort de la un dispozitiv la altul, iar un singur fișier vizibil nu este un backup complet.

## Patru proiecte active de urmărit

Aceste proiecte au activitate reală de dezvoltare în 2026. Rămân în afara celor șase recomandări principale fiindcă o recomandare cere mai mult decât cod sursă interesant.

| Proiect | Ce există deja concret | Ce îl ține deocamdată în afara listei principale |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Cod AGPL, algoritmi FSRS/SM-2/Leitner, instalare Docker, serviciu administrat, import CSV și export de date | Creat în iulie 2026; fără versiune numerotată a aplicației. Versiunea publicată pe GitHub este un pachet audio, nu o versiune a aplicației |
| [Openlet](https://github.com/ChloeVPin/openlet) | Aplicație web MIT cu FSRS, import CSV, mascarea zonelor din imagini și arhitectură Supabase/Vercel documentată | Fără versiune etichetată, iar documentația oficială nu descrie încă integral funcționarea offline, exportul și recuperarea datelor într-o instalare proprie |
| [Prep](https://github.com/Zamua/prep-app) | Cod MIT, FSRS, serviciu găzduit și instalare documentată pe mediul de execuție celld, care poate fi găzduit pe cont propriu | Fără versiune etichetată; găzduirea proprie cere și administrarea celld și a stocării de obiecte, nu doar instalarea unui binar independent pentru flashcarduri |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Aplicație mobilă Kotlin GPLv3, FSRS/SM-2, o versiune Android și import APKG cu șabloane și media | Creat în 2026; iOS cere compilare din surse, iar documentația oficială nu descrie sincronizarea generală între telefoane |

Câteva nume cunoscute nu trec criteriile din motive mai simple. [Depozitul open-source](https://github.com/mochi-cards/open-source) al Mochi este o colecție de integrări, nu aplicația de bază. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) este open-source și poate fi găzduit pe cont propriu, dar README-ul oficial încă pune repetiția spațiată la „Features coming soon”, adică funcții planificate. [OpenCards](https://github.com/holgerbrandl/opencards) nu a mai publicat o versiune de la [v2.5.1 din ianuarie 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), iar depozitul nu a mai primit modificări de cod din 2018.

Dacă accesul la sursă este opțional, [comparația mai largă a alternativelor la Anki](/ro/blog/best-anki-alternatives/) include produse care răspund unei alte nevoi.

## Testează migrarea pe cinci niveluri separate

„Importă din Anki” nu spune aproape nimic fără următoarea propoziție. O migrare poate reuși la un nivel și poate eșua la celelalte patru.

| Nivel | Ce compari | Semnalul înșelător de reușită |
| --- | --- | --- |
| Conținutul cardurilor | Fiecare câmp, marcaj cloze, etichetă, caracter special și notă repetată | Numărul total de carduri este apropiat |
| Structură | Tipurile de note, șabloanele, cardurile înrudite generate și pachetele imbricate | Textul de pe față și verso a apărut undeva |
| Media | Imaginile și sunetul au fost copiate, referințele indică fișiere locale, iar acestea funcționează offline | Importatorul a recunoscut numele fișierelor |
| Starea învățării | Jurnalul recapitulărilor, starea, data scadentă, intervalul, uitările și parametrii algoritmului | Cardurile importate există, dar sunt tratate din nou ca noi, fără avertisment |
| Export și recuperare | Un export sau backup documentat poate reconstrui același sistem în altă parte | Un export text lizibil este tratat drept backup complet |

Creează intenționat un pachet de test dificil înainte să muți colecția reală. Include câmpuri suplimentare, texte cloze, șabloane în ambele direcții, pachete imbricate, etichete, imagini, sunet și suficient istoric al recapitulărilor ca să vezi dacă destinația l-a păstrat.

Păstrează neatins backupul sursă. După import, compară separat numărul de note, carduri și fișiere media. Verifică datele scadente în loc să te bazezi pe mesajul „programare importată”. Recapitulează offline pe fiecare dispozitiv pe care vrei să-l folosești. Apoi fă pe două dispozitive modificări de probă care intră în conflict și urmărește cum se comportă sincronizarea.

Folosește ambele sisteme câteva zile. Ștergerea colecției vechi este ultimul pas, nu dovada că noua aplicație funcționează.

## Găzduirea proprie este completă abia după o restaurare

Produsele de mai sus folosesc „găzduire proprie” pentru lucruri foarte diferite:

- Anki și Mnemosyne rulează **servicii de sincronizare**, iar clienții instalați rămân interfața de studiu.
- SiYuan Docker rulează o **aplicație în browser** pe care clienții nativi nu o pot folosi drept server de sincronizare.
- Recall rulează un **releu pentru copii criptate ale stării**, nu PWA în sine.
- Nibomo instalează **întreaga infrastructură web și backend**, în timp ce aplicațiile native se compilează separat.
- Essentialist **nu are server**; controlezi fișierele locale.

După ce ai clarificat aceste limite, testează partea pe care administratorii tind să o amâne:

1. Creează carduri, atașează media, fă recapitulări și sincronizează din doi clienți.
2. Salvează fiecare bază de date, bucket de obiecte, fișier local, secret și valoare de configurare menționate în documentație.
3. Restaurează într-un cont gol, pe o mașină curată sau într-o instalare izolată.
4. Compară numărul de carduri, fișierele media, istoricul recapitulărilor, starea cardurilor scadente, autentificarea și sincronizarea clienților.
5. Actualizează copia restaurată și parcurge încă un ciclu de recapitulare.

Dacă reconstrucția depinde încă de mașina veche, ai un serviciu funcțional. Nu ai un backup verificat.

## Întrebări frecvente

### Care este cea mai bună aplicație open-source de flashcarduri în 2026?

Anki este cea mai bună alegere implicită pentru majoritatea celor care învață. Combină un model matur al colecțiilor, FSRS, clienți pentru multe platforme și cele mai bogate formate oficiale de backup și export. Există însă o limită: aplicația oficială iOS și serviciul web nu sunt acoperite de depozitul desktop open-source, iar serverul găzduit pe cont propriu oferă sincronizare, nu studiu în browser.

### Care este cea mai bună alternativă open-source la Anki?

Mnemosyne este cea mai consacrată alternativă concentrată pe studiu și documentează oficial importul tipurilor de carduri personalizate și al datelor de învățare din Anki. Recall arată mai modern și importă fișiere APKG direct pe desktop, dar convertește primele două câmpuri ale notei, păstrează doar o copie a stării programării, importă imagini, nu sunet, și nu transferă jurnalul complet al recapitulărilor.

### Pot găzdui singur Anki?

Da, poți rula serverul oficial de sincronizare Anki pentru clienți compatibili. Nu este însă un înlocuitor pentru AnkiWeb găzduit de tine: nu există interfață de studiu în browser.

### Open-source înseamnă offline?

Nu. Open-source descrie licența și accesul la cod. Funcționarea offline depinde de locul în care clientul stochează datele și de acțiunile care au nevoie de un serviciu. Este valabil și invers: o aplicație își poate păstra datele local fără să-și publice sursa de bază.

### Găzduirea proprie garantează portabilitatea?

Nu. Găzduirea proprie îți dă control asupra locului în care rulează un serviciu. Portabilitatea depinde de exporturi, backupuri complete și o restaurare testată efectiv. O bază de date de pe serverul tău poate fi în continuare greu de migrat, iar un pachet Markdown lizibil poate omite starea recapitulărilor stocată alături.

## Recomandarea mea

Păstrează sau alege **Anki** dacă niciuna dintre limitele sale nu îți creează o problemă reală. Alege **Mnemosyne** pentru studiu local pe desktop și import consacrat din Anki. Folosește **SiYuan** când flashcardurile trebuie să facă parte dintr-o bază de cunoștințe mai mare. Ia în calcul **Nibomo** când controlul asupra întregului cod web, nativ și backend justifică administrarea unei infrastructuri de producție AWS. Alege **Recall** pentru un client modern bazat pe date locale, după ce îi testezi limitele de conversie. Alege **Essentialist** când Markdown simplu și absența accesului la rețea contează mai mult decât sincronizarea.

Cea mai bună aplicație open-source de flashcarduri nu este depozitul cu cea mai lungă listă de funcții. Este cea ale cărei limite privind codul publicat, datele offline, migrarea, sincronizarea, găzduirea și recuperarea se potrivesc cu sistemul pe care ești dispus să-l administrezi.
