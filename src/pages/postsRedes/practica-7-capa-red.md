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

Su organización cuenta con la dirección de red 128.50.10.0. Indique:

#### a. ¿Es una dirección de red o de host? PREGUNTAR ACA

"128.50.10.0" podría ser técnicamente una dirección de host bajo ciertas máscaras de subred específicas, generalmente se considera una dirección de red bajo el supuesto común de una máscara /24. Sin embargo, es crucial contar con la información correcta sobre la configuración de la red para hacer esta determinación con precisión.



#### b. Clase a la que pertenece y máscara de clase.

Para determinar a qué clase pertenece la dirección IP 128.50.10.0 y cuál es su máscara de clase estándar, seguimos estos pasos:

`Paso 1: Observar el Primer Octeto`

La clasificación de la clase de una dirección IP se basa en el primer octeto (el primer conjunto de números antes del primer punto). En este caso, el primer octeto es 128.

`Paso 2: Determinar la Clase Basada en el Primer Octeto`

Las direcciones IP se clasifican en cinco clases principales (A, B, C, D, E) según los primeros bits del primer octeto:

- **Clase A**: Las direcciones comienzan con un bit inicial de 0. Esto significa que las direcciones Clase A van desde 0.0.0.0 hasta 127.255.255.255 (aunque la dirección 127.x.x.x se reserva para loopback, y la dirección 0.x.x.x no se utiliza).
- **Clase B**: Las direcciones comienzan con bits iniciales de 10. El rango de direcciones Clase B va desde 128.0.0.0 hasta 191.255.255.255.
- **Clase C**: Las direcciones comienzan con bits iniciales de 110. El rango de direcciones Clase C va desde 192.0.0.0 hasta 223.255.255.255.
- **Clase D** (Multicast): Comienza con bits iniciales de 1110, cubriendo direcciones desde 224.0.0.0 hasta 239.255.255.255.
- **Clase E** (Experimental): Comienza con bits iniciales de 1111, extendiéndose desde 240.0.0.0 hasta 255.255.255.255.

`Paso 3: Aplicar la Información al Caso Presentado`

Dado que el primer octeto es 128, la dirección IP 128.50.10.0 cae dentro del rango de la Clase B.

`Paso 4: Máscara de Clase Estándar para la Clase B`

Para las direcciones de Clase B, la máscara de subred estándar es 255.255.0.0. Esto significa que los dos primeros octetos (255.255) identifican la red, mientras que los dos últimos octetos (0.0) son utilizados para los hosts dentro de esa red.

`Resumen`

La dirección IP `128.50.10.0` es una dirección de Clase B y su máscara de subred de clase estándar es `255.255.0.0`. Esto es fundamental para entender cómo se dividen las redes y cómo se asignan direcciones dentro de esas redes, especialmente para la planificación y la gestión de redes a gran escala.


| **Clase** | **Rango de Direcciones IP** | **Máscara de Subred por Defecto** | **Uso Típico**                |
|-----------|-----------------------------|----------------------------------|-------------------------------|
| A         | 1.0.0.0 a 126.255.255.255   | 255.0.0.0 (/8)                  | Redes muy grandes            |
| B         | 128.0.0.0 a 191.255.255.255 | 255.255.0.0 (/16)               | Redes medianas               |
| C         | 192.0.0.0 a 223.255.255.255 | 255.255.255.0 (/24)             | Redes pequeñas               |
| D         | 224.0.0.0 a 239.255.255.255 | No aplicable                    | Multicasting                 |
| E         | 240.0.0.0 a 255.255.255.255 | No aplicable                    | Uso experimental y futuro    |



#### c. Cantidad de hosts posibles.

Para determinar la cantidad de hosts posibles para la dirección de red 128.50.10.0, necesitamos conocer la máscara de subred asociada con esta dirección. Sin embargo, si consideramos que no se especifica una máscara en la consulta y que estamos tratando con una dirección que parece ser de Clase B (basada en su primer octeto, que está entre 128 y 191), podemos asumir la máscara de subred estándar de Clase B, que es 255.255.0.0 o /16. 

> Paso a Paso para Calcular la Cantidad de Hosts Posibles

`Paso 1: Identificar la Máscara de Subred`

Para una dirección de red de Clase B sin especificaciones adicionales, la máscara de subred es típicamente /16. Esto significa que los primeros 16 bits de la dirección IP se utilizan para identificar la red, y los últimos 16 bits son para los hosts dentro de esa red.

`Paso 2: Calcular los Bits de Host`

Con una máscara de subred de /16, hay 16 bits disponibles para los hosts. La cantidad de combinaciones posibles que se pueden hacer con 16 bits se calcula como 2^16.

`Paso 3: Ajustar por Direcciones Reservadas`

De las combinaciones posibles, dos direcciones están reservadas y no se pueden asignar a hosts individuales:
- La dirección de red (donde todos los bits de host son 0, es decir, 128.50.10.0 en este caso).
- La dirección de broadcast (donde todos los bits de host son 1, es decir, 128.50.255.255 para una máscara /16).

`Paso 4: Calcular el Número Total de Hosts Posibles`

Restamos dos del total calculado en el paso 2 para excluir estas direcciones reservadas:

\[ \text{Total de hosts posibles} = 2^{16} - 2 = 65536 - 2 = 65534 \]

`Conclusión`
Para la dirección de red 128.50.10.0 con una máscara de subred de /16, la cantidad máxima de hosts que se pueden configurar en esta red es 65,534. Este cálculo asume que estamos utilizando la configuración de subred estándar para una dirección de Clase B y que no hay segmentaciones adicionales (subredes más pequeñas) dentro de esta dirección.

#### d. Se necesitan crear, al menos, 513 subredes. Indique:

#### i. Máscara necesaria.

Para crear al menos 513 subredes a partir de una dirección de red 128.50.10.0, necesitas determinar cuántos bits adicionales de subred se requieren para lograr ese número de subredes. Aquí está el paso a paso para calcular la máscara de subred necesaria:

`Paso 1: Comprender la Necesidad`

Necesitas al menos 513 subredes, lo que significa que debes calcular cuántos bits son necesarios para representar al menos esa cantidad de subredes únicas.

`Paso 2: Calcular los Bits Necesarios para las Subredes`

Para encontrar el número de bits necesarios, debes calcular el menor \( n \) tal que \( 2^n \) sea mayor o igual a 513. 

- \( 2^8 = 256 \) no es suficiente.
- \( 2^9 = 512 \) sigue siendo insuficiente.
- \( 2^{10} = 1024 \) cumple con el requisito.

Por lo tanto, necesitas 10 bits adicionales para la subred.

`Paso 3: Determinar la Máscara de Subred Original`

Dado que 128.50.10.0 parece ser una dirección de Clase B (basado en el primer octeto, que cae dentro del rango de 128-191), la máscara de subred predeterminada para una red de Clase B es 255.255.0.0, lo que equivale a una máscara /16.

`Paso 4: Calcular la Nueva Máscara de Subred`

Si ya tienes una máscara /16 y necesitas 10 bits adicionales para subredes, sumas esos 10 bits a los 16 existentes:

- Máscara original: /16
- Bits adicionales: +10
- Nueva máscara: /26

`Paso 5: Convertir la Nueva Máscara a Formato Decimal`

Una máscara /26 significa que los primeros 26 bits de la dirección IP son para la red y el resto para los hosts. Esto se divide como sigue:
- Los primeros 26 bits: 11111111.11111111.11111111.11000000
- En formato decimal: 255.255.255.192

`Conclusión`

La máscara de subred necesaria para crear al menos 513 subredes desde la dirección 128.50.10.0 es **255.255.255.192**, o **/26**. Esto te permite tener suficientes bits para crear las subredes requeridas y proporcionar una cantidad adecuada de direcciones IP para hosts dentro de cada subred.

#### ii. Cantidad de redes asignables.

Para determinar la cantidad de redes asignables cuando se crean al menos 513 subredes a partir de la dirección de red 128.50.10.0 con una máscara de subred /26 (como se calculó anteriormente), debemos comprender cómo afecta esta configuración de subredes al espacio de direcciones disponibles.

`Paso 1: Confirmar la Configuración de la Máscara de Subred`

Dado que decidimos usar una máscara /26 para satisfacer la necesidad de al menos 513 subredes:
- La máscara /26 implica que se utilizan 26 bits para la red, dejando 6 bits para los hosts dentro de cada subred.

`Paso 2: Calcular el Número de Redes Asignables`

Usando los 10 bits adicionales para la subred (pasando de una máscara /16 original de una dirección de Clase B a una /26), se calcula el número de subredes posibles:

- \(2^{10} = 1024\)

Estos 10 bits adicionales permiten la creación de 1024 subredes diferentes bajo la misma red principal. Cada una de estas subredes puede ser considerada como una "red asignable".

`Paso 3: Confirmar la Cantidad de Redes Asignables`

Dado que cada uno de estos nuevos bits de subred puede ser configurado independientemente como 0 o 1, y con 10 bits, tenemos \(2^{10}\) combinaciones posibles, resultando en **1024 redes asignables** bajo la configuración /26.

`Conclusión`

Al subdividir la red original 128.50.10.0/16 en subredes más pequeñas con una máscara /26, podemos asignar hasta 1024 redes diferentes. Esto significa que la organización puede tener 1024 subredes distintas, cada una con su propio rango de direcciones IP para hosts, satisfaciendo ampliamente la necesidad inicial de crear al menos 513 subredes.

Este proceso es crítico para la planificación de la red, asegurando que haya suficiente flexibilidad y capacidad para el crecimiento y la organización de la red conforme a las necesidades futuras.

#### iii. Cantidad de hosts por subred.

Para calcular la cantidad de hosts posibles por subred después de segmentar una dirección de red inicial 128.50.10.0 en 513 subredes o más con una máscara de subred /26, se sigue este proceso paso a paso:

`Paso 1: Identificar la Máscara de Subred Utilizada`

Para crear 513 subredes, se determinó previamente que la máscara de subred necesaria es /26. Esto significa que 26 bits de la dirección IP se destinan a la red y los restantes bits se utilizan para identificar hosts dentro de cada subred.

`Paso 2: Calcular los Bits Disponibles para Hosts`

- Con una máscara de subred /26, tenemos un total de 32 bits en la dirección IP.
- 26 bits son para la red, lo que deja \(32 - 26 = 6\) bits para los hosts.

`Paso 3: Calcular la Cantidad de Hosts por Subred`

Los 6 bits disponibles para los hosts teóricamente permiten \(2^6 = 64\) combinaciones posibles. Sin embargo, dentro de cada subred, dos direcciones están reservadas y no pueden ser asignadas a hosts:
- La **dirección de red**, donde todos los bits de host son 0.
- La **dirección de broadcast**, donde todos los bits de host son 1.

`Paso 4: Restar las Direcciones Reservadas`

Para obtener el número de hosts utilizables en cada subred, debemos restar estas dos direcciones reservadas del total calculado:

- \(2^6 - 2 = 64 - 2 = 62\)

`Conclusión`

Cada subred de la red 128.50.10.0 con una máscara /26 puede soportar **62 hosts utilizables**. Este cálculo es crucial para la planificación de la asignación de direcciones IP dentro de la red, asegurando que cada subred tenga suficiente capacidad para acomodar los dispositivos necesarios sin exceder el límite disponible.

#### iv. Dirección de la subred 710.

Para calcular la dirección de la subred 710, dado que se han segmentado las subredes utilizando una máscara de /26 a partir de la dirección de red 128.50.10.0, seguimos los siguientes pasos:

`Paso 1: Entender la Estructura de la Subred`

Con una máscara /26, cada subred utiliza 26 bits de la dirección IP. Esto significa que cada subred tiene \(2^{32-26} = 64\) direcciones IP, incluyendo la dirección de red y la dirección de broadcast.

`Paso 2: Calcular el Rango de Direcciones para Cada Subred`

Cada subred de /26 cubre 64 direcciones IP. La dirección de la subred se determina sumando 64 direcciones al inicio de la subred anterior para obtener el inicio de la nueva subred.

`Paso 3: Calcular la Dirección de la Subred 710`

Para encontrar la dirección de la subred 710, primero determinamos cuál es la dirección de la subred 1 bajo esta configuración y luego procedemos a calcular la dirección de la subred 710 sumando adecuadamente.

- **Inicio de la subred 1:** La primera subred comienza en 128.50.10.0.
- **Incremento por Subred:** Cada subred abarca 64 direcciones, entonces la dirección de inicio de cada nueva subred se incrementa en 64.
- **Calculando el inicio de la subred 710:**
  - Subred 1 comienza en 128.50.10.0.
  - Subred 710 comienza en 128.50.10.0 + 709 x 64 direcciones.

`Paso 4: Convertir el Incremento a Direcciones IP`

Cada incremento de 64 direcciones avanza 64 posiciones en el espacio de direcciones IP. Calculamos cuántas veces pasa de 255 para ajustar los octetos adecuadamente.

- `709 x 64` direcciones es igual a 45,376 direcciones IP.
- Convierte 45,376 en notación de dirección IP:
  - Dividimos 45,376 por 256 (número de direcciones por octeto) para calcular el avance en los octetos.
  - 45376 dividido por 256 es aproximadamente 177, con un remanente que determinará el nuevo último octeto.

`Paso 5: Determinar la Dirección Exacta`

- Octeto base: 10.0
- Avance de 177 octetos desde el inicio de la red en el tercer octeto (10 + 177 = 187).
- Calcular el remanente: 45376 - 177 x 256 = 64 (que corresponde al último octeto del nuevo bloque).
  
**Dirección de la Subred 710:** 128.50.187.64

`Conclusión`

La dirección de la subred 710 es 128.50.187.64 bajo la máscara /26, partiendo de la dirección base 128.50.10.0. Este proceso implica un cálculo cuidadoso para garantizar la precisión en la asignación de direcciones dentro de la red extendida.


#### v. Dirección de broadcast de la subred 710

Para calcular la dirección de broadcast de la subred 710 a partir de la dirección de red 128.50.10.0 con una máscara de /26, sigue estos pasos detallados:

`Paso 1: Identificar la Dirección de la Subred`

Primero, debemos confirmar la dirección de la subred 710. Como se calculó anteriormente, esta subred comienza en 128.50.187.64.

`Paso 2: Entender la Máscara de Subred /26`
Una máscara /26 significa que los primeros 26 bits son para la red, dejando los últimos 6 bits para los hosts. Esto implica que cada subred tiene \(2^6 = 64\) direcciones IP, desde la dirección de red hasta la dirección de broadcast.

`Paso 3: Calcular la Dirección de Broadcast`

Para encontrar la dirección de broadcast para una subred dada, tomamos la dirección de inicio de la subred y sumamos 63 (ya que el rango incluye la dirección de red y la de broadcast):

- **Dirección de inicio de la subred:** 128.50.187.64
- **Dirección de broadcast:** 128.50.187.64 + 63 = 128.50.187.127

`Paso 4: Verificación`

La dirección de broadcast es siempre la última dirección en el rango de la subred. Para una subred que comienza en 128.50.187.64 con una máscara /26, el cálculo es directo:
- La dirección de broadcast, 128.50.187.127, es calculada sumando 63 a la dirección de inicio, porque el rango completo de la subred incluye 64 direcciones (de 128.50.187.64 a 128.50.187.127).

`Conclusión`

La dirección de broadcast de la subred 710 es **128.50.187.127**. Esta dirección es utilizada para comunicaciones que deben ser recibidas por todos los dispositivos dentro de esta subred específica.

---

### Ejercicio 8

Si usted estuviese a cargo de la administración del bloque IP 195.200.45.0/24

#### a. ¿Qué máscara utilizaría si necesita definir al menos 9 subredes?

Para administrar el bloque IP 195.200.45.0/24 y dividirlo en al menos 9 subredes, debes calcular la máscara de subred adecuada que te permita tener suficientes subredes y, al mismo tiempo, un número adecuado de hosts por subred. Aquí te explico el proceso paso a paso:

`Paso 1: Entender la Máscara Original`

La máscara original para tu bloque IP es /24, lo que significa que todos los bits hasta el octeto final están reservados para la red, dejando el último octeto (8 bits) para los hosts. En la práctica, esto te permite tener 256 direcciones en total.

`Paso 2: Calcular la Cantidad de Bits Necesarios para las Subredes`

Para dividir la red en al menos 9 subredes, necesitas determinar cuántos bits adicionales deberás "tomar prestados" del espacio de host para crear estas subredes.

- **Cálculo de Bits Necesarios:** Necesitas encontrar el menor \( n \) tal que \( 2^n \) cubra el número de subredes deseado. Para 9 subredes, \( 2^3 = 8 \) no es suficiente, mientras que \( 2^4 = 16 \) es suficiente.

`Paso 3: Determinar la Nueva Máscara de Subred`

Si tomas prestados 4 bits adicionales del espacio de host, estarás cambiando la máscara de subred de /24 a /28:

- **Nueva Máscara de Subred:** /28
- Esto convierte la máscara de subred de 255.255.255.0 (para /24) a 255.255.255.240 (para /28).

`Paso 4: Verificar la Cantidad de Subredes y Hosts por Subred`

Con una máscara /28, cada subred tendrá \( 2^4 = 16 \) direcciones en total, pero solo 14 de ellas serán utilizables para hosts, ya que la primera dirección es la dirección de red y la última es la dirección de broadcast.

- **Subredes Posibles con /28:** Tendrás 16 subredes posibles, que es suficiente para satisfacer la necesidad de al menos 9 subredes.
- **Hosts por Subred:** Cada subred puede tener hasta 14 dispositivos conectados (excluyendo la dirección de red y broadcast).

`Conclusión`

Para definir al menos 9 subredes en un bloque 195.200.45.0/24, deberías utilizar una máscara de subred /28. Esto te proporciona 16 subredes posibles, cada una con capacidad para 14 hosts, lo cual es adecuado para una gestión eficiente de la red y maximiza el uso de tu espacio de direcciones IP.


#### b. Indique la dirección de subred de las primeras 9 subredes

Para calcular las direcciones de subred de las primeras 9 subredes en el bloque IP 195.200.45.0/24 utilizando una máscara de subred /28, como hemos decidido en la pregunta anterior, sigue estos pasos detallados:

`Paso 1: Comprender la Estructura de la Subred`

Con una máscara /28, cada subred utiliza 28 bits de la dirección IP. Esto significa que cada subred tiene \(2^{32-28} = 16\) direcciones IP, incluyendo la dirección de red y la dirección de broadcast.

`Paso 2: Calcular el Rango de Direcciones para Cada Subred`

Cada subred de /28 cubre 16 direcciones IP. La dirección de la subred es siempre el primer número en ese bloque, y la dirección de broadcast es el último número.

`Paso 3: Listar las Direcciones de Subred para las Primeras 9 Subredes`

- **Dirección Base para Subredes:** 195.200.45.0
- **Incremento por Subred:** 16 direcciones

Aquí están las direcciones de las primeras 9 subredes:

1. **Subred 1:** 195.200.45.0
   - Rango: 195.200.45.0 - 195.200.45.15
   - Dirección de subred: 195.200.45.0

2. **Subred 2:** 195.200.45.16
   - Rango: 195.200.45.16 - 195.200.45.31
   - Dirección de subred: 195.200.45.16

3. **Subred 3:** 195.200.45.32
   - Rango: 195.200.45.32 - 195.200.45.47
   - Dirección de subred: 195.200.45.32

4. **Subred 4:** 195.200.45.48
   - Rango: 195.200.45.48 - 195.200.45.63
   - Dirección de subred: 195.200.45.48

5. **Subred 5:** 195.200.45.64
   - Rango: 195.200.45.64 - 195.200.45.79
   - Dirección de subred: 195.200.45.64

6. **Subred 6:** 195.200.45.80
   - Rango: 195.200.45.80 - 195.200.45.95
   - Dirección de subred: 195.200.45.80

7. **Subred 7:** 195.200.45.96
   - Rango: 195.200.45.96 - 195.200.45.111
   - Dirección de subred: 195.200.45.96

8. **Subred 8:** 195.200.45.112
   - Rango: 195.200.45.112 - 195.200.45.127
   - Dirección de subred: 195.200.45.112

9. **Subred 9:** 195.200.45.128
   - Rango: 195.200.45.128 - 195.200.45.143
   - Dirección de subred: 195.200.45.128

`Paso 4: Verificación`
Cada dirección de subred es el primer número en un bloque de 16 direcciones, y el proceso sigue secuencialmente con un aumento constante de 16. Esto asegura que cada subred está claramente definida y no se superpone con otras subredes.

Este cálculo detallado proporciona una base clara para configurar y administrar las subredes dentro de la red principal, garantizando que cada segmento esté correctamente asignado sin conflictos de dirección.

#### c. Seleccione una e indique dirección de broadcast y rango de direcciones asignables en esa subred

Para seleccionar una subred del bloque IP 195.200.45.0/24 con una máscara /28 y determinar la dirección de broadcast y el rango de direcciones asignables, podemos seguir el ejemplo de la subred 4, que se ha calculado anteriormente con dirección de subred 195.200.45.48.

`Paso 1: Confirmar la Dirección de Subred`

Basado en la subdivisión previa, sabemos que:
- **Dirección de Subred 4:** 195.200.45.48

`Paso 2: Calcular la Dirección de Broadcast`

Con una máscara /28, cada subred tiene 16 direcciones IP. La dirección de broadcast es siempre la última dirección en este rango.

- **Inicio de la Subred:** 195.200.45.48
- **Fin de la Subred:** 195.200.45.48 + 15 = 195.200.45.63

La última dirección (195.200.45.63) será la dirección de broadcast para esta subred.

`Dirección de Broadcast:`
- **195.200.45.63**

`Paso 3: Determinar el Rango de Direcciones Asignables`
El rango de direcciones asignables es entre la dirección de subred y la dirección de broadcast, excluyendo estas dos direcciones:

- **Primera Dirección Asignable:** 195.200.45.48 + 1 = 195.200.45.49
- **Última Dirección Asignable:** 195.200.45.63 - 1 = 195.200.45.62

`Rango de Direcciones Asignables:`
- Desde **195.200.45.49** hasta **195.200.45.62**

`Paso 4: Resumen del Rango y la Broadcast de la Subred`
Para la subred 195.200.45.48/28:
- **Dirección de Broadcast:** 195.200.45.63
- **Rango de Direcciones Asignables:** 195.200.45.49 a 195.200.45.62

Este rango de direcciones asignables incluye 14 direcciones IP utilizables para dispositivos dentro de la subred. Estas direcciones son adecuadas para asignar a servidores, estaciones de trabajo, impresoras, u otros dispositivos de red que requieran conectividad IP dentro de esta subred específica.

---

### Ejercicio 9

Dado el siguiente gráfico:

<table><tr>
<td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/44cb45b8-eab7-45c0-bb71-64c4a4359586)

</td><td>

**Router B:**
- **eth2**: 191.26.145.20/24 (Conexión a Internet)
- **eth0**: 172.26.22.1/30 (Conexión a Router A)
- **eth1**: 172.17.10.14/28 (Conexión a Router C)

**Router A:**
- **eth1**: 172.26.22.3/30 (Conexión a Router B)
- **eth0**: 192.168.5.1/24 (Red local)

**Router C:**
- **eth1**: 172.17.10.17/28 (Conexión a Router B)
- **eth0**: 10.0.10.1/24 (Red local)
</td>
</tr>
</table>

#### a. Verifique si es correcta la asignación de direcciones IP y, en caso de no serlo, modifique la misma para que lo sea.

Para verificar y explicar las direcciones y subredes en el gráfico proporcionado, vamos a analizar cada conexión y cada dirección de subred en detalle:

`Conexión Router B (191.26.145.20) al Internet`
- **Dirección de Router B:** 191.26.145.20
- **Máscara de subred:** /24
- **Rango de direcciones en esta subred:** 191.26.145.0 - 191.26.145.255
- **Dirección de broadcast:** 191.26.145.255
- **Comentarios:** La dirección es válida y la subred parece configurada correctamente para conectar al Internet.

`Conexión entre Router B y Router A`
- **Dirección de Router B (eth0):** 172.26.22.1
- **Dirección de Router A (eth1):** 172.26.22.3
- **Máscara de subred:** /30
- **Rango de direcciones en esta subred:** 172.26.22.0 - 172.26.22.3
  - Dirección de red: 172.26.22.0
  - Dirección de broadcast: 172.26.22.3
- **Comentarios:** La configuración es incorrecta en términos de la dirección de broadcast. En una subred /30, 172.26.22.3 es la dirección de broadcast, lo que significa que no debería asignarse a un dispositivo. El Router A debería tener la dirección 172.26.22.2.

`Conexión entre Router B y Router C`
- **Dirección de Router B (eth1):** 172.17.10.14
- **Dirección de Router C (eth1):** 172.17.10.17
- **Máscara de subred:** /28
- **Rango de direcciones en esta subred:** 172.17.10.0 - 172.17.10.15
  - Dirección de red: 172.17.10.0
  - Dirección de broadcast: 172.17.10.15
- **Comentarios:** La configuración es incorrecta. La dirección de Router C, 172.17.10.17, está fuera del rango de direcciones de la subred. Debería estar dentro del rango 172.17.10.1 - 172.17.10.14.

`Red Interna de Router A`
- **Dirección de Router A (eth0):** 192.168.5.1
- **Máscara de subred:** /24
- **Rango de direcciones en esta subred:** 192.168.5.0 - 192.168.5.255
  - Dirección de red: 192.168.5.0
  - Dirección de broadcast: 192.168.5.255
- **Comentarios:** Esta dirección está bien configurada para una red local.

`Red Interna de Router C`

- **Dirección de Router C (eth0):** 10.0.10.1
- **Máscara de subred:** /24
- **Rango de direcciones en esta subred:** 10.0.10.0 - 10.0.10.255
  - Dirección de red: 10.0.10.0
  - Dirección de broadcast: 10.0.10.255
- **Comentarios:** Esta dirección está bien configurada para una red local.

`Correcciones Necesarias`
1. **Router A:** Cambiar la dirección de 172.26.22.3 a 172.26.22.2 para la conexión con Router B.
2. **Router C:** Ajustar la dirección dentro del rango de la subred 172.17.10.0/28, posiblemente a 172.17.10.2 o cualquier dirección entre 172.17.10.1 y 172.17.10.14.

Estas correcciones asegurarán que todas las direcciones y subredes estén configuradas adecuadamente y sin conflictos en la red.

#### b. ¿Cuántos bits se tomaron para hacer subredes en la red 10.0.10.0/24? ¿Cuántas subredes se podrían generar?

Como es una direccion IP de clase A, podemos decir que se tomaron 16 bits para hacer subredes. En total se pueden generar 2^16 = 65536 subredes.

#### c. Para cada una de las redes utilizadas indique si son públicas o privadas.

<details><summary>Diferenciar una ip publica de una privada</summary>

Para diferenciar entre redes públicas y privadas, es importante comprender cómo se distribuyen y gestionan las direcciones IP a nivel global y local. Las direcciones IP son asignadas por la Internet Assigned Numbers Authority (IANA) y se clasifican en dos categorías principales: públicas y privadas. Aquí te explico cómo identificar cada una de estas y cuál es su propósito:

### Direcciones IP Públicas

1. **Definición y Uso**:
   - **Direcciones IP públicas** son aquellas que son únicas en todo el Internet. No se repiten y son la forma en que un dispositivo puede ser identificado de manera única en Internet. Estas direcciones son asignadas por proveedores de servicios de internet y otras entidades registradas.
   - Son necesarias para los dispositivos que necesitan comunicarse directamente con Internet, como los servidores web, los correos electrónicos y los routers de borde de las redes corporativas o residenciales.

2. **Acceso**:
   - Cualquier dispositivo con una dirección IP pública es potencialmente accesible desde cualquier lugar del mundo a través de Internet, sujeto a las políticas de firewall y seguridad.

3. **Ejemplos de Rangos No Privados**:
   - Cualquier dirección IP que no caiga dentro de los rangos específicos reservados para uso privado (ver más abajo) se considera pública.

### Direcciones IP Privadas

1. **Definición y Uso**:
   - **Direcciones IP privadas** son aquellas que se utilizan dentro de redes locales (LAN) y no son ruteables en Internet. Esto significa que estas direcciones no pueden ser usadas directamente para comunicarse con dispositivos fuera de la red local.
   - Se usan para comunicaciones dentro de una red doméstica, empresarial, o entre dispositivos en redes internas sin exponer directamente esos dispositivos a Internet.

2. **Acceso**:
   - Los dispositivos con direcciones IP privadas requieren traducción de direcciones de red (NAT) para conectarse a Internet a través de una dirección pública, usualmente realizada por un router.

3. **Rangos Reservados**:
   - Las direcciones IP privadas están definidas específicamente en los siguientes rangos por IANA para evitar conflictos con direcciones asignadas globalmente:
     - **10.0.0.0 a 10.255.255.255 (10/8 prefix)**
     - **172.16.0.0 a 172.31.255.255 (172.16/12 prefix)**
     - **192.168.0.0 a 192.168.255.255 (192.168/16 prefix)**
   - Además, **169.254.0.0 a 169.254.255.255** se utilizan para configuración automática de direcciones locales (APIPA) en caso de que un dispositivo no pueda obtener una dirección de un servidor DHCP.

### Cómo Identificar Si Una Dirección IP Es Pública o Privada

Para saber si una dirección IP es pública o privada, puedes simplemente verificar si cae dentro de los rangos mencionados para direcciones privadas. Si no está en esos rangos, es pública. Herramientas y comandos como `ipconfig` (en Windows) o `ifconfig` (en sistemas basados en Unix), así como la configuración de tu router, pueden decirte qué tipo de dirección IP está asignada a tus dispositivos.

### Resumen

La distinción entre direcciones IP públicas y privadas es crucial para la administración de redes, la seguridad y el diseño de la infraestructura IT. Entender estas diferencias ayuda a implementar las prácticas adecuadas para el acceso a recursos internos y externos, y asegura la correcta funcionalidad de los sistemas de comunicaciones digitales.

</details>


Para determinar si las direcciones IP utilizadas en las redes del diagrama son públicas o privadas, analizaremos cada dirección basándonos en los rangos definidos por la IANA para redes privadas y públicas. A continuación, un desglose de cada red en el diagrama:

`1. Dirección IP de Internet y Router B`

- **191.26.145.1 y 191.26.145.20/24**: Este rango de direcciones no está dentro de los bloques reservados para redes privadas, lo que indica que son direcciones IP públicas. Las direcciones públicas son asignadas por la IANA y utilizadas para el tráfico en Internet, siendo accesibles globalmente.

`2. Conexión entre Router B y Router A`

- **172.26.22.1 y 172.26.22.3/30**: Aunque la dirección 172.x.x.x podría sugerir que es una dirección privada, solo el rango 172.16.0.0 hasta 172.31.255.255 está reservado para redes privadas. Por lo tanto, estas direcciones caen dentro del rango de redes privadas y no son accesibles directamente desde Internet.

`3. Conexión entre Router B y Router C`

- **172.17.10.14 y 172.17.10.17/28**: Este rango está dentro de 172.16.0.0 hasta 172.31.255.255, que es específicamente reservado para redes privadas. Por ende, estas direcciones también son privadas y diseñadas para uso interno dentro de organizaciones, no siendo accesibles desde Internet.

`4. Red Interna de Router A`
- **192.168.5.1/24**: El rango 192.168.0.0 - 192.168.255.255 está reservado exclusivamente para redes privadas. Las direcciones dentro de este rango no son ruteables en Internet, indicando que es una dirección privada usada comúnmente para redes domésticas o corporativas internas.

`5. Red Interna de Router C`
- **10.0.10.1/24**: El rango 10.0.0.0 - 10.255.255.255 está destinado para redes privadas. Estas direcciones son utilizadas ampliamente en diversos entornos corporativos y domésticos para la configuración de redes internas y no son accesibles directamente desde Internet.

`Conclusión`

Las direcciones asignadas en las conexiones entre los routers y las redes internas son todas privadas, excepto las direcciones que conectan el Router B con Internet, que son públicas. Las direcciones privadas se utilizan para limitar el acceso directo desde y hacia Internet, proporcionando una capa adicional de seguridad y permitiendo una gestión más eficiente del espacio de direcciones IP dentro de una organización. Las direcciones públicas, por otro lado, son necesarias para que los dispositivos se comuniquen directamente con otros dispositivos en Internet.

---

## CIDR

### Ejercicio 10

CIDR (Classless Inter-Domain Routing) es un método para asignar direcciones IP y enrutar mensajes de red que fue introducido para mejorar la eficiencia del enrutamiento en Internet y para retrasar la agotación de direcciones IPv4. Esta técnica fue introducida en 1993 y marcó un cambio significativo en la forma en que las direcciones IP se asignan y se maneja el enrutamiento.

#### ¿Qué es CIDR (Class Interdomain routing)? 

CIDR reemplaza el antiguo sistema de clases de red (Clase A, B, C) donde las direcciones IP se dividían en bloques fijos basados en los primeros bits de la dirección. Con CIDR, los bloques de direcciones pueden tener cualquier longitud, lo que permite una asignación de direcciones mucho más flexible y un uso más eficiente del espacio de direcciones IP. CIDR se representa generalmente mediante la notación de prefijo, como por ejemplo `192.0.2.0/24`, donde el `/24` indica que los primeros 24 bits de la dirección forman parte del identificador de red.

#### ¿Por qué resulta útil?

1. **Uso eficiente del espacio de direcciones IP:**
   - CIDR permite una asignación de direcciones más precisa y ajustada a las necesidades reales de las organizaciones, reduciendo la cantidad de direcciones IP desperdiciadas bajo el antiguo sistema de clases.

2. **Mejora del enrutamiento:**
   - Con CIDR, las tablas de enrutamiento pueden agregarse para reducir su tamaño. Esto se hace combinando múltiples entradas de red en una sola. Esto no solo simplifica la gestión de las rutas, sino que también mejora la eficiencia del enrutamiento en toda la Internet.

3. **Retraso en la agotación de IPv4:**
   - Al permitir un uso más eficiente de las direcciones disponibles, CIDR ha sido crucial para extender la vida útil de IPv4, que ha estado bajo la presión de la agotación debido al crecimiento exponencial de dispositivos conectados a Internet.

4. **Flexibilidad y escalabilidad en la asignación de direcciones:**
   - CIDR permite que las direcciones IP se asignen en varios tamaños que pueden adaptarse mejor a la cantidad de direcciones realmente necesarias. Esto es especialmente útil para organizaciones más pequeñas o para subredes dentro de una organización más grande.

5. **Facilita el enrutamiento interdominio:**
   - CIDR simplifica el enrutamiento entre diferentes dominios y proveedores de Internet, lo que es crucial para la operatividad de la red global de Internet.

En resumen, CIDR es una herramienta esencial en la gestión de redes modernas, proporcionando una manera más flexible y eficiente de asignar direcciones IP y administrar el enrutamiento en una era donde los recursos de dirección IP son cada vez más valiosos. Su implementación ha permitido no solo una gestión más eficiente del espacio de direcciones IPv4, sino también una mejora en el rendimiento del enrutamiento en la infraestructura de red global.

---

### Ejercicio 11

¿Cómo publicaría un router las siguientes redes si se aplica CIDR?

- a. 198.10.1.0/24
- b. 198.10.0.0/24
- c. 198.10.3.0/24
- d. 198.10.2.0/24


Para explicar detalladamente cómo se agrupan las redes utilizando CIDR y cómo se calculan las nuevas máscaras de subred, usaremos la representación binaria de las direcciones IP para visualizar mejor los cambios. Tomemos las direcciones que mencionaste:

### Direcciones Involucradas
- 198.10.1.0/24
- 198.10.0.0/24
- 198.10.3.0/24
- 198.10.2.0/24

### Paso 1: Convertir las Direcciones a Binario
Primero, convertimos las direcciones a su forma binaria (considerando solo el último octeto para simplicidad, ya que solo ese cambia aquí):

- **198.10.0.0/24**: `00000000`
- **198.10.1.0/24**: `00000001`
- **198.10.2.0/24**: `00000010`
- **198.10.3.0/24**: `00000011`

`Paso 2: Identificar Agrupaciones Posibles`
Observamos los bits y encontramos posibles agrupaciones. Para CIDR, agrupamos direcciones que pueden ser cubiertas por una sola red ajustando la máscara de subred para incluir más direcciones.

- **Agrupación 1 (198.10.0.0 y 198.10.1.0):**
  - Binario: `00000000` y `00000001`
  - Los 7 primeros bits son comunes (`0000000`), y solo cambia el último bit.
  - Nueva máscara: /23 (permitiendo que el último bit varíe entre los dos valores)

- **Agrupación 2 (198.10.2.0 y 198.10.3.0):**
  - Binario: `00000010` y `00000011`
  - Igualmente, los 7 primeros bits son comunes (`0000001`).
  - Nueva máscara: /23

`Paso 3: Calcular la Nueva Dirección de Red y la Dirección de Broadcast para las Agrupaciones`

Con la nueva máscara /23:

- **Para 198.10.0.0/23:**
  - Dirección de Red: 198.10.0.0 (binario: `00000000`)
  - Dirección de Broadcast: 198.10.1.255 (binario: `00000001 11111111`)

- **Para 198.10.2.0/23:**
  - Dirección de Red: 198.10.2.0 (binario: `00000010`)
  - Dirección de Broadcast: 198.10.3.255 (binario: `00000011 11111111`)

`Paso 4: Impacto en el Enrutamiento`
- Al utilizar una máscara /23 en lugar de /24 para estas redes, reduces el número de entradas en la tabla de enrutamiento global, mejorando así la eficiencia del enrutamiento en toda la red.
- Esto es especialmente útil en entornos donde las direcciones IP son limitadas y el enrutamiento debe ser optimizado para conservar recursos.

`Conclusión`
CIDR es una técnica poderosa que permite un uso más flexible y eficiente del espacio de direcciones IP. Al agrupar direcciones IP que están secuencialmente alineadas y ajustar las máscaras de subred correspondientes, las redes pueden ser diseñadas de manera más eficiente, reduciendo la complejidad del enrutamiento y mejorando el rendimiento general de la red.

> Podes seguir reduciendo esto

Para considerar si usar una máscara /22 para las direcciones dadas (198.10.0.0/24, 198.10.1.0/24, 198.10.2.0/24, 198.10.3.0/24) sería adecuado, debemos entender qué implica y cuántas direcciones abarcaría.

`Qué Implica una Máscara /22`
Una máscara /22 implica que los primeros 22 bits de la dirección IP son fijos para definir la red, dejando 10 bits para los hosts dentro de esa red. Esto significa que la red puede tener \(2^{10} = 1024\) direcciones en total.

`Cómo Se Distribuirían Estas Direcciones`
- **Dirección de Red:** Sería la más baja en el rango que comienza con los mismos 22 bits. 
- **Dirección de Broadcast:** Sería la más alta en este rango.

Dado que las redes 198.10.0.0/24 hasta 198.10.3.0/24 son secuenciales y cubren un bloque de 4 subredes /24, podemos calcular el rango cubierto por una máscara /22:

- **Dirección de Red con /22:** 198.10.0.0
- **Dirección de Broadcast con /22:** 198.10.3.255
  - Esto cubriría de 198.10.0.0 hasta 198.10.3.255, encapsulando completamente las cuatro subredes /24 mencionadas.

`Análisis de la Utilidad de una Máscara /22`
- **Eficiencia de Enrutamiento:** Al usar una máscara /22, reducirías la cantidad de entradas en las tablas de enrutamiento al consolidar cuatro entradas de /24 en una sola entrada de /22. Esto simplifica la gestión de la red y puede mejorar el rendimiento del enrutamiento.
- **Flexibilidad de Asignación:** Con /22, tendrías más flexibilidad en la asignación de direcciones dentro de un rango más amplio, lo que podría ser útil si esperas una expansión o si hay una necesidad variable de direcciones IP dentro del grupo de subredes.

`Consideraciones`
- **Segmentación y Control:** Al ampliar la máscara de subred, se podría perder granularidad en el control del tráfico y la administración de segmentos de red más pequeños. Esto es relevante en términos de seguridad y rendimiento de la red, especialmente si diferentes segmentos requieren diferentes políticas.
- **Planificación de la Capacidad:** Es crucial asegurarse de que la capacidad de la red y las políticas de seguridad puedan manejar un rango más amplio de direcciones de manera efectiva sin comprometer la integridad de la red.

`Conclusión`

Usar una máscara /22 para estas redes es completamente viable y puede ofrecer beneficios significativos en términos de simplificación del enrutamiento y eficiencia administrativa. Sin embargo, es esencial considerar los requisitos específicos de la red y las posibles necesidades futuras antes de decidir expandir la máscara de subred. La decisión debe alinearse con los objetivos de la organización en términos de crecimiento, seguridad y gestión de la red.

---

### Ejercicio 12

Listar las redes involucradas en los siguientes bloques CIDR:

- 200.56.168.0/21
- 195.24.0.0/13
- 195.24/13


Para entender cómo listar las redes involucradas dentro de los bloques CIDR dados, analizaremos cada caso utilizando la notación binaria para clarificar cómo se dividen las direcciones IP dentro de cada rango específico. 

#### 1. Bloque CIDR: 200.56.168.0/21

**Paso 1: Entender la Máscara /21**
- Una máscara /21 significa que los primeros 21 bits de la dirección son fijos. Esto deja 11 bits para definir las direcciones de host dentro de la red.

**Paso 2: Calcular el Rango de Direcciones**
- Los primeros 21 bits de 200.56.168.0 se quedan constantes.
- La parte variable de la dirección, que son los últimos 11 bits, puede variar desde 00000000000 (0) hasta 11111111111 (2047).
- Esto da un rango total desde 200.56.168.0 hasta 200.56.175.255.

`Rango de Direcciones:`
- **Dirección de Red:** 200.56.168.0
- **Dirección de Broadcast:** 200.56.175.255
- **Rango Útil de Hosts:** De 200.56.168.1 a 200.56.175.254

#### 2. Bloque CIDR: 195.24.0.0/13 y 195.24/13

> "195.24/13" es probablemente un error de tipografía y debe ser interpretado como "195.24.0.0/13" para mantener la consistencia.

`Explicación Detallada:`

**Paso 1: Entender la Máscara /13**
- Una máscara /13 indica que los primeros 13 bits son fijos. Esto deja 19 bits para las direcciones de host.

**Paso 2: Calcular el Rango de Direcciones**
- Los primeros 13 bits de 195.24.0.0 son constantes, empezando desde `11000011 0001` (los primeros 13 bits de 195.24 en binario).
- La parte variable de la dirección, que son los últimos 19 bits, puede variar desde 0000000000000000000 (0) hasta 1111111111111111111 (524287).
- Esto da un rango total desde 195.16.0.0 hasta 195.31.255.255 (el rango debe ajustarse para incluir todas las posibles direcciones que cumplen con los primeros 13 bits fijos).

`Rango de Direcciones:`
- **Dirección de Red:** 195.16.0.0 (comienzo del bloque que mantiene los 13 bits fijos)
- **Dirección de Broadcast:** 195.31.255.255

---

### Ejercicio 13

El bloque CIDR 128.0.0.0/2 o 128/2, ¿Equivale a listar todas las direcciones de red de clase B?


Para entender cómo se relaciona el bloque CIDR 128.0.0.0/2 con las direcciones de red de clase B y cómo se agruparían todas las redes de clase A bajo CIDR, es fundamental revisar cómo funcionan las máscaras de subred en CIDR y la clasificación original de las direcciones IP en clases A, B y C.

#### `Bloque CIDR 128.0.0.0/2`

**Paso 1: Determinar los bits de red fijos**
- La máscara /2 significa que los dos primeros bits de la dirección IP son fijos. En el caso de 128.0.0.0/2, estos dos bits están configurados como `10`. 

**Paso 2: Calcular el rango de direcciones IP**
- Con solo los dos primeros bits fijos, los siguientes bits pueden variar. Esto abarca desde `10000000.00000000.00000000.00000000` (128.0.0.0) hasta `10111111.11111111.11111111.11111111` (191.255.255.255).
- Esto incluye todas las direcciones desde 128.0.0.0 hasta 191.255.255.255, que cubre todas las direcciones de clase B (128.0.0.0 a 191.255.255.255) y parte de las direcciones de clase A y clase C.

**Paso 3: Relación con las direcciones de red de clase B**
- Este bloque CIDR incluye todas las direcciones de red de clase B, pero no se limita solo a ellas. También incluye la parte alta de las direcciones de clase A y la parte baja de las direcciones de clase C.

#### `¿Cuál sería el bloque CIDR que agrupa todas las redes de clase A?`

**Paso 1: Identificar el rango de direcciones de clase A**
- Las direcciones de clase A originalmente abarcan de 0.0.0.0 a 127.255.255.255, con el primer bit establecido como `0`. 

**Paso 2: Determinar la máscara de CIDR adecuada**
- Para cubrir todo el rango de direcciones de clase A con un bloque CIDR, necesitaríamos una máscara que deje el primer bit como variable y fije los demás según sea necesario para cubrir desde 0.0.0.0 hasta 127.255.255.255.
- Esto significa utilizar una máscara /1 que fija solo el primer bit a `0`. Esto permite que el segundo bit varíe, lo que adecuadamente abarca desde `00000000.00000000.00000000.00000000` (0.0.0.0) hasta `01111111.11111111.11111111.11111111` (127.255.255.255).

`Conclusión`
El bloque CIDR 128.0.0.0/2 incluye todas las direcciones de red de clase B, pero no se limita a estas, ya que también abarca partes de las clases A y C. Para agrupar todas las redes de clase A, se usaría el bloque CIDR 0.0.0.0/1. Este enfoque de CIDR permite una utilización más flexible y eficiente del espacio de direcciones IP en comparación con el sistema de clases original.

---

## VLSM

### Ejercicio 14

`¿Qué es y para qué se usa VLSM?`

**Variable Length Subnet Masking (VLSM)** es una técnica que permite a los administradores de red subdividir una red IP en múltiples subredes de tamaño variable, optimizando así el uso del espacio de direcciones IP asignado a una organización. Esta técnica se utiliza para hacer un uso más eficiente del espacio de direcciones IP y para adaptar la segmentación de la red a las necesidades específicas de diferentes segmentos dentro de la red.

`¿Para qué se usa VLSM?`

1. **Eficiencia en la Utilización del Espacio de Direcciones IP:**
   - VLSM permite dividir redes grandes en subredes más pequeñas sin desperdiciar direcciones IP. Esto es crucial en entornos donde el número de direcciones IP es limitado.

2. **Flexibilidad en el Diseño de Redes:**
   - Al permitir subredes de diferentes tamaños, VLSM ofrece flexibilidad en el diseño de la red, lo que permite a los diseñadores de red ajustar el tamaño de la subred según las necesidades de número de hosts en diferentes segmentos de la red.

3. **Optimización del Enrutamiento:**
   - VLSM puede mejorar la eficiencia del enrutamiento al reducir el número de rutas que un router debe manejar. Al permitir redes más precisas en el enrutamiento, puede minimizar la cantidad de información de enrutamiento que se necesita propagar a través de la red.

4. **Soporte para Múltiples Protocolos de Enrutamiento:**
   - VLSM es compatible con protocolos de enrutamiento que soportan la propagación de máscaras de subred de longitud variable, como OSPF, EIGRP y BGP. Esto permite una implementación más eficaz y dinámica de los cambios de red.

`Cómo Funciona VLSM`

La implementación de VLSM comienza con la red de mayor tamaño asignada y luego divide progresivamente las direcciones disponibles para crear subredes más pequeñas para segmentos específicos de la red que requieren menos direcciones. Esta técnica requiere que los administradores de red y los dispositivos involucrados tengan una capacidad de manejo detallada del enrutamiento y la tabla de direcciones.

`Ejemplo de Aplicación de VLSM`

Supongamos que una empresa tiene una dirección de red 192.168.1.0/24 y necesita crear tres subredes; una que soporte 50 dispositivos, otra que soporte 30 dispositivos y una última que soporte 10 dispositivos. Con VLSM, se pueden crear subredes que usen solo el número necesario de bits, maximizando así el uso eficiente del espacio de dirección:

- Subred 1: 192.168.1.0/26 - Soporta hasta 62 hosts (útil para 50 dispositivos)
- Subred 2: 192.168.1.64/27 - Soporta hasta 30 hosts
- Subred 3: 192.168.1.96/28 - Soporta hasta 14 hosts (útil para 10 dispositivos)

Esta forma de asignar direcciones permite un aprovechamiento eficiente y lógico del espacio de direcciones IP disponible.

En conclusión, VLSM es una herramienta poderosa en la gestión de redes que permite un uso más racionalizado y estratégico del espacio de direcciones IP, lo cual es esencial en la planificación de redes modernas.

---

### Ejercicio 15

`Describa, con sus palabras, el mecanismo para dividir subredes utilizando VLSM.`

El mecanismo para dividir subredes utilizando VLSM (Variable Length Subnet Masking) es un proceso que permite una asignación más eficiente y flexible de direcciones IP dentro de una red, adecuando el tamaño de cada subred a las necesidades específicas de cada segmento de la red. Aquí describo paso a paso cómo funciona este mecanismo:

`Paso 1: Evaluación de Necesidades`

Antes de comenzar a dividir la red principal en subredes, es necesario evaluar cuántos hosts se necesitarán en cada subred. Esta evaluación debe incluir consideraciones sobre el crecimiento futuro y los requerimientos de espacio de dirección para evitar el rediseño de la red.

`Paso 2: Asignación de la Máscara de Subred Más Grande`

Se comienza con la subred más grande que requerirá el mayor número de direcciones IP. A esta subred se le asigna la máscara de subred más pequeña posible (lo que significa menos bits para la red y más bits para los hosts). Esto asegura que se cumplan las necesidades de host mientras se conserva el espacio de direcciones IP para otras subredes.

`Paso 3: Subdivisión Progresiva`

Después de asignar la máscara a la subred más grande, el siguiente paso es dividir el espacio restante para otras subredes. Cada subred posterior se puede asignar con una máscara que precise más bits para la red y menos para los hosts, dependiendo de la cantidad de hosts que se necesite en cada una. Esto se hace de manera progresiva hasta cubrir todas las necesidades específicas de la red.

`Paso 4: Optimización del Enrutamiento`

Con VLSM, cada subred puede tener una máscara de subred diferente, lo cual optimiza el enrutamiento. Los routers que soportan VLSM pueden enviar y recibir actualizaciones de enrutamiento que incluyen la longitud de las máscaras de subred, permitiendo una mayor eficiencia en la gestión del tráfico y la utilización de los recursos de red.

`Paso 5: Documentación`

Es crucial documentar cada asignación de subred y máscara para mantener una referencia clara de la estructura de la red. Esto facilita la gestión, el troubleshooting y la planificación futura de la red.

`Ejemplo Práctico`

Supongamos que tienes una dirección de red 192.168.100.0/24 y necesitas crear subredes para diferentes departamentos con diferentes cantidades de hosts:

1. Departamento A necesita 100 hosts.
2. Departamento B necesita 30 hosts.
3. Departamento C necesita 2 hosts.

Podrías asignar:
- Departamento A: 192.168.100.0/25 (128 hosts, 126 útiles)
- Departamento B: 192.168.100.128/26 (64 hosts, 62 útiles)
- Departamento C: 192.168.100.192/30 (4 hosts, 2 útiles)

Cada subred tiene una máscara adaptada a sus necesidades específicas, maximizando el uso del rango de direcciones IP disponible.

En resumen, VLSM es una técnica esencial para redes modernas que buscan una utilización eficiente de las direcciones IP, permitiendo adaptar el tamaño de las subredes a las necesidades reales de la organización mientras se mejora el rendimiento de la red.

---

### Ejercicio 16

Suponga que trabaja en una organización que tiene la red que se ve en el gráfico y debe armar el direccionamiento para la misma, minimizando el desperdicio de direcciones IP.

Dicha organización posee la red 205.10.192.0/19, que es la que usted deberá utilizar.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3781f6a2-8f27-4b78-bea6-24a9537d9295)

#### a. ¿Es posible asignar las subredes correspondientes a la topología utilizando subnetting sin VLSM? Indique la cantidad de hosts que se desperdicia en cada subred.

Para resolver este escenario utilizando subnetting tradicional sin VLSM (Variable Length Subnet Masking) y utilizando la red 205.10.192.0/19, necesitamos dividir esta red en subredes que puedan alojar al menos 128, 20, 1530 y 7 hosts, respectivamente, para cada una de las subredes RED A, RED B, RED C y RED D, minimizando el desperdicio de direcciones IP.

`Paso 1: Determinar el Tamaño de las Subredes`

Para cada subred, necesitamos calcular el número de bits necesarios para soportar la cantidad de hosts requerida:

- **RED A**: 128 hosts ⇒ Se requieren 7 bits para los hosts (128-2 = 126 hosts útiles, 2^7=128 es el tamaño de la subred más cercano).
- **RED B**: 20 hosts ⇒ Se requieren 5 bits para los hosts (30 hosts útiles, 2^5=32 es el tamaño de la subred más cercano).
- **RED C**: 1530 hosts ⇒ Se requieren 11 bits para los hosts (2046 hosts útiles, 2^11=2048 es el tamaño de la subred más cercano).
- **RED D**: 7 hosts ⇒ Se requieren 3 bits para los hosts (6 hosts útiles, 2^3=8 es el tamaño de la subred más cercano).

`Paso 2: Asignar Máscaras de Subred Basadas en el Mayor Requerimiento`

Para maximizar el uso de las direcciones IP sin VLSM, debemos asignar las máscaras de subred de manera que acomoden el número de hosts requerido en cada subred. Sin VLSM, la máscara seleccionada para cada subred es más restrictiva:

- **RED A**: /25 (255.255.255.128) - Aloja 126 hosts útiles.
- **RED B**: /27 (255.255.255.224) - Aloja 30 hosts útiles.
- **RED C**: /21 (255.255.248.0) - Aloja 2046 hosts útiles.
- **RED D**: /29 (255.255.255.248) - Aloja 6 hosts útiles.

`Paso 3: Calcular el Desperdicio de Direcciones IP`

Al asignar máscaras de subred sin utilizar VLSM, cada subred tiene un número fijo de direcciones, muchas de las cuales pueden no ser utilizadas:

- **RED A**: Desperdicio de 2 direcciones (128 - 126).
- **RED B**: Desperdicio de 12 direcciones (32 - 20).
- **RED C**: Desperdicio de 516 direcciones (2048 - 1530).
- **RED D**: Desperdicio de 1 dirección (8 - 7).

`Paso 4: Direccionamiento de Subredes`

Considerando que estamos trabajando con una red 205.10.192.0/19:

- **205.10.192.0/25** para RED A.
- **205.10.192.128/27** para RED B.
- **205.10.193.0/21** para RED C.
- **205.10.200.0/29** para RED D.

`Conclusión`

Sin VLSM, el desperdicio de direcciones IP puede ser considerable, especialmente en subredes que no se ajustan perfectamente a las potencias de dos. Con VLSM, podríamos asignar máscaras de subred más precisas para cada subred específica, reduciendo así el desperdicio y utilizando el espacio de direcciones de manera más eficiente. En este caso, el uso de VLSM sería altamente recomendable para maximizar la eficiencia del espacio de direcciones disponible.

#### b. Asigne direcciones a todas las redes de la topología. Tome siempre en cada paso la primera dirección de red posible.

Para asignar direcciones IP a las redes en la topología presentada, utilizando la red `205.10.192.0/19` y considerando la necesidad de subredes para 128, 20, 1530, y 7 hosts, respectivamente, y utilizando el método de Variable Length Subnet Mask (VLSM) para optimizar el uso del espacio de direcciones IP, seguiríamos estos pasos:

`Paso 1: Listar las Subredes por Tamaño`

Ordenamos las subredes por el número de hosts que cada una necesita, empezando por la más grande hasta la más pequeña, para minimizar el desperdicio de direcciones:
- RED C: 1530 hosts
- RED A: 128 hosts
- RED B: 20 hosts
- RED D: 7 hosts

`Paso 2: Calcular Máscaras de Subred para Cada Red`

Usamos la fórmula 2^n - 2 >= hosts necesarios para determinar el número mínimo de bits requeridos para los hosts en cada subred, donde \(n\) es el número de bits para los hosts.

- **RED C:** Mínimo de 1530 hosts ⇒ \(2^{11} = 2048\) hosts (2046 útiles), máscara /21
- **RED A:** Mínimo de 128 hosts ⇒ \(2^7 = 128\) hosts (126 útiles), máscara /25
- **RED B:** Mínimo de 20 hosts ⇒ \(2^5 = 32\) hosts (30 útiles), máscara /27
- **RED D:** Mínimo de 7 hosts ⇒ \(2^3 = 8\) hosts (6 útiles), máscara /29

`Paso 3: Asignar Direcciones IP Utilizando VLSM`

Comenzamos con la dirección de red más baja disponible y asignamos bloques de direcciones a cada subred, ajustando la máscara de subred para satisfacer la cantidad de hosts necesarios.

1. **RED C (205.10.192.0/21):**
   - Rango: 205.10.192.0 - 205.10.199.255
   - Dirección de red: 205.10.192.0
   - Dirección de broadcast: 205.10.199.255
   - Rango de hosts: 205.10.192.1 - 205.10.199.254

2. **RED A (205.10.200.0/25):**
   - Rango: 205.10.200.0 - 205.10.200.127
   - Dirección de red: 205.10.200.0
   - Dirección de broadcast: 205.10.200.127
   - Rango de hosts: 205.10.200.1 - 205.10.200.126

3. **RED B (205.10.200.128/27):**
   - Rango: 205.10.200.128 - 205.10.200.159
   - Dirección de red: 205.10.200.128
   - Dirección de broadcast: 205.10.200.159
   - Rango de hosts: 205.10.200.129 - 205.10.200.158

4. **RED D (205.10.200.160/29):**
   - Rango: 205.10.200.160 - 205.10.200.167
   - Dirección de red: 205.10.200.160
   - Dirección de broadcast: 205.10.200.167
   - Rango de hosts: 205.10.200.161 - 205.10.200.166

`Paso 4: Revisión y Ajuste`

Revisamos si hay espacio restante y ajustamos si es necesario, asegurándonos de que todas las subredes estén correctamente definidas sin solapamientos y optimizando el uso de la dirección IP disponible.

`Conclusión`

Este método de VLSM permite un uso eficiente del espacio de direcciones IP, asignando a cada subred la cantidad justa de direcciones que necesita, lo que reduce el desperdicio y mejora la administración de la red.

o asi se entiede mas facil

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b2ef34c2-2cfd-4d65-98c9-f6442c3d5ccf)

#### c. Para mantener el orden y el inventario de direcciones disponibles, haga un listado de todas las direcciones libres que le quedaron, agrupándolas utilizando CIDR

Para calcular y listar todas las direcciones libres que quedan después de asignar las subredes requeridas para RED A, RED B, RED C, y RED D en la red 205.10.192.0/19, procederemos de la siguiente manera:

`Recordatorio de las Asignaciones de Subred:`

- **RED C:** 205.10.192.0/21 (direcciones desde 205.10.192.0 hasta 205.10.199.255)
- **RED A:** 205.10.200.0/25 (direcciones desde 205.10.200.0 hasta 205.10.200.127)
- **RED B:** 205.10.200.128/27 (direcciones desde 205.10.200.128 hasta 205.10.200.159)
- **RED D:** 205.10.200.160/29 (direcciones desde 205.10.200.160 hasta 205.10.200.167)

`Paso 1: Calcular el Rango Total de la Red Principal`

- La red principal es 205.10.192.0/19, que abarca desde 205.10.192.0 hasta 205.10.223.255.

`Paso 2: Identificar los Rangos Utilizados`

Los rangos utilizados ya están definidos como parte de las subredes anteriores. Sumarizamos:
- 205.10.192.0 a 205.10.199.255 para RED C.
- 205.10.200.0 a 205.10.200.167 para RED A, B, y D (combinando las subredes).

`Paso 3: Identificar Direcciones Libres`

Las direcciones libres estarán entre los rangos utilizados y el final de la red principal.

- Desde **205.10.200.168** hasta **205.10.223.255**. Este rango está disponible después de asignar las direcciones para las subredes específicas.

`Paso 4: Agrupar las Direcciones Libres Utilizando CIDR`

Para agrupar eficientemente las direcciones libres, buscamos el mayor bloque contiguo de direcciones que pueda ser representado utilizando una máscara de subred CIDR adecuada.

- **205.10.200.168/29**: Esta subred puede alojar 6 hosts. Al ser una pequeña porción, se identifica primero para detalle.
- **205.10.200.176/28**: Aloja 14 hosts.
- **205.10.200.192/26**: Aloja 62 hosts.
- **205.10.201.0/24 hasta 205.10.223.255**: Esto es un bloque grande y puede agruparse más eficientemente en una única subred que abarca múltiples direcciones /24. La máscara resultante sería **205.10.201.0/19** que abarca desde 205.10.201.0 hasta 205.10.223.255.

`Conclusión`

Al listar todas las direcciones libres, organizadas con CIDR, aseguramos que el espacio de dirección IP no utilizado esté claramente definido y pueda ser asignado eficientemente en el futuro para cualquier necesidad adicional o expansión de la red. Esta organización ayuda a mantener un control estricto del inventario de direcciones IP y facilita la gestión de la red.

#### d. Asigne direcciones IP a todas las interfaces de la topología que sea posible.

Para asignar direcciones IP a todas las interfaces en la topología presentada, necesitamos considerar cada conexión entre los dispositivos (routers y switches) y asegurarnos de que cada interface tenga una dirección IP única dentro de su subred correspondiente. Utilizaremos las subredes ya definidas en pasos anteriores para cada red (RED A, RED B, RED C, RED D) y agregaremos interfaces de red adicionales para las conexiones entre routers si es necesario.

`Asignaciones de Subred Basadas en la Topología`

Asumiendo que ya hemos establecido las subredes siguientes:
- **RED C:** 205.10.192.0/21
- **RED A:** 205.10.200.0/25
- **RED B:** 205.10.200.128/27
- **RED D:** 205.10.200.160/29

`Asignación de Direcciones IP a Interfaces`

**1. Router Interconexiones:**
- Para las conexiones entre los routers, necesitaremos asignar bloques de direcciones pequeños, típicamente /30 para conexiones punto a punto, que permitan 2 direcciones útiles por conexión.

**2. Interfaces de Router a Switches:**
- Cada router tendrá una interfaz en la subred correspondiente que conecta a cada RED.

`Ejemplo de Asignación Detallada`

**Router 1:**
- Interfaz a RED A: 205.10.200.1/25
- Interfaz a RED C: 205.10.192.1/21
- Interfaz a otro router (supongamos Router 2): 205.10.223.252/30 (ejemplo de dirección en un nuevo bloque /30 que estaría libre)

**Router 2:**
- Interfaz a RED B: 205.10.200.129/27
- Interfaz a RED D: 205.10.200.161/29
- Interfaz a otro router (Router 1): 205.10.223.253/30

**3. Direcciones para Conexión a la Nube:**
- Suponiendo que uno de los routers tiene una conexión directa a un recurso externo (como un servicio en la nube o internet), esta interfaz deberá tener una dirección pública o una dirección interna si hay NAT de por medio. Supongamos que el Router 2 se conecta a la nube:
  - Interfaz a la nube: 190.200.10.2/30 (usando una dirección pública ficticia o interna según el diseño de red)

`Consideraciones Adicionales`

- **Direcciones de Broadcast y de Red:** Cada subred tiene una dirección específica de red y una de broadcast que no deben ser asignadas a host o interfaces.
- **Consistencia y Conectividad:** Asegúrate de que las direcciones asignadas sean consistentes y no se superpongan entre subredes para evitar conflictos de direccionamiento.
- **Documentación:** Documenta todas las direcciones IP asignadas y cualquier cambio en la topología de la red para futuras referencias y solución de problemas.

Este esquema de asignación asume que solo se utilizan direcciones internas y cualquier conexión a redes externas requeriría configuraciones adicionales de NAT o direcciones públicas según sea necesario.

---

### Ejercicio 17

Utilizando la siguiente topología y el bloque asignado, arme el plan de direccionamiento IPv4 teniendo en cuenta las siguientes restricciones:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/2bdde33c-c216-42aa-a821-85e3a3234534)


- a. Utilizar el bloque IPv4 200.100.8.0/22.
- b. La red A tiene 125 hosts y se espera un crecimiento máximo de 20 hosts.
- c. La red X tiene 63 hosts.
- d. La red B cuenta con 60 hosts
- e. La red Y tiene 46 hosts y se espera un crecimiento máximo de 18 hosts.
- f. En cada red, se debe desperdiciar la menor cantidad de direcciones IP posibles. En este sentido, las redes utilizadas para conectar los routers deberán utilizar segmentos de red /30 de modo de desperdiciar la menor cantidad posible de direcciones IP.

Para diseñar un plan de direccionamiento IPv4 eficiente para la topología dada con el bloque 200.100.8.0/22 y cumpliendo con las restricciones especificadas, necesitaremos utilizar técnicas de Variable Length Subnet Mask (VLSM). Esta técnica permite optimizar el uso del espacio de direcciones asignando tamaños de subred adecuados según la cantidad de hosts en cada red y las expectativas de crecimiento.

`Paso 1: Determinación del Tamaño de Cada Subred`

Dado el número de hosts y el crecimiento esperado en cada red, determinamos el tamaño de subred necesario:

- **Red A:** 125 hosts + 20 de crecimiento = 145 hosts → Se necesita una máscara que permita al menos 145 hosts. La máscara /24 permite hasta 254 hosts.
- **Red X:** 63 hosts → Se necesita una máscara que permita al menos 63 hosts. La máscara /26 permite hasta 62 hosts, así que se usa una /25 que permite hasta 126 hosts.
- **Red B:** 60 hosts → Se necesita una máscara que permita al menos 60 hosts. La máscara /26 permite hasta 62 hosts.
- **Red Y:** 46 hosts + 18 de crecimiento = 64 hosts → Se necesita una máscara que permita al menos 64 hosts. Una /26 permite hasta 62 hosts, así que se usa una /25 que permite hasta 126 hosts.
- **Conexiones entre Routers:** Usar segmentos /30 que permiten 2 hosts útiles.

`Paso 2: Asignación de Subredes`

Comenzamos asignando las subredes desde la dirección más baja disponible:

1. **Red A: 200.100.8.0/24**
   - Rango de hosts: 200.100.8.1 - 200.100.8.254
   - Dirección de broadcast: 200.100.8.255

2. **Red X: 200.100.9.0/25**
   - Rango de hosts: 200.100.9.1 - 200.100.9.126
   - Dirección de broadcast: 200.100.9.127

3. **Red B: 200.100.9.128/26**
   - Rango de hosts: 200.100.9.129 - 200.100.9.190
   - Dirección de broadcast: 200.100.9.191

4. **Red Y: 200.100.9.192/25**
   - Rango de hosts: 200.100.9.193 - 200.100.9.254
   - Dirección de broadcast: 200.100.9.255

5. **Conexiones entre Routers:**
   - Por ejemplo, entre r1 y r2: 200.100.10.0/30
   - Otros enlaces se asignarán subredes /30 consecutivas dentro del rango disponible de 200.100.10.4/30, 200.100.10.8/30, etc., hasta 200.100.10.252/30.

`Paso 3: Verificación y Ajustes`

Después de asignar las direcciones, es crucial verificar que todas las subredes y conexiones:
- No se solapen.
- Cumplan con las expectativas de crecimiento.
- Sean eficientes en el uso del espacio de direcciones disponible sin desperdiciar direcciones IP.

`Paso 4: Documentación`

Documentar cada asignación con detalles específicos de cada subred y conexión para futuras referencias y gestión de la red. Esta documentación es vital para el mantenimiento y la expansión futura de la red.

Este enfoque proporciona una asignación lógica y sistemática de direcciones que maximiza la utilización del bloque de direcciones IP dado, asegurando la escalabilidad y la eficiencia en la administración de la red.

---

### Ejercicio 18

Asigne direcciones IP en los equipos de la topología según el plan anterior.

> Este grafico es de agusrnf me daba fiaca hacer uno

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/61e08808-421e-4359-aa1b-110d709a4c53)

---

## ICMP y Configuraciones IP

### Ejercicio 19

`Describa qué es y para qué sirve el protocolo ICMP.`

El protocolo ICMP (Internet Control Message Protocol) es un componente crucial de la suite de protocolos de Internet, utilizado primordialmente para diagnosticar problemas de red y facilitar mensajes operativos sobre el estado de la red. Este protocolo se define en el RFC 792 y es fundamental para el funcionamiento de redes IP. Aquí te describo qué es y para qué sirve ICMP en detalle:

`¿Qué es ICMP?`

ICMP es un protocolo de capa de red según el modelo OSI, que se utiliza junto con el protocolo IP (Internet Protocol). A diferencia de los protocolos de transporte como TCP y UDP, ICMP no se utiliza para enviar datos entre aplicaciones, sino que se encarga de la gestión y el control de la red proporcionando mensajes de error y operativos.

`Funciones Principales de ICMP:`

1. **Diagnóstico de Red:**
   - ICMP permite diagnosticar problemas en la red enviando mensajes de error que indican, por ejemplo, que un servicio o host no está alcanzable o que un datagrama ha tenido que ser descartado debido a un TTL (Time to Live) que ha expirado. Esto es útil para herramientas como `ping`, que mide la accesibilidad entre dispositivos en una red.

2. **Mensajes de Error:**
   - **Destino Inalcanzable:** Se envía cuando no se puede entregar un paquete IP debido a problemas como un puerto o host inexistente.
   - **Tiempo Excedido:** Indica que el TTL de un paquete IP ha expirado, lo que usualmente significa que ha habido un bucle en el enrutamiento.
   - **Problemas de Parámetro:** Alerta sobre errores en los campos de cabecera que impiden que un paquete sea procesado.

3. **Redireccionamiento:**
   - Los mensajes de redireccionamiento informan a los hosts sobre rutas más eficientes para el envío de paquetes. Esto es parte de la gestión de la red para optimizar el enrutamiento y la eficiencia.

4. **Solicitud y Respuesta de Eco (Ping):**
   - Esta es probablemente la función más conocida de ICMP, utilizada para verificar la conectividad general entre dos nodos en una red. Un mensaje de eco se envía a un dispositivo, que luego debe responder con un eco de respuesta, confirmando la conectividad.

`Importancia de ICMP`

Aunque es un protocolo simple, ICMP es vital para la administración de la red y la rápida solución de problemas. Ayuda a los administradores a monitorear y responder a eventos en tiempo real, asegurando que la infraestructura de red sea robusta y confiable. También es fundamental para la configuración de redes más eficientes y para informar a los sistemas sobre cómo y cuándo el tráfico debe ser reruteado para optimizar el rendimiento.

En resumen, ICMP es un componente esencial de la pila de protocolos de Internet, proporcionando retroalimentación sobre problemas y estado de la red, lo que es crucial para el mantenimiento y la operación eficiente de redes basadas en IP.

#### a. Analice cómo funciona el comando ping.

El comando **ping** es una herramienta utilizada para probar la accesibilidad de un host en una red IP y para medir el tiempo que toman los mensajes para ir y volver desde el host de origen al destino. Funciona utilizando el protocolo ICMP (Internet Control Message Protocol), específicamente mediante el envío de mensajes de eco y la espera por respuestas de eco.

`Funcionamiento del Comando Ping`

1. **Envío de Solicitud de Eco:**
   - Cuando ejecutas el comando ping a una dirección IP, tu dispositivo envía un paquete ICMP de tipo "Echo Request" al dispositivo de destino.
   - Este paquete contiene datos que el dispositivo receptor deberá devolver, permitiendo medir el tiempo de ida y vuelta.

2. **Recepción de Respuesta de Eco:**
   - El dispositivo de destino, al recibir el paquete ICMP "Echo Request", deberá responder con un paquete ICMP de tipo "Echo Reply".
   - Al recibir este paquete de respuesta, tu dispositivo puede calcular el tiempo que tardó el mensaje en ir y volver, comúnmente conocido como RTT (Round-Trip Time).

`Tipos y Códigos ICMP Utilizados por Ping`

#### i. Indique el tipo y código ICMP que usa el ping.

Tipo y Código ICMP que Usa el Ping (Solicitud de Eco)

- **Tipo:** 8 (Echo Request)
- **Código:** 0

Este tipo y código corresponden a la solicitud de eco que el comando ping envía para verificar la conectividad.


#### ii. Indique el tipo y código ICMP que usa la respuesta de un ping.

Tipo y Código ICMP que Usa la Respuesta de un Ping (Respuesta de Eco)

- **Tipo:** 0 (Echo Reply)
- **Código:** 0

Este tipo y código corresponden a la respuesta de eco que el host de destino envía en respuesta a la solicitud de eco.

`Importancia del Ping`

El comando ping es una herramienta esencial para la resolución de problemas de red, permitiendo a los usuarios y administradores de sistemas verificar la accesibilidad de hosts en una red. Su simplicidad y efectividad lo hacen indispensable en muchas tareas de diagnóstico y monitoreo de red. Además, debido a que proporciona una medida del tiempo de ida y vuelta, es útil para evaluar la calidad de la conexión y la latencia en la red.

#### b. Analice cómo funcionan comandos como traceroute/tracert de Linux/Windows y cómo manipulan el campo TTL de los paquetes IP.

Los comandos `traceroute` en Linux y `tracert` en Windows son herramientas utilizadas para diagnosticar la ruta que toman los paquetes para alcanzar un host de destino en una red. Estas herramientas proporcionan una visión detallada de cada salto (hop) que el paquete realiza en su camino hacia el destino, permitiendo a los usuarios identificar dónde pueden estar ocurriendo retrasos o bloqueos en la ruta.

`Funcionamiento de Traceroute/Tracert`

`Manipulación del Campo TTL`

1. **Inicialización del TTL:**
   - Traceroute comienza enviando paquetes de datos con el campo TTL (Time To Live) del encabezado IP inicializado a 1. El TTL es un contador que reduce su valor en 1 cada vez que el paquete pasa por un router. Si el TTL llega a 0, el paquete se descarta para evitar que los paquetes de datos circulen indefinidamente en la red.

2. **Incremento del TTL:**
   - En cada subsiguiente intento, traceroute incrementa el valor del TTL en 1. Este proceso se repite, incrementando el TTL hasta que el paquete alcanza el host de destino o hasta que se alcanza un número máximo de saltos (hops) predefinido.

3. **Recepción de Respuestas ICMP:**
   - Cada vez que un paquete con un determinado TTL es descartado por un router debido a que el TTL alcanza 0, el router envía de vuelta al origen un paquete ICMP de tipo "Tiempo Excedido" (Time Exceeded), que contiene la dirección IP del router. Esto le permite a traceroute identificar y registrar cada router por el que el paquete pasa en su ruta hacia el destino.

4. **Finalización:**
   - El proceso termina cuando el paquete con el TTL suficientemente alto para llegar al destino es recibido y el host de destino envía una respuesta, típicamente un paquete ICMP de tipo "Echo Reply", indicando que ha sido alcanzado.

`Utilidad de Traceroute/Tracert`

- **Diagnóstico de Red:** Ayuda a diagnosticar puntos de fallo o cuellos de botella en la ruta de los datos.
- **Seguridad:** Puede ayudar a identificar rutas inesperadas que podrían indicar configuraciones erróneas o ataques de redireccionamiento.
- **Rendimiento:** Permite a los administradores de red medir la latencia a lo largo de diferentes tramos de la red.

El uso de traceroute o tracert es invaluable para los profesionales de TI y los administradores de red para mantener y resolver problemas en redes complejas, ofreciendo una mirada en tiempo real sobre cómo los paquetes de datos navegan a través de la infraestructura de Internet y redes internas.

#### c. Indique la cantidad de saltos realizados desde su computadora hasta el sitio www.nasa.gov. Analice:

Para determinar la cantidad de saltos desde tu computadora hasta el sitio `www.nasa.gov` y analizar los detalles relacionados, puedes usar el comando `traceroute` en Linux o `tracert` en Windows. A continuación, te explico cómo realizar este procedimiento y te proporciono información sobre las preguntas específicas que planteaste:

### Realizando Traceroute/Tracert a www.nasa.gov

1. **En Windows:**
   - Abre el Símbolo del sistema (cmd).
   - Escribe el comando: `tracert www.nasa.gov`
   - Presiona Enter.

2. **En Linux:**
   - Abre una terminal.
   - Escribe el comando: `traceroute www.nasa.gov`
   - Presiona Enter.



#### i. Cómo Hacer para que no Muestre el Nombre del Dominio Asociado a la IP de Cada Salto
- **En Windows:** Utiliza el comando `tracert -d www.nasa.gov`. La opción `-d` evita que `tracert` intente resolver las direcciones IP a nombres de dominio, acelerando el proceso y mostrando solo las direcciones IP.
- **En Linux:** Utiliza el comando `traceroute -n www.nasa.gov`. La opción `-n` hace que `traceroute` no resuelva los nombres de los nodos, solo muestra las direcciones IP.

#### ii. La Razón de la Aparición de * en Parte o Toda la Respuesta de un Salto
- **Estrellas (*):** Cuando ves `*` en los resultados de `traceroute` o `tracert`, esto indica que no se recibió respuesta de ese salto específico dentro del tiempo de espera predeterminado. Las posibles razones incluyen:
  - **Filtrado de paquetes:** Algunos routers configuran reglas de firewall que bloquean los mensajes ICMP utilizados por `traceroute`. Cuando un router tiene estas reglas, no responderá a las solicitudes de eco.
  - **Pérdida de paquetes:** La red puede estar congestionada, lo que resulta en la pérdida de paquetes ICMP antes de que alcancen su destino o regresen.
  - **Tiempo de espera:** El tiempo de espera para la respuesta del paquete ha expirado antes de que se recibiera una respuesta.

Estos resultados te ayudan a entender mejor la ruta que toman tus datos en la red y te proporcionan una idea sobre posibles problemas de conectividad o configuraciones restrictivas en la ruta hacia el destino.

#### d. Verifique el recorrido hacia los servidores de nombre del dominio unlp.edu.ar. En base al recorrido realizado, ¿podría confirmar cuál de ellos toma un camino distinto?

Eh morido

---

### Ejercicio 20

¿Para que se usa el bloque 127.0.0.0/8? ¿Qué PC responde a los siguientes comandos?

- a. ping 127.0.0.1
- b. ping 127.0.54.43

El bloque 127.0.0.0/8 se usa en redes de computadoras para designar direcciones IP que se refieren a la "máquina local" o "host local", a menudo llamadas direcciones de loopback. Estas direcciones son utilizadas principalmente para pruebas de red interna dentro de un solo sistema. El uso de estas direcciones permite que el software de red pruebe la conectividad y funcionalidad de la red sin la necesidad de salir al exterior a través de una red física.

### ¿Qué PC responde a los siguientes comandos?

`a. ping 127.0.0.1`

- **127.0.0.1** es la dirección de loopback más comúnmente usada. Cuando utilizas este comando, estás enviando un paquete ICMP Echo Request a tu propia máquina. Por lo tanto, la máquina que responde al `ping 127.0.0.1` es el propio equipo desde el que se emite el comando. Se usa para verificar que el software de pila TCP/IP en el host está funcionando correctamente.

`b. ping 127.0.54.43`

- Al igual que el caso anterior, cualquier dirección dentro del bloque 127.0.0.0/8 (que incluye 127.0.54.43) se dirige al loopback de la propia máquina. Por lo tanto, si emites `ping 127.0.54.43`, también estás enviando paquetes a tu propia computadora. La respuesta también proviene de tu propia máquina, verificando así la funcionalidad del loopback y la pila TCP/IP interna.

En resumen, cuando pings a cualquier dirección dentro del bloque 127.0.0.0/8, estás realizando una prueba de loopback interna, y la máquina que responde es siempre la máquina desde la que se emiten los comandos. Esto es útil para diagnósticos y pruebas de conectividad sin necesidad de utilizar la red externa.

---

### Ejercicio 21

Investigue para qué sirven los comandos ifconfig y route. ¿Qué comandos podría utilizar en su reemplazo? Inicie una topología con CORE, cree una máquina y utilice en ella los comandos anteriores para practicar sus diferentes opciones, mínimamente:
- Configurar y quitar una dirección IP en una interfaz.
- Ver la tabla de ruteo de la máquina

Los comandos `ifconfig` y `route` son herramientas tradicionales en sistemas Unix y Linux utilizadas para la configuración de interfaces de red y la gestión de la tabla de ruteo, respectivamente. Aunque todavía están presentes en muchos sistemas, han sido reemplazados por herramientas más modernas y potentes que ofrecen mejor compatibilidad con las nuevas características de red.

`Funciones de los Comandos`

1. **ifconfig**: Se utiliza para configurar, manejar y mostrar la información de las interfaces de red. Permite activar o desactivar interfaces, asignar direcciones IP, configurar máscaras de red, y mucho más.

2. **route**: Se utiliza para ver y manipular la tabla de ruteo del sistema. Esto incluye agregar, eliminar o cambiar las rutas utilizadas por el sistema operativo para dirigir el tráfico de red.

`Comandos de Reemplazo`

- **ip**: Este comando es parte del paquete `iproute2` en sistemas Linux y puede realizar las funciones de `ifconfig` y `route`, además de muchas otras tareas relacionadas con la red. Está diseñado para ser un reemplazo directo, ofreciendo una sintaxis más coherente y un conjunto de características más amplio.
- **ip addr**, **ip link**: Reemplazan a `ifconfig` para la configuración de interfaces.
- **ip route**: Reemplaza a `route` para la gestión de la tabla de ruteo.

`Practicando con CORE`

Para utilizar estos comandos en un entorno práctico como CORE (Common Open Research Emulator), puedes seguir estos pasos básicos:

1. **Iniciar una Topología con CORE:**
   - Abre CORE.
   - Crea una nueva topología arrastrando algunos nodos (por ejemplo, PCs y switches).
   - Conecta los nodos con enlaces.

2. **Utilizar ifconfig y route en una Máquina:**

   `Configurar y Quitar una Dirección IP en una Interfaz`
   - **Configurar una dirección IP:**
     ```bash
     ifconfig eth0 192.168.1.10 netmask 255.255.255.0 up
     ```
   - **Quitar una dirección IP:**
     ```bash
     ifconfig eth0 down
     ip addr flush dev eth0
     ```

   `Ver la Tabla de Ruteo de la Máquina`
   - **Usando route:**
     ```bash
     route -n
     ```
   - **Usando ip route (recomendado):**
     ```bash
     ip route show
     ```

Estos comandos te permitirán ver cómo se configuran y manipulan las interfaces de red y las tablas de ruteo directamente desde la consola de cada máquina virtual en CORE. Practicar con estos comandos en un entorno simulado es una excelente manera de entender cómo funcionan y cómo se pueden utilizar para gestionar una red.