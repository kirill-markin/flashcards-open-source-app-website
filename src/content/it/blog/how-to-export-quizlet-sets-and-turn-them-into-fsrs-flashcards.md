---
title: "Come esportare i set di Quizlet nel 2026 (e perché manca il pulsante Esporta)"
description: "Esporta un set di Quizlet seguendo i passaggi attuali sul sito. Se manca il pulsante Esporta, verifica che il set sia tuo, non sia una copia e tu non stia usando l'app."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "come esportare da Quizlet"
  - "come esportare le flashcard di Quizlet"
  - "pulsante esporta Quizlet mancante"
  - "scaricare flashcard Quizlet"
  - "da Quizlet a CSV"
  - "da Quizlet ad Anki"
---

Se in Quizlet manca il pulsante **Esporta (Export)**, parti da due verifiche: hai creato tu il set originale e stai usando il sito web di Quizlet? Quizlet consente l'esportazione solo a chi ha creato il set originale e la funzione è disponibile esclusivamente sul sito. Un set copiato non si può esportare, anche se la copia ora compare nella tua libreria.

Se hai i requisiti, l'esportazione richiede poco tempo: apri il set sul sito, scegli **Altro → Esporta (More → Export)**, imposta come separare termini e definizioni e seleziona **Copia testo (Copy text)**. Quizlet non scarica un file del mazzo. Copia il testo negli appunti, senza immagini.

**Informazioni verificate:** 30 agosto 2026, consultando le [istruzioni ufficiali di Quizlet per l'esportazione](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Un addetto all'archivio verifica i contrassegni di proprietà prima di consegnare coppie di schede testuali, con due cartelle portadocumenti pronte e le fotografie lasciate dietro un vetro](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Prima di tutto: dovresti vedere il pulsante Esporta?

Fai questa verifica prima di provare a scaricare le flashcard di Quizlet in un altro modo:

| La tua situazione | Esporta dovrebbe essere disponibile? | Passo successivo |
| --- | --- | --- |
| Hai creato il set originale e lo hai aperto sul sito di Quizlet | Sì, secondo la pagina di assistenza di Quizlet | Segui i passaggi qui sotto |
| Stai usando l'app per iOS o Android | No; l'esportazione è disponibile solo sul sito | Apri Quizlet in un browser e accedi |
| Hai copiato il set di un altro utente | No; Quizlet specifica che i set copiati non possono essere esportati | Non aspettarti che la copia renda disponibile Esporta |
| Puoi visualizzare il set, ma non lo hai creato tu | No; poterlo visualizzare non significa esserne il creatore | Chiedi al creatore un file sorgente oppure ricostruiscilo a partire da materiale che puoi utilizzare |

Se hai creato il set originale ma il pulsante Esporta di Quizlet manca ancora, verifica di aver effettuato l'accesso con l'account a cui appartiene il set e di aver aperto l'originale, non una copia. La pagina di assistenza di Quizlet non descrive un secondo metodo di esportazione. A quel punto, contatta l'assistenza di Quizlet anziché affidarti a un servizio di download che sostiene di aggirare la restrizione.

## Come esportare le flashcard di Quizlet dal sito web

Per un set che hai creato tu:

1. Accedi a Quizlet dal sito web.
2. Seleziona **La tua libreria (Your library)**.
3. Seleziona **Set di flashcard (Flashcard sets)**.
4. Apri il set che vuoi esportare.
5. Apri il menu **Altro (More)**.
6. Seleziona **Esporta (Export)**.
7. Scegli come separare termini e definizioni.
8. Seleziona **Copia testo (Copy text)**.
9. Incolla il risultato in un editor di testo semplice.

Questo è l'intero procedimento attuale. Non c'è un pulsante finale per il download.

Per le normali schede con fronte e retro, consiglio una tabulazione tra termine e definizione e un ritorno a capo tra una scheda e l'altra. È un consiglio pratico sulla scelta del separatore, non un requisito di Quizlet. Le tabulazioni sono in genere più facili da controllare delle virgole, perché le virgole compaiono spesso nelle definizioni.

Un file ben strutturato con due schede avrebbe questo aspetto, con una tabulazione al centro di ogni riga:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Che cosa conserva l'esportazione di Quizlet

Quizlet descrive questa funzione in termini precisi: esporta i **termini e le definizioni** di un set creato dall'utente stesso. Specifica inoltre che le immagini non possono essere esportate.

Il risultato incollato è il riferimento più sicuro per capire che cosa puoi conservare. Se un testo, un separatore o un ritorno a capo compare lì, puoi salvarlo in un file. La pagina di assistenza di Quizlet non promette di trasferire cartelle, modalità di studio, formattazione, livello di padronanza, cronologia dei ripassi o pianificazione.

Si tratta quindi di una copia del testo delle schede, non di un backup ripristinabile di Quizlet. La distinzione vale anche se hai cercato «scaricare flashcard Quizlet»: Quizlet copia il testo negli appunti e il file lo crei tu.

## Salva una copia originale in UTF-8 prima di modificare il testo

Organizza il lavoro in modo da poter tornare indietro:

1. Incolla l'esportazione in un editor di testo semplice.
2. Salvala in UTF-8, per esempio come `biology-quizlet-raw.txt`.
3. Duplicala con il nome `biology-quizlet-working.txt`.
4. Lascia intatto il file originale e modifica solo la copia di lavoro.

Prima di importare il file di lavoro, controllalo mentre il set di Quizlet è ancora aperto:

- Attiva la visualizzazione dei caratteri di spaziatura e verifica dove compaiono tabulazioni e ritorni a capo.
- Cerca il separatore scelto all'interno di termini e definizioni. Una tabulazione in più può creare un terzo campo imprevisto.
- Individua le definizioni che contengono ritorni a capo: potrebbero essere interpretati come schede aggiuntive.
- Confronta l'inizio, la parte centrale e la fine del file con Quizlet, comprese le definizioni più lunghe.
- Chiudi e riapri il file, poi controlla accenti, scritture non latine, simboli e segni di punteggiatura tipografici.
- Segnala campi vuoti, duplicati e righe irregolari, anziché correggerli sulla base di supposizioni non dichiarate.

Confronta il numero di righe con quello delle schede solo se ogni scheda occupa esattamente una riga. Questa scorciatoia non funziona con le definizioni su più righe.

Conserva il file originale anche quando la copia di lavoro sembra a posto. Se durante l'importazione un campo viene spostato o un contenuto va perso, avrai ancora un riferimento intatto.

## Da Quizlet a CSV: prepara il file correttamente

Rinominare un file `.txt` in `.csv` non lo converte. Un CSV richiede separatori coerenti e virgolette usate correttamente per delimitare i contenuti con virgole, virgolette o ritorni a capo.

Per creare correttamente un file CSV da Quizlet:

1. Lascia intatta la copia di backup del testo originale.
2. Apri la copia di lavoro in un foglio di calcolo e seleziona esattamente il separatore usato in Quizlet.
3. Verifica che ogni record previsto abbia due colonne: termine e definizione.
4. Controlla virgolette, separatori e definizioni su più righe.
5. Esporta in formato CSV UTF-8.
6. Riapri il CSV in una nuova anteprima prima di usarlo altrove.

Un foglio di calcolo può aggiungere le virgolette richieste dal CSV. Sostituire globalmente le tabulazioni con virgole non permette di farlo in modo affidabile.

## Usa il testo in Nibomo per creare bozze da controllare

[Nibomo](/it/features/) non dispone di un importatore diretto da Quizlet. Nella versione web, i file TXT o CSV si usano come allegati per creare bozze con l'aiuto dell'IA; non si tratta di una migrazione senza perdita di dati.

1. Conserva il file originale di Quizlet fuori dall'app.
2. Allega il TXT ripulito o il CSV preparato correttamente nella chat IA di Nibomo.
3. Indica all'assistente quali separatori e campi usa il file.
4. Chiedi una piccola anteprima e specifica di non salvare ancora le schede.
5. Confronta il numero di schede proposte e il contenuto di fronte e retro con il file di lavoro.
6. Salva solo le schede che hai controllato.

La [guida introduttiva](/docs/getting-started/) descrive la chat IA con i dati dell'area di lavoro e i file allegati. Un prompt prudente potrebbe essere:

> Leggi questo file come coppie di termini e definizioni separati da tabulazioni. Non salvare ancora le schede. Prepara una piccola bozza di esempio, conserva la formulazione originale e i caratteri non latini ed elenca separatamente le righe malformate, vuote o ambigue, senza fare supposizioni.

Questo può essere utile quando anche le vecchie schede hanno bisogno di una revisione. Non dimostra però che ogni riga sia stata trasferita correttamente. Usa la lista di controllo in [Come correggere le flashcard generate dall'IA](/blog/how-to-fix-ai-flashcards/), poi prova con un piccolo mazzo prima di creare le altre schede.

Le schede create in Nibomo partono con una nuova cronologia di apprendimento. Il testo esportato da Quizlet non contiene gli eventi di ripasso o lo stato della pianificazione necessari per proseguire la coda di ripasso precedente.

> **Trasparenza:** sviluppo Nibomo. Questo procedimento descrive i limiti attuali del prodotto; non implica una compatibilità completa con Quizlet.

## Da Quizlet ad Anki: usa l'importazione di testo di Anki

Il [manuale ufficiale di Anki sull'importazione di testo](https://docs.ankiweb.net/importing/text-files.html) indica il supporto per file di testo semplice UTF-8 con campi separati da virgole, punti e virgola o tabulazioni.

Per una copia di lavoro con campi separati da tabulazioni:

1. Apri la procedura di importazione di Anki e seleziona il file di testo UTF-8.
2. Verifica nell'anteprima che Anki abbia rilevato la tabulazione; in caso contrario, modifica l'opzione del separatore.
3. Seleziona il tipo di nota e il mazzo di destinazione.
4. Associa il primo campo al fronte e il secondo al retro.
5. Controlla nell'anteprima che non ci siano campi vuoti, spostati o in eccesso.
6. Controlla le impostazioni per i duplicati e gli aggiornamenti prima di importare.

Anki determina il numero di campi previsto dalla prima riga che non è un commento. Nei record successivi, i campi mancanti restano vuoti e quelli in eccesso non vengono importati. Per questo l'anteprima è importante, soprattutto quando basta un separatore fuori posto per cambiare la struttura di una riga.

Anche per le definizioni su più righe serve una scelta esplicita. Anki supporta campi racchiusi tra virgolette che si estendono su più righe. In alternativa, può interpretare `<br>` come un ritorno a capo quando è attiva l'opzione **Consenti HTML nei campi (Allow HTML in fields)**. Scegli un metodo e controlla un campione copiato prima di importare l'intero file.

Per impostazione predefinita, Anki può riconoscere una nota esistente dello stesso tipo dal primo campo e aggiornare gli altri campi. Le opzioni di importazione consentono invece di ignorare i duplicati o aggiungerli come nuove note. Aggiornare una nota esistente in Anki può conservarne la pianificazione dei ripassi, ma il file di testo non trasferisce alcuna pianificazione da Quizlet.

## Conserva l'originale finché il nuovo mazzo non funziona

Il procedimento ufficiale di Quizlet termina con **Copia testo**, sul sito web, per i set creati dall'utente stesso. Gli script di scraping, gli endpoint privati individuati per tentativi e i servizi di download di terze parti sono procedimenti separati e non supportati. Non trasformano un set copiato o accessibile in sola lettura in un'esportazione ufficiale.

Se ti serve un'automazione ricorrente anziché una copia una tantum, l'articolo sullo [stato attuale dell'API di Quizlet](/blog/quizlet-api/) spiega quali possibilità sono supportate. Se il set non è tuo, chiedi al creatore un file sorgente oppure ricostruisci un mazzo più piccolo dai tuoi appunti. [Come creare flashcard migliori](/blog/how-to-make-better-flashcards/) può aiutarti a migliorare il nuovo mazzo anziché copiare ogni vecchia riga.

Non eliminare il set originale di Quizlet finché:

- il file originale UTF-8 non è salvato in una posizione di cui viene eseguito il backup;
- il file di lavoro non si riapre con i caratteri e i separatori previsti;
- non hai controllato campi su più righe, campi vuoti, duplicati e righe irregolari;
- non hai ricostruito ogni informazione importante contenuta nelle immagini da una fonte che puoi utilizzare;
- una piccola prova non ha prodotto schede con il fronte e il retro corretti nell'app di destinazione.

Conserva il file di testo originale anche dopo. È il riferimento indipendente più semplice da consultare quando una successiva importazione sembra sbagliata. Se stai ancora decidendo dove trasferire le schede, il [confronto con un'alternativa a Quizlet](/blog/quizlet-alternative/) esamina i vantaggi e i limiti delle diverse scelte.
