---
title: "Quizlet té un servidor MCP el 2026? Què poden fer servir Claude i Codex"
description: "Quizlet no documenta cap servidor MCP el 2026. Comparem la seva app de ChatGPT, l’exportació exclusiva per a creadors i una via segura per a l’accés recurrent amb Claude o Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "MCP de Quizlet"
  - "servidor MCP de Quizlet"
  - "connector de Quizlet per a Claude"
  - "connectar Quizlet a Claude"
  - "Quizlet Codex"
  - "app de Quizlet a ChatGPT"
  - "alternativa a l’API de Quizlet"
---

El 12 de setembre de 2026, la documentació pública de Quizlet no descriu cap servidor MCP ni cap API pública per a desenvolupadors amb accés d’autoservei. Si has cercat una URL MCP de Quizlet per enganxar-lo a Claude, Codex o un altre client MCP, avui la documentació de Quizlet no ofereix cap configuració pública per fer-ho.

Quizlet sí que té una app oficial a ChatGPT. Pot convertir una conversa de ChatGPT en un conjunt nou de Quizlet, però aquest flux concret no és un servidor MCP de Quizlet reutilitzable. Si necessites que un agent accedeixi de manera recurrent a targetes existents, la via pràctica és exportar el text d’un conjunt que hagis creat, conservar-ne una còpia en brut, revisar la transferència i fer servir un sistema de targetes d’estudi que admeti explícitament lectures i escriptures per part d’agents.

**Fets comprovats:** 12 de setembre de 2026.

> **Declaració d’interessos:** Soc Kirill Markin i desenvolupo Nibomo, que ofereix el servidor MCP i l’Agent API que es presenten com a alternatives més avall. Nibomo no es pot connectar a un compte de Quizlet ni importar una URL de Quizlet.

![Un jardiner porta una planta jove d’un hivernacle tancat a un bancal amb reg per degoteig ramificat](/blog/quizlet-mcp-server.png)

## L’app de ChatGPT, l’exportació i MCP resolen necessitats diferents

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) és un estàndard obert per connectar aplicacions d’IA a sistemes externs. Normalment, un servidor MCP ofereix als clients compatibles un punt de connexió conegut i un conjunt definit d’eines que poden invocar.

L’[anunci oficial de Quizlet sobre ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) descriu un funcionament diferent. Instal·les l’app de Quizlet a ChatGPT, comences una instrucció amb `@Quizlet`, previsualitzes les targetes generades dins de ChatGPT i després obres el conjunt a Quizlet per personalitzar-lo i estudiar-lo.

Això és útil quan la tasca és «convertir aquesta conversa de ChatGPT en un conjunt de Quizlet». L’anunci no publica cap punt de connexió MCP general de Quizlet, no dona a Claude ni a Codex accés a la teva biblioteca de Quizlet ni ofereix credencials de desenvolupador reutilitzables.

Això no diu res sobre la infraestructura privada o interna de Quizlet. Només descriu la interfície que Quizlet posa a disposició a través de la seva documentació pública. Els límits més generals de l’accés per a desenvolupadors s’expliquen a [Quizlet té una API pública el 2026?](/ca/blog/quizlet-api/).

La distinció és aquesta:

| Què vols fer realment | La via més ben admesa actualment | Què en pots esperar |
| --- | --- | --- |
| Crear un conjunt nou de Quizlet a partir d’una conversa de ChatGPT | L’app oficial de Quizlet a ChatGPT | Un flux específic amb `@Quizlet` dins de ChatGPT, seguit de l’edició i l’estudi a Quizlet |
| Traslladar termes i definicions d’un conjunt que hagis creat | L’exportació al web de Quizlet | Una còpia puntual del text que has de conservar i comprovar |
| Permetre que Claude, Codex o un altre agent llegeixi o editi targetes d’estudi repetidament | Un sistema de targetes d’estudi amb un servidor MCP o una API per a agents documentats | Accés autenticat a l’espai de treball de destinació, no a Quizlet |
| Desenvolupar programari que utilitzi les dades d’un compte de Quizlet | Esperar documentació oficial per a desenvolupadors o una via autoritzada per a socis | Avui no hi ha documentat cap contracte públic de Quizlet per a una API o un servidor MCP amb accés d’autoservei |

L’app de Quizlet a ChatGPT cobreix un flux de creació. L’exportació cobreix una transferència puntual. MCP cobreix l’accés recurrent a un sistema que exposa eines expressament. No són intercanviables.

## Tria la via més curta amb suport oficial

Si l’app oficial de ChatGPT ja s’ajusta a la tasca, fes-la servir. No cal afegir un segon sistema només per crear un conjunt de Quizlet a partir d’una conversa.

Si només necessites una còpia de seguretat o un trasllat puntual, fes servir l’exportació de Quizlet. Si necessites que un agent torni demà, trobi una baralla, hi afegeixi targetes i les corregeixi, cal una interfície documentada de lectura i escriptura al sistema de destinació. Fins que Quizlet no en publiqui una, aquest flux recurrent no pot ser una connexió directa al teu compte de Quizlet amb suport oficial.

Per al programari a mida desenvolupat específicament al voltant de les dades de Quizlet, respecta el mateix límit. Una petició del navegador, una biblioteca antiga que encapsuli les peticions o una integració que algú hagi obtingut per enginyeria inversa no substitueixen la documentació actual per a desenvolupadors.

## Fes que l’exportació d’un conjunt propi sigui reversible

Les [instruccions oficials d’exportació](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) de Quizlet indiquen que només el creador pot exportar un conjunt, i només des del web. El recorregut és **Més → Exporta → Copia el text**. Inclou els termes i les definicions; Quizlet indica que no es poden exportar ni les imatges ni els conjunts copiats.

Per a un conjunt que hagis creat, una transferència prudent consta de pocs passos:

1. Fes servir l’exportació del web de Quizlet i enganxa el resultat en un fitxer de text pla.
2. Desa una còpia UTF-8 intacta abans de canviar separadors, salts de línia o el text.
3. Edita un duplicat, no l’exportació en brut.
4. Comprova una mostra del principi, del mig i del final, a més de les definicions de diverses línies i els caràcters no llatins.
5. Importa o adjunta la còpia de treball, previsualitza l’anvers i el revers d’unes quantes targetes i, només llavors, desa-les.
6. Conserva el conjunt de Quizlet i el fitxer en brut fins que hagis obert i provat la baralla de destinació.

Trobaràs totes les comprovacions de separadors, CSV i fitxers a [Com exportar conjunts de Quizlet el 2026](/ca/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). És fàcil passar per alt una limitació important: l’exportació transfereix el text de les targetes, però no les imatges, les carpetes, l’historial d’estudi, el nivell de domini del material ni la programació dels repassos de Quizlet.

Per això és important que el trasllat sigui reversible. Si una definició de diverses línies es converteix en dues targetes o un separador desplaça els camps, el fitxer en brut et proporciona una referència intacta.

## Què poden fer servir Claude i Codex després de l’exportació

Nibomo publica un punt de connexió MCP remot a:

`https://mcp.nibomo.com/mcp`

> [Connecta’l a Claude](https://claude.ai/directory/nibomo) · [Documentació](/ca/docs/mcp-connector/)

La seva [documentació del connector MCP](/ca/docs/mcp-connector/) defineix vuit eines: `list_workspaces`, `sql_query` per a lectures, `sql_execute` per a escriptures, `get_guide` per a guies de referència, i també `next_review_card`, `reveal_answer` i `submit_review` per als repassos. Els clients MCP interactius poden autoritzar l’accés amb OAuth. Els agents de terminal poden començar, en canvi, per la [documentació de l’Agent API](/ca/docs/api/) i fer servir el flux HTTP publicat.

`get_usage_limits`: consulta de només lectura del pla del compte, dels límits i de l’ús d’IA del mes en curs; no llegeix ni modifica targetes.

Això no converteix Nibomo en un connector de Quizlet. El flux admès és:

1. exportar el text d’un conjunt de Quizlet que hagis creat;
2. conservar el fitxer en brut i inspeccionar una còpia de treball;
3. revisar les targetes resultants de l’assignació dels camps abans de desar-les a Nibomo; i
4. connectar l’espai de treball resultant de Nibomo a un client compatible per a lectures i escriptures futures.

Per a Claude, trobaràs els passos del connector a [Com connectar Nibomo a Claude amb MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex i altres agents poden fer servir la via documentada d’MCP o de l’Agent API que admeti el seu entorn.

Nibomo no pot llegir una URL de Quizlet, replicar un compte de Quizlet, sincronitzar canvis posteriors de Quizlet ni recuperar les imatges i l’historial d’estudi que l’exportació omet. Crea les seves pròpies targetes i un nou estat de programació dels repassos a partir del material que decideixis traslladar-hi.

Si estàs valorant si aquest canvi compensa més enllà de l’accés dels agents, consulta la [comparativa d’una alternativa de codi obert a Quizlet](/blog/quizlet-alternative/).

## Mantén els permisos més limitats que la tasca

Un contracte públic elimina part de les incerteses de la integració, però no fa que totes les accions d’MCP siguin segures. OAuth autentica la connexió. No garanteix que una targeta generada per IA sigui correcta, no impedeix que les dades retornades de les targetes surtin del servei de targetes d’estudi ni decideix si una edició correspon al que volies fer.

Nibomo separa les operacions de lectura de les eines d’escriptura: `sql_execute` per a targetes i baralles, i `submit_review` per als repassos. La credencial OAuth continua cobrint tota la interfície del connector, de manera que el bloqueig d’eines i el funcionament de les aprovacions depenen del client. Comença amb un espai de treball petit i sense dades sensibles. Deixa que l’agent llegeixi només les dades necessàries per a la tasca, exigeix l’aprovació de cada crida d’escriptura quan el client ho admeti i inspecciona l’espai de treball i el canvi proposat abans d’acceptar-lo.

No connectis material d’estudi privat fins que hagis comprovat les condicions de conservació i tractament de dades del client d’IA. El model d’amenaces detallat és a [És segur MCP per a les targetes d’estudi?](/blog/is-mcp-safe-for-flashcards/). Per a una primera transferència, n’hi ha prou amb una regla senzilla: conserva l’exportació en brut, previsualitza unes quantes targetes, aprova una escriptura d’abast limitat i comprova el resultat a l’app de destinació abans de continuar.

## No converteixis el trànsit privat del navegador en una API

Una petició visible a les eines de desenvolupador del navegador no és una API pública de Quizlet. Els punts de connexió privats poden dependre de galetes de sessió, formats interns i comportaments que canvien sense avís. Qualsevol ús automatitzat també ha de complir les [condicions del servei de Quizlet](https://quizlet.com/tos) i els permisos que tinguis sobre el material.

Aquest article no proporciona instruccions d’extracció automatitzada de dades ni punts de connexió obtinguts per enginyeria inversa. Si l’app oficial de ChatGPT s’ajusta a la tasca, fes-la servir. Si has creat el conjunt i necessites un trasllat puntual, exporta’l. Si necessites lectures i escriptures recurrents per part d’agents, trasllada el contingut revisat a un sistema que publiqui aquesta interfície i mantén manual la part de Quizlet llevat que Quizlet documenti alguna novetat.
