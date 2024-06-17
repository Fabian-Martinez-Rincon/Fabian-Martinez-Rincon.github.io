---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Cap. de Transporte 2'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/capa-transporte.webp'
    alt: ''
tags: ["Capa de Aplicación"]
category: Redes
---

1. ¿Cuál es el puerto por defecto que se utiliza en los siguientes servicios?

Web / SSH / DNS / Web Seguro / POP3 / IMAP / SMTP

Investigue en qué lugar en Linux y en Windows está descrita la asociación utilizada por defecto para cada servicio.

2. Investigue qué es multicast. ¿Sobre cuál de los protocolos de capa de transporte funciona? ¿Se podría adaptar para que funcione sobre el otro protocolo de capa de transporte? ¿Por qué?

3. Investigue cómo funciona el protocolo de aplicación FTP teniendo en cuenta las diferencias en su funcionamiento cuando se utiliza el modo activo de cuando se utiliza el modo pasivo ¿En qué se diferencian estos tipos de comunicaciones del resto de los protocolos de aplicación vistos?


4. Suponiendo Selective Repeat; tamaño de ventana 4 y sabiendo que E indica que el mensaje llegó con errores. Indique en el siguiente gráfico, la numeración de los ACK que el host B envía al Host A

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/653cac3b-5502-4e3c-8e34-8b81e72895dc)

5. ¿Qué restricción existe sobre el tamaño de ventanas en el protocolo Selective Repeat?

6. De acuerdo a la captura TCP de la siguiente figura, indique los valores de los campos borroneados.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/1e394b0b-a017-4320-8366-c3e4db242c21)

7. Dada la sesión TCP de la figura, completar los valores marcados con 
un signo de interrogación.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/365d239d-3620-46e1-b8a9-b66075d8d175)


8. ¿Qué es el RTT y cómo se calcula? Investigue la opción TCP timestamp y los campos TSval y TSecr.

9. Para la captura tcp-captura.pcap, responder las siguientes preguntas.
- a. ¿Cuántos intentos de conexiones TCP hay?
- b. ¿Cuáles son la fuente y el destino (IP:port) para c/u?
- c. ¿Cuántas conexiones TCP exitosas hay en la captura? ¿Cómo diferencia las exitosas de las que no lo son? ¿Cuáles flags encuentra en cada una?
- d. Dada la primera conexión exitosa responder:
    - i. ¿Quién inicia la conexión?
    - ii. ¿Quién es el servidor y quién el cliente?
    - iii. ¿En qué segmentos se ve el 3-way handshake?
    - iv. ¿Cuáles ISNs se intercambian?
    - v. ¿Cuál MSS se negoció?
    - vi. ¿Cuál de los dos hosts envía la mayor cantidad de datos (IP:port)?
- e. Identificar primer segmento de datos (origen, destino, tiempo, número de fila y número de secuencia TCP).
    - i. ¿Cuántos datos lleva?
    - ii. ¿Cuándo es confirmado (tiempo, número de fila y número de secuencia TCP)?
    - iii. La confirmación, ¿qué cantidad de bytes confirma?
- f. ¿Quién inicia el cierre de la conexión? ¿Qué flags se utilizan? ¿En cuáles segmentos se ve (tiempo, número de fila y número de secuencia TCP)?

10. Responda las siguientes preguntas respecto del mecanismo de control de flujo.
- a. ¿Quién lo activa? ¿De qué forma lo hace?
- b. ¿Qué problema resuelve?
- c. ¿Cuánto tiempo dura activo y qué situación lo desactiva?

11. Responda las siguientes preguntas respecto del mecanismo de control de congestión.
- a. ¿Quién activa el mecanismo de control de congestión? ¿Cuáles son los posibles disparadores?
- b. ¿Qué problema resuelve?
- c. Diferencie slow start de congestion-avoidance.

12. Para la captura udp-captura.pcap, responder las siguientes preguntas.
- a. ¿Cuántas comunicaciones (srcIP,srcPort,dstIP,dstPort) UDP hay en la captura?
- b. ¿Cómo se podrían identificar las exitosas de las que no lo son?
- c. ¿UDP puede utilizar el modelo cliente/servidor?
- d. ¿Qué servicios o aplicaciones suelen utilizar este protocolo?¿Qué requerimientos tienen?
- e. ¿Qué hace el protocolo UDP en relación al control de errores?
- f. Con respecto a los puertos vistos en las capturas, ¿observa algo particular que lo
diferencie de TCP?
- g. Dada la primera comunicación en la cual se ven datos en ambos sentidos (identificar el primer datagrama):
 - i. ¿Cuál es la dirección IP que envía el primer datagrama?,¿desde cuál puerto?
 - ii. ¿Cuántos datos se envían en un sentido y en el otro?

13. Dada la salida que se muestra en la imagen, responda los ítems debajo

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8630972a-7e27-40fa-bdf4-0de96144eef8)

Suponga que ejecuta los siguientes comandos desde un host con la IP
10.100.25.90. Responda qué devuelve la ejecución de los siguientes comandos y, en caso que corresponda, especifique los flags.

- a. hping3 -p 3306 –udp 10.100.25.135
- b. hping3 -S -p 25 10.100.25.135
- c. hping3 -S -p 22 10.100.25.135
- d. hping3 -S -p 110 10.100.25.135

¿Cuántas conexiones distintas hay establecidas? Justifique