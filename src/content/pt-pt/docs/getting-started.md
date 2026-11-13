---
title: Primeiros passos
description: >-
  Comece com a aplicação para iPhone, iPad, Mac ou Android, a aplicação Web,
  um agente de IA ou o seu próprio servidor.
---

Pode começar de várias formas, por ordem de popularidade:

- **Aplicação para iPhone, iPad e Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplicação para Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Aplicação Web alojada**: [app.nibomo.com](https://app.nibomo.com?locale=pt-pt)
- **Agentes de IA**: o [conector MCP](/docs/mcp-connector/) ou a API em `https://api.nibomo.com/v1/`
- **Alojamento próprio**: o [guia de alojamento próprio](/docs/self-hosting/)

## Aplicações para dispositivos móveis e computadores

Instale a aplicação nativa para o seu dispositivo:

- iPhone, iPad e Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

As aplicações guardam os cartões no dispositivo para que possa revê-los offline. Os cartões são sincronizados quando voltar a ter ligação à Internet. Pode começar como convidado e iniciar sessão mais tarde.

### Widgets do ecrã principal

A aplicação Nibomo inclui um widget «Rever» para iPhone, iPad, Mac e Android. Está disponível em três tamanhos:

- **Pequeno**: quantos cartões tem para rever e a sua sequência de estudo
- **Médio**: quantos cartões tem para rever e a pergunta do cartão seguinte
- **Grande**: quantos cartões tem para rever, a pergunta seguinte e a sua sequência

Quando não tem cartões para rever, o widget mostra «Tudo em dia» e indica quando pode rever o próximo cartão. As respostas nunca aparecem no widget. Toque no widget para abrir a secção Rever. Os widgets médios e grandes abrem a revisão diretamente no cartão apresentado. Os widgets são gratuitos para todos, incluindo convidados.

Há mais oito widgets para acompanhar o seu progresso: «Atividade», «Ano», «Hoje», «Revisões», «Sequências», «Calendário», «Próximos dias» e «Painel». No iPhone e no iPad, também pode adicionar o widget «Cartões para rever» ao ecrã bloqueado. O [guia de widgets](/blog/flashcard-widget/) mostra cada um deles.

Para adicionar um widget no iPhone, iPad ou Mac, abra a galeria de widgets, escolha Nibomo e selecione um tamanho. No Android, adicione um widget Nibomo a partir da lista de widgets e ajuste o tamanho. A disposição adapta-se ao tamanho escolhido.

## Aplicação Web alojada

A aplicação Web alojada é a forma mais rápida de começar:

1. Abra [app.nibomo.com](https://app.nibomo.com?locale=pt-pt)
2. Inicie sessão com o seu e-mail e um código de utilização única (OTP), sem palavra-passe
3. Crie cartões, faça as revisões pendentes e use dados do espaço de trabalho e ficheiros anexados no chat com IA

A aplicação Web alojada dispensa a instalação e a configuração de um servidor.

## Configurar um agente

Os clientes MCP, como Claude, ChatGPT e Cursor, podem ligar-se seguindo o [guia do conector MCP](/docs/mcp-connector/).

Se quiser ligar diretamente o Claude Code, o Codex ou o OpenClaw, comece por:

```text
GET https://api.nibomo.com/v1/
```

A resposta de descoberta orienta o agente na autenticação por código de utilização única enviado por e-mail, na criação de uma chave de API de longa duração, no carregamento da conta, na configuração inicial do espaço de trabalho e na utilização da interface SQL publicada.

A mesma resposta está disponível em `GET /v1/agent`, mas `/v1/` é o ponto de entrada público canónico.

## Alojamento próprio

Se preferir executar a sua própria instância, consulte o [guia de alojamento próprio](/docs/self-hosting/).

## O que está disponível

- Aplicação Web alojada para criar cartões, fazer revisões e usar o chat com IA
- Aplicações nativas para iPhone, iPad, Mac e Android, com armazenamento SQLite local e sincronização que permite trabalhar offline
- Serviços partilhados de backend e autenticação nos domínios separados `api` e `auth`
- Configuração de agentes externos com descoberta, OTP e autenticação ApiKey
- Implementação de código aberto na AWS, com o Postgres como fonte de verdade

## Direção do projeto

O projeto foi concebido para funcionar offline.

O repositório inclui a aplicação Web, a aplicação para iOS, o serviço de autenticação, a API de backend, o fluxo para agentes externos e a aplicação para Android publicada no Google Play.
