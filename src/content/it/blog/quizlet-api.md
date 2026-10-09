---
title: "Quizlet ha un'API pubblica nel 2026? Situazione attuale e alternative sicure"
description: "Quizlet ha un'API? Al 18 agosto 2026 non è documentata un'API pubblica con accesso autonomo. Confronta le alternative supportate."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "API Quizlet"
  - "Quizlet ha un'API"
  - "API pubblica Quizlet"
  - "API Quizlet per sviluppatori"
  - "alternativa all'API Quizlet"
  - "automatizzare le flashcard"
---

Al 18 agosto 2026, Quizlet non documenta un'API pubblica per sviluppatori con accesso autonomo, né un portale pubblico per sviluppatori. Uno sviluppatore indipendente non dispone attualmente di un percorso ufficiale per registrare un'app, ottenere una chiave API di Quizlet e usare endpoint documentati per leggere o scrivere dati delle flashcard.

Questa conclusione riguarda la documentazione pubblica di Quizlet, non i suoi sistemi interni. Quizlet offre integrazioni con altri prodotti e con i partner: la sua app in ChatGPT e il componente aggiuntivo per Google Classroom sono due esempi attuali. Nessuno dei due mette a disposizione delle altre applicazioni un'API Quizlet di uso generale per sviluppatori.

**Informazioni verificate:** 18 agosto 2026.

> **Dichiarazione di interesse:** Sono Kirill Markin e sviluppo Nibomo. La sua Agent API e il suo server MCP sono tra le alternative descritte qui sotto. Nibomo non è compatibile con Quizlet e non importa automaticamente i set di Quizlet.

![Uno sviluppatore confronta l'esportazione da Quizlet, l'incorporamento, le integrazioni specifiche e un'API documentata per flashcard](/blog/quizlet-api.png)

## Risposta breve: non è documentata un'API Quizlet con accesso autonomo

Se hai cercato «Quizlet ha un'API?» perché vuoi automatizzare Quizlet stesso, la risposta pratica attuale è che **non è documentata un'API pubblica con accesso autonomo**.

Diverse funzionalità ufficiali possono sembrare simili a un'API a chi le osserva dall'esterno. Rispondono però a esigenze più circoscritte:

| Che cosa ti serve | Percorso supportato | Utile per | Che cosa non offre |
|---|---|---|---|
| Trasferire il testo di un set che hai creato | [Esportazione dal sito di Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Una copia una tantum di termini e definizioni | Immagini, esportazione di set copiati, cronologia di studio o accesso API |
| Inserire un set pubblico in un sito web o in una pagina LMS | [Incorporamento di Quizlet](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Un'attività di studio con il marchio Quizlet all'interno della tua pagina | Dati strutturati delle schede o accesso in lettura e scrittura |
| Trasformare una conversazione di ChatGPT in un set di Quizlet | [App Quizlet in ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Creare un set e visualizzarne l'anteprima tramite `@Quizlet` | Credenziali o endpoint per la tua app |
| Assegnare attività di Quizlet in Google Classroom | [Componente aggiuntivo Quizlet per Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Trovare, assegnare e monitorare attività in Classroom | Un'API generale per software didattici personalizzati |
| Creare una tua integrazione con Quizlet | Attualmente non è documentato un percorso di accesso autonomo | Potrebbe esistere un accordo con un partner specifico | Registrazione pubblica, chiavi API o specifiche documentate per i dati delle schede |
| Automatizzare il tuo spazio di lavoro per le flashcard | [Agent API di Nibomo](/it/docs/api/) o [connettore MCP](/it/docs/mcp-connector/) | Letture e scritture ripetute di schede e mazzi, limitate allo spazio di lavoro | Compatibilità con Quizlet o importazione automatica da Quizlet |

La distinzione è semplice: copiare una volta il testo delle tue schede è un'esportazione. Mostrare Quizlet in un'altra pagina è un incorporamento. Un'integrazione specifica funziona solo nel flusso di lavoro del prodotto a cui è destinata. Un software che crea, legge e modifica schede ripetutamente ha bisogno di un'API documentata per la lettura e la scrittura.

## Esportazione, incorporamento e accesso dei partner non sono API pubbliche

Un'API pubblica offre agli sviluppatori esterni un contratto di utilizzo: documentazione, autenticazione, operazioni supportate, regole d'uso e un modo per ottenere le credenziali. Nessuna delle attuali funzionalità pubbliche di Quizlet permette di completare questo percorso in autonomia.

L'**esportazione** di Quizlet è un trasferimento manuale. Chi ha creato un set può usare il sito web per organizzare i termini e le definizioni, selezionare **Copia testo (Copy text)** e incollare il risultato altrove. Quizlet specifica che le immagini non possono essere esportate, che i set copiati non sono esportabili e che la funzione è disponibile solo sul sito. È adatta a una migrazione una tantum eseguita con attenzione. Non consente a un software di mantenere sincronizzati due sistemi.

L'**incorporamento** serve a mostrare i contenuti, non ad accedere ai dati. Quizlet permette di copiare l'HTML di un set pubblico nelle modalità Match, Learn, Test, Flashcards o Spell. L'attività incorporata conserva il logo di Quizlet e gli studenti interagiscono con la sua interfaccia. La tua applicazione non riceve il set sotto forma di record di schede che può modificare.

Un'**integrazione specifica** segue un flusso di lavoro concordato tra i prodotti. Quizlet può collaborare con ChatGPT o Google Classroom senza offrire la stessa interfaccia a ogni sviluppatore. Questi lanci dimostrano che le integrazioni esistono; non dimostrano che dietro di esse ci sia un'API pubblica di Quizlet disponibile per un uso generale.

Per lo stesso motivo, un vecchio wrapper o una richiesta visibile negli strumenti di sviluppo del browser non costituiscono un'API Quizlet supportata. Mancano la documentazione pubblica e un contratto stabile per gli sviluppatori.

## Scegli il percorso adatto al lavoro da fare

### Per un backup o una migrazione una tantum, usa l'esportazione

Usa la procedura ufficiale di esportazione di Quizlet per un set che hai creato tu. Poiché l'ultimo passaggio è **Copia testo (Copy text)**, conserva intatta la prima copia incollata prima di sistemare i separatori o associare i campi. Stai salvando termini e definizioni, non scaricando un pacchetto da cui ripristinare il mazzo. Le immagini e la cronologia di studio restano in Quizlet.

Trovi i passaggi pratici in [Come esportare i set di Quizlet nel 2026](/it/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). La guida tratta la copia originale e quella di lavoro, UTF-8, le tabulazioni, le definizioni su più righe e la differenza tra trasferire il contenuto delle schede e trasferire lo stato della pianificazione dei ripassi.

L'esportazione è adatta a un trasferimento da completare una volta sola. Non lo è per creare contenuti ogni giorno, sincronizzare sistemi o apportare modifiche ripetute tramite software.

### Per mostrare i contenuti, usa l'incorporamento ufficiale

Se gli studenti devono studiare un set pubblico di Quizlet dal sito della classe o da una pagina LMS, usa il codice di incorporamento fornito da Quizlet sul suo sito. Scegli l'attività, seleziona **Copia HTML (Copy HTML)** e inserisci il risultato nella pagina. Gli studenti possono usare un'attività interattiva di Quizlet; il sito che la ospita non riceve i dati grezzi delle schede.

Spesso è tutto ciò che serve a un insegnante. Chiamarla API fa solo sembrare l'esigenza più complessa di quanto sia.

### Per ChatGPT o Google Classroom, usa l'integrazione specifica

L'annuncio di Quizlet del 10 marzo 2026 relativo a ChatGPT descrive una procedura precisa: collegare l'app Quizlet, iniziare un prompt con `@Quizlet`, visualizzare l'anteprima del set generato in ChatGPT e poi aprirlo in Quizlet per personalizzarlo e studiare. È un modo supportato per creare un set di Quizlet da quella conversazione. Non fornisce al tuo bot, script o sito web credenziali API di Quizlet riutilizzabili.

Anche l'annuncio di Quizlet del 30 giugno 2026 relativo a Google Classroom è circoscritto. Il componente aggiuntivo consente agli insegnanti di trovare e assegnare attività, tra cui domande di esercitazione, flashcard e giochi, e poi monitorare la partecipazione e i progressi all'interno di Classroom. Quizlet specifica che è necessario Google Workspace for Education Plus; gli insegnanti potrebbero dover chiedere all'amministratore IT di autorizzare o rendere disponibile il componente aggiuntivo.

Se uno di questi flussi di lavoro corrisponde già al tuo obiettivo, usalo. Se ti serve un'applicazione personalizzata, nessuna delle due integrazioni sostituisce un accesso pubblico per sviluppatori.

### Per un'automazione ricorrente, scegli un'interfaccia documentata di lettura e scrittura

Un'automazione continuativa richiede che il tuo software possa svolgere lo stesso lavoro più volte in modo affidabile: creare schede dagli appunti, elencare i mazzi, aggiornare le risposte o gestire uno spazio di lavoro nel tempo. Copiare il testo negli appunti non offre le garanzie di un'API documentata.

La strada sicura è un sistema di flashcard che documenti esplicitamente come si autentica un software esterno e quali operazioni di lettura e scrittura supporta. Questo può significare scegliere un'alternativa all'API di Quizlet per il flusso automatizzato, continuando a usare Quizlet per le attività di studio disponibili agli utenti.

## Che cosa offre davvero l'API di Nibomo come alternativa

Nibomo pubblica due modalità di accesso allo stesso insieme limitato di dati di ciascun utente:

- L'[Agent API esterna](/it/docs/api/) parte da `GET https://api.nibomo.com/v1/`. La risposta iniziale di discovery guida un agente nell'accesso con OTP via email, nella creazione di una chiave API e nella selezione dello spazio di lavoro. Le letture usano una route per le query in stile SQL; le scritture usano una route di esecuzione separata.
- Il [server MCP remoto](/it/docs/mcp-connector/) è disponibile all'indirizzo `https://mcp.nibomo.com/mcp`. I client MCP dispongono di otto strumenti: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` e gli strumenti di ripasso `next_review_card`, `reveal_answer` e `submit_review`.

`get_usage_limits` — consulta in sola lettura il piano dell'account, i limiti e l'utilizzo dell'AI nel mese corrente; non legge né modifica le schede.

Entrambe le modalità limitano l'accesso allo spazio di lavoro selezionato. Le risorse pubblicate sono `workspace`, `cards`, `decks` e `review_events`, e i risultati sono limitati a 100 righe per istruzione. L'interfaccia in stile SQL usa un dialetto limitato e non dà accesso diretto a PostgreSQL. Non è disponibile uno schema OpenAPI, quindi i flussi che dipendono da client generati a partire da OpenAPI richiedono un'interfaccia diversa.

Questo può aiutare uno sviluppatore o un agente AI ad automatizzare le proprie flashcard. Non può leggere un URL di Quizlet, replicare un account Quizlet o funzionare come client Quizlet non documentato. Non esiste un'importazione automatica da Quizlet. Per una migrazione, esporta prima i termini e le definizioni del tuo set, controlla il testo e poi associa termini e definizioni ai campi delle schede nel sistema di destinazione. Quest'ultimo crea il proprio stato di studio; la cronologia di Quizlet non viene trasferita.

Per le differenze tra i prodotti oltre all'accesso API, consulta il [confronto con un'alternativa open source a Quizlet](/blog/quizlet-alternative/).

## Le richieste private del browser non sono una scorciatoia sicura

L'interfaccia web di Quizlet invia richieste di rete, come qualsiasi applicazione web moderna. Trovare una di queste richieste non la trasforma in un endpoint supportato per il tuo programma.

Gli endpoint privati usati dal browser possono dipendere da cookie di sessione, formati interni, controlli contro gli abusi e presupposti legati all'interfaccia attuale. Possono cambiare senza un versionamento pubblico o indicazioni per la migrazione. C'è poi un limite esplicito: i [Termini di servizio di Quizlet](https://quizlet.com/tos), aggiornati l'ultima volta il 28 maggio 2026, vietano lo scraping e altre forme di estrazione automatizzata, oltre all'uso automatizzato non autorizzato del servizio.

È una base fragile e rischiosa per uno script personale, tanto più per un prodotto. Qui non fornirò endpoint ipotizzati né passaggi di reverse engineering.

Per un tuo set, usa l'esportazione quando ti serve un trasferimento una tantum. Incorpora un set pubblico quando gli studenti devono usarlo in un'altra pagina. Usa l'integrazione specifica con ChatGPT o Google Classroom per quei precisi flussi di lavoro. Per letture e scritture ricorrenti, scegli un software che documenti le regole e le operazioni disponibili per l'automazione, oppure continua a svolgere manualmente la parte in Quizlet finché Quizlet non pubblica un contratto API.

## Come capire se la situazione cambia

Quizlet potrebbe avviare un programma per sviluppatori dopo la data di verifica di questo articolo. Il segnale da cercare è un portale ufficiale per sviluppatori o una documentazione che spieghi chi può registrarsi, come funziona l'autenticazione, quali operazioni sulle schede sono supportate e quali regole d'uso si applicano.

Un altro wrapper di terze parti non cambierebbe la risposta. Nemmeno una nuova collaborazione con un partner specifico. Finché Quizlet non documenta un accesso autonomo per sviluppatori, valuta con cautela le affermazioni sull'esistenza attuale di un'API Quizlet e scegli il percorso supportato che corrisponde al lavoro da fare.
