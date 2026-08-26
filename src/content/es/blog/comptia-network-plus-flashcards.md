---
title: "Flashcards para CompTIA Network+ (N10-009): puertos, subnetting y PBQ"
description: "Crea flashcards útiles para CompTIA Network+ N10-009 sobre puertos, subnetting, comandos y resolución de problemas, y combínalas con laboratorios y práctica de PBQ."
date: "2026-08-26"
image: "/blog/comptia-network-plus-flashcards.png"
keywords:
  - "flashcards para CompTIA Network+"
  - "flashcards para Network+"
  - "flashcards de N10-009"
  - "puertos y protocolos de Network+"
  - "flashcards de subnetting para Network+"
  - "práctica de PBQ para Network+"
  - "resolución de problemas de Network+"
  - "estudiar Network+ con FSRS"
---

Los candidatos al examen N10-009 disponen de 90 minutos para responder un máximo de 90 preguntas, incluidas las preguntas basadas en el desempeño. Los mismos objetivos oficiales que exigen recordar puertos y protocolos también piden usar el direccionamiento IPv4 en un escenario, configurar funciones de switching, inspeccionar evidencias de red y resolver fallos.

Son tareas de estudio distintas. Las **flashcards para CompTIA Network+** sirven para recuperar de memoria datos y decisiones concretos: la asociación de un puerto, una máscara de subred, la función de un comando o la pista que indica qué comprobar a continuación. Los cálculos, la configuración, las capturas de paquetes, los escenarios completos de resolución de problemas y las PBQ siguen requiriendo práctica activa fuera del mazo.

**Datos verificados:** 26 de agosto de 2026.

![Estudiante de Network+ organizando tarjetas de puertos, subnetting, comandos y resolución de problemas junto a un laboratorio práctico de redes](/blog/comptia-network-plus-flashcards.png)

## Empieza por los objetivos actuales de N10-009

Los [objetivos oficiales actuales del examen CompTIA Network+ N10-009](https://assets.ctfassets.net/82ripq7fjls2/113XqW3JHT7AlIU33M63I0/af42da2af7383a38f318bad10aa9afbd/Network_Plus_N10-009_Exam_Objectives.pdf) se identifican como **Exam Objectives Version 4.0** («Versión 4.0 de los objetivos del examen»). Describen un examen con preguntas de opción múltiple y basadas en el desempeño, un límite de 90 minutos y un mínimo recomendado de 9–12 meses de experiencia en redes de TI.

| Dominio de N10-009 | Peso |
| --- | ---: |
| Conceptos de redes | 23% |
| Implementación de redes | 20% |
| Operaciones de red | 19% |
| Seguridad de red | 14% |
| Resolución de problemas de red | 24% |

Usa los porcentajes para comprobar la cobertura general de tu estudio, no para fijar una cuota de tarjetas. Si casi una cuarta parte del examen se dedica a la resolución de problemas y tu mazo solo contiene números de puerto, el mazo deja al descubierto una carencia. La solución tampoco consiste en crear cientos de tarjetas de resolución de problemas. Practica más escenarios y usa unas pocas tarjetas para corregir los datos y las decisiones concretas que sigues fallando.

CompTIA también indica que los ejemplos incluidos en cada objetivo no son exhaustivos. Considera los objetivos como el mejor documento actual para delimitar el temario, no como una promesa de que cada pregunta reproducirá uno de los puntos enumerados. Conserva una etiqueta de origen como `n10-009-v4` y vuelve a comprobar las tarjetas que dependan de la versión con el PDF oficial antes del examen.

## Decide si el tema exige recordar o practicar

El filtro más sencillo es preguntarte qué tendrías que hacer para demostrar que dominas el tema. Si basta con dar una respuesta breve y estable, una flashcard puede encajar. Si necesitas calcular, inspeccionar evidencias cambiantes, elegir entre varias acciones razonables o configurar un dispositivo, usa un ejercicio práctico. Cuando la respuesta dependa de un escenario, incluye en la tarjeta la pista reutilizable o la regla de decisión, no el escenario completo.

| Buenos objetivos para flashcards | Habilidades que conviene practicar por completo |
| --- | --- |
| Asociaciones entre servicios y puertos | Inspeccionar una captura de paquetes |
| Acrónimo y función práctica | Calcular subredes desconocidas bajo presión de tiempo |
| Conversiones entre prefijos CIDR y máscaras | Configurar VLAN, rutas, redes inalámbricas o servicios de red |
| Función de un comando o una herramienta | Leer la salida de un comando desconocido |
| Un síntoma y la siguiente evidencia que debes recopilar | Rastrear un fallo de red en varias capas |
| Un paso del método de resolución de problemas | Completar una PBQ o un escenario más largo |

Algunos temas encajan en ambas columnas. Puedes memorizar que `/27` corresponde a `255.255.255.224` y después calcular otra red `/27` en papel. Puedes recordar para qué sirve `tcpdump` y luego usarlo para capturar y filtrar tráfico real. La tarjeta elimina una vacilación evitable; el ejercicio comprueba si sabes hacer el trabajo.

## Crea tarjetas de puertos a partir de un servicio y una pista práctica

Los objetivos de N10-009 contienen una tabla específica de **puertos y protocolos de Network+**. Usa esa tabla para delimitar el temario del examen. Si necesitas investigar protocolos más allá de ese temario, consulta el [registro de nombres de servicio y números de puerto de protocolos de transporte de IANA](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml). El registro recoge las asignaciones oficiales de nombres de servicio y puertos de transporte, pero tampoco permite saber qué se está ejecutando en un host concreto.

No conviertas ninguna de las dos fuentes en una tarjeta gigante de «nombra todos los puertos». Divide el contenido en preguntas pequeñas y aprende las asociaciones importantes en ambos sentidos cuando sigan provocando errores.

```text
Anverso: ¿Qué servicio asocia N10-009 con el puerto 22 para el acceso remoto
cifrado por línea de comandos?

Reverso: SSH. El puerto 22 es la asociación estándar; confirma el servicio y la
configuración reales del host.
```

```text
Anverso: ¿Qué dos servicios asocian los objetivos de N10-009 con el puerto 22?

Reverso: SSH y SFTP.
```

```text
Anverso: Un cliente necesita configuración IP automática. ¿Qué servicio y qué
par de puertos deberían venirte a la mente según los objetivos de N10-009?

Reverso: DHCP, puertos 67 y 68.
```

La pista práctica marca la diferencia. `53 -> DNS` es útil, pero «falla la resolución de nombres; investiga DNS» resulta más fácil de aplicar. `161/162 -> SNMP` también es útil, aunque deberías relacionar SNMP con la monitorización y la gestión de redes.

Hay un límite que merece su propia tarjeta:

```text
Anverso: El tráfico usa el puerto de destino 443. ¿Qué demuestra ese número de
puerto sobre la aplicación?

Reverso: Por sí solo, no demuestra qué aplicación o servicio se está ejecutando.
El puerto 443 es la asociación estándar de HTTPS, pero todavía necesitas
evidencias de la configuración, los procesos y el tráfico.
```

Un puerto es una convención y una pista, no una comprobación de identidad. Los servicios pueden trasladarse, pasar por un túnel o un proxy, o estar mal configurados. Aprender a sacar conclusiones tajantes a partir de un número crea justo el hábito equivocado para la **resolución de problemas de Network+**.

No necesitas tarjetas separadas en ambos sentidos para cada asociación desde el primer día. Empieza en una dirección y añade la inversa solo cuando te cueste recordar la respuesta o confundas dos servicios. La [guía de flashcards para Security+](/es/blog/how-to-use-flashcards-for-security-plus/) aplica el mismo enfoque a las diferencias entre protocolos y conceptos de seguridad.

## Usa tarjetas de subnetting como referencias y después calcula redes nuevas

El objetivo 1.7 de N10-009 dice: «Dada una situación, usa el direccionamiento de red IPv4 adecuado». Esta formulación exige más que reconocer una máscara entre varias respuestas. Las **flashcards de subnetting para Network+** deberían ayudarte a recordar automáticamente las referencias habituales y después dejar paso al cálculo.

Las tarjetas de referencia útiles son fáciles de evaluar:

```text
Anverso: ¿Qué máscara de subred corresponde a /27?

Reverso: 255.255.255.224.
```

```text
Anverso: En una subred IPv4 /27 ordinaria, ¿cuántas direcciones hay en total y
cuántas son tradicionalmente utilizables por los hosts?

Reverso: 32 en total; 30 utilizables tradicionalmente después de excluir las
direcciones de red y de broadcast.
```

```text
Anverso: ¿A qué red pertenece 192.0.2.77/27?

Reverso: 192.0.2.64/27. El bloque va de .64 a .95; el rango tradicional de hosts
es de .65 a .94 y .95 es la dirección de broadcast.
```

La tercera tarjeta solo es útil hasta que recuerdas esa respuesta exacta. A partir de entonces, deja de comprobar si sabes calcularla y pasa a comprobar si recuerdas la tarjeta. Trata los ejemplos resueltos como comprobaciones o plantillas temporales y continúa con direcciones nuevas, distintas longitudes de prefijo, planificación VLSM y ejercicios cronometrados en los que la respuesta no te espere en el reverso.

Un bloque equilibrado de práctica de subnetting puede ser así:

1. Repasa las tarjetas pendientes sobre prefijos, máscaras, tamaños de bloque y cantidades de hosts.
2. Calcula cinco subredes desconocidas sin mirar la respuesta.
3. Comprueba la dirección de red, la dirección de broadcast y el rango utilizable.
4. Crea una tarjeta de corrección solo para la regla que haya causado un error repetido.

Si sigues olvidando que `/26` avanza en bloques de 64, ese dato merece una tarjeta. Si entiendes el tamaño del bloque pero te confundes con los límites bajo presión de tiempo, la solución es hacer más cálculos.

## Las tarjetas de comandos deben ayudarte a recordar la herramienta antes que la sintaxis

Los objetivos enumeran herramientas de software como un analizador de protocolos, `ping`, `traceroute` o `tracert`, `nslookup`, `tcpdump`, `dig`, `netstat`, `ip`, `ifconfig`, `ipconfig`, `arp` y Nmap. También incluyen herramientas de hardware y comandos básicos de dispositivos como `show route`, `show interface`, `show config`, `show arp` y `show vlan`.

Es una buena fuente de tarjetas, pero memorizar comandos puede generar enseguida una falsa sensación de dominio. Pregunta qué evidencia puede aportar la herramienta.

```text
Anverso: ¿Qué herramienta de línea de comandos de N10-009 puede consultar DNS
cuando necesitas comprobar si funciona la resolución de nombres?

Reverso: `nslookup` o `dig`, según el sistema y la tarea.
```

```text
Anverso: ¿Qué herramienta de línea de comandos captura paquetes para
inspeccionarlos después?

Reverso: `tcpdump`.
```

```text
Anverso: ¿Qué comando básico de un dispositivo deberías considerar cuando
necesitas información sobre las VLAN?

Reverso: `show vlan`. La sintaxis y la salida exactas dependen de la plataforma
del dispositivo.
```

```text
Anverso: ¿Qué evidencia añade `traceroute` a una prueba básica con `ping`?

Reverso: La secuencia de saltos que responden en el camino hacia el destino, que
puede ayudar a localizar dónde cambia o se interrumpe una ruta. Toma la falta de
respuesta como un indicio que debes investigar, no como prueba automática de que
un salto está caído.
```

Después de repasar una tarjeta de comando, ejecútalo en un laboratorio o en un sistema que tengas autorización para probar. Predice qué esperas encontrar, lee la salida real, cambia una condición y vuelve a ejecutarlo. Ese ciclo breve enseña permisos, parámetros, diferencias entre plataformas, filtros y salidas desordenadas: aspectos que la tarjeta no puede reproducir. La [guía de flashcards para comandos de terminal](/es/blog/how-to-learn-terminal-commands-with-flashcards/) profundiza en este método.

## Las tarjetas de resolución de problemas deben conservar la incertidumbre

El dominio de mayor peso de N10-009 es «Resolución de problemas de red», con un 24%. Los objetivos cubren un método de resolución de problemas, fallos en interfaces físicas, problemas de switching y servicios, problemas de rendimiento, herramientas de software y hardware, y comandos de dispositivos.

La tarjeta floja pregunta «¿Qué causa la pérdida de paquetes?» y espera una lista larga. Una tarjeta más sólida presenta una observación y pregunta qué justifica comprobar a continuación.

```text
Anverso: Un cliente tiene una dirección IPv4 169.254.x.x. ¿Qué sugiere y qué
deberías investigar a continuación?

Reverso: El cliente tiene una dirección APIPA/link-local en lugar de la
configuración esperada. Comprueba el enlace local y la ruta hasta DHCP. La
dirección por sí sola no identifica el componente que ha fallado.
```

```text
Anverso: Se puede acceder a un host mediante su dirección IP, pero no por su
nombre. ¿Qué servicio es razonable comprobar a continuación?

Reverso: La resolución de nombres DNS. Confirma la configuración del cliente y
consulta el registro necesario antes de decidir dónde está fallando DNS.
```

```text
Anverso: Los errores CRC siguen aumentando en una interfaz. ¿Qué comprobaciones
justifica este dato?

Reverso: Revisar el trayecto físico y las evidencias relacionadas con la interfaz,
incluidos el cableado, los transceptores y la configuración de velocidad o dúplex.
El contador por sí solo no basta para aislar un componente.
```

La formulación es deliberada. «¿Qué sugiere esto?» o «¿Qué deberías comprobar a continuación?» entrenan un razonamiento basado en evidencias. «¿Qué lo ha causado?» suele enseñar a dar por segura una causa a partir de un solo síntoma.

El método oficial también permite crear tarjetas útiles sobre la secuencia:

```text
Anverso: Tu primera teoría sobre la causa probable no se confirma. Según el
método de resolución de problemas de N10-009, ¿qué viene después?

Reverso: Establecer una nueva teoría o escalar el problema.
```

Memorizar los pasos es solo el principio. En un laboratorio, identifica el problema, formula y comprueba una teoría, planifica la solución y considera su impacto, impleméntala o escala el problema, verifica toda la funcionalidad, considera medidas preventivas y documenta los hallazgos, las acciones y el resultado. Un fallo real rara vez llega con el número del objetivo adjunto.

## Las PBQ requieren más que una tarjeta

CompTIA describe las [preguntas basadas en el desempeño](https://www.comptia.org/en-us/resources/test-policies/exam-development/performance-based-questions-explained/) como preguntas que evalúan la resolución de problemas mediante simulaciones o entornos virtuales. Una PBQ puede combinar una topología, una configuración, herramientas, síntomas y varias decisiones. Una pregunta con anverso y reverso no puede recrear todo ese contexto de trabajo.

Usa flashcards antes y después de la **práctica de PBQ para Network+**:

1. Antes de practicar, intenta recordar los puertos, comandos, referencias de subnetting y pasos de resolución de problemas que puedas necesitar.
2. Durante la PBQ o el laboratorio, trabaja a partir de las evidencias sin abrir el mazo.
3. Después, anota la pista que no viste, la suposición equivocada y qué habilidad te falló de verdad.
4. Crea una tarjeta de corrección solo cuando un fallo puntual de memoria haya contribuido al error.
5. Pon a prueba la corrección en un escenario distinto.

Supón que elegiste la herramienta equivocada porque no recordabas qué comando consulta DNS. Ese error justifica una tarjeta de corrección clara. Si conocías la herramienta, pero no supiste interpretar la respuesta, dedica tiempo a trabajar con salidas reales. Si perdiste el límite de la red al calcular una subred, calcula más redes desconocidas. Si no pudiste configurar el dispositivo, vuelve al laboratorio.

No copies en el mazo una pregunta de práctica legítima. Conserva la lección reutilizable con tus propias palabras y elimina el contexto narrativo, las opciones de respuesta y la redacción distintiva de la pregunta. La guía para [convertir preguntas de práctica en flashcards](/es/blog/how-to-turn-practice-questions-into-flashcards/) ofrece un flujo de trabajo completo.

Los objetivos oficiales también advierten contra materiales no autorizados de terceros, conocidos habitualmente como brain dumps o volcados de examen. Usa los objetivos actuales, formación y prácticas autorizadas, tus propias observaciones de laboratorio y tus propias explicaciones. Memorizar la redacción de preguntas filtradas no es estudiar Network+.

## Un ciclo práctico de estudio para Network+

Un buen sistema semanal alterna la memorización y el trabajo práctico con redes. No conviene terminar primero el mazo y dejar los laboratorios para más adelante.

Para un pequeño grupo de objetivos:

1. Lee el objetivo y estúdialo con una fuente actual y legítima.
2. Crea unas pocas tarjetas para los datos, las diferencias y las elecciones de herramientas que no recuerdes con seguridad.
3. Repasa las tarjetas pendientes antes del bloque práctico.
4. Haz una serie de cálculos, una tarea de configuración, un ejercicio con paquetes o un laboratorio de resolución de problemas.
5. Completa una breve tanda de preguntas legítimas basadas en escenarios o una práctica de PBQ.
6. Clasifica cada fallo antes de elegir cómo corregirlo.

| Qué ha fallado | Qué hacer después |
| --- | --- |
| Has olvidado un puerto, una máscara, un acrónimo o la función de un comando | Añade o reescribe una tarjeta concreta |
| Sigues confundiendo dos conceptos relacionados | Añade una tarjeta de contraste |
| El subnetting fue lento o impreciso | Calcula redes nuevas |
| Interpretaste mal la salida de un comando o una captura de paquetes | Inspecciona más salidas reales y anota la pista que pasaste por alto |
| No pudiste configurar la función | Repite el laboratorio desde un estado limpio |
| Perdiste el hilo de una situación con varios pasos | Haz otro ejercicio de resolución de problemas o una PBQ |

FSRS resulta útil en un plan de estudio para Network+ cuando las tarjetas ya merecen tener repasos programados, pero su creación debe seguir siendo selectiva. El planificador puede adaptar los repasos futuros a tu historial de estudio; no puede convertir una pregunta ambigua ni una habilidad de redes sin practicar en competencia real. La [guía sobre cómo funciona FSRS](/es/blog/what-is-fsrs/) explica el planificador y sus límites.

Una organización sencilla consiste en un mazo `N10-009` con etiquetas como `ports`, `subnetting`, `commands`, `operations`, `security`, `troubleshooting`, `practice-miss` y `lab-miss`. Añade el código del objetivo a las tarjetas que dependan de la versión cuando te ayude a revisarlas. Las etiquetas deberían ayudarte a encontrar un punto débil, no reproducir todo el PDF como un árbol de carpetas.

## Dónde encaja Flashcards Open Source App

> **Aviso:** Flashcards Open Source App no está afiliada a CompTIA ni está respaldada por ella. No es un curso oficial de Network+, un examen de práctica ni un simulador de PBQ.

[Flashcards Open Source App](/es/features/) se ocupa de la parte de memorización del flujo de trabajo: tarjetas con anverso y reverso, mazos y etiquetas, repaso de las tarjetas pendientes con FSRS, estudio sin conexión y sincronización, exportaciones transferibles y una opción autoalojada. Úsala para guardar los datos y las decisiones concretos que quieres tener disponibles antes del trabajo práctico.

Aquí no afirmamos que exista un mazo oficial o predefinido de N10-009. Empieza a partir de los objetivos actuales de CompTIA y de tus propios errores legítimos de estudio. [Primeros pasos](/es/docs/getting-started/) explica las modalidades alojada y autoalojada si quieres crear el mazo en Flashcards.

Si estás estudiando una certificación cercana, la [guía de flashcards para CompTIA A+](/es/blog/comptia-a-plus-flashcards/) aplica la misma separación entre recordar y practicar al trabajo técnico, mientras que la [guía de flashcards para CCNA](/es/blog/how-to-use-flashcards-for-ccna/) profundiza en la práctica de routing, switching y comandos.

## Preguntas frecuentes sobre las flashcards de CompTIA Network+

### ¿Qué puertos debo incluir en las flashcards de N10-009?

Empieza por la tabla de puertos y servicios de los objetivos oficiales actuales. Crea tarjetas pequeñas para las asociaciones que no puedas recordar y después relaciona cada una con su función práctica. Recuerda que los objetivos indican que sus ejemplos no son exhaustivos y que un número de puerto no demuestra qué servicio se está ejecutando.

### ¿Bastan las flashcards de Network+ para el subnetting?

No. Usa tarjetas para las conversiones de prefijos a máscaras, los tamaños de bloque, las cantidades de hosts y las reglas que olvidas repetidamente. Calcula redes nuevas por separado para poder hallar la dirección de red, la de broadcast y el rango utilizable sin memorizar una pregunta concreta.

### ¿Pueden las flashcards sustituir los laboratorios o las PBQ de Network+?

No. Las tarjetas pueden ayudarte a recuperar con más rapidez los conocimientos previos necesarios. Los laboratorios y la práctica autorizada de PBQ siguen evaluando la configuración, el cálculo, la navegación, la recopilación de evidencias y las decisiones con varios pasos.

### ¿Debo crear una tarjeta para cada objetivo de N10-009?

Usa los objetivos como mapa de cobertura, no como tarea de transcripción. Crea tarjetas para los datos concretos y las diferencias que necesites recordar repetidamente. Usa laboratorios, cálculos, capturas de paquetes, situaciones y preguntas de práctica para el resto.

### ¿Cómo convierto en una tarjeta una pregunta de práctica que he fallado?

Identifica el pequeño dato, la pista o la diferencia que causó el error. Escribe con tus propias palabras una pregunta nueva que evalúe únicamente esa lección. No copies la pregunta original, las opciones de respuesta ni la situación distintiva.

## Crea el mazo a partir de tu próximo error real

Abre los objetivos oficiales de N10-009 y elige un apartado breve. Estúdialo y después haz una tarea en la que puedas equivocarte: calcula una subred, consulta DNS, inspecciona una ruta, captura tráfico, configura un switch o resuelve un laboratorio averiado.

Crea tarjetas a partir de los puntos concretos en los que recordar la información te haya frenado. Mantén los cálculos, el trabajo con el dispositivo, la interpretación de la salida y el escenario dentro de la sesión práctica. Esa separación produce **flashcards de N10-009** que merece la pena repasar y un plan de estudio para Network+ que sigue funcionando cuando el problema es más amplio que una sola respuesta en el reverso de una tarjeta.
