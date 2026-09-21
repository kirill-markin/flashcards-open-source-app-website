---
title: "App de flashcards auto-hospedado e de código aberto para repetição espaçada"
description: "Rode a stack de código aberto do Nibomo localmente para desenvolvimento ou implante sua infraestrutura documentada com AWS CDK para um app de repetição espaçada em produção."
date: "2026-03-08"
updated: "2026-07-30"
image: "/home/app-screens-showcase-pt.png"
keywords:
  - "app de flashcards de código aberto"
  - "app de flashcards auto-hospedado"
  - "app de repetição espaçada"
  - "alternativa ao Anki"
  - "alternativa ao Quizlet"
  - "flashcards com IA"
---

Sim, o Nibomo pode ser auto-hospedado. Todo o código da aplicação e da infraestrutura é de código aberto sob a licença MIT. Você pode rodar os serviços localmente para desenvolvimento ou implantar na AWS a stack de produção documentada do repositório. Se você não quer operar infraestrutura, o [app hospedado](https://app.nibomo.com/) continua disponível.

![Telas do Nibomo no celular para revisão, progresso, chat de IA e cartões](/home/app-screens-showcase-pt.png)

## O que dá para auto-hospedar

O repositório contém os serviços e a infraestrutura usados no sistema principal do Nibomo:

- o app web e o app admin
- a API de backend e o serviço de autenticação sem senha
- o schema do PostgreSQL, as migrações, a sincronização e o agendamento de revisões baseado em FSRS
- o servidor MCP e a Agent API voltada para máquinas
- a stack de AWS CDK para rede, banco de dados, autenticação, APIs, hospedagem web estática, segredos, backups, monitoramento e CI/CD

Ele também inclui os clientes nativos de iOS e Android. Esses apps são builds separados; implantar a stack da AWS não publica as suas próprias versões na App Store ou no Google Play.

Existem dois jeitos suportados de rodar a stack do lado servidor:

1. **Desenvolvimento local:** o Docker Compose sobe o PostgreSQL e o job de migração. Os scripts do repositório rodam os servidores de desenvolvimento de auth, backend, web e admin na própria máquina.
2. **Produção na AWS:** a stack de CDK incluída implanta a arquitetura AWS documentada e conecta seus domínios públicos pelo Cloudflare.

O Docker Compose não é uma implantação de produção em um comando. O caminho de produção é específico para AWS, e o projeto não promete uma infraestrutura neutra em relação a fornecedor.

## O que o repositório inclui hoje

Isso é bem mais que um editor de cartões avulso. O repositório atual inclui:

- um cliente web em React e um cliente admin
- clientes nativos em SwiftUI no iOS e em Jetpack Compose no Android
- armazenamento local offline-first e sincronização para os clientes de pessoas
- cartões com frente e verso, tags, mídias relacionadas e revisão com FSRS
- OTP por e-mail sem senha pelo Amazon Cognito e pelo serviço de autenticação
- chat de IA apoiado por um worker assíncrono implantado e credenciais de modelo fornecidas por quem opera
- um endpoint MCP para clientes de IA compatíveis
- uma Agent API para ferramentas de terminal e outros fluxos automatizados

A [documentação de arquitetura](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md) é a melhor fonte sobre os limites atuais entre os serviços. O [guia da API](/docs/api/) público explica o ponto de entrada da Agent API hospedada.

## Hospedado x auto-hospedado

| Área | App hospedado | Implantação auto-hospedada |
| --- | --- | --- |
| Configuração inicial | Abra o app e entre | Configure contas, segredos e domínios, e implante a stack da AWS |
| Infraestrutura | Operada pelo projeto Nibomo | Operada nas suas contas da AWS e do Cloudflare |
| Banco de dados e backups | Gerenciados para você | RDS, política de backup, migrações e recuperação são responsabilidade sua |
| Autenticação e e-mail | Gerenciados para você | Cognito mais suas credenciais de envio de e-mail e o DNS |
| IA | Usa a configuração do serviço hospedado | Usa o worker implantado e suas credenciais de modelo; o acesso de convidado tem uma cota separada |
| Monitoramento | Gerenciado para você | CloudWatch/SNS e sua configuração do Sentry |
| Atualizações | Entregues pelo serviço hospedado | Você baixa, valida, implanta e monitora as atualizações |
| Custo | Valem os termos do plano hospedado | Você paga direto os custos da AWS e de outros provedores |

Auto-hospedar dá a você o controle da implantação e do banco de dados. Também coloca nas suas mãos as atualizações de segurança, os segredos, a disponibilidade, os backups, a entrega de e-mail, o monitoramento e os custos de nuvem.

## Requisitos e início rápido local

O desenvolvimento local hoje precisa de Git, Bash, GNU Make, Docker com Docker Compose, Node.js 24 e npm. O arquivo do Compose incluído roda o PostgreSQL 18.4 e aplica as migrações do banco.

A partir da raiz do repositório:

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
npm install --prefix apps/admin
```

Para o começo mais curto, só local, rode o backend com o papel criado pela migração e habilite de forma explícita a autenticação local insegura:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Depois rode os clientes em terminais separados:

```bash
make web-dev
make admin-dev
```

Isso não sobe o serviço de autenticação do Cognito, de propósito. O [Guia de auto-hospedagem](/docs/self-hosting/) traz as URLs de banco separadas e os passos de carregamento de variáveis de ambiente para um fluxo completo com Cognito e `make auth-dev`. O app web roda em `http://localhost:3000`, o app admin em `http://localhost:3001`, o backend em `http://localhost:8080/v1` e a autenticação do Cognito, quando configurada, em `http://localhost:8081`.

Esse início rápido cobre o desenvolvimento do backend principal, do web e do admin. Ele não deixa o Chat V2 disponível: essas rotas não aceitam o transporte `AUTH_MODE=none`, e os comandos locais não sobem o worker assíncrono de chat.

Para produção, use o fluxo de primeira implantação do repositório em vez do Docker Compose:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

A instalação explícita do auth é necessária hoje em um checkout limpo porque o helper de implantação empacota esse pacote, mas não o instala. Depois disso o helper cria e altera recursos reais na nuvem. Leia o [guia de implantação do backend e do web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md) e o [guia de implantação com AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md) antes de rodá-lo.

## A portabilidade dos dados é útil, mas limitada de propósito

A importação e a exportação de pacotes do Nibomo cobrem os cartões, suas tags e as mídias relacionadas. Elas **não** transferem o histórico de revisões, o estado do agendador FSRS, as configurações do espaço de trabalho, a estrutura completa dos baralhos nem os dados da conta.

Essa diferença importa se você vai sair do serviço hospedado para a sua própria implantação. O pacote portátil é um caminho de transferência de conteúdo, não uma migração completa de banco de dados ou de conta. Para um backup operacional completo, quem auto-hospeda também precisa cuidar do banco PostgreSQL e do armazenamento de mídia criados pela stack da AWS.

## IA e credenciais de serviços externos

O código-fonte não inclui contas de nuvem, créditos de modelo nem credenciais de produção. Quem auto-hospeda fornece a configuração correspondente:

- credenciais e uma conta da AWS para a stack de CDK
- um domínio e credenciais do Cloudflare para a configuração de DNS documentada
- credenciais do Resend para o envio de e-mail
- configuração do Sentry para o monitoramento obrigatório do backend
- credenciais opcionais da OpenAI e do Langfuse para IA e tracing
- configuração do GitHub para o fluxo de implantação incluído

A IA é opcional na implantação na AWS. A stack de CDK implanta o worker assíncrono de chat, e as credenciais de modelo habilitam as requisições de IA autenticadas suportadas. O `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` controla à parte o uso de IA por convidados; ele não é um interruptor global para a IA de quem está autenticado por sessão ou por bearer. Se você conectar o MCP ou outro cliente de IA externo, os dados de cartões incluídos em uma requisição podem ser processados por esse provedor externo sob os termos dele; auto-hospedar o banco de dados não mantém essas requisições dentro da sua infraestrutura.

## Limites reais de beta e de operação

O Nibomo ainda é um produto em fase inicial. O repositório está ativo, as migrações e a configuração de implantação podem mudar, e a auto-hospedagem pressupõe que você se sente à vontade operando uma aplicação na AWS.

A stack de CDK traz backups, alarmes, segredos e automação de implantação, mas esses componentes ainda precisam de alguém operando. Conte com este trabalho:

- revisar as mudanças de infraestrutura antes de implantar
- monitorar as versões e as checagens de endpoints públicos
- confirmar as inscrições de alerta e o DNS do domínio de e-mail
- proteger e rotacionar as credenciais
- testar restaurações e planejar os custos da AWS
- compilar e distribuir os apps móveis nativos à parte, se você quiser publicar suas próprias versões

Se esse trabalho operacional não te serve, o app hospedado é o caminho mais simples.

## Uma breve comparação com Anki e Quizlet

O Anki é uma opção madura de código aberto, com um ecossistema grande e fluxos de trabalho fortes no desktop. O Quizlet é um serviço gerenciado para consumidor, com uma experiência de estudo que quase não exige configuração. Os dois podem ser a escolha certa, dependendo de você valorizar uma ferramenta local consolidada ou uma plataforma totalmente gerenciada.

O Nibomo segue outro caminho: um repositório aberto de web, mobile, API e infraestrutura, construído em torno de FSRS, sincronização, fluxos com IA, MCP e uma opção de auto-hospedagem na AWS. Ele é mais novo que o Anki e, quando auto-hospedado, exige bem mais trabalho de operação que o Quizlet. O motivo para escolhê-lo é essa combinação servir para o que você precisa, não a ideia de que toda pessoa que estuda deveria operar uma stack na nuvem.

## Teste o app hospedado ou rode sua própria stack

- [Abrir o app hospedado](https://app.nibomo.com/)
- [Ler o Guia de auto-hospedagem](/docs/self-hosting/)
- [Ver o código-fonte no GitHub](https://github.com/kirill-markin/flashcards-open-source-app)

Use a versão hospedada quando quiser estudar sem manter infraestrutura. Use o caminho auto-hospedado quando o controle da implantação compensar o trabalho de AWS, DNS, e-mail, monitoramento e atualizações.
