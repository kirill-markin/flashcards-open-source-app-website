---
title: "Alternativa gratuita a Quizlet en 2026: ¿qué es realmente gratis?"
description: "¿Es Flashcards una alternativa gratuita a Quizlet? Descubre qué incluye la beta alojada, sus límites, las reglas de importación y exportación, el coste del autoalojamiento y qué funciones de Quizlet faltan."
image: "/blog/free-quizlet-alternative.png"
date: "2026-06-20"
updated: "2026-08-03"
keywords:
  - "alternativa gratuita a Quizlet"
  - "alternativa a Quizlet gratis"
  - "app de flashcards gratis"
  - "alternativa a Quizlet Plus"
  - "alternativa de código abierto a Quizlet"
  - "app de flashcards FSRS gratis"
  - "precios de Flashcards"
  - "coste de autoalojar flashcards"
---

La versión alojada de [Flashcards](/) cuesta 0 $ durante la beta y no pide tarjeta de crédito. Incluye IA y sincronización, y el plan no limita el número de tarjetas o archivos ni el almacenamiento total. Por eso puede servir como **alternativa gratuita a Quizlet** para estudiar con tarjetas de anverso y reverso. Eso sí, «gratis» requiere dos aclaraciones: siguen existiendo límites técnicos y no se promete que todas las funciones de la versión alojada vayan a ser gratuitas para siempre.

El software también tiene licencia MIT, por lo que autoalojarlo no exige pagar una licencia. Mantener un despliegue de producción, en cambio, sí cuesta dinero. Y si dependes de los modos Learn o Test de Quizlet, de los conjuntos públicos, de su suite de estudio con IA o de sus herramientas para el aula, Flashcards no ofrece sustitutos equivalentes.

> **Aviso de transparencia:** Soy Kirill Markin y desarrollo Flashcards. Este artículo se centra en el precio y en los límites de lo gratuito, incluidas las funciones que Quizlet sí ofrece y Flashcards no.

**Datos comprobados:** 3 de agosto de 2026.

![Alternativa gratuita a Quizlet representada como una caja de tarjetas y archivos multimedia que pasa por un medidor de tamaño, mientras el estado de repaso queda junto a la infraestructura de autoalojamiento](/blog/free-quizlet-alternative.png)

## Cuánto cuesta esta alternativa gratuita a Quizlet, en una tabla

| Pregunta | Respuesta |
|---|---|
| ¿La aplicación alojada es gratuita? | Sí, durante la beta. No se necesita tarjeta de crédito. |
| ¿La IA y la sincronización son gratuitas? | Están incluidas durante la beta. |
| ¿Existe un límite de tarjetas o almacenamiento en el plan gratuito? | No. Durante la beta, el plan no limita el número de tarjetas o archivos ni el almacenamiento total. Sí se aplican límites por archivo y por operación. |
| ¿El autoalojamiento es gratuito? | La licencia del software no tiene coste. Los servicios de AWS, los de proveedores externos y las tareas de operación sí cuestan dinero. |
| ¿Puede Flashcards importar conjuntos de Quizlet? | No. Solo importa su propio paquete `flashcards.zip`. |
| ¿Sustituye todas las funciones importantes de Quizlet? | No. Hay carencias importantes en Learn, Test, la biblioteca pública de conjuntos, la suite de estudio con IA de Quizlet y las herramientas para el aula. |

La promesa a largo plazo es más limitada que «todo será gratis para siempre». La creación y el repaso básicos de tarjetas seguirán siendo gratuitos. Más adelante, un mayor uso de la IA podría requerir tu propia clave de API de un proveedor o una opción de pago. La oferta de la beta no garantiza que todas las funciones de la versión alojada sigan siendo siempre gratuitas.

Si necesitas comparar las funciones una por una, consulta la comparativa más amplia de [alternativas a Quizlet](/blog/quizlet-alternative/). Aquí nos centramos en el precio, los límites, la portabilidad y las funciones que faltan, porque también pueden cambiar el valor de lo «gratuito».

## ¿Qué es gratis en la beta alojada?

Actualmente puedes registrarte y usar el flujo principal de estudio sin pagar:

- crear y editar tarjetas de anverso y reverso
- repasar con el algoritmo FSRS-6
- guardar en local los cambios en las tarjetas y los repasos, y sincronizarlos después entre la web, iOS y Android
- adjuntar a las tarjetas archivos multimedia relacionados
- usar el chat con IA y adjuntar archivos
- conectar clientes de IA mediante MCP
- usar la Agent API
- importar y exportar paquetes de espacios de trabajo de Flashcards

Durante la beta no hay un plan de pago para desbloquear la IA o la sincronización entre dispositivos. La [página de precios](/pricing/) recoge la información vigente sobre la oferta alojada y sus límites futuros.

Que una función esté incluida no significa que también funcione sin conexión. Los cambios en las tarjetas y los repasos pueden guardarse en local y sincronizarse cuando vuelva la conexión. Las llamadas a la IA y la propia sincronización siguen necesitando acceso a la red.

## La aplicación alojada gratuita tiene límites técnicos

Que el plan no imponga cuotas no significa que no existan límites técnicos. Flashcards no pone a las cuentas beta un máximo total de tarjetas, archivos o almacenamiento. Cada solicitud y cada transferencia sí tienen límites de tamaño.

Estos son los límites actuales de los paquetes `flashcards.zip`:

| Operación del paquete | Límite |
|---|---:|
| Tarjetas en un paquete | 5.000 |
| Archivos multimedia en un paquete | 10.000 |
| Un archivo multimedia | 16 MiB |
| Archivos multimedia combinados en un paquete | 64 MiB |
| Archivo ZIP importado | 80 MiB |

Estas cifras se aplican a una sola operación de importación o exportación. No son límites de tarjetas, archivos o almacenamiento para toda la cuenta, ni la frontera de un plan de pago oculto. Un espacio de trabajo más grande puede requerir varios paquetes. Las solicitudes a la IA y sus archivos adjuntos también tienen límites propios por petición y restricciones sobre los tipos de archivo compatibles.

## La importación y la exportación son más limitadas de lo que parecen

Flashcards tiene un único formato nativo de transferencia: el paquete de espacio de trabajo `flashcards.zip`.

Puede importar un paquete válido exportado por Flashcards. No puede importar conjuntos de Quizlet, CSV, TSV ni texto delimitado genérico. Quizlet permite [crear conjuntos importando texto delimitado](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content); Flashcards no tiene una pantalla equivalente para importar texto.

El paquete contiene el material de estudio que Flashcards puede reconstruir:

- tarjetas
- las etiquetas de las tarjetas
- los archivos multimedia referenciados por las tarjetas

Lo que no incluye es el estado asociado a ese contenido:

- historial de repasos
- estado de la programación de FSRS
- ajustes del espacio de trabajo
- estructuras completas de los mazos
- datos de la cuenta

Así, `flashcards.zip` permite mover material de estudio seleccionado entre espacios de trabajo alojados y autoalojados de Flashcards. No puede reproducir una cuenta ni conservar exactamente la misma programación de repasos. Tampoco sirve como copia de seguridad para recuperación ante desastres: quien gestione una instancia autoalojada seguirá necesitando copias de seguridad de la base de datos y de los archivos multimedia.

### Los conjuntos existentes de Quizlet deben reconstruirse

Quizlet permite a los creadores [exportar los términos y las definiciones de sus propios conjuntos](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) desde el sitio web. No permite exportar conjuntos copiados ni imágenes.

El resultado es texto, no un paquete que Flashcards pueda importar. Puedes reconstruir a mano las tarjetas que elijas o pasar el texto al chat con IA de Flashcards para que prepare borradores de tarjetas de anverso y reverso. En ambos casos tendrás que revisar y guardar las tarjetas reconstruidas; ninguno de los dos métodos es una importación directa.

La [guía para exportar desde Quizlet](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/) explica el proceso de limpieza. No es una migración sin pérdidas: la exportación omite las imágenes y el estado de estudio, y Flashcards no puede procesar ese texto como su formato nativo de transferencia.

## Autoalojar no cuesta una licencia, pero sí genera gastos

El código de Flashcards tiene licencia MIT. Puedes inspeccionarlo, modificarlo y desplegarlo sin comprar una licencia de software. Los servidores de producción y el trabajo necesario para mantenerlos se pagan aparte.

La vía compatible para producción es el stack de AWS CDK del repositorio. La configuración con Docker y PostgreSQL está pensada para el desarrollo local; no es un atajo documentado para desplegar en producción.

Quien administre una instancia de producción se hace responsable de:

- los servicios de base de datos, almacenamiento, computación y red de AWS
- un dominio y la configuración de DNS
- el envío de correos electrónicos
- la monitorización y las alertas
- el uso y las credenciales opcionales de proveedores de IA
- la gestión de secretos
- las copias de seguridad de la base de datos y los archivos multimedia, incluidas las pruebas de restauración
- las actualizaciones, las migraciones, las tareas de seguridad y el tiempo de administración

El stack automatiza partes del despliegue, pero no elimina estas responsabilidades. No hay una estimación mensual universal que resulte útil: la región, el tráfico, el almacenamiento, la política de copias de seguridad, el volumen de correo electrónico, el uso de la IA y las decisiones de quien administre el sistema cambian la factura. La [guía de autoalojamiento](/docs/self-hosting/) documenta la arquitectura de AWS y los límites del desarrollo local.

En resumen, el autoalojamiento cambia quién paga y administra el stack. No convierte la infraestructura en la nube en un servicio gratuito. Si no necesitas controlar la infraestructura, la beta alojada te ahorra ese trabajo mientras siga siendo gratuita.

## Las funciones importantes de Quizlet que no tienen equivalente

Ahora mismo, Flashcards no tiene un equivalente directo para cuatro áreas de Quizlet que pueden pesar más que el precio:

- los modos específicos Learn y Test, incluido el flujo generado de preguntas de opción múltiple
- una biblioteca pública comparable de conjuntos de estudio
- Study Guides, Practice Tests y Ask Quizlet, la suite de IA de Quizlet
- el ecosistema educativo de Quizlet Live, las clases y los informes de progreso

La descripción general de Quizlet presenta [Learn, Test, Practice Tests, Study Guides y Quizlet Live](https://help.quizlet.com/hc/en-us/articles/360030841732-Studying-on-Quizlet). El acceso gratuito a Quizlet también tiene límites: quienes no tienen suscripción reciben un número limitado de rondas de Learn y un Test de práctica por conjunto. Los estudiantes de una clase gestionada por un docente que cumpla los requisitos pueden recibir [acceso ilimitado y sin anuncios a Learn y Test para los conjuntos de la clase](https://help.quizlet.com/hc/en-us/articles/34270983035149-Free-student-access-to-Learn-and-Test-modes).

Si los modos guiados, el material público ya preparado o las herramientas para el aula son esenciales en tu rutina de estudio, una cuenta gratuita de Flashcards no los sustituye. La beta cubre otro flujo de trabajo: tarjetas de anverso y reverso, repasos con FSRS-6, guardado local y sincronización con un enfoque offline-first, archivos multimedia, chat con IA y acceso para agentes.

## La respuesta honesta sobre esta alternativa gratuita a Quizlet

Durante la beta, Flashcards es una **alternativa gratuita a Quizlet** para estudiar con tarjetas de anverso y reverso, repasar con FSRS-6, trabajar con un enfoque offline-first en la web y en dispositivos móviles, sincronizar contenido, usar archivos multimedia y recibir ayuda de la IA. No se necesita tarjeta de crédito y el plan no limita el número de tarjetas o archivos ni el almacenamiento total. Los paquetes y las solicitudes sí tienen límites técnicos.

No es un sustituto equivalente de los modos Learn o Test de Quizlet, su biblioteca pública de conjuntos, sus formatos de estudio con IA o su sistema para el aula. El material existente de Quizlet también debe reconstruirse a partir de las exportaciones de texto permitidas en vez de importarse directamente.

Los costes se entienden mejor por separado. Hoy, la beta alojada cuesta 0 $. La creación y el repaso básicos de tarjetas seguirán siendo gratuitos, mientras que un mayor uso de la IA podría requerir más adelante tu propia clave de API de un proveedor o una opción de pago. El autoalojamiento elimina el coste de la licencia de software, pero añade la infraestructura, los servicios de terceros, el mantenimiento y el tiempo de administración. Si estos límites encajan con lo que necesitas, [abre Flashcards](https://app.flashcards-open-source-app.com/) y prueba la versión alojada.
