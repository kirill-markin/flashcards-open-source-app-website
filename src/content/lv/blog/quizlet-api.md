---
title: "Vai Quizlet 2026. gadā ir publiska API? Pašreizējā situācija un drošas alternatīvas"
description: "Vai Quizlet ir API? 2026. gada 18. augustā nav dokumentētas publiskas API, kurai izstrādātāji varētu piekļūt patstāvīgi. Salīdzinām atbalstītās alternatīvas."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "vai Quizlet ir API"
  - "Quizlet publiskā API"
  - "Quizlet API izstrādātājiem"
  - "Quizlet API alternatīva"
  - "mācību kartīšu automatizācija"
---

Saskaņā ar 2026. gada 18. augustā pieejamo dokumentāciju Quizlet nepiedāvā publisku izstrādātāju API, kurai varētu patstāvīgi saņemt piekļuvi, vai publisku izstrādātāju portālu. Neatkarīgam izstrādātājam pašlaik nav oficiāla veida, kā reģistrēt lietotni, saņemt Quizlet API atslēgu un izmantot dokumentētus galapunktus mācību kartīšu datu lasīšanai vai rakstīšanai.

Šis secinājums attiecas uz Quizlet publisko dokumentāciju, nevis tā iekšējām sistēmām. Quizlet piedāvā integrācijas ar citiem produktiem un partneriem — piemēram, Quizlet lietotni ChatGPT vidē un Google Classroom papildinājumu. Neviena no šīm integrācijām nedod citām lietotnēm piekļuvi vispārēja lietojuma Quizlet izstrādātāju API.

**Fakti pārbaudīti:** 2026. gada 18. augustā.

> **Par autora saistību ar produktu:** Esmu Kirill Markin un izstrādāju Nibomo, kura Agent API un MCP serveris tālāk minēti kā alternatīvas. Nibomo nav saderīgs ar Quizlet un automātiski neimportē Quizlet komplektus.

![Izstrādātājs salīdzina Quizlet eksportēšanu, iegulšanu, konkrētas integrācijas un dokumentētu mācību kartīšu API](/blog/quizlet-api.png)

## Īsā atbilde: Quizlet nav dokumentētas publiskas API patstāvīgai lietošanai

Ja meklēji atbildi uz jautājumu «Vai Quizlet ir API?», lai automatizētu darbības pašā Quizlet, praktiskā atbilde pašlaik ir šāda: **nav dokumentētas publiskas API, kurai izstrādātājs varētu patstāvīgi saņemt piekļuvi**.

Vairākas oficiālās funkcijas no malas var šķist līdzīgas API. Taču tās paredzētas šaurākiem uzdevumiem:

| Kas tev nepieciešams | Atbalstītais veids | Kam tas noder | Ko tas nenodrošina |
|---|---|---|---|
| Pārvietot tekstu no paša izveidota komplekta | [Eksportēšana Quizlet vietnē](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Vienreizējai terminu un definīciju kopēšanai | Attēlus, kopētu komplektu eksportēšanu, mācību vēsturi vai API piekļuvi |
| Ievietot publisku komplektu vietnē vai mācību pārvaldības sistēmas (LMS) lapā | [Quizlet iegulšana](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Mācību aktivitātes ievietošanai tavā lapā, saglabājot Quizlet zīmolu | Strukturētus kartīšu datus vai piekļuvi to lasīšanai un rakstīšanai |
| Pārvērst ChatGPT sarunu par Quizlet komplektu | [Quizlet lietotne ChatGPT vidē](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Komplekta izveidei un priekšskatīšanai ar `@Quizlet` | Piekļuves datus vai galapunktus tavai lietotnei |
| Uzdot Quizlet darbus Google Classroom vidē | [Quizlet papildinājums Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Aktivitāšu atrašanai, uzdošanai un rezultātu izsekošanai Classroom vidē | Vispārēja lietojuma API pašu veidotai izglītības programmatūrai |
| Izveidot savu Quizlet integrāciju | Pašlaik nav dokumentēta veida, kā piekļuvi saņemt patstāvīgi | Var pastāvēt atsevišķa vienošanās ar konkrētu partneri | Publisku reģistrāciju, API atslēgas vai dokumentētu kartīšu datu saskarnes specifikāciju |
| Automatizēt savu mācību kartīšu darbvietu | [Nibomo Agent API](/lv/docs/api/) vai [MCP savienotājs](/lv/docs/mcp-connector/) | Atkārtotai kartīšu un kavu lasīšanai un rakstīšanai darbvietas ietvaros | Saderību ar Quizlet vai automātisku importēšanu no Quizlet |

Vienreizējai kartīšu teksta kopēšanai noder eksportēšana, bet Quizlet satura parādīšanai citā lapā — iegulšana. Integrācija ar konkrētu produktu darbojas tikai tajā paredzētajā veidā. Programmatūrai, kas regulāri veido, lasa un rediģē kartītes, ir vajadzīga dokumentēta lasīšanas un rakstīšanas API.

## Eksportēšana, iegulšana un partneru piekļuve nav publiskas API

Publiska API sniedz ārējiem izstrādātājiem skaidru saskarnes specifikāciju: dokumentāciju, autentifikācijas kārtību, atbalstītās darbības, lietošanas noteikumus un veidu, kā iegūt piekļuves datus. Neviena no Quizlet pašreizējām publiski pieejamajām iespējām nenodrošina šādu pilnvērtīgu, patstāvīgi izmantojamu piekļuvi.

Quizlet **eksportēšana** ir manuāla datu pārvietošana. Komplekta autors vietnē var sakārtot terminus un definīcijas, izvēlēties **Kopēt tekstu (Copy text)** un ielīmēt rezultātu citur. Quizlet norāda, ka nevar eksportēt ne attēlus, ne kopētus komplektus un ka šī funkcija pieejama tikai vietnē. Tas der rūpīgi veiktai vienreizējai migrācijai, taču neļauj programmatūrai uzturēt divas sistēmas sinhronizētas.

**Iegulšana** ļauj parādīt saturu, nevis piekļūt datiem. Quizlet ļauj nokopēt publiska komplekta HTML kodu pāru savienošanas (Match), mācīšanās (Learn), testa (Test), kartīšu (Flashcards) vai pareizrakstības (Spell) režīmam. Iegultajā aktivitātē saglabājas Quizlet logotips, un tie, kas mācās, izmanto Quizlet saskarni. Tava lietotne nesaņem komplektu kā kartīšu ierakstus, kurus tā varētu rediģēt.

**Integrācija ar konkrētu produktu** nodrošina noteiktas, savstarpēji saskaņotas iespējas. Quizlet var sadarboties ar ChatGPT vai Google Classroom, nepiedāvājot to pašu saskarni ikvienam izstrādātājam. Šo integrāciju ieviešana apliecina tikai to pieejamību, nevis vispārējai lietošanai paredzētas publiskas Quizlet API esamību.

Tāpēc arī veca API ietvarbibliotēka vai pārlūka izstrādātāju rīkos redzams pieprasījums nav atbalstīta Quizlet API. Trūkst publiskas dokumentācijas un stabilas, izstrādātājiem paredzētas saskarnes specifikācijas.

## Izvēlies uzdevumam piemērotāko veidu

### Vienreizējai rezerves kopijai vai migrācijai izmanto eksportēšanu

Paša izveidotam komplektam izmanto Quizlet oficiālo eksportēšanas procesu. Tā kā pēdējais solis ir **Kopēt tekstu (Copy text)**, pirmo ielīmēto kopiju saglabā nemainītu un tikai pēc tam pielāgo atdalītājus vai nosaki lauku atbilstību. Tu saglabā terminus un definīcijas, nevis lejupielādē pakotni, no kuras varētu atjaunot kavu. Attēli un mācību vēsture paliek Quizlet.

Praktisku darbību sarakstu atradīsi rakstā [Kā eksportēt Quizlet komplektus 2026. gadā](/lv/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Tajā apskatītas sākotnējās un darba kopijas, UTF-8, tabulācijas rakstzīmes, vairākrindu definīcijas un atšķirība starp kartīšu satura pārvietošanu un atkārtošanas grafika stāvokļa pārnešanu.

Eksportēšana der vienreizējai datu pārvietošanai. Tā neder ikdienas kartīšu veidošanai, sinhronizēšanai vai atkārtotai rediģēšanai ar programmatūru.

### Satura parādīšanai izmanto oficiālo iegulšanas funkciju

Ja skolēniem jāmācās no publiska Quizlet komplekta klases vietnē vai LMS lapā, izmanto Quizlet vietnē pieejamo iegulšanas kodu. Izvēlies aktivitāti, nospied **Kopēt HTML (Copy HTML)** un pievieno rezultātu lapai. Skolēni iegūst interaktīvu Quizlet aktivitāti, bet vietne nesaņem neapstrādātus kartīšu datus.

Bieži vien skolotājam ar to pilnīgi pietiek. Ja to sauc par API, prasība tikai izklausās sarežģītāka, nekā tā ir.

### ChatGPT vai Google Classroom vidē izmanto attiecīgo integrāciju

Quizlet 2026. gada 10. marta paziņojumā par ChatGPT aprakstīts konkrēts process: pievieno Quizlet lietotni, sāc uzvedni ar `@Quizlet`, apskati izveidotā komplekta priekšskatījumu ChatGPT vidē un tad atver to Quizlet, lai pielāgotu un mācītos. Tas ir atbalstīts veids, kā no šīs sarunas izveidot Quizlet komplektu. Tas nepiešķir tavam botam, skriptam vai vietnei atkārtoti izmantojamus Quizlet API piekļuves datus.

Arī Quizlet 2026. gada 30. jūnija paziņojums par Google Classroom attiecas uz konkrētām iespējām. Papildinājums ļauj pedagogiem atrast un uzdot aktivitātes, tostarp vingrinājumu jautājumus, mācību kartītes un spēles, un pēc tam sekot skolēnu iesaistei un progresam Classroom vidē. Quizlet norāda, ka nepieciešams Google Workspace for Education Plus; pedagogiem var būt vajadzīga IT administratora atļauja vai administratora nodrošināta piekļuve papildinājumam.

Ja kāds no šiem procesiem jau atbilst tavam mērķim, izmanto to. Ja tev vajadzīga sava lietotne, neviena no šīm integrācijām neaizstāj publisku piekļuvi izstrādātājiem.

### Regulārai automatizācijai izvēlies dokumentētu lasīšanas un rakstīšanas saskarni

Regulārai automatizācijai vajadzīga programmatūra, kas spēj droši un atkārtoti veikt vienas un tās pašas darbības: veidot kartītes no piezīmēm, iegūt kavu sarakstus, atjaunināt atbildes vai pārvaldīt darbvietu ilgākā laikposmā. Teksta eksportēšana starpliktuvē šādu iespēju nenodrošina.

Drošs risinājums ir mācību kartīšu sistēma, kuras publiskajā dokumentācijā skaidri aprakstīta ārējās programmatūras autentifikācija un atbalstītās lasīšanas un rakstīšanas darbības. Tas var nozīmēt Quizlet API alternatīvas izvēli automatizētajam procesam, vienlaikus turpinot izmantot Quizlet tiem mācību uzdevumiem, kurus atbalsta tā publiski pieejamais produkts.

## Ko patiesībā piedāvā Nibomo kā API alternatīva

Nibomo dokumentē divus veidus, kā piekļūt vienam un tam pašam ierobežotajam katra lietotāja datu kopumam:

- [Ārējās Agent API](/lv/docs/api/) sākumpunkts ir `GET https://api.nibomo.com/v1/`. Sākotnējā atbilde parāda aģentam, kā pieteikties ar e-pastā saņemtu vienreizēju kodu (OTP), izveidot API atslēgu un izvēlēties darbvietu. Lasīšanai izmanto SQL tipa vaicājumu galapunktu, bet rakstīšanai — atsevišķu komandu izpildes galapunktu.
- [Attālais MCP serveris](/lv/docs/mcp-connector/) ir pieejams adresē `https://mcp.nibomo.com/mcp`. MCP klientiem ir pieejami astoņi rīki: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` un atkārtošanas rīki `next_review_card`, `reveal_answer` un `submit_review`.

`get_usage_limits` — tikai lasīšanai paredzēts rīks, kas sniedz informāciju par konta plānu, limitiem un mākslīgā intelekta lietojumu pašreizējā mēnesī; tas nelasa un nemaina kartītes.

Abi piekļuves veidi darbojas izvēlētās darbvietas ietvaros. Dokumentētie resursi ir `workspace`, `cards`, `decks` un `review_events`, un katra priekšraksta rezultāts ir ierobežots līdz 100 rindām. SQL tipa saskarne piedāvā ierobežotu dialektu, nevis pilnu PostgreSQL sintaksi. OpenAPI shēmas nav, tāpēc procesiem, kuriem vajadzīgi ģenerēti OpenAPI klienti, būs jāizvēlas cita saskarne.

Šīs iespējas var palīdzēt izstrādātājam vai MI aģentam automatizēt darbu ar savām mācību kartītēm. Nibomo nevar nolasīt saturu no Quizlet URL, veidot Quizlet konta spoguļkopiju vai darboties kā nedokumentēts Quizlet klients. Automātiskas importēšanas no Quizlet nav. Migrācijai vispirms eksportē terminus un definīcijas no sava komplekta, pārskati tekstu un pēc tam norādi, kuros galamērķa sistēmas kartīšu laukos tas jāievieto. Galamērķa sistēmā mācību stāvoklis tiek veidots no jauna; Quizlet vēsture netiek pārnesta.

Par citām produktu atšķirībām, ne tikai API piekļuvi, lasi [salīdzinājumā ar atvērtā pirmkoda Quizlet alternatīvu](/blog/quizlet-alternative/).

## Privātie pārlūka pieprasījumi nav drošs īsceļš

Quizlet tīmekļa saskarne sūta tīkla pieprasījumus, tāpat kā jebkura mūsdienīga tīmekļa lietotne. Ja atrodi kādu no šiem pieprasījumiem, tas nekļūst par atbalstītu galapunktu tavai programmai.

Nepubliskie galapunkti, kurus izmanto pārlūks, var būt atkarīgi no sesijas sīkdatnēm, iekšējiem formātiem, aizsardzības pret ļaunprātīgu izmantošanu un pieņēmumiem par pašreizējās saskarnes darbību. Tie var mainīties bez publiskas versiju pārvaldības vai norādījumiem par pāreju uz jauno versiju. Turklāt [Quizlet lietošanas noteikumi](https://quizlet.com/tos), kas pēdējo reizi atjaunināti 2026. gada 28. maijā, aizliedz tīmekļa datu automātisku vākšanu (scraping) un citu automatizētu datu izgūšanu, kā arī neatļautu automatizētu pakalpojuma lietošanu.

Uz šāda nestabila pamata ir riskanti veidot pat personīgu skriptu, nemaz nerunājot par produktu. Šeit nesniegšu minējumus par galapunktiem vai reversās inženierijas norādījumus.

Ja paša izveidots komplekts jāpārvieto vienu reizi, eksportē to. Ja skolēniem publisks komplekts vajadzīgs citā lapā, ievieto to ar iegulšanas kodu. Konkrētajiem ChatGPT vai Google Classroom procesiem izmanto attiecīgo integrāciju. Atkārtotai lasīšanai un rakstīšanai izvēlies programmatūru ar dokumentētu automatizācijas saskarni vai arī darbības Quizlet pusē veic manuāli, līdz Quizlet tādu publicēs.

## Kā pamanīt, ka situācija ir mainījusies

Pēc šajā rakstā norādītā faktu pārbaudes datuma Quizlet varētu ieviest izstrādātāju programmu. Meklē oficiālu izstrādātāju portālu vai dokumentāciju, kurā paskaidrots, kas var reģistrēties, kā darbojas autentifikācija, kādas darbības ar kartītēm tiek atbalstītas un kādi lietošanas noteikumi ir spēkā.

Vēl viena trešās puses ietvarbibliotēka atbildi nemainītu. To nemainītu arī jauna sadarbība ar konkrētu partneri. Kamēr Quizlet nav dokumentējis veidu, kā izstrādātāji var patstāvīgi saņemt piekļuvi, piesardzīgi vērtē apgalvojumus par pašlaik pieejamu Quizlet API un izvēlies atbalstīto risinājumu, kas atbilst tavam uzdevumam.
