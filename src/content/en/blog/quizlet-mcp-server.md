---
title: "Does Quizlet Have an MCP Server in 2026? What Claude and Codex Can Use"
description: "Quizlet does not document an MCP server in 2026. Compare its ChatGPT app, creator-only export, and a safe route for recurring Claude or Codex access."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP server"
  - "Quizlet Claude connector"
  - "connect Quizlet to Claude"
  - "Quizlet Codex"
  - "Quizlet ChatGPT app"
  - "Quizlet API alternative"
---

As of September 12, 2026, Quizlet's public documentation does not document an MCP server or a self-service public developer API. If you searched for a Quizlet MCP URL to paste into Claude, Codex, or another MCP client, there is no public setup in Quizlet's documentation today.

Quizlet does have an official app in ChatGPT. It can turn a ChatGPT conversation into a new Quizlet set, but that named workflow is not a reusable Quizlet MCP server. If you need recurring agent access to existing cards, the practical route is to export text from a set you created, keep a raw copy, review the transfer, and use a flashcard system that explicitly supports agent reads and writes.

**Facts checked:** September 12, 2026.

> **Disclosure:** I am Kirill Markin, and I build Flashcards Open Source App, whose MCP server and Agent API appear as alternatives below. Flashcards cannot connect to a Quizlet account or import a Quizlet URL.

![A gardener carries one young plant from a closed greenhouse into a garden bed with branching drip irrigation](/blog/quizlet-mcp-server.png)

## ChatGPT app, export, and MCP solve different jobs

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) is an open standard for connecting AI applications to external systems. An MCP server normally gives compatible clients a known endpoint and a defined set of tools they can call.

Quizlet's [official ChatGPT announcement](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) describes a different shape. You install the Quizlet app in ChatGPT, begin a prompt with `@Quizlet`, preview the generated flashcards inside ChatGPT, and then open the set in Quizlet to personalize and study it.

That is useful when the job is “turn this ChatGPT conversation into a Quizlet set.” The announcement does not publish a general Quizlet MCP endpoint, give Claude or Codex access to your Quizlet library, or offer reusable developer credentials.

This says nothing about Quizlet's private or internal infrastructure. It only describes the interface Quizlet makes available in its public documentation. The broader developer-access boundary is covered in [Does Quizlet Have a Public API in 2026?](/blog/quizlet-api/).

Here is the clean distinction:

| What you actually want | Best supported route today | What to expect |
| --- | --- | --- |
| Create a new Quizlet set from a ChatGPT conversation | Quizlet's official ChatGPT app | A named `@Quizlet` flow inside ChatGPT, followed by Quizlet for editing and study |
| Move terms and definitions from a set you created | Quizlet's website export | A one-time text copy that you preserve and check |
| Let Claude, Codex, or another agent repeatedly read or edit flashcards | A flashcard system with a documented MCP server or agent API | Authenticated access to the destination workspace, not to Quizlet |
| Build software against Quizlet account data | Wait for official developer documentation or an authorized partner route | No public, self-service Quizlet API or MCP contract is documented today |

The Quizlet ChatGPT app handles one creation flow. Export handles a finite transfer. MCP handles repeatable access to a system that deliberately exposes tools. They are not interchangeable.

## Choose the shortest supported path

If the official ChatGPT app already fits the task, use it. There is no reason to add a second system just to create one Quizlet set from one conversation.

If you only need a backup or one-time move, use Quizlet's export. If you need an agent to return tomorrow, find a deck, add cards, and correct them, you need a documented read/write interface on the destination side. Until Quizlet publishes one, that recurring workflow cannot be a supported direct connection to your Quizlet account.

For custom software built specifically around Quizlet data, stop at the same boundary. A browser request, an old wrapper, or an integration someone reverse-engineered is not a replacement for current developer documentation.

## Make a creator-owned export reversible

Quizlet's [official export instructions](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) say that only the creator can export a set, and only on the website. The flow is **More → Export → Copy text**. It includes terms and definitions; Quizlet says images cannot be exported and copied sets are not eligible.

For a set you created, a cautious transfer is short:

1. Use Quizlet's website export and paste the result into a plain-text file.
2. Save an untouched UTF-8 copy before changing separators, line breaks, or wording.
3. Edit a duplicate, not the raw export.
4. Check a sample from the beginning, middle, and end, plus multiline definitions and non-Latin characters.
5. Import or attach the working copy, preview a few fronts and backs, and only then save cards.
6. Keep the Quizlet set and raw file until the destination deck has been opened and tested.

The complete separator, CSV, and file checks are in [How to Export Quizlet Sets in 2026](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). The important limit is easy to miss: the export transfers card text, not Quizlet images, folders, study history, mastery state, or scheduling.

That is why keeping the move reversible matters. If a multiline definition becomes two cards or a separator shifts the fields, the raw file gives you a clean reference.

## What Claude and Codex can use after the export

Flashcards Open Source App publishes a remote MCP endpoint at:

`https://mcp.flashcards-open-source-app.com/mcp`

Its [MCP connector documentation](/docs/mcp-connector/) defines three tools: `list_workspaces`, `sql_query` for reads, and `sql_execute` for writes. Interactive MCP clients can authorize with OAuth. Terminal agents can instead start from the [Agent API documentation](/docs/api/) and use the published HTTP flow.

This does not turn Flashcards into a Quizlet connector. The supported workflow is:

1. export text from a creator-owned Quizlet set;
2. preserve the raw file and inspect a working copy;
3. review the mapped cards before saving them in Flashcards; and
4. connect the resulting Flashcards workspace to a compatible client for future reads and writes.

For Claude, the connector steps are in [How to Connect Flashcards to Claude with MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex and other agents can use the documented MCP or Agent API route their environment supports.

Flashcards cannot read a Quizlet URL, mirror a Quizlet account, synchronize later Quizlet changes, or recover images and study history omitted from the export. It creates its own cards and new scheduling state from material you choose to bring over.

If you are deciding whether that trade is worthwhile beyond agent access, see the [open source Quizlet alternative comparison](/blog/quizlet-alternative/).

## Keep the permission boundary smaller than the job

A public contract removes some integration guesswork, but it does not make every MCP action safe. OAuth authenticates the connection. It does not guarantee that an AI-generated card is correct, keep returned card data inside the flashcard service, or decide whether an edit matches your intent.

Flashcards separates read operations from `sql_execute`, its write tool. The OAuth credential still covers the connector surface, so tool blocking and approval behavior depend on the client. Start with a small, non-sensitive workspace. Let the agent read only the data needed for the task, keep writes on per-call approval when the client supports it, and inspect the workspace and proposed change before accepting it.

Do not connect private study material until you have checked the AI client's retention and data-handling terms. The detailed threat model is in [Is MCP Safe for Flashcards?](/blog/is-mcp-safe-for-flashcards/). For a first transfer, a simple rule is enough: keep the raw export, preview a few cards, approve a narrow write, and verify the result in the destination app before doing more.

## Do not turn private browser traffic into an API

A request visible in browser developer tools is not a public Quizlet API. Private endpoints can depend on session cookies, internal formats, and behavior that changes without notice. Any automated use also has to comply with [Quizlet's Terms of Service](https://quizlet.com/tos) and with the permissions you have for the material.

This article does not provide scraping instructions or reverse-engineered endpoints. If the official ChatGPT app fits the job, use it. If you created the set and need a one-time move, export it. If you need recurring agent reads and writes, move reviewed content into a system that publishes that interface, then keep the Quizlet side manual unless Quizlet documents something new.
