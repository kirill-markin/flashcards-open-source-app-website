---
title: "How to Import Mochi Flashcards into Nibomo"
description: "Move a .mochi deck into Nibomo and check how Markdown, template fields, and cards with three or more sides carry over."
date: "2026-11-12"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1f3737e982f03ddec8b583cb496e0a8b7d46569493c137ebc414fe0e9e3453e5.webp"
keywords:
  - "Mochi to Nibomo"
  - "import Mochi flashcards"
  - "Mochi deck export"
---

Mochi can reveal a question, an answer, and an example one side at a time. In Nibomo, the answer and example can share the back. If you want to recall the example on its own, give it a separate card. Export one small Mochi deck first so you can make those decisions before moving the rest.

![A person clips two blue Moon prints to a rooftop clothesline, with a crescent on one sheet and two lunar disks on the other](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1f3737e982f03ddec8b583cb496e0a8b7d46569493c137ebc414fe0e9e3453e5.webp)

This guide was prepared with AI using Mochi's official documentation and Nibomo's import code. The Moon phases example shows what to check after an import.

## Export a deck as a .mochi file

Open a small deck in Mochi, open its menu, and choose **Export**. Select **Mochi format** and save the `.mochi` file. Select **Include subdecks** if you want the deck's children in the same file. The archive can contain the card text, templates and field values, and attached media. Leave it packed for Nibomo. [Mochi export formats](https://mochi.cards/docs/import-and-export/exporting/) · [Mochi export options](https://github.com/mochi-cards/mochi-translations/blob/master/translations.edn)

For a copy you can restore in Mochi, use **Settings → Export everything** and keep that archive. Cards created in Nibomo start with a new review schedule. Your Mochi review history and due dates stay in Mochi. [Mochi backup instructions](https://mochi.cards/docs/getting-started/backing-up/)

## Use Import from Mochi in Nibomo

1. Open the [Nibomo web app](https://app.nibomo.com/?locale=en) and switch to the workspace where you want the cards. Use the web app if your installed app is missing the Mochi option.
2. Go to **Library → Import** and select **Import from Mochi** under **From another app**.
3. Select **Choose files**, pick the `.mochi` file, then select **Start import**.

Nibomo opens an online AI chat with the file and an import request. The chat can save cards directly to that workspace as it goes. Each file can be up to 30 MiB. If your export is larger, try exporting subdecks individually. [Nibomo import guide](/docs/import-flashcards/)

## Check three cards before moving the rest

Suppose your trial deck is called **Moon phases**. Include a plain Markdown card, a card made from a template, and a card with three sides. In Mochi's editor, `---` on its own line starts another side. A template can use placeholders such as `<<Question>>` to show the values saved on each card. [Mochi card sides and template fields](https://mochi.cards/docs/cards/)

| In the Mochi trial deck | Expected Nibomo front | Expected Nibomo back |
| --- | --- | --- |
| Two sides, with `**Waxing crescent**` on the second | Which phase follows a new moon? | **Waxing crescent** in bold |
| A template with `Question` and `Answer` fields on separate sides | In which phase does the Moon look fully lit from Earth? | Full moon |
| Three sides, with an answer on side two and a detail on side three | How long is one cycle of Moon phases? | About 29.5 days, from one new moon to the next |

The table shows one way to convert those cards. On the three-sided card, the final detail works as part of the answer. To study it separately, make another card that asks “Which phase marks the start of a new cycle?” [NASA's guide to Moon phases](https://science.nasa.gov/moon/moon-phases/)

Open **Library → Cards** and find the three questions. Check that the fronts contain just the prompts. On the backs, look for the bold answer, the filled-in template value, and the extra detail from side three. A template can supply the card text during conversion. Keep the original archive for the template rules themselves.

Include an image, link, tag, or subdeck in your trial if you rely on one. Check that the image opens, that the link goes where you expect, and that you can find the card under the intended tag or deck. Keep any source audio you rely on in your Mochi archive. Treat formatting, attachments, links, and deck organization as things to check on your own cards before you move a larger batch.

## Move one deck at a time

Once the trial cards look right, import the remaining decks in batches. If the chat stops partway through, compare its summary with the cards already in your Library. Identify the missing prompts and ask the chat to continue with those cards before retrying the whole file.
