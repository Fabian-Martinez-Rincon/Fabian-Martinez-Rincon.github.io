---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Capa de Red'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/capa-red.webp'
    alt: ''
tags: ["Capa de Aplicación"]
---



| Clase  | Rango de Direcciones     | Máscara de Subred Predeterminada | Bits para la Red | Bits para Hosts | Número Máximo de Redes | Número Máximo de Hosts por Red | Uso Típico                       |
|--------|---------------------------|----------------------------------|------------------|-----------------|-------------------------|--------------------------------|----------------------------------|
| **A**  | 1.0.0.0 a 126.255.255.255 | 255.0.0.0 (/8)                   | 8                | 24              | 126                     | 16,777,214                     | Grandes redes internacionales    |
| **B**  | 128.0.0.0 a 191.255.255.255 | 255.255.0.0 (/16)                | 16               | 16              | 16,384                  | 65,534                         | Universidades, corporaciones medianas |
| **C**  | 192.0.0.0 a 223.255.255.255 | 255.255.255.0 (/24)              | 24               | 8               | 2,097,152               | 254                            | Pequeñas empresas, redes locales |

---

## Introducción

### Ejercicio 1

`¿Qué servicios presta la capa de red?`

La capa de red, generalmente referida como la capa 3 en el modelo OSI (Open Systems Interconnection), proporciona una variedad de servicios esenciales para el transporte de datos a través de redes complejas. Los servicios más destacados incluyen:

1. **Direccionamiento Lógico**: A diferencia del direccionamiento físico (MAC) en la capa de enlace de datos, la capa de red utiliza direcciones lógicas (como las direcciones IP en IPv4 e IPv6) para identificar dispositivos de manera única en toda la red. Esto permite que los datos se envíen a través de múltiples redes y lleguen al destino correcto.

2. **Encaminamiento (Routing)**: La capa de red es responsable de determinar la ruta óptima que los paquetes deben seguir para llegar desde su origen hasta su destino. Esto se hace mediante routers que utilizan protocolos de encaminamiento para intercambiar información sobre la topología de la red y tomar decisiones de enrutamiento.

3. **Fragmentación y Reensamblado**: Debido a las variaciones en el tamaño máximo de transmisión (MTU) que pueden manejar diferentes redes, la capa de red puede fragmentar paquetes grandes en fragmentos más pequeños en el origen y luego reensamblarlos en el destino.

4. **Control de Congestión y Calidad de Servicio (QoS)**: Proporciona mecanismos para manejar el control de congestión en la red. Esto puede incluir la priorización de ciertos tipos de tráfico, lo que es crucial para aplicaciones que requieren alta disponibilidad y tiempo de respuesta rápido, como las transmisiones de video y las llamadas VoIP.

`¿Cuál es la PDU en esta capa?`

La unidad de datos de protocolo (PDU) en la capa de red se llama **paquete**. Un paquete consiste en segmentos de datos encapsulados de la capa de transporte, a los cuales se les añade una cabecera de capa de red. Esta cabecera incluye información esencial como las direcciones IP de origen y destino, información sobre fragmentación y otros flags y campos necesarios para el enrutamiento y la gestión del tráfico en la red.

`¿Qué dispositivo es considerado sólo de la capa de red?`

El dispositivo más representativo que opera principalmente en la capa de red es el **router**. Los routers son responsables de recibir paquetes de datos y enviarlos hacia su destino final utilizando la mejor ruta disponible. Para hacer esto, los routers examinan la dirección IP de destino de cada paquete, toman decisiones de enrutamiento basadas en su tabla de ruteo y luego reenvían los paquetes a la interfaz de salida apropiada. A diferencia de los switches de capa 2, que utilizan direcciones MAC para tomar decisiones de reenvío, los routers utilizan direcciones lógicas (IP) para esta función.

---

### Ejercicio 2

`¿Por qué se lo considera un protocolo de mejor esfuerzo?`

El término "protocolo de mejor esfuerzo" se refiere comúnmente al modo en que opera el Protocolo de Internet (IP), especialmente en su versión más utilizada, IPv4. Este término se usa para describir la naturaleza del servicio que IP proporciona al transmitir paquetes de datos entre hosts en diferentes redes. Aquí te detallo por qué se considera un protocolo de mejor esfuerzo:

1. **No garantiza la entrega de paquetes**: El protocolo IP no asegura que los paquetes de datos enviados lleguen a su destino. No hay mecanismos integrados en el nivel de red para confirmar la recepción de paquetes, retransmitir paquetes perdidos o mantener el orden de los paquetes.

2. **No hay control de errores más allá de la cabecera**: IP tiene un checksum de cabecera que solo verifica errores en la cabecera del paquete, no en el contenido del paquete en sí. Esto significa que si un paquete se corrompe en tránsito, IP por sí solo no puede detectar ni corregir estos errores en los datos transmitidos.

3. **No hay garantías de calidad de servicio (QoS)**: IP no proporciona garantías en términos de retardo, ancho de banda o prioridad de tráfico. Aunque hay extensiones y técnicas como el DSCP (Differentiated Services Code Point) en el campo de servicios diferenciados de IPv4 que intentan abordar la calidad del servicio, estas no están garantizadas por el protocolo IP en sí.

4. **No previene la congestión de la red**: IP no tiene mecanismos para controlar o evitar la congestión de la red. Cuando la red está congestionada, IP no ajusta automáticamente la tasa de envío o la ruta de los paquetes para aliviar la congestión.

5. **Tratamiento equitativo de todos los paquetes**: En general, IP trata todos los paquetes de manera igual, sin importar su contenido o importancia. Sin embargo, esto también se puede ver como una ventaja en términos de simplicidad y flexibilidad, ya que permite que otras capas o protocolos manejen aspectos específicos como la confiabilidad y el control de congestión.

Estas características reflejan el diseño de IP como un protocolo de mejor esfuerzo, donde la red hace su mejor intento para entregar paquetes, pero sin garantías. Esto simplifica el diseño y la implementación de la red, pero delega la responsabilidad de manejar la confiabilidad, el orden, la integridad de los datos y el control de la congestión a las capas superiores, especialmente al Protocolo de Control de Transmisión (TCP).

---

### Ejercicio 3

`¿Cuántas redes clase A, B y C hay?`

El sistema de clases de direcciones IP fue parte del diseño original de IPv4 para la asignación de direcciones IP. El sistema dividía el espacio de direcciones en clases A, B y C, cada una con una cantidad diferente de redes posibles y un número variable de hosts permitidos por red. Aquí está el desglose:

1. **Clase A**: Las direcciones de clase A utilizan el primer bit como `0`, lo que deja 7 bits para el número de red y 24 bits para los hosts. Como el primer bit es fijo y siempre es `0`, esto deja 2^7 posibles números de red. Sin embargo, el número de red `0` está reservado, reduciendo el número total de redes Clase A disponibles a 2^7 - 2 = 126 redes.

2. **Clase B**: Las direcciones de clase B tienen los dos primeros bits establecidos como `10`, lo que deja 14 bits para el número de red y 16 bits para los hosts. Esto proporciona 2^14 = 16,384 redes posibles.

3. **Clase C**: Las direcciones de clase C comienzan con los bits `110`, dejando 21 bits para el número de red y 8 bits para los hosts. Esto resulta en 2^21 = 2,097,152 redes Clase C disponibles.

`¿Cuántos hosts como máximo pueden tener cada una?`

La cantidad de hosts que puede soportar cada red varía según el número de bits disponibles para la dirección de host en cada clase de dirección:

1. **Clase A**: Con 24 bits disponibles para direcciones de host, cada red Clase A puede soportar hasta 2^24 - 2 hosts. Se restan dos direcciones: una para la dirección de red (`todos los bits de host a 0`) y una para la dirección de broadcast (`todos los bits de host a 1`), lo que da un total de 16,777,214 hosts por red.

2. **Clase B**: Con 16 bits para direcciones de host, cada red Clase B puede soportar hasta 2^16 - 2 hosts, lo que equivale a 65,534 hosts por red.

3. **Clase C**: Con 8 bits para direcciones de host, cada red Clase C puede soportar hasta 2^8 - 2 hosts, lo que resulta en 254 hosts por red.

Este sistema de clases fue útil para los primeros días de Internet pero eventualmente llevó a una asignación ineficiente del espacio de direcciones IP, llevando al desarrollo de CIDR (Classless Inter-Domain Routing) para una asignación más flexible y eficiente del espacio de direcciones IP.

---

### Ejercicio 4

`¿Qué son las subredes?`

Las subredes son divisiones lógicas de una red más grande. Este proceso, conocido como subnetting, permite segmentar una red IP más extensa en redes más pequeñas, cada una con su propio espacio de direcciones IP. El subnetting se realiza cambiando la frontera entre la parte de la dirección IP que identifica la red y la parte que identifica al host o dispositivo específico dentro de esa red. Esto se logra mediante el uso de una máscara de subred, que define cuántos bits de la dirección IP corresponden a la red y cuántos al host.

La creación de subredes puede tener varios propósitos prácticos:
- **Mejora la gestión de la red**: Al dividir una red grande en subredes más pequeñas, se facilita la administración y el mantenimiento.
- **Mejora del rendimiento**: Al limitar los hosts en cada subred, se reduce el dominio de broadcast, disminuyendo así el tráfico innecesario y mejorando el rendimiento general de la red.
- **Seguridad mejorada**: Las subredes pueden aislar segmentos de la red, lo que puede ayudar a limitar la propagación de tráfico malicioso y mejorar la seguridad.
- **Optimización del uso del espacio de direcciones IP**: Permite un uso más eficiente de un espacio limitado de direcciones IP, asignando solo el número necesario de direcciones a cada subred.


`¿Por qué es importante siempre especificar la máscara de subred asociada?`

La máscara de subred es crucial porque define la porción de la dirección IP que pertenece a la red frente a la porción que pertenece a los hosts dentro de esa red. Específicamente, es importante especificar la máscara de subred asociada por varias razones:

1. **Determina la red a la que pertenece un host**: Sin la máscara de subred, no se puede determinar con claridad la red a la que está conectado un dispositivo. Esto es fundamental para el enrutamiento de paquetes tanto dentro de una red como entre redes.

2. **Facilita el enrutamiento**: Los routers utilizan la máscara de subred para tomar decisiones de enrutamiento. Al saber cuál es la red destino de un paquete, el router puede reenviar el paquete de manera eficiente.

3. **Evita conflictos de direcciones IP**: La máscara de subred ayuda a identificar si dos dispositivos pueden tener la misma dirección IP dentro de la misma red o si deben estar en subredes separadas. Esto evita conflictos que podrían causar problemas de conectividad.

4. **Segmentación de red**: La máscara de subred permite a los administradores de red controlar el tamaño de cada subred y optimizar el uso de las direcciones IP disponibles, adaptándose mejor a las necesidades específicas de cada segmento de la red.

En resumen, la máscara de subred no solo es técnica sino también operativamente esencial para la correcta operación y gestión de redes en la infraestructura de TI.

---

### Ejercicio 5

`¿Cuál es la finalidad del campo Protocol en la cabecera IP?`

El campo "Protocol" en la cabecera IP, también conocido como "Protocol Type", tiene la finalidad de especificar el protocolo de la capa de transporte que se utiliza para los datos contenidos en el segmento del paquete. Este campo informa al sistema receptor sobre cómo interpretar el conjunto de datos (payload) incluido en el paquete IP. En otras palabras, le dice al host destino qué protocolo de la capa de transporte se debe utilizar para procesar el paquete recibido adecuadamente.

Por ejemplo, el campo podría indicar que los datos deben ser manejados por TCP (Protocolo de Control de Transmisión), UDP (Protocolo de Datagrama de Usuario), ICMP (Protocolo de Mensajes de Control de Internet), entre otros. La identificación correcta es crucial para que el sistema de destino sepa qué aplicación debe procesar esos datos y cómo deben ser tratados. El valor del campo "Protocol" se define con un número, donde cada número está asignado a un protocolo específico; por ejemplo, TCP es 6, UDP es 17, e ICMP es 1.

`¿A qué campos de la capa de transporte se asemeja en su funcionalidad?`

En la capa de transporte, el campo que más se asemeja en funcionalidad al campo "Protocol" de la cabecera IP es el campo "Número de puerto". En los protocolos TCP y UDP, los números de puerto sirven para especificar las aplicaciones de destino y origen en las comunicaciones entre hosts. Al igual que el campo "Protocol" determina qué protocolo de la capa superior debe manejar el paquete, los números de puerto determinan qué aplicación específica o servicio dentro del host debe manejar los datos una vez que el paquete ha sido procesado por el protocolo de transporte.

- **TCP y UDP**: Utilizan números de puerto en sus cabeceras para dirigir los segmentos a la aplicación correcta mediante puertos de origen y destino.
- **Multiplexación y demultiplexación**: Tanto el campo "Protocol" en la cabecera IP como los números de puerto en la cabecera TCP/UDP se utilizan para la multiplexación y demultiplexación, asegurando que los datos lleguen a la aplicación correcta y sean interpretados correctamente.

Este paralelismo subraya cómo cada capa del modelo OSI o del modelo de Internet maneja aspectos específicos del enrutamiento y la entrega de datos, desde el nivel de red hasta el nivel de aplicación.

---

## División en subredes

### Ejercicio 6

Para cada una de las siguientes direcciones IP (172.16.58.223/26, 163.10.5.49/27, 128.10.1.0/23, 10.1.0.0/24, 8.40.11.179/12) determine:
- `a)` ¿De qué clase de red es la dirección dada (Clase A, B o C)?
- `b)` ¿Cuál es la dirección de subred?
- `c)` ¿Cuál es la cantidad máxima de hosts que pueden estar en esa subred?
- `d)` ¿Cuál es la dirección de broadcast de esa subred?
- `e)` ¿Cuál es el rango de direcciones IP válidas dentro de la subred?

Para abordar el **Ejercicio 6**, necesitaremos desglosar cada dirección IP con su respectiva máscara de subred (dada en notación CIDR). Vamos a calcular la clase de red, dirección de subred, cantidad máxima de hosts, dirección de broadcast, y el rango de direcciones IP válidas para cada dirección dada. Empecemos con los cálculos:

`Dirección IP 1: 172.16.58.223/26`

1. **Clase de red**: Las direcciones que comienzan con 128 hasta 191 pertenecen a la Clase B. Así que 172.16.58.223 es una dirección de Clase B.
2. **Dirección de subred**: La máscara /26 indica que los primeros 26 bits son para la red. En binario, 172.16.58.223 es `10101100.00010000.00111010.11011111`. La subred será `10101100.00010000.00111010.11000000`, lo cual en decimal es 172.16.58.192.
3. **Cantidad máxima de hosts**: Con una máscara /26, hay 6 bits para hosts (32 - 26 = 6). Esto permite 2^6 - 2 = 62 hosts.
4. **Dirección de broadcast**: El broadcast se calcula poniendo todos los bits de host a 1, resultando en 172.16.58.255.
5. **Rango de direcciones IP válidas**: Desde 172.16.58.193 hasta 172.16.58.254.

`Dirección IP 2: 163.10.5.49/27`

1. **Clase de red**: Las direcciones que comienzan con 128 hasta 191 pertenecen a la Clase B.
2. **Dirección de subred**: Con /27, la subred será `163.10.5.32`.
3. **Cantidad máxima de hosts**: Con /27, hay 5 bits para hosts. Esto permite 2^5 - 2 = 30 hosts.
4. **Dirección de broadcast**: El broadcast sería 163.10.5.63.
5. **Rango de direcciones IP válidas**: Desde 163.10.5.33 hasta 163.10.5.62.

`Dirección IP 3: 128.10.1.0/23`

1. **Clase de red**: Las direcciones que comienzan con 128 hasta 191 pertenecen a la Clase B.
2. **Dirección de subred**: La dirección de subred es la misma que la dirección dada: 128.10.0.0.
3. **Cantidad máxima de hosts**: Con /23, hay 9 bits para hosts. Esto permite 2^9 - 2 = 510 hosts.
4. **Dirección de broadcast**: El broadcast sería 128.10.1.255.
5. **Rango de direcciones IP válidas**: Desde 128.10.0.1 hasta 128.10.1.254.

`Dirección IP 4: 10.1.0.0/24`

1. **Clase de red**: Las direcciones que comienzan con 1 hasta 126 pertenecen a la Clase A.
2. **Dirección de subred**: La dirección de subred es 10.1.0.0.
3. **Cantidad máxima de hosts**: Con /24, hay 8 bits para hosts. Esto permite 2^8 - 2 = 254 hosts.
4. **Dirección de broadcast**: El broadcast sería 10.1.0.255.
5. **Rango de direcciones IP válidas**: Desde 10.1.0.1 hasta 10.1.0.254.

`Dirección IP 5: 8.40.11.179/12`

1. **Clase de red**: Las direcciones que comienzan con 0 hasta 127 pertenecen a la Clase A.
2. **Dirección de subred**: Con /12, la subred será `8.0.0.0`.
3. **Cantidad máxima de hosts**: Con /12, hay 20 bits para hosts. Esto permite 2^20 - 2 = 1,048,574 hosts.
4. **Dirección de broadcast**: El broadcast sería 8.15.255.255.
5. **Rango de direcciones IP válidas**: Desde 8.0.0.1 hasta 8.15.255.254.

Estos cálculos nos permiten entender cómo cada una de estas direcciones IP se configura dentro de sus respectivas redes, facilitando el manejo y la asignación de recursos dentro de una red más grande.


---

7. Su organización cuenta con la dirección de red 128.50.10.0. Indique:
- a. ¿Es una dirección de red o de host?
- b. Clase a la que pertenece y máscara de clase.
- c. Cantidad de hosts posibles.
- d. Se necesitan crear, al menos, 513 subredes. Indique:
    - i. Máscara necesaria.
    - ii. Cantidad de redes asignables.
    - iii. Cantidad de hosts por subred.
    - iv. Dirección de la subred 710.
    - v. Dirección de broadcast de la subred 710.

8. Si usted estuviese a cargo de la administración del bloque IP 195.200.45.0/24
- a. ¿Qué máscara utilizaría si necesita definir al menos 9 subredes?
- b. Indique la dirección de subred de las primeras 9 subredes.
- c. Seleccione una e indique dirección de broadcast y rango de direcciones asignables en esa subred.

9. Dado el siguiente gráfico:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/84bced02-ed1c-4d45-b301-8bcf124fd4a9)

- a. Verifique si es correcta la asignación de direcciones IP y, en caso de no serlo, modifique la misma para que lo sea.
- b. ¿Cuántos bits se tomaron para hacer subredes en la red 10.0.10.0/24? ¿Cuántas subredes se podrían generar?
- c. Para cada una de las redes utilizadas indique si son públicas o privadas.


CIDR
10. ¿Qué es CIDR (Class Interdomain routing)? ¿Por qué resulta útil?

11. ¿Cómo publicaría un router las siguientes redes si se aplica CIDR?
- a. 198.10.1.0/24
- b. 198.10.0.0/24
- c. 198.10.3.0/24
- d. 198.10.2.0/24


12. Listar las redes involucradas en los siguientes bloques CIDR:
- 200.56.168.0/21
- 195.24.0.0/13
- 195.24/13

13. El bloque CIDR 128.0.0.0/2 o 128/2, ¿Equivale a listar todas las direcciones de red de clase B? ¿Cuál sería el bloque CIDR que agrupa todas las redes de clase A?

VLSM

14. ¿Qué es y para qué se usa VLSM?

15. Describa, con sus palabras, el mecanismo para dividir subredes utilizando VLSM.

16. Suponga que trabaja en una organización que tiene la red que se ve en el gráfico y debe armar el direccionamiento para la misma, minimizando el desperdicio de direcciones IP.

Dicha organización posee la red 205.10.192.0/19, que es la que usted deberá utilizar.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/06fab6ba-67c4-427f-b729-5845aec8f9ed)

a. ¿Es posible asignar las subredes correspondientes a la topología utilizando subnetting sin VLSM? Indique la cantidad de hosts que se desperdicia en cada subred.

b. Asigne direcciones a todas las redes de la topología. Tome siempre en cada paso la primera dirección de red posible.

c. Para mantener el orden y el inventario de direcciones disponibles, haga un listado de todas las direcciones libres que le quedaron, agrupándolas utilizando CIDR.

d. Asigne direcciones IP a todas las interfaces de la topología que sea posible.

17. Utilizando la siguiente topología y el bloque asignado, arme el plan de direccionamiento IPv4 teniendo en cuenta las siguientes restricciones:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c39bd88d-e208-45cf-b70e-a764ac567c8b)

- a. Utilizar el bloque IPv4 200.100.8.0/22.
- b. La red A tiene 125 hosts y se espera un crecimiento máximo de 20 hosts.
- c. La red X tiene 63 hosts.
- d. La red B cuenta con 60 hosts
- e. La red Y tiene 46 hosts y se espera un crecimiento máximo de 18 hosts.
- f. En cada red, se debe desperdiciar la menor cantidad de direcciones IP posibles. En este sentido, las redes utilizadas para conectar los routers deberán utilizar segmentos de red /30 de modo de desperdiciar la menor cantidad posible de direcciones IP

18. Asigne direcciones IP en los equipos de la topología según el plan anterior.

ICMP y Configuraciones IP

19. Describa qué es y para qué sirve el protocolo ICMP.
- a. Analice cómo funciona el comando ping.
    - i. Indique el tipo y código ICMP que usa el ping.
    - ii. Indique el tipo y código ICMP que usa la respuesta de un ping
- b. Analice cómo funcionan comandos como traceroute/tracert de Linux/Windows y cómo manipulan el campo TTL de los paquetes IP.
- c. Indique la cantidad de saltos realizados desde su computadora hasta el sitio www.nasa.gov. Analice:
    - i. Cómo hacer para que no muestre el nombre del dominio asociado a la IP de cada salto.
    - ii. La razón de la aparición de * en parte o toda la respuesta de un salto.
- d. Verifique el recorrido hacia los servidores de nombre del dominio unlp.edu.ar. En base al recorrido realizado, ¿podría confirmar cuál de ellos toma un camino distinto?

20. ¿Para que se usa el bloque 127.0.0.0/8? ¿Qué PC responde a los siguientes comandos?
- a. ping 127.0.0.1
- b. ping 127.0.54.43

21. Investigue para qué sirven los comandos ifconfig y route. ¿Qué comandos podría utilizar en su reemplazo? Inicie una topología con CORE, cree una máquina y utilice en ella los comandos anteriores para practicar sus diferentes opciones, mínimamente:
- Configurar y quitar una dirección IP en una interfaz.
- Ver la tabla de ruteo de la máquina