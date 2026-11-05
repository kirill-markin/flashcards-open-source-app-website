---
title: "Fișe duplicate în Anki – cum le găsești și alegi ce păstrezi"
description: "Află de ce apar fișe duplicate în Anki, compară notele și alege ce copie păstrezi. Exersează ștergerea și verificarea istoricului recapitulărilor."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "fișe duplicate în Anki"
  - "cum găsești duplicate în Anki"
  - "cum ștergi note duplicate în Anki"
  - "note duplicate în Anki"
  - "istoricul recapitulărilor în Anki"
---

Ai mai văzut întrebarea asta la recapitulare, dar Anki ți-o afișează ca și cum ar fi nouă. Poate ai importat încă o copie sau poate Anki a generat o a doua întrebare din aceeași notă. Merită să afli ce s-a întâmplat. Dacă ștergi un rând din lista de fișe, poți elimina toate fișele generate din acea notă, inclusiv întrebarea pe care voiai s-o păstrezi.

Ca să elimini **fișele duplicate din Anki**, află întâi de ce se repetă întrebarea. Dacă fișele provin din note diferite, folosește **Notes → Find Duplicates**. Când două note au același conținut într-un câmp, compară-le în întregime și verifică istoricul fiecărei fișe. Alege de la caz la caz ce copie păstrezi.

Pașii pentru versiunea desktop se bazează pe documentația Anki și pe codul sursă publicat, verificate pe 4 octombrie 2026. Denumirile din interfață și exemplele de căutare sunt pentru versiunea în engleză. Exercițiul de mai jos arată la ce rezultate te-ai aștepta în cazul unui pachet fictiv.

![Un membru al unui club de șah compară o tură în plus, deschisă la culoare, cu două ture uzate de pe o tablă de lemn](/blog/anki-duplicate-cards.png)

## Află mai întâi ce se repetă

O notă conține câmpuri precum **Front** (față) și **Back** (verso). Anki folosește șabloane ca să genereze fișe din aceste câmpuri. Dintr-o singură notă de vocabular, de exemplu, poți obține o fișă în care recunoști cuvântul și una în care trebuie să ți-l amintești pornind de la traducere. Fiecare are propriul program de recapitulare. Anki le numește fișe surori. [Note și câmpuri în manualul Anki](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

În fereastra **Browse**, treci în modul **Cards** și deschide **Cards → Info** pentru fiecare rând suspect. Compară ID-urile notelor. Dacă ID-ul notei e același, fișele provin din aceeași notă. Dacă ID-urile diferă, sunt note separate. Înlocuiește `123` din `nid:123` cu ID-ul real al notei ca să-i vezi toate fișele, indiferent de pachet. [ID-uri și căutări după ID în manualul Anki](https://docs.ankiweb.net/searching.html#object-ids)

| Ce găsești | Explicația probabilă | Ce faci mai departe |
| --- | --- | --- |
| Aceeași notă, întrebări în sensuri opuse | Fișe surori create intenționat | Vezi dacă îți sunt utile ambele întrebări |
| Aceeași notă, întrebări care se afișează identic | Posibile șabloane de fișe duplicate | Compară șabloanele și previzualizările |
| Note diferite, întrebări aparent identice | Posibile note duplicate | Compară notele în întregime înainte să alegi ce păstrezi |

Dacă ai vrut să exersezi în ambele sensuri, poți afla cum funcționează cele două fișe din [ghidul despre fișele inversate](/blog/anki-reverse-cards/) (în engleză). Ca să oprești temporar recapitularea uneia dintre ele, suspend-o. Fișa rămâne în colecție. [Ghidul despre suspendarea fișelor (în engleză)](/blog/anki-bury-vs-suspend/)

Dacă șabloanele sunt identice, urmează [pașii de verificare din ghidul Anki](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Eliminarea unui șablon afectează toate notele de acel tip, inclusiv pe cele din alte pachete. Tratează eliminarea șablonului separat de curățarea duplicatelor, fiindcă modifică structura colecției.

## Alege unde cauți note duplicate

Deschide **Notes → Find Duplicates** și selectează câmpul pe care vrei să-l compari, de exemplu **Front**. În mod implicit, Anki caută în toate tipurile de note care conțin acel câmp. Restrânge căutarea cu **Optional filter**, apoi apasă **Search**. [Opțiunile Find Duplicates din manualul Anki](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Pentru un pachet numit `Cleanup practice`, introdu filtrul de mai jos.

```text
deck:"Cleanup practice"
```

Căutarea într-un pachet include și subpachetele sale. Dacă pot exista copii în mai multe pachete, scoate filtrul și caută în toată colecția. Chiar dacă rezultatul e gol în pachetul ales, o copie poate exista în altă parte. [Sintaxa Anki pentru căutarea în pachete](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Apasă pe un grup de rezultate ca să-i vezi notele. **Tag Duplicates** pune eticheta `duplicate` pe fiecare notă din fiecare grup, inclusiv pe cea pe care vrei s-o păstrezi. [Codul sursă al funcției de etichetare](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

**Evită să ștergi în bloc rezultatele căutării `tag:duplicate`.** Folosește eticheta ca să găsești notele de verificat, apoi alege-le pe cele de șters una câte una.

Căutarea compară câmpul selectat. S-ar putea să trebuiască să cauți manual întrebările formulate diferit care verifică același lucru. Chiar și întrebări identice pot aparține unor limbi sau cursuri diferite.

## Exercițiu pe hârtie cu trei perechi de note

Imaginează-ți șase note în pachetul `Cleanup practice`, fără subpachete. A și B folosesc șabloanele nemodificate **Basic (and reversed card)** și generează câte două fișe. C–F folosesc **Basic** și generează câte una. Toate cele opt fișe se află în acel pachet. Literele servesc doar la identificarea notelor în acest exemplu. În Anki, ID-urile notelor și ale fișelor sunt numere.

| Note | Front → Back | Progres în exemplu | Decizie |
| --- | --- | --- | --- |
| A și B | `le vélo` → `bicycle` | A are 12 recapitulări pe fișa de recunoaștere și 3 pe fișa în sens invers. Ambele fișe ale notei B sunt noi | Păstrează A și verifică mai întâi dacă poți șterge B |
| C și D | `Chemical symbol for silver?` → `Ag` | C are 20 de recapitulări, iar D are 6 | Compară ambele istorice și alege cu ce fișă continui |
| E și F | E: `bank` → `financial institution`, F: `bank` → `side of a river` | Cele două fișe vizează sensuri diferite | Păstrează-le pe amândouă și adaugă context în întrebări |

Căutarea după **Front** poate grupa toate cele trei perechi. Doar în prima pereche decizia pare simplă. Înainte să decizi că B e în plus, compară **toate câmpurile**, fișierele media, etichetele, tipul notei și cum arată fișele generate în fiecare sens. Poate că B are o înregistrare cu pronunția care lipsește din A sau generează o întrebare în plus.

Dacă un detaliu te ajută să înveți ceea ce verifică deja fișa, copiază-l în nota pe care o păstrezi și uită-te la rezultat în previzualizare. Preia și etichetele utile de pe nota din care ai copiat. Dacă vrei să testezi altceva, creează o întrebare nouă cu propriul istoric.

Pentru notele C și D, un număr mai mare de recapitulări e doar un indiciu. La fiecare fișă, uită-te când au avut loc recapitulările, cum ai evaluat răspunsurile, care e intervalul curent și când e programată următoarea recapitulare. Poate că ai recapitulat o fișă mai des fiindcă a trebuit s-o reînveți. Verifică dacă întrebarea și răspunsul îți sunt utile, apoi alege fișa al cărei istoric vrei să-l continui. Dacă răspunsurile se contrazic, consultă mai întâi materialul de studiu. Numărul recapitulărilor nu îți spune care răspuns e corect.

Dacă păstrezi C și ștergi D, **fișa din C își păstrează progresul și propriul istoric**. Anki afișează istoricul fiecărei fișe în [Card Info](https://docs.ankiweb.net/stats.html#card-info). Recapitulările fișelor din notele șterse rămân vizibile doar în statisticile întregii colecții. [Statisticile notelor șterse în manualul Anki](https://docs.ankiweb.net/stats.html#more)

Dacă încă nu te-ai hotărât, amână ștergerea. Notează ce mai ai de verificat și, dacă e nevoie, suspendă fișele pe care nu vrei să le vezi cât timp faci verificarea.

## Șterge copia pe care ai verificat-o

Înainte să ștergi fișe din colecția ta, sincronizează modificările de pe celelalte dispozitive, apoi sincronizează aplicația desktop ca să le preia. [Pașii de sincronizare din manualul Anki](https://docs.ankiweb.net/syncing.html)

Din **File → Export**, salvează un fișier de tip **Anki Collection Package (`.colpkg`)** cu opțiunea **Include Media** activată. Fișierul conține toate pachetele, cu programarea și istoricul recapitulărilor. Păstrează-l într-un loc sigur. Când imporți fișierul, colecția salvată ia locul tuturor fișelor din profilul deschis. [Exportul colecției în manualul Anki](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Dacă vrei să exersezi ștergerea, creează un profil separat prin **File → Switch Profile** și importă copia de siguranță acolo. Lasă profilul de probă deconectat de la AnkiWeb. [Fiecare profil are propria colecție](https://docs.ankiweb.net/profiles.html). Conectarea ambelor profiluri la același cont poate duce la înlocuirea unei colecții cu cealaltă. [Ghidul despre APKG și COLPKG](/blog/anki-apkg-vs-colpkg/) (în engleză) explică ce cuprinde copia de siguranță și ce se întâmplă la import.

În exercițiu, A1 e fișa din nota A pentru recunoașterea cuvântului, iar A2 e cea în sens invers, în care trebuie să ți-l amintești. B1 și B2 sunt fișele corespunzătoare din nota B. În **Cards → Info**, notează ID-urile reale ale celor două fișe din A, datele următoarelor recapitulări, intervalele și câteva intrări ușor de găsit în istoric. Notează și ID-ul notei B. Fă verificările dinainte și de după ștergere în aceeași sesiune, fără să recapitulezi sau să reprogramezi fișele din A sau B.

Ca să ștergi notele duplicate din Anki una câte una, urmează acești pași.

1. În **Browse**, caută după ID-ul real al notei B, folosind `nid:`. În modul **Cards**, verifică toate rezultatele și previzualizează fișele în ambele sensuri. Când faci asta în colecția ta, caută fără filtru de pachet ca să vezi și fișele surori din alte pachete.
2. Treci în modul **Notes**. Confirmă că unicul rezultat e nota B pe care vrei s-o elimini, selectează doar acel rând și alege **Notes → Delete**. [Comanda Delete](https://docs.ankiweb.net/browsing.html#notes) șterge nota selectată și toate fișele ei, chiar dacă o folosești după ce ai selectat un singur rând în modul **Cards**.
3. Caută din nou după ID-ul notei B și confirmă că nu mai apare niciun rezultat. Caută apoi fișele lui A cu `cid:` urmat de ID-urile notate, separate prin virgulă. Compară informațiile din **Info** pentru ambele fișe cu datele pe care le-ai notat.
4. Caută `deck:"Cleanup practice"` și compară numărul de rânduri afișate în modurile **Notes** și **Cards**. Verifică în tabel ce note ar trebui să rămână.

Dacă ștergi doar B, ar trebui să obții rezultatele de mai jos.

| Verificare | Înainte | Rezultat așteptat după ștergere |
| --- | --- | --- |
| Întregul pachet din exemplu | 6 note / 8 fișe | 5 note / 6 fișe |
| Fișele pentru `le vélo` | A1, A2, B1, B2 | Doar A1 și A2 |
| ID-urile fișelor din A, datele următoarelor recapitulări, intervalele și istoricul | Valorile pe care le-ai notat | Aceleași fișe, cu aceeași programare și aceleași înregistrări în istoric |
| Căutarea după ID-ul notei B | Cele două fișe ale lui B | Niciun rezultat |
| Notele despre argint și sensurile lui `bank` | C, D, E, F | Rămân aceleași patru note |

În exemplul acesta, ștergerea unei singure note elimină două fișe. Dacă ai șterge A în loc de B, ai obține aceleași totaluri și ai pierde fișele deja studiate pe care voiai să le păstrezi. Verifică atât ID-urile, cât și totalurile. Lasă intacte programarea și progresul fișelor păstrate în timpul curățării.

Graficul pentru întreaga colecție poate include în continuare recapitulările fișelor șterse. Ca să verifici progresul fișei păstrate, caut-o după ID și consultă datele din **Info**.

Când rezultatele pentru acest grup coincid cu ce ai notat, treci la următorul și decide ce păstrezi și acolo. Dacă ai exersat pe o copie, repetă mai întâi ștergerea pe care ai verificat-o în profilul tău obișnuit. Verifică rezultatul în colecție, sincronizează aplicația desktop, apoi sincronizează și celelalte dispozitive înainte să reiei studiul pe ele. Dacă dublurile au apărut la import, consultă [ghidul pentru actualizarea notelor din CSV](/blog/anki-csv-update-existing-notes/) (în engleză) înainte de următorul import. Dacă ai copiat o notă ca s-o incluzi la mai multe subiecte, [poți folosi mai multe etichete pe aceeași notă](/blog/anki-tags-vs-decks/) (ghid în engleză) și păstra astfel un singur istoric.
