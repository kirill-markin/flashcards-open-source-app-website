---
title: "Las mejores apps de flashcards de código abierto de 2026: comparativa de 6 opciones FOSS"
description: "Compara seis apps de flashcards de código abierto con mantenimiento activo según el alcance de su código, los datos sin conexión, la sincronización, la importación desde Anki, la exportación, el autohospedaje y la recuperación."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "mejores apps de flashcards de código abierto"
  - "app de flashcards de código abierto"
  - "repetición espaciada de código abierto"
  - "flashcards autohospedadas"
  - "app de flashcards sin conexión"
  - "alternativa de código abierto a Anki"
  - "flashcards FOSS"
---

Anki sigue siendo la mejor app de flashcards de código abierto para la mayoría de la gente en 2026. La decisión se complica cuando «código abierto» no es tu único requisito innegociable.

Quizá necesites una app web alojada en tu propio servidor. O un mazo que puedas leer como Markdown sin formato. O un sistema privado de notas que genere flashcards. Cada necesidad apunta a un producto distinto, y un repositorio público en GitHub no basta para decidir.

Un cliente de escritorio abierto puede convivir con una app cerrada para iPhone. Un contenedor Docker puede alojar una interfaz web sin sincronizar los clientes nativos. Una importación puede recuperar el texto y, al mismo tiempo, perder las plantillas, los archivos multimedia y los años de historial de repasos que daban valor a la colección.

Seis proyectos pasaron el filtro. Comparé el código publicado y su licencia, la última versión estable, los datos locales, el planificador, la sincronización, la migración desde Anki, la exportación y qué permite autohospedar exactamente cada uno. Este último límite importa más de lo que suelen reconocer las listas de funciones.

> **Declaración de intereses:** Soy Kirill Markin y desarrollo [Flashcards](https://flashcards-open-source-app.com/), una de las seis apps de esta comparativa. Su repositorio MIT abarca la app web, los clientes nativos, el backend, la sincronización y la infraestructura. No la he colocado en primer lugar. Anki sigue siendo la elección más segura para la mayoría, Mnemosyne ofrece una ruta de migración desde Anki más consolidada y varias alternativas de esta lista son mucho más fáciles de operar.

**Datos comprobados:** 5 de septiembre de 2026. Las versiones estables se distinguen del trabajo que solo existe en la rama predeterminada.

![Un senderista compara seis mochilas abiertas y prueba un kit de respaldo antes de elegir una app de flashcards de código abierto](/blog/best-open-source-flashcard-apps-2026-v2.png)

## La respuesta corta

| Tu requisito principal | Mejor opción | Por qué | La limitación que debes probar primero |
| --- | --- | --- | --- |
| Un sistema general fiable o una colección compleja que ya existe | [Anki](https://apps.ankiweb.net/) | Tarjetas y plantillas maduras, FSRS, complementos, clientes para muchas plataformas y exportaciones completas en paquetes | La app oficial para iOS y AnkiWeb no forman parte del código abierto de escritorio; el autohospedaje ofrece sincronización, no AnkiWeb |
| Una alternativa centrada en el escritorio con una importación consolidada desde Anki | [Mnemosyne](https://mnemosyne-proj.org/) | Estudio local, importación de tipos de tarjeta y datos de aprendizaje de Anki, y un servidor de sincronización que puedes ejecutar tú mismo | La versión 2.11 sigue siendo la última estable; Android permite repasar, pero no editar |
| Notas y flashcards dentro de una misma base de conocimiento local | [SiYuan](https://b3log.org/siyuan/en/) | Apps nativas sin conexión, FSRS integrado y una verdadera app web alojada con Docker | El cliente de Docker no puede sincronizarse con las apps nativas y varios comandos de importación y exportación no están disponibles en Docker |
| Código para la web, los móviles, el backend y la infraestructura | [Flashcards](https://github.com/kirill-markin/flashcards-open-source-app) | Un único monorepo MIT con un despliegue de producción documentado | El stack de producción con soporte se centra en AWS y la migración desde Anki tiene pérdidas |
| Una app de escritorio más joven y local-first con importación directa de APKG | [Recall](https://github.com/Madlezz/Recall) | FSRS, compilaciones para escritorio, una PWA, bases de datos locales y un relay cifrado opcional | La importación solo conserva una instantánea de la planificación, procesa los dos primeros campos de la nota y omite el audio |
| Mazos en Markdown legible por personas y sin dependencia de la red | [Essentialist](https://github.com/essentialist-app/essentialist) | Archivos de mazo sin formato y una app para escritorio y Android diseñada para funcionar sin conexión | No hay sincronización y el progreso vive en una base de datos oculta independiente |

Esto no es una clasificación por número de funciones. Empieza por el fallo que no puedes permitirte. Si tienes diez años de repasos en Anki, la fidelidad de la migración importa más que una interfaz más limpia. Si gestionas un despliegue para un centro educativo, el acceso desde el navegador y una restauración probada pueden importar más que los complementos.

## Qué consideré una app de flashcards de código abierto

Apliqué cuatro filtros:

1. **La experiencia principal de estudio tiene código publicado y una licencia de código abierto explícita.** Un directorio de integraciones alrededor de un núcleo sin publicar no cuenta.
2. **La repetición espaciada funciona hoy.** Una función en la hoja de ruta o un modo genérico de cuestionario no bastan.
3. **Existe una versión publicada o un despliegue oficial claramente documentado.** Los commits recientes por sí solos no convierten un prototipo en una recomendación segura.
4. **Las fuentes oficiales explican con suficiente detalle los límites de los datos como para auditarlos.** Necesitaba respuestas concretas sobre almacenamiento sin conexión, sincronización, importación y exportación o alojamiento; no una promesa vaga de que los usuarios «son dueños de sus datos».

No fijé un mínimo de estrellas. Estas premian la antigüedad y la visibilidad tanto como el encaje del producto. Aun así, la madurez importa. Anki, Mnemosyne y SiYuan tienen versiones estables y modelos operativos consolidados. Recall y Essentialist solo encajan en casos más concretos porque su comportamiento publicado está lo bastante documentado como para recomendar cada una con un propósito específico.

Para hablar de «mantenimiento activo» también hacen falta dos comprobaciones. Una versión etiquetada indica qué pueden instalar los usuarios; la rama predeterminada muestra hacia dónde se dirige el proyecto. Essentialist es el ejemplo más claro: la versión estable documenta SM-2, mientras que la rama actual documenta FSRS. La tabla siguiente recoge SM-2.

## Comparativa de seis apps de flashcards FOSS

| App | Versión estable comprobada | Plataformas | Datos sin conexión | Planificador | Sincronización | Migración desde Anki y vía de salida | Alcance del autohospedaje |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 de agosto de 2026 | Windows, macOS, Linux; clientes independientes para Android e iOS; AnkiWeb | Los clientes instalados permiten estudiar con colecciones locales | FSRS o el antiguo SM-2 | AnkiWeb o el servidor oficial de sincronización autohospedado | Importa texto, APKG/COLPKG y bases de datos de Mnemosyne; exporta texto o paquetes en los que se puede incluir contenido multimedia y datos de planificación | **Solo el servidor de sincronización.** No ofrece AnkiWeb autohospedado ni una interfaz de estudio para navegador |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 de noviembre de 2023; el repositorio siguió activo en 2026 | Windows, macOS, Linux, Android; repaso limitado desde el navegador | El escritorio funciona en local; Android permite repasar sin conexión, pero no editar | Evaluación adaptativa del recuerdo de 0 a 5 | Sincronización integrada con un equipo de escritorio o una instancia sin interfaz gráfica | La documentación oficial describe una importación completa de Anki con tipos de tarjeta personalizados y datos de aprendizaje; su exportación para compartir no es una copia de seguridad completa | **Sincronización y repaso limitado desde el navegador.** El servidor web no ofrece funciones de seguridad |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 de agosto de 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; navegador mediante Docker | Los clientes nativos guardan el espacio de trabajo en local | FSRS | Sincronización oficial E2EE de pago o integración de pago con servicios S3/WebDAV de terceros | La aplicación completa importa Markdown y datos, y exporta varios formatos de documentos y datos; no hay un importador de APKG documentado | **Aplicación web completa.** Docker no puede sincronizar los clientes nativos y no incluye algunos comandos de importación y exportación |
| **Flashcards** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 de septiembre de 2026 | Web, iOS, Android | IndexedDB en la web; SQLite en iOS; Room sobre SQLite en Android; los cambios locales quedan en cola hasta la sincronización | FSRS | Backend alojado o desplegado por el operador | Su propio ZIP mueve tarjetas, etiquetas, metadatos de origen y archivos multimedia referenciados, pero no mazos, estado de aprendizaje, ajustes ni cuentas; no hay importador de APKG | **Stack web y backend completo.** El despliegue de producción se centra en AWS; las compilaciones nativas privadas van por separado |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 de julio de 2026 | Windows, macOS, Linux; PWA instalable | SQLite en escritorio; IndexedDB en el navegador; sin cuenta ni telemetría de forma predeterminada | FSRS | Sincronización de carpetas en escritorio o un relay cifrado opcional con Cloudflare Worker/R2 | La importación de APKG en escritorio lee los dos primeros campos, los mazos, las etiquetas, una instantánea aproximada de la planificación y las imágenes; exporta JSON y archivos de Recall | **Solo un relay de instantáneas cifradas.** No aloja la PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 de octubre de 2025; el código siguió activo en 2026 | APK para Android, DMG para macOS, Flatpak para Linux; Windows desde el código fuente | Sin acceso a la red; el contenido de los mazos está en Markdown | Versión estable: SM-2; rama predeterminada: FSRS | Ninguna | Markdown conserva el contenido de las tarjetas; una base de datos oculta asociada conserva el progreso | **Nada que alojar.** Haz una copia conjunta del archivo Markdown y de su base de datos asociada |

## 1. Anki es la apuesta más segura para la mayoría

Anki destaca en los aspectos menos llamativos. Puede representar tipos de nota complejos, generar tarjetas hermanas a partir de plantillas, guardar los archivos multimedia junto con la colección y conservar años de datos de planificación. La versión estable de escritorio usada en esta revisión es la [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). La compilación 26.09b2, más reciente, está marcada como beta y por eso no es la referencia de esta comparativa.

La cobertura del código abierto tiene matices. El [repositorio de escritorio usa AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), con las excepciones indicadas para los componentes incluidos. [AnkiDroid](https://github.com/ankidroid/Anki-Android) es un proyecto independiente de código abierto para Android. AnkiMobile y AnkiWeb son productos oficiales, pero su código no está incluido en esos repositorios. Encontrarás la explicación completa en [¿Anki es de código abierto?](/blog/is-anki-open-source/).

Los clientes instalados mantienen colecciones locales, así que el repaso habitual funciona sin conexión. AnkiWeb es el servicio en línea. Si este punto determina tu elección, [¿Anki funciona sin conexión?](/blog/does-anki-work-offline/) distingue lo que permanece en local de lo que queda pendiente de sincronización.

Anki admite [FSRS y su planificador anterior](https://docs.ankiweb.net/deck-options.html). Sus formatos de exportación son el mejor punto de partida para migrar dentro de este grupo. Un [COLPKG contiene la colección completa con la planificación](https://docs.ankiweb.net/exporting.html), mientras que las exportaciones APKG pueden incluir información de planificación y archivos multimedia si seleccionas esas opciones. Anki también importa texto, paquetes de Anki y bases de datos de Mnemosyne 2.0.

Que el paquete de origen sea tan completo no garantiza una importación perfecta en otra aplicación. El destino aún debe entender las plantillas, las reglas de generación de tarjetas, las referencias a archivos multimedia y los campos del planificador. Sencillamente, dispone de más información que con un archivo CSV.

El [servidor oficial autohospedado](https://docs.ankiweb.net/sync-server.html) es limitado a propósito. Sincroniza clientes de Anki compatibles, pero no proporciona AnkiWeb, repaso desde el navegador ni un portal de cuentas. De forma predeterminada, escucha por HTTP sin cifrar, y la guía recomienda mantenerlo en una red local o protegerlo con una VPN o un proxy inverso HTTPS. Las versiones del cliente y del servidor también deben seguir siendo compatibles.

Elige Anki si das prioridad a la fidelidad de la colección, las plantillas, los complementos o la amplia compatibilidad entre clientes. Busca otra opción solo cuando pese más una carencia concreta, como no disponer de una interfaz web autohospedada o de un stack móvil publicado por completo.

## 2. Mnemosyne se centra en el estudio local

Mnemosyne se siente como una herramienta de estudio para escritorio porque eso es exactamente lo que es. No arrastra consigo una base de conocimiento ni una plataforma en la nube. Ofrece una base de datos local, un flujo tradicional de repetición espaciada, una app complementaria para repasar en Android y un servidor de sincronización que puede ejecutarse en un equipo de escritorio o una máquina sin interfaz gráfica.

Su última versión estable sigue siendo la [2.11 de noviembre de 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). El repositorio recibió cambios en 2026, pero eso no convierte esos cambios en un instalador estable. Prueba la versión 2.11 en los sistemas operativos que pienses conservar durante los próximos años.

La licencia también obliga a mirar más allá de una sola etiqueta. El [mapa de licencias de la raíz](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) asigna LGPL v3 a openSM2sync y condiciones distintas al resto de Mnemosyne. La [licencia del programa principal](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) aplica AGPL v3 y añade una disposición que exige mantener el nombre Mnemosyne claramente visible en las obras derivadas; la forma exacta debe acordarse con los responsables del mantenimiento. Lee ese texto antes de redistribuir una compilación modificada.

El [cliente para Android permite repasar sin conexión, pero no editar tarjetas](https://mnemosyne-proj.org/help/android-client). Otros dispositivos pueden usar un servidor de repaso web iniciado desde la app de escritorio, aunque la página oficial de funciones advierte que no incluye medidas de seguridad. Resulta práctico dentro de una red local; no es una aplicación web pública lista para exponer a internet.

La migración es el mejor argumento de Mnemosyne para no quedarse en Anki. La página oficial de funciones documenta una [importación completa de Anki, incluidos los tipos de tarjeta personalizados y los datos de aprendizaje](https://mnemosyne-proj.org/features). Su [sincronización integrada](https://mnemosyne-proj.org/help/syncing) combina las tarjetas y los datos de aprendizaje, y puede conectarse a una máquina bajo tu control.

El comando normal de exportación es una trampa si buscas una copia de seguridad. Está pensado para compartir tarjetas seleccionadas y omite los datos de aprendizaje. Para mover o recuperar el sistema completo, la [guía para varios equipos](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) indica que debes copiar todo el directorio de datos.

Mnemosyne es la alternativa a Anki de código abierto más sólida entre las opciones centradas exclusivamente en el estudio. A cambio, publica versiones estables con poca frecuencia, limita la edición desde el móvil y ofrece una interfaz web que exige proteger bien el perímetro de red.

## 3. SiYuan encaja cuando el sistema gira en torno a las notas

SiYuan es una aplicación de gestión del conocimiento centrada en la privacidad, con flashcards integradas en el mismo modelo de bloques y documentos. Encaja bien cuando las notas generan el material de repaso. Si solo quieres una cola de tarjetas, probablemente sea más sistema del que necesitas.

El [repositorio AGPL-3.0](https://github.com/siyuan-note/siyuan) reúne la interfaz, el núcleo, las apps móviles, la capa de datos y el componente FSRS. La versión estable comprobada para este artículo es la [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Los clientes de escritorio y móvil almacenan el espacio de trabajo en local y siguen funcionando sin conexión.

El almacenamiento local es gratuito, pero la sincronización no. La [página oficial de precios](https://b3log.org/siyuan/en/pricing.html) incluye la sincronización oficial cifrada de extremo a extremo en la suscripción, mientras que las funciones Pro de pago añaden integraciones con almacenamiento S3 o WebDAV propio. El proyecto también desaconseja colocar un espacio de trabajo activo en una carpeta genérica de sincronización de archivos, ya que las ediciones simultáneas pueden corromper o sobrescribir datos.

Docker ejecuta una aplicación web real, pero no la convierte en un servidor de sincronización para las apps instaladas. La [documentación de Docker para v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) indica que los clientes de escritorio y móvil no pueden conectarse a ella. En Docker tampoco están disponibles la importación de Markdown ni la exportación a PDF, HTML y Word. Esos comandos sí existen en la aplicación nativa, por lo que trasladar la lista general de funciones a un plan de despliegue con Docker llevaría a conclusiones erróneas.

No encontré ningún importador oficial de APKG. SiYuan puede trasladar archivos Markdown y sus propios formatos de datos, pero migrar una colección de Anki exige una reconstrucción más cuidadosa.

Elige SiYuan cuando la base de conocimiento sea el producto principal y las flashcards deban vivir dentro de ella. Si buscas un sustituto directo de Anki, tanto Mnemosyne como Anki ofrecen límites de migración más claros.

## 4. Flashcards publica más capas del stack, pero hay que operarlas

Flashcards es el producto que más capas publica en esta comparativa. El monorepo MIT incluye la app web, los clientes para iOS y Android, el backend, el servicio de autenticación, la sincronización, la aplicación de administración, las migraciones de la base de datos y la infraestructura de AWS. La versión estable usada aquí es la [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). El trabajo posterior en la rama predeterminada no cuenta como comportamiento publicado.

La [arquitectura](/docs/architecture/) es offline-first, aunque «sin conexión» significa algo ligeramente distinto en cada cliente. La app web guarda su copia principal de los datos en IndexedDB. iOS usa SQLite y Android, Room sobre SQLite. Los cambios se escriben primero en local y quedan en una cola de salida hasta la sincronización. Este diseño tolera las interrupciones de conexión, pero no convierte el almacenamiento del navegador en permanente ni evita tener que probar un arranque en frío en cada dispositivo.

El paquete ZIP de Flashcards sirve para transferir contenido, no para crear una copia de seguridad de la cuenta. En v1.23.0, su [esquema de paquetes](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) contiene el anverso y el reverso, las etiquetas, el tipo de tarjeta, los metadatos de origen y los metadatos del paquete; los archivos multimedia referenciados se incluyen por separado. No contiene la estructura de los mazos, el historial de repasos, el estado de FSRS, los ajustes del espacio de trabajo ni las cuentas.

No hay ningún importador de APKG en v1.23.0. El [flujo documentado para migrar desde Anki mediante TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) usa el texto exportado para reconstruir las tarjetas y requiere una revisión humana. Las plantillas, el estado de planificación, la estructura de los mazos y los archivos multimedia incluidos no se conservan automáticamente por esta vía. Es una opción razonable para un mazo sencillo de texto, pero no para una colección muy personalizada.

La [guía de autohospedaje](/docs/self-hosting/) es igual de explícita. En producción se usa un stack de AWS CDK con RDS, Cognito, API Gateway y Lambda, S3 y CloudFront, secretos, alarmas y copias de seguridad. El DNS de Cloudflare, el correo de Resend y la configuración de Sentry quedan fuera de AWS. Docker Compose sirve para el desarrollo local; no es el paquete de producción con soporte. Quien necesite binarios privados para iOS o Android debe compilarlos y distribuirlos por separado.

Elige Flashcards cuando controlar todo el código de la web, las apps nativas y el backend compense ese trabajo operativo. Elige Anki o Mnemosyne si conservar una colección existente es el requisito más difícil de resolver.

## 5. Recall es moderna, pero conviene examinar bien el importador

Recall es la recomendación principal más joven. Entró en la lista porque [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) ofrece compilaciones versionadas para escritorio, una PWA instalable, almacenamiento local bien definido, FSRS, exportaciones de datos y un diseño documentado de sincronización autohospedada.

La app de escritorio con licencia MIT usa SQLite; la PWA utiliza IndexedDB. Ninguna necesita una cuenta y, según el proyecto, la telemetría está desactivada de forma predeterminada. Hay versiones de escritorio para Windows, macOS y Linux.

El importador de APKG resulta útil, pero la expresión «historial de repasos» del README promete más de lo que ofrece la implementación etiquetada. El [código del importador de v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) no lee el registro de repasos de Anki. Lee el estado actual de la tarjeta, el intervalo y los recuentos de repeticiones y fallos, además de la estabilidad y la dificultad de FSRS cuando Anki las ha guardado. En las tarjetas más antiguas que no incluyen esos campos de FSRS, Recall los estima a partir de valores de SM-2.

La conversión del contenido también tiene límites claros. El importador usa los dos primeros campos de la nota como anverso y reverso, en vez de reproducir los tipos de nota y las plantillas de Anki. Conserva los nombres de los mazos y las etiquetas. Extrae los formatos de imagen habituales y reescribe sus referencias, pero omite el audio y otros archivos multimedia. Como el importador es un comando de Tauri, la migración directa de APKG solo está disponible en el escritorio, no en la PWA.

Conserva bastante más que una reconstrucción desde texto sin formato, pero no reproduce la colección con total fidelidad. Prueba las tarjetas de huecos, las tarjetas hermanas, los campos adicionales, HTML/CSS, las imágenes, el audio, las fechas de vencimiento y las notas repetidas antes de confiarle una migración grande.

Recall tiene dos vías de sincronización. La app de escritorio puede escribir una instantánea en una carpeta gestionada por Dropbox, Drive u otra herramienta de sincronización de archivos. El relay opcional utiliza un Cloudflare Worker y un bucket R2. Según el [diseño de sincronización de la versión etiquetada](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md), los clientes cifran las instantáneas con AES-GCM antes de subirlas; el relay solo ve el texto cifrado, no los datos de las tarjetas ni la clave. Las actualizaciones usan concurrencia optimista y reintentan una vez cuando hay un conflicto, pero siguen fusionando instantáneas completas en lugar de campos. Los responsables del proyecto no financian ningún relay público: debes desplegarlo e introducir su URL.

Las exportaciones JSON y los archivos de Recall ofrecen una vía de salida. Restaura uno de ellos en un perfil limpio antes de considerarlo una copia de seguridad.

Elige Recall si buscas una experiencia moderna, local-first y disponible tanto en escritorio como en PWA, y puedes aceptar un proyecto joven con un importador que conserva una instantánea útil en vez de todo el sistema de Anki.

## 6. Essentialist hace legible el mazo, no todo su estado

Essentialist tiene el alcance más reducido de la lista. Cada mazo es un archivo Markdown que puedes abrir en un editor de texto, guardar en un sistema de control de versiones o copiar con herramientas de archivos corrientes. Por diseño, la aplicación no realiza ninguna solicitud de red.

La última versión estable es la [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Incluye compilaciones para Android, macOS y Linux; en Windows hay que compilarla desde el código fuente. El [README de la versión etiquetada](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) identifica SM-2 como planificador.

El [README de la rama predeterminada](https://github.com/essentialist-app/essentialist/blob/main/README.md) ya identifica FSRS, y el repositorio recibió cambios en el código fuente durante 2026. Esto muestra hacia dónde avanza el proyecto, pero no permite afirmar que el binario de 2025 use FSRS.

Markdown tampoco lo contiene todo. El texto de las tarjetas vive en el archivo visible, mientras que el progreso se guarda en una base de datos oculta llamada `.<deck file>.db`. Copiar `sample.md` sin `.sample.md.db` conserva las preguntas y respuestas, pero pierde el estado de aprendizaje.

No hay sincronización integrada entre dispositivos ni un servidor. Puedes colocar los archivos en una carpeta sincronizada por tu cuenta, pero entonces también asumes la gestión de conflictos y la recuperación.

Elige Essentialist si lo prioritario es poder leer el Markdown y trabajar sin conexión a la red. No ofrece una experiencia multidispositivo fluida, y un solo archivo visible no constituye una copia de seguridad completa.

## Cuatro proyectos activos que conviene seguir

Estos proyectos tienen trabajo real de 2026 detrás. No entran entre los seis principales porque para recomendarlos hace falta algo más que código fuente interesante.

| Proyecto | Lo que ya es concreto | Lo que aún impide recomendarlo en la lista principal |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Código AGPL, planificadores FSRS/SM-2/Leitner, despliegue con Docker, un servicio gestionado, importación de CSV y exportación de datos | Se creó en julio de 2026 y no tiene ninguna versión etiquetada de la aplicación. La versión que aparece en GitHub es un paquete de audio, no un hito de la app |
| [Openlet](https://github.com/ChloeVPin/openlet) | App web MIT con FSRS, importación de CSV, ocultación de imágenes y una arquitectura Supabase/Vercel documentada | No hay ninguna versión etiquetada y la documentación oficial aún no define por completo los límites del uso sin conexión, la exportación y la recuperación en un entorno autohospedado |
| [Prep](https://github.com/Zamua/prep-app) | Código MIT, FSRS, servicio alojado y un despliegue documentado sobre el entorno de ejecución celld, que puede autohospedarse | No hay ninguna versión etiquetada; autohospedar también implica operar celld y el almacenamiento de objetos, no desplegar un binario independiente de flashcards |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | App móvil Kotlin con GPLv3, FSRS/SM-2, una versión para Android e importación de APKG con plantillas y archivos multimedia | Se creó en 2026; iOS exige compilar desde el código fuente y la documentación oficial no define una sincronización general de teléfono a teléfono |

Otros nombres conocidos quedan fuera por motivos más sencillos. El [repositorio de código abierto de Mochi](https://github.com/mochi-cards/open-source) reúne integraciones, no el núcleo de la aplicación. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) es de código abierto y puede autohospedarse, pero su README oficial aún incluye la repetición espaciada en «Features coming soon». [OpenCards](https://github.com/holgerbrandl/opencards) no publica una versión desde la [v2.5.1 de enero de 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), y su repositorio no ha recibido ningún cambio de código desde 2018.

Si no necesitas acceso al código fuente, la [comparativa más amplia de alternativas a Anki](/blog/best-anki-alternatives/) incluye productos que responden a otra pregunta.

## Prueba la migración en cinco capas independientes

Decir «importa Anki» significa muy poco sin explicar qué se importa. Una migración puede funcionar en una capa y fallar en las otras cuatro.

| Capa | Qué debes comparar | Lo que puede dar una falsa sensación de éxito |
| --- | --- | --- |
| Contenido de las tarjetas | Cada campo, marcador de hueco, etiqueta, carácter especial y nota repetida | El número total de tarjetas es parecido |
| Estructura | Tipos de nota, plantillas, tarjetas hermanas generadas y mazos anidados | El texto del anverso y el reverso apareció en algún sitio |
| Archivos multimedia | Las imágenes y el audio se copiaron, se abren correctamente en local y se reproducen sin conexión | El importador reconoció los nombres de archivo |
| Estado de aprendizaje | Registro de repasos, estado, fecha de vencimiento, intervalo, fallos y parámetros del planificador | Las tarjetas importadas aparecen, pero vuelven a empezar como nuevas sin indicarlo |
| Salida y recuperación | Una exportación o copia de seguridad documentada puede reconstruir el mismo sistema en otro lugar | Una exportación de texto legible se trata como una copia de seguridad completa |

Crea un mazo de prueba deliberadamente difícil antes de mover la colección real. Incluye campos adicionales, huecos, plantillas de anverso y reverso, mazos anidados, etiquetas, imágenes, audio y suficiente historial de repasos para comprobar si el destino lo conserva.

Mantén intacta la copia de seguridad de origen. Después de importar, compara por separado el número de notas, tarjetas y archivos multimedia. Revisa las fechas de vencimiento en lugar de fiarte de un mensaje que diga «planificación importada». Repasa sin conexión en todos los dispositivos que pienses usar. Por último, crea cambios contradictorios y desechables en dos dispositivos para ver cómo responde la sincronización.

Usa ambos sistemas durante unos días. Eliminar la colección antigua debe ser el último paso, no la prueba de que la migración ha funcionado.

## El autohospedaje solo está completo después de una restauración

Los productos anteriores usan «autohospedado» para describir modelos muy distintos:

- Anki y Mnemosyne ejecutan **servicios de sincronización**; los clientes instalados siguen siendo la interfaz de estudio.
- SiYuan con Docker ejecuta una **aplicación web** que los clientes nativos no pueden usar como servidor de sincronización.
- Recall ejecuta un **relay de instantáneas cifradas**, no la propia PWA.
- Flashcards despliega un **stack web y backend completo**; las apps nativas siguen siendo compilaciones separadas.
- Essentialist **no tiene servidor**; el control de los datos se limita a los archivos locales.

Cuando tengas claro qué incluye el autohospedaje, prueba la parte que suele posponerse:

1. Crea tarjetas, adjunta archivos multimedia, completa repasos y sincroniza desde dos clientes.
2. Incluye en la copia todas las bases de datos, los buckets de almacenamiento de objetos, los archivos locales, los secretos y los valores de configuración que indique la documentación.
3. Restaura todo en una cuenta vacía, una máquina nueva o un despliegue aislado.
4. Compara el número de tarjetas, los archivos multimedia, el historial de repasos, los vencimientos, el inicio de sesión y la sincronización entre clientes.
5. Actualiza la copia restaurada y completa otro ciclo de repaso.

Si para reconstruir el sistema todavía necesitas la máquina anterior, tienes un servicio en funcionamiento, pero no una copia de seguridad verificada.

## Preguntas frecuentes

### ¿Cuál es la mejor app de flashcards de código abierto en 2026?

Anki es la opción más segura para la mayoría de los estudiantes. Combina un modelo de colección maduro, FSRS, clientes para muchas plataformas y los formatos propios de copia de seguridad y exportación más completos. La salvedad es que sus productos oficiales para iOS y la web no están cubiertos por el repositorio de escritorio de código abierto, y su servidor autohospedado ofrece sincronización, no estudio desde el navegador.

### ¿Cuál es la mejor alternativa de código abierto a Anki?

Mnemosyne es la alternativa centrada exclusivamente en el estudio más consolidada y documenta oficialmente la importación de tipos de tarjeta personalizados y datos de aprendizaje de Anki. Recall parece más moderna e importa archivos APKG directamente en el escritorio, pero convierte los dos primeros campos de las notas, solo conserva una instantánea de la planificación, importa imágenes pero no audio y no traslada el registro completo de repasos.

### ¿Puedo autohospedar Anki?

Sí, puedes ejecutar el servidor oficial de sincronización de Anki para clientes compatibles. No sustituye a AnkiWeb en un entorno autohospedado: no incluye una interfaz de estudio para navegador.

### ¿Código abierto significa que funciona sin conexión?

No. El código abierto describe la licencia y el acceso al código fuente. El funcionamiento sin conexión depende de dónde almacena los datos el cliente y de qué acciones requieren un servicio. También puede ocurrir lo contrario: una app puede guardar sus datos en local sin publicar el código de su núcleo.

### ¿El autohospedaje garantiza la portabilidad?

No. El autohospedaje te permite controlar dónde se ejecuta un servicio. La portabilidad depende de las exportaciones, las copias de seguridad completas y una restauración que hayas probado de verdad. Una base de datos en tu servidor puede seguir siendo difícil de migrar, y un mazo Markdown legible puede omitir el estado de los repasos que se guarda a su lado.

## Mi recomendación

Conserva o elige **Anki** salvo que alguna de sus limitaciones te plantee un problema real. Escoge **Mnemosyne** si quieres estudiar en local y desde el escritorio con una importación de Anki consolidada. Usa **SiYuan** cuando las flashcards deban formar parte de una base de conocimiento más amplia. Considera **Flashcards** cuando controlar todo el código de la web, las apps nativas y el backend justifique operar un stack de producción en AWS. Elige **Recall** si buscas un cliente moderno y local-first, después de probar sus límites de conversión. Escoge **Essentialist** cuando el Markdown sin formato y la ausencia total de acceso a la red importen más que la sincronización.

La mejor app de flashcards de código abierto no es la que tiene el repositorio con la lista más larga de funciones. Es la que encaja con el sistema que realmente estás dispuesto a gestionar: su código, sus datos sin conexión y sus límites de migración, sincronización, alojamiento y recuperación.
