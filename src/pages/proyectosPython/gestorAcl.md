---
layout: ../../layouts/MarkdownPostLayout.astro
title: ACL MANAGER
author: Fabian Martinez Rincon
description: "Después de aprender un poco de Astro, ¡no podía parar!"
image:
    url: '/gif/ACL_Manager.gif'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---

<div class="video-inline z-0 transition-transform duration-[1.5s] group-hover:scale-110">
    <video src='/gif/ACL_Manager.mp4' class="max-w-screen-lg mx-auto noise left-0 h-full w-full relative top-0 block overflow-hidden border-4 border-black" autoplay muted controls loop></video>
</div>

### Interfaz

![image](https://github.com/user-attachments/assets/488baed9-e6c8-4ee2-a144-e7f077240ad7)


### Instalación

#### Creamos el Entorno Virtual
```bash
python -m venv .venv
```

#### Activamos el Entorno Virtual
```bash
.venv\Scripts\activate
```

En caso de no tener permisos, utilizar:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

#### Instalamos las Dependencias
```bash
pip install -r requirements.txt
```

Una vez que instalamos todo, podemos procesar comandos a través de los botones. A continuación, dejamos una descripción con ejemplos de los comandos proporcionados.


### Consultar

![image](https://github.com/user-attachments/assets/03661641-0eb1-497c-ad7e-481a3deb5d83)
![image](https://github.com/user-attachments/assets/261f9974-d49a-40ed-9754-f39c3dcd55ff)

### Setear
![image](https://github.com/user-attachments/assets/584d087d-1b39-4501-b720-0b4b78b81db2)
![image](https://github.com/user-attachments/assets/7b3babea-534d-466a-a449-6304bc456c10)

### Seteamos de forma Recursiva
![image](https://github.com/user-attachments/assets/60bc6db5-57f6-4913-8bfc-03cac7a9c239)
![image](https://github.com/user-attachments/assets/fd4bcab5-a168-438c-8c04-39d28af38b39)

### Eliminar
![image](https://github.com/user-attachments/assets/41b9697f-7de0-4bcd-847d-061c34b0bdb1)
![image](https://github.com/user-attachments/assets/00822e6f-35e4-4e80-bade-8d86100e794d)

### Eliminar R (De forma Recursiva)
![image](https://github.com/user-attachments/assets/ffec66cf-bc0a-471a-8f65-f77225901ed1)
![image](https://github.com/user-attachments/assets/6c2aecf8-d44e-41bf-ab8a-73ece691dfdf)

### Setear Por Defecto
![image](https://github.com/user-attachments/assets/fccc6c37-d329-4c64-9f43-16d9709cb5e4)
![image](https://github.com/user-attachments/assets/af7ddc03-fbd6-481a-ab8a-72b0ad65db84)

### Setear Por Defecto de Forma Recursiva
Solo se aplica en directorios

![image](https://github.com/user-attachments/assets/2edd421c-e38d-41c4-8070-6ffae83a9c2d)
![image](https://github.com/user-attachments/assets/375355ab-2c07-4701-beb0-9fd1c2c8298d)

### Excel

El archivo que usamos para gestionar los permisos, debe tener el siguiente formato. Con las siguientes caracteristicas:

- Lo archivos deben tener el path absoluto para poder accederlo desde cualquier lugar
- En caso de que no existan TODOS los grupos en el Excel, el software no funcionara (groupadd grupoEjemplo)
- Si se quieren agregar grupos, se debe insertar una nueva columna o podes copiar y pegar una columna ya existente, - modificando esta con los datos personalizados
- En caso de querer agregar directorios, se tiene que agregar una nueva fila, copiando y pegando una fila ya existente, modificando a los datos personalizados

![image](https://github.com/user-attachments/assets/6412a4a7-3b53-461a-bdeb-e9caf169a613)