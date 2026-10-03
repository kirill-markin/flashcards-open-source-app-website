---
title: "O Anki funciona offline em 2026? Computador, iPhone, Android e sincronização"
description: "Sim: os apps instalados do Anki para computador, iPhone, iPad e Android usam uma coleção local offline. Veja o que exige internet, como sincronizar depois e como preparar a mídia."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "Anki funciona offline"
  - "usar Anki offline"
  - "AnkiMobile funciona offline"
  - "AnkiDroid funciona offline"
  - "sincronização offline do Anki"
  - "AnkiWeb offline"
  - "usar Anki sem internet"
---

O Anki não precisa consultar um servidor antes de mostrar o próximo cartão. **Os apps instalados do Anki funcionam offline em 2026:** Anki no Windows, macOS e Linux; AnkiMobile no iPhone e iPad; e AnkiDroid no Android. Cada um usa uma coleção armazenada no próprio dispositivo, então você pode revisar, criar notas e fazer edições comuns sem internet.

Mas há um detalhe que pode pegar você de surpresa: o AnkiWeb é diferente. Ele é o serviço de estudo e sincronização pelo navegador, não um app do Anki que funciona offline. Um app instalado também só pode usar os baralhos e arquivos de mídia que já chegaram àquele dispositivo.

**Dados verificados:** 16 de agosto de 2026.

![Um pesquisador de campo adiciona um registro a um arquivo local de fotos, áudios e textos enquanto a conexão de rádio nas montanhas está fora do ar](/blog/does-anki-work-offline.png)

## A resposta curta para cada versão

O [site oficial do Anki](https://apps.ankiweb.net/) apresenta o app para computador, o AnkiMobile para iOS, o AnkiDroid para Android e o AnkiWeb como partes do mesmo ecossistema. O que funciona offline varia entre eles.

| Versão | Funciona offline? | O que você pode fazer sem internet | O que exige conexão |
| --- | --- | --- | --- |
| **Anki para computador**, no Windows, macOS ou Linux | **Sim.** A coleção e a pasta de mídia são locais. | Revisar cartões, adicionar notas, editar o conteúdo das notas e usar a mídia já armazenada no computador. | Baixar baralhos compartilhados, sincronizar com o AnkiWeb e buscar qualquer recurso que um cartão ou complemento solicite a um serviço online. |
| **AnkiMobile**, no iPhone ou iPad | **Sim.** O app mantém uma coleção local. | Revisar cartões locais, adicionar notas, editar o conteúdo das notas e reproduzir sons ou exibir imagens que já estão no dispositivo. | Concluir a sincronização inicial da coleção e da mídia, usar o AnkiWeb e acessar recursos remotos. |
| **AnkiDroid**, no Android | **Sim.** O AnkiDroid mantém a coleção no dispositivo Android. | Revisar cartões locais, adicionar notas, editar o conteúdo das notas e usar a mídia presente no dispositivo. | Sincronizar ou baixar material que falta, obter baralhos compartilhados e usar funções dos cartões que dependem da rede. |
| **AnkiWeb**, no navegador | **Sem modo offline.** É um serviço online de estudo e sincronização. | Não conte com ele depois que a conexão cair. | Usar uma conexão com a internet ou mudar para um app instalado e preparado com antecedência. |

Dá para usar o Anki offline em um app instalado que já tenha a coleção certa. O AnkiWeb no navegador continua precisando de conexão.

## Revisões e edições offline ficam primeiro naquele dispositivo

Quando você responde aos cartões offline, o Anki registra essas revisões na coleção local. O agendador continua a partir desse estado local. Novas notas e edições comuns também ficam no dispositivo. Nada aparece em outro aparelho até você se reconectar e sincronizar.

A sincronização com o AnkiWeb é opcional se você estuda em apenas um dispositivo. Ela serve para levar as alterações da coleção de um dispositivo para outro. O [manual de sincronização do Anki](https://docs.ankiweb.net/syncing.html) explica que, em condições normais, é possível combinar revisões e edições de notas feitas em locais diferentes. Se o mesmo cartão foi revisado em dois lugares, as duas respostas ficam no histórico de revisões, e vale o estado definido pela resposta mais recente.

Esta rotina reduz conflitos de sincronização que podem ser evitados:

1. Sincronize o dispositivo antes de sair de uma conexão confiável.
2. Revise, adicione notas ou faça correções simples no texto dos cartões offline.
3. Reconecte e sincronize esse dispositivo antes de continuar em outro.
4. Deixe o outro dispositivo terminar a própria sincronização antes de fazer novas alterações nele.

Mudanças na estrutura da coleção exigem mais cuidado. Adicionar um campo, remover um modelo de cartão, alterar tipos de nota e fazer mudanças semelhantes pode exigir uma sincronização em um único sentido, em vez de combinar as alterações. Nessa sincronização, você precisa escolher entre manter a coleção local ou a coleção do AnkiWeb; as alterações do outro lado podem ser substituídas.

Você pode continuar com as revisões normais e as edições de notas durante uma viagem, mas deixe as mudanças complexas nos tipos de nota e modelos para depois se vários dispositivos offline estiverem acumulando alterações diferentes. Se o Anki pedir que você escolha entre enviar ou baixar a coleção, pare e identifique qual delas contém o trabalho que você precisa preservar antes de escolher o sentido.

## A mídia só é local depois de chegar ao dispositivo

O Anki armazena sons e imagens separadamente dos dados da coleção. No computador, a [documentação sobre mídia](https://docs.ankiweb.net/media.html) explica que os arquivos anexados ou colados em uma nota são copiados para a pasta local `collection.media`. Depois que um arquivo de mídia está nessa pasta, o cartão não precisa de internet para carregá-lo.

O ponto fraco é a preparação. A sincronização da coleção e a da mídia são separadas, então sons e imagens podem continuar sendo transferidos depois que os cartões aparecem. O [guia de sincronização do AnkiMobile](https://docs.ankimobile.net/syncing.html) avisa que a mídia pode estar ausente até que a primeira sincronização termine por completo. Uma lista completa de baralhos não prova que uma coleção com muitas imagens ou áudios está pronta.

Antes de ficar offline:

- sincronize o dispositivo em que você adicionou a mídia;
- espere a sincronização da mídia terminar;
- sincronize o dispositivo que você vai levar e espere nele também;
- abra cartões que usem cada tipo de imagem e áudio de que você precisa;
- execute **Check Media** (Verificar mídia), quando disponível, para encontrar notas que fazem referência a arquivos ausentes.

Essa última verificação é importante com baralhos compartilhados. Às vezes, o autor do baralho nunca incluiu uma imagem mencionada no cartão, então sincronizar repetidamente não vai baixá-la.

Ter mídia local não torna todo cartão independente de recursos externos. Um modelo de cartão pode apontar para uma imagem, script, fonte ou outro recurso hospedado na web. Dicionários online, downloads de baralhos compartilhados e complementos que chamam APIs remotas ainda precisam de conexão. A conversão de texto em fala depende da voz e da plataforma: uma voz instalada no sistema pode funcionar offline, enquanto uma voz fornecida por um serviço online não funciona. Teste a função específica em vez de presumir que toda conversão de texto em fala ou todo complemento se comporta da mesma forma.

## Como funciona a sincronização do Anki após o uso offline

A sincronização offline do Anki tem, na prática, duas etapas: trabalhar localmente agora e sincronizar pela rede depois.

Quando a conexão voltar, sincronize o dispositivo que contém o trabalho feito offline. Espere tanto a sincronização da coleção quanto a da mídia terminarem. Depois, sincronize o próximo dispositivo antes de revisar ou editar nele. Essa ordem facilita identificar o estado mais recente caso o Anki peça que você resolva um conflito.

Confira o resultado; o fim da animação de sincronização, por si só, não prova que tudo funcionou:

- encontre uma nota que você adicionou offline;
- confirme que um campo editado contém o novo texto;
- confira o histórico de revisões ou o agendamento da próxima revisão de um cartão que você respondeu;
- abra pelo menos uma imagem ou um arquivo de áudio recém-adicionado no segundo dispositivo.

Se você editou a mesma nota em dois dispositivos, leia a versão final em vez de presumir que a combinação preservou o texto que você queria. Se aparecer um botão vermelho de sincronização ou uma escolha entre enviar e baixar a coleção inteira, não clique por hábito. Um download completo substitui as alterações na coleção local; um envio completo substitui a coleção do AnkiWeb antes que os outros dispositivos a baixem.

## Sem internet regular, transfira a coleção como arquivo

O Anki permite transferir uma coleção entre dispositivos sem acesso regular ao AnkiWeb. Nesse caso, você passa a trabalhar no dispositivo de destino, sem combinar alterações feitas em vários aparelhos.

O [guia de transferência de coleções do AnkiMobile](https://docs.ankimobile.net/collection-transfer.html) usa um arquivo `collection.colpkg` que contém todos os baralhos e as informações de agendamento. Você exporta a coleção atual, transfere o arquivo pelo AirDrop ou por compartilhamento de arquivos e o importa no outro dispositivo. O [manual do AnkiDroid](https://docs.ankidroid.org/manual.html) descreve um fluxo semelhante por USB para transferir a coleção entre o Android e o computador.

Importar um arquivo de coleção completa substitui a coleção que já existe no dispositivo de destino. Esse processo não combina duas coleções que foram alteradas separadamente offline. Use um dispositivo como a referência atual: exporte a coleção dele, importe no próximo dispositivo, faça as alterações ali e transfira a coleção mais recente de volta antes de retomar o uso do primeiro.

Isso é útil em trabalhos de campo, navios, locais remotos ou redes restritas, onde é possível transferir arquivos de vez em quando, mas não sincronizar com a nuvem regularmente. Para um voo comum ou o trajeto diário, é mais simples concluir a sincronização com o AnkiWeb antes de sair.

## Sincronização não é backup do Anki

A sincronização mantém os dispositivos alinhados. Por isso, uma exclusão acidental ou uma alteração indesejada pode se espalhar para todos os dispositivos sincronizados.

Os apps instalados do Anki mantêm backups locais, mas a mídia exige atenção à parte. Por exemplo, o [guia de preferências do AnkiMobile](https://docs.ankimobile.net/preferences.html) informa que os backups automáticos incluem cartões e estatísticas, mas não sons ou imagens. Uma exportação completa da coleção com mídia tem uma finalidade diferente tanto da sincronização quanto do histórico de backups automáticos.

Se reconstruir o baralho daria muito trabalho, faça exportações completas com mídia periodicamente e guarde-as fora do dispositivo que você usa no dia a dia. O [guia de backup de flashcards](/blog/how-to-back-up-flashcards/) explica como combinar essa cópia de restauração com texto em formatos fáceis de transferir e os arquivos de origem.

## Um teste de dez minutos no modo avião

Faça isso no mesmo computador, celular ou tablet que você vai levar. Um teste bem-sucedido no computador não diz nada sobre o estado da pasta de mídia do seu celular.

1. Com conexão, abra o app instalado do Anki e sincronize. Se o dispositivo for novo, conclua primeiro o download inicial da coleção.
2. Espere a sincronização da mídia terminar. Não pare assim que os nomes dos baralhos aparecerem.
3. Abra todos os baralhos de que você precisa. Teste alguns cartões com imagens, áudio, fontes personalizadas e qualquer recurso especial dos modelos que você usa para estudar.
4. Ative o modo avião ou desative todas as conexões de rede de outra forma.
5. Feche o Anki por completo, abra-o novamente e comece a estudar o baralho de que você precisa. Isso revela se o estudo só continuava funcionando porque a tela já estava aberta.
6. Revise vários cartões. Adicione uma nota de teste claramente identificada e faça uma pequena edição de texto que não prejudique o conteúdo.
7. Feche e reabra o app ainda offline. Confirme que as revisões, a nova nota, a edição e a mídia local continuam lá.
8. Teste qualquer dicionário, voz de conversão de texto em fala ou complemento que você pretende usar. Anote quais partes precisam da rede.
9. Reconecte e sincronize esse dispositivo. Espere as etapas da coleção e da mídia terminarem.
10. Sincronize um segundo dispositivo e confira nele a nota de teste, a edição, o estado das revisões e a mídia antes de apagar o conteúdo de teste.

Não aproveite o teste para reformular tipos de nota em dois dispositivos. O objetivo é comprovar que tudo funciona para a viagem: a coleção certa está no dispositivo, a mídia importante abre, o trabalho offline é preservado ao fechar e reabrir o app, e a sincronização posterior leva esse trabalho ao outro dispositivo.

## O Anki dá conta de uma viagem se você preparar o dispositivo

Os apps instalados do Anki são uma boa opção para viajar quando você quer uma coleção local completa, em vez de um pequeno conjunto de cartões em cache. Os limites são concretos: o dispositivo precisa receber a coleção e a mídia com antecedência, o AnkiWeb funciona apenas online e as funções dos cartões que usam serviços de rede continuam precisando de conexão.

Se você está escolhendo entre várias ferramentas para viajar, a [comparação de apps de flashcards offline](/blog/best-offline-flashcards-app/) aplica os mesmos testes de cartões, edição, progresso, mídia e sincronização posterior a cinco produtos. Se você está pensando em mudar suas ferramentas de estudo por outros motivos além da conexão, veja [Anki vs Nibomo](/blog/anki-vs-flashcards-open-source-app/).

A resposta prática para “O Anki funciona offline?” é sim no computador, iPhone, iPad e Android, depois que o dispositivo que você vai usar tiver a coleção e a mídia de que você precisa. Sincronize antes de sair, faça o teste no modo avião e, quando se reconectar, sincronize primeiro o dispositivo com o trabalho feito offline.
