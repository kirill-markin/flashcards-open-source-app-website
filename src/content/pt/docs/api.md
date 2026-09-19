---
title: Referência da API
description: >-
  API de agentes externos para descoberta, bootstrap por OTP, configuração do
  espaço de trabalho e as superfícies SQL publicadas de leitura e de escrita.
---

## Visão geral

Esta página documenta o contrato atual de agentes de IA externos do Nibomo.

Se o seu cliente fala MCP, o [conector MCP](/docs/mcp-connector/) é a forma mais
simples de conectar e envolve essa mesma superfície de dados. Esta página
documenta o contrato HTTP de descoberta, SQL, guias e revisão usado por agentes de CLI.

Comece pelo ponto de entrada canônico de descoberta:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

O mesmo payload de descoberta também está disponível em `GET /v1/agent`, mas `/v1/` é o ponto de entrada público principal.

A resposta de descoberta diz ao agente como:

- iniciar o login por OTP no e-mail
- trocar o OTP por uma chave de API de longa duração
- carregar o contexto da conta
- criar ou selecionar um espaço de trabalho
- seguir pela superfície SQL publicada
- buscar guias de referência e revisar cartões um de cada vez

## Descoberta em tempo de execução e código-fonte

O OpenAPI não está disponível. As quatro URLs de especificação antigas abaixo agora retornam o mesmo aviso JSON de descoberta, com `"openapiAvailable": false` no lugar de um schema:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`
- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

Use `GET https://api.flashcards-open-source-app.com/v1/` para a descoberta atual em tempo de execução. Siga o `docs.discoveryUrl` retornado para as rotas em tempo de execução e o `docs.source.agentRoutesUrl` para detalhes de implementação.

## Bootstrap de autenticação

O bootstrap por OTP roda no serviço de autenticação:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

O fluxo é:

1. Chame `GET /v1/`.
2. Envie o e-mail do usuário para `send-code`.
3. Leia o `otpSessionToken` na resposta.
4. Peça ao usuário o código de 8 dígitos mais recente recebido por e-mail.
5. Chame `verify-code` com `code`, `otpSessionToken` e `label`.
6. Guarde a chave de API retornada fora da memória do chat.

Variável de ambiente recomendada:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

As requisições autenticadas usam:

```text
Authorization: ApiKey <key>
```

Exemplo de sequência de bootstrap:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Superfície de agente depois do login

Depois da verificação, a superfície de agente atual é:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (somente leitura)
- `POST /v1/agent/sql/execute` (escrita)
- `GET /v1/agent/guide/{topic}` (somente leitura)
- `POST /v1/agent/reviews/next` (somente leitura)
- `POST /v1/agent/reviews/reveal` (somente leitura)
- `POST /v1/agent/reviews/submit` (escrita)

Um bootstrap típico é assim:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Se precisar, `POST /v1/agent/workspaces` com `{"name":"Personal"}`
4. Se precisar, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Use `POST /v1/agent/sql/query` para leituras e `POST /v1/agent/sql/execute` para escritas

A seleção do espaço de trabalho é explícita por conexão de chave de API. Os agentes devem seguir o texto `instructions` retornado e o `docs.discoveryUrl` para as rotas em tempo de execução, além do `docs.source.agentRoutesUrl` para detalhes de implementação, em vez de adivinhar o próximo passo.

As rotas de SQL e de revisão também aceitam um `workspaceId` opcional no corpo JSON. Ele direciona uma única chamada para aquele espaço de trabalho sem mudar a seleção; omita-o para usar o espaço de trabalho selecionado. Sem seleção e sem `workspaceId`, elas respondem `409 WORKSPACE_SELECTION_REQUIRED`.

## Superfície SQL

`POST /v1/agent/sql/query` é a superfície estritamente somente leitura (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) e `POST /v1/agent/sql/execute` é a superfície de escrita (`INSERT`, `UPDATE`, `DELETE`); uma mesma chamada precisa ser só de leituras ou só de escritas.

Ela é limitada de propósito e não é o PostgreSQL completo. Esta documentação
cobre apenas o dialeto suportado, e não serve como referência de compatibilidade com o PostgreSQL.

Nenhum caminho de leitura conserta dados, recalcula o agendamento ou muda o
estado de um cartão. Use `POST /v1/agent/sql/execute` para toda escrita de cartão
e de baralho. O SQL não grava `review_events` nem o estado de agendamento do
FSRS; registre as revisões por `POST /v1/agent/reviews/submit`.

Famílias de comandos atuais:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Os recursos lógicos publicados hoje incluem:

- `workspace`
- `cards`
- `decks`
- `review_events`

Observações:

- o `LIMIT` tem padrão `100` e teto de `100`
- use `ORDER BY` quando precisar de paginação estável
- use `SHOW TABLES` ou `DESCRIBE cards` para descobrir o schema
- toda chamada SQL fica restrita a um espaço de trabalho: o `workspaceId` do corpo ou o espaço de trabalho selecionado

Exemplo de requisição:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Exemplo de consulta de cartões:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Exemplo de alteração:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Também há um servidor MCP remoto em `https://mcp.nibomo.com/mcp`, com OAuth 2.1 (Dynamic Client Registration + PKCE). Ele expõe a mesma divisão de SQL em `sql_query` (estritamente somente leitura) e `sql_execute` (escrita), além de `list_workspaces`, `get_guide` e das ferramentas de revisão `next_review_card`, `reveal_answer` e `submit_review`; veja o [conector MCP](/docs/mcp-connector/).

### Segurança e escopo

A superfície SQL é um dialeto contido e validado por parser, e não PostgreSQL puro. As proteções são:

- **Lista fechada de comandos permitidos**: para leituras, apenas `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` e `SELECT`; para escritas, apenas `INSERT`, `UPDATE` e `DELETE`. Qualquer outra coisa é rejeitada já na análise sintática.
- **Recursos limitados**: os comandos só podem tocar os recursos `workspace`, `cards`, `decks` e `review_events`.
- **Escopo por espaço de trabalho**: todo comando fica restrito a um espaço de trabalho ao qual você tem acesso, seja o `workspaceId` do corpo da requisição, seja o seu espaço de trabalho selecionado, sem acesso entre tenants.
- **Corpos de requisição estritos**: as rotas de SQL e de revisão rejeitam campos desconhecidos no corpo, então um `workspaceId` escrito errado falha em vez de rodar contra o espaço de trabalho selecionado.
- **Limites**: até `100` linhas por comando, até `50` comandos por lote e um teto de resultado de cerca de `12k` tokens. Lotes de alteração são aplicados de forma atômica.
- **Divisão entre leitura e escrita**: `sql_query` e `list_workspaces` são estritamente somente leitura (`readOnlyHint`) e nunca consertam dados, recalculam o agendamento ou mudam o estado de um cartão. `sql_execute` é a única ferramenta SQL de escrita e faz escritas (`destructiveHint`); uma mesma chamada precisa ser só de leituras ou só de escritas. O SQL não grava `review_events` nem o estado de agendamento do FSRS; só `POST /v1/agent/reviews/submit` (`submit_review` no MCP) registra uma revisão.

## Guias

`GET /v1/agent/guide/{topic}` retorna um guia de referência em `data.guide`, o mesmo conteúdo que a ferramenta MCP `get_guide` entrega. Tópicos:

- `sql_dialect`: a gramática SQL completa, os limites e exemplos
- `card_authoring`: o contrato do cartão, tags, verificação de duplicatas e formatação
- `bulk_authoring`: como dividir e conferir um trabalho grande de escrita
- `review_flow`: o ciclo de revisão e avaliação

Um tópico desconhecido responde `400` com a lista de tópicos suportados. Busque o guia correspondente antes de criar cartões, escrever em lote ou conduzir uma revisão, e releia `sql_dialect` depois de um comando rejeitado.

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Revisões

As rotas de revisão permitem que um agente teste o estudante um cartão de cada vez e salve cada avaliação no agendamento FSRS do cartão. Elas recebem os mesmos argumentos JSON das ferramentas de revisão do MCP:

- `POST /v1/agent/reviews/next` retorna `card` com `cardId` e `frontText`, ou `card: null` quando não há nada pendente. Os campos opcionais `tags` (qualquer uma delas) ou `deckId` restringem a fila, nunca os dois juntos; uma requisição sem corpo é válida.
- `POST /v1/agent/reviews/reveal` exige `cardId` e retorna o `backText` daquele cartão.
- `POST /v1/agent/reviews/submit` exige `cardId`, um UUID `reviewId` gerado pelo cliente, um `rating` entre `Again`, `Hard`, `Good` e `Easy`, e o `reviewedTimeZone` IANA do estudante. O servidor marca o horário da revisão e retorna o novo agendamento do cartão, incluindo `dueAt`, `state`, `reps` e `lapses`.

As três rotas aceitam o `workspaceId` opcional. Guarde o `reviewId` antes de enviar e repita um envio incerto com a requisição idêntica; ele nunca registra uma segunda revisão. As rotas de revisão também podem responder:

- `409 REVIEW_EVENT_CONFLICT`: a revisão já tinha sido registrada, e `error.details.reviewSchedule` traz o agendamento atual do cartão.
- `409 REVIEW_ID_CARD_MISMATCH`: o `reviewId` já identifica a revisão de outro cartão, então nada foi gravado; envie de novo com um `reviewId` novo.
- `409 REVIEW_STALE`: o horário de revisão guardado do cartão é igual ou posterior ao horário atual do servidor; revise outro cartão.
- `400 REVIEW_INPUT_INVALID`: algum argumento está faltando, é inválido ou não é suportado, incluindo `tags` combinado com `deckId` ou uma tag que o espaço de trabalho não usa.

Exemplo de envio:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## APIs para humanos e de sincronização

O Nibomo também tem APIs separadas para clientes humanos e para a sincronização offline-first, mas elas não são o contrato principal para agentes externos:

- os fluxos de navegador usam cookies de domínio compartilhado e proteção CSRF
- os clientes offline-first usam as rotas de sincronização implementadas em `/v1/workspaces/{workspaceId}/sync/push` e `/v1/workspaces/{workspaceId}/sync/pull`
- as rotas de sincronização são separadas da superfície de agentes externos
