---
title: "Anki funziona offline nel 2026? Computer, iPhone, Android e sincronizzazione"
description: "Sì: le app Anki installate su computer, iPhone, iPad e Android possono usare una raccolta locale offline. Scopri cosa richiede internet, come sincronizzare in seguito e come preparare i file multimediali."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "Anki funziona offline"
  - "usare Anki offline"
  - "AnkiMobile funziona offline"
  - "AnkiDroid funziona offline"
  - "sincronizzazione Anki offline"
  - "AnkiWeb offline"
  - "usare Anki senza internet"
---

Anki non deve contattare un server prima di mostrarti la prossima carta. **Nel 2026, le app Anki installate funzionano offline:** Anki su Windows, macOS e Linux, AnkiMobile su iPhone e iPad e AnkiDroid su Android. Ognuna usa una raccolta salvata sul dispositivo, quindi puoi ripassare, creare note e fare le normali modifiche senza internet.

C'è però un dettaglio che può coglierti impreparato: AnkiWeb funziona diversamente. È il servizio di studio e sincronizzazione accessibile dal browser, non un'app Anki utilizzabile offline. Anche un'app installata può usare solo i mazzi e i file multimediali già presenti su quel preciso dispositivo.

**Informazioni verificate:** 16 agosto 2026.

![Un ricercatore sul campo aggiunge una voce a un archivio locale di foto, audio e testi mentre il collegamento radio in montagna è interrotto](/blog/does-anki-work-offline.png)

## La risposta breve, per ogni versione

Il [sito ufficiale di Anki](https://apps.ankiweb.net/) presenta l'app per computer, AnkiMobile per iOS, AnkiDroid per Android e AnkiWeb come parti dello stesso ecosistema. Le loro possibilità di utilizzo offline, però, sono diverse.

| Versione | Funziona offline? | Cosa puoi fare senza internet | Cosa richiede una connessione |
| --- | --- | --- | --- |
| **Anki per computer** su Windows, macOS o Linux | **Sì.** La raccolta e la cartella dei file multimediali sono locali. | Ripassare le carte, aggiungere note, modificare il contenuto delle note e usare i file multimediali già salvati sul computer. | Scaricare mazzi condivisi, sincronizzare con AnkiWeb e recuperare ciò che una carta o un componente aggiuntivo richiede a un servizio online. |
| **AnkiMobile** su iPhone o iPad | **Sì.** L'app conserva una raccolta locale. | Ripassare le carte locali, aggiungere note, modificare il contenuto delle note e riprodurre suoni o mostrare immagini già presenti sul dispositivo. | Completare la prima sincronizzazione della raccolta e dei file multimediali, usare AnkiWeb e accedere a risorse remote. |
| **AnkiDroid** su Android | **Sì.** AnkiDroid conserva la raccolta sul dispositivo Android. | Ripassare le carte locali, aggiungere note, modificare il contenuto delle note e usare i file multimediali presenti sul dispositivo. | Sincronizzare o scaricare il materiale mancante, ottenere mazzi condivisi e usare le funzioni delle carte che dipendono dalla rete. |
| **AnkiWeb** nel browser | **Non ha una modalità offline.** È un servizio online di studio e sincronizzazione. | Non fare affidamento su AnkiWeb quando la connessione viene meno. | Usare una connessione internet oppure passare a un'app installata e preparata in anticipo. |

Puoi quindi usare Anki offline, se intendi un'app installata che contiene già la raccolta giusta. AnkiWeb nel browser continua a richiedere una connessione.

## Ripassi e modifiche offline restano inizialmente sul dispositivo

Quando rispondi alle carte offline, Anki registra i ripassi nella raccolta locale. Continua a pianificare i ripassi in base a quello stato locale. Anche le nuove note e le normali modifiche restano sul dispositivo. Nulla compare su un altro dispositivo finché non ti riconnetti e sincronizzi.

La sincronizzazione con AnkiWeb è facoltativa se studi su un solo dispositivo. Serve a trasferire le modifiche alla raccolta da un dispositivo all'altro. Il [manuale di sincronizzazione di Anki](https://docs.ankiweb.net/syncing.html) spiega che, in condizioni normali, i ripassi e le modifiche alle note effettuati su più dispositivi possono essere uniti. Se la stessa carta è stata ripassata su due dispositivi, entrambe le risposte restano nella cronologia dei ripassi e prevale lo stato derivante dalla risposta più recente.

Questa routine riduce i conflitti di sincronizzazione evitabili:

1. Sincronizza il dispositivo prima di lasciare una connessione affidabile.
2. Ripassa, aggiungi note o correggi il normale testo delle carte offline.
3. Riconnettiti e sincronizza quel dispositivo prima di continuare su un altro.
4. Lascia che anche l'altro dispositivo completi la sincronizzazione prima di apportarvi altre modifiche.

Le modifiche alla struttura della raccolta richiedono più attenzione. Aggiungere un campo, rimuovere un modello di carta, cambiare i tipi di nota e interventi simili possono richiedere una sincronizzazione in una sola direzione, anziché un'unione. In questo caso devi scegliere se conservare la raccolta locale o quella su AnkiWeb; le modifiche presenti dall'altra parte possono essere sostituite.

Durante un viaggio puoi quindi continuare con i normali ripassi e le modifiche alle note, ma rimanda gli interventi complessi sui tipi di nota e sui modelli se più dispositivi offline stanno accumulando modifiche diverse. Se Anki ti chiede di caricare o scaricare la raccolta, fermati e individua quale contiene il lavoro da conservare prima di scegliere la direzione.

## I file multimediali sono locali solo dopo essere arrivati sul dispositivo

Anki salva suoni e immagini separatamente dai dati della raccolta. Sul computer, la [documentazione sui file multimediali](https://docs.ankiweb.net/media.html) spiega che i file allegati o incollati in una nota vengono copiati nella cartella locale `collection.media`. Una volta che un file multimediale si trova in quella cartella, la carta non ha bisogno di internet per caricarlo.

Il punto delicato è la preparazione. La sincronizzazione della raccolta e quella dei file multimediali sono separate, quindi suoni e immagini possono essere ancora in trasferimento quando le carte sono già visibili. La [guida alla sincronizzazione di AnkiMobile](https://docs.ankimobile.net/syncing.html) avverte che alcuni file multimediali possono mancare finché la prima sincronizzazione non è terminata del tutto. Vedere l'elenco completo dei mazzi non dimostra che una raccolta ricca di immagini o audio sia pronta.

Prima di andare offline:

- sincronizza il dispositivo su cui hai aggiunto i file multimediali;
- attendi che la sincronizzazione dei file multimediali sia terminata;
- sincronizza il dispositivo che porterai con te e attendi anche su quello;
- apri carte che usano ogni tipo di immagine e audio di cui avrai bisogno;
- esegui **Controlla media** dove disponibile, per trovare le note che fanno riferimento a file mancanti.

L'ultimo controllo conta soprattutto con i mazzi condivisi. A volte l'autore del mazzo non ha mai incluso un'immagine a cui una carta fa riferimento, quindi continuare a sincronizzare non permette di scaricarla.

I file multimediali locali non rendono ogni carta autosufficiente. Un modello di carta può rimandare a un'immagine, uno script, un font o un'altra risorsa ospitata sul web. I dizionari online, il download di mazzi condivisi e i componenti aggiuntivi che chiamano API remote richiedono comunque una connessione. La sintesi vocale dipende dalla voce e dalla piattaforma: una voce di sistema installata può funzionare offline, mentre una voce fornita da un servizio online no. Prova la funzione precisa che userai, senza presumere che tutte le voci TTS o tutti i componenti aggiuntivi si comportino allo stesso modo.

## Come sincronizzare Anki dopo il lavoro offline

La sincronizzazione di Anki dopo l'uso offline si svolge in due fasi: lavori in locale ora e sincronizzi tramite la rete in seguito.

Quando la connessione torna disponibile, sincronizza il dispositivo che contiene il lavoro svolto offline. Attendi che siano terminate sia la sincronizzazione della raccolta sia quella dei file multimediali. Poi sincronizza il dispositivo successivo prima di ripassare o modificare qualcosa su quello. Questo ordine aiuta a riconoscere lo stato più recente se Anki ti chiede di risolvere un conflitto.

Controlla il risultato: vedere terminare un'animazione non basta come verifica.

- Trova una nota che hai aggiunto offline.
- Controlla che un campo modificato contenga il nuovo testo.
- Guarda la cronologia dei ripassi o la scadenza di una carta a cui hai risposto.
- Apri almeno un'immagine o un file audio appena aggiunto sul secondo dispositivo.

Se hai modificato la stessa nota su due dispositivi, leggi la nota finale invece di dare per scontato che l'unione abbia conservato il testo desiderato. Se compare un pulsante rosso di sincronizzazione o una scelta tra caricamento e download completi, non procedere per abitudine. Un download completo sostituisce le modifiche alla raccolta locale; un caricamento completo sostituisce la raccolta su AnkiWeb, che gli altri dispositivi scaricheranno in seguito.

## Se non hai una connessione regolare, trasferisci la raccolta come file

Anki permette di spostare una raccolta tra dispositivi anche senza un accesso regolare ad AnkiWeb, ma si tratta di un passaggio della raccolta da un dispositivo all'altro, non di un'unione delle modifiche su più dispositivi.

La [guida al trasferimento della raccolta di AnkiMobile](https://docs.ankimobile.net/collection-transfer.html) usa un file `collection.colpkg` che contiene tutti i mazzi e le informazioni di pianificazione dei ripassi. Esporti la raccolta corrente, trasferisci il file con AirDrop o tramite la condivisione di file e lo importi sull'altro dispositivo. Il [manuale di AnkiDroid](https://docs.ankidroid.org/manual.html) descrive una procedura simile tramite USB per trasferire la raccolta tra Android e computer.

Importare un file che contiene l'intera raccolta sostituisce la raccolta già presente sul dispositivo di destinazione. Non permette di unire due raccolte modificate offline in modo indipendente. Scegli un solo dispositivo con la raccolta da usare come riferimento: esporta da quello, importa sul dispositivo successivo, apporta lì le modifiche e trasferisci indietro la raccolta più recente prima di riprendere sul primo dispositivo.

È una soluzione utile per il lavoro sul campo, sulle navi, in luoghi isolati o su reti con restrizioni, dove è possibile trasferire occasionalmente un file ma non sincronizzare regolarmente con il cloud. Per un normale volo o tragitto quotidiano, completare la sincronizzazione con AnkiWeb prima della partenza è più semplice.

## La sincronizzazione non è un backup di Anki

La sincronizzazione mantiene allineati i dispositivi. Una cancellazione accidentale o una modifica indesiderata può quindi propagarsi a tutti i dispositivi sincronizzati.

Le app Anki installate conservano backup locali, ma i file multimediali richiedono un'attenzione a parte. Per esempio, la [guida alle preferenze di AnkiMobile](https://docs.ankimobile.net/preferences.html) spiega che i backup automatici includono carte e statistiche, ma non suoni o immagini. Un'esportazione completa della raccolta che include i file multimediali serve a uno scopo diverso sia dalla sincronizzazione sia dalla cronologia dei backup automatici.

Se ricostruire il mazzo sarebbe faticoso, conserva periodicamente un'esportazione completa con i file multimediali in un posto diverso dal dispositivo che usi ogni giorno. La [guida al backup delle flashcard](/blog/how-to-back-up-flashcards/) spiega come affiancare a questa copia di ripristino un formato testuale portabile e i file sorgente originali.

## Una prova di dieci minuti in modalità aereo

Fai questa prova sul portatile, telefono o tablet preciso che porterai con te. Un test riuscito sul computer non dice nulla sullo stato della cartella dei file multimediali del telefono.

1. Mentre sei online, apri l'app Anki installata e sincronizza. Se il dispositivo è nuovo, completa prima il download iniziale della raccolta.
2. Attendi che la sincronizzazione dei file multimediali sia terminata. Non fermarti appena compaiono i nomi dei mazzi.
3. Apri tutti i mazzi di cui avrai bisogno. Prova alcune carte con immagini, audio, font personalizzati e le funzionalità particolari dei modelli di carta su cui fai affidamento.
4. Attiva la modalità aereo oppure disabilita in altro modo tutte le connessioni di rete.
5. Chiudi completamente Anki, riaprilo e avvia il mazzo che ti serve. Così puoi individuare un flusso di lavoro che funzionava solo perché la schermata era già aperta.
6. Ripassa diverse carte. Aggiungi una nota di prova chiaramente contrassegnata e fai una modifica innocua al testo.
7. Chiudi e riapri l'app mentre sei ancora offline. Verifica che siano rimasti i ripassi, la nuova nota, la modifica e i file multimediali locali.
8. Prova ogni dizionario, voce di sintesi vocale o componente aggiuntivo che pensi di usare. Annota quali parti richiedono la rete.
9. Riconnettiti e sincronizza questo dispositivo. Attendi che siano terminate le fasi relative alla raccolta e ai file multimediali.
10. Sincronizza un secondo dispositivo, poi verifica anche lì la nota di prova, la modifica, lo stato dei ripassi e i file multimediali prima di eliminare il contenuto di prova.

Non usare questa prova per riprogettare i tipi di nota su due dispositivi. Lo scopo è verificare il flusso di lavoro per il viaggio: la raccolta giusta è locale, i file multimediali importanti si aprono, il lavoro offline sopravvive a un riavvio e la sincronizzazione successiva lo trasferisce all'altro dispositivo.

## Anki può accompagnarti in viaggio, se prepari il dispositivo

Le app Anki installate si prestano bene ai viaggi quando vuoi avere un'intera raccolta locale, anziché un piccolo gruppo di carte nella cache. I limiti sono concreti: il dispositivo deve avere già la raccolta e i file multimediali, AnkiWeb funziona solo online e le funzioni delle carte che si appoggiano alla rete continuano a richiedere una connessione.

Se stai scegliendo un'app da usare in viaggio, il [confronto tra app di flashcard offline](/blog/best-offline-flashcards-app/) applica gli stessi test su carte, modifiche, progressi, file multimediali e sincronizzazione successiva a cinque prodotti. Se stai valutando altri strumenti di studio per motivi che vanno oltre la connessione, leggi [Anki e Nibomo a confronto](/blog/anki-vs-flashcards-open-source-app/).

La risposta pratica a «Anki funziona offline?» è sì, su computer, iPhone, iPad e Android, una volta che quel preciso dispositivo contiene la raccolta e i file multimediali di cui hai bisogno. Sincronizza prima di partire, fai una prova in modalità aereo e, quando ti riconnetti, sincronizza per primo il dispositivo su cui hai lavorato offline.
