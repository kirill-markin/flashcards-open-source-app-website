---
title: Primi passi
description: Inizia dall'app per iPhone, iPad, Mac o Android, dall'app web, da un agente AI o dal tuo server.
---

Ci sono diversi modi per iniziare, in ordine di popolarità:

- **App per iPhone, iPad e Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **App per Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **App web ospitata**: [app.nibomo.com](https://app.nibomo.com)
- **Agenti AI**: il [connettore MCP](/docs/mcp-connector/) o l'API all'indirizzo `https://api.nibomo.com/v1/`
- **Self-hosting**: la [Guida al self-hosting](/docs/self-hosting/)

## App per dispositivi mobili e desktop

Installa l'app nativa per il tuo dispositivo:

- iPhone, iPad e Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Le app tengono le tue carte sul dispositivo, così puoi ripassare anche offline, e si sincronizzano quando torni online. Puoi iniziare come ospite e accedere più tardi.

### Widget della schermata Home

L'app Nibomo aggiunge un widget Ripasso su iPhone, iPad, Mac e Android. È disponibile in tre dimensioni:

- **Piccolo**: quante carte sono da ripassare e la tua serie di studio
- **Medio**: quante carte sono da ripassare e la domanda della tua prossima carta
- **Grande**: quante carte sono da ripassare, la tua prossima domanda e la tua serie

Quando non c'è nulla da ripassare, il widget mostra «Tutto fatto» e quando la prossima carta sarà da ripassare. Non mostra mai una risposta. Tocca il widget per aprire Ripasso; un widget Medio o Grande apre Ripasso sulla carta che mostra. I widget sono gratuiti per tutti, ospiti compresi.

Altri otto widget mostrano i tuoi progressi: «Attività», «Anno», «Oggi», «Ripassi», «Serie», «Calendario», «In arrivo» e «Riepilogo». Su iPhone e iPad puoi mettere anche il widget «Schede da ripassare» sulla schermata di blocco, e la [guida ai widget](/blog/flashcard-widget/) li mostra tutti.

Per aggiungerne uno su iPhone, iPad o Mac, apri la galleria dei widget, scegli Nibomo e seleziona una dimensione. Su Android, aggiungi un widget di Nibomo dall'elenco dei widget, poi ridimensionalo; il layout si adatta alla dimensione.

## App web ospitata

Il modo più rapido per iniziare è l'app web ospitata:

1. Apri [app.nibomo.com](https://app.nibomo.com)
2. Accedi con la tua email tramite OTP senza password
3. Crea carte, ripassa quelle in scadenza e usa la chat con l'AI, che lavora sui dati dello spazio di lavoro e sui file allegati

Con la versione ospitata non devi installare nulla né configurare un server.

## Configurazione dell'agente

I client MCP come Claude, ChatGPT e Cursor possono collegarsi seguendo la [guida al connettore MCP](/docs/mcp-connector/).

Se vuoi che Claude Code, Codex o OpenClaw si colleghino direttamente, parti da:

```text
GET https://api.nibomo.com/v1/
```

Questa risposta di discovery guida l'agente attraverso l'accesso con OTP via email, la creazione di una chiave API a lunga durata, il caricamento dell'account, l'inizializzazione dello spazio di lavoro e la superficie SQL pubblicata.

Lo stesso payload è disponibile anche su `GET /v1/agent`, ma il punto di ingresso pubblico canonico è `/v1/`.

## Self-hosting

Se preferisci eseguire una tua istanza, consulta la [Guida al self-hosting](/docs/self-hosting/).

## Cosa trovi oggi

- App web ospitata per carte, ripassi e chat con l'AI
- App native per iPhone, iPad, Mac e Android, con archiviazione SQLite locale e sincronizzazione offline-first
- Servizi di backend e di autenticazione condivisi, su domini `api` e `auth` separati
- Onboarding degli agenti esterni tramite discovery, OTP e autenticazione ApiKey
- Percorso di deploy open source su AWS, con Postgres come fonte di verità

## Direzione del repository

Il progetto è offline-first.

Oggi il repository include l'app web, l'app iOS, il servizio di autenticazione, l'API di backend, il flusso per gli agenti esterni e l'app Android pubblicata su Google Play.
