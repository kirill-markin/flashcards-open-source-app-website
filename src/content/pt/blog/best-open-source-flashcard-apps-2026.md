---
title: "As melhores apps de flashcards de código aberto em 2026: 6 opções FOSS comparadas"
description: "Compare seis apps de flashcards de código aberto ativas por cobertura do código, dados offline, sincronização, importação do Anki, exportação, auto-hospedagem e recuperação."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "melhores apps de flashcards de código aberto"
  - "app de flashcards de código aberto"
  - "repetição espaçada de código aberto"
  - "flashcards auto-hospedados"
  - "app de flashcards offline"
  - "alternativa de código aberto ao Anki"
  - "flashcards FOSS"
---

O Anki ainda é o melhor app de flashcards de código aberto para a maioria das pessoas em 2026. A parte interessante começa quando “código aberto” não é a sua única exigência inegociável.

Talvez você precise de um app de navegador no seu próprio servidor. Ou de um baralho que dá para ler como Markdown puro. Ou de um sistema privado de notas que cria flashcards. Cada exigência aponta para um produto diferente, e um repositório público no GitHub não resolve a escolha.

Um cliente de desktop aberto pode conviver com um app de iPhone fechado. Um contêiner Docker pode hospedar uma interface web sem sincronizar os clientes nativos. Uma importação pode recuperar o texto e, ao mesmo tempo, perder os modelos, as mídias e os anos de histórico de revisões que davam valor à coleção.

Seis projetos passaram nessa análise. Comparei o código licenciado, a última versão estável, os dados locais, o agendador, a sincronização, a migração do Anki, a exportação e o que exatamente dá para auto-hospedar em cada um. Esse último limite importa mais do que a maioria das listas de recursos admite.

> **Divulgação:** eu sou Kirill Markin e desenvolvo o [Nibomo](https://nibomo.com/), um dos seis apps desta lista. O repositório MIT dele cobre o app web, os clientes nativos, o backend, a sincronização e a infraestrutura. Não o coloquei em primeiro lugar. O Anki é a escolha mais segura, o Mnemosyne tem um caminho de migração do Anki mais consolidado e várias opções daqui são bem mais fáceis de operar.

**Fatos verificados:** 5 de setembro de 2026. As versões estáveis estão separadas do trabalho que existe apenas em uma branch padrão.

![Um caminhante compara seis mochilas abertas e testa um kit reserva antes de escolher um app de flashcards de código aberto](/blog/best-open-source-flashcard-apps-2026-v2.png)

## A resposta curta

| Sua exigência principal | Melhor opção | Por quê | O detalhe para testar primeiro |
| --- | --- | --- | --- |
| Um sistema geral confiável ou uma coleção complexa que já existe | [Anki](https://apps.ankiweb.net/) | Cartões e modelos maduros, FSRS, complementos, muitos clientes e exportações completas em pacote | O app oficial de iOS e o AnkiWeb não fazem parte do código aberto do desktop; a auto-hospedagem dá sincronização, não o AnkiWeb |
| Uma alternativa de desktop focada, com importação consolidada do Anki | [Mnemosyne](https://mnemosyne-proj.org/) | Estudo local, importação de tipos de cartão e dados de aprendizado do Anki, e um servidor de sincronização que você mesmo roda | A versão 2.11 ainda é a última estável; no Android dá para revisar, mas não editar |
| Notas e flashcards dentro de uma mesma base de conhecimento local | [SiYuan](https://b3log.org/siyuan/en/) | Apps nativos offline, FSRS integrado e um app de navegador de verdade hospedado com Docker | Os clientes Docker não sincronizam com os apps nativos, e vários comandos de importação e exportação não existem no Docker |
| Código para a web, o celular, o backend e a infraestrutura | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Um único monorepo MIT com implantação de produção documentada | A stack de produção com suporte é centrada na AWS, e a migração do Anki tem perdas |
| Um app de desktop mais novo, local-first e com importação direta de APKG | [Recall](https://github.com/Madlezz/Recall) | FSRS, builds para desktop, um PWA, bancos de dados locais e um relay criptografado opcional | A importação guarda só um retrato do agendamento, usa os dois primeiros campos da nota e ignora o áudio |
| Baralhos em Markdown legível, sem depender da rede | [Essentialist](https://github.com/essentialist-app/essentialist) | Arquivos de baralho puros e um app de desktop/Android feito de propósito para ficar offline | Não há sincronização, e o progresso fica em um banco de dados oculto separado |

Isso não é uma nota por recursos. Comece pela falha que você não pode aceitar. Se você tem dez anos de revisões no Anki, a fidelidade da migração importa mais do que uma interface mais limpa. Se você cuida de uma implantação escolar, o acesso pelo navegador e uma restauração comprovada podem importar mais do que os complementos.

## O que contou como app de flashcards de código aberto

Usei quatro critérios:

1. **A experiência principal de estudo tem código publicado e uma licença de código aberto explícita.** Um diretório de integrações em volta de um núcleo não publicado não conta.
2. **A repetição espaçada funciona hoje.** Um item no roteiro ou um modo genérico de quiz não bastam.
3. **Existe uma build publicada ou uma implantação oficial bem documentada.** Commits recentes sozinhos não transformam um protótipo em uma recomendação segura.
4. **As fontes oficiais mostram o limite dos dados com detalhe suficiente para auditar.** Eu precisava de respostas concretas sobre armazenamento offline, sincronização, importação/exportação ou hospedagem — não de uma promessa vaga de que os usuários “são donos dos seus dados”.

Estrelas não foram um critério de corte. Elas premiam idade e visibilidade tanto quanto o encaixe do produto. Ainda assim, maturidade conta. Anki, Mnemosyne e SiYuan têm versões e modelos de operação consolidados. Recall e Essentialist entraram em lugares mais estreitos porque o comportamento publicado deles está documentado o bastante para uma recomendação específica.

“Mantido” também pede duas checagens. Uma versão com tag mostra o que os usuários podem instalar; a branch padrão mostra para onde o projeto vai. O Essentialist é o exemplo mais claro. A versão estável dele documenta SM-2, enquanto a branch atual documenta FSRS. A tabela abaixo registra SM-2.

## Seis apps de flashcards FOSS comparados

| App | Versão estável verificada | Plataformas | Dados offline | Agendador | Sincronização | Migração do Anki e caminho de saída | Superfície auto-hospedada |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 de agosto de 2026 | Windows, macOS, Linux; clientes separados para Android e iOS; AnkiWeb | Os clientes instalados estudam a partir de coleções locais | FSRS ou o antigo SM-2 | AnkiWeb ou o servidor oficial de sincronização auto-hospedado | Importa texto, APKG/COLPKG e bancos de dados do Mnemosyne; exporta texto ou pacotes com mídia e agendamento selecionáveis | **Só o servidor de sincronização.** Sem AnkiWeb auto-hospedado nem interface de estudo no navegador |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 de novembro de 2023; o repositório seguiu ativo em 2026 | Windows, macOS, Linux, Android; revisão limitada pelo navegador | O desktop é local; o Android revisa offline, mas não edita | Avaliação adaptativa de lembrança de 0 a 5 | Sincronização integrada com uma instância de desktop ou sem interface gráfica | A documentação oficial descreve importação completa do Anki, com tipos de cartão personalizados e dados de aprendizado; a exportação para compartilhar não é um backup completo | **Sincronização mais revisão limitada no navegador.** O servidor de navegador não tem recursos de segurança |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 de agosto de 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; navegador via Docker | Os clientes nativos guardam o espaço de trabalho localmente | FSRS | Sincronização oficial E2EE paga ou integração paga com S3/WebDAV de terceiros | O app geral importa Markdown e dados e exporta vários formatos de documento e de dados; não há importador de APKG documentado | **App de navegador completo.** O Docker não sincroniza os clientes nativos e remove alguns comandos de importação e exportação |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 de setembro de 2026 | Web, iOS, Android | IndexedDB na web; SQLite no iOS; Room sobre SQLite no Android; as escritas locais entram em fila para a sincronização | FSRS | Backend hospedado ou implantado pelo operador | O ZIP próprio leva cartões, tags, metadados de origem e mídias referenciadas, mas não baralhos, estado de aprendizado, configurações ou contas; sem importador de APKG | **Stack web/backend completa.** A implantação de produção é centrada na AWS; builds nativos privados vão à parte |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 de julho de 2026 | Windows, macOS, Linux; PWA instalável | SQLite no desktop; IndexedDB no navegador; sem conta e sem telemetria por padrão | FSRS | Sincronização por pasta no desktop ou um relay criptografado opcional com Cloudflare Worker/R2 | A importação de APKG no desktop lê os dois primeiros campos, os baralhos, as tags, um retrato aproximado do agendamento e as imagens; exporta JSON e arquivos do Recall | **Só um relay de retratos criptografados.** Ele não hospeda o PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 de outubro de 2025; o código seguiu ativo em 2026 | APK para Android, DMG para macOS, Flatpak para Linux; Windows a partir do código | Sem acesso à rede; o conteúdo do baralho é Markdown | Versão estável: SM-2; branch padrão: FSRS | Nenhuma | O Markdown preserva o conteúdo dos cartões; um banco de dados oculto ao lado preserva o progresso | **Nada para hospedar.** Faça backup do arquivo Markdown junto com o banco que fica ao lado dele |

## 1. O Anki é o padrão mais seguro

O Anki ganha nas partes sem glamour. Ele consegue representar tipos de nota complexos, gerar cartões irmãos a partir de modelos, manter as mídias junto com a coleção e carregar anos de dados de agendamento. A versão estável de desktop usada nesta auditoria é a [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). A build mais nova, a 26.09b2, está marcada como beta, então não é a referência aqui.

O limite do código aberto é misto. O [repositório de desktop usa AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), com exceções listadas para os componentes empacotados. O [AnkiDroid](https://github.com/ankidroid/Anki-Android) é um projeto Android de código aberto separado. O AnkiMobile e o AnkiWeb são superfícies oficiais, mas o código deles não está nesses repositórios. Ou seja: o Anki é de código aberto por partes, não como um produto inteiro.

Os clientes instalados guardam coleções locais, então a revisão comum funciona sem conexão. O AnkiWeb é a superfície online. Se o comportamento offline for o fator decisivo, vale separar o que fica no aparelho do que só acontece na sincronização.

O Anki suporta [FSRS e o agendador mais antigo](https://docs.ankiweb.net/deck-options.html). Os formatos de exportação dele são o melhor ponto de partida para migrar dentro deste grupo. Um [COLPKG contém a coleção inteira com o agendamento](https://docs.ankiweb.net/exporting.html), enquanto as exportações APKG podem incluir informação de agendamento e mídias quando você seleciona essas opções. O Anki também importa texto, pacotes do Anki e bancos de dados do Mnemosyne 2.0.

Esse pacote de origem tão completo não promete uma importação perfeita em outro lugar. O destino ainda precisa entender os modelos, as regras de geração de cartões, as referências de mídia e os campos do agendador que estão lá dentro. Ele simplesmente tem mais informação para trabalhar do que um arquivo CSV.

O [servidor oficial auto-hospedado](https://docs.ankiweb.net/sync-server.html) é pequeno de propósito. Ele sincroniza clientes Anki compatíveis; não oferece AnkiWeb, revisão pelo navegador nem um portal de contas. Por padrão, ele escuta em HTTP sem criptografia, e o guia recomenda mantê-lo em rede local ou colocar uma VPN ou um proxy reverso HTTPS na frente. As versões de cliente e de servidor também precisam continuar compatíveis.

Escolha o Anki quando fidelidade da coleção, modelos, complementos ou suporte amplo de clientes vierem primeiro. Procure outra coisa só quando um limite específico — como uma interface web auto-hospedada ou uma stack móvel publicada por inteiro — pesar mais.

## 2. O Mnemosyne mantém o estudo local no foco

O Mnemosyne parece uma ferramenta de estudo de desktop porque é exatamente isso. Ele não traz junto uma base de conhecimento nem uma plataforma na nuvem. Você ganha um banco de dados local, um fluxo tradicional de repetição espaçada, um companheiro de revisão no Android e um servidor de sincronização que roda num desktop ou numa máquina sem interface gráfica.

A última versão estável ainda é a [2.11, de novembro de 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). O repositório recebeu mudanças em 2026, mas isso não transforma essas mudanças em um instalador estável. Teste a 2.11 nos sistemas operacionais que você pretende manter pelos próximos anos.

A licença também precisa de mais de um selo. O [mapa de licenças na raiz](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) atribui LGPL v3 ao openSM2sync e termos separados ao resto do Mnemosyne. A [licença do programa principal](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) aplica AGPL v3 mais uma cláusula extra que exige manter o nome Mnemosyne bem visível em trabalhos derivados, com a forma exata combinada com quem mantém o projeto. Leia esse texto antes de redistribuir uma build modificada.

O [cliente Android revisa offline, mas não edita cartões](https://mnemosyne-proj.org/help/android-client). Outros aparelhos podem usar um servidor de revisão no navegador iniciado pelo app de desktop, mas a página oficial de recursos avisa que esse servidor não tem recursos de segurança. É uma interface prática para a rede local, não uma aplicação web pública bem acabada.

A migração é o melhor argumento do Mnemosyne contra simplesmente ficar no Anki. A página oficial de recursos documenta a [importação completa do Anki, incluindo tipos de cartão personalizados e dados de aprendizado](https://mnemosyne-proj.org/features). A [sincronização integrada](https://mnemosyne-proj.org/help/syncing) junta cartões e dados de aprendizado e pode apontar para uma máquina que você controla.

O comando normal de exportação é uma armadilha para backups. Ele foi feito para compartilhar cartões selecionados e deixa de fora os seus dados de aprendizado. Para mover ou recuperar o sistema completo, o [guia de vários computadores](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) manda copiar o diretório de dados inteiro.

O Mnemosyne é a alternativa ao Anki de código aberto mais forte entre as focadas em estudo. A troca é um ritmo lento de versões estáveis, edição limitada no celular e uma superfície de navegador que exige cuidado com o limite da rede.

## 3. O SiYuan funciona quando as notas são o sistema de verdade

O SiYuan é um aplicativo de gestão de conhecimento com privacidade em primeiro lugar, com flashcards embutidos no mesmo modelo de blocos e documentos. Isso ajuda quando as suas notas criam o material de revisão. É maquinário demais quando você só quer uma fila de cartões.

O [repositório AGPL-3.0](https://github.com/siyuan-note/siyuan) reúne a interface, o kernel, os apps móveis, a camada de dados e o componente FSRS. A versão [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) é a estável verificada aqui. Os clientes de desktop e de celular guardam o espaço de trabalho localmente e continuam funcionando offline.

A sincronização não faz parte do nível gratuito de armazenamento local. A [página oficial de preços](https://b3log.org/siyuan/en/pricing.html) oferece a sincronização oficial com criptografia de ponta a ponta na assinatura, enquanto os recursos Pro pagos adicionam integrações com o seu próprio armazenamento S3 ou WebDAV. O projeto também alerta contra colocar um espaço de trabalho ativo numa pasta genérica de sincronização de arquivos, porque edições simultâneas podem corromper ou sobrescrever dados.

O Docker roda uma aplicação de navegador de verdade, mas não vira um servidor de sincronização para os apps instalados. A [documentação Docker da v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) diz que os clientes de desktop e de celular não conseguem se conectar a ela. O Docker também remove a importação de Markdown e a exportação para PDF, HTML e Word. Esses comandos existem no aplicativo nativo mais amplo, então copiar a lista geral de recursos para um plano de implantação com Docker levaria a conclusões erradas.

Não encontrei nenhum importador oficial de APKG. O SiYuan consegue mover Markdown e os formatos de dados dele, mas uma coleção do Anki exige uma reconstrução mais deliberada.

Escolha o SiYuan quando a base de conhecimento for o produto principal e os flashcards pertencerem a ela. Se você quer um substituto direto do Anki, Mnemosyne e Anki têm limites de migração mais claros.

## 4. O Nibomo expõe mais da stack — e pede que você a opere

O Nibomo publica o limite de produto mais largo desta comparação. O monorepo MIT inclui o app web, os clientes iOS e Android, o backend, o serviço de autenticação, a sincronização, o app de administração, as migrações de banco de dados e a infraestrutura AWS. A versão estável usada aqui é a [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). O trabalho posterior na branch padrão não conta como comportamento publicado.

A [arquitetura](/docs/architecture/) é offline-first, mas “offline” significa algo um pouco diferente em cada cliente. O app web mantém a fonte da verdade local no IndexedDB. O iOS usa SQLite, e o Android usa Room sobre SQLite. As mudanças são escritas localmente e entram numa fila de saída antes da sincronização. Esse desenho lida com uma conexão interrompida; ele não torna o armazenamento do navegador permanente nem elimina a necessidade de testar uma partida a frio em cada aparelho.

O pacote ZIP do Nibomo é um formato de transferência de conteúdo, não um backup de conta. Na v1.23.0, o [esquema do pacote](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) carrega o conteúdo da frente e do verso, tags, tipo de cartão, metadados de origem e metadados do pacote; as mídias referenciadas vão empacotadas à parte. Ele não carrega estrutura de baralhos, histórico de revisões, estado do FSRS, configurações do espaço de trabalho nem contas.

Não existe importador de APKG na v1.23.0. O fluxo documentado de migração do Anki por TXT/CSV usa o texto exportado para reconstruir os cartões e exige uma revisão humana. Modelos, estado de agendamento, estrutura de baralhos e mídias empacotadas não sobrevivem a esse caminho automaticamente. É razoável para um baralho simples de texto e uma escolha ruim para uma coleção muito personalizada.

O [guia de auto-hospedagem](/docs/self-hosting/) é igualmente explícito. A produção usa uma stack AWS CDK com RDS, Cognito, API Gateway e Lambda, S3 e CloudFront, segredos, alarmes e backups. O DNS da Cloudflare, o e-mail da Resend e a configuração do Sentry ficam fora da AWS. O Docker Compose roda o desenvolvimento local; ele não é o pacote de produção com suporte. Quem quiser binários privados de iOS ou Android compila e distribui isso à parte.

Escolha o Nibomo quando ter o limite completo de código da web, dos apps nativos e do backend justificar esse trabalho de operação. Escolha Anki ou Mnemosyne quando preservar uma coleção existente for a exigência mais difícil.

## 5. O Recall é moderno, mas leia o importador com atenção

O Recall é a recomendação principal mais jovem. Ele entrou na lista porque a [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) oferece builds de desktop versionados, um PWA instalável, armazenamento local explícito, FSRS, exportações de dados e um desenho documentado de sincronização auto-hospedada.

O app de desktop com licença MIT usa SQLite; o PWA usa IndexedDB. Nenhum dos dois precisa de conta, e o projeto diz que a telemetria vem desligada por padrão. As versões de desktop cobrem Windows, macOS e Linux.

O importador de APKG é útil, mas a expressão “histórico de revisões” do README é generosa demais para a implementação com tag. O [código do importador da v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) não lê o registro de revisões do Anki. Ele lê o estado atual do cartão, o intervalo, as contagens de repetições e de lapsos, mais a estabilidade e a dificuldade do FSRS quando o Anki as guardou. Para cartões antigos sem esses campos do FSRS, o Recall os estima a partir dos valores de SM-2.

A conversão do conteúdo também tem arestas. O importador usa os dois primeiros campos da nota como frente e verso, em vez de reproduzir os tipos de nota e os modelos do Anki. Ele mantém os nomes dos baralhos e as tags. Extrai os formatos de imagem comuns e reescreve as referências deles, mas ignora áudio e outras mídias. Como o importador é um comando Tauri, a migração direta de APKG é um recurso do desktop, não do PWA no navegador.

Isso é bem melhor do que uma reconstrução em texto puro, mas não é fidelidade de coleção. Teste clozes, cartões irmãos, campos extras, HTML/CSS, imagens, áudio, datas de vencimento e notas repetidas antes de confiar uma mudança grande.

O Recall tem dois caminhos de sincronização. O desktop pode escrever um retrato numa pasta gerenciada pelo Dropbox, pelo Drive ou por outra ferramenta de sincronização de arquivos. O relay opcional usa um Cloudflare Worker e um bucket R2. Segundo o [desenho de sincronização](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) da versão com tag, os clientes criptografam os retratos com AES-GCM antes do upload; o relay vê texto cifrado, não os dados dos cartões nem a chave. As atualizações usam concorrência otimista e repetem um conflito, mas ainda assim mesclam retratos completos, e não campos. Não existe um relay público bancado por quem mantém o projeto — você implanta o seu e informa a URL.

As exportações em JSON e no formato de arquivo do Recall dão um caminho de saída. Restaure uma delas num perfil limpo antes de chamar isso de backup.

Escolha o Recall quando você quiser uma experiência moderna de desktop/PWA local-first e puder aceitar um projeto jovem com um importador que preserva um retrato útil, e não o sistema inteiro do Anki.

## 6. O Essentialist deixa o baralho fácil de ler, não o estado inteiro

O Essentialist tem o menor limite da lista. Cada baralho é um arquivo Markdown que você pode abrir num editor de texto, manter sob controle de versão ou copiar com ferramentas de arquivo comuns. O aplicativo não faz nenhuma requisição de rede, de propósito.

A última versão estável é a [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Os arquivos dela incluem builds para Android, macOS e Linux; no Windows você compila a partir do código. O [README da versão com tag](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) identifica o SM-2 como agendador.

O [README da branch padrão](https://github.com/essentialist-app/essentialist/blob/main/README.md) agora identifica o FSRS, e o repositório recebeu mudanças de código em 2026. Isso é uma direção útil, não um motivo para rotular o binário de 2025 como FSRS.

O Markdown também cobre menos do que parece à primeira vista. O texto dos cartões fica no arquivo visível, enquanto o progresso fica num banco de dados oculto chamado `.<deck file>.db`. Copiar `sample.md` sem `.sample.md.db` salva as perguntas e respostas, mas perde o estado de aprendizado.

Não há sincronização entre aparelhos nem servidor embutidos. Você pode colocar os arquivos na sua própria pasta sincronizada, mas aí a resolução de conflitos e a recuperação viram problema seu.

Escolha o Essentialist quando Markdown legível e um fluxo sem rede forem o ponto. Ele não é um sistema multiaparelho sem atrito, e um arquivo visível não é um backup completo.

## Quatro projetos ativos que vale acompanhar

Esses projetos têm trabalho real de 2026 por trás. Eles ficam fora dos seis principais porque uma recomendação precisa de mais do que código interessante.

| Projeto | O que já é concreto | O que ainda impede uma recomendação na lista principal |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Código AGPL, agendadores FSRS/SM-2/Leitner, implantação com Docker, um serviço gerenciado, importação de CSV e exportação de dados | Criado em julho de 2026; sem nenhuma versão publicada do aplicativo. O release no GitHub é um pacote de áudio, não um marco do app |
| [Openlet](https://github.com/ChloeVPin/openlet) | App web MIT com FSRS, importação de CSV, oclusão de imagem e uma arquitetura Supabase/Vercel documentada | Sem versão com tag, e a documentação oficial ainda não define um limite completo de uso offline, exportação e recuperação em auto-hospedagem |
| [Prep](https://github.com/Zamua/prep-app) | Código MIT, FSRS, uso hospedado e uma implantação documentada sobre o runtime celld, que pode ser auto-hospedado | Sem versão com tag; auto-hospedar também significa operar o celld e o armazenamento de objetos, não implantar um binário de flashcards independente |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | App móvel Kotlin com GPLv3, FSRS/SM-2, uma versão para Android e importação de APKG com modelos e mídias | Criado em 2026; o iOS exige compilar a partir do código, e a documentação oficial não define uma sincronização geral entre celulares |

Vários nomes conhecidos ficam de fora por motivos mais simples. O [repositório de código aberto](https://github.com/mochi-cards/open-source) do Mochi é uma coleção de integrações, não o aplicativo principal. O [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) é de código aberto e auto-hospedável, mas o README oficial ainda coloca a repetição espaçada em “Features coming soon”. O [OpenCards](https://github.com/holgerbrandl/opencards) não publica uma versão desde a [v2.5.1, de janeiro de 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), e o repositório dele não recebe mudança de código desde 2018.

Se o acesso ao código for opcional, a [comparação mais ampla de alternativas ao Anki](/blog/best-anki-alternatives/) inclui produtos que respondem a outra pergunta.

## Teste a migração em cinco camadas separadas

“Importa do Anki” é quase inútil sem a frase seguinte. Uma migração pode dar certo em uma camada e falhar nas outras quatro.

| Camada | O que comparar | O sinal de sucesso enganoso |
| --- | --- | --- |
| Conteúdo do cartão | Cada campo, marcador de cloze, tag, caractere especial e nota repetida | O total de cartões ficou parecido |
| Estrutura | Tipos de nota, modelos, cartões irmãos gerados e baralhos aninhados | O texto da frente e do verso apareceu em algum lugar |
| Mídias | As imagens e o áudio foram copiados, abrem localmente e tocam offline | O importador reconheceu os nomes dos arquivos |
| Estado de aprendizado | Registro de revisões, estado, data de vencimento, intervalo, lapsos e parâmetros do agendador | Os cartões importados estão lá, mas recomeçam como novos sem avisar |
| Saída e recuperação | Uma exportação ou backup documentado consegue reconstruir o mesmo sistema em outro lugar | Uma exportação de texto legível é tratada como backup completo |

Monte um baralho de teste propositalmente difícil antes de mover a coleção real. Inclua campos extras, clozes, modelos de frente e verso, baralhos aninhados, tags, imagens, áudio e histórico de revisões suficiente para revelar se o destino guardou isso.

Guarde intocado o backup de origem. Depois de importar, compare notas, cartões e mídias separadamente. Inspecione as datas de vencimento em vez de confiar numa mensagem de “agendamento importado”. Revise offline em todo aparelho que você pretende usar. Depois crie edições conflitantes descartáveis em dois aparelhos e veja o que a sincronização faz.

Rode os dois sistemas por alguns dias. Apagar a coleção antiga é o último passo, não a prova de que a nova funcionou.

## A auto-hospedagem só está completa depois de uma restauração

Os produtos acima usam “auto-hospedado” para formatos bem diferentes:

- O Anki e o Mnemosyne rodam **serviços de sincronização**, enquanto os clientes instalados seguem sendo a interface de estudo.
- O SiYuan no Docker roda uma **aplicação de navegador** que os clientes nativos não conseguem usar como servidor de sincronização.
- O Recall roda um **relay de retratos criptografados**, não o PWA em si.
- O Nibomo implanta uma **stack completa de web e backend**, enquanto os apps nativos seguem como builds separados.
- O Essentialist **não tem servidor**; o limite de propriedade são os arquivos locais.

Quando essa superfície estiver clara, teste a parte que os operadores costumam adiar:

1. Crie cartões, anexe mídias, complete revisões e sincronize a partir de dois clientes.
2. Capture cada banco de dados, bucket de armazenamento de objetos, arquivo local, segredo e valor de configuração documentado.
3. Restaure em uma conta, máquina ou implantação isolada vazia.
4. Compare contagem de cartões, mídias, histórico de revisões, estado de vencimento, login e sincronização entre clientes.
5. Atualize a cópia restaurada e complete outro ciclo de revisão.

Se a reconstrução ainda depende da máquina antiga, você tem um serviço rodando. Você não tem um backup verificado.

## Perguntas frequentes

### Qual é o melhor app de flashcards de código aberto em 2026?

O Anki é o melhor padrão para a maioria de quem estuda. Ele combina um modelo de coleção maduro, FSRS, cobertura ampla de clientes e os formatos próprios de backup e exportação mais completos. A ressalva é que as superfícies oficiais de iOS e web não estão cobertas pelo repositório de código aberto do desktop, e o servidor auto-hospedado oferece sincronização, não estudo pelo navegador.

### Qual é a melhor alternativa de código aberto ao Anki?

O Mnemosyne é a alternativa focada mais consolidada e documenta oficialmente a importação de tipos de cartão personalizados e dados de aprendizado do Anki. O Recall parece mais moderno e importa arquivos APKG direto no desktop, mas converte os dois primeiros campos da nota, guarda só um retrato do agendamento, importa imagens e não áudio, e não leva o registro completo de revisões.

### Dá para auto-hospedar o Anki?

Sim, você pode rodar o servidor oficial de sincronização do Anki para clientes compatíveis. Não, ele não é um substituto auto-hospedado do AnkiWeb: não existe interface de estudo no navegador.

### Código aberto significa offline?

Não. Código aberto descreve licenciamento e acesso ao código. O comportamento offline depende de onde o cliente guarda os dados e de quais ações precisam de um serviço. O contrário também vale: um app pode guardar os dados localmente sem publicar o código do núcleo.

### A auto-hospedagem garante portabilidade?

Não. A auto-hospedagem controla onde um serviço roda. A portabilidade depende de exportações, backups completos e uma restauração que você testou de verdade. Um banco de dados no seu servidor ainda pode ser difícil de migrar, e um baralho Markdown legível ainda pode deixar de fora o estado de revisão guardado ao lado.

## Minha recomendação

Mantenha ou escolha o **Anki**, a menos que um dos limites dele cause um problema real. Prefira o **Mnemosyne** para estudo local focado no desktop, com importação consolidada do Anki. Use o **SiYuan** quando os flashcards pertencerem a uma base de conhecimento maior. Considere o **Nibomo** quando ter todo o código de web/nativo/backend justificar uma stack de produção na AWS. Escolha o **Recall** para um cliente moderno local-first depois de testar os limites de conversão dele. Escolha o **Essentialist** quando Markdown puro e zero acesso à rede importarem mais do que sincronização.

O melhor app de flashcards de código aberto não é o repositório com a lista de recursos mais longa. É aquele cujos limites de código, dados offline, migração, sincronização, hospedagem e recuperação combinam com o sistema que você está realmente disposto a manter.
