---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'SUID y SGID'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/vicio.png'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---

- Permisos SGID, SUID y Sticky Bit: [Permisos SGID, SUID y Sticky Bit](https://deephacking.tech/permisos-sgid-suid-y-sticky-bit-linux/#:~:text=Permiso%20SGID,-El%20permiso%20SGID&text=Si%20se%20establece%20en%20un,perteneciente%2C%20el%20grupo%20del%20directorio.)
- Permisos especiales en Linux: [Permisos especiales en Linux – Sticky Bit, SUID y SGID](https://www.ochobitshacenunbyte.com/2019/06/17/permisos-especiales-en-linux-sticky-bit-suid-y-sgid/)
- Los bits SUID, SGID y Sticky: [Los bits SUID, SGID y Sticky](https://www.ibiblio.org/pub/linux/docs/LuCaS/Manuales-LuCAS/SEGUNIX/unixsec-2.1-html/node56.html)

El **SUID** (Set User ID) y el **SGID** (Set Group ID) son permisos especiales en sistemas Unix y Linux que afectan cómo los archivos y programas se ejecutan. Aquí se presenta una explicación teórica detallada de ambos permisos, sus propósitos, cómo funcionan y sus implicaciones en la seguridad del sistema.

### SUID (Set User ID)

#### Propósito

El propósito del SUID es permitir que un archivo ejecutable se ejecute con los privilegios del propietario del archivo en lugar de con los privilegios del usuario que ejecuta el archivo. Esto es útil para programas que necesitan realizar tareas con privilegios elevados temporalmente.

#### Funcionamiento

- **Archivo ejecutable:** El SUID se aplica a archivos ejecutables.
- **Ejecución con privilegios del propietario:** Cuando un usuario ejecuta un archivo con el bit SUID establecido, el programa se ejecuta con los privilegios del propietario del archivo, no con los privilegios del usuario que lo ejecuta.

#### Representación

- **Notación simbólica:** En la salida de `ls -l`, el bit SUID se representa con una `s` en lugar de una `x` en la posición de permisos de ejecución del propietario (user).

  Ejemplo: `rwsr-xr-x`
  - `rws`: El propietario tiene permisos de lectura, escritura y ejecución con SUID.
  - `r-x`: El grupo tiene permisos de lectura y ejecución.
  - `r-x`: Otros tienen permisos de lectura y ejecución.

- **Notación octal:** El bit SUID se representa con un `4` adicional en la notación octal.

  Ejemplo: `4755`
  - `4`: Bit SUID.
  - `755`: Permisos de lectura, escritura y ejecución para el propietario; permisos de lectura y ejecución para el grupo y otros.

#### Ejemplo Práctico

1. **Establecer el bit SUID en un archivo:**

   ```sh
   sudo chmod u+s archivo
   ```

2. **Verificar los permisos del archivo:**

   ```sh
   ls -l archivo
   ```

   Salida esperada:

   ```sh
   -rwsr-xr-x 1 root root 12345 Jul 19 10:13 archivo
   ```

### SGID (Set Group ID)

#### Propósito

El propósito del SGID es doble. Cuando se aplica a un archivo ejecutable, funciona de manera similar al SUID, permitiendo que el archivo se ejecute con los privilegios del grupo propietario. Cuando se aplica a un directorio, todos los archivos y subdirectorios creados dentro de ese directorio heredarán el grupo del directorio padre en lugar del grupo del usuario que los crea.

#### Funcionamiento

- **Archivo ejecutable:** El SGID se aplica a archivos ejecutables para que se ejecuten con los privilegios del grupo propietario.
- **Directorio:** Cuando el SGID se establece en un directorio, todos los nuevos archivos y subdirectorios creados dentro de ese directorio heredan el grupo del directorio.

#### Representación

- **Notación simbólica:** En la salida de `ls -l`, el bit SGID se representa con una `s` en lugar de una `x` en la posición de permisos de ejecución del grupo.

  Ejemplo en un archivo: `rwxr-sr-x`
  - `rwx`: El propietario tiene permisos de lectura, escritura y ejecución.
  - `r-s`: El grupo tiene permisos de lectura y ejecución con SGID.
  - `r-x`: Otros tienen permisos de lectura y ejecución.

  Ejemplo en un directorio: `rwxr-sr-x`
  - `rwx`: El propietario tiene permisos de lectura, escritura y ejecución.
  - `r-s`: El grupo tiene permisos de lectura y ejecución con SGID.
  - `r-x`: Otros tienen permisos de lectura y ejecución.

- **Notación octal:** El bit SGID se representa con un `2` adicional en la notación octal.

  Ejemplo: `2755`
  - `2`: Bit SGID.
  - `755`: Permisos de lectura, escritura y ejecución para el propietario; permisos de lectura y ejecución para el grupo y otros.

#### Ejemplo Práctico

1. **Establecer el bit SGID en un archivo:**

   ```sh
   sudo chmod g+s archivo
   ```

2. **Verificar los permisos del archivo:**

   ```sh
   ls -l archivo
   ```

   Salida esperada:

   ```sh
   -rwxr-sr-x 1 root root 12345 Jul 19 10:13 archivo
   ```

3. **Establecer el bit SGID en un directorio:**

   ```sh
   sudo chmod g+s directorio
   ```

4. **Verificar los permisos del directorio:**

   ```sh
   ls -ld directorio
   ```

   Salida esperada:

   ```sh
   drwxr-sr-x 2 root root 4096 Jul 19 10:13 directorio
   ```

5. **Crear un archivo dentro del directorio con SGID:**

   ```sh
   touch directorio/nuevo_archivo
   ```

6. **Verificar el grupo del nuevo archivo:**

   ```sh
   ls -l directorio/nuevo_archivo
   ```

   Salida esperada:

   ```sh
   -rw-r--r-- 1 usuario grupo 0 Jul 19 10:13 nuevo_archivo
   ```

   Aquí, `grupo` es el grupo del directorio `directorio`.

### Seguridad e Implicaciones

- **SUID:** Puede ser un riesgo de seguridad si no se maneja correctamente, ya que permite que programas se ejecuten con privilegios elevados. Los administradores deben ser cuidadosos y solo aplicar SUID a programas confiables.
- **SGID:** Similar al SUID, puede ser un riesgo si no se maneja correctamente en archivos ejecutables. En directorios, ayuda a mantener la coherencia del grupo en entornos de colaboración.

### Resumen

- **SUID (Set User ID):** Permite que un archivo ejecutable se ejecute con los privilegios del propietario del archivo. Representado con `4` en notación octal y `s` en permisos de usuario.
- **SGID (Set Group ID):** Permite que un archivo ejecutable se ejecute con los privilegios del grupo propietario. En directorios, asegura que los nuevos archivos hereden el grupo del directorio. Representado con `2` en notación octal y `s` en permisos de grupo.

Estos permisos especiales son herramientas poderosas que deben ser usadas con precaución para mantener la seguridad y funcionalidad del sistema.

![image](https://github.com/user-attachments/assets/5c78a70b-093e-4f7d-a6c5-3ade15857f2c)

![image](https://github.com/user-attachments/assets/ee4248aa-5252-43ac-9e5e-0ef824a4422e)
![image](https://github.com/user-attachments/assets/cc254453-d5ed-49f0-a92a-60d85fbf7f8b)
![image](https://github.com/user-attachments/assets/97cdf337-3fab-40c5-85c1-a7abaeda16ea)
![image](https://github.com/user-attachments/assets/5e8c9dd3-d0de-444f-b4ea-046115774a74)
![image](https://github.com/user-attachments/assets/326be9b3-f1a8-4378-a39c-78c703bfb0dc)
![image](https://github.com/user-attachments/assets/80fe6012-5fcd-4f6b-b884-f564f98d1d0f)
![image](https://github.com/user-attachments/assets/537211c9-dd01-4bd6-bc88-e01a9af1d7d7)
![image](https://github.com/user-attachments/assets/97eecd28-97b1-4a26-bd01-aff7c6ad9150)