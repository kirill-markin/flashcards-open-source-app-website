---
title: Política de privacidad
description: Política de privacidad de Flashcards.
slug: privacy
sections:
  - type: legal_page
    lastUpdated: agosto de 2026
---
## Responsable y alcance

El servicio alojado de Flashcards está operado por SAMO DANNI EOOD, ID de empresa 207395566, VAT BG207395566, con domicilio social en bulv. Maritza 154, entrance D, floor 6 #14, 4018, Plovdiv, Bulgaria. Flashcards fue creado por Kirill Markin.

Esta política se aplica al sitio web, las aplicaciones, la API y el servicio MCP alojados que operamos. Una instancia autoalojada está controlada por su operador, que es responsable de sus prácticas de privacidad.

## Edad

El servicio alojado está destinado a personas de 13 años o más. Si la ley de tu lugar de residencia establece una edad mínima superior para usar un servicio en línea o consentir el tratamiento de datos, se aplica esa edad superior. Si eres menor de 18 años, necesitas el permiso de tu padre, madre o tutor legal.

## Datos que tratamos

Según cómo uses el servicio alojado, tratamos:

- datos de cuenta y autenticación, como tu correo electrónico, identificadores internos, registros de inicio de sesión y tokens de autenticación;
- datos de aprendizaje y del espacio de trabajo, como tarjetas, mazos, ajustes, membresías, historial de repasos y metadatos de sincronización;
- archivos y contenido multimedia que subas o crees, incluidas imágenes y datos temporales de carga;
- datos opcionales de IA, como prompts, historial del chat, contexto de tarjetas o del espacio de trabajo, archivos e imágenes incluidos en una solicitud, audio dictado, transcripciones, respuestas del modelo y actividad de herramientas;
- datos de soporte y comentarios, como mensajes, correo de contacto cuando lo facilites, versión de la aplicación, plataforma, idioma y estado relacionado;
- datos operativos y de seguridad, como identificadores de solicitud, marcas de tiempo, dirección IP, agente de usuario, ruta, estado de respuesta, versión de la aplicación, dispositivo o plataforma y diagnósticos de errores depurados; y
- datos de uso del sitio web y de las aplicaciones descritos en las secciones de Analítica y Analítica del producto.

Se necesita un correo electrónico para crear una cuenta alojada e iniciar sesión. Sin él no podemos proporcionar autenticación por correo ni sincronización asociada a la cuenta. Algunas funciones limitadas como invitado o en local pueden estar disponibles sin iniciar sesión.

## Finalidades y bases jurídicas

Tratamos los datos de cuenta, espacio de trabajo, repasos, archivos y las solicitudes de IA para prestar el servicio alojado y ejecutar nuestro contrato contigo. Tratamos las solicitudes de soporte para responderte y darte la ayuda solicitada.

Tratamos datos limitados de analítica, seguridad, diagnóstico y mejora del servicio por nuestro interés legítimo en entender el uso, evitar abusos, mantener el servicio seguro y corregir fallos. Equilibramos esos intereses con tus derechos y minimizamos o eliminamos datos de los diagnósticos cuando es posible. También podemos tratar datos para cumplir una obligación legal o formular, ejercer o defender reclamaciones. Cuando la ley exija consentimiento para una actividad concreta, nos basaremos en él y podrás retirarlo en cualquier momento.

No vendemos tus datos personales ni los usamos para publicidad dirigida.

## Analítica y cookies

El sitio web de marketing usa Vercel Web Analytics para medir visitas de páginas y determinados clics. Funciona sin cookies de analítica. Para una visita, Vercel puede recibir la hora del evento, la URL y parámetros de consulta filtrados, la página de referencia, la ubicación aproximada, el navegador, el sistema operativo y el tipo de dispositivo. Nuestros eventos de clic personalizados incluyen propiedades limitadas como idioma, plataforma, ubicación del enlace o tipo de interacción. No incluimos deliberadamente nombres, correos electrónicos, contenido de tarjetas ni identificadores de cuenta. Vercel agrega los datos y no asocia cada dato con una persona o dirección IP; su hash diario de visitante se elimina después de 24 horas.

La aplicación web alojada usa cookies estrictamente necesarias, como `otp_session`, `session`, `refresh` y `logged_in`, para completar la autenticación, mantener y renovar la sesión y mostrar el estado de acceso. Si las desactivas, el inicio de sesión en el navegador no funciona.

## Analítica del producto

Las aplicaciones alojadas de web, iOS y Android nos envían eventos de uso del producto. Esos eventos llegan a nuestra propia infraestructura y se guardan en nuestra propia base de datos; para ellos no usamos ningún proveedor externo de analítica.

Los eventos describen cómo se usan las aplicaciones, no lo que estudias: por ejemplo, qué pantallas abres, cuándo empieza y termina una sesión de repaso, incluidas su duración y el número de tarjetas respondidas, y si acciones clave como crear una tarjeta, iniciar sesión o sincronizar se completaron o fallaron. Cada evento incluye un identificador aleatorio por instalación, un identificador de sesión y contexto técnico como plataforma, versión de la aplicación, modelo de dispositivo, versión del sistema operativo, idioma, zona horaria y país aproximado; el evento también se asocia al espacio de trabajo en el que estás trabajando y, si has iniciado sesión, a tu cuenta. Ningún evento incluye nunca texto libre, contenido de tarjetas o mazos ni tu correo electrónico.

No existe un ajuste independiente para desactivar la analítica del producto. Al eliminar tu cuenta, sustituimos los identificadores de los eventos ya recogidos por un valor que no puede vincularse contigo, tal como se describe en la sección de Conservación y eliminación.

## IA alojada y clientes externos de IA

OpenAI es el proveedor configurado para las funciones alojadas de chat, transcripción y generación de imágenes. Si decides usarlas, enviamos a OpenAI los datos necesarios para la solicitud, que pueden incluir tu prompt, el contexto relevante del chat y del espacio de trabajo, archivos o imágenes, audio dictado y un identificador de seguridad seudónimo. Las solicitudes de texto alojadas usan `store: false`, lo que desactiva el almacenamiento de objetos de respuesta para recuperarlos más adelante. Como estas solicitudes también usan caché de prompts, OpenAI puede conservar el estado de aplicación cifrado de esa caché durante un máximo de 24 horas. Con los controles actuales de su API, los registros de supervisión de abusos aplicables pueden conservarse hasta 30 días; para el endpoint de transcripción, OpenAI indica que no conserva contenido de supervisión de abusos ni estado de aplicación. OpenAI no usa los datos de la API para entrenar sus modelos salvo que el titular de la cuenta lo autorice expresamente.

Las solicitudes de IA alojada también se observan mediante Langfuse Cloud para depuración y análisis de calidad. Sus trazas pueden incluir prompts, respuestas del modelo, actividad de herramientas, identificadores de usuario, espacio de trabajo y sesión, y metadatos operativos. La implementación oculta correos y campos con apariencia de secreto; las trazas personalizadas de transcripción excluyen el audio y los datos de archivos adjuntos.

Si conectas Flashcards a un cliente externo de IA mediante el servicio MCP remoto o la Agent API, el cliente y su proveedor de IA también tratan los datos que le pidas recuperar. Ese tratamiento independiente está controlado por el operador del cliente y se rige por sus propias condiciones y política de privacidad.

## Encargados y destinatarios

Usamos estas categorías de proveedores para el servicio alojado:

- Amazon Web Services (AWS) para alojamiento, autenticación con Cognito, Postgres, almacenamiento de archivos, copias de seguridad y registros operativos;
- Resend para correos transaccionales de autenticación;
- OpenAI para las solicitudes opcionales de IA alojada;
- Langfuse Cloud para observabilidad de IA;
- Sentry para informes depurados de errores y diagnóstico cuando esté activado en el servicio o la compilación correspondiente;
- Vercel para el sitio web de marketing y su Web Analytics sin cookies; y
- Cloudflare para DNS y gestión de dominios. Los registros DNS actuales de Flashcards son de tipo DNS-only, por lo que Cloudflare no actúa como proxy del tráfico HTTP del sitio o las aplicaciones.

Los datos también pueden mostrarse a otros miembros de un espacio de trabajo compartido, transmitirse a un cliente externo que autorices, comunicarse a asesores profesionales sujetos a confidencialidad o a autoridades públicas cuando la ley lo exija.

## Transferencias internacionales

La aplicación alojada principal funciona en infraestructura de AWS en la UE. La región configurada de Resend, la región de datos de Sentry y el endpoint de Langfuse también están en Europa. Algunos proveedores, como OpenAI y Vercel, pueden tratar datos fuera de tu país o del Espacio Económico Europeo. Cuando corresponde, usamos decisiones de adecuación, acuerdos de tratamiento y Cláusulas Contractuales Tipo o garantías equivalentes.

## Conservación y eliminación

- Los datos de cuenta y espacio de trabajo se conservan mientras la cuenta o el espacio compartido correspondiente siga activo. Al eliminar la cuenta se borran de la base de datos activa tus datos de cuenta, credenciales, membresías y espacios de los que eras el único miembro. El contenido de un espacio que conserve otros miembros seguirá disponible para ellos.
- Los eventos de analítica del producto no se eliminan al eliminar la cuenta. Sustituimos sus identificadores por un valor que no puede vincularse contigo y conservamos los eventos individuales, que a partir de entonces ya no pueden asociarse ni contigo ni con ninguna otra persona.
- Los archivos multimedia se conservan mientras los necesite el contenido activo y se eliminan mediante el proceso de limpieza cuando dejan de estar referenciados. Las cargas temporales incompletas caducan a los 7 días.
- La base de datos tiene 7 días de copias automatizadas de RDS y un plan diario separado de AWS Backup con 35 días de conservación. Los registros eliminados del servicio activo pueden permanecer en copias cifradas hasta que caduquen; esas copias se usan para recuperación ante desastres, no para el acceso normal.
- Los registros de acceso de API Gateway caducan a los 7 días. Los demás registros de aplicación de CloudWatch no tienen actualmente una caducidad automática configurada y permanecen hasta su eliminación manual. Limitamos su uso a operaciones, seguridad y depuración, y eliminamos las entradas pertinentes cuando sea necesario para atender un derecho de protección de datos aplicable.
- El plan Developer actual de Sentry ofrece 30 días de consulta de eventos. Resend conserva los datos de correos enviados durante 30 días con su configuración estándar actual.
- La conservación de OpenAI se describe en la sección de IA. El proyecto actual de Langfuse no tiene un periodo de eliminación automática, por lo que las trazas permanecen hasta que se borran manualmente, se elimina el proyecto o se aplica un límite de acceso del proveedor. Eliminamos trazas identificables cuando sea necesario para atender una solicitud de eliminación válida.
- La correspondencia de soporte y los registros necesarios para asuntos legales o de seguridad se conservan solo mientras sean necesarios. El hash de visitante de Vercel caduca a las 24 horas; las estadísticas agregadas se conservan según la configuración del proyecto de Vercel.

Eliminar una cuenta no borra de inmediato las copias ya incluidas en una copia programada o registro de proveedor. Esas copias caducan o se eliminan según los plazos anteriores, salvo obligación legal de conservarlas más tiempo.

## Tus derechos

Según la ley aplicable, puedes pedir acceso, rectificación, eliminación, limitación del uso o una copia portable de tus datos personales. También puedes oponerte al tratamiento basado en intereses legítimos y retirar el consentimiento cuando sea la base del tratamiento. Estos derechos pueden limitarse cuando la ley lo permita, por ejemplo por una obligación legal o los derechos de otra persona.

Puedes eliminar tu cuenta alojada desde la aplicación web, iOS o Android. Para cualquier otra solicitud, contáctanos en la dirección indicada abajo. Es posible que tengamos que verificar tu identidad.

Puedes reclamar ante la autoridad de protección de datos del lugar donde vivas o trabajes, o donde consideres que ocurrió la infracción. En Bulgaria, la autoridad supervisora es la [Commission for Personal Data Protection](https://cpdp.bg/en/).

## Seguridad y código abierto

Usamos controles de acceso, cifrado en tránsito, almacenamiento cifrado en AWS y minimización o depuración de datos en los sistemas de diagnóstico. Ningún servicio puede garantizar una seguridad absoluta.

El código fuente público permite inspeccionar las rutas de tratamiento documentadas y la configuración incluida en los repositorios. Por sí solo, el código público no demuestra la configuración o el comportamiento actuales del servicio alojado.

## Contacto

Para consultas de privacidad o solicitudes de derechos, escribe a [kirill+flashcards@kirill-markin.com](mailto:kirill+flashcards@kirill-markin.com) o usa la [página de soporte](/es/support/).
