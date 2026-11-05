---
title: "Hitta dubbletter i Anki och välj vilka kort du vill behålla"
description: "Hitta dubbletter i Anki, jämför anteckningar som matchar och välj vilken kopia du vill behålla. Öva på att rensa och kontrollera repetitionshistoriken."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "dubbletter i Anki"
  - "hitta dubbletter i Anki"
  - "ta bort dubbletter bland anteckningar i Anki"
  - "dubbla kort i Anki"
  - "repetitionshistorik i Anki"
---

Du känner igen frågan från ett kort du redan har övat på, men Anki visar kortet som nytt. Kanske följde en kopia med vid en import. Frågan kan också komma från ett annat kort som Anki skapade från samma anteckning. Raderar du en rad i kortbläddraren kan alla kort från den anteckningen försvinna, även kortet i den riktning du ville behålla.

När du vill rensa bland **dubbletter i Anki**, börja med att ta reda på varför frågan dyker upp igen. Om den kommer från olika anteckningar kan du använda **Notes → Find Duplicates** för att hitta möjliga kopior. Jämför innehållet i anteckningarna och historiken för varje kort. Avgör sedan för varje grupp vilken kopia du vill behålla. Ett fält med samma innehåll är en ledtråd. Läs hela anteckningarna innan du bestämmer vad som kan tas bort.

Instruktionerna gäller Ankis datorapp och bygger på dokumentationen och källkoden till den släppta versionen, båda kontrollerade den 4 oktober 2026. Det fiktiva exemplet nedan är en övning på papper och visar vad du kan vänta dig.

![En medlem i en schackklubb jämför ett extra torn i ljus färg med två slitna torn på ett schackbräde i trä](/blog/anki-duplicate-cards.png)

## Ta reda på var frågan kommer ifrån

En anteckning innehåller fält som **Front** och **Back**. Kortmallarna styr vilka kort Anki skapar från anteckningen. Samma glosa kan till exempel ge ett kort där du ska känna igen ordet och ett där du själv ska komma på det. De kallas syskonkort och har varsitt repetitionsschema. Läs mer i [Ankis guide till anteckningar och fält](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

Öppna kortbläddraren (**Browse**) och välj läget **Cards**. Öppna **Cards → Info** för varje rad du vill undersöka och jämför värdena för **Note ID**. Korten kommer från samma anteckning om värdet är detsamma och från olika anteckningar om det skiljer sig. Byt ut `123` i `nid:123` mot anteckningens faktiska ID för att hitta alla kort som hör till den, oavsett kortlek. Se [Ankis guide till sökning på ID](https://docs.ankiweb.net/searching.html#object-ids).

| Vad du hittar | Trolig förklaring | Nästa steg |
| --- | --- | --- |
| Samma anteckning, frågor i motsatta riktningar | Syskonkort som är tänkta att övas åt varsitt håll | Kontrollera om du har nytta av båda frågorna |
| Samma anteckning, identiska frågor när korten visas | Möjligen dubbla kortmallar | Jämför mallarna och förhandsgranska korten |
| Olika anteckningar, frågor som ser likadana ut | Möjliga dubbletter | Jämför hela anteckningarna innan du väljer vilken du vill behålla |

[Guiden till omvända Anki-kort (på engelska)](/blog/anki-reverse-cards/) förklarar hur de två riktningarna fungerar. Vill du bara pausa det ena kortet kan du använda **Suspend**. Då ligger kortet kvar i samlingen. Se [guiden till att pausa kort i Anki (på engelska)](/blog/anki-bury-vs-suspend/).

Om mallarna är identiska kan du följa [Ankis felsökningsguide för extra kopior](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Tar du bort en mall påverkas alla anteckningar av den typen, även i andra kortlekar. Granska därför en eventuell malländring separat när en fråga dyker upp flera gånger.

## Avgränsa sökningen efter dubbletter

Öppna **Notes → Find Duplicates** och välj vilket fält som ska jämföras, till exempel **Front**. Som standard söker Anki bland alla anteckningstyper som innehåller det fältet. Avgränsa sökningen med **Optional filter** och klicka på **Search**. [Ankis dokumentation för Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates) beskriver alternativen.

Om kortleken heter `Cleanup practice` anger du det här filtret.

```text
deck:"Cleanup practice"
```

Sökningen omfattar även underkortlekar. Ta bort filtret och sök i hela samlingen om kopior kan ligga i olika kortlekar. Även om du inte får några träffar i en kortlek kan det finnas kopior på andra håll. Se [Ankis söksyntax för kortlekar](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes).

Klicka på en grupp i sökresultatet för att granska anteckningarna. **Tag Duplicates** lägger till taggen `duplicate` på alla matchande anteckningar, även den du vill behålla. Det framgår av [den publicerade källkoden för taggningen](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py). **Radera inte alla träffar på `tag:duplicate`.** Använd taggen för att samla möjliga dubbletter och välj sedan vilka anteckningar som ska bort, en i taget.

Sökningen jämför innehållet i det valda fältet. Om flera frågor testar samma sak med olika formuleringar kan du behöva leta upp dem själv. Två frågor som ser likadana ut kan också höra till olika språk eller kurser.

## Tre exempel att gå igenom på papper

Tänk dig sex anteckningar i kortleken `Cleanup practice`, som saknar underkortlekar. A och B använder standardmallarna för **Basic (and reversed card)** och ger två kort var. C–F använder **Basic** och ger ett kort var. Alla åtta kort ligger i samma kortlek. Bokstäverna gäller bara i exemplet. I Anki är ID:n för anteckningar och kort numeriska.

| Anteckningar | Front → Back | Vad du vet i exemplet | Beslut |
| --- | --- | --- | --- |
| A och B | `le vélo` → `bicycle` | A har 12 repetitioner på kortet där du ska känna igen ordet och 3 på kortet där du ska komma på det. B:s båda kort är nya. | Behåll A. Granska B först när du väljer vad som kan tas bort. |
| C och D | `Chemical symbol for silver?` → `Ag` | C har 20 repetitioner och D har 6. | Jämför historiken för båda korten och välj vilket du vill fortsätta repetera. |
| E och F | E: `bank` → `financial institution`. F: `bank` → `side of a river`. | Korten testar olika betydelser. | Behåll båda och lägg till sammanhang så att betydelsen framgår. |

En sökning på fältet **Front** kan hitta alla tre paren. Bara i det första paret är valet enkelt. Innan du bestämmer dig för att ta bort B, jämför **alla fält**, mediefiler, taggar och anteckningstyper. Förhandsgranska också korten i varje riktning. B kanske innehåller en ljudfil med uttalet eller ger en fråga som saknas bland A:s kort.

Om du hittar innehåll som hjälper dig att öva på samma sak, kopiera över just det till anteckningen du behåller och förhandsgranska resultatet. Spara även taggar som ger användbar information om källan. Ska du öva på en annan faktauppgift, skapa en ny fråga. Historiken hör till den tidigare frågan.

För C och D ger antalet repetitioner en ledtråd. Gå igenom när du repeterade korten, hur du bedömde svaren, vilket intervall varje kort har och när det ska repeteras nästa gång. Fler repetitioner kan betyda att du har behövt lära in samma sak på nytt flera gånger. Välj vilken historik du vill bygga vidare på när du har kontrollerat att kortets fråga och svar fungerar för det du vill lära dig. Om svaren motsäger varandra, gå tillbaka till källan för att avgöra vilket som stämmer.

Om du behåller C och tar bort D **slås kortens historik inte ihop**. Du fortsätter repetera C utifrån just det kortets inlärningsstatus. I Ankis [Card Info](https://docs.ankiweb.net/stats.html#card-info) visas historiken för varje kort. Repetitionerna för raderade anteckningar finns kvar i statistiken för hela samlingen och försvinner ur statistiken för enskilda kortlekar. De överförs heller inte till kortet du behåller. Se [manualens förklaring av statistik för raderade anteckningar](https://docs.ankiweb.net/stats.html#more).

Om du är osäker kan du vänta med att radera. Skriv upp vad du behöver kontrollera och pausa vid behov de kort du överväger att ta bort.

## Radera en bekräftad dubblett och kontrollera resultatet

Synkronisera de ändringar som finns på dina andra enheter innan du raderar något ur din riktiga samling. Synkronisera sedan datorn så att dess samling får med ändringarna. Se [Ankis synkroniseringsguide](https://docs.ankiweb.net/syncing.html). Gå till **File → Export** och spara ett **Anki Collection Package (`.colpkg`)** med **Include Media** aktiverat. Paketet innehåller alla kortlekar med repetitionsscheman och historik. Förvara filen säkert. Om du importerar den skriver den sparade samlingen över korten som finns i den öppna profilen. Se [dokumentationen om export av samlingar](https://docs.ankiweb.net/exporting.html#collection-colpkg).

Vill du öva på att radera, skapa en separat profil via **File → Switch Profile** och importera säkerhetskopian där. Låt övningsprofilen vara frånkopplad från AnkiWeb. [Varje profil har sin egen samling](https://docs.ankiweb.net/profiles.html). Om du ansluter båda profilerna till samma konto kan den ena samlingen skriva över den andra. [Guiden om APKG och COLPKG (på engelska)](/blog/anki-apkg-vs-colpkg/) går igenom vad som ingår i säkerhetskopian och vad som händer vid import.

I exemplet är A1 kortet där du ska känna igen ordet och A2 kortet där du ska komma på det själv. B1 och B2 är B:s motsvarande kort. Öppna **Cards → Info** och skriv upp de faktiska kort-ID:na för A1 och A2, uppgifterna om nästa repetition, intervallen och några poster du känner igen i historiken. Skriv även upp B:s antecknings-ID. Jämför läget före och efter i samma session, utan att repetera korten eller ändra schemat för någon av kopiorna.

Ta bort en dubblett i taget med de här stegen.

1. Byt ut sökningen i **Browse** mot en `nid:`-sökning med B:s faktiska antecknings-ID. Granska alla träffar i läget **Cards** och förhandsgranska frågorna i båda riktningarna. Sök utan kortleksfilter så att du ser eventuella syskonkort i andra kortlekar när du rensar i din riktiga samling.
2. Växla till läget **Notes**. Kontrollera att den enda träffen är den oönskade anteckningen B, markera bara den och välj **Notes → Delete**. Ankis [Delete-kommando](https://docs.ankiweb.net/browsing.html#notes) tar bort den markerade anteckningen och alla dess kort, även om du använder det från en enskild rad i läget **Cards**.
3. Sök på B:s antecknings-ID igen. Sökresultatet ska vara tomt. Sök sedan med `cid:` följt av A:s kort-ID:n, åtskilda med kommatecken. Jämför uppgifterna under **Info** för båda korten med det du skrev upp.
4. Sök på `deck:"Cleanup practice"` och jämför antalet rader i lägena **Notes** och **Cards**. Stäm av vilka anteckningar som finns kvar mot tabellen nedan.

Så här ska det se ut när du bara har raderat B.

| Kontroll | Före | Förväntat efteråt |
| --- | --- | --- |
| Hela kortleken i exemplet | 6 anteckningar / 8 kort | 5 anteckningar / 6 kort |
| Korten med glosan `le vélo` | A1, A2, B1, B2 | Bara A1 och A2 |
| A:s kort-ID:n, uppgifter om nästa repetition, intervall och historik | Värdena du antecknade | Samma kort, schema och historikposter |
| Sökning på B:s antecknings-ID | B:s två kort | Inga träffar |
| Anteckningarna om silver och `bank` | C, D, E, F | Samma fyra anteckningar finns kvar |

Här försvinner två kort när du raderar en anteckning. Skulle du råka radera A får du samma antal, men tappar korten du redan har repeterat och ville spara. Kontrollera därför både antalet och vilka kort som finns kvar. Låt inlärningsstatusen och repetitionsschemat för de kort du behåller vara när du rensar.

Repetitionsdiagrammet för hela samlingen kan fortfarande räkna med repetitioner av borttagna kort. Titta på kortets ID och uppgifterna under **Info** för att kontrollera att du kan fortsätta där du slutade.

När resultatet för den första gruppen stämmer med det du skrev upp kan du gå vidare. Bedöm nästa grupp för sig och välj vilken kopia du vill behålla. Om du övade på en kopia av samlingen, upprepa den kontrollerade rensningen i din riktiga profil. Kontrollera samlingen och synkronisera datorn. Synkronisera sedan de andra enheterna innan du studerar på dem. Om kopiorna uppstod vid import, läs [guiden till att uppdatera anteckningar via CSV (på engelska)](/blog/anki-csv-update-existing-notes/) före nästa import. Om du skapade kopior för att samma faktauppgift hör till flera ämnen kan du märka anteckningen med flera taggar och hålla reda på en enda historik. Se [guiden om taggar och kortlekar (på engelska)](/blog/anki-tags-vs-decks/).
