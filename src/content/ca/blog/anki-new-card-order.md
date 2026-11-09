---
title: "L’ordre de les targetes noves a Anki. Com se seleccionen, com s’ordenen i com comprovar la cua"
description: "Entén com Anki selecciona i ordena les targetes noves amb un exemple de sis targetes. Comprova els límits de les subbaralles, les posicions a la cua i la baralla que has triat per estudiar."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "ordre de les targetes noves a Anki"
  - "ordre de selecció de targetes noves a Anki"
  - "ordre de presentació de targetes noves a Anki"
  - "posició ascendent a Anki"
  - "targetes que surten desordenades a Anki"
---

A Anki, una targeta nova a la posició 10 pot sortir després d’una que és a la 60. Si estudies una baralla mare amb **Per baralla** (**Deck**) com a criteri de selecció i **En l’ordre de selecció** (**Order gathered**) com a criteri d’ordenació, Anki pot acabar de triar les targetes d’una subbaralla que va abans d’arribar a la que conté la targeta de la posició 10. Ordenar l’explorador per data de creació no canvia la cua d’estudi.

L’ordre de les targetes noves a Anki es decideix en dos passos. La **selecció** determina quines targetes entren dins dels límits d’avui. L’**ordenació** determina en quin ordre es mostren les targetes seleccionades. Comença per comprovar si Anki tria targetes diferents de les que esperaves o si les que esperaves surten en un altre ordre.

Aquestes instruccions són per a baralles normals d’Anki per a ordinador. L’exemple de sis targetes és un càlcul original fet sobre paper a partir del manual vigent i de la versió publicada d’[Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), consultats el 6 d’octubre de 2026.

![Un home sosté un quart disc de vinil damunt d’un compartiment buit d’un prestatge, al costat de tres discos. Al darrere hi ha dues caixes amb àlbums que no ha triat.](/blog/anki-new-card-order.png)

## Tria l’ordre que vols

Obre les **Opcions** (**Options**) de la baralla que selecciones per estudiar i ves a **Ordre de presentació** (**Display Order**). Quan estudies una baralla mare, els seus paràmetres de presentació regeixen la sessió, incloses les targetes de les subbaralles.

| Resultat que vols | Ordre de selecció de targetes noves (**New Card Gather Order**) | Ordre de presentació de targetes noves (**New Card Sort Order**) |
| --- | --- | --- |
| Seguir les posicions de les targetes noves de menor a major a tota la jerarquia de la baralla seleccionada | Posició ascendent (**Ascending position**) | En l’ordre de selecció |
| Donar prioritat a les subbaralles per ordre alfabètic i seguir l’ordre de les posicions dins de cadascuna | Per baralla | En l’ordre de selecció |
| Mantenir les targetes seleccionades i mostrar-les en un ordre aleatori | El criteri de selecció que hagis triat | Aleatori (**Random**) |

Aquestes combinacions segueixen les definicions de [selecció](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) i [ordenació](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) del manual d’Anki, en anglès. **Posició ascendent** fa servir la posició desada de cada targeta nova. Aquesta posició pot diferir de l’ordre de creació segons l’ordre d’inserció i els canvis manuals de posició que s’hagin fet.

Abans de canviar res, comprova quin perfil d’opcions té assignat la baralla i quines altres baralles el fan servir. Els paràmetres de presentació pertanyen al perfil. Si el canvi només ha d’afectar aquesta baralla, segueix primer la [guia per assignar un perfil propi a una sola baralla](/blog/anki-deck-options-presets/), en anglès. Per als límits diaris, pots establir valors específics amb **Aquesta baralla** (**This deck**) o **Només avui** (**Today only**). Les baralles que fan servir el mateix perfil continuen compartint els paràmetres de presentació.

## Calcula quines quatre targetes entren a la cua

Imagina una baralla mare normal que es diu `OrderLab`, amb dues subbaralles i només aquestes sis targetes. Cadascuna prové d’una nota diferent del tipus **Bàsic** (**Basic**), que genera una sola targeta. Per tant, totes sis tenen el mateix número de tipus de targeta i cap no té targetes germanes.

| Targeta | Baralla | Posició desada de la targeta nova |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Suposa que totes sis són noves, que cap no està enterrada ni suspesa i que cap no és en una baralla filtrada. Al començament no hi ha cap altra targeta, cap repetició d’aprenentatge ni cap repàs. Avui encara no has estudiat res. `OrderLab` no té cap baralla per sobre i els límits de repàs aplicables deixen lloc per a les sis targetes noves.

Selecciona **OrderLab** per estudiar. El seu límit efectiu de targetes noves és de **4**. El de `01 First` és de **3** i el de `02 Second` és de **2**, sense ajustos temporals. Fes servir **En l’ordre de selecció** com a criteri d’ordenació en tots dos casos. Parteix del mateix estat inicial de la col·lecció en cada comparació i fes el càlcul sobre paper, sense respondre targetes entre l’una i l’altra.

Amb **Per baralla**, la selecció va així.

1. Anki visita `01 First` abans que `02 Second` perquè segueix l’ordre alfabètic.
2. Selecciona **A, B i C** per ordre de posició. `01 First` ja ha aportat tres targetes i a la baralla mare li queda un lloc.
3. Selecciona **D** de `02 Second` i arriba al límit de quatre targetes de la baralla mare.

L’ordre previst de primera aparició és **A → B → C → D**. E i F queden fora de la selecció.

Amb **Posició ascendent**, Anki considera les candidates de totes dues subbaralles en l’ordre **D → A → E → B → F → C**. Les quatre primeres respecten tots els límits. N’hi ha dues de `02 Second` i dues de `01 First`, quatre en total. La selecció s’atura aquí.

La seqüència prevista és **D → A → E → B**. C i F queden fora de la selecció. A mesura que incorpora targetes, Anki aplica els límits de cada baralla i de les baralles que té per sobre. Així ho fa el [codi de selecció de la versió publicada](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs).

`02 Second` pot aportar com a màxim dues targetes. Amb **Per baralla** només n’aporta una perquè `01 First` ja ha ocupat tres dels quatre llocs disponibles. Amb **Posició ascendent** n’entren dues de cada subbaralla per les posicions concretes d’aquest exemple. En una altra col·lecció, el repartiment pot ser diferent.

## Deixa entrar les sis targetes per separar la selecció de l’ordre

En la segona comparació sobre paper, ajusta els límits perquè hi càpiguen totes sis. Posa **6** a la baralla mare, **3** a `01 First` i **3** a `02 Second`. Mantén **En l’ordre de selecció**.

| Criteri de selecció | Límits (baralla mare / `01 First` / `02 Second`) | Ordre previst de primera aparició |
| --- | --- | --- |
| Per baralla | 6 / 3 / 3 | A → B → C → D → E → F |
| Posició ascendent | 6 / 3 / 3 | D → A → E → B → F → C |

Tots dos criteris seleccionen les sis targetes. Ara només canvia l’ordre en què apareixen. Si pugessis a sis únicament el límit de la baralla mare i mantinguessis el de `02 Second` en dos, només hi entrarien cinc targetes. F encara quedaria fora. L’augment del límit serveix només per comparar les seqüències sobre paper.

## L’ordenació només pot moure les targetes seleccionades

Torna als límits originals de **4 / 3 / 2** i canvia només l’**Ordre de presentació de targetes noves** a **Aleatori**.

| Criteri de selecció | Targetes que es poden barrejar | Targetes que queden fora |
| --- | --- | --- |
| Per baralla | A, B, C, D | E, F |
| Posició ascendent | D, A, E, B | C, F |

Les targetes es mostren en un ordre aleatori i cada selecció conserva les mateixes targetes. Amb les dades de la taula no es pot predir cap seqüència aleatòria concreta. El [codi d’ordenació de la versió publicada d’Anki](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) reordena les targetes que ja s’han seleccionat.

L’opció **Per tipus de targeta i després en l’ordre de selecció** (**Card type, then order gathered**) també treballa amb les targetes ja seleccionades. Com que les sis targetes de notes del tipus Bàsic tenen el mateix número de tipus de targeta, en aquest exemple conserven l’ordre de selecció.

En un altre exemple, imagina que Anki ja ha seleccionat quatre targetes de notes amb diverses plantilles i que han entrat en l’ordre **W (tipus 2), X (tipus 1), Y (tipus 2), Z (tipus 1)**. L’ordenació per tipus dona **X → Z → W → Y**. Primer van les del tipus 1 i, dins de cada tipus, es conserva l’ordre de selecció. L’exemple comença un cop feta la selecció. Quines targetes germanes hi haurien entrat depèn dels paràmetres d’enterrament.

El número correspon a la posició de la plantilla de la targeta dins del tipus de nota. El paper de cada plantilla, com ara «reconeixement» o «producció», depèn de com l’hagis configurat. Comprova les preguntes abans de donar per fet que ordenar per tipus farà sortir primer totes les que van en el sentit directe.

## Comprova les posicions a l’explorador abans de canviar-les

Obre l’**Explorador** (**Browse**), tria el mode **Targetes** (**Cards**) i fes una cerca que inclogui la baralla i les seves subbaralles. En aquest exemple, la cerca és la següent.

```text
deck:OrderLab is:new
```

Des del menú de la capçalera de les columnes, mostra **Pregunta** (**Question**), **Targeta** (**Card**), **Baralla** (**Deck**), **Venciment** (**Due**) i **Data de creació** (**Created**). Per a una targeta nova, **Venciment** mostra la posició a la cua i **Data de creació** indica quan es va crear la nota. **Camp d’ordenació** (**Sort Field**) mostra el contingut del camp de la nota que s’ha triat per ordenar. Ordenar per una columna de l’explorador només canvia com es mostra la taula. Les posicions desades i el criteri de selecció per a l’estudi es mantenen. La [documentació de les columnes de l’explorador](https://docs.ankiweb.net/manual/browsing#columns), en anglès, distingeix aquests valors.

La cerca `is:new` pot incloure targetes noves suspeses o enterrades. En aquests casos, el valor de **Venciment** apareix entre claudàtors. Pots acotar la cerca per excloure aquestes targetes i les que en aquell moment són en baralles filtrades.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

El manual d’Anki explica les [cerques per estat](https://docs.ankiweb.net/manual/searching#card-state) i les [cerques per baralla](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes), en anglès. Si el nom de la baralla conté espais, posa’l entre cometes, com a `deck:"My Deck"`. El resultat és una llista de candidates. Els límits i l’enterrament automàtic de targetes germanes encara poden reduir el nombre de targetes que entrin a la cua d’avui. La nostra [guia sobre la diferència entre enterrar i suspendre](/blog/anki-bury-vs-suspend/), en anglès, explica quan aquestes targetes deixen d’estar disponibles.

Si les posicions ja reflecteixen l’ordre que vols, deixa-les com estan. Si les has de canviar, anota les posicions anteriors, selecciona un grup petit de targetes noves que vulguis moure i ves a **Targetes → Reposiciona** (**Cards → Reposition**). Revisa el quadre de diàleg abans de confirmar. **Desplaça la posició de les targetes existents** (**Shift position of existing cards**) també pot moure targetes de fora de la selecció que tinguin posicions més altes. Si no actives el desplaçament, les posicions noves poden coincidir amb les existents. En cas d’empat, la posició per si sola no et diu quina targeta apareixerà primer. Consulta la [documentació de l’acció Reposiciona](https://docs.ankiweb.net/manual/browsing#cards), en anglès.

Pots canviar els criteris de selecció o d’ordenació i conservar l’historial d’aprenentatge i de repàs. Per diagnosticar el problema, centra’t en les posicions de les targetes noves i en els paràmetres de presentació.

## Comprova quina baralla tries i quin marge et queda avui

En l’exemple original, si selecciones directament `OrderLab::02 Second`, les candidates són D, E i F. Amb el límit de dues targetes, **Posició ascendent** i **En l’ordre de selecció**, la seqüència prevista és **D → E**. A la baralla mare encara li queden els quatre llocs, de manera que hi ha marge per a totes dues fins i tot si s’apliquen els límits de les baralles superiors. Si selecciones la baralla mare amb **Per baralla** i els límits **4 / 3 / 2**, la seqüència prevista és **A → B → C → D**.

Quan inicies la sessió des d’`OrderLab`, s’apliquen els seus paràmetres de presentació encara que hagis editat els de `02 Second`. La baralla que selecciones fixa l’ordre de presentació i el màxim total. També compten els límits aplicables de les subbaralles. **Aplica els límits des de dalt** (**Limits start from top**) determina si també es tenen en compte els límits de les baralles superiors quan estudies una subbaralla directament. El manual d’Anki descriu les [regles de les subbaralles](https://docs.ankiweb.net/manual/deck-options#subdecks) i l’[opció que controla els límits de les baralles superiors](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top), en anglès.

Comprova també els límits de repàs. Per defecte, el límit de repàs també restringeix les targetes noves. **Les targetes noves ignoren el límit de repàs** (**New cards ignore review limit**) canvia aquest comportament. Tant aquesta opció com **Aplica els límits des de dalt** afecten tota la col·lecció. Així ho mostra el [codi de la interfície dels límits diaris de la versió publicada](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Anota l’estat de totes dues opcions abans de deduir, a partir del límit de targetes noves, quantes en pots veure avui.

Fes servir la **Vista prèvia** (**Preview**) de l’explorador per veure les preguntes sense respondre-les. A la pròxima sessió d’estudi normal, anota aquestes dades.

| Què has d’anotar | Què et permet aclarir |
| --- | --- |
| Baralla seleccionada per estudiar, perfil assignat i criteris de selecció i d’ordenació | Quins paràmetres de presentació regeixen la sessió? |
| Targetes que esperes veure i les seves posicions desades | El problema és quines targetes entren o en quin ordre apareixen? |
| Límits de targetes noves i de repàs, ajustos per a la baralla o només per a avui, i què has estudiat avui | Quin marge et queda? |
| Límits de les baralles superiors i estat de les dues opcions que afecten tota la col·lecció | Quins límits addicionals s’apliquen? |
| Targetes enterrades, suspeses, en baralles filtrades o germanes | Quines candidates poden quedar fora? |
| Ordre en què apareixen les targetes noves per primer cop, anotat per separat de les repeticions d’aprenentatge | Coincideix l’ordre de les primeres aparicions amb la previsió? |

Després de respondre una targeta nova, les repeticions d’aprenentatge es poden intercalar a la sessió. L’**Ordre de targetes noves i de repàs** (**New/Review Order**) determina si les targetes noves apareixen abans dels repassos, després o intercalades. Les targetes noves se segueixen seleccionant i ordenant segons els seus propis paràmetres. El [codi que construeix la cua a la versió publicada](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) combina aquestes categories després d’ordenar les targetes noves.

Dona la comprovació per acabada quan les targetes que esperaves i l’ordre en què havien d’aparèixer coincideixin amb el que veus. Si encara hi ha diferències, conserva les posicions, els paràmetres, la baralla seleccionada, la versió d’Anki i la seqüència observada per poder acotar el diagnòstic. Anota també els complements que hi puguin tenir a veure. Si vols fer un repàs extra d’un tema, consulta la [guia per practicar amb baralles filtrades sense reprogramar les targetes](/blog/anki-filtered-decks-without-rescheduling/), en anglès.
