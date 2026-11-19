---
title: "Anki Review Ahead: What Happens to Due Dates Before a Trip"
description: "See what Anki’s Review Ahead includes, target your travel dates, and check which cards are still due after reviewing early."
date: "2026-11-19"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/686e62a2ad5a14849f798227aa2164d4c9a7ae3263768cced624dcbfe14662ed.webp"
keywords:
  - "Anki review ahead"
  - "Anki review ahead before vacation"
  - "Anki Custom Study Review Ahead"
  - "Anki future due cards"
  - "Anki review ahead reschedule"
---

A review you do today can put the same card back on your schedule while you're away. In a six-card Anki test, rating that card **Good** moved it from the first day of a three-day trip to the second. A card with a longer interval moved beyond the trip. You can use a filtered deck to review the exact days you'll miss and check the new dates before you leave.

![A hand packs a yellow pear into a travel bag while a green pear stays on the kitchen counter](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/686e62a2ad5a14849f798227aa2164d4c9a7ae3263768cced624dcbfe14662ed.webp)

## What Review Ahead actually gathers

In desktop Anki, open your deck and choose **Custom Study → Review ahead**. Count forward to the last day you'll miss. If today is day 0, you'll be away on days +1 through +3, and you'll study again on day +4, enter **3** and click **OK**. Anki opens **Custom Study Session**, a filtered deck that reschedules cards based on your answers. The preset looks for cards due on or before day +3, so today's and overdue cards can come along too. [Anki's Custom Study manual](https://docs.ankiweb.net/manual/filtered-decks#custom-study) · [Review Ahead code in Anki 26.09.4](https://github.com/ankitects/anki/blob/26.09.4/rslib/src/scheduler/filtered/custom_study.rs#L228-L235)

The test used **French** as the selected deck. The last two columns show what each method gathered from the same six cards.

| Home deck | Original due day | Review ahead for 3 days | Filter for days +1 to +3 |
| --- | --- | --- | --- |
| French | −2 (overdue) | Included | Skipped |
| French | 0 (today) | Included | Skipped |
| French | +1 (first day away) | Included | Included |
| French | +3 (last day away) | Included | Included |
| French | +4 (return) | Skipped | Skipped |
| Other | +2 (during the trip) | Skipped | Skipped |

The test used the Anki 26.09.4 backend with FSRS enabled. The six cards started in review with chosen due dates and intervals in a disposable collection. The desktop steps were checked against the manual and the released dialog source. [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4) · [Desktop filtered deck dialog](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/filtered_deck.py)

## Review the dates you'll be away

If you opened **Custom Study Session**, click **Empty** to return any cards it still holds. Then open **Browse**, switch the table to **Cards**, and run this search.

```text
deck:"French" is:review -is:learn prop:due>=1 prop:due<=3
```

Replace `French` with your deck name. The search includes its subdecks and selects regular review cards, leaving out learning and relearning. Both date bounds are inclusive. For two days away starting tomorrow, change `3` to `2`. For one day away starting tomorrow, use `1` for both bounds. [Anki's due-date search reference](https://docs.ankiweb.net/manual/searching#card-properties)

1. In **Browse**, right-click a column heading and show **Due** and **Interval**. Note both values for a couple of cards you can find again. [Anki's Browse columns](https://docs.ankiweb.net/manual/browsing#columns)
2. In the main window, choose **Tools → Create Filtered Deck**. Name it **Trip Reviews**, paste the query into **Search**, and leave **Enable second filter** off.
3. Under **Limit to**, enter the number of cards you want to gather. The test used **2**. Pick **Order due** to gather the earliest dates first. Keep **Reschedule cards based on my answers in this deck** checked and click **Build**. [Anki's filtered deck settings](https://docs.ankiweb.net/manual/filtered-decks#creating-manually)
4. Click **Study Now** and rate what you recalled. Use **Again** if you missed the answer and **Hard** if you got it right with difficulty. If you end the session early, **Empty** sends the remaining cards to their home decks. In a separate test run, both untouched cards went home with their original due dates. [Anki's answer buttons](https://docs.ankiweb.net/manual/studying#answer-buttons) · [Returning cards to their home decks](https://docs.ankiweb.net/manual/filtered-decks#home-decks)

If **Build** pulls in fewer cards than you saw in **Browse**, check **Limit to** first. In the filtered deck options, **Show any excluded cards** opens a search for matches that Anki can't move because they're suspended, buried, or already in another filtered deck. [Anki's exclusion rules](https://docs.ankiweb.net/manual/filtered-decks#creating-manually)

## See what's still due during the trip

With rescheduling on, both test cards picked up a new review entry after **Good** and returned to **French**.

| Due before Build | Interval before Build | Next due after Good on day 0 |
| --- | --- | --- |
| Day +1 | 1 day | Day +2 in repeated runs, still during the trip |
| Day +3 | 50 days | Day +57 in one run, after the trip. The exact day varied across runs. |

Once your cards are back in their home decks, find the same cards in **Browse**. Compare their **Due** values with what you wrote down. Select a card and open **Cards → Info** to see its review history. Run the same search again on day 0 to see the regular reviews still due while you're away, including any you just answered. On a later day, count both offsets from that day. If a card you rated **Again** is still in relearning, check its next due time separately. [Anki's card information menu](https://docs.ankiweb.net/manual/browsing#cards)

For extra practice with the original due dates, uncheck rescheduling before you build the filtered deck. In the preview test, **Easy** returned both cards to **French** with their original dates and intervals. The preview answers still appeared in the review log. [Filtered deck preview walkthrough](/blog/anki-filtered-decks-without-rescheduling/)

*AI contributed to the research, backend testing, writing, and editing, and generated the cover image.*
