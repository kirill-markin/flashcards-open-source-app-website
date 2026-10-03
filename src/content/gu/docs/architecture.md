---
title: આર્કિટેક્ચર
description: સિસ્ટમની ઝાંખી, જાહેર ડોમેન, સપોર્ટેડ ક્લાયન્ટ અને હાલનો ઑફલાઇન-ફર્સ્ટ ડેટા ફ્લો.
---

## સિસ્ટમની ઝાંખી

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## સિદ્ધાંતો

1. `app`, `api` અને `auth` માટે અલગ જાહેર ડોમેન
2. Postgres પ્રમાણભૂત ડેટા સ્રોત છે
3. iOS ક્લાયન્ટ ઑફલાઇન-ફર્સ્ટ છે: લોકલ SQLite અને સાથે સિંક
4. વેબ ઍપ, iOS ઍપ અને બાહ્ય એજન્ટ ઇન્ટરફેસ એક જ કાર્યક્ષેત્ર મૉડલ વાપરે છે
5. બાહ્ય એજન્ટ `GET https://api.nibomo.com/v1/` થી શરૂ કરે છે

## સપોર્ટેડ ક્લાયન્ટ

- `app.nibomo.com` પર વેબ ઍપ
- મુખ્ય રિપોઝિટરીમાં લોકલ SQLite સ્ટોરેજ સાથેની iOS ઍપ
- Google Play પર Android ઍપ
- ડિસ્કવરી, OTP દ્વારા પ્રારંભિક ગોઠવણી અને `Authorization: ApiKey` દ્વારા જોડાતા બાહ્ય એજન્ટ ક્લાયન્ટ

## ડેટા મૉડલ

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## ડેટા ફ્લો

### વેબ

1. બ્રાઉઝર `auth.<domain>` દ્વારા સાઇન ઇન કરે છે.
2. વેબ ઍપ `api.<domain>` પરથી કાર્યક્ષેત્રનો ડેટા લોડ કરે છે.
3. AI ચૅટની વિનંતીઓ `/chat/local-turn` દ્વારા જાય છે.
4. પુનરાવર્તન સબમિટ થતાં જ શેડ્યૂલરની સ્થિતિ અપડેટ થાય છે.

### iOS

1. iOS ઍપ પહેલાં લોકલ SQLite માં લખે છે.
2. લોકલ ફેરફારો આઉટબૉક્સમાં કતારમાં મુકાય છે.
3. સિંક `/v1/workspaces/{workspaceId}/sync/push` દ્વારા ફેરફારો અપલોડ કરે છે.
4. સિંક `/v1/workspaces/{workspaceId}/sync/pull` દ્વારા રિમોટ અપડેટ ડાઉનલોડ કરે છે.
5. લોકલ ડેટાબેઝ ફેરફારો લાગુ કરે છે અને સિંક કર્સર આગળ વધારે છે.

### બાહ્ય એજન્ટ

1. એજન્ટ `GET /v1/` થી શરૂ કરે છે.
2. OTP દ્વારા પ્રારંભિક ગોઠવણી `auth.<domain>` પર થાય છે.
3. એજન્ટને લાંબા સમય સુધી માન્ય રહેતી API કી મળે છે.
4. એજન્ટ `/v1/agent/me` લોડ કરે છે, કાર્યક્ષેત્રોની યાદી મેળવે છે, જરૂર હોય તો એક પસંદ કરે છે, અને પછી `/v1/agent/sql/query` અને `/v1/agent/sql/execute` વાપરે છે.

## શેડ્યૂલિંગ

Nibomo પુનરાવર્તનના શેડ્યૂલર તરીકે FSRS વાપરે છે.

અમલીકરણ અંગે નોંધ:

- બૅકએન્ડ અને iOS બંનેમાં FSRS નું એકબીજાને અનુરૂપ અમલીકરણ છે
- વેબ ઍપ શેડ્યૂલિંગ ડેટાના એ જ કરારને અનુસરે છે, પણ તેમાં શેડ્યૂલરની ત્રીજી નકલ સામેલ નથી
- કાર્યક્ષેત્ર-સ્તરનાં શેડ્યૂલર સેટિંગ્સમાં ઇચ્છિત રિટેન્શન, લર્નિંગ સ્ટેપ, રિલર્નિંગ સ્ટેપ, મહત્તમ અંતરાલ અને ફઝ સામેલ છે
- પુનરાવર્તનનો વાસ્તવિક સમય `reviewedAtClient` પરથી આવે છે

વિગતવાર કરાર માટે [મુખ્ય રિપોઝિટરીમાં FSRS શેડ્યૂલિંગ લૉજિક](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) જુઓ.

## પ્રમાણીકરણ

- Cognito દ્વારા ઈમેલ OTP
- હોસ્ટ કરેલી વેબ ઍપ માટે સહિયારા ડોમેન પર બ્રાઉઝર સેશન કૂકીઝ
- `auth.<domain>` પર એજન્ટ માટે OTP દ્વારા પ્રારંભિક ગોઠવણી, જેના પરિણામે લાંબા સમય સુધી માન્ય રહેતી ApiKey મળે છે
- લોકલ ડેવલપમેન્ટ માટે `AUTH_MODE=none`
- પ્રોડક્શન જેવા પ્રમાણીકરણ માટે `AUTH_MODE=cognito`

## ડિપ્લોયમેન્ટનું માળખું

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda બૅકએન્ડ
- `auth.<domain>` -> API Gateway + Lambda પ્રમાણીકરણ સેવા
- AWS RDS માં Postgres

એપેક્સ ડોમેન અલગ માર્કેટિંગ સાઇટ પર રહી શકે છે. પ્રારંભિક ગોઠવણી દરમિયાન તે બીજા કોઈ ઉપયોગમાં ન હોય, તો ઇન્ફ્રાસ્ટ્રક્ચર તેને કામચલાઉ રીતે `app.<domain>` પર રીડાયરેક્ટ કરી શકે છે.
