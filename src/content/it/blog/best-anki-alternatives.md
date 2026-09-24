---
title: "Alternative ad Anki nel 2026: cosa mantieni, perdi e guadagni cambiando app"
description: "Confronta sette alternative ad Anki per fedeltà della migrazione, uso offline, programmazione dei ripassi, prezzo, codice sorgente e self-hosting, e scopri quando conviene restare con Anki."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternative ad Anki"
  - "alternativa ad Anki"
  - "app come Anki"
  - "alternativa open source ad Anki"
  - "alternative gratuite ad Anki"
  - "alternativa ad Anki per iOS"
  - "migrare da Anki"
---

Un'importazione da Anki può concludersi senza errori e cancellare comunque ciò che rende efficace il tuo mazzo. Il testo c'è. Le carte si aprono. Poi ti accorgi che il CSS è sparito, un campo audio è vuoto, tutte le carte risultano nuove o una nota non genera più le carte dirette e inverse previste.

È questo il costo meno evidente quando confronti le alternative ad Anki. Un editor più semplice o un piano più economico si notano subito, prima di cambiare app. Il comportamento dei modelli, la cronologia dei ripassi, le scadenze, i componenti aggiuntivi, i contenuti multimediali offline e le possibilità di esportazione si scoprono più facilmente quando il danno è già fatto.

Questo confronto parte da quel punto. Esamina sette app come Anki, cosa possono recuperare da una raccolta esistente, cosa cambia dopo l'importazione e quando conservare Anki è la scelta più sicura.

> **Trasparenza:** sono Kirill Markin e sviluppo [Nibomo](https://nibomo.com/), uno dei prodotti qui sotto. L'ho incluso per il codice open source, il self-hosting e i flussi di lavoro con gli agenti. Non è il vincitore a prescindere: non ha un importatore diretto di file `.apkg`, la migrazione da Anki perde informazioni e gestire l'infrastruttura in proprio richiede un vero lavoro tecnico.

**Informazioni verificate:** 28 agosto 2026. I prezzi sono quelli pubblici statunitensi o quelli locali indicati, disponibili a quella data. Imposte, area geografica, offerte per il settore educativo e fatturazione tramite app store possono modificare l'importo.

![Un orologiaio verifica se il meccanismo collaudato di un orologio da tasca può entrare in una cassa diversa](/blog/best-anki-alternatives.png)

## La risposta breve, prima di spostare qualsiasi cosa

Parti dall'idea di tenere Anki. Cambia solo se un'altra app risolve un problema ricorrente e il vantaggio giustifica la migrazione.

Tre prodotti accettano pacchetti Anki con i dati di apprendimento, ma ciascuno offre garanzie diverse:

- **Mnemosyne** documenta un'importazione completa da Anki, con tipi di carta personalizzati e dati di apprendimento. Tra le opzioni qui presenti è la più vicina a un'applicazione desktop tradizionale, locale e open source, anche se non ha un'app nativa per iOS.
- **Mochi** importa file `.apkg` con la cronologia dei ripassi. Converte l'HTML in Markdown, elimina CSS e JavaScript e sostituisce i quattro pulsanti di ripasso di Anki con Remembered o Forgot.
- **RemNote** importa file `.apkg`, la maggior parte dei tipi di nota e la cronologia dei ripassi. La guida attuale precisa però che le carte importate finiscono in una coda separata, **Need to Learn**: «cronologia dei ripassi importata» non significa quindi «coda odierna di Anki copiata esattamente».

Con le altre quattro app ricrei i contenuti, senza migrare la raccolta nel suo insieme:

- **Quizlet** è utile per set pubblici, classi, giochi ed esercizi guidati.
- **Brainscape** offre a un gruppo un ciclo di ripasso più semplice, basato su un'autovalutazione da 1 a 5.
- **SuperMemo** comporta il passaggio al suo metodo proprietario e al suo catalogo di corsi.
- **Nibomo** offre client web e nativi con licenza MIT, un backend gestibile in proprio, API e accesso MCP. Il suo flusso di lavoro da TXT o CSV, con controllo dei contenuti prima dell’importazione, non conserva lo stato di apprendimento di Anki.

Se le tue carte dipendono da una resa visiva precisa, dai componenti aggiuntivi o dalla coda di ripasso attuale, restare con Anki non è indecisione. È la risposta.

## Per prima cosa, fai l'inventario della tua raccolta Anki

Un «mazzo» non è un unico oggetto portatile. Prima di confrontare i prodotti, distingui gli elementi che potresti trasferire.

| Parte della raccolta | Cosa Anki può inserire in un pacchetto | Cosa deve supportare esplicitamente l'app di destinazione |
| --- | --- | --- |
| **Contenuto delle note** | Campi di testo e HTML memorizzato | Corrispondenza dei campi, testi con lacune (cloze), testo non latino, codice e interruzioni di riga |
| **Generazione delle carte** | Tipi di nota e modelli delle carte | Carte dirette e inverse, campi personalizzati, CSS e comportamento JavaScript |
| **Contenuti multimediali** | Immagini locali, audio e altri file quando è attiva l'opzione **Include media** | Estrazione dei file, riferimenti, formati supportati e sincronizzazione tra dispositivi |
| **Organizzazione** | Mazzi, sottomazzi, tag e, facoltativamente, profili di opzioni dei mazzi | Gerarchia, significato dei tag, profili di opzioni e selezione dei contenuti da studiare |
| **Stato di apprendimento** | Informazioni sulla programmazione dei ripassi e relativa cronologia, se incluse | Scadenze, intervalli, dimenticanze e conversione nell'algoritmo di ripasso dell'app di destinazione |
| **Codice a supporto del lavoro** | I componenti aggiuntivi non sono inclusi nel pacchetto del mazzo | Sostituti degli strumenti del browser delle carte, delle modifiche in blocco, della generazione di note e delle altre funzioni dei componenti aggiuntivi |

Il [manuale di esportazione di Anki](https://docs.ankiweb.net/exporting.html) documenta tutte queste opzioni del pacchetto. Un importatore di testo vede solo la prima riga della tabella, ed eventualmente i tag. Un importatore diretto di `.apkg` può vedere di più, ma ogni prodotto decide cosa convertire e cosa scartare.

Per questo «importa da Anki» è troppo vago per decidere di cambiare app. Poniti tre domande distinte:

1. **La carta significa ancora la stessa cosa?** Controlla campi, carte dirette e inverse generate, lacune, contenuti multimediali e resa visiva.
2. **L'app di destinazione sa cosa ho imparato?** Controlla i singoli ripassi, lo stato attuale, le scadenze e la prima vera coda di ripasso.
3. **Potrò cambiare di nuovo?** Esporta dall'app di destinazione e verifica cosa contiene davvero il formato di esportazione.

Un importatore può superare la prima verifica e fallire le altre due.

## Cosa sopravvive alla migrazione

| Prodotto | Modalità di importazione da Anki | Stato di apprendimento | Perdita principale da verificare |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Importazione diretta di `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) per la maggior parte dei tipi di nota, i contenuti multimediali e la cronologia dei ripassi | La cronologia viene importata, ma le carte entrano nella coda separata **Need to Learn** di RemNote | CSS complesso, JavaScript personalizzato, parte dell'audio TTS generato e campi rinominati delle note con mascheramento delle immagini |
| [Mochi](https://mochi.cards/) | [Importazione diretta di `.apkg`](https://mochi.cards/docs/import-and-export/importing/), compresa la cronologia dei ripassi | La cronologia viene importata; la documentazione non garantisce una coda o scadenze identiche ad Anki | L'HTML diventa Markdown; CSS e JavaScript vengono eliminati; i ripassi successivi usano una valutazione binaria |
| [Mnemosyne](https://mnemosyne-proj.org/) | Il progetto documenta un'[importazione completa da Anki](https://mnemosyne-proj.org/features), con tipi di carta personalizzati e dati di apprendimento | I dati di apprendimento vengono importati in un algoritmo di ripasso diverso | Vanno comunque verificati il comportamento preciso dei modelli, la conversione delle scadenze e la resa delle carte |
| [Quizlet](https://quizlet.com/) | [Incollare termini e definizioni](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Nessuno da Anki | Tipi di nota, modelli, mazzi, struttura dei contenuti multimediali e tutti i dati di programmazione dei ripassi |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX o ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Nessuno da Anki | Modelli, componenti aggiuntivi, regole dei contenuti multimediali e tutti i dati di programmazione dei ripassi |
| [SuperMemo](https://www.supermemo.com/) | [Incollare righe con domande e risposte separate da delimitatori](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), fino a 100 alla volta | Nessuno da Anki | Struttura della raccolta, contenuti multimediali, modelli e tutti i dati di programmazione dei ripassi |
| [Nibomo](https://nibomo.com/) | Creazione di bozze da TXT o CSV di Anki con assistenza IA e revisione | Nessuno da Anki | Nessun supporto per `.apkg`; non vengono mantenuti modelli, fedeltà dei contenuti multimediali, gerarchia dei mazzi e dati di programmazione dei ripassi |

## Prezzo, uso offline, programmazione dei ripassi e controllo dei dati

| Prodotto | Prezzo verificato il 28 agosto 2026 | Limiti dell'uso offline | Algoritmo di ripasso | Codice sorgente e self-hosting |
| --- | --- | --- | --- | --- |
| **RemNote** | [Gratuito; Pro a 8 $/mese, con fatturazione di 96 $/anno](https://www.remnote.com/pricing) | Le app installate consentono modifiche e ripassi offline dopo l'accesso. La versione desktop conserva tutti i contenuti multimediali della base di conoscenza; quella mobile memorizza nella cache solo alcune immagini recenti. Sul web serve una scheda rimasta aperta. | [SM-2 di Anki o FSRS v6 in beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Nucleo proprietario; nessuna procedura supportata di self-hosting documentata |
| **Mochi** | [Gratuito offline; sincronizzazione Pro a 5 $/mese](https://mochi.cards/#pricing-section) | Le app installate funzionano completamente offline senza account. I dati nel browser possono essere cancellati. | [Algoritmo di Mochi o FSRS](https://mochi.cards/docs/reviewing/fsrs/), entrambi con Remembered / Forgot | Nucleo proprietario; i repository pubblici contengono integrazioni, non un'app gestibile in proprio |
| **Mnemosyne** | Gratuito | [Uso locale su desktop e ripasso offline su Android](https://mnemosyne-proj.org/download-mnemosyne.php); su Android non si possono modificare le carte. Nessuna app nativa per iOS. | Programmazione adattiva basata su valutazioni del ricordo da 0 a 5 | Licenze del sorgente diverse per componente; server di sincronizzazione gestibile in proprio su desktop o senza interfaccia grafica |
| **Quizlet** | Funzioni di base gratuite; [Plus a 35,99 $/anno, Plus Unlimited a 44,99 $/anno](https://quizlet.com/upgrade?source=signup) | I set scaricati funzionano offline nelle app iOS e Android con Flashcards e Match. | [Ripetizione dilazionata sul web](https://quizlet.com/features/spaced-repetition) per set con almeno 100 termini; il supporto mobile è ancora annunciato come in arrivo. Learn è una modalità separata di esercizio adattivo. | Servizio ospitato proprietario; nessuna procedura supportata di self-hosting |
| **Brainscape** | [Gratuito; Pro a 7,99 $/mese con fatturazione annuale](https://www.brainscape.com/pricing) | [L'app mobile può conservare il lavoro offline e sincronizzare in seguito le classi già scaricate](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); la documentazione non garantisce una libreria locale completa. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), con valutazioni da 1 a 5 | Servizio ospitato proprietario; nessuna procedura supportata di self-hosting |
| **SuperMemo** | Account gratuito con limiti; [35,99 PLN/mese o 359 PLN/anno](https://www.supermemo.com/en/premium-subscription) | I corsi scaricati su mobile funzionano offline; modifica, IA, ricerca, registrazioni e statistiche no. | [Metodo proprietario SuperMemo](https://www.supermemo.com/en/supermemo-method) | Servizio ospitato proprietario; nessuna procedura supportata di self-hosting |
| **Nibomo** | [Funzioni principali del servizio ospitato gratuite durante la beta; software gratuito per il self-hosting](/it/pricing/), più i costi della tua infrastruttura | Le app native scrivono i dati in locale dopo l'accesso online e il caricamento iniziale dello spazio di lavoro; i contenuti multimediali remoti devono essere già nella cache. | [FSRS](/docs/architecture/#scheduling) | MIT; la distribuzione in produzione supportata comprende l'intero stack, basato principalmente su AWS |

Queste tabelle non assegnano punteggi. Se hai 30.000 carte già consolidate, un importatore diretto può contare più di tutte le altre funzioni. Un'app nativa per iPhone può essere decisiva se è lì che ripassi. L'accesso al sorgente conta solo se la manutenzione del codice sarà affidata a te o a qualcuno di cui ti fidi.

Tutti questi prodotti offrono un modo gratuito per iniziare, ma migrare verso un'alternativa gratuita ad Anki ha comunque un costo. Il prezzo dell'abbonamento è facile da calcolare. Ricostruire i modelli, controllare i contenuti multimediali e ricominciare da zero con i ripassi spesso costa di più.

## RemNote: porta le carte dentro gli appunti collegati

RemNote cambia il punto di origine delle carte. Anziché mantenere un mazzo separato dagli appunti delle lezioni, crei le carte all'interno di una scaletta, di un documento o mentre lavori su un PDF. È un motivo concreto per lasciare Anki se copiare materiale tra l'app per gli appunti e quella per le flashcard è diventato il lavoro più oneroso.

La migrazione copre molti elementi, ma serve precisione nel descrivere la coda. La [guida attuale di RemNote all'importazione da Anki](https://help.remnote.com/en/articles/6751471-importing-from-anki) indica di esportare un `.apkg` con informazioni sulla programmazione dei ripassi, profili di opzioni dei mazzi e contenuti multimediali. Importa la cronologia dei ripassi e la maggior parte dei tipi di nota, compresi quelli di base, con lacune e con i più comuni mascheramenti delle immagini.

La stessa guida afferma che le carte appena importate vengono indirizzate verso una coda separata, **Need to Learn**. In altre parole, RemNote dispone della cronologia, ma la documentazione non garantisce che la coda attuale delle carte in scadenza su Anki ricompaia invariata. Il CSS complesso viene eliminato, il JavaScript personalizzato non è supportato, parte della sintesi vocale generata al momento non funziona e l'importazione delle immagini mascherate dipende dai nomi previsti per note e campi.

Fai una prova con un mazzo rappresentativo e controlla sia le carte sia la prima coda. Un'importazione dall'aspetto corretto è solo metà della verifica.

Le app desktop e mobile installate funzionano offline dopo l'installazione e l'accesso. La [guida alla modalità offline](https://help.remnote.com/en/articles/6752029-offline-mode) chiarisce un limite importante per i contenuti multimediali: su desktop vengono conservate tutte le immagini e i PDF della base di conoscenza, mentre su mobile vengono memorizzate nella cache solo alcune immagini recenti. L'app web può continuare a funzionare in una scheda già aperta, ma non può essere avviata da zero offline.

Usa RemNote se gli appunti collegati giustificano un cambiamento nel modello della raccolta. Conserva Anki se modelli e componenti aggiuntivi sono parte essenziale del tuo sistema.

## Mochi: Markdown locale con un'esportazione nativa completa

Mochi è una destinazione più essenziale per chi vuole dati locali, carte in Markdown e meno comandi sullo schermo. Le app installate sono disponibili per le principali piattaforme desktop e mobile e si possono usare [completamente offline senza account](https://mochi.cards/docs/getting-started/download-and-install/). La sincronizzazione è la parte a pagamento: 5 dollari al mese.

L'importatore diretto da Anki trasferisce la cronologia dei ripassi, e questo pone Mochi molto avanti rispetto alle opzioni limitate al testo. Anche la conversione è descritta con una chiarezza insolita: Mochi elimina CSS e JavaScript e converte l'HTML in Markdown. Funziona quando il significato risiede nel testo e in normali allegati. È un limite da considerare quando il significato dipende dal modello.

Mochi offre ora due algoritmi di ripasso. Il suo rimane quello predefinito, mentre [si può attivare FSRS](https://mochi.cards/docs/reviewing/fsrs/) senza azzerare i progressi già registrati in Mochi. FSRS ricava lo stato delle carte dalla cronologia dei ripassi disponibile in Mochi. La valutazione resta binaria, Remembered o Forgot, anche con FSRS: chi in Anki usa Hard ed Easy come segnali distinti deve aspettarsi un ritmo quotidiano diverso.

Esportare di nuovo i dati è più chiaro che nella maggior parte delle app proprietarie. Un'[esportazione nativa `.mochi`](https://mochi.cards/docs/import-and-export/exporting/) contiene carte, modelli, allegati, tag, struttura dei mazzi e cronologia dei ripassi. Markdown e CSV sono più facili da esaminare altrove, ma omettono la cronologia dei ripassi e altri metadati.

I repository GitHub pubblici di Mochi contengono [integrazioni e strumenti correlati](https://github.com/mochi-cards/open-source), non il nucleo dell'app o un server di sincronizzazione supportato. Sceglilo per l'uso offline e la portabilità, non per il controllo sul codice sorgente.

## Mnemosyne: la strada desktop open source

Mnemosyne è l'opzione più vicina al modello tradizionale «programma e database locale». La versione attuale supporta Windows, macOS e Linux, con un client Android per il ripasso offline. La pagina delle funzionalità documenta carte con contenuti avanzati, tag gerarchici, plugin, una scala di ripasso da 0 a 5 e l'importazione completa da Anki con tipi di carta personalizzati e dati di apprendimento.

È la migrazione open source più diretta tra quelle esaminate, se vuoi lasciare Anki senza passare a un grande sistema di appunti o a un servizio cloud. Ha anche un [server di sincronizzazione integrato](https://mnemosyne-proj.org/help/syncing) che può funzionare su desktop o su una macchina senza interfaccia grafica e unire i dati di apprendimento di diversi client.

I limiti fanno parte della scelta. Il client Android [non può modificare le carte](https://mnemosyne-proj.org/help/android-client). Chi usa iOS deve ripassare tramite il server per l'accesso via browser, in esecuzione su un'altra macchina; la pagina ufficiale delle funzionalità avverte che quel server non dispone di funzioni di sicurezza. Gestire la sincronizzazione in proprio significa anche mantenere il server raggiungibile, configurare la rete e fare il backup della cartella dei dati.

Le licenze richiedono più precisione di una semplice etichetta «GPL»: il [file delle licenze del progetto](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) rimanda a condizioni diverse a seconda del componente. La [licenza del nucleo](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) è AGPL v3 con una clausola aggiuntiva sul nome e sull'attribuzione, mentre [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) usa LGPL v3. Leggi quei file se prevedi modifiche o ridistribuzione.

## Quizlet: cambiare per la classe, con una migrazione limitata

Quizlet risolve un problema diverso. Set di studio pubblici, classi degli insegnanti, condivisione, Match, Test, Learn e attività di gruppo sono più facili da proporre a una classe rispetto a un profilo Anki personalizzato.

La migrazione si ferma al testo semplice. Quizlet può trasformare righe incollate in termini e definizioni, ma non legge un `.apkg` per ricostruire tipi di nota, modelli, programmazione o cronologia dei ripassi. Gli autori possono [esportare i propri set come testo copiato](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), senza immagini; i set copiati da altri utenti non si possono esportare. È portabilità dei contenuti, non dell'intera raccolta.

La programmazione dei ripassi di Quizlet sta cambiando. La nuova modalità [Spaced Repetition](https://quizlet.com/features/spaced-repetition) si attiva automaticamente sul web per i set con almeno 100 termini e usa le valutazioni Repeat, Hard, Okay ed Easy. Quizlet indica ancora il supporto mobile come in arrivo. Learn resta un percorso separato di esercizio adattivo, con limiti di utilizzo legati ai piani a pagamento.

Anche l'uso offline riguarda le app mobile, non il sito web. Quizlet salva automaticamente otto set recenti e permette di scaricarne altri; [Flashcards e Match funzionano offline](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), poi i progressi vengono sincronizzati alla riconnessione.

Passa a Quizlet se il tuo obiettivo è distribuire materiale e organizzare attività in classe. Ricostruire un piano di ripasso personale consolidato solo per ottenere queste funzioni di solito non conviene.

## Brainscape: meno scelte sui ripassi, meno dati migrati

Brainscape chiede di valutare da 1 a 5 quanto sei sicuro di ricordare e usa quel segnale per riproporre prima le carte più deboli. La formula completa non è pubblicata, ma è un'interazione facile da spiegare in una classe condivisa.

Accetta file CSV, TXT, XLSX e ODS. È comodo per carte con fronte e retro, ma significa lasciare indietro modelli, componenti aggiuntivi, regole dei contenuti multimediali e dati di apprendimento di Anki. L'esportazione di un backup personale è una funzione Pro e produce file apribili in un foglio di calcolo e reimportabili in seguito.

L'attuale centro assistenza di Brainscape afferma che il sito e le app mobile condividono ora le principali funzioni di ricerca, creazione, condivisione e studio. Descrive inoltre l'uso su mobile offline, la risincronizzazione manuale e gli aggiornamenti alle classi già scaricate sul dispositivo. Questo documenta un modo concreto per riprendere il lavoro dopo la riconnessione, ma non garantisce che l'intero account sia disponibile come libreria locale completa.

L'esportazione dei mazzi personali resta una [funzione Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Non sono disponibili né il codice sorgente ufficiale né una procedura di self-hosting.

Brainscape merita attenzione quando Anki richiede troppa configurazione per le persone che devono studiare. È una via d'uscita poco adatta a chi sa già usare bene quella configurazione.

## SuperMemo: scegli il metodo e accetta di ricominciare

L'attuale servizio SuperMemo.com è una piattaforma per l'apprendimento delle lingue disponibile sul web, su iOS e su Android, basata sul metodo proprietario di programmazione dei ripassi di SuperMemo. È separata dal prodotto storico per Windows che gli utenti di lunga data potrebbero conoscere.

La scelta riguarda il metodo e il catalogo, non una migrazione fedele da Anki. SuperMemo supporta la [creazione in blocco incollando righe con domande e risposte separate da delimitatori](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), con un limite di 100 carte per importazione. Non ho trovato un importatore ufficiale attuale di `.apkg` né un modo per gli utenti di esportare dal servizio ospitato. Modelli, componenti aggiuntivi, struttura dei contenuti multimediali e cronologia dei ripassi non passano quindi attraverso questa procedura documentata.

I corsi scaricati si possono studiare offline nelle app mobile. La [guida all'uso offline](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) esclude le funzioni IA, l'aggiunta di MemoCards, la ricerca, le registrazioni, le statistiche e l'editor dei corsi: prepara il materiale e sincronizza prima di disconnetterti.

Scegli SuperMemo se il suo metodo o il suo catalogo di corsi valgono per te la rinuncia al piano di ripasso attuale. Se la priorità è conservare quello esistente, risponde al problema sbagliato.

## Nibomo: accesso al sorgente dell'intero stack, con l'importazione da Anki più limitata

Nibomo offre un ampio controllo sul software. Il [repository con licenza MIT](https://github.com/kirill-markin/flashcards-open-source-app) contiene l'app web, i client iOS e Android, il backend, la sincronizzazione offline, l'infrastruttura, le [API pubbliche](/docs/api/) e il [server MCP](/docs/mcp-connector/). I ripassi usano [FSRS](/docs/architecture/#scheduling). Web, iOS e Android scrivono prima in locale, aggiungono le modifiche a una coda in uscita e le sincronizzano alla riconnessione.

Questo non lo rende compatibile con Anki. Nibomo non legge `.apkg` o `.colpkg`. La [migrazione da TXT di Anki](/blog/migrate-from-anki-txt-export-open-source-flashcards/) supportata è un flusso di creazione di bozze con assistenza IA e revisione, destinato soprattutto a carte testuali. Non conserva modelli, componenti aggiuntivi, gerarchia dei mazzi, scadenze, intervalli o singoli ripassi. I riferimenti multimediali in un TXT non sono i file multimediali: i mazzi che ne fanno largo uso richiedono quindi ricostruzione e verifica separate.

Anche il pacchetto `flashcards.zip` di Nibomo è più limitato di un backup. Trasferisce carte, tag e relativi contenuti multimediali tra spazi di lavoro Nibomo. Non trasferisce cronologia dei ripassi, stato FSRS, strutture complete dei mazzi, impostazioni degli spazi di lavoro o account.

Le funzioni principali del servizio ospitato sono [gratuite durante la beta](/it/pricing/). Gestire in proprio lo stack di produzione non si riduce a un’installazione tramite Docker con un solo comando: la [guida al self-hosting](/docs/self-hosting/) usa AWS CDK e richiede servizi AWS, oltre a Cloudflare, Resend, Sentry, segreti, migrazioni, backup, ripristini e aggiornamenti. Docker Compose è la soluzione per lo sviluppo, non la distribuzione in produzione supportata.

Usa Nibomo se il motivo del passaggio è disporre dell'intero sorgente e di un backend sotto il tuo controllo, e le tue carte sono abbastanza semplici da essere ricostruite in sicurezza. [Apri l'app ospitata](https://app.nibomo.com/) per provare un piccolo mazzo temporaneo. Conserva Anki, oppure prova RemNote, Mochi o Mnemosyne, se la fedeltà dello stato di apprendimento viene prima di tutto.

## Quale alternativa ad Anki funziona su iOS senza brutte sorprese nella migrazione?

«Alternativa ad Anki per iOS» può significare due cose diverse: un'app nativa per iPhone oppure un sostituto di [AnkiMobile, che costa 24,99 $ con acquisto una tantum](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo e Nibomo hanno tutti un'app iOS. Mnemosyne no. Resta comunque la questione della migrazione:

- **Mochi** conserva più dati delle opzioni iOS limitate al testo: importa la cronologia dei ripassi da `.apkg`, con conversione in Markdown e valutazione binaria.
- **RemNote** importa anch'esso la cronologia dei ripassi da `.apkg`, ma devi verificare la coda **Need to Learn**, senza dare per scontato che il piano attuale di Anki sopravviva.
- **Quizlet** è adatto a distribuire materiale in classe, ma il passaggio da Anki è limitato al testo e la nuova modalità di ripetizione dilazionata non è ancora disponibile su mobile.
- **Nibomo** è l'opzione con sorgente disponibile e client iOS nativo, ma la migrazione da Anki azzera lo stato di apprendimento.
- **Brainscape** e **SuperMemo** hanno senso solo se il loro metodo di ripasso giustifica la ricostruzione delle carte e del piano di studio.

Prima di lasciare AnkiMobile per il prezzo, confrontalo con il costo di un abbonamento e con le ore necessarie a sistemare una migrazione. Un acquisto una tantum può costare meno di un'app gratuita che trasforma una raccolta consolidata in un lavoro manuale.

## Quando conservare Anki è più sicuro

Restare è una scelta, non un'incapacità di scegliere qualcosa di più nuovo. Conserva Anki se vale anche solo una di queste condizioni:

- la tua raccolta dipende da modelli personalizzati, CSS, JavaScript o componenti aggiuntivi;
- il mascheramento delle immagini (Image Occlusion), l'audio o altri contenuti multimediali veicolano informazioni essenziali;
- una nota genera più carte dirette e inverse che devono restare collegate;
- anni di cronologia dei ripassi e scadenze attuali valgono più di un nuovo editor;
- dipendi da un modo di lavorare su desktop o da una combinazione di piattaforme che l'alternativa non offre;
- la modalità offline dell'alternativa funziona solo su una piattaforma che non userai;
- il self-hosting ti interessa in teoria, ma non vuoi gestire e proteggere un server, farne i backup e aggiornarlo;
- l'alternativa non risolve alcun problema ricorrente, oltre ad avere un aspetto più semplice.

Anki offre ancora un ecosistema maturo di componenti aggiuntivi, modelli flessibili per note e carte, FSRS e le impostazioni degli algoritmi di ripasso precedenti, client installati in locale e formati di pacchetto capaci di contenere la raccolta. Nessuno dei prodotti qui sopra riproduce tutto questo.

Per un confronto più mirato sul controllo del software e dei dati, leggi la [guida alle app di flashcard open source](/blog/best-open-source-flashcard-apps-2026/). Se il fattore decisivo è il comportamento offline, il [confronto tra app di flashcard offline](/blog/best-offline-flashcards-app/) distingue tra app installate, contenuti nella cache e schede del browser.

## Una checklist di migrazione che può ancora concludersi con un «no»

Non iniziare con l'intera raccolta. Prepara una prova che possa anche fallire.

1. **Crea un pacchetto di ripristino.** Esporta un `.colpkg` con i contenuti multimediali, salvalo fuori dal profilo Anki e conserva una seconda copia altrove.
2. **Scegli il mazzo più scomodo.** Includi testi con lacune, campi personalizzati, carte dirette e inverse, mazzi annidati, tag, immagini, audio e abbastanza cronologia dei ripassi da far emergere i problemi di conversione della programmazione.
3. **Esporta nel formato realmente supportato dalla destinazione.** Usa `.apkg` con programmazione dei ripassi, profili di opzioni e contenuti multimediali per un importatore diretto. Usa Notes in Plain Text solo se accetti di ricostruire esclusivamente i contenuti.
4. **Registra la situazione di partenza.** Annota il numero di note e carte, i nomi di tag e mazzi, il numero di file multimediali, alcune scadenze e intervalli, e il numero previsto di carte generate da ogni tipo di nota.
5. **Importa in uno spazio temporaneo.** Non sovrascrivere il profilo originale e non unire la prima prova a una libreria di destinazione permanente.
6. **Verifica separatamente contenuti e stato di apprendimento.** Un fronte e un retro corretti non dimostrano che siano sopravvissuti lacune, contenuti multimediali, carte sorelle generate dalla stessa nota, cronologia dei ripassi o la prossima scadenza.
7. **Prova ad aprire l’app offline da chiusa su ogni dispositivo che userai davvero.** Ripassa, modifica, chiudi completamente l'app, riaprila senza connessione, poi riconnettiti e controlla un altro dispositivo.
8. **Confronta le code prima che inizino a divergere.** Confronta le prime carte in scadenza e alcuni intervalli prima di valutare in entrambe le app le stesse carte che usi abitualmente. Dopo il primo ripasso nell'altra app, i due piani diventano indipendenti.
9. **Verifica l'esportazione prima di decidere.** Esporta dall'app di destinazione ed esamina cosa potresti recuperare se la lasciassi l'anno prossimo.
10. **Conserva Anki e il backup intatto.** Non eliminare nessuno dei due finché l'alternativa non ha superato l'uso quotidiano e non hai accettato consapevolmente ogni perdita.

Se la destinazione accetta solo testo, segui la [procedura completa per un'esportazione TXT sicura](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Distingue il `.colpkg` di ripristino dal file di lavoro portatile e rende esplicito l'azzeramento dei progressi.

## Decidi in quest'ordine

Parti da ciò che non puoi permetterti di perdere:

1. Se modelli identici, componenti aggiuntivi o coda attuale sono essenziali, conserva Anki, a meno che una prova con un `.apkg` rappresentativo non dimostri il contrario.
2. Se appunti e carte devono diventare un unico sistema, prova RemNote. Controlla la coda **Need to Learn**, non solo le pagine importate.
3. Se Markdown locale ed esportazioni facilmente esaminabili contano più della resa delle carte di Anki, prova Mochi.
4. Se vuoi un'app desktop open source mirata, con importazione diretta da Anki, prova Mnemosyne e verifica che i suoi limiti su mobile siano compatibili con le tue abitudini.
5. Se il vero problema è distribuire materiale in classe o semplificare i ripassi condivisi, ricrea un piccolo set in Quizlet o Brainscape.
6. Se desideri proprio il metodo di SuperMemo, accetta di iniziare un nuovo piano di ripasso. Se desideri proprio il sorgente dell'intero stack, il self-hosting, le API e l'accesso MCP, accetta di ricostruire i contenuti in Nibomo perdendo parte dei dati e di occuparti della gestione tecnica.

Per un confronto funzione per funzione di tre modelli molto diversi, leggi [Anki, Quizlet e Nibomo a confronto](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

La regola utile è semplice: cambia quando il vantaggio è concreto e una prova reale ha mostrato che la perdita è accettabile. Se il tuo mazzo rappresentativo non si trasferisce correttamente, conservare Anki non è un ripiego prudente. È il risultato del confronto.
