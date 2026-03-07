# Flashcards - Open Source Spaced Repetition

Create cards. Review on time. Own your data.

Open-source flashcards app with spaced repetition, a fast review queue, passwordless auth, and a self-hosted AWS/Postgres stack. Use the web MVP today and keep the door open for the iOS offline-first client.

[Get Started](https://app.flashcards-open-source-app.com)
[View on GitHub](https://github.com/kirill-markin/flashcards-open-source-app)

## Features

A focused flashcards stack: the current web MVP, the public API surface, and the infrastructure already in place for self-hosting and future mobile clients.

- **Spaced Repetition** - Review cards with a built-in queue and a simple rating flow. The backend updates scheduling fields on every review submission.
- **Fast Web MVP** - Create cards, browse your collection, and work through due items in the browser with a minimal interface.
- **Passwordless Auth** - Email OTP via Cognito with shared-domain cookies across the auth and app subdomains.
- **Self-Hosted** - Run Postgres locally, start auth, backend, and web separately, and keep the full stack under your control.
- **API Surface** - Use the existing `/v1/me`, `/v1/cards`, `/v1/review-queue`, and `/v1/reviews` endpoints from your own clients and scripts.
- **Offline-First Direction** - The repository is structured around an offline-first roadmap with Postgres on the backend and iOS as the next client priority.

---
*[View the styled HTML version of this page](https://flashcards-open-source-app.com/)*

*Tip: Append `.md` to any URL on https://flashcards-open-source-app.com to get a clean Markdown version of that page.*