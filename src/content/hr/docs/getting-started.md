---
title: Prvi koraci
description: Započnite s hostiranom web aplikacijom, povežite agenta putem URL-a za otkrivanje ili sami pokrenite lokalni stack.
---

## Hostirana web aplikacija

Najbrže ćete započeti s hostiranom web aplikacijom:

1. Otvorite [app.nibomo.com](https://app.nibomo.com)
2. Prijavite se adresom e-pošte, bez lozinke, jednokratnim OTP kodom
3. Izrađujte kartice, ponavljajte one koje su na redu i koristite AI razgovor s podacima iz radnog prostora i privicima

Za hostiranu verziju ne trebate ništa instalirati ni postavljati poslužitelj.

## Postavljanje agenta

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
- iOS klijent u glavnom repozitoriju s lokalnim SQLite-om i sinkronizacijom koja prvenstveno radi offline
- Zajednički backend i usluge autentifikacije na zasebnim domenama `api` i `auth`
- Uključivanje vanjskih agenata putem otkrivanja, OTP-a i ApiKey autentifikacije
- Implementaciju otvorenog koda na AWS-u, s Postgresom kao izvorom istine

## Smjer razvoja repozitorija

Projekt je zamišljen tako da prvenstveno radi offline.

Repozitorij danas sadrži web aplikaciju, iOS aplikaciju, uslugu autentifikacije, backend API, tok za vanjske agente i Android aplikaciju objavljenu na Google Playu.
