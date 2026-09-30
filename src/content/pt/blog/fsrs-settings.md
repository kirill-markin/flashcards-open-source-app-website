---
title: "Melhores configurações de FSRS no Anki em 2026: retenção, etapas e volume de revisões"
description: "Escolha configurações seguras de FSRS para retenção desejada, etapas de aprendizagem, otimização, reagendamento e volume de revisões no Anki 26.08 com FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "configurações FSRS"
  - "melhores configurações FSRS"
  - "configurações FSRS Anki"
  - "retenção desejada FSRS"
  - "etapas de aprendizagem FSRS"
  - "simulador FSRS"
  - "otimizar parâmetros FSRS"
  - "FSRS-6"
---

Aumentar a retenção desejada do Anki de 90% para 95% parece uma mudança pequena. Mas isso não significa um aumento de apenas 5% no trabalho. O FSRS precisa encurtar os intervalos à medida que a meta sobe, e uma coleção com um longo histórico de estudo pode gerar uma fila de revisões muito maior. Se você também ativar **Reschedule cards on change** (reagendar cartões ao alterar configurações), parte desse trabalho pode aparecer imediatamente.

Por isso, as melhores configurações de FSRS não são uma sequência de parâmetros para copiar. São uma série de decisões: definir um volume de estudo sustentável, escolher uma meta de retenção dentro desse limite, ajustar o modelo ao seu próprio histórico e manter as datas de revisão existentes, a menos que queira recalculá-las de propósito.

Os nomes dos controles e seu funcionamento correspondem à [versão 26.08 do Anki](https://github.com/ankitects/anki/releases/tag/26.08) e aos seus controles de FSRS-6. Se você precisa entender o modelo antes das configurações, leia [O que é FSRS?](/blog/what-is-fsrs/). Se ainda está escolhendo um agendador, comece por [FSRS ou SM-2](/blog/fsrs-vs-sm-2/).

> **Transparência:** sou Kirill Markin e desenvolvo o [Nibomo](/pt/features/). O Anki oferece ajuste personalizado de parâmetros e simuladores experimentais de volume de revisões que o Nibomo ainda não oferece. A comparação perto do fim deixa essas diferenças explícitas.

**Informações verificadas em:** 8 de setembro de 2026.

![Operador de eclusa testa o fluxo de água em uma maquete antes de alterar a eclusa em tamanho real](/blog/fsrs-settings-v2.png)

## Resposta curta: comece por aqui

Para a maioria dos usuários do Anki, estas são escolhas seguras para começar, não configurações universais:

| Configuração ou hábito | Escolha segura para começar | Motivo |
| --- | --- | --- |
| Retenção desejada | `0.90` | É o padrão do Anki e equilibra a capacidade de lembrar com o volume de revisões. |
| Parâmetros do FSRS | Use **Optimize Current Preset**; não cole nem edite os pesos manualmente | O otimizador ajusta o modelo ao seu histórico de revisões. |
| Frequência de otimização | No máximo uma vez por mês; a cada poucos meses costuma bastar | O Anki não recomenda otimizações frequentes. |
| Etapas de aprendizagem | Mantenha poucas etapas, que terminem no mesmo dia | Sequências longas de etapas atrasam o agendamento baseado no modelo. |
| Etapas de reaprendizagem | Use o mínimo necessário, com intervalos inferiores a um dia | O mesmo limite vale após errar um cartão em revisão. |
| Reagendar cartões ao alterar configurações | Desativado | As novas configurações podem entrar em vigor nas revisões futuras sem reconstruir a fila de hoje. |
| Intervalo máximo | Mantenha o padrão de 100 anos | Um teto menor faz os cartões já bem aprendidos voltarem com mais frequência. |
| Novos cartões por dia | Defina com base no volume de estudo que você consegue manter | Cada cartão novo gera trabalho de aprendizagem agora e revisões depois. |
| Novamente ou Difícil | Novamente significa que você não lembrou; Difícil significa que lembrou com dificuldade | Avaliações incorretas fornecem um histórico incorreto ao modelo. |

Se as revisões estão sob controle e sua configuração já se aproxima disso, talvez não haja nada a corrigir. Cuidar das configurações não é estudar.

## Separe três decisões

É comum misturar retenção desejada, parâmetros do FSRS e volume diário de estudo como se fossem uma coisa só. Eles controlam coisas diferentes:

- **Retenção desejada** é sua meta de retenção na hora da revisão. Você a escolhe de acordo com seus objetivos e o tempo disponível para estudar.
- **Parâmetros do FSRS** ajustam o modelo de memória ao histórico de revisões. O otimizador do Anki faz esse cálculo.
- **Limites de cartões novos e revisões** controlam quanto material entra no sistema e quantas revisões pendentes o Anki pode mostrar a cada dia.

Essa separação facilita muito a identificação de problemas. Uma fila grande não significa automaticamente que seus parâmetros estão errados. Um baralho importante não precisa necessariamente de uma predefinição de parâmetros separada. E diminuir a retenção desejada não resolve o problema de adicionar material em um ritmo que nunca foi sustentável.

## Escolha a retenção desejada pelo volume de trabalho, não pela ambição

A retenção desejada informa ao FSRS qual probabilidade de lembrar de um cartão você quer ter no momento da revisão agendada. Com `0.90`, o FSRS agenda as revisões com base em uma probabilidade prevista de 90% de lembrança. Essa é uma meta do modelo, não uma garantia de exatamente 90% de acertos em cada sessão ou prova.

Cada direção tem um custo:

- Aumente a retenção desejada, e os intervalos ficam menores enquanto as revisões aumentam.
- Diminua a retenção, e os intervalos ficam maiores enquanto os erros aumentam.
- Reduza demais, e o trabalho extra de reaprender o que esqueceu pode consumir parte do tempo que você esperava economizar.

O padrão do Anki é 90%. A [orientação sobre retenção desejada](https://docs.ankiweb.net/deck-options.html#desired-retention) alerta que o volume de trabalho cresce rapidamente à medida que a meta se aproxima de 100% e recomenda ficar abaixo de 97%. A [explicação oficial sobre retenção ideal](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) trata do outro extremo da curva: uma retenção muito baixa também pode ser ineficiente, porque cartões esquecidos exigem mais trabalho.

Comece em `0.90` e só mude depois de avaliar o volume de revisões. Uma meta maior pode fazer sentido para conteúdos em que esquecer tem um custo real. Uma meta menor pode fazer sentido quando as revisões estão tomando o lugar de estudos mais valiosos. Nenhuma dessas mudanças corrige cartões vagos, avaliações que não correspondem ao desempenho ou excesso de cartões novos.

### A retenção pode valer para um baralho; os parâmetros valem para a predefinição

No Anki 26.08, **Desired retention** (retenção desejada) pode ser definida em dois níveis: **Shared Preset** (predefinição compartilhada) e **This deck** (este baralho). Assim, você pode manter baralhos relacionados na mesma predefinição de parâmetros e dar a um baralho específico sua própria meta de retenção.

Use esse ajuste individual quando o custo de esquecer for diferente. Um baralho para uma prova de habilitação profissional pode justificar uma meta maior do que um baralho de consulta pouco prioritário, mesmo que ambos usem o mesmo modelo ajustado.

Os parâmetros do FSRS não passam a ser específicos do baralho quando você escolhe **This deck**. Por padrão, o Anki ajusta os parâmetros com base no histórico de revisão de todos os baralhos vinculados à predefinição atual. Se grupos de baralhos tiverem dificuldades subjetivas muito diferentes, o Anki permite ajustá-los separadamente por meio de predefinições distintas.

## Use Help Me Decide e o simulador para perguntas diferentes

O Anki 26.08 oferece dois controles experimentais separados:

- **Help Me Decide (Experimental)** mostra uma curva personalizada de retenção e volume de revisões. Use-o para responder: “Qual meta de retenção cabe no volume de revisões ou no tempo de estudo que consigo manter?”
- **FSRS Simulator (Experimental)** estima como uma configuração pode se comportar ao longo do tempo. Use-o para comparar mudanças de retenção, entrada de cartões novos, limites de revisões e intervalo máximo.

A [documentação do simulador FSRS](https://docs.ankiweb.net/deck-options.html#the-simulator) lista seus principais dados de entrada:

- dias a simular
- cartões novos adicionais a simular
- cartões novos por dia
- máximo de revisões por dia
- intervalo máximo
- retenção desejada e parâmetros do FSRS da predefinição

A simulação também usa os estados reais de memória dos cartões da predefinição. Isso a torna mais útil para uma coleção com longo histórico do que multiplicar o número de revisões de hoje por uma porcentagem genérica.

Simule três cenários antes de mudar a configuração em uso:

1. Sua retenção e entrada de cartões novos atuais.
2. A meta de retenção que você está considerando.
3. A mesma meta, com menos cartões novos por dia.

A terceira simulação testa uma alternativa comum: manter a meta de lembrança e reduzir a entrada de material novo. Se isso gerar uma previsão administrável, você não precisa aceitar mais esquecimentos só para aliviar a fila. O guia [Quantos flashcards novos por dia?](/blog/how-many-new-flashcards-per-day/) aprofunda essa decisão.

As duas ferramentas produzem estimativas. Dias sem estudar, cartões editados, material novo e mudanças nos hábitos de avaliação podem fazer o volume real se afastar do gráfico. Use a comparação para escolher uma direção, sem tratá-la como uma promessa de uma fila exata daqui a meses.

Guias antigos podem mencionar **Compute Minimum Recommended Retention**, ou CMRR. O Anki removeu esse recurso na versão 25.07. Ele não faz parte do processo atual de escolha da retenção desejada.

## Otimize os parâmetros do FSRS com seu próprio histórico

A retenção desejada expressa seu objetivo. Os parâmetros do FSRS descrevem como o modelo se ajusta às suas revisões.

No Anki 26.08, use **Optimize Current Preset** para ajustar os parâmetros da predefinição ativa. Por padrão, o Anki inclui o histórico de revisão de todos os baralhos que usam essa predefinição; você pode ajustar a busca se precisar restringir o conjunto usado no ajuste. **Optimize All Presets** atualiza todas as predefinições de uma vez.

Não digite pesos manualmente nem copie os que encontrou no Reddit, em um vídeo ou no baralho de outra pessoa. Os cartões, os momentos de revisão e os hábitos de avaliação dessa pessoa não correspondem ao seu histórico. Uma lista de [pesos do FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) não é uma estratégia de estudo transferível.

Só otimize novamente depois de acumular uma quantidade relevante de novas revisões. O manual do Anki diz que uma vez por mês basta, enquanto a orientação dentro do aplicativo na versão 26.08 diz que uma vez a cada poucos meses é suficiente. A conclusão prática é a mesma: não há motivo para otimizar toda semana, muito menos depois de cada sessão.

### Use a verificação de qualidade com a predefinição atual

Ative **Check health when optimizing (slow)** quando quiser que o Anki avalie a capacidade do FSRS de se adaptar ao histórico da predefinição atual. Essa verificação funciona com **Optimize Current Preset**, não com **Optimize All Presets**.

Se o resultado for ruim, examine os dados antes de mexer nos pesos. A [orientação do Anki sobre os parâmetros do FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) lista causas comuns: menos de algumas centenas de revisões, usar Difícil depois de errar e deixar de pressionar Novamente quando não consegue lembrar. Se houver pouco histórico útil, mantenha os valores padrão e otimize mais tarde, em vez de pegar os parâmetros de outro usuário.

## Novamente significa que você não lembrou; Difícil é um acerto

Esse hábito importa tanto quanto qualquer configuração.

Use **Novamente (Again)** quando não conseguir dar a resposta exigida ou responder errado. Use **Difícil (Hard)** apenas quando lembrar corretamente, mas com muito esforço ou hesitação. Bom (Good) e Fácil (Easy) também indicam acertos.

Pressionar Difícil para evitar o intervalo curto de Novamente registra um acerto depois de um erro. O FSRS passa a aprender com um evento incorreto. Escolha o botão que descreve seu desempenho ao tentar lembrar, sem se guiar pelo intervalo que gostaria de obter entre os exibidos acima dos botões.

Cartões ambíguos dificultam avaliações honestas. Se uma pergunta pede cinco fatos e você lembra de quatro, o problema de agendamento começou no editor. Divida ou reescreva o cartão. Para cartões que continuam gerando erros apesar de revisões repetidas, consulte [Como corrigir flashcards problemáticos](/blog/how-to-fix-leech-flashcards/).

## Mantenha as etapas de aprendizagem do FSRS curtas — ou deixe-as vazias de propósito

As etapas de aprendizagem e reaprendizagem controlam as repetições em intervalos curtos antes de o agendamento regular de longo prazo assumir o controle. Elas não são outra meta de retenção.

A orientação do Anki sobre FSRS recomenda dois limites:

- cada etapa deve ter menos de um dia e ser possível concluí-la no mesmo dia
- o número de repetições no mesmo dia deve ser pequeno

Sequências longas como `1m 10m 1d 3d` levam um hábito antigo do SM-2 para o FSRS. Etapas de um dia ou mais atrasam o agendamento baseado no modelo e podem gerar rótulos confusos nos botões, como Difícil mostrando um intervalo maior do que Bom.

Uma sequência curta como `1m 10m`, com uma etapa de reaprendizagem de `10m`, é um ponto de partida conservador quando cabe nas suas sessões. Mais repetições no mesmo dia não são automaticamente melhores.

O Anki 26.08 também permite deixar vazio o campo de etapas de aprendizagem ou de reaprendizagem. Com o FSRS ativado, o campo vazio deixa esse agendamento de curto prazo a cargo do FSRS. Isso é experimental, e o intervalo de Novamente pode ser de um dia ou mais. Mantenha etapas manuais curtas se precisar de um retorno previsível no mesmo dia; só esvazie um campo quando aceitar deliberadamente que o FSRS escolha esse intervalo.

## Deixe o reagendamento ao alterar configurações desativado para uma transição gradual

Com **Reschedule cards on change** desativado — o padrão —, ativar o FSRS ou mudar a retenção desejada ou os parâmetros não altera imediatamente as datas de revisão existentes. A nova configuração passa a valer conforme os cartões são revisados no futuro, e a fila muda aos poucos.

Salvar uma dessas mudanças do FSRS com a opção ativada recalcula as datas de revisão imediatamente. Dependendo da nova meta e dos estados dos cartões, muitos podem ficar pendentes ao mesmo tempo. O Anki também adiciona registros de revisão aos cartões reagendados, aumentando o tamanho da coleção.

Essa opção só é útil quando você realmente quer um recálculo retroativo. Para uma coleção com longo histórico:

1. Crie um backup atualizado e confirme que sabe como desfazer a alteração ou restaurar o backup.
2. Execute o simulador com as configurações propostas.
3. Escolha uma mudança de configuração; não combine vários experimentos.
4. Ao salvar, ative o reagendamento apenas se quiser recalcular imediatamente as datas de revisão e conseguir lidar com o resultado.

O Anki recomenda explicitamente fazer um backup ao migrar do SM-2 com reagendamento. O [guia de backup de flashcards](/blog/how-to-back-up-flashcards/) explica por que saber restaurar os dados importa tanto quanto ter o arquivo de backup.

## Mantenha um intervalo máximo amplo

O intervalo máximo padrão do Anki é de 100 anos. Isso parece estranho até você lembrar que se trata de um teto, não de uma promessa de que todo cartão bem aprendido vai sumir por um século.

Diminuir esse teto faz cartões bem conhecidos voltarem mais cedo e aumenta o volume de trabalho. Ao atingir esse teto, Difícil, Bom e Fácil podem mostrar o mesmo intervalo, porque nenhum pode ultrapassar o máximo.

Um intervalo máximo menor pode ser razoável quando uma prova define um prazo concreto, o conteúdo muda com frequência ou uma regra profissional exige contato repetido com o material independentemente da probabilidade prevista de lembrar. Combine esse teto com o calendário e o simulador, em vez de escolher um número pequeno por ansiedade. [Como estudar para uma prova com FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) trata desse caso específico.

Para aprendizagem comum de longo prazo, deixe o teto amplo. A retenção desejada já controla quando a previsão de lembrança deve levar a uma revisão.

## A entrada de cartões novos faz parte da decisão sobre o volume de trabalho

O FSRS pode distribuir revisões; ele não consegue tornar sustentável uma entrada ilimitada de material. Cada cartão novo gera trabalho de aprendizagem agora e de revisão depois.

Quando a fila estiver pesada demais, verifique estes pontos antes de diminuir a retenção desejada:

- cartões novos por dia
- grandes importações ou lotes de cartões gerados
- um limite máximo de revisões que continua ocultando trabalho pendente
- cartões problemáticos e perguntas vagas consumindo tentativas repetidas
- dias sem revisar

Use **Additional new cards to simulate** quando souber que um baralho vai crescer. Uma previsão baseada apenas na coleção de hoje não representará o volume de trabalho depois de uma grande importação.

Se o resultado for alto demais, reduza a entrada e simule novamente. Isso preserva a meta de lembrança sem pedir ao agendador que tolere mais esquecimentos.

## Anki e Nibomo oferecem controles diferentes de FSRS

Os dois produtos usam FSRS-6, mas as configurações de FSRS do Anki não têm correspondência direta com as do Nibomo.

| Recurso | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Retenção desejada | **Shared Preset** ou **This deck** | Configurável por espaço de trabalho; padrão `0.90` |
| Parâmetros do FSRS | **Optimize Current Preset** ou **Optimize All Presets** com base no histórico de revisões | Os pesos padrão oficiais do FSRS-6 são fixos e não podem ser configurados pelo usuário na v1 |
| Etapas de aprendizagem | Configuráveis; o agendamento pelo FSRS com campo vazio é experimental | Configuráveis por espaço de trabalho; padrão `1m 10m` |
| Etapas de reaprendizagem | Configuráveis; o agendamento pelo FSRS com campo vazio é experimental | Configuráveis por espaço de trabalho; padrão `10m` |
| Intervalo máximo | Padrão de 100 anos | Padrão de 36.500 dias, também 100 anos |
| Mudanças de configuração | Revisões futuras por padrão; reagendamento retroativo opcional | Apenas revisões futuras; as datas existentes não são recalculadas |
| Ferramentas para estimar o volume de revisões | **Help Me Decide (Experimental)** e **FSRS Simulator (Experimental)** | Nenhum simulador equivalente na v1 |

O Nibomo usa as avaliações padrão Novamente, Difícil, Bom e Fácil e mantém o estado de memória do FSRS para cada cartão. Seus agendadores no backend, no iOS e no Android são implementações independentes mantidas com o mesmo comportamento; o fluxo de revisão na web reutiliza o agendador do backend, em vez de adicionar uma quarta cópia.

Esses limites e valores padrão estão documentados na [especificação pública de agendamento FSRS do Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). A escolha é direta: o Nibomo oferece uma configuração prática de FSRS-6 por espaço de trabalho, enquanto o Anki permite escolher com mais precisão a quais baralhos cada configuração se aplica, além de oferecer ajuste personalizado e simulação. Se esses controles forem essenciais, o Anki atende melhor.

## Um processo mais seguro para uma coleção com longo histórico

Se você já tem meses ou anos de histórico de revisões, siga esta ordem:

1. **Corrija o uso das avaliações.** Novamente é erro; Difícil é acerto com dificuldade.
2. **Otimize a predefinição atual.** Ajuste o modelo ao seu histórico em vez de editar ou copiar pesos.
3. **Execute a verificação de qualidade se necessário.** Trate um histórico escasso ou inconsistente como um problema dos dados.
4. **Use Help Me Decide.** Escolha uma faixa de retenção com base no volume de revisões ou no tempo de estudo que consegue manter.
5. **Execute o simulador.** Compare a configuração atual, a meta proposta e uma entrada menor de cartões novos.
6. **Mude uma configuração de cada vez.** Ajuste primeiro a retenção ou a entrada de cartões e depois observe a fila real.
7. **Mantenha as etapas curtas.** Remova sequências de aprendizagem e reaprendizagem com etapas de um dia ou mais; use campos vazios apenas como experimento.
8. **Deixe o intervalo máximo amplo.** Encurte-o apenas por um prazo ou requisito definido.
9. **Mantenha o reagendamento desativado.** Se precisar de um recálculo imediato, faça um backup antes e se prepare para a fila resultante.

Essa sequência permite desfazer mudanças no agendamento de uma coleção com longo histórico pelo maior tempo possível. Também evita que três problemas diferentes — o ajuste do modelo, a meta de lembrança e a entrada de material novo — virem um único quebra-cabeça de configurações.

## Perguntas frequentes sobre as melhores configurações de FSRS

### 90% é a melhor retenção desejada para o FSRS?

É o ponto de partida geral mais seguro porque é o padrão do Anki e evita a parte mais acentuada da curva de volume de trabalho em retenções altas. O melhor valor para um baralho depende do custo de esquecer e do volume de trabalho que você consegue manter. Consulte **Help Me Decide (Experimental)** antes de mudar.

### Devo definir a retenção desejada em 95%?

Só depois de avaliar as revisões ou os minutos adicionais. Um baralho bem feito com conteúdo importante pode justificar 95%; uma coleção grande para estudo casual pode ficar desnecessariamente pesada. Não ative o reagendamento retroativo ao mesmo tempo, a menos que queira deliberadamente recalcular as datas de revisão de imediato.

### Com que frequência devo otimizar os parâmetros do FSRS?

Uma vez por mês já é frequente o suficiente, e a orientação dentro do Anki 26.08 diz que uma vez a cada poucos meses basta. Otimize depois de acumular uma quantidade relevante de histórico novo, não em uma rotina diária ou semanal.

### As etapas de aprendizagem do FSRS devem ficar vazias?

Deixar vazias as etapas de aprendizagem ou reaprendizagem permite que o Anki 26.08 delegue o agendamento de curto prazo correspondente ao FSRS. O recurso é experimental, e um cartão avaliado como Novamente pode voltar só dali a um dia ou mais. Poucas etapas no mesmo dia continuam sendo a escolha conservadora.

### Mudar as configurações do FSRS reagenda os cartões existentes no Anki?

Não por padrão. Com **Reschedule cards on change** desativado, as novas configurações afetam as revisões futuras sem reconstruir a fila imediatamente. Ativá-lo muda as datas de revisão e pode deixar muitos cartões pendentes, então faça um backup antes.

### O CMRR ainda faz parte do Anki?

Não. O Anki removeu Compute Minimum Recommended Retention na versão 25.07. No Anki 26.08, use **Help Me Decide (Experimental)** e **FSRS Simulator (Experimental)** para comparar a retenção com o volume estimado de trabalho.

### O Nibomo usa as mesmas configurações do Anki?

Ele usa FSRS-6 e oferece retenção desejada, etapas de aprendizagem, etapas de reaprendizagem, intervalo máximo e fuzz por espaço de trabalho. Não copia todo o modelo de configurações do Anki: os pesos são fixos na v1, as mudanças só valem dali em diante e não há otimização personalizada de parâmetros nem simulador de volume de revisões.

## Defina o volume de trabalho antes da porcentagem

Boas configurações de FSRS fazem a fila de revisões servir a um plano real de estudo. Comece em 90%, estime o trabalho, controle a entrada de cartões novos e só aumente a retenção quando lembrar mais compensar as revisões adicionais. Mantenha as etapas curtas, o intervalo máximo amplo e os dados das avaliações fiéis ao que aconteceu.

Depois, saia da tela de configurações. O agendador precisa mais de revisões consistentes do que de outra noite de ajustes.
