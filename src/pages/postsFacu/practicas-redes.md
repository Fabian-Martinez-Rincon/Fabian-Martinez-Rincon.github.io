---
layout: ../../layouts/MarkdownPostLayout.astro
title: Practicas Redes
author: Fabian Martinez Rincon
description: ""
image:
    url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHRiaGVrbmIxZDhhYXl5M3ppNWVnbWcwNDllY2wwZnBtanIzNGM3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnxpQ3ghPiB2Hp6/giphy.gif'
    alt: "Orientación a OO2."
pubDate: 2024-03-12
tags: ["Capa de Aplicación", "Capa de Transporte", "Capa de Red", "Ruteo"]
---

- [Practica 1 Introducción](#practica-1-introducción)
- [Practica 2 Capa de Aplicación](#practica-2-capa-de-aplicación---http)

## Practica 1 Introducción

- [Ejercicio 1) ¿Qué es una red? ¿Cuál es el principal objetivo para construir una red?](#ejercicio-1)
- [Ejercicio 2) ¿Qué es Internet? Describa los principales componentes que permiten su funcionamiento.](#ejercicio-2)
- [Ejercicio 3) ¿Qué son las RFCs?](#ejercicio-3)
- [Ejercicio 4) ¿Qué es un protocolo?](#ejercicio-4)
- [Ejercicio 5) ¿Por qué dos máquinas con distintos sistemas operativos pueden formar parte de una misma red?](#ejercicio-5)
- [Ejercicio 6) ¿Cuáles son las 2 categorías en las que pueden clasificarse a los sistemas finales o End Systems? Dé unejemplo del rol de cada uno en alguna aplicación distribuida que corra sobre Internet.](#ejercicio-6)
- [Ejercicio 7) ¿Cuál es la diferencia entre una red conmutada de paquetes de una red conmutada de circuitos?](#ejercicio-7)
- [Ejercicio 8) Analice qué tipo de red es una red de telefonía y qué tipo de red es Internet.](#ejercicio-8)
- [Ejercicio 9) Describa brevemente las distintas alternativas que conoce para acceder a Internet en su hogar.](#ejercicio-9)
- [Ejercicio 10) ¿Qué ventajas tiene una implementación basada en capas o niveles?](#ejercicio-10)
- [Ejercicio 11) ¿Cómo se llama la PDU de cada una de las siguientes capas: Aplicación, Transporte, Red y Enlace?](#ejercicio-11)
- [Ejercicio 12) ¿Qué es la encapsulación? Si una capa realiza la encapsulación de datos, ¿qué capa del nodo receptorrealizará el proceso inverso?](#ejercicio-12)
- [Ejercicio 13) Describa cuáles son las funciones de cada una de las capas del stack TCP/IP o protocolo de Internet.](#ejercicio-13)
- [Ejercicio 14). Compare el modelo OSI con la implementación TCP/IP](#ejercicio-14)

---

### Ejercicio 1

`¿Qué es una red?`

Una red, en el contexto de las redes de computadoras, es un grupo de computadoras y dispositivos interconectados entre sí. 

`¿Cuál es el principal objetivo para construir una red?`

El principal objetivo de construir una red es compartir recursos, como dispositivos, información y servicios. Al conectar computadoras y dispositivos, los usuarios pueden compartir archivos, software, hardware (como impresoras y escáneres), y datos de manera eficiente y económica. Además, las redes permiten la comunicación y colaboración entre usuarios, independientemente de su ubicación geográfica.

<audio controls><source src="../redes/practica1/1.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 2

`¿Qué es Internet?`


Internet es una red de redes de computadoras descentralizada y pública que utiliza el conjunto abierto de protocolos conocido como suite TCP/IP (Protocolo de Control de Transmisión/Protocolo de Internet). Permite la integración de diferentes tecnologías de red y protocolos de comunicación de nivel más bajo, facilitando la interconexión mundial de redes de computadoras de todo tipo.

`Describa los principales componentes que permiten su funcionamiento.`


Los principales componentes que permiten el funcionamiento de Internet incluyen:

1. **Computadoras y Dispositivos de Usuario**: Incluyen PCs, laptops, smartphones, tabletas y otros dispositivos capaces de conectarse a Internet. Estos pueden ser tanto los dispositivos de usuarios finales como servidores que albergan sitios web, aplicaciones y servicios.

2. **Routers y Switches**: Son dispositivos de red que dirigen el tráfico de datos en Internet. Los routers conectan redes diferentes entre sí, permitiendo que los datos se envíen de un punto a otro a través de Internet. Los switches conectan dispositivos dentro de la misma red.

3. **Medios de Conexión**: Los cables (como los de cobre o fibra óptica), las conexiones inalámbricas (Wi-Fi, 4G, 5G, etc.), y los satélites son medios físicos o inalámbricos que transportan los datos entre los dispositivos y a través de redes.

4. **Protocolos de Comunicación**: TCP/IP es el conjunto de protocolos que define cómo se transmiten los datos a través de Internet. Incluye protocolos como HTTP para páginas web, FTP para la transferencia de archivos, SMTP para el correo electrónico, y muchos otros.

5. **Proveedores de Servicios de Internet (ISPs)**: Son compañías que proporcionan la conectividad a Internet a usuarios y empresas. Los ISPs conectan a sus suscriptores al resto de Internet a través de diversas tecnologías de acceso.

6. **Puntos de Acceso a la Red (NAPs) y Puntos de Intercambio de Internet (IXPs)**: Son infraestructuras que permiten que diferentes redes, incluyendo las de diferentes ISPs, se interconecten y compartan tráfico.

7. **Direcciones IP y DNS**: La Dirección IP es un número único asignado a cada dispositivo en Internet. El Sistema de Nombres de Dominio (DNS) traduce los nombres de dominio fáciles de recordar (como www.example.com) en sus correspondientes direcciones IP.

Estos componentes trabajan en conjunto para permitir la comunicación y transferencia de datos a través de la vasta red global que es Internet.

<audio controls><source src="../redes/practica1/2.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 3

`¿Qué son las RFCs?`

Las RFCs (Request for Comments) son una serie de documentos técnicos que describen los métodos, conductas, investigaciones, o innovaciones aplicables al funcionamiento de Internet y sistemas conectados a Internet. Funcionan como las especificaciones estándar que definen los protocolos y políticas de Internet, incluyendo aspectos técnicos y organizativos.

Originalmente, las RFCs se crearon como una forma de compartir notas de trabajo entre varios grupos de investigadores en redes informáticas. Sin embargo, con el tiempo, se convirtieron en el medio oficial para la publicación de los estándares de Internet, junto con otros documentos informativos y experimentales.

Las RFCs abarcan desde propuestas iniciales, descripciones de métodos experimentales, hasta estándares de Internet formalmente adoptados. Cada RFC recibe un número de serie y una vez publicada, una RFC no se modifica. Si surgen cambios o actualizaciones, se publican en una nueva RFC con un nuevo número.

Las categorías de las RFCs pueden incluir:

- **Proposed Standard**: Propuestas de nuevos estándares esperando consideración y posible adopción.
- **Internet Standard**: Aquellos que han sido sometidos a múltiples revisiones y pruebas y han sido formalmente aprobados como estándares.
- **Experimental**: Documentos que describen métodos experimentales, no destinados a ser estándares.
- **Informational**: Documentos que proporcionan información general sobre temas de Internet, pero no están destinados a ser estándares.
- **Historic**: Documentos que son obsoletos o que no se consideran para uso estándar.

Las RFCs son fundamentales para el desarrollo y funcionamiento de Internet, proporcionando una base documentada y abierta para la evolución de sus tecnologías y protocolos.

<audio controls><source src="../redes/practica1/3.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 4

`¿Qué es un protocolo?`

Un protocolo, en el contexto de las redes de computadoras y las comunicaciones, es un conjunto de reglas y convenciones que determinan cómo se transmite la información a través de la red. Estas reglas definen el formato, la sincronización, la secuenciación y la verificación de los mensajes o datos que se envían y reciben entre dispositivos, sistemas o entidades.

Los protocolos especifican las interacciones entre los distintos componentes de la red, incluyendo cómo se inicia y termina una comunicación, cómo se manejan los errores, cómo se asegura que los datos lleguen de forma íntegra y en el orden correcto, y cómo se controla el flujo de datos para evitar la saturación de la red.

Por ejemplo, el Protocolo de Control de Transmisión (TCP) es un protocolo que permite la transmisión de datos de forma confiable y ordenada entre computadoras en una red. El Protocolo de Internet (IP), por otro lado, es responsable de direccionar y encaminar los paquetes de datos desde el origen hasta el destino a través de diferentes redes.

Los protocolos son fundamentales para el funcionamiento de las redes de computadoras e Internet, ya que permiten la interoperabilidad entre diferentes sistemas y dispositivos, asegurando que la comunicación pueda ocurrir de manera efectiva y eficiente.

<audio controls><source src="../redes/practica1/4.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 5

`¿Por qué dos máquinas con distintos sistemas operativos pueden formar parte de una misma red?`

Dos máquinas con distintos sistemas operativos pueden formar parte de la misma red gracias al uso de estándares y protocolos de red comunes. Estos protocolos, como el TCP/IP (Protocolo de Control de Transmisión/Protocolo de Internet), definen las reglas para la comunicación en la red, independientemente de los sistemas operativos o el hardware de las máquinas involucradas.

Cuando los dispositivos en una red se comunican entre sí, no interactúan directamente con los sistemas operativos del otro dispositivo, sino a través de la capa de red, utilizando estos protocolos estandarizados. Estos protocolos aseguran que la información se pueda enviar y recibir de manera coherente y comprensible, sin importar las diferencias subyacentes en el software o el hardware.

Los sistemas operativos están diseñados para implementar estos protocolos de red, lo que permite a las máquinas configurar conexiones de red, enviar y recibir datos, y realizar otras funciones de red necesarias para la comunicación y el intercambio de recursos. Esto hace posible que dispositivos con sistemas operativos diferentes, como Windows, macOS, Linux, etc., puedan conectarse y comunicarse entre sí en la misma red, compartiendo recursos como archivos, impresoras, y acceso a Internet.

<audio controls><source src="../redes/practica1/5.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 6


- `¿Cuáles son las 2 categorías en las que pueden clasificarse a los sistemas finales o End Systems? `
- `Dé un ejemplo del rol de cada uno en alguna aplicación distribuida que corra sobre Internet.`

Los sistemas finales, también conocidos como end systems, se pueden clasificar generalmente en dos categorías: clientes y servidores.

1. **Clientes**: Son los sistemas finales que inician las comunicaciones en una aplicación distribuida. Los clientes suelen solicitar y consumir recursos proporcionados por los servidores. Por ejemplo, en una aplicación distribuida como la navegación web, un navegador de Internet operando en una PC o dispositivo móvil actúa como cliente. Cuando ingresas una dirección web, el navegador (cliente) solicita la página al servidor web correspondiente.

2. **Servidores**: Son los sistemas finales que atienden las solicitudes de los clientes y les proporcionan los recursos o servicios solicitados. Los servidores están configurados para escuchar y responder a las solicitudes entrantes de los clientes. Siguiendo con el ejemplo anterior, en la navegación web, el servidor web es el que alberga los sitios web y envía las páginas web solicitadas de vuelta al navegador del cliente en respuesta a sus solicitudes.

Esta clasificación en clientes y servidores facilita el diseño, la implementación y el mantenimiento de aplicaciones distribuidas y permite una clara distinción de roles en la comunicación de red, lo que a su vez soporta una gran variedad de servicios y aplicaciones en Internet.

<audio controls><source src="../redes/practica1/6.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 7

`¿Cuál es la diferencia entre una red conmutada de paquetes de una red conmutada de circuitos?`

Las redes conmutadas de paquetes y las redes conmutadas de circuitos son dos tecnologías fundamentales para la transmisión de datos, pero operan de manera muy diferente:

1. **Redes Conmutadas de Paquetes**:
   - **Funcionamiento**: En las redes conmutadas de paquetes, los datos se dividen en pequeñas unidades llamadas paquetes. Cada paquete se envía de forma independiente a través de la red desde el origen hasta el destino, pudiendo seguir diferentes rutas para llegar a su destino.
   - **Ventajas**: Esta técnica permite un uso más eficiente y flexible de los recursos de la red, ya que la capacidad de la red se puede compartir entre muchos usuarios. Además, es más resistente a fallos y congestiones, ya que los paquetes pueden redirigirse por rutas alternativas en caso de problemas en alguna parte de la red.
   - **Ejemplos**: Internet es el ejemplo más destacado de una red conmutada de paquetes, donde los datos de diferentes usuarios se transmiten en forma de paquetes a través de la misma infraestructura.

2. **Redes Conmutadas de Circuitos**:
   - **Funcionamiento**: En las redes conmutadas de circuitos, se establece una conexión dedicada y continua (un circuito) entre el punto de origen y el destino antes de que comience la transmisión de datos. Esta conexión se mantiene durante toda la duración de la comunicación, independientemente de si se están transmitiendo datos o no.
   - **Ventajas**: Este método garantiza una cantidad fija de ancho de banda y una calidad constante de la conexión durante la comunicación, lo que es ideal para servicios que requieren transmisión en tiempo real, como las llamadas telefónicas.
   - **Ejemplos**: La red telefónica tradicional (PSTN) es un ejemplo de una red conmutada de circuitos, donde se establece una conexión dedicada entre los teléfonos del emisor y el receptor durante una llamada.

La elección entre una red conmutada de paquetes y una red conmutada de circuitos depende de las necesidades específicas de la comunicación. Las redes conmutadas de paquetes son más versátiles y eficientes para el tráfico de datos variable, mientras que las redes conmutadas de circuitos son preferibles para servicios que necesitan garantías de ancho de banda y tiempo de transmisión.

<audio controls><source src="../redes/practica1/7.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 8

`Analice qué tipo de red es una red de telefonía y qué tipo de red es Internet.`

La red de telefonía tradicional, también conocida como Red Telefónica Pública Conmutada (PSTN, por sus siglas en inglés Public Switched Telephone Network), es un ejemplo de una red conmutada de circuitos. En este tipo de red, se establece una conexión directa y continua entre el teléfono del emisor y el del receptor para toda la duración de la llamada telefónica. La conexión es exclusiva para los dos interlocutores y proporciona un canal fijo de comunicación con un ancho de banda garantizado. Esto es ideal para la transmisión de voz en tiempo real, ya que asegura una calidad constante sin interrupciones ni retrasos significativos.

Por otro lado, Internet es un ejemplo de una red conmutada de paquetes. En Internet, los datos (ya sean correos electrónicos, páginas web, videos, etc.) se dividen en pequeñas unidades llamadas paquetes. Cada paquete se envía de manera independiente y puede tomar diferentes rutas a través de la red para llegar a su destino. Esto permite un uso más eficiente de la red, ya que múltiples comunicaciones pueden compartir la misma infraestructura. La red conmutada de paquetes es más flexible y escalable, lo que la hace ideal para manejar la gran variedad y volumen de datos que se transmiten a través de Internet.

En resumen:

- **Red de telefonía (PSTN)**: Es una red conmutada de circuitos, ideal para comunicaciones de voz en tiempo real, proporcionando un canal de comunicación constante y de calidad garantizada.
  
- **Internet**: Es una red conmutada de paquetes, diseñada para transmitir datos de manera eficiente y flexible, soportando una amplia variedad de aplicaciones y servicios al compartir la infraestructura entre múltiples usuarios.

<audio controls><source src="../redes/practica1/8.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 9

`Describa brevemente las distintas alternativas que conoce para acceder a Internet en su hogar.`

Existen varias alternativas para acceder a Internet en el hogar, y la disponibilidad de cada una puede variar según la ubicación y la infraestructura local. Aquí tienes algunas de las opciones más comunes:

1. **DSL (Línea de Suscriptor Digital)**: Utiliza las líneas telefónicas existentes para proporcionar acceso a Internet. No interfiere con el servicio telefónico y puede ofrecer una gama de velocidades, dependiendo de la calidad de la línea y la distancia a la central.

2. **Cable**: Utiliza la infraestructura de cableado de televisión para proporcionar acceso a Internet. Generalmente ofrece mayores velocidades que DSL y puede ser una buena opción si ya cuentas con servicio de televisión por cable.

3. **Fibra Óptica**: Ofrece altas velocidades de conexión a través de cables de fibra óptica. Es conocida por su capacidad para proporcionar velocidades de subida y bajada simétricas y es ideal para usuarios que demandan mucho ancho de banda.

4. **Satélite**: Proporciona acceso a Internet mediante la comunicación con un satélite en órbita. Es una opción viable para áreas rurales o remotas donde otras formas de acceso a Internet no están disponibles.

5. **Conexiones inalámbricas fijas**: Utilizan antenas para proporcionar acceso a Internet sin necesidad de cables. Son otra opción para áreas rurales o regiones sin amplia infraestructura de cable o fibra.

6. **Redes móviles (4G LTE, 5G)**: Permiten el acceso a Internet a través de la red celular. Puedes usar un smartphone como punto de acceso móvil o adquirir un módem o router especial que utilice la red móvil para proporcionar acceso a Internet en tu hogar.

7. **Banda ancha inalámbrica municipal**: Algunas ciudades ofrecen su propia red de acceso a Internet, que puede ser gratuita o de bajo costo para los residentes.

Al elegir el tipo de conexión, considera factores como la velocidad de conexión necesaria, el presupuesto, la disponibilidad en tu área y el tipo de uso que le darás a tu conexión a Internet.

<audio controls><source src="../redes/practica1/9.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 10

`¿Qué ventajas tiene una implementación basada en capas o niveles?`

La implementación basada en capas o niveles en sistemas de redes y software tiene varias ventajas significativas:

1. **Modularidad**: La estructura en capas permite descomponer un sistema complejo en partes más pequeñas y manejables (módulos). Cada capa se encarga de una función específica y se comunica con las capas superior e inferior mediante interfaces bien definidas. Esto facilita la comprensión, el desarrollo y la prueba del sistema.

2. **Facilidad de mantenimiento y actualización**: Gracias a la separación de funciones, es más fácil modificar o actualizar una capa sin afectar a las demás. Esto significa que se pueden realizar cambios o mejoras en una parte específica del sistema (como adoptar nuevos protocolos o tecnologías) sin necesidad de rediseñar todo el sistema.

3. **Reusabilidad**: Las capas diseñadas para realizar funciones generales pueden reutilizarse en diferentes sistemas o aplicaciones. Esto reduce el tiempo y el costo de desarrollo al evitar la necesidad de recrear soluciones para problemas comunes.

4. **Interoperabilidad**: Al adherirse a estándares de capas bien definidos, diferentes productos y tecnologías pueden interactuar y trabajar juntos más fácilmente. Esto es especialmente importante en redes y comunicaciones, donde equipos de diferentes fabricantes deben comunicarse entre sí.

5. **Abstracción**: Cada capa abstrae la complejidad de las operaciones de sus capas inferiores, presentando una interfaz simple a la capa superior. Esto oculta los detalles de implementación complejos y permite a los diseñadores y desarrolladores concentrarse en la funcionalidad de alto nivel sin preocuparse por las complejidades subyacentes.

6. **Seguridad mejorada**: Al segmentar las funciones en diferentes capas, es posible aplicar políticas de seguridad y control de acceso específicas para cada capa, aumentando así la seguridad general del sistema.

7. **Facilidad de prueba y depuración**: La estructura en capas facilita la prueba de componentes individuales de forma aislada (pruebas unitarias) y la identificación de problemas en niveles específicos del sistema, simplificando el proceso de depuración.

8. **Escalabilidad**: Los sistemas basados en capas pueden escalarse más fácilmente, ya que es posible aumentar la capacidad de una capa específica (por ejemplo, añadiendo más recursos o mejorando el rendimiento) sin alterar el resto del sistema.

En resumen, la implementación basada en capas ofrece una estructura organizada y flexible que mejora la mantenibilidad, extensibilidad y robustez de los sistemas de redes y software.

<audio controls><source src="../redes/practica1/10.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 11

`¿Cómo se llama la PDU de cada una de las siguientes capas: Aplicación, Transporte, Red y Enlace?`

En el contexto de los modelos de red, como el Modelo OSI (Open Systems Interconnection), las Unidades de Datos de Protocolo (PDUs) tienen diferentes nombres dependiendo de la capa en la que se encuentran. Para las capas que mencionaste, las PDUs se denominan de la siguiente manera:

1. **Capa de Aplicación**: La PDU de la capa de aplicación se llama "Mensaje". En esta capa, los datos se preparan para la transferencia a través de la red y se enfocan en el formato y el control de los datos necesarios para las aplicaciones.

2. **Capa de Transporte**: La PDU de la capa de transporte se llama "Segmento" en el caso de TCP (Protocolo de Control de Transmisión) o "Datagrama" en el caso de UDP (Protocolo de Datagramas de Usuario). Esta capa asegura la transferencia de datos completa y confiable entre los sistemas finales.

3. **Capa de Red**: La PDU de la capa de red se conoce como "Paquete". En esta capa, los datos se formatean para la transmisión a través de diferentes redes y se maneja el direccionamiento, la clasificación y el enrutamiento de los paquetes.

4. **Capa de Enlace de Datos**: La PDU de la capa de enlace de datos se llama "Trama". En esta capa, los datos se preparan para su transmisión física a través del medio de red, proporcionando control de errores y control de flujo.

Cada una de estas PDUs contiene información específica necesaria para la funcionalidad de su respectiva capa, permitiendo la comunicación y el intercambio de datos a través de la red de manera estructurada y eficiente.

<audio controls><source src="../redes/practica1/11.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 12

`¿Qué es la encapsulación?` 

La encapsulación es un proceso utilizado en las comunicaciones de red donde una capa del modelo de red toma los datos que recibe de la capa superior y los envuelve (o encapsula) en una nueva unidad de datos agregando su propia información de cabecera (y a veces de cola). Esta información de cabecera típicamente contiene detalles necesarios para la entrega y el procesamiento correcto del paquete de datos, como direcciones de origen y destino, tipo de servicio, y otros datos de control y de secuenciación.

Por ejemplo, en la capa de transporte, los datos se encapsulan en segmentos o datagramas; en la capa de red, en paquetes; y en la capa de enlace de datos, en tramas.

`Si una capa realiza la encapsulación de datos, ¿qué capa del nodo receptor realizará el proceso inverso?`

Si una capa de un nodo transmisor realiza la encapsulación de datos, el proceso inverso, llamado desencapsulación, se llevará a cabo en la capa correspondiente del nodo receptor. Esto significa que:

- Si la capa de Aplicación en el transmisor encapsula los datos, la capa de Aplicación en el receptor los desencapsulará.
- Si la capa de Transporte en el transmisor encapsula los datos, la capa de Transporte en el receptor los desencapsulará.
- Si la capa de Red en el transmisor encapsula los datos, la capa de Red en el receptor los desencapsulará.
- Si la capa de Enlace de Datos en el transmisor encapsula los datos, la capa de Enlace de Datos en el receptor los desencapsulará.

El proceso de desencapsulación implica quitar las cabeceras (y colas si las hay) puestas por el nodo transmisor para acceder a los datos originales o a la información de la cabecera de la siguiente capa. Este proceso asegura que cada nivel del modelo de red en el nodo receptor pueda interpretar y procesar correctamente los datos recibidos antes de pasarlos a la capa superior.

<audio controls><source src="../redes/practica1/12.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 13

`Describa cuáles son las funciones de cada una de las capas del stack TCP/IP o protocolo de Internet.`

El stack TCP/IP, también conocido como el modelo de protocolo de Internet, consta de cuatro capas que definen la comunicación en redes de computadoras. Cada capa tiene funciones específicas:

1. **Capa de Aplicación**:
   - Función: Es la capa más alta del modelo TCP/IP y se ocupa de las aplicaciones y procesos de nivel superior.
   - Responsabilidades: Proporciona interfaces y protocolos que las aplicaciones utilizan para comunicarse a través de la red. Gestiona servicios de red específicos como HTTP para la web, SMTP para el correo electrónico, FTP para la transferencia de archivos, y DNS para la resolución de nombres de dominio.
   - Ejemplo de trabajo: Cuando utilizas un navegador web, este opera en la capa de aplicación, utilizando HTTP para solicitar páginas web.

2. **Capa de Transporte**:
   - Función: Responsable de la transferencia de datos entre dos hosts.
   - Responsabilidades: Se encarga de la segmentación de los datos y del control de la conexión, asegurando la entrega completa y en orden de los datos, además de gestionar el control de flujo y el error. Los principales protocolos de esta capa son TCP (Protocolo de Control de Transmisión) y UDP (Protocolo de Datagramas de Usuario).
   - Ejemplo de trabajo: TCP divide los datos de la aplicación en segmentos y establece una conexión confiable entre el emisor y el receptor, asegurando que los datos lleguen íntegros y en orden.

3. **Capa de Internet (o Capa de Red)**:
   - Función: Define los protocolos para el enrutamiento de paquetes a través de redes interconectadas hacia el destino final.
   - Responsabilidades: Se ocupa del direccionamiento lógico (direcciones IP) y de la determinación de la ruta óptima para los paquetes a través de la red. El principal protocolo en esta capa es el Protocolo de Internet (IP).
   - Ejemplo de trabajo: IP asigna direcciones a cada dispositivo y dirige los paquetes de datos desde el origen hasta el destino, incluso a través de múltiples redes intermedias.

4. **Capa de Acceso a la Red (o Capa de Enlace)**:
   - Función: Corresponde a la combinación de las capas de enlace de datos y física del modelo OSI.
   - Responsabilidades: Se encarga de la transmisión de los datos entre un dispositivo y la red física. Incluye la encapsulación de paquetes de IP en tramas, el mapeo de direcciones IP a direcciones físicas como direcciones MAC, y puede gestionar el acceso al medio, la detección y corrección de errores en el nivel físico.
   - Ejemplo de trabajo: Esta capa toma los paquetes IP y los prepara para su transmisión a través de medios físicos como cables de Ethernet, Wi-Fi o fibra óptica, utilizando protocolos como Ethernet, Wi-Fi (IEEE 802.11) y otros protocolos de enlace de datos.

Cada capa del modelo TCP/IP proporciona un conjunto de funciones específicas que permiten la comunicación efectiva a través de una red de computadoras, desde la aplicación que origina los datos hasta la red física que transporta los datos.

<audio controls><source src="../redes/practica1/13.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 14

`Compare el modelo OSI con la implementación TCP/IP`

El Modelo OSI (Open Systems Interconnection) y el Modelo TCP/IP (Transmission Control Protocol/Internet Protocol) son dos marcos de referencia estándar para la comprensión de la comunicación en red y la interconexión de sistemas de redes. Ambos modelos dividen las funciones de la red en diferentes capas, pero tienen diferencias significativas en su enfoque y estructura:

1. **Número de Capas**:
   - **Modelo OSI**: Compuesto por siete capas: Aplicación, Presentación, Sesión, Transporte, Red, Enlace de Datos y Física.
   - **Modelo TCP/IP**: Compuesto por cuatro capas: Aplicación, Transporte, Internet (o Red), y Acceso a la Red (que combina las funciones de las capas Física y Enlace de Datos del modelo OSI).

2. **Estándar vs. Implementación**:
   - **Modelo OSI**: Es un modelo conceptual creado por la ISO (Organización Internacional de Normalización) que sirve como guía para el diseño de protocolos de red. Es más teórico y fue creado antes de la implementación de la tecnología.
   - **Modelo TCP/IP**: Se desarrolló inicialmente como parte del proyecto de investigación DARPA para la creación de ARPANET, precursor de Internet. Es un modelo práctico basado en estándares y protocolos reales en uso.

3. **Capas de Sesión y Presentación**:
   - **Modelo OSI**: Define capas de sesión y presentación separadas para funciones como el manejo de la sesión y la traducción de datos entre formatos.
   - **Modelo TCP/IP**: No tiene capas equivalentes a las de Sesión y Presentación del modelo OSI. Estas funciones, si son necesarias, son generalmente manejadas por la capa de Aplicación.

4. **Flexibilidad y Abstracción**:
   - **Modelo OSI**: Ofrece una mayor abstracción y se considera más riguroso en la separación de las funciones de la red en diferentes capas. Esto lo hace más flexible en términos de definir nuevas normas y protocolos.
   - **Modelo TCP/IP**: Es menos abstracto y está más orientado a la práctica y a la implementación real de las redes. Su estructura es considerada más simple y directa.

5. **Universalidad**:
   - **Modelo OSI**: A pesar de su detallada estructuración, no se adoptó tan ampliamente en la práctica real fuera de los marcos teóricos y educativos.
   - **Modelo TCP/IP**: Se convirtió en el estándar de facto para Internet y las redes modernas debido a su implementación práctica y al éxito global de Internet.

6. **Interoperabilidad y Adopción**:
   - **Modelo OSI**: Proporciona un marco más universal para la interoperabilidad entre diferentes sistemas y tecnologías, aunque en la práctica, muchas redes no siguen estrictamente este modelo.
   - **Modelo TCP/IP**: Ha logrado una amplia adopción e interoperabilidad gracias a Internet, con sus protocolos que se utilizan prácticamente en todas las redes informáticas.

En resumen, mientras que el modelo OSI proporciona una estructura teórica detallada para la comunicación en red, el modelo TCP/IP ofrece un enfoque más pragmático basado en la implementación real y las necesidades de Internet.

<audio controls><source src="../redes/practica1/14.mp3" type="audio/mpeg"></audio>

---

## Practica 2 Capa de Aplicación - HTTP

---

### Introducción

- [Ejercicio 2 ¿Cuál es la función de la capa de aplicación?](#ejercicio-2)
- [Ejercicio 3 Si dos procesos deben comunicarse](#ejercicio-3)
- [Ejercicio 4 Explique brevemente el cómo es el modelo Cliente/Servidor](#ejercicio-4)
- [Ejercicio 5 Describa la funcionalidad de la entidad genérica "Agente de usuario" o "User Agent"](#ejercicio-5)

---

### HTTP

- [Ejerccio 6. Observe el indice de la RFC2616](#ejercicio-6)
- [Ejerccio 7. Utilizando la VM, abra una terminal e investigue sobre el comando curl](#ejercicio-7)
- [Ejerccio 8. Ejecute el comando curl sin ningún parámetro adicional y acceda a www.redes.unlp.edu.ar.](#ejercicio-8)
- [Ejerccio 9. Ejecute a continuación los siguientes comandos](#ejercicio-9)
- [Ejerccio 10. Investigue cómo define las cabeceras la RFC](#ejercicio-10)
- [Ejerccio 11. Utilizando curl, realice un requerimiento con el método HEAD al sitio www.redes.unlp.edu.ar e indique](#ejercicio-11)
- [Ejerccio 12. En HTTP/1.0, ¿cómo sabe el cliente que ya recibió todo el objeto solicitado completamente?](#ejercicio-12)
- [Ejerccio 13. Investigue los distintos tipos de códigos de retorno de un servidor web y su significado en la RFC.](#ejercicio-13)
- [Ejerccio 14. Utilizando curl, acceda al sitio www.redes.unlp.edu.ar/restringido/index.php y siga las instrucciones](#ejercicio-14)
- [Ejerccio 15. Utilizando la VM, realice las siguientes pruebas](#ejercicio-15)
- [Ejerccio 16. En base a lo obtenido en el ejercicio anterior, responda.](#ejercicio-16)
- [Ejerccio 17. En el siguiente ejercicio veremos la diferencia entre los métodos POST y GET](#ejercicio-17)
- [Ejerccio 18. HTTP es un protocolo stateless, para sortear esta carencia muchos servicios se apoyan en el uso deCookies.](#ejercicio-18)
- [Ejerccio 19. ¿Cuál es la diferencia entre un protocolo binario y uno basado en texto?](#ejercicio-19)
- [Ejerccio 20. Analice de que se tratan las siguientes características de HTTP/2: stream, frame, server-push](#ejercicio-20)
- [Ejerccio 21. Responder las siguientes preguntas](#ejercicio-21)

---

### Ejercicio 2

`¿Cuál es la función de la capa de aplicación?`

La función de la capa de aplicación en las redes de computadoras es proporcionar servicios de comunicación a los usuarios y a las aplicaciones. Esta capa incluye las propias aplicaciones que utilizan la red, como navegadores web, clientes de correo electrónico y aplicaciones de mensajería instantánea. En el contexto de Machine to Machine (M2M), la capa de aplicación facilita la comunicación entre máquinas sin intervención humana.

Además, la capa de aplicación actúa como una interfaz entre el usuario o las aplicaciones/servicios y la red. Es responsable de la definición del formato de los mensajes, de establecer las reglas para el intercambio de mensajes y de asegurar que los mensajes se transmitan de manera que cumplan con los requisitos de la aplicación. También se encarga de la conversión y codificación de datos, la compresión y descompresión, y el cifrado y descifrado, integrando funciones de lo que en el modelo OSI corresponden a las capas de Aplicación, Presentación y Sesión.

<audio controls><source src="../redes/practica2/2.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 3

Si dos procesos deben comunicarse:

`¿Cómo podrían hacerlo si están en diferentes máquinas?`

**A través de la red**: Utilizan la comunicación de red, intercambiando mensajes a través de un protocolo de la capa de aplicación adecuado (como HTTP, FTP, SMTP, etc.). Cada proceso utiliza un socket, que es un punto final de comunicación que proporciona la puerta de enlace para enviar y recibir datos. Los sockets se basan en la dirección IP de la máquina y un número de puerto específico para identificar el proceso de destino, permitiendo que los procesos en diferentes hosts se comuniquen entre sí a través de la red.

`Y si están en la misma máquina, ¿qué alternativas existen?`

**Comunicación entre procesos (IPC)**: Pueden utilizar varios mecanismos de IPC proporcionados por el sistema operativo, tales como:

- **Pipes (tuberías)**: Permiten la comunicación secuencial entre procesos, donde la salida de un proceso se convierte en la entrada del otro.
- **Memoria compartida**: Permite a múltiples procesos acceder a una sección común de la memoria RAM para intercambiar datos de manera rápida.
- **Sockets de dominio UNIX**: Son similares a los sockets de red, pero están diseñados para la comunicación entre procesos en la misma máquina, ofreciendo una manera eficiente de intercambio de datos.
- **Señales**: Son mensajes asincrónicos enviados a un proceso para indicar la ocurrencia de un evento específico.
- **Semáforos y mutexes**: Se utilizan para manejar el acceso concurrente a recursos compartidos, como la memoria.
- **Colas de mensajes**: Permiten el intercambio de mensajes entre procesos, donde los mensajes se almacenan en una cola hasta que el proceso receptor está listo para procesarlos.

<audio controls><source src="../redes/practica2/3.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 4

`Explique brevemente cómo es el modelo Cliente/Servidor.`

El modelo Cliente/Servidor es una arquitectura de red donde el servidor es una máquina que proporciona servicios o recursos, mientras que el cliente es una máquina o proceso que solicita esos servicios o recursos. En este modelo, el servidor está siempre activo, escuchando las solicitudes de los clientes. Cuando recibe una solicitud, el servidor la procesa y luego envía una respuesta de vuelta al cliente. Los clientes pueden conectarse o desconectarse de la red en cualquier momento y pueden tener direcciones IP dinámicas. En esta arquitectura, los clientes no se comunican directamente entre sí.

`De un ejemplo de un sistema Cliente/Servidor en la “vida cotidiana” y un ejemplo de un sistema informático que siga el modelo Cliente/Servidor.`

**Ejemplo en la “vida cotidiana”**: Un ejemplo cotidiano podría ser un usuario navegando en internet; el navegador actúa como el cliente y el servidor web como el servidor. El usuario (a través del navegador) solicita una página web (cliente) y el servidor web responde enviando los archivos de esa página web al navegador.

**Ejemplo de un sistema informático**: En el contexto de los sistemas informáticos, un ejemplo típico es el servicio de correo electrónico, donde un servidor de correo maneja y almacena los correos electrónicos, mientras que el cliente de correo electrónico (como Microsoft Outlook o Mozilla Thunderbird) permite al usuario enviar y recibir correos electrónicos.

`¿Conoce algún otro modelo de comunicación?`

**Otros modelos de comunicación**:
1. **Peer-to-Peer (P2P)**: En este modelo, cada nodo o participante actúa tanto como cliente como servidor. Los nodos se comunican directamente entre sí sin la necesidad de un servidor central. Esto se utiliza comúnmente en la compartición de archivos y redes de comunicación descentralizadas.
   
2. **Modelo Híbrido**: Combina elementos del modelo Cliente/Servidor y P2P. Por ejemplo, en las redes de mensajería instantánea, la detección y localización de presencia de los usuarios puede ser centralizada (cliente/servidor), pero la conversación puede ocurrir directamente entre los usuarios (P2P).

3. **Modelo de Publicación/Suscripción**: En este modelo, los clientes se suscriben a un tema y reciben actualizaciones automáticamente de un servidor cuando hay nuevos contenidos o mensajes relacionados con ese tema. Esto es común en sistemas de mensajería y notificaciones en tiempo real.

<audio controls><source src="../redes/practica2/4.mp3" type="audio/mpeg"></audio>


---

### Ejercicio 5

Describa la funcionalidad de la entidad genérica “Agente de usuario” o “User agent”


---

### Ejercicio 6

Observe el indice de la RFC2616, busque el apartado donde se describe el requerimiento y la respuesta.

**¿Qué son y en qué se diferencian HTML y HTTP?**

**¿En que entidad ubicaría a HTML?**


---

### Ejercicio 7

**Utilizando la VM, abra una terminal e investigue sobre el comando curl.**


**Analice para qué sirven los siguientes parámetros (-I, -H, -X, -s).**

---

### Ejercicio 8

Ejecute el comando curl sin ningún parámetro adicional y acceda a www.redes.unlp.edu.ar. Luego responda:


#### Parte a

**¿Cuántos requerimientos realizó y qué recibió?**

**Pruebe redirigiendo la salida(>) del comando curl a un archivo con extensión html y abrirlo con un navegador.**


#### Parte b

**¿Cómo funcionan los atributos href de los tags link e img en html?**

#### Parte c

Para visualizar la página completa con imágenes como en un navegador

**¿alcanza con realizar un único requerimiento?**

**¿Cuántos requerimientos serían necesarios para obtener una página que tiene dos CSS, dos Javascript y tres imágenes?**

**Diferencie como funcionaría un navegador respecto al comando curl ejecutado previamente**

---

### Ejercicio 9

Ejecute a continuación los siguientes comandos:


```bash
curl -v -s www.redes.unlp.edu.ar > /dev/null
```

```bash
curl -I -v -s www.redes.unlp.edu.ar
```

***Observe la salida y luego repita la prueba, pero previamente inicie una nueva captura en wireshark.***

***Utilice la opción Follow Stream. ¿Qué se transmitió en cada caso?***

***¿A que se debió esta diferencia entre lo que se transmitió y lo que se mostró en pantalla?***

---

### Ejercicio 10

Investigue cómo define las cabeceras la RFC

***¿Establece todas las cabeceras posibles?.***


***¿Cuántas cabeceras viajaron en el requerimiento y en la respuesta del ejercicio anterior?***


***¿La cabecera Date es una de las definidas en la RFC? ¿Qué indica?***




---

### Ejercicio 11

Utilizando curl, realice un requerimiento con el método HEAD al sitio www.redes.unlp.edu.ar e indique:

***¿Qué información brinda la primer línea de la respuesta?***


***¿Cuántos encabezados muestra la respuesta?***


***¿Qué servidor web está sirviendo la página?***


***¿El acceso a la página solicitada fue exitoso o no?***


***¿Cuándo fue la última vez que se modificó la página?***

Solicite la página nuevamente con curl usando GET, pero esta vez indique que quiere obtenerla sólo si la misma fue modificada en una fecha posterior a la que efectivamente fue modificada. 

***¿Cómo lo hace?***

***¿Qué resultado obtuvo?***

***¿Puede explicar para qué sirve?***


---

### Ejercicio 12

En HTTP/1.0, ¿cómo sabe el cliente que ya recibió todo el objeto solicitado completamente? 

**¿Y en HTTP/1.1?**

---

### Ejercicio 13

Investigue los distintos tipos de códigos de retorno de un servidor web y su significado en la RFC.

**¿Qué parte se ve principalmente interesada de esta información, cliente o servidor?**

**¿Es útil que esté detallado y clasificado en la RFC?.**

**Dentro de la VM, ejecute los siguientes comandos y evalue el estado que recibe.**

```bash
curl -I http://unlp.edu.ar
```

```bash
curl -I www.redes.unlp.edu.ar/restringido/index.php
```

```bash
curl -I www.redes.unlp.edu.ar/noexiste
```


---

### Ejercicio 14

Utilizando curl, acceda al sitio www.redes.unlp.edu.ar/restringido/index.php y siga las instrucciones y las pistas que vaya recibiendo hasta obtener la respuesta final. Será de utilidad para resolver este ejercicio poder analizar tanto el contenido de cada página como los encabezados

---

### Ejercicio 15

Utilizando la VM, realice las siguientes pruebas:

#### Parte a

Ejecute el comando ’curl www.redes.unlp.edu.ar/extras/prueba-http-1-0.txt’ y copie la salida completa (incluyendo los dos saltos de linea del final).

#### Parte b

Desde la consola ejecute el comando telnet www.redes.unlp.edu.ar 80 y luego pegue el contenido que tiene almacenado en el portapapeles. ¿Qué ocurre luego de hacerlo?

#### Parte c

Repita el proceso anterior, pero copiando la salida del recurso /extras/prueba-http-1-1.txt. Verifique que debería poder pegar varias veces el mismo contenido sin tener que ejecutar telnet nuevamente.

---

### Ejercicio 16

En base a lo obtenido en el ejercicio anterior, responda:

**¿Qué está haciendo al ejecutar el comando telnet?**

**¿Qué lo diferencia con curl?**

Observe la definición de método y recurso en la RFC. Luego responda

**¿Qué método HTTP utilizó?**

**¿Qué recurso solicitó?**

**¿Qué diferencias notó entre los dos casos?**

**¿Puede explicar por qué?**

**¿Cuál de los dos casos le parece más eficiente?**

Piense en el ejercicio donde analizó la cantidad de requerimientos necesarios para obtener una página con estilos, javascripts e imágenes. 

El caso elegido, ¿puede traer asociado algún problema?

---

### Ejercicio 17

En el siguiente ejercicio veremos la diferencia entre los métodos POST y GET. Para ello, será necesario utilizar la VM y la herramienta **Wireshark**. Antes de iniciar considere:

Capture los paquetes utilizando la interfaz con IP 172.28.0.1. (Menú “**Capture->Options**”. Luego seleccione la interfaz correspondiente y presione **Start**).

Para que el analizador de red sólo nos muestre los mensajes del protocolo http introduciremos la cadena ‘http’ (sin las comillas) en la ventana de especificación de filtros de visualización (display-filter).

Si no hiciéramos esto veríamos todo el tráfico que es capaz de capturar nuestra placa de red. De los paquetes que son capturados, aquel que esté seleccionado será mostrado en forma detallada en la sección que está justo debajo. Como sólo estamos interesados en http ocultaremos toda la información que no es relevante para esta práctica (Información de trama, Ethernet, IP y TCP). Desplegar la información correspondiente al protocolo HTTP bajo la leyenda “Hypertext Transfer Protocol”


Para borrar la cache del navegador, deberá ir al menu “Herramientas->Borrar historial reciente”.

Alternativamente puede utilizar Ctrl+F5 en el navegador para forzar la petición HTTP evitando el uso de caché del navegador.

En caso de querer ver de forma simplificada el contenido de una comunicación http, utilice el botón derecho sobre un paquete HTTP perteneciente al flujo capturado y seleccione la opción **Follow TCP Stream**.

#### Parte a

Abra un navegador e ingrese a la URL: www.redes.unlp.edu.ar e ingrese al link en la sección “Capa de Aplicación” llamado “Métodos HTTP”. En la página mostrada se visualizan dos nuevos links llamados: Método GET y Método POST. Ambos muestran un formulario como el siguiente:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/dbe456ec-26a7-4528-a81e-b4d05a341908)

**Analice el código HTML.**

**Utilizando el analizador de paquetes Wireshark capture los paquetes enviados y recibidos al presionar el botón Enviar.**

**¿Qué diferencias detectó en los mensajes enviados por el cliente?**


**¿Observó alguna diferencia en el browser si se utiliza un mensaje u otro?**



---

### Ejercicio 18

HTTP es un protocolo stateless, para sortear esta carencia muchos servicios se apoyan en el uso de Cookies. ¿En qué RFC se definió dicha funcionalidad? Investigue cuál es el principal uso que se le da a Set-Cookie y Cookie en HTTP. 

¿Qué atributo de la RFC original fue en parte aprovechado para la implementación?


---

### Ejercicio 19

¿Cuál es la diferencia entre un protocolo binario y uno basado en texto? 

¿de que tipo de protocolo se trata HTTP/1.0, HTTP/1.1 y HTTP/2?

---

### Ejercicio 20

Analice de que se tratan las siguientes características de HTTP/2: stream, frame, server-push

---

### Ejercicio 21

Responder las siguientes preguntas

#### Parte a

**¿Qué función cumple la cabecera Host en HTTP 1.1?**

**¿Existía en HTTP 1.0?**

**¿Qué sucede en HTTP/2?**

> Ayuda: https://undertow.io/blog/2015/04/27/An-in-depth-overview-of-HTTP2.html para HTTP/2

#### Parte b

¿Cómo quedaría en HTTP/2 el siguiente pedido realizado en HTTP/1.1 si se está usando https?

```bash
GET /index.php HTTP/1.1
Host: www.info.unlp.edu.ar
```

## Practica 3 Capa de Aplicación DNS

### DNS

- [Ejercicio 1 Investigue y describa cómo funciona el DNS. ¿Cuál es su objetivo?](#ejercicio-1)
- [Ejercicio 2 ¿Qué es un root server? ¿Qué es un generic top-level domain (gtld)?](#ejercicio-2)
- [Ejercicio 3 ¿Qué es una respuesta del tipo autoritativa?](#ejercicio-3)
- [Ejercicio 4 ¿Qué diferencia una consulta DNS recursiva de una iterativa?](#ejercicio-4)
- [Ejercicio 5 ¿Qué es el resolver?](#ejercicio-5)
- [Ejercicio 6 Describa para qué se utilizan los siguientes tipos de registros de DNS](#ejercicio-6)
- [Ejercicio 7 En Internet, un dominio suele tener más de un servidor DNS](#ejercicio-7)
- [Ejercicio 8 Cuando un dominio cuenta con más de un servidor](#ejercicio-8)
- [Ejercicio 9 Explique brevemente en qué consiste el mecanismo de transferencia de zona](#ejercicio-9)
- [Ejercicio 10  Imagine que usted es el administrador del dominio de DNS de la UNLP (unlp.edu.ar)](#ejercicio-10)
- [Ejercicio 11 Responda y justifique los siguientes ejercicios.](#ejercicio-11)
- [Ejercicio 12 Investigue los comando nslookup y host.](#ejercicio-12)
- [Ejercicio 13 ¿Qué función cumple en Linux/Unix.](#ejercicio-13)
- [Ejercicio 14 Abra el programa Wireshark para comenzar a capturar el tráfico](#ejercicio-14)
- [Ejercicio 15 Dada la siguiente situación](#ejercicio-15)
- [Ejercicio 16  Relacione DNS con HTTP.](#ejercicio-16)
- [Ejercicio 17  Observar el siguiente gráfico y contestar](#ejercicio-17)
- [Ejercicio 18  ¿A quién debería consultar para que la respuesta sobre www.google.com sea autoritativa?](#ejercicio-18)
- [Ejercicio 19 ¿Qué sucede si al servidor elegido en el paso anterior se lo consulta por www.info.unlp.edu.ar?](#ejercicio-19)

### Ejerciccio Parcial

- [Parcial | En base a la siguiente salida de dig, conteste las consignas. Justifique en todos los casos](#ejerciccio-parcial)

---

### Ejercicio 1

Investigue y describa cómo funciona el DNS. ¿Cuál es su objetivo?

---

### Ejercicio 2

¿Qué es un root server? ¿Qué es un generic top-level domain (gtld)?

---

### Ejercicio 3

¿Qué es una respuesta del tipo autoritativa?

---

### Ejercicio 4

¿Qué diferencia una consulta DNS recursiva de una iterativa?

---

### Ejercicio 5

¿Qué es el resolver?

---

### Ejercicio 6

Describa para qué se utilizan los siguientes tipos de registros de DNS:

***A***



***MX***



***PTR***



***AAAA***



***SRV***



***NS***



***CNAME***



***SOA***



***TXT***


---

### Ejercicio 7

En Internet, un dominio suele tener más de un servidor DNS. ¿Por qué cree que esto es así?

---

### Ejercicio 8

Cuando un dominio cuenta con más de un servidor, uno de ellos es el primario (o maestro) y todos los demás son los secundarios (o esclavos). ¿Cuál es la razón de que sea así?

---

### Ejercicio 9

Explique brevemente en qué consiste el mecanismo de transferencia de zona y cuál es su finalidad.


---

### Ejercicio 10

Imagine que usted es el administrador del dominio de DNS de la UNLP (unlp.edu.ar). A su vez, cada facultad de la UNLP cuenta con un administrador que gestiona su propio dominio (por ejemplo, en el caso dela Facultad de Informática se trata de info.unlp.edu.ar). Suponga que se crea una nueva facultad, Facultad de Redes, cuyo dominio será redes.unlp.edu.ar, y el administrador le indica que quiere poder manejar su propio dominio. ¿Qué debe hacer usted para que el administrador de la Facultad de Redes pueda gestionar el dominio de forma independiente? (Pista: investigue en qué consiste la delegación de dominios).


---

### Ejercicio 11

Responda y justifique los siguientes ejercicios.

#### Parte a

En la VM, utilice el comando dig para obtener la dirección IP del host www.redes.unlp.edu.ar y responda:

#### Parte b

¿Cuáles son los servidores de DNS del dominio redes.unlp.edu.ar?

#### Parte c

Repita la consulta anterior cuatro veces más. ¿Qué observa? ¿Puede explicar a qué se debe?

#### Parte d

Observe la información que obtuvo al consultar por los servidores de DNS del dominio. En base a la salida, ¿es posible indicar cuál de ellos es el primario?

#### Parte e

**Consulte por el registro SOA del dominio y responda.**

i. ¿Puede ahora determinar cuál es el servidor de DNS primario?

ii. ¿Cuál es el número de serie, qué convención sigue y en qué casos es importante actualizarlo?

iii. ¿Qué valor tiene el segundo campo del registro? Investigue para qué se usa y como se inter preta el valor.

iv. ¿Qué valor tiene el TTL de caché negativa y qué significa?


Indique qué valor tiene el registro TXT para el nombre saludo.redes.unlp.edu.ar. Investigue para qué es usado este registro.

#### Parte g

**Utilizando dig, solicite la transferencia de zona de redes.unlp.edu.ar, analice la salida y responda.**

i. ¿Qué significan los números que aparecen antes de la palabra IN? ¿Cuál es su finalidad?

ii. ¿Cuántos registros NS observa? Compare la respuesta con los servidores de DNS del dominio redes.unlp.edu.ar que dio anteriormente. ¿Puede explicar a qué se debe la diferencia y qué significa?

#### Parte h

Consulte por el registro A de www.redes.unlp.edu.ar y luego por el registro A de www.practica.redes.unlp.edu.ar. Observe los TTL de ambos. Repita la operación y compare el valor de los TTL de cada uno respecto de la respuesta anterior. ¿Puede explicar qué está ocurriendo? (Pista: observar los flags será de ayuda).

i. Consulte por el registro A de www.practica2.redes.unlp.edu.ar. ¿Obtuvo alguna respuesta? Investigue sobre los codigos de respuesta de DNS. ¿Para qué son utilizados los mensajes NXDOMAIN y NOERROR?

---

### Ejercicio 12

Investigue los comando nslookup y host. ¿Para qué sirven? Intente con ambos comandos obtener:

***Dirección IP de www.redes.unlp.edu.ar.***

***Servidores de correo del dominio redes.unlp.edu.ar.***

***Servidores de DNS del dominio redes.unlp.edu.ar***

---

### Ejercicio 13

¿Qué función cumple en Linux/Unix el archivo /etc/hosts o en Windows el archivo \WINDOWS\system32\drivers\etc\hosts?


---

### Ejercicio 14

Abra el programa Wireshark para comenzar a capturar el tráfico de red en la interfaz con IP 172.28.0.1.

Una vez abierto realice una consulta DNS con el comando dig para averiguar el registro MX de redes.unlp.edu.ar y luego, otra para averiguar los registros NS correspondientes al dominio redes.unlp.edu.ar.

Analice la información proporcionada por dig y compárelo con la captura.

---

### Ejercicio 15

Dada la siguiente situación: “Una PC en una red determinada, con acceso a Internet, utiliza los servicios de DNSdeunservidor de la red”. Analice

#### Parte a

¿Qué tipo de consultas (iterativas o recursivas) realiza la PC a su servidor de DNS?

#### Parte b

¿Qué tipo de consultas (iterativas o recursivas) realiza el servidor de DNS para resolver requerimientos de usuario como el anterior? ¿A quién le realiza estas consultas?

---

### Ejercicio 16

Relacione DNS con HTTP. ¿Se puede navegar si no hay servicio de DNS?

---

### Ejercicio 17

Observar el siguiente gráfico y contestar:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9e3ee962-c008-46cd-bd18-15e2a0c4f8d1)

Si la PC-A, que usa comoservidor de DNSa"DNSServer", desea obtener la IP de www.unlp.edu.ar, cuáles serían, y en qué orden, los pasos que se ejecutarán para obtener la respuesta.

¿Dónde es recursiva la consulta? ¿Y dónde iterativa?

---

### Ejercicio 18

¿A quién debería consultar para que la respuesta sobre www.google.com sea autoritativa?

¿Qué sucede si al servidor elegido en el paso anterior se lo consulta por www.info.unlp.edu.ar? ¿Y si la consulta es al servidor 8.8.8.8?

---

### Ejercicio 19

¿Qué sucede si al servidor elegido en el paso anterior se lo consulta por www.info.unlp.edu.ar? ¿Y si la consulta es al servidor 8.8.8.8?


---

### Ejerciccio Parcial

En base a la siguiente salida de dig, conteste las consignas. Justifique en todos los casos.


```bash
1 ;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 4, ADDITIONAL: 4
2 
3 ;; QUESTION SECTION:
4 ;ejemplo.com. IN __
5  
6 ;; ANSWER SECTION: 
7 ejemplo.com. 1634 IN __ 10 srv01.ejemplo.com.
8 ejemplo.com. 1634 IN __ 5 srv00.ejemplo.com.
9
10 ;; AUTHORITY SECTION:
11 ejemplo.com. 92354 IN __ ss00.ejemplo.com.
12 ejemplo.com. 92354 IN __ ss02.ejemplo.com.
13 ejemplo.com. 92354 IN __ ss01.ejemplo.com.
14 ejemplo.com. 92354 IN __ ss03.ejemplo.com.
15
16 ;; ADDITIONAL SECTION:
17 srv01.ejemplo.com. 272 IN __ 64.233.186.26
18 srv01.ejemplo.com. 240 IN __ 2800:3f0:4003:c00::1a
19 srv00.ejemplo.com. 272 IN __ 74.125.133.26
20 srv00.ejemplo.com. 240 IN __ 2a00:1450:400c:c07::1b
```
 
Complete las líneas donde aparece __ con el registro correcto

¿Es una respuesta autoritativa? En caso de no serlo, ¿a qué servidor le preguntaría para obtener una respuesta autoritativa?

¿La consulta fue recursiva? ¿Y la respuesta?

¿Qué representan los valores 10 y 5 en las líneas 7 y 8.


---

## Practica 4 Capa de Aplicación- Correo electrónico

###  Correo electrónico

- [Ejercicio 1 ¿Qué protocolos se utilizan para el envío de mails entre el cliente y su servidor de correo?](#ejercicio-1)
- [Ejercicio 2 ¿Qué protocolos se utilizan para la recepción de mails?](#ejercicio-2)
- [Ejercicio 3 Utilizando la VM y teniendo en cuenta los siguientes datos](#ejercicio-3)
- [Ejercicio 4 Análisis del protocolo POP](#ejercicio-4)
- [Ejercicio 5 Análisis del protocolo IMAP](#ejercicio-5)
- [Ejercicio 6 IMAP vs POP](#ejercicio-6)
- [Ejercicio 7 ¿En algún caso es posible enviar más de un correo durante una misma conexión tcp?](#ejercicio-7)
- [Ejercicio 8 Indique sí es posible que el MSA escuche en un puerto TCP](#ejercicio-8)
- [Ejercicio 9 Indique sí es posible que el MTA escuche en un puerto TCP](#ejercicio-9)
- [Ejercicio 10 Ejercicio integrador HTTP, DNS y MAIL](#ejercicio-10)
- [Ejercicio 11  Utilizando la herramienta Swaks envíe un correo electrónico](#ejercicio-11)
- [Ejercicio 12 Observar el gráfico a continuación y teniendo en cuenta lo siguiente](#ejercicio-12)

---

### Ejercicio 1

¿Qué protocolos se utilizan para el envío de mails entre el cliente y su servidor de correo? ¿Y entre servidores de correo?

---

### Ejercicio 2

¿Quéprotocolos se utilizan para la recepción de mails? Enumere y explique características y diferencias entre las alternativas posibles.

---

### Ejercicio 3

Utilizando la VM y teniendo en cuenta los siguientes datos, abra el cliente de correo (thunderbird) y configure dos cuentas de correo. Una de las cuentas utilizará POP para solicitar al servidor los mails recibidos para la misma mientras que la otra utilizará IMAP.

Al crear cada una de las cuentas, seleccionar Manual config y luego de configurar las mismas según lo indicado, ignorar advertencias por uso de conexión sin cifrado.

**Datos para POP**

- **Cuenta de correo**: alumnopop@redes.unlp.edu.ar
- **Nombre de usuario**: alumnopop
- **Contraseña**: alumnopoppass
- **Puerto**: 110

**Datos para IMAP**

- **Cuenta de correo**: alumnoimap@redes.unlp.edu.ar
- **Nombre de usuario**: alumnoimap
- **Contraseña**: alumnoimappass
- **Puerto**: 143

**Datos comunes para ambas cuentas**

- Servidor de correo entrante (POP/IMAP):
    - Nombre: mail.redes.unlp.edu.ar
    - SSL: None
    - Autenticación: Normal password
- Servidor de correo saliente (SMTP):
    - Nombre: mail.redes.unlp.edu.ar
    - Puerto: 25
    - SSL: None
    - Autenticación: Normal password

#### Parte a

Verificar el correcto funcionamiento enviando un email desde el cliente de una cuenta a la otra y luego desde la otra responder el mail hacia la primera.

#### Parte b

**Análisis del protocolo SMTP**

i. Utilizando Wireshark, capture el tráfico de red contra el servidor de correo mientras desde la cuenta alumnopop@redes.unlp.edu.ar envía un correo a alumnoimap@redes.unlp.edu.ar

ii. Utilice el filtro SMTP para observar los paquetes del protocolo SMTP en la captura generada y
analice el intercambio de dicho protocolo entre el cliente y el servidor para observar los distintos
comandos utilizados y su correspondiente respuesta. Ayuda: filtre por protocolo SMTP y sobre
alguna de las líneas del intercambio haga click derecho y seleccione Follow TCP Stream...

#### Parte c

Usandoelcliente de correo, thunderbird del usuario alumnopop@redes.unlp.edu.ar envíe un correo electrónico alumnoimap@redes.unlp.edu.ar el cual debe tener: un asunto, datos en el body y una imagen adjunta.

i. Verifique los fuentes del correo recibido para entender como se utiliza el header “Content-Type:

- multipart/mixed“ para poder realizar el envío de distintos archivos adjuntos.

ii. Extraiga la imagen adjunta del mismo modo que lo hace el cliente de correo a partir de los fuentes del mensaje.

---

### Ejercicio 4

**Análisis del protocolo POP**

#### Parte a

Utilizando Wireshark, capture el tráfico de red contra el servidor de correo mientras desde la cuenta alumnoimap@redes.unlp.edu.ar le envía una correo a alumnopop@redes.unlp.edu.ar y mientras alumnopop@redes.unlp.edu.ar recepciona dicho correo.

#### Parte b

Utilice el filtro POP para observar los paquetes del protocolo POP en la captura generada y analice el intercambio de dicho protocolo entre el cliente y el servidor para observar los distintos comandos utilizados y su correspondiente respuesta

---

### Ejercicio 5

**Análisis del protocolo IMAP**

#### Parte a

Utilizando Wireshark, capture el tráfico de red contra el servidor de correo mientras desde la cuenta alumnopop@redes.unlp.edu.ar le envía una correo a alumnoimap@redes.unlp.edu.ar y mientras alumnoimap@redes.unlp.edu.ar recepciona dicho correo.

#### Parte b

Utilice el filtro IMAP para observar los paquetes del protocolo IMAP en la captura generada y analice el intercambio de dicho protocolo entre el cliente y el servidor para observar los distintos comandos utilizados y su correspondiente respuesta.

---

### Ejercicio 6

***IMAP vs POP***

#### Parte a

Marque como leídos todos los correos que tenga en el buzón de entrada de alumnopop y de alumnoimap. Luego, cree una carpeta llamada POP en la cuenta de alumnopop y una llamada IMAP en la cuenta de alumnoimap.

Asegurese que tiene mails en el inbox y en la carpeta recientemente creada en cada una de las cuentas.

#### Parte b

Cierre la sesión iniciada e ingrese nuevamente identificandose como usuario root y password packer, ejecute el cliente de correos.

De esta forma, iniciará el cliente de correo con el perfil del superusuario (diferente del usuario con el que ya configuró las cuentas antes mencionadas).

Luego configure las cuentas POP e IMAP de los usuarios alumnopop y alumnoimap como se describió anteriormente pero desde el cliente de correos ejecutado con el usuario root.

Luego responda:

i. ¿Qué correos ve en el buzón de entrada de ambas cuentas? ¿Están marcados como leídos o como no leídos? ¿Por qué?
 
ii. ¿Qué pasó con las carpetas POP e IMAP que creó en el paso anterior?

#### Parte c

Enbase a lo observado.¿Qué protocolo le parece mejor? ¿POP o IMAP?¿Por qué? ¿Qué protocolo considera que utiliza más recursos del servidor? ¿Por qué?

---

### Ejercicio 7

¿En algún caso es posible enviar más de un correo durante una misma conexión tcp?

**Considere**:

- Destinatarios múltiples del mismo dominio entre MUA-MSA y entre MTA-MTA
- Destinatarios múltiples de diferentes dominios entre MUA-MSA y entre MTA-MTA

---

### Ejercicio 8

Indique sí es posible que el MSA escuche en un puerto TCP diferente a los convencionales y qué implicancias tendría.

---

### Ejercicio 9

Indique sí es posible que el MTA escuche en un puerto TCP diferente a los convencionales y qué implicancias tendría.

---

### Ejercicio 10

***Ejercicio integrador HTTP, DNS y MAIL***

Suponga que registró bajo su propiedad el dominio redes2022.com.ar y dispone de 4 servidores:

- Un servidor DNS instalado configurado como primario de la zona redes2022.com.ar. (hostname: ns1 / ip: 203.0.113.65).
- Un servidor DNS instalado configurado como secundario de la zona redes2022.com.ar. (hostname: ns2 / ip: 203.0.113.66).
- Un servidor de correo electrónico (hostname: mail / ip: 203.0.113.111). Permitirá a los usuarios envíar y recibir correos a cualquier dominio de Internet.
- Un servidor WEB para el acceso a un webmail (hostname: correo / ip: 203.0.113.8). Permitirá a los usuarios gestionar vía web sus correos electrónicos a través de la URL https://webmail.redes2022.com.ar

#### Parte a

¿Qué información debería informar al momento del registro para hacer visible a Internet el dominio registrado?

#### Parte b

¿Qué registros sería necesario configurar en el servidor de nombres? Indique toda la información necesaria del archivo de zona. Puede utilizar la siguiente tabla de referencia (evalúe la necesidad de usar cada caso los siguientes campos): Nombre del registro, Tipo de registro, Prioridad, TTL, Valor del registro.

#### Parte c

¿Es necesario que el servidor de DNS acepte consultas recursivas? Justifique.

#### Parte d

¿Qué servicios/protocolos de capa de aplicación configuraría en cada servidor?

#### Parte e

Para cada servidor, ¿qué puertos considera necesarios dejar abiertos a Internet?. A modo de referencia, para cada puerto indique: servidor, protocolo de transporte y número de puerto.

#### Parte f

¿Cómo cree que se conectaría el webmail del servidor web con el servidor de correo? ¿Qué protocolos usaría y para qué?

#### Parte g

¿Cómo se podría hacer para que cualquier MTA reconozca como válidos los mails provienentes del dominio redes2022.com.ar solamente a los que llegan de la dirección 203.0.113.111? ¿Afectaría esto a los mails enviados desde el Webmail? Justifique.

#### Parte h

¿Qué característica propia de SMTP, IMAP y POP hace que al adjuntar una imagen o un ejecutable sea necesario aplicar un encoding (ej. base64)?

#### Parte i

¿Se podría enviar un mail a un usuario de modo que el receptor vea que el remitente es un usuario distinto? En caso afirmativo, ¿Cómo? ¿Es una indicación de una estafa? Justifique

#### Parte j

¿Sepodría enviar un mail a un usuario de modo queel receptor vea que el destinatario es un usuario distinto? En caso afirmativo, ¿Cómo? ¿Por qué no le llegaría al destinatario que el receptor vé? ¿Es esto una indicación de una estafa? Justifique

#### Parte k

¿Qué protocolo usará nuestro MUA para enviar un correo con remitente redes@info.unlp.edu.ar? ¿Con quién se conectará? ¿Qué información será necesaria y cómo la obtendría?

#### Parte l

Dado que solo disponemos de un servidor de correo, ¿qué sucederá con los mails que intenten ingresar durante un reinicio del servidor?

#### Parte m

Suponga que contratamos un servidor de correo electrónico en la nube para integrarlo con nuestra arquitectura de servicios.
 
 i. ¿Cómo configuraría el DNS para que ambos servidores de correo se comporten de manera de dar un servicio de correo tolerante a fallos?

---

### Ejercicio 11

Utilizando la herramienta Swaks envíe un correo electrónico con las siguientes características:

- **Dirección destino**: Dirección de correo de alumnoimap@redes.unlp.edu.ar
- **Dirección origen**: redesycomunicaciones@redes.unlp.edu.ar
- **Asunto**: SMTP-Práctica4
- **Archivo adjunto**: PDF del enunciado de la práctica
- **Cuerpo del mensaje**: Esto es una prueba del protocolo SMTP

#### Parte a

Analice tanto la salida del comando swaks como los fuentes del mensaje recibido para responder las siguientes preguntas:



i. ¿A qué corresponde la información enviada por el servidor destino como respuesta al comando EHLO? Elija dos de las opciones del listado e investigue la funcionalidad de la misma.


ii. Indicar cuáles cabeceras fueron agregadas por la herramienta swaks.


iii. ¿Cuál es el message-id del correo enviado? ¿Quién asigna dicho valor?


iv. ¿Cuál es el software utilizado como servidor de correo electrónico?


v. Adjunte la salida del comando swaks y los fuentes del correo electrónico.

#### Parte b

Descargue de la plataforma la captura de tráfico smtp.pcang y la salida del comando swakssmtp.swaks para responder y justificar los siguientes ejercicios.
 
i. ¿Por qué el contenido del mail no puede ser leido en la captura de tráfico?


#### Parte c

Realice una consulta de DNS por registros TXT al dominio info.unlp.edu.ar y entre dichos registros evalúe la información del registro SPF. ¿Por qué cree que aparecen muchos servidores autorizados?

#### Parte d

Realice una consulta de DNS por registros TXT al dominio outlook.com y analice el registro corres pondiente a SPF. ¿Cuáles son los bloques de red autorizados para enviar mails?. Investigue para qué se utiliza la directiva "~all"

---


### Ejercicio 12

Observar el gráfico a continuación y teniendo en cuenta lo siguiente , responder:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/feb0fe37-de82-4cc4-ae83-f7824aa921ec)

- El usuario juan@misitio.com.ar en PC-A desea enviar un mail al usuario alicia@example.com
- Cada organización tiene su propios servidores de DNS y Mail
- El servidor ns1 no tiene la recursión habilitada para consultas realizadas desde fuera del dominio misitio.com.ar

#### Parte a

El servidor de mail, mail1, y de HTTP, www, de example.com tienen la misma IP, ¿es posible esto? Si lo es, ¿cómo lo resolvería?

#### Parte b

Al enviar el mail, ¿por qué registro de DNS consultará el MUA?

#### Parte c

Una vez que el mail fue recibido por el servidor smtp-5, ¿por qué registro de DNS consultará?

#### Parte d

Si en el punto anterior smtp-5 recibiese un listado de nombres de servidores de correo, ¿será necesario realizar una consulta de DNS adicional? Si es afirmativo, ¿por qué tipo de registro y de cuál servidor preguntaría?

#### Parte e

Indicar todo el proceso que deberá realizar el servidor ns1 de misitio.com.ar para obtener los servidores de mail de example.com

#### Parte f

Teniendo en cuenta el proceso de encapsulación/desencapsulación y definición de protocolos, res ponder V o F y justificar:

- Los datos de la cabecera de SMTP deben ser analizados por el servidor DNS para responder a la consulta de los registros MX
- Al ser recibidos por el servidor smtp-5 los datos agregados por el protocolo SMTP serán analizados por cada una de las capas inferiores
- Cada protocolo de la capa de aplicación agregará una cabecera con información propia de ese protocolo
- Como son todos protocolos de la capa de aplicación, las cabeceras agregadas por el protocolo de DNS puede ser analizadas y comprendidas por el protocolo SMTP o HTTP
- Para que los cliente en misitio.com.ar puedan acceder el servidor HTTP www.example.com y mostrar correctamente su contenido deben tener el mismo sistema operativo.

#### Parte g

Un cliente web que desea acceder al servidor www.example.com y que no pertenece a ninguno de estos dos dominios puede usar a ns1 de misitio.com.ar como servidor de DNS para resolver la consulta.


#### Parte h

Cuando Alicia quiera ver sus mails desde PC-D, ¿qué registro de DNS deberá consultarse?

#### Parte i

Indicar todos los protocolos de mail involucrados, puerto y si usan TCP o UDP, en el envío y recepción de dicho mail

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

¿Cuál es la función de la capa de transporte?

---

### Ejercicio 2

Describa la estructura del segmento TCP y UDP.

---

### Ejercicio 3

¿Cuál es el objetivo del uso de puertos en el modelo TCP/IP?

---

### Ejercicio 4

Compare TCP y UDP en cuanto a:

- **a)** Confiabilidad.
- **b)** Multiplexación.
- **c)** Orientado a la conexión.
- **d)** Controles de congestión.
- **e)** Utilización de puertos.

---

### Ejercicio 5

La PDU de la capa de transporte es el segmento. Sin embargo, en algunos contextos suele utilizarse el término datagrama. Indique cuando.

---

### Ejercicio 6

Describa el saludo de tres vías de TCP. ¿Se utiliza algo similar en UDP?

---

### Ejercicio 7

Investigue qué es el ISN (Initial Sequence Number). Relaciónelo con el saludo de tres vías

---

### Ejercicio 8

Investigue qué es el MSS. ¿Cuándo y cómo se negocia?

---

### Ejercicio 9

Utilice el comando ss (reemplazo de netstat) para obtener la siguiente información de su PC:

- **a)** Para listar las comunicaciones TCP establecidas.
- **b)** Para listar las comunicaciones UDP establecidas.
- **c)** Obtener sólo los servicios TCP que están esperando comunicaciones
- **d)** Obtener sólo los servicios UDP que están esperando comunicaciones.
- **e)** Repetir los anteriores para visualizar el proceso del sistema asociado a la conexión.
- **f)** Obtenga la misma información planteada en los items anteriores usando el comando netstat.

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

## Practica 6

### Capa de Transporte - Parte 2

- [Ejercicio 1 ¿Cual es el puerto por defecto que se utiliza en los siguientes servicios?](#ejercicio-1)
- [Ejercicio 2 Investigue qué es multicast](#ejercicio-2)
- [Ejercicio 3 Investigue cómo funciona el protocolo de aplicación FTP](#ejercicio-3)
- [Ejercicio 4 Suponiendo Selective Repeat](#ejercicio-4)
- [Ejercicio 5 ¿Qué restricción existe sobre el tamaño de ventanas en el protocolo Selective Repeat?](#ejercicio-5)
- [Ejercicio 6 De acuerdo a la captura TCP de la siguiente figura](#practica-6)
- [Ejercicio 7 Dada la sesión TCP de la figura](#practica-7)
- [Ejercicio 8 ¿Qué es el RTT y cómo se calcula?](#ejercicio-8)
- [Ejercicio 9 Para la captura dada](#ejercicio-9)
- [Ejercicio 10 Responda las siguientes preguntas respecto del mecanismo de control de flujo](#ejercicio-10)
- [Ejercicio 11 Responda las siguientes preguntas respecto del mecanismo de control de congestión](#ejercicio-11)
- [Ejercicio 12 Para la captura dada, responder las siguientes preguntas](#ejercicio-12)

**Programación de sockets**
- [Ejercicio 13 Desarrolle un cliente y un servidor](#ejercicio-13)
- [Ejercicio 14 Compare ambas implementaciones](#ejercicio-14)

**Ejercicios de parcial**
- [Ejercicio 15 ](#ejercicio-15)
- [Ejercicio 16 ](#ejercicio-16)

---

### Ejercicio 1

¿Cual es el puerto por defecto que se utiliza en los siguientes servicios?

Web / SSH/ DNS/WebSeguro / POP3 / IMAP / SMTP

Investigue en qué lugar en Linux y en Windows está descripta la asociación utilizada por defecto para cada servicio.

---

### Ejercicio 2

Investigue qué es multicast. ¿Sobre cuál de los protocolos de capa de transporte funciona? ¿Se podría adaptar para que funcione sobre el otro protocolo de capa de transporte? ¿Por qué?

---

### Ejercicio 3

Investigue cómo funciona el protocolo de aplicación FTP teniendo en cuenta las diferencias en su funcionamiento cuando se utiliza el modo activo de cuando se utiliza el modo pasivo ¿En qué se diferencian estos tipos de comunicaciones del resto de los protocolos de aplicación vistos?


---

### Ejercicio 4

Suponiendo Selective Repeat; tamaño de ventana 4 y sabiendo que E indica que el mensaje llegó con errores. Indique en el siguiente gráfico, la numeración de los ACK que el host B envía al Host A.

![image](https://github.com/Fabo-University/Redes-y-Comunicaciones/assets/55964635/59e988f8-8de1-49b4-ace9-54d0816f4f2e)

---

### Ejercicio 5

¿Qué restricción existe sobre el tamaño de ventanas en el protocolo Selective Repeat?

---

### Ejercicio 6

De acuerdo a la captura TCP de la siguiente figura, indique los valores de los campos borroneados.

![image](https://github.com/Fabo-University/Redes-y-Comunicaciones/assets/55964635/59fed271-c367-444e-b487-a604b6b145f9)

---

### Ejercicio 7

Dada la sesión TCP de la figura, completar los valores marcados con un signo de interrogación


![image](https://github.com/Fabo-University/Redes-y-Comunicaciones/assets/55964635/ddce3aa5-4810-428c-a5fc-c962f39a48c5)

---

### Ejercicio 8

¿Qué es el RTT y cómo se calcula? Investigue la opción TCP timestamp y los campos TSval y TSecr

---

### Ejercicio 9

Para la captura dada, responder las siguientes preguntas

#### Parte a

¿Cuántos intentos de conexiones TCP hay?

#### Parte b

¿Cuáles son la fuente y el destino (IP:port) para c/u?

#### Parte c

¿Cuántas conexiones TCP exitosas hay en la captura? Cómo diferencia las exitosas de las que no lo son? ¿Cuáles flags encuentra en cada una?

#### Parte d

Dada la primera conexión exitosa responder

i. ¿Quién inicia la conexión?


ii. ¿Quién es el servidor y quién el cliente?


iii. ¿En qué segmentos se ve el 3-way handshake?


iv. ¿Cuáles ISNs se intercambian?


v. ¿Cuál MSS se negoció?


vi. ¿Cuál de los dos hosts enva la mayor cantidad de datos (IP:port)?

#### Parte e

Identificar primer segmento de datos (origen, destino, tiempo, número de fila y número de secuencia TCP).

i. ¿Cuántos datos lleva?
 
ii. ¿Cuándo es confirmado (tiempo, número de fila y número de secuencia TCP)?
 
iii. La confirmación, ¿qué cantidad de bytes confirma?

#### Parte f

¿Quién inicia el cierre de la conexión? ¿Qué flags se utilizan? ¿En cuáles segmentos se ve (tiempo, número de fila y número de secuencia TCP)?

---

#### Ejercicio 10

Responda las siguientes preguntas respecto del mecanismo de control de flujo

- **a)** ¿Quién lo activa? ¿De qué forma lo hace?
- **b)** ¿Qué problema resuelve?
- **c)** ¿Cuánto tiempo dura activo y qué situación lo desactiva?

---

#### Ejercicio 11

Responda las siguientes preguntas respecto del mecanismo de control de congestión.

- **a)** ¿Quién lo activa el mecanismo de control de congestión? ¿Cuáles son los posibles disparadores?
- **b)** ¿Qué problema resuelve?
- **c)** Diferencie slow start de congestion-avoidance.

---

#### Ejercicio 12

Para la captura dada, responder las siguientes preguntas.

#### Parte a

¿Cuántas comunicaciones (srcIP,srcPort,dstIP,dstPort) UDP hay en la captura?

#### Parte b

¿Cómo se podrían identificar las exitosas de las que no lo son?

#### Parte c

¿UDP sigue el modelo cliente/servidor?

#### Parte d

¿Qué servicios o aplicaciones suelen utilizar este protocolo?

#### Parte e

¿Qué hace el protocolo UDP en relación al control de errores?

#### Parte f

Con respecto a los puertos vistos en las capturas, ¿observa algo particular que lo diferencie de TCP?

#### Parte g

Dada la primera comunicación en la cual se ven datos en ambos sentidos (identificar el primer datagrama):

i. ¿Quién envía el primer datagrama (srcIP,srcPort)?

ii. ¿Cuantos datos se envían en un sentido y en el otro?

#### Parte h

¿Se puede calcular un RTT?

---

## Programación de sockets

#### Ejercicio 13

Resuelva los siguientes ejercicios utilizando el lenguaje de programación que prefiera (por simpleza, se recomiendan Python o Ruby).

#### Utilizando UDP

#### Utilizando TCP

---

#### Ejercicio 14

Compare ambas implementaciones. ¿Qué diferencia nota entre la implementación de cada una? ¿Cuál le parece más simple?

---


## Ejercicios de parcial

#### Ejercicio 15

Dada la salida que se muestra en la imagen, responda los ítems debajo.

![image](https://github.com/Fabo-University/Redes-y-Comunicaciones/assets/55964635/14935f8d-003a-41e0-ad06-5c5cfbeedfdd)

Suponga que ejecuta los siguientes comandos desde un host con la IP 10.100.25.90. 

Responda qué devuelve la ejecución de los siguientes comandos y, en caso que corresponda, especifique los flags.

- **a)** hping3-p 3306–udp 10.100.25.135
- **b)** hping3-S-p 25 10.100.25.135
- **c)** hping3-S-p 22 10.100.25.135
- **d)** hping3-S-p 110 10.100.25.135

¿Cuántas conexiones distintas hay establecidas? Justifique.

---

#### Ejercicio 16

Complete en la columna Orden, el orden de aparición de los paquetes representados en cada fila

![image](https://github.com/Fabo-University/Redes-y-Comunicaciones/assets/55964635/66e99eff-0818-4127-8f80-1c4f5cd041e2)

---


## Practica 7

### Capa de Red - Direccionamiento

**Introducción**
- [Ejercicio 1 ¿Qué servicios presta la capa de red? ¿Cuál es la PDU en esta capa? ¿Qué dispositivo es considerado sólo de la capa de red?](#ejercicio-1)
- [Ejercicio 2 ¿Por qué se lo considera un protocolo de mejor esfuerzo?](#ejercicio-2)
- [Ejercicio 3 ¿Cuántas redes clase A, B y C hay? ¿Cuántos hosts como máximo pueden tener cada una?](#ejercicio-3)
- [Ejercicio 4 ¿Qué son las subredes? ¿Por qué es importante siempre especificar la máscara de subred asociada?](#ejercicio-4)
- [Ejercicio 5 ¿Cuál es la finalidad del campo Protocol en la cabecera IP? ¿A qué campos de la capa de transporte se asemeja en su funcionalidad?](#ejercicio-5)

**División en subredes**

- [Ejercicio 6 Para cada una de las siguientes direcciones IP](#ejercicio-6)
- [Ejercicio 7 Su organización cuenta con la dirección de red 128.50.10.0. Indique](#práctica-7)
- [Ejercicio 8 Si usted estuviese a cargo de la administración del bloque IP 195.200.45.0/24](#ejercicio-8)
- [Ejercicio 9 Dado el siguiente gráfico](#ejercicio-9)

**CIDR**

- [Ejercicio 10 ¿Qué es CIDR (Class Interdomain routing)?](#ejercicio-10)
- [Ejercicio 11 ¿Cómo publicaría un router las siguientes redes si se aplica CIDR?](#ejercicio-11)
- [Ejercicio 12 Listar las redes involucradas en los siguientes bloques CIDR](#ejercicio-12)
- [Ejercicio 13 El bloque CIDR 128.0.0.0/2 o 128/2](#ejercicio-13)

**VLSM**

- [Ejercicio 14 ¿Qué es y para qué se usa VLSM?](#ejercicio-14)
- [Ejercicio 15 Describa, con sus palabras, el mecanismo para dividir subredes utilizando VLSM](#ejercicio-15)
- [Ejercicio 16 Suponga que trabaja en una organización que tiene la red que se ve en el gráfico](#ejercicio-16)
- [Ejercicio 17 Utilizando la siguiente topología y el bloque asignado](#ejercicio-17)
- [Ejercicio 18 Asigne direcciones IP en los equipos de la topología según el plan anterior](#ejercicio-18)

**ICMP y Configuraciones IP**

- [Ejercicio 19 Describa qué es y para qué sirve el protocolo ICMP](#ejercicio-19)
- [Ejercicio 20 ¿Para que se usa el bloque 127.0.0.0/8?](#ejercicio-20)
- [Ejercicio 21 Investigue para qué sirven los comandos ifconfig y route.](#ejercicio-21)

---


### Ejercicio 1

¿Qué servicios presta la capa de red?

¿Cuál es la PDU en esta capa?

¿Qué dispositivo es considerado sólo de la capa de red?


---

### Ejercicio 2

¿Por qué se lo considera un protocolo de mejor esfuerzo?

---

### Ejercicio 3

¿Cuántas redes clase A, B y C hay?

¿Cuántos hosts como máximo pueden tener cada una?

---

### Ejercicio 4

¿Qué son las subredes?

¿Por qué es importante siempre especificar la máscara de subred asociada?

---

### Ejercicio 5

¿Cuál es la finalidad del campo Protocol en la cabecera IP?

¿A qué campos de la capa de transporte se asemeja en su funcionalidad?


---

### Ejercicio 6

Para cada una de las siguientes direcciones IP (172.16.58.223/26, 163.10.5.49/27, 128.10.1.0/23, 10.1.0.0/24, 8.40.11.179/12) determine:

#### Parte a

¿De qué clase de red es la dirección dada (Clase A, B o C)?

#### Parte b

¿Cuál es la dirección de subred?

#### Parte c

¿Cuál es la cantidad máxima de hosts que pueden estar en esa subred?

#### Parte d

¿Cuál es la dirección de broadcast de esa subred?

#### Parte e

¿Cuál es el rango de direcciones IP válidas dentro de la subred?

---

### Ejercicio 7

Su organización cuenta con la dirección de red 128.50.10.0. Indique:

#### Ejercicio a)

¿Es una dirección de red o de host?

#### Ejercicio b)

Clase a la que pertenece y máscara de clase.

#### Ejercicio c)

Cantidad de hosts posibles.

#### Ejercicio d)

Se necesitan crear, al menos, 513 subredes. Indique:

i. Máscara necesaria.

ii. Cantidad de redes asignables.

iii. Cantidad de hosts por subred.

iv. Dirección de la subred 710.

v. Dirección de broadcast de la subred 710


---

### Ejercicio 8

Si usted estuviese a cargo de la administración del bloque IP 195.200.45.0/24

#### Parte a

¿Qué máscara utilizaría si necesita definir al menos 9 subredes?

#### Parte b

Indique la dirección de subred de las primeras 9 subredes.

#### Parte c

Seleccione una e indique dirección de broadcast y rango de direcciones asignables en esa 
subred.

---

### Ejercicio 9

Dado el siguiente gráfico:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c4d6738b-0a8f-4692-97ed-f150867eee30)

#### Parte a
 
Verifique si es correcta la asignación de direcciones IP y, en caso de no serlo, modifique la misma para que lo sea.
 
#### Parte b
 
¿Cuántos bits se tomaron para hacer subredes en la red 10.0.10.0/24? ¿Cuántas subredes se podrían generar?

#### Parte c

Para cada una de las redes utilizadas indique si son públicas o privadas.

---

## CIRD

### Ejercicio 10

¿Qué es CIDR (Class Interdomain routing)?

¿Por qué resulta útil?

---

### Ejercicio 11

¿Cómo publicaría un router las siguientes redes si se aplica CIDR?

- 198.10.1.0/24
- 198.10.0.0/24
- 198.10.3.0/24
- 198.10.2.0/2



---

### Ejercicio 12

Listar las redes involucradas en los siguientes bloques CIDR:

- 200.56.168.0/21
- 195.24.0.0/13
- 195.24/13

---

### Ejercicio 13

El bloque CIDR 128.0.0.0/2 o 128/2, 

¿Equivale a listar todas las direcciones de red de clase B? 

¿Cuál sería el bloque CIDR que agrupa todas las redes de clase A?

---

### VLSM

### Ejercicio 14

¿Qué es y para qué se usa VLSM?


---

### Ejercicio 15

Describa, con sus palabras, el mecanismo para dividir subredes utilizando VLSM.

---

### Ejercicio 16

Suponga que trabaja en una organización que tiene la red que se ve en el gráfico y debe armar el direccionamiento para la misma, minimizando el desperdicio de direcciones IP. Dicha organización posee la red 205.10.192.0/19, que es la que usted deberá utilizar.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/64885ee2-2455-4020-a151-2696bb91c304)

#### Parte a

¿Es posible asignar las subredes correspondientes a la topología utilizando subnetting sin vlsm? Indique la cantidad de hosts que se desperdicia en cada subred.


#### Parte b

Asigne direcciones a todas las redes de la topología. Tome siempre en cada paso la primer dirección de red posible.


#### Parte c

Para mantener el orden y el inventario de direcciones disponibles, haga un listado de todas las direcciones libres que le quedaron, agrupándolas utilizando CIDR.


#### Parte d

Asigne direcciones IP a todas las interfaces de la topología que sea posible.



---

### Ejercicio 17

Utilizando la siguiente topología y el bloque asignado, arme el plan de direccionamiento IPv4 teniendo en cuenta las siguientes restricciones:

Utilizar el bloque IPv4 200.100.8.0/22.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3b2ea30a-1cd4-45b9-9e9f-147e115608cc)

#### Parte a

La red A tiene 125 hosts y se espera un crecimiento máximo de 20 hosts.

#### Parte b

La red X tiene 63 hosts.

#### Parte c

La red B cuenta con 60 hosts

#### Parte d

La red Y tiene 46 hosts y se espera un crecimiento máximo de 18 hosts.

#### Parte e

En cada red, se debe desperciciar la menor cantidad de direcciones IP posibles. En este 
sentido, las redes utilizadas para conectar los routers deberán utilizar segmentos de red /30 de modo de desperdiciar la menor cantidad posible de direcciones IP.

---

### Ejercicio 18

Asigne direcciones IP en los equipos de la topología según el plan anterior.

---

## ICMP y Configuraciones IP

### Ejercicio 19

Describa qué es y para qué sirve el protocolo ICMP

#### Parte a

Analice cómo funciona el comando ping.

i. Indique el tipo y código ICMP que usa el ping.
ii. Indique el tipo y código ICMP que usa la respuesta de un ping.

#### Parte b

Analice cómo funcionan comandos como traceroute/tracert de Linux/Windows y cómo manipulan el campo TTL de los paquetes IP.

#### Parte c

Indique la cantidad de saltos realizados desde su computadora hasta el sitio www.nasa.gov. Analice:

i. Cómo hacer para que no muestre el nombre del dominio asociado a la IP de cada salta.

ii. La razón de la aparición de * en parte o toda la respuesta de un salto.

#### Parte d

Verifique el recorrido hacia los servidores de nombre del dominio unlp.edu.ar. En base al recorrido realizado, ¿podría confirmar cuál de ellos toma un camino distinto?

---

### Ejercicio 20

¿Para que se usa el bloque 127.0.0.0/8?

¿Qué PC responde a los siguientes comandos?

- **a)** ping 127.0.0.1
- **b)** ping 127.0.54.43

---


### Ejercicio 21

Investigue para qué sirven los comandos ifconfig y route. ¿Qué comandos podría utilizar en su reemplazo? Inicie una topología con CORE, cree una máquina y utilice en ella los comandos anteriores para practicar sus diferentes opciones, mínimamente:

- Configurar y quitar una dirección IP en una interfaz.
- Ver la tabla de ruteo de la máquina.

---

## Practica 8

### Capa de Red: Fragmentación- Ruteo

**Recomendación**

> Al final de la práctica se encuentra un ejercicio para ser realizado en la herramienta CORE. Si bien el ejercicio no agrega conceptos nuevos a los vistos previamente recomendamos su resolución para que puedan configurar, probar y analizar todo lo aprendido en una simulación de una red.

**Fragmentación**

- [Ejercicio 2. Se tiene la siguiente red con los MTUs indicados en la misma.](#ejercicio-2)
- [Ejercicio 3 ¿Qué es el ruteo? ¿Por qué es necesario?](#ejercicio-3)
- [Ejercicio 4 En las redes IP el ruteo puede configurarse en forma estática o en forma dinámica](#ejercicio-4)
- [Ejercicio 5 Una máquina conectada a una red pero no a Internet, ¿tiene tabla de ruteo?](#ejercicio-5)
- [Ejercicio 6 Observando el siguiente gráfico y la tabla de ruteo del router D](#ejercicio-6)
- [Ejercicio 7 Evalúe para cada caso si el mensaje llegará a destino](#ejercicio-7)

**DHCP y NAT**

- [Ejercicio 8 Con la máquina virtual con acceso a Internet realice las siguientes observaciones](#ejercicio-8)
- [Ejercicio 9 ¿Qué es NAT y para qué sirve?](#ejercicio-9)
- [Ejercicio 10 ¿Qué especifica la RFC 1918 y cómo se relaciona con NAT?](#ejercicio-10)
- [Ejercicio 11 En la red de su casa o trabajo verifique la dirección IP de su computadora y luego acceda a www.cualesmiip.com](#ejercicio-11)
- [Ejercicio 12 Resuelva las consignas que se dan a continuación](#ejercicio-12)
- [Ejercicio 13 Asigne las redes que faltan utilizando los siguientes bloques y las consideraciones debajo](#ejercicio-13)
- [Ejercicio 14 Asigne IP a todas las interfaces de las redes listadas a continuación](#ejercicio-14)
- [Ejercicio 15 Realice las tablas de rutas de RouterE y BORDER considerando](#ejercicio-15)
- [Ejercicio 16 Utilizando la máquina virtual, se configurará ruteo estático en la red](#ejercicio-16)

---


### Ejercicio 2

Se tiene la siguiente red con los MTUs indicados en la misma. Si desde pc1 se envía un paquete IP a pc2 con un tamaño total de 1500 bytes (cabecera IP más payload) con el campo Identification = 20543, responder:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/32329820-51e7-4344-8fe9-d718683d67f1)

- Indicar IPs origen y destino y campos correspondientes a la fragmentación cuando el paquete sale de pc1
- ¿Qué sucede cuando el paquete debe ser reenviado por el router R1?
- Indicar cómo quedarían las paquetes fragmentados para ser enviados por el enlace entre R1 y R2.
- ¿Dónde se unen nuevamente los fragmentos? ¿Qué sucede si un fragmento no llega? 
- Si un fragmento tiene que ser reenviado por un enlace con un MTU menor al tamaño del fragmento, ¿qué hará el router con ese fragmento?

---

### Ejercicio 3

¿Qué es el ruteo?

¿Por qué es necesario?

---

### Ejercicio 4

En las redes IP el ruteo puede configurarse en forma estática o en forma dinámica. Indique ventajas y desventajas de cada método.

---

### Ejercicio 5

Una máquina conectada a una red pero no a Internet, ¿tiene tabla de ruteo?

---

### Ejercicio 6

Observando el siguiente gráfico y la tabla de ruteo del router D, responder:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/482f5dd5-acb7-4fa6-aa87-7c6a1d36eb0c)

 #### Parte a
 
 ¿Está correcta esa tabla de ruteo? En caso de no estarlo, indicar el o los errores encontrados.
 
 Escribir la tabla correctamente (no es necesario agregar las redes que conectan contra los ISPs)
 
#### Parte b
 
Con la tabla de ruteo del punto anterior, Red D, ¿tiene salida a Internet?

¿Por qué?

¿Cómo lo solucionaría? 

Suponga que los demás routers están correctamente configurados, con salida a Internet y que Rtr-D debe salir a Internet por Rtr-C.

#### Parte c

Teniendo en cuenta lo aplicado en el punto anterior, si en Rtr-C estuviese la siguiente entrada en su tabla de ruteo qué sucedería si desde una PC en Red D se quiere acceder un servidor con IP 163.10.5.15

| Red Destino | Mask | Next-Hop | Iface |
|-------------|------|----------|-------|
| 163.10.5.0  | /24  | 10.0.0.9 | eth1  |

#### Parte d

¿Esposible aplicar sumarización en esa tabla, la del router Rtr-D? 

¿Por qué? ¿Qué debería suceder para poder aplicarla?

#### Parte e

La sumarización aplicada en el punto anterior, ¿se podría aplicar en Rtr-B?

¿Por qué?

#### Parte f

Escriba la tabla de ruteo de Rtr-B teniendo en cuenta lo siguiente:

- Debe llegarse a todas las redes del gráfico
- Debe salir a Internet por Rtr-A
- Debe pasar por Rtr-D para llegar a Red D
- Sumarizar si es posible

#### Parte g

Si Rtr-C pierde conectividad contra ISP-2, ¿es posible restablecer el acceso a Internet sin esperar a que vuelva la conectividad entre esos dispositivos?

---

### Ejercicio 7

Evalúe para cada caso si el mensaje llegará a destino, saltos que tomará y tipo de respuesta recibida el emisor.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/00434c70-d298-4e63-90f4-9890417d2629)

- Un mensaje ICMP enviado por PC-B a PC-C.
- Un mensaje ICMP enviado por PC-C a PC-B.
- Un mensaje ICMP enviado por PC-C a 8.8.8.8.
- Un mensaje ICMP enviado por PC-B a 8.8.8.8.

---

## DHCP y NAT

### Ejercicio 8

Con la máquina virtual con acceso a Internet realice las siguientes observaciones respecto de la auto configuración IP vía DHCP:

#### Parte a

Inicie una captura de tráfico Wireshark utilizando el filtro bootp para visualizar únicamente tráfico de DHCP.

#### Parte b

En una terminal de root, ejecute el comando sudo /sbin/dhclient eth0 y analice el intercambio de paquetes capturado.

#### Parte c

Analice la información registrada en el archivo /var/lib/dhcp/dhclient.leases, ¿cuál parece su función?

#### Parte d

Ejecute el siguiente comando para eliminar información temporal asignada por el servidor DHCP.

```bash
rm /var/lib/dhcp/dhclient.leases 
```

#### Parte e

Enunaterminal de root, vuelva a ejecutar el comando 

```bash
sudo /sbin/dhclient eth0
```

y analice el intercambio de paquetes capturado nuevamente ¿a que se debió la diferencia con lo observado en el punto “b”?

#### Parte f

Tanto en “b” comoen“e”, ¿quéinformación es brindada al host que realiza la petición DHCP, además de la dirección IP que tiene que utilizar?

---

### Ejercicio 9

¿Qué es NAT y para qué sirve?

De un ejemplo de su uso y analice cómo funcionaría en ese entorno.
 
> Ayuda: analizar el servicio de Internet hogareño en el cual varios dispositivos usan Internet simultáneamente.

---

### Ejercicio 10

¿Qué especifica la RFC 1918 y cómo se relaciona con NAT?

---

### Ejercicio 11

En la red de su casa o trabajo verifique la dirección IP de su computadora y luego acceda a www.cualesmiip.com. 

¿Qué observa?

¿Puede explicar qué sucede?

---

### Ejercicio 12

Resuelva las consignas que se dan a continuación.

#### Parte a

En base a la siguiente topología y a las tablas que se muestran, complete los datos que faltan.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a5f56e81-b65b-43be-80aa-690cad709156)

#### PC-A (ss)

| Local Address:Port | Peer Address:Port |
|--------------------|-------------------|
| 192.168.1.2:49273  |                   |
|                    | 190.50.10.63:25   |
| 192.168.1.2:_____  | 190.50.10.81:8080 |

#### PC-B (ss)

| Local Address:Port | Peer Address:Port |
|--------------------|-------------------|
| 192.168.1.3:52734  |                   |
| 192.168.1.3:39275  |                   |

#### RTR-1 (Tabla de NAT)

| Lado LAN           | Lado WAN          |    
|--------------------|-------------------|
| 192.168.1.2:49273  | 205.20.0.29:25192 |
| 192.168.1.2:51238  | _________________ |
| 192.168.1.3:52734  | 205.20.0.29:51091 |
| 192.168.1.2:37484  | 205.20.0.29:41823 |
| 192.168.1.3:39275  |  205.20.0.29:9123 |


#### SRV-A (ss)

| Local Address:Port | Peer Address:Port   |
|--------------------|---------------------|
| 190.50.10.63:80    | 205.20.0.29:25192   |
| 190.50.10.63:25    | 205.20.0.29:41823   |

#### SRV-B (ss)

| Local Address:Port | Peer Address:Port |
|--------------------|-------------------|
| 190.50.10.81:8080  | 205.20.0.29:16345 |
| 190.50.10.81:8081  | 205.20.0.29:51091 |
| 190.50.10.81:8080  | 205.20.0.29:9123  |

#### Parte b

En base a lo anterior, responda:

i. ¿Cuántas conexiones establecidas hay y entre qué dispositivos?

ii. ¿Quién inició cada una de las conexiones? 

¿Podrían haberse iniciado en sentido inverso? 

¿Por qué? 

Investigue qué es port forwarding y si serviría como solución en este caso.

---

## Ejercicio de repaso

### Ejercicio 13

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d1755aab-13c5-4f76-8c58-3275a655a572)

Asigne las redes que faltan utilizando los siguientes bloques y las consideraciones debajo:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/132257ce-9729-4666-9235-6f2fa7b0a47b)

- Red Cyla Red Ddeben ser públicas.
- Los enlaces entre routers deben utilizar redes privadas.
- Se debe desperdiciar la menor cantidad de IP posibles.
- Si va a utilizar un bloque para dividir en subredes, asignar primero la red con más cantidad de hosts y luego las que tienen menos.
- Las redes elegidas deben ser válidas.

---

### Ejercicio 14

Asigne IP a todas las interfaces de las redes listadas a continuación. 

> Los routers deben tener asignadas las primeras IP de la red. Para enlaces entre routers, asignar en el siguiente orden: RouterA, RouterB, RouterC, RouterD y RouterE

- Red A, Red B, Red C y Red D.
- Red entre RouterA-RouterB-RouterE.
- Red entre RouterC-RouterD.

---

### Ejercicio 15

Realice las tablas de rutas de RouterE y BORDER considerando

- Siempre se deberá tomar la ruta más corta.
- Sumarizar siempre que sea posible.
- El tráfico de Internet a la Red D y viceversa debe atravesar el RouterC.
- Todos los hosts deben poder conectarse entre sí y a Internet

---

## Aclaración importante

En CORE no se guardan los cambios realizados en una topología al detenerla. Por ello, es deseable completar todo el ejercicio una vez empezado, para no tener que volver a configurar todo. Alternativamente se puede utilizar el script que se encuentra en este repositorio https://github.com/RYSAEI/SaveRestoreScripts para forzar que se guarden los cambios.

### Ejercicio 16

Utilizando la máquina virtual, se configurará ruteo estático en la red que se muestra en el siguiente gráfico:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/4fe3fa1b-6b4f-4a91-ad38-b1bfc9369700)

#### Parte a

Antes de empezar el ejercicio ejecute en una terminal el siguiente comando:

```bash
sudo iptables-P FORWARD ACCEPT
```

#### Parte b

Inicie la herramienta CORE y abra el archivo 1-ruteo-estatico.imn.

#### Parte c

Inicie la virtualización de la topología.

#### Parte d

Analice las tablas de ruteo de las diferentes PCs y de los routers. 

¿Qué observa? ¿Puede explicar por qué?

#### Parte e

Configure las las direcciones IP de las interfaces según lo que muestra el gráfico (para entrar a configurar cada equipo (PC o router) debe hacer doble click sobre el mismo, lo cual abre una terminal de comandos). Por ejemplo

- En la PC n6 debe configurar la interfaz eth0 con la IP 10.0.0.10.
- En el Router n1 debe configurar la eth0 con la IP 10.0.0.1, la eth1 con la IP 10.0.1.2 y la eth2 con la 10.0.2.1.

#### Parte f

Analice las tablas de ruteo de las diferentes PCs y de los routers. ¿Qué observa? ¿Puede explicar por qué?

#### Parte g

Compruebe conectividad. Para ello, tome por ejemplo la PC n7 y haga un ping a cada una de las diferentes IPs que configuró. ¿Qué ocurre y por qué?
#### Parte h

Configure una ruta por defecto en todas las computadoras y analice los cambios en las tablas de ruteo.

#### Parte i

Compruebe conectividad repitiendo el mismo procedimiento que hizo anteriormente. ¿Qué ocurre y por qué?

#### Parte j

Función de ruteo: un dispositivo que actúe como router requiere tener habilitado el encaminamiento de paquetes entre sus interfaces

Verificar IP_FORWARD, en los routers y las PCs, obteniendo la configuración con:

```bash
cat /proc/sys/net/ipv4/ip_forward
```


El valor 0 indica funcionalidad desactivada (esto es correcto para las PCs). 1 indica que está habilitado (esto es requerido para los routers)

#### Parte k

Configure en los routers rutas estáticas a cada una de las redes de la topología (no utilice rutas por defecto).

#### Parte l

Compruebe conectividad entre todos los dispositivos de la red. Si algún dispositivo no puede comunicarse con otro revise las tablas de ruteo y solucione los inconvenientes hasta que la conectividad sea completa.

#### Parte m

Modifique ahora las tablas de ruteo de los routers, eliminando todas las rutas configuradas hasta el momento y vuelva a configurarlas en base al siguiente criterio.
- Router n1 envía todo el tráfico desconocido a Router n2.
- Router n2 envía todo el tráfico desconocido a Router n3.
- Router n3 envía todo el tráfico desconocido a Router n1.

#### Parte n

Compruebe conectividad entre todos los dispositivos de la red. Si algún dispositivo no puede comunicarse con otro revise las tablas de ruteo y solucione los inconvenientes hasta que la conectividad sea completa.

#### Parte ñ

En base a las dos configuraciones de las tablas de ruteo anteriores, responda:

- ¿Cuál opción le resultó más sencilla y por qué?
- Considerando el tamaño de las tablas de ruteo en cada situación, ¿cuál de las dos opciones la parece más conveniente y por qué?
- ¿Puede pensar en algún caso donde la segunda opción sea la única posible?
- Suponga que realiza un ping a un host que tiene la IP 190.50.12.34.
- ¿Qué ocurrirá en cada caso? ¿Cuál le parece mejor?

---

## Práctica 9

### Capa de Red: IPv6

**IPv6**

- [Ejercicio 1 ¿Qué es IPv6? ¿Por qué es necesaria su implementación?](#ejercicio-1)
- [Ejercicio 2 ¿Por qué no es necesario el campo Header Length en IPv6?](#ejercicio-2)
- [Ejercicio 3 ¿En qué se diferencia el checksum de IPv4 e IPv6? ](#ejercicio-3)
- [Ejercicio 4 ¿Qué sucede con el campo Opciones en IPv6? ](#ejercicio-4)
- [Ejercicio 5 Si quisiese que IPv6 soporte una nueva funcionalidad](#ejercicio-5)
- [Ejercicio 6 Es necesario el protocolo ICMP en IPv6?](#ejercicio-6)
- [Ejercicio 7 Transforme las siguientes direcciones MACs ](#ejercicio-7)
- [Ejercicio 8 ¿Cuál de las siguientes direcciones IPv6 no son válidas?](#ejercicio-8)
- [Ejercicio 9 ¿Cuál sería una abreviatura correcta de 3f80:0000:0000:0a00:0000:0000:0000:0845?](#ejercicio-9)
- [Ejercicio 10  Indique si las siguientes direcciones son de link-local, global-address, multicast, etc](#ejercicio-10)
- [Ejercicio 11 Dado el siguiente diagrama,](#ejercicio-11)
- [Ejercicio 12 Al autogenerarse una dirección IPv6 sus últimos 64 bits en muchas ocasiones no se deducen](#ejercicio-12)
- [Ejercicio 13 Utilizando la máquina virtual abrir la topología llamada 3-ruteo-OSPF.imn](#ejercicio-13)

---

### Ejercicio 1

¿Qué es IPv6? ¿Por qué es necesaria su implementación?

---

### Ejercicio 2

¿Por qué no es necesario el campo Header Length en IPv6?

---

### Ejercicio 3

¿Enquésediferencia el checksum de IPv4 e IPv6? Y en cuánto a los campos checksum de TCP y UDP,
 
¿sufren alguna modificación en cuanto a su obligatoriedad de cálculo?

---

### Ejercicio 4

¿Qué sucede con el campo Opciones en IPv6?

¿Existe, en IPv6, algún forma de enviar información opcional?

---

### Ejercicio 5

Si quisiese que IPv6 soporte una nueva funcionalidad, 

¿cómo lo haría?

---

### Ejercicio 6

¿Es necesario el protocolo ICMP en IPv6?

¿Cumple las mismas funciones que en IPv4?

---

### Ejercicio 7

Transforme las siguientes direcciones MACs en Identificadores de Interfaces de 64 bits.

- 00:1b:77:b1:49:a1
- e8:1c:23:a3:21:f4

---

### Ejercicio 8

¿Cuál de las siguientes direcciones IPv6 no son válidas?

- 2001:0:1019:afde::1
- 2001::1871::4
- 3ffg:8712:0:1:0000:aede:aaaa:1211
- 3::1
- ::
- 2001::
- 3ffe:1080:1212:56ed:75da:43ff:fe90:affe
- 3ffe:1080:1212:56ed:75da:43ff:fe90:affe:1001

---

### Ejercicio 9

¿Cuál sería una abreviatura correcta de 3f80:0000:0000:0a00:0000:0000:0000:0845?

- 3f80::a00::845
- 3f80::a:845
- 3f80::a00:0:0:0:845:4567
- 3f80:0:0:a00::845
- 3f8:0:0:a00::845

---

### Ejercicio 10

Indique si las siguientes direcciones son de link-local, global-address, multicast, etc

- fe80::1/64
- 3ffe:4543:2:100:4398::1/64
- ::
- ::1
- ff02::2
- 2818:edbc:43e1::8721:122
- ff02::9

---

### Ejercicio 11

Dado el siguiente diagrama, ¿qué direcciones IPv6 será capaz de autoconfigurar el nodo A en cada una de sus interfaces?

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/939e71ce-f948-4975-8893-da4db2ad8282)


---

### Ejercicio 12

Al autogenerarse una dirección IPv6 sus últimos 64 bits en muchas ocasiones no se deducen de la  dirección MAC, se generan de forma random, ¿por qué sucede esto? ¿Qué es lo que se intenta evitar? (Ver direcciones temporarias, RFC 8981)

---

### Ejercicio 13

Utilizando la máquina virtual abrir la topología llamada 3-ruteo-OSPF.imn para realizar las siguientes pruebas:

 #### Parte a
 
 Habilitar la vista de las direcciones IPv6 en la topología (View->show->IPv6 Addresses).

 #### Parte b
 
 Esperar a que la red converja. Verificar, mediante ping6, la comunicación entre n6 y n7.

 #### Parte c
 
 Observar la configuración IPv6:

- **i)** De la PC n6.
- **ii)** De la PC n7.
- **iii)** Del router n1.
- **iv)** La tabla de rutas tanto de las PCs como de los routers.

#### Parte d

Responda

i. ¿Cuántas direcciones IPv6 se observan tanto en la PC n6 como en la PC n7?

ii. ¿Es posible desde la PC n7 hacer un ping6 a cada una de las direcciones IPv6 de la PC n6? ¿Por qué?

#### Parte e

Cuando se quiere hacer ping6 a una dirección link-local es necesario especificar la interfaz que se quiere utilizar (ping6-I eth0 <IPv6-address>) ¿Por qué?

#### Parte f

Deshabilite la configuración de IPv6 en la PC n7 mediante el comando

```bash
sysctl-w net.ipv6.conf.all.disable_ipv6=1
```

i. Verifique las IPs configuradas en la PC.

ii. Luego de deshabilitarse IPv6, ¿puede comunicarse con la PC n6? ¿Cómo?

## Práctica 10

### Capa de Enlace- Parte 1

- [Ejercicio 1 ¿Qué función cumple la capa de enlace? Indique qué servicios presta esta capa](#ejercicio-1)
- [Ejercicio 2 Compare los servicios de la capa de enlace con los de la capa de transporte.](#ejercicio-2)
- [Ejercicio 3 Direccionamiento Ethernet](#ejercicio-3)
- [Ejercicio 4 Sobre los dispositivos de capa de enlace](#ejercicio-4)
- [Ejercicio 5 Describa el algoritmo de acceso al medio en Ethernet](#ejercicio-5)
- [Ejercicio 6 ¿Cuál es la finalidad del protocolo ARP?](#ejercicio-6)
- [Ejercicio 7 Investigue los comandos arp e ip neigh. Inicie una topología con CORE](#ejercicio-7)
- [Ejercicio 8 Dado el siguiente esquema de red, responda](#ejercicio-8)
- [Ejercicio 9 En la siguiente topología de red indique](#ejercicio-9)
- [Ejercicio 10 En la siguiente topología](#ejercicio-10)
- [Ejercicio 11 ¿Existe ARP en IPv6? ¿Por qué? ¿Quién cumple esa función?](#ejercicio-11)
- [Ejercicio 12 ¿Qué es la IEEE 802.3? ¿Existen diferencias con Ethernet?](#ejercicio-12)
- [Ejercicio 13 Nombre cinco protocolos de capa de enlace](#ejercicio-13)
- [Ejercicio 14 Ejercicio de parcial](#ejercicio-14)

---

### Ejercicio 1

¿Qué función cumple la capa de enlace? Indique qué servicios presta esta capa.

---

### Ejercicio 2

Compare los servicios de la capa de enlace con los de la capa de transporte.

---

### Ejercicio 3

Direccionamiento Ethernet:

---

### Ejercicio 4

Sobre los dispositivos de capa de enlace

---

### Ejercicio 5

Describa el algoritmo de acceso al medio en Ethernet. ¿Es orientado a la conexión?

---

### Ejercicio 6

¿Cuál es la finalidad del protocolo ARP?

---

### Ejercicio 7

Investigue los comandos arp e ip neigh. Inicie una topología con CORE, cree una máquina y utilice en ella los comandos anteriores para:

 - Listar las entradas en la tabla ARP.
 - Borrar una entrada en la tabla de ARP.
 - Agregar una entrada estática en la tabla de ARP.

---

### Ejercicio 8

Dado el siguiente esquema de red, responda

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a71f8886-86e8-42bb-9cb7-4f590c854d4a)

#### Parte a

Suponiendo que las tablas de los switches están llenas con la información correcta, responda quién escucha el mensaje si:

- i. La estación 1 envía una trama al servidor 1.
- ii. La estación 1 envía una trama a la estación 11.
- iii. La estación 1 envía una trama a la estación 9.
- iv. La estación 4 envía una trama a la MAC de broadcast.
- v. La estación 6 envía una trama a la estación 7.
- vi. La estación 6 envía una trama a la estación 10.

#### Parte b

¿En qué situaciones se pueden producir colisiones?

---

### Ejercicio 9

En la siguiente topología de red indique:

![image](https://github.com/Fabo-University/ISO/assets/55964635/32dab107-59fe-4d7c-a3ae-5207f3863f6c)

#### Parte a

¿Cuántos dominios de colisión hay?

#### Parte b

¿Cuántos dominios de broadcast hay?

#### Parte c

Indique cómo se va llenando la tabla de asociaciones MAC->PORT de los switches SW1 y SW2 durante el siguiente caso:

i. A envía una solicitud ARP consultando la MAC de C.

ii. C responde esta solicitud ARP.

iii. A envía una solicitud ARP consultando la MAC de B.

iv. B responde esta solicitud ARP.

#### Parte d

Si la PC E y la PC D hubiesen estado realizando un tcpdump para escuchar todo lo que pasa por su interfaz de red, ¿cuáles de los requerimientos/respuestas anteriores hubiesen escuchado cada una?

---

### Ejercicio 10

En la siguiente topología:

![image](https://github.com/Fabo-University/ISO/assets/55964635/0bb25465-13ba-4377-a8b5-a896bbf2bd8d)

Suponiendo que todas las tablas ARP están vacías, tanto de PCs como de Routers. Si la PC_A le hace un ping a la PC_C, indique:

¿En qué dominios de broadcast hay tráfico ARP? ¿Con qué direcciones de origen y destino?

¿En qué dominios de broadcast hay tráfico ICMP?

- ¿Con qué direcciones de origen y destino de capa 2?
- ¿Con qué direcciones de origen y destino de capa 3?

¿Cuál es la secuencia correcta en la que se suceden los anteriores?

---

### Ejercicio 11

¿Existe ARP en IPv6? ¿Por qué? ¿Quién cumple esa función?

---

### Ejercicio 12

¿Qué es la IEEE 802.3? ¿Existen diferencias con Ethernet?

---

### Ejercicio 13

Nombre cinco protocolos de capa de enlace. ¿Todos los protocolos en esta capa proveen los mismos servicios?

---

### Ejercicio de parcial

Si la PC A está en una red y se quiere comunicar con la PC B que está en otra red:

¿Como se da cuenta la PC A de esto?

Si la tabla ARP de la PCAestavacía, ¿que dirección MAC necesita la PC A para poder comunicarse con la PC B?

En base a lo anterior, ¿que dirección IP destino tiene el requerimiento ARP? ¿Es la dirección IP del default gateway o es la dirección IP de la PC B? De ser necesario, ejecute de nuevo el experimento de ser necesario y complete los campos:

```bash
 Trama Ethernet:    (mac origen: _________________ mac destino: _________________)
 Solicitud ARP:     (mac origen: _________________ ip origen: _________________)
                    (mac destino: _________________ ip destino: _________________)
```

En base a lo anterior, indique la información de capa 2 y 3 del ICMP ECHO REQUEST que la PC A le envía a la PC B cuando ejecuta un ping, en el segmento de LAN de la PC B.

## Práctica 11

### Capa de Enlace- Parte 2

- [Ejercicio 1 Utilizando la máquina virtual provista por la cátedra](#ejercicio-1)
- [Ejercicio 2 ¿Qué es 802.11? Compare las direcciones MAC que contiene el encabezado de una trama 802.11](#ejercicio-2)
- [Ejercicio 3 Complete el siguiente cuadro y luego investigue qué estándar utilizan los dispositivos ](#ejercicio-3)
- [Ejercicio 4 Dada la siguiente topología, donde se pueden apreciar cuatro estaciones de trabajo](#ejercicio-4)

---

### Ejercicio 1

**(Ejercicio de promoción) Utilizando la máquina virtual provista por la cátedra, arme una red como la siguiente, con un segmento de LAN usando un HUB y otro segmento de LAN usando un SWITCH.**

*NOTA: paraquienes haganla promoción, este será un ejercicio entregable. En la entrega deberán estar todas las preguntas respondidas y debidamente justificadas. En los puntos donde es necesario ejecutar comandos, los mismos deberán adjuntarse a la entrega.*

![image](https://github.com/Fabo-University/ISO/assets/55964635/de00a88b-aaf0-420e-a82b-e96dc8bfb6a0)

#### Parte a

Antes de empezar el ejercicio ejecute en una terminal el siguiente comando:

```bash
sudo iptables-P FORWARD ACCEPT
```

#### Parte b

Analizar el funcionamiento de ARP.

i. Indique para PC1_SW, PC2_SW y PC3_SW la IP y la dirección MAC de cada una.


ii. Verifique el contenido de la tabla ARP de cada una de ellas.


iii. Inicie Wireshark en PC2_SW y luego envíe un ping desde la PC1_SW a la PC2_SW. Analice los paquetes ARP e ICMP capturados e indique

- **Para ARP**: tipo de paquete, direcciones de capa 2 y datos específicos del protocolo.
- **Para ICMP**: tipo de paquete, direcciones de capa 2, de capa 3, tipo y código ICMP.

iv. Verifique nuevamente el contenido de la tabla ARP de las PCs ni bien termine de ejecutar el comando ping. ¿Qué entradas aparecen en cada tabla y por qué? ¿Qué estado tienen (ip neigh ls)?

v. Borre las entradas de las tablas ARP de ambas PC y agregue de forma estática en PC1_SW la entrada que corresponde a PC2_SW y en PC2_SW la que corresponde a PC1_SW. Si hiciera un ping de PC1_SWaPC2_SW,¿severíanpaquetesdeARP?Verifíqueloenlamáquinavirtual iniciando una captura de tráfico en PC2_SW. ¿Qué estado tienen ahora las entradas ARP?

vi. En PC1_SWmodifique la entrada ARP que agregó en el punto anterior poniendo una MAC que no exista en la red. Vuelva a intentar hacer el ping. ¿Qué ocurre y por qué?

#### Parte c

Analizar y comparar el funcionamiento de un HUB y de un SWITCH.

i. Antes de empezar asegúrese que todas las tablas estén vacías. Puede hacerlo deteniendo e iniciando la topología nuevamente.

ii. Inicie Wireshark en PC3_HUB y luego envíe un ping desde la PC1_HUB a PC2_HUB. Analice el origen y destino de cada uno de los paquetes ARP e ICMP capturados. ¿Alguno se origina en o va destinado a PC3_HUB? ¿Por qué observa cada uno de esos paquetes?

iii. Inicie Wireshark en PC3_SW y luego envíe un ping desde la PC1_SW a PC2_SW. Analice el origen y destino de cada uno de los paquetes ARP e ICMP capturados. ¿Alguno se origina en o va destinado a PC3_SW? ¿Por qué observa cada uno de esos paquetes?

iv. ¿Qué diferencia observa entre los dos casos anteriores? Explique por qué ocurre así.

v. Indique cómo queda la tabla CAM del SWITCH una vez realizado el ping. ¿Cómo se arma y en qué orden?

---

### Ejercicio 2

¿Qué es 802.11? Compare las direcciones MAC que contiene el encabezado de una trama 802.11 con los de unatrama Ethernet, ¿cuál es la principal diferencia que encuentra? Investigue por qué cambian en 802.11 y para qué se usan.

---

### Ejercicio 3

Complete el siguiente cuadro y luego investigue qué estándar utilizan los dispositivos inalámbricos que tiene en su poder (su celular, su computadora, etc.).

| Estándar | Año | Frecuencia | Velocidad máxima |
|----------|-----|------------|------------------|
| 802.11a  |     |            |                  |
| 802.11ac |     |            |                  |
| 802.11b  |     |            |                  |
| 802.11g  |     |            |                  |
| 802.11n  |     |            |                  |

---

### Ejercicio 4

Dada la siguiente topología, donde se pueden apreciar cuatro estaciones de trabajo, dos conectadas me diante un cable UTP y dos de forma inalámbrica, responda las siguientes preguntas.

![image](https://github.com/Fabo-University/ISO/assets/55964635/0a465124-27e5-43b9-93cb-af1c874b7dd5)

Suponiendo que las tablas ARP están completas y que STA A realiza un ping a STA B:


**Indique, entre STA A y el AP (1 azul) y entre el AP y STA B (2 azul):**

- Tipo de trama MAC (indicar si es 802.11 o Ethernet).
- Direcciones MAC de la trama. 
- IP origen e IP destino

Suponiendo que las tablas ARP están vacías y que STA A debe realizar un ARP Request para averiguar la MACdeSTAB:

**Indique, entre STA A y el AP (1 azul) y entre el AP y STA B (2 azul):**

- Tipo de trama MAC (indicar si es 802.11 o Ethernet).
- Direcciones MAC de la trama

¿Cómo sería el ARP Reply que va desde STA B hacia el AP? Indique las direcciones MAC de la trama.

---