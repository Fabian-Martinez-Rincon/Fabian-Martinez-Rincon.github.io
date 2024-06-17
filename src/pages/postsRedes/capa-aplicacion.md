---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Capa de Aplicación'
pubDate: 2024-04-28
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/capa-aplicacion.webp'
    alt: ''
tags: ["Capa de Aplicación"]
category: Redes
---

### Parcialito Promoción Redes y Comunicaciones 1er. sem 2023 (Aplicación)

DNS. Indique en qué caso/s la consulta se hace de forma Iterativa

- [ ] a. Cuando se consulta por un registro SOA.
- [ ] b. Cuando se consulta al servidor de DNS local que tenemos configurado en nuestra red.
- [ ] c. Al realizar una consulta como DNS local a un root server.
- [ ] d. Cuando el DNS local debe resolver una consulta que no tiene cacheada la respuesta.
- [ ] e. Al consultar a un open DNS como 8.8.8.8.

<details><summary>👀 Respuesta</summary>

En el sistema de nombres de dominio (DNS), las consultas pueden ser recursivas o iterativas. Durante una consulta recursiva, el servidor DNS se encarga de realizar todas las consultas necesarias hasta obtener una respuesta definitiva para devolver al cliente. En una consulta iterativa, el servidor DNS proporciona la mejor respuesta que puede basada en su conocimiento actual, y el cliente es responsable de continuar la consulta si es necesario.


- **a. Cuando se consulta por un registro SOA.**  
  No necesariamente es iterativa, depende de cómo se configure la consulta. Si el servidor local no tiene información, puede hacer una consulta recursiva a otros servidores.

- **b. Cuando se consulta al servidor de DNS local que tenemos configurado en nuestra red.**  
  Generalmente, esto es una consulta recursiva porque el servidor DNS local resolverá la consulta completamente por cuenta del cliente.

- **c. Al realizar una consulta como DNS local a un root server.**  
  ✓ Esto es un ejemplo típico de consulta iterativa. El servidor DNS local puede hacer consultas iterativas a los servidores raíz y otros servidores de nombres en la cadena para resolver la dirección.

- **d. Cuando el DNS local debe resolver una consulta que no tiene cacheada la respuesta.**  
  Esto también puede ser recursivo o iterativo, pero típicamente, un servidor DNS local hace una consulta recursiva para resolver nombres si no tiene la respuesta en caché.

- **e. Al consultar a un open DNS como 8.8.8.8.**  
  Generalmente, es una consulta recursiva porque un servidor DNS público como 8.8.8.8 se encargará de resolver la consulta por completo en nombre del cliente.

</details>

---

Indique en qué caso/s la consulta se hace de forma recursiva

- [ ] a. Cuando se consulta por un registro SOA.
- [ ] b. Cuando se consulta al servidor de DNS local que tenemos configurado en nuestra red.
- [ ] c. Al realizar una consulta como DNS local a un root server.
- [ ] d. Cuando el DNS local debe resolver una consulta que no tiene cacheado.
- [ ] e. Al consultar a un open DNS como 8.8.8.8.

<details><summary>👀 Respuesta</summary>

En las consultas DNS recursivas, el servidor DNS consultado se encarga de seguir la cadena de consultas necesarias hasta obtener una respuesta final, la cual es luego devuelta al solicitante original. Aquí te explico cada caso:

- **a. Cuando se consulta por un registro SOA.**  
  Esta opción no es necesariamente recursiva por el tipo de registro solicitado, aunque podría serlo dependiendo de la configuración del cliente DNS. No es una garantía de recursividad por sí misma.

- **b. Cuando se consulta al servidor de DNS local que tenemos configurado en nuestra red.**  
  ✓ Esta es un ejemplo de consulta recursiva. Los servidores DNS locales típicamente resuelven las consultas de forma recursiva para sus clientes, obteniendo la respuesta completa antes de devolverla al cliente.

- **c. Al realizar una consulta como DNS local a un root server.**  
  Este es un ejemplo de consulta iterativa, no recursiva. El servidor DNS local recibe información del servidor raíz sobre a dónde dirigirse a continuación, pero no obtiene la respuesta completa de forma directa.

- **d. Cuando el DNS local debe resolver una consulta que no tiene cacheada.**  
  ✓ Este también es un caso típico de consulta recursiva. El servidor DNS local buscará la respuesta de forma recursiva en otros servidores DNS si no tiene la respuesta almacenada en su caché.

- **e. Al consultar a un open DNS como 8.8.8.8.**  
  ✓ Las consultas a servidores DNS abiertos como 8.8.8.8 (Google DNS) suelen ser recursivas. Estos servidores hacen todo el trabajo de resolución en nombre del cliente.

</details>

---

SMTP/DNS. Si el usuario ada@da.com envía un e-mail a bob@b.org, el MTA de "a", qué registros de DNS deberá consultar el MTA local para contactar al MTA destino.

- [ ] a. NS
- [ ] b. SOA
- [ ] c. MX
- [ ] d. CNAME
- [ ] e. PTR
- [ ] f. A y/o AAAA

<details><summary>👀 Respuesta</summary>

Para enviar un email de **ada@da.com** a **bob@b.org**, el MTA (Mail Transfer Agent) de "da.com" debe encontrar la dirección del servidor de correo de "b.org". Veamos en detalle por qué se necesitan ciertos registros DNS y por qué otros no son requeridos en este contexto:

#### Registros Necesarios

- **MX (Mail Exchange)**:
  - **Uso**: El registro MX es esencial para determinar cuál servidor de correo acepta correos electrónicos en nombre del dominio "b.org". Este registro proporciona una lista de nombres de servidor y prioridades asociadas, indicando a qué servidor enviar el correo primero.
  - **Justificación**: Sin este registro, el MTA de "da.com" no sabría a qué servidor entregar el correo para "b.org".

- **A y/o AAAA**:
  - **Uso**: Después de determinar el servidor de correo mediante el registro MX, el MTA necesita resolver el nombre del servidor (por ejemplo, mail.b.org) a una dirección IP. Esto se logra mediante registros A (para IPv4) o AAAA (para IPv6).
  - **Justificación**: Estos registros son necesarios para que el MTA pueda establecer una conexión de red al servidor de correo de destino utilizando su dirección IP.

#### Registros No Necesarios

- **NS (Name Server)**:
  - **Uso**: Indica los servidores DNS autoritativos para un dominio.
  - **Justificación**: No es necesario para el envío de correos, ya que su función principal es la gestión de DNS más que la operación de correo directa.

- **SOA (Start of Authority)**:
  - **Uso**: Proporciona información acerca del dominio, como el servidor de DNS primario, el correo del administrador del dominio, el número de serie del archivo de zona, etc.
  - **Justificación**: Este registro es más relevante para la administración de DNS y no se necesita directamente para el envío de correos.

- **CNAME (Canonical Name)**:
  - **Uso**: Redirige un nombre de dominio a otro nombre de dominio.
  - **Justificación**: Generalmente no se usa para registros MX, ya que apuntar un registro MX a un CNAME puede ser problemático y va en contra de las especificaciones del RFC.

- **PTR (Pointer)**:
  - **Uso**: Mapea una dirección IP a un nombre de dominio canónico, principalmente utilizado para configuraciones de reversa de DNS.
  - **Justificación**: No es necesario para el envío inicial de correos, aunque puede ser relevante para la verificación de spam y para la autenticación de servidores de correo mediante verificaciones de reversa de DNS.

En conclusión, para que el MTA de "da.com" envíe un correo a "b.org", solo necesita consultar los registros MX para encontrar el servidor de correo y luego registros A o AAAA para obtener la dirección IP del servidor de correo determinado por el MX.
</details>

---

E-MAIL. El header de un e-mail "To:" lo agrega:

- [ ] a. MUA local.
- [ ] b. MTA Remoto.
- [ ] c. MTA local.

<details><summary>👀 Respuesta</summary>

En el proceso de enviar un correo electrónico, el encabezado "To:" es fundamental para especificar al destinatario del mensaje. Este encabezado es agregado por:

- [x] **a. MUA local.**
  - **Justificación**: El "Mail User Agent" (MUA), que es el cliente de correo (como Microsoft Outlook, Mozilla Thunderbird, o un cliente de correo web), es el responsable de agregar el encabezado "To:" cuando un usuario compone y envía un mensaje. El usuario introduce la dirección de correo electrónico del destinatario en el campo "To:" en la interfaz del MUA, y el MUA incorpora esta información en los encabezados del mensaje antes de enviarlo al "Mail Transfer Agent" (MTA).

- [ ] **b. MTA Remoto.**
  - **Justificación**: El MTA remoto es el servidor de correo del destinatario que recibe el mensaje del MTA local. Este no modifica o añade el encabezado "To:"; su función es procesar y entregar el mensaje al buzón del destinatario.

- [ ] **c. MTA local.**
  - **Justificación**: El MTA local es el servidor de correo que envía el correo electrónico al MTA remoto. Aunque puede procesar, enrutarse y realizar funciones de reenvío del mensaje, no es el responsable de agregar el encabezado "To:". El MTA local se asegura de que el mensaje sea entregado correctamente basándose en los encabezados proporcionados por el MUA.

Por tanto, el encabezado "To:" es agregado por el MUA local del usuario que envía el correo electrónico.
</details>

---

Con que comando está relacionado el header:

- [ ] a. RCPT FROM.
- [ ] b. MAIL FROM.
- [ ] c. HELO.
- [ ] d. MAIL TO.
- [ ] e. RCPT TO.

<details><summary>👀 Respuesta</summary>

El encabezado "To:" de un correo electrónico, que especifica el destinatario principal del mensaje, está directamente relacionado con un comando específico utilizado en el protocolo SMTP (Simple Mail Transfer Protocol) para el envío de correos electrónicos. Este comando es el que instruye al servidor sobre a quién debe dirigirse el correo. La respuesta correcta es:

- [ ] **a. RCPT FROM.**
  - **Justificación**: No existe un comando "RCPT FROM" en SMTP. Es posible que haya confusión con "MAIL FROM", que especifica el remitente del correo.

- [ ] **b. MAIL FROM.**
  - **Justificación**: Este comando indica la dirección de correo del remitente en la transacción SMTP y es usado para establecer la procedencia del mensaje, pero no especifica a quién se envía el correo.

- [ ] **c. HELO.**
  - **Justificación**: Este comando es utilizado para identificar el cliente al servidor al inicio de una sesión SMTP. No está relacionado con los destinatarios del correo.

- [ ] **d. MAIL TO.**
  - **Justificación**: No existe un comando "MAIL TO" en SMTP. Esto puede confundirse con el encabezado "To:" del correo, pero no es un comando SMTP.

- [x] **e. RCPT TO.**
  - **Justificación**: Este es el comando correcto que está relacionado con el encabezado "To:" en un correo electrónico. "RCPT TO" se utiliza en SMTP para especificar cada uno de los destinatarios del mensaje. Aunque el encabezado "To:" en el cuerpo del correo puede listar todos los destinatarios visibles, el comando "RCPT TO" se utiliza para cada transacción individual de destinatario durante la sesión SMTP, lo que puede incluir destinatarios no listados visiblemente (como los en Cc o Bcc).

Por tanto, el encabezado "To:" está relacionado con el comando "RCPT TO" en el protocolo SMTP, utilizado para especificar a quién está destinado el correo.
</details>

---

HTTP. Indicar afirmaciones verdaderas para el http/2 y http/3

- [ ] a. http/2 Usa conexiones persistentes por default.
- [ ] b. http/3 no usa conexiones TCP ya que trabaja sobre UDP.
- [ ] c. http/3 mayormente se implementa sobre TLS, es decir funciona cifrado, aunque no es requisito del RFC.
- [ ] d. http/2 moderniza la conexión en streams y pueden mandar parte de datos con diferentes prioridades.
- [ ] e. http/2 usa como protocolo de transporte TCP.
- [ ] f. Tanto http/2 como http/3 mejoran el rendimiento de HTTP sin cambiar semántica.

<details><summary>👀 Respuesta</summary>

Las afirmaciones sobre HTTP/2 y HTTP/3 se pueden validar basándose en cómo estos protocolos han evolucionado desde HTTP/1.1, especialmente en términos de eficiencia y rendimiento en la transmisión de datos. Aquí está la validación de cada afirmación:

- [x] **a. http/2 Usa conexiones persistentes por default.**
  - **Justificación**: HTTP/2 utiliza conexiones TCP persistentes para múltiples solicitudes y respuestas, lo que mejora significativamente la eficiencia en comparación con HTTP/1.1, que requiere nuevas conexiones o varias conexiones para paralelizar múltiples solicitudes.

- [x] **b. http/3 no usa conexiones TCP ya que trabaja sobre UDP.**
  - **Justificación**: HTTP/3 utiliza el protocolo QUIC, que a su vez está basado en UDP en lugar de TCP. Esto permite un inicio de conexión más rápido, mejor manejo de la pérdida de paquetes y reanudaciones más eficientes de conexiones interrumpidas.

- [x] **c. http/3 mayormente se implementa sobre TLS, es decir funciona cifrado, aunque no es requisito del RFC.**
  - **Justificación**: HTTP/3 requiere el uso de TLS 1.3 para la seguridad de la conexión. Aunque técnicamente es parte de QUIC y no una estipulación del RFC de HTTP/3 por sí solo, en la práctica, HTTP/3 se implementa siempre sobre QUIC cifrado.

- [x] **d. http/2 moderniza la conexión en streams y pueden mandar parte de datos con diferentes prioridades.**
  - **Justificación**: HTTP/2 introduce el concepto de "streams", que permite la multiplexación de múltiples solicitudes y respuestas en una única conexión TCP, con capacidad para manejar prioridades entre esos streams.

- [x] **e. http/2 usa como protocolo de transporte TCP.**
  - **Justificación**: HTTP/2 se construye sobre TCP, utilizando una única conexión TCP para múltiples streams, lo que mejora la eficiencia y reduce la latencia en comparación con múltiples conexiones TCP utilizadas en HTTP/1.1.

- [x] **f. Tanto http/2 como http/3 mejoran el rendimiento de HTTP sin cambiar semántica.**
  - **Justificación**: Ambos protocolos, HTTP/2 y HTTP/3, están diseñados para mejorar la eficiencia del transporte de datos sin alterar las semánticas básicas de HTTP, como los métodos HTTP, códigos de estado, URIs y campos de encabezado.

Todas las afirmaciones propuestas son verdaderas y destacan las mejoras clave y las diferencias entre HTTP/2 y HTTP/3 en comparación con versiones anteriores de HTTP.
</details>

---

DNS. Dada la siguiente respuesta de DNS indicar qué afirmaciones son correctas

```plaintext
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 47728
flags: qr aa rd; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1
WARNING: recursion requested but not available

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
;; QUESTION SECTION:
;chatgptonline.to. IN NS

;; ANSWER SECTION:
chatgptonline.to. 86400 IN NS novaline.ns.cloudflare.com.
chatgptonline.to. 86400 IN NS paul.ns.cloudflare.com.

;; Query time: 20 msec
;; SERVER: 108.162.193.155#53(108.162.193.155)
;; WHEN: lun abr 10 13:39:13 -03 2023
;; MSG SIZE rcvd: 106
```

- [ ] a. El servidor que respondió es autoritativo.
- [ ] b. La consulta se realizó de forma recursiva.
- [ ] c. El servidor acepta consultas recursivas.
- [ ] d. El servidor de DNS consultado es 108.162.193.155
- [ ] e. El servidor de DNS consultado es 8.8.8.8
- [ ] f. Se consultó por un registro CNAME.
- [ ] g. Se consultó por un registro A.

<details><summary>👀 Respuesta</summary>

Analicemos cada una de las afirmaciones con base en la respuesta de DNS proporcionada:

- [x] **a. El servidor que respondió es autoritativo.**
  - **Justificación**: El flag `aa` (authoritative answer) está establecido, indicando que la respuesta proviene de un servidor DNS que es autoritativo para el dominio consultado.

- [ ] **b. La consulta se realizó de forma recursiva.**
  - **Justificación**: Aunque el flag `rd` (recursion desired) está activado, lo que indica que se solicitó recursividad, el mensaje "recursion requested but not available" sugiere que la recursividad no fue posible o no está permitida.

- [ ] **c. El servidor acepta consultas recursivas.**
  - **Justificación**: El mensaje "recursion requested but not available" indica que, aunque la recursividad fue solicitada, no está disponible en este servidor.

- [x] **d. El servidor de DNS consultado es 108.162.193.155**
  - **Justificación**: La sección SERVER muestra que la respuesta proviene de la dirección IP 108.162.193.155.

- [ ] **e. El servidor de DNS consultado es 8.8.8.8**
  - **Justificación**: No hay evidencia en la respuesta DNS que sugiera que se consultó a 8.8.8.8. La dirección del servidor DNS respondiente es 108.162.193.155.

- [ ] **f. Se consultó por un registro CNAME.**
  - **Justificación**: La sección QUESTION indica que se consultó por un registro `NS` (Name Server), no por un `CNAME`.

- [ ] **g. Se consultó por un registro A.**
  - **Justificación**: Igual que la afirmación anterior, la consulta fue específicamente por registros `NS`, no por registros `A`.

Estas respuestas reflejan lo que está específicamente indicado en los datos de la respuesta DNS presentada.

</details>

---

HTTP. Observando la siguiente salida, indique opciones verdaderas:

```plaintext
> GET /drive/search?q=redes HTTP/1.1
> Host: drive.google.com
> User-Agent: curl/7.68.0
> Accept: */*

< HTTP/1.1 301 Moved Permanently
< Content-Type: application/binary
```

- [ ] a. El requerimiento tiene parámetros en la URL.
- [ ] b. El User-agent puede procesar cualquier tipo de contenido.
- [ ] c. El código 301 y 302 son códigos de redirección.
- [ ] d. La cabecera Host permite el uso de VirtualHost la cual es renombrada en http/2

<details><summary>👀 Respuesta</summary>

Analizando la salida proporcionada, podemos determinar las afirmaciones correctas:

- [x] **a. El requerimiento tiene parámetros en la URL.**
  - **Justificación**: La URL en la solicitud GET incluye `?q=redes`, lo cual indica que se están pasando parámetros (`q=redes`) en la URL.

- [x] **b. El User-agent puede procesar cualquier tipo de contenido.**
  - **Justificación**: La cabecera `Accept: */*` indica que el User-Agent está dispuesto a aceptar cualquier tipo de contenido (`*/*`), lo cual significa que no está limitado a un tipo específico de datos.

- [x] **c. El código 301 y 302 son códigos de redirección.**
  - **Justificación**: El código de estado `301 Moved Permanently` es un código de redirección HTTP que se usa para informar que el recurso solicitado ha sido movido permanentemente a una nueva ubicación. El código `302` también es un código de redirección que indica que el recurso se ha movido temporalmente.

- [ ] **d. La cabecera Host permite el uso de VirtualHost la cual es renombrada en http/2**
  - **Justificación**: Si bien la cabecera `Host` es usada para especificar el servidor y el dominio al que se está haciendo la solicitud, permitiendo el uso de virtual hosting, esta afirmación parece estar parcialmente incorrecta porque implica que el término "VirtualHost" es "renombrado" en HTTP/2, lo cual no es preciso. HTTP/2 mantiene la misma funcionalidad de virtual hosting sin renombrar explícitamente esta característica.

Por lo tanto, las afirmaciones correctas según el contexto dado son a, b, y c.
</details>

---

POP e IMAP. Indicar cuál de las siguientes afirmaciones es correcta.

- [ ] a. POP3 e IMAP permiten correo de forma segura utilizando SSL/TLS
- [ ] b. POP3 permite acceso al mailbox sin autenticación
- [ ] c. El protocolo POP3 solo permite acceder a la carpeta INBOX del mailbox.
- [ ] d. IMAP permite gestionar carpetas del lado del servidor
- [ ] e. LIST, USER y PASS son comandos del protocolo POP3

<details><summary>👀 Respuesta</summary>

Evaluemos cada afirmación relacionada con los protocolos POP3 e IMAP:

- [x] **a. POP3 e IMAP permiten correo de forma segura utilizando SSL/TLS**
  - **Justificación**: Tanto POP3 como IMAP pueden usar SSL/TLS para cifrar la conexión entre el cliente de correo y el servidor de correo, mejorando la seguridad de la transmisión de datos.

- [ ] **b. POP3 permite acceso al mailbox sin autenticación**
  - **Justificación**: Esto es incorrecto. POP3 requiere autenticación (normalmente mediante comandos USER y PASS) para acceder a los correos.

- [x] **c. El protocolo POP3 solo permite acceder a la carpeta INBOX del mailbox.**
  - **Justificación**: POP3 es un protocolo más limitado comparado con IMAP y está diseñado principalmente para permitir el acceso solo a la carpeta INBOX del buzón de correo.

- [x] **d. IMAP permite gestionar carpetas del lado del servidor**
  - **Justificación**: IMAP es más versátil que POP3 y permite a los usuarios gestionar varias carpetas en el servidor, lo que permite acciones como mover correos entre carpetas, crear nuevas carpetas y más.

- [x] **e. LIST, USER y PASS son comandos del protocolo POP3**
  - **Justificación**: En POP3, `USER` y `PASS` son comandos estándar utilizados para la autenticación. `LIST` también es un comando en POP3, que se utiliza para listar los mensajes disponibles en el servidor.

Las afirmaciones a, c, d, y e son correctas en este contexto.
</details>

---

Marque las opciones correctas sobre FTP.

- [ ] a. En el FTP pasivo, la conexión de datos la inicia el servidor desde el port 20.
- [ ] b. En el FTP activo, la conexión de datos la inicia el servidor desde el port 20.
- [ ] c. Un archivo descargado se obtiene a través del canal de control
- [ ] d. FTP utiliza un canal de datos y un canal de control

<details><summary>👀 Respuesta</summary>

Veamos cada afirmación sobre el protocolo FTP (File Transfer Protocol):

- [ ] **a. En el FTP pasivo, la conexión de datos la inicia el servidor desde el port 20.**
  - **Justificación**: Esta afirmación es incorrecta. En el modo pasivo de FTP, el servidor escucha en un puerto aleatorio (no el puerto 20) y el cliente inicia la conexión de datos hacia ese puerto.

- [x] **b. En el FTP activo, la conexión de datos la inicia el servidor desde el port 20.**
  - **Justificación**: Esta es la descripción correcta del modo activo en FTP. En este modo, el servidor inicia la conexión de datos desde su puerto 20 hacia el puerto especificado por el cliente.

- [ ] **c. Un archivo descargado se obtiene a través del canal de control**
  - **Justificación**: Incorrecto. El canal de control en FTP se usa para enviar comandos y recibir respuestas, no para la transferencia de archivos. Los archivos son transferidos a través del canal de datos.

- [x] **d. FTP utiliza un canal de datos y un canal de control**
  - **Justificación**: Correcto. FTP utiliza dos conexiones separadas: una para el control (envío de comandos y recepción de respuestas) y otra para la transferencia de datos (archivos y listados de directorios).

Las opciones b y d son correctas en relación con el funcionamiento del protocolo FTP.
</details>

---

### Parcialito Promoción Redes y Comunicaciones 2do. sem 2023 (Aplicación) 26/09/2023

¿Qué caracteriza a la arquitectura cliente-servidor en términos de distribución de tareas y responsabilidades?

- [ ] a. La arquitectura cliente-servidor distribuye todas las tareas de manera equitativa entre clientes y servidores.
- [ ] b. Los servidores realizan todas las tareas, y los clientes solo solicitan información.
- [ ] c. Los servidores gestionan recursos y servicios, mientras que los clientes solicitan y utilizan esos recursos.
- [ ] d. Los clientes realizan todas las tareas de procesamiento y cálculo, y los servidores almacenan datos.

<details><summary>👀 Respuesta</summary>

En la arquitectura cliente-servidor, las tareas y responsabilidades se distribuyen entre dos tipos de entidades: clientes y servidores. Cada uno juega roles específicos que son complementarios:

- [ ] **a. La arquitectura cliente-servidor distribuye todas las tareas de manera equitativa entre clientes y servidores.**
  - **Justificación**: Incorrecto. La distribución de tareas no es necesariamente equitativa; es más bien funcional y depende del tipo de tarea. Los servidores generalmente manejan más procesamiento relacionado con la gestión de recursos y servicios, mientras que los clientes inician solicitudes.

- [ ] **b. Los servidores realizan todas las tareas, y los clientes solo solicitan información.**
  - **Justificación**: Incorrecto. Aunque los servidores manejan la mayoría de las tareas relacionadas con el procesamiento de solicitudes y la gestión de recursos, los clientes también realizan tareas como la presentación de datos, procesamiento local y formación de solicitudes.

- [x] **c. Los servidores gestionan recursos y servicios, mientras que los clientes solicitan y utilizan esos recursos.**
  - **Justificación**: Correcto. Esta opción refleja con precisión la división de tareas en la arquitectura cliente-servidor. Los servidores están dedicados a gestionar recursos y procesar solicitudes, y los clientes interactúan con esos servicios mediante solicitudes para realizar operaciones específicas o acceder a datos.

- [ ] **d. Los clientes realizan todas las tareas de procesamiento y cálculo, y los servidores almacenan datos.**
  - **Justificación**: Incorrecto. Si bien es cierto que en algunos modelos los clientes pueden realizar procesamiento significativo (como en arquitecturas más descentralizadas o en el cómputo en la nube), esta descripción no caracteriza adecuadamente la estructura cliente-servidor típica donde los servidores también realizan procesamiento significativo, no solo almacenan datos.

La opción correcta que describe adecuadamente la arquitectura cliente-servidor en términos de distribución de tareas y responsabilidades es la opción c.
</details>

---

¿Cómo mejoran la velocidad de carga de las páginas web el protocolo HTTP? Marque todas las opciones correctas:

- [ ] a. El protocolo HTTP utiliza caché web.
- [ ] b. Con HTTP/2 solamente a través de la caché web y recursos en caché. En HTTP/1.1, se logra debido a multiplexación, compresión de cabeceras y priorización de solicitudes.
- [ ] c. Con HTTP/2, introduce la multiplexación, compresión de cabeceras y priorización de solicitudes.
- [ ] d. En HTTP/1.1, se acelera la velocidad de carga al minimizar el uso de caché web y cargar todos los recursos directamente desde el servidor. HTTP/2.0 mejora la velocidad al utilizar múltiples conexiones simultáneas para cada recurso.

<details><summary>👀 Respuesta</summary>

Las características de HTTP que mejoran la velocidad de carga de las páginas web varían según la versión del protocolo que se esté utilizando. Aquí hay una explicación para cada opción dada:

- [x] **a. El protocolo HTTP utiliza caché web.**
  - **Justificación**: Correcto. El protocolo HTTP utiliza caché web para almacenar recursos localmente en el navegador del cliente o en servidores proxy cercanos. Esto permite que las páginas se carguen más rápidamente al reducir la cantidad de datos que deben ser recuperados del servidor.

- [ ] **b. Con HTTP/2 solamente a través de la caché web y recursos en caché. En HTTP/1.1, se logra debido a multiplexación, compresión de cabeceras y priorización de solicitudes.**
  - **Justificación**: Incorrecto. La descripción está invertida. HTTP/1.1 no incluye características como multiplexación, compresión de cabeceras y priorización, que son innovaciones de HTTP/2.

- [x] **c. Con HTTP/2, introduce la multiplexación, compresión de cabeceras y priorización de solicitudes.**
  - **Justificación**: Correcto. HTTP/2 mejora significativamente la velocidad de carga de las páginas al introducir multiplexación (permitiendo múltiples solicitudes y respuestas en una sola conexión), compresión de cabeceras (reduciendo el tamaño de los encabezados HTTP), y la priorización de solicitudes (permitiendo que los recursos más críticos se carguen primero).

- [ ] **d. En HTTP/1.1, se acelera la velocidad de carga al minimizar el uso de caché web y cargar todos los recursos directamente desde el servidor. HTTP/2.0 mejora la velocidad al utilizar múltiples conexiones simultáneas para cada recurso.**
  - **Justificación**: Incorrecto. HTTP/1.1 no acelera la carga minimizando el uso de caché web; más bien, depende de la caché para mejorar el rendimiento. Además, HTTP/2 no utiliza múltiples conexiones simultáneas para cada recurso, sino una única conexión que multiplexa todas las solicitudes.

Por lo tanto, las opciones correctas que explican cómo HTTP mejora la velocidad de carga de las páginas web son la a y la c.
</details>

---

HTTP. Observando la siguiente salida. Marque todas las opciones correctas:

```
>GET /recurso HTTP/1.1
>Host: www.ejemplo.com
>User-Agent: MiNavegador/1.0
>Accept: application/json

<HTTP/1.1 401 Unauthorized
<Date: Thu, 24 Aug 2023 15:30:00 GMT
<Server: Apache
<WWW-Authenticate: Basic realm="Acceso Restringido"
<Content-Type: text/html; charset=UTF-8
```

- [ ] a. La consulta fue exitosa y se obtuvo la información solicitada.
- [ ] b. La consulta tuvo un error de sintaxis en la URL.
- [ ] c. El recurso solicitado no se encontró en el servidor.
- [ ] d. El servidor requiere autenticación y el cliente no proporcionó las credenciales adecuadas.
- [ ] e. La consulta fue bloqueada debido a una sobrecarga en el servidor.

<details><summary>👀 Respuesta</summary>

La respuesta HTTP proporcionada muestra un resultado de `401 Unauthorized`. Esto indica que se necesita autenticación para acceder al recurso solicitado, pero no se proporcionaron credenciales adecuadas o las credenciales proporcionadas fueron insuficientes. Aquí están las explicaciones correctas para cada opción:

- [ ] **a. La consulta fue exitosa y se obtuvo la información solicitada.**
  - **Justificación**: Incorrecto. El código de respuesta `401 Unauthorized` indica que la consulta no fue exitosa y que se requiere autenticación para acceder al recurso.

- [ ] **b. La consulta tuvo un error de sintaxis en la URL.**
  - **Justificación**: Incorrecto. No hay indicación de un error de sintaxis en la URL; el código `401` es específico para problemas de autenticación.

- [ ] **c. El recurso solicitado no se encontró en el servidor.**
  - **Justificación**: Incorrecto. Un código `404 Not Found` sería apropiado para esa situación. El `401` indica problemas de autenticación.

- [x] **d. El servidor requiere autenticación y el cliente no proporcionó las credenciales adecuadas.**
  - **Justificación**: Correcto. La presencia del encabezado `WWW-Authenticate: Basic realm="Acceso Restringido"` confirma que se requiere autenticación (en este caso, básica) para acceder al recurso solicitado.

- [ ] **e. La consulta fue bloqueada debido a una sobrecarga en el servidor.**
  - **Justificación**: Incorrecto. Un código de respuesta `503 Service Unavailable` indicaría sobrecarga en el servidor o algún tipo de mantenimiento. El código `401` se relaciona exclusivamente con la falta de autenticación.

Por lo tanto, la opción correcta basada en la salida proporcionada es la d.
</details>

---

¿Cuál es el método en HTTP que permite obtener el documento requerido y no espera recibir datos en body? Marque todas las opciones correctas:
- [ ] a. POST
- [ ] b. GET
- [ ] c. PUT
- [ ] d. DELETE

<details><summary>👀 Respuesta</summary>

El método HTTP que se utiliza para obtener un documento requerido y que típicamente no espera recibir datos en el body de la solicitud es:

- [x] **b. GET**
  - **Justificación**: El método GET se usa para solicitar un recurso específico del servidor. Es un método de "solo lectura" que no incluye datos en el body de la solicitud, es decir, no se espera que envíe datos al servidor para crear o actualizar recursos. Su propósito principal es recuperar datos.

Las otras opciones tienen diferentes usos que generalmente involucran el envío de datos:
- [ ] **a. POST**
  - **Justificación**: POST se utiliza para enviar datos al servidor para crear un nuevo recurso. Generalmente, los datos se envían en el body de la solicitud.
  
- [ ] **c. PUT**
  - **Justificación**: PUT se utiliza para enviar datos al servidor con el propósito de actualizar un recurso existente o crear un recurso en una URI específica, y generalmente incluye datos en el body de la solicitud.
  
- [ ] **d. DELETE**
  - **Justificación**: DELETE se utiliza para solicitar la eliminación de un recurso específico. Aunque es posible que no espere datos en el body, su función principal no es recuperar datos, sino eliminarlos.

Por tanto, la opción correcta es la **b. GET**.
</details>

---

¿Cuál es el propósito de la delegación de autoridad en una red? Selecciona todas las respuestas correctas.

- [ ] a. Facilitar la administración centralizada de la red.
- [ ] b. Reducir la carga de trabajos en servidores centrales.
- [ ] c. Permitir que los servidores tomen decisiones autónomas.
- [ ] d. Mejorar la seguridad de la red.

<details><summary>👀 Respuesta</summary>

La delegación de autoridad en una red tiene varios propósitos clave que pueden ayudar a mejorar la eficiencia y la seguridad de la gestión de la red. Aquí están las opciones correctas y por qué:

- [x] **b. Reducir la carga de trabajos en servidores centrales.** Al delegar autoridad a servidores o administradores regionales o específicos del dominio, se reduce la carga en los servidores centrales, permitiendo que manejen otras tareas críticas más eficientemente.

- [x] **c. Permitir que los servidores tomen decisiones autónomas.** La delegación de autoridad permite que diferentes partes de la red tomen decisiones localizadas sin necesidad de referir constantemente a un centro de comando central, facilitando respuestas más rápidas a problemas locales y reduciendo la latencia en la toma de decisiones.

- [x] **d. Mejorar la seguridad de la red.** La delegación puede ayudar a mejorar la seguridad al permitir una administración más granular de los derechos y responsabilidades. Esto significa que las políticas de seguridad pueden ser más específicas y ajustadas a las necesidades locales, en lugar de aplicar un enfoque único para toda la red.

- [ ] **a. Facilitar la administración centralizada de la red.** Esta opción parece contraria a la naturaleza de la delegación. La delegación típicamente busca descentralizar el control en lugar de centralizarlo. Aunque una estructura bien delegada puede hacer que la supervisión central sea más manejable, no es el objetivo principal de la delegación de autoridad.

Por lo tanto, las opciones b, c y d son correctas en el contexto de cómo la delegación de autoridad beneficia a la administración de una red.
</details>

---

¿Cuáles de las siguientes consultas DNS debe realizar un MTA al enviar un correo electrónico del dominio usuario@dominio.uno.com al dominio usuario@dominiodos.com? Marque todas las opciones correctas:

- [ ] Consultar el registro MX del dominio dominiodos.com para encontrar el servidor de correo entrante (SMTP) del dominio receptor.
- [ ] Consultar el registro NS del dominio dominiodos.com para obtener el nombre del servidor de correo saliente.
- [ ] Consultar el registro TXT del dominio dominiodos.com para obtener información adicional sobre las políticas de recepción de correo y las claves de cifrado.
- [ ] Consultar el registro A y/o AAAA para obtener la dirección IP del servidor de correo del dominio dominiodos.com.
- [ ] Consultar el registro SOA del dominio dominiodos.com para obtener información sobre la autoridad del dominio y la administración de DNS.
- [ ] Consultar el registro CNAME del dominio dominio.uno para obtener la dirección IP del servidor de correo saliente.

<details><summary>👀 Respuesta</summary>

Al enviar un correo electrónico, los MTAs (Mail Transfer Agents) necesitan realizar ciertas consultas DNS para asegurarse de que el correo llegue al servidor correcto del dominio receptor. Estas son las opciones correctas para las consultas que realizaría un MTA en este caso:

- [x] **Consulte el registro MX del dominio dominiodos.com para encontrar el servidor de correo entrante (SMTP) del dominio receptor.**
  - **Justificación**: Los registros MX (Mail Exchange) son esenciales para determinar los servidores de correo que aceptarán correos electrónicos en nombre del dominio. Un MTA siempre consulta el MX para saber a dónde enviar el correo.

- [x] **Consultar el registro TXT del dominio dominiodos.com para obtener información adicional sobre las políticas de recepción de correo y las claves de cifrado.**
  - **Justificación**: Los registros TXT son comúnmente usados para configurar SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), y DMARC (Domain-based Message Authentication, Reporting, and Conformance), que son políticas y técnicas para validar y autenticar correos.

- [x] **Consultar el registro A y/o AAAA para obtener la dirección IP del servidor de correo del dominio dominiodos.com.**
  - **Justificación**: Si no hay registros MX o si hay algún problema con ellos, el MTA podría caer de vuelta en los registros A (IPv4) o AAAA (IPv6) para obtener directamente la dirección IP del servidor de correo.

Las opciones incorrectas son:

- [ ] **Consultar el registro NS del dominio dominiodos.com para obtener el nombre del servidor de correo saliente.**
  - **Justificación**: Los registros NS (Name Server) son utilizados para identificar los servidores DNS que están autorizados para el dominio, no los servidores de correo.

- [ ] **Consultar el registro SOA del dominio dominiodos.com para obtener información sobre la autoridad del dominio y la administración de DNS.**
  - **Justificación**: Los registros SOA (Start of Authority) contienen información administrativa sobre el dominio y son relevantes para la gestión del DNS, no para el envío de correo electrónico.

- [ ] **Consultar el registro CNAME del dominio dominio.uno para obtener la dirección IP del servidor de correo saliente.**
  - **Justificación**: Los registros CNAME (Canonical Name) se utilizan para alias de nombres de dominio, no específicamente para la localización de servidores de correo saliente, y esta consulta no sería relevante para el proceso de envío de un correo desde un dominio a otro.
</details>

---

DNS. Marque todas las opciones correctas:

- [ ] Las consultas recursivas y las iterativas son dos términos que se utilizan indistintamente en DNS.
- [ ] Las consultas recursivas de DNS pueden ser utilizadas para obtener información de cualquier dominio en internet, incluso si el servidor DNS que recibe la consulta no es servidor autoritativo para ese dominio.
- [ ] Las consultas recursivas de DNS sólo pueden ser utilizadas para obtener información de los dominios que están configurados en el servidor DNS que recibe la consulta.

<details><summary>👀 Respuesta</summary>

Al discutir las consultas DNS y su funcionamiento, es crucial entender la diferencia entre las consultas recursivas e iterativas, así como los límites de cada tipo. Aquí están las respuestas correctas y justificaciones para cada afirmación:

- [ ] **Las consultas recursivas y las iterativas son dos términos que se utilizan indistintamente en DNS.**
  - **Justificación**: Esta afirmación es incorrecta. Las consultas recursivas y las iterativas son distintas en su funcionamiento. Una consulta recursiva es aquella en la que el cliente espera que el servidor DNS realice todas las consultas necesarias para resolver el nombre por completo y devuelva la respuesta final. En una consulta iterativa, el servidor DNS devuelve la mejor información que tiene, lo que a menudo implica referir al cliente a otro servidor DNS más cercano a la información requerida.

- [x] **Las consultas recursivas de DNS pueden ser utilizadas para obtener información de cualquier dominio en internet, incluso si el servidor DNS que recibe la consulta no es servidor autoritativo para ese dominio.**
  - **Justificación**: Esta afirmación es correcta. Las consultas recursivas permiten al cliente solicitar información de cualquier dominio, y el servidor DNS que recibe la consulta se encarga de resolver la solicitud completa, consultando otros servidores DNS si es necesario, hasta obtener la respuesta final, que luego pasa al cliente.

- [ ] **Las consultas recursivas de DNS sólo pueden ser utilizadas para obtener información de los dominios que están configurados en el servidor DNS que recibe la consulta.**
  - **Justificación**: Esta afirmación es incorrecta. Las consultas recursivas no están limitadas a los dominios configurados o alojados en el servidor DNS que recibe la consulta inicial. El propósito de una consulta recursiva es precisamente delegar la responsabilidad de resolver completamente la consulta al servidor DNS, independientemente de dónde esté la información.
</details>

---

¿Cuál es el rol principal del MTA (Mail Transport Agent)? Marque todas las opciones correctas:
- [ ] Entregar los correos electrónicos al buzón del destinatario.
- [ ] Preparar los correos electrónicos para el transporte electrónico.
- [ ] Transportar los correos electrónicos entre diferentes servidores de correo electrónico.
- [ ] Enviar correos electrónicos a través de una interfaz con el usuario.

<details><summary>👀 Respuesta</summary>

El MTA (Mail Transport Agent) es un componente crucial en la infraestructura de correo electrónico, responsable de transportar correos electrónicos de un servidor a otro. Aquí están las opciones correctas relacionadas con el rol de un MTA:

- [ ] **Entregar los correos electrónicos al buzón del destinatario.**
  - **Justificación**: Esta afirmación no es completamente correcta para un MTA. Aunque los MTAs se encargan de transportar correos, la entrega final al buzón del destinatario es generalmente responsabilidad del MDA (Mail Delivery Agent).

- [ ] **Preparar los correos electrónicos para el transporte electrónico.**
  - **Justificación**: Esta afirmación es parcialmente correcta. Aunque los MTAs no "preparan" correos en el sentido de redactar o crear el contenido, sí realizan funciones como enrutamiento y a veces aplican reglas de procesamiento o filtros antes de enviar el correo a otro servidor.

- [x] **Transportar los correos electrónicos entre diferentes servidores de correo electrónico.**
  - **Justificación**: Esta es la función principal de un MTA. Se encarga de la transmisión de correos electrónicos entre diferentes servidores, garantizando que el correo se mueva desde el servidor del remitente hacia el servidor del destinatario o hacia el siguiente MTA en la ruta.

- [ ] **Enviar correos electrónicos a través de una interfaz con el usuario.**
  - **Justificación**: Incorrecto. Los MTAs no interactúan directamente con los usuarios; esta es la función de los MUA (Mail User Agents), como clientes de correo, que permiten a los usuarios escribir, enviar y recibir correos electrónicos.
</details>

---

En la arquitectura del correo electrónico, ¿cuáles son los posibles protocolos utilizados por el MUA (Agente de Usuario de Correo) y el MTA (Agente de Transferencia de Correo) respectivamente? Marque todas las opciones correctas:

- [ ] MUA: SMTP, MTA: IMAP
- [ ] MUA: POP3, MTA: SMTP
- [ ] MUA: HTTP, MTA: FTP
- [ ] MUA: IMAP, MTA: SMTP
- [ ] MUA: TCP, MTA: UDP

<details><summary>👀 Respuesta</summary>

En la arquitectura del correo electrónico, los protocolos utilizados por los MUA (Agentes de Usuario de Correo) y los MTA (Agentes de Transferencia de Correo) están diseñados para cumplir funciones específicas en el proceso de envío y recepción de correos electrónicos. Aquí están las opciones correctas explicadas:

- [ ] **MUA: SMTP, MTA: IMAP**
  - **Justificación**: Incorrecto. SMTP (Simple Mail Transfer Protocol) es usado por los MUA para enviar correos, pero los MTA también usan SMTP para transferir correo entre servidores, no IMAP. IMAP es utilizado por los MUA para acceder y gestionar el correo en un servidor.

- [x] **MUA: POP3, MTA: SMTP**
  - **Justificación**: Correcto. POP3 (Post Office Protocol version 3) es usado por los MUA para recuperar correos desde un servidor, y SMTP es usado por los MTA para enviar y transferir correos entre servidores.

- [ ] **MUA: HTTP, MTA: FTP**
  - **Justificación**: Incorrecto. HTTP y FTP no son protocolos estándar para la funcionalidad básica de correo electrónico en MUA y MTA respectivamente. HTTP puede ser usado por aplicaciones web de correo, pero no es el protocolo principal para MUA en la arquitectura tradicional de correo electrónico.

- [x] **MUA: IMAP, MTA: SMTP**
  - **Justificación**: Correcto. IMAP (Internet Message Access Protocol) es utilizado por los MUA para acceder y gestionar el correo de manera más eficiente que POP3, especialmente en múltiples dispositivos, ya que permite la sincronización con el servidor. SMTP es el protocolo estándar usado por los MTA para enviar y transferir correos.

- [ ] **MUA: TCP, MTA: UDP**
  - **Justificación**: Incorrecto. TCP (Transmission Control Protocol) y UDP (User Datagram Protocol) son protocolos de transporte y no especifican cómo se manejan las operaciones de correo electrónico en los MUA o MTA. Los MUA y MTA utilizan protocolos de aplicación como SMTP, IMAP o POP3, los cuales operan sobre TCP.

Estas aclaraciones resaltan los protocolos adecuados y sus usos correctos dentro de la arquitectura de correo electrónico.
</details>

---

En relación a los protocolos de acceso al correo electrónico, indique cuáles de las siguientes afirmaciones son verdaderas. Marque todas las opciones correctas:
- [ ] POP3 es un protocolo más flexible que IMAP, ya que descarga los mensajes del servidor al dispositivo del usuario.
- [ ] IMAP es un protocolo más flexible que POP3, ya que permite el acceso a los mensajes desde múltiples dispositivos y la manipulación de mensajes en el servidor.
- [ ] POP3 permite la manipulación de mensajes en el servidor.
- [ ] Ambos protocolos requieren autenticación, pero IMAP utiliza el formato ASCII 7 bits en 8 NVTI, mientras que POP3 utiliza el formato ASCII 8 bits.
- [ ] Ambos protocolos corren en el puerto TCP 143.
- [ ] IMAP no es adecuado para la organización de mensajes en carpetas.
- [ ] POP puede correr sobre SSL/TLS POP3S (995)
- [ ] IMAP permite la ejecución segura sobre SSL/TLS.

<details><summary>👀 Respuesta</summary>

Vamos a evaluar las afirmaciones para identificar cuáles son correctas en relación a los protocolos de acceso al correo electrónico POP3 y IMAP:

- [ ] **POP3 es un protocolo más flexible que IMAP, ya que descarga los mensajes del servidor al dispositivo del usuario.**
  - **Justificación**: Incorrecto. Si bien POP3 descarga los mensajes, esto no necesariamente lo hace más flexible. De hecho, lo hace menos versátil en entornos modernos donde el acceso desde múltiples dispositivos es común.

- [x] **IMAP es un protocolo más flexible que POP3, ya que permite el acceso a los mensajes desde múltiples dispositivos y la manipulación de mensajes en el servidor.**
  - **Justificación**: Correcto. IMAP permite a los usuarios ver y organizar sus mensajes directamente en el servidor sin descargarlos, facilitando el acceso desde múltiples dispositivos.

- [ ] **POP3 permite la manipulación de mensajes en el servidor.**
  - **Justificación**: Incorrecto. POP3 generalmente descarga los mensajes al dispositivo del usuario y no permite la manipulación de estos en el servidor de manera efectiva.

- [ ] **Ambos protocolos requieren autenticación, pero IMAP utiliza el formato ASCII 7 bits en 8 NVTI, mientras que POP3 utiliza el formato ASCII 8 bits.**
  - **Justificación**: Incorrecto. Esta afirmación sobre los formatos ASCII es confusa y no es una distinción estándar entre IMAP y POP3 en términos de cómo manejan la autenticación o el formato de los datos.

- [ ] **Ambos protocolos corren en el puerto TCP 143.**
  - **Justificación**: Incorrecto. IMAP corre comúnmente en el puerto TCP 143, mientras que POP3 utiliza el puerto TCP 110.

- [ ] **IMAP no es adecuado para la organización de mensajes en carpetas.**
  - **Justificación**: Incorrecto. IMAP es especialmente adecuado para organizar mensajes en carpetas, ya que permite a los usuarios crear, eliminar y renombrar buzones y carpetas en el servidor.

- [x] **POP puede correr sobre SSL/TLS POP3S (995)**
  - **Justificación**: Correcto. POP3S se refiere a POP3 ejecutado sobre SSL/TLS, típicamente en el puerto 995.

- [x] **IMAP permite la ejecución segura sobre SSL/TLS.**
  - **Justificación**: Correcto. IMAP puede ser seguro utilizando IMAP sobre SSL/TLS, generalmente en el puerto 993.

Estas respuestas correctas clarifican las funcionalidades y limitaciones de los protocolos POP3 e IMAP, así como sus configuraciones de seguridad.
</details>

---
