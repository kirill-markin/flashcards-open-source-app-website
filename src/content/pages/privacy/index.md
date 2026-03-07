---
title: Privacy Policy
description: Privacy policy for Flashcards.
slug: privacy
sections:
  - type: legal_page
    lastUpdated: March 2026
---
## What We Collect

When you use the cloud beta, we store the flashcards data you create (cards, review history, workspace metadata) and your email address for authentication. Self-hosted instances do not send data to us unless you deploy your own copy that does so.

## How We Use Your Data

Your data is used solely to provide the service. We do not sell, share, or use your data for advertising. Authentication and workspace access are isolated by the backend services documented in the public repository.

## Data Storage

Cloud data is stored in AWS RDS (Postgres) in the eu-central-1 region with daily automated backups. Data is encrypted at rest and in transit.

## Cookies

We use authentication cookies such as `session`, `refresh`, and `logged_in` for the login flow. No tracking cookies or third-party analytics are required for the site to work.

## Data Deletion

For self-hosted instances, you control the database directly. The hosted beta is still evolving, so operational data removal may be a manual support action.

## Open Source

The entire codebase is open source. You can audit exactly what the application does with your data.
