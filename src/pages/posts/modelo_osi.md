---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Modelo OSI'
pubDate: 2022-10-04
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/redes.webp'
    alt: 'El logotipo completo de Astro.'
tags: ["linux", "vim", "bash"]
category: Linux
# url: '/posts/vim.jpg'
#https://docs.astro.build/assets/arc.webp
---

## Para TODOS



- Siempre es necesario justificar, las respuestas no debidamente justificadas serán consideradas incorrectas.
- En los ejercicios de subnetting deberá ser claro tanto el por qué se selecciona una red y como así también se deben dejar expresados los cálculos o explicado el proceso para obtener el resultado.
- Al comenzar cada ejercicio se suponen todas las tablas vacías (CAM, Caché, ARP).
- Para mencionar la dirección MAC de un dispositivo utilice la notación: MAC_dev_iface. Ej.: la MAC de pc-B será MAC_PC-B_eth0.


## Parciales
- [Redes y comunicaciones - 1ra fecha (21/06/2022)](#redes-y-comunicaciones---1ra-fecha-21062022)
- [Redes y comunicaciones - 2da fecha (05/07/2022)](#redes-y-comunicaciones---2da-fecha-05072022)
- [2022-S1-3RA Resuelto](#2022-s1-3ra-resuelto)
- [2022-S2-1RA Resuelto](#2022-s2-1ra-resuelto)
- [2022-S2-2DA Resuelto](#2022-s2-2da-resuelto)
- [2023-S1-2DA Resuelto](#2023-s1-2da-resuelto)

---

## Redes y comunicaciones - 1ra fecha (21/06/2022)

### Ejercicio 1

La persona encargada de la organización redes.edu.ar requiere de su servicio de consultaría. Le presenta una explicación con el siguiente diagrama.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/03c61a56-df30-4acd-801c-4bd938ce35ca)

REQUISITOS:
- Ambos host WWW comparten un filesystem y solo alojan tres sitios estáticos `www.redes.edu.ar`, `sedeprincipal.redes.edu.ar` y `sedesecundaria.redes.edu.ar`. Debido a la alta demanda es necesario balancear carga entre los servidores.
- El host MAIL es un servidor `SMTP` utilizado por aplicaciones para enviar correos a los usuarios. No cumple ninguna otra función.
- NS1 y NS2 brindarán respuestas autoritativas para el dominio.
- El personal de IT usa el nombre FTP para acceder a dicho host, pero los usuarios prefieren un nombre más semántico como "sharedfolder".


a) Liste los registros DNS que debería tener configurado ns1 para cumplir con los requisitos dados.

b) Se desea configurar un nuevo host en la red de usuarios de Sede Principal. Indique todos los valores de red que el técnico de la red debería configurar para que el host pueda conectarse a Internet y a los recursos de la organización.

c) Si un usuario en PC-C ingresa mediante su navegador a http://www.redes.edu.ar ¿es posible determinar a qué host llegará esa solicitud?

d) Cuándo cualquiera de los hosts “www” recibe una solicitud, ¿Qué característica del protocolo en cuestión permite determinar qué sitio dentro de los que aloja debe presentar al cliente?

---

### Ejercicio 2

Dada la siguiente salida del comando **ss -nltu** en el host A:

![tabla](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/dcc2f605-eb4f-4372-a699-2b4a5b1fed48)

A. ¿Puede determinar y listar las direcciones IP que tiene asignadas host A?

B. ¿A qué fase de la conexión se corresponde el estado de la línea 12?. Independientemente de quien inicia esta fase, brinde dos intercambios de mensajes posibles asociados.

C. Indique como se vería con TCPDUMP la respuesta a los siguientes paquetes observados en el host A (incluya toda la información posible: direcciones IP, puertos, flags y números de secuencia y confirmación):
```bash
a. 192.168.22.20.35794 > <ip_host_A>.80: Flags [S], seq 110012, ack 0
b. 192.168.22.20.35794 > <ip_host_A>.9100: UDP, length 1024
c. 192.168.22.20.33444 > <ip_host_A>.8080: Flags [S], seq 552201, ack 0
```

---

### Ejercicio 3

Un usuario indica que utilizando un navegador accede a http://www.redes.edu/hola.txt y tiene problemas para visualizar el recurso solicitado. Usted se conecta al servidor y obtiene la siguiente captura de tráfico:

```bash
172.16.8.16.35794 > 192.168.22.31.80: Flags [S], seq 558012, win 65495, length 0
192.168.22.31.80 > 172.16.8.16.35794: Flags [SA], seq 160879, ack 558012, win 65483, length 0
172.16.8.16.35794 > 192.168.22.31.80: Flags [RA], ack 1, win 404, length 0

```
a) ¿En qué protocolo ubicaría el problema? ¿el problema está en el cliente o en el servidor?

b) ¿Qué datos del protocolo HTTP llegaron a ser intercambiados?

---

### Ejercicio 4
Utilizando CIDR, indique cuáles de los siguientes bloques pueden ser agrupados y determine el bloque CIDR resultante de dicha sumarización: 
- 113.33.215.0/24
- 113.33.216.0/24
- 113.33.217.0/24
- 113.33.218.0/23.

---

### Ejercicio 5

Utilizando el prefijo de red 13.14.56.0/23, asigne direcciones IP a las siguientes subredes, las cuales tienen los siguientes requerimientos: 
- Red A (117 hosts)
- Red B (97 hosts)
- Red C (192 hosts).

---

### Ejercicio 6

Indique todas las direcciones IPv6 con las que se autoconfigurará una PC utilizando EUI-64 considerando que:
- Tiene la dirección MAC 3c:e5:8d:96:9a:b5. 
- Está conectada a un segmento de red en el que se recibe un Router Advertisement del prefijo 2900:aabb::/64.

---

### Ejercicio 7

Dada la siguiente tabla de rutas:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ce75e85d-2925-43b6-b058-a38828c1f41c)

Indique por cuál interfaz se enviarán los siguientes paquetes y en cada uno, la dirección MAC de destino que tendría que usar (suponga que la conoce).

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6f161034-2f75-4444-ab84-93accfa07c25)

---

### Ejercicio 8

Considerando la siguiente topología y luego de que pc-A hace un ping exitoso a pc-B.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ac3d4965-2f62-494e-b824-95be01428ad3)

A. Complete la información del ARP request que realiza pc-A. Incluya la información de los protocolos ethernet y ARP.

B. Indique cómo quedan las tablas CAM de los dispositivos que están en el mismo segmento de broadcast que pc-A.

C. Si en pc-B hubiesen estado capturando tráfico en la interfaz eth0, ¿qué hubiesen escuchado? Para cada paquete capturado, indique el protocolo y si se trata de un requerimiento o una respuesta.


---

## Redes y comunicaciones - 2da fecha (05/07/2022)

### Ejercicio 1

La persona encargada de la organización redes.edu.ar requiere de su servicio de consultoría. Le presenta una explicación con el siguiente diagrama:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0ce6824b-683f-406a-8ddc-dfc4f1ef596b)

Considerar sobre los DNS servers:
- ns1: servidor autoritativo para redes.edu.ar
- ns-res: servidor resolver interno.
- a.riu.edu.ar: server autoritativo de la
zona edu.ar

Considerar sobre web servers:
- web-prin: tiene definido 2 sitios web.
wp1.redes.edu.ar y wp2.redes.edu.ar.


---

## 2022-S1-3RA Resuelto

---

## 2022-S2-1RA Resuelto

---

## 2022-S2-2DA Resuelto

---

## 2023-S1-2DA Resuelto


---