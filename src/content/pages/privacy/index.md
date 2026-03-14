---
title: Privacy Policy
description: Privacy policy for Flashcards.
slug: privacy
sections:
  - type: legal_page
    lastUpdated: March 2026
---
## What We Collect

When you use the hosted cloud beta, we store the email address you use for authentication and the learning data needed to operate the service, including cards, review history, and workspace metadata. Self-hosted instances do not send data to us unless you deploy your own copy that does so.

## AI Features

If you choose to use AI chat in the hosted app, your typed prompts, card-derived context needed for the request, uploaded files, uploaded images, and dictated audio or transcription requests may be sent to third-party AI providers configured on the server. The exact provider used depends on the hosted server configuration at the time of the request.

## How We Use Your Data

Your data is used to provide authentication, cloud sync, and optional AI features. We do not sell your data or use it for advertising. Authentication and workspace access are handled by the backend services documented in the public repository.

## Data Storage

Hosted cloud data is stored in AWS infrastructure, including Postgres for primary application data. Data is encrypted in transit, and service operators may retain operational logs needed to run and debug the hosted beta.

## Cookies

We use authentication cookies such as `session`, `refresh`, and `logged_in` for the login flow. No tracking cookies or third-party analytics are required for the site to work.

## Data Deletion

For self-hosted instances, you control the database directly. In the hosted app, you can delete your account from the iOS app, and you can contact support if you need additional help with hosted data removal.

## Support

For privacy questions, contact [kirill@kirill-markin.com](mailto:kirill@kirill-markin.com) or use the [support page](/support/).

## Open Source

The entire codebase is open source. You can audit exactly what the application does with your data.
