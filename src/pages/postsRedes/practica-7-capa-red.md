---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Capa de Red'
pubDate: 2024-04-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/red.jpg'
    alt: ''
tags: ["Capa de Aplicación"]
category: Redes
---

# Indice

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
- [Ejercicio 14](#ejercicio-14)
- [Ejercicio 15](#ejercicio-15)
- [Ejercicio 16](#ejercicio-16)
- [Ejercicio 17](#ejercicio-17)
- [Ejercicio 18](#ejercicio-18)
- [Ejercicio 19](#ejercicio-19)
- [Ejercicio 20](#ejercicio-20)
- [Ejercicio 21](#ejercicio-21)

---

## Introducción

### Ejercicio 1

#### ¿Qué servicios presta la capa de red?

La capa de red, también conocida como capa 3 del Modelo OSI, es fundamental para el funcionamiento de las redes de datos, especialmente en entornos de red extensos e interconectados como el Internet. Los principales servicios que ofrece la capa de red incluyen:

1. **Encaminamiento (Routing):** La capa de red es responsable de determinar y gestionar la ruta que los paquetes de datos deben seguir desde el origen hasta el destino a través de la red. Utiliza protocolos de encaminamiento como RIP, OSPF e BGP para descubrir rutas eficientes.

2. **Direccionamiento Lógico:** A diferencia del direccionamiento físico (MAC) de la capa de enlace de datos, la capa de red implementa un sistema de direccionamiento lógico que permite una jerarquía y una estructura más organizada. IP (Protocolo de Internet) es el ejemplo más conocido de un protocolo de direccionamiento lógico.

3. **Segmentación y Reensamblaje:** La capa de red puede segmentar un bloque de datos más grande en paquetes más pequeños para el transporte y luego reensamblar estos paquetes en el destino. Esto es crucial para manejar los diferentes tamaños máximos de transmisión (MTU) que pueden tener diferentes segmentos de red.

4. **Control de Congestión y Calidad de Servicio (QoS):** Aunque el control de congestión es más visible en la capa de transporte, la capa de red puede participar en la gestión de la congestión y en la implementación de políticas de QoS para garantizar el rendimiento de la red según los requerimientos de los diferentes tipos de tráfico.

5. **Aislamiento de Fallos y Diagnóstico de Red:** Herramientas y protocolos a nivel de red, como ICMP (Internet Control Message Protocol), ayudan en la identificación y el diagnóstico de problemas en la red, facilitando la detección y reparación de fallos.

#### ¿Cuál es la PDU en esta capa?

La unidad de datos de protocolo (PDU) de la capa de red es el **paquete**. En el contexto de IP, un paquete incluye la cabecera IP que contiene información esencial como las direcciones IP de origen y destino, la versión del protocolo, la longitud del paquete, y otros flags y campos que facilitan el encaminamiento y la entrega eficiente del paquete a través de la red.

#### ¿Qué dispositivo es considerado sólo de la capa de red?

El **router** es el dispositivo típicamente asociado con la capa de red. Su función principal es interconectar redes diferentes, determinando la mejor ruta para enviar los paquetes entre ellas basándose en la información de la capa de red. Los routers leen las direcciones incluidas en los paquetes de la capa de red para tomar decisiones de encaminamiento y dirigir el tráfico adecuadamente hacia su destino final.

Estos componentes y funciones de la capa de red aseguran que los datos se transmitan de manera efectiva y eficiente a través de redes complejas y a gran escala, como el Internet.

---

### Ejercicio 2

`¿Por qué se lo considera un protocolo de mejor esfuerzo?`

El término "protocolo de mejor esfuerzo" ("best effort protocol") se refiere comúnmente al Protocolo de Internet (IP), que es ampliamente utilizado en redes informáticas para la entrega de paquetes de datos. Este término describe la naturaleza del servicio que IP proporciona en términos de entrega de paquetes en una red.

#### Razones por las que IP es considerado un protocolo de mejor esfuerzo:

1. **No garantiza la entrega**: IP no asegura que los paquetes lleguen a su destino. Los paquetes pueden perderse debido a congestionamientos, errores en los enrutadores, o rutas ineficientes. IP no implementa mecanismos para recuperar paquetes perdidos; esta responsabilidad recae en los protocolos de capas superiores, como TCP.

2. **No garantiza orden**: Los paquetes IP pueden llegar a su destino en un orden diferente al que fueron enviados. No hay mecanismos dentro de IP para reordenar los paquetes a medida que llegan; nuevamente, esto es manejado por protocolos en la capa de transporte, como TCP, que reensambla los paquetes en el orden correcto.

3. **No garantiza integridad**: Aunque IP incluye un campo de suma de verificación en su cabecera que ayuda a detectar errores en los datos del encabezado, no protege la integridad del contenido del paquete en sí. Protocolos como TCP o UDP tienen sus propios mecanismos de suma de verificación que cubren todo el paquete.

4. **No previene la duplicación**: En algunas circunstancias, los paquetes IP pueden duplicarse, y más de una copia del mismo paquete puede llegar al destino. IP no tiene mecanismos para gestionar la eliminación de duplicados.

5. **No controla la congestión**: IP no tiene mecanismos integrados para evitar o gestionar la congestión en la red. En su lugar, depende de la respuesta de los protocolos de las capas superiores y de la gestión activa de la red para controlar la congestión.

#### Implicaciones de ser un protocolo de mejor esfuerzo

Al ser un protocolo de "mejor esfuerzo", IP permite una implementación y operación relativamente sencillas y eficientes de la red. Esto contribuye a la escalabilidad y la flexibilidad de Internet. Sin embargo, también significa que la calidad del servicio (QoS) no puede garantizarse sin la ayuda de tecnologías adicionales que operen junto con IP, como MPLS para redes gestionadas o técnicas de control de congestión y corrección de errores en los extremos de la comunicación.

Este enfoque de "mejor esfuerzo" permite que el núcleo de la red se mantenga simple y que la complejidad se maneje en los extremos, siguiendo el principio de diseño end-to-end, que es una característica fundamental de la arquitectura de Internet.

---

### Ejercicio 3


`¿Cuántas redes clase A, B y C hay? ¿Cuántos hosts como máximo pueden tener cada una?`

Las direcciones IP originalmente se dividían en clases para organizar el rango de direcciones según el tamaño y las necesidades de las redes. Las clases A, B y C son las más comunes dentro de este esquema de clasificación. Aquí detallamos cuántas redes existen en cada clase y cuántos hosts pueden contener como máximo:

#### Redes Clase A

- **Rango de Direcciones:** 1.0.0.0 a 126.0.0.0 (se excluyen ciertos rangos como 127.0.0.0, que está reservado para loopback).
- **Cantidad de Redes Posibles:** 126 redes. El primer octeto define la red, y va de 1 a 126.
- **Hosts por Red:** Cada red de Clase A puede tener hasta 16,777,214 hosts (2^24 - 2, donde se restan dos direcciones por la dirección de red y la de broadcast).

#### Redes Clase B

- **Rango de Direcciones:** 128.0.0.0 a 191.255.0.0.
- **Cantidad de Redes Posibles:** 16,384 redes. El primer y segundo octeto definen la red, comenzando en 128.0 y terminando en 191.255.
- **Hosts por Red:** Cada red de Clase B puede tener hasta 65,534 hosts (2^16 - 2, también restando la dirección de red y la de broadcast).

#### Redes Clase C

- **Rango de Direcciones:** 192.0.0.0 a 223.255.255.0.
- **Cantidad de Redes Posibles:** 2,097,152 redes. Los primeros tres octetos definen la red, desde 192.0.0 hasta 223.255.255.
- **Hosts por Red:** Cada red de Clase C puede tener hasta 254 hosts (2^8 - 2, igualmente restando la dirección de red y la de broadcast).

#### Contexto y Transición a CIDR

Es importante señalar que este método de clasificación basado en clases ha sido en gran parte reemplazado por el enfoque sin clases conocido como CIDR (Classless Inter-Domain Routing) a principios de los años 90. CIDR permite un uso más eficiente y flexible del espacio de direcciones IP mediante la asignación basada en "prefijos" que describen la máscara de subred, en lugar de estar restringido por las clases fijas. Esto ayuda a mejorar la eficiencia de la asignación de direcciones IP, especialmente frente a la escasez de direcciones IP bajo IPv4 y la necesidad de alojar múltiples redes de diferentes tamaños.

---

### Ejercicio 4

#### ¿Qué son las subredes?

Las subredes, o subredes de red, son divisiones lógicas de una red de mayor tamaño. Este proceso de subdivisión permite una organización más eficiente y segura del espacio de direcciones IP dentro de una red más grande. Crear subredes implica segmentar una red en múltiples redes más pequeñas, cada una con su propio rango único de direcciones IP.

La subdivisión de una red en subredes puede hacerse por varias razones, tales como:

1. **Mejora del Rendimiento**: Reducir el tamaño de una red puede disminuir el tráfico local en cada segmento, reduciendo así la contención y la sobrecarga de la red, y potencialmente aumentando el rendimiento general.

2. **Administración Simplificada**: Las subredes permiten a los administradores de red gestionar y mantener segmentos de red de manera más efectiva. Esto es especialmente útil en redes grandes donde manejar una sola red extensa podría ser complejo y poco práctico.

3. **Seguridad Mejorada**: Las subredes pueden proporcionar capas adicionales de seguridad. Limitar la comunicación entre subredes puede prevenir la propagación de actividades maliciosas dentro de la red.

4. **Optimización del Uso de Direcciones IP**: Al segmentar una red, se pueden asignar direcciones IP de manera más eficiente, reduciendo el desperdicio de direcciones en redes con pocos hosts.

#### ¿Por qué es importante siempre especificar la máscara de subred asociada?

La máscara de subred es fundamental porque define cómo se divide el espacio de direcciones de una red entre la dirección de red y los hosts. Específicamente, la máscara de subred determina qué parte de la dirección IP se utiliza para identificar la subred y qué parte se utiliza para identificar los dispositivos individuales (hosts) dentro de esa subred.

1. **Determinación de la Subred**: La máscara de subred es esencial para determinar a qué subred pertenece una dirección IP específica. Esto es crucial para el enrutamiento de paquetes dentro y entre redes, ya que los enrutadores utilizan la máscara de subred para dirigir el tráfico a la subred correcta.

2. **Comunicación y Enrutamiento**: Los dispositivos dentro de una red utilizan la máscara de subred para determinar si otros dispositivos están en la misma subred o en una externa. Esto afecta cómo se envían los paquetes de datos: directamente entre dispositivos en la misma subred o a través de un enrutador para alcanzar dispositivos en subredes diferentes.

3. **Evitar Conflictos de Direcciones**: Una máscara de subred incorrecta puede llevar a conflictos de direcciones y problemas de enrutamiento, donde los dispositivos podrían no ser capaces de comunicarse correctamente dentro de la red.

4. **Planificación de la Red**: En la fase de diseño de una red, la máscara de subred ayuda a planificar cuántos hosts pueden ser soportados en cada subred y cómo se deben distribuir las direcciones IP para maximizar la eficiencia.

En resumen, las subredes y las máscaras de subred son componentes esenciales del diseño y operación de redes modernas. Permiten una gestión más eficiente del espacio de direcciones IP, mejoran la seguridad y el rendimiento de la red, y son clave para el enrutamiento correcto y efectivo del tráfico de datos.

---

### Ejercicio 5

El campo "Protocol" en la cabecera IP desempeña una función crucial al definir el protocolo de la capa de transporte que se utilizará para los datos encapsulados en el paquete IP. Este campo es esencial para asegurar que el paquete de datos se maneje correctamente en su llegada al destino, orientando al sistema sobre cómo interpretar los datos contenidos en el segmento de datos del paquete.

#### ¿Cuál es la finalidad del campo Protocol en la cabecera IP?

**Identificación del Protocolo de la Capa de Transporte:** El campo "Protocol" en la cabecera IP especifica el protocolo de la siguiente capa (capa de transporte) que se ha usado para segmentar los datos y que debe ser utilizado para reensamblar y procesar estos datos en el destino. Este campo es un número que identifica de manera única cada protocolo de la capa de transporte. Por ejemplo, el número 6 representa TCP (Transmission Control Protocol), mientras que el número 17 representa UDP (User Datagram Protocol).

#### ¿A qué campos de la capa de transporte se asemeja en su funcionalidad?

En términos de funcionalidad, el campo "Protocol" en la cabecera IP es similar a los campos como:

1. **Puertos de Origen y Destino en TCP/UDP:** Aunque el campo "Protocol" no realiza la misma función que los puertos, que se utilizan para dirigir el tráfico a la aplicación correcta dentro de un host, ambos tipos de campos sirven como mecanismos de direccionamiento a niveles diferentes. Los puertos dirigen el tráfico al programa adecuado dentro del host, mientras que el campo "Protocol" indica cómo debe interpretarse el conjunto de datos a nivel de sistema.

2. **Campo 'Next Header' en IPv6:** En IPv6, el campo "Next Header" realiza una función similar al campo "Protocol" en IPv4, indicando el tipo del siguiente encabezado en el paquete. Esto puede ser un encabezado de extensión o un encabezado de capa superior.

El campo "Protocol" es, por lo tanto, vital para la interoperabilidad entre diferentes capas de red y es fundamental para el enrutamiento y procesamiento adecuados de los datos en redes de computadoras. Su rol asegura que los datos sean entregados y procesados por el protocolo correcto en el destino, facilitando así una comunicación efectiva entre dispositivos en una red.

---

## Divisiónde subredes

### Ejercicio 6

Para cada una de las siguientes direcciones IP determine
- 172.16.58.223/26
- 163.10.5.49/27
- 128.10.1.0/23
- 10.1.0.0/24
- 8.40.11.179/12

#### A) ¿De qué clase de red es la dirección dada (Clase A, B o C)?

`Paso 1: Observar el Primer Octeto`
Para cada dirección IP, observa el primer número antes del primer punto. Por ejemplo, para la dirección 172.16.58.223, el primer octeto es 172.

`Paso 2: Comparar con los Rangos de Clases`
Las clases de direcciones IP se definen por rangos específicos en el primer octeto:
- **Clase A**: 1-126 (127 está reservado para loopback)
- **Clase B**: 128-191
- **Clase C**: 192-223
- **Clase D** (multicast): 224-239 (no solicitado, pero para referencia)
- **Clase E** (uso experimental): 240-255 (no solicitado, pero para referencia)

`Paso 3: Determinar la Clase de cada Dirección`

Aplicando el rango del primer octeto:

1. **172.16.58.223**
   - Primer octeto: 172
   - **Clase B**: Ya que 172 está entre 128 y 191.

2. **163.10.5.49**
   - Primer octeto: 163
   - **Clase B**: Ya que 163 también está entre 128 y 191.

3. **128.10.1.0**
   - Primer octeto: 128
   - **Clase B**: Es el límite inferior de la Clase B.

4. **10.1.0.0**
   - Primer octeto: 10
   - **Clase A**: Ya que 10 está entre 1 y 126.

5. **8.40.11.179**
   - Primer octeto: 8
   - **Clase A**: Ya que 8 está dentro del rango de la Clase A.


#### b) ¿Cuál es la dirección de subred?

#### 172.16.58.223/26

`Convertir la máscara de subred de notación CIDR a formato decimal`

Para determinar la dirección de subred de una dirección IP dada con su máscara de subred (en notación CIDR), se realiza un procedimiento lógico llamado "AND" entre la dirección IP y la máscara de subred. 

`Paso 1.1 Determinar la cantidad de bits para la red`

Tomemos por ejemplo `/26`. Esto significa que los primeros 26 bits de la dirección IP son para la red.

`Paso 1.2 Convierte esos Bits a Binario`

En binario, los primeros `26` bits se establecerán en `'1'` y el resto en `'0'`. Así, para `/26`:

```
11111111.11111111.11111111.11000000
```

Esto se lee como los primeros 26 bits son 1s y los últimos 6 bits son 0s.

`Paso 1.3 Convierte el Binario a Decimal`

Cada segmento de 8 bits (octeto) se convierte a su equivalente decimal:

- `11111111` en binario es `255` en decimal.
- `11000000` en binario es `192` en decimal.

Así, la máscara de subred `/26` en formato decimal es `255.255.255.192`.

`Aplicar la operación AND lógica entre la dirección IP y la máscara de subred`

La operación AND compara cada bit de la dirección IP con el bit correspondiente en la máscara de subred. Si ambos bits son 1, el resultado es 1; de lo contrario, es 0.

Ejemplo para calcular la dirección de subred: Tomemos la dirección `172.16.58.223/26`:

Dirección IP en binario, podes usar esta web para pasar de decimal a binario: [Decimal a Binario](https://masterplc.com/calculadora/convertir-decimal-a-binario/)

```
10101100.00010000.00111010.11011111
```

Máscara de subred /26 en binario: 

```
11111111.11111111.11111111.11000000
```

Aplicamos la operación and

```
10101100.00010000.00111010.11011111
AND
11111111.11111111.11111111.11000000
=
10101100.00010000.00111010.11000000 = 172.16.58.192
```

Dirección de subred = `172.16.58.192`

`Aplicamos lo mismo para todas las demas direcciones`

`a. 172.16.58.223/26`
- **Dirección de Subred**: 172.16.58.192

`b. 163.10.5.49/27`
- **Dirección de Subred**: 163.10.5.32
  - Máscara de subred /27 en binario: 11111111.11111111.11111111.11100000
  - Dirección IP y máscara AND resultan en 163.10.5.32

`c. 128.10.1.0/23`
- **Dirección de Subred**: 128.10.0.0
  - Máscara de subred /23 en binario: 11111111.11111111.11111110.00000000
  - Dirección IP y máscara AND resultan en 128.10.0.0

`d. 10.1.0.0/24`
- **Dirección de Subred**: 10.1.0.0
  - Máscara de subred /24 en binario: 11111111.11111111.11111111.00000000
  - Dirección IP y máscara AND resultan en 10.1.0.0

`e. 8.40.11.179/12`
- **Dirección de Subred**: 8.32.0.0
  - Máscara de subred /12 en binario: 11111111.11110000.00000000.00000000
  - Dirección IP y máscara AND resultan en 8.32.0.0

Este proceso te permite identificar la red a la que pertenece una dirección IP y es fundamental para el diseño de redes y el enrutamiento de paquetes en Internet y otras redes de comunicaciones.

#### c) ¿Cuál es la cantidad máxima de hosts que pueden estar en esa subred?

Para determinar la cantidad máxima de hosts que pueden estar en cada subred dada, primero necesitamos entender cómo se calcula a partir de la máscara de subred asociada con cada dirección. La máscara de subred define cuántos bits de la dirección IP están reservados para identificar la subred y cuántos bits están disponibles para identificar hosts dentro de esa subred.

`Paso 1: Determinar la Cantidad de Bits para Hosts`

La cantidad de bits disponibles para los hosts en cada subred es igual a 32 menos el número de bits de la máscara de subred (el número después del `/`). Por ejemplo, si tienes una máscara de `/26`, entonces 32 - 26 = 6 bits están disponibles para los hosts.

`Paso 2: Calcular la Cantidad Máxima de Hosts`

La fórmula para calcular la cantidad máxima de hosts en una subred es \(2^{n} - 2\), donde \(n\) es el número de bits disponibles para hosts. Se restan dos para excluir la dirección de la red misma y la dirección de broadcast.

`Aplicación del Cálculo para Cada Subred`

`172.16.58.223/26`
- **Bits para hosts:** \(32 - 26 = 6\)
- **Cantidad máxima de hosts:** \(2^6 - 2 = 64 - 2 = 62\)

`163.10.5.49/27`
- **Bits para hosts:** \(32 - 27 = 5\)
- **Cantidad máxima de hosts:** \(2^5 - 2 = 32 - 2 = 30\)

`128.10.1.0/23`
- **Bits para hosts:** \(32 - 23 = 9\)
- **Cantidad máxima de hosts:** \(2^9 - 2 = 512 - 2 = 510\)

`10.1.0.0/24`
- **Bits para hosts:** \(32 - 24 = 8\)
- **Cantidad máxima de hosts:** \(2^8 - 2 = 256 - 2 = 254\)

`8.40.11.179/12`
- **Bits para hosts:** \(32 - 12 = 20\)
- **Cantidad máxima de hosts:** \(2^{20} - 2 = 1,048,576 - 2 = 1,048,574\)


Cada subred tiene una capacidad máxima de hosts determinada por el número de bits disponibles para los hosts, que se calcula a partir de la máscara de subred en notación CIDR. Este cálculo es fundamental para el diseño de la red, asegurando que haya suficientes direcciones disponibles para todos los dispositivos previstos en cada segmento de la red sin desperdiciar espacio de direcciones IP.

#### d) ¿Cuál es la dirección de broadcast de esa subred?

Para calcular la dirección de broadcast de una subred, se sigue un proceso sistemático que implica determinar la máscara de subred en formato binario, aplicar operaciones lógicas sobre la dirección IP, y finalmente determinar la dirección de broadcast que es utilizada para enviar paquetes a todos los hosts dentro de esa subred específica.

`Paso 1: Convertir la Máscara de Subred a Formato Binario`

Primero, necesitamos convertir la notación CIDR de la máscara de subred a su forma binaria completa. Este es un ejemplo general de cómo hacerlo:

- **/26** se convierte en 255.255.255.192, que en binario es `11111111.11111111.11111111.11000000`.
- **/27**, **/23**, **/24**, **/12** se convierten de forma similar, rellenando con 1s hasta el bit especificado por el CIDR, y el resto son 0s.

`Paso 2: Determinar la Dirección de Red`

La dirección de red se obtiene haciendo un AND lógico entre la dirección IP y la máscara de subred. El resultado muestra qué parte de la dirección IP representa la red.

`Paso 3: Calcular la Dirección de Broadcast`

Para obtener la dirección de broadcast, se realiza una operación OR entre la dirección de red y el inverso de la máscara de subred (donde todos los bits de host son '1'):

- Invierte la máscara de subred (los bits que eran '0' se convierten en '1', y viceversa).
- Realiza una operación OR entre la dirección de red (resultado del Paso 2) y esta máscara invertida. Esto pondrá '1' en todos los bits de host, generando la dirección de broadcast.



`a. 172.16.58.223/26`
- **Dirección de Red:** 172.16.58.192 (calculado anteriormente).
- **Invertir la Máscara de Subred /26:** `00000000.00000000.00000000.00111111`
- **Dirección de Broadcast:** 172.16.58.255 (OR entre 172.16.58.192 y `00000000.00000000.00000000.00111111`).

`b. 163.10.5.49/27`
- **Dirección de Red:** 163.10.5.32 (calculado anteriormente).
- **Invertir la Máscara de Subred /27:** `00000000.00000000.00000000.00011111`
- **Dirección de Broadcast:** 163.10.5.63.

`c. 128.10.1.0/23`
- **Dirección de Red:** 128.10.0.0 (calculado anteriormente).
- **Invertir la Máscara de Subred /23:** `00000000.00000000.00000001.11111111`
- **Dirección de Broadcast:** 128.10.1.255.

`d. 10.1.0.0/24`
- **Dirección de Red:** 10.1.0.0.
- **Invertir la Máscara de Subred /24:** `00000000.00000000.00000000.11111111`
- **Dirección de Broadcast:** 10.1.0.255.

`e. 8.40.11.179/12`
- **Dirección de Red:** 8.32.0.0 (calculado anteriormente).
- **Invertir la Máscara de Subred /12:** `00001111.11110000.11111111.11111111`
- **Dirección de Broadcast:** 8.47.255.255.

Este método asegura que la dirección de broadcast calculada pueda ser utilizada para enviar mensajes a todos los dispositivos en la subred especificada, lo cual es crucial para ciertas operaciones de red, como la distribución de información a todos los nodos de una vez.

#### e. ¿Cuál es el rango de direcciones IP válidas dentro de la subred?

Para calcular el rango de direcciones IP válidas dentro de cada subred especificada, primero debemos determinar las direcciones de red y de broadcast que ya calculamos en preguntas anteriores. Usando estas direcciones, podemos establecer el rango de direcciones IP que pueden ser asignadas a dispositivos dentro de la subred.

`Paso 1: Identificar la Dirección de Red y de Broadcast`

Como ya hemos calculado anteriormente, la dirección de red es el primer número IP en la subred y la dirección de broadcast es el último. La dirección de red se usa para identificar la subred y no se asigna a ningún dispositivo, mientras que la dirección de broadcast se usa para comunicación a todos los dispositivos de la subred y tampoco se asigna a dispositivos individuales.

`Paso 2: Calcular el Rango de Direcciones IP Válidas`

El rango de direcciones IP válidas para los dispositivos es todas las direcciones entre la dirección de red y la de broadcast, excluyendo estas dos direcciones.

`a. 172.16.58.223/26`

- **Dirección de Red:** 172.16.58.192
- **Dirección de Broadcast:** 172.16.58.255
- **Rango de Direcciones Válidas:** 172.16.58.193 a 172.16.58.254

`b. 163.10.5.49/27`

- **Dirección de Red:** 163.10.5.32
- **Dirección de Broadcast:** 163.10.5.63
- **Rango de Direcciones Válidas:** 163.10.5.33 a 163.10.5.62

`c. 128.10.1.0/23`

- **Dirección de Red:** 128.10.0.0
- **Dirección de Broadcast:** 128.10.1.255
- **Rango de Direcciones Válidas:** 128.10.0.1 a 128.10.1.254

`d. 10.1.0.0/24`

- **Dirección de Red:** 10.1.0.0
- **Dirección de Broadcast:** 10.1.0.255
- **Rango de Direcciones Válidas:** 10.1.0.1 a 10.1.0.254

`e. 8.40.11.179/12`

- **Dirección de Red:** 8.32.0.0
- **Dirección de Broadcast:** 8.47.255.255
- **Rango de Direcciones Válidas:** 8.32.0.1 a 8.47.255.254

`Importancia de Conocer el Rango de Direcciones Válidas`

Este rango es crítico para los administradores de redes para planificar adecuadamente la asignación de direcciones IP dentro de la red, evitar conflictos de direcciones, y asegurar que todos los dispositivos tengan conectividad adecuada. Además, ayuda a aplicar políticas de seguridad y configurar servicios de red como DHCP de manera efectiva.


---

### Ejercicio 7
### Ejercicio 8
### Ejercicio 9
### Ejercicio 10
### Ejercicio 11
### Ejercicio 12
### Ejercicio 13
### Ejercicio 14
### Ejercicio 15
### Ejercicio 16
### Ejercicio 17
### Ejercicio 18
### Ejercicio 19
### Ejercicio 20
### Ejercicio 21