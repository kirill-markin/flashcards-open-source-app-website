---
title: "Cum imporți fișe de învățare în Quizlet din Excel, Google Sheets sau text"
description: "Importă în Quizlet o listă pe două coloane, alege tabulatoare și rânduri noi și corectează definițiile fragmentate, fișele în plus și problemele CSV înainte de publicare."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "cum import fișe de învățare în Quizlet"
  - "format import Quizlet"
  - "import Quizlet din Excel"
  - "din Google Sheets în Quizlet"
  - "import Quizlet cu tabulatoare"
---

„Red, green, blue” pare un răspuns obișnuit de pe o fișă de învățare. Dar dacă folosești virgule pentru a separa termenul de definiție, aceleași virgule fac rândul ambiguu. Câteva semne de punctuație pot face ca o listă de cuvinte gata de import să necesite corecturi.

Pentru a importa fișe de învățare în Quizlet din Excel, Google Sheets sau text, începe cu două coloane: una pentru termeni și una pentru definiții. Copiază datele, lipește-le în formularul de import de pe site și alege tabulatoare între câmpuri și rânduri noi între fișe. Încearcă mai întâi cu patru rânduri, ca să poți verifica fiecare pereche înainte de a transfera întreaga listă.

![Un olar așază ceștile de ceramică alături de farfurioarele potrivite, pe rânduri separate, înainte de a le muta pe un raft](/blog/how-to-import-flashcards-into-quizlet.png)

## Unde găsești formularul de import Quizlet

Quizlet descrie importul pe site-ul său: poți folosi virgule, tabulatoare sau liniuțe între câmpuri și punct și virgulă sau rânduri noi între fișe. [Instrucțiunile oficiale de import](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) prezintă următorii pași:

1. Autentifică-te și alege **Create → Flashcard set**.
2. Introdu un titlu, selectează **Import** și lipește textul.
3. Alege separatorii care corespund datelor tale. Pentru exemplele de aici, folosește **Tab** și **New line**.
4. Selectează **Import**, apoi alege limbile termenilor și definițiilor.
5. Verifică fișele înainte de a selecta **Create** pentru a salva și publica setul.

Instrucțiunile au fost verificate pe 15 septembrie 2026. Exemplele de mai jos explică pregătirea și verificarea textului; nu descriu un test efectuat într-un cont autentificat.

## Începe cu un interval mic de celule

În Excel sau Google Sheets, pune câte o pereche termen–definiție pe fiecare rând. Iată un exemplu de probă cu patru fișe:

| Termen | Definiție |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Copiază doar cele patru rânduri de date din cele două coloane. Dacă antetele sunt pe rândul 1, selectează **A2:B5**. Nu include antetele în intervalul copiat.

Ar trebui să obții patru fișe, cu termeni în spaniolă și definiții în engleză. Ultima fișă trebuie să păstreze întregul text „colores primarios de la luz” pe o parte și „red, green, blue” pe cealaltă. Virgulele fac parte din răspuns.

După ce ai înțeles exemplul, pregătește propriul tabel. Lucrează într-o copie, ca să păstrezi originalul pentru comparație. Elimină rândurile goale și exclude notițele sau coloanele suplimentare din selecție. Completează termenii sau definițiile care lipsesc înainte de copiere.

Când sortezi, păstrează cele două coloane împreună. Dacă sortezi doar termenii, aceștia nu vor mai corespunde răspunsurilor lor, iar importul poate conține perechi greșite chiar dacă numărul fișelor este corect.

## Formatul text simplu folosește tabulatoare reale

Aceleași patru rânduri arată astfel ca text separat prin tabulatoare. Între fiecare termen și definiția lui se află un singur tabulator real:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tabulatorul este un caracter distinct. Mai multe spații pot arăta asemănător, dar nu marchează o separare prin tabulator. Nici tastarea caracterelor `\t` nu inserează un tabulator. Dacă editorul de text îngreunează lucrurile, pune perechile în două coloane într-o foaie de calcul și copiază celulele.

Fiecare fișă trebuie să ocupe un singur rând în textul propriu-zis. O definiție lungă poate continua vizual pe un al doilea rând dacă fereastra este îngustă; asta nu adaugă un sfârșit de rând în conținut. Un sfârșit de rând introdus în interiorul unei celule din foaia de calcul modifică însă conținutul. Elimină aceste sfârșituri de rând din celule înainte de a folosi rândurile noi ca separatori între fișe.

Elimină și orice tabulator din interiorul unui termen sau al unei definiții. În acest format, tabulatoarele trebuie să apară doar între cele două câmpuri.

## Dacă lista ta este un fișier CSV

Deschide fișierul CSV într-o aplicație de calcul tabelar înainte de a pregăti importul. O înregistrare CSV ca aceasta conține două câmpuri dacă este interpretată conform regulilor de încadrare în ghilimele:

```text
"colores primarios de la luz","red, green, blue"
```

Răspunsul dintre ghilimele conține virgule. Un câmp de text care separă datele după virgule nu este neapărat un cititor CSV, așa că nu te baza pe ghilimele pentru a păstra răspunsul întreg acolo.

În Excel sau Google Sheets, verifică dacă înregistrarea ocupă exact două celule. Apoi copiază celulele pentru a obține date separate prin tabulatoare. Dacă răspunsul s-a împărțit în coloane suplimentare, corectează mai întâi setările de import CSV ale aplicației. Dacă copiezi rândul interpretat greșit, transferi și problema mai departe.

Verifică și valorile pe care o aplicație de calcul tabelar le-ar putea reinterpreta. Dacă `0012` este un cod pe care trebuie să-l înveți, transformarea lui în `12` schimbă fișa. Compară identificatorii, datele calendaristice, ghilimelele și cuvintele cu diacritice cu fișierul original înainte de a copia intervalul.

## Când fișele nu corespund rândurilor tale

Folosește exemplul de probă pentru a găsi prima nepotrivire. Schimbă câte un singur lucru, apoi compară rezultatul cu aceleași patru rânduri din sursă.

| Simptom | Problemă probabilă de separare | Ce să schimbi |
| --- | --- | --- |
| Un răspuns este fragmentat la virgule | Ai ales virgula ca separator între câmpuri | Pregătește două coloane și selectează Tab |
| „well-being” este fragmentat în interiorul termenului | Ai ales liniuța ca separator între câmpuri | Păstrează cratima și separă câmpurile printr-un tabulator |
| Un răspuns devine mai multe fișe | Sursa conține sfârșituri de rând în interiorul câmpurilor | Pune întregul răspuns pe un singur rând în text |
| „Term” și „Definition” apar ca o fișă | Ai copiat rândul cu antete | Selectează doar rândurile de date |
| Ambele câmpuri rămân pe aceeași parte | Ai folosit spații în locul unui tabulator | Copiază un interval cu două coloane dintr-o foaie de calcul |

De exemplu, un răspuns care conține „first stage” și „second stage” pe rânduri separate ar putea deveni `first stage; second stage`. Astfel, ambele părți rămân pe un singur rând. Păstrează **New line** ca separator între fișe atunci când folosești punct și virgulă în interiorul unui răspuns.

Dacă cele două etape merită întrebări separate, scrie în schimb două perechi complete. [Ghidul pentru fișe de învățare mai bune (în engleză)](/blog/how-to-make-better-flashcards/) te poate ajuta să iei această decizie.

## Verifică rezultatul înainte de publicare

Verifică toate cele patru fișe de probă. Pentru lista completă, compară fișele importate cu sursa corectată:

- Numărul total corespunde numărului de rânduri de date complete?
- Prima și ultima pereche corespund sursei, inclusiv răspunsurile integrale?
- Punctuația, diacriticele și codurile au rămas neschimbate?
- Există părți goale, antete, duplicate sau răspunsuri asociate termenilor greșiți?
- Mai are sens fiecare răspuns după modificarea sfârșiturilor de rând din interiorul lui?

Citește câteva perechi obișnuite, pe lângă cele care par suspecte. Numărul corect de fișe nu dezvăluie un răspuns greșit asociat unui termen valid. Dacă ceva nu este corect, repară sursa înainte de a repeta importul. Păstrează fișierul corectat pentru modificări ulterioare.

## Perechi deja scrise sau fișe generate de AI?

Quizlet descrie și crearea de fișe cu ajutorul AI din materialele furnizate în [prezentarea funcției de creare cu AI](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Formulările generate au nevoie de o verificare separată a conținutului. Pentru o listă de termeni și definiții deja finalizată, importul structurat îți permite să verifici transferul comparându-l cu perechile pe care le-ai scris.

Pornești de la paragrafe? [Transformă notițele în fișe de învățare (în engleză)](/blog/turn-notes-into-flashcards/) înainte de a pregăti textul pentru import. Vrei să muți un set în direcția opusă? Folosește [ghidul de export din Quizlet](/ro/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
