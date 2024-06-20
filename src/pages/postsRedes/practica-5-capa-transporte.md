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

### Ejercicio 10

`¿Qué sucede si llega un segmento TCP con el flag SYN activo a un host que no tiene ningún proceso esperando en el puerto destino de dicho segmento (es decir, que dicho puerto no está en estado LISTEN)?`


`Utilice **hping3** para enviar paquetes TCP al puerto destino 22 de la máquina virtual con el flag SYN activado.`


`Utilice **hping3** para enviar paquetes TCP al puerto destino 40 de la máquina virtual con el flag SYN activado.`

`¿Qué diferencias nota en las respuestas obtenidas en los dos casos anteriores?`

`¿Puede explicar a qué se debe? `

> (Ayuda: utilice el comando ss visto anteriormente)

Cuando un segmento TCP con el flag SYN llega a un host, pero no hay ningún proceso escuchando en el puerto destino (es decir, el puerto no está en estado LISTEN), el sistema operativo del host generalmente responde con un segmento TCP que tiene los flags RST (Reset) y ACK (Acknowledgment) activados. Esto se hace para indicar al remitente que el puerto destino no está disponible o que no hay un proceso que pueda aceptar la conexión.

### Experimento con hping3

Para ilustrar este comportamiento, puedes usar **hping3** para enviar paquetes TCP al puerto 22 y al puerto 40 de una máquina virtual. Supongamos que el puerto 22 está abierto y escuchando (estado LISTEN), mientras que el puerto 40 está cerrado.

**Comando para el puerto 22:**
```bash
sudo hping3 -S -p 22 <dirección IP de la VM>
```
Donde `-S` activa el flag SYN y `-p 22` especifica que el puerto destino es el 22.

**Comando para el puerto 40:**
```bash
sudo hping3 -S -p 40 <dirección IP de la VM>
```
De manera similar, este comando intenta iniciar una conexión TCP al puerto 40 con el flag SYN.

### Diferencias en las respuestas

Las respuestas obtenidas pueden diferir en los siguientes aspectos:
- **Respuesta al puerto 22**: Si el puerto 22 está en estado LISTEN, la respuesta esperada del host es un paquete con los flags SYN y ACK activados, indicando que el host está dispuesto a establecer la conexión.
- **Respuesta al puerto 40**: Si el puerto 40 no está en estado LISTEN (cerrado), la respuesta esperada es un paquete con los flags RST y ACK, indicando que la conexión no puede ser establecida porque el puerto está cerrado o no hay un servicio que escuche en ese puerto.

### Explicación

La diferencia en las respuestas se debe al estado de los puertos en el host de destino. Los puertos que están activos y en estado LISTEN están preparados para aceptar nuevas conexiones, lo cual se señaliza con una respuesta SYN-ACK. Por otro lado, los puertos que no tienen servicios asociados que los escuchen se consideran cerrados y el host informa esto mediante una respuesta RST-ACK.

Para verificar el estado de los puertos en el host, puedes utilizar el comando `ss` en la máquina virtual:
```bash
ss -tuln
```
Este comando te mostrará una lista de todos los puertos en uso y sus estados, ayudándote a confirmar si un puerto específico está escuchando o no.

---

### Ejercicio 11

¿Qué sucede si llega un datagrama UDP a un host que no tiene a ningún proceso esperando en el puerto destino de dicho datagrama (es decir, que dicho puerto no está en estado LISTEN)

#### Parte a

Utilice hping3 para enviar datagramas UDP al puerto destino 5353 de la máquina virtual.

#### Parte b

Utilice hping3 para enviar datagramas UDP al puerto destino 40 de la máquina virtual.

#### Parte c

¿Qué diferencias nota en las respuestas obtenidas en los dos casos anteriores? ¿Puede explicar a qué se debe? (Ayuda: utilice el comando ss visto anteriormente).

Cuando un datagrama UDP llega a un host en un puerto en el que no hay ningún proceso esperando (es decir, que dicho puerto no está en estado LISTEN), el comportamiento es ligeramente diferente al de TCP debido a la naturaleza sin conexión de UDP. En TCP, se recibe un paquete con los flags RST y ACK para indicar que el puerto está cerrado, pero en UDP, la respuesta típica a un datagrama enviado a un puerto cerrado es un mensaje de error ICMP de tipo "Destination Unreachable", específicamente con el código "Port Unreachable".

### Experimento con hping3

Vamos a ilustrar este comportamiento enviando datagramas UDP a dos puertos diferentes de una máquina virtual usando **hping3**.

#### Parte a: Puerto 5353

**Comando para el puerto 5353:**
```bash
sudo hping3 --udp -p 5353 <dirección IP de la VM>
```
El puerto 5353 se usa comúnmente para mDNS (Multicast DNS), y es posible que esté abierto en algunas configuraciones.

#### Parte b: Puerto 40

**Comando para el puerto 40:**
```bash
sudo hping3 --udp -p 40 <dirección IP de la VM>
```
Este puerto probablemente esté cerrado, a menos que se haya configurado específicamente para alguna aplicación.

### Diferencias en las respuestas

#### Respuestas esperadas

- **Respuesta al puerto 5353**: Si el puerto 5353 está siendo utilizado por algún servicio como mDNS, es posible que no recibas ningún mensaje ICMP de "Destination Unreachable". En cambio, podrías recibir una respuesta del servicio mDNS si está configurado para responder a solicitudes generales.
- **Respuesta al puerto 40**: Si no hay ningún servicio escuchando en el puerto 40, la respuesta esperada desde el host sería un mensaje ICMP "Destination Unreachable", con el código "Port Unreachable", indicando que no hay un proceso que pueda recibir el datagrama.

#### Explicación de las diferencias

Las diferencias en las respuestas se deben al estado de los puertos en el host de destino y a cómo están configurados los servicios en esos puertos. Si un puerto está en uso por un servicio que responde a datagramas UDP, podrías no recibir un mensaje ICMP de error. Por otro lado, un puerto que no tiene un servicio asociado o que no está en estado LISTEN típicamente responderá con un error ICMP indicando que el puerto es inalcanzable.

#### Verificación con `ss`

Para entender mejor por qué se reciben estas respuestas, puedes usar el comando `ss` en la máquina virtual para verificar el estado de los puertos:
```bash
ss -u -a
```
Este comando muestra todos los puertos UDP y su estado. Esto te permitirá ver si los puertos 5353 o 40 están activos y si hay algún proceso asociado escuchándolos.


---

### Ejercicio 12

Investigue los distintos tipos de estado que puede tener una conexión TCP.

Ver https://users.cs.northwestern.edu/~agupta/cs340/project2/TCPIP_State_Transition_Diagram.pdf

Parece que hubo un error al intentar recuperar la información directamente desde la página de la Universidad Northwestern, ya que el contenido está en formato PDF, que no puedo procesar directamente. Sin embargo, puedo proporcionarte una descripción general de los estados por los que puede pasar una conexión TCP basada en el conocimiento estándar del diagrama de transición de estados de TCP.

### Estados de una Conexión TCP

1. **CLOSED**: El estado inicial, donde no hay conexión activa ni pendiente.

2. **LISTEN**: El servidor espera una conexión entrante, es decir, está listo para aceptar solicitudes.

3. **SYN-SENT**: El cliente ha enviado un paquete SYN para iniciar una conexión y está esperando un paquete SYN-ACK del servidor.

4. **SYN-RECEIVED**: El servidor ha recibido el SYN del cliente y ha enviado un SYN-ACK como respuesta, esperando un ACK final para establecer la conexión.

5. **ESTABLISHED**: Ambos, cliente y servidor, han recibido los reconocimientos necesarios y la conexión está establecida y abierta para la comunicación bidireccional.

6. **FIN-WAIT-1**: El host ha enviado un FIN para cerrar su lado de la conexión y está esperando un ACK de FIN.

7. **FIN-WAIT-2**: El host ha recibido un ACK de su FIN y espera un FIN del otro extremo.

8. **CLOSE-WAIT**: El host ha recibido un FIN de la otra parte, ha enviado un ACK y está esperando la aplicación para que cierre la conexión.

9. **CLOSING**: Ambos lados han enviado FIN y están esperando el ACK del FIN opuesto.

10. **LAST-ACK**: El host está esperando el ACK final después de enviar un FIN.

11. **TIME-WAIT**: Después de recibir el último ACK en respuesta a un FIN enviado, el host espera un tiempo suficiente para asegurarse de que el remitente ha recibido el ACK antes de cerrar completamente la conexión.

12. **CLOSED**: El estado final después de cerrar la conexión.

Este conjunto de estados asegura que la conexión TCP sea confiable y que todos los paquetes se transmitan de manera ordenada y segura. Si necesitas una explicación más detallada o específica sobre alguno de estos estados o sus transiciones, estaré encantado de ayudar.

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