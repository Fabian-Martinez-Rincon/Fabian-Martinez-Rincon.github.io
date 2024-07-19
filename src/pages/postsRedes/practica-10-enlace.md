---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Enlace'
pubDate: 2024-06-20
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Redes/enlace.jpg'
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

---

### Ejercicio 1

`¿Qué función cumple la capa de enlace? Indique qué servicios presta esta capa.`

La capa de enlace de datos, también conocida como capa 2 del Modelo OSI (Open Systems Interconnection), es fundamental en el proceso de comunicación en redes de computadoras. Su principal función es proporcionar medios para que los datos se transfieran de manera confiable entre dispositivos adyacentes conectados a la misma red física, como un enlace Ethernet o una conexión Wi-Fi. Aquí detallo las funciones y servicios principales que presta esta capa:

`Funciones de la Capa de Enlace de Datos`

1. **Control de Acceso al Medio (MAC)**:
   - **Definición**: Gestiona cómo los dispositivos en la misma red física acceden al medio compartido de comunicación.
   - **Importancia**: Evita colisiones y sobrecarga de la red gestionando cuándo y cómo los dispositivos pueden transmitir datos.

2. **Detección y corrección de errores**:
   - **Definición**: Identifica y, en algunos casos, corrige errores que ocurren en el nivel físico (capa 1).
   - **Mecanismo**: Utiliza técnicas como el chequeo de paridad, checksums y código de corrección de errores para asegurar que los datos recibidos son correctos y completos.

3. **Encapsulamiento de tramas**:
   - **Definición**: Encapsula paquetes de la capa de red en tramas agregando encabezados y trailers necesarios para el procesamiento en la capa de enlace.
   - **Componentes**: Los encabezados y trailers típicamente incluyen direcciones de origen y destino, información de control, y a menudo checksums para error checking.

4. **Control de Flujo**:
   - **Definición**: Regula la velocidad de transmisión de datos para evitar que el emisor sobrecargue al receptor.
   - **Métodos**: Puede implementarse mediante mecanismos de retroalimentación entre emisor y receptor, como en el protocolo Ethernet.

5. **Delimitación de tramas**:
   - **Definición**: Determina dónde comienza y termina cada trama, lo cual es esencial para la correcta extracción y procesamiento de los datos.
   - **Métodos**: Uso de secuencias especiales de bytes que no se encuentran en los datos normales para señalar límites de tramas.

`Servicios Prestados por la Capa de Enlace de Datos`

- **Confiabilidad de la Transmisión**: Asegura que los datos transmitidos lleguen sin errores, en secuencia y sin pérdidas ni duplicaciones.
- **Interconexión de Redes**: Facilita la interconexión entre diferentes tecnologías de red física mediante adaptaciones en el enlace de datos.
- **Control de Topología**: Gestiona cómo los dispositivos están organizados y comunican en la red, ayudando a organizar y optimizar la estructura de la red.
- **Gestión**: Proporciona medios para diagnosticar problemas y administrar el rendimiento de la red en la capa de enlace.

`Conclusión`

La capa de enlace de datos es crucial en la arquitectura de red, proporcionando la base para una comunicación fiable y efectiva entre dispositivos en la misma red. Esta capa asegura que, pese a las imperfecciones del medio físico y las limitaciones de los dispositivos, la comunicación pueda llevarse a cabo de manera eficiente y controlada.

---

### Ejercicio 2

`Compare los servicios de la capa de enlace con los de la capa de transporte.`

La comparación entre los servicios de la capa de enlace de datos (capa 2 del modelo OSI) y la capa de transporte (capa 4 del modelo OSI) revela diferencias clave en sus funciones, objetivos y ámbitos de operación dentro de una red. Aunque ambas capas proporcionan servicios críticos para la entrega de datos, lo hacen en diferentes etapas del proceso de comunicación y con diferentes enfoques.

`Capa de Enlace de Datos (Capa 2)`

`Objetivos y Funciones:`

- **Proporciona comunicación entre dispositivos adyacentes** ubicados en la misma red local o enlace.
- **Control de acceso al medio (MAC)**: Gestiona cómo los dispositivos acceden al medio físico compartido para evitar colisiones.
- **Encapsulamiento de datos**: Empaqueta los datos de la capa de red en tramas, agregando encabezados y colas con direcciones físicas, control de errores y control de flujo.
- **Detección y corrección de errores**: Utiliza métodos como el CRC (Cyclic Redundancy Check) para detectar errores en los datos recibidos.
- **Control de flujo**: Evita que el emisor sobrecargue al receptor en el mismo enlace.
- **Funciona en una única red de enlace**, no enruta ni proporciona entrega de datos entre diferentes redes.

`Capa de Transporte (Capa 4)`

`Objetivos y Funciones:`

- **Proporciona comunicación de host a host**, abstrayendo los detalles de las capas de red subyacentes para aplicaciones en diferentes hosts.
- **Segmentación y reensamblaje de datos**: Divide los mensajes de aplicación en segmentos más pequeños en el emisor y los reensambla en el receptor.
- **Control de conexión**: Administra las conexiones de datos end-to-end, asegurando que sean confiables (como en TCP) o no confiables pero rápidas (como en UDP).
- **Control de flujo y control de congestión**: Regula la cantidad de datos que pueden ser enviados y ajusta esta cantidad según la capacidad del canal y el estado de la red para prevenir la congestión.
- **Multiplexación y desmultiplexación**: Utiliza puertos para dirigir segmentos a las aplicaciones correctas en los hosts.
- **Opera a través de múltiples redes**: Facilita la entrega de datos a través de internetworks, proporcionando funcionalidad independiente de la estructura de red subyacente.

`Comparación de Servicios`

- **Ámbito de operación**: La capa de enlace se centra en la comunicación entre nodos que están físicamente conectados o en la misma red local, mientras que la capa de transporte proporciona comunicación entre procesos de aplicación en diferentes hosts que pueden estar en redes remotas.
- **Confiabilidad**: Ambas capas pueden proporcionar detección de errores, pero la capa de transporte tiene capacidades adicionales como la recuperación de errores y el control de congestión, diseñadas para garantizar una entrega de datos fiable y eficiente a través de múltiples redes y enlaces.
- **Encapsulamiento**: La capa de enlace encapsula paquetes en tramas, mientras que la capa de transporte encapsula mensajes de aplicación en segmentos o datagramas.
- **Control de flujo**: Mientras que la capa de enlace gestiona el control de flujo para prevenir la sobrecarga en un enlace específico, la capa de transporte lo gestiona de extremo a extremo entre los hosts finales.

`Conclusión`

Aunque ambas capas contribuyen a la funcionalidad general de las redes y comparten algunas funciones como el control de flujo y la detección de errores, se dirigen a diferentes aspectos del proceso de comunicación en red. La capa de enlace facilita la comunicación directa entre dispositivos conectados localmente, mientras que la capa de transporte proporciona servicios de comunicación host-to-host a nivel de aplicación, asegurando que los datos se entreguen de manera eficiente y confiable a través de complejas topologías de red.

---
### Ejercicio 3

Direccionamiento Ethernet:

- ¿Cómo se identifican dos máquinas en una red Ethernet?
- ¿Cómo se llaman y qué características poseen estas direcciones?
- ¿Cuál es la dirección de broadcast en la capa de enlace? ¿Qué función cumple?

En una red Ethernet, el direccionamiento y la identificación de dispositivos siguen un esquema estructurado que facilita la comunicación entre máquinas dentro de la misma red local. A continuación, te explico detalladamente cómo se identifican las máquinas en una red Ethernet, las características de las direcciones utilizadas, y el propósito y función de la dirección de broadcast en la capa de enlace.

`¿Cómo se identifican dos máquinas en una red Ethernet?`

1. **Direcciones MAC (Media Access Control):**
   - Cada dispositivo en una red Ethernet tiene una dirección MAC única, que es utilizada para identificar físicamente cada máquina en la red. Esta dirección es esencial para la comunicación en la capa de enlace de datos.

`¿Cómo se llaman y qué características poseen estas direcciones?`

2. **Características de las Direcciones MAC:**
   - **Longitud:** Una dirección MAC consta de 48 bits (6 bytes). 
   - **Formato:** Típicamente representada en hexadecimal, dividida en seis grupos de dos dígitos separados por dos puntos o guiones (por ejemplo, 01:23:45:67:89:AB).
   - **Asignación:** Los primeros tres bytes (24 bits) son conocidos como el identificador de organización único (OUI) y son asignados por la IEEE a los fabricantes. Los siguientes tres bytes son asignados por el fabricante y aseguran que cada tarjeta de red tenga una dirección única.
   - **Tipos:**
     - **Unicast:** La dirección representa a un solo dispositivo. Las comunicaciones dirigidas a una dirección unicast solo están destinadas a ese dispositivo específico.
     - **Multicast:** La dirección representa a un grupo de dispositivos. Las comunicaciones enviadas a una dirección multicast son recibidas por todos los dispositivos que son parte de ese grupo multicast.
     - **Broadcast:** Una dirección especial que permite la comunicación con todos los dispositivos en la red local.

`¿Cuál es la dirección de broadcast en la capa de enlace? ¿Qué función cumple?`

3. **Dirección de Broadcast en Ethernet:**
   - **Dirección:** La dirección de broadcast en Ethernet es FF:FF:FF:FF:FF:FF. Esta dirección es reconocida por todos los dispositivos en una red Ethernet.
   - **Función:**
     - **Alcance a Todos los Dispositivos:** Cualquier trama enviada a esta dirección será recibida y procesada por todos los dispositivos en la red local. Esto es útil para enviar anuncios o consultas que deben ser escuchados por todos los dispositivos simultáneamente.
     - **Inicialización y Configuración:** Frecuentemente utilizada para protocolos de configuración inicial como DHCP, donde una máquina cliente envía una trama de broadcast para encontrar servidores DHCP sin saber sus direcciones IP específicas.

`Conclusión`

Las direcciones MAC son fundamentales para el funcionamiento de las redes Ethernet, proporcionando un método estándar para identificar físicamente cada dispositivo en una red. Las direcciones de broadcast, en particular, desempeñan un papel crucial al permitir comunicaciones a todos los dispositivos de la red simultáneamente, facilitando tanto la configuración de la red como la difusión de información vital a todas las máquinas conectadas.


---

### Ejercicio 4

Sobre los dispositivos de capa de enlace:

- Enumere dispositivos de capa de enlace y explique sus diferencias.
- ¿Qué es una colisión?
- ¿Qué dispositivos dividen dominios de broadcast?
- ¿Qué dispositivos dividen dominios de colisión?


Los dispositivos de la capa de enlace de datos juegan un papel esencial en la gestión del tráfico, la detección y prevención de errores, y el control de acceso en redes de computadoras. A continuación, te explico los dispositivos comúnmente utilizados en esta capa, las diferencias entre ellos, y también abordaré conceptos adicionales como colisiones, dominios de broadcast y de colisión.

`Dispositivos de Capa de Enlace y sus Diferencias`

1. **Hub**:
   - **Tipo**: Dispositivo pasivo (a veces activo).
   - **Función**: Conecta múltiples dispositivos Ethernet en una red y retransmite los datos recibidos a todos los otros puertos, sin procesar ni filtrar el tráfico.
   - **Características**: Opera en un solo dominio de colisión y broadcast, lo que significa que cualquier paquete enviado por un dispositivo es recibido por todos los demás dispositivos conectados al hub.

2. **Switch**:
   - **Tipo**: Dispositivo activo.
   - **Función**: Conecta múltiples dispositivos y filtra y reenvía los datos a los puertos específicos donde están conectados los dispositivos de destino.
   - **Características**: Reduce los dominios de colisión al crear un dominio de colisión separado para cada puerto, pero todos los puertos permanecen en el mismo dominio de broadcast.

3. **Puente**:
   - **Tipo**: Dispositivo de red que se utiliza para dividir una red más grande en segmentos más pequeños, interconectando redes separadas para actuar como una única red.
   - **Función**: Filtra el tráfico entre dos segmentos de red basándose en las direcciones MAC para reducir las colisiones y mejorar la eficiencia.
   - **Características**: Opera en dos dominios de colisión diferentes pero puede extender el dominio de broadcast a través de ambos segmentos de red.

`¿Qué es una Colisión?`

- **Definición**: Una colisión en una red Ethernet ocurre cuando dos o más dispositivos intentan enviar paquetes simultáneamente en el mismo segmento de red o canal de comunicación compartido. Las colisiones degradan el rendimiento de la red porque los paquetes involucrados en la colisión deben ser retransmitidos.
- **Detección**: Las redes Ethernet usan el método de acceso CSMA/CD (Carrier Sense Multiple Access with Collision Detection) para detectar colisiones y manejar la retransmisión de datos.

`¿Qué dispositivos dividen dominios de broadcast?`

- **Router**:
  - **Función**: Divide dominios de broadcast al no reenviar paquetes de broadcast entre interfaces. Cada interfaz del router es un dominio de broadcast separado.
  - **Impacto**: Los routers ayudan a limitar el tráfico de broadcast, reduciendo así la carga en la red y mejorando el rendimiento.

`¿Qué dispositivos dividen dominios de colisión?`

- **Switches y Puentes**:
  - **Función**: Ambos dispositivos reducen el tamaño de los dominios de colisión. Un switch crea un dominio de colisión separado para cada uno de sus puertos, mientras que un puente puede dividir una red en múltiples segmentos más pequeños, cada uno con su propio dominio de colisión.
  - **Impacto**: La división de dominios de colisión mejora el rendimiento de la red al reducir el número de dispositivos que compiten por el medio de transmisión, lo que resulta en menos colisiones y retransmisiones.

Cada uno de estos dispositivos desempeña roles cruciales en la optimización y administración de la red, asegurando que los datos se transmitan de manera eficiente y segura dentro de diversos entornos de red.


---

### Ejercicio 5

`Describa el algoritmo de acceso al medio en Ethernet. ¿Es orientado a la conexión?`

El algoritmo de acceso al medio en Ethernet, conocido como CSMA/CD (Carrier Sense Multiple Access with Collision Detection), es fundamental para regular cómo los dispositivos en una red Ethernet compiten y acceden al medio compartido para enviar datos. A continuación, te describo detalladamente este algoritmo y aclaro si es o no orientado a la conexión.

`Descripción del Algoritmo CSMA/CD`

**CSMA/CD** se utiliza en redes Ethernet que operan en un entorno de medio compartido, típicamente utilizando cable coaxial o en segmentos de red donde múltiples dispositivos pueden acceder al mismo cable físico. El proceso de CSMA/CD incluye varios pasos:

1. **Escuchar el Medio (Carrier Sense)**:
   - **Función**: Antes de enviar datos, un dispositivo debe "escuchar" el medio para detectar si otro dispositivo está transmitiendo (si el medio está "ocupado").
   - **Acción**: Si el medio está ocupado, el dispositivo esperará hasta que esté libre para evitar colisiones de datos.

2. **Transmitir Datos**:
   - **Función**: Una vez que el medio está libre, el dispositivo comienza a transmitir los datos.
   - **Acción**: Durante la transmisión, el dispositivo continúa monitoreando el medio para asegurarse de que no se produzcan colisiones.

3. **Detección de Colisiones (Collision Detection)**:
   - **Función**: Si dos dispositivos comienzan a transmitir simultáneamente, sus señales se superpondrán y distorsionarán, causando una colisión.
   - **Acción**: Cada dispositivo que detecta una colisión deja de transmitir inmediatamente y envía una señal de jam (interferencia) para asegurar que todos los dispositivos en la red sean conscientes de la colisión.

4. **Retraso Aleatorio (Backoff Algorithm)**:
   - **Función**: Después de una colisión, cada dispositivo espera un período de tiempo aleatorio antes de intentar retransmitir, reduciendo la probabilidad de colisiones repetidas.
   - **Acción**: El tiempo de espera se determina usando el algoritmo de backoff exponencial, que aumenta el rango de espera con cada colisión sucesiva.

5. **Intento de Retransmisión**:
   - **Función**: Después del retraso, el proceso comienza de nuevo desde el paso 1, escuchando el medio antes de intentar transmitir nuevamente.

`¿Es CSMA/CD Orientado a la Conexión?`

- **No, CSMA/CD no es orientado a la conexión**. Es un protocolo de acceso al medio que no establece una conexión previa o un canal dedicado entre los dispositivos antes de la transmisión de datos. Funciona en un entorno de difusión donde cada paquete se envía independientemente sin una sesión o conexión preestablecida.

`Conclusión`

CSMA/CD es un método eficiente para gestionar el acceso a un medio de red compartido en ambientes Ethernet, especialmente diseñado para prevenir y gestionar colisiones en redes de área local (LAN). La ausencia de una orientación a la conexión significa que es más flexible y escalable en ambientes donde múltiples dispositivos necesitan comunicarse de manera intermitente y espontánea sin una coordinación o negociación previa constante.

---

### Ejercicio 6

`¿Cuál es la finalidad del protocolo ARP?`

El protocolo ARP (Address Resolution Protocol) desempeña un papel fundamental en las redes de computadoras, específicamente en las redes que operan bajo el protocolo de Internet (IP). Su función principal es mapear direcciones de red de protocolo de nivel superior (como las direcciones IP en una red IPv4) a direcciones de nivel de enlace de datos físicos (como las direcciones MAC en redes Ethernet). Aquí te explico detalladamente la finalidad y el funcionamiento del protocolo ARP.

`Finalidad del Protocolo ARP`

1. **Resolución de Direcciones**:
   - **Propósito**: ARP traduce direcciones IP, que son utilizadas para la capa de red, a direcciones MAC, que son necesarias para la capa de enlace de datos. Esta traducción es esencial para el funcionamiento de la mayoría de las redes LAN que usan IP sobre Ethernet.
   - **Necesidad**: En una red típica, los dispositivos se comunican a través de IP, pero las comunicaciones dentro de la red local (como Ethernet) requieren conocer la dirección MAC del dispositivo de destino para poder enviar los datos de manera efectiva.

2. **Funcionamiento del Protocolo ARP**:
   - **Descubrimiento ARP**: Cuando un dispositivo necesita comunicarse con otro dispositivo en la misma red local y conoce la dirección IP pero no la dirección MAC, envía un mensaje ARP broadcast a todos los dispositivos en la red local. Este mensaje pregunta: "¿Quién tiene esta dirección IP? Envíame tu dirección MAC".
   - **Respuesta ARP**: El dispositivo que tiene la dirección IP solicitada responde con un mensaje ARP unicast al solicitante, proporcionando su dirección MAC.
   - **Caché ARP**: Los dispositivos suelen almacenar las respuestas ARP en una tabla de caché ARP local para reducir la necesidad de futuras solicitudes ARP y mejorar la eficiencia de la red.

`Importancia de ARP en las Redes`

- **Interoperabilidad**: ARP permite la interoperabilidad entre la capa de red y la capa de enlace de datos, lo que es crucial para la transmisión de paquetes dentro de las redes locales como Ethernet.
- **Automatización**: Ofrece un método automático para la resolución de direcciones que es transparente para el usuario y las aplicaciones, lo que simplifica la configuración de la red y la gestión.
- **Soporte para Redes Dinámicas**: Facilita la comunicación en redes dinámicas donde los dispositivos pueden cambiarse, agregarse o eliminarse con frecuencia, asegurando que las direcciones MAC se actualicen según sea necesario.

`Vulnerabilidades de ARP`

- **ARP Spoofing/Poisoning**: A pesar de su utilidad, ARP no tiene mecanismos de autenticación, lo que lo hace vulnerable a ataques donde un atacante puede responder a solicitudes ARP con su propia dirección MAC para interceptar el tráfico de red o realizar ataques man-in-the-middle.

`Conclusión`

La finalidad de ARP es esencial para la conexión y la eficiencia de las redes IP sobre tecnologías de enlace de datos como Ethernet, proporcionando la vinculación necesaria entre direcciones IP y direcciones MAC. Sin embargo, es importante ser consciente de sus limitaciones de seguridad y tomar medidas apropiadas para proteger las redes contra posibles ataques relacionados con ARP.

---

### Ejercicio 7

Investigue los comandos arp e ip neigh. Inicie una topología con CORE, cree una máquina y utilice en ella los comandos anteriores para:

- Listar las entradas en la tabla ARP.
- Borrar una entrada en la tabla de ARP.
- Agregar una entrada estática en la tabla de ARP.

El protocolo ARP (Address Resolution Protocol) desempeña un papel fundamental en las redes de computadoras, específicamente en las redes que operan bajo el protocolo de Internet (IP). Su función principal es mapear direcciones de red de protocolo de nivel superior (como las direcciones IP en una red IPv4) a direcciones de nivel de enlace de datos físicos (como las direcciones MAC en redes Ethernet). Aquí te explico detalladamente la finalidad y el funcionamiento del protocolo ARP.

`Finalidad del Protocolo ARP`

1. **Resolución de Direcciones**:
   - **Propósito**: ARP traduce direcciones IP, que son utilizadas para la capa de red, a direcciones MAC, que son necesarias para la capa de enlace de datos. Esta traducción es esencial para el funcionamiento de la mayoría de las redes LAN que usan IP sobre Ethernet.
   - **Necesidad**: En una red típica, los dispositivos se comunican a través de IP, pero las comunicaciones dentro de la red local (como Ethernet) requieren conocer la dirección MAC del dispositivo de destino para poder enviar los datos de manera efectiva.

2. **Funcionamiento del Protocolo ARP**:
   - **Descubrimiento ARP**: Cuando un dispositivo necesita comunicarse con otro dispositivo en la misma red local y conoce la dirección IP pero no la dirección MAC, envía un mensaje ARP broadcast a todos los dispositivos en la red local. Este mensaje pregunta: "¿Quién tiene esta dirección IP? Envíame tu dirección MAC".
   - **Respuesta ARP**: El dispositivo que tiene la dirección IP solicitada responde con un mensaje ARP unicast al solicitante, proporcionando su dirección MAC.
   - **Caché ARP**: Los dispositivos suelen almacenar las respuestas ARP en una tabla de caché ARP local para reducir la necesidad de futuras solicitudes ARP y mejorar la eficiencia de la red.

`Importancia de ARP en las Redes`

- **Interoperabilidad**: ARP permite la interoperabilidad entre la capa de red y la capa de enlace de datos, lo que es crucial para la transmisión de paquetes dentro de las redes locales como Ethernet.
- **Automatización**: Ofrece un método automático para la resolución de direcciones que es transparente para el usuario y las aplicaciones, lo que simplifica la configuración de la red y la gestión.
- **Soporte para Redes Dinámicas**: Facilita la comunicación en redes dinámicas donde los dispositivos pueden cambiarse, agregarse o eliminarse con frecuencia, asegurando que las direcciones MAC se actualicen según sea necesario.

`Vulnerabilidades de ARP`

- **ARP Spoofing/Poisoning**: A pesar de su utilidad, ARP no tiene mecanismos de autenticación, lo que lo hace vulnerable a ataques donde un atacante puede responder a solicitudes ARP con su propia dirección MAC para interceptar el tráfico de red o realizar ataques man-in-the-middle.

`Conclusión`

La finalidad de ARP es esencial para la conexión y la eficiencia de las redes IP sobre tecnologías de enlace de datos como Ethernet, proporcionando la vinculación necesaria entre direcciones IP y direcciones MAC. Sin embargo, es importante ser consciente de sus limitaciones de seguridad y tomar medidas apropiadas para proteger las redes contra posibles ataques relacionados con ARP.

---

### Ejercicio 8




---
### Ejercicio 9
---
### Ejercicio 10
---
### Ejercicio 11
---
### Ejercicio 12
---
### Ejercicio 13
