---
title: "Mochi: Move Cards Between Decks Without Losing Track"
description: "Move existing Mochi cards to another deck, distinguish card moves from deck nesting, and check membership, templates, and review queues with a four-card example."
date: "2026-10-31"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1ddf88e64d6d1b16be0576a95dcb21d1ec1d3220974665c65a86eed6d3087550.webp"
keywords:
  - "move cards between decks in Mochi"
  - "Mochi move card"
  - "Mochi bulk move cards"
  - "Mochi move deck"
---

To move cards between decks in Mochi, open a card and look for **Move card to...**, then choose the destination deck. For several selected cards, look for **Actions → Move to**. Start with one card, then open both decks and check which card actually changed membership before moving the rest.

The easy mistake is checking only the number at the top of a deck. A parent view can include cards from its subdecks, so a card may still appear under the same parent after a successful move. Two wrong selections can also produce exactly the right count.

![A woman carries a yellow chair from a dining table toward a red hallway chair while two other chairs remain at the table](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1ddf88e64d6d1b16be0576a95dcb21d1ec1d3220974665c65a86eed6d3087550.webp)

The four-card example below gives you a small plan for reorganizing a desktop or web collection, including what to check when a card stays visible under its old parent or looks different in its new deck.

## Find the card move command

For one card, open it from its source deck. A [report on Mochi's own forum](https://forum.mochi.cards/posts/222) describes clicking the deck name in the card footer to open **Move card to...**. That's a useful place to look, though the report describes an older interface and placement may differ in your version.

Mochi's [official English interface strings](https://github.com/mochi-cards/mochi-translations/blob/07cae54ad3b4648450705d18f9093c784d347047/translations.edn) confirm the command names **Move card to...**, **Actions**, and **Move to**.

For a batch, select the intended cards using your version's selection controls. Review their names, then choose **Actions → Move to**, when available, and select the destination. Mochi's [changelog](https://mochi.cards/changelog/) records multi-card selection and bulk actions in version 1.14.2; the selection gesture depends on the interface you're using.

Use the full deck path when names repeat. `Spanish / Lesson 2` and `French / Lesson 2` are different destinations. Choose the card move command: **Duplicate**, export/import, and template changes do different jobs.

## Decide whether to move cards or the whole deck

A card move changes which deck contains an existing card. Moving a deck inside another deck changes the hierarchy: the source remains a subdeck. Mochi documents both [nested decks and moving a deck into another deck](https://mochi.cards/docs/decks/intro/).

For example, putting the whole `Lesson 1` deck inside `Spanish` keeps it as a separate lesson under the course. To combine its cards with Lesson 2's direct members, move the cards into `Lesson 2` instead.

If all you need is a temporary practice subset, a saved view may be enough. A view filters existing cards without creating a deck or duplicating them. Our [Mochi custom views guide](/blog/mochi-custom-views-cram/) covers that workflow. Continue with a move when the cards genuinely belong somewhere else.

## Write down four cards before changing anything

Suppose `Spanish` contains two subdecks. You want to move A and B from `Lesson 1` into `Lesson 2`, leaving C alone. D already belongs in Lesson 2.

The letters below are example labels, not real Mochi card IDs.

| Card | Identifying title | Direct deck before | Intended direct deck after |
| --- | --- | --- | --- |
| A | `hola — greeting` | `Spanish / Lesson 1` | `Spanish / Lesson 2` |
| B | `gracias — thanks` | `Spanish / Lesson 1` | `Spanish / Lesson 2` |
| C | `Lesson 1 reference notes` | `Spanish / Lesson 1` | Unchanged |
| D | `adiós — goodbye` | `Spanish / Lesson 2` | Unchanged |

For your collection, record the actual titles and card IDs where available. Titles alone can be ambiguous. For A and B, keep a copy of the Markdown or field values, the template names, and any important attachments. Note their archive and reverse-review state, visible review history, and due information. A screenshot or short note gives you something concrete to compare after the move. Include C and D in the membership list so you can check that they stayed put.

Before reorganizing a large collection, save a current native backup. Mochi's [backup instructions](https://mochi.cards/docs/getting-started/backing-up/) describe **Settings → Export everything** for a `.mochi` export. The native format includes templates, attachments, review history, order, and deck structure; Markdown and CSV exports omit review history and templates. [Mochi's export documentation](https://mochi.cards/docs/import-and-export/exporting/) explains the formats, and our [backup and restore guide](/blog/mochi-backup-restore/) covers recovery choices.

The backup is a recovery copy. Exporting and importing cards is a separate operation from changing an existing card's deck.

## Move A first and compare both decks

1. Open A in `Spanish / Lesson 1`. Match its title and content with your record.
2. Open the card move menu and choose `Spanish / Lesson 2`.
3. Open Lesson 2 and find A. Check its content, template or fields, attachments, and recorded review state.
4. Open Lesson 1 and check direct membership. B and C should remain there; A should no longer belong directly to it.

At this point, expect **Lesson 1: B and C — 2 cards**, and **Lesson 2: A and D — 2 cards**. The names matter as much as the numbers.

Inspect A without grading a review, so you don't add a review event during the comparison. If its content or state differs from your record, identify the difference before moving B. The goal is to compare what happened, rather than assume the move preserves every setting or schedule.

Once A checks out, move B using the same approach. In a larger collection, select the remaining intended cards and use **Actions → Move to**. Check the selected identities before confirming; a selection count doesn't tell you which cards are included.

## Count direct membership separately from the parent view

After both intended moves, the example should look like this:

| Scope | Before | After |
| --- | --- | --- |
| Lesson 1, direct members | A, B, C — 3 cards | C — 1 card |
| Lesson 2, direct members | D — 1 card | A, B, D — 3 cards |
| Spanish, direct members | None — 0 cards | None — 0 cards |
| Spanish, including both subdecks | A, B, C, D — 4 cards | A, B, C, D — 4 cards |

The parent total stays four because both lessons remain inside Spanish. Mochi [allows parent pages to show subdeck cards](https://mochi.cards/docs/decks/intro/); that view doesn't establish direct membership.

Use comparable views before and after: remove search and tag restrictions, account for archived cards, and check whether subdeck cards are included. A card missing from a filtered view may still belong to that deck. Open the card and check its deck, rather than treating a search result or a review queue as the membership list.

Then compare names or IDs. Moving A and C by mistake would still leave one card in Lesson 1 and three in Lesson 2. Only the membership list catches that error: B would be left behind and C moved accidentally.

## If the card looks different or leaves the review queue

A card's destination, displayed content, and review eligibility need separate checks. If you can find A in Lesson 2 but its question or answer looks different, compare its template and field values with your saved copy first.

A [deck template](https://mochi.cards/docs/decks/templates/) supplies the default for **new** cards. **Add Template** isn't a conversion step for cards you're moving. Mochi's [template documentation](https://mochi.cards/docs/templates/intro-to-templates/) explains that applying a template to an existing card without the required fields can make it look blank: the template renders instead of the stored Markdown. That rendering behavior doesn't delete the original Markdown. Our [existing-card template guide](/blog/mochi-templates-existing-cards/) covers converting that content into fields.

If the card is in the destination but missing from your review queue, compare these settings with your before-move notes:

- **Archived:** archived cards and decks leave New cards and Due today while keeping content and history. Check the card, destination deck, and its parents: archiving a parent deck also removes its subdecks from review. [Archiving documentation](https://mochi.cards/docs/reviewing/archiving/)
- **Different review settings:** subdecks can inherit review settings unless overridden. Compare the destination's effective settings with the source's. [Deck documentation](https://mochi.cards/docs/decks/intro/)
- **Reverse reviews:** forward and reverse directions have separate histories and schedules. Compare both directions if you use them; one queue entry doesn't describe the whole card. [Reverse-review documentation](https://mochi.cards/docs/reviewing/review-reverse/)

Keep the source deck until you've checked A and B in the destination, C still in its source, and D unchanged. A matching parent total alone can't tell you that the reorganization went as planned.

*Researched and written with AI assistance from Mochi's documentation, interface strings, and forum, checked October 31, 2026. The four-card example is a worked plan; no card move was executed in a signed-in Mochi collection.*
