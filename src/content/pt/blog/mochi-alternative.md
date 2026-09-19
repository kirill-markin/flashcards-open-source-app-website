---
title: "Análise do Mochi Flashcards (2026): plano gratuito, uso offline e comparação com o Anki"
description: "Uma análise do Mochi flashcards checada nas fontes: plano gratuito, apps offline, notas em Markdown, FSRS, sincronização, importação do Anki, exportações e limites da auto-hospedagem."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi flashcards"
  - "cartões do Mochi"
  - "mochi vs anki"
  - "anki vs mochi"
  - "mochi é grátis"
  - "mochi offline"
  - "preço do Mochi"
  - "hospedagem do Mochi"
  - "flashcards em markdown"
  - "repetição espaçada no Mochi"
---

O Mochi começa com um documento Markdown, não com o formulário comum de frente e verso. Adicione uma linha com três hifens e o documento ganha lados que dá para revisar. Ou deixe como nota, ligue a outro cartão, ou arquive para que continue aparecendo nas buscas sem entrar na fila de revisão.

Esse separador pequeno já explica para quem os **flashcards do Mochi** funcionam bem. O Mochi cai bem para quem quer notas e repetição espaçada no mesmo app local-first, ainda mais se Markdown, backlinks e uma revisão simples com Remembered/Forgot parecerem naturais. Convence menos quem já tem uma coleção consolidada no Anki, que depende de variantes de cartões geradas, HTML/CSS personalizados, JavaScript, add-ons ou controles detalhados do agendador.

Para um fluxo em um só aparelho, o plano gratuito é bem mais que um teste: não exige criar conta, e o Mochi documenta uso offline ilimitado. O detalhe é que a sincronização entre dispositivos faz parte do **plano Pro de US$ 5 por mês**. Para quem usa Anki, o custo mais pesado é o que se perde na migração. O Mochi consegue importar um pacote do Anki e o histórico de revisões junto, mas não consegue preservar todos os templates, estilos, scripts, ajustes do agendador e comportamentos de add-ons.

> **Aviso de transparência:** Eu sou Kirill Markin e desenvolvo o [Nibomo](/). Esta é uma análise de fluxo de trabalho checada nas fontes, não a afirmação de que fiz um teste prático do produto. Não há links de afiliado. Mochi e Anki seguem como a comparação principal; meu produto aparece só perto do fim, claramente identificado como alternativa.

**Fatos checados:** 7 de setembro de 2026. A última [versão do Mochi](https://mochi.cards/changelog/) visível era a 26.8.2, de 10 de agosto de 2026. Preços e detalhes das lojas de aplicativos podem mudar.

![Um restaurador de livros testa uma pequena sanfona de cartões ligados enquanto o arquivo original segue guardado em segurança](/blog/mochi-alternative-v3.png)

## A análise em poucas linhas

- **Escolha o Mochi** se você quer notas e cartões em Markdown no mesmo lugar, uso offline em um aparelho e sem conta, backlinks e uma decisão binária na hora de revisar.
- **Escolha o Anki** se você precisa de tipos de nota maduros, templates HTML/CSS, add-ons, sincronização hospedada gratuita, quatro notas de revisão ou controles mais profundos do FSRS.
- **Não troque ainda** se você já revisa com constância e não consegue apontar qual problema do seu fluxo o Mochi vai resolver. Uma interface nova não é motivo suficiente para arriscar anos de dados de agendamento e cartões personalizados.
- **Teste antes de migrar** se o Anki já guarda a coleção que você quer manter a longo prazo. O Mochi aceita arquivos `.apkg` e consegue trazer o histórico de revisões, mas converte o HTML em Markdown e remove CSS e JavaScript.

## Mochi vs Anki de relance

| Decisão | Mochi | Anki |
|---|---|---|
| Para quem serve melhor | Quem usa Markdown e notas ligadas e quer as notas ao lado dos cartões de revisão | Quem estuda e quer um sistema de flashcards maduro e configurável |
| Criação de cartões | Um documento Markdown ganha vários lados quando você adiciona `---`; também há campos e templates | As notas guardam campos; templates HTML/CSS geram um ou mais cartões |
| Fluxo de revisão | Cartões novos passam primeiro por uma fase de aprendizado; os já aprendidos usam Forgot / Remembered | Os cartões usam Again / Hard / Good / Easy |
| Agendamento | O algoritmo próprio do Mochi por padrão; o FSRS é opcional | FSRS ou o antigo SM-2, com mais ferramentas de ajuste do FSRS |
| Uso gratuito | Sem criar conta e com uso offline ilimitado | Apps de desktop grátis e sincronização grátis pelo AnkiWeb; o app oficial de iOS é pago |
| Sincronização entre dispositivos | Pro, US$ 5 por mês | Grátis pelo AnkiWeb |
| Plataformas | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, o oficial AnkiMobile e o independente AnkiDroid |
| Formatos portáteis | Exportações nativas `.mochi`, Markdown e CSV | Formatos nativos `.colpkg` e `.apkg`, além de texto separado por tabulação |
| Dados e limite de hospedagem | Local-first; o app principal não é apresentado como código aberto e não há serviço de sincronização auto-hospedado documentado | O repositório principal tem licença AGPL; há um servidor de sincronização auto-hospedado oficial documentado |

A divisão que importa é **simplicidade centrada na nota contra controle no nível da coleção**.

## Em torno do que a interface do Mochi foi montada

A interface do Mochi faz muito mais sentido depois que você acompanha um cartão passando por ela.

Todo cartão pertence a um baralho. Clique em **New Card** e você recebe uma tela de Markdown, não caixas fixas de pergunta e resposta. Um único cartão pode ter títulos, listas, código, imagens, campos estruturados e links. Adicione `---` entre os blocos para criar dois ou mais lados de revisão. Escreva `[[double brackets]]` para citar outro cartão; o Mochi cria o backlink sozinho. A [visão geral oficial dos cartões](https://mochi.cards/docs/cards/) também documenta templates cujos marcadores exibem valores de campos estruturados.

Os cartões podem cumprir duas funções sem viver em sistemas separados:

- um cartão de revisão usa lados e entra na repetição espaçada;
- uma nota de referência pode ficar no mesmo baralho e ser arquivada, o que a tira das filas de cartões novos e de cartões pendentes sem apagar o conteúdo, as tags, os links ou o histórico.

As [visões de baralho](https://mochi.cards/docs/decks/custom-views/) são combinações salvas de filtros, ordenação e layout. Você pode manter uma grade para navegar no dia a dia e criar outra visão para uma tag, para o que está pendente, para retenção baixa ou para revisões recentes. O Mochi ainda deixa transformar uma visão em sessão de treino intensivo sem mexer no agendamento normal nem no histórico de revisões. Isso diz bem mais do que chamar a interface de "limpa": o mesmo baralho funciona como caderno, como base de dados filtrada e como fila de estudo.

A [revisão diária](https://mochi.cards/docs/getting-started/reviewing-cards/) tem duas etapas. Em **New cards**, você adiciona o cartão ao calendário de revisões ou escolhe Again para revê-lo logo. Depois de aprendido, um cartão pendente revela o lado seguinte e pergunta **Forgot** ou **Remembered**. Se você esquecer, o Mochi usa uma fila de nova revisão antes de zerar o progresso. O resultado é uma decisão de propósito bem estreita na hora de revisar.

## O Mochi é grátis, e o que funciona offline?

É, mas "grátis" e "offline" querem dizer coisas diferentes conforme onde você usa. Os [preços atuais do Mochi](https://mochi.cards/) listam:

- **Free:** US$ 0 para sempre, sem precisar criar conta, com uso offline ilimitado.
- **Pro:** US$ 5 por mês, somando sincronização entre dispositivos, publicação de baralhos, campos dinâmicos, integração com IA e suporte por e-mail.

O Mochi roda no macOS, Windows, Linux, iOS, Android e na web. O [guia de download e instalação](https://mochi.cards/docs/getting-started/download-and-install/) marca o limite prático:

| Onde você usa | O que grátis e offline significam ali |
|---|---|
| App instalado no computador ou no celular | Dá para usar o Mochi offline e sem conta. Os dados ficam no aparelho, então um app instalado já pode ser um fluxo gratuito completo. |
| App web sem o Pro | O conteúdo fica no armazenamento offline do navegador. O Mochi avisa que o navegador pode apagar esses dados sem aviso. |
| A mesma coleção em vários dispositivos | A sincronização automática entre dispositivos é um recurso Pro, mesmo que cada app instalado funcione offline. |

Uso offline e sincronização são promessas separadas. Você não precisa do Pro só para criar ou revisar num app baixado. Precisa dele se a mesma coleção atual tiver que acompanhar você do notebook para o celular sozinha. Para dados importantes no plano gratuito, guarde um backup nativo em vez de tratar um aparelho — e ainda mais o armazenamento do navegador — como a única cópia.

Se o comportamento offline for o fator que decide, compare o fluxo exato dos seus aparelhos com o que o Anki faz sem internet e com o cenário mais amplo dos apps de flashcards offline.

## Os flashcards em Markdown são o motivo real para escolher o Mochi

A vantagem real do Mochi está em como o Markdown muda o material que você mantém.

Um cartão do Mochi continua legível como texto. O mesmo documento pode ter uma explicação curta, um bloco de código, links para ideias relacionadas e separadores entre os lados de revisão. Os cartões também aceitam campos e templates quando a estrutura se repete. Com um template aplicado, o Mochi renderiza o Markdown do template com os marcadores dos campos e ignora o Markdown do próprio cartão na hora de exibir, sem apagá-lo.

O Anki parte de outro modelo. Uma nota guarda campos, e os [templates de cartão](https://docs.ankiweb.net/templates/intro.html) decidem quais campos aparecem e quais cartões são gerados. Os templates usam HTML, com CSS para o estilo. Assim, uma única nota de vocabulário pode gerar cartões de reconhecimento e de produção mantendo os dados em um lugar só.

Essa estrutura dá ao Anki um teto mais alto para layouts condicionais, variantes de cartões geradas, respostas digitadas, estilos personalizados e fluxos ampliados por add-ons. Também significa que o Anki não é um app nativo de flashcards em Markdown. Um fluxo de Anki baseado em Markdown precisa de uma camada extra de conversão ou de um add-on.

A pergunta prática é simples: você quer uma nota que pode virar cartão, ou um tipo de nota estruturado que pode gerar vários cartões? O Mochi foi feito para o primeiro caso. O Anki, para o segundo.

## A repetição espaçada do Mochi já inclui FSRS

As comparações que dizem que o Mochi não tem FSRS estão velhas. O Mochi lançou uma prévia do FSRS em 2025 e seguiu publicando correções no agendador. Ainda assim, [o algoritmo próprio do Mochi continua sendo o padrão](https://mochi.cards/docs/reviewing/fsrs/).

O algoritmo padrão muda os intervalos com multiplicadores fixos depois de cada revisão lembrada ou esquecida. Ative o FSRS em Review Settings e os cartões já aprendidos passam para o FSRS sem perder o histórico. Dá para definir a retenção desejada, inserir parâmetros personalizados e voltar atrás depois.

O Mochi mantém suas notas binárias com qualquer um dos dois agendadores:

- **Forgot** corresponde ao Again do FSRS.
- **Remembered** corresponde ao Good do FSRS.

A documentação do Mochi diz que a avaliação binária funciona com o FSRS, mas perde parte da informação que Hard e Easy trariam. Ele aceita parâmetros personalizados já otimizados, só que não tem um otimizador embutido; gerar parâmetros próprios exige um otimizador de FSRS externo e o histórico de revisões do Mochi.

Os [ajustes de FSRS do Anki](https://docs.ankiweb.net/deck-options.html#fsrs) vão além. Retenção desejada e parâmetros podem ficar ligados a predefinições, o otimizador embutido consegue ajustar parâmetros ao histórico de revisões, e o simulador estima revisões ou minutos de estudo com configurações diferentes. O Anki também registra quatro resultados: Again, Hard, Good e Easy.

Esses botões a mais só ajudam se você usar todos com constância. O manual do Anki trata Hard como acerto. Apertar Hard quando você esqueceu a resposta passa a informação errada para o FSRS e pode gerar intervalos longos demais.

Escolha a revisão binária do Mochi se acertou/errou deixa a sessão mais clara. Escolha o Anki se você quer o sinal extra de cada nota e vai usar o otimizador, os controles de retenção, as predefinições ou o simulador de carga. Se o que interessa é o agendador e não os apps, vale comparar o FSRS com o SM-2.

## O preço do Mochi e o do Anki resolvem custos diferentes

Para estudar num único computador, os dois apps podem sair de graça. O custo aparece em outro lugar quando entram mais dispositivos no fluxo.

O Mochi cobra **US$ 5 por mês** pela sincronização Pro e a junta com publicação, campos dinâmicos, integração com IA e suporte. Os apps de desktop do Anki são gratuitos, e o [site oficial do Anki](https://apps.ankiweb.net/) descreve a sincronização pelo AnkiWeb como gratuita. O AnkiMobile é o app oficial pago para iPhone e iPad; o AnkiDroid é um cliente Android gratuito, desenvolvido de forma independente.

Então "qual é mais barato?" depende dos seus aparelhos:

- um computador: os dois podem ser grátis;
- vários computadores ou aparelhos Android: a sincronização hospedada gratuita do Anki evita uma assinatura;
- iPhone ou iPad: o Anki soma uma compra única do app, enquanto o Mochi deixa a sincronização entre dispositivos atrás do plano Pro recorrente;
- quem usa Mochi e já quer a publicação, os campos dinâmicos ou a integração com IA pode ver a sincronização como uma parte do pacote, não como o custo inteiro.

Confira a App Store da sua região antes de comparar os totais exatos no iOS. Esta análise não congela um preço de loja que varia de mercado para mercado.

## Hospedagem do Mochi não é a mesma coisa que uso local-first

Três rótulos costumam virar um só:

- **Local-first** quer dizer que a cópia de trabalho fica no seu aparelho e o app continua funcionando sem o serviço na nuvem.
- **Código aberto** quer dizer que o código-fonte está disponível sob uma licença que permite inspecionar e modificar.
- **Auto-hospedado** quer dizer que o produto documenta uma forma oficialmente suportada de rodar o serviço na sua própria infraestrutura.

O Mochi documenta com clareza o comportamento local-first. Ele não apresenta o app principal como código aberto: o link "Open source" no rodapé do site público leva a [uma coleção de integrações](https://github.com/mochi-cards/open-source), não à aplicação principal. O site oficial também não documenta um substituto auto-hospedado e suportado para a sincronização Pro.

Se você procura por **hospedagem do Mochi** porque quer o seu próprio servidor, o limite é esse: dá para manter os dados locais e backups nativos, mas o caminho documentado para vários dispositivos é o Mochi Pro. Local-first é um controle útil sobre os dados; não é auto-hospedagem.

O repositório principal do Anki tem [licença AGPL versão 3 ou posterior](https://github.com/ankitects/anki/blob/main/LICENSE), com exceções listadas para alguns componentes. O manual oficial também documenta um [servidor de sincronização auto-hospedado](https://docs.ankiweb.net/sync-server.html) para usuários avançados. Esse servidor substitui a sincronização do AnkiWeb em clientes compatíveis; não é uma cópia auto-hospedada do site AnkiWeb, e o Anki espera que quem o administra resolva questões de linha de comando, rede, firewall, protocolo e atualização.

## O que uma importação do Anki mantém e o que ela muda

A [documentação de importação](https://mochi.cards/docs/import-and-export/importing/) do Mochi aceita arquivos `.apkg` do Anki, incluindo o histórico de revisões. Só que "importado" e "equivalente" não são o mesmo resultado.

Durante a importação, o Mochi converte HTML em Markdown e remove CSS e JavaScript. É uma conversão de formato entre dois modelos de cartão diferentes. Material simples de frente e verso é o caso mais fácil. Um cartão que depende de estilo, lógica de template, resposta digitada ou JavaScript precisa ser conferido depois da importação.

O histórico de revisões também depende de uma escolha explícita na exportação. O [manual de exportação](https://docs.ankiweb.net/exporting.html) do Anki diz que **Include Scheduling Information** controla se o histórico entra no pacote. Se você deixar a opção desligada, o Mochi não tem como recuperar um histórico que nunca esteve no `.apkg`.

Mesmo quando o histórico chega, não espere as mesmas datas futuras. Os dois apps podem usar agendadores, notas de revisão, retenção desejada, parâmetros, passos de aprendizado e ajustes de baralho diferentes. Os eventos preservados dão evidência ao novo agendador; não deixam os sistemas idênticos.

## Backups nativos e texto portátil cumprem funções diferentes

Antes de mover qualquer coisa, guarde um backup capaz de restaurar o sistema original. Uma exportação legível é útil, mas nem sempre serve para restaurar.

O [guia de backup](https://mochi.cards/docs/getting-started/backing-up/) do Mochi documenta duas opções nativas de segurança:

- Copiar o diretório de usuário inteiro preserva conteúdo, histórico de revisões, anexos, ajustes do app e o estado de login.
- Uma exportação `.mochi` preserva baralhos, cartões, templates e campos, anexos, tags e metadados, histórico de revisões, ordem dos cartões e estrutura dos baralhos.

As [exportações para Markdown e CSV](https://mochi.cards/docs/import-and-export/exporting/) do Mochi são formatos de portabilidade. O Markdown cria um arquivo por cartão e pastas para os sub-baralhos, mas descarta histórico de revisões, ordem dos cartões, templates e tags de metadados, a não ser que as tags estejam no próprio Markdown. O CSV exporta os campos do template ou os lados de frente e verso já renderizados, porém não preserva histórico de revisões, templates nem tags de metadados, a não ser que estejam embutidos no conteúdo.

O Anki faz uma distinção parecida:

- Um `.colpkg` exporta a coleção inteira com o agendamento e pode incluir mídia. Importar esse arquivo substitui os cartões da coleção de destino no Anki.
- Um `.apkg` exporta um baralho e seus sub-baralhos, com opções para informação de agendamento, predefinições e mídia.
- Notas em texto puro usam campos separados por tabulação com a formatação HTML embutida. Elas preservam o conteúdo editável, não o comportamento completo da coleção.

Voltar do Mochi para o Anki normalmente significa CSV. O Anki consegue [mapear colunas de texto para campos de nota](https://docs.ankiweb.net/importing/text-files.html), mas os links do Mochi, o comportamento de vários lados, os templates e o histórico de revisões não viram objetos equivalentes do Anki por esse arquivo. Guarde a exportação `.mochi` depois que a cópia no Anki parecer certa.

## Faça um teste reversível com um baralho representativo

Uma janela de migração prova que o arquivo foi aceito. Ela não prova que a sua coleção real continua funcionando, nem que você consegue trazer conteúdo aproveitável de volta. Teste os dois sentidos com o seu perfil normal do Anki intocado.

1. **Faça backup do Anki inteiro.** Exporte um `.colpkg` com mídia e guarde fora do perfil de trabalho.
2. **Prove que o backup abre.** Crie um perfil temporário vazio no Anki e importe o `.colpkg` ali. A importação de um pacote de coleção substitui a coleção de destino, e é por isso que o perfil temporário importa.
3. **Monte um baralho representativo dentro desse perfil temporário.** Deixe pequeno o bastante para conferir cartão por cartão, mas inclua os recursos dos quais você depende: cartões básicos e invertidos, cloze, templates personalizados, CSS, JavaScript, imagens, áudio, equações, tags, baralhos aninhados e histórico de revisões.
4. **Exporte esse baralho como `.apkg`.** Inclua informação de agendamento, predefinições e mídia quando isso importar. Essas opções colocam os dados no pacote do Anki; elas não prometem que o Mochi vai reproduzir cada ajuste.
5. **Importe num baralho novo do Mochi.** Mantenha o perfil de Anki do dia a dia e a fila de pendentes sem mudanças.
6. **Confira antes de revisar.** Compare conteúdo, formatação, campos, mídia, tags, estrutura dos baralhos e histórico. Olhe com atenção redobrada tudo o que dependia de HTML, CSS, JavaScript ou variantes de cartões geradas.
7. **Escolha o agendador de propósito.** O Mochi começa com o algoritmo próprio. Ligue o FSRS só se for esse o que você pretende usar depois do teste.
8. **Revise a cópia por uma semana normal.** Julgue o fluxo de edição em Markdown, a etapa New cards, a decisão Remembered/Forgot, o comportamento offline e, se você pagou por ela, a sincronização nos aparelhos que você de fato carrega.
9. **Teste o caminho de volta.** Exporte o baralho de teste do Mochi como `.mochi` para ter um backup nativo e como CSV para o Anki. Use o CSV com valores de campo quando os campos reutilizáveis importarem; use o CSV com os lados renderizados quando você precisar principalmente do conteúdo visível de frente e verso. Importe esse CSV em outro perfil vazio do Anki e mapeie as colunas para um tipo de nota adequado.
10. **Anote cada perda que você aceitou.** Confira o caminho de ida e o de volta separadamente. Estilo exato, comportamento de vários lados, comportamento de add-ons, variantes geradas, notas de revisão, histórico ou datas futuras podem pesar mais no uso diário do que pesavam numa tabela comparativa.

A volta por CSV é uma migração de conteúdo, não uma restauração completa do Mochi: ela não leva histórico de revisões, templates nem tags de metadados, a não ser que essas tags estejam embutidas no conteúdo. Se o Mochi não resolver o problema que você apontou, apague o baralho de teste e siga com o perfil original do Anki. Se resolver, migre um baralho real por vez e guarde os backups `.colpkg` do Anki e `.mochi` do Mochi por vários ciclos normais de revisão.

## Quem deveria usar os flashcards do Mochi?

O Mochi cai bem quando:

- o Markdown já é o jeito como você escreve e pensa;
- notas e cartões de revisão pertencem ao mesmo espaço de trabalho ligado entre si;
- você quer a decisão curta Remembered/Forgot em vez de quatro notas;
- o uso offline em um aparelho cobre o fluxo gratuito, ou a sincronização Pro vale os US$ 5 por mês;
- a sua coleção é nova ou simples o bastante para que a conversão a partir do Anki tenha pouco risco.

Fique com o Anki quando:

- os seus tipos de nota geram várias variantes de cartão importantes;
- templates HTML/CSS, JavaScript, add-ons ou baralhos compartilhados fazem parte do sistema;
- a sincronização gratuita entre dispositivos importa mais do que escrever em Markdown;
- você quer o otimizador de FSRS do Anki, os controles de predefinição, as quatro notas e o simulador de carga;
- anos de dados de revisão e comportamentos personalizados já funcionam bem.

A alternativa ao Mochi mais sensata depende do motivo pelo qual nenhuma das duas serve. Para uma coleção nova e mais simples, os [recursos do Nibomo](/features/) incluem revisões com FSRS, estudo offline e sincronização, transferência portátil de cartões, tags e mídia, acesso para agentes e um caminho de auto-hospedagem documentado. Eu o desenvolvo, e os limites vêm ao caso: ele não substitui o caderno Markdown conectado do Mochi nem o sistema maduro de templates e add-ons do Anki. O [guia de primeiros passos](/docs/getting-started/) mostra os caminhos atuais: hospedado, celular, agentes e auto-hospedagem.

## Resumindo

O Mochi é mais do que uma interface mais bonita para o Anki. A ideia de verdade por trás dele é que uma nota em Markdown, um registro de conhecimento ligado a outros e um cartão de repetição espaçada podem ser o mesmo objeto. O plano gratuito cobre o trabalho offline sem conta; o Pro adiciona os recursos hospedados, incluindo a sincronização entre dispositivos.

É uma boa troca para quem está começando uma coleção nova centrada em Markdown. Também pode valer a troca a partir do Anki se o teste com um baralho representativo provar que o Markdown nativo e as revisões binárias tiram atrito real do caminho.

Para quem já tem uma coleção consolidada no Anki, o ônus da prova corre no sentido contrário. Faça backup da coleção, teste os cartões que carregam mais comportamento personalizado e fique com o Anki, a menos que o Mochi melhore a rotina semana a semana o bastante para compensar os recursos específicos de formatação, template, agendador e ecossistema que ficam para trás.
