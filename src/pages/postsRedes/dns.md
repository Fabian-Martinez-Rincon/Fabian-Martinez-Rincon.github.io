---
layout: ../../layouts/MarkdownPostLayout.astro
title: dig registros
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/dns.webp'
    alt: "Redes."
pubDate: 2024-04-07
tags: ["DNS", "EDNS"]
---


Queria tener un resumen a medida que voy haciendo la practica, separando bien la teoria de la practica

## Conceptos antes de la practica

<details><summary>DNS</summary>

`Investigue y describa cómo funciona el DNS.`

El Sistema de Nombres de Dominio (DNS) traduce nombres de dominio amigables para el humano (como "www.example.com") a direcciones IP numéricas (como "192.0.2.1") que las computadoras utilizan para identificar entre sí en la red.

`¿Cuál es su objetivo?`

El objetivo del DNS es permitir a las personas acceder a sitios web utilizando nombres de dominio fáciles de recordar en lugar de las complicadas direcciones IP, facilitando así la navegación en internet. Funciona a través de una red distribuida de servidores que resuelven nombres de dominio a direcciones IP.

</details>

<details><summary>Root Server</summary>

`¿Qué es un root server?`

Un **servidor raíz** (root server) en el contexto del DNS es uno de los servidores DNS que contiene una lista completa de los nombres de dominio y sus direcciones IP asociadas para los dominios de nivel superior (TLDs). Es la primera parada en la resolución de nombres de dominio en Internet, dirigida a encontrar la dirección IP de un TLD específico. Los root servers son una parte crítica de la infraestructura de Internet, asegurando que la resolución de nombres funcione de manera eficiente y efectiva.

</details>

<details><summary>Top Level Domain</summary>

`¿Qué es un generic top-level domain (gtld)?`

Un **dominio de nivel superior genérico** (generic top-level domain o gTLD) es una categoría de dominios de nivel superior en el DNS que no está asociada a un país específico. Originalmente, los gTLDs incluían dominios como .com, .org, .net, entre otros, destinados a entidades comerciales, organizaciones y redes. Desde 2012, el número de gTLDs se ha expandido significativamente para incluir una amplia variedad de nombres como .academy, .bike, .beer, entre otros, permitiendo una mayor personalización y especificación para las direcciones de sitios web .

</details>

<details><summary>Consultas Iterativas vs Consultas Recursivas</summary>

`¿Qué diferencia una consulta DNS recursiva de una iterativa?`

La diferencia principal entre una consulta DNS recursiva y una iterativa radica en el método de resolución y el grado de trabajo realizado por los servidores de nombres involucrados:

**Consulta DNS recursiva**:
En una consulta recursiva, el cliente (generalmente el resolver DNS del sistema operativo del usuario) solicita una resolución completa del nombre a un servidor DNS. Si este servidor no tiene la respuesta en su caché, se hace cargo de la tarea completa de resolver la dirección, realizando tantas consultas adicionales como sean necesarias a otros servidores DNS en la jerarquía para obtener la respuesta definitiva. Una vez que tiene la respuesta completa, se la devuelve al cliente original. Este método es más cómodo para el cliente, ya que solo tiene que hacer una solicitud y esperar la respuesta sin realizar más acciones.

**Consulta DNS iterativa**:
En una consulta iterativa, el cliente solicita una dirección a un servidor DNS, pero si este servidor no tiene la respuesta exacta, en lugar de resolver la consulta por completo, devuelve la mejor referencia que tiene a otro servidor DNS más cercano a la información solicitada. Luego, el cliente es responsable de consultar a este nuevo servidor DNS. Este proceso se repite iterativamente: el cliente va de servidor en servidor hasta que encuentra uno que pueda responder la pregunta directamente (con una respuesta autoritativa) o hasta que se agotan los servidores a consultar. En este caso, el trabajo de resolver el nombre se distribuye entre el cliente y varios servidores DNS.

La consulta recursiva es generalmente utilizada por los clientes finales ya que simplifica el proceso de resolución, mientras que la iterativa es utilizada entre servidores DNS para distribuir la carga y controlar el flujo de información.

</details>


<details><summary>Respuesta autoritativa</summary>

`¿Qué es una respuesta del tipo autoritativa?`

Una **respuesta autoritativa** en DNS es aquella que proviene de un servidor de nombres que tiene la autoridad directa sobre el nombre de dominio consultado. Esto significa que el servidor de nombres puede proporcionar una respuesta definitiva a una consulta de nombre de dominio sin tener que referirse a otro servidor de nombres. Las respuestas autoritativas se utilizan para confirmar la existencia de un registro de dominio y su correspondiente información, como la dirección IP asociada. En el proceso de resolución de nombres de DNS, una respuesta autoritativa se considera la fuente definitiva y fiable para la información solicitada sobre un dominio .

</details>

<details><summary>Servidor Primario y Servidor Secundario</summary>

`Cuando un dominio cuenta con más de un servidor, uno de ellos es el primario (o maestro) y todos los demás son los secundarios (o esclavos).`

La configuración de servidores DNS primarios (maestros) y secundarios (esclavos) se utiliza para la gestión eficaz de los registros DNS y para asegurar la redundancia y consistencia de la información de dominio a través de Internet.

`¿Cuál es la razón de que sea así?`

1. **Sincronización y Consistencia de Datos**: El servidor DNS primario mantiene la versión autoritativa de los registros de zona del dominio. Cualquier cambio en la configuración del DNS, como añadir o modificar registros A, MX, CNAME, etc., se realiza primero en el servidor primario. Los servidores secundarios luego sincronizan estos cambios desde el primario, asegurando que todos los servidores proporcionen respuestas consistentes a las consultas DNS.

2. **Redundancia y Disponibilidad**: Al tener múltiples servidores DNS secundarios, se garantiza que si el servidor primario falla o se vuelve inaccesible, los servidores secundarios pueden continuar respondiendo las consultas DNS, manteniendo la disponibilidad del servicio o sitio web asociado al dominio. Esto es crucial para la alta disponibilidad y la resistencia a fallos.

3. **Distribución de Carga**: Los servidores secundarios también ayudan a distribuir la carga de las solicitudes DNS, especialmente para sitios web de alto tráfico. Al distribuir las consultas entre varios servidores, se reduce la carga en el servidor primario y se mejora el tiempo de respuesta para los usuarios finales.

4. **Seguridad**: En algunos casos, mantener los servidores secundarios puede aumentar la seguridad. Por ejemplo, se puede configurar el servidor primario en una red segura, no accesible directamente desde Internet, y solo permitir que los servidores secundarios, ubicados en diferentes redes, sincronicen los datos y respondan a las solicitudes externas.

5. **Eficiencia en la Actualización de Datos**: Al realizar cambios solo en el servidor primario, se simplifica la administración de los registros DNS. Los servidores secundarios automáticamente obtienen y replican estos cambios a través de un proceso llamado transferencia de zona, lo que facilita la gestión de los registros DNS para los administradores.

Esta estructura de primario-secundario asegura que los cambios se propaguen de manera controlada y eficiente a través de la infraestructura de DNS, manteniendo la integridad y la disponibilidad de los datos críticos para el funcionamiento de Internet.

</details>

`Registros DNS`

<details><summary>A (Address Record)</summary>

Asocia un nombre de dominio con una dirección IPv4. Este registro se utiliza para traducir nombres de dominio a sus correspondientes direcciones IP para que los navegadores puedan encontrar y acceder a los sitios web.

</details>


<details><summary>MX (Mail Exchange Record)</summary>

Indica el servidor de correo que debe ser utilizado para entregar el correo electrónico a un dominio. Este registro es esencial para la configuración del correo electrónico y dirige el correo entrante a los servidores de correo adecuados.

</details>


<details><summary>PTR (Pointer Record)</summary>

Realiza la función opuesta a la de los registros A y AAAA; asocia una dirección IP con un nombre de dominio canónico. Se utiliza principalmente para la resolución inversa de DNS, es decir, cuando se traduce una dirección IP en un nombre de dominio.

</details>


<details><summary>AAAA (IPv6 Address Record)</summary>

Similar al registro A, pero se utiliza para asociar un nombre de dominio con una dirección IPv6.

</details>


<details><summary>SRV (Service Record)</summary>

Proporciona información sobre los servicios disponibles en un dominio. Especifica el nombre de host y el puerto para servicios específicos (como VoIP o mensajería instantánea), permitiendo a los dominios definir la localización de servidores y servicios específicos.

</details>


<details><summary>NS (Name Server Record)</summary>

Especifica los servidores DNS autorizados para un dominio. Estos servidores DNS son los que contienen los registros DNS de ese dominio y pueden responder consultas relativas a él.

</details>


<details><summary>CNAME (Canonical Name Record)</summary>

Permite que un dominio se asocie con otro nombre de dominio, el "nombre canónico". Se utiliza para apuntar varios nombres de dominio a un mismo lugar, facilitando la gestión de sitios que pueden ser accedidos mediante múltiples nombres.

</details>


<details><summary>SOA (Start of Authority Record)</summary>

Contiene información esencial sobre el dominio y la zona, como el servidor DNS principal, el correo electrónico del administrador, el intervalo de actualización y la caducidad. Es el registro inicial de cualquier zona de DNS y establece la autoridad del dominio.

</details>


<details><summary>TXT (Text Record)</summary>

Permite que los administradores inserten texto arbitrario en un registro DNS. Comúnmente se utiliza para verificar la propiedad del dominio, implementar políticas de seguridad del correo electrónico como SPF (Sender Policy Framework) y DKIM (DomainKeys Identified Mail), y otras aplicaciones que requieren leer datos en forma de texto de los registros DNS.

</details>

## Practica

---

- [dig www.redes.unlp.edu.ar A](#registro-a)
- [dig www.redes.unlp.edu.ar MX (Falta)](#registro-mx)
- [dig www.redes.unlp.edu.ar PTR](#registro-ptr)
- [dig www.redes.unlp.edu.ar SRV](#registro-srv)
- [dig redes.unlp.edu.ar NS](#registro-ns)
- [dig redes.unlp.edu.ar CNAME](#registro-cname)
- [dig redes.unlp.edu.ar SOA](#registro-soa)
- [dig redes.unlp.edu.ar TXT](#registro-txt)
- [Ejemplos Varios](#ejemplos-de-varios-comandos)
- [Ver los registros configurados para una URL](#ver-registros-para-una-url)

---

#### Registro A

```bash
dig www.redes.unlp.edu.ar A
```

```bash
redes@debian:~$ dig www.redes.unlp.edu.ar A

; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar A
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 57307
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 6df89cfa69fa329b0100000066135ae75d8578ee82028b7d (good)
;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	A

;; ANSWER SECTION:
www.redes.unlp.edu.ar.	300	IN	A	172.28.0.50

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 07 23:48:07 -03 2024
;; MSG SIZE  rcvd: 94
```

### Desglose de la Respuesta

```bash
; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar A
# Esta línea es el encabezado de la salida del comando `dig`, indicando la versión de `dig`
# usada (9.16.27) en un sistema Debian, seguido del dominio consultado 
# (`www.redes.unlp.edu.ar`) y el tipo de registro DNS solicitado (`A`).

;; global options: +cmd
# Indica las opciones globales aplicadas a la consulta. Aquí, `+cmd`
# muestra el comando exacto que se ejecutó.

;; Got answer:
# Confirma que se recibió una respuesta a la consulta DNS realizada.

;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 57307
# Sección de encabezado de la respuesta:
# - `opcode: QUERY` indica que la operación realizada fue una consulta DNS.
# - `status: NOERROR` muestra que la consulta se completó sin errores.
# - `id: 57307` es un identificador único para esta consulta, útil 
#               para emparejar solicitudes y respuestas en consultas múltiples.

;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
# Resumen de banderas y estadísticas de la consulta:
# - `qr` (query response) indica que esto es una respuesta a una consulta.
# - `aa` (authoritative answer) señala que la respuesta es autoritativa.
# - `rd` (recursion desired) muestra que se solicitó recursión.
# - `ra` (recursion available) indica que el servidor puede realizar consultas recursivas.
# - `QUERY: 1` muestra que se realizó una pregunta.
# - `ANSWER: 1` indica que se proporcionó una respuesta.
# - `AUTHORITY: 0` y `ADDITIONAL: 1` muestran el número de registros
#                                    de autoridad y adicionales proporcionados.

;; OPT PSEUDOSECTION:
# Sección para opciones extendidas (EDNS).
; EDNS: version: 0, flags:; udp: 1232
# Muestra la versión de EDNS utilizada y el tamaño máximo de paquete UDP soportado (1232 bytes).
; COOKIE: 6df89cfa69fa329b0100000066135ae75d8578ee82028b7d (good)
# Un mecanismo de seguridad que proporciona un 'cookie' para autenticar la respuesta.

;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	A
# La sección de pregunta de la consulta, pidiendo el registro A (dirección IPv4) para
# `www.redes.unlp.edu.ar`.

;; ANSWER SECTION:
www.redes.unlp.edu.ar.	300	IN	A	172.28.0.50
# La sección de respuesta proporciona la dirección IPv4 (`172.28.0.50`) asociada con el nombre 
# de dominio consultado, con un TTL de 300 segundos.

;; Query time: 0 msec
# El tiempo que tomó ejecutar la consulta, en este caso, 0 milisegundos, indicando una respuesta inmediata.

;; SERVER: 172.28.0.29#53(172.28.0.29)
# La dirección IP y puerto del servidor DNS que proporcionó la respuesta.

;; WHEN: Sun Apr 07 23:48:07 -03 2024
# La fecha y hora exactas de cuando se realizó la consulta.

;; MSG SIZE  rcvd: 94
# El tamaño del mensaje de respuesta recibido, en este caso, 94 bytes.
```

---

### Registro 

---

#### Registro NS

```bash
dig redes.unlp.edu.ar NS
```

```bash
redes@debian:~$ dig www.redes.unlp.edu.ar NS

; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar NS
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 10661
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: d4e9ac68ddcc83a00100000066135b1dd8e4fc49567742d0 (good)
;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	NS

;; AUTHORITY SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 07 23:49:01 -03 2024
;; MSG SIZE  rcvd: 127
```


### Desglose de la Respuesta

```bash
; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar NS
# Esta línea indica la ejecución del comando `dig` en un sistema Debian, consultando los registros NS 
# (Name Server o Servidores de Nombres) para el dominio www.redes.unlp.edu.ar.

;; global options: +cmd
# Muestra las opciones globales utilizadas por `dig`. 
# Aquí, `+cmd` significa que se incluye la línea de comando inicial en la salida para referencia.

;; Got answer:
# Indica que se ha recibido una respuesta del servidor DNS consultado.

;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 10661
# Sección del encabezado de la respuesta DNS:
# - `opcode: QUERY` especifica que la operación fue una consulta.
# - `status: NOERROR` indica que la consulta se completó sin errores.
# - `id: 10661` es el identificador de la transacción, útil para emparejar solicitudes con respuestas.

;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1
# Detalles de los indicadores y conteos de la consulta:
# - `qr` (query response) señala que esto es una respuesta.
# - `aa` (authoritative answer) indica que la respuesta es autoritativa.
# - `rd` (recursion desired) muestra que se solicitó recursión.
# - `ra` (recursion available) indica que el servidor puede hacer consultas recursivas.
# - `QUERY: 1` muestra que hubo una pregunta realizada.
# - `ANSWER: 0` indica que no hubo respuestas directas al tipo de registro solicitado (NS en este caso).
# - `AUTHORITY: 1` muestra que hay un registro de autoridad, en este caso un registro SOA.
# - `ADDITIONAL: 1` indica un registro adicional, probablemente relacionado con EDNS.

;; OPT PSEUDOSECTION:
# Sección de opciones extendidas del DNS (EDNS).
; EDNS: version: 0, flags:; udp: 1232
# Detalles de EDNS, incluyendo la versión y el tamaño máximo de UDP (1232 bytes).
; COOKIE: d4e9ac68ddcc83a00100000066135b1dd8e4fc49567742d0 (good)
# Un mecanismo de seguridad EDNS que proporciona un 'cookie' para autenticar solicitudes y respuestas.

;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	NS
# La sección de pregunta muestra la consulta realizada, solicitando los 
# registros NS para `www.redes.unlp.edu.ar`.

;; AUTHORITY SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
# Sección de autoridad que proporciona el registro SOA (Start of Authority) 
# para el dominio `redes.unlp.edu.ar`, 
# ya que no se encontraron registros NS específicos para `www.redes.unlp.edu.ar`. 
# El registro SOA incluye información crítica como el servidor de nombres principal, 
# el contacto de correo electrónico, y varios temporizadores para la zona.

;; Query time: 0 msec
# El tiempo que tomó realizar la consulta, 0 milisegundos, indicando una respuesta rápida.

;; SERVER: 172.28.0.29#53(172.28.0.29)
# La dirección IP y el puerto (#53) del servidor DNS que respondió a la consulta.

;; WHEN: Sun Apr 07 23:49:01 -03 2024
# La fecha y hora exacta en que se realizó la consulta.

;; MSG SIZE  rcvd: 127
# El tamaño del mensaje de respuesta recibido, en este caso, 127 bytes.

```

### Consulta

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6b1c7fa3-1684-4eff-8d6a-78d7ba7e2ac6)

### Respuesta

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/1ad414e9-537e-4828-8d63-3d6576a41359)

---

## Registro SOA

```bash
redes@debian:~$ dig redes.unlp.edu.ar SOA
```

```bash
redes@debian:~$ dig redes.unlp.edu.ar SOA

; <<>> DiG 9.16.27-Debian <<>> redes.unlp.edu.ar SOA
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 56877
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 7bd1c774cf6a7d920100000066135a6d5d9d14b02aa8c4b7 (good)
;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	SOA

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Sun Apr 07 23:46:05 -03 2024
;; MSG SIZE  rcvd: 123
```

### Desglose de la Respuesta

```bash
; <<>> DiG 9.16.27-Debian <<>> redes.unlp.edu.ar SOA
# Esta línea indica que se ejecutó el comando `dig` en una distribución Debian para consultar el registro SOA (Start of Authority) para el dominio redes.unlp.edu.ar. 

;; global options: +cmd
# Muestra las opciones globales aplicadas a la consulta. `+cmd` indica que el comando ejecutado se muestra en la salida para referencia.

;; Got answer:
# Confirma que se ha recibido una respuesta a la consulta DNS.

;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 56877
# Encabezado de la respuesta DNS:
# - `opcode: QUERY` indica que se realizó una consulta DNS.
# - `status: NOERROR` significa que la consulta se completó sin errores.
# - `id: 56877` es un identificador único para esta transacción, útil para correlacionar solicitudes y respuestas.

;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
# Detalles de la consulta:
# - `qr` (query response) señala que esto es una respuesta.
# - `aa` (authoritative answer) indica que la respuesta es autoritativa.
# - `rd` (recursion desired) muestra que se solicitó recursión.
# - `ra` (recursion available) indica que el servidor puede realizar consultas recursivas.
# - `QUERY: 1` muestra que hubo una pregunta realizada.
# - `ANSWER: 1` indica que se proporcionó una respuesta.
# - `AUTHORITY: 0` muestra que no hay registros de autoridad adicionales.
# - `ADDITIONAL: 1` indica un registro adicional, relacionado con EDNS.

;; OPT PSEUDOSECTION:
# Sección de opciones extendidas del DNS (EDNS).
; EDNS: version: 0, flags:; udp: 1232
# Muestra la versión de EDNS utilizada y el tamaño máximo de paquete UDP (1232 bytes).
; COOKIE: 7bd1c774cf6a7d920100000066135a6d5d9d14b02aa8c4b7 (good)
# Un mecanismo de seguridad EDNS que proporciona un 'cookie' para autenticar la consulta y la respuesta.

;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	SOA
# La sección de pregunta muestra que la consulta fue para el registro SOA del dominio redes.unlp.edu.ar.

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
# La sección de respuesta contiene el registro SOA para el dominio:
# - `ns-sv-b.redes.unlp.edu.ar.` es el servidor de nombres que tiene autoridad sobre el dominio.
# - `root.redes.unlp.edu.ar.` es el contacto administrativo para el dominio.
# - `2020031700` es el número de serie del registro SOA, importante para la gestión de cambios.
# - `604800` es el intervalo de refresco en segundos (cada 7 días).
# - `86400` es el tiempo de reintento en segundos (1 día), en caso de fallo al refrescar.
# - `2419200` es el tiempo de expiración en segundos (28 días), después del cual los datos se consideran obsoletos si no se logra la actualización.
# - `86400` es el valor mínimo de TTL (Time To Live) en segundos, que indica cuánto tiempo un registro puede ser cacheado por los servidores DNS.

;; Query time: 0 msec
# El tiempo que tomó realizar la consulta, 0 milisegundos, indicando una respuesta inmediata.

;; SERVER: 172.28.0.29#53(172.28.0.29)
# La dirección IP y el puerto del servidor DNS que respondió a la consulta.

;; WHEN: Sun Apr 07 23:46:05 -03 2024
# La fecha y hora exactas de cuando se realizó la consulta.

;; MSG SIZE  rcvd: 123
# El tamaño del mensaje de respuesta recibido, en este caso, 123 bytes.
```

---

### Registro TXT

```bash
dig redes.unlp.edu.ar TXT
```

```bash
redes@debian:~$ dig www.redes.unlp.edu.ar TXT

; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar TXT
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60088
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; COOKIE: 924f899d4f35a97f0100000066135f724ecbd98262016eb9 (good)
;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	TXT

;; AUTHORITY SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Mon Apr 08 00:07:30 -03 2024
;; MSG SIZE  rcvd: 127
```

### Desglose de la Respuesta

```bash
; <<>> DiG 9.16.27-Debian <<>> www.redes.unlp.edu.ar TXT
# Esta línea indica la ejecución del comando `dig` en un sistema Debian 
# para consultar registros TXT para el dominio www.redes.unlp.edu.ar.

;; global options: +cmd
# Indica las opciones globales aplicadas a la consulta, con `+cmd` mostrando el comando ejecutado.

;; Got answer:
# Confirma que se ha recibido una respuesta a la consulta DNS.

;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60088
# La sección del encabezado de la respuesta DNS:
# - `opcode: QUERY` especifica que la operación fue una consulta.
# - `status: NOERROR` significa que la consulta se completó sin errores.
# - `id: 60088` es el identificador único para esta transacción, 
#               útil para correlacionar solicitudes y respuestas.

;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1
# Resumen de la consulta y la respuesta:
# - `qr` (query response) señala que esto es una respuesta.
# - `aa` (authoritative answer) indica que la respuesta es autoritativa.
# - `rd` (recursion desired) muestra que se solicitó recursión.
# - `ra` (recursion available) indica que el servidor puede realizar consultas recursivas.
# - `QUERY: 1` indica que se hizo una pregunta.
# - `ANSWER: 0` indica que no se encontraron registros TXT para el dominio consultado.
# - `AUTHORITY: 1` muestra que hay un registro de autoridad, un registro SOA en este caso.
# - `ADDITIONAL: 1` indica la presencia de una sección adicional, probablemente relacionada con EDNS.

;; OPT PSEUDOSECTION:
# Sección de opciones extendidas del DNS (EDNS).
; EDNS: version: 0, flags:; udp: 1232
# Muestra la versión de EDNS utilizada y el tamaño máximo de paquete UDP (1232 bytes).
; COOKIE: 924f899d4f35a97f0100000066135f724ecbd98262016eb9 (good)
# Un mecanismo de seguridad EDNS que proporciona un 'cookie' para autenticar la consulta y la respuesta.

;; QUESTION SECTION:
;www.redes.unlp.edu.ar.		IN	TXT
# La sección de pregunta muestra la consulta realizada, solicitando los registros 
# TXT para www.redes.unlp.edu.ar.

;; AUTHORITY SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 
  	                            2020031700 604800 86400 2419200 86400
# La sección de autoridad contiene un registro SOA para el dominio redes.unlp.edu.ar. 
# Este registro proporciona información administrativa sobre el dominio:
# - `ns-sv-b.redes.unlp.edu.ar.` es el servidor de nombres principal.
# - `root.redes.unlp.edu.ar.` es el contacto administrativo.
# - `2020031700` es el número de serie de la zona, importante para controlar las
#                versiones y las actualizaciones.
# - `604800` es el intervalo de refresco en segundos (cada 7 días).
# - `86400` es el tiempo de reintento en segundos (1 día), en caso de fallo al refrescar.
# - `2419200` es el tiempo de expiración en segundos (28 días), después del cual los 
#             datos se consideran obsoletos si no se logra la actualización.
# - `86400` es el valor mínimo de TTL (Time To Live) en segundos, que indica 
#           cuánto tiempo un registro puede ser cacheado por los servidores DNS.

;; Query time: 0 msec
# El tiempo que tomó realizar la consulta, 0 milisegundos, indicando una respuesta rápida.

;; SERVER: 172.28.0.29#53(172.28.0.29)
# La dirección IP y el puerto del servidor DNS que respondió a la consulta.

;; WHEN: Mon Apr 08 00:07:30 -03 2024
# La fecha y hora exactas de cuando se realizó la consulta.

;; MSG SIZE  rcvd: 127
# El tamaño del mensaje de respuesta recibido, en este caso, 127 bytes.
```

---

### Ejemplos de Varios Comandos

```bash
redes@debian:~$ dig redes.unlp.edu.ar AAAA +noall +answer
redes@debian:~$ dig redes.unlp.edu.ar MX +noall +answer
redes.unlp.edu.ar.	86400	IN	MX	5 mail.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	MX	10 mail2.redes.unlp.edu.ar.
redes@debian:~$ dig redes.unlp.edu.ar A +noall +answer
redes@debian:~$ dig redes.unlp.edu.ar NS +noall +answer
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-a.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-b.redes.unlp.edu.ar.
redes@debian:~$ dig www.redes.unlp.edu.ar CNAME +noall +answer
redes@debian:~$ dig redes.unlp.edu.ar SOA +noall +answer
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
redes@debian:~$ dig redes.unlp.edu.ar TXT +noall +answer
redes@debian:~$ 
```

Mira, lo que esta pasando aca chiquiFabo, es que la url no tiene configurado ciertos registros, no es que estes loco :D

---

### Ver registros para una url

```bash
dig redes.unlp.edu.ar any
```

```bash
;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	ANY

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-a.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	NS	ns-sv-b.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	MX	10 mail2.redes.unlp.edu.ar.
redes.unlp.edu.ar.	86400	IN	MX	5 mail.redes.unlp.edu.ar.

;; ADDITIONAL SECTION:
ns-sv-a.redes.unlp.edu.ar. 604800 IN	A	172.28.0.30
ns-sv-b.redes.unlp.edu.ar. 604800 IN	A	172.28.0.29
mail.redes.unlp.edu.ar.	86400	IN	A	172.28.0.90
mail2.redes.unlp.edu.ar. 86400	IN	A	172.28.0.91

;; Query time: 0 msec
;; SERVER: 172.28.0.29#53(172.28.0.29)
;; WHEN: Tue Apr 09 16:03:51 -03 2024
;; MSG SIZE  rcvd: 266
```


### Resultado desglozado

```bash
;; QUESTION SECTION:
;redes.unlp.edu.ar.		IN	ANY
# Esta sección muestra la consulta realizada. Se pidió información "IN ANY", lo que significa que se solicitó cualquier tipo de registro DNS disponible para el dominio 'redes.unlp.edu.ar'.

;; ANSWER SECTION:
redes.unlp.edu.ar.	86400	IN	SOA	ns-sv-b.redes.unlp.edu.ar. root.redes.unlp.edu.ar. 2020031700 604800 86400 2419200 86400
# Un registro SOA (Start of Authority), que proporciona información esencial sobre el dominio, incluyendo el servidor de nombres principal (ns-sv-b.redes.unlp.edu.ar), el contacto administrativo (root.redes.unlp.edu.ar), el número de serie de la zona, y varios temporizadores relacionados con la actualización y la caducidad de los registros.

redes.unlp.edu.ar.	86400	IN	NS	ns-sv-a.redes.unlp.edu.ar.
# Un registro NS (Name Server), que indica que 'ns-sv-a.redes.unlp.edu.ar' es un servidor de nombres autoritativo para el dominio 'redes.unlp.edu.ar'.

redes.unlp.edu.ar.	86400	IN	NS	ns-sv-b.redes.unlp.edu.ar.
# Otro registro NS, señalando a 'ns-sv-b.redes.unlp.edu.ar' como otro servidor de nombres autoritativo para el dominio.

redes.unlp.edu.ar.	86400	IN	MX	10 mail2.redes.unlp.edu.ar.
# Un registro MX (Mail Exchange), que especifica 'mail2.redes.unlp.edu.ar' como servidor de correo para el dominio, con una prioridad de 10.

redes.unlp.edu.ar.	86400	IN	MX	5 mail.redes.unlp.edu.ar.
# Otro registro MX, que indica 'mail.redes.unlp.edu.ar' como servidor de correo para el dominio, con una prioridad de 5 (mayor prioridad que el anterior).

;; ADDITIONAL SECTION:
ns-sv-a.redes.unlp.edu.ar. 604800 IN	A	172.28.0.30
# La sección adicional proporciona direcciones IP para los servidores mencionados. Aquí, 'ns-sv-a.redes.unlp.edu.ar' se asocia con la dirección IP 172.28.0.30.

ns-sv-b.redes.unlp.edu.ar. 604800 IN	A	172.28.0.29
# Proporciona la dirección IP para 'ns-sv-b.redes.unlp.edu.ar', que es 172.28.0.29.

mail.redes.unlp.edu.ar.	86400	IN	A	172.28.0.90
# Da la dirección IP del servidor de correo 'mail.redes.unlp.edu.ar', que es 172.28.0.90.

mail2.redes.unlp.edu.ar. 86400	IN	A	172.28.0.91
# Proporciona la dirección IP para otro servidor de correo, 'mail2.redes.unlp.edu.ar', que es 172.28.0.91.

;; Query time: 0 msec
# El tiempo que tomó realizar la consulta, en este caso, fue instantáneo (0 milisegundos).

;; SERVER: 172.28.0.29#53(172.28.0.29)
# Indica el servidor DNS que respondió a la consulta, con su dirección IP y el puerto utilizado (53, el puerto estándar para DNS).

;; WHEN: Tue Apr 09 16:03:51 -03 2024
# Muestra la fecha y hora exactas en que se realizó la consulta.

;; MSG SIZE  rcvd: 266
# El tamaño total del mensaje de respuesta recibido, en bytes (266 en este caso).
```

Este resultado detalla los registros DNS recuperados para `redes.unlp.edu.ar` al solicitar cualquier tipo de registro (`ANY`). Proporciona una visión general de la configuración DNS del dominio, incluyendo servidores de nombres, servidores de correo, y la autoridad de inicio del dominio, junto con las direcciones IP asociadas a cada uno de estos servicios. La sección adicional ayuda a resolver nombres a direcciones IP sin necesidad de consultas adicionales.