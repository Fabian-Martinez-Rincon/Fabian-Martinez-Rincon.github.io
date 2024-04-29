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

---

Indique en qué caso/s la consulta se hace de forma recursiva

- [ ] a. Cuando se consulta por un registro SOA.
- [ ] b. Cuando se consulta al servidor de DNS local que tenemos configurado en nuestra red.
- [ ] c. Al realizar una consulta como DNS local a un root server.
- [ ] d. Cuando el DNS local debe resolver una consulta que no tiene cacheado.
- [ ] e. Al consultar a un open DNS como 8.8.8.8.

---

SMTP/DNS. Si el usuario ada@da.com envía un e-mail a bob@b.org, el MTA de "a", qué registros de DNS deberá consultar el MTA local para contactar al MTA destino.

- [ ] a. NS
- [ ] b. SOA
- [ ] c. MX
- [ ] d. CNAME
- [ ] e. PTR
- [ ] f. A y/o AAAA

---

E-MAIL. El header de un e-mail "To:" lo agrega:

- [ ] a. MUA local.
- [ ] b. MTA Remoto.
- [ ] c. MTA local.

---

Con que comando está relacionado el header:

- [ ] a. RCPT FROM.
- [ ] b. MAIL FROM.
- [ ] c. HELO.
- [ ] d. MAIL TO.
- [ ] e. RCPT TO.

---

HTTP. Indicar afirmaciones verdaderas para el http/2 y http/3

- [ ] a. http/2 Usa conexiones persistentes por default.
- [ ] b. http/3 no usa conexiones TCP ya que trabaja sobre UDP.
- [ ] c. http/3 mayormente se implementa sobre TLS, es decir funciona cifrado, aunque no es requisito del RFC.
- [ ] d. http/2 moderniza la conexión en streams y pueden mandar parte de datos con diferentes prioridades.
- [ ] e. http/2 usa como protocolo de transporte TCP.
- [ ] f. Tanto http/2 como http/3 mejoran el rendimiento de HTTP sin cambiar semántica.


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

---

POP e IMAP. Indicar cuál de las siguientes afirmaciones es correcta.

- [ ] a. POP3 e IMAP permiten correo de forma segura utilizando SSL/TLS
- [ ] b. POP3 permite acceso al mailbox sin autenticación
- [ ] c. El protocolo POP3 solo permite acceder a la carpeta INBOX del mailbox.
- [ ] d. IMAP permite gestionar carpetas del lado del servidor
- [ ] e. LIST, USER y PASS son comandos del protocolo POP3

---

Marque las opciones correctas sobre FTP.

- [ ] a. En el FTP pasivo, la conexión de datos la inicia el servidor desde el port 20.
- [ ] b. En el FTP activo, la conexión de datos la inicia el servidor desde el port 20.
- [ ] c. Un archivo descargado se obtiene a través del canal de control
- [ ] d. FTP utiliza un canal de datos y un canal de control

---
