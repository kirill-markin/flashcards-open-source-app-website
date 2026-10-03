---
title: Primi passi
description: Inizia dalla web app ospitata, collega un agente tramite l'URL di discovery oppure esegui tu stesso lo stack in locale.
---

## Web app ospitata

Il modo più rapido per iniziare è la web app ospitata:

1. Apri [app.nibomo.com](https://app.nibomo.com)
2. Accedi con la tua email tramite OTP senza password
3. Crea carte, ripassa quelle in scadenza e usa la chat con l'AI, che lavora sui dati dello spazio di lavoro e sui file allegati

Con la versione ospitata non devi installare nulla né configurare un server.

## Configurazione dell'agente

Se vuoi che Claude Code, Codex o OpenClaw si colleghino direttamente, parti da:

```text
GET https://api.nibomo.com/v1/
```

Questa risposta di discovery guida l'agente attraverso l'accesso con OTP via email, la creazione di una chiave API a lunga durata, il caricamento dell'account, l'inizializzazione dello spazio di lavoro e la superficie SQL pubblicata.

Lo stesso payload è disponibile anche su `GET /v1/agent`, ma il punto di ingresso pubblico canonico è `/v1/`.

## Self-hosting

Se preferisci eseguire una tua istanza, consulta la [Guida al self-hosting](/docs/self-hosting/).

## Cosa trovi oggi

- Web app ospitata per carte, ripassi e chat con l'AI
- Client iOS nel repository principale, con SQLite locale e sincronizzazione offline-first
- Servizi di backend e di autenticazione condivisi, su domini `api` e `auth` separati
- Onboarding degli agenti esterni tramite discovery, OTP e autenticazione ApiKey
- Percorso di deploy open source su AWS, con Postgres come fonte di verità

## Direzione del repository

Il progetto è offline-first.

Oggi il repository include la web app, l'app iOS, il servizio di autenticazione, l'API di backend, il flusso per gli agenti esterni e l'app Android pubblicata su Google Play.
