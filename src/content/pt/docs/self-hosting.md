---
title: Guia de auto-hospedagem
description: >-
  Rode o Nibomo localmente com PostgreSQL, autenticação, backend, web e admin,
  ou implante a stack de produção documentada com AWS CDK.
---

O Nibomo tem dois caminhos distintos: um ambiente de desenvolvimento local e uma implantação de produção na AWS. O Docker Compose roda o PostgreSQL e as migrações para o desenvolvimento local; ele não é o método de implantação em produção.

## Requisitos para desenvolvimento local

- Git
- Bash
- GNU Make
- Docker com Docker Compose
- Node.js 24
- npm

O arquivo do Docker Compose incluído roda hoje o PostgreSQL 18.4. Você não precisa de uma instalação local separada do PostgreSQL.

## Início rápido local

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

O `make db-up` sobe o PostgreSQL e roda o `scripts/deploy/migrate.sh` pelo contêiner de migração. Com as senhas padrão copiadas do `.env.example`, a migração cria estas conexões locais de runtime:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Se você mudar `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` ou `REPORTING_DB_PASSWORD` no `.env`, use a mesma senha alterada na URL de conexão correspondente.

### Início rápido apenas local

O target Make do backend não carrega o `.env` da raiz. Passe as configurações locais necessárias de forma explícita:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Rode os clientes em terminais separados:

```bash
make web-dev
make admin-dev
```

Esse caminho não sobe o `make auth-dev`, de propósito. O `AUTH_MODE=none` é um modo explicitamente inseguro, só para localhost; nunca o use em um ambiente implantado.
Ele cobre o desenvolvimento do backend principal, da descoberta pública da API de agentes, do web e do admin, mas não deixa o Chat V2 disponível.

### Fluxo local completo com Cognito

O target de auth carrega o `.env` da raiz, e o target do backend não. Primeiro troque o `DATABASE_URL` antigo do `.env` copiado pela URL do papel de auth e adicione os seus valores reais do Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Suba o auth:

```bash
make auth-dev
```

No terminal do backend, carregue o `.env` de forma explícita e depois sobrescreva a URL de banco do auth com a URL do papel de backend para aquele processo:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Rode o `make web-dev` e o `make admin-dev` em terminais próprios. Os dois targets carregam o `.env` da raiz.

Os serviços usam estes endereços locais:

| Serviço | Endereço |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, quando configurado | `http://localhost:8081` |
| API de backend | `http://localhost:8080/v1` |
| App web | `http://localhost:3000` |
| App admin | `http://localhost:3001` |

Pare o PostgreSQL e o contêiner de migração com:

```bash
make db-down
```

## Configuração local

Comece pelo `.env.example`; ele documenta as variáveis disponíveis e quais valores são só para uso local. Troque o `DATABASE_URL` antigo antes de rodar o auth, como mostrado acima.

As principais configurações locais são:

- `MIGRATION_DATABASE_URL` para as migrações de schema dentro do Docker
- `DATABASE_URL` apontando para o papel `auth_app` no `.env` da raiz, para o `make auth-dev`
- `DATABASE_URL` passado com o papel `backend_app` para o `make backend-dev`
- `AUTH_MODE` e `ALLOW_INSECURE_LOCAL_AUTH` para a autenticação do backend
- `BACKEND_ALLOWED_ORIGINS` para as origens locais do web e do admin
- `ALLOWED_REDIRECT_URIS` e `COOKIE_DOMAIN` para a autenticação no navegador
- os valores de Cognito e de criptografia de sessão, quando for testar OTP real

A API de agentes faz parte do backend. O documento público de descoberta local fica em `http://localhost:8080/v1/agent` depois que o backend sobe. As operações protegidas de agente exigem autenticação `ApiKey` e não estão disponíveis no caminho com `AUTH_MODE=none`.

### Escopo de IA por caminho

Os comandos locais acima não sobem o worker assíncrono de chat. O caminho rápido também usa `AUTH_MODE=none`, que o Chat V2 rejeita; adicionar uma chave da OpenAI ou cota de convidado não torna esse caminho capaz de usar IA. O fluxo local completo com Cognito fornece um transporte de autenticação suportado, mas ainda assim não sobe o worker.

A implantação com AWS CDK cria o Lambda do worker e configura o backend para invocá-lo. Credenciais de provedor como `OPENAI_API_KEY` habilitam as chamadas de modelo para as requisições autenticadas suportadas. O `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` habilita e limita a IA para convidados à parte; ele não controla a IA para quem está autenticado por sessão ou por bearer. As configurações do Langfuse são um tracing opcional.

## Clientes nativos

O mesmo repositório contém os clientes iOS e Android, mas os comandos locais de web e servidor não compilam nem distribuem esses clientes.

O projeto iOS lê os hosts locais de API e de auth em:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Crie o arquivo a partir do exemplo quando precisar:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Veja o [README do iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) e o [README do Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) no repositório para os fluxos separados de build e de teste de cada um.

## A produção usa AWS CDK

A implantação de produção suportada é a stack de AWS CDK incluída. Ela é baseada em AWS, não neutra em relação a fornecedor, e inclui:

- uma VPC com sub-redes privadas
- PostgreSQL 18 no Amazon RDS
- OTP por e-mail sem senha no Amazon Cognito
- API Gateway e Lambda para os serviços de backend, auth e MCP
- um Lambda de worker assíncrono de chat e um Lambda de remetente de e-mail personalizado do Cognito
- S3 e CloudFront para os apps web e admin
- Secrets Manager para as credenciais de banco, sessão, e-mail, monitoramento e IA opcional
- alarmes do CloudWatch, notificações do SNS e um plano de backup do RDS
- um papel de implantação OIDC para o GitHub Actions
- scripts de configuração do Cloudflare para os domínios públicos

A implantação expõe `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` e `mcp.<domain>`. Ela também pode criar um redirecionamento do apex quando o domínio raiz não estiver sendo usado para outra coisa.

Rode o helper de produção a partir de uma máquina de operação com:

- Node.js 24 e npm
- Bash e GNU Make
- Docker em execução
- a AWS CLI autenticada na conta de implantação
- a CLI do GitHub autenticada no repositório de destino
- `curl`, `jq` e Python 3

Antes de implantar, configure os valores de operação no `.env` da raiz. O conjunto obrigatório inclui a região da AWS, o domínio, o e-mail de alertas, o repositório do GitHub, as credenciais do Cloudflare, as credenciais do Resend e a configuração do Sentry do backend. As credenciais da OpenAI e do Langfuse são opcionais.

O comando preferido para a primeira implantação, a partir da raiz do repositório, é:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

A instalação explícita do auth é necessária hoje em um checkout limpo porque o helper de implantação empacota esse pacote, mas não o instala. O helper cria ou altera recursos reais na AWS, no Cloudflare e no GitHub. Revise a documentação de implantação do repositório e os custos de nuvem antes de rodá-lo. Ele faz o bootstrap do CDK, implanta a infraestrutura, roda as migrações, envia os assets do web e do admin, configura os registros DNS públicos de `app`, `admin`, `api`, `auth` e `mcp`, a menos que sejam pulados, e preenche a configuração que estiver faltando no GitHub Actions.

Depois da implantação:

1. Confirme a inscrição do SNS enviada para a caixa de entrada do `ALERT_EMAIL`.
2. Configure e verifique os registros DNS do domínio de envio do Resend, que são separados:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

O `first-deploy.sh` roda o `scripts/cloudflare/setup-dns.sh` para os domínios públicos da aplicação por padrão. Ele não roda o `setup-resend-domain.sh`; esse último cria os registros de remetente de e-mail para `mail.<domain>` e verifica esse domínio no Resend. Se você implantar com `--skip-dns`, configure os registros públicos separadamente, como está documentado no guia de AWS CDK.

## Portabilidade dos dados

A importação e a exportação de pacotes de espaço de trabalho transferem apenas os cartões, suas tags e as mídias relacionadas. Elas não transferem o histórico de revisões, o estado do agendador FSRS, as configurações do espaço de trabalho, a estrutura completa dos baralhos nem os dados da conta.

Trate os pacotes como transferência de conteúdo, e não como uma migração completa do serviço hospedado para o auto-hospedado ou como backup para recuperação de desastres. Fazer backup e restaurar o banco PostgreSQL implantado e o armazenamento de mídia é responsabilidade de quem opera.

## Responsabilidades de quem opera

Auto-hospedar significa que você fornece e mantém:

- a infraestrutura da AWS e os custos dela
- o DNS e a configuração de domínio no Cloudflare
- as credenciais de envio de e-mail do Resend e os registros de domínio
- a configuração obrigatória de monitoramento no Sentry
- as credenciais opcionais de provedor de IA e do Langfuse
- segredos, atualizações, migrações, alertas, backups e testes de restauração
- os builds e a distribuição dos apps nativos, se você quiser publicar suas próprias versões para iOS ou Android

A stack traz automação para vários desses sistemas, mas ainda exige alguém operando. O Docker Compose não substitui essa arquitetura de produção.

## Documentação de implantação do repositório

- [README do repositório](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Guia de implantação do backend e do web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Guia de implantação com AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infraestrutura em AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
