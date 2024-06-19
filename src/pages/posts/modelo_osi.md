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

## ⚠️ Para TODOS

- Siempre es necesario justificar, las respuestas no debidamente justificadas serán consideradas incorrectas.
- En los ejercicios de subnetting deberá ser claro tanto el por qué se selecciona una red y como así también se deben dejar expresados los cálculos o explicado el proceso para obtener el resultado.
- Al comenzar cada ejercicio se suponen todas las tablas vacías (CAM, Caché, ARP).
- Para mencionar la dirección MAC de un dispositivo utilice la notación: MAC_dev_iface. Ej.: la MAC de pc-B será MAC_PC-B_eth0.


## Parciales
- [Redes y comunicaciones - 1ra fecha (21/06/2022)](#redes-y-comunicaciones---1ra-fecha-21062022)
- [Redes y comunicaciones - 2da fecha (05/07/2022)](#redes-y-comunicaciones---2da-fecha-05072022)
- [Redes y comunicaciones - 3ra fecha (02/08/2022)](#redes-y-comunicaciones---3ra-fecha-02082022)
- [Redes y comunicaciones - 1ra fecha (05/12/2022)](#redes-y-comunicaciones---1ra-fecha-05122022)
- [Redes y comunicaciones - 2da fecha (06/02/2023)](#redes-y-comunicaciones---2da-fecha-06022023)
- [Redes y comunicaciones - 1ra fecha (28/06/2023)](#redes-y-comunicaciones---1ra-fecha-28062023)
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
- **ns1**: servidor autoritativo para redes.edu.ar
- **ns-res**: servidor resolver interno.
- **a.riu.edu.ar**: server autoritativo de la
zona edu.ar

Considerar sobre web servers: web-prin: tiene definido 2 sitios web. 
- wp1.redes.edu.ar
- wp2.redes.edu.ar.


a) Detalle las configuraciones necesarias en a.riu.edu.ar para hacer alcanzable en Internet el dominio redes.edu.ar.

b) Explique si considera que ns1 y ns-res tendrán algún tipo de intercambio DNS.

c) ¿Por qué SMTP, IMAP y POP para adjuntar una imagen o un ejecutable necesitan aplicar un encoding (ej. base64)?

d) Describa el requerimiento HTTP que se realizaría para acceder al homepage de wp1.redes.edu.ar.

e) Usando FTP Activo, ¿pueden los usuarios D y E intercambiar datos con el servidor FTP?

---

### Ejercicio 2

Dadas las salidas de los siguientes comandos ejecutados en el cliente y el servidor, responder

> Aclaración: grep es un comando de linux que filtra la salida en pantalla dejando solo aquellas entradas que incluyan la palabra pasada como parámetro. 
> En este caso, sobre la salida de ss -natu, se filtran para mostrar sólo las
lineas que contienen 110.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/acbbd639-e100-4409-a168-643afbfba4b6)

A. ¿Qué segmentos llegaron y cuáles se perdieron o están en camino? ¿Qué flags tendría seteado el segmento perdido o en camino?

B. ¿A qué protocolo de capa de aplicación y de transporte se está intentando conectar el cliente?

C. Dada la siguiente captura en un host, indique cuál sería la respuesta a los siguientes paquetes observados.

Incluya toda la información posible: 
- direcciones IP
- puertos
- flags
- números de secuencia y confirmación

```bash
a. 190.0.11.1.35794 > 190.0.0.1.110: Flags [S], seq 920152, ack 0
b. 127.0.0.1.12345 > 127.0.0.1.110: Flags [S], seq 110012, ack 0
c. 190.0.11.1.45678 > 192.168.22.1.110: UDP, length 1024
```

---

### Ejercicio 3

Dada la sesión TCP de la figura, completar los valores faltantes

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/16736da1-85e8-403d-8069-e69d1ee4e435)

---

### Ejercicio 4

Indique la última dirección de red de clase B que está incluida en el siguiente bloque CIDR 180.96.0.0/11

---

### Ejercicio 5

Usar el bloque 206.58.192.0/19 para generar la mayor cantidad de redes que alojen 700 hosts. Indique la dirección de las primeras 3 subredes.

---

### Ejercicio 6

En base al siguiente diagrama:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5b4af42b-67db-4f50-ad42-9d2d18ddbfb7)

A. Indique qué camino toman los paquetes enviados desde pc-A hacia pc-B.

B. Indique qué camino toman los paquetes enviados desde pc-A hacia WWW.

C. ¿Cómo queda la tabla de asociación del SW2, luego de comunicaciones exitosas entre pc-A y pc-B?

D. Complete la información del primer ARP-Reply recibido por pc-A. Incluya la información de los protocolos ethernet y ARP de dicha respuesta.

---

## Redes y comunicaciones - 3ra fecha (02/08/2022)

La persona encargada de la organización redes.edu.ar requiere de su servicio de
consultoría. Además, le presenta una explicación con el siguiente diagrama:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5f26c0b7-ce9b-4c45-83a5-0516a572e25e)

Considerar sobre los DNS servers:
- ns1: servidor autoritativo para redes.edu.ar
- ns-res: servidor resolver interno.
- a.riu.edu.ar: server autoritativo de la zona edu.ar

Considerar sobre web servers:
- web-prin: tiene definido 2 sitios web. wp1.redes.edu.ar y wp2.redes.edu.ar

a) Su primera tarea es asistir en la migración del servidor web principal con una nueva dirección IP: 203.0.113.229. Se le pide encontrar una manera en la que pueda ayudar a reducir el tiempo de propagación a 1 hora luego de que se efectivice la modificación de los registros DNS afectados. Indique qué solución propone, en cúal/cuáles servidores realizaría el cambio y para cada uno la configuración completa de los registros afectados.

b) El administrador capturó tráfico HTTP en web-prin y observó que los recursos solicitados por un user-agent fueron respondidos en orden, secuencialmente durante una misma conexión TCP. Indique qué versión HTTP capturó y cuál es la característica de HTTP observada.

c) Se le indica instalar un servidor de correo completo para los usuarios de ambas sedes en mail-1. Además instalar mail-2 para que en caso de que mail-1 deje de prestar servicio no se pierdan correos entrantes. El único requisito es que se utilicen los menores recursos de hardware posible. Indique qué protocolos configurará en cada servidor y adicionalmente incluya los registros DNS que intervienen en la solución.

d) El usuario de PC-D al conectarse al servicio ftp.redes.edu.ar logra ejecutar comandos pero falla al solicitar la descarga de un archivo. Previamente comprobó que el servicio FTP está debidamente configurado y que el usuario de PC-E puede utilizar el servicio sin problemas. Indique qué ocasiona el problema de PC-D y cómo solucionarlo de la manera más sencilla.

---

### Ejercicio 2

Dada la siguiente información obtenida del host Z,

```bash
# ss -tnu
Proto Dirección local Dirección remota State
1. tcp 192.168.99.123:33692 13.107.42.11:443 Established
2. tcp 192.168.8.5:45042 149.154.175.16:3306 Established
3. tcp 192.168.99.123:45043 149.154.175.16:3306 Established
4. udp 192.168.99.123:68 192.168.2.1:67
```

a) Entrada 1: El host 192.168.99.123 envió varios ACK indicando win=0. ¿Qué está indicando?

b) Entrada 2 y 3, ¿podría el host Z establecer una nueva conexión dados los siguientes parámetros?: 

```bash
192.168.8.5:45043 > 149.154.175.16:3306 Flags[S] , seq 100
```

c) Entrada 4: se pierde el quinto mensaje enviado desde el comienzo de la comunicación. ¿Qué acción tomará el protocolo con ese mensaje?

---

### Ejercicio 3

Dados los siguientes paquetes obtenidos de una captura, indique cuál sería el datagrama/segmento previo a cada uno de ellos (incluya toda la información posible: 
- protocolo
- direcciones IP
- puertos
- flags
- números de secuencia
- confirmación

```bash
a. 192.168.8.15.9999 > 192.168.8.253.16367: Flags [RA], seq 0, ack 3230256111, win 0, length 0
b. 127.0.0.1.1918 > 127.0.0.1.9050: Flags [A], seq 1, ack 1, win 65495, length 0
c. IP 192.168.8.15 > 192.168.8.253: ICMP 192.168.8.15 port 9 unreachable, length 36
```

---

### Ejercicio 4

Una empresa provee un servicio de interconexión para que sus clientes puedan conectarse directamente a una red privada mediante un switch de alta velocidad, sin pasar por internet. Al momento sólo obtuvieron 3 clientes: 
- cliente A (18 hosts)
- cliente B (13 hosts)
- cliente C (15 hosts)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b6cf88a7-873d-4cdc-ae5b-6e80cd9aba7a)

a) ¿Cuál es la capacidad máxima de clientes?

b) Utilice la red 192.168.12.128/25 para asignar una subred a los clientes A, B y C desperdiciando la menor cantidad de direcciones.

c) ¿Es posible aplicar CIDR en la tabla de ruteo de R-EMPRESA?.

---

### Ejercicio 5

Evalúe para cada caso si el mensaje llegará a destino, saltos que tomará y tipo de respuesta recibida el emisor.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b9d1cd12-c380-4c03-a958-a9551b7928ea)

a) Un mensaje ICMP enviado por PC-B a PC-C.
b) Un mensaje ICMP enviado por PC-C a PC-B.
c) Un mensaje ICMP enviado por PC-C a 8.8.8.8.
d) Un mensaje ICMP enviado por PC-B a 8.8.8.8.

---

### Ejercicio 6

Los siguientes argumentos son FALSOS, explique de manera concisa por qué (no más de 3 líneas). Debe abordar todos los conceptos que se mencionan en cada una.

a) Para ciertos casos en redes inalámbricas el protocolo Ethernet considera el uso de 3 o hasta 4 direcciones mac.
b) En una red IPv6, las tramas Ethernet utilizan direcciones de 64 bits que se extienden utilizando el método EUI64.
c) Una tabla ARP tiene entradas de sólo un segmento de broadcast.
d) El tamaño máximo de una trama está dado por el MSS, generalmente tiene un valor de 1500.

---

## Redes y comunicaciones - 1ra fecha (05/12/2022)

- Siempre es necesario justificar, las respuestas no debidamente justificadas serán consideradas incorrectas.
- Al iniciar cada ejercicio suponga que todas las tablas (CAM, ARP, Cache, ...) están vacías.

### Ejercicio 1

En un escenario donde se envió un correo desde la cuenta docente@redes.edu.ar a alumno@gmail.com, responda las siguientes consultas, teniendo en cuenta que se obtiene solamente con la información que se muestra en la tabla:

- ¿Qué host/s y en qué paso consultaron algunos de los MX de los dominios para establecer una comunicación?
- En función de la respuesta obtenida ¿tiene toda la información necesaria para establecer la
comunicación?

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/38dbd7c4-d3dd-4300-93d6-17858ebe5cd9)

### Ejercicio 2

Se tiene la siguiente salida del comando curl. A continuación se limpian las cachés y se accede a la misma URL desde un navegador web, se captura tráfico con Wireshark en la misma PC hasta la visualización completa del sitio. Describa, en forma secuencial, qué tráfico relacionado con esta acción encontrará en la captura, detallando para cada protocolo los campos solicitados según aplique:

```bash
$ curl -I http://mail.redes.unlp.edu.ar
HTTP/1.0 302 Moved Temporarily
Location: https://mail.info.unlp.edu.ar
Server: BigIP
Connection: Keep-Alive
Content-Length: 0
```

- a) DNS (query / response, tipo registro, nombre registro, valor)
- b) HTTP (línea de requerimiento)
- c) ARP (request / reply, mac origen, mac destino)
- d) IMAP (ip origen / ip destino)

---

### Ejercicio 3

Teniendo en cuenta la siguientes consideraciones en conjunto con la captura TCP que se muestra, responder:
- Al host A 10.0.1.10 aún le quedan 372 bytes por enviar y luego iniciará el cierre de la comunicación.
- Al host B 10.0.3.10 no le quedan datos por enviar.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ecba31b4-73a3-4e7a-a9dd-fa451f6d3d52)

a) ¿Cuál es el diagnóstico de lo que está sucediendo?

b) ¿Podrá el host 10.0.1.10 enviar los datos faltantes? En tal caso indique las líneas faltantes a la
comunicación hasta su cierre siguiendo el esquema de campos que tiene la captura.

---

### Ejercicio 4

Responda basándose en la siguiente captura:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c697a858-0f3a-4f5a-b45e-760c03b838ee)

a) Indique qué desencadenó y para qué se utilizó el intercambio ARP (observar todo el intercambio) .

b) Mencionar tres posibles eventos por los cuales el emisor, 192.168.4.10, no recibirá ninguna respuesta porparte del receptor para el mensaje de la tercera línea.

c) ¿Con qué evento de la captura está relacionado el quinto mensaje y cómo se interpreta?


**Tenga presente la topología para los siguientes ejercicios.**

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/837671a3-e297-41c5-a41c-1c7e217261c2)


- El tráfico entre Red B-Red C y Red B-Red D pasa por R3. En cualquier otro caso, la estrategía es la elección de la ruta con menos saltos.
- El Router R2 solo tiene rutas hacia las redes internas (Red A, B, C y D).
- Todas las redes, a excepción de Red D, salen a Internet.

---

### Ejercicio 5
Segmentación de la topología y asignación de direcciones

a) Utilice la red 212.252.0.0/23 para segmentar la red desperdiciando la menor cantidad de direcciones IP posible.

b) Realice la asignación de direcciones IP a toda la topología con las redes obtenidas en el punto anterior y a las interfaces de los routers faltantes

---

### Ejercicio 6

Armar la tabla de ruteo del router R4 de la topología. Utilice sumarización siempre que sea posible.

---

### Ejercicio 7

¿Cómo quedarían las tablas de Switch 1 y Switch 5 luego de cada uno de los siguientes eventos? No considerar el Intercambio de mensajes adicionales al indicado y tener en cuenta el ruteo del punto anterior .

a) PC-A envía un segmento TCP con el flag SYN activo a PC-C.
b) PC-B envía un paquete IP con TTL 2 a PC-A.
c) PC-C envía un segmento TCP con los flags Reset y ACK activos a PC-A
d) PC-D envía un ICMP (Echo Request) a PC-C.

---

## Redes y comunicaciones - 2da fecha (06/02/2023)

Siempre es necesario justificar, las respuestas no debidamente justificadas serán consideradas incorrectas. Considere que todas las tablas cachés están vacías para cada ejercicio.

### Ejercicio 1

En base a la siguiente topología y la tabla de ruteo del router C, responder:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/04e0e3c3-ea9b-4937-b22d-c330d635e323)

Router C

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c6daae7a-bd0c-4b41-a05a-b61ea2fcc465)

```bash
1. IP 191.8.0.5:2323 > 191.8.0.35:80: Flags [S], seq 1363516609, win 512, length 0
2. IP 191.8.0.35:80 > 191.8.0.5:2323: Flags [SA], seq 2407054621, ack 1363516610 win 6240, length 0
3. IP 191.8.0.165:2836 > 191.8.0.35:80: Flags [S], seq 1273089217, win 512, length 0
4. IP 191.8.0.35:80 > 191.8.0.165:2836: Flags [SA], seq 1949827, ack 127308218 win 6240, length 0
5. IP 10.0.0.5 > 191.8.0.35: ICMP net 191.8.0.165 unreachable
```

a) Avisan de un problema de acceso entre los dispositivos y contamos la captura de tráfico realizada en el Web Server. Asumiendo que las IP están correctamente asignadas en los dispositivos de toda la topología, indique qué problemas podrían estar ocurriendo y cuáles serían las soluciones posibles

b) Asumiendo que la red está funcionando correctamente, sin tener en cuenta lo evaluado en el punto a, indique de qué forma se podría reducir la tabla de ruteo del router C que se visualiza manteniendo el acceso a todas las redes.

c) La empresa decidió migrar únicamente los servidores de la Red C a una nueva red, Red D, conectada al router B usando alguna de las redes disponibles teniendo en cuenta que la dirección inicial a partir de la cual se realizó el subnetting es 191.8.0.0/23. Se debe asignar una de las redes libres de forma que se pueda aplicar CIDR en el router A desperdiciando la menor cantidad posible de direcciones y con la capacidad de asignar direcciónes IPs como máximo a 14 hosts.

- i) Indique la dirección de red que se asignará detallando el desarrollo para su obtención.
- ii) Realice tabla de ruteo del router A de forma que se pueda acceder a todas las redes por el camino más corto, indicando las redes que se simplificaron.

---

### Ejercicio 2

¿Cómo quedaría la tabla CAM del switch S_red_C luego del intercambio de la captura del webserver? (solo tener en cuenta los mensajes que se muestran en la captura)

---

### Ejercicio 3

Se desea agregar un servicio de mail para los usuarios de todas las redes. Para asegurarse un buen servicio se agregarán 2 servidores de mail.

a) Indique todos los registros que se deberán agregar en el servidor de DNS teniendo en cuenta que el dominio es campeones.com y los servidores mailreda.campeones.com (principal) se encuentra en la red D y alt1.mailreda.campeones.com (secundario) en la red A

b) Al momento que el cliente desea recibir sus mails el servicio deberá cumplir con los siguientes requisitos: no guardar copia de los mails en el servidor por defecto, permitir enviar correos cifrados. Indique cuál es el protocolo elegido.

---

### Ejercicio 4

Teniendo en cuenta la tabla de ruteo y captura que se muestran en el punto 1, y asumiendo que desde el router B se accede a la Red C por router C, indique qué evento/s de la captura producirán tráfico ARP entre los routers B y C y cuáles serían los ARP Request (indicar datos de Ethernet y ARP) enviados.


---

### Ejercicio 5)

En base a la siguiente salida de un comando ejecutado en PC-A, seleccione las opciones verdaderas


| Proto |  Dirección | local | Dirección | remota | State |
| --- | --- | --- | --- | --- | --- |
| udp |  127.0.0.1:53 | 0.0.0.0:* | |
| tcp |  0.0.0.0:25 | 0.0.0.0:* | Listen |
| tcp |  127.0.0.1:143 | 0.0.0.0:* | Listen |
| tcp |  127.0.0.1:110 | 0.0.0.0:* | Listen |
| tcp |  0.0.0.0:993 | 0.0.0.0:* | Listen |
| tcp |  127.0.0.1:25 | 127.0.0.1:31866 | Established |
| tcp |  127.0.0.1:31866 | 127.0.0.1:25 | Established |
| tcp |  202.1.2.2:17236 | 21.2.6.6:443 | Established |
| tcp |  202.1.2.2:32232 | 21.2.6.6:443 | Established |
| tcp |  202.1.2.2:25 | 21.2.6.6:8273 | Established |
| tcp |  202.1.2.2:15647 | 21.2.6.6:110 | Established |


- [ ] I. Si otra PC en la red de PC-A envía un segmento a PC-A con el flag SYN y puerto destino 110, recibirá como respuesta un RST/ACK.
- [ ] II. La PC-A tiene establecida una conexión IMAP.
- [ ] III. La PC-A tiene establecida una conexión POP.
- [ ] IV. Hay un total de 6 conexiones TCP establecidas.
- [ ] V. La PC-A tiene la IP 127.0.0.1
- [ ] VI. La PC-A tiene la IP 21.2.6.6.

---

### Ejercicio 6

En base a la salida completa, seleccione una o más de una respuesta correcta:

```bash
HTTP/1.1 200 OK
Date: Mon, 03 May 2021 02:25:12 GMT
Server: Apache
Last-Modified: Thu, 27 Apr 2017 13:43:00 GMT
Accept-Ranges: bytes
Content-Length: 430
X-XSS-Protection: 0;
Content-Type: text/html
```

- [ ] I. Se utilizó el método HEAD para realizar la consulta.
- [ ] II. Si la consulta hubiese llevado la cabecera “If-Modified-Since: Thu, 29 Apr 2017 17:31:00 GMT” el servidor habría respondido con el código “HTTP/1.1 304 Not Modified”.
- [ ] III. Tiene un total de 8 cabeceras.
- [ ] IV. Se utilizó el método GET para realizar la consulta.
- [ ] V. La respuesta incluye el recurso solicitado.
- [ ] VI. El servidor solo devolvió los encabezados de la página

---

### Ejercicio 7

Indique cuáles de las siguientes opciones son correctas en relación a IPv6.

- [ ] I. La dirección ff00::4437:39ff:fe65:f518 es una dirección IPv6 válida para asignar a un servidor web que deba ser accesible en Internet.
- [ ] II. La dirección ::/128 hace referencia a la máquina local (localhost).
- [ ] III. El checksum en IPv6 permite detectar errores en un paquete.
- [ ] IV. El protocolo Neighbour Discovery requiere ICMPv6 para funcionar.
- [ ] V. Es posible comunicar dos redes IPv6 por medio de una red IPv4.


---

## Redes y comunicaciones - 1ra fecha (28/06/2023)

Consideraciones:

- Todas las respuestas deberán ser debidamente justificadas en cualquier otro caso serán consideradas incorrectas. La justificación debe constar de información que demuestre dominio del área.
- Al comenzar cada ejercicio todas las tablas de caché, ARP, CAM… están vacías salvo que se indique lo contrario.


### Ejercicio 1

Dada la siguiente topología y considerando que:

- DNS Server es resolver solo para su red.
- unlp.unlp.edu.ar es resolver solo para su red y autoritativo para el espacio de nombres unlp.edu.ar.
- El resto de servidores DNS son solo autoritativos para los dominios que indican

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f067c682-154e-4fb3-b15e-2b4f483f829e)

---