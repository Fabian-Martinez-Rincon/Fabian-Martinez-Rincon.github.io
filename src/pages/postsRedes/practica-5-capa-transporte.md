---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Cap. de Transporte'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/capa-transporte.webp'
    alt: ''
tags: ["Capa de Aplicación"]

---


## Practica 5

### Capa de Transporte - Parte 1

- [Ejercicio 1 ¿Cuál es la función de la capa de transporte?](#ejercicio-1)
- [Ejercicio 2 Describa la estructura del segmento TCP y UDP.](#ejercicio-2)
- [Ejercicio 3 ¿Cuál es el objetivo del uso de puertos en el modelo TCP/IP?](#ejercicio-3)
- [Ejercicio 4 Compare TCP y UDP en cuanto a](#ejercicio-4)
- [Ejercicio 5 La PDU de la capa de transporte es el segmento](#ejercicio-5)
- [Ejercicio 6 Describa el saludo de tres vías de TCP.](#ejercicio-6)
- [Ejercicio 7 Investigue qué es el ISN ](#ejercicio-7)
- [Ejercicio 8 Investigue qué es el MSS](#ejercicio-8)
- [Ejercicio 9 Utilice el comando ss](#ejercicio-9)
- [Ejercicio 10 Qué sucede si llega un segmento TCP con el flag SYN](#ejercicio-10)
- [Ejercicio 11 Qué sucede si llega un datagrama UDP](#ejercicio-11)
- [Ejercicio 12 Investigue los distintos tipos de estado que puede tener una conexión TCP](#ejercicio-12)
- [Ejercicio 13 Use CORE para armar una topología como la siguiente](#ejercicio-13)
- [Ejercicio 14 Dada la siguiente salida del comando ss](#ejercicio-14)
- [Ejercicio 15 Dadas las salidas de los siguientes comando se jecutados en el cliente y el servidor ](#ejercicio-15)

---


### Ejercicio 1

`¿Cuál es la función de la capa de transporte?`

La función de la capa de transporte es fundamental en el modelo de redes TCP/IP, ya que proporciona servicios de comunicación de extremo a extremo para aplicaciones sobre una red. Aquí hay algunas funciones clave que desempeña esta capa:

1. **Segmentación de datos**: Divide los datos de aplicación en segmentos más pequeños que son más manejables para enviar a través de una red.

2. **Control de flujo**: Regula la cantidad de datos que un remitente transmite para asegurarse de que el receptor pueda manejarlo, evitando que los buffers de recepción se desborden.

3. **Transferencia de datos confiable**: Asegura que los datos se transmitan de manera confiable a través de la red, utilizando acuses de recibo, retransmisiones y sumas de verificación para gestionar la pérdida de paquetes o datos corruptos.

4. **Control de congestión**: Evita que la red se sature controlando la tasa a la que se envían los datos, basándose en el estado percibido de la red y en la respuesta de los dispositivos dentro de la red.

5. **Multiplexación y demultiplexación**: Permite que múltiples aplicaciones utilicen simultáneamente la red, asignando a cada flujo de datos un puerto específico.

Estas funciones se implementan a través de dos protocolos principales: TCP (Protocolo de Control de Transmisión) y UDP (Protocolo de Datagrama de Usuario), cada uno ofreciendo diferentes niveles de servicio en función de las necesidades de la aplicación. TCP proporciona un servicio de transmisión confiable y controlado, mientras que UDP ofrece un servicio más rápido pero menos confiable.

---

### Ejercicio 2

`Describa la estructura del segmento TCP y UDP.`

#### Estructura del Segmento TCP

**Campos del Segmento TCP**:
1. **Puertos (MUX/DEMUX)**: Utilizados para multiplexar y demultiplexar los servicios de aplicación sobre el protocolo TCP, asignando el tráfico al proceso de aplicación correcto en los sistemas.
2. **Longitud del encabezado (HDR LEN)**: Variable, puede tener un máximo de 60 bytes (unidad=4 bytes).
3. **Checksum**: Se calcula para verificar la integridad de los datos del segmento. Es obligatorio y ayuda a detectar errores en los datos transmitidos.
4. **Flags**: Incluyen señales importantes como SYN (sincronización), FIN (finalización) y RST (reset).
5. **Número de secuencia y acuse de recibo (Num. Sec (#Seq), Num. Ack (#Ack))**: Para el control de la transferencia de datos, indicando el orden y la confirmación de los datos recibidos.
6. **Ventana (Win)**: Utilizada para el control de flujo, especificando la cantidad de bytes que están disponibles para ser recibidos en el buffer del receptor.
7. **Opciones de control de congestión**: Se agregan banderas adicionales relacionadas con la gestión de la congestión en la red.

#### Estructura del Datagrama UDP

**Campos del Datagrama UDP**:
1. **Puertos (MUX/DEMUX)**: Similar a TCP, se utilizan para direccionar los datagramas a la aplicación correcta mediante la multiplexación y demultiplexación.
2. **Longitud**: Incluye la longitud total del encabezado de UDP y los datos (payload).
3. **Checksum**: Es opcional en IPv4 (UDP4) y se calcula sumando el encabezado de UDP, el pseudoencabezado y los datos. Proporciona una verificación de errores básica, aunque no es tan robusta como en TCP.
4. **Pseudoencabezado**: Incluye direcciones IP de origen y destino, un campo reservado a cero, el protocolo UDP y la longitud del UDP, ayudando a asegurar que el datagrama llegue al destino correcto y minimizando el mal enrutamiento.

Estas estructuras indican cómo TCP y UDP manejan la transmisión de datos, con TCP ofreciendo más características para la fiabilidad y el control, mientras que UDP proporciona un servicio más simple y rápido, ideal para aplicaciones que pueden manejar pérdidas ocasionales de paquetes, como streaming de video o juegos en línea.

---

### Ejercicio 3

`¿Cuál es el objetivo del uso de puertos en el modelo TCP/IP?`

El objetivo del uso de puertos en el modelo TCP/IP es facilitar la multiplexación y la demultiplexación de múltiples conexiones a través de una única interfaz de red. Los puertos permiten que diferentes procesos o servicios de aplicación en una misma computadora identifiquen a qué sesión de comunicación pertenecen los paquetes de datos que llegan a través de la red. Esto se logra asignando un número de puerto único a cada servicio y sesión, lo que permite que el sistema operativo redirija correctamente los datos entrantes a la aplicación o proceso adecuado.

#### Funciones principales de los puertos en el modelo TCP/IP:

1. **Identificación de Aplicación**: Los puertos sirven como puntos finales en la capa de transporte. Cada aplicación o servicio en un dispositivo que necesita recibir datos de la red es asignada a un puerto específico, ya sea de manera estándar (puertos bien conocidos) o de manera dinámica.

2. **Multiplexación**: Permite a un servidor manejar múltiples conexiones entrantes para el mismo servicio, distinguiendo entre ellas a través de los números de puerto combinados con las direcciones IP de origen.

3. **Demultiplexación**: Facilita que el sistema operativo del dispositivo receptor distribuya correctamente los datos entrantes al programa o proceso correcto, basado en el número de puerto al que están dirigidos los datos.

4. **Soporte para múltiples Aplicaciones**: Los puertos permiten que múltiples aplicaciones se ejecuten simultáneamente en un dispositivo, con cada una usando su propio puerto para evitar conflictos y asegurar la correcta entrega de los datos.

5. **Control de Acceso y Seguridad**: Algunos puertos son reservados o bien conocidos y son utilizados por servicios específicos (como HTTP en el puerto 80 o HTTPS en el puerto 443), lo que permite implementar políticas de seguridad y firewalls más efectivos basados en números de puerto conocidos.

Los puertos son fundamentales para la eficiencia y organización del tráfico de red en sistemas que utilizan el modelo TCP/IP, facilitando la coexistencia de múltiples conexiones y aplicaciones dentro de un mismo dispositivo de red.

---

### Ejercicio 4

`Compare TCP y UDP en cuanto a:`

TCP y UDP son dos protocolos fundamentales en la capa de transporte del modelo TCP/IP, cada uno con características y usos específicos. A continuación, se presenta una comparación detallada entre ambos protocolos en los aspectos solicitados:

#### a) Confiabilidad
- **TCP**: Es un protocolo orientado a la conexión y ofrece garantías de entrega. Utiliza confirmaciones, retransmisiones y un mecanismo de control de errores para asegurar que los datos lleguen de manera correcta y en orden al destinatario. Si los datos se pierden o se dañan durante la transmisión, TCP se encarga de solicitar la retransmisión de estos.
- **UDP**: Es un protocolo no orientado a la conexión y no garantiza la entrega de los paquetes. No utiliza confirmaciones ni retransmisiones, lo que significa que si los paquetes se pierden, no se recuperan automáticamente.

#### b) Multiplexación
- **TCP y UDP**: Ambos protocolos soportan la multiplexación usando puertos. Cada segmento de TCP o datagrama de UDP contiene un puerto de origen y un puerto de destino, lo que permite que múltiples aplicaciones en los hosts envíen y reciban datos simultáneamente sin interferencia entre ellas.

#### c) Orientado a la conexión
- **TCP**: Es un protocolo orientado a la conexión, lo que significa que antes de que cualquier dato pueda ser enviado, se debe establecer una conexión entre el cliente y el servidor mediante un proceso conocido como "three-way handshake".
- **UDP**: No es orientado a la conexión, por lo que no requiere de una conexión inicial antes de enviar datos. Esto permite que la comunicación sea más rápida, pero menos fiable.

#### d) Controles de congestión
- **TCP**: Implementa varios mecanismos de control de congestión para gestionar la cantidad de datos que se envían a través de la red, evitando así la saturación de la red y garantizando un rendimiento óptimo. Esto incluye algoritmos como "slow start", "congestion avoidance", "fast retransmit" y "fast recovery".
- **UDP**: No tiene controles de congestión. Los datos se envían tan rápido como los permite la aplicación, sin tener en cuenta el estado de la red, lo que puede llevar a una mayor tasa de pérdida de paquetes si la red está congestionada.

#### e) Utilización de puertos
- **TCP y UDP**: Ambos protocolos utilizan puertos para identificar las aplicaciones específicas dentro de los hosts que están enviando o recibiendo datos. Los puertos proporcionan una forma de dirigir los segmentos de datos (en TCP) o datagramas (en UDP) a la aplicación correcta en un proceso conocido como demultiplexación.

En resumen, TCP es más adecuado para aplicaciones que requieren entrega garantizada y confiabilidad, como transferencias de archivos, navegación web y correo electrónico. UDP es preferible para aplicaciones que requieren baja latencia y pueden tolerar cierta pérdida de datos, como juegos en línea, streaming de video o VoIP.


---

### Ejercicio 5

`La PDU de la capa de transporte es el segmento. Sin embargo, en algunos contextos suele utilizarse el término datagrama. Indique cuando.`

En el contexto de la capa de transporte del modelo OSI o TCP/IP, el término **"segmento"** se utiliza específicamente para referirse a la unidad de datos manejada por el protocolo TCP (Transmission Control Protocol), mientras que el término **"datagrama"** se utiliza cuando se habla del protocolo UDP (User Datagram Protocol).

Aquí están las circunstancias en las que cada término es apropiado:

#### Segmento
- **Utilizado en TCP**: El segmento es la unidad de transferencia en TCP. Un segmento de TCP encapsula los datos de la capa de aplicación y añade su propia cabecera TCP, que incluye información vital como números de secuencia y acuse de recibo, puertos de origen y destino, flags de control, ventana de recepción, y otros campos que son esenciales para la entrega confiable y controlada de datos.

#### Datagrama
- **Utilizado en UDP**: Un datagrama UDP es la unidad de transferencia para el protocolo UDP. Los datagramas UDP también encapsulan datos de la capa de aplicación pero con una cabecera mucho más simple comparada con TCP. Esta cabecera incluye solo los puertos de origen y destino, la longitud total del datagrama y una suma de verificación. UDP es conocido por ser un protocolo sin conexión y no orientado a la confiabilidad, lo que permite un transporte más rápido pero menos seguro de los datos.

En resumen, **"segmento"** se usa cuando se discuten las operaciones de TCP debido a su naturaleza orientada a la conexión y sus mecanismos integrados para la confiabilidad. **"Datagrama"**, por otro lado, se usa en el contexto de UDP, donde la velocidad y la eficiencia son prioritarias sobre la garantía de entrega y el orden de los paquetes.

---

### Ejercicio 6

`Describa el saludo de tres vías de TCP. ¿Se utiliza algo similar en UDP?`

El saludo de tres vías (three-way handshake) es un procedimiento fundamental en TCP (Transmission Control Protocol) utilizado para establecer una conexión entre un cliente y un servidor antes de que comiencen a enviarse datos. Este mecanismo asegura que ambos extremos estén preparados para la transmisión de datos y manejen correctamente las secuencias de números de secuencia, que son cruciales para la entrega ordenada y confiable de los paquetes.

#### Saludo de Tres Vías en TCP
El proceso incluye tres pasos:

1. **SYN**: El cliente inicia la conexión enviando un segmento TCP con la bandera SYN (synchronize) activada, que incluye un número de secuencia inicial (ISN, por sus siglas en inglés).
   
2. **SYN-ACK**: El servidor responde al cliente con un segmento que tiene las banderas SYN y ACK (acknowledgment) activadas. Este segmento contiene el propio número de secuencia inicial del servidor y un número de acuse de recibo, que es el número de secuencia inicial del cliente incrementado en uno.

3. **ACK**: Finalmente, el cliente envía un segmento con la bandera ACK activada, reconociendo la recepción del segmento SYN del servidor. El número de acuse de recibo enviado por el cliente es el número de secuencia inicial del servidor incrementado en uno.

Esta secuencia establece una conexión fiable, donde ambos extremos confirman que han recibido los números de secuencia iniciales del otro y están listos para la comunicación.

#### UDP y su Mecanismo de "Saludo"
A diferencia de TCP, UDP (User Datagram Protocol) es un protocolo sin conexión, lo que significa que no establece una conexión antes de enviar datos. UDP envía datagramas sin esperar acuse de recibo y sin garantizar que los paquetes lleguen en orden o incluso que lleguen. Por lo tanto, no utiliza un mecanismo de saludo de tres vías ni ningún otro procedimiento similar para establecer una conexión.

En resumen, UDP es preferido en aplicaciones donde la velocidad y la eficiencia son más críticas que la confiabilidad, como en la transmisión de video o juegos en tiempo real, mientras que TCP es utilizado cuando se requiere garantizar la entrega de los datos, como en transferencias de archivo y comunicaciones de correo electrónico.

---

### Ejercicio 7

`Investigue qué es el ISN (Initial Sequence Number). Relaciónelo con el saludo de tres vías`

El ISN (Initial Sequence Number) es un componente crítico en el protocolo TCP (Transmission Control Protocol) que se utiliza para iniciar una conexión de manera segura y ordenada. El ISN es un número de 32 bits seleccionado aleatoriamente por cada host al comenzar las conexiones TCP. Este número es esencial para la administración y el control de flujo del protocolo, permitiendo a los dispositivos participantes mantener un registro correcto y ordenado de los segmentos transmitidos y recibidos.

#### Relación del ISN con el Saludo de Tres Vías
El ISN juega un papel clave en el proceso de establecimiento de conexión en TCP, conocido como el saludo de tres vías, que funciona de la siguiente manera:

1. **SYN**: Cuando un cliente desea iniciar una conexión TCP con un servidor, envía un segmento con la bandera SYN activada. Este segmento incluye un ISN, que es el número de secuencia inicial para los segmentos que enviará el cliente. Este número no solo ayuda a iniciar el conteo de secuencia de los paquetes enviados por el cliente sino que también ayuda a prevenir algunos tipos de ataques y problemas relacionados con las conexiones antiguas que aún persisten en la red (problema conocido como "old duplicate segments").

2. **SYN-ACK**: El servidor responde al cliente con otro segmento, también marcado con las banderas SYN y ACK. Este segmento lleva su propio ISN, que se utiliza para la secuencia de segmentos enviados desde el servidor al cliente, además de incluir el número de acuse de recibo, que es el ISN del cliente incrementado en uno. Este paso confirma al cliente que el servidor está listo para recibir datos comenzando desde el número de secuencia que el cliente ha proporcionado.

3. **ACK**: Finalmente, el cliente envía un segmento ACK al servidor, confirmando la recepción del ISN del servidor. El número de acuse de recibo en este segmento será el ISN del servidor incrementado en uno. Este paso completa el establecimiento de la conexión, y ambos extremos están listos para comenzar la transmisión de datos.

La elección de un ISN aleatorio es crucial para la seguridad de la conexión TCP. Una selección predecible del ISN puede hacer que la conexión sea vulnerable a ataques de "hijacking" o inyección de paquetes, donde un atacante podría predecir los números de secuencia de los paquetes y enviar paquetes maliciosos dentro de la sesión TCP legítima.

En resumen, el ISN es fundamental para el establecimiento de una conexión TCP segura y confiable, asegurando que la secuencia de mensajes sea gestionada de manera correcta desde el inicio de la conexión.

---

### Ejercicio 8

`Investigue qué es el MSS. ¿Cuándo y cómo se negocia?`

El MSS (Maximum Segment Size) es un parámetro utilizado en el protocolo TCP (Transmission Control Protocol) que especifica el tamaño máximo de datos, en bytes, que un dispositivo está dispuesto a recibir en un único segmento TCP. Este tamaño no incluye la cabecera TCP ni la cabecera IP, únicamente los datos del segmento.

### ¿Cuándo y cómo se negocia el MSS?

1. **Negociación durante el establecimiento de la conexión**:
   - El MSS se negocia al inicio de una conexión TCP durante el proceso de establecimiento de la conexión, específicamente durante el saludo de tres vías.
   - Cada host comunica su MSS utilizando la opción MSS en el segmento TCP que tiene la bandera SYN activada. Esto significa que tanto el cliente como el servidor envían su MSS preferido cuando envían sus respectivos paquetes SYN y SYN-ACK.

2. **Propósito de la negociación**:
   - La negociación del MSS es crucial para optimizar el uso del ancho de banda y reducir la fragmentación en la red. Al acordar un tamaño máximo de segmento, los dispositivos pueden ajustar la cantidad de datos enviados en cada paquete para maximizar la eficiencia y evitar la fragmentación de paquetes a lo largo del camino de la red.
   - El valor del MSS típicamente se establece en función del MTU (Maximum Transmission Unit) de la red menos el tamaño de las cabeceras TCP (20 bytes, sin opciones) y IP (20 bytes para IPv4 sin opciones). Por ejemplo, si el MTU es de 1500 bytes (común en redes Ethernet), el MSS sería 1460 bytes (1500 - 40).

3. **Cómo se establece el MSS**:
   - Cada lado de una conexión TCP puede especificar un valor de MSS diferente. Por ejemplo, un host podría enviar un MSS de 1460 bytes mientras que el otro podría enviar un MSS de 1400 bytes.
   - El tamaño efectivo del segmento que se utilizará es el menor de los dos valores MSS negociados. Esto garantiza que ambos hosts puedan manejar los segmentos que reciben sin necesidad de fragmentación y dentro de los límites de su capacidad de procesamiento y configuración de red.

En resumen, el MSS es un parámetro negociado al inicio de una conexión TCP que ayuda a definir el tamaño óptimo de los segmentos de datos, lo cual es clave para la eficiencia de la transmisión y la minimización de problemas como la fragmentación en la red.

---

### Ejercicio 9

Utilice el comando ss (reemplazo de netstat) para obtener la siguiente información de su PC:

#### a) Para listar las comunicaciones TCP establecidas.



#### b) Para listar las comunicaciones UDP establecidas.



#### c) Obtener sólo los servicios TCP que están esperando comunicaciones



#### d) Obtener sólo los servicios UDP que están esperando comunicaciones.



#### e) Repetir los anteriores para visualizar el proceso del sistema asociado a la conexión.



#### f) Obtenga la misma información planteada en los items anteriores usando el comando netstat.




---

### Ejercicio 10

¿Qué sucede si llega un segmento TCP con el flag SYN activo a un host que no tiene ningún proceso esperando en el puerto destino de dicho segmento (es decir, que dicho puerto no está en estado LISTEN)?

#### Parte a

Utilice **hping3** para enviar paquetes TCP al puerto destino 22 de la máquina virtual con el flag SYN activado.

#### Parte b

Utilice **hping3** para enviar paquetes TCP al puerto destino 40 de la máquina virtual con el flag SYN activado.

#### Parte c

¿Qué diferencias nota en las respuestas obtenidas en los dos casos anteriores? ¿Puede explicar a qué se debe? (Ayuda: utilice el comando ss visto anteriormente)

---

### Ejercicio 11

¿Qué sucede si llega un datagrama UDP a un host que no tiene a ningún proceso esperando en el puerto destino de dicho datagrama (es decir, que dicho puerto no está en estado LISTEN)

#### Parte a

Utilice hping3 para enviar datagramas UDP al puerto destino 5353 de la máquina virtual.

#### Parte b

Utilice hping3 para enviar datagramas UDP al puerto destino 40 de la máquina virtual.

#### Parte c

¿Qué diferencias nota en las respuestas obtenidas en los dos casos anteriores? ¿Puede explicar a qué se debe? (Ayuda: utilice el comando ss visto anteriormente).

---

### Ejercicio 12

Investigue los distintos tipos de estado que puede tener una conexión TCP.

Ver https://users.cs.northwestern.edu/~agupta/cs340/project2/TCPIP_State_Transition_Diagram.pdf

---

### Ejercicio 13

Use CORE para armar una topología como la siguiente, sobre la cual deberá realizar:

#### Parte a

En ambos equipos inspeccionar el estado de las conexiones y mantener abiertas ambas ventanas con el comando corriendo para poder visualizar los cambios a medida que se realiza el ejercicio.
 
Ayuda: watch-n1 ’ss-nat’

#### Parte b

 EnServidor, utilice la herramienta ncat para levantar un servicio que escuche en el puerto 8001/TCP.

Utilice la opcion-k para que el servicio sea persistente. Verifique el estado de las conexiones.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b9113481-b258-4c25-be51-fc728c80fb38)

#### Parte c

Desde CLIENTE1 conectarse a dicho servicio utilizando también la herramienta ncat. Inspeccione el estado de las conexiones.

#### Parte d

Iniciar otra conexión desde CLIENTE1 de la misma manera que la anterior y verificar el estado de las conexiones. ¿De qué manera puede identificar cada conexión?

#### Parte e

En base a lo observado en el item anterior ,¿es posible iniciar más de una conexión desde el cliente al servidor en el mismo puerto destino? ¿Por qué ¿Cómo se garantiza que los datos de una conexión no se mezclarán con los de la otra?

#### Parte f

 Analice en el tráfico de red, los flags de los segmentos TCP que ocurren cuando:
 
i. Cierra la última conexión establecida desde CLIENTE1. Evalúe los estados de las conexiones en ambos equipos.
 
ii. Corta el servicio de ncat en el servidor(Ctrl+C). Evalúe los estados de las conexiones en ambos equipos.

iii. Cierra la conexión en el cliente. Evalúe nuevamente los estados de las conexiones.

---

### Ejercicio 14

Dada la siguiente salida del comando ss, responda:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5a859dc6-7ef3-4c7e-ba49-4cda4c4f85af)

- **a)** ¿Cuántas conexiones hay establecidas?
- **b)** ¿Cuántos puertos hay abiertos a la espera de posibles nuevas conexiones?
- **c)** El cliente y el servidor de las comunicaciones HTTPS(puerto443),¿residen en la misma máquina?
- **d)** El cliente y el servidor de la comunicación SSH (puerto22), ¿residen en la misma máquina?
- **e)** Liste los nombres de todos los procesos asociados con cadac omunicación. Indique para cada uno si se trata de un proceso cliente o uno servidor.
- **f)** ¿Cuáles conexiones tuvieron el cierre iniciado por el host local y cuál es por el remoto?
- **g)** ¿Cuántas conexiones están aún pendientes por establecerse?

---

### Ejercicio 15

Dadas las salidas de los siguientes comandos ejecutados en el cliente y el servidor, responder:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/321bf1df-2fe4-4eae-8077-0c652ace3fc8)

- **a)** ¿Qué segmentos llegaron y cuáles se están perdiendo en la red?
- **b)** ¿A qué protocolo de capa de aplicación y de transporte se está intentando conectar el cliente?
- **c)** ¿Qué flags tendría seteado el segmento perdido?