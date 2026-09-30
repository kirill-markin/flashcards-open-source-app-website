---
title: "Le migliori impostazioni FSRS per Anki nel 2026: ritenzione, passi e carico di ripasso"
description: "Come scegliere impostazioni FSRS prudenti per ritenzione desiderata, passi di apprendimento, ottimizzazione, riprogrammazione e carico di studio in Anki 26.08 con FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "impostazioni FSRS"
  - "migliori impostazioni FSRS"
  - "impostazioni FSRS Anki"
  - "ritenzione desiderata FSRS"
  - "passi di apprendimento FSRS"
  - "simulatore FSRS"
  - "ottimizzare parametri FSRS"
  - "FSRS-6"
---

Portare la ritenzione desiderata di Anki dal 90% al 95% sembra una piccola modifica. Il lavoro da fare, però, non aumenta solo del cinque per cento. Al crescere dell'obiettivo, FSRS deve accorciare gli intervalli, e una raccolta che studi da tempo può generare una coda di ripassi molto più pesante. Se attivi anche **Reschedule cards on change**, l'opzione che riprogramma le carte quando modifichi le impostazioni, una parte di quel carico può arrivare subito.

Le migliori impostazioni FSRS non sono quindi una sequenza di parametri da copiare. Sono una serie di decisioni: stabilisci quanto lavoro puoi sostenere, scegli un obiettivo di ricordo compatibile con quel tempo, adatta il modello alla tua cronologia e lascia invariate le scadenze esistenti, a meno che tu non voglia ricalcolarle consapevolmente.

I nomi dei controlli e i comportamenti descritti qui corrispondono alla [versione Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) e alle sue opzioni per FSRS-6. Se prima delle impostazioni vuoi capire il modello, leggi [Che cos'è FSRS?](/blog/what-is-fsrs/). Se stai ancora scegliendo un algoritmo di pianificazione, parti da [FSRS e SM-2 a confronto](/blog/fsrs-vs-sm-2/).

> **Trasparenza:** sono Kirill Markin e sviluppo [Nibomo](/it/features/). Anki offre l'adattamento personalizzato dei parametri e simulatori sperimentali del carico di studio che Nibomo al momento non offre. Il confronto verso la fine dell'articolo chiarisce queste differenze.

**Informazioni verificate:** 8 settembre 2026.

![Un operatore di una chiusa prova il flusso dell'acqua su un modello in scala prima di intervenire sulla chiusa reale](/blog/fsrs-settings-v2.png)

## La risposta breve: parti da qui

Per la maggior parte di chi usa Anki, queste sono scelte iniziali prudenti, non impostazioni universali:

| Impostazione o abitudine | Scelta iniziale prudente | Perché |
| --- | --- | --- |
| Ritenzione desiderata | `0.90` | È il valore predefinito di Anki e bilancia ricordo e carico di ripasso. |
| Parametri FSRS | Usa **Optimize Current Preset**; non incollare né modificare a mano i pesi | L'ottimizzatore adatta il modello alla tua cronologia dei ripassi. |
| Frequenza di ottimizzazione | Al massimo una volta al mese; di solito basta ogni qualche mese | Anki non consiglia di ottimizzare spesso. |
| Passi di apprendimento | Mantieni pochi passi, da completare nella stessa giornata | Lunghe sequenze di passi ritardano l'intervento della pianificazione basata sul modello. |
| Passi di riapprendimento | Riducili al minimo, tutti inferiori a un giorno | Lo stesso vincolo vale dopo un errore su una carta in ripasso. |
| Reschedule cards on change | Disattivato | Le nuove impostazioni possono entrare in vigore con i ripassi futuri senza ricostruire la coda di oggi. |
| Intervallo massimo | Mantieni il valore predefinito di 100 anni | Un limite più breve fa tornare più spesso le carte ormai consolidate. |
| Nuove carte al giorno | Scegli in base al carico che puoi sostenere | Ogni nuova carta richiede apprendimento ora e ripassi in seguito. |
| Again oppure Hard | Again indica un mancato ricordo; Hard un ricordo riuscito ma faticoso | Valutazioni sbagliate forniscono al modello una cronologia sbagliata. |

Se i ripassi sono gestibili e le tue impostazioni sono già simili a queste, potrebbe non esserci nulla da correggere. Mettere a punto le impostazioni non equivale a studiare.

## Tieni separate tre decisioni

Spesso si trattano ritenzione desiderata, parametri FSRS e carico quotidiano come se fossero un'unica cosa. Controllano aspetti diversi:

- **La ritenzione desiderata** è il tuo obiettivo di ricordo. La scegli in base ai tuoi obiettivi e al tempo disponibile per studiare.
- **I parametri FSRS** adattano il modello della memoria alla cronologia dei ripassi. Li calcola l'ottimizzatore di Anki.
- **I limiti di nuove carte e ripassi** regolano quanto materiale entra nel sistema e quanti ripassi in scadenza Anki può mostrarti ogni giorno.

Questa distinzione rende molto più facile capire cosa non funziona. Una coda lunga non significa automaticamente che i parametri siano sbagliati. Un mazzo importante non richiede automaticamente un gruppo di opzioni separato per i parametri. E abbassare la ritenzione desiderata non risolve un ritmo di introduzione di nuove carte che non è mai stato sostenibile.

## Scegli la ritenzione desiderata in base al carico, non all'ambizione

La ritenzione desiderata indica a FSRS quale probabilità vuoi avere di ricordare una carta al momento del ripasso previsto. Con `0.90`, FSRS pianifica i ripassi mirando a una probabilità stimata di ricordo del 90%. È un obiettivo del modello, non la garanzia che ogni sessione o esame produca esattamente il 90% di risposte corrette.

Il compromesso vale in entrambe le direzioni:

- Aumentando la ritenzione desiderata, gli intervalli si accorciano e i ripassi aumentano.
- Diminuendola, gli intervalli si allungano e gli errori aumentano.
- Se la abbassi troppo, il riapprendimento aggiuntivo dopo gli errori può assorbire parte del tempo che speravi di risparmiare.

Anki usa il 90% come valore predefinito. La sua [guida alla ritenzione desiderata](https://docs.ankiweb.net/deck-options.html#desired-retention) avverte che il carico cresce rapidamente quando l'obiettivo si avvicina al 100% e consiglia di restare sotto il 97%. La [spiegazione ufficiale della ritenzione ottimale](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) affronta l'altro estremo della curva: anche una ritenzione molto bassa può essere inefficiente, perché le carte dimenticate richiedono più lavoro.

Parti da `0.90` e cambialo solo dopo aver valutato il carico. Un obiettivo più alto può avere senso per materiale che avrebbe un costo concreto dimenticare. Uno più basso può avere senso quando i ripassi tolgono spazio ad attività di studio più utili. Nessuna delle due modifiche corregge carte vaghe, valutazioni poco sincere o un eccesso di nuove carte.

### La ritenzione può variare per mazzo; i parametri dipendono dal gruppo di opzioni

In Anki 26.08, **Desired retention** può essere applicata al gruppo di opzioni condiviso (**Shared Preset**) oppure al singolo mazzo (**This deck**). Puoi quindi tenere mazzi affini nello stesso gruppo di opzioni per i parametri, assegnando però a un singolo mazzo un obiettivo di ritenzione diverso.

Usa questa impostazione specifica quando cambia il costo di dimenticare. Un mazzo per un esame di abilitazione può giustificare un obiettivo più alto di un mazzo di consultazione poco prioritario, anche se entrambi usano lo stesso modello adattato alla cronologia.

Scegliere **This deck** non rende i parametri FSRS specifici per quel mazzo. Per impostazione predefinita, Anki adatta i parametri usando la cronologia dei ripassi di tutti i mazzi assegnati al gruppo di opzioni corrente. Se alcuni gruppi di mazzi hanno una difficoltà soggettiva molto diversa, il modo previsto per adattare i parametri separatamente è usare gruppi di opzioni distinti.

## Help Me Decide e Simulator rispondono a domande diverse

Anki 26.08 offre due controlli sperimentali separati:

- **Help Me Decide (Experimental)** mostra una curva personalizzata del rapporto tra ritenzione e carico. Usalo per capire: «Quale obiettivo di ritenzione è compatibile con i ripassi o i minuti che posso sostenere?»
- **FSRS Simulator (Experimental)** stima come una configurazione potrebbe comportarsi nel tempo. Usalo per confrontare modifiche a ritenzione, ritmo di introduzione di nuove carte, limiti di ripasso e intervallo massimo.

La [documentazione di FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) elenca i suoi dati di ingresso principali:

- giorni da simulare
- nuove carte aggiuntive da simulare
- nuove carte al giorno
- numero massimo di ripassi al giorno
- intervallo massimo
- ritenzione desiderata e parametri FSRS del gruppo di opzioni

La simulazione usa anche gli stati di memoria reali delle carte nel gruppo di opzioni. Per una raccolta studiata da tempo, questo la rende più utile che moltiplicare i ripassi in scadenza oggi per una percentuale generica.

Simula tre scenari prima di modificare la configurazione in uso:

1. La ritenzione e il ritmo di introduzione di nuove carte attuali.
2. L'obiettivo di ritenzione che stai considerando.
3. Lo stesso obiettivo con meno nuove carte al giorno.

La terza simulazione verifica un'alternativa comune: mantenere l'obiettivo di ricordo e rallentare l'arrivo di nuovo materiale. Se la previsione diventa gestibile, non serve accettare di dimenticare di più solo per alleggerire la coda. La guida [Quante nuove flashcard al giorno?](/blog/how-many-new-flashcards-per-day/) approfondisce il ritmo di introduzione delle carte.

Entrambi gli strumenti producono stime. Giorni saltati, carte modificate, nuovo materiale e cambiamenti nelle abitudini di valutazione possono far divergere il carico reale dal grafico. Usa il confronto per scegliere una direzione, non per prometterti una coda precisa tra mesi.

Le guide meno recenti possono citare **Compute Minimum Recommended Retention**, o CMRR. Anki ha rimosso questa funzione nella versione 25.07. Non è il metodo attuale per scegliere la ritenzione desiderata.

## Ottimizza i parametri FSRS usando la tua cronologia

La ritenzione desiderata esprime il tuo obiettivo. I parametri FSRS descrivono come il modello si adatta ai tuoi ripassi.

In Anki 26.08, usa **Optimize Current Preset** per adattare i parametri del gruppo di opzioni attivo. Per impostazione predefinita, Anki include la cronologia dei ripassi di tutti i mazzi che usano quel gruppo; puoi modificare la ricerca se vuoi restringere l'insieme di dati usato. **Optimize All Presets** aggiorna tutti i gruppi di opzioni in un'unica operazione.

Non inserire i pesi a mano e non copiarli da Reddit, da un video o dal mazzo di qualcun altro. Le sue carte, i tempi dei suoi ripassi e le sue abitudini di valutazione non sono la tua cronologia. Una sequenza ben ordinata di [pesi FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) non è una strategia di studio che puoi trasferire da una persona all'altra.

Ripeti l'ottimizzazione solo dopo aver accumulato una quantità significativa di nuovi ripassi. Il manuale di Anki dice che una volta al mese è sufficiente, mentre le indicazioni nell'app 26.08 dicono che basta una volta ogni qualche mese. La conclusione pratica è la stessa: non c'è motivo di ottimizzare ogni settimana, tanto meno dopo ogni sessione.

### Esegui il controllo diagnostico sul gruppo di opzioni corrente

Attiva **Check health when optimizing (slow)** quando vuoi che Anki valuti quanto bene FSRS riesce ad adattarsi alla cronologia del gruppo di opzioni corrente. Questo controllo funziona con **Optimize Current Preset**, non con **Optimize All Presets**.

Se il risultato è scarso, esamina i dati prima di toccare i pesi. La [guida ai parametri FSRS di Anki](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) indica alcune cause comuni: meno di qualche centinaio di ripassi, l'uso di Hard dopo un errore e il mancato uso di Again quando non si ricorda la risposta. Se hai poca cronologia utile, mantieni i valori predefiniti e ottimizza più avanti, invece di prendere in prestito i parametri di un altro utente.

## Again indica un mancato ricordo; Hard una risposta riuscita

Questa abitudine conta quanto qualsiasi impostazione.

Usa **Again** quando non sei riuscito a dare la risposta richiesta o hai risposto in modo sbagliato. Usa **Hard** solo quando hai ricordato correttamente, ma con molta fatica o esitazione. Anche Good ed Easy indicano risposte riuscite.

Premere Hard per evitare l'intervallo breve di Again registra un successo dopo un fallimento. FSRS impara così dall'evento sbagliato. Scegli il pulsante in base a quanto sei riuscito a ricordare, non all'intervallo che preferisci tra quelli mostrati sopra i pulsanti.

Le carte ambigue rendono più difficile valutarsi con sincerità. Se una domanda chiede cinque informazioni e ne ricordi quattro, il problema di pianificazione è nato nell'editor. Dividi o riscrivi la carta. Per le carte che continui a sbagliare nonostante i ripassi, leggi [Come correggere le flashcard ostinate, o leech](/blog/how-to-fix-leech-flashcards/).

## Mantieni brevi i passi di apprendimento FSRS, oppure lasciali vuoti consapevolmente

I passi di apprendimento e riapprendimento stabiliscono quando rivedere una carta a breve distanza prima che subentri la normale pianificazione a lungo termine. Non sono un altro obiettivo di ritenzione.

La guida FSRS di Anki consiglia due vincoli:

- ogni passo deve essere inferiore a un giorno e completabile nella stessa giornata
- il numero di ripetizioni nella stessa giornata deve restare ridotto

Lunghe sequenze come `1m 10m 1d 3d` trasferiscono in FSRS una vecchia abitudine di SM-2. I passi di un giorno o più ritardano la pianificazione basata sul modello e possono produrre etichette poco chiare sui pulsanti, per esempio un intervallo per Hard più lungo di quello per Good.

Una sequenza compatta come `1m 10m`, con un passo di riapprendimento di `10m`, è un punto di partenza prudente se si adatta alle tue sessioni. Più ripetizioni nella stessa giornata non sono automaticamente migliori.

Anki 26.08 permette anche di lasciare vuoto il campo dei passi di apprendimento, quello dei passi di riapprendimento o entrambi. Con FSRS attivo, il campo vuoto delega a FSRS la relativa pianificazione a breve termine. È una funzione sperimentale e l'intervallo di Again può essere di un giorno o più. Mantieni passi manuali brevi se ti serve un ritorno prevedibile nella stessa giornata; svuota un campo solo se accetti consapevolmente che sia FSRS a scegliere quei tempi.

## Lascia disattivato Reschedule cards on change per una transizione graduale

Con **Reschedule cards on change** disattivato, come previsto dall'impostazione predefinita, attivare FSRS o cambiare ritenzione desiderata o parametri non riscrive subito le scadenze esistenti. La nuova configurazione si applica man mano che ripassi le carte in futuro, quindi la coda cambia gradualmente.

Salvare una di queste modifiche a FSRS con l'opzione attiva ricalcola immediatamente le scadenze. A seconda del nuovo obiettivo e degli stati delle carte, molte carte possono diventare da ripassare tutte insieme. Anki aggiunge anche voci alla cronologia dei ripassi per le carte riprogrammate, aumentando le dimensioni della raccolta.

Questa opzione è utile solo quando vuoi davvero ricalcolare retroattivamente la pianificazione. Per una raccolta studiata da tempo:

1. Crea un backup aggiornato e assicurati di sapere come annullare la modifica o ripristinarlo.
2. Esegui il Simulator con le impostazioni proposte.
3. Scegli una sola modifica alla configurazione; non combinare più esperimenti.
4. Quando salvi, attiva la riprogrammazione solo se vuoi riscrivere subito le scadenze e puoi gestire il risultato.

Anki consiglia esplicitamente un backup quando si passa da SM-2 con la riprogrammazione attiva. La [guida al backup delle flashcard](/blog/how-to-back-up-flashcards/) spiega più in generale perché la procedura di recupero conta quanto il file di backup.

## Mantieni ampio l'intervallo massimo

L'intervallo massimo predefinito di Anki è di 100 anni. Sembra strano finché non ricordi che è un limite superiore, non la promessa che ogni carta consolidata sparirà per un secolo.

Abbassare il limite costringe le carte che conosci bene a tornare prima e aumenta il carico. Quando si raggiunge il limite, Hard, Good ed Easy possono mostrare tutti lo stesso intervallo, perché nessuno può superare il massimo.

Un intervallo massimo più breve può essere ragionevole quando un esame impone una scadenza concreta, il materiale cambia spesso o una norma professionale impone di rivedere il materiale periodicamente, a prescindere dalla probabilità stimata di ricordarlo. Coordina quel limite con il calendario e il Simulator, invece di scegliere un numero piccolo per ansia. [Come preparare un esame con FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) tratta questo caso più specifico.

Per il normale apprendimento a lungo termine, mantieni ampio il limite. La ritenzione desiderata regola già il momento in cui la probabilità stimata di ricordo deve far scattare un ripasso.

## Il ritmo delle nuove carte fa parte della scelta del carico

FSRS può distribuire i ripassi; non può rendere sostenibile un afflusso illimitato di materiale. Ogni nuova carta richiede apprendimento ora e ripassi in seguito.

Quando la coda è troppo pesante, controlla questi aspetti prima di abbassare la ritenzione desiderata:

- nuove carte al giorno
- importazioni consistenti o grandi lotti di carte generate
- un limite massimo di ripassi che continua a nascondere lavoro in scadenza
- carte ostinate o formulate in modo vago che richiedono continui tentativi
- giorni di ripasso saltati

Usa **Additional new cards to simulate** quando sai che un mazzo crescerà. Una previsione basata solo sulla raccolta attuale non rappresenterà il carico dopo un'importazione consistente.

Se il risultato è troppo alto, riduci le nuove carte e simula di nuovo. In questo modo mantieni l'obiettivo di ricordo senza chiedere all'algoritmo di accettare più dimenticanze.

## Anki e Nibomo offrono controlli FSRS diversi

Entrambi i prodotti usano FSRS-6, ma le impostazioni FSRS di Anki non hanno tutte un equivalente diretto in Nibomo.

| Funzionalità | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Ritenzione desiderata | **Shared Preset** o **This deck** | Configurabile per spazio di lavoro; valore predefinito `0.90` |
| Parametri FSRS | **Optimize Current Preset** o **Optimize All Presets** a partire dalla cronologia dei ripassi | I pesi predefiniti ufficiali di FSRS-6 sono fissi e non configurabili dall'utente nella v1 |
| Passi di apprendimento | Configurabili; la pianificazione di FSRS con il campo vuoto è sperimentale | Configurabili per spazio di lavoro; valore predefinito `1m 10m` |
| Passi di riapprendimento | Configurabili; la pianificazione di FSRS con il campo vuoto è sperimentale | Configurabili per spazio di lavoro; valore predefinito `10m` |
| Intervallo massimo | Valore predefinito di 100 anni | Valore predefinito di 36.500 giorni, pari a 100 anni |
| Modifiche alle impostazioni | Ripassi futuri per impostazione predefinita; riprogrammazione retroattiva facoltativa | Solo ripassi futuri; le scadenze esistenti non vengono ricalcolate |
| Strumenti per il carico di studio | **Help Me Decide (Experimental)** e **FSRS Simulator (Experimental)** | Nessun simulatore equivalente del carico di studio nella v1 |

Nibomo usa le valutazioni standard Again, Hard, Good ed Easy e conserva lo stato di memoria FSRS di ogni carta. I suoi algoritmi di pianificazione nel backend, in iOS e in Android sono implementazioni indipendenti mantenute coerenti nel comportamento; il flusso di ripasso web riutilizza quello del backend invece di aggiungere una quarta copia.

Questi limiti e valori predefiniti sono documentati nella [specifica pubblica della pianificazione FSRS di Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Il compromesso è semplice: Nibomo offre una configurazione FSRS-6 pratica a livello di spazio di lavoro, mentre Anki permette di scegliere con più precisione a quali mazzi applicare le impostazioni, adattare i parametri alla propria cronologia e simulare il carico. Se questi controlli sono essenziali, Anki è la scelta più adatta.

## Una procedura più prudente per una raccolta studiata da tempo

Se hai già mesi o anni di cronologia dei ripassi, segui quest'ordine:

1. **Correggi il modo in cui usi le valutazioni.** Again indica un mancato ricordo; Hard un ricordo riuscito ma faticoso.
2. **Ottimizza il gruppo di opzioni corrente.** Adatta il modello alla tua cronologia invece di modificare o copiare i pesi.
3. **Esegui il controllo diagnostico se serve.** Tratta una cronologia scarsa o incoerente come un problema nei dati.
4. **Usa Help Me Decide.** Scegli un intervallo di ritenzione in base ai ripassi o ai minuti che puoi sostenere.
5. **Esegui il Simulator.** Confronta la configurazione attuale, l'obiettivo proposto e un ritmo ridotto di nuove carte.
6. **Modifica un solo valore nella configurazione in uso.** Intervieni prima sulla ritenzione o sulle nuove carte, poi osserva la coda reale.
7. **Mantieni brevi i passi.** Elimina le sequenze di apprendimento e riapprendimento che durano giorni; usa i campi vuoti solo come esperimento.
8. **Mantieni ampio l'intervallo massimo.** Riducilo solo in presenza di una scadenza o di un requisito preciso.
9. **Lascia disattivata la riprogrammazione.** Se devi ricalcolare subito le scadenze, fai prima un backup e preparati alla coda risultante.

Questa sequenza mantiene reversibili il più a lungo possibile le modifiche a una pianificazione consolidata. Aiuta anche a distinguere tre problemi diversi: come il modello si adatta alla cronologia, quanto vuoi ricordare e quanto nuovo materiale aggiungi. Così è più facile capire su quale impostazione intervenire.

## Domande frequenti sulle migliori impostazioni FSRS

### Il 90% è la ritenzione desiderata migliore per FSRS?

È il punto di partenza generale più prudente, perché è il valore predefinito di Anki ed evita il tratto della curva in cui il carico cresce più rapidamente, vicino ai valori di ritenzione più alti. Il valore migliore per un singolo mazzo dipende dal costo di dimenticare e dal lavoro che puoi sostenere. Consulta **Help Me Decide (Experimental)** prima di modificarlo.

### Dovrei impostare la ritenzione desiderata al 95%?

Solo dopo aver valutato i ripassi o i minuti aggiuntivi. Un mazzo ben fatto e importante può giustificare il 95%; una grande raccolta studiata per interesse può diventare inutilmente pesante. Non attivare contemporaneamente la riprogrammazione retroattiva, a meno che tu non voglia consapevolmente ricalcolare subito le scadenze.

### Ogni quanto dovrei ottimizzare i parametri FSRS?

Una volta al mese è già abbastanza frequente, e le indicazioni nell'app Anki 26.08 dicono che basta una volta ogni qualche mese. Ottimizza dopo aver accumulato una quantità significativa di nuova cronologia, non con cadenza quotidiana o settimanale.

### I passi di apprendimento FSRS dovrebbero essere vuoti?

Lasciare vuoti i passi di apprendimento o riapprendimento permette ad Anki 26.08 di delegare a FSRS la relativa pianificazione a breve termine. La funzione è sperimentale e Again può essere programmato a distanza di un giorno o più. Pochi passi nella stessa giornata restano la scelta prudente.

### Cambiare le impostazioni FSRS riprogramma le carte Anki esistenti?

Non per impostazione predefinita. Con **Reschedule cards on change** disattivato, le nuove impostazioni influenzano i ripassi futuri senza ricostruire subito la coda. Attivarlo cambia le scadenze e può rendere molte carte immediatamente da ripassare, quindi fai prima un backup.

### CMRR fa ancora parte di Anki?

No. Anki ha rimosso Compute Minimum Recommended Retention nella versione 25.07. In Anki 26.08, usa **Help Me Decide (Experimental)** e **FSRS Simulator (Experimental)** per confrontare la ritenzione con il carico stimato.

### Nibomo usa le stesse impostazioni di Anki?

Usa FSRS-6 e permette di regolare ritenzione desiderata, passi di apprendimento, passi di riapprendimento, intervallo massimo e fuzz per ogni spazio di lavoro. Non riproduce l'intero modello di impostazioni di Anki: nella v1 i pesi sono fissi, le modifiche si applicano solo ai ripassi futuri e non sono disponibili né l'ottimizzazione personalizzata dei parametri né un simulatore del carico di studio.

## Stabilisci il carico prima della percentuale

Buone impostazioni FSRS fanno sì che la coda dei ripassi risponda a un vero piano di studio. Parti dal 90%, stima il lavoro, controlla il ritmo delle nuove carte e aumenta la ritenzione solo quando ricordare di più vale i ripassi aggiuntivi. Mantieni brevi i passi, ampio l'intervallo massimo e sincere le valutazioni.

Poi esci dalla schermata delle impostazioni. All'algoritmo servono ripassi regolari più di un'altra serata passata a ritoccarlo.
