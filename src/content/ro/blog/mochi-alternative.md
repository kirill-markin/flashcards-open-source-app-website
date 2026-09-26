---
title: "Carduri de învățare Mochi: recenzie (2026), plan gratuit, utilizare offline și comparație cu Anki"
description: "O recenzie Mochi bazată pe surse verificate: plan gratuit, aplicații offline, notițe Markdown, FSRS, sincronizare, import Anki, exporturi și limitele găzduirii proprii."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "carduri de învățare Mochi"
  - "carduri Mochi"
  - "Mochi vs Anki"
  - "Anki vs Mochi"
  - "Mochi este gratuit"
  - "Mochi offline"
  - "prețuri Mochi"
  - "găzduire Mochi"
  - "carduri de învățare Markdown"
  - "repetiție spațiată Mochi"
---

Mochi pornește de la un document Markdown, nu de la un formular obișnuit cu față și verso. Adaugi o linie cu trei cratime și documentul capătă fețe pe care le poți recapitula. Îl poți lăsa ca notiță, îl poți lega de alt card sau îl poți arhiva, ca să rămână disponibil la căutare fără să intre în coada de recapitulare.

Acest mic separator explică cui i se potrivesc **cardurile de învățare Mochi**. Mochi este o alegere bună dacă vrei notițe și repetiție spațiată în aceeași aplicație concepută să funcționeze în primul rând local, mai ales dacă Markdown, legăturile inverse și o recapitulare simplă cu Remembered/Forgot (Mi-am amintit/Am uitat) ți se par firești. Este mai puțin convingător pentru un utilizator Anki cu o colecție construită în timp, care depinde de variante de carduri generate automat, HTML/CSS personalizat, JavaScript, extensii sau opțiuni detaliate de programare a recapitulărilor.

Pentru lucrul pe un singur dispozitiv, planul gratuit este mai mult decât o versiune de probă: nu necesită înregistrare, iar Mochi documentează utilizarea offline nelimitată. Sincronizarea între dispozitive este însă inclusă doar în **planul Pro de 5 USD pe lună**. Pentru un utilizator Anki, costul mai greu de acceptat îl reprezintă pierderile la migrare. Mochi poate importa un pachet Anki și istoricul recapitulărilor, dar nu poate păstra fiecare șablon, stil, script, setare a algoritmului de programare sau comportament al extensiilor.

> **Declarație de interese:** Sunt Kirill Markin și dezvolt [Nibomo](/ro/). Aceasta este o recenzie a modului de lucru, bazată pe surse verificate; nu pretind că am testat personal produsul. Nu există linkuri de afiliere. Comparația principală rămâne între Mochi și Anki; produsul meu apare doar spre final, ca alternativă indicată explicit.

**Informații verificate:** 7 septembrie 2026. Cea mai recentă [versiune Mochi](https://mochi.cards/changelog/) vizibilă la acea dată era 26.8.2, din 10 august 2026. Prețurile și detaliile din magazinele de aplicații se pot schimba.

![Un restaurator de cărți testează un mic șir de carduri legate între ele și pliate ca un acordeon, în timp ce arhiva originală rămâne în siguranță într-o cutie](/blog/mochi-alternative-v3.png)

## Recenzia pe scurt

- **Alege Mochi** dacă vrei notițe Markdown și carduri împreună, utilizare offline fără cont pe un singur dispozitiv, legături inverse și o evaluare binară la recapitulare.
- **Alege Anki** dacă ai nevoie de un sistem matur de tipuri de note, șabloane HTML/CSS, extensii, sincronizare găzduită gratuită, patru evaluări ale răspunsului sau opțiuni FSRS mai avansate.
- **Nu schimba încă aplicația** dacă recapitulezi deja constant și nu poți numi problema pe care Mochi o va rezolva în modul tău de lucru. O interfață nouă nu este un motiv suficient să riști ani de date despre programarea recapitulărilor și carduri personalizate.
- **Testează înainte să migrezi** dacă îți păstrezi de mult colecția în Anki. Mochi acceptă fișiere `.apkg` și poate importa istoricul recapitulărilor, dar convertește HTML în Markdown și elimină CSS și JavaScript.

## Mochi și Anki, dintr-o privire

| Criteriu | Mochi | Anki |
|---|---|---|
| Cui i se potrivește | Utilizatorilor de notițe conectate și Markdown care vor notițe alături de cardurile de recapitulare | Celor care vor un sistem matur și configurabil de carduri de învățare |
| Crearea cardurilor | Un document Markdown capătă mai multe fețe când adaugi `---`; sunt disponibile și câmpuri, și șabloane | Notele conțin câmpuri; șabloanele HTML/CSS generează unul sau mai multe carduri |
| Recapitulare | Cardurile noi intră mai întâi într-o etapă de învățare; cele învățate folosesc Forgot / Remembered (Am uitat / Mi-am amintit) | Cardurile folosesc Again / Hard / Good / Easy (Din nou / Greu / Bine / Ușor) |
| Programare | Algoritmul propriu Mochi în mod implicit; FSRS este opțional | FSRS sau algoritmul tradițional SM-2, cu instrumente mai ample de ajustare FSRS |
| Utilizare gratuită | Fără înregistrare și cu utilizare offline nelimitată | Aplicații desktop gratuite și sincronizare AnkiWeb gratuită; aplicația oficială iOS este plătită |
| Sincronizare între dispozitive | Pro, 5 USD pe lună | Gratuită prin AnkiWeb |
| Platforme | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, AnkiMobile oficial, AnkiDroid independent |
| Formate portabile | Exporturi în formatul nativ `.mochi`, în Markdown și în CSV | Formate native `.colpkg` și `.apkg`, plus text separat prin tabulatoare |
| Limite privind datele și găzduirea | Stocare prioritar locală; aplicația de bază nu este prezentată ca open source și nu este documentat niciun serviciu de sincronizare cu găzduire proprie acceptat oficial | Depozitul principal are licență AGPL; este documentat un server oficial de sincronizare cu găzduire proprie |

Distincția utilă este între **simplitatea centrată pe notițe și controlul la nivelul colecției**.

## Cum este organizată interfața Mochi

Interfața Mochi devine mai ușor de înțeles dacă urmărești parcursul unui card.

Fiecare card aparține unui pachet. Apeși **New Card** (Card nou) și primești un spațiu de editare Markdown în locul unor casete fixe pentru întrebare și răspuns. Un singur card poate conține titluri, liste, cod, imagini, câmpuri structurate și linkuri. Adaugi `---` între blocuri pentru a crea două sau mai multe fețe de recapitulare. Adaugi `[[double brackets]]` (paranteze drepte duble) pentru a face trimitere la alt card; Mochi creează automat o legătură inversă. [Prezentarea oficială a cardurilor](https://mochi.cards/docs/cards/) documentează și șabloane ai căror substituenți afișează valorile câmpurilor structurate.

Cardurile pot îndeplini două roluri fără să fie în sisteme separate:

- un card de recapitulare are mai multe fețe și intră în programul de repetiție spațiată;
- o notiță de referință poate rămâne în același pachet și poate fi arhivată, ceea ce o elimină din cozile de carduri noi și scadente fără să-i șteargă conținutul, etichetele, legăturile sau istoricul.

[Vizualizările pachetelor](https://mochi.cards/docs/decks/custom-views/) sunt combinații salvate de filtre, sortare și mod de afișare. Poți păstra o grilă pentru navigarea obișnuită și apoi crea altă vizualizare după etichetă, scadență, retenție scăzută sau o recapitulare recentă. Mochi permite și transformarea unei vizualizări într-o sesiune de studiu intensiv, fără să schimbe programarea normală sau istoricul recapitulărilor. Asta spune mai mult decât să numim interfața „curată”: același pachet poate funcționa ca un caiet de notițe, o bază de date filtrată și o coadă de studiu.

[Recapitularea zilnică](https://mochi.cards/docs/getting-started/reviewing-cards/) are două etape. În **New cards** (Carduri noi), fie adaugi un card în programul de recapitulare, fie alegi Again (Din nou) ca să îl revezi curând. După ce ai învățat cardul, la scadența recapitulării vezi următoarea lui față și alegi **Forgot** (Am uitat) sau **Remembered** (Mi-am amintit). Dacă l-ai uitat, Mochi folosește o coadă de recapitulare suplimentară înainte să reseteze progresul. Rezultatul este o decizie intenționat simplă în timpul recapitulării.

## Este Mochi gratuit? Ce funcționează offline?

Mochi are un plan gratuit, dar „gratuit” și „offline” înseamnă lucruri diferite în funcție de platforma pe care îl folosești. [Prețurile Mochi](https://mochi.cards/) verificate pentru această recenzie indicau:

- **Free (Gratuit):** 0 USD pentru totdeauna, fără înregistrare, cu utilizare offline nelimitată.
- **Pro:** 5 USD pe lună, cu sincronizare între dispozitive, publicarea pachetelor, câmpuri dinamice, integrare AI și asistență prin e-mail.

Mochi funcționează pe macOS, Windows, Linux, iOS, Android și web. [Ghidul său de descărcare și instalare](https://mochi.cards/docs/getting-started/download-and-install/) explică limitele practice:

| Unde îl folosești | Ce înseamnă gratuit și offline |
|---|---|
| Aplicația instalată pe desktop sau mobil | Poți folosi Mochi offline fără cont. Datele sunt stocate pe dispozitiv, așa că o singură aplicație instalată poate acoperi gratuit întregul mod de lucru. |
| Aplicația web fără Pro | Conținutul este păstrat în spațiul de stocare offline al browserului. Mochi avertizează că browserul poate șterge aceste date fără avertisment. |
| Aceeași colecție pe mai multe dispozitive | Sincronizarea automată între dispozitive este o funcție Pro, chiar dacă fiecare aplicație instalată poate funcționa offline. |

Utilizarea offline și sincronizarea sunt promisiuni separate. Nu ai nevoie de Pro doar ca să creezi carduri sau să recapitulezi într-o aplicație descărcată. Ai nevoie de el dacă aceeași colecție actualizată trebuie să te urmeze automat de pe laptop pe telefon. Pentru datele importante din planul gratuit, păstrează o copie de siguranță în format nativ, în loc să lași singura copie pe un dispozitiv — și mai ales în spațiul de stocare al browserului.

Dacă funcționarea offline este factorul decisiv, compară modul concret de lucru pe dispozitiv în [Anki funcționează offline?](/blog/does-anki-work-offline/) și în [ghidul mai amplu al aplicațiilor de carduri offline](/blog/best-offline-flashcards-app/).

## Cardurile Markdown sunt adevăratul motiv să alegi Mochi

Avantajul real al Mochi este felul în care Markdown schimbă forma materialului-sursă pe care îl creezi și îl actualizezi.

Un card Mochi rămâne lizibil ca text. Același document poate conține o explicație scurtă, un bloc de cod, linkuri către idei conexe și separatoare între fețele de recapitulare. Cardurile pot folosi și câmpuri, și șabloane atunci când contează o structură repetabilă. Când aplici un șablon, Mochi afișează Markdown-ul șablonului cu substituenții câmpurilor și ignoră la afișare Markdown-ul propriu al cardului, fără să îl șteargă.

Anki pornește de la alt model. O notă stochează câmpuri, iar [șabloanele cardurilor](https://docs.ankiweb.net/templates/intro.html) decid ce câmpuri apar și ce carduri sunt generate. Șabloanele folosesc HTML, cu CSS pentru stilizare. Astfel, o singură notă de vocabular poate genera carduri pentru recunoașterea unui cuvânt și pentru reproducerea lui din memorie, păstrând datele de bază într-un singur loc.

Această structură îi oferă Anki posibilități mai ample pentru afișări condiționale, variante de carduri generate automat, răspunsuri tastate, stiluri personalizate și moduri de lucru extinse prin extensii. Înseamnă și că Anki nu este o aplicație de carduri cu suport nativ pentru Markdown. Lucrul în Anki pe bază de Markdown necesită un strat suplimentar de conversie sau o extensie.

Întrebarea practică este simplă: vrei o notiță care poate deveni card sau un tip structurat de notă din care poți genera mai multe carduri? Mochi este conceput pentru prima variantă. Anki, pentru a doua.

## Repetiția spațiată din Mochi include acum FSRS

Comparațiile care spun că Mochi nu are FSRS sunt depășite. Mochi a adăugat o versiune preliminară FSRS în 2025 și a continuat să publice corecții pentru algoritmul de programare. Totuși, [algoritmul propriu Mochi rămâne cel implicit](https://mochi.cards/docs/reviewing/fsrs/).

Algoritmul implicit modifică intervalele cu multiplicatori ficși după fiecare recapitulare în care îți amintești sau uiți răspunsul. Dacă treci la FSRS în Review Settings (Setări de recapitulare), cardurile deja învățate trec la FSRS fără să-și piardă istoricul. Poți seta retenția dorită, introduce parametri personalizați și reveni ulterior la algoritmul anterior.

Mochi păstrează evaluarea binară cu oricare dintre algoritmi:

- **Forgot** (Am uitat) corespunde evaluării FSRS Again (Din nou).
- **Remembered** (Mi-am amintit) corespunde evaluării FSRS Good (Bine).

Documentația Mochi spune că evaluarea binară funcționează cu FSRS, dar pierde o parte din informațiile pe care le-ar furniza Hard (Greu) și Easy (Ușor). Acceptă parametri personalizați optimizați, însă nu are un optimizator încorporat; generarea parametrilor personali necesită un optimizator FSRS extern și istoricul recapitulărilor din Mochi.

[Setările FSRS din Anki](https://docs.ankiweb.net/deck-options.html#fsrs) merg mai departe. Retenția dorită și parametrii pot fi asociați unor configurații prestabilite, optimizatorul încorporat poate ajusta parametrii pe baza istoricului recapitulărilor, iar simulatorul estimează numărul de recapitulări sau minutele de studiu pentru setări diferite. Anki înregistrează și patru rezultate: Again (Din nou), Hard (Greu), Good (Bine) și Easy (Ușor).

Butoanele suplimentare ajută doar dacă le folosești consecvent. În manualul Anki, Hard înseamnă că ți-ai amintit răspunsul. Dacă apeși Hard când ai uitat răspunsul, îi transmiți FSRS informația greșită și poți obține intervale prea lungi.

Alege recapitularea binară din Mochi dacă distincția reușit/nereușit îți simplifică sesiunea. Alege Anki dacă vrei informația suplimentară din evaluări și vei folosi optimizatorul, opțiunile de retenție, configurațiile prestabilite sau simulatorul volumului de studiu. Pentru o comparație a algoritmilor, nu a aplicațiilor, vezi [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

## Prețurile Mochi și Anki acoperă costuri diferite

Pentru studiu pe un singur computer, ambele aplicații pot costa zero. Diferența este ce plătești când începi să folosești mai multe dispozitive.

Mochi cere **5 USD pe lună** pentru Pro, care include sincronizarea, publicarea pachetelor, câmpurile dinamice, integrarea AI și asistența. Aplicațiile desktop Anki sunt gratuite, iar [site-ul oficial Anki](https://apps.ankiweb.net/) descrie sincronizarea AnkiWeb ca fiind gratuită. AnkiMobile este aplicația oficială plătită pentru iPhone și iPad; AnkiDroid este un client Android gratuit, dezvoltat independent.

Așadar, răspunsul la „Care este mai ieftină?” depinde de dispozitivele tale:

- un singur computer: ambele pot fi gratuite;
- mai multe dispozitive desktop sau Android: sincronizarea găzduită gratuită din Anki te scutește de un abonament;
- iPhone sau iPad: pentru Anki plătești aplicația o singură dată, în timp ce Mochi condiționează sincronizarea între dispozitive de abonamentul recurent Pro;
- utilizatorii Mochi care vor deja publicare, câmpuri dinamice sau integrarea AI pot privi sincronizarea ca pe o parte a pachetului, nu ca pe întregul cost.

Verifică App Store din regiunea ta înainte să compari costurile exacte pentru iOS. Nu dau aici un preț fix pentru aplicația din magazin, deoarece acesta poate varia de la o piață la alta.

## Găzduirea Mochi nu este același lucru cu stocarea prioritar locală

Trei termeni sunt adesea confundați:

- **Local-first**, adică stocare prioritar locală, înseamnă că datele cu care lucrezi se află pe dispozitivul tău și aplicația poate funcționa în continuare fără serviciul său cloud.
- **Open source** înseamnă că ai acces la codul-sursă sub o licență care permite inspectarea și modificarea codului.
- **Găzduire proprie** înseamnă că produsul documentează o metodă acceptată oficial de a rula serviciul respectiv pe infrastructura ta.

Mochi documentează clar funcționarea cu stocare prioritar locală. Nu își prezintă aplicația de bază ca open source: linkul „Open source” din subsolul site-ului public duce la [o colecție de integrări](https://github.com/mochi-cards/open-source), nu la aplicația de bază. Nici site-ul oficial nu documentează un înlocuitor pentru sincronizarea Pro care să poată fi găzduit pe cont propriu și să fie acceptat oficial.

Dacă te interesează **găzduirea Mochi** pentru că vrei propriul server, aceasta este limita: poți păstra date locale și copii de siguranță native, dar calea documentată pentru lucrul pe mai multe dispozitive este Mochi Pro. Stocarea prioritar locală îți oferă un control util asupra datelor; nu înseamnă găzduire proprie.

Depozitul principal Anki este [licențiat sub AGPL versiunea 3 sau ulterioară](https://github.com/ankitects/anki/blob/main/LICENSE), cu excepții enumerate pentru unele componente. Manualul oficial documentează și un [server de sincronizare cu găzduire proprie](https://docs.ankiweb.net/sync-server.html) pentru utilizatorii avansați. Acest server înlocuiește sincronizarea AnkiWeb pentru clienții compatibili; nu este o copie a site-ului AnkiWeb pe care o găzduiești tu, iar Anki se așteaptă ca administratorul să rezolve problemele legate de linia de comandă, rețea, firewall, protocol și actualizări.

## Ce păstrează un import din Anki și ce schimbă

Potrivit [documentației de import](https://mochi.cards/docs/import-and-export/importing/), Mochi acceptă fișiere Anki `.apkg`, inclusiv istoricul recapitulărilor. Dar „importat” și „echivalent” nu înseamnă același rezultat.

La import, Mochi convertește HTML în Markdown și elimină CSS și JavaScript. Este o conversie de format între două modele diferite de carduri. Cardurile simple cu față și verso sunt cel mai ușor de convertit. Un card care depinde de stilizare, logica șabloanelor, interacțiuni prin tastare sau JavaScript trebuie inspectat după import.

Și istoricul recapitulărilor necesită o alegere explicită la export. [Manualul de export Anki](https://docs.ankiweb.net/exporting.html) spune că **Include Scheduling Information** (Include informațiile de programare) controlează includerea istoricului recapitulărilor în pachet. Dacă lași opțiunea dezactivată, Mochi nu poate recupera un istoric pe care fișierul `.apkg` nu l-a conținut niciodată.

Chiar și când istoricul ajunge la destinație, nu te aștepta ca următoarele recapitulări să fie programate la aceleași date. Cele două aplicații pot folosi algoritmi de programare, evaluări, niveluri de retenție dorită, parametri, pași de învățare și setări de pachet care diferă între ele. Evenimentele păstrate îi oferă noului algoritm informații pe care să se bazeze; nu fac sistemele identice.

## Copiile de siguranță native și textul portabil au roluri diferite

Înainte să muți ceva, păstrează o copie de siguranță cu care poți restaura sistemul original. Un export lizibil este util, dar nu permite întotdeauna restaurarea.

[Ghidul de copii de siguranță Mochi](https://mochi.cards/docs/getting-started/backing-up/) documentează două opțiuni native:

- Copierea întregului director al utilizatorului păstrează conținutul, istoricul recapitulărilor, atașamentele, setările aplicației și starea autentificării.
- Un export `.mochi` păstrează pachetele, cardurile, șabloanele și câmpurile, atașamentele, etichetele și metadatele, istoricul recapitulărilor, ordinea cardurilor și structura pachetelor.

[Exporturile Markdown și CSV](https://mochi.cards/docs/import-and-export/exporting/) din Mochi sunt concepute pentru transferul conținutului între aplicații. Markdown creează câte un fișier pentru fiecare card și directoare pentru subpachete, dar pierde istoricul recapitulărilor, ordinea cardurilor, șabloanele și etichetele din metadate, cu excepția etichetelor prezente în Markdown. CSV poate exporta câmpurile șabloanelor sau fețele și versourile așa cum sunt afișate, dar nu păstrează istoricul recapitulărilor, șabloanele sau etichetele din metadate, cu excepția etichetelor incluse în conținut.

Anki face o distincție asemănătoare:

- Un `.colpkg` exportă întreaga colecție cu programarea și poate include fișiere media. Importarea lui înlocuiește cardurile din colecția Anki de destinație.
- Un `.apkg` exportă un pachet și subpachetele sale, cu opțiuni pentru informații de programare, configurații prestabilite și fișiere media.
- Notele în text simplu folosesc câmpuri separate prin tabulatoare, cu formatare HTML inclusă. Păstrează conținutul editabil, nu întregul comportament al colecției.

Revenirea din Mochi în Anki se face în mod normal prin CSV. Anki poate [asocia coloanele de text cu câmpurile notelor](https://docs.ankiweb.net/importing/text-files.html), dar legăturile Mochi, comportamentul cardurilor cu mai multe fețe, șabloanele și istoricul recapitulărilor nu devin obiecte Anki echivalente prin acel fișier. Păstrează exportul `.mochi` și după ce copia din Anki pare corectă.

## Fă un test reversibil cu un pachet reprezentativ

O fereastră de migrare dovedește că un fișier a fost acceptat. Nu dovedește că colecția pe care o folosești zi de zi funcționează în continuare sau că poți aduce înapoi conținut utilizabil. Testează ambele direcții fără să atingi profilul Anki obișnuit.

1. **Fă o copie de siguranță completă din Anki.** Exportă un `.colpkg` cu fișiere media și păstrează-l în afara profilului de lucru.
2. **Verifică dacă se deschide copia de siguranță.** Creează un profil Anki temporar gol și importă fișierul `.colpkg` acolo. Importul unui pachet de colecție înlocuiește colecția de destinație, de aceea contează profilul temporar.
3. **Construiește un pachet reprezentativ în acel profil temporar.** Păstrează-l suficient de mic ca să poți inspecta fiecare card, dar include funcțiile pe care te bazezi: carduri de bază și inversate, texte cu spații de completat (cloze), șabloane personalizate, CSS, JavaScript, imagini, audio, ecuații, etichete, pachete imbricate și istoric al recapitulărilor.
4. **Exportă acel pachet ca `.apkg`.** Include informații de programare, configurații prestabilite și fișiere media când contează. Aceste opțiuni introduc datele în pachetul Anki; nu promit că Mochi va reproduce fiecare setare.
5. **Importă într-un pachet Mochi nou.** Lasă neschimbate profilul Anki de zi cu zi și coada sa de carduri scadente.
6. **Inspectează înainte să recapitulezi.** Compară conținutul, formatarea, câmpurile, fișierele media, etichetele, structura pachetelor și istoricul. Acordă atenție în special elementelor care depindeau de HTML, CSS, JavaScript sau variante generate ale cardurilor.
7. **Alege intenționat algoritmul de programare.** Mochi pornește cu propriul algoritm. Activează FSRS doar dacă intenționezi să îl folosești după probă.
8. **Recapitulează copia timp de o săptămână obișnuită.** Evaluează editarea în Markdown, etapa New cards (Carduri noi), alegerea Remembered/Forgot (Mi-am amintit/Am uitat), funcționarea offline și, dacă ai plătit pentru ea, sincronizarea pe dispozitivele pe care le ai efectiv la tine.
9. **Testează și revenirea.** Exportă pachetul de test Mochi ca `.mochi` pentru o copie de siguranță nativă și ca CSV pentru Anki. Folosește CSV cu valorile câmpurilor când contează câmpurile reutilizabile; folosește CSV cu fețele afișate când ai nevoie în principal de conținutul vizibil de pe față și verso. Importă acel CSV într-un alt profil Anki gol și asociază coloanele cu un tip de notă potrivit.
10. **Notează fiecare pierdere acceptată.** Verifică separat transferul și revenirea. Stilizarea exactă, comportamentul cardurilor cu mai multe fețe, comportamentul extensiilor, variantele generate, evaluările răspunsurilor, istoricul sau datele următoarelor recapitulări pot conta mai mult în utilizarea zilnică decât într-un tabel comparativ.

Revenirea prin CSV este o migrare a conținutului, nu o restaurare completă Mochi: nu transferă istoricul recapitulărilor, șabloanele sau etichetele din metadate, cu excepția etichetelor incluse în conținut. Dacă Mochi nu rezolvă problema pe care ai numit-o, șterge pachetul de test și continuă cu profilul Anki original. Dacă o rezolvă, migrează pe rând pachetele pe care le folosești și păstrează copiile de siguranță Anki `.colpkg` și Mochi `.mochi` pe parcursul mai multor cicluri obișnuite de recapitulare.

## Cui i se potrivesc cardurile de învățare Mochi?

Mochi este o alegere bună când:

- Markdown este deja modul în care scrii și gândești;
- notițele și cardurile de recapitulare își au locul în același spațiu de lucru, cu legături între ele;
- vrei o alegere simplă Remembered/Forgot (Mi-am amintit/Am uitat) în locul a patru evaluări;
- utilizarea gratuită offline pe un singur dispozitiv îți acoperă nevoile sau sincronizarea Pro merită 5 USD pe lună;
- colecția ta este nouă sau suficient de simplă încât conversia din Anki să prezinte riscuri mici.

Rămâi la Anki când:

- tipurile tale de note generează mai multe variante importante de carduri;
- șabloanele HTML/CSS, JavaScript, extensiile sau pachetele partajate fac parte din sistem;
- sincronizarea gratuită între dispozitive contează mai mult decât crearea conținutului în Markdown;
- vrei optimizatorul FSRS din Anki, opțiunile pentru configurațiile prestabilite, patru evaluări și simulatorul volumului de studiu;
- anii de date de recapitulare și comportamentele personalizate funcționează deja bine.

Cea mai potrivită alternativă la Mochi depinde de motivul pentru care niciuna dintre cele două opțiuni nu ți se potrivește. Pentru o colecție nouă și mai simplă, [funcțiile Nibomo](/ro/features/) includ recapitulări FSRS, studiu offline și sincronizare, transfer portabil de carduri, etichete și fișiere media, acces pentru agenți și o metodă documentată de găzduire proprie. Eu îl dezvolt, iar limitele contează: nu înlocuiește caietul de notițe Markdown legate între ele din Mochi sau sistemul matur de șabloane și extensii din Anki. [Ghidul de început](/docs/getting-started/) prezintă opțiunile actuale pentru versiunea găzduită, mobil, agenți și găzduire proprie.

## Ce înseamnă asta pentru alegerea ta

Mochi este mai mult decât o interfață Anki mai frumoasă. Ideea sa de bază este că o notiță Markdown, o înregistrare conectată la alte informații și un card de repetiție spațiată pot fi același obiect. Planul gratuit acoperă lucrul offline fără cont; Pro adaugă funcțiile găzduite, inclusiv sincronizarea între dispozitive.

Este un compromis bun pentru cineva care începe o colecție nouă centrată pe Markdown. Poate merita și trecerea de la Anki dacă testul cu un pachet reprezentativ dovedește că Markdown nativ și recapitulările binare elimină dificultăți reale.

Pentru un utilizator Anki cu o colecție construită în timp, schimbarea trebuie să-și dovedească utilitatea. Fă o copie de siguranță a colecției, testează cardurile cu cele mai multe comportamente personalizate și păstrează Anki dacă Mochi nu îmbunătățește suficient lucrul de la o săptămână la alta încât să justifice funcțiile de formatare, șabloanele, opțiunile de programare și instrumentele din ecosistem la care renunți.
