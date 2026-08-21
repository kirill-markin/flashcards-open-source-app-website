---
title: "¿RemNote es de código abierto en 2026? Código, datos locales y autoalojamiento"
description: "El núcleo de RemNote no es de código abierto. Descubre qué abarca su código público en GitHub, qué control ofrecen las bases de conocimientos locales y las exportaciones, y qué no puedes autoalojar."
date: "2026-08-21"
image: "/blog/is-remnote-open-source.png"
keywords:
  - "RemNote es de código abierto"
  - "RemNote código abierto"
  - "código de RemNote en GitHub"
  - "autoalojar RemNote"
  - "base de conocimientos local de RemNote"
  - "exportación de RemNote"
  - "alternativa a RemNote de código abierto"
---

¿RemNote es de código abierto? **No, al menos no el núcleo del producto.** A fecha del 21 de agosto de 2026, RemNote no publica su cliente ni su servidor principales como un proyecto con una licencia de código abierto.

RemNote sí publica código en GitHub y ofrece formas útiles de control: bases de conocimientos exclusivamente locales, aplicaciones que funcionan sin conexión, copias de seguridad, exportaciones, complementos y un servidor MCP local. Pero nada de eso proporciona una copia del producto completo que puedas compilar. La promesa de publicar todo el código si la empresa deja de operar también es condicional: hoy no concede derechos sobre el código fuente ni permite autoalojar el producto.

**Datos comprobados:** 21 de agosto de 2026.

![Un fotógrafo maneja una cámara vintage cerrada junto a objetivos intercambiables, negativos, sobres de archivo y un cable disparador en un cuarto oscuro](/blog/is-remnote-open-source.png)

## Primero, distingue los siete tipos de control

La pregunta sobre si **RemNote es de código abierto** se presta a confusión porque varias propiedades útiles del producto pueden parecer formas equivalentes de control:

- **Gratuito** se refiere al precio. RemNote tiene un [plan gratuito](https://www.remnote.com/pricing), pero un programa puede ser gratuito y propietario.
- **Sin conexión** indica si la aplicación sigue funcionando sin acceso a la red.
- **Local** indica dónde se guarda una base de conocimientos o un archivo concretos.
- **Exportable** significa que puedes extraer una copia de parte o de la totalidad de tus datos en formatos documentados.
- **Ampliable mediante complementos** significa que quienes desarrollan pueden añadir funciones a través de una API.
- **De código abierto** significa que el código fuente correspondiente se publica con una licencia que concede derechos para usarlo, estudiarlo, modificarlo y redistribuirlo.
- **Autoalojable** significa que existe un despliegue ejecutable que puedes operar en una infraestructura bajo tu control.

RemNote ofrece las cinco primeras propiedades de forma significativa. El núcleo del producto no ofrece actualmente las dos últimas.

## Qué puedes controlar en RemNote y hasta dónde

| Capacidad | Qué controlas hoy | Dónde termina ese control |
| --- | --- | --- |
| **Núcleo del producto** | Puedes usar las aplicaciones oficiales para web, escritorio y móvil. | El código fuente del cliente y del servidor oficiales no se publica actualmente como un proyecto de código abierto. |
| **Código público en GitHub** | Puedes inspeccionar complementos, plantillas, temas, traducciones, código de soporte y bifurcaciones públicos. Algunos repositorios tienen licencias de código abierto. | No proporcionan el cliente principal de RemNote, el servicio alojado ni un despliegue completo. Que el código sea público no lo convierte automáticamente en código abierto si no tiene una licencia confirmada. |
| **Base de conocimientos local** | En la aplicación de escritorio, la base de conocimientos permanece en tu ordenador y no pasa por los servidores de RemNote. | Depende de la aplicación de escritorio propietaria, no se sincroniza con otros dispositivos y las integraciones opcionales pueden tener sus propios flujos de datos. |
| **Uso sin conexión** | Las aplicaciones de escritorio y móvil permiten editar notas y repasar tarjetas después de instalarlas e iniciar sesión; la aplicación de escritorio almacena una copia local completa de los archivos multimedia. | El modo sin conexión no proporciona el código fuente. No puedes abrir desde cero la aplicación web sin conexión; además, los archivos multimedia que no estén en caché en móvil o web, la mayoría de las funciones de IA y los complementos tienen limitaciones sin conexión. |
| **Archivos y copias de seguridad locales** | La aplicación de escritorio guarda en el disco la base de datos de trabajo, los archivos subidos y las copias de seguridad locales. | Disponer de archivos de recuperación no proporciona una aplicación RemNote ni un servidor de sincronización que puedas autoalojar. |
| **Exportaciones** | Puedes exportar datos en el formato nativo de RemNote, OPML, paquetes de Anki que solo contienen tarjetas, HTML, Markdown y texto. | Ninguna exportación reproduce por sí sola el producto. Las exportaciones completas omiten actualmente las imágenes y los PDF. |
| **Servidor MCP local** | Un agente de IA para escritorio puede leer la base de conocimientos abierta o, si concedes ese modo de acceso, leerla y escribir en ella. | RemNote debe permanecer abierto; el conector no expone el código fuente de la aplicación, un despliegue del servidor, el contenido de las imágenes ni la cola de repaso. |
| **Sincronización alojada** | Las bases de conocimientos sincronizadas funcionan en varios dispositivos y reciben copias de seguridad en la nube. | RemNote opera el servicio. No hay ningún servidor oficial de sincronización autoalojado documentado. |
| **Promesa en caso de cierre** | RemNote afirma que publicará todo el código si la empresa deja de operar. | Esa condición no se ha cumplido, por lo que la promesa no constituye una publicación ni una licencia de código abierto vigente. |

Este mapa aclara más que una simple etiqueta de «sí» o «no». A un estudiante que quiera proteger notas sensibles puede importarle sobre todo el almacenamiento local. Quien necesite auditar el comportamiento de la aplicación necesita el código fuente. Y quien quiera autoalojarla necesita un servicio desplegable, documentación y una vía de actualización. Resolver uno de estos requisitos no resuelve los demás.

## Qué contiene realmente la organización de RemNote en GitHub

La [organización oficial de RemNote en GitHub](https://github.com/remnoteio) tiene actualmente 17 repositorios públicos. Incluyen plantillas de complementos, temas y fragmentos de código, un repositorio archivado de traducciones, complementos, código de actualización o soporte y bifurcaciones de bibliotecas auxiliares. El [repositorio oficial de complementos](https://github.com/remnoteio/remnote-official-plugins), por ejemplo, contiene ejemplos documentados creados con el SDK de complementos de RemNote.

Ese código es útil. Ofrece ejemplos a quienes crean complementos, muestra algunos de los puntos de extensión disponibles y permite que la comunidad mejore las herramientas que rodean RemNote.

Pero no abre el núcleo de la aplicación. No encontré ningún repositorio público oficial que permita compilar el cliente de escritorio completo, reproducir la aplicación web alojada, desplegar el servicio de sincronización de RemNote o seguir todo el recorrido de los datos en el servidor.

Las licencias también varían. GitHub identifica licencias MIT en varios proyectos, como la plantilla de complementos para React y el complemento para mandos de videojuegos. Actualmente no detecta ninguna licencia en `remnote-official-plugins`, el repositorio archivado de traducciones y algunos otros repositorios públicos. Esto no demuestra que esos proyectos nunca puedan utilizarse bajo condición alguna, pero sí significa que no deberías calificar todos los repositorios públicos de RemNote como código abierto. Comprueba el repositorio y su licencia antes de reutilizar el código.

Esta conclusión se basa en los repositorios públicos oficiales y la documentación actual de RemNote. No afirma nada sobre el código privado ni los sistemas internos de la empresa.

## La promesa para el caso de cierre es útil, pero no es una licencia actual

En abril de 2023, RemNote publicó un compromiso de continuidad de tres partes. Su [cláusula de acceso garantizado](https://help.remnote.com/en/articles/6085006-can-i-trust-you-ll-be-around-for-the-long-haul) afirma que, si RemNote dejara de operar algún día, la empresa publicaría todo el código como un proyecto de código abierto para que la gente pudiera ejecutar la aplicación de escritorio o alojar RemNote de forma independiente.

El momento en que ocurriría cambia el significado. La declaración describe una secuencia futura:

1. RemNote tendría que dejar de operar.
2. La empresa publicaría entonces el código.
3. La comunidad podría trabajar a partir de esa futura publicación.

Hasta que se cumpla esa condición y aparezca el código con una licencia real, la promesa no equivale a tener acceso al código fuente. No permite auditar la implementación principal actual, mantener una bifurcación al día ni desplegar un servidor de RemNote publicado oficialmente.

La promesa puede reducir el riesgo de perder el acceso a largo plazo. Aun así, no debe describirse como «RemNote es de código abierto». Este es un análisis práctico del código fuente y del alcance del producto, no asesoramiento jurídico.

## Una base de conocimientos local sí establece un límite de privacidad real

Una [base de conocimientos local de RemNote](https://help.remnote.com/en/articles/7867942-multiple-knowledge-bases) solo está disponible en la aplicación de escritorio y permanece en el disco duro de tu ordenador. RemNote afirma que nunca se sincroniza con otro dispositivo ni pasa por los servidores de la empresa. Para el trabajo que debe mantenerse fuera de la nube de RemNote, esto supone un control real.

Hay una contrapartida práctica: esa misma base de conocimientos no está disponible en el teléfono, la tableta u otro ordenador mediante la sincronización de RemNote. Además, tú eres responsable de mantener copias de seguridad fuera del dispositivo. La función te da la custodia local de los datos, no una nube privada de RemNote.

La diferencia puede expresarse así:

> Una base de conocimientos local de RemNote puede permanecer fuera de los servidores de RemNote y, aun así, depender de su software propietario para abrirla y editarla.

Para las bases de conocimientos sincronizadas, la [documentación sobre privacidad](https://help.remnote.com/en/articles/7974260-privacy-of-your-notes) describe un límite distinto. RemNote afirma que los datos se cifran en reposo y se protegen mediante TLS durante la transmisión, pero actualmente no ofrece cifrado de extremo a extremo. El personal solo accede al contenido de las notas en casos explícitos, como un acceso temporal para prestar soporte o cuando envías una copia al equipo de soporte.

El almacenamiento local tampoco garantiza que ninguna función pueda enviar datos a otro lugar. Las funciones de IA, los complementos y las integraciones de conversión de archivos de RemNote pueden introducir flujos de datos independientes. Revisa sus ajustes y permisos incluso cuando la base de conocimientos subyacente sea local.

La privacidad y la disponibilidad del código fuente deben evaluarse por separado. Un programa de código cerrado puede mantener un archivo local fuera de los servidores del proveedor. Uno de código abierto también puede enviar datos a un servicio alojado si así está configurado.

## El uso sin conexión aporta resiliencia, no autoalojamiento

El [modo sin conexión de RemNote](https://help.remnote.com/en/articles/6752029-offline-mode) ofrece más que una pestaña del navegador que deja de funcionar cuando desaparece el Wi-Fi. Tras descargar las aplicaciones e iniciar sesión, las versiones de escritorio y móvil permiten editar notas y repasar tarjetas sin conexión durante tanto tiempo como sea necesario. Los cambios realizados en una base de conocimientos sincronizada se suben cuando vuelve la conexión.

La aplicación de escritorio ofrece la experiencia sin conexión más completa porque guarda una copia local de todas las imágenes y los PDF. Las versiones móvil y web usan una caché limitada, por lo que algunos archivos multimedia antiguos pueden no estar disponibles. La aplicación web puede seguir funcionando si ya estaba abierta, pero no puede arrancar sin conexión desde una pestaña cerrada o recargada. La mayoría de las funciones de IA y los complementos tampoco están disponibles sin conexión.

Esto hace que la aplicación de escritorio resulte útil al viajar, trabajar con una conexión inestable o necesitar acceso local a una biblioteca multimedia completa. Pero no crea un servidor de RemNote en tu equipo. Cuando una base de conocimientos sincronizada recupera la conexión, sigue sincronizándose mediante el servicio alojado de RemNote.

Si tu verdadera pregunta es si el flujo de trabajo de RemNote, centrado en las notas y los PDF, justifica ese límite, la [comparativa de alternativas a RemNote](/es/blog/remnote-alternative/) analiza las diferencias entre los productos sin repetirlas aquí.

## Las copias de seguridad y las exportaciones resuelven problemas distintos

La [aplicación de escritorio](https://help.remnote.com/en/articles/6030835-desktop-app) permite consultar la ubicación donde se guarda cada base de conocimientos. La [documentación de RemNote sobre copias de seguridad](https://help.remnote.com/en/articles/6301627-remnote-backups) indica que esa carpeta contiene la base de datos de trabajo, copias de seguridad locales fechadas y los archivos subidos, como imágenes, PDF y audio. Tanto las bases de conocimientos sincronizadas como las locales generan copias de seguridad locales en la aplicación de escritorio. Las bases sincronizadas también reciben copias de seguridad diarias en la nube cuando cambian.

Estas copias sirven principalmente para recuperar los datos. Si la base de conocimientos es importante, guarda otra copia de seguridad fuera del mismo disco: la base de datos local y sus copias pueden perderse a la vez si falla la unidad.

Una [exportación de RemNote](https://help.remnote.com/en/articles/7898019-exporting-notes) resuelve la portabilidad:

- **RemNote (Complete)** conserva la estructura nativa para volver a importar los datos en RemNote, pero actualmente omite las imágenes y los PDF.
- **OPML** traslada un esquema a otras herramientas compatibles con el formato.
- **Anki (.apkg)** exporta solo las tarjetas; las viñetas que no contengan tarjetas se quedan fuera.
- **HTML, Markdown y texto** permiten leer el contenido de las notas en más lugares, aunque cada formato conserva menos estructura y formato que el anterior.

Antes de confiar en una exportación de RemNote como plan de salida, pruébala con un documento pequeño pero exigente: viñetas anidadas, referencias, tarjetas, imágenes y un PDF. Abre el resultado en el destino previsto y comprueba qué se ha conservado. Descargar un archivo demuestra que la exportación funciona; no demuestra que todo tu flujo de trabajo pueda continuar en otro lugar.

## El servidor MCP local marca el límite de la integración

El [servidor MCP integrado de RemNote](https://help.remnote.com/en/articles/16424066-connecting-ai-agents-to-remnote-with-mcp) permite que un cliente de IA para escritorio trabaje con la base de conocimientos que esté abierta en RemNote. Puedes conceder acceso de solo lectura o de lectura y escritura. Las solicitudes se envían a un punto de conexión local (endpoint), no a los servidores de RemNote.

Hay límites deliberados. RemNote debe permanecer abierto, el agente solo puede acceder a la base de conocimientos activa y el conector no funciona a través de las aplicaciones web o móviles de RemNote. Tampoco puede acceder a la cola de repaso ni leer el contenido de las imágenes. Las instrucciones de configuración contienen un token de acceso, así que protégelo como cualquier otra credencial. Los datos que lea el agente también estarán sujetos a la política de privacidad de ese cliente de IA.

Es una automatización local útil. No demuestra que la aplicación RemNote sea de código abierto ni permite que un agente ejecute RemNote sin la aplicación de escritorio propietaria. Una API o un conector exponen determinadas operaciones; el acceso al código fuente expone la implementación. Resuelven problemas distintos.

## ¿Se puede autoalojar RemNote?

En la documentación actual no aparece ninguna versión de **RemNote que pueda autoalojarse** y cuente con soporte oficial. RemNote no documenta un despliegue autoalojado completo ni un servidor oficial de sincronización autoalojado. Las opciones documentadas son:

- una base de conocimientos exclusivamente local en la aplicación de escritorio, sin sincronización entre dispositivos;
- una base de conocimientos sincronizada mediante el servicio alojado de RemNote;
- el punto de conexión MCP local de la aplicación de escritorio para un cliente de IA.

Ninguna de estas opciones equivale a un servicio RemNote autoalojado. La base de conocimientos local no ofrece sincronización, MCP requiere que la aplicación de escritorio esté en ejecución y las ediciones sin conexión vuelven a la sincronización alojada cuando una base sincronizada recupera la conexión.

Esta conclusión se refiere a la documentación y al alcance del producto; no afirma nada sobre todos los servicios que RemNote pueda ejecutar internamente. Una edición autoalojada con soporte oficial necesitaría instrucciones oficiales de despliegue, código o paquetes de servidor, condiciones de licencia, una vía de actualización y una lista clara de clientes compatibles. No encontré ninguna oferta actual de este tipo en la documentación oficial ni en la organización de GitHub de RemNote.

## ¿Qué tipo de control necesitas realmente?

RemNote puede seguir siendo la opción adecuada cuando las notas conectadas, los enlaces entrantes, la lectura de PDF, una aplicación nativa de escritorio y un flujo de estudio maduro importan más que el acceso al código fuente del núcleo. Para una única base de conocimientos que deba permanecer en un ordenador y fuera de los servidores de RemNote, el modo exclusivamente local es una opción concreta. Para estudiar en varios dispositivos, la sincronización alojada y las aplicaciones sin conexión pueden ofrecer el equilibrio más sencillo.

Busca otro producto cuando uno de estos requisitos sea innegociable:

- inspeccionar o modificar ahora el código fuente completo del cliente y del servidor;
- desplegar la sincronización entre varios dispositivos en una infraestructura que operas tú;
- mantener una bifurcación si el proveedor cambia de rumbo;
- verificar el comportamiento de la aplicación más allá de las interfaces documentadas;
- utilizar cifrado de extremo a extremo para una base de conocimientos sincronizada.

Si necesitas una **alternativa a RemNote de código abierto**, decide qué es innegociable: el espacio de trabajo para notas y PDF o el sistema de tarjetas. El [alcance del código fuente de Anki](/es/blog/is-anki-open-source/) incluye clientes abiertos para escritorio y Android, además de un servidor de sincronización autoalojado, pero no todos los componentes de Anki son abiertos. La [guía de aplicaciones de tarjetas de código abierto](/es/blog/best-open-source-flashcard-apps-2026/) compara los límites de licencia y alojamiento de varios proyectos. Ninguna de estas opciones sustituye automáticamente la base de conocimientos conectada de RemNote.

## Aviso de transparencia: desarrollo Flashcards

> **Aviso de transparencia:** Soy Kirill Markin y desarrollo [Flashcards](https://flashcards-open-source-app.com/). Su repositorio con licencia MIT incluye la aplicación web, los clientes para iOS y Android, la autenticación, el backend, la sincronización, el servicio MCP y la infraestructura de AWS. El código que Flashcards publica hoy abarca más que el de RemNote, pero eso no convierte Flashcards en el mejor producto para todos los flujos de estudio.

Flashcards cubre un flujo de aprendizaje más limitado. No tiene una base de conocimientos de notas conectadas, lector de PDF, aplicación nativa de escritorio ni importador directo de RemNote. RemNote es más maduro y mucho más completo cuando las notas, las referencias y los documentos fuente ocupan el centro del estudio. Cambiar solo por la licencia puede suponer la pérdida del flujo de trabajo que daba utilidad a la colección.

Flashcards tiene una [vía documentada para autoalojar toda la pila tecnológica en AWS](/es/docs/self-hosting/), pero no es una solución local lista para desplegarse con un solo comando. Quien lo opera se hace cargo de AWS, Cloudflare, la autenticación, la entrega de correo electrónico, la monitorización, las actualizaciones, la recuperación de la base de datos y las compilaciones independientes de las aplicaciones nativas. Su [conector MCP remoto](/es/docs/mcp-connector/) permite acceder a tarjetas y mazos sin mantener abierta una aplicación de escritorio; el conector local de RemNote accede a la base de conocimientos activa, pero no a la cola de repaso. Son enfoques de producto distintos, no una simple escala de mejor a peor.

Si la privacidad importa más que la marca, [tarjetas privadas con IA](/es/blog/private-flashcards-with-ai/) ofrece una lista de comprobación para distinguir el almacenamiento local, la sincronización, el acceso del proveedor de IA y el autoalojamiento dentro de un flujo de estudio.

## La respuesta honesta

¿RemNote es de código abierto en 2026? **No, al menos no el núcleo del producto.** Sus repositorios públicos oficiales incluyen complementos, plantillas y código auxiliar útiles. Las bases de conocimientos locales, el uso sin conexión, las copias de seguridad locales, las exportaciones y MCP siguen ofreciendo un control significativo sobre los datos y los flujos de trabajo.

Estas funciones no conceden acceso al código fuente completo de la aplicación en la actualidad, y RemNote no documenta ningún producto autoalojado ni servidor de sincronización con soporte oficial. La promesa de publicar todo el código si en el futuro deja de operar es una promesa de continuidad, no una licencia vigente.

Elige RemNote cuando sus notas conectadas, sus PDF, su aplicación de escritorio y su madurez compensen ese límite propietario. Elige una alternativa de código abierto cuando necesites poder auditar, modificar o redistribuir el código hoy, o gestionar por tu cuenta el servicio completo, y no puedas renunciar a ese requisito.
