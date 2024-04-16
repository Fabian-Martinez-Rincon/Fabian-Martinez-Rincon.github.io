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

**Análisis del protocolo POP**

### Parte a

Utilizando Wireshark, capture el tráfico de red contra el servidor de correo mientras desde la cuenta alumnoimap@redes.unlp.edu.ar le envía una correo a alumnopop@redes.unlp.edu.ar y mientras alumnopop@redes.unlp.edu.ar recepciona dicho correo.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/241cee54-1ac9-49e5-978a-4c0562941a19)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e9d9817b-167d-4a17-b139-557d5e597bdf)

### Parte b

Utilice el filtro POP para observar los paquetes del protocolo POP en la captura generada y analice el intercambio de dicho protocolo entre el cliente y el servidor para observar los distintos comandos utilizados y su correspondiente respuesta.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e07d258c-8488-4dc9-b1e1-84e3f18a25bc)

#### Salida

```bash
24	15.815362054	172.28.0.90	172.28.0.1	POP	86	S: +OK Dovecot ready.
26	15.815692388	172.28.0.1	172.28.0.90	POP	72	C: CAPA
28	15.815751368	172.28.0.90	172.28.0.1	POP	155	S: +OK
30	15.815864015	172.28.0.1	172.28.0.90	POP	78	C: AUTH PLAIN
32	15.816150185	172.28.0.90	172.28.0.1	POP/IMF	70	+   
34	15.816293615	172.28.0.1	172.28.0.90	POP	124	C: AGFsdW1ub3BvcEByZWRlcy51bmxwLmVkdS5hcgBhbHVtbm9wb3BwYXNz
36	15.820537730	172.28.0.90	172.28.0.1	POP	82	S: +OK Logged in.
38	15.821232208	172.28.0.1	172.28.0.90	POP	72	C: STAT
40	15.821305252	172.28.0.90	172.28.0.1	POP	79	S: +OK 4 77565
42	15.822101933	172.28.0.1	172.28.0.90	POP	72	C: LIST
44	15.822222780	172.28.0.90	172.28.0.1	POP	117	S: +OK 4 messages:
46	15.822359564	172.28.0.1	172.28.0.90	POP	72	C: UIDL
48	15.822493963	172.28.0.90	172.28.0.1	POP	154	S: +OK
50	15.823820392	172.28.0.1	172.28.0.90	POP	72	C: QUIT
52	15.824108415	172.28.0.90	172.28.0.1	POP	84	S: +OK Logging out.
285	74.349487529	172.28.0.90	172.28.0.1	POP	86	S: +OK Dovecot ready.
287	74.350007804	172.28.0.1	172.28.0.90	POP	72	C: CAPA
289	74.350128832	172.28.0.90	172.28.0.1	POP	155	S: +OK
291	74.350386703	172.28.0.1	172.28.0.90	POP	78	C: AUTH PLAIN
293	74.350693542	172.28.0.90	172.28.0.1	POP/IMF	70	+   
295	74.350834556	172.28.0.1	172.28.0.90	POP	124	C: AGFsdW1ub3BvcEByZWRlcy51bmxwLmVkdS5hcgBhbHVtbm9wb3BwYXNz
297	74.354636341	172.28.0.90	172.28.0.1	POP	82	S: +OK Logged in.
299	74.355850493	172.28.0.1	172.28.0.90	POP	72	C: STAT
301	74.358377472	172.28.0.90	172.28.0.1	POP	79	S: +OK 5 91538
302	74.359257624	172.28.0.1	172.28.0.90	POP	72	C: LIST
304	74.359439633	172.28.0.90	172.28.0.1	POP	126	S: +OK 5 messages:
305	74.359647918	172.28.0.1	172.28.0.90	POP	72	C: UIDL
307	74.359889160	172.28.0.90	172.28.0.1	POP	174	S: +OK
308	74.360192871	172.28.0.1	172.28.0.90	POP	74	C: RETR 5
310	74.360561095	172.28.0.90	172.28.0.1	POP	2962	S: +OK 13973 octets
312	74.360688337	172.28.0.90	172.28.0.1	POP	4410	S: DATA fragment, 4344 bytes
314	74.360753542	172.28.0.90	172.28.0.1	POP	4410	S: DATA fragment, 4344 bytes
316	74.360817283	172.28.0.90	172.28.0.1	POP	1514	S: DATA fragment, 1448 bytes
317	74.360846553	172.28.0.90	172.28.0.1	POP	1028	S: DATA fragment, 962 bytes
319	74.368747868	172.28.0.1	172.28.0.90	POP	72	C: QUIT
321	74.370858388	172.28.0.90	172.28.0.1	POP	84	S: +OK Logging out.
```

El texto que has proporcionado parece ser un registro de una sesión de captura de tráfico utilizando el protocolo POP (Post Office Protocol), que se usa para recuperar correos electrónicos de un servidor de correo electrónico. A continuación, explicaré cada línea en detalle:

- `S: +OK Dovecot ready.`: El servidor (S) responde con "OK", lo que significa que está listo para comenzar la comunicación. Dovecot es el nombre del servidor de correo.

- `C: CAPA`: El cliente (C) envía el comando "CAPA" para solicitar las capacidades del servidor, como soporte para comandos adicionales o características de seguridad.

- `S: +OK`: El servidor responde positivamente, indicando que está listo para listar sus capacidades.

- `C: AUTH PLAIN`: El cliente solicita autenticarse con el método "PLAIN", que envía el nombre de usuario y la contraseña en texto claro.

- `S: +`: El servidor indica que está listo para recibir los datos de autenticación.

- `C: AGFsd...`: El cliente envía los datos de autenticación codificados en Base64. La cadena de texto después de "C:" es el nombre de usuario y la contraseña en Base64.

- `S: +OK Logged in.`: El servidor responde que la autenticación fue exitosa y que el usuario ha iniciado sesión.

- `C: STAT`: El cliente envía el comando "STAT" para solicitar información sobre la cantidad de mensajes y el tamaño total del buzón.

- `S: +OK 4 77565`: El servidor responde que hay 4 mensajes con un tamaño total de 77565 bytes en el buzón.

- `C: LIST`: El cliente solicita una lista de los mensajes y sus tamaños.

- `S: +OK 4 messages:`: El servidor responde con la cantidad de mensajes.

- `C: UIDL`: El cliente solicita una lista de los mensajes y sus identificadores únicos.

- `S: +OK`: El servidor responde positivamente.

- `C: QUIT`: El cliente envía el comando "QUIT" para cerrar la conexión.

- `S: +OK Logging out.`: El servidor confirma que está cerrando la conexión.

Las líneas `302` a `316` muestran la recuperación de un mensaje específico (en este caso, el mensaje número 5) con el comando "RETR", seguido de la respuesta del servidor que incluye el mensaje real (datos del mensaje) fragmentado en varias partes, indicando que está transmitiendo el mensaje que tiene un tamaño de 13973 bytes.

El tráfico posterior de `POP` muestra que el cliente sigue interactuando con el servidor para recuperar y gestionar los mensajes en el buzón. Finalmente, el cliente envía de nuevo el comando "QUIT" para cerrar la sesión (`C: QUIT`), y el servidor responde que la sesión está cerrando (`S: +OK Logging out.`).

---

## Ejercicio 5


**Análisis del protocolo IMAP**

#### Parte a

Utilizando Wireshark, capture el tráfico de red contra el servidor de correo mientras desde la cuenta alumnopop@redes.unlp.edu.ar le envía una correo a alumnoimap@redes.unlp.edu.ar y mientras alumnoimap@redes.unlp.edu.ar recepciona dicho correo.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/5b050f2a-bed2-4199-80ae-dbf6e8b2bdc3)

#### Parte b

Utilice el filtro IMAP para observar los paquetes del protocolo IMAP en la captura generada y analice el intercambio de dicho protocolo entre el cliente y el servidor para observar los distintos comandos utilizados y su correspondiente respuesta.

```bash
3	0.000226978	172.28.0.90	172.28.0.1	IMAP	121	Response: 68 OK Idle completed (68.782 + 68.782 + 68.781 secs).
5	0.000740257	172.28.0.1	172.28.0.90	IMAP	75	Request: 69 noop
7	0.000952501	172.28.0.90	172.28.0.1	IMAP	110	Response: 69 OK NOOP completed (0.001 + 0.000 secs).
9	0.001157266	172.28.0.1	172.28.0.90	IMAP	92	Request: 70 UID fetch 8:* (FLAGS)
11	0.001387314	172.28.0.90	172.28.0.1	IMAP	154	Response: 70 OK Fetch completed (0.001 + 0.000 secs).
13	0.002704380	172.28.0.1	172.28.0.90	IMAP	75	Request: 71 IDLE
15	0.002941722	172.28.0.90	172.28.0.1	IMAP	76	Response: + idling
60	15.722543546	172.28.0.90	172.28.0.1	IMAP	90	Response: * 6 EXISTS
62	15.723339767	172.28.0.1	172.28.0.90	IMAP	72	Request: DONE
64	15.723507614	172.28.0.90	172.28.0.1	IMAP	121	Response: 71 OK Idle completed (15.721 + 15.718 + 15.720 secs).
66	15.723901320	172.28.0.1	172.28.0.90	IMAP	75	Request: 72 noop
68	15.724435617	172.28.0.90	172.28.0.1	IMAP	110	Response: 72 OK NOOP completed (0.001 + 0.000 secs).
70	15.724680116	172.28.0.1	172.28.0.90	IMAP	92	Request: 73 UID fetch 8:* (FLAGS)
72	15.725029146	172.28.0.90	172.28.0.1	IMAP	146	Response: 73 OK Fetch completed (0.001 + 0.000 secs).
74	15.725698775	172.28.0.1	172.28.0.90	IMAP	248	Request: 74 UID fetch 8 (UID RFC822.SIZE FLAGS BODY.PEEK[HEADER.FIELDS (From To Cc Bcc Subject Date Message-ID Priority X-Priority References Newsgroups In-Reply-To Content-Type Reply-To)])
76	15.727543896	172.28.0.90	172.28.0.1	IMAP/IMF	585	from: alumnopop <alumnopop@redes.unlp.edu.ar>, subject: hola cabron,  (text/plain)
78	15.759640063	172.28.0.1	172.28.0.90	IMAP	112	Request: 75 UID fetch 8 (UID RFC822.SIZE BODY.PEEK[])
80	15.760120544	172.28.0.90	172.28.0.1	IMAP/IMF	935	from: alumnopop <alumnopop@redes.unlp.edu.ar>, subject: hola cabron,  (text/plain)
82	15.777713054	172.28.0.1	172.28.0.90	IMAP	178	Request: 76 UID fetch 8 (UID BODY.PEEK[HEADER.FIELDS (Content-Type Content-Transfer-Encoding)] BODY.PEEK[TEXT]<0.2048>)
84	15.778617088	172.28.0.90	172.28.0.1	IMAP/IMF	322	(text/plain)
86	15.789742688	172.28.0.1	172.28.0.90	IMAP	75	Request: 77 IDLE
88	15.790254483	172.28.0.90	172.28.0.1	IMAP	76	Response: + idling
124	50.826116147	172.28.0.90	172.28.0.1	IMAP	83	Response: * OK Still here
126	50.827134065	172.28.0.1	172.28.0.90	IMAP	72	Request: DONE
128	50.827301220	172.28.0.90	172.28.0.1	IMAP	121	Response: 77 OK Idle completed (35.038 + 35.037 + 35.037 secs).
130	50.827765081	172.28.0.1	172.28.0.90	IMAP	75	Request: 78 noop
132	50.828498371	172.28.0.90	172.28.0.1	IMAP	110	Response: 78 OK NOOP completed (0.001 + 0.000 secs).
134	50.828829187	172.28.0.1	172.28.0.90	IMAP	92	Request: 79 UID fetch 9:* (FLAGS)
136	50.829174468	172.28.0.90	172.28.0.1	IMAP	146	Response: 79 OK Fetch completed (0.001 + 0.000 secs).
138	50.832179591	172.28.0.1	172.28.0.90	IMAP	75	Request: 80 IDLE
140	50.832654708	172.28.0.90	172.28.0.1	IMAP	76	Response: + idling
```

Esta salida de Wireshark muestra una serie de comunicaciones entre un cliente y un servidor utilizando el protocolo IMAP (Internet Message Access Protocol), que es utilizado para acceder y manejar correos electrónicos de forma remota en un servidor. Veamos lo que está ocurriendo en cada línea:

1. **IDLE y NOOP:**
   - El comando `IDLE` es utilizado por el cliente para notificar al servidor que va a estar inactivo y espera notificaciones de nuevos mensajes o cambios en el buzón.
   - `NOOP` es un comando que se utiliza para mantener la conexión abierta sin realizar ninguna acción.

2. **UID FETCH:**
   - El cliente utiliza el comando `UID fetch 8:* (FLAGS)` para solicitar información sobre los mensajes desde el número 8 hasta el último del buzón, específicamente, sus marcadores (FLAGS).

3. **FETCH Response:**
   - El servidor responde a los comandos `FETCH`, indicando que la acción solicitada se ha completado con éxito.

4. **FETCH de Encabezados y Cuerpo del Mensaje:**
   - El cliente realiza un `FETCH` detallado para el mensaje número 8, solicitando diferentes campos de los encabezados (`HEADER.FIELDS`) y un vistazo al cuerpo del mensaje (`BODY.PEEK[]`).

5. **Texto del Mensaje y Continuación del IDLE:**
   - El servidor responde con el contenido del mensaje número 8, mostrando el texto en formato MIME (Multipurpose Internet Mail Extensions) con los campos `From`, `To`, `Subject`, etc.
   - Después, el cliente vuelve a enviar un comando `IDLE` para mantenerse en espera de nuevos mensajes o cambios.

6. **Still Here:**
   - El servidor envía una confirmación de que todavía está ahí, lo cual es una forma de mantener la conexión activa durante el comando `IDLE`.

7. **DONE:**
   - Cuando el cliente está listo para finalizar el estado de `IDLE`, envía el comando `DONE`.

8. **FETCH de Mensajes Nuevos:**
   - Finalmente, el cliente solicita con `UID fetch 9:* (FLAGS)` información sobre los mensajes nuevos que podrían haber llegado desde la última verificación.

En resumen, la captura muestra el intercambio de comandos y respuestas estándar en una sesión IMAP, donde el cliente verifica la existencia de nuevos mensajes, solicita detalles de mensajes específicos, y espera activamente por nuevas llegadas con el comando `IDLE`.

---

## Ejercicio 6

`IMAP vs POP`

### Parte A

Marque como leídos todos los correos que tenga en el buzón de entrada de alumnopop y de alumnoimap. Luego, cree una carpeta llamada POP en la cuenta de alumnopop y una llamada IMAP en la cuenta de alumnoimap.

Asegurese que tiene mails en el inbox y en la carpeta recientemente creada en cada una de las cuentas.

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e5da1f1c-0884-47c9-8a04-a20504012efc)

### Parte B

Cierre la sesión iniciada e ingrese nuevamente identificandose como usuario root y password packer, ejecute el cliente de correos.

De esta forma, iniciará el cliente de correo con el perfil del superusuario (diferente del usuario con el que ya configuró las cuentas antes mencionadas).

Luego configure las cuentas POP e IMAP de los usuarios alumnopop y alumnoimap como se describió anteriormente pero desde el cliente de correos ejecutado con el usuario root.

Luego responda:

`¿Qué correos ve en el buzón de entrada de ambas cuentas?`

`¿Están marcados como leídos o como no leídos?`

`¿Por qué?`
 
`¿Qué pasó con las carpetas POP e IMAP que creó en el paso anterior?`


#### No pude hacer andar la parte b :,(

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWF6ZWoyeHZjMmI4Zm1mbWRhMjBxbDd5YjZsdDZmaTFrNHl1MTJtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5AVgmIw7iAzdK/giphy.gif">

---

## Ejercicio 7

`¿En algún caso es posible enviar más de un correo durante una misma conexión tcp?`

**Considere**:

- Destinatarios múltiples del mismo dominio entre MUA-MSA y entre MTA-MTA
- Destinatarios múltiples de diferentes dominios entre MUA-MSA y entre MTA-MTA

Sí, es posible enviar más de un correo durante una misma conexión TCP en varios escenarios del proceso de envío de correo electrónico. Estos escenarios incluyen tanto la comunicación entre el Agente de Usuario de Correo (MUA) y el Agente de Envío de Correo (MSA), como entre Agentes de Transferencia de Correo (MTA).

1. **Destinatarios múltiples del mismo dominio entre MUA-MSA:**
   Cuando un usuario envía un correo electrónico a través de su cliente de correo (MUA) a su servidor (MSA), puede especificar varios destinatarios en los campos "Para", "CC" o "CCO". El MUA enviará una sola transacción SMTP al MSA que incluye todos estos destinatarios si pertenecen al mismo dominio.

2. **Destinatarios múltiples de diferentes dominios entre MUA-MSA:**
   Incluso cuando los destinatarios son de diferentes dominios, el MUA puede enviar todos los destinatarios en una sola transacción SMTP al MSA. Es responsabilidad del MSA clasificar y reenviar estos correos a los MTA correspondientes para los diferentes dominios.

3. **Destinatarios múltiples del mismo dominio entre MTA-MTA:**
   Cuando un MTA está enviando correos a otro MTA y todos los destinatarios pertenecen al mismo dominio, puede enviar todos esos correos en una única conexión TCP utilizando una única transacción SMTP. El protocolo SMTP permite enviar múltiples comandos "RCPT TO" durante la misma sesión para indicar múltiples destinatarios.

4. **Destinatarios múltiples de diferentes dominios entre MTA-MTA:**
   Si bien es técnicamente posible enviar correos a destinatarios de diferentes dominios en una sola conexión TCP, generalmente no se hace de esta manera debido a las políticas de enrutamiento y los posibles problemas de entrega. En la práctica, el MTA establecerá conexiones separadas para cada dominio de destino para manejar la entrega de correos electrónicos, a menos que tenga una configuración específica que permita el relaying o haya un acuerdo entre los dominios (como ocurre en federaciones o servicios internos de una empresa).

En todos los casos, el protocolo SMTP que se utiliza para enviar correos electrónicos entre MUAs, MSAs y MTAs admite transacciones con múltiples destinatarios en una sola sesión de conexión TCP, lo que puede mejorar la eficiencia al reducir el número de conexiones necesarias para enviar varios correos electrónicos. Sin embargo, la capacidad de hacerlo también puede estar limitada por políticas específicas de los servidores de correo o por medidas antispam.

---

## Ejercicio 8

`Indique sí es posible que el MSA escuche en un puerto TCP diferente a los convencionales y qué implicancias tendría.`

Sí, es posible que un Mail Submission Agent (MSA), o cualquier servidor, escuche en un puerto TCP que no sea uno de los convencionales. Los puertos estándar para la sumisión de correo SMTP son el 25 para el intercambio entre servidores de correo (MTA a MTA), el 587 para la sumisión de correo desde un cliente de correo (MUA) a un MSA, y en algunos casos el 465 para conexiones seguras SMTP sobre SSL (aunque este último es informal y no está oficializado por la IETF).

Cambiar el puerto en el que un MSA escucha puede tener varias implicancias:

1. **Configuración del cliente:** Los clientes de correo electrónico que necesiten enviar correo a través de este MSA tendrán que configurarse para usar el nuevo puerto. Esto significa que el puerto no estándar debe ser comunicado a todos los usuarios y correctamente configurado en sus clientes de correo electrónico.

2. **Compatibilidad y usabilidad:** Muchos clientes de correo tienen preconfigurados los puertos estándar y los usuarios pueden no saber cómo cambiar esta configuración. Esto podría resultar en problemas de usabilidad y soporte técnico.

3. **Seguridad:** Algunos administradores de red pueden optar por cambiar el puerto de escucha de un servicio para evitar ataques automatizados que se dirigen a los puertos estándar. Sin embargo, este tipo de "seguridad por oscuridad" no es una medida de seguridad sólida y no debe ser la única protección.

4. **Firewalls y filtros de red:** Los firewalls y sistemas de seguridad de red pueden necesitar ser reconfigurados para permitir tráfico a través del nuevo puerto. Además, si los usuarios están detrás de firewalls corporativos que solo permiten tráfico a través de puertos conocidos, podrían experimentar problemas para conectarse al MSA.

5. **Interoperabilidad:** En el caso de comunicaciones entre servidores (MTA a MTA), cambiar el puerto podría llevar a que los correos no puedan ser entregados, ya que los servidores remotos esperarán que el MTA esté escuchando en el puerto estándar (25). Esto no aplica para MSA ya que la sumisión de correo normalmente es MUA a MSA.

En resumen, aunque es técnicamente posible cambiar el puerto, hacerlo se desvía de las convenciones y puede crear complicaciones adicionales tanto para los usuarios como para la administración de la red. Si se hace, es crucial que se gestione adecuadamente y que se informe y apoye a los usuarios en el proceso de cambio.

---

## Ejercicio 9

`Indique sí es posible que el MTA escuche en un puerto TCP diferente a los convencionales y qué implicancias tendría.`

Sí, es posible que un Mail Transfer Agent (MTA) escuche en un puerto TCP que no sea uno de los convencionales, aunque esto no es habitual y puede tener varias implicaciones prácticas y técnicas.

Los puertos estándar para el MTA son el puerto 25 para la transmisión de mensajes entre servidores de correo (intercambio MTA a MTA) y, en algunos casos, el 587 para la recepción de mensajes de un cliente de correo o un MSA, aunque este último se usa principalmente para la sumisión de correo desde un MUA al MTA y no para la transferencia entre servidores.

### Implicancias de un MTA en un Puerto No Convencional:

1. **Configuración de Otros Servidores:**
   - Otros servidores que intenten enviar correo a este MTA necesitarán saber que deben conectarse a un puerto no estándar. Esto generalmente requiere configuración manual y acuerdos entre administradores de los sistemas implicados, lo cual puede complicar las relaciones y las configuraciones predeterminadas.

2. **Firewalls y Routers:**
   - Los firewalls y routers que filtran el tráfico de red a menudo están configurados para permitir el tráfico SMTP a través del puerto 25. Cambiar a un puerto diferente podría requerir una reconfiguración significativa de estas políticas de seguridad, lo que podría ser problemático si la red es grande o si está gestionada por múltiples entidades.

3. **Compatibilidad y Interoperabilidad:**
   - Utilizar un puerto no estándar puede afectar la interoperabilidad con otros sistemas de correo que esperan que el MTA esté disponible en el puerto 25. Esto podría resultar en errores de entrega o en la incapacidad de comunicarse con ciertos dominios que no reconocen la configuración personalizada.

4. **Administración y Soporte:**
   - Los problemas de conectividad y entrega pueden ser más difíciles de diagnosticar si el MTA está operando en un puerto no estándar. Los administradores de sistemas y soporte técnico deben estar conscientes de esta configuración y preparados para manejar problemas que no seguirán los flujos de resolución de problemas estándar.

5. **Seguridad:**
   - Cambiar el puerto de escucha de un servicio es a veces visto como una medida de seguridad para evitar ataques dirigidos a los puertos comunes. Sin embargo, esta forma de "seguridad por oscuridad" generalmente no ofrece una protección real contra adversarios determinados y no debe ser la única defensa contra amenazas de seguridad.

### Conclusión:
Aunque técnicamente es posible configurar un MTA para que escuche en un puerto diferente al 25, hacerlo puede conducir a problemas de interoperabilidad, administración y seguridad. La mayoría de las organizaciones y administradores optan por adherirse a los estándares establecidos para garantizar la compatibilidad y minimizar problemas operativos. Si se considera necesario un cambio de este tipo, se deben tomar medidas cuidadosas para asegurarse de que todos los socios y sistemas implicados estén adecuadamente configurados y sean conscientes de esta desviación del estándar.

---

## Ejercicio 10

`Ejercicio integrador HTTP, DNS y MAIL`

Suponga que registró bajo su propiedad el dominio redes2022.com.ar y dispone de 4 servidores:

- Un servidor DNS instalado configurado como primario de la zona redes2022.com.ar. (hostname: ns1 / ip: 203.0.113.65).
- Un servidor DNS instalado configurado como secundario de la zona redes2022.com.ar. (hostname: ns2 / ip: 203.0.113.66).
- Un servidor de correo electrónico (hostname: mail / ip: 203.0.113.111). Permitirá a los usuarios envíar y recibir correos a cualquier dominio de Internet.
- Un servidor WEB para el acceso a un webmail (hostname: correo / ip: 203.0.113.8). Permitirá a los usuarios gestionar vía web sus correos electrónicos a través de la URL https://webmail.redes2022.com.ar

### Parte a

`¿Qué información debería informar al momento del registro para hacer visible a Internet el dominio registrado?`

### Parte b

`¿Qué registros sería necesario configurar en el servidor de nombres?`

`Indique toda la información necesaria del archivo de zona.`

Puede utilizar la siguiente tabla de referencia (evalúe la necesidad de usar cada caso los siguientes campos): 
- Nombre del registro
- Tipo de registro
- Prioridad
- TTLValor del registro.

### Parte c

`¿Es necesario que el servidor de DNS acepte consultas recursivas? Justifique.`

### Parte d

`¿Qué servicios/protocolos de capa de aplicación configuraría en cada servidor?`

### Parte e

`Para cada servidor, ¿qué puertos considera necesarios dejar abiertos a Internet?.`

`A modo de referencia, para cada puerto indique: servidor, protocolo de transporte y número de puerto.`

### Parte f

`¿Cómo cree que se conectaría el webmail del servidor web con el servidor de correo?`

`¿Qué protocolos usaría y para qué?`

### Parte g

`¿Cómo se podría hacer para que cualquier MTA reconozca como válidos los mails provienentes del dominio redes2022.com.ar solamente a los que llegan de la dirección 203.0.113.111?`

`¿Afectaría esto a los mails enviados desde el Webmail? Justifique.`

### Parte h

`¿Qué característica propia de SMTP, IMAP y POP hace que al adjuntar una imagen o un ejecutable sea necesario aplicar un encoding (ej. base64)?`

### Parte i

`¿Se podría enviar un mail a un usuario de modo que el receptor vea que el remitente es un usuario distinto? `

`En caso afirmativo, ¿Cómo?` 

`¿Es una indicación de una estafa? Justifique`

### Parte j

`¿Sepodría enviar un mail a un usuario de modo queel receptor vea que el destinatario es un usuario distinto?` 

`En caso afirmativo, ¿Cómo?` 

`¿Por qué no le llegaría al destinatario que el receptor vé?` 

`¿Es esto una indicación de una estafa? Justifique`

### Parte k

`¿Qué protocolo usará nuestro MUA para enviar un correo con remitente redes@info.unlp.edu.ar?`

`¿Con quién se conectará?`

`¿Qué información será necesaria y cómo la obtendría?`

### Parte l

Dado que solo disponemos de un servidor de correo

`¿qué sucederá con los mails que intenten ingresar durante un reinicio del servidor?`

### Parte m

Suponga que contratamos un servidor de correo electrónico en la nube para integrarlo con nuestra arquitectura de servicios.
 
`¿Cómo configuraría el DNS para que ambos servidores de correo se comporten de manera de dar un servicio de correo tolerante a fallos?`


---

## Ejercicio 11


---

## Ejercicio 12


---
