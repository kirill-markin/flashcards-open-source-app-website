---
title: "AI Flashcard Tutor in 2026: Quiz Your Due Cards With Claude and MCP"
description: "Use Claude as an AI flashcard tutor over MCP: load a small eligible-card snapshot, ask one question at a time, and record FSRS ratings in the app."
date: "2026-07-15"
image: "/blog/ai-flashcard-tutor-due-cards.png"
keywords:
  - "AI flashcard tutor"
  - "AI quiz me on my flashcards"
  - "AI spaced repetition tutor"
  - "Claude flashcards MCP"
  - "AI tutor with my own flashcards"
  - "AI flashcard review"
  - "quiz due flashcards with AI"
  - "MCP flashcard tutor"
---

Ten cards currently eligible for review. One question on screen. The stored answer stays hidden until you respond.

That is the useful version of an **AI flashcard tutor** in 2026: connect Claude to your real Flashcards data through MCP, load a small read-only snapshot of cards currently eligible for review, and make it wait between questions. The session can reveal each saved back and note your first attempts inside the chat. It cannot complete the FSRS review. You still record Again, Hard, Good, or Easy in the Flashcards app, or every card stays eligible for review.

![AI flashcard tutor quizzes one due card while the official FSRS review waits in the app.](/blog/ai-flashcard-tutor-due-cards.png)

## The two-minute workflow

Here is the whole routine before we get into the setup:

1. Add the Flashcards remote MCP connector to Claude.
2. Allow `list_workspaces` and `sql_query` for this session.
3. Block `sql_execute`, because this drill does not need writes.
4. Paste the tutor prompt below.
5. Confirm the workspace and let Claude fetch up to ten eligible cards.
6. Answer one front at a time. Ask for one hint only when you need it.
7. Open [Flashcards](https://app.flashcards-open-source-app.com/) afterward and complete the official reviews with your own FSRS ratings.

That last step is part of the workflow. The MCP session is a conversational practice layer over your cards. It does not clear the queue or reschedule anything.

If the connector is not set up yet, [the Claude MCP connection guide](/blog/how-to-connect-flashcards-to-claude-with-mcp/) covers the current menu path. The server URL is:

`https://mcp.flashcards-open-source-app.com/mcp`

## Set Claude up as a quiz-only AI flashcard tutor

The Flashcards connector exposes three calls:

- `list_workspaces({})` lists the workspaces your account can access.
- `sql_query({ sql, workspaceId? })` reads cards through a limited SQL dialect.
- `sql_execute({ sql, workspaceId? })` can create, edit, or delete cards and decks.

The `workspaceId` argument is per call. Pass it to target the workspace you confirmed. Omit it and the tool uses the selected default. Supplying an ID does not change or persist a new default.

The overall connector is not read-only. The server enforces that `list_workspaces` and `sql_query` cannot write, while `sql_execute` is the write-capable tool for cards and decks. Flashcards currently uses one OAuth scope, `flashcards`; it does not issue a separate server-side read-only grant.

For this quiz, block `sql_execute` in Claude's connector permissions. That is a client policy, not a narrower OAuth permission enforced by Flashcards. If your client offers approval instead of a hard block, decline every `sql_execute` request. The prompt also tells Claude not to call it, but a sentence in a prompt is weaker than a tool permission.

Interactive clients authorize through OAuth 2.1 with PKCE and Dynamic Client Registration. You do not need to paste an API key into Claude. The [MCP connector documentation](/docs/mcp-connector/) has the current authentication and tool contract.

## Copy this prompt to quiz your due cards

The prompt below uses the documented tool shapes, card fields, and due rule. A card is eligible when `due_at` is null or its timestamp has arrived. In this contract, null means an untouched new card.

```text
Use the Flashcards MCP connector as a quiz-only tutor for this session.

Tool boundary:
- Call only list_workspaces and sql_query.
- Never call sql_execute.
- Never create, update, delete, reschedule, or mark any card as reviewed.

Setup:
1. Call list_workspaces({}).
2. If there is one workspace, tell me its name and ask me to confirm it.
3. If there are several workspaces, show their names and ask me to choose one.
4. Stop and wait for my workspace confirmation before reading cards.
5. Pass the confirmed workspaceId to sql_query for this call. Do not claim that this changes my default workspace.
6. Use exactly this SQL:

SELECT card_id, front_text, back_text, due_at, created_at
FROM cards
WHERE due_at IS NULL OR due_at <= NOW()
ORDER BY due_at ASC, created_at DESC, card_id ASC
LIMIT 10 OFFSET 0

This query loads a stable snapshot of cards currently eligible for review. It does not reproduce the exact Flashcards Review-screen order. Rows with due_at IS NULL are untouched new cards and sort first. Do not fetch future cards.

If the query returns no rows, tell me and stop.

Quiz behavior:
- Show only the front_text of the first card. Do not expose back_text early.
- Ask one card at a time and wait for my answer before continuing.
- Do not turn the question into multiple choice.
- Offer at most one short hint, and only if I ask for one. The hint must not reveal the answer.
- After my answer or "I don't know," reveal the stored back_text clearly labeled "Stored answer."
- Compare my first answer with the stored answer. Keep one session-only note: retrieved, partial, or missed. If it is ambiguous, ask me which note fits.
- Keep the first-attempt note even if a hint or correction helps later. Never convert that note into Again, Hard, Good, or Easy.
- Move to the next card only after I say "next" or otherwise confirm I am ready.
- Do not repeat a card within this session.

At the end, show a compact list of each card front and its first-attempt note. State clearly that these are chat notes only, no review was recorded, no FSRS scheduling changed, and I must complete the official reviews in the Flashcards app.
```

Keep `NOW()` in the query; `CURRENT_TIMESTAMP` is not supported by this SQL surface. The three-column sort also matters. Untouched new cards come first. Among them, newer cards come first; scheduled cards then run from the oldest due time forward, with `card_id` breaking any remaining ties. The result is repeatable for the same snapshot, but it is not the app's exact Review-screen order.

Ten is a ceiling, not a target. You can stop the drill after five cards without changing the query or writing anything back.

## What one tutoring round should feel like

Claude shows a single stored front. You answer from memory, preferably out loud. If you are stuck, you can request one hint. Claude then reveals the stored back and compares it with what you said.

The first attempt stays visible in the session notes even if the hint makes the answer obvious. That prevents a common bit of self-deception: turning “missed, then understood the explanation” into “knew it.” The note is deliberately rough. It helps you spot patterns across ten cards; it is not a scheduler input.

The pause before each reveal does most of the work. A chat that prints all fronts and backs at once becomes another page to read. One question, one attempt, and one reveal makes this an actual retrieval session.

## The oral drill is not an official FSRS review

This boundary deserves plain language: Flashcards MCP can read eligible cards, but it cannot submit a review event. The `review_events` resource and card scheduling fields—including `due_at`, `reps`, `lapses`, `fsrs_card_state`, and `fsrs_last_reviewed_at`—are read-only through the agent surface. Even `sql_execute` can only mutate cards and decks. Claude cannot persist an Again, Hard, Good, or Easy rating, update the schedule, or mark the review complete.

So the cards will still be due after the chat.

Open the hosted app or another Flashcards client and answer the cards again in the official review flow. Rate that attempt yourself. The answer you saw in chat may make the immediate repeat easier, so do not translate `retrieved`, `partial`, or `missed` into a rating automatically. If that makes honest grading awkward, use the AI tutor after your normal app review as an explanation session instead.

If you want the conceptual split in more detail, [active recall tests what you can produce now, while spaced repetition schedules what should return later](/blog/active-recall-vs-spaced-repetition/). This Claude session handles the first job. The app handles the second.

## Why the pause before the answer matters

The useful constraint is also the slightly annoying one: Claude must wait. Seeing the back before you attempt the front turns the round into reading. Hiding it creates a retrieval attempt that you can actually inspect.

A 2009 randomized controlled trial followed 40 pediatric and emergency medicine residents learning two medical topics. Repeated short-answer testing with feedback happened immediately and twice more at roughly two-week intervals. More than six months later, average scores were 39% for material tested repeatedly and 26% for material studied repeatedly from review sheets. The [published abstract reports the 13-percentage-point difference](https://pubmed.ncbi.nlm.nih.gov/19930508/).

That was one small medical-education study, not an AI tutor trial and not proof that this exact MCP workflow improves grades. It supports a narrower design choice: make an attempt before seeing the answer. The prompt follows that boundary by hiding the back, limiting hints, and preserving the first attempt.

## Use the stored back as the reference

An AI tutor can easily improve, expand, or quietly replace an answer while grading it. That is risky when the point is to review your own cards.

The prompt tells Claude to reveal the stored `back_text` and compare your response with that text. It may explain a mismatch, but the source of truth for the drill stays visible. If the back is wrong or incomplete, fix the card separately after the session with a trusted source. Do not let a fluent correction disappear into the chat and pretend the original card was fine.

For a broader question-first workflow, [How to Use AI for Active Recall](/blog/how-to-use-ai-for-active-recall/) explains how to keep hints and explanations from arriving too early.

## Privacy and permissions before you connect

When Claude calls `sql_query`, Flashcards returns the requested card data to the external AI client. The selected client or model provider may process or retain that data according to its own account settings and terms. It does not stay only inside Flashcards.

Before using a private deck, check whether its text may be sent to that provider. A vocabulary deck and cards copied from patient notes, employer documents, or a private journal deserve very different decisions. Fetch only the small set needed for the session, and avoid mixing unrelated connectors or sensitive sources into the same chat.

Blocking `sql_execute` protects against writes in a client that enforces the block. It does not turn the OAuth credential into a read-only credential, and it does not make the returned text private. If your client cannot disable individual tools or show calls for approval, treat the connection as write-capable.

The detailed threat model is in [Is MCP Safe for Flashcards?](/blog/is-mcp-safe-for-flashcards/). For a normal quiz, the short checklist is enough: verify the MCP URL, confirm the workspace, block writes, request few rows, and know where the returned data goes.

## Keep the due-card batch small

“AI quiz me on my flashcards” sounds like a request for the entire deck. It usually works better as a request for five or ten cards.

A small batch gives you room to answer fully, ask for a hint, and notice why you missed something. It also limits how much card text reaches the external client. When you finish the official reviews in the app, start another batch only if you still have attention left.

Avoid asking Claude to choose “the most important” cards unless you have a real rule for importance. The sample query has a narrower rule: include untouched new cards and scheduled cards whose due time has arrived. New cards sort first, followed by scheduled cards from the oldest due time forward. That stable snapshot is useful for a short drill, but it does not claim to match the app's Review-screen order. FSRS remains responsible for timing; Claude only changes how the question is delivered.

## FAQ about Claude, MCP, and due-card reviews

### Can Claude quiz me on my own flashcards?

Yes. With the Flashcards MCP connector, Claude can read a small eligible-card snapshot from the workspace you confirm, show only each front, wait for your answer, and reveal the stored back. The prompt above keeps the session on `list_workspaces` and `sql_query`.

### Does Claude mark a card reviewed after I answer?

No. The agent surface cannot submit review events or change FSRS scheduling fields. Complete the same due reviews in the [Flashcards app](https://app.flashcards-open-source-app.com/) so your ratings are recorded and the cards receive their next due dates.

### Is this a read-only MCP connection?

The connector as a whole is not read-only. `list_workspaces` and `sql_query` are read-only tools; `sql_execute` can write. The quiz-only setup depends on blocking or declining `sql_execute` in the client. OAuth currently has one `flashcards` scope rather than separate read and write grants.

### Can the AI choose Again, Hard, Good, or Easy for me?

It should not. Claude can keep rough session notes such as retrieved, partial, and missed, but those labels are not FSRS ratings. Choose the official rating yourself in the app.

### Are new cards included in the prompt's query?

Yes. Untouched new cards have `due_at IS NULL`, which makes them eligible under the documented due rule. They sort before scheduled due cards in this query. Cards with a future `due_at` are excluded.

### Does `workspaceId` change my default workspace?

No. Passing `workspaceId` to `sql_query` targets that workspace for one call. Omitting it uses the selected default, while supplying it does not persist a new default.

## Keep the AI flashcard tutor narrow

The useful version of an **AI flashcard tutor** has a small job: load a few eligible fronts, wait for your answers, offer limited help, and reveal the answers already stored with the cards.

Keep `sql_execute` blocked in the client and use the server-enforced read-only `sql_query` for the snapshot. Treat the first-attempt labels as disposable chat notes. Then complete the official reviews in Flashcards so FSRS receives your ratings and schedules the cards again. Until that happens, every card from the chat remains due.
