---
title: Conector MCP
description: "Ligue o Nibomo a partir do diretório do Claude ou configure o servidor MCP no Claude Code e noutros clientes, com OAuth e oito ferramentas para cartões e revisões."
---

## Ligar através do diretório do Claude

Abra o [Nibomo no diretório do Claude](https://claude.ai/directory/nibomo), ligue-o, inicie sessão na sua conta Nibomo e autorize o acesso. O Nibomo está listado como conector Community.

No Claude Code, use a mesma conta com subscrição Claude e consulte `/mcp` depois de ligar o conector. O início de sessão com uma chave de API ou através de um fornecedor externo não carrega automaticamente os conectores de claude.ai.

Também pode configurar o Claude Code diretamente. Execute o comando abaixo, abra `/mcp` no Claude Code e conclua a autorização no navegador:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Documentação MCP do Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Visão geral

O Nibomo disponibiliza um servidor MCP (Model Context Protocol) remoto. Os clientes MCP e os agentes de IA podem consultar os cartões que tem para rever, revê-los consigo uma pergunta de cada vez e criar ou editar cartões e baralhos.

Os agentes podem ligar-se a este servidor MCP, adequado a clientes como o Claude ou o Cursor. Os agentes de linha de comandos também podem usar o [URL de descoberta da API de agentes](/docs/api/). Ambos acedem à mesma interface de dados por utilizador. Este guia é sobre o servidor MCP.

Ligue-se a este endereço:

```text
https://mcp.nibomo.com/mcp
```

O transporte é Streamable HTTP. O servidor disponibiliza oito ferramentas para descobrir espaços de trabalho, ler e escrever cartões e baralhos, consultar guias, fazer revisões e consultar a utilização da conta.

## Adicionar o conector ao seu cliente

Na maioria dos clientes, pode adicionar um servidor MCP remoto como conector personalizado:

1. Abra as definições de conectores ou servidores MCP do seu cliente.
2. Adicione um conector personalizado e cole o URL do servidor `https://mcp.nibomo.com/mcp`.
3. Nos clientes interativos, autorize o acesso no navegador quando lhe for pedido. O servidor usa OAuth 2.1 com registo dinâmico de clientes (Dynamic Client Registration). Não precisa de colar um segredo do cliente nem de registar previamente uma aplicação.
4. Para utilização sem interface gráfica ou pela linha de comandos, envie o cabeçalho `Authorization: Bearer fca_…` com a chave de API do agente, em vez de usar o fluxo no navegador.

Depois de autorizar o acesso, chame `list_workspaces` uma vez para escolher um espaço de trabalho. Use depois `sql_query` para leituras e `sql_execute` para escrever cartões e baralhos. Para rever, chame `next_review_card`, depois `reveal_answer` e, por fim, `submit_review`.

## Ferramentas

O servidor disponibiliza oito ferramentas. As operações de leitura e escrita estão separadas para que uma ferramenta nunca combine operações seguras e destrutivas.

- `get_usage_limits` — consulta em modo só de leitura o plano, os limites e a utilização mensal de IA. Não lê nem altera cartões.
- `sql_query` — acesso estritamente só de leitura aos cartões e baralhos (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — acesso de escrita aos cartões e baralhos (`INSERT`, `UPDATE`, `DELETE`) num lote atómico.
- `list_workspaces` — lista em modo só de leitura os espaços de trabalho a que tem acesso, com o `workspaceId`, o nome, o número de cartões ativos, a última atividade e a indicação de qual está selecionado como predefinido. Use um `workspaceId` devolvido no argumento opcional `workspaceId` das ferramentas SQL e de revisão.
- `get_guide` — guia de referência em modo só de leitura sobre um tema: `sql_dialect`, `card_authoring`, `bulk_authoring` ou `review_flow`. Não lê dados do espaço de trabalho.
- `next_review_card` — em modo só de leitura, devolve apenas a frente do próximo cartão para rever, na mesma ordem de revisão das aplicações. Os parâmetros opcionais `tags` ou `deckId` restringem a fila.
- `reveal_answer` — em modo só de leitura, devolve o verso de um cartão depois de o estudante tentar responder à pergunta na frente.
- `submit_review` — regista uma avaliação `Again`, `Hard`, `Good` ou `Easy` e atualiza o agendamento de revisão FSRS do cartão.

A interface SQL usa um dialeto deliberadamente limitado, sem todas as funcionalidades do PostgreSQL. Este guia abrange apenas o dialeto suportado. As instruções só podem usar os recursos `workspace`, `cards`, `decks` e `review_events`. Cada instrução está limitada ao seu próprio espaço de trabalho, e as operações de leitura e escrita estão limitadas a `100` linhas por instrução.

## Revisões

As ferramentas de revisão permitem que o agente faça uma pergunta de cada vez e registe cada avaliação no agendamento de revisão FSRS do cartão:

1. `next_review_card` devolve um `cardId` e um `frontText`, ou `card: null` quando não há cartões para rever.
2. Depois de o estudante responder, `reveal_answer` devolve o `backText` desse cartão.
3. `submit_review` recebe o `cardId`, um UUID `reviewId` gerado pelo cliente, um `rating` e o fuso horário IANA `reviewedTimeZone` do estudante. O servidor regista a hora da revisão e devolve o novo agendamento do cartão.

Se não souber se um envio foi concluído, tente novamente com o mesmo `reviewId`. Assim, nunca é registada uma segunda revisão. Um envio também pode devolver:

- `409 REVIEW_EVENT_CONFLICT` — a revisão já foi registada. Os detalhes do erro incluem o agendamento atual do cartão.
- `409 REVIEW_ID_CARD_MISMATCH` — o `reviewId` já identifica a revisão de outro cartão. Nada foi registado. Envie a revisão com um novo `reviewId`.
- `409 REVIEW_STALE` — a hora de revisão guardada para o cartão é igual ou posterior à hora atual do servidor. Reveja outro cartão.

As revisões só são registadas através de `submit_review`. O SQL não pode escrever em `review_events` nem no estado de agendamento FSRS. Chame `get_guide` com o tema `review_flow` para consultar todas as regras de revisão e avaliação.

## Contrato do cartão

Todos os cartões seguem o mesmo contrato, do qual dependem as ferramentas:

- `front_text` contém apenas uma pergunta ou um enunciado de revisão, sem a resposta.
- `back_text` contém a resposta, que pode incluir um exemplo concreto.

Os agentes que criam cartões através de `sql_execute` seguem este contrato. Os cartões ficam prontos a rever com repetição espaçada.

## Autenticação

Os dois métodos de autorização dão acesso à mesma interface de dados por utilizador.

### OAuth 2.1 (clientes com conectores interativos)

O servidor implementa o fluxo com código de autorização, PKCE e registo dinâmico de clientes (Dynamic Client Registration). Adicione o URL do MCP como conector personalizado e autorize o acesso no navegador, sem partilha prévia de um segredo do cliente. A descoberta usa os endereços normalizados:

- Metadados do recurso protegido:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadados do servidor de autorização:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Chave de API (sem interface gráfica e linha de comandos)

Obtenha uma chave de API de agente `fca_` de longa duração seguindo o fluxo de início de sessão por código de utilização única enviado por e-mail, documentado na [referência da API](/docs/api/). Envie a chave como token Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

A interface REST para agentes aceita a mesma chave. Não precisa de um navegador nem de completar o fluxo OAuth.

A descrição canónica, legível por máquina, dos dois métodos está na resposta de descoberta em `https://api.nibomo.com/v1/`, também disponível em `/v1/agent`.

## Segurança e âmbito

O acesso das ferramentas SQL é limitado por um analisador sintático. Isto permite aprová-las com segurança, pois usam um dialeto restrito:

- **Lista fechada de instruções permitidas**: `sql_query` só aceita `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` e `SELECT`. `sql_execute` só aceita `INSERT`, `UPDATE` e `DELETE`. Qualquer outra instrução é rejeitada durante a análise.
- **Recursos limitados**: as instruções só podem usar `workspace`, `cards`, `decks` e `review_events`.
- **Âmbito limitado ao espaço de trabalho**: cada instrução SQL e cada revisão está limitada a um espaço de trabalho a que tem acesso, indicado por `workspaceId` ou selecionado como predefinido. A instrução ou revisão não acede a outros espaços de trabalho.
- **Argumentos estritos**: todas as ferramentas rejeitam argumentos desconhecidos. Um `workspaceId` escrito incorretamente causa um erro, em vez de usar o espaço de trabalho predefinido.
- **Limites**: até `100` linhas por instrução, até `50` instruções por lote e cerca de `12k` tokens por resultado. Os lotes de alterações são aplicados de forma atómica.
- **Separação entre leitura e escrita**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card` e `reveal_answer` são estritamente só de leitura (`readOnlyHint`). Nunca reparam dados, recalculam agendamentos de revisão nem alteram o estado dos cartões.
  `sql_execute` e `submit_review` são as únicas ferramentas de escrita (`destructiveHint`). `sql_execute` escreve cartões e baralhos. `submit_review` regista uma revisão e atualiza o agendamento do cartão.

A aplicação, o backend e a infraestrutura são de código aberto. Pode [alojá-los na sua infraestrutura](/docs/self-hosting/) e usar o mesmo conector com a sua instalação.
