---
layout: ../../layouts/MarkdownPostLayout.astro
title: SqlModify
author: Fabian Martinez Rincon
description: "Software para manipular el ingreso de datos (Excel) en una ventana indicada por el usuario."
image:
    url: '/gif/sql.gif'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---

<div class="video-inline z-0 transition-transform duration-[1.5s] group-hover:scale-110">
        <video src='/gif/sql.mp4' class="max-w-screen-lg mx-auto noise left-0 h-full w-full relative top-0 block overflow-hidden border-4 border-black" autoplay muted controls loop></video>
</div>

Tenemos un archivo .env_example que es el que contendrá los Path de los directorios a comparar. Este lo renombramos a .env y le agregamos los Path de los directorios a comparar.

![image](https://github.com/user-attachments/assets/2dde7549-7b46-47f4-bf62-e9ad789dfe76)

Si estamos en Windows, podemos dar doble click en el path arriba del directorio y luego copiar eso.

```bash
PATH_OLD_FILE=C:\Users_example\User_Example\Desktop\directory1
PATH_NEW_FILE=C:\Users_example\User_Example\Desktop\directory2
```

### Resultado

![image](https://github.com/user-attachments/assets/bcac12ec-ffc7-457c-894f-76804dba5a6f)