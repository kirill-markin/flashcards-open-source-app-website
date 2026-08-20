---
title: "¿Anki es de código abierto en 2026? Escritorio, AnkiMobile, AnkiDroid y AnkiWeb"
description: "Anki para escritorio y AnkiDroid son de código abierto; AnkiMobile y AnkiWeb no. Compara licencias, precio, uso sin conexión y el servidor de sincronización autoalojado."
date: "2026-08-20"
image: "/blog/is-anki-open-source.png"
keywords:
  - "Anki es de código abierto"
  - "Anki código abierto"
  - "licencia de Anki"
  - "AnkiMobile es de código abierto"
  - "AnkiDroid es de código abierto"
  - "AnkiWeb es de código abierto"
  - "autoalojar Anki"
  - "servidor de sincronización de Anki"
---

¿Anki es de código abierto? **Anki para escritorio sí, y AnkiDroid también. La aplicación completa de AnkiMobile y el servicio alojado AnkiWeb no lo son.** El código público de Anki también incluye un servidor oficial de sincronización que puedes autoalojar, pero ese servidor solo sustituye la sincronización. No es una copia de AnkiWeb lista para desplegar.

Es fácil perder de vista estos matices. Encontrar Anki en GitHub te dice algo sobre la aplicación de escritorio y su servidor de sincronización; no convierte en código abierto todos los productos que llevan el nombre Anki.

**Datos verificados:** 20 de agosto de 2026.

![Un constructor naval inspecciona las cuadernas expuestas de un barco de madera junto a un bote comunitario, una lancha cerrada y un pequeño muelle privado de transferencia](/blog/is-anki-open-source.png)

## La respuesta útil, componente por componente

Código abierto, gratuito, sin conexión y autoalojable son cuatro propiedades distintas. Una aplicación puede ser de pago y funcionar sin conexión, o ser gratuita aunque su código fuente siga siendo privado. Este es el panorama en 2026.

| Componente | Código fuente y licencia | Precio | Uso sin conexión | Qué puedes autoalojar o controlar |
| --- | --- | --- | --- | --- |
| **Anki para escritorio** en Windows, macOS y Linux | **Código abierto.** El código principal se distribuye bajo AGPL-3.0-or-later, con las excepciones indicadas y componentes incluidos bajo otras licencias. | **Gratis.** | **Sí.** La colección, los datos de planificación de los repasos y los archivos multimedia descargados se guardan en el dispositivo. | Puedes compilar o modificar el cliente. El mismo repositorio contiene el servidor oficial de sincronización. |
| **AnkiMobile** para iPhone y iPad | **Código fuente no público.** La aplicación oficial completa para iOS no es de código abierto. | **De pago.** El precio indicado en Estados Unidos es un pago único de 25 dólares; los precios locales de la App Store y los impuestos varían. | **Sí.** Puedes repasar cuando la colección y los archivos multimedia necesarios ya están en el dispositivo. | No puedes recompilar la aplicación oficial a partir de código publicado, pero sí conectarla al servidor oficial de sincronización autoalojado. |
| **AnkiDroid** para Android | **Código abierto.** Su repositorio indica GPL-3.0 para el proyecto principal, AGPL-3.0 para parte del código del backend y LGPL-3.0 para su API. | **Gratis.** | **Sí.** Mantiene una colección local en el dispositivo Android. | Puedes inspeccionar el código, crear una bifurcación y contribuir a AnkiDroid, además de conectarlo a un servidor de sincronización compatible y autoalojado. |
| **AnkiWeb** | **Código fuente no público.** El responsable de Anki ha dicho explícitamente que AnkiWeb no es de código abierto. | **Gratis.** | **No.** Es un servicio alojado que funciona en el navegador. | No existe un paquete oficial para desplegar por tu cuenta el servicio AnkiWeb completo. |
| **Servidor oficial de sincronización de Anki** | **Código abierto.** Su código está en el repositorio de Anki y se rige por las licencias de ese repositorio. | **Sin coste de software.** Tú proporcionas y pagas la máquina, el almacenamiento y la red. | No es un cliente de estudio. | Puedes alojar la sincronización de colecciones y archivos multimedia para clientes compatibles. No incluye la interfaz de AnkiWeb en el navegador. |

El [sitio web oficial de Anki](https://apps.ankiweb.net/) distingue claramente los productos: AnkiMobile es la aplicación oficial para iOS y sus compras financian el desarrollo de Anki, mientras que AnkiDroid es gratuito y lo desarrollan colaboradores. Que compartan formatos y sean compatibles con la sincronización no significa que formen un único código base.

## Qué te permite hacer la licencia de Anki

El [repositorio ankitects/anki](https://github.com/ankitects/anki) publica el código fuente de la versión para ordenadores. Su [archivo de licencia](https://github.com/ankitects/anki/blob/main/LICENSE) identifica el código principal como GNU Affero General Public License, versión 3 o posterior. También enumera contribuciones bajo licencia BSD y componentes incluidos bajo otras licencias.

Puedes leer el código sujeto a esa licencia, compilarlo, modificarlo y mantener una bifurcación. La AGPL es una licencia con copyleft fuerte, no una licencia permisiva como MIT, así que esas libertades también implican condiciones.

A grandes rasgos, distribuir una versión modificada del código sujeto a la licencia puede obligarte a compartir el código fuente. La AGPL añade además una cláusula de red: si los usuarios interactúan por la red con tu programa modificado, debes ofrecerles el código fuente correspondiente. La [explicación de la AGPL de la Free Software Foundation](https://www.gnu.org/licenses/why-affero-gpl.html) lo cuenta en un lenguaje sencillo. Ejecutar la aplicación de escritorio sin modificar, o hacer un cambio local y privado solo para ti, es una situación distinta de distribuir una bifurcación u operar un servicio modificado para otras personas.

Este es un resumen práctico, no asesoramiento jurídico. Si piensas combinar código de Anki con software propietario, distribuir una compilación modificada u ofrecer un servicio de red modificado, lee la licencia exacta y las excepciones que enumera, y busca asesoramiento jurídico adecuado.

## El relevo gradual de 2026 no cierra el código de escritorio

En febrero de 2026, Damien Elmes [anunció una transición gradual](https://forums.ankiweb.net/t/ankis-growing-up/68610) de las operaciones comerciales de Anki y de la responsabilidad sobre su proyecto de código abierto al equipo de AnkiHub. La describió como una reducción de su papel, no como una salida, y dijo que seguiría participando. El anuncio también indicaba que la gobernanza, la toma de decisiones y el calendario de la transición todavía se estaban definiendo.

Los compromisos públicos sobre el producto fueron más concretos. En una [aclaración posterior](https://forums.ankiweb.net/t/ankis-growing-up/68610/110), Elmes escribió que la versión para ordenadores y las versiones futuras seguirían siendo gratuitas y de código abierto, que la sincronización habitual continuaría siendo gratuita y que AnkiMobile mantendría en Estados Unidos su precio de 25 dólares en un solo pago.

Por tanto, la descripción precisa de 2026 es una transición gradual de responsabilidades, acompañada del compromiso declarado de mantener Anki para escritorio como código abierto. No es un traspaso ya completado con todos los detalles de gobernanza resueltos.

## AnkiMobile es oficial, de pago, funciona sin conexión y tiene código cerrado

AnkiMobile es el cliente oficial para iPhone y iPad. Su código completo no es público; Elmes ha [explicado directamente por qué AnkiMobile no es de código abierto](https://forums.ankiweb.net/t/hide-unhide-decks-poll/44281/20).

Su precio forma parte del modelo de financiación del proyecto en su conjunto. Las [preguntas frecuentes oficiales sobre el precio](https://faqs.ankiweb.net/why-does-ankimobile-cost-more-than-a-typical-mobile-app.html) explican que las ventas de AnkiMobile financian el trabajo en la versión gratuita para ordenadores y en el servicio de sincronización en línea. Por eso, decir que «Anki es gratis» exige indicar también la plataforma: Anki para escritorio, AnkiDroid y AnkiWeb son gratuitos; la aplicación oficial para iOS es de pago.

Que tenga código cerrado no significa que solo funcione en línea. AnkiMobile guarda una colección local, funciona sin conexión una vez que las tarjetas y los archivos multimedia necesarios están en el dispositivo y permite utilizar la URL de un servidor de sincronización personalizado. Son capacidades distintas. La [guía detallada de Anki sin conexión](/es/blog/does-anki-work-offline/) explica cómo preparar los archivos multimedia y sincronizar más adelante.

Lo que no puedes hacer es auditar y recompilar el cliente oficial completo para iOS, corregir un problema específico de iOS en un repositorio público ni distribuir tu propia bifurcación de AnkiMobile a partir de código publicado.

## AnkiDroid es de código abierto y se gobierna de forma independiente

AnkiDroid no es AnkiMobile recompilado para Android. Es un proyecto independiente para Android compatible con las colecciones y la sincronización de Anki. El sitio oficial de Anki indica que lo desarrollan colaboradores; el proyecto AnkiDroid se define como una adaptación semioficial, y el anuncio sobre la transición de 2026 afirma que conservará su gobernanza independiente.

El [repositorio de AnkiDroid](https://github.com/ankidroid/Anki-Android) es público y acepta contribuciones de código y traducciones. Su README enumera las licencias por componente: GPL-3.0 para el proyecto principal, AGPL-3.0 para parte del código del backend y LGPL-3.0 para la API de AnkiDroid.

Para quien quiera desarrollar, la consecuencia es sencilla: los cambios específicos de Android pasan por el proyecto AnkiDroid. No se incorporan al código fuente de AnkiMobile, y no todos los componentes de Android usan la misma licencia que la aplicación de escritorio.

## AnkiWeb es gratuito, pero no es de código abierto

AnkiWeb ofrece cuentas alojadas, sincronización de colecciones y archivos multimedia, y estudio desde el navegador. El ecosistema alojado de Anki también incluye directorios de mazos compartidos y complementos. Es fácil mezclar todos estos servicios públicos cuando alguien dice «AnkiWeb», pero instalar el servidor oficial de sincronización no reproduce ninguno de ellos.

El límite del código fuente no deja lugar a dudas. En una respuesta directa sobre el cliente para navegador, el responsable de Anki dijo que [AnkiWeb no es de código abierto](https://forums.ankiweb.net/t/questions-about-https-ankiweb-net-decks-and-https-ankiuser-net-study/33292/2). No existe un paquete oficial para desplegar el servicio completo.

AnkiWeb tampoco es una aplicación web sin conexión. Para estudiar sin internet, utiliza un cliente de escritorio o móvil preparado de antemano. El acceso gratuito, el código fuente público, el uso sin conexión y el autoalojamiento siguen siendo cuestiones distintas.

## Qué sustituye realmente el servidor de sincronización autoalojado de Anki

Anki ofrece un [servidor oficial de sincronización autoalojado](https://docs.ankiweb.net/sync-server.html). Puedes ejecutar el servidor incluido con Anki para escritorio o instalar una implementación más pequeña en Python o Rust, sin las dependencias de la interfaz gráfica de escritorio. Tú defines los usuarios y las contraseñas, eliges la ubicación del almacenamiento, ejecutas el proceso y configuras los clientes compatibles para que apunten a su URL.

El servidor sustituye el servicio que sincroniza las colecciones y los archivos multimedia entre clientes. **No** te proporciona una copia privada del producto AnkiWeb completo. No incluye:

- la interfaz de estudio de AnkiWeb en el navegador;
- los directorios públicos de mazos compartidos o complementos;
- el sitio web de registro y gestión de cuentas de AnkiWeb;
- un producto de administración web para un centro educativo o una empresa.

Este último punto importa a los equipos. El manual describe el servidor como una función avanzada orientada al uso individual o familiar. Los usuarios se configuran en el servidor, y sus responsables indican que es poco probable que acepten funciones como una API REST o la compatibilidad con bases de datos externas, porque la sencillez es uno de sus objetivos de diseño.

Si necesitas «mantener sincronizados los clientes de escritorio y móviles mediante una infraestructura que controlo», este servidor encaja. Si necesitas «desplegar mi propio AnkiWeb», no. No existe otro paso de instalación que convierta el servidor de sincronización en la aplicación web alojada.

El autoalojamiento también traslada a tus manos el trabajo operativo. El manual advierte que los clientes más recientes pueden depender de cambios en el protocolo de sincronización, por lo que las versiones del servidor y de los clientes deben seguir siendo compatibles. El servidor escucha por HTTP sin cifrar de forma predeterminada; para el acceso remoto, las opciones documentadas incluyen limitarlo a una red de confianza, utilizar una VPN o colocar delante un proxy inverso HTTPS. También te haces cargo de las credenciales, el almacenamiento, las copias de seguridad, las actualizaciones y las pruebas de restauración.

## Elige el código base antes de elegir el problema

Para quienes desarrollan, este pequeño mapa evita muchas búsquedas inútiles:

- El comportamiento de escritorio, el código del planificador de repasos, las plantillas y el servidor oficial de sincronización están en el [repositorio ankitects/anki](https://github.com/ankitects/anki).
- El trabajo específico para Android corresponde al [repositorio de AnkiDroid](https://github.com/ankidroid/Anki-Android).
- Un complemento para escritorio puede ser más fácil de mantener que una bifurcación permanente si los puntos de extensión ya permiten hacer el cambio.
- No existe un repositorio público y completo de AnkiMobile donde aplicar un parche específico de iOS.
- No existe un despliegue oficial de AnkiWeb de código abierto que puedas bifurcar.

Encontrar el código fuente de Anki para escritorio es el principio del mapa, no una prueba de que una pantalla de iOS o una página de AnkiWeb esté en algún lugar de ese repositorio.

## ¿Qué límite te importa?

Para la mayoría de quienes estudian, este modelo mixto de código fuente no es motivo para abandonar Anki. Sus flujos de repaso maduros, complementos, plantillas, documentación y herramientas de migración pueden importar mucho más que tener acceso al código fuente de cada componente.

Si te preocupa la privacidad, empieza por el sistema más pequeño que cubra tus necesidades. Una sola colección sin conexión en un ordenador no requiere un servidor de sincronización. Si varios dispositivos deben sincronizarse mediante una infraestructura que controlas, el servidor oficial es la opción más acotada. Te da más control sobre los datos sincronizados, pero también te hace responsable de la seguridad de la red y de la recuperación.

Si quieres autoalojar el servidor, prueba primero con una cuenta antes de trasladar una colección real. Confirma que todos los clientes puedan conectarse, cifra el tráfico remoto, mantén las versiones alineadas y comprueba que puedas restaurar desde una copia de seguridad tanto los datos de la colección como los archivos multimedia.

Si quieres contribuir, elige primero el componente. Las versiones para escritorio y Android tienen vías públicas de contribución. AnkiMobile y AnkiWeb no publican todo su código para seguir el mismo proceso.

## Una nota sobre Flashcards y el control de todo el stack

> **Aviso de transparencia:** Soy Kirill Markin y desarrollo [Flashcards](https://flashcards-open-source-app.com/). Su [repositorio con licencia MIT](https://github.com/kirill-markin/flashcards-open-source-app) incluye la aplicación web, los clientes para iOS y Android, la autenticación, el backend, la sincronización y la infraestructura de AWS. Eso ofrece un alcance de código fuente y autoalojamiento más amplio que el servidor de Anki, limitado a la sincronización. Flashcards también es mucho más joven y menos maduro, tiene menos complementos y ofrece una compatibilidad más limitada al migrar desde Anki, así que no es la opción ganadora por defecto.

Flashcards cuenta con [documentación para autoalojar todo el stack en AWS](/es/docs/self-hosting/), pero no es un despliegue genérico que se complete con un solo comando. Quien lo opera se hace cargo de AWS, Cloudflare, la autenticación, la entrega de correo electrónico, la recuperación de la base de datos, la monitorización, las actualizaciones y la compilación y distribución independientes de las aplicaciones nativas. La [guía de Flashcards autoalojado](/es/blog/self-hosted-open-source-flashcards-app-for-spaced-repetition/) ofrece una visión más breve del producto, mientras que [Anki frente a Flashcards](/es/blog/anki-vs-flashcards-open-source-app/) explica las diferencias de madurez y de flujo de trabajo.

Si quieres comparar más proyectos, la [guía de aplicaciones de tarjetas de código abierto](/es/blog/best-open-source-flashcard-apps-2026/) aplica las mismas preguntas sobre licencias, uso sin conexión, sincronización, migración y autoalojamiento a varias herramientas.

## La respuesta honesta

¿Anki es de código abierto? **Anki para escritorio y AnkiDroid sí. AnkiMobile y AnkiWeb no.** El servidor oficial de sincronización de Anki es de código abierto y se puede autoalojar, pero sincroniza colecciones y archivos multimedia; no reproduce el sitio web de AnkiWeb.

Para una herramienta madura de estudio local, Anki para escritorio sigue siendo la opción evidente de código abierto. Si buscas sincronización privada entre varios dispositivos, añade el servidor oficial y asume el trabajo operativo. Si necesitas inspeccionar, modificar y desplegar cada cliente y servicio de un mismo stack de producto, Anki no ofrece hoy ese alcance completo.
