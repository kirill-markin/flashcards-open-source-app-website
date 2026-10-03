---
title: Primers passos
description: Comença amb l'app web allotjada, connecta un agent a través de l'URL de descobriment o executa tu mateix la pila local.
---

## App web allotjada

La manera més ràpida de començar és l'app web allotjada:

1. Obre [app.nibomo.com](https://app.nibomo.com)
2. Inicia la sessió amb el teu correu electrònic mitjançant un codi OTP, sense contrasenya
3. Crea targetes, repassa les que tens pendents i fes servir el xat amb IA amb les dades del teu espai de treball i fitxers adjunts

L'opció allotjada no requereix cap instal·lació ni configurar cap servidor.

## Configuració d'agents

Si vols que Claude Code, Codex o OpenClaw s'hi connectin directament, comença per:

```text
GET https://api.nibomo.com/v1/
```

Aquesta resposta de descobriment guia l'agent per l'inici de sessió amb OTP per correu electrònic, la creació d'una clau d'API de llarga durada, la càrrega del compte, la configuració inicial de l'espai de treball i la interfície SQL publicada.

El mateix contingut també està disponible a `GET /v1/agent`, però `/v1/` és el punt d'entrada públic canònic.

## Autoallotjament

Si prefereixes executar la teva pròpia instància, consulta la [Guia d'autoallotjament](/docs/self-hosting/).

## Què tens avui

- App web allotjada per a targetes, repassos i xat amb IA
- Client d'iOS al repositori principal amb SQLite local i sincronització que prioritza el funcionament fora de línia
- Serveis compartits de backend i d'autenticació en dominis `api` i `auth` separats
- Incorporació d'agents externs mitjançant descobriment, OTP i autenticació ApiKey
- Camí de desplegament de codi obert a AWS, amb Postgres com a font de referència

## Orientació del repositori

El projecte prioritza el funcionament fora de línia.

Avui el repositori inclou l'app web, l'app d'iOS, el servei d'autenticació, l'API del backend, el flux per a agents externs i l'app d'Android publicada a Google Play.
