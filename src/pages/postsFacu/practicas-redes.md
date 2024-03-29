---
layout: ../../layouts/MarkdownPostLayout.astro
title: Practicas Redes
author: Fabian Martinez Rincon
description: ""
image:
    url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHRiaGVrbmIxZDhhYXl5M3ppNWVnbWcwNDllY2wwZnBtanIzNGM3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnxpQ3ghPiB2Hp6/giphy.gif'
    alt: "Redes."
pubDate: 2024-03-12
tags: ["Capa de Aplicación", "Capa de Transporte", "Capa de Red", "Ruteo"]
---

- [Practica 1 Introducción](#practica-1-introducción)
- [Practica 2 Capa de Aplicación HTTP](#practica-2-capa-de-aplicación---http)
- [Practica 3 Capa de Aplicación DNS](#practica-3-capa-de-aplicación-dns)


---

## Clases grabadas

- [Presentación de la materia - 9/3](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/472904f53442431feff992fb77aa2b44dca73578-1646862489077)
- [Conceptos introductorios y Capa de aplicación (Intro) - 16/3](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/e53200e0f691a70ceb98ef960773faa779a0f3c8-1647468073015 )
- [Capa de aplicación - HTTP - 23/3](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/25bedccfb8dd9ab30f442c6636143000e1dae0d3-1648072284229)
- [Capa de aplicación - HTTP (Cont) y DNS -30/3](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/7822bf5e3e634bd078e9ecafd192abfa3eb863f1-1648676357874)
- [Capa de aplicación - DNS (cont) , FTP y Mail (Intro) - 6/4](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/109875a7e015e2e1974b60f72bd7dcee4a92d14c-1649282314287)
- [Capa de aplic - Mail y Capa de Transporte(Intro) - 13/4](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/7fb26872c9aae8f1bebfe34017d48a8dd2bfddba-1649886587941)
- [Capa de transporte - 20/4](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/51dddba72150c621c4517d51711c08ea8f7015c6-1650492050091)
- [Capa de transporte (cont) - 27/4](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/15938871ab0dcda82c2e9437146a529d2140a07a-1651096552662)
- [Capa de transporte (cont) e Intro a capa de red- 4/5](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/b6806a4a9e1b358b1a2c30a631640c626295f987-1651699822073)
- [Capa de red - 11/5](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/6e47e71679494159e62cb18b4db65fa855f49503-1652306386693)
- [Capa de enlace- 1/6](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/85f68a320bfb3f9801a19eb5c92d05bcaa7ec28b-1654120460566)
- [Capa de enlace - 8/6](https://bigbluebutton.linti.unlp.edu.ar/playback/presentation/2.3/d229a2a23736ed64601f03de677f06ac557f8239-1654724694422)


---

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

`Describa la funcionalidad de la entidad genérica “Agente de usuario” o “User agent”`

Un "Agente de Usuario" o "User Agent" se refiere a cualquier software que actúa en nombre de un usuario. La función principal de un agente de usuario es servir como intermediario entre el usuario y las aplicaciones de red, facilitando la interacción del usuario con la red o los servicios de Internet.

Las funcionalidades de un agente de usuario incluyen:

1. **Interfaz de Usuario**: Proporciona una interfaz a través de la cual los usuarios pueden interactuar con las aplicaciones de la red. Por ejemplo, un navegador web ofrece una interfaz gráfica donde los usuarios pueden ingresar URLs, ver páginas web y interactuar con elementos en línea.

2. **Comunicación de Red**: Maneja la comunicación entre el dispositivo del usuario y la red. Esto incluye la creación de solicitudes de red según las acciones del usuario, el envío de estas solicitudes al servidor correspondiente, y la recepción y procesamiento de las respuestas.

3. **Interpretación de Contenidos**: Interpreta y presenta los datos recibidos de la red al usuario de una manera entendible y utilizable. Por ejemplo, un navegador web interpreta el HTML, CSS y JavaScript de una página web y los presenta visualmente al usuario.

4. **Gestión de Sesiones**: Mantiene la información de estado durante la interacción del usuario con las aplicaciones de red. Esto puede incluir la gestión de cookies, autenticaciones y otras informaciones de sesión.

5. **Seguridad**: Implementa medidas de seguridad para proteger la información del usuario durante la comunicación en la red. Esto puede incluir el cifrado de datos, la verificación de la autenticidad de los sitios web y la protección contra malware.

6. **Almacenamiento y Caché**: Almacena datos localmente para mejorar el rendimiento y la eficiencia de las solicitudes de red, utilizando técnicas como el almacenamiento en caché de páginas web previamente visitadas.

Ejemplos de agentes de usuario incluyen navegadores web, clientes de correo electrónico, y aplicaciones de mensajería instantánea. En la práctica, el término "user agent" se utiliza a menudo específicamente para referirse al navegador web del usuario.

<audio controls><source src="../redes/practica2/5.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 6

Observe el indice de la RFC2616, busque el apartado donde se describe el requerimiento y la respuesta.

`¿Qué son y en qué se diferencian HTML y HTTP?`

1. **HTML**: Es un lenguaje de marcado utilizado para crear y estructurar páginas web. HTML utiliza etiquetas y atributos para definir cómo se muestra el contenido en un navegador web, como textos, imágenes, enlaces, tablas, listas, etc. HTML se ocupa de la presentación y la estructura del contenido en la web.

2. **HTTP**: Es un protocolo de la capa de aplicación utilizado para la transmisión de documentos hipermedia, como HTML. Es el fundamento de cualquier intercambio de datos en la Web y es un protocolo basado en solicitudes y respuestas entre clientes (por ejemplo, un navegador web) y servidores (el lugar donde se aloja la página web). HTTP define cómo se deben transmitir los mensajes y los datos entre cliente y servidor.

`¿En que entidad ubicaría a HTML?`

En cuanto a la entidad donde se ubicaría HTML, este se sitúa en la capa de aplicación del modelo TCP/IP o en las capas de presentación y aplicación del modelo OSI, ya que está directamente relacionado con la forma en que se presentan los datos al usuario final en aplicaciones de red, específicamente en navegadores web .

<audio controls><source src="../redes/practica2/6.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 7

`Utilizando la VM, abra una terminal e investigue sobre el comando curl.`

El comando `curl` es una herramienta de línea de comandos utilizada para transferir datos desde o hacia un servidor. Se utiliza para trabajar con diversos protocolos, incluidos HTTP, HTTPS, FTP, SMTP, entre otros. `curl` es útil para probar, depurar y trabajar con API web o servicios de red.

`Analice para qué sirven los siguientes parámetros (-I, -H, -X, -s).`


1. **-I** (o --head): Este parámetro se utiliza para hacer una solicitud HTTP HEAD, lo que significa que `curl` recuperará solo los encabezados de una respuesta HTTP. Es útil para ver metadatos de la respuesta como el tipo de contenido, estado, cookies, y otros encabezados de respuesta sin descargar todo el cuerpo del documento.

2. **-H** (o --header): Este parámetro permite al usuario pasar encabezados adicionales en la solicitud HTTP. Por ejemplo, puede ser utilizado para incluir encabezados de autenticación, indicar el tipo de contenido que se está enviando o cualquier otro encabezado HTTP personalizado necesario para la solicitud.

3. **-X** (o --request): Este parámetro se utiliza para especificar un método de solicitud HTTP personalizado cuando se comunica con el servidor HTTP. Los valores comunes incluyen GET, POST, PUT, DELETE, etc. Por defecto, `curl` realiza una solicitud GET, pero con -X puedes cambiar el tipo de solicitud según sea necesario.

4. **-s** (o --silent): Este parámetro se usa para hacer que `curl` sea silencioso o discreto durante su operación. Cuando se utiliza, `curl` no mostrará la barra de progreso, pero aún proporcionará el resultado final. Es útil para scripts o para cuando se desea un resultado limpio sin información adicional de progreso o errores.

Estos parámetros permiten a los usuarios de `curl` personalizar sus solicitudes HTTP de diversas maneras para satisfacer diferentes necesidades de prueba y comunicación con servidores web y servicios en línea.

<audio controls><source src="../redes/practica2/7.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 8

Ejecute el comando curl sin ningún parámetro adicional y acceda a www.redes.unlp.edu.ar. Luego responda:

### Resultado

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/37102b10-935b-4061-b8ea-cc6e96ce24e2)

#### Parte a

`¿Cuántos requerimientos realizó y qué recibió?`

Cuando ejecutas el comando `curl` sin ningún parámetro adicional accediendo a `www.redes.unlp.edu.ar`, estás realizando un solo requerimiento HTTP GET hacia el servidor. Este requerimiento pide al servidor que devuelva el contenido completo de la página principal del sitio.

`Pruebe redirigiendo la salida(>) del comando curl a un archivo con extensión html y abrirlo con un navegador.`

```bash
curl www.redes.unlp.edu.ar > index.html
```

#### Parte b

`¿Cómo funcionan los atributos href de los tags link e img en html?`

- **`<link href="./bootstrap/css/bootstrap.css" rel="stylesheet">`**: El atributo `href` en un elemento `link` generalmente se utiliza para enlazar hojas de estilo externas a la página HTML. Aquí, `href` apunta a la ubicación de una hoja de estilo CSS que el navegador debería cargar y aplicar a la página.

- **`<img src="image.jpg" alt="Descripción">`**: Aunque en tu ejemplo no tienes un tag `img` explícito, típicamente el atributo `src` (similar en propósito al `href` para los elementos `img`) indica la ubicación de una imagen que debe ser mostrada en la página. El navegador solicita y muestra la imagen desde esta ubicación.

#### Parte c

Para visualizar la página completa con imágenes como en un navegador

`¿alcanza con realizar un único requerimiento?`

Para visualizar completamente una página web como en un navegador, no es suficiente con realizar un único requerimiento (como lo hace `curl` por defecto). 

`¿Cuántos requerimientos serían necesarios para obtener una página que tiene dos CSS, dos Javascript y tres imágenes?`

La página principal puede contener referencias a otros recursos como hojas de estilo CSS, scripts de JavaScript, imágenes, etc. Cada uno de estos recursos requerirá de su propio requerimiento HTTP para ser recuperado. Por lo tanto, para una página que tiene dos CSS, dos Javascript y tres imágenes, se necesitarían, en total, **siete requerimientos HTTP adicionales** además del requerimiento inicial para la página HTML.

`Diferencie como funcionaría un navegador respecto al comando curl ejecutado previamente`

Un navegador automáticamente realiza todos estos requerimientos adicionales cuando carga una página, interpretando el HTML, descubriendo los recursos necesarios y solicitándolos al servidor. Por el contrario, el comando `curl` ejecutado anteriormente solo hace el requerimiento inicial y recupera el HTML, pero no carga ni interpreta los recursos adicionales. Por eso, si abres el HTML guardado localmente sin los recursos adicionales, la página podría no verse como se espera.

<audio controls><source src="../redes/practica2/8.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 9

Ejecute a continuación los siguientes comandos:

<table>
<tr><td>

```bash
curl -v -s www.redes.unlp.edu.ar > /dev/null
```

</td><td>

```bash
curl -I -v -s www.redes.unlp.edu.ar
```
</td></tr>
<tr><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/cf6f186e-6542-41c4-b46e-c4420eaacb87)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0f4449f1-8184-4c83-9c2a-35175821a384)
</td></tr>

</table>

`Observe la salida y luego repita la prueba, pero previamente inicie una nueva captura en wireshark.`

`Utilice la opción Follow Stream. ¿Qué se transmitió en cada caso?`

`¿A que se debió esta diferencia entre lo que se transmitió y lo que se mostró en pantalla?`

> Hice un blog de wireshark entender un poco mejor este asunto

---

### Ejercicio 10

`Investigue cómo define las cabeceras la RFC`

Las Request for Comments (RFC) relacionadas con el Protocolo de Transferencia de Hipertexto (HTTP) definen un conjunto de cabeceras (headers) estándar que pueden ser utilizadas en las solicitudes y respuestas HTTP. Estas cabeceras están documentadas en varias RFC, siendo las más relevantes para HTTP/1.1 las RFC 7230 a la RFC 7235.

``¿Establece todas las cabeceras posibles?.``

No, las RFCs no establecen todas las cabeceras posibles. Mientras que las RFCs definen un conjunto estándar de cabeceras conocidas y ampliamente utilizadas, también permiten el uso de cabeceras no estándar o personalizadas. Esto significa que los desarrolladores pueden definir sus propias cabeceras para casos de uso específicos que no están cubiertos por el conjunto estándar.

`¿Cuántas cabeceras viajaron en el requerimiento y en la respuesta del ejercicio anterior?`

- En el ejercicio anterior, en la **respuesta** se proporcionaron 7 cabeceras: `Date`, `Server`, `Last-Modified`, `ETag`, `Accept-Ranges`, `Content-Length`, y `Content-Type`.
- En cuanto al **requerimiento** hecho por `curl`, sin parámetros adicionales, generalmente incluiría al menos las cabeceras `Host` y potencialmente `User-Agent`, entre otras que `curl` podría incluir automáticamente. El número exacto y cuáles cabeceras depende de la versión de `curl` y de la configuración específica.

`¿La cabecera Date es una de las definidas en la RFC? ¿Qué indica?`

Sí, la cabecera `Date` está definida en las RFCs relacionadas con HTTP, como la RFC 7231. Esta cabecera representa la fecha y hora en que el mensaje fue originado, siguiendo el formato especificado por la RFC 5322, que es típicamente algo como "Tue, 15 Nov 1994 08:12:31 GMT". La cabecera `Date` es utilizada principalmente para proporcionar una estampa temporal que indica cuándo se generó el mensaje HTTP. Esto puede ser importante para la gestión de caché y para permitir a los receptores estimar la antigüedad de la respuesta o solicitud.


### Conclusión 

Las cabeceras HTTP juegan un papel crucial en el control y la gestión de la comunicación entre clientes y servidores en la web, facilitando la transmisión de información importante que no forma parte del cuerpo de la solicitud o respuesta.

<audio controls><source src="../redes/practica2/10.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 11

Utilizando curl, realice un requerimiento con el método HEAD al sitio www.redes.unlp.edu.ar e indique:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/df14ddae-c33e-4d5e-a352-ac675d1a5344)

`¿Qué información brinda la primer línea de la respuesta?`

Brinda la versión de http que se esta usando.

`¿Cuántos encabezados muestra la respuesta?`

7

`¿Qué servidor web está sirviendo la página?`

Apache/2.4.56 (Unix)

`¿El acceso a la página solicitada fue exitoso o no?`

- **200 OK**: Indica que la solicitud fue exitosa y que el servidor ha respondido con los encabezados del recurso solicitado.
- **301 Moved Permanently**: Significa que la URL solicitada se ha cambiado permanentemente. El servidor proporcionará la nueva URL en el encabezado de respuesta `Location`. Los clientes deben usar la nueva URL en el futuro.
- **302 Found** (también conocido como **302 Moved Temporarily**): Similar al 301, pero se utiliza para redireccionamientos temporales. El cliente debe realizar una solicitud subsiguiente a la nueva URL proporcionada, pero los futuros requerimientos todavía deberían usar la URL original.
- **304 Not Modified**: Se utiliza en situaciones de caché. Significa que el documento no ha sido modificado desde la última vez que fue solicitado y que el cliente puede continuar utilizando la versión almacenada en caché.
- **400 Bad Request**: Indica que la solicitud no se pudo entender o procesar por el servidor debido a una sintaxis incorrecta.
- **401 Unauthorized**: Significa que la autenticación es necesaria para acceder al recurso y que ha fallado o aún no ha sido proporcionada.
- **403 Forbidden**: El servidor entendió la solicitud, pero se niega a autorizarla. A diferencia del 401, la autenticación no haría diferencia.
- **404 Not Found**: Significa que el servidor no pudo encontrar el recurso solicitado.
- **500 Internal Server Error**: Indica que el servidor encontró una condición inesperada que le impidió cumplir con la solicitud.
- **503 Service Unavailable**: El servidor no está listo para manejar la solicitud, generalmente debido a un mantenimiento temporal o a una sobrecarga.

<audio controls><source src="../redes/practica2/11.mp3" type="audio/mpeg"></audio>

`¿Cuándo fue la última vez que se modificó la página?`

Sun, 19 Mar 2023 19:04:46 GMT

`Solicite la página nuevamente con curl usando GET, pero esta vez indique que quiere obtenerla sólo si la misma fue modificada en una fecha posterior a la que efectivamente fue modificada.`
`¿Cómo lo hace?`

```bash
curl -H "If-Modified-Since: Sun, 19 Mar 2023 18:00:00 GMT" www.redes.unlp.edu.ar
```

`¿Qué resultado obtuvo?`

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f63104fc-cf9a-486d-90ba-6e17725481b6)

En tu comando específico, recibiste una respuesta con el código de estado `304 Not Modified`. Esto significa que el servidor determinó que la página no ha sido modificada desde la fecha que proporcionaste en `If-Modified-Since`. Por lo tanto, el servidor decidió no enviar nuevamente el contenido de la página, ya que consideró que la versión que tienes es la más actualizada.

`¿Puede explicar para qué sirve?`

La cabecera `If-Modified-Since` se utiliza para hacer una solicitud condicional. Sirve para optimizar la transferencia de datos entre el cliente y el servidor. Al usar esta cabecera, le estás pidiendo al servidor que solo envíe el recurso (en este caso, la página web) si ha sido modificado después de la fecha especificada. Si el recurso no ha sido modificado desde esa fecha, el servidor responde con un código `304 Not Modified`, y no se transmite el cuerpo del recurso, lo que ahorra ancho de banda y mejora la eficiencia de la carga de páginas web, especialmente útil para la caché y la actualización de contenidos en la web.

<audio controls><source src="../redes/practica2/11-2.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 12

`En HTTP/1.0, ¿cómo sabe el cliente que ya recibió todo el objeto solicitado completamente?`

En HTTP, la forma en que un cliente sabe que ha recibido todo el objeto solicitado completamente varía entre las versiones HTTP/1.0 y HTTP/1.1 debido a las diferencias en cómo gestionan las conexiones y transmiten los datos.

En HTTP/1.0, la forma principal de determinar que todo el objeto solicitado ha sido completamente recibido es a través del cierre de la conexión TCP por parte del servidor. HTTP/1.0 no tiene un mecanismo estándar para mantener la conexión abierta después de que se haya enviado una respuesta; por lo tanto, una vez que el servidor termina de enviar los datos, cierra la conexión. Cuando el cliente detecta que la conexión se ha cerrado, sabe que ha recibido toda la respuesta. Sin embargo, este enfoque tiene varias desventajas, como la necesidad de abrir una nueva conexión TCP para cada solicitud, lo que aumenta la latencia y reduce la eficiencia de la red.

`¿Y en HTTP/1.1?`

HTTP/1.1 introduce varias mejoras para superar las limitaciones de HTTP/1.0, incluyendo el concepto de conexiones persistentes. En HTTP/1.1, las conexiones se mantienen abiertas por defecto, lo que permite enviar múltiples solicitudes y respuestas a través de la misma conexión TCP. Esto plantea la pregunta de cómo el cliente sabe cuándo ha recibido una respuesta completa sin el cierre de la conexión como indicador.

En HTTP/1.1, esto se logra principalmente a través de dos mecanismos:

1. **La cabecera Content-Length**: Cuando el servidor incluye la cabecera `Content-Length` en la respuesta, especifica la longitud exacta del cuerpo de la respuesta en bytes. El cliente usa este valor para determinar cuántos bytes necesita leer del cuerpo de la respuesta, independientemente de si la conexión se mantiene abierta para futuras solicitudes.

2. **Transfer-Encoding chunked**: En casos donde el servidor no puede determinar el tamaño total del contenido de antemano (por ejemplo, para contenido generado dinámicamente), puede utilizar la codificación de transferencia "chunked". Esto implica enviar el cuerpo de la respuesta en una serie de segmentos (chunks), cada uno precedido por su tamaño. El final de la respuesta se indica mediante un segmento de tamaño cero, seguido por los encabezados finales (si los hay) y una línea en blanco. Esto permite al cliente saber que ha recibido todo el objeto solicitado, incluso sin una longitud de contenido predeterminada.

Estos mecanismos permiten una transferencia de datos más eficiente y la reutilización de conexiones, mejorando el rendimiento general de la comunicación HTTP en la versión 1.1 respecto a la 1.0.

<audio controls><source src="../redes/practica2/12.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 13

`Investigue los distintos tipos de códigos de retorno de un servidor web y su significado en la RFC.`

Los códigos de retorno de un servidor web, también conocidos como códigos de estado HTTP, están definidos y clasificados en varias RFC, principalmente en la RFC 7231, que es parte de la serie de documentos que actualizan y definen el protocolo HTTP/1.1. Estos códigos se clasifican en cinco categorías principales:

1. **1xx (Respuestas informativas)**: Indican que la solicitud fue recibida y el proceso continúa.
2. **2xx (Respuestas exitosas)**: Indican que la solicitud fue recibida correctamente, entendida y aceptada.
3. **3xx (Redirecciones)**: Indican que se deben tomar más acciones para completar la solicitud.
4. **4xx (Errores del cliente)**: Indican que hubo un error y la solicitud no puede ser procesada debido a algo que se percibe como un error del cliente (por ejemplo, URL mal formada, falta de autenticación).
5. **5xx (Errores del servidor)**: Indican que el servidor falló al intentar procesar una solicitud válida.

`¿Qué parte se ve principalmente interesada de esta información, cliente o servidor?`

Ambas partes, el cliente y el servidor, están interesadas en los códigos de retorno:

- **Cliente**: Necesita entender los códigos de estado para saber cómo proceder después de hacer una solicitud. Por ejemplo, si recibe un 200 OK, sabe que la solicitud fue exitosa; si recibe un 404 Not Found, sabe que el recurso solicitado no existe; si recibe un 301 Moved Permanently, sabe que debe realizar una nueva solicitud al URL proporcionado en la respuesta.

- **Servidor**: Debe enviar el código de estado adecuado como parte de su respuesta para comunicar el resultado de la solicitud al cliente. Esto es crucial para el correcto funcionamiento del protocolo HTTP y para proporcionar una experiencia de usuario adecuada.

`¿Es útil que esté detallado y clasificado en la RFC?.`

Sí, es muy útil que esta información esté detallada y clasificada en la RFC por varias razones:

- **Estándar Global**: Proporciona un conjunto estándar de códigos de estado que pueden ser utilizados e interpretados de manera coherente por todos los servidores y clientes web en todo el mundo.
  
- **Desarrollo y Depuración**: Ayuda a los desarrolladores a entender cómo deben programar sus aplicaciones cliente y servidor para manejar diferentes situaciones. También facilita la depuración al proporcionar una explicación clara de por qué una solicitud puede haber fallado.

- **Interoperabilidad**: Asegura que diferentes aplicaciones y servicios web puedan trabajar juntos de manera efectiva, ya que todos siguen las mismas reglas para interpretar los códigos de estado.

En resumen, la clasificación y el detalle de los códigos de retorno en la RFC son fundamentales para la interoperabilidad de la web, permitiendo que clientes y servidores se comuniquen y entiendan entre sí de manera efectiva.

<audio controls><source src="../redes/practica2/13.mp3" type="audio/mpeg"></audio>

`Dentro de la VM, ejecute los siguientes comandos y evalue el estado que recibe.`

```bash
curl -I http://unlp.edu.ar
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/011934e1-7505-47f4-a7eb-07c0f6147fce)


1. **HTTP/1.1 301 Moved Permanently**: Este es el código de estado HTTP devuelto por el servidor. El código 301 indica que la URL solicitada ha sido asignada a una nueva URL de manera permanente. Este es un tipo de respuesta de redirección que informa al cliente que debe realizar una nueva solicitud a la URL indicada en el encabezado `Location`.

2. **Server: nginx/1.18.0**: Indica que el servidor web que maneja la solicitud está utilizando Nginx versión 1.18.0.

3. **Date: Mon, 25 Mar 2024 18:48:47 GMT**: Es la fecha y hora en que la respuesta fue enviada desde el servidor.

4. **Content-Type: text/html**: Este encabezado indica que el tipo de contenido que se habría devuelto si la solicitud hubiera sido un GET en lugar de un HEAD (que es lo que realiza `curl -I`) es HTML.

5. **Content-Length: 169**: Indica la longitud del cuerpo de la respuesta, que en el caso de una solicitud HEAD, no se devuelve, pero si fuera una solicitud GET, el cuerpo de la respuesta tendría 169 bytes.

6. **Connection: keep-alive**: Este encabezado sugiere que la conexión se mantendrá abierta para futuras solicitudes del cliente al servidor, característico de HTTP/1.1 que soporta conexiones persistentes.

7. **Location: https://unlp.edu.ar/**: Este es el encabezado más importante en el contexto de la redirección 301. Indica la nueva URL a la que el cliente debe dirigirse para obtener el recurso solicitado. En este caso, está redirigiendo de `http://unlp.edu.ar` a `https://unlp.edu.ar/`, esencialmente forzando una actualización a una conexión segura (HTTPS).

En resumen, el estado de esta solicitud indica que la página ha sido movida permanentemente de HTTP a HTTPS, y el cliente (en este caso `curl`) debería seguir la redirección al nuevo URL para obtener el contenido solicitado. Esta es una práctica común para mejorar la seguridad al asegurar que los usuarios se conecten a través de HTTPS.

<audio controls><source src="../redes/practica2/13-2.mp3" type="audio/mpeg"></audio>

```bash
curl -I www.redes.unlp.edu.ar/restringido/index.php
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a50cfa7a-35ff-44ac-bf60-9dabdf52d0ae)

1. **HTTP/1.1 401 Unauthorized**: Este es el código de estado HTTP devuelto por el servidor. Un código 401 indica que la solicitud requiere autenticación del usuario y que esta no se ha proporcionado o no ha sido aceptada. Es una indicación de que el acceso al recurso está restringido y requiere credenciales válidas.

2. **Date: Mon, 25 Mar 2024 18:56:57 GMT**: Fecha y hora en que el servidor envió la respuesta.

3. **Server: Apache/2.4.56 (Unix)**: Información sobre el software del servidor, que en este caso es Apache versión 2.4.56 corriendo en un sistema Unix.

4. **WWW-Authenticate: Basic realm="Authentication Required"**: Este encabezado es parte de la respuesta 401 y define el método de autenticación que el servidor espera. En este caso, indica autenticación básica y proporciona un “realm” (dominio) que describe el área segura o el recurso que requiere autenticación. El "realm" sirve como una pista para el usuario sobre qué credenciales se deben proporcionar.

5. **Last-Modified: Sun, 19 Mar 2023 19:04:46 GMT**: La fecha y hora de la última modificación del recurso solicitado.

6. **ETag: "cb-5f7457bd64f80"**: Un identificador único asignado al recurso actual en su estado específico. Utilizado para gestionar la caché y las modificaciones del recurso.

7. **Accept-Ranges: bytes**: Indica que el servidor acepta solicitudes de rango de bytes, lo que permite la descarga parcial del recurso, útil para reanudar descargas interrumpidas.

8. **Content-Length: 203**: La longitud del cuerpo de la respuesta en bytes, que en el caso de una solicitud HEAD no se retorna, pero si fuera una solicitud GET, el cuerpo de la respuesta contendría 203 bytes.

9. **Content-Type: text/html**: El tipo de medio del recurso, que en este caso es texto HTML.

En resumen, esta respuesta indica que para acceder al recurso `/restringido/index.php` en `www.redes.unlp.edu.ar`, se requiere autenticación. El servidor espera que el cliente proporcione credenciales válidas mediante el método de autenticación básica. Si deseas acceder al contenido, necesitarás proporcionar un nombre de usuario y una contraseña validados por el servidor.

<audio controls><source src="../redes/practica2/13-3.mp3" type="audio/mpeg"></audio>

```bash
curl -I www.redes.unlp.edu.ar/noexiste
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/15276da8-afa1-4ebc-af2e-543da1a11803)

1. **HTTP/1.1 404 Not Found**: Este es el código de estado HTTP devuelto por el servidor. Un código 404 indica que el servidor no pudo encontrar el recurso solicitado. Esto significa que la URL especificada no existe en el servidor, o que no hay ningún contenido asociado con ella.

2. **Date: Mon, 25 Mar 2024 19:01:32 GMT**: Fecha y hora en que el servidor envió la respuesta. Indica cuándo se generó y envió la respuesta al cliente.

3. **Server: Apache/2.4.56 (Unix)**: Información sobre el software del servidor. En este caso, se está utilizando Apache versión 2.4.56 en un sistema operativo tipo Unix.

4. **Content-Type: text/html; charset=iso-8859-1**: Este encabezado indica el tipo de medio (MIME type) del recurso que habría sido enviado si la solicitud hubiese sido un GET en lugar de un HEAD. En este caso, indica que el contenido (que no se encuentra) se habría devuelto como HTML con el conjunto de caracteres ISO-8859-1.

En resumen, esta respuesta indica que el recurso solicitado en la URL `www.redes.unlp.edu.ar/noexiste` no se pudo encontrar en el servidor (error 404). Esto podría deberse a un error tipográfico en la URL, a que el recurso haya sido movido o eliminado, o a que nunca haya existido. No se devuelve contenido HTML en la respuesta debido a que la solicitud utilizó el método HEAD, pero el servidor indica qué tipo de contenido habría devuelto si se hubiera utilizado GET.

<audio controls><source src="../redes/practica2/13-4.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 14

Utilizando curl, acceda al sitio `www.redes.unlp.edu.ar/restringido/index.php` y siga las instrucciones y las pistas que vaya recibiendo hasta obtener la respuesta final. Será de utilidad para resolver este ejercicio poder analizar tanto el contenido de cada página como los encabezados

```bash
curl www.redes.unlp.edu.ar/restringido/index.php
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d44c6726-e3e9-43f4-a06a-c8dbedf93900)

```bash
curl www.redes.unlp.edu.ar/obtener-usuario.php
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/1ab7dd69-bc87-4795-a417-07d6d63be0dc)

```bash
curl -H "Usuario-Redes: obtener" www.redes.unlp.edu.ar/obtener-usuario.php
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0645cd34-7af6-474a-ad0a-295df1b05af2)


```bash
Authorization: Basic {credenciales_codificadas_en_base64}
```

Las "credenciales_codificadas_en_base64" son simplemente el nombre de usuario y la contraseña concatenados con un dos puntos (`:`) entre ellos, luego todo esto codificado en base64. Para el usuario "redes" y la contraseña "RYC", esto sería:

1. Concatenar usuario y contraseña con un dos puntos: `redes:RYC`.
2. Codificar este string en base64. Puedes hacer esto en una terminal Linux usando el comando: `echo -n 'redes:RYC' | base64`. Asegúrate de incluir la opción `-n` para `echo` para evitar que se añada un salto de línea al final del string antes de codificarlo.

```bash
echo -n 'redes:RYC' | base64

cmVkZXM6UllD
```

Una vez que tienes la cadena codificada en base64, puedes hacer la solicitud con `curl` de la siguiente manera:

```bash
curl -H "Authorization: Basic cmVkZXM6UllD" www.redes.unlp.edu.ar/obtener-usuario.php
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/585f519d-b989-45d1-8cc2-af01dbb44afc)


```bash
curl -I -H "Authorization: Basic cmVkZXM6UllD" www.redes.unlp.edu.ar/obtener-usuario.php
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/67cffcc1-0090-400b-a7dc-fb3f9dc8ac7d)

```bash
curl -H "Authorization: Basic cmVkZXM6UllD" www.redes.unlp.edu.ar/the-end.php
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/15f018e5-8770-4b32-a731-0531421e6957)

---

### Ejercicio 15

Utilizando la VM, realice las siguientes pruebas:

#### Parte a

Ejecute el comando

```bash
curl www.redes.unlp.edu.ar/extras/prueba-http-1-0.txt
```

Y copie la salida completa (incluyendo los dos saltos de linea del final).

```bash
curl www.redes.unlp.edu.ar/extras/prueba-http-1-0.txt
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c2a1a58b-00fd-4d38-9282-33dac551fae0)

#### Parte b

Desde la consola ejecute el comando.

```bash
telnet www.redes.unlp.edu.ar 80
```

Y luego pegue el contenido que tiene almacenado en el portapapeles. 

`¿Qué ocurre luego de hacerlo?`

```bash
telnet www.redes.unlp.edu.ar 80
```

```bash
redes@debian:~$ telnet www.redes.unlp.edu.ar 80
Trying 172.28.0.50...
Connected to www.redes.unlp.edu.ar.
Escape character is '^]'.
GET /http/HTTP-1.1/ HTTP/1.0
User-Agent: curl/7.38.0
Host: www.redes.unlp.edu.ar
Accept: */*



HTTP/1.1 200 OK
Date: Tue, 26 Mar 2024 01:39:42 GMT
Server: Apache/2.4.56 (Unix)
Last-Modified: Sun, 19 Mar 2023 19:04:46 GMT
ETag: "760-5f7457bd64f80"
Accept-Ranges: bytes
Content-Length: 1888
Connection: close
Content-Type: text/html
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Protocolo HTTP: versiones</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="../../bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="../../css/style.css" rel="stylesheet">
    <link href="../../bootstrap/css/bootstrap-responsive.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="./bootstrap/js/html5shiv.js"></script>
    <![endif]-->
  </head>

  <body>


    <div id="wrap">
        
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="../../index.html"><i class="icon-home icon-white"></i></a>
          <a class="brand" href="https://catedras.info.unlp.edu.ar" target="_blank">Redes y Comunicaciones</a>
          <a class="brand" href="http://www.info.unlp.edu.ar" target="_blank">Facultad de Inform&aacute;tica</a>
          <a class="brand" href="http://www.unlp.edu.ar" target="_blank">UNLP</a>
        </div>
      </div>
    </div>

    <div class="container">
    <h1>Ejemplo del protocolo HTTP 1.1</h1>
    <p>
        Esta p&aacute;gina se visualiza utilizando HTTP 1.1. Utilizando el capturador de paquetes analice cuantos flujos utiliza el navegador para visualizar la p&aacute;gina con sus im&aacute;genes en contraposici&oacute;n con el protocolo HTTP/1.0.
    </p>
    </p>
    <h2>Imagen de ejemplo</h2>
    <img src="13532-tuxkiller03green.png" width="800px"/>
    </div> 
    
    
    </div>
    <div id="footer">
      <div class="container">
        <p class="muted credit">Redes y Comunicaciones</p>
      </div>
    </div>
  </body>
</html>
Connection closed by foreign host.
```

La salida del comando `telnet` que has ejecutado muestra una sesión típica de comunicación HTTP entre tu cliente (en este caso, la sesión Telnet que está simulando un navegador) y el servidor web en `www.redes.unlp.edu.ar`.

Aquí te explico lo que ocurrió luego de hacerlo:

1. **Establecimiento de la conexión**:
   - `Trying 172.28.0.50...`: Intenta conectarse al servidor.
   - `Connected to www.redes.unlp.edu.ar.`: Se estableció la conexión con éxito.
   - `Escape character is '^]'.`: Indica que puedes presionar `Ctrl+]` para entrar en el modo de comando Telnet.

2. **Envío de la solicitud HTTP**:
   - A través de Telnet, enviaste manualmente una solicitud HTTP al servidor. La solicitud incluye:
     - Línea de solicitud: `GET /http/HTTP-1.1/ HTTP/1.0`, que solicita el recurso `/http/HTTP-1.1/` utilizando el protocolo HTTP versión 1.0.
     - Encabezados de solicitud: Incluyen `User-Agent`, que identifica el cliente que hace la solicitud; `Host`, que especifica el dominio al que se está haciendo la solicitud; y `Accept`, que indica los tipos de contenido que el cliente está dispuesto a recibir.

3. **Respuesta del servidor**:
   - El servidor responde con la versión del protocolo `HTTP/1.1` y el código de estado `200 OK`, indicando que la solicitud ha sido exitosa.
   - Los encabezados de respuesta incluyen información como la fecha, el servidor, la última modificación del contenido, el rango de aceptación de bytes, la longitud del contenido y el tipo de contenido.
   - La conexión se cierra después de enviar la respuesta, como lo indica `Connection: close`, que es el comportamiento esperado cuando un cliente HTTP/1.0 realiza una solicitud.

4. **Contenido HTML**:
   - Después de los encabezados, el servidor devuelve el cuerpo de la respuesta, que es un documento HTML. Este documento contiene la estructura de una página web típica, incluidos elementos como links a hojas de estilo CSS y scripts, así como contenido textual e imágenes.

5. **Cierre de la conexión**:
   - `Connection closed by foreign host.`: El servidor cierra la conexión después de enviar la respuesta completa. Esto es típico de las conexiones HTTP/1.0, donde cada solicitud y respuesta requieren una nueva conexión.

Lo que ocurrió después de pegar el contenido en Telnet es que el servidor procesó tu solicitud HTTP y te devolvió una respuesta que incluía el contenido HTML para el recurso solicitado. La conexión se cerró después, siguiendo el modelo de "una solicitud, una respuesta" de HTTP/1.0.

<audio controls><source src="../redes/practica2/15.mp3" type="audio/mpeg"></audio>

#### Parte c

Repita el proceso anterior, pero copiando la salida del recurso /extras/prueba-http-1-1.txt. Verifique que debería poder pegar varias veces el mismo contenido sin tener que ejecutar telnet nuevamente.

```bash
curl www.redes.unlp.edu.ar/extras/prueba-http-1-1.txt
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/dc1c16aa-6e7b-49f1-8173-c0c6cf559267)

Es lo mismo pero podes ingresar varios inputs

---

### Ejercicio 16

En base a lo obtenido en el ejercicio anterior, responda:

En HTTP/1.0, cada conexión se cierra después de que se envía una sola respuesta. Esto significa que cada vez que un cliente necesita enviar una nueva solicitud HTTP, debe establecer una nueva conexión TCP. Este es un proceso relativamente lento y ineficiente porque el establecimiento de una conexión TCP requiere varios pasos (el proceso de "handshake" o saludo).

En cambio, en HTTP/1.1, se introdujo el concepto de "conexiones persistentes", que permiten que varias solicitudes y respuestas se envíen a través de la misma conexión TCP. Esto reduce la sobrecarga asociada con el establecimiento de nuevas conexiones y hace que la comunicación sea más eficiente. Por defecto, las conexiones en HTTP/1.1 son persistentes a menos que se especifique lo contrario

`¿Qué está haciendo al ejecutar el comando telnet`

Estás iniciando una conexión manual a un servidor web y escribiendo directamente solicitudes HTTP en la terminal. En el contexto de HTTP/1.1, si envías varias solicitudes a través de una sesión de telnet, el servidor mantiene la conexión abierta, permitiéndote enviar varias solicitudes y recibir sus respectivas respuestas sin necesidad de reconectar cada vez.

`¿Qué lo diferencia con curl?`

`curl` por defecto hace una sola solicitud y cierra la conexión (a menos que se especifique lo contrario con opciones como `--keepalive`). `curl` es más automatizado y manejable para solicitudes únicas, mientras que con `telnet` estás manejando la conexión manualmente, lo que te permite ver el comportamiento de la conexión persistente en HTTP/1.1.

Observe la definición de método y recurso en la RFC. Luego responda

`¿Qué método HTTP utilizó?`

Get

`¿Qué recurso solicitó?`

> Preguntar

`¿Qué diferencias notó entre los dos casos?`

La diferencia principal es que con HTTP/1.0, la conexión se cierra después de cada respuesta, mientras que con HTTP/1.1, la conexión se mantiene abierta para solicitudes adicionales.

`¿Puede explicar por qué?`

Esto se debe al diseño de los protocolos: HTTP/1.1 fue diseñado para ser más eficiente al permitir múltiples transacciones por conexión, reduciendo la sobrecarga de la conexión.

`¿Cuál de los dos casos le parece más eficiente?`

HTTP/1.1 es más eficiente en términos de uso de la red debido a las conexiones persistentes.

---

Piense en el ejercicio donde analizó la cantidad de requerimientos necesarios para obtener una página con estilos, javascripts e imágenes. 

`El caso elegido, ¿puede traer asociado algún problema?`

Las conexiones persistentes (HTTP/1.1) pueden aumentar el uso de recursos del servidor porque las conexiones se mantienen abiertas más tiempo. Esto podría ser un problema para servidores con alto tráfico o recursos limitados. Sin embargo, en general, los beneficios en términos de eficiencia y rendimiento suelen superar estos inconvenientes.

<audio controls><source src="../redes/practica2/16.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 17

En el siguiente ejercicio veremos la diferencia entre los métodos POST y GET. Para ello, será necesario utilizar la VM y la herramienta **Wireshark**. Antes de iniciar considere:

Capture los paquetes utilizando la interfaz con IP 172.28.0.1. (Menú `Capture->Options`. Luego seleccione la interfaz correspondiente y presione `Start`).

Para que el analizador de red sólo nos muestre los mensajes del protocolo http introduciremos la cadena ‘http’ (sin las comillas) en la ventana de especificación de filtros de visualización (display-filter).

Si no hiciéramos esto veríamos todo el tráfico que es capaz de capturar nuestra placa de red. De los paquetes que son capturados, aquel que esté seleccionado será mostrado en forma detallada en la sección que está justo debajo. Como sólo estamos interesados en http ocultaremos toda la información que no es relevante para esta práctica (Información de trama, Ethernet, IP y TCP). Desplegar la información correspondiente al protocolo HTTP bajo la leyenda “Hypertext Transfer Protocol”


Para borrar la cache del navegador, deberá ir al menu “Herramientas->Borrar historial reciente”.

Alternativamente puede utilizar Ctrl+F5 en el navegador para forzar la petición HTTP evitando el uso de caché del navegador.

En caso de querer ver de forma simplificada el contenido de una comunicación http, utilice el botón derecho sobre un paquete HTTP perteneciente al flujo capturado y seleccione la opción **Follow TCP Stream**.

#### Parte a

Abra un navegador e ingrese a la URL: www.redes.unlp.edu.ar e ingrese al link en la sección `Capa de Aplicación` llamado `Métodos HTTP`. En la página mostrada se visualizan dos nuevos links llamados: Método GET y Método POST. Ambos muestran un formulario como el siguiente:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/dbe456ec-26a7-4528-a81e-b4d05a341908)

`Analice el código HTML.`

`Utilizando el analizador de paquetes Wireshark capture los paquetes enviados y recibidos al presionar el botón Enviar.`

`¿Qué diferencias detectó en los mensajes enviados por el cliente?`

`¿Observó alguna diferencia en el browser si se utiliza un mensaje u otro?`


> Lo pude resolver en [Blog usando Wireshark](https://rincondelfabo.vercel.app/posts/wireshark)

---

### Ejercicio 18

HTTP es un protocolo stateless, para sortear esta carencia muchos servicios se apoyan en el uso de Cookies. 

`¿En qué RFC se definió dicha funcionalidad?`

La funcionalidad de las cookies en HTTP se definió inicialmente en la **RFC 2109** y luego en la **RFC 2965**. Sin embargo, el estándar actual que se sigue es la **RFC 6265**.

`Investigue cuál es el principal uso que se le da a Set-Cookie y Cookie en HTTP.`

El principal uso de `Set-Cookie` (que el servidor utiliza para enviar cookies al cliente) y `Cookie` (que el cliente utiliza para enviar cookies de vuelta al servidor) en HTTP es para la gestión del estado de la sesión. Esto incluye mantener a los usuarios autenticados, rastrear preferencias del usuario, gestionar carritos de compras en sitios de comercio electrónico, y más. Las cookies permiten que la información persista entre diferentes solicitudes HTTP en un protocolo que por diseño es sin estado.

`¿Qué atributo de la RFC original fue en parte aprovechado para la implementación?`

El atributo de la RFC original que fue en parte aprovechado para la implementación de las cookies fue el concepto de **cabeceras de extensión HTTP**. Esto permitió a los servidores web y a los clientes HTTP (como los navegadores) comunicarse y almacenar información adicional a través de solicitudes y respuestas HTTP utilizando las cabeceras `Set-Cookie` y `Cookie`.

<audio controls><source src="../redes/practica2/18.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 19

`¿Cuál es la diferencia entre un protocolo binario y uno basado en texto?`

- **Protocolo basado en texto**: Este tipo de protocolo utiliza texto legible por humanos para la comunicación entre dispositivos o programas. Los mensajes se componen de texto claro, lo que facilita su lectura y depuración sin necesidad de herramientas adicionales. Sin embargo, este tipo de protocolos puede resultar menos eficiente en términos de tamaño del mensaje y velocidad de procesamiento. Ejemplos incluyen HTTP/1.0 y HTTP/1.1.

- **Protocolo binario**: Este tipo de protocolo utiliza estructuras de datos binarias para la comunicación. Los mensajes son compactos y están diseñados para ser procesados rápidamente por la máquina, pero no son legibles directamente por los humanos. Los protocolos binarios suelen ser más eficientes en términos de rendimiento y tamaño de mensaje que los basados en texto, pero pueden ser más difíciles de depurar sin herramientas especiales. Un ejemplo común es el Protocolo de Control de Transmisión (TCP) a nivel de transporte.


`¿de que tipo de protocolo se trata HTTP/1.0, HTTP/1.1 y HTTP/2?`

- **HTTP/1.0 y HTTP/1.1**: Estas versiones de HTTP son protocolos basados en texto. Utilizan texto claro para definir las solicitudes y respuestas, incluyendo métodos, URI, cabeceras y cuerpos del mensaje. Esto los hace fáciles de leer y escribir para los humanos, pero potencialmente más grandes en tamaño y más lentos de procesar que los mensajes binarios debido a la sobrecarga del texto.

- **HTTP/2**: A diferencia de sus predecesores, HTTP/2 es un protocolo principalmente binario. Aunque las solicitudes y respuestas HTTP siguen conceptualmente el mismo formato (métodos, cabeceras, cuerpos), en HTTP/2 estas son codificadas en estructuras binarias llamadas "frames". Esto permite un envío más eficiente, como la compresión de cabeceras y la multiplexación (enviar múltiples solicitudes y respuestas en paralelo a través de la misma conexión). Aunque los mensajes en HTTP/2 son binarios, las cabeceras y otros elementos todavía pueden representarse y enviarse en un formato legible por humanos cuando se visualizan a través de herramientas de depuración.

<audio controls><source src="../redes/practica2/19.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 20

`Analice de que se tratan las siguientes características de HTTP/2: stream, frame, server-push`

HTTP/2 introduce varias características nuevas diseñadas para mejorar la eficiencia, velocidad y rendimiento de las comunicaciones web. Aquí hay un resumen de las características que mencionaste:

**Stream**: 
En HTTP/2, un "stream" es una secuencia independiente y bidireccional de frames intercambiados entre el cliente y el servidor dentro de una única conexión. Cada stream tiene un identificador único y puede llevar una o varias solicitudes o respuestas HTTP. Los streams permiten que múltiples solicitudes y respuestas se envíen de forma asincrónica y concurrente a través de una sola conexión TCP, lo que mejora el uso del ancho de banda y reduce la latencia.

**Frame**: 
El "frame" es la unidad básica de comunicación en HTTP/2. Todos los mensajes (solicitudes y respuestas) en HTTP/2 se dividen en frames más pequeños antes de ser enviados a través de la conexión. Estos frames pueden ser de diferentes tipos, llevando diferentes tipos de datos, como cabeceras, carga útil de datos, y señales de control. El enmarcado binario de HTTP/2 reduce el overhead y permite nuevas funcionalidades como la priorización de solicitudes y el control de flujo a nivel de stream.

**Server Push**: 
"Server Push" es una funcionalidad de HTTP/2 que permite al servidor enviar recursos al cliente proactivamente, antes de que el cliente los haya solicitado explícitamente. Esto se puede utilizar para mejorar el tiempo de carga de la página al enviar recursos críticos como CSS, JavaScript o imágenes tan pronto como se solicita la página HTML principal, sin esperar a que el navegador analice la página y solicite estos recursos. Server Push puede reducir la cantidad de idas y vueltas entre el cliente y el servidor, acelerando la renderización de páginas web.

En resumen, HTTP/2 introduce streams para permitir múltiples intercambios de datos simultáneos dentro de la misma conexión, utiliza frames para una transmisión de datos más eficiente, y ofrece la funcionalidad de Server Push para que los servidores puedan enviar recursos anticipadamente, mejorando la velocidad de carga de las páginas web. Estas características están diseñadas para hacer que la web sea más rápida y eficiente.

<audio controls><source src="../redes/practica2/20.mp3" type="audio/mpeg"></audio>

---

### Ejercicio 21

Responder las siguientes preguntas

#### Parte a

`¿Qué función cumple la cabecera Host en HTTP 1.1? ¿Existía en HTTP 1.0?`

**Cabecera Host en HTTP 1.1**: Identifica el dominio y puerto específico al que el cliente intenta conectarse, permitiendo al servidor diferenciar entre diferentes sitios alojados en la misma dirección IP. No existía en HTTP 1.0.

`¿Qué sucede en HTTP/2?`

> Ayuda: https://undertow.io/blog/2015/04/27/An-in-depth-overview-of-HTTP2.html para HTTP/2
  
**En HTTP/2**: La funcionalidad es similar, pero debido a la naturaleza binaria y multiplexada de HTTP/2, la eficiencia y el manejo de los encabezados, incluido el Host, se mejoran considerablemente.

#### Parte b

`¿Cómo quedaría en HTTP/2 el siguiente pedido realizado en HTTP/1.1 si se está usando https?`

```bash
GET /index.php HTTP/1.1
Host: www.info.unlp.edu.ar
```

En HTTP/2, el mismo pedido realizado en HTTP/1.1 se traduce a un flujo de comunicación binario, no una solicitud de texto plano. Sin embargo, conceptos como el método, la ruta y los encabezados (incluido Host) se mantienen y se utilizan en la construcción de frames HTTP/2. Por ejemplo, la solicitud anterior se representaría en un frame de encabezado en HTTP/2, conservando la semántica pero codificada de manera diferente.

<audio controls><source src="../redes/practica2/21.mp3" type="audio/mpeg"></audio>

---

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

`Investigue y describa cómo funciona el DNS.`

El Sistema de Nombres de Dominio (DNS) traduce nombres de dominio amigables para el humano (como "www.example.com") a direcciones IP numéricas (como "192.0.2.1") que las computadoras utilizan para identificar entre sí en la red. 

`¿Cuál es su objetivo?`

El objetivo del DNS es permitir a las personas acceder a sitios web utilizando nombres de dominio fáciles de recordar en lugar de las complicadas direcciones IP, facilitando así la navegación en internet. Funciona a través de una red distribuida de servidores que resuelven nombres de dominio a direcciones IP.

---

### Ejercicio 2

`¿Qué es un root server?`

Un **servidor raíz** (root server) en el contexto del DNS es uno de los servidores DNS que contiene una lista completa de los nombres de dominio y sus direcciones IP asociadas para los dominios de nivel superior (TLDs). Es la primera parada en la resolución de nombres de dominio en Internet, dirigida a encontrar la dirección IP de un TLD específico. Los root servers son una parte crítica de la infraestructura de Internet, asegurando que la resolución de nombres funcione de manera eficiente y efectiva .

`¿Qué es un generic top-level domain (gtld)?`

Un **dominio de nivel superior genérico** (generic top-level domain o gTLD) es una categoría de dominios de nivel superior en el DNS que no está asociada a un país específico. Originalmente, los gTLDs incluían dominios como .com, .org, .net, entre otros, destinados a entidades comerciales, organizaciones y redes. Desde 2012, el número de gTLDs se ha expandido significativamente para incluir una amplia variedad de nombres como .academy, .bike, .beer, entre otros, permitiendo una mayor personalización y especificación para las direcciones de sitios web .

---

### Ejercicio 3

`¿Qué es una respuesta del tipo autoritativa?`

Una **respuesta autoritativa** en DNS es aquella que proviene de un servidor de nombres que tiene la autoridad directa sobre el nombre de dominio consultado. Esto significa que el servidor de nombres puede proporcionar una respuesta definitiva a una consulta de nombre de dominio sin tener que referirse a otro servidor de nombres. Las respuestas autoritativas se utilizan para confirmar la existencia de un registro de dominio y su correspondiente información, como la dirección IP asociada. En el proceso de resolución de nombres de DNS, una respuesta autoritativa se considera la fuente definitiva y fiable para la información solicitada sobre un dominio .

---

### Ejercicio 4

`¿Qué diferencia una consulta DNS recursiva de una iterativa?`

La diferencia principal entre una consulta DNS recursiva y una iterativa radica en el método de resolución y el grado de trabajo realizado por los servidores de nombres involucrados:

**Consulta DNS recursiva**:
En una consulta recursiva, el cliente (generalmente el resolver DNS del sistema operativo del usuario) solicita una resolución completa del nombre a un servidor DNS. Si este servidor no tiene la respuesta en su caché, se hace cargo de la tarea completa de resolver la dirección, realizando tantas consultas adicionales como sean necesarias a otros servidores DNS en la jerarquía para obtener la respuesta definitiva. Una vez que tiene la respuesta completa, se la devuelve al cliente original. Este método es más cómodo para el cliente, ya que solo tiene que hacer una solicitud y esperar la respuesta sin realizar más acciones.

**Consulta DNS iterativa**:
En una consulta iterativa, el cliente solicita una dirección a un servidor DNS, pero si este servidor no tiene la respuesta exacta, en lugar de resolver la consulta por completo, devuelve la mejor referencia que tiene a otro servidor DNS más cercano a la información solicitada. Luego, el cliente es responsable de consultar a este nuevo servidor DNS. Este proceso se repite iterativamente: el cliente va de servidor en servidor hasta que encuentra uno que pueda responder la pregunta directamente (con una respuesta autoritativa) o hasta que se agotan los servidores a consultar. En este caso, el trabajo de resolver el nombre se distribuye entre el cliente y varios servidores DNS.

La consulta recursiva es generalmente utilizada por los clientes finales ya que simplifica el proceso de resolución, mientras que la iterativa es utilizada entre servidores DNS para distribuir la carga y controlar el flujo de información.

---

### Ejercicio 5

`¿Qué es el resolver?`

Un **servidor raíz** (root server) en el sistema DNS es el servidor de más alto nivel. Es el punto de partida para la resolución de nombres en DNS, conteniendo la información completa de todos los dominios de nivel superior. Actúa como referencia final en la jerarquía de DNS para dirigir las consultas hacia los servidores de nombres específicos de los dominios de nivel superior (TLDs) .

Un **dominio de nivel superior genérico (gTLD)** se refiere a los dominios de nivel superior que no están asociados con países específicos. Incluyen categorías amplias como .com, .org, .net, entre otros. Los gTLDs son parte de la estructura jerárquica del DNS y están destinados a ciertos grupos o usos comerciales generales. Desde 2012, la introducción de nuevos gTLDs ha permitido una mayor variedad y personalización de nombres de dominio .

---

### Ejercicio 6

Describa para qué se utilizan los siguientes tipos de registros de DNS:

`A (Address Record)`

Asocia un nombre de dominio con una dirección IPv4. Este registro se utiliza para traducir nombres de dominio a sus correspondientes direcciones IP para que los navegadores puedan encontrar y acceder a los sitios web.

`MX (Mail Exchange Record)`

Indica el servidor de correo que debe ser utilizado para entregar el correo electrónico a un dominio. Este registro es esencial para la configuración del correo electrónico y dirige el correo entrante a los servidores de correo adecuados.

`PTR (Pointer Record)`

Realiza la función opuesta a la de los registros A y AAAA; asocia una dirección IP con un nombre de dominio canónico. Se utiliza principalmente para la resolución inversa de DNS, es decir, cuando se traduce una dirección IP en un nombre de dominio.

`AAAA (IPv6 Address Record)`

Similar al registro A, pero se utiliza para asociar un nombre de dominio con una dirección IPv6.

`SRV (Service Record)`

Proporciona información sobre los servicios disponibles en un dominio. Especifica el nombre de host y el puerto para servicios específicos (como VoIP o mensajería instantánea), permitiendo a los dominios definir la localización de servidores y servicios específicos.

`NS (Name Server Record)`

Especifica los servidores DNS autorizados para un dominio. Estos servidores DNS son los que contienen los registros DNS de ese dominio y pueden responder consultas relativas a él.

`CNAME (Canonical Name Record)`

Permite que un dominio se asocie con otro nombre de dominio, el "nombre canónico". Se utiliza para apuntar varios nombres de dominio a un mismo lugar, facilitando la gestión de sitios que pueden ser accedidos mediante múltiples nombres.

`SOA (Start of Authority Record)`

Contiene información esencial sobre el dominio y la zona, como el servidor DNS principal, el correo electrónico del administrador, el intervalo de actualización y la caducidad. Es el registro inicial de cualquier zona de DNS y establece la autoridad del dominio.

`TXT (Text Record)`

Permite que los administradores inserten texto arbitrario en un registro DNS. Comúnmente se utiliza para verificar la propiedad del dominio, implementar políticas de seguridad del correo electrónico como SPF (Sender Policy Framework) y DKIM (DomainKeys Identified Mail), y otras aplicaciones que requieren leer datos en forma de texto de los registros DNS.

---

### Ejercicio 7

`En Internet, un dominio suele tener más de un servidor DNS.`

`¿Por qué cree que esto es así?`

1. **Redundancia y Alta Disponibilidad**: La presencia de múltiples servidores DNS asegura que si uno falla debido a problemas técnicos, mantenimiento o ataques de denegación de servicio (DDoS), otro puede continuar resolviendo las solicitudes de nombres de dominio, manteniendo el sitio web o servicio accesible para los usuarios.

2. **Balanceo de carga**: Distribuir las solicitudes entre varios servidores DNS puede ayudar a manejar mejor el volumen de tráfico, evitando la sobrecarga en un único servidor y mejorando el tiempo de respuesta para las solicitudes de los usuarios.

3. **Resiliencia ante ataques**: Tener múltiples servidores DNS, idealmente en diferentes ubicaciones geográficas, puede ofrecer una mejor protección contra ataques dirigidos. Si un servidor es atacado, los otros pueden seguir funcionando, minimizando el impacto del ataque.

4. **Mejora del rendimiento y la velocidad de respuesta**: La presencia de servidores DNS en diferentes ubicaciones geográficas puede reducir la latencia al responder solicitudes de usuarios cercanos a esos servidores, mejorando así la experiencia general del usuario al acceder a un dominio.

5. **Descentralización**: La distribución de los servidores DNS contribuye a la descentralización de la infraestructura de Internet, haciéndola menos vulnerable a fallos o ataques que podrían afectar a un punto centralizado.

En resumen, tener múltiples servidores DNS mejora la robustez, seguridad y eficiencia del sistema de nombres de dominio en Internet, contribuyendo a una experiencia de usuario más fiable y rápida.

---

### Ejercicio 8

`Cuando un dominio cuenta con más de un servidor, uno de ellos es el primario (o maestro) y todos los demás son los secundarios (o esclavos).`

La configuración de servidores DNS primarios (maestros) y secundarios (esclavos) se utiliza para la gestión eficaz de los registros DNS y para asegurar la redundancia y consistencia de la información de dominio a través de Internet.

`¿Cuál es la razón de que sea así?`

1. **Sincronización y Consistencia de Datos**: El servidor DNS primario mantiene la versión autoritativa de los registros de zona del dominio. Cualquier cambio en la configuración del DNS, como añadir o modificar registros A, MX, CNAME, etc., se realiza primero en el servidor primario. Los servidores secundarios luego sincronizan estos cambios desde el primario, asegurando que todos los servidores proporcionen respuestas consistentes a las consultas DNS.

2. **Redundancia y Disponibilidad**: Al tener múltiples servidores DNS secundarios, se garantiza que si el servidor primario falla o se vuelve inaccesible, los servidores secundarios pueden continuar respondiendo las consultas DNS, manteniendo la disponibilidad del servicio o sitio web asociado al dominio. Esto es crucial para la alta disponibilidad y la resistencia a fallos.

3. **Distribución de Carga**: Los servidores secundarios también ayudan a distribuir la carga de las solicitudes DNS, especialmente para sitios web de alto tráfico. Al distribuir las consultas entre varios servidores, se reduce la carga en el servidor primario y se mejora el tiempo de respuesta para los usuarios finales.

4. **Seguridad**: En algunos casos, mantener los servidores secundarios puede aumentar la seguridad. Por ejemplo, se puede configurar el servidor primario en una red segura, no accesible directamente desde Internet, y solo permitir que los servidores secundarios, ubicados en diferentes redes, sincronicen los datos y respondan a las solicitudes externas.

5. **Eficiencia en la Actualización de Datos**: Al realizar cambios solo en el servidor primario, se simplifica la administración de los registros DNS. Los servidores secundarios automáticamente obtienen y replican estos cambios a través de un proceso llamado transferencia de zona, lo que facilita la gestión de los registros DNS para los administradores.

Esta estructura de primario-secundario asegura que los cambios se propaguen de manera controlada y eficiente a través de la infraestructura de DNS, manteniendo la integridad y la disponibilidad de los datos críticos para el funcionamiento de Internet.

---

### Ejercicio 9

`Explique brevemente en qué consiste el mecanismo de transferencia de zona y cuál es su finalidad.`

El mecanismo de transferencia de zona en DNS es un proceso por el cual los registros DNS de una zona específica son copiados (transferidos) de un servidor DNS autoritativo (el servidor primario o maestro) a otro servidor DNS (el servidor secundario o esclavo). Este proceso se realiza para asegurar que los servidores secundarios tengan una copia exacta y actualizada de los registros DNS mantenidos por el servidor primario.

La finalidad principal de la transferencia de zona es:

1. **Redundancia y Disponibilidad**: Garantizar que múltiples servidores DNS puedan responder a las consultas sobre un dominio, incluso si el servidor primario está inaccesible debido a mantenimiento, fallas o ataques. Esto mejora la disponibilidad y la resiliencia del sistema DNS.

2. **Consistencia de Datos**: Asegurar que todos los servidores secundarios tengan la misma información DNS que el servidor primario, manteniendo la consistencia de los datos a través de la red. Esto es crucial para evitar conflictos o respuestas incorrectas a las consultas DNS.

3. **Balanceo de Carga**: Distribuir las consultas DNS entre varios servidores para manejar eficientemente el tráfico y reducir la carga en cualquier servidor individual. Esto puede mejorar el rendimiento general del sistema DNS y reducir los tiempos de respuesta para los usuarios finales.

La transferencia de zona puede ocurrir de dos formas: transferencia completa de zona (AXFR), donde todos los registros de la zona son transferidos en su totalidad, o transferencia incremental de zona (IXFR), donde solo se transfieren los cambios realizados desde la última transferencia. Esto último ayuda a optimizar el ancho de banda y los recursos al minimizar la cantidad de datos transferidos entre servidores.

---

### Ejercicio 10

Imagine que usted es el administrador del dominio de DNS de la UNLP (unlp.edu.ar). A su vez, cada facultad de la UNLP cuenta con un administrador que gestiona su propio dominio (por ejemplo, en el caso dela Facultad de Informática se trata de info.unlp.edu.ar).

Suponga que se crea una nueva facultad, Facultad de Redes, cuyo dominio será redes.unlp.edu.ar, y el administrador le indica que quiere poder manejar su propio dominio. 

`¿Qué debe hacer usted para que el administrador de la Facultad de Redes pueda gestionar el dominio de forma independiente?`

> (Pista: investigue en qué consiste la delegación de dominios).

Para permitir que el administrador de la Facultad de Redes gestione el dominio `redes.unlp.edu.ar` de forma independiente, debería realizar una **delegación de dominio**. La delegación de dominio es un proceso en el sistema de nombres de dominio (DNS) por el cual la autoridad administrativa y de gestión de un subdominio se transfiere del administrador del dominio principal a otro servidor DNS, que generalmente es controlado por una organización o individuo diferente. En este caso, del dominio `unlp.edu.ar` al nuevo subdominio `redes.unlp.edu.ar`. Aquí están los pasos a seguir:

1. **Crear registros NS en el dominio principal**: Debes agregar registros del tipo NS (Name Server) en la zona DNS de `unlp.edu.ar` para el subdominio `redes.unlp.edu.ar`. Estos registros NS indicarán los servidores DNS que tienen autoridad sobre el subdominio `redes.unlp.edu.ar`. Por ejemplo:

   ```
   redes.unlp.edu.ar. IN NS ns1.redes.unlp.edu.ar.
   redes.unlp.edu.ar. IN NS ns2.redes.unlp.edu.ar.
   ```

2. **Especificar los servidores DNS para el subdominio**: Debes configurar o asegurarte de que los servidores DNS especificados en los registros NS (en este ejemplo, `ns1.redes.unlp.edu.ar` y `ns2.redes.unlp.edu.ar`) estén configurados correctamente para servir el subdominio `redes.unlp.edu.ar`. Esto implica configurar una nueva zona DNS en estos servidores para `redes.unlp.edu.ar`.

3. **Agregar registros A para los servidores DNS del subdominio**: Si los servidores DNS del subdominio (`ns1.redes.unlp.edu.ar`, `ns2.redes.unlp.edu.ar`) no tienen aún una dirección IP asignada visible globalmente, necesitas agregar registros A en la zona DNS de `unlp.edu.ar` para resolver estas direcciones. Por ejemplo:

   ```
   ns1.redes.unlp.edu.ar. IN A 192.0.2.1
   ns2.redes.unlp.edu.ar. IN A 192.0.2.2
   ```

4. **Configuración de la zona para el subdominio**: En los servidores DNS del subdominio, se debe configurar una zona para `redes.unlp.edu.ar`. Esta configuración incluirá todos los registros DNS necesarios para el subdominio, como registros A, MX, TXT, etc., permitiendo al administrador de la Facultad de Redes gestionar estos registros de forma independiente.

Al completar estos pasos, habrás delegado con éxito la gestión del subdominio `redes.unlp.edu.ar` al administrador de la Facultad de Redes, permitiéndole controlar completamente los registros DNS dentro de su propio subdominio. Es crucial asegurarse de que todos los servidores DNS involucrados estén configurados correctamente y sincronizados para garantizar la resolución de nombres eficaz y sin interrupciones dentro del subdominio delegado.


---

### Ejercicio 11

Responda y justifique los siguientes ejercicios.
 
#### Parte a

`En la VM, utilice el comando dig para obtener la dirección IP del host www.redes.unlp.edu.ar y responda:`

Usamos el comando

```bash
dig www.redes.unlp.edu.ar A
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6cfae24c-e2bf-4c02-8b9c-b49675bf434b)

Esta salida del comando `dig` muestra los resultados de una consulta DNS para obtener el registro A (dirección IPv4) de `www.redes.unlp.edu.ar`. Aquí te desgloso la información:

- **Línea de comando**: Muestra la versión de `dig` utilizada y la consulta realizada, en este caso, una solicitud del registro A para `www.redes.unlp.edu.ar`.

- **Global options**: Las opciones globales aplicadas a la consulta, en este caso, `+cmd`, que indica que se está mostrando el comando que se ejecutó.

- **Got answer**: Indica que se recibió una respuesta a la consulta.

- **HEADER**: Muestra los detalles de la respuesta:
  - `opcode: QUERY`: Es una consulta estándar.
  - `status: NOERROR`: La consulta se completó sin errores.
  - `id: 52809`: Es el identificador de la sesión de la consulta, útil para emparejar solicitudes y respuestas.
  - `flags`: 
    - `qr`: Indica que la respuesta es un resultado de consulta.
    - `aa`: Autoritativo Answer (respuesta autoritativa), lo que significa que el servidor que respondió tiene autoridad directa sobre el dominio.
    - `rd`: Recursion Desired (recursión deseada), la consulta solicitaba que se realizara recursión si fuera necesario.
    - `ra`: Recursion Available (recursión disponible), el servidor puede hacer consultas recursivas.

- **QUESTION SECTION**: Muestra la pregunta realizada, solicitando el registro A para `www.redes.unlp.edu.ar`.

- **ANSWER SECTION**: Proporciona la respuesta a la consulta:
  - `www.redes.unlp.edu.ar. 300 IN A 172.28.0.50`: Indica que el dominio `www.redes.unlp.edu.ar` tiene una dirección IPv4 (`A`) de `172.28.0.50`, con un TTL (Time To Live) de 300 segundos, lo que significa que este resultado puede ser almacenado en caché por hasta 300 segundos antes de requerir una nueva consulta.

- **Query time**: Tiempo que tomó realizar la consulta, en este caso, 0 milisegundos.

- **SERVER**: Dirección IP y puerto del servidor DNS que respondió a la consulta (`172.28.0.29` en el puerto 53).

- **WHEN**: Fecha y hora de cuando se realizó la consulta.

- **MSG SIZE rcvd**: Tamaño del mensaje recibido, en este caso, 94 bytes.

La salida proporciona una visión detallada de cómo se resuelve una dirección web a su correspondiente dirección IP a través de DNS, incluyendo la respuesta específica proporcionada por el servidor DNS consultado.

#### Parte b

`¿Cuáles son los servidores de DNS del dominio redes.unlp.edu.ar?`

La consulta realizada con `dig` no especifica directamente cuáles son los servidores DNS del dominio `redes.unlp.edu.ar`, ya que se solicitó un registro A (que proporciona la dirección IP correspondiente al nombre de dominio). Para obtener los servidores DNS específicos de un dominio, deberías realizar una consulta por los registros NS (Name Server). Por ejemplo:

```bash
dig ns redes.unlp.edu.ar
```

Caputa sin el +short

<table><tr><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/b4dc0a86-668a-4946-811b-8edd1b6a92a8)

</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/720fa0c4-7958-4394-847c-6ff271b60975)

</td></tr><tr><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8c17aac6-3eea-4621-952b-dd11e7a7adb9)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/928a0dfe-3f51-43e5-863d-e52ab10a6e61)
</td></tr></table>

Esta salida del comando `dig` muestra el resultado de una consulta DNS para obtener los registros NS (Name Server) del dominio `redes.unlp.edu.ar`. A continuación te explico en detalle cada sección:

- **Comando DiG**: La versión de DiG y la consulta realizada. En este caso, es DiG 9.16.27 en Debian, consultando por los registros NS de `redes.unlp.edu.ar`.

- **Global options**: `+cmd` indica que se muestran los comandos ejecutados.

- **Got answer**: Confirma que se recibió una respuesta a la consulta.

- **HEADER**:
  - `opcode: QUERY`: Indica que es una consulta de búsqueda.
  - `status: NOERROR`: La consulta se completó con éxito sin errores.
  - `id: 49300`: Identificador único de la consulta.
  - `flags`: Incluyen varias banderas:
    - `qr` (query response): Indica que esto es una respuesta a una consulta.
    - `aa` (authoritative answer): La respuesta proviene de un servidor con autoridad directa.
    - `rd` (recursion desired): El cliente solicitó que el servidor realice una búsqueda recursiva.
    - `ra` (recursion available): El servidor puede hacer búsquedas recursivas.

- **OPT PSEUDOSECTION**: Contiene metadatos adicionales sobre la consulta DNS, como la versión de EDNS, el tamaño máximo de paquete UDP, y un "COOKIE" que se utiliza para mejorar la seguridad de las transacciones DNS.

- **QUESTION SECTION**: Muestra la pregunta que fue realizada, solicitando los registros NS para el dominio.

- **ANSWER SECTION**: Provee la respuesta a la consulta. Hay dos registros NS, indicando los nombres de los servidores de nombres autoritativos para el dominio `redes.unlp.edu.ar`, con un TTL de 86400 segundos (1 día).

- **ADDITIONAL SECTION**: Proporciona las direcciones IP de los servidores de nombres listados en la "ANSWER SECTION". Esto se hace para optimizar la resolución de DNS, evitando la necesidad de hacer consultas adicionales para resolver los nombres de los servidores de nombres a sus direcciones IP.

- **Query time**: El tiempo que tomó realizar la consulta, en este caso, 0 milisegundos, lo que indica una respuesta muy rápida, típicamente desde una caché local.

- **SERVER**: La dirección IP y el puerto del servidor DNS que respondió a la consulta.

- **WHEN**: La fecha y hora en la que se realizó la consulta.

- **MSG SIZE rcvd**: El tamaño total del mensaje recibido en bytes.

En resumen, esta salida de `dig` muestra que la consulta DNS para `redes.unlp.edu.ar` fue exitosa, identificando dos servidores de nombres autoritativos para el dominio y proporcionando sus direcciones IP correspondientes. La rápida respuesta sugiere que estos datos probablemente provienen de la caché del servidor consultado.

#### Parte c

`Repita la consulta anterior cuatro veces más.`

`¿Qué observa?`

`¿Puede explicar a qué se debe?`



#### Parte d

Observe la información que obtuvo al consultar por los servidores de DNS del dominio. En base a la salida, 

`¿es posible indicar cuál de ellos es el primario?`

Con la información proporcionada por una consulta DNS estándar como la que se muestra en los resultados de `dig`, no es posible determinar cuál de los servidores de nombres es el primario (maestro) y cuál es el secundario (esclavo). Los registros NS simplemente enumeran los servidores de nombres que son autoritativos para el dominio, sin indicar su rol dentro de la configuración maestro-esclavo.

En la configuración de DNS tradicional, el servidor primario es donde se realizan los cambios y actualizaciones de los registros DNS, y estos cambios se replican luego a los servidores secundarios. Sin embargo, esta información de rol es parte de la configuración interna del sistema DNS y no se transmite en las respuestas a las consultas DNS realizadas por los clientes o resolvers.

Para determinar cuál es el servidor primario, normalmente se requiere acceso al servidor DNS autoritativo y a su configuración o a la interfaz de administración del proveedor de DNS donde se maneja el dominio. A veces, por convención, los nombres de los servidores de nombres pueden dar una pista (como `ns1` sugiriendo que podría ser el primario), pero esto no es una regla fiable y puede ser engañoso.

#### Parte e

`Consulte por el registro SOA del dominio y responda.`

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/2580a2e8-3cf6-48c7-bbb4-5acf1addb943)

`¿Puede ahora determinar cuál es el servidor de DNS primario?`

En la sección "ANSWER SECTION", el primer campo después del `SOA` es el servidor de nombres principal o primario para el dominio `redes.unlp.edu.ar`. Según la salida proporcionada, el servidor DNS primario es `ns-sv-b.redes.unlp.edu.ar`.

`¿Cuál es el número de serie, qué convención sigue y en qué casos es importante actualizarlo?`

El número de serie en el registro SOA es `2020031700`. La convención de numeración puede variar, pero comúnmente sigue un patrón de AAAAMMDDnn, donde AAAA es el año, MM es el mes, DD es el día y nn es un número de revisión. Este número se actualiza cada vez que se hace un cambio significativo en la zona DNS. Es importante para la replicación de la zona hacia los servidores secundarios, ya que los servidores secundarios comparan el número de serie con el que tienen localmente para decidir si necesitan actualizar su copia de la zona.

`¿Qué valor tiene el segundo campo del registro? Investigue para qué se usa y como se interpreta el valor.`

El segundo campo es `root.redes.unlp.edu.ar.` y es la dirección de contacto para el administrador de la zona DNS. Normalmente se utiliza en la forma de un correo electrónico, donde el primer punto (.) se reemplaza por una arroba (@) y los demás puntos se interpretan normalmente. Por ejemplo, `root@redes.unlp.edu.ar`.

`¿Qué valor tiene el TTL de caché negativa y qué significa?`

El último número en el registro SOA, `86400`, es el TTL de caché negativa. Esto dicta cuánto tiempo los resolvers de DNS deben cachear la respuesta a una consulta fallida (es decir, cuando NO hay un registro para el nombre solicitado). Un TTL de 86400 segundos (24 horas) significa que una respuesta negativa será cacheada durante 24 horas antes de que se realice otra consulta para ese nombre. El objetivo de esta caché es reducir la cantidad de tráfico generado por consultas repetitivas a nombres que no existen y mejorar la eficiencia del DNS.

#### Resumen

A partir de la consulta SOA, se ha identificado `ns-sv-b.redes.unlp.edu.ar` como el servidor de DNS primario. El número de serie sigue una convención de fecha y revisión y es crucial para controlar la sincronización de los registros entre los servidores DNS primarios y secundarios. El segundo campo del registro SOA proporciona información de contacto del administrador de la zona, y el TTL de caché negativa ayuda a gestionar la caché de respuestas negativas en los resolvers de DNS.


`Indique qué valor tiene el registro TXT para el nombre saludo.redes.unlp.edu.ar.`

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/8500d8e2-d178-4dc1-beb6-dbdc2108e06b)

`Investigue para qué es usado este registro.`

El registro TXT en DNS es utilizado para insertar cualquier texto en el sistema de nombres de dominio. Aquí hay varios propósitos comunes para los registros TXT:

1. **Verificación de Propiedad**: Servicios como Google Search Console o proveedores de servicios de correo electrónico usan registros TXT para verificar la propiedad de un dominio.

2. **Políticas de Seguridad de Correo Electrónico**: Se usan para SPF (Sender Policy Framework), que ayuda a prevenir el spoofing de correo electrónico al especificar qué servidores están autorizados a enviar correo en nombre del dominio. También se utilizan para DKIM (DomainKeys Identified Mail), que permite la verificación de la identidad del remitente y para DMARC (Domain-based Message Authentication, Reporting, and Conformance), que es una política de autenticación de correo electrónico.

3. **Información General**: Pueden contener información general sobre el dominio o indicaciones técnicas para los administradores de sistemas.

En el resultado del `dig` que has proporcionado, se muestra que no hay un registro TXT para el dominio `redes.unlp.edu.ar`, lo que se evidencia por `ANSWER: 0`. Esto significa que no se han definido registros TXT o no están disponibles públicamente. La sección de "AUTHORITY SECTION" contiene un registro SOA, que es típico cuando no hay registros del tipo consultado pero se muestra la autoridad para el dominio.

#### Parte g

`Utilizando dig, solicite la transferencia de zona de redes.unlp.edu.ar, analice la salida y responda.`

```bash
dig @ns-sv-a.redes.unlp.edu.ar redes.unlp.edu.ar AXFR
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/bd4691ea-b055-4f9b-b19a-adb4cf6d126c)

```bash
dig @ns-sv-b.redes.unlp.edu.ar redes.unlp.edu.ar AXFR
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c9e1e03d-dc55-4f98-a0b8-edd87f7301f4)

La salida proporcionada es el resultado de una transferencia de zona exitosa para el dominio `redes.unlp.edu.ar` utilizando el comando `dig`. La transferencia de zona (`AXFR`) es un tipo de consulta DNS que solicita una copia completa de todos los registros de una zona de un servidor DNS. Aquí desglosamos la información proporcionada:

- **SOA Record**: El registro de Start of Authority (SOA) al principio y al final de la transferencia de zona indica la autoridad y la versión de la zona DNS. Contiene:
  - El servidor DNS principal (`ns-sv-b.redes.unlp.edu.ar`).
  - La dirección de correo electrónico del administrador (`root.redes.unlp.edu.ar`, reemplazando el primer punto con `@`).
  - El número de serie (`2020031700`) que se actualiza cada vez que la zona cambia.
  - El intervalo de refresco (`604800` segundos, o una semana).
  - El intervalo de reintento (`86400` segundos, o un día).
  - El tiempo de expiración (`2419200` segundos, o cuatro semanas).
  - El TTL por defecto (`86400` segundos, o un día), que se aplica a los registros en ausencia de un TTL específico.

- **NS Records**: Listan los servidores de nombres autorizados (`ns-sv-a.redes.unlp.edu.ar` y `ns-sv-b.redes.unlp.edu.ar`) para el dominio.

- **MX Records**: Especifican los servidores de correo (`mail.redes.unlp.edu.ar` y `mail2.redes.unlp.edu.ar`) y sus prioridades (5 y 10 respectivamente), que se utilizan para dirigir el correo electrónico.

- **CNAME Record**: Muestra un alias (`ftp.redes.unlp.edu.ar`) que apunta a otro dominio (`www.redes.unlp.edu.ar`).

- **A Records**: Asocian subdominios con direcciones IP específicas (`mail.redes.unlp.edu.ar` a `172.28.0.90`, por ejemplo).

- **TXT Record**: Contiene texto arbitrario asociado con el dominio (`saludo.redes.unlp.edu.ar` tiene el texto `"HOLA"`).

- **Additional NS Records**: Proporcionan más servidores de nombres para subdominios específicos (`practica.redes.unlp.edu.ar` tiene sus propios NS y A records).

La presencia de dos registros SOA al principio y al final de la lista es estándar en las transferencias de zona AXFR, indicando el comienzo y el fin de la transferencia.

- **Query time**: Muestra el tiempo que tardó la consulta en completarse, que es de 4 milisegundos, lo que indica una respuesta rápida.

- **SERVER**: Indica el servidor de DNS que respondió a la consulta.

- **WHEN**: Muestra cuándo se realizó la consulta.

- **XFR size**: Informa sobre el tamaño de la transferencia, que en este caso incluyó 17 registros, con un tamaño total de 441 bytes.

La finalidad de esta transferencia es sincronizar los registros de zona entre el servidor DNS principal y los secundarios. En un entorno de producción, las transferencias de zona suelen estar restringidas a los servidores que han sido explícitamente autorizados para recibir estos datos, con el fin de proteger contra el acceso no autorizado a la configuración del dominio.

---

`¿Qué significan los números que aparecen antes de la palabra IN?`

Los números que aparecen antes de la palabra "IN" en una salida de `dig` corresponden al **TTL (Time To Live)** de ese registro específico. El TTL es un valor en segundos que indica cuánto tiempo debe un servidor DNS cachear la respuesta antes de volver a consultar al servidor DNS autoritativo para una actualización. Es una forma de gestionar el rendimiento y la carga en los servidores DNS, equilibrando la actualización oportuna de la información con la necesidad de reducir el tráfico DNS en la red.

Por ejemplo, un TTL de 86400 significa que una vez que un resolver DNS ha consultado ese registro, puede guardar la respuesta en su caché y no necesita realizar otra consulta para ese registro durante los próximos 86400 segundos, o 24 horas.

En el registro SOA, el TTL es de 86400 segundos, y para los registros A de los servidores de nombres (ns-sv-a y ns-sv-b), es de 604800 segundos, o 7 días.

`¿Cuál es su finalidad?`

**Su finalidad** es mejorar la eficiencia del sistema DNS reduciendo el número de consultas necesarias para la misma información y asegurando que los datos no válidos o antiguos se eliminen de las cachés en un período razonable.

`¿Cuántos registros NS observa? `

En cuanto a la **cantidad de registros NS**, se observan dos registros NS:
1. `ns-sv-a.redes.unlp.edu.ar`
2. `ns-sv-b.redes.unlp.edu.ar`

Estos son los servidores de nombres que están autorizados a responder por el dominio `redes.unlp.edu.ar`. Estos registros son fundamentales para el proceso de resolución de DNS, ya que dirigen a los clientes a los servidores que tienen la información autoritativa sobre el dominio en cuestión.

---

Compare la respuesta con los servidores de DNS del dominio redes.unlp.edu.ar que dio anteriormente.

`¿Puede explicar a qué se debe la diferencia y qué significa?`

> Consultar

#### Parte h

Consulte por el registro A de www.redes.unlp.edu.ar y luego por el registro A de www.practica.redes.unlp.edu.ar. 

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9962fc8f-7afd-4918-a3e0-8891ed7343d3)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/63e4b5a6-a78d-43a0-9df1-a764675b858b)

`Observe los TTL de ambos. Repita la operación y compare el valor de los TTL de cada uno respecto de la respuesta anterior. `

Las imágenes que proporcionaste muestran los resultados de dos consultas `dig` para los registros A de `www.redes.unlp.edu.ar` y `www.practica.redes.unlp.edu.ar`. 

En la primera imagen, la consulta para `www.redes.unlp.edu.ar` muestra un TTL de 300 segundos. Esto indica que la dirección IP `172.28.0.50` puede ser almacenada en caché por un resolver DNS durante 5 minutos antes de necesitar una nueva resolución.

La segunda imagen, muestra la consulta para `www.practica.redes.unlp.edu.ar` con un TTL de 56 segundos, significando que la dirección IP `172.28.0.10` puede ser almacenada en caché durante 56 segundos.

Si repites las consultas después de un intervalo de tiempo y observas los TTL en las respuestas, deberías ver que los TTL han disminuido en la cantidad de segundos que han pasado desde la consulta anterior. Esto refleja el tiempo restante que un resolver DNS puede mantener la respuesta en caché antes de requerir una actualización. 

La diferencia en los TTL entre `www.redes.unlp.edu.ar` y `www.practica.redes.unlp.edu.ar` indica posiblemente que `www.practica` podría cambiar más frecuentemente o que es un subdominio con menos tráfico, donde mantener la información en caché por un tiempo más corto no impactaría significativamente en el rendimiento del resolver.



`¿Puede explicar qué está ocurriendo?`

> (Pista: observar los flags será de ayuda).

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/2f790c50-3a72-4bd9-bb58-07cac2560c6f)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/447ad9a1-ef62-4158-adab-1ecbda15165d)

`Consulte por el registro A de www.practica2.redes.unlp.edu.ar.`

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/4dfa0f35-1279-45f5-96ee-ba68ae5083f5)

`¿Obtuvo alguna respuesta?`

La salida del comando `dig` que proporcionaste indica que se realizó una consulta DNS para el registro A de `www.practica2.redes.unlp.edu.ar`, y la respuesta contiene varios elementos clave que nos informan sobre el resultado de la consulta:

- **status: NXDOMAIN**: Indica que el nombre de dominio consultado no existe en el servidor DNS autoritativo para el dominio `redes.unlp.edu.ar`. NXDOMAIN significa "Non-Existent Domain" (Dominio Inexistente).

- **ANSWER: 0**: Significa que no se encontraron registros A para `www.practica2.redes.unlp.edu.ar`, es decir, no hay una respuesta con una dirección IP asociada a ese nombre de dominio.

- **AUTHORITY: 1**: Muestra que hay una sección de autoridad con un registro, que en este caso es el SOA (Start of Authority) del dominio `redes.unlp.edu.ar`. Esto significa que, aunque no hay una respuesta directa para la consulta (ya que el dominio no existe), el servidor que respondió tiene autoridad sobre el dominio y por eso proporciona la información SOA.


`Investigue sobre los codigos de respuesta de DNS.`

- **NXDOMAIN**: Se utiliza para indicar que el nombre de dominio especificado no existe. Es una respuesta definitiva que informa al cliente que el dominio que está buscando no se puede encontrar en el sistema de nombres de dominio.

- **NOERROR**: Se utiliza para indicar que la consulta se completó con éxito, pero no necesariamente significa que se encontró una respuesta. En el caso de una consulta que devuelve registros válidos, la sección de respuestas tendrá una o más entradas y el estado será `NOERROR`.

`¿Para qué son utilizados los mensajes NXDOMAIN y NOERROR?`

- **NXDOMAIN**: Específicamente útil para informar a los resolvers DNS y a los usuarios que el nombre de dominio que están tratando de alcanzar no existe y que deberían verificar si lo han escrito correctamente.

- **NOERROR**: Indica que la consulta fue procesada correctamente y que la infraestructura de DNS está funcionando como se espera. Un estado `NOERROR` puede acompañarse de respuestas (si el dominio existe y tiene registros) o no (si la consulta fue por un tipo de registro no existente para ese dominio).

En tu caso específico, `NXDOMAIN` indica que `www.practica2.redes.unlp.edu.ar` no es un nombre de dominio existente bajo `redes.unlp.edu.ar`, y no se encontraron registros A asociados a él. El servidor proporcionó su registro SOA como parte de la respuesta autoritativa para mostrar que la respuesta viene del servidor autorizado para el dominio `redes.unlp.edu.ar`, pero que el subdominio consultado no existe en su configuración de DNS.

## Mas sobre los codigos de respuestas DNS

Los códigos de respuesta DNS, también conocidos como RCODEs, son parte de la sección de encabezado en los mensajes DNS y proporcionan un estado sobre el éxito o fracaso de la consulta DNS. Aquí están los RCODEs más comunes:

1. **NOERROR** (0): La consulta se completó con éxito y no hubo errores.

2. **FORMERR** (1): Error de formato; el servidor DNS fue incapaz de interpretar la solicitud.

3. **SERVFAIL** (2): Fallo del servidor; el servidor DNS fue incapaz de procesar la consulta debido a un problema con el mismo.

4. **NXDOMAIN** (3): Dominio inexistente; el nombre de dominio consultado no existe.

5. **NOTIMP** (4), también conocido como **NOTIMPL** (No implementado): El servidor DNS no implementa el tipo de consulta solicitada.

6. **REFUSED** (5): La operación fue rechazada por el servidor DNS por razones de política.

7. **YXDOMAIN** (6): Nombre de dominio que no debería existir, existe.

8. **YXRRSET** (7): Conjunto de registros que no debería existir, existe.

9. **NXRRSET** (8): Conjunto de registros que debería existir, no existe.

10. **NOTAUTH** (9), también conocido como **NOTAUTH** (No autorizado): El servidor no está autorizado para la zona especificada.

11. **NOTZONE** (10): Nombre que no está dentro de la zona.

Los códigos de 11 a 15 son reservados para uso futuro. Además, hay extensiones para RCODEs como:

16. **BADVERS** (16): La primera implementación del código de respuesta extendido (EDNS) introdujo este código para señalar problemas con la versión de EDNS.

Los códigos de respuesta extendidos se pueden encontrar en la sección OPT PSEUDOSECTION de un mensaje DNS cuando EDNS está en uso. Los códigos de respuesta proporcionan información crítica para el diagnóstico de problemas en las consultas DNS y son una herramienta importante para los administradores de sistemas y redes al solucionar problemas de resolución de nombres.

---

### Ejercicio 12

`Investigue los comando nslookup y host. ¿Para qué sirven?`

**nslookup** y **host** son herramientas de línea de comandos utilizadas para consultar el sistema de nombres de dominio (DNS) y obtener información sobre registros DNS de dominios específicos. Ambas pueden ser usadas para realizar una variedad de consultas DNS.


Intente con ambos comandos obtener:

`Dirección IP de www.redes.unlp.edu.ar.`

<table>
<tr><td>

```bash
nslookup www.redes.unlp.edu.ar
```
</td><td>

```bash
host www.redes.unlp.edu.ar
```
</td></tr>
<tr><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a54313eb-bc72-493e-a3ca-3ecca52eb6ec)

</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d62416a6-8dcc-4c08-bc10-8635cb5e3eea)
</td></tr>
</table>


`Servidores de correo del dominio redes.unlp.edu.ar.`

```bash
nslookup -query=MX redes.unlp.edu.ar
```
Con el flag `-query=MX`, `nslookup` buscará los registros MX que indican los servidores de correo para el dominio.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/d95c93f7-179d-43cb-8305-dcab4ce4b7e3)

```bash
host -t MX redes.unlp.edu.ar
```

El flag `-t MX` especifica que queremos buscar los registros MX.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/ae05a8ad-e016-4e81-a8d7-2ab8af8a1ba8)

`Servidores de DNS del dominio redes.unlp.edu.ar` // (registros NS)?

```bash
nslookup -query=NS redes.unlp.edu.ar
```

Esta consulta devuelve los registros NS, que son los servidores de nombres autoritativos para el dominio.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/79bcbada-369a-492a-96dc-260524cbc163)

```bash
host -t NS redes.unlp.edu.ar
```

Al igual que con `nslookup`, el flag `-t NS` le dice a `host` que busque los registros NS.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a56532a9-1953-4f88-a52e-df20b38c4b8c)

---

### Ejercicio 13

`¿Qué función cumple en Linux/Unix el archivo /etc/hosts o en Windows el archivo \WINDOWS\system32\drivers\etc\hosts?`

En los sistemas operativos Linux/Unix, el archivo `/etc/hosts` y en Windows, el archivo `\WINDOWS\system32\drivers\etc\hosts`, tienen una función muy importante: proporcionar una tabla de nombres de host a direcciones IP localmente estática.

Cuando intentas acceder a un recurso de red utilizando un nombre de dominio, como `www.ejemplo.com`, el sistema operativo normalmente consulta primero el archivo `hosts` antes de hacer una consulta al sistema de nombres de dominio (DNS) en la red. Si una entrada correspondiente al nombre de dominio que se está buscando se encuentra en el archivo `hosts`, el sistema operativo utiliza la dirección IP especificada allí y no realiza una consulta DNS externa.

Estas son algunas de las funciones clave del archivo `hosts`:

1. **Resolución de Nombres**: Permite que el sistema operativo resuelva nombres de host a direcciones IP sin consultar un servidor DNS. Esto es útil para la red local o cuando se requiere un control específico sobre la resolución de nombres.

2. **Pruebas y Desarrollo**: Es comúnmente utilizado por desarrolladores para redirigir nombres de dominio a direcciones IP locales o de prueba durante el desarrollo de software y pruebas de aplicaciones web.

3. **Bloqueo de Sitios Web**: Al asignar nombres de dominio conocidos a direcciones no válidas o locales (como 127.0.0.1), los usuarios pueden bloquear efectivamente el acceso a sitios web indeseados.

4. **Rendimiento y Caché**: Al almacenar las direcciones IP localmente, el archivo `hosts` puede reducir los tiempos de respuesta al eliminar la necesidad de realizar consultas DNS para nombres de host comúnmente accedidos o críticos.

5. **Redundancia y Seguridad**: En caso de que el DNS no esté disponible o haya sido comprometido, el archivo `hosts` puede proporcionar una capa adicional de redundancia para resolver nombres de host críticos a sus direcciones IP.

El archivo `hosts` tiene una estructura simple, donde cada entrada consta de una dirección IP seguida de uno o más nombres de host. Las modificaciones en este archivo deben realizarse con cuidado, ya que los errores pueden provocar problemas de conectividad o bloqueos inadvertidos.

---

### Ejercicio 14

Abra el programa Wireshark para comenzar a capturar el tráfico de red en la interfaz con IP `172.28.0.1`.

Una vez abierto realice una consulta DNS con el comando dig para averiguar el registro MX de redes.unlp.edu.ar y luego, otra para averiguar los registros NS correspondientes al dominio redes.unlp.edu.ar.

Analice la información proporcionada por dig y compárelo con la captura.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9b89ca2e-37fb-4e2c-af2e-92a5c7fa45a8)

```bash
dig mx redes.unlp.edu.ar +noall +answer
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f2edf8e0-804e-4816-a1ea-c82df2a95964)

```bash
dig ns redes.unlp.edu.ar +noall +answer
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fcfa7401-0347-4395-9719-ba7d10f5f67a)

---

### Ejercicio 15

Dada la siguiente situación: “Una PC en una red determinada, con acceso a Internet, utiliza los servicios de DNS de un servidor de la red”. Analice

#### Parte a

`¿Qué tipo de consultas (iterativas o recursivas) realiza la PC a su servidor de DNS?`

Cuando una PC realiza consultas a su servidor DNS local (configurado habitualmente por DHCP o manualmente en la configuración de red), generalmente realiza **consultas recursivas**. Esto significa que la PC le pide al servidor DNS que le dé una respuesta definitiva. Si el servidor DNS local no tiene la respuesta almacenada en su caché, asume la responsabilidad de realizar las consultas adicionales necesarias para resolver el nombre completo, sin requerir más acción por parte de la PC.

#### Parte b

`¿Qué tipo de consultas (iterativas o recursivas) realiza el servidor de DNS para resolver requerimientos de usuario como el anterior? `

`¿A quién le realiza estas consultas?`

El servidor DNS configurado para resolver los nombres de dominio por parte de la PC realizará **consultas iterativas** cuando hable con otros servidores DNS en Internet. En una consulta iterativa, el servidor DNS local pregunta a otro servidor DNS (comenzando generalmente por los servidores raíz, seguidos por los servidores de los TLD y finalmente los servidores autoritativos para el dominio en cuestión) y si ese servidor no conoce la respuesta, devolverá la dirección de otro servidor DNS más cercano al nombre de dominio que se está buscando. 

El servidor DNS local continuará esta serie de consultas iterativas hasta que encuentre un servidor que pueda responder con una autoridad (es decir, un servidor de nombres que alberga los registros DNS para el dominio solicitado) o hasta que determine que el dominio no existe (NXDOMAIN). Al final del proceso iterativo, el servidor DNS local tendrá la respuesta completa, que luego enviará de vuelta a la PC en respuesta a su consulta recursiva original.

---

### Ejercicio 16

`Relacione DNS con HTTP`

DNS (Sistema de Nombres de Dominio) y HTTP (Protocolo de Transferencia de Hipertexto) trabajan juntos para facilitar la navegación por Internet, pero cumplen funciones diferentes en el proceso:

- **DNS** se encarga de traducir los nombres de dominio (como "www.example.com") en direcciones IP (como "93.184.216.34"). Esto es necesario porque aunque los humanos encuentran conveniente usar nombres de dominio fáciles de recordar para acceder a sitios web, las redes informáticas utilizan direcciones IP para localizar y comunicarse entre sí.

- **HTTP** es un protocolo de la capa de aplicación utilizado para la transmisión de documentos hipermedia, como HTML. Es el fundamento de cualquier intercambio de datos en la Web y un protocolo cliente-servidor, lo que significa que las solicitudes son iniciadas por el receptor, usualmente el navegador web, permitiendo la recuperación de recursos web de servidores.

`¿Se puede navegar si no hay servicio de DNS?`

Sí, es posible navegar por Internet sin un servicio de DNS, pero con limitaciones significativas:

1. **Uso Directo de Direcciones IP**: Puedes acceder a sitios web directamente usando sus direcciones IP en lugar de sus nombres de dominio en la barra de direcciones del navegador. Por ejemplo, ingresar `http://93.184.216.34` en lugar de `http://www.example.com`. Sin embargo, esto no siempre funciona para sitios web hospedados en servidores de alojamiento compartido donde múltiples dominios comparten la misma dirección IP y dependen del encabezado del host en la solicitud HTTP para servir el sitio correcto.

2. **Archivo Hosts**: Puedes utilizar el archivo `hosts` de tu sistema operativo para mapear manualmente nombres de dominio a direcciones IP. Al añadir entradas para los sitios web que deseas visitar, puedes navegar a ellos usando nombres de dominio sin necesidad de consultar un servidor DNS. Este método es práctico para un número pequeño de sitios web, pero no es escalable para la navegación general por Internet.

Aunque técnicamente es posible navegar sin DNS, la conveniencia, la escalabilidad y la flexibilidad que proporciona DNS lo hacen esencial para la experiencia moderna de Internet, facilitando el acceso a innumerables recursos en línea sin necesidad de recordar direcciones IP específicas.

---

### Ejercicio 17

Observar el siguiente gráfico y contestar:

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/9e3ee962-c008-46cd-bd18-15e2a0c4f8d1)

Si la PC-A, que usa comoservidor de DNSa "DNSServer", desea obtener la IP de www.unlp.edu.ar, cuáles serían, y en qué orden, los pasos que se ejecutarán para obtener la respuesta.

`¿Dónde es recursiva la consulta? ¿Y dónde iterativa?`

La imagen muestra una red con varios servidores DNS y un cliente (PC-A) que desea resolver la dirección IP de `www.unlp.edu.ar`. Aquí está el proceso paso a paso que seguirá la consulta DNS:

1. **PC-A solicita la dirección IP para `www.unlp.edu.ar`**:
   - La consulta comienza cuando PC-A solicita a su servidor DNS local (192.168.10.2) la resolución del nombre `www.unlp.edu.ar`.

2. **Consulta Recursiva al Servidor DNS Local**:
   - PC-A realiza una **consulta recursiva** al servidor DNS local. Esto significa que PC-A espera una respuesta definitiva y no participa en el proceso de resolución.
   - Si el servidor DNS local tiene la respuesta en su caché y está aún dentro del tiempo de vida (TTL), la devolverá directamente a PC-A. Si no, continuará con el proceso.

3. **Servidor DNS Local Realiza Consultas Iterativas**:
   - El servidor DNS local no tiene la información en caché, por lo que realiza **consultas iterativas** a otros servidores DNS para resolver la dirección.
   - Primero consulta a un servidor raíz DNS (por ejemplo, A.Root-Server 205.10.100.10), que no resuelve la dirección sino que le indica dónde encontrar más información, en este caso, el servidor del TLD `.ar`.

4. **Consulta al Servidor del TLD .ar**:
   - A continuación, el servidor DNS local consulta al servidor DNS del TLD `.ar` (a.dns.ar 200.108.145.50), que tampoco resolverá directamente la consulta, sino que dirigirá al servidor DNS local hacia el servidor de nombres autoritativo para el dominio `edu.ar`.

5. **Consulta al Servidor del Dominio edu.ar**:
   - Luego, el servidor DNS local consulta al servidor de nombres para `edu.ar` (ns1.riu.edu.ar 170.210.0.18) que proporciona información sobre el servidor de nombres para `unlp.edu.ar`.

6. **Consulta al Servidor de Nombres de unlp.edu.ar**:
   - Por último, el servidor DNS local hace una consulta al servidor de nombres para `unlp.edu.ar` (en la imagen no se muestra explícitamente este servidor DNS, pero asumimos que es donde el servidor DNS local obtendrá la información final) que finalmente le dará la dirección IP para `www.unlp.edu.ar`.

7. **Respuesta a PC-A**:
   - El servidor DNS local regresa la respuesta a PC-A con la dirección IP de `www.unlp.edu.ar`, completando la solicitud inicial. Esta respuesta es el final de la consulta recursiva inicial realizada por PC-A.

En este proceso, la consulta recursiva se realiza entre el cliente (PC-A) y su servidor DNS local. Las consultas iterativas son realizadas por el servidor DNS local cuando habla con otros servidores DNS en la jerarquía hasta obtener la respuesta final. Cada servidor consultado proporciona una pieza del rompecabezas que permite al servidor DNS local llegar al servidor de nombres que tiene la autoridad directa sobre el dominio que se está consultando.

---

### Ejercicio 18

`¿A quién debería consultar para que la respuesta sobre www.google.com sea autoritativa?`

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0873d6f5-cdbe-4a89-a4d2-57e560eaeaf3)



`¿Qué sucede si al servidor elegido en el paso anterior se lo consulta por www.info.unlp.edu.ar?`

`¿Y si la consulta es al servidor 8.8.8.8?`


1. **Consulta para obtener el servidor DNS autoritativo de `www.google.com`**:
   ```bash
   dig NS google.com +short
   ```
   Este comando te dará una lista de los servidores DNS autoritativos para `google.com`.

2. **Consulta para obtener una respuesta autoritativa de `www.google.com`**:
   Selecciona uno de los servidores obtenidos en el paso anterior y realiza la consulta de registro A directamente a ese servidor:
   ```bash
   dig @ns-autoritativo.google.com A www.google.com +noall +answer
   ```
   Reemplaza `ns-autoritativo.google.com` con el servidor real obtenido en el primer paso.

3. **Consulta al servidor DNS autoritativo de `google.com` para `www.info.unlp.edu.ar`**:
   Si realizas esta consulta, lo más probable es que recibas un error o una respuesta no autoritativa, ya que ese servidor no tiene información sobre el dominio `unlp.edu.ar`:
   ```bash
   dig @ns-autoritativo.google.com A www.info.unlp.edu.ar +noall +answer
   ```

4. **Consulta al servidor público 8.8.8.8**:
   Para realizar una consulta recursiva para cualquier dominio utilizando el servidor DNS público 8.8.8.8, usarías:
   ```bash
   dig @8.8.8.8 A www.google.com +noall +answer
   ```
   y para `www.info.unlp.edu.ar`:
   ```bash
   dig @8.8.8.8 A www.info.unlp.edu.ar +noall +answer
   ```
   Estos comandos solicitan al servidor público de Google que realice la resolución de DNS y te proporcione los resultados.

Con estos comandos puedes obtener información tanto de dominios específicos como de cualquier otro nombre de dominio a través de un servidor DNS público. Los resultados no serán autoritativos si el servidor que realizas la consulta no es el servidor DNS autoritativo para ese dominio. Sin embargo, servidores como 8.8.8.8 son resolvers recursivos confiables que obtendrán la información de los servidores autoritativos en tu nombre.


---

### Ejercicio 19

¿Qué sucede si al servidor elegido en el paso anterior se lo consulta por www.info.unlp.edu.ar?

`¿Y si la consulta es al servidor 8.8.8.8?`


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