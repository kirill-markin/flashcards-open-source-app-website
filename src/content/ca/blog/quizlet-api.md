---
title: "Quizlet té una API pública el 2026? Estat actual i alternatives segures"
description: "Quizlet té una API? El 18 d'agost de 2026 no hi havia cap API pública documentada amb registre autònom. Compara les alternatives amb suport oficial."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "API de Quizlet"
  - "Quizlet té una API"
  - "API pública de Quizlet"
  - "API de Quizlet per a desenvolupadors"
  - "alternativa a l'API de Quizlet"
  - "automatitzar targetes d'estudi"
---

Amb la informació disponible el 18 d'agost de 2026, Quizlet no documenta cap API pública a la qual els desenvolupadors es puguin registrar pel seu compte, ni cap portal públic per a desenvolupadors. Un desenvolupador independent no disposa de cap via oficial per registrar una aplicació, obtenir una clau de l'API de Quizlet i fer servir endpoints documentats per llegir o escriure dades de targetes d'estudi.

Aquesta conclusió es refereix a la documentació pública de Quizlet, no als seus sistemes interns. Quizlet té integracions amb altres productes i socis. L'aplicació de Quizlet a ChatGPT i el complement per a Google Classroom en són dos exemples actuals. Cap de les dues integracions dona a altres aplicacions accés a una API de Quizlet d'ús general.

**Informació verificada:** 18 d'agost de 2026.

> **Declaració d'interessos:** Soc Kirill Markin i desenvolupo Nibomo. Més avall presento la seva API per a agents i el seu servidor MCP com a alternatives. Nibomo no és compatible amb Quizlet i no importa automàticament conjunts de Quizlet.

![Un desenvolupador compara l'exportació de Quizlet, la inserció en pàgines, les integracions amb productes concrets i una API documentada de targetes d'estudi](/blog/quizlet-api.png)

## Resposta breu: no hi ha cap API pública de Quizlet documentada amb registre autònom

Si has cercat «Quizlet té una API?» perquè vols automatitzar tasques dins de Quizlet, la resposta pràctica actual és que **no hi ha cap API pública documentada a la qual et puguis registrar pel teu compte**.

Algunes funcions oficials poden semblar pròpies d'una API, però resolen necessitats més concretes:

| Què necessites | Via amb suport oficial | Per a què serveix | Què no ofereix |
|---|---|---|---|
| Traslladar el text d'un conjunt que has creat | [Exportació des del web de Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Fer una còpia puntual dels termes i les definicions | Imatges, exportació de conjunts copiats, historial d'estudi o accés a una API |
| Mostrar un conjunt públic en un web o una pàgina d'un LMS | [Inserció de Quizlet](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Incloure una activitat d'estudi amb la marca de Quizlet dins de la teva pàgina | Dades estructurades de les targetes o accés de lectura i escriptura |
| Convertir una conversa de ChatGPT en un conjunt de Quizlet | [Aplicació de Quizlet a ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Crear un conjunt i previsualitzar-lo amb `@Quizlet` | Credencials o endpoints per a la teva pròpia aplicació |
| Assignar tasques de Quizlet a Google Classroom | [Complement de Quizlet per a Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Cercar, assignar i fer el seguiment d'activitats a Classroom | Una API general per a programari educatiu a mida |
| Crear la teva pròpia integració amb Quizlet | Actualment no hi ha cap via documentada per obtenir accés pel teu compte | Pot existir un acord amb un soci concret | Registre públic, claus d'API o una especificació documentada de les dades i les operacions amb targetes |
| Automatitzar el teu propi espai de treball de targetes | [API per a agents de Nibomo](/ca/docs/api/) o [connector MCP](/ca/docs/mcp-connector/) | Llegir i escriure repetidament targetes i baralles dins d'un espai de treball | Compatibilitat amb Quizlet o importació automàtica de Quizlet |

La distinció és senzilla: copiar una vegada el text de les teves targetes és una exportació. Mostrar Quizlet en una altra pàgina és una inserció. Una integració amb un producte concret només funciona dins del flux de treball d'aquell producte. El programari que crea, llegeix i edita targetes de manera recurrent necessita una API documentada de lectura i escriptura.

## L'exportació, la inserció i l'accés per a socis no són API públiques

Una API pública ofereix als desenvolupadors externs un contracte tècnic: documentació, autenticació, operacions admeses, normes d'ús i una manera d'obtenir credencials. Cap de les vies públiques actuals de Quizlet permet completar tot aquest procés de manera autònoma.

L'**exportació** de Quizlet és una transferència manual. El creador d'un conjunt pot fer servir el web per configurar com s'organitzen els termes i les definicions, seleccionar **Copia el text (Copy text)** i enganxar el resultat en un altre lloc. Quizlet indica que no es poden exportar imatges ni conjunts copiats i que la funció només està disponible al web. Serveix per a una migració puntual feta amb cura. No permet que un programa mantingui dos sistemes sincronitzats.

La **inserció** permet mostrar contingut, no accedir a les dades. Quizlet permet copiar l'HTML d'un conjunt públic en els modes Combina (Match), Aprèn (Learn), Prova (Test), Targetes (Flashcards) o Escriu el que sents (Spell). L'activitat inserida conserva el logotip de Quizlet i els estudiants interactuen amb la seva interfície. La teva aplicació no rep el conjunt com a registres de targetes que pugui editar.

Una **integració amb un producte concret** té un flux de treball propi, acordat entre les parts. Quizlet pot integrar-se amb ChatGPT o Google Classroom sense oferir la mateixa interfície a tots els desenvolupadors. Aquests llançaments demostren que les integracions anunciades existeixen; no demostren que al darrere hi hagi una API pública de Quizlet d'ús general.

Per això, ni una biblioteca antiga que encapsula peticions ni una petició visible a les eines de desenvolupador del navegador constitueixen una API de Quizlet amb suport oficial. Hi falten la documentació pública i un contracte estable per a desenvolupadors.

## Tria la via adequada per al que vols fer

### Per a una còpia de seguretat o una migració puntual, fes servir l'exportació

Segueix el procés oficial d'exportació de Quizlet per a un conjunt que hagis creat. Com que el procés acaba amb **Copia el text (Copy text)**, conserva intacta la primera còpia enganxada abans d'ajustar els separadors o establir la correspondència entre camps. Així conserves els termes i les definicions, però no obtens un paquet amb tota la baralla que puguis restaurar. Les imatges i l'historial d'estudi no es transfereixen.

Trobaràs la llista de comprovacions pràctiques a [Com exportar conjunts de Quizlet el 2026](/ca/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Explica com conservar una còpia original i una de treball, fer servir UTF-8 i tabulacions, gestionar definicions de diverses línies i distingir entre traslladar el contingut de les targetes i traslladar l'estat de la programació dels repassos.

L'exportació serveix per a un trasllat puntual. No serveix per crear targetes cada dia, sincronitzar-les o editar-les de manera recurrent des d'un programa.

### Per mostrar el contingut, fes servir la inserció oficial

Si els estudiants han d'estudiar un conjunt públic de Quizlet des del web de la classe o una pàgina d'un LMS, fes servir el codi d'inserció que Quizlet proporciona al seu web. Tria l'activitat, selecciona **Copia l'HTML (Copy HTML)** i afegeix el resultat a la pàgina. Els estudiants disposen d'una activitat interactiva de Quizlet; el web on s'insereix no rep les dades de les targetes en brut.

Sovint això és tot el que necessita un docent. Anomenar-ho API només fa que la necessitat sembli més complicada del que és.

### Per a ChatGPT o Google Classroom, fes servir la integració anunciada

L'anunci de Quizlet del 10 de març de 2026 sobre ChatGPT descriu un procés concret: connectar l'aplicació de Quizlet, començar una instrucció amb `@Quizlet`, previsualitzar el conjunt generat a ChatGPT i obrir-lo a Quizlet per personalitzar-lo i estudiar. És una via amb suport oficial per crear un conjunt de Quizlet a partir d'aquella conversa. No proporciona cap credencial reutilitzable de l'API de Quizlet al teu bot, script o web.

L'anunci de Quizlet del 30 de juny de 2026 sobre Google Classroom és igualment concret. El complement permet als docents cercar i assignar activitats, com ara preguntes de pràctica, targetes i jocs, i després fer el seguiment de la participació i el progrés des de Classroom. Quizlet indica que cal Google Workspace for Education Plus; és possible que els docents necessitin que l'administrador informàtic els doni permís o els proporcioni el complement.

Si algun d'aquests processos ja encaixa amb el teu objectiu, fes-lo servir. Si necessites una aplicació a mida, cap de les dues integracions substitueix l'accés públic per a desenvolupadors.

### Per a l'automatització recurrent, tria una interfície documentada de lectura i escriptura

L'automatització continuada exigeix que el teu programa pugui repetir la mateixa feina de manera fiable: crear targetes a partir d'apunts, llistar baralles, actualitzar respostes o gestionar un espai de treball al llarg del temps. Una exportació al porta-retalls no pot oferir aquest contracte.

La via segura és un sistema de targetes que publiqui explícitament com s'autentica el programari extern i quines operacions de lectura i escriptura admet. Això pot implicar triar una alternativa a l'API de Quizlet per al flux de treball automatitzat, mentre continues fent servir Quizlet per a les tasques d'estudi que ofereix al públic.

## Què ofereix realment l'API de Nibomo com a alternativa

Nibomo publica dues vies per accedir al mateix conjunt limitat de dades de cada usuari:

- L'[API externa per a agents](/ca/docs/api/) té el punt d'entrada a `GET https://api.nibomo.com/v1/`. La resposta inicial guia l'agent per iniciar sessió amb un codi d'un sol ús enviat per correu electrònic (OTP), crear una clau d'API i seleccionar un espai de treball. Les lectures fan servir una ruta de consulta d'estil SQL; les escriptures fan servir una ruta d'execució separada.
- El [servidor MCP remot](/ca/docs/mcp-connector/) està disponible a `https://mcp.nibomo.com/mcp`. Els clients MCP disposen de vuit eines: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` i les eines de repàs `next_review_card`, `reveal_answer` i `submit_review`.

La vuitena eina, `get_usage_limits`, permet consultar el pla del compte, els límits i l'ús d'IA del mes en curs. És estrictament de només lectura i no llegeix ni modifica targetes.

Totes dues vies limiten les operacions a l'espai de treball seleccionat. Els recursos publicats són `workspace`, `cards`, `decks` i `review_events`, i els resultats tenen un límit de 100 files per sentència. La interfície d'estil SQL fa servir un dialecte limitat i no dona accés directe a PostgreSQL. No hi ha cap esquema OpenAPI, de manera que els fluxos de treball que depenen de clients generats a partir d'OpenAPI necessitaran una altra interfície.

Això pot ajudar un desenvolupador o un agent d'IA a automatitzar la gestió de les seves pròpies targetes. No permet llegir un URL de Quizlet, replicar un compte de Quizlet ni actuar com a client no documentat de Quizlet. No hi ha cap importador automàtic de Quizlet. Per fer una migració, exporta primer els termes i les definicions del teu propi conjunt, revisa el text i distribueix-lo entre els camps de les targetes del sistema de destinació. Aquest sistema crea el seu propi estat d'estudi; l'historial de Quizlet no es transfereix.

Per veure les diferències entre els productes més enllà de l'accés a l'API, consulta la [comparativa amb una alternativa de codi obert a Quizlet](/blog/quizlet-alternative/).

## Les peticions privades del navegador no són una drecera segura

La interfície web de Quizlet fa peticions de xarxa, com qualsevol aplicació web moderna. Trobar una d'aquestes peticions no la converteix en un endpoint amb suport oficial per al teu programa.

Els endpoints privats que fa servir el navegador poden dependre de galetes de sessió, formats interns, controls contra l'abús i supòsits vinculats a la interfície actual. Poden canviar sense un sistema públic de versions ni instruccions de migració. A més, les [condicions del servei de Quizlet](https://quizlet.com/tos), actualitzades per última vegada el 28 de maig de 2026, prohibeixen el scraping i altres formes d'extracció automatitzada, així com l'ús automatitzat no autoritzat del servei.

És una base fràgil i arriscada per a un script personal, i encara més per a un producte. Aquí no proporcionaré endpoints deduïts ni passos d'enginyeria inversa.

Per al teu propi conjunt, fes servir l'exportació quan necessitis un trasllat puntual. Insereix un conjunt públic quan els estudiants el necessitin en una altra pàgina. Fes servir la integració de ChatGPT o Google Classroom per a aquells fluxos de treball concrets. Per a lectures i escriptures recurrents, tria programari amb un contracte tècnic documentat per a l'automatització, o continua fent manualment la part de Quizlet fins que Quizlet en publiqui un.

## Com saber si la situació canvia

Quizlet podria llançar un programa per a desenvolupadors després de la data de verificació d'aquest article. El senyal que cal buscar és un portal oficial per a desenvolupadors o documentació que expliqui qui s'hi pot registrar, com funciona l'autenticació, quines operacions amb targetes s'admeten i quines normes d'ús s'apliquen.

Una altra biblioteca de tercers que encapsuli peticions no canviaria la resposta. Tampoc ho faria una nova col·laboració amb un producte concret. Fins que Quizlet documenti com poden obtenir accés els desenvolupadors pel seu compte, tracta amb prudència les afirmacions sobre una API actual de Quizlet i tria la via amb suport oficial adequada per al que vols fer.
