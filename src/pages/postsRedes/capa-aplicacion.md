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

Por lo tanto, de las opciones dadas, la opción **c** es la que claramente describe un caso de consulta iterativa.
</details>

---

Indique en qué caso/s la consulta se hace de forma recursiva

- [ ] a. Cuando se consulta por un registro SOA.
- [ ] b. Cuando se consulta al servidor de DNS local que tenemos configurado en nuestra red.
- [ ] c. Al realizar una consulta como DNS local a un root server.
- [ ] d. Cuando el DNS local debe resolver una consulta que no tiene cacheado.
- [ ] e. Al consultar a un open DNS como 8.8.8.8.

<details><summary>👀 Respuesta</summary></details>

---

SMTP/DNS. Si el usuario ada@da.com envía un e-mail a bob@b.org, el MTA de "a", qué registros de DNS deberá consultar el MTA local para contactar al MTA destino.

- [ ] a. NS
- [ ] b. SOA
- [ ] c. MX
- [ ] d. CNAME
- [ ] e. PTR
- [ ] f. A y/o AAAA

<details><summary>👀 Respuesta</summary></details>

---

E-MAIL. El header de un e-mail "To:" lo agrega:

- [ ] a. MUA local.
- [ ] b. MTA Remoto.
- [ ] c. MTA local.

<details><summary>👀 Respuesta</summary></details>

---

Con que comando está relacionado el header:

- [ ] a. RCPT FROM.
- [ ] b. MAIL FROM.
- [ ] c. HELO.
- [ ] d. MAIL TO.
- [ ] e. RCPT TO.

<details><summary>👀 Respuesta</summary></details>

---

HTTP. Indicar afirmaciones verdaderas para el http/2 y http/3

- [ ] a. http/2 Usa conexiones persistentes por default.
- [ ] b. http/3 no usa conexiones TCP ya que trabaja sobre UDP.
- [ ] c. http/3 mayormente se implementa sobre TLS, es decir funciona cifrado, aunque no es requisito del RFC.
- [ ] d. http/2 moderniza la conexión en streams y pueden mandar parte de datos con diferentes prioridades.
- [ ] e. http/2 usa como protocolo de transporte TCP.
- [ ] f. Tanto http/2 como http/3 mejoran el rendimiento de HTTP sin cambiar semántica.

<details><summary>👀 Respuesta</summary></details>

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

<details><summary>👀 Respuesta</summary></details>

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

<details><summary>👀 Respuesta</summary></details>

---

POP e IMAP. Indicar cuál de las siguientes afirmaciones es correcta.

- [ ] a. POP3 e IMAP permiten correo de forma segura utilizando SSL/TLS
- [ ] b. POP3 permite acceso al mailbox sin autenticación
- [ ] c. El protocolo POP3 solo permite acceder a la carpeta INBOX del mailbox.
- [ ] d. IMAP permite gestionar carpetas del lado del servidor
- [ ] e. LIST, USER y PASS son comandos del protocolo POP3

<details><summary>👀 Respuesta</summary></details>

---

Marque las opciones correctas sobre FTP.

- [ ] a. En el FTP pasivo, la conexión de datos la inicia el servidor desde el port 20.
- [ ] b. En el FTP activo, la conexión de datos la inicia el servidor desde el port 20.
- [ ] c. Un archivo descargado se obtiene a través del canal de control
- [ ] d. FTP utiliza un canal de datos y un canal de control

<details><summary>👀 Respuesta</summary></details>

---

### Parcialito Promoción Redes y Comunicaciones 2do. sem 2023 (Aplicación) 26/09/2023

¿Qué caracteriza a la arquitectura cliente-servidor en términos de distribución de tareas y responsabilidades?

- [ ] a. La arquitectura cliente-servidor distribuye todas las tareas de manera equitativa entre clientes y servidores.
- [ ] b. Los servidores realizan todas las tareas, y los clientes solo solicitan información.
- [ ] c. Los servidores gestionan recursos y servicios, mientras que los clientes solicitan y utilizan esos recursos.
- [ ] d. Los clientes realizan todas las tareas de procesamiento y cálculo, y los servidores almacenan datos.

<details><summary>👀 Respuesta</summary></details>

---

¿Cómo mejoran la velocidad de carga de las páginas web el protocolo HTTP? Marque todas las opciones correctas:

- [ ] a. El protocolo HTTP utiliza caché web.
- [ ] b. Con HTTP/2 solamente a través de la caché web y recursos en caché. En HTTP/1.1, se logra debido a multiplexación, compresión de cabeceras y priorización de solicitudes.
- [ ] c. Con HTTP/2, introduce la multiplexación, compresión de cabeceras y priorización de solicitudes.
- [ ] d. En HTTP/1.1, se acelera la velocidad de carga al minimizar el uso de caché web y cargar todos los recursos directamente desde el servidor. HTTP/2.0 mejora la velocidad al utilizar múltiples conexiones simultáneas para cada recurso.

<details><summary>👀 Respuesta</summary></details>

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

<details><summary>👀 Respuesta</summary></details>

---

¿Cuál es el método en HTTP que permite obtener el documento requerido y no espera recibir datos en body? Marque todas las opciones correctas:
- [ ] a. POST
- [ ] b. GET
- [ ] c. PUT
- [ ] d. DELETE

<details><summary>👀 Respuesta</summary></details>

---

¿Cuál es el propósito de la delegación de autoridad en una red? Selecciona todas las respuestas correctas.

- [ ] a. Facilitar la administración centralizada de la red.
- [ ] b. Permitir la carga de trabajos en servidores centrales.
- [ ] c. Reducir que los servidores tomen decisiones autónomas.
- [ ] d. Mejorar la seguridad de la red.

<details><summary>👀 Respuesta</summary></details>

---

¿Cuáles de las siguientes consultas DNS debe realizar un MTA al enviar un correo electrónico del dominio usuario@dominio.uno.com al dominio usuario@dominiodos.com? Marque todas las opciones correctas:

- [ ] Consulte el registro MX del dominio dominiodos.com para encontrar el servidor de correo entrante (SMTP) del dominio receptor.
- [ ] Consultar el registro NS del dominio dominiodos.com para obtener el nombre del servidor de correo saliente.
- [ ] Consultar el registro TXT del dominio dominiodos.com para obtener información adicional sobre las políticas de recepción de correo y las claves de cifrado.
- [ ] Consultar el registro A y/o AAAA para obtener la dirección IP del servidor de correo del dominio dominiodos.com.
- [ ] Consultar el registro SOA del dominio dominiodos.com para obtener información sobre la autoridad del dominio y la administración de DNS.
- [ ] Consultar el registro CNAME del dominio dominio.uno para obtener la dirección IP del servidor de correo saliente.

<details><summary>👀 Respuesta</summary></details>

---

DNS. Marque todas las opciones correctas:

- [ ] Las consultas recursivas y las iterativas son dos términos que se utilizan indistintamente en DNS.
- [ ] Las consultas recursivas de DNS pueden ser utilizadas para obtener información de cualquier dominio en internet, incluso si el servidor DNS que recibe la consulta no es servidor autoritativo para ese dominio.
- [ ] Las consultas recursivas de DNS sólo pueden ser utilizadas para obtener información de los dominios que están configurados en el servidor DNS que recibe la consulta.

<details><summary>👀 Respuesta</summary></details>

---

¿Cuál es el rol principal del MTA (Mail Transport Agent)? Marque todas las opciones correctas:
- [ ] Entregar los correos electrónicos al buzón del destinatario.
- [ ] Preparar los correos electrónicos para el transporte electrónico.
- [ ] Transportar los correos electrónicos entre diferentes servidores de correo electrónico.
- [ ] Enviar correos electrónicos a través de una interfaz con el usuario.

<details><summary>👀 Respuesta</summary></details>

---

En la arquitectura del correo electrónico, ¿cuáles son los posibles protocolos utilizados por el MUA (Agente de Usuario de Correo) y el MTA (Agente de Transferencia de Correo) respectivamente? Marque todas las opciones correctas:

- [ ] MUA: SMTP, MTA: IMAP
- [ ] MUA: POP3, MTA: SMTP
- [ ] MUA: HTTP, MTA: FTP
- [ ] MUA: IMAP, MTA: SMTP
- [ ] MUA: TCP, MTA: UDP

<details><summary>👀 Respuesta</summary></details>

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

<details><summary>👀 Respuesta</summary></details>

---
