---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Curso de Git'
pubDate: 2024-11-01
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/Random/git.png'
    alt: 'El logotipo completo de Astro.'
tags: ["Formas de Ganar dinero en Informatica", "Formas de Ganar dinero en Linux", "Formas de Ganar dinero en Programacion"]	
category: Random
---


Comandos

```sh
git init #Es el que arranca el repositorio
git add biografia.txt #Es el que arranca el arquivo
```

Antes de mandarlo al repositorio esta en estado de stage

```sh
git commit -m "Primer commit" #Es el que envia los ultimos cambios del archivo a la base de datos del sistema de control de versiones
```

Todavia no tengo guardado los cambios en el repositorio, para ello tengo que volver a agregar el archivo.

```sh	
git add . #Se agregan todos los archivos
git commit -m "Segundo commit" #Se envian los cambios al repositorio
```

Para ver como esta el status de la base de datos

```sh
git status
```

Para ver todos los cambios historicos hechos incluyendo las lineas de codigo/texto y quien los hizo

```sh
git log
```

Para ver la historia de los cambios de un archivo en especifico

```sh
git log biografia.txt
```

El comando para enviar los cambios al repositorio remoto

```sh
git push
```

Y para traer los cambios del repositorio remoto

```sh
git pull
```

![Que_es_Git-8f5b6780-47b4-4ff7-9a8a-6fdec5a0f1af](https://github.com/user-attachments/assets/0473e808-5568-46f3-bb9c-5aa6f0e46aa9)

---
