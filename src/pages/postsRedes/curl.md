---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Rusheando Curl'
pubDate: 2022-10-04
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/curl.webp'
    alt: 'El logotipo completo de Astro.'
tags: ["linux", "vim", "bash"]

# url: '/posts/vim.jpg'
#https://docs.astro.build/assets/arc.webp
---

- [curl -O www.redes.unlp.edu.ar/restringido/index.php](#descarga-el-recurso-de-la-url)
- [curl -o file.html  www.redes.unlp.edu.ar/](#descargamos-la-pagina-y-le-asignamos-el-nombre-filehtml)
- [curl -I  www.redes.unlp.edu.ar/](#realiza-una-solicitud-http-head)
- [curl -H "Authorization: Basic cmVkZXM6UllD" www.redes.unlp.edu.ar/restringido/index.php](#añade-un-encabezado-adicional-de-autentificación)
- [curl -I -L http://unlp.edu.ar](#sigue-redireccionamientos-http)
- [curl -u redes:RYC www.redes.unlp.edu.ar/restringido/index.php](#para-autenticación-básica-http)
- [curl -X POST http://www.redes.unlp.edu.ar/http/metodos-lectura-valores.php](#post-usando-el-curl)
- [curl -v -I http://www.redes.unlp.edu.ar](#para-obtener-solo-los-encabezados-head-request-de-una-respuesta-de-manera-detallada-verbose)
- [curl -s http://www.redes.unlp.edu.ar1](#modo-silencioso)

---

#### Descarga el Recurso de la URL

```bash
curl -O www.redes.unlp.edu.ar/restringido/index.php
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/33dd8558-6d5e-4b71-a9ba-58d7233a875e)


#### Descargamos La Pagina y le asignamos el nombre `file.html` 

```bash
curl -o file.html  www.redes.unlp.edu.ar/
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/12d69b85-69b5-49ab-867d-1795edfe19ee)


#### Realiza una solicitud HTTP HEAD

```bash
curl -I  www.redes.unlp.edu.ar/
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/dcddfe6d-cb88-49af-aec7-3310121f6cf0)

#### Añade un encabezado adicional de autentificación

```bash
curl -H "Authorization: Basic cmVkZXM6UllD" www.redes.unlp.edu.ar/restringido/index.php
```

- `User-Agent: Mozilla/5.0` Modifica el agente de usuario para simular solicitudes desde diferentes navegadores o dispositivos.
- `Cache-Control: no-cache` Puedes controlar o probar cómo una página web responde a diferentes directivas de caché.
- `Accept: application/json`Especificar qué tipos de contenido estás dispuesto a recibir. Por ejemplo, solicitar específicamente contenido en formato JSON.
- `Accept-Language: es`Solicitar una página en un idioma específico.
- `Cookie: name=value`Enviar cookies específicas en la solicitud, lo cual puede ser necesario para acceder a contenido que requiere de sesión o preferencias de usuario.
- `Referer: http://www.otroejemplo.com`Simular el origen de una solicitud mediante el encabezado Referer. Esto puede ser útil para pruebas o para acceder a recursos que requieren un referer específico.
- `Accept-Encoding: gzip, deflate`Indicar al servidor que puedes recibir contenido codificado (por ejemplo, comprimido con gzip), lo cual puede mejorar la eficiencia de la transferencia de datos.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/3c92adbe-ebb9-44f0-8b53-8aa3ae20ee8e)


#### Sigue redireccionamientos HTTP.

`curl` no sigue redireccionamientos por defecto.

```bash
curl -I -L http://unlp.edu.ar
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/2698e7ba-cbec-4cd4-9da7-5c1e8ac172d9)

#### Para autenticación básica HTTP.

usuario:contraseña: `redes:RYC`

```bash
curl -u redes:RYC www.redes.unlp.edu.ar/restringido/index.php
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/de6534e4-8ece-4d5d-ad27-e8598bd8930e)

---

#### Post usando el curl

Mira, antes de poder hacer un post (por lo que tengo entendido) necesitas mirar el formulario y ver que nombre tienen los campos del mismo para poder insertar los datos.

```bash
curl http://www.redes.unlp.edu.ar/http/metodo-post.html
```

Si te pinta se lo podes pasar a chat-gpt el resultado y seguro te devuelve un comando como el siguiente


```bash
curl -X POST http://www.redes.unlp.edu.ar/http/metodos-lectura-valores.php \
-d "form_nombre=Juan" \
-d "form_apellido=Perez" \
-d "form_mail=juan.perez@email.com" \
-d "form_sexo=sexo_masc" \
-d "form_pass=contraseña123" \
-d "form_confirma_mail=on"
```

- La opción `-d` se usa para enviar datos. Si tienes múltiples campos, puedes repetir `-d` para cada par clave-valor.
- Para campos de texto (`input type="text"`), simplemente envía el texto que deseas ingresar.
- Para botones de radio (`input type="radio"`), envía el valor del botón que deseas que esté seleccionado.
- Para checkboxes (`input type="checkbox"`), solo necesitas incluir el campo si deseas que esté marcado, generalmente asignándole el valor `on`. Si no lo incluyes, es como si no estuviera marcado.
- La contraseña debe ser enviada como texto plano en este tipo de solicitud, lo cual puede ser un riesgo de seguridad si la conexión no está cifrada. Asegúrate de que estás usando HTTPS para proteger la información sensible.
- Este comando asume que todos los campos son necesarios. Si alguno es opcional, puedes omitirlo según lo que requiera el formulario.


![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/6cf3b5eb-2cbe-4e52-8ccd-c1ae7bca44c4)



Una vez que lo realizamos lo podemos chequear de la siguiente forma:


```bash
curl -o file2.html -X POST http://www.redes.unlp.edu.ar/http/metodos-lectura-valores.php \
-d "form_nombre=Juan" \
-d "form_apellido=Perez" \
-d "form_mail=juan.perez@email.com" \
-d "form_sexo=sexo_masc" \
-d "form_pass=contraseña123" \
-d "form_confirma_mail=on"
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/bd7a61f9-cf46-4b4e-bd07-68ac1761185d)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/15a4c967-beb1-4ffc-926a-3dd681e1ddc9)


---

#### Para obtener solo los encabezados (HEAD request) de una respuesta de manera detallada (verbose)

```bash
curl -v -I http://www.redes.unlp.edu.ar
```
Este comando es útil para inspeccionar encabezados de respuesta como `Content-Type`, `Content-Length`, Server, Last-Modified y cualquier cookie o política de seguridad aplicada.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/a9d5c9ce-2736-47b7-93e5-d1256016eadc)


El comando `curl -v -I http://www.redes.unlp.edu.ar` que ejecutaste realiza una solicitud HTTP `HEAD` a la URL especificada y muestra una salida detallada (verbose) del proceso. Aquí te explico cada parte de la salida:

### Inicio de la Conexión

- **`Trying 172.28.0.50:80...`**: `curl` intenta establecer una conexión TCP al servidor en la dirección IP `172.28.0.50` en el puerto `80`, que es el puerto estándar para el protocolo HTTP.

- **`Connected to www.redes.unlp.edu.ar (172.28.0.50) port 80 (#0)`**: La conexión TCP ha sido establecida exitosamente al servidor en la dirección IP y puerto especificados.

### Envío de la Solicitud HEAD

- **`HEAD / HTTP/1.1`**: `curl` envía una solicitud `HEAD` al servidor. Una solicitud `HEAD` es similar a `GET`, pero el servidor devuelve solo los encabezados y no el cuerpo del documento. Esto es útil para obtener metadatos sin descargar todo el contenido.

- **`Host: www.redes.unlp.edu.ar`**: Especifica el host al que se está haciendo la solicitud. Es necesario para servidores que alojan múltiples dominios (hosting virtual).

- **`User-Agent: curl/7.74.0`**: Identifica el agente del usuario que realiza la solicitud. En este caso, es `curl` con su versión.

- **`Accept: */*`**: Indica que el cliente aceptará cualquier tipo de contenido como respuesta.

### Respuesta del Servidor

- **`HTTP/1.1 200 OK`**: El servidor responde con un código de estado `200`, lo que indica que la solicitud ha sido procesada con éxito.

- **`Date: Sun, 31 Mar 2024 17:07:45 GMT`**: La fecha y hora en que la respuesta fue enviada.

- **`Server: Apache/2.4.56 (Unix)`**: Información sobre el software del servidor que está manejando la solicitud.

- **`Last-Modified: Sun, 19 Mar 2023 19:04:46 GMT`**: La última vez que el recurso solicitado fue modificado.

- **`ETag: "1322-5f7457bd64f80"`**: Un identificador único asignado al contenido actual del recurso, que puede ser utilizado para futuras solicitudes condicionales (cache validation).

- **`Accept-Ranges: bytes`**: Indica que el servidor acepta solicitudes de rangos de bytes, lo cual es útil para reanudar descargas interrumpidas o para descargar partes de un contenido.

- **`Content-Length: 4898`**: El tamaño en bytes del cuerpo del documento que habría sido enviado en una solicitud `GET`.

- **`Content-Type: text/html`**: El tipo de contenido que habría sido devuelto, en este caso `text/html`.

### Finalización de la Conexión

- **`* Connection #0 to host www.redes.unlp.edu.ar left intact`**: Indica que la conexión con el servidor se ha dejado intacta después de la respuesta. En el caso de las solicitudes `HEAD`, como no hay cuerpo de respuesta, la conexión se puede reutilizar para futuras solicitudes.

Este desglose te muestra cómo `curl` establece una conexión, envía una solicitud, recibe y muestra la respuesta del servidor, proporcionando una visión detallada del intercambio de datos entre el cliente y el servidor web.

---

#### Modo Silencioso

```bash
curl -s http://www.redes.unlp.edu.ar1
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5a2bb50e-f029-4a22-94f1-b5302e51a04a)

El parámetro `-s` en `curl` se utiliza para activar el modo "silencioso" o "silencio". Cuando se utiliza este parámetro, `curl` no muestra el indicador de progreso ni los errores que normalmente se imprimirían en la terminal durante la ejecución del comando. Esto hace que `-s` sea especialmente útil en scripts o cuando deseas capturar la salida de `curl` sin incluir información adicional que normalmente se muestra.

Aquí tienes un ejemplo básico de cómo se vería un comando `curl` sin el parámetro `-s`:

```bash
curl http://www.ejemplo.com
```

Al ejecutar este comando, dependiendo de la configuración y el contexto, `curl` podría mostrar el progreso de la descarga, lo cual incluiría información sobre la cantidad de datos transferidos y la velocidad de transferencia. Si hubiera algún problema con la solicitud, como una URL no válida o problemas de conexión, `curl` también mostraría mensajes de error en la salida estándar.

Ahora, veamos cómo se utilizaría el parámetro `-s`:

```bash
curl -s http://www.ejemplo.com
```

Al agregar `-s`, `curl` ejecuta la solicitud sin mostrar ningún mensaje de progreso o error. La única salida en la terminal será el contenido obtenido de `http://www.ejemplo.com`, si la solicitud fue exitosa.

### Usos adicionales y combinaciones

A menudo, el parámetro `-s` se combina con otros para lograr comportamientos específicos:

- **-S** (`--show-error`): Muestra el mensaje de error en caso de fallo, incluso en modo silencioso. Es útil cuando quieres un entorno silencioso pero aún necesitas capturar errores.

  ```bash
  curl -s -S http://www.ejemplo.com
  ```

- **-o** (`--output`): Especifica un archivo donde guardar la salida en lugar de imprimirla en la terminal.

  ```bash
  curl -s -o ejemplo.html http://www.ejemplo.com
  ```

  Aquí, la combinación de `-s` y `-o` significa que `curl` no mostrará progreso ni errores (salvo que también uses `-S`), y guardará el contenido de la página en `ejemplo.html`.

El modo silencioso es especialmente valioso en scripts donde solo te interesa el resultado de la operación `curl` y deseas evitar salidas innecesarias que podrían obstruir el flujo normal o el procesamiento de la salida. También es útil cuando se integra `curl` en aplicaciones que invocan comandos externos y donde el manejo de la salida se realiza a través de la captura y análisis de la misma por la aplicación.

---

### Ejercicio de Parcial

```bash
curl -X ?? www.redes.unlp.edu.ar/??
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

### a. ¿Qué versión de HTTP podría estar utilizando el servidor?
La versión de HTTP que el servidor está utilizando no se especifica directamente en el fragmento que proporcionaste, pero dado que la respuesta incluye un código de estado HTTP sin una versión específica en la línea de estado (`< HTTP/?? 200 OK`), podemos inferir que se omitió por simplicidad en el ejemplo. Sin embargo, podemos hacer una suposición educada de que se trata de HTTP/1.1, ya que es la versión más comúnmente utilizada que soporta encabezados como "Host" y un comportamiento de conexión como el descrito. HTTP/2 cambiaría significativamente la forma en que se formatea la respuesta (es decir, es binario), y la solicitud no parece estar utilizando la sintaxis específica de HTTP/2.

### b. ¿Qué método está utilizando? Dicho método, ¿retorna el recurso completo solicitado?
El método que se está utilizando es `HEAD`, como se indica en la primera línea de la solicitud (`HEAD /metodos/ HTTP/??`). El método `HEAD` solicita los encabezados de respuesta que se enviarían para una solicitud `GET` al mismo recurso, pero sin incluir el cuerpo del recurso en la respuesta. Por lo tanto, no, el método `HEAD` no retorna el recurso completo solicitado, solo los metadatos asociados con el recurso.

### c. ¿Cuál es el recurso solicitado?
El recurso solicitado parece ser `/metodos/`, como se indica en la línea de solicitud. Hay una pequeña confusión en la forma en que se formatea la solicitud (`/metodos/ HTTP/??`), lo cual sugiere un error tipográfico o una omisión intencional de la versión de HTTP. Normalmente, se esperaría algo como `HEAD /metodos/ HTTP/1.1`.

### d. ¿El método funcionó correctamente?
Sí, el método funcionó correctamente. La respuesta del servidor indica un código de estado `200 OK`, lo que significa que la solicitud se procesó con éxito y los metadatos del recurso están siendo devueltos en los encabezados.

### e. Si la solicitud hubiera llevado un encabezado que diga: If-Modified-Since: Sat, 20 Jan 2018 13:02:41 GMT ¿Cuál habría sido la respuesta del servidor web? ¿Qué habría hecho el navegador en este caso?
Si la solicitud incluyera el encabezado `If-Modified-Since: Sat, 20 Jan 2018 13:02:41 GMT`, y el recurso no se ha modificado desde esa fecha y hora (lo cual es cierto basado en el encabezado `Last-Modified` de la respuesta), el servidor habría respondido con un código de estado `304 Not Modified`. Esto indica al cliente que la versión del recurso que tiene en caché sigue siendo válida y puede ser reutilizada.

En este caso, el navegador no descargaría el recurso nuevamente; en su lugar, utilizaría la versión que ya tiene en su caché, mejorando la eficiencia al reducir la necesidad de transferir datos innecesariamente.