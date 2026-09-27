---
title: "Le migliori app di flashcard open source del 2026: 6 opzioni FOSS a confronto"
description: "Confronto tra sei app di flashcard open source attive: codice disponibile, dati offline, sincronizzazione, importazione Anki, esportazione, self-hosting e ripristino."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "migliori app flashcard open source"
  - "app flashcard open source"
  - "ripetizione dilazionata open source"
  - "flashcard self hosted"
  - "app flashcard offline"
  - "alternativa open source Anki"
  - "flashcard FOSS"
---

Anki resta la migliore app di flashcard open source per la maggior parte delle persone nel 2026. La scelta si fa interessante quando «open source» non è il tuo unico requisito irrinunciabile.

Magari ti serve un'app per browser sul tuo server. Oppure un mazzo leggibile come semplice Markdown. O un sistema privato di appunti da cui creare flashcard. Queste esigenze portano a prodotti diversi, e un repository pubblico su GitHub non basta a decidere.

Un client desktop open source può affiancarsi a un'app per iPhone proprietaria. Un container Docker può ospitare un'interfaccia web senza sincronizzare i client nativi. Un'importazione può recuperare le parole e perdere modelli, contenuti multimediali e anni di cronologia dei ripassi che rendevano utile la raccolta.

Sei progetti hanno superato questa valutazione. Ho confrontato il codice coperto dalle licenze, l'ultima versione stabile, i dati locali, l'algoritmo di ripasso, la sincronizzazione, la migrazione da Anki, l'esportazione e ciò che si può effettivamente ospitare in proprio. Quest'ultimo punto conta più di quanto lascino intendere molte liste di funzionalità.

> **Trasparenza:** sono Kirill Markin e sviluppo [Nibomo](https://nibomo.com/), una delle sei app qui sotto. Il suo repository MIT comprende app web, client nativi, backend, sincronizzazione e infrastruttura. Non l'ho messa al primo posto. Anki è la scelta di partenza più sicura, Mnemosyne ha una procedura di migrazione da Anki più consolidata e diverse opzioni qui presenti sono molto più semplici da gestire.

**Informazioni verificate:** 5 settembre 2026. Le versioni stabili sono distinte dal lavoro presente solo nel branch predefinito.

![Un escursionista confronta sei zaini aperti e prova un kit di riserva prima di scegliere un'app di flashcard open source](/blog/best-open-source-flashcard-apps-2026-v2.png)

## La risposta breve

| La tua esigenza principale | L'opzione più adatta | Perché | Il limite da verificare per primo |
| --- | --- | --- | --- |
| Un sistema affidabile per uso generale o una raccolta esistente complessa | [Anki](https://apps.ankiweb.net/) | Carte e modelli maturi, FSRS, componenti aggiuntivi, ampia scelta di client ed esportazioni in pacchetti ricchi di dati | L'app iOS ufficiale e AnkiWeb non fanno parte del codice desktop open source; il self-hosting offre la sincronizzazione, non AnkiWeb |
| Un'alternativa dedicata allo studio su desktop, con importazione da Anki consolidata | [Mnemosyne](https://mnemosyne-proj.org/) | Studio locale, importazione dei tipi di carta e dei dati di apprendimento di Anki, server di sincronizzazione gestibile in proprio | La 2.11 è ancora l'ultima versione stabile; su Android si ripassa ma non si modifica |
| Appunti e flashcard in un'unica base di conoscenza locale | [SiYuan](https://b3log.org/siyuan/en/) | App native offline, FSRS integrato e una vera app per browser ospitata con Docker | I client Docker non si sincronizzano con le app native e diversi comandi di importazione/esportazione non sono disponibili su Docker |
| Codice sorgente di web, mobile, backend e infrastruttura | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Un unico monorepo MIT con una procedura di distribuzione in produzione documentata | Lo stack di produzione supportato ruota attorno ad AWS e la migrazione da Anki perde parte dei dati |
| Un'app desktop più giovane, basata sui dati locali, con importazione APKG diretta | [Recall](https://github.com/Madlezz/Recall) | FSRS, build desktop, PWA, database locali e un relay cifrato facoltativo | L'importazione conserva solo un'istantanea della programmazione dei ripassi, usa i primi due campi della nota e salta l'audio |
| Mazzi Markdown leggibili, senza dipendenza dalla rete | [Essentialist](https://github.com/essentialist-app/essentialist) | Semplici file per i mazzi e un'app desktop/Android volutamente offline | Non c'è sincronizzazione e i progressi risiedono in un database nascosto separato |

Questa non è una classifica a punti delle funzionalità. Parti dalla perdita che non puoi accettare. Se hai dieci anni di ripassi in Anki, la fedeltà della migrazione conta più di un'interfaccia più pulita. Se gestisci un'installazione per una scuola, l'accesso via browser e un ripristino verificato possono contare più dei componenti aggiuntivi.

## Cosa ho considerato un'app di flashcard open source

Ho usato quattro criteri:

1. **L'esperienza di studio principale ha codice pubblicato e una licenza open source esplicita.** Una raccolta di integrazioni attorno a un nucleo non pubblicato non basta.
2. **La ripetizione dilazionata funziona già.** Una voce nella roadmap o una modalità quiz generica non sono sufficienti.
3. **Esiste una build pubblicata o una distribuzione ufficiale documentata con chiarezza.** I commit recenti, da soli, non rendono un prototipo una scelta sicura da consigliare.
4. **Le fonti ufficiali descrivono abbastanza chiaramente la gestione dei dati da poterla verificare.** Servivano risposte concrete su archiviazione offline, sincronizzazione, importazione/esportazione o hosting, non una vaga promessa che gli utenti «possiedono i propri dati».

Le stelle su GitHub non erano una soglia di ammissione. Premiano l'anzianità e la visibilità quanto l'adeguatezza del prodotto. La maturità resta però importante. Anki, Mnemosyne e SiYuan hanno versioni e modelli di gestione consolidati. Recall ed Essentialist si sono guadagnati un posto per esigenze più specifiche, perché il comportamento delle versioni pubblicate è documentato abbastanza bene da consentire una raccomandazione precisa.

Anche «attivamente sviluppato» richiede due verifiche. Una versione con tag dice cosa gli utenti possono installare; il branch predefinito indica dove sta andando il progetto. Essentialist è l'esempio più chiaro. La versione stabile documenta SM-2, mentre il branch attuale documenta FSRS. La tabella qui sotto riporta SM-2.

## Sei app di flashcard FOSS a confronto

| App | Versione stabile verificata | Piattaforme | Dati offline | Algoritmo di ripasso | Sincronizzazione | Migrazione da Anki e possibilità di uscita | Cosa puoi ospitare in proprio |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 agosto 2026 | Windows, macOS, Linux; client Android e iOS separati; AnkiWeb | I client installati permettono di studiare da raccolte locali | FSRS o il precedente SM-2 | AnkiWeb o il server ufficiale di sincronizzazione ospitato in proprio | Importa testo, APKG/COLPKG e database Mnemosyne; esporta testo o pacchetti con contenuti multimediali e dati di programmazione dei ripassi selezionabili | **Solo server di sincronizzazione.** Nessun AnkiWeb o interfaccia di studio via browser da ospitare in proprio |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 novembre 2023; attività nel repository proseguita nel 2026 | Windows, macOS, Linux, Android; ripasso limitato via browser | Desktop locale; Android permette il ripasso offline ma non la modifica | Valutazione adattiva del ricordo da 0 a 5 | Sincronizzazione integrata con un'istanza desktop o senza interfaccia grafica | Documenta ufficialmente l'importazione completa da Anki con tipi di carta personalizzati e dati di apprendimento; l'esportazione per la condivisione non è un backup completo | **Sincronizzazione e ripasso limitato via browser.** Il server per browser non ha funzioni di sicurezza |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 agosto 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; browser tramite Docker | I client nativi conservano lo spazio di lavoro in locale | FSRS | Sincronizzazione ufficiale E2EE a pagamento oppure integrazione S3/WebDAV di terze parti a pagamento | L'app nel suo insieme importa Markdown/dati ed esporta diversi formati di documenti/dati; nessun importatore APKG documentato | **App completa per browser.** Docker non può sincronizzare i client nativi ed elimina alcuni comandi di importazione/esportazione |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 settembre 2026 | Web, iOS, Android | IndexedDB sul web; SQLite su iOS; Room su SQLite su Android; le scritture locali entrano in coda per la sincronizzazione | FSRS | Backend ospitato dal servizio o distribuito dal gestore | Il suo ZIP trasferisce carte, tag, metadati della fonte e contenuti multimediali a cui le carte fanno riferimento, ma non mazzi, stato di apprendimento, impostazioni o account; nessun importatore APKG | **Stack web/backend completo.** La produzione ruota attorno ad AWS; le build native private sono separate |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 luglio 2026 | Windows, macOS, Linux; PWA installabile | SQLite su desktop; IndexedDB nel browser; nessun account richiesto, telemetria disattivata per impostazione predefinita | FSRS | Sincronizzazione tramite cartella su desktop o relay cifrato Cloudflare Worker/R2 facoltativo | L'importazione APKG su desktop legge i primi due campi, mazzi, tag, un'istantanea approssimativa della programmazione dei ripassi e immagini; esportazioni JSON e archivio Recall | **Solo relay di istantanee cifrate.** Non ospita la PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 ottobre 2025; attività sul sorgente proseguita nel 2026 | APK Android, DMG macOS, Flatpak Linux; Windows da compilare dal sorgente | Nessun accesso alla rete; contenuto dei mazzi in Markdown | Versione stabile: SM-2; branch predefinito: FSRS | Nessuna | Markdown conserva il contenuto delle carte; un database nascosto associato conserva i progressi | **Nulla da ospitare.** Fai il backup del file Markdown insieme al database associato |

## 1. Anki è la scelta di partenza più sicura

Anki vince sugli aspetti meno appariscenti. Può rappresentare tipi di nota complessi, generare carte sorelle dai modelli, conservare i contenuti multimediali con la raccolta e mantenere anni di dati sulla programmazione dei ripassi. La versione desktop stabile di riferimento per questa analisi è la [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). La build più recente 26.09b2 è indicata come beta, quindi non costituisce il riferimento di questo confronto.

Solo alcune parti del sistema sono open source. Il [repository desktop è AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), con eccezioni elencate per i componenti inclusi. [AnkiDroid](https://github.com/ankidroid/Anki-Android) è un progetto Android open source separato. AnkiMobile e AnkiWeb sono prodotti ufficiali, ma il loro codice non è incluso in quei repository. Trovi più dettagli in [Anki è open source?](/blog/is-anki-open-source/).

I client installati conservano raccolte locali, quindi il normale ripasso funziona senza connessione. AnkiWeb è la parte online. Se l'uso offline è il fattore decisivo, [Anki funziona offline?](/blog/does-anki-work-offline/) distingue ciò che resta locale da ciò che attende la sincronizzazione.

Anki supporta [FSRS e il suo algoritmo di ripasso precedente](https://docs.ankiweb.net/deck-options.html). I suoi formati di esportazione sono il punto di partenza più solido per una migrazione tra le app del gruppo. Un [COLPKG contiene l'intera raccolta con la programmazione dei ripassi](https://docs.ankiweb.net/exporting.html), mentre le esportazioni APKG possono includere informazioni sulla programmazione dei ripassi e contenuti multimediali selezionando le relative opzioni. Anki importa anche testo, pacchetti Anki e database Mnemosyne 2.0.

Un pacchetto sorgente così ricco non garantisce un'importazione perfetta altrove. La destinazione deve comunque comprendere i modelli, le regole di generazione delle carte, i riferimenti multimediali e i campi dell'algoritmo di ripasso al suo interno. Ha semplicemente più informazioni su cui lavorare rispetto a un file CSV.

Il [server ufficiale da ospitare in proprio](https://docs.ankiweb.net/sync-server.html) è volutamente essenziale. Sincronizza i client Anki compatibili; non offre AnkiWeb, ripasso via browser o un portale per gli account. Per impostazione predefinita ascolta su HTTP non cifrato, e la guida consiglia di tenerlo su una rete locale o di anteporre una VPN o un reverse proxy HTTPS. Anche le versioni di client e server devono restare compatibili.

Scegli Anki se vengono prima la fedeltà della raccolta, i modelli, i componenti aggiuntivi o l'ampio supporto dei client. Cerca altrove solo quando un'esigenza specifica, come un'interfaccia browser ospitata in proprio o uno stack mobile interamente pubblicato, conta di più.

## 2. Mnemosyne punta sullo studio in locale

Mnemosyne dà l'impressione di essere uno strumento desktop per studiare perché è proprio questo. Non si porta dietro una base di conoscenza o una piattaforma cloud. Offre un database locale, un metodo tradizionale di ripetizione dilazionata, un'app Android per il ripasso e un server di sincronizzazione eseguibile su desktop o su una macchina senza interfaccia grafica.

L'ultima versione stabile è ancora la [2.11 di novembre 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Il repository ha ricevuto modifiche nel 2026, ma questo non le trasforma in un programma di installazione stabile. Prova la 2.11 sui sistemi operativi che intendi usare nei prossimi anni.

Anche la licenza richiede più di un'etichetta. La [mappa delle licenze nella radice](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) assegna LGPL v3 a openSM2sync e condizioni distinte al resto di Mnemosyne. La [licenza del programma principale](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) applica AGPL v3 con una clausola aggiuntiva che richiede di mantenere il nome Mnemosyne chiaramente visibile nelle opere derivate, concordandone la forma esatta con i manutentori. Leggi quel testo prima di ridistribuire una build modificata.

Il [client Android permette il ripasso offline ma non la modifica delle carte](https://mnemosyne-proj.org/help/android-client). Altri dispositivi possono usare un server di ripasso via browser avviato dall'app desktop, ma la pagina ufficiale delle funzionalità avverte che il server non dispone di funzioni di sicurezza. È una comoda interfaccia per la rete locale, non un'applicazione web completa da esporre su Internet.

La migrazione è l'argomento più forte di Mnemosyne per chi altrimenti resterebbe su Anki. La pagina ufficiale delle funzionalità documenta l'[importazione completa da Anki, inclusi tipi di carta personalizzati e dati di apprendimento](https://mnemosyne-proj.org/features). La [sincronizzazione integrata](https://mnemosyne-proj.org/help/syncing) unisce carte e dati di apprendimento e può usare una macchina sotto il tuo controllo.

Il normale comando di esportazione può trarre in inganno quando si fa un backup. È pensato per condividere carte selezionate e omette i dati di apprendimento. Per spostare o recuperare il sistema completo, la [guida all'uso su più computer](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) indica di copiare l'intera cartella dei dati.

Tra queste app, Mnemosyne è l'alternativa open source ad Anki più solida per chi cerca uno strumento dedicato allo studio. Il compromesso è una cadenza lenta delle versioni stabili, modifiche limitate su mobile e un'interfaccia browser il cui accesso di rete va delimitato con attenzione.

## 3. SiYuan funziona quando il vero sistema sono gli appunti

SiYuan è un'applicazione di gestione della conoscenza incentrata sulla privacy, con flashcard integrate nello stesso modello a blocchi e documenti. È utile quando gli appunti generano il materiale da ripassare. È un sistema piuttosto complesso se cerchi soltanto una coda di carte.

Il [repository AGPL-3.0](https://github.com/siyuan-note/siyuan) collega interfaccia, kernel, app mobile, livello dati e componente FSRS. La [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) è la versione stabile verificata qui. I client desktop e mobile conservano lo spazio di lavoro in locale e continuano a funzionare offline.

La sincronizzazione non fa parte del piano gratuito con archiviazione locale. La [pagina ufficiale dei prezzi](https://b3log.org/siyuan/en/pricing.html) offre la sincronizzazione ufficiale con crittografia end-to-end nell'abbonamento, mentre le funzioni Pro a pagamento aggiungono integrazioni con il tuo spazio S3 o WebDAV. Il progetto avverte anche di non mettere uno spazio di lavoro in uso dentro una normale cartella di sincronizzazione file, perché modifiche simultanee possono danneggiare o sovrascrivere i dati.

Docker esegue una vera applicazione per browser, ma non diventa un server di sincronizzazione per le app installate. La [documentazione Docker della v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) specifica che i client desktop e mobile non possono collegarvisi. Docker elimina anche l'importazione Markdown e l'esportazione PDF, HTML e Word. Questi comandi sono disponibili nell'applicazione nativa, quindi copiare la lista complessiva delle funzionalità in un piano di distribuzione Docker sarebbe fuorviante.

Non ho trovato un importatore APKG ufficiale. SiYuan può trasferire Markdown e i propri formati dati, ma una raccolta Anki richiede una ricostruzione più ragionata.

Scegli SiYuan se la base di conoscenza è il prodotto principale e le flashcard devono farne parte. Se vuoi un sostituto diretto di Anki, Mnemosyne e Anki hanno limiti di migrazione più chiari.

## 4. Nibomo pubblica più parti dello stack e ti chiede di gestirle

Nibomo pubblica la porzione più ampia del prodotto in questo confronto. Il monorepo MIT comprende app web, client iOS e Android, backend, servizio di autenticazione, sincronizzazione, applicazione di amministrazione, migrazioni del database e infrastruttura AWS. La versione stabile usata qui è la [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Il lavoro successivo sul branch predefinito non viene considerato una funzionalità già pubblicata.

L'[architettura](/docs/architecture/) è offline-first, ma «offline» significa qualcosa di leggermente diverso su ogni client. L'app web usa IndexedDB come archivio locale di riferimento. iOS usa SQLite e Android usa Room su SQLite. Le modifiche vengono scritte in locale e inserite in una coda in uscita prima della sincronizzazione. Questa architettura gestisce le interruzioni della connessione; non rende permanente l'archiviazione del browser e non elimina la necessità di provare l'avvio dell'app da chiusa su ogni dispositivo.

Il pacchetto ZIP nativo di Nibomo è un formato di trasferimento dei contenuti, non un backup dell'account. Nella v1.23.0, lo [schema del pacchetto](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) comprende contenuto di fronte e retro, tag, tipo di carta, metadati della fonte e del pacchetto; i contenuti multimediali a cui le carte fanno riferimento sono inclusi separatamente. Non comprende struttura dei mazzi, cronologia dei ripassi, stato FSRS, impostazioni dello spazio di lavoro o account.

Nella v1.23.0 non c'è un importatore APKG. La [procedura documentata di migrazione da TXT/CSV di Anki](/blog/migrate-from-anki-txt-export-open-source-flashcards/) usa il testo esportato per ricostruire le carte e richiede una revisione umana. Modelli, stato della programmazione dei ripassi, struttura dei mazzi e contenuti multimediali inclusi non sopravvivono automaticamente a questo percorso. È ragionevole per un semplice mazzo testuale e poco adatta a una raccolta molto personalizzata.

La [guida al self-hosting](/docs/self-hosting/) è altrettanto esplicita. La produzione usa uno stack AWS CDK con RDS, Cognito, API Gateway e Lambda, S3 e CloudFront, segreti, allarmi e backup. DNS Cloudflare, email Resend e configurazione Sentry restano fuori da AWS. Docker Compose serve allo sviluppo locale; non è il pacchetto supportato per la produzione. Chi desidera binari iOS o Android privati deve compilarli e distribuirli separatamente.

Scegli Nibomo se disporre dell'intero codice web, nativo e backend giustifica questo lavoro di gestione. Scegli Anki o Mnemosyne se conservare una raccolta esistente è il requisito più difficile da soddisfare.

## 5. Recall è moderno, ma esamina bene l'importatore

Recall è il progetto più giovane tra le raccomandazioni principali. È entrato nella lista perché la [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) offre build desktop versionate, una PWA installabile, archiviazione locale esplicita, FSRS, esportazioni dei dati e un'architettura documentata per la sincronizzazione ospitata in proprio.

L'app desktop con licenza MIT usa SQLite; la PWA usa IndexedDB. Nessuna delle due richiede un account e il progetto dichiara che la telemetria è disattivata per impostazione predefinita. Le versioni desktop coprono Windows, macOS e Linux.

L'importatore APKG è utile, ma l'espressione «cronologia dei ripassi» nel README è troppo generosa rispetto all'implementazione della versione con tag. Il [codice dell'importatore della v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) non legge il registro dei ripassi di Anki. Legge lo stato attuale della carta, l'intervallo, i conteggi delle ripetizioni e delle dimenticanze, oltre a stabilità e difficoltà FSRS quando Anki le ha memorizzate. Per le carte più vecchie prive di questi campi FSRS, Recall li stima a partire dai valori SM-2.

Anche la conversione dei contenuti ha limiti netti. L'importatore usa i primi due campi della nota come fronte e retro invece di riprodurre tipi di nota e modelli Anki. Conserva i nomi dei mazzi e i tag. Estrae i formati immagine comuni e ne riscrive i riferimenti, ma salta audio e altri contenuti multimediali. Essendo un comando Tauri, l'importatore rende la migrazione APKG diretta una funzione desktop, non della PWA nel browser.

È molto meglio di una ricostruzione da testo semplice, ma non conserva fedelmente l'intera raccolta. Prova testi con lacune, carte sorelle, campi aggiuntivi, HTML/CSS, immagini, audio, scadenze e note ripetute prima di affidargli un trasferimento importante.

Recall ha due percorsi di sincronizzazione. Il client desktop può scrivere un'istantanea in una cartella gestita da Dropbox, Drive o un altro strumento di sincronizzazione file. Il relay facoltativo usa un Cloudflare Worker e un bucket R2. Secondo la [documentazione dell'architettura di sincronizzazione nella versione con tag](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md), i client cifrano le istantanee con AES-GCM prima del caricamento; il relay vede testo cifrato, non i dati delle carte o la chiave. Gli aggiornamenti usano il controllo ottimistico della concorrenza e ritentano una volta in caso di conflitto, ma uniscono comunque istantanee complete anziché singoli campi. Non esiste un relay pubblico finanziato dai manutentori: lo distribuisci tu e ne inserisci l'URL.

Le esportazioni JSON e in archivio Recall offrono una via d'uscita. Ripristinane una in un profilo pulito prima di chiamarla backup.

Scegli Recall se vuoi un'esperienza desktop/PWA moderna basata sui dati locali e accetti un progetto giovane con un importatore che conserva un'istantanea utile, anziché l'intero sistema Anki.

## 6. Essentialist rende leggibile il mazzo, non tutto lo stato

Essentialist è il sistema più circoscritto del gruppo. Ogni mazzo è un file Markdown che puoi aprire in un editor di testo, conservare sotto controllo di versione o copiare con normali strumenti per file. L'applicazione non effettua richieste di rete, per scelta.

L'ultima versione stabile è la [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). I file distribuiti includono build Android, macOS e Linux; chi usa Windows deve compilare dal sorgente. Il [README della versione con tag](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) indica SM-2 come algoritmo di ripasso.

Il [README del branch predefinito](https://github.com/essentialist-app/essentialist/blob/main/README.md) ora indica FSRS e il repository ha ricevuto modifiche al sorgente nel 2026. È un'indicazione utile sulla direzione del progetto, non un motivo per attribuire FSRS al binario del 2025.

Anche Markdown copre meno di quanto sembri. Il testo delle carte risiede nel file visibile, mentre i progressi sono in un database nascosto chiamato `.<deck file>.db`. Copiare `sample.md` senza `.sample.md.db` salva domande e risposte ma perde lo stato di apprendimento.

Non ci sono sincronizzazione integrata tra dispositivi né server. Puoi mettere i file in una tua cartella sincronizzata, ma a quel punto la gestione dei conflitti e il recupero dei dati spettano a te.

Scegli Essentialist se ciò che cerchi è Markdown leggibile e un uso senza rete. Non è un sistema fluido su più dispositivi, e un solo file visibile non costituisce un backup completo.

## Quattro progetti attivi da tenere d'occhio

Questi progetti hanno alle spalle lavoro concreto nel 2026. Restano fuori dai sei principali perché per consigliare un prodotto non basta un codice sorgente interessante.

| Progetto | Cosa c'è già di concreto | Cosa impedisce ancora di consigliarlo nella lista principale |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Codice AGPL, algoritmi FSRS/SM-2/Leitner, distribuzione Docker, servizio gestito, importazione CSV ed esportazione dati | Creato a luglio 2026; nessuna versione numerata dell'applicazione. La release su GitHub è un pacchetto audio, non una versione dell'app |
| [Openlet](https://github.com/ChloeVPin/openlet) | App web MIT con FSRS, importazione CSV, mascheramento delle immagini e architettura Supabase/Vercel documentata | Nessuna versione con tag e documentazione ufficiale che non definisce ancora completamente uso offline, esportazione e ripristino in self-hosting |
| [Prep](https://github.com/Zamua/prep-app) | Codice MIT, FSRS, servizio ospitato e distribuzione documentata sul runtime celld, a sua volta ospitabile in proprio | Nessuna versione con tag; il self-hosting richiede anche di gestire celld e l'archiviazione a oggetti, non di distribuire un binario autonomo per flashcard |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | App mobile Kotlin GPLv3, FSRS/SM-2, una versione Android e importazione APKG con modelli e contenuti multimediali | Creato nel 2026; iOS richiede la compilazione dal sorgente e la documentazione ufficiale non definisce una sincronizzazione generale tra telefoni |

Diversi nomi familiari non superano i criteri per ragioni più semplici. Il [repository open source](https://github.com/mochi-cards/open-source) di Mochi è una raccolta di integrazioni, non l'applicazione principale. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) è open source e ospitabile in proprio, ma il README ufficiale elenca ancora la ripetizione dilazionata tra le «Features coming soon», le funzionalità in arrivo. [OpenCards](https://github.com/holgerbrandl/opencards) non pubblica versioni dalla [v2.5.1 di gennaio 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) e il suo repository non riceve modifiche al codice dal 2018.

Se l'accesso al sorgente è facoltativo, il [confronto più ampio tra alternative ad Anki](/it/blog/best-anki-alternatives/) include prodotti che rispondono a un'esigenza diversa.

## Verifica la migrazione su cinque livelli distinti

«Importa da Anki» è quasi inutile senza la frase successiva. Una migrazione può riuscire su un livello e fallire sugli altri quattro.

| Livello | Cosa confrontare | Il segnale di riuscita ingannevole |
| --- | --- | --- |
| Contenuto delle carte | Ogni campo, marcatore di lacuna, tag, carattere speciale e nota ripetuta | Il numero totale di carte è simile |
| Struttura | Tipi di nota, modelli, carte sorelle generate e mazzi annidati | Il testo del fronte e del retro è apparso da qualche parte |
| Contenuti multimediali | Immagini e audio sono stati copiati, i riferimenti funzionano in locale e i file si riproducono offline | L'importatore ha riconosciuto i nomi dei file |
| Stato di apprendimento | Registro dei ripassi, stato, scadenza, intervallo, dimenticanze e parametri dell'algoritmo | Le carte importate ci sono, ma ripartono silenziosamente come nuove |
| Uscita e ripristino | Un'esportazione o un backup documentati possono ricostruire lo stesso sistema altrove | Un'esportazione testuale leggibile viene trattata come un backup completo |

Prima di spostare la raccolta vera, crea un mazzo di prova volutamente scomodo. Includi campi aggiuntivi, testi con lacune, modelli diretti e inversi, mazzi annidati, tag, immagini, audio e abbastanza cronologia dei ripassi da capire se la destinazione l'ha conservata.

Conserva intatto il backup originale. Dopo l'importazione, confronta separatamente i conteggi di note, carte e file multimediali. Esamina le scadenze invece di fidarti di un messaggio «programmazione dei ripassi importata». Ripassa offline su ogni dispositivo che intendi usare. Poi crea modifiche di prova in conflitto su due dispositivi e osserva come si comporta la sincronizzazione.

Usa entrambi i sistemi per qualche giorno. Eliminare la vecchia raccolta è l'ultimo passo, non la prova che il nuovo sistema abbia funzionato.

## Il self-hosting è completo solo dopo un ripristino

I prodotti qui sopra usano «self-hosted» per cose molto diverse:

- Anki e Mnemosyne eseguono **servizi di sincronizzazione**, mentre i client installati restano l'interfaccia di studio.
- SiYuan Docker esegue un'**applicazione per browser** che i client nativi non possono usare come server di sincronizzazione.
- Recall esegue un **relay di istantanee cifrate**, non la PWA stessa.
- Nibomo distribuisce uno **stack web e backend completo**, mentre le app native restano build separate.
- Essentialist **non ha server**; ciò che controlli sono i file locali.

Una volta chiarito questo punto, verifica la parte che chi gestisce un sistema tende a rimandare:

1. Crea carte, allega contenuti multimediali, completa dei ripassi e sincronizza da due client.
2. Salva tutti i database, i bucket di archiviazione a oggetti, i file locali, i segreti e i valori di configurazione previsti dalla documentazione.
3. Ripristina in un account vuoto, su una macchina vuota o in un'installazione isolata.
4. Confronta numero di carte, contenuti multimediali, cronologia dei ripassi, scadenze, accesso e sincronizzazione dei client.
5. Aggiorna la copia ripristinata e completa un altro ciclo di ripassi.

Se la ricostruzione dipende ancora dalla vecchia macchina, hai un servizio in funzione. Non hai un backup verificato.

## Domande frequenti

### Qual è la migliore app di flashcard open source nel 2026?

Anki è la scelta di partenza migliore per la maggior parte di chi studia. Unisce un modello maturo di raccolta, FSRS, ampia disponibilità di client e i formati ufficiali di backup ed esportazione più ricchi. Va precisato che i prodotti ufficiali iOS e web non sono coperti dal repository desktop open source e che il server da ospitare in proprio offre sincronizzazione, non studio via browser.

### Qual è la migliore alternativa open source ad Anki?

Mnemosyne è l'alternativa più consolidata tra quelle dedicate allo studio e documenta ufficialmente l'importazione dei tipi di carta personalizzati e dei dati di apprendimento di Anki. Recall ha un aspetto più moderno e importa direttamente file APKG su desktop, ma converte i primi due campi della nota, conserva solo un'istantanea della programmazione dei ripassi, importa immagini e non audio, e non trasferisce il registro completo dei ripassi.

### Posso ospitare Anki sul mio server?

Sì, puoi eseguire il server ufficiale di sincronizzazione di Anki per i client compatibili. Non è però un sostituto di AnkiWeb da ospitare in proprio: manca un'interfaccia di studio via browser.

### Open source significa offline?

No. Open source descrive la licenza e l'accesso al codice sorgente. Il comportamento offline dipende da dove il client conserva i dati e da quali azioni richiedono un servizio. Vale anche il contrario: un'app può mantenere i dati in locale senza pubblicare il codice del proprio nucleo.

### Il self-hosting garantisce la portabilità?

No. Il self-hosting ti dà il controllo su dove viene eseguito un servizio. La portabilità dipende da esportazioni, backup completi e un ripristino che hai davvero provato. Un database sul tuo server può comunque essere difficile da migrare, e un mazzo Markdown leggibile può comunque omettere lo stato dei ripassi conservato accanto al file.

## Il mio consiglio

Conserva o scegli **Anki**, a meno che uno dei suoi limiti non causi un problema reale. Scegli **Mnemosyne** per uno studio locale su desktop senza distrazioni e un'importazione da Anki consolidata. Usa **SiYuan** se le flashcard devono far parte di una base di conoscenza più ampia. Considera **Nibomo** se disporre dell'intero sorgente web, nativo e backend giustifica uno stack di produzione AWS. Scegli **Recall** per un client moderno basato sui dati locali, dopo averne verificato i limiti di conversione. Scegli **Essentialist** se Markdown semplice e nessun accesso alla rete contano più della sincronizzazione.

La migliore app di flashcard open source non è il repository con la lista di funzionalità più lunga. È quella i cui limiti su sorgente, dati offline, migrazione, sincronizzazione, hosting e ripristino corrispondono al sistema che sei davvero disposto a gestire.
