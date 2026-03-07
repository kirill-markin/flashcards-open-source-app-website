# Features

A focused flashcards stack: the current web MVP, the public API surface, and the infrastructure already in place for self-hosting and future mobile clients.

## Review Queue

Due cards are loaded from the backend in a dedicated review queue. Submit one of four ratings and the server computes the next review time on write.

## Card Creation

Create front/back cards from the web client today. The app keeps the current surface area intentionally small while the core model settles.

## Passwordless Auth

Email OTP authentication runs on a dedicated auth service. Browser sessions reuse shared-domain cookies so login works cleanly across subdomains.

## Self-Hosted Stack

Run Postgres, auth, backend, and the web client locally. Production deployment is already wired for AWS with CDK, CloudFront, API Gateway, Lambda, and RDS.

## Typed API

The current API covers session discovery, card listing, card creation, review queue reads, and review submission. It is a practical base for future mobile sync.

## Offline-First Roadmap

The repository is designed around local-first clients with backend sync. iOS is the next planned client, with Android following later.


---
*[View the styled HTML version of this page](https://flashcards-open-source-app.com/features/)*

*Tip: Append `.md` to any URL on https://flashcards-open-source-app.com to get a clean Markdown version of that page.*