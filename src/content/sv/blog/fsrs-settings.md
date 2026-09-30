---
title: "Bästa FSRS-inställningarna för Anki 2026: retention, inlärningssteg och repetitionsmängd"
description: "Välj trygga FSRS-inställningar för önskad retention, inlärningssteg, optimering, omplanering och arbetsbelastning i Anki 26.08 med FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS-inställningar"
  - "bästa FSRS-inställningarna"
  - "Anki FSRS-inställningar"
  - "önskad retention FSRS"
  - "FSRS inlärningssteg"
  - "FSRS-simulator"
  - "optimera FSRS-parametrar"
  - "FSRS-6"
---

Att höja den önskade retentionen i Anki från 90 % till 95 % låter som en liten förändring. Men det innebär inte fem procent mer arbete. FSRS måste korta intervallen när målet höjs, och en samling som du har arbetat med länge kan få en betydligt längre repetitionskö. Om du samtidigt aktiverar **Reschedule cards on change** kan en del av det arbetet dyka upp direkt.

De bästa FSRS-inställningarna är därför ingen parametersträng att kopiera. De bygger på en rad beslut: bestäm hur mycket arbete du klarar över tid, välj ett minnesmål inom den ramen, anpassa modellen till din egen historik och låt befintliga repetitionsdatum vara om du inte medvetet vill räkna om dem.

Benämningarna och beteendet nedan gäller [Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) och dess inställningar för FSRS-6. Om du först vill förstå modellen snarare än inställningarna kan du läsa [Vad är FSRS?](/blog/what-is-fsrs/). Om du fortfarande funderar på vilken schemaläggningsalgoritm du ska använda, börja med [FSRS jämfört med SM-2](/blog/fsrs-vs-sm-2/).

> **Om författaren:** Jag heter Kirill Markin och utvecklar [Nibomo](/sv/features/). Anki erbjuder personligt anpassade parametrar och experimentella verktyg för att simulera arbetsbelastning som Nibomo inte har i dag. Jämförelsen mot slutet visar tydligt vad som skiljer dem åt.

**Faktakontrollerad:** 8 september 2026.

![En slussoperatör testar vattenflödet i en skalenlig modell innan den riktiga slussen ställs om](/blog/fsrs-settings-v2.png)

## Det korta svaret: börja här

För de flesta Anki-användare är följande trygga utgångspunkter, inte inställningar som passar alla:

| Inställning eller vana | Trygg utgångspunkt | Varför |
| --- | --- | --- |
| Önskad retention | `0.90` | Det är Ankis standardvärde och balanserar hur mycket du minns mot mängden repetitioner. |
| FSRS-parametrar | Använd **Optimize Current Preset**; klistra inte in vikter och redigera dem inte för hand | Optimeraren anpassar modellen till din repetitionshistorik. |
| Optimeringsfrekvens | Högst en gång i månaden; med några månaders mellanrum räcker oftast | Anki rekommenderar inte att du optimerar ofta. |
| Inlärningssteg | Behåll ett fåtal steg som går att slutföra samma dag | Långa stegkedjor fördröjer den modellbaserade schemaläggningen. |
| Ominlärningssteg | Använd så få som möjligt, alla kortare än en dag | Samma gräns gäller när du har misslyckats med ett repetitionskort. |
| Reschedule cards on change | Av | Nya inställningar kan börja gälla vid framtida repetitioner utan att dagens kö räknas om. |
| Maximalt intervall | Behåll standardvärdet på 100 år | Ett lägre tak tvingar fram tätare repetitioner av väl inlärda kort. |
| Nya kort per dag | Utgå från en arbetsmängd du klarar över tid | Varje nytt kort ger inlärningsarbete nu och repetitioner senare. |
| Again eller Hard | Again betyder att du inte mindes; Hard betyder att du mindes med svårighet | Felaktiga bedömningar ger modellen felaktig historik. |

Om repetitionerna är hanterbara och dina inställningar redan ligger nära detta kanske det inte finns något att rätta till. Att finjustera inställningar är inte att studera.

## Håll isär tre beslut

Önskad retention, FSRS-parametrar och daglig arbetsmängd blandas ofta ihop. De styr olika saker:

- **Önskad retention** är ditt mål för hur mycket du ska minnas. Du väljer det utifrån dina mål och den tid du har för studier.
- **FSRS-parametrar** anpassar minnesmodellen till repetitionshistoriken. Ankis optimerare beräknar dem.
- **Gränser för nya kort och repetitioner** styr hur mycket material som kommer in i systemet och hur många av de kort som är dags att repetera Anki kan visa varje dag.

Den här uppdelningen gör felsökningen mycket enklare. En stor kö betyder inte automatiskt att parametrarna är fel. Att det är viktigt att minnas innehållet i en kortlek betyder inte i sig att den behöver en egen inställningsprofil. Och lägre önskad retention gör inte en ohållbar takt av nya kort hållbar.

## Välj önskad retention efter arbetsmängd, inte ambition

Önskad retention talar om för FSRS hur stor sannolikheten ska vara att du minns ett repetitionskort när det är dags att repetera det. Vid `0.90` schemalägger FSRS utifrån en beräknad sannolikhet på 90 % för att du ska minnas. Det är ett mål för modellen, ingen garanti för att varje studiepass eller prov ger exakt 90 % rätt.

Avvägningen fungerar åt båda hållen:

- Höj önskad retention så blir intervallen kortare och repetitionerna fler.
- Sänk den så blir intervallen längre och du misslyckas oftare med att minnas.
- Sänk den för mycket så kan den extra ominlärningen ta en del av tiden du hoppades spara.

Ankis standardvärde är 90 %. [Vägledningen om önskad retention](https://docs.ankiweb.net/deck-options.html#desired-retention) varnar för att arbetsbelastningen stiger snabbt när målet närmar sig 100 % och rekommenderar att hålla sig under 97 %. Den officiella [förklaringen av optimal retention](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) tar upp andra änden av kurvan: mycket låg retention kan också vara ineffektiv, eftersom glömda kort kräver mer arbete.

Börja på `0.90` och ändra först efter att du har undersökt arbetsmängden. Ett högre mål kan vara rimligt för material där det verkligen kostar att glömma. Ett lägre mål kan vara rimligt när repetitionerna tränger undan mer värdefulla studier. Inget av alternativen rättar till otydliga kort, oärliga bedömningar eller för många nya kort.

### Retention för en kortlek och parametrar för en profil gäller på olika nivåer

I Anki 26.08 kan **Desired retention** gälla på två nivåer: **Shared Preset** och **This deck**. Du kan alltså låta närbesläktade kortlekar dela en inställningsprofil för parametrarna och samtidigt ge en viss kortlek ett eget retentionsmål.

Använd det undantaget när konsekvenserna av att glömma skiljer sig åt. En kortlek inför ett behörighetsprov kan motivera ett högre mål än en mindre viktig kortlek med referensmaterial, även om båda använder samma anpassade modell.

FSRS-parametrarna blir inte specifika för kortleken när du väljer **This deck**. Som standard anpassar Anki parametrarna utifrån repetitionshistoriken för alla kortlekar som använder den aktuella profilen. Om olika grupper av kortlekar känns mycket olika svåra använder du separata profiler för att anpassa modellen till varje grupp. Det är det sätt Anki stöder.

## Använd Help Me Decide och simulatorn för olika frågor

Anki 26.08 har två separata experimentella verktyg:

- **Help Me Decide (Experimental)** visar en personligt anpassad kurva över retention och arbetsbelastning. Använd den för frågan: ”Vilket retentionsmål passar det antal repetitioner eller den tid jag kan lägga på studier över tid?”
- **FSRS Simulator (Experimental)** uppskattar hur en viss konfiguration kan fungera över tid. Använd den för att jämföra ändringar av retention, antal nya kort, repetitionsgränser och maximalt intervall.

[Dokumentationen för FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) listar dess viktigaste indata:

- antal dagar att simulera
- ytterligare nya kort att simulera
- nya kort per dag
- maximalt antal repetitioner per dag
- maximalt intervall
- önskad retention och profilens FSRS-parametrar

Simuleringen använder också de faktiska minnestillstånden för korten som hör till profilen. För en samling med lång repetitionshistorik ger det mer än att bara multiplicera antalet kort som ska repeteras i dag med en generell procentsats.

Kör tre scenarier innan du ändrar de inställningar du faktiskt använder:

1. Nuvarande retention och antal nya kort.
2. Det retentionsmål du överväger.
3. Samma mål med färre nya kort per dag.

Den tredje körningen prövar ett vanligt alternativ: behåll minnesmålet och minska inflödet av nytt material. Om det ger en hanterbar prognos behöver du inte acceptera att glömma mer bara för att minska kön. En mer utförlig guide om inflödet finns i [Hur många nya instuderingskort per dag?](/blog/how-many-new-flashcards-per-day/).

Båda verktygen ger uppskattningar. Missade dagar, redigerade kort, nytt material och ändrade bedömningsvanor kan göra att den verkliga arbetsbelastningen avviker från diagrammet. Använd jämförelsen för att välja riktning, inte som ett löfte om exakt hur kön ser ut om flera månader.

Äldre guider kan i stället nämna **Compute Minimum Recommended Retention**, eller CMRR. Anki tog bort den funktionen i version 25.07. Den ingår inte i dagens arbetssätt för att välja önskad retention.

## Optimera FSRS-parametrarna utifrån din egen historik

Önskad retention uttrycker ditt mål. FSRS-parametrarna beskriver hur modellen är anpassad till dina repetitioner.

I Anki 26.08 använder du **Optimize Current Preset** för att anpassa parametrarna för den aktiva profilen. Som standard tar Anki med repetitionshistorik från varje kortlek som använder den profilen. Du kan justera sökningen om underlaget för anpassningen ska vara snävare. **Optimize All Presets** uppdaterar alla profiler i en och samma körning.

Skriv inte in vikter för hand och kopiera dem inte från Reddit, en video eller någon annans kortlek. Deras kort, repetitionstidpunkter och bedömningsvanor är inte din historik. En prydlig lista med [FSRS-6-vikter](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) är ingen studiestrategi som går att överföra till vem som helst.

Optimera igen först när du har samlat på dig en betydande mängd ny repetitionshistorik. Ankis manual säger att en gång i månaden räcker, medan vägledningen i appen i version 26.08 säger att en gång med några månaders mellanrum räcker. Den praktiska slutsatsen är densamma: det finns ingen anledning att optimera varje vecka, än mindre efter varje studiepass.

### Använd hälsokontrollen för den aktuella profilen

Aktivera **Check health when optimizing (slow)** när du vill att Anki ska bedöma hur väl FSRS kan anpassas till den aktuella profilens historik. Kontrollen körs med **Optimize Current Preset**, inte med **Optimize All Presets**.

Om resultatet är dåligt ska du granska underlaget innan du ändrar vikterna. [Ankis vägledning om FSRS-parametrar](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) nämner vanliga orsaker: färre än några hundra repetitioner, att använda Hard när du inte mindes och att inte trycka på Again när du misslyckas med att minnas. Om den användbara historiken är liten, behåll standardvärdena och optimera senare i stället för att låna en annan användares parametrar.

## Again betyder att du inte mindes; Hard är godkänt

Den här vanan är lika viktig som vilken inställning som helst.

Använd **Again** när du inte kunde ge det efterfrågade svaret eller svarade fel. Använd **Hard** bara när du mindes rätt, men med stor ansträngning eller tvekan. Good och Easy är också godkända bedömningar.

Om du trycker på Hard för att slippa ett kort Again-intervall registrerar du ett misslyckande som ett lyckat försök. FSRS lär sig då av en felaktig händelse. Välj knappen som beskriver hur väl du mindes svaret. Låt inte tiderna ovanför knapparna styra ditt val.

Tvetydiga kort gör ärliga bedömningar svårare. Om frågan ber om fem fakta och du minns fyra började schemaläggningsproblemet redan när kortet skrevs. Dela upp eller skriv om kortet. För kort som du fortsätter misslyckas med trots upprepade repetitioner, läs [Så åtgärdar du instuderingskort som ständigt ställer till problem](/blog/how-to-fix-leech-flashcards/).

## Håll FSRS-inlärningsstegen korta – eller lämna dem tomma med avsikt

Inlärnings- och ominlärningssteg styr när kortet visas igen på kort sikt, innan den vanliga långsiktiga schemaläggningen tar över. De är inte ännu ett retentionsmål.

Ankis FSRS-vägledning rekommenderar två begränsningar:

- varje steg ska vara kortare än en dag och gå att slutföra samma dag
- antalet repetitioner samma dag ska hållas lågt

Långa kedjor som `1m 10m 1d 3d` för med sig en gammal SM-2-vana in i FSRS. Steg på en dag eller mer fördröjer den modellbaserade schemaläggningen och kan ge förvirrande knapptexter, till exempel att Hard visar ett längre intervall än Good.

En kort sekvens som `1m 10m`, med `10m` som ominlärningssteg, är en försiktig utgångspunkt om den passar dina studiepass. Fler repetitioner samma dag är inte automatiskt bättre.

Anki 26.08 tillåter också att fältet för inlärningssteg eller ominlärningssteg lämnas tomt. Med FSRS aktiverat överlåter ett tomt fält den kortsiktiga schemaläggningen till FSRS. Det här är experimentellt, och ett Again-intervall kan bli en dag eller längre. Behåll korta manuella steg om du behöver vara säker på att kortet visas igen samma dag. Töm ett fält bara om du medvetet accepterar att FSRS väljer tidpunkten.

## Låt Reschedule cards on change vara av för en gradvis övergång

När **Reschedule cards on change** är av – vilket är standard – ändras inte befintliga repetitionsdatum direkt när du aktiverar FSRS eller ändrar önskad retention eller parametrar. Den nya konfigurationen börjar gälla när kort repeteras framöver, så kön förändras gradvis.

Om du sparar en sådan FSRS-ändring med alternativet på räknas repetitionsdatumen om direkt. Beroende på det nya målet och kortens tillstånd kan många kort behöva repeteras på en gång. Anki lägger också till historikposter för omplanerade kort, vilket gör samlingen större.

Alternativet är användbart bara när du faktiskt vill räkna om det befintliga schemat. För en samling som du har studerat länge:

1. Skapa en färsk säkerhetskopia och kontrollera att du vet hur du ångrar ändringen eller återställer samlingen från kopian.
2. Kör simulatorn med de föreslagna inställningarna.
3. Välj en konfigurationsändring; kombinera inte flera experiment.
4. När du sparar aktiverar du omplanering bara om du vill att repetitionsdatumen ska räknas om direkt och kan hantera resultatet.

Anki rekommenderar uttryckligen en säkerhetskopia när du byter från SM-2 med omplanering. Den mer allmänna [guiden till säkerhetskopiering av instuderingskort](/blog/how-to-back-up-flashcards/) förklarar varför möjligheten att återställa är lika viktig som själva säkerhetskopian.

## Behåll ett generöst maximalt intervall

Ankis maximala intervall är som standard 100 år. Det ser märkligt ut tills du kommer ihåg att det är ett tak, inget löfte om att varje väl inlärt kort ska försvinna i ett sekel.

Ett lägre tak tvingar fram tidigare repetitioner av kort som du kan väl och ökar arbetsbelastningen. Vid taket kan Hard, Good och Easy alla visa samma intervall, eftersom inget får överskrida maxvärdet.

Ett kortare maximalt intervall kan vara rimligt när ett prov sätter en verklig tidsgräns, materialet ändras ofta eller regler inom ditt yrke kräver återkommande genomgångar oavsett hur väl du beräknas minnas. Anpassa taket efter kalendern och simulatorn i stället för att välja ett lågt tal av oro. [Så pluggar du inför ett prov med FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) behandlar det mer avgränsade fallet.

För vanligt långsiktigt lärande bör taket vara generöst. Önskad retention styr redan när den beräknade sannolikheten att minnas ska utlösa en repetition.

## Antalet nya kort hör till beslutet om arbetsmängd

FSRS kan fördela repetitioner; det kan inte göra ett obegränsat inflöde hållbart. Varje nytt kort ger inlärningsarbete nu och repetitionsarbete senare.

När kön blir för tung bör du undersöka detta innan du sänker önskad retention:

- nya kort per dag
- stora importer eller omgångar av genererade kort
- en gräns för maximalt antal repetitioner som gör att kort som redan är dags att repetera inte visas
- problemkort och otydliga kort som kräver upprepade försök
- missade repetitionsdagar

Använd **Additional new cards to simulate** när du vet att en kortlek kommer att växa. En prognos som bara bygger på dagens samling visar inte arbetsbelastningen efter en stor import.

Om resultatet blir för högt, minska antalet nya kort och simulera igen. Då behåller du minnesmålet utan att be schemaläggaren acceptera att du glömmer mer.

## Anki och Nibomo har olika FSRS-inställningar

Båda produkterna använder FSRS-6, men Ankis FSRS-inställningar har inte exakta motsvarigheter i Nibomo.

| Funktion | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Önskad retention | **Shared Preset** eller **This deck** | Kan ställas in per arbetsyta; standard `0.90` |
| FSRS-parametrar | **Optimize Current Preset** eller **Optimize All Presets** utifrån repetitionshistoriken | De officiella standardvikterna för FSRS-6 är låsta och kan inte ändras av användaren i v1 |
| Inlärningssteg | Kan ställas in; FSRS-schemaläggning vid tomt fält är experimentell | Kan ställas in per arbetsyta; standard `1m 10m` |
| Ominlärningssteg | Kan ställas in; FSRS-schemaläggning vid tomt fält är experimentell | Kan ställas in per arbetsyta; standard `10m` |
| Maximalt intervall | Standard 100 år | Standard 36 500 dagar, också 100 år |
| Inställningsändringar | Gäller framtida repetitioner som standard; retroaktiv omplanering kan väljas | Gäller bara framtida repetitioner; befintliga repetitionsdatum räknas inte om |
| Verktyg för arbetsbelastning | **Help Me Decide (Experimental)** och **FSRS Simulator (Experimental)** | Ingen motsvarande simulator för arbetsbelastning i v1 |

Nibomo använder standardbedömningarna Again, Hard, Good och Easy och lagrar FSRS-minnestillstånd för varje kort. Schemaläggarna i backend, iOS och Android är separata implementationer som underhålls så att de beter sig likadant. Repetitionerna på webben använder schemaläggaren i backend i stället för en fjärde kopia.

De här avgränsningarna och standardvärdena dokumenteras i den offentliga [specifikationen för Nibomos FSRS-schemaläggning](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Avvägningen är enkel: Nibomo ger en praktisk FSRS-6-konfiguration per arbetsyta, medan Anki ger mer detaljerad styrning, personlig anpassning och simulering. Om de funktionerna är avgörande passar Anki bättre.

## Ett tryggare arbetssätt för en etablerad samling

Om du redan har månader eller år av repetitionshistorik, arbeta i den här ordningen:

1. **Använd bedömningarna rätt.** Again betyder att du inte mindes; Hard betyder att du mindes med svårighet.
2. **Optimera den aktuella profilen.** Anpassa efter din egen historik i stället för att redigera eller kopiera vikter.
3. **Kör hälsokontrollen vid behov.** Se knapphändig eller inkonsekvent historik som ett problem med underlaget.
4. **Använd Help Me Decide.** Välj ett spann för retention utifrån det antal repetitioner eller den tid du kan lägga på studier över tid.
5. **Kör simulatorn.** Jämför nuvarande konfiguration, det föreslagna målet och ett lägre inflöde av nya kort.
6. **Ändra en sak i de aktiva inställningarna.** Justera retention eller inflöde först och följ sedan den verkliga kön.
7. **Håll stegen korta.** Ta bort inlärnings- och ominlärningskedjor med steg på en dag eller mer; använd tomma fält bara som ett experiment.
8. **Behåll ett generöst maximalt intervall.** Korta det bara för en tydlig tidsgräns eller ett uttalat krav.
9. **Låt omplanering vara av.** Om du behöver räkna om schemat direkt, säkerhetskopiera först och planera för kön som uppstår.

Med den här ordningen går ändringarna i ett etablerat schema att ångra så länge som möjligt. Den hindrar också tre olika problem – modellens anpassning, minnesmålet och inflödet av nytt material – från att bli ett enda inställningspussel.

## Vanliga frågor om de bästa FSRS-inställningarna

### Är 90 % den bästa önskade retentionen för FSRS?

Det är den tryggaste generella utgångspunkten eftersom det är Ankis standardvärde och undviker den brantaste delen av arbetsbelastningskurvan vid hög retention. Det bästa värdet för en viss kortlek beror på konsekvenserna av att glömma och hur mycket arbete du klarar över tid. Använd **Help Me Decide (Experimental)** innan du ändrar det.

### Ska jag sätta önskad retention till 95 %?

Först efter att du har undersökt hur många extra repetitioner eller minuter det innebär. En välgjord kortlek med viktigt innehåll kan motivera 95 %; en stor samling för fritidsstudier kan bli onödigt tung. Aktivera inte retroaktiv omplanering samtidigt om du inte medvetet vill räkna om repetitionsdatumen direkt.

### Hur ofta ska jag optimera FSRS-parametrarna?

En gång i månaden är redan tillräckligt ofta, och vägledningen i Anki 26.08 säger att en gång med några månaders mellanrum räcker. Optimera när du har samlat på dig en betydande mängd ny historik, inte enligt ett dagligt eller veckovis schema.

### Bör FSRS-inlärningsstegen vara tomma?

Tomma inlärnings- eller ominlärningssteg låter Anki 26.08 överlåta motsvarande kortsiktiga schemaläggning till FSRS. Funktionen är experimentell, och Again kan schemaläggas en dag eller mer framåt. Ett fåtal steg som ryms samma dag är fortfarande det försiktiga valet.

### Omplaneras befintliga Anki-kort när jag ändrar FSRS-inställningar?

Inte som standard. När **Reschedule cards on change** är av påverkar nya inställningar framtida repetitioner utan att kön räknas om direkt. Om du slår på det ändras repetitionsdatumen och många kort kan behöva repeteras, så säkerhetskopiera först.

### Finns CMRR fortfarande i Anki?

Nej. Anki tog bort Compute Minimum Recommended Retention i version 25.07. I Anki 26.08 använder du **Help Me Decide (Experimental)** och **FSRS Simulator (Experimental)** för att jämföra retention med beräknad arbetsbelastning.

### Har Nibomo samma inställningar som Anki?

Nibomo använder FSRS-6 och låter dig ställa in önskad retention, inlärningssteg, ominlärningssteg, maximalt intervall och fuzz, det vill säga slumpmässig intervallvariation, per arbetsyta. Appen har inte hela Ankis inställningsmodell: vikterna är låsta i v1, ändringar gäller bara framåt och det finns ingen personlig parameteroptimering eller simulator för arbetsbelastning.

## Bestäm arbetsmängden före procentsatsen

Bra FSRS-inställningar får repetitionskön att passa en verklig studieplan. Börja på 90 %, uppskatta arbetet, kontrollera inflödet av nya kort och höj retentionen bara när det är värt fler repetitioner för att minnas mer. Håll stegen korta, det maximala intervallet generöst och bedömningarna ärliga.

Lämna sedan inställningsvyn. Schemaläggaren behöver regelbundna repetitioner mer än ännu en kväll av finjustering.
