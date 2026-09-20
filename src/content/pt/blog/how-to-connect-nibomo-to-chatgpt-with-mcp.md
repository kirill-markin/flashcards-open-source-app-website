---
title: "Como conectar o Nibomo ao ChatGPT com MCP"
description: "Conecte o Nibomo ao ChatGPT pelo servidor MCP, faça login com OAuth, defina as permissões e teste a conexão salvando um flashcard."
date: "2026-09-20"
image: "/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png"
keywords:
  - "conectar Nibomo ao ChatGPT"
  - "Nibomo ChatGPT MCP"
  - "conector de flashcards para ChatGPT"
  - "configurar o MCP do Nibomo"
---

Para conectar o Nibomo ao ChatGPT, adicione o servidor MCP do Nibomo como um plugin personalizado e entre na sua conta. As duas etapas são necessárias: o Nibomo pode aparecer na página **Plugins** do ChatGPT antes de você concluir o login.

A conexão usa MCP, um padrão que permite a um assistente de IA usar as ferramentas de outro aplicativo. Você informa o endereço do servidor, autoriza o acesso e faz pedidos ao ChatGPT sobre seus flashcards em linguagem natural. Não é preciso programar.

![Uma florista apresenta um buquê de teste a um cliente para aprovação antes de preparar os demais](/blog/how-to-connect-nibomo-to-chatgpt-with-mcp.png)

A configuração usa o **Developer mode** (modo de desenvolvedor) do ChatGPT. Nele, você adiciona o Nibomo diretamente pela URL do servidor.

**Até onde verificamos:** Capturamos as telas de configuração em 20 de setembro de 2026 e salvamos o plugin personalizado. A janela de login não abriu no navegador integrado que usamos, então não conseguimos concluir a autenticação com OAuth nem testar o acesso às ferramentas com uma conta conectada. Os pedidos abaixo servem para você testar a sua conexão; não verificamos a criação de cartões por esse caminho.

## Adicione um plugin personalizado

Você precisa de uma conta no Nibomo e de uma conta ou espaço de trabalho no ChatGPT com acesso a conexões MCP personalizadas. Se ainda não usou o Nibomo, siga primeiro o [guia de primeiros passos](/docs/getting-started/) para criar seu espaço de trabalho.

No ChatGPT, abra **Settings → Security and login → Developer mode** (configurações → segurança e login → modo de desenvolvedor) e ative a opção. Depois, abra **Plugins** e use o botão **+** ou a opção **Create app** (criar aplicativo) para adicionar uma conexão. Na nossa sessão, o formulário se chamava **New Plugin** (novo plugin). A OpenAI descreve esse processo no [guia Connect to ChatGPT](https://developers.openai.com/plugins/deploy/connect-chatgpt).

A disponibilidade e os nomes das opções podem variar conforme a conta e o espaço de trabalho. Se o modo de desenvolvedor ou a opção de criação não aparecer, consulte o guia oficial e as restrições do seu espaço de trabalho.

Preencha o formulário:

| Campo | Valor |
| --- | --- |
| Name (nome) | `Nibomo` |
| Description (descrição) | `Leia, crie e revise seus flashcards com repetição espaçada.` |
| Connection (conexão) | Server URL (URL do servidor) |
| Server URL (URL do servidor) | `https://mcp.nibomo.com/mcp` |
| Authentication (autenticação) | OAuth |

Use o endereço completo, incluindo `/mcp` no final. A descrição é opcional e serve para facilitar a identificação da conexão depois. Não é necessário gerar uma chave de API para esta configuração com OAuth.

![Formulário New Plugin do ChatGPT com a URL do servidor MCP do Nibomo e autenticação OAuth selecionada](/blog/chatgpt-mcp-nibomo-create-connector.png)

Leia o aviso sobre servidores personalizados, marque a confirmação se quiser continuar e clique em **Create** (criar). O botão fica abaixo da área visível na captura de tela. Isso adiciona sua conexão personalizada; não significa que o Nibomo tenha sido avaliado ou listado no diretório público da OpenAI.

## Conclua o login no Nibomo

Na tela **Add Nibomo to ChatGPT** (adicionar o Nibomo ao ChatGPT), selecione **Sign in with Nibomo** (entrar com o Nibomo) e conclua a autorização usando a conta do Nibomo que contém seus cartões.

![Tela Add Nibomo to ChatGPT com o botão Sign in with Nibomo, antes do login](/blog/chatgpt-mcp-nibomo-sign-in.png)

O serviço de autenticação do Nibomo usa `auth.flashcards-open-source-app.com`. Esse domínio pode aparecer normalmente durante o login, mesmo que o endereço MCP use `mcp.nibomo.com`.

Se a janela de login não abrir, tente fazer o processo no navegador que você usa normalmente. Para tentar entrar novamente, abra **Nibomo → Plugin actions (…) → Manage → Connect another account** (ações do plugin → gerenciar → conectar outra conta). Para confirmar que o ChatGPT consegue acessar sua conta, peça a lista de espaços de trabalho conforme as instruções mais adiante.

## Escolha quando o ChatGPT deve pedir permissão

Em **Settings → Plugins → Permissions** (configurações → plugins → permissões), a tela que capturamos oferece as opções **Always ask** (sempre perguntar), **Allow read actions** (permitir ações de leitura) e **Allow low-risk actions** (permitir ações de baixo risco).

Escolha **Allow read actions** para que o ChatGPT possa listar espaços de trabalho e ler cartões sem perguntar, mas ainda precise de aprovação para fazer alterações. Escolha **Always ask** se quiser aprovar também as leituras.

![Permissões de plugins do ChatGPT com a opção Allow read actions selecionada](/blog/chatgpt-mcp-nibomo-permissions.png)

Essa configuração vale para todos os plugins. Qualquer mudança nela também afeta os outros plugins que você usa.

No Nibomo, listar espaços de trabalho, ler cartões, buscar instruções, receber a próxima pergunta para revisar e revelar uma resposta são ações de leitura. Criar ou editar cartões e registrar uma revisão são ações de escrita. Nomes de ferramentas como `list_workspaces`, `sql_query` ou `sql_execute` podem aparecer na atividade do ChatGPT, mas você não precisa escrever SQL. A [documentação do conector MCP](/docs/mcp-connector/) descreve a interface.

## Teste a conexão com um único cartão

Abra uma conversa com o Nibomo selecionado. Comece com um pedido que não altere nada:

> Use o Nibomo para listar meus espaços de trabalho. Não crie nem altere nada.

Confira se os espaços de trabalho listados são os da sua conta. Se o ChatGPT não conseguir acessar o Nibomo ou pedir para conectar uma conta, volte à etapa de login. Quando a lista aparecer corretamente, indique em qual espaço de trabalho quer salvar o cartão antes de continuar.

Em seguida, peça um rascunho:

> Prepare um único flashcard sobre HTTP 404. Coloque apenas uma pergunta na frente e a resposta no verso. Mostre os dois lados antes de salvar qualquer coisa.

O cartão pode ficar assim:

| Lado | Conteúdo |
| --- | --- |
| Frente | O que significa o código de status HTTP 404? |
| Verso | O servidor não encontrou o recurso solicitado. Por exemplo, a URL pode apontar para uma página que não existe. |

Se o rascunho estiver bom, informe onde quer salvar:

> Salve este único cartão no meu espaço de trabalho [nome do espaço de trabalho] do Nibomo. Não crie outros cartões.

Confira o cartão e o espaço de trabalho no pedido de aprovação do ChatGPT antes de autorizar o salvamento. Depois, peça ao ChatGPT para ler o cartão que acabou de salvar. Abra o Nibomo na web ou no celular com a mesma conta, selecione esse espaço de trabalho e aguarde a sincronização. Encontre o cartão e confira os dois lados no aplicativo para confirmar que ele foi salvo corretamente.

## Se a conexão ainda não funcionar

Confira primeiro a URL configurada: `https://mcp.nibomo.com/mcp`. O domínio MCP antigo continua funcionando, mas, se você alterar uma conexão existente para o novo endereço, faça login novamente. Os tokens de autorização ficam vinculados ao endereço do servidor.

Se o ChatGPT informar que não conseguiu salvar, peça que ele leia o espaço de trabalho antes de tentar salvar de novo. Isso ajuda a evitar cartões duplicados quando o resultado da primeira tentativa não está claro. Se o cartão já existe no servidor, mas ainda não apareceu no celular, confira a conta, o espaço de trabalho e se a sincronização terminou no aparelho.

Depois dessa verificação com um cartão, você pode usar o mesmo processo de rascunho e aprovação com seu próprio material de estudo. O [guia para criar flashcards com o ChatGPT](/blog/how-to-use-chatgpt-to-make-flashcards/) explica como escolher perguntas úteis e abordar um assunto por cartão.
