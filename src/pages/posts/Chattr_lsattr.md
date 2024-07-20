---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Chattr y Lsattr'
pubDate: 2024-03-07
description: ''
author: 'Fabian Martinez Rincon'
image:
    url: '/posts/linux/comandos2.webp'
    alt: 'El logotipo completo de Astro.'
tags: ["ACL", "Permisos", "Linux"]
category: Linux
---

- [RM-RF](https://rm-rf.es/chattr-y-lsattr-visualizar-y-modificar-atributos-en-sistemas-de-ficheros-linux/#:~:text=El%20primer%20comando%2C%20lsattr%20permite,chmod%2C%20chown%2Csetfacl%E2%80%A6)
- [Programador Clic](https://programmerclick.com/article/5604675172/)


`chattr` y `lsattr` son comandos en sistemas Linux utilizados para manipular y visualizar los atributos de los archivos en sistemas de archivos ext4 y otros similares. A continuación, te explicaré en detalle ambos comandos, cómo funcionan y qué atributos pueden manejar.

### `chattr` (Change Attribute)

El comando `chattr` se utiliza para cambiar los atributos de los archivos. Estos atributos afectan cómo los archivos pueden ser modificados, eliminados y gestionados por el sistema.

#### Uso Básico

```sh
chattr [opciones] [atributos] archivo
```

#### Opciones Comunes

- **`+`**: Añade los atributos especificados al archivo.
- **`-`**: Elimina los atributos especificados del archivo.
- **`=`**: Establece los atributos del archivo exactamente como se especifica (sobreescribe los atributos existentes).

#### Atributos Comunes

- **`a`** (append only): El archivo solo puede ser abierto en modo de anexar. Solo se pueden agregar datos, no se pueden modificar ni eliminar los existentes.
- **`i`** (immutable): Hace que el archivo sea inmutable. No se puede modificar, eliminar, renombrar o enlazar.
- **`d`** (no dump): Evita que el archivo sea incluido en los backups realizados con el comando `dump`.
- **`e`** (extent format): Este atributo indica que el archivo está en formato de extensión.
- **`s`** (secure deletion): Los bloques del archivo se sobrescriben con ceros cuando se elimina.
- **`u`** (undeletable): Mantiene una copia del archivo cuando se elimina, permitiendo su recuperación.

#### Ejemplos

1. **Hacer un archivo inmutable:**

   ```sh
   sudo chattr +i archivo.txt
   ```

2. **Permitir solo la anexión de datos a un archivo:**

   ```sh
   sudo chattr +a log.txt
   ```

3. **Eliminar el atributo inmutable:**

   ```sh
   sudo chattr -i archivo.txt
   ```

### `lsattr` (List Attributes)

El comando `lsattr` se utiliza para listar los atributos de los archivos. Esto es útil para verificar qué atributos están establecidos en un archivo o directorio.

#### Uso Básico

```sh
lsattr [opciones] archivo
```

#### Opciones Comunes

- **`-a`**: Lista todos los archivos en un directorio, incluyendo los archivos ocultos.
- **`-d`**: Muestra los atributos del directorio en sí, en lugar de los atributos de los archivos dentro del directorio.
- **`-R`**: Lista recursivamente los atributos de todos los archivos y subdirectorios.

#### Ejemplos

1. **Listar atributos de un archivo:**

   ```sh
   lsattr archivo.txt
   ```

2. **Listar atributos de todos los archivos en un directorio:**

   ```sh
   lsattr -a
   ```

3. **Listar atributos de todos los archivos y subdirectorios recursivamente:**

   ```sh
   lsattr -R /ruta/al/directorio
   ```

### Ejemplos Prácticos

#### 1. Proteger un archivo de cambios

Supongamos que tienes un archivo de configuración que no quieres que sea modificado:

```sh
sudo chattr +i /etc/important.conf
```

Para verificar que el atributo inmutable ha sido establecido:

```sh
lsattr /etc/important.conf
```

La salida podría ser algo como:

```
----i--------e----- /etc/important.conf
```

#### 2. Permitir solo la anexión de datos a un archivo de registro

Si tienes un archivo de registro al que solo deseas agregar datos:

```sh
sudo chattr +a /var/log/append-only.log
```

Verificar el atributo:

```sh
lsattr /var/log/append-only.log
```

La salida podría ser:

```
----a--------e----- /var/log/append-only.log
```

### Atributos Especiales y su Significado

- **`a` (append only):** Solo permite agregar datos al archivo.
- **`c` (compressed):** El archivo está marcado para compresión automática.
- **`d` (no dump):** El archivo no será incluido en backups con `dump`.
- **`e` (extent format):** Usa el formato de extensión para archivos grandes.
- **`i` (immutable):** El archivo no puede ser modificado de ninguna forma.
- **`s` (secure deletion):** Los bloques del archivo se sobrescriben con ceros cuando se elimina.
- **`u` (undeletable):** Mantiene una copia del archivo cuando se elimina.

### Conclusión

`chattr` y `lsattr` son herramientas poderosas en Linux para gestionar y visualizar atributos especiales de archivos y directorios. Estos atributos proporcionan un nivel adicional de control sobre cómo los archivos pueden ser manipulados, lo que es útil para la seguridad y la integridad del sistema de archivos.

![image](https://github.com/user-attachments/assets/4c6a590f-0d3a-449f-a5a3-42a9dcf60438)

Vamos a explorar cada uno de los atributos especiales en Linux, su significado y cómo se pueden usar con ejemplos prácticos utilizando los comandos `chattr` y `lsattr`.

### Atributos Especiales y su Significado

#### 1. `a` (append only)

- **Significado:** El archivo solo puede ser abierto en modo de anexar. Esto significa que puedes agregar datos al final del archivo, pero no puedes modificar o eliminar los datos existentes.

- **Ejemplo Práctico:**

1. **Crear un archivo y agregar el atributo `append only`:**

   ```sh
   echo "Línea inicial" > log.txt
   sudo chattr +a log.txt
   ```

2. **Intentar agregar datos al archivo:**

   ```sh
   echo "Nueva línea" >> log.txt
   ```

3. **Intentar modificar el archivo (esto fallará):**

   ```sh
   echo "Intento de modificación" > log.txt
   # Resultado: Permiso denegado
   ```

4. **Verificar los atributos del archivo:**

   ```sh
   lsattr log.txt
   # Salida: ----a--------e----- log.txt
   ```

#### 2. `c` (compressed)

- **Significado:** El archivo está marcado para compresión automática por el sistema de archivos. Este atributo solo es soportado en ciertos sistemas de archivos, como `btrfs`.

- **Ejemplo Práctico:**

1. **Marcar un archivo para compresión automática:**

   ```sh
   sudo chattr +c archivo.txt
   ```

2. **Verificar los atributos del archivo:**

   ```sh
   lsattr archivo.txt
   # Salida: ----c--------e----- archivo.txt
   ```

#### 3. `d` (no dump)

- **Significado:** El archivo no será incluido en backups realizados con el comando `dump`.

- **Ejemplo Práctico:**

1. **Agregar el atributo `no dump` a un archivo:**

   ```sh
   sudo chattr +d archivo_no_dump.txt
   ```

2. **Verificar los atributos del archivo:**

   ```sh
   lsattr archivo_no_dump.txt
   # Salida: ----d--------e----- archivo_no_dump.txt
   ```

#### 4. `e` (extent format)

- **Significado:** Usa el formato de extensión para almacenar archivos grandes de manera más eficiente. Este atributo es manejado automáticamente por el sistema de archivos y no suele ser modificado manualmente.

- **Ejemplo Práctico:**

1. **Crear un archivo grande (el sistema de archivos puede asignar automáticamente este atributo):**

   ```sh
   dd if=/dev/zero of=archivo_grande.txt bs=1M count=100
   ```

2. **Verificar los atributos del archivo:**

   ```sh
   lsattr archivo_grande.txt
   # Salida: ----e--------e----- archivo_grande.txt
   ```

#### 5. `i` (immutable)

- **Significado:** El archivo no puede ser modificado, eliminado, renombrado o enlazado.

- **Ejemplo Práctico:**

1. **Hacer un archivo inmutable:**

   ```sh
   sudo chattr +i importante.conf
   ```

2. **Intentar modificar el archivo (esto fallará):**

   ```sh
   echo "Intento de modificación" >> importante.conf
   # Resultado: Permiso denegado
   ```

3. **Verificar los atributos del archivo:**

   ```sh
   lsattr importante.conf
   # Salida: ----i--------e----- importante.conf
   ```

#### 6. `s` (secure deletion)

- **Significado:** Los bloques del archivo se sobrescriben con ceros cuando se elimina, asegurando que los datos sean irrecuperables.

- **Ejemplo Práctico:**

1. **Agregar el atributo `secure deletion` a un archivo:**

   ```sh
   sudo chattr +s secreto.txt
   ```

2. **Eliminar el archivo:**

   ```sh
   rm secreto.txt
   ```

3. **Verificar los atributos del archivo antes de eliminarlo:**

   ```sh
   lsattr secreto.txt
   # Salida: ----s--------e----- secreto.txt
   ```

#### 7. `u` (undeletable)

- **Significado:** Mantiene una copia del archivo cuando se elimina, permitiendo su recuperación.

- **Ejemplo Práctico:**

1. **Agregar el atributo `undeletable` a un archivo:**

   ```sh
   sudo chattr +u recuperable.txt
   ```

2. **Eliminar el archivo:**

   ```sh
   rm recuperable.txt
   ```

3. **Verificar los atributos del archivo antes de eliminarlo:**

   ```sh
   lsattr recuperable.txt
   # Salida: ----u--------e----- recuperable.txt
   ```

### Resumen de Comandos

- **Agregar un atributo:**

  ```sh
  sudo chattr +atributo archivo
  ```

- **Eliminar un atributo:**

  ```sh
  sudo chattr -atributo archivo
  ```

- **Verificar atributos de un archivo:**

  ```sh
  lsattr archivo
  ```

Estos ejemplos muestran cómo se pueden usar los atributos especiales de `chattr` y `lsattr` para gestionar el comportamiento de los archivos en Linux.