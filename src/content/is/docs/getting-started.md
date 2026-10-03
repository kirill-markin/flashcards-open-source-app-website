---
title: Fyrstu skref
description: Byrjaðu í hýsta vefforritinu, tengdu gervigreindarumboð í gegnum uppgötvunarslóðina eða keyrðu allan hugbúnaðinn á eigin vél.
---

## Hýsta vefforritið

Fljótlegasta leiðin til að byrja er hýsta vefforritið:

1. Opnaðu [app.nibomo.com](https://app.nibomo.com)
2. Skráðu þig inn með netfanginu þínu og einnota kóða, án lykilorðs
3. Búðu til spjöld, rifjaðu upp þau sem eru á dagskrá og notaðu gervigreindarspjallið með gögnum vinnusvæðisins og viðhengjum

Með hýstu leiðinni þarf hvorki að setja neitt upp né stilla netþjón.

## Uppsetning fyrir gervigreindarumboð

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
- iOS-biðlari í aðalkóðasafninu með staðbundnu SQLite og samstillingu sem virkar fyrst og fremst án nettengingar
- Sameiginleg bakendaþjónusta og auðkenningarþjónusta á aðskildum lénum, `api` og `auth`
- Tenging ytri gervigreindarumboða í gegnum uppgötvun, einnota kóða og ApiKey-auðkenningu
- Uppsetningarleið á AWS í opnum hugbúnaði, með Postgres sem meginheimild gagnanna

## Stefna kóðasafnsins

Verkefnið er hannað til að virka fyrst og fremst án nettengingar.

Í dag inniheldur kóðasafnið vefforritið, iOS-forritið, auðkenningarþjónustuna, bakenda-API-ið, flæðið fyrir ytri gervigreindarumboð og Android-forritið sem er gefið út á Google Play.
