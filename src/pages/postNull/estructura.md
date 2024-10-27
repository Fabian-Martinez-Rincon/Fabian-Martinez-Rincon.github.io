---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Filesystem'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/FILESYSTEM.jpg'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---



---

- [Bin](#bin)
- [Boot](#boot)
- [Dev](#dev)
- [Etc](#etc)
- [Home](#home)
- [Lib](#lib)
- [Media](#media)
- [Opt](#opt)
- [Proc](#proc)
- [Root](#root)
- [Sbin](#sbin)
- [Srv](#srv)
- [Sys](#sys)
- [Tmp](#tmp)
- [Usr](#usr)
- [Var](#var)

---



![image](https://github.com/user-attachments/assets/c1b6e24b-c84e-401a-86d6-fb3a33787c20)

La estructura del sistema de archivos en Linux sigue un estándar conocido como Filesystem Hierarchy Standard (FHS), que define los directorios y su contenido en las distribuciones Unix-like. A continuación, se presenta una explicación detallada de cada uno de los directorios listados

---

### Bin

![image](https://github.com/user-attachments/assets/f2c02a91-f592-4319-afc4-de1a6702e879)

`/bin` (Binaries)

- **Descripción:** Contiene binarios esenciales del sistema que están disponibles para todos los usuarios. Estos programas son necesarios para el sistema operativo y para la recuperación en modo monousuario.
- **Ejemplos:** `ls`, `cp`, `mv`, `rm`, `bash`.
- **Uso Típico:** Ejecución de comandos básicos del sistema.

---


### Boot

![image](https://github.com/user-attachments/assets/e204d09b-2efd-4905-80fb-ac2c1e2f9c87)

`/boot` (Boot Loader Files)

- **Descripción:** Contiene los archivos necesarios para arrancar el sistema, incluidos los cargadores de arranque y los núcleos del sistema.
- **Ejemplos:** `vmlinuz` (kernel de Linux), `initrd.img` (disco RAM inicial), `grub` (cargador de arranque).
- **Uso Típico:** Almacenar el kernel y los archivos de configuración del cargador de arranque.

---

### Dev

![image](https://github.com/user-attachments/assets/3d0599b4-655d-4d7f-a9f3-1f0eadeb7c87)

`/dev` (Device Files)

- **Descripción:** Contiene archivos especiales que representan dispositivos de hardware. Estos archivos permiten la interacción con el hardware mediante controladores.
- **Ejemplos:** `sda` (disco duro), `tty` (terminal), `null`, `zero`.
- **Uso Típico:** Acceso y control de dispositivos de hardware.

---


### Etc

![image](https://github.com/user-attachments/assets/36593b56-8d06-40d4-9126-214a54fcc157)

`/etc` (Configuration Files)

- **Descripción:** Contiene todos los archivos de configuración específicos del sistema y de las aplicaciones instaladas.
- **Ejemplos:** `passwd` (información de cuentas de usuario), `fstab` (sistema de archivos), `hosts` (nombres de hosts).
- **Uso Típico:** Configuración y gestión de parámetros del sistema y aplicaciones.

---

### Home

![image](https://github.com/user-attachments/assets/36fbb938-cd33-45e0-ae2c-180f8ad99ab5)

`/home` (Home Directories)

- **Descripción:** Contiene los directorios personales de los usuarios. Cada usuario tiene su propio subdirectorio en `/home`.
- **Ejemplos:** `/home/user1`, `/home/user2`.
- **Uso Típico:** Almacenamiento de archivos y configuraciones personales de los usuarios.

---

### Lib

![image](https://github.com/user-attachments/assets/30b02ae1-697b-4991-90de-9bb82fef24fd)

`/lib` (Libraries)

- **Descripción:** Contiene las bibliotecas compartidas esenciales para los binarios en `/bin` y `/sbin`. También alberga módulos del kernel.
- **Ejemplos:** `libc.so.6`, `libm.so.6`.
- **Uso Típico:** Proveer bibliotecas compartidas necesarias para el funcionamiento de los programas del sistema.

---

### Media

![image](https://github.com/user-attachments/assets/1466c6b3-46f2-477d-9640-e8b9cfecc783)

`/media` (Removable Media)

- **Descripción:** Punto de montaje para dispositivos de almacenamiento extraíbles, como unidades USB, CD-ROMs y DVDs.
- **Ejemplos:** `/media/cdrom`, `/media/usb`.
- **Uso Típico:** Acceso a dispositivos de almacenamiento extraíbles.

---


### Opt

![image](https://github.com/user-attachments/assets/3a5ecbcd-b143-4df3-a9ea-d0e04ffd5dfe)

`/opt` (Optional Software)

- **Descripción:** Contiene software adicional y paquetes que no forman parte del sistema base. Usualmente, los programas instalados en `/opt` tienen su propio subdirectorio.
- **Ejemplos:** `/opt/google`, `/opt/lampp`.
- **Uso Típico:** Instalación de software de terceros.

---

### Proc

![image](https://github.com/user-attachments/assets/113ecda2-b75d-4d22-9d31-530652669cc3)

`/proc` (Process Information)

- **Descripción:** Sistema de archivos virtual que contiene información sobre los procesos del sistema. No contiene archivos reales, sino información generada dinámicamente por el kernel.
- **Ejemplos:** `/proc/cpuinfo`, `/proc/meminfo`, `/proc/[pid]`.
- **Uso Típico:** Monitorización y gestión de procesos y recursos del sistema.

---

### Root

![image](https://github.com/user-attachments/assets/5b9adf1e-dfbb-4a72-b7d2-481807e34d83)

`/root` (Root Home Directory)

- **Descripción:** Directorio personal del usuario root (superusuario). Es similar a `/home` pero específico para el administrador del sistema.
- **Ejemplos:** Archivos personales y configuraciones del usuario root.
- **Uso Típico:** Almacenamiento de archivos y configuraciones del superusuario.

---

### Sbin

![image](https://github.com/user-attachments/assets/5d8068fd-1c30-474d-a010-5ca06881a2d1)

`/sbin` (System Binaries)

- **Descripción:** Contiene binarios esenciales del sistema que solo deben ser utilizados por el administrador del sistema (root).
- **Ejemplos:** `fsck`, `reboot`, `shutdown`, `ifconfig`.
- **Uso Típico:** Ejecución de comandos del sistema y administración.

---

### Srv

`/srv` (Service Data)

- **Descripción:** Contiene datos específicos para los servicios ofrecidos por el sistema, como servidores web o FTP.
- **Ejemplos:** `/srv/www`, `/srv/ftp`.
- **Uso Típico:** Almacenamiento de datos y archivos relacionados con servicios del sistema.

---


### Sys

![image](https://github.com/user-attachments/assets/2ed64e5e-8c50-405f-b63a-0b6f329931d6)

`/sys` (System Information)

- **Descripción:** Sistema de archivos virtual que proporciona información y control sobre los dispositivos y el estado del kernel.
- **Ejemplos:** `/sys/class`, `/sys/block`.
- **Uso Típico:** Interacción con dispositivos y configuración del kernel.

---


### Tmp

![image](https://github.com/user-attachments/assets/cea8a80f-a099-45a1-b6e3-12c56b92503f)

`/tmp` (Temporary Files)

- **Descripción:** Contiene archivos temporales creados por usuarios y aplicaciones. Estos archivos pueden ser eliminados en cualquier momento por el sistema.
- **Ejemplos:** Archivos temporales generados por aplicaciones.
- **Uso Típico:** Almacenamiento temporal de datos y archivos.

---

### Usr

![image](https://github.com/user-attachments/assets/1aa694f6-d45c-4956-aca2-16494b0fd4a3)

`/usr` (User Binaries & Read-Only Data)

- **Descripción:** Contiene aplicaciones y archivos de solo lectura utilizados por los usuarios. Incluye binarios, bibliotecas, documentación y archivos de cabecera.
- **Ejemplos:** `/usr/bin` (binarios), `/usr/lib` (bibliotecas), `/usr/share` (archivos compartidos).
- **Uso Típico:** Almacenamiento de programas y archivos utilizados por los usuarios.

---


### Var

![image](https://github.com/user-attachments/assets/2eef4ca0-76d1-4d84-96c0-98df8050ef4a)b

/var` (Variable Data)

- **Descripción:** Contiene archivos variables que cambian frecuentemente durante la operación normal del sistema. Incluye registros, colas de correo, bases de datos temporales, etc.
- **Ejemplos:** `/var/log`, `/var/mail`, `/var/spool`.
- **Uso Típico:** Almacenamiento de archivos que cambian frecuentemente.

---



#### Resumen

La estructura del sistema de archivos en Linux está organizada de manera lógica para separar los tipos de archivos y sus usos específicos. Cada directorio tiene un propósito definido que ayuda a mantener el sistema organizado y fácil de gestionar. Entender esta estructura es crucial para administrar un sistema Linux de manera efectiva y segura.