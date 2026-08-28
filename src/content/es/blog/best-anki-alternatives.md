---
title: "Alternativas a Anki en 2026: qué conservas, qué pierdes y qué ganas al cambiar"
description: "Compara siete alternativas a Anki por fidelidad de migración, uso sin conexión, planificación, precio, acceso al código y autohospedaje para saber cuándo conviene conservar Anki."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternativas a Anki"
  - "alternativa a Anki"
  - "apps similares a Anki"
  - "alternativa a Anki de código abierto"
  - "alternativas gratuitas a Anki"
  - "alternativa a Anki para iOS"
  - "migrar desde Anki"
---

Una importación desde Anki puede terminar sin errores y, aun así, deshacer justo lo que hacía funcionar tu mazo. El texto aparece y las tarjetas se abren. Luego descubres que el CSS ha desaparecido, que un campo de audio está vacío, que todas las tarjetas figuran como nuevas o que una nota ya no genera las variantes de tarjeta que esperabas.

Ahí está el coste oculto de comparar alternativas a Anki. Un editor más limpio o un plan más barato saltan a la vista antes de cambiar. El comportamiento de las plantillas, el historial de repasos, las fechas de vencimiento, los complementos, la disponibilidad sin conexión de los archivos multimedia y la posibilidad de volver atrás suelen revelar sus límites cuando el daño ya está hecho.

Esta comparación empieza justo en ese límite. Analiza siete apps similares a Anki, qué puede trasladar cada una de una colección existente, qué cambia después de la importación y cuándo seguir con Anki resulta más seguro.

> **Declaración de intereses:** Soy Kirill Markin y desarrollo [Flashcards](https://flashcards-open-source-app.com/), uno de los productos incluidos a continuación. Lo he añadido por su código abierto, su opción de autohospedaje y sus flujos de trabajo con agentes. No es el ganador por defecto: carece de importador directo de `.apkg`, su migración desde Anki pierde información y mantener en funcionamiento el sistema autohospedado exige un trabajo de infraestructura real.

**Datos comprobados:** 28 de agosto de 2026. Los precios corresponden a las tarifas públicas de Estados Unidos o a los precios locales indicados que estaban disponibles en esa fecha. Los impuestos, la región, las ofertas educativas y la facturación de las tiendas de aplicaciones pueden cambiar el importe.

![Un relojero comprueba si el mecanismo de un reloj de bolsillo antiguo encaja en una caja distinta](/blog/best-anki-alternatives.png)

## La respuesta corta antes de mover nada

En principio, quédate con Anki. Cambia solo si otra app elimina un problema recurrente que compense el coste de la migración.

Tres productos importan paquetes de Anki con datos de aprendizaje, pero el alcance de cada uno termina en un punto distinto:

- **Mnemosyne** documenta una importación completa desde Anki, incluidos los tipos de tarjeta personalizados y los datos de aprendizaje. Es la opción que más se acerca a un flujo de escritorio tradicional, local y de código abierto, aunque no tiene app nativa para iOS.
- **Mochi** importa archivos `.apkg` con el historial de repasos. Convierte el HTML a Markdown, elimina el CSS y el JavaScript y sustituye los cuatro botones de repaso de Anki por Remembered o Forgot.
- **RemNote** importa archivos `.apkg`, la mayoría de los tipos de nota y el historial de repasos. Su guía actual también indica que las tarjetas importadas pasan a una cola independiente llamada **Need to Learn**. Por tanto, «historial de repasos importado» no significa «la cola de Anki de hoy copiada tal cual».

Con las otras cuatro opciones toca reconstruir el contenido; no trasladan la colección:

- **Quizlet** resulta útil para conjuntos públicos, clases, juegos y práctica guiada.
- **Brainscape** ofrece a los grupos un ciclo de valoración de confianza más sencillo, del 1 al 5.
- **SuperMemo** supone pasarse a su método propietario y a su catálogo de cursos.
- **Flashcards** ofrece clientes web y nativos con licencia MIT, un backend autohospedado y acceso mediante API y MCP. Su flujo revisado a partir de TXT o CSV no conserva el estado de aprendizaje de Anki.

Si tus tarjetas dependen del renderizado exacto, de los complementos o de la cola de repasos actual, seguir con Anki no es indecisión. Es la respuesta.

## Primero, cuenta todo lo que contiene tu colección de Anki

Un «mazo» no es un único objeto portátil. Antes de comparar productos, separa las piezas que quizá tengas que trasladar.

| Parte de la colección | Qué puede guardar Anki en un paquete | Qué debe admitir expresamente la app de destino |
| --- | --- | --- |
| **Contenido de las notas** | Campos de texto y HTML almacenado | Asignación de campos, tarjetas cloze, texto no latino, código y saltos de línea |
| **Generación de tarjetas** | Tipos de nota y plantillas de tarjeta | Tarjetas directas e inversas, campos personalizados y comportamiento de CSS y JavaScript |
| **Archivos multimedia** | Imágenes, audio y otros archivos locales cuando se activa **Incluir archivos multimedia** | Extracción de archivos, referencias, formatos compatibles y sincronización entre dispositivos |
| **Organización** | Mazos, submazos, etiquetas y ajustes predefinidos opcionales de los mazos | Jerarquía, significado de las etiquetas, ajustes predefinidos y ámbitos de estudio |
| **Estado de aprendizaje** | Información de planificación e historial de repasos, cuando se incluyen | Fechas de vencimiento, intervalos, fallos y conversión al planificador de destino |
| **Código del flujo de trabajo** | Los complementos no se incluyen en el paquete del mazo | Sustitutos para las herramientas del navegador, las ediciones por lotes, la generación de notas y las demás funciones de los complementos |

El [manual de exportación de Anki](https://docs.ankiweb.net/exporting.html) documenta todas estas opciones de los paquetes. Un importador de texto solo ve la primera fila y, quizá, las etiquetas. Un importador directo de `.apkg` puede ver más, pero cada producto decide qué convierte y qué descarta.

Por eso, decir que una app «importa Anki» es demasiado impreciso para decidir un cambio. Hazte tres preguntas por separado:

1. **¿La tarjeta sigue significando lo mismo?** Comprueba los campos, las variantes de tarjeta generadas, las tarjetas cloze, los archivos multimedia y el renderizado.
2. **¿La app de destino sabe lo que ya he aprendido?** Comprueba los eventos de repaso, el estado actual, las fechas de vencimiento y la primera cola real.
3. **¿Podré salir de ella más adelante?** Exporta desde la app de destino y examina qué contiene realmente el formato de salida.

Un importador puede superar la primera prueba y fallar en las otras dos.

## Qué sobrevive a la migración

| Producto | Vía de importación desde Anki | Estado de aprendizaje | Pérdida principal que debes comprobar |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Importación directa de `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) para la mayoría de los tipos de nota, los archivos multimedia y el historial de repasos | El historial se importa, pero las tarjetas entran en la cola independiente **Need to Learn** de RemNote | CSS complejo, JavaScript personalizado, algunos audios de texto a voz (TTS) generados al vuelo y campos de oclusión de imágenes renombrados |
| [Mochi](https://mochi.cards/) | [Importación directa de `.apkg`](https://mochi.cards/docs/import-and-export/importing/) con el historial de repasos | El historial se importa; la documentación no promete una cola de Anki ni unas fechas de vencimiento idénticas | El HTML se convierte en Markdown; se eliminan el CSS y el JavaScript; las valoraciones posteriores son binarias |
| [Mnemosyne](https://mnemosyne-proj.org/) | El proyecto documenta la [importación completa desde Anki](https://mnemosyne-proj.org/features), incluidos los tipos de tarjeta personalizados y los datos de aprendizaje | Los datos de aprendizaje pasan a un planificador distinto | Hay que probar el comportamiento exacto de las plantillas, el estado de programación convertido y el renderizado de las tarjetas |
| [Quizlet](https://quizlet.com/) | [Pegar términos y definiciones](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Ninguno procedente de Anki | Tipos de nota, plantillas, mazos, estructura de archivos multimedia y todos los datos de planificación |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX u ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Ninguno procedente de Anki | Plantillas, complementos, reglas de archivos multimedia y todos los datos de planificación |
| [SuperMemo](https://www.supermemo.com/) | [Pegar filas delimitadas con preguntas y respuestas](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), hasta 100 por importación | Ninguno procedente de Anki | Estructura de la colección, archivos multimedia, plantillas y todos los datos de planificación |
| [Flashcards](https://flashcards-open-source-app.com/) | Creación de borradores asistida por IA y revisada a partir de un TXT o CSV de Anki | Ninguno procedente de Anki | No admite `.apkg`; quedan fuera las plantillas, la fidelidad de los archivos multimedia, la jerarquía de los mazos y todos los datos de planificación |

## Precio, uso sin conexión, planificación y propiedad

| Producto | Precio comprobado el 28 de agosto de 2026 | Límites del uso sin conexión | Planificador | Código fuente y autohospedaje |
| --- | --- | --- | --- | --- |
| **RemNote** | [Gratis; Pro por 8 $/mes, facturados como 96 $/año](https://www.remnote.com/pricing) | Las apps instaladas permiten editar y repasar sin conexión tras iniciar sesión. La app de escritorio conserva todos los archivos multimedia de la base de conocimiento; la móvil solo guarda en caché algunas imágenes recientes. La versión web solo funciona si la pestaña ya estaba abierta. | [Anki SM-2 o FSRS v6 en beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Núcleo propietario; no hay documentada ninguna vía de autohospedaje admitida |
| **Mochi** | [Gratis sin conexión; sincronización Pro por 5 $/mes](https://mochi.cards/#pricing-section) | Las apps instaladas funcionan por completo sin conexión y sin cuenta. El navegador puede borrar los datos almacenados localmente. | [El planificador de Mochi o FSRS](https://mochi.cards/docs/reviewing/fsrs/), ambos con Remembered / Forgot | Núcleo propietario; los repositorios públicos contienen integraciones, no una app que puedas autohospedar |
| **Mnemosyne** | Gratis | [Uso local en escritorio y repasos sin conexión en Android](https://mnemosyne-proj.org/download-mnemosyne.php); Android no permite editar. No tiene app nativa para iOS. | Planificación adaptativa a partir de valoraciones de recuerdo del 0 al 5 | Licencias específicas para cada componente; servidor de sincronización propio ejecutado en un equipo de escritorio o sin interfaz gráfica |
| **Quizlet** | Uso básico gratuito; [Plus por 35,99 $/año y Plus Unlimited por 44,99 $/año](https://quizlet.com/upgrade?source=signup) | Los conjuntos descargados funcionan sin conexión en las apps para iOS y Android con Flashcards y Match. | [Repetición espaciada en la web](https://quizlet.com/features/spaced-repetition) para conjuntos de 100 términos o más; la versión móvil sigue marcada como próxima. Learn es una vía de práctica adaptativa independiente. | Servicio alojado propietario; no ofrece una vía de autohospedaje admitida |
| **Brainscape** | [Gratis; Pro por 7,99 $/mes con facturación anual](https://www.brainscape.com/pricing) | [La app móvil puede conservar los cambios hechos sin conexión y sincronizar más tarde las clases descargadas previamente](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); la documentación no promete una biblioteca local completa. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), con valoraciones del 1 al 5 | Servicio alojado propietario; no ofrece una vía de autohospedaje admitida |
| **SuperMemo** | Cuenta gratuita con límites; [35,99 PLN/mes o 359 PLN/año](https://www.supermemo.com/en/premium-subscription) | Los cursos descargados en el móvil funcionan sin conexión; la edición, la IA, la búsqueda, las grabaciones y las estadísticas no. | [Método propietario de SuperMemo](https://www.supermemo.com/en/supermemo-method) | Servicio alojado propietario; no ofrece una vía de autohospedaje admitida |
| **Flashcards** | [Núcleo alojado gratis durante la beta; software gratis para autohospedarlo](/pricing/), más tus costes de infraestructura | Las apps nativas escriben primero en local después de iniciar sesión con conexión y completar la carga inicial del espacio de trabajo; los archivos multimedia remotos deben estar ya en caché. | [FSRS](/docs/architecture/#scheduling) | MIT; el despliegue de producción admitido es un sistema completo centrado en AWS |

Estas tablas no son una clasificación. Un importador directo puede pesar más que cualquier otra función si tienes 30 000 tarjetas maduras. Una app nativa para iPhone puede decidir el resultado si es ahí donde repasas. El acceso al código solo importa si tú o alguien de confianza vais a mantenerlo.

Todos estos productos ofrecen alguna modalidad gratuita, pero migrar a una alternativa gratuita a Anki no sale gratis. El precio de una suscripción es fácil de calcular. Reconstruir plantillas, comprobar archivos multimedia y reiniciar un historial de repasos suelen costar bastante más.

## RemNote: integra las tarjetas en notas conectadas

RemNote cambia el lugar en el que se crean las tarjetas. En vez de mantener un mazo separado de los apuntes de clase, puedes crear tarjetas dentro de un esquema, un documento o un flujo de trabajo con PDF. Es una buena razón para dejar Anki si copiar material entre una app de notas y otra de tarjetas se ha convertido en el verdadero coste.

Su vía de migración es amplia, pero conviene hablar de la cola con precisión. La [guía actual de RemNote para importar desde Anki](https://help.remnote.com/en/articles/6751471-importing-from-anki) indica que debes exportar un `.apkg` con la información de planificación, los ajustes predefinidos de los mazos y los archivos multimedia. RemNote importa el historial de repasos y la mayoría de los tipos de nota, incluidos el tipo básico, el tipo cloze y las tarjetas habituales de oclusión de imágenes.

La misma guía explica que las tarjetas recién importadas pasan a una cola independiente llamada **Need to Learn**. RemNote dispone del historial, pero su documentación no promete que la cola actual de Anki reaparezca sin cambios. También elimina el CSS complejo, no admite JavaScript personalizado, no reproduce algunos audios de texto a voz generados al vuelo y exige que las notas y los campos de oclusión de imágenes tengan los nombres esperados.

Haz una prueba con un mazo representativo y examina tanto las tarjetas como la primera cola. Que la importación se vea bien solo demuestra la mitad de lo que necesitas saber.

Las apps instaladas para escritorio y móvil funcionan sin conexión después de instalarlas e iniciar sesión. La [guía del modo sin conexión](https://help.remnote.com/en/articles/6752029-offline-mode) marca un límite importante para los archivos multimedia: la app de escritorio almacena todas las imágenes y los PDF de la base de conocimiento, mientras que la móvil solo guarda en caché algunas imágenes recientes. La app web puede seguir funcionando en una pestaña que ya estuviera abierta, pero no puede cargarse desde cero sin conexión.

Elige RemNote si integrar las tarjetas en notas conectadas compensa cambiar el modelo de la colección. Quédate con Anki si las plantillas de tarjeta y los complementos son el sistema, no un simple adorno.

## Mochi: Markdown local y una exportación nativa completa

Mochi es una alternativa más contenida para quienes buscan datos locales, tarjetas basadas en Markdown y menos controles en pantalla. Sus apps instaladas funcionan en las principales plataformas de escritorio y móvil y pueden usarse [por completo sin conexión y sin cuenta](https://mochi.cards/docs/getting-started/download-and-install/). La sincronización es la parte de pago: cuesta 5 $ al mes.

Su importador directo de Anki transfiere el historial de repasos, lo que sitúa a Mochi muy por delante de las opciones limitadas al texto. La conversión también deja muy claro qué transforma: Mochi elimina el CSS y el JavaScript y convierte el HTML a Markdown. Esto funciona bien cuando el significado está en el texto y en archivos adjuntos normales. Es una señal de alarma cuando la plantilla contiene parte del significado.

Mochi ofrece ahora dos planificadores. Su propio algoritmo sigue siendo la opción predeterminada, mientras que [FSRS puede activarse](https://mochi.cards/docs/reviewing/fsrs/) sin reiniciar el progreso que ya tengas en Mochi. FSRS calcula el estado de las tarjetas a partir del historial de repasos disponible en Mochi. La valoración sigue siendo binaria —Remembered o Forgot— incluso con FSRS, así que quienes utilicen Hard y Easy en Anki como señales distintas deben esperar un ritmo diario diferente.

También resulta más claro recuperar los datos que en la mayoría de las apps propietarias. Una [exportación nativa `.mochi`](https://mochi.cards/docs/import-and-export/exporting/) contiene las tarjetas, las plantillas, los archivos adjuntos, las etiquetas, la estructura de los mazos y el historial de repasos. Los formatos Markdown y CSV son más fáciles de inspeccionar en otras herramientas, pero omiten el historial de repasos y otros metadatos.

Los repositorios públicos de Mochi en GitHub contienen [integraciones y herramientas relacionadas](https://github.com/mochi-cards/open-source), no el núcleo de la app ni un servidor de sincronización admitido. Elige Mochi por su funcionamiento sin conexión y su portabilidad, no por el acceso al código fuente.

## Mnemosyne: la opción de escritorio y código abierto

Mnemosyne es lo más parecido al modelo tradicional de «programa de escritorio y base de datos local». La versión actual funciona en Windows, macOS y Linux, y ofrece un cliente para Android que permite repasar sin conexión. Su página de funciones documenta tarjetas con contenido enriquecido, etiquetas jerárquicas, complementos, una escala de valoración del 0 al 5 y una importación completa desde Anki con tipos de tarjeta personalizados y datos de aprendizaje.

Es la migración de código abierto más directa de esta lista si quieres dejar Anki sin pasarte a un gran sistema de notas ni a un servicio en la nube. También incluye un [servidor de sincronización](https://mnemosyne-proj.org/help/syncing) que puede ejecutarse en un equipo de escritorio o sin interfaz gráfica y combinar los datos de aprendizaje de varios clientes.

Las contrapartidas forman parte de la decisión. El cliente de Android [no permite editar tarjetas](https://mnemosyne-proj.org/help/android-client). En iOS hay que repasar mediante el servidor web que se ejecuta en otro equipo, y la página oficial de funciones de ese servidor advierte que no incorpora medidas de seguridad. Gestionar tu propia sincronización también implica mantener el servidor accesible, configurar la red y hacer copias de seguridad del directorio de datos.

Las licencias son más específicas que una simple etiqueta «GPL»: el [archivo de licencia del proyecto](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) remite a condiciones distintas para cada componente. La [licencia del núcleo](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) usa AGPL v3 con una disposición adicional sobre el nombre y la atribución, mientras que [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) usa LGPL v3. Lee esos archivos si piensas modificar o redistribuir el software.

## Quizlet: cambia por el aula, no por conservar la colección intacta

Quizlet cumple otra función. Sus conjuntos de estudio públicos, las clases para docentes, las opciones para compartir, Match, Test, Learn y las actividades en grupo son más fáciles de poner en manos de una clase que un perfil de Anki personalizado.

El límite de la migración es el texto sin formato. Quizlet puede convertir filas pegadas en términos y definiciones, pero no lee un `.apkg` ni reconstruye los tipos de nota, las plantillas, la planificación o el historial de repasos. Los creadores pueden [exportar sus propios conjuntos como texto copiado](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), sin imágenes; los conjuntos copiados de otros usuarios no se pueden exportar. Esto ofrece portabilidad del contenido, no de la colección.

El sistema de planificación de Quizlet sigue cambiando. Su nuevo flujo de [Spaced Repetition](https://quizlet.com/features/spaced-repetition) se activa automáticamente en la web para los conjuntos de 100 términos o más y utiliza las valoraciones Repeat, Hard, Okay y Easy. Quizlet sigue anunciando que la compatibilidad con móviles llegará próximamente. Learn continúa como una vía independiente de práctica adaptativa, sujeta a límites de uso según el plan.

Aquí, usar la app sin conexión también significa recurrir a las apps móviles, no al sitio web. Quizlet guarda automáticamente ocho conjuntos recientes y permite descargar más; [Flashcards y Match funcionan sin conexión](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), y el progreso se sincroniza al recuperar la conexión.

Cambia a Quizlet cuando el objetivo sea distribuir material y organizar actividades en clase. Reconstruir una planificación personal madura solo para conseguir esas funciones suele ser un mal intercambio.

## Brainscape: menos decisiones sobre el planificador y una migración menos profunda

Brainscape pide que valores tu confianza del 1 al 5 y usa esa señal para mostrar antes las tarjetas que dominas peor. No publica la fórmula completa, pero es una dinámica fácil de explicar en una clase compartida.

Acepta archivos CSV, TXT, XLSX y ODS. Resulta práctico para tarjetas con anverso y reverso, pero obliga a dejar atrás las plantillas, los complementos, las reglas de los archivos multimedia y los datos de aprendizaje de Anki. Exportar una copia de seguridad personal es una función Pro; genera archivos que pueden abrirse en una hoja de cálculo y volver a importarse más adelante.

El centro de ayuda actual de Brainscape afirma que el sitio web y las apps móviles ya comparten las mismas funciones principales para buscar, crear, compartir y estudiar. También documenta el uso del móvil sin conexión, la resincronización manual y la actualización de las clases ya descargadas en el dispositivo. Eso permite un flujo práctico al volver a conectarse, pero no garantiza que toda la cuenta exista como una biblioteca local completa.

La exportación de mazos personales sigue siendo una [función Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). No existe una publicación oficial del código fuente ni una vía de autohospedaje.

Vale la pena considerar Brainscape cuando la configuración de Anki resulta excesiva para quienes solo necesitan ponerse a estudiar. No es una buena vía de salida para quien ya saca partido de esa configuración.

## SuperMemo: elige el método y acepta empezar de cero

El servicio actual SuperMemo.com es una plataforma de aprendizaje de idiomas disponible en la web, iOS y Android, basada en el método de planificación propietario de SuperMemo. Es un producto distinto de la antigua aplicación para Windows que quizá conozcan quienes llevan años usando SuperMemo.

Esta es una decisión sobre el método y el catálogo, no una migración limpia desde Anki. SuperMemo permite la [creación en bloque mediante filas delimitadas con preguntas y respuestas](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), con un límite de 100 tarjetas por importación. No encontré ningún importador oficial actual de `.apkg` ni una vía de exportación para los usuarios del servicio alojado. Por tanto, las plantillas, los complementos, la estructura de los archivos multimedia y el historial de repasos no pasan por esta vía documentada.

Los cursos descargados se pueden estudiar sin conexión en las apps móviles. La [guía del modo sin conexión](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) excluye las funciones de IA, la creación de MemoCards, la búsqueda, las grabaciones, las estadísticas y el editor de cursos, así que prepara el material y sincronízalo antes de quedarte sin conexión.

Elige SuperMemo si su método o su catálogo de cursos te interesan lo suficiente como para empezar una planificación nueva. Si tu prioridad es conservar la planificación actual, esta opción resuelve otro problema.

## Flashcards: código disponible para todo el sistema, pero la importación más limitada desde Anki

Flashcards pone a disposición el código de todo el sistema. El [repositorio con licencia MIT](https://github.com/kirill-markin/flashcards-open-source-app) contiene la app web, los clientes para iOS y Android, el backend, la sincronización sin conexión, la infraestructura, la [API pública](/docs/api/) y el [servidor MCP](/docs/mcp-connector/). Los repasos utilizan [FSRS](/docs/architecture/#scheduling). Las versiones web, iOS y Android escriben primero en local, añaden los cambios a una cola de salida y sincronizan al recuperar la conexión.

Eso no la hace compatible con Anki. Flashcards no puede leer `.apkg` ni `.colpkg`. La [vía admitida para migrar desde Anki mediante TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) crea borradores con ayuda de la IA para tarjetas basadas principalmente en texto y exige revisarlos. No conserva las plantillas, los complementos, la jerarquía de los mazos, las fechas de vencimiento, los intervalos ni los eventos de repaso. Las referencias a archivos multimedia dentro de un TXT no son los archivos en sí, por lo que los mazos que dependen mucho de ellos requieren una reconstrucción y una comprobación independientes.

El formato propio `flashcards.zip` también tiene un alcance menor que una copia de seguridad. Permite trasladar tarjetas, etiquetas y los archivos multimedia relacionados entre espacios de trabajo de Flashcards. No traslada el historial de repasos, el estado de FSRS, la estructura completa de los mazos, los ajustes del espacio de trabajo ni las cuentas.

El núcleo alojado es [gratis durante la beta](/pricing/). Autohospedar el sistema de producción no consiste en ejecutar Docker con un solo comando: la [guía de autohospedaje](/docs/self-hosting/) usa AWS CDK y requiere servicios de AWS, además de Cloudflare, Resend, Sentry, secretos, migraciones, copias de seguridad, restauraciones y actualizaciones. Docker Compose sirve para desarrollo; no es la vía de despliegue de producción admitida.

Elige Flashcards cuando el acceso a todo el código y un backend bajo tu control sean la razón para cambiar, y tus tarjetas sean lo bastante sencillas como para reconstruirlas de forma segura. [Abre la app alojada](https://app.flashcards-open-source-app.com/) para probar un pequeño mazo temporal. Quédate con Anki —o prueba RemNote, Mochi o Mnemosyne— si lo primero es conservar fielmente el estado de aprendizaje.

## ¿Qué alternativa a Anki funciona en iOS sin sorpresas al migrar?

Una «alternativa a Anki para iOS» puede significar dos cosas distintas: una app nativa para iPhone o una forma de evitar la compra única de [AnkiMobile por 24,99 $](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo y Flashcards tienen apps para iOS. Mnemosyne no. Aun así, queda por resolver la migración:

- **Mochi** conserva más información que las opciones de iOS limitadas al texto: importa el historial de repasos de `.apkg`, aunque convierte el contenido a Markdown y utiliza valoraciones binarias.
- **RemNote** también importa el historial de repasos de `.apkg`, pero prueba la cola **Need to Learn** en vez de dar por hecho que conservará la planificación de hoy en Anki.
- **Quizlet** encaja bien para distribuir material en clase, pero su vía desde Anki se limita al texto y su nuevo flujo de repetición espaciada todavía no está disponible en móviles.
- **Flashcards** ofrece el código fuente y un cliente nativo para iOS, pero su migración desde Anki reinicia el estado de aprendizaje.
- **Brainscape** y **SuperMemo** solo tienen sentido si sus métodos de repaso compensan tener que reconstruir las tarjetas y la planificación.

Antes de dejar AnkiMobile por el precio, compara esa compra con el coste de una suscripción y con las horas que necesitarás para reparar una migración. Una app de pago único puede salir más barata que una alternativa gratuita que convierta una colección madura en un proyecto manual.

## Cuándo es más seguro seguir con Anki

Seguir con Anki también es una decisión; no significa que no hayas sabido elegir algo más nuevo. Quédate con Anki si se cumple cualquiera de estas condiciones:

- tu colección depende de plantillas personalizadas, CSS, JavaScript o complementos;
- Image Occlusion, el audio u otros archivos multimedia contienen información esencial;
- una nota genera varias variantes de tarjeta que deben seguir vinculadas;
- años de historial de repasos y las fechas de vencimiento actuales valen más que un editor nuevo;
- dependes de un flujo de escritorio o de una combinación de plataformas que la alternativa no iguala;
- el modo sin conexión de la alternativa solo funciona en una plataforma que no vas a usar;
- quieres autohospedaje en teoría, pero no quieres administrar, proteger, hacer copias de seguridad y actualizar un servidor;
- la alternativa no resuelve ningún problema recurrente, aparte de ofrecer una interfaz más limpia.

Anki sigue ofreciendo un ecosistema maduro de complementos, plantillas flexibles para notas y tarjetas, FSRS y controles de planificación heredados, clientes locales instalados y formatos de paquete capaces de contener la colección. Ninguno de los productos anteriores reúne todo eso.

Para comparar con más detalle los límites de propiedad, consulta la [guía de apps de tarjetas de código abierto](/blog/best-open-source-flashcard-apps-2026/). Si el comportamiento sin conexión es el factor decisivo, la [comparación de apps de tarjetas sin conexión](/blog/best-offline-flashcards-app/) distingue entre apps instaladas, contenido en caché y pestañas del navegador.

## Una lista de comprobación que todavía puede acabar en «no»

No empieces con toda la colección. Diseña una prueba que pueda fallar.

1. **Crea un paquete de recuperación.** Exporta un `.colpkg` con los archivos multimedia, guárdalo fuera del perfil de Anki y conserva una segunda copia en otro lugar.
2. **Elige el mazo más complejo.** Incluye tarjetas cloze, campos personalizados, tarjetas directas e inversas, mazos anidados, etiquetas, imágenes, audio y suficiente historial de repasos para dejar al descubierto la conversión de la planificación.
3. **Exporta el formato que la app de destino admita de verdad.** Usa `.apkg` con planificación, ajustes predefinidos y archivos multimedia si dispone de un importador directo. Recurre a Notas en texto sin formato solo si aceptas reconstruir únicamente el contenido.
4. **Registra una referencia inicial.** Anota el número de notas y tarjetas, los nombres de etiquetas y mazos, el número de archivos multimedia, algunas fechas de vencimiento e intervalos y cuántas tarjetas debería generar cada tipo de nota.
5. **Importa en un espacio temporal.** No sobrescribas el perfil de origen ni mezcles la primera prueba con una biblioteca permanente en la app de destino.
6. **Examina por separado el contenido y el estado de aprendizaje.** Que el anverso y el reverso sean correctos no demuestra que hayan sobrevivido las tarjetas cloze, los archivos multimedia, las tarjetas hermanas, el historial de repasos o la siguiente fecha de vencimiento.
7. **Prueba el arranque sin conexión en todos tus dispositivos reales.** Repasa, edita, cierra la app por completo, vuelve a abrirla sin conexión, recupera después la conexión y comprueba otro dispositivo.
8. **Observa la cola antes de que las planificaciones diverjan.** Compara el primer grupo de tarjetas pendientes y algunos intervalos antes de valorar las mismas tarjetas reales en ambas apps. Después del primer repaso en otra app, las dos planificaciones son independientes.
9. **Prueba la salida antes de comprometerte.** Exporta desde la app de destino y examina qué podrías recuperar si decides dejarla el año que viene.
10. **Conserva intactos Anki y la copia de seguridad.** No borres ninguno de los dos hasta que la alternativa haya superado el uso normal y hayas aceptado conscientemente todas las pérdidas.

Si la app de destino solo acepta texto, sigue el [flujo completo y seguro de exportación a TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Separa el `.colpkg` de recuperación del archivo de trabajo portátil y deja explícito que la planificación se reiniciará.

## Decide en este orden

Empieza por lo que no puedes permitirte perder:

1. Si las plantillas exactas, los complementos o la cola actual son esenciales, quédate con Anki salvo que una prueba representativa con `.apkg` demuestre lo contrario.
2. Si las notas y las tarjetas deben integrarse en un único sistema, prueba RemNote. Comprueba la cola **Need to Learn**, no solo las páginas importadas.
3. Si el Markdown local y unas exportaciones que puedas inspeccionar importan más que el renderizado de Anki, prueba Mochi.
4. Si buscas una app de escritorio de código abierto centrada en las tarjetas y con importación directa desde Anki, prueba Mnemosyne y confirma que sus limitaciones móviles encajan con tu rutina.
5. Si el verdadero problema es distribuir material en clase o simplificar un ciclo compartido de repaso, reconstruye un conjunto pequeño en Quizlet o Brainscape.
6. Si buscas específicamente el método de SuperMemo, acepta una planificación nueva. Si buscas acceso al código de todo el sistema, autohospedaje, API y MCP, acepta la reconstrucción con pérdidas de Flashcards y el trabajo operativo que conlleva.

Para comparar función por función tres modelos muy distintos, consulta [Anki vs. Quizlet vs. Flashcards](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

La regla útil es sencilla: cambia cuando la ventaja sea concreta y hayas sometido las pérdidas a una prueba real. Si tu mazo representativo no logra cruzar ese límite sin problemas, seguir con Anki no es la salida conservadora por defecto. Es el resultado de la comparación.
