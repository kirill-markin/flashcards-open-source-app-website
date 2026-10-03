---
title: MCP-liitin
description: "Yhdistä Nibomo Clauden hakemiston kautta tai määritä sen etä-MCP-palvelin Claude Codeen ja muihin asiakassovelluksiin: OAuth ja kahdeksan työkalua muistikortteihin ja kertauksiin."
---

## Yhdistä Clauden hakemiston kautta

Avaa [Nibomo Clauden hakemistossa](https://claude.ai/directory/nibomo), yhdistä se, kirjaudu Nibomo-tilillesi ja valtuuta pääsy. Nibomo on hakemistossa Community-liittimenä.

Käytä Claude Codessa samaa Claude-tilaustiliä ja tarkista `/mcp` yhdistämisen jälkeen. API-avaimella tai kolmannen osapuolen palveluntarjoajan kautta tehdyt kirjautumiset eivät lataa claude.ai-liittimiäsi automaattisesti.

Voit myös määrittää Claude Coden suoraan. Aja alla oleva komento, avaa sitten `/mcp` Claude Codessa ja viimeistele valtuutus selaimessa:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Claude Coden MCP-dokumentaatio](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Yleiskatsaus

Nibomo ylläpitää etä-MCP-palvelinta (Model Context Protocol), jonka kautta MCP-asiakkaat ja
tekoälyagentit voivat lukea erääntyneet korttisi, kerrata niitä kanssasi kysymys kerrallaan
sekä luoda ja muokata kortteja ja pakkoja puolestasi.

Agentit voivat yhdistää kahdella tavalla: tämän MCP-palvelimen kautta (paras MCP-asiakkaille, kuten
Claudelle tai Cursorille) tai CLI-agenttien osalta [Agents API:n discovery-URL:n](/docs/api/) kautta.
Molemmat johtavat samaan käyttäjäkohtaiseen datarajapintaan; tämä sivu käsittelee MCP-palvelinta.

Yhdistä osoitteeseen:

```text
https://mcp.nibomo.com/mcp
```

Siirtoprotokolla on Streamable HTTP. Palvelin tarjoaa kahdeksan työkalua työtilojen löytämiseen, korttien ja pakkojen lukemiseen ja kirjoittamiseen, referenssioppaisiin, kertauksiin ja tilin käyttötietoihin.

## Näin lisäät sen asiakassovellukseesi

Useimmat asiakassovellukset lisäävät etä-MCP-palvelimen mukautettuna liittimenä:

1. Avaa asiakassovelluksesi liitin- tai MCP-palvelinasetukset.
2. Lisää mukautettu liitin ja liitä palvelimen URL `https://mcp.nibomo.com/mcp`.
3. Interaktiivisissa asiakassovelluksissa valtuuta selaimessa pyydettäessä. Palvelin
   käyttää OAuth 2.1:tä ja Dynamic Client Registration -menetelmää, joten asiakassalaisuutta
   ei tarvitse liittää eikä sovellusta tarvitse rekisteröidä etukäteen.
4. Kun käytät palvelua ilman käyttöliittymää tai CLI:stä, aseta selainkulun sijaan `Authorization: Bearer fca_…`
   -otsake, jossa on agentin API-avaimesi.

Valtuutuksen jälkeen kutsu kerran `list_workspaces` valitaksesi työtilan ja käytä sitten
`sql_query`-työkalua lukemiseen ja `sql_execute`-työkalua korttien ja pakkojen kirjoituksiin. Kertaa kutsumalla
`next_review_card`, sitten `reveal_answer` ja lopuksi `submit_review`.

## Työkalut

Palvelin tarjoaa kahdeksan työkalua. Luku ja kirjoitus on erotettu tarkoituksella, jotta yksikään
työkalu ei koskaan sekoita turvallisia ja tuhoavia toimintoja.

- `get_usage_limits` – tiukasti vain luku: tilin tilaustaso, rajat ja kuluvan kuukauden tekoälyn käyttö; se ei lue eikä muuta kortteja.
- `sql_query` – tiukasti vain luku -pääsy kortteihisi ja pakkoihisi (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` – kirjoituspääsy kortteihisi ja pakkoihisi (`INSERT`, `UPDATE`,
  `DELETE`) atomisena eränä.
- `list_workspaces` – tiukasti vain luku -luettelo työtiloista, joihin sinulla on pääsy;
  kunkin kohdalla näytetään
  `workspaceId`, nimi, aktiivisten korttien määrä, viimeisin toiminta ja tieto siitä, onko se
  tällä hetkellä valittu oletustyötilasi. Käytä palautettua `workspaceId`-arvoa SQL- ja kertaustyökalujen
  valinnaisessa `workspaceId`-argumentissa.
- `get_guide` – tiukasti vain luku -referenssiopas yhdestä aiheesta: `sql_dialect`,
  `card_authoring`, `bulk_authoring` tai `review_flow`. Se ei lue työtilan dataa.
- `next_review_card` – tiukasti vain luku: palauttaa seuraavan kerrattavan kortin, vain etupuolen,
  samassa jonojärjestyksessä kuin sovellukset. Valinnainen `tags` tai `deckId` rajaa
  jonoa.
- `reveal_answer` – tiukasti vain luku: palauttaa yhden kortin takapuolen sen jälkeen, kun
  oppija on yrittänyt vastata sen etupuoleen.
- `submit_review` – tallentaa yhden arvion `Again`, `Hard`, `Good` tai `Easy` ja
  päivittää kortin FSRS-aikataulun.

SQL-rajapinta on tarkoituksella rajattu murre eikä täysi PostgreSQL.
Nämä ohjeet kattavat vain tuetun murteen, eivätkä ne ole PostgreSQL-yhteensopivuuden
referenssi. Lauseet voivat käsitellä vain resursseja `workspace`, `cards`, `decks` ja
`review_events`, jokainen lause rajautuu omaan työtilaasi, ja
luku- ja kirjoitusoperaatiot on rajattu `100` riviin lausetta kohden.

## Kertaukset

Kertaustyökalujen avulla agentti voi kuulustella oppijaa kortti kerrallaan ja tallentaa jokaisen
arvion kortin FSRS-aikatauluun:

1. `next_review_card` palauttaa `cardId`- ja `frontText`-arvot tai `card: null`, kun
   mitään ei ole erääntynyt.
2. Kun oppija on vastannut, `reveal_answer` palauttaa kyseisen kortin `backText`-kentän.
3. `submit_review` ottaa vastaan `cardId`-arvon, asiakkaan luoman `reviewId`-UUID:n,
   `rating`-arvon ja oppijan IANA-aikavyöhykkeen `reviewedTimeZone`. Palvelin merkitsee
   kertausajan ja palauttaa kortin uuden aikataulun.

Jos lähetyksen onnistuminen jää epävarmaksi, yritä uudelleen samalla `reviewId`-arvolla; uusintayritys ei koskaan tallenna toista
kertausta. Lähetys voi palauttaa myös seuraavat vastaukset:

- `409 REVIEW_EVENT_CONFLICT` – kertaus on jo tallennettu, ja virheen
  tiedot sisältävät kortin nykyisen aikataulun.
- `409 REVIEW_ID_CARD_MISMATCH` – `reviewId` tunnistaa jo toisen kortin
  kertauksen, joten mitään ei tallennettu; lähetä uudelleen uudella `reviewId`-arvolla.
- `409 REVIEW_STALE` – kortin tallennettu kertausaika on sama tai myöhäisempi kuin palvelimen
  nykyinen aika; kertaa jokin toinen kortti.

Kertaukset tallennetaan vain `submit_review`-työkalulla: SQL ei voi kirjoittaa
`review_events`-tietoja tai FSRS-ajoitustilaa. Kutsu `get_guide` aiheella
`review_flow`, niin saat kertaamisen ja arvioinnin täydelliset säännöt.

## Korttisopimus

Jokainen kortti noudattaa yhtä sopimusta, ja työkalut nojaavat siihen:

- `front_text` on vain kysymys tai kertauskehote eikä koskaan sisällä vastausta.
- `back_text` sisältää vastauksen, valinnaisesti konkreettisen esimerkin kanssa.

Agentit, jotka luovat kortteja `sql_execute`-työkalulla, noudattavat tätä sopimusta, joten
niiden luomia kortteja voi heti kerrata välistetyllä kertauksella.

## Tunnistautuminen

Kaksi valtuutuspolkua johtaa samaan käyttäjäkohtaiseen datarajapintaan.

### OAuth 2.1 (interaktiiviset liitinasiakkaat)

Palvelin toteuttaa valtuutuskoodikulun PKCE:llä ja Dynamic Client
Registration -menetelmällä. Lisää MCP-URL mukautettuna liittimenä ja valtuuta selaimessa;
asiakassalaisuutta ei jaeta etukäteen. Discovery noudattaa standardia:

- Suojatun resurssin metatiedot:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Valtuutuspalvelimen metatiedot:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API-avain (ilman käyttöliittymää ja CLI)

Hanki pitkäikäinen `fca_`-alkuinen agentin API-avain sähköpostin OTP-kirjautumiskulun kautta,
joka on kuvattu [API-referenssissä](/docs/api/), ja lähetä se sitten Bearer-tunnisteena:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Tämä on sama avain, jonka REST-agenttirajapinta hyväksyy, eikä se vaadi selainta tai
OAuth-kierrosta.

Molempien polkujen kanoninen koneluettava kuvaus on discovery-vastaus
osoitteessa `https://api.nibomo.com/v1/` (sama sisältö myös osoitteessa `/v1/agent`).

## Turvallisuus ja rajaus

SQL-työkalut on turvallista hyväksyä, koska rajapinta on rajattu,
jäsentimen valvoma murre eikä mielivaltainen pääsy tietokantaan:

- **Suljettu sallittujen lauseiden luettelo**: `sql_query` hyväksyy vain `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` ja `SELECT`; `sql_execute` hyväksyy vain `INSERT`,
  `UPDATE` ja `DELETE`. Kaikki muu hylätään jäsennysvaiheessa.
- **Rajatut resurssit**: lauseet voivat koskea vain resursseja `workspace`, `cards`, `decks`
  ja `review_events`.
- **Työtilakohtainen rajaus**: jokainen SQL-lause ja kertaus rajautuu yhteen
  työtilaan, johon sinulla on pääsy, eli joko antamaasi `workspaceId`-työtilaan tai valittuun
  oletustyötilaasi, eikä pääsyä toisten vuokralaisten tietoihin ole.
- **Tiukat argumentit**: jokainen työkalu hylkää tuntemattoman argumentin, joten väärin kirjoitettu
  `workspaceId` johtaa virheeseen sen sijaan, että kutsu ajettaisiin oletustyötilaasi vasten.
- **Ylärajat**: enintään `100` riviä lausetta kohden, enintään `50` lausetta erää kohden ja
  tuloksen yläraja noin `12k` tokenia. Muutoserät toteutetaan atomisesti.
- **Luku- ja kirjoitusjako**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` ja `reveal_answer` ovat tiukasti vain luku -työkaluja (`readOnlyHint`),
  eivätkä ne koskaan korjaa dataa, laske ajoitusta uudelleen tai muuta kortin tilaa.
  `sql_execute` ja `submit_review` ovat ainoat kirjoitustyökalut (`destructiveHint`):
  `sql_execute` kirjoittaa kortteja ja pakkoja, ja `submit_review` tallentaa kertauksen ja
  päivittää sen kortin aikataulun.

Koko pino – sovellus, taustapalvelu ja infrastruktuuri – on avointa lähdekoodia, ja sitä voi
[ylläpitää itse](/docs/self-hosting/), joten voit käyttää samaa liitintä
oman asennuksesi kanssa.
