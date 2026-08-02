---
title: "Mejores apps de flashcards de código abierto en 2026"
description: "Compara apps de flashcards de código abierto por licencia, plataformas, uso sin conexión, planificación, sincronización, importación, exportación y autohospedaje real."
date: "2026-08-02"
image: "/blog/best-open-source-flashcard-apps-2026.png"
keywords:
  - "mejores apps de flashcards de código abierto"
  - "app de flashcards de código abierto"
  - "flashcards autohospedadas"
  - "app de flashcards sin conexión"
  - "app de repetición espaciada"
  - "repetición espaciada de código abierto"
---

Un enlace a GitHub cuenta muy poco sobre una app de flashcards. El cliente de escritorio puede ser de código abierto mientras que la app para iPhone es propietaria. Una imagen de Docker puede darte una app web, pero no sincronización para los clientes nativos. Incluso una app de flashcards sin conexión puede tener un núcleo completamente cerrado.

Por eso, esta comparación de las **mejores apps de flashcards de código abierto** examina lo que de verdad importa después de la instalación: licencia, plataformas, uso sin conexión, planificación, sincronización, importación y exportación, y qué puedes autohospedar exactamente. La selección incluye Anki, Flashcards, Mnemosyne y SiYuan. Al final aparece Mochi como referencia propietaria con un enfoque local-first.

> **Declaración de intereses:** Soy Kirill Markin y desarrollo [Flashcards](https://flashcards-open-source-app.com/), uno de los productos analizados aquí. Forma parte de la selección porque su repositorio incluye la app web, los clientes nativos, el backend, la sincronización y la infraestructura de producción, todo con licencia MIT. No la presento como ganadora por defecto. Anki es más madura; Mnemosyne ofrece un flujo de escritorio más específico y una migración desde Anki más sólida; SiYuan es un sistema de conocimiento más amplio; y Mochi resulta más fácil de considerar si el código abierto no es imprescindible.

**Datos comprobados:** 2 de agosto de 2026.

![Escritorio cálido que compara cinco sistemas de tarjetas de código abierto y sin conexión por planificación, sincronización, exportación y autohospedaje](/blog/best-open-source-flashcard-apps-2026.png)

## Qué significan aquí «código abierto», «sin conexión» y «autohospedado»

Incluí un producto en el grupo de código abierto cuando se publica el código fuente de la app principal que utiliza el usuario y se indican sus condiciones de licencia. Después sometí todas las opciones a las mismas preguntas prácticas, en vez de usar las estrellas de sus repositorios como puntuación de calidad.

- **Código abierto** describe los derechos legales asociados al código. No garantiza acceso sin conexión, una app móvil con mantenimiento activo ni un servidor que puedas instalar.
- **Uso sin conexión** significa que un cliente instalado puede crear o repasar tarjetas con datos locales, sin contactar con un servidor. El software propietario también puede cumplir este requisito.
- **Sincronización autohospedada** significa que tú operas el servicio que intercambia datos entre los clientes. Puede que no ofrezca ninguna interfaz web.
- **Autohospedaje de la app web completa** significa que tu despliegue incluye una aplicación que se puede usar desde el navegador. Los clientes nativos pueden seguir exigiendo compilaciones o distribución por separado, o incluso otro sistema de sincronización.

Estas diferencias son la idea central del artículo. «Publica el código», «funciona sin conexión» y «se ejecuta en Docker» no son promesas equivalentes.

## Comparación de apps de flashcards de código abierto

Las cuatro opciones que realmente son de código abierto aparecen primero. Mochi ocupa el último lugar porque su funcionamiento sin conexión y sus formatos portátiles la hacen relevante para la misma búsqueda, aunque su aplicación principal sea propietaria.

| Producto | Licencia / estado del código fuente | Plataformas | Sin conexión | Planificación | Sincronización | Importación / exportación | Alcance exacto del autohospedaje |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Anki](https://github.com/ankitects/anki) | [Núcleo de escritorio: AGPL-3.0-or-later, con algunas partes BSD-3-Clause](https://raw.githubusercontent.com/ankitects/anki/main/LICENSE); AnkiDroid es un proyecto independiente de código abierto; la app oficial AnkiMobile es propietaria | Windows, macOS, Linux; Android mediante AnkiDroid; iOS mediante AnkiMobile; estudio alojado en el navegador mediante AnkiWeb | Los clientes nativos de escritorio y móvil funcionan sin conexión | [FSRS y el antiguo SM-2](https://docs.ankiweb.net/deck-options) | AnkiWeb o el servidor oficial de sincronización autohospedado | [Importación de texto, mazos empaquetados de Anki y archivos `.db` de Mnemosyne](https://docs.ankiweb.net/importing/intro.html); [exportación de texto, `.apkg` y `.colpkg`](https://docs.ankiweb.net/exporting.html) | **Solo sincronización.** El servidor oficial no es AnkiWeb autohospedado ni añade una interfaz para estudiar en el navegador |
| [Flashcards](https://github.com/kirill-markin/flashcards-open-source-app) | MIT; la app web, iOS, Android, el backend, la sincronización y la infraestructura están en un único repositorio | [Web, iOS, Android](https://github.com/kirill-markin/flashcards-open-source-app#available-on) | Escrituras local-first en IndexedDB o SQLite; los cambios en cola se sincronizan al recuperar la conexión | [FSRS](/docs/architecture/#scheduling) | Sincronización alojada o stack de producción autohospedado | `flashcards.zip` solo mueve tarjetas, etiquetas y archivos multimedia relacionados; los borradores TXT/CSV asistidos por IA deben revisarse y pierden información; no hay importación directa de `.apkg` | **Stack completo, con salvedades.** La producción se centra en AWS y depende de varios servicios externos; Docker Compose solo sirve para desarrollo |
| [Mnemosyne](https://mnemosyne-proj.org/) | [La licencia varía según el componente](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE): el [núcleo usa AGPL v3 y añade una cláusula sobre el nombre y la atribución](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE), mientras que [openSM2sync usa LGPL v3](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) | [Windows, macOS, Linux, Android; repaso en el navegador mediante un servidor de escritorio en ejecución](https://mnemosyne-proj.org/download-mnemosyne.php) | Uso local en escritorio y repaso sin conexión en Android; Android no permite editar tarjetas | Planificación adaptativa a partir de valoraciones del recuerdo de 0 a 5 | Sincronización integrada con tu propio equipo de escritorio o servidor headless | [Importación completa de Anki con tipos de tarjeta personalizados y datos de aprendizaje](https://mnemosyne-proj.org/features), además de texto sin formato y formatos antiguos; las exportaciones para compartir y en texto no son copias de seguridad completas | **Sincronización y repaso limitado en el navegador.** Tú ejecutas una instancia de Mnemosyne; no es un producto web alojado |
| [SiYuan](https://github.com/siyuan-note/siyuan) | AGPL-3.0; el proyecto oficial también enlaza clientes de código abierto para Android, iOS y HarmonyOS | Windows, macOS, Linux, Android, iOS, HarmonyOS; uso desde el navegador mediante Docker | Uso local completo sin conexión | [FSRS](https://b3log.org/siyuan/en/) | Sincronización oficial con cifrado de extremo a extremo o compatibilidad de pago con almacenamiento de terceros en la nube | La app general admite la importación de Markdown y datos, y la exportación a Markdown, PDF, Word, HTML y formatos de datos; no hay un importador de `.apkg` documentado | **App web completa mediante Docker.** Docker solo funciona en el navegador y no sincroniza los clientes de escritorio o móvil |
| [Mochi](https://mochi.cards/) | Núcleo propietario; sus [repositorios públicos contienen integraciones](https://github.com/mochi-cards/open-source), no la app en sí | [Web, Windows, macOS, Linux, iOS, Android](https://mochi.cards/docs/getting-started/download-and-install/) | Uso completo sin conexión y sin cuenta; el navegador puede borrar los datos almacenados | Planificador adaptativo cuya fórmula no se publica, con las respuestas Remembered / Forgot y un objetivo de recuerdo predeterminado del 90 % | Sincronización alojada de pago | Importa `.mochi`, `.apkg` de Anki, Markdown y CSV; exporta `.mochi`, Markdown y CSV con distinta cobertura de metadatos | **Ninguno.** No hay una app principal ni un servicio de sincronización autohospedables con soporte oficial |

Esta tabla ayuda a decidir; no puntúa qué producto acumula más funciones. Un importador directo de `.apkg` puede pesar más que el autohospedaje si tienes diez años de historial de repasos. En un aula, una interfaz web puede importar más que la edición desde el móvil. Empieza por el requisito que te haría descartar una app.

## Anki: madura, flexible y compleja en sus límites

Anki sigue siendo la opción más segura para una colección existente y compleja. Sus plantillas de tarjetas, su ecosistema de complementos, sus controles de planificación y sus formatos de paquetes llevan años madurando. Si usas Anki por esas razones, cambiarte a una app más reciente quizá no resuelva nada.

Su relación con el código abierto tiene matices. La [licencia de escritorio](https://raw.githubusercontent.com/ankitects/anki/main/LICENSE) es AGPL-3.0-or-later, con algunas partes bajo BSD-3-Clause y componentes incluidos bajo otras licencias. [AnkiDroid](https://github.com/ankidroid/Anki-Android) es un proyecto independiente de código abierto para Android. La app oficial AnkiMobile para iOS es propietaria y AnkiWeb es un servicio web alojado. Los clientes nativos funcionan sin conexión; AnkiWeb ofrece acceso desde el navegador dentro del ecosistema alojado.

Anki admite tanto [FSRS como el antiguo planificador SM-2](https://docs.ankiweb.net/deck-options). También ofrece la migración más sólida de esta comparativa: importa archivos de texto, mazos empaquetados y bases de datos de Mnemosyne 2.0. Al exportar, puede crear archivos de texto o paquetes `.apkg` y `.colpkg`, con opciones configurables para los archivos multimedia y los datos de planificación.

Aquí, el autohospedaje tiene un alcance más limitado. El [servidor oficial de sincronización](https://docs.ankiweb.net/sync-server.html) sincroniza clientes de Anki compatibles y está pensado para operadores avanzados que no quieren usar AnkiWeb. No aloja la interfaz de AnkiWeb, así que no proporciona estudio desde el navegador ni un sitio web autohospedado para gestionar cuentas. Además, las versiones del cliente y del servidor deben seguir siendo compatibles a medida que cambia el protocolo.

Elige Anki por sus plantillas maduras, sus complementos, la fiabilidad de sus paquetes para migrar y su amplia variedad de clientes. Su inconveniente en esta comparación no es la falta de funciones, sino la división entre un núcleo de escritorio abierto, un proyecto independiente para Android, un cliente oficial propietario para iOS y un servicio web alojado.

## Flashcards: todo el stack abierto, con una carga operativa del tamaño de AWS

Flashcards apuesta por otra combinación. Su repositorio con licencia MIT contiene la app web, los clientes para iOS y Android, el backend, la sincronización sin conexión y la infraestructura. Un operador puede controlar una parte mayor del producto que con el servidor oficial de sincronización de Anki, pero también asume bastante más trabajo.

La app web guarda los datos locales en IndexedDB; iOS usa SQLite y Android, Room sobre SQLite. La [arquitectura offline-first](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md#offline-first-sync) escribe primero en local, coloca las operaciones en una bandeja de salida y las envía cuando el cliente recupera la conexión. Los repasos usan [FSRS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Tanto el despliegue alojado como el autohospedado ofrecen el mismo modelo de producto, con web, sincronización y API.

El «autohospedaje del stack completo» necesita una explicación larga. La [guía admitida para autohospedar en producción](/docs/self-hosting/) usa AWS CDK, no un paquete Docker de producción independiente del proveedor. Requiere infraestructura de AWS y Cognito, DNS de Cloudflare, entrega de correo con Resend y configuración de Sentry. Tú te ocupas de los secretos, las migraciones, las alarmas, las copias de seguridad, las pruebas de restauración y las actualizaciones. La configuración de Docker Compose del repositorio inicia PostgreSQL y las migraciones para desarrollo local; no es la ruta de producción. Las apps nativas están en el repositorio, pero debes compilar y distribuir por separado las versiones privadas para iOS y Android. Lee el [resumen de la arquitectura](/docs/architecture/) antes de describirlo como un despliegue de un solo comando.

La migración es la mayor limitación para el usuario. Un paquete `flashcards.zip` mueve tarjetas, etiquetas y archivos multimedia relacionados entre espacios de trabajo de Flashcards. No mueve el historial de repasos, el estado de FSRS, la configuración del espacio de trabajo, las estructuras completas de los mazos ni las cuentas. Es una transferencia de contenido, no una copia de seguridad completa ni una migración sin pérdidas entre la versión alojada y una instalación autohospedada.

Tampoco hay un importador directo de `.apkg` de Anki. El [flujo de migración admitido mediante TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) pide a la IA que prepare borradores de tarjetas a partir del texto exportado y exige que el usuario los revise. No conserva las plantillas, el estado de planificación ni la estructura de los mazos; incluso el contenido sencillo debe comprobarse. Este flujo sirve para reconstruir tarjetas compuestas sobre todo por texto, no para afirmar que existe una compatibilidad exacta con Anki.

Elige Flashcards si buscas expresamente un stack moderno y de código abierto para web y apps nativas, FSRS, clientes offline-first y un backend bajo el control del operador. Elige Anki si necesitas conservar la colección con fidelidad, o Mnemosyne si te basta una app local tradicional con sincronización gestionada por ti.

## Mnemosyne: estudio centrado en el escritorio y sincronización propia

Mnemosyne es la opción más contenida de esta lista. Es una app tradicional de repetición espaciada para escritorio, con buen funcionamiento local, un cliente de repaso para Android, migración desde Anki y un protocolo de sincronización que puedes alojar en un equipo de escritorio o una instancia headless.

Su licencia exige precisión. El [archivo de licencia raíz](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) indica que los distintos componentes usan licencias diferentes. La [licencia del núcleo de Mnemosyne](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) es AGPL v3 con una cláusula adicional: el nombre Mnemosyne debe aparecer claramente en las obras derivadas y la forma exacta debe acordarse con los responsables del mantenimiento. La [licencia de openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE), incluida dentro del proyecto, es LGPL v3. Un solo enlace no basta para describir ambos componentes con precisión.

La página actual de descargas ofrece la versión 2.11 para Windows, macOS y Linux, además de un cliente para Android que permite repasar sin conexión y sincronizar con el escritorio. En otras plataformas móviles, la opción documentada es repasar desde el navegador mediante un servidor web que se ejecuta en el equipo de escritorio. El [cliente para Android no permite editar tarjetas](https://mnemosyne-proj.org/help/android-client), así que es un complemento de repaso, no un editor móvil completo.

La planificación parte de una autoevaluación de 0 a 5 para adaptar los intervalos futuros. Mnemosyne también tiene una arquitectura de plugins que puede sustituir partes centrales, como el planificador o la base de datos. Su [sincronización integrada](https://mnemosyne-proj.org/help/syncing) combina tarjetas y datos de aprendizaje entre varios equipos, y permite que un proceso de escritorio o headless actúe como servidor. El servidor web de escritorio permite repasar desde el navegador, pero la página oficial de funciones advierte que carece de medidas de seguridad. No es un servicio web multiusuario listo para producción.

La importación es una de las mejores razones para pasarse a Mnemosyne: el proyecto documenta una importación completa desde Anki, incluidos los tipos de tarjeta personalizados y los datos de aprendizaje, además de texto sin formato y los formatos SuperMemo y CueCard. La exportación requiere más atención. El flujo de `.cards` está pensado para [compartir tarjetas seleccionadas](https://mnemosyne-proj.org/help/sharing-cards), no para conservar todo el estado de aprendizaje. Para una migración o una copia de seguridad completa, la [guía para usar Mnemosyne en varios equipos](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) indica que debes copiar el directorio de datos.

Elige Mnemosyne si quieres mantener los datos en tu escritorio y autohospedar la sincronización sin operar el stack de una aplicación en la nube. Comprueba la limitación de edición en Android y la falta de seguridad del servidor web antes de depender de él fuera de tu escritorio.

## SiYuan: una base de conocimiento autohospedada que también incluye flashcards

SiYuan es la opción atípica del grupo de código abierto. Es, ante todo, un sistema de gestión del conocimiento centrado en la privacidad, con referencias a bloques, documentos, bases de datos y flashcards con FSRS integrado. Tiene sentido cuando las tarjetas nacen de tus notas. Puede parecer demasiado software si solo quieres una cola de repaso.

El [repositorio oficial](https://github.com/siyuan-note/siyuan) usa AGPL-3.0 y enlaza los proyectos de código abierto de la interfaz, el núcleo y los clientes para Android, iOS y HarmonyOS. Las apps de escritorio y móvil almacenan los datos localmente y siguen funcionando sin conexión. Las apps nativas pueden usar la sincronización en la nube de SiYuan con cifrado de extremo a extremo; los miembros de pago pueden configurar servicios compatibles de almacenamiento de terceros en la nube. Esta vía de sincronización nativa es independiente del alojamiento con Docker.

Docker ejecuta una app SiYuan real y accesible desde el navegador, pero el repositorio enumera tres limitaciones importantes: las apps de escritorio y móvil no pueden conectarse a ella, la importación de Markdown no está disponible y tampoco lo está la exportación a PDF, HTML y Word. En otras palabras, el modo Docker solo funciona en el navegador y no es un servidor privado de sincronización para los clientes nativos.

La aplicación general ofrece más opciones de importación y exportación: importa Markdown y paquetes de datos de SiYuan, y exporta Markdown con recursos, PDF, Word, HTML y formatos de datos. No conviene atribuir estas capacidades generales al modo Docker sin mencionar sus limitaciones. No encontré ningún importador directo de `.apkg` de Anki en la documentación oficial.

Elige SiYuan si tu prioridad es una base de conocimiento local o autohospedada y quieres que las flashcards formen parte de ella. Para una migración centrada en Anki, Anki o Mnemosyne ofrecen un modelo de tarjetas más directo y una transferencia más clara de los datos de aprendizaje.

## Mochi: funcionar muy bien sin conexión no convierte el núcleo en código abierto

Mochi merece aparecer en esta comparativa aunque no cumpla el requisito de código abierto. Es una app tranquila de notas y flashcards orientada a Markdown para macOS, Windows, Linux, iOS, Android y la web. Las apps de escritorio y móvil pueden funcionar [completamente sin conexión y sin una cuenta](https://mochi.cards/docs/getting-started/download-and-install/). La versión web también usa almacenamiento sin conexión en el navegador, que puede borrarse de forma inesperada, según advierte la documentación.

Su planificador ofrece dos respuestas: Remembered y Forgot. La documentación describe intervalos adaptativos, comportamiento de reaprendizaje y un [objetivo de recuerdo predeterminado del 90 %](https://mochi.cards/docs/reviewing/due-today/), pero no publica la fórmula. La sincronización entre dispositivos es una función alojada de pago.

La portabilidad es uno de sus puntos fuertes. Mochi [importa archivos `.apkg` de Anki, incluido el historial de repasos](https://mochi.cards/docs/import-and-export/importing/), pero elimina CSS y JavaScript y convierte HTML a Markdown, así que las presentaciones personalizadas no se conservan intactas. También importa Markdown, CSV y su formato nativo `.mochi`.

El [archivo nativo `.mochi`](https://mochi.cards/docs/import-and-export/mochi-format-reference/) puede incluir mazos, tarjetas, archivos adjuntos, etiquetas, plantillas y repasos. Las [exportaciones a Markdown y CSV](https://mochi.cards/docs/import-and-export/exporting/) son más fáciles de inspeccionar con otras herramientas, pero pierden metadatos documentados, como el historial de repasos, el orden o las plantillas. Por tanto, la documentación actual no respalda la antigua afirmación de que las exportaciones de Mochi nunca incluyen el historial de repasos: el formato nativo sí lo incluye.

Los [repositorios de código abierto de Mochi](https://github.com/mochi-cards/open-source) contienen integraciones, plugins y herramientas relacionadas, no la app principal ni un servicio de sincronización que puedas desplegar. No hay una vía de autohospedaje con soporte oficial. Elígela si el uso sin conexión, Markdown y la migración mediante `.apkg` te importan más que el acceso al código fuente.

## Qué app de repetición espaciada encaja con tu requisito

No hay una ganadora por defecto. La decisión útil empieza por aquello a lo que no estás dispuesto a renunciar.

- **Elige Anki** si buscas las plantillas, los complementos, la migración de paquetes y el ecosistema de clientes más maduros. Su autohospedaje oficial cubre la sincronización, no AnkiWeb.
- **Elige Flashcards** si buscas un único repositorio con licencia MIT para la web, las apps nativas y el backend, además de un despliegue completo de producción con soporte. Tendrás que aceptar un stack centrado en AWS, dependencias de servicios externos, trabajo operativo y una migración con pérdidas desde Anki.
- **Elige Mnemosyne** si buscas una experiencia de estudio local y centrada en el escritorio, una importación sólida desde Anki y un servidor de sincronización gestionado por ti. Android no permite editar y el repaso en el navegador depende de que tu instancia esté en ejecución.
- **Elige SiYuan** si las notas y los documentos son tu sistema principal y quieres integrar en él flashcards con FSRS. Docker ofrece una app web, no sincronización para los clientes nativos.
- **Elige Mochi** si aceptas una app propietaria basada en Markdown, con funcionamiento completamente sin conexión e importación directa de `.apkg`. No ofrece el código fuente del núcleo ni autohospedaje.

Si Anki ya te funciona y ninguna de estas restricciones te supone un problema, conservarla es una decisión sensata. Cambiar de app de repetición espaciada da trabajo, sobre todo cuando hay plantillas, archivos multimedia y años de historial de planificación. Para conocer más productos que no cumplen el requisito de código abierto, consulta la [comparación más amplia de alternativas a Anki](/blog/best-anki-alternatives/).

## Lista de comprobación antes de migrarlo todo

Prueba primero con un mazo representativo, antes de tocar la colección completa. Incluye las tarjetas problemáticas: campos personalizados, huecos, imágenes, audio, mazos anidados, etiquetas y suficiente historial de repasos para que afloren las diferencias entre planificadores.

1. Exporta una copia de seguridad completa desde la app actual y no modifiques ese archivo.
2. Anota el número de tarjetas, los nombres de los campos, las etiquetas, la estructura de los mazos, la cantidad de archivos multimedia y una muestra de las fechas de vencimiento.
3. Comprueba si la app de destino lee el formato nativo o solo texto, CSV o Markdown. Importar las palabras no equivale a conservar la colección.
4. Tras la importación de prueba, revisa por separado el formato, los huecos, las plantillas, los archivos multimedia, las etiquetas y el historial de repasos.
5. Repasa sin conexión en todos los dispositivos que pienses usar. Comprueba qué cambios quedan en cola localmente y cuáles siguen necesitando un servidor.
6. Crea cambios contradictorios que puedas descartar y comprueba cómo resuelve la sincronización los conflictos antes de confiarle material real.
7. Si vas a autohospedar tus flashcards, prueba una actualización, una copia de seguridad y una restauración real. Un contenedor en ejecución no es un plan de recuperación.
8. Estudia con ambas apps durante varios días antes de eliminar, congelar o restablecer la configuración anterior.

Los formatos de exportación merecen una comprobación aparte. Los paquetes de Anki pueden conservar mucho más que el texto. La exportación para compartir de Mnemosyne omite los datos de aprendizaje. Los paquetes de Flashcards trasladan contenido, no todo el estado de aprendizaje. El archivo nativo de Mochi contiene más metadatos que sus exportaciones a Markdown y CSV. El despliegue con Docker de SiYuan elimina comandos de importación y exportación disponibles en la aplicación general.

## Por qué Scholarsome y OpenCards no aparecen en la selección

[Scholarsome](https://scholarsome.com/) es de código abierto y se puede autohospedar, pero su página oficial todavía incluye «Spaced repetition system implementation» entre las funciones previstas. Eso la excluye de una comparación centrada en el repaso programado recurrente, aunque sus otros modos de estudio puedan resultar útiles.

[OpenCards](https://github.com/holgerbrandl/opencards) es una app de flashcards para escritorio basada en archivos de PowerPoint y Markdown. La excluí porque la [última versión etiquetada del repositorio es la v2.5.1 de enero de 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) y el [último commit del repositorio es de junio de 2018](https://github.com/holgerbrandl/opencards/commits/master/). Son datos concretos del proyecto, no una afirmación de que el software carezca de valor. Sí hacen difícil recomendarlo para una configuración multidispositivo nueva en 2026.

## La selección honesta

Anki ofrece el ecosistema maduro de flashcards más completo, pero la idea de «Anki como producto de código abierto» se llena de matices al separar Android, iOS, el acceso web alojado y la sincronización autohospedada. Flashcards publica el stack de producto completo más amplio de esta lista, a cambio de la mayor carga operativa en producción y la migración sin pérdidas más débil. Mnemosyne mantiene bien acotados el estudio local y la sincronización gestionada por ti. SiYuan proporciona una auténtica app web alojada con Docker dentro de un sistema de notas mucho más amplio. Mochi demuestra que se puede conseguir un funcionamiento excelente sin conexión y una buena portabilidad sin abrir el código del núcleo.

La mejor app de flashcards de código abierto es la que te ofrece el nivel de control que realmente necesitas. Comprueba la licencia, prueba el caso de migración más difícil y decide si necesitas datos locales, sincronización autohospedada o un despliegue web completo. Cada opción resuelve un problema distinto.
