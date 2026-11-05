---
title: "Come trovare le carte duplicate in Anki e scegliere quali tenere"
description: "Scopri perché una carta si ripete in Anki, trova le note duplicate e decidi quale tenere. Un esercizio ti guida nei controlli sulla cronologia dei ripassi."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "carte duplicate Anki"
  - "trovare duplicati in Anki"
  - "eliminare note duplicate in Anki"
  - "note duplicate Anki"
  - "cronologia ripassi Anki"
---

Riconosci una domanda che hai già ripassato, ma Anki te la mostra come nuova. Potresti aver importato una copia, oppure la stessa nota potrebbe aver generato una seconda domanda. Prima di cancellare una riga dai risultati della ricerca, controlla da quale nota proviene. Potresti eliminare tutte le carte di quella nota, compresa quella che volevi tenere.

Per sistemare le **carte duplicate in Anki**, parti dalla nota che le ha generate. Se le carte provengono da note distinte, usa **Notes → Find Duplicates** per trovare le possibili copie. Un campo identico è il primo indizio. Confronta il contenuto delle note e la cronologia di ogni carta, poi decidi caso per caso quale copia tenere.

Le istruzioni per la versione desktop si basano sulla documentazione di Anki e sul codice sorgente della versione pubblicata, consultati il 4 ottobre 2026. L'esercizio è inventato e illustra sulla carta i risultati attesi.

![Un socio di un circolo di scacchi confronta una torre in più, di colore chiaro, con due torri consumate su una scacchiera di legno](/blog/anki-duplicate-cards.png)

## Capisci perché la domanda si ripete

Una nota contiene campi come **Front** e **Back**. Anki usa i modelli per trasformare quei campi in carte. Una nota di vocabolario può generare una carta per riconoscere una parola e una per ricordarla a partire dalla traduzione. Si chiamano carte sorelle e ciascuna ha i propri ripassi programmati. [Note e campi nel manuale di Anki](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Nella finestra **Browse**, passa alla modalità **Cards** e apri **Cards → Info** per ogni riga sospetta. Confronta gli ID delle note. Se l'ID coincide, le carte appartengono alla stessa nota. ID diversi indicano note distinte. Sostituisci `123` in `nid:123` con l'ID effettivo per vedere tutte le carte della nota, a prescindere dal mazzo in cui si trovano. [ID e ricerche nel manuale di Anki](https://docs.ankiweb.net/searching.html#object-ids)

| Cosa trovi | Spiegazione probabile | Cosa fare |
| --- | --- | --- |
| Stessa nota, domande in direzioni opposte | Carte sorelle previste dal tipo di nota | Verifica se entrambe le domande sono utili |
| Stessa nota, domande identiche nell'anteprima | I modelli di carta potrebbero essere duplicati | Confronta i modelli e le anteprime |
| Note diverse, domande in apparenza identiche | Possibili note duplicate | Confronta le note per intero prima di scegliere quale tenere |

Se la nota è fatta per generare due carte sorelle, la [guida alle carte inverse (in inglese)](/blog/anki-reverse-cards/) spiega come funzionano le domande nelle due direzioni. Se vuoi mettere in pausa una sola carta, puoi sospenderla. La sospensione la esclude dai ripassi e la conserva nella raccolta. [Come sospendere una carta (in inglese)](/blog/anki-bury-vs-suspend/)

Se i modelli sono identici, segui la procedura di Anki per individuare le copie in più. Rimuovere un modello incide su tutte le note di quel tipo, anche in altri mazzi. Valuta a parte una modifica che ha effetto sull'intero tipo di nota. [Guida di Anki alle carte in più](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html)

## Scegli dove cercare le note duplicate

Apri **Notes → Find Duplicates** e seleziona il campo da confrontare, per esempio **Front**. Per impostazione predefinita, Anki cerca in tutti i tipi di nota che contengono quel campo. Usa **Optional filter** per delimitare la ricerca, poi fai clic su **Search**. [Comandi di Find Duplicates nel manuale di Anki](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Per un mazzo chiamato `Cleanup practice`, inserisci questa ricerca.

```text
deck:"Cleanup practice"
```

La ricerca per mazzo include i sottomazzi. Le copie in altri mazzi possono sfuggire a questa ricerca anche se il risultato è vuoto. Se sospetti che siano altrove, togli il filtro per cercare in tutta la raccolta. [Sintassi di ricerca per mazzo nel manuale di Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Fai clic su un gruppo di risultati per esaminarne le note. **Tag Duplicates** aggiunge il tag `duplicate` a tutte le note del gruppo, compresa quella che potresti voler tenere. **Evita di eliminare in blocco i risultati di `tag:duplicate`.** Usa la ricerca per raccogliere le possibili copie e seleziona una per una le note da eliminare. [Codice sorgente della funzione](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

La ricerca confronta il contenuto del campo selezionato. Due domande formulate in modo diverso possono verificare la stessa nozione e richiedere una ricerca manuale. Due domande identiche possono invece riferirsi a lingue o corsi diversi.

## Tre casi per esercitarti a scegliere

Immagina sei note in `Cleanup practice`, senza sottomazzi. A e B usano i modelli originali di **Basic (and reversed card)** e generano due carte ciascuna. Le note da C a F usano **Basic** e generano una carta ciascuna. Tutte e otto le carte si trovano in quel mazzo. Le lettere servono solo per l'esercizio. In Anki gli ID delle note e quelli delle carte sono numeri.

| Note | Front → Back | Ripassi e significati nell'esempio | Decisione |
| --- | --- | --- | --- |
| A e B | `le vélo` → `bicycle` | Per A, 12 ripassi della carta di riconoscimento e 3 di quella di produzione. Le due carte di B sono nuove | Tieni A. B è la prima copia da valutare per l'eliminazione |
| C e D | `Chemical symbol for silver?` → `Ag` | C ha 20 ripassi e D ne ha 6 | Confronta le cronologie e scegli con quale carta proseguire |
| E e F | E (`bank` → `financial institution`), F (`bank` → `side of a river`) | La parola ha due significati diversi | Tieni entrambe e aggiungi contesto alle domande |

La ricerca sul campo **Front** può far emergere tutte e tre le coppie. La prima sembra la più semplice. Prima di eliminare B, confronta **tutti i campi**, i file multimediali, i tag, il tipo di nota e le domande che compaiono sulle carte. B potrebbe contenere una registrazione della pronuncia che manca ad A oppure generare una domanda in più.

Se trovi qualcosa di utile per studiare la stessa nozione, copialo nella nota che tieni e controlla il risultato in anteprima. Conserva anche i tag utili della nota di partenza. Se cambia la nozione da ricordare, crea una nuova domanda con una cronologia propria.

Per C e D, il numero di ripassi è solo un indizio. Controlla le date dei ripassi, le valutazioni, l'intervallo attuale e la scadenza di entrambe le carte. La carta con più ripassi potrebbe aver richiesto di imparare di nuovo la risposta più volte. Verifica che domanda e risposta siano utili, poi scegli da quale cronologia vuoi ripartire. Se le risposte si contraddicono, consulta prima la fonte da cui hai studiato per verificare quale sia corretta.

Se tieni C ed elimini D, C conserva il proprio stato di apprendimento e **prosegue con la sua sola cronologia**. In [Card Info](https://docs.ankiweb.net/stats.html#card-info), Anki mostra i ripassi di ciascuna carta. I ripassi delle note eliminate restano nelle statistiche dell'intera raccolta e scompaiono da quelle del singolo mazzo. [Statistiche delle note eliminate nel manuale di Anki](https://docs.ankiweb.net/stats.html#more)

Se hai ancora dubbi, rimanda l'eliminazione. Annota cosa resta da verificare e, se serve, sospendi le domande indesiderate mentre fai i controlli.

## Elimina una copia e controlla il risultato

Prima di eliminare materiale, sincronizza gli altri dispositivi su cui hai modifiche in sospeso. Poi sincronizza Anki sul computer per riceverle. [Sincronizzazione nel manuale di Anki](https://docs.ankiweb.net/syncing.html)

Da **File → Export**, salva un **Anki Collection Package (`.colpkg`)** con **Include Media** attivo. Il file contiene tutti i mazzi con la programmazione e la cronologia dei ripassi. Conservalo in un posto sicuro. Se lo importi, la raccolta del backup sostituisce per intero quella del profilo aperto. [Esportazione della raccolta nel manuale di Anki](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Se vuoi fare una prova, crea un profilo separato da **File → Switch Profile** e importa lì il backup. Lascia il profilo di prova scollegato da AnkiWeb. [Ogni profilo ha una raccolta separata](https://docs.ankiweb.net/profiles.html) e collegare entrambi i profili allo stesso account può sovrascrivere una raccolta con l'altra. La [guida ai formati APKG e COLPKG (in inglese)](/blog/anki-apkg-vs-colpkg/) spiega cosa comprende il backup e cosa succede quando lo importi.

Per l'esercizio, chiama A1 la carta di riconoscimento di A e A2 quella di produzione. B1 e B2 sono le carte corrispondenti di B. In **Cards → Info**, annota gli ID effettivi delle due carte di A, le scadenze, gli intervalli e qualche voce della cronologia che potrai riconoscere in seguito. Annota anche l'ID della nota B. Fai il confronto nella stessa sessione e rimanda eventuali ripassi o modifiche alla programmazione fino a dopo il controllo.

Procedi così per eliminare una nota duplicata alla volta.

1. In **Browse**, sostituisci la ricerca con `nid:` seguito dall'ID effettivo di B. In modalità **Cards**, controlla ogni risultato e apri l'anteprima di entrambe le direzioni. Nella tua raccolta, cerca senza filtro per mazzo per vedere se ci sono carte sorelle anche altrove.
2. Passa alla modalità **Notes**. Verifica che l'unico risultato sia la nota B che vuoi eliminare, seleziona solo quella e scegli **Notes → Delete**. Il [comando Delete](https://docs.ankiweb.net/browsing.html#notes) elimina la nota selezionata e tutte le sue carte, anche se lo usi a partire da una singola riga in modalità **Cards**.
3. Ripeti la ricerca per ID della nota B e verifica che non dia risultati. Usa `cid:` seguito dagli ID delle carte di A che hai annotato, separati da una virgola. Apri **Info** per entrambe le carte e confronta i dati con le tue annotazioni.
4. Cerca `deck:"Cleanup practice"` e confronta il numero di righe nelle modalità **Notes** e **Cards**. Verifica le note rimaste usando la tabella qui sotto.

Dopo aver eliminato solo B, dovresti trovare questi risultati.

| Controllo | Prima | Risultato atteso dopo |
| --- | --- | --- |
| Intero mazzo dell'esercizio | 6 note / 8 carte | 5 note / 6 carte |
| Coppia di note sulla bicicletta | A1, A2, B1, B2 | Solo A1 e A2 |
| ID delle carte di A, scadenze, intervalli e cronologia | I valori che hai annotato | Stesse carte, stessa programmazione e stesse voci della cronologia |
| Ricerca per ID della nota B | Le due carte di B | Nessun risultato |
| Note sull'argento e sui significati di *bank* | C, D, E, F | Le stesse quattro note |

In questo esempio, eliminare una nota toglie due carte. Se cancellassi A per errore, otterresti gli stessi totali e perderesti le carte già studiate. Controlla sia gli ID sia i conteggi e lascia intatta la programmazione delle carte che conservi.

Il grafico dei ripassi dell'intera raccolta può includere anche quelli delle carte rimosse. Per verificare i progressi che hai conservato, controlla l'ID della carta rimasta e i suoi dati in **Info**.

Quando i risultati del primo gruppo corrispondono alle tue annotazioni, passa al successivo e scegli anche lì quale copia tenere. Se hai fatto una prova, ripeti l'eliminazione che hai verificato nel tuo profilo abituale. Controlla la raccolta, sincronizza Anki sul computer e poi sugli altri dispositivi prima di riprendere a studiare.

Se le copie sono arrivate con un'importazione, consulta la [guida all'aggiornamento delle note tramite CSV (in inglese)](/blog/anki-csv-update-existing-notes/) prima della prossima. Se hai duplicato note per inserire una stessa nozione in più argomenti, con i tag puoi assegnare più argomenti alla stessa nota e proseguire con un'unica cronologia. [Guida a tag e mazzi (in inglese)](/blog/anki-tags-vs-decks/)
