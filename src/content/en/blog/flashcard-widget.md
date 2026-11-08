---
title: "Flashcard Widgets for iPhone and Android: Next Card and Streak"
description: "Nibomo's free widgets put due cards, your next question, your streak, and review stats on the iPhone, iPad, and Android Home Screen and the iPhone and iPad Lock Screen, and on Mac through your iPhone. See each one and how to add it."
date: "2026-11-08"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/94e11d677ef5da28b4490f899a86e423764ec2142a9264c0cbd088823c3101ae.webp"
keywords:
  - "flashcard widget"
  - "flashcard widget iPhone"
  - "flashcard widget Android"
  - "spaced repetition widget"
  - "Anki widget iPhone"
  - "Home Screen flashcard widget"
  - "study streak widget"
  - "flashcard heatmap widget"
  - "Lock Screen flashcard widget"
---

A big "4", the words "To review", and "What is the capital of Canada?" That's all Nibomo's Medium Review widget puts on your Home Screen. The answer isn't there. You get the number of cards waiting and the question on the next one, and the answer stays in the app until you've had a go at it.

Review is one of ten Nibomo widgets. The others show what you've done today, your streak, a heatmap of past reviews, and what's coming up, and one sits on the iPhone and iPad Lock Screen. They're all free on iPhone, iPad, and Android, and on Mac through your iPhone, with no Premium tier and no account required, so guests get them too. If you came here looking for an Anki widget on iPhone, the official iPhone app doesn't have one; the last section covers what Anki offers and what switching would cost.

![An adult pauses on her way out to recall a Canada geography prompt on the refrigerator before lifting the closed answer flap](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/94e11d677ef5da28b4490f899a86e423764ec2142a9264c0cbd088823c3101ae.webp)

> **Disclosure:** I am Kirill Markin, and I build [Nibomo](https://nibomo.com/). The widget behavior below comes from the app's source code and from screenshots taken on an iPhone simulator and an Android emulator, not from a personal study log.

## All Nibomo widgets at a glance

| Widget | Sizes | What it shows | A tap opens |
| --- | --- | --- | --- |
| Review | Small, Medium, Large | Cards due, the next question, your streak | Review, starting with the card you saw on Medium and Large |
| Today | Small, Medium | Today's reviews, cards left, your streak | Review |
| Cards due | iPhone and iPad Lock Screen: circular, rectangular, inline | Cards due, today's progress, the next question | Review, starting with the card you saw on rectangular |
| Activity | Small, Medium, Large | Daily reviews as a heatmap, your streak | Progress |
| Year | Large | A year of daily reviews, one row per month | Progress |
| Streaks | Small, Medium | Current, best, and recent streaks | Progress |
| Calendar | Small, Large | This month's streak days | Progress |
| Reviews | Medium, Large | Daily reviews compared with the period before | Progress |
| Coming up | Medium, Large | Cards due today and over the next 7 days | Progress |
| Dashboard | Large | Today's progress, cards due, your streak, the next question, recent activity | Review, starting with the card you saw |

Every Home Screen widget works on both iPhone (and iPad) and Android. Cards due lives on the Lock Screen, so it's on iPhone and iPad only; Nibomo has no Lock Screen widget on Android. None of them has settings or buttons, and none of them ever shows an answer.

## The Review widget, size by size

![Nibomo Medium widget on an iPhone Home Screen showing 4 cards to review and the question "What is the capital of Canada?"](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3709049e5083b2bc30b8523d40696fa51d75afbebb3fa2796fac0649dd7a5309.webp)

The number on the widget matches the badge on the Review tab: due cards plus new cards in your current Review filter, in the workspace you have open in the app. If you've filtered Review down to one deck or tag, the widget counts only those cards. New cards count from the start, so adding a fresh deck of 200 cards makes the number jump by 200.

| Size | Cards waiting | Nothing waiting |
| --- | --- | --- |
| Small | Due count and streak | "All done", when the next card is due, and your streak |
| Medium | Due count and the next card's question | "All done" and when the next card is due |
| Large | Due count, the next card's question, and your streak | "All done", when the next card is due, and your streak |

The question comes from the same card Review would show you first. It appears as plain text, so formatting on the front of the card doesn't come through, and long questions get cut off. An image on the front shows up as the short label saved with it; when you add a picture in the Android app, that label is just "Image". If there's no text at all, not even an image label, Android shows "Image question", and iPhone and iPad show "Cards are ready to review" instead. That second message also appears when you'd cleared everything before leaving the app and new cards have fallen due since: the widget can count them, but it hasn't been told their questions yet.

![Nibomo Large widget on an iPhone showing the due count, the next question, and a 1-day streak](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/b388801858385905778245de7bcf37d1c8b7e9a91c26b11a1037031454a7e068.webp)

Once you've cleared everything that's due, the widget switches to "All done" and tells you when the next card comes back. If that's on a later day, you see the date as well as the time.

![Nibomo Small widget on an iPhone showing All done, the date and time of the next card, and a 1-day streak](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2a393aa8cbdbca63cf4a27f8570d94e960e2e518c5932f6428b4f542f0b45572.webp)

The Android widget shows the same information with slightly different wording. Where iPhone puts "To review" under the number, Android says "4 due" on the Small size and "4 cards due" above the question on Medium and Large.

![Nibomo Medium widget on an Android Home Screen showing 4 cards due and the next question](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a0a1c421710bc938cdaf52b8d069bd3676f191c71d764085e95c3e7f1e599281.webp)

## Why a spaced repetition widget shouldn't show the answer

A flashcard does its job when you try to pull the answer out of memory before you see it. That effort is called active recall, or retrieval practice. In [Roediger and Karpicke's 2006 study](https://doi.org/10.1111/j.1467-9280.2006.01693.x), students who took a recall test on a passage remembered more of it two days and one week later than students who spent that time rereading it.

A widget that showed the question and the answer side by side would turn every glance at your phone into rereading. Showing only the question gives you a small recall attempt for free: you see "What is the capital of Canada?", try to answer in your head, and open the app to check.

The count is the spacing half. Reviews spread across days tend to stick better than the same amount of study packed into one sitting; [Cepeda and colleagues' 2006 review](https://doi.org/10.1037/0033-2909.132.3.354) of distributed-practice research found that pattern across many experiments. Nibomo's [FSRS scheduler](/blog/what-is-fsrs/) decides when each card is due, and the widgets only report that decision. A small number on your Home Screen in the morning is easier to clear than a pile you discover a week later. For picking a rhythm, see [how often you should review flashcards](/blog/how-often-should-you-review-flashcards/).

One catch: recalling a card from a widget doesn't count as a review. The widgets have no buttons, so the scheduler learns nothing until you open Review and rate the card. If you knew the answer at a glance, tap in and say so.

## What a tap opens

Review, Today, Cards due, and Dashboard open Review. The widgets about your history and schedule open the Progress tab instead.

A widget that shows a question remembers which card it showed: the Medium and Large Review widget, Dashboard, and the rectangular Cards due widget on the Lock Screen. If that card is still waiting in the same workspace and Review filter, and you haven't already answered or deleted it, Review starts a new session with that card first. So the question you saw on the Home Screen is the one you answer. If the card is no longer waiting, Review opens normally with whatever is next. The Small Review widget, Today, and the circular and inline Cards due widgets just open Review where it is.

## The other nine widgets

### Today

Today puts the reviews you've done today next to the cards still waiting. The Small size is a ring with today's review count in the middle, the cards left under it, and your streak. Medium spells it out: "6 reviewed", a progress bar with a percentage, and "1 card left". The percentage is today's reviews out of today's reviews plus the cards still due, rounded down, so it never says 100% while a card is left. Once you've cleared everything, it says "All done".

![Nibomo Today widget, Small size, on an iPhone Home Screen showing 6 reviews today in a ring, 1 card left, and a 12-day streak](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/248f134c2dd5f4a7a37bef0c9e2cf2f60b88f9ca1b56574aa2c90409b77b707d.webp)

![Nibomo Today widget, Medium size, on an Android Home Screen showing 6 reviewed, an 85% progress bar, 1 card left, and an 8-day streak](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/687b60cc0d4908231e18bc5bd1bdf94c1c3c95d3541d735ac9cce01d4de722f9.webp)

### Cards due on the Lock Screen

Cards due is the one widget you can see without unlocking your iPhone or iPad. It comes in all three Lock Screen shapes:

- Circular: a ring that fills as you review today, with the number of cards left inside.
- Rectangular: the due count, your streak, and the start of the next question.
- Inline, the single line above the clock: the due count and your streak.

When nothing's due, the rectangular and inline versions say "All done".

![Nibomo Cards due inline widget on an iPhone Lock Screen showing 1 due and a 12-day streak beside the date, Sun 8](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ff8e5708fa5143376b68f959cc0cbf89cd74818fd9e0e16bf4e772b86d403856.webp)

![Nibomo Cards due widgets on an iPhone Lock Screen: a rectangular widget showing 1 due, a 12-day streak, and the question "In economics, what is opportunity cost?" on two lines, next to a circular ring with 1 card left inside](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/04f0a17f163d59af9b804ead3f61551a1ba63fd06fe9a44b41872ed1693f4ebb.webp)

### Activity

Activity draws your daily reviews as a heatmap: one square per day, a stronger color on busier days, ice blue for days a streak freeze saved, and today outlined. A streak freeze fills in a day you missed, so the streak keeps going. The Small size shows the last 5 weeks and your streak. Medium stretches to 20 weeks and adds the number of reviews in them. Large keeps the 20 weeks and lists the numbers underneath: current and best streak, reviews and active days in those weeks, reviews today, cards due now, and streak freezes you have left.

![Nibomo Activity widget, Large size, on an iPhone showing a 20-week review heatmap with reviewed days in solid blue, days a streak freeze saved outlined, and today ringed, then a 12-day current and best streak, 21 reviews, 16 active days, 6 reviews today, 1 due now, and 1 streak freeze](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/fc1c587e7bfb92a98638f51c7118d8e92f5314c8739ebdd2c465235abfb752d1.webp)

![Nibomo Activity widget, Small size, on an Android Home Screen showing a 5-week heatmap and an 8-day streak](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/d20c5ed9004726d73a538a89f835cbc99735b71178094ae4d89573ead6d9c193.webp)

### Year

Year is the long view: the last 12 months, one row per month, one small square per day, with your total reviews and active days at the bottom. It only comes in Large, because a year needs the room.

![Nibomo Year widget on an iPhone showing a row of daily squares for each month from December to November, with reviewed days in solid blue and days a streak freeze saved outlined in October, today ringed, 21 reviews, and 16 active days](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/aba6e7e91ac0c98f8ed67bcaf73fa1d9e3de4a49c0776fd3d928bfc5dfec7ee8.webp)

### Streaks

Streaks is for anyone who likes not breaking the chain. The Small size shows your current streak in big numbers, your best streak, and how many streak freezes you have. Medium draws the current streak as a bar with its start and end dates, and up to four earlier streaks under it, so you can see whether this run is your longest yet. If your recent history has no streak at all, Medium nudges you to start one.

![Nibomo Streaks widget, Medium size, on an iPhone showing a 12-day streak from 28 Oct to 8 Nov, a best of 12, and three earlier 4-day streaks](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/09017397bdcf0939b7ee2ebc4f1a77a6e58c49f8d16ecbdefbc5697cf430c936.webp)

![Nibomo Streaks widget, Small size, on an Android Home Screen showing an 8-day streak, a best of 8, and 2 streak freezes](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/82d41999027d20ea6d82b96e57e5ba870e962a91e89c32494d0e8ee70b51a05d.webp)

### Calendar

Calendar shows this month and marks the days that count toward your streak: the days you reviewed and the days a freeze saved. Large is a full month calendar with day numbers, and consecutive days in the same week join into one bar. Small fits the month into a grid of dots. Today gets a ring in both.

![Nibomo Calendar widget, Large size, on an iPhone showing November 2026 with the 1st to the 8th marked as streak days](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9558ac19618a7275b87e1f3efb567d06b6786d45fa53cd9aa8ec43a38ffc4e25.webp)

![Nibomo Calendar widget, Small size, on an Android Home Screen showing November as dots with the first 8 days filled](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c8507c322dc6d6ef1e3941fbd91fc84b988199632f4ba1b1ba0c7b452fed76d0.webp)

### Reviews

Reviews is a bar chart of your daily reviews: the last 14 days on Medium and the last 30 on Large. A dashed line marks your daily average, and the header shows how the total compares with the 14 or 30 days before, as long as you reviewed something in that earlier period. Large also splits your reviews by answer: Again, Hard, Good, and Easy.

![Nibomo Reviews widget, Medium size, on an iPhone showing 14 days of review bars, a daily average line, and a 300% rise compared with the previous 14 days](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/85a97b0ebf24f3d231e5ad6a0912c6df43a87548913c73adec4a099a88c3f2e4.webp)

![Nibomo Reviews widget, Large size, on an Android Home Screen showing 30 days of review bars from Oct 10 to Nov 8 colored by answer, Good in green and today's taller bar in blue for Easy, a dashed daily average line, a daily average of 1, and an Again, Hard, Good, Easy legend](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1e16fe17e3456b07f8e76155d052ac8eda753fe6aeba8e82652883e1a413618e.webp)

### Coming up

Coming up looks forward instead of back. It shows how many cards are due today and on each of the next 6 days, with the week's total in the header. Large adds your review schedule: all your cards grouped by when they're due next, from new cards you haven't studied yet, through today, 1–7 days, and so on, up to more than two years away.

![Nibomo Coming up widget, Large size, on an iPhone showing 1 card due over the next 7 days and a review schedule split into New, Today, 1-7 days, 8-30 days, 31-90 days, 91-360 days, 1-2 years, and Later](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/160a5b052698b755eb998f4407d8393d217ba09b6267e525ead9a51e03df8177.webp)

### Dashboard

Dashboard puts the most useful bits into one Large widget: a ring of today's progress, the cards due, your streak, the next question, and the last 5 weeks of activity (on Android, as many weeks as fit the widget) with your reviews and active days in them. Like the Review widget, a tap opens Review with the card you saw.

![Nibomo Dashboard widget on an iPhone showing 6 reviews today in a ring, 1 card to review, a 12-day streak, the question "In economics, what is opportunity cost?", and a 5-week heatmap with days a streak freeze saved outlined, next to 20 reviews and 15 active days](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f5ceb07562f5327581b4507133d09748601e0ab20c621d7f5e34097a3b81d395.webp)

![Nibomo Dashboard widget on an Android Home Screen showing 6 reviews today in a ring, 1 card due, an 8-day streak, the question "In economics, what is opportunity cost?", a 10-week heatmap that fills the rest of the widget, with reviewed days in orange, days a streak freeze saved in light blue, and today outlined, above 21 reviews and 16 active days](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9fc7941f4aba942b760b6a3b56de887d4f68e8c21f5347680d5b924d789fa37a.webp)

## How to add a flashcard widget on iPhone and iPad

Install [Nibomo from the App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8), open it once, and then follow [Apple's steps for adding a widget](https://support.apple.com/guide/iphone/add-edit-and-remove-widgets-iphb8f1bf206/ios):

1. Touch and hold an empty part of the Home Screen until the apps jiggle.
2. Tap **Edit**, then **Add Widget**.
3. Find **Nibomo** in the list or search for it.
4. Swipe through the widgets and sizes, from **Review** to **Dashboard**, and tap **Add Widget** on the one you want.
5. Drag it into place and tap **Done**.

There's a shortcut on recent iOS versions: touch and hold the Nibomo app icon and pick a widget from the menu that pops up. The Small widgets also work in StandBy, the full-screen view your iPhone shows while it charges on its side.

For the Lock Screen, touch and hold the Lock Screen until **Customize** appears, tap it, choose the Lock Screen, tap the widget area, and pick **Nibomo**. Tap the circular or rectangular **Cards due** widget to add it under the clock. For the inline one, tap the date above the clock instead and pick Nibomo there.

Opening the app first matters. Until the app has saved its first data for the widgets, every Home Screen widget just says "Open Nibomo to start reviewing," and so do the rectangular and inline Lock Screen ones. The widgets built on your history wait for Progress to load the same way.

## How to add one on Android

Install [Nibomo from Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site), open it once, and then use [Android's widget steps](https://support.google.com/android/answer/9450271):

1. Touch and hold an empty space on a Home Screen.
2. Tap **Widgets**.
3. Find **Nibomo Flashcards** and touch and hold the widget you want, for example **Review**.
4. Slide it to where you want it and let go.

Android doesn't ask you to pick a size up front. Resize the widget, and the layout follows. For Review, a small square shows the count and streak, a wide strip adds the question, and a large block shows all three. The other widgets switch between their sizes the same way. To resize, touch and hold the widget and drag the dots on its outline. If you skip opening the app first, the widget just asks you to open it.

![Nibomo Large widget on an Android Home Screen showing the due count, the next question, and a 1-day streak](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/32c757b3fc9784b5a6e08dde3715e9976a9445a6369d655d1cf957fbef3a1a9b.webp)

## What the widgets don't do

The widgets are deliberately small. A few limits worth knowing before you place one:

- There's nothing to configure. You can't pick a deck inside a widget; change the Review filter in the app instead, and the cards-due numbers and the next question follow it.
- You can't answer cards from the Home Screen or the Lock Screen. Every review happens in the app, and no widget shows an answer.
- The Lock Screen widget is on iPhone and iPad only. There's no Apple Watch widget, and the web app at [app.nibomo.com](https://app.nibomo.com) has no widgets.
- They update in the background, not instantly. On iPhone and iPad, the app saves fresh data a few seconds after changes and again when you leave it. While the app is closed, the count goes up as cards fall due. On Android, the widgets redraw when your cards change, and the system refreshes them about every 30 minutes while the app is closed.
- Streaks and review history come from the app, so within a day they can lag your latest review. On iPhone and iPad, a new day doesn't wait for the app: after midnight, Today starts again at 0 reviewed, and Streaks, Calendar, Reviews, and Coming up ask you to open Nibomo until you do. On Android, these numbers, Today's count included, can stay on the previous day after midnight until the app refreshes them.

The [Getting Started guide](/docs/getting-started/) has the short version of all of this next to the install links.

## Looking for an Anki widget on iPhone

AnkiMobile, the official Anki app for iPhone and iPad, doesn't have a Home Screen widget. Its [App Store listing](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387) doesn't mention one, and the Anki forum thread [asking for an AnkiMobile widget](https://forums.ankiweb.net/t/ankimobile-widget/32633) has been open since July 2023. By October 30, 2026, it had 31 posts, and moderators were still moving new widget requests from elsewhere on the forum into it.

Android is different. [AnkiDroid](https://github.com/ankidroid/Anki-Android) 2.25.3, released October 17, 2026, includes four widgets: a small due-count widget, an add-note button, Deck Picker, and Card Analysis. Deck Picker lists the decks you choose with their new, learning, and review counts, and Card Analysis shows those counts for one deck. Tapping a deck opens Anki's reviewer. If you're happy in AnkiDroid, those widgets already cover the "what's due" part well, and they let you choose decks, which Nibomo's widgets don't. What Nibomo adds is the next question itself, plus your streak and review history on the Home Screen.

Nibomo's widgets only show Nibomo cards. They can't read an Anki collection, so if you want them on your iPhone, your cards have to move into Nibomo. There's no one-click Anki importer, but you can export a deck from Anki as `.apkg`, attach it in Nibomo's AI chat, and ask it to turn the deck into cards, as shown in [importing an Anki deck into Nibomo](/blog/import-anki-apkg/). That doesn't carry over your Anki review history, templates, or add-ons. If those matter to you, Anki is still the better home. The [Anki vs Nibomo comparison](/blog/anki-vs-flashcards-open-source-app/) goes through the tradeoffs in detail.

*AI tools researched, drafted, and edited this article from the Nibomo app source code at commits `55bdd5155` and `6001ead82`, AnkiDroid's public source at release 2.25.3, and the linked Apple, Google, and Anki pages. The Review widget screenshots were captured from app commit `cc410c769` on an iPhone 17 Pro simulator with iOS 27.0 and an Android 17 emulator, using a guest session with demo geography cards. The screenshots of the other widgets were captured from app commit `5493e128b` on an iPhone 17 Pro simulator with iOS 27.0 and an Android 17 emulator with Pixel Launcher, using guest sessions with demo review history; the iPhone and Android demos have different histories, so their streaks differ, and the iPhone simulator's region writes decimals with a comma. Nibomo is built by Kirill Markin, whose site publishes this article.*
