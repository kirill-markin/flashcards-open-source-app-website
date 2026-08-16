---
title: "¿Se puede usar Anki sin conexión en 2026? Escritorio, iPhone, Android y sincronización"
description: "Sí: Anki para escritorio, iPhone, iPad y Android guarda una colección local. Descubre qué requiere internet, cómo sincronizar después y cómo preparar los archivos multimedia."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "Anki sin conexión"
  - "se puede usar Anki sin internet"
  - "AnkiMobile sin conexión"
  - "AnkiDroid sin conexión"
  - "sincronizar Anki después de usarlo sin conexión"
  - "AnkiWeb sin conexión"
  - "usar Anki offline"
---

Anki no necesita consultar un servidor antes de mostrarte la siguiente tarjeta. **En 2026, las aplicaciones instaladas de Anki funcionan sin conexión:** Anki para Windows, macOS y Linux; AnkiMobile para iPhone y iPad; y AnkiDroid para Android. Cada una trabaja con una colección guardada en el propio dispositivo, por lo que puedes repasar, crear notas y hacer cambios habituales sin internet.

La excepción que conviene recordar es AnkiWeb. Se trata del servicio de estudio y sincronización en el navegador, no de un cliente de Anki preparado para funcionar sin conexión. Además, una aplicación instalada solo puede usar los mazos y archivos multimedia que ya estén guardados en ese dispositivo concreto.

**Datos verificados:** 16 de agosto de 2026.

![Un investigador de campo añade un registro a un archivo local de fotos, audio y texto mientras la conexión por radio está caída](/blog/does-anki-work-offline.png)

## Respuesta breve para cada aplicación de Anki

El [sitio web oficial de Anki](https://apps.ankiweb.net/) presenta la aplicación de escritorio, AnkiMobile para iOS, AnkiDroid para Android y AnkiWeb como partes del mismo ecosistema. Sin embargo, sus límites sin conexión no son iguales.

| Aplicación o servicio | ¿Funciona sin conexión? | Qué puedes hacer sin internet | Qué requiere conexión |
| --- | --- | --- | --- |
| **Anki para escritorio** en Windows, macOS o Linux | **Sí.** La colección y la carpeta de archivos multimedia se guardan en el equipo. | Repasar tarjetas, añadir notas, editar su contenido y usar los archivos multimedia que ya estén en el ordenador. | Descargar mazos compartidos, sincronizar con AnkiWeb y obtener cualquier recurso que una tarjeta o un complemento solicite a un servicio en línea. |
| **AnkiMobile** en iPhone o iPad | **Sí.** La aplicación guarda una colección local. | Repasar tarjetas, añadir notas, editar su contenido y reproducir sonidos o mostrar imágenes que ya estén en el dispositivo. | Completar la sincronización inicial de la colección y de los archivos multimedia, usar AnkiWeb y acceder a recursos remotos. |
| **AnkiDroid** en Android | **Sí.** AnkiDroid guarda la colección en el dispositivo. | Repasar tarjetas, añadir notas, editar su contenido y usar los archivos multimedia presentes en el dispositivo. | Sincronizar o descargar el material que falte, obtener mazos compartidos y usar funciones de las tarjetas que dependan de la red. |
| **AnkiWeb** en el navegador | **No tiene modo sin conexión.** Es un servicio en línea de estudio y sincronización. | No cuentes con poder usarlo cuando pierdas la conexión. | Conectarte a internet o cambiar a una aplicación instalada que hayas preparado de antemano. |

Por tanto, sí se puede usar Anki sin conexión siempre que sea una aplicación instalada y la colección adecuada ya esté en el dispositivo. AnkiWeb sigue necesitando internet.

## Los repasos y cambios se guardan primero en el dispositivo

Cuando respondes tarjetas sin conexión, Anki registra los repasos en la colección local y programa los siguientes a partir de ese estado. Las notas nuevas y los cambios habituales también quedan guardados en el dispositivo. No aparecerán en otro dispositivo hasta que vuelvas a conectarte y sincronices.

Si estudias en un solo dispositivo, no es obligatorio sincronizar con AnkiWeb. La sincronización sirve para trasladar los cambios de la colección entre dispositivos. El [manual de sincronización de Anki](https://docs.ankiweb.net/syncing.html) explica que, en condiciones normales, se pueden combinar los repasos y las ediciones de notas realizados en distintos lugares. Si repasas la misma tarjeta en dos dispositivos, ambas respuestas permanecen en el historial de repaso, pero prevalece el estado correspondiente a la respuesta más reciente.

Esta rutina ayuda a evitar conflictos de sincronización:

1. Sincroniza el dispositivo antes de alejarte de una conexión fiable.
2. Sin conexión, repasa, añade notas o haz correcciones normales en el texto de las tarjetas.
3. Cuando recuperes internet, sincroniza ese dispositivo antes de continuar en otro.
4. Espera a que el segundo dispositivo termine de sincronizar antes de hacer más cambios allí.

Los cambios en la estructura de la colección exigen más cuidado. Añadir un campo, eliminar una plantilla de tarjeta, cambiar los tipos de nota y otras operaciones similares pueden requerir una sincronización en un solo sentido en vez de combinar los cambios. En ese caso, Anki te pide elegir entre conservar la colección local o la de AnkiWeb, y puede sustituir los cambios de la otra copia.

Durante un viaje puedes seguir repasando y editando notas con normalidad. Si varios dispositivos están acumulando cambios distintos sin conexión, es mejor posponer las modificaciones complejas de tipos de nota y plantillas. Y si Anki te pide cargar o descargar la colección completa, detente primero para identificar qué copia contiene el trabajo que quieres conservar.

## Los archivos multimedia solo son locales cuando llegan al dispositivo

Anki guarda los sonidos y las imágenes por separado de los datos de la colección. En la versión de escritorio, la [documentación sobre archivos multimedia](https://docs.ankiweb.net/media.html) explica que los archivos adjuntos o pegados en una nota se copian en la carpeta local `collection.media`. Cuando el archivo ya está allí, la tarjeta no necesita internet para cargarlo.

El riesgo está en la preparación. La colección y los archivos multimedia se sincronizan por separado, así que las imágenes y los sonidos pueden seguir transfiriéndose aunque las tarjetas ya aparezcan. La [guía de sincronización de AnkiMobile](https://docs.ankimobile.net/syncing.html) advierte que pueden faltar archivos multimedia hasta que la primera sincronización termine por completo. Ver todos los mazos en la lista no demuestra que una colección con muchas imágenes o audios esté lista.

Antes de quedarte sin conexión:

- sincroniza el dispositivo en el que añadiste los archivos multimedia;
- espera a que termine la sincronización de esos archivos;
- sincroniza el dispositivo que vas a llevar y espera a que también termine allí;
- abre tarjetas con cada tipo de imagen y audio que vayas a necesitar;
- usa, si está disponible, la opción para **comprobar los archivos multimedia** y localizar notas que hagan referencia a archivos ausentes; el nombre exacto puede variar según el cliente.

Esta última comprobación es especialmente útil con los mazos compartidos. A veces, quien creó el mazo nunca incluyó una imagen a la que hace referencia una tarjeta; por mucho que sincronices, ese archivo no se descargará.

Guardar los archivos multimedia en local tampoco hace que todas las tarjetas sean independientes de internet. Una plantilla puede apuntar a una imagen, un script, una fuente u otro recurso alojado en la web. Los diccionarios en línea, las descargas de mazos compartidos y los complementos que llaman a API remotas siguen necesitando conexión. La conversión de texto a voz depende de la voz y de la plataforma: una voz instalada en el sistema puede funcionar sin conexión; una ofrecida por un servicio en línea, no. Prueba la función concreta en lugar de suponer que todas las voces o todos los complementos se comportan igual.

## Qué ocurre al sincronizar después de estudiar sin conexión

El proceso tiene dos etapas: primero trabajas con la colección local y, cuando vuelve internet, sincronizas a través de la red.

Empieza por el dispositivo que contiene el trabajo realizado sin conexión. Espera a que terminen tanto la sincronización de la colección como la de los archivos multimedia. Después, sincroniza el siguiente dispositivo antes de repasar o editar allí. Este orden facilita identificar el estado más reciente si Anki te pide resolver un conflicto.

Comprueba el resultado; no te limites a confiar en que la animación haya terminado:

- busca una nota que hayas añadido sin conexión;
- confirma que un campo editado contenga el texto nuevo;
- consulta el historial de repaso o el estado de programación de una tarjeta que hayas respondido;
- abre en el segundo dispositivo al menos una imagen o un audio que hayas añadido recientemente.

Si editaste la misma nota en dos dispositivos, lee el resultado final en vez de suponer que la combinación conservó el texto que querías. Si aparece un botón rojo de sincronización o la opción de hacer una carga o descarga completa, no elijas por inercia. Una descarga completa sustituye los cambios de la colección local; una carga completa sustituye la colección de AnkiWeb antes de que los demás dispositivos la descarguen.

## Si rara vez tienes internet, traslada la colección como archivo

Anki también permite pasar una colección de un dispositivo a otro sin acceso habitual a AnkiWeb. Este método traslada una copia completa; no combina cambios hechos por separado en varios dispositivos.

La [guía de AnkiMobile para transferir colecciones](https://docs.ankimobile.net/collection-transfer.html) utiliza un archivo `collection.colpkg` que contiene todos los mazos y la información de programación. Debes exportar la colección actual, pasar el archivo mediante AirDrop o la función para compartir archivos e importarlo en el otro dispositivo. El [manual de AnkiDroid](https://docs.ankidroid.org/manual.html) documenta un proceso similar por USB para transferir la colección entre Android y un ordenador.

Al importar un archivo de colección completa, se sustituye la colección que ya existe en el dispositivo de destino. No se pueden combinar dos colecciones modificadas por separado sin conexión. Mantén un único dispositivo como copia principal: exporta desde él, importa en el siguiente, trabaja allí y vuelve a transferir la colección más reciente antes de retomar el trabajo en el primer dispositivo.

Esta opción resulta útil en trabajos de campo, viajes en barco, lugares remotos o redes restringidas, donde puedes transferir archivos de vez en cuando, pero no sincronizar con la nube de forma habitual. Para un vuelo o un trayecto normal, es más sencillo completar una sincronización con AnkiWeb antes de salir.

## Sincronizar Anki no sustituye una copia de seguridad

La sincronización mantiene alineados los dispositivos. Por eso, una eliminación accidental o un cambio no deseado pueden propagarse a todos ellos.

Las aplicaciones instaladas de Anki guardan copias de seguridad locales, pero los archivos multimedia necesitan una atención aparte. Por ejemplo, la [guía de preferencias de AnkiMobile](https://docs.ankimobile.net/preferences.html) indica que sus copias de seguridad automáticas incluyen las tarjetas y las estadísticas, pero no los sonidos ni las imágenes. Exportar una colección completa con sus archivos multimedia cumple una función distinta tanto de la sincronización como del historial de copias automáticas.

Si te costaría reconstruir el mazo, guarda periódicamente una exportación completa con los archivos multimedia fuera del dispositivo que usas a diario. La [guía general para hacer copias de seguridad de flashcards](/es/blog/how-to-back-up-flashcards/) explica cómo combinar esa copia de recuperación con texto portátil y los archivos fuente originales.

## Una prueba de diez minutos en modo avión

Hazla en el portátil, teléfono o tableta que vayas a llevar. Que la prueba funcione en el ordenador no dice nada sobre los archivos multimedia guardados en el teléfono.

1. Mientras tengas conexión, abre la aplicación de Anki instalada y sincroniza. Si el dispositivo es nuevo, completa primero la descarga inicial de la colección.
2. Espera a que termine la sincronización de los archivos multimedia. No te detengas en cuanto aparezcan los nombres de los mazos.
3. Abre todos los mazos que necesites. Prueba tarjetas con imágenes, audio, fuentes personalizadas y cualquier comportamiento especial de las plantillas que utilices.
4. Activa el modo avión o desactiva todas las conexiones de red.
5. Cierra Anki por completo, vuelve a abrirlo y entra en el mazo que necesites. Así detectarás si el flujo solo funcionaba porque la pantalla ya estaba abierta.
6. Repasa varias tarjetas. Añade una nota de prueba con un nombre fácil de reconocer y haz un cambio de texto que no afecte a nada importante.
7. Cierra la aplicación y vuelve a abrirla sin salir del modo sin conexión. Confirma que los repasos, la nota nueva, el cambio y los archivos multimedia locales sigan allí.
8. Prueba cualquier diccionario, función de texto a voz o complemento que pienses utilizar. Anota qué partes necesitan internet.
9. Recupera la conexión y sincroniza este dispositivo. Espera a que terminen las fases de la colección y de los archivos multimedia.
10. Sincroniza un segundo dispositivo. Antes de eliminar el contenido de prueba, comprueba allí la nota, el cambio, el estado de los repasos y los archivos multimedia.

No aproveches esta prueba para rediseñar los tipos de nota en dos dispositivos. El objetivo es comprobar el flujo de trabajo del viaje: la colección correcta está guardada en local, los archivos multimedia importantes se abren, el trabajo sin conexión sobrevive a un reinicio y la sincronización posterior lo transfiere.

## Anki puede acompañarte de viaje si preparas el dispositivo

Las aplicaciones instaladas de Anki son una buena opción para viajar si quieres llevar la colección local completa, no solo un pequeño grupo de tarjetas en caché. Los límites son claros: el dispositivo debe tener de antemano la colección y los archivos multimedia, AnkiWeb solo funciona en línea y las funciones de las tarjetas que consultan servicios externos siguen necesitando conexión.

Si estás comparando herramientas para un viaje, la [comparación de aplicaciones de flashcards sin conexión](/es/blog/best-offline-flashcards-app/) somete cinco productos a las mismas pruebas de tarjetas, edición, progreso, archivos multimedia y sincronización posterior. Si buscas otro sistema de estudio por motivos que van más allá de la conectividad, consulta [Anki frente a Flashcards Open Source App](/es/blog/anki-vs-flashcards-open-source-app/).

La respuesta práctica a «¿Se puede usar Anki sin conexión?» es sí: en ordenadores, iPhone, iPad y Android, siempre que ese dispositivo concreto ya tenga la colección y los archivos multimedia que necesitas. Sincroniza antes de salir, haz una prueba en modo avión y, cuando recuperes internet, sincroniza primero el dispositivo que contiene tu trabajo sin conexión.
