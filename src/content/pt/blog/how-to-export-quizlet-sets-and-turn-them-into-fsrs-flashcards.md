---
title: "Como exportar conjuntos do Quizlet em 2026 (e por que o Export some)"
description: "Exporte um conjunto do Quizlet com os passos atuais do site. Se o Export some, veja se você criou o conjunto, fez uma cópia ou está usando o app do celular."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "como exportar Quizlet"
  - "como exportar flashcards do Quizlet"
  - "botão Export do Quizlet não aparece"
  - "baixar flashcards do Quizlet"
  - "Quizlet para CSV"
  - "Quizlet para Anki"
---

Se o botão **Export** não aparece no Quizlet, comece por duas checagens: foi você quem criou o conjunto original, e você está usando o site do Quizlet? O Quizlet libera a exportação só para quem criou o conjunto, e o recurso funciona apenas no site. Um conjunto copiado não pode ser exportado, mesmo que a cópia já esteja na sua biblioteca.

Se você cumpre esses requisitos, a exportação em si é rápida: abra o conjunto no site, escolha **More → Export**, organize os termos e as definições e selecione **Copy text**. O Quizlet não baixa um arquivo com o baralho. Ele coloca o texto na sua área de transferência, sem as imagens.

**Fatos verificados:** 30 de agosto de 2026, com base nas [instruções oficiais de exportação do Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Uma arquivista confere as fichas de propriedade antes de entregar cartões de texto emparelhados, com duas pastas de documentos prontas e as fotografias deixadas atrás do vidro](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Primeiro: o botão Export deveria estar aí?

Faça essa checagem antes de tentar baixar os cartões do Quizlet por outro caminho:

| Sua situação | O Export deveria aparecer? | Próximo passo |
| --- | --- | --- |
| Você criou o conjunto original e o abriu no site do Quizlet | Sim, segundo a página de ajuda do Quizlet | Siga os passos abaixo |
| Você está usando o app de iOS ou Android | Não; a exportação existe só no site | Abra o Quizlet em um navegador e entre na conta |
| Você copiou o conjunto de outra pessoa | Não; o Quizlet diz que conjuntos copiados não podem ser exportados | Não espere que a cópia libere o Export |
| Você consegue ver o conjunto, mas não foi quem criou | Não; ter acesso de leitura não é o mesmo que ser o criador | Peça um arquivo de origem para quem criou, ou refaça o conjunto com material que você pode usar |

Se você criou o conjunto original e mesmo assim o botão de exportação do Quizlet não aparece, confirme que entrou na conta dona do conjunto e que abriu o original, não uma cópia. A página de ajuda do Quizlet não documenta uma segunda rota de exportação. Nesse ponto, fale com o suporte do Quizlet em vez de confiar em um downloader que promete contornar a restrição.

## Como exportar os cartões do Quizlet pelo site

Para um conjunto criado por você:

1. Entre na sua conta do Quizlet pelo site.
2. Selecione **Your library**.
3. Selecione **Flashcard sets**.
4. Abra o conjunto que você quer exportar.
5. Abra o menu **More**.
6. Selecione **Export**.
7. Escolha como organizar os termos e as definições.
8. Selecione **Copy text**.
9. Cole o resultado em um editor de texto simples.

Esse é o fluxo atual completo. Não existe um botão final de “download”.

Para cartões comuns de frente e verso, recomendo uma tabulação entre o termo e a definição e uma quebra de linha entre os cartões. Essa escolha de separador é um conselho prático, não uma exigência do Quizlet. Tabulações costumam ser mais fáceis de conferir do que vírgulas, porque vírgulas aparecem o tempo todo dentro de definições normais.

Um arquivo limpo com dois cartões ficaria assim, com uma tabulação no meio de cada linha:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## O que a exportação do Quizlet preserva

O Quizlet descreve esse recurso de forma bem estrita: ele exporta os **termos e as definições** de um conjunto criado pela própria pessoa. E também diz que as imagens não podem ser exportadas.

O resultado colado é o limite mais seguro para trabalhar. Se o texto, o separador ou a quebra de linha aparecem ali, você consegue preservá-los em um arquivo. A página de ajuda do Quizlet não promete levar junto pastas, modos de estudo, formatação, nível de domínio do conteúdo, histórico de revisões nem agendamento.

Ou seja: isso é uma cópia do texto dos cartões, não um backup restaurável do Quizlet. A mesma diferença importa se você chegou aqui buscando “baixar flashcards do Quizlet”: o Quizlet copia o texto para a área de transferência, e o arquivo quem cria é você.

## Salve uma cópia bruta em UTF-8 antes de limpar qualquer coisa

Deixe o processo reversível:

1. Cole a exportação em um editor de texto simples.
2. Salve o arquivo em UTF-8, por exemplo como `biology-quizlet-raw.txt`.
3. Duplique-o como `biology-quizlet-working.txt`.
4. Não mexa no arquivo bruto e edite só a cópia de trabalho.

Antes de importar o arquivo de trabalho, confira estes pontos com o conjunto do Quizlet ainda aberto:

- Ative a exibição de caracteres invisíveis e confirme onde ficam as tabulações e as quebras de linha.
- Procure o separador que você escolheu dentro dos termos e das definições. Uma tabulação a mais pode criar um terceiro campo inesperado.
- Procure definições com quebras de linha próprias; elas podem ser confundidas com cartões extras.
- Compare o começo, o meio e o fim do arquivo com o Quizlet, incluindo as definições mais longas.
- Feche o arquivo, abra de novo e confira acentos, alfabetos não latinos, símbolos e aspas tipográficas.
- Marque os campos vazios, os duplicados e as linhas irregulares em vez de adivinhar em silêncio como consertá-los.

Só compare a contagem de linhas com a de cartões quando cada cartão ocupar exatamente uma linha. Definições de várias linhas quebram esse atalho.

Guarde o arquivo bruto mesmo depois que a cópia de trabalho parecer boa. Se uma importação deslocar um campo ou perder conteúdo, você ainda terá uma referência intacta.

## Quizlet para CSV: monte o arquivo com cuidado

Renomear um arquivo `.txt` para `.csv` não converte nada. CSV precisa de separadores consistentes e das aspas certas em volta de vírgulas, aspas e conteúdo de várias linhas.

Para montar com segurança um arquivo CSV a partir do Quizlet:

1. Mantenha intacto o backup com o texto bruto.
2. Abra a cópia de trabalho em uma planilha e selecione exatamente o separador usado no Quizlet.
3. Confirme que cada registro esperado tem duas colunas: termo e definição.
4. Confira as aspas, os separadores e as definições de várias linhas.
5. Exporte como CSV em UTF-8.
6. Abra o CSV de novo em uma visualização limpa antes de usá-lo em outro lugar.

Uma planilha consegue adicionar as aspas que o CSV exige. Uma substituição geral de tabulação por vírgula não dá conta disso de forma confiável.

## Leve o texto para o Nibomo como rascunho para revisar

O [Nibomo](/features/) não tem um importador direto do Quizlet. No app hospedado, o caminho para TXT ou CSV é criar rascunhos com ajuda da IA a partir de um arquivo anexado. Não é uma migração sem perdas.

1. Mantenha o arquivo bruto do Quizlet fora do app.
2. Anexe o TXT limpo ou o CSV que você preparou com cuidado no chat de IA do Nibomo.
3. Diga ao assistente qual separador e quais campos o arquivo usa.
4. Peça uma prévia pequena e deixe claro que ele ainda não deve salvar nenhum cartão.
5. Compare com o arquivo de trabalho a quantidade de cartões proposta, as frentes e os versos.
6. Salve só os cartões que você revisou.

O [guia de primeiros passos](/docs/getting-started/) documenta o chat de IA com dados do espaço de trabalho e arquivos anexados. Um prompt cauteloso poderia ser:

> Leia este arquivo como pares de termo e definição separados por tabulação. Ainda não salve nenhum cartão. Prepare uma amostra pequena, preserve a redação original e os caracteres não latinos, e liste separadamente as linhas malformadas, vazias ou ambíguas em vez de adivinhar.

Isso pode ajudar quando os cartões antigos também precisam de uma limpeza. Mas não prova que cada linha foi transferida corretamente. Revise você mesmo os cartões que a IA propôs e teste um baralho pequeno antes de criar o resto.

Cartões criados no Nibomo começam com um histórico de aprendizado novo. O texto do Quizlet não traz os eventos de revisão nem o estado de agendamento necessários para continuar a fila antiga.

> **Aviso de transparência:** eu desenvolvo o Nibomo. Este fluxo descreve os limites atuais do produto; não é uma promessa de compatibilidade total com o Quizlet.

## Quizlet para Anki: use o importador de texto do Anki

O [manual oficial de importação de arquivos de texto do Anki](https://docs.ankiweb.net/importing/text-files.html) aceita arquivos de texto simples em UTF-8 com os campos separados por vírgulas, ponto e vírgula ou tabulações.

Para uma cópia de trabalho separada por tabulação:

1. Abra o fluxo de importação do Anki e selecione o arquivo de texto em UTF-8.
2. Confirme na prévia que o Anki detectou a tabulação; se não detectou, mude a opção de separador.
3. Selecione o tipo de nota e o baralho de destino.
4. Aponte o primeiro campo para a frente e o segundo para o verso.
5. Confira na prévia se há campos vazios, deslocados ou a mais.
6. Revise a opção de duplicados e atualização antes de importar.

O Anki define a quantidade esperada de campos pela primeira linha que não é comentário. Nos registros seguintes, os campos que faltam ficam vazios e os que sobram não são importados. Por isso a prévia importa tanto, ainda mais quando um único separador fora de lugar pode mudar a forma de uma linha.

As definições de várias linhas também exigem uma escolha explícita. O Anki aceita campos entre aspas que ocupam várias linhas. Ele também pode interpretar `<br>` como quebra de linha quando **Allow HTML in fields** está ativado. Use um método só e confira uma amostra copiada antes de importar o arquivo inteiro.

Por padrão, o Anki consegue encontrar uma nota existente do mesmo tipo pelo primeiro campo e atualizar os outros campos. As opções de importação também permitem ignorar duplicados ou adicioná-los como notas novas. Atualizar uma nota que já existe no Anki pode preservar o agendamento dela no Anki, mas nenhum agendamento do Quizlet vem junto no arquivo de texto.

## Mantenha o original até o baralho novo funcionar

A rota oficial do Quizlet termina em **Copy text**, para conjuntos do próprio criador abertos no site. Scripts de scraping, endpoints privados adivinhados e downloaders de terceiros são caminhos separados e sem suporte. Eles não transformam um conjunto copiado ou de só leitura em uma exportação oficial.

Se você precisa de automação recorrente em vez de uma cópia pontual, vale entender o estado atual da API do Quizlet e até onde vai o suporte oficial. Se o conjunto não é seu, peça um arquivo de origem para quem criou ou refaça um baralho menor a partir das suas próprias anotações. Aproveite a reconstrução para escrever cartões melhores, em vez de copiar cada linha antiga.

Não apague o conjunto original do Quizlet até que:

- o arquivo bruto em UTF-8 esteja salvo em algum lugar com backup;
- o arquivo de trabalho abra de novo com os caracteres e separadores esperados;
- os campos de várias linhas, os vazios, os duplicados e as linhas irregulares estejam conferidos;
- qualquer contexto visual importante tenha sido refeito a partir de uma fonte que você pode usar; e
- um teste pequeno tenha produzido as frentes e os versos corretos no destino.

Guarde o arquivo de texto bruto depois disso. Ele é a referência independente mais fácil quando uma importação posterior parece errada. Se você ainda está decidindo para onde os cartões devem ir, vale comparar antes as alternativas ao Quizlet.
