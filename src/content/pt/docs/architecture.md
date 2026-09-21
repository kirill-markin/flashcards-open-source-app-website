---
title: Arquitetura
description: >-
  Visão geral do sistema, domínios públicos, clientes suportados e o fluxo de
  dados offline-first atual.
---

## Visão geral do sistema

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Princípios

1. Domínios públicos separados para `app`, `api` e `auth`
2. O Postgres é a fonte da verdade
3. O cliente iOS é offline-first, com SQLite local e sincronização
4. O app web, o app iOS e a superfície de agentes externos compartilham o mesmo modelo de espaço de trabalho
5. Agentes externos começam em `GET https://api.nibomo.com/v1/`

## Clientes suportados

- App web em `app.nibomo.com`
- App iOS no repositório principal, com armazenamento local em SQLite
- App Android no Google Play
- Clientes de agentes externos por descoberta, bootstrap por OTP e `Authorization: ApiKey`

## Modelo de dados

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Fluxo de dados

### Web

1. O navegador faz login por `auth.<domain>`.
2. O app web carrega os dados do espaço de trabalho de `api.<domain>`.
3. As requisições do chat de IA passam por `/chat/local-turn`.
4. Os envios de revisão atualizam o estado do agendador na escrita.

### iOS

1. O app iOS grava primeiro no SQLite local.
2. As alterações locais entram na fila de um outbox.
3. A sincronização envia as alterações por `/v1/workspaces/{workspaceId}/sync/push`.
4. A sincronização baixa as atualizações remotas por `/v1/workspaces/{workspaceId}/sync/pull`.
5. O banco local aplica as alterações e avança o cursor de sincronização.

### Agentes externos

1. Os agentes começam com `GET /v1/`.
2. O bootstrap por OTP roda em `auth.<domain>`.
3. O agente recebe uma chave de API de longa duração.
4. O agente carrega `/v1/agent/me`, lista os espaços de trabalho, seleciona um se precisar e então usa `/v1/agent/sql/query` e `/v1/agent/sql/execute`.

## Agendamento

O Nibomo usa o FSRS como agendador de revisões.

Notas de implementação:

- o backend e o iOS mantêm implementações espelhadas do FSRS
- o app web espelha o contrato de dados do agendamento, mas não traz uma terceira cópia do agendador
- as configurações de agendador no nível do espaço de trabalho incluem retenção desejada, passos de aprendizado, passos de reaprendizado, intervalo máximo e fuzz
- o horário real da revisão vem de `reviewedAtClient`

Para o contrato detalhado, veja a [lógica de agendamento do FSRS no repositório principal](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autenticação

- OTP por e-mail via Cognito
- Cookies de sessão de navegador em domínio compartilhado para o app web hospedado
- Bootstrap de agente por OTP em `auth.<domain>`, com saída de ApiKey de longa duração
- `AUTH_MODE=none` para desenvolvimento local
- `AUTH_MODE=cognito` para autenticação parecida com a de produção

## Formato da implantação

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + backend em Lambda
- `auth.<domain>` -> API Gateway + serviço de autenticação em Lambda
- Postgres no Amazon RDS

O domínio apex pode continuar em um site de marketing separado. Se ele estiver livre durante o bootstrap, a infraestrutura pode redirecioná-lo temporariamente para `app.<domain>`.
