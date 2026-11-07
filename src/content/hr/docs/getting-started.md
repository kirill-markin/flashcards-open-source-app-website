---
title: Prvi koraci
description: Započnite s aplikacijom za iPhone, iPad, Mac ili Android, web aplikacijom, AI agentom ili vlastitim poslužiteljem.
---

Postoji nekoliko načina da započnete, poredanih od najpopularnijeg:

- **Aplikacija za iPhone, iPad i Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplikacija za Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Hostirana web aplikacija**: [app.nibomo.com](https://app.nibomo.com)
- **AI agenti**: [MCP konektor](/docs/mcp-connector/) ili API na adresi `https://api.nibomo.com/v1/`
- **Vlastito hostiranje**: [Vodič za vlastito hostiranje](/docs/self-hosting/)

## Aplikacije za mobitele i računala

Instalirajte izvornu aplikaciju za svoj uređaj:

- iPhone, iPad i Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Aplikacije čuvaju vaše kartice na uređaju, pa možete ponavljati i bez interneta, a sinkronizacija se obavi čim se ponovno povežete. Možete započeti kao gost i prijaviti se kasnije.

### Widgeti za početni zaslon

Aplikacija Nibomo dodaje widget Ponavljanje na iPhone, iPad, Mac i Android. Dostupan je u tri veličine:

- **Mali**: koliko je kartica na redu i vaš niz učenja
- **Srednji**: koliko je kartica na redu i pitanje sa sljedeće kartice
- **Veliki**: koliko je kartica na redu, vaše sljedeće pitanje i vaš niz

Kad ništa nije na redu, widget prikazuje „Sve je ponovljeno” i kada sljedeća kartica dolazi na red. Nikad ne prikazuje odgovor. Dodirnite widget da biste otvorili Ponavljanje; srednji ili veliki widget otvara Ponavljanje na kartici koju prikazuje. Widgeti su besplatni za sve, uključujući goste.

Da biste ga dodali, otvorite galeriju widgeta na uređaju, odaberite Nibomo i zatim veličinu.

## Hostirana web aplikacija

Najbrže ćete započeti s hostiranom web aplikacijom:

1. Otvorite [app.nibomo.com](https://app.nibomo.com)
2. Prijavite se adresom e-pošte, bez lozinke, jednokratnim OTP kodom
3. Izrađujte kartice, ponavljajte one koje su na redu i koristite AI razgovor s podacima iz radnog prostora i privicima

Za hostiranu verziju ne trebate ništa instalirati ni postavljati poslužitelj.

## Postavljanje agenta

MCP klijenti kao što su Claude, ChatGPT i Cursor mogu se povezati prema [vodiču za MCP konektor](/docs/mcp-connector/).

Ako želite da se Claude Code, Codex ili OpenClaw povežu izravno, krenite odavde:

```text
GET https://api.nibomo.com/v1/
```

Taj odgovor za otkrivanje vodi agenta kroz prijavu OTP kodom iz e-pošte, izradu dugotrajnog API ključa, učitavanje računa, početno postavljanje radnog prostora i objavljeno SQL sučelje.

Isti sadržaj dostupan je i na `GET /v1/agent`, ali je `/v1/` kanonska javna ulazna točka.

## Vlastito hostiranje

Ako radije želite pokrenuti vlastitu instancu, pogledajte [Vodič za vlastito hostiranje](/docs/self-hosting/).

## Što dobivate već danas

- Hostiranu web aplikaciju za kartice, ponavljanje i AI razgovor
- Izvorne aplikacije za iPhone, iPad, Mac i Android s lokalnom SQLite pohranom i sinkronizacijom koja prvenstveno radi offline
- Zajednički backend i usluge autentifikacije na zasebnim domenama `api` i `auth`
- Uključivanje vanjskih agenata putem otkrivanja, OTP-a i ApiKey autentifikacije
- Implementaciju otvorenog koda na AWS-u, s Postgresom kao izvorom istine

## Smjer razvoja repozitorija

Projekt je zamišljen tako da prvenstveno radi offline.

Repozitorij danas sadrži web aplikaciju, iOS aplikaciju, uslugu autentifikacije, backend API, tok za vanjske agente i Android aplikaciju objavljenu na Google Playu.
