---
title: "Alternative a RemNote nel 2026: opzioni gratuite e open source"
description: "Confronta le alternative a RemNote per appunti, PDF, flashcard, prezzi e self-hosting. Scopri cosa si trasferisce, cosa si perde e come provare il passaggio in sicurezza."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "alternativa a remnote"
  - "alternative a remnote"
  - "remnote open source"
  - "alternativa gratuita a remnote"
  - "remnote vs anki"
  - "alternativa open source a remnote"
  - "alternativa a remnote self hosted"
  - "app flashcard offline"
---

RemNote chiama la sua esportazione per Anki **Flashcards Only**, cioè solo flashcard. I punti elenco senza carte vengono saltati e il pacchetto non riproduce gli appunti collegati, i PDF o il modo in cui lavori con Reader. Un'altra app può accettare ogni domanda e risposta, lasciandosi comunque alle spalle il sistema che rendeva utili quelle carte.

La migliore **alternativa a RemNote** risolve il motivo per cui vuoi cambiare senza farti perdere la parte di RemNote che funziona ancora bene. Per alcuni il problema è il prezzo. Per altri contano i normali file locali, un sistema di flashcard più completo o software di cui possano leggere il codice e che possano gestire in proprio.

> **Per trasparenza:** sono Kirill Markin e sviluppo [Nibomo](/it/), uno dei prodotti confrontati qui. Nibomo non sostituisce tutte le funzioni di RemNote. Tra le opzioni di questo confronto, RemNote offre la migliore integrazione tra appunti e PDF, mentre Anki ha il sistema di flashcard e i formati di migrazione più maturi.

**Informazioni e prezzi verificati il:** 31 agosto 2026. I prezzi indicati sono quelli pubblici statunitensi, con fatturazione annuale dove specificato; imposte, area geografica, app store e condizioni della beta possono modificare l'importo.

![Un conservatore d'archivio prova a trasferire una piccola parte di un dossier di studio con contenuti collegati, lasciandolo intatto, verso sistemi separati di schede, file e blocchi](/blog/remnote-alternative.png)

## Parti dal motivo per cui vuoi cambiare

- **Prezzo:** verifica se RemNote Free copre già ciò che fai davvero. Include appunti, flashcard e dispositivi sincronizzati illimitati, ma limita i documenti annotati e alcune funzioni avanzate.
- **Flashcard troppo legate agli appunti:** prova Anki. Lascia più spazio a carte, modelli, importazioni e FSRS come elementi centrali del sistema.
- **Appunti in normali file locali:** dividi il lavoro tra Obsidian per gli appunti Markdown e Anki per il ripasso. L'integrazione è minore, ma è molto più chiaro quali dati controlli direttamente.
- **Appunti collegati open source, con PDF e flashcard integrate:** Logseq è l'opzione più vicina, con una riserva importante nel 2026: la nuova versione basata su database è in beta, la nuova app iOS e la sincronizzazione in tempo reale sono in alpha e la nuova app Android non è ancora disponibile per i test.
- **Codice sorgente e self-hosting per un sistema dedicato alle flashcard:** considera Nibomo se ti bastano carte fronte/retro e accetti di ripartire da zero con la pianificazione dei ripassi e di occuparti della non semplice gestione su AWS.
- **Lettura dei PDF, evidenziazioni collegate e flashcard nello stesso posto:** resta con RemNote. Nessuna delle altre opzioni riproduce bene questo modo di studiare.

È facile trascurare quest'ultima risposta. Cambiare non è un passo avanti se l'alternativa soddisfa una preferenza di licenza ma compromette la sessione di studio di domani.

## Alternative a RemNote: tabella per scegliere

| Opzione | Motivo principale per sceglierla | Appunti e PDF | Pianificazione dei ripassi | Uso offline e controllo dei dati | Prezzo verificato il 31 agosto 2026 | Limite principale della migrazione |
|---|---|---|---|---|---|---|
| **Restare con RemNote** | Appunti collegati, lettura delle fonti e flashcard devono stare insieme | Archivio di conoscenze nativo e Reader con evidenziazioni dei PDF, appunti e carte collegati | FSRS-6 in beta, da attivare manualmente, con addestramento dei pesi; SM-2 resta l'impostazione predefinita | Le app desktop e mobili funzionano offline dopo l'accesso; su desktop si possono usare archivi di conoscenze esclusivamente locali | Gratuito; Pro a 8 USD/mese con fatturazione annuale; Pro con IA a 18 USD/mese con fatturazione annuale | L'esportazione nativa è la più adatta per ripristinare i dati in RemNote, ma al momento esclude immagini e PDF |
| **Anki** | Carte, modelli, componenti aggiuntivi e conservazione fedele della collezione vengono prima di tutto | Nessuno spazio integrato per appunti collegati o lettura dei PDF | Controlli FSRS maturi, parametri ottimizzati, ritenzione desiderata e simulazione del carico di lavoro | Collezioni locali su desktop e dispositivi mobili; nucleo desktop open source e server ufficiale di sincronizzazione gestibile in proprio | Desktop, AnkiWeb e AnkiDroid gratuiti; AnkiMobile ufficiale per iOS a pagamento | RemNote esporta le carte in `.apkg`, non l'intero sistema di appunti; verifica dati di pianificazione e contenuti multimediali con un'importazione di prova |
| **Obsidian + Anki** | Vuoi normali appunti Markdown locali senza rinunciare a un pianificatore di flashcard maturo | Obsidian gestisce appunti e allegati locali; Anki gestisce le carte; manca un percorso integrato dalla lettura al ripasso | FSRS di Anki | Vault Markdown locale e collezione Anki locale; Obsidian è gratuito ma proprietario | Obsidian gratuito; Sync facoltativo da 4 USD/mese con fatturazione annuale; prezzi di Anki come sopra | Le esportazioni Markdown e Anki di RemNote creano due sistemi; i collegamenti attivi tra appunti, fonti e carte non si trasformano in un unico sistema portabile |
| **Logseq** | Cerchi proprio un'app open source per appunti gerarchici, con PDF e carte integrate | Blocchi collegati, annotazione dei PDF e ripasso delle carte con quattro valutazioni | Pianificatore integrato con quattro valutazioni; la [documentazione collega il nuovo algoritmo](https://github.com/logseq/docs/blob/master/db-version.md#cards) al progetto FSRS originale | App con licenza AGPL; i dati della versione basata su database si possono esportare in SQLite, EDN o Markdown standard con perdita di informazioni | App gratuita e open source | La versione attuale basata su database è in beta; la nuova app iOS e la sincronizzazione in tempo reale sono in alpha, la nuova app Android non è ancora disponibile per i test e lo stato SRS del vecchio Logseq non è compatibile con il nuovo algoritmo delle carte |
| **Nibomo** | Vuoi carte semplici in uno stack web, mobile e backend aperto | Nessun archivio di appunti collegati, collegamento di ritorno, lettore PDF o app desktop nativa | FSRS-6 con pesi fissi e meno controlli di regolazione rispetto ad Anki o RemNote | Web, iOS e Android progettati per funzionare offline; intero stack con licenza MIT e procedura per la produzione su AWS | App ospitata gratuita durante la beta; il self-hosting aggiunge costi di infrastruttura e dei fornitori | Nessuna importazione diretta da RemNote o Anki; i contenuti si possono ricostruire, ma cronologia dei ripassi e stato FSRS non vengono trasferiti |

Non è una classifica delle funzioni. Chi studia soprattutto sui PDF può perdere più di quanto guadagni dalla licenza passando all'opzione «più aperta». Chi ha un semplice mazzo di vocaboli potrebbe invece pagare per un sistema di appunti che non usa più. Parti dalla riga che descrive il tuo problema, poi verifica nella pratica cosa riesci a trasferire.

Gratuito e open source sono due criteri distinti. RemNote Free e Obsidian non fanno pagare le funzioni di base, ma sono proprietari. Il codice del nucleo desktop di Anki, di Logseq e di Nibomo è pubblico; AnkiMobile resta un'app iOS a pagamento e ospitare Nibomo in proprio comporta comunque costi cloud.

## Resta con RemNote se il valore sta nell'integrazione

RemNote unisce passaggi che la maggior parte delle alternative separa. Il suo [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) può tenere aperto un PDF accanto agli appunti, inserire riferimenti che rimandano a specifici passaggi evidenziati e trasformare appunti o evidenziazioni in flashcard. Il piano Free consente di annotare tre documenti; l'attuale [pagina dei prezzi](https://www.remnote.com/pricing) indica documenti annotati illimitati nel piano Pro.

L’algoritmo che pianifica i ripassi non è più un motivo ovvio per cambiare. RemNote documenta ora [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) come opzione in beta da attivare manualmente. Dopo almeno 1.000 ripassi, può addestrare i pesi sulla tua cronologia. Anki offre ancora controlli più approfonditi, ma chi apprezza gli appunti e i PDF di RemNote non deve abbandonarli solo per usare FSRS.

Anche l'uso offline va oltre il semplice «funziona in una scheda del browser aperta». Le [app desktop e mobili](https://help.remnote.com/en/articles/6752029-offline-mode) di RemNote consentono di modificare appunti e ripassare carte offline dopo l'installazione e l'accesso. L'app desktop conserva una copia locale completa di immagini e PDF. Su mobile e web i contenuti multimediali non salvati nella cache potrebbero mancare, e l'app web non può avviarsi da una scheda chiusa o ricaricata senza connessione.

Se hai iniziato a cercare un'**alternativa gratuita a RemNote**, prova il piano Free prima di trasferire tutto. Se il problema è l'accesso al codice sorgente, la modalità locale non equivale all'open source o al self-hosting. La guida dedicata a [RemNote e all'open source](/blog/is-remnote-open-source/) spiega in dettaglio questa distinzione.

## RemNote vs Anki: scegli cosa mettere al centro

La distinzione utile nel confronto **RemNote vs Anki** non è «appunti o niente appunti». Anche Anki memorizza note, ma una nota Anki è un insieme di campi che i [modelli di carta](https://docs.ankiweb.net/templates/intro.html) trasformano in carte da ripassare. RemNote parte da documenti e punti elenco collegati che possono diventare carte. Il primo è un sistema maturo per produrre flashcard; il secondo è uno spazio di studio organizzato attorno ad appunti e fonti.

Scegli Anki quando al centro ci sono campi personalizzati, varianti di carte generate automaticamente, modelli HTML/CSS, componenti aggiuntivi o anni di cronologia dei ripassi. Le sue attuali [impostazioni FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) includono ottimizzazione dei parametri, ritenzione desiderata e simulazione del carico di lavoro. Le [esportazioni](https://docs.ankiweb.net/exporting.html) possono conservare una collezione completa in `.colpkg`, mentre i pacchetti di mazzi `.apkg` possono includere informazioni di pianificazione, gruppi di opzioni predefinite e contenuti multimediali.

RemNote offre una via d'uscita verso Anki, ma il nome conta: [l'esportazione Anki è «Flashcards Only»](https://help.remnote.com/en/articles/7898019-exporting-notes). I punti elenco senza carte vengono esclusi. RemNote conserva nelle carte esportate il contesto dei livelli superiori e semplifica il comportamento delle domande a scelta multipla, ma l'esportazione non è il tuo archivio di conoscenze, la tua biblioteca PDF o l'intero percorso di lettura. La pagina ufficiale di RemNote sulle esportazioni non promette nemmeno che ogni componente dello stato di pianificazione arrivi in Anki. Fai una prova prima di considerare il passaggio senza perdite.

Anki è la scelta più solida di questo confronto quando le flashcard vengono prima di tutto. È meno adatto a sostituire RemNote Reader. Se continui ad annotare articoli e scrivere appunti collegati, affiancagli uno strumento per gli appunti invece di cercare di trasformarlo in uno. La [guida più ampia alle alternative ad Anki](/it/blog/best-anki-alternatives/) presenta altre opzioni incentrate sulle flashcard.

## Obsidian più Anki: file locali, con una separazione voluta

Alcune persone che cercano alternative a RemNote non hanno bisogno di un'altra app tutto in uno. Vogliono appunti che restino file normali e un sistema di ripasso che possa evolvere in modo indipendente. Obsidian più Anki realizza questa separazione in modo chiaro.

[Obsidian salva gli appunti](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) come testo semplice in formato Markdown, in una cartella locale. L'app è gratuita e non richiede un account; il servizio facoltativo [Obsidian Sync](https://obsidian.md/pricing) parte da 4 USD al mese con fatturazione annuale. Obsidian non è open source, ma i file degli appunti sono direttamente leggibili e se ne possono fare copie di backup con i normali strumenti di gestione dei file.

Usa l'esportazione Markdown di RemNote per gli appunti e quella `.apkg` per le carte. Metti in conto del lavoro di sistemazione. Una struttura gerarchica esportata in Markdown leggibile non equivale ai riferimenti attivi, ai portali, ai modelli o ai punti di riferimento nei PDF di RemNote. Quando appunti e carte si trovano in due app, inoltre, le modifiche non si propagano più automaticamente da una all'altra.

Questa soluzione funziona quando il controllo dei file locali conta più di un percorso fluido «evidenzia, collega, crea una carta, ripassa». È un cattivo compromesso se hai scelto RemNote proprio per quel percorso.

## Logseq: l'opzione open source centrata sugli appunti è in transizione

Logseq merita un posto in un confronto tra **alternative open source a RemNote** perché mette davvero gli appunti al centro. Il [repository ufficiale con licenza AGPL](https://github.com/logseq/logseq) descrive un'app per gestire le conoscenze con blocchi collegati e annotazioni dei PDF. L'[attuale documentazione della versione basata su database](https://github.com/logseq/docs/blob/master/db-version.md#cards) aggiunge carte integrate: assegni un tag a un blocco, vedi quando è da ripassare e lo ripassi scegliendo tra quattro valutazioni.

Lo stato attuale conta più dell'elenco delle funzioni. Il repository di Logseq dichiara che la versione basata su database è in beta, mentre la nuova app iOS e la sincronizzazione in tempo reale sono in alpha; l'attuale documentazione della versione basata su database dice che l'app Android non è ancora disponibile per i test alpha. Logseq avverte esplicitamente della possibilità di perdere dati e consiglia di usare un grafo di prova senza dati critici, insieme a copie di backup. Le [note sulle modifiche della versione basata su database](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) precisano anche che il nuovo algoritmo delle carte non importa le proprietà o i dati SRS delle vecchie flashcard di Logseq.

La portabilità richiede altrettanta precisione. L'attuale [documentazione sulle esportazioni della versione basata su database](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) offre SQLite con gli allegati, EDN e Markdown standard. Indica EDN come l'unica esportazione modificabile che rappresenta integralmente i dati del grafo, ma sconsiglia di usarlo come unica copia di backup. Il Markdown standard esclude proprietà e marcature temporali.

Logseq è quindi da valutare quando open source, appunti collegati, PDF e carte integrate sono tutti importanti. Non è la soluzione che userei nell'agosto 2026 per trasferire in un giorno un archivio di conoscenze indispensabile per gli studi di medicina. Prima affiancalo a RemNote e lascia che questa fase di transizione si assesti sui dispositivi che usi davvero.

## Nibomo: tutto lo stack è aperto, il modello di studio è circoscritto

Nibomo sceglie un compromesso quasi opposto a quello di RemNote. Le sue [funzioni](/it/features/) ruotano attorno a carte Markdown fronte/retro, mazzi, tag, contenuti multimediali, ripasso FSRS, client progettati per funzionare offline e creazione di bozze di carte con l'aiuto dell'IA. Non offre un archivio di appunti collegati, un lettore PDF, un'app desktop nativa o un'importazione diretta da RemNote.

Il codice disponibile copre un ambito ampio: il repository con licenza MIT include web, iOS, Android, autenticazione, backend, sincronizzazione e infrastruttura. La [guida alla configurazione supportata per il self-hosting in produzione](/docs/self-hosting/) usa AWS CDK. Non è una soluzione locale da avviare con un solo comando. Chi la gestisce si occupa di costi cloud, segreti, migrazioni, monitoraggio, backup, prove di ripristino e compilazione separata delle app mobili.

Per chi usa già RemNote, la migrazione è il limite maggiore. Nibomo importa i propri pacchetti `flashcards.zip`, non i file Markdown di RemNote o i `.apkg` di Anki. Questi pacchetti contengono carte, tag e contenuti multimediali a cui rimandano le carte, ma non cronologia dei ripassi, stato FSRS, impostazioni dello spazio di lavoro, struttura completa dei mazzi o account. La chat IA può trasformare il testo esportato in bozze di carte da controllare; significa ricostruire i contenuti, non proseguire con la vecchia collezione. La [guida alla migrazione tramite TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) mostra passo per passo i limiti e le perdite di questo passaggio.

Scegli Nibomo per uno spazio di flashcard nuovo o semplice, quando conta l'accesso al codice dell'intero stack. Tieni RemNote per uno studio basato su contenuti collegati e scegli Anki quando contano la fedeltà della migrazione o strutture di carte avanzate. Per un confronto più circoscritto tra sistemi di flashcard, leggi [Anki vs Nibomo](/blog/anki-vs-flashcards-open-source-app/) e la [guida alle app di flashcard open source](/it/blog/best-open-source-flashcard-apps-2026/).

## Cosa non si trasferisce senza problemi da RemNote

RemNote offre varie esportazioni utili, ma nessun singolo file ricrea il prodotto altrove.

- **L'esportazione completa di RemNote** è il formato più adatto al ripristino in RemNote. Al momento esclude immagini e PDF.
- **L'esportazione Anki `.apkg`** contiene solo flashcard. I punti elenco senza carte vengono omessi e il risultato non riproduce il sistema di appunti collegati.
- **Markdown, HTML, OPML e testo** rendono i contenuti più facili da leggere altrove. Non permettono a un'altra app di interpretare ogni relazione o modalità di lavoro specifica di RemNote.
- **Evidenziazioni dei PDF e fonti** richiedono un controllo separato. RemNote Reader può scaricare un PDF con le evidenziazioni, ma non dare per scontato che l'esportazione completa dell'archivio di conoscenze contenga quel file.
- **Impostazioni, temi e plugin** non sono inclusi in un backup manuale di RemNote, secondo la [documentazione sui backup](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **Lo stato dei ripassi** va verificato carta per carta nell'app di destinazione. Un'importazione che conserva domanda e risposta può comunque far ripartire da zero la pianificazione.

Ecco perché «supporta Markdown» o «importa da Anki» non basta. La portabilità ha più livelli: appunti leggibili, contenuti multimediali utilizzabili, fonti collegate, struttura delle carte e cronologia dell'apprendimento.

## Prova il passaggio prima di disdire

Rendi il trasferimento reversibile. Un'ora tranquilla adesso costa meno che scoprire un PDF mancante durante la settimana degli esami.

1. Crea una nuova esportazione manuale **RemNote (Complete)** e conservala senza modificarla.
2. Su desktop, copia i backup locali `.db.zip` e la cartella `files`. Scarica tutti i PDF originali o annotati che non potresti recuperare altrove.
3. Scegli un campione piccolo ma complicato: appunti annidati, riferimenti, un PDF, immagini, carte con testo da completare o a scelta multipla, tag e carte con una cronologia dei ripassi significativa.
4. Esporta il campione in tutti i formati necessari alla soluzione che stai valutando: di solito Markdown per gli appunti e `.apkg` per Anki.
5. Importalo in un vault, grafo, profilo o spazio di lavoro di prova che potrai eliminare. Affiancalo a RemNote e confronta quantità, formattazione, collegamenti, contenuti multimediali, fronte e retro delle carte e scadenze dei ripassi.
6. Lavora offline su ogni dispositivo che prevedi di usare. Poi riconnettiti e verifica che modifiche e ripassi arrivino dove ti aspetti.
7. Ripristina il backup completo in un archivio di conoscenze locale e temporaneo di RemNote. Un archivio scaricato diventa un piano di recupero solo dopo che sei riuscito ad aprirlo.
8. Studia con entrambi i sistemi per almeno alcune sessioni reali. Disdici solo dopo aver verificato che l'alternativa regga all'uso quotidiano e che esportazione e ripristino funzionino.

Conserva le esportazioni originali anche dopo il passaggio. Un'importazione riuscita dimostra la compatibilità con la versione attuale dell'app di destinazione, non l'accesso permanente a ogni parte del vecchio sistema.

## Le opzioni da considerare in pratica

- **Resta con RemNote** se il valore sta negli appunti collegati e nello studio sui PDF. Il piano Free o un archivio di conoscenze esclusivamente locale potrebbero già risolvere il problema.
- **Scegli Anki** se carte, modelli, controlli FSRS e fedeltà della migrazione vengono prima di tutto.
- **Scegli Obsidian più Anki** se avere gli appunti in normali file locali giustifica l'uso di due strumenti.
- **Valuta Logseq** se ti servono appunti collegati open source e carte integrate, ma limita la prova a dati non critici finché l'attuale sistema di database e sincronizzazione resta in beta e alpha.
- **Scegli Nibomo** se un sistema di flashcard semplice, con cui ripartire da zero, e l'accesso al codice dell'intero stack contano più di appunti, PDF o continuità della pianificazione.

Sviluppo Nibomo, ma terrei comunque RemNote per un quaderno di appunti collegati ricco di PDF, oppure sceglierei Anki per una collezione complessa già consolidata. Nibomo è la scelta più circoscritta: carte fronte/retro, uno stack aperto e una pianificazione che riparte da zero.

Quando sai quale limite puoi accettare, prova soltanto quella soluzione. Se Nibomo fa al caso tuo, la [guida introduttiva](/docs/getting-started/) mostra come iniziare con il servizio ospitato o con il self-hosting. Se non fa al caso tuo, anche tenere RemNote è una scelta valida.
