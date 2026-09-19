---
title: Primeiros passos
description: >-
  Comece pelo app web hospedado, conecte um agente pela URL de descoberta ou
  execute a stack local por conta própria.
---

## App web hospedado

O jeito mais rápido de começar é o app web hospedado:

1. Abra [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com)
2. Entre com seu e-mail usando OTP sem senha
3. Crie cartões, revise os itens pendentes e use o chat de IA com dados do espaço de trabalho e arquivos anexados

Nenhuma instalação ou configuração de servidor é necessária no caminho hospedado.

## Configuração do agente

Se você quiser conectar o Claude Code, o Codex ou o OpenClaw diretamente, comece por:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Essa resposta de descoberta conduz o agente pelo login por OTP no e-mail, pela criação da chave de API de longa duração, pelo carregamento da conta, pela preparação do espaço de trabalho e pela superfície SQL publicada.

O mesmo payload também está disponível em `GET /v1/agent`, mas `/v1/` é o ponto de entrada público canônico.

## Auto-hospedagem

Se você preferir rodar sua própria instância, veja o [Guia de auto-hospedagem](/docs/self-hosting/).

## O que você tem hoje

- App web hospedado para cartões, revisão e chat de IA
- Cliente iOS no repositório principal, com SQLite local e sincronização offline-first
- Serviços de backend e de autenticação compartilhados em domínios `api` e `auth` separados
- Onboarding de agentes externos por descoberta, OTP e autenticação ApiKey
- Caminho de implantação open source na AWS, com Postgres como fonte da verdade

## Direção do repositório

O projeto é offline-first.

Hoje o repositório inclui o app web, o app iOS, o serviço de autenticação, a API de backend, o fluxo de agentes externos e o app Android publicado no Google Play.
