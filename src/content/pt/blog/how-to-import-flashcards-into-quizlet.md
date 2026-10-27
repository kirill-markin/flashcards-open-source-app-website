---
title: "Como importar flashcards no Quizlet a partir do Excel, Google Planilhas ou texto"
description: "Importe uma lista de palavras em duas colunas para o Quizlet, use tabulações e novas linhas e corrija definições divididas, cartões extras e problemas de CSV antes de publicar."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "como importar flashcards para o Quizlet"
  - "formato de importação do Quizlet"
  - "importar do Excel para o Quizlet"
  - "Google Planilhas para o Quizlet"
  - "importar no Quizlet com tabulação"
---

“Red, green, blue” parece uma resposta comum de flashcard. Mas, se você usar vírgulas para separar um termo de sua definição, essas mesmas vírgulas deixam a linha ambígua. Alguns sinais de pontuação podem fazer uma lista já pronta precisar de correções.

Para importar flashcards no Quizlet a partir do Excel, do Google Planilhas ou de um texto, comece com duas colunas: uma para os termos e outra para as definições. Copie os dados, cole no formulário de importação do site e escolha tabulações entre os campos e novas linhas entre os cartões. Faça primeiro um teste com quatro linhas para conferir cada par antes de transferir a lista inteira.

![Um ceramista organiza xícaras de cerâmica com seus respectivos pires em fileiras separadas antes de colocá-los em uma prateleira](/blog/how-to-import-flashcards-into-quizlet.png)

## Onde encontrar o formulário de importação do Quizlet

O Quizlet documenta a importação pelo site, com vírgulas, tabulações ou traços entre os campos e ponto e vírgula ou novas linhas entre os cartões. As [instruções oficiais de importação](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) indicam esta sequência:

1. Entre na sua conta e escolha **Criar → Lista de cartões (Create → Flashcard set)**.
2. Digite um título, selecione **Importar (Import)** e cole o texto.
3. Ajuste os separadores de acordo com os dados. Use **Tabulação (Tab)** e **Nova linha (New line)** nos exemplos deste artigo.
4. Selecione **Importar (Import)** e escolha os idiomas dos termos e das definições.
5. Revise os cartões antes de selecionar **Criar (Create)** para salvar e publicar a lista.

As instruções foram conferidas em 15 de setembro de 2026. Os exemplos abaixo explicam como preparar e verificar o texto; eles não descrevem um teste realizado após entrar na conta.

## Comece com um pequeno intervalo da planilha

No Excel ou no Google Planilhas, coloque um termo e sua definição em cada linha. Veja um teste com quatro cartões:

| Termo | Definição |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Copie apenas as quatro linhas de dados das duas colunas. Se os cabeçalhos estiverem na linha 1, selecione **A2:B5**. Deixe os cabeçalhos fora do intervalo copiado.

O resultado esperado são quatro cartões, com termos em espanhol e definições em inglês. O último cartão deve manter “colores primarios de la luz” inteiro de um lado e “red, green, blue” inteiro do outro. As vírgulas fazem parte da resposta.

Depois de entender esse exemplo, prepare sua própria planilha. Trabalhe em uma cópia para manter o original como referência. Remova as linhas em branco e deixe anotações e colunas extras fora da seleção. Preencha qualquer termo ou definição que estiver faltando antes de copiar.

Mantenha as duas colunas juntas ao ordenar os dados. Ordenar apenas os termos separaria cada um de sua resposta, e uma importação com a quantidade correta de cartões ainda poderia conter pares errados.

## O formato de texto simples usa tabulações de verdade

As mesmas quatro linhas ficam assim em um texto separado por tabulações. Cada intervalo entre um termo e sua definição contém um caractere de tabulação real:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Uma tabulação é um caractere específico. Vários espaços podem parecer iguais, mas não funcionam como separador de tabulação. Digitar os caracteres `\t` também não insere uma tabulação. Se isso for difícil no seu editor de texto, coloque os pares em duas colunas de uma planilha e copie as células.

Cada cartão deve ocupar uma única linha no texto. Uma definição longa pode aparecer em uma segunda linha na tela porque a janela é estreita; isso não insere uma quebra de linha no conteúdo. Já uma quebra de linha inserida dentro de uma célula da planilha faz isso. Remova essas quebras internas antes de usar novas linhas como separadores de cartões.

Remova também qualquer tabulação dentro de um termo ou de uma definição. Nesse formato, as tabulações devem aparecer apenas entre os dois campos.

## Se a lista estiver em um arquivo CSV

Abra o CSV em uma planilha antes de preparar a importação. Um registro CSV como este tem dois campos quando interpretado de acordo com as regras de uso das aspas:

```text
"colores primarios de la luz","red, green, blue"
```

A resposta entre aspas contém vírgulas. Um campo de texto que divide os dados pelas vírgulas não é necessariamente um leitor de CSV, então não conte com as aspas para preservar a resposta nesse campo.

No Excel ou no Google Planilhas, confira se o registro ocupa exatamente duas células. Depois, copie as células para obter dados separados por tabulação. Se a resposta tiver se espalhado por colunas extras, corrija primeiro as configurações de importação de CSV da planilha. Copiar a linha com problemas leva os erros para a próxima etapa.

Confira também os valores que a planilha pode reinterpretar. Se `0012` for um código que você precisa estudar, transformá-lo em `12` altera o cartão. Compare identificadores, datas, aspas e palavras acentuadas com o arquivo original antes de copiar o intervalo.

## Quando os cartões não correspondem às linhas

Use o teste para encontrar a primeira diferença. Altere uma coisa de cada vez e compare o resultado com as mesmas quatro linhas de origem.

| Sintoma | Provável problema de separação | O que mudar |
| --- | --- | --- |
| Uma resposta se divide nas vírgulas | Vírgula selecionada como separador entre os campos | Prepare duas colunas e selecione Tabulação |
| “well-being” se divide no meio do termo | Traço selecionado como separador entre os campos | Preserve o hífen e separe os campos com uma tabulação |
| Uma resposta vira vários cartões | Quebras de linha dentro dos dados de origem | Coloque a resposta em uma única linha no texto |
| “Term” e “Definition” aparecem como um cartão | A linha de cabeçalho foi copiada | Selecione apenas as linhas de dados |
| Os dois campos ficam do mesmo lado | Espaços no lugar de uma tabulação | Copie um intervalo de duas colunas de uma planilha |

Por exemplo, uma resposta com “first stage” e “second stage” em linhas separadas poderia virar `first stage; second stage`. Isso mantém as duas partes na mesma linha. Mantenha **Nova linha (New line)** como separador entre os cartões ao usar ponto e vírgula dentro de uma resposta.

Se as duas etapas merecerem perguntas separadas, escreva dois pares completos. O [guia para criar flashcards melhores (em inglês)](/blog/how-to-make-better-flashcards/) pode ajudar nessa decisão.

## Confira o resultado antes de publicar

Confira os quatro cartões do teste. Para a lista completa, compare os cartões importados com os dados de origem já corrigidos:

- O total corresponde ao número de linhas de dados completas?
- O primeiro e o último par correspondem ao original, incluindo as respostas completas?
- A pontuação, os acentos e os códigos foram preservados?
- Há lados vazios, cabeçalhos, duplicatas ou respostas associadas aos termos errados?
- Todas as respostas cujas quebras de linha você editou continuam fazendo sentido?

Leia alguns pares comuns, além daqueles que parecem suspeitos. Só conferir a quantidade não revela uma resposta errada associada a um termo válido. Se algo estiver errado, corrija os dados de origem antes de repetir a importação. Guarde o arquivo corrigido para ajustes futuros.

## Pares já escritos ou cartões gerados por IA?

O Quizlet também descreve a criação de cartões com ajuda de IA a partir de material fornecido em sua [visão geral da criação com IA](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). O texto gerado precisa de uma revisão de conteúdo própria. Para uma lista pronta de termos e definições, o processo de importação estruturada permite conferir a transferência em relação aos pares que você já escreveu.

Está começando com parágrafos? [Transforme suas anotações em flashcards (em inglês)](/blog/turn-notes-into-flashcards/) antes de preparar o texto para importação. Quer transferir uma lista no sentido contrário? Use o [guia de exportação do Quizlet](/pt/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
