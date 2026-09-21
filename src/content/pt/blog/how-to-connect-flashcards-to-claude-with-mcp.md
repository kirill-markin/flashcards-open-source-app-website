---
title: "Como conectar os flashcards do Nibomo ao Claude com MCP"
description: "Conecte o Nibomo ao Claude Desktop ou à versão para navegador com um conector MCP remoto. Siga os passos verificados, ajuste as permissões e tente salvar seu primeiro flashcard."
date: "2026-06-23"
updated: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-claude-mcp.png"
keywords:
  - "conector Nibomo Claude"
  - "flashcards Claude MCP"
  - "conectar Nibomo ao Claude"
  - "criar flashcards no Claude"
---

O Claude pode salvar flashcards diretamente no seu espaço de trabalho do Nibomo por meio de um conector MCP personalizado. Você adiciona a URL do servidor, entra no Nibomo e escolhe quais ações o Claude pode executar sem pedir autorização a cada vez.

A configuração abaixo foi verificada no Claude Desktop em 20 de setembro de 2026. Ela usa o conector remoto disponível nas conversas comuns do Claude, tanto no Desktop quanto no navegador. Para Claude Code, Codex ou outro agente de terminal, siga o [guia de login para agentes](/blog/claude-code-codex-openclaw-flashcards-login/).

![Uma entrega de materiais em uma biblioteca ilustra o acesso de leitura e a necessidade de aprovação antes de fazer alterações](/blog/how-to-connect-nibomo-to-claude-mcp.png)

## Adicione o Nibomo nas configurações de conectores do Claude

Você precisa de uma conta no Nibomo e de acesso a conectores personalizados no Claude. O Nibomo usa um servidor MCP remoto, então não há nada para instalar localmente. A Anthropic documenta esse tipo de conexão no [guia de conectores personalizados](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

1. Abra **Settings > Connectors** no Claude Desktop ou abra a [página de conectores no navegador](https://claude.ai/customize/connectors).
2. Escolha **Add custom connector**.
3. Digite **Nibomo** como nome e cole esta URL do servidor:

   ```text
   https://mcp.nibomo.com/mcp
   ```

4. Clique em **Continue**.
5. Na tela de autenticação, mantenha **Sign in now** e **Register automatically (DCR)** selecionados. Deixe os cabeçalhos personalizados e as configurações avançadas nos valores padrão.
6. Clique em **Add** e depois em **Connect**.

![Janela Add custom connector do Claude com o nome Nibomo e a URL do servidor MCP](/blog/claude-mcp-nibomo-add-connector.png)

## Entre na sua conta e autorize o acesso

O Claude abre um navegador para concluir a conexão. Se aparecer uma confirmação antes, escolha **Continue connecting**.

A página de autenticação do Nibomo usa o domínio `auth.flashcards-open-source-app.com`. Ela pode reconhecer uma sessão já aberta no Nibomo; caso contrário, entre na sua conta. A tela de consentimento mostra **Claude wants to connect to your Nibomo account** e descreve o acesso para ler e gravar flashcards e dados de revisão.

Confira se você está conectando a conta certa e clique em **Allow access**. Quando a página mostrar **Connected**, escolha **Open desktop app** se estiver usando o Claude Desktop. De volta às configurações de conectores, você deve ver **Nibomo** com a URL `https://mcp.nibomo.com/mcp`.

## Exija aprovação para gravar dados

O conector tem ferramentas para ler seu material de estudo, alterá-lo e registrar revisões. Abra o Nibomo em **Settings > Connectors** para conferir as permissões das ferramentas. Para seguir a configuração mostrada aqui, defina as cinco ferramentas de leitura como **Always allow** e mantenha as duas ferramentas de escrita em **Needs approval**:

| Permissão | Ferramentas |
| --- | --- |
| **Always allow** | Get flashcards usage guide; List flashcards workspaces; Next flashcard question; Reveal flashcard answer; Nibomo SQL query (read-only) |
| **Needs approval** | Nibomo SQL execute (write); Submit flashcard review |

Assim, o Claude pode encontrar um espaço de trabalho e ler cartões, mas precisa pedir autorização antes de alterar dados ou registrar uma revisão. Você pode escolher permissões mais restritas se também quiser aprovar as leituras.

![Nibomo conectado ao Claude, com as ferramentas de leitura permitidas e as de escrita exigindo aprovação](/blog/claude-mcp-flashcards-connector-settings.png)

## Teste com um cartão e confira se ele foi salvo

Abra uma conversa e confira se o Nibomo está ativado no menu de conectores do chat. Comece com um pedido pequeno, deixando explícitos o destino e o conteúdo do cartão:

```text
Use o Nibomo para listar meus espaços de trabalho e me pergunte qual usar.
Depois crie um flashcard:
Frente: O que significa HTTP 404?
Verso: O recurso solicitado não foi encontrado no servidor.
Tag: web-basics
```

Escolha o espaço de trabalho, confira o pedido de gravação do Claude e aprove se o conteúdo e o destino estiverem corretos. Depois abra o [Nibomo](https://app.nibomo.com/) e confira se o cartão salvo tem a pergunta na frente e a resposta no verso. A verificação do passo a passo acima cobriu a conexão e as permissões salvas; nenhum cartão foi criado. Este primeiro teste serve para conferir se o Claude também consegue salvar um cartão no espaço de trabalho que você escolheu.

Se o Claude só escrever o cartão no chat, confira se o Nibomo está conectado nas configurações, ativado nessa conversa e se **Nibomo SQL execute (write)** não está bloqueado. Peça explicitamente para salvar o cartão pelo Nibomo.

Para criar lotes maiores, o guia [Como usar o Claude para criar flashcards](/blog/how-to-use-claude-to-make-flashcards/) explica como preparar perguntas e respostas úteis. Se você está estudando códigos HTTP, também pode começar pelo [baralho de flashcards de códigos de status HTTP](/catalog/packages/http-status-code-flashcards/), que já está disponível.

## Se você já usa a URL antiga do conector

O endereço antigo, `https://mcp.flashcards-open-source-app.com/mcp`, continua funcionando. Use `https://mcp.nibomo.com/mcp` para uma conexão nova e esteja preparado para autorizar o Nibomo novamente ao trocar de URL.

Para seguir a sequência verificada neste guia, abra o conector antigo em **Settings > Connectors**, escolha **Disconnect** e depois **More options > Remove**. Adicione o Nibomo seguindo os passos acima e confirme se ele mostra a URL nova e as ferramentas esperadas.

Se você está começando no app, o [guia de primeiros passos](/docs/getting-started/) explica como usar o espaço de trabalho e estudar depois de salvar seu primeiro cartão.
