---
title: "Anki funcționează offline în 2026? Desktop, iPhone, Android și sincronizare"
description: "Da, aplicațiile Anki instalate pe desktop, iPhone, iPad și Android pot folosi o colecție locală offline. Află ce necesită internet, cum funcționează sincronizarea ulterioară și cum pregătești fișierele media."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "Anki funcționează offline"
  - "poți folosi Anki offline"
  - "AnkiMobile funcționează offline"
  - "AnkiDroid funcționează offline"
  - "sincronizare Anki offline"
  - "AnkiWeb offline"
  - "Anki fără internet"
---

Anki nu trebuie să contacteze un server ca să îți arate următoarea fișă. **Aplicațiile Anki instalate funcționează offline în 2026:** Anki pe Windows, macOS și Linux, AnkiMobile pe iPhone și iPad și AnkiDroid pe Android. Fiecare folosește o colecție stocată pe dispozitivul respectiv, așa că poți recapitula, crea note și face modificări obișnuite fără internet.

Există însă o diferență care te poate lua prin surprindere: AnkiWeb. Acesta este serviciul de studiu și sincronizare din browser, nu o aplicație Anki pentru utilizare offline. Chiar și o aplicație instalată poate folosi doar pachetele și fișierele media care au ajuns deja pe dispozitivul respectiv.

**Informații verificate:** 16 august 2026.

![Un cercetător de teren adaugă o înregistrare într-o arhivă locală de fotografii, sunete și texte în timp ce legătura radio din munți este întreruptă](/blog/does-anki-work-offline.png)

## Răspunsul pe scurt, pentru fiecare aplicație

[Site-ul oficial Anki](https://apps.ankiweb.net/) prezintă aplicația desktop, AnkiMobile pentru iOS, AnkiDroid pentru Android și AnkiWeb ca părți ale aceluiași ecosistem. Posibilitățile de utilizare offline diferă însă.

| Aplicație sau serviciu | Funcționează offline? | Ce poți face fără internet | Ce necesită o conexiune |
| --- | --- | --- | --- |
| **Anki desktop** pe Windows, macOS sau Linux | **Da.** Colecția și folderul media sunt locale. | Recapitulezi fișe, adaugi note, editezi conținutul notelor și folosești fișierele media deja stocate pe calculator. | Descarci pachete partajate, sincronizezi cu AnkiWeb și descarci orice resursă pe care o fișă sau un supliment o solicită de la un serviciu online. |
| **AnkiMobile** pe iPhone sau iPad | **Da.** Aplicația păstrează o colecție locală. | Recapitulezi fișe locale, adaugi note, editezi conținutul notelor și redai sunete sau afișezi imagini deja existente pe dispozitiv. | Finalizezi sincronizarea inițială a colecției și a fișierelor media, folosești AnkiWeb și accesezi resurse la distanță. |
| **AnkiDroid** pe Android | **Da.** AnkiDroid păstrează colecția pe dispozitivul Android. | Recapitulezi fișe locale, adaugi note, editezi conținutul notelor și folosești fișierele media de pe dispozitiv. | Sincronizezi sau descarci materialele lipsă, obții pachete partajate și folosești funcțiile fișelor care depind de rețea. |
| **AnkiWeb** în browser | **Nu are mod offline.** Este un serviciu online de studiu și sincronizare. | Nu te baza pe el după ce pierzi conexiunea. | Folosești o conexiune la internet sau treci la o aplicație instalată și pregătită din timp. |

Poți, așadar, folosi Anki offline dacă te referi la o aplicație instalată pe care există deja colecția de care ai nevoie. AnkiWeb în browser necesită în continuare o conexiune.

## Recapitulările și modificările offline rămân mai întâi pe acel dispozitiv

Când răspunzi la fișe offline, Anki înregistrează recapitulările în colecția locală. Algoritmul care programează recapitulările continuă de la acea stare locală. Notele noi și modificările obișnuite sunt tot locale. Nimic nu apare pe alt dispozitiv până când nu te reconectezi și nu sincronizezi.

Sincronizarea cu AnkiWeb este opțională dacă studiezi pe un singur dispozitiv. Rolul ei este să transfere modificările colecției între dispozitive. [Manualul de sincronizare Anki](https://docs.ankiweb.net/syncing.html) explică faptul că, în condiții obișnuite, recapitulările și modificările notelor făcute în mai multe locuri se pot combina. Dacă aceeași fișă a fost recapitulată în două locuri, ambele răspunsuri rămân în istoricul ei, iar starea dată de cel mai recent răspuns are prioritate.

Această rutină reduce conflictele de sincronizare care pot fi evitate:

1. Sincronizează dispozitivul cât timp ai încă o conexiune stabilă.
2. Recapitulează, adaugă note sau corectează textul fișelor offline.
3. Reconectează-te și sincronizează acel dispozitiv înainte de a continua pe altul.
4. Lasă și celălalt dispozitiv să își termine sincronizarea înainte de a face noi modificări acolo.

Modificările structurii colecției cer mai multă atenție. Adăugarea unui câmp, eliminarea unui șablon de fișă, schimbarea tipurilor de note și alte operațiuni similare pot necesita o sincronizare într-un singur sens, în locul combinării modificărilor. O astfel de sincronizare îți cere să păstrezi fie colecția locală, fie colecția din AnkiWeb; modificările de pe cealaltă parte pot fi înlocuite.

Poți continua recapitulările obișnuite și editarea notelor în timpul unei călătorii, dar amână modificările complexe ale tipurilor de note și ale șabloanelor dacă lucrezi offline pe mai multe dispozitive, iar colecțiile lor încep să difere. Dacă Anki îți cere să alegi între încărcare și descărcare, oprește-te și identifică mai întâi colecția care conține munca pe care vrei să o păstrezi.

## Fișierele media sunt locale numai după ce ajung pe dispozitiv

Anki stochează sunetele și imaginile separat de datele colecției. Pentru desktop, [documentația despre media](https://docs.ankiweb.net/media.html) explică faptul că fișierele atașate sau lipite într-o notă sunt copiate în folderul local `collection.media`. Odată ce un fișier media se află în acel folder, fișa nu mai are nevoie de internet pentru a-l încărca.

Pregătirea este punctul vulnerabil. Sincronizarea colecției și cea a fișierelor media sunt separate, așa că sunetele și imaginile pot fi încă în curs de transfer după ce apar fișele. [Ghidul de sincronizare AnkiMobile](https://docs.ankimobile.net/syncing.html) avertizează că fișierele media pot lipsi până când prima sincronizare se termină complet. Faptul că vezi toate pachetele în listă nu dovedește că o colecție cu multe imagini sau înregistrări audio este gata de folosit.

Înainte să rămâi fără conexiune:

- sincronizează dispozitivul pe care ai adăugat fișierele media;
- așteaptă să se termine sincronizarea fișierelor media pe acel dispozitiv;
- sincronizează dispozitivul pe care îl vei lua cu tine și așteaptă și acolo;
- deschide fișe care folosesc fiecare tip de imagine și de fișier audio de care ai nevoie;
- rulează **Check Media**, acolo unde opțiunea este disponibilă, pentru a găsi note care fac trimitere la fișiere lipsă.

Ultima verificare contează în cazul pachetelor partajate. Uneori, autorul pachetului nu a inclus niciodată o imagine la care face trimitere o notă, iar sincronizările repetate nu o pot descărca.

Fișierele media locale nu fac orice fișă independentă de rețea. Un șablon de fișă poate trimite la o imagine, un script, un font sau o altă resursă găzduită pe web. Dicționarele online, descărcarea pachetelor partajate și suplimentele care apelează API-uri la distanță necesită în continuare o conexiune. Citirea textului prin sinteză vocală depinde de voce și de platformă: o voce instalată în sistem poate funcționa offline, în timp ce o voce furnizată de un serviciu online nu va funcționa. Testează funcția exactă pe care o folosești, fără să presupui că toate vocile sau toate suplimentele se comportă la fel.

## Cum se sincronizează Anki după ce te reconectezi

Sincronizarea Anki după lucrul offline are, de fapt, două etape: lucrezi local acum și sincronizezi prin rețea mai târziu.

După ce revine conexiunea, sincronizează dispozitivul pe care ai lucrat offline. Așteaptă să se termine atât sincronizarea colecției, cât și cea a fișierelor media. Apoi sincronizează următorul dispozitiv înainte de a recapitula sau de a edita pe el. Această ordine te ajută să identifici ușor starea cea mai recentă dacă Anki îți cere să rezolvi un conflict.

Verifică rezultatul, nu te opri doar fiindcă s-a terminat animația de sincronizare:

- găsește o notă pe care ai adăugat-o offline;
- confirmă că un câmp editat conține textul nou;
- verifică istoricul recapitulărilor sau data programată pentru următoarea recapitulare a unei fișe la care ai răspuns;
- deschide pe al doilea dispozitiv cel puțin o imagine sau un fișier audio adăugat recent.

Dacă ai editat aceeași notă pe două dispozitive, citește versiunea finală, fără să presupui că prin combinarea modificărilor s-a păstrat formularea dorită. Dacă apare un buton roșu de sincronizare sau o alegere între încărcare și descărcare completă, nu continua din reflex. O descărcare completă înlocuiește modificările colecției locale; o încărcare completă înlocuiește colecția din AnkiWeb înainte ca celelalte dispozitive să o descarce.

## Fără acces regulat la internet, transferă colecția ca fișier

Poți transfera o colecție Anki între dispozitive chiar și fără acces regulat la AnkiWeb. În acest caz, transferi colecția întreagă de pe un dispozitiv pe altul; nu combini modificările făcute pe mai multe dispozitive.

[Ghidul AnkiMobile pentru transferul colecției](https://docs.ankimobile.net/collection-transfer.html) folosește un fișier `collection.colpkg` care conține toate pachetele și informațiile de programare a recapitulărilor. Exporți colecția curentă, transferi fișierul prin AirDrop sau prin partajarea fișierelor și îl imporți pe celălalt dispozitiv. [Manualul AnkiDroid](https://docs.ankidroid.org/manual.html) descrie o procedură similară prin USB pentru transferul colecției între Android și desktop.

Importarea unui fișier cu întreaga colecție înlocuiește colecția deja existentă pe dispozitivul de destinație. Nu poate combina două colecții modificate independent offline. Folosește un singur dispozitiv drept sursă a versiunii curente: exportă de pe el, importă pe următorul dispozitiv, fă modificările acolo și transferă înapoi colecția mai nouă înainte de a continua pe primul dispozitiv.

Această procedură este utilă pentru munca de teren, pe nave, în locuri izolate sau în rețele cu restricții, unde poți transfera ocazional fișiere, dar nu poți sincroniza regulat prin cloud. Pentru un zbor obișnuit sau pentru navetă, este mai simplu să finalizezi sincronizarea cu AnkiWeb înainte de plecare.

## Sincronizarea nu este o copie de siguranță Anki

Sincronizarea menține dispozitivele la aceeași stare. O ștergere accidentală sau o modificare nedorită se poate propaga astfel pe toate dispozitivele sincronizate.

Aplicațiile Anki instalate păstrează copii de siguranță locale, dar fișierele media necesită atenție separată. De exemplu, [ghidul preferințelor AnkiMobile](https://docs.ankimobile.net/preferences.html) precizează că acele copii de siguranță automate includ fișele și statisticile, dar nu și sunetele sau imaginile. Un export al întregii colecții, cu fișierele media incluse, are alt rol decât sincronizarea sau istoricul copiilor de siguranță automate.

Dacă refacerea unui pachet ar cere mult efort, păstrează periodic un export complet, cu fișierele media, în afara dispozitivului pe care îl folosești zilnic. [Ghidul despre copiile de siguranță pentru fișe](/blog/how-to-back-up-flashcards/) explică mai pe larg cum să combini acea copie pentru restaurare cu text într-un format ușor de transferat și cu fișierele sursă originale.

## Un test de zece minute în modul avion

Fă acest test chiar pe laptopul, telefonul sau tableta pe care îl vei lua cu tine. Un test reușit pe desktop nu îți spune nimic despre starea folderului media de pe telefon.

1. Cât timp ai internet, deschide aplicația Anki instalată și sincronizează. Dacă dispozitivul este nou, termină mai întâi descărcarea inițială a colecției.
2. Așteaptă să se termine sincronizarea fișierelor media. Nu te opri imediat ce apar numele pachetelor.
3. Deschide fiecare pachet de care ai nevoie. Verifică câteva fișe cu imagini, sunete, fonturi personalizate și orice funcție specială a șabloanelor pe care te bazezi.
4. Activează modul avion sau dezactivează toate conexiunile la rețea prin altă metodă.
5. Închide complet Anki, redeschide-l și începe să studiezi pachetul necesar. Astfel verifici că studiul offline funcționează și după repornirea aplicației.
6. Recapitulează câteva fișe. Adaugă o notă de test etichetată clar și fă o modificare minoră de text, fără consecințe.
7. Închide și redeschide aplicația cât timp ești încă offline. Confirmă că recapitulările, nota nouă, modificarea și fișierele media locale s-au păstrat.
8. Încearcă orice dicționar, voce de sinteză vocală sau supliment pe care vrei să îl folosești. Notează ce funcții necesită rețeaua.
9. Reconectează-te și sincronizează acest dispozitiv. Așteaptă să se termine atât sincronizarea colecției, cât și cea a fișierelor media.
10. Sincronizează un al doilea dispozitiv, apoi verifică acolo nota de test, modificarea, starea recapitulărilor și fișierele media înainte de a șterge conținutul de test.

Nu folosi testul pentru a reproiecta tipurile de note pe două dispozitive. Scopul este să verifici cum vei lucra în călătorie: colecția de care ai nevoie este locală, fișierele media importante se deschid, munca offline se păstrează după repornirea aplicației, iar sincronizarea ulterioară o transferă pe celălalt dispozitiv.

## Anki te poate însoți în călătorie dacă pregătești dispozitivul

Aplicațiile Anki instalate sunt o alegere bună pentru călătorii când vrei o colecție locală completă în locul unui număr mic de fișe păstrate în cache. Limitele sunt concrete: dispozitivul trebuie să aibă colecția și fișierele media dinainte, AnkiWeb funcționează doar online, iar funcțiile fișelor care depind de internet necesită în continuare o conexiune.

Dacă alegi între mai multe aplicații pentru călătorie, [comparația aplicațiilor de fișe pentru utilizare offline](/blog/best-offline-flashcards-app/) verifică aceleași aspecte pentru cinci produse: fișele, editarea, progresul, fișierele media și sincronizarea ulterioară. Dacă te gândești să schimbi instrumentele de studiu și din alte motive decât conexiunea, citește [Anki vs. Nibomo](/blog/anki-vs-flashcards-open-source-app/).

Răspunsul practic la întrebarea „Anki funcționează offline?” este da, pe desktop, iPhone, iPad și Android, după ce dispozitivul pe care îl vei folosi are colecția și fișierele media de care ai nevoie. Sincronizează înainte de plecare, fă testul în modul avion și, când te reconectezi, sincronizează mai întâi dispozitivul pe care ai lucrat offline.
