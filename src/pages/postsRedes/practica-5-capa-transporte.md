---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Cap. de Transporte'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/transporte.jpg'
    alt: ''
tags: ["Capa de Aplicación"]
category: Redes
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

Para obtener la información requerida utilizando el comando `ss` en Linux, que es una herramienta moderna y rápida para monitorizar las conexiones de sockets, aquí están los comandos específicos para cada situación:

#### Comandos con `ss`

`a) Para listar las comunicaciones TCP establecidas:`
```bash
ss -t state established

Recv-Q    Send-Q       Local Address:Port       Peer Address:Port    Process  
```



El comando `ss -t state established` es utilizado para ver las conexiones TCP que están actualmente establecidas en tu sistema. Aquí te explico en detalle cada parte del comando y lo que muestra en su salida:

### Detalles del Comando:

- `ss`: Es el comando que se usa para obtener estadísticas de los sockets.
- `-t`: Filtra para mostrar solo los sockets TCP.
- `state established`: Muestra solo las conexiones que están en el estado "ESTABLISHED", lo que significa que hay una sesión TCP activa y operativa entre dos dispositivos.

### Salida del Comando:

La salida típica de este comando incluye varias columnas que proporcionan información detallada sobre cada conexión:

- **Recv-Q**: Muestra la cantidad de bytes que están en la cola de recepción y que aún no han sido recogidos por el proceso que maneja esta conexión. Si hay datos esperando ser leídos por la aplicación, este valor será mayor que cero.

- **Send-Q**: Muestra la cantidad de bytes en la cola de envío que todavía no han sido transmitidos a la red. Un número mayor que cero aquí indica que hay datos esperando ser enviados.

- **Local Address:Port**: Muestra la dirección IP local y el puerto asociado con la conexión. Esta es la dirección en tu máquina.

- **Peer Address:Port**: Muestra la dirección IP y el puerto del otro extremo de la conexión. Esta es la dirección del dispositivo remoto con el que se ha establecido la conexión TCP.

- **Process**: Esta columna muestra información sobre el proceso que está utilizando la conexión. Esto incluye el ID del proceso (PID) y el nombre del programa que utiliza el socket. Esta información es muy útil para determinar qué aplicación específica está manejando la conexión. Sin embargo, es posible que necesites usar opciones adicionales (`-p` con privilegios de superusuario) para ver detalles del proceso si no aparecen por defecto.

Este comando es especialmente útil para los administradores de sistemas y desarrolladores que necesitan diagnosticar problemas de red, monitorear el rendimiento de las aplicaciones de red o simplemente obtener un resumen de todas las conexiones TCP activas en un sistema.


`b) Para listar las comunicaciones UDP establecidas:`
```bash
ss -u state established

Recv-Q   Send-Q        Local Address:Port       Peer Address:Port     Process   
0        0          10.0.2.15%enp0s3:bootpc         10.0.2.2:bootps     
```



El comando `ss -u state established` es un poco inusual cuando se aplica a protocolos sin conexión como UDP, porque UDP, a diferencia de TCP, no tiene un estado "establecido" como tal. Sin embargo, el comando intentará mostrar las conexiones UDP que se pueden describir como activas o abiertas, aunque UDP en sí mismo no establece una conexión persistente entre dos puntos.

### Explicación del Comando:

- `ss`: Es el comando para obtener estadísticas de los sockets, sustituyendo al antiguo `netstat`.
- `-u`: Filtra para mostrar solo los sockets UDP.
- `state established`: Intenta listar conexiones UDP que están "activas". Aunque en UDP no aplicaría realmente el término "establecido", en algunos contextos, como las conexiones DHCP (bootp en el ejemplo), se puede considerar que hay un intercambio activo de paquetes.

### Salida del Comando:

- **Recv-Q**: Muestra la cantidad de bytes que están esperando ser recogidos por el proceso en la cola de recepción. Para UDP, esto generalmente indica si hay datos recibidos que aún no han sido procesados por la aplicación.

- **Send-Q**: Muestra la cantidad de bytes que están esperando ser enviados. En UDP, debido a que no hay confirmación de la recepción de los paquetes, esto normalmente debería ser cero a menos que el buffer de salida esté momentáneamente lleno.

- **Local Address:Port**: Esta columna muestra la dirección IP local y el puerto utilizado por tu máquina para esta comunicación UDP. En el ejemplo dado, `10.0.2.15%enp0s3:bootpc` indica que la dirección IP local es 10.0.2.15 (con el interfaz de red `enp0s3`) y el puerto local es `bootpc` (67, usado típicamente para solicitudes DHCP).

- **Peer Address:Port**: Muestra la dirección IP y el puerto del otro extremo con el que se está comunicando el socket UDP. En tu ejemplo, `10.0.2.2:bootps` representa el servidor DHCP desde el cual el cliente (en este caso, la máquina local) espera recibir una respuesta.

- **Process**: Detalles del proceso que usa este socket UDP, si están disponibles y si se ejecuta `ss` con los privilegios adecuados. En el ejemplo que has proporcionado, esta columna no muestra ningún proceso, lo que puede ser típico para las transmisiones de bajo nivel como DHCP donde el proceso puede ser parte del sistema operativo en lugar de un proceso de usuario visible.

En resumen, aunque el uso de `state established` con UDP puede no ser conceptualmente correcto debido a la naturaleza sin conexión de UDP, este comando puede ser útil para identificar los puertos UDP activos y la dirección de sus comunicaciones en situaciones específicas como transacciones DHCP o DNS.


`c) Obtener sólo los servicios TCP que están esperando comunicaciones:`
```bash
ss -tln

State   Recv-Q  Send-Q        Local Address:Port    Peer Address:Port  Process  
LISTEN  0       128                 0.0.0.0:22           0.0.0.0:*              
LISTEN  0       128               127.0.0.1:631          0.0.0.0:*              
LISTEN  0       5                 127.0.0.1:4038         0.0.0.0:*              
LISTEN  0       128                    [::]:22              [::]:*              
LISTEN  0       128                   [::1]:631             [::]:*              
LISTEN  0       4096                  [::1]:50051           [::]:*              
LISTEN  0       4096     [::ffff:127.0.0.1]:50051              *:*     
```


El comando `ss -tln` es utilizado para listar todos los sockets TCP en estado `LISTEN`, lo cual indica que estos sockets están configurados para aceptar conexiones entrantes. Esta es una herramienta crucial para los administradores de sistemas y de redes para verificar qué servicios están activos y escuchando en qué puertos. Aquí está un desglose detallado de lo que muestra cada columna en la salida de este comando:

### Explicación de las Opciones del Comando:

- `ss`: Es el comando para obtener estadísticas de sockets.
- `-t`: Filtra para mostrar solo sockets TCP.
- `-l`: Muestra solo los sockets que están en estado de escucha (listen).
- `-n`: Muestra los números de puerto y las direcciones IP en formato numérico, evitando la resolución de nombres, lo que puede hacer que la ejecución del comando sea más rápida y clara en su salida.

### Desglose de las Columnas:

- **State**: Muestra el estado actual del socket. Aquí, todos están en `LISTEN`, lo que significa que están esperando activamente conexiones entrantes.

- **Recv-Q y Send-Q**: Estas columnas muestran el tamaño de la cola de recepción y envío respectivamente. Para los sockets en estado `LISTEN`, `Recv-Q` siempre será `0` porque no están recibiendo datos en ese momento. `Send-Q` también es normalmente `0` en este estado, indicando que no hay datos pendientes de envío.

- **Local Address:Port**: Indica la dirección IP local y el puerto en los cuales el servicio está escuchando. Si ves `0.0.0.0` o `[::]`, significa que el servicio está escuchando en todas las interfaces de red para IPv4 o IPv6 respectivamente. Si ves una dirección específica, como `127.0.0.1` o `[::1]`, el servicio está escuchando solo en la interfaz de loopback, que es accesible solo desde la misma máquina.

- **Peer Address:Port**: En el estado `LISTEN`, esta columna siempre muestra `*` o `0.0.0.0:*`, lo que indica que el socket está listo para aceptar conexiones de cualquier dirección IP.

- **Process**: Esta columna normalmente no aparece a menos que se especifique con opciones adicionales (`-p`). Muestra el identificador del proceso que está utilizando cada socket.

### Ejemplos de la Salida:

- `0.0.0.0:22` y `[::]:22` indican que el servicio SSH está escuchando en todas las interfaces IPv4 e IPv6 en el puerto 22.
- `127.0.0.1:631` y `[::1]:631` muestran que el servicio de impresión (CUPS) está escuchando en la interfaz de loopback, tanto en IPv4 como en IPv6, solo accesible localmente.
- `127.0.0.1:4038` muestra otro servicio que está escuchando solo en la interfaz de loopback de IPv4.
- `[::1]:50051` muestra un servicio que está escuchando en el puerto 50051 solo en IPv6 en la interfaz de loopback.

Estos detalles son esenciales para la gestión de la seguridad y la configuración del servidor, ya que permiten a los administradores saber qué puertos están abiertos y listos para recibir conexiones, lo cual es vital para asegurar y optimizar el servidor.


El flag `-l` lista los sockets que están en estado de escucha, y `-n` evita la resolución de nombres, mostrando las direcciones IP y números de puerto en formato numérico.

`d) Obtener sólo los servicios UDP que están esperando comunicaciones:`
```bash
ss -uln

State   Recv-Q   Send-Q     Local Address:Port      Peer Address:Port  Process  
UNCONN  0        0                0.0.0.0:5353           0.0.0.0:*              
UNCONN  0        0                0.0.0.0:59816          0.0.0.0:*              
UNCONN  0        0                0.0.0.0:631            0.0.0.0:*              
UNCONN  0        0              127.0.0.1:4038           0.0.0.0:*              
UNCONN  0        0                   [::]:5353              [::]:*              
UNCONN  0        0                   [::]:40448             [::]:*      
```

<details><summary>Detalles</summary>

El comando `ss -uln` se utiliza para mostrar información sobre los sockets UDP que están en estado de espera (es decir, no están conectados pero están listos para recibir datos). Este comando es esencial para la administración de redes y la seguridad, ya que permite a los administradores verificar qué servicios UDP están activos y escuchando en la máquina local. A continuación, se detalla el significado de las opciones del comando y de cada columna en la salida:

### Explicación de las Opciones del Comando:

- `ss`: Es el comando para obtener estadísticas de sockets.
- `-u`: Filtra para mostrar solo sockets UDP.
- `-l`: Muestra solo los sockets que están en estado de escucha (listen).
- `-n`: Muestra los números de puerto y las direcciones IP en formato numérico, lo que evita la resolución de nombres y agiliza la visualización.

### Desglose de las Columnas:

- **State**: Muestra el estado del socket. `UNCONN` (unconnected) indica que el socket no está conectado pero está listo para recibir paquetes UDP.

- **Recv-Q y Send-Q**: Representan la cantidad de datos en la cola de recepción y envío, respectivamente. Para los sockets UDP en estado `UNCONN`, estas colas suelen estar en `0` porque los sockets simplemente están esperando para recibir datos.

- **Local Address:Port**: Indica la dirección IP local y el puerto en los cuales el servicio está escuchando. Si la dirección es `0.0.0.0` o `[::]`, el servicio está escuchando en todas las interfaces de red, tanto para IPv4 como IPv6. Direcciones específicas como `127.0.0.1` indican que el servicio solo acepta tráfico local (loopback).

- **Peer Address:Port**: Dado que estos sockets están en estado `UNCONN`, esta columna siempre mostrará `0.0.0.0:*` o `[::]:*`, lo que significa que están preparados para recibir datos desde cualquier dirección IP.

### Ejemplos de la Salida:

- `0.0.0.0:5353` y `[::]:5353`: Muestra que el servicio mDNS está escuchando en todos los interfaces disponibles en el puerto 5353, tanto para IPv4 como para IPv6. Este servicio se utiliza comúnmente para la resolución de nombres en redes locales.

- `0.0.0.0:59816` y `[::]:40448`: Estos son puertos UDP dinámicos o efímeros que están escuchando en todas las interfaces. Estos puertos pueden ser utilizados por aplicaciones que esperan recibir datos específicos.

- `0.0.0.0:631` y `127.0.0.1:4038`: Indica que estos servicios están escuchando para tráfico UDP, en el caso de `631` en todas las interfaces y para `4038` solo en la interfaz de loopback.

Estos detalles permiten a los administradores monitorizar y gestionar los servicios que utilizan el protocolo UDP, asegurándose de que solo los servicios deseados están accesibles y que no hay puertos abiertos innecesarios que podrían ser explotados por agentes maliciosos.

</details>

`e) Repetir los anteriores para visualizar el proceso del sistema asociado a la conexión:`
Para TCP:
```bash
ss -tlnp

State   Recv-Q  Send-Q        Local Address:Port    Peer Address:Port  Process  
LISTEN  0       128                 0.0.0.0:22           0.0.0.0:*              
LISTEN  0       128               127.0.0.1:631          0.0.0.0:*              
LISTEN  0       5                 127.0.0.1:4038         0.0.0.0:*              
LISTEN  0       128                    [::]:22              [::]:*              
LISTEN  0       128                   [::1]:631             [::]:*              
LISTEN  0       4096                  [::1]:50051           [::]:*              
LISTEN  0       4096     [::ffff:127.0.0.1]:50051              *:*     
```

<details><summary>Detalles</summary>

El comando `ss -tlnp` es una herramienta poderosa para administradores de sistemas y de redes. Se utiliza para mostrar información detallada sobre las conexiones TCP en estado de escucha (LISTEN), incluyendo qué procesos están asociados con cada socket. Esto es fundamental para la gestión y la seguridad de la red, ya que permite identificar qué aplicaciones están utilizando los puertos de red. Aquí desglosaré las opciones del comando y explicaré cada columna en la salida:

### Explicación de las Opciones del Comando:

- `ss`: Comando para obtener estadísticas de los sockets.
- `-t`: Filtra para mostrar solo conexiones TCP.
- `-l`: Muestra solo los sockets que están en estado de escucha.
- `-n`: Muestra números de puerto y direcciones IP en formato numérico, sin resolver nombres para acelerar la respuesta.
- `-p`: Muestra el proceso que está asociado con cada socket.

### Desglose de las Columnas:

- **State**: Indica el estado del socket. `LISTEN` significa que el socket está esperando conexiones entrantes.

- **Recv-Q y Send-Q**: Representan la cantidad de datos en las colas de recepción y envío, respectivamente. Para sockets en estado `LISTEN`, estos valores generalmente son cero porque no hay datos siendo enviados o recibidos aún.

- **Local Address:Port**: Dirección y puerto locales en los que el servicio está escuchando. Por ejemplo, `0.0.0.0:22` indica que el servicio está escuchando en todas las interfaces de red disponibles en el puerto 22 (usualmente SSH). Si la dirección es específica, como `127.0.0.1:631`, el servicio solo acepta conexiones locales.

- **Peer Address:Port**: Muestra las direcciones a las que el socket puede aceptar conexiones. En el caso de sockets en estado `LISTEN`, típicamente se muestra como `0.0.0.0:*` o `[::]:*`, indicando que pueden aceptar conexiones desde cualquier dirección IP.

- **Process**: Esta columna muestra información sobre el proceso que utiliza el socket. Por ejemplo, puede incluir el nombre del proceso y el ID del proceso (PID). Esta información es crucial para identificar qué aplicación está utilizando cada puerto y es especialmente útil para resolver problemas o auditar la seguridad de los servicios de red.

### Ejemplos de la Salida:

- **0.0.0.0:22 y [::]:22**: Estos sockets están escuchando en todas las interfaces IPv4 e IPv6 respectivamente para conexiones SSH. El hecho de que estén escuchando en `0.0.0.0` y `[::]` significa que aceptan conexiones desde cualquier IP.

- **127.0.0.1:631 y [::1]:631**: Estos están escuchando solo para conexiones locales (loopback) para el servicio de impresión (puerto 631, comúnmente usado por CUPS).

- **[::1]:50051 y [::ffff:127.0.0.1]:50051**: Estos podrían ser servicios desarrollados internamente o específicos de aplicaciones que escuchan en IPv6 y mapeados IPv4-a-IPv6, respectivamente, solo accesibles localmente.

Esta información te permite entender qué servicios están corriendo en tu servidor, en qué puertos están escuchando, y a través de qué interfaces están disponibles, así como identificar qué aplicación o proceso es responsable de cada uno de estos servicios. Esto es vital para la gestión adecuada de los recursos de red y la seguridad informática.
</details>

Para UDP:
```bash
ss -ulnp

State   Recv-Q   Send-Q     Local Address:Port      Peer Address:Port  Process  
UNCONN  0        0                0.0.0.0:5353           0.0.0.0:*              
UNCONN  0        0                0.0.0.0:59816          0.0.0.0:*              
UNCONN  0        0                0.0.0.0:631            0.0.0.0:*              
UNCONN  0        0              127.0.0.1:4038           0.0.0.0:*              
UNCONN  0        0                   [::]:5353              [::]:*              
UNCONN  0        0                   [::]:40448             [::]:*   
```

<detais><summary>Detalles</summary>

El comando `ss -ulnp` es una herramienta útil para mostrar detalles sobre los sockets UDP que están actualmente abiertos y en estado de escucha en un sistema. Aquí te explico cada parte de este comando y la información que muestra:

### Explicación de las Opciones del Comando:

- `ss`: Es el comando para obtener estadísticas de los sockets.
- `-u`: Filtra para mostrar solo conexiones UDP.
- `-l`: Muestra solo los sockets que están en estado de escucha, es decir, esperando recibir paquetes de datos.
- `-n`: Muestra números de puerto y direcciones IP en formato numérico, lo cual evita la demora de resolver los nombres.
- `-p`: Muestra el proceso asociado con cada socket, incluyendo el ID del proceso y el nombre del programa que lo ha abierto.

### Desglose de las Columnas:

- **State**: Muestra el estado del socket. `UNCONN` (unconnected) indica que el socket está abierto pero no conectado, lo cual es típico para UDP, que es un protocolo sin conexión.

- **Recv-Q y Send-Q**: Representan la cantidad de datos en las colas de recepción y envío, respectivamente. En UDP, estos valores suelen ser cero porque UDP es un protocolo sin conexión y no garantiza la entrega de paquetes.

- **Local Address:Port**: Muestra la dirección IP local y el puerto en los que el servicio está escuchando. Por ejemplo, `0.0.0.0:5353` indica que el servicio está escuchando en todas las interfaces de red para el puerto 5353, que es comúnmente utilizado por servicios como mDNS.

- **Peer Address:Port**: Para sockets UDP en estado de escucha, esta columna generalmente muestra `0.0.0.0:*` o `[::]:*`, indicando que el socket puede recibir datagramas de cualquier dirección IP.

- **Process**: Esta columna brinda detalles sobre el proceso que usa el socket, incluyendo el nombre del programa y el PID. Esto es especialmente útil para identificar qué aplicación está utilizando cada puerto UDP.

### Ejemplos de la Salida:

- **0.0.0.0:5353 y [::]:5353**: Estos sockets están escuchando en todas las interfaces IPv4 e IPv6, respectivamente, para el Multicast DNS (mDNS), que permite la resolución de nombres en redes locales sin necesidad de un servidor DNS centralizado.

- **0.0.0.0:59816 y [::]:40448**: Estos puertos están abiertos para recibir datagramas UDP en cualquier interfaz. Los números de puerto altos son típicamente seleccionados aleatoriamente por aplicaciones que necesitan recibir respuestas a consultas o comandos enviados a otros servicios.

- **127.0.0.1:4038 y 0.0.0.0:631**: Estos sockets están escuchando para tráfico local (`127.0.0.1:4038`) o en todas las interfaces (`0.0.0.0:631`), el puerto 631 generalmente está asociado con el sistema de impresión de red (CUPS).

Esta información es crucial para la administración de la red, ayudando a identificar qué servicios están usando los puertos UDP, y es fundamental para tareas como la resolución de problemas de red, auditorías de seguridad, y la configuración del firewall.

</details>

El flag `-p` muestra el proceso asociado a cada socket.

#### Comandos con `netstat`

El comando `netstat`, aunque en desuso en las distribuciones modernas de Linux que favorecen `ss`, todavía está disponible en muchos sistemas y puede ser utilizado para las mismas tareas:

`a) Para listar las comunicaciones TCP establecidas:`
```bash
netstat -tn

Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State    
```

<details><summary>Detalles</summary>

El comando `netstat -tn` es una herramienta de diagnóstico que se utiliza para mostrar las conexiones de red TCP establecidas en un sistema. Aquí te detallo cada parte del comando y la información que proporciona:

### Explicación de las Opciones del Comando:

- `netstat`: Es el comando para obtener estadísticas de la red y del estado de los sockets.
- `-t`: Filtra para mostrar solo conexiones TCP.
- `-n`: Muestra números de puerto y direcciones IP en formato numérico, evitando la demora que implica resolver los nombres a direcciones.

### Desglose de las Columnas:

- **Proto**: Indica el protocolo de la conexión. En este caso, por el uso de la opción `-t`, solo se mostrarán las conexiones que utilizan el protocolo TCP.

- **Recv-Q**: Representa la cantidad de datos que han sido recibidos por el sistema local pero aún no han sido leídos por la aplicación. En otras palabras, muestra la cantidad de datos en la cola de recepción que aún no han sido procesados por la aplicación local.

- **Send-Q**: Indica la cantidad de datos que la aplicación local ha enviado pero que aún no han sido confirmados por el receptor. Es decir, muestra los datos que están en la cola de envío esperando ser reconocidos por el otro extremo de la conexión.

- **Local Address**: Muestra la dirección IP local y el puerto asociado a la conexión. Esta dirección es la del equipo en el que se ejecuta `netstat`.

- **Foreign Address**: Muestra la dirección IP y el puerto del sistema remoto con el que está establecida la conexión. Esta es la dirección del otro dispositivo involucrado en la comunicación.

- **State**: Muestra el estado actual de la conexión. Los estados comunes incluyen:
  - `ESTABLISHED`: La conexión ha sido establecida y está activa.
  - `SYN_SENT` o `SYN_RECEIVED`: Etapas del inicio de la conexión TCP.
  - `FIN_WAIT1` o `FIN_WAIT2`: Etapas de la terminación de la conexión TCP.
  - `TIME_WAIT`: Indica que el lado local ha cerrado la conexión, pero se espera por si llegan aún paquetes retrasados del otro lado.

### Ejemplo de Uso y Salida:

Cuando ejecutas `netstat -tn`, puedes ver algo como esto:

```
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 192.168.1.100:45678     93.184.216.34:80        ESTABLISHED
tcp        0      0 192.168.1.100:22        203.0.113.25:53792      ESTABLISHED
```

Esta salida indica que hay dos conexiones TCP activas:
1. Una conexión desde el puerto local 45678 a la dirección IP 93.184.216.34 en el puerto 80 (HTTP), que está en estado `ESTABLISHED`.
2. Una conexión SSH desde el puerto local 22 a la dirección IP 203.0.113.25 en el puerto 53792, también en estado `ESTABLISHED`.

Este comando es útil para monitorear qué aplicaciones están comunicándose activamente a través de la red, identificar posibles conexiones no deseadas y ayudar en la resolución de problemas de red y aplicaciones.

</details>

`b) Para listar las comunicaciones UDP establecidas:`
```bash
netstat -un

Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
udp        0      0 10.0.2.15:68            10.0.2.2:67             ESTABLISHED
```

<details><summary>Detalles</summary>

El comando `netstat -un` se utiliza para mostrar conexiones de red, específicamente aquellas que utilizan el protocolo UDP. Detallaré cada opción y la información proporcionada en este comando:

### Explicación de las Opciones del Comando:

- **netstat**: Es una herramienta de diagnóstico que ofrece información sobre conexiones de red, tablas de enrutamiento, estadísticas de interfaces, masquerade connections, y estadísticas multicast.
- **-u**: Filtra para mostrar sólo conexiones UDP.
- **-n**: Muestra direcciones y números de puerto en formato numérico, evitando la resolución de nombres, lo que acelera la presentación de los datos.

### Desglose de las Columnas:

- **Proto**: Indica el protocolo de la conexión, en este caso, `udp` para UDP.

- **Recv-Q**: Representa la cantidad de datos recibidos por el sistema local que aún no han sido procesados por la aplicación. En UDP, este campo suele ser 0 ya que UDP no tiene control de flujo ni garantiza la entrega de paquetes.

- **Send-Q**: Indica la cantidad de datos enviados por la aplicación local que aún no han sido enviados por el sistema operativo. Similar a Recv-Q, en UDP, este campo generalmente también es 0.

- **Local Address**: Muestra la dirección IP local y el puerto usado por la conexión. Representa el punto final en el dispositivo local.

- **Foreign Address**: Muestra la dirección IP y el puerto del sistema remoto con el que se establece la conexión. En UDP, dado que es un protocolo sin conexión, es menos común ver direcciones extranjeras asociadas excepto durante la transmisión de datos.

- **State**: En UDP, el estado generalmente no se muestra porque UDP es un protocolo sin conexión, lo que significa que no mantiene un estado de conexión establecida como TCP. Sin embargo, si se muestra, puede ser `ESTABLISHED` indicando que la comunicación está activa en ambos sentidos (esto es raro y puede ser específico de la implementación).

### Ejemplo de Uso y Salida:

Cuando ejecutas `netstat -un`, puedes ver algo así:

```
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
udp        0      0 10.0.2.15:68            10.0.2.2:67             ESTABLISHED
```

Esta salida indica que hay una comunicación UDP entre el puerto 68 del dispositivo local y el puerto 67 de un dispositivo remoto. Este tipo de conexión es típicamente usado por el protocolo DHCP (Dynamic Host Configuration Protocol), donde un cliente (en el puerto 68) recibe información de configuración de red de un servidor DHCP (en el puerto 67).

### Importancia:

Este comando es útil para diagnosticar la actividad de las aplicaciones que utilizan UDP, como los juegos en línea, aplicaciones de streaming y protocolos de red como DHCP y DNS. Permite a los administradores de red verificar qué aplicaciones están usando UDP y con qué otros sistemas están comunicando.
</details>


`Obtener sólo los servicios TCP que están esperando comunicaciones:`
```bash
netstat -tln

Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:4038          0.0.0.0:*               LISTEN     
tcp6       0      0 :::22                   :::*                    LISTEN     
tcp6       0      0 ::1:631                 :::*                    LISTEN     
tcp6       0      0 ::1:50051               :::*                    LISTEN     
tcp6       0      0 127.0.0.1:50051         :::*                    LISTEN  
```

<details><summary>Detalles<summary></details>

`d) Obtener sólo los servicios UDP que están esperando comunicaciones:`
```bash
netstat -uln

Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
udp        0      0 0.0.0.0:5353            0.0.0.0:*                          
udp        0      0 0.0.0.0:59816           0.0.0.0:*                          
udp        0      0 0.0.0.0:631             0.0.0.0:*                          
udp        0      0 127.0.0.1:4038          0.0.0.0:*                          
udp6       0      0 :::5353                 :::*                               
udp6       0      0 :::40448                :::*     
```
<details><summary>Detalles<summary></details>

`e) Repetir los anteriores para visualizar el proceso del sistema asociado a la conexión:`
Para TCP y UDP con procesos:
```bash
netstat -tlnp

(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
udp        0      0 0.0.0.0:5353            0.0.0.0:*                           -                   
udp        0      0 0.0.0.0:59816           0.0.0.0:*                           -                   
udp        0      0 0.0.0.0:631             0.0.0.0:*                           -                   
udp        0      0 127.0.0.1:4038          0.0.0.0:*                           -                   
udp6       0      0 :::5353                 :::*                                -                   
udp6       0      0 :::40448                :::*       
```


<details><summary>Detalles<summary></details>

```bash
netstat -ulnp

(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      -                   
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN      -                   
tcp        0      0 127.0.0.1:4038          0.0.0.0:*               LISTEN      -                   
tcp6       0      0 :::22                   :::*                    LISTEN      -                   
tcp6       0      0 ::1:631                 :::*                    LISTEN      -                   
tcp6       0      0 ::1:50051               :::*                    LISTEN      -                   
tcp6       0      0 127.0.0.1:50051         :::*                    LISTEN      -  
```

<details><summary>Detalles<summary></details>

Estos comandos proporcionan información detallada sobre el estado de las conexiones de red en tu sistema, mostrando tanto las conexiones activas como las que están en escucha para posibles nuevas conexiones.


---

### Ejercicio 10 CONSULTAR ESTE EJERCICIO

`¿Qué sucede si llega un segmento TCP con el flag SYN activo a un host que no tiene ningún proceso esperando en el puerto destino de dicho segmento (es decir, que dicho puerto no está en estado LISTEN)?`

Cuando un segmento TCP con el flag SYN activo llega a un puerto que no está en estado LISTEN en el host de destino (es decir, no hay ningún proceso escuchando en ese puerto), el sistema operativo generalmente responde con un paquete TCP que tiene el flag RST (Reset) activado. Esto indica al emisor que el puerto de destino no está disponible o que no hay un servicio esperando aceptar conexiones.

`Utilice **hping3** para enviar paquetes TCP al puerto destino 22 de la máquina virtual con el flag SYN activado.`

```bash
hping3 -p 22 -S localhost
```

```bash
redes@debian:~$ sudo hping3 -p 22 -S localhost
HPING localhost (lo 127.0.0.1): S set, 40 headers + 0 data bytes
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=0 win=65495 rtt=8.0 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=1 win=65495 rtt=7.7 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=2 win=65495 rtt=6.2 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=3 win=65495 rtt=0.3 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=4 win=65495 rtt=4.1 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=5 win=65495 rtt=3.6 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=6 win=65495 rtt=7.3 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=7 win=65495 rtt=3.2 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=8 win=65495 rtt=10.7 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=9 win=65495 rtt=8.8 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=10 win=65495 rtt=2.6 ms
len=44 ip=127.0.0.1 ttl=64 DF id=0 sport=22 flags=SA seq=11 win=65495 rtt=1.5 ms
^C
--- localhost hping statistic ---
12 packets transmitted, 12 packets received, 0% packet loss
round-trip min/avg/max = 0.3/5.3/10.7 ms
```

Cuando ejecutas el comando `hping3` con los parámetros que proporcionaste, estás realizando una serie de pruebas para enviar paquetes TCP con el flag SYN activado (indicado por `-S`) al puerto 22 del host local (`localhost` o `127.0.0.1`). Veamos en detalle qué significa cada parte de la salida y qué está ocurriendo:

### Descripción del Comando y Salida
- **Comando:** `sudo hping3 -p 22 -S localhost`
  - `-p 22`: Esto especifica que el puerto destino de los paquetes es el 22, que es típicamente utilizado por el servicio SSH.
  - `-S`: Indica que el flag SYN (synchronize) de TCP está activado. Este flag se utiliza para iniciar una conexión TCP, es la primera parte del "three-way handshake" que TCP usa para establecer una conexión.
  - `localhost`: Es el nombre del host que se resuelve a la dirección IP `127.0.0.1`, que es la dirección de loopback. Esto significa que estás enviando paquetes a tu propio equipo.

### Salida de `hping3`
Cada línea de la salida muestra un paquete que ha sido enviado y la respuesta recibida:
- `len=44`: Longitud del paquete, incluyendo cabeceras IP y TCP, que suman 40 bytes más algunos bytes de opciones de TCP, totalizando 44 bytes.
- `ip=127.0.0.1`: La dirección IP de destino (y de origen, ya que es loopback).
- `ttl=64`: Time to live, establecido por defecto en sistemas Linux. Indica el número máximo de saltos (routers) que un paquete puede hacer antes de ser descartado.
- `DF`: Don't Fragment flag está activado, lo que significa que el paquete no debería ser fragmentado durante la transmisión.
- `id=0`: Identificador del paquete, utilizado para la reensamblación de fragmentos.
- `sport=22`: Puerto de origen, que es el puerto 22, aunque en realidad representa el puerto destino en este contexto.
- `flags=SA`: Indica los flags TCP establecidos en la respuesta. 'S' es SYN, y 'A' es ACK. Esto significa que el host de destino ha recibido tu SYN y está respondiendo con SYN y ACK, que es el segundo paso en el establecimiento de una conexión TCP.
- `seq=0` y así sucesivamente: Número de secuencia del paquete.
- `win=65495`: Tamaño de la ventana TCP, que indica cuántos bytes están dispuestos a recibir antes de recibir un acuse de recibo.
- `rtt=8.0 ms` y variaciones: Round-trip time, el tiempo que toma para que el paquete vaya y vuelva desde el origen al destino.

### Estadísticas de `hping3`
- `12 packets transmitted, 12 packets received, 0% packet loss`: Total de paquetes enviados y recibidos, mostrando que no hubo pérdida de paquetes, lo cual es esperado en una interfaz de loopback, donde los paquetes no necesitan viajar a través de redes externas.
- `round-trip min/avg/max = 0.3/5.3/10.7 ms`: Estadísticas del tiempo de ida y vuelta mínimo, promedio y máximo.

### Interpretación
El hecho de que recibas respuestas con los flags SYN y ACK indica que hay un proceso (en este caso, probablemente el servidor SSH) escuchando en el puerto 22 de tu máquina local. La conexión de loopback es utilizada para probar servicios en tu propio equipo sin afectar la red externa, proporcionando una manera eficaz de asegurarse de que el servicio está operativo y responde como se espera.

`Utilice **hping3** para enviar paquetes TCP al puerto destino 40 de la máquina virtual con el flag SYN activado.`

```bash
redes@debian:~$ sudo hping3 -p 40 -S localhost
HPING localhost (lo 127.0.0.1): S set, 40 headers + 0 data bytes
len=40 ip=127.0.0.1 ttl=64 DF id=0 sport=40 flags=RA seq=0 win=0 rtt=8.0 ms
len=40 ip=127.0.0.1 ttl=64 DF id=0 sport=40 flags=RA seq=1 win=0 rtt=3.6 ms
len=40 ip=127.0.0.1 ttl=64 DF id=0 sport=40 flags=RA seq=2 win=0 rtt=7.2 ms
len=40 ip=127.0.0.1 ttl=64 DF id=0 sport=40 flags=RA seq=3 win=0 rtt=12.3 ms
len=40 ip=127.0.0.1 ttl=64 DF id=0 sport=40 flags=RA seq=4 win=0 rtt=2.6 ms
len=40 ip=127.0.0.1 ttl=64 DF id=0 sport=40 flags=RA seq=5 win=0 rtt=0.2 ms
len=40 ip=127.0.0.1 ttl=64 DF id=0 sport=40 flags=RA seq=6 win=0 rtt=3.6 ms
^C
--- localhost hping statistic ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 0.2/5.4/12.3 ms
```

La salida del comando `hping3` que ejecutaste al enviar paquetes TCP con el flag SYN al puerto 40 en tu propia máquina (`localhost` o `127.0.0.1`) muestra un comportamiento interesante, y algo diferente de lo que observaste cuando el puerto destino era el 22. Aquí está lo que cada parte de la salida significa y por qué es diferente:

### Descripción del Comando y Salida
- **Comando:** `sudo hping3 -p 40 -S localhost`
  - `-p 40`: Especifica que el puerto destino de los paquetes es el 40, un puerto que no es comúnmente utilizado para servicios estándar.
  - `-S`: Indica que el flag SYN está activado, que se usa para solicitar el inicio de una conexión TCP.

### Salida de `hping3`
Cada línea refleja la respuesta a cada paquete SYN enviado:
- `len=40`: Longitud del paquete, solo incluye las cabeceras IP y TCP sin datos adicionales.
- `ip=127.0.0.1`: Dirección IP de destino, que es la dirección de loopback.
- `ttl=64`: Time to live, configurado por defecto en sistemas Linux.
- `DF`: Don't Fragment flag está activado.
- `id=0`: Identificador del paquete.
- `sport=40`: Puerto de origen en la respuesta, que refleja el puerto destino que especificaste.
- `flags=RA`: Los flags TCP establecidos en la respuesta. 'R' es RST (Reset) y 'A' es ACK. Esto indica que el host de destino (tu propia máquina) ha recibido tu solicitud SYN pero no tiene ningún proceso escuchando en el puerto 40, por lo que responde con un Reset para indicar que la conexión no puede ser establecida.
- `seq=0` y así sucesivamente: Número de secuencia del paquete.
- `win=0`: Tamaño de la ventana TCP es 0, lo que refuerza el hecho de que la conexión no se puede establecer porque no hay un proceso que acepte la conexión.
- `rtt=8.0 ms` y variaciones: Tiempo de ida y vuelta del paquete.

### Estadísticas de `hping3`
- `7 packets transmitted, 7 packets received, 0% packet loss`: Todos los paquetes enviados fueron respondidos, lo que indica que los paquetes alcanzaron el destino y fueron procesados.
- `round-trip min/avg/max = 0.2/5.4/12.3 ms`: Tiempos de respuesta mínimos, promedios y máximos.

### Interpretación
La diferencia clave aquí es que los paquetes fueron respondidos con el flag RST activado, indicando que el puerto 40 no está en estado de escucha y no hay ningún servicio disponible para aceptar la conexión en ese puerto. Este es un comportamiento normal cuando se intenta conectar a un puerto que no tiene un servicio asociado: el sistema operativo automáticamente responde con un paquete TCP con el flag RST para cerrar la conexión.

El uso de RST es una manera eficiente de informar al emisor que no hay un receptor válido en el puerto especificado, permitiendo al emisor cerrar el intento de conexión inmediatamente en lugar de esperar tiempos de espera por respuestas que nunca llegarán.


`¿Qué diferencias nota en las respuestas obtenidas en los dos casos anteriores? ¿Puede explicar a qué se debe?`

> (Ayuda: utilice el comando ss visto anteriormente)  

```bash
redes@debian:~$ ss -tuln
Netid   State    Recv-Q   Send-Q          Local Address:Port      Peer Address:Port  Process  
udp     UNCONN   0        0                     0.0.0.0:631            0.0.0.0:*              
udp     UNCONN   0        0                     0.0.0.0:47816          0.0.0.0:*              
udp     UNCONN   0        0                   127.0.0.1:4038           0.0.0.0:*              
udp     UNCONN   0        0                     0.0.0.0:5353           0.0.0.0:*              
udp     UNCONN   0        0                        [::]:44538             [::]:*              
udp     UNCONN   0        0                        [::]:5353              [::]:*              
tcp     LISTEN   0        128                   0.0.0.0:22             0.0.0.0:*              
tcp     LISTEN   0        128                 127.0.0.1:631            0.0.0.0:*              
tcp     LISTEN   0        5                   127.0.0.1:4038           0.0.0.0:*              
tcp     LISTEN   0        128                      [::]:22                [::]:*              
tcp     LISTEN   0        128                     [::1]:631               [::]:*              
tcp     LISTEN   0        4096                    [::1]:50051             [::]:*              
tcp     LISTEN   0        4096       [::ffff:127.0.0.1]:50051                *:*  
```




Para analizar las diferencias en las respuestas obtenidas al enviar paquetes SYN a los puertos 22 y 40 usando `hping3` y entender a qué se deben, primero recapitulemos los resultados:

1. **Puerto 22 (SSH)**
   - Recibiste respuestas con flags `SA` (SYN-ACK), indicando que el puerto está en estado LISTEN y que un proceso (el servidor SSH) está activo y listo para aceptar conexiones.

2. **Puerto 40**
   - Las respuestas tenían los flags `RA` (RST-ACK), indicando que no hay ningún proceso escuchando en ese puerto, y el sistema operativo responde automáticamente con un paquete de reset para cerrar el intento de conexión.

### Uso del Comando `ss` para Confirmar

Para entender mejor por qué ocurren estas diferencias, podemos usar el comando `ss` que proporciona estadísticas de los sockets. Ejecutar `ss -tuln` mostrará los puertos que están actualmente en escucha (LISTEN) en tu sistema:

```bash
ss -tuln
```

- `-t` muestra sockets TCP.
- `-u` muestra sockets UDP (no necesarios en este caso, pero útiles para una visión completa).
- `-l` lista solo los sockets que están en estado LISTEN.
- `-n` muestra números de puerto en lugar de nombres de servicio.

Este comando te permitirá ver claramente qué puertos están activos y escuchando. Por ejemplo, verás el puerto 22 listado bajo TCP si SSH está activo, y no verás el puerto 40 si ningún servicio está vinculado a él.

### Explicación de las Diferencias

Las diferencias en las respuestas se deben a cómo el sistema operativo maneja los puertos sin servicios asignados comparado con los que sí tienen servicios escuchando:

- **Puerto con Servicio (22):** Cuando un puerto está en estado LISTEN y recibe un paquete SYN, el protocolo TCP del sistema operativo responde con un paquete SYN-ACK, invitando al remitente a continuar con el establecimiento de la conexión (el three-way handshake de TCP).

- **Puerto sin Servicio (40):** Cuando un paquete SYN llega a un puerto que no está en estado LISTEN, el sistema operativo envía un paquete RST-ACK para rechazar inmediatamente el intento de conexión, indicando que no hay ningún servicio que pueda manejar esa solicitud en el puerto especificado.

Esta gestión ayuda a optimizar los recursos del sistema y proporciona retroalimentación inmediata a los clientes que intentan establecer conexiones, lo cual es crucial para aplicaciones y servicios que dependen de la disponibilidad de puertos específicos para funcionar correctamente.


---

### Ejercicio 11

¿Qué sucede si llega un datagrama UDP a un host que no tiene a ningún proceso esperando en el puerto destino de dicho datagrama (es decir, que dicho puerto no está en estado LISTEN)?

Cuando un datagrama UDP llega a un puerto en un host donde no hay ningún proceso esperando (es decir, ningún proceso vinculado a ese puerto específico), el comportamiento típico del sistema es enviar un mensaje de error de tipo ICMP (Internet Control Message Protocol) de vuelta al emisor. Este mensaje de error generalmente es del tipo "Destination Unreachable", específicamente con un código que indica "Port Unreachable". Esto informa al emisor que no hay ninguna aplicación que pueda manejar el datagrama en el puerto destino.

#### Parte a

`Utilice hping3 para enviar datagramas UDP al puerto destino 5353 de la máquina virtual.`

```bash
redes@debian:~$ sudo hping3 -2 -p 5353 -S localhost
HPING localhost (lo 127.0.0.1): udp mode set, 28 headers + 0 data bytes

^C
--- localhost hping statistic ---
2 packets transmitted, 0 packets received, 100% packet loss
round-trip min/avg/max = 0.0/0.0/0.0 ms
redes@debian:~$ 
```

#### Parte b

Utilice hping3 para enviar datagramas UDP al puerto destino 40 de la máquina virtual.

```bash
redes@debian:~$ sudo hping3 -2 -p 40 -S localhost
HPING localhost (lo 127.0.0.1): udp mode set, 28 headers + 0 data bytes
ICMP Port Unreachable from ip=127.0.0.1 name=localhost 
status=0 port=2212 seq=0
ICMP Port Unreachable from ip=127.0.0.1 name=localhost 
status=0 port=2213 seq=1
ICMP Port Unreachable from ip=127.0.0.1 name=localhost 
status=0 port=2214 seq=2
ICMP Port Unreachable from ip=127.0.0.1 name=localhost 
status=0 port=2215 seq=3
ICMP Port Unreachable from ip=127.0.0.1 name=localhost 
status=0 port=2216 seq=4
^C
--- localhost hping statistic ---
5 packets transmitted, 5 packets received, 0% packet loss
round-trip min/avg/max = 4.3/6.8/10.8 ms
```

En este caso, utilizaste `hping3` para enviar paquetes UDP al puerto 40 de tu host local (`localhost`) y también has incluido el flag `-S` que, como mencionamos anteriormente, es inapropiado para UDP. Sin embargo, esta vez has recibido respuestas, así que vamos a examinar qué sucedió.

### Comando y Configuración
```bash
sudo hping3 -2 -p 40 -S localhost
```
- `-2`: Configura `hping3` para usar el modo UDP.
- `-p 40`: Especifica el puerto destino como el 40, que generalmente no es utilizado por servicios comunes.
- `-S`: A pesar de ser un flag de TCP, en este contexto parece no afectar la formación del paquete UDP en `hping3`, aunque su presencia es innecesaria y puede ser confusa.

### Salida de `hping3`
- `ICMP Port Unreachable from ip=127.0.0.1 name=localhost`: Este es un mensaje de error del tipo ICMP, específicamente un "Destination Unreachable" con el código "Port Unreachable". Este mensaje es generado por el sistema operativo cuando un paquete UDP llega a un puerto en el cual no hay ningún proceso escuchando. 
- `status=0 port=2212 seq=0` y las líneas similares indican el número de puerto desde el cual `hping3` está enviando los paquetes y la secuencia de los mismos. Los puertos mencionados (2212, 2213, etc.) son los puertos de origen seleccionados por `hping3` para enviar los paquetes, y no tienen que ver con el puerto destino (40).

### Interpretación de la Respuesta
El hecho de que recibas "ICMP Port Unreachable" confirma varias cosas:
1. **No hay ningún proceso escuchando en el puerto 40**: Esto es esperado ya que el puerto 40 raramente es usado por servicios estándar.
2. **Tu sistema está correctamente configurado para responder a paquetes UDP no solicitados con mensajes ICMP apropiados**: Esto es útil para diagnósticos de red y asegura que los sistemas emisores puedan saber cuando sus paquetes están siendo dirigidos a puertos inactivos.

### Conclusión
Este experimento muestra cómo `hping3` puede ser utilizado para diagnosticar el estado de los puertos en tu sistema usando UDP y cómo el sistema responde con mensajes de error ICMP cuando no encuentra un servicio escuchando en el puerto especificado. En futuras pruebas, para evitar confusiones, es mejor omitir el flag `-S` cuando estés enviando paquetes UDP con `hping3`.

#### Parte c

`¿Qué diferencias nota en las respuestas obtenidas en los dos casos anteriores? ¿Puede explicar a qué se debe? (Ayuda: utilice el comando ss visto anteriormente).`

Para analizar las diferencias entre las respuestas obtenidas en los dos casos anteriores (usando `hping3` para enviar paquetes a los puertos 22 y 40) y determinar a qué se deben estas diferencias, es útil utilizar el comando `ss` que mencionaste. Este comando nos proporcionará información sobre los puertos que están actualmente en estado LISTEN en la máquina, es decir, aquellos puertos que tienen un servicio asociado escuchando conexiones entrantes.

### Recordatorio de los Comandos y Respuestas:

1. **Puerto 22 (Conexión SSH)**
   - Los paquetes TCP enviados al puerto 22 recibieron una respuesta con los flags `SA` (SYN-ACK), indicando que hay un servicio (SSH) listo y dispuesto a establecer una conexión TCP.

2. **Puerto 40 (Sin Servicio Conocido)**
   - Los paquetes UDP enviados al puerto 40 resultaron en respuestas ICMP de tipo "Port Unreachable", indicando que no hay un servicio escuchando en ese puerto.

### Usando el Comando `ss`

Ahora vamos a usar el comando `ss` para confirmar estos detalles:

```bash
ss -tuln
```

```bash
redes@debian:~$ ss -tuln
Netid State  Recv-Q Send-Q      Local Address:Port    Peer Address:Port Process 
udp   UNCONN 0      0                 0.0.0.0:5353         0.0.0.0:*            
udp   UNCONN 0      0                 0.0.0.0:50522        0.0.0.0:*            
udp   UNCONN 0      0                 0.0.0.0:631          0.0.0.0:*            
udp   UNCONN 0      0               127.0.0.1:4038         0.0.0.0:*            
udp   UNCONN 0      0                    [::]:35837           [::]:*            
udp   UNCONN 0      0                    [::]:5353            [::]:*            
tcp   LISTEN 0      128             127.0.0.1:631          0.0.0.0:*            
tcp   LISTEN 0      5               127.0.0.1:4038         0.0.0.0:*            
tcp   LISTEN 0      128               0.0.0.0:22           0.0.0.0:*            
tcp   LISTEN 0      128                 [::1]:631             [::]:*            
tcp   LISTEN 0      4096                [::1]:50051           [::]:*            
tcp   LISTEN 0      4096   [::ffff:127.0.0.1]:50051              *:*            
tcp   LISTEN 0      128                  [::]:22              [::]:*   
```

Este comando te dará una lista de todos los puertos en estado LISTEN en tu sistema:

- **`-t`** muestra los sockets TCP.
- **`-u`** muestra los sockets UDP.
- **`-l`** filtra para mostrar solo aquellos en estado LISTEN.
- **`-n`** muestra números de puerto, en lugar de intentar resolver los nombres de servicio.

### Interpretación Esperada

- Si ejecutas `ss -tuln`, esperarías ver el puerto 22 listado bajo TCP, indicando que SSH está activo y escuchando.
- No esperarías ver el puerto 40 listado bajo TCP o UDP, lo que confirma por qué el sistema respondió con mensajes ICMP de "Port Unreachable" cuando intentaste enviar paquetes UDP a ese puerto.

### ¿Por Qué las Diferencias en las Respuestas?

- **Puerto 22**: Al estar en estado LISTEN y tener un servicio activo (SSH), el sistema operativo responde a paquetes SYN con un SYN-ACK, facilitando la fase inicial de un three-way handshake de TCP, el proceso estándar para establecer una conexión TCP.

- **Puerto 40**: Al no tener un servicio escuchando en ese puerto, no hay ningún proceso que pueda responder a paquetes UDP dirigidos a él, resultando en que el sistema operativo genere automáticamente respuestas ICMP de "Port Unreachable". Esto es un mecanismo estándar para informar al emisor que el puerto destino no está disponible para recibir o procesar paquetes.

Estos resultados reflejan la configuración de los servicios en tu sistema y cómo el sistema operativo maneja los paquetes dirigidos a puertos inactivos o activos. Las respuestas ICMP "Port Unreachable" son una forma importante de proporcionar feedback a los emisores sobre la falta de disponibilidad de un puerto o servicio, permitiendo que los procesos de red se ajusten en consecuencia.

---

### Ejercicio 12

Investigue los distintos tipos de estado que puede tener una conexión TCP.

Ver https://users.cs.northwestern.edu/~agupta/cs340/project2/TCPIP_State_Transition_Diagram.pdf

En TCP (Protocolo de Control de Transmisión), cada conexión pasa por varios estados durante su ciclo de vida. TCP es un protocolo de comunicación orientado a la conexión, lo que significa que establece una conexión explícita antes de la transferencia de datos y la cierra una vez completada la transferencia. Aquí están los principales estados de una conexión TCP:

##### 1. **CLOSED**
Es el estado inicial y final de cada conexión. Indica que no hay conexión activa o pendiente.

##### 2. **LISTEN**
El servidor está esperando conexiones entrantes. En este estado, el servidor está listo para aceptar solicitudes de conexión de clientes.

##### 3. **SYN-SENT**
El cliente envía un segmento SYN para iniciar una conexión activa y pasa al estado SYN-SENT, esperando una respuesta del servidor.

##### 4. **SYN-RECEIVED**
El servidor recibe el segmento SYN del cliente y responde con un segmento SYN-ACK. El servidor entonces pasa al estado SYN-RECEIVED mientras espera la confirmación del cliente.

##### 5. **ESTABLISHED**
Ambos sistemas (cliente y servidor) han recibido los segmentos SYN y ACK. En este estado, la conexión está abierta y los datos pueden ser enviados bidireccionalmente.

##### 6. **FIN-WAIT-1**
El estado FIN-WAIT-1 indica que la aplicación ha solicitado el cierre de la conexión, y el sistema espera que el segmento FIN sea acusado o que el servidor envíe su propio segmento FIN.

##### 7. **FIN-WAIT-2**
En este estado, el sistema ha recibido un acuse de recibo del segmento FIN del otro extremo y espera un segmento FIN del otro extremo.

##### 8. **CLOSE-WAIT**
El sistema ha recibido un segmento FIN del otro extremo y espera que la aplicación local responda con un segmento FIN.

##### 9. **CLOSING**
Ambos lados han solicitado el cierre de la conexión y esperan acusar recibo del cierre del otro extremo.

##### 10. **LAST-ACK**
El sistema ha enviado un segmento FIN y espera el último acuse de recibo (ACK) del otro extremo.

##### 11. **TIME-WAIT**
El sistema espera durante un tiempo suficiente para asegurarse de que el extremo remoto ha recibido el acuse de recibo final de su segmento FIN. Este estado también permite que los paquetes viejos en la red se disipen.

##### 12. **CLOSED**
Después de que todos los segmentos FIN y ACK se han intercambiado adecuadamente, la conexión se cierra completamente.

Estos estados garantizan que TCP sea un protocolo confiable y orientado a la conexión, proporcionando gestión de errores, control de flujo, y garantías de entrega de datos en orden.

---


### Ejercicio 13

Dada la siguiente salida del comando ss, responda:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5a859dc6-7ef3-4c7e-ba49-4cda4c4f85af)


Dada la salida del comando `ss` que mostraste, podemos responder a las preguntas basándonos en la información de los estados de conexión TCP y los puertos listados:

`a) ¿Cuántas conexiones hay establecidas?`
El estado "ESTAB" indica que una conexión está establecida. De la salida, podemos contar:

- Cinco conexiones establecidas (`ESTAB`) hacia el puerto 443.
- Una conexión establecida hacia el puerto 22 desde `127.0.0.1` a `127.0.0.1:41220`.

**Total: 6 conexiones establecidas**

`b) ¿Cuántos puertos hay abiertos a la espera de posibles nuevas conexiones?`
Los puertos en estado "LISTEN" están abiertos esperando nuevas conexiones. En la salida, los siguientes puertos están escuchando:

- Puerto 22 (SSH)
- Puerto 80 (HTTP)
- Puerto 53 (DNS)
- Puerto 25 (SMTP)

**Total: 4 puertos escuchando**

`c) El cliente y el servidor de las comunicaciones HTTPS (puerto 443), ¿residen en la misma máquina?`
Las conexiones a HTTPS mostradas utilizan direcciones IP como `163.10.5.222` en el lado local y direcciones como `64.233.163.120`, `200.115.89.30`, y `64.233.190.99` en el lado remoto, indicando que el cliente y el servidor **no residen en la misma máquina**.

`d) El cliente y el servidor de la comunicación SSH (puerto 22), ¿residen en la misma máquina?`
Hay una conexión SSH desde `127.0.0.1:41220` a `127.0.0.1:22`, lo que indica que tanto el cliente como el servidor **residen en la misma máquina** (comunicación de loopback).

`e) Liste los nombres de todos los procesos asociados con cada comunicación. Indique para cada uno si se trata de un proceso cliente o uno servidor.`
- **SSH (puerto 22)**: `sshd` (servidor)
- **HTTP (puerto 80)**: `apache2` (servidor)
- **HTTPS (puerto 443)**: `x-www-browser` (cliente)
- **DNS (puerto 53)**: `named` (servidor)
- **SMTP (puerto 25)**: `postfix` (servidor)
- **SSH (puerto 22, loopback)**: `sshd` (servidor) y cliente desde el mismo proceso `sshd` (cliente)

`f) ¿Cuáles conexiones tuvieron el cierre iniciado por el host local y cuál es por el remoto?`
El estado "CLOSE-WAIT" indica que el cierre fue iniciado por el host remoto, y el host local está esperando cerrar la conexión. Hay una conexión en estado "CLOSE-WAIT" hacia `200.115.89.30:443`, indicando que el cierre fue iniciado por el remoto.

`g) ¿Cuántas conexiones están aún pendientes por establecerse?`
El estado "SYN-SENT" indica que la conexión está en proceso de ser establecida, con el host local habiendo enviado un SYN y esperando un SYN-ACK en respuesta. Hay una conexión en estado "SYN-SENT" hacia `43.232.2.2:9500`.

Estos análisis proporcionan una visión detallada de los estados y actividades de la red en la máquina en cuestión, basándonos en los estados de las conexiones TCP y los puertos en uso.

---

### Ejercicio 14

Dadas las salidas de los siguientes comandos ejecutados en el cliente y el servidor, responder:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/321bf1df-2fe4-4eae-8077-0c652ace3fc8)

La información mostrada en las salidas de los comandos `ss` de ambos el servidor y el cliente revela detalles sobre el estado de la conexión TCP en el puerto 110, que comúnmente se usa para el servicio de correo electrónico POP3. Aquí está el análisis detallado de las preguntas planteadas:

`a) ¿Qué segmentos llegaron y cuáles se están perdiendo en la red?`

**Servidor:**
- **Estado `LISTEN` en el puerto 110**: El servidor está escuchando en el puerto 110, esperando conexiones entrantes.
- **Estado `SYN-RECV` desde `157.0.0.1:110` hacia `157.0.0.11:52843`**: Esto indica que el servidor ha recibido un segmento SYN del cliente y ha respondido con un segmento SYN-ACK, que está esperando ser confirmado (ACK) por el cliente.

**Cliente:**
- **Estado `SYN-SENT` desde `157.0.0.11:52843` hacia `157.0.0.1:110`**: Esto muestra que el cliente ha enviado un segmento SYN al servidor y está esperando una respuesta SYN-ACK del servidor.

**Análisis de los segmentos perdidos:**
- Dado que el servidor muestra `SYN-RECV`, ha enviado el SYN-ACK al cliente, pero el cliente aún está en `SYN-SENT`. Esto sugiere que el segmento SYN-ACK enviado por el servidor puede haberse perdido en la red, ya que el cliente no parece haberlo recibido.

`b) ¿A qué protocolo de capa de aplicación y de transporte se está intentando conectar el cliente?`
- **Capa de Aplicación:** El puerto 110 es típicamente usado por el protocolo POP3 (Post Office Protocol versión 3), que es un protocolo de capa de aplicación utilizado para recuperar correo electrónico desde un servidor de correo.
- **Capa de Transporte:** Dado que estamos observando conexiones TCP (`ss -natu`), el cliente está utilizando el protocolo TCP (Protocolo de Control de Transmisión) para establecer una conexión segura y confiable con el servidor.

`c) ¿Qué flags tendría seteado el segmento perdido?`
- El segmento que probablemente se perdió es el **SYN-ACK**, que es la respuesta del servidor después de recibir un SYN del cliente. Este segmento SYN-ACK es crucial para el segundo paso en el proceso de handshake de tres vías de TCP. 
- **Flags del segmento perdido:**
  - **SYN (Synchronize):** Indica que es una sincronización durante el establecimiento de la conexión.
  - **ACK (Acknowledgment):** Confirma la recepción del segmento SYN inicial del cliente.

Este análisis indica que hay problemas de conectividad que podrían estar relacionados con la configuración de red, pérdida de paquetes, o problemas con firewalls o dispositivos intermediarios que están bloqueando o descartando paquetes específicos. Sería recomendable revisar la configuración de red y posiblemente realizar pruebas adicionales como `traceroute` o `tcpdump` para diagnosticar más a fondo el problema de conectividad.

### Ejercicio 15 CONSULTAR ESTE SI HAY TIEMPO :(

Use CORE para armar una topología como la siguiente, sobre la cual deberá realizar:

Viendo tu captura de pantalla del emulador de red CORE, parece que ya has colocado dos nodos (computadoras) en tu topología. Ahora, para avanzar con el ejercicio y configurar la comunicación entre ellos, te guiaré paso a paso.

### Paso 1: Conectar los Nodos
1. **Conectar los Nodos**: Utiliza la herramienta de enlace (normalmente representada por un icono de cable) para conectar los dos nodos. Haz clic en un nodo, luego en el otro para establecer un enlace directo entre ellos.

### Paso 2: Configurar las Interfaces de Red de los Nodos
1. **Asignar Direcciones IP**: Haz doble clic en cada nodo para abrir su configuración. Necesitarás asignar direcciones IP estáticas a cada interfaz de red conectada. Asegúrate de que estén en la misma subred para que puedan comunicarse. Por ejemplo, puedes usar `192.168.1.1/24` para el primer nodo y `192.168.1.2/24` para el segundo.

### Paso 3: Iniciar la Emulación
1. **Iniciar la Emulación**: Una vez que los nodos están configurados y conectados, inicia la emulación. Esto generalmente se hace con un botón en la barra de herramientas que puede parecer un botón de "play".

### Paso 4: Abrir Terminales en los Nodos
1. **Abrir Terminales**: Haz clic derecho en cada nodo y selecciona "Open Terminal" o algo similar. Esto abrirá un terminal para cada nodo, donde podrás ejecutar comandos.

### Parte a: Monitorear las Conexiones
1. **Ejecutar el Comando para Monitorear**: En cada terminal de los nodos, ejecuta el siguiente comando para monitorear el estado de las conexiones en tiempo real:
   ```bash
   watch -n 1 'ss -nat'
   ```
   - `watch -n 1`: Este comando actualizará la salida cada segundo.
   - `'ss -nat'`: Muestra todas las conexiones TCP activas y los puertos que están escuchando.

### Explicación del Comando
- **`watch`**: Este comando se utiliza para ejecutar otro comando de forma periódica, mostrando su salida en pantalla completa. Es útil para ver la evolución de la salida de un comando a lo largo del tiempo.
- **`ss -nat`**:
  - **`ss`** es una utilidad para inspeccionar sockets en el sistema.
  - **`-n`** evita convertir direcciones en nombres.
  - **`-a`** muestra todos los sockets.
  - **`-t`** filtra para mostrar solo sockets TCP.

Este comando proporcionará una vista en tiempo real de las conexiones y puertos, lo cual es ideal para tu ejercicio en CORE, ya que podrás ver cómo cambian los estados de las conexiones a medida que realizas configuraciones o pruebas de red.


#### Parte a

En ambos equipos inspeccionar el estado de las conexiones y mantener abiertas ambas ventanas con el comando corriendo para poder visualizar los cambios a medida que se realiza el ejercicio.
 
Ayuda: watch-n1 ’ss-nat’

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/4989636f-935e-4d05-9f8e-b231a5b3756e)

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