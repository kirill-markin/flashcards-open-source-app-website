# Marketing Links

Use coarse campaign buckets for store attribution:

- `marketing_site`
- `share_app`
- `share_deck`
- `marketplace`

Android store URLs use `utm_source=flashcards_website`, `utm_medium=referral`, and `utm_campaign=<bucket>`.

```text
https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=<bucket>
```

iOS store URLs use App Store Connect campaign links with `ct=<bucket>`, not `utm_*`.

```text
https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=<bucket>&mt=8
```

Current marketing-site URLs:

- iOS: `https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8`
- Android: `https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site`

Fine-grained placements belong in site analytics events, not in store campaign names.
