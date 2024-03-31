---
layout: ../../layouts/MarkdownPostLayout.astro
title: HTTP
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/http.webp'
    alt: "Redes."
pubDate: 2024-03-30
tags: ["HTTP", "HTTP 1.0", "HTTP 1.1"]
---


Este blog es basicamente para resumir la practica de http.


## Conceptos Introductorios

<details><summary>Internet</summary>

Internet es una red de redes de computadoras descentralizada y pública que utiliza el conjunto abierto de protocolos conocido como suite TCP/IP (Protocolo de Control de Transmisión/Protocolo de Internet). Permite la integración de diferentes tecnologías de red y protocolos de comunicación de nivel más bajo, facilitando la interconexión mundial de redes de computadoras de todo tipo.
</details>

<details><summary>RFC</summary>

Las RFCs (Request for Comments) son una serie de documentos técnicos que describen los métodos, conductas, investigaciones, o innovaciones aplicables al funcionamiento de Internet y sistemas conectados a Internet. Funcionan como las especificaciones estándar que definen los protocolos y políticas de Internet, incluyendo aspectos técnicos y organizativos.
</details>

<details><summary>Protocolo</summary>
Es un conjunto de reglas y convenciones que determinan cómo se transmite la información a través de la red. Estas reglas definen el formato, la sincronización, la secuenciación y la verificación de los mensajes o datos que se envían y reciben entre dispositivos, sistemas o entidades.
</details>

<details><summary>End Systems</summary>

Los "End Systems" o sistemas finales, son dispositivos que se encuentran en los extremos de una comunicación en redes. Incluyen computadoras, smartphones, servidores web y cualquier otro dispositivo capaz de enviar o recibir datos. A diferencia de dispositivos de red como enrutadores y switches que gestionan el tráfico, los sistemas finales son los puntos de origen o destino de este tráfico, actuando como productores o consumidores de datos.

Se clasifican principalmente en dos categorías:

1. **Clientes**: Dispositivos que solicitan recursos, como una PC solicitando una página web.
2. **Servidores**: Dispositivos que proveen recursos a los clientes, como un servidor web alojando sitios.

Este modelo se ve en las arquitecturas cliente-servidor y en redes peer-to-peer (P2P), donde los dispositivos pueden actuar tanto como cliente como servidor. La seguridad de los sistemas finales es crucial, ya que son objetivos comunes para ataques cibernéticos y contienen o acceden a información valiosa. Proteger estos dispositivos es esencial para la seguridad general de la red.
</details>

<details><summary>Red Conmutada de Paquetes</summary>

- **Funcionamiento**: En las redes conmutadas de paquetes, los datos se dividen en pequeñas unidades llamadas paquetes. Cada paquete se envía de forma independiente a través de la red desde el origen hasta el destino, pudiendo seguir diferentes rutas para llegar a su destino.
- **Ventajas**: Esta técnica permite un uso más eficiente y flexible de los recursos de la red, ya que la capacidad de la red se puede compartir entre muchos usuarios. Además, es más resistente a fallos y congestiones, ya que los paquetes pueden redirigirse por rutas alternativas en caso de problemas en alguna parte de la red.
- **Ejemplos**: Internet es el ejemplo más destacado de una red conmutada de paquetes, donde los datos de diferentes usuarios se transmiten en forma de paquetes a través de la misma infraestructura.
</details>

<details><summary>Red Conmutada de Circuitos</summary>

- **Funcionamiento**: En las redes conmutadas de circuitos, se establece una conexión dedicada y continua (un circuito) entre el punto de origen y el destino antes de que comience la transmisión de datos. Esta conexión se mantiene durante toda la duración de la comunicación, independientemente de si se están transmitiendo datos o no.
- **Ventajas**: Este método garantiza una cantidad fija de ancho de banda y una calidad constante de la conexión durante la comunicación, lo que es ideal para servicios que requieren transmisión en tiempo real, como las llamadas telefónicas.
- **Ejemplos**: La red telefónica tradicional (PSTN) es un ejemplo de una red conmutada de circuitos, donde se establece una conexión dedicada entre los teléfonos del emisor y el receptor durante una llamada.
</details>

<details><summary>PDU</summary>

Las Unidades de Datos de Protocolo (PDUs) tienen diferentes nombres dependiendo de la capa en la que se encuentran.

**Capa de Aplicación**: `"Mensaje"`

En esta capa, los datos se preparan para la transferencia a través de la red y se enfocan en el formato y el control de los datos necesarios para las aplicaciones.

**Capa de Transporte**: 

- `"Segmento"` en el caso de TCP (Protocolo de Control de Transmisión)
- `"Datagrama"` en el caso de UDP (Protocolo de Datagramas de Usuario)

 Esta capa asegura la transferencia de datos completa y confiable entre los sistemas finales.

**Capa de Red**: `"Paquete"`. 

En esta capa, los datos se formatean para la transmisión a través de diferentes redes y se maneja el direccionamiento, la clasificación y el enrutamiento de los paquetes.

**Capa de Enlace de Datos**: `"Trama"`.

En esta capa, los datos se preparan para su transmisión física a través del medio de red, proporcionando control de errores y control de flujo.
</details>

<details><summary>Capa de Aplicación</summary>

La función de la capa de aplicación en las redes de computadoras es proporcionar servicios de comunicación a los usuarios y a las aplicaciones. Esta capa incluye las propias aplicaciones que utilizan la red, como navegadores web, clientes de correo electrónico y aplicaciones de mensajería instantánea. En el contexto de Machine to Machine (M2M), la capa de aplicación facilita la comunicación entre máquinas sin intervención humana.

Además, la capa de aplicación actúa como una interfaz entre el usuario o las aplicaciones/servicios y la red. Es responsable de la definición del formato de los mensajes, de establecer las reglas para el intercambio de mensajes y de asegurar que los mensajes se transmitan de manera que cumplan con los requisitos de la aplicación. También se encarga de la conversión y codificación de datos, la compresión y descompresión, y el cifrado y descifrado, integrando funciones de lo que en el modelo OSI corresponden a las capas de Aplicación, Presentación y Sesión.
</details>

<details><summary>User Agent</summary>

Un "Agente de Usuario" o "User Agent" se refiere a cualquier software que actúa en nombre de un usuario. La función principal de un agente de usuario es servir como intermediario entre el usuario y las aplicaciones de red, facilitando la interacción del usuario con la red o los servicios de Internet.
</details>

<details><summary>Cabeceras RFC</summary>
Las Request for Comments (RFC) relacionadas con el Protocolo de Transferencia de Hipertexto (HTTP) definen un conjunto de cabeceras (headers) estándar que pueden ser utilizadas en las solicitudes y respuestas HTTP. Estas cabeceras están documentadas en varias RFC, siendo las más relevantes para HTTP/1.1 las RFC 7230 a la RFC 7235.
</details>

<details><summary>Estados de Resupuesta HEAD 200 OK ejemplo</summary>

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

</details>

<details><summary>Diferencias HTTP/1.0 y HTTP/1.1</summary>

HTTP/1.0 y HTTP/1.1 son dos versiones del Protocolo de Transferencia de Hipertexto (HTTP) que han sido ampliamente utilizadas en la web. La transición de HTTP/1.0 a HTTP/1.1 introdujo varias mejoras significativas en eficiencia, funcionalidad y rendimiento. Aquí detallo las diferencias clave entre estas dos versiones:

### 1. **Conexiones Persistentes:**
- **HTTP/1.0**: Por defecto, utiliza conexiones no persistentes. Esto significa que cada solicitud HTTP requiere una nueva conexión TCP, lo cual introduce latencia adicional y aumenta la carga en los servidores web debido al constante establecimiento y cierre de conexiones.
- **HTTP/1.1**: Introduce conexiones persistentes (conocidas también como "keep-alive") por defecto, permitiendo múltiples solicitudes y respuestas entre el cliente y el servidor sobre la misma conexión TCP. Esto reduce la latencia y mejora el rendimiento general al disminuir la sobrecarga de establecer nuevas conexiones.

### 2. **Pipelining:**
- **HTTP/1.0**: No soporta pipelining. Las solicitudes deben ser enviadas y recibidas una tras otra en secuencia.
- **HTTP/1.1**: Soporta pipelining, permitiendo a los clientes enviar múltiples solicitudes en rápida sucesión sin esperar por cada respuesta individual. Sin embargo, las respuestas deben ser enviadas en el mismo orden en que las solicitudes fueron recibidas.

### 3. **Chunked Transfer Encoding:**
- **HTTP/1.0**: No soporta transferencias codificadas en fragmentos ("chunked"), lo que significa que el tamaño del contenido debe ser conocido de antemano y especificado en la cabecera `Content-Length`.
- **HTTP/1.1**: Soporta transferencias codificadas en fragmentos, permitiendo a los servidores enviar respuestas cuando el tamaño total del cuerpo de la respuesta no se conoce de antemano. Esto es particularmente útil para contenidos generados dinámicamente.

### 4. **Host Headers:**
- **HTTP/1.0**: No requiere la cabecera `Host`. Esto limitaba la capacidad de alojar múltiples dominios (hosting virtual) en la misma dirección IP.
- **HTTP/1.1**: Requiere la cabecera `Host`, permitiendo el hosting virtual al hacer posible que múltiples dominios sean servidos desde una sola dirección IP. La cabecera `Host` especifica cuál dominio se está solicitando.

### 5. **Métodos HTTP y Cabeceras:**
- **HTTP/1.0**: Soporta un conjunto limitado de métodos HTTP (`GET`, `POST`, y `HEAD`) y cabeceras.
- **HTTP/1.1**: Introduce nuevos métodos (`OPTIONS`, `PUT`, `DELETE`, `TRACE`, `CONNECT`) y cabeceras (`Accept-Encoding`, `Transfer-Encoding`, entre otros) que ofrecen mayor flexibilidad y control sobre las transferencias de datos.

### 6. **Caching:**
- **HTTP/1.0**: Implementaciones de caching eran más básicas y menos estandarizadas.
- **HTTP/1.1**: Introduce directivas de caché más detalladas y estandarizadas a través de cabeceras como `Cache-Control`, mejorando la eficiencia del caché y reduciendo la carga en los servidores.

### 7. **Manejo de Errores:**
- **HTTP/1.1**: Proporciona un manejo más detallado de errores con códigos de estado adicionales que permiten a los servidores y clientes manejar situaciones específicas de manera más efectiva.

Estas diferencias resaltan cómo HTTP/1.1 fue diseñado para mejorar la eficiencia de la comunicación en la web, abordar limitaciones de HTTP/1.0 y soportar una internet en crecimiento y cada vez más compleja.
</details>

<details><summary>Diferencias HTTP/2 y HTTP/1.1</summary>

HTTP/2 representa un avance significativo sobre HTTP/1.1, enfocado en mejorar el rendimiento de la web y hacer frente a algunas de las limitaciones inherentes de HTTP/1.1. Aquí están las diferencias clave entre HTTP/1.1 y HTTP/2:

### 1. **Multiplexación:**
- **HTTP/1.1**: Cada recurso requiere una solicitud HTTP sobre una conexión TCP separada o en la misma conexión pero de manera secuencial, lo que puede causar bloqueos en la línea ("head-of-line blocking").
- **HTTP/2**: Permite la multiplexación de múltiples solicitudes y respuestas en una sola conexión TCP, eliminando el bloqueo en la línea y mejorando significativamente la utilización del ancho de banda.

### 2. **Priorización de Solicitudes:**
- **HTTP/1.1**: No tiene capacidad para priorizar solicitudes, lo que significa que todos los recursos se tratan con la misma prioridad.
- **HTTP/2**: Permite a los clientes priorizar solicitudes, asegurando que los recursos críticos se carguen más rápido que aquellos de menor prioridad.

### 3. **Compresión de Cabeceras:**
- **HTTP/1.1**: Las cabeceras HTTP se envían en texto plano sin compresión, lo que puede aumentar la sobrecarga, especialmente en páginas que realizan muchas solicitudes.
- **HTTP/2**: Introduce HPACK, un esquema de compresión de cabeceras que reduce el tamaño de las cabeceras entre solicitudes consecutivas a través de la misma conexión.

### 4. **Flujos, Mensajes y Segmentos:**
- **HTTP/1.1**: No tiene conceptos como flujos o segmentos.
- **HTTP/2**: Introduce conceptos de "flujos", "mensajes" y "segmentos" para una mejor gestión de las conexiones. Un "flujo" es una secuencia de segmentos (frames) pertenecientes a una misma solicitud o respuesta, y cada mensaje HTTP es una secuencia lógica de uno o más segmentos.

### 5. **Server Push:**
- **HTTP/1.1**: No soporta el envío de recursos no solicitados explícitamente por el cliente.
- **HTTP/2**: Permite a los servidores "empujar" recursos hacia el cliente antes de que sean explícitamente solicitados, lo que puede mejorar el tiempo de carga de la página al reducir las rondas de ida y vuelta necesarias para que un cliente obtenga todos los recursos.

### 6. **Protocolo Binario:**
- **HTTP/1.1**: Es un protocolo textual, lo que significa que las solicitudes y respuestas son legibles por humanos.
- **HTTP/2**: Es un protocolo binario, lo que facilita el análisis y reduce los errores de interpretación, además de ser más eficiente para la máquina.

### 7. **Negociación:**
- **HTTP/1.1**: La conexión se realiza utilizando HTTP/1.1 por defecto a menos que se especifique lo contrario.
- **HTTP/2**: Se negocia sobre TLS usando el protocolo de extensión ALPN, permitiendo que un servidor soporte HTTP/1.1 y HTTP/2 en el mismo puerto, y usar el más óptimo.

HTTP/2 está diseñado para mejorar la eficiencia, velocidad y seguridad de las aplicaciones web. Reduce la latencia, permite una carga de página más rápida y mejora la experiencia de usuario en la web moderna. Además, aunque HTTP/2 es significativamente diferente a nivel técnico, se diseñó para ser compatible con las semánticas de HTTP/1.x, asegurando que las aplicaciones web y APIs no necesiten ser reescritas para aprovechar las mejoras de rendimiento que ofrece HTTP/2.
</details>