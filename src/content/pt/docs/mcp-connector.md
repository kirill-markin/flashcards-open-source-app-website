---
title: Conector MCP
description: >-
  Adicione o servidor MCP remoto do Nibomo como conector personalizado, com
  OAuth para clientes, chave de API para uso headless e ferramentas SQL
  separadas de leitura e de escrita.
---

## Visão geral

O Nibomo mantém um servidor MCP (Model Context Protocol) remoto para que clientes
MCP e agentes de IA possam ler seus cartões pendentes, revisá-los com você uma
pergunta de cada vez e criar ou editar cartões e baralhos para você.

Os agentes podem se conectar de duas formas: por este servidor MCP (melhor para
clientes MCP como o Claude ou o Cursor) ou pela [URL de descoberta da API de
agentes](/docs/api/), no caso de agentes de CLI. As duas chegam à mesma superfície
de dados por usuário; esta página trata do servidor MCP.

Conecte-se a ele em:

```text
https://mcp.nibomo.com/mcp
```

O transporte é Streamable HTTP, e o servidor expõe sete ferramentas: duas
ferramentas SQL sobre uma superfície SQL pequena e limitada de propósito, uma
lista de espaços de trabalho, um guia de referência e três ferramentas de
revisão. É a mesma superfície de dados por usuário da [referência da
API](/docs/api/); o servidor MCP é o caminho mais prático para chegar a ela
a partir de clientes que falam MCP.

## Como adicionar no seu cliente

A maioria dos clientes adiciona um servidor MCP remoto como conector personalizado:

1. Abra as configurações de conectores ou de servidores MCP do seu cliente.
2. Adicione um conector personalizado e cole a URL do servidor `https://mcp.nibomo.com/mcp`.
3. Em clientes interativos, autorize no navegador quando for pedido. O servidor
   usa OAuth 2.1 com Dynamic Client Registration, então não há client secret
   para colar nem app para registrar antes.
4. Para uso headless ou via CLI, defina o cabeçalho `Authorization: Bearer fca_…`
   com a sua chave de API de agente, em vez do fluxo pelo navegador.

Depois de autorizar, chame `list_workspaces` uma vez para escolher um espaço de
trabalho e então use `sql_query` para leituras e `sql_execute` para escritas de
cartões e baralhos. Para revisar, chame `next_review_card`, depois
`reveal_answer` e depois `submit_review`.

## Ferramentas

O servidor expõe sete ferramentas. Leituras e escritas são separadas de propósito,
para que uma mesma ferramenta nunca misture operações seguras e destrutivas.

- `sql_query` — acesso estritamente somente leitura aos seus cartões e baralhos
  (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — acesso de escrita aos seus cartões e baralhos (`INSERT`,
  `UPDATE`, `DELETE`), como um lote atômico.
- `list_workspaces` — lista estritamente somente leitura dos espaços de trabalho
  a que você tem acesso, cada um com seu
  `workspaceId`, nome, quantidade de cartões ativos, última atividade e se ele é
  o seu padrão selecionado no momento. Use um `workspaceId` retornado no
  argumento opcional `workspaceId` das ferramentas de SQL e de revisão.
- `get_guide` — guia de referência estritamente somente leitura sobre um tópico:
  `sql_dialect`, `card_authoring`, `bulk_authoring` ou `review_flow`. Ele não lê dados do espaço de trabalho.
- `next_review_card` — estritamente somente leitura: retorna o próximo cartão a
  revisar, só a frente, na mesma ordem de fila dos apps. Os campos opcionais
  `tags` ou `deckId` restringem a fila.
- `reveal_answer` — estritamente somente leitura: retorna o verso de um cartão
  depois que o estudante tentou responder a frente.
- `submit_review` — registra uma avaliação `Again`, `Hard`, `Good` ou `Easy` e
  avança o agendamento FSRS do cartão.

A superfície SQL é um dialeto limitado de propósito e não é o PostgreSQL completo.
Esta documentação cobre apenas o dialeto suportado, e não serve como referência
de compatibilidade com o PostgreSQL. Os comandos só podem endereçar os recursos
`workspace`, `cards`, `decks` e `review_events`, todo comando fica restrito ao
seu próprio espaço de trabalho, e leituras e escritas têm teto de `100` linhas por comando.

## Revisões

As ferramentas de revisão permitem que um agente teste o estudante um cartão de
cada vez e salve cada avaliação no agendamento FSRS do cartão:

1. `next_review_card` retorna um `cardId` e um `frontText`, ou `card: null` quando
   não há nada pendente.
2. Depois que o estudante responde, `reveal_answer` retorna o `backText` daquele cartão.
3. `submit_review` recebe o `cardId`, um UUID `reviewId` gerado pelo cliente, um
   `rating` e o `reviewedTimeZone` IANA do estudante. O servidor marca o horário
   da revisão e retorna o novo agendamento do cartão.

Repita um envio incerto com o mesmo `reviewId`; ele nunca registra uma segunda
revisão. Um envio também pode responder:

- `409 REVIEW_EVENT_CONFLICT` — a revisão já tinha sido registrada, e os detalhes
  do erro trazem o agendamento atual do cartão.
- `409 REVIEW_ID_CARD_MISMATCH` — o `reviewId` já identifica a revisão de outro
  cartão, então nada foi gravado; envie de novo com um `reviewId` novo.
- `409 REVIEW_STALE` — o horário de revisão guardado do cartão é igual ou
  posterior ao horário atual do servidor; revise outro cartão.

As revisões são registradas apenas por `submit_review`: o SQL não grava
`review_events` nem o estado de agendamento do FSRS. Chame `get_guide` com o
tópico `review_flow` para ver as regras completas de revisão e avaliação.

## Contrato do cartão

Todo cartão segue um contrato, e as ferramentas dependem dele:

- `front_text` é apenas uma pergunta ou um enunciado de revisão e nunca contém a resposta.
- `back_text` contém a resposta, opcionalmente com um exemplo concreto.

Os agentes que geram cartões por `sql_execute` seguem esse contrato, então os
cartões que eles criam já ficam prontos para revisão com repetição espaçada.

## Autenticação

Dois caminhos de autorização chegam à mesma superfície de dados por usuário.

### OAuth 2.1 (clientes de conector interativos)

O servidor implementa o fluxo de authorization code com PKCE e Dynamic Client
Registration. Adicione a URL do MCP como conector personalizado e autorize no
navegador; nenhum client secret é compartilhado antes. A descoberta é padrão:

- Metadados do recurso protegido:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadados do servidor de autorização:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Chave de API (headless e CLI)

Obtenha uma chave de API de agente `fca_` de longa duração pelo fluxo de login
por OTP no e-mail documentado na [referência da API](/docs/api/) e envie-a como token Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

É a mesma chave que a superfície REST de agentes aceita, e ela não precisa de
navegador nem de ida e volta com OAuth.

A descrição canônica legível por máquina dos dois caminhos é o payload de
descoberta em `https://api.nibomo.com/v1/` (espelhado em `/v1/agent`).

## Segurança e escopo

As ferramentas SQL são seguras de aprovar porque a superfície é um dialeto
contido e validado por parser, e não acesso livre ao banco de dados:

- **Lista fechada de comandos permitidos**: `sql_query` aceita apenas `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` e `SELECT`; `sql_execute` aceita apenas `INSERT`,
  `UPDATE` e `DELETE`. Qualquer outra coisa é rejeitada já na análise sintática.
- **Recursos limitados**: os comandos só podem tocar `workspace`, `cards`, `decks`
  e `review_events`.
- **Escopo por espaço de trabalho**: todo comando SQL e toda revisão ficam
  restritos a um espaço de trabalho ao qual você tem acesso, seja o `workspaceId`
  que você passa, seja o seu padrão selecionado, sem acesso entre tenants.
- **Argumentos estritos**: toda ferramenta rejeita argumentos desconhecidos, então
  um `workspaceId` escrito errado falha em vez de rodar contra o seu espaço de trabalho padrão.
- **Limites**: até `100` linhas por comando, até `50` comandos por lote e um teto
  de resultado de cerca de `12k` tokens. Lotes de alteração são aplicados de forma atômica.
- **Divisão entre leitura e escrita**: `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` e `reveal_answer` são estritamente somente leitura (`readOnlyHint`)
  e nunca consertam dados, recalculam o agendamento ou mudam o estado de um cartão.
  `sql_execute` e `submit_review` são as únicas ferramentas de escrita (`destructiveHint`):
  `sql_execute` grava cartões e baralhos, e `submit_review` registra uma revisão e
  avança o agendamento do cartão.

Toda a stack — app, backend e infraestrutura — é open source e pode ser
[auto-hospedada](/docs/self-hosting/), então você pode rodar o mesmo conector
contra a sua própria implantação.
