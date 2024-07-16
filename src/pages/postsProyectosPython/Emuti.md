---
layout: ../../layouts/MarkdownPostLayout.astro
title: Emuti
author: Fabian Martinez Rincon
description: "Después de aprender un poco de Astro, ¡no podía parar!"
image:
    url: '/gif/emuti.gif'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Proyectos Python
---

- [Link del repositorio](https://github.com/Fabian-Martinez-Rincon/EmuTi)
- [Manual](https://github.com/Fabian-Martinez-Rincon/EmuTi/releases)

<div class="video-inline z-0 transition-transform duration-[1.5s] group-hover:scale-110">
        <video src='/gif/emuti.mp4' class="max-w-screen-lg mx-auto noise left-0 h-full w-full relative top-0 block overflow-hidden border-4 border-black" autoplay muted controls loop></video>
</div>


# Guía Primer Uso

![image](https://github.com/user-attachments/assets/c6585749-268a-4607-84dd-5ad20bfb8405)

#### Requerimientos del Sistema
- Python versión 3.8.10 o superior

#### Obtener el Repositorio
1. Descargar el archivo .zip del repositorio.
2. Descomprimir el archivo descargado.

#### Instalación del Entorno Virtual
En caso de no tener permisos, ejecutar el siguiente comando en PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\setup.ps1
```

#### Ejecutar el Programa
Para iniciar el programa, ejecutar el archivo `main.py` con el siguiente comando:
```bash
python main.py
```

#### Cargar Archivo
Tenemos que cargar el Excel con el formato indicado. Seleccionamos un Excel con el siguiente formato (tienes un Excel base como ejemplo en la carpeta `assets`):

- **SIMBOLO**: Es el símbolo que tiene el rodillo de la máquina.
- **R**: Es el número que representa el rodillo de la máquina.

Da igual si el Excel tiene otros campos, solo es importante que tenga los solicitados.

| ![image1](https://github.com/user-attachments/assets/04337592-b1f1-4bc7-849d-b1510a8e6cd2) | ![image2](https://github.com/user-attachments/assets/6bf50ce4-3866-42bf-853e-e6becc5d91d5) |
|:---------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------:|


### Ingreso de Datos

![image](https://github.com/user-attachments/assets/8a4a186e-a279-46cc-be0e-6cda781d6baf)

#### Manual
- Al dar click, ingresa el primer dato del Excel en la ventana definida.

#### Automático
- Funciona igual que el manual, pero presiona el botón de forma automática cada x tiempo.

#### Ventana
- Ingresamos el nombre de la ventana en donde queremos ingresar los datos, por ejemplo, "Ingrese una combinación".

#### Índice Nuevo
- Durante las pruebas se puede dar que uno quiera no seguir el orden implícito del Excel y saltarse jugadas o empezar desde jugadas más avanzadas. Entonces podemos actualizar el índice de la jugada que queremos empezar a probar.

#### Transformar TXT
Puede que ya tengamos un conjunto de datos en algún TXT con un formato específico como por ejemplo para los Bonus. Entonces podemos transformar ese TXT a un Excel con el formato que necesita el programa. El texto se puede modificar de mejor manera con Visual Studio Code (https://vscode.dev/?vscode-lang=es-es).

| ![image](https://github.com/user-attachments/assets/f7f77845-3458-4049-8e69-b621fd1dde42) | ![image](https://github.com/user-attachments/assets/44257a3b-e2c4-4526-8850-d204f39760d6) |
|:---------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------:|



Una vez procesado el txt, ese mismo se puede usar para cargarlo en el programa.

