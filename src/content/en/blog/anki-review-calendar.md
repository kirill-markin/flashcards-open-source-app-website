---
title: "Anki Review Calendar: Check Daily Counts and Find Missing Reviews"
description: "Find your daily review count in Anki’s built-in Calendar. Check which cards you answered and track down missing days by deck, study-day cutoff, and sync."
date: "2026-11-26"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0fdf7372ae0cc82f9c6d853a2c387422b3099e1015a51cfef0b0539a4b410c26.webp"
keywords:
  - "Anki review calendar"
  - "Anki review count by day"
  - "Anki Stats Calendar"
  - "Anki review heatmap"
  - "Anki missing reviews"
---

In a small Anki test, the Calendar’s data counted four reviews on one day. Searching that day found three cards. One card got an **Again** and then a **Good**, so it added two reviews to the daily count. To check your own count, open **Stats** in Anki Desktop, select **collection**, and hover over the date in **Calendar**. [Anki’s Calendar documentation](https://docs.ankiweb.net/manual/stats#calendar)

![A photo lab worker examines four prints, two showing the same red bicycle](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0fdf7372ae0cc82f9c6d853a2c387422b3099e1015a51cfef0b0539a4b410c26.webp)

## Check your Anki review count by day

1. Open **Stats**. Start with **collection** to see activity across all decks. Select **deck** to see the selected deck and its subdecks. You can change the selected deck at the bottom of the Stats window. [Anki’s statistics scope](https://docs.ankiweb.net/manual/stats)
2. Check the year above the **Calendar** graph. For an older date, select **all history** at the top of Stats, then use the arrows above the Calendar to find the year you want. [Stats range controls](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/ts/routes/graphs/RangeBox.svelte), [Calendar year controls](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/ts/routes/graphs/CalendarGraph.svelte)
3. Hover over a square for the date and review count. Click a square with reviews to open the search for that study day in **Browse**. Anki appends the day filter to the active Stats search. In Browse, use the switch next to the search box to select **Cards** and see one row per matching card. [Calendar hover and click behavior](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/ts/routes/graphs/calendar.ts), [Stats search forwarding](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/ts/routes/graphs/GraphsPage.svelte), [Browse table modes](https://docs.ankiweb.net/manual/browsing#table-modes)

The Calendar counts answers, including learning and relearning attempts. To see when you answered a particular card and which buttons you pressed, select it in Browse and open **Cards → Info**. [Released review counting code](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/stats/graphs/reviews.rs), [Anki Card Info](https://docs.ankiweb.net/manual/stats#card-info)

If you’re reconciling the daily count with true retention, this worked example shows which answers Anki uses to calculate retention. [Anki retention statistics](/blog/anki-retention-statistics/)

## Four answers on three cards

The test used three cards in an isolated collection. Each row below is one synthetic answer record.

| Study day | Card | Deck | Answer |
| --- | --- | --- | --- |
| Previous day | bonjour | French | Again |
| Previous day | bonjour | French | Good |
| Previous day | merci | French::Audio | Good |
| Previous day | hola | Spanish | Good |
| Today | hola | Spanish | Good |

The Calendar’s data for the previous study day counted **four reviews** across the collection. The search `prop:rated=-1` found **three cards**. When the test looked only at French and its subdeck `French::Audio`, the same day had **three reviews**, and `deck:French prop:rated=-1` found **two cards**.

Then the test moved *merci* from `French::Audio` to Spanish. The previous day still had four reviews across the collection. French dropped from three to two and Spanish rose from one to two. Anki counts past answers for the cards that match the current deck filter. If you moved a card after studying it, look in its current deck or switch to **collection**. [Released Stats backend](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/stats/graphs/mod.rs)

If you deleted a note, its review history can still count in **collection** statistics. Browse can only show cards that still exist. [Anki’s statistics scope](https://docs.ankiweb.net/manual/stats)

AI tools prepared this article and ran the test on macOS in the `Europe/Paris` time zone with Anki’s Python package 26.9.4. The test exercised the released backend’s graph data and card search with synthetic answer records. Desktop hover and click behavior was checked in the source for Anki 26.09.4. [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4)

## If a study day is missing

- **Check the neighboring date.** Anki’s study day can run past midnight. With a 4 a.m. cutoff, answers at 1 a.m. Wednesday belong to Tuesday. You can see your cutoff under **Preferences → Review → Scheduler → Next day starts at**. [Anki scheduler preferences](https://docs.ankiweb.net/manual/preferences#scheduler)
- **Search for the exact study day.** Open **Browse** from the main window and enter `prop:rated=0` for today, `prop:rated=-1` for the previous Anki study day, or `prop:rated=-7` for seven study days ago. Use the date filter on its own to check every deck. If you remember a specific card, open **Card Info** to check its review timestamps. [Anki’s answered-card search](https://docs.ankiweb.net/manual/searching#answered), [Anki Card Info](https://docs.ankiweb.net/manual/stats#card-info)
- **Check the device you studied on.** If the reviews appear there and you already sync through AnkiWeb, confirm that desktop Anki has the right profile open and that both devices use the same AnkiWeb account. Run a normal sync on the device you studied on, then on desktop, and reopen Stats. [Anki profiles](https://docs.ankiweb.net/manual/profiles), [AnkiWeb syncing](https://docs.ankiweb.net/manual/syncing#conflicts)

## If you use the Review Heatmap add-on

The **Review Heatmap** add-on places a heatmap and streak information in Anki’s main window. If a past date looks empty there, check the same date in the built-in **Stats → Calendar** with **collection** selected. A count there confirms Anki has recorded answers for that study day. For upcoming workload, open **Future Due** in Stats. [Review Heatmap documentation](https://github.com/glutanimate/review-heatmap), [Anki’s Future Due graph](https://docs.ankiweb.net/manual/stats#future-due)
