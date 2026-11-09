---
title: "Ordine delle nuove carte in Anki: come funziona e come controllare la coda"
description: "Scopri come Anki seleziona e ordina le nuove carte con un esempio di sei carte. Controlla i limiti dei sottomazzi, le posizioni in coda e il mazzo scelto per lo studio."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "ordine delle nuove carte in Anki"
  - "ordine di selezione delle nuove carte in Anki"
  - "ordinamento delle nuove carte in Anki"
  - "posizione crescente in Anki"
  - "carte fuori ordine in Anki"
---

In Anki, una carta nuova in posizione 10 può comparire dopo una in posizione 60. Se studi un mazzo padre con la selezione **Per mazzo** (**Deck**) e l’ordinamento **In ordine di selezione** (**Order gathered**), Anki può finire di selezionare le carte di un sottomazzo prima di passare a quello che contiene la carta in posizione 10. Ordinare le carte per data di creazione nella finestra Sfoglia lascia intatta la coda di studio.

Anki decide l’ordine delle nuove carte in due fasi. La **selezione** decide quali carte entrano nella coda entro i limiti di oggi. L’**ordinamento** decide in che sequenza compaiono le carte selezionate. Parti da qui per capire se entrano nella coda carte diverse da quelle che ti aspetti o se sono le carte giuste a comparire in un ordine inatteso.

Queste istruzioni valgono per i mazzi ordinari di Anki per desktop. L’esempio con sei carte è un calcolo originale fatto sulla carta, senza prove pratiche nell’app. Si basa sul manuale e sulla versione pubblicata di Anki, entrambi verificati il 6 ottobre 2026. [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3)

![Un uomo tiene un quarto disco in vinile sopra uno scomparto vuoto del portadischi, accanto a tre dischi. Alle sue spalle ci sono due cassette di album rimasti fuori dalla selezione.](/blog/anki-new-card-order.png)

## Scegli l’ordine che vuoi ottenere

Apri le **Opzioni** (**Options**) del mazzo su cui fai clic per studiare e cerca la sezione **Ordine di visualizzazione** (**Display Order**). Quando studi un mazzo padre, le sue impostazioni per l’ordine di visualizzazione valgono per tutta la sessione, anche per le carte dei sottomazzi.

| Risultato desiderato | Ordine di selezione delle nuove carte (New Card Gather Order) | Ordinamento delle nuove carte (New Card Sort Order) |
| --- | --- | --- |
| Seguire le posizioni crescenti delle nuove carte nel mazzo scelto e in tutti i suoi sottomazzi | Posizione crescente (Ascending position) | In ordine di selezione |
| Dare la precedenza ai sottomazzi in ordine alfabetico, poi seguire le posizioni all’interno di ciascuno | Per mazzo | In ordine di selezione |
| Mantenere le stesse carte e presentarle in ordine casuale | L’impostazione di selezione che hai scelto | Casuale (Random) |

Queste combinazioni seguono le definizioni del manuale di Anki. **Posizione crescente** si riferisce alla posizione memorizzata per ciascuna carta nuova. L’ordine di inserimento e il riposizionamento manuale possono cambiare quelle posizioni, quindi la sequenza può differire dall’ordine di creazione. [Selezione delle nuove carte (in inglese)](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) · [Ordinamento delle nuove carte (in inglese)](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order)

Prima di cambiare le impostazioni, controlla quale preset è assegnato al mazzo e quali altri mazzi lo usano. L’ordine di visualizzazione fa parte del preset. Se vuoi cambiare solo questo mazzo, assegnagli prima un preset separato. Per i limiti giornalieri puoi impostare valori specifici con **Questo mazzo** (**This deck**) o **Solo oggi** (**Today only**). L’ordine di visualizzazione si applica a tutti i mazzi che usano lo stesso preset. [Guida ai preset per un singolo mazzo (in inglese)](/blog/anki-deck-options-presets/)

## Calcola quali quattro carte entrano nella coda

Immagina un mazzo padre ordinario chiamato `OrderLab`, con due sottomazzi e soltanto queste sei carte. Ognuna proviene da una nota distinta di tipo **Base** (**Basic**) che genera una sola carta. Tutte e sei hanno quindi lo stesso numero di tipo di carta e nessuna proviene dalla stessa nota di un’altra.

| Carta | Mazzo | Posizione memorizzata per la carta nuova |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Supponi che tutte e sei siano nuove, che nessuna sia sepolta o sospesa e che nessuna si trovi in un mazzo filtrato. All’inizio non ci sono altre carte, ripetizioni di apprendimento o ripassi. Oggi non hai ancora studiato nulla. `OrderLab` non ha mazzi superiori e i limiti di ripasso applicabili lasciano spazio a tutte e sei le nuove carte.

Seleziona **OrderLab** per studiare. Il suo limite effettivo per le nuove carte è **4**. Quello di `01 First` è **3** e quello di `02 Second` è **2**, senza valori temporanei. Usa **In ordine di selezione** in entrambi i confronti. Per ciascuno, parti dallo stesso stato iniziale della raccolta e fai il calcolo sulla carta, senza rispondere alle carte tra un confronto e l’altro.

Con la selezione **Per mazzo**, Anki procede così.

1. Visita `01 First` prima di `02 Second`, seguendo l’ordine alfabetico.
2. Seleziona **A, B, C** in ordine di posizione. `01 First` ha fornito tre carte e al mazzo padre resta un posto.
3. Seleziona **D** da `02 Second` e raggiunge il limite di quattro carte del mazzo padre.

La sequenza prevista per la prima comparsa delle nuove carte è **A → B → C → D**. E e F restano fuori dalla selezione.

Con **Posizione crescente**, Anki considera le carte dei due sottomazzi nella sequenza **D → A → E → B → F → C**. Le prime quattro rispettano tutti i limiti. Sono due da `02 Second` e due da `01 First`, per un totale di quattro. La selezione si ferma lì.

La sequenza prevista è **D → A → E → B**. C e F restano fuori. Il codice della versione pubblicata applica i limiti del mazzo e del mazzo padre man mano che ammette le carte nella coda. [Codice di selezione](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

`02 Second` può fornire al massimo due carte. Con **Per mazzo** ne fornisce una sola perché `01 First` ha già occupato tre dei quattro posti disponibili. Con **Posizione crescente** entrano due carte per sottomazzo per via delle posizioni di questo esempio. In un’altra raccolta, la distribuzione può essere diversa.

## Fai entrare tutte e sei le carte per distinguere selezione e sequenza

Per un secondo confronto sulla carta, assegna un limite di **6** al mazzo padre, di **3** a `01 First` e di **3** a `02 Second`. Mantieni l’ordinamento **In ordine di selezione**.

| Impostazione di selezione | Limiti per mazzo padre / 01 First / 02 Second | Sequenza prevista alla prima comparsa |
| --- | --- | --- |
| Per mazzo | 6 / 3 / 3 | A → B → C → D → E → F |
| Posizione crescente | 6 / 3 / 3 | D → A → E → B → F → C |

Entrambe le impostazioni selezionano tutte e sei le carte. Cambia solo la sequenza. Se portassi a sei il limite del mazzo padre e lasciassi a due quello di `02 Second`, entrerebbero cinque carte e F resterebbe fuori. I limiti più alti servono solo per questo calcolo sulla carta.

## L’ordinamento agisce solo sulle carte selezionate

Torna ai limiti iniziali di **4 / 3 / 2** e cambia soltanto l’**Ordinamento delle nuove carte**, scegliendo **Casuale**.

| Impostazione di selezione | Carte che l’ordinamento casuale può rimescolare | Carte che non può aggiungere |
| --- | --- | --- |
| Per mazzo | A, B, C, D | E, F |
| Posizione crescente | D, A, E, B | C, F |

Anki rimescola le carte già selezionate. La tabella dice quali carte possono comparire, senza indicare una sequenza casuale precisa. [Codice di ordinamento della versione pubblicata](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

Anche **Per tipo di carta, poi in ordine di selezione** (**Card type, then order gathered**) agisce sulle carte già selezionate. Tutte e sei le carte generate dalle note di tipo Base hanno lo stesso numero di tipo di carta, quindi in questo esempio mantengono l’ordine di selezione.

Per vedere cosa succede quando i tipi differiscono, supponi che Anki abbia già selezionato quattro carte da note con più modelli nell’ordine **W (tipo 2), X (tipo 1), Y (tipo 2), Z (tipo 1)**. L’ordinamento per tipo di carta produce **X → Z → W → Y**. Il tipo 1 viene prima e le carte di ciascun tipo mantengono l’ordine di selezione. L’esempio parte a selezione conclusa e lascia aperta la questione di quali carte della stessa nota entrerebbero in coda con le tue impostazioni per seppellirle.

Il numero indica la posizione del modello di carta all’interno del tipo di nota. È il modello a stabilire se la domanda richiede riconoscimento o produzione. Controlla le domande effettive prima di dare per scontato che l’ordinamento per tipo metta per prime tutte quelle nella direzione originale.

## Controlla le posizioni in Sfoglia prima di cambiarle

Apri **Sfoglia** (**Browse**), scegli la modalità **Carte** (**Cards**) e cerca nel mazzo e nei suoi sottomazzi. Per `OrderLab` usa questa ricerca.

```text
deck:OrderLab is:new
```

Dal menu delle intestazioni, mostra le colonne **Domanda** (**Question**), **Carta** (**Card**), **Mazzo** (**Deck**), **Scadenza** (**Due**) e **Creazione** (**Created**). Per una carta nuova, **Scadenza** mostra la posizione in coda e **Creazione** indica quando è stata creata la nota. Il **Campo di ordinamento** (**Sort Field**) mostra il campo della nota scelto per l’ordinamento. Fare clic sull’intestazione di una colonna per ordinare le righe cambia solo la visualizzazione della tabella. Le posizioni memorizzate e l’impostazione di selezione usata per lo studio restano intatte. [Colonne di Sfoglia nel manuale di Anki (in inglese)](https://docs.ankiweb.net/manual/browsing#columns)

La ricerca `is:new` può includere nuove carte sospese o sepolte. Per queste carte, il valore nella colonna **Scadenza** compare tra parentesi. Per un controllo più mirato, escludi le carte sospese, quelle sepolte e quelle che al momento si trovano in mazzi filtrati.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Se il nome del mazzo contiene spazi, racchiudilo tra virgolette, come in `deck:"My Deck"`. [Ricerche per stato della carta (in inglese)](https://docs.ankiweb.net/manual/searching#card-state) · [Ricerche per mazzo (in inglese)](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes)

Anche con questa ricerca, i limiti e l’esclusione automatica delle carte della stessa nota possono ridurre il numero di carte che entrano nella coda di oggi. [Guida alla differenza tra seppellire e sospendere le carte (in inglese)](/blog/anki-bury-vs-suspend/)

Se le posizioni rispecchiano già l’ordine che vuoi, lasciale come sono. Se devi cambiarle, annota le posizioni attuali, seleziona solo le poche carte nuove che vuoi spostare e usa **Carte → Riposiziona** (**Cards → Reposition**). Prima di confermare, controlla l’opzione **Sposta le posizioni delle carte esistenti** (**Shift position of existing cards**). Può modificare anche la posizione di carte che si trovano più avanti e che non hai selezionato. Se lasci l’opzione disattivata, le nuove posizioni possono coincidere con quelle esistenti. In quel caso, il numero di posizione da solo non basta a prevedere quale carta comparirà prima. [Comando Riposiziona nel manuale di Anki (in inglese)](https://docs.ankiweb.net/manual/browsing#cards)

Puoi cambiare la selezione o l’ordinamento conservando la cronologia di apprendimento e dei ripassi. Per capire da dove viene la sequenza, concentrati sulle posizioni delle nuove carte e sull’ordine di visualizzazione.

## Controlla il mazzo da cui studi e quanti posti restano oggi

Nell’esempio iniziale, se selezioni direttamente `OrderLab::02 Second`, le carte candidate sono D, E e F. Con il limite di due carte, **Posizione crescente** e **In ordine di selezione**, la sequenza prevista è **D → E**. Il mazzo padre ha ancora tutti e quattro i posti disponibili, quindi entrambe le carte possono entrare anche se si applica il suo limite. Se selezioni il mazzo padre con **Per mazzo** e i limiti **4 / 3 / 2**, ottieni **A → B → C → D**.

Se avvii la sessione da `OrderLab`, valgono le sue impostazioni di visualizzazione anche se cambi quelle di `02 Second`. Il mazzo selezionato determina l’ordine di visualizzazione e il limite totale, a cui si affiancano i limiti dei sottomazzi. L’opzione **Applica i limiti a partire dal mazzo superiore** (**Limits start from top**) stabilisce se applicare anche i limiti dei mazzi superiori quando studi direttamente un sottomazzo. [Regole per i sottomazzi (in inglese)](https://docs.ankiweb.net/manual/deck-options#subdecks) · [Opzione per i limiti dei mazzi superiori (in inglese)](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top)

Controlla anche i limiti di ripasso. Per impostazione predefinita, il limite dei ripassi può ridurre il numero di nuove carte disponibili. L’opzione **Le nuove carte ignorano il limite dei ripassi** (**New cards ignore review limit**) modifica questo comportamento. Questa opzione e **Applica i limiti a partire dal mazzo superiore** valgono per tutta la raccolta. Annota come sono impostate prima di stimare quante nuove carte puoi vedere oggi. [Interfaccia dei limiti giornalieri nella versione pubblicata](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

Usa **Anteprima** (**Preview**) in Sfoglia per controllare le domande senza rispondere. Per la prossima sessione di studio normale, annota questi dati.

| Cosa annotare | Cosa puoi verificare |
| --- | --- |
| Mazzo su cui hai fatto clic per studiare, relativo preset e impostazioni di selezione e ordinamento | Quale ordine di visualizzazione vale per la sessione? |
| Carte previste e relative posizioni memorizzate | Il problema riguarda la selezione o la sequenza? |
| Limiti delle nuove carte e dei ripassi, eventuali valori specifici per il mazzo o per oggi e studio già svolto oggi | Quanti posti restano? |
| Limiti dei mazzi superiori e stato delle due opzioni sui limiti valide per tutta la raccolta | Quali altri limiti si applicano? |
| Carte sepolte, sospese, in mazzi filtrati o generate dalla stessa nota | Quali carte candidate potrebbero essere indisponibili? |
| Prime comparse osservate, annotate separatamente dalle ripetizioni di apprendimento | La sequenza delle nuove carte corrisponde a quella prevista? |

Dopo che rispondi a una nuova carta, le ripetizioni di apprendimento possono interrompere la sessione. L’**Ordine delle nuove carte e dei ripassi** (**New/Review Order**) stabilisce se le nuove carte compaiono prima, dopo o in mezzo ai ripassi. La selezione e l’ordinamento delle nuove carte seguono le rispettive impostazioni. Il codice della versione pubblicata combina queste categorie dopo aver ordinato le nuove carte. [Codice di costruzione della coda](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Il controllo è concluso quando le carte selezionate e l’ordine in cui compaiono per la prima volta corrispondono alle previsioni. Se i conti non tornano, conserva le posizioni, le impostazioni, il mazzo selezionato, la versione di Anki e la sequenza osservata. Annota anche gli eventuali componenti aggiuntivi pertinenti, così puoi circoscrivere il problema.

Se vuoi fare un giro di ripasso in più su un argomento, puoi usare un mazzo filtrato. [Guida ai mazzi filtrati senza modificare la programmazione dei ripassi (in inglese)](/blog/anki-filtered-decks-without-rescheduling/)
