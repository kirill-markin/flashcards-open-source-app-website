---
title: "Ordinea cardurilor noi în Anki, de la selectare la verificarea cozii"
description: "Vezi cum selectează și sortează Anki cardurile noi într-un exemplu cu șase carduri. Verifică limitele subpachetelor, pozițiile din coadă și pachetul ales pentru studiu."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "ordinea cardurilor noi în Anki"
  - "ordinea de selectare a cardurilor noi în Anki"
  - "ordinea de sortare a cardurilor noi în Anki"
  - "poziție crescătoare în Anki"
  - "carduri Anki afișate în altă ordine"
---

În Anki, un card nou cu poziția 10 poate apărea după unul cu poziția 60. Dacă studiezi un pachet părinte cu selecția **După pachet** (*Deck*) și sortarea **În ordinea selectării** (*Order gathered*), Anki poate termina de selectat cardurile dintr-un subpachet înainte să ajungă la cel cu cardul de la poziția 10. Sortarea tabelului din fereastra **Răsfoire** (*Browse*) după data creării nu schimbă coada de studiu.

Ordinea cardurilor noi se stabilește în două etape. La **selectare**, Anki alege cardurile care se încadrează în limitele de azi. La **sortare**, le așază în ordinea în care vor apărea. Începe prin a verifica unde apare diferența față de ce te aștepți să vezi. Anki poate alege alte carduri sau poate afișa cardurile dorite într-o altă ordine.

Instrucțiunile se referă la pachetele obișnuite din Anki pentru desktop. Exemplul cu șase carduri este un calcul original pe hârtie, bazat pe manualul actual și pe versiunea publicată [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). Calculul a fost verificat pe 6 octombrie 2026, fără o probă în aplicație.

![Un bărbat ține al patrulea disc de vinil deasupra unui compartiment gol al raftului, lângă trei discuri. În spatele lui se văd două lăzi cu albume rămase neselectate.](/blog/anki-new-card-order.png)

## Alege ordinea în care vrei să vezi cardurile

Deschide **Opțiuni** (*Options*) pentru pachetul pe care dai clic ca să studiezi, apoi caută secțiunea **Ordine de afișare** (*Display Order*). Când studiezi un pachet părinte, setările lui de afișare se aplică întregii sesiuni, inclusiv cardurilor din subpachete.

| Rezultatul dorit | Ordinea de selectare a cardurilor noi (*New Card Gather Order*) | Ordinea de sortare a cardurilor noi (*New Card Sort Order*) |
| --- | --- | --- |
| Urmezi ordinea crescătoare a pozițiilor cardurilor noi din pachetul ales și din toate subpachetele lui | Poziție crescătoare (*Ascending position*) | În ordinea selectării |
| Parcurgi subpachetele alfabetic și urmezi ordinea pozițiilor în fiecare | După pachet | În ordinea selectării |
| Păstrezi aceleași carduri, dar le afișezi într-o ordine aleatorie | Setarea de selectare dorită | Aleatoriu (*Random*) |

Combinațiile urmează definițiile din manualul Anki, în engleză, pentru [selectare](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) și [sortare](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order). **Poziție crescătoare** se referă la poziția salvată a fiecărui card nou. Ordinea de inserare și repoziționarea manuală pot schimba aceste poziții, așa că ordinea lor poate diferi de cea a datelor de creare.

Înainte să faci modificări, verifică ce profil de opțiuni are pachetul și ce alte pachete îl folosesc. Setările de afișare țin de profil. Dacă vrei să schimbi un singur pachet, [urmează mai întâi pașii pentru a-i atribui un profil separat](/blog/anki-deck-options-presets/) (ghid în engleză). Limitele zilnice pot avea valori specifice prin **Acest pachet** (*This deck*) sau **Doar azi** (*Today only*). Setările de afișare se aplică tuturor pachetelor care folosesc profilul.

## Vezi care patru carduri intră în coadă

Imaginează-ți un pachet părinte obișnuit, numit `OrderLab`, cu două subpachete și doar cele șase carduri de mai jos. Fiecare provine dintr-o notiță separată de tip **De bază** (*Basic*), care generează un singur card. Toate șase au, așadar, același număr de tip, iar fiecare e singurul card al notiței sale.

| Card | Pachet | Poziția salvată a cardului nou |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Presupune că toate cele șase carduri sunt noi și că niciunul nu este ascuns temporar, suspendat sau mutat într-un pachet filtrat. La început nu există alte carduri, repetări din etapa de învățare sau recapitulări. Azi încă n-ai studiat nimic. `OrderLab` nu are niciun pachet deasupra lui în ierarhie, iar limitele de recapitulare aplicabile lasă loc pentru toate cele șase carduri noi.

Alege **OrderLab** pentru studiu. Limita lui efectivă este de **4** carduri noi. Limita pentru `01 First` este de **3**, iar cea pentru `02 Second` este de **2**, fără excepții temporare. Folosește sortarea **În ordinea selectării** în ambele comparații. Pornește de fiecare dată de la aceeași stare inițială a colecției și fă calculul pe hârtie, fără să răspunzi la carduri între comparații.

Cu selecția **După pachet**, calculul arată așa.

1. Anki parcurge subpachetele alfabetic și ajunge la `01 First` înainte de `02 Second`.
2. Selectează **A, B, C** în ordinea pozițiilor. Din `01 First` au intrat trei carduri, așa că mai rămâne un loc din limita pachetului părinte.
3. Selectează **D** din `02 Second` și atinge limita de patru carduri a pachetului părinte.

Te aștepți ca noile carduri să apară prima dată în ordinea **A → B → C → D**. E și F rămân în afara selecției.

Cu **Poziție crescătoare**, Anki ia în calcul cardurile din ambele subpachete în ordinea **D → A → E → B → F → C**. Primele patru se încadrează în toate limitele. Sunt două din `02 Second`, două din `01 First` și patru în total. Selecția se oprește aici.

Ordinea așteptată este **D → A → E → B**. C și F rămân în afara selecției. Anki aplică limitele pachetului și ale pachetului părinte pe măsură ce selectează cardurile. [Codul de selectare din versiunea publicată](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

Din `02 Second` pot intra cel mult două carduri. Cu selecția **După pachet**, intră doar unul, fiindcă `01 First` a ocupat deja trei dintre cele patru locuri disponibile. Cu **Poziție crescătoare**, intră câte două din fiecare datorită pozițiilor din exemplu. În altă colecție, distribuția între subpachete poate fi diferită.

## Lasă să intre toate cele șase carduri și compară ordinea

Pentru a doua comparație pe hârtie, folosește limite care lasă loc pentru toate cardurile din exemplu. Pune **6** la pachetul părinte, **3** la `01 First` și **3** la `02 Second`. Păstrează sortarea **În ordinea selectării**.

| Setarea de selectare | Limite pentru pachetul părinte / 01 First / 02 Second | Ordinea așteptată la prima apariție |
| --- | --- | --- |
| După pachet | 6 / 3 / 3 | A → B → C → D → E → F |
| Poziție crescătoare | 6 / 3 / 3 | D → A → E → B → F → C |

Ambele setări aleg toate cele șase carduri. Acum diferă doar ordinea lor. Dacă ai mări doar limita pachetului părinte la șase și ai păstra limita pentru `02 Second` la două, ar intra doar cinci carduri, iar F ar rămâne pe dinafară. Limitele mărite servesc doar la calculul din exemplu.

## Sortarea lucrează cu cardurile deja selectate

Revino la limitele inițiale de **4 / 3 / 2** și schimbă doar **Ordinea de sortare a cardurilor noi** la **Aleatoriu**.

| Setarea de selectare | Carduri disponibile pentru sortarea aleatorie | Carduri pe care sortarea nu le poate adăuga |
| --- | --- | --- |
| După pachet | A, B, C, D | E, F |
| Poziție crescătoare | D, A, E, B | C, F |

Anki amestecă ordinea de afișare, dar păstrează aceleași carduri în fiecare grup. Tabelul îți arată ce carduri pot apărea, fără să indice o secvență aleatorie anume. [Codul de sortare din versiunea publicată](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

Setarea **După tipul cardului, apoi în ordinea selectării** (*Card type, then order gathered*) lucrează tot cu grupul deja selectat. Cele șase carduri din notițele **De bază** au același număr de tip, așa că în acest exemplu setarea păstrează ordinea selectării.

Pentru un exemplu separat, presupune că Anki a selectat deja patru carduri din notițe cu mai multe șabloane, în ordinea **W (tip 2), X (tip 1), Y (tip 2), Z (tip 1)**. Sortarea după tipul cardului dă **X → Z → W → Y**. Cardurile de tip 1 apar primele, iar în cadrul fiecărui tip se păstrează ordinea selectării. Exemplul pornește de la cardurile deja selectate. Ce carduri din aceeași notiță ar intra în coadă depinde de setările tale de ascundere temporară.

Numărul indică poziția șablonului de card în cadrul tipului de notiță. Ce exersează cardul, de pildă recunoașterea sau producerea unui răspuns, depinde de șablon. Uită-te la întrebările de pe carduri înainte să presupui că sortarea după tip va pune primele toate întrebările în direcția inițială.

## Verifică în Răsfoire pozițiile înainte să le schimbi

Deschide **Răsfoire**, alege modul **Carduri** (*Cards*) și caută în pachet și în subpachetele lui. Pentru exemplul de mai sus, folosește căutarea de mai jos.

```text
deck:OrderLab is:new
```

Din meniul antetului tabelului, afișează coloanele **Întrebare** (*Question*), **Card** (*Card*), **Pachet** (*Deck*), **Scadență** (*Due*) și **Data creării** (*Created*). Pentru un card nou, **Scadență** arată poziția lui în coadă, iar **Data creării** arată când a fost creată notița. **Câmp de sortare** (*Sort Field*) afișează câmpul notiței desemnat pentru sortare. Când sortezi după o coloană, schimbi doar ordinea rândurilor din tabel. Pozițiile salvate și setarea de selectare pentru studiu rămân aceleași. [Documentația Anki despre coloanele din Răsfoire, în engleză](https://docs.ankiweb.net/manual/browsing#columns)

Căutarea `is:new` poate include carduri noi suspendate sau ascunse temporar. Valorile lor din coloana **Scadență** apar între paranteze. Căutarea de mai jos exclude aceste carduri și pe cele aflate momentan în pachete filtrate.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Manualul Anki explică în engleză [căutarea după starea cardului](https://docs.ankiweb.net/manual/searching#card-state) și [căutarea după pachet](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Dacă numele pachetului conține spații, pune-l între ghilimele, ca în `deck:"My Deck"`. În coada de azi pot intra mai puține carduri decât vezi în rezultate, din cauza limitelor și a ascunderii temporare automate a altor carduri din aceeași notiță. [Ghidul despre ascunderea temporară și suspendare](/blog/anki-bury-vs-suspend/) explică în engleză de ce aceste carduri pot fi indisponibile.

Dacă pozițiile reflectă deja ordinea dorită, lasă-le așa. Dacă trebuie să le schimbi, notează pozițiile vechi, selectează doar câteva dintre cardurile noi pe care vrei să le muți și folosește **Carduri → Repoziționare** (*Cards → Reposition*). Verifică mai întâi opțiunile din fereastră. **Deplasează pozițiile cardurilor existente** (*Shift position of existing cards*) poate schimba și pozițiile mai mari ale unor carduri din afara selecției. Dacă lași opțiunea dezactivată, unele poziții noi pot coincide cu cele existente. Când două carduri au aceeași poziție, valoarea ei nu îți spune care va apărea primul. [Documentația Anki despre repoziționare, în engleză](https://docs.ankiweb.net/manual/browsing#cards)

Poți schimba setările de selectare sau de sortare fără să ștergi istoricul de învățare ori de recapitulare. Pentru această verificare, urmărește pozițiile cardurilor noi și ordinea de afișare.

## Verifică pachetul ales și câte locuri mai ai azi

În exemplul inițial, dacă alegi direct `OrderLab::02 Second`, Anki ia în calcul doar cardurile D, E și F. Cu limita de două carduri, selecția după **Poziție crescătoare** și sortarea **În ordinea selectării**, te aștepți la **D → E**. Pachetul părinte mai are toate cele patru locuri disponibile, așa că limita lui lasă loc pentru ambele carduri chiar dacă se aplică și limitele pachetelor de deasupra. Dacă alegi pachetul părinte cu selecția **După pachet** și limitele **4 / 3 / 2**, obții **A → B → C → D**.

Dacă pornești sesiunea din `OrderLab`, se aplică ordinea de afișare din `OrderLab`, chiar dacă o modifici pe cea din `02 Second`. Pachetul ales stabilește ordinea de afișare și limita totală, iar fiecare subpachet rămâne supus limitelor care i se aplică. Opțiunea **Aplică limitele de sus** (*Limits start from top*) stabilește dacă se iau în calcul și limitele pachetelor de deasupra atunci când studiezi direct un subpachet. Manualul Anki descrie în engleză [regulile pentru subpachete](https://docs.ankiweb.net/manual/deck-options#subdecks) și [opțiunea pentru limitele pachetelor de deasupra](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Verifică și limitele de recapitulare. Implicit, limita de recapitulare restrânge și numărul de carduri noi. Opțiunea **Cardurile noi ignoră limita de recapitulare** (*New cards ignore review limit*) schimbă acest comportament. Ambele opțiuni, inclusiv **Aplică limitele de sus**, sunt valabile pentru întreaga colecție. Notează cum sunt setate înainte să estimezi câte carduri noi mai pot intra azi. [Codul interfeței pentru limitele zilnice din versiunea publicată](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

Folosește **Previzualizare** (*Preview*) în fereastra Răsfoire ca să vezi întrebările fără să răspunzi. La următoarea sesiune obișnuită de studiu, notează informațiile din tabel.

| Ce notezi | Ce lămurești |
| --- | --- |
| Pachetul ales pentru studiu, profilul lui de opțiuni și setările de selectare și sortare | Ce ordine de afișare se aplică în sesiune? |
| Cardurile pe care te aștepți să le vezi și pozițiile lor salvate | Diferența ține de cardurile selectate sau de ordinea lor? |
| Limitele pentru cardurile noi și pentru recapitulări, valorile specifice pachetului sau zilei de azi și ce ai studiat deja azi | Câte locuri mai sunt disponibile? |
| Limitele pachetelor de deasupra și cele două opțiuni valabile pentru întreaga colecție | Ce limite suplimentare se aplică? |
| Cardurile ascunse temporar, suspendate, aflate în pachete filtrate sau care provin din aceeași notiță | Care dintre cardurile luate în calcul ar putea fi indisponibile? |
| Ordinea în care apar prima dată cardurile noi, separat de repetările din etapa de învățare | Apar cardurile noi în ordinea așteptată? |

După ce răspunzi la un card nou, repetările din etapa de învățare se pot intercala în sesiune. **Ordinea cardurilor noi față de recapitulări** (*New/Review Order*) stabilește dacă noile carduri apar înaintea recapitulărilor, după ele sau printre ele. Selectarea și sortarea cardurilor noi urmează în continuare setările lor proprii. Anki combină aceste categorii după ce sortează cardurile noi. [Codul de construire a cozii din versiunea publicată](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Poți încheia verificarea când vezi în sesiune cardurile așteptate, în ordinea în care ar trebui să apară prima dată. Dacă mai există diferențe, păstrează pozițiile, setările, pachetul ales, versiunea Anki și ordinea observată. Notează și extensiile relevante ca să poți restrânge căutarea cauzei. Dacă vrei să mai exersezi o anumită temă, urmează [ghidul separat pentru exersarea cu un pachet filtrat](/blog/anki-filtered-decks-without-rescheduling/) (în engleză).
