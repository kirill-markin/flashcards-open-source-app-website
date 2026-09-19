---
title: "Alternativas ao Anki em 2026: o que você mantém, perde e ganha ao trocar"
description: "Compare sete alternativas ao Anki por fidelidade da migração, uso offline, agendamento, preço, acesso ao código e auto-hospedagem — e veja quando ficar no Anki é mais seguro."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternativas ao Anki"
  - "alternativa ao Anki"
  - "apps como o Anki"
  - "alternativa ao Anki de código aberto"
  - "alternativas gratuitas ao Anki"
  - "alternativa ao Anki para iOS"
  - "migrar do Anki"
---

Uma importação do Anki pode terminar sem nenhum erro e ainda assim apagar o motivo pelo qual o seu baralho funciona. O texto chega. Os cartões abrem. Aí você percebe que o CSS sumiu, que um campo de áudio está vazio, que todos os cartões estão como novos ou que uma nota não gera mais as direções de cartão que você esperava.

Essa é a parte cara de comparar alternativas ao Anki. Um editor mais limpo ou um plano mais barato dá para ver antes de trocar. O comportamento dos modelos, o histórico de revisões, as datas de vencimento, os complementos, a mídia offline e o caminho de volta só aparecem depois que o estrago já aconteceu.

Esta comparação começa nesse limite. Ela cobre sete apps como o Anki, o que cada um consegue trazer de uma coleção existente, o que muda depois da importação e quando ficar no Anki é o resultado mais seguro.

> **Aviso de interesse:** Sou Kirill Markin e desenvolvo o [Nibomo](https://nibomo.com/), um dos produtos abaixo. Incluí ele pelo código aberto, pela auto-hospedagem e pelos fluxos com agentes. Ele não é o vencedor por padrão: não tem importador direto de `.apkg`, sua migração do Anki perde informação e manter a stack auto-hospedada é um trabalho de infraestrutura de verdade.

**Dados verificados:** 28 de agosto de 2026. Os preços são os valores públicos dos EUA ou os preços locais informados disponíveis nessa data. Impostos, região, ofertas educacionais e a cobrança pelas lojas de apps podem mudar o valor.

![Um relojoeiro verifica se o mecanismo de um relógio de bolso antigo cabe em outra caixa](/blog/best-anki-alternatives.png)

## A resposta curta antes de mover qualquer coisa

Fique no Anki por padrão. Troque só quando outro app resolver um problema recorrente que valha o custo da migração.

Três produtos aceitam pacotes do Anki com dados de aprendizado, mas cada promessa para em um ponto diferente:

- **Mnemosyne** documenta a importação completa do Anki, com tipos de cartão personalizados e dados de aprendizado. É a opção mais próxima de um fluxo de trabalho tradicional de desktop, local e de código aberto, embora não tenha app nativo para iOS.
- **Mochi** importa arquivos `.apkg` com histórico de revisões. Converte HTML em Markdown, remove CSS e JavaScript e substitui os quatro botões de revisão do Anki por Remembered ou Forgot.
- **RemNote** importa arquivos `.apkg`, a maioria dos tipos de nota e o histórico de revisões. O guia atual também diz que os cartões importados entram em uma fila separada, a **Need to Learn**, então não leia “histórico de revisões importado” como “a fila do Anki de hoje copiada igualzinha”.

Os outros quatro são reconstruções de conteúdo, não migrações de coleção:

- **Quizlet** é útil para conjuntos públicos, turmas, jogos e prática guiada.
- **Brainscape** dá a um grupo um ciclo de confiança mais simples, de 1 a 5.
- **SuperMemo** é uma mudança para o método proprietário e o catálogo de cursos dele.
- **Nibomo** entrega clientes web e nativos com licença MIT, backend auto-hospedado, API e acesso por MCP. O fluxo revisado a partir de TXT ou CSV não preserva o estado de aprendizado do Anki.

Se os seus cartões dependem da renderização exata, de complementos ou da fila de revisão atual, ficar no Anki não é indecisão. É a resposta.

## Primeiro, conte o que existe de verdade dentro da sua coleção do Anki

Um “baralho” não é um objeto portátil único. Antes de comparar produtos, separe o que você talvez precise mover.

| Parte da coleção | O que o Anki consegue colocar em um pacote | O que o destino precisa suportar explicitamente |
| --- | --- | --- |
| **Conteúdo da nota** | Campos de texto e HTML armazenado | Mapeamento de campos, clozes, texto não latino, código e quebras de linha |
| **Geração de cartões** | Tipos de nota e modelos de cartão | Cartões diretos e invertidos, campos personalizados, CSS e comportamento de JavaScript |
| **Mídia** | Imagens, áudios e outros arquivos locais quando **Include media** está ativado | Extração de arquivos, referências, formatos suportados e sincronização entre dispositivos |
| **Organização** | Baralhos, sub-baralhos, tags e predefinições opcionais de baralho | Hierarquia, significado das tags, predefinições e escopos de estudo |
| **Estado de aprendizado** | Informações de agendamento e histórico de revisões, quando incluídos | Datas de vencimento, intervalos, lapsos e conversão para o agendador de destino |
| **Código do fluxo de trabalho** | Complementos não vêm junto no pacote do baralho | Um substituto para as ferramentas do navegador de cartões, as edições em lote, a geração de notas e os demais comportamentos dos complementos |

O [manual de exportação do Anki](https://docs.ankiweb.net/exporting.html) documenta todas essas opções de pacote. Um importador de texto enxerga só a primeira linha e, talvez, as tags. Um importador direto de `.apkg` enxerga mais, mas cada produto decide o que converte e o que descarta.

Por isso “importa do Anki” é vago demais para orientar uma troca. Faça três perguntas separadas:

1. **O cartão continua significando a mesma coisa?** Confira campos, direções de cartão geradas, clozes, mídia e renderização.
2. **O destino sabe o que eu já aprendi?** Confira eventos de revisão, o status atual, as datas de vencimento e a primeira fila real.
3. **Dá para sair de novo?** Exporte do destino e inspecione o que o formato de saída realmente contém.

Um importador pode passar na primeira pergunta e falhar nas outras duas.

## O que sobrevive à migração

| Produto | Caminho de importação a partir do Anki | Estado de aprendizado | Principal perda para testar |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Importação direta de `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) para a maioria dos tipos de nota, para a mídia e para o histórico de revisões | O histórico chega, mas os cartões importados entram na fila separada **Need to Learn** do RemNote | CSS pesado, JavaScript personalizado, parte do TTS gerado na hora e campos renomeados de oclusão de imagem |
| [Mochi](https://mochi.cards/) | [Importação direta de `.apkg`](https://mochi.cards/docs/import-and-export/importing/) incluindo o histórico de revisões | O histórico chega; a documentação não promete uma fila nem datas de vencimento idênticas às do Anki | O HTML vira Markdown; CSS e JavaScript são removidos; a avaliação futura é binária |
| [Mnemosyne](https://mnemosyne-proj.org/) | O projeto documenta a [importação completa do Anki](https://mnemosyne-proj.org/features) com tipos de cartão personalizados e dados de aprendizado | Os dados de aprendizado entram em um agendador diferente | O comportamento exato dos modelos, o estado de vencimento convertido e a renderização dos cartões ainda precisam de teste |
| [Quizlet](https://quizlet.com/) | [Colar termos e definições](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Nenhum vindo do Anki | Tipos de nota, modelos, baralhos, estrutura de mídia e todos os dados de agendamento |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX ou ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Nenhum vindo do Anki | Modelos, complementos, regras de mídia e todos os dados de agendamento |
| [SuperMemo](https://www.supermemo.com/) | [Colar linhas delimitadas de pergunta e resposta](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), até 100 por vez | Nenhum vindo do Anki | Estrutura da coleção, mídia, modelos e todos os dados de agendamento |
| [Nibomo](https://nibomo.com/) | Criação assistida por IA e revisada a partir de TXT ou CSV do Anki | Nenhum vindo do Anki | Sem suporte a `.apkg`; modelos, fidelidade da mídia, hierarquia de baralhos e todos os dados de agendamento ficam para trás |

## Preço, uso offline, agendamento e propriedade

| Produto | Preço verificado em 28 de agosto de 2026 | Limite do uso offline | Agendador | Código e auto-hospedagem |
| --- | --- | --- | --- | --- |
| **RemNote** | [Grátis; Pro por US$ 8 por mês, cobrados como US$ 96 por ano](https://www.remnote.com/pricing) | Os apps instalados editam e revisam offline depois do login. O desktop guarda toda a mídia da base de conhecimento; o celular mantém em cache só algumas imagens recentes. A web precisa de uma aba já aberta. | [Anki SM-2 ou FSRS v6 em beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Núcleo proprietário; nenhum caminho de auto-hospedagem suportado está documentado |
| **Mochi** | [Grátis offline; sincronização Pro por US$ 5 por mês](https://mochi.cards/#pricing-section) | Os apps instalados funcionam completamente offline, sem conta. O armazenamento do navegador pode ser apagado. | [Agendador do Mochi ou FSRS](https://mochi.cards/docs/reviewing/fsrs/), ambos com Remembered / Forgot | Núcleo proprietário; os repositórios públicos contêm integrações, não um app que dê para auto-hospedar |
| **Mnemosyne** | Grátis | [Uso local no desktop e revisão offline no Android](https://mnemosyne-proj.org/download-mnemosyne.php); o Android não edita. Sem app nativo para iOS. | Agendamento adaptativo a partir de notas de lembrança de 0 a 5 | Licenças de código específicas por componente; servidor de sincronização próprio, em desktop ou sem interface gráfica |
| **Quizlet** | Uso básico grátis; [Plus por US$ 35,99 por ano, Plus Unlimited por US$ 44,99 por ano](https://quizlet.com/upgrade?source=signup) | Os conjuntos baixados funcionam offline nos apps de iOS e Android, com Flashcards e Match. | [Repetição espaçada na web](https://quizlet.com/features/spaced-repetition) para conjuntos com 100 termos ou mais; no celular ainda aparece como em breve. O Learn é uma prática adaptativa separada. | Serviço hospedado proprietário; nenhum caminho de auto-hospedagem suportado |
| **Brainscape** | [Grátis; Pro por US$ 7,99 por mês na cobrança anual](https://www.brainscape.com/pricing) | [O celular consegue guardar o trabalho feito offline e depois sincronizar as turmas já baixadas](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); a documentação não promete uma biblioteca local completa. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), com notas de 1 a 5 | Serviço hospedado proprietário; nenhum caminho de auto-hospedagem suportado |
| **SuperMemo** | Conta gratuita com limites; [35,99 PLN por mês ou 359 PLN por ano](https://www.supermemo.com/en/premium-subscription) | Os cursos baixados funcionam offline no celular; edição, IA, busca, gravações e estatísticas não. | [Método proprietário do SuperMemo](https://www.supermemo.com/en/supermemo-method) | Serviço hospedado proprietário; nenhum caminho de auto-hospedagem suportado |
| **Nibomo** | [Núcleo hospedado grátis durante o beta; software grátis para auto-hospedar](/pricing/), mais os seus custos de infraestrutura | Os apps nativos escrevem localmente depois do login online e da carga inicial do espaço de trabalho; a mídia remota já precisa estar em cache. | [FSRS](/docs/architecture/#scheduling) | MIT; a implantação de produção suportada é uma stack completa centrada na AWS |

Estas tabelas não são um placar. Um importador direto pode pesar mais do que qualquer outro recurso se você tem 30.000 cartões maduros. Um app nativo para iPhone pode decidir o resultado se é ali que você revisa. O acesso ao código só importa quando você, ou alguém de sua confiança, vai manter esse código.

Todo produto aqui tem uma porta de entrada gratuita, mas alternativas gratuitas ao Anki não saem de graça na migração. O preço da assinatura é fácil de contar. Reconstruir modelos, conferir mídia e recomeçar um histórico de revisões costuma custar bem mais.

## RemNote: leve os cartões para dentro de notas conectadas

O RemNote muda o lugar de onde os cartões vêm. Em vez de manter um baralho separado ao lado das anotações de aula, você cria cartões dentro de um esquema, de um documento ou de um fluxo com PDF. É um bom motivo para deixar o Anki se copiar material entre um app de notas e um app de flashcards virou a parte cara.

O caminho de migração é amplo, mas a fila precisa de uma descrição cuidadosa. O [guia atual de importação do Anki](https://help.remnote.com/en/articles/6751471-importing-from-anki) manda exportar um `.apkg` com informações de agendamento, predefinições de baralho e mídia. Ele importa o histórico de revisões e a maioria dos tipos de nota, incluindo o básico, o cloze e os cartões comuns de oclusão de imagem.

O mesmo guia diz que os cartões recém-importados vão para uma fila separada, a **Need to Learn**. Ou seja, o histórico fica disponível para o RemNote, mas a documentação não promete que a sua fila atual de cartões pendentes do Anki reapareça igual. CSS pesado também é descartado, JavaScript personalizado não é suportado, parte da conversão de texto em fala na hora não funciona e a importação de oclusão de imagem depende dos nomes esperados de nota e de campo.

Rode um baralho representativo e inspecione tanto os cartões quanto a primeira fila. Uma importação de aparência limpa é só metade do teste.

Os apps instalados de desktop e de celular funcionam offline depois da instalação e do login. O [guia do modo offline](https://help.remnote.com/en/articles/6752029-offline-mode) traça um limite importante para a mídia: o desktop guarda todas as imagens e PDFs da base de conhecimento, enquanto o celular mantém em cache só algumas imagens recentes. O app web continua em uma aba já aberta, mas não abre do zero sem conexão.

Use o RemNote quando notas conectadas valerem a mudança no modelo da coleção. Fique no Anki se os modelos de cartão e os complementos forem o sistema, e não um enfeite em volta dele.

## Mochi: Markdown local com uma exportação nativa completa

O Mochi é um destino de migração menor, para quem quer dados locais, cartões em formato Markdown e menos controles na tela. Os apps instalados rodam nas principais plataformas de desktop e de celular e podem ser usados [completamente offline, sem conta](https://mochi.cards/docs/getting-started/download-and-install/). A sincronização é a parte paga, a US$ 5 por mês.

O importador direto do Anki carrega o histórico de revisões, o que coloca o Mochi bem à frente das opções só de texto. A conversão também é incomumente explícita: o Mochi remove CSS e JavaScript e converte HTML em Markdown. Isso funciona quando o significado está no texto e em anexos comuns. É um aviso quando o significado está no modelo.

O Mochi agora oferece dois agendadores. O algoritmo próprio continua sendo o padrão, e o [FSRS pode ser ativado](https://mochi.cards/docs/reviewing/fsrs/) sem zerar o progresso que você já tem no Mochi. O FSRS deriva o estado do cartão do histórico de revisões que o Mochi tem. A avaliação continua binária — Remembered ou Forgot — mesmo com FSRS, então quem usa Hard e Easy no Anki como sinais separados deve esperar um ritmo diário diferente.

Tirar os dados de lá é mais claro do que na maioria dos apps proprietários. Uma [exportação nativa `.mochi`](https://mochi.cards/docs/import-and-export/exporting/) contém cartões, modelos, anexos, tags, estrutura de baralhos e histórico de revisões. Markdown e CSV são mais fáceis de inspecionar em outro lugar, mas deixam de fora o histórico de revisões e outros metadados.

Os repositórios públicos do Mochi no GitHub contêm [integrações e ferramentas relacionadas](https://github.com/mochi-cards/open-source), não o app principal nem um servidor de sincronização suportado. Escolha o Mochi pelo uso offline e pela portabilidade, não pelo controle do código.

## Mnemosyne: o caminho de código aberto no desktop

O Mnemosyne é o mais próximo do formato tradicional de “programa e banco de dados local”. A versão atual roda em Windows, macOS e Linux, com um cliente Android para revisão offline. A página de recursos documenta cartões ricos, tags hierárquicas, plugins, uma escala de revisão de 0 a 5 e importação completa do Anki com tipos de cartão personalizados e dados de aprendizado.

Esta é a migração de código aberto mais direta da lista quando você quer sair do Anki sem se mudar para um grande sistema de notas ou um serviço em nuvem. Ele também tem um [servidor de sincronização embutido](https://mnemosyne-proj.org/help/syncing) que roda em um desktop ou em uma máquina sem interface gráfica e junta os dados de aprendizado de vários clientes.

As arestas fazem parte da decisão. O cliente Android [não edita cartões](https://mnemosyne-proj.org/help/android-client). Quem usa iOS precisa revisar pelo navegador, com o servidor rodando em outra máquina, e a página oficial de recursos desse servidor avisa que ele não tem recursos de segurança. Rodar a própria sincronização também significa manter o servidor acessível, configurar a rede e fazer backup do diretório de dados.

O licenciamento é mais específico do que um simples rótulo “GPL”: o [arquivo de licença do projeto](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) aponta termos diferentes por componente. A [licença do núcleo](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) usa AGPL v3 com uma cláusula extra de nome e atribuição, enquanto o [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) usa LGPL v3. Leia esses arquivos se modificar ou redistribuir fizer parte do seu plano.

## Quizlet: troque pela sala de aula, não pela fidelidade da coleção

O Quizlet resolve outro problema. Conjuntos públicos de estudo, turmas de professores, compartilhamento, Match, Test, Learn e atividades em grupo são mais fáceis de entregar para uma turma do que um perfil personalizado do Anki.

O limite da migração é texto puro. O Quizlet transforma linhas coladas em termos e definições, mas não lê um `.apkg` nem reconstrói tipos de nota, modelos, agendamento ou histórico de revisões. Quem cria pode [exportar os próprios conjuntos como texto copiado](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), sem imagens; conjuntos copiados de outras pessoas não podem ser exportados. Isso é portabilidade de conteúdo, não de coleção.

A história do agendamento no Quizlet está mudando. O novo fluxo de [Spaced Repetition](https://quizlet.com/features/spaced-repetition) é ativado automaticamente na web para conjuntos com pelo menos 100 termos e usa as avaliações Repeat, Hard, Okay e Easy. O Quizlet ainda marca o suporte no celular como em breve. O Learn continua sendo um caminho separado de prática adaptativa, com limites de uso pagos.

Offline aqui também quer dizer os apps de celular, não o site. O Quizlet salva automaticamente oito conjuntos recentes e deixa você baixar mais; [Flashcards e Match funcionam offline](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps) e o progresso sincroniza depois que a conexão volta.

Mude para cá quando o objetivo for distribuição e atividade em sala. Reconstruir um agendamento pessoal maduro só para ganhar esses recursos costuma ser uma troca ruim.

## Brainscape: menos decisões de agendador, menos profundidade na migração

O Brainscape pede uma nota de confiança de 1 a 5 e usa esse sinal para trazer de volta mais cedo os cartões fracos. A fórmula completa não é publicada, mas a interação é fácil de ensinar em uma turma compartilhada.

Ele aceita arquivos CSV, TXT, XLSX e ODS. Isso é prático para cartões de frente e verso, mas significa que modelos, complementos, regras de mídia e os dados de aprendizado do Anki ficam para trás. Exportar um backup pessoal é um recurso Pro e gera arquivos que dá para abrir em uma planilha e importar de novo mais tarde.

A central de ajuda atual do Brainscape diz que o site e os apps de celular agora compartilham os mesmos recursos principais de busca, criação, compartilhamento e estudo. Ela também descreve o uso do celular offline, a ressincronização manual e as atualizações das turmas já baixadas no aparelho. Isso sustenta um caminho prático de reconexão, mas não a promessa de que a conta inteira seja uma biblioteca local completa.

A exportação de baralhos pessoais continua sendo um [recurso Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Não existe publicação oficial do código nem caminho de auto-hospedagem.

O Brainscape vale a pena quando o Anki parece configuração demais para quem só precisa estudar. Não é uma boa rota de saída para quem já usa bem essa configuração.

## SuperMemo: escolha o método e aceite recomeçar

O serviço atual do SuperMemo.com é uma plataforma de aprendizado de idiomas para web, iOS e Android, construída em torno do método de agendamento proprietário do SuperMemo. Ele é separado do antigo produto para Windows que os usuários de longa data podem conhecer.

Esta é uma decisão de método e catálogo, não uma migração limpa do Anki. O SuperMemo suporta [criação em massa colando linhas delimitadas de pergunta e resposta](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), com limite de 100 cartões por importação. Não encontrei importador oficial de `.apkg` nem caminho de exportação para o usuário no serviço hospedado. Modelos, complementos, estrutura de mídia e histórico de revisões, portanto, não atravessam esse caminho documentado.

Os cursos baixados podem ser estudados offline nos apps de celular. O [guia de uso offline](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) exclui os recursos de IA, a criação de MemoCards, a busca, as gravações, as estatísticas e o editor de cursos, então prepare o material e sincronize antes de desconectar.

Escolha o SuperMemo porque você quer o método ou o catálogo de cursos dele o bastante para começar um agendamento novo. Se preservar o agendamento atual é a prioridade, ele resolve o problema errado.

## Nibomo: acesso ao código de toda a stack, com a importação mais fraca do Anki

O Nibomo expõe um limite amplo de propriedade. O [repositório com licença MIT](https://github.com/kirill-markin/flashcards-open-source-app) contém o app web, os clientes iOS e Android, o backend, a sincronização offline, a infraestrutura, a [API pública](/docs/api/) e o [servidor MCP](/docs/mcp-connector/). As revisões usam [FSRS](/docs/architecture/#scheduling). Web, iOS e Android escrevem primeiro localmente, adicionam as mudanças a um outbox e sincronizam quando a conexão volta.

Isso não o torna compatível com o Anki. O Nibomo não consegue ler `.apkg` nem `.colpkg`. A migração suportada a partir de um TXT do Anki é um fluxo de criação assistida por IA e revisada por você, para cartões majoritariamente de texto. Ela não preserva modelos, complementos, hierarquia de baralhos, datas de vencimento, intervalos nem eventos de revisão. Referências de mídia em um arquivo TXT não são arquivos de mídia, então baralhos cheios de mídia precisam de reconstrução e verificação à parte.

O pacote `flashcards.zip` do próprio Nibomo também é mais estreito do que um backup. Ele move cartões, tags e a mídia relacionada entre espaços de trabalho do Nibomo. Não move histórico de revisões, estado do FSRS, estruturas completas de baralhos, configurações do espaço de trabalho nem contas.

O núcleo hospedado é [grátis durante o beta](/pricing/). Auto-hospedar a stack de produção não é uma instalação Docker de um comando só: o [guia de auto-hospedagem](/docs/self-hosting/) usa AWS CDK e exige serviços da AWS mais Cloudflare, Resend, Sentry, segredos, migrações, backups, restaurações e atualizações. O Docker Compose é o caminho de desenvolvimento, não a implantação de produção suportada.

Use o Nibomo quando o código completo e um backend sob o controle do operador forem o motivo da troca, e os seus cartões forem simples o bastante para reconstruir com segurança. [Abra o app hospedado](https://app.flashcards-open-source-app.com/) para testar um baralho temporário pequeno. Fique no Anki — ou teste RemNote, Mochi ou Mnemosyne — quando a fidelidade do estado de aprendizado vier primeiro.

## Qual alternativa ao Anki funciona no iOS sem surpresa ruim na migração?

Uma “alternativa ao Anki para iOS” pode significar duas coisas diferentes: um app nativo para iPhone ou um substituto para a [compra única de US$ 24,99 do AnkiMobile](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo e Nibomo têm apps para iOS. O Mnemosyne não tem. Isso ainda deixa a pergunta da migração:

- **Mochi** preserva mais do que as opções de iOS só com texto: importa o histórico de revisões do `.apkg`, com conversão para Markdown e avaliação binária.
- **RemNote** também importa o histórico de revisões do `.apkg`, mas teste a fila **Need to Learn** em vez de supor que o agendamento de hoje no Anki sobreviveu.
- **Quizlet** serve para distribuição em sala de aula, mas o caminho vindo do Anki é só texto e o novo fluxo de repetição espaçada ainda não está no celular.
- **Nibomo** é a opção com código disponível e cliente iOS nativo, mas a migração do Anki zera o estado de aprendizado.
- **Brainscape** e **SuperMemo** só fazem sentido se o método de revisão deles valer reconstruir os cartões e o agendamento.

Antes de largar o AnkiMobile por causa do preço, compare com o custo de uma assinatura e com as horas necessárias para consertar uma migração. Um app de compra única pode sair mais barato do que um app grátis que transforma uma coleção madura em um projeto manual.

## Quando ficar no Anki é mais seguro

Ficar é uma decisão, não uma falha em escolher algo mais novo. Fique no Anki quando qualquer um destes pontos for verdade:

- sua coleção depende de modelos personalizados, CSS, JavaScript ou complementos;
- Image Occlusion, áudio ou outra mídia carrega significado essencial;
- uma nota gera várias direções de cartão que precisam continuar ligadas;
- anos de histórico de revisões e as datas de vencimento atuais valem mais do que um editor novo;
- você depende de um fluxo de desktop ou de uma combinação de plataformas que a alternativa não cobre;
- o modo offline do substituto só funciona em uma superfície que você não vai usar;
- você quer auto-hospedagem na teoria, mas não quer operar, proteger, fazer backup e atualizar um servidor;
- a alternativa não resolve nenhum problema recorrente além de parecer mais limpa.

O Anki ainda oferece um ecossistema maduro de complementos, modelos flexíveis de nota e de cartão, FSRS e os controles de agendamento antigos, clientes locais instalados e formatos de pacote capazes de carregar a coleção. Nenhum dos produtos acima reproduz tudo isso.

Para uma comparação mais estreita dos limites de propriedade, leia [o guia de apps de flashcards de código aberto](/blog/best-open-source-flashcard-apps-2026/). Se o comportamento offline for o fator decisivo, separe apps instalados, conteúdo em cache e abas do navegador antes de comparar.

## Uma checklist de migração que ainda pode terminar em “não”

Não comece com a coleção inteira. Monte um teste que tenha permissão de falhar.

1. **Crie um pacote de recuperação.** Exporte um `.colpkg` com mídia, guarde fora do perfil do Anki e mantenha uma segunda cópia em outro lugar.
2. **Escolha o baralho chato.** Inclua clozes, campos personalizados, cartões diretos e invertidos, baralhos aninhados, tags, imagens, áudio e histórico de revisões suficiente para expor a conversão do agendamento.
3. **Exporte o formato que o destino realmente suporta.** Use `.apkg` com agendamento, predefinições e mídia para um importador direto. Use Notes in Plain Text só quando você aceitar uma reconstrução só de conteúdo.
4. **Registre uma linha de base.** Anote a contagem de notas, a contagem de cartões, os nomes de tags e de baralhos, a quantidade de arquivos de mídia, algumas datas de vencimento e intervalos, e quantos cartões cada tipo de nota deve gerar.
5. **Importe em um espaço temporário.** Não sobrescreva o perfil de origem nem misture o primeiro teste em uma biblioteca definitiva de destino.
6. **Inspecione conteúdo e estado de aprendizado separadamente.** Uma frente e um verso corretos não provam que clozes, mídia, cartões irmãos, histórico de revisões ou a próxima data de vencimento sobreviveram.
7. **Abra offline do zero em todos os aparelhos reais.** Revise, edite, feche o app por completo, abra de novo sem conexão, depois reconecte e confira outro aparelho.
8. **Observe a fila antes de fazer ela divergir.** Compare o primeiro conjunto de cartões pendentes e alguns intervalos antes de avaliar os mesmos cartões de produção nos dois apps. Depois da primeira revisão no outro app, os dois agendamentos ficam independentes.
9. **Teste a saída antes de se comprometer.** Exporte do destino e inspecione o que você conseguiria recuperar se sair de lá no ano que vem.
10. **Mantenha o Anki e o backup intocado.** Não apague nenhum dos dois até o substituto sobreviver ao uso normal e você ter aceitado conscientemente cada perda.

Se o destino só aceita texto, use um fluxo seguro e completo de exportação para TXT. Ele separa o `.colpkg` de recuperação do arquivo de trabalho portátil e deixa o reinício explícito.

## Tome a decisão nesta ordem

Comece pela parte que você não pode perder:

1. Se os modelos exatos, os complementos ou a fila atual são essenciais, fique no Anki, a menos que um `.apkg` representativo prove o contrário.
2. Se notas e cartões devem virar um sistema só, teste o RemNote. Confira a fila **Need to Learn**, não só as páginas importadas.
3. Se Markdown local e exportações inspecionáveis importam mais do que a renderização do Anki, teste o Mochi.
4. Se você quer um app de desktop de código aberto e focado, com importação direta do Anki, teste o Mnemosyne — e confirme que os limites no celular cabem na sua rotina.
5. Se o problema real é distribuição em sala de aula ou um ciclo de revisão compartilhado mais simples, reconstrua um conjunto pequeno no Quizlet ou no Brainscape.
6. Se você quer especificamente o método do SuperMemo, aceite um agendamento novo. Se quer especificamente o código de toda a stack, auto-hospedagem, API e acesso por MCP, aceite a reconstrução com perdas do Nibomo e o trabalho de operação.

Para uma visão recurso a recurso de três modelos bem diferentes, vale comparar Anki, Quizlet e Nibomo lado a lado.

A regra útil é simples: troque quando o ganho for específico e a perda tiver passado por um teste real. Se o seu baralho representativo não consegue cruzar o limite sem problemas, ficar no Anki não é a saída conservadora. É o resultado da comparação.
