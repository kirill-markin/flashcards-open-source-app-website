---
title: "Mochi API: Create a Card, Read It Back, and Update It"
description: "Use Mochi's HTTP API to create one Markdown card, check its saved ID, and update it without blindly repeating a create request."
date: "2026-11-18"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/85eaa1f1f92dbe840e856c59602048f030823c5b1fa73536d1e5a5cdc74e03b5.webp"
keywords:
  - "Mochi API"
  - "create Mochi cards API"
  - "Mochi API authentication"
  - "Mochi API update card"
---

You send a card to Mochi, then lose the response. Should your script send it again? That decision gets easier when each source note has a saved card ID. Start your **Mochi API** integration with one question, read it back, then improve its answer using the same ID.

![A luthier adjusts a worn violin with a blank repair ticket tied to its scroll](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/85eaa1f1f92dbe840e856c59602048f030823c5b1fa73536d1e5a5cdc74e03b5.webp)

This AI-assisted guide follows Mochi's official documentation, checked November 18, 2026. The examples and acceptance worksheet are original and haven't been run against an authenticated Mochi account. Nibomo publishes this guide and builds a separate flashcard app.

## Set up a small rehearsal

Create an empty practice deck called `API rehearsal`, without a template. This makes the result easy to inspect: one source note should produce one card. For cards that use fields, see the [Mochi templates guide](/blog/mochi-templates-existing-cards/).

[Mochi's pricing page](https://mochi.cards/pricing/) lists API keys as a Pro feature. Manage keys in Account Settings. Authentication uses HTTP Basic Auth, with the key as username and an empty password. [API authentication](https://mochi.cards/docs/api/#authentication)

The commands below use Bash, `curl`, and a text editor. If your terminal uses Zsh, enter `bash` first; this also works from an existing Bash session:

```sh
bash
```

In that Bash session, enter the key at a hidden prompt:

```bash
read -r -s -p 'Mochi API key: ' MOCHI_API_KEY
printf '\n'
```

Paste the key and press Enter. Keep this terminal open for the remaining commands. Work in a fresh directory so the response files won't overwrite another rehearsal.

Save this worksheet in a local text file before sending anything. The source key is your own label, not a Mochi API field.

| Item | What to record |
| --- | --- |
| Source key | `python-list-length-001` |
| Deck ID | Copy after checking the destination |
| Card ID | Leave empty until creation is confirmed |
| Creation status | Start with `not sent` |
| Accepted content | Keep the create and update JSON files |

## Find the deck before writing

Fetch the decks:

```bash
curl --silent --show-error --fail-with-body \
  --user "${MOCHI_API_KEY:?Enter the API key first}:" \
  --header 'Accept: application/json' \
  --output decks.json \
  --write-out 'HTTP %{http_code}\n' \
  https://app.mochi.cards/api/decks
cat decks.json
```

Find `API rehearsal` in `docs` and copy its `id` into the worksheet. Lists can use `bookmark` pagination; a missing deck may be on another page. [Pagination reference](https://mochi.cards/docs/api/#pagination)

Continue only after a successful request and an exact deck match. These commands print the HTTP status and save the response body. If `curl` reports an error, stop and inspect that file before moving to another step. Reading a saved file with `cat` doesn't mean the request succeeded.

## Create one card and keep its receipt

Save this as `create-card.json`, replacing `REPLACE_WITH_DECK_ID` with the ID from your worksheet:

```json
{
  "deck-id": "REPLACE_WITH_DECK_ID",
  "content": "Which Python built-in returns the number of items in a list?\n---\n`len`.\n\nCapture reference: `python-list-length-001`."
}
```

Card creation takes `content` and `deck-id` and returns the created card. [Create-card reference](https://mochi.cards/docs/api/#create-a-card)

The `\n` escapes put `---` on its own line between the question and answer, as in the [Markdown import walkthrough](/blog/mochi-markdown-import/). The capture reference is there to help you find this practice card later. It doesn't enforce uniqueness.

Change the worksheet's creation status to `outcome unknown`, then send this request **once**:

```bash
curl --silent --show-error --fail-with-body \
  --user "${MOCHI_API_KEY:?Enter the API key first}:" \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data-binary @create-card.json \
  --output create-response.json \
  --write-out 'HTTP %{http_code}\n' \
  https://app.mochi.cards/api/cards/
cat create-response.json
```

After a successful request with a 2xx response, copy the returned `id` into your worksheet and change the status to `confirmed`. Keep `create-response.json`. If the response is incomplete or has no usable ID, leave the status unresolved and inspect the practice deck before doing anything else. Rerunning creation to get a cleaner response could leave you with another card.

## Read the card, then improve its answer

Set the variable to the returned ID, replacing the whole placeholder:

```bash
MOCHI_CARD_ID='REPLACE_WITH_RETURNED_CARD_ID'
```

Retrieve that card:

```bash
curl --silent --show-error --fail-with-body \
  --user "${MOCHI_API_KEY:?Enter the API key first}:" \
  --header 'Accept: application/json' \
  --output read-response.json \
  --write-out 'HTTP %{http_code}\n' \
  "https://app.mochi.cards/api/cards/${MOCHI_CARD_ID:?Set the confirmed card ID first}"
cat read-response.json
```

Compare `id`, `deck-id`, and `content` with your worksheet and payload. Open the card in Mochi too: the question should appear first, followed by the answer and capture reference.

Save `update-card.json` with a more useful answer:

```json
{
  "content": "Which Python built-in returns the number of items in a list?\n---\n`len`. For example, `len([4, 8, 12])` returns `3`.\n\nCapture reference: `python-list-length-001`."
}
```

Mochi uses `POST` to the card's ID URL for updates. [Update-card reference](https://mochi.cards/docs/api/#update-a-card)

```bash
curl --silent --show-error --fail-with-body \
  --user "${MOCHI_API_KEY:?Enter the API key first}:" \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data-binary @update-card.json \
  --output update-response.json \
  --write-out 'HTTP %{http_code}\n' \
  "https://app.mochi.cards/api/cards/${MOCHI_CARD_ID:?Set the confirmed card ID first}"
cat update-response.json
```

The `:?` expression stops the request if the ID is unset or empty. That's especially useful on the update: an empty ID would otherwise point at the collection URL used for creation.

Repeat the **read** command and inspect the card again. Use this acceptance worksheet before automating more notes:

| Check | Passing result |
| --- | --- |
| Identity | The read-back `id` matches the saved ID |
| Destination | `deck-id` matches `API rehearsal` |
| Stored answer | `content` includes `len([4, 8, 12])` and result `3` |
| Rendered sides | One question side, then the updated answer side |
| Deck contents | Exactly one card with this capture reference |

These are expected results for your rehearsal, not reported test results. Once finished, clear the key with `unset MOCHI_API_KEY` and enter `exit` to leave the Bash session you opened.

## Keep uncertain writes out of the rerun queue

Mochi allows one concurrent API request per account and documents `429` responses. Its reference makes no idempotency promise for creation. [Rate limits](https://mochi.cards/docs/api/#rate-limits)

A timeout leaves a practical question: did the card arrive before the connection broke? Keep the worksheet unresolved. Inspect the saved response and look in `API rehearsal` for the capture reference. If the card exists, record its ID and read it back. If you can't establish the outcome, investigate before another create request.

For an interrupted update, you already have the ID. Read that card and compare its answer with `update-card.json` before deciding whether another write is needed. A fresh read is also how you check a correction after a successful update.

When this becomes a script, save the source-key-to-card-ID mapping before processing that source again. A known card ID directs the next correction to that card. An unresolved creation attempt should stay unresolved until you've checked it; sending it through the normal create path loses the distinction your worksheet preserved.

For occasional file transfers, [Markdown import](/blog/mochi-markdown-import/) may be enough. For the broader app decision, see the [Mochi review](/blog/mochi-alternative/).
