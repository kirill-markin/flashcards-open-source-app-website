---
title: Политика конфиденциальности
description: Политика конфиденциальности для Flashcards.
slug: privacy
sections:
  - type: legal_page
    lastUpdated: март 2026
---
## Что мы собираем

Когда вы используете hosted cloud beta, мы храним email address, используемый для authentication, и learning data, необходимые для работы сервиса, включая cards, review history и workspace metadata. Self-hosted instances не отправляют нам данные, если только вы сами не развернули copy, которая это делает.

## Оператор

Hosted Flashcards service управляется Ozma Inc. Flashcards был создан Kirill Markin, а [ozma.io](https://ozma.io/) — это связанный company website для hosted service.

## AI Features

Если вы используете AI chat в hosted app, ваши typed prompts, card-derived context, uploaded files, uploaded images и dictated audio или transcription requests могут отправляться внешним AI providers, настроенным на сервере. Конкретный provider зависит от configuration hosted server в момент запроса.

## Как мы используем данные

Ваши данные используются для authentication, cloud sync и optional AI features. Мы не продаем ваши данные и не используем их для advertising. Authentication и workspace access обеспечиваются backend services, documented в public repository.

## Data Storage

Hosted cloud data хранятся в AWS infrastructure, включая Postgres для primary application data. Data шифруются при передаче, а service operators могут хранить operational logs, необходимые для работы и debug hosted beta.

## Cookies

Мы используем authentication cookies, такие как `session`, `refresh` и `logged_in`, для login flow. Для работы site не нужны tracking cookies или third-party analytics.

## Data Deletion

Для self-hosted instances вы контролируете database напрямую. В hosted app вы можете удалить account из iOS app, а также обратиться в support, если нужна дополнительная помощь с удалением hosted data.

## Support

По вопросам privacy пишите на [kirill+flashcards@kirill-markin.com](mailto:kirill+flashcards@kirill-markin.com) или используйте [support page](/support/).

## Open Source

Весь codebase является open source. Вы можете точно audit, что application делает с вашими данными.
