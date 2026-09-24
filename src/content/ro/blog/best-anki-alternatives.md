---
title: "Alternative la Anki în 2026: ce păstrezi, ce pierzi și ce câștigi dacă schimbi aplicația"
description: "Compară șapte alternative la Anki după fidelitatea migrării, utilizarea offline, programarea recapitulărilor, preț, accesul la cod și găzduirea proprie. Vezi când e mai sigur să păstrezi Anki."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternative la Anki"
  - "alternativă la Anki"
  - "aplicații similare cu Anki"
  - "alternativă open-source la Anki"
  - "alternative gratuite la Anki"
  - "alternativă la Anki pentru iOS"
  - "migrare de la Anki"
---

Un import din Anki se poate încheia fără erori și totuși poate elimina tocmai lucrurile care fac pachetul tău util. Textul ajunge în noua aplicație. Cardurile se deschid. Apoi observi că CSS-ul a dispărut, un câmp audio e gol, toate cardurile sunt considerate noi sau o notă nu mai generează carduri în direcțiile la care te așteptai.

Aici apar costurile greu de văzut când compari alternative la Anki. Un editor mai simplu sau un abonament mai ieftin sunt ușor de observat înainte să schimbi aplicația. Problemele cu șabloanele, istoricul recapitulărilor, datele scadente, extensiile, fișierele media offline și exportul din noua aplicație tind să iasă la iveală abia după ce paguba e făcută.

Comparația de față pornește de la ce se păstrează și ce se pierde la transfer. Acoperă șapte aplicații similare cu Anki, ce poate prelua fiecare dintr-o colecție existentă, ce se schimbă după import și când păstrarea Anki este alegerea mai sigură.

> **Declarație de interese:** Sunt Kirill Markin și dezvolt [Nibomo](https://nibomo.com/), unul dintre produsele de mai jos. L-am inclus pentru codul open-source, posibilitatea de găzduire proprie și fluxurile de lucru cu agenți. Nu este câștigătorul implicit: nu are import direct pentru `.apkg`, migrarea din Anki pierde informații, iar administrarea infrastructurii găzduite pe cont propriu presupune muncă serioasă.

**Informații verificate:** 28 august 2026. Prețurile sunt cele publice din SUA sau prețurile locale afișate la acea dată. Taxele, regiunea, ofertele pentru educație și facturarea prin magazinele de aplicații pot schimba suma.

![Un ceasornicar verifică dacă mecanismul unui ceas de buzunar vechi se potrivește într-o altă carcasă](/blog/best-anki-alternatives.png)

## Răspunsul scurt, înainte să muți ceva

Pornește de la ideea că păstrezi Anki. Schimbă aplicația doar dacă alta rezolvă o problemă repetată, suficient de importantă încât să merite migrarea.

Trei produse acceptă pachete Anki cu date de învățare, dar fiecare păstrează datele în limite diferite:

- **Mnemosyne** documentează un import complet din Anki, cu tipuri de carduri personalizate și date de învățare. Este opțiunea cea mai apropiată de un mod de lucru tradițional, local și open-source pe desktop, deși nu are aplicație nativă pentru iOS.
- **Mochi** importă fișiere `.apkg` cu istoricul recapitulărilor. Convertește HTML în Markdown, elimină CSS și JavaScript și înlocuiește cele patru butoane de recapitulare din Anki cu Remembered sau Forgot.
- **RemNote** importă fișiere `.apkg`, majoritatea tipurilor de note și istoricul recapitulărilor. Ghidul actual precizează și că pune cardurile importate într-o coadă separată, **Need to Learn**, așa că „istoric importat” nu înseamnă „coada de astăzi din Anki, copiată exact”.

Celelalte patru presupun reconstruirea conținutului, nu migrarea colecției:

- **Quizlet** este util pentru seturi publice, clase, jocuri și exerciții ghidate.
- **Brainscape** oferă grupurilor un proces mai simplu, bazat pe evaluarea siguranței răspunsului pe o scară de la 1 la 5.
- **SuperMemo** înseamnă trecerea la metoda sa proprietară și la catalogul său de cursuri.
- **Nibomo** oferă clienți web și nativi sub licență MIT, un backend pe care îl poți găzdui singur, API și acces MCP. Fluxul său de lucru cu TXT sau CSV, care include verificarea rezultatului, nu păstrează starea învățării din Anki.

Dacă te bazezi pe afișarea exactă a cardurilor, pe extensii sau pe coada actuală de recapitulare, a rămâne în Anki nu înseamnă indecizie. Este răspunsul potrivit.

## Mai întâi, inventariază ce conține de fapt colecția ta Anki

Un „pachet” nu este un singur obiect portabil. Înainte să compari produsele, separă elementele pe care ai putea să le muți.

| Parte a colecției | Ce poate include Anki într-un pachet | Ce trebuie să accepte explicit aplicația de destinație |
| --- | --- | --- |
| **Conținutul notelor** | Câmpuri de text și HTML salvat | Corespondența câmpurilor, texte cu spații de completat (cloze), text în alfabete nelatine, cod și treceri la rând nou |
| **Generarea cardurilor** | Tipuri de note și șabloane de carduri | Carduri în ambele direcții, câmpuri personalizate, CSS și comportamentul JavaScript |
| **Fișiere media** | Imagini locale, audio și alte fișiere, când este activată opțiunea **Include media** | Extragerea fișierelor, referințe, formate acceptate și sincronizarea între dispozitive |
| **Organizare** | Pachete, subpachete, etichete și, opțional, configurații prestabilite pentru pachete | Ierarhia, semnificația etichetelor, configurațiile și selecția materialului de studiu |
| **Starea învățării** | Informații de programare și istoricul recapitulărilor, dacă sunt incluse | Date scadente, intervale, răspunsuri uitate după învățare și conversia datelor pentru algoritmul de programare al destinației |
| **Codul care susține fluxul de lucru** | Extensiile nu sunt incluse în pachetul exportat | Un înlocuitor pentru instrumentele din browserul de carduri, editările în masă, generarea notelor și alte funcții ale extensiilor |

[Manualul de export Anki](https://docs.ankiweb.net/exporting.html) documentează toate aceste opțiuni. Un importator de text vede doar primul rând și, eventual, etichetele. Un importator direct de `.apkg` poate vedea mai mult, dar fiecare produs decide ce convertește și ce elimină.

De aceea, „importă din Anki” este prea vag pentru a justifica o schimbare. Pune trei întrebări separate:

1. **Cardul mai transmite același lucru?** Verifică câmpurile, direcțiile cardurilor generate, textele cloze, fișierele media și afișarea.
2. **Aplicația de destinație știe ce am învățat?** Verifică înregistrările recapitulărilor, starea actuală, datele scadente și prima coadă reală de studiu.
3. **Pot pleca din nou?** Exportă din aplicația de destinație și verifică ce conține efectiv formatul de export.

Un importator poate trece prima probă și le poate rata pe celelalte două.

## Ce se păstrează la migrare

| Produs | Calea de import din Anki | Starea învățării | Principala pierdere de verificat |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Import direct `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) pentru majoritatea tipurilor de note, fișiere media și istoricul recapitulărilor | Istoricul este preluat, dar cardurile importate intră în coada separată **Need to Learn** din RemNote | CSS complex, JavaScript personalizat, unele redări audio generate prin sinteză vocală și câmpuri redenumite pentru mascarea imaginilor |
| [Mochi](https://mochi.cards/) | [Import direct `.apkg`](https://mochi.cards/docs/import-and-export/importing/), inclusiv istoricul recapitulărilor | Istoricul este preluat; documentația nu promite o coadă sau date scadente identice cu cele din Anki | HTML devine Markdown; CSS și JavaScript sunt eliminate; evaluările viitoare sunt binare |
| [Mnemosyne](https://mnemosyne-proj.org/) | Proiectul documentează [importul complet din Anki](https://mnemosyne-proj.org/features), cu tipuri de carduri personalizate și date de învățare | Datele de învățare sunt importate într-un alt algoritm de programare | Comportamentul exact al șabloanelor, datele scadente după conversie și afișarea cardurilor trebuie totuși testate |
| [Quizlet](https://quizlet.com/) | [Lipirea termenilor și definițiilor](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Nimic din Anki | Tipuri de note, șabloane, pachete, structura media și toate datele de programare |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX sau ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Nimic din Anki | Șabloane, extensii, reguli pentru media și toate datele de programare |
| [SuperMemo](https://www.supermemo.com/) | [Lipirea unor rânduri de întrebări și răspunsuri separate prin delimitatori](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), până la 100 deodată | Nimic din Anki | Structura colecției, fișierele media, șabloanele și toate datele de programare |
| [Nibomo](https://nibomo.com/) | Pregătirea cardurilor din Anki TXT sau CSV cu ajutorul AI, urmată de verificare | Nimic din Anki | Fără suport `.apkg`; șabloanele, fidelitatea media, ierarhia pachetelor și toate datele de programare se pierd |

## Preț, utilizare offline, programarea recapitulărilor și controlul asupra aplicației

| Produs | Preț verificat la 28 august 2026 | Limitele utilizării offline | Algoritm de programare | Cod-sursă și găzduire proprie |
| --- | --- | --- | --- | --- |
| **RemNote** | [Gratuit; Pro 8 USD/lună, cu facturare anuală de 96 USD](https://www.remnote.com/pricing) | Aplicațiile instalate permit editarea și recapitularea offline după autentificare. Desktopul păstrează toate fișierele media din baza de cunoștințe; mobilul păstrează în cache doar unele imagini recente. Versiunea web necesită o filă rămasă deschisă. | [Anki SM-2 sau FSRS v6 în versiune beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Nucleu proprietar; nu este documentată o cale acceptată oficial pentru găzduire proprie |
| **Mochi** | [Gratuit offline; sincronizare Pro 5 USD/lună](https://mochi.cards/#pricing-section) | Aplicațiile instalate funcționează complet offline, fără cont. Datele stocate în browser pot fi șterse. | [Algoritmul Mochi sau FSRS](https://mochi.cards/docs/reviewing/fsrs/), ambele cu Remembered / Forgot | Nucleu proprietar; depozitele publice conțin integrări, nu o aplicație pe care o poți găzdui singur |
| **Mnemosyne** | Gratuit | [Utilizare locală pe desktop și recapitulare offline pe Android](https://mnemosyne-proj.org/download-mnemosyne.php); pe Android nu se poate edita. Fără aplicație nativă iOS. | Programare adaptivă pe baza evaluării răspunsurilor pe o scară de la 0 la 5 | Licențe ale codului specifice fiecărei componente; server de sincronizare administrat de utilizator, pe desktop sau fără interfață grafică |
| **Quizlet** | Funcții de bază gratuite; [Plus 35,99 USD/an, Plus Unlimited 44,99 USD/an](https://quizlet.com/upgrade?source=signup) | Seturile descărcate funcționează offline în aplicațiile iOS și Android, în modurile Flashcards și Match. | [Repetiție spațiată pe web](https://quizlet.com/features/spaced-repetition) pentru seturi de cel puțin 100 de termeni; versiunea mobilă este încă anunțată ca disponibilă în curând. Learn este un mod separat de exersare adaptivă. | Serviciu găzduit proprietar; fără cale acceptată oficial pentru găzduire proprie |
| **Brainscape** | [Gratuit; Pro 7,99 USD/lună cu facturare anuală](https://www.brainscape.com/pricing) | [Aplicația mobilă poate păstra activitatea offline și sincroniza ulterior clasele descărcate anterior](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); documentația nu promite o bibliotecă locală completă. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), cu evaluări de la 1 la 5 | Serviciu găzduit proprietar; fără cale acceptată oficial pentru găzduire proprie |
| **SuperMemo** | Cont gratuit cu limite; [35,99 PLN/lună sau 359 PLN/an](https://www.supermemo.com/en/premium-subscription) | Cursurile descărcate pe mobil funcționează offline; editarea, AI, căutarea, înregistrările și statisticile nu. | [Metoda proprietară SuperMemo](https://www.supermemo.com/en/supermemo-method) | Serviciu găzduit proprietar; fără cale acceptată oficial pentru găzduire proprie |
| **Nibomo** | [Funcțiile de bază ale serviciului găzduit sunt gratuite în beta; software-ul poate fi găzduit gratuit pe cont propriu](/ro/pricing/), la care se adaugă costurile infrastructurii tale | Aplicațiile native scriu local după autentificarea online și încărcarea inițială a datelor spațiului de lucru; fișierele media de la distanță trebuie să fie deja în cache. | [FSRS](/docs/architecture/#scheduling) | MIT; implementarea de producție acceptată oficial folosește o infrastructură completă centrată pe AWS |

Aceste tabele nu acordă punctaje. Un importator direct poate conta mai mult decât orice altă funcție dacă ai 30.000 de carduri studiate de mult timp. O aplicație nativă pentru iPhone poate decide alegerea dacă acolo recapitulezi. Accesul la cod contează doar dacă tu sau cineva în care ai încredere îl va întreține.

Toate produsele de aici îți permit să începi gratuit, dar migrarea către alternativele gratuite la Anki nu este lipsită de costuri. Prețul abonamentului se calculează ușor. Reconstruirea șabloanelor, verificarea fișierelor media și refacerea de la zero a istoricului recapitulărilor costă adesea mai mult.

## RemNote: mută cardurile în notițe conectate

RemNote schimbă locul din care provin cardurile. În loc să întreții un pachet separat de notițele de curs, creezi carduri într-o structură de notițe, într-un document sau într-un flux de lucru cu PDF-uri. Este un motiv real să renunți la Anki dacă transferul materialului între aplicația de notițe și cea de carduri a devenit partea costisitoare.

Calea de migrare acoperă multe elemente, dar coada de studiu cere atenție. [Ghidul actual de import din Anki](https://help.remnote.com/en/articles/6751471-importing-from-anki) al RemNote îți spune să exporți un `.apkg` cu informații de programare, configurații prestabilite ale pachetelor și fișiere media. Importă istoricul recapitulărilor și majoritatea tipurilor de note, inclusiv cele de bază, cloze și tipurile uzuale de carduri cu porțiuni de imagine mascate.

Același ghid spune că noile carduri importate ajung într-o coadă separată, **Need to Learn**. Cu alte cuvinte, RemNote are acces la istoric, dar documentația nu promite că actuala coadă de carduri scadente din Anki reapare neschimbată. CSS-ul complex este și el eliminat, JavaScript-ul personalizat nu este acceptat, unele funcții de sinteză vocală în timp real nu funcționează, iar importurile cu mascarea imaginilor depind de denumirile așteptate ale notelor și câmpurilor.

Importă un pachet reprezentativ și inspectează atât cardurile, cât și prima coadă de studiu. Un import care arată bine reprezintă doar jumătate din test.

Aplicațiile desktop și mobile funcționează offline după instalare și autentificare. [Ghidul pentru modul offline](https://help.remnote.com/en/articles/6752029-offline-mode) precizează o limită importantă pentru media: desktopul stochează toate imaginile și PDF-urile bazei de cunoștințe, în timp ce mobilul păstrează în cache doar unele imagini recente. Aplicația web poate continua într-o filă deja deschisă, dar nu poate fi pornită de la zero offline.

Folosește RemNote când notițele conectate justifică schimbarea modelului colecției. Păstrează Anki dacă șabloanele și extensiile sunt baza sistemului tău, nu doar accesorii.

## Mochi: Markdown local și un export nativ complet

Mochi este o alternativă mai simplă pentru cei care vor date locale, carduri în Markdown și mai puține comenzi pe ecran. Aplicațiile sale instalate funcționează pe toate platformele desktop și mobile majore și pot fi folosite [complet offline, fără cont](https://mochi.cards/docs/getting-started/download-and-install/). Sincronizarea este partea plătită, la 5 USD pe lună.

Importatorul direct din Anki preia istoricul recapitulărilor, ceea ce plasează Mochi mult înaintea opțiunilor limitate la text. Conversia este descrisă și ea neobișnuit de clar: Mochi elimină CSS și JavaScript și convertește HTML în Markdown. Funcționează bine când sensul este transmis prin text și atașamente obișnuite. Dacă sensul depinde de șablon, conversia trebuie verificată cu atenție.

Mochi oferă acum doi algoritmi de programare. Algoritmul propriu rămâne cel implicit, iar [FSRS poate fi activat](https://mochi.cards/docs/reviewing/fsrs/) fără să resetezi progresul existent în Mochi. FSRS deduce starea cardurilor din istoricul recapitulărilor disponibil în Mochi. Evaluarea rămâne binară — Remembered sau Forgot — chiar și cu FSRS, așa că utilizatorii Anki care se bazează pe Hard și Easy ca semnale distincte ar trebui să se aștepte la un alt ritm zilnic.

Exportarea datelor este mai clară decât în majoritatea aplicațiilor proprietare. Un [export nativ `.mochi`](https://mochi.cards/docs/import-and-export/exporting/) conține carduri, șabloane, atașamente, etichete, structura pachetelor și istoricul recapitulărilor. Markdown și CSV sunt mai ușor de inspectat în alte aplicații, dar omit istoricul recapitulărilor și alte metadate.

Depozitele publice GitHub ale Mochi conțin [integrări și instrumente conexe](https://github.com/mochi-cards/open-source), nu aplicația de bază sau un server de sincronizare acceptat oficial. Alege Mochi pentru utilizarea offline și portabilitate, nu pentru controlul asupra codului-sursă.

## Mnemosyne: varianta open-source pentru desktop

Mnemosyne se apropie cel mai mult de modelul tradițional „program și bază de date locală”. Versiunea actuală funcționează pe Windows, macOS și Linux și are un client Android pentru recapitulare offline. Pagina cu funcții documentează carduri cu formatare și conținut multimedia, etichete ierarhice, pluginuri, o scară de evaluare de la 0 la 5 și import complet din Anki, cu tipuri de carduri personalizate și date de învățare.

Este cea mai directă migrare open-source dintre cele prezentate aici dacă vrei să renunți la Anki fără să treci la un sistem amplu de notițe sau la un serviciu cloud. Are și un [server de sincronizare integrat](https://mnemosyne-proj.org/help/syncing), care poate rula pe desktop sau pe o mașină fără interfață grafică și poate combina datele de învățare de la mai mulți clienți.

Limitele fac parte din decizie. Clientul Android [nu poate edita carduri](https://mnemosyne-proj.org/help/android-client). Utilizatorii iOS trebuie să recapituleze prin serverul pentru acces din browser, care rulează pe altă mașină, iar pagina oficială a funcțiilor acestui server avertizează că nu are funcții de securitate. Sincronizarea administrată pe cont propriu înseamnă și să menții serverul accesibil, să configurezi rețeaua și să faci copii de siguranță ale directorului de date.

Licențierea este mai specifică decât simpla etichetă „GPL”: [fișierul de licență al proiectului](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) indică termeni diferiți în funcție de componentă. [Licența nucleului](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) folosește AGPL v3 cu o prevedere suplimentară privind numele și atribuirea, iar [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) folosește LGPL v3. Citește aceste fișiere dacă intenționezi să modifici sau să redistribui software-ul.

## Quizlet: o alegere pentru clasă, nu pentru păstrarea fidelă a colecției

Quizlet rezolvă mai bine o altă nevoie. Seturile publice de studiu, clasele profesorilor, partajarea, Match, Test, Learn și activitățile de grup sunt mai ușor de pus la dispoziția unei clase decât un profil Anki personalizat.

Migrarea se limitează la text simplu. Quizlet poate transforma rândurile lipite în termeni și definiții, dar nu citește un `.apkg` pentru a reconstrui tipurile de note, șabloanele, programarea sau istoricul recapitulărilor. Creatorii își pot [exporta propriile seturi ca text copiat](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), fără imagini; seturile copiate de la alți utilizatori nu pot fi exportate. Astfel poți transfera conținutul, dar nu întreaga colecție cu datele ei de învățare.

Modul în care Quizlet programează recapitulările se schimbă. Noua funcție [Spaced Repetition](https://quizlet.com/features/spaced-repetition) se activează automat pe web pentru seturile de cel puțin 100 de termeni și folosește evaluările Repeat, Hard, Okay și Easy. Quizlet încă anunță că funcția va fi disponibilă în curând pe mobil. Learn rămâne un mod separat de exersare adaptivă, cu limite de utilizare legate de abonamentele plătite.

Utilizarea offline înseamnă tot aplicațiile mobile, nu site-ul. Quizlet salvează automat opt seturi recente și îți permite să descarci altele; [Flashcards și Match funcționează offline](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), iar progresul se sincronizează după reconectare.

Alege-l când obiectivul este distribuirea materialului și activitatea în clasă. Refacerea unui program personal de recapitulare construit în timp, doar pentru aceste funcții, este de obicei un schimb dezavantajos.

## Brainscape: mai puține decizii de programare, o migrare mai limitată

Brainscape îți cere să evaluezi cât de sigur ești de răspuns pe o scară de la 1 la 5 și folosește acest semnal pentru a readuce mai repede cardurile pe care nu le stăpânești. Formula completă nu este publicată, dar modul de utilizare este ușor de explicat unei clase.

Acceptă fișiere CSV, TXT, XLSX și ODS. Este comod pentru cardurile cu față și verso, dar înseamnă că șabloanele, extensiile, regulile pentru media și datele de învățare din Anki rămân în urmă. Exportarea unei copii de siguranță personale este o funcție Pro și produce fișiere care pot fi deschise într-o foaie de calcul și reimportate ulterior.

Centrul de ajutor actual al Brainscape spune că site-ul și aplicațiile mobile au acum aceleași funcții de bază pentru căutare, creare, partajare și studiu. Descrie și utilizarea mobilă offline, resincronizarea manuală și actualizarea claselor deja descărcate pe dispozitiv. Asta permite reluarea practică a lucrului după reconectare, dar nu promite că întregul cont devine o bibliotecă locală completă.

Exportul pachetelor personale rămâne o [funcție Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Nu există o versiune oficială cu cod-sursă public sau o cale de găzduire proprie.

Brainscape merită luat în calcul când Anki cere prea multă configurare de la cei care trebuie să învețe. Schimbarea nu aduce însă mare lucru cuiva care folosește deja bine acele opțiuni.

## SuperMemo: alege metoda și acceptă să începi de la zero

Serviciul actual SuperMemo.com este o platformă de învățare a limbilor străine pentru web, iOS și Android, construită în jurul metodei proprietare de programare SuperMemo. Este separat de vechiul produs pentru Windows, pe care cei care folosesc SuperMemo de mult timp s-ar putea să îl cunoască.

Alegerea ține de metodă și de catalog, nu de o migrare fidelă din Anki. SuperMemo acceptă [crearea în masă prin lipirea unor rânduri de întrebări și răspunsuri separate prin delimitatori](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), cu o limită de 100 de carduri la un import. Nu am găsit un importator oficial actual pentru `.apkg` sau o cale de export pentru utilizatorii serviciului găzduit. Prin urmare, șabloanele, extensiile, structura media și istoricul recapitulărilor nu se transferă prin această metodă documentată.

Cursurile descărcate pot fi studiate offline în aplicațiile mobile. [Ghidul pentru modul offline](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) exclude funcțiile AI, adăugarea de MemoCards, căutarea, înregistrările, statisticile și editorul de cursuri, așa că pregătește materialul și sincronizează-l înainte să te deconectezi.

Alege SuperMemo dacă metoda sau catalogul său de cursuri merită pentru tine începerea unui program nou de recapitulare. Dacă prioritatea este păstrarea programului existent, rezolvă altă problemă decât cea care te interesează.

## Nibomo: acces la codul întregului sistem, cu cel mai limitat import din Anki

Nibomo îți oferă control asupra unei mari părți a sistemului. [Depozitul sub licență MIT](https://github.com/kirill-markin/flashcards-open-source-app) conține aplicația web, clienții iOS și Android, backendul, sincronizarea offline, infrastructura, [API-ul public](/docs/api/) și [serverul MCP](/docs/mcp-connector/). Recapitulările folosesc [FSRS](/docs/architecture/#scheduling). Aplicațiile web, iOS și Android scriu mai întâi local, adaugă modificările într-o coadă de trimitere și le sincronizează după reconectare.

Asta nu îl face compatibil cu Anki. Nibomo nu poate citi `.apkg` sau `.colpkg`. [Migrarea din Anki prin TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/), acceptată oficial, este un flux de pregătire a cardurilor cu ajutorul AI, urmat de verificare, pentru carduri bazate în principal pe text. Nu păstrează șabloanele, extensiile, ierarhia pachetelor, datele scadente, intervalele sau înregistrările recapitulărilor. Referințele media dintr-un fișier TXT nu sunt fișierele media în sine, așa că pachetele bogate în media necesită reconstruire și verificare separate.

Nici pachetul propriu `flashcards.zip` din Nibomo nu echivalează cu o copie de siguranță. Mută carduri, etichete și fișierele media asociate între spațiile de lucru Nibomo. Nu mută istoricul recapitulărilor, starea FSRS, structurile complete ale pachetelor, setările spațiilor de lucru sau conturile.

Funcțiile de bază ale serviciului găzduit sunt [gratuite pe durata versiunii beta](/ro/pricing/). Găzduirea pe cont propriu a sistemului de producție nu este o instalare Docker cu o singură comandă: [ghidul de găzduire proprie](/docs/self-hosting/) folosește AWS CDK și necesită servicii AWS, plus Cloudflare, Resend, Sentry, gestionarea secretelor, migrări, copii de siguranță, restaurări și actualizări. Docker Compose este varianta pentru dezvoltare, nu implementarea de producție acceptată oficial.

Folosește Nibomo când accesul la tot codul și controlul operatorului asupra backendului sunt motivul schimbării, iar cardurile tale sunt suficient de simple pentru a fi reconstruite în siguranță. [Deschide aplicația găzduită](https://app.nibomo.com/) ca să încerci un mic pachet temporar. Păstrează Anki — sau testează RemNote, Mochi ori Mnemosyne — când păstrarea fidelă a stării învățării este prioritară.

## Ce alternativă la Anki funcționează pe iOS fără surprize neplăcute la migrare?

O „alternativă la Anki pentru iOS” poate însemna două lucruri diferite: o aplicație nativă pentru iPhone sau un înlocuitor pentru [AnkiMobile, care costă 24,99 USD, plătiți o singură dată](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo și Nibomo au toate aplicații iOS. Mnemosyne nu are. Întrebarea despre migrare rămâne însă deschisă:

- **Mochi** păstrează mai mult decât opțiunile iOS limitate la text: importă istoricul recapitulărilor din `.apkg`, cu conversie în Markdown și evaluare binară.
- **RemNote** importă și el istoricul recapitulărilor din `.apkg`, dar testează coada **Need to Learn** în loc să presupui că programul de astăzi din Anki se păstrează.
- **Quizlet** se potrivește distribuirii materialelor în clasă, dar calea sa de import din Anki este limitată la text, iar noua funcție de repetiție spațiată nu este încă disponibilă pe mobil.
- **Nibomo** este opțiunea cu cod-sursă disponibil și client nativ iOS, dar migrarea sa din Anki resetează starea învățării.
- **Brainscape** și **SuperMemo** au sens doar dacă metoda lor de recapitulare justifică reconstruirea cardurilor și a programului.

Înainte să renunți la AnkiMobile din cauza prețului, compară costul său cu cel al unui abonament și cu orele necesare pentru corectarea problemelor de migrare. O aplicație cumpărată o singură dată poate fi mai ieftină decât una gratuită care transformă o colecție construită în timp într-un proiect de lucru manual.

## Când este mai sigur să păstrezi Anki

Și păstrarea aplicației este o decizie validă. Nu ai eșuat doar fiindcă nu ai ales ceva mai nou. Păstrează Anki dacă te regăsești în oricare dintre situațiile următoare:

- colecția ta depinde de șabloane personalizate, CSS, JavaScript sau extensii;
- Image Occlusion, fișierele audio sau alte fișiere media transmit informații esențiale;
- o singură notă generează carduri în mai multe direcții, care trebuie să rămână legate între ele;
- anii de istoric al recapitulărilor și datele scadente actuale valorează mai mult decât un editor nou;
- te bazezi pe un mod de lucru pe desktop sau pe o combinație de platforme pe care alternativa nu o oferă;
- modul offline al înlocuitorului funcționează doar într-o versiune a aplicației pe care nu o vei folosi;
- ideea găzduirii proprii te atrage, dar nu vrei să administrezi, să securizezi, să salvezi copii de siguranță și să actualizezi un server;
- alternativa nu rezolvă nicio problemă repetată, în afară de faptul că arată mai bine.

Anki oferă în continuare un ecosistem matur de extensii, șabloane flexibile pentru note și carduri, FSRS și opțiuni de control pentru algoritmul tradițional de programare, clienți instalați local și formate de pachet care pot transporta colecția. Niciunul dintre produsele de mai sus nu reproduce toate acestea.

Pentru o comparație axată pe gradul de control asupra aplicației, citește [ghidul aplicațiilor open-source de carduri de învățare](/blog/best-open-source-flashcard-apps-2026/). Dacă funcționarea offline este factorul decisiv, [comparația aplicațiilor de carduri offline](/blog/best-offline-flashcards-app/) distinge între aplicații instalate, conținut păstrat în cache și file de browser.

## O listă de verificare a migrării al cărei rezultat poate fi tot „nu”

Nu începe cu întreaga colecție. Fă un test pe care îl poți abandona fără consecințe dacă rezultatul nu este bun.

1. **Creează un pachet pentru recuperare.** Exportă un `.colpkg` cu fișiere media, stochează-l în afara profilului Anki și păstrează o a doua copie în alt loc.
2. **Alege pachetul dificil.** Include carduri cloze, câmpuri personalizate, carduri în ambele direcții, pachete imbricate, etichete, imagini, audio și suficient istoric al recapitulărilor pentru a scoate la iveală efectele conversiei programului.
3. **Exportă formatul pe care destinația îl acceptă efectiv.** Folosește `.apkg` cu programare, configurații prestabilite și media pentru un importator direct. Folosește Notes in Plain Text doar dacă accepți o reconstrucție limitată la conținut.
4. **Înregistrează situația de pornire.** Notează numărul de note și de carduri, numele etichetelor și pachetelor, numărul fișierelor media, câteva date scadente și intervale, precum și numărul așteptat de carduri generate din fiecare tip de notă.
5. **Importă într-un spațiu temporar.** Nu suprascrie profilul-sursă și nu integra primul test într-o bibliotecă permanentă a aplicației de destinație.
6. **Inspectează separat conținutul și starea învățării.** O față și un verso corecte nu dovedesc că s-au păstrat cardurile cloze, fișierele media, cardurile provenite din aceeași notă, istoricul recapitulărilor sau următoarea dată scadentă.
7. **Pornește aplicația de la zero offline pe fiecare dispozitiv pe care îl folosești.** Recapitulează, editează, închide complet aplicația, redeschide-o fără conexiune, apoi reconectează-te și verifică un alt dispozitiv.
8. **Compară cozile înainte să începi recapitulările.** Compară primul set de carduri scadente și câteva intervale înainte să evaluezi aceleași carduri din colecția reală în ambele aplicații. După prima recapitulare în noua aplicație, cele două programe de recapitulare evoluează independent.
9. **Testează exportul înainte să te hotărăști.** Exportă din destinație și verifică ce ai putea recupera dacă ai renunța la ea anul viitor.
10. **Păstrează Anki și copia de siguranță neatinsă.** Nu șterge nici aplicația, nici copia până când înlocuitorul nu a trecut proba utilizării obișnuite și nu ai acceptat conștient fiecare pierdere.

Dacă destinația acceptă doar text, urmează [fluxul complet pentru un export TXT sigur](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Acesta separă fișierul `.colpkg` pentru recuperare de fișierul de lucru portabil și face explicită resetarea progresului.

## Ia decizia în această ordine

Începe cu ceea ce nu îți permiți să pierzi:

1. Dacă șabloanele exacte, extensiile sau coada actuală sunt esențiale, păstrează Anki, cu excepția cazului în care un `.apkg` reprezentativ demonstrează că le poți păstra.
2. Dacă notițele și cardurile ar trebui să formeze un singur sistem, testează RemNote. Verifică și coada **Need to Learn**, nu doar paginile importate.
3. Dacă Markdown local și exporturile pe care le poți inspecta contează mai mult decât afișarea din Anki, testează Mochi.
4. Dacă vrei o aplicație desktop open-source axată pe învățare, cu import direct din Anki, testează Mnemosyne și confirmă că limitele sale mobile se potrivesc rutinei tale.
5. Dacă problema reală este distribuirea materialelor în clasă sau un proces comun de recapitulare mai simplu, reconstruiește un set mic în Quizlet ori Brainscape.
6. Dacă vrei în mod special metoda SuperMemo, acceptă un program nou de recapitulare. Dacă vrei în mod special acces la codul întregului sistem, găzduire proprie, API și MCP, acceptă reconstruirea conținutului cu pierderi în Nibomo și munca de administrare.

Pentru o comparație funcție cu funcție a trei modele foarte diferite, vezi [Anki vs Quizlet vs Nibomo](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Regula utilă este simplă: schimbă aplicația când câștigul este concret și ai verificat printr-un test real că pierderile sunt acceptabile. Dacă pachetul tău reprezentativ nu se transferă corect, păstrarea Anki nu este o soluție conservatoare de rezervă. Este rezultatul comparației.
