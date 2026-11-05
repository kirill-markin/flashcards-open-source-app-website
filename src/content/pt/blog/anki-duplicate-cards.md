---
title: "Cartões duplicados no Anki — como encontrar cópias e decidir qual manter"
description: "Identifique cartões duplicados no Anki, compare as notas e escolha qual cópia manter. Use um exercício de limpeza para conferir o histórico de revisões."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "cartões duplicados no Anki"
  - "encontrar duplicatas no Anki"
  - "excluir notas duplicadas no Anki"
  - "notas duplicadas no Anki"
  - "histórico de revisões do Anki"
---

Você reconhece uma pergunta que já revisou, mas o Anki a mostra como nova. Pode ser uma cópia que veio de uma importação ou uma segunda pergunta gerada pela mesma nota. Se você excluir uma linha na janela de navegação, pode acabar apagando todos os cartões daquela nota, inclusive o que queria manter.

Para limpar **cartões duplicados no Anki**, descubra primeiro de onde vem a repetição. Se os cartões vêm de notas diferentes, use **Notes → Find Duplicates** para achar possíveis duplicatas. Quando o conteúdo de um campo coincide, abra as duas notas e compare o restante do conteúdo e o histórico de cada cartão. Decida qual cópia manter em cada caso.

Estas instruções para o Anki no computador seguem a documentação e o código de uma versão publicada, consultados em 4 de outubro de 2026. Os resultados do exercício fictício são previsões baseadas nessas fontes.

![Um jogador de um clube de xadrez compara uma torre clara a mais com duas torres gastas sobre um tabuleiro de madeira](/blog/anki-duplicate-cards.png)

## Descubra primeiro o que está se repetindo

Uma nota guarda campos como **Front** (frente) e **Back** (verso). Os modelos geram os cartões a partir desses campos. De uma nota de vocabulário podem sair dois cartões, um para reconhecer a palavra e outro para lembrar como dizê-la. São cartões irmãos e cada um tem seu próprio agendamento. [Como o Anki usa notas e campos](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Na janela **Browse** (navegador), use o modo **Cards** e abra **Cards → Info** para cada linha suspeita. Compare os IDs das notas. IDs iguais indicam cartões da mesma nota. IDs diferentes indicam notas separadas. Em `nid:123`, troque `123` pelo ID real para ver todos os cartões dessa nota, independentemente do baralho. [Como buscar por ID no Anki](https://docs.ankiweb.net/searching.html#object-ids)

| O que você encontra | Explicação provável | O que fazer |
| --- | --- | --- |
| Mesma nota, perguntas em sentidos opostos | Cartões irmãos criados de propósito | Veja se as duas perguntas são úteis |
| Mesma nota, perguntas idênticas na tela | Possíveis modelos de cartão duplicados | Compare os modelos e as prévias dos cartões |
| Notas diferentes, perguntas aparentemente idênticas | Possíveis notas duplicadas | Compare as notas completas antes de escolher qual manter |

O guia sobre cartões invertidos explica por que pode fazer sentido estudar a mesma nota nos dois sentidos. Se você quiser parar de revisar um dos cartões, suspenda-o para tirá-lo das revisões e mantê-lo na coleção. [Cartões invertidos (em inglês)](/blog/anki-reverse-cards/) · [Como funciona a suspensão (em inglês)](/blog/anki-bury-vs-suspend/)

Se os modelos forem idênticos, investigue a origem dos cartões extras. Remover um modelo afeta todas as notas daquele tipo, inclusive as de outros baralhos. Trate a remoção do modelo como uma mudança na estrutura da coleção e faça-a separadamente da limpeza das cópias. [Guia do Anki sobre cartões extras](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html)

## Limite a busca por notas duplicadas

Abra **Notes → Find Duplicates** (encontrar duplicatas) e escolha o campo que quer comparar, como **Front**. Por padrão, o Anki busca em todos os tipos de nota que têm esse campo. Em **Optional filter**, defina onde buscar e clique em **Search**. [Controles da busca por duplicatas no Anki](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Use este filtro se o baralho se chama `Cleanup practice`.

```text
deck:"Cleanup practice"
```

A busca por baralho inclui os subbaralhos. Se houver chance de as cópias estarem em baralhos diferentes, remova o filtro para pesquisar na coleção inteira. Mesmo sem resultados em um baralho, ainda pode haver cópias em outros. [Sintaxe de busca por baralho no Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Clique em um grupo de resultados para examinar as notas. **Tag Duplicates** adiciona a etiqueta `duplicate` a todas as notas de cada grupo, inclusive à que você pretende manter. [Código publicado que aplica a etiqueta](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

**Não apague todos os resultados de `tag:duplicate` de uma vez.** Use a etiqueta para reunir as possíveis duplicatas e selecione uma a uma as notas que pretende excluir.

Essa busca compara apenas o campo escolhido. Se duas perguntas cobram o mesmo fato com outras palavras, talvez seja preciso procurá-las manualmente. Perguntas idênticas podem fazer parte de cursos diferentes ou ter sentidos distintos em outros idiomas.

## Experimente três decisões no papel

Imagine seis notas em `Cleanup practice`, um baralho sem subbaralhos. A e B usam os modelos originais de **Basic (and reversed card)**, que geram dois cartões por nota. C, D, E e F usam **Basic**, que gera um cartão por nota. Os oito cartões estão no mesmo baralho. As letras servem só para este exemplo. Os IDs reais das notas e dos cartões no Anki são números.

| Notas | Frente → Verso | Progresso fictício | Decisão |
| --- | --- | --- | --- |
| A e B | `le vélo` → `bicycle` | Em A, o cartão de reconhecimento tem 12 revisões e o de produção tem 3. Os dois cartões de B são novos. | Mantenha A. B é a primeira candidata à exclusão. |
| C e D | `Chemical symbol for silver?` → `Ag` | C tem 20 revisões e D tem 6. | Compare os dois históricos e escolha com qual cartão continuar. |
| E e F | E tem `bank` → `financial institution`. F tem `bank` → `side of a river`. | As notas ensinam sentidos diferentes. | Mantenha as duas e dê mais contexto às perguntas. |

A busca pelo campo **Front** pode encontrar os três pares. Só no primeiro a escolha é simples. Antes de decidir que B está sobrando, compare **todos os campos**, os arquivos de mídia, as etiquetas, o tipo de nota e a prévia dos cartões em cada sentido. B pode ter um áudio de pronúncia ou gerar uma pergunta que A não tem.

Se encontrar material útil para o mesmo objetivo de estudo, copie esse conteúdo para a nota que vai manter e confira a prévia dos cartões. Preserve também as etiquetas de origem que ainda forem úteis. Se a mudança trocar o fato que você quer aprender, crie outra pergunta para que ela tenha seu próprio histórico.

No caso de C e D, a quantidade de revisões é só uma pista. Veja as datas e as avaliações das revisões, o intervalo atual e a próxima revisão prevista de cada cartão. Talvez você só tenha precisado reaprender a resposta mais vezes em um deles. Depois de confirmar que a pergunta e a resposta são úteis, escolha com qual histórico quer continuar. Se as respostas divergirem, confira primeiro o material de estudo. A contagem de revisões não indica qual resposta está certa.

Se você mantiver C e excluir D, **C conserva apenas o próprio histórico**. O cartão continua com seu agendamento e progresso. Em **Card Info**, o Anki mostra o histórico de cada cartão. As revisões de notas excluídas continuam nas estatísticas da coleção inteira, mas somem das estatísticas de cada baralho. [Histórico em Card Info](https://docs.ankiweb.net/stats.html#card-info) · [Estatísticas de notas excluídas](https://docs.ankiweb.net/stats.html#more)

Se ainda estiver em dúvida, adie a exclusão. Anote o que falta conferir e, se precisar, suspenda os cartões que quer tirar das revisões enquanto investiga.

## Exclua uma cópia confirmada e confira o resultado

Antes de excluir material de estudo, sincronize as alterações pendentes nos outros dispositivos. Em seguida, sincronize o Anki no computador para receber essas alterações. [Manual de sincronização do Anki](https://docs.ankiweb.net/syncing.html)

Em **File → Export**, salve um **Anki Collection Package (`.colpkg`)** com a opção **Include Media** ativada. O arquivo inclui todos os baralhos, seus agendamentos e o histórico de revisões. Guarde-o em um local seguro. Se precisar restaurá-lo, lembre que a importação substitui os cartões atuais do perfil aberto pela coleção salva. [Como exportar a coleção no Anki](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Se quiser ensaiar a exclusão, crie um perfil separado em **File → Switch Profile** e importe a cópia de segurança nesse perfil. Deixe o perfil de teste desconectado do AnkiWeb. Cada perfil tem sua própria coleção. Se conectar os dois à mesma conta, você pode acabar substituindo uma coleção pela outra. [Perfis no manual do Anki](https://docs.ankiweb.net/profiles.html) · [Guia de cópias de segurança e importações em APKG e COLPKG (em inglês)](/blog/anki-apkg-vs-colpkg/)

No exercício, A1 é o cartão de reconhecimento de A e A2 é o de produção. B1 e B2 são os cartões correspondentes de B. Em **Cards → Info**, anote os IDs reais dos dois cartões de A, as datas previstas para as próximas revisões, os intervalos e alguns registros fáceis de identificar no histórico. Anote também o ID da nota B. Compare o antes e o depois na mesma sessão, sem revisar nem reagendar os cartões de nenhuma das duas notas.

Para excluir notas duplicadas no Anki uma de cada vez, siga estes passos.

1. Na janela **Browse**, substitua a busca atual por `nid:` seguido do ID real da nota B. No modo **Cards**, confira todos os resultados e veja a prévia das perguntas nos dois sentidos. Ao lidar com material real, procure cartões irmãos também em outros baralhos. Faça essa busca sem filtro de baralho.
2. Mude para o modo **Notes**. Confirme que B é o único resultado e que é a nota que você quer excluir. Selecione só essa nota e escolha **Notes → Delete**. A ação exclui a nota selecionada e todos os cartões dela, mesmo quando acionada em uma única linha no modo **Cards**. [Ação Delete no manual do Anki](https://docs.ankiweb.net/browsing.html#notes)
3. Busque novamente pelo ID da nota B e confira se a busca retorna zero resultados. Busque os IDs anotados para os cartões de A com `cid:`, separando os dois IDs por vírgula. Compare as informações dos dois cartões com o que você anotou.
4. Busque `deck:"Cleanup practice"` e compare a contagem de linhas nos modos **Notes** e **Cards**. Confira as notas restantes com a tabela abaixo.

Se você excluir apenas B, o resultado esperado é este.

| Verificação | Antes | Resultado esperado |
| --- | --- | --- |
| Baralho inteiro do exemplo | 6 notas / 8 cartões | 5 notas / 6 cartões |
| Cartões sobre bicicleta | A1, A2, B1 e B2 | Apenas A1 e A2 |
| IDs dos cartões de A, próximas revisões, intervalos e histórico | Os valores que você anotou | Os mesmos cartões, com o mesmo agendamento e os mesmos registros no histórico |
| Busca pelo ID da nota B | Os dois cartões de B | Nenhum resultado |
| Notas sobre prata e os sentidos de “bank” | C, D, E e F | As mesmas quatro notas |

Neste exemplo, excluir uma nota remove dois cartões. Você chegaria aos mesmos totais se apagasse A por engano, mas perderia os cartões que já estudou e queria manter. Confira os IDs junto com as contagens. Durante a limpeza, preserve o progresso e o agendamento dos cartões que vão ficar.

O gráfico de revisões da coleção inteira ainda pode incluir revisões de cartões excluídos. Para confirmar o progresso, confira o ID e o histórico do cartão que ficou em **Cards → Info**.

Quando os resultados desse grupo baterem com suas anotações, passe ao próximo e escolha qual cópia manter ali. Se você ensaiou em outro perfil, repita no perfil real a exclusão que já conferiu. Depois de verificar a coleção, sincronize o Anki no computador e depois nos outros dispositivos, antes de voltar a estudar neles. Se as cópias vieram de uma importação, veja como atualizar as notas antes da próxima. Se você duplicou notas para estudar o mesmo fato em vários assuntos, use etiquetas para agrupar o material e manter um só histórico de estudo. [Como atualizar notas com CSV (em inglês)](/blog/anki-csv-update-existing-notes/) · [Etiquetas e baralhos no Anki (em inglês)](/blog/anki-tags-vs-decks/)
