---
title: Fyrstu skref
description: Byrjaðu í forritinu fyrir iPhone, iPad, Mac eða Android, í vefforritinu, með gervigreindarumboði eða á eigin netþjóni.
---

Hægt er að byrja á nokkra vegu og hér eru þeir vinsælustu fyrst:

- **Forrit fyrir iPhone, iPad og Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Forrit fyrir Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Hýsta vefforritið**: [app.nibomo.com](https://app.nibomo.com)
- **Gervigreindarumboð**: [MCP-tengið](/docs/mcp-connector/) eða API-ið á `https://api.nibomo.com/v1/`
- **Eigin hýsing**: [leiðbeiningar um eigin hýsingu](/docs/self-hosting/)

## Forrit fyrir farsíma og tölvur

Settu upp forritið sem hentar tækinu þínu:

- iPhone, iPad og Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Forritin geyma spjöldin þín í tækinu, svo þú getur rifjað upp án nettengingar, og þau samstillast þegar þú kemst aftur á netið. Þú getur byrjað sem gestur og skráð þig inn síðar.

### Græjur á heimaskjá

Nibomo-forritið bætir græjunni Upprifjun við iPhone, iPad, Mac og Android. Hún fæst í þremur stærðum:

- **Lítil**: hve mörg spjöld eru á dagskrá og runan þín
- **Miðlungs**: hve mörg spjöld eru á dagskrá og spurningin á næsta spjaldi
- **Stór**: hve mörg spjöld eru á dagskrá, næsta spurning og runan þín

Þegar ekkert er á dagskrá sýnir græjan „Allt búið“ og hvenær næsta spjald kemur á dagskrá. Hún sýnir aldrei svar. Ýttu á græjuna til að opna Upprifjun; miðlungs eða stór græja opnar Upprifjun á spjaldinu sem hún sýnir. Græjurnar eru ókeypis fyrir alla, líka gesti.

Átta græjur til viðbótar sýna framvinduna þína: „Virkni“, „Ár“, „Í dag“, „Upprifjanir“, „Runur“, „Dagatal“, „Fram undan“ og „Yfirlit“. Á iPhone og iPad geturðu líka sett græjuna „Spjöld á dagskrá“ á lásskjáinn og [leiðarvísirinn um græjurnar](/blog/flashcard-widget/) sýnir hverja og eina.

Til að bæta einni við á iPhone, iPad eða Mac skaltu opna græjusafnið, velja Nibomo og síðan stærð. Á Android skaltu bæta Nibomo-græju við af græjulistanum og breyta síðan stærð hennar; útlitið lagar sig að stærðinni.

## Hýsta vefforritið

Fljótlegasta leiðin til að byrja er hýsta vefforritið:

1. Opnaðu [app.nibomo.com](https://app.nibomo.com)
2. Skráðu þig inn með netfanginu þínu og einnota kóða, án lykilorðs
3. Búðu til spjöld, rifjaðu upp þau sem eru á dagskrá og notaðu gervigreindarspjallið með gögnum vinnusvæðisins og viðhengjum

Með hýstu leiðinni þarf hvorki að setja neitt upp né stilla netþjón.

## Uppsetning fyrir gervigreindarumboð

MCP-biðlarar á borð við Claude, ChatGPT og Cursor geta tengst samkvæmt [leiðbeiningunum um MCP-tengið](/docs/mcp-connector/).

Ef þú vilt að Claude Code, Codex eða OpenClaw tengist beint skaltu byrja hér:

```text
GET https://api.nibomo.com/v1/
```

Uppgötvunarsvarið leiðir gervigreindarumboðið í gegnum innskráningu með einnota kóða í tölvupósti, gerð langlífs API-lykils, hleðslu aðgangsins, frumstillingu vinnusvæðis og útgefna SQL-viðmótið.

Sama innihald er einnig í boði á `GET /v1/agent`, en `/v1/` er hinn opinberi aðalupphafspunktur.

## Eigin hýsing

Ef þú vilt frekar keyra þitt eigið tilvik skaltu skoða [leiðbeiningar um eigin hýsingu](/docs/self-hosting/).

## Hvað þú færð í dag

- Hýst vefforrit fyrir spjöld, upprifjun og gervigreindarspjall
- Forrit fyrir iPhone, iPad, Mac og Android með staðbundinni SQLite-gagnageymslu og samstillingu sem virkar fyrst og fremst án nettengingar
- Sameiginleg bakendaþjónusta og auðkenningarþjónusta á aðskildum lénum, `api` og `auth`
- Tenging ytri gervigreindarumboða í gegnum uppgötvun, einnota kóða og ApiKey-auðkenningu
- Uppsetningarleið á AWS í opnum hugbúnaði, með Postgres sem meginheimild gagnanna

## Stefna kóðasafnsins

Verkefnið er hannað til að virka fyrst og fremst án nettengingar.

Í dag inniheldur kóðasafnið vefforritið, iOS-forritið, auðkenningarþjónustuna, bakenda-API-ið, flæðið fyrir ytri gervigreindarumboð og Android-forritið sem er gefið út á Google Play.
