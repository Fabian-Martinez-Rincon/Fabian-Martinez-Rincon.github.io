---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Rusheando Curl'
pubDate: 2022-10-04
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2R0Z3BkYzJsd3c5N3FqbWh4OTVkZXQzMXE0dDUwNTMwbnE4amRubCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2jMtpIi8mhE8ctiMtK/giphy.gif'
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

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/bd7a61f9-cf46-4b4e-bd07-68ac1761185d)

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/15a4c967-beb1-4ffc-926a-3dd681e1ddc9)

Una vez que lo realizamos lo podemos chequear de la siguiente forma:

```bash
curl -o file2.html -X POST http://www.redes.unlp.edu.ar/http/metodos-lectura-valores.php -d "form_nombre=Juan" -d "form_apellido=Perez" -d "form_mail=juan.perez@email.com" -d "form_sexo=sexo_masc" -d "form_pass=contraseña123" -d "form_confirma_mail=on"
```

---

