---
title: MCP Connector
description: Add the remote Flashcards MCP server as a custom connector, with OAuth for clients, an API key for headless use, and split read and write SQL tools.
---

## Overview

Flashcards runs a remote MCP (Model Context Protocol) server so MCP clients and
AI agents can read your due cards and create or edit cards and decks for you.

Agents can connect two ways: over this MCP server (best for MCP clients like
Claude or Cursor), or through the [Agents API discovery URL](/docs/api/) for CLI
agents. Both reach the same per-user data surface; this page covers the MCP server.

Connect to it at:

```text
https://mcp.flashcards-open-source-app.com/mcp
```

The transport is Streamable HTTP, and the server exposes three tools over a
small, intentionally limited SQL surface. It is the same per-user data surface
as the [API reference](/docs/api/); the MCP server is the connector-friendly way
to reach it from clients that speak MCP.

## How To Add It In Your Client

Most clients add a remote MCP server as a custom connector:

1. Open your client's connector or MCP server settings.
2. Add a custom connector and paste the server URL `https://mcp.flashcards-open-source-app.com/mcp`.
3. For interactive clients, authorize in the browser when prompted. The server
   uses OAuth 2.1 with Dynamic Client Registration, so there is no client secret
   to paste and no app to register first.
4. For headless or CLI use, set an `Authorization: Bearer fca_…` header with your
   agent API key instead of the browser flow.

After authorizing, call `list_workspaces` once to pick a workspace, then use
`sql_query` for reads and `sql_execute` for writes.

## Tools

The server exposes three tools. Reads and writes are split on purpose so a single
tool never mixes safe and destructive operations.

- `sql_query` — read-only access to your cards and decks (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — write access to your cards and decks (`INSERT`, `UPDATE`,
  `DELETE`) as an atomic batch.
- `list_workspaces` — list the workspaces you can access, each with its
  `workspaceId`, name, active card count, last activity, and whether it is your
  currently selected default. Use a returned `workspaceId` for the `sql_query`
  and `sql_execute` `workspaceId` argument.

The SQL surface is an intentionally limited dialect and is not full PostgreSQL.
Statements can only address the `workspace`, `cards`, `decks`, and `review_events`
resources, every statement is scoped to your own workspace, and reads and writes
are capped at `100` rows per statement.

## Card Contract

Every card follows one contract, and the tools rely on it:

- `front_text` is only a question or review prompt and never holds the answer.
- `back_text` holds the answer, optionally with a concrete example.

Agents that generate cards through `sql_execute` follow this contract, so the
cards they create are immediately reviewable with spaced repetition.

## Authentication

Two authorization paths reach the same per-user data surface.

### OAuth 2.1 (interactive connector clients)

The server implements the authorization-code flow with PKCE and Dynamic Client
Registration. Add the MCP URL as a custom connector and authorize in the browser;
no client secret is pre-shared. Discovery is standard:

- Protected-resource metadata:
  `https://mcp.flashcards-open-source-app.com/.well-known/oauth-protected-resource`
- Authorization-server metadata:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API key (headless and CLI)

Obtain a long-lived `fca_` agent API key through the email OTP login flow
documented in the [API reference](/docs/api/), then send it as a Bearer token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

This is the same key the REST agent surface accepts, and it needs no browser or
OAuth round-trip.

The canonical machine-readable description of both paths is the discovery payload
at `https://api.flashcards-open-source-app.com/v1/` (mirrored at `/v1/agent`).

## Safety And Scope

The SQL tools are safe to approve because the surface is a contained,
parser-enforced dialect rather than arbitrary database access:

- **Closed statement allowlist**: `sql_query` accepts only `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, and `SELECT`; `sql_execute` accepts only `INSERT`,
  `UPDATE`, and `DELETE`. Anything else is rejected at parse time.
- **Limited resources**: statements can only touch `workspace`, `cards`, `decks`,
  and `review_events`.
- **Per-workspace scoping**: every statement is scoped to your selected
  workspace, with no cross-tenant access.
- **Caps**: up to `100` rows per statement, up to `50` statements per batch, and
  a result cap of roughly `12k` tokens. Mutation batches apply atomically.
- **Read/write split**: `sql_query` and `list_workspaces` are read-only
  (`readOnlyHint`) and `sql_execute` performs writes (`destructiveHint`).

The whole stack — app, backend, and infrastructure — is open source and can be
[self-hosted](/docs/self-hosting/), so you can run the same connector against your
own deployment.
