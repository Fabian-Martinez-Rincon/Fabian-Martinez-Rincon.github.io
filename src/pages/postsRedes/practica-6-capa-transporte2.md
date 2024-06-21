---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Cap. de Transporte 2'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/transporte.jpg'
    alt: ''
tags: ["Capa de Aplicación"]
category: Redes
---

## Indice

- [Ejercicio 1](#ejercicio-1)
- [Ejercicio 2](#ejercicio-2)
- [Ejercicio 3](#ejercicio-3)
- [Ejercicio 4](#ejercicio-4)
- [Ejercicio 5](#ejercicio-5)
- [Ejercicio 6](#ejercicio-6)
- [Ejercicio 7](#ejercicio-7)
- [Ejercicio 8](#ejercicio-8)
- [Ejercicio 9](#ejercicio-9)
- [Ejercicio 10](#ejercicio-10)
- [Ejercicio 11](#ejercicio-11)
- [Ejercicio 12](#ejercicio-12)
- [Ejercicio 13](#ejercicio-13)


---

### Ejercicio 1. 

`¿Cuál es el puerto por defecto que se utiliza en los siguientes servicios?`

Web / SSH / DNS / Web Seguro / POP3 / IMAP / SMTP

Investigue en qué lugar en Linux y en Windows está descrita la asociación utilizada por defecto para cada servicio.

Los puertos por defecto para los servicios comunes son establecidos por convenciones ampliamente aceptadas y utilizadas por los sistemas operativos y aplicaciones de red para facilitar la comunicación estándar a través de Internet. A continuación, te proporciono los puertos por defecto para cada uno de los servicios que mencionaste:

***Puertos por Defecto***

1. **Web (HTTP)**: **80**
   - Utilizado para tráfico web no cifrado.

2. **SSH (Secure Shell)**: **22**
   - Utilizado para la administración segura de sistemas remotos.

3. **DNS (Domain Name System)**: **53**
   - Utilizado para resolver nombres de dominio en direcciones IP.

4. **Web Seguro (HTTPS)**: **443**
   - Utilizado para tráfico web cifrado.

5. **POP3 (Post Office Protocol versión 3)**: **110**
   - Utilizado para descargar correos electrónicos desde un servidor de correo a un cliente. El puerto **995** se utiliza para POP3 sobre SSL/TLS.

6. **IMAP (Internet Message Access Protocol)**: **143**
   - Utilizado para acceder y gestionar correos electrónicos directamente desde el servidor de correo. El puerto **993** se utiliza para IMAP sobre SSL/TLS.

7. **SMTP (Simple Mail Transfer Protocol)**: **25**
   - Utilizado para el envío de correos electrónicos. Para SMTP seguro, que incluye cifrado, el puerto **465** (SMTPS) o **587** (SMTP con STARTTLS) son comúnmente usados.

### Ubicación de la Asociación de Puertos en Sistemas Operativos

#### Linux
En los sistemas operativos basados en Linux, la asociación de puertos con servicios está comúnmente definida en el archivo `/etc/services`. Este archivo lista los nombres de servicios, sus puertos correspondientes y el tipo de protocolo (TCP/UDP). Puedes visualizar este archivo usando un editor de texto o mediante comandos como `cat` o `less`:

```bash
cat /etc/services
```

Este archivo es utilizado por varias aplicaciones y procesos del sistema para determinar los números de puerto para nombres de servicios conocidos.

#### Windows
En Windows, la asociación de puertos no se define en un archivo de configuración plano como en Linux. Sin embargo, Windows usa la base de datos de Servicios de Red, similar al archivo `/etc/services` de Linux, pero está incorporada en el sistema y no es tan directamente accesible por los usuarios. Los desarrolladores pueden acceder a esta información programáticamente usando la API de Windows.

Para administrar y ver configuraciones de puerto, las herramientas como PowerShell y diversas interfaces de administración de red GUI pueden ser utilizadas. Por ejemplo, puedes usar `netstat` en la línea de comandos para ver las conexiones activas y los puertos que están escuchando:

```powershell
netstat -aon
```

Esta información te proporcionará una visión clara de los servicios y sus puertos en uso activo.

Estos son los detalles básicos sobre los puertos y dónde encontrar su configuración en los sistemas operativos más comunes. Si necesitas más información detallada sobre cómo cambiar o gestionar estos puertos o configuraciones adicionales, estaré encantado de ayudar.

---

### Ejercicio 2

`¿Qué es Multicast?`

Multicast es un método de comunicación de red que permite la entrega eficiente de información a múltiples destinos simultáneamente utilizando una única transmisión. Este enfoque es especialmente útil en aplicaciones donde los mismos datos necesitan ser enviados a varios receptores, como en la transmisión de video y audio en vivo, actualizaciones de software a gran escala, y la difusión de información financiera.

En el modelo de multicast, los datos se envían solo una vez desde la fuente, independientemente del número de destinatarios. Los routers dentro de la red son responsables de replicar los paquetes a medida que se necesitan para alcanzar todos los destinos suscritos, lo que reduce significativamente el ancho de banda necesario en comparación con el envío de una copia individual a cada receptor.

`¿Sobre cuál de los protocolos de capa de transporte funciona el Multicast?`

Multicast generalmente funciona sobre **UDP** (User Datagram Protocol) en la capa de transporte:

- **UDP** es un protocolo sin conexión y no garantiza la entrega, el orden de llegada de los paquetes, ni la integridad de los datos. Sin embargo, su simplicidad y eficiencia lo hacen ideal para multicast, donde la velocidad y la eficiencia de la transmisión son más críticas que la fiabilidad de la entrega de cada paquete individual.
- **UDP** permite que un servidor envíe un solo paquete a un grupo de direcciones IP de destino, lo que es fundamental para la implementación de servicios multicast. Las aplicaciones que utilizan multicast manejan la control de la fiabilidad y el orden en niveles superiores si es necesario.

`¿Se podría adaptar para que funcione sobre el otro protocolo de capa de transporte?`

El otro protocolo de capa de transporte principal es **TCP** (Transmission Control Protocol), que es orientado a conexión, confiable y garantiza que todos los paquetes lleguen en orden y sin errores. Aunque teóricamente es posible implementar algún tipo de "multicast" sobre TCP, hay varias razones por las que esto no es práctico ni recomendable:

1. **Orientado a Conexión:** TCP requiere una conexión establecida entre un único emisor y un único receptor, lo que significa que debería establecerse una conexión individual con cada receptor en un escenario de multicast. Esto eliminaría los beneficios de eficiencia de ancho de banda que proporciona el multicast.

2. **Sobrecarga:** La gestión de conexiones múltiples simultáneamente para cada receptor aumentaría considerablemente la sobrecarga en el servidor, haciendo que el proceso sea ineficiente en términos de recursos computacionales y de red.

3. **Control de Congestión y Flujo:** TCP implementa control de flujo y control de congestión, ajustando la tasa de envío según la capacidad del receptor y las condiciones de la red. En un entorno multicast, estos mecanismos serían difíciles de administrar de manera efectiva debido a la variabilidad en las capacidades de recepción y las condiciones de red entre un grupo potencialmente grande y diverso de receptores.

`Conclusión`

Multicast está diseñado para ser utilizado con UDP debido a su naturaleza sin conexión y eficiente. Adaptarlo para funcionar sobre TCP presentaría desafíos significativos que contrarrestarían las ventajas inherentes del multicast. En cambio, para escenarios donde se requiere fiabilidad en la entrega multicast, las aplicaciones a menudo implementan sus propios mecanismos de control en niveles superiores o utilizan otros protocolos diseñados específicamente para la entrega confiable de multicast, como Reliable Multicast Protocol (RMP).

---

### Ejercicio 3

Investigue cómo funciona el protocolo de aplicación FTP teniendo en cuenta las diferencias en su funcionamiento cuando se utiliza el modo activo de cuando se utiliza el modo pasivo 

¿En qué se diferencian estos tipos de comunicaciones del resto de los protocolos de aplicación vistos?

El **Protocolo de Transferencia de Archivos (FTP)** es un protocolo de la capa de aplicación utilizado para transferir archivos entre sistemas a través de una red TCP/IP. FTP es uno de los protocolos de Internet más antiguos y aún se utiliza ampliamente hoy en día debido a su eficacia en la transferencia de archivos grandes. Uno de los aspectos más interesantes y únicos de FTP es su uso de dos canales de comunicación separados: un canal de control y un canal de datos.

`Modos de FTP: Activo vs. Pasivo`

FTP puede operar en dos modos distintos: **activo** y **pasivo**. Estos modos afectan cómo se establece la conexión de datos entre el cliente y el servidor.

`Modo Activo`
En el **modo activo**, el cliente inicia la conexión al servidor para enviar comandos a través del puerto 21 (canal de control). Para transferir datos, el servidor intentará establecer una conexión de retorno al cliente. Aquí están los pasos específicos:
1. El cliente se conecta desde un puerto aleatorio a la puerto 21 del servidor y envía el comando `PORT` especificando en qué puerto del cliente el servidor debe conectarse para transferir datos.
2. El servidor entonces inicia una conexión desde su puerto 20 (puerto de datos) al puerto especificado por el cliente para transferir datos.

`Modo Pasivo`
En el **modo pasivo**, que fue desarrollado para trabajar con firewalls y NAT (Network Address Translation), la conexión se inicia de manera diferente:
1. El cliente se conecta desde un puerto aleatorio al puerto 21 del servidor y envía el comando `PASV`, solicitando al servidor que entre en modo pasivo.
2. El servidor abre un puerto aleatorio y envía este número de puerto al cliente. Luego, el cliente inicia la conexión de datos al puerto especificado por el servidor desde otro puerto aleatorio.

`Diferencias con Otros Protocolos de Aplicación`

Comparando FTP con otros protocolos de aplicación, aquí hay algunas diferencias clave:
1. **Dos Canales Separados (Control y Datos):** A diferencia de HTTP, SMTP y otros protocolos de aplicación que generalmente utilizan una sola conexión (TCP) para todo el tráfico, FTP utiliza dos conexiones separadas, lo que permite que los comandos y la transferencia de datos se manejen de forma independiente. Esto significa que la sesión de control puede permanecer abierta para enviar comandos adicionales sin interrumpir la transferencia de datos en curso.

2. **Estado de la Conexión:** FTP es un protocolo basado en estado, lo que significa que mantiene una sesión de control durante toda la interacción entre el cliente y el servidor. Esto es diferente de protocolos sin estado como HTTP, donde cada solicitud es independiente.

3. **Complejidad y Flexibilidad:** FTP ofrece una gama más amplia de comandos que permiten no solo la transferencia de archivos sino también operaciones detalladas en el sistema de archivos del servidor (como cambiar directorios, listar archivos y cambiar permisos), lo que lo hace más complejo pero también más flexible.

4. **Configuración del Firewall/NAT:** El uso de dos canales separados y especialmente el modo activo de FTP pueden complicar la configuración de firewalls y NAT, lo que no suele ser un problema con protocolos más modernos como HTTP/S.

En resumen, el FTP es un protocolo poderoso y flexible con algunas peculiaridades, especialmente en cómo maneja las conexiones, que requieren consideraciones especiales cuando se trabaja con firewalls y en entornos con NAT.

---

### Ejercicio 4

Suponiendo Selective Repeat; tamaño de ventana 4 y sabiendo que E indica que el mensaje llegó con errores. Indique en el siguiente gráfico, la numeración de los ACK que el host B envía al Host A

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/653cac3b-5502-4e3c-8e34-8b81e72895dc)

El gráfico que proporcionaste muestra una secuencia de eventos entre dos hosts, Host A y Host B, en un escenario de comunicación de red utilizando el protocolo Selective Repeat ARQ (Automatic Repeat reQuest). Este protocolo es utilizado para el control de errores en redes de datos y permite la retransmisión selectiva de paquetes que han sido detectados como erróneos o que no han sido confirmados dentro de un tiempo de espera.

`Descripción de la Secuencia:`

En el gráfico, observamos lo siguiente:
- Host A envía múltiples paquetes a Host B.
- Las líneas negras indican que los paquetes fueron enviados.
- Las líneas rojas indican que se enviaron acuses de recibo (ACK) de vuelta a Host A.
- La línea magenta marcada con una 'E' muestra que el paquete llegó con errores.

`Análisis de la Numeración de los ACK:`

Con Selective Repeat y un tamaño de ventana de 4:
1. **Paquetes Enviados desde Host A a Host B**: La numeración de paquetes enviados se observa en el lado izquierdo del gráfico. Las flechas negras que se mueven hacia arriba representan los paquetes que llegan correctamente y la flecha magenta representa el paquete con errores.
2. **ACKs Enviados desde Host B a Host A**: Las flechas rojas indican los ACKs enviados por Host B a Host A. Estos ACKs confirmarán la recepción de los paquetes que llegaron correctamente.

`Interpretación Basada en el Gráfico:`
- **ACK 1**: Confirmación del paquete 1 (el primer ACK rojo que sube).
- **ACK 2**: Confirmación del paquete 2 (segundo ACK rojo que sube).
- **No hay ACK para el paquete 3**: Ya que el paquete 3 llega con errores (indicado por la línea magenta con 'E'), no se envía un ACK para este paquete en este momento.
- **ACK 4**: Confirmación del paquete 4 (tercer ACK rojo que sube).
- **ACK 5**: Confirmación del paquete 5 (cuarto ACK rojo que sube).

`Notas Adicionales:`
- **ACK de paquete 3**: Eventualmente, Host A deberá retransmitir el paquete 3 debido a que no recibió un ACK por este, y suponiendo que Host A detecta la falta de este ACK (posiblemente a través de un timeout o por la recepción de ACKs de paquetes con números de secuencia superiores sin haber recibido el ACK para el paquete 3).

`Conclusión:`
En Selective Repeat, cada paquete es reconocido independientemente, y el receptor solo envía ACKs para los paquetes que ha recibido correctamente. Los paquetes que llegan con errores (como el paquete 3 en tu diagrama) deben ser retransmitidos y no se les envía ACK hasta que sean recibidos correctamente en una nueva transmisión.

---

### Ejercicio 5

`¿Qué restricción existe sobre el tamaño de ventanas en el protocolo Selective Repeat?`

En el protocolo Selective Repeat ARQ, una de las principales restricciones es sobre el tamaño de la ventana de transmisión y recepción. Esta restricción es crucial para evitar ambigüedades en la numeración de los paquetes y para garantizar que el protocolo funcione correctamente y de manera eficiente. El tamaño de la ventana determina cuántos paquetes pueden ser enviados sin recibir un acuse de recibo (ACK) y aún así mantener el orden y el control correctos sobre los paquetes que necesitan ser retransmitidos.

`Restricción sobre el Tamaño de Ventanas en Selective Repeat`

El tamaño de la ventana en el protocolo Selective Repeat no debe ser mayor que la mitad del espacio de numeración de secuencia disponible. Esto es debido a las siguientes razones:

1. **Desambiguación de Números de Secuencia:**
   - En el protocolo Selective Repeat, cada paquete tiene un número de secuencia, y estos números se utilizan para identificar y confirmar la recepción de paquetes individuales.
   - Para evitar cualquier confusión entre un paquete nuevo y la retransmisión de un paquete viejo que no ha sido aún acusado, es crucial que los números de secuencia de los paquetes en tránsito no se superpongan. Si el tamaño de la ventana fuera mayor que la mitad del espacio de numeración de secuencia, podría haber ambigüedad en la identificación de los paquetes, particularmente cuando algunos paquetes se pierden y requieren retransmisión.

2. **Maximización de la Utilización del Canal sin Confusión:**
   - Con un tamaño de ventana que es la mitad del espacio de numeración de secuencia, se maximiza la cantidad de datos en tránsito en el canal sin riesgo de confundir un paquete nuevo con uno antiguo. Esto permite una utilización eficiente del canal, manteniendo al mismo tiempo la integridad y la fiabilidad de los datos.

`Ejemplo`

Si el espacio de numeración de secuencia es de 0 a 15 (16 posibles números de secuencia), el tamaño de la ventana en Selective Repeat no debe exceder 8. Esto asegura que en cualquier momento, los paquetes en tránsito o pendientes de acuse de recibo no superarán la mitad del espacio de numeración, eliminando cualquier posibilidad de confusión entre los números de secuencia de los paquetes viejos y nuevos.

`Conclusión`

Esta restricción sobre el tamaño de la ventana en Selective Repeat es fundamental para el correcto funcionamiento del protocolo, especialmente en entornos donde la pérdida de paquetes o los altos tiempos de latencia pueden causar que los paquetes lleguen fuera de orden o necesiten ser retransmitidos frecuentemente. Al limitar el tamaño de la ventana a la mitad del espacio de numeración de secuencia, Selective Repeat equilibra eficientemente entre el alto rendimiento y la confiabilidad en la transmisión de datos.


---

### Ejercicio 6

De acuerdo a la captura TCP de la siguiente figura, indique los valores de los campos borroneados.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/1e394b0b-a017-4320-8366-c3e4db242c21)

La captura de pantalla que has compartido muestra un segmento TCP capturado, probablemente con Wireshark u otra herramienta de análisis de protocolos. Basándome en la información visible y los estándares comunes de los paquetes TCP, puedo ayudarte a deducir o explicar los valores típicos de los campos que están borrosos en la imagen:

1. **Número de Secuencia:**
   - **Valor visible:** `1047417501`
   - **Descripción:** Este número identifica la posición de los primeros datos del paquete en el flujo de datos del emisor. El número de secuencia de un segmento es el del primer byte de datos en el segmento.

2. **Número de Reconocimiento:**
   - **Valor visible:** `3933822138`
   - **Descripción:** Este número indica el próximo número de secuencia que el receptor está esperando. Esto confirma la recepción de todos los bytes anteriores.

3. **Longitud del Encabezado:**
   - **Valor visible:** `40 bytes`
   - **Descripción:** Este campo, también conocido como "Data Offset", indica la longitud del encabezado TCP en múltiplos de 4 bytes. Un valor de 40 bytes indica que hay opciones adicionales de TCP presentes, ya que el mínimo tamaño de encabezado TCP es de 20 bytes.

4. **Flags:**
   - **Valores visibles:** `SYN, ACK`
   - **Descripción:** El flag `SYN` es utilizado para iniciar una conexión y sincronizar números de secuencia. El flag `ACK` indica que el campo de número de reconocimiento es válido.

5. **Tamaño de la Ventana:**
   - **Valor visible:** `5792`
   - **Descripción:** Este campo especifica el tamaño de la ventana de recepción (en bytes) que el emisor está dispuesto a recibir, lo que controla el flujo de datos para evitar el desbordamiento del buffer del receptor.

6. **Checksum:**
   - **Valor visible:** `0x9803`
   - **Descripción:** Este valor es calculado por el emisor y verificado por el receptor para asegurar la integridad del encabezado y de los datos de un segmento TCP.

7. **Opciones de TCP:**
   - **Posibles valores:** Podría incluir varias opciones como MSS (Maximum Segment Size), SACK Permitted (Selective Acknowledgment Permitted), Timestamps, y otros. Estas opciones están diseñadas para mejorar el rendimiento de TCP en diversos entornos de red.

Dada la información que se muestra en la captura y la descripción estándar de los campos en los paquetes TCP, estos valores son típicos o esperados. Para análisis más detallado o específico, se recomendaría tener acceso directo a la herramienta de captura o tener una visión completa del paquete sin campos borrosos.

---

### Ejercicio 7 Este esta re mal xd

Dada la sesión TCP de la figura, completar los valores marcados con 
un signo de interrogación.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/365d239d-3620-46e1-b8a9-b66075d8d175)


`1. Establecimiento de la conexión y primera transmisión de datos`

- **1.360 s: SYN (Seq = 0)**
  - **Host A envía un SYN** para iniciar la conexión con Secuencia `0`.

- **1.360 s: SYN, ACK (Seq = 0, Ack = 1)**
  - **Host B responde con SYN, ACK**. Este paquete confirma la recepción del SYN inicial (`Ack = 1`) y también envía su propio número de secuencia inicial como `0`.

- **1.360 s: ACK (Seq = 1, Ack = 1)**
  - **Host A envía un ACK**. El número de secuencia `1` confirma la recepción del SYN de Host B, y el número de reconocimiento `1` indica que Host A está listo para recibir datos comenzando con el primer byte de Host B.

`2. Transmisión de datos`

- **3.581 s: PSH, ACK, Len = 9 (Seq = 1, Ack = 1)**
  - **Host A envía datos (9 bytes) con PSH y ACK**. El número de secuencia `1` indica que estos son los primeros datos enviados, y el número de reconocimiento `1` todavía está confirmando el SYN inicial de Host B.

- **8.796 s: ACK (Seq = 1, Ack = 10)**
  - **Host B envía un ACK**. El número de secuencia `1` indica que Host B no ha enviado datos propios, y el número de reconocimiento `10` confirma la recepción de los 9 bytes de datos, esperando el byte de secuencia `10` a continuación.

- **14.382 s: PSH, ACK, Len = 5 (Seq = 10, Ack = 1)**
  - **Host A envía otros 5 bytes de datos**. El número de secuencia `10` es continuación del último byte de datos confirmado, y el número de reconocimiento `1` todavía confirma solo el SYN de Host B.

- **14.382 s: ACK (Seq = 1, Ack = 15)**
  - **Host B envía un ACK**. El número de secuencia `1` sigue sin cambiar porque Host B no ha enviado datos propios, y el número de reconocimiento `15` confirma los 5 bytes adicionales enviados por Host A.

`3. Cierre de la conexión`

- **15.190 s: FIN, ACK (Seq = 15, Ack = 1)**
  - **Host A envía un FIN para comenzar a cerrar la conexión**, indicando que no enviará más datos. El número de secuencia `15` sigue desde el último byte enviado, y el número de reconocimiento `1` sigue igual.

- **15.190 s: FIN, ACK (Seq = 1, Ack = 16)**
  - **Host B también inicia el cierre con un FIN**. El número de secuencia `1` indica que no ha habido datos enviados por B, y el número de reconocimiento `16` confirma la recepción del FIN de A.

- **15.190 s: ACK (Seq = 16, Ack = 2)**
  - **Host A envía un ACK final**. El número de secuencia `16` sigue desde el FIN de A, y el número de reconocimiento `2` confirma el FIN de B.

Este análisis debe proporcionar una comprensión clara y detallada de los números de secuencia y de reconocimiento en toda la secuencia de comunicación TCP mostrada en tu imagen.

---

### Ejercicio 8



`¿Qué es el RTT?`

El **RTT (Round-Trip Time)** es el tiempo que tarda un paquete de datos en viajar desde un origen a un destino y volver al origen. Este tiempo incluye la propagación de los datos a través del medio físico, los retrasos en los dispositivos de red como routers y switches, y el tiempo de procesamiento en el destino para generar una respuesta. En redes de computadoras y comunicaciones, el RTT es fundamental para entender y optimizar el rendimiento de la red.

`¿Cómo se calcula el RTT?`

En el contexto de TCP, el RTT se calcula comúnmente como el tiempo entre el envío de un paquete y la recepción de un acuse de recibo (ACK) para ese paquete. Sin embargo, como los paquetes pueden tomar diferentes rutas y experimentar diferentes retrasos, el cálculo del RTT a menudo implica un promedio de varios valores de RTT medidos a lo largo del tiempo para obtener un valor más estable. En la práctica, los algoritmos como el **Algoritmo de Karn** y **Jacobson/Karels algorithm** se utilizan para ajustar y suavizar los cálculos del RTT.

#### `Investigue la opción TCP timestamp y los campos TSval y TSecr.`

`Implementación Técnica`
TCP usa el valor del RTT para ajustar el **RTO (Retransmission Timeout)**, que es el tiempo que espera TCP antes de retransmitir un paquete que no ha sido acusado, presumiendo que se ha perdido en la red.



`Opción TCP Timestamp`

La opción **TCP Timestamp**, definida en el RFC 7323, es utilizada para mejorar el cálculo del RTT y proveer una mejor estimación del RTO. Además, permite a TCP funcionar de manera eficiente sobre conexiones de larga distancia y de alta velocidad (conocidas como redes LFN, Long Fat Networks). Esta opción añade dos campos al encabezado de los segmentos TCP:

1. **TSval (Timestamp Value)**: Es un valor de marca de tiempo que el emisor pone en el paquete cuando lo envía.
2. **TSecr (Timestamp Echo Reply)**: Es un campo en el que el emisor copia el último valor TSval recibido del receptor.

`Funcionamiento de los Campos TSval y TSecr`

- **TSval**: Incrementa cada vez que el reloj del sistema del emisor avanza. Este campo se utiliza para ayudar al receptor a calcular el RTT, proporcionando un sello de tiempo preciso de cuándo fue enviado originalmente el paquete.
  
- **TSecr**: Es utilizado por el receptor para devolver el valor de TSval que recibió en el último paquete enviado por el emisor. Este valor reflejado permite al emisor medir el RTT midiendo el tiempo entre cuando el segmento original fue enviado y cuando se recibe el segmento con el TSecr correspondiente.

`Beneficios de la Opción TCP Timestamp`

- **Mejora la precisión del RTT**: Al usar marcas de tiempo explícitas, se puede calcular de manera más precisa el RTT, especialmente en redes donde los paquetes pueden ser reordenados.
- **Evita la ambigüedad en la secuencia**: Ayuda en situaciones donde los números de secuencia pueden volver a envolverse (wrap around).
- **Protección contra ataques PAWS (Protection Against Wrapped Sequence numbers)**: Previene errores en la conexión causados por la reutilización de números de secuencia viejos.

En resumen, el RTT es un componente vital para la administración de rendimiento en TCP, y la opción TCP Timestamp es una herramienta avanzada que ayuda a optimizar esta métrica, facilitando la operación de TCP en una variedad de entornos de red.


---


### Ejercicio 9 Esto es un re quilombo

Para la captura tcp-captura.pcap, responder las siguientes preguntas.

#### a. ¿Cuántos intentos de conexiones TCP hay?

Deberías contar el número de banderas SYN que no tienen un SYN-ACK correspondiente o que tienen múltiples retransmisiones del SYN para identificar intentos de conexión.

#### b. ¿Cuáles son la fuente y el destino (IP:port) para c/u?

Para cada intento de conexión, mira en los campos de fuente y destino del segmento TCP en los paquetes SYN.

#### c. ¿Cuántas conexiones TCP exitosas hay en la captura? ¿Cómo diferencia las exitosas de las que no lo son? ¿Cuáles flags encuentra en cada una?

Las conexiones exitosas se identifican por un handshake de tres vías completado, observable por la presencia de las banderas SYN, SYN-ACK, y ACK. Las conexiones no exitosas podrían tener solo SYN o SYN seguido por RST sin progresar a un handshake completo.

#### d. Dada la primera conexión exitosa responder:

- **¿Quién inicia la conexión?** Generalmente es el host que envía el primer SYN.
- **¿Quién es el servidor y quién el cliente?** El servidor es el dispositivo que responde con SYN-ACK, y el cliente es el que envía el SYN inicial.
- **¿En qué segmentos se observa el handshake de tres vías?** Busca el primer SYN, la respuesta SYN-ACK, y el ACK final.
- **¿Cuáles son los números de secuencia iniciales (ISNs)?** Estos se encuentran en los campos de número de secuencia de los paquetes SYN y SYN-ACK.
- **¿Qué MSS se negoció?** Esto se encuentra en el campo de opciones de los paquetes SYN, etiquetado como tamaño máximo de segmento.
- **¿Qué host envía la mayor cantidad de datos?** Suma las longitudes de la carga útil de los segmentos TCP enviados por cada host después del handshake para determinar esto.



#### e. Identificar primer segmento de datos (origen, destino, tiempo, número de fila y número de secuencia TCP).

- **Origen, destino, tiempo, número de fila y número de secuencia TCP:** Busca el primer paquete después del handshake con una carga útil mayor que cero.
- **¿Cuántos datos lleva?** Este es el tamaño de la carga útil, sin contar el encabezado TCP.
- **¿Cuándo y cómo se confirma?** Se confirma por un segmento ACK, que reconocerá el número de secuencia igual al número de secuencia original más la longitud de los datos.
- **¿Qué cantidad de bytes confirma la confirmación?** Sería el incremento en el campo de reconocimiento sobre el ACK anterior.


#### f. ¿Quién inicia el cierre de la conexión? ¿Qué flags se utilizan? ¿En cuáles segmentos se ve (tiempo, número de fila y número de secuencia TCP)?

- **¿Quién inicia el cierre?** Busca quién envía la primera bandera FIN.
- **¿Qué banderas se utilizan?** Típicamente, FIN y ACK se usan.
- **¿En qué segmentos se ve el cierre?** Estos son los segmentos con FIN y el ACK final.

 



Para llevar a cabo este análisis, abrirías el archivo pcap en Wireshark, seguirías el flujo TCP y revisarías los detalles de los paquetes como se describió. Podrías filtrar tu vista en Wireshark con expresiones como `tcp.flags.syn == 1` para paquetes SYN, o `tcp.flags.fin == 1` para paquetes FIN, para aislar los paquetes relevantes para tu análisis.

Para más detalles sobre cómo usar Wireshark para tal análisis, considera explorar recursos y tutoriales específicamente sobre cómo usar Wireshark, ya que te proporcionarán instrucciones paso a paso sobre cómo navegar e interpretar los datos.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7fd320f7-0482-41db-ba7a-856618a2a899)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f47904a5-bb45-4761-957b-58c46ca23e9e)

---

### Ejercicio 10

`Responda las siguientes preguntas respecto del mecanismo de control de flujo.`

El control de flujo es un mecanismo fundamental en la gestión de comunicaciones en redes de computadoras, especialmente en protocolos de la capa de transporte como TCP (Protocolo de Control de Transmisión). Aquí se explica cómo funciona este mecanismo, quién lo activa, el problema que resuelve, y bajo qué condiciones opera.

#### a. ¿Quién lo activa? ¿De qué forma lo hace?

El control de flujo es activado tanto por el emisor como por el receptor en una comunicación de datos:

- **Emisor**: Regula la cantidad de datos que envía al receptor antes de recibir un acuse de recibo (ACK), asegurándose de no saturar el buffer del receptor.
- **Receptor**: Proporciona retroalimentación al emisor sobre cuántos datos puede recibir sin riesgo de perder información. Esto lo hace a través del campo "ventana" en los encabezados de los paquetes TCP, que indica la cantidad de bytes que está dispuesto a recibir.

Por ejemplo, en TCP, cada segmento que un receptor recibe y procesa exitosamente es respondido con un ACK, donde se especifica la cantidad de espacio libre en el buffer del receptor, informando al emisor cuántos datos más puede enviar antes de que el receptor se sature.

#### b. ¿Qué problema resuelve?

El control de flujo resuelve varios problemas clave en la transmisión de datos en redes:

- **Prevención de la saturación del receptor**: Evita que el emisor envíe más datos de los que el receptor puede procesar a la vez. Sin control de flujo, el buffer del receptor podría desbordarse, llevando a la pérdida de paquetes y a una reducción en la eficiencia de la red debido a la necesidad de retransmisiones.
- **Optimización del uso del ancho de banda**: Asegura que la transmisión de datos se haga a una velocidad que ambos, emisor y receptor, puedan manejar eficientemente, adaptándose a las fluctuaciones en la disponibilidad del ancho de banda y en las capacidades de procesamiento del receptor.


#### c. ¿Cuánto tiempo dura activo y qué situación lo desactiva?


El control de flujo está activo durante toda la sesión de la conexión TCP y se ajusta dinámicamente según las condiciones de la red y el estado de los buffers de recepción:

- **Duración**: Permanece activo mientras la conexión TCP está establecida. Cada paquete transmitido puede ajustar el estado del control de flujo según las necesidades actuales del receptor.
- **Desactivación**: El mecanismo de control de flujo se desactiva automáticamente al cerrar la conexión TCP. Además, si el buffer del receptor se vacía (es decir, todos los datos han sido procesados y el espacio en el buffer es suficiente), el tamaño de la ventana comunicada al emisor puede incrementarse, permitiendo la transmisión de más datos.

Este sistema adaptativo de control de flujo es crucial para mantener la estabilidad y eficiencia en las comunicaciones sobre redes que operan bajo el protocolo TCP, adaptándose continuamente a las condiciones cambiantes de la red y a la capacidad de procesamiento de los dispositivos conectados.

---

### Ejercicio 11

Responda las siguientes preguntas respecto del mecanismo de control de congestión.

El control de congestión en redes de computadoras, particularmente en el Protocolo de Control de Transmisión (TCP), es un mecanismo fundamental diseñado para evitar la sobrecarga de la red, lo que puede llevar a una degradación del rendimiento general y pérdida de paquetes. A continuación, se exploran los aspectos fundamentales de este mecanismo.

### a. ¿Quién activa el mecanismo de control de congestión? ¿Cuáles son los posibles disparadores?

**Activación:**
El mecanismo de control de congestión es activado por el emisor basándose en la percepción de eventos de la red que sugieren congestión.

**Disparadores Posibles:**
1. **Pérdida de Paquetes:** Identificada por la ausencia de un acuse de recibo (ACK) para un paquete enviado dentro del tiempo esperado, lo que puede llevar al emisor a retransmitir el paquete y ajustar su tasa de envío.
2. **Aumento en el Tiempo de Ida y Vuelta (RTT):** Un incremento significativo en el RTT puede indicar que los paquetes están experimentando colas más largas en los routers, lo que es un síntoma de congestión.
3. **Indicaciones Explícitas de Pérdida de Paquetes (ECN):** Algunas redes modernas utilizan señalizaciones explícitas como el ECN (Explicit Congestion Notification), que permite a los routers informar al emisor de la presencia de congestión antes de que se pierdan los paquetes.

### b. ¿Qué problema resuelve?

El control de congestión busca abordar varios problemas críticos en las redes:
- **Prevención de la Caída del Rendimiento de la Red:** Cuando demasiados paquetes son enviados simultáneamente, los routers pueden empezar a perder paquetes porque sus buffers se llenan, lo que lleva a retransmisiones que, a su vez, agravan la congestión.
- **Maximización del Uso del Ancho de Banda:** Ajustando la tasa de envío de datos, el control de congestión ayuda a utilizar el ancho de banda disponible de manera más eficiente, asegurando un flujo de datos constante sin sobrecargar la red.
- **Equidad:** El control de congestión también busca asegurar que todos los usuarios de la red tengan un acceso justo al ancho de banda, evitando que cualquier emisor monopolice la capacidad de la red.

### c. Diferencie slow start de congestion-avoidance.

**Slow Start:**
- **Función:** Slow Start es una fase de inicio en la gestión de control de congestión de TCP donde el emisor comienza con una tasa baja de envío de datos y aumenta exponencialmente esta tasa cada RTT hasta que ocurre una pérdida de paquetes o hasta alcanzar un umbral conocido como `ssthresh`.
- **Objetivo:** Rápidamente encontrar un nivel seguro de utilización de ancho de banda.

**Congestion Avoidance:**
- **Función:** Una vez que se alcanza el umbral `ssthresh`, ya sea por la detección de pérdida de paquetes o al finalizar Slow Start, TCP entra en la fase de Congestion Avoidance. En esta fase, el incremento en la ventana de congestión es más conservador, típicamente aumentando linealmente, lo que significa que la ventana de congestión aumenta en 1 MSS (tamaño máximo de segmento) por cada RTT completo.
- **Objetivo:** Mantener el envío de datos en un nivel cercano al punto de congestión de la red sin provocar una pérdida de paquetes, buscando un equilibrio entre eficiencia y estabilidad en el flujo de datos.

En resumen, **Slow Start** es utilizado para rampar rápidamente la tasa de envío desde cero, mientras que **Congestion Avoidance** toma el control una vez que se ha encontrado una base de utilización y busca afinar el rendimiento sin saturar la red. Estos mecanismos son críticos para mantener la robustez y eficiencia de las comunicaciones en redes complejas y altamente utilizadas.

---

### Ejercicio 12

Para la captura udp-captura.pcap, responder las siguientes preguntas.
### a. ¿Cuántas comunicaciones (srcIP,srcPort,dstIP,dstPort) UDP hay en la captura?

En Wireshark, filtras los paquetes por protocolo UDP y luego utilizas las estadísticas de "Conversaciones" para ver cuántas comunicaciones únicas hay, clasificadas por dirección IP de origen y destino, así como los puertos.

### b. ¿Cómo se podrían identificar las exitosas de las que no lo son?

Para UDP, que es un protocolo sin conexión, no hay una confirmación explícita del receptor como los ACK en TCP. Por lo tanto, determinar si una comunicación fue "exitosa" puede depender de si el protocolo o aplicación de capa superior tiene algún método para confirmar la recepción de los datos. Podrías buscar respuestas correspondientes a las solicitudes en la misma sesión para determinar si una comunicación fue exitosa.

### c. ¿UDP puede utilizar el modelo cliente/servidor?

Sí, UDP puede ser usado en un modelo cliente/servidor. Por ejemplo, un servidor DNS utiliza UDP y opera en un modelo cliente/servidor donde el cliente envía una solicitud de resolución de DNS al servidor, y el servidor responde con la información solicitada.

### d. ¿Qué servicios o aplicaciones suelen utilizar este protocolo? ¿Qué requerimientos tienen?

Aplicaciones que requieren baja latencia y pueden tolerar alguna pérdida de paquetes a menudo utilizan UDP. Ejemplos incluyen:

- DNS (Domain Name System)
- Streaming de video y audio
- Juegos en línea
- VoIP (Voice over IP)

Estos servicios requieren transferencias rápidas y, en caso de pérdida de paquetes, a menudo es mejor continuar sin retransmisión para evitar la latencia.

### e. ¿Qué hace el protocolo UDP en relación al control de errores?

UDP realiza un mínimo control de errores. Proporciona checksums para verificar la integridad de los datos del encabezado y la carga útil. Si un paquete tiene un checksum incorrecto, generalmente es descartado por el receptor, pero no hay retransmisión automática de paquetes erróneos.

### f. Con respecto a los puertos vistos en las capturas, ¿observa algo particular que lo doferencie de TCP?

En UDP, los puertos se utilizan para identificar las aplicaciones de destino de manera similar a TCP. Sin embargo, no hay una negociación de conexión, y los paquetes simplemente se envían a esos puertos esperando que la aplicación esté escuchando.

### g. Dada la primera comunicación en la cual se ven datos en ambos sentidos (identificar el primer datagrama):


- i. ¿Cuál es la dirección IP que envía el primer datagrama?,¿desde cuál puerto?
- ii. ¿Cuántos datos se envían en un sentido y en el otro?

Para estas preguntas, necesitarías revisar los detalles específicos de los paquetes en Wireshark, observando los campos de dirección IP y puerto en el encabezado UDP de los paquetes, así como la longitud de la carga útil de UDP que indica la cantidad de datos enviados.

Para realizar un análisis práctico, abrirías el archivo pcap con Wireshark, aplicarías un filtro por UDP y examinarías las columnas y detalles de los paquetes para responder a estas preguntas específicas.

---

### Ejercicio 13

Dada la salida que se muestra en la imagen, responda los ítems debajo

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8630972a-7e27-40fa-bdf4-0de96144eef8)

Suponga que ejecuta los siguientes comandos desde un host con la IP
10.100.25.90. Responda qué devuelve la ejecución de los siguientes comandos y, en caso que corresponda, especifique los flags.

#### a. `hping3 -p 3306 –udp 10.100.25.135`
- **Qué devuelve:** Dado que el puerto 3306 (usualmente utilizado por MySQL) está en estado `LISTEN` en la captura, y el comando está enviando paquetes UDP, lo más probable es que no haya respuesta directa del host de destino, ya que MySQL escucha en TCP, no en UDP.
- **Flags:** No aplica, ya que UDP no usa flags como TCP.

#### b. `hping3 -S -p 25 10.100.25.135`
- **Qué devuelve:** No se espera que devuelva una respuesta, porque no hay ningún servicio listado como escuchando en el puerto 25 (SMTP) en TCP en la dirección IP dada. Es probable que el host envíe un paquete TCP RST en respuesta.
- **Flags:** `S` (SYN) para iniciar la conexión TCP, pero probablemente recibirás un RST como respuesta.

#### c. `hping3 -S -p 22 10.100.25.135`
- **Qué devuelve:** Este comando intenta establecer una conexión TCP al puerto 22, que está en estado `LISTEN` y asociado a `sshd` en la captura. Deberías recibir un SYN-ACK en respuesta, indicando que el puerto está abierto y escuchando.
- **Flags:** `S` (SYN) enviado y `SA` (SYN-ACK) recibido en caso de que el puerto esté abierto.

#### d. `hping3 -S -p 110 10.100.25.135`
- **Qué devuelve:** Similar al comando para el puerto 25, no hay evidencia en la captura de que el puerto 110 (POP3) esté abierto o en escucha en la IP especificada. Es probable que recibas un RST como respuesta.
- **Flags:** `S` (SYN) enviado, probablemente un RST recibido.


#### ¿Cuántas conexiones distintas hay establecidas? Justifique

Para determinar **cuántas conexiones distintas están establecidas**, observamos las filas con estado `ESTAB` en la salida:

- Hay conexiones establecidas entre `127.0.0.1:3306` y `127.0.0.1:34338` (MySQL local).
- Entre `10.100.25.135:222` y `200.100.120.210:61576` (SSH).
- Otra conexión local de SSH entre `127.0.0.1:34330` y `127.0.0.1:3306`.

**Justificación:** Las conexiones en estado `ESTAB` indican que la conexión TCP ha completado el handshake y está activa, permitiendo el tráfico bidireccional de datos. Estas conexiones se han establecido y confirmado mediante el intercambio de paquetes SYN, SYN-ACK y ACK, mostrando que ambos extremos están comunicando activamente.

Esto resume el estado de las conexiones basadas en los estados de los puertos y la IP mostrados en la captura, así como la previsión de resultados al ejecutar los comandos `hping3` especificados.