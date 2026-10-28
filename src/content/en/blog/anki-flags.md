---
title: "Anki Flags: Find, Change, and Clear the Right Cards"
description: "Use Anki flags for individual questions. Check card versus note selection, search by color, and clear a mixed repair list without changing sibling cards."
date: "2026-10-28"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1eb9e273fe4e1adafadce0ec9fcb734b1cbaedde80873312e0ffcb13f7ce2b03.webp"
keywords:
  - "Anki flags"
  - "Anki flag colors"
  - "remove flags Anki"
  - "Anki flags vs tags"
  - "Anki marked cards"
---

Select a red card and a blue card in Anki, then choose **Red**. Both can lose their flags. If the blue card is current, that choice turns both red instead. That's an awkward surprise when you're just trying to clear reminders from questions you've repaired.

For a reminder on one question, select it in **Cards** mode and add a flag. Find it later with a color search such as `flag:1`. When the work is finished, clear one color at a time by choosing that same color again. Check the selected cards first: Notes mode can bring their siblings into the operation.

The example below uses five new cards from three notes. Its searches and flag changes were executed through the Python API for Anki's released **26.09.3** backend on October 28, 2026. Desktop selection and menu behavior were checked in that release's source code; they weren't tested through desktop clicks.

![A ceramic restorer peels a red sticker from a mended bowl while a second bowl keeps its blue marker](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1eb9e273fe4e1adafadce0ec9fcb734b1cbaedde80873312e0ffcb13f7ce2b03.webp)

## Put the reminder on the right question

A flag belongs to an individual card. A note can generate several cards, and each can have a different flag or none. A card has room for **one flag at a time**: choosing blue for a red card replaces red. Anki's [flag documentation](https://docs.ankiweb.net/manual/editing#using-flags) describes that scope.

In desktop Anki, open **Browse**, use the switch to the left of the search box to select **Cards**, and select one card. Choose **Cards → Flag → Red** to add a red flag to an unflagged card. Choose Red again on that card to remove it. During review, the flag shortcuts are `Ctrl+1` through `Ctrl+7` on Windows and `Cmd+1` through `Cmd+7` on Mac.

You choose what the colors mean. Red could mean “check the wording” and blue “check the answer.” Keep meanings you already use; searches identify the colors by number.

| Number | Default color |
| --- | --- |
| `1` | Red |
| `2` | Orange |
| `3` | Green |
| `4` | Blue |
| `5` | Pink |
| `6` | Turquoise |
| `7` | Purple |

The mapping comes from Anki's [released flag definitions](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/qt/aqt/flags.py). Renaming a flag's label in the browser doesn't change its number.

## Follow two reminders through a small collection

Here's the complete starting collection used for the backend check. All five cards are in an ordinary deck named **FlagLab**, with no subdecks. Notes A and B use **Basic (and reversed card)**; note C uses **Basic**. A1–C1 are labels for this article, not Anki IDs.

| Card | Note | Question → answer | Initial flag | Note tags |
| --- | --- | --- | --- | --- |
| A1 | A | Capital of Peru? → Lima | None | `repair` |
| A2 | A | Lima → Capital of Peru? | Red | `repair` |
| B1 | B | Capital of Japan? → Tokyo | Blue | `marked` |
| B2 | B | Tokyo → Capital of Japan? | None | `marked` |
| C1 | C | What is 6 × 7? → 42 | None | None |

Suppose the reverse prompt A2 needs inspection and B1 needs a separate check. Their flags identify those two questions without flagging A1 or B2.

The tags show a different scope. `repair` belongs to note A, so both A1 and A2 match a search for it. `marked` belongs to note B, so B1 and B2 both match. Anki gives [the marked tag](https://docs.ankiweb.net/manual/editing#the-marked-tag) special treatment, including a star during review; it still applies to the shared note.

A flag also doesn't separate a note's fields. If repairing A2 requires editing a shared field, preview A1 afterward too. The reminder belongs to one question, while the text you've changed may appear in both directions. Our [tags versus decks guide](/blog/anki-tags-vs-decks/) covers the broader organization choice.

## Find the list and check its membership

Open Browse in Cards mode and search:

```text
deck:FlagLab -flag:0
```

`flag:0` finds cards without a flag. Its negation, `-flag:0`, finds any flagged card: **A2 and B1** in the starting collection. Use `deck:FlagLab flag:1` for red or `deck:FlagLab flag:4` for blue. Anki documents these [flag searches](https://docs.ankiweb.net/manual/searching#flags).

These are the executed starting results. The last column counts matching cards and the distinct notes they come from. A count of one note can represent several cards when you act in Notes mode.

| Exact search | Matching cards | Cards / notes |
| --- | --- | --- |
| `deck:FlagLab` | A1, A2, B1, B2, C1 | 5 / 3 |
| `deck:FlagLab flag:1` | A2 | 1 / 1 |
| `deck:FlagLab flag:4` | B1 | 1 / 1 |
| `deck:FlagLab -flag:0` | A2, B1 | 2 / 2 |
| `deck:FlagLab flag:0` | A1, B2, C1 | 3 / 3 |
| `deck:FlagLab tag:repair` | A1, A2 | 2 / 1 |
| `deck:FlagLab tag:marked` | B1, B2 | 2 / 1 |
| `deck:FlagLab (flag:1 or flag:4)` | A2, B1 | 2 / 2 |
| `deck:FlagLab flag:1 tag:repair` | A2 | 1 / 1 |
| `deck:FlagLab flag:1 tag:marked` | None | 0 / 0 |

Use your own deck restriction in a real collection. Deck searches include subdecks; quote a name containing spaces, such as `deck:"French Practice"`. Spaces between conditions mean AND, while the parenthesized expression above accepts either color. The [search-filter guide](/blog/anki-search-filters/) gives a larger worksheet for checking those boundaries.

## Stay in Cards mode for a card repair list

From the starting collection, search `deck:FlagLab flag:1`. Cards mode shows A2. Notes mode shows note A, because A2 matched.

Select that note and a flag operation includes **A1 and A2**. Notes mode expands the selection to the note's cards, including the sibling that didn't match your search. Its current card is the note's first card, A1 here. Because A1 starts unflagged, choosing Red would make both siblings red. The released browser's [selection implementation](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/qt/aqt/browser/table/state.py#L177-L217) and the manual's [row-selection rules](https://docs.ankiweb.net/manual/browsing#rows) establish that behavior.

Both siblings changed because selecting their note included both cards in the operation. For a repair list of individual questions, switch to Cards mode **before selecting rows**, then check the selection again.

## Changing a color replaces it

Starting from the original collection, select A2 alone in Cards mode and choose **Cards → Flag → Blue**. A2 was red, so blue replaces it. A1 stays unflagged.

The backend check produced:

| Check | Before | After changing A2 to blue |
| --- | --- | --- |
| `deck:FlagLab flag:1` | A2 | No cards |
| `deck:FlagLab flag:4` | B1 | A2, B1 |
| A1's flag | None | None |
| Note A's `repair` tag | Present | Present |

If one card needs both a wording check and a fact check, it can't hold a separate flag for each. Choose a color for the next action. Tags can hold several labels when those labels apply to the whole note.

## A mixed selection makes the toggle surprising

Return to the original state: **A2 red, B1 blue**. If you just changed A2 to blue, select A2 alone and choose Red to restore it. Then select those two cards in Cards mode. Anki distinguishes the selection from the *current card*, usually the one you most recently selected or clicked.

Anki 26.09.3's [browser action](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/qt/aqt/browser/browser.py#L1056-L1075) first compares the chosen color with the current card's flag. If they match, it applies no flag to the selection. Otherwise, it applies the chosen color to the selection.

Each row below is a separate case, starting from A2 red and B1 blue:

| Selected cards | Current card | Choose | Result for A2 and B1 |
| --- | --- | --- | --- |
| A2 red, B1 blue | A2, red | Red | Both lose their flags |
| A2 red, B1 blue | B1, blue | Red | Both become red |

Choosing Red can therefore clear the mixed list or recolor it. In the backend check, the released browser's decision was reproduced and the resulting flag value applied through the API. The desktop clicks themselves weren't automated.

Separate the colors before clearing a finished batch, so the result doesn't depend on which color happens to be current.

## Clear the finished cards one color at a time

The released browser's [Flag menu](https://github.com/ankitects/anki/blob/29bb700b951e3f0c0cb69b77c0180fc1fe33e6ba/qt/aqt/forms/browser.ui#L255-L266) lists seven colors, without a separate “No Flag” action. Use the same-color toggle to remove flags in this version.

Starting with A2 red and B1 blue:

1. Open Browse and switch to **Cards** mode.
2. Search `deck:FlagLab flag:1`. Check that A2 is the only result. Select it and choose **Cards → Flag → Red** to remove its red flag.
3. Run the search again. It should return no cards in this example.
4. Search `deck:FlagLab flag:4`. Check that the result is B1 alone. Select it and choose **Cards → Flag → Blue**.
5. Run `deck:FlagLab -flag:0` again. It should now return no cards.

In your own collection, select only the finished cards within each color search. A color may also mark questions you haven't fixed yet. Select all results only when every result belongs to your finished batch, and repeat for its other colors. Your final `-flag:0` search may still contain unfinished work; check that the cards you cleared are absent.

If you'd changed A2 to blue in the previous exercise, both A2 and B1 would be in the blue search instead. Once you've checked that both are finished, selecting them in Cards mode and choosing Blue clears both; every selected card starts with the same color.

## Check what clearing left behind

After clearing the two initial flags, this example should contain:

| Check | Expected result |
| --- | --- |
| All cards in `deck:FlagLab` | The same 5 cards from 3 notes |
| `deck:FlagLab -flag:0` | No cards |
| `deck:FlagLab flag:0` | A1, A2, B1, B2, C1 |
| `deck:FlagLab tag:repair` | A1, A2 |
| `deck:FlagLab tag:marked` | B1, B2 |

Removing a flag leaves `repair` and `marked` in place. If you also want to remove either tag, decide that separately for the whole note and its siblings.

In the backend exercise, all five cards' scheduling values stayed unchanged and the review log stayed empty. These were new demonstration cards with no review history. The clearing check explicitly set the flag value to zero; the same-color menu instructions above follow the inspected browser code. The exercise didn't test sync, mobile controls, or learning outcomes.

A flag leaves a reminder on a card. If you also need to stop seeing the question while you repair it, use [burying or suspending](/blog/anki-bury-vs-suspend/) to control how long it stays out of review. Clearing the reminder can then be a small, separate step after the repair.

*About this guide: Nibomo is a flashcards product owned by Kirill Markin. AI assisted the research, backend checks, drafting, editing, and illustration. The checks described here were performed by the AI workflow; they aren't a claim that Kirill personally tested or reviewed the steps.*
