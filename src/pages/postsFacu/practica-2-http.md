---
layout: ../../layouts/MarkdownPostLayout.astro
title: Practica 2 HTTP
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/http.webp'
    alt: "Redes."
pubDate: 2024-03-30
tags: ["HTTP", "HTTP 1.0", "HTTP 1.1"]
---



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
- [Ejercicio Parcial](#ejercicio-parcial)


---

# Introducción

## Ejercicio 1

`¿Cuál es la función de la capa de aplicación?`

La función de la capa de aplicación en las redes de computadoras es proporcionar servicios de comunicación a los usuarios y a las aplicaciones. Esta capa incluye las propias aplicaciones que utilizan la red, como navegadores web, clientes de correo electrónico y aplicaciones de mensajería instantánea. En el contexto de Machine to Machine (M2M), la capa de aplicación facilita la comunicación entre máquinas sin intervención humana.

Además, la capa de aplicación actúa como una interfaz entre el usuario o las aplicaciones/servicios y la red. Es responsable de la definición del formato de los mensajes, de establecer las reglas para el intercambio de mensajes y de asegurar que los mensajes se transmitan de manera que cumplan con los requisitos de la aplicación. También se encarga de la conversión y codificación de datos, la compresión y descompresión, y el cifrado y descifrado, integrando funciones de lo que en el modelo OSI corresponden a las capas de Aplicación, Presentación y Sesión.

<audio controls><source src="../redes/practica2/2.mp3" type="audio/mpeg"></audio>

## Ejercicio 2

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

## Ejercicio 3

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

## Ejercicio 4

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

## Ejercicio 5

`¿Qué son y en qué se diferencian HTML y HTTP?`

1. **HTML**: Es un lenguaje de marcado utilizado para crear y estructurar páginas web. HTML utiliza etiquetas y atributos para definir cómo se muestra el contenido en un navegador web, como textos, imágenes, enlaces, tablas, listas, etc. HTML se ocupa de la presentación y la estructura del contenido en la web.

2. **HTTP**: Es un protocolo de la capa de aplicación utilizado para la transmisión de documentos hipermedia, como HTML. Es el fundamento de cualquier intercambio de datos en la Web y es un protocolo basado en solicitudes y respuestas entre clientes (por ejemplo, un navegador web) y servidores (el lugar donde se aloja la página web). HTTP define cómo se deben transmitir los mensajes y los datos entre cliente y servidor.

`¿En que entidad ubicaría a HTML?`

En cuanto a la entidad donde se ubicaría HTML, este se sitúa en la capa de aplicación del modelo TCP/IP o en las capas de presentación y aplicación del modelo OSI, ya que está directamente relacionado con la forma en que se presentan los datos al usuario final en aplicaciones de red, específicamente en navegadores web .

## Ejercicio 6

HTTP tiene definido un formato de mensaje para los requerimientos y las respuestas. 

> (Ayuda: apartado “Formato de mensaje HTTP”, Kurose).

#### Ejercicio a

`¿Qué información de la capa de aplicación nos indica si un mensaje es de requerimiento o de respuesta para HTTP? `

En HTTP, los mensajes de requerimiento y respuesta se diferencian principalmente por la línea de inicio, que es la primera línea del mensaje HTTP.

- **Requerimiento (Request):**
  - **Línea de inicio:** Compuesta por el método HTTP, la URI (Uniform Resource Identifier) solicitada, y la versión de HTTP. Ejemplo de una línea de inicio de un requerimiento: `GET /index.html HTTP/1.1`. Aquí, `GET` es el método HTTP, `/index.html` es la URI solicitada, y `HTTP/1.1` es la versión del protocolo HTTP utilizada.
  - **Métodos HTTP comunes:** GET (solicitar datos), POST (enviar datos para procesamiento), PUT (actualizar recursos), DELETE (eliminar recursos), entre otros.

- **Respuesta (Response):**
  - **Línea de inicio:** Incluye la versión de HTTP utilizada, el código de estado, y una frase descriptiva que explica el código. Ejemplo de una línea de inicio de respuesta: `HTTP/1.1 200 OK`. En este caso, `HTTP/1.1` indica la versión, `200` es el código de estado que significa éxito, y `OK` es la descripción del código de estado.
  - **Códigos de estado:** Van desde respuestas informativas (100-199), éxitos (200-299), redirecciones (300-399), errores del cliente (400-499) hasta errores del servidor (500-599).

`¿Cómo está compuesta dicha información?`

El formato detallado de los mensajes HTTP tanto para los requerimientos como para las respuestas incluye varios componentes además de la línea de inicio:

- **Cabeceras (Headers):** Pares clave-valor que llevan información adicional sobre el mensaje HTTP. Son fundamentales para el funcionamiento del protocolo y permiten una gran variedad de funcionalidades.
  - **Ejemplos de cabeceras en requerimientos:** `User-Agent` (tipo de navegador), `Accept` (tipos de contenido que el cliente puede procesar), `Content-Type` (tipo de datos en el cuerpo del mensaje), `Authorization` (credenciales de autenticación).
  - **Ejemplos de cabeceras en respuestas:** `Content-Type` (tipo de contenido del cuerpo de respuesta), `Set-Cookie` (enviar cookies al cliente), `Cache-Control` (directivas de caché), `WWW-Authenticate` (indica método de autenticación requerido).

- **Cuerpo (Body):** Opcional en algunos tipos de mensajes, contiene los datos transmitidos. En los requerimientos puede incluir datos a ser procesados por el servidor (como en POST), y en las respuestas usualmente lleva el recurso solicitado o un mensaje de error.

`¿Para qué sirven las cabeceras?`

Las cabeceras HTTP cumplen roles cruciales en la funcionalidad del protocolo:

- **Negociación de contenido:** Permite que el cliente y el servidor seleccionen el formato más adecuado para los datos que se intercambian, basándose en capacidades o preferencias.
- **Control de caché:** Define políticas para el almacenamiento en caché de recursos, lo que puede reducir la carga en los servidores y acelerar la carga de páginas en el cliente.
- **Autenticación y control de acceso:** Proveen mecanismos para que los servidores identifiquen y autoricen a los usuarios, asegurando que solo los usuarios autorizados puedan acceder a ciertos recursos.
- **Manejo de sesiones:** Aunque HTTP es un protocolo sin estado, las cabeceras como `Cookie` y `Set-Cookie` permiten la creación de sesiones, manteniendo el estado a través de múltiples interacciones consecutivas.
- **Información sobre el estado de la conexión:** Como `Keep-Alive` para mantener la conexión abierta y reutilizarla para futuras solicitudes, reduciendo la latencia y la sobrecarga en la creación de conexiones.

Estos componentes permiten que HTTP sea un protocolo flexible y poderoso, adecuado para las diversas necesidades del mundo web moderno.

## Ejercicio 7
## Ejercicio 8
## Ejercicio 9
## Ejercicio 10
## Ejercicio 11
## Ejercicio 12
## Ejercicio 13
## Ejercicio 14
## Ejercicio 15
## Ejercicio 16
## Ejercicio 17
## Ejercicio 18
## Ejercicio 19
## Ejercicio 20
## Ejercicio Parcial