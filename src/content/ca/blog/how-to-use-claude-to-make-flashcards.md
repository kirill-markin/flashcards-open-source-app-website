---
title: "Com fer servir Claude per crear targetes d'estudi el 2026: projectes, càrrega de fitxers i repàs amb FSRS"
description: "Un procés pràctic per crear targetes d'estudi amb Claude el 2026: fes servir projectes i fitxers per preparar targetes més breus i clares, i passa les que valguin la pena a Nibomo per repassar amb FSRS."
date: "2026-06-11"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "com fer servir Claude per crear targetes d'estudi"
  - "targetes d'estudi amb Claude"
  - "de Claude a targetes d'estudi"
  - "targetes d'estudi amb projectes de Claude"
  - "targetes d'estudi amb càrrega de fitxers a Claude"
  - "de PDF a targetes d'estudi amb Claude"
  - "crear targetes d'estudi amb Claude"
  - "targetes d'estudi amb FSRS"
---

> [Connecta amb Claude](https://claude.ai/directory/nibomo) · [Documentació](/ca/docs/mcp-connector/)

Ahir vaig passar a Claude un esquema d'una classe i un PDF de lectura força desordenat, i li vaig demanar targetes d'estudi. Algunes eren bones. La resta feien aquella olor tan coneguda d'IA: tècnicament correctes, estranyament polides i molt més difícils de repassar del que semblaven a primera vista.

Aquest és el problema real quan et planteges **com fer servir Claude per crear targetes d'estudi**.

Claude sap convertir material de partida en propostes de targetes. Això no vol dir que sàpiga decidir què val la pena repassar a llarg termini, com de breu ha de ser una targeta o si una resposta ben escrita continuarà sent fàcil d'avaluar dijous vinent.

Per això, el procés del qual em refiaria el 2026 és més acotat del que la gent voldria d'entrada: mantén un sol tema dins d'un projecte de Claude, puja només el material d'aquella tanda, demana propostes senzilles amb anvers i revers, elimina sense miraments i passa les que sobrevisquin a un sistema de targetes d'estudi de debò amb FSRS.

![Un escriptori acollidor amb esborranys de projectes a l'estil de Claude, fitxes de càrrega de fitxers i targetes d'estudi seleccionades per repassar amb FSRS](/blog/how-to-use-claude-to-make-flashcards.png)

## Claude ja està preparat per a aquest procés

Aquesta cerca té més sentit ara perquè Claude està més orientat a l'estudi que abans.

Anthropic va presentar **Claude for Education** el **2 d'abril de 2025**, amb **Learning Mode** dins dels projectes. La seva documentació d'ajuda actual és igualment rellevant. La pàgina d'ajuda d'Anthropic sobre projectes, datada el **16 de març de 2026**, diu que estan disponibles per a tots els usuaris i que els comptes gratuïts en poden crear fins a cinc. La pàgina d'ajuda sobre càrrega de fitxers, datada el **22 d'abril de 2026**, diu que Claude admet formats útils per estudiar, com ara **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON i XLSX**.

Això permet preparar **targetes d'estudi amb Claude** de manera molt més ordenada que l'antiga rutina de «posa-ho tot en un xat i a veure què passa».

L'informe d'Anthropic sobre educació també mostra que aquest ús ja és habitual. Segons l'informe, en el **39,3 %** de les converses relacionades amb l'educació que es van analitzar, els estudiants feien servir Claude principalment per crear i millorar contingut educatiu. Per tant, la qüestió interessant ja no és si la gent fa servir Claude per preparar material d'estudi. És evident que sí. La pregunta més útil és com convertir aquest material en targetes que valgui la pena repassar més endavant.

## Comença amb un projecte de Claude per assignatura, examen o tema

Aquest és el primer hàbit que mantindria, perquè millora gairebé tot el que ve després.

La documentació actual de Claude descriu els projectes com a espais de treball independents, amb el seu propi historial de xats i la seva base de coneixement. És exactament el que necessites per preparar targetes d'estudi.

No creïs un únic espai de treball gegant a Claude anomenat `escola`.

Crea un projecte per a:

- una assignatura
- un examen de certificació
- una unitat que vulguis acabar aquesta setmana
- un conjunt de temes que realment tinguin relació entre si

Així els esborranys queden més clars, perquè Claude no intenta barrejar material de quatre assignatures sense relació en una sola resposta. També és menys feixuc revisar-los, perquè saps què havia de cobrir cada tanda.

Si fas servir Claude com a tutor en un sentit més ampli, i no només per preparar targetes, [Com fer servir Claude per estudiar el 2026](/ca/blog/how-to-use-claude-for-studying/) és una lectura complementària més adequada. Aquest article és més concret. Tracta de passar de les respostes de Claude a targetes que encara et semblin bones quan les repassis.

## Defineix les instruccions del projecte una vegada perquè cada tanda comenci millor

Aquest és un dels avantatges específics de Claude que trobo més útils.

La guia actual d'Anthropic sobre projectes diu que pots definir **instruccions del projecte** perquè Claude mantingui els mateixos requisits en tots els xats d'aquell projecte. En el cas de les targetes d'estudi, això t'estalvia repetir les mateixes regles de format i d'eliminació de targetes cada vegada que puges una secció nova.

Jo faria servir una instrucció breu i sense floritures:

```text
Quan et demani targetes d'estudi, fes servir un format senzill d'anvers i revers. Un concepte, fet, distinció o pas d'un procés per targeta. Els anversos han de ser concrets i s'han de poder respondre. Els reversos han de ser breus. Omet duplicats, preguntes vagues i qualsevol cosa que depengui d'un context del text original que no s'hagi proporcionat.
```

Després, posa les instruccions específiques de la tasca al mateix xat quan pugis una tanda nova.

Aquesta divisió funciona bé perquè la instrucció del projecte fixa les regles generals, mentre que la petició del xat s'ocupa de la classe, el capítol o el conjunt de preguntes del moment.

## Puja tandes de material més petites del que et sembli necessari

És aquí on la majoria de processos per passar **de Claude a targetes d'estudi** perden força.

La gent veu que pot pujar fitxers i s'ho pren com una invitació a abocar el material de tot un curs en una sola petició. Normalment això produeix targetes pitjors, no pas millors.

La mateixa documentació d'Anthropic sobre càrrega de fitxers recomana una opció ben poc espectacular per als documents llargs: dividir-los en seccions més petites. Jo faria exactament això.

Els millors materials d'entrada són:

- els apunts d'una classe
- una secció d'una lectura
- un conjunt de preguntes de pràctica corregides
- un apartat d'un capítol
- un fragment ben ordenat d'una guia d'estudi

Els pitjors materials d'entrada són:

- tot el llibre de text
- dotze classes de cop
- una carpeta de tot un semestre que encara no has ordenat
- una transcripció gegant que en realitat no vols repassar targeta per targeta

Les tandes petites t'obliguen a fer-te una pregunta més honesta: què val la pena recordar d'aquesta secció més endavant sense tornar a obrir el text original?

Aquesta pregunta ajuda a mantenir el conjunt de targetes més petit i de més qualitat.

## Claude sap preparar esborranys a partir del material, però no triar què és important

Crec que aquesta és la manera més útil d'entendre-ho.

Claude pot:

- resumir una secció d'una lectura
- reformular un concepte amb més claredat
- separar subtemes evidents
- convertir apunts en propostes de targetes de pregunta i resposta
- detectar terminologia i definicions repetides

Claude no sap automàticament:

- quins fets ja tens prou clars per ometre'ls
- quines distincions se't continuen entravessant
- quina resposta és massa llarga per avaluar-la ràpidament
- quina targeta només té sentit perquè encara recordes el paràgraf d'on ha sortit

Per això, **crear targetes d'estudi amb Claude** funciona millor quan Claude prepara els esborranys i tu els edites.

Si li demanes que ho decideixi tot, normalment obtens un conjunt de targetes massa complaent. Conserva massa coses, explica massa i manté material que semblava útil en aquell moment però que no mereix futurs repassos.

## Fes una petició senzilla i deixa que les restriccions facin la feina

No necessites cap petició espectacular.

Jo escriuria una cosa semblant a aquesta al mateix xat:

```text
Converteix aquest material en targetes d'estudi senzilles amb anvers i revers.

Regles:
- Un fet, una distinció o un pas d'un procés per targeta
- L'anvers ha de ser concret i s'ha de poder respondre
- El revers ha de ser breu i directe
- No inventis fets
- Omet duplicats i preguntes vagues
- Omet targetes que depenguin d'un context del document original que no s'hagi proporcionat
- Elimina sense miraments les targetes que no valgui la pena repassar a llarg termini
```

Si el material és un conjunt de preguntes corregides, afegeix-hi una frase:

```text
Prioritza els errors, les confusions i les distincions en què és probable que torni a fallar.
```

Amb això n'hi ha prou.

Les restriccions útils són senzilles:

- un sol element per recordar a cada targeta
- respostes breus
- cap fet inventat
- cap anvers que demani un resum massa ampli
- cap targeta que encara necessiti tenir tot el text original obert al costat

Claude sol respondre bé a uns límits clars. El problema gairebé mai és que falti alguna fórmula màgica a la petició. El problema és que es demanen massa coses de cop.

## Les millors targetes de Claude solen sortir de tres tipus de material

Em refio més de Claude quan el material gairebé es pot convertir directament en targetes, però encara cal polir-lo.

Els casos més adequats són:

- apunts de classe que cal resumir
- lectures de les quals cal extreure informació
- preguntes corregides que deixen al descobert un error concret

Aquest patró és important perquè Claude no s'inventa un sistema d'estudi des de zero. T'ajuda a convertir material en brut en elements més concrets que hauràs de recordar.

Si parteixes sobretot d'apunts, [Com convertir apunts en targetes d'estudi el 2026 (en anglès)](/blog/turn-notes-into-flashcards/) aprofundeix en aquest pas de revisió. En el cas dels fitxers, extreu-ne una secció petita i rellevant, i comprova el text, les equacions i les etiquetes abans d'acceptar els esborranys de targetes.

## Elimina les targetes que encara sonen a Claude

Aquí és on es produeix el salt de qualitat real.

Les targetes generades per Claude acostumen a fallar de maneres recognoscibles:

- l'anvers sona elegant, però no queda clar què cal respondre
- el revers conté tres fets perquè el paràgraf en contenia tres
- la targeta conserva expressions poc concretes com «consideracions clau» o «factors importants»
- la redacció és prou clara per admirar-la, però molesta de repassar

Jo les descartaria de seguida.

L'anvers d'una targeta no hauria de sonar com la frase inicial d'una guia d'estudi. Hauria de plantejar una pregunta que puguis encertar o fallar.

Conserva la targeta només si:

- la pots respondre sense tornar a obrir el text original
- el revers és prou breu per avaluar la resposta de seguida
- posa a prova un sol concepte, no tot un conjunt
- d'aquí a una setmana encara et semblarà important recordar-ho

Si no, elimina-la.

Aquesta és la diferència principal entre una sessió amb Claude que sembla productiva i un conjunt de targetes que continua sent útil.

## Una targeta fluixa de Claude i la versió que jo conservaria

Suposem que Claude llegeix un passatge sobre la glicòlisi i et dona això:

- Anvers: Quines són les característiques i els resultats principals de la glicòlisi?
  Revers: La glicòlisi és una via metabòlica que té lloc al citoplasma, converteix la glucosa en piruvat, produeix ATP i NADH i no necessita oxigen.

Això no és una targeta. És un paràgraf amb una etiqueta.

La versió millorada acostuma a ser un conjunt de targetes més petites:

- Anvers: On té lloc la glicòlisi?
  Revers: Al citoplasma.
- Anvers: Quina molècula descompon la glicòlisi?
  Revers: La glucosa.
- Anvers: La glicòlisi necessita oxigen?
  Revers: No.

Potser conserves una targeta més sobre els productes resultants si aquesta distinció és important a la teva assignatura.

L'objectiu no és conservar la resposta tan ben redactada de Claude. És conservar els elements que cal recordar i que hi ha amagats a dins.

## No confonguis la memòria i el context de Claude amb la repetició espaiada

Claude té eines de context millors que abans. Els projectes ajuden. Els fitxers carregats ajuden. Les instruccions del projecte ajuden. Tot això és útil.

Continua sense ser el mateix que un sistema de repàs.

Claude pot mantenir el context d'un tema. Pot recordar el fil de la sessió millor que les eines de xat antigues. Res d'això substitueix la part avorrida que realment importa més endavant: tornar a veure la targeta adequada en el moment adequat.

Per això, les **targetes d'estudi amb projectes de Claude** haurien d'acabar en una aplicació de targetes d'estudi de debò, en lloc de quedar-se dins del mateix projecte.

Claude pot mantenir el context.

FSRS gestiona l'oblit.

Són feines diferents.

Si vols conèixer millor la part de planificació dels repassos, [FSRS vs. SM-2 el 2026 (en anglès)](/blog/fsrs-vs-sm-2/) és la continuació directa.

## Desa les targetes aprovades a Nibomo

Obre [Nibomo al directori de Claude](https://claude.ai/directory/nibomo), connecta'l, inicia sessió al teu compte de Nibomo i autoritza-hi l'accés. Nibomo hi figura com a connector de la categoria Community.

Demana a Claude que desi només les targetes que hagis comprovat i aprovat a través del connector MCP de Nibomo. Revisa l'espai de treball de destinació i la petició d'escriptura abans d'aprovar-la; després comprova les targetes desades a Nibomo abans de repassar-les amb FSRS. També pots copiar-les manualment.

[Nibomo](/ca/) encaixa en aquest procés perquè el producte actual cobreix la part que Claude no acaba tot sol:

- creació i edició de targetes amb anvers i revers
- xat amb IA que treballa amb les dades de l'espai de treball i els fitxers adjunts
- baralles i etiquetes per organitzar les targetes definitives
- repàs amb FSRS quan les targetes ja valen la pena
- una aplicació web allotjada si vols començar de seguida
- una opció d'autoallotjament si més endavant vols executar el sistema pel teu compte

Si vols començar tan aviat com sigui possible, la guia de [Primers passos](/ca/docs/getting-started/) explica l'aplicació allotjada. Si et resulta més important tenir el control de la infraestructura, la [guia d'autoallotjament](/ca/docs/self-hosting/) és la continuació adequada.

## El procés que jo repetiria

La versió bona de **com fer servir Claude per crear targetes d'estudi** és prou breu perquè la continuïs fent servir quan passi la novetat.

Aquesta és la versió que jo mantindria:

1. Crea un projecte de Claude per a una assignatura, un examen o un tema.
2. Afegeix una instrucció breu al projecte amb les regles per a les targetes amb anvers i revers.
3. Puja una tanda petita: una classe, una secció d'una lectura o preguntes de pràctica corregides.
4. Demana a Claude propostes senzilles amb anvers i revers.
5. Elimina o reescriu les targetes fluixes de seguida.
6. Demana a Claude que desi només les targetes que hagis comprovat i aprovat a través del connector MCP de Nibomo. Revisa l'espai de treball de destinació i la petició d'escriptura abans d'aprovar-la; després comprova les targetes desades a Nibomo abans de repassar-les amb FSRS. També pots copiar-les manualment.
7. Repassa la baralla definitiva amb FSRS.

És un procés més creïble que fer veure que Claude mateix ha de ser el lloc on guardis la memòria.

Si el teu conjunt de targetes generades amb IA ja sembla massa carregat, deixa d'acceptar esborranys nous i arregla els que ja tens amb [Com corregir les targetes d'estudi generades amb IA el 2026 (en anglès)](/blog/how-to-fix-ai-flashcards/).

## Una regla millor per crear targetes d'estudi amb Claude

No demanis a Claude que et faci tota la feina d'estudiar.

Demana-li que t'estalviï la feina mecànica.

Aquesta és la versió de **com fer servir Claude per crear targetes d'estudi** que realment funciona el 2026:

- un projecte per tema
- una tanda petita cada vegada
- un fet o una distinció per targeta
- eliminar sense miraments
- repassar de debò després

Claude sap accelerar el pas d'un material desordenat a unes propostes de targetes.

Nibomo amb FSRS converteix aquestes propostes en una cosa que potser encara recordaràs d'aquí a un mes.
