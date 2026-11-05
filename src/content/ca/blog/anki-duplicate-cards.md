---
title: "Com trobar targetes duplicades a Anki i decidir quines conservar"
description: "Troba targetes duplicades a Anki, compara les notes i revisa l'historial de repassos abans de triar quina còpia et quedes. Inclou un exercici de neteja."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "targetes duplicades a Anki"
  - "trobar duplicats a Anki"
  - "suprimir notes duplicades a Anki"
  - "notes duplicades a Anki"
  - "historial de repassos d'Anki"
---

Reconeixes una pregunta que ja has repassat, però Anki te la presenta com si fos nova. Pot ser que n'hagis importat una còpia o que la mateixa nota hagi generat una segona pregunta. Si suprimeixes una nota des d'una fila de l'explorador, pots perdre totes les targetes de la nota, inclosa la que volies conservar.

Per eliminar **targetes duplicades a Anki**, esbrina primer d'on ve la repetició. Si són notes diferents, cerca possibles duplicats amb **Notes → Find Duplicates**. Compara el contingut de les notes i l'historial de cada targeta abans de decidir, cas per cas, quina còpia vols conservar. La coincidència en un camp només és el punt de partida de la comprovació.

Les instruccions són per a l'Anki d'escriptori i fan servir els noms de la interfície en anglès. Es basen en la documentació i el codi font publicat d'Anki, consultats el 4 d'octubre de 2026. L'exercici és fictici i descriu el resultat esperat.

![Un membre d'un club d'escacs compara una torre addicional de color clar amb dues torres gastades sobre un tauler de fusta](/blog/anki-duplicate-cards.png)

## Esbrina què es repeteix

Una nota conté camps com **Front** (anvers) i **Back** (revers). Les plantilles generen les targetes a partir d'aquests camps. D'una mateixa nota de vocabulari en poden sortir dues targetes, una per reconèixer la paraula i l'altra per produir-la. Són targetes germanes, cadascuna amb la seva pròpia programació de repassos. [Notes i camps al manual d'Anki](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Obre l'explorador (**Browse**), activa el mode **Cards** i obre **Cards → Info** per a cada fila que vulguis comprovar. Compara els identificadors de nota (**Note ID**). Si coincideixen, les targetes pertanyen a la mateixa nota. Si són diferents, pertanyen a notes diferents. A la cerca `nid:123`, substitueix `123` per l'identificador real per veure totes les targetes de la nota, encara que siguin en baralles diferents. [Cerca per identificador al manual d'Anki](https://docs.ankiweb.net/searching.html#object-ids)

| Què hi trobes | Explicació probable | Pas següent |
| --- | --- | --- |
| Mateixa nota, preguntes en sentits oposats | Targetes germanes generades expressament | Comprova si et serveixen totes dues preguntes |
| Mateixa nota, preguntes idèntiques a la vista prèvia | Possibles plantilles de targeta duplicades | Compara les plantilles i les vistes prèvies |
| Notes diferents, preguntes aparentment idèntiques | Possibles notes duplicades | Compara les notes senceres abans de triar quina et quedes |

Si les plantilles estan pensades per fer preguntes en tots dos sentits, a la guia de targetes inverses trobaràs com funciona cada sentit. Si només vols deixar de repassar una de les preguntes, suspèn la targeta corresponent. Continuarà a la col·lecció. [Guia de targetes inverses (en anglès)](/blog/anki-reverse-cards/) · [Com suspendre una targeta (en anglès)](/blog/anki-bury-vs-suspend/)

Si les plantilles són idèntiques, segueix les indicacions d'Anki per esbrinar per què apareixen còpies. Suprimir una plantilla afecta totes les notes d'aquell tipus, incloses les d'altres baralles. Tracta la supressió de plantilles com un canvi d'estructura a part. [Diagnòstic de còpies addicionals a l'ajuda d'Anki](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html)

## Delimita la cerca de notes duplicades

Obre **Notes → Find Duplicates** i selecciona el camp que vols comparar, com ara **Front**. Per defecte, Anki cerca entre tots els tipus de nota que contenen aquest camp. Delimita la cerca amb **Optional filter** i fes clic a **Search**. [Opcions de Find Duplicates al manual d'Anki](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Si la baralla es diu `Cleanup practice`, introdueix aquesta cerca.

```text
deck:"Cleanup practice"
```

La cerca en una baralla també inclou les seves subbaralles. Si les còpies poden estar repartides entre diferents baralles, treu el filtre per cercar a tota la col·lecció. Encara que no trobis cap còpia a la baralla, n'hi pot haver en una altra. [Sintaxi de cerca per baralla al manual d'Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Fes clic en un grup de resultats per examinar-ne les notes. A la interfície en anglès, **Tag Duplicates** posa l'etiqueta `duplicate` a totes les notes de cada grup, inclosa la que vulguis conservar. Fes servir `tag:duplicate` per trobar les notes marcades. **Tria d'una en una les que vols suprimir.** [Codi publicat de l'etiquetatge de duplicats](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

La cerca compara el camp seleccionat. Si dues preguntes et fan recordar la mateixa dada amb paraules diferents, potser les hauràs de cercar manualment. Dues preguntes idèntiques també poden pertànyer a llengües o a cursos diferents.

## Tres decisions per provar sobre el paper

Imagina sis notes a `Cleanup practice`, una baralla sense subbaralles. Les notes A i B fan servir les plantilles de **Basic (and reversed card)** sense modificar i generen dues targetes cadascuna. Les notes de la C a la F fan servir **Basic** i en generen una cadascuna. Les vuit targetes són a la mateixa baralla. Les lletres només serveixen per a l'exercici. Els identificadors reals de notes i de targetes d'Anki són números.

| Notes | Anvers → Revers | Estat d'aprenentatge fictici | Decisió |
| --- | --- | --- | --- |
| A i B | `le vélo` → `bicycle` | A té 12 repassos de reconeixement i 3 de producció. Les dues targetes de B són noves | Conserva A. Comença per valorar si pots suprimir B |
| C i D | `Chemical symbol for silver?` → `Ag` | C té 20 repassos i D en té 6 | Compara els dos historials i tria amb quina targeta vols continuar |
| E i F | E té `bank` → `financial institution`. F té `bank` → `side of a river` | La paraula es fa servir en sentits diferents | Conserva-les totes dues i afegeix context a les preguntes |

La cerca al camp **Front** pot agrupar els tres parells. Només en el primer la decisió sembla clara. Abans de donar B per redundant, compara **tots els camps**, els fitxers multimèdia, les etiquetes, el tipus de nota i les preguntes que es generen en cada sentit. Pot ser que B inclogui un enregistrament de la pronunciació que falta a A o que generi una pregunta que A no té.

Si trobes contingut útil per al mateix objectiu d'aprenentatge, copia'l a la nota que conservaràs i comprova el resultat a la vista prèvia. Mantén també les etiquetes d'origen que et serveixin. Si vols repassar una altra dada, crea una pregunta nova perquè tingui un historial propi.

En el cas de C i D, el nombre de repassos et dona una pista. Compara les dates dels repassos, les qualificacions, l'interval actual i les dades del pròxim repàs de totes dues targetes. Pot ser que hagis hagut de tornar a aprendre més vegades la targeta que té més repassos. Comprova que la pregunta i la resposta et serveixin abans de triar amb quin historial vols continuar. Si les respostes es contradiuen, consulta primer el material d'estudi. El nombre de repassos no et diu quina resposta és correcta.

Si conserves C i suprimeixes D, C continua amb el seu propi estat d'aprenentatge. **Els historials no es combinen.** **Card Info** mostra l'historial de cada targeta. Els repassos de les notes suprimides encara compten a les estadístiques de tota la col·lecció, però desapareixen de les de la baralla i no s'incorporen a l'historial de la targeta conservada. [Informació de la targeta al manual d'Anki](https://docs.ankiweb.net/stats.html#card-info) · [Estadístiques de les notes suprimides](https://docs.ankiweb.net/stats.html#more)

Si encara dubtes, deixa la supressió per a més endavant. Anota què et falta comprovar i, si cal, suspèn les preguntes que no vols repassar mentre ho investigues.

## Suprimeix una còpia confirmada i comprova el resultat

Abans de suprimir material real, sincronitza els canvis pendents dels altres dispositius. Després, sincronitza l'Anki d'escriptori perquè els incorpori a la col·lecció. Amb **File → Export**, desa un **Anki Collection Package (`.colpkg`)** amb **Include Media** activat. El fitxer inclou totes les baralles, amb la programació i l'historial dels repassos. Desa'l en un lloc segur. Si l'importes, la col·lecció desada substitueix les targetes actuals del perfil obert. [Manual de sincronització d'Anki](https://docs.ankiweb.net/syncing.html) · [Exportació de col·leccions al manual d'Anki](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Si vols assajar la supressió, crea un perfil separat amb **File → Switch Profile** i importa-hi la còpia de seguretat. Deixa el perfil de prova desconnectat d'AnkiWeb. Cada perfil té la seva col·lecció. Connectar tots dos perfils al mateix compte pot fer que una col·lecció sobreescrigui l'altra. [Perfils al manual d'Anki](https://docs.ankiweb.net/profiles.html) · [Guia d'APKG i COLPKG (en anglès)](/blog/anki-apkg-vs-colpkg/)

Per a l'exercici, anomena A1 la targeta de reconeixement de la nota A i A2 la de producció. B1 i B2 són les targetes equivalents de la nota B. A **Cards → Info**, anota els identificadors reals de les dues targetes d'A, les dades del pròxim repàs, els intervals i algunes entrades de l'historial que puguis reconèixer després. Anota també l'identificador de la nota B. Compara les dades d'abans i de després dins de la mateixa sessió, sense repassar ni reprogramar cap còpia.

Per suprimir notes duplicades d'Anki d'una en una, segueix aquests passos.

1. A l'explorador, substitueix la cerca per `nid:` amb l'identificador real de B. En mode **Cards**, revisa tots els resultats i comprova la vista prèvia en els dos sentits. Si treballes amb material real, cerca també targetes germanes en altres baralles. Fes aquesta cerca sense el filtre de baralla.
2. Canvia al mode **Notes**. Confirma que l'únic resultat és la nota B que vols suprimir, selecciona-la tota sola i tria **Notes → Delete**. L'acció **Delete** suprimeix la nota seleccionada i totes les seves targetes, fins i tot si la fas servir des d'una sola fila del mode **Cards**. [Accions sobre notes al manual d'Anki](https://docs.ankiweb.net/browsing.html#notes)
3. Repeteix la cerca per l'identificador de la nota B i comprova que ja no dona cap resultat. Cerca els identificadors de les dues targetes d'A amb `cid:`, separats per una coma. Obre **Info** a cada targeta i comprova que les dades coincideixen amb les que havies anotat.
4. Cerca `deck:"Cleanup practice"` i compara el nombre de files que hi ha als modes **Notes** i **Cards**. Comprova les notes que queden amb la taula següent.

Si només suprimeixes B, hauries d'obtenir aquest resultat.

| Comprovació | Abans | Resultat esperat després |
| --- | --- | --- |
| Baralla sencera de l'exercici | 6 notes / 8 targetes | 5 notes / 6 targetes |
| Parell de la bicicleta | A1, A2, B1, B2 | Només A1 i A2 |
| Identificadors de les targetes d'A, dades del pròxim repàs, intervals i historial | Les dades que has anotat | Les mateixes targetes, programació i entrades de l'historial |
| Cerca per l'identificador de la nota B | Les dues targetes de B | Cap resultat |
| Notes sobre el símbol de la plata i els sentits de «bank» | C, D, E, F | Es conserven les mateixes quatre notes |

Aquí, en suprimir una sola nota desapareixen dues targetes. Si per error suprimissis A en comptes de B, els totals serien iguals, però perdries les targetes que ja havies estudiat i volies conservar. Comprova tant els identificadors com els totals i mantén la programació de la còpia que conserves, sense reiniciar-la ni reprogramar-la.

Un gràfic de repassos de tota la col·lecció encara pot incloure repassos de targetes suprimides. Per confirmar que has conservat el progrés, comprova l'identificador de la targeta que queda i les dades que mostra **Info**.

Quan el resultat del primer grup coincideixi amb el que has anotat, passa al següent i decideix quina còpia hi vols conservar. Si has fet un assaig, repeteix al perfil real la neteja que ja has comprovat. Després de revisar la col·lecció, sincronitza l'Anki d'escriptori. Sincronitza també els altres dispositius abans de tornar-hi a estudiar. Si les còpies venien d'una importació, consulta la guia per actualitzar notes des d'un CSV abans de tornar a importar. Si havies duplicat notes per incloure una mateixa dada en diversos temes, les etiquetes et permeten classificar-la sense haver de mantenir un altre historial de repassos. [Guia per actualitzar notes amb un CSV (en anglès)](/blog/anki-csv-update-existing-notes/) · [Guia d'etiquetes i baralles (en anglès)](/blog/anki-tags-vs-decks/)
