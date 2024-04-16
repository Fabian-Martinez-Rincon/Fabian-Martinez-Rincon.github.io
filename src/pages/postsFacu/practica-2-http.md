---
layout: ../../layouts/MarkdownPostLayout.astro
title: Practica 2 HTTP
author: Fabian Martinez Rincon
description: ""
image:
    url: '/posts/practicahttp.webp'
    alt: "Redes."
pubDate: 2024-03-30
tags: ["HTTP", "HTTP 1.0", "HTTP 1.1"]
---



- [Ejercicio 1 Capa de Aplicación](#ejercicio-1)
- [Ejercicio 2 Si dos Procesos deben Comunicarse](#ejercicio-2)
- [Ejercicio 3 Modelo Cliente/Servidor](#ejercicio-3)
- [Ejercicio 4 User agent](#ejercicio-4)
- [Ejercicio 5 Diferencias HTML y HTTP](#ejercicio-5)
- [Ejercicio 6 Formato de Mensajes para requerimientos y respuestas HTTP](#ejercicio-6)
- [Ejercicio 7 Curl con parametros](#ejercicio-7)
- [Ejercicio 8 Curl sin parametros](#ejercicio-8)
- [Ejercicio 9 Curl Randoms](#ejercicio-9)
- [Ejercicio 10 Cabecera Date](#ejercicio-10)
- [Ejercicio 11 Como sabe el cliente que recibio el objeto completo](#ejercicio-11)
- [Ejercicio 12 Retornos de un servidor](#ejercicio-12)
- [Ejercicio 13 Curl HEAD](#ejercicio-13)
- [Ejercicio 14 Curl Pistas](#ejercicio-14)
- [Ejercicio 15 Curl HTTP/1.0 y HTTP/1.1 + Telnet](#ejercicio-15)
- [Ejercicio 16 Preguntas sobre el ejercicio 15](#ejercicio-16)
- [Ejercicio 17 POST y GET diferencias](#ejercicio-17)
- [Ejercicio 18 Cabecera Set-Cookie y Cookie](#ejercicio-18)
- [Ejercicio 19 Protocolo Binario vs Basado en texto](#ejercicio-19)
- [Ejercicio 20 Responder Preguntas Random](#ejercicio-20)
- [Ejercicio Parcial](#ejercicio-parcial)
- [Cuestionario de Teoria](#cuestionario)


---

# Introducción

## Ejercicio 1

`¿Cuál es la función de la capa de aplicación?`

La función de la capa de aplicación en las redes de computadoras es proporcionar servicios de comunicación a los usuarios y a las aplicaciones. Esta capa incluye las propias aplicaciones que utilizan la red, como navegadores web, clientes de correo electrónico y aplicaciones de mensajería instantánea. En el contexto de Machine to Machine (M2M), la capa de aplicación facilita la comunicación entre máquinas sin intervención humana.

Además, la capa de aplicación actúa como una interfaz entre el usuario o las aplicaciones/servicios y la red. Es responsable de la definición del formato de los mensajes, de establecer las reglas para el intercambio de mensajes y de asegurar que los mensajes se transmitan de manera que cumplan con los requisitos de la aplicación. También se encarga de la conversión y codificación de datos, la compresión y descompresión, y el cifrado y descifrado, integrando funciones de lo que en el modelo OSI corresponden a las capas de Aplicación, Presentación y Sesión.

---

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

---

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

---

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

---

## Ejercicio 5

`¿Qué son y en qué se diferencian HTML y HTTP?`

1. **HTML**: Es un lenguaje de marcado utilizado para crear y estructurar páginas web. HTML utiliza etiquetas y atributos para definir cómo se muestra el contenido en un navegador web, como textos, imágenes, enlaces, tablas, listas, etc. HTML se ocupa de la presentación y la estructura del contenido en la web.

2. **HTTP**: Es un protocolo de la capa de aplicación utilizado para la transmisión de documentos hipermedia, como HTML. Es el fundamento de cualquier intercambio de datos en la Web y es un protocolo basado en solicitudes y respuestas entre clientes (por ejemplo, un navegador web) y servidores (el lugar donde se aloja la página web). HTTP define cómo se deben transmitir los mensajes y los datos entre cliente y servidor.

`¿En que entidad ubicaría a HTML?`

En cuanto a la entidad donde se ubicaría HTML, este se sitúa en la capa de aplicación del modelo TCP/IP o en las capas de presentación y aplicación del modelo OSI, ya que está directamente relacionado con la forma en que se presentan los datos al usuario final en aplicaciones de red, específicamente en navegadores web .

---

## Ejercicio 6

HTTP tiene definido un formato de mensaje para los requerimientos y las respuestas. 

> (Ayuda: apartado “Formato de mensaje HTTP”, Kurose).


### Ejercicio a

`¿Qué información de la capa de aplicación nos indica si un mensaje es de requerimiento o de respuesta para HTTP? `

En HTTP, los mensajes de requerimiento y respuesta se diferencian principalmente por la línea de inicio, que es la primera línea del mensaje HTTP.

#### **Requerimiento (Request):**

**Línea de inicio:** Compuesta por el método HTTP, la URI (Uniform Resource Identifier) solicitada, y la versión de HTTP. 

#### Ejemplo

Ejemplo de una línea de inicio de un requerimiento: `GET /index.html HTTP/1.1`. Aquí, `GET` es el método HTTP, `/index.html` es la URI solicitada, y `HTTP/1.1` es la versión del protocolo HTTP utilizada.

Esto se puede ver, cuando hacemos un `curl` con el parametro `-v`, que nos muestra la información de la petición y la respuesta.

```bash
redes@debian:~$ curl -v www.redes.unlp.edu.ar
*   Trying 172.28.0.50:80...
* Connected to www.redes.unlp.edu.ar (172.28.0.50) port 80 (#0)
> GET / HTTP/1.1
> Host: www.redes.unlp.edu.ar
> User-Agent: curl/7.74.0
> Accept: */*
> 
```

**Métodos HTTP comunes:** GET (solicitar datos), POST (enviar datos para procesamiento), PUT (actualizar recursos), DELETE (eliminar recursos), entre otros.

#### **Respuesta (Response):**

- **Línea de inicio:** Incluye la versión de HTTP utilizada, el código de estado, y una frase descriptiva que explica el código.
 
Ejemplo de una línea de inicio de respuesta: `HTTP/1.1 200 OK`. En este caso, `HTTP/1.1` indica la versión, `200` es el código de estado que significa éxito, y `OK` es la descripción del código de estado.
- **Códigos de estado:** Van desde respuestas informativas (100-199), éxitos (200-299), redirecciones (300-399), errores del cliente (400-499) hasta errores del servidor (500-599).

```bash
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Date: Sat, 13 Apr 2024 16:37:30 GMT
< Server: Apache/2.4.56 (Unix)
< Last-Modified: Sun, 19 Mar 2023 19:04:46 GMT
< ETag: "1322-5f7457bd64f80"
< Accept-Ranges: bytes
< Content-Length: 4898
< Content-Type: text/html
< 
<!DOCTYPE html>
<html lang="en">

# Continua  la pagina pero no lo pongo porque es demasiado largo
```

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

### Ejercicio b

`¿Cuál es su formato?`

> (Ayuda:https://developer.mozilla.org/es/docs/Web/HTTP/Headers)

El formato de un mensaje HTTP, ya sea un mensaje de requerimiento (solicitud) o un mensaje de respuesta, está compuesto de la siguiente manera:

#### Formato de los Mensajes de Requerimiento HTTP:

1. **Línea de Inicio**: Esta es la primera línea de la solicitud y contiene:
   - **Método HTTP**: El método de solicitud (GET, POST, PUT, DELETE, etc.).
   - **URI**: El identificador del recurso solicitado.
   - **Versión de HTTP**: La versión del protocolo HTTP utilizada (usualmente HTTP/1.1 o HTTP/2).

   Ejemplo:
   ```bash
   GET /index.html HTTP/1.1
   ```

2. **Cabeceras de Requerimiento**: Siguen a la línea de inicio y se componen de pares clave-valor que proporcionan más detalles sobre la solicitud. Incluyen información sobre el navegador (User-Agent), las cookies (Cookie), tipos de contenido que se pueden manejar (Accept), y muchas otras.

   Ejemplo:
   ```bash
   Host: www.ejemplo.com
   User-Agent: curl/7.74.0
   Accept: text/html,application/xhtml+xml
   ```

3. **Cuerpo del Mensaje**: Opcional y solo utilizado en algunos métodos como POST o PUT. Contiene los datos que se envían al servidor.

   Ejemplo (cuerpo de una solicitud POST):
   ```bash
   name=usuario&password=clave
   ```

#### Formato de los Mensajes de Respuesta HTTP:

1. **Línea de Inicio**: Similar a la solicitud, pero para respuestas. Contiene:
   - **Versión de HTTP**: La versión del protocolo HTTP utilizada.
   - **Código de Estado**: Un número de tres dígitos que indica el resultado de la solicitud.
   - **Frase de Razón**: Descripción textual del código de estado.

   Ejemplo:
   ```bash
   HTTP/1.1 200 OK
   ```

2. **Cabeceras de Respuesta**: Pares clave-valor que proporcionan información adicional sobre la respuesta, como el tipo de contenido (Content-Type), longitud del contenido (Content-Length), y la gestión de la caché (Cache-Control).

   Ejemplo:
   ```bash
   Content-Type: text/html
   Content-Length: 3495
   ```

3. **Cuerpo del Mensaje**: Opcional, dependiendo del código de estado y el método HTTP utilizado. Si la respuesta contiene datos (como una página web o datos de una API), estos se incluyen aquí.

   Ejemplo (cuerpo de una respuesta con HTML):
   ```html
   <html>
   <head>
     <title>Ejemplo</title>
   </head>
   <body>
     <p>Hola, mundo!</p>
   </body>
   </html>
   ```

En resumen, tanto los mensajes de requerimiento como de respuesta HTTP están estructurados en una línea de inicio seguida por cabeceras, y opcionalmente un cuerpo de mensaje. Las cabeceras son fundamentales para proporcionar metadatos y controlar el comportamiento del intercambio HTTP.

### Ejercicio c

Suponga que desea enviar un requerimiento con la versión de HTTP 1.1 desde curl/7.74.0 a un sitio de ejemplo como www.misitio.com para obtener el recurso /index.html. En base a lo indicado,

```bash
redes@debian:~$ curl -v -H "User-Agent: curl/7.74.0" -H "Accept: text/html" http://www.misitio.com/index.html
```

`¿qué información debería enviarse mediante encabezados? `

```bash
*   Trying 108.61.73.182:80...
* Connected to www.misitio.com (108.61.73.182) port 80 (#0)
> GET /index.html HTTP/1.1
> Host: www.misitio.com
> User-Agent: curl/7.74.0
> Accept: text/html
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 301 Moved Permanently
< Server: nginx/1.14.2
< Date: Sat, 13 Apr 2024 16:53:57 GMT
< Content-Type: text/html
< Content-Length: 185
< Connection: keep-alive
< Location: https://www.misitio.com/index.html
< 
<html>
<head><title>301 Moved Permanently</title></head>
<body bgcolor="white">
<center><h1>301 Moved Permanently</h1></center>
<hr><center>nginx/1.14.2</center>
</body>
</html>
* Connection #0 to host www.misitio.com left intact
```

El resultado del comando `curl` que has ejecutado indica que el recurso `/index.html` del sitio `www.misitio.com` se ha movido permanentemente a una nueva ubicación. Analicemos en detalle lo que ha sucedido en cada paso:

**Intento de conexión y solicitud GET:**
```
*   Trying 108.61.73.182:80...
* Connected to www.misitio.com (108.61.73.182) port 80 (#0)
> GET /index.html HTTP/1.1
> Host: www.misitio.com
> User-Agent: curl/7.74.0
> Accept: text/html
```
- **Trying 108.61.73.182:80...**: `curl` intenta conectar al servidor en la dirección IP `108.61.73.182` en el puerto estándar de HTTP, que es el 80.
- **Connected to www.misitio.com (108.61.73.182) port 80 (#0)**: La conexión se ha establecido con éxito.
- **GET /index.html HTTP/1.1**: Se envía la solicitud GET para obtener el recurso `/index.html` utilizando HTTP/1.1.
- **Host: www.misitio.com**: El encabezado Host indica el dominio al que se está haciendo la solicitud.
- **User-Agent: curl/7.74.0**: El User-Agent es `curl` versión 7.74.0, que es la herramienta utilizada para hacer la solicitud.
- **Accept: text/html**: El cliente (curl) acepta respuestas de tipo `text/html`.

**Respuesta del servidor:**
```
< HTTP/1.1 301 Moved Permanently
< Server: nginx/1.14.2
< Date: Sat, 13 Apr 2024 16:53:57 GMT
< Content-Type: text/html
< Content-Length: 185
< Connection: keep-alive
< Location: https://www.misitio.com/index.html
```
- **HTTP/1.1 301 Moved Permanently**: El código de estado `301` y el mensaje `Moved Permanently` indican que el recurso ha sido movido de manera permanente a otra URL.
- **Server: nginx/1.14.2**: El servidor que maneja la solicitud es `nginx` versión 1.14.2.
- **Date**: La fecha y hora de la respuesta.
- **Content-Type: text/html**: El tipo de contenido de la respuesta es HTML.
- **Content-Length: 185**: El cuerpo de la respuesta contiene 185 bytes.
- **Connection: keep-alive**: La conexión se mantiene abierta para posibles solicitudes futuras.
- **Location: https://www.misitio.com/index.html**: El encabezado Location indica la nueva URL a la que se ha movido el recurso.

**Cuerpo de la respuesta:**
```html
<html>
<head><title>301 Moved Permanently</title></head>
<body bgcolor="white">
<center><h1>301 Moved Permanently</h1></center>
<hr><center>nginx/1.14.2</center>
</body>
</html>
```
- Este es el cuerpo de la respuesta, que es una página HTML simple que indica que el documento se ha movido permanentemente.

**Mantenimiento de la conexión:**
```
* Connection #0 to host www.misitio.com left intact
```
- La conexión entre `curl` y el servidor se mantiene intacta después de la transacción.

### Conclusión:

La solicitud HTTP original se ha redirigido a una nueva URL que utiliza HTTPS (`https://www.misitio.com/index.html`). Deberías seguir esta nueva URL para obtener el recurso deseado. Si deseas que `curl` siga automáticamente la redirección y obtenga el recurso, puedes agregar la opción `-L` a tu comando `curl`:

```bash
curl -v https://www.misitio.com/index.html

```

La opción `-L` instruirá a `curl` para que siga cualquier redirección HTTP hasta que alcance el recurso final o hasta que se exceda el número máximo de redirecciones permitidas.



`Indique cómo quedaría el requerimiento.`

> Queda para preguntar porque es un re quilombo

---

## Ejercicio 7

`Utilizando la VM, abra una terminal e investigue sobre el comando curl.`

El comando `curl` es una herramienta de línea de comandos utilizada para transferir datos desde o hacia un servidor. Se utiliza para trabajar con diversos protocolos, incluidos HTTP, HTTPS, FTP, SMTP, entre otros. `curl` es útil para probar, depurar y trabajar con API web o servicios de red.

`Analice para qué sirven los siguientes parámetros (-I, -H, -X, -s).`


1. **-I** (o --head): Este parámetro se utiliza para hacer una solicitud HTTP HEAD, lo que significa que `curl` recuperará solo los encabezados de una respuesta HTTP. Es útil para ver metadatos de la respuesta como el tipo de contenido, estado, cookies, y otros encabezados de respuesta sin descargar todo el cuerpo del documento.

2. **-H** (o --header): Este parámetro permite al usuario pasar encabezados adicionales en la solicitud HTTP. Por ejemplo, puede ser utilizado para incluir encabezados de autenticación, indicar el tipo de contenido que se está enviando o cualquier otro encabezado HTTP personalizado necesario para la solicitud.

3. **-X** (o --request): Este parámetro se utiliza para especificar un método de solicitud HTTP personalizado cuando se comunica con el servidor HTTP. Los valores comunes incluyen GET, POST, PUT, DELETE, etc. Por defecto, `curl` realiza una solicitud GET, pero con -X puedes cambiar el tipo de solicitud según sea necesario.

4. **-s** (o --silent): Este parámetro se usa para hacer que `curl` sea silencioso o discreto durante su operación. Cuando se utiliza, `curl` no mostrará la barra de progreso, pero aún proporcionará el resultado final. Es útil para scripts o para cuando se desea un resultado limpio sin información adicional de progreso o errores.

Estos parámetros permiten a los usuarios de `curl` personalizar sus solicitudes HTTP de diversas maneras para satisfacer diferentes necesidades de prueba y comunicación con servidores web y servicios en línea.

---

## Ejercicio 8

Ejecute el comando curl sin ningún parámetro adicional y acceda a www.redes.unlp.edu.ar. Luego responda:

### Resultado

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/37102b10-935b-4061-b8ea-cc6e96ce24e2)

#### Parte a

`¿Cuántos requerimientos realizó y qué recibió?`

Cuando ejecutas el comando `curl` sin ningún parámetro adicional accediendo a `www.redes.unlp.edu.ar`, estás realizando un solo requerimiento HTTP GET hacia el servidor. Este requerimiento pide al servidor que devuelva el contenido completo de la página principal del sitio.

Para ver todos los requerimientos que tu navegador realizaría normalmente al visitar una página web (como cargas de imágenes, CSS, JavaScript, etc.), necesitarías una herramienta que analice el contenido de la página y realice las solicitudes adicionales correspondientes. `curl` por sí solo no realiza este tipo de análisis y seguimiento de contenidos. Por defecto, `curl` solo hace una petición para el recurso específico que le indiques, generalmente el documento HTML principal.

Sin embargo, puedes utilizar `curl` para descargar los recursos individuales si conoces sus URLs exactas. Para hacer un seguimiento de todas las peticiones que un navegador haría, necesitarías una herramienta más avanzada que pueda interpretar HTML y realizar las peticiones adicionales, como un navegador en modo headless o una herramienta de línea de comandos como `wget` con ciertas opciones activadas.

Aquí tienes algunas maneras en las que puedes aproximarte a este proceso:

**Descarga recursiva con `wget`**:
Puedes usar `wget` para descargar recursivamente todos los recursos de una página web. Esto es más cercano a lo que hace un navegador:

```bash
wget -r -l1 -p -k -E http://www.redes.unlp.edu.ar
```

Este comando intentará descargar la página principal y todos los recursos necesarios para su visualización, como CSS, JavaScript e imágenes. Las opciones son:
- `-r`: Recursivo.
- `-l1`: Profundidad de nivel 1.
- `-p`: Descarga todos los recursos necesarios para mostrar la página HTML.
- `-k`: Convierte los enlaces para que funcionen localmente.
- `-E`: Asegura que los archivos HTML tengan la extensión .html.




`Pruebe redirigiendo la salida(>) del comando curl a un archivo con extensión html y abrirlo con un navegador.`

```bash
curl www.redes.unlp.edu.ar > index.html
```

#### Esta imagen la dejo por aca solo para no perderla

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/4536cb29-b612-4d96-9a30-748774544724)

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

---

## Ejercicio 9

Ejecute a continuación los siguientes comandos:


```bash
curl -v -s www.redes.unlp.edu.ar > /dev/null
```
```bash
*   Trying 172.28.0.50:80...
* Connected to www.redes.unlp.edu.ar (172.28.0.50) port 80 (#0)
> GET / HTTP/1.1
> Host: www.redes.unlp.edu.ar
> User-Agent: curl/7.74.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Date: Sat, 13 Apr 2024 17:12:55 GMT
< Server: Apache/2.4.56 (Unix)
< Last-Modified: Sun, 19 Mar 2023 19:04:46 GMT
< ETag: "1322-5f7457bd64f80"
< Accept-Ranges: bytes
< Content-Length: 4898
< Content-Type: text/html
< 
{ [4898 bytes data]
* Connection #0 to host www.redes.unlp.edu.ar left intact

```

```bash
curl -I -v -s www.redes.unlp.edu.ar
```

```bash
*   Trying 172.28.0.50:80...
* Connected to www.redes.unlp.edu.ar (172.28.0.50) port 80 (#0)
> HEAD / HTTP/1.1
> Host: www.redes.unlp.edu.ar
> User-Agent: curl/7.74.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< Date: Sat, 13 Apr 2024 17:13:25 GMT
Date: Sat, 13 Apr 2024 17:13:25 GMT
< Server: Apache/2.4.56 (Unix)
Server: Apache/2.4.56 (Unix)
< Last-Modified: Sun, 19 Mar 2023 19:04:46 GMT
Last-Modified: Sun, 19 Mar 2023 19:04:46 GMT
< ETag: "1322-5f7457bd64f80"
ETag: "1322-5f7457bd64f80"
< Accept-Ranges: bytes
Accept-Ranges: bytes
< Content-Length: 4898
Content-Length: 4898
< Content-Type: text/html
Content-Type: text/html

< 
* Connection #0 to host www.redes.unlp.edu.ar left intact
```

#### Ejercicio a

`¿Qué diferencias nota entre cada uno?`

1. `curl -v -s www.redes.unlp.edu.ar > /dev/null`:
   - `-v` activa el modo verboso, que muestra la solicitud y la respuesta detalladas en la terminal.
   - `-s` silencia la barra de progreso de `curl`.
   - Redirige la salida del contenido (el cuerpo de la respuesta) a `/dev/null`, que es una ubicación en sistemas tipo Unix que descarta toda la información escrita en ella.
   - La solicitud realizada es un método `GET`, que solicita el contenido del recurso.
   
2. `curl -I -v -s www.redes.unlp.edu.ar`:
   - Incluye la opción `-I`, que modifica la solicitud para usar el método `HEAD` en lugar de `GET`. El método `HEAD` solicita solo las cabeceras HTTP de la respuesta, sin el cuerpo del mensaje.
   - Al igual que el primer comando, `-v` activa el modo verboso y `-s` silencia la barra de progreso.
   - No hay redirección del cuerpo del mensaje porque el método `HEAD` no retorna un cuerpo en la respuesta.

La principal diferencia es que el primer comando realiza una solicitud `GET` y descarta el cuerpo de la respuesta, mientras que el segundo realiza una solicitud `HEAD` y no recibe ni necesita descartar ningún cuerpo de respuesta.

#### Ejercicio b. 

`¿Qué ocurre si en el primer comando se quita la redirección a /dev/null?`

Si se quita la redirección a `/dev/null` del primer comando, el cuerpo de la respuesta del servidor (que es el contenido de la página web solicitada) se mostrará en la terminal en lugar de ser descartado. Esto podría generar mucho texto en la terminal si la página solicitada tiene un contenido extenso.

`¿Por qué no es necesaria en el segundo comando?`

En el segundo comando, la redirección a `/dev/null` no es necesaria porque el método `HEAD` no devuelve un cuerpo en la respuesta, por lo que no hay contenido para mostrar o descartar.

#### Ejercicio c. 

`¿Cuántas cabeceras viajaron en el requerimiento? ¿Y en la respuesta?`


En ambos casos, la cantidad de cabeceras en el requerimiento es la misma:

- `Host`: el host solicitado.
- `User-Agent`: identifica el cliente que hace la solicitud.
- `Accept`: los tipos de contenido que el cliente acepta.

La respuesta en ambos comandos también contiene el mismo número de cabeceras, que proporcionan información sobre:

- `HTTP/1.1 200 OK`: el estado de la respuesta.
- `Date`: la fecha y hora del servidor.
- `Server`: el software del servidor.
- `Last-Modified`: cuándo se modificó por última vez el contenido solicitado.
- `ETag`: un identificador único para la versión específica del recurso.
- `Accept-Ranges`: si el servidor acepta solicitudes de rango.
- `Content-Length`: la longitud del contenido en bytes.
- `Content-Type`: el tipo de contenido del recurso.

En resumen, el número de cabeceras que viajan en la respuesta es el mismo en ambos comandos. La diferencia principal entre los comandos es si el cuerpo de la respuesta se descarta (`GET` con redirección a `/dev/null`) o simplemente no se solicita (`HEAD`).

---

## Ejercicio 10

`¿Qué indica la cabecera Date?`

La cabecera `Date` en los mensajes HTTP indica la fecha y la hora en la que el mensaje fue generado por el servidor. La fecha y la hora están siempre expresadas en formato GMT (Greenwich Mean Time), según lo establecido por el protocolo HTTP.

Por ejemplo:
```
Date: Sat, 13 Apr 2024 17:12:55 GMT
```

**Funciones de la cabecera `Date`:**

1. **Sincronización**: Ayuda a sincronizar la hora entre el servidor y el cliente. Aunque los clientes no necesariamente ajustan su hora basándose en esta cabecera, proporciona un contexto temporal para la respuesta. Esto es especialmente útil para gestionar la caché de los recursos, comparar con las cabeceras de modificación y controlar la frescura de la información.

2. **Validación**: En combinación con otras cabeceras como `Last-Modified` o `ETag`, la cabecera `Date` puede usarse para validar la caché. Esto puede determinar si el contenido almacenado en la caché del cliente todavía está actualizado o si necesita ser refrescado.

3. **Seguridad**: Proporciona un punto de referencia temporal para la autenticación y las firmas digitales. Por ejemplo, los tokens de autenticación pueden incluir un sello de tiempo para limitar su validez.

4. **Condiciones para solicitudes subsecuentes**: Las cabeceras como `If-Modified-Since` o `If-Unmodified-Since` pueden utilizar la fecha y hora del servidor para hacer solicitudes condicionales, basándose en cuándo se generó el último mensaje conocido por el cliente.

En resumen, la cabecera `Date` es un componente estándar en las respuestas HTTP que brinda una marca de tiempo oficial del servidor para el mensaje de respuesta. Es útil para los procesos de gestión de caché, seguridad y sincronización de tiempos en la comunicación entre clientes y servidores.

---

## Ejercicio 11

`En HTTP/1.0, ¿cómo sabe el cliente que ya recibió todo el objeto solicitado completamente?`

En HTTP, la forma en que un cliente sabe que ha recibido todo el objeto solicitado completamente varía entre las versiones HTTP/1.0 y HTTP/1.1 debido a las diferencias en cómo gestionan las conexiones y transmiten los datos.

En HTTP/1.0, la forma principal de determinar que todo el objeto solicitado ha sido completamente recibido es a través del cierre de la conexión TCP por parte del servidor. HTTP/1.0 no tiene un mecanismo estándar para mantener la conexión abierta después de que se haya enviado una respuesta; por lo tanto, una vez que el servidor termina de enviar los datos, cierra la conexión. Cuando el cliente detecta que la conexión se ha cerrado, sabe que ha recibido toda la respuesta. Sin embargo, este enfoque tiene varias desventajas, como la necesidad de abrir una nueva conexión TCP para cada solicitud, lo que aumenta la latencia y reduce la eficiencia de la red.

`¿Y en HTTP/1.1?`

HTTP/1.1 introduce varias mejoras para superar las limitaciones de HTTP/1.0, incluyendo el concepto de conexiones persistentes. En HTTP/1.1, las conexiones se mantienen abiertas por defecto, lo que permite enviar múltiples solicitudes y respuestas a través de la misma conexión TCP. Esto plantea la pregunta de cómo el cliente sabe cuándo ha recibido una respuesta completa sin el cierre de la conexión como indicador.

En HTTP/1.1, esto se logra principalmente a través de dos mecanismos:

1. **La cabecera Content-Length**: Cuando el servidor incluye la cabecera `Content-Length` en la respuesta, especifica la longitud exacta del cuerpo de la respuesta en bytes. El cliente usa este valor para determinar cuántos bytes necesita leer del cuerpo de la respuesta, independientemente de si la conexión se mantiene abierta para futuras solicitudes.

2. **Transfer-Encoding chunked**: En casos donde el servidor no puede determinar el tamaño total del contenido de antemano (por ejemplo, para contenido generado dinámicamente), puede utilizar la codificación de transferencia "chunked". Esto implica enviar el cuerpo de la respuesta en una serie de segmentos (chunks), cada uno precedido por su tamaño. El final de la respuesta se indica mediante un segmento de tamaño cero, seguido por los encabezados finales (si los hay) y una línea en blanco. Esto permite al cliente saber que ha recibido todo el objeto solicitado, incluso sin una longitud de contenido predeterminada.

Estos mecanismos permiten una transferencia de datos más eficiente y la reutilización de conexiones, mejorando el rendimiento general de la comunicación HTTP en la versión 1.1 respecto a la 1.0.

---

## Ejercicio 12

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

---

## Ejercicio 13

Utilizando curl, realice un requerimiento con el método HEAD al sitio
`www.redes.unlp.edu.ar` e indique:

```bash
redes@debian:~$ curl -I http://unlp.edu.ar
HTTP/1.1 301 Moved Permanently
Server: nginx/1.18.0
Date: Sat, 13 Apr 2024 17:23:56 GMT
Content-Type: text/html
Content-Length: 169
Connection: keep-alive
Location: https://unlp.edu.ar/
```

### Parte a

`¿Qué información brinda la primera línea de la respuesta?`

La primera línea de la respuesta `HTTP/1.1 301 Moved Permanently` indica que:
- **HTTP/1.1**: Es la versión del protocolo HTTP que el servidor está utilizando para responder.
- **301**: Es el código de estado HTTP que informa que el recurso solicitado ha sido movido a otra URL de forma permanente.
- **Moved Permanently**: Es la frase de razón asociada con el código de estado 301, que proporciona una explicación textual del código de estado para la claridad humana.

### Parte b

`¿Cuántos encabezados muestra la respuesta?`

La respuesta muestra 6 encabezados, que son:
1. **Server**: Información sobre el servidor web.
2. **Date**: Fecha y hora en que se generó la respuesta.
3. **Content-Type**: Tipo de contenido de la respuesta.
4. **Content-Length**: Longitud del contenido de la respuesta.
5. **Connection**: Gestión de la conexión.
6. **Location**: La nueva URL a la que se ha movido el recurso solicitado.

### Parte c

`¿Qué servidor web está sirviendo la página?`

El servidor web que está sirviendo la página es `nginx/1.18.0`. Esto se indica en el encabezado `Server`.

#### Parte d

`¿El acceso a la página solicitada fue exitoso o no?`

El acceso a la página solicitada no fue exitoso en términos de recuperar el recurso originalmente solicitado; en cambio, se informa al cliente de que el recurso se ha movido a una nueva ubicación permanente, que es `https://unlp.edu.ar/`. Esto significa que la solicitud inicial de la página condujo a una redirección.

#### Parte e

`¿Cuándo fue la última vez que se modificó la página?`

La información proporcionada no incluye cuándo fue la última vez que se modificó la página. El encabezado `Last-Modified`, que generalmente proporciona esta información, no está presente en la respuesta. Sin embargo, la presencia de un código de estado 301 sugiere que la URL original ha cambiado de ubicación, por lo que la "última modificación" puede referirse a cuando se realizó el cambio en la URL en lugar del contenido de la página en sí. En este caso, para obtener información sobre la última modificación del contenido real, tendrías que seguir la redirección a la nueva URL y realizar otra solicitud, posiblemente con el método `GET`, para obtener los encabezados relevantes.

```bash
curl -I https://unlp.edu.ar/
```

```bash
HTTP/2 200 
server: nginx/1.18.0
date: Sat, 13 Apr 2024 17:30:17 GMT
content-type: text/html; charset=UTF-8
link: <https://unlp.edu.ar/wp-json/>; rel="https://api.w.org/"
link: <https://unlp.edu.ar/wp-json/wp/v2/pages/390>; rel="alternate"; type="application/json"
link: <https://unlp.edu.ar/>; rel=shortlink
x-cacheable: YES:Forced
x-varnish: 312546773
age: 0
via: 1.1 varnish (Varnish/7.0)
```

### Respuesta HTTP
`HTTP/2 200`: 
- **HTTP/2**: Es la versión del protocolo HTTP que el servidor está utilizando para responder. HTTP/2 es una mejora significativa con respecto a HTTP/1.1 en términos de eficiencia, velocidad y seguridad.
- **200**: Es el código de estado HTTP que indica que la solicitud ha sido exitosa y que el servidor ha encontrado, entendido y aceptado la solicitud, y ha devuelto un recurso como respuesta.

### Encabezados de respuesta
- **server: nginx/1.18.0**: El servidor web que atiende la solicitud es Nginx versión 1.18.0.
- **date: Sat, 13 Apr 2024 17:30:17 GMT**: Fecha y hora en que el servidor envió la respuesta.
- **content-type: text/html; charset=UTF-8**: El tipo de contenido de la respuesta es HTML y está codificado en UTF-8.
- **link**: Encabezados que establecen enlaces a la API de WordPress y a otras URL relacionadas con la API. Estos también proporcionan una URL corta para la página.
- **x-cacheable: YES:Forced**: Indica que la respuesta puede ser almacenada en caché y ha sido marcada para el almacenamiento en caché forzado.
- **x-varnish: 312546773**: Indica un identificador único para la transacción de Varnish Cache, que es un software acelerador de aplicaciones web.
- **age: 0**: El tiempo en segundos desde que el objeto fue almacenado en caché.
- **via: 1.1 varnish (Varnish/7.0)**: Información sobre los proxies o gateways intermedios por los que pasó la respuesta, indicando que Varnish Cache ha sido utilizado.

No se proporciona un encabezado `Last-Modified`, por lo que no podemos determinar a partir de esta respuesta cuándo fue la última vez que se modificó el recurso. Tampoco se incluye un encabezado `ETag`, que a veces se utiliza junto con `Last-Modified` para el control de caché y la validación condicional.

#### Parte f

Solicite la página nuevamente con curl usando GET, pero esta vez indique que quiere obtenerla sólo si la misma fue modificada en una fecha posterior a la que efectivamente fue modificada.

`¿Cómo lo hace?`

`¿Qué resultado obtuvo?`

`¿Puede explicar para qué sirve?`

> Pasaron cosas


---

## Ejercicio 14

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

## Ejercicio 15

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

## Ejercicio 16

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


Piense en el ejercicio donde analizó la cantidad de requerimientos necesarios para obtener una página con estilos, javascripts e imágenes. 

`El caso elegido, ¿puede traer asociado algún problema?`

Las conexiones persistentes (HTTP/1.1) pueden aumentar el uso de recursos del servidor porque las conexiones se mantienen abiertas más tiempo. Esto podría ser un problema para servidores con alto tráfico o recursos limitados. Sin embargo, en general, los beneficios en términos de eficiencia y rendimiento suelen superar estos inconvenientes.

---

## Ejercicio 17

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

## Ejercicio 18


`Investigue cuál es el principal uso que se le da a Set-Cookie y Cookie en HTTP.`

El principal uso de `Set-Cookie` (que el servidor utiliza para enviar cookies al cliente) y `Cookie` (que el cliente utiliza para enviar cookies de vuelta al servidor) en HTTP es para la gestión del estado de la sesión. Esto incluye mantener a los usuarios autenticados, rastrear preferencias del usuario, gestionar carritos de compras en sitios de comercio electrónico, y más. Las cookies permiten que la información persista entre diferentes solicitudes HTTP en un protocolo que por diseño es sin estado.

---

## Ejercicio 19

`¿Cuál es la diferencia entre un protocolo binario y uno basado en texto?`

- **Protocolo basado en texto**: Este tipo de protocolo utiliza texto legible por humanos para la comunicación entre dispositivos o programas. Los mensajes se componen de texto claro, lo que facilita su lectura y depuración sin necesidad de herramientas adicionales. Sin embargo, este tipo de protocolos puede resultar menos eficiente en términos de tamaño del mensaje y velocidad de procesamiento. Ejemplos incluyen HTTP/1.0 y HTTP/1.1.

- **Protocolo binario**: Este tipo de protocolo utiliza estructuras de datos binarias para la comunicación. Los mensajes son compactos y están diseñados para ser procesados rápidamente por la máquina, pero no son legibles directamente por los humanos. Los protocolos binarios suelen ser más eficientes en términos de rendimiento y tamaño de mensaje que los basados en texto, pero pueden ser más difíciles de depurar sin herramientas especiales. Un ejemplo común es el Protocolo de Control de Transmisión (TCP) a nivel de transporte.


`¿de que tipo de protocolo se trata HTTP/1.0, HTTP/1.1 y HTTP/2?`

- **HTTP/1.0 y HTTP/1.1**: Estas versiones de HTTP son protocolos basados en texto. Utilizan texto claro para definir las solicitudes y respuestas, incluyendo métodos, URI, cabeceras y cuerpos del mensaje. Esto los hace fáciles de leer y escribir para los humanos, pero potencialmente más grandes en tamaño y más lentos de procesar que los mensajes binarios debido a la sobrecarga del texto.

- **HTTP/2**: A diferencia de sus predecesores, HTTP/2 es un protocolo principalmente binario. Aunque las solicitudes y respuestas HTTP siguen conceptualmente el mismo formato (métodos, cabeceras, cuerpos), en HTTP/2 estas son codificadas en estructuras binarias llamadas "frames". Esto permite un envío más eficiente, como la compresión de cabeceras y la multiplexación (enviar múltiples solicitudes y respuestas en paralelo a través de la misma conexión). Aunque los mensajes en HTTP/2 son binarios, las cabeceras y otros elementos todavía pueden representarse y enviarse en un formato legible por humanos cuando se visualizan a través de herramientas de depuración.

---

## Ejercicio 20

Responder las siguientes preguntas:

#### Parte a

¿Qué función cumple la cabecera Host en HTTP 1.1? 

¿Existía en HTTP 1.0?

¿Qué sucede en HTTP/2?

#### Parte b

¿Cómo quedaría en HTTP/2 el siguiente pedido realizado en HTTP/1.1 si se
está usando https?
    
```bash
GET /index.php HTTP/1.1
Host: www.info.unlp.edu.ar
```

---

## Ejercicio Parcial

```bash
curl -X ?? www.redes.unlp.edu.ar/??
```
### Resultado

```bash
> HEAD /metodos/ HTTP/??
> Host: www.redes.unlp.edu.ar
> User-Agent: curl/7.54.0
< HTTP/?? 200 OK
< Server: nginx/1.4.6 (Ubuntu)
< Date: Wed, 31 Jan 2018 22:22:22 GMT
< Last-Modified: Sat, 20 Jan 2018 13:02:41 GMT
< Content-Type: text/html; charset=UTF-8
< Connection: close
```
#### Parte a

`¿Qué versión de HTTP podría estar utilizando el servidor?`

La versión de HTTP que probablemente esté utilizando el servidor es HTTP/1.1, como se indica en la línea de respuesta `< HTTP/1.1 200 OK`. HTTP/1.1 es una versión común que soporta características como la conexión persistente y el host virtual, lo cual es indicado por el uso de la cabecera `Host`.

#### Parte b

`¿Qué método está utilizando?`

El método que se está utilizando es `HEAD`. 

`Dicho método, ¿retorna el recurso completo solicitado?`

Este método es utilizado para recuperar las cabeceras que un `GET` habría obtenido, pero sin el cuerpo del mensaje, es decir, no retorna el recurso completo, solo los metadatos del recurso. Es útil para obtener información sobre el recurso sin descargar todo el contenido.

#### Parte c

`¿Cuál es el recurso solicitado?`

El recurso solicitado es `/metodos/` en el host `www.redes.unlp.edu.ar`. Esta es una URI que probablemente apunta a un directorio o sección específica en el servidor web de `redes.unlp.edu.ar`.

#### Parte d

`¿El método funcionó correctamente?`

Sí, el método funcionó correctamente. Esto se evidencia por el código de estado `200 OK` en la respuesta del servidor, que indica que la solicitud fue exitosa y que el servidor pudo responder adecuadamente a la solicitud `HEAD`.

#### Parte e

Si la solicitud hubiera llevado un encabezado que diga: If-Modified-Since: Sat, 20 Jan 2018 13:02:41 GMT

`¿Cuál habría sido la respuesta del servidor web?`

Si la solicitud incluyera el encabezado `If-Modified-Since: Sat, 20 Jan 2018 13:02:41 GMT`, la respuesta del servidor web habría dependido de si el recurso fue modificado después de esa fecha y hora:

- Si el recurso no fue modificado después de `Sat, 20 Jan 2018 13:02:41 GMT`, el servidor habría respondido con un código `304 Not Modified`. Esto indica que no hay necesidad de retransmitir el recurso porque la copia que el cliente tiene en caché todavía es válida.
- Si el recurso fue modificado después de esa fecha y hora, el servidor habría respondido con `200 OK` y habría enviado los metadatos actualizados (o el contenido completo si se hubiera utilizado `GET`).

`¿Qué habría hecho el navegador en este caso?`

En el caso de recibir un `304 Not Modified`, el navegador habría utilizado la versión en caché del recurso, ahorrando ancho de banda y mejorando la velocidad de carga al no tener que descargar nuevamente el recurso completo.

---

## Cuestionario

### Pregunta 1

`Indicar de forma breve la diferencia entre el método GET y el PUT`
- El get es para solicitar datos de un recurso (una url por ejemplo)
- Put se usa para enviar datos al servido

### Pregunta 2

`Indicar cuales características mejoran el rendimiento de HTTP`

Seleccione una o más de una:

- `a)` Uso de SSL
- `b)` Compresión de headers ✔️
- `c)` Pipelining ✔️
- `d)` Conexiones persistentes ✔️
- `e)` Binary Framing ✔️

> Las respuestas correctas son: Pipelining, Conexiones persistentes, Compresión de headers, Binary Framing

### Pregunta 3

`En HTTP 1.0 no se pueden usar conexiones persistentes`

Seleccione una:

- Verdadero 
- Falso ✔️


### Pregunta 4

`Los códigos HTTP 3XX están relacionados con re direcciones`

Seleccione una:

- Verdadero ✔️
- Falso

### Pregunta 5

`HTTP no mantiene estados, por más que tenga conexiones persistentes`

Seleccione una:

- Verdadero ✔️
- Falso
