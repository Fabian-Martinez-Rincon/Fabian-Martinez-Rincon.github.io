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