---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Correo Electronico'
pubDate: 2024-04-13
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/correo.webp'
    alt: 'El logotipo completo de Astro.'
tags: ["linux", "vim", "bash"]
---

- [Ejercicio 1 Protocolos de Envio](#ejercicio-1)
- [Ejercicio 2 Protocolos de Recepción](#ejercicio-2)
- [Ejercicio 3 Usando la VM](#ejercicio-3)
- [Ejercicio 4 Protocolo POP](#ejercicio-4)
- [Ejercicio 5 Protocolo IMAP](#ejercicio-5)
- [Ejercicio 6 IMAP VS POP](#ejercicio-6)
- [Ejercicio 7 Mandar más de un correo por la misma conexión TCP](#ejercicio-7)
- [Ejercicio 8 MSA escuche en un puerto TCP diferente](#ejercicio-8)
- [Ejercicio 9 MTA escuche en un puerto TCP diferente](#ejercicio-9)
- [Ejercicio 10 Integrador HTTP, DNS y MAIL](#ejercicio-10)
- [Ejercicio 11 Usando Swaks](#ejercicio-11)
- [Ejercicio 12 Observe el gráfico a continuación](#ejercicio-12)

---

## Ejercicio 1

El envío de correos electrónicos implica una serie de protocolos que gestionan tanto la comunicación entre el cliente de correo y su servidor, como la transferencia de emails entre servidores de correo. Aquí te explicaré ambos aspectos:

`¿Qué protocolos se utilizan para el envío de mails entre el cliente y su servidor de correo?`

1. **SMTP (Simple Mail Transfer Protocol):**
   - **Uso**: SMTP es el protocolo estándar utilizado para enviar correos desde un cliente hacia un servidor de correo o entre servidores de correo. Sin embargo, para la conexión cliente-servidor, SMTP se usa típicamente sólo para enviar mensajes.
   - **Puertos**: SMTP opera comúnmente a través del puerto 25 para conexiones no seguras y 587 para conexiones seguras que inician con un proceso de cifrado STARTTLS.

2. **IMAP (Internet Message Access Protocol):**
   - **Uso**: IMAP se utiliza para recibir y gestionar correos electrónicos almacenados en el servidor de correo. Permite a los usuarios acceder a sus mensajes de correo electrónico desde múltiples dispositivos y gestionar sus correos directamente en el servidor.
   - **Puertos**: IMAP utiliza comúnmente el puerto 143 para conexiones no seguras, y el puerto 993 para conexiones seguras (IMAP sobre SSL/TLS).

3. **POP3 (Post Office Protocol version 3):**
   - **Uso**: POP3 es otro protocolo utilizado para recibir correos desde el servidor. A diferencia de IMAP, POP3 generalmente descarga los correos del servidor al dispositivo del usuario y luego los elimina del servidor, lo que lo hace más adecuado para situaciones donde solo se accede al correo desde un único dispositivo.
   - **Puertos**: POP3 opera a través del puerto 110 para conexiones no seguras y 995 para conexiones seguras (POP3 sobre SSL/TLS).

`¿Y entre servidores de correo?`

1. **SMTP (Simple Mail Transfer Protocol):**
   - **Uso**: SMTP no solo se utiliza entre clientes y servidores, sino que es el protocolo estándar para el envío de correos entre servidores. Cuando un correo electrónico se envía a través de la red, pasa de un servidor SMTP a otro hasta que alcanza su destino.
   - **Puertos**: En las comunicaciones entre servidores, el puerto 25 es el más utilizado para SMTP. Aunque la conexión inicial puede ser no segura, los servidores modernos utilizan extensiones como STARTTLS para cifrar la comunicación SMTP después del establecimiento inicial de la conexión.

### Seguridad Adicional:

- **TLS (Transport Layer Security):**
   - **Uso**: TLS se usa para cifrar las conexiones entre clientes y servidores de correo, así como entre servidores de correo para asegurar que la información sensible no pueda ser interceptada o alterada durante el tránsito.
   - **Implementación**: TLS puede ser implementado en cualquier etapa de la comunicación de correo para cifrar los datos transmitidos y verificar la autenticidad de los servidores y clientes.

### Resumen:

- Entre **cliente y servidor**, se utilizan SMTP para enviar, IMAP o POP3 para recibir correos, con los puertos mencionados adaptándose a conexiones seguras o no seguras según las necesidades y configuraciones del servidor.
- Entre **servidores de correo**, SMTP es el protocolo dominante para el traspaso de mensajes, con la adición de seguridad a través de TLS para proteger la comunicación.

Estos protocolos son esenciales para asegurar que la comunicación por correo electrónico sea eficiente, confiable y segura, adaptándose a las diversas necesidades y contextos en los que se utilizan.

---

## Ejercicio 2

`¿Qué protocolos se utilizan para la recepción de mails?`

Para la recepción de correos electrónicos, los protocolos más comúnmente utilizados son el **Post Office Protocol version 3 (POP3)** y el **Internet Message Access Protocol (IMAP)**. Ambos tienen características distintivas que los hacen adecuados para diferentes escenarios de uso. A continuación, te detallo cada uno de estos protocolos, sus características y diferencias:

`Enumere y explique características diferencias entre las alternativas posibles.`

### 1. POP3 (Post Office Protocol version 3)

**Características:**
- **Simplicidad**: POP3 es un protocolo simple que permite descargar los correos electrónicos del servidor al cliente de correo local. Una vez que los correos son descargados, generalmente se eliminan del servidor, aunque la configuración puede ajustarse para dejar una copia en el servidor por un tiempo limitado.
- **Conexión y Descarga**: Con POP3, el cliente de correo se conecta al servidor, descarga todos los nuevos mensajes, los almacena localmente y luego se desconecta. Esto hace que POP3 sea ideal para usuarios que prefieren acceder a su correo desde un único dispositivo y necesitan tener acceso offline a sus mensajes.
- **Puertos de Seguridad**: Utiliza el puerto 110 para conexiones no cifradas y el puerto 995 para conexiones cifradas (POP3S, que es POP3 sobre SSL/TLS).

**Ventajas:**
- Manejo simple y directo de los correos.
- Buena elección para usuarios que solo acceden a su correo desde un único dispositivo.
- Acceso offline completo a los mensajes descargados.

**Desventajas:**
- No es adecuado para el acceso desde múltiples dispositivos.
- Menos características para manejar correos directamente en el servidor.
- Una vez descargados y eliminados del servidor, los correos no están disponibles en otros dispositivos.

### 2. IMAP (Internet Message Access Protocol)

**Características:**
- **Flexibilidad**: IMAP permite a los usuarios ver y manipular los mensajes de correo electrónico directamente en el servidor sin descargarlos en su dispositivo local. Esto significa que puedes organizar, eliminar o marcar tus correos y los cambios se reflejarán en todos tus dispositivos.
- **Conexión Constante**: Con IMAP, el cliente de correo mantiene una conexión constante con el servidor. Esto es útil para ver correos en tiempo real y gestionar tu bandeja de entrada de manera efectiva desde varios dispositivos.
- **Puertos de Seguridad**: Opera a través del puerto 143 para conexiones no cifradas y el puerto 993 para conexiones cifradas (IMAPS, que es IMAP sobre SSL/TLS).

**Ventajas:**
- Acceso y gestión de correo en múltiples dispositivos.
- Los cambios realizados en un dispositivo se sincronizan con todos los demás.
- No es necesario descargar grandes cantidades de datos para ver los correos.

**Desventajas:**
- Requiere más ancho de banda y tiempo de conexión porque los correos se mantienen en el servidor.
- Más complejo de implementar y administrar en comparación con POP3.

### Comparación entre POP3 e IMAP

| Característica  | POP3                           | IMAP                                |
|-----------------|--------------------------------|-------------------------------------|
| Almacenamiento  | Localmente en el dispositivo   | En el servidor                      |
| Acceso          | Único dispositivo               | Múltiples dispositivos              |
| Gestión         | Simple y limitada              | Compleja y flexible                 |
| Uso de Red      | Bajo después de la descarga    | Alto, constante                     |
| Sincronización  | No aplica                      | Total entre dispositivos            |

### Conclusión

La elección entre POP3 e IMAP depende de tus necesidades específicas. Si necesitas acceder a tus correos desde múltiples dispositivos y quieres que los cambios se sincronicen entre todos ellos, IMAP es la mejor opción. Si solo accedes desde un dispositivo y prefieres una solución más simple y con acceso offline, POP3 podría ser adecuado. Ambos protocolos pueden usarse con medidas de seguridad como SSL/TLS para proteger la transmisión de datos.

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

### Mini Tutorial Thunderbird (Espero que se entienda)

Ingresamos los datos solicitados

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/7ef1a282-1223-4bfa-8a08-06c16df3c860)

Y para agregar la otra cuenta damos click derecho en la zona negra para poder habilitar el menu

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/073508d8-70aa-481f-9292-d75ad375a475)

Una vez habilitado el menu le damos en la siguiente opción y agregamos el otro email con los datos correspondientes

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f91249ee-2e47-4215-a73c-f60c0e0b84b2)

Una vez que tenemos los dos mails, vamos a la configuración de cada uno, haciendo click derecho y en settings. Nos aseguramos de tener los siguientes datos.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0d33efd6-9a1c-49e9-ace2-008a50f794d0)

Los datos para el otro mail

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/26aceee2-7219-4247-967e-a94521e718a1)

Y por ultimo tenemos que chequear lo siguiente

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fefc0523-c48a-440a-af92-76bca8d122d9)


### Parte a

Verificar el correcto funcionamiento enviando un email desde el cliente de una cuenta a la otra y luego desde la otra responder el mail hacia la primera.

<table><tr><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/989198f8-6e2a-4081-9bcb-189219749dfc)
</td><td>

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f06733b0-797c-4266-bd4a-ebdecfca9346)
</td></tr>
</table>

### Parte b

**Análisis del protocolo SMTP**

`Utilizando Wireshark, capture el tráfico de red contra el servidor de correo mientras desde la cuenta alumnopop@redes.unlp.edu.ar envía un correo a alumnoimap@redes.unlp.edu.ar`

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/85c36772-947f-4c97-8a1a-145e60f67078)

ii. Utilice el filtro SMTP para observar los paquetes del protocolo SMTP en la captura generada y analice el intercambio de dicho protocolo entre el cliente y el servidor para observar los distintos comandos utilizados y su correspondiente respuesta. Ayuda: filtre por protocolo SMTP y sobre alguna de las líneas del intercambio haga click derecho y seleccione Follow TCP Stream...

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e35e52f6-bcd8-42c2-8a83-5e6b5b3ddf36)

```bash
4	5.005634483	172.28.0.90	172.28.0.1	SMTP	126	S: 220 mail.redes.unlp.edu.ar ESMTP Postfix (Lihuen-4.01/GNU)
8	5.009561864	172.28.0.1	172.28.0.90	SMTP	85	C: EHLO [172.28.0.1]
10	5.009691688	172.28.0.90	172.28.0.1	SMTP	225	S: 250-mail.redes.unlp.edu.ar | PIPELINING | SIZE 10240000 | VRFY | ETRN | STARTTLS | ENHANCEDSTATUSCODES | 8BITMIME | DSN | CHUNKING
12	5.012393833	172.28.0.1	172.28.0.90	SMTP	130	C: MAIL FROM:<alumnopop@redes.unlp.edu.ar> BODY=8BITMIME SIZE=444
14	5.012506165	172.28.0.90	172.28.0.1	SMTP	80	S: 250 2.1.0 Ok
16	5.013084972	172.28.0.1	172.28.0.90	SMTP	106	C: RCPT TO:<alumnoimap@redes.unlp.edu.ar>
18	5.013742698	172.28.0.90	172.28.0.1	SMTP	80	S: 250 2.1.5 Ok
20	5.014499789	172.28.0.1	172.28.0.90	SMTP	72	C: DATA
22	5.014592474	172.28.0.90	172.28.0.1	SMTP	103	S: 354 End data with <CR><LF>.<CR><LF>
24	5.015352422	172.28.0.1	172.28.0.90	SMTP	510	C: DATA fragment, 444 bytes
25	5.015675668	172.28.0.1	172.28.0.90	SMTP/IMF	69	from: alumnopop <alumnopop@redes.unlp.edu.ar>, subject: dddd,  (text/plain)
27	5.016902599	172.28.0.90	172.28.0.1	SMTP	102	S: 250 2.0.0 Ok: queued as 7839D60108
29	5.019272721	172.28.0.1	172.28.0.90	SMTP	72	C: QUIT
30	5.019837877	172.28.0.90	172.28.0.1	SMTP	81	S: 221 2.0.0 Bye
```

La secuencia que proporcionaste es un registro detallado de una sesión SMTP entre un cliente (dirección IP 172.28.0.1) y un servidor de correo electrónico (dirección IP 172.28.0.90). SMTP es el protocolo utilizado para enviar correos electrónicos a través de la red. A continuación te explico detalladamente cada paso de la comunicación:

<details><summary>Detalles de los pasos de arriba</summary>

`Paso 4:`
- **Tiempo**: 5.005634483 segundos desde el inicio de la captura.
- **Fuente y Destino**: Del servidor de correo (172.28.0.90) al cliente (172.28.0.1).
- **Protocolo y Longitud**: SMTP con 126 bytes de longitud.
- **Información**: El servidor SMTP responde con un saludo `220`, indicando que está listo para comenzar la comunicación. `ESMTP Postfix` señala que está utilizando Postfix como su servidor de correo y que es capaz de manejar ESMTP (Extended SMTP).

`Paso 8:`
- **Tiempo**: 5.009561864 segundos.
- **Fuente y Destino**: Del cliente al servidor.
- **Información**: El cliente envía el comando `EHLO` seguido de su dirección IP entre corchetes. `EHLO` se utiliza para identificar al cliente ante el servidor e iniciar la conversación SMTP.

`Paso 10:`
- **Tiempo**: 5.009691688 segundos.
- **Información**: El servidor SMTP responde con sus capacidades, incluyendo soporte para `PIPELINING`, límites de tamaño de mensaje (`SIZE`), y varios otros comandos ESMTP.

`Paso 12`
- **Tiempo**: 5.012393833 segundos.
- **Información**: El cliente indica la dirección de correo electrónico del remitente usando el comando `MAIL FROM:` y especifica que el cuerpo del correo permite contenido de 8 bits (`BODY=8BITMIME`) y que tiene un tamaño de 444 bytes.

`Paso 14:`
- **Tiempo**: 5.012506165 segundos.
- **Información**: El servidor confirma que el comando `MAIL FROM` es aceptable con una respuesta `250 2.1.0 Ok`.

`Paso 16:`
- **Tiempo**: 5.013084972 segundos.
- **Información**: El cliente envía el comando `RCPT TO:` para especificar la dirección de correo electrónico del destinatario.

`Paso 18:`
- **Tiempo**: 5.013742698 segundos.
- **Información**: El servidor responde con `250 2.1.5 Ok`, aceptando la dirección del destinatario.

`Paso 20:`
- **Tiempo**: 5.014499789 segundos.
- **Información**: El cliente solicita iniciar la transferencia del cuerpo del mensaje con el comando `DATA`.

`Paso 22:`
- **Tiempo**: 5.014592474 segundos.
- **Información**: El servidor invita al cliente a comenzar la transmisión del cuerpo del mensaje, terminando con `<CR><LF>.<CR><LF>` (retorno de carro y salto de línea, seguidos de un punto y otro retorno de carro y salto de línea).

`Paso 24:`
- **Tiempo**: 5.015352422 segundos.
- **Información**: El cliente comienza a enviar un fragmento del cuerpo del mensaje con una longitud de 444 bytes.

`Paso 25:`
- **Tiempo**: 5.015675668 segundos.
- **Información**: Se observa parte del contenido del mensaje, incluyendo el remitente y el asunto. El tipo MIME (`text/plain`) indica que es texto plano.

`Paso 27:`
- **Tiempo**: 5.016902599 segundos.
- **Información**: El servidor acepta el mensaje y responde con `250 2.0.0 Ok: queued as 7839D60108`, indicando que el mensaje ha sido puesto en cola para su entrega y asignándole un identificador de cola.

`Paso 29:`
- **Tiempo**: 5.019272721 segundos.
- **Información**: El cliente finaliza la sesión con el comando `QUIT`.

`Paso 30:`
- **Tiempo**: 5.019837877 segundos.
- **Información**: El servidor confirma el cierre de la sesión con `221 2.0.0 Bye`.

</details>

En resumen, esta secuencia muestra una transacción SMTP exitosa en la que un cliente envía un correo electrónico a un servidor, el servidor acepta y pone en cola el mensaje para su entrega, y finalmente, se cierra la sesión de comunicación de manera limpia.

### Parte c

Usando el cliente de correo, thunderbird del usuario `alumnopop@redes.unlp.edu.ar` envíe un correo electrónico `alumnoimap@redes.unlp.edu.ar` el cual debe tener: un asunto, datos en el body y una imagen adjunta.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e4e2a53b-e6b1-4c89-b688-e5f56d620a13)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/25f67427-5f62-4b73-8eb0-e443a2769016)

`iVerifique los fuentes del correo recibido para entender como se utiliza el header “Content-Type: multipart/mixed“ para poder realizar el envío de distintos archivos adjuntos.`

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/014c6134-43c3-4cc0-bb2d-0be735e8afa0)



```bash
Return-Path: <alumnopop@redes.unlp.edu.ar>
X-Original-To: alumnoimap@redes.unlp.edu.ar
Delivered-To: alumnoimap@redes.unlp.edu.ar
Received: from [172.28.0.1] (unknown [172.28.0.1])
	by mail.redes.unlp.edu.ar (Postfix) with ESMTP id 17D0960192
	for <alumnoimap@redes.unlp.edu.ar>; Sun, 14 Apr 2024 23:36:32 +0000 (UTC)
Content-Type: multipart/alternative;
 boundary="------------Fju9GPlZ4P3UCqeMMOEz0o7L"
Message-ID: <2e205777-f17e-ee1a-f34a-847b156e847e@redes.unlp.edu.ar>
Date: Sun, 14 Apr 2024 20:36:26 -0300
MIME-Version: 1.0
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101
 Thunderbird/91.12.0
Content-Language: en-US
To: alumnoimap@redes.unlp.edu.ar
From: alumnopop <alumnopop@redes.unlp.edu.ar>
Subject: Ejercicio 3c

This is a multi-part message in MIME format.
--------------Fju9GPlZ4P3UCqeMMOEz0o7L
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 7bit

Pruebas de textovegetauwu

--------------Fju9GPlZ4P3UCqeMMOEz0o7L
Content-Type: multipart/related;
 boundary="------------BTmIsRQtJHYCkUO0b2F4ssOE"

--------------BTmIsRQtJHYCkUO0b2F4ssOE
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: 7bit

<html>
  <head>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  </head>
  <body>
    <p>Pruebas de texto<img moz-do-not-send="false"
        src="cid:part1.vR1R0n7i.cHRUhuyT@redes.unlp.edu.ar"
        alt="vegetauwu" width="162" height="312"><br>
    </p>
  </body>
</html>
--------------BTmIsRQtJHYCkUO0b2F4ssOE
Content-Type: image/jpeg; name="vegeta.jpeg"
Content-Disposition: inline; filename="vegeta.jpeg"
Content-Id: <part1.vR1R0n7i.cHRUhuyT@redes.unlp.edu.ar>
Content-Transfer-Encoding: base64

/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhMRExIWFhUXFhUbFxgSFRcaFxcWFhcX
```

El mensaje que has proporcionado es un correo electrónico formateado usando MIME (Multipurpose Internet Mail Extensions), que permite incluir contenido multimedia en los correos electrónicos, como texto, HTML y archivos adjuntos (como imágenes).

Aquí hay un desglose detallado de las partes relevantes del encabezado del correo y la estructura del mensaje que utiliza `Content-Type: multipart/alternative` y `Content-Type: multipart/related`:

### Encabezados MIME Generales
- **`Content-Type: multipart/alternative;`**: Indica que hay varias versiones del cuerpo del mensaje (como texto plano y HTML), y que los clientes de correo pueden elegir cuál mostrar. El atributo `boundary` define el delimitador que separa las distintas partes del mensaje.

### Partes del Mensaje
- **Parte de Texto Plano**:
  - **`Content-Type: text/plain; charset=UTF-8; format=flowed`**: Define que esta parte del mensaje es en texto plano con codificación UTF-8 y que el texto fluye (es decir, no tiene un ancho fijo de línea).
  - **`Content-Transfer-Encoding: 7bit`**: Indica que el cuerpo del mensaje está codificado en 7 bits y no requiere codificación para caracteres especiales.

- **Parte HTML**:
  - **`Content-Type: multipart/related;`**: Utilizado para mensajes HTML que incluyen recursos vinculados como imágenes; estas se incrustan en el mensaje relacionando las partes mediante el uso de identificadores únicos (`Content-Id`).
  - Dentro de esta sección hay dos partes:
    - **HTML del Mensaje**: La parte que es HTML, que incluye el contenido visual del mensaje y puede contener enlaces a recursos incrustados (como imágenes).
    - **La Imagen Incrustada**:
      - **`Content-Type: image/jpeg; name="vegeta.jpeg"`**: Esta parte es una imagen JPEG adjunta al mensaje.
      - **`Content-Disposition: inline; filename="vegeta.jpeg"`**: La disposición `inline` indica que la imagen se muestra dentro del flujo del mensaje HTML, y `filename` es el nombre del archivo adjunto.
      - **`Content-Id`**: Este es un identificador único para la parte del mensaje, que permite al HTML referirse a esta imagen usando `cid:` (Content ID).
      - **`Content-Transfer-Encoding: base64`**: La imagen está codificada en base64, que es un método común para codificar datos binarios en mensajes de correo electrónico.

### Extracción de la Imagen Adjunta
Para extraer la imagen adjunta del cuerpo del mensaje, deberías copiar todo el texto que sigue a `Content-Transfer-Encoding: base64` hasta el siguiente delimitador `boundary`. Luego, utiliza una herramienta de decodificación de base64 para convertir este texto en un archivo de imagen. La mayoría de los clientes de correo hacen esto automáticamente y te permiten descargar o guardar la imagen con solo hacer clic en ella.


`ii. Extraiga la imagen adjunta del mismo modo que lo hace el cliente de correo a partir de los fuentes del mensaje.`


### Salida del Wireshark

```bash
2206	207.405826400	172.28.0.90	172.28.0.1	SMTP	81	S: 221 2.0.0 Bye
2204	207.395353495	172.28.0.90	172.28.0.1	SMTP	102	S: 250 2.0.0 Ok: queued as 17D0960192
2197	207.389918493	172.28.0.90	172.28.0.1	SMTP	103	S: 354 End data with <CR><LF>.<CR><LF>
2193	207.388964035	172.28.0.90	172.28.0.1	SMTP	80	S: 250 2.1.5 Ok
2189	207.380921813	172.28.0.90	172.28.0.1	SMTP	80	S: 250 2.1.0 Ok
2185	207.373677972	172.28.0.90	172.28.0.1	SMTP	225	S: 250-mail.redes.unlp.edu.ar | PIPELINING | SIZE 10240000 | VRFY | ETRN | STARTTLS | ENHANCEDSTATUSCODES | 8BITMIME | DSN | CHUNKING
2181	207.372299550	172.28.0.90	172.28.0.1	SMTP	126	S: 220 mail.redes.unlp.edu.ar ESMTP Postfix (Lihuen-4.01/GNU)
2205	207.405560036	172.28.0.1	172.28.0.90	SMTP	72	C: QUIT
2202	207.392380030	172.28.0.1	172.28.0.90	SMTP/IMF	69	from: alumnopop <alumnopop@redes.unlp.edu.ar>, subject: Ejercicio 3c,  (text/plain) (text/html) (image/jpeg)
2200	207.391704524	172.28.0.1	172.28.0.90	SMTP	4183	C: DATA fragment, 4117 bytes
2198	207.391660752	172.28.0.1	172.28.0.90	SMTP	7306	C: DATA fragment, 7240 bytes
2195	207.389793068	172.28.0.1	172.28.0.90	SMTP	72	C: DATA
2191	207.384549094	172.28.0.1	172.28.0.90	SMTP	106	C: RCPT TO:<alumnoimap@redes.unlp.edu.ar>
2187	207.377276018	172.28.0.1	172.28.0.90	SMTP	132	C: MAIL FROM:<alumnopop@redes.unlp.edu.ar> BODY=8BITMIME SIZE=11357
2183	207.373566919	172.28.0.1	172.28.0.90	SMTP	85	C: EHLO [172.28.0.1]
```

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fa674354-6efe-4ffd-a3ee-379414467fa2)

Una vez que seleccionamos nuetra imagen codigicada, buscamos la seccion de base64

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/45876e0f-fed6-4eb7-924f-77435711c555)

Y terminamos de copiar aca

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/f4aef23a-291b-444d-aee4-94afc6a0aac3)

Una vez que copiamos eso, ejecutamos el siguiente comando

```bash
echo 'base64_data' | base64 -d > output_image.jpeg
```

Si queres dejarlo en el escritorio, hacete un ls y despues un cd Desktop y lo ejecutas desde ahi

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/33dc4ab9-f952-401e-9e23-6f6b332313e3)

> ACORDATE DE PEGAR LO QUE SACAMOS DE LOS PAQUETES :D

---

## Ejercicio 4


---

## Ejercicio 5


---

## Ejercicio 6


---

## Ejercicio 7


---

## Ejercicio 8


---

## Ejercicio 9


---

## Ejercicio 10


---

## Ejercicio 11


---

## Ejercicio 12


---
