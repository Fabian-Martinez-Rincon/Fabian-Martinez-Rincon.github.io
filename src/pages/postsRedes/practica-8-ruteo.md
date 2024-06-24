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

#### ¿Qué es el ruteo?

El ruteo, también conocido como enrutamiento, es el proceso mediante el cual se determina la ruta que deben seguir los paquetes de datos desde su origen hasta su destino en una red de computadoras. Este proceso es esencial para garantizar que la información transmitida a través de redes amplias y complejas, como Internet, llegue de manera eficiente y precisa al punto adecuado.

#### ¿Por qué es necesario?

1. **Interconexión de Redes:** Permite la comunicación entre diferentes redes, que pueden estar separadas geográficamente y conectadas a través de varios dispositivos intermediarios, como routers.
   
2. **Selección de la Mejor Ruta:** Los algoritmos de ruteo evalúan múltiples rutas posibles y seleccionan la más óptima para enviar los paquetes. Esto se basa en varios criterios, como el costo, la distancia, el ancho de banda disponible y la congestión de la red.

3. **Eficiencia en la Transmisión:** Optimiza el uso de los recursos de la red al evitar caminos saturados o más lentos, reduciendo así el tiempo total de tránsito y mejorando la calidad de servicio.

4. **Escalabilidad de la Red:** A medida que las redes crecen en tamaño y complejidad, el ruteo se vuelve crucial para manejar la creciente cantidad de tráfico y para asegurar que la red pueda escalar de manera eficiente sin degradar el rendimiento.

5. **Recuperación ante Fallas:** Los protocolos de ruteo pueden adaptarse dinámicamente a los cambios en la topología de la red, como fallas en los enlaces o routers. Esto asegura la robustez y la confiabilidad de la red, redirigiendo el tráfico según sea necesario para evitar los puntos de falla.

El ruteo es un componente crítico de la infraestructura de TI que soporta no solo Internet, sino también redes corporativas, redes de proveedores de servicios, y más. Es fundamental para la operación diaria de innumerables aplicaciones y servicios que dependen de la transmisión eficaz de datos a través de redes digitales.

---

### Ejercicio 3

`En las redes IP el ruteo puede configurarse en forma estática o en forma dinámica. Indique ventajas y desventajas de cada método`

<table>
<tr><td>Ruteo Estático</td><td>Ruteo Dinámico</td></tr>

<tr><td>

El ruteo estático es un método donde las rutas a través de una red se configuran manualmente en los routers por los administradores de red. Las rutas permanecen constantes hasta que se cambian manualmente, lo que hace que este método sea simple y predecible. No utiliza recursos de red adicionales para el intercambio de información de rutas, lo que lo hace más seguro y menos propenso a fallos automáticos, pero requiere una gestión cuidadosa y puede ser impracticable en redes grandes o en rápido cambio.
</td><td>

El ruteo dinámico utiliza protocolos de ruteo para permitir que los routers comuniquen entre sí la información sobre las rutas de manera automática. Los protocolos más comunes incluyen RIP, OSPF y BGP. Este método permite que la red se adapte automáticamente a los cambios, como fallas en los enlaces o cambios en la topología de la red, sin intervención manual. Aunque es más complejo de configurar inicialmente y utiliza más recursos del sistema, el ruteo dinámico escala eficazmente para redes grandes y cambiantes.
</td></tr>
</table>


En las redes IP, la configuración del ruteo puede realizarse de manera estática o dinámica, cada uno con sus propias ventajas y desventajas. Aquí se detallan las características principales de cada método:

`Ruteo Estático`

**Ventajas:**
1. **Simplicidad:** La configuración estática es más simple y fácil de implementar en redes pequeñas donde las rutas no cambian frecuentemente.
2. **Control:** Ofrece un control total sobre las rutas que los paquetes deben seguir, permitiendo a los administradores de red definir explícitamente el camino más óptimo.
3. **Seguridad:** Al no utilizar intercambios de información de ruteo con otros routers, reduce la posibilidad de problemas de seguridad relacionados con protocolos de ruteo.

**Desventajas:**
1. **Escalabilidad:** No es adecuado para redes grandes y dinámicas donde los cambios son frecuentes, ya que cualquier cambio requiere una reconfiguración manual.
2. **Falta de Flexibilidad:** No puede responder automáticamente a cambios en la red, como fallas de enlaces o cambios en la topología.
3. **Mantenimiento:** Requiere una administración manual intensiva, lo que puede ser propenso a errores y consume tiempo.

`Ruteo Dinámico`

**Ventajas:**
1. **Adaptabilidad:** Capaz de ajustarse automáticamente a cambios en la red, como la adición de rutas nuevas o fallas en los enlaces.
2. **Menor Carga Administrativa:** Una vez configurados, los protocolos de ruteo dinámico mantienen las tablas de ruteo actualizadas sin intervención manual.
3. **Escalabilidad:** Ideal para redes grandes y en constante cambio debido a su capacidad para manejar complejidades y cambios sin intervención humana directa.

**Desventajas:**
1. **Complejidad:** Los protocolos de ruteo dinámico son más complejos de configurar y requieren un entendimiento profundo de cómo funcionan para optimizar su rendimiento.
2. **Recursos:** Utilizan más recursos del sistema, como CPU y memoria, debido al procesamiento de algoritmos de ruteo y al intercambio de información de ruteo.
3. **Seguridad:** Más susceptibles a ataques de seguridad, como falsificación de rutas o inundación de la red con rutas inútiles.

`Conclusión`

La elección entre ruteo estático y dinámico depende de las necesidades específicas de la red, la experiencia del administrador de la red, y los recursos disponibles. En redes pequeñas y estáticas, el ruteo estático puede ser más eficiente y fácil de manejar. En cambio, en redes grandes y complejas, el ruteo dinámico ofrece la flexibilidad y escalabilidad necesarias para mantener la red operando eficientemente ante cualquier cambio.


---

### Ejercicio 4

`Una máquina conectada a una red pero no a Internet, ¿tiene tabla de ruteo?`

Sí, una máquina conectada a una red pero no a Internet todavía tiene una tabla de ruteo. Esta tabla es fundamental para el funcionamiento de la red, incluso si la red es local y no tiene acceso a Internet. Aquí te explico por qué:

`Función de la Tabla de Ruteo`

1. **Enrutamiento de Tráfico Local:**
   - La tabla de ruteo en una máquina controla cómo se envían los paquetes de datos desde esa máquina a otras direcciones dentro de la misma red. Incluso en una red cerrada (sin acceso a Internet), los dispositivos necesitan saber cómo llegar a otros dispositivos dentro de la misma red.

2. **Gestión de Subredes:**
   - Si la red local consta de múltiples subredes, la tabla de ruteo ayudará a dirigir el tráfico entre estas subredes de manera efectiva.

3. **Interfaz de Loopback y Direcciones Locales:**
   - Las tablas de ruteo también gestionan el tráfico destinado a la interfaz de loopback de la propia máquina (usualmente 127.0.0.1, que es utilizada para pruebas y procesos internos del sistema).

4. **Rutas Predeterminadas:**
   - Incluso sin acceso a Internet, una tabla de ruteo puede contener una ruta predeterminada (gateway) que se utilizaría para intentar enviar tráfico a direcciones fuera de la red local conocida.

`Ejemplo de Tabla de Ruteo`

En una máquina con Windows o Linux, la tabla de ruteo puede incluir entradas como:
- Rutas a la subred local, que dirigen el tráfico a direcciones dentro de la misma subred.
- Una ruta de loopback, que maneja el tráfico destinado a la propia máquina.
- Opcionalmente, una ruta predeterminada que apuntaría a un router o gateway, aunque no lleve a Internet.

`Cómo Verificar la Tabla de Ruteo`

Puedes verificar la tabla de ruteo de una máquina usando comandos en el terminal:
- En Windows: `route print`
- En Linux: `ip route show`

Estos comandos mostrarán todas las rutas activas y cómo la máquina maneja el tráfico de red, independientemente de si tiene acceso a Internet o no. Esto demuestra que la tabla de ruteo es una parte integral de la configuración de red de cualquier dispositivo conectado a una red, ayudando a manejar el tráfico eficientemente dentro de los límites de esa red.

---

### Ejercicio 5

Observando el siguiente gráfico y la tabla de ruteo del router D, responder:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b22342d1-d4d4-4b47-a5f3-0b321aa25ca1)

#### a. ¿Está correcta esa tabla de ruteo? 

No

#### En caso de no estarlo, indicar el o los errores encontrados.

`Detalle de Entradas de la Tabla de Ruteo de Router-D`

1. **Red Destino: 153.10.20.128/27**
   - **Iface:** eth1
   - **Error:** No hay error evidente; esta red está correctamente señalada como directamente conectada a través de eth1.

2. **Red Destino: 10.0.0.4/30**
   - **Iface:** eth0
   - **Error:** Esta ruta aparece sin un next-hop definido. Debería especificar a través de qué router o interfaz específica se debe encaminar el tráfico para llegar a esta red. Además, no parece haber una conexión directa en la topología proporcionada que justifique esta configuración.

3. **Red Destino: 10.0.0.0/30**
   - **Iface:** eth5
   - **Error:** Esta entrada indica que la red está directamente conectada a eth5, lo cual es incorrecto según la topología. No hay conexión directa que justifique esta configuración.

4. **Red Destino: 10.0.0.12/30**
   - **Next-Hop:** 10.0.0.5/30
   - **Iface:** eth0
   - **Error:** El formato del next-hop está incorrectamente expresado con una máscara (/30) que no debería aparecer en un campo de next-hop. Además, según la topología, no parece haber una justificación para que esta ruta utilice eth0, y la conexión parece no existir.

5. **Red Destino: 10.0.0.16/30**
   - **Next-Hop:** 10.0.0.10
   - **Iface:** eth3
   - **Error:** Aunque el next-hop y la interfaz parecen razonables, la topología no muestra claramente esta conexión. Se necesita verificar si este enlace realmente existe.

6. **Red Destino: 10.0.0.8/30**
   - **Next-Hop:** 10.0.0.9
   - **Iface:** eth5
   - **Error:** Esta configuración parece correcta si asumimos que Router-D se conecta directamente a través de eth5 hacia Router-B, lo cual es coherente con la topología.

7. **Red Destino: 205.10.0.128/25**
   - **Next-Hop:** 10.0.0.2
   - **Iface:** eth5
   - **Error:** Parece haber un error en la asignación del next-hop. Este no es visible en la topología proporcionada y debe ser revisado para asegurar que la ruta es factible.

8. **Red Destino: 205.20.0.192/26**
   - **Next-Hop:** 10.0.0.1
   - **Iface:** eth5
   - **Error:** Similar al anterior, el next-hop listado no es claro según la topología, y la interfaz parece ser incorrectamente asignada o la conexión no está bien documentada en el diagrama.

9. **Red Destino: 163.10.5.64/27**
   - **Next-Hop:** 10.0.0.10
   - **Iface:** eth3
   - **Error:** Aunque parece que el next-hop podría ser correcto, no hay evidencia clara en la topología de que esta conexión a través de eth3 sea la adecuada.

`Recomendaciones:`

- **Revisión de la Topología:** Es fundamental revisar la documentación de la red y confirmar las conexiones físicas y lógicas entre los routers y las redes.
- **Corrección de Next-Hops y Interfaces:** Asegurarse de que cada entrada de la tabla de ruteo tenga el next-hop y la interfaz correctos conforme a la topología real y las conexiones disponibles.
- **Validación de Conectividad:** Comprobar mediante herramientas de diagnóstico como ping o traceroute que las rutas configuradas son efectivamente alcanzables y funcionales.

Estos pasos ayudarán a asegurar que la red funcione de manera óptima y que el tráfico sea encaminado eficientemente a través de las rutas disponibles.

#### Escribir la tabla correctamente (no es necesario agregar las redes que conectan contra los ISPs)

| Red Destino       | Máscara | Next-Hop    | Interfaz |
|-------------------|---------|-------------|----------|
| 153.10.20.128     | /27     | -           | eth1     |
| 10.0.0.4          | /30     | -           | eth5     |
| 10.0.0.0          | /30     | 10.0.0.5    | eth5     |
| 10.0.0.12         | /30     | 10.0.0.5    | eth0     |
| 10.0.0.16         | /30     | 10.0.0.10   | eth3     |
| 205.10.128.0      | /25     | 10.0.0.2    | eth5     |
| 205.20.192.0      | /26     | 10.0.0.1    | eth5     |
| 205.20.128.0      | /26     | 10.0.0.5    | eth0     |
| 163.10.5.64       | /27     | 10.0.0.10   | eth3     |

Para corregir la tabla de ruteo del Router-D, debemos asegurarnos de que cada entrada refleje correctamente las conexiones físicas y lógicas mostradas en la topología de la red proporcionada. Vamos a revisar y ajustar la tabla de ruteo basándonos en la información correcta, incluyendo la configuración adecuada de las interfaces y los next-hops.

### Tabla de Ruteo Corregida para Router-D:

| Red Destino      | Máscara | Next-Hop    | Iface  |
|------------------|---------|-------------|--------|
| 153.10.20.128/27 | /27     | -           | eth1   |
| 10.0.0.0/30      | /30     | 10.0.0.9    | eth5   |
| 10.0.0.4/30      | /30     | 10.0.0.1    | eth5   |
| 10.0.0.8/30      | /30     | 10.0.0.5    | eth3   |
| 10.0.0.12/30     | /30     | 10.0.0.13   | eth3   |
| 10.0.0.16/30     | /30     | 10.0.0.17   | eth0   |
| 205.20.0.192/26  | /26     | 10.0.0.2    | eth5   |
| 205.10.0.128/25  | /25     | 10.0.0.2    | eth5   |
| 163.10.5.64/27   | /27     | 10.0.0.10   | eth3   |

### Explicación de los Cambios:

1. **153.10.20.128/27**: No se necesita cambiar; está directamente conectado a `eth1`.

2. **10.0.0.0/30 hasta 10.0.0.16/30**: Se ajustaron los next-hops para reflejar las conexiones entre los routers según la topología:
   - **10.0.0.0/30**: Cambiado a `10.0.0.9` via `eth5`, ya que en la topología parece que este segmento se comunica a través de Router-C.
   - **10.0.0.4/30**: Ajustado a `10.0.0.1` via `eth5`, conectando a través de otro router intermedio que no se muestra detalladamente.
   - **10.0.0.8/30**: Ajustado a `10.0.0.5` via `eth3`, que es la interfaz de conexión entre Router-D y Router-C.
   - **10.0.0.12/30**: Ajustado a `10.0.0.13` via `eth3`.
   - **10.0.0.16/30**: Cambiado a `10.0.0.17` via `eth0`, indicando que es directamente conectado.

3. **205.20.0.192/26 y 205.10.0.128/25**: Ajustado para mostrar el next-hop correcto a `10.0.0.2` vía `eth5`, indicando la ruta hacia estas redes a través de un router específico que maneja esa dirección.

4. **163.10.5.64/27**: No se necesita cambio; se confirma que la ruta es `10.0.0.10` via `eth3`.

Esta tabla ajustada proporciona un mejor reflejo de la topología física y las conexiones entre dispositivos en la red, asegurando que el tráfico se enrute eficientemente entre las subredes y los routers mostrados en el diagrama.


> TENGO QUE PREGUNTAR UN MONTON DE COSAS

#### b. Con la tabla de ruteo del punto anterior, Red D, ¿tiene salida a Internet? ¿Por qué?

#### ¿Cómo lo solucionaría? Suponga que los demás routers están correctamente configurados, con salida a Internet y que Rtr-D debe salir a Internet por Rtr-C

Según la tabla de ruteo proporcionada y la topología, el router D (Rtr-D) **no tiene una ruta directa configurada para acceder a Internet**. Esto se debe a que en la tabla de ruteo no se observa ninguna entrada que dirija el tráfico hacia las direcciones IP de los ISP o una ruta predeterminada (default gateway) que permitiría al tráfico destinado a redes desconocidas ser dirigido hacia el ISP.

`Solución:`

Para permitir que el Rtr-D tenga acceso a Internet a través de Rtr-C, necesitarías añadir una ruta predeterminada (default route) en la configuración de Rtr-D. Esto dirige todo el tráfico destinado a redes no especificadas directamente en la tabla de ruteo hacia un next-hop específico, que en este caso sería Rtr-C.

1. **Agregar una ruta predeterminada:** Deberías configurar una ruta predeterminada en Rtr-D que apunte a la dirección IP de Rtr-C que está directamente conectada a Rtr-D o accesible a través de un next-hop que sea alcanzable. Basándonos en la topología y suponiendo que las conexiones están configuradas correctamente entre los routers, un ejemplo de comando para configurar esto en el router D podría ser (este ejemplo podría variar según el hardware y software del router):

   ```bash
   ip route add default via [IP de Rtr-C conectada a Rtr-D]
   ```

   Donde `[IP de Rtr-C conectada a Rtr-D]` debería ser reemplazado por la dirección IP de la interfaz de Rtr-C que Rtr-D puede alcanzar.

2. **Confirmación:** Después de agregar la ruta predeterminada, asegúrate de que el tráfico pueda pasar efectivamente a través de Rtr-C hacia el ISP. Esto puede implicar configurar o verificar las rutas en Rtr-C para asegurar que el tráfico proveniente de Rtr-D pueda llegar a Internet y viceversa.

Agregar esta ruta asegura que cualquier solicitud de Rtr-D hacia Internet que no coincida con las redes más específicas en la tabla de ruteo local sea enviada a Rtr-C, y desde allí hacia el ISP correspondiente.


#### c. Teniendo en cuenta lo aplicado en el punto anterior, si Rtr-C tuviese la siguiente entrada en su tabla de ruteo, ¿qué sucedería si desde una PC en Red D se quiere acceder un servidor con IP 163.10.5.15?

```bash
Red Destino Mask Next-Hop Iface
163.10.5.0 /24 10.0.0.9 eth1
```

Si desde una PC en Red D se intenta acceder a un servidor con IP 163.10.5.15 y Rtr-C tiene la siguiente entrada en su tabla de ruteo:

| Red Destino  | Mask  | Next-Hop | Iface |
|--------------|-------|----------|-------|
| 163.10.5.0   | /24   | 10.0.0.9 | eth1  |

`Análisis de la situación:`

1. **Dirección de Destino**: La IP 163.10.5.15 cae dentro del rango de la red 163.10.5.0/24, que está explícitamente mencionada en la tabla de ruteo de Rtr-C.

2. **Configuración de la Ruta**: La ruta indica que el tráfico destinado a la red 163.10.5.0/24 debería ser dirigido al next-hop 10.0.0.9 a través de la interfaz eth1.

3. **Verificación del Next-Hop**: El next-hop 10.0.0.9 necesita ser una dirección IP válida y alcanzable desde Rtr-C. Si esta dirección IP no es alcanzable (es decir, si no hay una ruta válida hacia 10.0.0.9 desde Rtr-C o si esta IP no existe en la configuración de red actual), el tráfico destinado al servidor 163.10.5.15 no podrá ser entregado correctamente.

4. **Posibles Problemas**:
   - **Inaccesibilidad del Next-Hop**: Si el next-hop 10.0.0.9 no es accesible desde Rtr-C, cualquier intento de conexión desde Red D hacia la dirección 163.10.5.15 fallaría.
   - **Configuración de Red Incorrecta**: Si hay un error en la topología o configuración de la red que impide el acceso al next-hop especificado, se producirá un fallo en el enrutamiento.

`Posibles Soluciones:`

- **Verificar y Corregir la Ruta en Rtr-C**: Asegurarse de que la dirección IP de next-hop 10.0.0.9 es correcta y accesible. Si es incorrecta o inaccesible, ajustar la entrada de ruteo para reflejar una dirección de next-hop válida y alcanzable.
- **Diagnóstico de Red**: Utilizar herramientas como `ping` o `traceroute` desde Rtr-C hacia 10.0.0.9 para verificar la conectividad y determinar si el next-hop está efectivamente en la ruta de transmisión del tráfico.

Si se resuelven estos problemas y se asegura que el next-hop es correcto y accesible, el tráfico desde una PC en Red D debería poder alcanzar el servidor en la dirección 163.10.5.15 sin problemas.

#### d. ¿Es posible aplicar sumarización en la tabla del router Rtr-D? ¿Por qué? ¿Qué debería suceder para poder aplicarla?

**Sumarización de Rutas**

La sumarización de rutas en redes es una técnica utilizada para reducir el número de rutas que un router necesita almacenar en su tabla de ruteo. Esto se logra mediante la combinación de varias redes más pequeñas en una única entrada de ruteo más grande y más general que abarca todas las redes individuales. La sumarización es útil porque:

1. **Reduce el tamaño de la tabla de ruteo**: Menos entradas en la tabla de ruteo implican menos uso de memoria y procesamiento.
2. **Mejora la eficiencia del enrutamiento**: Menos entradas simplifican el proceso de toma de decisiones de enrutamiento.
3. **Disminuye la propagación de cambios de ruteo**: Menos entradas reducen la cantidad de actualizaciones de rutas necesarias cuando ocurren cambios en la red.

`Aplicación de la Sumarización en Rtr-D`

Para determinar si es posible aplicar la sumarización en la tabla de ruteo del router Rtr-D, consideramos las redes que Rtr-D conoce y cómo están distribuidas. Observando las redes conectadas y las direcciones de los enlaces:

- **Redes Directamente Conectadas**:
  - 10.0.0.4/30
  - 10.0.0.8/30
  - 10.0.0.12/30
  - 10.0.0.16/30
- **Redes a través de Next-Hops**:
  - 205.10.128.0/25
  - 205.20.192.0/26
  - 163.10.5.64/27

`Pasos para Evaluar la Sumarización:`

1. **Examinar Direcciones IP**: Verificar si las redes están en bloques contiguos que puedan ser representados por una única dirección de red con una máscara de subred más amplia. Por ejemplo, las redes 10.0.0.4/30, 10.0.0.8/30, 10.0.0.12/30 y 10.0.0.16/30 son contiguas y podrían sumarizarse en una red más grande si sus direcciones base se ajustan a una sola red con una máscara que cubra todos esos rangos.
  
2. **Ajustar la Máscara de Subred**: Determinar la nueva máscara de subred que pueda englobar todas las redes relevantes. En el caso de las redes 10.0.0.4/30 a 10.0.0.16/30, podrían sumarizarse bajo una máscara /29 si cubre desde 10.0.0.4 hasta 10.0.0.19.

3. **Modificar las Tablas de Ruteo**: Cambiar las entradas individuales por la entrada sumarizada en la tabla de ruteo del Rtr-D y asegurarse de que los next-hops sean coherentes y correctos para la nueva ruta sumarizada.

`Consideraciones:`

- **Consistencia**: Todas las rutas que se sumarizarán deben tener el mismo next-hop. Si las rutas sumarizadas van a diferentes next-hops, no pueden ser sumarizadas eficientemente.
- **Alcance de la Sumarización**: La sumarización debe hacerse de manera que no se superpongan con otras redes no relacionadas y debe reflejar correctamente la topología de la red.

Para aplicar la sumarización, se necesita que las redes a sumarizar tengan una secuencia y contigüidad lógica, y que no se interpongan configuraciones de otros routers que podrían requerir conocimiento de las redes individuales para procesos específicos de enrutamiento o políticas de seguridad. Si estas condiciones se cumplen, se puede aplicar la sumarización para simplificar la gestión de la red en Rtr-D.

#### e. La sumarización aplicada en el punto anterior, ¿se podría aplicar en Rtr-B? ¿Por qué?

La posibilidad de aplicar sumarización en Rtr-B, al igual que en cualquier otro router, depende de cómo estén organizadas las redes conectadas y cómo estén distribuidas las direcciones IP en la tabla de ruteo. Vamos a analizar los elementos específicos en Rtr-B para determinar si la sumarización es viable:

`Consideraciones para Sumarización en Rtr-B`

- **Redes Directamente Conectadas**:
  - Rtr-B conecta directamente con la Red B y Red E, además de enlaces punto a punto con otros routers.

- **Distribución de Direcciones IP**:
  - Red B: 205.20.0.192/26
  - Red E: 205.20.0.128/26
  - Enlaces punto a punto, como por ejemplo 10.0.0.12/30, 10.0.0.4/30, entre otros.

`Análisis para Sumarización:`

1. **Contigüidad de Redes**:
   - Las direcciones de Red B y Red E son contiguas y parte del mismo bloque /24, pero las máscaras de subred y la distribución de las redes hacen que una sumarización directa no sea completamente eficiente, ya que no todas las direcciones de la subred más grande están utilizadas.

2. **Requerimientos de Ruteo**:
   - Las redes de Rtr-B podrían necesitar acceso directo y explícito a ciertas direcciones IP específicas, lo cual podría complicar una sumarización que generalize demasiado las rutas.

3. **Efecto en el Enrutamiento**:
   - Sumarizar en Rtr-B podría simplificar la tabla de ruteo local, pero es esencial asegurarse de que todos los caminos críticos y las políticas de acceso están adecuadamente representados en la nueva tabla de ruteo sumarizada. Además, la sumarización incorrecta podría ocultar rutas necesarias para otros routers y hosts en la red.

`Conclusión:`

La sumarización en Rtr-B es técnicamente posible, especialmente para las redes internas (Red B y Red E), pero debe manejarse con cuidado para asegurarse de que no se pierda acceso detallado necesario para el control de tráfico y las políticas de seguridad de la red. También es crucial considerar cómo esta sumarización afectaría el enrutamiento hacia y desde otros routers y redes externas.

En resumen, mientras que Rtr-D tiene un escenario más favorable para la sumarización debido a la concentración de redes internas similares y conexiones punto a punto, Rtr-B puede enfrentar más desafíos debido a la necesidad de mantener accesibilidad precisa a múltiples subredes menores y enlaces externos.

#### f. Escriba la tabla de ruteo de Rtr-B teniendo en cuenta lo siguiente:
- Debe llegarse a todas las redes del gráfico
- Debe salir a Internet por Rtr-A
- Debe pasar por Rtr-D para llegar a Red D
- Sumarizar si es posible

| Red Destino     | Máscara | Next-Hop    | Iface  |
|-----------------|---------|-------------|--------|
| 0.0.0.0/0       | /0      | 10.0.0.1    | eth1   |  # Default route hacia Internet via Rtr-A
| 153.10.20.128/27| /27     | 10.0.0.5    | eth0   |  # Red D via Rtr-D
| 163.10.5.64/27  | /27     | 10.0.0.9    | eth0   |  # Red C via Rtr-C
| 205.10.0.128/25 | /25     | 10.0.0.1    | eth1   |  # Red A via Rtr-A
| 205.20.0.192/26 | /26     | -           | eth0   |  # Red B directamente conectada
| 205.20.0.128/26 | /26     | 10.0.0.5    | eth0   |  # Red E via Rtr-D


`Explicación de la tabla de ruteo:`

1. **0.0.0.0/0**: La ruta por defecto (default route) redirige todo el tráfico destinado a Internet a través de Rtr-A, que está configurado para ser el gateway de salida a Internet.

2. **153.10.20.128/27**: Las direcciones IP dentro de esta subred se alcanzan a través de Rtr-D. Esta ruta es específica para alcanzar la Red D y está encaminada a través de la interfaz que conecta con Rtr-D.

3. **163.10.5.64/27**: Similarmente, esta ruta permite el acceso a la Red C, encaminando el tráfico a través de Rtr-C, que es el router que conecta directamente con esa subred.

4. **205.10.0.128/25**: Esta es la ruta hacia la Red A, que se alcanza a través de Rtr-A, indicando que cualquier paquete destinado a esa red debe ser enviado a través de la interfaz que se conecta con Rtr-A.

5. **205.20.0.192/26**: Esta entrada indica que la Red B está directamente conectada al Rtr-B y por lo tanto no requiere un next-hop porque los dispositivos están en la misma red local.

6. **205.20.0.128/26**: La Red E también se alcanza a través de Rtr-D, utilizando la misma interfaz que se usa para alcanzar la Red D.

Esta configuración asegura que el tráfico fluya correctamente hacia todas las redes internas y hacia Internet, siguiendo las rutas más directas o especificadas según la topología dada.

#### g. Si Rtr-C pierde conectividad contra ISP-2, ¿es posible restablecer el acceso a Internet sin esperar a que vuelva la conectividad entre esos dispositivos?

Para restablecer el acceso a Internet en Rtr-C después de perder conectividad con ISP-2, se podría considerar una ruta alternativa a través de otro ISP o router disponible en la red, si existe alguno. En el caso de esta topología, aquí están los pasos para redirigir el tráfico a través de ISP-1 utilizando Rtr-A:

1. **Configuración de Rtr-C**: Rtr-C necesitaría una ruta de respaldo configurada que apunte hacia Rtr-A para acceder a Internet a través de ISP-1. Esto implicaría ajustar la tabla de ruteo de Rtr-C para incluir una nueva entrada de ruta por defecto (0.0.0.0/0) con Rtr-A como next-hop si aún no existe.

2. **Configuración de Rtr-A**: Asegurarse de que Rtr-A tiene capacidad para manejar el tráfico adicional y que sus tablas de ruteo están configuradas para permitir el tráfico de Rtr-C hacia ISP-1.

3. **Configuración del protocolo de enrutamiento**: Si se utilizan protocolos de enrutamiento dinámico (como OSPF, EIGRP, BGP), se deberían hacer los ajustes necesarios para propagar la nueva ruta a través de la red.

4. **Validación y pruebas**: Realizar pruebas para asegurar que el tráfico está siendo enrutado correctamente a través de Rtr-A hacia ISP-1 y que los servicios de Internet se restauran sin problemas.

5. **Monitorización**: Monitorear la red para cualquier problema de rendimiento o cuellos de botella que puedan surgir debido al cambio de ruta, especialmente si Rtr-A no estaba previamente dimensionado para manejar todo el tráfico de Internet de Rtr-C.

Implementar una solución de redundancia de este tipo mejora la resiliencia de la red y minimiza el tiempo de inactividad ante fallos en uno de los enlaces de salida a Internet.

---

### Ejercicio 6

Evalúe para cada caso si el mensaje llegará a destino, saltos que tomará y tipo de respuesta recibida en el emisor

#### Router 1 route -n

| Destination | Gateway  | Genmask        | Iface |
|-------------|----------|----------------|-------|
| 10.0.0.0    | 0.0.0.0  | 255.255.255.0  | eth0  |
| 10.0.3.0    | 0.0.0.0  | 255.255.255.0  | eth1  |
| 10.0.4.0    | 0.0.0.0  | 255.255.255.0  | eth2  |
| 10.0.0.0    | 10.0.3.1 | 255.255.0.0    | eth1  |
| 0.0.0.0     | 10.0.0.2 | 0.0.0.0        | eth0  |

#### Router 2 route -n


| Destination | Gateway  | Genmask          | Iface |
|-------------|----------|------------------|-------|
| 10.0.0.0    | 0.0.0.0  | 255.255.255.0    | eth0  |
| 10.0.1.0    | 0.0.0.0  | 255.255.255.0    | eth1  |
| 10.0.5.0    | 0.0.0.0  | 255.255.255.0    | eth2  |
| 0.0.0.0     | 10.0.0.1 | 0.0.0.0          | eth0  |

#### Router 3 route -n

| Destination | Gateway   | Genmask        | Iface |
|-------------|-----------|----------------|-------|
| 10.0.2.0    | 0.0.0.0   | 255.255.255.0  | eth0  |
| 10.0.3.0    | 0.0.0.0   | 255.255.255.0  | eth1  |
| 10.0.7.0    | 0.0.0.0   | 255.255.255.0  | eth2  |
| 0.0.0.0     | 10.0.2.1  | 0.0.0.0        | eth0  |

#### Router 4 route -n

| Destination | Gateway   | Genmask        | Iface |
|-------------|-----------|----------------|-------|
| 10.0.1.0    | 0.0.0.0   | 255.255.255.0  | eth0  |
| 10.0.2.0    | 0.0.0.0   | 255.255.255.0  | eth1  |
| 10.0.6.0    | 0.0.0.0   | 255.255.255.0  | eth2  |
| 0.0.0.0     | 10.0.1.1  | 255.0.0.0      | eth0  |

Evalúe para cada caso si el mensaje llegará a destino, saltos que tomará y tipo de respuesta recibida en el emisor.


![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9e98fc68-0ac8-4a14-956c-33ac657237fa)

- Un mensaje ICMP enviado por PC-B a PC-C.
- Un mensaje ICMP enviado por PC-C a PC-B.
- Un mensaje ICMP enviado por PC-C a 8.8.8.8.
- Un mensaje ICMP enviado por PC-B a 8.8.8.8.

Gracias por el gráfico más claro. Ahora, con esta información y las correcciones indicadas anteriormente, vamos a revisar y responder tus consultas sobre el tráfico entre PC-B y PC-C, y sus conexiones a Internet.

`Un mensaje ICMP enviado por PC-B a PC-C:`

1. **Ruta del mensaje**: PC-B -> Router2 -> Router4 -> PC-C.
2. **Tipo de respuesta en el emisor**: PC-B recibirá una respuesta de eco ICMP si la configuración de las redes permite la comunicación directa y no hay reglas de firewall que lo impidan.

`Un mensaje ICMP enviado por PC-C a PC-B:`

1. **Ruta del mensaje**: PC-C -> Router4 -> Router2 -> PC-B.
2. **Tipo de respuesta en el emisor**: PC-C recibirá una respuesta de eco ICMP de manera similar, asumiendo que no existen bloqueos en la ruta.

`Un mensaje ICMP enviado por PC-C a 8.8.8.8:`

1. **Ruta del mensaje**: PC-C -> Router4 -> Router2 -> Router1 -> Internet.
2. **Tipo de respuesta en el emisor**: Si la red está correctamente configurada para salida a Internet y las rutas están correctamente establecidas hacia ISP-1 o ISP-2, PC-C debería poder recibir una respuesta de eco ICMP de 8.8.8.8, suponiendo que no haya bloqueos en la ruta.

`Un mensaje ICMP enviado por PC-B a 8.8.8.8:`

1. **Ruta del mensaje**: PC-B -> Router2 -> Router1 -> Internet.
2. **Tipo de respuesta en el emisor**: De manera similar a PC-C, PC-B debería recibir una respuesta siempre que las rutas estén correctamente configuradas y no existan bloqueos.

Es crucial que las tablas de enrutamiento en cada router estén configuradas correctamente para asegurar que todos los tráficos fluyan adecuadamente y se enrutencen hacia los destinos correctos. La configuración de las tablas de enrutamiento que proporcioné anteriormente y cualquier ajuste necesario basado en la nueva información del gráfico deberían ayudar a garantizar la conectividad deseada.


---

## DHCP y NAT

### Ejercicio 7

Con la máquina virtual con acceso a Internet realice las siguientes observacionesrespecto de la autoconfiguración IP vía DHCP:

#### a. Inicie una captura de tráfico Wireshark utilizando el filtro bootp para visualizar únicamente tráfico de DHCP.

```sh
redes@debian:~$ sudo dhclient -r
redes@debian:~$ sudo dhclient -v
Internet Systems Consortium DHCP Client 4.4.1
Copyright 2004-2018 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

Listening on LPF/veth4976b9c/36:ad:a6:94:34:78
Sending on   LPF/veth4976b9c/36:ad:a6:94:34:78
Listening on LPF/vethbcd283a/8a:11:86:ee:91:f4
Sending on   LPF/vethbcd283a/8a:11:86:ee:91:f4
Listening on LPF/veth399a010/56:5f:67:57:11:a0
Sending on   LPF/veth399a010/56:5f:67:57:11:a0
Listening on LPF/veth5d6224c/92:17:59:53:d1:6b
Sending on   LPF/veth5d6224c/92:17:59:53:d1:6b
Listening on LPF/docker0/02:42:a7:c8:88:ce
Sending on   LPF/docker0/02:42:a7:c8:88:ce
Listening on LPF/br-c8ee5a5c812e/02:42:e3:95:9b:6c
Sending on   LPF/br-c8ee5a5c812e/02:42:e3:95:9b:6c
Listening on LPF/enp0s3/08:00:27:4e:7c:74
Sending on   LPF/enp0s3/08:00:27:4e:7c:74
Sending on   Socket/fallback
DHCPDISCOVER on veth4976b9c to 255.255.255.255 port 67 interval 4
DHCPDISCOVER on vethbcd283a to 255.255.255.255 port 67 interval 6
DHCPDISCOVER on veth399a010 to 255.255.255.255 port 67 interval 8
DHCPDISCOVER on veth5d6224c to 255.255.255.255 port 67 interval 4
DHCPDISCOVER on docker0 to 255.255.255.255 port 67 interval 4
DHCPDISCOVER on br-c8ee5a5c812e to 255.255.255.255 port 67 interval 5
DHCPDISCOVER on enp0s3 to 255.255.255.255 port 67 interval 4
DHCPOFFER of 10.0.2.15 from 10.0.2.2
DHCPREQUEST for 10.0.2.15 on enp0s3 to 255.255.255.255 port 67
DHCPACK of 10.0.2.15 from 10.0.2.2
RTNETLINK answers: File exists
bound to 10.0.2.15 -- renewal in 40680 seconds.
```

#### b. En una terminal de root, ejecute el comando | ESTE NO ME FUNCIONA

```bash
$ sudo /sbin/dhclient eth0
```
 y analice el intercambio de paquetes capturado

#### c. Analice la información registrada en el archivo /var/lib/dhcp/dhclient.leases, ¿cuál parece su función?

```bash
redes@debian:~$ cat /var/lib/dhcp/dhclient.leases
lease {
  interface "enp0s3";
  fixed-address 10.0.2.15;
  filename "Redes y Comunicaciones v22.2.pxe";
  option subnet-mask 255.255.255.0;
  option routers 10.0.2.2;
  option dhcp-lease-time 86400;
  option dhcp-message-type 5;
  option domain-name-servers 186.130.128.250,186.130.129.250;
  option dhcp-server-identifier 10.0.2.2;
  renew 1 2024/06/24 07:27:38;
  rebind 1 2024/06/24 17:09:38;
  expire 1 2024/06/24 20:09:38;
}
```

El archivo `/var/lib/dhcp/dhclient.leases` almacena los detalles de las concesiones (leases) de DHCP que ha recibido el cliente DHCP del sistema para sus interfaces de red. Cada concesión en este archivo representa un conjunto de parámetros de configuración de red asignados por un servidor DHCP. La función principal de este archivo es permitir que el cliente DHCP mantenga un registro de las concesiones activas y pasadas, y gestione la renovación, la nueva vinculación y la expiración de estas concesiones. Vamos a analizar la información mostrada en el archivo:

`Estructura de una Concesión DHCP`

1. **Interface**:
   - Indica la interfaz de red (`"enp0s3"`) para la cual se obtuvo la concesión DHCP. 

2. **Fixed-address**:
   - `fixed-address 10.0.2.15` especifica la dirección IP que el servidor DHCP ha asignado a la interfaz.

3. **Filename**:
   - El archivo `"Redes y Comunicaciones v22.2.pxe"` podría ser un archivo de configuración o un archivo de arranque que el servidor DHCP proporciona para procesos de arranque en red, como PXE (Preboot eXecution Environment).

4. **Options**:
   - **Subnet Mask**: `255.255.255.0` define la máscara de subred para la red de la IP asignada.
   - **Routers**: `10.0.2.2` es la dirección del router o gateway predeterminado para salir a otras redes.
   - **DHCP Lease Time**: `86400` segundos (24 horas) es el tiempo de validez de la concesión antes de que deba renovarse.
   - **DHCP Message Type**: `5` indica que este mensaje es una confirmación (ACK) de la concesión.
   - **Domain Name Servers**: Lista los servidores DNS (`186.130.128.250, 186.130.129.250`) proporcionados para la resolución de nombres de dominio.

5. **Timing**:
   - **Renew**: `1 2024/06/24 07:27:38` indica cuándo el cliente intentará renovar esta concesión (antes de que expire).
   - **Rebind**: `1 2024/06/24 17:09:38` indica cuándo el cliente intentará contactar cualquier servidor DHCP para renovar la concesión si no ha conseguido renovarla con el servidor original.
   - **Expire**: `1 2024/06/24 20:09:38` indica cuándo la concesión expirará y la dirección IP deberá ser liberada si no se ha renovado.

`Función del Archivo`

El archivo `dhclient.leases` sirve para:
- **Mantener la Configuración de Red**: Asegura que el cliente puede mantener su configuración de red entre reinicios o cuando el servidor DHCP no está disponible temporalmente.
- **Renovación Automática**: Facilita la automatización del proceso de renovación de la IP para mantener la conectividad de red sin intervención manual.
- **Registro de Actividad**: Proporciona un registro histórico de las asignaciones de IP y configuraciones de red recibidas y utilizadas por el cliente.

Este archivo es crucial para la gestión dinámica de la configuración de red en entornos donde las direcciones IP y otros parámetros de red pueden cambiar con frecuencia.


#### d. Ejecute el siguiente comando para eliminar información temporal asignada por el servidor DHCP.

```sh
$ rm /var/lib/dhcp/dhclient.leases
```

El comando `rm /var/lib/dhcp/dhclient.leases` se utiliza para eliminar el archivo `dhclient.leases`, que contiene las asignaciones de arrendamiento DHCP actuales y pasadas obtenidas por el cliente DHCP en el sistema. Este archivo almacena detalles críticos como la dirección IP asignada, la máscara de subred, la puerta de enlace predeterminada, los servidores DNS, y los tiempos de renovación y expiración del arrendamiento.

`Función del comando:`

1. **Eliminar información de arrendamiento**: Al eliminar este archivo, se borra toda la información sobre los arrendamientos DHCP anteriores y actuales. Esto significa que el cliente DHCP no tiene registro de las asignaciones anteriores.

2. **Reinicio de configuración DHCP**: La eliminación de este archivo puede ser útil si se están experimentando problemas con la configuración de red actual que se sospecha son causados por un arrendamiento DHCP corrupto o inadecuado. Al borrar este archivo y reiniciar el servicio de red o reiniciar el cliente DHCP, se fuerza al cliente a solicitar un nuevo arrendamiento, posiblemente resolviendo problemas de configuración.

3. **Renovación de configuración de red**: Es especialmente útil en escenarios donde la dirección IP o la configuración del servidor DHCP han cambiado. Al eliminar el archivo y reiniciar el servicio DHCP, se garantiza que el cliente solicite y reciba la configuración más actualizada basada en el estado actual del servidor DHCP.

`Consideraciones:`

- **Riesgo de Conectividad**: Eliminar este archivo mientras el sistema está en uso podría resultar en una pérdida temporal de conectividad de red hasta que el cliente DHCP adquiera un nuevo arrendamiento.
- **Necesidad de reinicio**: Después de eliminar el archivo, es recomendable reiniciar el servicio de red o el cliente DHCP para que inmediatamente intente obtener un nuevo arrendamiento DHCP.
- **Permisos**: Este comando debe ejecutarse con privilegios de superusuario (sudo), ya que los archivos en `/var/lib/dhcp/` generalmente están protegidos y solo accesibles para el usuario root.

Este procedimiento es una forma común de diagnosticar y resolver problemas de red relacionados con configuraciones DHCP obsoletas o incorrectas.

#### e. En una terminal de root, vuelva a ejecutar el comando $ sudo /sbin/dhclient eth0 y analice el intercambio de paquetes capturado nuevamente ¿a que se debió la diferencia con lo observado en el punto “b”?

Cuando se ejecuta el comando `sudo /sbin/dhclient eth0` después de haber eliminado el archivo de arrendamientos DHCP, el cliente DHCP comienza un nuevo proceso para obtener un arrendamiento de dirección IP desde el servidor DHCP. Dado que se ha eliminado el archivo de arrendamientos, el cliente actúa como si fuera la primera vez que solicita una dirección IP, sin ningún conocimiento de arrendamientos anteriores.

`Análisis del intercambio de paquetes capturado:`

1. **DHCPDISCOVER**: El cliente envía un mensaje DHCPDISCOVER en el que busca servidores DHCP disponibles en la red.
2. **DHCPOFFER**: Los servidores DHCP que reciben el DHCPDISCOVER responden con un DHCPOFFER, ofreciendo una dirección IP al cliente.
3. **DHCPREQUEST**: El cliente responde al servidor DHCP con un DHCPREQUEST, solicitando la dirección IP que se le ofreció.
4. **DHCPACK**: El servidor finaliza el proceso enviando un DHCPACK al cliente, confirmando que la dirección IP ha sido asignada al cliente.

La diferencia principal en este proceso, en comparación con el observado antes de eliminar el archivo `dhclient.leases`, es que todo el proceso de negociación DHCP se realiza desde cero, sin ningún contexto o estado anterior que pudiera influir en el proceso de asignación de IP.

#### f. Tanto en “b” como en “e”, ¿qué información es brindada al host que realiza la petición DHCP, además de la dirección IP que tiene que utilizar?

En ambas situaciones, es decir, en los intercambios iniciales y después de reiniciar el proceso DHCP, la información proporcionada al host incluye:

- **Dirección IP**: La dirección IP que el host debe usar.
- **Máscara de subred**: La máscara de red asociada a la dirección IP asignada.
- **Puerta de enlace predeterminada (routers)**: La dirección IP del router o gateway a través del cual el host puede alcanzar otras redes, incluida Internet.
- **Servidores DNS**: Direcciones IP de los servidores de nombres de dominio (DNS) que el host debe usar para la resolución de nombres de dominio.
- **Tiempo de arrendamiento**: La duración del arrendamiento de la dirección IP; después de este período, el cliente debe renovar el arrendamiento.
- **Otras opciones**: Dependiendo de la configuración del servidor DHCP, pueden incluirse opciones adicionales como el servidor de tiempo (NTP), el servidor WINS, el nombre de dominio, entre otros.

Este conjunto de información permite al host configurarse adecuadamente para la comunicación en la red y asegurar la conectividad y la resolución de nombres necesarias para operar eficazmente dentro de la red y en Internet.

---

### Ejercicio 8

`¿Qué es NAT y para qué sirve? De un ejemplo de su uso y analice cómo funcionaría en ese entorno.`

> Ayuda: analizar el servicio de Internet hogareño en el cual varios dispositivos usan Internet simultáneamente

#### ¿Qué es NAT?

**NAT** (Network Address Translation) es una técnica utilizada para remapear una dirección IP en una red interna a una dirección IP diferente en una red externa. El propósito principal de NAT es permitir que múltiples dispositivos en una red privada accedan a internet o a otra red utilizando una única dirección IP pública.

#### ¿Para qué sirve NAT?

NAT sirve principalmente para dos propósitos:
1. **Conservación de direcciones IP**: Debido a la escasez de direcciones IPv4, NAT permite que múltiples dispositivos compartan una única dirección IP pública, lo que reduce la necesidad de direcciones IP únicas para cada dispositivo en la red.
2. **Seguridad**: Al ocultar las direcciones IP internas de una red y permitiendo solo conexiones iniciadas internamente, NAT proporciona una capa de seguridad que protege a los dispositivos dentro de una red privada de accesos directos desde internet.

#### Ejemplo de uso de NAT

Un ejemplo común del uso de NAT es en un servicio de Internet hogareño. Consideremos un hogar donde varios dispositivos, como smartphones, tablets, y computadoras, necesitan acceder a internet simultáneamente. La mayoría de los hogares solo tienen una dirección IP pública asignada por su proveedor de servicios de Internet (ISP).

`Configuración`

- **Router**: Tiene una interfaz conectada a internet con una dirección IP pública (ej. 203.0.113.1) y otra interfaz que maneja la red local con una dirección privada (ej. 192.168.1.1).
- **Dispositivos**:
  - PC: 192.168.1.100
  - Smartphone: 192.168.1.101
  - Tablet: 192.168.1.102

`Funcionamiento de NAT en este entorno`

1. **Inicio de una conexión**:
   - Supongamos que la PC desea acceder a un sitio web. Envía un paquete IP donde la dirección de origen es 192.168.1.100 y la dirección de destino es la del servidor web.
2. **Traducción en el router**:
   - Cuando el paquete llega al router, NAT traduce la dirección IP origen interna (192.168.1.100) a la dirección IP pública del router (203.0.113.1). Además, el router cambia el número de puerto origen a un número único para mantener el seguimiento de la sesión (por ejemplo, de puerto 12345 a puerto 40001).
3. **Envío a internet**:
   - El paquete modificado, con la dirección origen como 203.0.113.1:40001, es enviado a internet hacia el servidor web.
4. **Respuesta del servidor web**:
   - El servidor web responde al paquete enviando la respuesta a la dirección IP pública del router (203.0.113.1) al puerto 40001.
5. **Reversión de la traducción en el router**:
   - Cuando el router recibe la respuesta, consulta la tabla NAT para determinar a qué dirección IP y puerto internos debe dirigir la respuesta. Reconoce que el puerto 40001 corresponde al dispositivo con IP 192.168.1.100.
6. **Envío al dispositivo interno**:
   - El router envía la respuesta al dispositivo original (PC) en la dirección 192.168.1.100, restableciendo los parámetros originales del paquete.

Este proceso permite que múltiples dispositivos utilicen simultáneamente la misma dirección IP pública sin conflictos, cada uno manteniendo sus propias sesiones únicas con servidores en internet, gracias a la traducción de direcciones y puertos realizada por NAT.

---

### Ejercicio 9

`¿Qué especifica la RFC 1918 y cómo se relaciona con NAT?`

`RFC 1918: Address Allocation for Private Internets`

La **RFC 1918**, titulada "Address Allocation for Private Internets", es un documento de la Internet Engineering Task Force (IETF) que especifica rangos de direcciones IP que están designados para uso privado dentro de redes corporativas, hogares y organizaciones, sin que estas direcciones sean enrutable en la internet pública global. Esta especificación fue publicada en febrero de 1996 para abordar y aliviar la escasez de direcciones IPv4, permitiendo a múltiples entidades usar la misma dirección IP sin conflicto en redes separadas.

`Rangos de Direcciones en RFC 1918`

La RFC 1918 define los siguientes rangos de direcciones IP que pueden ser utilizados en redes privadas:

- **10.0.0.0 - 10.255.255.255** (10/8 prefix)
  - Este rango permite casi 16.7 millones de direcciones IP y es comúnmente utilizado en redes de gran escala.

- **172.16.0.0 - 172.31.255.255** (172.16/12 prefix)
  - Este rango ofrece 1,048,576 direcciones IP, adecuado para uso en redes de tamaño medio a grande.

- **192.168.0.0 - 192.168.255.255** (192.168/16 prefix)
  - Con 65,536 direcciones disponibles, este rango es el más utilizado en redes domésticas y pequeñas oficinas.

`Relación de la RFC 1918 con NAT`

La relación entre la RFC 1918 y NAT (Network Address Translation) es intrínseca y vital por varias razones:

1. **Uso Compartido de Direcciones Públicas**:
   - Dado que las direcciones definidas en la RFC 1918 no son enrutables en Internet, NAT es necesario para permitir que dispositivos con estas direcciones privadas accedan a recursos en Internet. NAT traduce estas direcciones privadas a direcciones IP públicas válidas durante la comunicación a través de Internet, y viceversa.

2. **Conservación de Direcciones IP**:
   - NAT, junto con los rangos de la RFC 1918, permite que múltiples dispositivos compartan una única dirección IP pública. Esto es críticamente importante dada la limitación de direcciones IPv4 disponibles globalmente.

3. **Seguridad y Aislamiento**:
   - Las direcciones de la RFC 1918 son inherentemente más seguras desde el punto de vista de que no son accesibles directamente desde Internet. NAT proporciona un nivel adicional de seguridad al no exponer las direcciones IP internas al mundo exterior, actuando como un componente de una configuración de firewall.

4. **Flexibilidad en la Administración de Redes**:
   - Organizaciones y hogares pueden usar internamente cualquier estructura de direccionamiento IP de la RFC 1918 que deseen sin preocuparse por conflictos de direcciones con otras redes en Internet. Esto facilita la gestión de redes locales y la planificación de la expansión sin tener que solicitar más direcciones IP públicas.

`Uso Práctico`

En la práctica, casi cualquier red que accede a Internet usa NAT en combinación con direcciones IP de la RFC 1918 para optimizar el uso de las direcciones IP públicas disponibles, mantener la seguridad de la red y simplificar la administración de la red interna. Esto se implementa típicamente en routers residenciales, firewalls empresariales y en muchos otros dispositivos de red. 

En resumen, la RFC 1918 y NAT son fundamentales para el funcionamiento eficiente y seguro de redes privadas en el contexto de una infraestructura global de Internet limitada en términos de direcciones IP disponibles.

---

### Ejercicio 10

#### En la red de su casa o trabajo verifique la dirección IP de su computadora y luego acceda a www.cualesmiip.com. ¿Qué observa? ¿Puede explicar qué sucede?

Cuando verificas la dirección IP de tu computadora en la red de tu casa o trabajo, y luego comparas esa dirección con la que ves en un sitio como www.cualesmiip.com, es probable que observes dos direcciones IP diferentes. Aquí explicaré por qué sucede esto y qué significa:

`Verificación de la Dirección IP Local`

1. **En Windows**:
   - Puedes abrir el Símbolo del sistema (CMD) y escribir `ipconfig`. Esto mostrará la configuración de IP de todas las interfaces de red de tu computadora. La dirección IP que ves bajo "IPv4 Address" para tu conexión activa (por ejemplo, Ethernet o Wi-Fi) es la dirección IP privada asignada a tu computadora dentro de tu red local.

2. **En macOS**:
   - Abre Terminal y escribe `ifconfig`. Busca la interfaz activa (como en0 o en1 para Wi-Fi o Ethernet) y mira la entrada `inet`, que te dará la dirección IP privada de tu dispositivo.

`Comparación con www.cualesmiip.com`

Cuando visitas www.cualesmiip.com, el sitio muestra la dirección IP pública desde la cual tu tráfico de Internet parece estar originándose. Esta dirección es diferente de la dirección IP privada de tu computadora porque lo que estás viendo es la dirección IP que tu proveedor de Internet (ISP) asigna a tu conexión a Internet.

`¿Por Qué Son Diferentes?`

- **NAT (Network Address Translation)**:
  - En la mayoría de los hogares y pequeñas empresas, múltiples dispositivos (como tu computadora, teléfono y tablet) se conectan a Internet a través de un router que usa NAT. 
  - NAT permite que todos los dispositivos en tu red local compartan una única dirección IP pública para acceder a Internet, mientras que cada dispositivo tiene su propia dirección IP privada dentro de la red local.
  - Cuando accedes a un sitio como www.cualesmiip.com, el sitio no ve la dirección IP privada de tu computadora; en cambio, ve la dirección IP pública que tu ISP ha asignado a tu router.

`Ejemplo Práctico`

Supongamos que la dirección IP local de tu computadora es `192.168.1.10` y la dirección IP pública mostrada en www.cualesmiip.com es `203.0.113.45`. Aquí está lo que sucede:

- **Dentro de tu red**: Tu computadora usa `192.168.1.10` para comunicarse con otros dispositivos dentro de tu hogar o empresa, incluido tu router.
- **En Internet**: Tu router usa la dirección IP pública `203.0.113.45` para comunicarse con todos los sitios web y servicios en línea. Así que, cuando tu computadora envía una solicitud a Internet, el router traduce tu dirección IP privada a la dirección IP pública usando NAT, y esa es la dirección que ven los sitios web.

`Conclusión`

Este proceso ilustra cómo NAT facilita una gestión eficiente de las direcciones IP, permitiendo que múltiples dispositivos compartan una única dirección IP pública. Además, NAT ayuda a proteger tus dispositivos al ocultar las direcciones IP privadas de la exposición directa a Internet. Esto es especialmente importante en el contexto actual donde las direcciones IPv4 son limitadas y la seguridad de la red es crucial.

---

### Ejercicio 11

Resuelva las consignas que se dan a continuación.

#### a. En base a la siguiente topología y a las tablas que se muestran, complete los datos que faltan.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6bc539e2-37d7-43d8-95cf-26adf2ae2918)


<table>
<tr><td>

```bash
PC-A (ss)
Local Address:Port Peer Address:Port
192.168.1.2:49273 _________________
_________________ 190.50.10.63:25
192.168.1.2:_____ 190.50.10.81:8080
```
</td><td>

```bash
PC-B (ss)
Local Address:Port Peer Address:Port
192.168.1.3:52734 _________________
192.168.1.3:39275 _________________
```
</td></tr>
<tr><td>

```bash
SRV-A (ss)
Local Address:Port Peer Address:Port
190.50.10.63:80 205.20.0.29:25192
190.50.10.63:25 205.20.0.29:41823
```
</td><td>

```bash
SRV-B (ss)
Local Address:Port Peer Address:Port
190.50.10.81:8080 205.20.0.29:16345
190.50.10.81:8081 205.20.0.29:51091
190.50.10.81:8080 205.20.0.29:9123
```
</td></tr>
</table>



```bash
RTR-1 (Tabla de NAT)
Lado LAN Lado WAN
192.168.1.2:49273 205.20.0.29:25192
192.168.1.2:51238 _________________
192.168.1.3:52734 205.20.0.29:51091
192.168.1.2:37484 205.20.0.29:41823
192.168.1.3:39275 205.20.0.29:9123
```



`PC-A`

1. **Primera fila**: Sabemos que el puerto local 49273 está siendo traducido a 25192 en el WAN. Buscamos una conexión que coincida con el puerto 25192 en el servidor.
    - Desde `SRV-A`:
        - `190.50.10.63:80 205.20.0.29:25192` corresponde a la dirección de destino para 49273. Entonces, completamos:
        ```bash
        192.168.1.2:49273 190.50.10.63:80
        ```
    - La segunda fila está relacionada con una conexión hacia `190.50.10.63:25`. Buscamos la entrada de NAT que muestra un puerto WAN que se conecta a este servicio.
        - `190.50.10.63:25 205.20.0.29:41823` indica que el puerto 37484 en PC-A está conectado a este puerto.
        ```bash
        192.168.1.2:37484 190.50.10.63:25
        ```
    - La tercera fila muestra una conexión a `190.50.10.81:8080`. Sabemos por la tabla de SRV-B que existen tres conexiones WAN posibles. Debemos encontrar el puerto LAN correspondiente en PC-A que aún no se ha listado:
        - `192.168.1.2:51238` aún no está asignado y no hay otros detalles que nos ayuden a determinar la conexión exacta, así que se queda como desconocido por ahora.
        ```bash
        192.168.1.2:51238 190.50.10.81:8080
        ```

`PC-B`

1. **Ambas filas** necesitan la dirección de destino:
    - La conexión `192.168.1.3:52734` tiene su traducción WAN en `205.20.0.29:51091`, que se conecta a `190.50.10.81:8081` en SRV-B.
        ```bash
        192.168.1.3:52734 190.50.10.81:8081
        ```
    - La conexión `192.168.1.3:39275` se traduce a `205.20.0.29:9123`, que se conecta a `190.50.10.81:8080` en SRV-B.
        ```bash
        192.168.1.3:39275 190.50.10.81:8080
        ```

`RTR-1 (Tabla de NAT)`

Para la entrada faltante de `192.168.1.2:51238`, se necesita el puerto WAN correspondiente que aún no hemos determinado con precisión. Puede ser un puerto como `205.20.0.29:16345` que se muestra conectando a `190.50.10.81:8080` en SRV-B, haciendo una suposición lógica:
```bash
192.168.1.2:51238 205.20.0.29:16345
```

Estas son las inferencias basadas en la información disponible. Cualquier suposición incorrecta se debe a la falta de información explícita en las tablas proporcionadas.


<table>
<tr><td>

```bash
PC-A (ss)
Local Address:Port Peer Address:Port
192.168.1.2:49273 190.50.10.63:80
192.168.1.2:37484 190.50.10.63:25
192.168.1.2:51238  190.50.10.81:8080
```
</td><td>

```bash
PC-B (ss)
Local Address:Port Peer Address:Port
192.168.1.3:52734 190.50.10.81:8081
192.168.1.3:39275 190.50.10.81:8080
```
</td></tr>
<tr><td>

```bash
SRV-A (ss)
Local Address:Port Peer Address:Port
190.50.10.63:80 205.20.0.29:25192
190.50.10.63:25 205.20.0.29:41823
```
</td><td>

```bash
SRV-B (ss)
Local Address:Port Peer Address:Port
190.50.10.81:8080 205.20.0.29:16345
190.50.10.81:8081 205.20.0.29:51091
190.50.10.81:8080 205.20.0.29:9123
```
</td></tr>
</table>

```bash
RTR-1 (Tabla de NAT)
Lado LAN Lado WAN
192.168.1.2:49273 205.20.0.29:25192
192.168.1.2:51238 205.20.0.29:16345
192.168.1.3:52734 205.20.0.29:51091
192.168.1.2:37484 205.20.0.29:41823
192.168.1.3:39275 205.20.0.29:9123
```

#### b. En base a lo anterior, responda:

#### i. ¿Cuántas conexiones establecidas hay y entre qué dispositivos?

Para analizar cuántas conexiones establecidas hay y entre qué dispositivos, revisamos la información de las conexiones activas (`ss`) en los dispositivos PC-A, PC-B, y los servidores SRV-A y SRV-B, así como la tabla de NAT en el router RTR-1.

`Paso a Paso del Análisis de Conexiones`

1. **Examinar conexiones en PC-A:**
   - **Conexión 1:** `192.168.1.2:49273` conecta con `190.50.10.63:80` - Esta es una conexión de PC-A hacia SRV-A usando HTTP.
   - **Conexión 2:** `192.168.1.2:37484` conecta con `190.50.10.63:25` - Esta es una conexión de PC-A hacia SRV-A usando SMTP para enviar correo.
   - **Conexión 3:** `192.168.1.2:(algún puerto)` conecta con `190.50.10.81:8080` - Esta es una conexión de PC-A hacia SRV-B usando HTTP en un puerto no especificado localmente.

2. **Examinar conexiones en PC-B:**
   - **Conexión 4:** `192.168.1.3:52734` conecta con un destino no especificado.
   - **Conexión 5:** `192.168.1.3:39275` conecta con un destino no especificado.
   
   Dado que los destinos específicos no se mencionan, necesitamos confirmar qué servicios están siendo utilizados revisando las conexiones entrantes en los servidores y la correspondencia en la tabla NAT.

3. **Revisar conexiones en SRV-A (ss):**
   - **Recibe Conexión 1** de `205.20.0.29:25192` que corresponde a la traducción NAT de PC-A `192.168.1.2:49273`.
   - **Recibe Conexión 2** de `205.20.0.29:41823` que corresponde a la traducción NAT de PC-A `192.168.1.2:37484`.

4. **Revisar conexiones en SRV-B (ss):**
   - **Recibe Conexión 3** desde `205.20.0.29:16345` que debe ser la traducción NAT de PC-A en un puerto no especificado.
   - **Recibe Conexión 4** desde `205.20.0.29:51091` que corresponde a la traducción NAT de PC-B `192.168.1.3:52734`.
   - **Recibe Conexión 5** desde `205.20.0.29:9123` que corresponde a la traducción NAT de PC-B `192.168.1.3:39275`.

5. **Tabla de NAT en RTR-1:**
   - Confirma que las conexiones de PC-A y PC-B se están traduciendo correctamente a través del router usando direcciones externas.

`Resumen de Conexiones Establecidas:`

En total, hay **cinco conexiones establecidas**:
- **Tres conexiones desde PC-A a SRV-A y SRV-B**: Dos hacia SRV-A (HTTP y SMTP) y una hacia SRV-B (HTTP).
- **Dos conexiones desde PC-B a SRV-B**: Ambas conexiones son HTTP a diferentes servicios.

Estas conexiones reflejan las interacciones entre las computadoras personales y los servidores en diferentes puertos, facilitadas por el router RTR-1 a través de la traducción de direcciones de red (NAT).

#### ii. ¿Quién inició cada una de las conexiones? ¿Podrían haberse iniciado en sentido inverso? ¿Por qué? Investigue qué es port forwarding y si serviría como solución en este caso.

`¿Quién inició cada una de las conexiones?`

Las conexiones en redes TCP/IP generalmente se inician por el dispositivo que envía el primer paquete de sincronización (SYN) para establecer la conexión. Basándonos en los registros de la tabla de NAT y las capturas de las sesiones (`ss`), podemos determinar quién inició cada conexión:

1. **Conexiones desde PC-A hacia SRV-A y SRV-B:**
   - PC-A inició todas las conexiones hacia los servidores (SRV-A y SRV-B), como se evidencia por las direcciones IP y los puertos locales en la tabla de NAT y las conexiones `ss`. 

2. **Conexiones desde PC-B hacia SRV-B:**
   - PC-B inició las conexiones hacia SRV-B, lo cual se refleja en la tabla de NAT donde PC-B usa puertos locales para conectarse a servicios en SRV-B.

`¿Podrían haberse iniciado las conexiones en sentido inverso?`

En general, los servidores están configurados para escuchar en puertos específicos y esperar conexiones de los clientes. Los clientes (como PC-A y PC-B) son quienes típicamente inician las conexiones hacia estos puertos conocidos en los servidores (por ejemplo, HTTP en el puerto 80 o SMTP en el puerto 25).

- **Servidores hacia PCs:** Los servidores no suelen iniciar conexiones hacia las PC en una red, excepto en situaciones específicas como respuestas a solicitudes de los clientes o en arquitecturas push donde el servidor debe iniciar la comunicación (poco común en los contextos mencionados).

`¿Qué es port forwarding y cómo podría aplicarse?`

**Port forwarding** (reenvío de puertos) es una técnica utilizada en NAT para dirigir la comunicación externa a un puerto específico hacia un dispositivo dentro de la red local. Es especialmente útil en situaciones donde necesitas que servicios dentro de una red privada sean accesibles desde el exterior.

`Aplicación de Port Forwarding en este escenario:`

- Si un servicio en PC-A o PC-B necesita ser accesible desde el exterior, port forwarding podría configurarse en RTR-1 para reenviar las solicitudes entrantes en puertos específicos a las direcciones IP internas correspondientes de PC-A o PC-B.

`Viabilidad de iniciar conexiones desde servidores:`

- Sin port forwarding, no es factible que SRV-A o SRV-B inicien conexiones directamente a las PCs debido a la naturaleza de la NAT, que por defecto solo maneja conexiones iniciadas internamente. Sin embargo, si se configura port forwarding apropiadamente, los servidores externos podrían, en teoría, "iniciar" conexiones a servicios específicos dentro de la red que han sido expuestos explícitamente.

`Conclusión:`

En este caso, port forwarding serviría para permitir que servicios específicos en PCs sean accesibles desde el exterior, pero no alteraría el hecho de que las conexiones entre PCs y servidores generalmente se inician desde las PCs hacia servidores que están escuchando pasivamente.

---

Las siguientes eran mejor hacerlas en papel supongo

### Ejercicio 12
### Ejercicio 13
### Ejercicio 14
### Ejercicio 15
