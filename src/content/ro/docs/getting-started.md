---
title: Primii pași
description: Începe cu aplicația web găzduită, conectează un agent prin URL-ul de descoperire sau rulează singur stiva locală.
---

## Aplicația web găzduită

Cea mai rapidă cale de a începe este aplicația web găzduită:

1. Deschide [app.nibomo.com](https://app.nibomo.com)
2. Conectează-te cu adresa de e-mail, fără parolă, printr-un cod unic (OTP)
3. Creează fișe, recapitulează-le pe cele scadente și folosește chatul AI cu datele spațiului de lucru și fișiere atașate

Varianta găzduită nu necesită nicio instalare și nicio configurare de server.

## Configurarea agentului

Dacă vrei ca Claude Code, Codex sau OpenClaw să se conecteze direct, pornește de la:

```text
GET https://api.nibomo.com/v1/
```

Acest răspuns de descoperire îl ghidează pe agent prin autentificarea cu cod OTP primit pe e-mail, crearea unei chei API cu durată lungă de valabilitate, încărcarea contului, inițializarea spațiului de lucru și interfața SQL publicată.

Același conținut este disponibil și la `GET /v1/agent`, dar `/v1/` este punctul de intrare public canonic.

## Găzduire proprie

Dacă preferi să rulezi propria instanță, consultă [Ghidul de găzduire proprie](/docs/self-hosting/).

## Ce primești astăzi

- Aplicație web găzduită pentru fișe, recapitulare și chat AI
- Client iOS în repository-ul principal, cu SQLite local și sincronizare offline-first
- Servicii comune de backend și autentificare pe domeniile separate `api` și `auth`
- Integrarea agenților externi prin descoperire, OTP și autentificare ApiKey
- Cale de implementare open source pe AWS, cu Postgres ca sursă de adevăr

## Direcția repository-ului

Proiectul este offline-first.

Astăzi, repository-ul include aplicația web, aplicația iOS, serviciul de autentificare, API-ul backend, fluxul pentru agenți externi și aplicația Android publicată pe Google Play.
