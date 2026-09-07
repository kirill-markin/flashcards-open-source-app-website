---
title: "Reseña de Mochi Flashcards (2026): plan gratuito, uso sin conexión y comparación con Anki"
description: "Reseña de Mochi Flashcards contrastada con fuentes: plan gratuito, apps sin conexión, notas en Markdown, FSRS, sincronización, importación desde Anki, exportaciones y límites del autoalojamiento."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "tarjetas de Mochi"
  - "flashcards de Mochi"
  - "Mochi vs Anki"
  - "Anki vs Mochi"
  - "Mochi es gratis"
  - "Mochi sin conexión"
  - "precio de Mochi"
  - "alojamiento de Mochi"
  - "flashcards en Markdown"
  - "repetición espaciada de Mochi"
---

Mochi parte de un documento Markdown, no del típico formulario con anverso y reverso. Añade una línea con tres guiones y el documento pasa a tener caras que puedes repasar. También puedes dejarlo como nota, enlazarlo a otra tarjeta o archivarlo para que siga apareciendo en las búsquedas sin entrar en la cola de repaso.

Ese pequeño separador deja bastante claro para quién funcionan bien las **tarjetas de Mochi**. Mochi encaja con quien quiere reunir notas y repetición espaciada en una misma app local-first, sobre todo si Markdown, los enlaces bidireccionales y un repaso sencillo con Remembered/Forgot le resultan naturales. Convence menos a quien ya tiene una colección consolidada en Anki que depende de variantes de tarjetas generadas, HTML/CSS personalizados, JavaScript, complementos o controles detallados del planificador.

Para trabajar en un solo dispositivo, el plan gratuito es mucho más que una prueba: no exige registro y Mochi documenta un uso sin conexión ilimitado. La contrapartida es que la sincronización entre dispositivos forma parte del **plan Pro de US$5 al mes**. Para quien usa Anki, el coste más serio está en lo que se pierde al migrar. Mochi puede importar un paquete de Anki y su historial de repasos, pero no puede conservar todas las plantillas, estilos, scripts, opciones del planificador ni comportamientos de los complementos.

> **Aviso de transparencia:** Soy Kirill Markin y desarrollo [Flashcards Open Source App](/es/). Esta reseña del flujo de trabajo está contrastada con fuentes; no afirmo haber realizado una prueba práctica del producto. No hay enlaces de afiliado. Mochi y Anki son los protagonistas de la comparación; mi producto solo aparece cerca del final como una alternativa claramente identificada.

**Datos comprobados:** 7 de septiembre de 2026. La última [versión de Mochi](https://mochi.cards/changelog/) visible era la 26.8.2, publicada el 10 de agosto de 2026. Los precios y los datos de las tiendas de aplicaciones pueden cambiar.

![Un restaurador de libros prueba un pequeño acordeón de tarjetas enlazadas mientras el archivo original permanece guardado a salvo](/blog/mochi-alternative-v3.png)

## La reseña breve

- **Elige Mochi** si quieres reunir notas y tarjetas en Markdown, usarlo sin cuenta y sin conexión en un dispositivo, crear enlaces bidireccionales y decidir cada repaso con una valoración binaria.
- **Elige Anki** si necesitas un sistema consolidado de tipos de nota, plantillas HTML/CSS, complementos, sincronización gratuita mediante AnkiWeb, cuatro valoraciones de repaso o controles de FSRS más completos.
- **No cambies todavía** si ya repasas con constancia y no puedes señalar qué problema de tu flujo de trabajo resolverá Mochi. Una interfaz nueva no basta para poner en riesgo años de datos de planificación de repasos y tarjetas personalizadas.
- **Haz una prueba antes de migrar** si Anki ya contiene la colección que quieres conservar a largo plazo. Mochi admite archivos `.apkg` y puede importar el historial de repasos, pero convierte el HTML a Markdown y elimina CSS y JavaScript.

## Mochi vs Anki de un vistazo

| Aspecto | Mochi | Anki |
|---|---|---|
| Para quién encaja mejor | Quienes usan Markdown y notas enlazadas y quieren combinar sus notas con tarjetas de repaso | Estudiantes que buscan un sistema de flashcards consolidado y configurable |
| Creación de tarjetas | Un documento Markdown pasa a tener varias caras cuando añades `---`; también hay campos y plantillas | Las notas contienen campos; las plantillas HTML/CSS generan una o varias tarjetas |
| Flujo de repaso | Las tarjetas nuevas pasan primero por una fase de aprendizaje; las aprendidas usan Forgot / Remembered | Las tarjetas usan Again / Hard / Good / Easy |
| Planificación de repasos | El algoritmo propio de Mochi es el predeterminado; FSRS es opcional | FSRS o el antiguo SM-2, con herramientas más completas para ajustar FSRS |
| Uso gratuito | Sin registro y con uso sin conexión ilimitado | Apps de escritorio y sincronización con AnkiWeb gratuitas; la app oficial para iOS es de pago |
| Sincronización entre dispositivos | Pro, US$5 al mes | Gratuita mediante AnkiWeb |
| Plataformas | Web, macOS, Windows, Linux, iOS y Android | Windows, macOS, Linux, AnkiWeb, la app oficial AnkiMobile y la app independiente AnkiDroid |
| Formatos portátiles | Exportaciones nativas `.mochi`, Markdown y CSV | Formatos nativos `.colpkg` y `.apkg`, además de texto separado por tabulaciones |
| Datos y alojamiento | Local-first; la app principal no se presenta como código abierto y no hay documentación sobre un servicio de sincronización autoalojado con soporte oficial | El repositorio principal tiene licencia AGPL y hay documentación oficial sobre un servidor de sincronización autoalojado |

La diferencia que importa es **la sencillez centrada en las notas frente al control de toda la colección**.

## Cómo funciona la interfaz de Mochi

La interfaz de Mochi se entiende mejor cuando sigues el recorrido de una tarjeta.

Todas las tarjetas pertenecen a un mazo. Al hacer clic en **New Card**, aparece un editor de Markdown en lugar de campos fijos para la pregunta y la respuesta. Una sola tarjeta puede contener encabezados, listas, código, imágenes, campos estructurados y enlaces. Añade `---` entre bloques para crear dos o más caras de repaso. Escribe `[[double brackets]]` para hacer referencia a otra tarjeta y Mochi creará automáticamente un enlace inverso. La [descripción oficial de las tarjetas](https://mochi.cards/docs/cards/) también documenta plantillas cuyos marcadores de posición muestran valores de campos estructurados.

Las tarjetas pueden cumplir dos funciones sin tener que estar en sistemas separados:

- una tarjeta de repaso tiene varias caras y entra en la repetición espaciada;
- una nota de referencia puede quedarse en el mismo mazo y archivarse, lo que la quita de las colas de tarjetas nuevas y pendientes sin borrar su contenido, etiquetas, enlaces ni historial.

Las [vistas de mazo](https://mochi.cards/docs/decks/custom-views/) son combinaciones guardadas de filtros, orden y diseño. Puedes mantener una cuadrícula para navegar con normalidad y crear otra vista para una etiqueta, tarjetas pendientes, una retención baja o repasos recientes. Mochi también permite convertir una vista en una sesión de estudio intensivo sin alterar la planificación habitual ni el historial de repasos. Esto dice más que llamar «limpia» a la interfaz: un mismo mazo puede funcionar como cuaderno, base de datos filtrada y cola de estudio.

El [repaso diario](https://mochi.cards/docs/getting-started/reviewing-cards/) tiene dos fases. En **New cards**, puedes añadir una tarjeta al calendario de repasos o elegir Again para volver a verla pronto. Una vez aprendida, cuando llega su fecha de repaso la tarjeta muestra la cara siguiente y te pide elegir entre **Forgot** y **Remembered**. Si la olvidas, Mochi la envía a una cola para volver a repasarla antes de reiniciar el progreso. Así, la decisión durante el repaso se mantiene deliberadamente sencilla.

## ¿Mochi es gratis y qué funciona sin conexión?

Sí, pero «gratis» y «sin conexión» significan cosas distintas según dónde lo uses. Los [precios actuales de Mochi](https://mochi.cards/) indican:

- **Free:** US$0 para siempre, sin necesidad de registrarse y con uso sin conexión ilimitado.
- **Pro:** US$5 al mes; añade sincronización entre dispositivos, publicación de mazos, campos dinámicos, integración con IA y soporte por correo electrónico.

Mochi funciona en macOS, Windows, Linux, iOS, Android y la web. Su [guía de descarga e instalación](https://mochi.cards/docs/getting-started/download-and-install/) marca el límite práctico:

| Entorno | Qué significan el uso gratuito y sin conexión |
|---|---|
| App instalada en ordenador o móvil | Puedes usar Mochi sin conexión y sin una cuenta. Los datos se guardan en el dispositivo, así que una sola app instalada puede cubrir un flujo de trabajo gratuito completo. |
| App web sin Pro | El contenido se guarda en el almacenamiento sin conexión del navegador. Mochi advierte de que el navegador puede borrar esos datos sin previo aviso. |
| La misma colección en varios dispositivos | La sincronización automática entre dispositivos es una función Pro, aunque cada app instalada pueda funcionar sin conexión. |

El uso sin conexión y la sincronización son funciones distintas. No necesitas Pro solo para crear o repasar en una app instalada. Sí lo necesitas si quieres mantener la misma colección sincronizada automáticamente entre el portátil y el teléfono. Si tienes datos importantes en el plan gratuito, conserva una copia de seguridad nativa en vez de confiar tu única copia a un dispositivo y, sobre todo, al almacenamiento del navegador.

Si el comportamiento sin conexión es el factor decisivo, compara el flujo exacto de tus dispositivos en [¿Anki funciona sin conexión?](/es/blog/does-anki-work-offline/) y en la guía más amplia de [apps de flashcards sin conexión](/es/blog/best-offline-flashcards-app/).

## Las flashcards en Markdown son la verdadera razón para elegir Mochi

La ventaja real de Mochi está en cómo Markdown cambia el contenido que editas y conservas.

Una tarjeta de Mochi sigue siendo legible como texto. El mismo documento puede contener una explicación breve, un bloque de código, enlaces a ideas relacionadas y separadores entre caras de repaso. Las tarjetas también admiten campos y plantillas cuando necesitas repetir una estructura. Al aplicar una plantilla, Mochi procesa su Markdown con los marcadores de posición de los campos e ignora el Markdown propio de la tarjeta al mostrarla, pero no lo borra.

Anki parte de un modelo distinto. Una nota almacena campos, y las [plantillas de tarjeta](https://docs.ankiweb.net/templates/intro.html) deciden qué campos aparecen y qué tarjetas se generan. Las plantillas usan HTML y CSS para los estilos. Así, una sola nota de vocabulario puede generar tarjetas de reconocimiento y de producción mientras mantiene los datos subyacentes en un único lugar.

Esa estructura permite crear diseños condicionales más complejos, variantes de tarjetas generadas, respuestas escritas, estilos personalizados y flujos ampliados mediante complementos. También significa que Anki no es una app nativa de flashcards en Markdown. Un flujo de Anki basado en Markdown necesita una capa adicional de conversión o un complemento.

La pregunta práctica es sencilla: ¿quieres una nota que pueda convertirse en tarjeta o un tipo de nota estructurado que pueda generar varias tarjetas? Mochi está pensado para lo primero. Anki, para lo segundo.

## La repetición espaciada de Mochi ya incluye FSRS

Las comparaciones que afirman que Mochi no tiene FSRS están desactualizadas. Mochi añadió una versión preliminar de FSRS en 2025 y desde entonces ha seguido publicando correcciones para el planificador. Aun así, [el algoritmo propio de Mochi sigue siendo el predeterminado](https://mochi.cards/docs/reviewing/fsrs/).

El algoritmo predeterminado cambia los intervalos mediante multiplicadores fijos según marques cada repaso como recordado u olvidado. Si activas FSRS en Review Settings, las tarjetas ya aprendidas pasan a FSRS sin perder su historial. Puedes establecer una retención objetivo, introducir parámetros personalizados y volver al algoritmo anterior más adelante.

Mochi mantiene sus valoraciones binarias con cualquiera de los dos planificadores:

- **Forgot** se corresponde con Again en FSRS.
- **Remembered** se corresponde con Good en FSRS.

La documentación de Mochi indica que la valoración binaria funciona con FSRS, aunque se pierde parte de la información que aportarían Hard y Easy. Mochi admite parámetros personalizados ya optimizados, pero no incorpora un optimizador. Para generar parámetros propios necesitas un optimizador de FSRS externo y el historial de repasos de Mochi.

Los [ajustes de FSRS de Anki](https://docs.ankiweb.net/deck-options.html#fsrs) van más lejos. La retención deseada y los parámetros pueden vincularse a preajustes, el optimizador integrado puede adaptar los parámetros al historial de repasos y el simulador estima la cantidad de repasos o minutos de estudio con distintos ajustes. Anki también registra cuatro resultados: Again, Hard, Good y Easy.

Esos botones adicionales solo ayudan si los usas con constancia. El manual de Anki considera Hard un recuerdo correcto. Si pulsas Hard cuando has olvidado la respuesta, envías a FSRS la información equivocada y puedes acabar con intervalos demasiado largos.

Elige el repaso binario de Mochi si un simple acierto o fallo hace más clara la sesión. Elige Anki si quieres más información en cada valoración y vas a usar su optimizador, los controles de retención, los preajustes o el simulador de carga de trabajo. Si te interesa el planificador más que las apps, consulta [FSRS vs SM-2](/es/blog/fsrs-vs-sm-2/).

## Mochi y Anki reparten el coste de forma distinta

Para estudiar en un solo ordenador, ambas apps pueden salir gratis. Cuando entran en juego más dispositivos, el coste aparece en lugares distintos.

Mochi cobra **US$5 al mes** por la sincronización Pro y la incluye en un paquete con la publicación, los campos dinámicos, la integración con IA y el soporte. Las apps de escritorio de Anki son gratuitas y el [sitio oficial de Anki](https://apps.ankiweb.net/) indica que la sincronización con AnkiWeb también lo es. AnkiMobile es la app oficial de pago para iPhone y iPad; AnkiDroid es un cliente gratuito para Android desarrollado de forma independiente.

Por tanto, «¿cuál es más barato?» depende de tus dispositivos:

- un ordenador: ambos pueden ser gratuitos;
- varios ordenadores o dispositivos Android: la sincronización gratuita mediante AnkiWeb evita una suscripción;
- iPhone o iPad: Anki exige un pago único por la app, mientras que Mochi reserva la sincronización entre dispositivos para su suscripción Pro;
- quien ya quiera usar la publicación de Mochi, sus campos dinámicos o la integración con IA puede considerar la sincronización como una parte del paquete y no como el coste completo.

Consulta la App Store de tu región antes de comparar importes exactos para iOS. No doy aquí un precio que puede variar de un mercado a otro.

## El alojamiento de Mochi no es lo mismo que el enfoque local-first

Tres etiquetas suelen mezclarse como si fueran una sola:

- **Local-first** significa que la copia de trabajo está en tu dispositivo y la app puede seguir funcionando sin su servicio en la nube.
- **Código abierto** significa que el código fuente está disponible con una licencia que permite inspeccionarlo y modificarlo.
- **Autoalojado** significa que el producto documenta una forma con soporte oficial de ejecutar el servicio correspondiente en tu propia infraestructura.

Mochi documenta con claridad su funcionamiento local-first. No presenta su app principal como código abierto: el enlace «Open source» del pie de su sitio web lleva a [una colección de integraciones](https://github.com/mochi-cards/open-source), no a la aplicación principal. Su sitio oficial tampoco documenta una alternativa autoalojada y con soporte oficial para la sincronización Pro.

Si buscas **alojamiento de Mochi** porque quieres tu propio servidor, este es el límite: puedes conservar tus datos locales y copias de seguridad nativas, pero la opción documentada para trabajar en varios dispositivos es Mochi Pro. El enfoque local-first ofrece un control útil sobre los datos; no es autoalojamiento.

El repositorio principal de Anki tiene [licencia AGPL versión 3 o posterior](https://github.com/ankitects/anki/blob/main/LICENSE), con excepciones indicadas para algunos componentes. El manual oficial también documenta un [servidor de sincronización autoalojado](https://docs.ankiweb.net/sync-server.html) para usuarios avanzados. Ese servidor sustituye la sincronización de AnkiWeb en clientes compatibles; no es una copia autoalojada del sitio AnkiWeb. Anki espera que quien lo administre se encargue de la línea de comandos, la red, el cortafuegos, el protocolo y las actualizaciones.

## Qué conserva una importación de Anki y qué cambia

La [documentación de importación](https://mochi.cards/docs/import-and-export/importing/) de Mochi indica que admite archivos `.apkg` de Anki, incluido el historial de repasos. Sin embargo, que algo se haya importado no significa que el resultado sea equivalente.

Durante la importación, Mochi convierte HTML a Markdown y elimina CSS y JavaScript. Es una conversión de formato entre dos modelos de tarjetas distintos. El material sencillo de anverso y reverso es el caso más fácil. Si una tarjeta depende de estilos, lógica de plantillas, interacciones que exigen escribir o JavaScript, hay que inspeccionarla después de importarla.

Para conservar el historial de repasos también hay que marcar una opción concreta al exportar. El [manual de exportación](https://docs.ankiweb.net/exporting.html) de Anki indica que **Include Scheduling Information** controla si el historial se incluye en el paquete. Si desactivas la opción, Mochi no puede recuperar un historial que nunca estuvo en el archivo `.apkg`.

Aunque el historial se importe, no esperes las mismas fechas de repaso futuras. Las dos apps pueden usar distintos planificadores, valoraciones, objetivos de retención, parámetros, pasos de aprendizaje y ajustes de mazo. Los eventos conservados aportan información al nuevo planificador; no hacen que ambos sistemas sean idénticos.

## Las copias de seguridad nativas y el texto portátil cumplen funciones distintas

Antes de mover nada, conserva una copia de seguridad con la que puedas restaurar el sistema original. Una exportación legible es útil, pero no siempre sirve para restaurarlo.

La [guía de copias de seguridad](https://mochi.cards/docs/getting-started/backing-up/) de Mochi documenta dos opciones nativas de protección:

- Copiar todo el directorio del usuario conserva el contenido, el historial de repasos, los archivos adjuntos, los ajustes de la app y el estado de inicio de sesión.
- Una exportación `.mochi` conserva mazos, tarjetas, plantillas y campos, archivos adjuntos, etiquetas y metadatos, historial de repasos, orden de las tarjetas y estructura de los mazos.

Las [exportaciones a Markdown y CSV](https://mochi.cards/docs/import-and-export/exporting/) de Mochi son formatos pensados para mover los datos. Markdown crea un archivo por tarjeta y carpetas para los mazos secundarios, pero pierde el historial de repasos, el orden de las tarjetas, las plantillas y las etiquetas de metadatos, salvo que estas últimas estén en el propio Markdown. CSV puede exportar los campos de las plantillas o las caras de anverso y reverso ya generadas, pero no conserva el historial de repasos, las plantillas ni las etiquetas de metadatos, a menos que estén integradas en el contenido.

Anki hace una distinción parecida:

- Un archivo `.colpkg` exporta toda la colección con la planificación de repasos y puede incluir archivos multimedia. Al importarlo, sustituye las tarjetas de la colección de Anki de destino.
- Un archivo `.apkg` exporta un mazo y sus mazos secundarios, con opciones para la información de planificación de repasos, los preajustes y los archivos multimedia.
- Las notas en texto sin formato usan campos separados por tabulaciones con el formato HTML integrado. Conservan el contenido editable, no todo el comportamiento de la colección.

Para volver de Mochi a Anki, lo normal es recurrir a CSV. Anki puede [asignar las columnas de texto a campos de notas](https://docs.ankiweb.net/importing/text-files.html), pero ese archivo no convierte los enlaces, el funcionamiento con varias caras, las plantillas ni el historial de repasos de Mochi en objetos equivalentes de Anki. Conserva la exportación `.mochi` incluso cuando la copia en Anki parezca correcta.

## Haz una prueba reversible con un mazo representativo

Que la ventana de migración acepte un archivo no demuestra que tu colección real siga funcionando ni que puedas recuperar contenido aprovechable. Prueba las dos direcciones sin tocar tu perfil habitual de Anki.

1. **Haz una copia de seguridad de toda la colección de Anki.** Exporta un archivo `.colpkg` con los archivos multimedia y guárdalo fuera del perfil de trabajo.
2. **Comprueba que la copia se abre.** Crea un perfil temporal vacío de Anki e importa allí el archivo `.colpkg`. La importación de un paquete de colección sustituye la colección de destino; por eso importa que el perfil temporal esté vacío.
3. **Crea un mazo representativo dentro de ese perfil temporal.** Hazlo lo bastante pequeño para poder revisar las tarjetas una a una, pero incluye las funciones de las que dependes: tarjetas básicas e inversas, cloze, plantillas personalizadas, CSS, JavaScript, imágenes, audio, ecuaciones, etiquetas, mazos anidados e historial de repasos.
4. **Exporta ese mazo como `.apkg`.** Incluye la información de planificación, los preajustes y los archivos multimedia cuando sean importantes. Esas opciones incluyen los datos en el paquete de Anki; no garantizan que Mochi vaya a reproducir todos los ajustes.
5. **Impórtalo en un mazo nuevo de Mochi.** Mantén sin cambios tu perfil habitual de Anki y su cola de tarjetas pendientes.
6. **Inspecciona antes de repasar.** Compara el contenido, el formato, los campos, los archivos multimedia, las etiquetas, la estructura del mazo y el historial. Presta especial atención a todo lo que dependa de HTML, CSS, JavaScript o variantes de tarjetas generadas.
7. **Elige el planificador de forma deliberada.** Mochi empieza con su propio algoritmo. Activa FSRS únicamente si es el que piensas usar después de la prueba.
8. **Repasa la copia durante una semana normal.** Valora el flujo de edición en Markdown, la fase New cards, la decisión Remembered/Forgot, el comportamiento sin conexión y, si has pagado por ello, la sincronización en los dispositivos que de verdad llevas contigo.
9. **Prueba el camino de vuelta.** Exporta el mazo de prueba de Mochi como `.mochi` para tener una copia nativa y como CSV para Anki. Usa un CSV con los valores de los campos si te importan los campos reutilizables; usa uno con las caras renderizadas si necesitas sobre todo un anverso y un reverso visibles. Importa el CSV en otro perfil vacío de Anki y asigna sus columnas a un tipo de nota adecuado.
10. **Anota todas las pérdidas que estás dispuesto a aceptar.** Comprueba por separado la ida y la vuelta. El estilo exacto, el funcionamiento con varias caras, el comportamiento de los complementos, las variantes generadas, las valoraciones de repaso, el historial o las fechas de repaso futuras pueden importar más en el uso diario de lo que sugería una tabla comparativa.

La vuelta mediante CSV es una migración de contenido, no una restauración completa de Mochi: no conserva el historial de repasos, las plantillas ni las etiquetas de metadatos, salvo que estas estén integradas en el contenido. Si Mochi no resuelve el problema que querías solucionar, borra el mazo de prueba y sigue con el perfil original de Anki. Si lo resuelve, migra los mazos reales uno a uno y conserva las copias de seguridad `.colpkg` de Anki y `.mochi` de Mochi durante varios ciclos de repaso normales.

## ¿Quién debería usar las tarjetas de Mochi?

Mochi encaja bien cuando:

- Markdown ya es tu forma de escribir y pensar;
- las notas y las tarjetas de repaso deben convivir en el mismo espacio de trabajo y estar enlazadas entre sí;
- prefieres la decisión sencilla Remembered/Forgot en lugar de cuatro valoraciones;
- te basta con usarlo gratis y sin conexión en un solo dispositivo, o consideras que la sincronización Pro vale US$5 al mes;
- tu colección es nueva o lo bastante sencilla como para que convertirla desde Anki suponga poco riesgo.

Quédate con Anki cuando:

- tus tipos de nota generan varias variantes de tarjetas importantes;
- las plantillas HTML/CSS, JavaScript, los complementos o los mazos compartidos forman parte del sistema;
- la sincronización gratuita entre dispositivos te importa más que escribir en Markdown;
- quieres el optimizador de FSRS de Anki, sus controles de preajustes, cuatro valoraciones y el simulador de carga de trabajo;
- llevas años acumulando datos de repaso y los comportamientos personalizados ya te funcionan bien.

La alternativa a Mochi más sensata depende del motivo por el que ninguna de las dos opciones encaje. Para una colección nueva y más sencilla, las [funciones de Flashcards Open Source App](/es/features/) incluyen repasos con FSRS, estudio sin conexión y sincronización, transferencia de tarjetas, etiquetas y archivos multimedia en formatos portátiles, acceso para agentes y una vía de autoalojamiento documentada. Yo la desarrollo, y sus límites vienen al caso: no sustituye el cuaderno Markdown conectado de Mochi ni el sistema consolidado de plantillas y complementos de Anki. La [guía de primeros pasos](/es/docs/getting-started/) muestra las formas actuales de acceso: servicio alojado, apps móviles, agentes y autoalojamiento.

## En resumen

Mochi es algo más que una interfaz más bonita para Anki. Su idea central es que una nota en Markdown, una entrada enlazada en una base de conocimiento y una tarjeta de repetición espaciada pueden ser el mismo objeto. El plan gratuito cubre el uso sin conexión y sin cuenta; Pro añade las funciones en la nube, incluida la sincronización entre dispositivos.

Es una buena opción para quien empieza una colección nueva centrada en Markdown. También puede merecer la pena cambiar desde Anki si la prueba con un mazo representativo demuestra que el Markdown nativo y los repasos binarios eliminan obstáculos reales.

Si ya tienes una colección consolidada en Anki, Mochi es quien debe demostrar que merece el cambio. Haz una copia de seguridad de la colección, prueba las tarjetas que concentran más comportamientos personalizados y quédate con Anki salvo que Mochi mejore tanto tu rutina semanal como para compensar la pérdida de funciones concretas de formato, plantillas y planificación, además del ecosistema.
