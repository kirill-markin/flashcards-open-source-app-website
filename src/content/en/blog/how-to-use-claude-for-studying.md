---
title: "How to Use Claude for Studying in 2026: A Tutor-to-Flashcards Workflow"
description: "Use Claude as a tutor, catch your real weak spots, save selected cards to Flashcards through MCP, and review them later with FSRS."
date: "2026-05-28"
image: "/blog/how-to-use-claude-for-studying.png"
keywords:
  - "how to use Claude for studying"
  - "Claude for studying"
  - "study with Claude"
  - "Claude study workflow"
  - "Claude tutor"
  - "Claude MCP flashcards"
  - "Claude custom connector flashcards"
  - "Claude Code flashcards"
  - "Claude Learning Mode"
---

You have explained meiosis twice, yet Claude catches you mixing it up with mitosis again. Good. That mistake is more useful than another polished summary.

The best way to use **Claude for studying** is to turn moments like that into a short loop: let Claude question you, choose the weak spots worth remembering, save a few focused cards, and review them later in Flashcards. Claude handles the conversation. Flashcards keeps the cards and schedules their return with FSRS.

With the Flashcards MCP connector, the card can move from the conversation into your deck without copy and paste. MCP is simply a connection that lets Claude use approved features of another app. Keep write actions on approval, and Claude will ask before it changes your cards.

![Warm desk scene with Claude tutoring notes sorted into weak-spot flashcards](/blog/how-to-use-claude-for-studying.png)

## The Claude study workflow I would actually use

A smooth chat can create a dangerous feeling: everything makes sense while the explanation is on screen. Ten minutes later, the details have vanished.

I use this loop instead:

1. Give Claude one narrow topic and the source material it needs.
2. Ask for one question at a time.
3. Answer from memory before reading any explanation.
4. Mark the mistakes, slow answers, and ideas you keep mixing up.
5. Choose a few of those weak spots and preview the cards.
6. Approve the cards you want, then review them later in Flashcards.

For example, Claude might ask what separates during anaphase I of meiosis. You answer "sister chromatids." Claude points out that homologous chromosomes separate first and asks you to explain the distinction again. That exact confusion deserves a card. The three paragraphs Claude used to help you reach the answer probably do not.

This keeps the deck tied to evidence from your own recall. You are saving what broke during practice, not everything that appeared in the chat.

## Start by making Claude tutor you

[Anthropic's Learning mode](https://www.anthropic.com/news/introducing-claude-for-education) guides students with questions instead of immediately giving away the answer. If your Claude account includes it, it suits this workflow well.

An ordinary Claude chat works too. Start with a prompt like this:

```text
Teach me this topic like a tutor. Ask one question at a time and wait for my
answer. Do not reveal the full answer too early. When I make a mistake, tell me
exactly what I missed and ask me to try once more before you explain it.
Keep a short list of genuine weak spots, but do not create flashcards yet.
```

Add the material you are studying: lecture notes, a short reading, corrected practice questions, or a few slides. I would keep each session to one chapter or one closely related set of ideas. It is easier to check Claude's explanations, and the resulting cards make more sense on their own.

For an ongoing course, a Claude Project can keep its chats, source material, and instructions together. Anthropic's [guide to Projects](https://support.claude.com/en/articles/9517075-what-are-projects) explains how they work. If your starting point is a long document, the [PDF-to-flashcards workflow](/blog/how-to-turn-a-pdf-into-flashcards/) covers that job in more detail.

## Save the weak spots, not the whole chat

After ten or fifteen minutes of questions, ask Claude to show its notes:

```text
Show me the weak spots from this session. Include only ideas I missed, answered
slowly, or confused more than once. For each one, explain in one sentence why it
deserves a flashcard. Do not save anything yet.
```

The best candidates are usually small:

- a definition you could not produce
- two similar ideas you reversed
- a step you kept skipping
- a formula you knew but set up incorrectly
- an exception that changed the answer

Skip the warm-up questions, facts you answered easily, and broad prompts such as "Explain cellular respiration." FSRS can schedule a card efficiently, but it cannot make an unnecessary card worth your time.

## Turn your chosen weak spots into flashcards

Once the Flashcards connector is enabled, choose the candidates yourself and ask Claude to draft them:

```text
Turn weak spots 2, 4, and 5 into Flashcards cards.

Use one memory target per card. Keep each front specific and each back short.
Use only facts supported by the material in this conversation. Show me the
proposed fronts, backs, and destination deck before writing anything. After I
approve them, create the cards through the Flashcards connector and read the
saved cards back to me.
```

The preview catches vague questions, bloated answers, and confident-looking mistakes before they reach your deck. A good card should still make sense tomorrow, when the Claude conversation is no longer beside it.

For more examples, read [How to Make Better Flashcards](/blog/how-to-make-better-flashcards/). If every session somehow produces fifty "essential" cards, [How to Avoid AI Flashcard Overload](/blog/how-to-avoid-ai-flashcard-overload/) will help more than a longer prompt.

## Connect Claude web to Flashcards

For most students, Claude in the browser is the easiest place to start. Add Flashcards as a custom connector with this URL:

```text
https://mcp.flashcards-open-source-app.com/mcp
```

Open Claude's connector settings, choose **Add custom connector**, paste the URL, and connect. A browser window will ask you to sign in to Flashcards and approve access through OAuth. You do not need to paste an API key into Claude. After that, enable the connector in the chat where you want to study.

Anthropic's [custom connector instructions](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) show the current menu path. A school-managed Team or Enterprise workspace may require an owner to add the connector first.

The [step-by-step Flashcards MCP guide](/blog/how-to-connect-flashcards-to-claude-with-mcp/) includes the connector screens and a first test card. Use that guide if you are setting this up now; the rest of this article stays focused on studying.

## Claude Code uses a separate MCP setup

Claude Code is useful when your study material already lives in a folder of Markdown notes, code, or technical documentation. Add the same remote Flashcards server from the terminal:

```bash
claude mcp add --transport http flashcards https://mcp.flashcards-open-source-app.com/mcp
```

Then run `/mcp` in Claude Code, choose the Flashcards server, and complete the OAuth login in your browser. Anthropic documents the flow in [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp).

Adding the connector to Claude on the web does not configure Claude Code on your computer. They reach the same Flashcards endpoint, but each has its own setup and credential storage.

For a headless machine or automated terminal session with no practical browser login, Flashcards also accepts a long-lived `fca_` agent key as a Bearer token:

```bash
claude mcp add --transport http \
  flashcards https://mcp.flashcards-open-source-app.com/mcp \
  --header "Authorization: Bearer ${FLASHCARDS_MCP_TOKEN}"
```

Store the key in `FLASHCARDS_MCP_TOKEN` through your environment or secret manager. Treat it like a password: keep it out of prompts, screenshots, shell history, and version control. The [API reference](/docs/api/) explains how to obtain an agent key. For a normal interactive session, use OAuth.

## Check what Claude can read and change

The connector exposes three tools. You do not need to understand SQL to use them, but the read/write split is worth knowing:

| Tool | What it does | Changes data? |
| --- | --- | --- |
| `list_workspaces` | Shows the Flashcards workspaces your account can access | No |
| `sql_query` | Reads allowed workspace, card, deck, and review data | No |
| `sql_execute` | Creates, edits, moves, or deletes cards and decks | Yes |

The first two tools are read-only. `sql_execute` is the only tool that can change data. In Claude web, I keep it on **Needs approval** and check the workspace, cards, decks, and proposed changes before allowing each write. Broad deletion requests deserve an especially careful look.

The server limits these tools to your authorized workspace and the supported Flashcards data. Claude cannot use them as unrestricted access to the underlying database. The [Flashcards MCP documentation](/docs/mcp-connector/) has the current authentication details and tool contract.

One detail is easy to miss: Flashcards currently authorizes the connector as a single surface, rather than offering separate read-only and read-write OAuth grants. Requiring approval or blocking the write tool is a setting on Claude's side. The Flashcards server separately enforces that its two read tools cannot change data.

Connecting also means card text requested through the tools can be sent to Claude for processing. Do not connect study material that you are not allowed to share with that service. [Is MCP Safe for Flashcards?](/blog/is-mcp-safe-for-flashcards/) explains the privacy path, write risks, backups, and deletion limits.

## Claude can clean up cards and decks too

The connector is useful after the first card is saved. Claude can inspect the card and deck data you authorize, then create, edit, move, reorganize, or delete cards and decks after you approve the write.

You might ask:

```text
Show me the cards in my Cell Biology deck that cover mitosis. Do not edit them.
Flag duplicates and cards that test more than one idea.
```

Then choose the changes you want:

```text
Move the three cards I approved into the Cell Division deck. Read them back to
me after the move so I can check the result.
```

For a rewrite, ask Claude to show the new front and back before updating the card. For a larger cleanup, begin with a read-only inspection and keep approvals to a small, exact set of records. This makes mistakes easier to catch before they spread through a deck.

## Do the real FSRS review in Flashcards

Claude can read eligible card and review data, but this connector does not let it record an official review event, choose your Again, Hard, Good, or Easy rating, or update the FSRS schedule. Review history and scheduling data are read-only through the connector.

After Claude creates the cards, open the [Flashcards web app](https://app.flashcards-open-source-app.com/) or a mobile app to review them. Your ratings are recorded there, and FSRS uses them to decide when each card should return.

You can still ask Claude to quiz you conversationally on a small set of cards. The [AI flashcard tutor guide](/blog/ai-flashcard-tutor-due-cards/) shows that workflow. Complete and rate the scheduled review in Flashcards afterward so your progress stays accurate.

## Copy the cards manually if you prefer

You may not want to give Claude access to a stored deck, especially when the material is private. The learning method still works without a connector.

Ask Claude for plain card candidates:

```text
Turn only the selected weak spots into front/back flashcards. Use one memory
target per card. Keep the front specific and the back short. Do not invent
facts. Put each card in a separate block so I can review and copy it manually.
```

Delete the weak candidates in Claude, then copy the survivors into Flashcards yourself. It adds a small manual step, but you keep complete control over what leaves the conversation and what enters your deck.

## A useful Claude study session can stay small

You do not need a one-shot prompt that turns a semester into 800 cards. A better **Claude study workflow** fits after a lecture or practice set: answer a few questions, catch the places where recall breaks, save three or four useful cards, and move on.

That is how I use Claude for studying: work through the confusion while it is fresh, then let Flashcards bring the right question back after the chat closes. The small handoff turns a helpful conversation into something you may still remember next month.
