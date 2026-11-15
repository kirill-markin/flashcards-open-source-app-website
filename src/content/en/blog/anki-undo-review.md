---
title: "How to Undo an Anki Review After Pressing the Wrong Button"
description: "Undo a mistaken Anki rating, check that the old rating is gone in Card Info, and decide what to do when Undo is unavailable."
date: "2026-11-15"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/7a0c8ab867d18451cb03f4a5cc8f6068e97d32bddf2df2f3e55a850eb2b216d9.webp"
keywords:
  - "Anki undo review"
  - "how to undo a review in Anki"
  - "Anki wrong answer button"
  - "Anki Card Info"
---

Pressed **Easy** instead of **Again** in desktop Anki? If that rating was your last change, choose **Edit → Undo Answer Card** before you grade another card. When the card comes back, click **Show Answer** and rate your original attempt. If you drew a blank before seeing the answer, choose **Again**, even if the answer feels obvious now.

Check the menu before you click. **Undo Answer Card** tells you the last change was a rating, but it doesn't say which card you rated. If you've already graded another card, that same label can refer to a newer rating. [Anki's desktop code](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/main.py#L1272-L1288) sets the [English menu label](https://github.com/ankitects/anki/blob/26.09.4/ftl/core/undo.ftl#L4-L9) from the current undo action.

![An upholsterer lifts one brass tack from a blue chair while the others stay in place](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/7a0c8ab867d18451cb03f4a5cc8f6068e97d32bddf2df2f3e55a850eb2b216d9.webp)

Use **Hard** if you got the answer right but had doubts or took a long time. Use **Again** if you got it wrong or couldn't recall it. See [Anki's answer buttons](https://docs.ankiweb.net/manual/studying#answer-buttons) or the [guide to Again vs Hard](/blog/again-vs-hard-fsrs-flashcards/) if you're unsure how to rate a partial answer.

## Check that the wrong rating is gone

1. Open **Browse**, switch to **Cards** mode if needed, and look up the prompt. If the note makes cards in both directions, select the card with the prompt you saw. If you already know the card ID, [search for it](https://docs.ankiweb.net/manual/searching#object-ids) with `cid:` followed by the ID.
2. Choose **Cards → Info**. The review history is at the bottom of [Card Info](https://docs.ankiweb.net/manual/stats#card-info).
3. For the review you just fixed, look for the corrected **Again** rating (**1**) and confirm the mistaken **Easy** rating (**4**) is gone. Use the review dates and times to tell this attempt apart from older ones. Any earlier Easy ratings can still be there.

## If you can’t undo that answer

If Undo is disabled, points to a different action, or would reverse a newer answer, leave it alone. Undo works backward through your changes, so repeated clicks can undo ratings or edits you meant to keep. For one old misclick, leave the history as it is and grade the card normally the next time it comes up.

[Set Due Date and Reset](/blog/anki-set-due-date-vs-reset/) have their own uses. Set Due Date changes when a card is due, and Reset puts it back in the new queue. Neither replaces a mistaken rating, and there’s no need to reset a deck for one wrong button press.

## What Anki changed in a two-card test

An automated check used the Anki 26.09.4 Python scheduling backend. The desktop instructions were checked against the manual and released source; the test did not open the desktop or mobile app. This article was written with AI assistance.

The test created a disposable deck with two Basic cards: **Triangle → Three sides** and **Hexagon → Six sides**. It rated Triangle **Easy**, undid that answer immediately, then rated the same card **Again**. Anki's [scheduler records the rating and updates the card in the same operation](https://github.com/ankitects/anki/blob/26.09.4/rslib/src/scheduler/answering/mod.rs#L317-L417).

| Step | Triangle’s state | Ratings in its history |
| --- | --- | --- |
| Before rating | New | None |
| After Easy | Review | Easy (4) |
| After Undo | New | None |
| After Again | Learning | Again (1) |

Undo restored Triangle’s original due value, interval, review count, and lapse count. The card and note IDs stayed the same, and Hexagon’s state and history were unchanged after Undo and after the corrected rating. The key check is the empty history after Undo: the Easy entry was removed before Again was recorded.

After the test closed and reopened the collection, the Again rating was still in the history and Undo was unavailable.
