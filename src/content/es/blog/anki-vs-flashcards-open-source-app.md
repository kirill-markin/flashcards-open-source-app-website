---
status: retired
retiredAt: "2026-11-12"
retirementReason: "Zero Google Web Search clicks and zero engaged visitor-days after 90 days with no concrete use found"
retirementEvidence: "docs/content-retirement/2026-11-12.json#/records/src~1content~1es~1blog~1anki-vs-flashcards-open-source-app.md"
title: "Anki vs Nibomo (2026): ¿qué aplicación te conviene?"
description: "Compara Anki y Nibomo en FSRS, uso sin conexión, apps móviles, IA, migración, autoalojamiento y control de tus datos antes de cambiarte."
date: "2026-04-25"
updated: "2026-11-09"
image: "/blog/anki-vs-flashcards-open-source-app-v2.png"
keywords:
  - "Anki vs Nibomo"
  - "alternativa a Anki"
  - "alternativa de código abierto a Anki"
  - "app de tarjetas con FSRS"
  - "app de tarjetas autoalojada"
---

Si ya tienes tus tarjetas y tu historial de repasos en Anki, cambiar de aplicación es, ante todo, una decisión sobre la migración de tus datos; el diseño viene después. Anki permite exportar un mazo o la colección completa con el historial de programación y los archivos multimedia. El chat con IA de Nibomo puede leer un `.apkg` adjunto y convertirlo en tarjetas, pero todas empiezan como nuevas, así que no puede retomar la cola de repasos tal como está hoy.

Ese límite determina la mayoría de las comparaciones entre **Anki y Nibomo**. Quédate con Anki si lo que más te importa es conservar la colección tal cual, o si dependes de sus plantillas, complementos, mazos compartidos o de un hábito de repaso ya consolidado. Prueba Nibomo si puedes empezar con un mazo nuevo o compuesto sobre todo por texto y valoras más el acceso al código fuente de toda la pila, la sincronización offline-first, la IA integrada o los flujos de trabajo con agentes.

> **Aviso de transparencia:** Soy Kirill Markin y desarrollo [Nibomo](https://nibomo.com/). Tengo un interés evidente en el producto, así que esta comparación considera Anki la opción predeterminada para los flujos de trabajo que Nibomo todavía no puede reproducir.

**Datos verificados:** 23 de agosto de 2026; los datos sobre los widgets de la pantalla de inicio se verificaron el 7 de noviembre de 2026, y los de la importación de `.apkg` de Anki, el 8 de noviembre de 2026.

![Un viajero cruza un estrecho puente de prueba con una caja de archivo mientras, a su espalda, sigue funcionando una vía ferroviaria muy transitada](/blog/anki-vs-flashcards-open-source-app-v2.png)

## Veredicto rápido

| Tu requisito | Anki | Nibomo | Mejor opción hoy |
| --- | --- | --- | --- |
| Necesitas conservar una colección compleja y su historial de repasos | Un `.colpkg` conserva la colección completa y su programación; un `.apkg` puede incluir el historial de repasos, los ajustes preestablecidos del mazo y los archivos multimedia | El chat con IA convierte un `.apkg` adjunto en tarjetas, pero el historial de repasos, la programación y las plantillas se quedan atrás; traslada el contenido, no la colección | **Anki** |
| Quieres FSRS | Admite FSRS, optimiza sus parámetros a partir del historial de repasos y permite configurar la retención deseada y ajustes preestablecidos por mazo | Usa pesos fijos de FSRS-6 en la web, iOS, Android y el backend; los ajustes del espacio de trabajo no optimizan esos pesos a partir de tus repasos | **Cualquiera de las dos**; Anki es mejor para la optimización personal y para conservar la continuidad de la programación |
| Estudias sin internet | Los clientes instalados para escritorio, iOS y Android guardan colecciones locales; AnkiWeb sigue funcionando solo con conexión | La web, iOS y Android guardan primero en local los cambios en tarjetas y repasos; el inicio de sesión, la carga inicial, la sincronización, la IA y los archivos multimedia que aún no estén en caché requieren conexión | **Cualquiera de las dos**, después de probar tus dispositivos y archivos multimedia concretos |
| Quieres un widget en la pantalla de inicio | [AnkiDroid](https://github.com/ankidroid/Anki-Android) tiene widgets de mazos y de recuento de tarjetas; AnkiMobile para iPhone y iPad no tiene ninguno, y los usuarios [siguen pidiéndolo](https://forums.ankiweb.net/t/ankimobile-widget/32633) | Los widgets gratuitos de «Repasar» para iPhone, iPad, Mac y Android muestran cuántas tarjetas tienes pendientes y la pregunta de tu siguiente tarjeta; al tocarlos se abre «Repasar» | **Nibomo** en dispositivos Apple; **cualquiera de las dos** en Android |
| Dependes de plantillas, complementos o mazos compartidos | Ofrece flujos de trabajo oficiales muy completos y un gran ecosistema comunitario | Se centra en tarjetas de anverso y reverso; no cuenta con un ecosistema equivalente de complementos o mazos compartidos | **Anki** |
| Quieres IA integrada y acceso para agentes | Es posible mediante complementos e integraciones de terceros | Incluye un chat con IA que utiliza el contexto y los archivos del espacio de trabajo, además de MCP y una API pública para agentes | **Nibomo** |
| Quieres controlar el servidor | El servidor oficial autoalojado sustituye la sincronización de la colección y los archivos multimedia | El despliegue documentado en AWS abarca la web, la autenticación, el backend, la sincronización, el worker de IA y la infraestructura | Depende de si necesitas **solo la sincronización** o **toda la pila** |
| Quieres acceder al código fuente de toda la pila de clientes y servicios | Anki para escritorio y el servidor de sincronización son públicos; AnkiDroid es un proyecto público independiente; el código completo de AnkiMobile y AnkiWeb no es público | La web, iOS, Android, la autenticación, el backend, la sincronización, las interfaces para agentes y la infraestructura tienen licencia MIT y están en un único repositorio | **Nibomo** |

Para quien ya utiliza Anki en serio, la opción más segura suele ser quedarse. Merece la pena probar Nibomo cuando alguno de los límites que plantea de otra manera resuelve un problema real, no solo porque tenga una interfaz más nueva.

## La madurez de Anki también forma parte del producto

La [versión actual de Anki para escritorio es la 26.08.1](https://apps.ankiweb.net/) y está disponible para Windows, macOS y Linux. Esa misma página oficial enlaza AnkiMobile, el cliente oficial de pago para iPhone y iPad, y AnkiDroid, el cliente gratuito para Android desarrollado por colaboradores. AnkiWeb permite estudiar desde el navegador y sincronizar esos clientes locales.

Más importante que el número de versión es todo lo que se ha construido alrededor del formato de la colección. Anki ofrece:

- tipos de nota capaces de generar varias tarjetas a partir de una sola nota;
- [plantillas de tarjetas](https://docs.ankiweb.net/templates/intro.html) con HTML/CSS editable;
- un [sistema oficial de complementos](https://docs.ankiweb.net/addons.html), con el riesgo de mantenimiento habitual: una actualización de Anki puede romper un complemento;
- [mazos compartidos](https://docs.ankiweb.net/getting-started.html#shared-decks) públicos;
- flujos de trabajo consolidados para importar, exportar, crear copias de seguridad, consultar estadísticas y resolver problemas.

Sus [exportaciones empaquetadas](https://docs.ankiweb.net/exporting.html) también conservan mucha más estructura que una simple lista de tarjetas. Un `.colpkg` puede incluir la colección completa, con todos los mazos y los datos de programación, además de los archivos multimedia si marcas esa opción al exportar. Un `.apkg` puede incluir las tarjetas, las notas y los tipos de nota de un mazo, junto con información opcional sobre la programación, los ajustes preestablecidos del mazo y los archivos multimedia. Esto resulta útil para crear copias de seguridad, transferir datos entre dispositivos y migrar a programas compatibles con los paquetes de Anki.

Nibomo no alcanza ese nivel de profundidad. Ya ofrece [clientes para web, iOS y Android](https://github.com/kirill-markin/flashcards-open-source-app#available-on), pero no dispone de un cliente nativo para Windows, macOS o Linux, un catálogo comparable de complementos, un ecosistema de mazos compartidos, un motor de plantillas ni un importador de paquetes de Anki con un solo clic. Si alguno de esos elementos sostiene tu forma de estudiar, cambiar de aplicación supondría perder una función que ya te sirve.

## Ambos usan FSRS, pero no puedes trasladar el estado del programador de repasos

FSRS no es, por sí solo, un motivo para abandonar Anki. Los [ajustes de FSRS de Anki](https://docs.ankiweb.net/deck-options.html#fsrs) permiten optimizar los parámetros a partir de tu historial de repasos, definir la retención deseada y aplicar distintos ajustes preestablecidos a distintos mazos. Es una implementación madura y configurable de FSRS.

Nibomo también usa FSRS, en lugar de un programador de intervalos fijos o basado en el factor de facilidad. La implementación actual mantiene las conocidas valoraciones Again, Hard, Good y Easy y reproduce el comportamiento de FSRS-6 en el backend y en los clientes para iOS y Android; el flujo de repaso web reutiliza el módulo de programación del backend. Los ajustes del espacio de trabajo incluyen la retención deseada, los pasos de aprendizaje y reaprendizaje, el intervalo máximo y la variación aleatoria, pero los pesos de FSRS son fijos: no se optimizan a partir de tu historial de repasos. Además, esos ajustes solo se aplican en adelante. Si los cambias, afectarán a los repasos futuros sin recalcular el estado actual de las tarjetas. La [documentación sobre la programación](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) explica las reglas exactas de estado y paridad entre plataformas.

Se trata de dos implementaciones competentes de FSRS, no de una programación compartida. Nibomo no puede incorporar los eventos de repaso, la estabilidad, la dificultad, las fechas de vencimiento ni los parámetros optimizados de Anki. El contenido de las tarjetas importadas empieza con un historial de programación nuevo. Si tu cola actual de Anki acumula años de señales útiles, esa pérdida pesa más que el hecho de que ambas aplicaciones utilicen «FSRS».

## El uso sin conexión funciona de dos maneras distintas

Los clientes instalados de Anki guardan una colección en el dispositivo. Puedes repasar y hacer cambios normales sin conexión y utilizar la [sincronización con AnkiWeb](https://docs.ankiweb.net/syncing.html) cuando vuelvas a conectarte. Los repasos y los cambios en las notas suelen combinarse entre dispositivos; los cambios en los tipos de nota y las plantillas pueden exigir una sincronización unidireccional. AnkiWeb es un servicio online para el navegador, no una aplicación web que funcione sin conexión. La [guía detallada sobre Anki sin conexión](/blog/does-anki-work-offline/) explica cómo preparar los archivos multimedia y resolver conflictos.

Nibomo sigue un enfoque offline-first en todos sus clientes. Su [arquitectura](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md#offline-first-sync) utiliza IndexedDB en la web y SQLite en iOS; la [aplicación para Android utiliza Room sobre SQLite](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md#platform-baseline). Cuando editas o repasas una tarjeta, el cambio se guarda primero en local, entra en una cola de salida y se envía cuando vuelve la conexión. Los eventos de repaso solo se añaden, mientras que el estado actual de las tarjetas, los mazos y los ajustes del espacio de trabajo se resuelve mediante metadatos en los que prevalece la última escritura. Los metadatos de los archivos multimedia se sincronizan por separado de los propios archivos, cuyos bytes pasan por las colas de carga y descarga de cada cliente.

Que una aplicación sea offline-first no significa que todas sus funciones estén disponibles sin conexión. Las llamadas a la IA, el inicio de sesión, la carga inicial y la sincronización necesitan servicios de red. Cada cliente debe tener disponibles los datos relevantes del espacio de trabajo antes de desconectarse, y los archivos multimedia solo funcionan sin conexión después de que ese cliente haya guardado sus bytes en caché. Elijas la aplicación que elijas, prueba el teléfono o el portátil que vayas a utilizar en modo avión antes de depender de él durante un viaje.

## La creación de tarjetas es donde los flujos de trabajo se separan de verdad

Anki te da un control directo sobre el formato de las tarjetas. Los campos, los tipos de nota, las plantillas, las importaciones y los complementos permiten crear flujos de trabajo muy específicos. Esa flexibilidad es difícil de sustituir si utilizas variantes cloze, estilos personalizados, herramientas para idiomas, notas con muchos archivos multimedia o automatizaciones construidas alrededor de la colección de Anki.

Nibomo utiliza un modelo de tarjeta más limitado, pero integra más automatización en el propio producto. La [aplicación alojada](/docs/getting-started/) incluye un chat con IA que conoce el contexto del espacio de trabajo y admite archivos adjuntos. Puedes pedirle que redacte o reescriba tarjetas. Es útil para convertir texto, archivos CSV o un `.apkg` de Anki en tarjetas editables de anverso y reverso, pero no es una importación que conserve el formato.

La otra diferencia que ya está disponible es el acceso desde otras herramientas. Nibomo ofrece una [API para agentes](/docs/api/) y un conector MCP para herramientas como Claude Code y Codex. Los agentes pueden autenticarse, seleccionar un espacio de trabajo, consultar los datos publicados y crear o editar tarjetas. Si tu flujo de trabajo empieza en un terminal o en un agente de IA, se trata de una vía de acceso de primera clase, no de un complemento añadido sobre la aplicación de escritorio.

Esa comodidad también depende de la red. La IA alojada necesita los servicios alojados, y quien autoaloje el sistema debe configurar el proveedor de modelos y ejecutar el worker de chat para producción. La configuración rápida de Docker en local no incluye la ruta completa de IA.

## «Código abierto» y «autoalojado» necesitan límites claros

Anki es de código abierto, pero no todos sus componentes siguen el mismo modelo. El [repositorio de la aplicación de escritorio](https://github.com/ankitects/anki) utiliza principalmente la licencia [AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/main/LICENSE), con las excepciones que allí se indican. [AnkiDroid](https://github.com/ankidroid/Anki-Android) es un proyecto de código abierto independiente para Android. El responsable de Anki ha confirmado que no se publica el código fuente completo de la aplicación para iOS [AnkiMobile](https://forums.ankiweb.net/t/hide-unhide-decks-poll/44281/20) ni del servicio [AnkiWeb](https://forums.ankiweb.net/t/questions-about-https-ankiweb-net-decks-and-https-ankiuser-net-study/33292/2).

El [servidor oficial de sincronización autoalojado](https://docs.ankiweb.net/sync-server.html) de Anki almacena y sincroniza los datos de la colección y los archivos multimedia entre clientes compatibles. No despliega la interfaz web de AnkiWeb, el sitio de cuentas ni los directorios de mazos compartidos y complementos. Ese alcance limitado puede ser una ventaja: si solo necesitas sincronización privada entre clientes maduros, tendrás menos infraestructura que mantener. Aun así, el servidor requiere versiones compatibles, copias de seguridad, credenciales y una capa de cifrado delante de su listener HTTP predeterminado.

La [guía más breve sobre los límites del código abierto de Anki](/blog/is-anki-open-source/) explica cada cliente sin repetir aquí todo el mapa de licencias.

Nibomo abarca más. Su [repositorio con licencia MIT](https://github.com/kirill-markin/flashcards-open-source-app) contiene la aplicación web, los clientes para iOS y Android, la autenticación, el backend, la sincronización, MCP, las interfaces para agentes y la infraestructura de AWS. Puedes inspeccionar y modificar el sistema completo.

Autoalojar toda la pila también implica encargarse de toda la pila. La [ruta admitida para el autoalojamiento en producción](/docs/self-hosting/) utiliza AWS CDK con RDS, Cognito, API Gateway, Lambda, S3, CloudFront, configuración de Cloudflare, entrega de correo electrónico, monitorización y copias de seguridad. No es un despliegue independiente del proveedor que puedas completar con un solo comando. Tendrás que gestionar los costes de la nube, los secretos, las actualizaciones, las migraciones, las pruebas de restauración y cualquier aplicación nativa que compiles y distribuyas. Docker Compose está pensado para el desarrollo local, no para producción.

Por tanto, la decisión sobre el autoalojamiento no se reduce a «Nibomo puede, Anki no». Anki ofrece un componente de sincronización autoalojado más pequeño, apoyado en clientes locales maduros. Nibomo ofrece una pila de producto desplegable más amplia y, con ella, una superficie operativa mucho mayor.

## Controlar tus datos no garantiza una migración fiel

Nibomo puede exportar e importar su propio [paquete portátil de espacio de trabajo `flashcards.zip`](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/apps/backend/src/workspacePackages). El archivo `cards.json` contiene el texto del anverso y el reverso de las tarjetas seleccionadas, el tipo de tarjeta, las etiquetas y los metadatos del paquete o de la fuente de la tarjeta; el ZIP también incluye los archivos multimedia a los que hacen referencia esas tarjetas. **No** conserva los identificadores originales de las tarjetas, el historial de repasos, el estado de FSRS, los ajustes del espacio de trabajo, las estructuras de los mazos ni los datos de la cuenta. Quien autoaloje el sistema necesita copias de seguridad de la base de datos y de los archivos multimedia para poder recuperarse ante un desastre.

La exportación de la colección completa de Anki es más exhaustiva desde el punto de vista del usuario. Es un contrapeso importante al repositorio más amplio de Nibomo: poder leer el código fuente y desplegar la infraestructura no se traduce automáticamente en una exportación más fiel de tus datos personales.

Hoy, pasar de Anki a Nibomo consiste en trasladar el contenido a través del chat con IA:

1. Exporta el mazo desde Anki como `.apkg`. Las exportaciones en el formato actual funcionan; no necesitas **Support older Anki versions**.
2. Adjunta el archivo al chat con IA de Nibomo y pídele que convierta el mazo en tarjetas. Cada archivo puede ocupar hasta 30 MB.
3. La IA lee el paquete y guarda las tarjetas directamente; en la prueba no hubo ningún paso de borrador ni de confirmación.
4. Compara con Anki el número de tarjetas, los anversos, los reversos, las etiquetas, los mazos y las imágenes. Fíjate sobre todo en las imágenes.

En una prueba con un paquete en el formato más reciente creado con el código de exportación oficial de Anki (la biblioteca de Python anki), llegaron las tarjetas básicas y las etiquetas, y las tres imágenes acabaron en las tarjetas correctas. Cada nota básica con tarjeta inversa se convirtió en dos tarjetas de un solo sentido, y las tarjetas cloze siguieron siendo de rellenar huecos. Cada mazo de Anki se convirtió en un mazo de Nibomo: cada submazo pasó a ser un mazo plano propio, con la ruta completa de Anki como nombre, y el mazo superior también incluyó las tarjetas del submazo. No se transfieren el historial de repasos, las fechas de vencimiento, la memoria de FSRS, los tipos de nota, las plantillas HTML/CSS ni el comportamiento de los complementos. El audio no formó parte de la prueba. La [guía de importación de `.apkg`](/blog/import-anki-apkg/) muestra el proceso completo. La [guía de migración desde TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/), más antigua, sigue sirviendo para mazos solo de texto. Si también necesitas trasladar el historial de repasos, consulta en su lugar la [comparación más amplia de alternativas a Anki](/blog/best-anki-alternatives/).

## Haz una prueba de bajo riesgo con un mazo representativo

No migres todo tu perfil solo para descubrir si te resulta cómoda la nueva pantalla de repaso. Pon a prueba la parte más exigente de tu flujo de trabajo habitual mientras Anki siga siendo la fuente de referencia.

1. **Haz primero una copia de seguridad de Anki.** Exporta un `.colpkg` completo con la información de programación y los archivos multimedia y guárdalo fuera del perfil activo.
2. **Elige un mazo representativo.** Incluye los tipos de tarjeta, las etiquetas, el comportamiento de los cloze, las imágenes, el audio, las fórmulas y el historial de repasos que pondrían en evidencia una mala migración.
3. **Exporta el mazo como `.apkg`.** Ese archivo es a la vez tu copia nativa de Anki y lo que adjuntas en el chat con IA de Nibomo.
4. **Comprueba el resultado; no lo des por hecho.** Compara con Anki el número de tarjetas, los anversos, los reversos, las etiquetas, el formato y las imágenes.
5. **Da por hecho que la cola empieza de cero.** Comprueba que un historial nuevo de FSRS sea aceptable para ese material. No esperes que las respuestas en una aplicación actualicen la otra.
6. **Prueba las interfaces que vayas a utilizar.** Repasa y edita en la web, iOS o Android, desconecta un dispositivo, vuelve a conectarlo y confirma que los cambios y los archivos multimedia llegan donde deben.
7. **Mantén ambos sistemas hasta comprobar que se cumple tu requisito.** Que la importación salga bien no demuestra que el flujo diario de repaso, sincronización, exportación y recuperación encaje contigo.

La prueba puede terminar con dos herramientas: los mazos consolidados se quedan en Anki, mientras que una asignatura nueva empieza en Nibomo. Es una solución más limpia que forzar un cambio completo.

## ¿Quién debería usar Anki?

Elige Anki si:

- ya confías en su cola de repasos y no quieres reiniciar el historial de programación;
- dependes de tipos de nota personalizados, plantillas, complementos, mazos compartidos o del comportamiento exacto de los archivos multimedia;
- quieres herramientas maduras para escritorio, exportaciones completas de la colección y años de documentación de la comunidad;
- quieres optimizar los parámetros de FSRS a partir de tu propio historial de repasos;
- necesitas un servidor de sincronización autoalojado, pero no una aplicación web y una pila de backend también autoalojadas.

Si ya tienes un sistema que funciona bien para un examen u otro flujo de trabajo importante, quedarte con Anki no es resistencia al cambio. Es una forma de proteger una infraestructura de estudio que ya funciona.

## ¿Quién debería probar Nibomo?

Prueba Nibomo si:

- estás empezando un mazo nuevo o tienes material sencillo, compuesto principalmente por tarjetas de anverso y reverso;
- quieres un único repositorio con licencia MIT que abarque la web, iOS, Android, el backend, la autenticación, la sincronización y la infraestructura;
- prefieres guardar primero los cambios en local y sincronizarlos automáticamente después;
- quieres una IA integrada que convierta archivos fuente, incluido un `.apkg` de Anki, en tarjetas que puedas editar;
- quieres acceder mediante MCP o la API para agentes desde el terminal y otras herramientas de IA;
- aceptas el trabajo que exige el autoalojamiento en AWS y las limitaciones actuales de fidelidad en la migración y la exportación.

Puedes empezar con la [aplicación alojada](https://app.nibomo.com/), leer la [guía de inicio](/docs/getting-started/) o consultar el [código fuente](https://github.com/kirill-markin/flashcards-open-source-app). Ninguna de esas opciones exige trasladar una colección existente de Anki.

## La respuesta práctica

Para la mayoría de los usuarios veteranos que comparan **Anki y Nibomo**, Anki debería seguir siendo la aplicación principal. Su modelo de colección, la fidelidad de sus migraciones, sus opciones de personalización y su ecosistema son más sólidos; además, ya ofrece FSRS y clientes fiables que funcionan sin conexión.

Nibomo es una alternativa a Anki de código abierto creíble para un grupo más reducido: quienes estén dispuestos a empezar con una programación nueva a cambio de acceso al código fuente de toda la pila, clientes web y nativos ya disponibles, sincronización offline-first, IA integrada y flujos de trabajo con agentes. Prueba ese intercambio con un mazo representativo. Si desaparece de verdad la limitación que querías resolver, amplía el uso a partir de ahí.
