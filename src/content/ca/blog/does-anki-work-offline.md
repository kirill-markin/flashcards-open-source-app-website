---
title: "Anki funciona sense connexió el 2026? Ordinador, iPhone, Android i sincronització"
description: "Sí: les aplicacions d’Anki instal·lades a l’ordinador, l’iPhone, l’iPad i Android poden fer servir una col·lecció local sense connexió. Descobreix què necessita internet, com funciona la sincronització posterior i com preparar els fitxers multimèdia."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "Anki funciona sense connexió"
  - "fer servir Anki sense connexió"
  - "AnkiMobile funciona sense connexió"
  - "AnkiDroid funciona sense connexió"
  - "sincronització d’Anki sense connexió"
  - "AnkiWeb sense connexió"
  - "fer servir Anki sense internet"
---

Anki no necessita contactar amb un servidor abans de mostrar-te la targeta següent. **Les aplicacions d’Anki instal·lades funcionen sense connexió el 2026:** Anki a Windows, macOS i Linux; AnkiMobile a l’iPhone i l’iPad; i AnkiDroid a Android. Cadascuna fa servir una col·lecció desada al dispositiu, de manera que pots repassar, crear notes i fer modificacions habituals sense internet.

Hi ha un detall que et pot agafar desprevingut: AnkiWeb és diferent. És el servei d’estudi i sincronització que funciona al navegador, no una aplicació d’Anki per treballar sense connexió. A més, una aplicació instal·lada només pot fer servir els jocs de targetes i els fitxers multimèdia que ja han arribat a aquell dispositiu concret.

**Dades comprovades:** 16 d’agost de 2026.

![Un investigador de camp afegeix un registre a un arxiu local de fotos, àudio i text mentre l’enllaç de ràdio a la muntanya està interromput](/blog/does-anki-work-offline.png)

## La resposta breu, segons l’aplicació

El [web oficial d’Anki](https://apps.ankiweb.net/) presenta l’aplicació d’escriptori, AnkiMobile per a iOS, AnkiDroid per a Android i AnkiWeb com a parts del mateix ecosistema. Les possibilitats sense connexió no són les mateixes en totes.

| Aplicació o servei | Funciona sense connexió? | Què pots fer sense internet | Què requereix connexió |
| --- | --- | --- | --- |
| **Anki d’escriptori** a Windows, macOS o Linux | **Sí.** La col·lecció i la carpeta de fitxers multimèdia són locals. | Repassar targetes, afegir notes, editar el contingut de les notes i fer servir fitxers multimèdia ja desats a l’ordinador. | Descarregar jocs de targetes compartits, sincronitzar amb AnkiWeb i obtenir qualsevol contingut que una targeta o un complement demani a un servei en línia. |
| **AnkiMobile** a l’iPhone o l’iPad | **Sí.** L’aplicació manté una col·lecció local. | Repassar targetes locals, afegir notes, editar el contingut de les notes i reproduir sons o mostrar imatges que ja són al dispositiu. | Completar la sincronització inicial de la col·lecció i els fitxers multimèdia, fer servir AnkiWeb i accedir a recursos remots. |
| **AnkiDroid** a Android | **Sí.** AnkiDroid desa la col·lecció al dispositiu Android. | Repassar targetes locals, afegir notes, editar el contingut de les notes i fer servir els fitxers multimèdia presents al dispositiu. | Sincronitzar o descarregar contingut que falta, obtenir jocs de targetes compartits i fer servir funcions de les targetes que depenen de la xarxa. |
| **AnkiWeb** al navegador | **No té mode sense connexió.** És un servei d’estudi i sincronització en línia. | No prevegis fer-lo servir quan perdis la connexió. | Disposar d’una connexió a internet o passar a una aplicació instal·lada que hagis preparat abans. |

Per tant, pots fer servir Anki sense connexió si es tracta d’una aplicació instal·lada que ja té la col·lecció que necessites. AnkiWeb al navegador continua necessitant connexió.

## Els repassos i les modificacions sense connexió es desen primer al dispositiu

Quan respons targetes sense connexió, Anki registra els repassos a la col·lecció local. El planificador continua treballant a partir d’aquest estat local. Les notes noves i les modificacions habituals també són locals. No apareix res a cap altre dispositiu fins que et tornes a connectar i sincronitzes.

La sincronització amb AnkiWeb és opcional si només estudies en un dispositiu. Serveix per traslladar els canvis de la col·lecció entre dispositius. El [manual de sincronització d’Anki](https://docs.ankiweb.net/syncing.html) explica que, en circumstàncies normals, els repassos i les modificacions de notes fets en diversos llocs es poden combinar. Si has repassat la mateixa targeta en dos llocs, totes dues respostes es conserven a l’historial de repassos i preval l’estat de la resposta més recent.

Aquesta rutina redueix els conflictes de sincronització evitables:

1. Sincronitza el dispositiu mentre encara tinguis una connexió fiable.
2. Repassa, afegeix notes o fes correccions de text senzilles a les targetes sense connexió.
3. Torna’t a connectar i sincronitza aquell dispositiu abans de continuar en un altre.
4. Deixa que l’altre dispositiu acabi la seva sincronització abans de fer-hi més canvis.

Els canvis en l’estructura de la col·lecció demanen més cura. Afegir un camp, eliminar una plantilla de targeta, canviar tipus de nota i altres operacions semblants poden requerir una sincronització unidireccional en lloc de combinar els canvis. En una sincronització unidireccional, has de triar si conserves la col·lecció local o la d’AnkiWeb; els canvis de l’altra banda es poden substituir.

Pots continuar amb els repassos normals i les modificacions de notes durant un viatge, però ajorna els canvis complexos en tipus de nota i plantilles si diversos dispositius sense connexió estan acumulant canvis diferents. Si Anki et demana que triïs entre pujar o baixar dades, atura’t i identifica quina col·lecció conté la feina que necessites abans de decidir la direcció.

## Els fitxers multimèdia només són locals quan arriben al dispositiu

Anki desa els sons i les imatges separadament de les dades de la col·lecció. A l’ordinador, la [documentació sobre fitxers multimèdia](https://docs.ankiweb.net/media.html) explica que els fitxers adjuntats o enganxats en una nota es copien a la carpeta local `collection.media`. Un cop el fitxer és en aquesta carpeta, la targeta no necessita internet per carregar-lo.

El punt feble és la preparació. La sincronització de la col·lecció i la dels fitxers multimèdia són processos separats, de manera que els sons i les imatges es poden continuar transferint després que apareguin les targetes. La [guia de sincronització d’AnkiMobile](https://docs.ankimobile.net/syncing.html) adverteix que poden faltar fitxers multimèdia fins que la primera sincronització s’hagi completat del tot. Que aparegui tota la llista de jocs de targetes no demostra que una col·lecció amb moltes imatges o molt àudio estigui a punt.

Abans de quedar-te sense connexió:

- sincronitza el dispositiu on has afegit els fitxers multimèdia;
- espera que acabi la sincronització d’aquests fitxers;
- sincronitza el dispositiu que t’enduràs i espera també que hi acabi el procés;
- obre targetes amb cadascun dels tipus d’imatge i àudio que necessites;
- executa **Check Media** (comprovació de fitxers multimèdia), quan estigui disponible, per trobar notes que facin referència a fitxers que falten.

Aquesta última comprovació és important amb els jocs de targetes compartits. De vegades, l’autor no hi ha inclòs mai una imatge a què una targeta fa referència, de manera que sincronitzar repetidament no la pot descarregar.

Els fitxers multimèdia locals no fan que totes les targetes siguin autosuficients. Una plantilla de targeta pot apuntar a una imatge, un script, una font o un altre recurs allotjat al web. Els diccionaris en línia, les descàrregues de jocs de targetes compartits i els complements que criden API remotes continuen necessitant connexió. La síntesi de veu depèn de la veu i de la plataforma: una veu del sistema instal·lada pot funcionar sense connexió, mentre que una veu proporcionada per un servei en línia no. Prova la funció concreta en lloc de donar per fet que tota la síntesi de veu o tots els complements es comporten igual.

## Com se sincronitza la feina feta sense connexió quan et tornes a connectar

La sincronització d’Anki després de treballar sense connexió consta, en realitat, de dues etapes: feina local ara i sincronització per la xarxa més endavant.

Quan recuperis la connexió, sincronitza el dispositiu que conté la feina feta sense connexió. Espera que acabin tant la sincronització de la col·lecció com la dels fitxers multimèdia. Després, sincronitza el dispositiu següent abans de repassar-hi o modificar-hi res. Amb aquest ordre és més fàcil identificar l’estat més recent si Anki et demana que resolguis un conflicte.

Comprova el resultat, encara que l’animació de sincronització ja hagi acabat:

- busca una nota que hagis afegit sense connexió;
- confirma que un camp modificat tingui el text nou;
- consulta l’historial de repassos o l’estat del pròxim repàs d’una targeta que hagis respost;
- obre almenys una imatge o un fitxer d’àudio acabats d’afegir al segon dispositiu.

Si has modificat la mateixa nota en dos dispositius, llegeix la nota final en lloc de suposar que la combinació ha conservat el text que volies. Si apareix un botó vermell de sincronització o una opció de pujada o baixada completa, no continuïs per costum. Una baixada completa substitueix els canvis locals de la col·lecció; una pujada completa substitueix la col·lecció d’AnkiWeb abans que els altres dispositius la baixin.

## Si no tens accés habitual a internet, trasllada la col·lecció en un fitxer

Anki permet traslladar una col·lecció entre dispositius sense accés habitual a AnkiWeb, però es tracta de passar-la d’un dispositiu a l’altre, no de combinar els canvis de diversos dispositius.

La [guia de transferència de col·leccions d’AnkiMobile](https://docs.ankimobile.net/collection-transfer.html) fa servir un fitxer `collection.colpkg` que conté tots els jocs de targetes i la informació de planificació dels repassos. Exportes la col·lecció actual, trasllades el fitxer amb AirDrop o mitjançant l’ús compartit de fitxers i l’importes a l’altre dispositiu. El [manual d’AnkiDroid](https://docs.ankidroid.org/manual.html) documenta un procediment semblant per USB per transferir la col·lecció entre Android i l’ordinador.

Importar un fitxer de col·lecció completa substitueix la col·lecció que ja hi ha al dispositiu de destinació. No permet combinar dues col·leccions modificades independentment sense connexió. Fes servir un sol dispositiu com a referència de la col·lecció vigent: exporta-la des d’aquest dispositiu, importa-la al següent, fes-hi els canvis i torna a transferir la col·lecció més recent abans de reprendre la feina al primer dispositiu.

Això és útil per al treball de camp, els vaixells, els llocs remots o les xarxes restringides on pots transferir fitxers de tant en tant, però no sincronitzar habitualment amb el núvol. Per a un vol normal o un trajecte quotidià, és més senzill completar una sincronització amb AnkiWeb abans de sortir.

## La sincronització no és una còpia de seguretat d’Anki

La sincronització manté la mateixa col·lecció als diferents dispositius. Per això, una eliminació accidental o un canvi no desitjat es pot propagar a tots els dispositius sincronitzats.

Les aplicacions d’Anki instal·lades mantenen còpies de seguretat locals, però els fitxers multimèdia requereixen una atenció separada. Per exemple, la [guia de preferències d’AnkiMobile](https://docs.ankimobile.net/preferences.html) explica que les seves còpies de seguretat automàtiques inclouen targetes i estadístiques, però no sons ni imatges. Una exportació completa de la col·lecció que inclogui els fitxers multimèdia té una funció diferent de la sincronització i de l’historial de còpies de seguretat automàtiques.

Si reconstruir el joc de targetes et costaria molta feina, desa periòdicament una exportació completa amb els fitxers multimèdia fora del dispositiu que fas servir cada dia. La [guia de còpies de seguretat de targetes d’estudi](/blog/how-to-back-up-flashcards/) explica amb més detall com combinar aquesta còpia de restauració amb text en un format portable i els fitxers originals.

## Una prova de deu minuts en mode avió

Fes-la amb l’ordinador portàtil, el telèfon o la tauleta que t’enduràs. Que la prova funcioni a l’ordinador no diu res sobre l’estat de la carpeta de fitxers multimèdia del telèfon.

1. Amb connexió a internet, obre l’aplicació d’Anki instal·lada i sincronitza. Si és un dispositiu nou, completa primer la baixada inicial de la col·lecció.
2. Espera que acabi la sincronització dels fitxers multimèdia. No t’aturis només perquè ja apareguin els noms dels jocs de targetes.
3. Obre tots els jocs de targetes que necessites. Prova algunes targetes amb imatges, àudio, fonts personalitzades i qualsevol comportament especial de les plantilles que facis servir.
4. Activa el mode avió o desactiva totes les connexions de xarxa d’una altra manera.
5. Tanca Anki del tot, torna’l a obrir i inicia el joc de targetes que necessites. Això permet detectar un procediment que només funcionava perquè la pantalla ja estava oberta.
6. Repassa unes quantes targetes. Afegeix una nota de prova clarament identificada i fes una modificació de text que no afecti el contingut important.
7. Tanca i torna a obrir l’aplicació mentre continues sense connexió. Confirma que es conservin els repassos, la nota nova, la modificació i els fitxers multimèdia locals.
8. Prova qualsevol diccionari, veu de síntesi o complement que tinguis previst fer servir. Anota quines parts necessiten la xarxa.
9. Torna’t a connectar i sincronitza aquest dispositiu. Espera que acabin les etapes de sincronització de la col·lecció i dels fitxers multimèdia.
10. Sincronitza un segon dispositiu i comprova-hi la nota de prova, la modificació, l’estat dels repassos i els fitxers multimèdia abans d’eliminar el contingut de prova.

No aprofitis aquesta prova per redissenyar els tipus de nota en dos dispositius. L’objectiu és comprovar que el procediment que faràs servir durant el viatge funciona: la col·lecció que necessites és local, s’obren els fitxers multimèdia importants, la feina feta sense connexió es conserva després de reiniciar l’aplicació i la sincronització posterior la trasllada a l’altre dispositiu.

## Anki et pot servir durant un viatge si prepares el dispositiu

Les aplicacions d’Anki instal·lades són una bona opció per viatjar quan vols una col·lecció local completa en lloc d’un petit conjunt de targetes a la memòria cau. Els límits són concrets: el dispositiu necessita la col·lecció i els fitxers multimèdia per endavant, AnkiWeb només funciona en línia i les funcions de les targetes que depenen de la xarxa continuen necessitant connexió.

Si estàs triant entre diverses eines per viatjar, la [comparativa d’aplicacions de targetes d’estudi sense connexió](/blog/best-offline-flashcards-app/) aplica les mateixes proves de targetes, modificacions, progrés, fitxers multimèdia i sincronització posterior a cinc productes. Si et planteges canviar les eines d’estudi per motius que van més enllà de la connectivitat, consulta [Anki i Nibomo: comparativa](/blog/anki-vs-flashcards-open-source-app/).

La resposta pràctica a «Anki funciona sense connexió?» és que sí, a l’ordinador, l’iPhone, l’iPad i Android, un cop aquell dispositiu concret té la col·lecció i els fitxers multimèdia que necessites. Sincronitza abans de sortir, fes la prova en mode avió i, quan recuperis la connexió, sincronitza primer el dispositiu amb la feina que has fet sense connexió.
