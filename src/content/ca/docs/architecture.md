---
title: Arquitectura
description: Visió general del sistema, dominis públics, clients compatibles i el flux de dades actual, que prioritza el funcionament fora de línia.
---

## Visió general del sistema

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principis

1. Dominis públics separats per a `app`, `api` i `auth`
2. Postgres és la font de referència
3. El client d'iOS prioritza el funcionament fora de línia, amb SQLite local i sincronització
4. L'app web, l'app d'iOS i la interfície per a agents externs comparteixen el mateix model d'espai de treball
5. Els agents externs comencen per `GET https://api.nibomo.com/v1/`

## Clients admesos

- App web a `app.nibomo.com`
- App d'iOS al repositori principal, amb emmagatzematge SQLite local
- App d'Android a Google Play
- Clients d'agents externs mitjançant descobriment, configuració inicial amb OTP i `Authorization: ApiKey`

## Model de dades

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Flux de dades

### Web

1. El navegador inicia la sessió a través de `auth.<domain>`.
2. L'app web carrega les dades de l'espai de treball des de `api.<domain>`.
3. Les sol·licituds al xat amb IA passen per `/chat/local-turn`.
4. Els repassos enviats actualitzen l'estat del planificador en el moment d'escriure'ls.

### iOS

1. L'app d'iOS escriu primer localment a SQLite.
2. Els canvis locals s'afegeixen a una cua de sortida.
3. La sincronització puja els canvis a través de `/v1/workspaces/{workspaceId}/sync/push`.
4. La sincronització baixa les actualitzacions remotes a través de `/v1/workspaces/{workspaceId}/sync/pull`.
5. La base de dades local aplica els canvis i fa avançar el cursor de sincronització.

### Agents externs

1. Els agents comencen amb `GET /v1/`.
2. La configuració inicial amb OTP s'executa a `auth.<domain>`.
3. L'agent rep una clau d'API de llarga durada.
4. L'agent carrega `/v1/agent/me`, llista els espais de treball, en selecciona un si cal i després fa servir `/v1/agent/sql/query` i `/v1/agent/sql/execute`.

## Planificació

Nibomo fa servir FSRS com a planificador de repassos.

Notes d'implementació:

- el backend i iOS mantenen implementacions equivalents de FSRS
- l'app web reprodueix el contracte de dades de planificació, però no inclou una tercera còpia del planificador
- la configuració del planificador per espai de treball inclou la retenció desitjada, els passos d'aprenentatge, els passos de reaprenentatge, l'interval màxim i la variació aleatòria dels intervals
- la data i hora real del repàs prové de `reviewedAtClient`

Per al contracte detallat, consulta la [lògica de planificació de FSRS al repositori principal](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autenticació

- OTP per correu electrònic mitjançant Cognito
- Galetes de sessió del navegador en un domini compartit per a l'app web allotjada
- Configuració inicial amb OTP per a agents a `auth.<domain>`, que retorna una clau ApiKey de llarga durada
- `AUTH_MODE=none` per al desenvolupament local
- `AUTH_MODE=cognito` per a una autenticació com la de producció

## Estructura del desplegament

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + backend Lambda
- `auth.<domain>` -> API Gateway + servei d'autenticació Lambda
- Postgres a AWS RDS

El domini arrel pot continuar allotjant un lloc de màrqueting separat. Si està lliure durant la configuració inicial, la infraestructura el pot redirigir temporalment a `app.<domain>`.
