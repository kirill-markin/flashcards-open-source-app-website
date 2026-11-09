---
title: "Ordem dos cartões novos no Anki: como selecionar, ordenar e conferir a fila"
description: "Entenda como o Anki seleciona e ordena cartões novos com um exemplo de seis cartões. Confira os limites dos subbaralhos, as posições na fila e o baralho escolhido para estudar."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "ordem dos cartões novos no Anki"
  - "ordem de seleção de cartões novos no Anki"
  - "ordem de apresentação de cartões novos no Anki"
  - "posição crescente no Anki"
  - "cartões fora de ordem no Anki"
---

No Anki, um cartão novo na posição 10 pode aparecer depois de outro na posição 60. Ao estudar um baralho pai com seleção por **Baralho** (**Deck**) e ordenação pela **Ordem de seleção** (**Order gathered**), o Anki pode terminar de selecionar os cartões de um subbaralho antes de chegar ao que tem o cartão na posição 10. Ordenar a tabela do navegador pela data de criação só muda o que você vê ali.

O Anki monta a fila de cartões novos em duas etapas. A **seleção** define quais cartões entram, respeitando os limites do dia. A **ordenação** define a sequência em que os cartões selecionados aparecem. Primeiro, confira se o problema está nos cartões que entram na fila ou na ordem em que eles aparecem.

Estas instruções valem para baralhos comuns no Anki para computador. O exemplo de seis cartões é um cálculo original feito no papel, com base no manual vigente e na versão publicada do [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). As duas referências foram conferidas em 6 de outubro de 2026.

![Um homem segura um quarto disco de vinil sobre um compartimento vazio da estante, ao lado de três discos. Atrás dele, há duas caixas com álbuns que ficaram de fora.](/blog/anki-new-card-order.png)

## Escolha a ordem que você quer usar

Abra as **Opções** (**Options**) do baralho em que você clica para estudar e procure a seção **Ordem de exibição** (**Display Order**). Quando você estuda um baralho pai, as configurações dele definem a ordem da sessão, inclusive para os cartões dos subbaralhos.

| Resultado desejado | Ordem de seleção de cartões novos (New Card Gather Order) | Ordem de apresentação de cartões novos (New Card Sort Order) |
| --- | --- | --- |
| Seguir as posições crescentes dos cartões novos em toda a árvore do baralho escolhido | Posição crescente (Ascending position) | Ordem de seleção |
| Percorrer os subbaralhos em ordem alfabética e seguir as posições dentro de cada um | Baralho | Ordem de seleção |
| Manter os cartões selecionados e embaralhar a ordem em que aparecem | A opção de seleção que você escolheu | Aleatória (Random) |

Essas combinações seguem as definições de [seleção](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) e [ordenação](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) do manual do Anki, em inglês. **Posição crescente** segue a posição armazenada de cada cartão novo. A ordem de inserção e o reposicionamento manual podem alterar essas posições, então a sequência pode ser diferente da ordem de criação.

Antes de editar, confira qual predefinição o baralho usa e quais outros baralhos a compartilham. A ordem de exibição vale para todos os baralhos que usam a mesma predefinição. Se a mudança deve valer só para um baralho, separe a predefinição dele antes de editar. Veja o [passo a passo para usar uma predefinição em um só baralho](/blog/anki-deck-options-presets/) (em inglês). Para os limites diários, há ajustes específicos em **Este baralho** (**This deck**) e **Só hoje** (**Today only**).

## Veja quais quatro cartões entram na fila

Imagine um baralho pai comum chamado `OrderLab`, com dois subbaralhos e apenas estes seis cartões. Cada cartão vem de uma nota distinta do tipo **Básico** (**Basic**), que gera um único cartão. Assim, os seis têm o mesmo número de tipo de cartão e nenhum tem cartão irmão.

| Cartão | Baralho | Posição armazenada do cartão novo |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Suponha que os seis cartões sejam novos e estejam disponíveis. Nenhum está enterrado, suspenso ou em um baralho filtrado. No início, não há outros cartões, repetições de aprendizagem nem revisões. Você ainda não estudou nada hoje. `OrderLab` não tem baralho ancestral e os limites de revisão aplicáveis deixam espaço para os seis cartões novos.

Escolha **OrderLab** para estudar. O limite efetivo de cartões novos é **4** no baralho pai, **3** em `01 First` e **2** em `02 Second`, sem ajustes temporários. Use **Ordem de seleção** como opção de ordenação nas duas comparações. Faça as contas no papel a partir do mesmo estado inicial da coleção, sem responder a nenhum cartão entre uma comparação e outra.

Com a seleção por **Baralho**, a fila se forma assim.

1. Pela ordem alfabética, o Anki chega a `01 First` antes de `02 Second`.
2. O Anki seleciona **A, B, C** na ordem das posições. `01 First` já forneceu três cartões e resta uma vaga no baralho pai.
3. O Anki seleciona **D** de `02 Second` e atinge o limite de quatro cartões do baralho pai.

A sequência esperada para a primeira apresentação dos cartões novos é **A → B → C → D**. E e F ficam fora do conjunto selecionado.

Com **Posição crescente**, a sequência de candidatos dos dois subbaralhos é **D → A → E → B → F → C**. Os quatro primeiros cabem nos limites. São dois de `02 Second`, dois de `01 First` e quatro no total. A seleção para por aí.

A sequência esperada é **D → A → E → B**. C e F ficam de fora. A implementação aplica os limites do baralho e do baralho pai à medida que aceita cada cartão. Veja o [código de seleção da versão publicada](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs).

`02 Second` pode fornecer até dois cartões. Na seleção por **Baralho**, fornece só um, porque `01 First` já ocupou três das quatro vagas. Com **Posição crescente**, entram dois de cada subbaralho por causa das posições deste exemplo. Em outra coleção, a divisão pode ser diferente.

## Deixe os seis entrarem para separar seleção de sequência

Para a segunda comparação no papel, dê espaço para os seis cartões. Defina o limite do baralho pai como **6**, o de `01 First` como **3** e o de `02 Second` como **3**. Mantenha **Ordem de seleção**.

| Opção de seleção | Limites do baralho pai / `01 First` / `02 Second` | Sequência esperada na primeira apresentação |
| --- | --- | --- |
| Baralho | 6 / 3 / 3 | A → B → C → D → E → F |
| Posição crescente | 6 / 3 / 3 | D → A → E → B → F → C |

As duas opções selecionam os seis cartões. Agora, só a sequência muda. Se você aumentasse apenas o limite do baralho pai para seis e mantivesse o de `02 Second` em dois, entrariam cinco cartões. F ainda ficaria de fora. Os limites maiores servem apenas para ilustrar o cálculo.

## A ordenação só usa os cartões que entraram

Volte aos limites originais de **4 / 3 / 2** e mude apenas a **Ordem de apresentação de cartões novos** para **Aleatória**.

| Opção de seleção | Cartões disponíveis para embaralhar | Cartões que a ordenação não pode incluir |
| --- | --- | --- |
| Baralho | A, B, C, D | E, F |
| Posição crescente | D, A, E, B | C, F |

O Anki embaralha a sequência de apresentação dentro de cada conjunto. A tabela mostra quais cartões podem aparecer, mas não permite prever uma sequência aleatória específica. Veja o [código de ordenação da versão publicada](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs).

A opção **Tipo de cartão, depois ordem de seleção** (**Card type, then order gathered**) também usa o conjunto já selecionado. Como os seis cartões gerados pelas notas do tipo **Básico** têm o mesmo número de tipo de cartão, a opção preserva a ordem de seleção neste exemplo.

Para ver só o efeito da ordenação, imagine quatro cartões de notas com vários modelos. Eles já foram selecionados na ordem **W (tipo 2), X (tipo 1), Y (tipo 2), Z (tipo 1)**. A ordenação por tipo de cartão produz **X → Z → W → Y**. O tipo 1 vem primeiro, e cada tipo mantém a ordem de seleção. O exemplo parte de um conjunto já selecionado. Quais cartões irmãos entram na seleção depende das suas configurações de enterramento.

O número indica a posição do modelo de cartão dentro do tipo de nota. Se o cartão serve para reconhecimento ou produção depende de como você montou os modelos. Confira as perguntas antes de presumir que a ordenação por tipo vai colocar primeiro todas as perguntas no sentido direto.

## Confira as posições no navegador antes de mudá-las

Abra o **Navegador** (**Browse**), escolha o modo **Cartões** (**Cards**) e pesquise na árvore do seu baralho. Para o exemplo, use esta busca.

```text
deck:OrderLab is:new
```

No menu dos cabeçalhos da tabela, exiba as colunas **Pergunta** (**Question**), **Cartão** (**Card**), **Baralho** (**Deck**), **Vencimento** (**Due**) e **Criado** (**Created**). Para um cartão novo, **Vencimento** mostra a posição na fila e **Criado** mostra quando a nota foi criada. O **Campo de ordenação** (**Sort Field**) exibe o campo da nota escolhido para ordenar a lista. Ordenar por uma coluna só muda a exibição da tabela. As posições armazenadas e a opção de seleção usada no estudo são independentes dessa ordenação. Veja a [documentação das colunas do navegador no manual do Anki](https://docs.ankiweb.net/manual/browsing#columns) (em inglês).

A busca `is:new` pode incluir cartões novos suspensos ou enterrados. Nesses casos, os valores em **Vencimento** aparecem entre colchetes. Para excluir esses cartões e os que estiverem em baralhos filtrados, use uma busca mais restrita.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

O manual do Anki descreve as [buscas por estado do cartão](https://docs.ankiweb.net/manual/searching#card-state) e as [buscas por baralho](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes), em inglês. Se o nome do baralho tiver espaços, coloque-o entre aspas, como em `deck:"My Deck"`. O resultado mostra os candidatos. Os limites e o enterramento automático de cartões irmãos ainda podem reduzir o que entra na fila de hoje. O [guia sobre enterrar e suspender cartões](/blog/anki-bury-vs-suspend/) (em inglês) explica por que esses cartões ficam indisponíveis.

Se as posições já refletem a ordem que você quer, deixe-as como estão. Se precisar mudá-las, anote as posições antigas, selecione um pequeno grupo com os cartões novos que quer alterar e use **Cartões → Reposicionar** (**Cards → Reposition**). Confira a janela antes de confirmar. A opção **Deslocar a posição dos cartões existentes** (**Shift position of existing cards**) também pode mudar a posição de cartões que estão mais adiante na fila, fora da seleção. Com a opção desativada, as novas posições podem coincidir com as de outros cartões. Em caso de empate, a posição por si só não permite saber qual cartão vai aparecer primeiro. Consulte a [documentação da ação Reposicionar](https://docs.ankiweb.net/manual/browsing#cards) (em inglês).

Você pode mudar as opções de seleção e ordenação sem apagar o histórico de aprendizagem e revisão. Para este diagnóstico, concentre-se nas posições dos cartões novos e na ordem de exibição.

## Confira qual baralho você abre e quantas vagas restam hoje

No exemplo original, estudar `OrderLab::02 Second` diretamente restringe os candidatos a D, E e F. Com o limite de dois cartões, **Posição crescente** e **Ordem de seleção**, a sequência esperada é **D → E**. Mesmo que os limites dos baralhos ancestrais se apliquem, o baralho pai ainda tem as quatro vagas livres, o suficiente para esses dois cartões. Ao estudar o baralho pai com seleção por **Baralho** e limites de **4 / 3 / 2**, a sequência é **A → B → C → D**.

Uma sessão iniciada em `OrderLab` segue a ordem de exibição do próprio `OrderLab`, mesmo que você mude a de `02 Second`. O baralho escolhido define a ordem de exibição e o limite total. Os limites aplicáveis dos subbaralhos também contam. A opção **Limites a partir do topo** (**Limits start from top**) determina se os limites dos baralhos ancestrais se aplicam quando você estuda um subbaralho diretamente. Consulte as [regras dos subbaralhos](https://docs.ankiweb.net/manual/deck-options#subdecks) e a [opção que controla os limites dos ancestrais](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top) no manual do Anki, em inglês.

Confira também os limites de revisão. Por padrão, o limite de revisão também restringe os cartões novos. A opção **Cartões novos ignoram o limite de revisão** (**New cards ignore review limit**) muda esse comportamento. Essa opção e **Limites a partir do topo** valem para a coleção inteira. Anote como as duas estão configuradas antes de concluir que ainda há vagas para cartões novos hoje. Veja a [interface de limites diários da versão publicada](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte).

Use a **Prévia** (**Preview**) do navegador para conferir as perguntas sem responder aos cartões. Na próxima sessão normal de estudo, faça estas anotações.

| O que anotar | O que isso ajuda a esclarecer |
| --- | --- |
| Baralho em que você clicou para estudar, predefinição e opções de seleção e ordenação | Qual ordem de exibição controla a sessão? |
| Cartões esperados e suas posições armazenadas | O problema está na seleção ou na sequência? |
| Limites de cartões novos e de revisão, ajustes para o baralho ou só para hoje e quanto você já estudou no dia | Quantas vagas ainda restam? |
| Limites dos baralhos ancestrais e as duas opções de limite que valem para a coleção inteira | Que outros limites se aplicam? |
| Cartões enterrados, suspensos, em baralhos filtrados ou irmãos | Quais candidatos podem estar indisponíveis? |
| Sequência em que os cartões novos aparecem pela primeira vez, separada das repetições de aprendizagem | A sequência dos cartões novos bate com a previsão? |

Depois que você responde a um cartão novo, as repetições de aprendizagem podem se intercalar com os demais cartões da sessão. A opção **Ordem de cartões novos e revisões** (**New/Review Order**) coloca os cartões novos antes, depois ou entre as revisões. As opções de seleção e ordenação definem quais cartões novos entram e em que sequência. O Anki combina essas categorias depois de ordenar os cartões novos. Veja o [código de montagem da fila da versão publicada](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs).

Encerre a conferência quando o conjunto selecionado e a sequência prevista para a primeira apresentação explicarem o que você viu. Se ainda houver diferença, guarde as posições, as configurações, o baralho escolhido, a versão do Anki e a sequência observada para investigar a causa. Inclua os complementos relevantes. Se você quer fazer uma rodada extra de prática sobre um assunto, siga o [passo a passo para praticar com um baralho filtrado](/blog/anki-filtered-decks-without-rescheduling/) (em inglês).
