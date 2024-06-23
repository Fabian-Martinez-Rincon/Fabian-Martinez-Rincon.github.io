---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Ruteo'
pubDate: 2024-06-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/ruteo.jpg'
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
- [Ejercicio 14](#ejercicio-14)
- [Ejercicio 15](#ejercicio-15)


----

## Recomendación

Al final de la práctica se encuentra un ejercicio para ser realizado en la herramienta CORE.

Si bien el ejercicio no agrega conceptos nuevos a los vistos previamente, recomendamos su resolución para que puedan configurar, probar y analizar todo lo aprendido en una simulación de una red

## Fragmentación

### Ejercicio 1

Se tiene la siguiente red con los MTUs indicados en la misma. Si desde pc1 se envía un paquete IP a pc2 con un tamaño total de 1500 bytes (cabecera IP más payload) con el campo Identification = 20543, responder:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/28e7f4c8-ef14-4d0d-8382-d81bea835872)

#### Indicar IPs origen y destino y campos correspondientes a la fragmentación cuando el paquete sale de pc1

Cuando envías un paquete IP desde pc1 a pc2 en una red con múltiples MTUs, como en tu caso, hay una serie de pasos y consideraciones importantes relacionados con la fragmentación debido a los diferentes MTUs configurados en la red. Aquí te explicaré detalladamente cómo abordar esta situación paso a paso, especialmente cuando el paquete inicial sale de pc1.

`Paso 1: Preparar el Paquete IP en pc1`

**1.** **Configuración del paquete IP:**
   - **IP Origen:** 10.0.0.20 (pc1)
   - **IP Destino:** 10.0.2.20 (pc2)
   - **Tamaño total del paquete:** 1500 bytes (esto incluye la cabecera IP y el payload).
   - **Campo Identification:** 20543 (esto se usa para identificar todos los fragmentos de un mismo paquete original).

`Paso 2: Confrontar el MTU en el primer enlace`

**2.** **MTU del enlace pc1 a R1:**
   - **MTU:** 1500 bytes
   - Aquí no hay problema ya que el MTU del enlace es igual al tamaño del paquete. No se requiere fragmentación en este punto.

`Paso 3: Manejo de la Fragmentación en R1`

**3.** **Encuentro con el primer MTU reducido entre R1 y R2:**
   - **MTU del enlace R1 a R2:** 600 bytes
   - Como el MTU es menor que el tamaño del paquete de 1500 bytes, R1 necesita fragmentar el paquete.

`Paso 4: Fragmentación del Paquete`

**4.** **Cálculo de la fragmentación:**
   - La cabecera IP tiene un tamaño típico de 20 bytes.
   - **MTU de 600 bytes menos 20 bytes de cabecera deja 580 bytes para datos por fragmento.**
   - El paquete original se divide en múltiples fragmentos donde cada uno, excepto posiblemente el último, lleva 580 bytes de datos.

**5.** **Campos de Fragmentación:**
   - **Flags:** 
     - Los fragmentos excepto el último tendrán el bit 'More Fragments' (MF) establecido en 1.
     - El último fragmento tendrá el bit 'MF' establecido en 0.
   - **Fragment Offset:** 
     - Se calcula en unidades de 8 bytes. Cada fragmento sucesivo aumenta su offset en `(580/8)` unidades respecto al anterior.

**6.** **Reconstrucción de fragmentos:**
   - **Unificación de los fragmentos:** Ocurre en pc2, el host de destino final.
   - Si algún fragmento se pierde durante la transmisión, la reconstrucción completa del paquete original en pc2 no será posible, y típicamente, el paquete se descartará después de un tiempo.

`Paso 5: Continuación de la Transmisión`

**7.** **Envío de fragmentos a través de R2:**
   - Asumiendo que el MTU en el enlace R2 a pc2 es de 1500 bytes, todos los fragmentos pueden pasar sin requerir fragmentación adicional.

`Consideraciones Adicionales`

- Este proceso de fragmentación puede introducir una sobrecarga significativa y aumentar la probabilidad de errores. Es recomendable, cuando sea posible, ajustar el tamaño del paquete en la fuente o configurar los MTUs en la red para que sean uniformes y evitar la fragmentación.

Estos pasos te proporcionan un marco para entender y manejar la fragmentación de paquetes en redes con MTUs variados, asegurando que estés preparado para configurar y diagnosticar problemas en entornos de red similares.

#### ¿Qué sucede cuando el paquete debe ser reenviado por el router R1?

Cuando un paquete IP de 1500 bytes es enviado desde pc1 a pc2 en la red descrita, y debe ser reenviado por el router R1, se enfrenta a un desafío debido al MTU más pequeño en la interfaz entre R1 y R2. Vamos a explorar detalladamente y paso a paso lo que sucede en este escenario:

`Paso 1: Recepción del Paquete por R1`
- **Paquete recibido:** R1 recibe el paquete de 1500 bytes de pc1.
- **MTU del enlace de R1 a pc1:** 1500 bytes, por lo que el paquete es recibido sin necesidad de fragmentación.

`Paso 2: Evaluación del MTU en la Interfaz R1-R2`

- **MTU del enlace R1 a R2:** 600 bytes.
- Dado que el MTU de este enlace es menor que el tamaño del paquete recibido (1500 bytes), R1 debe fragmentar el paquete antes de reenviarlo a R2.

`Paso 3: Fragmentación del Paquete`

- **Cálculo de la fragmentación:** 
  - La cabecera IP típicamente ocupa 20 bytes.
  - El MTU de 600 bytes en el enlace permite 580 bytes de datos por fragmento después de considerar la cabecera.
- **Creación de fragmentos:**
  - **Fragmento 1:** 580 bytes de datos + 20 bytes de cabecera = 600 bytes total. Flags de fragmentación indican más fragmentos (MF = 1), y el offset es 0.
  - **Fragmentos subsiguientes:** Se continúa fragmentando en bloques de 580 bytes de datos hasta cubrir el total del paquete original. Cada fragmento nuevo incrementa el offset en 580 bytes divididos entre 8 (porque el offset se mide en bloques de 8 bytes).

`Paso 4: Reenvío de Fragmentos`

- **Envío a R2:** Cada fragmento es enviado individualmente a través del enlace entre R1 y R2. R1 maneja la retransmisión de cada fragmento asegurándose de que cumpla con el MTU de 600 bytes.

`Paso 5: Recepción y Reensamblaje en pc2`

- **Recepción por R2:** R2 recibe los fragmentos uno por uno.
- **Envío a pc2:** R2 reenvía los fragmentos hacia pc2. El MTU entre R2 y pc2 es de 1500 bytes, por lo que no se requiere fragmentación adicional.
- **Reensamblaje:** pc2 reensambla los fragmentos para formar el paquete original. Este proceso ocurre completamente en pc2, el destinatario final.

`Consideraciones Adicionales`

- **Pérdida de fragmentos:** Si algún fragmento se pierde durante el transporte, pc2 no podrá reconstruir el paquete original completamente. Esto puede requerir una retransmisión del paquete completo desde pc1 si se detecta la pérdida (dependiendo del protocolo de capa superior, como TCP).
- **Eficiencia:** La fragmentación puede aumentar la latencia y reducir la eficiencia de la red, ya que implica un mayor procesamiento por parte de los routers y un mayor número de paquetes a transmitir.

Este análisis detalla cómo el router R1 gestiona un paquete que debe ser fragmentado debido a un MTU más pequeño en la red, ilustrando el impacto que las diferencias de MTU pueden tener en el tráfico de la red.

#### Indicar cómo quedarían los paquetes fragmentados para ser enviados por el enlace entre R1 y R2.

Cuando un paquete de 1500 bytes es enviado desde pc1 a pc2 y debe pasar por el enlace entre R1 y R2 que tiene un MTU de 600 bytes, se requerirá la fragmentación del paquete para asegurar que pueda ser transmitido correctamente. Vamos a detallar cómo se llevaría a cabo esta fragmentación, paso a paso:

`Paso 1: Tamaño de los Fragmentos`

- **MTU del enlace R1-R2:** 600 bytes.
- **Cabecera IP:** 20 bytes.
- **Datos útiles por fragmento:** 600 - 20 = 580 bytes.

`Paso 2: Cantidad de Fragmentos Necesarios`

- **Tamaño total de datos:** 1500 - 20 (cabecera original) = 1480 bytes.
- **Número de fragmentos requeridos:** 1480 / 580 = 2.55, por lo que necesitamos 3 fragmentos (los dos primeros fragmentos serán de 580 bytes de datos y el último ajustará el resto).

`Paso 3: Características de los Fragmentos`

1. **Primer Fragmento:**
   - **Tamaño:** 600 bytes (580 de datos + 20 de cabecera).
   - **Flags:** More Fragments (MF) = 1 (indicando que hay más fragmentos).
   - **Offset:** 0 (es el primer fragmento, así que el desplazamiento es 0).
   - **Identification:** 20543 (todos los fragmentos comparten este ID para asociarse como parte del mismo paquete original).

2. **Segundo Fragmento:**
   - **Tamaño:** 600 bytes (580 de datos + 20 de cabecera).
   - **Flags:** MF = 1.
   - **Offset:** 580 / 8 = 72.5, pero debe ser un número entero, por lo tanto, redondeamos a 72 (esto representa el desplazamiento en bloques de 8 bytes del primer byte de datos respecto al inicio del paquete original).

3. **Tercer Fragmento:**
   - **Tamaño:** 320 bytes (300 de datos + 20 de cabecera, ajustando el total del paquete a 1500 bytes).
   - **Flags:** MF = 0 (este es el último fragmento, no hay más después de este).
   - **Offset:** (580 + 580) / 8 = 145 (este offset sigue al segundo fragmento y es calculado de la misma forma).

`Paso 4: Envío y Reensamblaje`

- **Envío:** Cada fragmento es enviado individualmente a través del enlace entre R1 y R2.
- **Reensamblaje:** Todos los fragmentos son reensamblados en pc2 para reconstruir el paquete original. Esto requiere que todos los fragmentos lleguen correctamente; si alguno se pierde, el paquete no puede ser reconstruido por completo.

`Consideraciones Adicionales`

- **Overhead de la fragmentación:** La fragmentación incrementa el overhead ya que cada fragmento lleva su propia cabecera IP.
- **Riesgo de pérdida:** Si se pierde un fragmento, el paquete completo no puede ser reensamblado, lo que potencialmente requiere una retransmisión del paquete original.
- **Eficiencia de la red:** La fragmentación puede afectar la eficiencia de la red, consumiendo más recursos tanto en los routers como en los hosts finales.

Este proceso ilustra cómo los routers manejan la fragmentación necesaria cuando los paquetes IP deben pasar a través de enlaces con MTU restrictivo, garantizando que la comunicación entre dispositivos en diferentes segmentos de red se realice eficazmente incluso bajo restricciones de infraestructura.

#### ¿Dónde se unen nuevamente los fragmentos? ¿Qué sucede si un fragmento no llega?

En la red que has descrito, los fragmentos de un paquete IP original enviado desde pc1 se reunirán y reensamblarán en el destino final, que en este caso es pc2. Este proceso de reensamblaje es crucial para que pc2 pueda procesar correctamente el paquete original como fue enviado. Aquí explicaré paso a paso cómo ocurre esto y qué sucede si un fragmento no llega.

`Paso 1: Fragmentación del Paquete`

1. **Fragmentación en R1:**
   - Dado que el paquete original es de 1500 bytes y el MTU entre R1 y R2 es de solo 600 bytes, R1 fragmentará el paquete en varios fragmentos más pequeños, cada uno dentro del límite del MTU de 600 bytes.

2. **Envío de Fragmentos:**
   - R1 enviará estos fragmentos uno por uno a través de la interfaz hacia R2.

`Paso 2: Transmisión y Recepción de Fragmentos`

1. **Recepción por R2:**
   - R2 recibe los fragmentos uno tras otro. Estos fragmentos aún no son útiles como datos individuales, ya que necesitan ser reensamblados para formar el paquete original.

`Paso 3: Reensamblaje de Fragmentos`

1. **Reensamblaje en pc2:**
   - Todos los fragmentos enviados por R1 y retransmitidos por R2 deben llegar a pc2 para que se puedan reunir.
   - El reensamblaje se realiza en el buffer de recepción de pc2, donde los fragmentos se ordenan y combinan basándose en sus desplazamientos y el número de identificación, que es 20543 en este caso.

`Paso 4: Proceso de Reensamblaje Completo`

1. **Construcción del Paquete Original:**
   - Una vez que todos los fragmentos han llegado y están en el orden correcto, pc2 los combina para reconstruir el paquete original de 1500 bytes.
   - El proceso se completa cuando todos los fragmentos han sido reunidos y el paquete se procesa como si hubiera llegado intacto.

`Problemas Potenciales: Pérdida de Fragmentos`

1. **Pérdida de un Fragmento:**
   - Si alguno de los fragmentos se pierde durante la transmisión y no llega a pc2, el paquete original no puede ser completamente reensamblado.
   - En este caso, el paquete incompleto generalmente se descarta después de un tiempo de espera.

2. **Impacto de la Pérdida de Fragmentos:**
   - La pérdida de fragmentos puede llevar a una retransmisión del paquete original por parte de la aplicación o la capa de transporte, especialmente si se utiliza TCP, que maneja la retransmisión de datos faltantes.

En resumen, el reensamblaje de los fragmentos se realiza en el host de destino (pc2), y es crucial que todos los fragmentos lleguen para que el paquete original pueda ser reconstruido correctamente. La pérdida de cualquier fragmento puede resultar en la necesidad de retransmitir el paquete entero, lo cual puede reducir la eficiencia de la red y aumentar la latencia.

#### Si un fragmento tiene que ser reenviado por un enlace con un MTU menor al tamaño del fragmento, ¿qué hará el router con ese fragmento?

Cuando un fragmento de un paquete IP necesita ser reenviado por un enlace con un MTU menor que el tamaño del fragmento, el router enfrenta un dilema de fragmentación adicional. Este es el proceso paso a paso de lo que ocurre:

`Paso 1: Detección del MTU más pequeño`

- **Evaluación del MTU:** El router detecta que el MTU del siguiente enlace es menor que el tamaño del fragmento que debe enviar. 

`Paso 2: Fragmentación adicional`

- **Fragmentación:** Para manejar esta situación, el router debe fragmentar aún más el fragmento original en unidades más pequeñas que se ajusten al MTU del nuevo enlace. Este proceso se llama "fragmentación de fragmentos".

`Paso 3: Ajuste de los Campos de los Fragmentos`

- **Campos de Control:** El router ajustará los campos necesarios en las cabeceras de los nuevos fragmentos más pequeños, como el campo de desplazamiento y los flags, para asegurar que al llegar al destino final, todos los fragmentos puedan ser reensamblados correctamente en el orden adecuado.
- **Flags de Fragmentación:** El bit 'More Fragments' (MF) se establece en 1 en todos los fragmentos adicionales excepto en el último, donde se establece en 0.

`Paso 4: Reenvío de los Nuevos Fragmentos`

- **Transmisión:** Cada uno de los nuevos fragmentos se envía individualmente a través del enlace con el MTU reducido.

`Implicaciones de la Fragmentación Adicional`

- **Ineficiencia:** La fragmentación adicional introduce una sobrecarga significativa en la red y puede afectar el rendimiento general de la red debido a la cantidad incrementada de cabeceras y el procesamiento adicional necesario en cada hop y en el destino final.
- **Riesgo de Pérdida:** Cada fragmento adicional incrementa el riesgo de pérdida de paquetes, ya que más fragmentos significan más oportunidades para que ocurran errores durante la transmisión.

`Conclusiones`

La necesidad de fragmentar aún más los fragmentos debido a un MTU reducido en un enlace subsiguiente es un escenario desafiante que los administradores de red prefieren evitar. Configurar todos los enlaces de la red para que tengan un MTU uniforme o utilizar técnicas como Path MTU Discovery (PMTUD) puede ayudar a mitigar estos problemas, permitiendo a los sistemas ajustar el tamaño de los paquetes para evitar la fragmentación siempre que sea posible.

---

## Ruteo

### Ejercicio 2

---

### Ejercicio 3

---

### Ejercicio 4

---

### Ejercicio 5

---

### Ejercicio 6

---

## DHCP y NAT
### Ejercicio 7
### Ejercicio 8
### Ejercicio 9
### Ejercicio 10
### Ejercicio 11
### Ejercicio 12
### Ejercicio 13
### Ejercicio 14
### Ejercicio 15
