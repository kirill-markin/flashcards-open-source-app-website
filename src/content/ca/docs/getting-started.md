---
title: Primers passos
description: Comença amb l'app per a iPhone, iPad, Mac o Android, l'app web, un agent d'IA o el teu propi servidor.
---

Hi ha diverses maneres de començar, ordenades de més a menys populars:

- **App per a iPhone, iPad i Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **App per a Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **App web allotjada**: [app.nibomo.com](https://app.nibomo.com)
- **Agents d'IA**: el [connector MCP](/docs/mcp-connector/) o l'API a `https://api.nibomo.com/v1/`
- **Autoallotjament**: la [Guia d'autoallotjament](/docs/self-hosting/)

## Apps per a mòbil i ordinador

Instal·la l'app nativa per al teu dispositiu:

- iPhone, iPad i Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Les apps guarden les targetes al dispositiu, de manera que pots repassar sense connexió, i se sincronitzen quan tornes a estar en línia. Pots començar com a convidat i iniciar la sessió més tard.

### Widgets de la pantalla d'inici

L'app Nibomo afegeix un widget de Repàs a l'iPhone, l'iPad, el Mac i Android. N'hi ha de tres mides:

- **Petit**: quantes targetes tens pendents i la teva ratxa d'estudi
- **Mitjà**: quantes targetes tens pendents i la pregunta de la teva targeta següent
- **Gran**: quantes targetes tens pendents, la pregunta següent i la teva ratxa

Quan no tens res pendent, el widget mostra «Tot al dia» i quan toca la targeta següent. Mai no mostra cap resposta. Toca el widget per obrir Repàs; un widget mitjà o gran obre Repàs directament a la targeta que mostra. Els widgets són gratuïts per a tothom, convidats inclosos.

Vuit widgets més segueixen el teu progrés: «Activitat», «Any», «Avui», «Repassos», «Ratxes», «Calendari», «Properament» i «Tauler». A l'iPhone, també pots posar el widget «Targetes pendents» a la pantalla bloquejada, i la [guia dels widgets](/blog/flashcard-widget/) els mostra tots.

Per afegir-ne un a l'iPhone, l'iPad o el Mac, obre la galeria de widgets, tria Nibomo i escull una mida. A Android, afegeix el widget de Nibomo des de la llista de widgets i després canvia'n la mida; la disposició s'adapta a la mida.

## App web allotjada

La manera més ràpida de començar és l'app web allotjada:

1. Obre [app.nibomo.com](https://app.nibomo.com)
2. Inicia la sessió amb el teu correu electrònic mitjançant un codi OTP, sense contrasenya
3. Crea targetes, repassa les que tens pendents i fes servir el xat amb IA amb les dades del teu espai de treball i fitxers adjunts

L'opció allotjada no requereix cap instal·lació ni configurar cap servidor.

## Configuració d'agents

Els clients MCP com Claude, ChatGPT i Cursor s'hi poden connectar seguint la [guia del connector MCP](/docs/mcp-connector/).

Si vols que Claude Code, Codex o OpenClaw s'hi connectin directament, comença per:

```text
GET https://api.nibomo.com/v1/
```

Aquesta resposta de descobriment guia l'agent per l'inici de sessió amb OTP per correu electrònic, la creació d'una clau d'API de llarga durada, la càrrega del compte, la configuració inicial de l'espai de treball i la interfície SQL publicada.

El mateix contingut també està disponible a `GET /v1/agent`, però `/v1/` és el punt d'entrada públic canònic.

## Autoallotjament

Si prefereixes executar la teva pròpia instància, consulta la [Guia d'autoallotjament](/docs/self-hosting/).

## Què tens avui

- App web allotjada per a targetes, repassos i xat amb IA
- Apps natives per a iPhone, iPad, Mac i Android amb emmagatzematge SQLite local i sincronització que prioritza el funcionament fora de línia
- Serveis compartits de backend i d'autenticació en dominis `api` i `auth` separats
- Incorporació d'agents externs mitjançant descobriment, OTP i autenticació ApiKey
- Camí de desplegament de codi obert a AWS, amb Postgres com a font de referència

## Orientació del repositori

El projecte prioritza el funcionament fora de línia.

Avui el repositori inclou l'app web, l'app d'iOS, el servei d'autenticació, l'API del backend, el flux per a agents externs i l'app d'Android publicada a Google Play.
