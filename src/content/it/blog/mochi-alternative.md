---
title: "Recensione di Mochi Flashcards (2026): piano gratuito, uso offline e confronto con Anki"
description: "Una recensione di Mochi basata sulla verifica delle fonti: piano gratuito, app offline, appunti Markdown, FSRS, sincronizzazione, importazione da Anki, esportazioni e limiti del self-hosting."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "flashcard Mochi"
  - "schede Mochi"
  - "Mochi vs Anki"
  - "Anki vs Mochi"
  - "Mochi è gratis"
  - "Mochi offline"
  - "prezzi Mochi"
  - "hosting Mochi"
  - "flashcard Markdown"
  - "ripetizione dilazionata Mochi"
---

Mochi parte da un documento Markdown, anziché dal classico modulo con fronte e retro. Aggiungi una riga con tre trattini e il documento si divide in più lati da ripassare. Puoi lasciarlo come appunto, collegarlo a un'altra flashcard oppure archiviarlo, così resta ricercabile senza entrare nella coda dei ripassi.

Quel piccolo separatore spiega a chi sono adatte le **flashcard di Mochi**. Mochi è una buona scelta per chi vuole appunti e ripetizione dilazionata nella stessa app che conserva i dati sul dispositivo, soprattutto se trova naturali Markdown, collegamenti di ritorno e un ripasso con la semplice scelta Ricordato/Dimenticato. Convince meno chi usa Anki da tempo e ha una collezione che dipende da varianti di carte generate automaticamente, HTML/CSS personalizzati, JavaScript, componenti aggiuntivi o controlli dettagliati della pianificazione.

Per chi usa un solo dispositivo, il piano gratuito è più di una prova: non serve registrarsi e Mochi documenta un uso offline illimitato. Il limite è che la sincronizzazione tra dispositivi fa parte del **piano Pro da 5 USD al mese**. Per chi viene da Anki, il costo più difficile da accettare è ciò che si perde nella migrazione. Mochi può importare un pacchetto Anki e la sua cronologia dei ripassi, ma non può conservare ogni modello, stile, script, impostazione del pianificatore o comportamento dei componenti aggiuntivi.

> **Per trasparenza:** sono Kirill Markin e sviluppo [Nibomo](/it/). Questa recensione delle modalità d’uso delle app si basa sulla verifica delle fonti; non sostengo di aver svolto una prova pratica del prodotto. Non ci sono link di affiliazione. Il confronto principale resta tra Mochi e Anki; il mio prodotto compare solo verso la fine, come alternativa chiaramente identificata.

**Informazioni verificate il:** 7 settembre 2026. A quella data, l'ultima [versione di Mochi](https://mochi.cards/changelog/) visibile era la 26.8.2, pubblicata il 10 agosto 2026. Prezzi e dettagli degli app store possono cambiare.

![Un restauratore di libri prova una piccola serie di schede collegate e piegate a fisarmonica, mentre l'archivio originale resta al sicuro in una scatola](/blog/mochi-alternative-v3.png)

## La recensione in breve

- **Scegli Mochi** se vuoi appunti Markdown e flashcard insieme, uso offline senza account su un solo dispositivo, collegamenti di ritorno e una scelta binaria durante il ripasso.
- **Scegli Anki** se ti servono tipi di nota collaudati, modelli HTML/CSS, componenti aggiuntivi, sincronizzazione gratuita tramite un servizio online, quattro valutazioni del ripasso o controlli FSRS più approfonditi.
- **Aspetta a cambiare** se ripassi già con costanza e non sai indicare quale problema concreto risolverebbe Mochi. Un'interfaccia nuova non è una ragione sufficiente per mettere a rischio anni di dati di pianificazione e carte personalizzate.
- **Fai una prova prima di migrare** se Anki ospita già la collezione che usi da anni. Mochi accetta file `.apkg` e può importare la cronologia dei ripassi, ma converte HTML in Markdown ed elimina CSS e JavaScript.

## Mochi e Anki a colpo d'occhio

| Criterio | Mochi | Anki |
|---|---|---|
| A chi si adatta meglio | Chi usa appunti collegati e Markdown e vuole tenere gli appunti accanto alle carte da ripassare | Chi cerca un sistema di flashcard collaudato e configurabile |
| Creazione delle carte | Un documento Markdown si divide in più lati aggiungendo `---`; sono disponibili anche campi e modelli | Le note contengono campi; i modelli HTML/CSS generano una o più carte |
| Modalità di ripasso | Le nuove carte entrano prima in una fase di apprendimento; quelle apprese usano Dimenticato / Ricordato | Le carte usano Ripeti / Difficile / Normale / Facile |
| Pianificazione | Algoritmo di Mochi come impostazione predefinita; FSRS è facoltativo | FSRS oppure il precedente SM-2, con strumenti più completi per configurare FSRS |
| Uso gratuito | Nessuna registrazione e uso offline illimitato | App desktop gratuite e sincronizzazione AnkiWeb gratuita; l'app ufficiale per iOS è a pagamento |
| Sincronizzazione tra dispositivi | Pro, 5 USD al mese | Gratuita tramite AnkiWeb |
| Piattaforme | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, AnkiMobile ufficiale, AnkiDroid indipendente |
| Formati portabili | Esportazioni nel formato nativo `.mochi`, in Markdown e in CSV | Formati nativi `.colpkg` e `.apkg`, più testo separato da tabulazioni |
| Limiti sul controllo dei dati e sull'hosting | Con dati conservati sul dispositivo; l'app principale non è presentata come open source e non è documentato un servizio di sincronizzazione supportato da installare su un proprio server | Il repository principale ha licenza AGPL; è documentato un server ufficiale di sincronizzazione da gestire in proprio |

La distinzione utile è tra **semplicità centrata sugli appunti e controllo dell'intera collezione**.

## Come è organizzata l'interfaccia di Mochi

L'interfaccia di Mochi si capisce meglio seguendo il percorso di una carta.

Ogni carta appartiene a un mazzo. Fai clic su **Nuova carta (New Card)** e trovi uno spazio Markdown, anziché caselle fisse per domanda e risposta. Una singola carta può contenere titoli, elenchi, codice, immagini, campi strutturati e collegamenti. Aggiungi `---` tra i blocchi per creare due o più lati da ripassare. Aggiungi `[[double brackets]]`, cioè doppie parentesi quadre, per fare riferimento a un'altra carta; Mochi crea automaticamente un collegamento di ritorno. La [panoramica ufficiale sulle carte](https://mochi.cards/docs/cards/) documenta anche i modelli, i cui segnaposto mostrano i valori dei campi strutturati.

Le carte possono svolgere due funzioni senza dover stare in sistemi separati:

- una carta da ripassare è suddivisa in lati ed entra nel ciclo di ripetizione dilazionata;
- un appunto da consultare può restare nello stesso mazzo ed essere archiviato: in questo modo esce dalle code delle carte nuove e di quelle in scadenza senza perdere contenuto, tag, collegamenti o cronologia.

Le [viste dei mazzi](https://mochi.cards/docs/decks/custom-views/) sono combinazioni salvate di filtri, ordinamento e disposizione. Puoi mantenere una griglia per la consultazione ordinaria e creare un'altra vista per un tag, le carte in scadenza, una bassa ritenzione o un ripasso recente. Mochi permette anche di trasformare una vista in una sessione di studio intensivo senza modificare la normale pianificazione o la cronologia dei ripassi. È più concreto che definire l'interfaccia «pulita»: lo stesso mazzo può funzionare come quaderno, database filtrato e coda di studio.

Il [ripasso quotidiano](https://mochi.cards/docs/getting-started/reviewing-cards/) prevede due fasi. In **Nuove carte (New cards)** puoi aggiungere una carta al programma dei ripassi oppure scegliere Ripeti (Again) per rivederla a breve. Una volta appresa, una carta in scadenza mostra il lato successivo e chiede di scegliere tra **Dimenticato (Forgot)** e **Ricordato (Remembered)**. Se l'hai dimenticata, Mochi la inserisce in una coda per ripassarla di nuovo prima di azzerarne i progressi. La scelta al momento del ripasso è volutamente limitata.

## Mochi è gratis? E cosa funziona offline?

Sì, ma «gratis» e «offline» significano cose diverse a seconda di dove lo usi. La [pagina dei prezzi di Mochi](https://mochi.cards/) elenca:

- **Free:** 0 USD per sempre, senza obbligo di registrazione, con uso offline illimitato.
- **Pro:** 5 USD al mese, con l'aggiunta di sincronizzazione tra dispositivi, pubblicazione dei mazzi, campi dinamici, integrazione con l'IA e assistenza via email.

Mochi funziona su macOS, Windows, Linux, iOS, Android e sul web. La [guida al download e all'installazione](https://mochi.cards/docs/getting-started/download-and-install/) chiarisce i limiti pratici:

| Ambiente | Cosa significano gratis e offline |
|---|---|
| App installata su computer o dispositivo mobile | Puoi usare Mochi offline senza account. I dati sono conservati sul dispositivo, quindi una sola app installata può bastare per studiare interamente a costo zero. |
| App web senza Pro | I contenuti vengono conservati nella memoria offline del browser. Mochi avverte che il browser può cancellare questi dati senza preavviso. |
| La stessa collezione su più dispositivi | La sincronizzazione automatica tra dispositivi è una funzione Pro, anche se ogni app installata può funzionare offline. |

Uso offline e sincronizzazione sono due promesse distinte. Non ti serve Pro solo per creare carte o ripassare in un'app scaricata. Ti serve se vuoi che la stessa collezione aggiornata ti segua automaticamente dal portatile al telefono. Per i dati importanti del piano gratuito, conserva un backup nativo anziché considerare il dispositivo, e soprattutto la memoria del browser, come unica copia.

Se l'uso offline è il fattore decisivo, confronta ciò che puoi fare sui dispositivi che usi in [Anki funziona offline?](/blog/does-anki-work-offline/) e nella più ampia [guida alle app di flashcard offline](/blog/best-offline-flashcards-app/).

## Le flashcard Markdown sono il vero motivo per scegliere Mochi

Il vero vantaggio di Mochi è il modo in cui Markdown cambia il materiale di partenza che scrivi e aggiorni.

Una carta di Mochi resta leggibile come testo. Lo stesso documento può contenere una breve spiegazione, un blocco di codice, collegamenti a idee correlate e separatori tra i lati da ripassare. Le carte possono anche usare campi e modelli quando serve una struttura ripetuta. Quando applichi un modello, Mochi ne visualizza il Markdown con i segnaposto dei campi e ignora il Markdown della carta durante la visualizzazione, senza cancellarlo.

Anki parte da un modello diverso. Una nota memorizza dei campi e i [modelli delle carte](https://docs.ankiweb.net/templates/intro.html) decidono quali campi mostrare e quali carte generare. I modelli usano HTML, con CSS per lo stile. Una singola nota di vocabolario può quindi generare carte di riconoscimento e di produzione, mantenendo i dati sottostanti in un solo posto.

Questa struttura dà ad Anki più possibilità per layout condizionali, varianti di carte generate automaticamente, risposte digitate, stili personalizzati e modalità di lavoro ampliate dai componenti aggiuntivi. Significa anche che Anki non è un'app di flashcard con supporto nativo a Markdown. Per lavorare in Markdown con Anki serve un passaggio aggiuntivo di conversione o un componente aggiuntivo.

La domanda pratica è semplice: vuoi un appunto che possa diventare una carta oppure un tipo di nota strutturato che possa generare più carte? Mochi è pensato per il primo caso. Anki per il secondo.

## La ripetizione dilazionata di Mochi ora include FSRS

I confronti che dicono che Mochi non ha FSRS sono superati. Mochi ha aggiunto una versione preliminare di FSRS nel 2025 e ha continuato a pubblicare correzioni relative al pianificatore. Tuttavia, [l'algoritmo di Mochi resta l'impostazione predefinita](https://mochi.cards/docs/reviewing/fsrs/).

L'algoritmo predefinito cambia gli intervalli usando moltiplicatori fissi dopo ogni ripasso in cui hai ricordato o dimenticato la risposta. Passa a FSRS nelle impostazioni di ripasso (Review Settings) e le carte già apprese passeranno a FSRS senza perdere la cronologia. Puoi impostare la ritenzione desiderata, inserire parametri personalizzati e tornare indietro in seguito.

Mochi mantiene le sue valutazioni binarie con entrambi i pianificatori:

- **Dimenticato (Forgot)** corrisponde a Ripeti (Again) in FSRS.
- **Ricordato (Remembered)** corrisponde a Normale (Good) in FSRS.

La documentazione di Mochi afferma che la valutazione binaria funziona con FSRS, pur perdendo parte delle informazioni che fornirebbero Difficile (Hard) e Facile (Easy). Accetta parametri personalizzati ottimizzati, ma non ha un ottimizzatore integrato; per generare parametri personali servono un ottimizzatore FSRS esterno e la cronologia dei ripassi di Mochi.

Le [impostazioni FSRS di Anki](https://docs.ankiweb.net/deck-options.html#fsrs) vanno oltre. Ritenzione desiderata e parametri possono essere associati a gruppi di opzioni; l'ottimizzatore integrato può adattare i parametri alla cronologia dei ripassi e il simulatore stima il numero di ripassi o i minuti di studio con impostazioni diverse. Anki registra inoltre quattro esiti: Ripeti (Again), Difficile (Hard), Normale (Good) e Facile (Easy).

Quei pulsanti aggiuntivi aiutano solo se li usi in modo coerente. Il manuale di Anki considera Difficile una risposta ricordata correttamente. Premere Difficile quando hai dimenticato la risposta trasmette a FSRS un'informazione sbagliata e può produrre intervalli troppo lunghi.

Scegli il ripasso binario di Mochi se una scelta tra ricordato e dimenticato rende la sessione più chiara. Scegli Anki se vuoi l'informazione aggiuntiva delle quattro valutazioni e userai il suo ottimizzatore, i controlli della ritenzione, i gruppi di opzioni o il simulatore del carico di studio. Per un confronto tra i pianificatori, anziché tra le app, consulta [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

## Mochi e Anki: si paga per cose diverse

Per studiare su un solo computer, entrambe le app possono non costare nulla. Quando aggiungi altri dispositivi, il costo emerge in punti diversi.

Mochi chiede **5 USD al mese** per la sincronizzazione Pro e la include insieme a pubblicazione, campi dinamici, integrazione con l'IA e assistenza. Le app desktop di Anki sono gratuite e il [sito ufficiale di Anki](https://apps.ankiweb.net/) descrive la sincronizzazione AnkiWeb come gratuita. AnkiMobile è l'app ufficiale a pagamento per iPhone e iPad; AnkiDroid è un client Android gratuito sviluppato in modo indipendente.

La risposta a «Quale costa meno?» dipende quindi dai dispositivi che usi:

- un computer: entrambe possono essere gratuite;
- più computer o dispositivi Android: la sincronizzazione gratuita di Anki tramite il servizio online evita un abbonamento;
- iPhone o iPad: Anki aggiunge un acquisto una tantum dell'app, mentre Mochi riserva la sincronizzazione tra dispositivi al piano Pro con pagamento ricorrente;
- chi usa Mochi e vuole già pubblicazione, campi dinamici o integrazione con l'IA può considerare la sincronizzazione come una parte del pacchetto anziché come l'intero costo.

Controlla l'App Store del tuo paese prima di confrontare i costi esatti su iOS. Questa recensione non riporta un prezzo dell'App Store che può variare da un mercato all'altro.

## Hosting di Mochi e uso locale sono due cose diverse

Tre etichette vengono spesso confuse:

- **Local-first** significa che la copia di lavoro risiede sul tuo dispositivo e l'app può continuare a funzionare senza il proprio servizio cloud.
- **Open source** significa che il codice sorgente è disponibile con una licenza che ne consente l'esame e la modifica.
- **Self-hosted** significa che il prodotto documenta una modalità supportata per eseguire il servizio in questione sulla tua infrastruttura.

Mochi documenta chiaramente il funzionamento local-first. Non presenta la sua app principale come open source: il link «Open source» nel piè di pagina del sito pubblico porta a [una raccolta di integrazioni](https://github.com/mochi-cards/open-source), non all'applicazione principale. Il sito ufficiale non documenta nemmeno un'alternativa supportata alla sincronizzazione Pro da installare su un proprio server.

Se cerchi **hosting Mochi** perché vuoi un server tuo, il limite è questo: puoi conservare dati locali e backup nativi, ma il percorso documentato per passare da un dispositivo all'altro è Mochi Pro. Il modello local-first offre un utile controllo sui dati; non equivale al self-hosting.

Il repository principale di Anki ha [licenza AGPL versione 3 o successiva](https://github.com/ankitects/anki/blob/main/LICENSE), con eccezioni elencate per alcuni componenti. Il manuale ufficiale documenta anche un [server di sincronizzazione da gestire in proprio](https://docs.ankiweb.net/sync-server.html) per utenti esperti. Quel server sostituisce la sincronizzazione AnkiWeb per i client compatibili; non è una copia del sito AnkiWeb da ospitare in proprio e Anki si aspetta che chi lo gestisce sappia affrontare problemi di riga di comando, rete, firewall, protocollo e aggiornamenti.

## Cosa conserva un'importazione da Anki e cosa cambia

La [documentazione di importazione](https://mochi.cards/docs/import-and-export/importing/) di Mochi indica che si possono importare file `.apkg` di Anki, compresa la cronologia dei ripassi. Ma «importato» ed «equivalente» non sono lo stesso risultato.

Durante l'importazione, Mochi converte HTML in Markdown e rimuove CSS e JavaScript. È una conversione di formato tra due modelli diversi di carta. I contenuti semplici con fronte e retro sono il caso più facile. Una carta che dipende da stile, logica dei modelli, interazioni con risposte digitate o JavaScript va controllata dopo l'importazione.

Anche la cronologia dei ripassi richiede una scelta esplicita durante l'esportazione. Il [manuale di esportazione](https://docs.ankiweb.net/exporting.html) di Anki spiega che **Includi informazioni di pianificazione (Include Scheduling Information)** determina se la cronologia dei ripassi viene inserita nel pacchetto. Se lasci l'opzione disattivata, Mochi non può recuperare una cronologia che il file `.apkg` non ha mai contenuto.

Anche quando la cronologia viene trasferita, non aspettarti date di ripasso future identiche. Le due app possono usare pianificatori, valutazioni, ritenzione desiderata, parametri, passi di apprendimento e impostazioni dei mazzi diversi. Gli eventi conservati danno al nuovo pianificatore dati su cui lavorare; non rendono identici i sistemi.

## I backup nativi e il testo portabile servono a scopi diversi

Prima di spostare qualsiasi cosa, conserva un backup che possa ripristinare il sistema originale. Un'esportazione leggibile è utile, ma non sempre permette un ripristino.

La [guida ai backup](https://mochi.cards/docs/getting-started/backing-up/) di Mochi documenta due modi per creare un backup nativo:

- Copiare l'intera cartella utente conserva contenuto, cronologia dei ripassi, allegati, impostazioni dell'app e stato di accesso.
- Un'esportazione `.mochi` conserva mazzi, carte, modelli e campi, allegati, tag e metadati, cronologia dei ripassi, ordine delle carte e struttura dei mazzi.

Le [esportazioni Markdown e CSV](https://mochi.cards/docs/import-and-export/exporting/) di Mochi sono formati pensati per la portabilità. Markdown crea un file per carta e cartelle per i sottomazzi, ma non conserva cronologia dei ripassi, ordine delle carte, modelli e tag dei metadati, a meno che i tag non siano nel Markdown. CSV può esportare i campi dei modelli oppure i lati fronte/retro così come vengono visualizzati, ma non conserva cronologia dei ripassi, modelli o tag dei metadati, a meno che questi tag non siano incorporati nel contenuto.

Anki fa una distinzione simile:

- Un file `.colpkg` esporta l'intera collezione con la pianificazione e può includere contenuti multimediali. Importarlo sostituisce le carte nella collezione Anki di destinazione.
- Un file `.apkg` esporta un mazzo e i suoi sottomazzi, con opzioni per informazioni di pianificazione, gruppi di opzioni e contenuti multimediali.
- Le note in testo semplice usano campi separati da tabulazioni con formattazione HTML incorporata. Conservano contenuto modificabile, ma non riproducono il funzionamento completo della collezione.

Tornare da Mochi ad Anki significa normalmente passare per CSV. Anki può [associare le colonne di testo ai campi delle note](https://docs.ankiweb.net/importing/text-files.html), ma collegamenti di Mochi, comportamento a più lati, modelli e cronologia dei ripassi non diventano oggetti Anki equivalenti attraverso quel file. Conserva l'esportazione `.mochi` anche quando la copia in Anki sembra corretta.

## Fai una prova reversibile con un mazzo rappresentativo

Il messaggio di conferma di un'importazione dimostra che un file è stato accettato. Non dimostra che la collezione che usi ogni giorno funzioni ancora, né che tu possa riportare indietro contenuti utilizzabili. Prova entrambe le direzioni lasciando intatto il tuo normale profilo Anki.

1. **Fai un backup completo di Anki.** Esporta un file `.colpkg` con i contenuti multimediali e conservalo fuori dal profilo di lavoro.
2. **Verifica che il backup si apra.** Crea un profilo Anki temporaneo vuoto e importa lì il file `.colpkg`. L'importazione di un pacchetto collezione sostituisce la collezione di destinazione: ecco perché il profilo temporaneo è importante.
3. **Crea un mazzo rappresentativo dentro quel profilo temporaneo.** Tienilo abbastanza piccolo da poter controllare ogni carta, ma includi i comportamenti su cui fai affidamento: carte di base e inverse, cloze, modelli personalizzati, CSS, JavaScript, immagini, audio, equazioni, tag, mazzi annidati e cronologia dei ripassi.
4. **Esporta quel mazzo come `.apkg`.** Includi informazioni di pianificazione, gruppi di opzioni e contenuti multimediali quando servono. Queste opzioni inseriscono i dati nel pacchetto Anki; non promettono che Mochi riproduca ogni impostazione.
5. **Importalo in un nuovo mazzo Mochi.** Lascia invariati il profilo Anki che usi ogni giorno e la sua coda di carte in scadenza.
6. **Controlla prima di ripassare.** Confronta contenuto, formattazione, campi, contenuti multimediali, tag, struttura dei mazzi e cronologia. Presta particolare attenzione a tutto ciò che dipendeva da HTML, CSS, JavaScript o varianti di carte generate automaticamente.
7. **Scegli il pianificatore consapevolmente.** Mochi parte dal proprio algoritmo. Attiva FSRS solo se è quello che intendi usare dopo la prova.
8. **Ripassa la copia durante una normale settimana di studio.** Valuta la facilità di modifica delle carte in Markdown, la fase Nuove carte, la scelta Ricordato/Dimenticato, il funzionamento offline e, se l'hai pagata, la sincronizzazione sui dispositivi che porti davvero con te.
9. **Prova il percorso di ritorno.** Esporta il mazzo di prova di Mochi come `.mochi` per avere un backup nativo e come CSV per Anki. Usa il CSV con i valori dei campi quando contano i campi riutilizzabili; usa il CSV con i lati così come vengono visualizzati quando ti serve soprattutto il contenuto visibile di fronte e retro. Importa quel CSV in un altro profilo Anki vuoto e associa le sue colonne a un tipo di nota adatto.
10. **Annota ogni perdita che accetti.** Controlla separatamente il percorso di andata e quello di ritorno. Stile esatto, comportamento a più lati, comportamento dei componenti aggiuntivi, varianti generate, valutazioni dei ripassi, cronologia o date di ripasso future possono contare nell'uso quotidiano più di quanto sembrasse in una tabella comparativa.

Il ritorno tramite CSV è una migrazione dei contenuti, non un ripristino completo di Mochi: non trasferisce cronologia dei ripassi, modelli o tag dei metadati, a meno che questi tag non siano incorporati nel contenuto. Se Mochi non risolve il problema che avevi individuato, elimina il mazzo di prova e continua con il profilo Anki originale. Se lo risolve, migra un mazzo reale alla volta e conserva i backup `.colpkg` di Anki e `.mochi` di Mochi per diversi cicli di ripasso ordinari.

## A chi sono adatte le flashcard di Mochi?

Mochi è una buona scelta quando:

- usi già Markdown per scrivere e organizzare le idee;
- appunti e carte da ripassare devono stare nello stesso spazio di lavoro, collegati tra loro;
- vuoi una semplice scelta Ricordato/Dimenticato anziché quattro valutazioni;
- l'uso offline su un solo dispositivo ti basta per studiare gratis, oppure la sincronizzazione Pro vale 5 USD al mese;
- la tua collezione è nuova o abbastanza semplice da rendere poco rischiosa una conversione da Anki.

Resta con Anki quando:

- i tuoi tipi di nota generano diverse varianti di carte importanti;
- modelli HTML/CSS, JavaScript, componenti aggiuntivi o mazzi condivisi fanno parte del sistema;
- la sincronizzazione gratuita tra dispositivi conta più della scrittura in Markdown;
- vuoi l'ottimizzatore FSRS di Anki, i controlli dei gruppi di opzioni, quattro valutazioni e il simulatore del carico di studio;
- anni di dati sui ripassi e comportamenti personalizzati funzionano già bene.

L'alternativa a Mochi più sensata dipende dal motivo per cui nessuna delle due scelte fa al caso tuo. Per una collezione nuova e più semplice, le [funzionalità di Nibomo](/it/features/) includono ripassi con FSRS, studio offline e sincronizzazione, trasferimento di carte, tag e contenuti multimediali in un formato portabile, accesso tramite agenti e un percorso documentato per il self-hosting. Lo sviluppo io, e i limiti contano: non sostituisce il quaderno Markdown con appunti collegati di Mochi né il sistema collaudato di modelli e componenti aggiuntivi di Anki. La [guida introduttiva](/docs/getting-started/) mostra le attuali modalità d'uso tramite servizio online, app mobili, agenti e installazione sulla propria infrastruttura.

## La scelta finale

Mochi è più di un'interfaccia Anki più bella. La sua vera idea è che un appunto Markdown, un elemento di una rete di conoscenze collegate e una carta con ripetizione dilazionata possano essere lo stesso oggetto. Il piano gratuito copre il lavoro offline senza account; Pro aggiunge le funzioni del servizio online, compresa la sincronizzazione tra dispositivi.

È un buon compromesso per chi comincia una nuova collezione centrata su Markdown. Può anche valere la pena passare da Anki se la prova con un mazzo rappresentativo dimostra che Markdown nativo e ripassi binari eliminano ostacoli concreti.

Per chi usa Anki da tempo, serve invece una ragione dimostrabile per cambiare. Fai un backup della collezione, prova le carte con i comportamenti più personalizzati e resta con Anki, a meno che Mochi non migliori abbastanza lo studio di settimana in settimana da giustificare le funzioni specifiche a cui rinunci in fatto di formattazione, modelli, pianificazione ed ecosistema.
