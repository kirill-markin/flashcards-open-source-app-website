---
title: "Cele mai bune setări FSRS pentru Anki în 2026: retenție, pași și volumul recapitulărilor"
description: "Alege setări FSRS prudente pentru retenția dorită, pașii de învățare, optimizare, reprogramare și volumul de lucru în Anki 26.08 cu FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "setări FSRS"
  - "cele mai bune setări FSRS"
  - "setări Anki FSRS"
  - "retenție dorită FSRS"
  - "pași de învățare FSRS"
  - "simulator FSRS"
  - "optimizarea parametrilor FSRS"
  - "FSRS-6"
---

Creșterea retenției dorite în Anki de la 90% la 95% pare o schimbare mică. Nu înseamnă însă doar 5% mai mult de lucru. FSRS trebuie să scurteze intervalele pe măsură ce ținta crește, iar o colecție folosită de mult timp poate ajunge să aibă mult mai multe fișe de recapitulat. Dacă activezi și **Reschedule cards on change**, o parte din acest volum de lucru poate apărea imediat.

Cele mai bune setări FSRS nu sunt, așadar, un șir de parametri de copiat. Sunt o succesiune de decizii: stabilești cât poți lucra constant, alegi o țintă de reamintire care se încadrează în timpul disponibil, adaptezi modelul la propriul istoric și lași termenele existente neschimbate, dacă nu vrei în mod deliberat să le recalculezi.

Denumirile și comportamentul descrise mai jos corespund [versiunii Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) și opțiunilor sale FSRS-6. Dacă vrei să înțelegi mai întâi modelul, înainte de setări, citește [Ce este FSRS?](/blog/what-is-fsrs/). Dacă încă alegi un algoritm de programare, începe cu [FSRS vs. SM-2](/blog/fsrs-vs-sm-2/).

> **Pentru transparență:** Sunt Kirill Markin și dezvolt [Nibomo](/ro/features/). Anki oferă ajustarea personalizată a parametrilor și simulatoare experimentale ale volumului de lucru, pe care Nibomo nu le oferă în prezent. Comparația de la final precizează aceste diferențe.

**Informații verificate:** 8 septembrie 2026.

![Un operator de ecluză testează debitul apei pe o machetă înainte de a modifica ecluza reală](/blog/fsrs-settings-v2.png)

## Pe scurt: de aici poți începe

Pentru majoritatea utilizatorilor Anki, acestea sunt puncte de plecare prudente, nu setări universale:

| Setare sau obicei | Alegere prudentă pentru început | Motivul |
| --- | --- | --- |
| Retenția dorită | `0.90` | Este valoarea implicită în Anki și echilibrează reamintirea cu volumul recapitulărilor. |
| Parametrii FSRS | Folosește **Optimize Current Preset**; nu copia ponderi din alte surse și nu le edita manual | Optimizatorul adaptează modelul la istoricul tău de recapitulări. |
| Frecvența optimizării | Cel mult o dată pe lună; de obicei, o dată la câteva luni este suficient | Anki nu recomandă optimizarea frecventă. |
| Pașii de învățare | Păstrează un număr mic de pași, pe care îi poți încheia în aceeași zi | Secvențele lungi de pași întârzie programarea bazată pe model. |
| Pașii de reînvățare | Folosește cât mai puțini pași, fiecare mai scurt de o zi | Aceeași limită se aplică după o recapitulare nereușită. |
| Reschedule cards on change | Dezactivată | Noile setări pot intra în vigoare prin recapitulările viitoare, fără a recalcula lista de azi. |
| Intervalul maxim | Păstrează valoarea implicită de 100 de ani | Un plafon mai mic readuce mai des fișele bine învățate. |
| Fișe noi pe zi | Stabilește numărul pornind de la un volum de lucru sustenabil | Fiecare fișă nouă cere învățare acum și recapitulări mai târziu. |
| Again și Hard | Again înseamnă reamintire nereușită; Hard înseamnă răspuns corect, dar dificil | Evaluările incorecte furnizează modelului un istoric incorect. |

Dacă volumul recapitulărilor este gestionabil și configurația ta este deja apropiată de aceasta, poate că nu ai nimic de corectat. Ajustarea setărilor nu înlocuiește învățarea.

## Separă cele trei decizii

Oamenii confundă adesea retenția dorită, parametrii FSRS și volumul zilnic de lucru. Acestea controlează lucruri diferite:

- **Retenția dorită** este ținta ta pentru reamintire. O alegi în funcție de obiective și de timpul disponibil pentru studiu.
- **Parametrii FSRS** adaptează modelul memoriei la istoricul recapitulărilor. Îi calculează optimizatorul Anki.
- **Limitele pentru fișe noi și recapitulări** controlează cât material intră în sistem și câte recapitulări ajunse la termen poate afișa Anki în fiecare zi.

Această separare face mult mai ușoară identificarea problemelor. O listă lungă de recapitulări nu înseamnă automat că parametrii sunt greșiți. Un pachet important nu are neapărat nevoie de un preset separat pentru parametri. Iar reducerea retenției dorite nu poate corecta un ritm de introducere a fișelor noi care nu a fost niciodată sustenabil.

## Alege retenția dorită în funcție de volumul de lucru, nu de ambiție

Retenția dorită îi spune algoritmului FSRS ce probabilitate de reamintire urmărești pentru o fișă la termenul recapitulării. La `0.90`, FSRS programează recapitulările astfel încât probabilitatea estimată de a-ți aminti răspunsul la momentul recapitulării să fie de aproximativ 90%. Este o țintă a modelului, nu o garanție că fiecare sesiune sau examen va avea exact 90% răspunsuri corecte.

Fiecare alegere are un cost:

- Dacă mărești retenția dorită, intervalele se scurtează și recapitulările se înmulțesc.
- Dacă o reduci, intervalele se lungesc și eșecurile devin mai frecvente.
- Dacă o reduci prea mult, reînvățarea suplimentară după eșecuri poate consuma o parte din timpul pe care sperai să îl economisești.

Valoarea implicită în Anki este 90%. [Recomandările privind retenția dorită](https://docs.ankiweb.net/deck-options.html#desired-retention) avertizează că volumul de lucru crește rapid când ținta se apropie de 100% și recomandă să rămâi sub 97%. [Explicația oficială despre retenția optimă](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) acoperă și celălalt capăt al curbei: o retenție foarte scăzută poate fi, la rândul ei, ineficientă, deoarece fișele uitate cer mai multă muncă.

Începe cu `0.90` și schimbă valoarea numai după ce verifici volumul de lucru. O țintă mai ridicată poate avea sens pentru materialul pe care te-ar costa cu adevărat să îl uiți. O țintă mai scăzută poate avea sens când recapitulările iau locul unor forme de studiu mai valoroase. Niciuna dintre schimbări nu corectează fișele vagi, evaluările care nu reflectă răspunsul real sau un număr prea mare de fișe noi.

### Retenția unui pachet și parametrii unui preset au domenii de aplicare diferite

În Anki 26.08, setarea retenției dorite (**Desired retention**) se poate aplica unui preset comun (**Shared Preset**) sau doar pachetului curent (**This deck**). Un preset este un set de opțiuni pe care îl pot folosi mai multe pachete. Poți astfel să folosești același preset de parametri pentru pachetele înrudite și să atribui unui anumit pachet propria țintă de retenție.

Stabilește o țintă separată pentru un pachet atunci când consecințele uitării diferă. Un pachet pentru un examen de autorizare profesională poate justifica o țintă mai ridicată decât un pachet de referință cu prioritate mică, chiar dacă ambele folosesc același model ajustat.

Alegerea **This deck** nu face parametrii FSRS specifici pachetului. În mod implicit, Anki ajustează parametrii folosind istoricul recapitulărilor din toate pachetele asociate presetului curent. Dacă grupurile de pachete diferă foarte mult ca dificultate percepută, metoda acceptată pentru ajustarea lor separată este folosirea unor preseturi separate.

## Folosește Help Me Decide și Simulator pentru întrebări diferite

Anki 26.08 oferă două instrumente experimentale distincte:

- **Help Me Decide (Experimental)** afișează o curbă personalizată a relației dintre retenție și volumul de lucru. Folosește-l ca să vezi ce țintă de retenție se potrivește cu numărul de recapitulări pe care le poți face constant sau cu timpul disponibil.
- **FSRS Simulator (Experimental)** estimează cum s-ar putea comporta o configurație în timp. Folosește-l pentru a compara efectele modificării retenției, ritmului de introducere a fișelor noi, limitelor recapitulărilor și intervalului maxim.

[Documentația FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) enumeră principalele date de intrare:

- numărul de zile simulate
- numărul de fișe noi suplimentare de simulat
- fișe noi pe zi
- numărul maxim de recapitulări pe zi
- intervalul maxim
- retenția dorită și parametrii FSRS ai presetului

Simularea folosește și starea memoriei înregistrată pentru fiecare fișă din pachetele asociate presetului. De aceea este mai utilă pentru o colecție cu istoric îndelungat decât simpla înmulțire a numărului de fișe scadente azi cu un procent generic.

Simulează trei scenarii înainte să aplici noile setări:

1. Retenția și ritmul actual de introducere a fișelor noi.
2. Ținta de retenție pe care o ai în vedere.
3. Aceeași țintă, dar cu mai puține fișe noi pe zi.

A treia simulare testează o alternativă frecvent utilă: păstrezi ținta de reamintire și reduci fluxul de material nou. Dacă rezultatul estimat este gestionabil, nu trebuie să accepți mai multă uitare doar ca să reduci lista de recapitulări. Găsești mai multe detalii în ghidul [Câte fișe noi pe zi?](/blog/how-many-new-flashcards-per-day/).

Ambele instrumente oferă estimări. Zilele ratate, fișele editate, materialul nou și schimbările în modul de evaluare pot face ca volumul real de lucru să difere de grafic. Folosește comparația pentru a alege o direcție, fără a te baza pe un număr exact de recapitulări peste câteva luni.

Ghidurile mai vechi pot menționa **Compute Minimum Recommended Retention**, sau CMRR. Anki a eliminat această funcție în versiunea 25.07. Nu mai face parte din modul actual de alegere a retenției dorite.

## Optimizează parametrii FSRS pe baza propriului istoric

Retenția dorită exprimă obiectivul tău. Parametrii FSRS descriu modul în care modelul se adaptează la recapitulările tale.

În Anki 26.08, folosește **Optimize Current Preset** pentru a ajusta parametrii presetului activ. În mod implicit, Anki include istoricul recapitulărilor din toate pachetele care folosesc acel preset; poți modifica filtrul de căutare dacă vrei să restrângi datele folosite pentru ajustare. **Optimize All Presets** actualizează toate preseturile într-o singură operațiune.

Nu introduce ponderile manual și nu le copia de pe Reddit, dintr-un videoclip sau din pachetul altcuiva. Fișele acelei persoane, momentele recapitulărilor și obiceiurile de evaluare nu reprezintă istoricul tău. Un șir de [ponderi FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) nu este o strategie de studiu pe care o poți transfera pur și simplu.

Optimizează din nou numai după ce s-a acumulat un volum relevant de recapitulări noi. Manualul Anki spune că o dată pe lună este suficient, iar indicațiile din aplicația 26.08 spun că o dată la câteva luni este suficient. Concluzia practică este aceeași: nu ai motive să optimizezi săptămânal, cu atât mai puțin după fiecare sesiune.

### Verifică potrivirea modelului pentru presetul curent

Activează **Check health when optimizing (slow)** când vrei ca Anki să evalueze cât de bine se poate adapta FSRS la istoricul presetului curent. Această verificare rulează cu **Optimize Current Preset**, nu cu **Optimize All Presets**.

Dacă rezultatul este slab, examinează datele înainte să modifici ponderile. [Recomandările Anki privind parametrii FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) enumeră cauze frecvente: mai puțin de câteva sute de recapitulări, folosirea butonului Hard după un eșec și omiterea butonului Again când nu îți amintești răspunsul. Când ai puțin istoric util, păstrează valorile implicite și optimizează mai târziu, în loc să împrumuți parametrii altui utilizator.

## Again înseamnă că nu ți-ai amintit; Hard este un răspuns corect

Acest obicei contează la fel de mult ca orice setare.

Folosește **Again** când nu ai putut da răspunsul cerut sau ai răspuns greșit. Folosește **Hard** numai când ți-ai amintit corect, dar cu efort serios sau ezitare. Good și Easy indică și ele răspunsuri corecte.

Dacă apeși Hard ca să eviți intervalul scurt al butonului Again, înregistrezi un succes după un eșec. FSRS învață astfel dintr-un eveniment înregistrat greșit. Alege butonul după cât de bine ți-ai amintit răspunsul, nu după intervalul pe care ai vrea să îl obții.

Fișele ambigue îngreunează evaluarea corectă. Dacă o întrebare cere cinci informații și îți amintești patru, problema de programare a început în editor. Împarte fișa sau rescrie-o. Pentru fișele la care continui să greșești în ciuda recapitulărilor repetate, citește [Cum să repari fișele problematice de tip „leech”](/blog/how-to-fix-leech-flashcards/).

## Păstrează pașii de învățare FSRS scurți sau lasă câmpurile goale în mod deliberat

Pașii de învățare și reînvățare stabilesc la ce intervale scurte revezi o fișă, înainte ca aceasta să intre în programul obișnuit de recapitulare pe termen lung. Nu sunt o altă țintă de retenție.

Recomandările Anki pentru FSRS stabilesc două limite:

- fiecare pas trebuie să fie mai scurt de o zi și să poată fi încheiat în aceeași zi
- numărul repetițiilor din aceeași zi trebuie să rămână mic

Secvențele lungi precum `1m 10m 1d 3d` transferă în FSRS un obicei vechi din SM-2. Pașii de o zi sau mai mult întârzie programarea bazată pe model și pot produce etichete derutante pe butoane, inclusiv un interval mai lung la Hard decât la Good.

O secvență compactă precum `1m 10m`, cu un pas de reînvățare de `10m`, este un punct de plecare prudent, dacă se potrivește sesiunilor tale. Mai multe repetiții în aceeași zi nu sunt automat mai bune.

În Anki 26.08 poți lăsa gol și câmpul pentru pașii de învățare, și pe cel pentru pașii de reînvățare. Dacă FSRS este activat, algoritmul preia programarea pe termen scurt corespunzătoare câmpului lăsat gol. Funcția este experimentală, iar intervalul pentru Again poate fi de o zi sau mai mult. Păstrează pași manuali scurți dacă ai nevoie de o revenire previzibilă în aceeași zi; golește un câmp numai dacă accepți în mod deliberat ca FSRS să aleagă momentul revenirii.

## Lasă opțiunea Reschedule cards on change dezactivată pentru o tranziție treptată

Cu opțiunea **Reschedule cards on change** dezactivată, așa cum este implicit, activarea FSRS sau modificarea retenției dorite ori a parametrilor nu rescrie imediat termenele existente. Noua configurație se aplică pe măsură ce recapitulezi fișele în viitor, astfel încât lista de recapitulări se schimbă treptat.

Salvarea uneia dintre aceste modificări FSRS cu opțiunea activată recalculează termenele imediat. În funcție de noua țintă și de starea fișelor, multe fișe pot deveni scadente deodată. Anki adaugă și înregistrări în istoricul recapitulărilor pentru fișele reprogramate, mărind dimensiunea colecției.

Această opțiune este utilă numai când chiar vrei o recalculare retroactivă. Pentru o colecție cu istoric îndelungat:

1. Creează o copie de siguranță nouă și asigură-te că știi cum să anulezi modificarea sau să restaurezi copia.
2. Rulează Simulator cu setările propuse.
3. Alege o singură modificare de configurație; nu combina mai multe experimente.
4. Când o salvezi, activează reprogramarea numai dacă vrei rescrierea imediată a termenelor și poți gestiona rezultatul.

Anki recomandă explicit o copie de siguranță când treci de la SM-2 cu reprogramarea activată. [Ghidul despre copiile de siguranță ale fișelor](/blog/how-to-back-up-flashcards/) explică de ce posibilitatea de restaurare contează la fel de mult ca fișierul copiei în sine.

## Păstrează un interval maxim generos

Intervalul maxim implicit în Anki este de 100 de ani. Pare ciudat, până îți amintești că este un plafon, nu promisiunea că fiecare fișă bine învățată va dispărea timp de un secol.

Reducerea plafonului readuce mai repede fișele pe care le știi bine și mărește volumul de lucru. La atingerea plafonului, Hard, Good și Easy pot afișa toate același interval, deoarece niciunul nu poate depăși limita maximă.

Un interval maxim mai scurt poate fi rezonabil când un examen stabilește un termen concret, materialul se schimbă des sau o regulă profesională cere reveniri repetate indiferent de estimările modelului memoriei. Alege plafonul în funcție de calendar și de rezultatele din Simulator, în loc să îl reduci doar din îngrijorare. [Cum să înveți pentru un examen cu FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) explică mai pe larg această situație.

Pentru învățarea obișnuită pe termen lung, lasă plafonul generos. Retenția dorită controlează deja momentul în care probabilitatea estimată de reamintire ar trebui să declanșeze o recapitulare.

## Fișele noi fac parte din decizia privind volumul de lucru

FSRS poate distribui recapitulările în timp; nu poate face sustenabil un flux nelimitat de fișe noi. Fiecare fișă nouă înseamnă muncă de învățare acum și recapitulări mai târziu.

Când recapitulările devin prea solicitante, verifică următoarele înainte să reduci retenția dorită:

- numărul de fișe noi pe zi
- importurile mari sau loturile de fișe generate
- o limită maximă de recapitulări care ascunde constant fișe ajunse la termen
- fișele problematice și cele vagi care consumă încercări repetate
- zilele în care ai ratat recapitulările

Folosește **Additional new cards to simulate** când știi că un pachet va crește. O estimare bazată doar pe colecția de azi nu va reprezenta volumul de lucru de după un import mare.

Dacă rezultatul este prea mare, redu numărul de fișe noi și simulează din nou. Astfel păstrezi ținta de reamintire fără să ceri algoritmului să accepte mai multă uitare.

## Anki și Nibomo oferă opțiuni FSRS diferite

Ambele produse folosesc FSRS-6, dar setările FSRS din Anki nu au fiecare câte un echivalent direct în Nibomo.

| Funcționalitate | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Retenția dorită | **Shared Preset** sau **This deck** | Configurabilă pentru fiecare spațiu de lucru; implicit `0.90` |
| Parametrii FSRS | **Optimize Current Preset** sau **Optimize All Presets**, pe baza istoricului recapitulărilor | Ponderile implicite oficiale FSRS-6 sunt fixe și nu pot fi configurate de utilizator în v1 |
| Pașii de învățare | Configurabili; programarea prin FSRS atunci când câmpul este gol este experimentală | Configurabili pentru fiecare spațiu de lucru; implicit `1m 10m` |
| Pașii de reînvățare | Configurabili; programarea prin FSRS atunci când câmpul este gol este experimentală | Configurabili pentru fiecare spațiu de lucru; implicit `10m` |
| Intervalul maxim | Implicit 100 de ani | Implicit 36.500 de zile, tot 100 de ani |
| Modificarea setărilor | Se aplică implicit recapitulărilor viitoare; reprogramare retroactivă opțională | Doar recapitulările viitoare; termenele existente nu se recalculează |
| Instrumente pentru volumul de lucru | **Help Me Decide (Experimental)** și **FSRS Simulator (Experimental)** | Niciun simulator echivalent al volumului de lucru în v1 |

Nibomo folosește evaluările standard Again, Hard, Good și Easy și păstrează starea memoriei FSRS pentru fiecare fișă. Algoritmii de programare din backend, iOS și Android sunt implementări independente, menținute astfel încât să se comporte la fel; fluxul de recapitulare web reutilizează algoritmul din backend, fără a adăuga o a patra copie.

Aceste limite și valori implicite sunt documentate în [specificația publică a programării FSRS din Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Compromisul este clar: Nibomo oferă o configurație FSRS-6 practică, la nivel de spațiu de lucru, în timp ce Anki oferă mai mult control asupra pachetelor cărora li se aplică setările, ajustare personalizată și simulare. Dacă aceste opțiuni sunt esențiale, Anki este alegerea mai potrivită.

## O procedură mai prudentă pentru o colecție cu istoric îndelungat

Dacă ai deja luni sau ani de recapitulări în istoric, urmează această ordine:

1. **Folosește corect evaluările.** Again înseamnă eșec; Hard înseamnă răspuns corect, dar dificil.
2. **Optimizează presetul curent.** Adaptează modelul la propriul istoric, în loc să editezi sau să copiezi ponderi.
3. **Verifică potrivirea modelului dacă este necesar.** Tratează istoricul insuficient sau inconsecvent ca pe o problemă a datelor.
4. **Folosește Help Me Decide.** Alege o plajă de valori pentru retenție în funcție de numărul de recapitulări pe care le poți face constant sau de timpul disponibil.
5. **Rulează Simulator.** Compară configurația actuală, ținta propusă și un ritm mai mic de introducere a fișelor noi.
6. **Aplică o singură schimbare.** Ajustează mai întâi retenția sau ritmul introducerii fișelor, apoi observă lista reală de recapitulări.
7. **Păstrează pașii scurți.** Elimină secvențele de învățare și reînvățare cu pași de o zi sau mai mult; folosește câmpurile goale numai ca experiment.
8. **Lasă intervalul maxim generos.** Scurtează-l numai pentru un termen sau o cerință bine definite.
9. **Lasă reprogramarea dezactivată.** Dacă ai nevoie de o recalculare imediată, fă mai întâi o copie de siguranță și pregătește-te pentru volumul de recapitulări rezultat.

Această succesiune păstrează cât mai mult timp posibilitatea de a reveni asupra schimbărilor unui program de recapitulare deja bine stabilit. Totodată, împiedică amestecarea a trei probleme diferite — ajustarea modelului, ținta de reamintire și fluxul de material nou — într-o singură problemă confuză de configurare.

## Întrebări frecvente despre cele mai bune setări FSRS

### Este 90% cea mai bună retenție dorită pentru FSRS?

Este cel mai prudent punct de plecare general, fiind valoarea implicită în Anki și evitând partea cea mai abruptă a curbei volumului de lucru la retenție ridicată. Valoarea cea mai potrivită pentru un pachet depinde de consecințele uitării și de volumul de lucru pe care îl poți susține. Consultă **Help Me Decide (Experimental)** înainte de a o schimba.

### Ar trebui să setez retenția dorită la 95%?

Numai după ce verifici câte recapitulări sau minute în plus presupune. Un pachet bine construit, cu miză mare, poate justifica 95%; o colecție mare, folosită în timpul liber, poate deveni inutil de solicitantă. Nu activa simultan reprogramarea retroactivă decât dacă vrei în mod deliberat recalcularea imediată a termenelor.

### Cât de des ar trebui să optimizez parametrii FSRS?

O dată pe lună este deja suficient de des, iar indicațiile din aplicația Anki 26.08 spun că o dată la câteva luni este suficient. Optimizează după acumularea unui istoric nou relevant, nu după un program zilnic sau săptămânal.

### Ar trebui să las gol câmpul pentru pașii de învățare FSRS?

În Anki 26.08, dacă lași gol câmpul pentru pașii de învățare sau reînvățare, FSRS preia programarea corespunzătoare pe termen scurt. Funcția este experimentală, iar Again poate fi programat peste o zi sau mai mult. Câțiva pași scurți, încheiați în aceeași zi, rămân alegerea prudentă.

### Modificarea setărilor FSRS reprogramează fișele existente în Anki?

Nu în mod implicit. Cu opțiunea **Reschedule cards on change** dezactivată, noile setări afectează recapitulările viitoare fără a recalcula imediat lista. Activarea opțiunii schimbă termenele și poate aduce multe fișe la recapitulare imediat, deci creează mai întâi o copie de siguranță.

### CMRR mai face parte din Anki?

Nu. Anki a eliminat Compute Minimum Recommended Retention în versiunea 25.07. În Anki 26.08, folosește **Help Me Decide (Experimental)** și **FSRS Simulator (Experimental)** pentru a compara retenția cu volumul estimat de lucru.

### Nibomo folosește aceleași setări ca Anki?

Folosește FSRS-6 și oferă, pentru fiecare spațiu de lucru, setări pentru retenția dorită, pașii de învățare, pașii de reînvățare, intervalul maxim și variația aleatorie a intervalelor (fuzz). Nu reproduce întregul model de setări Anki: ponderile sunt fixe în v1, modificările se aplică doar recapitulărilor viitoare și nu există optimizare personalizată a parametrilor sau simulator al volumului de lucru.

## Stabilește volumul de lucru înaintea procentului

Setările FSRS bune aliniază recapitulările cu un plan de studiu real. Începe de la 90%, estimează efortul, controlează ritmul introducerii fișelor noi și crește retenția numai când merită să recapitulezi mai mult pentru a-ți aminti mai mult. Păstrează pașii scurți, intervalul maxim generos și evaluările fidele răspunsurilor tale.

Apoi închide ecranul de setări. Algoritmul are mai multă nevoie de recapitulări constante decât de încă o seară de ajustări.
