---
title: "Is MCP Safe for Flashcards? Permissions, Privacy, and Write Access in 2026"
description: "Is MCP safe for flashcards? See what OAuth secures, what AI clients can read or change, and how to limit privacy and write risks before connecting."
date: "2026-07-12"
image: "/blog/is-mcp-safe-for-flashcards.png"
keywords:
  - "is MCP safe for flashcards"
  - "MCP flashcards security"
  - "MCP privacy"
  - "MCP OAuth security"
  - "MCP read-only access"
  - "MCP write access"
  - "AI flashcards privacy"
  - "MCP prompt injection"
---

On May 20, 2026, the NSA published 17 pages of security guidance about Model Context Protocol. That matters if a deck contains more than public vocabulary: a Flashcards MCP connection can return cards, workspace metadata, and review history to an AI client. The same full-access credential can also call a tool that changes cards or marks them deleted. For anyone asking **is MCP safe for flashcards**, two checks decide it: whether that data may reach the chosen client and whether the client can use the write tool.

OAuth protects authorization and token exchange, and the Flashcards server narrows what its tools can do. Neither control can tell whether a proposed edit is wise, keep retrieved data inside Flashcards, or guarantee that an AI client will ask before a write.

The useful boundaries are concrete: what each tool can reach, which rules Flashcards enforces, and which safeguards exist only in your client.

![Warm desk with separate read and write permission bays for Flashcards MCP](/blog/is-mcp-safe-for-flashcards.png)

## Is MCP safe for flashcards? Follow the actual data path

A remote MCP session can involve four roles:

1. you
2. the AI application or MCP client where you make the request
3. a model provider, when model processing runs outside that client
4. the Flashcards MCP server and backend

Some products combine the client and model-provider roles. Others route tool results to a separate service. The guaranteed hop is simpler: Flashcards returns the requested data to the authenticated MCP client. What happens next depends on the client's architecture, plan, and settings. The result may enter a model's context, stay within one provider's infrastructure, or pass to another processor.

The practical risks land in three places. A read can disclose card text, deck structure, workspace settings, or review events. A write can create unwanted cards, change content, or mark cards and decks deleted. The agent can also misunderstand your request or treat instructions found in imported material as commands.

The [NSA's May 2026 MCP guidance](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/nsa-releases-security-design-considerations-for-ai-driven-automation-leveraging/) makes a useful distinction. Authentication, authorization, and validation remain necessary, while dynamic tool calls, shared context, and implicit trust create risks those controls do not settle. A public language deck and a deck built from confidential client notes deserve different decisions.

## What Flashcards OAuth secures

Flashcards uses an authorization-code flow with PKCE and Dynamic Client Registration for interactive MCP clients. You approve the connection in a browser, and PKCE binds the code exchange to the client that started it. The server also checks that an access token was issued for the Flashcards MCP resource. The [Flashcards MCP connector guide](/docs/mcp-connector/) lists the endpoint and discovery metadata.

These measures protect the login and token exchange. The stable [MCP authorization specification dated November 25, 2025](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization) requires PKCE for this flow and resource-specific tokens. It also says authorization is optional across MCP implementations generally, so the existence of OAuth in one connector says nothing about another server.

Flashcards currently advertises one OAuth scope: `flashcards`. It does not issue separate read-only and read-write OAuth permissions, and its credentials authorize the full connector surface. Calling a setup "read-only" therefore means the AI client has disabled or blocked `sql_execute`. The server enforces that `sql_query` itself cannot write. The same credential can authorize `sql_execute` if the client sends that call.

Client-side tool blocking is a useful operational control. The OAuth grant remains unchanged, and a malicious or compromised client that still holds the credential is not constrained by that setting.

## What the three Flashcards MCP tools can actually do

The connector exposes a parser-enforced SQL dialect rather than arbitrary PostgreSQL. Its three tools have distinct surfaces:

| Tool | Current access | Changes data? | Conservative client setting |
| --- | --- | --- | --- |
| `list_workspaces` | Lists up to 100 workspaces the user can access, including ID, name, active-card count, last activity, and which one is the default | No | Enable only if this account-level metadata is acceptable to return to the client |
| `sql_query` | Reads `workspace`, `cards`, `decks`, and `review_events` in one requested workspace | No | Enable for a defined read task and request only the columns needed |
| `sql_execute` | Inserts, updates, or marks records deleted in `cards` and `decks` in one requested workspace | Yes | Keep disabled unless the client can constrain writes in a way you accept |

The [MCP guide](/docs/mcp-connector/) and [API reference](/docs/api/) describe the public dialect. The implementation adds a few security details that matter when deciding how much to trust it.

### How workspace selection really works

Every SQL call targets exactly one workspace, and Flashcards revalidates that the user still has access before the statement runs. This prevents a caller from supplying the ID of someone else's workspace.

The selected workspace is only a default. When `workspaceId` is omitted, the tool uses that default; when an ID is supplied, the connection can target any workspace the user can access. `list_workspaces` exposes IDs for the workspaces it returns; the 100-result cap is not an isolation boundary, because an explicit `workspaceId` can still target any workspace the user can access.

A test workspace is still useful for learning how a client presents tool calls. It reduces the cost of an honest mistake if the call stays there. It is not a hard isolation boundary because the same connection can name another accessible workspace. Strict separation needs a different account with no membership in the real workspace, or a separate deployment.

### What read-only access can still reveal

`list_workspaces` and `sql_query` cannot change card state. They also cannot repair data or recalculate scheduling. This server-enforced split makes an accidental database change much less likely when `sql_execute` is unavailable to the client.

The returned data still leaves the Flashcards backend. A query about weak topics may include card text and review events. Even a short card can contain a patient detail, an internal system name, a private language example, or notes for an interview.

The [Flashcards privacy policy](/privacy/) covers data requested through MCP and the Agent API. At the protocol boundary, Flashcards sends the result to the MCP client. Whether a separate model provider receives it, how long anyone retains it, and whether it can be used for training depend on the client setup and provider terms. Check those details instead of treating "read-only" as a privacy label.

### Write access has narrower powers than full database access

`sql_execute` accepts `INSERT`, `UPDATE`, and `DELETE`, but only for `cards` and `decks`. The `workspace` and `review_events` resources are read-only. Card scheduling fields—including due dates, review counts, and persisted FSRS state—are also read-only through this dialect. MCP cannot submit a study review or directly rewrite FSRS scheduling state.

Both `UPDATE` and `DELETE` require a `WHERE` clause. That prevents a statement with no filter, although a valid broad condition can still match many rows. Syntax validation cannot tell whether the filter expresses your intention.

For cards and decks, `DELETE` sets a deletion timestamp used by sync; it does not immediately erase the database row. Deleted items disappear from the active data surface, and the MCP connector has no undo or restore tool. From the user's point of view, a mistaken delete still needs recovery from another route or a backup.

The [Terms of Service](/terms/) asks users to review AI-generated output before applying changes. That is especially relevant here: Flashcards can validate the statement family, resource, columns, and row cap. It cannot validate the reason you wanted the edit.

## Approvals belong to the client

Flashcards marks `sql_query` with `readOnlyHint` and `sql_execute` with `destructiveHint`. In the stable [MCP schema from November 25, 2025](https://modelcontextprotocol.io/specification/2025-11-25/schema), tool annotations are explicitly hints. They help a compatible client choose an approval policy; they do not enforce one.

Once Flashcards receives a valid, authenticated `sql_execute` call, it executes it immediately. There is no second Flashcards confirmation screen. Any pause for human approval happens in the AI client before the request reaches the server.

Client behavior varies. OpenAI's [developer-mode documentation](https://developers.openai.com/api/docs/guides/developer-mode), for example, says write actions require confirmation by default and lets users remember a decision for a conversation. Its [MCP apps help page](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt-beta) explains that prompts depend on app permissions, context, and workspace controls. Other clients may expose different controls or none at all.

Use the strongest option your client actually provides:

- If it can disable individual tools, leave `sql_execute` off until a task needs it.
- If it can require approval for every change, choose that setting and avoid remembered approvals for writes.
- When it shows a proposed call, inspect the `workspaceId`, every statement, the `WHERE` conditions, and the expected number of matching records.
- If it cannot block the write tool or reliably pause before calls, treat the connection as write-enabled from the start.

These settings reduce the chance of a mistake. Model output still needs human judgment.

## What 100 rows per statement really means

Each statement can return or affect at most 100 records, and one batch can contain up to 50 statements. A single authenticated tool call can therefore affect as many as 5,000 records in theory when every statement reaches its cap. This is far beyond a one-card confirmation.

Mutation batches are atomic: either every statement in the batch succeeds or the transaction fails. Atomicity prevents a half-applied batch when one statement errors. It does not check intent, and it provides no undo after a valid batch commits.

There is also a 48,000-character cap on the serialized result. That cap is applied after mutation execution and only protects the MCP response size. A mutation can commit before an oversized result is rejected. Use the 100-row statement cap as the relevant impact limit and preview broad targets with `sql_query` before writing.

## Prompt injection can arrive in the study material

Flashcards contain natural language, which is exactly what an AI client interprets. Imported notes may include hidden instructions, quoted prompts, or text written by an untrusted author. If an agent reads that material while a write tool is available, it may mistake data for a new command.

OAuth does not need to fail for this to cause trouble. The authorized client is already allowed to attempt the write.

The NSA's [full MCP security report](https://www.nsa.gov/Portals/75/documents/Cybersecurity/CSI_MCP_SECURITY.pdf) describes tool and model output as untrusted input for the next step in a pipeline. It recommends strict resource boundaries, parameter validation, output scrutiny, and least privilege. Those measures lower risk without making prompt injection impossible.

Flashcards contributes useful server guardrails. Its parser rejects unsupported statement families and resources, and the MCP tool cannot become a shell or unrestricted database connection. An injected instruction can still ask for a syntactically valid change to accessible cards. The server sees the permitted request without the conversation that persuaded the model to make it.

For sensitive work, keep the session small: one trusted source, one requested workspace, and only the tools required for the job. Avoid combining an untrusted import, unrelated connectors, and unattended Flashcards writes in the same agent run. A smaller session makes suspicious calls easier to notice, although it provides no isolation boundary.

## Your client and model setup define the downstream privacy boundary

Flashcards remains the source of truth, while requested content travels to the MCP client. From there, the handling differs by product. The client may run the model itself, call a separate provider, retain tool results in conversation history, expose them to workspace administrators, or use them with memory. Each architecture creates a different privacy boundary.

OpenAI offers one concrete example. Its current [Apps in ChatGPT documentation](https://help.openai.com/en/articles/11487775-connector) says retrieved app data can be used as response context and may interact with memory or web search. It also describes different training defaults for Business, Enterprise, and Edu accounts versus personal plans with "Improve the model for everyone" enabled. These are OpenAI-specific rules, not general MCP behavior.

Check the exact client, account type, workspace policy, region, and settings you will use. Look for retention, training, memory, administrator access, subprocessors, and deletion. If the documentation does not answer whether confidential source material may leave the client, do not test the question with a real deck.

Deleting the hosted account, disconnecting the connector, and deleting downstream copies are separate operations. [Flashcards privacy](/privacy/) describes hosted-data deletion. Flashcards cannot delete data already retained by a client or model provider; use that provider's controls as well.

## Disconnecting and credential revocation are different steps

The current Flashcards OAuth implementation issues one-hour access tokens and rotating refresh tokens with no fixed expiry. Flashcards does not currently expose a user-facing OAuth connection revocation UI or public revocation endpoint. Removing the connector may cause a client to discard its credentials. That client-side action does not guarantee server-side token invalidation.

Headless `fca_` Agent API keys are a separate credential type. Those keys can be revoked through **Agent Connections** in Flashcards. Keep the two authentication paths distinct when documenting or closing access.

If immediate server-side OAuth revocation is a requirement for your threat model, the present OAuth connector does not provide that user control. That limitation matters more for a sensitive long-lived connection than for a disposable public deck.

## A practical checklist before connecting

1. Classify the source material. Public study notes, personal information, employer-confidential content, and regulated data should not share one access policy. If you are not authorized to send the material to the client and its processors, do not expose it through MCP.
2. Verify the server URL. The documented endpoint is `https://mcp.flashcards-open-source-app.com/mcp`. Avoid lookalike domains and connector definitions copied from unknown sources.
3. Read both sides' policies. Start with [Flashcards privacy](/privacy/), then check the exact AI client's retention, training, memory, logging, and deletion rules.
4. Decide whether a spare workspace is enough. It is useful for a rehearsal, but the connection can still target other workspaces on the same account. Use a separate account or deployment when you need strict isolation.
5. Start with `sql_execute` blocked in the client. If the client cannot block it, acknowledge that the OAuth credential remains write-capable before connecting.
6. Request the minimum data. Select only the columns and rows needed for the answer, and keep unrelated secrets out of the conversation.
7. Make a tested backup before bulk changes. The [flashcards backup guide](/blog/how-to-back-up-flashcards/) covers the broader workflow.
8. Preview every broad update or delete with `sql_query`. Prefer exact card or deck IDs, compare the match count with your expectation, and split the change into small statements.
9. Use client approvals when they exist. Confirm the workspace and full payload each time; do not rely on the destructive hint to force a prompt.
10. Close access deliberately. Disconnect the OAuth connector and remove its stored credentials from the client, while recognizing the current server-side revocation limitation. Revoke `fca_` keys in Agent Connections, and handle downstream deletion separately.

For the setup steps after making these choices, see [How to Connect Flashcards to Claude with MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). The connection guide explains the clicks; this checklist decides whether the connection belongs near a particular deck.

## Where open source and self-hosting help

The Flashcards connector has several useful properties: separate read and write tools, a closed statement allowlist, per-call workspace membership checks, read-only scheduling fields, and public source code. These controls make the surface easier to inspect and constrain. They reduce risk; they cannot guarantee a safe client or correct model decision.

A [self-hosted deployment](/docs/self-hosting/) can move Flashcards storage and operations onto infrastructure you control. Queries sent to an external AI service still carry card data outside that deployment. The model and client path must meet the same privacy standard as the database.

## A simple decision rule

Use MCP read tools when the requested data may leave Flashcards for the chosen client path, the provider terms are acceptable, and the task justifies that disclosure. Treat the connection as full-access unless your client has actually blocked `sql_execute`.

Enable the write tool only for a narrow job when the client can pause before each important call, you have previewed the target rows, and a usable backup exists. Remember that one batch can touch far more than 100 records and that a delete has no MCP undo.

Skip the connection when the deck cannot be shared with the client or its processors, the downstream policy is unclear, strict workspace isolation is required on the same account, immediate OAuth revocation is mandatory, or the workflow needs unattended destructive writes. In those cases, use Flashcards without MCP or choose a deployment and model path whose full data flow meets your requirements.
