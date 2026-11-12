---
title: Primii pași
description: Începe cu aplicația pentru iPhone, iPad, Mac sau Android, cu aplicația web, cu un agent AI sau cu propriul server.
---

Poți începe în mai multe feluri; cele mai populare sunt primele:

- **Aplicația pentru iPhone, iPad și Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplicația pentru Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Aplicația web găzduită**: [app.nibomo.com](https://app.nibomo.com)
- **Agenți AI**: [conectorul MCP](/docs/mcp-connector/) sau API-ul de la `https://api.nibomo.com/v1/`
- **Găzduire proprie**: [Ghidul de găzduire proprie](/docs/self-hosting/)

## Aplicații pentru mobil și desktop

Instalează aplicația nativă pentru dispozitivul tău:

- iPhone, iPad și Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Aplicațiile păstrează fișele pe dispozitiv, așa că poți recapitula și offline, iar datele se sincronizează când revii online. Poți începe ca vizitator și te poți conecta mai târziu.

### Widgeturi pentru ecranul principal

Aplicația Nibomo adaugă widgetul „Recapitulare” pe iPhone, iPad, Mac și Android. Este disponibil în trei dimensiuni:

- **Mic**: câte fișe sunt de recapitulat și seria ta de studiu
- **Mediu**: câte fișe sunt de recapitulat și întrebarea de pe următoarea fișă
- **Mare**: câte fișe sunt de recapitulat, următoarea întrebare și seria ta

Când nu e nimic de recapitulat, widgetul arată „Ești la zi” și când devine scadentă următoarea fișă. Nu arată niciodată răspunsul. Atinge widgetul ca să deschizi secțiunea Recapitulare; un widget mediu sau mare o deschide direct la fișa afișată. Widgeturile sunt gratuite pentru toți, inclusiv pentru vizitatori.

Alte opt widgeturi îți arată progresul: „Activitate”, „An”, „Astăzi”, „Recapitulări”, „Serii”, „Calendar”, „Urmează” și „Panou”. Pe iPhone și iPad poți pune și widgetul „Fișe de recapitulat” pe ecranul de blocare, iar [ghidul widgeturilor](/blog/flashcard-widget/) le prezintă pe fiecare.

Ca să adaugi unul pe iPhone, iPad sau Mac, deschide galeria de widgeturi, alege Nibomo și selectează o dimensiune. Pe Android, adaugă un widget Nibomo din lista de widgeturi, apoi redimensionează-l; aspectul se adaptează la dimensiune.

## Aplicația web găzduită

Cea mai rapidă cale de a începe este aplicația web găzduită:

1. Deschide [app.nibomo.com](https://app.nibomo.com)
2. Conectează-te cu adresa de e-mail, fără parolă, printr-un cod unic (OTP)
3. Creează fișe, recapitulează-le pe cele scadente și folosește chatul AI cu datele spațiului de lucru și fișiere atașate

Varianta găzduită nu necesită nicio instalare și nicio configurare de server.

## Adu-ți fișele de studiu

Ai deja fișe în Quizlet, Anki sau altă aplicație? Deschide **Bibliotecă > Import** și consultă [ghidul de import al fișelor](/docs/import-flashcards/) ca să alegi formatul potrivit și să vezi ce se transferă.

## Configurarea agentului

Clienții MCP precum Claude, ChatGPT și Cursor se pot conecta urmând [ghidul conectorului MCP](/docs/mcp-connector/).

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
- Aplicații native pentru iPhone, iPad, Mac și Android, cu stocare SQLite locală și sincronizare offline-first
- Servicii comune de backend și autentificare pe domeniile separate `api` și `auth`
- Integrarea agenților externi prin descoperire, OTP și autentificare ApiKey
- Cale de implementare open source pe AWS, cu Postgres ca sursă de adevăr

## Direcția repository-ului

Proiectul este offline-first.

Astăzi, repository-ul include aplicația web, aplicația iOS, serviciul de autentificare, API-ul backend, fluxul pentru agenți externi și aplicația Android publicată pe Google Play.
