---
title: "Cum exporți seturile Quizlet în 2026 (și de ce lipsește opțiunea Export)"
description: "Exportă un set Quizlet urmând pașii actuali de pe site. Dacă lipsește Export, verifică dacă ai creat setul original, ai făcut o copie sau folosești aplicația mobilă."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "cum export din Quizlet"
  - "cum export fișe de învățare Quizlet"
  - "lipsește butonul de export Quizlet"
  - "descărcare fișe de învățare Quizlet"
  - "Quizlet în CSV"
  - "Quizlet în Anki"
---

Dacă butonul **Export** lipsește din Quizlet, verifică mai întâi două lucruri: tu ai creat setul original și folosești site-ul Quizlet? Quizlet permite exportul doar creatorului original al unui set, iar funcția este disponibilă doar pe site. Un set copiat nu poate fi exportat, chiar dacă acum copia apare în biblioteca ta.

Dacă îndeplinești aceste condiții, exportul este rapid: deschide setul pe site, alege **More → Export**, stabilește cum să fie aranjați termenii și definițiile, apoi selectează **Copy text**. Quizlet nu descarcă un fișier cu setul de fișe. Copiază textul în clipboard, fără imagini.

**Informații verificate:** 30 august 2026, pe baza [instrucțiunilor oficiale Quizlet pentru export](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Un arhivar verifică jetoanele de proprietate înainte de a preda fișe cu perechi de texte; două mape sunt pregătite, iar fotografiile rămân în spatele geamului](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Mai întâi, ar trebui să apară butonul Export?

Verifică situația ta înainte să încerci să descarci fișele Quizlet în alt mod:

| Situația ta | Ar trebui să fie disponibil Export? | Pasul următor |
| --- | --- | --- |
| Ai creat setul original și l-ai deschis pe site-ul Quizlet | Da, conform paginii de ajutor Quizlet | Urmează pașii de mai jos |
| Folosești aplicația pentru iOS sau Android | Nu; exportul este disponibil doar pe site | Deschide Quizlet într-un browser și autentifică-te |
| Ai copiat setul altui utilizator | Nu; Quizlet precizează că seturile copiate nu pot fi exportate | Nu te aștepta ca acea copie să deblocheze Export |
| Poți vedea setul, dar nu l-ai creat tu | Nu; accesul de vizualizare nu te face creatorul setului | Cere-i creatorului un fișier-sursă sau reconstruiește setul din materiale pe care ai dreptul să le folosești |

Dacă tu ai creat setul original, dar butonul de export Quizlet tot lipsește, verifică dacă ești autentificat în contul căruia îi aparține și dacă ai deschis originalul, nu o copie. Pagina de ajutor Quizlet nu descrie o a doua metodă de export. În acest caz, contactează serviciul de asistență Quizlet în loc să te bazezi pe un instrument de descărcare care pretinde că ocolește restricția.

## Cum exporți fișele Quizlet de pe site

Pentru un set creat de tine:

1. Autentifică-te pe site-ul Quizlet.
2. Selectează biblioteca ta (**Your library**).
3. Selectează seturile de fișe (**Flashcard sets**).
4. Deschide setul pe care vrei să-l exporți.
5. Deschide meniul **More**.
6. Selectează **Export**.
7. Alege cum să fie aranjați termenii și definițiile.
8. Selectează **Copy text**.
9. Lipește rezultatul într-un editor de text simplu.

Acesta este întregul proces actual. Nu există un buton final de „descărcare”.

Pentru fișele obișnuite cu față și verso, recomand un tabulator între termen și definiție și un rând nou între fișe. Această alegere a separatorilor este un sfat practic, nu o cerință Quizlet. Tabulatoarele sunt de obicei mai ușor de verificat decât virgulele, deoarece virgulele apar frecvent în definiții obișnuite.

Un fișier corect, cu două fișe, ar arăta astfel, cu un tabulator la mijlocul fiecărui rând:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Ce păstrează exportul Quizlet

Quizlet descrie precis limitele acestei funcții: poți exporta **termenii și definițiile** doar dintr-un set pe care l-ai creat tu. Precizează și că imaginile nu pot fi exportate.

Cel mai sigur este să te bazezi pe ceea ce apare în rezultatul lipit. Dacă textul, separatorul sau sfârșitul de rând apare acolo, îl poți păstra într-un fișier. Pagina de ajutor Quizlet nu promite transferul dosarelor, modurilor de studiu, formatării, nivelului de însușire, istoricului de recapitulare sau programării recapitulărilor.

Așadar, obții o copie a textului fișelor, nu o copie de siguranță din care să poți restaura Quizlet. Aceeași diferență contează și dacă ai căutat „descărcare fișe Quizlet”: Quizlet copiază textul în clipboard, iar fișierul îl creezi tu.

## Salvează o copie brută în UTF-8 înainte să modifici ceva

Păstrează posibilitatea de a reveni la original:

1. Lipește exportul într-un editor de text simplu.
2. Salvează-l în UTF-8, de exemplu ca `biology-quizlet-raw.txt`.
3. Creează o copie numită `biology-quizlet-working.txt`.
4. Nu modifica fișierul brut; lucrează doar în copie.

Înainte să imporți fișierul de lucru, verifică-l cât timp setul Quizlet este încă deschis:

- Activează afișarea caracterelor invizibile și verifică unde apar tabulatoarele și sfârșiturile de rând.
- Caută separatorul ales în interiorul termenilor și definițiilor. Un tabulator în plus poate crea un al treilea câmp neașteptat.
- Caută definiții care conțin propriile sfârșituri de rând; acestea pot fi interpretate greșit drept fișe suplimentare.
- Compară începutul, mijlocul și sfârșitul fișierului cu Quizlet, inclusiv cele mai lungi definiții.
- Închide și redeschide fișierul, apoi verifică diacriticele, caracterele din sisteme de scriere nelatine, simbolurile și semnele de punctuație tipografice.
- Marchează câmpurile goale, duplicatele și rândurile cu structură neuniformă, în loc să le corectezi pe ghicite, fără să semnalezi problemele.

Compară numărul de rânduri cu numărul de fișe doar dacă fiecare fișă ocupă exact un rând. Metoda nu funcționează pentru definiții care se întind pe mai multe rânduri.

Păstrează fișierul brut chiar și după ce copia de lucru arată bine. Dacă un import deplasează un câmp sau pierde conținut, vei avea în continuare o referință nemodificată.

## Din Quizlet în CSV: creează fișierul cu atenție

Redenumirea unui fișier `.txt` în `.csv` nu îl convertește. Formatul CSV necesită separatori consecvenți și încadrarea corectă în ghilimele a conținutului care include virgule, ghilimele sau mai multe rânduri.

Pentru a crea în siguranță un fișier CSV din Quizlet:

1. Păstrează nemodificată copia de siguranță cu textul brut.
2. Deschide copia de lucru într-o aplicație de calcul tabelar și selectează exact separatorul folosit în Quizlet.
3. Verifică dacă fiecare înregistrare așteptată are două coloane: termen și definiție.
4. Verifică ghilimelele, separatorii și definițiile pe mai multe rânduri.
5. Exportă în format CSV cu codificare UTF-8.
6. Redeschide fișierul CSV într-o previzualizare nouă înainte să-l folosești în altă parte.

O aplicație de calcul tabelar poate adăuga ghilimelele cerute de CSV. Înlocuirea tuturor tabulatoarelor cu virgule nu poate face asta în mod fiabil.

## Mută textul în Nibomo și verifică fișele propuse

[Nibomo](/ro/features/) nu are un importator direct pentru Quizlet. În versiunea găzduită, fișierele TXT sau CSV sunt folosite ca atașamente din care AI propune fișe; aceasta nu este o migrare fără pierderi.

1. Păstrează fișierul Quizlet brut în afara aplicației.
2. Atașează fișierul TXT curățat sau fișierul CSV pregătit cu atenție în conversația AI din Nibomo.
3. Spune-i asistentului ce separator și ce câmpuri folosește fișierul.
4. Cere o previzualizare cu câteva fișe și precizează explicit să nu le salveze încă.
5. Compară numărul fișelor propuse și conținutul de pe fața și versoul lor cu fișierul de lucru.
6. Salvează doar fișele pe care le-ai verificat.

[Ghidul de început](/docs/getting-started/) descrie conversația AI cu date din spațiul de lucru și fișiere atașate. O cerere prudentă ar putea fi:

> Citește acest fișier ca perechi de termeni și definiții separate prin tabulator. Nu salva încă fișele. Propune un eșantion mic, păstrează formulările din sursă și caracterele nelatine și enumeră separat rândurile cu format greșit, goale sau ambigue, în loc să ghicești.

Această metodă poate fi utilă când și fișele vechi au nevoie de corecturi. Nu dovedește însă că fiecare rând a fost transferat corect. Folosește lista de verificare din [Cum corectezi fișele generate de AI](/blog/how-to-fix-ai-flashcards/), apoi testează un set mic înainte să creezi restul fișelor.

Fișele create în Nibomo pornesc cu un istoric de învățare nou. Textul din Quizlet nu conține evenimentele de recapitulare sau starea programării necesare pentru a continua vechea listă de recapitulări.

> **Transparență:** Eu dezvolt Nibomo. Acest proces descrie limitele actuale ale produsului; nu reprezintă o afirmație de compatibilitate completă cu Quizlet.

## Din Quizlet în Anki: folosește importatorul de text Anki

Conform [manualului oficial pentru importul de text](https://docs.ankiweb.net/importing/text-files.html), Anki acceptă fișiere de text simplu în UTF-8, ale căror câmpuri sunt separate prin virgule, punct și virgulă sau tabulatoare.

Pentru o copie de lucru cu câmpuri separate prin tabulator:

1. Deschide funcția de import din Anki și selectează fișierul text UTF-8.
2. Verifică în previzualizare dacă Anki a detectat tabulatorul; schimbă opțiunea separatorului dacă nu l-a detectat.
3. Selectează tipul de notiță și pachetul de destinație.
4. Asociază primul câmp cu fața fișei și al doilea cu versoul.
5. Verifică în previzualizare dacă există câmpuri goale, deplasate sau suplimentare.
6. Verifică setarea pentru duplicate și actualizări înainte de import.

Anki stabilește numărul de câmpuri așteptat pe baza primului rând care nu este un comentariu. În înregistrările ulterioare, câmpurile lipsă rămân goale, iar cele suplimentare nu sunt importate. De aceea, previzualizarea contează, mai ales când un singur separator în plus poate schimba structura unui rând.

Și definițiile pe mai multe rânduri necesită o alegere explicită. Anki acceptă câmpuri încadrate în ghilimele care se întind pe mai multe rânduri. Alternativ, poate interpreta `<br>` ca sfârșit de rând dacă opțiunea **Allow HTML in fields** este activată. Folosește o singură metodă și verifică un eșantion copiat înainte să imporți întregul fișier.

În mod implicit, Anki poate identifica o notiță existentă de același tip după primul câmp și îi poate actualiza celelalte câmpuri. Opțiunile de import permit și ignorarea duplicatelor sau adăugarea lor ca notițe noi. Actualizarea unei notițe Anki existente poate păstra programarea recapitulărilor din Anki, dar fișierul text nu transferă nicio programare din Quizlet.

## Păstrează originalul până când noul set funcționează

Metoda oficială Quizlet se încheie la **Copy text**, pe site, și este disponibilă doar pentru seturile pe care le-ai creat tu. Scripturile de extragere automată, endpointurile private ghicite și instrumentele de descărcare de la terți sunt metode separate, nesusținute oficial. Ele nu transformă un set copiat sau unul la care ai doar acces de vizualizare într-un export oficial.

Dacă ai nevoie de automatizare recurentă, nu doar de o copie unică, articolul despre [starea actuală a API-ului Quizlet](/blog/quizlet-api/) explică limitele funcțiilor acceptate oficial. Dacă setul nu îți aparține, cere-i creatorului un fișier-sursă sau reconstruiește un set mai mic din propriile notițe. [Cum faci fișe de învățare mai bune](/blog/how-to-make-better-flashcards/) te poate ajuta să îmbunătățești noul set în loc să copiezi fiecare rând vechi.

Nu șterge setul original din Quizlet până când:

- fișierul brut UTF-8 este salvat într-un loc pentru care există copii de siguranță;
- fișierul de lucru se redeschide cu caracterele și separatorii așteptați;
- ai verificat câmpurile pe mai multe rânduri, câmpurile goale, duplicatele și rândurile cu structură neuniformă;
- ai refăcut orice context vizual important dintr-o sursă pe care ai dreptul să o folosești; și
- un test cu un set mic a produs conținutul corect pe fața și versoul fișelor în aplicația de destinație.

Păstrează și după aceea fișierul cu textul brut. Este cea mai simplă referință independentă atunci când un import ulterior pare greșit. Dacă încă alegi unde să muți fișele, [comparația cu o alternativă la Quizlet](/blog/quizlet-alternative/) prezintă avantajele și compromisurile mai generale.
