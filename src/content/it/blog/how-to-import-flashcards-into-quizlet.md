---
title: "Come importare flashcard in Quizlet da Excel, Google Sheets o testo"
description: "Importa in Quizlet un elenco di parole su due colonne. Scegli tabulazioni e nuove righe e correggi definizioni divise, schede extra e problemi CSV prima di pubblicare."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "come importare flashcard in Quizlet"
  - "formato importazione Quizlet"
  - "importare in Quizlet da Excel"
  - "da Google Sheets a Quizlet"
  - "importazione Quizlet con tabulazioni"
---

«Red, green, blue» sembra una normale risposta di una flashcard. Ma se usi le virgole per separare un termine dalla sua definizione, quelle stesse virgole rendono la riga ambigua. Bastano pochi segni di punteggiatura per ritrovarti a correggere un elenco di parole già pronto.

Per importare flashcard in Quizlet da Excel, Google Sheets o testo, parti da due colonne: una per i termini e una per le definizioni. Copia i dati, incollali nel modulo di importazione sul sito e scegli le tabulazioni tra i campi e le nuove righe tra le schede. Fai prima una prova con quattro righe, così puoi controllare ogni coppia prima di trasferire l'intero elenco.

![Un ceramista abbina tazze di ceramica ai rispettivi piattini, disponendoli su righe separate prima di spostarli su uno scaffale](/blog/how-to-import-flashcards-into-quizlet.png)

## Dove trovare il modulo di importazione di Quizlet

Quizlet descrive l'importazione sul proprio sito: puoi usare virgole, tabulazioni o trattini tra i campi e punti e virgola o nuove righe tra le schede. Le [istruzioni ufficiali per l'importazione (in inglese)](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) indicano questa sequenza:

1. Accedi e scegli **Crea → Set di flashcard (Create → Flashcard set)**.
2. Inserisci un titolo, seleziona **Importa (Import)** e incolla il testo.
3. Imposta i separatori in base al testo inserito. Per gli esempi di questa guida, usa **Tabulazione (Tab)** e **Nuova riga (New line)**.
4. Seleziona **Importa (Import)**, poi scegli le lingue dei termini e delle definizioni.
5. Controlla le schede prima di selezionare **Crea (Create)** per salvare e pubblicare il set.

Le istruzioni sono state verificate il 15 settembre 2026. Gli esempi seguenti spiegano come preparare e controllare il testo; non descrivono una prova effettuata dopo l'accesso a un account.

## Parti da un piccolo intervallo del foglio di calcolo

In Excel o Google Sheets, inserisci una coppia termine-definizione per riga. Ecco una prova con quattro schede:

| Termine | Definizione |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Copia solo le quattro righe di dati nelle due colonne. Se le intestazioni sono nella riga 1, seleziona **A2:B5**. Escludi le intestazioni dall'intervallo copiato.

Il risultato atteso sono quattro schede, con termini in spagnolo e definizioni in inglese. Nell'ultima scheda, «colores primarios de la luz» deve rimanere tutto su un lato e «red, green, blue» sull'altro. Le virgole fanno parte della risposta.

Una volta chiarito l'esempio, prepara il tuo foglio. Lavora su una copia, così conservi l'originale per confrontarlo. Elimina le righe vuote ed escludi dalla selezione le note o le colonne aggiuntive. Completa i termini o le definizioni mancanti prima di copiare.

Quando ordini i dati, tieni unite le due colonne. Ordinare solo i termini li separerebbe dalle rispettive risposte: anche con il numero corretto di schede, l'importazione potrebbe contenere abbinamenti sbagliati.

## Il formato di testo semplice usa vere tabulazioni

Le stesse quattro righe, in formato di testo separato da tabulazioni, hanno questo aspetto. Tra ogni termine e la sua definizione c'è un unico carattere di tabulazione:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

La tabulazione è un carattere preciso. Più spazi possono sembrare simili, ma non fungono da separatore di tabulazione. Nemmeno digitare i caratteri `\t` inserisce una tabulazione. Se l'editor di testo rende l'operazione difficile, disponi le coppie in due colonne di un foglio di calcolo e copia quelle celle.

Ogni scheda deve occupare una sola riga effettiva. Una definizione lunga può andare a capo sullo schermo perché la finestra è stretta, senza che questo aggiunga un'interruzione di riga al contenuto. Un ritorno a capo inserito all'interno di una cella, invece, la aggiunge. Rimuovi queste interruzioni interne prima di usare le nuove righe come separatori tra le schede.

Rimuovi anche le tabulazioni presenti all'interno di un termine o di una definizione. In questo formato, le tabulazioni devono comparire solo tra i due campi.

## Se il tuo elenco è un file CSV

Apri il CSV in un foglio di calcolo prima di preparare l'importazione. Un record CSV come questo contiene due campi se viene interpretato secondo le regole del formato per i campi tra virgolette:

```text
"colores primarios de la luz","red, green, blue"
```

La risposta tra virgolette contiene virgole. Un campo di testo che divide l'input in corrispondenza delle virgole non è necessariamente un lettore CSV: non contare sulle virgolette per mantenere unita la risposta in quel campo.

In Excel o Google Sheets, verifica che il record occupi esattamente due celle. Poi copia le celle per ottenere un testo separato da tabulazioni. Se la risposta si è distribuita su colonne aggiuntive, correggi prima le impostazioni di importazione CSV del foglio di calcolo. Copiare la riga già alterata trasferisce anche il problema.

Controlla anche i valori che un foglio di calcolo potrebbe reinterpretare. Se `0012` è un codice da studiare, trasformarlo in `12` cambia la scheda. Confronta identificativi, date, virgolette e parole accentate con il file originale prima di copiare l'intervallo.

## Quando le schede non corrispondono alle righe

Usa la prova per individuare la prima differenza. Modifica una cosa alla volta, poi confronta il risultato con le stesse quattro righe di partenza.

| Problema | Probabile errore nei separatori | Cosa cambiare |
| --- | --- | --- |
| Una risposta viene divisa in corrispondenza delle virgole | È stata selezionata la virgola tra i campi | Prepara due colonne e seleziona Tabulazione |
| «well-being» viene diviso all'interno del termine | È stato selezionato il trattino tra i campi | Conserva il trattino e separa i campi con una tabulazione |
| Una risposta diventa più schede | Sono presenti interruzioni di riga interne nel testo di partenza | Disponi la risposta su una sola riga effettiva |
| «Termine» e «Definizione» compaiono come una scheda | È stata copiata la riga delle intestazioni | Seleziona solo le righe di dati |
| Entrambi i campi rimangono sullo stesso lato | Sono presenti spazi al posto di una tabulazione | Copia un intervallo di due colonne da un foglio di calcolo |

Per esempio, una risposta con «first stage» e «second stage» su righe separate potrebbe diventare `first stage; second stage`. In questo modo entrambe le parti rimangono su una sola riga. Mantieni **Nuova riga (New line)** come separatore tra le schede quando usi un punto e virgola all'interno di una risposta.

Se le due fasi meritano domande separate, scrivi invece due coppie complete. La [guida per creare flashcard migliori (in inglese)](/blog/how-to-make-better-flashcards/) può aiutarti a decidere.

## Controlla il risultato prima di pubblicare

Esamina tutte e quattro le schede di prova. Per l'elenco completo, confronta le schede importate con il testo di partenza ripulito:

- Il totale corrisponde al numero di righe di dati complete?
- La prima e l'ultima coppia corrispondono, comprese le risposte integrali?
- Punteggiatura, accenti e codici sono rimasti invariati?
- Ci sono lati vuoti, intestazioni, duplicati o risposte abbinate ai termini sbagliati?
- Le risposte in cui hai modificato i ritorni a capo hanno ancora senso?

Leggi alcune coppie normali oltre a quelle sospette. Il solo confronto dei totali non rileva una risposta sbagliata abbinata a un termine valido. Se qualcosa non va, correggi il testo di partenza prima di ripetere l'importazione. Conserva il file ripulito per eventuali correzioni future.

## Coppie già scritte o schede generate dall'IA?

Quizlet descrive anche la creazione di schede con l'aiuto dell'IA a partire da materiale fornito, nella sua [panoramica sulla creazione con l'IA (in inglese)](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Il testo generato richiede una revisione dei contenuti. Per un elenco di termini e definizioni già pronto, l'importazione strutturata ti permette di confrontare il risultato del trasferimento con le coppie che hai già scritto.

Parti da paragrafi di testo? [Trasforma gli appunti in flashcard (guida in inglese)](/blog/turn-notes-into-flashcards/) prima di preparare il testo da importare. Vuoi trasferire un set nella direzione opposta? Usa la [guida all'esportazione da Quizlet](/it/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
