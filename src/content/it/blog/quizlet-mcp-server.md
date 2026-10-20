---
title: "Quizlet ha un server MCP nel 2026? Cosa possono usare Claude e Codex"
description: "Nel 2026 Quizlet non documenta un server MCP. Confronta la sua app per ChatGPT, l’esportazione riservata agli autori e un percorso prudente per l’accesso ricorrente da Claude o Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "MCP Quizlet"
  - "server MCP Quizlet"
  - "connettore Quizlet Claude"
  - "collegare Quizlet a Claude"
  - "Quizlet Codex"
  - "app Quizlet per ChatGPT"
  - "alternativa all’API di Quizlet"
---

Al 12 settembre 2026, la documentazione pubblica di Quizlet non descrive né un server MCP né un’API pubblica per sviluppatori con accesso self-service. Se cercavi un URL MCP di Quizlet da incollare in Claude, Codex o un altro client MCP, oggi la documentazione di Quizlet non offre una procedura di configurazione pubblica.

Quizlet ha invece un’app ufficiale in ChatGPT. Può trasformare una conversazione di ChatGPT in un nuovo set Quizlet, ma quel flusso specifico non è un server MCP Quizlet riutilizzabile. Se ti serve che un agente acceda regolarmente alle carte esistenti, il percorso pratico è esportare il testo da un set che hai creato, conservarne una copia originale, controllare il trasferimento e usare un sistema di flashcard che supporti esplicitamente la lettura e la scrittura da parte degli agenti.

**Fatti verificati:** 12 settembre 2026.

> **Dichiarazione di interesse:** Sono Kirill Markin e sviluppo Nibomo, il cui server MCP e la cui Agent API sono presentati qui sotto come alternative. Nibomo non può collegarsi a un account Quizlet né importare un URL di Quizlet.

![Un giardiniere porta una giovane pianta da una serra chiusa a un’aiuola con un impianto ramificato di irrigazione a goccia](/blog/quizlet-mcp-server.png)

## L’app per ChatGPT, l’esportazione e MCP rispondono a esigenze diverse

Il [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) è uno standard aperto per collegare le applicazioni di IA a sistemi esterni. Un server MCP normalmente offre ai client compatibili un endpoint noto e un insieme definito di strumenti che possono richiamare.

L’[annuncio ufficiale di Quizlet su ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) descrive un funzionamento diverso. Installi l’app Quizlet in ChatGPT, inizi un prompt con `@Quizlet`, visualizzi un’anteprima delle flashcard generate in ChatGPT e poi apri il set in Quizlet per personalizzarlo e studiare.

È utile quando vuoi «trasformare questa conversazione di ChatGPT in un set Quizlet». L’annuncio non pubblica un endpoint MCP generale di Quizlet, non dà a Claude o Codex accesso alla tua raccolta Quizlet e non offre credenziali riutilizzabili per sviluppatori.

Questo non dice nulla sull’infrastruttura privata o interna di Quizlet. Descrive soltanto l’interfaccia che Quizlet mette a disposizione nella propria documentazione pubblica. I limiti più generali dell’accesso per sviluppatori sono trattati in [Quizlet ha un’API pubblica nel 2026?](/it/blog/quizlet-api/).

La distinzione è questa:

| Cosa vuoi fare davvero | Percorso meglio supportato oggi | Cosa aspettarti |
| --- | --- | --- |
| Creare un nuovo set Quizlet da una conversazione di ChatGPT | L’app ufficiale di Quizlet per ChatGPT | Un flusso specifico con `@Quizlet` in ChatGPT, per poi passare a Quizlet per le modifiche e lo studio |
| Trasferire termini e definizioni da un set che hai creato | L’esportazione dal sito web di Quizlet | Una copia una tantum del testo, da conservare e controllare |
| Consentire a Claude, Codex o un altro agente di leggere o modificare ripetutamente le flashcard | Un sistema di flashcard con un server MCP o un’API per agenti documentati | Accesso autenticato allo spazio di lavoro di destinazione, non a Quizlet |
| Sviluppare software che utilizzi i dati di un account Quizlet | Attendere la documentazione ufficiale per sviluppatori o un canale autorizzato per partner | Oggi non è documentata alcuna interfaccia API o MCP pubblica e self-service di Quizlet |

L’app Quizlet per ChatGPT gestisce un singolo flusso di creazione. L’esportazione gestisce un trasferimento circoscritto. MCP gestisce l’accesso ripetibile a un sistema che espone deliberatamente degli strumenti. Non sono intercambiabili.

## Scegli il percorso supportato più breve

Se l’app ufficiale per ChatGPT è già adatta al compito, usala. Non c’è motivo di aggiungere un secondo sistema solo per creare un set Quizlet da una conversazione.

Se ti serve soltanto un backup o un trasferimento una tantum, usa l’esportazione di Quizlet. Se invece vuoi che un agente torni domani, trovi un mazzo, aggiunga carte e le corregga, ti serve un’interfaccia di lettura e scrittura documentata nel sistema di destinazione. Finché Quizlet non ne pubblicherà una, quel flusso ricorrente non potrà essere un collegamento diretto supportato al tuo account Quizlet.

Se sviluppi software su misura basato proprio sui dati di Quizlet, fermati allo stesso limite. Una richiesta del browser, un vecchio wrapper o un’integrazione ricavata tramite reverse engineering non sostituiscono una documentazione aggiornata per sviluppatori.

## Rendi reversibile l’esportazione di un set che hai creato

Le [istruzioni ufficiali di esportazione di Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) indicano che solo l’autore può esportare un set e solo dal sito web. Il percorso è **Altro → Esporta → Copia testo**. Comprende termini e definizioni; Quizlet precisa che le immagini non possono essere esportate e che i set copiati non sono esportabili.

Per un set che hai creato, bastano pochi passaggi per un trasferimento prudente:

1. Usa l’esportazione dal sito web di Quizlet e incolla il risultato in un file di testo semplice.
2. Salva una copia UTF-8 intatta prima di cambiare separatori, interruzioni di riga o formulazioni.
3. Modifica un duplicato, non l’esportazione originale.
4. Controlla un campione dall’inizio, dal centro e dalla fine, oltre alle definizioni su più righe e ai caratteri non latini.
5. Importa o allega la copia di lavoro, visualizza l’anteprima del fronte e del retro di alcune carte e solo allora salvale.
6. Conserva il set Quizlet e il file originale finché non avrai aperto e provato il mazzo di destinazione.

I controlli completi su separatori, CSV e file si trovano in [Come esportare i set Quizlet nel 2026](/it/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Il limite importante può sfuggire facilmente: l’esportazione trasferisce il testo delle carte, non le immagini, le cartelle, la cronologia di studio, il livello di padronanza o la programmazione dei ripassi di Quizlet.

Ecco perché è importante che il trasferimento sia reversibile. Se una definizione su più righe diventa due carte o un separatore sposta i campi, il file originale ti offre un riferimento integro.

## Cosa possono usare Claude e Codex dopo l’esportazione

Nibomo pubblica un endpoint MCP remoto all’indirizzo:

`https://mcp.nibomo.com/mcp`

> [Collega Nibomo a Claude](https://claude.ai/directory/nibomo) · [Documentazione](/it/docs/mcp-connector/)

La sua [documentazione del connettore MCP](/it/docs/mcp-connector/) definisce otto strumenti: `list_workspaces`, `sql_query` per la lettura, `sql_execute` per la scrittura, `get_guide` per le guide di riferimento, più `next_review_card`, `reveal_answer` e `submit_review` per i ripassi. I client MCP interattivi possono autorizzare l’accesso tramite OAuth. Gli agenti da terminale possono invece partire dalla [documentazione dell’Agent API](/it/docs/api/) e usare il flusso HTTP pubblicato.

`get_usage_limits` — accesso esclusivamente in sola lettura al piano dell’account, ai limiti e all’utilizzo dell’IA nel mese in corso; non legge né modifica le carte.

Questo non trasforma Nibomo in un connettore per Quizlet. Il flusso supportato è:

1. esportare il testo da un set Quizlet di cui sei l’autore;
2. conservare il file originale e controllare una copia di lavoro;
3. controllare le carte e la corrispondenza dei campi prima di salvarle in Nibomo;
4. collegare lo spazio di lavoro Nibomo risultante a un client compatibile per le successive operazioni di lettura e scrittura.

Per Claude, i passaggi di collegamento sono in [Come collegare Nibomo a Claude con MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex e gli altri agenti possono usare il percorso MCP o Agent API documentato che il loro ambiente supporta.

Nibomo non può leggere un URL di Quizlet, replicare un account Quizlet, sincronizzare le modifiche successive in Quizlet o recuperare immagini e cronologia di studio escluse dall’esportazione. Crea le proprie carte e un nuovo stato di programmazione dei ripassi a partire dal materiale che scegli di trasferire.

Se stai valutando se questo compromesso valga la pena anche al di là dell’accesso tramite agenti, leggi il [confronto con un’alternativa open source a Quizlet](/blog/quizlet-alternative/).

## Limita i permessi a ciò che serve per il compito

Un’interfaccia pubblica documentata riduce alcune incertezze dell’integrazione, ma non rende sicura ogni azione MCP. OAuth autentica la connessione. Non garantisce che una carta generata dall’IA sia corretta, non mantiene i dati delle carte restituiti all’interno del servizio di flashcard e non decide se una modifica rispecchia le tue intenzioni.

Nibomo separa le operazioni di lettura dai suoi strumenti di scrittura: `sql_execute` per carte e mazzi, `submit_review` per i ripassi. Le credenziali OAuth coprono comunque tutte le funzionalità del connettore, quindi il blocco degli strumenti e la gestione delle approvazioni dipendono dal client. Inizia con uno spazio di lavoro piccolo e privo di dati sensibili. Consenti all’agente di leggere solo i dati necessari al compito, richiedi l’approvazione per ogni chiamata di scrittura quando il client lo consente e controlla lo spazio di lavoro e la modifica proposta prima di accettarla.

Non collegare materiale di studio privato finché non avrai controllato le condizioni del client di IA sulla conservazione e sul trattamento dei dati. Per un primo trasferimento basta una regola semplice: conserva l’esportazione originale, visualizza l’anteprima di alcune carte, approva una scrittura circoscritta e verifica il risultato nell’app di destinazione prima di procedere oltre.

## Non trasformare il traffico privato del browser in un’API

Una richiesta visibile negli strumenti per sviluppatori del browser non è un’API pubblica di Quizlet. Gli endpoint privati possono dipendere da cookie di sessione, formati interni e comportamenti che cambiano senza preavviso. Qualsiasi uso automatizzato deve anche rispettare i [Termini di servizio di Quizlet](https://quizlet.com/tos) e le autorizzazioni di cui disponi per il materiale.

Questo articolo non fornisce istruzioni di scraping né endpoint ricavati tramite reverse engineering. Se l’app ufficiale per ChatGPT è adatta al compito, usala. Se hai creato il set e ti serve un trasferimento una tantum, esportalo. Se ti servono letture e scritture ricorrenti da parte di un agente, trasferisci contenuti già verificati in un sistema che pubblichi quell’interfaccia, poi continua a gestire manualmente la parte Quizlet finché Quizlet non documenterà qualcosa di nuovo.
