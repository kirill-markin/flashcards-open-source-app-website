---
title: Primeiros passos
description: >-
  Comece pelo app para iPhone, iPad, Mac ou Android, pelo app web, por um
  agente de IA ou pelo seu próprio servidor.
---

Há várias formas de começar; as mais populares vêm primeiro:

- **App para iPhone, iPad e Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **App para Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **App web hospedado**: [app.nibomo.com](https://app.nibomo.com)
- **Agentes de IA**: o [conector MCP](/docs/mcp-connector/) ou a API em `https://api.nibomo.com/v1/`
- **Auto-hospedagem**: o [Guia de auto-hospedagem](/docs/self-hosting/)

## Apps para celular e computador

Instale o app nativo para o seu dispositivo:

- iPhone, iPad e Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Os apps guardam seus cartões no dispositivo, então você pode revisar offline, e sincronizam quando você volta a ficar online. Você pode começar como convidado e entrar na sua conta depois.

### Widgets da Tela de Início

O app Nibomo adiciona o widget “Revisar” ao iPhone, iPad, Mac e Android. Ele vem em três tamanhos:

- **Pequeno**: quantos cartões estão pendentes e sua sequência de estudos
- **Médio**: quantos cartões estão pendentes e a pergunta do seu próximo cartão
- **Grande**: quantos cartões estão pendentes, sua próxima pergunta e sua sequência

Quando não há nada pendente, o widget mostra “Tudo em dia” e quando vence o próximo cartão. Ele nunca mostra uma resposta. Toque no widget para abrir a seção Revisar; um widget médio ou grande abre Revisar direto no cartão exibido. Os widgets são gratuitos para todos, inclusive convidados.

Outros oito widgets mostram seu progresso: “Atividade”, “Ano”, “Hoje”, “Revisões”, “Sequências”, “Calendário”, “Próximos dias” e “Painel”. No iPhone e no iPad, você também pode colocar o widget “Cartões pendentes” na Tela Bloqueada, e o [guia de widgets](/blog/flashcard-widget/) mostra cada um.

Para adicionar um no iPhone, iPad ou Mac, abra a galeria de widgets, escolha o Nibomo e selecione um tamanho. No Android, adicione um widget do Nibomo pela lista de widgets e depois ajuste o tamanho dele; o layout acompanha o tamanho.

## App web hospedado

O jeito mais rápido de começar é o app web hospedado:

1. Abra [app.nibomo.com](https://app.nibomo.com)
2. Entre com seu e-mail usando OTP sem senha
3. Crie cartões, revise os itens pendentes e use o chat de IA com dados do espaço de trabalho e arquivos anexados

Nenhuma instalação ou configuração de servidor é necessária no caminho hospedado.

## Traga seus cartões

Já tem cartões no Quizlet, no Anki ou em outro app? Abra **Biblioteca > Importar** e consulte o [guia de importação de cartões](/docs/import-flashcards/) para escolher o formato certo e saber o que pode ser transferido.

## Configuração do agente

Clientes MCP como Claude, ChatGPT e Cursor podem se conectar pelo [guia do conector MCP](/docs/mcp-connector/).

Se você quiser conectar o Claude Code, o Codex ou o OpenClaw diretamente, comece por:

```text
GET https://api.nibomo.com/v1/
```

Essa resposta de descoberta conduz o agente pelo login por OTP no e-mail, pela criação da chave de API de longa duração, pelo carregamento da conta, pela preparação do espaço de trabalho e pela superfície SQL publicada.

O mesmo payload também está disponível em `GET /v1/agent`, mas `/v1/` é o ponto de entrada público canônico.

## Auto-hospedagem

Se você preferir rodar sua própria instância, veja o [Guia de auto-hospedagem](/docs/self-hosting/).

## O que você tem hoje

- App web hospedado para cartões, revisão e chat de IA
- Apps nativos para iPhone, iPad, Mac e Android, com armazenamento SQLite local e sincronização offline-first
- Serviços de backend e de autenticação compartilhados em domínios `api` e `auth` separados
- Onboarding de agentes externos por descoberta, OTP e autenticação ApiKey
- Caminho de implantação open source na AWS, com Postgres como fonte da verdade

## Direção do repositório

O projeto é offline-first.

Hoje o repositório inclui o app web, o app iOS, o serviço de autenticação, a API de backend, o fluxo de agentes externos e o app Android publicado no Google Play.
