---
layout: ../../layouts/MarkdownPostLayout.astro
title: Descriptores de Archivos
author: Fabian Martinez Rincon
description: "Después de aprender un poco de Astro, ¡no podía parar!"
image:
    url: '/posts/linux/archivos.png'
    alt: "Miniatura de los arcos de Astro."
pubDate: 2022-10-04
tags: ["Bash", "Linux", "Comandos"]
category: Linux
---

- [Link del tito Savitar](https://hack4u.io/wp-content/uploads/2022/05/bash-redirections-cheat-sheet.pdf)

Un descriptor de archivo es un concepto fundamental en los sistemas operativos Unix y Linux, que se refiere a un identificador único asignado por el sistema operativo a cada archivo abierto por un proceso. Este identificador permite a los programas realizar operaciones de entrada/salida (E/S) de manera controlada y eficiente. Aquí te dejo una explicación detallada de lo que es un descriptor de archivo, únicamente desde una perspectiva teórica:

### Concepto Básico

Un descriptor de archivo es un número entero no negativo que actúa como una abstracción del sistema operativo para manejar archivos abiertos. Cada descriptor de archivo está asociado con un archivo específico o recurso de E/S, como un socket, una tubería (pipe) o un dispositivo de hardware.

### Asignación y Gestión

- **Asignación:** Cuando un proceso solicita abrir un archivo mediante una llamada al sistema (por ejemplo, `open()` en Unix), el sistema operativo asigna un descriptor de archivo único a esa instancia del archivo abierto. Este descriptor se utiliza para todas las operaciones subsiguientes en ese archivo.
  
- **Tabla de Descriptores de Archivo:** Cada proceso en el sistema tiene su propia tabla de descriptores de archivo, que es mantenida por el kernel. Esta tabla asocia cada descriptor de archivo con una estructura interna del kernel que contiene toda la información necesaria sobre el archivo, como su ubicación en el disco, el estado del archivo, los permisos y las posiciones actuales de lectura/escritura.

### Propiedades

1. **Identificación Única:** Dentro del contexto de un proceso, cada archivo abierto tiene un descriptor de archivo único. Sin embargo, diferentes procesos pueden tener descriptores de archivo que apunten al mismo archivo subyacente.

2. **Tabla Global de Archivos:** Además de la tabla de descriptores de archivo específica de cada proceso, el sistema operativo mantiene una tabla global de archivos abiertos. Esta tabla global contiene información compartida entre procesos que acceden al mismo archivo, como el número de procesos que tienen el archivo abierto.

3. **Persistencia en Sesión:** Un descriptor de archivo permanece válido y asociado al archivo hasta que el proceso lo cierra explícitamente (por ejemplo, mediante `close()`) o hasta que el proceso termina.

### Tipos de Descriptores de Archivo

1. **Descriptores Estándar:** Al inicio, cada proceso tiene tres descriptores de archivo predefinidos:
   - `0` (stdin): Entrada estándar.
   - `1` (stdout): Salida estándar.
   - `2` (stderr): Salida de error estándar.

2. **Descriptores de Archivo Ordinarios:** Estos son asignados por el sistema operativo para cualquier archivo abierto adicional.

### Operaciones Comunes

- **Abrir un Archivo:** La llamada al sistema `open()` devuelve un descriptor de archivo para el archivo solicitado.
- **Leer/Escribir:** Las llamadas al sistema `read()` y `write()` utilizan el descriptor de archivo para realizar operaciones de lectura y escritura.
- **Cerrar un Archivo:** La llamada al sistema `close()` libera el descriptor de archivo, haciéndolo disponible para reutilización.

### Importancia y Ventajas

- **Abstracción de Hardware:** Los descriptores de archivo permiten a los programas manejar archivos y otros recursos de E/S sin preocuparse por los detalles del hardware subyacente.
- **Control y Seguridad:** El uso de descriptores de archivo permite al sistema operativo imponer controles de acceso y permisos, asegurando que los procesos solo puedan interactuar con archivos para los que tienen permisos adecuados.
- **Eficiencia:** Facilitan la implementación de mecanismos de buffering y caching en el nivel del kernel, mejorando el rendimiento de E/S.

### Conclusión

Los descriptores de archivo son una pieza esencial de la infraestructura de gestión de archivos en sistemas Unix y Linux. Proporcionan una manera eficiente y segura para que los procesos realicen operaciones de entrada/salida, abstractas de los detalles del hardware subyacente, y permiten al sistema operativo mantener un control preciso sobre los recursos de E/S utilizados por los procesos.

![image](https://github.com/user-attachments/assets/6afd7c46-5703-4ad4-a7b0-9847a0b54d21)



### 1. Redirección de Descriptores de Archivo

- **Comando:** `exec 3<> file`
  - **Descripción:** Este comando abre el archivo llamado `file` para lectura y escritura, y asigna el descriptor de archivo `3` a este archivo. El descriptor de archivo `3` ahora está asociado con `file`.

- **Comando:** `ls`
  - **Descripción:** Lista el contenido del directorio actual. El resultado muestra varios archivos, incluyendo `file` y `README.license`.

- **Comando:** `whoami >&3`
  - **Descripción:** El comando `whoami` imprime el nombre del usuario actual (`fabian`) y redirige la salida estándar (`stdout`) al descriptor de archivo `3`, que está asociado con el archivo `file`.

- **Comando:** `cat file`
  - **Descripción:** Este comando muestra el contenido del archivo `file`. El contenido muestra la palabra `fabian`, que fue escrita en el archivo por el comando `whoami`.

### 2. Uso del Descriptor de Archivo para Entrada/Salida

- **Comando:** `pwd >&3`
  - **Descripción:** El comando `pwd` imprime el directorio de trabajo actual (`/home/fabian/Desktop`) y redirige la salida estándar al descriptor de archivo `3`, que sigue asociado con el archivo `file`.

- **Comando:** `cat file`
  - **Descripción:** Muestra nuevamente el contenido del archivo `file`. Ahora el archivo contiene dos líneas: `fabian` y `/home/fabian/Desktop`.

### 3. Cerrar el Descriptor de Archivo

- **Comando:** `exec 3>&-`
  - **Descripción:** Este comando cierra el descriptor de archivo `3`. A partir de este punto, el descriptor `3` ya no está asociado con ningún archivo.

### 4. Intento de Usar un Descriptor Cerrado

- **Comando:** `ls >&3`
  - **Descripción:** Intentas redirigir la salida del comando `ls` al descriptor de archivo `3`. Sin embargo, dado que el descriptor `3` ha sido cerrado, el shell (`zsh`) genera un error: `3: descriptor de fichero erróneo`.

### Resumen

1. **Apertura y Redirección:** Usaste `exec 3<> file` para abrir un archivo y asignar el descriptor de archivo `3` para lectura y escritura. Luego redirigiste la salida de los comandos `whoami` y `pwd` a este descriptor, lo que resultó en que su salida se escribiera en el archivo `file`.
2. **Contenido del Archivo:** Utilizaste `cat` para verificar que el archivo `file` contenía las salidas de los comandos redirigidos.
3. **Cerrar Descriptor:** Cerraste el descriptor de archivo `3` con `exec 3>&-`, liberando la asociación del descriptor con el archivo.
4. **Error al Usar Descriptor Cerrado:** Intentaste usar el descriptor `3` cerrado, lo que resultó en un error.

Esto demuestra cómo los descriptores de archivo pueden ser utilizados para redirigir la entrada y salida en Linux y cómo es importante asegurarse de que los descriptores de archivo estén abiertos antes de usarlos.

![image](https://github.com/user-attachments/assets/f67de665-fc74-4305-a280-ce6db61f0dc1)

Otros comandos de Savitar

![image](https://github.com/user-attachments/assets/7d2d0db3-aa59-4f4d-b8b4-998a121932be)

---

La línea de comando que has proporcionado es:

```sh
whoami > file1 2>&1
```

Vamos a desglosar lo que hace cada parte de este comando.

### Desglose del Comando

1. **`whoami`:** Este comando imprime el nombre del usuario actual. Si lo ejecutas solo, simplemente muestra tu nombre de usuario en la terminal.

2. **`>`:**
   - Este símbolo de redirección toma la salida estándar (stdout) del comando `whoami` y la envía a un archivo. En este caso, `file1`. Si `file1` no existe, se creará. Si existe, su contenido será reemplazado.

3. **`file1`:**
   - Es el nombre del archivo al que se redirige la salida del comando `whoami`.

4. **`2>&1`:**
   - Esto redirige el flujo de error estándar (stderr) para que apunte al mismo destino que el flujo de salida estándar (stdout). En otras palabras, cualquier mensaje de error generado por el comando también será redirigido a `file1`.

### Qué Hace el Comando Completo

El comando `whoami > file1 2>&1` realiza las siguientes acciones:

1. **Ejecuta el comando `whoami`:** Este comando determina el nombre del usuario actual y normalmente imprime ese nombre en la terminal.
2. **Redirige la salida estándar a `file1`:** La salida que normalmente iría a la pantalla (el nombre del usuario) se escribe en el archivo `file1`.
3. **Redirige la salida de error estándar a `file1`:** Cualquier mensaje de error generado por `whoami` también se escribe en el archivo `file1`.

### Ejemplo Práctico

Si tu nombre de usuario es `fabian` y no hay errores, el contenido de `file1` después de ejecutar el comando será simplemente:

```
fabian
```

Si hubiera habido un error (por ejemplo, si `whoami` no fuera un comando válido, como en el caso de un error tipográfico `whoam`), el mensaje de error también se escribiría en `file1`:

```sh
whoam > file1 2>&1
```

En este caso, `file1` podría contener algo como:

```
whoam: command not found
```

### Resumen

Este comando es útil cuando deseas capturar tanto la salida estándar como los mensajes de error de un comando en un archivo. Es especialmente útil en scripts de shell y en situaciones donde necesitas registrar toda la salida generada por un comando, incluyendo errores.


---

Claro, vamos a desglosar en detalle la redirección `2>&1` en Linux y otros sistemas Unix-like.

### Descriptores de Archivo

Primero, es importante entender los descriptores de archivo estándar:

1. **0 (stdin):** Entrada estándar.
2. **1 (stdout):** Salida estándar.
3. **2 (stderr):** Salida de error estándar.

### Redirección de Descriptores de Archivo

La redirección en shell (como Bash) te permite controlar dónde van las entradas y salidas de los comandos.

- **`>`:** Redirige la salida estándar (stdout).
- **`2>`:** Redirige la salida de error estándar (stderr).

### Desglose de `2>&1`

La construcción `2>&1` tiene dos partes importantes:

1. **`2>`:** Esto indica que estamos redirigiendo el descriptor de archivo `2`, que es `stderr`.
2. **`&1`:** Esto significa "redirigir a donde sea que el descriptor `1` (stdout) esté apuntando en ese momento".

Cuando juntas `2>&1`, le estás diciendo al shell que envíe cualquier salida que normalmente iría a `stderr` al mismo lugar que `stdout` está redirigido.

### Ejemplo Práctico

Veamos un ejemplo paso a paso para entender cómo funciona:

#### Comando sin Redirección:

```sh
$ ls non_existing_file
ls: cannot access 'non_existing_file': No such file or directory
```

En este ejemplo:
- `stdout` no muestra nada porque `ls` no encontró el archivo.
- `stderr` muestra el mensaje de error.

#### Comando con Redirección de `stdout`:

```sh
$ ls non_existing_file > output.txt
ls: cannot access 'non_existing_file': No such file or directory
```

- El mensaje de error sigue apareciendo en la terminal porque solo `stdout` se redirigió a `output.txt`.

#### Redirigiendo Ambos `stdout` y `stderr`:

```sh
$ ls non_existing_file > output.txt 2>&1
```

- `>` redirige `stdout` a `output.txt`.
- `2>&1` redirige `stderr` al mismo lugar que `stdout`.

Ahora, el archivo `output.txt` contendrá:

```
ls: cannot access 'non_existing_file': No such file or directory
```

### ¿Por Qué Usar `2>&1`?

La redirección `2>&1` es útil cuando deseas capturar toda la salida de un comando, incluyendo tanto la salida estándar como los mensajes de error, en un solo archivo o canal.

### Orden de Redirección

Es crucial que `2>&1` venga después de `>` cuando rediriges ambos stdout y stderr:

```sh
command > file 2>&1
```

Si lo escribes en el orden incorrecto, no funcionará como esperas:

```sh
command 2>&1 > file
```

En este caso, `stderr` se redirige a `stdout` antes de que `stdout` se redirija a `file`, lo que puede causar que ambos flujos de salida no se junten correctamente.

### Resumen

- **`>` redirige stdout.**
- **`2>` redirige stderr.**
- **`2>&1` redirige stderr al mismo destino que stdout.**

Esto es extremadamente útil para capturar toda la salida de un comando, especialmente en scripts y en tareas de depuración.

---

![image](https://github.com/user-attachments/assets/28d74c84-51f5-4bb2-8afb-37451ae61812)
![image](https://github.com/user-attachments/assets/8e8194c4-67fc-4dfa-9d2c-b30cb95966b0)
![image](https://github.com/user-attachments/assets/b7ed2e2d-84bf-4254-a17d-610b7a661080)
![image](https://github.com/user-attachments/assets/93341454-c603-489d-947f-8cc383e05a6c)
![image](https://github.com/user-attachments/assets/3eb79d9a-7a1a-4564-9036-c6197157ceec)

La línea de comando que has proporcionado es:

```sh
whoam &> file2
```

Vamos a desglosar en detalle qué hace cada parte de este comando.

### Desglose del Comando

1. **`whoam`:**
   - Este es un comando incorrecto debido a un error tipográfico. El comando correcto sería `whoami`, que imprime el nombre del usuario actual. Debido al error tipográfico, `whoam` no se reconocerá como un comando válido y producirá un mensaje de error.

2. **`&>`:**
   - La combinación `&>` es una forma de redirección que redirige tanto la salida estándar (stdout) como la salida de error estándar (stderr) a un archivo o dispositivo especificado.

3. **`file2`:**
   - Es el archivo al que se redirigen tanto la salida estándar como la salida de error estándar.

### Qué Hace el Comando Completo

El comando `whoam &> file2` realiza las siguientes acciones:

1. **Ejecuta el comando `whoam`:**
   - Debido al error tipográfico, este comando no se ejecutará correctamente y generará un mensaje de error.

2. **Redirige la salida estándar y de error estándar a `file2`:**
   - Tanto la salida estándar (stdout) como la salida de error estándar (stderr) se redirigen al archivo `file2`. Esto significa que cualquier mensaje de error producido por el comando `whoam` se escribirá en `file2`.

### Resultado Esperado

Debido a que `whoam` no es un comando válido, el shell generará un mensaje de error que se redirigirá a `file2`. El contenido de `file2` después de ejecutar este comando será similar a:

```
whoam: command not found
```

### Explicación en Detalle de `&>`

- **`>`**: Este símbolo redirige la salida estándar (stdout) a un archivo.
- **`2>`**: Este símbolo redirige la salida de error estándar (stderr) a un archivo.
- **`&>`**: Esta combinación redirige tanto la salida estándar (stdout) como la salida de error estándar (stderr) a un archivo.

Usar `&>` es una forma conveniente de capturar toda la salida de un comando, incluyendo cualquier error, en un solo archivo, lo que es útil para la depuración y el registro de comandos.

### Ejemplo Práctico

Si corriges el error tipográfico y ejecutas el comando correcto:

```sh
whoami &> file2
```

El archivo `file2` contendrá el nombre del usuario actual. Sin embargo, con el error tipográfico en `whoam`, el archivo `file2` contendrá el mensaje de error generado por el shell indicando que `whoam` no es un comando válido.

### Resumen

- **Comando Incorrecto:** `whoam` no es un comando válido.
- **Redirección Completa:** `&>` redirige tanto stdout como stderr.
- **Archivo de Destino:** `file2` recibe toda la salida (incluso los errores).

Este tipo de redirección es útil para asegurarse de capturar todos los mensajes producidos por un comando, tanto exitosos como errores, en un único archivo.