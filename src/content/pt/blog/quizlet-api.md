---
title: "O Quizlet tem uma API pública em 2026? Situação atual e alternativas seguras"
description: "O Quizlet tem uma API? Em 18 de agosto de 2026, não há uma API pública documentada que desenvolvedores possam acessar por conta própria. Compare as alternativas."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "API do Quizlet"
  - "o Quizlet tem uma API"
  - "API pública do Quizlet"
  - "API do Quizlet para desenvolvedores"
  - "alternativa à API do Quizlet"
  - "automatizar flashcards"
---

Em 18 de agosto de 2026, o Quizlet não documenta uma API pública que desenvolvedores possam acessar por conta própria nem um portal público para desenvolvedores. Hoje, um desenvolvedor independente não tem uma forma oficial de registrar um aplicativo, obter uma chave de API do Quizlet e usar endpoints documentados para ler ou gravar dados de flashcards.

Essa constatação diz respeito à documentação pública do Quizlet, não aos seus sistemas internos. O Quizlet tem integrações com produtos e parceiros. Seu app no ChatGPT e o complemento para o Google Classroom são dois exemplos atuais. Nenhum deles abre uma API de uso geral do Quizlet para outros aplicativos.

**Fatos verificados:** 18 de agosto de 2026.

> **Transparência:** Sou Kirill Markin e desenvolvo o Nibomo, cuja Agent API e cujo servidor MCP aparecem como alternativas abaixo. O Nibomo não é compatível com o Quizlet e não importa conjuntos do Quizlet automaticamente.

![Desenvolvedor compara a exportação do Quizlet, a incorporação em páginas, integrações específicas e uma API documentada de flashcards](/blog/quizlet-api.png)

## Resposta curta: não há uma API documentada do Quizlet com acesso direto

Se você pesquisou “o Quizlet tem uma API?” porque quer automatizar o próprio Quizlet, a resposta prática hoje é que **não há uma API pública documentada que você possa acessar por conta própria**.

Vários recursos oficiais podem parecer uma forma de acesso por API à primeira vista. Eles atendem a necessidades mais específicas:

| O que você precisa | Caminho disponível | Serve para | Não oferece |
|---|---|---|---|
| Transferir o texto de um conjunto que você criou | [Exportação pelo site do Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Copiar termos e definições uma única vez | Imagens, exportação de conjuntos copiados, histórico de estudo ou acesso à API |
| Colocar um conjunto público em um site ou em uma página de LMS | [Incorporação do Quizlet](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Uma atividade de estudo com a marca do Quizlet dentro da sua página | Dados estruturados dos cartões ou acesso de leitura e gravação |
| Transformar uma conversa do ChatGPT em um conjunto do Quizlet | [App do Quizlet no ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Criar e visualizar um conjunto por meio de `@Quizlet` | Credenciais ou endpoints para seu próprio app |
| Atribuir atividades do Quizlet no Google Classroom | [Complemento do Quizlet para o Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Encontrar, atribuir e acompanhar atividades no Classroom | Uma API geral para software educacional personalizado |
| Criar sua própria integração com o Quizlet | Atualmente, não há uma forma documentada de obter acesso por conta própria | Pode haver um acordo com um parceiro específico | Cadastro público, chaves de API ou um contrato documentado de acesso aos cartões |
| Automatizar seu próprio espaço de trabalho de flashcards | [Agent API do Nibomo](/pt/docs/api/) ou [conector MCP](/pt/docs/mcp-connector/) | Ler e gravar cartões e baralhos repetidamente, dentro de um espaço de trabalho | Compatibilidade com o Quizlet ou importação automática do Quizlet |

A distinção é simples: copiar o texto dos seus cartões uma vez é uma tarefa de exportação. Mostrar o Quizlet em outra página é uma tarefa de incorporação. Uma integração específica só funciona dentro do fluxo daquele produto. Um software que cria, lê e edita cartões repetidamente precisa de uma API documentada de leitura e gravação.

## Exportação, incorporação e acesso de parceiros não são APIs públicas

Uma API pública oferece um contrato para desenvolvedores externos: documentação, autenticação, operações disponíveis, regras de uso e um meio de obter credenciais. Nenhum dos recursos públicos atuais do Quizlet permite que um desenvolvedor siga todo esse processo por conta própria.

A **exportação** do Quizlet é uma transferência manual. Quem criou um conjunto pode usar o site para organizar seus termos e definições, selecionar **Copiar texto (Copy text)** e colar o resultado em outro lugar. O Quizlet informa que não é possível exportar imagens nem conjuntos copiados e que o recurso está disponível apenas no site. Isso funciona para uma migração pontual feita com cuidado. Não permite que um software mantenha dois sistemas sincronizados.

A **incorporação** serve para exibir conteúdo, não para acessar dados. O Quizlet permite copiar o HTML de um conjunto público nos modos de combinar (Match), aprender (Learn), teste (Test), cartões (Flashcards) ou soletrar (Spell). A atividade incorporada mantém o logotipo do Quizlet, e os alunos interagem com a interface dele. Seu aplicativo não recebe o conjunto como registros de cartões que possa editar.

Uma **integração específica** segue um fluxo de uso acordado entre as partes. O Quizlet pode funcionar com o ChatGPT ou o Google Classroom sem oferecer a mesma interface a todos os desenvolvedores. Esses lançamentos comprovam que tais integrações existem; não comprovam que haja uma API pública do Quizlet por trás delas disponível para uso geral.

É também por isso que um wrapper antigo ou uma requisição visível nas ferramentas de desenvolvedor do navegador não é uma API do Quizlet com suporte oficial. Faltam a documentação pública e um contrato estável para desenvolvedores.

## Escolha o caminho de acordo com a tarefa

### Para um backup ou uma migração pontual, use a exportação

Use o fluxo oficial de exportação do Quizlet para um conjunto que você criou. Como o fluxo termina em **Copiar texto (Copy text)**, mantenha intacta a primeira cópia do texto colado antes de ajustar separadores ou mapear campos. Você está preservando termos e definições, não baixando um pacote de baralho que possa ser restaurado. As imagens e o histórico de estudo ficam para trás.

A lista de passos está em [Como exportar conjuntos do Quizlet em 2026](/pt/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Ela aborda cópias originais e de trabalho, UTF-8, tabulações, definições com várias linhas e a diferença entre transferir o conteúdo dos cartões e transferir o estado do agendamento das revisões.

A exportação serve para uma transferência com começo e fim. Não serve para criação diária, sincronização ou edições repetidas por software.

### Para exibir o conteúdo, use a incorporação oficial

Se os alunos precisam estudar um conjunto público do Quizlet em um site de turma ou em uma página de LMS, use o código de incorporação que o Quizlet oferece no site. Escolha a atividade, selecione **Copiar HTML (Copy HTML)** e adicione o resultado à página. Os alunos recebem uma atividade interativa do Quizlet; o site que a hospeda não recebe um fluxo de dados brutos dos cartões.

Muitas vezes, isso é tudo de que um professor precisa. Chamar o recurso de API só faz a necessidade parecer mais complicada do que é.

### Para o ChatGPT ou o Google Classroom, use a integração específica

O anúncio do Quizlet sobre o ChatGPT, de 10 de março de 2026, descreve um fluxo específico: conectar o app do Quizlet, começar um prompt com `@Quizlet`, visualizar o conjunto gerado no ChatGPT e depois abri-lo no Quizlet para personalizar e estudar. É uma forma oficialmente disponível de criar um conjunto do Quizlet a partir daquela conversa. Ela não fornece uma credencial reutilizável da API do Quizlet para seu bot, script ou site.

O anúncio do Quizlet sobre o Google Classroom, de 30 de junho de 2026, é igualmente específico. O complemento permite que educadores encontrem e atribuam atividades, incluindo questões para praticar, flashcards e jogos, e acompanhem a participação e o progresso no fluxo do Classroom. Segundo o Quizlet, ele exige o Google Workspace for Education Plus; os educadores podem precisar que o administrador de TI conceda permissão ou disponibilize o complemento.

Se um desses fluxos específicos já atende ao seu objetivo, use-o. Se você precisa de um aplicativo personalizado, nenhuma das duas integrações substitui o acesso público para desenvolvedores.

### Para automação recorrente, escolha uma interface documentada de leitura e gravação

Automação contínua exige que seu software faça o mesmo trabalho de forma confiável mais de uma vez: criar cartões a partir de anotações, listar baralhos, atualizar respostas ou gerenciar um espaço de trabalho ao longo do tempo. Uma exportação pela área de transferência não oferece esse contrato.

O caminho seguro é um sistema de flashcards que publique explicitamente como softwares externos se autenticam e quais operações de leitura e gravação podem realizar. Isso pode significar escolher uma alternativa à API do Quizlet para o fluxo automatizado e continuar usando o Quizlet nas tarefas de estudo que seu produto público oferece.

## O que a alternativa de API do Nibomo oferece de fato

O Nibomo oferece duas formas de acesso ao mesmo conjunto limitado de dados de cada usuário:

- A [Agent API externa](/pt/docs/api/) começa em `GET https://api.nibomo.com/v1/`. A resposta de descoberta orienta um agente no login por código de uso único enviado por e-mail (OTP), na criação de uma chave de API e na seleção do espaço de trabalho. As leituras usam uma rota de consultas no estilo SQL; as gravações usam uma rota de execução separada.
- O [servidor MCP remoto](/pt/docs/mcp-connector/) está disponível em `https://mcp.nibomo.com/mcp`. Os clientes MCP têm oito ferramentas: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` e as ferramentas de revisão `next_review_card`, `reveal_answer` e `submit_review`.

`get_usage_limits` — consulta estritamente de leitura do plano da conta, dos limites e do uso mensal atual de IA; não lê nem altera cartões.

Ambos os caminhos ficam restritos ao espaço de trabalho selecionado. Os recursos publicados são `workspace`, `cards`, `decks` e `review_events`, e os resultados têm um limite de 100 linhas por instrução. A interface no estilo SQL usa um dialeto limitado, não PostgreSQL puro. Não há um esquema OpenAPI, então fluxos que dependem de clientes gerados a partir de OpenAPI precisarão de outra interface.

Isso pode ajudar um desenvolvedor ou agente de IA a automatizar seus próprios flashcards. Não permite ler uma URL do Quizlet, espelhar uma conta do Quizlet nem atuar como um cliente não documentado do Quizlet. Não há importador automático do Quizlet. Para uma migração, primeiro exporte os termos e as definições do seu próprio conjunto, confira o texto e depois mapeie-o para os campos dos cartões no destino. O sistema de destino cria seu próprio estado de estudo; o histórico do Quizlet não é transferido.

Para entender as diferenças entre os produtos além do acesso à API, veja a [comparação com uma alternativa de código aberto ao Quizlet](/blog/quizlet-alternative/).

## Requisições privadas do navegador não são um atalho seguro

A interface web do Quizlet faz requisições de rede, como qualquer aplicativo web moderno. Encontrar uma dessas requisições não a transforma em um endpoint com suporte oficial para seu programa.

Os endpoints privados usados pelo navegador podem depender de cookies de sessão, formatos internos, controles contra abuso e pressupostos ligados à interface atual. Eles podem mudar sem versionamento público nem orientações de migração. De forma mais direta, os [Termos de Serviço do Quizlet](https://quizlet.com/tos), atualizados pela última vez em 28 de maio de 2026, proíbem scraping e outras formas de extração automatizada, assim como o uso automatizado não autorizado do serviço.

Essa base já é frágil e arriscada para um script pessoal, e ainda mais para um produto. Não vou fornecer endpoints baseados em suposições nem passos de engenharia reversa aqui.

Para seu próprio conjunto, exporte quando precisar de uma transferência pontual. Incorpore um conjunto público quando os alunos precisarem dele em outra página. Use a integração específica com o ChatGPT ou o Google Classroom para os respectivos fluxos. Para leituras e gravações recorrentes, escolha um software que documente o contrato de automação — ou faça a parte do Quizlet manualmente até que ele publique um.

## Como saber se a situação mudou

O Quizlet pode lançar um programa para desenvolvedores depois da data de verificação dos fatos deste artigo. O sinal a procurar é um portal oficial para desenvolvedores ou uma documentação que explique quem pode se cadastrar, como funciona a autenticação, quais operações com cartões estão disponíveis e quais regras de uso se aplicam.

Outro wrapper de terceiros não mudaria a resposta. Uma nova parceria específica também não. Até que o Quizlet documente uma forma de acesso que desenvolvedores possam usar por conta própria, avalie com cuidado as afirmações sobre uma API atual do Quizlet e escolha a opção oficialmente disponível que atenda à tarefa concreta.
