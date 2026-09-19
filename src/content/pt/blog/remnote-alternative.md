---
title: "Alternativas ao RemNote em 2026: opções gratuitas e de código aberto"
description: "Compare alternativas ao RemNote em notas, PDFs, cartões, preço e auto-hospedagem. Veja o que migra, o que quebra e como ensaiar uma mudança segura."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "alternativa ao remnote"
  - "alternativas ao remnote"
  - "remnote código aberto"
  - "alternativa gratuita ao remnote"
  - "remnote vs anki"
  - "alternativa ao remnote de código aberto"
  - "alternativa ao remnote auto-hospedada"
  - "app de flashcards offline"
---

O RemNote chama a exportação para o Anki de **Flashcards Only**. Tópicos sem cartões ficam de fora, e o pacote não leva suas notas conectadas, seus PDFs nem o fluxo do Reader. Um substituto pode aceitar cada pergunta e cada resposta e mesmo assim deixar para trás o sistema que tornava esses cartões úteis.

A melhor **alternativa ao RemNote** é o caminho que resolve o seu motivo para sair sem tirar de você, em silêncio, a parte do RemNote que ainda funciona. Para algumas pessoas, o motivo é o preço. Para outras, são arquivos locais simples, um sistema de cartões mais completo ou um código-fonte que elas mesmas possam rodar.

> **Aviso:** Sou Kirill Markin e desenvolvo o [Nibomo](/), um dos produtos comparados aqui. O Nibomo não substitui o RemNote por completo. O RemNote tem o fluxo integrado de notas e PDFs mais forte desta comparação, enquanto o Anki tem o sistema de cartões e os formatos de migração mais maduros.

**Fatos e preços verificados:** 31 de agosto de 2026. Os valores listados usam os preços públicos dos EUA e a cobrança anual quando indicado; impostos, regiões, lojas de apps e condições de beta podem mudar o valor.

![Uma conservadora de arquivos testa uma pequena transferência de um dossiê de estudo conectado e intacto para sistemas separados de cartões, arquivos e blocos](/blog/remnote-alternative.png)

## Comece pelo motivo que faz você querer sair

- **Preço:** Veja se o RemNote Free já cobre o seu fluxo de trabalho real. Ele inclui notas, flashcards e dispositivos sincronizados sem limite, mas restringe os documentos anotados e alguns recursos avançados.
- **Um fluxo de cartões preso demais às notas:** Experimente o Anki. Lá os cartões, os modelos, as importações e o FSRS têm mais espaço para serem o sistema principal.
- **Arquivos locais simples de notas:** Divida o trabalho entre o Obsidian para notas em Markdown e o Anki para a revisão. É menos integrado, mas a fronteira de posse dos dados fica bem mais clara.
- **Notas conectadas de código aberto, com PDFs e cartões embutidos:** O Logseq é o caminho mais próximo aqui, com uma ressalva séria em 2026: a nova versão em banco de dados está em beta, o novo app para iOS e a sincronização em tempo real estão em alfa, e o novo app para Android ainda não está aberto para testes.
- **Código-fonte e auto-hospedagem para uma stack focada em cartões:** Considere o Nibomo se cartões de frente e verso forem suficientes e você aceitar um agendamento do zero, mais um trabalho considerável de operação na AWS.
- **Leitura de PDF, destaques conectados e cartões no mesmo lugar:** Fique com o RemNote. Nenhum dos outros caminhos reproduz esse fluxo direito.

Essa última resposta passa fácil despercebida. Trocar não é avançar quando a alternativa resolve uma preferência de licença, mas atrapalha a sessão de estudo de amanhã.

## Alternativas ao RemNote: a matriz de decisão

| Caminho | Melhor motivo para escolher | Notas e PDFs | Agendador | Offline e posse dos dados | Preço verificado em 31 de ago. de 2026 | Principal limite de migração |
|---|---|---|---|---|---|---|
| **Fique com o RemNote** | Notas conectadas, leitura das fontes e cartões devem ficar juntos | Base de conhecimento nativa e o Reader com destaques de PDF, notas e cartões conectados | FSRS-6 em beta, com ativação manual e treino de pesos; o SM-2 continua sendo o padrão | Os apps de desktop e celular funcionam offline depois do login; no desktop dá para ter bases de conhecimento só locais | Grátis; Pro US$ 8 por mês no plano anual; Pro com IA US$ 18 por mês no plano anual | A exportação nativa é a melhor para restaurar de volta no RemNote, mas hoje deixa de fora imagens e PDFs |
| **Anki** | Cartões, modelos, complementos e fidelidade da coleção vêm primeiro | Sem espaço integrado de notas conectadas ou de leitura de PDF | Controles maduros de FSRS, parâmetros otimizados, retenção desejada e simulação de carga de estudo | Coleções locais no desktop e no celular; núcleo de desktop aberto e servidor oficial de sincronização auto-hospedado | Desktop, AnkiWeb e AnkiDroid são grátis; o AnkiMobile oficial é um app pago de iOS | O RemNote exporta cartões em `.apkg`, não o sistema de notas inteiro; confira os dados de agendamento e as mídias em uma importação de teste |
| **Obsidian + Anki** | Você quer notas locais simples em Markdown sem abrir mão de um agendador de cartões maduro | O Obsidian cuida das notas e dos anexos locais; o Anki cuida dos cartões; não existe um único ciclo integrado do Reader até a revisão | FSRS do Anki | Cofre local em Markdown mais coleção local do Anki; o Obsidian é grátis, mas proprietário | Obsidian grátis; o Sync opcional começa em US$ 4 por mês no plano anual; preços do Anki como acima | As exportações do RemNote em Markdown e para o Anki criam dois sistemas; os links vivos do RemNote entre notas, fontes e cartões não viram um fluxo portátil único |
| **Logseq** | Você quer especificamente um outliner de código aberto, focado em notas, com PDFs e cartões embutidos | Blocos conectados, anotação em PDF e revisão de cartões com quatro graus de avaliação | Agendador embutido com quatro graus de avaliação; a [documentação liga o novo algoritmo](https://github.com/logseq/docs/blob/master/db-version.md#cards) ao projeto FSRS original | App com licença AGPL; os dados da versão em banco de dados podem ser exportados como SQLite, EDN ou Markdown padrão com perdas | App gratuito e de código aberto | A versão em banco de dados atual está em beta; o novo app para iOS e a sincronização em tempo real estão em alfa, o novo app para Android ainda não está aberto para testes, e o estado SRS do Logseq antigo não é compatível com o novo algoritmo de cartões |
| **Nibomo** | Você quer cartões simples em uma stack aberta de web, celular e backend | Sem base de conhecimento de notas, backlinks, leitor de PDF ou app nativo de desktop | FSRS-6 com pesos fixos e menos controles de ajuste do que o Anki ou o RemNote | Web, iOS e Android offline-first; stack completa com licença MIT e um caminho de produção na AWS | App hospedado grátis durante a beta; a auto-hospedagem adiciona custos de infraestrutura e de provedores | Sem importador direto de RemNote ou Anki; o conteúdo pode ser recriado, mas o histórico de revisões e o estado do FSRS não vão junto |

Isso não é uma pontuação de recursos. Um estudante que vive de PDFs pode perder mais ao migrar para a opção “mais aberta” do que ganha com a licença dela. Quem tem um baralho simples de vocabulário talvez esteja pagando por um sistema de notas que já não usa. Comece pela linha que descreve a sua restrição e depois teste o limite de migração dela.

Grátis e código aberto são filtros diferentes. O RemNote Free e o Obsidian não custam nada no app principal, mas são proprietários. O núcleo de desktop do Anki, o Logseq e o Nibomo publicam o código; o AnkiMobile continua sendo um app pago de iOS, e auto-hospedar o Nibomo ainda gera custos de nuvem.

## Fique com o RemNote quando o fluxo conectado for o produto

O RemNote junta etapas que a maioria das alternativas separa. O [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) dele consegue manter um PDF aberto ao lado das suas notas, colar referências que apontam para o destaque exato e transformar essas notas ou destaques em flashcards. O plano Free deixa você anotar três documentos; a [página de preços](https://www.remnote.com/pricing) atual lista documentos anotados sem limite no Pro.

O agendador dele já não é um motivo óbvio para sair. O RemNote agora documenta o [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) como uma opção beta que você ativa manualmente. Depois de pelo menos 1.000 revisões, ele consegue treinar os pesos a partir do seu próprio histórico. O Anki ainda oferece controles mais profundos, mas quem gosta das notas e dos PDFs do RemNote não precisa abandoná-los só para usar o FSRS.

O comportamento offline também vai além de “funciona numa aba aberta do navegador”. Os [apps de desktop e celular](https://help.remnote.com/en/articles/6752029-offline-mode) do RemNote conseguem editar notas e revisar cartões offline depois da instalação e do login. O desktop guarda uma cópia local completa de imagens e PDFs. No celular e na web podem faltar mídias fora do cache, e o app web não consegue iniciar sem conexão se a aba foi fechada ou recarregada.

Se você começou essa busca por uma **alternativa gratuita ao RemNote**, teste o plano Free antes de mudar. Se o problema é o acesso ao código, o modo local não é a mesma coisa que código aberto ou auto-hospedagem. Vale olhar esse limite em detalhe antes de decidir.

## RemNote vs Anki: escolha qual objeto fica no centro

A distinção útil em **RemNote vs Anki** não é “notas contra nenhuma nota”. O Anki também guarda notas, mas uma nota do Anki é um conjunto de campos que os [modelos de cartão](https://docs.ankiweb.net/templates/intro.html) transformam em cartões de revisão. O RemNote parte de documentos e tópicos conectados que podem virar cartões. Um é um sistema maduro de produção de cartões; o outro é um espaço de estudo em volta de notas e fontes.

Escolha o Anki quando campos personalizados, variantes de cartão geradas, modelos em HTML/CSS, complementos ou anos de histórico de revisões forem o centro. As [configurações de FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) atuais dele incluem otimização de parâmetros, retenção desejada e simulação de carga de estudo. As [exportações](https://docs.ankiweb.net/exporting.html) dele conseguem preservar uma coleção inteira em `.colpkg`, enquanto os pacotes de baralho `.apkg` podem incluir informações de agendamento, predefinições e mídias.

O RemNote oferece uma saída para o Anki, mas o rótulo importa: a [exportação para o Anki é “Flashcards Only”](https://help.remnote.com/en/articles/7898019-exporting-notes). Tópicos sem cartões ficam de fora. O RemNote mantém o contexto do item pai nos cartões exportados e simplifica o comportamento das questões de múltipla escolha, mas a exportação não é a sua base de conhecimento, a sua biblioteca de PDFs nem o seu fluxo de leitura completo. A página oficial de exportação do RemNote também não promete que toda parte do seu estado de agendamento vai chegar ao Anki. Teste antes de tratar esse caminho como algo sem perdas.

O Anki é a escolha mais forte aqui quando os cartões vêm primeiro. Ele não é o substituto mais limpo do RemNote Reader. Se você ainda anota artigos e escreve notas conectadas, combine-o com uma ferramenta de notas em vez de forçar o Anki a virar uma. O [guia mais amplo de alternativas ao Anki](/blog/best-anki-alternatives/) cobre mais opções focadas em cartões.

## Obsidian mais Anki: arquivos locais, com uma divisão proposital

Parte de quem procura alternativas ao RemNote não precisa de outro app que faça tudo. Essas pessoas querem notas que continuem sendo arquivos comuns e um sistema de revisão que possa amadurecer por conta própria. Obsidian mais Anki é a versão limpa dessa divisão.

O [Obsidian guarda as notas](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) como texto simples em Markdown, numa pasta local. O app é grátis e não exige conta; o [Obsidian Sync](https://obsidian.md/pricing) opcional começa em US$ 4 por mês na cobrança anual. O Obsidian não é de código aberto, mas os arquivos de notas podem ser lidos direto e copiados com ferramentas comuns de arquivo.

Use a exportação em Markdown do RemNote para o lado das notas e a exportação `.apkg` para o lado dos cartões. Conte com faxina depois. Um outline aninhado exportado como Markdown legível não é a mesma coisa que as referências, os portais, os modelos e as marcações de PDF vivas do RemNote. E, quando notas e cartões passam a viver em dois apps, as edições também deixam de se propagar sozinhas entre eles.

Esse caminho funciona quando a posse dos arquivos locais importa mais do que um ciclo contínuo de “destacar, conectar, criar cartão, revisar”. É um mau negócio quando esse ciclo é exatamente o motivo pelo qual você escolheu o RemNote.

## Logseq: a opção de código aberto focada em notas está em transição

O Logseq merece um lugar numa comparação de **alternativa ao RemNote de código aberto** porque ele é de verdade focado em notas. O [repositório oficial com licença AGPL](https://github.com/logseq/logseq) descreve um app de gestão de conhecimento com blocos conectados e anotação em PDF. A [documentação atual da versão em banco de dados](https://github.com/logseq/docs/blob/master/db-version.md#cards) acrescenta cartões embutidos: marque um bloco com uma tag, veja quando ele vence e revise com quatro graus de avaliação.

O status atual importa mais do que a lista de recursos. O próprio repositório do Logseq diz que a versão em banco de dados está em beta, enquanto o novo app para iOS e a sincronização em tempo real estão em alfa; a documentação atual da versão em banco de dados diz que o app para Android ainda não está aberto para testes alfa. O Logseq avisa explicitamente que perda de dados é possível e recomenda um grafo de teste não crítico, além de backups. As [notas de mudança da versão em banco de dados](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) também dizem que o novo algoritmo de cartões não importa as propriedades nem os dados SRS dos flashcards antigos do Logseq.

A portabilidade pede uma descrição igualmente cuidadosa. A [documentação atual de exportação da versão em banco de dados](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) oferece SQLite com os arquivos, EDN e Markdown padrão. Ela diz que EDN é a única exportação editável que captura os dados do grafo por completo, mas não recomenda o EDN como backup único. O Markdown padrão deixa de fora propriedades e marcações de tempo.

Então o Logseq é o caminho a avaliar quando código aberto, notas conectadas, PDFs e cartões embutidos importam todos juntos. Não é o caminho que eu usaria para mover em um dia uma base de conhecimento crítica de faculdade de medicina em agosto de 2026. Rode ele ao lado do RemNote primeiro e deixe a transição atual se acomodar nos aparelhos que você realmente usa.

## Nibomo: stack aberta inteira, modelo de estudo estreito

O Nibomo faz quase a troca oposta à do RemNote. Os [recursos](/features/) dele giram em torno de cartões de frente e verso em Markdown, baralhos, tags, mídias, revisão com FSRS, clientes offline-first e criação de rascunhos de cartões com ajuda de IA. Ele não tem base de conhecimento de notas conectadas, leitor de PDF, app nativo de desktop nem importador direto do RemNote.

A fronteira do código-fonte é ampla: o repositório com licença MIT inclui web, iOS, Android, autenticação, backend, sincronização e infraestrutura. O [guia oficial de auto-hospedagem em produção](/docs/self-hosting/) usa o AWS CDK. Não é um appliance local de um comando só. Quem opera assume os custos de nuvem, os segredos, as migrações, o monitoramento, os backups, os testes de restauração e os apps móveis compilados à parte.

A migração é a limitação maior para quem já usa o RemNote. O Nibomo importa os próprios pacotes `flashcards.zip`, não o Markdown do RemNote nem o `.apkg` do Anki. Esses pacotes levam cartões, tags e as mídias referenciadas, mas não o histórico de revisões, o estado do FSRS, as configurações do espaço de trabalho, a estrutura completa dos baralhos ou as contas. O chat de IA consegue transformar texto exportado em rascunhos de cartões para você revisar; isso é recriar conteúdo, não continuar a coleção antiga. Uma migração a partir de um TXT exportado mostra esse limite com perdas passo a passo.

Escolha o Nibomo para um espaço de cartões novo ou simples quando o acesso ao código de toda a stack importar. Mantenha o RemNote para estudo conectado e escolha o Anki quando a fidelidade da migração ou uma estrutura avançada de cartões importar. Para a comparação mais estreita entre sistemas de cartões, vale olhar Anki e Nibomo lado a lado, além do [guia de apps de flashcards de código aberto](/blog/best-open-source-flashcard-apps-2026/).

## O que não vai migrar direito do RemNote

O RemNote tem várias exportações úteis, mas nenhum arquivo sozinho recria o produto em outro lugar.

- **A exportação completa do RemNote** é o melhor formato de restauração para o próprio RemNote. Hoje ela deixa de fora imagens e PDFs.
- **A exportação `.apkg` do Anki** contém só flashcards. Tópicos sem cartões somem nesse caminho, e o resultado não é o seu sistema de notas conectadas.
- **Markdown, HTML, OPML e texto** deixam o conteúdo mais fácil de ler em outro lugar. Eles não fazem outro app entender cada relação ou fluxo específico do RemNote.
- **Destaques e fontes em PDF** pedem uma checagem própria. O RemNote Reader consegue baixar um PDF com os destaques, mas não presuma que a exportação completa da base de conhecimento contém esse arquivo.
- **Configurações, temas e plugins** não entram num backup manual do RemNote, segundo a [documentação de backup](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **O estado das revisões** deve ser conferido cartão a cartão no destino. Uma importação que preserva a pergunta e a resposta ainda pode reiniciar o agendamento.

É por isso que “suporta Markdown” ou “importa do Anki” não basta. A portabilidade tem camadas: notas legíveis, mídias utilizáveis, fontes conectadas, estrutura dos cartões e histórico de aprendizado.

## Ensaie a saída antes de cancelar

Deixe a mudança reversível. Uma hora tranquila agora sai mais barato do que descobrir um PDF faltando na semana de provas.

1. Crie uma nova exportação manual **RemNote (Complete)** e guarde-a sem mexer.
2. No desktop, copie os backups locais `.db.zip` e a pasta `files`. Baixe todos os PDFs originais ou anotados que você não consegue repor.
3. Escolha uma amostra pequena e complicada: notas aninhadas, referências, um PDF, imagens, cartões cloze ou de múltipla escolha, tags e cartões com histórico de revisões relevante.
4. Exporte essa amostra em todos os formatos de que o caminho candidato precisa — normalmente Markdown para as notas e `.apkg` para o Anki.
5. Importe num cofre, grafo, perfil ou espaço de trabalho descartável. Compare contagens, formatação, links, mídias, frente e verso dos cartões e os cartões pendentes, lado a lado com o RemNote.
6. Trabalhe offline em todos os aparelhos que você pretende usar. Depois reconecte e confirme que as edições e as revisões chegam onde deveriam.
7. Restaure o backup completo numa base de conhecimento local e temporária do RemNote. Um arquivo baixado só vira plano de recuperação depois que você conseguiu abri-lo.
8. Estude nos dois sistemas por pelo menos algumas sessões reais. Cancele só depois que o substituto sobreviver ao fluxo diário, a uma exportação e a uma restauração.

Guarde as exportações de origem mesmo depois da mudança. Uma importação bem-sucedida prova compatibilidade com a versão de hoje do destino, não acesso permanente a cada pedaço do sistema antigo.

## A lista curta na prática

- **Fique com o RemNote** se as notas conectadas e o estudo com PDF forem a parte valiosa. O plano Free ou uma base de conhecimento só local talvez já resolvam a sua restrição.
- **Escolha o Anki** se cartões, modelos, controles de FSRS e fidelidade de migração vierem primeiro.
- **Escolha Obsidian mais Anki** se arquivos locais simples de notas justificarem rodar duas ferramentas.
- **Avalie o Logseq** se você precisa de notas conectadas de código aberto e cartões embutidos, mas mantenha o teste fora do que é crítico enquanto o banco de dados e a stack de sincronização atuais ainda estiverem em beta e alfa.
- **Escolha o Nibomo** se um sistema de cartões novo e simples e o acesso ao código de toda a stack importarem mais do que notas, PDFs ou continuidade do agendamento.

Eu desenvolvo o Nibomo e, mesmo assim, manteria o RemNote para um caderno conectado cheio de PDFs, ou escolheria o Anki para uma coleção complexa já consolidada. O Nibomo é a escolha mais estreita: cartões de frente e verso, uma stack aberta e um agendamento do zero.

Depois que você souber qual limite consegue aceitar, teste só esse caminho. Se o Nibomo encaixar, o [guia de primeiros passos](/docs/getting-started/) mostra os pontos de entrada hospedado e auto-hospedado. Se não encaixar, ficar com o RemNote também é uma decisão válida.
