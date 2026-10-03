---
title: Conectorul MCP
description: "Conectează Nibomo prin directorul Claude sau configurează serverul său MCP la distanță în Claude Code și în alți clienți, cu OAuth și opt instrumente pentru fișe și recapitulări."
---

## Conectare prin directorul Claude

Deschide [Nibomo în directorul Claude](https://claude.ai/directory/nibomo), conectează-l, autentifică-te în contul tău Nibomo și autorizează accesul. Nibomo este listat ca conector din categoria Community.

Pentru Claude Code, folosește același cont de abonament Claude și verifică `/mcp` după conectare. Autentificările cu cheie API sau prin furnizori terți nu încarcă automat conectorii tăi din claude.ai.

Poți configura și direct Claude Code. Rulează comanda de mai jos, apoi deschide `/mcp` în Claude Code și finalizează autorizarea în browser:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Documentația MCP pentru Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Prezentare generală

Nibomo rulează un server MCP (Model Context Protocol) la distanță, astfel încât clienții MCP și agenții AI să poată citi fișele tale scadente, să le recapituleze împreună cu tine, întrebare cu întrebare, și să creeze sau să editeze fișe și pachete pentru tine.

Agenții se pot conecta în două moduri: prin acest server MCP (cel mai potrivit pentru clienți MCP precum Claude sau Cursor) sau prin [URL-ul de descoperire al Agents API](/docs/api/), pentru agenții CLI. Ambele ajung la aceeași interfață de date per utilizator; această pagină se ocupă de serverul MCP.

Conectează-te la:

```text
https://mcp.nibomo.com/mcp
```

Transportul este Streamable HTTP. Serverul expune opt instrumente pentru descoperirea spațiilor de lucru, citirea și scrierea fișelor și pachetelor, ghiduri de referință, recapitulări și utilizarea contului.

## Cum îl adaugi în clientul tău

Majoritatea clienților adaugă un server MCP la distanță ca un conector personalizat:

1. Deschide setările clientului pentru conectori sau servere MCP.
2. Adaugă un conector personalizat și lipește URL-ul serverului `https://mcp.nibomo.com/mcp`.
3. În clienții interactivi, autorizează accesul în browser când ți se cere. Serverul folosește OAuth 2.1 cu Dynamic Client Registration, deci nu trebuie să lipești niciun secret de client și nu trebuie să înregistrezi mai întâi nicio aplicație.
4. Pentru utilizarea fără interfață grafică sau din CLI, setează un antet `Authorization: Bearer fca_…` cu cheia API a agentului, în locul fluxului din browser.

După autorizare, apelează o dată `list_workspaces` ca să alegi un spațiu de lucru, apoi folosește `sql_query` pentru citiri și `sql_execute` pentru scrieri de fișe și pachete. Ca să recapitulezi, apelează `next_review_card`, apoi `reveal_answer`, apoi `submit_review`.

## Instrumente

Serverul expune opt instrumente. Citirile și scrierile sunt separate intenționat, astfel încât niciun instrument să nu amestece operații sigure cu operații distructive.

- `get_usage_limits` — strict de citire: planul contului, limitele și utilizarea AI din luna curentă; nu citește și nu modifică fișe.
- `sql_query` — acces strict de citire la fișele și pachetele tale (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — acces de scriere la fișele și pachetele tale (`INSERT`, `UPDATE`, `DELETE`), ca lot atomic.
- `list_workspaces` — listă strict de citire a spațiilor de lucru la care ai acces, fiecare cu `workspaceId`, nume, numărul de fișe active, ultima activitate și dacă este spațiul implicit selectat în prezent. Folosește un `workspaceId` returnat pentru argumentul opțional `workspaceId` al instrumentelor SQL și de recapitulare.
- `get_guide` — ghid de referință, strict de citire, pentru un singur subiect: `sql_dialect`, `card_authoring`, `bulk_authoring` sau `review_flow`. Nu citește date din spațiul de lucru.
- `next_review_card` — strict de citire: returnează următoarea fișă de recapitulat, doar fața, în aceeași ordine a cozii ca în aplicații. `tags` sau `deckId`, opționale, restrâng coada.
- `reveal_answer` — strict de citire: returnează verso-ul unei fișe după ce cursantul a încercat să răspundă la fața ei.
- `submit_review` — înregistrează o evaluare `Again`, `Hard`, `Good` sau `Easy` și avansează programarea FSRS a fișei.

Interfața SQL este un dialect limitat intenționat și nu este PostgreSQL complet. Această documentație acoperă doar dialectul acceptat, nu este o referință de compatibilitate cu PostgreSQL. Instrucțiunile pot accesa doar resursele `workspace`, `cards`, `decks` și `review_events`, fiecare instrucțiune este limitată la propriul tău spațiu de lucru, iar citirile și scrierile sunt limitate la `100` de rânduri per instrucțiune.

## Recapitulări

Instrumentele de recapitulare îi permit unui agent să-l testeze pe cursant fișă cu fișă și să salveze fiecare evaluare în programarea FSRS a fișei:

1. `next_review_card` returnează un `cardId` și `frontText`, sau `card: null` când nu este nimic scadent.
2. După ce cursantul răspunde, `reveal_answer` returnează `backText` al acelei fișe.
3. `submit_review` primește `cardId`, un UUID `reviewId` generat de client, un `rating` și fusul orar IANA al cursantului în `reviewedTimeZone`. Serverul marchează momentul recapitulării și returnează noua programare a fișei.

Reîncearcă o trimitere cu rezultat incert folosind același `reviewId`; aceasta nu înregistrează niciodată o a doua recapitulare. O trimitere poate primi și răspunsurile:

- `409 REVIEW_EVENT_CONFLICT` — recapitularea a fost deja înregistrată, iar detaliile erorii conțin programarea actuală a fișei.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` identifică deja recapitularea altei fișe, așa că nu s-a salvat nimic; trimite din nou cu un `reviewId` nou.
- `409 REVIEW_STALE` — momentul recapitulării salvat pentru fișă este egal cu ora curentă a serverului sau ulterior acesteia; recapitulează altă fișă.

Recapitulările se înregistrează doar prin `submit_review`: SQL nu poate modifica nici `review_events`, nici starea de programare FSRS. Apelează `get_guide` cu subiectul `review_flow` pentru regulile complete de recapitulare și evaluare.

## Contractul fișelor

Fiecare fișă respectă un singur contract, iar instrumentele se bazează pe el:

- `front_text` conține doar o întrebare sau o indicație pentru recapitulare și nu conține niciodată răspunsul.
- `back_text` conține răspunsul, opțional cu un exemplu concret.

Agenții care generează fișe prin `sql_execute` respectă acest contract, așa că fișele pe care le creează pot fi recapitulate imediat cu repetiție spațiată.

## Autentificare

Două căi de autorizare ajung la aceeași interfață de date per utilizator.

### OAuth 2.1 (clienți interactivi cu conector)

Serverul implementează fluxul cu cod de autorizare (authorization code) cu PKCE și Dynamic Client Registration. Adaugă URL-ul MCP ca un conector personalizat și autorizează accesul în browser; nu există niciun secret de client partajat în prealabil. Descoperirea este standard:

- Metadatele resursei protejate:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadatele serverului de autorizare:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Cheie API (fără interfață grafică și CLI)

Obține o cheie API de agent `fca_` cu durată lungă de valabilitate prin fluxul de autentificare cu cod OTP primit pe e-mail, documentat în [referința API](/docs/api/), apoi trimite-o ca token Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Este aceeași cheie pe care o acceptă interfața REST pentru agenți și nu necesită browser sau un schimb OAuth.

Descrierea canonică, în format citibil automat, a ambelor căi este conținutul de descoperire de la `https://api.nibomo.com/v1/` (oglindit la `/v1/agent`).

## Siguranță și domeniu de acces

Instrumentele SQL pot fi aprobate în siguranță, deoarece interfața este un dialect restrâns, impus de parser, și nu un acces arbitrar la baza de date:

- **Listă închisă de instrucțiuni permise**: `sql_query` acceptă doar `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` și `SELECT`; `sql_execute` acceptă doar `INSERT`, `UPDATE` și `DELETE`. Orice altceva este respins la analiza sintactică.
- **Resurse limitate**: instrucțiunile pot accesa doar `workspace`, `cards`, `decks` și `review_events`.
- **Limitare la nivel de spațiu de lucru**: fiecare instrucțiune SQL și fiecare recapitulare este limitată la un singur spațiu de lucru la care ai acces, fie `workspaceId` pe care îl transmiți, fie spațiul implicit selectat, fără acces la datele altor tenanți.
- **Argumente stricte**: fiecare instrument respinge orice argument necunoscut, așa că un `workspaceId` scris greșit eșuează în loc să ruleze pe spațiul de lucru implicit.
- **Limite**: cel mult `100` de rânduri per instrucțiune, cel mult `50` de instrucțiuni per lot și o limită a rezultatului de aproximativ `12k` tokeni. Loturile de modificări se aplică atomic.
- **Separare citire/scriere**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card` și `reveal_answer` sunt strict de citire (`readOnlyHint`) și nu repară niciodată date, nu recalculează programarea și nu schimbă starea fișelor. `sql_execute` și `submit_review` sunt singurele instrumente de scriere (`destructiveHint`): `sql_execute` scrie fișe și pachete, iar `submit_review` înregistrează o recapitulare și avansează programarea fișei respective.

Întreaga stivă — aplicația, backendul și infrastructura — este open source și poate fi [găzduită pe propria infrastructură](/docs/self-hosting/), așa că poți rula același conector pe propria implementare.
