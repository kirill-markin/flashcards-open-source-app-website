---
title: "Anki Easy Days: Set Up Lighter Review Days"
description: "Set Anki Easy Days for lighter Sundays, compare Reduced and Minimum, and check when FSRS can move existing due dates."
date: "2026-11-24"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2bd6e39bee7e2edfd0c9d9486a3c1c41f645aad6dc2a0e2dfebdbc060cfd2d97.webp"
keywords:
  - "Anki Easy Days"
  - "Anki lighter weekends"
  - "Anki Reduced vs Minimum"
  - "Anki reschedule Easy Days"
---

If Sundays are usually busy, set Sunday to **Reduced** in Anki Easy Days. As you review, Anki can steer the next due date away from Sunday when the card's interval gives it room. Cards already due on Sunday keep their dates with a regular save. If you use FSRS, leave **Reschedule cards on change** off for that save, since it can recalculate existing dates. Easy Days works with both FSRS and the older SM-2 scheduler. [Anki's Easy Days manual](https://docs.ankiweb.net/manual/deck-options#easy-days) · [Released Easy Days interface](https://raw.githubusercontent.com/ankitects/anki/26.09.4/ts/routes/deck-options/EasyDays.svelte)

![A woman clips a blue shirt onto a clothesline beside a section holding one small yellow towel](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2bd6e39bee7e2edfd0c9d9486a3c1c41f645aad6dc2a0e2dfebdbc060cfd2d97.webp)

## Set up a lighter Sunday in Anki Desktop

1. To check the save, start in **Browse**. Switch to **Cards** mode and jot down the **Due** dates of one or two cards already scheduled for Sunday in the deck you're changing. If **Due** is hidden, right-click a column header to show it. [Anki's Browser columns](https://docs.ankiweb.net/manual/browsing#columns)
2. On the **Decks** screen, click the gear beside the deck and choose **Options**. Check the preset at the top. Edits apply to every deck using that preset. To change just this deck, open the arrow beside **Save**, choose **Clone Preset**, and name the copy before editing. If you study a parent deck, check which presets its subdecks use. [Anki deck options and presets](/blog/anki-deck-options-presets/)
3. Under **Easy Days**, move **Sun** to **Reduced**, the middle position. Set the other six days to **Normal** for a lighter Sunday, or set **Sat** to **Reduced** too for a lighter weekend. [Anki's Easy Days controls](https://raw.githubusercontent.com/ankitects/anki/26.09.4/ts/routes/deck-options/EasyDaysInput.svelte)
4. If FSRS is on, leave **Reschedule cards on change** off. Click **Save**. If you recorded due dates, look up those same cards before reviewing them. Their dates should match if Easy Days was the only scheduling change.

## How much lighter is Reduced or Minimum?

Anki can adjust a review interval by a small amount when it picks the next date. Anki calls that variation *fuzz*. **Normal** keeps a day in the usual mix. **Reduced** makes a day less likely to receive another review as it fills up relative to the other days in range. **Minimum** makes it much less likely from the start. Even then, a card can land on Sunday. The number depends on which dates are available and how many cards are already due around them. [Anki's interval selection code](https://raw.githubusercontent.com/ankitects/anki/26.09.4/rslib/src/scheduler/states/load_balancer.rs)

We made three copies of a 25-card test collection in Anki 26.09.4 with SM-2. All cards had a two-day interval and 250% ease. Each copy had 24 reviews due Tuesday, November 24, and one already due Sunday, November 29. We saved a different Sunday setting in each copy, then answered **Good** on the 24 Tuesday cards. [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4)

| Sunday setting | Newly due Saturday | Newly due Sunday | Newly due Monday |
| --- | ---: | ---: | ---: |
| Normal | 11 | 7 | 6 |
| Reduced | 13 | 4 | 7 |
| Minimum | 15 | 1 | 8 |

Each row shows the 24 next reviews assigned in that run. The card already due Sunday kept its date in all three copies, so each Sunday had one more card than the table shows. Minimum put six fewer new reviews on Sunday than Normal did, and those six landed on Saturday or Monday. The counts show how the preference can redistribute reviews in a controlled run. Your deck's intervals and existing due dates determine how much room Anki has to do that.

## What happens if you reschedule with FSRS?

In Anki 26.09.4, saving an Easy Days change with FSRS and **Reschedule cards on change** both on can recalculate dates in the affected decks. That can move reviews that were already due on other weekdays, and it can make more cards due immediately. [Released deck options code](https://raw.githubusercontent.com/ankitects/anki/26.09.4/rslib/src/deckconfig/update.rs) · [Anki's rescheduling manual](https://docs.ankiweb.net/manual/deck-options#reschedule-cards-on-change)

In a separate test, we rated a synthetic card **Easy** on Tuesday and FSRS assigned it an eight-day interval. We then set a five-day interval and a Sunday due date in the test data. We saved Sunday as **Minimum** in two copies of that collection. With rescheduling off, the date stayed Sunday and the interval stayed five days. With rescheduling on, FSRS recalculated the interval at eight days, moved the card to Wednesday, December 2, and added a rescheduling entry to its history. In this case it assigned the same interval as the original **Easy** answer. [FSRS settings guide](/blog/fsrs-settings/)

## Check the next few Sundays

After a few normal study sessions, open **Stats** and use the deck selector to check **Future Due**. A parent deck's graph includes its subdecks, so select the subdeck directly if that's the one you changed. Compare several upcoming Sundays with the days beside them. Look for a lighter Sunday without a new pileup on Saturday or Monday. The bars use the dates currently scheduled, so a Sunday can still include cards scheduled before the change. [Anki's Future Due graph](https://docs.ankiweb.net/manual/stats#future-due)

For a cap on how many reviews Anki shows today, use **Maximum Reviews/Day** under **Daily Limits**. Reviews beyond the cap can carry over. **New Cards/Day** controls how many new cards Anki introduces. To move an individual review to a specific date, use **Set Due Date** in Browse. [Anki's daily limits](https://docs.ankiweb.net/manual/deck-options#daily-limits) · [How Set Due Date works](/blog/anki-set-due-date-vs-reset/)

*AI assisted with research, drafting, editing, and the test scripts, and generated the cover illustration. The tests used synthetic collections and Anki 26.09.4's Python/Rust scheduling backend on macOS. The desktop steps were checked against the manual and released interface source.*
