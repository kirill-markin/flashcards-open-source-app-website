---
title: Kiunganishi cha MCP
description: "Unganisha Nibomo kupitia saraka ya Claude au sanidi seva yake ya mbali ya MCP katika Claude Code na viteja vingine, kwa OAuth na zana nane za kadi za kujifunzia na marudio."
---

## Unganisha kupitia saraka ya Claude

Fungua [Nibomo kwenye saraka ya Claude](https://claude.ai/directory/nibomo), iunganishe, ingia kwenye akaunti yako ya Nibomo, kisha uidhinishe ufikiaji. Nibomo imeorodheshwa kama kiunganishi cha jumuiya.

Kwa Claude Code, tumia akaunti ileile ya usajili wa Claude na uangalie `/mcp` baada ya kuunganisha. Kuingia kwa ufunguo wa API au kupitia mtoa huduma mwingine hakupakii kiotomatiki viunganishi vyako vya claude.ai.

Unaweza pia kusanidi Claude Code moja kwa moja. Endesha amri iliyo hapa chini, kisha ufungue `/mcp` katika Claude Code na ukamilishe uidhinishaji kwenye kivinjari:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Nyaraka za MCP za Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Muhtasari

Nibomo huendesha seva ya mbali ya MCP (Model Context Protocol) ili viteja vya MCP na mawakala wa AI waweze kusoma kadi zako zinazostahili marudio, kukufanyisha marudio swali moja baada ya jingine, na kukutengenezea au kukuhariria kadi na makundi ya kadi.

Mawakala wanaweza kuunganisha kwa njia mbili: kupitia seva hii ya MCP (bora kwa viteja vya MCP kama Claude au Cursor), au kupitia [URL ya ugunduzi ya Agents API](/docs/api/) kwa mawakala wa CLI. Njia zote mbili hufikia kiolesura kilekile cha data cha kila mtumiaji; ukurasa huu unahusu seva ya MCP.

Unganisha nayo kupitia:

```text
https://mcp.nibomo.com/mcp
```

Usafirishaji ni Streamable HTTP. Seva hutoa zana nane za kugundua nafasi za kazi, kusoma na kuandika kadi na makundi ya kadi, miongozo ya marejeleo, marudio, na matumizi ya akaunti.

## Jinsi ya kuiongeza kwenye kiteja chako

Viteja vingi huongeza seva ya mbali ya MCP kama kiunganishi maalum:

1. Fungua mipangilio ya viunganishi au ya seva za MCP ya kiteja chako.
2. Ongeza kiunganishi maalum na ubandike URL ya seva `https://mcp.nibomo.com/mcp`.
3. Kwa viteja vinavyoingiliana na mtumiaji, idhinisha kwenye kivinjari unapoombwa. Seva hutumia OAuth 2.1 pamoja na Dynamic Client Registration, kwa hivyo hakuna siri ya kiteja ya kubandika wala programu ya kusajili kwanza.
4. Kwa matumizi yasiyo na kiolesura au ya CLI, weka kichwa `Authorization: Bearer fca_…` chenye ufunguo wako wa API wa wakala badala ya mtiririko wa kivinjari.

Baada ya kuidhinisha, ita `list_workspaces` mara moja ili kuchagua nafasi ya kazi, kisha tumia `sql_query` kusoma na `sql_execute` kuandika kadi na makundi ya kadi. Kufanya marudio, ita `next_review_card`, kisha `reveal_answer`, kisha `submit_review`.

## Zana

Seva hutoa zana nane. Kusoma na kuandika vimetenganishwa kwa makusudi ili zana moja isichanganye kamwe operesheni salama na zinazoharibu.

- `get_usage_limits` — kusoma tu kabisa: mpango wa akaunti, mipaka, na matumizi ya sasa ya AI ya mwezi huu; haisomi wala haibadilishi kadi.
- `sql_query` — ufikiaji wa kusoma tu kabisa kwa kadi zako na makundi yako ya kadi (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — ufikiaji wa kuandika kwa kadi zako na makundi yako ya kadi (`INSERT`, `UPDATE`, `DELETE`) kama kundi moja la kauli linalotekelezwa lote kwa pamoja.
- `list_workspaces` — orodha ya kusoma tu kabisa ya nafasi za kazi unazoweza kufikia, kila moja ikiwa na `workspaceId`, jina, idadi ya kadi zinazotumika, shughuli ya mwisho, na kama ndiyo nafasi chaguo-msingi uliyochagua kwa sasa. Tumia `workspaceId` inayorudishwa kwa hoja ya hiari `workspaceId` ya zana za SQL na za marudio.
- `get_guide` — kusoma tu kabisa: mwongozo wa marejeleo wa mada moja, `sql_dialect`, `card_authoring`, `bulk_authoring` au `review_flow`. Haisomi data yoyote ya nafasi ya kazi.
- `next_review_card` — kusoma tu kabisa: hurudisha kadi inayofuata ya marudio, upande wa mbele pekee, kwa mpangilio uleule wa foleni kama kwenye programu. `tags` au `deckId` ya hiari hupunguza foleni.
- `reveal_answer` — kusoma tu kabisa: hurudisha upande wa nyuma wa kadi moja baada ya mwanafunzi kujaribu upande wake wa mbele.
- `submit_review` — hurekodi ukadiriaji mmoja wa `Again`, `Hard`, `Good` au `Easy` na kusogeza mbele ratiba ya FSRS ya kadi hiyo.

Kiolesura cha SQL ni lahaja iliyowekewa mipaka kwa makusudi na si PostgreSQL kamili. Nyaraka hizi zinashughulikia lahaja inayotumika pekee, si marejeleo ya uoanifu na PostgreSQL. Kauli zinaweza kushughulikia rasilimali za `workspace`, `cards`, `decks` na `review_events` pekee, kila kauli huhusu nafasi yako mwenyewe ya kazi, na kusoma na kuandika kumewekewa kikomo cha safu `100` kwa kila kauli.

## Marudio

Zana za marudio humruhusu wakala kumuuliza mwanafunzi kadi moja baada ya nyingine na kuhifadhi kila ukadiriaji kwenye ratiba ya FSRS ya kadi hiyo:

1. `next_review_card` hurudisha `cardId` na `frontText`, au `card: null` wakati hakuna kadi inayostahili marudio.
2. Baada ya mwanafunzi kujibu, `reveal_answer` hurudisha `backText` ya kadi hiyo.
3. `submit_review` hupokea `cardId`, `reviewId` ya UUID iliyotengenezwa na kiteja, `rating`, na `reviewedTimeZone` ya IANA ya mwanafunzi. Seva huweka muda wa marudio na hurudisha ratiba mpya ya kadi.

Rudia uwasilishaji usio na uhakika ukitumia `reviewId` ileile; kamwe hautarekodi marudio ya pili. Uwasilishaji unaweza pia kujibu:

- `409 REVIEW_EVENT_CONFLICT` — marudio tayari yalirekodiwa, na maelezo ya hitilafu hubeba ratiba ya sasa ya kadi.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` tayari inatambulisha marudio ya kadi nyingine, kwa hivyo hakuna kilichohifadhiwa; wasilisha tena ukitumia `reviewId` mpya.
- `409 REVIEW_STALE` — muda wa marudio uliohifadhiwa kwa kadi ni sawa na au baada ya muda wa sasa wa seva; fanya marudio ya kadi nyingine.

Marudio hurekodiwa kupitia `submit_review` pekee: SQL haiwezi kuandika `review_events` wala hali ya ratiba ya FSRS. Ita `get_guide` ukitumia mada `review_flow` kwa kanuni kamili za marudio na ukadiriaji.

## Mkataba wa kadi

Kila kadi hufuata mkataba mmoja, na zana hutegemea mkataba huo:

- `front_text` ni swali au kichocheo cha marudio pekee na kamwe haibebi jibu.
- `back_text` hubeba jibu, na kwa hiari mfano halisi.

Mawakala wanaotengeneza kadi kupitia `sql_execute` hufuata mkataba huu, kwa hivyo kadi wanazotengeneza ziko tayari mara moja kwa marudio ya vipindi.

## Uthibitishaji

Njia mbili za uidhinishaji hufikia kiolesura kilekile cha data cha kila mtumiaji.

### OAuth 2.1 (viteja vya viunganishi vinavyoingiliana na mtumiaji)

Seva hutekeleza mtiririko wa msimbo wa uidhinishaji pamoja na PKCE na Dynamic Client Registration. Ongeza URL ya MCP kama kiunganishi maalum na uidhinishe kwenye kivinjari; hakuna siri ya kiteja inayoshirikiwa mapema. Ugunduzi ni wa kawaida:

- Metadata ya rasilimali iliyolindwa:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadata ya seva ya uidhinishaji:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Ufunguo wa API (bila kiolesura na CLI)

Pata ufunguo wa API wa wakala wa muda mrefu wa `fca_` kupitia mtiririko wa kuingia kwa OTP ya barua pepe ulioelezwa katika [marejeleo ya API](/docs/api/), kisha uutume kama tokeni ya Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Huu ni ufunguo uleule unaokubaliwa na kiolesura cha REST cha mawakala, na hauhitaji kivinjari wala mzunguko wa OAuth.

Maelezo rasmi ya njia zote mbili yanayosomeka na mashine ni data ya ugunduzi iliyo kwenye `https://api.nibomo.com/v1/` (nakala yake iko kwenye `/v1/agent`).

## Usalama na wigo

Zana za SQL ni salama kuidhinisha kwa sababu kiolesura ni lahaja iliyodhibitiwa, inayolazimishwa na kichanganuzi, badala ya ufikiaji usio na mipaka wa hifadhidata:

- **Orodha funge ya kauli zinazoruhusiwa**: `sql_query` hukubali `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` na `SELECT` pekee; `sql_execute` hukubali `INSERT`, `UPDATE` na `DELETE` pekee. Kitu kingine chochote hukataliwa wakati wa uchanganuzi.
- **Rasilimali chache**: kauli zinaweza kugusa `workspace`, `cards`, `decks` na `review_events` pekee.
- **Wigo wa nafasi moja ya kazi**: kila kauli ya SQL na kila marudio huhusu nafasi moja ya kazi unayoweza kuifikia, iwe ni `workspaceId` unayotuma au nafasi chaguo-msingi uliyochagua, bila ufikiaji wa wapangaji wengine.
- **Hoja kali**: kila zana hukataa hoja isiyojulikana, kwa hivyo `workspaceId` iliyoandikwa vibaya hushindwa badala ya kutekelezwa kwenye nafasi yako chaguo-msingi ya kazi.
- **Mipaka**: hadi safu `100` kwa kila kauli, hadi kauli `50` kwa kila kundi la kauli, na kikomo cha matokeo cha takriban tokeni `12k`. Kila kundi la mabadiliko hutekelezwa lote kwa pamoja, au halitekelezwi kabisa.
- **Mgawanyo wa kusoma/kuandika**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card` na `reveal_answer` ni za kusoma tu kabisa (`readOnlyHint`) na kamwe hazirekebishi data, hazikokotoi upya ratiba, wala hazibadilishi hali ya kadi. `sql_execute` na `submit_review` ndizo zana pekee za kuandika (`destructiveHint`): `sql_execute` huandika kadi na makundi ya kadi, na `submit_review` hurekodi marudio na kusogeza mbele ratiba ya kadi yake.

Mrundikano mzima, yaani programu, backend na miundombinu, ni wa chanzo huria na unaweza [kujipangia mwenyewe](/docs/self-hosting/), kwa hivyo unaweza kuendesha kiunganishi hichohicho dhidi ya usambazaji wako mwenyewe.
